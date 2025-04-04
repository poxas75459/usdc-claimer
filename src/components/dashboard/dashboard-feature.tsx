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
    "27GnGUAsaNy6tEGK2omL9fSo2Ae6Rj9MPtfCvyR1EacdytSsm8xdgkrrQjsFh6iTRRMEvXyPD8KSmwwSYEdWWtnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TC5zXgwtGirXiY6F2oxVyqfaDnT6gfin5SkgEqdRwEJqgiRRY8ZzzCV9Wg1myx9xBr3UiEyNHkm7aLtLRPBR3XL",
  "key1": "2pLSUbUzLmYDQiXWpNrn2Yd6e5ZW6oWRoAw5k7PG48DEKbEXG3mepqzTj83ofDVUrLCknv5FHah4qn3yi7otHzVM",
  "key2": "XxVPcj9Zcs8PZQu8P51iq6pRymM6bVE1xvp81jL5z4jQqbxg58YisaPYGa7J5sYuBCfDM61NCGSendbRp1w5GjA",
  "key3": "5eZeqf8wMQMznNXr4V5LEnFyDyqto2dMVoG4yAyAjTcJswy3qJEx2PC5FsosrDbUWbGLSuMHPM35v4nSkyLmpsX8",
  "key4": "4BfuDGAAD57acBHtn9rdCyLB6ruBk48UzK4ydrHKcofciYtwLhqY4dZyszxPWud2V8GQyY2YGC4gUV1mzLH7SsiC",
  "key5": "5UjbxbLcjVSMwn9x836mAA68ge5iQPmzXWDuNqekSxK6g9KqmRHrBBU77SsVz6BhWDqUJEDJk47orE4xXaXYRS97",
  "key6": "4xr4hbefGZcXmyAZQwzTa4ChfpUFvRcvJMoMf9NpzQMhcrSLVUDdDsjGTY3vsJj8MdZMR5WnNskzdwgfLaqdHhbK",
  "key7": "4ji4Ka4VcPr9CLTAuJrQ484EAz9z1RU1eUkkSMs1J8RtYe1TsRVJoj3uctDkqi8mkqWztf8mdmXiGyafaGrvZjP8",
  "key8": "fSBRs3tJ9zoHnpV3dui865RXQTfKd699i6ajw6bT8Nv7sf6hmsRigU5tHDqQY2QffCymeGRNXEGu7o8dD6CNF4b",
  "key9": "4MzXadsiKeAvacin6zBh6WVcfAJCTg84SPVq2JKtUywjKvwQTL95pAbutreyciSuNKfTGLvHREfpekEoNUGLU4Zn",
  "key10": "1292VK9ayNJL7VG8iXvpgQbGYJrnUMSxucgv9ZoXsDYCVNuLRwuvDJWKL3jNimbR6XH3Uyo8urr8adH9GqPPLmz9",
  "key11": "AN7S5ko5M5dHpPkQ3BW4YkcMLbbhvk1P9FJTqBrHRjs4oFVoDUeQksAbYnyNcThg1xjvfhjQ1BP1sPrau6K4Dh3",
  "key12": "2w29xKPxcK3DUGZtstvEx1nUUgdERLXBceFSRJi6bZBDgh91QgxUR5466Jukk73Vix7e7huVcYt5EFD2LfeWb96F",
  "key13": "4tBMmwSd8jdmXbA5BKw6GhSNyapua83jABxbtjGDCx2hB7vU6JfDz7bzG9a5d5DDuQxPC2rYpWFBaCPkwjF8orQu",
  "key14": "5UMX89YDyCVeB1XETx1muxn7zGZjiNBzFMk8vnD2YcpRzt5BbHn3rLvUt3sgnNEz1LvgX1zUVs3YLUytVtyra8iC",
  "key15": "3yMrbSd6W9qSJ5wUPMmJRKQRxAdxsYct6AmQCmNgqcnoJxowdcb54dCfgn5WEZB3ibLbvnm179fvWqNtH4Lr3qM",
  "key16": "5UjzBkxZziGxnYbVSXChs6chPYaGcjqWkaY7yfePUom57pZZPdnPULxaSBf4JVcCZSPjUygMXC1D2tCGTzdWbRek",
  "key17": "3urNG3VMhmPvng2hgLHMjwS2HSXSXAvKcjgVodS6qTgk9pG3isNwt7ZnzxBkRzBchDp77H6qtouY6W5Hmq5reY7Q",
  "key18": "2EzeiKD819kZL1r6xP9WjvbHdPoDVeFsF7xh24B2NCwMDEmHpkCHnatsB9F9Wesx77Zyb8KTiMtp9EziCUUjBx8L",
  "key19": "4UK18NxdKhkNvXHeNNjZ8vVbjdPt9yFKjkY1mu8TKw9U8AddUyoRvDNhE8fN9aYfJAhiUqXDdv5H21UYvw4qywd8",
  "key20": "2131X53wDpwurLWpTdF7fnFue5LasLwN9qmZ7MmmFtxezzR3xVvbPi4icNAzrDkBkssN227cQme2nwvjajDRtvYn",
  "key21": "2sXoK3Ax4Dn5NQU3TLcEPuDV2tHA7A8cUvpRKBR42cJfMBHBnqQDckfFBx71imMvXTR6GHmYpQNx9HWa84HFsk9s",
  "key22": "SKWhynu8S8gFsayWknTvu2Bq1vLH2iZNR7S3iyD6fDdRTT9R6NTUQHu75oWm9pgwo2nhjNcy1WzfsQySMgnkgHS",
  "key23": "4mfTX1XK6C5saGCNxLufQpSEPj3nnXZNB7uyPqNunL4feSog9zBCBPpRCKtQcGiHxNM3nAgja5x4xez5Vze6n4WG",
  "key24": "22NHue6NR4CWXHqjmvCMgH91M7jpRS4YE9ddQe6KDnae76ue6eqm2nBmEJqgoE1bH1P3oQkqDedBHLkn8oiLBxLb",
  "key25": "491iReVPdMjcTffyri6vMVMFyThEezKy8RDzJtctkantckqR8gdi6Hdj2UH9ffAHXDLLQvLUwYrVPLBzaMxXqrH9",
  "key26": "RAjHNLZKerRafbqYfFhofUe4WodpqLfyV9esPP6dAy5zrTW75yXhmqX1RjG4Wd5cg1dQssaYLtwWgp36mVY7XXC",
  "key27": "5GQJ45xyjMW6qCJh6qVndnEDc9JryHz5mkbLkhdGmn6aLJN9rD5kSqon8SLh97gK7EgCcS9RA4YXvHugqe5V67MF",
  "key28": "5dwQ6ykmVnCeB7WCSPg8QM5Sn8nrhFqZ69kAACd5A67WW9pbTKyzSR3oEbEoTiNKhYAtLLHTyC7GYakibTDihtgN",
  "key29": "62wuYYEnZrY12AVLkUodLKZbUroZLjvgCCNh1wEPEe7cKBAQW5onWiqJxDKz9wsAsU4edHzVPs3ieqLWUwr15Ye5",
  "key30": "2LosShLpn1EMeyUrmEEqfKeLw93XiEqZxbENZPz6yeK8Z3QgiJSfRWKLvs5LRT9gjK3VXYwvadLeX1fymauregGq",
  "key31": "sCzQxyhJgaQzqbTBsJ15DeTpNu4GG3cX1BenQkGLHhfCvUUSdhpBbz4ze1vjpqadrpdimJG3wkQsQjQXkhzTQTB",
  "key32": "EPLRiYC3Ut9JPh4YxxvdGVPKQksmZ98ShvkXEwnqyxkdUqjif7CVa3pjrMfT3AoPmiP9Np1hroXjjdqNoAwBKRZ",
  "key33": "4VYWQUVJ9eJRpQhc3ak5sXpFRxoAgPiZZceznjRVB7Xp1Ns8aFEpgSkoAS4h5fYZVGNkFQhLJvw9Jt1BvEMHcr58",
  "key34": "4mAYzWKDHdqvFj8T7YeuHbvHMXP6f6eGga4UYPm9qQNUAR36tLMsGZDHxvSV9Lbt839iTYeFLSq5Ph4cnAbNAmGQ"
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
