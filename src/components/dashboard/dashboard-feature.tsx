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
    "41sHkcXM276P96VS7mAUriFWZ1BMiY7AiUy2x8zqk2hDtKmQATpo2wTjMLAL5tYGgBfzSecACERYMXRdCpsm2ZSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BE4D2FfubWUNZE724FUgZGRnDH6A7aAgmqwvXQqx8fgU53h79E7aSguJPBsBgsUWcU16vFFVo2nJFMZZkHhVStw",
  "key1": "58Fk5TQbUtSLaaxAfhetsXS77CZYdAJPZoeC7GMGay7Ljk1xxPxU4c1XNrrKbxptd6n7JGuoHaWuuRXX8YFVgpg",
  "key2": "5phmiW2EZwZDxGuAsPKRbbwrqaoXidrQA98dFDZPxJngsqE4UFPKRHPipdTxK3v5MaEeh9DBhrqB11N11NjUfbrD",
  "key3": "2rWd8EXU58m3H49Kgr7x1AQP8RZfQcYnroJfk8EXwMdxZtf6Kkxao6JiVpkmdhRKLBiHEyQaE85GnYLbxNHC5R9w",
  "key4": "LVj6Nr9NbJSWUSgzHiZM2yCW2YJuVZRSHHCYbCyn33jYu3TpQHo5fWWV1GQEVQa5nVKQm1GQq3sUU1kKbzeLSfR",
  "key5": "dF7Zq1gb1ob1rBFQHtv6t7rPLDyzSSyMUcdzSLiEWbBuY7YAY2AzHkNPFieQbpZdMZAmV6hDegFSTyUNxe6RXpF",
  "key6": "2E6fz8DT2LttA5iA7pJprjDmVSinRZLvS8Vq42snDYGkdUEaNQagLyJvuzdBcPERnKiMK4Ts1WgzeZxfLrBW1gBi",
  "key7": "2i7EVSQBKvNP8tfz2cn495nd8Wq1BWDWYma2hY2LbA4QCL1iT5D6nwMHuNoqnbfJGiBE8FmAAsahdKMWriZLgACR",
  "key8": "3L8ATzQPCgUdEy51ymrg3g4ddFCmYV5BQV5QmDoDE3dQGURtu6c8xbqXy4ugsLYCAQWJhcPTuMpphJ7ozza5joto",
  "key9": "4LszjGtDPTU7G6syaE3o9WVYLX6txTLSeCYrviodPfXoTtC2jvN7ftifL6xiTyVKgfPD27ibeFJpqn3UH9T7TgBN",
  "key10": "2miLdnuDq5h5TBLd2thEj7JVsMvPDaa3ARHvGPZtkkBqpig6D2hGdu472PkYZv9WcDJTGkcfXTMVRkpGmxuVpMDk",
  "key11": "2Egd2ZUBVbhsrU7HfYMro95VgVDx1J7t54zK1HWDSZbxdvAi1WhdeZSddkvTcvDvJJymFbCpd5Jp82Ss8hWVBrqV",
  "key12": "2vqLjjzJwBzY7rvTzJmMNnwsu3oo6Ly7sPAxRYjKwgBJi8nf13v9oPRJzcvkfJbZjcyZdk94GeaVEThCV1pBePcJ",
  "key13": "5ZuMKBjkYu9kkczpgBcedA46gdDpuUN6LV6W3MNiUGHVvMUwxjm3Eus1zVU856JYdmVmVcYvZwhhgm243rVGFcSJ",
  "key14": "2ekP6U8tkxPU8Cf3KfjeB471qoqWx1bKqEzCcSbeV7rGKCRoi3NLmyJSQS53JmvYxXzVB1wp2wGGFmgNXWBkLRVs",
  "key15": "Ut9NToCud8P4qooQZMPu8pme3cSW1aWEzH2kc3Zh528iYds2vz63yhQjHHR6Zp4BLVkxh8HUoPyw32YgEJgjaFd",
  "key16": "kGE9xSnpZFYCpr6UYfq7VswALnSJj3pFZDcQgKygsEhRBvKNnbbSHGo1JwKFRXcEGxfqjUX4KwtHHX3oTmmmYLw",
  "key17": "5H9Rpykv6HuUxqjZ47k9yz7auPQKGUGheMGdgST5iZFVwicgDbjrrZB7hYA78UoUQm2kXffkazr9hmPSbYMuu8NW",
  "key18": "4xCWTbZcfpTqWFNEhQcbV8mVCWhFbQnwsYRPQDtU7DDCZzajE6ioCBRg19Rt83EMz5ENb4NCj5knLi7KGidd1USb",
  "key19": "4jAnmp27DwRbb7yHgD9KGYHjkMzDrtxHiSELN6p8nR7B3msJDTpHUDX2zfSSMuweyqKUnXi9Afnd9hi6GWbtHf8S",
  "key20": "4cY1YepK5K8ojaRxAatGNX4o9hTeX5xuj1ZK4QM8S538iV2qC19xW38N5HR8bUT9jqSHU7DmFt1Mc2FGPYEe7hvF",
  "key21": "4R3uu1t6XndrKPTGWRgndwxnG4XoYDNVAHbLuncqNpRqDHmMjm79bqexES8u7bQxX8jcyZb5FsR7KhYbaHorn6VW",
  "key22": "2GHX42G87vK11Cr4BxpXBrgP3ogUssKL1veCv6vSAWj9rLmWvunBjVGpnqNkBnECWfQE9xodP5pUKSUyjbgLjCqz",
  "key23": "3beywmx2xUpfEWBB93axJwLE3xdpQk32r9sGNwWCMpVwyD3NC5ai1RweLDTp1NoUTQrymmG9r9GBr8LSojJis4q5",
  "key24": "nNeLTsrgGVm24YGdAJVrioGiDKkhPr2UJHqDLi2H7EAkzscumndhpXuc9r7EYLVDVUfTdqqZHUbzHbMXjDzzg4N",
  "key25": "63asTgkZ1LT3hLdNtbkHyzrdXScgsBXqUmq7RMo3ExVsPe56WPgDuBkfa8ShE6oMmafhCT3JgaoW82jSFzRrcM2J",
  "key26": "2PZpY3QKbVHwD4NTmKUppzgkLFfHcuJYdf2223nGCBX4S4JTkFmuges1eKuB16FRQ5vorS7WPQXjEhh2zykmaJH7",
  "key27": "21N2P2akPNynkN7jFSYDERMejKSebU16bMs2ToEKsUKN2vATwdquaHWvcJNFuXBcxtCoDT82ueLTw6yPRWd9FJNH",
  "key28": "3EQZH1TrmicgjrR25usYSdp4dwP5CbmSv46xq4RjbG5rsuCsQVe8M5acHwYLeiz4cW3G5EgcyXNK3Gyo6yXZnGFz",
  "key29": "5pq93gPW8tJsBSfymg4vwDCZFX8B5Bknb8xXPhEyQiMMagEowTnisUMrxu3iEC53KWtBtXWzQRjpPBJZEeyKSgp6",
  "key30": "4GDdAtZB3wQBuCMThtDRo53b4VfDJiWa59c8iLKZAZNj5E6w946A2oBjuLwf49piubzAXEdMaeGpndFiaCRaagrw",
  "key31": "2EtPCUGL96KrdrbE7xPu2qnemXb6m2ULG5222Q3QpxCxARXijmGMNQQkKhdeepGLnPvKJtU9TYQHZb1dAYtB64RF",
  "key32": "584JfqtDjt2xuGefWCvEtThKEyTeRZJLifXpBFZ1crzLrGLcVtuUSTbmVx735FBrpPHRg6xf8s7JiQfLqxhQMBua",
  "key33": "2wFZXfqqL1d2e4qfYtLoqe5qBU2Nv6rEPR2EG48BQ7ouhi98DynkFniFFv3zg4Hp7NVq5c2QZ13yURWjctxy59iT",
  "key34": "DT3RrmgEPfHpoaWToJupvbBQY2fx3XYWdoRXSjQBvGchsUwVs5t4ym1Netz1qxFUe6eZ731afgV59Yhy1Fb8ZDt",
  "key35": "9Tt8kXPtQ6q6994UyuYUGpY5KNM42PYEmxQum3HMRiLBS8V73D7aoMEJHudVbsrdGP79B8ynE4f1NKRqCREjCYu",
  "key36": "634rAbCVDF91Ayn1PTA6sdWmJauZWa1SwXfPTanr2Dek84Zcmr2wQwQgW5XgfL8uX9m6vnzH3U7Bqh1fM1D6Cvwp",
  "key37": "2xvJU6PLrMYXEznnhutAQv672qU5hy1nBmHztgGNBB2GzEaUSfdW5TVxcZC711Doj1HDSG9WDzgcaBca5NDSRQ1R",
  "key38": "61bUPsbZBDnfWYhM6j7YJVXFcqUpC9avEg3QLXTZGCndoRb39YqjjvtDp7RTHrL8UkD2K32XZXq6NNywsr5YSND4",
  "key39": "5NfofEebMygeYbVigSWYzADRFUK8S9nZtaT3hiB4g98mofPjJjLuLTYJr5mDACyPj1K2CAxce4d63gZU7GwYk1EB",
  "key40": "4kyujQ1mQWfQBEUKvW6maGqTnPFQbSoCfTpQPapSdv8gZvZ5vpypGe5dGscnMQw88jU74vWb8LyMBaQ6yPRio4Fy",
  "key41": "4FsB8UMgeC5tF73PSmASQGxHshGS2vM9uqZdVfQW3YR3VPajuErFBWRfnxay7BWUXcxx5qtKkgg8NdMVmKMNRH3r",
  "key42": "2vL7g4Lh7BvzWCjVYwTKfc8RPo53drAU1tuzuajV8aiDFfegA5fd2fxDysADqWPvvEjhKfp1grhKsKHDDiKiswPz",
  "key43": "s6cFyKxHaRmZ33ZqaeHx8xXbzEsD9sJVpKAW4utzQd5DZX6AwnDJuwLQ2KbAMF7HstWGdp566ayDpksLzUkK3YT",
  "key44": "DUPz5bhjgEbWSCvgDipSuwTWXj8SxwSe7NcKx5gMWAkQENhAYfzXb1XMJQRpD1nUvhCKG69XqE69gXQr8qCc98s"
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
