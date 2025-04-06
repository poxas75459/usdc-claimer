/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2XcjNDEJPuz6aGA1XGMfFyWMPHJsRGviudZrhrskQZhvcA54zNNKzHv2evBrN9rDreGvefWe9GqXoXcSLHEiRbZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uTzz5GTSLQhjPMVQbXbs6LEB8Anyzbxyi6JBuvKJ4foTV7XtdU9rCxSU9fAkUgdkLCeJM9PT2EWAGaVQsec2CJ",
  "key1": "3DngfXG3zpPw992Kmi9nAWWaSfAajib1nkaieaiC3HDd7QMaC3bVXr9kk9kE6pe4DGLmCVirCF8dGHrEhkdL7oVK",
  "key2": "2sQ5XV2NMJjzTm1gqqrayzZpkzjeyfBEJY6VyWiZ9XE6jHzDv36CqjPMKGLCtoZ9Hf7ynnGD67qF5JPyvRPP8dYZ",
  "key3": "4Nnktz2HtQ24j2jGcV85pzpY2ECzZb59mkdw1efMANQTyQ1N5d2FeV6S7tscocVreJNgBNByXwSsf4QL5uJJMxQE",
  "key4": "3Z1tgbq2DnARCTEUzaegZsJ4EWKPgXhKABERgcRsX6qHdSqrLGHHXkT7ft2zCxvxrHfHboj4v65CBUFntLRtwmBo",
  "key5": "3FehY11UgzpxWhGa8fmAXM59bTH2doTT8RjnyiqaqSSEvSWLayPxzUnEbk63CN8bd11tbGnSE1wv25KRQUue6VfX",
  "key6": "Kz6jTrgk6ShCBuB1vxGnC8nGsNAes3UxDa3nrXy1mzhHXqsJhWXSrLGeBvcLtNF2WkeEdGQGgSci59WQAcu9sTT",
  "key7": "3Ytsk4qx1K2pj88uCQ4gjNqXPes5ejLLtAwBfAdAuS44QX8JLnsTCx9n9FbtoHo727ZruaYSY3ZKCxRQDTLETckb",
  "key8": "7yb2dkMFaxw6QscJNr8ntJbByz99G4obaVLqHn3ETQwF3k4K6Hfu8XBcsXw1WHanxaSRbjnNpPi5WsEnctGEiUG",
  "key9": "3dp91vE36RCJsxZeXnqhzSvRcGudqQa9d1tnkcpowzyNS5JfxQu2iRdQYdgWyMj3bv1JG1LgvKmMkAhESBWUuays",
  "key10": "5i4LVtP2wDSxgwinT9G6aKwCMJ8bbF9the674QeVMinAUQhSAGxZX68Uk6cYeJ75XKP6S99EqpCxgv5Lw26uAnX",
  "key11": "3sdtFbKXCD56ELyRNj72GpVAEhdCBAu1GUweCgWXQmYZWbDemRk7kWUNNc4JWY7geTkn4BC98UAF3u5JRgZjvqo7",
  "key12": "36YLEqkkaqpBSSj5AKzoPPyXZM1idka8ZpGLbyGtCbvJcsRRagWSnDMUiP3poEiy3vGPhVEfj4Haw4BjAKYWEfMJ",
  "key13": "3voRoXgbDhBz2WntoXYJtWKucSBkGuUiakyikrA9wR6Yu5D9hm3bHYbA1981oZ94RJf5xEEMn6dcMte4t1zcJ9LJ",
  "key14": "rKsyGWq2xGc2XvDKt5sEazRs34K8GfT61pNtpQsvgwj1xKep55cvL9G1g9ihWqrXf88NW9wsZFpQbZW7iUDS9L2",
  "key15": "nV6G1KVkQXuHPp39CR5fd8NmwkfvvVT8BWQMXnWVaSo8FVM9m5RTaNfzFspdxFKeNhj7rFRbz7cXP349A1WhiHv",
  "key16": "2JgkeSZuLeJNDUGmY177WWHmzLquuju4pMxWjsez99zuYSm65AVnNvoFVhgEP58VFZeK2kKTH7soUtXqGaxceUHM",
  "key17": "49mgJK1jMJ3HdxyNpshgtcSVaQiaDVhwwEqQ5gbNXpZY1wvAKt41DKdaaiNXyoWqizGSuNdNEPbmGehYBC4DatuG",
  "key18": "55UEVzkQcoVqspTTsqDR1XYQJF3uLwCpGeBjGycihKyCTwiTuHUt6ong8mgojfSjB4nFAffDbSUV7z99LDLmGomE",
  "key19": "4iJyxrfEk6djnALcFfpHviAS1ZC7fvkitjzEtmgxvv4HpPcFR6XoMzuKcngHYLqn9jQTJRTYhHfG7VEvMjFqbuxX",
  "key20": "ix48MV3Fxd1dCyGUamu5xQZ9tDwyfHwYVSMEXy1vpo2dgfhaShLNSjV2wcbrbvy3iMNHHDB2VcuP9gfRf92eXLT",
  "key21": "2puvafy2AdMUEEoTsNXrDKWrRy2mcLyFVbUko4vGd3om3uxTqJ4J6kuXmcQpHWV7ZPu4aKAH1Rhm8TSd1bC6ZmFP",
  "key22": "362JZVzAMp3R1ZVuthSraNoADPXmPcKB1kd5ymwfUihfFdpAcKpG1mpTZiYKqpAEN6cpZxTaTE2RsR18XF1ZHv2g",
  "key23": "3iDMS2GLURhVezDRtN7btT1r4HagQ6oJ4rMB4cjy7SUUu7EwL6TF5Y9H4m9f21uYZo41LsBGoXND3LwS7EUo9rhs",
  "key24": "3s6NSYW4AhxyLMVfUhevkj4JFVoTLtB7iFvqqdeB31CMr5fLGSCHpSnUV3wYT3eHR8mAikvPV16G7LoW24oTE3ZQ",
  "key25": "aytvkuXF9tqChQBL3Tpi4BEfdZMwBPqztcEXjNGJ9BuqVWdpPKytiZURGBpkiFycvCNV1UgVrE66Nfd5xEJXnnn",
  "key26": "3BzfMBdqEdnEppNjiXuRoWrEGR4wCWBmkq6q55M2tPXSez61wz8DVHhDLU5vWCVggFDDxwdH6CdyLXzgCEiDVJTj",
  "key27": "3uJFL8jZQqgzLAxg8n6S1A874ndQDL4msy6LNrAzm4tiFHvgTxDaxobv18yoW4W831imzqs536FHf8AqXTiuGbjv",
  "key28": "2CtxDf5Puom7WDk5cLuDgMBtZAJGcsQwXvBMU4ZLAQZrBxYZQ91tHvK65N9U1iGdQG4QstzH3GDMpTDL3uuMAa5Q",
  "key29": "2uiXVukNtqe9SzXq4fcS6oWwWgjgfidfH4BEcHKx8xY7PLGeKcPeYNieJHZpicMmnzrstpaFLq8AJw3c5J5AjA57",
  "key30": "26AW5goyvPVFDtoveLdQFFMN73wphTc9VKt6g3MqSHy1LHrkptvik2p2tePzx3sXy9dYgrvr4n5pJ35rep7B1kmP",
  "key31": "ig7SLQfy5XWevufns4x7XDnbGeE18GtxVHmJGn6uNxUen8euWccG2Boz8XEfbWYaZXPtXiALXx888Y3iKWPbYPX",
  "key32": "4HY7227LXDcm3bBLyg22xqqa3r9ogQ2DYAJtNAfLBYUVDY5MoTrGLCwJUhs8vBg64fbmWrZ2HCmD5inFcq3QFLNW",
  "key33": "3AAUx8UbcRxSPy36gpTCA3gAzxWTUPKJm8pE9kA77tNnCLzWAsNAakXX2utVwZ1oShh2tkjEVbC8zf6LKTzsyUd7",
  "key34": "46SsYSXYesqaWJe9P2MmBis9wJrX9hMV98XuHkwtXQqUHdvBmb31aBjskrcaviqp42QCyZuV4qMpq46G1dZLfykQ",
  "key35": "4FoGja7YVHBK4Prah3QXdQaXkeKwHMjXdanxjq8VxyWfmuGyfX88EDj1247FmWankjdNtiupG4PKEs3uvd2jhe83",
  "key36": "SUEfdfAUz7PYGeNSuADRGc7PzFjXZov1VxGngcNS4rADa9GL5KmMkvT1vGLUgEsutRv3DTxSMnqwK3VLjJbZ9Sw",
  "key37": "an7eGaszGEQxE2XE79NUKUvSMrNfLwtqw6BxUm4Kw3TMbHoTjJ6EojvmbmqCtaqimBcJdQqo466tVenG2rxRPEx",
  "key38": "4bidVx1YnnAg6jB6APzMjTTsAaUAoS8KBaMzSWGJBvcccWFv5TGSd5Eo5CkFjrzFfzC8FqCZDh639FJTQGn4zi1J",
  "key39": "5MTvyVTmqsij4KZPPUU3EkGxPFCzfwYAhL4FStrWRWjD3aqVkuAXkCN3Fm6q8qTHPSFvrp52Beuh49Efg1sdwVYs",
  "key40": "45uFFoKMmXsbNMZoZQpR843KqhdMb536NZi3uNPnq6unuArH4dww2xjPQAbTHWx2EBH3HiEbqcAqdCNcieTATM4v",
  "key41": "489UNGJU3pVfP2CUDqxaVWh2NuECkFgT72oo8RduWVLeWFUGWAS5RfAyJ1kLJLEDGmhjBY81G5hFtYp1b7QtYSey"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
