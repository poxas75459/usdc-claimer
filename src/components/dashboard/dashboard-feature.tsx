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
    "2qZHXwwDxvWpPadNVeha7wGsScfdAvgyWawxe1zLtW6xvcos4HpXdTT4HNBZsY9ArS6xsrBt66y25pQRyWTo6jVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGca2PGrTRALtrnEPsKq6S4mWC8ZbKJXR2kvDBeLnV88mptJ8Xtmo9oPAvRSRtumhS6Wd788JuYgdJJSJM5QY2K",
  "key1": "fsJ3ojb96qKnZ8utVnjLvpqSrbr7HPfmcTEmpeDw68zN8GbEnTp94TtASQdNaev3Jq2SCQyYii6AbipcQ2y9PDP",
  "key2": "3amBF6H8o6foaP3hus7d2ZkcP31Fp7JxT4ysnWzHNVDgw44fYjVBwXToYbVruGLu1fw186qFpZSKR3gGXLs4gEpU",
  "key3": "3Vcz6XMKmbdSx2gC2TSoT2HP4tzeM2t4pcvLg5dVoCfNGZxpydimU6CZhrXifwN3oxZAW7ycNh33JX6tnM3SU2xU",
  "key4": "4zNcKpNWcg1u8CBaa3yrYcSwayuE4qR5Bb7gdE4yiiYgN7DMhukhr44ERJzzy6XyXttLFSFqQkqvjfpVVsBcbfgZ",
  "key5": "5tEAtsMRof6mtWQFQaT79yWjcjqRuRn9993tcnm1qnRLkJoDPMZJpuMGJ6tnsrKMPdUAh7DVXnW9aXAGKVzru3wY",
  "key6": "5Ehm6FxpMH3kuqqMRVYMUvnb4Z3Vyp6xyA3ozb68Yt2kTmPHx369J7XbmUQVhL5CevDWGHqYDqzbNBodYQd6ZA5p",
  "key7": "55YS1FUKXb8828UvUXHrfbDMTg9vfoytmsm768MudeUCAdbazEAfxsKUM9npGLnGYxhH4v25Wdp7kDc8cFuWG5C2",
  "key8": "KjsL5ytESttMcdrj6W8uyxvvwdbgB8ZJz9WS9cezKLriQ5ekYwKXVAdg6gMitd3Kd6bR6aPQ91vtmhbmAe7SbgP",
  "key9": "2RCRZPYSVn45NUTY8kifkeUDdgjwcwt41rerjCEuQZ2HanUdz6tMVzwCXX45auEQjAnpqiu29ehhhMAEqQVSr3ut",
  "key10": "A1dhijQTonoVB7As4fmHadn1bTp2VSj4DdPejj3JaBtRBRcvTzgvotJcLrpFymSuZwHqEai1cenBVy71ku48hp4",
  "key11": "4saPo5fejFMvqfn6LudA9aNveK22Dvz1skMzmKyQXcGASGPiAhL7iSrFd4xqvR6WXQGQb6hF5focMivbgaxcKoVX",
  "key12": "4UT6U6t3PFfD9WgyAVJVq8qPm3BqL1kc8EiXWDk2RRx6o1RbTvpvYZSWuFkzX6fPdUAJHb3sq1p9NzFoCPvt1q4f",
  "key13": "yAqPjAfNvzeDeJDtfWpAWZXXX9pZzV1StA62FA4ontXAuDzjmRtJL2PeYRiazTooj6mso8SsuKiWC7S1GZmU8uU",
  "key14": "WnRmM726S8bXaGWtwQWugR7Pp94rLqdmkG6YTSSv37YXoDX9EP4weyMdwgWgNvL1ppxUDHcy2AozB5d93U488G4",
  "key15": "3Md9bzLD9rdRmXfgiufCABEia93HgZefDnbWEWu6s6SdLLbJuZbvNcvW1Hz7EHSPtHPPGg4g3vTie7NT3QmdtbQY",
  "key16": "5wnHbnSiHSGFGc7MrzTVpYEmtHUvMRB9Qg1VYzPVDymar2BJpgs83Gftj2YAMkXdBwDEGLeFTHbFWGqrdc7F86qf",
  "key17": "JEdeEj1k46GHZcnqqyhvqzorHiZyndfZiyTpBJLAMY98d9sanr16wv58BKhZ6hPSe6pD1YbivzaDksBjXp6fEtm",
  "key18": "47yDH97R8Kakp1VZ9QM31WtTEmXJdUJXFA2D9iTfGpEQMQ8yDqr4v3RetKjyvLTgagvCHGXFEoSbrDgDiFXyLnpy",
  "key19": "5Rbp9ZKWwiD6JZ4rRUXkbUBS9hda7qWVuGFb9nDkX56NWoAKw5CJNQkxFGE22bixmMheDnBoZdZFgc5v6zE4Z5Ju",
  "key20": "34D7MzCFmB6QeVbvanEvgXXQmBGezcx56WeJGyNZW8WjdHq8ots86Ut9Vs7uS3xgvUoiiZmrXULpxrdkA1om5bTH",
  "key21": "bJwjTZhkniaRnV7WGTKXSKZh57h3HMedKvUN4TkCvDyDrKzRd15BNgb8WE7gsBGBzTV7PM11suvwL2mgC31PYWJ",
  "key22": "5UyJL8851zqsDMV54vdDx5ZmmrZKfZrsjNvxYc6S1Q416T4zr9aoM18jfNBjo3PxS1q3EggQyMHGE3V2zYdDfYnm",
  "key23": "3ixWcfRH6dvGDHy3sSyRbWU3bFydJE3HezA71kzaj2QaUf1fcEcJUfhp1VkGwzvgUf6NsKShYxWdzowFmpYGuCs3",
  "key24": "BUYsGTMKGQSH8mNyZYuXweWCeYEnekbJSyNQpmXgew5pUSYGmAJzPKPDuiczV3xNQDjKSiVDeTAwg27QVF7tkrD",
  "key25": "3X6ZUKRRjCAwdcWHS1wjXUHcLexFaoXRdAhVG1caJZLKoMD2bprATk73dwRttN33waanDr1XoakeyEBrzmVHQoNG",
  "key26": "3vh4EFiEPrkao4cSD4XPAiFzy9QYbSy64MQK3EPsYnxoVP3YhB754Y9SMAEjB2SqdfKQ8ZBsfxwo9x9Q5NEfYtYe",
  "key27": "4UntNwXDAW8gu5vH1UBgFHkxBaZioVwkqJMvKyg5UNwmCYm3wK68owBMmgwsfim842gfiijALFZDrcVMisRdDmxa",
  "key28": "4LBHz6pQpbocwCtRdM1YTXd4aFPVbRWtYYFuzqUowW47w4g6cjeC1hR46t4CU4xeYURSs9WRFJGK8AW74DMynxhG",
  "key29": "2dx2b37rxceoT28e9nuSVX9GiBm5rKuCjd8tCWGX93sc1NgcGya97JRTuTsToqppQ95Sjr8CRRarFkd3dpejnABv",
  "key30": "3BnxY4teYaPYSGAcmFhP8VmJ3sH5PAE2vN9aFxtDLwswPmaj55tSn7AsFT75BZvdsdBFoHA5h5LyA8uAFzzcibWH",
  "key31": "67oqAmm72Qhza3ZC97mqzDkApLuTumC5pAmyuVk8XeUTbtR8dZUgUDhbwCeThhvc5eUTBZ8g6CfZ6baF3UaVTab3",
  "key32": "2nkrCHPJRWMji1kEJcgkSETzvSJaoH2311SpPpinWSfHW3eYgvo3RVEALv56sqQZQY1qym6fpb3JrYjP9ug9pSf5",
  "key33": "5R2oKXegUgq5HPRhdHmiZbipaEreVd18JkUiuTUBjYpZvpjdNTjPjJqqU8k8sVRdidJEumjhbZEBhnBdLwMGaYL5",
  "key34": "2kAf88hxGm9TUu2kK5RZLhP3r2fWQCHzEGAT9kSBFeXWYXXyayogE3NY1hLFqXALa2G1ZwZDPPWqvjueBD4ZRWoV"
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
