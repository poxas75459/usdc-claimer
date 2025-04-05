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
    "JmWK5indn2QdSxtqcmQbbDtzitie4y2y7PQuNFhi2JfC5JLPgbRPRBsbGpzazT97fcL2DaFxwzXhA3K4zpix3Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgGdixstNqVeyt4r7DWzvk3eEXCBRKhgtwDPCuK6zZPXbb2TZTmV7uiEFanZFzwz4hgFQ99DduSHMcVFXrxKKTJ",
  "key1": "3fob7ymcP9GYEfx5wQKBk8rNMubcnxbkM3BGT3mHo5b7o31PQ2j43DfUJD5urQVBMQPiPBwAya97k5zThJMXvrZU",
  "key2": "3qE9Nc9rfCe8spALN2FoKAaXDVngUDMppRxkyArrCr7NcNndL8st2eNjb5pCzF62g7E2veX7651yJTwJo3tsauVr",
  "key3": "4HgwkPKRzrgjvJbYeKuTmEkVoZKjzB9uFeiKLmYuUXB4gdGBRpGyvj3jXWNhBTtNP3zdMyfC54fAxX1yMWoh1YHy",
  "key4": "4faY1TwhETh3pB3VPFHs8KqvTuuC187jRpkc7F64SjGcwXL5ry6RgPugB2V8ruZyfq7FLMkc1WKv17TPsa7hUYgb",
  "key5": "4vgwsRaG5NpgGMCpEZp2eLMPrPudN4Q83LJHGir3kJCJuJsXTw9u6DwcwgsTuv7QipwTx6gEE4RX9yn3V8TgSaMk",
  "key6": "4SCwgTYspMStVUGTv2NHWih3HCxdP3sM1kVEE18cyWDsFqrxBodmynQsfK7esNP37i2C2uLtDcwmnHduwKJ7KKSb",
  "key7": "4R4fHKvcgAEXFHCvgnMvCjcbj7HgG44wh32EpR6fDyWDcjJZEY2LNrP66ZL7iQxnGMkj4XvqWwGPtPcjxfvJP1ZC",
  "key8": "3UcZxo2YLKQFMctjaCMER8iRL5pvsXmodJqi9zsdaSjcLgUzHQ6LGqKcswXXSFuxcACGJszzuu4LMREbknwxJ2XN",
  "key9": "4QUmGxuS7HwwoYmdjgGsyFiQKwcHLm7XgwKPGF3zU8k3WuzAXukUhB5d2JVsJ2AtVoPULoKSgeVrQJhT7YnNaxzi",
  "key10": "z5VM3DoX4eUvrVzqgZ34pvekJMhAX2KxDrbWC2EC6CSzbCk7w4rn5VjEZ7RgLDtPGyUcyZQmaBtgzhWhNF3k2hN",
  "key11": "qJXUgCvn4VZKQoe83H1d5KZvcNf284UzDQKuCjPrAU5eNYdktUniGJTZhc8VeebwyZvJzhJc66EqH86xqQm3sd9",
  "key12": "2skz7P5i8H8V9bUY2fKU5VZr7WbVyqwecZCKEnqhgkgixLcf7CztMCBD1iMm1JkfPpLtWH8g67S7qu4mxLxBMJGM",
  "key13": "2FB9JFBt9rLD66rwQ9v5vQ1SA53HJyRYg2L4TMm6CQpSk8V6B3nzz6uvFzpvD18aAH5XekNM9bNrmwqnSfKDAqb",
  "key14": "4fndVeSVqFZN3XGqQH7ZH2BK1ehNUQ4UomEzihYsk4LHp4qDL6Vfsp42ezmNmYGtkEGTHg7mJu7FKE9BgDzQ65c3",
  "key15": "5M9wiKKTkLRPneQQqoGteMshHL8PsyTCauAYPWRjHcv9CJVApFNoPBEfascpWmVPdF911M4cbkRPghGpF5pK213M",
  "key16": "1wgM6BLQcjx5jZNG6AqGyhHucWBE8RBdu5qbPKdMuXar3xtSUAQAPKVJW15EhVXFzWSf48Kcbj43zvqQRtxK8La",
  "key17": "2Berksw6XUaT91ymYRSnYhMU3cct87YLMjPBX9bhrFqr5NMzR8MXtMxfJuiPHKUPsju67EW32waEPHzTMJ78Ucri",
  "key18": "4y51rmcZwmnjdFmXZTfWyTP8v8F7hwNrQNYaY7njScmJ9oSFi7o1c2ZvtJGFMnfrGR932598wDguUpiPWbgMiHoj",
  "key19": "2jWfBNCaTXnof9vtWA49ZkiekA4CatDGe8beTQXP61EZs2FW1PkkzNiUVFToQdiRUkCkk4oZsDJLRQtPxBKTibAJ",
  "key20": "vWLs7G4w4MuTx39iUNJeNGpZwNqstBSmzjf2GFxJUgVk4f1vDmhYVZgi9qS3SrUdyeZp1qd5ZRCfZrDtNqRLLEb",
  "key21": "4UKctRWqh2SrjTiHLExht3xUuomZmEE3uNyducNHPMeNxK32KrMXNL2ymV33J4wjXcoeqhuNDgPDhG6u3s3Secou",
  "key22": "h5qjaRb1APRM4R2SJL1HRnfFi5a8BptrNNUqtuHoGYVvC4fELDhH9j7mWdc8DcUxVaX1oC5hB41xNaRUyesReJq",
  "key23": "opAamPXJvzNGEEHDjmikUWfweYbRi7x76wzZ6e72jH7fdJG478Rq4QgQAAJxf7Map7y8PNXPKCqbDCaqfhnMYCY",
  "key24": "4UfaigaDQ98HMa5pig6FqXqVyD69BThNVZvtyqXmTnthNgCvANgbb6QcANnxHVKWbq7q4ALajNioU8Jwtc7vbHjH",
  "key25": "HLngd3VD31EfHnyNQC8yxKxsEf1GDxZPn5N1yadF5SvE1SP6nKvwynz5nTa8m7qaPC47qyKKQL6LH7y8xLn1Cda",
  "key26": "23KKc6d8UUfDAD78FbuMNK6R2fHRk94SJetnFTkYZv68UzyPYtuefZncAHXXPg1Zvd6QTULgmhDRoxTCvmQH6s5Q",
  "key27": "51ENJBNfKP2f9TSL64yYtwmbk2WKkLPh6MyihDaDTaafQPKAHzPgb1ywnLSzNvUo9qGLVoxKzQbVHp3j4apHvxi",
  "key28": "41ih73suEpggNTUsjrfbigsJSXUsR5rQabMsuxny1km8iQ2dmaz2aR739dAB5AnpqCzZ6pAZXYNrynGFYYAYwtU2",
  "key29": "5NWFpfL5KRkWfvioto7Ux9LSmPyoX7mS8Gqx2QX2n2DstDyyF8nq936JZ1FuzbTkP3guMa8sCnSGc45vorDBKHHw",
  "key30": "48dzponYj6Lpw21pKAdkQ3gi5FKwxtCVuDfttpqRofjTAgTdctiaBhjwQzeR8QX2wWf4VkBeKKer18gLfbz5RgYD",
  "key31": "3T7q7z2XUs8y1iEi8kfWWHGumaXVKM2rSRULHTrM4bFUTuKkTWsFYTymC8nCEF8eybhvYbN3xkr6guPuvyoFkuBE",
  "key32": "2N27q95MpDkuM54JQ8T5HebvjFHK6YdkiFFRgLEKDxK2wmKV4ghdp4nKiowcvLtGFex6FPr9NtNMNgRwLZbbkdj3",
  "key33": "4CfTPJyVtB7hoyDSunHAWCZW8uwqpzsD3DT6udfLMYBMdk9CnqYRtG6q9fMfa5ytHqzF8oECwNoMVqQa7Uk9gevD",
  "key34": "M6FmmJsSvciHzY3RPefjaXmifwemXPvwyWpzqjy13AjqdDQdavY54eJG2MQZE8cddTLPVj92xpRtvyFRgb8oV5e",
  "key35": "4BatoXZS5fC56aJWjJ21BKK6dhfZ2ruooYqe4h3k8ueyFWvXDAevUVjdE2ok2gqgm9osjCpwmfCHS2t3awSCR547",
  "key36": "3FcpKiUyckPyNRTdG2Y4zDyiV1kPgiALSthTW7VZkSnWw6euxw8ocM2jM2rzAthEhcfgbQuhZiNBU8juDNWwLrjr",
  "key37": "3T9S2vgoEe5sbFTLPeb5X4jKA8hNtNM3W8zr7a8suyaKkdtFTDK44zudH82gMzGYwDNUgixBVq7hnpA6Qn1Q2VKm",
  "key38": "4cbUAP3PSWxAUBBw1BX8Y5VCkP7vZ1yqNjeinjLS5bYkbL2nYJc2JqjfagQhqXdoB7MriQiDvbb99a7z3H7GQ5ki",
  "key39": "4VGEDQ9dgWefLPoaDhJS8VRgDRjQdKBdtDymLb4Hf9X6tntUcgFcq5AhwuwnL4NCELXZJjxyLkCe3dyty8Jtuijb",
  "key40": "5NS9FKcrkva3V7vsm47DMcaBsrGdf1HYWBVjCE8eF5KEcjSFK75ab9XrNZNvVtDyAPJ3Pyx7LbNjEJf6nN2pUGvq"
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
