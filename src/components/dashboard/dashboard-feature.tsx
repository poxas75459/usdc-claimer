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
    "4F757xuqBXmErGmrVEJcr9rSLaoVcEqzHx9eZGqD31itXcnsxGMZ2etv6yeMXk3CP2Lq7nYfGZgv3Ki8DhbbFw1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkCWbNqJZui3p5Jv1ATvh4wJXsCkauZZfnjzc4w5FBN6aaAZPohaDaeC1k3b74NWPUozVomXFWxdepU7eoSbgUz",
  "key1": "3xzoVPrdTYQbFKRPDgF7rubxoZsyURKEvuKmaEKMipv88gMe2QRt9CNepUJm81CnUN215QPcvYJKLf6shAerf5X4",
  "key2": "2tXmEhV86obxivnhk8zsHbGqUbAq8Xn8VkBVQXRzQhpDSw6bfLt8NKDXrTyfWrFmxUCRQ5UwmPDUKZ8micQ7PMwE",
  "key3": "4qYcC28TN1a2u3igP4vq3GTVXP7HRaPKP3oQ12Syr94yesnrWhJFuZQim4kguGDsMmZo1EhPkeN285rPmSL5CLtE",
  "key4": "D9Sk3abhA8FKLxv7gZYrsXXx5WekFBct5DcKZnYeFVuXHCJFG9ozWGPYH7h8UDNSYqwcM377qjTX92HQsdMVcC2",
  "key5": "2ei5RMKBsuoFe6zayt91wLLkcidnWDBcaJJKwSufnudRdns3zDE93HLTcafXs8vtdvKeigZnCB9ZJCNgkQkoa4U1",
  "key6": "4yCu7yFGzUMWWwcHiqNVApStiXSX8Q4GBh9f74KNf6chFa8gcisMeF2V27eHYdcpMNUA19jc7fPZDBo6terSXr9Y",
  "key7": "2VXocDj8VNS52LLL5P5Atbr4D7enW9A1CdUJS1EagenCUbj5oz9vYHw9tSQxk12hhPBC1ZFpXUZLLA6xR5JtZKPY",
  "key8": "5ExcUJoRebZ5DxiHueVgd7oD4zj3JY3Nqg2B7GY6U2TXA7S5a7rPfo8XVoVSM1smNAmmW65ojEH5RWvBi68hz8yP",
  "key9": "4udRZqKSqoVfTDZLJC2eeh6aMgRMiT4jiz9ruF47esT7uo6t27HuDsaQeXGpXxk9FHx3Eb25nQnAUdMrrxS8DHbP",
  "key10": "4swvgUhLXMb6zt2SwE3uegTenMmTgBSudfLzCsCEbjfqWpG3d6RtXKJUX2UubDur8SVdbXp4DEdS7RYSwxzYceLQ",
  "key11": "3Cxe1AVbMx92uknYeBARRVbHBpnoM4v3K8CHtJAsuz5nQVgPXmWe2jeJ4kYPZVmzdETYUKxKweHEnDLWqHKVnPBc",
  "key12": "5xMiZozdMq5yQ3q6ANgnnTX5LyQWoKRMTuFkWeHifeAXZrWrcB3sk9bJP2GAGmKQXHRD3eZL6Ma4mNZ7RQT7gV8M",
  "key13": "1nuZjXb2R5L3Kb9xt5Q5v46NJ3psVB1kt9yK79Te5XcrthnkQYxoJKGdSBgrs1xSLpp72FksUYoW9oBhtfnKfbR",
  "key14": "5DDTZTbASqE9Gqa5FjMdcN4BxhNGyrqCk6SfPbxFK7jezzrCaZNN5DTUnSoo8KXEgbJ5tkvvsMiRPToKbvFEzJmw",
  "key15": "3zAGHPqZBzeN9pinQHboEdxh8RM1GDgvm9eKFyMpTEz5bWejhjuf9xdpAaCu8QTPpd3HEZyBvBaWbEw2k1u8zi35",
  "key16": "FQLN6QsKFdTp6TaiagNwsh3VYkSXJUJbKYyrW1gqLDEjjXewPKzKXVbdttCjguyvj6n3u7dL1mqmbp7LQ44ABrH",
  "key17": "5vRmmTPmhtjVdp7UjopDJReH5k5fukgUMj69iAx9KFeUa977JjRVPULQuycJZkrFDLwP3xwxAnb9eToGzbYJRmhz",
  "key18": "3eiSNvHpwsVzzJDVVRkBRboYXSjaQfdkzcxQT3cLd9WnTC6svvhbueiFVQEiZTEpPzJU5P6Jxb8ZLJLJRqJNAwD",
  "key19": "5wRmtkF7yLBA71fe5ehmzURzXEcvUNz5wqBE4FKuefVmCz2dV5M7z2arvL9PKPtGHiHYXbLhx28prB4XHt5sVZ9u",
  "key20": "3vk7VZ3538orob7tKNW8bgrHeeGzTouB1LfTuY1EBts8PNEfz4niW39BsD7dx2X7zoqxrASc97kYeP62ZxcbweW7",
  "key21": "5DojXAUJdxWYCaCEzMhRcAhEbbwLXrZiHkd3BVDVTKfXis8Dyw3bNndhiS7VuHbTixoMCV3icmetBLjbq9kT1gjo",
  "key22": "uEAvMwfET1tvvuShp9YPLC1fgfWHPqBXYaaeiVViGaj8svxYN4ATqAW8ofbjELv5PeJVBpGp3TFgnFfNHHnM4dg",
  "key23": "4h9GggHPQae3RUi8e9sofqf57FfRZ9PTBvzTa8HpT4oUEKszdFtxQcaZrkcropBD3NwLSYbYsuT7okvtxJZvDXv1",
  "key24": "3BY3ARnZUyP6kMzu3EMaPdMoTRu7yMHgG8jJHLwrW5bhmhn4aXt1yHrwJpx4j82gU2MEy99WpUnA3p7hqPwVeHWc",
  "key25": "5f1o5rBwVYgi1grL4RqStqNxwYkCy79URGsW46DEafA6Ea6FN4fGQQ5yUZnY7Ke16sV3g1NCZkeFMjRwZ4pkvo4P",
  "key26": "4zWhhXuBGz2RQQs6TzPNJJpmV3vH3ufCtGXsaCCoW9YkDT7bRJY7ZE6ZbFUYTPwUHFy73EjtP6QyYMbdZVKcAipD",
  "key27": "DvywnzPZb4dSguhdunymVKa1iB3dcLahxCWzuB3wmZm3C8yzBCFxKWzXSXk9vzt7GJHE9Qg18hWW7w9Jv9AZ2Ct",
  "key28": "4yMeyuqyM3qW6siKcN1UunjkKtH4ScF4HFpxmw65Y3u29s8BkUdgLsea8BKvapaiChzJYGMyU83VsawdxNXmfNGu",
  "key29": "4Mg6UfxXoYsudEzkpAaJFRoXnb3nXAr3rCczGiJ5SoXdYE5ZsKE6JNncJafAfaCGSNMT9jMWHXvFeB9RmeuCS2Mo",
  "key30": "5wCDmQBE8D5HJSidcv5CZpwUhePsgZLFW457BeyTJEBWVEFEuR8c2UTNLaioKYcjiXSneujPvTqCEh8UxpoXTZZT",
  "key31": "3vX4YGNSTZi91vYvRfTnBaHTy2mxUB5F5wrbR9SCnPavcip9gtcjTJka7PjRV3nunYbzLvnQv7NtvsChp6atvDKk",
  "key32": "4uckL4cquuH2YVmk5F1STnouKuqkdEW8mtDYxDC5w2PPNHeYTUCc2prZRdZZVaGMXLDrNt42DeVyskTtRErQBFrU",
  "key33": "5wqjQFA5jyJEbGUD35oSB2zL6AU4raJzdEXBnsJVrgZav4pXjRDwqPwHzQHwAkJuf8F1ynJBnzowxhej6KahzNcH",
  "key34": "4pcVAUnLP2h1qe3ksCAGrwUr8E9kUhnp5gE2MNzEbF22c5mbyqx3LscoK9YA8iXgmcfXei2pNPw1khnzaruveg3J",
  "key35": "5aDHU6eT2MFTVtcQ5uTqAh9Z9vrZX8qx9pnGPYay2MBFXM7VisejWpu9qrbska1MFP64UM5a6ZPhZN2cZd4Y9Kak",
  "key36": "pXqZvw6dV4znJdzESmBer1oFaxKbd7DKsvk9PchUDBevt8fjSErqqpXjVedctLcsMZoVHZkJwHapQYJggmWng8V",
  "key37": "JJAGdyJ7WMuEeDEMNra3sioVaBMGGFtvDnPsXyGsMumRTsANBho4RZKLJi2R1xFkP6bAZZEWt47u4AbjdgMsF7m",
  "key38": "5KnuHcSpnGouRKmhRqvms1DvANmtXgtFmnCKznioipZ4g3PJBZN6Gi9c4LaqDV5repCpWFGPFrMtGVuTuPs8v7ZJ",
  "key39": "4Z9MDofMUWf5DbBaQe41ddd4y1Z1HdETzV9wZEZ44pME8m33BqDrdQJ1pUBtPpp58YzUDmqw9p5hmk9FNSbTuKwr",
  "key40": "4Y9TRuHjskz86r78dgDEhJFDdfPE2od84BEUWHbtUArznU5rXPJZbvpUsXA4TbqPCAHsBtNp7zepVd6vhHisMF3B",
  "key41": "zMEux1ufdfDxbV9BEUyAkHs5Ss6o7NkPDQ7SeER73aEZbie9yzwtyX6ZePvhrxXfjCCrNbLwA97Gm4pJWuHFUD4",
  "key42": "3nx6R1d7kjUGdyShAjym3Ede5U3pckPVkLLrtyBx7vhtfJuU72YKRZ9FjjeHqvVjXZiPp8TAzYBKmkgPjcWp5MAu",
  "key43": "492DRxtrrrVpWNXfmwpYAhRNQHYBsD6ifQXKLGkEd1oNz3vFGtBpW2eBseJXj1iyoRSoQCQurSL8NL9vthm7tnLJ"
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
