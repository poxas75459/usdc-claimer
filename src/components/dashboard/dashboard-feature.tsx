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
    "4zNbA92gbj5K3Yr1cQQPk4Uetx1e4DzdsPexF3TDDHqrQnpcMSL9MnkA9mJ6CqP5rCHcFJJmU4arK8Qh4Fh4T6qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JXLCxLs1RxeCdrMdtngJXU3hzbDPdXane8d7ZmR7TX7KvnGZrxzHEKmnC5kT5xAomqLkjADJtr3LfqeQMqBuHo",
  "key1": "332U7j5t62b7FK9FNYqQZkkh2ys11mZy2zAY3oAwmQ8grDgN116Qr1vovbkKPpJt72RZiFnYdaWevYy6eGksMbax",
  "key2": "42F6LTXjvJaxA2sDZZZy7PRcnTBwHH8VgLPiiPE49WY6xZJYDwvFZzRsbgfr6a37KsFe5oyN1rYvDDSG5SyxWuPn",
  "key3": "49VL3d33i7KfaSo5zv1aaxoMJSKEvPqT85QW8RpwzrfoUJeBP88aFSWXtaVGBM3aJqEfRx33XydrbMYRdb66XEoE",
  "key4": "3d5npMXFu1i7Vf7oR82CscvADAm2geRaF1sRcvY9uVSj9Sqmn5PbrAYsHF4pzrYJmPYHH4DepqNbv3HH3fnXK6uq",
  "key5": "5pMxqFrs9MdPkpD6H3HeFimDpu9D47iu93vjpiU5tjUrMr46Ct49B4znT9XXCLTPW568Dk2smX2vSEMwq3kUtMS5",
  "key6": "2dpR5xRa8jBccueRS2DQVT6KmypwsqJxJtKoxoXWmMLcg3xKvBkhrikwUSEMLVtpZuVF3EJzN6mF795dtA3eVZRK",
  "key7": "4eJ1WNqMCbcyABzbiaCRvSL3Kr9tkqtQnmaCytoBvno42XjdRGqqYF3PEN6kc3DR7ozHsjGtKQM2En3YvkbZzywS",
  "key8": "5Xs5ZW64WjS43fMHbNeAJXncPFvYfxDKnZDhfQJF4UWNF3cLiW6MPxcxajkZLoUtjQKtEGzNQevx5268FRVKsxQd",
  "key9": "3tk4etvpguW922C9ybcedbDN2UyoJFSYJUGH9MoiJm1onXwWnbcxKWMcu3RBoe114iNhuqRRVsCJnSBNGXcCHJQ1",
  "key10": "4fToWybPv1VGpqer2gNUTHnqsP5BacZcavkJYWnBXtogrFtXHhDbJgVNJMfKUdJmwDshZrYLe6yd4gJRES4CP8kc",
  "key11": "3Q46nDcRCu1jCXrwi6wFHaiCBKQZ3i6wyCq4cksKTWFxDr6c8TEAtBQ9adp6gKSDSY7nBQxeTpKXtubwbuboJHBr",
  "key12": "5Jo7SV5pv2ZnBLfwBdMiLwK3TrUG5bu11oGer7c9ZAquLritw1dFYLgjB4juZhxPgTAeG1Wwe6zbqiGu3DvTSDzb",
  "key13": "ifYs46Rkz77TjYLb6qvnsRe56rETpvkvZtwCR2tmDuhuDftnwuCWZwkybsaeZX8caYQWhD8EGCpynhup6YSpqnQ",
  "key14": "mp5BVuLK1YqEHpY3oTRyVLFnuRatUkSewUaYbcHZKMy1KihkDoBt4AogF31eqrVkFJdkRsw8RJzq18vrEiQSXVd",
  "key15": "33Y4ULERXuyLjo6kzwytqB6rMhgYYa74cq15CGbWnoWex8pLJPSopFbvsPoSoMn7MK3TYyR9TaMDwTCGkWvBfNm5",
  "key16": "3DajCebEW3bXCJ5jSmhdTDYHCJ3yP91toSa2W8EzpFTUYD9bKA4mKPh9C4po6kvKUSBtfkJrNz3L2m6q6KSRGy3X",
  "key17": "5zoHay4eVMnPwvEB9Tzcfx9JmTUCZrd3yqFzTotTA1fuNXrWv24rb9xsz33QyxSU23CXoaktLvTTSSymY66hkc3E",
  "key18": "yb7QsSMppr4u5Wnv7u1TWoBr12Ss7EnhAe2E9c2dzXpm1kb3c1XRjtNnH9K1Gf8WDq5bNFnoskhCNKoSGYx6W4E",
  "key19": "4962qCDrFke7rN47G576mV8BD6tz1TTdbkP92RnpHyTxxWbviS9oruNdkUQ1eEYpxvyRpaoE4ftgwKhs5Njh5pUr",
  "key20": "mzgGm2TYgcrBuwy1LtRRAHZ5GX2zL4ne2PJ4NG9kU79QMm1hdbfu2sbAMSbaNodue4JJ3ysKgd3v7ULzCVepmco",
  "key21": "2zd8ACbxTWUCp6R7zPgiaCaNh5eojaSxoTFeR67wCfBz1aSEMNCoiMQcLjN6zh2rkyrdoqMTtxv2vScjYSZrbeq5",
  "key22": "3BNNtL892aiZ8RoRNPY3hnAw58Kkg3FqFZo6JoLFzhA67j5hyFuZgRBT7En8sAcGtFuySqykS6miZQmyuHw21tyT",
  "key23": "kwmGJutPtWUiLeNrKvnbaRbHBYnPrUJPoNWjuVebpJwgRwUCNw63AG26AGKrmjMbaLA438aRAcwEhGmmyLXdk8Y",
  "key24": "z8VcX3KyxTUpHaXg7278uNVFts15hqmUCPBaHkNrvJtcRchjRpUihhZm3a87PeMnrjEjBApZSmE3EjpjRDs5X5c",
  "key25": "3TtkJH9vndVSjxDUrSCes3SEuYx1xoEV9cebJGCEXjw3XxRU6wGekFgdCPQepzu1PYeppBzvHW7FzqA5SLVKvnkZ",
  "key26": "3NBWkruALL22XS9VfRsJT46ECdrLRnAuiXffWUMQbukrtVnGeM9wdxhWVHRBtfaNGUo9p7rbeS5YC6h6NTJW7aJo",
  "key27": "zrE7uUTJUNuMoSUcqPdtEPTDVhgZNFXA2PPfihEU6RVohr9zWnjM6BkKp28cza5zWSMMUdd7CRgXYK7ho3LkPMd",
  "key28": "gE9VWFJESEc6Zc1m9RvLEyeLBchdDUXnzXzSbiVUQnSGY8VzRtQrmTmEQYkkLkDw3nZfZaZ4Wa4QaBhf58S2UkW",
  "key29": "3sKYaP3WfGRKieEj74tC1NMz33HaiK6MusFB1C4CtP2NuWAxuxvWrzh1jKMdvoLgdeejBq2zHbjyxr9qiNdAXZqn",
  "key30": "3tohhgRjT6Fm62TwX2NJf8BYo4FFFeoobCHC9KeA1R6QutxxvaS1S9SrpZSSRkadbMSKxCceo81rLGW9wfTiyTKr",
  "key31": "578URCQwPmGEtXmGTjCfupU6WxCYPsP5qeDyZqQkYrxcNAYWgtkH5YLDfmE6qc5PBYu3739fmHCR8EAvNA3N5roT",
  "key32": "3jPiHrwcQhouUVD9ukbBipYePS5WbzQCcBHmN55gKxD43j1fAuvmFzJ4Bi4JvgYjMsxxYADsD4Uoe7Ba7UGPeane",
  "key33": "3XdRKdhGKipuTatymJj8kgZEsk99fSBhzLhERXa4owMMgij1SXb7XiUqZYY6TPXu2x7BHGkaai3tnrccGdKtta5g",
  "key34": "2zkhaDGznf7qZ8UeRFNA5ibzDQQNT5d4Cmdkch7zBW4LLY7ygFLzHcsbrYYpABTJp59RswBAciaCPNN6umisGL6C",
  "key35": "3hKqNvaToZmx8QbJfKX5YHTSdStKiriz16ikUtSGHfbr8hMNC4UbftZwpNQxW3DUU1YMqH63SBU43iaLeG49okde",
  "key36": "2hPXBAfy5FnorpmLee8P31ChNEYRDGp3zFWryrzYd6JJxrhoiNUB8H46k7ujivW5TD6JMZEsKSx5MuCbRsTnH2i2",
  "key37": "2d4vB1TyeZREmAGfR9N6YDoGcGugBugWrP41pdeUbcBLZAVhHoKmZTPcLmviFKJASAsDh8c4VnVtF3ZqKhhvf3fT",
  "key38": "4NYjctFWiZfq9Y2VNJrbKByYULQo2xLwXu58WyXpLux47wMcqvhvjNH97egouZAD91FvYmjAJkiYKkxi2sQJ4WAF",
  "key39": "5a7FJErCe4hYEeeuHSbaqq7Pnc84Rn6vZEbC4VaG2L3CKTMK6AnfFgJ74DuQhNK5SiSXCCdecJ25fHEhdaBJajPu",
  "key40": "4J4B2PBCnWdWhkhvUrv7b4GsgFyRKaFUAmBhHynb7wDYtjtFykwDwmyKm7KnTSm2EaPcg7gpjW5Rhxig992NMSrg",
  "key41": "5aEsmVh9bxRfBabg6gFpf2TZm1otdN7dqoRXQ5zCZkniWC5VLqjnLQMnewG8LLc8KhAJMYVz5zea5WTTjV7LBfCv",
  "key42": "3mDb9vo1MWiB6T5RJXPtnPLhHSQmCYdSELNWmW119G6dniHkU3zMdWhHAStAgifJNUZgQLpvWCeZTUUjkKc5Q5q7"
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
