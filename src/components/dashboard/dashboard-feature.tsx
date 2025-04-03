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
    "5M7wJaK7D8mbWJzvPT4sh7RpyYPntcn4TSxRBcaUMGJd36548GLVRA2ymYHqecX8hi7eBsPgthYYRKNtFEUbcxUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3dPoWgGcHDk8qHiVGD6LQAS7Va6NYArtJa2cWE549y5jkURzix8M3ygmUe6CdQM57rvkuW9Ng492BkZyZae4yG",
  "key1": "c8sYv8aVY3aFsKonPuLXgRoY1FxGwNFML6cyVjuD2bt37qPee9Z3gdcKCr3jm76UiwxsmjpkL8NjyQyo9ooKg7Q",
  "key2": "NA9JzZV7oTMqxyEpfrwwMup2tuSe6ZwwB1ZQHRQgsoNiMFFCLFF7hY35yKhsrP4UFwHhZdWD8EHStfkkcWtkrhh",
  "key3": "bKUx8nrdkmMHP1AMFcYrKJAb4L8b2vEAdE6HYsu9pupHHz7p9qYF5mPfMi8oUKPJM6FQgkbDuLuWCgHihoNaEgT",
  "key4": "5hCumJr7AWgNqvJif5rMot12b2WyA1vrqhZTtjJ5RJJmAwkPx7R3MWLtvcHVxEZUpUw24gsDtHbdZQnfJ1AiSabk",
  "key5": "3NUP9C2cyGZ7b8ws1hRLMULFcrPPNH3FgrZYsXwLM67ftjBayMtaN9fimo4vhoom3TpuHUWfNg1Qjvn4UQobgkfo",
  "key6": "zG77mcdFPpV5qWkmaW61ytCpHNW8khpdHR8ZxCZUCPgzBn4SYYxUMx4w9QSYHtBZM6eA7o6pRVcYis3FzLpnRA1",
  "key7": "4tPa73ZMGbhACMFeSt4PY63pa8RH1Zgjf1HXputqo4v2HWDPufaRxgJaHGRXYP1A289HnAxGDyerVznc6XPGBABW",
  "key8": "3a4Fv3nZCcyvL6UL9chJGKTp5J6hmCgDphzp4KWx1a2bGyxadSjkNXy1ReiTJhcQRZxf6EqSGnUgKhUBFZCPG2uS",
  "key9": "2yyoCenPsQbkCQyM9PrD1efifRPpuGxmmCrujY56xjiD8HtJzuvmpcNA3YMPqEbrKshNsBWVhneS7YKTs88rh4zg",
  "key10": "8dfgQuadhKVWKMkvHdMzPuctR3o428Xvdhkjg6Bg5NffE1cPReby8uHKbCecrn5uFukc1jBqm5UYqRd9B1F59oa",
  "key11": "5v19GGFKjQes25bdsroQ8amUca2CAYgpf49uYzsnWq6ZfzP65b2bLtzkymLAcKLoTDb7jZQBbuskFS3fmwwrRVTS",
  "key12": "5LxFzo3KsBH8X7ZJkxqmatU62978n2paaRyGRsNVqG4wJwUc6jh6Kdhjg84Z1qMbFfejPf4y3BeDVZktpQ9gih3G",
  "key13": "3a6BGE9dyKWv5RDmo4oEE9YQdvzXi1yFc6CjvmzjkYuVssbvMY5gxW3JEsVQdAQshu7AN1RAvBamAAvkrqyTe7jX",
  "key14": "2iNWii7QFXyTGbHgTdCviW75tSYS9ZRwaDkFkGoMWgBhyDHF725AzfrN1C1zzRYK2RBFKhWErJ9TgfkjETHKfLEa",
  "key15": "PLaadaTA4RRp2B8mEn8Nf8MKVcjJZBoYdqAGs4VrbQWj2Yooh8v9J54ZERYJx7yaKaEwVZNLH8fW4eLpHdF8MH9",
  "key16": "54RoFjzq8tU2gY6b68KskLcQ3nRFxdsbTDSp6zyyS8WuCQPXA256cTT6Y8SXHi3sUfbjHXUnwiuE1tQnDouCVhy6",
  "key17": "44PBMcFexUcjCneEGhvhbTHyLT5hqgJqnbvqU7xhZnQmmc1ezjkyDvBMGNyEeMj1tfGsGoLp54kSUvwg6TbJkztr",
  "key18": "3R9gHfKinxX5ce4zsKJNaQKurswdsLhmEQecCWZh9Fp2N7TbMN99MedSFAdmcWJTqXtiFiaVmsHZ3BLaNkVrbq7W",
  "key19": "rsKJA6MCSg9iLQeH6LNoYfnJgpcP46GGNx3cdUz7C4Ayy6wgdGu7fB39itMgGPtJyYHKh31zzFdKimzbZet1xdY",
  "key20": "5YUWZJatAsfZnm8PNXnMW7jWVqR1UnNCgbrCHRVzYV8Dug9NidsSmUNZhToJPqWobNKFWbMrdTh7uPmdwNiPvFEv",
  "key21": "51Fm8mttFJQ2HstHap1MxEmiTWSWTXLTzn9zWTBS3sBhLBavsWtyUNkvMtWTwR2pbGYFpJi1WTZMfcUeDvQXBimL",
  "key22": "5CnKNcrom9gesjkEfwronHggJnEVnrdU9idpxN7JgSy1HwDxMfukF98UNzuhZrS2KkE9at16jjhmA24eKaAKe5CB",
  "key23": "3z7jCdjWFeGEBjZ9cf1ov3cXRVAKWWDT59GK9pPnS98hPMwa9K5WF1g4GuQCJFeLH3fjv8yWegj2J1km1Qu5pu6G",
  "key24": "Qkwd41qkyTXukhJvdKGYiQob2dcfUsYS5gECfDBkwWVCdptmQtRKLaSc5Pys9Vsxm3w7H1fEmy81zxTbjKJQmyd",
  "key25": "4bEGo1PEZPuc6mbovraNrnLnsaihnbeoJb6CmoiD3BL8QmE9QqvnLTssAK8bn7ZqhMSkLwouwu2UexzzLZsb3NR",
  "key26": "5BRsagVEMYYLkfkCBq3N2CJt6MoqmdWzxz4ksbXGRyNFH2mDYw8AVxgN8grvT5RFkGkcrojKh5SeoNCH7dZL9VWH",
  "key27": "5fVMepVsEHhqPp7kjJdpVBakAwLWpDRUz9Tq8Y4Qbvkpn4a2vzs9za91RvvygXJHS4dbBr9rVBG5sXJf2EUGBk9K",
  "key28": "2PR61CSAHfXgfwzFBcoj2ARXEF1EJQyCGJYQY9xU5AN9AgsHtvydup62YgP78ybhJFXqPdsv1MEy29orf5WtFTH5",
  "key29": "2mVr9vrRzQjQ6PCGtuxuVqyQKawbez4cvkw2CWRbSvHYtuQdfX9SU68gjgxiJK8cKBJpeTD5s8Dq2fx4TVq5Y5nw",
  "key30": "3ZxHfYmczME2KD7MTH61oL2hEU8LBkXCu7A7fAqYiQggs3ciD7KU9ygGBUPdGhHzVMHqfoMWoAnUvxbvtZMw6Rf1",
  "key31": "5jrNCikkz86C5c76AcWqRM45z19bgcRDVpWXyAfSvVXAsjSiZFguBJfXierbmoMT3MSYAbWdoxjZhcHWVAhQC1JR",
  "key32": "DKFxDq28znLtWRFMvbzdxgWc7fPdHsiRTCyj44XUPYEB3BwhyZ9Li85eRy8gdZgjtKn6HkBnGtJQP2zZkQin44B",
  "key33": "5umovrT3zqV3JhnMsGkNgsmdXCxY4iAnKxtunKYSH4QmaYfzmk37HPchcLxPcEhyw4UWWbpNQ8yKE5MH2Pb5gMiW",
  "key34": "5kh2VeYidn5wbQvSnm9zsCXqSvBz3crSmo7XpcUgSnBoJ1rgfrPy6UJ67dFyUBog4ma45LNskyWDcP5mAmdvsLye",
  "key35": "4rFDGTzSq9LBNUDE99nCNVbR65PuAvTSoqfYSeMV38QE1pCiVAB3sz3DB4BDLxqjU5u5oHby6Su8n6vHPNeWxibC",
  "key36": "5sUxKet7ghGRtptS9P5Qy6NmzMHvV961195AyEDXbjzTWxcKhTgjH3Qsj5iPUGf4brjQdcSPpj7DHrSnZM4WNZjK",
  "key37": "5hxv5LYncFQh2kSmyisXLwcMZQYx1qdXce1FAxx7ztSWDMgGTN93NSiV6e1RAg5GGPHUHegg4c18ThV4uPJ7sy9K",
  "key38": "3thCmPVb4HbvXu3rGExKgqs2ggrFptSdDET31heNwXJZ55XYt5tM3hvdo6vetkYn5BAmF7gTA3jD8JgWc9pNric",
  "key39": "3RCpLfTNp4ZQtUDVVo4tdHRy3cMxeQrxff3LjPYAGDPdJeF1W79A4mfZmzhvpDswRjRaQG39sizytPg4FqVsSexa",
  "key40": "61MRtjzsQqEKoBfr2wtbCg76RnWs1uELftH7jyi1gumU1KB8VFWrDMxrvq3rKSnH2SJtz2SgFFFHB1yHp6yV5QFD",
  "key41": "4CTiWNsgWjNNxHB9ShepPQV95NJ2FcEHKDP3H9SwgyX1Zrx2WYchSGSX47mHHJ9o2rFfBo7aqvRUDF7b3Dub6hGg",
  "key42": "2mkeBG6H3Q7hz4GBc9dqmxhpjhEZvizsREAfGQzaypUAMbTP6MPBUTAnabjxJM1yqgoWb9tYYePwbFZymvF1nE5u",
  "key43": "5gKXBQQ8yGZMGmRKk5CYPN8jhbjZLTRENeVXgindiw8wzbg5PpkrZdm5kEe1FKC1bK2EzPBmVGSY677qe6k71s6k",
  "key44": "4931NvuPAH8aSjjToXhKWesLpfQXZhEz2jiaNvyhoayjytmHKpNaMmMX4kRzgzLxbuVZQgwd7VEpn8U4AHoZ5KSm",
  "key45": "3fnmkMvnYUZNidF6q6PFx25BfyMoLWq7qhaKwVB95Q6Qe7hKDz4uQMSqbwJwYt2t3iKsSxfHJACghtC8ZYfLgwAo"
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
