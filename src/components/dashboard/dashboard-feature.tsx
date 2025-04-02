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
    "5jYvVVtuY436cusfeWEb7vFVrHLoUU7wHPURQYkxa7VjuKagi5jjd9rQkAjsSUC4ah7wpAQVNzPfGXunaqpi1wQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCkLL8eDn4RZbcNT9QZp8Q3QAbf1hGNebmChkvDCc1ftbGMRnqw497CT28eW3nmfeXRqMmAYxGJiejqf7fZwUKa",
  "key1": "4X6eawLcb5FJETegZFidAF2jboYEfocRw5DSgSFXcRNb9BnthJtX1XXqn1HvJjWzXWg8PHQ7NZzvRemYWZZBXAKp",
  "key2": "3p2JyEfxqrqP3PLATHwW6rsDhGJiFjsWwHJt5YRaRQ5XeE9qLQraj6DDsTBVXdX1Zc3D4RoHz7SqFXsGLutQmUKh",
  "key3": "4YA3HK1czKut7YZSQEGQSL8xcX7vSMhrUYvDeVxMBX6rv1C39dAKs2Xs4igEhcZNV9amMSMFntKT8M44bpfj9cG5",
  "key4": "38oDtkQhj1jN6KnoYbHe9jKBxDJ8ykfjrMFDwL9MjJeSHSqsshKQ31YDJ5VSRhMffziTqJrBHijMQ9KQWwMLMA34",
  "key5": "2NnqvLoshsuGGnLD1PRZnrFHkQ8S7LxwRATVcsGbASRdPjQ8Xb9GshwxTZtC6kDNWqSqki4RVk5aVvKujPFamna5",
  "key6": "29gLGTRGtRMBvMZWQaHpW3N8nVH7vLZhahS9UHB4PSS9Xvp6ewsLKu2adZQcQm2oUBsHw8vvYU8cqoaRkW547ojw",
  "key7": "4JWhHwxFWRgo7b7tQtSkvRwbMdZjSiVVZZQTkhg31uK1YkHJiTB8UVfKuT3ihtPaANNjdFrRUChPQfHsDjaRfKv8",
  "key8": "Lx99eznRYiRS8reEfT12NzyiB4a8s79KrMhbUjm3eyxRKoXxeNsbvZmKjbd95d1LPZMK4ysRbktUvopiopWM5ko",
  "key9": "QD9T6j6qZFc4qhYNVJ5DsVwEdafvh7RkAiLqS67NzjRo5SV9WgyhveTZERpFusgdNcN4knC8VbfPKZktEojcPPo",
  "key10": "5v5Bhnoh6useBoBiJRpaW4kqHEEicGn9sC5SFSw6X7a7zfVvk3cApg8rreGWJBKJ4VbQBRHp52r1jsZQwb9kqkQ6",
  "key11": "Ztwx6PtCTgDJ6nviJkjeZpFCFAbhWDi66RHmx6QE5f26L3R2bDggEhQukopx3YyaqtypnqpmP1cxpaTXeG6u6qq",
  "key12": "5vszdd9rULgjD8Td2vRXLx68KiKGcdBLKnGedF7pbXna2DWbDWfg9aAGHfJJvyQQXfq9T9gXra34Ks2JCMcvsWQF",
  "key13": "2APso3DobwjMBUnaZQ4Rt1S1zVJknakKsX6zZmwbt5NqAgirYBbyaRMRQE3gUm9T35eAbhTBLS5DgsvCVid6X1BF",
  "key14": "4bZMdbzfGsk3AkKg9PmuUZXTZKhGaS1kaCZyFyktJ9xXVaDbRguVx5Zccwpi88PRgcgLidq7TgCWqgM5GLqHSYLZ",
  "key15": "45S8haNp3pnQrGWKD39wXVANp2TUkBj4ceKoa8cPmjrpNroKuRPEhBR2vVnbrJqDqLdw8VyRLAfqg3sPjPDL4A6G",
  "key16": "X5PYE4PwmNZqKpBAwrkMosCzARLgCFJx3uQXU7FUsDA1Ke215eq1XdjUJbtea9GB1uBkYda7BpArMxpYts4hM5C",
  "key17": "67TETqS89U73v6ykx73e34u6HkzeAhkfTaTaS7zB5E5DfwzSQwRMeQVXpgg8zFMYvaeBd6QrSpn6hxQSDZAA3cKn",
  "key18": "3nCgV1h1oTRhcrKcSZGVP94zReT7cZU9TNNwxLsKpKxPsJHJAFHem2nkDX9NBY8Z3AunNHLP616uRHmWi6XbXHtb",
  "key19": "44pnWtTP9TYMx8aRTEFbtQ37XSMWCPPjkPtJawikRxE6nk2nYjSXNPkyQ3dF1AYeXzcoXXptzHCT1JMk3HMXpe43",
  "key20": "KDuTYvsBzawUuNtXbLTLzgyKAcuAKpEZP7PkCmceaKSRJEzb65KB2njJCP64ca8LSTjRU7Uam1y3XV9FJWwViMG",
  "key21": "4J5JE126QxDXWxK5q21KktMtUcCXsb6QJAcGrHuLoUPk3RG3RTBRfsnK5aVf1HSHmGrpn6SJv2JQo8XhK4L7QLXF",
  "key22": "2waW6Y6ZXRhkzFSVsQZhdXE1d2S2EGHrKJC66SLG8eiSUWBzrZoJLVnWgQqB6UdLj9g3cAt46bqimrVPd6RX6RJo",
  "key23": "fUiQ7PXZabzR3GiZjvfJ6z2yr7EpMKcb2nf9SRdNfj9U4y8JRKirRArxoc5avW82bT3wuUasvF7PMtMVLjExnbq",
  "key24": "oS278cnC6xGn43dQB3uMYKnFJMo4EBan1y8QZq2XNHePo2Xhhb36iL4TciNzRuFSb1v28jmLCxjf6q6eDrqzDu5",
  "key25": "5dXkbjRtSW1n1bGmM7vFR849U81oFND2Jqv11u1AAsqnUHFNvd4USSzpzaj8gvsFVF37Lr7e2RnM76z2NLaxZPU2",
  "key26": "5T61aAAzysCayu1snvQMUaxEsoMJDgy5EZdVs9XpTERegrLF3Kio8jXqfiDk4oEiVrB1ZPtHUmqJn3V1mAPhPh3R",
  "key27": "TRP9QjvTvc3CTGpzA14EZo5qr1qmsR8c9KGYYstQzEPKpyUmrWmZg1WSZmrgcaEEc5T4XybxdPjsoT2RPV5asud",
  "key28": "3ZqvjLDZMnfQ8u9q4c4qpmChyeTzZiituA5xKGVAuWHF1UYAc3D25jMAapMm75wjQThsmUmdMvPhgqfzAgqnnbDi",
  "key29": "2R8966EUhe25C1vp34cD68YrcsMZFBE4yPhm9gsoctG1Bpgw89qA7fKeWi4XejmQXHFzgykhWC4VhpL5WNrpor6v",
  "key30": "48GEv16Jq83vjjY4xmiHq9pMRMEJJ3FCuH3Ah1DhUtHauuXz9EHBe33zh1TaejtMh1iKpEVWnK9yyG4vVboroW8A",
  "key31": "5BvbXNKwWWrzUCy5hy3ZEJscp5MwBitH4yxZfwW8q8oEUCAGxiwzmpTETvDEBFqsqDsjJeMydZF9SNuxZ7tT2CZQ"
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
