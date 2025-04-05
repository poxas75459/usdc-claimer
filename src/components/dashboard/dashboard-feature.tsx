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
    "5bN5eNguc1RzQhptwdMKp2w9MYCmFiY7cUA1myHxLjZreUJhKu2u89HUcy79uZDsH5kQ8hvDsaicxRsGKJYbrL6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsnxmWoGeQZt1adVuRWzGqXdbqSqD457Mzm5o5JzKSypJHpyJmVfBrSibyfYBydHvmYfssNF8q8ebJLxS3WKxB",
  "key1": "5p9sbQocZe4M9ErkC3U5RC5jVRh2ZVvoJwMtdeGbuLgCmgUv1qhNzAjRLvZhVBST2zuDqajZc2LmG8hUc8vc8nUJ",
  "key2": "3Txi8KFRbKWnjjtM7WaoQmh4QRZrqES3Eq3oeLjNCvSipxNBmhn9kL59PeHoK7NLQh4pEZU3W5TkN34byQqn8x6L",
  "key3": "3EH4HWBZ5goPXpnPiquivbSo1VfNQSKyhzvBjWaWRpCHGsgM2oYE8xLEqMweybW1VGRf2ovtH5o1DNJd8cd6BRTx",
  "key4": "3vUJrJkUZMchMhibQ5eCdwqbfTft6RWa27N5XN13GpAEmrtTRH1Ha6NVRSJfjMjwxWU36NKY7TBxkrMjEPKiESWZ",
  "key5": "3RHkCZFzUVD2xtTwNRPUWaaeqiMbovqahKDWxPFZrTiSn493ZjUekkiNn32qXaqttqXiNZ8S4CSNPgX53WP4TyMz",
  "key6": "Q6rC2Pjrg7qsZVQ5bhHF4WiPAwCUiRxn2sz74VNJjaLNtfr5YWykwUbsBcQ8iMQSwWDrNN26G6yBQnbboF13dsy",
  "key7": "2ijS5kDfqGbS1jTicxxEgbEQFgL9Y1YyRhgFAjmQEm91itbQktZGw8FtGmCXnGYFq4gSFagiat2jBf25r99E48VQ",
  "key8": "5pKQ3GVcp7cSP6L2Dnw8iq5bB2hVSbXsnkoRuk35K29uTCe5jyQoWDZPmv8UnYeuZHqznX1MnSuqHjPAYvbLDZnE",
  "key9": "3atWq8Y8DBoE7nNVDvTEXkJundkemvzjZSuNq21hRz6EPpFf2qsdxhHjMPNwLKbau7pwLuASyi9hYT35qkwkbmAH",
  "key10": "3kkDPwtj2BJnJC5dcgAgdSFsGR7i3xs6TNH1ECu4khXrWNsGpufvnQReFK3KmjCPmNcam2GDTkFnvuefAeQaPz58",
  "key11": "4qbirAebw9J3GztnZUHMHwSxrRLd2LMqUzmq3i4fD24r2tksPWqAKawxfuyza6yohNRRX1SQa81hDrh8cSrHhPNK",
  "key12": "7pXFUrU65h2tBECWPGpZmgfom9wBxhKZGSBHy7wcour6MbGz9MRH265ewB7imTFeTrLqGTMTywRQXxU9UMwkB1S",
  "key13": "2deFvfMXKiDJywVtXGskgTveecJfJgd2EiLLfWyLyzXTQYMc4L4sMex5dWrfwtD5A7eRRwikwoj9PFisAiWxQbUd",
  "key14": "5oVZvZpb1b79eQgEYmypqNWfa6y7quz4KoQs3B9AH2qDuVwoqwsSzAZk8FwKbpBGKQ56S6N5fckBkdFcSakb8nRg",
  "key15": "5TSCc8PLMrvSZGZQiYvymqGaPMyp6Lca5zNTnHp4aFaxy93wQdLXgXEQgZMtWPFS5JnMBBmzDreMjFdwcTgXhfT",
  "key16": "2JBQMnrSDTJFtK2pMa9fUQeAFcFGnupConm6P7FhBQL6MJDXq1CKHGEvBtm42ZDcrPWSKJndZZgLtn3h8bhe41iL",
  "key17": "3q4eoXhgbeJ9kshxfvw4sZ75Lxg1KYoDZLPB8CpH5KEGd9J2YGSjp3hhdCiXAKoSHnsqqh11CgN7RtRPA595v7aN",
  "key18": "GjT53BT22dmtwKC5D56HZBLgdhZ27vq2dWYxtGbpTPyPVZq5p7y7ekhhx31Z7L5rF5nEnGSXerZ9XU9f4LVBmgN",
  "key19": "5CjvkfizuuNc5n1UeEfmBHZosjGkeJK9j2Mu6RQRKe8LtzEkkEMUJBjqNt9WUEnARgdN2G2F23cxMnDohVTKhA7F",
  "key20": "4Etwtbm4gaXqa6YYrdhKHEyzntNBz52NcXu5PruZ5JiuokdcWKeit6MTaZFLXMnFo2c6B9L3M9T2JHPSzKaRsuaH",
  "key21": "3rSUHhcYiBTsYXR33H2Mw4YR7YBQqrcgLWBLa9mggU8N5JQnZrfyTL2fH4besFomWDJQHkoiTtBoL1WLi1PecKZe",
  "key22": "4j94yGC5WCMjMNDNnPWg2nGdhbTX9DbPkSNmhKuwreiH2KiZwHiZgzKJCuWmj368fmseKpYRpWHtq4eXH4waLdB4",
  "key23": "2qGJ6ThFakZdqMcvd89nNtUuXUDJcRsH42SbHYhQpztNk1SqH1R9fmmLFrkvXE11SBic2ozzUJ67wiMgAXot4Vqo",
  "key24": "GhDENnVL6NH7uZxxQxPxLiA1eQTdEZTdzNag7tL8ZmASGKDSxrkBv6YUstGvRno8Jr5kuuf6QUtomBZxdHrRiL6",
  "key25": "2Bq1GhDQqm6FXiUgjNz4nXFGWYWAajW7BSaSWU1fcbZu67xGSpLvpeYtVkQjnzGKK6nh5jAVseKtTPYVdcwxfKQ8",
  "key26": "3QRcwDzcqbreH9bobVdcvwCkzd5czZuaeweoE8MDQWLFiwdbdsSXtmqECS13VQezeL5F7xA6AaBZZEXTr55Qszt6",
  "key27": "3Y6KHXuRR11vy6rJUUWRbeDe5rYYs3oifi2HFSGywpzG28Ymb4c4xFzPZ5xVTVcRFVQQFQCxaMkZ29U8kGXz4bfj",
  "key28": "34rz2oKJ2T6SSEHW23TFUkCcKEGmVUJuoaUKyddpPPYwZCCf1nqx3YPPH5s2EWrGUMCYYYcyHtvV2XrxBbRrcuhw",
  "key29": "5NyKoVrxy7Sc8bUroNhKpKvu465Gc9Bkzy4juKvBmAAG8sSG2mseyDLrmiTr4WbFBggr7V18bUC21JWC5bvHwLvM",
  "key30": "41e5t4dHspRQcz963Z7ibqoYsWEpfheWPqX1WwNCqgVmzVb28o1mVacoXjcQe7Xk2UijuEPLRfsyeJBepyf5t2rE",
  "key31": "3DvhJ79WmHWSGs1bp6LuutXtdVHZUpfSP3mSANJBffETcw1ddy8tBSsFGe5wt1DSTG3DLeMJX4RUGkNtcsAt7dBc",
  "key32": "5WVofXuUohbESxwXvMpyqmQB5qcYyYm8My8WkxeGnMxEzpgEEhLBQYgyUZVZiAdvP9Kxw1CzJmaFz8kyvBkHWwvj",
  "key33": "2BpnG22T5jUAL2RVYPqAsNwVHr63ZH2A2tiVppUTmF2379LkGRC9wX5fEgKfj5QiJJPxqRyetiaWzS1rtvPoYzcW",
  "key34": "2QtAvSQ5J2eZFCDML8aYeqenvYaqVCP4Fr49mDTo6tTiYYcXBctZYKecTqaQpdnUmsedizg8mMo4Qpiq28HHLRGr",
  "key35": "44jTtETWh83wBgyi6CM6zbhwW3sYTR2MuHe7h2zNbaEuU8zKWs83j3hgAP46qx5cFE5pDgxHHqAeaWGCidLvL3xh",
  "key36": "4rcbRV6xRR78KDqBWGZJdn1VfKoVwzUjG8Z4SYPmBuB6ccs2VBJqtUYBvzsBM6rXhMFqb42xGK3PWFNg1tp27TfR",
  "key37": "2QDSPyuYbr3Z4ncVy3FNxq1rubbL7HBYMahAW6DKy1E1mrzgTNrM7BJAD2F6yqGvmfjjKGdtzAka6EWhVBe8gKff",
  "key38": "4925uBxp4tZdJN6tnHkQ8bMMUmBiMxfRxMhJAsDVLqMYDJdyYi3TzLVx42NEkvJ94ZJS93kXTVfvUgdMSPBzzE22",
  "key39": "3J4X8cbWHb5uZVaQL7EsrQouTS3hsjUMapxCucvkCmy9xJnLcD8AJHWSSj5a6EooP5pNFrdcFyFzQbddWXasJy89",
  "key40": "4PimSqfQ6h2EU8HLaECqn6fNCrXaW5mVthEUfhaQprxgD6ynxPv8Pw22dyMU3rx2cWCFu9Rx8wDVD6gdpYMehBf1",
  "key41": "2aEwCyT11fgxkP9kVE96KUX2vDrcFyVvmqjEshYRdFU7BR4DUpxXSoSBdc5TdhdtbtTbhB5Kjn2nGjKHPLiJwHs7",
  "key42": "5hgoBci6z7VveC3XBtBpw3vBBoQMqDuoJ4VQkN3M7SvUvSTtqUoe9grW17UGHoruUr9A85jJ9Zcc3gdhf3drjaea",
  "key43": "2DDmF1c6Rk8ALXQqhWoy7eYcMEg1X38xkXYsHwu9VW3DDzVdWRoMXLxLkGCdd7VctpD4zs9X59koAwUMbg1ELRPN",
  "key44": "R9QkTHbpdBa3UGB96jX5ycP2naqii9gYNq3Txup2AWsSv5bGoAVBUgAuCHzsRyy1w8C7R5JTE4y8Dk4yknp2NVA"
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
