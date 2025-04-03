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
    "2yz4EmbSnmkeUcGSLFWsB5NF2a7Eks576rxGWbHNcLd5bTuEhfrcbDrvgF5n27brbJi5rgSExW6fRuNc7NYPqsqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLMprSZTqb1sNxFbtHxqEqzVzRFnTvtcgz5jV7PTJkfZ7nQ4mwkjk3oaALZLeExyW3qwRy9ewXJTgchqwVGBscx",
  "key1": "4z8rxZZ4w7XiFxWuVWkvbvLDWNe9ypGmpBVxMdH7W2dkdRvf9zNMdS5A7BHDqv49wTM2FKinaqErSKXyvA6chF5V",
  "key2": "2HHcdiQTJEG59XHJMpHfFrzcc4UwqhxGATUH6Eroo9kEyQyuVG34r6rvnuZbj4fZhUeWKD1Z8gAuz2zwWP9c8RqW",
  "key3": "2gSaYY2z4XYHPrP9haWN94gYh9f2sFyuVNcGYyF99moAEEi5qsVzxvFjx7AKsZAXeKvhvZFWWW6vAb1LQvZTiPAL",
  "key4": "2dBrXSmQpQtWPJ91B2UsuYsi4JWCnqWWkTtTPZczKVS3uh5KUc6VKMzpjrVfXwx2E2uKzAko4b6TSUMpvGEYB8sL",
  "key5": "5TaEDiMuwf1auPXECBx8QDn1KBtdxvbuDjdSFMzBBTZiPJG1cz8YLdKTmHCMxqmvGbQ1fgEypsnj3T5dVoP2b3UA",
  "key6": "5556DZHjtH292BWzaemGLzEYmPLFyU6vZ3noH4T1YDbY92bso6aPXLTLoKk2oZDaJ7DdMwVauFTYdekmmG5UDBjr",
  "key7": "4iWSy5tPKa6ZpQqmH6GaKyMSrJ4euuTjz6uWnoH3kFAZEevesbS6byT41DGPoufV1CcDDU5NaEjepaw2YbU118M3",
  "key8": "2Yb7UFoaNYBm8zdZwpn2JN1UH4yDT1YTK78GtDSWic75usSridbEj3yuWrFSeYTSJjj8fLLKzvzAydTcodBepPwV",
  "key9": "DTenpwPZ8wr4VYwJmXhroqzuvt6LoFKyxH8xRwHPCyy8Dr4JNxDVSaUB6XviFKGn2w2zFSAbnkFBCqGaVF1jJZj",
  "key10": "3mDknNcnGha3K2FiFqqNCXCSG97b6E7UPtkGyvHkwyn3BquUxhPmGnZLKNzhVFffZdRRkzf3JvoxVUPV6U53F1yL",
  "key11": "5ENmMNCANmNXexywjGshxemSVuHvC7MNEPR6yuJik1CEAsPiJVZQEpaq1GvcV9zGLvL8WBD2a6DWJ5maZRHsmz3m",
  "key12": "3NtLEA9mWFgKbt8DD8gE7SexVeD2GRpgYZcTkzpRSy2MX14YXzVBPNwG8d7udX3D5pMu8FP5Nerk8WuubXqwkTq8",
  "key13": "2Um2hKbUiXuMJJiLhXQf6vamoxjp9Xr3jRsLEoeqhb9D87ooRF5qU4LfD8yoXPrrMM7XWDtQsxxjQs69vqLSEkdB",
  "key14": "3RdokPTessJMqsHvjvNHiVznHtUDHAbpEKgvMue5xZdXNptEqrtPbAWouTSv1odjf9mW4hmq66ukq5Jznn94m2uA",
  "key15": "acKnBGSwzi7aUbeEz29CwrgGwgZAV7rKXzg6LBixDz2Nmv6qVD8Uqob9gRRE7kCR2F9nmifgMKC2FYMuNXYHs4z",
  "key16": "4JaMYqbQVUCAGwoVJn31eAS5N9fcsLa15pHKZRFny339qLKmJjAuvqBLC42pxA898NwFuFeEUJBbx6Cu66LfaQN8",
  "key17": "2EQtZH1sg2zNYycG1VRWkaJTHQonudmSA2apvdP1iQVZuGoLsDBrB5MArGDZd76DKLEVUWUm4hwwp1AtMz6qxpJP",
  "key18": "244Cu1EbR2WiA4EqwEKNm5iYvC46W7eSrrWQVfoykTTnA9R7XPPboM7BzMKMpgbhEdA5Pq7ncoHNMzR1NHe57i1W",
  "key19": "2KE9YpDyHBMoW9UfQ9vatZ16jx8GeRFSYREgS6mDGWeSYeGzkBYWC7xmheRaFtQy9DqdEZupN8e8KFEjaG4N687j",
  "key20": "KuxUBHeBkNTyw2vD5w4dYyTZF39fDAbn1XtiLrweUarby1vqp5wVLgubAGHQKw2PSDjBErub95SDj3ePPyeji2w",
  "key21": "3TiawrhtvLLujp4wqN4om19EJVWFfqZqRRmXZCeqN7BJ8kmLrXZkK36W9sTWK61Pw52256Y7Zbi1qcHcL5W2BWfQ",
  "key22": "GGU8rXEg9aF5NhLtwwdCQ9k2Xn39wHvCGJJJPPkvQWpXCtrhCsbqNFYtPvH73Kveox3FESgEvzW46SZWsJB5MJp",
  "key23": "5owL7QiNJJe4V4xkFwVWujpRupukzDLFMLzsQrC9jzczHmBER2zfNkt5eZsQBm4YtAP1S4D9Hkk9ELShEfYhHoN5",
  "key24": "3ughusHTCurtL9oRqsjaKkrguY2SDp9XEujbbmvJgVrg2GzVUJ2nZi1zL3ks2qh8gBttjj5RiGeSXdwPXji5qdMr",
  "key25": "2RUCjp5VMbtdq3fVHX2zfzf9txHwaicKsQaNRu3yMPrQ6zXt8pUx5Tsvfii9xr9eYWLUCoXoh9K9PM2DrrLEBWnz",
  "key26": "4ZifTVzPGPyUtMdWMj5pCMzYzLZA1wvMneSbayZrhcbjcKFMMikNhLUr8EufDPDZ6C3kjZYdcFDdtqe6J7ctTUYV",
  "key27": "44TvUAvsKPLbgi9e4Gu21fCduqmuWx2oq6zzvjv5sz1WRFRjpaQb7DCqSN974fPfZ2TgG8Ce2wGrHLZKWQdW9KVm",
  "key28": "GgwCwabs8EnfQZ9h1Ada6k9qdUCANhfPFkzBZQSRUPvbfMVGcs7mwUVSxMujdV9izaWLFBicQJTdpSDCUeMB7QU",
  "key29": "5s9uyLppLAX2WEqTBrBCHPP1jgx1YL1RaG1TQbr3L8pZbh4oDmJSLBUqPB3URE8rNDj6Ru8carM4f947zV1Xm4uy",
  "key30": "3C5q5NCFTwdvhnFMqGHQ4HrgCKs49jVHtk3T28g9KoWQ6Jd4DBzaGCb9yfqcFxPbgHNqdgjY6wzxvLDAySxGayR7",
  "key31": "qFfedF6uHKsnerwE6b37rmNmKnFihk1NDodjkgjqEoEZupqSnxaGVfDRqanuFgT37GuPcZv5522RvEPnmzgDvKA",
  "key32": "2Y8Z8cGcWxQPRz7mN1iRxfuXiVEE6w35u3eLAthfdmnLy5jjjavU7HqVRHpJH1BjmNnaks7pTnjdgxxRHedFh7i3",
  "key33": "5itbDgP6usDxvo2W2L5bpqXmusgu4gbBHJW8Ddn7BBy6tNvxMEvBj7nKZA5ABeqDADEqr3Ssmq7VTYmhAmRiyJrh",
  "key34": "62pjgYp4527gCEB5abhEBVdpdPDTfPWHoomnbbgaTRRNWj9ZGCER12n9rnFpeE2HzWh5pYa3p9jfb8vkSfRmRLhi",
  "key35": "2LrtGHmDwLAMavNKRpW3jNd3MxL73Dxk7afLAPi8cLY5r3qmPhYNRMfqyLJTfgRJynzqPbmmicn6EX43UmnUgo2X",
  "key36": "5DR5M9Hi7q4fK8nijE52f1P7rKTqAqCfeUREfzC6nysfcYcpnjywpS7A6K918DHKDZefptSS37w6iRsqGraFyusd",
  "key37": "phFVa1jrv6P5p8rfE673b8zD8zXowHW4spHFq4CuJC1xbAj8rGZ5kJHz2zTx7pSkzfevK2BJtG8hXzjjQx9ZABr",
  "key38": "3ccnydVtjvUYir6S6nGomN4ryNPvtxQnFWcaWrGFKVuVbCNFCQ1A7HeQ6RGnHMQKPBP9fbP4PcAMQmMCtZ8fXLBK",
  "key39": "4riVC2RhwejS2PBmrtQ7r71qrebkDsMaeaBfFk9RExtR9k9mMrpVS5RtuqYd9HPJC44dXvLWSVwYZSKwFs21zx5s",
  "key40": "5Uyu8aykVMR9adnedzH5Ptk4ZpUKS2ZjzD7vZy9qx3JHsgQiRUNfW1Wcsv8D4rFQ2hqX6RmMbQMyNGwCyaKW7GFi",
  "key41": "4m8vuvirNptrDKaCyKJry6Xp26y6hLMzUVfN6eNXgwPHfAcXYSTqaErBMWCwVsUWTRdUXegSeuZxwq49f9d4cut8"
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
