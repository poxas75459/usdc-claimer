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
    "5adXPmHjR5mXz9MKynyCGqiffx1cwaCbq99RkbWDCnt2ahpXbQW5xcxW6sCEtywQPpwZ2UoDuF2PG3Z2N3Pdv3VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dm7RFcWqKWCEroSNrxgyXBuEcw77uzNBiwaV8WX7QQSw4szbcN8TzEPHoJ4gEh1DzGTDsq9yrABqWvQSX31HVVF",
  "key1": "3xkrpEE1BuLeayLGAdF7v5jXkJCN2NeaufAj556ajckLKYZQU3isxBe8SKPmBFWp2DuMVR4UvTQiQDgxhECJkRwo",
  "key2": "Xn3sJNJesyfeJRGnhzNSacyjCQn9z1Henag64M25x2KLWENFDmyT7HoAr467VGCKtgjeZcy2Ctnu5qCerf33MrF",
  "key3": "5kM3sWAmdMQd7qpRR7DZ216HiEoK4jj3AUgxB9mUGTuw15SJobawVysjgyfC8tR5k6SqBgrTkACWHLqCmHJ2sjps",
  "key4": "66nbvTk8k6G17Ra6GM71XHbdEbSagUWnrbhqSxoH7VuQxHN5wAF5u3x6d3iofq5wH3QeEjGpZ5akS9wbtaCNtSgK",
  "key5": "2ZLeVNxcLa4riqSdJ1ZwZWCdHtP5HZWVoM9tE4z6fPfK61bXNVaA5p95XemXTX2YJgW9V7j23aEfxTZbwP8ZMMB7",
  "key6": "tcX44Emmh8KJGA62o96fnueFCugUaJHu3nMN6EGR534efnigT6451dqkutTTHvgAs3NkYUddRcKXWYUUqnLCQNu",
  "key7": "5C2yZdNLzJt8uXRNKxNV2Y5UQqASBCP5MweM4BUPvSqWcG6FAnwf2E65YBwAMFZ5VQf6UsY6jepNqJwUarxRcmRo",
  "key8": "Nn9jsuGsv1JHrHGhdGbcQGTK65tt5Ybrsg5MJor2uTV6W43PpbqA7FQw4KGZ5MJUokxqsUxcNmMG1fuDq9HpSj8",
  "key9": "5hG75pcEfaKKvaxXVeQHCSsHfSqWKWUri3YDaxpq8LF7hLpVbdtXSm75sPuiAgARBkch3p6qNdjBspkXorjebh7L",
  "key10": "5zBQTC2pK19zCqhfWindyikXG8561Da1enBm9U8xn4QvVJ4RYvxDnoUtqR1QvrsHmRkMWLHFAdsufCoFCS3Bv3Nb",
  "key11": "4e97euHZLwUjGqQPVpUxpMqvJnyA4onx8T4cMidfc1ZqM46o3r4zMTukJ4PMpWYRizNUGViyp7Zi3HY5ij55CHbA",
  "key12": "2tzowDXQt7FH6VhjxdBL3JqcuXkMWC6vbkS3VqST56u5tE4vTZwcKMZULEu511F3H17WW2ahdiU7ZQnAfoEZHacz",
  "key13": "3sdz1TbSvuxDu3UfPkMAtiV8udHpkua49fPuwpANxhEaGtKx2U7cX9WeQqhKgQBWvFLW6LQ3ndhtMnxkUL19PT6u",
  "key14": "ZeohZsTqntgvFd9pBkaHmryjmvSurrEdhq8vyTmUyuqP6SgvmWMn2irVhiHJBfUQpbkpbJVXvhthq6PEzrw6jh5",
  "key15": "2tmBuJgSLEgkCwsx39c56S85gVf45FtTUQ6LoS7c4JdXzEhAm13Nfc8XeK3op9dyQXE39XZ43vJMQEfCbJwUtKNK",
  "key16": "zCH34tRPdFgpUu6w8xSes4dso1gitKT56r6xutmRqE7esMoV8NKdLz2wuG6Z7KBtX8UP3TAk1MMueTLc3hC7Gap",
  "key17": "HtKahmthFYHWwY3Bwrx85DM432azckGEaNBiqPJLFeKLHE5LsSFHWsXpoMt1Zw8gQBUW2nEVM2gk4o6ErjnSpqc",
  "key18": "jhSLd1mLbBdmCJNQCMFkYj7R3D2ac15zNpV2m83XgDNXFn3WY3c4Q4GuBWX9R3nJAoicxbdRjVQQ4qZnip26KSH",
  "key19": "2DpPgH4oPrTTUMEuaMBA49CJWP2CnySHzgYeVoTVnbq2ssQv94N4D7xNSoaycaxtpi3SZCQ5NqvbQY5xPSiVPd1s",
  "key20": "2QNcy1gN9qgXihHtPqkKUCCu3LyUpJB2PyuX3iKkLVcVoSozWNQX3dJbNE2efVw8TPpAaTxGvDG8dQAQ1dafC5Lc",
  "key21": "T3xcq5zd2a7CPDS96unbomuU4HRzvNE6dKdS9k7FMEFCF1fGHRGKCbAx919yJLU6mCGrGhzPEZnMFMwm1pQidUZ",
  "key22": "3xoRgQxrrRj5NuwgbhztKBroU7gh6AFkSeMt5xyzPAi57r8zFhDbQWrKfhQWuBzWGSqpFJZ4FjdyiP4wd9uF6p3c",
  "key23": "4JnFMUUaiUmeKRRVi4M443UzdhGYKXuS33k193ciY6iannMqkT8uEbhpkPVwPpA6xGqtnfX61EgnW9BzWHh7yU6Y",
  "key24": "5wYFskW7mb7mVxFsjsXpU7EMnVmHiddAr4PxSuDgHv1TZZZGUUuGZEgmaHdk2UYqbiexdRwiugajPTY4qC4Qy8BH",
  "key25": "3BEv7vwahFkv3287v5zifre7gJpmz7mYdkiTB3fWVbkx3T11himDqCAM7iVfXcq4imZfoVnK4fioeoFPikStR6Ut",
  "key26": "jCFVx6mmpMVEBRedXqbbzrxoM3AV4qAgZdGk8yZ4opvBN9WC2Y44d9qJCfUiN8CtGeW8JydrXe7LK3YmQou3oUR",
  "key27": "4WUiHQq4P7vkZi4o61Jqb76FcPABhiMTyD5LpuoY79Ef1KQ3GsTxrLgR7jkqREKXPA1H1k7A5ZHmXkwLpHVA4CKG",
  "key28": "3ssqJ6LL7FPaKbn57QJwjEhPYRwp8tvpRD3qBp99WWJrtJPf8jfkWa3k3TEd6tCi2itc7Q4cMts2MZJfyckXGECU",
  "key29": "zhVQYXvBg4utroa1b77r5gzdLcLrcWT64K6HoYaGJrcwBBxGeR3rvwouewoSQWcS1m5o7xZniDmZAj7xQT8oGak",
  "key30": "2Qe6Ab4WNGD3WQgBbtzMoXFvSoGSAVM61cLhocMgBN7w2f1MtBuWiF6Nxm2K9MffP33t33gF6smrLZ8dTFm1hK8X",
  "key31": "4epkKT9kJ6hM9uVDeAPSAkhzs92RRzTLXWYcAMbSq62nSuCiCaVAEStzh2UHpiJJTgsAMit3HKtARi4CnxkSjRR5",
  "key32": "59qRazXMEbBxWD1dSHi5GbTgJuJi7edkDWkjXccuym3z9RE7qTLnPstkpA4cBg64xuPEmMy3xQsA7i2aJHH5bZBp",
  "key33": "2cp2ECyurXk6jeDPU2A1XNJb1eY9kcN1zzdvWM8ZyHPMRCb3dzefs39pF1z8YQ7KfeYskZkHxZ6ZAsSPjPj6QLU",
  "key34": "59qY2sUzTjQFRzuhiA2x1PUPkVvCae6GmsqN6NiXKyRvjxV5VZjZmP41qFeWxtTehhVM1YjMvskRQ8zCUCVgTBFF",
  "key35": "5P841BvXGoq6CunQLna7xp4mWgnJWnQfqZSNJ1AbtHks1LuzDLdyUeRzF247a2wyBjH9vFmewP6EPxDKftJgE3aU",
  "key36": "21zt14G4SEy1Z6q5sDJz9rBSFoz1MDgHV1TcTnJ7uD3Czf45vrYx2Vairi4Eu6dDdxJhbfxzoa42v6oc22PF5wua",
  "key37": "2o99bCfiCSCnLfwbC4pSodKLMQie7ji1z9JeLgae43PvTUCnviKPySG1UStybYmpXDAWz3uVxuydMa9yx5XwyoNJ",
  "key38": "5HN37FBeKgqmwXuPvGG21pX4ASoGNwrFft4fK7WeouqQ8BCMVPmUSAd4mjkPAsdaoeJHG33S4zCyPNUqKywyqctW",
  "key39": "3CzXC8HTiuMsYiH5nyxnARBLwQY1SpV6AH7LFXTgL21BRULDoZYJiwqM8oY3NKkvYouDNYZxk8A6xn14FXqzoupK",
  "key40": "3TcEyLWA17H9wdck5idb96XKijm2C2zxFhgn9pPES4wb2cNDtMQrSwhqUdH4XZZ2EHhQ2KkR6r7r69CWxjXaNdA6",
  "key41": "5KfaL8aB2izwaa9xPZiiEb3pGz4EakkoJFyTh1BYzdCj9ec1X4VGrKw6GM5oxUT8BBVqRJgHUhtiYkk7AXSw7KXx",
  "key42": "4AbMDNrTdkP7PgYtiM6BKyUrmZ7qtwadu6RGwmeM7kyv84BBso7qhM6MoDJCACzCFEb39Xr6pgBVS2MNVY728oyP",
  "key43": "5GajGYAbTpJPXop5mV6DQ8AAbeJUnXtYUR1meQ54yELFekHZwTtsWCnAvT9GyfFbZqyu3RPhLPEcQazVZvjkcw8a"
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
