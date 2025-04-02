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
    "CTkNnYbm7z9ietd21ymkW56EyyxpmhDNNLfQvQaTXRAazeebd5k4ninf2HvxZnnsr8YhPL7fUsHtVG3tH9M8N4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mLbd6vujwPTdVGHGadoykMwBNt6Yt56Wr3SJzUiv6zHoKv7WNZBHfyiUYA6rRBnAnri2Jatgx4YiZ5CmZ79Vb4",
  "key1": "5zDyf4hyHq7LLtvCUR1e8Zk6DxDsEMzg6d4mDxm7tehutuEKisoWnvkaNy863WcGev1jALJcFQ5SNtvg5woKRFHr",
  "key2": "5D4cgTmuUq67BPTXVSWwuWBkrM8Ko7uVM7DzW9KHP5Ari8xu1YY774Xj8BM4WnhFPff13LJxzhhAm3Vf3wrwwA6E",
  "key3": "2vJzPhoRL59GWegzgYCWPCx8Gw9CXyZX7pUrqhb1YuiXtfuVAHqHbRqXCqWPLGn1YqrWoesrC6wZdtNhYQWGGVUL",
  "key4": "Cis7qxrUtwuQMRomAFXN5E8UPEGomudMTZ9AtdhdvFmPYNDzvwpVxg21PzevYb6mgBqDSazH7gPkwDQpX3iDn8H",
  "key5": "WEcZHGoqfb2QLqGqffvFUSv9jCcXxXPmNmNKXdFB7XCT12sSntzRjZyfzfrU6H6Fhu9gfFog3U1WzTNEgcvmuv1",
  "key6": "5QyfoH7ettm6ucumwpge6Z4mQqADM3nUWJdohn4UtuwFjjt8nsokyuzA3h6khWktru83RodM7DYpC9Reo6f8UaBY",
  "key7": "2Pk8zvJYgPdq3YuJBeK4ztLTgKavSjKcDrp4eA9bUk3h8QJnwCTgmfLhaD8ednEcDkqYLfhXg9MrwqzNcXSd1wjM",
  "key8": "5dRaa7e3bV4CPu8AJZm62ukUcG6vRr1Wk9KFEa18XmptDBmEiUXHAaiptT1GbjyTRgvcyCgSk88YXegoRVkeJknP",
  "key9": "YwQfacrkzwzZyUPPrUZedckErLGd4YCTg9iVJMZNzSKF4cA2UwsQ4JHGzz4CQXVEzf52cAzcN3ygZRK5UV9fZxA",
  "key10": "3dQCpcrKieh1nBbJLfn8cXoovZ5xFt5FprqGbNjoGaNy42CbrveoCetJNgoH5KZPdHkPeyS3hdpxjP3AhC59EnQF",
  "key11": "X6zBS5UakA6dmwc1aonN1RoyB5Dy3HsRD6QgrTs4jSFVjopYErpSfMt4Kb51mtvErVqXCA8PbQ9eaqXBwS91hkt",
  "key12": "51Xkm8mkEHUL3zmuAVQLmMSTGehVGZr9hSGNqxdmdhqMZ85Tj9YH6DSLGTo3J8NFsynuVNsTgkhcak931EnYiURs",
  "key13": "ftHFwCTykABk6zwFPKayQRcefv1EzEwncnLzGY7YrpYwkt1dBtnJ4ZVpUE4aZJDgXTY2ArBQR7UiVqQpUMTznpt",
  "key14": "39wqz7JEnvX7YqovXihExA3DGmE6TQSXDG2RyyE5U2kW97S9fwh6jYHaPURafXC2UJtRJJKJXXpVkipZThW8Wq2p",
  "key15": "42JKvUfpuZbHiwRxDhq7BoZMbUPRTqiA7o35psscYJLo5GVdnbGJpxW3XWNt8LDiD3Z3PVgyKmA688LPPdmw4aRL",
  "key16": "51MDTfi6ZWFNSUMkcgaxgVsMwwN3BihbWNvryQ7jG32CihspniSkpZEsxoxRve5VHhSeGWbNJJgP1Am6anYG5spM",
  "key17": "tMt5eAY6wUFkXpJAn9zeg6feUh7kA4yCL3UfWZNXCGwyPSDi6x25hTuRSTpUMEK2hYcEWSLwUzr9JAVfnZDEHtb",
  "key18": "2na2Ji3mDKEFRH5GNsScMX4rpgapDGqGremRDBnxvDFdHvTD3eMNfsQufUipU28BUs4RHvS5suVxBvEBy78pq2Hf",
  "key19": "T2eVZFm12g2SiLZDdQtgNJ3HNn2ejj25MgXZG5urFJ8doahgV2kMsNfJZ52HEwhVxNTgQYFFoAwAcEnS6DtEeu4",
  "key20": "ab6SkY1F1bQURRDH9uGxhdFEt2RcGDcnktQhSA3TvRCohrs3zj27ZYEYZEChYFSkGC1PxrJy5cz83cr84ybBybB",
  "key21": "2MhEk9E2B8qarsiRvMuRcfxZdGsjBsumdHDhBRMX4jBDS2MRjdKXna2CmvCDMvwTL7oGh4FSmUimCTndfHmVsuiL",
  "key22": "3nmwDzTy1MSBxWLMGtbyKdiQr2H1n5JYUJ18BnB8uovU5pRRfYECDuKhpYmmdFaX5mnPo7Tuu2ykpFBcLgdafp4U",
  "key23": "4na8SKBTfx1LwbtuGuVeFh7bvRWgGZX86JUoZbrMDrijq7siNb3T5SFNL61mm6PRakZ4f8VMBUFzBQNJBPJ2KVXW",
  "key24": "2KnEJkY6JZic29GWn35jq4WKLJjSAW1D7TztDaSak5yGC57hDUnoDNGNuEgB1cYuHRFryQHdF5p89agaQwSYm3Vt",
  "key25": "3agfmQB9mdnrTrRCNTBkmU7KntBwRSrp4pY3SK5rJA1F4hHQQkbF8Zae5q3hAaTqT5bdNqqc92wJ1ggyenCcbiQD",
  "key26": "23zNKgpSpiz2S1WGSnEqV4FXhF2Lyc245FkkWsFt6fQ7MofPKsocYTovicErdNTKbqTJNp29T2jQTurRDb2DrvsL",
  "key27": "4kRR3f2E5keLsNrZ7CyV6cgvJhzZow9jq5HEQJLedi3teQtDBigbkbprdBtJVxu1W9orJj4tZjMSsZE8VbWrteEU",
  "key28": "3mK1eXCXc4UTK61GYHFYUBKSn4hnKiGddtz11wcuZM43gpHhzAruLRpwQfBoQPsNW9uhkj9SNZUCwTEBcLdymBVP",
  "key29": "2YC3gwBv4AAKjG1S466xVX7L3WrVe1XJNgpE89a2H2f3WZEamGXAPXSYUToRLUi2m4NQAZ4APp5o3WmyEXh7AXXB",
  "key30": "5LhHn9r39fykHVDHZd5oqgFJwyoTqbUAbMNT6hV1khadti47drafkjsL4uNaopZHF9RDdkR6rPrWPcBmXsUM5wuK",
  "key31": "3iZsHpBRRP57Yekz93D617SDLqRpoTbgTRtr7Rxch3bVGWxM6arA8z1nTtK3M9spejV2y1Kk3HtRkegf1csUZ6HR"
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
