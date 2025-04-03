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
    "637KwEQGh71xBrshq2p7wFy1EQ8yscYxm2Uqfc8fFP3WSjV5yTWybSbroP9CQBoDRhtRPuNUa8bhbBNqKbAiVUZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJeoXqjycM7eebzBu3mBqMUWXE1x8AUK3eK8cWCwNonKNUmdA6bfJ8c2kTqUdriqCwT1YVhWPhGyhcPNQ6ht4Dh",
  "key1": "3hVprFXeXrytBJSzz29TtLcU1sP535yFvGZi9UwkjXGFtt8E8LsXgTukhzT3uxURHwm79shHBJfCbwRgyxs6CaYP",
  "key2": "3CrR8dQ8YY4AHfUqzHD2vxFVKun8jYTN1xMrefM3vXfzYcPgNqncH1DJePNhS9dZcpcTKxFxyi9QECJNg7qrb9X8",
  "key3": "5XaDMGWxmS1wgK2rtMyLjEeGZNnvpqV3XoUEEqfVjghgsCctsdk1bobuXNYZpieFM1b2msyxNn4eFtWoAzK9u8M2",
  "key4": "3QbxbVKc6dBSM4rU56iSRrorx6HaMoVk5ocwKJyXxLK1CmrrGXwuWmxQVttw2jcc2G4nB1Vmc1g9VTPwwcUfccEB",
  "key5": "37jjoXifF5aPRk9HizVSG28RejaNAo2ByANxgR2ToCbCWrHm3TjGgNpFcgyqZeoHHwSsoHkx99qxZRstUujKo5QU",
  "key6": "2vkvTuRFGAdqiq5HFRCc32ho4ri7UeuyEwoFU9t8A2N2tFA8tAQU7BMReU6tUwyrMhEDM1vrhLiQJ7wiE7XPA2Hh",
  "key7": "3s7rziAyVieRBTPwk4tXrLMdPAUnRKBQTLC5Ki5VgUADZB9EC1RE4Z3PoSPHt4YixHRdpDBwTTRpNhrii3uXt2jK",
  "key8": "4jJfU8vbkDeUJJ4SnrUjsbw2thah2N4d7ivgp6uimztoyTKB7TN9EHHTo7jA5dPWZja1Csrjbgxpib6H5johDiEz",
  "key9": "CPMhJmRzY5GYTLWjBb7K3qbNEiE4SUUSDzGEbBZdYMApZJgwAbkynUa32jQgfqknSAt8qpt9aw9KzEAKkGNsy32",
  "key10": "4zdj15BagNMuZGWYRAMtfAzeTWAWQprwsWQt1Y6GyMwXrPvWJFU9ERvwMDeH1jM8yjQZJbrfQdGzyvkrsMzuFmsg",
  "key11": "2UV3J5Q8irHUNKmaXDh7yNMfGdESxMM7tSRaebyMxR7tSMwnzNckDLUzcaNU96PqePxumTFVJgfjbTDs239VcrVx",
  "key12": "2tHkoNshRcAsJ7ihvCKAsZviZUm9BqEUF8qVvJfu6V55rGqCQrBPcAuPTZt7633JKd7xDG4N7yuQ5h7qL1uZ5Qfs",
  "key13": "3s5ufTXPfecSHZUZeYoWzEhbMVzVLMCEsfbJEgNp7SwgFGjfG7ssovrNvW9kH8hvGdamFx2PArJDC4Lvx7auw33p",
  "key14": "DnoxJKgt6H7sc1ygvfzKCyni9AYMfXfj6dQLBBitNnoQKiRJXxYhoWm8peNtXp7akVE9xx3i8Mv3QAUTSZb7EcW",
  "key15": "2ng6zpiBuaDepsJzCRFLkZkH1xefeHhPmETbrjQd7kFUYWwTHGkp9niqmRWWmqqfnZ5AEuJzX9qRRBTSZpCRQZWR",
  "key16": "5oGFScNzaAsHmnRP8oyKx5bDoXbos9SVdRunV5DFb4fEbSCKXodVNo92wrtd4Q2kjJaCEjB1BsSf3mV9YkCmYF4y",
  "key17": "5qttqW1XxScUKFf3tHpyxjpnZDYTDwDWDaroyCfUryP7LPjmLuWPjm914epmxHUAewmNqFtoiqvS5pMsc8JxFowB",
  "key18": "5tCcC8ADbhBv9oPErcUQno59cVfN8WW3KnFRBgH78cTuwU64V3w7QVPJW1D93R7TMPUQAPrEKMx7w77vA8Eow394",
  "key19": "wQ9uSPSD2DQjGJLujyZStfyHBgAvHzgMCMSAPzWJXujWitSWs1YgLkaCznnMMLyjrmWff3n6TsXrGGTUKnPr8Ub",
  "key20": "3e1dYexfNiAQpATgDBetABG4isk7x8nRa9KH2PBLiRbR3kWqno1fCu2nMtK9oXH5kU8BnEPwHxE2WFk8QamGvkDQ",
  "key21": "2JczpTconeKC5BmhR4C8iVJSBYvudRyE1aVUri9DZb2Aiw8xiNp2r3PfZhdWG2dLofRsMTi1fxV5LeTUA3gmNwZX",
  "key22": "rddzxYXyyCATXB1kdH3dUBE6UX3ExYBvsP2hgpzF3kb6obmtCsN2JGiNdqgUCciagKFXYQJzfjcnT15ok1qR6nY",
  "key23": "4VHJ3cSoHu7MRH2iRo6RQ6Gg7hGvAK9ibSwfj9t2qTq4xrfYvE5TbZbwes56P6mgw2GiVJBp9WQKJ7TUnUfxw3nS",
  "key24": "2QdvWcxakPuvBUxzXwcfwpmmYeXs2TcztsLQZZ7o6XaPimM2o4gDeudnEcvimzjjsLDUycqf6qsrSVH9veycjFvJ",
  "key25": "2qSwQ6cmpwHVosFip2hsHu5GPTPSBGKzTaqZLj919PhxukGKGWALzWDxMGvTHshui3BCR7sAtVdEy6h2Dd2vAfwZ",
  "key26": "3LD4uxnpxv63dtvkgq8kFVomag4QTi3fwoYksQJ6EixMtHCE3NTg6BUVsS2evwGTfkwT1ifht3nWe3x7sSZauuMt",
  "key27": "2vBojyTbNTpVphrKmeT5nsMHBMqjMh5HkwkDYZ7ExxZcaqDdUQJTgGsvrYp5kq6MRf5erN5WfJC4rBhwGXn2HGhK",
  "key28": "SfssKwtbyzuFYTLdHM3H51saGWxxMRDDdrCMtRY9YJ3mHKg7bAQvcK7yTjMd1rZnin19Z2du7e4TPb1Eq3yaiGz",
  "key29": "2VzHDsF4c4vFvmDsQYL7N3LwBswYgoLnPrcRFynxCvXEG7FuZp7XhzFY43YAMf1YcDrVguKyfeNJHQ1jLLJ2FBx2",
  "key30": "4HNv1susphz1KhKLUAXwJcpdMuw7uyP1nBCMkQ97hMUVcfS7yGcXd221rCLm4koAXo7Z5ShFHsPTs7ArJUwBZFxV",
  "key31": "2P25YMpMSvqwkk7oPQHtZJTJt3PHxdn2mqNqksK2pUKHedoBerhp7UnbwuTK5tWJ37MxAz46YcvegQX5jaA3AwNn",
  "key32": "4v6YbXti8BxZ329vQH5xFG6zqYMdM14wiys3MY1Pac1J6Q8xgnaTWvsBBAijQ9vQgB7wagxV5Ua8vaQ89BDM5Ui6",
  "key33": "4WJL2Dop5rwg18UsoUSqSBa93HyggWwMFfdrBK9AneL6iJ9xzNoqZA8iqAc4kWEhTF5SjuLCJ6cSN64CgU3E77BC"
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
