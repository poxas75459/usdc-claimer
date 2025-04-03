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
    "4Z4GJJihtn9fzweHLW8EaPPxio6xXuie6kSB2T6J5Fmqa6sitkHnMYbH9Yj8wMkyyaMYd5DV3xq3Eub6GJxMXUQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rb1TrA3WozMwMNqGkRP3PB6wWAqNm1nQTmkfKCV7ruKxxs1NA8vbXBfQo5nhVKEdyCniHNoFDrDWEsSToaFwav7",
  "key1": "5gz48q3TZLsAtoJ2Mb2swYU6u8n84j8igvavJMZ43w9dAaeZfG8Ne4xNdfvBK6DVmQL7A2GDCznxuuF78L9qbLen",
  "key2": "5YDr1bFPw27xV6bD3DDM3yNUJV6chfmJxE9W59E8rzCUbWSJbKFKFK8EXfJBDvQ1H7hF1s1vwzA1xezivG5yxoh7",
  "key3": "4NSBPrPYJfym2tbRz3zP4miWeXvyFU4n558yhgzxsw8NNL8KNpv2ZeEoqY1BruvaMDBSAzqKVQ59PfVEqie2BT8U",
  "key4": "KrTi9bSWw1NFRz3o6g9DwWHnKhcYVjJskHhX7WXEgMDr9KpGk7idinaqXvjfTuJfHXeruBUdvVQoPA2ELBpNRKn",
  "key5": "3UL4T8Dj1ZQi56VtVANJexJQAUU61kAtGDXWx4Zv7cx3UqcDPKWfHTXFxoBLgNrnVfKLE9jBotmMGwHD1D9EMRyj",
  "key6": "4ind9Rd24WDWEeB8yiVttSiAAWXpB7VuCkoazmA1WrjZ2QXUVTMd6o8kwPG7Q7BTHDBvxd8PfJP6tZvy7WFMVWvN",
  "key7": "5F7wu4ajGdhWqT1PrPzKsvj5gNEke1tdXcBhQBKpjbSrQQxpZbaT4b1vSPMLK271WHU5XQT44R2U85bQFRR7ja5w",
  "key8": "4pH4W3NpqRvwPMHbatQJb4vQ5t96cJQS9sv2rvL7zL3pzjUGNUK59tCDS8HNvSVSnzuX3swGt9qmshtzRknqgSd",
  "key9": "262Jvo36TwVXs147jJzjEB9vv64ixgpkxRbBauDNUTUhL9MUDvRrtZ49U6S3GMbbsh96np4R2sjXRnNxKU1L7ZXk",
  "key10": "644RhACP2Dy4ZzD41NAowCPo4BKepa1XAYu3qZomrsfWiBJVpYSzgXAMSaVmveXkmMvPLbdwvdbHSY2VDnhCMTDH",
  "key11": "3rErokgS4vXPD79bweCocrQfGNQFiP656WRNjobCpnmoZsQxEgHhDrbedTw1b7khYaQQMarpGNU1spwB537aGePJ",
  "key12": "44N7jBzPSjbHXUtj93AuUDVuf8AXCYR4Mrth5HqgVvmFmjpF6xfQKUVeMEALB8gByzTNgcTLmgs3gvf2WsmN2iSC",
  "key13": "3mMBng4492nZprPktoXHEo943nfhG5oqK9NMTdcDnbEQfgDgHc5d2EaETetPZh7EB88ufRzZDFrQEA6rcYvvQ8tk",
  "key14": "5c59kJyGtQABWotEvPPqTuKx5KpJBU63bFDJPXeKHFg9F6Z2ZCGCquxytFTzNFZ9KRokuwrugyUBU6vaTa9Z3qPP",
  "key15": "4C22edFC5rkCL9n7Mq3TmyXpwHMhduR4HDi6Yr2Yx2TF7pVNNwfV7zDTJgjzkcYcrsKkmsN8f9Gn4scqCA6gBy1U",
  "key16": "3YS3MY7rxBZFSeUHAttNA4zyntM6vzSzZzg32jNZz3LkVqX9MiS1wjLz4JjtVoVaGgcBSx1wTZwCjwQsTCrd5N2o",
  "key17": "2Q2niGKNo8FAaMSX6J4DDq3Y6iudYeD1Ty9Ltk1zc3Hocv578Xf8Az49txKJ54nhXRRSuJMxmm4tNtpRVaq5QZWX",
  "key18": "5FtArcYSGZ5qXPuF15Ybni6LCjxuWxeE3hypyuKencwNgf5iL22wUUPf7RnSo6XwvwkdcAyuKAq3MHoGVx7z1BVS",
  "key19": "AK7j2RnL3cuC7V1rTBniE52kaKHGd5shjuUYyEQv1PXew7ePoZC5AMjzXNWda1z46PweHCzdppcm7TS11fw6Zoc",
  "key20": "3WdnKpdbRfGK38mXMCPb5wx9741aDAf3e3K3UwC3ibHs3VfN71Nj34watQ6r6tTf6cdxMti4DWKsUGqBNeL8WNQQ",
  "key21": "2HuW7VcpRGPnB2j6poyoTVGZMXyPC75AmUeLUDYofUfpAtMzoqvxgHddVAbWXqKcsiELycBuxvLaAE21W5xWaQyB",
  "key22": "2YZfHoduTV3FhdA4BzLs8a2XZDTMZcY2FQcWktSnwpwcukjXE1k2r7i4ABcuYZv9m7doC7U6nh7UEKb1am5YuGAp",
  "key23": "jutWa74uuHVHi9AY4sxAH3VDazpAfHEf7XZW1yjkwCiBFu47pukKbTwWV79PKcLUj7ZthMqcfRmJvEtwKky31Lg",
  "key24": "5FX6gLkhphr7dakq3i7FuVE5mCP5vbVazHPc4tuHWAXrp2LRneEiWMRQWiXEqgyQjWQMPTDADAwuy6vB47LdSs5t"
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
