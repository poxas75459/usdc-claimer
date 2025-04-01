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
    "2RnXHXysAYsepaeDyoLZzUSEvMCQDYyYp9rG7Stoph8NwLJjJyV2PMeGCCfCWT9YQyCrMJKEPiMkSQ7Zqb1nDHRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8Ztz5LTxabuYJfT8Mcg3E9eUEKq8h4qt1jzfaCSz7qXYSzUrUbtkDC4aKm4dmy4ZeXR6JNc9tA6UXgv6CVebN8",
  "key1": "5JaaCwmXGLh5V4kUiZBhTc5VV8jqcxeHJFVW4KszHZyNJ67D5zhsX4NHNJur9uR1WP1YpqRRdtFTSYP9yU8PAQCy",
  "key2": "2zWE19sTnChPf7aCAKxwLY9Lzf2N9MaCxjBcNRmKb4Q9S6AZXtkZZuFoptR1SuJxX4T2849GcGtLiaBbgrkwsQhK",
  "key3": "2JoVMTDADVs9LdfsAff52Z7PVnmrsofrUTpKp4KjsNp72enZKpwiMRsoTzgkkoB9VbG6s79iC6xAmaRvfKfpso4o",
  "key4": "35XH6fRhFZCCAgZcfmVhuGG16P2czEoePR8tpFRBUcngPhJSDWzx84xY2FwJSV1NybE7Q2oUM7uRLnPpx3Y7LBQg",
  "key5": "LahDL1yxkk2CP6vPpKj1CVTfHqtWQGxnHKx7S8fB37KPKHLo5DCMhuunQ7tX9HAm6e5t9gj5koC8ucJgQZrQkyc",
  "key6": "4CpoRPkzMYnXfT25tbToKzCwAiR94PQSD3QttTr3s1D2VnF7Fr1vbMMykzWamKPbX9V66CQYTFucbouduCJMRjpN",
  "key7": "3tbctUA8sqtW6o1ZYthSP6mWrbsk6wTFbS8HnFPPozDMxU1ePivatFAYm6fVg7ukBQ8wCAx5E8F1wwTs1wjeN4xh",
  "key8": "pSmPZPiSFL8RugbzBJDnsgkQr8ADmDNX8vXWHJpBzqTWu7QoEbMRbwAtiBZkbNMvomRaTeqXxxsHnE3addcUxL3",
  "key9": "3SUdyxD28XpAPV11QGRgvdaehWvw4HQSdWMbJDPL4oo26qGp8bpTSMDSYtEb76BSpxrj4K3ZgXEte5WCGJMx3ivz",
  "key10": "5DSDc85TrZ4TaCZLDHWhF3VGEHQ9Urhf6VA1Pj1VNuagfWLvpsS8AmfqxwKXdjxj5HybHomfRhRUBfYJJxk8PBkS",
  "key11": "52gPsD7oJw1ZVx3idaM8Wr48K7nFKcgCW2yryuK2SUE3KezNJp3KrhxUwRZWVJuAWZDSS8gx8kyqJLwDkpwtKcYM",
  "key12": "3PuRAZJQtLohsQydaTesDj9XeaVNrumad5yfFfd1uBHapm4XqZxpnNpTvFHSdsBBqE7cf6TGrKr2ishPT4Ez6gMC",
  "key13": "3vBtRvqAAEta4csiqFS87jPNgt67NCLf2Z22mKF1Wx9ogMKjdBPTvkhvneNhK2TjHbWXycMkzhBPoDkaLPR5rcaU",
  "key14": "4SdJYSZB3KTvcq1sUPrxcmm3D5FSV15HLYgcnb95dbnDu2f7ohLpsa8CUHh8mDqYBNuQVwiLEmJ53xxohkmbNBo4",
  "key15": "65kyEH8vLr1jQ3xQLpkZXDvkG5ZCWLQaxhSzbxTSahS6Royukjy94WGivNhSdGmY4hPhyPuKbPxMV9s2fseieyg2",
  "key16": "67nXpdshESie7i8zyZ1B7jJnb9aNCMRzDBSQXuctHtDTnPTHxqA9XxxQ2nMRfPvv5KYW3ejNaYjmUdqqQoeG2xDw",
  "key17": "sXBN59ozABw1eTMnwxS1xQw64zBzHStjffk6ujCgNjJ3cZ7cmid15a56MbvNiBRGMohPppZFEHa2XRaL1iKNUhK",
  "key18": "4psvvqquDEvrv3xdjZgkcNRUk6JKPMwypTY3PhFCfvbuki1G1juLzi6uwMjWTBoTwQY4eHfKWLFPMvQRwkv8z3QQ",
  "key19": "5gxd5rwDMLufst8dSQw41XpHLoSdSA4YUD2aUaEdAfp7mk76SjxRo2jPmqfQ65DbzDJMxmQa8gaQ8aS61RDfCd1b",
  "key20": "2GfjG829U6LiQLV7L4fyGGdnfeNoi1UCNzxZib1q7YBrd8ynrmgUiArQCEgTHfBVJGnRsqP1V5PcgYMJKDqeNM5k",
  "key21": "2vCnxASEwcN5TirsFM2mEAuDa2XEQQ4WxeHQZzG1SZ84QS6cqEPdkVEsMxxGmd9gFeT2qqB628Cbv7PSvsErmQ8n",
  "key22": "gfw3g21j5jLtdQiWGxDDvWbQwCqNs59E2JZ2vD56tHGE8c7BAngwxrdaY9TWu7qeZCfAmu2Fj3zv1vtQaxcFA4B",
  "key23": "5xnWQ8Yq5max8RzxcKGSBo4crmV2tiHHY31P9NhrX7tRLZ7ukARM6LGi6J5YEZLXqF5VDukwyZkNLg751sABWkZx",
  "key24": "2FHWc9Q3yHt2q4X8L1FNwsmFDhx8opqGhx2g4tXs1qsjBPCf3ZFuuqtSCAZbX469rLhaugxY7k622Rtd5wYJVLsS",
  "key25": "4mr8oNabNjqXAn1YgTWmvu9oE8ZBL5MC9g4zKc92GMPFTYUqJfLBMiGHXhW2QzZnDfygYEseGBhU1UPWBz8VL3eP",
  "key26": "3AeTrTbJv1afB4uL1XkY8ZbUqgHg6K8zUy2fQuMyKKgrGjzwqKQ5iekGYRZwDv68x8yrn9cFGjGYUiH1RrZHj4di",
  "key27": "3TcU7RJHp5GMMEat5qJo4dTjDcCE4t642W657E1xhMCkR7eBNmb2YJxzvVhfCfihq1L4NJCJgh2U1t5nMPCSLgZ1",
  "key28": "62ADQeNpEcf4KaoC8KdB51xGdUtofiSzP13f76XLmAXAP421KnCfLYLvQtBFbqLj8GQkdHh7hmzaYBvj3B36xkza",
  "key29": "ULpAsc73qZ1SjLgUaxhvKzjDmrnGWhjQgVgczvCbBXgWGPWKGGWptp7oXyZcBBS1KEQ7zGPTzqGV6RydNNZrxsY",
  "key30": "Hd8FTQhwRUFTkF4qUkoryU3GypKd8vWd8nW6cGs5nQXT25c1tQVUTfhhxtnrCJf2PN6b8RvY5D4PeDpYeVSymWa",
  "key31": "Gwx3GUbf15hjuphSRSf23vFav6NhZMKeMSftBwUzfefDGwvzWDZn8ydwCdWCGEksRZMBsPULcA6X6SKNoNeoUkW",
  "key32": "27xVwV5JJNzMTpyboRiDzy2Resa7cbBPedoKyXxn76jPHKwUPFv637i957G8ax7nHb8U6xTSsAyrBGcXTtUfnsVh",
  "key33": "3QvRVb93xhN8tFsZMzVkzLvCQqdgkhqkuBQjgYnUmyM7S2e41CoasGeXBDzUtDv9QgFh8wf5uktxLr2h3vUYdjRd",
  "key34": "2Q3BVV31grvuweqMFgBRorAcvYzq4qnYAXeQAhbbmZqrZ7nV8h9VE3aEJdTQSRHc36KXAwKALFpwcbZhBgbnhNz6",
  "key35": "4qEj3rmfD3meAde2MAV6N36pJBdVATCjdZXWcjJTB36AJaW6gPjgrxpxPnEteZuHpxsTR9mA8xFc5WAKuYWUo6Ai",
  "key36": "4NjULkfpJve3cjrWD14heH2cGBf49etMuH3MEpcsg6QCsqiVmb78vMB3eePh2QNh4jDx6owDTo6fR8kwpzsoUxSU",
  "key37": "5D6B27qrzuqtQUqfWcJH8XQQvUrz5tPD7FURWDNd3XMUG2DVREDRwzPRo6ie7sdazd83EfjoTMbfZZDcG148MUxj",
  "key38": "65FuSmB3s2UUJxJzzPAtKRh8xRG5FCGESY7TuKzUP2B8GHnucGQ19KnKKth9veFDMU6QZDEfpHoBhb5wsDPt29AW",
  "key39": "4ZAKvgD4PCCrSf8pGawFXWrnELDCZTxk5zcevEUaVdYYQtLdigFYi1ZuWJcNyYNH5U9cnMR3VwwMnBEyBYkutRA5"
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
