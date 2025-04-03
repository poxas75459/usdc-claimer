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
    "5piz98pivNCyGyf3cSRXgkBsm98CS18rcEV47aYR5e3kiSnrwZccVuj3ZLxo6KQkKUMv48mtTKEb9TFJfjJfv6Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGUFh2Ljcq9KqDiKHxdnuXGZVPB6sgwVdzyeZDEtna1u3WpwTKkeT1VsP35tX1ZJ52GK6pkRMW2zp6unGYeqRDE",
  "key1": "2k7ix4hxY9Zkru1xb3faUYzsNwwNuRvoEPDWQrmQoNci2o7nA2KyPrRkN1pt5Qjv9jEYMG2SEqdJAUCshyoWNBdh",
  "key2": "2gE3dzxLK8yD3HMDpLRAeENTyXcCfZDa1jsgVEYEhTv8wvr3D7XB4NmViFht6zm23B5NwPJyRLPjZv8VZ8SHW2rB",
  "key3": "4eiq89px9qe5hdianhFStC1zgZ6aE1jux9kHvUHWE9Cc5CAzFnVknVEaFfSCWZnjxY1h2ANDJHkPtPcdubQwdT4P",
  "key4": "2kbHkXT1i3P2KxcysKwVouikjgrfuVT6cfT5zCuWSQdSnxmYThdbdeQ2Kjv1SYBRQMCkwvxr6tvkjGMmNt1QFkpo",
  "key5": "Nt7WAoFdtWyyAxVYkSBERVAEePVEpkkACumHauB4sUi235keFsEx8var5NsPSwCsRsaB4UiBmtxKVyVkqHqsdyU",
  "key6": "2ktMAcWYkx7QGwjyLMRxkrrUpo8v9jgswBE8hbBZNeEP8eiBDYGC1L2YNPJtqp9Zwh1bbL2LKW5CxtsHPdMEGrzG",
  "key7": "54Zsp1wK6dyqw4T7GBAgabXZwAyPqVCQbrEJAyJwgUz5TrMCZTt2CA5rXSs3rjwZNtZJiXqjpHRkQqDnFTzEXuBB",
  "key8": "4iGLKWzh2qwcVEhFSugTeJXpyCtdABjFZ43NbEQy2v12tqQha2FKJxbVsPYc6yLejrWyMFms5X8JVC8aLGN9mY8k",
  "key9": "2LZgeCnW4fCkQrQdn8jdhN6xsmB8ESViVVx58q9unyAgMVanuBj9mmcBcn58wkDy8KanUEJd2KDQcPoJz2XmtsdZ",
  "key10": "2ZcukcDia3kw7RLeBjT73N4zqfcsYzLMoHEgMBTaverQgCkmAyCbTWcVNMEkC4DH1yoTDQ1jsXhYfzgP1ZDMvuWf",
  "key11": "4nsW7qfor5E32Wkyd5zpzuLveZJ36eXY39c5KzZCvnFRbfiwtbgaEcpYsNjAdbhusAVxqHq4WWAwRSDVRXhFCMQD",
  "key12": "wpq2bWJPkwwzhMKj2YthstnfNdxvDw8A92tXZCBvMBoExDri2C9n74QytAAtX994mUY7zgvPHnf4wyAV6c2HByy",
  "key13": "9XQo5CwVXWiYxvRxcZZh1U8nXJdAyU96WYUK26AaypgNoUXP9pp1enE3JP58ADk7qQMGoNY31b8EdaFEYwNmnrd",
  "key14": "2PUH7KAU1MSjmQoKEkkYzchHDi9XN47eszKfL5bir9dvAdBHFFppuCy3xtaikk9GbQwhhSjH8nastx2dqN9qM1Fy",
  "key15": "3NzztN2KrERUhuDSv64Lnn9xbmjPXhLozHfWEMkqWLumNG3Rua56Bane1bdXzpRgiLrNxohcXxrMyvWbTk7QRLms",
  "key16": "57k4nUCncwxe9SWmZ8ZftSSNmFFdLtcP9XLUWkF2m6WBoxJBLobzEUJxjQkwXtaThKQPe6PLdFyWJvzBehbuwzZj",
  "key17": "9wSYSHjYG2JZjXrofwrUeaAWsi4r8JcDrC21AQkZX5n3cSt6vGfyQf1p8wqqLt8sNff191H4cfTrHcjpR4qqJnE",
  "key18": "uguKzRgm2TS3p66ZDh5T2S1ZeXiwNuwnri6SgjQJFgogxNUuixjEf9z9JiUSwGUwdQRWxi1SSFVNFQRvagV3KFz",
  "key19": "59K6w3QtBvg7Y8LbiXWgqqEKvM9PJQC9FRcCcN4h8y9jKBN7Y79roqc1WgP6b6cjv4Zsn1BCunEMVMKxvxvTjGpW",
  "key20": "5VptTzEbVRaK5MihVqiiRnqwm6stB2hm87C56Ung9WQTZu97hQoLcunVt2H95nmhwQ2MJk6XzYcxz6ztNf4KdjRF",
  "key21": "3bcEREuTxEUK3hdkkuvT1TaXhQ9sN2dQdVJEUuuxoxEJb4EXsj2iH39mRHF9NWA5QrpnUJtVYRRbiqBfabtwARkv",
  "key22": "2TpchrxL8GWJG3sdBLa9tNKEiVdFNnsRz47Qk3kqPeiZ137nwcRmtDhaRbcm5EEpyshEk59yVvh2SvZwmCdjEmEw",
  "key23": "iYtjVaqJk5Qu68MATbuAVJT3wDwvQHvyPwUybqJZT79vL7ARRYy8PQ9Nn6FHwGk9B2ou44G1GQkC79Tv1eKrYgU",
  "key24": "3JAYxisuWrajZQtgUQB1YrCjdKgsFpdVJUU3RPcvhgtCEtikwP6rYQtvnC9p2vBXvpZ5K2j5iWfyEV1k42S5nxeg",
  "key25": "4dsMVUexpERNLZnHGZwwopVUUHczGMNivdHazHDGjcYX2Zmtc2nGNFPKKiWuQtZrdJN2TjtkxjzJCHVPXfZbUPLo",
  "key26": "4JuaV7hK6UHPncHyFNySGtUh5pWcpzhpQwJboiwdQw4X89RXEGhrJX7r5TwpYbj9f8dyaV3K3hPSz5Uci4cXQyjq",
  "key27": "5CQ3i7ht9rRwTZ5uhX5Mp81fjr12wjaK8NS23BABsvoDRf4xqP6kLYL2ZuVS5WD698kSba5senUL5QgHi41VG5QK",
  "key28": "4xkAGUfcWbrcfmQsj15NoMxEKzmL8iJmvptLmJjVdTjZjcr5Tg8d81i2f9Rj5vatcWu4UTz4UtXf38yX8ZuDYEcE",
  "key29": "zGhuXxaDG6TNP49HutUD1LPrNjhbCtraMbwXti6rCRAeX8Bq1SqZmcknjmggvd4mGzmUjdf9Gosn8B5wrw5QWhz",
  "key30": "jsXeEB6wuWhECkdPZGzs7a3RtK2CNYuhxWUkd7WpTXw8gCNfdTAQZs3JvyWRXBZ6x7tohxLosGugDgtkHQKcEK7",
  "key31": "4jnhjJAQdwkrgaP3wXRCuQxHGe7jGZM1aTfwAPq7FsxtdiSkFrt2p71htcDMtoYMnYJLERrZCTGpEiuNEg27bsEa",
  "key32": "FLtGswYNtWd8C8TJ4TGWrT58t5p1Ct9326d1p77kzRgYi6WkJvFqpknz1RYfjE1SvDK6K1bsbziX9nB9iFSdqVH",
  "key33": "5DCnmj5zSxfrFNR5sRRwQ3Zuzqvgkf5JiLVTpWJLtLKsE6jMmn8S8RJoj1nupc2oVjLzEMpiXLVVRF9pFKHTcArc",
  "key34": "ZxcYYyhCvGWHnks1gHZsbGyVMr2W3vA1pqMxre3KUnbFpV5JsSuxUePD9ywjfSYoHrLkTuVFE73ni2nhfJtdf2r",
  "key35": "3JuCBriS4xAuLb2CDzogtVwT4zAZJLUMJHKFY91kzWhv1ons7z1yScBHQ4PW1jmfLcaHtZssTcGdbJ6YocXjEz4j",
  "key36": "pgtH1nKZESEa6Xe8Qq1XWxnfD43exjSNpyXBw9tf9m39RDcvTUot4WmXF67RvHEJWxNmvEsHQAdsGnwtAJbcEbR",
  "key37": "2P3h1JTvS4oetsQxAcwnmWGzV8ncojYySbV5mWCiKbPnhqTuDF7c1W66sGhxKKUMQncaNGqLXgax4wBD2naDXbzT",
  "key38": "2cUURHwU2gKcCeebReduSnf972aFJbgQheKna5k9TsgEZ2udzpDNxn9rAnp7LDTPRBksvJCtTck7Mg26839G96xM",
  "key39": "2jCuERcekx4WFPV7N3tppqJPfYmhcUQ4d1RACfH8Hb8PfnXzumt2wH1xfh8VQefBYjRRF5JzsH2AANScg3SPhB7U",
  "key40": "7V8rLcTAoDcoioMExmwtpmT2EBNeFDW9RiU7TsEnGpmzNGcRnzDyK8RZ1pfoATw74rgaeaLa82xHyKCe395tQXy",
  "key41": "4Uyqc8UVDMKt1KM1qPFc8qREDp4tuhNt341miz8cdpjZVMCCWy4LRAieBFiP8VjBNRJhwfBcVbAuDGzCVm9csdAh",
  "key42": "28zuRKKR7rVDksJ8FiPmKXe7rW6wWBozFZ757AiS6kYCdeh387rbob7S2iLFWBQwHBepmKxmvcoHw6uJH54eSLW2",
  "key43": "izZGL3rKCJdW7f2Khj1c2LnxmStRRNmF64GQ4sR7pu8X7RGqPPneRi5xfkvKsEHWkLwRbiMWBCmKKHP6zaGDBi4",
  "key44": "59joJHjtW5ayemJFEgznx31tPE9cj1X5u15GNX9cGSMjapfDJeigMxjJ5T19aUW9i3KWUdsXZkwqP5zpzhLgPQdn",
  "key45": "5kcdCWDWMKb8z5Bq1AyeYcF5f8UVQGU8mVYm5cQYiWbJbnpK3CbVpWPsfGaNUgNLLuY7yThcbFCcuihBJyg6fb5D",
  "key46": "5WrniUgQtELRxuZjS5fzTG9MxsRcCZYYcyyBc1h4jZi2A4f9AFctW8NJW7FF8Smkud3wdZS61BotVqnLMULDwVib"
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
