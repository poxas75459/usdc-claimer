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
    "36sLUEVBuoAr6YNhkw2Pm33r9PozVSWWEBmLtSQz9R8G52P1X4NWryYGHh9AtJ1ERKtKY87UxT7jdp3pw6zeWron"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BP1qQNMTwoJE87AHSF7gyeAYhEoHas8S14dAZ8A9EF7xZaFKc3rYvQ4fUX5fJ6vrdNV6LQzo874zjDjqzJpsPED",
  "key1": "4GQ68oUHDY6yMcrLwWLBLn1UQmJPVP3WGn8ZrErEtu63fcmDkYqiyx9G1TiuSk6nXNDyreKcYMczTzpWvc4SFuXM",
  "key2": "3uHYdpD1teRkC5KWUPGBQMChicRDm7TLREkhK2wxrMM47yWHWVwwZWZdP15eZjR6k6UcRnSFjxAmbsiwmV6CMGs5",
  "key3": "4wX8ATCE6Www7j7qhxZB1mXM4dNb7DjHKv84bPHY18DZM83LMqa1CbiLWae2QCriVhbHBDU9tgfSdv7u3naVnPM1",
  "key4": "BiuqkKN1t73JtnQCmU7uFpeByUTszCADVyTvD7nub64VYjdGosJR7q8gebY9GANfNNujHRmWciYd1u8cFYSxxzX",
  "key5": "jN1Kn8o9uVX63CRkiG3itk2QeD9TzdGTcUJVdJQoStJHqDAYq2EEZ7LLDPjLabgPeHe1owjzeBgKbvbC3iB5L42",
  "key6": "5LmRQMdce6jJdB52EfGrymw1RzDfXZsNEQomLVMTC72QYVMRSwBrtnUaeJMFoHHYGFQmuaZ3Zj63yLpqATgS4Ude",
  "key7": "kuVDo9TTXQFuFDxxvr9n8YPAVvaqeaJLLhMGfnHey9471K5W7NAnXbixj3v7yw87aZMhNEMrqcJkRjxY73phxY5",
  "key8": "2yjoLXcz1aX5dBTR7L8DKr7WsWjupnvvNAxvVXh297FQT83haN69mhpA4xqbRYNxA6A7gbh9UtE31m69jJnozoWa",
  "key9": "5Vy13Fjyt2iU64Q7vNSbFiEMK6T8DMoaAscWWmqvhdU5a7ysRUAGRyA2pA9NrVcEgAoSaoferFzzREszxwQyY9o9",
  "key10": "3pBwyzRNkwdYNJLmvNKhS6ebMdkqCin2m7HQ4jQCsH3ehwT7wDWUKhfMGLKgGNYcyVUJxPGzudgr9xjA2f54wGpY",
  "key11": "VJuCSWntVfEjrDMxNqQHQN5KoUgUdYVippiHwqeJ4Av9ey5H9kA3KMFip5VJd6E7YwmfCyEoYTSVFQ5rRYm8D6x",
  "key12": "4divGeQjKbsMm6VxpbBfKUZinVt1uGsxGoENS4v2j4PbCnbKLhJJiMLFJ6e435sT8YV3sE4Gg9LCNK9az16nvpWN",
  "key13": "2azQKMBkofGKsnaF92c2MAJewrRtXSLaD8Bh7ySD1kxK8y28CrzX5VAtoCj9wKSNxwbgPFHkKUVizWsvgTSmKg1K",
  "key14": "8ovkC3uK9bL6hd2GH87hPhpjVrNvjFDdZ1t5M7ZnciixhTcPLxLCpM4G2N7kUPivwcGSszE49jFxpagLMwgQ1w4",
  "key15": "5RherzSmUpuxNALq5R6USRHgdwHcosF6aTUTKXYhmgsQgemjyEBRDfRcLdm35mbBm4JeUTqqRximt3QnREYG2WXQ",
  "key16": "5jJFn1j6Sn3W7QE5SmqX3zsQZH6rNw3ztXuJtERicTXjN3XHT21iQBpZUXMwG8V8wy7fTcNM4FxJbg5WgCu38mdJ",
  "key17": "3XmeKw3S5m9A5v435pR3shU2XgHbNWFHG6qHmKPp5bhNsGnNLxa5TDos2eWu7FE16HijBVbJsiPCNf92jLG8Zx6n",
  "key18": "4kKq2QyZaM6JRZxLEdH94jDHoUwQm2d16YXmfHnurPJiR9ozz4fwAKMEEx8FVwLVMvDpbPhW8Js8MvaEW2rM1AWW",
  "key19": "453q9qbeXxJYCGzetAxyzf64doe9Y5BM3iqUhWxRppF94TvDxgHZnZkh4SLeRyPpa3mqNS1iZJLL2CBXDfz332KX",
  "key20": "3JgA3ePFCmDDH1poAtLiMweYYNxddWD5tE2Es7nCVC3SXKj2oaosWVEfefc8wHd27WtFpaCCo5rRc9K5xyU6DcH9",
  "key21": "3am5iq7zZnKcUsJAVQ5DX34nYEmLzYgJMDFKhnK9iTTP3ZnySFJTuCw5KBYw6vbvN6T4i8QDw1KeqyqcKjTRDmfj",
  "key22": "31b82sMjjwso8R4zenNDwDD1yQqRb2S35nczmrVvVT9KAjwXccZ4P1BjstX1i4uM6kbXpwoexQBjLEKmmSnHMH6F",
  "key23": "5C5gK869ZhRmNhgoH1uNBGJQuBMc77XeamKbgEYmR3oKKvwBnfXqn9CLaSpSyZs3Q4PU9MYRNcteWjiCdfLUPquH",
  "key24": "4YAGZaJ1utKh31MjFWzh4e8FpBGKURd3UTDapL5YixUyuzckKAQB1Ki8tCZnbUPa1V9CH8gsP2nhQ9HYwyfTydzY",
  "key25": "2EFHDLJrDavFFYRqenFwkZkc2pWz8rwFdGWWka64hnRYu8YuWxKK1mUZYNxQVh6fwEFhfP2nngj5d2KdYSV256zd",
  "key26": "3QAYc1qKwsq4Y1zAPg5RyWahUxaSy9tx4rBw6yzKKhkHJZctrxfq1C2wz2rVpTQHcF9RsLUk33EG2DnqoHUe9JT1",
  "key27": "3nfwtkunkMkwbNm5h96N1LWidCTx8TFbkZUHsDmqP7GPM7Bkq9TKQ4xrP4zBGeNGRHQU1zxRLSvCtrDPu5vLrknx",
  "key28": "itWzfF9zdPJEJZZbKmbm9vLDWqYqERBfgzKGa3CbsvNRE38q25Fo7K4cTvp8hZQ1v2JMZezR6fTU8g9W6pvMiS2",
  "key29": "2PR6r7WFFPeYkidv7yCLJK94LerswfDeVboJKKu8CZcuszWosGq3vtiKafxaVCrFwmeoDNuNaH2B5V158hMaJWDg",
  "key30": "354VV43NB4JjcgQDTxEtL5dCuBzHXYoii17BDt6qXGUw8cB9waqCNRav78sVzi2XSJkvQqgsCwRQETH8Jc4DgaKi",
  "key31": "5AcjQ8CoWCD2V8dmoJoUZzVFWz45oVcPLaStkwTGDyaBixQy6L7y1oqFFEdYFt7zsdpYnbYTery2tKJ1Y85Ego5H",
  "key32": "5KF8JVSD1XvpLKk2Q9nYkMXtLjRB2YzgpYgvs8q5PaciNg4LqeZLyhSFyYFQcveRMG9mfW1vcswc3pKrx77t1uQ9",
  "key33": "1rQaURxstJyyEm6PseJLejfTSDhzoaHEd5QBStr6T49y2HBcZv2oBRbNyjBH2Yeoanbc9uBFZuwW3Fz4LeTvi6y",
  "key34": "VEodYbenGw6r7PRD9wR78Ua9QLyQAVUsaTyBkkbYTvSF3WzrAjxnVmUVxCsKzSg7fzENV2i5TeckvvcnCBQW15K",
  "key35": "3CXF9SoG9pcMzWmwiFqXaAVuXHgSB7HSJd6Xb4NEFUJMc8iLBUWKCQkNW5x1jw42vifVnGMd5v3ycyrp9wxrJ6QU",
  "key36": "3nyd438jEeJStDJK88Ad8rDuXJdTLjgv21b4T5yhDNTAnBuS2EfLxHsfsLnVAfsPMyg3CJMR9YdZA1ipWVhH2Xtf",
  "key37": "3jPQabHnPVEWCdmYqJjM5rTvGMF5g5UAaGrHY5SQLGfwzcDWpNuHerkbMnokTrgDaUfEHU1dU2WibroVLsTFEKog",
  "key38": "TQUYjg5Gj7SzxNeP3NyoA1WJwpuHoFB54d32vubtFC4DpdTQ83sWCaTydb4cSxWxDMvsYfn37stHu5uMvZn1qK7",
  "key39": "vu3Uko2J5nSQeJEh2oWGjkLnf947mVyNrMgoZo8z56uL26LzLpiYJSLAczcDqyizcSLcfheZoFM5pYyGUvWcVTz",
  "key40": "4ANUiScJ1SUqkwWkHTbReUYKLS23NQoPqE7D4aW6cjfp5P16fzbPdnMvG9aAaFvVouRVyy5RLL7HqQVuPBLX7Go1",
  "key41": "4sqLwjQQuQW1N6axx3YbTJnqRcnnwhwisfUjzxousePUEDPAkeqpZHa4igdkL3NzpKuZe1EWi3KgMXvTweqG4jUK",
  "key42": "tPCpqA9U27fjz2M8LVn8tgVVxVRH5KepJG2V1F1hwikruTDvxmU79cPwgpcM5sZEwBCs3Bygwwbvu3gGezjH4yU",
  "key43": "4V2YruvZ1Qr8UKJzkwpEGAfUCK7D8z36JR5McYxWLVbYNWh2jG7WKtL6dfRMq2hXeKeUWk8Jy9SrUS4YN5KkRytR",
  "key44": "GG7FUNdA3eqXuvbMkCY6fcvxuVJMpUrPwDRiUiVF1VQJf9CoEn96Sg7rQXYk4ge8nX4hxwucT9xX9VyvDuXE3wQ",
  "key45": "GWXnaESZrBTKaogHUy4zTHg7tETp9yQ3g3jUggSDjX1oL8XF343LZhtDhwt5Ww4RzAiTpUZziCZXTV3MXsFEeSN",
  "key46": "5uXDXjaKKo9ChLxBzJrvRtqJM62LNMJwi8BWV13nhy2h5PTy76xtQacUHae48DcDyaVPhEcnpdssXLR5tfrT5G8U",
  "key47": "35nG7Zv2ZDVcJsLPoy5CPdvD6enrM7cXQKvoQV5BFaYvLJSFLZ86AnjE7PCRuuEXwQWqhV6GKMD5UAu9XJEqxeLd",
  "key48": "2zPZW2RmbKZAwV3FtPP4WXBdTdz5o57rv8s98eUcXmvJJug1zDT4tErAAMhk2s6yCsPzsBrAUzyhbgQTZiGXEcYG"
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
