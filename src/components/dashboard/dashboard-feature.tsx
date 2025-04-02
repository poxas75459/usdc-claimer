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
    "5JbRDHpdX16qS13hL6GHBkebE1Zqqww1A9myE6U8LUHJMEan7mYHutJjskweffjUic4ffUdNt3dTWr8WZPNerFUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBgixgwLUS2ZNPsNkR9qD726e1bgJsMPHKVwyP4dziKUnELv3UUDDcMSQYopQszrq5bwFymJvtKvqd7qthpNDUu",
  "key1": "3Xc8vPNWnnFU5YzKVMFGzLWcNVs5mfPHs9Uvm1Vdvoj4fiN66ELqvY2shQ1Kydn9aTXYZBCgNTUZKjuhrRmZHdsx",
  "key2": "3MtJzDXELk6N8D1ggtgj2mNTdW81dcAXQ2zPD9bD12F1Lr9w5iZYiAyxCdjyPJck3rik7Cb64vSSrGwFLjBK3h8v",
  "key3": "3nxAwVSq3i1djBVo3dsEKj828euk6RvsakAqbHY4JzTLTsCq8LBmGFjxTtJKzYqmJ4Rh9YeM9ZgpZukr2D6hEdd4",
  "key4": "45zkLNWZS73RJFpUdWuZVg9MrVVCvo18JLX5YUmvojeffpWgGTRgrhU4aqe5aeoSXnXRm2qZDAE8ZeVMdrVY6mYm",
  "key5": "4qngzA2qq7tHK2rqU8kaX86z5JAbV8mGkihEGAkC9p6sMu2GMSPe99NQXkua9bAdzQaC5izQyRt1UMMvbbJVvHup",
  "key6": "2xjVkkW2gHHvvTuLP8wFvJtD1AyDvzivEo1eT81yW6pbRjVxtjGgD4ngsFduxV4bUEy7BhjvUnweRRNqPE3JYdLk",
  "key7": "63rTj7nXZeRjHTiR2UkmpdCHCstLhcZ55fjxgCqRjAHbrFgtPsvsTn7GaM71dsJXHDCD7ysobA5tGcFKpPKyKaqa",
  "key8": "3ZKUyUEUnJ4e5op4vkuHL3Zr2ZjTNE2DKM2pAHXYzyRH6e137TVZnzjdQ1tWWuZpZqXhiGcLtckpaUVhpU9viQsm",
  "key9": "aoUaodVqmZJQHD8e31Pxa9B6Q9VfQwM4zvdwWebNRo9gmZXYMK819bB3osQT31UH8LMtX1C4Aarpp6uxedGp2hF",
  "key10": "CFxcRQNAMqda993DPXAHC1Sh1N1uVRejSs1PGJTvo5UsaRBkwnksjPgHL4XV8hCqLtRmJ2azH6ni2inRQ4TpDD3",
  "key11": "8VGHVVNmXReQu6N2mJSj4RU287d52NaPzhB3hMhzMujaAHTiADNr76o2Xawm4jmUZucg7TqAGEJZSYmzPtEEMp6",
  "key12": "3PzxXsSNxJasQ8pYwNf7tr6AXWfus4ewWRGTWW1YYR7KnrgdC1Lvxi3N8aDdkQwSs1ECa7kLGvMRVrdQ1Yrayjxv",
  "key13": "4Mwqg1LuiTGxEvzRwSGXfsyQ2WY1tgtX8QgnWVndtgowRrJwzEW1ecX65JriRFuKLKkDV6UYNxp6yqWfnKGZj53L",
  "key14": "4izbuc7hg2dChv6md3iMPwRdSB4QCLgq6XhQr7PFBNs1qTiM5LDrXR9BiKdvFMTjLQz5Z1dufTUgCHKaf7D9h99e",
  "key15": "2xJTz7U38e7moNNVP3GL2uDaVfFwmb7VHiuqHiLiieR52Wwqcq44azcGnUu3dn17Cg3yx8GEarXrgW2kbJac6EPq",
  "key16": "2nxTn2L2QDf9zft3dJyDycsCzE11GfY9YHMpjnUh3esdJzravTiop8cwkaH7A7Y28hvTZtoVuiE8zUFu2qkVLcqy",
  "key17": "3VrnZfD9ywVFm5SsZfm5VaHUBCnP2VukQLUgWfaD8QvnXoFhjVpdjgw2mQoNftxhtQYvMoSU4mfzqKs38SweToiY",
  "key18": "4BX4soW3wq6Fsyp23dsNRdnss4VdCHzRwcdt3SoK7QsEkALHs1gu13LEQy1PEGzDGhhTzxSYdjzYJj37bdKzTMvU",
  "key19": "4r2PHyKyWd5hmY62yLN7HCpdf4QkF1wDsKusrc1kDTgdczkB1fSVHjTpNWnEXAwVvtLXZTZps39mwUwE2EcA5vXX",
  "key20": "4EKBwuD1q2nvEH1mHV6kNW8cw4Le7z9EgvkKzq4Nj5uL6c4NTRz3K1FaKdGJNve7QDsPMawJcuBXmhCLFz73zGfZ",
  "key21": "3ev2Nmo1mbLmZ6iohpgpnuNRMeG2PGxpJZd9eGVud8xmi2jqjJURgWSojmWY1eemena6HSqwvJYZnX6dSmHYb6Y2",
  "key22": "R4qKPMeD6QBHeLfzp6PG4cqJrP7bpW1pC8r4s6NqWAacE4kYYbVeechZVjcw4VP6DxZTy1FwLUCfeWoKZJ6ktwU",
  "key23": "23eoYNXns7KbYJWMdnkANb4Esrre4bveAXR88bqHPSC1iqdGnHx3uWbtwvQEYNchC3hD7bF6uUwkEYRiKHcx1cYP",
  "key24": "BXQDbgxEeZoSJUPrPRknXAf1iv24aKiW4yE2jSk8SY2tbD2NKg3C9f9BjdyLFd6TwJaQdX5tXeYqnW8sZ5rRR5k",
  "key25": "GqLn667aB5r2KxW9LbrzUhPPw3M7Rwn5trwTJpmWGRntbRoTvNX95qcYHoyCenAzMxgiKLz1iWbE7gsf1Ci66Gc"
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
