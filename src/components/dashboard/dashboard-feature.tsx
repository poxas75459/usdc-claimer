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
    "2ig8CGuZBtLRwe2kuV16Vbg12nHRbXEMptxGH3ckrBpuUVi3GJyLq7utKcHNKtxzVwxja3f1jntiCjAvNj5DYWWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26WJdxuu895kL43tHgUhQVN7gDGvyy85QcrMbgdW2gmTSFqPLeJ9uWiDGYBdWBhNdnA6YVGcKuGCwDGZGkgQFatq",
  "key1": "584sbh56ndJ66c7XD1Vn52W1mXDUDfhtiusKFm2UNiqbpLBPhvJrRyQoFu451FigFZWYLkPYgYHY4aEQvCgPVoHb",
  "key2": "1qLVwRVX1NPinkxTpdSW1xGBWHyu1ezHrKuJ5S797vPAKYtoZ9GWpGiMoQb5aHGFeLomARGNa4K8XLRCXbjxLzH",
  "key3": "4GimbAdd8ka7K2DAStWZBHAEixUXX7jacvjTZLAxz9Y4Jo4YW3V1DYb3KFfrGyw4X7DL95iiUxqcDEf1PMWtCmxE",
  "key4": "45uEUfDkTdzZVbwzs272UbcSZpp49zEaLv1JG1WDdXvJKavyvtEhZCqPQxfLpNY6G3EivYTtpiSgVxrRaHR8XAQf",
  "key5": "5NQFUDQphSUpZUAQyi4M4Kwsmknj5UV4ieP5GjTEHRaAypB3qxCmzRbXKUd5KwaScfChfpAghs6Qn3fHVBmUfUew",
  "key6": "4qAA8rzuq1rcDxJyt99PzC13jTkCRN9YjB4YdDf7uzku3a7A9CvGLr89UaWjb49LmYjan9rX14ExgHuSRGL6Grx9",
  "key7": "67GUSz6aPBY9qQTkzmnMTNtp8nQqd7yh4ECRH5CBW7jMLbo9ho6dFXNrFBFw4bKWiVG9Lhmx3VCnoGcauYbDbtyX",
  "key8": "57r3Gzy9r5XaddJ5ySQfvWBT3BQkzVNXqJm6GS6mgtGYTwFdVWagqj4UqTEXWBWWVF3HKPmcwohgnXMd9v9v5PPi",
  "key9": "2HezcR7qrKHyf7tvGH4bZN3UtqKUfnGaTMB7ZBTjtKet15o2gL2GhPQ5NwRRQR2G22FBfbo9Lf1azExbE6uxXVEb",
  "key10": "DXaEuSh7CMDJcA7AZ2p4e4m6NCoHQy57Hc2CNdjKrtaAGLytgddJmhBvQJGJS8wYnAo4hnikYY5ZmGdd14e8tgs",
  "key11": "67NpFkivbfydQnwJFijQ4nkbzazGffa9yyb5nEpwFXnkbeu831WwMSYFJybLSN3tpyqQt914NNNx7SwRRhUnX6ZN",
  "key12": "5wWMtMESY4WeiVD6Jv89Sc4y8W6fYWioDz6iBj8n3YSoUa96LggcRJEwTcJP21YtqwPF4mwr5VVtHU45YgrHRS1M",
  "key13": "3YRmhEoN3wTsJA4QzeRa3Ef3LzB9UbX9RgMR4AGkaiUu47j9QmiepczU4MDCihkW2GDasKrg772qCBbjbToA1C8t",
  "key14": "3RyR2HgTRSZCNB8siN31utEWno1ZJYuBPKoJBtk8BcYyzSe2SXoB55MpqqghKrkbqdUuAMpohDpBsVeyWeiGABy7",
  "key15": "56VDG93HzRbn5HrGvkGPXhWRzikzipxzMhcwTTs6hQrggjdxBsNhy25eG3pJpo35eDKtENgKT9FkwnPWw5mW3xtG",
  "key16": "48EKS5atDfxXdAXdk6CCiZaSzxWpAVJHbG4nC88chA7RwL33hjbVc8TxNi7aBBs6ufEd3D9iZUKHtKhFVpiEvUaK",
  "key17": "5seLRS9D6JrdQSpwqQyDgY6DpozVrZfn1WwaBrP46H3Mun7VLBKoVXn78wBEe6fwiCtqfwrnjp2MCzGytRPRdP6",
  "key18": "3jdq6Y3zELn6bTPQsCk4eUzypnf54U8N5xmVyTA1Eyhwv6otZXF9wsi1NwrBNxihzVggjFQHAoupeM1yhk42Cxtg",
  "key19": "5JjYkWRA9T9BJnH7A9sGxaivjNuCedrwuWBpNVDZLK9ztKbVJejigi1maFfWDZz1z2nW4CiYPwyC5EQCSoy7yBAL",
  "key20": "5Atk15KqRywszMTTKn4udwyUhc24o1M41UzYLPtHGSvrUtRUyrhn5qJDYTQiuRL9oEHPPG5M1dcBgbC6LCp1y9tN",
  "key21": "jpSmRu9LFB2nrm2Nbk2SiR3oBmEbGocm7WA9ypFoJYSeMBi5Bym6rPEffm84fruggX4gCr7BCKKnUuowUgtgdJN",
  "key22": "4FbXqVff6GkMWAChxtzuWMmpTKzAqg1JxRJ9bKcruQ6xX7yjUCdkdJDgiGwpLch38Dq9Pp64nRn5L2SoTtFEJXpe",
  "key23": "8b2ushbuL2Je55KKjzUR7rdHazbbUa3xHah15cr37pN6YiVwxCtgx77iRYWPtephq4C64e1tpUNAiu3Am4MXrGQ",
  "key24": "4JY5Q8zx9Y4NnjcDJkViRS69TDtBxPzhC9WjAAc2sL8K3trWfdvc2DPrHcLMadUHqb131DXZXzCXWgETuF84kWFG",
  "key25": "46qaa49YY6oiFhpFNaxtTBMZpGEocum2CRGEghejCgNjwjQFUTsqSA2NE5U9Y9VqzY2fX8ZsYzidsCwXCLUTgZwL",
  "key26": "3CWur5F9rhdCNBzENE1nJmj3LmDiu2HYhZ5a82Rgjo2TViV1SEZZYcX1gQ1Rw1ubV9kXRBcV1FV2NUHUCx39KxxF",
  "key27": "3PGTYWTPJwG9Mi531qKPfZrvQthSA4xSuyz8XLkpPtF5t1RdMBP4z8Q26Xhx8DJuKdBG4J1gef4pCMJJ1wYpC5Dj",
  "key28": "2LTBmhrr5QxDtMnHUfFnTp8dRmYH6CQB3TfMtC5xAT4aLFjcgZjUFn86boBuU2ouj9obNsiDsyDXPuzQYmHAzpg",
  "key29": "V1ZHvWww76qvse1gAkYMEfub5qXbH5mm7csKPFLdUzJmy3airTKZFMHin9a7Arq5nJiqmrHSta492u8x3q3gZax",
  "key30": "2yqvRvgaViADtTkqtMWpwQCSVxzKBUiuvMLtVG2JWXFMmwxpcfUNBseErVVFfyoEFnMiW2eqByGyp71UcQmb3kXp",
  "key31": "3Fm7zHGujXpf8QKa7gqxXzGuzb84PBJXvfn9HreednnowNNnYFk7iUGnYGxYnh9T5KKJ2DmBvkAzKxXAFLVVspQ4",
  "key32": "2qdQPrfkfHPNH6LWxUwSZC8QGkYnUvqkYucnkqgESNbZthPngLC46a4p2RDWS79wLDjRHf2NFSdbjSzgjLfiYRBd",
  "key33": "3nDejs58cvDbV7NPmLZygBF9Qvk2ZcUDzp9mqZ8Trks7UZ7G235WnN95MufV75WuprMxMctpP9AheCKdmTSwyocb",
  "key34": "2nkj76xqxZTFrXdnxLDRE4G6J1qimE6nr8V27ZQPrPVK9uC6hGEbHcQy1TVKenQrkKQbevPmdS4g19jukju1qPUq",
  "key35": "3mRiBygF4Ftq3au55WgxTTYJJoGazsH8oxhxfVwkXUitZK5KuKiMxFLQ8rjuzPuQycxR6xZaySjXBzT7V7QMQeJp",
  "key36": "AVLQXGoADbm4GZNaMLJGXtbRtHy7Pfs4cdsCsB5cypvvxjmZFiqACYc5PHFhNAduJA5qC2Wdf1RvCT191FFo9CT",
  "key37": "5aRzZstFH7RrXfxi7zcuMih6k7XuayGPbsuT2eANFY6kH51RUszPKmkswtZ7ZD36t6WH1QBw4L6nAc5nUZjb8gJy",
  "key38": "2o1pNu4Tqzfb4FAWmzRNk4mrSG7ZnaBcuSU5odsS3n33y65Rj5QtcVvPSt8Ro2QVTsPjdf3sbkVDpxMZpUuCixoT",
  "key39": "3kc28M9eG7ULFirVMZVDrdi95mPQMV73e8T5vhThQJKfFpM7qmr5u64mz5RPuVDcR8NwFqwtX7f6Xw5ZUckpx1gH",
  "key40": "mYG7d1JQpH41PeF1RU2Kp5rijnntg99EBHF3vt5RQFRsX4N4ZinxU296CM4yfhwWi2ypCYAhWnW8M3PrKjosvsL",
  "key41": "rSmqNMnkVH2scGhZ7D1t9b7Lnr83Jv6H2pMMDhuxgVTuhmwfLfKVRS66FUF7vx8T9U2KGqUzHCdrpWAHBhJa4hP",
  "key42": "1pK4sVGVMUFyTEahQw9S12siXjn9NPszf2iRjAYtCkEaXZrUeamTEytNhoAqQLjhybKCyaT6aSFMWawkJiBns29",
  "key43": "9fPqAGfFaVw9gFaNkbUvEYykfvPPos16a3NcMfXzS4A8MjE2AZSGGisZn7UhtPXXyDqjzkFtDzUo19qJFWDHDFJ",
  "key44": "5WazMtGhWwzszocbqXZ8VFns7BrDy17GNvBBPUP8z8HXQ4goZVByk55AZXRQqzMWhfrLPQXBm6fwEcSQ6boa9kH7",
  "key45": "HPw1NbhsL3dyHpZgNbiSt2yKQtX9qUpKEQF7PbhfU2ncd1djJmUAKZZ64aV74Be9kd6npJUUMF6c964MUZRZzNj",
  "key46": "1H8LJ2EXqcKoCQeoEndcmx6mEyn7EQjzbp3fiJskNtboL5wwhEPymTsDs24WQmZ3tgpshk4u1HDKj3YVrUs5FTu"
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
