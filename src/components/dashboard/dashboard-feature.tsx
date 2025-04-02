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
    "q9rmgiDczYFpJbpGrYQxAJPKSPHkC3mWbyFmUaeGy3ahs2PEvfG9MAnxQpRoDSVqBaRaKpcDbc6fMwrzXwBvXDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPW5t9QogqhLb5Mzt1BWy9DQfk1dKUPYofcdenuy6k6ne4nk5hCU1B325wdTBQUq5rSYYZ5gMXiWuBMWpjecaKz",
  "key1": "5nRahL1jfDaG9Hib4aN8vGimDHnsZTreBCCPzR1FwPuGewNMxjxQbnufDodQUGBCyeBGnjBetpD9tZfChZxFk1Qk",
  "key2": "2Ts7pJaAm1HMRPuqAarf5B4r8Xp1ZoCAuP4m2ZNux1WDvd69jzFUjBfTfuKaUZpoXpU6WkC2hDZmsNGQR3PWSiZo",
  "key3": "29cyrPmBHhwcHmk8d7o1rbbz6JW6AahLRAj5pqsHB4TKMKaYQ4Wv8xpFCY9kvk2JXrgcqg35pq5KTg2nMC7tn7uh",
  "key4": "3m1q534UsGNUmfptrn5yq3TUhCug8BsG2EYvZc43QBHNqmXuDLpHzZ4iMLBnvdvxntqrCtyfPrGX1cuhkB9PAcLv",
  "key5": "oeVZfr1qYg79Jvi1wj3pipGstMCN83nsUHyuwfy9bTGUsxee6ZBRN5Bucjwx6dJ4WetSCZPx2X3UzSiH33odmp1",
  "key6": "2vmznYmHCYNsPQnExdVJy5CWeiATqf6i1tRjGZpp2AGcW2Bn2DDUUMJXFGFej2SD9xxrrRhNWETvxAzUe4VJhGF8",
  "key7": "B5isjXbiP5UdXiCMnes8vQ3S6xE4YEJ3kvDfYHzZW3zUx69QT6GeX2nWgTtAyrjtSxv5HU1wbF5Jt6it5Gq7XMx",
  "key8": "21Amp64rcDza5wWhTV9BYh23BUYWSYyVdDdowSco9kh83FtSDzTsNAdUbzw3FXuqsLt8hy3vjmKZmvz1uyjih1t8",
  "key9": "5XBdvA2bVYFBkbHrtCxYifnF4Xueg1rx6iqcCWweRVZAsfZhQXt72mYyu6uEZreZz1uGTKgWFwrKHYG7QZuvxFQZ",
  "key10": "62N1uMdoznC1YDKVXpSjmuHMJe3ww355thrPLtwWHk6DzBJRmFuyjN8dNqPzwiLSnmJGDJALn4jnpLegR6MUjWJQ",
  "key11": "2oqpqFnFgc1FALxygFQFMXxttVf6BKPm7CtJJdwaaaBg2HADiux1GSe85f25cNktR9m72PQnmGNMTV5afkCj8r2E",
  "key12": "tGoUDDXgTSQ3g69hYwnS5T77FoCjXmUFV5CTC4kuE4UGdJGuUE6EFSkXgTYKatmnt9NpPn2m3B2vi2ChTQCeok5",
  "key13": "7Y856hjz5HFtn85MBTKFHJ8ZcLPRZDAkwKvQUdTgN6fABuaUbXoNJjQUv9A3dih7nhdNu4ovSzXvbnVG2rr1DeZ",
  "key14": "WV7KnqMdmawqHp8EzCLNADyuaaDZLZntcVvnuVKUgsAwoZ254dxLZ1eDinvdYTSyaBkD3wBDo2iy92qx1eSMks5",
  "key15": "5yVMdYfDq2GH7WbCgVzKeUUthmwqPXre2Y4M8qSzqxmqAzbVQb4Ym3eeXEZdW6FVPRDFmZbmaxy4k3i9Kri9v1uL",
  "key16": "64d2nKhjv8DEuuPNJbat7ZYVT7Gb3NfH4H7gTymFur1ZCpeh63LaXYrNvHB73yQMmB6yeMuMTJ84xMuWHkGgq4YL",
  "key17": "3z1Y4ewNR1KJDusQDkLZ49MVNZoYyR9vPT8ACMjdt2Chca3LyYN9tSrUFUPeatd3f58zMDyj7sw1xZgLwYQAfU9w",
  "key18": "SwNsm6fwv6tRB9w41V3hhX7AmbfCNzmrGszHsGgdomz8YqNFcVoXzkbDs94Q3XbipfSaeE5WDLRmEbzfvaJBExM",
  "key19": "397pokQBmsyHSasdFVy2sJULWPCNCchY39doFsjakr4M7LXcR6PBzvCcJA6T7ZV5yUtTo4aT7uZy617yBdDcybGD",
  "key20": "4HrGSYinpfSSSKdHwj4eFsFuFjjVQ4qigZyQsEm2uXazn3kmKcRNQ9tDa4Ce1PtcpC6PSUH2M8wwX4sYhPqNaXpo",
  "key21": "5NnDL1hehMFwMLykCbWVQWG9aE54q52eeXwiPy7oJH9waEAynyE3GAiXxnD55eqrEk7bvhLqGb8DzdP3LKQxec7U",
  "key22": "65E8EbC7VE8CkK7wUepFeLbowmoxGuF2iigBbAgp4w563Y5cpRrkNx1gmbWW6tT8yLAZ3MBDtoGkjV9ES3hVDr1F",
  "key23": "5XcQQ6gqRP2BADhd2ZNtyb7dB4sPoGsonqFTiziUdNT82Ld4AyyGRDGzgDWrsLYRnLyNi4vuKfq529rfkZEzMA1d",
  "key24": "3Ak6irzEKgD99bzhuHvTNKBRj7ufMCRfQVajgdEtVyzcd4nzcmo4zAZcRQp81aTc1HyXh29kmdMf4SeL1ZiXzJZq",
  "key25": "2WLpkXBohZTHKpep9QHv8sUgePWsjZ8XrBPhCb3uc83YvcJ8nCVN55KB1vUQsxwwur2sMdXY9NQ47W7CDeigoBC3",
  "key26": "51Vw4LcJVfpKjjHwGGGRoLxJ4eqkJx5E1fhk3PJeX12gWfqDPtjnESb9bahFbyYqWbojPjdXw7sJf5oRnv58wzP6",
  "key27": "52WxViY9pRr3jNcAk14PcdbbbbChNJuP26VWJ3JXrcSoxoUMtVKQHySbxbPg6TvAR5qRUQRHeSXecWAY1xMubDNR",
  "key28": "62tsqPAyyg4PYFsyPha4UKfopdgudqj8haBrmvaJ1HcUD2HBdKZKus17P2u5evoD4Z4APKZScxbLu1Qp2Z9PtfNh",
  "key29": "27ynPaSwDmNzK3Ng59S26Q4KWDtEFDWjhXUQ2Wc6ELjmPoNqh6DgejXxCesLGpEXA1os4yuUYdegHKcYHSqFovfL",
  "key30": "4uryZW2FXBJZXMRJW77RKRvAbAgRgq4FvXisEp8XL7n9uvRNB2TWzgetCbKis1z8FuJaXKEgHcLDM16BrM8BUEhH",
  "key31": "54Q9pkPpKgyhBXoi6xgHD347zrjxrTKypxo8hrEWiTSXxdVDiVy2XYKaxMqhcTsHgQ8insM9mUJ5tdswu7Qsty87",
  "key32": "3DiyeEdYeCqBYy3NjZEs4siLuYXh8RqTgLUuR6KoemNyMXofEz8j1VrogmVc17YzvKyEfRa1tXsJTB82njjaJ1w4",
  "key33": "41Tt1qPDLhnLdL8UA9Q49ynDB8eHZzE7uGvTENNmhhcz5kdKzXP5BsPFdvCho2PsjaA8Rx7fhw7Ro8rmgrViukim",
  "key34": "42jsHm5pHSd2DiSkRzZ4Lcnf17H9k3DzNq2JmjonTWTpd5tGoCXTk7LxopJu26rhes5Q6iLDJ8iLW9QN7dsuHsa9",
  "key35": "5MtTfwjSHFiL5m5V3HCBYDsVedkJaJU9t3S4RQZ1KWBGhPubzcrrP7fraCDCpRdevhU7X5X6ztnotCLFMaPtrD4x",
  "key36": "Lbnr99EH8mQbk9FoQTk6wEmoVuR1ZTmGJrs7i8qUFNC3hoZYe7Qg3Mj1DZwxaSG5E4Etj611BP3qMZG6Qf5aAJs",
  "key37": "4aGQzev62toqMZV4cnsYMKyyFhycFKi3KDVVrsC6b5qjcsygx8QZ8gENWVtHLZ6jahqNr8yv2F72gkP5UVqNeher",
  "key38": "1B2Ce7wfbSTiib13ugTYvQAsoLSUd7saTHuZ71JsRxZGQX8fcQ3ePV58Y1c8sFgwrBzh2q6mpPtSypFq2RqBgKW",
  "key39": "DQTa2a6VAJ4T4g34BGQMT2PVyTjiDxqvMQXMNtB9ifjmzBgdXLhuQDGL676pVR59rQVzQmY8MBHu6FrpBbeFwA1",
  "key40": "jzbrgpenDzZzBps7ZQ3Hdd22RzXq6B7xzLiqi1AGiqbxy3XWAbfB62m5vT6r3JimWs2mNW7rNGVf18xChopuaSG",
  "key41": "3oMoGifzzETEFyHpJj4e63xfrR3u3eGRPDNuUzXuXpbPKtnmq14D8YtyUBbfjBtGx3MqJEFBNriXXed8pGyrtfUo",
  "key42": "4dUu5wGJKQSDWeFAa1v9jXxXh2zzaw5hgkp2bGvH8fkcvvb7G1ZhsokEA1rDixHdw1zJ4ezGZvGwYoapdSVfG9VV",
  "key43": "3N7mNr5pESRfGxJPyFsFXJwe3kdXeRW9y5HcoXQVwTLWUZUCsEgkH4nst153qYpxDDgNL5CewbXnX2ipiGgTYA3f",
  "key44": "4MsG9MRPpC2fFXPzvqC2HR1hDoA3jo2cvrnU6btLDApd5BMJ3ZQn9H37SRyU6kmFk8FYTu5TsvdXDUNRfo7C6BC2",
  "key45": "N1yGrtk13ENRMKZAu59teJ87v4cPvqWZSgsfuPM7aqSWcAkDwzU1BP7TfrZFrbGzhLYemGnxPcorT9Wk4E5ynW3",
  "key46": "43PuTYehqqkrJTK7HSH2d11MePyjLtSnRqhKzaVBVeErrFeNZa5yKN3jadX8A1BudVCrqUdpsfBVprLiLAMYb9RQ",
  "key47": "2NPLoSvxryHkCbuhuJk5RjEMSy8TrkW1Sj8V4gQFqnS8vR3i8gyFn8eQaGMHZqZ7ovVJ5Lxnqb58s39zSNTYXTva",
  "key48": "2ftEXsMwvxbLYfhtsfbYR2VQNUSR5xvJfyhPqexY5FAoCi5EsQFPSY4bSjW5GTLMvTDc3i3JFKVzcaAN57yZUvs7",
  "key49": "5f99snCzueq1BZh1uNu6E9Q2Rov4iQE7Brn2gDwkTCED97E3SsS7r76cBz84BCMJS3ceyMFjqg57aqz1b3PQf3tg"
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
