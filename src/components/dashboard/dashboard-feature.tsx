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
    "4cGP1Jzsk33yLQn8UgNNct29HDSh5ENt9b5F6p2zDuXFXoSesqSKvoFCpyXVQxN8CpdEVeJN4SHFgvD6TTwkcikr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48djbam2U67LUxjFhMVT1zELU1hMRu5xasr1WHmgsXUhCEzrgy2kUDsQ94M48f1jvzdoDFCyYKP4nkfy28QS6yX8",
  "key1": "5zWLvA4n9hsGAt2N56MQMGTiitvv8r3oMm9gZaCvex4UjTRTxHN5ToCuB6u37ohgZ9ciLT91MwetXfGmMzNa8UdQ",
  "key2": "4vaN8cRsXEdDyHW54eBWm5FhBsB7cMCTRszqmiU9DwhbkkcqHqQG8kqRcxUECThfvncWz9UuVTo51LpKF5g1bmbN",
  "key3": "4XVmJATdk2RQCU4P1y1AeBHwhAVoTygRGBsfZQZBLLHjCWSRsTgQsxW45FufRvJSJ3nPeSGTKdvKNHJBLqHVQg3v",
  "key4": "4cszmPvZvc4A3soSE5DNTNSd75wB9KpTXniRkar5Dv2JLeBQcv7kLqaT3jEgo98y9JfAzwAvLhsN9Px5xD4LpDAa",
  "key5": "fsYJiYgx9H465aiyuooBE8ddZs9x2RZbEYMvZucvpskasNogT3hM7id2HTcbfZ7JC58EYmqhQyhfDB99MFBPzXL",
  "key6": "2dmyUB5t7REMeUpNUeQt9oB3V1twRywFfBgpKZzjW77DMWRGRWCs96F25E8iWZecBGAfV6oHHEPhc9Ra1gzAXscz",
  "key7": "5rfEMrtWaTHUiW6pf53AE5MVCUUWg6qn52jvrfunsC3rwg5cMo1VLKpppAkqocRnrVgp9x5sbxBxyT6mCAFCmko2",
  "key8": "4W9KRQqQpmH93S2qcf8UXVrVzKG1PN3CU7uVhW5t1N7YWDXS35ts3UjwybMYqMhBcjSHNfVs8wLjcnD5KXygz43P",
  "key9": "442xrMwFy9cGw5XVD1h6fMnPr3PqJ4CQUHsSkYyV2GknCgtt4YYGeYB3sGXULYHsfCwbYRiLpKpUn3AQaNTNwbj1",
  "key10": "uFtFva79vk7E4Xmkhhjs84KK6FDTchUP92wHotQkYYyEtihcRuQ18wYWkDzFm9YkCcAQpuYMGwsb7KpeakTvepb",
  "key11": "A4p4649DPKEejt6nCmRbqPUaAW5Ziouqf6w8KsWpqkAwUpHBSXzvshmXBMHc4ySu7TZ8cCsgSfnhSgxGz54A17b",
  "key12": "3ARZ6ZYTf3zP2WZRzPWwjqy6aw7yKk4RfcLNJNymayDPiGbbbihC6AzVBC9U6xG1aAxSUyqvRrVzn7Z87xSmKKCf",
  "key13": "oTUeE7hYXVZ2SUFhcoRzaBcN5A1RhyN5KqLFKX3miesSgzhVkYGN4345muWcL2QTGzpSzQc8Yg3j9rCRDoLRWt8",
  "key14": "4F2TuHxaAj9PHf2CRjRbpD73AXYXBXF9Vc4qWWrcfcPeQzkhd6LaWn62XfsAptVtipc8RyaVoxHgeqLNdrZQo3g4",
  "key15": "5bitJjyhyE5yyfEXWcnZncfx1ZFURXkwcMgFJtbNsJLVVYDMhK9L1nZJG259AP5vn6iZff5Remr6amrQxwY2hj7G",
  "key16": "dSDH3D4uVcT9VE2yqmkHuT5EQxNcuzwGi7jGP86EfCNVnywHUo1WfzHa8DYQqERHAdez89AoAMyfsuiHUkVAnjr",
  "key17": "3FWNR6emRtZR7UViS6tq4M3hawRwu6CZa3dqytt2b8ScTTLRsDFnFKo2M5hHgeTry5e1X9m8rbrqLoxbUWFWeEvr",
  "key18": "xqJoVHYHqQrp3miAVGaTjzEGGLgtbktbpunf1jQHpSExDfLMHfog7g2UfikoqXdX1y89MLmk8JTCPvRJHw8usUf",
  "key19": "3YGbhgdhCuyU9W7Xgd1xYVKUL7zhkJh4scKFqLj6x2iEoFdZoDVyC8iXvHetrFC9Z6RdChN5CyoxUg3NHk3Casiw",
  "key20": "5QNe5cy2XMqFhrQHsRYqW1M8HDKHaFpXHM7XdCWJfchqNwssAGsR2PpSMgHSEeJfEwQD6XLzAiPZayc8H2w6jazp",
  "key21": "hizRauxeANKbKcr9M6BUJb1jbvUehT91rhc4DyYDHPptsVZVemNPSvKVQbJLutQkAGDPvmjWMaePEN61H4a37ET",
  "key22": "34xVoP7F8f7y9yagaWPVDqcAPcPGaPbnbwdmbJj9pfSpY8yiNacbRMFKhxYkBd3V74NyJhsDDBUcy1YKuKu2oSYB",
  "key23": "4LdBZ7dHTgD6j19McYiLMuvaay5kyg7doHiCJgXmd7AQFF1uPABbsmXufJaFyMEdGxz7bsNk5n8UFBSQx39jqgsZ",
  "key24": "38866x77Yq4oco3AP1A2Wd8GsFNnrB3PZ8bgWR8N4XfKnkGzCCyVCz9hfTT75STyZWoqStsn5oRuQ7sw113JDpNc",
  "key25": "2FgVqf66sJxNhXUpSXAtj2Kw4RrYZQ5VcL4f6aMZAkK6UkiDfryEuEd9VfRveZj3k4mmBQsR8WB1qrtfSju3Z93",
  "key26": "3h2hPshToE72aQ85jSFtiY1AgdzugKTppnzQtAH61QixZy4zXiaxbuEGm2cAHwpk8TmtoWPeny8tNWBkPHBNUFST",
  "key27": "3b6ojwvL6WvdYBLZCopDonuHCxeAaubuCKoV1Kqk2E76mMgZAJz86FzqTmYsBWMKZWftPggAESXVW531Gik4Ettx",
  "key28": "EZCB9icZGSzn2CFeRSCQqrrzhJV2KgRQgsUNFEUu1JiVpuh5cRqUacBG4tbw6a3K2bHwAzQt14cLehXoYfUaeKX",
  "key29": "6AUSMMjYSPZVMuwDYwKkgwwhZwWXV4yDEQUMEue4EoEjikhkSzLgRwUswtAhu5iDeEKbJkPu9UrnKHKaZd3MH4s",
  "key30": "5DGsJvY6B8L8wM4uq21wQNtb6HDCrAfofgcMueWN1c9QF6WEoyXQ1qViHFykvEXhStprMybCSnB2xEkemiQ6MruQ",
  "key31": "4XnFdjbpKPtCvVypaAowFxzSPYXcxpXniEsLkmemhZA3gDaZWqNFGCieV1grFHmMsUdu8cA6r4dtL5PqYpQc9GcW",
  "key32": "4Xm9y5hMczasCio77LMTqTZKfaYUi5LHnKwBTvoLaRosEExh4GZTr2jZQGu8zveoqUXgE78z9X2roUFCh6vT249h",
  "key33": "57n3UEYm3eb52BDAJtWRGRKSLuaWPLwzboSYz9TeeMZQTbTbEu28jDSDJ8PQrGfkiGqHagJYRSY5jBNdxPHfCnVn",
  "key34": "58uVVHEcfbomxHXW3iE2VoRoLFKejmvkah11QTZXGKuL27HBWiV6chZqRWsKpQbrkGmofk6XsYdxAxczRcxu9tvn",
  "key35": "32XzR4fTQGavX6M8nE23SXTwt1MrHESWMjUgWmjqet2gxKPE7F1xsx6PX8SyFeYzuHpzRV4HJXfs1fnWNj2fiSsE",
  "key36": "2fWf7axZ8zgZG6fTHiPuz1kmdgWJNK9JbE6Fp3536tERqLDbtTxGiCR71yBurcXs89VdSgTsK4VDWc5utmqXjpDh",
  "key37": "NzU5QZh7aDwpY2cyDvAxDNApSLdCx9ZNF661MA1qzAoNLXL9t3ecGCkJnrS9cD1quTqMaNPu8S3pdiTtE1n1Vra",
  "key38": "4ertrf1dChGV86VuS6Qdb7rSzXn7pbJQ8NJ7kKeez1kdLhx87neMmnfGaFLJu814MTaezNyNofiEAGKBZFSazmFF",
  "key39": "5fBoohV43oUB4GRrq99VK2FTEu6hySeYTtRhwfufjXwfUCD8zjdaTTkWqhxgBxGdtXtigqC33AJvS4Y3VRxgPy4",
  "key40": "51SxQRvYvR29QwkZniWgKJTSzLrKWCGnJJzDhbqseHGxGAcCnAdA1BdyMzbv5G8HdcvrnuyN3MJdxeRnRNwkFyeF"
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
