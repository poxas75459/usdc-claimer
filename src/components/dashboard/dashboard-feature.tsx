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
    "rBsuM2kmq5Ea99k6ePC1jp8uB3AxCkQ92FszqrjSBzrGAePj9QcfTb3bN7XyKo2zmvdM4JpsyTrSNvLgQ4XCCJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGEis1Wey3GoqPxtPzyEmftuutTmGy8PA7tX9EbwKaJ8KEzzUe4g3mnyhqCRDqThst7TCAMocx9XJ8wnVdbjb4e",
  "key1": "4aSqid9E4eAXZT8DkkRkFp49526JhVVSxMYo2W7cYYVqrSiB4ruuRuuzk1qLkr3k8MgRrfDRK5BWVbckrhDkGXgN",
  "key2": "5n6pVp42VNJ6eSRdpRJ7ZHdRyvtuvbj51ZYe7V2yPuXVcTXT3ZRE95xQEfZkCJmrYePtDUJcRFiQnBRrWPNneFes",
  "key3": "4CUnR8uu2vMse35xtFpta4Wu19Uj9teTTLg6geNYwRQwzyjDxtVMa9PHL6NfvTVK1uFtSBrHUJetCBfnGuhHXT2W",
  "key4": "3BKbNs19LCASrL6d4ntPd1fDeCr11somD2FVPNbf9iKy2oSqV7myjbX1as5Fc1JvbcWwN3Ywy8rWAgceVKd7x3mZ",
  "key5": "5wFGEaxYZrnx65rPSehHjWwpLHkdYc4wgwidKx1gSPbTZJwFSGMErMx3iQb4UmXBdaFd26NUW9qhUP33QvmpRPFr",
  "key6": "5mPV8HG6UkAPaoTGikFMLUFYjLKHeShSd4NNRD3h8bakEiZn1C23dRxieayrV5RQNDPGo85bVk2zSBcNzomTCPTi",
  "key7": "UAC7XgQNK7yTvvDKm9S9ktiMh34Y4zoMnAL4YMU1JMMoHta1231S6nVCKHp5QQw4wgi2d6taUEo1CL16ScKmeET",
  "key8": "5DRGkPnA1UE7XYESGTxNDP3jUrtJBTfgrp88bTwhPkzZsMuNoifuu8zBVd4tBHHKkwziuuUnD4Vgh3fzb3QBUGaW",
  "key9": "3aQxQV7riR8j9eB5vNKq4CvvqEpDCKfaCetDARHtZ8WaeheB8tAhJ2C1W26iG7zGLinvFHNhdS6BkKpCphq7hBAv",
  "key10": "2bQfLcPUGqgr2cFMNjrhxBNPgUcvu2hgy62VVLCycpgGmBmWuBMB2BNbrbGURcKdtcnP3Ga2QXXjoxBxw9GCbfbG",
  "key11": "2AxHdc9WPWucPV9EqEzsKXxCJtLdkSLwt9p6KUtR5Wdr6AJJGDZRtt63wz5E3joQdVMCcqrGo5oz4TdDEb41fzMY",
  "key12": "3fEifXuce7owfgDYmGayfhDjPrFF43TtKhKbq3siRjTuvyccGpnRXyqjc5BXop4kcanCZXBx6VPqBejEpVSuxk6X",
  "key13": "5NXrKFzsPnad5qPcjyyKdCsKPrELpu7CnsT1Hp4NN14X4q44CtW2XNcUMMs7Z6PekGpp72D3abHaPUA684gEeQiF",
  "key14": "2UjsU6XU8sAfNRVaNuDNeLbjftTt2EqWC7xTkiSg3TLXtJFpdvom8N1yRamMoMxPQDjiKHYuN8ZutmBfVs4wg4Mx",
  "key15": "4sgEBkBa3runAwTAsewVhcMpbVTmhBXmE2VArc4dXEZk2tCLrj75Nxv5vEvL7gQFewC8vBJV117YoXyEi6unamzp",
  "key16": "4JtyQMXkTTpAxLjNeY6SNUJvBSxf9uLuY2edVGKoHrhxr9UgQZejfQm3HxwQtnbYDsyEp38AoMT63iG5mnEfn4DB",
  "key17": "4hL6ZysmXTSSf7ipVqHeK4bpyThUgcAY87hgCVBrMneFauP4GzNwjCmGLG4c2Kv2XDjHHPArFSWRpR4uzBfY9nFd",
  "key18": "4TytkifiwYZABC4gdDaJDEVWp8ZoDaXMGv2Pg8UnrNUvX9MTdrDLHm24uyKHiEAtTzqdPtixQWAyRdcvQVzyprf6",
  "key19": "5TM2NXXpfVekTs17i5BBPUER3kcqpvwQQJvZgkFzyVGSMLHVgC6pV5c1uZT471XKSNPeYdsbV4tMvq93pQ1uuFXB",
  "key20": "3x8tUwUxatJEB4QG5vk2SVYNiHiGC2i18K1z1XUVrW6C7YSZSsRR8YTTMmc4G153gk49PZCPd8xzjqMvR9gc4bUo",
  "key21": "3mZUsKS68j9oBMMw1tLywy5ZRwdJGzrq1f9dNRAd7tPx9oarr3MXVTkRBV9k15VvvB42wvEHLeZou5DhydCkBn1E",
  "key22": "2mgcYEgy9fp7g4D1Wwkpk5YnFzkyDMVx49PsF6X9zPWdAXwWA8VWx5okg8gBHT6jrbmZvygueZym1hkQ3YgGR36E",
  "key23": "233SD3BAQpn7JbEqZLDd69CiejriZ5i4iK8VnK1dWU5Ri3CydF76xWX5iQ64HVbk62F6au99ehxMpm2Rs19ia8As",
  "key24": "4jRDmk9QB6AuvG214BRnTCUvbCfiWshtKTsTAjpg6tutyGSxgWnGzEMwR42jmA6nA1aHMmRr23Vzj8ubim7yQzBJ",
  "key25": "95f2VnUngP86yZi8uCPpJEbbLqhsMoMRqAT8RyP8PERaristipVjymKTQcpLRLhxmcjKT7NfczzUpfTUXzRM8JG",
  "key26": "44gkCDZh9nsLVjd6qPFoyfXZSk2yDQ2JHpAEC8dQEh4H88FAtTteLKNVZpa6HSUUagS4LgB5fnWZUQbSaCt5ubf",
  "key27": "2caCwBN3TjULmCrKsWaEU1WskWvNXtBxNkWEoB89FWmjbPQC8BLPfJWJdAqH9aWqxaKahKPJM5PCAoYBkESXo2JQ",
  "key28": "zjJVoPf9orraegmhPdWerxsHLpnhqoRrc5Xoir2TBrR4CyCirYAvu8BNMkHCfw79SVxuqk5U2S8CKGSShbLe82A",
  "key29": "ibakdRPnRw3wUGBzjV3YJFv728Q3TpWJk14g4PoBTmkWwR8MQHGd6BQxSJYemamRTQb6gtLLPg62S3JXpedkMMq",
  "key30": "2DwuWXeZvD7wh5SkQcJU9KqLu6UNYrAxY8aEX5J6X6SQEx8qLaoafbjpSbSbQniwztJLqubvdGwQH3mdAMxcZpoQ",
  "key31": "61AJXBchUvmZxGzxNBJVHh48CebYzJ8EkiGrz9auYjtqpGnUmucoZbxAQ7SPM9CyqAKLEg3yuLMJ4s19mzTAeXtZ"
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
