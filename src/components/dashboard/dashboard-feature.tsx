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
    "3FFD5uQY4CJXKfvaBUGHFkVpMUWjQLpyuBUc8YDoWdqhNuzTauEaN631EukXB1xFssfGdvpNLi4gYKigbwGh8Zr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihEdZusU6rns1JpWNMCDVYScTH8uZJFaPwSa6TBvPxdEpxgNANzLByTcHXjpVavAGxwvxqgHCeDoeaxnEaeH8Qw",
  "key1": "4p5i92BSiXfN8KMdE9NBdbjS37ZrwBnMx1BPz2XARvRN8dEuiPhvaF3LxjfuDs14Jyvc6PaT7cm1jP5tEf8WjdJ9",
  "key2": "2CCRdxSqcWdVdVi3DKzjNspTgqBqzK1EMKoJemZ8fCHBMmTW8EHCQDuJgYhQevj4kGAXbMQhSkWRK9w62nj4wiMe",
  "key3": "37rJGzVgyuTbfhZGkLAC6zGqBDGgZvdUSjDf4PnGtbrVoAaS44zBwVEwZg96GyKFPpG5oex9nhhaF7Gvw4V9Fj3p",
  "key4": "2SK2UjThoH4sDmjvqK9EHi5cEJLysEBdpoohLDuHKySPsmLxjC4fLNKrE5znFiwstNSy5RE7YkyUeQgheUfDrC93",
  "key5": "B9AMukmnkRPMzNrULdDe48MtG8pnh3yVcCNKV9t4EVYFd3UT9Ahfi6Zg1nineEnhB86PjVJbaBpbUovbmmaXX5U",
  "key6": "5qXf5xCfcf1XzMpzLcXTHhMwWVCdURkPptyRdwHJxRpmuSHaTU4BNkk9YiMW28Jxhd7zFzrErDXkz38qbq9hx1Zv",
  "key7": "3ByNn8jnieFFKLmVC5rWakv4oXh44jfZwUSaoyDQWZBu75Aa8PQ84uA6F5hpRxvVFHZSMDzLRtJi7h91UJWCVTQ2",
  "key8": "61mhxbqL3FTgnXhmBEMH2qTuM9REvTYQzyySU8RPbiyqJqyjqG5wWbJ1fXPMHQ9uLXFMTUHmbbBPpg8haavsDRVT",
  "key9": "5bPJtnhobEnc5nxWazK2LhsczBq5CJy9f7wDnEsQTfZwZ7RZPsKKGN2z7UyHMtobBCtH5ywJ9s7SUedetBZGjALy",
  "key10": "3e7HfRTVB2bEGFupFUiGwoR7X46gQHZsjDYJDoE1dJai97Wc9TrLMPFhLKd1w8xet5cpJYbKstZHphbrk1yK6vfY",
  "key11": "2i7dxfZByW9SQWL5k5vqrz474BwxxCp75Df8uM2YYzLvwjEUKabi2GnToQkvKWmQR8W1xDbpJ4hV32YMGY4PPfJN",
  "key12": "5Xn9v9ycL2Fney9xvYqbS2BwFocXQQgwFAYHj8bansWdsGCpAPsjGntWqvxLYzZYtkf3ovoFGiHeqwPaSUkAe3WT",
  "key13": "4qTyMzyhRo4RGnfPLQqBx6ho9fFuK8jLerbUgrRSC8K1VWL1Djej4jG2TEwgvXR6qq76AWGoNnDE71YMPaNkNt4d",
  "key14": "5qHAokQZRbN645efv8uU2k7wyiZEe1S6yvd6jgHrdcgzv39LE1xfGVAurBY3wG1gEXxpBG3DCodcJmCf6qHTpTW",
  "key15": "yRLGZCWbrokkVqj4zg3e5bTuWxpWJGtBsMjRQdLeW64uiWP92uR5dG37TXDJqY9utoXohT8A13RfSk5P4GcXMRn",
  "key16": "8FosoPPrhFMA98vZ647yeBUjzwJ6k6xZt7U3orRZd6tTFVRXZVRBqm96rNSiuy4dz9wNtYW7ky41PtwbUDBJ11R",
  "key17": "Vs1x8f3XEzBTkcgHizdixAJ5tTNYyNTXrWXCWvkF4mPMNh8zqC9QG9UnversdN1DU6EDsXdFCtwRMpKKLRQjwhE",
  "key18": "tGdcP6Ds8ei57YpPTpSRDGEeqgvJUmYsbYixGy4p6jtYiD6nv6tAhCvDUX6am3XSECZKn6ksYcnaLs1FrqWZLcq",
  "key19": "3ahjGzyBcGzm2SHn6KURJ7gZonhRioVovg8AtxqBcdxQvHjsLrfhA6QRqicFPz2dpTgRzeYX4r1FEdUz8tuSDa5m",
  "key20": "TetZHnPuT4apqFYtXT56xLpMp9mVxmoYTNRMtEUokPWmKdjiD3qR5qA2UD5CQkS2DqX8do8fLWZ6v42118YfWMK",
  "key21": "5GGc3PNTdt5iwU133fFCMATrKH8Zsk9JwcPYHrXdsZpwSyH8ygMo1bi2dxd8HD29iA1Band7Z58UMvsn9cwRdcAg",
  "key22": "3tkqbGo9qsMD6RKaTmYfetE9rXe5YA7pCpmbYTxWciTu1uvu2S5icYQC2a112GrZcLMVpY5MLikMhpJYFuMVzs3f",
  "key23": "3fmVCaGYvS2xvbBYSvbLfiojB4KLfXC5U1trXp2dq5LPNx62eSNS3FWREnWBvCA5xxr1GegCx8zNoUD8rEPLVXTd",
  "key24": "357eqnCkFpHVC7Zun27QZztwbcjP69n6yjmebB72yzVr9b4r2gqXo9Rk9xgD4mgio9ZhE2zPnjjUR3Y5NPqusuKN",
  "key25": "ydZxEYYG5XdLkr8pFv3a27NkkqicFnTyRkrUafLNaMTNVizWGXxFborKoeWs18zwusJpmdTnSffh4FkAkFtqQep",
  "key26": "nbvjQyizaGidtz5AfXBFEiccNgeyb8fVHs7NSH93E8LJj8YK6jcntDmNpXqPmZAv6W9v5wm4x2TaynHRJYFV9Rz",
  "key27": "4GZpowGvoya9nss71nzanYnUHHMndWJodAtFZFb5zuBYP5dn2Jv6QybG5pzbjrVWwKc7c1rYp8SpDQA3pKU5vBTk",
  "key28": "2M5TGaVQGWdxfGFHiCe3LsxaKsxbcyrDSutZtevLhdS4TYFrUx2cZ75izrcXhyqqPQifMywcTwTCSLr8MPQBS6Vk",
  "key29": "5cWPeH2rtrAFrF1LLoaBhaV2ixZjhLypUKgcrPfyLa9crAm94PYVund9BBZMgYZozGK4xvSAdLYBdDERQ2dF8uNg",
  "key30": "WkuhiLR31H6XwPg9RZpF7RYqTG4kyY7QPPqyy55o3b6QoFU6U574c3z3J1heCfWQTdMT41pMHNXn2wTWZwa3dFi",
  "key31": "2PsEBuSQRn2fx8jUAS7unByheLW4tbzFCtWuhH5gRYQ89P1svFJREw6fecn4A89JoUhrfjvi2Kzc9qJieqgrA7km",
  "key32": "5KHcgQdzrWTtFfah9MNn2ikTGsohi7HbjzqHoDNpUiK4NXenAWBbVKzPEJ3VtdroYqn7GdXDGRHyuDNgmJy1zLb1"
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
