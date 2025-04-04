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
    "4MRkpmrBR1i3Kez2WiMoqR3mjABn8Yg1cFn6u3D5rvTRFJbe8jSCqgArycxNsJQMCKT3qSkvPBRQXNvryddNNhfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5Jc1zAGjJ9N6WKKFjBvXT2VqSUBDVto8kseaA8s9K3a85XERpTWZWh9rGeSgXJQcgu5GyW3dW2MrjiaYKUMYpa",
  "key1": "3AAU3KZ2xZgS2A8KTqyrLn9cLm1Yv5vybYBTFY9SFNKu9q35phyd6rjGXvNhZyGMqLspdovF6yzpLY1xwAN5ER14",
  "key2": "5R3PajWybD5Nm4wYzU1H5rs28M11vjFBdv4Ff2teYA89ikVqTeUJHepYFifC1ZE96WUhhcE1mibaZ6DBModK9orv",
  "key3": "2UkkH5kqAVc9oP1Nkzizrs2VX2k9bTEC3rQkBduT8ufZjPrRxDGqvrkB1e4hmrE9QAtn4jsU2b5vuywEkLdY6Rc2",
  "key4": "44E1okWQbXHjwvG9rKSLvS31nZC3V6Ef4r5mssEHNNU6gm9hbm1Rx7MrpBZFz5kbYk6WCmyzPQ5WxdN4s9uaj84m",
  "key5": "5tS62zeuU8dvx7g5yYsmoUS7Uyxp8XskRQnw62FHpwFg1PD19vQ1V5dJZPQiQxcPtupdKzancH44vXQshQcBZaCc",
  "key6": "4uwaD5botRAaUAFGm8pwJZ3bgRoUiLvZQ7hi2Q8awpKdnjBLcFFw5Vq5riF7mW6XyZ8C841Ac44c2VbT5pxomrmd",
  "key7": "5HV5ngr4aHSojwfuwszvg4FQugUepjtgLwFxNVNzRbdyyaDBmPmz1Bzq7osb34kDyco6knw91MWBToMTjE3Jqah2",
  "key8": "4qhGGhD5Ht1w2WTHD6LjadAXnvvrbuhWX98zKkRr3URprVLCBFnUA8Lo65sZt8VeamiC7h4TSZGma5CeGrzUcSyQ",
  "key9": "25eNfvAcQYcVhgdKJGmHBxJH67PBDRi9h1d5CHzNqBy9pCJVHkse2Hzo6SuBj71vX4vueyQZLet5FGEF7Ud1ooLC",
  "key10": "id6YhUEWQSrRVVm7XSnLj4RrS1SDgPNgMGfWXjKYVtcnp9YgnbAwujRB5hG3EYGoPbn3KBfWkbS2AnYHwBPSsjX",
  "key11": "3SZAxR1NGdGrH9yanbcnzMXBpjoJXcwnrSSBc8qFReEEohT1d9bqzZhwRDZKC2twrtYNtCKGKy6nGXcB9HY2DxYp",
  "key12": "3rDbK3sLs5sR4TZJZKHoFtDYCbZzZbdADY7vrnhd8dFBU7TZHHLNjf6eDC2gsJtCL3yCR4TYFjuHWfYoaVjnGC2n",
  "key13": "2JmVHGJYVuzTfdJWdTXf3ceq3ct8DdzVoyzG58uAt47dZEX9QzcaYKQfhfvkdLWv5F6LhSzEsniMkxrgYeUz5ojS",
  "key14": "MAo7xvpam7JwRC1WyGdZ4qCFm6ZT4NB4oHdnQET3AVmo96mdb9VwUfuQNcvbnPME74hjqhagkQpA3HimUU5G8P4",
  "key15": "2sKVZ2QXZmW9bf7WvrGPNb2vR5CBDSFu2Ems8tsPU5LLbpXFni1ZiurN4JR2v6P4hh7npkndtQwBvgFmPZhcCTKw",
  "key16": "5ZSX5oanJHXkGPE6XdojJ6V7ssFbNK7B4rSWMPibGqE9ctNahXE66psyomHeJMwsCn3eDhm2cABa8L6GDJCVP3Cc",
  "key17": "2d2Lnyn97dgwZs7XkWg99tmSdqFxn9d3SsiZvG8kgoR7QLXRcAPmVNw9qNvyrPYaQmQwQ1m3rFEgPXSRWzfM4Re4",
  "key18": "scgpm18FkXsk9zrkAb4oLxsQxNbywJtRHR9rF1qRzAhtvvE48ek8jaqwS9CUdhuLjpQMznu1HUcaLPcDrLGZA5y",
  "key19": "Eh8jCUVkKYKJsf2sgZPcFFUucMoKNJXsxbFd2Vi5HMcmCJWcvA8jGzctZfJWv4qTKoXjsQgJZtap6HoNB7P4AcR",
  "key20": "5SSgMJJjLGQDkNQ7zix44kQrhTGbpBstVoqZWH5ixwacYJGbMg3uSPwpi56a2zRuaXkMMq4qdQyopcaBFcaQzoDM",
  "key21": "4PtdjHLrsRjhTLReuoJUGcMSHA3ekSZ6GAvdek6DrhBuU4wCrCG6PZ3qFVqnaCMbJNWndSn3RXRxjATNNmy6Jcan",
  "key22": "2N3Qgj9LAUuM2aRBp3NyWjMh296djJVTwZNLuppgnyX98p5tUxzxrSWV9TTatFDBQtw2a9khKKGMknzfZEHYnoBt",
  "key23": "5RDjBdWPzSFnWtrvA1qMVpE6NB6nLqUknGuAqNnV795HFydfypggFztL8NoHX5VSUSbXsXvQvV9ngJHNdzpGKHZR",
  "key24": "4xQWpfV4ibdmTBwAuXHEftjfYC7DUcBXbdQcuuaXhRp4PmsrjA9n9ommpBjQAuHFG8SVceH6wpvo9mPGcueCk5w2",
  "key25": "2XUAq3jMxN5t2sD9C7SDGwLCDVXrfcU6kZqpjbiaZTrEJa2XwUSBg7h55sDZLX2eR9HkFx4GGFBJ5deDnJCdr5bj",
  "key26": "2MRUa3HwjsBzyTmuoAcT5WmRZLDjH4FGe1HyX19uzYXYheqqSuSicWkATdB4qaqGGTnVhTiufVQNboPwMR1Y8FcU",
  "key27": "W9KCnx2iBs4FnAXCPuLigZCED63Y4hEdRiiZNDetgXSSrdimBcQdTEZwEvxWHk2JZbUgbFY1YbbBiAgjALYBrji",
  "key28": "5joWp86scdYRjKDC4tpdPo3sTn8riCsJ7DJxhKS6egXx5mX57r1ooQ4qPzgFQagV9dXUhW2vJLsidxVwQJDo6eUW",
  "key29": "qbyHmNt3dB7kwZX9ubKBg7LLjyHVSWSdActFuCRQ9beXZNRz8s8Yf2c25aRT6hCPa1jH48tS1wRo6PdErZJTfVL",
  "key30": "2LkVwsM8ikoa3rVK8AhitqGLM21MRmGvbDVg6iHwvzidn8s2t1Sfs6E8RXuntQKfDwg92CmUhs8XD7gH9gU2V2qG",
  "key31": "5uRac1CCxR4fbcUnTsLGWg6WyGwJH23YN1feC6QtED9an31MyiZ6b8dYhZKTiNm5tdj148rWbnbQ1xnRqiDEZsbk",
  "key32": "cb9ipM8M4gSMYB5Xh3T4T2g6rTTpzXvQSYCZCvrCsFCgRksz4To4kYhHEEsJgpBUU8GLgatoG2HhHEEv9KFtRao",
  "key33": "4zdy3jERiBo3TDRpHDeY9kWczud8x2TjsVSsg9y5sjGkdA1eg8a1q5hQx9iPNxeh44msNb8MGrRFcnTxUvd3YD7N",
  "key34": "2GmuaT4UFDhMy1EEHVeKeVJ22n9q3u66DWtqT9YM6hg95LKNiN7aeJ3owa42gFXtYwY1qPiJrXcFBjpMRMx1nLmm",
  "key35": "5XiCdgtDRgAH1mV6WJnvko3ZhqaodxAQ4XjWkaukTMtCRfhKBNXqjKSHQJAWj6TXC2QAbRkRTk88t1m4qnYgJ9se",
  "key36": "3HPjna1qnaZxMobuzqZw9i48ir1VFk7XStXdS3zXD4z5SHgHSUfDHipvLBscasTQijB58UrGbspEU6zGNUDW4KSi",
  "key37": "64g87kUkE6TisSYdhpSpVwcbNxvKtUbVADjMWFT1YmHEj4jiaJd2SnECvoK5bj2MwUGBgXdQV5Ek5WNSLuxWsDk8",
  "key38": "5HJ3Mfpuaz72QSNsvcZJNXdkHNeLCKDMgCULsr4MVfBZ51bLfEK7NDsfrM7sDtoAgDJkSNceeGvX4mj4CjFecUSc"
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
