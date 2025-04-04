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
    "5u6t9LxouBeYdtKRgXBxWYQUNNsqewx1hPo89z8PN8wc7rUVvEzaUC7BYU7mmYRjTyF6XNjVdgBBE91mQbos3Lop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKvidY1sQX4ab9FmU2fNDveUpdQj4jcTUJjutwo3go3mmFo8buTRCJCW2hcjZ57sM4bHcGTkqhTgVBTPzak9Hnc",
  "key1": "5BNyp9tHM8KGaQRK4uj77yEB2SKkbk28DvPHL1TneADhavkoATPuiL72L7GEwz8MNjLQaeAVQ1Wuzs3ZmM3aMQw5",
  "key2": "5umxYLaKpUo4ztZzauvAxm4YWrCYJLxRmyCeiuJHGC1wLPVgdpQnt77uHFJd2j2Gy5dojFEetLjizLKaNgBJ82Ch",
  "key3": "YgvVwf3XM96t4cakGS52qVeEDPktngagHUQ2vR58bSehTjGaaFscminVa8TmdxQgQ8BeThbfRFw5YU1uSGxuV3Q",
  "key4": "4QCvnibJ4dTxNjSKSeYyRZ4PjRfbQigV3nT6gsBUb3AnQ7uV72VPfcCDMuS9mXc6x6D5idVpza49Sb6yBEKgiDWR",
  "key5": "Z9s8FmWRDKSMEBA99yvZj8RVxNQkfbrj4iGe9zrWBhQHBAkmLirqSBsLhBdSvehtdj7uyh6z77qvXV4F62tupGK",
  "key6": "2NgqWMQQfVJVrL9pHEzdEiDXzjzadiVHEZ7LpaGxtHYUrayDKHzpQ5wQHZPMnGBWLh7dkzvqfeNK85ob9SKBJun3",
  "key7": "5cK5VcvHEUcNGuCevaoZqckQdyod5N3je8CPLDogx3k14dMiHUJXN4zjroEZ6qqkihzbqiEhYEHzJcYg7oBFFjoD",
  "key8": "2GmLVNyhwATsLiFvhmP7x2kFGgPbkwg3eMVJ89uH9VA8zfvvcZWdCUBvCJ8vmtkjJUibqfRR4oDa5hAkFaFn7Aeh",
  "key9": "4v7fnbomHHbiAcDHyhTfNirqovvLeEtKvBe3v6XxeihYprgYmRZtjMwKZPUeGzhSoeCnRS497Bmffy1TQBdXUrPw",
  "key10": "2FDonNc1XwgYqiDUQ21MuyuuYuxHkNY8XFD9ByPQG22TjEL82zRbbkxtSFkfDjoKEDpSNK81DRMCE12XXnQ55JsS",
  "key11": "3rxfThehW84dnQHHJf2GtoMDsYcLJfLcFsMDXJeF5nAfnoAaF7vVJdjNiqRmUiFvZHvBfT9AkE4q8AMTQnNNftJt",
  "key12": "5BRU82ixRSnB3REjBFhY1DmiyY4VKzFpAoT5gUDigvAUCzk3AgjH2d19XgrvxSByaEnopWPAxXWY5GMBKq5CpZyK",
  "key13": "58JHcGkzjxtqMUjTozyRKgsGRoJHVkCzuZwAiuxZBbB3vDoDr8usThYBDwsCnrYbhM14jxaK5sJfYRTaMtfM5PwT",
  "key14": "nz65toMGrDARRukaUVzWPcHMucBMCe7hvAiJTDz34PoP7PwmVCfVe6cU9DYHVuRWxZb59uqeVMPnAteGV1YYczh",
  "key15": "4EbAaknLCfygYoKpivwXLFjtJwsCJhXQxqcMsvupFyUPxahdcVLphYk5Cbs7DD73wjd3QgmHZGATxc7sYGgxZyir",
  "key16": "3WawhkpZ9Lnba1qWpZpRkMn3YffDoZr2kgh72Emm19cFDkbGVLbY4xCAzK1QjYZQ38z1ZUXznMqnDTDQjTgjPqp",
  "key17": "9e55fCxaubCLUZYQUhidoCcsi7nnPCLWUkkXAc5uPFMoftdQny3qx9hBftTX9SGpDXb4Gsn38TAfNqDHEi9W4Ha",
  "key18": "4fvtXa2ekVhmfceiUCHnQXUMvGPXRjJxNVVR9GeYk2u4yySNdgSC3SpNrvihFLXGbC5zufP3cthMyUXXze8E7HKg",
  "key19": "4UcjkxQx5C2GKKFrDo1DqXRa7DfK2zNCWbjbm69z7cMxscKHPp5WMbX8pEmGhjTe8FVvZ6KvQYc6kEw87V4qLiwk",
  "key20": "3H3qksdmRkWjPN41x8bDKF5e32aSim2dbukWrtgAyP5ci3aMbZqksPoVMCbDBsAd5HyKubjVVahn5Jm71rdymMmb",
  "key21": "3XX4cRojDgjFAUz94LV3sFpFZwuKQK4XunzJJtCVMWoFrtNrCMGA6rvJWKeivJfu339paBMC225oVy1j1m8fZJ6v",
  "key22": "2fPFa2g86dvRQWFAZJ1XJossDrgzXbUUbHNd7cFDmS7qND5jVtiT3up9R7FEYjntDczKb4LGjrXWrd67ap4h4rF4",
  "key23": "2njdrvgxpcefBYAwfMcjiKrUqa3AYXoVLF9zupURHrNd1kxmC2ZuricfrRKDcrULzCkP4uvfiSmLHwasRpwnT1CE",
  "key24": "7cShc9P7Bka4eRM97AsgUAMtUENt1TQykxBNSCcaGWj8BeCEpENnCVM9RAuP8niMNai3quieMVDi6ktTj4nbXT8",
  "key25": "t4msu4WUpGAYfJsFzBeupi2vSrfRt9b4VwQabkQvx1mVrs8g7CyTfSBTXmC2fbPG4HmXdStcZuVv9t9nbxX3XuC",
  "key26": "3pEBUn9Ci3PADtjfFmvLb9Y3tp9ztKGqwhELogVArWbhReNsCvbz3SyfzWhZSFDaBEjPSWgogkVB1H7xtBSvacUp",
  "key27": "5X4TXhAVPcTLbNigytHkoeaTJQxAqiq8fzooQ1hh5sYgZxUgRKC7sw4R2Fz6oqmZNoL4EckEhnoVxKE7NbfoFBzR",
  "key28": "45wwKVLvTDEcypJCHLmKZ2HcaHBXTDnsZjgGhpZPqBk1JbT4oSmTEVcW3fPRzH9md5jxwXS99dPwhaB2yCxtFmuF",
  "key29": "2EeqqQA3yfu76eJYeDKJAve3z5jXesCT7MDdYRnC63n3UpcYm6828fHiJCcdEksqbnL5EPzsKKttHZtwBs8PFELt",
  "key30": "J9cVcQri3maM9Jssa68uddameH37cDhZam7mJY4yVQd7Lya9SobE9EYcdBRpZecKJtsS51r74aThrCwsW1EpNd3"
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
