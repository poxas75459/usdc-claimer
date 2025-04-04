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
    "4Tmq2c31kykJ4UU7oimXDuhSKG85CFyxim5CzftK198WER9uBczqzVJeKL4XVhEx12QrtNVRRNkA23vzLD4tJUV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "thXvUZGMCiYivUZYh9mW4RQdsACQwspCrjVC3DFK2peyvhTT9PgRBUa56A3q3M6tHrqRwTuNPMSzw3eSpZdnipU",
  "key1": "5qVtmXwe1AgaVpD71vK4h3UNmAp4SW3kXaeCewLBXEDw84P8Dk9aCHynLuL3TisCrTn9FGaV3sJSF7M9yrn3UA72",
  "key2": "2ebxcvHv4rNXhCAA57ocryVrpFMG74L7bZViT8NMge6jEQVUPEJbvggwdr4uNBy3oDuSjR3gop3s3HqQW2LZuVK2",
  "key3": "znQJobi5cGtim97NnyPHmiPkszErCJcdrmWAU9rsvdiKQuyz9sccmhnRujZQovDct5tAm3mcHGPCN7UGraWnQ18",
  "key4": "4rEC3BmuiVwLvp59yrLsnoupVgECY8crNizWQHkMYuay3B39JBRPW5xw5xLEWsK6aRarjHJNbT9RH1Bi5PzSgpCk",
  "key5": "3FtDitpZqx73M4ZkdmCkoy47iRCL7iwwrHP63GfdEizx1QXsqF5bU9Lsc474XKKq7V5ftBGpAxXeEmHjRhKQRpcT",
  "key6": "jzX5WRtXVLXvytSJWErCto7RjfGt2NUVDKaqZzmnByXFUeq4eduAJxWf5j39S8zVQPtwKy8tD6kAfYAarjibYsN",
  "key7": "3iG7xreF1n6rA6716jPbme8yyusoR65RobBYTpcbbAbZ6xeG8YQxqN4xDJ9FaRzHUshiXdh26oGj1ybebGTaYdXm",
  "key8": "yDHhMYMwtQDxqPbwzu2cmdiS2jZAiWiDB388GNr2zjkpigxxAzT3Rw4MTEvJPgTWUtXksVXxVyYDdQ1UBMUdqR3",
  "key9": "2egrHozpDMg3NbVtt27W9zsQV2vqG8A7tPRXSTvtSF4fwTusBc8w5buCtMP8b9dhCoDnkgYPueHBc7cnatFrfUb4",
  "key10": "645rNZHcuD4biBK9QRMSMQDbfDF5XHSX9H63HPAqKnHYbKuYPSVFgNNZgnUdtiXDAdKBDchb95SUB3vjo2taJr5w",
  "key11": "48HXkrbvGqwXgEHAxmfnKxfjYK4mir45trPWDkPpcQC97TpzkXV8rwYraXs188dWTSdYAoq4UfZadov9hkBRcYW",
  "key12": "5rqcxAbs6v7KoJkcWv3DY22hHudLhyVmPu3KUU7rVgQHFtYTT2gzHiMRxnN569e21Kra1fv8JYRMjSioEo5QQL4Y",
  "key13": "3K6K2XktQD5y27gEsYMghrQDQpG6hMvzeP2ZVFVH8kEfVd5uR9mjvt4RchAxxVGXVAZ8KX6K2sxpr51Hpzw1Rjzq",
  "key14": "vHeiNMcodAyno38YVmuZP9zYnwR4T4QgA3stcusVNw7S6W9Q1ofcVcDJBgvA3s3WWbmqBnTEaksNa1XZmxiWXHV",
  "key15": "5XXcwxD8K6xsHL3a8neW6iDX6CKHbovFom2ciqMhiij4f5MatEBjHzdutbFMguXLkS3rs31jq7UmCidfjQL4XeuC",
  "key16": "2hqv7Uh3pxSFrvW8zUiJ7CxrXLGDE86Sg3Z5Hz3cQMsSc6hAgfdgM4X6VMTkSrddaavq2pwhJDBAkpAUJMHby8cJ",
  "key17": "257CiDHwFjGNjqduzX75KytUnNihL6bCdiKSDheNcMnRisndRdsKDJYj6v8ARwzkX3roJfNJZo8ZyhXtp2BwbSN9",
  "key18": "4kiwtuLDjrXWqDUAFRGZz4GxX13S2nEKCSZSwUzCf9JrzDkg6idiWkKnW5MTiQfy2sWxTsaQkmfBFKQxbW2HDwrd",
  "key19": "qrEMWhJXRG1dkfwwM35feudF6SToQ6jssD9BiYAbTxaMygWQEV7LFycsQfryHsjE9A7mJMztMrN1MzDN6HF2BTU",
  "key20": "4Q7PZj3MrpvDFyVTUSFfq9BMPkq97w3QcCdn5Zv1WNGRsefQxfLsfVu26mYAto4cBsDitD5QBZcUYotNfkFTKCZ",
  "key21": "5nUer68nQMwNo7q86HfVKrrK7yg1ZEvF3RZTnkYVaChCTRVzxiY4xnSBHWGa8iFzFmahQCjUd4PevmDzqu1EymsG",
  "key22": "kHoVnx3HHEKpwGb2JJEKbco4xuwpRE1FCNRYeb7rHuvcCZE5ewK9mqWiWua36kUKkKnpzTsESJ4mshLKmj9SCoo",
  "key23": "4BiEYnLT24e2L538iVB7EN4TTnu7e44e937R71KZmF7EXozfCYwFCrQ5pJiBetGG41EGabemg31JVpHCM9KiD4AN",
  "key24": "GjLSAK4GKu42KTFVnjZcZhVoxtQ9hCHQ736Bfd5yAGQJCXVobwtKL8xL3BJ2wtB3nkT8EFu7TenqdJEVYSBpbsD",
  "key25": "2qacTD3hMdfhhKuLtuSPHifp8SszEj6d97h7WbwCoPx4FdPP75pF1m5VdmZyKivFmWPBJPdGeMgwPPwezeQGnq17",
  "key26": "X8hJkbsuZ4GpUx7Lq5MMrQrhERi5m5ZRYahX2DiGs7qn3wPrafSLsKCzwoGnX5iZ9uCs9xNrbfakDD99pgXiNSr",
  "key27": "3cQF6sySXEWo3jdCKgbv6QjXdPAcj1v2dMeGmz5pYbBgeoTcd2mbctdsGdLfM5FoKXQK1vBuo43zVk9BVWscaswE",
  "key28": "5tM9F3P5j8yr8wpVtmJEN6ApZXX8NeN8cqb225tSvNF4mkm7332SjpKWja6w2vn7VafhJQCtLhVStastUfQN7g8K",
  "key29": "2944aAcZupJx26mgCqE6KwLRSDATDPQ1TZnhwtXciiVCsN4KtcyGgAL8V1ZtmDvrqnW5fuaVM5e7bSwHjFZRzkgf",
  "key30": "5gCgFwxgbwvFswxvKeotTb5ban71Rce3BV8CZYAKwKSReGAhYxW8W2UFv4RHLEiGDPWmHahZs8AXUgsWGQibVFqh",
  "key31": "YLALTJQY7iLu1vTnY6kH99kgyeL6juqNnJUofGtRhWRUJPVWM6B6j29Xdr88GtuBVfK3rCKEs844mFy1fBcMnf9",
  "key32": "2Ym9rzhP2rHJoNTnjD2xVXFzY7etqB87LnPcNodsHPMH7Z2j3nXJuCoPqJFerVoSkTkwL1LQ2fmJfztHsGiLnML3",
  "key33": "4S2wKWjguFwqoWG2gqZ46eiC42VJ1AS69Wt7TgxBdBd9A6yTMn3LtBHzPmHFXB3yLidQ9ke1mGKwqndGSc9rqa44",
  "key34": "3T9tDBqgELMtGHX78vVB1YGYXHraQZ9Sb3VsAarBQVFkRSxJYggFkCZSd7sDmhqKVq5WtG7gjLDfbANdL3P27kQE",
  "key35": "4TrSEzv8Q7eZ1Sqhd8gW7LtCzdrExngXriaa26pWVLqQcf7GWDiey5ZmZ6yC3dccRi9XBX3L9JpQXtHjnCQiUpsg",
  "key36": "V2QmjdReobm9Z23skvbQ1L2TVYvEkitJedxaY7mgaTom9GE5LTWvgxS1FRs8UqBzAVvXm4QmgTzqAh3HXtVTSNP"
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
