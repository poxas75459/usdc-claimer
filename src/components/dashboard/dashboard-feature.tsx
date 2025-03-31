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
    "2eVCe4bAayo3fVSuE8edmpssDaE6Ejg7zCwn5ecSxWa1CgpMmXhnJLPCyhFymjKjSJ1ZaZR7BLckhErGdwapEp8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QENNsUzko65eeCBpbttBWM91u6RoJL6CEjdCiUuaEoXTvhFJ7c9Ar9gpm5nv9kWKWjbM9pRXbEMYWEzNtSaasRA",
  "key1": "4t1wLZ8HFXP1YvxNLe2G7vB6SM1W9XVUwcvUckQpXQTJVg12hyv7TVg94nxrqAJZQYqq3LnULjTjQZtmqgoWf7gT",
  "key2": "38BWP2Mq9hKD2Rub9JmgHL8SqNc5jGVABu82gsJ87Lk3i8xxKemqxiKiWp2D4PtgtkQQPae6XVmbBHMc2yFhB7kU",
  "key3": "xXnMFvs9pENzyWrLGtHiMAZEeGJFSWeqAUCxLpJftAdGece1nTzDVnofrHdBXz5YB2Hg4heGn1FniJTud72ibw5",
  "key4": "2GUbZaJjYokMA3tDksTMKtkvDGMgYDdQSsPfBkRan4egoafwzikD1x59sRdMpeEUbp9Myrb7PUcaYnuVqndnLVMc",
  "key5": "5WgvyYqwVK4hXEdS6SB1TBVJJC6fmHdfTpEEzuRw1yPXtcbg8MVBi2zEpRg3GiPj9k5T2cNoR7v62eYqLWZzpLn3",
  "key6": "2ie5tit2d5bJ5C5xukMYiPHexnPJyqe7sHV3Z9zGSZRQP8mLLg3yaZAURX6wjLfiy1kzbUfdum3yrgSXy3YKWLKh",
  "key7": "5kAjYmiAwegT2xC3L7Bb4ZeXEjV3GLsu7JwGncRVU61T6bhYkDBw8MNuFxzCd12a2iCdEMPdkUFBRstgZzKh15sR",
  "key8": "2V4YKDxxZi9TUrzoejMW6pzAqK1Y8fXSUeaFGVG6iLsqwnNuYD7xq6GkoK2iAJNm1r5RDkeDpKo2LeoymLu1fZSn",
  "key9": "4ZNRGxHctYe8GazZsQnHM49oHySBjfuYsQ5QgkdRcJEGgsQWQju9c2xohn9WHJu7mL9dmEJU35N4ighUACAyqnXn",
  "key10": "4p6yTJbScx7AvxEMwgNuBJnij982a3FL3ajVJ3J8JE9Si4efC63UXe7ktybynsZYLyfJqS8QCsEw4Xcscm76ZTAr",
  "key11": "8yBEnoPRS58mokoMXJXQcWUfQVRegnBJ6QbZmXFukHpKNALPQW5EmLazVNGimTsq7VeCvyhJZjVv95TbPVxN2nA",
  "key12": "49oLbCBASGyX9Pt3YpBaUsr1PxT9SUv84S6BJSouLcvJHySJ9eQUpx1ozLfacreqPBpSrvJ8LSK4Sah9J97X5yRr",
  "key13": "oK7TnuAetKnKhxa3YHguHAc3tP2JQ7YUJLbWB3V4HBLFZQ7b3S8D7S6gmPC4PeTutuyHEfUZhuKctZTZGLB8K5Q",
  "key14": "3fxgEBDthhzz6gyDYyWj1GLL3YY1T5Zzdr1T1Dk1Ubtp2kk1EuxdexTrDhWCdgu7BP1UaWqWYX3saGMDobTroUSd",
  "key15": "3ASjcVvQwyfKmWru6Bf2XBsstJjKTFty1UCdkrbzZmPVZZDpVhhBrT7pZArGWnWLt1uKCK8aUE1xH7cJzKmpnniQ",
  "key16": "2nu8QGwEiWAwxxx2bzY8EzFuV6PJqQ5xt8YPEdhoZxaApZxaSuvfC9RGXZPaA73tnVhA5cT1Ywnt7MhmnnNApbsY",
  "key17": "4vxr5J4XY5vaKDoSmWWZKUBJPy1tBrq8JodaMYbtoApfy8wKfzc2ZBWsMhyBHdx7Sp1CEjjnJ8wBkVrzTHxUhYUx",
  "key18": "25t3ypMgovzdD5uKMRnSahAbcxtB7vYhkqaZdMfW2gUdVfv3P3YCRUo11FQF82qBRvbBgtM5sTGLGg1JxKswb4QZ",
  "key19": "H8bNRwM6UncxPmrdys453sLYwJ149EggUCkm9Sfa35GR2cGkp9Z5c6gYQbfCcQbNVkWsjySZab387afaAQsiv1s",
  "key20": "4otrK8moecddceECPLaqsAvd5USiUYXPLxUiwzKC6vxzZuRPgENQzK9ZB4R2EKHKw9qmAAQV91JJQJAE87Jrn1Ww",
  "key21": "2udoK1moWyRuL7zmj56jSgeb3pLk8b7AD3Dq2ys53TzDmPmTKiLZ5xtJmT1HXMmJs7dkcx9KhxqVk7Nb4H3t7sZT",
  "key22": "5FrcByW4HG1psaruriGkwJ2i7pS2ZevxWKYwygxLfkqqLKrrf8BDZet9gSQ3vh4dEzPaW8JHENdj2K9f5CA47jhU",
  "key23": "5cwonxoxbymzGH8ttbaaLPMwuecL9DKxyVtUVEqzFKNFccbCTov8dPDyA6y5KQDwtMhrND487jBPQuJbCA6KyUeZ",
  "key24": "42KL9GsCu64XLvvXfa16osMei16MZ14x6e7TQqvz4LY8Nd1sVpzoPME2QaBUs4bn4d8onzFmoBv4X2ze1RWuNRnG",
  "key25": "Qgcw26zznGyWKt6DqmzKacz6JYboSeVJQ8dtbypFneP919nUNMwUn2Sgmqa6x8UJWBhWXdCQhNnVUdaUEufALvB",
  "key26": "3KiQCSm8G6GUXgrtfyaa9KcftrEemDWz1kmkEEfonzyHyJTvhqxByGcfH4WoQsGA5Mauti78sJm7XwtWANdbaJsp",
  "key27": "2rZc1gMX5L8VRyqUotJhCdEiUh1Su1EQdpPeGmXm8KjrAqLVf6pGE1mJkjqityHwcMjUDQ1z9FW8dTVMB5D84Z4Q",
  "key28": "49Not63DUrRYZ8LtUBpqHiNfAyGVFWkNWxB9usfidfpoUnagpyhTUtnKxr6kwUhFdh89kHZmg2dMWTCcXMuKAmec",
  "key29": "qe1qpsCESqtSbfamCTkFWKbu4FD89C6rAVdB4BVi6iiAMnJ5hbNA5g2EMj8kXdEof6Mqzsq5t7CmBp667eZhoUH",
  "key30": "gddYLLmLGXUNkMRBV4mnikx24H83DTsTtGkXS95oXFoJuaKjFHrvWyKwVPWnqSGJbFLyGqQenidV2igruDbUvWR",
  "key31": "5Q7HiLRK76cHBQhXKwVdWEqFiUwxWZoxugGyjXkMAntZTrj8udmyeS9oJsVWnDCwrDuLP3QPxYG9Xhcbu7FVZYoM",
  "key32": "4RtHxf9kPEAYpToVLVAidSgo2jGuZGVMhS1zjPdKdYD1fZFBWkGFpQHVBZGomMG5pY5jNPZaC7yEr2BxVMGiHcpx",
  "key33": "5tpeeJNu82otnKYgdkJCmX91jvPwoReye2aa8GkPtqD1jKUbM9ccyttAveZWtKrw4snjx1mBjchPjkxwP2GtFCy8",
  "key34": "29T2SBixth1tsHHdKxkAGhun1xsXvi7hi5SSq3yKbRxjrz67fXkiFRG24s9XEETvc3HrvEkAZr2ZuZfZs56tH3aZ",
  "key35": "21LisQgKfi9m4RUBEqQs2ChA8yb6Lz3athWQMmFU51U6CfDdCMpYKmSAG6eXj9TQMvWUTebg4wYQYN5UfjYkqad4",
  "key36": "3FnrWgW2ripYEbHTeD2uf63H1V2y9mUPzyj3xWkYrpXT974AKM1sCYTQjxtDXoLAtmfS6AXK5agyfprJSWySFrw9",
  "key37": "2oE8QQCmaAdRQNQUc4uorAe3e8vU8XYefHRvG6B4c6UBCRNvMUA4KSvt6tRPhPXyn2ps4mJGfyKE7CL37fVFNYt3",
  "key38": "KsisBsP6Fz7FkfBwpqdcS1p7stuL5nG4KCgu3pL1cFRwkoGepwP9U54QM7yPXwexwKEbYDjRLEBaySZoRbEozQ9",
  "key39": "qmSCd5KTsBzxJgU8kjW9UzpTd8AexJAzPsyn9oX8EkedBUDHiQUvgiTX1uyiHEkKx5NdYA6ScKvrDkb6RU1e6JM",
  "key40": "32TKmte1nHzh53TY2LpLSJ7MfqdKdaAZ6T4vmSLrRnhEmnf5DnCsiyCAfRNyBBnbyn2hhe4MRJHEBSdH2SZih9bF",
  "key41": "57KSeu1coXj9nJrAK9PpPgh2L8B8Pcg3korfxhz3qGYEfXvohGTm6ejpaR1TjERbedvxkBC7n4hFz95Thmr3nVWN",
  "key42": "4PWA6c1au6nc9FofS6KMYdisQrHd5wx45Zrw8ET922LnzEoXD6c58U63aSqzGZPeaNKcXrFbzMtaoWfPL1wguibe"
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
