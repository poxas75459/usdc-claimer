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
    "5C4mUhKx1vcMoQ6qhoREtnywX4RYGZbRb76b8mXUvNxEeg4ViVaKKPRNjA8SziCJPvo5TpX23rTPQJRT1ctPAEMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdfMXM1nucE6REgWpanRH89Foa1J7oUbfEgV8V7hjvsYac8DRmnbRth8rufLyNqANzNQP2uV2s9hSb31PS6c92k",
  "key1": "3ZsZ2bVuGZLderEuokhGyB44axmGkc8yqq1dudGjwfvjuMaQXmUtKaoGDvuNbD8HoHUvinteocM5E4U2pgaXD1Up",
  "key2": "4nRWj63o7xTrMnBGdzdYHYb6mcUTE9Vv3m5rtbs98ejnTJNd5mQfscj5SjSCLPgXiqRAeBNrrgL8e4C3TXSkt8MF",
  "key3": "4e98V1Jh5c3DLki6q1HaupWcLaNbPEwUDNSTc3T5pmScyLaKa1idcNtY3kwYVbrCv4C7hjQaCahz8ctjkVvHEVWq",
  "key4": "3N8cNjK2zH8Wcy4FhDSLnshzT4TQb5ToSRgXiMgJob6rFGcWxKwgqbN87oWNL6vNj9sF4Cu758df2wEdyGWFoFNw",
  "key5": "3GRtbBUf88pFiqxQddfCYsCLrx9hxbKprUfswbMDKX2cscTngPAYLajt86NP3MhsmSWmNu6aGxftfFfGF5coNhgq",
  "key6": "fYPpiuJK2UV77y4BFyvY55C7X8BxaRMqh5xwH6RqZSza1UzJkrqAJKPS5sCRBi2QMNa8PsRB9FGAyUTh3TVYbAt",
  "key7": "5RsadYZu7gEthQ5e4iNPpoUGSzdAqh8y23f5gciwTgxpDCWcApGP6bLSU6AaEixniR1mRYTSUWmpiTQ1QHq4tdqE",
  "key8": "4ubJG7dVdDheTvMmCgACJLibGKa3xUDCX5JajyD3LsXspvdD4YU27mQ9tnvEr3ZA6qPUEZpNt72ypVdhuESVK6oX",
  "key9": "q31tm2wpzMauxztLvFcpeGWAGP3a8Ceg469nc1jGzQJvnxuZEJpwqw9AVYFg1u446HbMkx6SoiwbJreRgsjZHrs",
  "key10": "36vawG85d2t4zANn1yBeLPGd4vdAcaMrNnsxnZZCwYAhHznatTU1pjr1vCm24ELwgxvJmQUNDn9W5ShsWzAiw1Pq",
  "key11": "42bt2w1st9ZYKDqTGEwJSiPWQToH7evdR7XXYcp2GS8Sv6GWG3YZ19yfUFYUyR53sKRc7ivAtyJwRcr5BMAD3d78",
  "key12": "65RNTBcqadsGE317UzoSFHbqg5ZaHwv3Kcbm6fQoeZsKdbGG5CTydUa3LJwckduQNRZQQCYzRCJEqyKUbmeFrMcS",
  "key13": "5EzfiKU4UqMuYRBHxHkCDv9spTQgC825bLWBV4vhKq39YxPLS6EdzwguJySpwGEbXxeidSBdVz55SodNKan3CZHj",
  "key14": "3sDKcmW8BjzufKawTdD7YCajgzwcTsHLZ9gBknUnJswa9DHVx14WeAa4VNsr77TfCvTfgwQUAYYBrX1yeMLruwN5",
  "key15": "5C617bUfy4MCkmYQ2zEWaVvz4rs5Tc84FPpLGRBV4n4nV8rZpU1SPj6cwVEDhALpLiy3YqiHdvqbivjH4xrPzVyt",
  "key16": "3WoDiV9jjYJJ4KkmezzTDUw4jDpFkJZDzL9Gkt61HRCpTityqxTbbUJRb7NgDEZP1rezALo3xWWarUYvmJ5Eowj2",
  "key17": "4DZ4hD24AEkFikzzGp1YJpS3ubi2hfpsuKSPk2YkMNCSCCT38W7Lmyo8nQ35CbAT6rKoL5QewdV3Jj9VgHpBja6U",
  "key18": "4RB82Zr5Dyz65DFeGNYZHXcse65tkQsw7MHn5rVDGsRQPFzPCVjt8N4LQf6Qea7wfW9VWVsbgXe2HLWsUCasAFWX",
  "key19": "4XgZHJi4Tppdj9goL3uzPjEyDv2kKvHXj7PqwvzabteHCY4qLx48v9xrC56kLoFd944bj6GCzxPUWgQxNXzffXEi",
  "key20": "ywXXW7MfDhwjYVp5cGHqGJysvFgRptwtcqrnPeT219F1xetmn1b6iy4x78iLAWup7MvbkongZ45t5cKZpLC396w",
  "key21": "4Yq1cLM1nJ2HEDtjJuRZEHPQVQUwVgbs27dfZhd8YFTd2pUW48cMC5rxdpmna1Sqs3txwUJWNdSebsUA9na3oiGN",
  "key22": "5H7DDog91rnykmxiDFbTKEiHs3qv9DgHVCptow8TEwg8iCeZ8UAHPKYp6ZAsLe6RJM5p2RuUtURG2UzAYJybjNDq",
  "key23": "2Awvc6THdMLCc5ouMx3d3C7MzKF4voTwFgCBJAWMyJ1k7YQXAchgUnDNeQddL4xi6VVj3Rvxq8a1T2DUHEkKf9vV",
  "key24": "4RC1GxCmwSB8zLmY7yQrNhHayUzYaE5Vgufh3FM3E9D8md4FGGzJ6sMbMujFPN9dZ4QjyGa5FnRLHXV1mvmSZB62",
  "key25": "5uvfcqh98h9Cz2y3KofoZbVjKWtWCaJLiSGvPL6VbeLPknMLMPdQA3skwxttpSmLYTBmXTomZqozsJsgjn9jCDTw",
  "key26": "5PwrgMPpe8wdqSEwSAoQd7p7vx8QCVT8TqyzLzUisA1cFueGPtKFSswrGcyvvzAX4SD7RatyunNqX34YTSSQmzKc",
  "key27": "8kGDiQ54QPTGYGzcd7szCmzPYfHkdL6RbwwLuUbGh6TDoRs4SArRPnk7D7LpwRN5CLrjVFcBELEetTPhsvXmUiY",
  "key28": "p1RJ9rbRsVdgKp1p2qvLRBMhWjq1SKwuv97aLrZbEZbXuPuDdiGV2FHhbqeGiZxfvr24nFvF7Nc11vK3sv2ex5r",
  "key29": "8vJj8EVBZAjXbKDZH9CfRQW6CpyzB1CHMkt3zYXNZViPP2BoWgok4vba1AFyvhZnkm9yG33j4xJwuJwo24urVT3",
  "key30": "5fJmEjw6fBwtDW55SKK2WDToRsFoArqr8QAiwwsBqKT6rrmnJoZemtJxoEFRSvZLT9QA88v1zCpGNExS4eVfnHVp",
  "key31": "5dhHBQPGq88jvLyZRUXvC5EW1fekqt6fZAWsZc5mfNWdS5eGFKtXJqayjwipC8KHnCk16BMgQJ9AuXauoSoxFK6L",
  "key32": "2W4MjUndQTUwCjMyaxmJ5twCyBYXKyqxfCwqVHTjny3VyaqwBk2qCebcVy7Js4Ww7q6VaKo3pa5Su4FroZDcLhnk",
  "key33": "v9BvxqWTZVQNWsB7PertcsrneoZWFTLrcKMSCk7sALrq7HtBtUdE7McRnyJQdSVLgcm1KBx9KW1xjTy2cz41WLz",
  "key34": "1rEss8fkMpaAfAWs2UXZN79qubHifyg1bJoLZdS1uUeVh1fdVLybMz7KDv51sFR6ULrXt2u8amdaQ76N8RuZ59g",
  "key35": "5nmgUuDJBVH7L5X5aATC9j7PPd2LCUCuomiUD89evyV5kC3gYb81pyhpZcYusHKikBuhzp5GPbwbE5GCUPvFh65T",
  "key36": "3u3PLLRZbfJBCgf6fVmdPAT9yn5KKXJZrZNEg3stSpTGzTGRa7Q7MorqoqCceHtd8uNMeXmq56Mz74NbK79g1vLN"
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
