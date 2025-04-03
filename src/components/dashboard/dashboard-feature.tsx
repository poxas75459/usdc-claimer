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
    "5BEsmL8hGzmTYwCBZvte7SpiPK5tedRpMiW61FHj1Dmvv2LremMRY96Nr3b51UN74HeFvrLaTKYSVPszCmVyfCf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyA6MB3ZwWRvqfQiQ8UdtRa4nE7tXLgPk7nx9zHcigKK4fWFkEYwAgG9zFquZGrmvfqX3Q5cG9UrrcgyAoJ2Uhr",
  "key1": "3A5ej97vWowF2PCtXhkRA6CZywfWq1ChxYsgZhRoa1LyNPbEDYW1RFNrKSmfk1UUGERhPWv5iPfk2xasj3CDDBxG",
  "key2": "mCeCw14Xc47NMQH7dQQoJeDQvKU9KrPx4KiaMguxHp7S3GAAMV7YwG5zUxDAMkSWX5gCBQXeuU1FC6faMPScvHd",
  "key3": "23uStqt9r4fMXwej4fcyuZjn7TYvy8jTvejiHByJVvPTdFRaFrAHUVTzvcYPGBo7X7Lhf1WJivPadGj2qJ5qA1Zt",
  "key4": "3joYetaA5r27Jqq9c8QKgP6UhSviNg2YsAAciuy1Gcjfp7v7tXiGoPGVcn6JUQ9icfEAk9nmvzTbkgVnEGSyFvD4",
  "key5": "52vHV7UtMrrfq3fCHAk6wXFJZqozKHbACFidQMHVb5u2QjyixtpS1HkuUMoL6kdTwmV7r3MTk9n1sx91RjqaQrRn",
  "key6": "4HBbFuE9sy1v5Xt8wyJEwMaSJr8AQb2Ywe52qxwJrFzLhDHYHG2daWqFXFaWZ29y4YajBFqWMUxFzWJyDV4LZtep",
  "key7": "5X5uFmTHh2s4z1LLJyDheZ69t1nFf26JJZGsaPC5Y95sxz6dYZgpGBgYDxfxy5GWpsNANHMc5wDPfD6UEUpn4FaL",
  "key8": "3eUdViSFeh8AdJXHyhKUDyduMprjPdPNX6Q4XWeKXWVfqxyHtRxMSvvowCDKV7L2wGsaEkm2mJTcYzvBwxhBSVYB",
  "key9": "5jQ8FbD3CuDd33cG4FVzdGK4TAodPsdyEqTZp3upcJDaMxhLNA1BdwdF7JuYATHjDjKViQ23YXUiqVDS3USSBx99",
  "key10": "5nVPHCqBUGWf5E2K6uueWDBYQPM7UmfGmk7J3NwZUAq1F1S7gVeYmk4EcpV9ax9EK5s4JGQSsaUkY1KVV5sLRwgC",
  "key11": "5vGdD2KDPcSVr3QP7NbrrvfrdKUsjEQTmxFo58na3mwXfdhyPqe9zkheNZ5DY8j7HLFuvkrHk1Dbjd2AaZvn3C3B",
  "key12": "3uS2r6AxSiEMEyqfQugPYMWUpkKnATycMSCjyzznV2fegDvGWakxHbHKns7wHFiQ6J3RGHaVwprMdusDUH8vo4Th",
  "key13": "3grj9rLVZJCaigMqtHoAmgV1Vog33QLaBvtFKiporst1sjTsYvJq8TWjVKWofvU8wNMJVscTsScJ4V9HuQwasGhy",
  "key14": "3s7ViUa7mmsvhaPwtLE3jTpQY9h5BPuKTrTNdXgCqifdJNj9aB51TSpU7vSt6Ftox3PStkHPACbGYj95tQdEK4qz",
  "key15": "2B2uznBSwv6jSnSX8MDLfqgQnX8jUn48crzv6FZmZUQY6cNsK5c7dWEaq5X2Nka97cpWfLXjhqqG6nhBy7MDCpxH",
  "key16": "5DjZ8g1GUPmGaPntES8ECqYvmauy8jRRJApvKfKyCM1m8Hd7dkG3vP5H7MgE9EeUJrWWA9uKSU8S9rGpM79yzHbL",
  "key17": "2PtZRV3LYKytZ4761qL4KuheGLRQCJy7JbJbRo1itcJVo2e1JSEtRhRScwBHom1dbSp4zTrHGxt1nRnxHCXHmzJq",
  "key18": "uMZxMhMMvpBKRswwY7nVJQ4h1PkwWTie9vDeHZtPyKVYKPUR71qn17KyQzYVeFYoS1qUQRAqJZTkrcW1rVud3Gt",
  "key19": "3aCsoc59XCLXSZeaNYYCoGAZFKdvE2PHXsd9ptY46U1BdTN2aKK3xSenccafZKvwda9nU7ecrPjMTCrSn1X9QABj",
  "key20": "2raBTRfVnGqk4dV4xECVFSbKD4NkzHuYRyEmtf7JJJtgQefiWyBLwSChDaWwWEPN2Pnk9SSpYSHSFA1skbZcXrGV",
  "key21": "2BsC7XJ6fyzs8F5AzXFQkBfi8VwsR3WPkmvJN5vAaXZvT773yvkXy9FVdudZfgxd9GPfQSzHfPFTH2VkX3AhKinb",
  "key22": "2Apc62zp5e7fTZrnZa8utnxo9p47pCEawcbRZA8tCZzWSg3i5j9gZa2DmHFPvvwN3qT8soBkgYrXcdVZCVSZaG6V",
  "key23": "3AFZ3Wwd35cZsawCttAQ43VZP5EegQv7J7Gt8NpNGRXGVnaeV1t7MPxJUhpUf4xjLSvSbRsxwT7KbphE5XApzVCL",
  "key24": "NL4UxLN2TkckdzvKRWZpjddbdvLbXRLFfSk1q9ou3PtzZuLVJNzrNmBQdqGV2Yp7ks7ozQBkNKAjnuPWjEvnZLH",
  "key25": "43pk4remwzWEPkKLpcQBfMQ93izwvvbGDJD19EL8Q7f3DxR83BAQDnhj4FN7bubYdimpHr37WyB4RFqh58H9m3Zv",
  "key26": "2T9486VSqpMDL1Gzw9b7HyCnV5WGXrpwwT39c2k61ZycPP2L9TQew63HeC9aSpm1Q7Z5Nc3roEXcPTVCpvDgZJvE",
  "key27": "2dsiq8ZPV5cp3nkdLGoApxqEz1jqYofH7ZQw9UMEsDqWxquBhJkMLdEzb7YMpwQC63MSR24CMpQJTcoYKbjBmpyz",
  "key28": "5vkoz7dzJVwHtaV5UmJM4RY8xyvUNC3S67GtGN5HnBAkkBgmPwhUEMXpQcGkuhYRMPEygTnwHLmvHKqJrmpEmgWL",
  "key29": "3FgyJdQc5YDWp65k6cYdy2gpUqaiKNtudiY8gATSUKBCPMBrFSn3RQ7n6F1zDphQRy1RKuy3mx7U1E27Ch4KSRaK",
  "key30": "4XV8oshwzSJ4qc3rGRF2GggpU7Kz1wQHSvWtEaRK9nBamCw61Wz84EAtDZAapJR2hJHXsocfXR9TkTv4vXAZ9x8U",
  "key31": "VRh4toREVf5j5pgCDEBv133msTTdLT2e2y4FBJADNLyQumBNqxqEYCHyxg2bnGMoAHXm7psK6xSpgX4gJsd5cbB",
  "key32": "45GN2QZxic6WzabFJBuWqagZ2naLDEiC7x68xwJcFjoceMwgF5L7mtGPMTDiqUHKvQPz7qAmjzYBtk1tXG3Ze3Lm",
  "key33": "3dVPcZv4JUkuabbSfWscm2HBNtNoRjyBrY1KbGnrftfJS5fJ8rY3krT7r5roTpv6DQxe6AJNjFA4LGEV72XPYBv1",
  "key34": "rHzwzCs7f5PgBH1BbsaYnVEwtPMjGGXWvBSkDMe4dXYQhQnJJ9197iyLYSdNQef1SN36T3yJNPXLAyZkkLtc9Ug",
  "key35": "YipAhJxKYg37Y7E3JzZU9zpXJ74j9xw399FyCf6KrB1C8niDNb3KefU5k8sXJGpecjJjW1SePwebpSAYaPznW2j",
  "key36": "47MAT9dCBYAULqx39LLrDgzNHZFRL5qorGmjKKZe9fUzbJQUNoN8K352BYMvejKMZCwHZ37uFydF6GYzBAzmCTHf",
  "key37": "2mCP1Nx8kjCJhDJXJDqrBvbJiJJz1JVXgu5ke2SQtTT2n4rwg6mQek5TR49ot2Cx4ekRXHt6XNGDJT95ZfTSNSNM",
  "key38": "61ULWfLbr2pvXVWfg2fT4YGo6imnBjcx5gC4Q1DxnBPWddFhtXFUdesvncXzgoru6yS2edUbm8ExHTpFrbtgHYv4",
  "key39": "2YAKVAEZhycbWWNcXuSibDPkgaEqDfo2vPRSe1x56LcRHfpzVuH8oFBL95gBVKF4enoHwfsZE6Rf6W7je5dcPH5H"
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
