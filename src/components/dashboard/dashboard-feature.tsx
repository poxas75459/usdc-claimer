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
    "3v9YNVrdwAixzBhFVV8u5PsB661wSixgkBirTcUbw1Mxn3bourxnaN4PKk7PdGYSZfXFSrcHKkMRB79hVNXbdWJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8JmhgxZw2nCeihKAsHvBbt3aPFxxwmbu7Zg15PWy9yiS8a7ScQsjpLH1Jj61yHepEm4BqZzWrnSQQMdFPRPYTp",
  "key1": "DxBB8qxGfthp8cHbfcUsboNWJgAUScZkMnGW8A4wCYM5LBagjeWqguUPFXFZZeMz51VyW4REV5qXnuBhiBAR9cu",
  "key2": "5jRwPhCQETMQnLHPjnqiGSWHw6gg2REu5Z5xfCE36p3DSGcfc9p6xm8D8Zfs7pdDd79HQWGAEB7Q3rzedt2tHPRZ",
  "key3": "3vksFHodwny3LrsUt8bTbyYr96Kddpaz9bED7A3x9eBZJhG8mR44skENx6bjAE3hv8kMnLRU6KLGfFHjydTnYKuY",
  "key4": "Sgi75zr82Jry9Smkci9ih2C5CdZPq8sRSup6veJfxNG1aVege9WVvJ5qJv2L4CvxowfpfQ5tXxRDooAxSdqrB8q",
  "key5": "3McUGkVzN1kWkaXx6WNJ1xxWnY1rNSdCRC5FfLjKgCP8Qg8fPQ8JuCMUAXVn5VDM93Xg1q6YaT7d2XwedsPZ9fR4",
  "key6": "62pc1aevjg2gKwPmvZeyU6ZPyXLqERJJwn4AwXZYg97DMw1eLQ81fFNs4WT5zbChD791MAYvT1q2m7sLHAAJe6iH",
  "key7": "4MS9SAwTgwP5Gb7GKuPUYtkyHCR7s733pu81gzsojpEQS9fvLvy7xyYUpJdMtoHAxL5T3in3KNwyc7gpnpAY7f3W",
  "key8": "4GFjqNF7wSWrVZrieCKeLUJBkBk5jKoQrPnjDBUoVa5UDWW4Hg1f2p1fvjSc7t7jwrhu4ebwSnqp5936uEHJKQUy",
  "key9": "2jPqhojTP7zsAF9D3Lb1eENNVGhFTAUxuFFLrhCDTow3bnEaRCoBWcM8Rar8CjnYuz1rVPBmt7rqKCnRTJt7MQJM",
  "key10": "5rqCCGtPaUnwSYD5RmbVjTdJ3qmeadSasTQgxMDLThoL9XaDsS6xMFrdwPeqoZY1nEGbSj7M55UEot4kDW2Rg7Gq",
  "key11": "3JPiUC1H3r9U7DVnm5fyecg9gC9LCmPcBfDFDEU2HsAvL2CMxkVicr2uDEaRvuM6rFu1fA372gNS8nmqAikKB8KW",
  "key12": "41HjA8bnZ8PSQbqaieFns4R4xYtA9TFZcriN53poJ5LtC7LRvAhCj6nTwRW8RZ1m5Abx4eqDNyS1Vvcpr1z8S1Ur",
  "key13": "2EGk8gWnPGkVBY3CESup2MXBaCgaxkHQLBtQhQhc4q6vu136HrX2hMFawQNF293zwCyHFdAQU8vpN1MSUYeZR5PA",
  "key14": "QEz7AmFCMhWBo3VTx4GkS7uudgffiusvyShWXMAZYt6LJ6XYFetGyCNms8MarERiXmQwzUqV7LUDn1vAxBmuG9p",
  "key15": "sguVYaBKqLhpBzz2VarLrbS9MQFTFN9F14H1PwwoYxQuqNFAZtzFkfvsTmvF7myGtzAXipRRNuR9JY3hJfmApLu",
  "key16": "5e84YQnzgYby2uMmZR14y4WtqebWHWLH2Yoevh2zPm3bohc5GK1yqAwpiY95oChasBmv3WjmovTsGHdiPFgdNx8W",
  "key17": "vnuxvM44XgyZmJXwVpgL4UhFJyMBCsALRjMafAxAhFUkM2Nx1EsaBRJnKXzyAQouptGKzSuahi5j1tuLm3c8Ezj",
  "key18": "4HuLFoYNSK1UVnfaJhxEyYxiCoFDgxnbprWHsNvk5oPUt3ubrXLawReQoMB39q4CpJis5vntP4a8PP3jjRWjK4zc",
  "key19": "uQB2NxyKPSbHV2uWTbWoXdzTjagFwtYBCDYZJXCkESqPj7cJ14vdCnXHmV4bSYhRHUFLhaUqRPWgDxrrfvLttwW",
  "key20": "57C6ULycaVE4TZkkxJTQSfGLNfUP43JC1XxAv3cfypXKtZJWh5e2SCTUVEXx1tJEusXhp2tQuppfB7GvFLQwxvox",
  "key21": "2JheSuq38GUXksF5GGP3wgevMVjaNdYzJPKZmnukCYmUsNXx31BcT6DBPPJ9w9V9PRgYBq6TQruyC5Jagu7nzD52",
  "key22": "4qHNRA4LkU9f4oaRbHMZAxPvVYguKdExRMCvvGsycovStEfV5WWboDrShTFy6C3MCU978mn32kEAkeUrxqr8Ub8j",
  "key23": "4WJr5iZFVPMmbNQeTHDMt6wa45UnfL4VANfvBD9mzQjERkA7zLaeRF9yLycpdVwtKsHABQGryyjC6CTh8ovEtJUE",
  "key24": "3MZwrN8b1K6AxCLDviTZD2S4CnnNM2R1PsWwGBEb2e1CcHj58dis6nmaggv4PgH3cEKDc6R2MHoM6X5jzLWdnVL",
  "key25": "2JHw9zrC4XZhGZEpXgiMZt9YdkvwQbtfTRBVKffg86t9CzC9iMjT9P8o8D6dHgSffZhoSi41pKHjbaZC7LDn36Kk",
  "key26": "63692rQTRtrsCW7uVSRrTyjyTfVGiHHRZSUg256wApBcPB5gLJf2qoprE3jGnz5EEWTDcJNgHAwbwK3PidPwvz54",
  "key27": "4aYGttw61r6DatDhoHADEZSEkhMp5LrMnn6CMjQVQvxamgpWK9ZDjayCuZNVgmobYJ1GEdHiQMyfq7f1V4GbQnF4",
  "key28": "46BZf1jYLuQo1v1N3nyG2U67dBpfhNa8SHjpt5LPP4k4VFNivMoW2kV8Lv6Pb1YqcWsyDdg6K7YcpTuvYPuJHFHg",
  "key29": "psSN7TqJycqurhveaSbhTu9AqJqhc46KXUQi6jBe7TdGGW4TxkKBpiT32RxobQCTjTvxLUg4XtQgfiGftK4ryqH",
  "key30": "3LA7DrTeKKYeW4W5NGkq3rCE8PtHizzFpZFEEXQPG93uVPfLuE2kpmJKwQvmkEjMv8o6HoCYK6tZQJ2MNyFna912",
  "key31": "5aJEnfnk18MiY9z2ugRVAvia34yuMTR3XXN9yWQeVZzr6k6xkPZKukWXcTqSzJ2RxNfTimm6Uxbkwnt3JaezZxZS",
  "key32": "4LmXBeJf2WvFyEmXT9x6mRhHWNpSzvzHNbaVu2TXuBa6DmCoDMuwRbhDQa9CLr1Uvcv3aKurTX1SJbPe8rA9z1xi",
  "key33": "5BPEV47YGwQhgNNpvdSPyxzYaLeofg5skJTxqcU1oEQM8Z5eKrgvwYpLB1rLL4suT2XiPuVuBPZNsV7DMcqtUHzL",
  "key34": "6YG1ZPogqTsQotvTec5ocC8WJQYxQ3Q1Zc1dadrNDEZ1xV5T9P6yUn7wce5gEYknpmdmMK8Tr6hHSFJC8Ki6FFk",
  "key35": "56X1K7nempX6GZSWvCnKfGMmKSJ3LNigvXd7d6KLHdLQBkhTbkqHyQoNWSuoKsJKqwSqRs5beeDpZHxmRdbnRZ6b",
  "key36": "3HWLFa89CDff25XbL8qKrGLUkW7MiWra4JKuGMyjWc57fqzmEyMPaSbc4Y8BGH6Vp9XWonV9FXGeePDZtQ2pdXPk",
  "key37": "3NfRcSZQAnaBMjk7ed1pCUh34UJz5CE3XGZZzrGKwzPSaP6hbQp5vrNANRwDNMax2VF2xP1rhSaCEM6Tm4SvSpXw",
  "key38": "5j1vCxVAoRD32DgUCmjJZ9ZGuRVag5hjFsPq8KaDLPezN3WQKEKvL81CUKAcXvtjUejXFTbfGDahof9EahVbiyCk"
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
