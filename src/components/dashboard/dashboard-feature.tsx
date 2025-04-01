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
    "3CJDSvViwriN9Hey98qUbBZ4yZtZLgtf2Ej6rVysLrYeWiC22DK3GEqouREyyqcH3iUBfVMRHPcA4HuxEd5Q8Wdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyNWz2E24d5zywVcRwiXRbgn2KGHBCfaPaqErs3EJb9sguPNKMv9a5faVmfXZ8PZSbE3uWZ9fhqGmANfcPrGjzK",
  "key1": "eozTvYH4TjzoyuCPMooE3RZSWuk8dgtWTtqsgmnbMqUwgJkCVbsmRnrzgbPUaqjzNDCFDrq2xDroGzYLcLe7we3",
  "key2": "4AFjTtAoDwab7g13j2ZrpeX7kRtzpMxTY8PGJMZDDYbdwiG6rjfj8LUuY2hYuNNM6av7ZJKZTKTWT68YP6ii7UEN",
  "key3": "VKfUbVMq9k7ocGVxkRcG748XHcdNQcWzBzseqTJ85PFtbTye6n8XqAi4bP827CYGjnMgweoSb1wcfC7dNdJ1oeB",
  "key4": "2Jz8t64NeyzuKJgX6rw2SJCRjQG6dC9Txs3aprTfLPCPcTsmuvp15gypX6Uq1iMkh8YC9UuHTjuJ5UjbQgya6KG2",
  "key5": "2Mjk73Tssr3DwR9AatGAdeaMYoxUtdg1dvsr8Roi2mFMuLyVDijejgTZpmBjiTLaVyHAnoQykH8azVjNDcyixMqg",
  "key6": "4G7JbyExj6CnKM6ieZVT1UhqhHUJvZzqJBnHPDcoc9HG9iGRExqqvcvNTwxEZByQeswkfChHoUieZfV4y6cb2qKi",
  "key7": "35KaJ8Lijc4AuiaL6Q57wuomNWrxLkinhBiSgnGZecBtKWrz3kkgFpT2nRFrSPv1HMpe7WtrpcYVse62eC9ns4zF",
  "key8": "3s65uK34gy84y21zaErLSyPf74Hj1fuHSsm7KuPFenjKvi8YvFVY4Rb4sHEC9cAeP7AUpxAeC8WiRg5gRXeoVCHQ",
  "key9": "2MaCcZku8ssyDzxcQDH7e52BiTxZBonuAD6azQDWCTeayJoLReVTpbQcFnQgMMk6vEqzJzwDrq1ghNv2iW7TUzSu",
  "key10": "5xuDhdzJDBdtHf1LkWtighVabrUmsZmmqJwTN4EmgxvLP9XjMAsZqZGTAVUHxfdfXup4uBeGKaSJHntNqG17S4BU",
  "key11": "2Qurz3QaudPygGUAu8McPkgB13GDQkbhc6u4Hxxw3qH4vCqyxRQz3GZz1xieqqcWyvMLCchpVtSCeW4ruuiAQnuC",
  "key12": "21XM1FTmpCb2dKHuJQnzMWLCV3A5y45gMZ3Ln1C3HPYbo8M6xUFfsYVbUEWgxM4WBphZzwQoPMhghNj59WKErCVk",
  "key13": "2ScT7Ptgx9aSDSvASgkUbDMj2LbFEzBaDDUq6CynsD15LWUgfKVdmHUJ3oPjXAd1dJ9rUFKTU51EadmsQK5MinPh",
  "key14": "2RULYTbaLH9YXb6o87vv6eNZCzXMdkGE4eq4Y3gAzvvVme8jSg1JH5JmvGCoYfsxVzaSNtEDcKX2SfEYn5u7szJi",
  "key15": "2CbeXqMbtosN2d9a34WKGfqhqodKUCc4xqNpTgRJmc32LCw6F1bQtagLAQct99do8Vei87uE42iauecjrz6UoXdv",
  "key16": "3jZdhAoiNZADfC5tNa8ujUBafmN7ihyoC9En3eziJJHrQKvqoAPwkU5QER65m3u9Dqt2mzHWubgLQ5UqVgYY962",
  "key17": "2PfUTrvvaqGJHWvPSY2C1nDYxvBCo68bA9rKydNfZpEsmAfKkiMPSzh8GY6tnvKrzhFC5NYcB8sgvjavNoAt4SBf",
  "key18": "2gVkNxGgZtud5EocMKnBWb5nkjJWuVSRM1aqc2SvresNhCr8cF66WLo49ay5BoEC3ybkHJrpbP7msyDgojaWmeNU",
  "key19": "3SFWEcGiGbTEqe12gMjYpbQzPNKrNRQvcqHzTLTXtaGUaBUdcYDP9dnLxCi3d9525xkw6KnZaMyiZnnDn19WhEDC",
  "key20": "3gaqgsskumfvUAqAsGmccMws7mjBXbDmbmuXkTMXp4ykhn33rw3ojYuXswuzwd3LWGyAEokRRqyGy9vDsp72LCfj",
  "key21": "e8DSS3tJmKYtM17MjpR9sD4y1iUcMqCYMH2i9xcFg5MPFGRJhdnMkZLv1aDepJGAQGUDyenedp172uBXFmCW6BW",
  "key22": "JCw2uM2vEokgD3ajRU7rQe1ZXZLoXGCKWMeMj88PSKRLMfy7w8ABRDhaEVmQSriZEcv6wREk2cussnk6eNX6ctW",
  "key23": "hXJcJTqim3iR8znSJARj9x9Q8h9mQBUdziz62V4BCG3XjVGVEob9RmqcVKMRDYYNAqEehqJxZt5LaKZvZyhazyJ",
  "key24": "4kSG4XP8ZaWDY2HLFj4v3zVFSx6J5oPzZLNjTtur2EnTnY6e2CtAJzGLE4Ewx8yP1rfF2tXJ1UtiyH9VcY1aqYSY",
  "key25": "37vZ52iVxnxXBSzkv3GprXVg26B5W3YozbAWojRPbr9K63rhGCWDpJ4sMJUobY7rD4gknDdxitiAb47kmu9zqZwJ",
  "key26": "2SUxizuidwfFN888wR9TEgHw1e1Ph8QpKj9UpU1o2jtFmAjxboXpVoTcKHZ1CP7B2WFwo3F95QQix3YaUAbq7FN6",
  "key27": "2sZ4cww2UszEssscht7z8kBVQaEt6BLRW34VyDqaYDaaPmLyEQ7iqTQioCttNzcXgRvo93ykSsMxX9s4YTfZw33a",
  "key28": "4YhdR9azMvHWKe4YorPoFx8GVNmv4Lyr7Gx4jNtPHQc36t7cVwb4sH9txGBHtkPFV8U7EEzh3RseuQEibVfD6rXs",
  "key29": "5WSYtokYbxXzGVrBkmqRCQhPEpjY3i9WH9FUEGxDfmDy5xdoQCXfESeuoc9vfGuujbfva8zNtXmF3vxMLyXLRfmd",
  "key30": "QeNS78wSr76o9kzEkv3S9UYMs7cNpZaVZAMpeWTMpUCJKT3Qxs2vZtgFqeBxeokkS36vMd4qi32rS4c8LfxQTtF",
  "key31": "3DVareJyDYSNtDsY5SHer2P7rFrDYtCXG4M7SXp8saq13393pK1DzCZwZSbLeqzPW3PViY7WwcmXWSmm6CpThnBB",
  "key32": "2qoMxKtfgC5dchCxGuEsb1g6cqJcx39TJQpnUkU4vjzdsdKfYvb4HPHGNauHk2eA6x7wTymfC5SUEHFt8xAzoYE3",
  "key33": "4wgyFHidtixdjYQoNpoZVpUkBcPibS47E9A9fbBwCsuXMsZG8srjw6F2SZ1afkV92Sukfh227ZU5PwxpDoWq2CVJ",
  "key34": "2q1uDTCtBmZJvSF7i4TG85orUX8RAhkfNv5cTsqZkBtbRAiAWyct3uKYMSFTi95VypJUd5bKJ5MprgmLpNXpfqmj",
  "key35": "4na3CNx14jMv3iihpZ4j2uULkytWCYfuaUhLmdLRydP6rdt8DuBpt8yXWg2N35fMK135HFMr1omD3vau9ySUHzVU",
  "key36": "3wymSCNvNVydjHGsjy9TNeesdZW62bBb4zVmgGfiZsZaAS2JJUvyjPE6g5pyLHJeBnjSxZw9adBEQvLs9tsuTjiD",
  "key37": "4JtNPwPn9nN7jgMJ8p7Xu94ryQuxqPdBDM7NW5LrXcMQTc3rE2iEukUrqs9SVNk2sY2NsQctQ7k3u8hWpKx3MZiM",
  "key38": "64GDcGennQ4FCyQVGFu8uL44bPgyxEy5BUEwqnyoPQhrNWYWkMBFhbZJqLNNiVzS8zeNXPumzXWMEAJHcSzGLFEK",
  "key39": "oAgbkjbn11JJJiRhTdFWu4NvqRVftNPBrTXGNHSBTbchsnubTBLo1pNCB7GdCzozgZfjK4y48QVtMThS9hRk6im",
  "key40": "2HJkjK67ZXC59BCbQVcjUrzHo6voCf2bVy7iRmvJ9XSTo5gVw7vfDVaJKHsDwtme9omUewSVPY2ZVAXmcDtuiFPV",
  "key41": "qz8e7cLQVHavv37NBhFxHUQaDekFxy4ABTw2a2fRLSdsZuwRhBgfdLGfZR9cRh4ZasjmxEZByQyTPokaxJDoZSy",
  "key42": "5cWsd1fCU63vNdJd6VBBUu92RnFDtHC4vqwFyVg5RWvSGD7a3HrsAbWJN3ZcYtKMQR7FyqTWbmx7RWHiULQjxYoL",
  "key43": "2W7UmTFEUPcRyWv5EgzSJ1F3YiUpdmizbvr1hqVDxmAzH8mkxZbxfp1GXFKhZNtXQaNtmC3s17mFnhrxcJuWJbQ2",
  "key44": "5hpDc1sS3XCDRDe1LBbZc831ceY2Q9mnjGeZ3o12vhwmJG5aNGoWrYtxJ9oTcSeVhZU5iorwB6dDcz7DTuLonn3k",
  "key45": "cKhM68n5oCQbMXS3tobJ2CyGRat63e4jNibrWC7GVejJHpvGXc8EUHHoCGTx2Zq8apzapvdTFvQTLcwoAXgRHnZ",
  "key46": "3b91aR2s6n84d7cHNV2VBTWHeyz9W9TnqVjVsHWtfTgvPg8M3PQ877qduPVEeS2pQLqhiR3cK6TPZQrQTPdPL9u9",
  "key47": "2rHRQ2TQQ1JtwGxMW3YddF2g7wkDjAMt2YQKw7P8hMRwebXHPyqFwZDt2ZBPDnXyusGU9V4Lb5mdcUvDTXq29uPU"
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
