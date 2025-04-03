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
    "66fozMErAysvKKmiLTcFMX8Vfzu4RPYTGfWu6myEbHQMkuaFvUm156KAT2oR9xZGuNQMxqx7oXWrfKqxWb56AXBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4gJftmNFhYLk53MazdMVDovix6HdhxNxAsZY7fJTKKDexNuXXiarrGbyhu8i64vmsxMHXGCghQYXoMgYCZFu9p",
  "key1": "4eTyk63ERdYyw8DAjtadq5PBbokice8Wc9CV2xtDVw56WWf2kVeCgy9VGUqi5Ub5emDUd3roksMQbFYmnQS2XAf3",
  "key2": "4DaFskE4RFVaUTtTRddKZd7qzFQc4hi46frBEoENJdHUewijakrozzdLiR1SAYjxgz21N8Qp5FkMzShLCZb8mBZX",
  "key3": "3C6pmd3kyW3bEu4SUXUEbeyc8jy8Cr6tdZtaCuMfo6TwKC2wSyM5do4NYHBwa3GMKhX9uaWo8NdrUsx5655VTht5",
  "key4": "MSkKiNmQd9ziHaufbVesq5iqh4HVcY9YfmZU4LhWXb4Hgv8jmumbHuBtZjWYGBrpiYxVuUR6jURKNUNWhPWv2KX",
  "key5": "3EzMYzEkvPcHPFLWW3eo5HvyGHZv397NRdTUcQVSU2YRYw7AMr6g43pGYTTWnP69hMiwoHkAVUNA9aMhBs9gjQ3",
  "key6": "CfV4zFwQ48h4cmXJZ2EVEbFtcccURibBFMJBU8VNNP4LgiQ31dzTuUzjLc3xrfN8Z6UJRj3DTKus84KAyrDynPm",
  "key7": "4zr4FZv1qWpxFvn8HURwJGMh6iz5ZxuZPUiD6EwaitBTwVT1MC8XpQ64wHfdPXsgyTCeR2a3Yj5o7xiVZq2YQzYc",
  "key8": "5cyp1wj5JhwEA5Fzf353BCgDJyrNLTcHBZoLidU3MzLKWqB9GNNcB7hXPA23iV5Qz5peQ89ntjAsufY4HGT4Jh7b",
  "key9": "wX66D2jE7TxhMSPwm29jVhBRGWPuzHTriUgGE5XjLvNJnqCucKQzsmMCjUc2qSRhsXMrd1q1WQ6sXQbY4CnrgvN",
  "key10": "5mgFNneBuPWLfhivKTTER9ycgQ1mF1AJE122BjXpwAK7vfXLUn67XP32veqMReUQD1EBAovjgBoKDQX4xWUEixQo",
  "key11": "358mD2DwVW7qoYXbWtRUAZ2bJXfq5vQcVhHME2oLvEUZRYGeVgG6riQsDmyxiANUERkft79ufTs2w13ocgw5tpR3",
  "key12": "zo2NFEyvaQExgAUg22HgWeMo3gyZciDxW9dVbUtTq924asCQuGM5F2SF9t2jG61YqFXje5cnE13bGLT33vHuUBW",
  "key13": "5VYCkb6jCSjz6pgfPzu6njPx8vvfCMUiJ4EZtbFH1RQYjLvoiNEqh97ZA64kX8Yjji1Pu1mtmzfmfjfw11387JJy",
  "key14": "63DQWxWxxgZUJcBi9W9wS8fRqnFtHgz5vJL3BHEHNuLvFwLJhPNZdAo3sc3fNSNGquaEw9uQdSWypuviFT9d4BXa",
  "key15": "2bZVMCWVjazn2oqGTHutyzdP5FcxthXSmdNQnj3tEcFhmZMa2qwtCjTyr3sbUP4b7SvoLrz8rTJMmtx9LyDSDghv",
  "key16": "5kAXv3k2bYxQNpafE4to2d4WtrPzyE5kWvPm3p4J9db4qNidefXKZU2nMAiJQNQ1vLC9VREi1Bzhixtn4Mcm7yek",
  "key17": "3UkvtayaqHM91Ybc1q3dyDxTRAS1AehVnu6efwCCrZ4dsQehUJWiqf1mcr9Ex6NJeVMtXJg61NLiaijTozRtx6xv",
  "key18": "4RUcqK3g5NgH4RfKfSnSCge2reUtzDv4V6jqbVwz6z3RVNmFgEYyBenvz3gKF5peJjezhdTJmLdFZJ81RPTDgeSf",
  "key19": "47ohWmP746FUUMf1JpARfK6HwVubEjsJRPmaMBLGun8RbgSQSHnR34zVCsjNMHdeJ82t8zF3Kcb6u37MGywomxqo",
  "key20": "2t1b7hehtsMgT1TqXo6b6DvRmHKZqQDbZjTzYpBNBgLhVgPE95wF14N5StkxZGQt26odcaRV5fvVrrPFm6oSkRNa",
  "key21": "5sQ6fGTCuBAh4vYcKHtXzrfLoWQkrgrYeSZBccmnKT4tC3ySwuFa1XBVL6wpRbx1ND8PF6xjUursvRrf7MybCxqU",
  "key22": "4TB252LQFyuP87rFk8AsTnZTGWq8PvxbYmk4by2yLN2vmQpRFDFVeJjcJbzLwteJ9a1moXmeunrEDgYBX93zhRsS",
  "key23": "4H88UBro6QKwsBjSWsnieRRNHNy1JNjvLY3ttKEv8nypdJsnazBaJddLehG8BLdkRj4wWxZ4EzSS1B1LVcUHyf3Z",
  "key24": "3yP1dGdXFoNG83Wq1XrjwJqJxYtWfHFzUy5as79YH8Lmsyipm4MPpMavBupYzDCzv23vAzPRcrW1QCBhbfcq7Mf7",
  "key25": "4RRmEPvXo3ms91tfMtsGpVMyvnV7WLFqAJkMfRE8F8oQi8Sxp2FETJpmBtPx8MefBuFfevdAR5m4pBSaKBpg9jwK",
  "key26": "3FtfqA2EUQYZMvQUxyHQGq2NRXeGk35pbgFVpiZx7H54pdPxtC4znAGByFFgJCY8EAJHTdJrTqjeKHLcqEdNYVbk",
  "key27": "3GMPBDoatR91K26iCFH7At4wjnVMk7Ni1VqzmsELkPPENPwbRYu8pcrdxPYw3sg4NxhVaouM9bfXKXWVf8aRqXHy",
  "key28": "tp1dXRbaZPxeqqXvneF4auxfUF9bt7WW4RW6Znpxb8WdSJvcSHnRb6rRA32h3TPp2fSjnuDKGPDrqec4ACHYDQy",
  "key29": "647FGTz3cSourZXgRPwAvCeSNif5kyeaVvrWSRW9ftGwRyGxvfBsGEUmuYSxFEFrZrKbx8WveUGdsxKAgn7BuZrN",
  "key30": "2uj6JjJEbpxyHkCqtEvzDiqvaMNQXn7RpPXafjVWgetmWmyaYgC79hSWT2zo6ZtTcTvVVtWjWBdrJQPjnHTTAwk4",
  "key31": "3QUGSEkPE66usZhoHafi7cVa4pbu64NGcCDXPEnuMeLjYxriuovqwSkwYrD49qHxC1CkZTSQGyk7j1jVY4Ufi7B2",
  "key32": "3WgVQRjvDBZpdjdDLLk2Q49YaBC5mD75RzWwMGMqh8JfrA9fJFDYhGUgW6kYp5KhBCuY45TutGmnpzFchfgcDiCF",
  "key33": "TxeX9LEeaspN1LpbkoPTPYfVwgYNzFoh6oeDE1oKi3EAuo1pBGpD3QxvBJ2D3hspryjkgaoJrG3u8vRVF5PEEyf",
  "key34": "2ZhmdnYk3BCzBbuFcka7kekYkkdN68bzW45P4RUJSfVDjxFEKPmrPg9hExP5oGLZvXAeQnpQuoiaQdrbB7rBRnkj",
  "key35": "6271tG4J94hvuSMmfpfqqDYkx9V6pGZjyf4xF8YrKEeVruAQwjoCF55JGPqH3o4xdbmbMjfxcibpv3KF8dHqHXoK",
  "key36": "5WnT2JFWXp6kiGLRkLPR3656sPKzMnxe6rAMqHcfL1F5h7dHpn47kw61sd2USPWtHekBYQ3mZVXqKbfVF2dBCqDc"
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
