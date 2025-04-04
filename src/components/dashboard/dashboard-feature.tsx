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
    "5Rfy75v2xP8qKjUBVnijD3t9gyLi3LJ5S3EW2MRn7bwrX4yCRfjJQCc8Uziu2D1Nx6F4P3hK6V3XRKJv9TrVe9nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apSgoVaQgMqtsq4Aa9TbHnV6VL1DjenEPdwL81vyuXQRkG4U21GHM9RN4YKgunSqhuZGSkyQcSJMn2esi4ap9Zz",
  "key1": "26Y7EPN9cZCjBmAaN7VUqwiz9RTYKZ6YxBKXhaCg1TBKuxnu8JM1ZrZcwpM3CLvnFMhPqo81G39zuzeR7XKBnrNE",
  "key2": "5jrZ4w1m6Su4Dtmedp6s8cRZ7NTGtMU9TftuP8mBx2UMvBXnhmRv6Ng2htp4Yy8kK5qnCpczw8Hvbuf9ntSHiK7q",
  "key3": "35awdRJEUY1EkcV1TeFZnJ4SMerH4yfpJdK4M9rRkSZp7XGYaZCXVrUThzuupCc6eAgDBv8yZev5KKpUFE4XUtap",
  "key4": "8RvLoxTamvmPdHwmwzYPq2ZnzNyZyrsJovRRPJcQCGcSZ4UvC8GxN3J3619frLTZKx4ib6xLHDCcw2u6zXKHV77",
  "key5": "5wiPS52KXZNbHQfnL1YDGgopTc32qitLmk8n4MJqdiZ35UFNkxS3ZhMkwsiAjTyqtgwzcBjxtByD9o63HKLEoXjY",
  "key6": "2pSAtfah9WLHmcPD4NSNH5dbBXkA5V6HJHCind5MR8LdRSd18na6TBBm4CCBvdxTHU6SepbKBAeZ3K94382zYjFr",
  "key7": "3XWFymhNjQhM8ZicW51DB7JvY4UymMVNHdqHN3YBWY2XNN4DTVoNsyB5Hwz9jNRGRrrPRTeQGSnPqcgxWizKbYFJ",
  "key8": "2QWdMcQX6LXd2RNxRZwGNWMytUpL7HmKXjcGgGmEPSzpeSqXzkiFbvjPnAmdm2bh9ZYFMYbT6mVXg9NekirvkbGQ",
  "key9": "5V9rBXWwY2EkuARP5JLfyLZTBVBzTbuePW7MdAjiq92ZX27k6D4AujD4KkSK4wEWLZavQAZUGg23e9hkEHxarRnG",
  "key10": "4HmXgFcATorCQZRo2Zn37Jc7nBrxQxJvLQA4SqDHByVYsZQ3qNXB7kunx7rR4La7RVJfVuVGcakiYE3fjnNJJyTC",
  "key11": "nJ3W8RVGy8qgj1FuKJRv7RvADubqGVZXDWMFss4vzMZrB5rta7eiYw7Q8RbY6qTaZqNPFHVvBzGZFFQ5sCQU94u",
  "key12": "5poLnv84uyjETrTkANejXJzesXhXax1bEP62ZKnn1pSqeeN8Hh8vVdhprQABwpj9ERG9sjqRhT3SZo1Bjv7vXcx4",
  "key13": "2fZxWY3qPexLwvZhcUFxwb8FNygLmxp7wmANA83pC9k1QBeYhfxSPxLWr9My6LwaoPxKJxgeCr3HbSukJ2rtM65A",
  "key14": "2XLh4wbAocMbEuas1vVUyhfi7hzCyTaZyVEF6bk9W6aLhJgyZnPzmUBtwXGBwhinkDYKBRUBEDu4PCuZShJMYeVQ",
  "key15": "uudnjaAVS9bVqohFefbt4Hu1q266hC9misC5P72xu3WG6Y8PPagTxh2fc9mSj45TYczWYCWw91FeC99Bc2W54Hw",
  "key16": "46g3ow5FvHtpJCySVWSQG48S6E5cAipTU21ZdwWAoXg156sw2bAbhf9yFGprxJELerpAryL9r1tP3g43eax5JUtG",
  "key17": "zveuKiC3HDD3eFReCYd7zeXUQpFS1kDpbCbZ3ASNUhs5zdFsGaGH1fyWt2DYizaPkpBKL7Wk4MD5YdnksYa86ue",
  "key18": "2Axs9UbiVJEpgNUevPPPfbAj8WSd2kmPp9juYj5xzsDcNtfutnSaHmhjPuRYe11u5zUPKwMVq5EQvPUrKR9sBdoh",
  "key19": "3TfufNHCf3camqCixj2VV3SkR2YEGZQGZpT8iJsjFPPd4y9wnpryTFVbuXEi8iieE593sBWKLCnBFzNYbHjEokrM",
  "key20": "494nJVVzKqLPLabKtW3TtS62wptuTxSnJpWwdeUnoSA5cjtgSMEmvkp6pu2Ee3bFx4ggWfeyk3gTBQgGF4TWkfK4",
  "key21": "2i8TBh4wN3JZbn34tL7HnWKLK8BZkCkmzJkZRfth8xKPaa2oLeNUSJx598brjxQNF2JEkM73pFEANVj5R6vkGdwr",
  "key22": "3Ugu6DhHZAxnvuc7AXjXmbauCf8N5BEfAAbWPKmW5Cc4F1nusS55eA2EaBGV2jsJp9S1wMLqkVKb9hknU1iHKBP",
  "key23": "67h4vekQYP7DK8cUi1pZoEi4YP9naN8x9R14NyBRwo6aiPBPVtMpRiRCgDK8Rgy4xMWR8LqxmPCvLukTqG3VqSEu",
  "key24": "tuJBhmtMMyWRh6VLPYoJUCUKCkHQuk4sCB4M36rc9PzzREAi2HM3rygztZnSSF5KiEHenZjLMgytfKjQ3xoPtEf",
  "key25": "2jzT48ERebZcnV9iiLSbDP5ioSr41YxEah1GgvtE2HoHVi1doBrgk6f9RUTXfj3c3DL3FFrtpPvgKHCSXN94Js1G",
  "key26": "2tPqDAN2DT8zx68cWi53woruasP5BevxymrpQxSeKKjXaRdb5PUyk3552AUYT136mTaeDTc5Dh5GPRAWGpDLF4D1",
  "key27": "66e9DpfMdn6ajJATzacpB1J5mGLmSnFh9Ym75xojdbiPP9QfKSWLGR1XhieKWmRnokDuWs17NZazZun7rt9fsoob",
  "key28": "2p6V3MLZuJ4Y43K9jcY9xrFJpNWc4uYQxhW3HWH8xQYhyX1a7DmbhzZ4Nw2rfeEz4cCEvXwm3nPrWs2LBKjceJ6R",
  "key29": "2pfkRJv6ZDXfF2AMpXnCtRZiT8M7HWfPxroJ2jZc5iwSh6Epv2hfRScSm1ARDA1AkpSt1bw1j5xoFVurMqXZbNJn",
  "key30": "3R2gsnAH3zkUFgtjjvgKCrJneZKwazTuozWJHv799zLftbJYWWyrUSqh78NAxu4ASeWgM4M2Aifo3LhHv3ChJWL6",
  "key31": "5XLg1CaWNFCSc5EDYX3yiVQHRywqDEjVKHBdgKJcfoUhjFz2YJZHMLLSJDAMrpEtxFsut4uifP3QRuCdcqjACS3b",
  "key32": "4toJiZicvjbtNH6y4hnare9ZpaVdbNowFsGFz5wFHuGVtGrgsJrRoJU9gEpky2w6aYiAssDYTXkJVPkcQTFuhN9J",
  "key33": "3C3mdKf5Mm4S29h1Y91HB7hmS8wbkVjsBtF8TwFnKoPR5W25vDRS8ha5Nm7vT5ALxd6qrWVNCfTJVGcsH5SAYjBS",
  "key34": "4nfvy1wZCcnsZvLC8L1iJuYyyCsQpKaVFVo4URQceBP1VJn2zkFeLXZsnZ7xS2APV9QJXrE7hAruN2xsAiFcAa2Z",
  "key35": "2fpY5FrhizTAQFHUS1JaJjV8CuU93oymSJjSyvhzeYVaEfTLJ9kQT68P9K1edPzBMqakZZzmyKbWgzmYc6TBb22c"
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
