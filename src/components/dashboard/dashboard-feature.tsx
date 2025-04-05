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
    "XYBdz77EBeaE8tdfA3qqFEj8KV8QL8aX6trVXHhDGRWwmHqdLsg4HiZbMhXuLAZAT39SN3HsYEMvVfySFiK7snh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijHdoyZyy3emCfg4zGKPTtqAu25qvNgUZCwsdqzurw5rxN9UYnkig2Hbr8Aic8qmfGi95GBxcD7ityvic6GT22J",
  "key1": "4MMDa3htCBX7Z3wc3naKuwMQuAFYkryPUNQyVKQ2bnLZMD6LfoKV9uFPzFVGAoMSMVF4pMXBTomoLaPqZJ1vYfrm",
  "key2": "3SQc1L3FMyQGPCfNYJDrsVcsHAAiiGHZzuWVjoSAtKB8xX4CL7W8c8i4Em6UhCJhZxotyxVAFhFs8AS14AZTGyt7",
  "key3": "53V7gt4mgQ4prMnX4VR65wn2f1bhPSHbviJ19D7E1He1BBoEtc87ar3b4eJBF7rKE53J2w6V6aARgDqpHi9GrXcQ",
  "key4": "3QzBbmLM3grxkbH3fpVjhmT9do3uRTAzPN8HZRS67FMmsz7cKZe5e7KvTsU9onjd3eM71NsFTzvbS9sZXzNhaZot",
  "key5": "KZdQBNJ8cNSWPGCJSq2j9yM4R3smwy2y8j6E6GT6R92jxYNkbXbczdtdAb7ehYbUrmrYgzH9jm2Q8gqUgujg7gP",
  "key6": "2VqydBNUdH5Qui7qWuMSxvVzAe7ZEHw5JfjAVEonQ3LsPLRkLk3atKiySZgm7mCbN71kdRZC4fueMjz7cvGj6C1a",
  "key7": "4RPJ2188mbWRTobn6awMjpL4tMf964Y3JAX5DhJDNDaJbv6Atv7rr2zJxxdqrxNQuqmCqtWfppa3opGTY28LBWKf",
  "key8": "2Ce4HP1f7em3Xth4WhU9rDNzoR68dErWbxWHyCfQqfcK4EB2Xw1D1HAa8Xr2Q41dGoN9uV4QmYhfop8ZBtcTQA3F",
  "key9": "3a47H4SkCzTWrgzKaCmHqC1piZxvmHaVgDbKXwC2Lrvrqcq92jNpN9dufNurmLGcNtwgy4wNSWTFUqZuC5MozhEg",
  "key10": "5vYVg1BSPsQLFdSZeiw5pDxKsDnH8LP9kHUHjiPWcfPWrzhEmiMQyLq9LW3YVPwNeVnyH8McVbXFy9NFpUudHEfc",
  "key11": "5ATcECX9C7yehzB63kxafxQ78KWnUx1Ggs5XRJS3sjmxDXftjQBVxpn5DUWDBpS5tUmwqPW9CqJXzQNnqwPosNCc",
  "key12": "45GD6fdSNmFYspRFioNJorWvSrQY2RePayGxSukxdiKXdRzKrWAkcy5N8UJgUe34aVaGcnH7CoGS6bf9dimQuzp9",
  "key13": "3hFWQ2u5DrVkGKC1zNHsFyhqPfnST1rh4cuGEYXshiaQBa982LPGrnv2n3x1qqqFPuGbagMNroNNhd7tqFY384Gj",
  "key14": "2KtFzNjZCHfXR3P14fwuJ9Y3ij25knq41hmPS8fh2AaSrM4zUrxa4cbfzBGHm2RKRRxfM2iJtiLkhJ6As7HwTT3j",
  "key15": "3d9ARnD5JnMxXaHHpoDhRAeagLdLNMu72vWvs6PEYCrU1fPThweQcYS7iUWq3t8wmsbifiL1Qc4RBGuBLqdbvWd5",
  "key16": "23DWjPjZZ3LrfP3H44G94kD5VoiCAzj1DfGrvTTiFP1dH5LyDmimgtrzfbn2ZKPGFWP7tcqsJsDdZFDZtTNbPT1Y",
  "key17": "66i33TvSuKTAgur43q8CEE3wurCMWqtpwScvBxMNdnzAvnj6bTHm4UdhNk6TcxoxpVpyq1pn8qQ383ATXwQi5Jw1",
  "key18": "2mcziUPrSAXeJ82RsUv2hmCrso8HfBCm4Ufuk65NXtxksrYDjd8yG4NkwH9GUvTLrEodPJtxHg2nLdsj92QnmTPn",
  "key19": "23BFPufuZHSmbNdt4Nj3RUKwSKkHBYZgpLQdtJexUjUYr5uUnB46rfTrtvSgFn7Cjv6jp2cGCijSHfwJxw2CcXdw",
  "key20": "2X5xe9CjmGX9kknYnm3h1WczhcMELNZcGAie3jDGaiJQjo55Qrxpf6qtcnnEyuEPWMfP5ThEdhBUdycmGZYgyihB",
  "key21": "3ygKeekQt31FjSaV7Y9rrx41Pwprf8M4XXhPuSDwNEKNs6GYJ97iLHXpXBbpi3iHkdSsc9ekGkHYUAQK4wPRWfwo",
  "key22": "5M224YktKduCc6GbAbPdH3HHLMXtTqr9x6k6JegBqBBWmYCYaGJZA9h25DjjjhmbZpx6A7brZCKMr4HCMu4YF3GV",
  "key23": "67F6QbiWPA8bsU9DCj89ekNYLww1aMChmMx8asRM6uS4JVdidzHRUBoWUfegvUn9RbKXSazU3CLBkUJDv8eUKMSj",
  "key24": "3W8vJ4Si4hNGbrCXokgfZZ5whN1H1BpD9x5zUYCjKpKkcDJHbiPJCwoPW6YYaYnuUc7C4vtCxhVzcDcfiXZaPeCy",
  "key25": "2f9Ao87zX8kkS5WCmZgDQzBJkAzkY2APYFoGTtmDRK6t8C4nd8jyY9wVkc6C5kRZyA3HQ35AXRaK8yfcCut8VctJ",
  "key26": "5HBHcriMMD95doCSYgWLM1qT2uQGTGzBrEc8pzLg1SX718Vti4sZL2LByYnrMosdMGcfQiL2KsFUsWAZuFqGzkC5",
  "key27": "64QTgehjPuV5adhMJQMTmL14SGN1jbtbawWYL1xhiak3Rytx3rxfxKsZyRpeU7ZrKEWdKXvj7g1UeKFQHeXWfLCi",
  "key28": "36upa56e9WcGH2UCG9tLFUbfFQ6dHqJvepnSvDhYPocSjECHjWa6NjUNR1kzTmVTN81iBnoQ5KCeVk2zCUKvyG5M",
  "key29": "5P3xcbgKNsoP419UuZ1abtHDvhMtu7poC8Zdq13NWQ9xpjNwX9Dn6MqZxZbpA9moHmYZ35cFGGv1ZyhkH2TTKqXH",
  "key30": "4utiRoHEYgf3hcUjmSiPsuAKbNGDKMfpfgpZJkuRm2vZP9ea2As3tBtv5gr4EzcBddHuKpdozeWMQ8J3k3QQHgZ2",
  "key31": "Lx6DkPirD7j3ntDaZcJR7xEC3AdSQk6NrH3s2DrX1f12uqHjtnDW9f1Xc3uAK8m5ZwwAk5HHmzPYVyFsHttyrg8",
  "key32": "2y9bXUSZaJjEhWwdDCokKt8nKkZr1zuh8RsPZ6XCQ19SzFpg6wrXPnUKVFwpKmapSU1vjboNuJXoXjnDxjjD62Kq",
  "key33": "3AuoECVXPr8Y3cdBVE1QiY7QoF25ugUhYs2qPm1zGqvdEjpb1MJ34f5BPGHQpZrrYWEDbMPSAWmYefYtZPQ8frDL",
  "key34": "5gBgrbZXgezurcDMcMg6jBuQH8VU3AFZQw9Nw4dqACGFzvqfu6ReGwCyyg1ce2DBnYvH1NVznKcWvhZ3Nd4Nfh1f",
  "key35": "41z749uNpTsMbsTuT3vt5kGPiPinDavHkDAY12KjhNmRAS4Z7PYr5R5Q9ijiz5kKxzoooQfUUyFqgeg5y3BwBr2L"
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
