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
    "58r5AyVKsU2m2WtmCFAkPKgsWZUMZ25ZJTU9xTWn5Dnqm7Yu7vu45e89eHcDxrS5JtVFgZZbdM8dbuS6ifwyfqXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iPB4sGZtZRToR8BYezx7dGxdbf6AYf7KBRzuQYRYy8xTgg5yTMw1g2i95wUqcnYJoBEek84d6ySxBHYGp6SRbP",
  "key1": "2ehf8eooqoxfkzaqvB8AVPTuGL9kT6iPZybWnmwwNjoCksxiyidLAx1F582utpVB1K72MsHBETbK6WVGkgAoS4zQ",
  "key2": "54eoovj5xgn6AiMBvbTtfA2L5M5e7B4wcoowptbBVfEMfcHMKu197iQWBLHajLxKnywbGCxicyMF6FaE28TZ5LNt",
  "key3": "4vfZWA2zsEgD24YBHyacggt958kwNpnh59FgBz73XSuqvrGGQM9rMfjJZwnH5dsaLn9ZFncBzuhAAuvnJrWnHrwi",
  "key4": "5yjm2T5cWzV5fvr265HAyAuN1ARqioYxtnwxuhqrWxPYD9Fm4kqYUwNyr5JMt5YHUtEf7vLHrHVdvLZ5fBwmHLhK",
  "key5": "5DkFCM1SHoW41S1QEzVxtaUAB2vp4MWeCfiV9onbmeKfRbhGkrLCBALAjtZJKa9u3yHbNf2gJ9LMNJwCFTVPtkPM",
  "key6": "36pFh7xRQCtUDRRoUozrPNeAK9mVuU64DABfj3iXfEQWzWB3h1BpxAPP5VhpcrLoRCG5pgUD2ekG9AozfP9hZW9d",
  "key7": "5963QC9NUKaJVE1AHKyZoFmkUzp2zJVkDtqPx91P8DJqnUQfZdsXyZvinASG9JrkMoboUeBjA8zmwJkK8pZj4fd1",
  "key8": "5Eccks57Do9niBmeYNXP6Ga2Rj62bPQH2zZXgdBrPaW1miZHtc2VBF1kSWWt9HuwjYZUk22MpxAma331V6VeMroe",
  "key9": "kzDu4tWTkLCrBG1mwuumtDZxgvbgkQTLB1j474ZJMfay5oz1LHztLRRxZEBJknFv6XueNndk1rfs24aodCW5PK9",
  "key10": "2G8mqgP4bw4G3hE9VkaoHnU79ogGEnWXcKcuqVHLWdjbvZC7QcUVwd9H6xLQ6AdqjooWpRtXCnyBYW8KF7xCZHwb",
  "key11": "5AEDCnTUvVC2UJvKrgZkgLaRM7HN3ofSgMjerZBAZD5N1qFPzLTZk7mcRnLNFyaGCn7WpXam2K1YuBDiE9XRxH5g",
  "key12": "4YvV15S3WW2ow9toLJRvKjUXtjniuRr9xLY8TcpcfcL6sGN11urqUVzpY8NwMW4yZ5ajTqMcyTH9FLhgPoQwuivc",
  "key13": "5brieAgTE2cAV5osX4XDvCCkAC727A7JUi7dWiKXPHthjAmnpe7jhSDwpAFeNB2DH77MKPJ2eddpEcNsdduHG2m5",
  "key14": "5p7rPdWHYK9jDtUQT7HNNGfmiY7uqcoWjMRRjcNs5L7bxWgLE9TxbcsN4AsPnHNodeNETZ3sRRMJaByLdUrdQrtj",
  "key15": "46gUAQeJU13drSFjkNwNaZcTsjeBvkiiv7arpoj5b9UWEwMZyuFFCfLK4W5defQwphkPPnzgzhfqUNJPC6v2kAFv",
  "key16": "4P2mTYosjqeM3m1b3FxQLfkt6dZKcnhxJg3HxAy3k9QN9VrFvGn3bV8A3WoRh7PHDjsKZ9PDcovJ1m8utRMiA9rS",
  "key17": "z2dcdFewDbmfYQmjvW8YdDD4YhKzXXtD8MsXpgdXCfJhm9sGhphxPJgQNVeR35pwyURrjiRmAMc8XxZHvkngJxp",
  "key18": "9eLouXyf7GZ6vWSshXBuUoYN3oy2ncwMtofv5cPTfyMDo1H5w7V23AggLDZX8DJ8UtfF7oz7LkcKHawzR6AADjh",
  "key19": "5MvtkQS5ccdkye86a1RrMmVN4LEPE6pct9jguFtEdLaiUXpjuvDF84oWTBV5QNx7hCL7BzXEwdvksGApt9gAjWsE",
  "key20": "48mwsYSM3AmrrsK1TNRNR1hc8Tivfrm3urNteWXKCYnanb3Q1FTvXn4e95aXghoo3yZ4Kj5KEhRtJRBcU3ChWQt2",
  "key21": "2djx7Mziz9aLko8ZD7ALudLAwsbVkFpxrwZG94HRNmVkr6mjanh3saPQZ7cUStgesVV68wULu2Wt4at2qgTaen2Z",
  "key22": "q6zf27ikBggSTSBmP9v7yXUNKi5X48Vk9UT163ocuJF6t7bZv3kkxLXZgPEf4BS4JiCCpJEdyNh4kLxLLmyAAkk",
  "key23": "2wvjvYs13Bq3ebhqN1cDkbsMpqzsWxKSREAxgCvLMdJkz7TVeLJVNVLS54nvURV97iz6mQJqLMPMfv4vBcwKwPrt",
  "key24": "557R28vEU7213TZDioynRVFQWPKbGSkx5kzM7cKTk19kwimU4PMXZ2yhUL1N6pv71p7PpkshjJQdgNmj2Af683c6",
  "key25": "2Pbq7XYYxWz1c5FGoRdcQ8MHzx1Lppy4F994od8jotHVKMsXG7LKHaFSfbyYHi5gNbeZTnKpdTkM3Ug8wFPuvrhS",
  "key26": "NJaNZB6ZCmSuMSqk7VjnDroMqdyTPdLdFSoTjPp3sEXqX2N2uHoAhLz5DTmrsXyUhmUeov1vbyJxoA6ZcKMnMSc",
  "key27": "22oYM6A9smMCLucqtSTvXwiGjDbSpZbZ21ReKAhvb2Fzf6AB1YZEuR7C81u6RpaKc9XEx8ZNgiPcytPKQ1z1QY3k",
  "key28": "5ptw9DLPdhUGhcd7LDFVdTCmntuMErKBDQx265b2HWeNTqBbBsZuZdsssRovF8RCttHTRP9gb9HAk8CrJfSdYv43",
  "key29": "2K9q1KeYXYTjkwqzgbNTmMvG5EaJ2iHwqSVBbiduXanxuTKNHTJXJaKGaT7U1ctv5DUisjaMo4nKM4UasRcM3at5",
  "key30": "4U21GgiFbz9R8JY3AjkEbYTtmhCW2k5NtpJwPitMeT117uhkMRzZ1L6vHsRAEEKXDFEoJCcQHcWUbpob1GsPei8D",
  "key31": "3uLCTUuN9b7a8cdU315kFZz2jergoA49MM3dFen64UQeMuRLv1TutG2ASG52gxuBUijyxe4nRM7BstGBSWJiaS8r",
  "key32": "2jgchTCf7WP5rp9djJxz5Mxn4Grm99YYaSJc24RRgiGBkRz6ArRq94g6NPtDx8njyj3Vid1NQoBHSVz7ExHwhyh6"
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
