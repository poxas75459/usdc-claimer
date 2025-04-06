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
    "2jHhw99L2mNKrBgFrc1BP5msEbX9ujMDWxgdCtJeCLEq8dEZ36VEdzWsYRWGb1S7EvUywxgfEnouNsYXLpvRVvdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzgvdzXqSjiDuaeSi9EuJ8Lp6mkBC9jpBM6ANUmYa8i7A3GfJ9D5hXGfHyTcajD6tbcsTRMHtzhk1hZGX9rs1eg",
  "key1": "44Jy9uUb2U9U1im3zDRwthDaC9z2czdMKpxHgs2vVQf5aHQZB3T2uRrLjaG4aRD6eQqjdtc1R2y6KvRm5mN2vG2Z",
  "key2": "55BKxb9gWWta7wVeYwsy5dTJ8NUPccMC1BmqbqdtR3n6WLYDrdfcbp7bwSrSLCSZesoTda3wSrU9RkTg5k7tGuYG",
  "key3": "64uZEqHZ3ivQPrRZvh6DnjFiJX6k3rEt1VrUck1t1gbFD4qYobLBU4sNbWDvg98WR8SEjvxdYDozqGHavAc8NnHT",
  "key4": "5PS956ZUk3H9MNqmrC7bybnLmoTRY6t3U85CRysB2S8KeZa6jgtBicFJWboyN9fDZzS2eQYQyPz2i7smfcxeMfeF",
  "key5": "5DMCBxNVbGXSj4gqCsKDtckMLJGnm8RGMfNN4wyohjzsEPhdLpfsGCDxUZLuzkYjxhArRn6wnmvTdNs3pC8HjgVE",
  "key6": "3iLXJKASJcn76hCiUUdkcYxhVMGEpHf7MaqqxMMkPhqKXiWvfC8YZ1Xx2XfjTyj8XdR9ARyzynBsMb3mKcvzNWFE",
  "key7": "5aqp5FBVE4bbTcDJa9aik7tqkNF4dUtEdw6vrkWLyVR7W5jr3zYoC4k4WgpE5G1nRwbd7kGf2D4WKZzSTc5EnJNh",
  "key8": "42kVLDfDjeLGbQJmDb9ht4y9AHb8TzuBMfJF5ZE8NEpRT9L3gYCxXYBCYYGKMX1dSHDd7bhogxbPNwWwXW7EZHok",
  "key9": "KYsLLDK7GZxVsfDnjaktKeVekjfzi8WBrky3GYrbVtdduKyYyT1mgBYSQU7BHYuHBCBNrp6dcg8LTfYxcmjNNFu",
  "key10": "28TwVXDUKRqmDyrLyL93xWWf8nNgKHMXQUsJHhnuNndRqvMxYS7j6Wb5SJVJhWoo4xMf69oK4xxwkfCx5QfbaFud",
  "key11": "4idezrA1GGEdNAc1XEJQDU6jeAN1DasBydY5dVBi4U1LjZuXWu8rXZ61t7MPx6NdZQ5op7aaMVaqVcJ2zQscWS5s",
  "key12": "2wiRugqsie4HhMTKZNsYzxneYC8yg7knAonYhRPv6gA8xwr3v6zJ4NE8i6WKH9c7gntogHtYHAXfpLfKXwda7KeU",
  "key13": "VnPvaSgL3k1FAyftaxixZHnbVHygByKahtyRqqJNodMybkdyPY8gjesRbkVtksmV5fMQX9RR1pMQ61Y5NNMKRP4",
  "key14": "5YQPHQNtCd167KnoXampQFhtbNB2FKVrGh6uNwB1ToC2tBMsBS9QJcoEQpM4u6ZbXA6rsm93sZ1ehbB1Lmd5MiQn",
  "key15": "2anZbtwvq9sVwmZ7zKfaSSeWiFtNMRXTdFNHTVg6tiTJWEPYPsQPvzaQJgUCfaG3kgaMetaHxMFJAiRsK3ZsEazQ",
  "key16": "4RBjKQYH1m1vaiUHZdkKhEzNzZ5A1qLKz6gBDUqof7koYEvnW9mUY7TmNHi56V1AqjGJHcryxtJyL9Ux3SRfU3AS",
  "key17": "5pBocLGap9MmeNXTz2cqNgCTasbVM4VDDHBXF2CgxWJa8sJ3hRcxYwa461aqfsbb4Liv57NjdTK3N73YPsSVJBmW",
  "key18": "ohgDdBUfKsPZM3EPg4w8Uvs6wS3Pefpc8tj1JB2wMwbSAaTj9TBpBnW7s8SzqAdddhZSF1r9B7LnSaiGEtzEin4",
  "key19": "4fN5mF2NM9RQ6R7JdSd1hYKL7GTfyZGoBkLSLcywzLTGtkAX6wYCELwKMxrugAKgueAq25igc2dscP5NR5tk1s83",
  "key20": "4e55VWvtBEq93rKiZuMGsXXdin968y38X641gWHRKE16YCZnAtLVUaJe2qSkAHxnnA6pywiKyYGE7pibs943ruDE",
  "key21": "49DCz5dEtthQwaUF4qw1PRZkvd3sjm3v4nbTnembgBuQNcXAcTtWmV7E36D4qvmRhTiyucfGDceCbfnvxrJ2He9h",
  "key22": "3ASRnDSC8dc8WyrfPkYugD6ojkwD7G61nMaRCJyQBRfVF5Po4XULDhVPUQoxBx4nYQvic81DXdLiQfX2T79Xf2wJ",
  "key23": "MNmoxpcLCs5orEzpZRzdUnzezk7H3urgmQWfskmZJr6kuCoPHcdTqqxM1v2MABcALTbMHVr6Zdmw3b8vjdpyYAr",
  "key24": "3w1fEpHquGMwBnwEU2B1C48JFegFsVQtLwX3981bDy2fputLLNHQwQsf5UrqLyMGrh7aLNrFCBp5WtZCvmm7Pg64",
  "key25": "4va7RyHGNTcQbCWwmWMTx9UVcAtxhatZkGCqQpRL8waom7jtyZtAEnxKT9qRsDDkwm2x4Nr5ZqHyGAt8R3cLNVjW",
  "key26": "4Ud7JMdBrEbEkvVoqrn9hGokMveDBkajbMKk7cawXo4JA2um9u1H66s4GaDRv5NiRdYeoH6xw6F5itNGUtpzSaho",
  "key27": "5ds7Ha4QTr9Ea6d7y1SNh44SjpyEtnTUvSPpJTmTHovMb5kG1cP88UeTDRjmbGRqvj4F9kRZmAGova5LXY21z3Rp",
  "key28": "5CZjs9a17xVB3Be1w8J1ezWEo2AfQhAPS46vGbHZGM6VyM8LWNpr3Y6Xyfs6FgbDw2PbBzRDPkvHuWgmguVKA4Cn",
  "key29": "2cZZhSeiFroyVQE2DwgHKbAvWTXF6VJ44xnavXMz5uxwpWGj2rQfa4dXyXCjPxxoPv3wozHdSyYY7Agwd7FoRWzB",
  "key30": "5zG27wExgUGp67ds6ZJRmRuQY22rRE5m2MnwFR94b4JBtZ48rQ1ojR2eECXSZbKCeShgcW3y6ad8rgjbx4BrFCoE",
  "key31": "j9Qyq7ebup3foKo3b2nUhw9yz6VHuXdNSANyGWqFghWX7KZ2rtpbkXnomboo5YLLeqpsQGNmBeFaja2thivp9U3"
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
