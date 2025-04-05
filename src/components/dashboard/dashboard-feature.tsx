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
    "uTCg767R92UKvA9trbn1F7hbHqhwHwzSg81jCuqrW7rk3LZNMJjeqMViiGkU2Yq2vjPN2fLQMt9YK5ALgLtAcx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WKBuuPSe2BsvBCYZHiqc8tVHjwYBBWKpo1nLmQnocMaN1gUpdMCP3KaVjAU9n5QYydAoEz7EfZmCq2CfCpjstx",
  "key1": "5nRZm4iH6C8BDfTHoqoSUKFMgwGWYRRSDpSCjxu34N71jEY4NCW57jrc9e6QtS2bp72YAT6cTRVcJvSRKiyTavG4",
  "key2": "2EQpk8sKQ7FwG7a2mpwsb4cQ4B8jPjRL6fET24RUNk24P8eXasqAr5kgfGuzjmhd8H15DhZVSPDwRu1gK9yLmm6e",
  "key3": "PHJJTuL3fuSrsQk1WkjopsaYy3TTrkv5At65DGi3q6GHbLdY7GrZEfi8c5TxikVP7S6W1CqKGFi3MJ89notnMvN",
  "key4": "2cvD19JZ7LQdekVY7YSYnDUvqfn48FfZnBW1S6Syw9wLJWPHkt3KzwQYzBoda3gF2XjfGzch84EqV2HnFHTDodNF",
  "key5": "4i2ciDzf2DL8QbTT9cmTeTVkzvywbY7ttc98TpDk1QV725CeXFSm1mmbkSTnGCSDK6s2sNb3m2a5a4D6LqYPXthP",
  "key6": "4Qv4vHcLnFn2nuwjaVmaASGs84gUbsUdZtGVeLYrFcXEbPYeEkhQFLCvCqDwNKGLxy5FwhdqALRxWWtVn4aPj8Qd",
  "key7": "2urYycX9EeYVgUNKED9ii7Qdmjh8bxdF5JTuG5tK8QGyJrqm2s4CN2L9ehNaMuqdQMDteFUJpbgdybvk3Y5AQs6M",
  "key8": "Zw18vZEDL9A5pzPG5xWLkqoHmdHvCpCTeKy1p2ZBJ3JcvVgNFdT5H9tgH6HAEejyXu3M3AM8uPLzy4UQa6e7fmF",
  "key9": "2x62kvXZvSEbKbJVwT47cVg7CKmaFWzzkPifLPSra4vkxv4uQVihNHT69uANRjyS4aS4W8zzok6uDUFETLzk1rSL",
  "key10": "5TXwbRg4Qy1Ap9Trivwcm4N6KyHiV7JpDDKHYvEBC8PkCJLNP53vFLxyezwUZDfqPWrbon3F3wAPW5hRECkQnQqm",
  "key11": "57E1uM4KJz7orPUNC2XSWiL4uavFi8XNvPy1yaGkKFMFJCeBhTM4shfmXej8dGEVMf5eQaXLemjW3QfJQnZ2fPzW",
  "key12": "4EnBGJSnPGTaJYzXjbCMYVXvKWtmUWsYsn6T4PQCmHKifjG54GiSZYEs4RWnq7KHtTBqXd6v9xTj6tQZcWPv7bVp",
  "key13": "3MKsoVSppUYrhWMkYKXP8dbKbLA5mi5t7Zy1u7cRdSBqV9VQD4BavuZg9kdvYWb1uDcmNknWyivUvuupydiXJD5o",
  "key14": "hx8HFy9Vrxp5RqidbmgS4fHNcySZVNshr4aw3uC6Yz5RQJSUjotjNwpxDamyC7ybfyvUXwp2SJrSWu1Cg8qmDcx",
  "key15": "3FytY75njGq1uVGcRUkEzg9AfLoP5PXnY5oW7VjQ8WdoJiGjvJvHGJLT45wRZgeRsref7TkvRrXFhLSfC2TSwAa7",
  "key16": "4iQQLCWAcaPLRNEgeq5GRTDUadBTHzJRMgjxSbFSpvVvwVAgSpw2RxYKVEjxHn4LPTEfXZGFkxyK2tZfJrsjxVEo",
  "key17": "2sXQsyaivBLnB8qYadJuHTTZPGVh1LjRYsiKgMdPHeTQcBctsuA7F878KSqmUWbQK31pfV7ymXNATbrDbQcbPDJh",
  "key18": "3iRzqcVA7CEmfKgbtJjY5fP4KKz6bc5KF78bg4TU5S8PvGqPrAXWthJC9ys2KdMj8qEBBYaMzspifcXSzJ3HzojZ",
  "key19": "g4t93MruWtPoRsLdd3jdry6wkHSZMGCYZVq6yKuJ29ftvkKWdLuyYKQ3L1aGWRWejMnHjiqyMJzr7T7xsx6ocap",
  "key20": "4sKLa22ZRgnceKrziqjT1K6vPnAWkvvQNT7HeMkEae6oAs94tJqaf6wRhubrJu7UQ3GWwj91JngzqX5swUHpHBDS",
  "key21": "Lu4ZcdmZqnJX2XDqtpwCp1wwkceaQ8Kx4AvJ7diWUSuhemRbtGKi4m1apr8HMkEHynSGq5Y9JBeBm319NRQWfg8",
  "key22": "2SFTb4JbDBACiSJGCZefh8cGsnF8RWaJ3EUPgXk1AVw8hAX7bFGsdP9j85V86NxYW43L8fZmrtWjVrbWQwjsf6k5",
  "key23": "3E813rUynGX8F2cxjK2u4aq4L34tcELfTG3LoCvhftP4v13Qy1KwqSTMT346ikVqKiDJFFkDpEjWHhhKUBha3XyK",
  "key24": "3w7A1qeUyZX9wYBpL6eoxnWkHYdkHPhPD4R7JVL9yviZiHpixi2hqkoBA98GusnDNRKsSNF4Ac8MU2D26JRcEEbo",
  "key25": "57gL52s12WorvAxmdjmoTGteNLmdddmSJsnjmQ7JTDyjJ7DGX5BkeMHndYre3LSetmgb7dD8o8ceyjDM6ed1MKUz",
  "key26": "cnDcR2AWLz5gfwLh3oHyKnQPagy7WJ4431G1mg88S5VApfHKPwbnSjchMaREUdf6e987uCixsEmWgVX1vFqQz4A",
  "key27": "4pKc3x2sDFgvrSDM4pgcsbcEXXn98u8EAnM9c2GXicL6mdUFoyCv7T6tb1iyc6C8GvBXdJDyXHaazLfykrRdWxYx",
  "key28": "64wunSHZZGKzz8xg1fh3n3cVDyw37MKaQM8DL6gWg7WRyMahyxRX36Ayo8f733Dk7YXCruT819QwLq5ZivcwNEHN",
  "key29": "2DGH6REDkSPGBmSixkAcoLUjYQg5VAin49rRq3J9xXoSus1N8zn5vTgGDcFmayEd49qA9HLUgtnEXWCnGSGjNCQS",
  "key30": "33keg7xTNV28WA6Ji3pbiLxHQpmpsm4dgmSj5wNpeHPxajHCJ5XkuPCvwHaWeKnohwfoYz4AcJBaCGPhn9G5ypNb",
  "key31": "22oUDbpS8NN1dRBxJcx8JEndaYdN1TgeqyqmzUzf7Ynqf7vGYMyYUnFQxgfTX9bD8dSyrS16nXHWwLHpsxtMN4tE",
  "key32": "3fRmcBtsJ7mUSu41WMBo5dxyQc5B1VqAT5CvCqcDovZ2vCoieQFhm5vpVD4DjDKB8EKvrfM2GuZmXiccEFXbX5XH",
  "key33": "3hkrffAXVJdBwD1GTYYTLsSmcxAUWxh4SY5fcRbJm57maWE247Nh4WXyZ1FeMzCNFudrPeTaE7Q9cB5tEswCdzNN",
  "key34": "mswyDPt8ezKLZZeaPonmEJ3HWm5Z8EcRqX7GvPsz9b5J22RPNb7Avh5BrSatW3LyPWurzY6W3xqMBG8VWvzXdXs",
  "key35": "5ohwtNdaMS1FQibucjxGVd68ZyuHAUJPkSYEcd9t9KmMjsqjDfjNYoQgHkRBgpWn1aSd4qamnKqBUJxXHVMgj7k7"
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
