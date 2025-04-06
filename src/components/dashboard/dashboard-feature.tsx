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
    "4ZfZ2SPkKC1oiJS6isyTKLSWi5RbEfJ6SbSb7NF4We5VgdiyY9iBmpHoUJ5zH9aCVPmiUiLnMrK2a7poic9cCNdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HE6aVM1b2uxTCBhffQgmza3R2sc555d7WwB9om3WXGRPfrKoaDQA38qphQVvvwPMzNxjtVXnH1eGasBXxQzzt4K",
  "key1": "gyCC3Jf49bbVMzU4vD3dBvs9ARt79EpZBKsjxZeLWRhHywHH3qYQHhwTo6LQdQ6KDLQewCMpdUYPQeqkWA56MHW",
  "key2": "ArmG8GDPFB1pvatd7XCUpYd8DrnHgYGE47qC6ABp1nd3mrME2BhM7J7GGDVxnLJd13ACTBhbwMPaNVPJhR8e8qq",
  "key3": "5oZGici6hYQtGEri6a5V2E5ZKWCLBxsx8N3vRrQVuJjnq2spFwVx2zN6a5Ex3wqyJ1ZrLm3xZd1REJJEPuRBRG9P",
  "key4": "65TC3Cpk4KkrA1rYUvizibv7orwcwjzHbcjiS1jHRuoB9Ucx1RJTXE3QcxLMFp74i6j4ta5wayrTTBVbrdJARD6j",
  "key5": "6NcVa962CGGN6nzNBaTP7iPUuYN8CvWYWJYeBXAuobMyF6423tHWFfTyjHBsu8ePcHUaG5vKify1qJYpwDwRLec",
  "key6": "2bhNCF6djsU16Ra2k46se8hAyQQ8GAAG9PJTjVCkxWENmM6ntHFTspzGCKhwQFf62SeYsmMKrrXp4b2BYqGP56Vf",
  "key7": "4gLctF1qCLjvnkK7X1eTVGJ5W5k8nuob7hjJeoUtZ9YjzqLe3PxU9QZ2fiijCT1hU3DoK34dAKPgnpG3KgksKncM",
  "key8": "2aq2r4SUmTvhCPaogRAPV2uX3u9gErVaEGLxLQvQip7geCy1ptmC46VEbB3HtRQGDm8qGSeqTtpArRDL3D2v4Pvk",
  "key9": "pyL4GDE1gP4krfjXfAeqMF6hPmDLTrFQ85vW4rLe9tpZqoGcvywb9TeUcQMbpyZH8jB5ppjvS44ZQ9tUvUvfzfZ",
  "key10": "y6Dxc1v9SJjE2Z6tAmDMQWbAwGGG2UoiWhdtsahB2zcqBw8y6DHxmv5X654U8EzS2ym2BicH9ExZgdBfwQfq8WG",
  "key11": "5VTBFi2xJ8YXbc6oNYZLLzaQFU8XGMHtRnCMK7sgGnBiPNF2ScsfYYjdcQsyaA9UjAcAyg3nUufYLivkd1aA9aE2",
  "key12": "66q7P1hrBp6eaCT57Bx9Bhi8ww3RkyG8HoinsuWynUHErvWDzbVKBJG2nHMSj9nFpx8b69x4bW17Z4eQR9fpWfrE",
  "key13": "UeRcjErEtQvBzCNVwohUTEc5wGMpMVmG7G3VLaJmYDDGD2RWrzb2siXCCg69j15CgZWJ7vMEgpKhFezq3Vyutji",
  "key14": "cjQoRi48PpRWEpca3fiZrq6kYDVFvppt271bLhjPkREMLc6SJbnSaVPRvvpWGNRJH7rCDVorqTt1vJdBzWrEFZe",
  "key15": "5Evr1L37qubszPZDeqPUUWhiKRYF3s9hvD6kbuZKCPrXvyTY4sYVoEqRAA8fSAD6z2TYgGPnAPxedwtS19djLfgg",
  "key16": "2hdZHoyH3BjAkLZd8uaXSnZtjyzfAGTzAkiQw5RmAMy3xtp4X773J6u5DvR1EZyJEvf79chufjhrbgA2K7kB8hBX",
  "key17": "5wzfx3R2a5meoacPQXYbrYvRSnQ5sTvx7i1i6XnSjov9jzNQ8cEzCo1PKT3VxoWACnuAzBvjMu4jhP3US7exwHf9",
  "key18": "2ZhS5K4D6qVq5UPaPJT8Y5CXwQzjbx4wj3Kih5r4JyCGFFjyGYvJfz1zEeFetunM7S9LtPbSxwfgBMbiQR2uPZhx",
  "key19": "4m7UnA5eqwbxgWmPnprAtew6E3gCZ7dCQSoWnBMRRvHT9AW8TBcnFRio2zwphPvGD1VuMXSvEFsBQfXz1w9WhxXy",
  "key20": "J4Zyjz4edyC2ZrHErbvBynRbCob5k8yuuZD6uv3SSPvwh7aneehP4kQKpqTdQ21wtq5iQYtsPAT6UKYjRfFWPcd",
  "key21": "Dhi1b1wv6LK2GaSBytyZcMBLz1vYwdq3vhDJsfGqss8Anez3TyuGk81MaTtqvxPsYg6AvzGGdpcs1jh3rTVGqob",
  "key22": "5kyp5w3FKYY2VEN5LB7GRma98RYvk9eoer92Dt8Ut2m32SQT2PajadPTidx62Shj3DqUBgWforaZjWcbnnHVtdM2",
  "key23": "5ojSvY7vdqVkxHBNiVMgvGLaRuxxZcJUDEYyaiBR56vedJ4zN1S9DdBeMp7md75M4mg8aaS7AFKazf4h9Zo38riq",
  "key24": "WhG54V73piSbxdZnyzhVWKJmcwCDswXStvFrEA3CoNvaTfsFDnpZ6ba8nnYxtG4Y1Qcu665WzQQAaczEEm224tm",
  "key25": "2GiQqtqfBYLNPFUwCXDTwQjs8wY3BJLUq4c4xtxh7EsYVy74mfF3h1wRnTncktMQtprTEVDPoC5uyAyuaqQnxbV1",
  "key26": "2X9AkFiDrCRtgvRewFPHMNE347uVTiZqqSYs5pr7AUEAfos1cFYZuFAW49KtvyngvJsn923XKCjxxQLXXqU7ukGJ",
  "key27": "3iN9v7RSkdXUWB3RDbx2eqqUUB3tJRmBZmzbAcgYyhhdNoJT34wNszonujLz9L8Vq9XXjoPh9p4comwimdGgcCPE",
  "key28": "3NEW1dG7M8FtJJYggT3dYwuWFkrUZQQ4mpFwRty1zLys7znz4L2mCGzFT1Z9LCEJoiQgN7V6ii3jH82kG1nLbGoS",
  "key29": "5BiDfiUmxWPBf1nM56U3mjVwDs8WZW2TiwRfxdvFGeFeaDu2mPCjd4FEcsrUKLKo1Ei2Xqq4khHifzjuTHKQUqWy",
  "key30": "ZoqGDZPRfpANiMdrjDDdYPNd1KNGiC8WUWSUYRz7dT3PFhwnp5rDFCjW5x399ZhJQQhKZz88c53aHmJL1cKF6WT",
  "key31": "585dXY3EUsZYU6t7sbYxNTwS2wTfpH7XvnPZZUbx6z4BHp6HxuMuJDCLEaprieWXdW9MNRYcTNyHkmshmQCoe2rg",
  "key32": "wztPFSKwN2pgHtT4FEg9kfvLyQ5PzEgPK6qAKrAhFf4GvkoAFEEPyS4N1JWtZGp7yrfWRfdcbbY5YHfE9RgN9Bn",
  "key33": "5ho37SGfVri6ReCSKB5r2GwTR1CABjmyHfeiwadQVBzV4HEaSwhjNNfYqpFiYdTMJQGQBdkiQMgrExB3r5QrLEYy",
  "key34": "54C5xj1UjSmEHzidmsiP9CMWML5sM7fp8JZgBidcsn4MTyFWf2XW2NixAAhfKquEgn7pAsH5u5JrPYghVRyaTtyK",
  "key35": "4RgqWfEbUj1tQHykpgijtAuroLtwJCJqa2Cv9AgMoiDL17bxao4JW8pZrPx2JNBAedZZVy14VaxmYuUNHxCbQvyp",
  "key36": "tv5pdwfsJLMVQLCoMU5pt9vv16DBNVQey3Vc75wm4EwM9Eab8rWToscJAKVDFBwCo3wmgT1FevkDVVvxe8tbovx",
  "key37": "kSEMunGfwssKmQvgC4BaVUoknktzYwfxnvCjHHCPZ3hGHo1Mhq3iQLiMvC9j5njA8SCqEqYoap5pKy49Da1ZiD9",
  "key38": "hDiSQRzpuiegt3X7Grwenht1dDZcmscx69L4GanSPdN6DEjo31xkdfDnTPcLYfyCi1Nk2vCvst4tfTxABZXm5bu",
  "key39": "VjbAwYSfNXcRW2mRFRsj2UZJUeiuY9jaRLBXwcDvbVWgrAoGoipwirtUAMoj1Y1x99wHiGSHMnT6xH52qLG4BjX",
  "key40": "5xveseJM4Tnkfve5U8QiBtuvNYsrBh8ZCAdKsnKQBhQmuukmHg6TCsnxd3RPpRG6yxYJmFnyPrVgfooZAgWLnV22",
  "key41": "2vW3inzxfY5iugFNiWgcyeaww2t2fyyPCwhuKLrn2h4mkCmJx1QSnL5UZiuSm8hr4zFh2WbM5N4eJ3U5D2JtyXtA",
  "key42": "3YDpwjLVQw4D7ZojBEnjVCSynTA4FGrWzmEoc3RbVXTou9idG6sCv4gKueyayvT1y3JDXE9KWpYaKAsxSdFwaEBr",
  "key43": "2vYVBWpVVvtPkpHMLzU7MwGyhLURBWbhvgptSBHxRRp8a8s6ioLMwtf4AJzfm18XT3XZjHsx4M3TG4LpDwyJBoip",
  "key44": "4BSjYZD124fN374SrUiRy86enHSL5MoxMKbHmEah1yxfohZSzXMB2WiKmtCVusTk38ExTfgrSNGEEJypvzvsfSZZ",
  "key45": "5nULZYP1GuN8npQpK8tCuobHfp77zVVSn4oK3NzDaegTAm2fJsXtFQNN8CzG6ZBynedonxaWn8tjKusPQT8YZYB7"
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
