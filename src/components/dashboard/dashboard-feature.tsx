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
    "3SKADWqkaDEvz5HJXce7WkbwwaGAeWrUMqspgLoieH1TEZHqdUa67UYCVk4EywAjrsXPaz5Gj9uAJDvqDirMJEH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SqvWwjZgJWh2GdoJ7RRtMDsLAnXJxWsGN44mERsLvbdjojt7JVAze1As5YQKR4NkGws6NADBFEFi9q86nNy4U2a",
  "key1": "2pkhjTV55xJ4gfVguWiyH6uzY8qF3tu7fRo3ic42YZLk6pf4wZiJXADpUUpBEbbboarVxdBMQ7N1rqqHtcNSFk4b",
  "key2": "3uAsvyguJBeWfarc6ybd9vJcmPzxcjW3ixDZamNRBcg3KqWpWnvZDGmg1XQStLNRUQFJiFwZ74butjEbXQCf1ye4",
  "key3": "ue4VsL1sexkfds1KrRf8hvaS8j8hSFczXeDX8z1wfRK4AxU5ejGuU3JTsUCYtsj6X92KmCzQALPd9ehGZJ3QaS1",
  "key4": "iV5udDDTCNKaveMKJTfDKMuj1xaQy1PH5QVe1ApXMp3yJXZ3xh7Fyyxxa3XDknhTCaqQ7ukAx8MJCfYKmocdES1",
  "key5": "F77n3HxVb5PrmtJTEeckntdT7EWDgev4VXmFrMK2H4o6xvYZGXVhDj18vQ4sBeP9abLoss5QgbWaXMaTctJcLJB",
  "key6": "3xFGaDq6ea3knktdic6aAQ9X63Tdyvqi9RhZ8dPQTda4ehESbUciH4kBvFVfp5APUXPwPQzuwZFAVXTBxANgyisA",
  "key7": "z5gNGqnXcZz9NzDuC9B6zQtHJwrvLHcgVu6KAeYM7HUnnYuqPC4T9qfYzJFzMeZR5yx8LWvq7vtWv6k3RGbWn6r",
  "key8": "5eopcoLvBCv5a14TiKcuK4LxC3mMYURsY7ZeDCbbnKprmP1JyR7EvxoQJ1S1qLLPUw2GB5rT1RwFW5eBRpn6xegf",
  "key9": "gfUnR14qLeHaPfW3jBxRo4xR8cWMcc99UJD2Mefvym41yL6h8dPLTnPxXEu7yiBnwBLX4kHSjgbMFQCTN7f5u8j",
  "key10": "2mubWET1vpiiH6FCPHpnXwN8QkxJmms99PMvCBiet7DPQD9MLyQ5t5Qr5Z5fEtWkX2zLbgf3FqkT1T8uvCak3cq8",
  "key11": "66tQfg4yD6MxnSaUCaaqLq1eskxyH3Lu2N75HLrQEL1p8iYTfA1nBtRwtU5BaMnZktKYD4sVHSbiZ9q48PYb2AJ2",
  "key12": "2pJPkD6vkn5xVgfQytL36Nko1yX9E8QmjHzuD6wsjx6cA3y6mRGfBTiz5i9eKC3xMd1qkkpnqs8b2vf4No32amJC",
  "key13": "5suESFFimrYMAX1NFDo9DbiRH57eJo3KM3MehPyYyoJurEmLqKCoz4SjzD9DzKkrHhtLbsFFC5RAX9DwTZHo4Fg4",
  "key14": "5MDpktVAi4vYhrYWN512DQrnYZSTftRLabt8PkAGX7vybk3XYHb5uPz6nQapymcy5oDz2rS7iSz4NivDvgSRyXTn",
  "key15": "3XsVkUz3Qc3VVT4vyDS9k3FHtrpzwSkAejeYew1KVE1kHqUjA3PRjpskBfY5F4Ro9tczdPWeNcFzZcNi4YyPgcw5",
  "key16": "5xGNtv37Nx5HNhAfcJ6RjShAaQySfQYY4t9hyhyJ1XSP4Qmx2Dmp54FXySE6HkZJtbxDnyLQmi9hq5QqaLSk1WHq",
  "key17": "4nPFRpef9YP8RvpGhPnWzNxEJzb8YsJWzh4PnyubrT5Yg5Qe2HK4UD3bQkKUvR1Tf5uHNKb3xmnzke9BqFopwb2M",
  "key18": "39nghzsSvbFQPSweRogJE7Ej6FcovHfuUcB84VPtVu41nR8XvMsRWCPNDrHpoD5Aah6p8Hie4paHDejFKHBit4wk",
  "key19": "5JfLiwUC6nE6X7hBZ7twPjgdbbABiGmoCejCRgt4xbjjhyNMKQ32RZCw2zxCpw8tNyjZswYjjpKGD2r5Hvp8CihQ",
  "key20": "2NBQuDJZS7w2xgkvmyjYDiZGKUdx9YgDAkdo3Z74A665XsBomSXg2rR3S4jjYQMo9LnWVJJGLb8QpsTD6LmGRWTv",
  "key21": "4sv8ckLS7YU5jvq6aufZPxXscY37GCv8QJfqqrF2uKqJEUc9q6PWZPoNEMQzetQbLTNGGUbkeipXGmUGMqfAV7jX",
  "key22": "5MAja3JvdfRrmEvmqCaG3EfjRrhk6TbvzZck76r1n7huSRG2d2eP28XLYCAGDZcZpRGHxf8UECDBWTvebotSR6pe",
  "key23": "z42pJ91tWo6WyJf74wXM7pFNASQx9YWvuks7pBUtH6c1EnWX3vQMvukDZbb3unWsddrqAaUYPSLQQhxVLLnzsQ2",
  "key24": "2wiWhRDZ8k14p1ThG3NErBmdtYfNwW4wFtSPDZxdoFHpuxYLnmZ7QVGxfqpKTMXrA297BTUHaN56hsEGoXWpnoLy",
  "key25": "66iTXa5QonMxuaKA5cfcNQwPJdHo9MBxMj5YQcCVXdFbm8UUQcxysmRJEfMfcGL4idB5qfzYXqGK4F9Xyy98vvpz",
  "key26": "Pi9oKnCjuqmidEc5dZsa9DRWi1H3ccEYr23fsNi38vmnyUMH3aG8P9npWFtzbxnf8MwxKHLb3Pp1cKNMhk6Tvst",
  "key27": "2rkAy4MLF7HXDUf32Pxuxc8T6WNyPWGLq7nJZDsRiUJEvJ6W3ZTEbw4ATgmuwYgeaGyzsmAxhHXThgvcsZvBGMKp",
  "key28": "3GFfe6sWmwUQdxEVs1odgW4eXRWqxjpFAPNWdM8upXDLScTrmbiKkTFreZBCiuJxiUDeJtJxnxjQ6Xu9fo34wNyX",
  "key29": "4o2rvhWHCvuvAvU92vpvJWw319dwaDubcDjYzJ518mcscvsr1toJviNwQ965WArCD1APrieDb2we5rMEHgq33VLV",
  "key30": "2LeDoZrnRJJ9HfbBEVQoCTYiiadguHamoZdA2xXi2icdJmmau5iqc9HuohG9sjthWE5XVqkp7VMbPhVHS8JaRdB9",
  "key31": "2zk9XpXarz52S8ZEZDH6xqtFK6YxN7ZoUnyQodX5DwFHXW8aUFZShRY1EBy4SuTGnZiQmRetFzRXVWiFqouVB7Ew",
  "key32": "3XH5eR1dbpkYN9m5zLmJBjvwPGN7heaDq9Vmyvbp7aUR5ZccGTYHDR1H1mVEsztian1HDfT3L2evxKdEsKEyU2U5",
  "key33": "cz55GVtqBG4N2FjUzkh7otxZ21Zwptq3Ff4BM1gaoNHMW3V1L2RiE3rCSrmmWD2X5VEB75DSKHEzAeMoqq1qK7o",
  "key34": "3sfhBY25aHVmPSMebRijYG3Eq5UTy2PWzYkTLf38LcucrXp2hwPFnkUMJefuLQrEMNZx3DCcy8isWS1xk1xF3zMN",
  "key35": "C2J8v4a1ud1VSso4zt2pkvPZriFCLrF7YZqcPoKn6XMop5yRQvecocSk1NSwSF1CwFwwGHrsWbzXU56eqAuB8kM",
  "key36": "433KAYfSHHhMCyyTr9275vzDLKtJMUBbrSW6CuXL72LMN23oxYgEZkvKBbfvgzaexzGZr7yj5oY7hsMdbRCFqqNB",
  "key37": "S4hQtjzJS7R84R1jAV2xNkvM1sgjNQz7etEMQExoD3Pdw9oEUP137UgW2xgqgodxtAc4n4rEph324ERFrexkVPZ",
  "key38": "2aedr9bwmUcLUZeFKM3GqD3SPupjsfBzBViXHLiHpFcNAC9FnAmZMfWe8KnJcVfMv5ftKzYd5CANxPrxafvRNE1T",
  "key39": "32Ykrq5cLoLqG8ZaPT1ARY7UQfQrWGBxohakfeCt8eouXovR7ZzcNcprDzqrHxQWDGXpKsSXGdhgjDriDPdA3ntL",
  "key40": "2QutNVY1b7ij7zZZLuFR8cHqx7oHmo1jjgzhypi3QRSi8fr7GLUbL1AbuMdeRgGYdzPmdTgUGx7ZNE4hdbAdxCZk",
  "key41": "3kU6WFqtfott8Zx7CG1HWVnuP1woj3GfrRrcB6NWdMNNGsCLvLmGTY4nyAYNnimJGJEJi3aaU3wWWt7sYirboRXu",
  "key42": "3rksefyjuaBuGdtYA75Yp73y6RiT6K4h5pvhWYzo4uBFZe9thXCZwfRaH9mBEDVtPGCgSP6XRcj3RbzePHiGbvej",
  "key43": "5RW953KnkgTd77b3tMsBtiA6BeUsNkceLyJHfWbbCR5BVNeDp8txsXahxaPrVkpcu9RCWUxbsgQXNT8BSpypgGAb",
  "key44": "PAdwXP1RPqd8xBFXRNfBRe2hJz7iqdUTRr7gFaEKwmjuu3nD2w75zwmHtYzbxvQTwpnYniMAGgvf3Mc1Jvzyhhw",
  "key45": "5s6yKHdeesN7FzpK4h3NWjLWBD6pjUTjEfHbBC7LdBtUyBdusti63igpX8QPH6NJ41MxjgBXLemhGS4JnrrZCUTv",
  "key46": "4qECoiRbSSvSGsUtkArtr9VZT9s6mVXenyoVa9S16bgFCdUZHKt4Vgs3wmzemzg2M3W2Jystr4qFMPKSTUzPJq7V",
  "key47": "HzerXxXns5mtBrxq5DdoZFnDPCitodqPWwMabaDigvUwsW1yxGgjLoenkmgVrpWvxqgeByqAxUtHXydmzWBgQJF"
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
