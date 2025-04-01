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
    "5wzAQ863PgoJakcvK1UH9LYBixGZww7jEX4yJtFxHYd5d7x14qdJvX3BBA1vDgwM1oZgZnZuqvX6RpowpfBEje9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nu6A71KusAmjKs9YgfuCcjL4ZB59zfrnxr85bHsPNjfPG5jrMWz6N5ZcS6mqAq9PQUdxyLtBQhUGvkxgDwWfxib",
  "key1": "XEEaL5DHbng5Azy7LVnsxgfSaC2aBGTheLVxcCe9XEUw5o5wM2aMt6LocJQJjafMeBxh3q8SjTJ1kvbKb7Un4qn",
  "key2": "3K4u5GcRwdrdfhWhhncwpzFh9nMfd5Ls5iUG5sPkjUxSH4Lk4WKqKpC7veP19UAyXmWUPxEXTMLpJRRuuYqsjFB4",
  "key3": "2rvAw2UJTk9AvXKVW3W9Ye26fZY9hB7zTn8xmgsS7MPKbqjrtGAo7hxbEForBMGm5crdxsGjvTpndcUCEtAUaADQ",
  "key4": "4kDm3kY7hz5aGnNZ2aP4N6H4UH6xLVywjsn8aqrGKmAoaticE51t9VB1rJTMfiyoyN9BkBe9EiUc3mP1HPBm4idG",
  "key5": "Abffy9JakALGp7rqpBkvdyLn6wv6ik6RR4iACHbXi4cGhD75twQCpaTMagBQmK13e1wSNntTKCYheuRwjwrZTzN",
  "key6": "5J5rLYcvbwZ6cM8T49wDtjUajVzyuCNQ6xiaAkBNbpzDM8rL3s5mXFPanaEA97LZpsbUCM4ANparoQ1e3PJh51YT",
  "key7": "33eszX43Rv3PFgWovStQGVazWWCp2j5Bj36iE8EBgAhtc4o77ZYHMR3CJoDMcWX9qwxD6hKafzzdgZzcr71WKe63",
  "key8": "3y6BmRz5gzz1EBzwZipzEB957DHHvZzfEDhWdhVfSkzhBKrMNdELjqGqLHkyviTuC1v5Qmz4qFPVkzoBYgnLfPGG",
  "key9": "EdUBVjHM7QgcYqPuyNafda7exq4romQkTuiJYkajCRh67cJZTyQvQXz9q1McG5G7US5oPFUMUDLMT6Cz3s1Y2Wp",
  "key10": "4gRj2fbVRe1yRfFmscA25QjV3kZSkDcZmW7h221Dx4ikyf5VSadpcXKj5SnkEmyc1wsYafHRfeMAm7ZXi57pFicu",
  "key11": "2sQcU1yNAcoWpkMGaHWSz89pfLJBWkeaYWSLcs6ZxniQP96gwXi6ZiywPrW51zsnWZ7eEXfuFvkP3L8FmbFrx8yD",
  "key12": "4Hkj16RczSP1AarikfFpiwZSRQndYz3PoM64ecNd8vibirHKnfZvchbfmNrPeJaErRLSSrLNDbFJcZMrj22J7x6X",
  "key13": "zf7HAYy8kGq799wUSecXAudArjR3GA7EH1r5CJxwKikAKW2BRgswennzFEFC82TiaS5eVqcxuxBLPdk3ZmAz7Gj",
  "key14": "3JciVcxgkNmdGmrtA5TuVFdkTkUMJxFz2oBSLR1eWNziBkS9tWXf6WUtSH1SEbS2VPJRBjEpcNxhuEKYDTgtDeyo",
  "key15": "2aNgJAFNYkvvWf9z3XKWJujfrS8jnfQMUjDcou1eh6rq2HNvttt93NgZpZWgZBcuWwSCJYch3tSEaACNCWnH7ivj",
  "key16": "JrZQ8yVZAqCZH5WHA8GTwYpcgoEgntn99Y7vp6L9i2yecfj3CUFM1Saj1NTjeavTkPqw5UuJ5AQxpzt9ydt2ixv",
  "key17": "5dShJ8FivjUrNianR1a4MvyCWQwyKtdvoEZpkojifVToruXa7x2LMifq7Uvcd2WakPPQ4MxDrejF9SvKCCiLG6fQ",
  "key18": "5Ywbgi3VjuHEuaXzhEfLoU5djUPNdgXc19q5ZMGLFNBnDQseygFHrEBWJczvrsRGhY7cN2ZeApxUMJUPiKMLWZoi",
  "key19": "4Nf3rieBTH2dRRMjNC6VKoAQMAAKijHFjcLBWLFusq9TRodhPDeY3jhJYzFEyvURXJCN3PnjDDpExStTgqtp1vW8",
  "key20": "33uWdQ4sUE6tAFF212pfaSnoDuKg26wSU6u5U7ykEn1AxXARe3AYi6FofViAFXdcrqZE7hunggh3KKZHBF5Kew3H",
  "key21": "TDRwWGiJ6FkH4odti96xkvk5MNSfxTnjeqRngx6ukjMvo5AqiHXGCgaNRmuHYENyP6airLGUDgiLngaSahLtp4s",
  "key22": "28bESQJ2YKs4aLUDjnTPpQLyhWh6nFfV9kkaZuc2roCtHpSMRU9CkafNZYfNrkmZS94hch4io9WUEeUCkZjE1asR",
  "key23": "4T8pGpgxzPQZoFXjsVN3MDWVTCWSsUWcQozwqLvAhFybyk9fdm75TzU1gtQ9TRTKEfg3L53Z7Yv9r1xMEX4MohDS",
  "key24": "2sfU36sV9QTJswKrBs5faBSPD17xcJYp8MSEZWX4AepTw59QG7eiMf59wcie1Ya3Lbr5uYH7yeeTvJWVJ5ycADPX",
  "key25": "3HTVh16Wzfy1HSNk2AMfoWag7UZR4eys6fvYPnMtGyXzV5tu8oH44Hz2e9DAWHqfjsdA43m6MULAhpuAwBtsuKmC",
  "key26": "2nDe859amP4xtaNx1ByYV2TFY6jQT6qahcrhoMy2mG7V6Zk9xDsA2gkWVw4H5hsxwg8W6mK3kJrapy2pgtQ4dU8X",
  "key27": "54gnTKYekKzWiyCNP8QqQn6i456rmYaZGucvJfSEDiLW4zUJ3BEQQERLt2Ar49KKoCkDcgiJLchD51L67aTBLgnz",
  "key28": "64ezQ76pnf11Z3Zai6ohCLsfMirtHdbkfE9qJYyN9JTWKfcEX6TmRWmF2XgMXCLxhnW5aP2XE6ESbAJGgsEbaSZW",
  "key29": "28wdk1LRQ9LGXAN7yo6fRKvEh4RJKvTkDDbhkNi2Qo2u4SRmSTecZ5fMJFv4q1jjTKTtaxZJeHZnDp8T6xnM9zXy",
  "key30": "4iaMRCWH7cCj6vTyqT7qn4AYaroKhGLV4Aog3FCApE8ytB9QehCkT5L8VVAazqyd2hC1FPUZPjzBRWZMVskvd3bJ",
  "key31": "2c3A2geTHYnB7tkxieBdjSVU4NFNv9D9TU1653HsgBzgs5bpxJGKXF1fuz6DnWq2gXJSayigP3CqCrkkq12fYzjY",
  "key32": "bQmd2e5TJsHjvqy6JEu7wynhGpPbtBm5aaV6iJPr3Ec6UK5Kvk8npYQMLQXPFjmhKMzszxarmEYFY5Lv7rMcMy2",
  "key33": "RVFUPNDM3FGHa3ZnzA16yp8uxC4DkBdTe1JvLUrEPnUMKrSQwTJQBgf1XTnkf4u2vPks8sjaNcuhJKbDZcosEuD",
  "key34": "43Eoiab9G6m1QaiHVJUCg9jyjLCXB16QPN8tbESDgG2Ln5eeHqQL7gFX3VGVjVo6D1XecrEymxcshNGuRmkQP3Sn",
  "key35": "e3j8sSnY5mosB3iRe617X7S7Mc7jgrgifg74u8ERMMc9A61vW1SuuvgqCgsP8oXc5kn4HEmeUmu2P1C6RJiDm7F",
  "key36": "4JHgn8VP9A3Hv7nyfqLQ2YShqxD7mNcmxfzCcGoxmAoX6dB7HdogkK2YN4w8KsZ2yrBSdm3dBPkxsX6HZWuZyHjf",
  "key37": "58T1cynEkDL2oFJyeLMRxjZLLv5KsTyUjn2p77AykQpUPaxgg9Lf8mRCCWfPXGP8Eg1jnjeixEqewNockXZtjctR",
  "key38": "4JWqf4nSi2MrDV9xC9NfadntLmjdgxoAhjkh7JQsufFrzuDQ11XnqkU6q7ND8YGnr1bGZFfUTQEL6NCR7AC3aSk4",
  "key39": "4g1MHvGnKsugw9G2Ugica6frEo79UFjDAFstfXxG2BV46o5BWaSe1vmQJm5QH2zEAu1V3LBoEMgbuG4ghFouSovJ",
  "key40": "4beZotQiMV49qaKkvS7b9Vu3e2grJgn1N3YYDWE1rjrRB48YnCaDoNFpM61HAL6v62R4PV4p1wMe5SgQMBw4Tcz9",
  "key41": "48wrkdDyHtJS2M19296ZAYN271xPv21qv2hG33MiNmV313t8NCrkQxRMf12KVNQeEtbeZMb1ijppucn8xgyWfAVY",
  "key42": "4gGP53gYKWRHC1r7riiQscJZcwSZ9FrmKxwR58G3cXFFLT7kw1MyCidNkr11eUGTtthbpFvXRbY8LpTECs9HU9mj",
  "key43": "5gupCgJYKtkGaRrPGzDbN5UEWywZuk6otAKdwhXgdrdzkXozkevjmBX54Eck3yccp3kJ9fWrffn5yt5frwjujmQd",
  "key44": "JYcmmkAgRwhz1MqZ9ZZEmSkZbyHRsHLbGdU96bKP8fAGvFWsexXHjLDXd8RECN8xVmTPyDKMqruWTHPmdzYDYHB",
  "key45": "3EWF4SmZdw3Ah19LxUZc8v8Bh1BXvaVcVbyMaHPobwPTyaFoLNCXvetUKy3fv9rFhLqZRpnD1tUJSuy1XCZZbQHj",
  "key46": "D5B2YoDC4WWdxrVXMWuvjAkL4tTpMN8M9ajRQyCXtL3eqW4QT3aSWQb8QwQfdkn3ARzTgaSS6AQeF9eec8zPPFk",
  "key47": "3sa8JDF4chyPqdnNhiNLCSLTKDzryNSW6EPz4QJjSS93Ubu2qMkAJZhKvuxu6auMr5MmjA7cnRcW66SQQjGURhsN"
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
