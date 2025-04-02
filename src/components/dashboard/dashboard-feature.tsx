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
    "65XucsQSCHZ4EsayWTmrdWFrjp6JrZUDYzdcw7wCDtyqtS6Mhjtax3Hw5PTiW4iHGTDdYqn82M5gGrbViZfkcpiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYj69Pq4ufEmLLHtDhnzhvUn6nz9ygSZyuqr8jby7kRJzjLbyXbk6n6DBP4r46epRKznM2zvTUL1zXTYkWRij2d",
  "key1": "2W1CTR3AEhhXEZqYz4HG5MvAda9kCxa7VwmZFj1wa4GsBTaAjEqy2ce4aaFK1JGDTZD9RWtYyBRRst1MX2Ao5La9",
  "key2": "gcouZGov8MRrhWnuXXYQjikQK1ZjDcktUURvFnZBQVNiQ9hgFyHeXXm7oFrSRR576p6dM9zijNPU1mizA8kbcrn",
  "key3": "2pqgCUHFzXqHzrwkKL55Cn5rTAo6tfaAChmpFMH8RfhoeYBhAntLRoRERm2Tqmv8nw73wZUFZvF3FBjcSVkrf3mH",
  "key4": "4HSYhy8gkQcsXNwADD2CtEmzymfvhYCHVqqgTPHx9ZmBxTY2fGqmjnbsNTUx6MiFzRfLi876dUem1vM5DeqdZp2v",
  "key5": "5Tz5HgZBFv2oijinLs7LLoWufUyuxXVongwLLXbx1QZyadQtqBExzPneCZegkiTg8ki78bncMHUSJ7t34m48oGMT",
  "key6": "35hzrYvPzwauueTUTE3fG33yMCdBzs5w6NoUgdQJKudoigzze6jKvgMcEupdFz9Km9M4oRngYSEjPXzCAWN6tSTi",
  "key7": "CJiSzb6RxVrBPpwdmFXQjZcnQa9VhL2rgMg9UkQnSpswe9EHFf8EVe3rsYGRS7onZgvmVxJ5UZ958LgscAoTjDB",
  "key8": "5VU8ycUmRoR6USbC5knAPHjB89v1NE9cYg43PzZvWbthjLy9SZ8UnQchL8KesQAfGaY73tyqczqPC46xUVqzrDAC",
  "key9": "66shHcnT9ZxA9FAeUoacqtXAYAn8P99VsHH7JbCzY17BBkMZaNXtw8rK8wuJjFUqXCKbJgukJmJw1H8SqTxffcDD",
  "key10": "3crYkrSbWRvFfi6R77941NwtXJFVbN9c3fUowf5nS7LhzGAz6S1gzrk12EDzdQMqWouo8VLVtV8emkgnwxV8sfd4",
  "key11": "3sxBhbB96MoxY2SoExqmnRXGTzxuHD6RqTnWB3kkrRRWTY41yRSEHz1tDwbPBMgL71bePGVxphFfkiPgD3mWGxye",
  "key12": "2Cd9AFjs28poX62qRUa8h86SeHRpgP9VQsUk5RsNR42Y7vCsTRqjetbPZBr1YpJehT4GLSdwTScoUkTA3vk2TzvK",
  "key13": "2XLgYQYezkvepNi8a2UHkSaPMUBTwc4X8qbsir5kqyRabZUtkRWsxzRQbtYhzHLpcfcLmRYjSaspsaM9Y9ZbAvyH",
  "key14": "56GKP7f8q6sUsTicnJ35hrsdzKgJY5pL1xv7LfyvJ2EVw6g6WaELaWV7MnDsFyTuhnT1bkeS3wZgnhCfhRzdszkj",
  "key15": "ySvRt2nDD52jtqNKCPpWKnmT2Bd12kTQhdYGNxW7hnYzYnhAZPVBnSFC5nFL1G2n8BJbFNUannsiGxRxW4dVHHz",
  "key16": "wnfvkU1q1ttz2Vr3bV6zsJQh3FLKyd1zsxUpMo6bXa5ZXrQm3E1JFjncUwFoEXYyUDGHYGFZvTwBiwyhiKPDdyo",
  "key17": "LogxhyUpc4EMhTsiuKcjRcAbzL9tmvpQRXH7agtYhh79j4RAAs8A593SuLQLfjiNbw2EPiUcsTkv6LWjNzHeewi",
  "key18": "fmd3DGcMY7J2UFCjijrgbgxMrRnfsAb2dMJdPBy2Z1PTUZjzciX8NHS8r3jUCcD7w9UbFMrQhEPSXsxrEVfbXzn",
  "key19": "5mimT1E3zeEAGagbdgY29FqdRpNqrAMSW7QA5BGy3YJdR7vsNemK5D1gwszS7FnRmu9i8hVggTi74LtoEdJhnjxT",
  "key20": "3QHEa5ySTgjbpNLcp7z9HogayihVV5ohbGfyHJndXF9RVNnyHBFrtcQSbvQaXERLP62k3XTYmqLVoitUssyytHJj",
  "key21": "ApqMefozcwpprcN8WoCxL56N3y1TmCBbrvn6jZXVPyp7imUi341Tu4SNxGkuogCUT6tUN3AFke4pGqJu59THpFH",
  "key22": "5tUR5iuQnq24xVtvL4xqopvxPwx7KkpkPxNfn2enHTQHBH6CeKMo2AuRXmERgwv5UHmZTK8PqPAqXcEEFLQgVtHk",
  "key23": "5Rr1RVKyWNg375KTNxkvJCNwV1VV6N9b12YSJB9V4RH6gVW355qzYQvipEmGfj3VcN85AeexZrScBHLiwGX8rsk7",
  "key24": "3H6TC8DyRqMcu8nMamRrJ23CdPXP5QTqx8s7S9TATA66bfhejLMYMnhdnFTtMyxYSdMK665GD7wmFCmjBstD6x94",
  "key25": "3XQ5Uf25qhbKYTZhJP4F9P2uJZ4aP1vtnPdJYEJrXVrbSygKD7n4XckXG1gFTBseXnAdM2SvvVtLsZA33PE1yS46",
  "key26": "5mMErwBF5EEDYSSutriqsByv9ct3JnRxhZjy2PhFjJ488F4u3u5f8wMzBkpUEnsyrDXKFpFoC2rFXBSo3Wqs1Xh9",
  "key27": "mnYLtZJWkUSTfNdrGErt731CSu5FUwsRDNBuVLRgcWswhs8LGq99MD6pNkRQsfA9rK11mCH5H6xiGNn2WsTX71p",
  "key28": "22zvsPUMw9GsXkESiR5iR41NicSgTXaktudVs5vKm5dHdpicf4Muu4ZDFvqJALsjQD5JaFKmSppBBJxD8BGA5Mvh",
  "key29": "FNe25uFPNktKcGUTn4JfatDEodRsuNPhnGQtS3ghTCycvGjt5AWNCZuCFsmMHMDzcBSqEViW8bqMtXQbwRJuY6h",
  "key30": "9GDVdKzvMjsnsHj1aRcxhvY8bjpFAwn1BLmDQ3hh5jL1ELMCNSrAowyBYfcJUXhkZqKMxLEGhwU5d5okPk5gSho",
  "key31": "2BcjcZpgewTQYZKawmiiZiCi13oWUExKLgn9c74Tzu4AtTz4fJ6c5FDvwcpDfpYnHgZ6VJKTPrnj49RHMWiGYo7D",
  "key32": "6117X3uTjnKBJzbinjJGXpLDQp3WEqCAtvVCtFvYqR3bUXq1Zi1VkYGGJq5sFNjrKsgBjqxPdv83Pn6rsXmmKB9i",
  "key33": "3e5xA2hW3QPMBGj2WkWv9eUsipKR5mYtFwaFQ1AF9rkfuHR7q9QcRn26cSd8GtakZHzWDbKdBvtDXAb3CmN9GEv2",
  "key34": "aHfjcuzTpHgmKHG7oCqc4XbbUT6NUZCodFGybxubpVxrN3ZDL65yMrCXRNRsr6WcdofTH9dAAjip6xVifVLW77Y",
  "key35": "3MtoZ4TH3GJUm876ZEMYYKhA5Ex6jJ28hfaUxa4zfWELLvWw1YtR7qdn3k6g2qav8wnJKKa8dH1KSMQzPMF4Squz",
  "key36": "4qe9nMUWZ7SW1ncpqJqq8KHWnACo4gamkLGHHBRPZs3AW9gBe2AzMzPFhqtJ3PeVUxGVFBBpKySoEwDrwFWG5gM3",
  "key37": "442LeT1RcHy8CydXoFC8yF84TH8x9sERbn3swS2eMbkDSwzsEZ5KTGXWgohUGzaKtc2CXfweHbeRrcmJQ8RvpXtS",
  "key38": "pdHFAZHJoSxujdu7RQWpYPLb2gV64rrmwgZo1Ud9uchLUBRqxDPFQ2Vzg6JPCismRHAuQL8NAHZHfAHrX7anoyQ",
  "key39": "2DEgKxUKbRgSe6AwQSrQPDuFeQuX81wfR8d8YDbNu5m8euabMpyCSBVTJbtnpHxiJUez94eseiPUqtRFv4vuYxKk",
  "key40": "ng9JcP5XL7biMDAWNyWqGEZUzMKh1HNjScw5tyc3B5pApbncGbo8HfDGFuTTfQD7b2AAfGkmjbfpY6H9AtE6kZQ",
  "key41": "5apFSVqMcwHbeto3yoSpipNEMAFwPeWe52XqqpdKfKZzyWMhkiXno2wme2VdGxooZECaXJ8qYSYGJzw9gqgNuDRa",
  "key42": "4pZYJr8sgzU4xxwjCmkVsepq9r5JpvYxtgamC9dAcNReDJYow3e85Tzdt8mHMbWCxeF1CaG3Nj7gJD9ynR8t6svt",
  "key43": "3KmBowbd9FiPReSAnXSjUDZM7mDAMoT9cgJ8vL3bY2AFix8QKSkSth4spCogcfJHfNLp5AgVWmXS5ChrPuXpSv7R",
  "key44": "5JcLKr7mEMCGtVGFRAxWtTt3PScry9kGQ6GrDk4XwUj1iGGjfy2JMrSqmCibHV5nbnVqyDYGqNVDHpPbmjXf9iG9",
  "key45": "3NxwebHZxffDrRuxgys5ebq6VEPkEBz9YrSqTmaqf16gtRn3rKuXyo8RwbizmBPcEUdvSiPqVN8JGJYwCMY5eFN7"
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
