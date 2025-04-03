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
    "2yhrwDYLVHFpZCb9wdS3rSUUXGKnQY6p2iuca5Vc7U365hgyXsN3C46CeicLzUxvTWpooFAVRpkYqWXuoNcdKxsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3re9SdSNxSxyUA5HBZsmPDdWB4HcWMCc3LpNry5PRbqdRgkB57kyCz2pTEo9F7eJD1bVwU7DXCSrJyAmkwD5JD6F",
  "key1": "6ZGsuEcPSWquWzbpNhuFy7PvQJg3r4vTgkEUsbUTgm8RmmbWvUzW1qvKwmzvfGS8G9J4p1gnoDjpgRcHY192WZZ",
  "key2": "2yXME69SGXNoL3kDsqr7HBZTMyLS6V5123jAaEYoTt5igprT2JgLNDypgC4BcoQtogxAn9scj9qo6XP6uqxwCDGV",
  "key3": "4TrT5oSEYQCAzHaZaFUfBg6y7UcxTYUPyCnqtd4vPb8caE2gmMnSW8fbtXqWT99LBMXoePJZoans5oPkimYgpxVq",
  "key4": "2pwE2n92RqsYcWpQ8cNWFhPZYB24a8UfqRA21PsQLJGJ4H4F53YNjHATEjrStZ6uEDUAGjTuYPVwQ1RuHPdooEq3",
  "key5": "5yvf3w4NaYnQbzHAwLLmGf4MFDWLop9WUR3Tg44dSGAtz3jEMj1CaHKt1xeXYgRtfA97uf83SHJ9vfcTS1MHZ6BS",
  "key6": "tY4wZou5w3p9dyG8gVhbL6dwD9eKxJC3gLLjZBx7paVN1Rbx7ihPxxfN4Q7DUBAseBR7qYKkiqc4MfikAH8dSMD",
  "key7": "5KCAkShkSE98eG9Di1UuooQqgQnhxuYLea6Xo5AZ9csexGCLjYqbz1aBkdXK2fMo5Pe4YwwPnZQFnpbLXuZE8UiM",
  "key8": "3r1iomQaSmEoWNGvRhTaMuNBCp8qKq8vGq9vZPLzgQGvnMbCGUiVKQz6SFg9Hwu1EW24zFHxnHhroDWRt9Fq9aHH",
  "key9": "5BucuxKCg9Dj2JxdbL6syPt1mKpq5RDBcbHknQhmtYbicGghxmZnACxadQfsHjnqUmCaCAarAXbVax43b1VGWAG",
  "key10": "3sWtvasLudCq3eUhnUmVUpT7moNPUECocxeomgBNjai3MVFGJwSLecGgqzjSVCfDj58X6BrWwEr6Bi9ERsSc4dgv",
  "key11": "dXppf7j4YVo8NN6U3ZJUDeAzuVkPrumLXrAhaWKL4mgFAxZczXKc29w33HfeKj9BbMeSoW22zq1sHBPVepr6dTx",
  "key12": "5oYTsUz4gvPVkVTAzcgsZXP4AUCLTUrMrN25Vur4edhYXHsa3kAs1W6BUwT3PZ7wDdRQwCtH1DWmEREDgQhLN7U2",
  "key13": "2CqujAZ4TaTCMPJBZRvARsXfucAWc5rxsvUTPAiGzn7uYzGzk1jjhVrJeWyMArt14qH8GJxo5BEmTc9X4UaMq5Hr",
  "key14": "5rSNuGh4k4xnEfkGZ5aaBh3rT5uWVfPZRRANwCGHL1TvSCNB9UCo1siGeGhMszRHKRBVKv1tGav1uuuMZzaKYTPK",
  "key15": "3oJPzeN57SJsVt9QTv4cMeSWbmJm4ybJfAV7iVAYMcjW9CExgKvehGFzzeMK8ddGgRcLLnyySHN7htb37X1tz4HH",
  "key16": "66bo6r4okUnU7ekyMo1QPjD9S1YmcQhm7oaGhEDVfd9LrBWkgp9qVkwnJjw5KQNKBncTtpicCcnBmD1gYL9m2DLw",
  "key17": "3HxMGLXRxYyxydjwPxreXpPkN3G8YDLyqa3YnCGzBtiB46tpFPxEg7KfzfGXebuWX3zABUkwHA3WM5TSbsnWB3g8",
  "key18": "2eM52PRMn9fADtUA7FFJdPFMd4m3bJMS4TPCmjKzHA2YUTgrVxBF1aeVuyfBMnAKZ4HsHVQAFHETx8wbwZ6kGsVx",
  "key19": "4m9Vqa8gTHTyEnNb1TznAaF1CSyoFdpFWjqL4ZSMEFFdN4xwzBLB4Vk3vnmnT9kKi8AszHSKRts43yUd1GF8kDLq",
  "key20": "2DQvHmMRhEE16GXpdoA3AkuwWfw4LgUufVX8uqpLfyyi4gg1JGYJw4kPkpDj2n6SfTj6xeGHspJyZYU4QFCbm8Fq",
  "key21": "4BqKJyUSGXszTQLBHc2zoS3viTTX2aVdoG9pzhWdnPMz1pZeHhnvYr6ZfTXYUcaqgeB1EKeTyuPQNE3dbcvGS77X",
  "key22": "3kaWSeQ9E92v2uB3gkWgjDm1ytxCsyQ2viVzSqExLhsouAypzvkTdTfMgoPPnCXLwhhGjWBxvV4pkJb8FM7EJCyg",
  "key23": "2HSW21M373cUbm7LBND9AVSN7VNtw4Z5UkJxW5mjXbcHbjyNkYS9QtJywc6Bx9ZPKxPQMbJF68n7tyJqSvBkKvMg",
  "key24": "3sPMyvJP6y3fXk9j3VHBJmzMysxCiQp4AMb572SFv3Rz1yrbRrriAbGC1NfYbrFFFgkAVhpAKVETac2R8JXXv6X8",
  "key25": "2t61v8bfpuqcLuFN8o9wEUWnE6sANiLrRcpzzHJbMZeSzCwGdaXahb3nBMbmiST7YtVyDe5RSyrFJbWHVfsNY782",
  "key26": "5cX6xgkon6YUFRiV2xPejrKCSdKfSSc8rtxoesjxPhGjhfG8N3gDftNerfiLYjeVk7n6ZcSLetr2pvci4WzLBGtt",
  "key27": "Ze7Cg4hk5nMY5Ubmddvuq3ARjnBFx61YGom2skF76atir1Sgs7smXVqtvmHq6P3t26ZMVQRn1hooPL3X6ZHKNfx",
  "key28": "xgHjxNpbqWhCzZxDEtTQTgqctEDX7RCghtcei6buTwvKwNCRy6z5BFtvKErNCG2p7Ypiy4mDfiPPvDEH92veduk",
  "key29": "3QCqMUrmrKcvxpwuRoCJjvno6nuTD1N8Lc9iq1dqm5ZpU5BwtYYuhpegJnhpJu5umdZPau6CYDnHc2vrsgY3W4Nr",
  "key30": "3cR39J57s4pqvR2Ctt7AWAVRwX7Gg8vT7FYZ2SBceZBQFexKg7NMmoWyBNpCynESZZAzJ7Dmz9nP6hUz95Cb6n4",
  "key31": "4oymucao5RUBpQGf6t2LvzpfQF3uHqQDWz5DqWCQeuYDpo7K3kkXf3ijczyoUx2QHaByo1dpNHuPeVfbEUsDQLVL",
  "key32": "5hwNQVpNFMGyaJnoG1zqGYT9X8JMdQuLCggxWQyXU7KWQEeAdF3m9iVZugFMUXpFR7Lf83AgVBdXi6spbvaJJcU3",
  "key33": "22VF5AEhwW5vjtR2quMRCNAqKQ6DhoWdXLV4V5WTQ3igi7gMLn2B1Sv5Poxw5mxZiZbgnFnbnQYkxcg4kA8C84x5",
  "key34": "3TzwNioMPxVoV5vfFiQ4Zp1mcPgqbfuZoX2XtXZXnKkeahXQpKJqU63Uvne6oFD4ZaCqUCzPo7waHa8XS9cupew1",
  "key35": "5nCUa3ZcmrnJK8Tm71kk9pBLSRJqG9iGgP63BcCs5hck3QZFS1FfC5cAgnFcXnFwDcVMZ1xQvDP9Hjb2G8rWpNZ7",
  "key36": "4g89UMYvwQzTQnUpitUBGexq4czsTKmUSEbG35FLnpzYpVihndmL38FWcvVWtz5Ds4Dt8K5LtJHcnydmPJnMYXeU",
  "key37": "43N7i759iy37msr8W3e5nYMzNWPsjcuhGpGgSJwsNLYy5G4QbpkxZbnkXWAwtqA38gUCY7nmBdG7gmpw88rGS1Nh",
  "key38": "VJdZRMMAyzB2Zn3iU2eDJhfqUez1uXSKiS4rBxnP4bDksD31G8d5aVfQ2zg1p5WPJLkuduhJ1UWXUPDYh73HUCp",
  "key39": "cPUFHjZDkH8NkeybinqSHbbunnQPBa9ZmiYg983vLMDjC74MWJU9SSTdgkrdcoU3SisLk5FTAAmHC9jFCjkSqCt"
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
