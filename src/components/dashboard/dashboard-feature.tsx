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
    "4Rf8rRC7wApzMd7FzxdR6ErPLAT4Hz7FHX4gVNH24dgoy6Hxpocf1qfm82q93FxVHBDaGKpLEWzWjn4YcEHMnCUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhsBwVgGkKBXu1HFD1N7VbjKxJ78uacrVvDXibcC6htjJcnzCkxqmJbMJuMf8fkJnhANzuhs75ED6igsAr1aUtd",
  "key1": "5o4JN6RY1jMMWYmmPuTytTJAyY7bp7haThD9BAtmVGk5bNdxVtfuPqG7RMx8mgnUqY59cucCt9doE3fFTHiMbGJN",
  "key2": "24UkfFUCzZH1sVtNVZ98nyc7wwCMm8ferjKcDdF7f1fbdsTLyTWuDaEPeBJDEPHtKx2LjVGQWFfCkdLhj5qg48AN",
  "key3": "5NfhWAhM93pzFVXWW8iDT76YgDuP5odVrZ3ZwZJzbPgcLCFnyW2LXWA3dSsLsazxTv9X3S8BUZGjjVctkFHE2sLL",
  "key4": "2LYoWvXvY3e8rZaqF4RJ2Synz2UKXXrvJ8r3MXZqx7Bz7YNi1LFNsXjT1K1AgcxACCTpP3yTZuztP96cFVngLUY5",
  "key5": "2jYBqDCwtpADpatjNsQk2BUtu7PSLJqSHuTx7yUTNzpNF6h4N9NYfo31Av9zzPJQ1uJJpfTJrjeAi7SCPYSo8oyP",
  "key6": "2ZsYnHdoJsZNu59i5ueQkKsKt1vj14MmK7vWoqvJ6bpPNWzsdaqKCDHsnNg3cTgvzQtn63U8RG64WyQXn7W6deqq",
  "key7": "4ru6gvqW44tkf17yq1XNQyucRD1udutHeaUSWdA78B7Zjm1gpgLwWxcAEem7QYn1FB93BGUx1h9w4wnxEzaCKZFQ",
  "key8": "jKjoK6WVJmEgJoFA8xAyN1MxQHnKy473rF85Dq3Bfpyc46HfBWAGKnB8ZogYwpYZhuw2MXRKJAYxkheqkFqhgy7",
  "key9": "5frwFh9jkjfLjao2CyY2KpSUG7xcrabjpkvCAds6UTvSttizKvn3BR8sdMqvVHpuHRNHY4d4GE3NCkfB2fvGbXA7",
  "key10": "5znbzzwEuNgD95eJpXK2EbeETRomubKaK5mg6iXwJ9HwK9tVjhC913GWdFVwzQrTj3MdHqEPydf771dLwrWWYyzi",
  "key11": "2rP5XM4T7mJ6Qf6jS8sCtddGD2tcBAihyvM7m81D3wZocyiJZKWQJTmE9iAhYPgFA9DBGzJ51R3fVoo1Fhkejmsw",
  "key12": "b8x6RP1ukv2WDU9KBVzRz1zScP494Q1M7cV9p2hpmUtYhX5JgbseDFAvJ9MfH3LFBxFpzkQ9kvub9FEsMpbRbWZ",
  "key13": "4rQyWRzanQazeoMwMk7P7UtNxxHznAsYLr9jNafmMeU9WmL2JbNnmar82ruopE2XQ5SMFiCmQ9gsgz3eF2yc7HXY",
  "key14": "Ho2m4PYh9aoi3XPXjQJzBfhyhFkoU8FGPpC9BZ8eoouoEGwC1LjDvxdQD3qRuQw98xuM29esMAJsxY2kixcKDKF",
  "key15": "2Q5pvtmuD6ERnJePedMqftCxA2XqN1n7Rp3kDPDfgCNstWkP4GXPNpjtooEfCoUejR2nVLG2Hi7tZyh8ov4Surnf",
  "key16": "5eJi7Bm4q3sJPFJGoPnWmcnfQ7XwW1mwEB6YLPf8121LSjjPACYt7GGRvhzv7tCFnxN1XX3k5pR7cw96V7oB9HNS",
  "key17": "47eGP2mVFCizfAWa42RRm67nubTrmjW4Us6Pyfe2geHDAqrHXLj6bZ3NZgbQkX9YKuxFjJsMjuEd2Aw4iakNGnad",
  "key18": "5aXRoX2yaskEjqrfQuG8vfms4kavmHHXygX146XuifL92eeFSpGWnH97b2jfAhdGjSdbWRrCyJ68YvQfrwQA11Bw",
  "key19": "5jwqh5K9fEaNZisZFkzqtLaZ8YqJicFZoKU4XWaczqmpnckMSozXvbuvebsPAXWKDFPVKMzG5m89EYfHFUtweyQF",
  "key20": "3fqNg7X2P4w4Fb16vMBZXN4ggEyETRLtUY2GQqxWQwu7dVcCsDYWH6bxBm8K2Z2kJEfvdU4Pqm3Ji6qrdbjLZBas",
  "key21": "22VADkMEd1xVbbQkGsXShxC6Wy4HbUVvnYzGKkMFjREcX53x1WqWg7BTjEn1jS4H5jEXx4xaicei72ShPJEYnRRB",
  "key22": "4DsdvoJchb9tFs6sz9vMx9tQuXffwf7qUuevn4SwvJ4ytNCgbKxUHQmkRZc2vmv1Sw92VQXUYb4rSu98FaQAE1Bx",
  "key23": "5KDdepg3C7JszRfafJrx9trjDBsALLv4DjeCy6NC5MkNUcmPFAVKLGTCtNuBj4C9WwWFEZSrT9sVezv5RwDFHk9K",
  "key24": "3jVh4iAU7X8uVLxjt9eqmZhmX55pxS1eQnqcCTB1xLsBbkR9rZnGpCRzsujwYU8zaSjAcikUeLpXJeSJMB6opYDw",
  "key25": "2K3k8uhzoENhidEjeBWCYTtsw1ZiV44TmQ92sjKU4LMx8REomnpwVZnv3LAX9PaR2dbtmexbsn31UMYmM17T66R6",
  "key26": "4iMfwqjpVAxMvcHSipJhdP9N9iNBBxtaRqHWvZZmq4TztYpiW1B41L3TS16b41PTToRZchHdFhEAF9SjVSN1n5z8",
  "key27": "54VT4QCDUZwLJ49ExE7AUTL6Bn1zp27qn6HT9nbt1UbYz4uytMeMW9ACCn5G1HoitHrZHwJyhwZF47GGHQHpJzo1",
  "key28": "5LcoDRaGPSqkmqcBbEcttY4yszqy3BeFeu3JjVTuPDp4UK2L9uBcryFUwb7p7mQnbA6vTBgkGf6VAdkn2yngs18R",
  "key29": "2xN9HweFdgK9AQrtxLnrXfC6EEEUgEJg2h7VgjwYTceDeJNYWJ85SpPcZ6DDFFAy7zQTDu1pdR8UaqsYh7XLtyi8",
  "key30": "n5nmaVvU5vokcsUKBLwqfQ1R1fP3i6nvSnu6aHQNTVwt7khDFDTpBAdHYETvV3FGXuFtRGSwcKfmY53wXfZGBzf",
  "key31": "AKFCrGwKPtcNqm6eP4sDxyLPegi1ffrsNsffayT2K262Kx99nhfbZV58GLdNv3uA2kSVNmXH3U7EHELJndc97Gz",
  "key32": "2wpWMrrxWBtrkQS4YcbLabtrgTgb2tEFR1pN5huHoVaEHSpPzfkCkhRuoGKbfsRTHmDsf1QQ7LRynFFoVhQZW2Ts",
  "key33": "3piEUbpvihTA8SNpXVrJHPk9wn4uEtDNEjgDH2QbZ79dmpm8uHR5kUa3A2ehbt1KxXJXtmmG7u3TS9TgH7esy1ob",
  "key34": "Csab7ReGw49111x18ppzvkrM1GAv2e3D9bj98x48A3LvQC9mY61Vj76CX9wJGYPsiamqC6tauXxcmXfN3SiGz4s",
  "key35": "8uCwKegfexad8zWfCG3sGnZz2kf9TpfvvZuDU9rFhBPx4cbaLW7fvQNJi5aGktnLMGWipqdnvKXQxWLiNFXu9Bw",
  "key36": "JsefWnTMMQCZUTQjsKP2GPnwTpMBWiHyNwtCcwXNSebW1Ke6D4a2d3LqBEMLKJGZ9uhwQWdf5oKJBRFWsTGUVAg",
  "key37": "3MtctY3AqZvtFqe1m2qjXD2oXDdju2n2VA9aiCv39GbX8kuUgH8t41AzfJsQK48wyg3TrKRVQ7UCayMv2KfS3hXc",
  "key38": "gWzx4BuWzKBRKwUhpdXCjpgKyATJuFnc7u4B5K7g9Kk1eTftkfRbfRjD1hF9YNk6a8ANPrfz5mwJSTBbZ256but",
  "key39": "3EwV1fhfP37AkvP83J1LvBZaYGsoUXeAtC2aPf3RAZGNWqfaTBTVALMN2XHXjdhfhtg86oM5dvhhdTYuGp28w6JH",
  "key40": "23gVMWJMKZxi5ZwLvWKs2Gvkonevef591NmarWtD26xM7fB3FK8JFfAzXyJhKheffcjshfNyiDxM7qtyhY8PbQq9",
  "key41": "4Zaom8bknPZawM4YetKEHEkaKjeKAs37GtRDtc4c9JnaufBndUg7LxhxHPt6KV3krHPuktXFKi2EDe8n6V8LSz74",
  "key42": "661FaDuyCj4yg2f1xxQKWamKqkPSJhchSZPUnSfJSVYy3jXncLaj2LQEt627Lg2EToPoWLeofapvbrTnZg1pzLfr",
  "key43": "39sZXVVbibVLk5VCm2MLibfnHSyFFnEGxtuWMPp7d7QEWZgCSFrQaMyNrpxmevqYHJhkqok9LADcsnEWC8LVRqBK",
  "key44": "3Crf9REKjhHC8T8G1XqeJHFW1RQKPtk1NwBon35HSaKpGSep6XWwqBQWyj62dw6WhQd3T3DDkcBEPZghvjxvUeat"
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
