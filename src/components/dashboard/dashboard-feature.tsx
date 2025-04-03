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
    "2UY8ZhcQSZB6s9ir3VFB8TdWLJq8AUpiHSwgAKzR5W5zeudsGstzYApduJc7Wagw8BYJbAkJMEadwLyLjBjERgHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEJtibDL3wm9Mw11JKQD1rDwSKeVwMCpfvPdDEYoi667PcUDHwJ3YdfLSfzhmNbcqKaFJcrD6y6QiKQXpt72n35",
  "key1": "4PGw75RJonuZmKcVVLKQR5VGfYCHvhhVmRXkwLu5kE7z69to116UVxyCqWVbrxLSkEEy6YjT7NYkEvKgzjhozPrW",
  "key2": "4oaVJm15vuwWJ8mncihmX71gAvLT8BmAYd3Y58kfr3p8kFHdHsDTt5Piej9nvhPpV1DxcdKUxt84Br9738rxZA9E",
  "key3": "mPGdVVvK89i9Fjh1Y3qWhAqMdMSNbokBGWgwksYmTCRZp6gioLBwNW4S2s2PYi55g2zZBMwwNej7ARigG9DafGu",
  "key4": "3EWpJ1BN7jboipmRmcwnAJcwMSdqn5aJPuJWBoP8z7BwFAhCahZAvKRVGn87K4SNjpP6GHGhHuFJwcThkzZF7it1",
  "key5": "2kPft8banPKb9vTZX6hJkuT2A6QWqKhnM7V2FVhCWMNnoFLqheXQrrU8sN4EjZC2vB3ndW1Mvpc4TVyXanxkS2GV",
  "key6": "47anGkUmF7zyiqLyT4A26n9juRtHCM8TfhYbzjGE6qkfbpLgRBsjZpgGJ6CzwKWa7XM5XQYoCJpQgWjpAThj2nxj",
  "key7": "44tA9qiWkGASbUBbcT379mPi9h7kgvddzMJiMeigyHNbRx3rMo69F9GGESezGfVSRX8APyaEvta4TndPj9vV7qrD",
  "key8": "4M5Lyy7aoESa2U3yVd7SMwu1Wph5RHBnJQymtR3KSsSScvKjM9nt892L77crVjknPweEy1Ru34i4FZNF3RAQdkVh",
  "key9": "5jT8Q6ucaSXWjgTbKDkH7dJZBX15XEUKPo4V4ot9Zn1NHApbY3waBZUSFnYTHBTrt6aUd17BqdUfxoHfyuYZtmnA",
  "key10": "3qYNj3Pk54xYhWsnk6XVpqg1C97itJv8Cdvh7rkYSJTsLiqtY2nBzdKZPXPZPpzYLWU2D43iiyJWBsvqjHQGy8NC",
  "key11": "2NmuWxY7CuxDKAJcuJ8cWC9DHwjDpxjtjPnRoNTa2AWz8sRKU7ZZNKEiyyyDKoABmaRYw2e3woLgQKmo4VFyV2Nm",
  "key12": "5Cwrb26kTBN4eWYdYCoR6U7XAKKSHVAHKCHvK4r7aysg3afk5ZEX3tZ8cyb3nMHkktJMtiuENYxhbvqwd8xhuxJa",
  "key13": "2qt1i4D8GSHgvLcLsj7WE5PvMHCUPvCB5zHNFBLmSwJsmn4sbXV8difrwff2RzvTVouQDzxh7VSrKKuw5xgmC1Cm",
  "key14": "2nLevRSs3g6fjyzcMDsJDGh7nMkG9z95KmqjYfbYwcyZjRdJYK6TFNJK8YpMaR1si9udjpyx9zzrAAWrP7eDcxQs",
  "key15": "5opmuMxPXLHN9ZA49n9sYPGYGb1aQHAjR4Bt4HBHCTDB8qYbHYZkx82yb8UEhGmVzBs8wV2ojd6w4XRQPCVXnXTX",
  "key16": "3wYrfH5LE41UH77qREo6jE16NC6j8v4J2i7mVWSfGob6e2zxDpdTTSdqpEHQbPm6PwWgSTw9fznH9Ywht5HacCQr",
  "key17": "2zzW3ccjzrmd2nPykLU6i4sfmSxB5hAC7SRMEVadSKV1Vp2fbHASKhZBtTqWjs43TG1h4xW8o3vSRTkyAexHN2U4",
  "key18": "2spNeKBzb2LPnmnNKXUFzwK6C9FvJL9eSbpMn1izmNJb2igxrny3Z3h3Hgb2ae3k5DSasoa8t3kYVhYoZYBsZp54",
  "key19": "4SJKLY5Gnb41myh1QfbwaCsjadHLUs6ifpnqQmMPqgZNGwAQT3WVJn4zgDGMrbo3hw3Vz8urXUAdDuv6hTWnSZuk",
  "key20": "2Fw8FmSyWAU4odb5Dqr68q9cxLQ4cKiw32g5oYVE7ShPNsCpErSc2XE15kx7QUVQy549BjG5wnnrDKZxBa9EZdQW",
  "key21": "7vvswNJkjpWTTBFCAY9m982ybzz6wDikxARLiPMCZDMXcpDewV88PEvzs2La7J6CpZNuVFWvvvBWPJ734Ybyojj",
  "key22": "3GutJgkVqjBPCJzQne1gMxeNksxRW53TxQPF6GY2fygk1tLbn7esw2gM5iYbkSyCizXYPB8zLxZDfmzZYUutnWVX",
  "key23": "626CeVnrSTsAAUUx45mtEyEtVUzKXXam3wwXSMYHQy4mFPUbAFEMLqaqNCeVGXPZWVZFHoEJJwNzJ8dZfefg4vGp",
  "key24": "65RYfQfi1CXnvXC48aWaWWbCqEwjSATsarE1spZ1ZhdF4vgRJqPwpiRdA45Qrwk3jVRwXGU28DPbyPSp41hX81fJ"
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
