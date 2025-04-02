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
    "2bUni82CE6yxkMzN9WYxy7B4b8Qudowi4V3ZzNxVsfsz371uE8QzMVcjrEFeKrCzVu5bCZe5kU7d8tCYVDzqHwZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJHnSQAGhfy1G7x5hhLjaqQPGjv86t9mXTL7pQMSzGYKDEspeUhKAe2m4zrSGtAE4fT4oMu5uppEwi2ms5QSxDE",
  "key1": "cH2X1b8h4YpmhE7YTq82sdqWhgM2E9sGsEUrduGvyWvSaTYz77MFEzyYwmXbn36Aqfnd5BCukKha7ppz6Wn99Bt",
  "key2": "5g84pHD3SJLiVJvYVVebMqkhvnipmjT3nTWDgdMJnnUJzebT8y6ruLfcoGdHcJdc7yYmEgUAUc3pL1CEy6Q8pvS5",
  "key3": "2idUogvcyW8u4z7Cg4EjDGomxrCgaeH8iDeUWpQ54wsGdKVkaT9ABJpJw6ihuG6955r8Y7UnYXdK4hMCChCHnBng",
  "key4": "4qxhCxNAMaWNPHfUEJrywbTAWTWmAKbhDS44uYeQW81rzkwEjWfzVEesQWwK4J9Q1ddFTAyMmi6XY9TLcrtbJb1C",
  "key5": "5jxdWLWWMjPhu7G6XAPXY5RNv1UwrDNc5wmeCEjp4KHd3xcRAZkk2LDJy3ZHKFGhvH5hw8vkaVYshBjKrs7eZrV6",
  "key6": "3ib1s7i6GjFWRVRyuyt37xjSTUttDSHqdDuXJ9pHH4GixJ12aavNW998hLHT64TF5BYPxjrryfZZJZv5m6Hnc4FP",
  "key7": "2SmRYBcVazG4UwZ9VUxb2TtXPR9NqFqovgwE3dVBbdePZtLvCiGcE8ERsXJh3Kw2ZAfLSp6ENRcsUCHczpFwwEU3",
  "key8": "2t7AXc4vpuYe5xrZLdLj22SBYPpdsiJsDpCgUWep2UdBnyixfLcH4XUDZq6wwz9q7V3U1RFgFgduRbcHrCicjB3d",
  "key9": "BXAxxPEk1H9JhJC1dxJAzTweTa6w2jvFMKocojdvwTnr88WUoHyV6hc8RkomKrZTWxcNQ3ASR6LBm8iWRQczUu7",
  "key10": "4dnoUZakw7xHEJJn8e4jwMjJhoWqDQgVcmaCPgW6HbNyMY5Jxv3rpPvJZoLAZEM4QXZJhouo2cxeMbT3WEwABeJG",
  "key11": "4A5oRhr8Qn6UTfDJaCGNdGnFNRYTFciepetNXTA4FF9BCb4ARXGEP2TdAHuGHuLU9qgPEvfoNiweqoGJmT9ok5mP",
  "key12": "3kovP4o2gKRB5hTpPKwB7Nf7SYh9c7UNwPZJbK2DXqehozpemVRvJi4E9PW5yWWLHh3C73RkXmunncxiyUYQ5zXq",
  "key13": "4srJ7xfcZFaTVnga2J8CoHKdP5VJN5Dv5dAS3xa9tuSUiEUXR8jcipTGo7dMuggeVAJeq8FyNrDewMq7zmKr5Hmf",
  "key14": "4q7opWWq4MUexnvzpt2932DK3auoFK2sa5dn6obw7QqiZrMFTKL9bNFuU5rtPE9UYCX6jDVvorUAntMktu18ppQP",
  "key15": "3W9ASDfSFCxhE12DKaALPnTYy9vinPrtwjKrLeGCbKc4tUZivoAMbu2wK8gWh6BiQPiLigLYyDWjL1Vwq6w7QtV1",
  "key16": "3EPZNos8UgMuMUSddRwQys59fwVe4hvydv8KLvLB2aMC7YJoaUkcrJQfV8HwUoMw3EGvoxzz5M79u53nMV4tcHno",
  "key17": "3RkzzgRkwUr9gN8cZuMcQA5Jbh15R7RpCr8ZjxrUNv5Gw1DdASXgaS6DHKCR14ULkQQ6374RXzQYwBsSY3mRBcUn",
  "key18": "2FPsykrW5ozmsxQkRpfMmedhfy4TwVyuRedCiwwRV4XjK9FPypP491DT4cQe7jqyzNozZtE6zodtGp7vXQC1b738",
  "key19": "4D1pbtyf1RbDDgsBJ67Wgd6RnP2DB8wDKcg2VXrq1cwaNB6JoqP57zDCVYj59BzcXbdcWuoTa1Ezd8K26FnSmL8m",
  "key20": "4rXYAkigbG8XumSooEGwsph8PcHMGvczmcM3bFK7i6KDEmQJ9VhnfSZi3VV1escFfBLGppfDp93h5sryjZW9pfLe",
  "key21": "JNz7ZWxp35sT7h9vF8dLzuAGdogcJ2WXNix7x4KbUXjGshr8p29XUcUhf1z41tjApuTnZARAZm583PGwWjSFzWN",
  "key22": "3BSuzX1NctAoMYfR9oHXh5Y7BKiySXcmKihPkvLERCRU3McjPTDGeudJg4RN6oWCjeYspVRsiDpPrQ8n5DNsTC8L",
  "key23": "5vGeTpG2KuD3kkiDqdwqDx5bVbWGF9LcRfsjHj9D7M8TnLidAtm1sqrrYSqhbEV6mJJ7EYu1EmBDhS21surYTuyD",
  "key24": "2AbvXdeCG7eL45xY9wGSNGDD92jwKD5Ca5F8RNGoNRX77Rb2dhAiYjuyyP2TVbmooYBxmpMbUMbYVoRkxuMAaTPz",
  "key25": "5vuVnv3v8AuRkWZ3KHDR7ZgRXnsY58BAhNiTMTd9i2h3m9QFWT786ZyPXSYYJfsTxTdEHnXDECJ9pCQfkYLpcgYc",
  "key26": "5NpumomEd1gE7egioqhjyCfu7jdGhDHArmReK1pBWrdpjc9VHQcSahiW1RZALjQk2DwnfmLAKMNmCBhuCDjBoogF",
  "key27": "oHbwhU5LiyoXPBfaEKER8CD7yWcGKdANuVVS6h2V6JM21W2uAhJLTYc6bFNQLn6DaXPsTd7iRz5sqVwxCWFAtSj",
  "key28": "3jwK2RfRz6Aj9znbWjn5jQv8EGLg73kUSoPvkAakyj9GYJfnEriswyiEj6acZ3VvhxeCVPC8WVgokwExPosNQMEi",
  "key29": "5jBU5XBbdWoTP2rdupmx67Wu1YcSviKGqbPMnA4xSDeDsMDXp28f7NZSV4nuXsycgZpUYV9osnxu87ZJ8QSWGJd9",
  "key30": "55p4TiRMoEcNiXGpp6aWTSAyzcAsBqmVD27Y5Th4rqAQidUuswv4ffbicfoyLAxAnf5ZkCczZVq8GPM1BVd8Y4hs",
  "key31": "3AbJKTmDFosXNeiFGu2ccrwq3ncPUM4fnk4NMWEgCTS1kH79kVNaeM6jNwcZemL9UoGKHRBG3Rqes2iZB3zb1WQG",
  "key32": "fDTLbEG8mPM8B2v8AUqGMJRjJat2bvcdcmwtF1ujCNR8DmqpBDE6kDvZ5f3cHFHHkyYVdDsBEpPMon8QCDFub3H",
  "key33": "5RiHeyf7Gse9rQnrX5squDBypmL3paqUs59WHwPvpZwtVRD7NEZD2QmXPB3Y8uhgBihkVhncSUA9gcPHPhwbaKFy",
  "key34": "2bC8tY9oEm42BitdAa5ZGN84Zn6f5ABWgxdWedGtcraHWUVdpqzbxSwxFgEBAHm8AjMCS964KM4Tjq8Phy3AWLhj",
  "key35": "2HNQ2dZgpA6RnRK8dSepowBs1QHBiXUVionpQFynyyX6fENWNtxuc7KdgpC2pBe6ieWnuBnNyv26JELzywJJ13BS",
  "key36": "25Q5SPR5XZFEbMdQ23ZqWTBTHWKsEurT44LUt3cMmgwhGWZ8Aa1J7KK6PdXMJA22acdcXcqRDJK2bn7RQDzkf85f",
  "key37": "2vQZ5q14Bc86H6AybWVtsko7C1c14Wdh11SwyLz53T3xGth7xft3yXedoS8tCwxjb9nBgXBAHTXVR78xYDS4552E"
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
