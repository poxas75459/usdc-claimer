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
    "5fQkoyyUMfzq3YMUZK3yxxZbjvRAkPsM33fbKzJ7Faet8iG4WVFD6tX77vC732LS9PYjBTAgWXuG8hM7JHn5D1d1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkFqJZvEPJhiXpzr9NP54eMcrmvxuWwLoo4WSE1r6X7cMTjhhSWWfRTmZJYKhx9XH1BhQxmhnoeXHYxJagRE822",
  "key1": "64m51L2fF1LQneSw8LQXZs9VQ5TCGjsWBJPh6acoSBeGRPHduEkVZR8Pp8zGS7GPZb4toYVWHZ1DcnTaAtgPRGQ5",
  "key2": "SVg4wkpkJZcV2Ya8NRu6qGFjVdyGoCuVGNWUJXWWbG32oqpoNRyMB63KgYTX4erkoVxTq6gaunEyyfQk8QPXH15",
  "key3": "3QTDGdKgK4fXDS75nmq5w8wNjwUbqbVEB9xMUX1WhJh7HJJ6QVyxWY21TfT5uMhMpzwP2H6QwzyEdYFKXPd6sT9k",
  "key4": "4e7NjGyiwMawaYEqH143RyCuzA7erTzUXX7GYrHTX2vfRQXdezWxod7WQ9wursx18ha4UCBumyt4iuNPpiniZE1R",
  "key5": "4xYJ4WYDpZtdTmNU9gaXYg8QfEKvZQ8VmPrQSXKeGUNFtRrmK3LUBqCJkepCtpHEi92tbssthoCwmSL44t5SS591",
  "key6": "koQ88gvQf1kGfYCjKcW9hNiKrqYb4WWZiBhhkP8n2bGG6kTENyAgnrC5B5n5rxQs8vQGbJRdo9dFbVGsnh1qtkJ",
  "key7": "3z1CR5tzmZJGXGXo3jNeJwcwLG9UxpqpLMUEYxsLaERWXAD49RhLmatn3SNF3Cvk4EtYNp6sV7G7aney8xBRNa18",
  "key8": "Jwupch2my1MFykFSRcSPfuMXQfHwhLVRfgK6Bn39r5ubCtCdZzt8hmFsBoECuoRGxFFFUyDmtsWDGe3xBq2F5Q8",
  "key9": "2XK2mhruSSN5BECNR27r6caRdexiGZKYdgsh1iXUdjGN2YvoYDA1xYB4eT4DsheK2VYkTxRFXGgLkaYuTnCWHHHJ",
  "key10": "41Qznahc9Wq1UYGXMMgSqbz4qbnfcx6sPWosQt3nA4kdTyQTRqSSY8NvmjAF1JCtQyGqDH9JZ663aMgB3QhkgVbZ",
  "key11": "4BXTXi1sAqCeYCJCNWjyUEebJ7EKAjJPr26BVz56QWjnszTr1W8Q4euWJfeV6cv9cUtSrsS6soF52XwRBEVyemKA",
  "key12": "KK8xPAMDhJTBeqB5YjMtaE9Bw8tuRgKdVoE3KvsYA2jjNLTj2K7P6pksKHSzMV9Sqa7dx5mapw31SNU5QGRY3Eb",
  "key13": "4i6H8wHSkQNMuGh6oK8utCFWjP9oKNK85H5vd5jTXoUbcbGYNM9uzSEvwsARndYFG2Yb7LM9Jron2vpoGqG6qf2k",
  "key14": "31Kb8qWAUfLMnEtFJppvk5AK7Ewzi2orpxFtEbT2V2C9gHejVNgSJCstTckrCav4EHNtqMd14NHUEE8H1bgXhrGW",
  "key15": "2sMCt2bGgfQ2EKg7sWDSUCng8AbbafpNTDDCH7y5HJGcbY2GpH8pp89QPcAdxn4VA65tSWMrCaBvaDNf2JhToebW",
  "key16": "5Pkq9w1argkrDqtgCkyLMkJkGU67yD2mHzhzE671FVGurq4VNwhc5hQM94QkSVb3E1fQMwfsSHPoSPtixmBtZinC",
  "key17": "5Vd7QdmVyUmSFbTSqCM8DZGGdpP3HfbdYFqH4eCto8hrHLPmLpJZkCvifoHu776nUFb6y91Zm2bsM8np4zhKL2w5",
  "key18": "4uLAoPyqtV1iPrHSKxMfg9HtskE6NPt6Doeu13g486xxfNgQCfoXBHWa9HjRhfXKp9SFrQaRr5wAJM9PPnXN1GAN",
  "key19": "3Fhi9QicZpqPrbyoDhCyhKGXhisvwfWWmCP4zx2e9th7A1LiW9c9MPPrkRVzW2AXqcovzJLx9TYRuD9sZUg2jGJW",
  "key20": "5svh1NPvGuctLbAuWnNY17eUo5dLbWDYq647LqMUJBbU7yNv8NtY5eLWFypTFYdKmTUZosVN2sR2RZwtbLKwrpcR",
  "key21": "5KhQZGuGuGADTmcEbHKNpa2XnYPVbgfxHF28SFFUAs1D6zawvQfzVrRUqfWh6PJXSHv4dSJ6Hp731jKcws3DkEHT",
  "key22": "5XW1vKcTzZ27ZEMwhVoj9NJMD43Gxi2jeFGD7cFn9c5peoTTjG2xTkpXr1YowznneQQNyDx8ur8Uc7sSHPtyMLcA",
  "key23": "24YakFG2xSWCfQUHiU3R1t35YvTAv39xvgfzmvN7BkzvY4yPWNTzFwyZdvgaCBCd4BQ56EVshHcgV1vRQYjWj9af",
  "key24": "3299Q5P32vB4a2a2HviXJokMkg1BmGZnUrDbADfzLC19EYDwkqDmNFEWupAnr1obAtrRfSLa3PDTcdjPeFDfsXZQ",
  "key25": "4rTo6tSJGsUtPfggd7umNnc4nzCLebKueubgvVSfmBeA9Shiw4Ubj3MgkdUUghwsqPi1EjNdsrz1JjwYvZ1hsULC",
  "key26": "3fx8wahYsxeT8h37mZwPxQ6SxmyuDVQ4nUYh8kGSuSrECzBriLpeP3ZwnbC8KguS1uRCYtrpzjtxPSGniiChaBZj",
  "key27": "2T31cPRaNne8Xghf6exBcr3F7psPDXckcuNS1fmAi5KGoc1rBmVZDZFYsAFzsxcZqT93Sbm5RE3p4gh444wGbtEF",
  "key28": "5TVsaZM3aaBU5mWe5PusRPJ1k156mGFPbo5eJYq2roiKh5NRDiy1NC5nyF2bosHEuzoHyrepifQ2vePFwZFARNm6",
  "key29": "37xQWXL5vwBXbHm3TLkc7Way25Fm1rmAjmYH9njA1o1xaFyqY1Sdsv1oDXHg97wufvMXBeNfGCVD5Hic7zYpmJLR",
  "key30": "3izRSXAWpaNSkXV2NAXhRWSA3J2bqEjBkHciWBk3QYi9SvDftWFQpwmrm7o43U1RXHge4wEKiwFpEiBVJnedTfTx",
  "key31": "24LsFm5Zx5XFEkRbRcsMMhwa5kM6MsqYdyNfHUZYJFD2EF8Uj6SZRAvCJw5ScmHHZmFBMxz5E3WEiurFNq1C42GV",
  "key32": "41BZUUUpEHKpopWZKjBghdqaPQrTVEHCBo6SiRCx1AiNvPmhc983MA1FD8Q8Ut2gWDMdVgwhFkpfyHP8kWgCoUy6",
  "key33": "5TWmgPVSUjLST8b9xQWjAUcyMpKMfbaCyKGtQEtzm3Cdrkydw253xiBGHHeq8buYAKJj48PWc8w4Af7PXZB2NKhb",
  "key34": "3w9QTL9ruvSFEXZxp7Ybd9T3WQXZZx7xgcURxvcJqQ7gsA2Guujbi7DinPku4WsfrCpZwtQFd5juHwiixCuLBMa7",
  "key35": "M9F9HQt2aWR2zsqvj5gDkXzWa8KgHnaFMHWRb6C1mrmGqrVvPBNBAp2UkZJhfgjw7fe3ZoVVVUEcPg8sc2z2Hsf",
  "key36": "5Ahy3rAxdHfFSS1K8tBb12JnfYdiQ7xdF38xQfqY1qTwRyYEotiE5fmgVzuVRs8cCqGm6v85RLsu9YdmGKwWPYAt",
  "key37": "45HYjPVBaJ4S6tVre4MYVHrNKDjy76VTf2fUrArYhjVqyQqoxi1A7bGNzbmWTiTKLmaNeDwprjB8kxCD3RZHHbuW",
  "key38": "3tzp49sKrcZ8w3BKgTSwQetM1jJYNbvCYzNFHwYGCo7iWLoHmsdwcj9RPVkKVbv6QopfQfABaiPVTtY1cdqSam5n",
  "key39": "5jYijxQe3s3RZG6HmB8emt3eE5xsF1XxJPeEb1mLUiVFRFrSiUez2xXGU95xYYuyhmzxrXVmxSqhn93LyB5twk7q",
  "key40": "2a4qLdnGUmWdk2mxvGku2CsjcuwPBpKemUH4LEZV9xuTdfdG266NdkxbyNCELJB7eR5sYdbihZXqfU8XPTDTcp9N",
  "key41": "5wpnptVpavstjYs2ssN2oYKY1gSj4rgQZGJfx1LkA1T4ARJK6wfcqTQdQ56XdECFyt6qRujrdxaAVTm5bBp9XbSi",
  "key42": "3KD9QPjxKQvvCLMbV7vULs4F8szGDS49fYG2mZZi1LewSyvhSgYJ1KR9UaHPdpUKrSsgvvStkHyWaUg3AVQzDWgD"
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
