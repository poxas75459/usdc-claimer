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
    "3JX9zUgjtfaWAKEj9mX5DdEMd6E8bWYgGu79preswMTqFbvKqRKpr245ypEPPzDryWsJCiHsBmvWM7HyEe1WhYWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Gsxd9L1U2WYZdDSP73zfwjrcnjSQ9oCzm11nu6oSyToGqpGFmb6WSdAiySHSMbPBYmWn7CXggSHVXvfVUUCyDE",
  "key1": "2aY7rUT8A31LgvfoY9EVGPEkso9Yqf2zBKvpbewZLYa3ttbkm1zaYQZn6oWCXcMuhQ2JmJhbJRRaQZGmMxEpdosW",
  "key2": "3woGpe1uA5SyiPupNoF6Ufd3Lm71KvcDRCyvWHA7g298HFRSvofhCL6qZXtetzcvYnyA3j5FBqWHSxL7yYh4d5Q9",
  "key3": "48TAeFYqJCydaUKedUoAAHENZVSRc7gkChRL1D8eMGP9WiUn8W6wAdwmtgMXSheSKXhef3s2yMneT178SL3GzDiG",
  "key4": "qTsx7iqjWQJNHvqiscwUCaiac3t3kdLRWaVpXvjZcgBAog9EP7vtWXmb1MvBDB6e9hH5azuSrD7ASS785EPSL45",
  "key5": "2ptnjYwLYeFrskCje4TRS7XLG9ENTJxxQ93FjCKoM4EJ66WASZZG6NiQWP5L7LbEFaUQTKbTTFvtaTFhmNLApQyC",
  "key6": "KWot6YPipoAsyzhwFFziCDv9e6KgdKDZJK9DbAvfEK5dPWLSHPmmb5RHJuESmhYURSt3QZCCbJdyekLh4EV3T4P",
  "key7": "RvdEiLArwUJNaZvT6Mjsm5LDaDo5HXcsaoUsrSii2NTqMJWtLnmi4CXfsohLuVn7KHNknJpv8wpbeqWSN23wsu5",
  "key8": "3yx3pgwdZzzuCE8828jw9tMNn46hsQAENRFQf5dYSCXXYNczpmGWxAN9HVaJaLUn6qqd8QRUBGQRfsE3o1cDPKqq",
  "key9": "2md49CNXEmBmhFWzdKnXkijHWfTp84ksSmnpSpocmKLW2GPYRXFFmcNJsBj6ddwdQSRsFFZ33rskSCfANocC62wt",
  "key10": "63HDp1ZGHiBK3ygd4F34hfFBkqpgHNJkm2pSNFvH6c5vwSZw5JyhRom1myLJQWpb6qTBuSPJTp4JmS7YdEajQ3ht",
  "key11": "22ZsAPigiwjh56XyLXTmSuio2HbaYDfMv1JQDJxch276Uc9z3zaZZCAyu8fG2BgyNXBd68VzV4jNAkCeFN9SrtLY",
  "key12": "2egNQmfbtnpjhVznJr5f5qKjeYYAFryamvwgpKiiomBtzEwvHo7vwjeZbPvc4bwDg6CXAGYDhwTLXeyfWYeqnmv6",
  "key13": "4hpEZs4XMeA2NgA3HFxz3Uv8LJ4gZ7nuT36iaPKjtkkRzeEtdAdiKqpKaeU5MADKuqc8VbPBEoJvtQswTn1Amx9a",
  "key14": "3afHr2i1kxEHHYi5zRVUYvcRqkuYTbRFzKVc7nAzSGLAfzmBmHfyhUpmWi8nEaP6ysCcQfb9tfesiabwe172kr74",
  "key15": "48oVLTfUBYrNdWG9nRK8HpMZK9ZXs4K4J62audRYHhDJ8VbmpLGQfQESZcnhMYXdJkbp3fvjFgrR4Z4hrosxtXNe",
  "key16": "49vqU7Ev1xcdJE3FbsgKA3bqbzHRRCU8Sfn2VkBLvchWDReVbA3G8Y5bdWsL8qxAvbgPuQCbDbth7L1h6izjLcmJ",
  "key17": "4bRnXtRYvHNQbaQHX4pasuW1qbgcQ8fi6AiDagNVWTAKgM97uSuP5dZWWvqfPQYcZShxCy9bkkKnhLrABN6wzDBJ",
  "key18": "4YxyMTXyddv4zCDadPjnBddKpDxTuzcrweyht1yzqJdBWUoUEeAeQjckiVZgo3C3jzGf484Z4gjgLX2HvvmWi7pw",
  "key19": "2HgTH13XGzB1uhWDFEYa9mr2K2cUbr272oYqefdWcZkBRSwn4yEYyyZKhMangQJQLFPXBZF3AVA4SdYhDXzV5XK3",
  "key20": "43rz2i5VvWSQ5vDJ7zQo93tissXND6nttHkjHHZzi5ghosWN13iwtVcEP8CgrAxDrNPYxbnvxjwAR2UuQXtt2Sv9",
  "key21": "4Jo17eaFQSKyvAtRG6wBcVtiyctH49KzojRbWLNwzBAqXgUb12eoK9ciKYWecDQHEmYbb7w52pDAWcbM8TXhd7z7",
  "key22": "3N85PiwPkBuFPJTkSev2sVU83DUqL9eFHSt4d2jgVaPeFoavQD859uYeGdUiXtRACnYC5EVHRyMmxXPduA1No6Ji",
  "key23": "2bfTmeqzaGLRKi7PEbjzyoPM5tRNHf1UGgQLiEhuex6uyXp6yEVrENWGEnfk3z7kgi9EuhazpoFuvyNavWLF1Ept",
  "key24": "2XtZqSAkRTFcG6uXJVB9Cw6PcMZ23EHi74vFEGm6RZu2qk1KfSw7X1bcoEqEEpBP7qWCpSH3m2tiNZTbRW7HieuK",
  "key25": "5x4AMoGc3s2zHXJgEaKnRz8ebb4qdwigmKcbxXsNniLxb568KVxd5FcRzm2XrjUxYqb53BXt1TxdY6YJNxvTH5ze",
  "key26": "3XNEXTiC2MVf5V7GqvT4rw5GyGKjpXxACzeQd7KftggzaYy7MgxkP9UscFefzN6kgfVwxf89WhbRy2MaNrTZncpW",
  "key27": "33tGyAYkXTTGTJ45oRFUSQdrh3UZpb6YeTvzV8uk8afvDn51Vwr62QtfXibLWCS9CebxwhnQesJuAiok6cp5uWP6",
  "key28": "8xguuHbdJFKqvCwQ6xKoujt23Piz8D9mhf9sB9RMkCkoMKjnFeeETg3hvpPK9RdUjbuXwRPKrP4SALmXWWvVcYf",
  "key29": "ioEAsmKe5G2gBwHfHK6cWUVBbkiuixzbaEKV8syrFhobyjs1XnKhT449AzpGnQHuE3T3LWBR5ZR2kDtNRByELry"
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
