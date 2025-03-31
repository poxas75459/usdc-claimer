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
    "2TbKTaVmiubUi6YrC29DRDkgUAftYujY7hakgDSuae43WABQnAZMYQwvVU8JnS24Zx3inktt4mG4vFM3wmLFYW2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQsVHHcPQ93o9mgJ18eqYALe2omtTL8cLPeFrr72p8VUQpQyoKLSDaq5w4GVybciPd7SqzZC9KuyoTafUtbiWNY",
  "key1": "2QN4oQFGFGTQqHfRiHz9wsEMVjsSaXMTpEsLhXLCBpdsbBMxqgt1n3K9wHBgqsx6mFUdYohKPCAmqyac7hnw7DVE",
  "key2": "Z4WMnQeBVeofeC7C6W1JaWVRdwz3GYnpAbqAUvT4QEwkWG4TAaWqu2Gv7wp67UDimNEzc5GY3Q73DP5WKZwwAWo",
  "key3": "4h4QV2sFyESz6BKm7YsNW4LU2EBJahV16LivhcUnWJWtUxEU2SmMX1G3UHHMAFcGLXCDhezY2sV3mfcAmoLFBK8Z",
  "key4": "2wYyHNEjJsRs7ZNiSaQjGceA8GhAUcyzQrcqL2Ys5sbFjwm56UBvVKKk1DtM4J374znwY6DoZaRE7PqG6jQFqrYN",
  "key5": "4FRfuAkNszTfD94hDKgJASDebYwDq2YTvK3mkcnTaPz9WomypnJSqckdyiCfR7DTdgFa8kbhP89MwFMNtT4HZPzd",
  "key6": "4gRiuHGKy4vFR4zPyTDJXLtnjiRHdFpKZcBqQwz8xUZg1A5AWcA8x1u1sAYk6Jm9fyHCpd8UqSMNHa4YDRVohEoV",
  "key7": "32AosE2BWRq5EeK7FRuSegFbVMTvUvaZrfnJYG65CUdV6veRN69nEPmwp2Cbx619zsrxVBT8acS8ewsNR8WTVgbs",
  "key8": "3xrgSbRGZEt35ho8P5NLzU4Qn8t4TLfyxKp7ti5ra3giXYzqMrvrTYQVLy5n2oaAmEnm77qC73gdhwKMt5R5j1SB",
  "key9": "ATFWhx9n7W9vaaDZEJttvpLb5VwzsAuJMFNnm7efPQku9w5tzN46EHSLh3W4nQWEWqx5bWXzKEJaeuD5DYNKkhs",
  "key10": "34Jg4iMvWvdezG4zF6ZtMoHBu5wogR3kNQAAwPHpWCizuLXrXxc8nmM2iyZkuvRhHSc26cuDaAPJXDpT4hWkmDjQ",
  "key11": "5KHGHmETKfkvknBUxUgQo8KTYKqsuuLaedW6G72HBjYnW2zLhz4eQwt3PbxiCtTT3kmbFUfuYtdGRS36Hpgcm4Vk",
  "key12": "2iKiCRnXtG6VLtuj8M4kBuXRRzcYGFhbzmZT6zMyZqffq7PufvKyTXD6TavnwkLrgYeX68VXxuSM2E9kBesH5UY6",
  "key13": "2Rhpb4fgvXY3iD13ZP3HzGMWZCJ2jUKY4a3vLdvzx3LpXUYTrGhgc6d6VG4xFZvXdXwPzwbR8PCaZZRRPKWH3rt",
  "key14": "22jsEY69stT4dMi8XUnFRDNqPtoAcVA8ha5YDw3B14vspwXcPy5KZq5PxhBUshB1C8nrNoGuBohaBXhmtg1JiGZC",
  "key15": "5kmERmeHSfc8qrEjHq4am2Bi1kAheSYNubUKkdTwjwUJmANVseRn42qtuoMugiH53vCdETZ6qYrsJ2NSXicFr9ay",
  "key16": "2fPcTAFcdwGkig24wP8vqwWwz5STEbatbhcrMBA4iUGPA6pqfR24R3myTbpxoQTvfFcBsRCZZxvef36zkSvpyMdM",
  "key17": "5wUz1ED9trZcZC1qTsV4hWRfuQzueXwMnjFmtE99Mk8B72YNXmdCuv3axmQmbGeTEnYEPkkzh8FHpTkBoySEZEzH",
  "key18": "2D2WPcK1egQcm6rdLQrVdKwLzecX16xck6DmA96YWifbdTGe9tmLVkrzUxvaEGSupDngrFBBEAX6EHWEXBM7bDoX",
  "key19": "4m1vTy7vFKzn2N8Z6MQcmNhGdN6wM6eBmUJQ9y4EUT7Q2jP6CjWYJcf8nauQjc1PJGE6vw1ZFWuXPQR3oUZfDiDE",
  "key20": "2kpNyEzbmsGH65LGv9SzUP1r8C2YuqsAxHct6NA7XDVJcs4VqwcqF3Me8K7AzDrYn9Fame7ChRbebkUn2hackhfE",
  "key21": "4g2LtmfZTyAKC3UHqms7Ye1TatE49k9XioMtUMhtAoqwUP6T2uN4XqThmnyDzXnu6ixYgUtYyfNbtBcreZfYGnaK",
  "key22": "3LV8PzABFeAHH6Y2L8nLQNjqrKD1aYyLMzzmXa3DvzyN2Bn6VHrRCbhqQoUWLMvveN74y1kLcQzC1aStw2D7x55J",
  "key23": "pRa81bm4qFLuG38kqhFvNUDTDzkuyQpu9eDPYaN4hePP7JZ2q4rWcPa7QwpPSXKBL7obkQX7ckMqXQUb3AZwjHz",
  "key24": "2H93eeZ9igGiLPMuKdodkthH2mJdqdtAYEEMi7YYywWLjc8W9bXDroPGPvW2qMAiF7DSzuEa8T6K6ip7g7Nc1AAC",
  "key25": "VVcZw7nEAkdputGBAdCxKj3cz6oVkAP1dTQxJNeiu62YP1pPYg8CrWgiUfKc3LrGA3CsjEknwxUYjAe72Dv89Nk",
  "key26": "1URGEnedRNoZag1mWU7QyT6L1JEDybXfPijgroj9myDkA5pQppAq2X1HfG5NzgqhnYpzUyxshDn9W4NDePgzFds",
  "key27": "4WKgQoAKbgugL9i8xzMm4RoNjpD7uHAV2VbrXS5Pr9hYFjjiyEr5coWNTC7awtukhMq1HgGgZhGQRg1wkiZitags"
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
