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
    "tf66taPmp9S5LADWGYhhntiaV3YwhcwVJMiTPeUDB1ZtwTzg9fG76R5cEQE2HcapECAS7H44UHFwwC7NnEN9dbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ex6itkSy7rqhY4WcgYjwqnaPuAibyGnpBcwAHwQjRoSZi3M4scxHMu9kkUDbCU9Qo7cvy2HVmZuj9biNhrECe2V",
  "key1": "4nFuJ4aqCbDXMJqZRm13z9ELb7vHxvHmevJiosefEZx1RPy8ZioPqNZEtCYMCZGShBVinJNcos8BvQFKLABUegkY",
  "key2": "3uCcnximjT99sGdhYsxpDineKpnYE4XumY6tyPr2k8zcpeycfHf1NtEGnvHxSV9C1DHxvdjnkegD7f26fDDpStmY",
  "key3": "1UjM14ufMaBSvAdQQJ1bpprjoz65x76iPrQKCnosgoAkr312xctimGVLazJrYLmbDnvhXH6t8PVfpKptoWrSHXh",
  "key4": "4LV2rUCGT4XjgKDNMhznr9C3JQXyaGf7a6uZDDPq4i5DC9Sc3VHcwidEPuEx1e4FeBJXRB8H7tRjaAjWrsjEYrWf",
  "key5": "3vFXw1SJgZxMm3LjrfueaE7RrzS19m3kMPnc4MozzGV6kEMhhC5SovJkfYroGQDqkLJvZGrWWqnUX7BGPhKdwNtz",
  "key6": "5vyZZC119X7cKhEVex7TeVqsQKJLNN69uCwvNgU7o7Hdbe6s1iQAtwVKqkyrG1M7cKQJMe7hHszDKiSSRnLBMhWh",
  "key7": "5bndS5C6o7r5myTtg7NxmJiEqu6EbxVoSWf2deQNhXL3RkUrGhDkvQCcELFykHAjYcSkLuQdndDkeR7ba7zUjpAp",
  "key8": "3MHCgLtCkuBy8ksyHVqJcqRr2c48CSoNymD8MjbFBd8UiS6Xq9uGEByjbqom2SLyEj2tXZNeMd5oLjUmVvQudZGs",
  "key9": "3mazTKW6TSdZEEe1uHrG3peLZPdkzqb4jFGjAuFneJbQyFcWFDQiYiyPM8a3yCPmNNNbVY6irKHQE6CkkHPZgioM",
  "key10": "5W1yiF9mFseGYnB6LPM55ESWbZ1kafbEaYpz4f3K5wvrMweXezjAezrYarPM2dSbzXNWb3sBXt51Bs7gDoNK1MJX",
  "key11": "jj5acRBApwL747CaME9o1biDwqreonZ4m3QmVhCc2hwVMYaSMP8fNKA3UiLnwjnfFahajZea2YhdKnwWE2dSqw2",
  "key12": "4MqcMGPPtMT7qvMPJXL6uRuHLWWbFMGrJbxYtTPA8WtGrNrQhrCbLJpad4u2MYP3SmyTYC7n8kT3t97txwX3VUuh",
  "key13": "5zns62K5BzFLifKzRduGDFgPk2ynEv9CnZjDQEUd9tE5PcmjVGRrURaSNy58PFzoEcm7QtB3GrJ73AZeSoDkiuHw",
  "key14": "5zjd2L9fEUVhsBtSyK2irHbvDGFh5V767vZpeGdKqGA9dMQNVxpgF4tPvYyhVGXTQGpmiQ3U8GhECFxJ59C7LS2H",
  "key15": "4n6Sw7885xDqZQumvrZykcqP72JnHWN3Gum1gV2eJZJGEbt6Zrb7xq69Cvn8q7t9RjbCxAhqiNz26sBCXtetDgLk",
  "key16": "4CP3Xfhgs1DPEzK6e8tf4A1E3JF9wjQT8G1tzqbAAshHYCzhv79px4RrQg39gwSxgvkSznURPD1QcoDg68qT9fJ4",
  "key17": "R8Etu5g1mYZwcN2Z8U5QX33bLqfMzKrzK64MKK7iosYxkJpLeeeavEBbJk3GqRtoUFUHjnoi7Yt9MjYHsLotg3Q",
  "key18": "53YtiWEjnicnX9vHX8fjVSynuNbU1WFd8CXEmi5yzKuErYvk5xBjg1bxX3oarwqvHN9YZeMLaKey9nMSoaLnZXQg",
  "key19": "35v7YRRHuTprzbuPYEgqhVLSxnF2Z2JKKZB5JW6LzxWvqFoUsNDhSMWa8XZsBAwmEfUDyZqT9SkU8abxEZJDbUkB",
  "key20": "584Vi4qnuoML9MziUdr2PMz2qpqQcvfQWYgkpSjPC3Yw2j7xXTMr1HRt6tq5SjBABx1UUuhf144oPbiyvBsr2B4d",
  "key21": "5qVFwM38G4BVW6W9Z1oqHqycYzoMkeVHzejfcMjQTsbtZeQFf2kXasZfb3xRXtPwhmZ8Q6ZhyJ5B7bU9SWv9xuwN",
  "key22": "67qD2Wq6A5Qn7V4MokFztTBGm5p3VS3MkHQHUCzy42i6LfC72zqLCR8QnXbWS1tW6prwHp1ksjHNJDZZ78DGwqBj",
  "key23": "Bs5YmC8MGjLuEfmirkS28TncHYG7H2jzsjoJ94J2wn32zKwQtjdGLzKCJRgCrKjBh3k2HJsVCotSUNYc8nF65YQ",
  "key24": "3kmjJwTqS3hVnwkdXVKXcuTpGTT5TNXjibhYsWa5dBr7iJnPh78Gbz4a2UTfVZhXNhz9i7BQ1ZXSfWJmoPBovYDK",
  "key25": "2bHM3dC5isaCFwDKvNfSvLZQt2ypYZ3N9oBVrXi9Xo2REQfemFp4UH9S63qJdyXmwPWVV9RTVDgpZkz2Ab1TvXJu",
  "key26": "22xj87T1eMFz27ZNafD1K3R3Cf8FucvBS7K6rYLMSBG5r34pTrvnULcNB5Ms2qr3ziurc8zRdkZrvhmo5DZS14nP",
  "key27": "2roCyHwnPj4YnBGYLkvhkEbyGnG7SXHZeCSwFsZVGEYCKeHPe4QVKzJ5eRM8PFo3td7cNmvdZZYzAmdRNbLrXFzz",
  "key28": "3VHmXy4oiUzaahezF1egvgG7E6mA2dEwjYJhtG1qukvyThyDw1sijJsy39xwPSxYu92RA1ozD9qTKxYkjVCkYBGt",
  "key29": "5f5YCL6ksVxj84aoudATWoBk5uQaHx2aZyNfAE5Ut8BDUcMcLYrwvN7aMjEaiFnf43nb5Qd4AwU9zK8Wc91VMEcC",
  "key30": "65DjGKUoEuxYqYMNizg6pcLTr5j2nSxcTCeVSL2wDddqgdaE3r5k6YfY6dyhDeK9ch8r7T6TXhCNXPQ5YXDShSzv",
  "key31": "32zTV2AsJoipfxr5SJAcF2LRdVf2ae2roU7zAufmuC25oN79CcLYxnKpdgdyNMG4X6MZk9MxLu1gnZPq1S1URH8r",
  "key32": "3KwJVVitmqaFVCWKspCvNZr9oY6VM2gk97sQ1xx2GPHiptnCVdxKXAhsZMu2tihtvZ8SLDTTycBCb4tmiubeZGys",
  "key33": "2m4NAwwxhUrRkRVJmqYJwfzjHDHmBigRBXhCBDjRAdzwALKspEE6QL9wtP6TUPnzFWCUbVcsYWGnxawshGDSATQC",
  "key34": "2wmiuE8DVz6GUNThKLkn3hojrX8T3RBFUnMr9fmYrshzmQSsa3E6jQAsvq4Ab6kK8LRyqtPenKAPB96p6Fczgny9",
  "key35": "48bStA6V3zui2ZUTs4BWn1GD9ogYsWrsAjz427isC17TFLSfpGJejaX1fuBNRmMRtavT9FvqePcYiPHNKybvNocJ",
  "key36": "5yvRAdaB5yQv4698bhHxws5szDHLyxeVYNAqFRTK9o1rYkmPLNj8MfqSnmDqwHr2gS2U7RLekY6nKbfxVzjwuVS1",
  "key37": "4L3cuW7wXQsJRsw2qZUm153uDNfgJp4gsQ7jLhYEsqRsUBnX9W4Q6kH4U2LvH3JFuvimFT3vRGdpzxy25XdCueCV",
  "key38": "3MGQ97ih9VSp7Be9fAwAESU89fYM95G3ACra4JinjrpuDTNYnnSefeKPhRVQRpbBs2w9SkixP4APBJiTJkSML9Zu",
  "key39": "3oRWQAxNKWAiQPSzsN51gK7tKLwoZgdFu2GjzeR23e7WswmhxaWzzpCqWKYXaFtVsVk3C6oLMDJr27JzudAP5yF6",
  "key40": "2k7BCJ36Mvb8yFNyznLsFJDno6PmwXivsNhnPvHdDwnkZTSqGNc8Us2V76khXVnSqK1bExXcxivEGPhF37a749AJ"
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
