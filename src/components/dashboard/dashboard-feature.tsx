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
    "3YtCFp7yMtKwCfJyj2qJtr7mxAgMNp5ZLfrGxgU1v39UJNkFp3xQxEPHuiHWiipDDFwaadmW5MfQzgzQ7Jm8tgiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESo5LFUXdCxfDbDGtcT9FTC21MVesQ6QXLcT1XEnQ9isVv9d36Vp5neNxNxAqjjH3Q5nGn2m5UcXPBhLQHz6coR",
  "key1": "5LPgCHUdaaDKhbbu89U1dmUYGAsWAevkuvAyCymBcWPDTWmpqMrtLpk2ThiPBVwjemTgkBfAruQTJm4gF3WZ4RQM",
  "key2": "2VqY7YpiJsnP2JooKhxhzcCwtuihmJR95oe8s7aVrjLkosPboVwZwMUA7bTQ2E2qV5yNAW9dbiF1FXqdM6jRX1jH",
  "key3": "3pCpnvxUiYQwSBZ2CkoXrdFNmSXNGHCC3FkN5Xp2CfgMHyhAem61gjS2nfvN2hZRKBqSdVoN9XhMVYZo7zaEBWmv",
  "key4": "46x1Sj5x1t4W46viCqKVeVCcLQkVbeFKUnL6qfTucTsXHA1r7QXsGrRp7FC1Nvwe2kET7HEEbvoRWbYGZxR89s8U",
  "key5": "MGjP9NKkchxHxXtnT4BAbUdZi1bCP9xqgqnjaw6V2vQoDT3sPShLxpXyDhLVUDjuQ3X8KChS3nWWoHhrx5RTM4W",
  "key6": "2ZBGho8Uz7TDE7Yu3kqmJDd9EJr868X71HRpKWajtRNuWvuFB38NcGHsNoKjPLZ7JmQjj3NXv7fE65udx7nvqjns",
  "key7": "3QNQqC6gyii5dNNGo98v7DBKsRLXYbySLM4DPLUHmM8HL4QTcZ7vfPB5ygMKhCbg5Cp58WmsAQYtyMMvbpTHRVy7",
  "key8": "5pRYb1Zpka1gkn4x46opQpM5pVKAv6meAguq7WDxWre3cxM7SyZHEHCmEuwCCQiL56j4JWonLvAqC4rD2NCXRnkc",
  "key9": "gK8CnrDsr7Azk8j5D2Tyx3esA1bmLiDYtjNMK4uyAWNU4iuDsochida5BsKDJRWbg2YK4bd6AYvcgyBt3aU1grn",
  "key10": "3nM4sTf6GmzK2hCJ1XLLUCA17esJmbcTKgaq1kFH5XUPYjUZWuGXQpdYTTVH5ZzUz85npS8pUsRpXsLLDxA55qtt",
  "key11": "2pvg1WRa4oYoZAqrR9vCrBMa98st2XUJ7tFDg7m4ooVufXdPNDdjStzxUaVn9qer5R13tsfH24sfu6rwzbNy5k5p",
  "key12": "2u5GU5sDXwJCfBvqc3SKVXbbb8pgL3YPGC9589NvbWkPjjkq47wRmyvRgNNYr7bi8Uc5mUZDuKddc56ZtrCjhXz2",
  "key13": "2MAkM1ZWc1n6yqmx1txAKneVoj1cW1A1uoxEnt2iFmVtJe8T8w83guoHahhcqCPUPQHYyhJu65esRFLuzgSK47gr",
  "key14": "2bq4c8YtQBeqgRgKQ5RqEk6fmgxo4wPCFZRpNEZxRZ7iBqE8qEKNFh3RGHi6fbmFYzsVmRvpKeTp56YmiCeSLekc",
  "key15": "2PXnLnYAwonXk75vsWRG3va4qoCmcKpEPCWL9xjkuDwwU1syAb7AmRkAmrDeaApaZkctwFjSVhk8CwvrmvSRMiNm",
  "key16": "37vaZ4TEZDDZBKU9j9LQhQWGTub3JirJM8ZbuxqiPd2moDsM1BB9Z4uv6M146oN8n9K32qAKddbuDsoAQ2Y3L3gY",
  "key17": "3ByC3zN5gq1dYMERfHaUVWcziWzuCjx9zsuKnaPibb3mHmr82Je2DsV8UFhwe4WgDAoiS2hUFAGY9C6GqojKYv7L",
  "key18": "5RgkJmYbDV58P6hpWhbKEN6SriBa5Zra8dgyrifS18RSfeLKjaQXdHaoUPVGkiMRguW3f4UTNFs5iinTL9D9tr9m",
  "key19": "4eqRJry8qUt6VmHAmq2MCfUPZh3Pa31f7h46pAzyKC2MXjkJe7MuRxgjW4BrBqPaYYZyZGkaD4srvzXvHzdQNxKX",
  "key20": "5kXQE6DMUMA35fMAhAGJ9ZMknXmyWrUwcEpwutCccEJAAU8ReUvBa2tTwFoknHpPaCopFThnQBRDW9rJz1XYiVWh",
  "key21": "4we6cKKVHBg3aaVcgGCGxbAjEt2mVmXmkReyq7P4UhJtwroxFsk9rsJVLXToaSfJ6pLdTE3xrWpgPLKHsRbfRU7s",
  "key22": "3mHMhLCQmU8zcGJDpuTnKitS9L7gU88su6VCX8iB5xvcRubahhwuN3fdysEiUorJRMdF7a2JTfoEFnNKobVPjCL9",
  "key23": "3EU8qpYc4gYw9BQv3eTxw8QuKJDV4Uyo4K1xvnRhJfL6Y8v8MMSyzshApA8w5MdwNNcmdbwVtXJwnoujjGseFAt2",
  "key24": "XtVbEFFvNHPrQvSxixAN6TApqiEuTnZRh17a2FdBtvRdWNLDjVCTyGa4VULRnV581dqFeLTQZMzzQFnJJaU5XPW",
  "key25": "2QxyFcuuq2tYWqNGiTahKGo5p7RfFEJSm6zK3BagfmnA8hXtPf54sxm9z28CVgnhL135HM2NTPhn9tTrJA6gMjD2",
  "key26": "4xHXVrsRfGu7ZaAvaM6pfTqe6vNkpK9jiDpo1yffu6sRFSbaevRDv5Ft9Dy6DCrFBhfG5Jq4wEcN9kuKGVsXsmvC",
  "key27": "2vYi7VuKnpZevxrGhYZYMmS8pMxF5sk7UPWTVKt3h1g5QApmV7EQegQBsfWpxY7kJzVnY4dvGZ2Cb1pYqZYuDptm",
  "key28": "4uPdFAZc4FeGtkpovMvhYswY2tau2F1ouTisY3SeXfCsdX2nrSKqxvAoc5oLGbJw5SZEyt92zzaXBArxPJe5MKfs",
  "key29": "3BuaJNhDdf8eyWweik58ikFn7mwUiDYuag2yo1ayAAbh3MQHTyF8DyfbZ2HeNhm17QRPw1kQhCrsvLKt5m3ouRfX",
  "key30": "4Bb9DkcvDKve53ytuAbu79FHaUodxqLF3NKLtvuv24jy25VuXYWo2tujbK6SgYpEjNTqJjkggN8cAzPFwHyRAV1S",
  "key31": "3HWpDhoNJwMoKFzTs7sb7woqgjU3GkcU8iHGhuwnH63LHnabsPSBj9EZ9PPaCxRHcwMDojeNPeBtZpsmt9ZrzFEi",
  "key32": "5Qm2owMGVbke9vfsaGHTYRdfb8QZPWwUF7oRgkZgY8u5UNszLZtFhXYQGUgzrQQEuTpDK1vgdcKMBKDQ1BkCsnZh",
  "key33": "2eZ6kFJvfVdQnqVhoQJaSGxeHrqow2TXQXUJSwrvRVYDX22i9BijwMU19YsSwSxvz2eyKeXCQY8HjUg2NhnYNSDG",
  "key34": "42YcT6nUy3aLK7CSzKQQS55GckBRVvFZ1Powotb5u6Yr8KPWvaAexS6CrJHQSh4vQBsbHh2uAK3zsVVhZrVw8a6F",
  "key35": "5uZdncv7vDFQTKVHC92SxDVtb3ygyjc4SksF7wZJi6tXSk2EXco8TTSJZ3Sfjj3QW3SBFaExM6iGnkXdwH32JCu",
  "key36": "4nUKpAB1WAftuWArtFu2eHHK6Lnyra9kXRePEQD9rHaC6CtK2uY9LWzPQfDvQBzEEV48GapEUNUQfN1S3gmJtEMA",
  "key37": "5dddK9sqM25sEXfFKZPtpNxo5dRq4ttHGszHqnXpg1ocELTrq7yG6HxkM9QRmeLABSo5cKs1YCdEjrWtEtHhmXBr",
  "key38": "38DNCY4z1wzP4wrzViBXdQfcbEVzTtzfXtJE1Vc5RUtHHjNLhBJ5wa46LjUsxt4hDcZPmHdRKopQeo2Xeiefp4Mc",
  "key39": "5DL29BiAx6C8RgtNpsWaHcp5RXxuDGKRAXQcWmoj3F6DhnFkk5ewaPAedw29WkFLzSYfzvqHhtR3gypq3X6qqHkd",
  "key40": "cYCwSR8ZJZggaTqoWAr11dcoid36PBMjvTZzmZoaYawMULxKjkiZZFAFnFSdrZPuV1oNRLrgrpQXNDLzxDJHHiW",
  "key41": "3p6NjQGuqVkHcUnRhe1tkDN8U8SnT5VtgeoHb9X4Yyguib1mj84cBwqb6k54PgXGBEenxRmPc9N3vqVJbLuPN1oY",
  "key42": "216uVHVE16pCeRXpf1pqzssgUYX8dSEzKTnLRuhe6UL46pMmh6L6oA4cFakCFFQmY2auPRR8RW9chbrwh15XGoCo",
  "key43": "4YDxtPWjCoHtFFzaDxfJsUKyXByxJjptB1hnuKBSKWBn7nosAehRqi3aMcj2FnbrNQv6YhuKnFsFAs12rUXu9LiH",
  "key44": "558hhXR7rAhQMZYxqBH6eaGB9XEFZvFmNxpn8jCuc3G67DeViihC22FGiJa2sWjyar3Qdbcuj34Ta11npo4j2DH3",
  "key45": "3vd6V4HwHRgWJKfjfbj9TbFr3ReytwNtqJH8Ru9cWSxm45WsPATxEToa8peM7BZQB1Y6hqntmt8LkWGMyYpFc9Li",
  "key46": "5HFq83ehM6cKncb3tJjPiiJciYM4FWh8yZvtepC6GPYkpswN92rz52vdXo3HdFBqtLbT5bTGzFoXfM2dh4gNKtGz",
  "key47": "2wksECQGDS3ypTDf2pbGRMbzQJgMDHmrzEqQxUGczgN3ESVMnyn6iLbvGuhKCnhQobj44YrECsADfwiVTkpjdPYw",
  "key48": "2zggMzZhKXpHHUY8n8AX7nCtS4G1a13TMdqBVXGLJ4dEPVvHK7yNoU7HDe1QvZwkWV9nzuj8D8pZrfjC3fsHv251"
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
