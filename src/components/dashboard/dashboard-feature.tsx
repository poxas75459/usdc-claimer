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
    "4aRj8cXAhB3PcU6SJsh7s21SDLQu3VpFVYc7U4FpqPvZHmLfeQTaNZxHnbMKi4LLim7kbSR8JhQK6z8zvsTTvJ8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rRiqi8153qAngip2WT5txJVUFzVw7MpuKxKhQzWTLQF2A69DBUeSsdNFywuDdq1K9UFvhH3fC7KJVT8XKkz64gu",
  "key1": "SHg6NaK5VESrkwJnMEyos6MhH8UsPDUXdfgqvEFH3m86K1mzr251dqwNEXqQdMCRNaNhg4Xnqi3GWgFRS22EMYg",
  "key2": "4EBXESD5cLxVj1PB1WQfnzsr39b5aCJCnWQfUVY6DsWD8dwfr7foPHkUNTyrqgEGy56hALZtDQfPuRbq8D47fQq4",
  "key3": "3Kxk11MFYQQssHAbZfZukFLavPGpcPto6tnhnu5FiiRuvZoiQzS1jkxGY4orUkP5iXKQhRCohxAAMVQSNGTszF5P",
  "key4": "2b93kgn8QP7su7KpC7zuNeRPQfemyrrJAmmgyn5hauPNduPYoTQtk4p2dgr2yk73NyeLfpEPUK5o5K5r5xkrVm5t",
  "key5": "52iJoo6x63PGTP6tPtKNpCjvKpz6FV3rwDkurBqchci5nDjdL8fnbsxd6RBn2FeS5d3aqSEEEm6UFx9GkGvCxJYr",
  "key6": "QEdemQrsYdq8Mxvp5CzNekqNeWA4uxm44Q45P4zap1tVcGetP81Sq9bMpoMkUtepqJuxWrquhNYhevGd15GjUKB",
  "key7": "5PqkgBJc41CxTWktQFvg7BjrbsStRNU4RhuoDTnUkFLaibfmvCvjkwoPHBwNDXefrmbdCRmwAbFV6J2iNsdheAwq",
  "key8": "34cqnKvjJsTxkcAgGVCCoNCPc9t6kvQcGqEV1m8Q8TYpf5KvEeK1j4dB9djp2xjALtQZZh7XBUMnZwXW8WfBeF68",
  "key9": "2znUe2mq44Ac2kzw2rTuwuKSGj1Hdij6RpNcAdpMFyfSY81R4ymXoAN1ydopLfqTdZWgfJSPS53QtBAqi5CkcUh8",
  "key10": "2RhNUeYS7AE7rHSiH6Kc7vtMZDGAprFCxmQUumqtTXs2qhqsFDWMSRPiF6MA4rJLY2tsKDMnjvvmiJsUjTmbQuvz",
  "key11": "AapfaJnG81qjifWP6ek25mJF3BtZZknBzikqJhXpU3mbbTQKSy6fkXJb94EJdNt8UeRnjtCVxbjvuHweFBwL8rD",
  "key12": "euisGEBMgAS2Jq5vKZZxTb7zPF8sR7Z8SKqQrfahtg5Yvpu1gt8VkVsVvrUf6CAg8UsA2hkHBJKU5mwNqTo6DSG",
  "key13": "2BipNYHyEvCM2aV836uf6PpgUx2tLBsLQkDzLKabVCBDBbNh3Xg2h8kthCR6fkbdSchjBiqY6Nm4rJ4o5EBGe94e",
  "key14": "4fwfJJJEePXS1dGAktwKaZzFYoy229V4e15W518yCEkRYf3PrepC5atCLmf75Y1mmucnAGjmhqx6Ltdxqzc2ooZ7",
  "key15": "3XHFcikcUcwybJLi6EEZCei2vnBEdmoh8pNUP4K7DcyTcB4WNFsCmX5WR2A3ucXuEe3c7B9EacyAcAbDPwhb9hrc",
  "key16": "346dBeZEkXAu1MoUVNCHAyN4cFhuS2NV4f3Q6kxqzybp1NZuJgwLUmHbaSTAr22ENpz2E7BJSf41S6kwa525hETR",
  "key17": "2E6zuhvxSAwJHr34CVSrPhaLf4xbKBi3y2gofMBnGBUnYsgnZii8eBKgp3wTzN7cNf1QpJgBBoXxsbTQde32dfXL",
  "key18": "3SYv4t3QtS9XwaRhyyR1hyP25jvCwNf3NE3bENcTYBGHpJ5DVFMHPN1ncCsf7zMbzVdVrSR6EqfELeMwWb54aUQM",
  "key19": "2BvFRkWe71c6XnH5CA53KmxSyrV3r3qL9v2a8Wob8NHdzbHKUygjVm3w3sXUZWcMtcfXgdGp2QuzfnEhd7zSnTM3",
  "key20": "2bruvGd86CX2d59GGp4UdwPASSohBgG5DdB7WpdeQYKV7VZ9wtQ2RdsFFc6H31JUyRK7Py4ExjTMnCaftHJ6CXK6",
  "key21": "5MjAnzL4fBufu154UMKdHXACEWWuJe8XkAioeAfFj9v3pY3eJfDhzgmjd52ovLc6i1GoHsusx7rj7VXCuv1Sq8TR",
  "key22": "4XG6X9osxHXEgR7uwmy278Nz91a5FKdrgY6icEL85evxKrkLQCdzLLBEZf9CMpzq7k5jEMQKkWoPzUq6CJfKiFwb",
  "key23": "5BTgSd4zNVnzRA72ajM7jbDikntwtroY5Yd4b7iioiUYFL3CQepji1Ht7NUxdZGNPR1cQwmR4sCsyAo5LozLV8nH",
  "key24": "2QaAYHBAR1LBCUNYVXLbrRm1k72BsvVhWzrgaG1f99j4u4EySC1tcxuKfGLspC9sGFrx3MiQzUPmYo3a7y7CdeE9",
  "key25": "2nPDd3MZBoWtEmqxoussn6uJEpHsypVAUpjbkktNAxWHAkH544yJNE4cbLk67tRKqTjDmGtEXeDEM3y7rJXU4wgB",
  "key26": "WSZdf7Pje3kjssr6NGzV59iqikaZbx9y41s51fvm261Ci6HgQdb67CfqE4wrCLeggJgMi4eq3uoyM5QxAi8Bd95",
  "key27": "5rsMkEPdS7eA4ELLbLdsT2GwjAab7b9mkMgVECspFUjPPaGpHR1d3mjweRhwp1eVDsJhsFv8frERZqhBbfVLxSuD",
  "key28": "4DXRQsAsvNmEkERf8qwpynT6BevngZCshRe3kopFaEPfh2JA4SDmvFcziaHhYH67CfYPkV8Tum43YrP9EmxYid3B",
  "key29": "CN198tEgAiKJdHVFpyFSNDUnXWyrYUitSF81M55PVvHb4cBKSWAMMsJwaoaWxvSTaQVSobXmA6PXVYCyGJHgFvD",
  "key30": "3TCckopKGki5Dmfwu5xRmB7nDTedWvoUubYeNDdN9Wp7yBWiA9xXPvPByFVHxRVJjJfwmRa8N8pWm66KRKuswq2t",
  "key31": "4uAuhUYeTTPsbL9hchorcgx7MkPch5ANAC52yjRHkpgHmhqJ5aymSjYRSMqRtFN99r84t16kRnu33EZoNi2nQkp7",
  "key32": "24UvH5syYsextYw9aa43kAEVT7jxzfGtuyoXSx74YAYXgyAaBn5RBwAdK79cTLAbLLaDzxcEba49RP1LQBRV9Ktg",
  "key33": "4rTdsDQSjX3ytXHDrRH6JhXj25vDzXbcZHGT1uVmuzf1SujLjGSPZoVZNrP9qmeQyBc3bagvgULXpjDJyi1j9YrW",
  "key34": "551S7cSAk4bKSUhxN44GiaqXJUuthpe2dsehrf3LAzorTUaz6iZb1Kra2XcwEVMRGgiZqsNgbYzE4Tzzr75BtoHS",
  "key35": "5UN64vp7KeWkAbsXwMzH5fqL3Sbp2ZNWSunoqgH7WmbSv5mhwwfCQqv6XyZswwe13aqgANBjAnqDjkfXZtAuMw6o",
  "key36": "41cwXmmws3TAEf3oYZyUXM4KtnYEhQcpdMBmVQB6Gnb1jUr3nJKXJKB36h8PzNL1otFUwscG73v4bHRKHuFdf4pm"
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
