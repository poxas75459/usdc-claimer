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
    "4tSU6eJUHfiA4deZiY5uZYP5Sb73kH2ZMVec3hoLux4JKPo5poV2NP8KeinPSzYAwxnZz5fLSVMQh2FuRFqFTkvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41KhZX5CPKzDib2hRaH7DL4mPQXue1cqdFPZuTZCn6Vqqnq7kDCW1Ys1aFGjB4q2kYZZNjFnS1n6KHsiBfGa8MLE",
  "key1": "36LkDwRqZWiMVy8AFWBBHUrx9KxRfKS1YGshr2YTJ5tSS6Jf8Az7LY3eRK6EhcJdR8t4DaqpeTU9rWDKuSGm11dQ",
  "key2": "2EsmGzX4iBkceXQKFzyXX4DNei1SF15nHDzQVjMxCzeHi3diGVRZzPASjYm1eCJhiyU5rywmrE7stdFg9PYaKFSR",
  "key3": "mLnDjA4iqugjAfdsGFSeed1eLPBXgno3oXAV2FuFFNX4UVCAAaovcNkvPbwzpkJoVjVFDaWWV7F8495KAv1yDYj",
  "key4": "4eBJJCoA7SoG8FA5JDPcgAW2mykcNMtbEdVWT5eRSdf5ZBb5bKS3z41Qe7uLo2paNDJFHHNAqFxfgwJBGKVtY6iL",
  "key5": "4843puNfc35bcXQH6wfDrtud1QAT5nZWV27PwrFcpA7jvHaYuMkhreb58oKaR3h24mPASkkCNUrpa9E6m8QZgZAP",
  "key6": "4YAVAPKq4i9j2d8DzVbrNThRkpyRVbw7X9A5c2FEAcUQfQh9cdJwYtueWkN9GobsDkKJjkeRufkptnkY9bLMkXBc",
  "key7": "5aVdcoUWjJmTvHLq6NajRK9Z8gRsEyDCzVFcWdcc9qNBp1EVfANwnkVDEY3TiTgphRR8sF6xQ3HSsLombaLLRCYF",
  "key8": "6431AuNnuzauU3Vt3ecZTu1FJQ47XBFytKRZuvrLzoGuu3wHcpgDKKVm6nrUd3bp3eXcPK9auVMtGkm9vJCh5JRr",
  "key9": "34UCEQhJQKWHTcWwFC6hoA5CVkXT5aEXSAwPqeHxk5rFuGKAkMEjZUUmSpTqVhBsvCSYkFpTxxm6MvkAqGxaU3W8",
  "key10": "5PCKGNB4i1s6JUAvZuSLKn8Nn3b1CmoShGAn11YGMRXcCCTK9KYS18JdH9L9YZyAfwoY84jLLuRCntVBEYXKr7ca",
  "key11": "3cHejjDkucvFQz89TkJM668oaZW6Ye5wQRhiXhQqbTuDAgm2SCiw5SGJBLzi2x47oVdsHqioQMBabeK2vZcmhz6R",
  "key12": "5UvP32M4DH1feLEBZvdq5A5o3ie2sgXJFvJ4xBJRqePEBm1RP76UvCBYzh8Q69mTdHFpK3wK91N4F4QLZuAfWdLW",
  "key13": "2LkHJrbTEpeUbgzCogsPapzcHaZ68qXd97HWvaomGHgFRVV9tEVrg6VYzYnxZi6x6ELXEWrXaYGVmsrohEAeJnsW",
  "key14": "2QZk5z4RHyheq6nMQbm3kR3mPQ2qkHFFQbgZtoHgsFuquSDDHhTt4YMb6Tp5EoFgGMnJMirxSPrV8dMaX1RPTJFz",
  "key15": "4FhorkrXD8eYeysjewaZxzB2CmBwKNTZLo6QBkZUxf9XeRq5s3Ewz6rtd9vRuUaXoyRNN6XvVFmNQDTZRrzy1KXg",
  "key16": "5xMK16puKvUJJJ3E3Bhjx5h7ZRdBzN5GRLvoDJo5n4vL21soHcKtZG9zyWKrMPKxQZopr2j8qY6CdYeKqdHQpDDx",
  "key17": "3sbuLZSk1wHtnJeGq3ewv3ALpLMmUPj6aeMT7v544T9UCDP4NhjNigDbck7VPNphWKzy26v4HXPEz3XffxZUP2ke",
  "key18": "2XZR4Xy8U6uPKrPdVpid2wVGtBZUvxkDYzTqeG2es2QU8yAwSsNzUf3hw54T4defovhqZjPsgy8YXdPafaCqNtZS",
  "key19": "3adUMDQKZakotW2mFvazy75FcxAF4ePNF9hLJziyfu3XQu51arue6v2a8ToCysT81UT4aSsVBQdhrRGWrrEYbxEd",
  "key20": "MDtSmPXLHc7xrdn8QpA4nq1FNzauDLSSovDPLWf2BqXMBqsLiAmWBxC8UFnkzX3UvZRsdgjEdKnNstLZBKGWDZN",
  "key21": "Jg1YYmgVN26jFTZef1Zwtfhcm6QkhbNMmwHAQmKCXG9TPhAricAxGP4jHRySA1tPwkRf9JjuLCbx9uv7rHJzf5v",
  "key22": "2UGNedJy382Wfb8i5dLXb2RRAAc8Fz5t33XY68u81oQpLtVrMxamfEEFGwzsAe7QzNiZEvUtQHVBedQZ1CKgxXZH",
  "key23": "65gKuX1Py3VcafWowd52V92YUiJ31wxV65ihNGZS9DKAyhmAJkKHaUmBpGcvC7J1U8b6TCn87HtQnJEYy81bTjh5",
  "key24": "5LfgF6MkhGPANxZJoJaXNrdrv311FZdZAijJDozUKg3UXuwtS8CYjoABEDYQpeCMpTBtgEPdbLnMNNCgw5pFCM5R",
  "key25": "5dJ82JhaX3iFSC4JfipdaV6rLmgLNFTvKKLeooqSHeHdqGT8YNEKTPUnBYekrNLFrqJ4uSMtvukudoQe8QBK2XpL",
  "key26": "29j5rVsrtEQ478b55KYQsEXV3VvUioPuLSfcJ7wnKw1yCjoG4eWSAN5BkRj7dxuu8TZ9FvawD5kr3AVDaFjdKqsy"
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
