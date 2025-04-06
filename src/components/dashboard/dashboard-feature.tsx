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
    "2LHXh7xWuBpBjdU1eWkpK5RtiWW12D5N9RDFsca4jRXSDHpNxQZ3t4ePFscJ7LSynb9335pmT7iQ3Jo3Npgiu3sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufbhfzaecFZHJmXyjN3zoge9WczuEqiSJiPCVqyPgDNPXvpzfEHBToic79n6WLz5XJMtuQkPQAT21rdxBNrijG2",
  "key1": "2NmwXJppac118Gik1Eogmew16Pk9oVXxs6JaKPCDJcd7EjvWghZgabMzENLQpjNWid2iSfdcy6wV4VcXrM37fZDV",
  "key2": "4GPmmpTnjAWK8qXpvcXyZd4cZimmF8mNGto3nmLPWxXpmkWhHKmd7CoE1A5wWmiQcdFzdwNTJCNzF8K8vC9Hs5hw",
  "key3": "4PFk6qBxFn3RRKTz87VwruRNAKQ2Kfshi5M4RxuYftJnZHbeupwLLWmQQ3ceCpchzC39ekh8rBreNBamu7YfHc71",
  "key4": "egp35UE88KJYWHqgDiyPyukwASnymLmcmSfL25KrGJCi3U7PTmP5VNtzHWXFPBxwKNCf1NakzGe39tVrshc94SK",
  "key5": "5D9uyeBwpcnT5hWpLnC1pviQ6xDhM3264HFgksHtV6vFkusPEVZ7GuCNJNa72gqwFy93TbnguNYA86afNGw3awqE",
  "key6": "4KQMqoKqfY8Rab6vFzFQPib1zEtz8TbBfQFxnhyfZ8gt531iCsChwmS4sZp4MCZv7niK6EpQPYpVGHM4AfiCUkS8",
  "key7": "26LYTNhhiuaxGAFYnSuc1YaywUPXJEdzbBD5CHgYKxU634YrjJHEt7SVVMcfceCj8MkGs1ioxMxPYFRJVh1y1Zf2",
  "key8": "5a7ss29eSBvanU8hGgmm51hmYZLWutAxstpACMCBGpEjyNYjKr2HBrpmxpoXw9xRnkC8qaybtvuG1FxeGNvvAYaZ",
  "key9": "3jCNY3YdsfrkbGw3W4YPHr6oFSUrLPCuxhkhxwqTuWJj66AfmvnnzxXaN2zKTWUhoNC1JWaYYRsmgPK6YseW3ZZ6",
  "key10": "YazxvAboLR3sDGXbLERNoHGWQSLXPYd5f98TF1uK5syZ4KmCpnvJPm8xETB42rhEPXnsTcWrq9vxZY28jrr5qdh",
  "key11": "5NFA7CTmLm88nd2sVUJ9PeuifaW5wv6tPEB86EMPSkJuZBwV7PrrBVJYy6ardumoSYa9yxJW4Av2KwRhLKNvBHNG",
  "key12": "5w7EvdMM7jAiyKRYJQ2PJQNoFPRAyX2Czsg4qjP636Qpy8KnXt2nvWnjxFSZ14pmsKLo8Fh7MuWchgfPiY8hoJ9K",
  "key13": "2ANx3FBUz9vqvMhEa5Vb6Hey79pL5HyravW2hHKw1xMuyiDNim1RQEAR84JADEVfxxMQD6MskNQ5dhfZAv4scqs1",
  "key14": "U6SvL7e8mC3D4dhxgNHpewaMa7FPJeMUG8VeQDXXKG2o8kFR2SsGsLt8mzF37ERVsZsvQBr7WAuMVrt7pRBuk7s",
  "key15": "3wuRFjYNoLjghfuGkamVX94bB4ShfLJyqHuuJVuWgJ18GW45UWP6c4YeGpZrw7KBb7N6YrtP3yjPraDFh8hgS36K",
  "key16": "5wUo43axmEmSBSCVr5N9pNwRPfp6LdfY24qHCYnCYPz6nS5skGWaevZ1JF1LcYh2LYeuVQtRDNB6QjKvf6o64wKN",
  "key17": "5fw9VyZSXHSw8RCWJvyHrpWFQqSz5FBvNEsraRRJKzwiMJqDUjb9oTPYtKQNqQroAR91AopdHDQZ4LmTY8fXa1Dz",
  "key18": "2nqTzKH611a7XqK9axVGGRbUnXRonBScNChgS8vCoMEGdvXvQjwRuvSKULtmAyXL7x8fKPVx5wz4eP7ckCnFwm7h",
  "key19": "3iCrtTzkcEk7ojCQdJde15pt4K3hTCrYSJKNeCFEg3zGQzxaGQfobTKqPC55eGEGFyMvQUsbAho1AsK1moWKtgeV",
  "key20": "4GCskXqY5mRe3ofPxhptVCQYZ91mKKA1y7FqRVHLtFxTQmK4VZZ8qhf6gXx7S1HSmM7iTLpARoA8vrV5gz7RWyGF",
  "key21": "46sqNf5i4ZSszsE65NvJNMV4zBekeTP46XaYWKJqg1E1umjWHEFxGCKKAF8fjtmGuQ5UXCsHrcGLxgD5cXMewDPh",
  "key22": "3rYsCR9vLkW1dQPjQCxAbz1ws4BNvbCmXAVJsii9WgpH9tf1jVw6LFbFsYCUNBmfnLtt6Z59E4pjjK5BAsap7v7c",
  "key23": "4Lh51P94bewv7S9PoVt4Ard9eC1EDp3WNyXY4KPRsjnEidR621zYgDW1Vyv5gcUQ7fgo5EzVVkRZVCUw5ghdWMJS",
  "key24": "dpTVYjgfQV2XKpXJ4Bb2yG2Hnf2K4ZARy63uKZcjvkErMnCb7ynYoAa6iiKqhk6EARgJT1UpVFnqoBLahUZVAUz",
  "key25": "GPyaqErbjGbf2FUbNN6P9ApMQ3tni9Nd1H2P8Fvy8q4fbjiryTjAYpQgEtMuSzCcjoNZE8MvmjA9VSovwCkAioG",
  "key26": "3qmgwFLbmULAoCgtrpXhgL32QT59avVKC3csJPpSCjVDhi5btnJMfzVN8CAZnorQs8yx4W2zrkSd5goq3JLK47tb",
  "key27": "4i8JSnzAQwMATsstkQup2cXRTPx7U7mw5T1mp5CMC2xiSTR23DpVKFJzWv6qce1kZc1A5uW29h3yDTbhncjvm5if",
  "key28": "5zd1v51XYUT86qGbFf4xNcFu4Nbk3G2ApcTwwphFHoDEGDdkAdw6gGkjnCHduPyaN77gn3PR8PtUXiyobfQGHnDW",
  "key29": "AfMD23zNeeFVyBGNSSURmxEh9oucnchVFpQU5c9ZUHTgY6Yqi2ipx6saYuWmnnHksNTH3St8dpoRMHGwXmveL1v",
  "key30": "4dr1vGu6g2cx6Nobi586FWd7LnSEAeZynmre1DuG8QZXVfdHUk7GkcVsbPYV6Jmen4GqxpyNAo4BsD4TisGDD6PZ",
  "key31": "2ERFMWKA3n74ujB1QdCm5U5KVAhUcx1ppLrh2xRj1ydccAHwrRBTYfJVptEih8FGqeQU2NhphtR3BSVJS3hSTwbP",
  "key32": "zWvR1i8kTpodeZmCeoNf6JZrk8nxjSGYKgsdDYS61wvnsStbEcEdmXXkRjMb8PVzvrEGQ259jGPHWBF8ANkENKm",
  "key33": "2g8ifsUPi84WtPHbwc5xeFgSvbTPeSGGrozTq9Kz1VTomLuF3RoCa8tLWvezP47tXaL85UnVeeBrHhyo1LLvVZaf",
  "key34": "2hMYLvVW1kosx2S6ZtozzDjqWvASXMkurey1gG3vxYyz4emtRxom95HmoWoWD2QAqFf4SkmAX6X9kak1xh2F9926",
  "key35": "3buDwCKrY1xztUEDkwAUDobz1Hmy4Krqz3qj9LeScGkmi12t76A2dBVrgBpnxeKoYuKmjgyfApNoacG8w5qGjKkz",
  "key36": "2E8sKeWamW7JUE7ssvxSUYHx9DLGc7UMtqH7sKqNPdcEbizd4v1Rrt3AH9WMWTrdfU8ubBCwqz7AcU9w2w76SCBW",
  "key37": "2GiooJN6BiXQxxYVpAqpMMcubG5jndPtv7jpuQaq39YEkDJDokCD4d1HLhnW7LRSGwKeiYW5KzzNbB2Q1FYttNc2",
  "key38": "4FwZTmZ9YfE8tpbDGYZQS6ssNq1jiGzag3YzdgKBouWyco8sNtierWPsR9c4yYgaNzEK3ZffScwBjzU7rtGJo1Pv"
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
