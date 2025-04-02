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
    "5da9PvnjfyQDytV3aMf4hx5h1EjuFdKK6BfSDStsa1DQhkPtvzeYBtJYsSzS6RTwj3JsuvnBBabd7YnG1sP4F7gT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCWNm2ABGj4VHqCYwZtJS1Xy9CXuy4J3i3i1YmEUbto1ZsDktuc6WAdxy9sWL8cKbrrcW4UJPTV2ZzWPyktEeAR",
  "key1": "Sgq6FVeRpjJc6pZ8r6k9WFUiiAGTnyHrx4U6vmzvVF6T74BMWvYjNLEFwNvjU6JN8LqrfqjpDf1NrDamJaNKrkv",
  "key2": "3c2yYubG4LeUyAFytGPsyrY2oZ5JZMVnbtVCaCbqkJN2jdpnVUEp7etGVXZQ8V6XF51C4MBsd3d4XaneXVHAJHux",
  "key3": "2AUzgY4gNB2d5vM9iSkAYhLoQLnaxtRc8TaKHBXHcHsPjCfnNVfmn6EWFvUYkCgkkXYwqSPsNE6t9sGvf8hLRQ4F",
  "key4": "5nDy5BEmSdbjggGN7T3VWF5wVUGwNX7C5TbX6rYzNnC4U8KochpLzohkRC498RnAWnxwg5jtWd5EoZ1fJMVTpgEg",
  "key5": "3vffvbkLhhBhZpZeMbQno3aTi5fAkWvwUBvwJu3sm3ruuiTu597fXdM397jWBB2K7ZvoUHUz2RkAWNH5VDqmnggf",
  "key6": "3qKmC2qnp7BDGCrAeWmsaca1m8u5AghTgJB2vt27N55UczsVGE1FnCBHtGNCYxUocAAhc9cCtqJE9UwTDyBgQH8k",
  "key7": "3dxKbCkX2aabTaPSmxfWPHDGCgc5uTrkmvxwxKJUthvtEK5RvicvRvqPPBSs837Vj1xvhgToKJvqaoVof7UsgHof",
  "key8": "5bFB9xygPgzabsHsft2W1k4SNUpLpagzGZ71GBdXwdNojcbQUR5DQNsU2brVYsrUcPKHaHxykzVpDR9N23vGJtLy",
  "key9": "57CXyYvkvhfjMgug6t2BavCEVM1CUsAxLo19iSk7P7ZKKyNEtSvrxgw4rTKMjKbciXHNPutZWq6zaADp3KVQHxrf",
  "key10": "36ggZJibsvq5hGG7RSTxVj9CuWnwaovitM1gejQSLvoJ5UyZXe2nCyXwNrzrJPAhufdvxEXg8tAQoThTg81UHkH7",
  "key11": "2hTtHTevLjp51iciaSDBTFEnoNRgUmSrJgWeDAb1SowrNnxkV57B9DoJdfmc2ui5Vs5YevyXRZ8NktYoM61rH8U9",
  "key12": "3p4qSrz1VAq172X9MnPNFEH7MxbpaTjPdp4WKkkMu952L6ytzgPcxFcwpHNLeAxwCHRvmduojzyNdegi2amUkE6K",
  "key13": "45coiyaEzBAWQGzXuo7vPVgJ1eWKRS8MGChSnx1mGFTqcCJbvKXQUKG88gBtfoiZR6kT86i3FuYaYJNiewx4N8US",
  "key14": "US6pVh2Xi6FsdHoaeDQH6z5UXfBfVgNLUmiVvAQ8SKDBZLrMtGoZkqGEeVeKWt9TEjC592jVmdVpALHZrGTg8Zi",
  "key15": "2pJ9U7hxRF4RhKxuCb87AZKX2eL5AdHWg1wYQSDZN7WCDq8kTzv7RpjBmyfiPKLpk1xMhcRf8duR6PAxccAzUaE3",
  "key16": "3Fk6agdU72gxAy7D1xcUipjWwztK5LmjauabxMxwiiEATSs6a44TD2Ydm59LkKJTxVxPSa25Rt2WfaGYWqgBPdG4",
  "key17": "5JVQmSKRb1Bq8zZm5x37TYavm5r1T2WKXNrQqDkW4XdjUTXURGkRD44ZK4uTFJPenryR3fH3f83CZrFBvMTbXfsj",
  "key18": "3SAFD58ZtsoNr5i3h3PWTna58A6Eyrbfiry2vbAdupSXFLP9WemcAKoC3mkZK9G4YTqTbuaK2uUcLL8q2Xo7FJ4t",
  "key19": "2PYvgrpy9RtBLCwcwZ2EDs8AaZyjhPzC8ZPfQypoinXRyonzP7pmxtt31LkJohcCYBjyJooUkdSxjbwFDnHLGRHv",
  "key20": "2ZYLQwX38VgErt6CUJJdit3wPqg9mAEeCWNk9AaVxM955MoQ94Eob5jT9vyWxjup6mrkfaGsf2vHnWMCTHADnFN4",
  "key21": "4wvzZh4MD1j9bJP69m7GCNsjwngTfu44nyH1GbWcXcB4Fg7Tk4viU66FTjC7Y952F9soZRdGMzZjcoSqimhr7vaU",
  "key22": "2d9mPBpRSLRtNaswYSgqFmHxnuZQUzPNXna2czasgkT2ZgWURYmUpXFRJo72k311oQadoqj7Kgpr3UqN73QjMgR6",
  "key23": "5eZgCebaPpsASEjwhfjJALeyEVtnU9YDWa2Cz7SkyeMBNQTUGrU3t77byrejjUrcHEjigRKbpeBeNuxE9UZKFFUP",
  "key24": "3X2S5giqgzZBaLPRfmPDuc6RYHsVwEDUzgeMnZPC5T77tf26YEpLTvJwNa2Z5GUAYTj8Uuhj5b2tFYys579dKPDg",
  "key25": "4DwvVzggh9TmgFVbTHbdh5Ad3aTPmaL53AzJTZc3ka7yrFyMP3Toj19o1XMDnKdfPe5XNXMYxhwADjE7Y2MCPLEe",
  "key26": "2JTQGm2Xqwb8sZsa7zBxYHoArU7rpFumLUyMHxLSteqbKPAs3KdGx18cpQfvRzN6T4f4Aagg5cjHujPwQxFKkpvz",
  "key27": "5kavT6uj4nZH2RXPydyyq3Qag91AiMfX3HMwQevdUZ3oac4sJaKxepqeJQUxdmS2cj7Yfwr8X2VBeKuo3tEKF1LH",
  "key28": "3tZAjzsqCMrGjewci4KSFf1g82eLiZdJqYpm3DaYVyehKMh1LTrUWU4EnmykwPNbG1rtWCVuR8aMnXBsm7Yn6TMx",
  "key29": "4xZYoW7JzM8TSWaKZzNJWWvCtmqk9JVQTnyukJmhAjJzuYGwvF7Hydqg6y8mgyBfW6rxXxUwbGphdRb9jU4h8cBG",
  "key30": "2ppgGecBNxTW2pccsgjsRKNRL4JWS6pdxb3P77ButfXmMcYkhmTyd4qkTVV1Wcw1w5e867jHrsiJf6XWjjJC5eoK",
  "key31": "M2yVZGzBYxsGQUfVSXVq6fZqFoVviCN2sHCM79kd6HBzk5brA3UTxWC9ZfNFDGRKcAwRYgShPQcdsZw3pEmBTed",
  "key32": "dS3hEwiZLnCB9e77iH9HoB5AZY7TPnGeac8ocVqgm1kBzt7ZkFGL3vRqbA8iYdRpaB2YwqyA3e5MGDcEhiih2Kj",
  "key33": "2gHeK9p2inN2v6VdCsCX6mGmMgLLB3h6CF3edZHz7vhQfuy5N7Vkxx6ccXCRkaQWd5wrzrScmovK6iJ4wTUiRcMy",
  "key34": "43BhPDFN9BpXYmxGZkpro2NA653Nj9oxNvKwbkvLpS5zwg2g9YkSzXkACq84B1XiVJjWfg4Wzp31rnk3Gsr6Z74U"
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
