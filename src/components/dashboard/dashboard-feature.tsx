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
    "3QS5CtvDHXXaPXsAa3aT28SGpUB8DEqYHJwxnZUE9qqgPsjL835Yhr2VqzymHbFaUP6LoZRiJjG7FUTmiEYqNptT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2f8Gqe3Md5rj68TnoEvyEjP9m8nKHz7xfcxjtfgUkSfeNTwFijNK4QooQZcMJ5L1DxXg5tyKiEQXqhD6e2zmyT",
  "key1": "3zsmCFi452RGCswKBexgy4cDBbqnCuHjuWG8c2V72fWUBsJQNdVygNfbaFyiCbtuNMK2CmhcP23Nz7Uh8YUdd7GU",
  "key2": "dYj61Cike5pGg6L4u5JbN6yz6w5q3uSFgxcH5sVfMr9oA4BW6svDaDg8w6SzpSPUU4ZEuN3poJRCTMLYNgQ2F1J",
  "key3": "67fDZBucd93TwkXD3HkWP8dzZvr86Ewuj6HZh2aZkAvHvVmrGLewJXaHhZJEDES79Vx7Gg5xsnD4PeUXzZYe7z9L",
  "key4": "5NucbkggFtvGJsk1vpyyrKcNuKiNDh3d3ihF8FSb5HArqSrKNhb6FyCujCmSqZoAFvaGh1frvbQkfAgn6vunQEZj",
  "key5": "3kTMqT2Jv54DQi99c5uGddmNF6dabTKEzfQuSi3HQu3T8NEWzYZ9eA3Sz5CVZEBAggwdRn2fWw7A4n691vrGVi9S",
  "key6": "3uaN3RhF8Cgo67Cb4DKcGADuoa4S6fVS6f6K7YgkuViZcdUvCDtYJNJapRqi6R4XKGfKHCeDEa2MgMAjV7wuN6kd",
  "key7": "2oFuFKvfcLA1nPNuqENAsXWnE7L8TnD3cVDsJbDLWdxxL6wvaoc7DRS3tMPHvfjcEpYzQcavDfPL3CWxUXwkancR",
  "key8": "5WhS62s8vegzr3neAGGfnNrZ739mP5spMKZNYYMR1NRyuKZ9uCM9y9CVepWRnHwCYdGWLHygU2YUaFHgrSSSdZ6z",
  "key9": "5LEvswoKjRzxURH3YTjS7VV4zHekZB4h6koDXhbkv9tfroQRxqrYafpA64SpZ9yrrnvo9aZ5ggZDfsFRzHbcfnaB",
  "key10": "3o6xG6y65J4FnsUvCzpx2GGkLUFAVPecfmZ54q81YjgWRS1xWWQ53jSt2ZticGSx5vMs9MrDGxwYJd3U5NW3XT7r",
  "key11": "4WiLuEjXKdLT4KHMNc3X7An1RYXsgiWRv85VK6YGnYBEPzvSmp9KP9HbF2mSCbYPhbKhJSMZ4cf6M21K9UkHFGcz",
  "key12": "2Sv6mN9qFdorxuAeURBZNuApLfUiU7TRY3WoKpxBZSBvAXrLdALY9RLCVFFtFDDwwFuq2H89C4BM5Trjm9pHH9LM",
  "key13": "4WQf4Q8RWbRjBeeboiFqcH6Nrg87dEdXbNq3cWhPB8pyjZJQDXvzNQjSeDhnqcLRU9RHAbEuxgefLNT3DiqNNHpo",
  "key14": "3XdieUfi1HSNaZgLXDvgPyZuFSGL63n4Q8moL35paZHaPnaL1rTkAPXkFJjSy5Tepe1VU44rM1wtoBpQaqfjZnoz",
  "key15": "mKNfkkozW55X4XFNhCJiSA7Sw3wvW9fvJiHoQuqe7Tx4Qv6cLrmP9pedLiSSLZcyZDRaNcqi6GPEmEKCreSGFCV",
  "key16": "w8w88qi1fzY1cguijceygxRaona6UdEXBRy8jSqGtuTt78AUneVe6GS5BPMVFgrkATWrAwaQzaEjTqB5Bv22VBb",
  "key17": "42fjYnEqdKaFurj9qTnT67ov33mKnudgVAnKpftWf68B1iMTJtpUg9mRaciMDoT6eezhk5PNb9kARt4PCQKK9uQ5",
  "key18": "orrX5ziJZFC11E9En3z97JxEFCJtzJ4QojEPCPnftSiZiyFaSSAnyAz27FGKi221iXxZrdENxigvfBkTpwTtjDs",
  "key19": "5BpPV8ddv4xy88FQkwsQXEBw1WNQExSBKYqMwvUGDGZnTTZQBKAcvpv1Lospepmcj6qvobhKF3MSGaVRU9yqFHRt",
  "key20": "3vhtSGzYAcVaogtSqY11uCyGtHVFtwc8APFZzDRYfP6LPv3RMMadW6hzN1HfdxuNQgzp9hHMCDXREspxrd4xxFCA",
  "key21": "43wMekDgZr8aF2eV7SxyAtE1RZCkZgUYALyPxVTj2Nb5dU22QLKNwj7fr9g2GprLdxfte9i3UuP7yRi985zn7bCc",
  "key22": "QSV4pQL9AJoYFQ6PR3RfAynaUcBfqBWZjNAQu4N5ygMurHKLvYhQEdKqMy4USkNccuuYXdrXJgy8oYQwvhbHqtt",
  "key23": "2G63x1g8Pc8GvR49jQWD2AaZKfMuCrvLzach6pKEPXrkqyvibF12dbXQXNCNymofofLE641dKvLHwdFxnjw4mtEb",
  "key24": "4JYXHTwbV6sniWdZEhH9tGBUgDXUsa9tpAHAh1bpw3ncvNvN5TDdpJASccye67WXXxq94XYUXuwEefeBheX2M9iX",
  "key25": "4MWg594hacGgqGiKGPD5GDvDYKbdxNQaPneEzQ95dfxS6o7VUsUzqrsvsmJdGBqbyzpVSatbN1SBC9PcthdPnc1F",
  "key26": "5CSxae2v76gvzXz9SgoHggxmvei9iTm8iF4aJrxniBJY2HaNi7DJSDjVmUzNi87rhbJLB5LucCG9Amn26PAGr8YK",
  "key27": "1TWe6vtTSqFRjscMVUrx9DpTbjKxcss5psvrgp3VKEK7NSEcNeVq14sg53BREgo8RTyL4bSSt8RVq237CGVGhXb",
  "key28": "2EmjE7SHpEMbd1UYdHef4cphj5A67qkVdeG4WJeRPjUnSdh8svBrdKD3iUwSvKhF31qHWUBtUUM5E57Xb1aZjdyx",
  "key29": "5utZyz5nMQDnsSrDE6CzmDtcDhicjXqECBfwgDMSmGLVj6DPzvtpPqF3kmgXbcwJLU6LFEFrcAGmirE68QoZPHFg",
  "key30": "2oJ9W5MLv8cTTSfXgkMUFsQFDkoTU1YERbVdFbbztryKq3ehH6VZbQKXhYTdjjhpYDCE4PiRYPhMeP1pPdUT5Fzi",
  "key31": "5Ubq43aYekW3yKaDDSea7yPuUhYXK7sZMfZ6F5ZPXABYN2VMN8NW9bvvy9zMNgL7D1uycmCZv1cKEwfjbJNGHWzg",
  "key32": "4pCg7nGHco9Dx4ouusqo3BcPCrec1JmFnfAsvTPkibdhMJQJruaC2Q4fq7E8a6vzHurTnUH3xFudbN3SSQmE1SUe",
  "key33": "3KDUjYziaN9eVoNjpUHFD5KNFLMj4e7wH5ubLX69eCfsUdkgtEu9A5ePLYmhFNbfZZPRxEjthFDDfdBfXf5cpS3k",
  "key34": "2YMGAzaehwJdxiFrUwd9LzvLEagko87duzkZytjCX2tVN7tgoTNP33LKVh2GNDQBMnnGQ8Rtb1nRYkZjp3qVQdRP"
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
