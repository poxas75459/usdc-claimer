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
    "2YWALEfUdNBZL79nKxiSg1qDvp1c6hg3L2qQ5GGAbFUoyQ34TRcg5n35UQ8RJbmqRF42sTd8swNLNxSGsMLU9E41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tp4hyU2RKGGj5pbJp79VPNi6PPyTe7DxLbWpHGMBAwGXWNEsezgYwjXorrwcqvtnJjF9Gy9JJ3pLuKL4UjuG6eD",
  "key1": "4DR6c8QaXRsQY75xupj96QduXBQxedR5ZWknFkYdMMHNAoTU6YjT6xXMarPzVYM2ZfgPZbrfQjpUCJSngKWgGvd2",
  "key2": "5w7G2CqXaZEHg3fPP1YikVXhwaG2pjRdAoT8xHc8oKBDezkFYA7RBuLLCmimzrm4oj6ueoTmiqhTcuHj7yRkjFPC",
  "key3": "3iCDFFvyQ2xvrTRmNcZAZGG8DVP9nW7zqPL5yksifgV86mFYiEEpRLJYZRYQJcfqfMT8u8GPmiNpXJFB7xBpg4zJ",
  "key4": "4nK7xyZvggYuLoGYx5xPdd8RNBpvevwFh3gJRb2wYg7a7MLVCv4QXc9ZQAbLqNcC8oJUP1Na1mudYWiUPTo554Z7",
  "key5": "bTdmpYCYW3m1BKxUnKNmXRNXVfCpNDgWj3Eank1d9ybX2ykFycNk4gwbsXyk3xLC7KGN7bttsFzTM1uaWNtxYga",
  "key6": "5C1QPuFavd2BG6hV3qpSUMEFYKk7t8fQoSX2YFy6bXaqXVhTgnY5gg9AnSd4oQSQRA3fpNYqMsaaPRwrvgfvSLQd",
  "key7": "2zuhvpXircZQaY9yx2cPmFrY9eujWq4U5twao8dukhA2QpzDLcoFeJn9kw23e7JkMc8mmrrq9DtrmjyshLNgAh86",
  "key8": "47ubdiNCyB2s7baALp8NrvZbSLJqzPKpGbkjcZdTA31czQyPHN9u3MfLe3r9jTNaa7DNHjqJkqpEmssypDF15sFV",
  "key9": "3rpknZ4tCRWsiqunjN1TMPvXhmZSLhnmjULKUe53b2kZ8FxHVZyj6xDkA2AASxHiTCiF1SdjF7uiQXMNSv5frR72",
  "key10": "4Sa45TicYMR7jS4N39DsJG2GeQSp8WfCz1T1a9yWTguxkkUsRN73LsnsCjy8T8qvsxXk3VLxcHDgbFpXpZ2KDsnn",
  "key11": "2LpScH8WFEg1SzetW7kA34D3th9q5n8xrzgvrcHnNXzw6QzLSQtHuRiMwuj3fQwVCLY4eVs2uZWQvMXRCwYCZyRG",
  "key12": "3VyBRNEhEuwEhVChT4QSUSLxjURXNGrM9UyBLUx4fshNZLkCYS11PHnHP5eQGeay4CA2iDeCL84KzZfGRg8cwPX4",
  "key13": "53GcXYmRsfD3QBX75cFeop82EeFZwFByU9n6pbmQP1ezSJQjbDq9BVCpox8rpMchLQzsMyYT7UmpERxtAP5rnBjv",
  "key14": "627rzvd7yjMTWWwmvQYsoFWNkveC7VPZrM3tm7r1WmhARe38AxfWt9dXZ9KeUJjzPxzPGhHeri5oKmbshQihhMq9",
  "key15": "5CcypfKrVKiyf6Y32HELeB2gCusPBqybX2GBeLvRqgWn7L6P1TezjCDMtgdDQgPDCyzFpPLrobfdcfiowtY5CgFP",
  "key16": "hUCkRDwBDUyaqWJtgXWf5YcnUHzuiGPgWtqiYiK1DaGZY1MoHEyBMqF6rvjtCcQdnMCPzYsrzVRsG8wBRgqRoPu",
  "key17": "CBzakKQHTtipnKHFUhC246mhy9vSG3bUjpuiujF92yRbbMJdwBSdWwpc8aYX9KxSUkYseFVr2mhqXReVMFTJ1YD",
  "key18": "2YUCnz3uarmiVmNVJmsv6MpZLLxK94S3MnprqzAwuDeqPxvH1ZZZSt1pc4NYBPgpKwNzBxNm91678DguhFyvq2BU",
  "key19": "3ydB4Lui1jUzFteSt5VUE7Q8Ddtu2GzFLR7adSDkY5iNYMd7L94fyQo51pyigxfsMXqgEtn6ZZYGPYtW9aoBrNQn",
  "key20": "2zPZsdGGQDbTtwuhAdSHxBQ9hbfHVfPDpyBNg9pL3RSVNFTpf2mYZqp3bkjtgTzhJiPjN8PeJanhgRRBBBpg7kPa",
  "key21": "4WgmztZ6xwYSYYFZcEn5935mMs78MmwTBChKeahP9GfgAztHYkw67PBtVKJbv5k5CYPg57Pi3mN3NSf4zrWs6Mrp",
  "key22": "495R4EdVmydBoepJ1G8BES2L4jFJQLwEuXYY2kmAJxbLkqdKfBhtaaBvG3yLWQudsa6GQikvizDYuKRLmSodccEw",
  "key23": "b6YP1FiNVeC9UPomzzsHGh9ndPkpXHaJpUJJraWxfsQRj7dhy4So2tqTHnv7yQQuU5Vqk7XJdu2ZaywKqUitoZK",
  "key24": "3eBHgWN5JD3zbjBhNzPZQZTfxxyzaUxJ6iE3cUGtYzGtj2y337pJjwszixSYrGYvfYkDhpXScLG5h1yu1qwLwEb5",
  "key25": "3BTapTxuuahorKnmMvJXd7BJdAy1gDHucjXBqjDqEgfb4Bd56xQjQrcDoYR1K6m4icgrPDdwiogGZZ7pDeAXT9S4",
  "key26": "3P3QLrAhiV7FFER6CrxZmvxSms3Fryzu62URma1dyKDvN45KWLz7V78QuFmKedGgfcnjV3Mh2FQjGerXebeQahah",
  "key27": "3NE2wjL4PoyRa33TY5Qj9dybF1963Tv9CbrAL2uY56RuAGMELf6Y3mfQH15N3cJeyT6TogWx75ZyFwU1ntYYDAbi",
  "key28": "3LFYVYwZuuecnnUP9Yek9o4ihGUA8rf5gz9rPwL7MPi5BBtemMy1MiJeZR67oBYSQ6qXRoc6DrDED7jUyfcfYerZ",
  "key29": "QnnqhZVuErCoySUAEnR86A9Rqm6b9uRiafuSuSauCSrAnuXR4onoz7Zv3menraZhjCrj1NnfWgD8ZA5h4nYMfYz",
  "key30": "3aumT3vGWuVX1xDWEp9jk6YYNBGSwXv523tYzmGMLaaPz8GJ4rFBvajKXfH1jL4tXRz3fxwFx3pQqWQDoKb9xh77",
  "key31": "52nUrnrsKxuvayrQqNETPXRCQ7y3jdJqZns4ALT2YuVgodoCtpVxfUM75piijoMwapgMUAJZ8HYLSh6An777119q",
  "key32": "DvCxCzB9RmofUtd6cfnieY1TvFDY76J76C4tdKRoR1u26jFAD9qa4y8DHrMznbSBdAk2AZRSPn1ivYwaycYfhgU",
  "key33": "3q43Fu7EoHSLiE8dAcZDvXmFyfbnLyAQ8NsSBLK2CD9EmaKwik1iZRiQMKzTAySpwpzN5QsYipi9P3PLssSQq1Gj",
  "key34": "357PzBYXojU6g7992q1JRMwm8sMXutds8QCBUapVLSiJVhzbCgMJ2QDAsZkzv7jApRvVSXJ469x2czUfTmveTqL6",
  "key35": "63vcoDEWFENYVGeyuydASBhatcLuC7Xyd5s3s6yqcXgfGnSQLvBTXNYdr7AV51NW69jM7zHhaCHut4V3zmwgiw7r",
  "key36": "hDfPHTM2X78jEcVT9oYi4TjsFWgYHjqVtC4QNCywj5KHCKHZYHDoJKpFuYsCWzn5zuSJTe47PXDrga3TxjdRjNi",
  "key37": "Ci2RyCj2SuhwAnvcSyNj4K4hy7HQxz3oNLaUWaH3N62GkPTruShdkwkabDYPi71t5zLRyxydCMR1tuEhfy5gkeu",
  "key38": "3AuyAgxpNHe6Breox3tjgPiCCJxDbk2YJKCTVrNBJgTdjLfEugQDz6P91sAbxjHXy2hnPZQ2mbomXZykj2uy5n4H",
  "key39": "636do5DmfBYPRncfcab1pmY993kEtgSDVhHeG6csUMUJx1AgWwfnB9SWgYkgrF4ALut7iZHTFgyU8PzLeyvE874Q",
  "key40": "36yZGV1MD5BcGSLGgmxcTdaD4yBhQuB4woG4JQAGJjCQJw4pJbSNnypbecDq9uPdowHHGh9etAgV3sh6ePogv3Sc",
  "key41": "4Z27Jr76dM9vEKdNuMXJYjGk96R5YkxUofQyTLbHLioEhxJG1GsitM14di4XqBsHmkiPafdgyGpNtukZGK4qkHJg",
  "key42": "33Xh3LQC1t9wPFd9G8vZr7qxzy6M8wSNih6Mr8yjpKBUrWczwCPVjQzQRZrH5MWBhD9ohGDhp31Gwn3WerNbzdG",
  "key43": "pRPZfgVeJsdCQU1JBa4A4nCLPWstaJ2ykDKWCY6fbQ8gGGKfpzoXfBKU6GVyhzkUXv5d8qJL7CPRDUd2caEzbKF",
  "key44": "2Q2vryumqoxs5uyJbYZdSnoLvtZpZ7CZEzunFGvbwudpKpZyKHpzoHWJY5b5gjEgxKRQEeg1ky5rWK9YjFTqpW7D",
  "key45": "4pNR9R1s4cQmHFYemKWqBKytJrCzLTjM5VcF5KwrA2UhecVptFdV9KeGvTd665zMFSHTpCf5W2pD82jHnUG184YV"
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
