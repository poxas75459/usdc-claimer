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
    "vQW92RHTC8swpJapS8wMEWtocLwaUUdFdTStNFTk8mAickHjkDaFoiM9zrNM7P2UYEwu7qShEWGx9sPbbdas6xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXPKvmDjFyjKYLMLe25xvC9sMMd25QumzrUWrkcKYDyVWYUc1yrsEjTNZf7eqeQA4hJx3GkAtiQdHxj6nCdBVjZ",
  "key1": "33AKd5bwZ1GgQzpvfXdCipjzqYFwaspTV7gNoEyVKTMzrAaSJP32hGnAUy626Ht5sz4iyyqeBPrxh15WNVjyJRRZ",
  "key2": "3HBAtQAbqX2ZZupb9Hj5H7qiJUvtMoC1ygPx9a29ZSr3aWkpTxxY6jSFx8NrudCuG2m2YDXpgQnyWsiN3EJuRmAj",
  "key3": "3G7KckWw7itx8X2ELTGYKm1R3PWUejUEpx1f1cXUkKRRmhHAiEaoW1RY99hbP2AHZ3seTvekUahTPW57AjRzKP2C",
  "key4": "5iKbDGtfPi1ovt42UNiyJrGs5BEMAStPyfgntZPLgMHnoAdVWq2b5mAyv2n4f95hquLDY9ic9LvkExqGtVURbCy3",
  "key5": "3Eb7JkKP5GwhNdLXZZrnDSWcXTo6ZARxj9T3nTjY5Vwmm8vmFL47t77Qd6zbFwFGSXHknspLQApLYtofeV7mw58n",
  "key6": "5nSLmYhv1AXei51VegBsfUvvC1CQWSakH7mM8ES6kDP7byaxQF19VWMRBD9mU5RcPoj3MPnqazeRGKTNYKXjSY8Z",
  "key7": "Nyy7BEhfGSr3PK5tV1icXnjR3tccCUEVth3FFny7GF4Q8LVqHLTWs75HZ4YSa1f6Qs56cVb2YBKVoKfnZXetawk",
  "key8": "ZKe2gUeVTQYF5g6ZrwUpwC8k1qLkC2m6Hm32NQeMeNvjtwiMGK3kHsipRv8epfBoLuUvX6YYQF4y83VU8VutDEu",
  "key9": "4gj8Wxkdmht5EsHLiW21dn3hS8Sum5jCBQXUY94SZSXFEfMhKmLoFfwaKUjQuD8BnHULPnULyKXZ9AL9saXBUrgh",
  "key10": "3JH6dm1v94eQgTzSYrxtBPJk7TFhNkzPqddjah6Mj1Bs5eRHhL5diKcdLVpWi87KaFEjeWKTtqTY7Py3eB2Bwqit",
  "key11": "2bjNEbsrtWxjQRJo1Vo223pr3ZLLk4eTCuDKwaUVyUjQKAgrnuHZqzrCehQ6PGtUCHgvsPCkUGZsXMoT6rFNjqxR",
  "key12": "5ahmE56CK8gfMWpvp6woPN81nBoTPA6cJUnKkqicCBxhjfn7UoUfNtwxkDmzSsoZMSFRkaPg7u4DRuatZo4GzdRy",
  "key13": "5JUL4HPcez45A8kQeQUvJBcjHaEpmQ6oE1UJ5S84mX8fmcFQmmtjy3KFobdVuf6eazydJiuoQwxCK5FxHcg3iebR",
  "key14": "3PWWJ6TqxXfL9CgDCuLaYMH7kyQLhHZr8PuNYNsL4thteRx4iHzzYY9gUBfzvTjWooRQAxMTgGEHDZD5okhFgt4d",
  "key15": "3mpeDP8cZxsnHeioJ8RVsgRRb9aq5vKMj8cyGrcNnU6x6onH8tXEU9dbC83nsvyKNQVtiCTnGAEBx4vdVpMyvGzd",
  "key16": "5SfmBTBdjybUUJKvGofAJuPQgEd9KgmmZtqnXWQhcP1MPTMtf2UVqqXvCuaZrdMer4a1Bzd5RjvmEzxLziCAfieW",
  "key17": "AtZT4yD34Ryz8vjmesMa3mfyyUgPSBMXQuEcqZui99bJUT6CnpJYcdDkWPLpnuEmAFoDJh1rFSJeiBYTHQU1P3J",
  "key18": "617bVoYegtaSUX2qsERCoRFgVkzCwxR46KoT8vZRUhjFaqp4W5V7nnmYtRs4u1UEz45Sa96Vgp58UJ8aeidDU3yR",
  "key19": "4YL6jL5j9GK8PyvMH8A1KDU2sNNeHeBchJr8xFAPDF6yhV7Am9y7ewLTh7pMmSwXz5ZcqKet7A2FQjsA2uCrvkf7",
  "key20": "5LbxiJ7V5qthAyWHEABMedMiTVjXM83sS8V6DieqqMiZkFYWJ4pExuMdb3HRcWBkPnspaJq1ywtWvS9hY1xFk5Vk",
  "key21": "NFEnyXDV5EaqjEfg1PJMAevrj83KG59fjHedHv5hbXQvDPLVQio8GWLKzdcwW9xFvq46wuP8GdC5L8EA1rf4GRr",
  "key22": "cysGgUirk6yLS39FLdWXGNr6KGmANwcMSwWHn7bMw2FftnJp72dBUR2RJ8Hs7Rrry36nc89L98e74eipNXsxUAF",
  "key23": "2hVobz842kD9izyc7t6Y7SWHMncJzpy9F5Jo8w9RvPkxUZhXQbbPeE1XEPDtrNVuBbGoGKBmayy5idDBWDY4nFeM",
  "key24": "2nTxe2Dwpxy7SyxJBkyDHbQnH2SXPfgkijTTxRwaiGzMDCnTepdmTsnHp4fyk6cuQsBZAKmyPU5uF8ur5McxcBNZ",
  "key25": "2jBU3MjnxJHCDaX3riuqEWtGCpXhyv7Rznnk5Nu4yBv5KKb5PDjDfdKZf8WygwS21FNbFf8GXQuRDPCHVAoW45DT",
  "key26": "48xQKvBqQ4poFXcq6p4f8W76YLemjXppPsULGykKd98nchpuD8giKZnqzWu692pcAhdReZmcwd4WijkrvwR5Pd79",
  "key27": "47TXGc36doafF91FYrFZuDZbzUGhRmJgfxVyh2zxSmJ4LBH7SJuK7Zog9mhXFZeh5naBvF4PQZM1KmFbEno7Vjiy",
  "key28": "3VSHtDRGHHwV6SxBa8C5VjXu4Wrn7D1efTvyBr94GXQHZyozxYiKdCZxqe9soeAr87R3ShTWDhCDSHszY4FZb4uJ",
  "key29": "3ZtehSP8JusSDiRWqeUqrUhxAjYgK4JUQPd7SAja3DJG6rZwVU6cPSEbSX1SqeczbS4oBXgUCSLtm2TtjoAxByqT",
  "key30": "4yeVHoUGE2jscFSuq8eUAjHu3tYjGfnGkA8B4UGfWCRSFBEZh9ssW4RxgyQ6ppKwbL2xkGTVVwxyvzYDznVrjYwe",
  "key31": "4GxVWx34HrxCGwvzVBhHrX1cWxFjn9fYNp9A15AxAr7oWFe4TsfUbfDzhVkZarcv6togMvQJKHtgSA1PKf6ZFkqV",
  "key32": "3ecDrivarq3PB7ZHoKy8NXDzZwm5niQUpNWjkmVvxbeajLDKBhVkP8Tz16YPGAwzMt2QrFG473ScGDwKUbTbHSvK"
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
