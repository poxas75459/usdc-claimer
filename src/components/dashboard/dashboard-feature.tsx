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
    "5UT31b1gDpdUA6Rv7zt4ZyiTBWT4Nso6tFaLc2GfZ1MmFWijQB8ohFWqqFYNBBKb6bcn6z31Lv7pxy9Hsk9HoPNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgaRotvGXL7v9fh7xHCUTYeS6MJ2MvWUYqoQXtiYmY4TQkeN5xGJh32yGmngXcKn5EKhHATWwGFPhN6EQGxJuES",
  "key1": "5kwnfdcFzFRczMKANKDGm6gDUSTdKJGGbyb4UbLDaE5PWxtJGQCMtUhHC2hSCqchW4DRi9hoxrQdJ9XghoqpyWUz",
  "key2": "5PuFSan2yPnKt2666eNrwCHDaKQpLkznuY9eMSbX2BnaMhnVT4XKyZky468uqX6LMjdVw8RZ4R73hd35pyrfsqjL",
  "key3": "MYN3igDXQ46bqoCGXi63rF9C4B7LC5TBUJEm9sB6T6A7vyzmZTcCAukM1qB1jaMSWKuJWqM5Xsqs3mGBxKZS6kd",
  "key4": "3VEY6hWN7QayqUSfMRJptrL9rKcts5GG2BTpmCJ4m1QqnJ7nrNysWtnzW57gk2TjTX1YnWHn468CBjpiAJnZwCKY",
  "key5": "4YUGyqryiUHcwxwwNxwDD6ZtCQYqbD26TWLmfymJqKBK6BFAeat72wD8z1RMbD164sCfBZSZupQ5Lo77R5oUTRCw",
  "key6": "3kvACcHhMuaTpHYKpWQdWKyEPq68ZH58sq16HzLRhXnfa8G24b9EJvujra36yTAJKcgWrrJnL652xqidVjQjtpfv",
  "key7": "3XcGuLwwZNXCuHXwcaoV1eKP45i76caxYTxkgsxzuvFPcwfsZx3uujRPA9gfGZbDpxyu9JnwkjPqyvBXKQU4Hfz",
  "key8": "65GBtH6Srppz8Eapvk12bAdHKHgNjQkE3WHC5aoKqQRrBcZkgGStph2jvViiAjWPCxcn5ybcgAEDmov5DAUrbn8d",
  "key9": "5pd3e5N47b4ZSH9YRDoK6MML5xVip2kaXnNBC9pKMxUZ7fcjLoyFdwGuUPAnh8npX6XKZvTKgh7ZWGoUdgw4qzyp",
  "key10": "5pa28v3jv6XUufED7rPCYefF19gJ2mibSgsJwRRZejqvhMa7zt5gWLv7VyBq6dZQUKZP75qfrLY62e2VKTWsq1vq",
  "key11": "4vw1LS4aAbyhLcUrXsV92rgJkKgVKvyhn4PKLTQ1C19s2ZFgJvawEbmTkiFMT1f4cA5pRkokhm6yHzCRv2X6v7D1",
  "key12": "4Yd4r2tqykuiPVGV7cdAGpNbGCYXXZgU3tNKwquJoJMAAumQzzWtpvVUphTWnERrmvCdGzVkpgHJ9bDsRYNBhaJe",
  "key13": "4qwZpCv5be45W2bnbAd5eso6nARVAo656jLhvFUU7gvgmSpKBDFJ4ceTnxmZ8cPvSqP5suYpa6uyhQzycmpfDTet",
  "key14": "2ib5AY7PjJUtqCCyryvdpe8haDyUWWeUBhAf9tgqqp2Rg8xDeLtP6F5Q2jG2GWmfmzBror1zm9BgBHj6kRSGaYsY",
  "key15": "qtxxsAbA8MqLeYS6tSxAnBmn2AGFtKCp53uDsiuG9HTC8NWmusQaXBUJFoqSKsGdMXqiXFb1RtT4LUTzbaCF1PR",
  "key16": "4baqdT4sc9jrjVkyNp8tmYf2BgZvkniQxuGLAYwQRHJfkpDyRp5f9tDhve3jNAjC8TjFBbdB5xShVpqZHNFYXNwj",
  "key17": "5P3J5mYhuuEu1faM5rrE9S6LeAWYh9Qx1bLtQnJ8YET8g3gkp2fsWwdQzptZmxNm7urRxisMP7WP77rgTd7rc6TM",
  "key18": "5TNedbJwwvF9qWdBumaxv5RJdkp8aj1aQNiCbA6JNTdrnQ1mYUasEcq2Zp3Fh25PFDMPKp84RbRLZVCGDhxCV4tc",
  "key19": "9PiCcmcfV7Csob8peZHZ89bUtNBRtN53ccJ35Wq3nwwhEZ7W5GaRhfTuZDVEFra5Pp4Ta7vPUjQcPpnJrD1iPbM",
  "key20": "3d9fxuSc2KFomEjXzacWVac1wE4e9UeKwuJY5tzDp4jXjFoQS31whk5a3eKKruyxaeCSV22WPwfkudrw1r4KhPzy",
  "key21": "3JEVMHfSem3NmsbgtLW47KjAstiCUaBAyG6TjrEoJoVZfHFr7VvFazFuj9bwUbt9Wia5ZUD2e5HnFg568kLQ5Mmx",
  "key22": "53n23vu4XiQA3VMTA3vKBtw9TGuRQrP913niusowRz9HzGBr5mkNqoJE8PcGrL8MTQzhqhCUXdQDwvUPxPPPUbM9",
  "key23": "4Fy75YbhLPGxF1LVZKwSEGakL5DY6s5FwmhSWjjnZ5XK5Zch45r3ToQNzBN33bV6oN99sTFzzzGHRoLatMLgNYe4",
  "key24": "3nByW7gmgdtdeBZDGpgmpex9Zi63BS4DHvijjN8VBxxnC4ouDHqksXBYKSogyeCmHjsJtfivHeoyZkGit8rf67mp",
  "key25": "5yFeDUmsyc4ACvJvaZduJZ5wr7MeDFFzvX3v51EDvCuGV2KEaCKcjw5ZY4Ls6w5nc7BxxaMCYQYBC3nvPha2Nuom",
  "key26": "4fehxped8qSCi3BoR2rot3g4bxpDWkuKYGsEhH5HuXprg2jvQYcvFUdxbbp2txewfyEWskNpGbxf5eUDtfHpnM1",
  "key27": "8WpHQL16mpZP5kWLtq26N7473mSWUH9ugjUzzFahWCknfqW3WiKRDw6Z4YwNXGuqwgGyY1c26RvmjN2oe6pcgYL",
  "key28": "5TkHGV6tzcKyZeJ2d7nYdYz8UCD7d229g4zJnY7m5urFLXNvU5QM2i7odGd6oujaGSD8bej4bW1cTnzT6xaRkbaz",
  "key29": "2bHThBHWffQe5BawYjhiucpwyoFjv7HXjNKwTTWTJohRmEku3PTK31Z6cyBTMSogZ9ySepqsEw3ZVr9kpd3GNzot",
  "key30": "5o3yxhaJkZpXVMzJjanExYMXVzPiFgLpqGA4owphufX4tDzJZeTm2Q5djAs5GF21H295MHKYuVgCjgRLU3YEcg1E",
  "key31": "SRCgwH61dpKAAF6t4SnC4iybvK35sdnB36kRHSQv95v3vwcZDdNH9M2qkfjBp4xiWGT9BZHXmbtqeyo9Rd5D6mT",
  "key32": "5n4cVdA8Xop42Pik8DVbGxRza9jhh8zdf3f2EAZ2pHBRsRBjW3nxgobBqJfp7aHHA9sRR1iGwNR3rMRnHjaa3gNU",
  "key33": "dhp7BkX2ToHW782HZH7Lg81WP4ya2iWhYTbgpjzp4s8TqxoZRGo2NnjtrdoaX3bAtD7ngCTmiejGj851HHqGiVA",
  "key34": "2PEJ8nB87S5RbSfo3Ukt1WDSmpXFZijfLVmgMZZ6HMVWLCTZMVWFafaxjpDXyzR23dtU9AfSaRUNHkVwjZdpzDTc",
  "key35": "vqGkSEyTZMitJAMYi7SShsyYE7PkLGxCr3zQQfBmWK6P3qQ7Z9SB2tipU5Mts3mJmNBC9VM4rSXQsMDAVZbp5FX",
  "key36": "2RWCubAJtq71T3HgEnRuAKvue7hDgFqgZtta9BT6uTpnjBqqcYkauTXhRMFhaXw4yLjviYipXDLpS2xrfHnKFRDi",
  "key37": "4c1NbGhExktLdmo8HYM81H7ZBjLgm1KhjztJgsvAiWWrXp7iNmFLSJAMv3orEAj3tkLkHy5ppsF7tBcBkuiMspU9",
  "key38": "2JzbKDFK6bGY5rnzuF5xRPoNh4Rh64fqh74basiVs4ujhL4LTztRT4PUPLc3vxScpexgu4rHfY1hFYvabJHCt8sN",
  "key39": "4kpSN17UWVHwSkMBNExigskTfXdThX7Lr1QHm6mJoXFTMPhrK1gGKqiNMVezyosoDvrqr48as5PhXwLtJrrw1Qhp",
  "key40": "4KXPz1RGMxjSH9rqJLuQNbpucsyd2P4HYQTCX41FHDnCHP8ANCDANkjtEfDQPg5RnYQskCNRxUVM9a8eyaz8XgLD",
  "key41": "nzXEm2jdH4eaiDCwvaEuFCPQWnKVUprKBo4vxiW1L6hJKgVffmpQe72ehC76GLgFUrUSPxYKdCDvtKUyq3msdAd",
  "key42": "Qp8TPFBS5g9ELYHKdgSM7S2Yi1pQJTKHGBT8Xa9kYU5jkp9DQNg9G1mZ4W657Q1GWCcadDhkbbyCTrC3rVfQQfp",
  "key43": "KLqhoo81ea8CF8AgWtpAqDPcTboRywufcqyJ63gjENH5Cf16qFrsLRRXAC4D5r7ppnPAwiNDk83yXWE3jE4bME6",
  "key44": "55TRGKpioCoENj2HByZBrQDccZ6HkmpQrY7Pvdd46bggWmadT16jZg9FSYjLTjeDtb2E6VZjWQ99M1ne6pQbyCLt",
  "key45": "4Jsmmu6faZG3ZZcQgQkbxGMmSjsJuuVmHVwX9JrK8fV3TFouahv8d2Ky3447bBXpZanAANVSTx5xCSEHLCQAgQzD",
  "key46": "3kzvzhfXoJPjbfjaT1vPeoVMB7LrsZ1cuJtohytoXC3VvsgwkfqdVc67sD2QkaGaUAiPbAyqBcGyg6zdyGSrfPs5",
  "key47": "3LVytqv9FXAFoSjhvJYA6Ao2yxaAfD55fAXfCW2f3KiZs8dA8F6MKU5W6mMeK9fCoNwxuqtZjrfTmd84NNxgMgCc",
  "key48": "5SyMTgvUiqB85riHvoDuWfCziZg5J97fv7SacKG4BjaaQD4c7E84oVfg8Uevmm2ZM16mfdriuCPxip13HJZrcNQd"
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
