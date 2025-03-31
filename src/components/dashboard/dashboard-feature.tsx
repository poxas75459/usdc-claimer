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
    "54Fct7DVd8rzqtYDBBELRzbDAK9QRf3r6erhxkBPco3rh4GZ7EQhnr7yerw1djXEZ7piKjm5eGyHwddSHc4Zyvdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbb3Ff7CRUTKhUqUHrGcvRAFBvmZigEsukr1YeuAgZ5RzrVuFoV2iDfNBH9D2EqBiuVDGMMwf7oRHRHcbtCMZas",
  "key1": "5fEZ7hBUgCEyWuNRF9YhLgkyU7RnfPknrXVozpMne2LH4dvfPAeNKDK1phtk4u4cyuRAk4E9HRKoZgPCavKTp6zm",
  "key2": "4dHycSTHf7eFK8sbmdmJpmrWjbdXrKMokDaS2jnKwZH2ToJ6rgd5bv7MBQ2qANra9ktqBByGech3H9f7Xk6DZJ7X",
  "key3": "56e1HY4W4DRvM45S9p7z48ZDrM6QbwTEfwfz5qcjPa4ZmeaJCJFsVceUoUi2UB8sbaDsHycFmhSMz9ems3Srxp8D",
  "key4": "EVbuq61nCbh6jJqCKJVFeRnkX4LuTJryKoKZ8cDEfQUiwVwRKmMHUEvKBCdnMRBfsJVYK8TKz4oaraRmAU2HdQa",
  "key5": "3MoZEEh2Vp6oMx1R2zLPWJMfMiws7jSADzmWoydRqePnsYHB2skcsTRbo9CNXSrScgWNGBNi9WZR2dXsHYckp1hA",
  "key6": "5e8fG63qmBsiniEvKnHDyysNXspRWFAKf9QEmxJRhrAyrrXWVVnGtiqFs6VNMVwj4JMtbPXgfshL1bCNmppm19kh",
  "key7": "5MqYKbmkvcBEFTkZnEbnDJMVV7idM2RU8QeDg8TStxBK4u8gXZSqNv1sX1vNmbDJkdP7ZuAQaDjmPX62C2Wx2p6U",
  "key8": "38B7Lf6EHVcaGZLB1KFMTN9Upmt7His7oapGYxhHg1xA8MH2eEuonrkaQ7RkWiAQ7P9hBmDDvfMiKj4jSMKWt4Yx",
  "key9": "2HV32RTHdKed2snAaNXNjbeHXmCMaGiHL8jcPuCWTLEYyMW6Y2FuKp8QWCcBDe669RSKcJhx6ukac3Nuo2dUZTUT",
  "key10": "5PQMr9d6KDqVFkr8z2qQ6JypaRXnWprFFpz6KmDmLhdCHqWowWmnn6EkZk77yzgk45q5H8WR9oTottGCd3mjQQ6m",
  "key11": "4q8XNJkHEeiS8T5R5C4UPg6k2wa4LWj6eqSo4jZQbzGREoW6wN5iYjRiwtHKMBFhB3nds2UNWHeVw5TkiDYPPVBD",
  "key12": "5oUEuySGd8hiqGrtMB33amynhSSpDN7PqVC4cinrzEbRCqVso6TdGgeo5WsiHQWQqSc4fietfP9h7sm2TYGpurUG",
  "key13": "3wVjcmcX69E4TDVdGqh661vcxyQSEcSq9XTPrQePgqLg5ooFmBTAcL7o9rxZqmU3pqke2vU5M87FxPRLzMJgvMGu",
  "key14": "2wv8y4jyuRdi11ebFnFALAcvchP5JHocka64AHr8kyT3dqWhVYLshLXk4heWB1uuo4NiV5eFwSNmkq3SRcKjCZt5",
  "key15": "2QQ7dNYkCuKRfBWu44dFWvSJDwLzw4q4B7YwHJJDjwkBUsmtpc4sLB9obFn8YoY2FCEdMsa4GPomYRn9BwiFFdWx",
  "key16": "3k9Ac2MgPtwbfSoDa8iMG3k21E78H82r699jcMmiZY4xDSQYHu1UwQRmHNCXsJJeKgkzcZdVQyjNKANgLNqENEKM",
  "key17": "4hkCNUBjPthk5KXgLxwiWLD6Vu7g4UrvXHyzFPvq3jYkgATYwLkeCQL3FxynHgaTyLqgCKe21qi2VycVrNc84dqK",
  "key18": "ULuTeXh11XHv2NmbyUijng23exWaSp83TfDuHtuiWyrkrd87bvStvYtiDSKMhN6nz6JHa7NQxDXr4KXfjodfV1d",
  "key19": "4EcX9ccL9HGWqSXvAAp8RUdYHsVTtkNQhTRwCov8Zx5ucTSa2i3rE5A2o5psxYN3cXpDV4bxFxMXKveyx5GQ5QUz",
  "key20": "hBDTDeSFat8Y3HQbF2XTqCuQZCGmMPiZGwue9yThWuWUy3FgnFR8onRYDSjBT8LZZRtyRGPZFMSDPhYnrVxsDMs",
  "key21": "44H1Koe3BAvbFmGfB5BD9VAyzWfHuC42fU8Q2zSNfuPHavxpidtf2qFgppSX8ztTXLd4KdbehTuZedXbzoFNb6y2",
  "key22": "2GMuDDctdFs1C4kUp4TWBMQdzE5yAkMuDJatMCHDxX1znePhyK66VZKNtqjCuSqsHu4HwuyaghZFtbrZCiLgH2eo",
  "key23": "3xXpHJKcZX24yWbQBujjGSgS1p4Yps1jFm7ChkkddMdQ8tx27WCFxcxLJWAGzVVw4vf2VwAbL3woHvGhWj2FzwET",
  "key24": "3v3gTQkbp94RJkmQucTJL4TZvkFL8Ve1eMQ4vL5Bazu1PSGoU5C2kLkWZKXL5wpC9tbmpf5cCKXPuvxVwnvcPfoR",
  "key25": "2fxALYGWDk2yzZbxG2Y2mcLAjLhWJ61AJAcPHLpMdWgXYB1swAc3UoGbPYidXNz5hGvyu26KXh7MxRPGTtDwZhEF",
  "key26": "r9UGDqYkwNMJ9iJW83XFsAUqHxWmYC5MwU9pzrQaR84xgak3cHQgtwrTahALxBAovAsPrmKuUy1jxaGcKHU8uYD",
  "key27": "2hhhtXgJu494mdAymYAQeMkXTbyTKmcB7X6yGHuvopGjunoJvedwMre9noqrHtFkwTDSPNJ9G6aQEiis5rWZR5BG",
  "key28": "Nt3c25AVyKkXbMbQEuFVcnz6EENAwNNqq9e2KSCC831hy7q7UyTdSQkDREehvP6HV7wYBP9nCdKK59TVGh6EKzv",
  "key29": "4dQErBFE6z5icWfkS6ktRWJJQeArCum169i1sjnjF6P1hi8yusbJchH5Lxkpf7N5S6dFyQmm9UtXAds4h7DRBpha",
  "key30": "55tEBEGQMqcjempM8dbGFezYSX6TNkwjXLcNNkunbZjHpZpFATUDqpG7eyf6nbvBnsb61rkYmuuFJMdqeuVTD3bf",
  "key31": "4iC5pCyoNLkqG7k49dGPikAhDfBY9YtrWCKreriRM4dkWgWNjPGHMh2usAWjusnSt8DQ3kCKhzDk53hTZx5xk1oz",
  "key32": "MHJsTc3XdCK312PtTm4sFDDggP1YFj1kDndyeNPcGZujm34f9CNZNvkEmXCcbsXsbmqhPXSVtfAjJfCQP95sZRo",
  "key33": "qx4jRSSxqj3cgGBqPGe3yomuEnukVD4owozto8erANXaNDDt9SQkQ8DNrxCp5M7pQDjvWH8E4Uu9cr7jqKAnJ3b",
  "key34": "65SRnAM7UrvGSgUrVE4GgZv9NvRfRLGMFZZmeNAFHF3EX9XFVAaNRgHm1s8ojqyH4TkrKCz6NJxY6YDawfzEtyNy",
  "key35": "4nkciSQswJwNg12FMn2xWv6wu2aWY1iu5cVUf1o6qxdKAGFpJhGDZHAy327Ug6ekGGfxTDKNhFKVJsvYWy4HuCh4",
  "key36": "56kDaAvWPZybYogiB8SgmwV5bCEpi6opSfBWNHMAXc3Uvjk8yWyUXpJ3dedKnGsfiFmYnyJ4HpXJRSuMsWdQThBt",
  "key37": "57wohnqCuS2LZWoZiFDNMULHzuNAhseKiwLbKB59RHn4mTR7VwjBgxcePv3tnU94T4fQ69CUeQvr9oWgvFcMrrR7",
  "key38": "2kjhmv5FMAPfaGQVJ5rD7QtS6AkWMyw1N8oY8CSBFiTSzTHXXUwWvxsvznY3Q1vKYhRuaSoeV2gtWGSVoDZh89dH",
  "key39": "3tQek2BQ5dzMkUysPkTyc9A26vtptHkbUQhpF44Xt9ByM7dTAZC7yQT7YMdsopt7Af5Z3Eec74itMNgKJy5jRCfa",
  "key40": "5qMYcwvqZE4gAs6NA1ixUJ3nq3J3sfC4W9W4J4xbUEQSUmzuXG4A5HaFsDSQ6BaXsHeymhJbMuGNcAbnbj8esq4n",
  "key41": "25VjXjpqChC5XQf6zbxufLwd7ZnVGQ69WKxNXvL2HS9Z4RHv3A92haLJLGFXBj3BMPfGGyueTwJZSSZKe1SQsMcp",
  "key42": "5g8Ei5cpaqNtcCrHD7hbAeeRGTBxUNjk5WcLxRqfp6N951L8qqsEh7cao3Mt8iG281xXYvbgHFMh1kgH1cAusAty",
  "key43": "5fK9hR7iaT6c8susRkvt2RkosPuRuGxZ6NdLKaapqK61BZR5ob5AmpUGUJXXDfSEwuE4XBA9A93GDcBmnK58sppo",
  "key44": "4wv7wZmU8DdEAZbW6fRNdMyNAUG8Gv2L3E3gHRHXrKBSPiQHk9UqQiwwNohRYbsaKR8iFPFUDxZ8WkkXuTQN7iRF",
  "key45": "516V9yhf34dSEmNmRpzWY7tFpuCBcVs7QokYUmoa2LiukiWWRLfPEkUoW3vBPhRc1ekg1aAJU9U4c25QBVSTsLiH"
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
