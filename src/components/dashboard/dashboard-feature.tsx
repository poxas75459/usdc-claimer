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
    "4qmr4bmD3CPnvzvd6HsJ3Jkay8xKsVgKFSG9NaSf83VBFCz3Dm89cTE4wwkWQjzbCNoxqm6PoXEqzRUVeinGNtz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piwx1UfEBCsXcW4hziG8dWqyRVp3r1KKRgVVhE864AUnCpXV568M97VagVfVTQbm8d4GoZcLFo7qB1yQuN4gv34",
  "key1": "WTWKcyvFC45iCjpjB615xFriF2dJMvYh6qE9oWXLdCkMedEzvBmSRSA2oHsdZT8bzYCffM7YyxXe1ws81f7gzn2",
  "key2": "2JuSRr4K5H8r5auFCMkKjKrZpUQZkocKuSBARwv7NvdLTwuzZEtyYC5USBxKs2N3Wt5t4Z4GpEdvQP44673y7Tig",
  "key3": "5cPEeJTnc1hoNfdqyQts65Q6WePErEbVyUhNhh9t5rsjrjwFXPUHWCHhJm3E49uvs3QJxqK9Rpph1XXP58WNaBhB",
  "key4": "PKVwwCJmNu2D8RDfJ3zEEKdsKi51Rj3VQXGStXyvcwGG3qFghTszPZwhAdeXYKpJPQTdAnQ9RVR71j6XLA4b4mU",
  "key5": "611AZip7Rz7z7neU563t2JsPYqatEB69vtyc19kPoa54H6GGxiyjo9AMdPyt9saWA6qm8VrvY4uccBCWm8dfhdnk",
  "key6": "5HP3Mvdqidwc6kVUmiWgkAFPpUJR2WeJebyhewuxGyHRnwajnWPr9zwhHWoW7ZesezvpBoCGSLYHb9GmRAuKNrqG",
  "key7": "5hkQ4yZKZnjdHPiHfARJgMAHqrjkTvAScaxYVsW4z2TpyXr2yidCHeYGjSVKkXN5m2ALVGQTjSsTh1EyNAj7Dhja",
  "key8": "311xhGRTqr4yyKA4nASwuXgN4s3Zn3hiuHYoVN5FFXKjvQb9jeZkbatTzJyqJUsoHpjAxhsjFmyjtTBiprMb7ebt",
  "key9": "2yNMNSTecE1QbahTVyBoUH1UrtA7vocTy75upifC2wa7NWrGVevsRrmb3ure8Q1b5qFwndpyR5jHVHaXSwGd56jG",
  "key10": "2SXv3KG9a6iz264QvxutSpMei8EGYwzyd9Li9U13XpN8ZzyqjKqMPeQfyquCeemJe7x42y2hyD1vZARSXr5eZK1b",
  "key11": "5rxcDg7hxkYNE6kC9xRNBPGrAuZ5smVkiLYfU19c1puuHyKvCeXEpXeavxpoKJTPiqssDou12mxamNhXS9BRxHxX",
  "key12": "3XSA9P3HdPQn1AtSSFQPXH7MeVboGMMxbjGZwgin24MgX4igmXcdyRLvPaGq468yTQH4TxZsVqSHT8QpUWrmr1AE",
  "key13": "2MFKvBq9ec1NTTKgXpNLGxE1WodvNMKSyxXnPfXZAmomKP3FqYFf8LKPEE1UygP4KQA49bS93Z8nU3rJNW4jdVev",
  "key14": "5aSqrq9oihCNgbNjjBpBazZehaUDzQEMkMCUntv7GNc9VubRsvccPEsJZdRcXbceoHoFXhiPb3zBdayvWjJ4ZR7b",
  "key15": "5d5dzYzdusq1agNGXRTLkGmTjPM7jyCsNLESN4MuktUw2kkRLmmrfsJ2UPsMNePjbeUSWLMG19VWw2KGJjMWH6iC",
  "key16": "21t5yGjpL8AJactibGsB9E3Qwt2pPDWfTAVKMPZr9kchStJa6seAhwK2TKwNxH2vJwccsUgKNDYznFcoisTXLMQc",
  "key17": "4AVidNuP3jt9pCYDXWx1w5UnAjkndqAi6bxUSHkFzaXTg3aU6hB1uX6sqnFNwPKFcEyzwv3ktFdyVgDQbqrC4Mhi",
  "key18": "2rEwwJtNyWPr8FMjyqgC3PhYm1kvcWb435C3s9CFAAPrgB8bze4WgxRCTnTd3u3QLoA9MfvXsmMzS8ivDrJiGaSZ",
  "key19": "9Hbz43RUp1meY4M3uFjdPUHcasR9kxaqnqRWs5CmQiENTrd8WT6RbpDTCahKEj8FZbTihQLCur7nWsfWCo9vNZK",
  "key20": "2vRUg6AMBWhU3Y8CMstNfhdMqnCBXrqqtBSSXcEcZtuzEvktEQE2BZQQeuHy7EgaSzf15zKF5MRgGkEKFvgLz59F",
  "key21": "32eFF3EBYGtxworB8Gc7swApzT8XcdhqgyFJSofFcXtGJBHG2vdFsQjB6wjRuWaNafs2RB2CJaFbyLpxzQxhp5BL",
  "key22": "4nQeREWgNU7JHPCh6wqJXjWyGQCdwYjthcjvT5WuFWPkCVxCstxit6V63rbo5FH78wbyZU6U5peGLJDQCcisCnpc",
  "key23": "4GsZ9k91C61dAzKW7Lq19iYWxvGYTjpGhmnsdmD2WwZmk7A4f2qL9CeNZDWKzdoeLWHkZL38g187KU4NaTNpn2Af",
  "key24": "31dnnMJwTMsJr2rZ1Lz5knSoKwdzGLYAnS8FwMevZgJciWszKqcCPmpntyXWSMdg5E3feFBrvMN1dycopwNYrJr3",
  "key25": "3kDY8K7oi7BjADon3PHmATmpWY3hwima98yoSH2djsCH8ZFoguGg3imE6SzCrugaMAksAkufqSeNaP8q6Lur9fc5",
  "key26": "5DVBo7R66AivcnTs2Pgi6Js73eAPPscNDpDRXWWz5Fs9Yi2pjrEz8cEjVybXLRyfVQwRd77o6TZEBQjgLsvAP5Wg",
  "key27": "3GX2QAgiDz3JCYNF6enhzQKtnG3vH8KQEAzaZF4JHNkYjjYeYkWGTHpXUvXvYv4fxiFZk31obdvFShBWW1KJ6jGs",
  "key28": "A2bUF3NW7tL1RE638RKFkQpWTw33GAWS5ETxgHCiuehUYZ6MHrg3QqCsQR5LnuiTrSnCVN7XgK6eS6g2oCCfHEN",
  "key29": "2rvTBvcddVpur8Ap6Auw6NVL7RzJRJHBMfpMTa3q3brgP4MUmKyfUZzVU69mQnsktN97uqsFDAhfZYTQPvps2ZeV",
  "key30": "4SNJndPZ1DP9vrjSzsRM7QeGNSk8c4oYVYErtFM4JJbzHArXrYXR11myCGWbvjzh9wSeABzFxeaFg4NiYsUnHzBG",
  "key31": "TaMBWvF3yijaZnu4V9eK1aL6GmFRQCdmtNgtkVHL7Yjy5EFyKzd6TNQAL5cxgSbyHmcRzt1GpRAZpT8zvvx2NpQ",
  "key32": "2s5C6uDfFJX5ZhXhYd7GJ2nn4Ui4ea5Ei3tB7iW5hDMYPWgsvkaMaDF7jCydzWmpf8mt7ngWmFgE7Q6boakPae8C",
  "key33": "27DdhhucD97JZEGMHCiua69zebGucxkaLUsukXYqSqwVW9agG1sZReVDMubbg7XYy8ESe63QddgcBWDETEMxDTBg",
  "key34": "4TcKxoA3TW4EKmVLN9du31vRSMyqMVap2GgPJgdWbzWecyBAwEobePWB64UuufyeE4fdd5VchGWYk2SX1K6cso9e",
  "key35": "39KGyZFnLKwEHySnEw5Bo2pWKuVvibXs7WbMWbwTyXfnYdmEf9meTqG2DA6c1o2zqiKXixJgPdgzNyH5LtmSy4RM",
  "key36": "WXR7VpEiHweXMLwXxXHkHkb8f9uK5J3xFyUrETUjMS1reQxykW6qrasWdSxhfodk8aWoVZjgvo5J11sSrosJHGh",
  "key37": "5dy3nt72xShR3JWN2gDRJTLLmoLzePmmVPswWGgXXsPXpJ8VyZ4HbdbovW6pAqdnoD3W3bSMGmgFpRCyKG2rYmEi",
  "key38": "2ERGiojqnFTgqAjHtFbfHAyooL3SCLJfmomsteGJy1kEGkpHXzm8piXGonmvtJ9ANWagjF8TMed3ofTBm98ohFqc",
  "key39": "38dmhS9QJBAo5stiy47cUhjj5D9juYeisapSAGT9psSGfGSi2zM4ZehesybpDMxMH7FriEfaRXoD2CrbkB1B7y1h",
  "key40": "sYkCgJSX76ksLMDmjaUEWpuekk4pRpHu1NasLk912NtybHgAnyxzvX16La1MZJxevyveqLfdMvSd3EVGibA31Mq",
  "key41": "4xdupcq4h63GWfeZQhgfBRMCxU7tiTDYjCFGvKfGwJkpdHpKBvjmKbUmFLtybdnwsq3mJJEEFPMq1ymZqNeeaFZa",
  "key42": "5CDzNwi3DSQsXtQ7aKvbT2MLgeCw4KrZhzxyf48tmjHCQGRGUhyfThdR3RkF4SQpzMa3WK8rNrCWuohzeW9xivFL",
  "key43": "5EuSxcTeDNnXEEbteTRno1J2zNUeiYa17uHjizEKxqCw1vxzmPkwfrr3uobWjfhswZtvc62AngkKDnLrJc91VRDL",
  "key44": "JxYrxz4364nJsnzn92hJQeVoW7aWjo8vDx8ejwrAs1YN8uCimVSKj8HBWtvDhYMZS2dWqj3jYeABppRjAKKNz7D",
  "key45": "2vd5adkbpUdHDRi3NkjNTpc2udsMEEcioRXqgDqN5La1befHYiP2dj2TgjPB3bwG2RovcYcCnL7Kg12BuBzcdLMY",
  "key46": "5xMhZeHJRvT4vjAw9xaCWScxQC1EeC9LeVrQ5mxVGeZUQeMD7fA4qonAGVpWY4es5uk1xwfVGkj4pz5xZy6hbwc3"
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
