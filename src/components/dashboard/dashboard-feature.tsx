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
    "3auHsRWYoF2TTFiewnWSCN944z9cSq7Szv7DX3EorqPgqUGYzvzNKy2RW4Aspn2c1uDMWCMfDaLy4HKBL7FodEF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AuFDKmsn4RUhXqAe53WWUqjhufGu18ZFBMVzDb9tAaqSS2PQfzfZfTwEnvPDqbwsBDixniwnjfGFW3i1d46wrHi",
  "key1": "fH3iT7EChRP9qTK2Eg2HuZZpUaCeZANdtJVeYAPdS4J67XgDpxiZbd8QkMu3tawiiaAWsahFhAcc7CXKkwnMAMZ",
  "key2": "4aBZXtq6WrvBr1eFUzvhBQRYh1evBWLQs2ZiPuddDQUhC3MGCs3oXNvX4YYoSMHZVVQntZMFWX1ZsgZFUyPwPvUK",
  "key3": "2SzwbendskRU2XvW1uQvQaNUMtctUMWtukVJMowVX4bayzKVUHs2ZsHKAZNBUedW38H78uNPTJGvr1UPo9stwwWp",
  "key4": "dfDRudRck4QMEcmDG4kSJjrHjU7QJu74NCsfj1dVWB4Tv2W9WqcnKUB84Yg2fBnHD48UCj3zw9krdfb6Y3mN984",
  "key5": "5fM32wZdSkvycrbBwk2YFs8ZrHiSPrG2tesMs56V5qVjcf2t1pD7TU2xYEZD8DHySs8CjAbaJrk3RJZ2Q7QAtJFW",
  "key6": "2VPhb16HRVXavjaPXiVUx1vZW1aacPNS5KDA7G7muspLSq37z4gkeFSNFRjJGutmnzYbJccVQGy3d8joYFhqmK9r",
  "key7": "5XMHexAiJGSqyUKEfT24FfPohnmwtSd4bEAqm1bFPjXffDLiuTFNUQJ7LAwizfN5yuV1tmFmfQk36Rf2P6Ftj3Rf",
  "key8": "3Q18r9wgzYtTnUEVVvbNQbHmn11n2gcc7gufwqMT3NjoWYvXYtZuK3rn7u3KzasttgLRLuJsAhwF9uzMoLvPf3Nx",
  "key9": "5KTdg87VB99JM1Gx1JxEfY3qCWaTC1g9W5dCZJaunrMxCzbaqZZ3kafRKmf8PsWZTAbnXY8g1Zaz47rkeMNamHtV",
  "key10": "53nfy5fJrp7Wq6hnfnP7mQvCMYCRunzhBjFQUfAEXPKVGTeRXE2UAWPtATpTj3ow2caDHeaN2iA9aBWzaq7vzo7w",
  "key11": "2H5iAjwq8vp71oJqKbWQBnJPxubGqehob419U7qP6nP9mxGGDDW45YkEezQG8aS8figLfYvDGdgbw1kagUjPPpgm",
  "key12": "2Ck9KXn1qsmTbUD28cjENp7FVPtiAgrXee4qbfnwktLTKXD745fScoWgmpVLmZ6N1jCkTebPV5xCfHob7jgkFJ4n",
  "key13": "35GGY1HPK5fTg2aZ3ToVDoEQhAanXRUWc9EJwxWFuHWgn7gqvtuKbeSPZJxFdfCsruJFzsWkCy6jjNBSh7okTGvG",
  "key14": "MT2tYGzSCm2tvG1vZmZ4hWnKxsvLoj2CBe7LyQw5ZewG9iSq4jQ6xowA6BB39ZmsQ9pJgTdwZJa4U9MeTcHo4dm",
  "key15": "3AenvGxyNiHBbgxPNqKX1snJ9XbDALpCP3MZvhNJDgymuD7mpyosjHfVS1BF5pDkjW13DP2QNHDoH48NshvTHtgz",
  "key16": "4Y28YRCzC2B1Q7kSHVByowhpUWLMLJfx8ggZM2xQYhJoe9w5WpErkPhRwdzbTdATFgqhWHtTyskyyPQRaiqoM27X",
  "key17": "2NaLBLiC9rkyrHbSP8Qtsu3nPoocxGB6xtaY9nrjGsWqDgMRgSQppKwferMtG4pNYm2s2HiiK2fpMer9yEvfWChd",
  "key18": "MVs9LQx3gbYrqU6v6PjZsMZcok7fUdKrp8qhPsvdJqbpa7FPyxAdzcRa9QzZ1bNpwPoo6pbqdAFbN1JJpuPJhTt",
  "key19": "3vKiasKVpzW7bbV7ATCagrBk3ahsputh4iS2fT4XyoDqLEd96wEwkhm9ro2ppNPcQ8rLn5NrkykVbGvHwXMzkaen",
  "key20": "yrqBJGBJz17wdhvfGVHtZgyBspu72qmqWqC23LySerahx8rRUAb8P24HYgTqzfuNd1qdqxGkvQrkakpcJseN188",
  "key21": "TYYt8Gn6rVpdGX17ZVEaEoLKDXWSBVM384Fk22uiehLyqxHCaGNLwTDUKArmoh4NTsUgGdmT57PzkXfZyf76yFu",
  "key22": "46kPGKrfD4KxxzhMWrKkY28auNZ3CF7S7yM6PfJKgQyNXz7MSL6VwGvistzyJ2dkuzR21TVcVRg9kTfhvbByPxT1",
  "key23": "3iX51sMXVEwQnqspdax27HKBRD64dE5LhLo8c1dZWEdBqbfkt9C31KmsgWtJQXnv4J7Qn2hL25VSTzXLsP6SAYYY",
  "key24": "FC3uMMJJoCcbZ996ZPF2zc35YwUw6vfDqQiT6ez2WbAc3h8Yj3VNKvWKBEeRWf5MjMVuSosNS5bY3U9vQL6bdCR",
  "key25": "1uHBKxA32hiB5Yj2zmV2MFQ4kKDKz48UU3S8nx3DYd12bjcZ4nkAeZGKLQsBzA7zZVYwZDioLYhy2qFzVyNQZjL",
  "key26": "3uXr571NKeCq6pu8RM4QMmz82ewcWFtLa6GHCgNBqMAdUN5uWqEvGbaS61zNATGnsBYKuoy6EtQKEo8iVvdHxZr9",
  "key27": "5qUcnUWntDVabggUCwDoB1y1udDWwuLzTpETUpfrN6E6zgttsDEATRQqaCt3o4MmGa3ycx2reQxVgcU4sJ31Hwdi",
  "key28": "4bZ4hteAALn89ucNNGbx1m6TMpPK5hGdhBZorHTg8ApGrwabwCbMGhyRG9WWaacZG2jjykwcQywF82CmWFZKUP5L",
  "key29": "ZygRjTeRiCmuJt43UwUbJmWZfXser4FmHsPaRwGSHBstZykqwkQJZAkySokdt2SxLew5QqafuD2gMdnLgLREDwx",
  "key30": "3Wbu6rwQJfDUGPsG7H3awn7KrdXbMz2fKgXFtDqNM2EAwDCQMzhdQzFGgRgYdaqJ9ivCX7BqK6EPxTyQ8NipAFJK",
  "key31": "5E9FNvrwRiDJLN3MkULJBeJePPAfpXspbVEdUGq3mnV7buM576jYgM1cjNt3d9UCwm7cAoJtZdzc2kBjUoNNQd8E",
  "key32": "51psAERiW6r6fzHJ2E8oAwVRUoJxjNknzscHeTnLEhVydeuVXjx8NAFpipBQSonefiW2p4Z1zYj5ZqALYXB2A94C",
  "key33": "5ZGPpEJc3DwHx6KdozpN972fnmushb82kzQyPTskJGvRS3Sp913b53aTwtcxbBFybpCCt6jTwDBsC7SgA3pvZtdx",
  "key34": "5Cmpqby1wyVFP4vNwGPAxAG2smfPDPoKArzLe7EE12tAqMCQowQyc4txzJL9UiejGVgkYAD7us3wkjVSzksk1vwc",
  "key35": "4n9ehy4eMntDhJDSrW7VPXMgbbcHJymmma71ytr7Z2PQpPgkA49EKyUDpMk1bJMUJ7atR8yTxFKGNrLrqpZ6JJd9",
  "key36": "4b2JNHtXZvuy1ARZdyAXnVhSyiPK49cAUrMsLQbiSEpXAL9cKu7AXKTpiByT7pvLQVQUyajFBwAii9McogmNasgW",
  "key37": "2L859VJe6RhQz2SmYU9riYrVmfXBDD65WJcu98ASfJ5X8DSYVZra7sQf3yvpiL6tgGVqtbz2bmhTapx5CufL2USj",
  "key38": "4GAWabunfqSRvG5jQvrKDTGj8QST6aqQYSvrx7YDkdD4PcroJ5Ngjw8senGw2Cpd5gkjndXaMcBUPdpTBj7xDwk3",
  "key39": "3Nx71gMuUHfgwozW96sSmb6MEFG7usefbsx1BT5hWgy6eh6WfuvTLBNxYP1s63iKAm8GPKgtAmmFTHtStSMVFpCR",
  "key40": "2nJA47KTCYo88GY7bvTRQFvnLNC27oqCYHUQEdNYY4QeQriB6WmmqtMXZVR4t84fdPjBadqJy4D7T9Hn8hDhzmnE",
  "key41": "33XBV5xTEfurnDmLh8t2Sz3csjuYcx8fXJVp9v7weVCv2sCDbFBLcqR5q7miHJntxuW8wJ96G5wnqGwBCCrHbVFx",
  "key42": "665NwpantwSNBiMnje12JjijubwNLG7y9mGFmYaMWj5X3naxEPFxBK7ZR9BdwRWZvD6frQQwHtDqX9g3pi7nGgmd",
  "key43": "FRhGBPimCEB7GnfXzodAUjQK5KbX37jvXdXz7mFFpCqPeEtDamJhi7Z1fxuFUfTd24PQt3UPm51e4sqsRzxfjQg"
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
