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
    "4GsU6WjErqRdt1bjwGv5s7gbZqsQN7nLCVPZKsmX2owdvZMzUsBSvFu1PscMQHNbTKDdujQo7vjgE8VgqQM5M7Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yu1rsRSK3E23GbpA8u2YLhaEu8pD3QqWAunoJsDBT96pCqFc1tKa8sXbKgG2FfUttbgbCQjXVFzi7NR4jfbymKs",
  "key1": "3VTyBTASUwvmEfy2tfegsVVFRqptJHbR27DMeAjarkreaAdiHXPafQJubBGASRRqGGNNUmo9MCweKhh1pwBb7e23",
  "key2": "fW2mmU9fmNKnvHa8FWYARj8fajeoCxoQpV8yowyoVDynrH2YcHMjE1LAsT2ZGQwkFLbWeZm9d8AjggE4TAZsYGy",
  "key3": "3uGY31vDfKch2HWSncGLUR2LRuVJc1iZpy3Uz1CLx78jsee8x1oMqif4iHTTxn8Hs2FAcLZiQfFLNUiu3dquh7vv",
  "key4": "4u36Jjp4eWETK6DwKinc5hjQmU5JWyJgnp21peEufH7Wot282tdz5GaEuzXYfZftpUHn9foxfQFjpp9pbNhYFGjY",
  "key5": "4JbxMf1UwFgbG1VNdxMA6FUWoksNfpbTwCAkXpL8mXcLewpJFF7HZuuo8MXQZiVY5ssqScYTNaA88akmaDvrAWdr",
  "key6": "4ApYtMq5p28JaRiWvjoDrf83BRoSS8HpxFLdZQBi6Rs515iH4J1YTfDLHvGqQnUkwAWJShRYrVE29Fze65UPr8CC",
  "key7": "54xUVTnbiNCAXJVaqbDgWfPSTGzeF5yJQteWMEDS6oDKxNv19T9tox8WM7zTmBVfWi9cidTaFxwp6HS28hD3mheL",
  "key8": "4qUMRnsVMN7wHuo7kopTrN82kYPuRe2TgNBixrgigymdmjMLninYcUQCaJBZxZNoBJukXNzhxkt5hAkq8F5zFpFZ",
  "key9": "4Y3d2bwiFWvmiWiJpSiXo2JMgSq5PxGs6AAhMZ5NGvcVEELf5LF3Exrgwhs2TgbngRb7eowx1qKEqWYdXTVtv9Bq",
  "key10": "2n6CzEVHPjDCaZX781uSzUq4ekakUXFcP29X25k1VzNQK3dRf7paTmyfd3biRKR5HSiX8AKmP8MfE247sN4cNBmP",
  "key11": "WaGtNWwTwUaX9Ti9AtUuSAEesBeWtbNnJ3YN3RLtYyLZVKx74mJJutVA5AoCapLq5ub7a8oa7v64nfsbWrfCwiW",
  "key12": "5NMSyKuLwfYhTRx6A3CPpp1euQRSPtuPRM23cn99wsYT8JyEBsEV62TrHY2vpg3GKNC7jAJRu9LS5rzcQXtja8DM",
  "key13": "2PEkUVsGE1Qb1y36TNNk4Lxw7mT6DVyJVXHPUP1oHsy6jnDnb8icZtaHQx7WWHMmp7gBV7VCmSPyKMXvSBUmTKRo",
  "key14": "3amiV1zPQfBt8MquiP8iifN44vjy6iVMiHStWPQbk9iYycR7q2oT8zZay4ZjthPNektCzD2ysn6sDDtKb1dai2fb",
  "key15": "5x8FeVdhTVAjNXXfEzLSGeHEnH73cFpTiiiFYudQYfMP9ecno4hrHJdCKADjJVYT8noAbA7RJG2SgMNnkVwBKddm",
  "key16": "262AG34x9vrVioGoEaUs2PPjC5ZqGeck6mwXtrVxXq9n5275mZWcLx4esufzr5Ljz8PUPh6Ba1Et2Q9Dex8y3PNx",
  "key17": "3bAycuJAkWMLu3RJsANquF4qTweijWmRU1zZ9EGSDCRwb4m7R3JpdQ9CotohMh9wWNWnQex2hJ6j4jNjWDd6BfM7",
  "key18": "3tVQ5CpbCiGGwbPfS3PPgwsySooNTzyGTKjJEJdqyeKZW9yRFH8FKPTXePsSWWnbrC1Ny5pqSBj4mVhFBJcgSxmb",
  "key19": "2jR98xgEuZkA95FSi1poRVGj5zvpX9ymDT6CWBgqRkTgkAWBxDoKvxQ5nCPmkoYK5fcT8a1eGvVNSSM8vYtvQspw",
  "key20": "5H34TE1bBwdZBD5vgWDKPNcDEAnBocSPUMttC5NH6A7XA7DkPZzeppPpAkakw2VRZeC92cHQYSZdUbT5ieWMXBt9",
  "key21": "2B1weemkq7xZY5UrZ8B5uDoWWV241V9GE8Yd8t3Hs5rjVt66vooFdW77wdVnaTLGXJgHqNCdpbpgzwsBhMQquB4P",
  "key22": "2Zj9xDjT6STct48p8RqNADbDfkL15tZdemzmjXMW7fSD1yrmgxax7ywZvA8Duz2optRXbsQfcnq1y5YEJEVdjk7Z",
  "key23": "QzDnpTdaCDyDjAy9SC8p1ZfgmeGmxMZkpc15TbajrL6TUeshQ7UvbhxS9Q6M3U4zpnG1MXXzboVqeKN1mKGtZne",
  "key24": "23ChAnDKvgthhrQxhhW8xNfcSE4utuubZnVBMSKUf6Y7yC2va8BSdpPLhj1zJoWV4bAfWDGB1yMEwmoQbLbxABaA",
  "key25": "3JG3Jp8PWccf9Dk6tKdTRgTPMzCMA4gBR6jUjS8A4rhzsVT6HSYAaE1UhgrcWNugNW3yPgaxh92GgEeG2254Fvyo",
  "key26": "316BrE9VMvTxLEy4Gj7PyUcVyPBM3wWytQmKHkUKksMSoAf4VMiJwPYUPbKpDK4hiBcnuF1Gj41CB799oS3YM9HE",
  "key27": "24Jry31sp8QbYpM5X2QjDELB5H8D3sLSNSw5ucdMsDvRNexdmCg4cR6awwxeMRZ3r4MNNf7AQCTWQpz2RdmiuEeg",
  "key28": "4WNbT1zVyZXCjQgGuCGeLtev16usFkZuf5T41VQW72RNmjyKuUtz1dhWttnkvdZrMhn4bap7by49DPHuFTSJcX4o",
  "key29": "4BctnYbz98dLZ3QUeVTPKWQB9FK3b4gXuhDtY6JMsorN71mznCqHqsCeYR8gubH3hts4i2iUC4SkZRTgd7GB8d6o",
  "key30": "2GQkNWNDBiWd4KyQWs67HJ8nqjqyKSSxjBywwBuoATvUNA4cnqKaQW81gFK8vvmodPSPrqBE9eXoXoB5HwnQkEmb",
  "key31": "4YXAifjq5pXh7xXWgg1H6a58QdnqZiQKQwCHCJCUpXnd6m1xnNRDfMYL5neqwYxT6kKLwb2zeQvYzp5DqyDkKLD6",
  "key32": "3kE8Wfakef5A4cYLr1cMm25qnePxaNv2oMw2oa28ZVk1z2Cb6XSu4LPDUBeDywaTXoEV7GyBDPAydggFfqNgmvYd",
  "key33": "25jXRU3rJ6tKHL5Edray9PaR34znwzxaPycWK8C3kt2QKFsFLu3dQtoFUnYZ1SiDWjKr69guVtzrA5CnQuLzbe6C",
  "key34": "5vsMHAvvpwANNZrRPoFbWLp3dBtFEyKB4yLs8eKaj9BjpZBDAfhh1H1TRqZTirZDnYyzecHJpQcGuC289tzkgGVk",
  "key35": "5BVjs1oavyj8tgYCTNQxXgnpCHJLKk5cQ4acoJ9DVvBXWhH2SU5WLWRC1LExLCkgCQDV25zHaD96VGRNry6gRuUS",
  "key36": "52mPppcJhjC5jSpPaqWBNk7FRKnm2CwWcHtj2xXoPZU7mJzh6o2nabHShQwNSf3mEuvYg25vb2YELHvxwzUGEQxP",
  "key37": "4uWyd9knupx48k8qyZNzL5UpYctPRVNHvFDorYbWMtyCx1n6VHPNrbFpd5uPPQgn9TpGiZ9BVjAxXPbQEZXiNEWH",
  "key38": "3QWL4hXLnrVkE1Kq1Ao7GcBnMt8nGnzuhaD5VFFEHMFUrFP9zzfQUE4skYQBQSPNkyH5KkdyqomshBRnGvUuqbDk",
  "key39": "3As4BY3hLUpDWhoa9hnSansZTsq3Ddjbq1gMKU82nEouiBAKfFc1jY1msJfgcLnC1bNCrGFCxJbhGynhtCRPZf9c",
  "key40": "24pwxGF5YZpn2NRRpLZrmdV5bYYeeMd9xN9PDMa2NNUXzzK1BEFKgkbSyg59ja9FRQEr5jjEaiNZrY4Ed87c3Rvy",
  "key41": "VE1P7pfG8WSssW324K6XVw9n4X6RkajBg8wnSygqcvej69HEDEwbC9LiwBjdng6JJSH4rvgASiejJZGCWgsfvN7",
  "key42": "4FhjhfjwyHovFz3jdxa6SjDb7geBTPJpnwCUzBSnR7Kg5skXTBbFmMZnHb7ayp72dUzomHvH9QBqJKMT5fKgiF2q",
  "key43": "5a7iAb3AP5CCxUYXePoR3nNn9NouzXeG2nNzcaW2JNKfoPbHfB2bnwhSsP5gQkbqoGGMb3KqVz8RE89rv4xJuB93",
  "key44": "3T6gM65fdjnu3zSi3knikMHMuEdAdbpbctzq1tMSefW8iVZ1KG1zXDcwuotxTELsSSjL6VHToXkRfVqttth9xXap",
  "key45": "3kt1rMhL5uCekic5RNVmYLpUxvdMykyfDMbWPuwNx4YKK6JoUb5Uw1xXGy86vL1wYacJpe4k4qV25sitLzhwnmJT",
  "key46": "4ZbpY7nJqY7tQd14XDfAm37iJjZtKDzRT5SUKbE6Tkj7qpZJPgbmiD15KzSCuw3yDZwLdQSHRcNKKSSCQkq57LaB"
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
