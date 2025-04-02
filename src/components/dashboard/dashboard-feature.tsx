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
    "52YEEpzjeeFrBp4Y576F2sm65m9Bo2oWfr1jVXqY2L1S6mwV4g92QVmDFRqYsBW895zQKJ1Utqix4BgMm1Zx1E1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aqj6F1yRKJgRcidyi9yCjD6AzxrGmjvsuwtKDMHihkNoMjCojBfwVcgbQxysBbBYGbAy5i1UZH5vheRAMyj82hB",
  "key1": "2Eoght3eoh7DCQCsqCAaUstCc7DGDEsB8VDvWKraGpvu8mStwqVHRmUCUYchbejteBnH6qQudwVCz4fP4qWh65D3",
  "key2": "ReEn9agmmnpuwy66zoSrV1kBtPuHXkyQbDanNUkbdh8B1ncm2Kepzn2jh9dm5KcxHwadtY2aeitso1q2PaZQ7jA",
  "key3": "4ZYTTAp2PphCKisN1go2VFFqaSr1wywLhz7XWHfjWsSYWrN6zRDur3F1uPLYKpvAmRDMnM93uAZToikgPfof92Av",
  "key4": "2hELaHBxemv38E8RwSM6Ugcn13HBEGvLkpEq6cM1X15o6qUJDYxQRFxZkDQ7qGNbagCtStVJ6U1fiF87d1cYe8Vk",
  "key5": "64tPdYoqYgSrs995vashzR5kprpRWTfLtS4WSLZWBG7hiVYYgxYf9NATZcMs2higgU6JZJ85t58QYyYjMVEYLRW1",
  "key6": "2snTWirWiCEgntJx8zt1wAm9Ye8HBXkNsSfSLYKPjhJf8yJBZSxa4BoH8iHsoK6Arow5cxCwBWpVuxzD8nusuNSE",
  "key7": "idvhsWa8x8eE9yqNoftUhDNDpZx4aspcm9wgUXEf8FvER7kjoEdtSvtTSnQxmKm76rhRSSgYFHk86dmg83Qk6gv",
  "key8": "LYCqoE22xyKTpVKE2afCRjb9YHZSwbULaYmdX56iUhX6NC19BzNcsv6hTt8cdNsqHpk583BYRu9YxTQT8XfbC1L",
  "key9": "5v35egHw4qEHuLnHTG5UAtoCm8jqUow6KBTT9RVQZ7tn6X6CAHJB1SD5Vj29weq8CsyEx6tzpGwk7CRrQjgK6D7k",
  "key10": "2bTDQBt4tQh9uN9XVP8DP7JpzuF6fArkmtEKaPwKnjw2mLHsECpQH121HmaAUEE254k1tscshbohf3QQwKicu915",
  "key11": "2toKKsuSfLsr8MvcLyU5nT1PpBCkmsjBs4yv2idcVc5AqSJxM6t6eUk6ojFYaAhJjiGxBNdzvYsEL71aRCvrE3uK",
  "key12": "T7uTZWjKpNP3HBRfEkXd8sp89s41zeCx994qvw1S8xJPVFh5tZZQRZqdM3RUww4vZBJG1cQc5iPqPvEs7Ewwf45",
  "key13": "3gyQRq87yR5XVVs5VZnxMn5yXcPk5bahW8uFg4QQQ5N9YDree2GuAYQEySpPRRer6BgsJqAtvqSe6rWen3tzTPxE",
  "key14": "3vF1dBFnhhPaetWuKmcxcAthqkTvjYhxAbbRT9QLjFQ8r2WGKDwES6mZYSna4zU15DMUtJ3FTrV2JPvABbifD7ne",
  "key15": "4rHhiLYTLCKrdb2ANfjNd3WVtnKFNm6QQN2mvrjWkdUXt6dvY4fwjPpqKi1rWrCDq7Bok2XZBgeTPXDSn7NbzJom",
  "key16": "4tkT87RxzY4diUWdDCMaVdZGEjxrCK1c3Nmy4Nfbnkixr7Zsdi3cLyCgSxnVo1gchpa8GQMvBYK9xa76gehNMuVz",
  "key17": "fdP2X3cymN4vjkq7DMYLteHu33B6eC3FxF5AuzFLvFv7zfVAdmAaJ3Jtqgv6LjMKKKAVww6ND1woSg3u72jTXYq",
  "key18": "2uLTRQ2wXjJeqDjL5qa2uZYVN5tVyz8LwavFVhPnqSVdyXyXgbpn2zYC4gPJBD3TPZNSoGCqx35EgrtDVWG6gG2W",
  "key19": "HiDazKtj9RGcWbXAjBRgJRtFWLbth7QzMua8e65XcimncEJbL3Y4uvi7V6PNuxhg8LeGoNjaayVmW6zb7fPsGch",
  "key20": "2J6WxGN9ezid7KuzmdPYdkFuWZPmT4VNKkCYwQNCELYikKurySLuk2RFHckydG5CuEbQSGgHiZvy8F3tWQkPsEBX",
  "key21": "2pjsxpmaGZM9TJV98NVm2BXosMPdGPoCrTP3ZgPAeSszq1NyxVG8mRuTaY4JzZDVscsFCYKEZUERC6j5ZGugXm27",
  "key22": "3GAciXdimjQPT9UdAnriBfMa4hbUnJhmb8zvDywfnkLHEaSK3p1FSmLUj8x4ZABnP6zUVAtjJV2Gn9wHcs38CVgD",
  "key23": "4V6m1uH4sKNkYLe6eFnf93tGQnVWc81Z2vSxRtwzDv9UGykmqNaYDeuf1qZnWnFRcqMK1dnbAgAnBLF9qWvTa9sh",
  "key24": "42XiZWAdWr4Fx3Kj8eEhg3QZrnSoQ4sRdvEQL9NC6kHu8oMz6MwAmhFNnXT2C7SSxBSbE6kzpmAEu2ZYUsK9jgTa",
  "key25": "Wn6MQcyzKddt6FwtpHN9DZNVkpdsYMWBKv9T245d9CDFVQzQt7HDzXa9bhB4AKimx9Txut6hRoU6tZZq5Q8FtYY",
  "key26": "2NxYH9awPxhzkv61GmgawcVwpHT7ThovKQD34hCJXFwcaZgK4HaK8SyWc5KGGgqQAMtgKe1swynw56BxVySjBi3F",
  "key27": "hDUH81q226WMZbHe3x5HYtikbNr4kSMioDbKYAMHC6dR2QnpHJa9azBvXXHbvmBZiFPZUVMhFHbCHNSN7es9mCb",
  "key28": "jLnX5Q1FKzFQVNKtboVYUMPsATDUDZZodkhWcUbLvRiwuzvyz4tv9f5faLVapczXUvefnNaJVmpCx8UPWvu9Ci8",
  "key29": "5CF15uBX1oF6YTS4SSTKrwqrSsHH9jW53PPTyg4YyVnBadarWRxeCzJ3YdocCryDWg26v9aYswgFF1WC1nMSWfdT",
  "key30": "2ZL4nAnJXPHAAjmzMqAEooRsddMcJC6SeM2ooc81iHLw7WBFbUkuUrgeK33Eh5dCWSNQFhg3y7bkoSomWN3mE1r2",
  "key31": "3szixxcUW85XA7BdBDEP19c5VteWWvjrn4XzXFCgkasqNHioZtZejWvaq9HhGrf7YXwzLok9Ehostwm9z63zVBdq",
  "key32": "5Vz1TQNMfHXRpYwByCMtJVVofmvW1TJcA6LxJEfgoAVwRBvVREhVAWYQujUpuR6thG4uZiDFKL7cirU9EYCD3wyk",
  "key33": "3tWrKcsgfhKWfGM7d7TnNbNfqHxM63r7DjrDceNEmoR5VyfwQYhjfyKLwD1vudTEYjTq7khaQjaNj36PaXJCpcRr",
  "key34": "4SLkeDL68ifV9JXXZAqcxgnkTkRCxFar1xKLTUHwTd3sPyWt5JTwKMmofHrvcAaXUvqzH2DaLskGEtBSKGU9HrwH",
  "key35": "5dkWjAHiHhZdd8PMnamChZxqU8XMmUzF2xi2sjH2y1FfcGGUgSJWEo9NMfK45S6Ya8VHqCC1aeybQca11zpknWbs",
  "key36": "3KcWR1omT1Hg3Y7i4aSrv8BUXgRhzcdqP3nSToVnh6TDBjnCK4A17Uor7JfXCWD6n6UX1GzoFHJ3uNcRCn2XPGsS",
  "key37": "4fa8RnuwPdzkGrnjvu62z11icRW2rT7qBs2V3AW5NEipDueH38qNRQNXe7AL5qBoiVzRXvBYfJsTZLeQ1NbH4s4p",
  "key38": "5HaKxTTfAvT2sHtVzqA8nHHW6WRAFVrxrs6oWUYuVZXdiih4S49ZJ1tWFF1CWUz4T992XpFWEW9oS224FJD7VvzB",
  "key39": "3KKcmFG86h6qZ1VrNg1RzeHeZay92NQVSeZcYzZ7zUHt8CjJvWfYFrdqXVzsa9xyq4scZd5zVVc154V4bixbQKsH",
  "key40": "22fC7x5dVZdFQjWTK8f2KYYsSJUh85M2NNAnqCEqQHA8pQ97MXYDwzT5dTCqVLjKtwGNKMxidrjfQGd9aEcyMEFZ",
  "key41": "63MjwRojwYysSPzzW2VkZWV2QM6rG4VuRrrXDBXbsADjJVwcgux4tQeU2U66j6AMGtCGHhxHDJJu9SosNfis6Gat",
  "key42": "57SBy6reeJLzrmwaCvg147omTxmRQR2EuPchndWefUGPMunhi5dV9fKV3cPMD35SivfYPvHoSgxk6nnbtRDTn43c",
  "key43": "4MyEAvEcbhfTL5fxjqVY5ZgjzxLRjuqHZiRrYM5baZE2A4Hy9ab537ENfdxtAvuTUiBzQDEBeThVxx4gwkjv2tAg",
  "key44": "UCyrA1cjJ9gvry17z9fAR5JnX5w7iSwCuRgbsSWf6Lc9tfqYJxHuoth5n4JARqdmz8rCaSyYEH8bQcTDrHgHWoD",
  "key45": "2cdk4aGnQ8PVhi8s2LrBKSjVRPeUv3WqfuXyQZtCCd3gFw1FQ9MzwovgrVTVm5ceaQh8woJfNs2qYvh2V8jw4wrt",
  "key46": "28GeQ7iiSLBUc81f2kuZrG32BVu5VxhcboyaGUh6iXHwgf1ZPJkY4qmyHjcU7XVTp6yveeLNSdM2x24unmyhpf2U"
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
