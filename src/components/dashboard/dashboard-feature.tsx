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
    "SYVi48VjX5T5DdCogLR9LkxTnnPEc2Jpn1QurdfsdKLcAsxAsPvwKRtJ2ANNgFfZqTnVkUCkUkWx7hTUmRQNsAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRqVQwRJ4tvLQQbpue8gcKK8RRCFfR95xcGM3YJMpBEHMdZZmTE7owtQck6mD2MhLw6M7w3F1gva2V8enFMer3M",
  "key1": "5yjGumLerQJQTqy9Ptwg7FK5pvpMScN4LooJk8GJH2voKDvjAGdjkNeFxxRUiB2q71o6of9U38EKbYTFV2agpaFQ",
  "key2": "bGfjxNjdRhpwiBpVM9hosXMCdvtLzVsM4KqENXs1UjMLZXDmJW7CcfRYC5ZEf6DK6eoDeHK91vNQ34L9DqaU3qo",
  "key3": "5RbqLsvmAmqN2x1vaF1E17bxrCoCp86jcJU6Qq6X8K89qCwG7SUegiYfH9CNSqmC16DoukJUqm8HvQUvB2r9hkuS",
  "key4": "5qKDqhjfpg9dNyiswGPpx1zzfoa4hbJ6Bcz9Ni259zQ9Ki64cVkvruJi6uTS6zc5MJtvfGicRuBXCewS7kGHen2F",
  "key5": "4jUoaMVJZxjMSY8QMK4oTecWEJcQt8Rv9JJL5Vv3fQytaYkYqpNdwVKQhyAF2Fq3FPC6H4zYRJkpteKEoFsGqrM",
  "key6": "3xYP5kv2y5P7J9SpwtH4NSjXLJKD3VKqyxRciP9qVxbQiiZbQgN2ttYNSDT1VReVPVYdax4vVfVvYGeQqZ57Ay26",
  "key7": "vLdPNurtAMJ1jvV5Q9MUWpixFMtzgaM1oK4NkRXB6VTQR9g6zMbvGjSNHSwh6gQ9buJuMFSHUuPf55KbQSbjSRw",
  "key8": "4v5PK84JRzaBkwd74NyiC8LnAzYXS3steF6qyiz42eijs4NVx5Md9WDCh61TGeEjBZiksA6ifbSsS83vMjaGDkyA",
  "key9": "4TwoRGWENm2F8Hvw2LiUrKfmbMwYBsaQFeLg36pz3D97xQcfr5NYk9fH7kTTPwLwyxjyZHTHt2sQ6LtTNycSY9Zp",
  "key10": "5zcJeK7BMVjTQnM5PnqYauAq7HAajtjoS3ZAqJBixt1fy4MG1bgqEqTHsG7CdAQbynJ4c7n428EBKrxuAzb9H644",
  "key11": "5nkx11q9kLfKsp5M3J5z8d2jcPL5RLfUa12gJaJQQ1jidE7GD6ovAFLdrMge8FE1rPcMugWbW1WvhZVjUyBpjdyF",
  "key12": "39qsgdqrUkqTuxcQyxUAH4Yko9msDVu8C68q5HWSkjb8rjR4Dfb8nFG41SVprUKyjMhUj4Q5R5dJuviSDMnwzQJ4",
  "key13": "gwFtAKVV1ibrbqRMUZofpK15uW2RuFVoFYPH5H7DaChacJjtFimhzTBF8AAeLSwnNpZ7Ew3oNDGpgY8KesHMKDw",
  "key14": "cyVn9z8YbnTxMcESfXfvrqTYiJ3ntkd7W43qEnhrCvPbpG2a77ViUPJBK5saTa6h6nfpCzMc6c4edSrEe4rUHWB",
  "key15": "44s54xc81HqaCpekewMggtofY7kSPpNRpw8hkaqWvZ4ggwvWZGKexyGF72dKzwUP63BJsGrSJASq4GFLZsvJBoma",
  "key16": "5N4WhnQJbfaHdBd4gNwXENyHqy8p92ueMWEq7FtfpPxoU4NepjgBYBxHQ5iaTFAVzDefut1Nq6rEvAa9kcNPEJ3n",
  "key17": "3WUdHhHM8Ty7YujyizBwdnZG9pbhFdkHmA6jwp9a4qp12kGsurn1wGAvdbvqb1xdSBtRwNpthJMCBmzUnJAT4Jdr",
  "key18": "2yzbKeRdULmBC9kKmipV3A9d6zjtJwbKkY3Y5rFbCmTmN4UZyGLGmjrpEiPLx1WyRZEqnAZEMCUtu9KxHViDkawu",
  "key19": "piR6YQnU116xR1V74XxvFabTQma8cFgobdTQBEZTSnHw54bqMoKbMYStaAmPrTwqUFLn8SBNyZGZyR8vyixMaM4",
  "key20": "2SM38GXdh3fMjyypmPNgCmZ39stooRreLVZ4JuP6JRjq1NHqmp5GPovE48G6CKhbV5qux4VGTm2J4eJWcdieJZ7q",
  "key21": "sfb4Zk7XPUNi38uMrxiq8GCWUkKHoZnNRdNsb26AEWHYBSh4YkJx2etrDKUSyZuNgXMnWLHUiR1PSExMgy1KPfC",
  "key22": "5FGWUtZSGhfu8nhGgzDDLuErdpvXVAggQ15oBR6DJFFbFaS6F8kZz6a42oJQZ4teKdCRQ2zwhwhmSugTsCTdA6GZ",
  "key23": "2wkuqvxJvJfWe51BV7fZpBq6WBjSBEXRiuUctqsJLxbSrUAg1e7p7XbHy1yRFhUGc1cQA5S5ugfHBvUh6ieT1fsL",
  "key24": "3rM6vw6eyMU9hi2bQzo8fmCq55r5YSPCfU846S2e5GzgKzsdfx5PaJfRpwFrfP4eVM8rAyYr8hSsVvWMmgZRHeMy"
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
