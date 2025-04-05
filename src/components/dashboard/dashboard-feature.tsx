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
    "4o79J3bWTZsXXoy3TnGSD1ezhABqLzbUXhRgbZTiFR8ZyFeAG5jHwfZ62fpWu2ASwQFbvqH6oJJSQaiGnt1jtWY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhU1zkX9XXVzjQHrbXraLPfyK29YkjkvtrqhEP5YrZPHCCaAL3QzvMrNeTFZuqEAxcEZ1WQw7HZPjdi2xtSdks5",
  "key1": "3ucXqr5hLow9912Geyz75kzXCyJZpcNwoprM9N2URbotJdLSG67jLsYxMfSaPYEvRpAKcXAh79TDnAzd33Gd5XF8",
  "key2": "5BM6wthXWqrawyif6pLUSeeZChKLw3hdKpXT2JTad8QYdHDmKRVL3y254n7PcrEJ7sDuNYxtM5D82LDYyEQMtWZt",
  "key3": "3uypabfjf3c7tgLdHtvvRWnS8MdY2iVQKnrLdZfLW9sFUHB9EtnUggwqDR6GJzUod5UaB67csSGD6HCPJaNG3WNw",
  "key4": "36RGRo7QzbC6SfsC4vMzky1GkxqZkdBYssaV6x1wYqKN7pvGDsSd9Jx1dkj2bxyyqnan28HMa1eEYvcnm3mcrGjU",
  "key5": "4oQs6Cpg6od73NB81D4qA1s6xm4NCAQGhzGiFcfTMg77dEdk2qKKaeet7eFyVV6Tz8RR5vZHWE13kvtwrKHXtXyA",
  "key6": "4KTJk7qApo3CTi37kWvK1Kf6ZDtXAiWWYfkYC3xYEmQ8MU555TGiQii9xKNy5VXeWTSqk6MXttQk99x5vpU1AVm8",
  "key7": "31F3annQnJASpWFYn6XsXn2m7heVG82GjV3VTdoWdcbVi2ZjGs2phzNdcEMJ9LzDzPtGBcAczUtiJQ6yL4saHEo6",
  "key8": "4cNjqFPVZcACu36QcLxQFEWGXyV3w7B8PH3As8nyJe6k7oiiyS8fW5HJE1mcXByJnn18Xakm7aSjZtPYbbE7GYD4",
  "key9": "U69PD1RENZS7PCChZwTDLK5dNBBKymdBXjayEcXUoe2H5kcuSKReUpRiG5aBoGnpSi7YHzpKQ17CsTVTYrMuo9G",
  "key10": "MSE2gp86TAop2EtgTJW8DrcwNmNq9XEEaNu6riC3NSM5bhj3hnNew6qkagP69b4cLMMzUpb6T1PK4Nabk18f84d",
  "key11": "4GdtQouiwqNm8RdrKnn5F3u93CDrTiEXUVPvxwohBpVs4AGH68CijZ17vsP7EMcgVBLYpiXgH8Dptoxmv66SaG5P",
  "key12": "4A64jFog9xFR6RGhh7pcXZkqaYyvSmwhyHokEy2hHSFZmxQ6wgdcwEEauJ3FChCZHu1K6waVWHknvMBtu9A5oyJX",
  "key13": "55hptvYbUeXKUYwxSrbA4MBk8v49BmSmGv3fG8uydt2NKGLBaJJS9RoYrPs4Ge7zCQatmJNVWDYajj3Yo4oYML13",
  "key14": "8NXj7TqMEkyRoMW2awbj3eG3kwvVERiUfU3Afri5aFzu7VL6bUmS3ZjHetd6jQdFy6kovsq7PocsQsAVYkMjiwa",
  "key15": "3qzxYRvMXyE9ShVMkurzrzqpiuSyzz5znbozSV3wyoVkk1GcoWtxBiytCNxg1kDuAkZ3gSyPosTTNzpVbmfnAxrA",
  "key16": "4jKT6geK1nTAbuzCp7V3NAd1QyFadstVLSD53jnCpXQe3ZScXQjmCTz3uYUDdF9vr5rwg2emGq4Gh6wbMWMRXRuX",
  "key17": "4ZtJCfCG6tMDVLvZHSYr8TqVgwHkENtKLyYYG9FGiV8vs4gHs8zzVranfxcdJtMiHWqnkwUZjpK2NK9grPD47oeK",
  "key18": "3q1ATTzPgRWRh26JHfxjejaaLVfXhSXTmagnV49Cn5HgCeMwC5f6n9p8z83KWYpLRD5FXWZsUX4KWyDJxG3No3hm",
  "key19": "2TS8jWPDXqErUwsaKmu4Xf722JES4uRL4Kg4DXg1VLsYKGCcTTrHoebzqyyXxKuUXTNUV8fiWEXTLR8gjuBQnVGL",
  "key20": "5fXkyPVZF1Y62HQSmrnLcVLNvho8YMbA1bbZfLkexhYEQnjWkRFGpbv2BjS8vf9qhYkrquQkE48QcxH3Ui1QQf2C",
  "key21": "5LyFL9HNo5s3UqWGPR3F9nVMm7msMy6XwrbLXeCyoDaDXVxTLF4fjY9Ukrnwp6BxeibfBYVpZxT2RB25n68A3DHr",
  "key22": "49gVvpMDuMGTonKch8Mmy3dj3gXoBfLM46PNoJuMyoYyigjCuXqTNXfsgSP5qex7C6Z68qWfXAYi8tYqwmAFCvH2",
  "key23": "57cPFHtDmN7xTZ8mn6xh2VbqRdNuWkLJGN7rwusrzRF1YrZojRN6WGJj8SEciakCot6N76nBoyE9V7h9vhaBH67S",
  "key24": "2ZgRGYb1ggsHHJJfEB3zP8bqBCjA9artiBoKrKf1gGLgsbtWX9FPYqdpdPaePduSb1TANs4uddwhi7Qa4jkYzc1M",
  "key25": "5ag9FiBBzi4iEdFEtnndTcdJyvQreCFKnva5A5evG6EnYDJUhu8rGYkKGejN5rzLHG3cTNMjrkWniWr6EMMjhYEg",
  "key26": "44LyRzNop3nDE167PHi6yTCyvPXbvAz5NdNY2gBzuAi9vVcPGeiWKjqGgvDWvTMj3JEG5afZKbVUxKdfFfZ96NT1",
  "key27": "3fnfktJGLEPjw19ueDDTwjH2y9NenK7qoQvBCBdnqU2gvECweaHJCGZG6tfHC46X59B9xBFyXb3yY1wo2fJPV6cV",
  "key28": "3xFLnorr4SsTiCgD5cd1d9ic8Q2D4V1ou4DYSaLQjZSiCcpQSYu6TQexYRj4ZaRhaHoE2caGnmZbNcbfNB4oUEwu",
  "key29": "qa98thuBefwFybJwzMR3uZZV5QMb85H5AyPBBDhXtFi8u59WqqJ14kVWS73bUTzL3w6QV35BeTZNWWBLcdG68xZ",
  "key30": "5baUJFNXh5jPfDaJBQo2aQYfrybZTXzFYGnNnxavjGHgTzivvaSM5KwdVEm2p2qTG9A3yqf42QKgfKSwzi9kdKck",
  "key31": "21RydPNNTUbqaXU2jxLYjEYXkuEkgmQz3monqYrVxa1NuHtfdpzb2rPivXmYP3iFeewubbG5kgBF8UedtXH2MibH",
  "key32": "4x6Svos7VUmpvJJ2L4VmeQMcBZ5wiLErvUCkP85pfJbnuTYThiZ5CTUJyKcHZHMaVarHDb6R7J8CFvyA3iR8jvo6",
  "key33": "4pFa4cytCkzsaYzz9eD4bsRpkAhNZapvYmDrNztWP6YnNzCMDxdqGYMddNYGzbkGQR9DzAE8uPAyt43WHZT9fbPc",
  "key34": "CYYGrW7bM58J7UStLzctdbKYygoV6qciWEv3Aq8Ekxngm5Cj8Ts24hiKArvg1vbkWRhdtv35EGY4jQmTBWEShLP",
  "key35": "3UbRM2JaJigzBW5LFFDa51YNTjiAgHsRMDnritaPxhGMioASVYSTZkZmX1o2dja9NyKqF8xW8romaJWCXuFxLsor",
  "key36": "2yb41PkNWotCW4y7LtSbu9paCEDGnLd9zJUz2gqifSYJrqtSqggo3XYuV3feq4h2XWKnAeXmuidCmeNysP4fd9Sf",
  "key37": "2hkpWYGihUQqvrhH816zWYZzzQKNPPgRvpqRhhE3cE7wHJBYAgiPisQN4ra3XtsvZx3qNTVTPMzXXxj2Dndh9ekp",
  "key38": "58UcABStKC3fG2L7T4AFVMK8kwjMK3baq28GNcPajFXb2GvwsUbQ5ft7fdCuhzjb5mCdZP2BR94fSzBFkakjwfXB",
  "key39": "2W5sNtXJxwGZNxzRkPCnuF3U6VsFiGLnvAZ2yz98cPZD3vf91Y1TnMTvXrLT89Qo8QgiFkHqT7iSvScFX393RSYd",
  "key40": "5Jsm6zhmDJgbm2bSzXvaJARzTvSjCaEN1KWz7sCSZf7RfCjnFDxmRwEB9tZojD6DzMQtiZL612dkPtDTyewHysC7",
  "key41": "2EZjr3VXvtGEKPcyt1JQUhcMi9LNY1a8by1hDnwYkJz3yXPfveoDGraJtdiUsUrJakotA9MzAdk2mRW2B5cjLjWH",
  "key42": "3XdjfdVLwmYXmbRztcDMqpf59a8CtaxcTwkwE9bQny8eZZRsj36vkxWx59mpEZw2wmvweXMHUeNw2GfE5MLfjkVC",
  "key43": "5bmcnga4Kcyntyf3WKeYkm65Aht9BFrsgWcT98zKT9kFPypBWhVX2qMX4Z3BM5fxskDVZon3aZu6X1z7agtx1HvF",
  "key44": "2e434TkwDYddvcyCVWC5mQAjw85pDwBptRxYRwji3SLDvBGyvthLHEogWnwW9RMVRyipiZArCyRpfrJnpaswxWYo",
  "key45": "3RKMvepY69hr9XQesJQiYDdDgHHTnuqYbai7iuukBgfUDS62qUnTWHCu5wujW2x1uVbpZwHozNMVcD1aP8S8KHGp",
  "key46": "ZWRPYKiA2mAWasAtJwe6iy2wcTmzvVNVDxeh8Q8gCRifSV7wp62NHUtSBghVemmxw6pu5nSMUL8Tz3ygJnP18Pj",
  "key47": "4Gsxs3V1cs7yVDwshE45kUBVYLLFDC7f9syZp52G3Mh2XBawvVQMy78hWgpogrXiszckzAQ9NxXaDPKrR6osEMCA",
  "key48": "4fLsZxCGTiWxPuBswQocX47hxvUwnZnW2MFAmtPUFYfwCZGEKK5b7ps6HEVzUs4rVrkifTjT1yuDZAk1EGQFkLY7"
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
