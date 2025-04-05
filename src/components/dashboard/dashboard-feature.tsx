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
    "3YEhae5ByJno2V1k6cnEh13QYYmYfEEHEzyrUwCJEZHLQLsQ8t8nAdRfTBvbZTLL3aso46Q23gtHcJATBpKvfoBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amZAJcvueUcFRSK5WUFUKwAcoBp4Pwj7kGmtE3vHyhCYe59E7Y9b5E8ZuAfw9YYfLvaApMMqSKHc9GYbNxCjg4E",
  "key1": "59Cjfjk5f3nsvaiECmJ6TqKqZqRcfgaTVZwxEByfU66tZM687D2uRQcCoxEEKDyxvkro8EN814orHvQ89ASuSrZ5",
  "key2": "3B2R7RWBBFx7zJ2YXa6DnF6YPwRpENmcAf1VCtRufhfSh4wtVNKbMxoW6f7HuK6vwBE94TuXUaapTHkNXCKqvgGN",
  "key3": "2Uy2ZoyGiHW99HachjsHjCQ5BkHxqZ7gGZvbYMq3gBMjuQwZnXskRP1fkTjp6DGFmLM8T2AZ9JWH9S73TrChBtqc",
  "key4": "3thbZEwG13q2M3SfvPA1uBNHf2DCqUjptUrTMK48NFhgHJzZC9uoPb9u1uzng83LxsvMm7KGM82HH5nLhv1SSrAA",
  "key5": "2JifnPSZxnjTnkWGSbmunrbGHFJDkmXFJ8nM9oMCJKPAQ6zgPA41ULuAjrXoDywzygfczpumY1BYaq8gJeQfq12T",
  "key6": "2paVvnCeGf5wodV3Y3GJ2qFdxAXtXE61juXcd7nQzwb9CssgAsBrGkCCCf9ZPLco4uxNvQCwwJEy3yZV2m9vy2oZ",
  "key7": "axKczwnQ1dCXnbnN1Bwx3R99hVp3jjRbk7j4ebTe7UznUmb9qBkDJMgPLaurqMajqJW1YAabpdMqgxhXdhTvK5o",
  "key8": "yKHXsnazrm4N6YndwACbnrkvCsd4HLvfQcE4jCKE3UGpYXmWHGVjcH2TPvmkpSESpJCDeVNorwm332Za3AnJE3K",
  "key9": "3xTWYTsykosmceYoj1PNS9UHuFviqQeTMeMZJQrC1eKCd9Yz3cLHzetKR6gUdtykk5ie5GowJb3ZMxXNKJSD6HSL",
  "key10": "5V8pasHsjLhpzyy4rDufbEzaB8w6cNKtArxJLgfkJrRtT7FEdFpcQRo7RBBhpDenNnwAYkXnqkjsXMcH6zmWCS1m",
  "key11": "46pvyjjvZX2Z1Kaomokf4p3T5HhtvJWPjoVA8aApv4kSZZEY6xsBLPtNPKAZhYXALmiLrvyD1aFHZnTxZzpoRbrL",
  "key12": "dUC8UN16XTk8rpsLmAQUzBkG89x8Umzm3Qp8of9hWudyvfZtwRxQrTPhd79peDw9T8EyA18ksUavy9NfWTRZhua",
  "key13": "222P7Ch3ozHvACVKFaNE6BhhuwbMJ3nGB4vC1pp3nwC9JVN1ZJ36PWyeWtrtJahFuQN2jT8Z9Voq8P7RFDkMZNPR",
  "key14": "5Q7GDRZw8N8hawSjHyDzuyQqwhzX4WCUQCXCSQ46sN1FGFz3V5S1QGX3i3m8hn452kcYnFVCM3W6pf2VnmvmePMv",
  "key15": "3qnENxHUKpSwqEA3Ujojzbdoe7rTjrssV7adLHRHiB4Rmsgb7fVAeR2hwATTLsyuxKywcKggAyQaSdtuZWYJ4iub",
  "key16": "4LQrQ1K2jtFLfe3Gwyk8XLyKz6w22oJwykoShkQ81pwRk78bdkhBkyYfdzMXNwQWJHFq1hG73w469qDxVPLKNiV7",
  "key17": "3oBHJHsSzFxn3iaz4aUXAhG7Qcf7XxcTzuZzX3RyDupH5yCtMtfEJ4MFU9xiV3tTv6Rudfi3nKtaxPtydbqRVgtr",
  "key18": "3pAvzqumbigpzwyZHiNM5FtBbMs5cjw84Qn3QhJAPcKfBCAHbwW27BFuKM1fCjxit2bgBwfi4RKM8GnjPEifoobF",
  "key19": "5n8ULSaz2VhQeWfXkBnX1xFQpSjVXzEypFju3pAUhWxSmgGv37jhVTGXu9m4onxhLqw1PiUxZmp3CdBNhnPoM3mP",
  "key20": "5ZfF5CnSnbEX5HoHng8xCknZyhirbBLiYnSBvKQGVPLrbhmZyH2BKJVJwCqSgvkhdSoQV9HzDEejCcyfvPQ1qc5x",
  "key21": "4MCmeSvhRhJe5V67KF2z1fHvqMar5LB9Rz71S3sZqHR7L9YtaNAprnFU87gEX9y9BsLU9KyjPBNKHCb75MH1wMEx",
  "key22": "5GbfEHJjN9v18z7QyvxrntBjuEGWsttunF3QvbxbFNMMHCn8ycPG7M4NjjZMfLk5nZ9pcKDDarpMPrLnKDrv6qHf",
  "key23": "2C4TtKpWU19p9SEdQrcbfnVqtmbA6LXxFBMJRbkKURfZ3VKK1Urc2oaFQFwUr3a39aPgcXd9vrq7NErs9Awfcr9j",
  "key24": "316eG3kWidbScoiQ4fPf84gAv1DRrametbTT6DSQEpLfqjrvfEqzw3p6hHDYnowz1JLCkeREd7nwQiUyVNzKTw5z"
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
