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
    "2ZHWcXr9Cb2NfipZUcEe4dApqYKJNeJoidtbfKSA6TGH6mzc7CN29a7FFUHMYopjU1DZ9Af4Cbjtr9XWDMUjionK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oe3mfbuDcNxfk8zJPKDq7pwXfDvaCXFcohPwaucak2ScyhjtcUsoGXMeDgv15eS4XWLmSqqRSUd9TbcZFUyknrZ",
  "key1": "gSpY418NGBXh3WubvwAUsaikmxpjQdXkdtRrdzpnXLCiYw23Hbec3pfFyLAwmKegPcmWVEqX8NNffzwjQpbJvkY",
  "key2": "4GBQBncnA2ePagKebrBtjfLWxMCYMcBfG7UNPxjKqQvbPRhZ1R3Xs9UmwD7apQtUBKAxAF1f9QzSzfbVd279poss",
  "key3": "3JiUMNx4qsaU855yV1sZz7nidqEE85rRvQHLZJp2afG2oZZkiK1kUTKJKtusAdzgdeVJivhS7q2VqJ12pvbiXiM5",
  "key4": "aGtJ7nqvqfBFambomgNA5oXW9HwEsWDmzoUaTEGpcQiMZfwNb8Nr5kmuFGUCNbjp9QAkASzjF4Squ12wzA2yJcw",
  "key5": "Pawj7jpnrczPvd5MHq3xqTMghKuDK4XgiYXiTWs6ibQD5HC891GdKU1yUUx7Cf3WpBbF1WG88YhbCQXYkDd1God",
  "key6": "4rxaWBmrZ1aHG5ALfmjPNLBdrSFT2nf4h1oqeARD9KCjpaiqdEhLM9YYjowiWwcddTN7fVct7unzwxcZQiRbTf25",
  "key7": "3HyBQ2ExPuVf7AtHqssjiXbWC6Gv2qNb8LmDPaaftLWYncqooPxEY4SWFfGKFBRU6sDEPp35YGWX9BQ1Rbakt6Fj",
  "key8": "5i13jzasztJ8ALHWTwfmfkCamLBNi3JAQetb1D6bbRVE1SvJR4aanY69TKwS2bx7gZgfRpJHuTyg8dZDvzaJJWYq",
  "key9": "4jX68Ct56txm1nmw2W6SAkv2bDkbNsvdsis6Z3ifafQ6ojUC6y8BgaAxD8r3ndMAa2Mrm7aFiE5oWaMKAPzBBGgL",
  "key10": "4ntWqiCMtzhqudWZSJinyvrMJmf5rbkJCatjw5epDEBtx7B6FfJBdqjBrDt5aBVBCu4GvBeyh3zGan8jiZ2mmpyy",
  "key11": "fUCCrrsazsAQnqyb4YuN3MVzbx7UYAGf6Pf6e4xw8XG9xVaE9SUeaPdbpMqzo9ndidpqEAByUqZ3TWZgL3yDaxS",
  "key12": "5mEuPK7W3bi7jQXdkmopL1m4J9Pbv7X2MW1y925f6WuyzByRrqEp7w7hs1rDB34pYcxScwFjApyUUtradMEuKVDy",
  "key13": "2r26U5mKCys1diLyvUx7F6qu59PwKPSpzbfJpuHRBAkMbcSueKKawXigqt5qWZbtnH3fzgdusQzBUqWRcGz1hbK3",
  "key14": "uXomZwWSAQrPb2uYceywbpcJuBRzCPH9WBtAJggqspsavC2WinrtWGB9LJjGM8EbHdobNT8pJuf6H4dN4D6uy2Z",
  "key15": "x38JS32VS2uSdQ9FSkZJ6ik6hhoX2FM4PzzvGCSDkoZeaFuufgXNhuPpzF3KVQrbE2cAcKVkoUuyq3ZQETzXHhM",
  "key16": "2PNEwBRScrpBncn92rxpNPJunxL3jD6tFekLDqnY5cxUAf8T8A6WRtQ1zcs14ycjxMq2eiyBKQJ3g1npmjCQJb3V",
  "key17": "2jsYq98kRSV3KxeLgxSacmYPay4Uc8Gnifppv4B5u6rrYysPT9ifBWF8Ry8VdSEMuum7ezFaCL28DrWyjyaVa2PY",
  "key18": "qY8Ve5XU5iiDvCCuRd1MzZ9tqkCTfH3EQqGdEKm5xpj7XDyvSYPQQjy6VxeHZwJnprfZBAH7sEb2MoagT1jMe21",
  "key19": "5pz7EGWTr9dpNTwnafqahK3tcTbi8j3cACh2Vo84UyiNP4esydSJy9JfKzVWr1bopJuG7o3QYypsHLzdhbW7xYQX",
  "key20": "xzQGhzD5Xk47YyeUSwyzvQXZCM4NETdy8856RUbwHpLGN6QyDcVxA9q9Dt6Nt37XaEWBGcfTWQ6qzLNzeve3kE1",
  "key21": "47y4FemGb17a7Nhtc5k4gPngGitwEuc9hEuQN43weheU8tnbU3QdAEkwTDubU6cyZSZ3Mr6nKhPUndgpPe4brSP8",
  "key22": "2EXrpELSLbqP8qcAuvL3ybFWnHWTRPJimQo7vTmgyALBosVgxDb8m73GFiWM2m47fJP8ev7ha2ijk2rGhrT5Kg9n",
  "key23": "2HKAC9rCGyE1p5qYrmFAGzLviY25iUK4XPkPSt2ttNBbaZXLEDgiYW5w2QnBhnqVXAKUQ7DgFmYMz5939WavFpP4",
  "key24": "2yHWUn6VY7T3gTyc64NoUWbREAtXvrfWrn3ze2i9o9yK7XNKZDSU1Er7NfiM9g918XiSPSpv7npcf8tq3hxpSH9w",
  "key25": "yK6Ag1pNd3WzUowosKeWPVDwgcXGjS5Ais4EZyjX3mwcpTQxSkjvhCgFoUwiG1KcbkPtRAVwoYzbEpkuzeV6HGK",
  "key26": "3JppYLaWTJSHs1WApDs89awuD78KhnYJXWFEmsfETBqVHd4H66gTVYavM6ak3iiCzMhUTUu9794SafL5usNotKMx",
  "key27": "5SveGey7n8fuQhfkQVG21QLy7gSXrQY1bKFMh7ewCaeKxniCp4ZAyyREY7nFyidLefugdYpYg5PKtXysgMNrMMGh",
  "key28": "388N3atqyeVG56y9kFuZtHDcpM1EGFkZm5auAdzxnonqQfmKFso4DKUy7ZJhGC4cLD1AaCGeSpWWKgwXCoqSbtS6",
  "key29": "4kiRVi7FtKsuPPhhYYEJaHYr74qKXZGLMKaknjbfcbPqFVdMAQob9TGcGPN3fzupBvfGRXUGqXAsij6TZwSaC2Gi",
  "key30": "5J7UBTj3P7LhvpTk6unk9vBBW8XdJUa9Nmg9pu9RCdvLNu4jdAru94LUzCY3MnhnuADAvQAhYRM1KmqMoPLxUnSK",
  "key31": "3a6UosFBpG9cmjuNXYfHKK63fiwn2rDfgRWRtPMsbBeHP9j4n1XSnM1cQtZkZp5NaZMXxjqj4UBAKkExPrREtynE",
  "key32": "4XhQLcDcKjGgqgY4HruFF16jdpPPcWNVrnT95ePUjHadtPhVsqEVBa8BRKMGdpc1HuBEEdJjpZ1X4KA3aPRiCRk3",
  "key33": "3vHrUoGJiJxTmGhEZgSxhbjaicxYtThcuFgydzvRMnKKYR3mZBHw7oiuiY1ZMUNXyVKaJbWBUXvCTUH4MFt8Nf9c",
  "key34": "5hdXDX6ed2wJRg1UvqwdiycsZkAvGyvQTurmjqb791P2Y6LPauW6Q9AygsaLHFbY6ALNPpsJkHKevDU8RiZdm8q4",
  "key35": "4JHZbbfgkZ3QdMBBQr5gXtRYMvdjxsPeL1UaMLqfQwQSbwhzdQfKi11u7tXuU8ec4YMK9nCRRcn84WqXqHuSDdCi",
  "key36": "QY36c3o22CiD8e1DPnWd8vSg2mSjfxARn1CFNAzrc2VahhXAEQRY1mn7QuNH6AyakeqFqDTvhLCwZhGWWeVyZY7",
  "key37": "rh11A9vYw3Xb6MmXLJLBeK3SnwHZDka8CJAo1jWaUEyysbKmhH5jQNWioXwBW6c5kTwbcpKT2g67juAnFfdb3ek",
  "key38": "5CvQwUv6dPgXfczwUsbZGezX1Ng8BsCPVPYsKgnqhvtmb9EtzEEqesoP4f1YkJXMmbY7LVinv4qemHPsUs9AiSPk",
  "key39": "2uFcDbY3pi41x6whQB3xUGqvZuKyox87sfaWaE64CuwDRxrH3KVxFhxJGUEdwfcQeQ5usPjNwJVcuMgwVHcNw9EL",
  "key40": "Bqii7CYQvE6guPqb7pE9wbLovmvewKWivCFdFTEsWr865PeCQLryUxWYSNbwtpTSFt1ryU8f1KeSe3Jguk9DvaX",
  "key41": "45QiYnCYYcf9JupKVt8vK1NzjLMxmZjAE6WKuJznABQnLYtpz7dRsEfVayMtZAUpZ9i1SV588f5jB1XgQER6CPce",
  "key42": "55jZVYTSvs9A4jptsHqo6GWN6sdW6iYdHnoQioR1EmfinjR9ozSRJZCNMyvkm7AMupmEkhZjfSvtujLnXZ68BiTr",
  "key43": "3RqHuFXJph78D4dMoHroNd26ytHuNiHw4MJ1BuHZEGBFAhwWTeV5ASBHRy6NAe5sjoL14zDv2n5utKX4tixbsYxz",
  "key44": "2Z1L6q5vCduzetMgiU8qQF8uSm96xmVKpj6t4Rd6PQMyx8KRCEFTYgkXtugLhQMMF3xD8BeSpt5LeX1MT88cpmEM",
  "key45": "23HKwERM2agAz6yZWkDzU5STYq7p1kfjXtHVxrM3R2iweJsR2CtHSzRcUHfUchHsWx6LPYbYcSy65C2TUMzDQKor"
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
