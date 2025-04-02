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
    "Wr1g9YUch6AfiQXBkan3PPpfMjkaKRbpPXTdnuCsphQQ3ukQx5s1F1r944kR35g9yPxz7g2nKkvmG6euyVs6AZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqRQbHahpEbz9wdk46CGir3ZcaYn5UkqJSygGpBNycwfMzCKH1SLH6zf886VxGgEL2Lde1Q6JbVdQBxFcyPjig9",
  "key1": "3Y45aU2rj5HZk58HJGrKA9haow3UGhrwSxaSaGKxuvTVNY6K7tSbELpraC7fXLfyGpEJsSbynBFoud4qU9ycjxZR",
  "key2": "3pP3tuPgfUxGoPcRJ71Rj8SJ6g7q5Jnug6YE2vhpkhddyJtyRZQVVTY8AYbmDHayZD3ZGVkr3EvfZUHtzGCmNe5T",
  "key3": "32ua7TBsCxrTYqDt6KE1jkqzU4drCtnKgdDQJWNhpkVV51NPgP5j84ajrAcUo3oTYwbzTDKJNyzWozFmjj6PhXtM",
  "key4": "4mV2UjQJjMFPE842B3iX2cHTyBy8ZEpERd6oo1bSVZm2inh9wsm9hkwpULQpuadniAE1i2iJfuhR4tziBHmgKjeH",
  "key5": "5AjBpN3xgnC7MHP8HUDQ9jYhHkjBck9kgmi8mZpBUqLktuNHkHpT3hFgGkpfTezCB2usbVv6ZXqr5WP9rfH6gpYs",
  "key6": "5tkrdDxRJbB8zX9B55zeHGNaWtsazn26kvMNku6EihMGdWVyr2YenVyS4ZC1oiwSUoYBriqsJiQ2TMJeuvSNmM6h",
  "key7": "3hGiAwuYUYM7ukURXdYbvQaU9YSK5PSG8sw1rvh31ezFUEND9tCb7ApsdbyxHv4nxJWHz5ZG1nwVYDS2HPWbyVLo",
  "key8": "5kKQGuL7mRr6BxVJJzNteraMbfJnyrUw4BLnDzdCmECPCiw69o3fDyJLm3T35YfBYLxFLkjqVmgEPABWK4cqpgXx",
  "key9": "4Xbmu7bNW3jpjk8JATMt8XMQESbra2u4vLpSYsEZAe71DMqRvopcoUsdMCYkptnRsorex75xigJFdUo6X7GMnPuW",
  "key10": "3xADpaJFTcf2whR1W5DiJVrtWmJbvfhZnjvGMqPQ8YZPggZ9vY6Dpcj4WYuz1mgNZXbfNasP1ao7vRoN5CEcenip",
  "key11": "2ftvoSMVeKyCzugJhitQyU69EQxaqb2XXkWSsU2zBn7F3GmwXJqV5o59sYsUWvBBJC8nih4eNjsZJwVYfcwutvur",
  "key12": "4L4Wzq4fjTDn7LyafL8a41tDMm23HMyVnheiHQGqPFeEXfWUjUHeB2Ek2vacirpStbcwgep6t5Nwfj9og8tQckCg",
  "key13": "5wmbjt3H6AVeFAyTrJoxgoEQ7k3THNKXLakx3ybkRtg8TSgpeR43KP8EDCyCdHi5pzQxxPRAGVJn7c5QAS2Yj6Kz",
  "key14": "4sZRAMnSATdLMRtZ2JtYTX7MTWcNwChpD7YPTmJe7MgSFSvQxSjPL4p1aB9bAwESiRgxxXUwoRrYzyYHCMGMaVYW",
  "key15": "2zXm2mXG2z9huT1ywMpVAH7UZATML5Pqvm8bxPdx3p5PTMZv9E5GF9XRUmxxdpDwE556kwVoqQty8PSmm8vSCzqe",
  "key16": "5T7aHprTGHwNthVesGJ2Yii1hiH42tBNrBvRM3EQcgCQvnjD3oWsdwWdTyaYwsyCESmYizAuNMM11J7xb233zWKt",
  "key17": "263NQWe3R7J9xaYRaBwwehhMonjvuGQdETfoZMJ1Uf8WCPhC89q1bPCyWbJSyvJRxDPWTQfzzqhFc6ZqQYeJtPyu",
  "key18": "5QvQAzktJuPrDszYVMofu8aHfUM3M3eungcgyuoUXdGiZbyDdGQGb99AXcrVbUVyeRyKCYR3q2XtAnyPLby4JkUV",
  "key19": "Pr8EzD4fx1XBtPCXQbAMe7FfZUV5V3wFU7a5VWnEg14Dq2sKoQRQEMGjX53rCu24EPXnG8ZQaifHVyaiJraHiZR",
  "key20": "rGBWv6W9DvTbhivWi5BfTUFMmkbx4hAUCDeGXZxtUAB4LLjbD9w7ZdasgkzgnS9KMHU156RykN6ZHjcaGNNCMjC",
  "key21": "5nfhdY6N7EFZUzo7WqzBAEU8xAb82SHH6rArxyRU32Mgb9EvEN3hAi1iECooYUjHNpsrwf9bkkL4pxgGds8UnwVm",
  "key22": "5bD5Vz48xWT97degVn2tYGKiMEGHePa76DeSoCn1Z4gnHvtDSMkpAHwRKyfJ1mEiFjSapbv5Kdpcb8B5hreikx15",
  "key23": "3nHTMSqsqMFcaGFktEaCQSuWQ8vtChySNSMXY1PfvWwHFqtAAk2C4Zz38nLbhZF8r1LNse6GozS7neEBKrRaUrNF",
  "key24": "o8McR5YntzrugkC5wxaLFtqgti98DRrye6r3i9TpuDiVGXcRKW4u3vo6zjjNCj5EJbzZbwEFG446TE5SFBJGY1Q",
  "key25": "34161fnjeUKv3WHvLdtXqbNXQ5KY4bjUAxpN8rzHRBe6NeyiwXjysPcpCELdY2SAXdnDTJT5M1ak3y9GxmSkozeZ",
  "key26": "5w9pEMQoZBfPJxq1tPggRJLyZE2VsEjSKJ6jXHVweoxmiYJamSR9V6uXAucxALXfn5UWBNRPMCpobMqUwWkNiwSm",
  "key27": "2a6Z71o8ThFsD7Wc1DyyDZiGc9fwgWG91Zb4oiSWYSMe824hV7YG86jwC5buRV5GZd6wMhAMCcbxGAYqtrfnehBM",
  "key28": "mzqMuynYmHccHtHnfeibEXuY2sTJ2EAzkVgqGwqaPkUCyfPt8K5X5H4svVWCBDKLd5naZAuJrvaPiqR8yoZKrBj",
  "key29": "3WZne6JmJjordTn7YxMmQib3oboKBC1gabhHgSjcP9wR4syMwm7YbUg9fc3hxc5iZyDb9yJiJp7HVSfqtApdmfPo",
  "key30": "3ve28rPCMG5CQgJZBoeQLBykQaKH49VwC5YGeBBJrekKDkESWfnQJMno86zG2YbGgsMozBPc83j6sfLjgBtcL1iu",
  "key31": "36chpjTLbNMqBk5VEs61eHQgfyNyD9j3NPP8oxNXhT4yJ9samxzeSJvyYwMgvu84MN9noDGumn4twtxZri48pvL3",
  "key32": "4t22GrQAFKEUfKTQ3AEXf8QxXWEU32TrFU6T83NQTSzhZ2YPiTfF6ZjsJHydcqDB8jS6h284KPfGbNu5c5AjwcHZ",
  "key33": "5iJRTxXpHcnGsckpjqRWQg6WrCNLNRzxNpZKcmSrgmtHQg4ggBxzLH9ZP7GwKuoBTtLRTN4Vz2d1SCRwnDW59g8Q",
  "key34": "2dkYptbX7BnrCdJNQjESdT2MffriqnW4PW47SX4J13AK1hskuLyXDiKmh8g3vvBmEsjXz9UQHf24pUzgp3EocmQe"
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
