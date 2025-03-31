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
    "vo9EN6NhXrZ6D28AaAEUjzGQpah5gBh5qNg6UDnMMMWYS8Grwxg4mNCUBckh7XEYp3husDz1tgtcgSJaSY2X6g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsJP4gqsUnGbgoPU1ecCqddGpwEYPyYT4iAmnj1AAm4egyyuGjko6iacmVgjgKokCuJrPSa7xsMjzVbzB5DkPG1",
  "key1": "29HkVPHCfoNeUajEKoAhc2Gjjk9YCraabMCcC5GJ8f4zuzvj5c6BHBRhfiCCgU5o6jF8Nv5dJR1NxQrtL1LjLzMP",
  "key2": "36mmtbH1gS831zqED1Q7WxS23fRjK9rYir3TDjRQY7Kx2JuwrRtxCSihSs7HGbLukyNrZjkmNSvkEdbG6y6nsW1j",
  "key3": "3avyNNaD8qCaKqMon1KhWCnCTbL9mWpVRd4wWsizrZadnUecJCBjjghYx1rTGiVgEF21TduQcdMNy3UwZ6Fg25GX",
  "key4": "36tHyGgXg38MiPSya5Lx1hb2qHJgdufE5HWoNMBuJsrEtBrf3iAEk4t7dhKMoi9LRLoHfxvxQMiP7wE4eJk8kbqG",
  "key5": "2cEeJvY3cnPiUfvmQhgDzuac4fjhamCUdYHt55aHHEWaFq9LsyDkRrhvaz3P5TFwNSQUhVBy1grjZ3sXbBhnBD6",
  "key6": "2mu7iZ6R6FRE7jBSy4WAkXCV7QzwSvgCcTFA58FuVuDP5UsasMRx9NCAVFiEcVGpT8deT33Tuo4oDbEnuBHyDj1s",
  "key7": "5JHvCWCNKq9tpGw6j23mUjMgwxDRAEoFeRrW7H135xGxFRmQ7phwwa2fuZGCr1gKxMwGwpKqDrjNJfYguvcUwTGV",
  "key8": "4FYyLZK8GxS6swokkddMCJAGvbwMEuTB7Z3gWVmc9FPKkKEHh9AazohVAf4wRwYwbrkxd124XPwanscsLBA9LUPJ",
  "key9": "5nXPLux1F2kgwXMmdxRASb544nztoXUUDEVmkP88gdFdjN4tV1bW4Lfq7rdMFmNjchwyzvBXgSFXuKss81KYZCud",
  "key10": "7N5x6FqAK194eVXwvQHSkkQgoYZwGmTxLxZWP4cfroYZhctFpSdg2iRnDmxj6gj7FNi8bKcfUfK555Mm1jqUJoc",
  "key11": "4GRLtRc4c3GfmMBkmJaSWUfFc76vYEaDW5uJP3w1FaMunn2BJNXjdVpgTNUJ4Hu1E3Hc6Tt1Skt3DqsnwUXtP463",
  "key12": "5LT1qqaPCMggsNmaeqVuLbxfXpJiqmTixN6novyNG5c2vHmg8cpAws3ZoeyWzo4TwJFmGZy1K9cSGE2bA1pFaZUM",
  "key13": "2MSNydNe9qCLAuhmaQVcq9zXkJq1BhWdo4f62Vnde6wXPXmw5wJ4Zv8rvSDKYaRtijzYyysaviFgSi68XdLRxUFx",
  "key14": "6284mSuEpBt91wzRDdcTpcSX2z7wknJVrSWzwRF2Lh6ie1cdbMrpzkZx7mtiZv8TfDtkUfcjP1w3F1zn7tFeFkAC",
  "key15": "o8dsa2U1M6HJivLsYzcpCBhRsKEf2KzRJrY3huRyt5uAi8FQW8LhkfwpqhijZqx3dZTdN6WnieV6SYcwXmHWHK6",
  "key16": "3NKc3reKwFyzbrY3FbkKtbtwqNV5qAqkqxQJhG5aWrvQnji2FGZVRUoEuPpcTZSgBFY3EhpRJrvZ3PSYFfm1iu1P",
  "key17": "43mhkBVUiK6HhGCjUbgUAYiP2SeL3T1zPNXFHwpCfDa9AcvVPfG1YtudrgULthEx5MFJ6BMk2xuK67EZDi9jG7bv",
  "key18": "3Ha1jqvZrrCHVBqkDkaUvr7gt1sDkpyCEjeqDapnLraCtgB3NLeJNPU8DLVkCEeLMcifHVGUpBuaMqyr42NNhzZd",
  "key19": "LQtcCbKwCGvwUjYXLtpKZvn4av1qHN3stoQSgKWg8AbL73D9HGLijs3jR9KJp1fsZkRhX7vgGqzqWzoCeyJyNnM",
  "key20": "2hzto6mR88y2MuWo4nbsDdQnH4ER6b5KYtqmSx23rPa9t8k6PQSBKipFQ5GK1tBgo9TM8n3LAAUE9dBfghd8ciU6",
  "key21": "3Bg6Lg8KvB9Q9gDcjCwCGeFVJtJvkLGdmKp3Y71wMpnE8cxA84JFFKw6h3ND7C4Nwvq16Vf7FEKoMNazAJQnZK2p",
  "key22": "4QPAx4vPBhDBy41kPh1Gwvhh8oMcgMoZLdLpMh2hpiLxCWBt5P5qv6pnXFpgaw9Vc7sxL5NsX1BSqHtpgw8Y3gyU",
  "key23": "478dY4KExJhxB2mcC5de2ERzhkfqm1PimcQKrZZFW7hTmw4bdn3k3td9Z32JKGbtMXcmF1qdAWxgzPsdiQ4MCChr",
  "key24": "2itKbB9xpDiFeg9DxPzPftHjukeHqfkXoERQASxKUY9EBVXjMpdCLRPcuGJQTmqepThZ1X9iVgAidDcK7hZwi7tb",
  "key25": "5n88cQVZedgtaYdfD8JeUm6muUK7LeX3kNULvX1xU5KRRNLGUNy7R1c7QmkTc1a1hX89PE9Na1XTZnEzgWb6jANu",
  "key26": "3zcBc73szGmXTt9SCmE2CfdCeddVwt211BxeSwUKm88HDdH5TaCSH3sCCs3pYtqbCfxtVDYoT1oSiK9w557e65No",
  "key27": "sWgC7dnJMhL1Tz5UDcSxdbRk7TGXnyX5JQvP2KVfY4LXAuQtp5KyQtxYCJmJbGwzBsHHL2pYWTwCJbo44giGwGi",
  "key28": "2zd2WH4wxoHNF8D1LznuSp7cM3ZdVpNZZATTX1jGBTXYRbPQJiTdRPRfJnkEdcDibmoK975ufGhKq3eKJTADLRQM",
  "key29": "3ySYwcBiR5St2DJeYhdWN4rTXpaKqSn8WwSNTQu1mS2N4sBug2EUDcgmmGD43T7xnJXWtxkVWj7dc8ajTL9ByhAW",
  "key30": "2gY8b1XsMd39aPgYjVBXKidsq1GYRWNwxuRzsN75hgVEiq1xYzchWWyrr6aW5ZeShoeu8GU9YJjVNcJ9jAyU5h1m",
  "key31": "3g1gWhkR2B7GpnxHGEmBct9UFTySf1HnyiDiMM3tyMp1DRQQsGjMhPQ38GrX1ZU9cak5tUHUXAcUFiPgDk4jce5a",
  "key32": "4q1ApWNJGkSXSVXxLZJGCoQA2MvDY8ZCCwjLca4rKT36wdWwrwhpAyqufURFUt8eADaQNQRXNsV7PorgLSuTWqGF",
  "key33": "2wPSCYZDUyvxmBnWVH376GyxuNVGeJZzsvdgUW4GrJDb8F22vvie74nSxb2XVth41V1FxLNSx7S9aMza8XVL1vVV",
  "key34": "3wr1y3Y9YAiKEz6dK5fjkpPEi8UJYPhst2sUCeALco9yfpnXK4R2yCvtS28RFrLeaGWfiGzLJViUJjwgDb7dHbon",
  "key35": "JbSLxRxwgXNfu13udR3XtpgfZWHVHV3fCMzTHH6LQRwaR27Rhu8rUQB3qqEfqdeHgMhzK4DBrBiWAFJDoyyRSEt",
  "key36": "5yJsJwQpDb1RpkDVHBirfwQjdTuYjEfUzLvRCisjFRM9TdrKkzo3sDpHrCYTizG867cYZnYEhiymq4uzEA2yWn2v",
  "key37": "XdAoiPczGMchu8ZkrPr9G1LewwYx6f8hugCBxWxv7a4rS54J6umJvhVabMGyZkpGFhqH55GF9i4QmZCX9h7C8LD",
  "key38": "2pccuwtuSqpDiew7WbYHBdzm2UVXoSkNLb5BtZ2TsRnU8hzes312qP5fhSmMTLuRioipowBSarspB7r231ZNr1im",
  "key39": "ReWRQNpBFcvrBJxvxawPfNnHMzRaef9KNNCocnsswgbny1mgdFEVh2tn7y59MUQpkJWe1BQ1XL68MyQQ9QiKeoV",
  "key40": "2usBSbFetePAjR6RE1NAKAVxZeKnxaHdmLoRG9gMfzn4poJxq4rRBYwhCThCwRmx7bbcV8sdApCen6TSQLeKZAY4",
  "key41": "4wmgLM5e55wRW2NaRgF16Z3PKfroMHsjEDcn5XKweWybg1VHdUCmkjMCJ9Cw9ZUzgoodiaJf6Ba3CNcWayVYUt3N",
  "key42": "Gr42wktuU4amP8CeVxgrciuvC4ktWv6EAhnuLjzRxJ98Zxsp4uBnyqveTXouFXu365xa6bh4dMn8YKQqBZF3nj2",
  "key43": "3P7AXVgNcB3TJz6LmAJ97PeRgqKVDBwLd6bSjV61eCMFomTzhqDfBXrCNYbtG4CNrs38i13kCLwqJXhLJzRdiAHo",
  "key44": "43fyGZtW7n4Eu5hQQu2rcdU7tKVQq2pWfRLN7fDP5e7JPFQt1GkiiUoGAsfFb43NV13SMoobgc6JnzVKjDDDGWJg",
  "key45": "4auqG8xkUBxZZNaaG4n6WFxcEfA5RVrPPxGKC45So6VyxLmdYec155cCLWHKrVDfvsdDqd4G9t7EhdDXvNSpG1U8",
  "key46": "4yitgE6sYMZApXGKSjJBEMEHgaxM9dgVi3BjGsT8gcnL2ZmoJKgDewYVMzTKitMZmTuun9dih8TUDfwisYPmbVpo",
  "key47": "x6vpeW8S835dv62cJBQ9i66bmhMzYZ8W9mgekDz5DVX18yySLWRa1qCdJCzkReR5LnuSMovf6CAYKtSLRXUPWKs"
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
