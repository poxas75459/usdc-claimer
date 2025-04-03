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
    "4srWbT9yiF65fNHNU1nA6N36xh3Aeiki2SJ9CNWoaDwMfs1bibrh89v1bbZruxrPJyjctRtacsdAJeKYvJ9enAGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJVyVn9T9JxNKvQY1MQ6jwcfxg3zweQwqzJLEbv3wcw8mMuRcqr7nt8Jy41FUtVNazrDsydn19gJkgZ2JUKSmX",
  "key1": "52G45pLPjBGVk5476dFM1KqEeGmMkR4JdmiDsLfcEQenxVFAUFtFhokXYU2kQFVfQShEecQMqjBZXvsGFHNaniWW",
  "key2": "4Rri6tVJMHS2wT36uqoLJTyuH7SvD4DYM5uYikyJgREXQc3XS8R7cFHiUaB1FGrE3GKGbEs4GTNjJZJR11EEmkiv",
  "key3": "2NZW8KmwFQsb5VHZdQSUdYZv13ppjsvpfj2ZWJvRzrPWwoXXxGjhfSuHT59xpnGRGhr71GqWEm8Gez8TcKFJXRUG",
  "key4": "2WXdbbjdfFX8aL2fcg6w6bWB7G2uz9pRfjNRuEcfWR6co1zr1SPJSQwGkhyAzSHVW8QYeGUfxeP6YNzmheT8s2Ek",
  "key5": "4HBzc3TMQvnpmYMfgYZLd4juysujdkSCc7P8XWUsTsX8LHWvzXYSNGRtGKBhGeb16Eygmk8CPJRSazaLyfXQTu6s",
  "key6": "4NjT2eBn3xH6ftY2j1VAfwEa25xtP6VEpk83nTRnZBVcNWGpLpePkRqDW8SeVGeWqXvRSdx1CwfixPuoqfzKrSE2",
  "key7": "31Mx4H6J6oszGNPnC7asHCjyKdkWhbEbU19kaUq67S28o31wP6LhQTSKCBfsA82hP2P5HeTfkyuBKs7rqxweFM6p",
  "key8": "m55AUajhFE7s7wLQ72ZaZ4pqTmNFAP5jm8vJRiYRDwJun1wBTopcNaVzYax6so7wmbu1ZuSb8BybSCvtNQq9peE",
  "key9": "436XenA3dbisDYCqarArKJZV7wQ6By7c3jZxJnSyeDBhKQrzWyHZmDMNPohtWHGmjg9hrdKGNsYzfJEaL1b2HfCi",
  "key10": "48YsGRHQnGGKuxKrRF6cxejYkZzLhEzsxoVuyQ7VcCPRgpGyKjj1TDT9WMzfFmE9CSLosG2nNu3osXWCkffzNkRa",
  "key11": "66x4txhNFHTn1r67zefm9hknAX8vhM21USZvhGmm722tN4wxkfAhXatuovXfogjEechaR3jxTuaJYma5fmXk8ZzC",
  "key12": "4PcSbtRWL9MB5WhTzxmqHJ2VR3uu9CcuQY35Uic4GZLWkBPVfbGGhL8YX9M7GYtD8GSnPEpSJqeUkRYRLoixg8D5",
  "key13": "hoqDmPrQCwLk9TcmSpgBFsu62SzfdjNpDLgLMaKhZnw4ZtwnDRGiZs6QwhM7wzkeASDaLYQCT1QujhA1FqwUPq7",
  "key14": "4UeKhx8Jeu9bxa7kJKJUciw4vN5z7yC6m1Nm18eBE5G3iJ3SZygidaif1ScL1FVGAL4AKXo6QfyA5mKda5em2B68",
  "key15": "3kdVeysyFNJPBXhBCVj4nZusnNToaU6HN9RFM7b3ojrVHwL4DWCMThs25UK1zrg7SBd5DivXePFeR5e4WL55RkaM",
  "key16": "5xdLkRBZ7LoczKxGV9JcuYNuRyZ7aS31DBdfPqvMWZWqYF6ih3Q6Tge5Ciip5YBJUndQcNiQ5qkHZbbcCgf4vzs",
  "key17": "5FUrWeqKDesMHYUDKHqb8jJd556CGS12sN7gej1rtFbLb6uB4vX8tnKdRBoiDujrwsatyv5NkuQESt6rVg6KDkoV",
  "key18": "2srhFqxPxcG4ubRnARsL5VAA7WoPTSULvAgnSrrPSR2xL82s6ZwK3WHbXGx7ovpPK8GcSi4aQgofFxoGsozpEh3T",
  "key19": "3WpPRYS5oQd5oKU1Fp5dYJpXqFSnayv8fnZV2uBTkxAjpceHSEb6Uvy2oP39Ui5zAD2S5euNzKKaFspMoQiDZXGE",
  "key20": "49Ma3bFYGgrXRynUAYzkRJChFrjFMaUBQA5avxmpM4DNk8SU3yrJ5QFqRnhFSm8R4nqpiKhNJWmcaBAFEBuQz6PT",
  "key21": "3Apq7F6NQx17oEwQg9ajADQf9mTedicrJCFeNnkYHeU2tHaB8Nqfo82czHn1Pt4Bv8UNebVRtPoZZNBbqikvBKUU",
  "key22": "83KtTjqpf4cwhbfcJms9z3KMiJmym5F8tzrKqvnopxy7ZCP6BscfYAVi8WxpUbKD6Yqz4okskR15uLcJUVk9na6",
  "key23": "5FQkMpeeUL6En3ZBiQKDu5usYRAefb6zmJ7tfYpEfFsD9rPavxrNAitwNtSN9FhwgG8eJRCiYLPxMDJ3gU5iRzGK",
  "key24": "3WfZeXwCco5QbQNdRuDTMk4m4QgahNPJ6tqgjb1QsnzWh5BHzJUj8JhviogKeNjsmAbSM2yEqEheneRBz76EuEbw",
  "key25": "4Arx3gqBjwikfMCbsQXDexcRcFjcAFEvC2d3JsDh8ZJ6Wb6fsCSYuY5mTjEWKS8ceFYcRk4nEsLEDqG1u7tSkQ8P",
  "key26": "39Brfv4NxGp6zfVyjobKfQ6J7bzT7DQ1wA3nRwo8oBbgkGiPDeRvDvwpZoNxoUvDp5stvZZuEdbKyPRmUupKdNzc"
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
