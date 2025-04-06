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
    "2zTnLBj8ab5upumDex9BY9QjngURWJGzfheDfxMHkCnvSWAAYoaXGrjjJMhRV5HDUdR6JcxCAEDxbowJEVaaLZhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41f2oFy38eMH72iKsF7ca758Ro6JLYhBwZD2qpwUqukbVV5Abxvu9CbVKRCLd5d8EYH7TK9T5a9RCaohF1BQ57ue",
  "key1": "3LpBj3oXFiZPUaggF6pyd2u8aLVGgYwVzGLFxG8KPE57NeAJ6RCi87s5xe7bd8wEzBmjcEwGH1NRUbpZSr275FM9",
  "key2": "bAS5jpGSfyDwen8P9UwNtA8w6jexQnVop2QZmWZu9q6UtcvyojbDkyECVV2MqZeHmtMFVcRgE7hWm7tg6A7yp81",
  "key3": "z1jrbwgqdaDoUGTgwwAPpQapFU6rhqzZx5MaSMEVamsKhpKr8EaNUwcA8L1B13moR1xrstt5Lp1Q11JDKerssyP",
  "key4": "AuvwRVuBnbaLGMpuogFqAvPVVWLVkp9yhjTzNZ8QcMFB8tAzVu75avkpsoy3sV2RmDkF23wU6GfcDrq1By39DdT",
  "key5": "4UJKwCaUNHvAuXZVaj63TpJJGquiJ7nEC3qnAsj4F9VsFq6xKC47Ko5XqVYUU4eUkro4pQ3qZo331uGf4Au51wjc",
  "key6": "35gVHAsi9Epfk6EBdmWwviX3igVELYmMZnvCvkWpwoLDW7LPuTeoTWfZ6wUG4uctoxJNksbe4a1mqC4mW8rnp6bQ",
  "key7": "3hRJYHpKbvbMYaiMsEe46aaFDLKMUw12am8npB1uoedRNUWAzyjXqfpEx5qhDqSGvpqbcy14tLUP1h2ionvBdQTp",
  "key8": "NbcRxPLWgkzJ8zWmANrfG4RhU3XjgvLPmVfDQp3ApfRobLUUeSHrAREiPDfEJ3wKgwYULJ8GgrumQzu1ER45FhT",
  "key9": "36NT7mKwYLLMmcUvDdjENoRgodb7VJfQTh9xypKromGwcdShyfatSNNKWAvR2ECqwtLoC17p3snvJnAtHNksdc2K",
  "key10": "4VqZN5erDx96QyFo4iAtHJSKfLe1ef6tXDVURy5QtvAU9AhuvZd9JLPquEXQ2jQmR5o4sA14Jyv7U1sutk5tcwvQ",
  "key11": "4poqUALgtPXA3KB5SrnXko3C4NBV3WqV3M2gQF7aQEiJkzCXxAoQevVjQvvgjtPTKniTUnZaaC2bnFgykNuTgSnz",
  "key12": "2LADkQbfDHPwaQRjSBAX9AwmGyHQDVe8c92pQhY34ZMkkpSN9xfu8sjaMydxa6sG5Yvi5zk92Sp7t1MWzyz5uHpk",
  "key13": "2zqiJ6bohWWSuY4hcL8Rf91F7kLvf5w7icko1zKXCoopjfic6vRxkE2qth6uNAbJZjuE5qCUU3fYjjwvovoEzeG",
  "key14": "1MwmT8UwyCGfjXV7uBMPgDmfpYc7WD8WLedHMQ1gWZug3q3eD1NcXQxVzL6FqxcTBXuRskR2nBabamEeQim9xSt",
  "key15": "45VMHNLXnVnxkftc4zzvSKQA6tVi8D23h4JonFt9gBTXjHAFm9hFDVW1kib2p1ouDqitwQ1jzktt2dr9pYpG4Vaa",
  "key16": "L3nCRQD19xbGNh3zZR3gukUftS4AhmZZZCPc1Ejc2joXBithfVfoNuMKnCDvbNeNMXcWrm46VSU3cFwSJGQXDQ2",
  "key17": "2RYACb9SPw3s7gZRTCjgZ3dZpZx2pUBF1jPQebpy13AGytUAQHwhoPKze2mczxpqDqLFnpMXow1wdEtxYd8FDe1E",
  "key18": "7pSANUXm8ij1aGcYkogsfzFFLixa7pbEtz3TVSJ3nLRsEcrVzyYeL4Us5ZpHYL9KPdLc2DQTBJsniHf89iuRKFY",
  "key19": "5aJH2d5PXaNEYfWemtJPGg7SyojcuXcaMhBb11yY1wpyHeEHJ5ZPZBzTGSJV57oS5eegwjZxvaH4s6A1H8m713Gu",
  "key20": "3anDnWFsG6fJJgyJS8Y6n8F3395G4PSDNDb4aLJQFmfZKyLxnS8qRv253UoAq8d2gxrYFYJVBbttJLu333Q8BMvu",
  "key21": "5VXFE9JpsSri8DNNaGtKorDURBbPSEzrFNCVMZ3Pi4rEUgSG3AKECzDuJJ1RuombFefZXp1K67ENAm2AWu4WbjAF",
  "key22": "pUvRPZ7vk7rJSW1DFZbo9RQr1AbVXFm5XeB5PeDJYH6GXkeaDyzQB4QEGLNFm4ivtQgSH1fo9bYczd32KkRAhf9",
  "key23": "3i4b7c5so7auPtbzzpCEAaL1F3HzUZzzRppBRwQAnjEC2KPJdEgM35pY4okdhDuvL7DN8SRFtvHyKBvAEhN8gM6X",
  "key24": "2GRksNuzrj2J4QQL9jFSRSw6pPX6LeMF6G6duTFomrH48G6BPHG3Z2UeZFpxpNFuaL52yGn32ZCD11TafnsCrfAX",
  "key25": "4kKDNy43LbADiccV1TLo2xEXtLqp5RB6EE42gZv6AAXQVzpfrnRUr1tXQXDHzWFYcnWPxabs76WV6K9T99ufCgdc",
  "key26": "2SBa43g2v3pDS5DuUVCPMtjf6x95DeUsQYqrxkWoRKq2QveAtpQhbjVTTraRmCDCZ3iTSR35zdv2EcsghtxVSd4u",
  "key27": "3K4gFFYy8pC8bn3eSZy6PzjzvJQzXbeAhTiqL9RvreAiuNQVtEPuWesefhtGh9RrexYdXsmjjZW92WidyLscMTuU",
  "key28": "3FTRmdqw1DE1KG44RpYuXyNkZ69W8JC8w6bhaQUHhSUHZ2mJLtRrSF5PDiJbbYHNmsBP9EQYhgfmQ2LoGmpJetgg",
  "key29": "4aZi72BvTJuAgKsJEvnq992djsuhF9SMexJWFoDTvR6VLJ1H6ZQBWbaa98J3iGz8xybQt888Ju9q47qrFukihhCF",
  "key30": "txcs8pRPVcB6XUhEFA5cwjrZiGAAEfqMjdr6iBvGZyM4WucGETsjTGhZN9jiHqfDBArwhCDoKxGRL9dYeNT2Yw5",
  "key31": "5UH85hyMxNaW9TsSGZETJSrh2X31YLdefLG2uRNtczeL4sffPdaCFLYFNfnQA2fYvcopDWxcqv4Zfqwa785XEVEz",
  "key32": "5fELMPDNWK8jxNAnKBU4gFGFqTFKAKFFjyfHwo8xyTXNSVR1nw2woLR7AaXB52WPmvJ2ceWs3rozH2Qo7Sj9cfRi",
  "key33": "5BwYHe2Psee3RS2hJai9KGpdrRaLr2xXcDGRap7EZhzjthj3LjLn84kdu9nV6y9hsUzFDaYdspu2ooazk1YWY7Q7",
  "key34": "2qykvjTRtcivktzFdWvGJCv9CKb6YpLMN7b5Jhqi76ogrdjzgZBCUqB5bU47FqsiWieJVnjDAYbLRyroLHsxrTHY",
  "key35": "ViyPJQR6qn1FUKAoxdiSqb2VpdssAsjxPCavXP12LqBH8cnWMDhFyxAVheEhiYW2txkdBdbTMaQfEc1DdQXSfgR",
  "key36": "nay6UEfZo7huhsVjBwgnY4gAUvck6fJmhxBaR3em4ikHPRrHdwUPajnFyxyZz2Eg9Uv2MjSyspM6bS4vGWnnp9M",
  "key37": "QMKxvwxbFpMLNRs1HTcWSjxmUgNGVTadNQYA5ooCe2jCwUCzhWoNqoUJDS5EwGeCBayWHzn1uBt4cBxPV5kzLM8",
  "key38": "8wvT6kuVNWXCqXKuNXmuM9d8nzoSWJCsog9JByKMHdRNQoiFbDLN2e8n61gr5eUFZGjaG9XpcmQ7qNf7w3rVs56",
  "key39": "64C9ABYKx9Vzhvb6kFrCoh9eB7PtAi2Nt6bdghN6qKcHAsKGkmxB6pSHsWgQz7Gz1i9PGsue6YkUGHE3YcgfNDiU",
  "key40": "nUXbz5CoRyqtHtLamEmUNHUhPwVtH1T3U3pb1dLrQfNZgKSbEVjLvhy8baoz6krcFLJqS93fMCHqRtefZoS5pgc",
  "key41": "24XwnJQKL5SKFnpAsXoqLHC4UdY9U3tKSTHm4dCZwdwPxLsqojx5X4feiQcuHUzoKbucDKQr1XJotMC55WU6sQRK",
  "key42": "2hxHn8czk4FhstkESpUuyYXZAcgL77FE5WDsdHw6AByjCXRykA6vLFdp9fP3ZX2thFh8YhPLCnEDgAKuBeeJZPuF",
  "key43": "4x9JqpWAmF1vDYdeRLNDaFGDU1Jp7YU3AsXfgZNfvB2jsZhnuDcZCVJQ2JTob5D5Nq1ZyHsms6J1LD2pApAWKbtS",
  "key44": "5UE2qchhAnUzU7kFq5EHNNt2gWpKoNRm24Mjg2Xy6bE2nhSZMiizG9aECwgUnu1prPc55w8bLGnXyz1sJMi4FaFX",
  "key45": "2eQ6eKocwzepaEdMMPm4mnspFCzmkZTNwSrSrgpgUoumn8iih9kYQtKTg5cugcisTaRvePdHZU8NXwxhfSvUoYcy"
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
