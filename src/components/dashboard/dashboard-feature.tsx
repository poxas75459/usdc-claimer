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
    "3CuqNq4a8cma75z5xU8b4o8p3mbkrFE6gXPb74bXDxvb2JdBgyGBGHasidLjgG6D6tRoT6svDxtd9remmW1ot17K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d47YLPeR57jn3YdH7rcVW69rR11Sokj3FQ5s782Bjs4ZDPswuDaHpN98fkxjvj4s5PznXALfJDRZCZE8dwMcjM3",
  "key1": "2UywjCMPxjHuqszWtEAS1418c3xPWbm56NNtF5uijDHJggm8i2xBqk2bbEptWEgbLF5r1YKsWaAEF8oDLNAgxi4V",
  "key2": "3VAtic2qdxRdFqgXVWoLtEVqABZXAGTamaRRzVZZC4TPGfC9UtBVvh2FhV2knJDnBa1Rab5GEyWSrsggS3EvYiRf",
  "key3": "5sEqm8bMkSKNmPyLKxPBmjdeyF6TbsYMY6Bynrj3MVLithW6civbJM1qPmPAVsHvNZzU1rHymoAhyWXVtPF1A9A6",
  "key4": "6AMqegUcY8ebhbqqoJov6GUwUGjTA5cKjEuxkGsYUFjbmEEoEpLvavMwwkbTR22DCorCGaxMrf216wqxuwTREV1",
  "key5": "2nm7k1GquznvbkYcTdGcr9VD1RbLeJJ1qSN8r4db8RD5ZawUhDApxXYbxLtNmvRvUH6gxUuwkuTcuKqeREoPsd84",
  "key6": "vQCzUWixbkMY7zw4qqEk3dWjsCr1xvvGnWxeMBVe5YQNtiPrYAz81xtL3pLBvkuZjXnVbZzw2gm8RmvTi7PRTRq",
  "key7": "5Qrr3UMLiA1ErhEcJQeaA8N8TjtQ6FNadgHHg8w41qnwihWNqKKa6K6qHGMmyxmHEUp97RgB4TkoRAaMSymVuKP5",
  "key8": "5ufr9mT3LoJJ4t4kJWABB2HzQNWsYLQ7QK1xXPSGKUAw62GmqfAPHcNjnvSsCpb2TBRrGiavRpir1PsZ8YjDTz8m",
  "key9": "EesSaPCkzhfdmo8839G4Jt2xPecNnRB1qZ94n5GZTATE828DpLaAhXg9W1AA9SDeaGRUwigjJ1nmZ55KtzXrSbz",
  "key10": "5cEhrBCc33UzVNdW7XKNMs92zfEaWGTBQCHPSgd2St3KNJwggXKD46dcjTb1Kf15FcPSLjYxDA5E3E8Cup6tpVYV",
  "key11": "9affMvMgzgF6oavrPKqHWtaiLGHWm4Z9aDezMAjzGfF3mcw3QwPZr77SPcEicAFrQi9hCb4k1MCpXDXqs9Gp1PE",
  "key12": "zpVZ5MywqEYGa5vc6aDhPtLjeTg7T3Zp5rTRZkxGvDucBbL7KFVKYvwoLRbuHqvhg5qFjBELXHej3a6zoyxDLXP",
  "key13": "3nfkZHWUe4wULsami2wmeMjzGdDcMhJtuWmUu9g7JSNx2ziUz7ReaebxR9cK3aw2TjuEuqKoSoaTrs1XjchtS4MT",
  "key14": "4VQLuNLouKGwckJgJkA8DssHNfS3QPZY6PEcL7LhQ8V9PNwHtVU1o4Pi45rdxqWyKrJG71jUyTpo7fbsFb61BNY4",
  "key15": "U4eTLceSFCTCCqSUqcPNcU4Bya2aj63wS73pV1DhC3GrWJsBgaQ9bJGpTDRVnG96s9QLxus72AiZmMSLsFJsyxH",
  "key16": "2puZVLfs7j1cnjcAZXKWWMJ3epsd4TTNTQP8mX7Ww81jhKmcDzxTc9QvfmTTZcUUrg54e25Rx9ziXAYGks3vmdJN",
  "key17": "4Dz5Qkgk7NXeRfkifaiFiUNpeLP1pYQYi6PMfWiTwQqX97WgDLmfUnUPLdigcxadS5ccvEDN2XwLPhDESqc2qrds",
  "key18": "5PzLSjD3fRQ2kpubVeR5HzZHMfp36UoXgT3Yv8qioRpvtaxh5mfR6EvsHcv4yTug3W3GtJJM2tbAVv4FFv6qJsT7",
  "key19": "5pmYTJ6QahNE8GatdzsvZC4SPfmR2uDgSkMNMansc2YwD9RunWJgk1PH7rsPbzNgs6qdXsYhS9geRduU8AfJJuSd",
  "key20": "5q3JsSK5cKeEqP7wqSNgTsKr5i9YguRooWnyNjnSGaU9gQWaKfzfWS6pwtrmjZgC55HKQGjos5YNQR9cUeLC1d2p",
  "key21": "RygJ3u2Pw1tDeudxaPmxvR6ep9PAraUE5G6uZq1Tni8kht6rvpXTcuTwuWk8hXYEB7FEjQFhneFD2V34JBQFSjS",
  "key22": "42MHugpm1SBrZosjCdLvakJbSra45jjdcVx3DaXBLGchPgghaf8YxMVE3iMeSrbJk9pkZFsP7BjSgA2xXqCaDrtz",
  "key23": "4tFVgBvG3TseJAzMqbmC4313WepCnrE7jMjMZvQ6gRmQkJdajZG6T4QLuqA9ATjk5dLizGBiNE9Fy8bMqfYpq7PL",
  "key24": "4gDy6csPfbmwtB2wE5hfxBUhNuaCBm8ft7k6jNzqZWFNSRu5Sq848PBZb3RVaq9ahnKfHSbKvDpi2bk8C2UUmHEy",
  "key25": "2EycqwEotXevfYoe9sapeKyB9Ap7cDbFCgjY9vn8ri1tJrRoE77sU5w695dXusp7DgpCVFuF3KKdmiuTXiimHSRZ",
  "key26": "5sGJ1ZmfxWaFtwd5e5GN1Bqtnbuj9SfD5zhw1yWXj1oj3AkqJbDdYpXo9ZAWY96kS3qz1xBAB5hSAM5TnMrUP1EQ",
  "key27": "5bmrjdHxWX7FTW2BVBwRqF2j9xssdS6h4Dhz2s11drQbfeSs7Xtb1hz8zPiC3B9scT6Wadrkz95VRy3Pt7HY37Wn",
  "key28": "aJfLDqMybCAAqr1zrKRZmxPGeex7w56U2ri9gZXozWGjshzyH9sH9dZzRCLAQRFPwutg6SufGxbF5yHHez3mCjt",
  "key29": "Cy9wWSniQtSmoe1ySAGH9bpYPDmtvgeWMfjLBVu6GzHSFTGMX3ecALDNrabHoCN4A69GPPXyWb6rfvvA7Yy58eJ",
  "key30": "oR7q2oCYxoa74XtHc3PETi9bcpjectVHyZDadFrV8h9C97DhG146A7Aunz3iNVE6A2QAsWdD64hTMvMSdxXSeQW",
  "key31": "59i8zCiR74NMrEKkTFTszcLoriwep5QUY8ziEpxefL6qLdt3x5XG98c42Z4q8jEYJhk9FPW5UkJtHTsw74Ds8WaF",
  "key32": "4QUawVeiZvXaFbDUj1m7NFFnwp2jnt4nhJuy8Jo6mudeJQbi7wQEsZHoxGBGxH1dHoKCSEttSsiMJorcsWP34XVK",
  "key33": "2i78KqHkUH5Hdh12H2izzy8ajztGdEA2eywrzmzXAJoY8wh4qWenfdxvBBJxtFDLtABkRP417FDr6vEYERfernHZ",
  "key34": "vwRPGW6dqRuAzvsi8TzhoTwjH45Mg7BT2JiWLKy7ET47zGbYxfqs91o849hk3aivkmuX21naXd8Q7U1NijWmoWi",
  "key35": "5dLHrdhvqkEFDy5MoUxFx6BJKZMTgNcKNvPE8ZzQk4KGbPcuSSe4mTb9zi96mJyBvcTheghfD1hs1aDZHquX4kpT",
  "key36": "2Y58JUTFDHj3qcqABUV7DebdGZ7huj62EftwPB5h66EGTb2KxXBSxKqMXST15V7SUvMi8ZV1WpyH8i3uQnEfsJ4u"
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
