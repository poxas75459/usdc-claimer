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
    "65JCm3i8fovz3MQu32a6R9w6HgDyDYPGLnxand2QyDeuSBUg9KsPFXSNupY9fCK29DqW5nTRno8o5C6TUSp3ZRQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWuNZsTt7BQHFy5ZUGTrfCX5wxMa3SkW4kpQ5g7PuQHo62P19AD6po84Wy6qzoJLJnPiNdcSLbNLx6bBC3YiRB3",
  "key1": "4Xrix6qR1vMToXMzJLyhMWnXbVgNApGwt9e7uCzW7dCxpYePyKfFwF6a59xSdz6ePXFFCxogx5W84guhwvutCxTU",
  "key2": "4CM8fKQxsSp429ASpbGmZ8Q6fNXGHbnSJd2Buxp3R2bbsh6KT7BfYAChbHXmKEFKX4XKYYVoozapV6SNbnBji2ht",
  "key3": "4Q6GWjtQiarnuxHRF6DfBAbJuAq31wU52oUuCfw6yTd7G5K1hgSVdCYqyiRSLTzoixz9TVPvWdtLdEADYATQXaC9",
  "key4": "2j6PbZWehCYMoCME29mZm3MGGbdLBpaXxiS4sbrC67oSQG9hbWrgKkYBYL27sgAiWSHrubPxBhTp7a7Ex7F9Anwq",
  "key5": "2c3dcmKAck6L2wZaUKACHaahTwJt4eocpzUe3D6L1MqhduSFzq91h3ik5PcnS1E3eiZafmasP2ruzyt2HSHkosz6",
  "key6": "eH12RJC15JzXL96BquDMTTre6ruHVGE4QNfZV8EHC7t9FoSSHE1mjrwHPrRSCnRHs32xxZeeKaa4ishZMSwFesN",
  "key7": "4v7oi3dDmABqkGFqBp548fyCx1486LFUEWCVXpFu6BEhXGT1q3A95UYz4yhUy9iamhauSBLShQ4RARRh6Co6iw9U",
  "key8": "5EdWpVkK1DKD87hZEcFLsMsd5Ti5jU7feD9PbHseE8HcLonRCBpMMBKSx4rbAt4yttzzdXoo5kr6sBeWFkdHxzyy",
  "key9": "bF2wvStTHXboyqWTFZccYGdYCSP184q2jPyLwBpSFDzhVFThNjdQhM8dNbgji5uCQ4Bx8dFk4hUX7NTqWwVYCtq",
  "key10": "2D4poZ7Gq6ZtHLg72vqVJUZKDsvJafkVmkPr6VRzYSW2DMZDxPb5rq3qdmHiJrMbRJ8R8SJEVWB7vB2sM27EzZw3",
  "key11": "4MGRhBfbXzNovZysz1fB1SMmfL4qSMRejEev4c7EZSkHV6iZi1umikNMsdNxVTZKSaQRsXvKo9TJ612aGeU9UwYt",
  "key12": "3hkXeocFhPR42w7P2Yf9d52DHuUeoFnsbi8SsmbWNehNPzQpzYp3jv3a5T8mdXHuxoirpYJNQgByyAPTKH5sxuaX",
  "key13": "3VGGV1UGYPcJEBnW43TYW8QLzv1CnFAJJH4hadWTxBDCWd4sGWC3hPBLDJYTvrE6KP6F6FvCN5rdK5AaEYmLuwq8",
  "key14": "4T2LyaPcQgmLDRUBg8ibQfktGTJTBDqHce7XzyevjYkuWsfJeQtTdqBQJgznDd4CQ5de7QAZT1YWrav8uSt98KDz",
  "key15": "3EoYt991Pu798QHDZ5RxBoBPegcRoAxZqHScZiB84ynvm3qfbwod1P5Zv3c8U3Z8MEXgdg4pp75RWRFe9NYC8xbr",
  "key16": "3VxQR681bPkG3RiqYJHBTLp9pLhzboiLTaCZDyH6Z7yWzieyi6ke3daLFDA1LWKEiVMYRMi8hyQEni1vuQtrYXjx",
  "key17": "2JBnY4Q89HuNX6WA4buPS8kt8AvQ3qShwNDhhrWn1vewC8jbqXgKVFCJQFDphNd2qQ1cPKeXbNQb9HRn39M7hX2b",
  "key18": "4kC75CGdvFgwEoRjmW2VnAfC91HLYNHjnSFGZhWLyX4gADmYX9zQDqMNtf6uwu9gGHafQha6aKUYv7RrxpXqqFQ9",
  "key19": "4mYdpE1HjB3D96fVJWsRgFuo7EqeYoeJMtnAgLEhwjXzYxgwXHzeNGQMSmaxVa6s5jn1TkPcVB2AR5p1V9U5Zxat",
  "key20": "DAGYxJRd8Ysh71o36mi4sUzBtCrJBc1zSyprrBSq6d2zmmSF82aCxQKTMuscbwF3SsxgFEVzwBBj5F6jfCjzKN9",
  "key21": "24dVuEqQex2no1W7EzCYpRrCcbz9cNJYa7q9f78FYZLXPSkidva12uoV8677nTaNC6vWmA2CwLEHMKSextPYKmKo",
  "key22": "VS2Sy93NHkXTWw4nxtu5429qF91F7v26du4aZnpgexQbnREtPtwkGBhudf7rtWjGqoMU1Efk8FWHhPACF19mfgt",
  "key23": "PF3JDV6o1vJiFXB6iVxh9Tpcwtb1D1T9uVBrQA4TuUp9VocUA2UpM83nc2heaHrekhCXJhsRPfA2nLSy2C7yAD3",
  "key24": "H3pYBSNwUn3MBzeYQWLPMNSHnLEQSux82DWsmUFAZjTikGSfhEmVhZdAZ1n9m9t3isu4yEWpTHMM5PLeUBbDs61",
  "key25": "3t8G7ZrAHuK3vhDEUnNcDUDVxsbLTS1mrJGFUiER6sqmzc9KXPhTeAvoUVbB1pVPN5D65XJzuVMtWG9AdQESYn1D",
  "key26": "2qTjo2YZiCAyoRzjr1QP98ALM16LHr88NSE5Gce7cJyJWGJ5VbtgVJeqcSn24u84DUETNebLiPUzj1vUEmnRsnbE",
  "key27": "KaWN7vxgpaAuhXQApFDKXgLGaVA4TGnQm9ay2gpfzCfkqRc7Des3AagPJsW9fCVbeys8eN9FXB4PDHui7SfKNDP",
  "key28": "61JGRE1kP16crag3w5vBggyWirvYUgozMgqMusUeN7bsUzRkHTcDkk6DBq9bNmuhUzAhanfQkSTbseE3jBZ1ProK",
  "key29": "3K1aouxMMWkpPayPC8cCXXuHZYHJjAhVsmJvDZeGQjVUuxVfeMQazZ4cNHMcpvDUoW4EiHNo1F3B1Fpv32FXtqMe",
  "key30": "57bM53R9Snjtki3YV6i9CiduAFSLY921M2iXMzx231q9joYMQ8DDWakbuLziD67kLAxNCyH9wHNC91qRsoiGLnCr",
  "key31": "4Z4Njwq2ymSEKj7xtSFYWJjVvCu4xG2nDzZ8gkRKKPxEG5hWd5oAFuhq7Fj3CJteX3BkJskvXuF9YNhEPXSn3Jhy",
  "key32": "39qc7YbopBzwTNusxCV4NKvKsAaHFxBPsAxQS3Mf7GM1ZN7gKiKEXpP4nCXorijjHB9NRVPaomLzHTeeVZDdcHFv",
  "key33": "5MywvvcicPavLboLPG9uk5uoruomBzLTQZuXxZL5TadsYHTdtGLNxpVXv4HuQGRe8mo847QyXJFcmmK7XKyDTnAE",
  "key34": "8YaiFjEDN4zfBFFcRx43LVDhwAwTusKUoZ2H9VfaxQDtz1MTLqGWuDafFDSbLiGY3o7VvfbAtj1ySipqCtNgyrZ",
  "key35": "2csjzuBFFjGeeRJex45FkEP4Q6jNHmoXTfX8RXt7LQivac1RpcySvW3v68WdwzBq7GmqoMT4S2pE6mW17kRDgQBL",
  "key36": "3RTMhWncwkr6zDrciswTGGCsqMMJgQJeQqUUYDDTHyiNgsHU7LhbPaVJoXTTwgwpctTQsB3Ru8qRs4KM9ZWRRSDr",
  "key37": "NShokUxsHnduD8a5hWTKbANskJud4LK77hE5wG6TqGDb1noTd3i29nFKnkc3zCmHabFmgyVWygNbtRKD1KangJX",
  "key38": "2r9SX6o7Vew6fvQoTCuWkupX9mbVhMGfesRwFeaJrY2gb8xxAvwrwGU9WKsztVtqEPGn4act5iEVSYepEEiuCHUK",
  "key39": "4VdoTQ5G926xQw5VvaNSgpFkWFYqWLJmKsRhMHCK2oT7pSwsmRxFthDyt24SUumDrtQZd6kXU1AiWpDeRGxj22JG",
  "key40": "4GvEBg6FrcpsoAR2nhsEMV6jdnpWkFiXE1FcKdTPwk3c5RPS1LVaxicfCGfHvoArxStk3WfrRPE34wzimsokL51G",
  "key41": "4AVfEkbVKj7bV4SBgQZwhzrvvG9DzW5FuNfs36QPvBtqm7WBowZCXYGiS5n3fxSb8exMnExLkfSpuV7xoHEo3CXe",
  "key42": "5co4Gn8VrdywK2kAzGr7zKrN53VsnR7YkzfYdnueY62A7NfjVKEgL99YhkittiCMUngNTBATPDXYs4oQW34fMQpj",
  "key43": "5RtptPNQGWzccvkKzzSZmzA39j4NzBuXSxyXb6LRG8umXzSV9vnEYvZQ2KSThg45tfRMtFsuucHtEoVq6oeVapwt"
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
