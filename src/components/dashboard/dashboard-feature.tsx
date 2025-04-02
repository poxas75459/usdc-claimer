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
    "HX5YSZe7Dp3r7JC3uCvMagysW18vCfothYeceszRfP4DJjK8QgP8ezQ7BafRqeseo1G8g67d4ev9RHre7zaCdzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zi16z7JbYzRusWXzz51XftUFkaNn2XwvXqryuo6C5nnA6jaNMftS1PS1UgyZHUpwS4sigqJkaFSrXQ8FgfjuYwG",
  "key1": "2G92dKhYhAmd7UuRsnM8W1M5hsEBuVnYLCWGY4eeWbD1aW9wCn4puXovsA9NX76g3pWxvK6etvUvCzr7ZKavDn8x",
  "key2": "4P2vCi61p9fRshURVbgMgpf7rGHudNSc6yNJs1gPCLkY8mhFxW8FNTQbnJqQqVydufmrGAQ7Sf2kBEZdzKTEgn2T",
  "key3": "2hc9Yt9NWtjVmSEMcMoRyaZB7evMtLsfHgR3CQXit4r3md7L62dbESzdx1gKhDT1KPpvvThf9HkR7xPnEisS5quV",
  "key4": "2QmSxXnVKN8VdzkYW1wQN3GuybRebYu3Wh718Aw3BqAw2scHTWatzgMDfRXbsTX2KdZYuFpPxPmAhfadUUveCrfc",
  "key5": "4r6FAtoGep4wC5uZmFq58vZrnzj7Jwgzue6DbDQr3pTrXYKTbFr5irEVr6SAbeh9HG6wqqPXRNzYtTVNQBQE2qRG",
  "key6": "2NBgoZdn9gRLyGW6UVKGfM7pvf173MxJ95MGkFEVQNKung9SuCNgkH3gYRSz3ZUfTDJebB68uZubkowHZnpj7jrE",
  "key7": "1EMs6Ja6RjMkKxzdkyDXLyiHe1FSB9FtJWVZRPRnwxwMqL8fusdCLodiWtAzTtZxsdVh6nubRKdvS9ZLY3rHzGE",
  "key8": "VMYxJw5X8vdBcYWZLW3Hwkz6Br2FWhZt1BVCEDoHc7zphWurTW2a8EHm1152DXdYX7Gbqfeo8yLTCBK7ERevS8t",
  "key9": "65QXh79FtHYMaz32koBGbxztqtWJ68siC8GM848pNsBF1HbjdKTKbmCsqagsNXDu35jJ7SRd7u7PfdtEDrkP7doK",
  "key10": "5LojDbiGfR8fFnHPmU66kafVdRfXb4RjB6fCTsKs858GqHYD3HmHuv3oeLKtKRMh8UTgKfg1ejx5WoVDegEUaq1A",
  "key11": "EW7bt7YNXwfoPq2UVsxH3NFHZsfCJN5B7CbNZFqis8igkgchF42iftfwV7D527uSxTNa7UpcNNLX5ugsiiiBbby",
  "key12": "3tLW72p88GaSgR2yG45m2jUBCu1iBoDh3PEves2fQNBPa9FuKhfvBQgPaUafZDanvRyMfTBUEXSULGGQzFK9JRPw",
  "key13": "YyvihZC84vWzory4bkSa6NCWY6yYF11LhyT7ew5UAzwq7Cy6Bc8LvVVY8qsqfJrdS6y1xDYW7bJreWy8m2mq1AC",
  "key14": "XLs6CxyqHai7YsW8r4cjZMgCJKMdDmc83eGNmjkoPJuQqXt7ARGqYEN8WM1D3zpoyTgwxzn4w1curCtathivUNU",
  "key15": "38DkNGHfBHkRwRd8b2S7C7cuz7XAoyLZf7D7BrS5UA9QYfNvDf9giA1w5TsmKtwbMRLzLNKMWtgw9S16zMG6Gnmd",
  "key16": "8deGMNDFa5msfjhe6zFiQ3XPn4BwDQzgT3XqQgB4XXYJkuvZ7uyLE2EydYu1VMgmNy77EYn9zRaQ61wcGECTdh7",
  "key17": "2mRTWuam5c2g8DAWXum8EBM2gMNW9BbfbS96gWbEkgPWkS6QvmGYGUUtpU6DhyoWgeSEnsKWFoF3dJtrtWuXoPcg",
  "key18": "3FTnEJr867Hsdi6UcYQ6Rz635deab47tsKXY5ELJhSC6BNUSHdPhJ5Fe2rYwmM4i2Dm3iDYfzTvAVacY7Vq1Gt5X",
  "key19": "24dJbwotJa51oogm5QoYsTAnCWReXELfqAFse4G9a3p5qn86bXQCiHa2HdnTpe5QsVCYJUxdQgKEi95qWCAoCQ3K",
  "key20": "3CvXQQVjajw6xoL7NVayTpdcFEdNyGRRxKKgm84M4hRLHh8SfSPVKwkmfsU1KmHDDpG88DvFM5sLc6CLr1DUKH7x",
  "key21": "59Td57k5esfANd29JyhZt6VmbcG97uEQhtV9Aoop17bZikWJ6GFFrYmJpbUYSSyKgFDmGx2JMtNxWw3wpuM7R58g",
  "key22": "fSV9T9SGkL3GBgge3sFgd8oVg7EkAQvycAUjgJ5Gr8v1k6j9DXChFfDqJhJGXCq4zvFHuj3hapVCbK7LQjXTr3y",
  "key23": "5XyZPC8WbMtZ8dUWh4gDhNDjTFv9pkrVeqGD11nSXjKdsSGLveED6p9zn1NNdrGwjGcMk16SjC6zppeFhuBvAFKz",
  "key24": "2SNS78cj5ACfqKtXoMbcX3G95h1D8jjzqBreBEuqBEcJYkSVWki54ztAwLkaXBjZ58cbskYYJoWh8iQiF9bgLcdu",
  "key25": "CYUhuBvUDY9pBTxvatFVaqgYoeDwTxkyzErkhbNrZG5azHpzfNq4NSstNQ6gv88fViQTZX8SiKzn5PcnomiisDy",
  "key26": "338a3Uxq3BpEAucppnHenTwXo1tTdWjthJGtXvJvGPYXkqRP8dW78F21NxmggVfNsqoxMSMuqQqK9kTJWFutFyF",
  "key27": "5NhjtTEMYZ4iyzcVkq2WC9rpN92wXmHoiqA9m1aev9oqiLXis2WbuzH4Bf2sArrP1ysVbDymkVg638KcnGcbD1Pa",
  "key28": "5Zoza8KmVqWdfkq8xopt7dpeB52ts1FPKAm8rxyNeBX3VXrpRQ3ybGxnPMYB777DaHk35TjSGuyKQu7PrMHH7ANY",
  "key29": "2dGuku6BxAmYz17B4C4oMtuzE6E2dXMQAznGwHUUWN44ocUewCz5voDo3ATUJWrPA72o5s8FtN6unjvbfbXpLpwJ",
  "key30": "4WeNCHK2JUbo3EYYse5YaQDcYDZHFfRPjzgfhL9wcLj5wNacawJLwVe7WfuMUk3oKW7HVmAFZayVYMi8upjfQiqw",
  "key31": "47WyiXcqYh5FHAmyuwTA957hUSJgUWVCtn9RZnNW9hMdSapEFvHvFTfFVtdPFRLeKU2RKtGBHA8TR1RMPoS6SEsR",
  "key32": "5rUzTdQbTVvcM5wcsYT7qKLMdvmJRbTXqPrnM8tRd7UucHRh4NQWSs1onRaHtt1XKVd12Ummt2b9nY581cFoC9Wc",
  "key33": "a11CT82tGteQaz4rPNqarcd92nfry6UTzXnLN88gJorHLBS6ndhGhj6yNfunBfex6J474bQHqE8qZ4tgFm3p4HD",
  "key34": "2HdyTEzNq3qtLkgaM7Xd73YTJZGU9Wm6dREpbGoT81hZf4uCaTBU2Co6y7DUnmZZEc2vy21rULDgzbdGtD42GjSZ",
  "key35": "49kc45daYPgVoXCLyFmK59YFPx8HTaT7HwzDCwgReDRSfEM48bVTsQhKttQMTqvduvkMBcxBoxLDPGdP6gbgS3RC",
  "key36": "rnCjyCFQhhn6NiMGgT6VX47dfpKgjNymu9SZz2CXuT3hRm4sxdTpTYPZVf7M96aRSLWQiFziyFuKeKZzqapBvRy",
  "key37": "57iAgo622qQ8fjDbnvBm1j3X8SDUgUhTqy65XENCpYTFkJFjiWKey8TnVPqcbuvy1S4nzimWYftAoyQM8Jrggf5H",
  "key38": "4BYHttvayvhiztdR52aYsiE8NmafRJtk8RKScvHTb1G5Jr9QzXHWGvkG2xWdPKGJYycRBz22taXZRjcTJsWHo3cn",
  "key39": "3mGwDzP8t2ZB9f6iTREfgrkwpKavRCDvkccEmmX7n1q3urcLha95GLuRtxupqTKFQFz1V311ZJvmYdc7SyesVFCG",
  "key40": "sffhGnd9HjrnvitJ2v74p51FEprEavWqTSWZya3E31dXWBLdwLqhPHuxjYUr4xHMi3GvJ7bUKzotA5SLSpqaH3J",
  "key41": "2PdskbZnxUnqbGCXMWbkriLhjptdRLB4cNfuGcqwiXwy8FemNN2WQgvohvVnonYZGRbNFR4x6NiGrxrrjSkGFp5h",
  "key42": "24PVSoMtJkdDrkrd74Lir4F3rtBUp9aKhNs6c2Tf9Kd37jsaVu6uTEZAfgvWRYGTaJJ8oWWizhcjeKBqeFZ8sZPp",
  "key43": "3LnU8SojA67d67ifzmDvVhVJVjRjP3B7zUFVLyL1uCbz1PGvtSJprTtmr8U627M1mZexZYSZ6Y3kb2Wy49mbJpHn",
  "key44": "2RQFB2LbAcnomY1Jdv4zdaEMRn568RNdpNqGJ9FeJNXnnQZCjVxxgmdHPzXSChf3STKY7ZbDyKqhKB7LjvH7NPwa",
  "key45": "x8TUccCEDJf5oWGuDrvbcNbj8dGTDhf3Dxg4vZoZCgnkgdjHpWE54y6Vac6dEbdfE5VMrzLaQUy4SNyFkK9EM2D",
  "key46": "64eXnf3kCLdsHRnt1zqAMc96R54pwtXUmCqRgjoA3eBETVBxK6Fh15m7Pm5fyFABL2zZP7EkLxCeaEiPzQTv5GQ",
  "key47": "52cdF9qFYWhQzwv1vD4vURapSmeFxd6zKZbY7r9yMCRvnzPKA7n9WSpS4Jf23TmCszj8m9tWVARy4Y3a5woWZkDt"
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
