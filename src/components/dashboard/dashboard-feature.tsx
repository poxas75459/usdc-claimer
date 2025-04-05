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
    "3kkmTx2j2JsQoEnqgXzhmvTa2TTbzdFz17zgYQ49w8mkzPJKEj49PBs3bvaFXbuKrwM3kynpHGrC3dZ248xTrzmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s28kMbYGmQjvY9vB9bYcVjnJBW6HKPZUAD3m3LV2gCNJTJNYeNyEET2kTZbZbiGNNoYCKssg5HVtc3ifmPXVjUz",
  "key1": "5i1Fe49h3ZvCVoMGhnRomKcGBXJxfjVcuXeaQ2bT4CCRqcc8Eqwtc5kp4mndS29udApDd6vX1NxtbH91bjT6LMPW",
  "key2": "3KewRxhvFPKGipC7ZZWh3VpCdDY1EEHDWhEGmSyZ2UTwxNeHqJCMyx9cxBkb5Gz7kbPUM7rD4rZHUmEJRzFcD1BD",
  "key3": "3XaJNE3ES9ZxesyRfEz1SB8xPJd9F8CqWZpTKe1sdKv4WCbgoDhaeYNNpxRmqYx8V23vt4VXxb4QVEaAAh29DSf6",
  "key4": "4VXYvmpQu2VPNH3TPRJZYsozen9bVjrYtkxoHFPPvADgYK3N5Z3jtSkVU5fr4VqEavuhCtLoheJdHgC9TW7zS66i",
  "key5": "2ebU9VSTQMgBvrZvZ85QjYfJftSUb9f5bN6ZWKpcb2pVwEqVMQhn1TYWCYLqwrtMgPN9cSW1P7mTLqA7JufVWt1E",
  "key6": "25LW92QiSy6SddozA42PtbZdvaGbW3qTuUTUeRxtqZqfkJ9o4pPJaFYQNfqFq3vyxEcjmo3PRY7DrxKEe62ApFvd",
  "key7": "4Kf1L5eRdzB7RoVWG1bYXrAejZQ79puNT7BQEwt1tJpYtke35innH2aMaEpSF2gUGaFqqgSAfsrkrDXVmffXfVT8",
  "key8": "5eGb6wkCvD1kCDsk6Y1PvsKB8YgpRtnbSfk7jBz5Kx6i8iWJeiAT9uJzkdfZwYN8AUWQ3Ec7fvG9N7VPieotitCH",
  "key9": "qcaByhaAKekQJktHkVyetzuRrXZeF9S3uEw3V39fWR6UFNh9SaobLzAMkwpH9sk2kqi18Db2xY2MWd96bPbWVcK",
  "key10": "2dBU49KMeorjZnTbtNt9biQrAA5aEqVQXBK7GmcdhVNeSMMRxGWgsdqzHHpR9XJmSkuzCWdab4pYPido3zLp8GJt",
  "key11": "2icxhJEBX4qNchwMMGGWtJM1U5kuVLXKGDMRtV8ycW4aozLh5Mvtm8rEQfW7Mdh34BBaRXLJYUCwddPZ1E6c1cN9",
  "key12": "3yTG1NMtEiREBwEhVQwfiqs3sKVftjxcfYzsZDCKpsgAzs8QcmEe4Ts2jesaEKhVDS4dKgfDdZkf9HQQHKfgmd66",
  "key13": "3kGLc8bBMSKPmWhxti1qsb9oDWr22MJVijjZMXNrct2JAaXyjevoBJWApBJpd2B76zC6fooMUwMj86gCURaZxvnL",
  "key14": "5JtCvN8Umd9ZRH1VvHPfWDQdpGgFS66vce6bKup8v6er6Jrx6xsAShf1MZvnfdk5mpUD7rkheFRftk5Hcy6deCgN",
  "key15": "5f4yt7s6AP38ySrerJPi5rUhJksGzUpQhPw53comZ7souHmfmUDaRUJRezWCzci3gzcU6MNct2Xuw4hXaoUvwfan",
  "key16": "4dnHVwjSmcebBBXmBBaYW9Coi325vz8tXanEhqLncrnUQAiHGskbzaanffRe9qytMXsHDgDdmDTDGiUdGuGwhP6G",
  "key17": "2Yfedc2WY4TX79kgY7r5RULTzySZa7W6uXma7ER9bJabSU455mPYhJVo8qmfGPaJh3JxZgzWeg4UNDgfkwWW5XkP",
  "key18": "2CnUNgn8XPz2tARTv57dKsDi4v9PT3VNFk5M7kPuVEz1jySNujAbhRHLdHBEiYJMHubU16y1HhdwfxK8xYrKJZKe",
  "key19": "2r9QdEdCUVwG2wtNReL8nKo2NA1k2b4F1J21oUbTuTPnxgChS61nnbcDujcwnsbXGmj7f2ywuDYEX9Nu39ZjMT7u",
  "key20": "5HfFL7QCqG9dg9aBhEjSkWuNYuzbSUcX1NxntGJAN6xC8Mvp3jR57yMki37cntFYH7e7k1d9TpgLrTnKMZhcu6H6",
  "key21": "5PYp9Zmh4xKBWuLA7t17tM6CytXVGLkwHnr1MLkgBoHgyJfuoCYFSTX8b8bsoFXSbkpWdvytFRBswe2piVttGHAg",
  "key22": "3Amg83Zg2GWSwRjVHRLAjTPrVsf6V8pqB54wZCKp3siaA6KzGTn6RMHciWhaL58JP787TYeQhg1wFevGbB87QSD4",
  "key23": "5Phb97smJaNzjaaxrtVS7U2vqDjPPkSe9S6qddUrwSYaRX96HQPQHco2CikeXjdNEUGxdAkM8qKoHnz2iQjpwNQx",
  "key24": "2uwt3X49rbgqPt9wc74s1WoXbYAPcFW1S1yJVNoDu1tdkRpdGqkWEdGE1RZbHSjW6ZnYKN5nvtRwCg1ZzSXTjmoU",
  "key25": "4Z7fPtisis6EbvMJoceqQk6bH8Q3pa7Q8xgn4fsHqc9L2sWMeC1JETtXKiADH4AGib6c5vKkLsKtp1ZVesrvbpbA",
  "key26": "4NhJ18xFCQcDGCrtSvsrm7u9JKESvw4rBngG6u1fntkp9me2MM3mn4ytGyrGwddFNERUHKsaZFfUyTaadAuHcpx",
  "key27": "DQBAVNH71MDxG6FoGjGqWgVHutfUeq6F2VhV2BhUwS7ixC13KWo7us5CSCQzrdqXc9wSQcNGByrkVAWJbjoBWc1",
  "key28": "28KES7rpUvcUtAbdmb7VC2fhtRN8qH67JE5TjUbELhB9yxxsqfkN3LHPBGAdjuqnHCat9SrSzd6P2u5nrp24bGgA",
  "key29": "2SPbmKMjqowJyqDjwu5Wxa6bb7nR8xd3LnzDECnWHhq7MxiVMmdmweN2nPGao82PwVFwDJ39JAvpS4ab6VwmJX4z",
  "key30": "2CvzbBMMxxfA8o6BCcfNKP2qGB89A2F4C9HJbW5VR3oixnWTD1piHCJoRzUEkgEBZ4rEs8z4pba2sDN3QdG8unNE",
  "key31": "e96qNio4TcEYVnvSq9k6t8tREiJJuA8dyoGXUpRU89yfLPyR1eBHXSFoL1uNzpBFn8xmeibrwXuysbhfYsy5Sf7",
  "key32": "4TyJwd1s8sPLgx6fuAFrG2ULLyobKAJkRH5W1RVjta2EZLgTszGjjQeD5Sj2o8R6R2Tci3DgPg95d71KbAQE1YEG"
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
