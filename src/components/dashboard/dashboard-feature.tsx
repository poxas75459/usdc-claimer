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
    "2be4awrbYnbtk96rAPyEYar8XsMpF1CB4ZQhCMfXSeyp8MSNNBVU5h6bSPnnFqaJY9jV2sCj8bqkLWbzXuZeqXDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWXXgrdz1pRmohx93Jvh5V3WQWZgPLorfNMvjihd1ZoGZbtjC6cxVhwx4a8eBK5gt6nzxU38njKECRRzpcs2kvy",
  "key1": "aKpvg3DNCPbc8XSrR7MjYDciW4QZP9fc4doDKT1JJnzTWtA5M7EhbvFkd3yPAh6m1S88uLx4boteyfcRzmvGqqE",
  "key2": "2UaPADA5n8biRtEFKGYQYNpDnAEdBjWKZn7TvEBRUdxoygLurFWTHNU9NtQcpK3FrpkUsbvrkoqHci5qVFcWDABM",
  "key3": "2XCkNqkDz1J651rMcHua4ZJVmYXjV9brWd6Ldz9QzTaVEo1zGxBV2EmFVw74kettS5ogggtoWaqZGHWvGMTJusb4",
  "key4": "3HR6tquyZA1on9YpK37aPvrk7kpDdVrL5c9ojJ8SkB1HFGuBKhNzgCN9szuRpWpgdzfnjSMyQAwZUgEBFKjbPi3a",
  "key5": "3ntZvWjuJCCDQmXNt7H3PBq9J7dLPcvRocHP6m1UdVVennYzwKH8cMeVVH1ucHeUuq9BPeAse1WLUbJTMmgEGJx2",
  "key6": "45U2YEGLiWzjjameeHP6Me3Hnxo4KWbLdTF7kJVnbZFTRYHNxthYZvYfjZtyVbSPJSP8xoYpxXxEmfW1BtZcDJrb",
  "key7": "3B2pq8TwFK2DToCj7eicfWFzmDM1imnZzuvNLTKujb2ZdxsmA4KF9KyXo6xt3bSStxJEyPFVgtWXL9zbuiyKbsKV",
  "key8": "5iy6oM9n3CJyCW7hCBEyiKEWE9Z3FzXWJ3ZWfBCaJuX7MDLKGVTz1U26T6YXzXGYxJFGuTgSpSJn45tpqWmbGjBv",
  "key9": "5oAHvBVdiP8Hq1BJP2rmRFwYiscorxax1AXMcNmXG61nuvbmuygLri1cAcFfpGF4W1bvFjNWJop7tjFeAxhc8rji",
  "key10": "4pe19Vj5AiMjR93eUoCa1beNVMp1Bea3ZRd5s9FjiNkCFQTNpk5KxBvpPFRs1KqttBzAtF1JhXv5UPLjT4Rg2Nbp",
  "key11": "3QMNbH9gik7RumfDiJpsVtKw1ynYoz2nP9kNhn6rKuZYNDgwvtFqFjbuR5Pb5jTCyToK7AifPA1jF3f2ReDEd96j",
  "key12": "dHN9Nnsp6VA6AiTKJRRAmVk5894j5YogLRbGxA7hCEbvrRCgq8U5WzZKx7rVrS3sQ83srfEC9K7Ls1q5qvoxcH9",
  "key13": "2w1sVwXfLWLr9obAiPBfEFePCZAYwAsxqjM9i8tEaUitXwoSjAP6RxAX3nnpwVDThkZ8XVd3mNfNcsx5LWoANo2Y",
  "key14": "4GFxjmyQPkqs5Vf6crWw6UC2MuHNbX1zpFpC1NZwccy3vKLDsuXoHViRGpyyYFdqpYrZ2oXfT453pABBUWa3cVS6",
  "key15": "24WkUkMH2SRYSgVrMPA9sRrWxV25aivhRYLYKY7sn5GSF7UbNSDNxzLUJ2KGb8cUffRx6sCby8xKAVi6saaFxoNd",
  "key16": "4R7Uajw5d3Q2fCHhf2t1z8oXC3RbGcRniPZJaPHMRpJqHGvZxnFqd238jtVAPWirx9MPQRg5bL9F74dHJHvgZUHa",
  "key17": "eg2yvFGBYjhnFwJjmhMGnqDHaQK69siTtmwubwaQh6BmDokTKgRHtYvPWdVUvCT9DWSzmeunHmAJw19hZCiCgRC",
  "key18": "66vHFK1zRGWFPrgUBRwkcFyjm41zaJD6pgS1Lp2NKui3imtQ1JZM7McV67P2KHPdhpi3qNFn5xP8dYHxJxU6xWpX",
  "key19": "3MW6yCbnDqYj1adngFzAs2RHMYV1VRMqVKKN5nLgkTnFgmszqgDEzMtTCbG5uaQojBt5KysUwEHEXriSqAo5aLCq",
  "key20": "4W7YdaDokRtZo1WF43G6WvgfJV4FCUXMMGresPaWc9cWKV7xLNRGDrZDFZmYCiL79R4kyaQtHMSVQ9GeJLKn6xEf",
  "key21": "5CRXQH551UvTUTjTD16ompVeVMbtkwuFs63heCSY8UpeYb4hk5BVAd2YvcM1qBS2au3q6X3kh9EwYK1zTM1486pF",
  "key22": "27u4vEEVAmF88y4RVUvNso6Ss6gkorqPAjoCPHvZ4F55rycPMGZgpwfDRTqPDN1d9yVy1qgSyKghdBTbZFhfmyCt",
  "key23": "4u4EvD19W1iPnRghUsybpuC79dT7Un2KcUkama4GiEecrCzMFRQiT7kTZboH2xJKtd4wjv2YR8puSJ17JfdxwqHU",
  "key24": "43c5nTLv4rvVWCP35efmKEq9FGejaLqq46W2WgFTXx2NXBB9ZfwuTCC8wyK6BaNGNBjCb4MsGiebYSeee6ZhwZ6n",
  "key25": "uULNqmPfJo4ShyL5AP1cgjDFZ7MPtv3jboWcx4VDrs2EVUquupskZ1keRq281PFRVowaRee48XW9rkTDQLHKrHN",
  "key26": "263DdXPtkt4aQ8Yrxevym3hHLn9JDtkknmR5CtCpquGvy2J3XA9oRb5T91sKZH8PrzPMM3nEVxvq9zJwj7E2R889",
  "key27": "4M6XgG4p2LaHd8jkR1QEu8qpmy7zEhgqZJ2UekRNQYkPKmBXLCMHXfzunh9q21SDokXTkSBdt45a4Ge5PGW4JvUB",
  "key28": "2orqjua8nUkWnAxdWjvY43HxywvgrvtkCrMBWVyJd4fNcsEDkkkANSQ8d2n1gciME9HUKsTo68HHmgRt2aEW15nw",
  "key29": "3V4Ky84EQJkRt21GjGHqKDrFoVrsFv3ZMX9WXPN1Z54RuGTtQ2HKibM9NkP9ic74DTQFALCHCFo2ApyhHZ57Cagu",
  "key30": "RYaubZLT5RSxRoPdX96H3SVvE8jZyJSktNqi4U7JWYDNddCfd5NzfuRUeu4mZwRYs6iJPmB24iEfieMbpvn2nzB",
  "key31": "3YqF3x1iMrbkJ8zDM3jypc3ShoaCQLweQnYfgpYeU2HpTTrvkRUhAceP1nTmuoe13fsgsDeh6LoksL75TG5tWCDi",
  "key32": "4pWxxoHssNubeCGc85Dd1hProwGWQkWQVJUGqaCZ73PHvL64X2pvn3SfZcCsKhGArMEGSmH7WYuhJkN5A96PvhbN",
  "key33": "4ayYQ3XJc1Vst8muCq7V4Q7ZsssQMQSAF8oMT7B5tvqt1AQ6u76duEh7Msnxn1r8AGMNnrwE2mtRPHgokNu1Dtgz",
  "key34": "3ACQpoh8ENuXXceeixodKebgGN1tJANidxH547z9tuKNytoWQLB6uWkTKWVgqUQAvXR4KTSusSoPTvfwjTHTctJD",
  "key35": "325YzV8hYtC1qedRfyjjew9biBN1H4maWW6VkdNgktoMnuwH8J4YiQ4eTzVEz91Mk54kZSuBfGt13AG2S6xqyX38",
  "key36": "4BNJ8pD9jK2jboBzc4AYNS6QBn7mAK583ewx4Q6zE7qestiXNE9mBnWMTW7LaTYzcj69wKM6pNRdKTg6QWLUccni",
  "key37": "4jcUMamUGqfp3D75AuGUHxrr3C9LoYrQHzRfNgiSiEz2oQuJoFN5YxvWnxpR47YvPg89BT6h4aCbTuAbwbzVZCgG",
  "key38": "2pAVdWqhZYED3rHTnfiACzpVvHvmGzSxehRT4e8u37UtncxFq6EHU8msngxwiwTEh3T3ueV1JaEz2KNARVEj3wuC",
  "key39": "3UpdBHDsZvmvyX2zq4NHxpSEnxy2LzLLWfMCg5VyDs15T7QikDQnmwFvAxrYZKMkzPJQTvD8UK3z6auPiUBKLRoY",
  "key40": "5BF57MbhfQN3qXUNMX32sZr2ZdQGHLufisdXfCSwy3sqGUwCJf8P77VpL64FfzHGx8uWjYcE8PXgseXX8RHw6JBw",
  "key41": "2dGncFus7X3qrHwcxd7DhXd72ZvE2sJTsDVDx9iyk8EHpTVzpSoYGFoAtMo4LLwW5KEiXpnv4T9ofXT5by8T84rC",
  "key42": "3oXgyFMpkNSkvZBzuwgRAxmue9sYTBHdknQXPV1iSuMbrmTHQWjLJtgHpJKspko85gapRMrTiBGEsw1p2AvT3KoV"
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
