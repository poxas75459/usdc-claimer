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
    "2mdZwc9HRqHKA4k1zdJUpsg69ABWQt6SqYCW5soLyLHkXjWGeB4PeLfaA9KgcZk6qxcXyzGyokiFuUaoX4oMe7X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "br2NBoKY1Mwj9cSZP95vTYhvgbxxLwyzustGUpfUeVLfGNc1Y8D8JciLKd1hrfxVNj1agGGRdhvjNDRmVASu3RR",
  "key1": "4vjFfUzZq116gTw5qiqBkaWKKZyid7NnzZmp4dGxCEjy6LpU74eCGCP8SKhsXR76oYvnhWue6ybvvUFZSCg3hMkz",
  "key2": "4BUooXa3cNgxre8SaQFNUNsfYcDAexx9tUezf3mxMMufn5wv34gMDq1rBu3N4QMz2C7BheoHV1JYzF2dgxNxyomr",
  "key3": "5Pz9sAQc28TRPsK6x811nZ58ndPgToemhBor147MacfSmuzV9MgrTEotMf6FmBpgsxnjxDRUbBbbqeSC9vuNaVfH",
  "key4": "4ZKsjyhaq936bHbHLxpN4ip3YzYMvTZEG9oBASnYxjAscVze7oBMwHjw8AKbGisfeAfdJMNk9oCzwvvhQa6TkjHX",
  "key5": "4UCCLdLbzBNDFt2QF2VM6QGJDNRsjheMvRNGqvbec3XY2fk2KsJngewgJRmDqdrnidg3qHqDF6TCk44muNu1HEW7",
  "key6": "2yxefF4FtU3mgyGk7iGL4RQrXxRhfLm5FT1PkU2KYnK6oqFzzNC8zJTAEh7bMM3w6c4rc4eAzEY2eo8HVyNFHE6G",
  "key7": "4LXjDhUXNQDgvcoPgydf1ociGxRmb9poXsUT3ZXrXGG2Xh3pN3K2JRsuvw1XsoU3Sqc4wGUAhZyRo1UBFYe34r1q",
  "key8": "29WabHn3qwkxTRUy9U1nuDdv64kXqaGoWWZhxoiJH7UtUFTxaQj6LbmZbKipoFpUSo3WfHgEPxQZN62U5uxbvG79",
  "key9": "25oJE9CKX3akmAQFK9YXxvLUFNgBCQoKuWrSt36oKSULa4PjQJ1ZrxWP9vPnYoVozCkNVcsEcMr9JSiceWjyngwh",
  "key10": "3Z43uhE7MTB2YTVMR8UkgRXUpAUoQG3z9GPeQoCxemHz5vzPYurEvNpjFipgbHXrVqk4S9NYL3naiah1LXrkNskk",
  "key11": "367FKxsdmXS9jb9nqFMZiXUJ5WoDuHFvynk3dSoM2UDE1rsk9bLVpYC6gUY92NRYazX6dyycVqURNojjhK5ViG2L",
  "key12": "4G3zNfA5XGAFmCj2dA2Mgr5WkA1pB28Vjgy6WTfRs7bRGMK79XbHJzvv6hGa6KUqrMF8hkHew7Zkohirit1zCiqs",
  "key13": "vHTb2EJc8rvUoGZgmjreqKVy1jGYDxdG1DaR5yscphHZU1jG1ucmAMA39LSy2XZggrwSxenNL5dJmpGNtVJZFGj",
  "key14": "49nfoPN8N9XnouUhm6zzqRtJQUZ9Uv9fvKg4gNXzRRaqcgYvH9cXjPht2YsRjVY8C9H3TrUo3yoFstjmKMydXdS5",
  "key15": "5hdyr4TJYmNGMz86Px43PgMaxqZ6JNbwjuCUN4oFVrpmRL8X9oTeqP1qGPczcCBRLuwgcmV8HH32UB4iy18NV5c3",
  "key16": "2cjJduXARBJwYUvb1uaaiCWnGM8x2wGjWJJyUeyRgFUrTQY5Fia3FNSn1TMg7zR4NBzi1vxGBsKpyaaRwK5WZmL5",
  "key17": "2wG6NJUF7u2dWQzbquKqYJg6ngvRVL7BEGMBpnWiueu1X9T9vvkwyUcA7tKWkAudtdV2aEMXekRAaWyg1WCCXjQb",
  "key18": "gmBCLuGeWWySSm8C3uNfD7fdn3ZPv3poEkfn6B4bmPGq8J9cHza365QpMRtHyXsWZrsvygZAdUz4iwaLFJckpg8",
  "key19": "57ZrpGFLzDYU897Z3TovAHsZ7ufEw77Fj4PGsy9J9TTwSnHtsHurz2ySUa4CYQwNKjgh46j2r6uuzpjtu2XEjKYD",
  "key20": "5YoYV8dymkfroADXfJEMDQ3UHu52M1bDdmzq7AcUY4fiFXk8o1iEWQTKEUuZM8P7EfM41AXL5iP4Ae6A4MVMWBCc",
  "key21": "2EtJWy7nKvMRb78fHMXs45pC4YaQrk65gBVsx4B6sesee5KxxNTKsz4zCceP8R8DGVKMPwNE7mevXo9GTGyUL13X",
  "key22": "4sNbeVrpKvsZJBnfjjQZ7uNVijeaj77MCeQMFHHbEkxxosVWz8tYENoY9mzXmf9izmGTadFx9ggq1aTBDkLzHYFD",
  "key23": "4icS1qxy5RArvphnieGy5jeGyPuFuR4zkLoixMF1bPuRxNjCwWDD3ZWVo6FCap2AadDgyZTg81CUheoJTz8fjrVo",
  "key24": "673EYKMZxbSWpY7eEdbEwSCa5xstsiNgJRdxTVuQps8v2h5Y7JG6k3vhHiDnCkMBjU7ZS2VxsbzAVikjf1XCBepd",
  "key25": "DDEaJbUko9vrF6xLcDnFnA98KVfVjp3k5ubBGT3mMeceMTLJNgPLq6SWYh1sWxgwuFiMFRisQ134Kf5bzt13qcp",
  "key26": "4aAtXTtmGJ96PhDyir3PwF1nW6oF4caeXmtEyDT4BmGuTZvHFyzHBynfjhBe1jX5TPKoMrV28tohWQnKpkf4jPL4",
  "key27": "4dsj1NSwKZwUuisShNT7Rooi7FtU8GU93e9fWLED5opMcWMmgsmG9ZVrhhZm2G5uctXRfdets5P6FV3yjQozvu6z",
  "key28": "63TqbeWjxrJeh8uxMRRh7DB2V5L2h55SBJexxDNp65Mywy7SchDysm9qHxk4dZe7GJYnJVwAEHPJYHkLWxgCAM9Q",
  "key29": "aQ1zrEKKBHUxtZP64REPUBueJ2WYfsYJQ3ci8oPHLyLHZrgqiHqeo4zXsZfEQW93qgEiHv7bGGwD1pSxCJ8yGMM",
  "key30": "2y852mfM7WZfNangB5ZYAT679gNUWsE7QLcmkdseNKuCs9paLGrnZqV5pYE8QFCTfm1vPxq1tcTziReqQhiFcrFe",
  "key31": "5aZqwkzXRhrqQzUfaA5DWzneMfczGhM8iisQssQgGm4AzkhkKdLTQk7MG81XmgeTsNU4hpMadKxpq3xHGRWnfMDn",
  "key32": "4Um4NaJCx6SYZReyCsurT7CRVedHsDUpb6t3peQ7m43Dsnuot6v6TDhDvKTGMXDfdKf5Bhodu7FwfHvsezr2RegL",
  "key33": "5tQjRFbY85kAYgaDACiq3PUFNGaso3E1njgDyeaBDyQqWVgjcqqwnu4GYHfbpGBFHvXcRtUdcmk5oFhXcqtYZwa7",
  "key34": "5ir492CbTCZc41yrsWkumhkgpBhUvCr4Q1hgkG2fT82VEB6fTV91eaQo2KxBkBjySBzoB1LTrtQGYy2SUqmrNZ24",
  "key35": "pwMamz89kprV4GhVJhzm4vA7oCSJkJiYbpvYrZV21m1wY48WerRFdcWWbMQLW7XUZbEdwWD1dMxPxmAB3Hr9ggR",
  "key36": "54tfFBnVk3o8PaFJRA2tbKk5u3BkFiDU4rvSLzKMHPRes124vrqZEjFDRhYf2cMsYYCgessbEKvGVse3YkNe1DHz",
  "key37": "2rEqZtSqXdPHX4DeujsTBsuiX5pZVWwMPhZR2kEBMjTdQZeKPNkgJiYPZH2cZPpcNSYhXhnW9k2LAYehLeunXmM4",
  "key38": "2aEaJgokUJkixaqrf3DRctNhCaQetqE3Ze9UEuhuATJe88qxr9paNPA84E9QbFbGvXfXcfZLwBJgiJtFmSToXbf2",
  "key39": "5Cy3Pzs8UvHUoHJx8yy2ApYYRWZo5WxyK8Hf4kpYi2GbeAuShyEtiVJCyRiy9DUNt6Kb6xyTeoQ8PH2ZSy7WjjdD",
  "key40": "4xJBBWtsc67n51MppyjqX1pzqUZFN7qdiVCyUEqmovPKzqdz8P8feb2PxhC5mQkv47mZn7ezCJRMYmGKCJvc4Z6C",
  "key41": "1gFviBQLoEQz6nk769g13pLkfRstsoZqwfb3vrwPb7P4wUvcVa1VMtuTakHrUEgoYFnNPAgvjJ6NNboamgp3v2D",
  "key42": "2L9JZ5h9w3MhhaCoem5N52oGTtHBkBjzd1T5orPSK9sDzFsCQRbvrkWg4eaqtDsZ5ffMBtryqtLLNiNFipCc1JVj",
  "key43": "mAGRbvjHievNAoty2VFsV2kpANav8m68Ss8HrSyPibW2Wvhup4AwFuy6LnGDPfZLt9mCN3B3SmTUhzmRrufyG35",
  "key44": "4KwfY6SNce3XUqUG3HCP6MQodAJ4BZsAjRagc3SDvYB9FmbUk7GLG4ZEbAzNfbsKSh3DHAZANM98P7jm3A2Sy7jA",
  "key45": "39szdjigAb3nC5AUvVmrGsEKSmb8AiDBkE2vhybcjNvDLyEZ9tf25hefKb8hXh2UDcARSyry751cT57GwbhbTmkt",
  "key46": "2Ta1XpRAHCGiyKgNhnf6FXEicE335VXy11NE733soVZAvZqyyqD6jihHLkwcYuMg7s3MvJhSjyXPfEcFu865tCso",
  "key47": "5xiSfY12jYSt9iLD5zK1HZGCSX3h1Hqag74FiEZc22BH7STpq4kbpzkUphh4donWnJbvEZRfKYcEcdjT4femyso6",
  "key48": "4b3zM8WmHUvmNbpbmVEZ8hDA18Lvykmqmpm4QuYqnrprfjzrrz5apWP6qc5cxV9J1WF5yJW8kJAm2qZwb2wdz4eh"
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
