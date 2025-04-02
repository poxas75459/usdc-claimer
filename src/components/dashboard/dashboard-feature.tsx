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
    "3LC1kuwr8Yh94Egs79ZoQTwwU4csJxYDSadeoNsKtmUr8gEo6A4LEvovWydiuXfSNxTUgP2xUo2mKGJCowXPriEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rmPN3UeuaE6YNLeuUgZRZBxFv2Y4GTHJ4PDSAaydQkxHtueucCHyNNFBwY3cU8AxkubMQcgijk34X51h7vYa6y",
  "key1": "3tehU9HxhSc4pGe8hcxHnLUrzVyj4jD9iNKMeRuAvm1Q4J81Ycy59rWPenFscC527kfYRKsZWqkTxhhSkVw5csWz",
  "key2": "Nx89QtcpDDXSvQUx4JbdsL3NBwimH5gXtfZ11yhDK3LMX9ctRhvDMerqoquAcwQBT3PfakMCoS48q1uAe74wAyP",
  "key3": "3TmGwSLdebobFF1b2YJ4HjrbRMADJ3e1Qy9ejbZzt6kkBNDC6NKomouYuXxF2yQcHXrTJK17g5DeiaE8vnSF457m",
  "key4": "2uo6VvcEievVmC68HpVzRX5FtqoxmCY9jo9zUJ48iqYvFSF74XfJhmqKWDeoNk4tfpr6ysPrkwvozfm7PaPAPba3",
  "key5": "2PRpsuhf7qEGQukpmFXtqUBqJCDkjtJ6ijqf226DUm8HgNnUYzKfH9c6wpwmjJnXurdwbk3RioFiBQxSyUJmpWDt",
  "key6": "3JZ8pA2TjcpQgFQbXRrKXE33mEuwTGJECqpKR8HKahicjjmbaHMwdzheroYzMy416rPLbNpjRvps7Jhbz6B44jPi",
  "key7": "2P5j8UdSMqKqrqHsbNoUH5qF5nWpkzG1L3HtxJfn5v8rbZAegbAw8kW4GZnix98EA7MVJKYqiXRdLQuAP4x9xgWs",
  "key8": "2HEXtko94BABa5HbViz659qE1zPQjZpxEwUnUbHYBUbmbiA9qCLCcee5yikASrhToudqwqFbsJbDD9x6cJAzTV5j",
  "key9": "5hnAqGSkGsZmPbKLDESxHS76VaxKMbXMeLrcY49KUyn5ziorejTq1BKz5niURN7NncdiP9rF95ijYRAGTjLBBZBm",
  "key10": "2hKiHxkidv2fjfEx21B2PjQt63eUx1CEyANfQrPCBYPJbNHW3iP4M47tUUCnQjFohcxxkpmAStpDEVZaveH2wuQ7",
  "key11": "51miDGF5MzEizibnGX34hBfan19V8LKddBDdUyaffH45EAsbX5p3bRf9eALwSeiYhxpgWsiYMNjRgtdKPsYAVVKB",
  "key12": "3hv7nh7kNv8aSUKxDkjeKCoiRJwk7Snm5WDfdciQ5fH5SjUFtQu4sYVtGWaca34ohEvnAo9aAAghxsSPRkQaLPGS",
  "key13": "3e917ae3kehUDmccCQmgYaF2cKaJDvD7K8NFZs4oCnXxP1uGNejZRNcGwFjqmwFkDNccBBDWcCwS3zVYPeAGQQYQ",
  "key14": "2PdLoKbBijbSzxWBNpYrLdFR2D1kinNZscyvcN9WKr8kwRr9uJRZNRcV5s6YfoUfwhakAVXcEbvL2BKSV6zxV44r",
  "key15": "5RuC7QJ42quvSxjAwK5VD1qjkLqeLTd4TT6JhNfkA4n7Sr1ppu9Dsrfd7cYuNon9fM1TF16zcSQpboPrsd5nofKH",
  "key16": "2AySdQBqCueVusSQywWsTRhZuMY7NEfmpH67ZE5rKMtu23HYc21DyNQ63i6EUF4FHCwCAsTGXubxTsHfLV7kXj6L",
  "key17": "b9xmHFb1qzp1v6QAViBxapHbTFDpHKC7tLG7hWqB62Fwq7Aw6qdW1nNWVrqdjyGxMJ7f7KabR2xmUKFLtSJmGay",
  "key18": "2pLvXNvxufP3vf7bEhyuGmdC1b6o1yeWpc6wMQ4k9h8DseWRcdgMHk3gANigLfEf9QLtp6goWYqDGA3zPxUQbncE",
  "key19": "4NRfYvxw7Xhic1VeyLGzWJsXAEHoBQMRS4QGHkoVNaBFYaJfVeW7A78NBdrKZr3Us5EsVLKQ1SHWAJT8dgXtUmLq",
  "key20": "4iUDBYmT5EFaUqx5gJn2CCX5pDqVTf1oSX3txu69YAUHQUGsaJU5zaJoYg4m6HcxDvc1nF6WgReqxrDSXjKMCxsn",
  "key21": "32JRK6bkZwMgjtumGdzbNh1r8NcHyzVYN627sW4EWE3wKc9WxzAawDbnqX6XDTR1zmb4QS6jxNQnNAApiPo7Acgh",
  "key22": "5pbuFLaJ9PYgnREqXYCfNnrsgP9pi9jbThn3M7yNcMFkDnCUH893EuKPcC9E6Ep4DJvc5DfnqSYHCWEGxR5DDU7c",
  "key23": "2wprwwyQFxu2m2N7KEfGaMxAtJHLCNxJXL4RkLodqptsBmttBtdCNchbGT36jUnrfyG2Td22NWLJXXDE8iu1U559",
  "key24": "3BQ6gEJnUhMkUC3FSVvGuth7SWnyC3C8yPk9rZgF67coePNW8amADoDT1TvPgaiTZNNXMEKe21rtejaC5SLy6fkn",
  "key25": "5JYmb2NMNey7AuVvaH6vFPAEZfmbN1rNYcE5Cr5G68cM94PAPJT8tNSNktNfA9c87EXwHXse5ePe2wkZcKAUc1Bv",
  "key26": "5gU3SNeZqqxGYXRgQftEBwGZrQEyurJSw9CfQmW5eANJZy1EnWJ6WMtk6ehDs2euAtk3gvuCnWcgMhQd5mSR3oBZ",
  "key27": "3mRK1Cphe8xiPwy9QyCLx8fZ7Dkt5ZM9e2yduLmxc4Va9WKo9UbMtYhUZTx1A5kmW6WMrZRjvW9axiMSEanG4pXA",
  "key28": "5QHX8g78Sk1mB7YTMcsJUWh17eevRH7zNHMdzyusmpUbrmf8TqRyFUGY1gj6UYk34BDvcYoR23TykoMMQphBmMbR",
  "key29": "5DFfrkUoKz1NcEFSTkKzdZtvWgAQJcZYYrkUb6osvfgD43zFYjCY8XFzvkK95WN6xc1AF81v7svMfwm25VeAjY8c",
  "key30": "4jNLJmiHH5cF1KoBGLC5iseEoX4i2dEXRFahm8XpDmHA85Cpk1hYHMf3eGjZos1EKbBkMy5QQHxDDenzn8bVvjtX",
  "key31": "5KpUgBResNu1Hgzkxrz8jayq4iTBYkwyxK2ztwSgjeUWfnHXNLMiMW92AY1nG6R8Vr1X84QQmBTGv2gJDRFbsiXi",
  "key32": "53KoAuJ7y2znBx793Hv4mTWBRe3Jrz5AjiVH6Ws9pSQ1Jnt6d4D9cwNebgbkPv5CJE9ZeCUHXiH7FBaAXusGdRBh",
  "key33": "4vxzb45HHpFVSA6emHk1NaQBLqj62sBNyAePS52R1JxFWNT2qbthMtyrtAqB8p781hZfXce7ea9pWmLHZfoCbDSa",
  "key34": "NKXefQfp7cSbzeq6Pjgtx67TCe8yrQG2buTtECWdqS1nWQSLruDGodod47BvJnBERvsMgVnF13WApQYsX18uu7f",
  "key35": "2USfZ42PjsVxHN4LyPBzimE3QeRLSjbDVFV7TJQ2tHyo1fkSfBHtRwWSKtDzGBhsDhFRuVUPSf5q4UZwhXUD7Dh1",
  "key36": "DPoQcRvbGwBfyz8xFyUwoYheob4BN9b2G44gdndbV2BzVLD2XVq3QHYZECkutMaUkb8JWgjxvVigi7Du38aQ2Tc",
  "key37": "3Erxthw2UhqzEXaX6UsZrN3FGbtdQuyzxRKrT5ZmXUgtSyaVEQ7SHHqWjP9QKmWMS6Vmr3oRNNSEXioFP1RFuxTx",
  "key38": "4W8N8X92nm28wwjnQFTPTRD4CEsZGPohahKwWLiTz61cRfQG6GcXT99kWjGZAFy6GkUVTpQZrE53tKaZ3z6szUZA",
  "key39": "28qG7PLuYeNrQ7TeNAokfBAdgizZA6CAGn6enBtrSKtmTFYbXHy83BNaa7FwoTWgZXcndKpSev6sv3NWb8xmyQE4",
  "key40": "3LBKo1XAkSHLrB6g9bqdGBGpK3EzMQQohzA3p9GrAQnchBCSCmut9KTMjoxTJGHUa1EkyQK12cKLr2jJDphti4Zj",
  "key41": "3DqeksckDLL1RmSBXdvPUZxY2AKueRZxo8s83UVJJN4kqXDnuSiXMLfKRmBNFYoQZiXFSchcHoQiCRFAFqLvBBf4",
  "key42": "21pWkuDKX1UXXfST1wf8sJnqooinBBsUYNaKzmuUwUpgQUdUYxPcY4KAKbHk3Pt7TB4S2Rjomm1DKr4TjorNj3VJ",
  "key43": "5voeVRS1GDGfZtKJrAstTWwK1mHbdyc11b3ZycbfP67m7kvf12RbzcvMAXQiTFuKFPFKLb1hxQfksRMbDQhTxiK4",
  "key44": "23fNyaWZPD7HkSeNgDuhGuT4SsWe6xNUJLZmiUAf61phAjVhj6KRwQLx9cB1qi8mQwiixqW6rx1AmovHicuVB9FV",
  "key45": "QxFAzGmwj3nfv8di89JoxF55G6hWvdYBwXTN3cpeMeGYT1GjiEiF89RgoXnYvtja4JrTp7V7wgRJDKHt3zwwbNY"
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
