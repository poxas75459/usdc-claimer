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
    "5sJz7breDQYiipAkngoLd8AnveDMHWA2TdaXaYy4mwjREBCdBUYdjSfSGWG1actkBv26r5TLZxb9DXH8AxvNyECb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sw2dDHJ3tyqiJjN1i7gXYZaqrS7VHgXUSgWy2DCkn1D51BTA2GziahvqXM7KfrZjRBnZX5G1n6vTFfvCpmSAVhq",
  "key1": "3FF4ghCtuKi1pC6D1PNg1gffi8yegbuAwBxJpp9TzC9y7e8fBRFobsUVRCVGXTyV2zdLY5YnUFunY5zawe6pWiuW",
  "key2": "346CqSAo4Kw1Tmem2GFbGqgF2QqzRGiDMWDuRJznYYRAdFj8yETu8DCyMd3LXFtNqoQuEEnbP3vmXH59KVEoAUdX",
  "key3": "kp7Sh2ygX2johryLxJZho2tMYW5edCKKL8sanhfXCwmA16suPtwhtEmSv5mMHKnXbfhHdEHq4kCtt1MWkRCZeYN",
  "key4": "45a588FsCvU32AwaK5XhLTX5LzrPoZBkqzJbzVP3MzLB5P5yCSDCjqthbojBbU6nYRHAnfAyWVckaqShYDqump3y",
  "key5": "2jSNkxGTV5S8sVsSmuJxyHubLMMMLYQusUPRCAf9uX6H8MrUw47AUrcVscBv3qfHXHnJJrbsarDwtYNp5WMLPUG9",
  "key6": "PoQeyDnvaHiZG9GYQWxwtuCo8KL1g9kKUGfPEcbhhWgh2UbjvwsT6o9Z5di2tBPriLcy1fkqaeLrSoDPu1nNsEx",
  "key7": "2g7HFFPdiWLRioeTdVqhpaxUBHUCxApVBGKXpfYicdXRN4Xj3X6rSmbzm3R1mWXeMdVkjtWjteFKuYZnLsUUeqCB",
  "key8": "5youPBcMhi4ULBn1M6S1ruFqcHQ1WCDXTTCHNA2SqKNzdNgFWZz9Kj4vLk8CCTJNKPzom3abjdUtjACc9JhoT5jQ",
  "key9": "5vrAD5dRAXGXdM7zwSmN4gaVzCb8GA3XC29ida8yQKA9btYsAVFxA4tM397An8WXzQbQGX1JwbpSyZnoDhuaYSRe",
  "key10": "51QMYyYGHzYPS8EAQvyDR1cBPksv4ofVEj9KSEpCBMDUK7gVSAZJ9UYgLBxpUfajf8nwVxWReCEaWqqov3MmgaEb",
  "key11": "2tHPE6oPzbgiPxt2rZS26zi4rmUxRRzSsZ9A1wsGt32GxF8fHKBodcp91MyD5W3FfYLSTzRmtrmHoxL4gj46uiHJ",
  "key12": "55whhtLM1NFihCa2rRYv33pTFHCKimDpNr94KZhAphhUgFTPzMSK1bZjqc2uQgZz1HS8YckgP5fGF6294htfKwCg",
  "key13": "61JNSYW5MNDZFLEMm2J241ZXbNaYazSYqeW1RkMcLDhdJQceEp8D2ZwVz6KAmYwYJk5FQ9KiNDNCj4y7Hv1YMKUL",
  "key14": "4yHv9kErBCcttP9Dmiwaw19hSnXXnh5hHWfwbY4RYJyfnjFmW3QbZLWqfJytSUuQcNPQZ5sAkppuoq19Grhn4zKS",
  "key15": "68j4VN1p9yK7JroVd3dEaNhnDAN3a25oVTHiL41SVf8ozLULjZdFZRUVaqso4ETbsvXPAfFQ7tAziFHvwZjQspE",
  "key16": "NyuggKvZmS2yjqX5mf6Lb2YCy2nMvidcrD4rmSfeyhpKK4XmdyxdMREx58BJ5KNJ3TXZrt8UnRf98uTqJrHzEuq",
  "key17": "5Uat8Q423AZiZfbEp6ScxcGKdYPJWX29zjR1nJBJtJ5X7qGtmuU9HhXAyeJMjJ7Wr6wwLJH98tRHCWtbvSvhnSXR",
  "key18": "21mCGLd8xWuYojpiEAJMjAWdfFpMJ6AkB4H98zmyKf1zrfr2xMCeKsagx6nwANm9XGdtcNSK7GruapL6B4m1fskP",
  "key19": "65mjU3dFrv7nBQcZgQym8JQXwbRv92VN9YrXteoWdqowd2MALjjM5nBJgLjVJvKLFTG3NYRncw3ZiMDAxQQRdcgk",
  "key20": "37VymN1dtf97JTsXiwM4z7FxRVknxjxZKBFkZ45Zhg45DwxtbqfRpcFe9ZJnDbCZ2c5vjHkhkFDdisNPXzHK91ik",
  "key21": "3HZtACBoAgFb9EeFoNyx6BAfVVg19hPocyoAUovpLc77z4HqCoP3LNSGwKLLH9t2jVWDUsikKNABNGojo7bbY1QX",
  "key22": "61PpaXP3QUPwPzAKwNA8Y5XhuV17zDze9eDYpPnFoA7xV9r3kpSNpYSSmnPz5emnn9UJZknNkJ27NkiQZxgpVZXW",
  "key23": "471fLgKHjR3TA38ePSiy6kL2sp2KYtGx6oS7rQKfU77VtHBjKyHY7B5PKMsNFguCFFKAgvyVcYmLkCZgFGWhLBUr",
  "key24": "3vGUHPm2ZeMSjAyedZWVRz94BeKCiFnPjVNS1RZJ2ACRBmjHCCQKfXRUEKZgTg1dxTCoR2EqS4SKd7hGPZy9rDGP",
  "key25": "2wiGx7bTLYVcnUeFTVi74HM93PBEqgAys1UmwH1h3r16S5ropDh3Usyb1yZdhbbTDsTKUSsvmRKrR1jFNXD3APkp",
  "key26": "5wB56JByVmeH1FXtGhjZhtqMhFEoC4bVj5rAJkgVpQqr4EEHMB7M7L74WmTKAwzqQowAf4YcGcB6ZcJfcvqQx4yh",
  "key27": "2rHioCPyZ27aM8DBEeuiXMZq7dNmRY2UB4hJXgEoRLa6EBbcAawPusA6oLcSwxRbagETWWYQQQgtgUEhJSWWQg9X",
  "key28": "4oLnD4DPHPw7xekKxuNp8AnXpHDeN5yzrzm1XJWWST6Bvrzo8D7d1jLDLyFjeognBBYpnG6T7sAiEgZaFTpX3B7L"
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
