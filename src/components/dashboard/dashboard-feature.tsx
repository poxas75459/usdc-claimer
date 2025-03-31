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
    "4ukw1x8QXhTpWDZK6cUhMoX77cVXhL1j5B8zj6wHBTFTn7ectSrXNXjtA1ArNrgAPCpoNKaEH5cnUgGcJ15e6DFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jA2g9pPzxa1SZNdLC6iJNi96P748yFGpfDkidkKJ1EXWsqHnq6FtYnfmsFuNXey31rv6VQdavtyrWG5GY4ZfZyW",
  "key1": "419BcdF736qKga3rSA8iQTooMVtKyjeVkPg7HiuaJkXJk1CHfbi2KbaC7euT2sxQT2ciMaScptLbg3NB5Z2H5PAW",
  "key2": "4RSwdJJ1bDqoRAFbNiSicTgbhB58hpUdgsViTKzm8682xqUwSxrCDhppxp4GxFkAEgVPuA2HRUYT9GiKJDFsizuo",
  "key3": "4fXX2mwUouQaLRWx17T3PZx2NzEQAKzBYqWpSmPGavr4dwkHa9NUcV2L3F4rx1dDkKFMBQHi6J8EmHDAy1sEZGwn",
  "key4": "3dEtbKJfc3SK5bwv6oi2ErxhUZejpRh5iqNz9sDmDi44Y3ne6ioRCquXMJC5ZtpwNahyJD1TNxFpTAfHhMaN8Ds4",
  "key5": "4z1zzZv8DRTiaJ3iorBnjoreuZn1G4uBjwL4dfWA3Zb1egG2LjdfWFEj6MVK2aF4mtLcv2xoHaeFVZDyEdC9Htaj",
  "key6": "2SAnMo6jRh7s7deduzXnWA4S6TGso1PL1UPioJWnPv7WREkbYB8buhjU8fqNpnfsMCyk7442WC4gXbkVF14nEi1g",
  "key7": "3SeqoTBiDG2SCQCwQsAsLtyieNEH88Mz8HjLSCAvpFHQg9UZQUJ7CGmV4HNqHhQJQTzR7UZ4si3QWLBgtK8CcmTE",
  "key8": "4nNJsUaZhWXWoRxpAemDe6LKa4EqRZfLCMdrbGu2ieooZnBmgsrYCwVbttwqg52qtV6D4UdEoVdCXjRn8czdaERL",
  "key9": "Vue23EVe7S8Q7yX8vJPybX82ySGzGMXCcNnDiTQgnh9RnX8KnCZw8mVb1Y4RRsr8N2h9CFPDk5wz6GtDoPNq77P",
  "key10": "5M2tcTCR2X1C1Seot56STmP74hei5iesNJg3Fw2ejp8mv7fnsY7PgTWJKu2RjZCF237e6eVk6UCf1PxghYxAWa5d",
  "key11": "fZpivVJjLutrfvJNKQ2GyJuJmGqsYMjALf4gF9oGBx2TwrpjsewkW3iFxNqFE5SYNejySXK3hpvd8pgm5TmwAGA",
  "key12": "J5XPrAai9FscYN9TYYXop214Gm4qM3qUYQnQztipd3hKpxLDrypGENzCnYfhQWsyP469p82Hv9JePGeyxRjmrPA",
  "key13": "K2zCjkkGifgLFzSZFnybXTuutCT92HdhzftQLUsyXXjj3CCAf9oKevveKHbzyTdge66nJ6hyo4DawAToaNBL1rs",
  "key14": "23fMGio3yhjjUcFaNfVAKyXopBzYGHe134LGg1jfhkRWRzfKNdqe9CdLU2HWToibyAKwirBXMP8jy86ip2kH5Rnc",
  "key15": "3S6aSd4nEABqhXdkptQ9ZYvakxF7HtqwgFdTXgPvqB24de6uAfXspeymWgnoWzQJNQoKzh2eLbb9QZwj1NmgLJDW",
  "key16": "2M5xGxtbvzaubitmkgJvNMo3qW9dRhYU7EB6wXSr8DLmjCXGcdm5C5VXN4wh47rWKAcocyARoiexR8jLWsw3sJLF",
  "key17": "XVnfKbUMbMAQ6fUSRw6XEJM2zSsZqni3JXyyXG3xQfwH7zLuCMkC2uKEVEPXjHFeg6n7RuQn4kqkeq2gKv4WapA",
  "key18": "2GFWqguZNMcqjSxF1bY5YFVKQMsxQ6qKC25T8yz1K1cehoNbcNWKxxDSpicz5bD8gXnvx3rwb3M5JosvWMLXUjJo",
  "key19": "33nHDacT5Pu3ccCBAvcuEEbuQAyUVKoy6dkccNg759H1Mtz9RLJQeQh2hzEgAJSskBe85Jop4nps9H27HvSzzF7C",
  "key20": "5ggS2dg6PkzKXkjsrEH8Dnr8brkAACABLCfycur4eL1c6ezLw4so2bhob5zbcNs6TUa2hVs4LDUboMwR9JRBZzpQ",
  "key21": "4c45bzVLtPB7qjUmnmnECnKxDhXu7ejfZbqkynBrdw9wDF57P5bGuTSf5TgtcVkm74QsMKxQiuCZNmZhjuFp9GFF",
  "key22": "qLG4asbo2McgY6oWS3AGk5a23GJm3v11vUMszGh9VyhGxpRSUAA4fdxuYLkiYFZMFrzZcT8yiGjdWnYAwShTzmr",
  "key23": "2ZywT2DN4nFb4xEABF6YZTW6m7neQGcqY1VNnqM2CfeDxM5B1aaE4mGVzPvDgsbN6RM3QaFvLsHfyd9LDMFq568",
  "key24": "2H1JE1kuHoLdkd7vxQyemEtpypPmcQ7KfpFuEK66q5MEbEeZeTJokgz5ERUgDiNEdQHzsKW9wbL113HF3ajr7Ww1",
  "key25": "2BXoWyY9PwYSyyUPAxjmAtKWkWiVfhQTWT6fckTbaif3w1cMsdhWeTW31roE1fNw6gsEhs261Vp9S8feE4181D2N",
  "key26": "53jJmtvypHsDwQcZQcBRguc8zVfb68g3iQ9Af2Dx43e7L6ewdTyDKYFV8ctBmmw2jN1T1vdL5harLaBBXA4tLtJo",
  "key27": "67nTURfG9YcAauxtoCAyu3F6LQ8iwtNyL5hKkYth9EMTT67B31ZNXFeyvQ7Js4fyDx8HJqnnrZNtrv4jxLa9VTSS",
  "key28": "3WHDuLG55TjHaRTarmPJFPps1iwKL5jBbkLigcRtA6ZS6FnMHcbkhfst5P88Aem2nwEXFGbHGhv3ysGMCrRyEkwg",
  "key29": "2BhrwbxePi7VT81BNWjWXAnvFxcUKigWrjzQD2DogHEQUfBSudrdeyURRRQEbQ9KnhFTUisz5XWg7NC7rChMJRSP",
  "key30": "4RJ4cBVF9jNBYstyXEz1hWkSFGqv3tQdaqivzGB87AMn4hasTwskp3yzhzpV4EYoLPfmYFwxhEbVvtrHZr73qoL",
  "key31": "4YzHvVSCcNbA6s3h1mDnDVLU1jE3ue7U996Ko15Q4pUjChHc3psTH2izFt554bMtVDcYZKdYMzAaduiJAaRjs2dF",
  "key32": "ZmexhvKQYdoCfdyAjXr5Fg3DrRwH3abvNRzJDnT48uWemk87yNtHA9DkGCNvZibZLyigbVyCSwZKiusG9MMxMkY",
  "key33": "NoCdRqz6rHLS9Jn6zvMXSHXBeo4LP14WCTm93rdE39hjx4aQ5smNbmP1Tu9GqzcW4SVbymiBAZ55k7rXE9B8g99",
  "key34": "2WpfLSDZW293TVp4FGuEMw4VkzJGzibgbSpUvPtnCbq1KZRE7ci2G8CLYgVc4X7QBTqWJ9rT5xFRjBby1TWdvyKJ",
  "key35": "4cQh9KfJZCavajaTQmPCYUgF9e1GAGL7mXpSNeepHJDEszmckF8KbR1TADtiYEPLN65EGC75VC5GQterfSqwgnbb",
  "key36": "4p2b6T1eSnRc5KPqZ98wYV9ezma5JGYkTqNirxDGTJYHEE3sam1UBBYrxj6ZZhA4uy2BgfShFfahSdDu2zTkXaot",
  "key37": "3aGi4gJSzZWGByv9UAjpLrbHU2JgekwXwTkrUcrtpuNi3z3fNnHsCetQKCirZY4Ew4bvfJZRKKxvJKmW4hANLkSX",
  "key38": "3XacUfpzUn3BN1gn3yZnHNWX7Yy5gH9cGopttpqqtUX2TqdD1J38Xtx618b37ZRRCfTPny2vzWedrPDdByPhqJBA",
  "key39": "2QiLQnU6bQHfYiSFNX8ZFhRuGPsYBvkhHnBoDmmG157MnFHZqJjh8mUq2qDhp3LDK5gWyWK3K6Y2RYEErRqcNVt",
  "key40": "345neayEQHd9Lc6xumfMVrDhhuXtBbeqrdoonPKVymHUyTM24ovrHCzEUT5Ts7MfhmKhwVCk7eor23APK4ERURAj",
  "key41": "55QnigDhXzt2arALqkLmCR8sojv9XC3SYnjGt7kSCgUdkQYfa2anUjCwzVUWFLtqiK3SnCiK7SebL9cN7QpMetXY",
  "key42": "5wNgBUvdcPXiaPPxiJZgdHgqM3xJx6s8Xu1jjHPcrLMkvh3AjpiwQnwGypViRZdd7wtBwastzi2CYeAkgUT44yph",
  "key43": "3j7urijVsebyyBzxKHPccSv64LioKJH26mV4EH3Fhe1EbUqqzY3RKTLQjmLHwGuq73ePrLZMPHJhXqLdnQVd5Wmr",
  "key44": "RFMscbcgnLHwDdssvMW8ePF12JQkXjTuZ5TGCEwMwzR7NyL9zddKvdaRyMxtcvk5Ewvdx9qW7dq6LdRBoQQHCrk",
  "key45": "5dGnsyxcRvg3v14ty4hbidQfGYsXaMhWC2r41q6LHfF2Sdasrt1ZGBMNhghMNaJDeSN8Eu5yLr6mJ8sjugrwajg8",
  "key46": "25tjPH3rVVaqY3NdS365QowmuH3eZzWVG5wT9EJeDjnKypN5VoHJoPdLpcvJm1SFodjmC5iACETiWjdYihBf9AfK",
  "key47": "5Skn8tQE7LvZxtJMt81ZKKRgy2n2Bb9DHAMoys11XkdL4CCM94SBzfNMyTygyvxov5P1xzRgBzH9AbwZ4b2xMXtx",
  "key48": "4rZsVNfTa7gHm1xoo1ibrnRxTiya3oJT7FZZri2upE733dqSbRQ3T2KJbTkLfVXFopEnTpRWQxb68xT3wgDAFS6F",
  "key49": "R9fKY6yzX4QDnWEUEWU6vPiyejSXHdpPBv2g89uJAVM98gD58hpYLMexZkx9s8JjZXtw6WFtswLBFphRr31vPXM"
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
