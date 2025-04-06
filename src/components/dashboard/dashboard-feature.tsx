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
    "5G93zdZeex6bXFsooxVira36Bmrc3ED9GCC57GDGMeZ6yuXz8QmpCnXsrUx6wAWz7sJxthRTiweLNuG1ibUyQQSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JKjM5o244Z5tXCdHUzRSnocjea8qksoPbjoosXTz8C6sPHVGHBikhav1Rvi5PCznk7sAiy1qS6TdFbojZV4kRZn",
  "key1": "5Tw7M3mA8zGADNsFFDDjR21DqRGLwSoHP2TBXy53YyjUaFWA25Zpng3N3popUg6PaodThE1rFPHx1hQTTWBaKY7T",
  "key2": "3JqVX1hMAufQ1JHPjM9B3naN1qPPfhp76DMLLKHYuLa1KA7Gkj2J9f7mMZkXA2Wcac7SXRTeXGSKkWH8kjBr97F3",
  "key3": "2jp6aLxTCDjTTb3cQCwD5vuGrfmNE1JYEzLQCLJuRYgD1iN8wTfdwWs3uoZ26QMWR3L1RGsJiCEvGi2uzsSiR3Gt",
  "key4": "4t8eY3eTXkR1hYuZznGWeSXbHcMU4xSE3uDzve6kQdsxmbJthJGstuzjP9qEYK3SHMndXvRwEmZ5K6BEZEiojqpQ",
  "key5": "6n6dFerw7PYE4n2L56HvsexHGnctmMUr2YSFozopLD7JJrv7XKXGapVZ1ukwr7dJcXKAQn1hdaYf1VG6i8D5RCT",
  "key6": "2uE9KBjvrnNoKALskRANRRmDoAgub5rdurW62Coyq5L3QtV8N9tvAPs7CUF6bDoWCTukquC1wrjFhfoYEvVq8ukV",
  "key7": "5dmSgyxWzaG7hbg11KMA2dpMKBVw9J1bgydeBTJVWeDDUJwHBFfBcSyg4cer5u6vJjbNPPeoEZbvr8FoXjuHGoxy",
  "key8": "5NkGdgSKqidX4MnB32QN2dckBA7ZnizLiXudZh5k3BAJHPmDrbgu6ZG3E63aytS2c6YNbQBCp9KUdBRk25wXrhKs",
  "key9": "2AsgVqCKgLTjm1z1mwbbnzQ4p97ULegrZPmna9hHwinELiQJSZ8dnkwLi1FaKy4TKq3TcDdrsZLRFLfLkV6EaPBV",
  "key10": "4SdQjV4jMvL43AKM8Nd1224LJguY1edZXWQwnDSWLXnjrFCVdJYjrchVB7fDdc5twntYLbeurU7522j6F6fgf4y5",
  "key11": "95a1qgbwWD5VmVgEmBcMLTJJAMKdnp3dXBHUfrn7J8gXFJnadVBhCUkgvEoCN6djFw3fVZw53QjSWu5szG6ZTCc",
  "key12": "2WMAmazYqzq3dZPUqceX32Xg1t4js1bMbjfN18q8EEJh79j2JfBeMYo7G9tBuAKMmet4VzB5WXMVzEcwGg44PQto",
  "key13": "5uhoSLDep4qDVKngNZRq35eYthyYj9AEskRznQQ6rafZ2UeVsXNDXGgay3nybx8k74MXAeo8Pat1avZzpN3czxfT",
  "key14": "3dcNtxmrfizhTpXvbNRPTy2BsBTEUUF6DwXzmtMCCH8F9pUu8FFg6DKUzQzQjSwtcKbrqoiaHiQx3vjZpXz3UfGw",
  "key15": "4tgkcZeeyZ2eBrXjMo2ijCnWKZGFWk252S6fhYP5e6Dqbt7MRZj6hH6yQ6xur47ApJ1Wv8eN2YnvtfU1b1VGQSi2",
  "key16": "5LNpeyjKcr6Qz5XdoMD1KYakTCqjvHcSP797GTP7hCC4AQjT7AvMjMTNehaQKY8KpvouTrJfBoKU8Ci54sMdgCoF",
  "key17": "2RHXdnabo4at1Rrx1ftjg8AhnfCzj1K2LmTxyW64uYe3CNEzBaU8sGzWXYRvmohdkhrSPEAV1NRZZzFVkMYWg8s8",
  "key18": "3vA8GytWk6ciKdreHpe8mbKQTdEUp7gfoPmLk1yv3LMghDc7XXmkVihTpwjvJEWY3MG4MWc4BeriopjdoiPcBUsp",
  "key19": "67kkWvWzyw3fqMUg7jXsdDhwWJsdk1EhPag8jMydw7Kis8LF6q8B5wMPo9HkXozEMeTsWj74Q4mfNifzqN9JfYQB",
  "key20": "3bBnFMVMK7KZMZrh1uviFBQNLtCEnyGXadQtJbVyr2CBXMJgspy3ka4j6fngJfDwG11Co4kKMcBwgaqjacXDGdLA",
  "key21": "2or9NRLF1daiezCJowTD8AqYcsXx5esNPvoqopfLbQ2oz9p1Gy4S7HmwkBc6Aaiy2bp6zS67mUevKDz4SigRWMja",
  "key22": "B1yS4jn6r7H5SERRJVvvttPZq914zWrJxiDafFbWRynN49tf8XyuuCoVTqrua26jEy24PrXdPFx8dV69VBS49zf",
  "key23": "4Tr78kDtKWuV4AHmddWd2JAkpQi2kfwwbEv5T72Z554zsmptUggDaBR5Jyf3THVBud2tape5Q1fSJKoR1UiT22us",
  "key24": "qPDRifJtmE6vYmWDH1gJwdhkNvieYxYsZq54RE9yWFAdk1YzAYqSWDwz547pXQkki1sbvyhJD9osxSFxcR75yqz",
  "key25": "3FreX82oVgjiMf3BsETzK186pU4GfkbteCw9e9n6imJ1nF1PYfBjyDeiNxg8zVzHKMC75rEjrMzJYBY89UnB4T3X",
  "key26": "5JiZUeL4TKv2KFFj3hVUpiocT4wJwRU1oPCYqtBKxNiqYobHwgytYrgPBcLz3ETy8Qukd3S3mbcMq9tECasyc3BP",
  "key27": "4k9G51Y9wqpMr9zdQAkbVxZesZ9BZMNTLM8SiPCYaVxqESCXTG3fiubGmJWu6DzdLExDHdkcqgg1SMcGWXGN2T9p",
  "key28": "YS9pEQVmJ3CfRutTUtwYz4fvHWqZZnBYEFq5JDY6njPsXpNDMu4pJsLyf1a5gq7zpFNSy3wAxNcotNgZoHvQevH",
  "key29": "22D1Ubmq7qqMuQh2Eo9PCC9owSLFnDunP5TJbr8d4Xn3vKLhLmsXBrujAmuS92uxjuiuwqa1Bf3UHNxuwEZufpyP",
  "key30": "3t3hTjYsBxG9w4Kp59pUtYM2v3ixhhyWbDTXxy2MZNN18RTHdfER6nUMsc8NyZoef33u1EXJbbpjtQKM2vd3fuTA",
  "key31": "5sYg6oCMa1r7jHrxFJJNBztdgHNoeBqvgoAQJMGtjyikZ9q64eJfwBEupMAsvC8PrXRG9oBYM9QZ3jktGP9um7b8",
  "key32": "EU4BQDeLF6oev281bu6voWwdn8TyxYUB1Yb2TZceJJuSLHSqgqvgBxQP1NWy667T2w2PbtForonFxgx2K2viNxj",
  "key33": "3SYLEQJqLe2ss2aFvCA7U3hUer8VChxznmBxeoV9D5RYFwFFZEF87RqUAe81K8WXWn18qqp2EGWGzUzr4SKdSh9e",
  "key34": "mygMveSC3CCUGrYRNsDHTiBnuUwecQvtovSR7TjEdF7fewHTJsKd6nvS9joqW6FMiE9eu2AfqBZUsu7erMrqdyr"
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
