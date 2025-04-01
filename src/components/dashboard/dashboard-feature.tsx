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
    "4uo8TxEgTNufjE63zL74ysyhWZioxHAvC9eASfiEMuKPW1754oRVebS4BSpWko48Cuwgio74DatGZN6GGgk8EYn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QR7WMyvSWeEU4RRvHcgazbGRcAPwMXqS4jQvfVE26QKhLKYpfEfB2HwUK1365JFHPybmAEPjjWBMoZLAevnDjzB",
  "key1": "2FA6w3rtTz1EPjxyyg9EtkgQS23bCmcmrm5S3LZtUKQWeXogS4XaNLe6da6dKZwmkLTe7P7q127Q8CgPcXPnVzoZ",
  "key2": "2aXLogMQGYx389NpJaoh8Ys5BoQ2JEwoMvjuzhR9UHyvDWNkEidEZYMENR8diiAS9PA7Yb8pj69v36kGG3yooDDN",
  "key3": "2KFrgNEinFL4A9Mz3NeSWarJXD5UyJkuevCwsLKSaJRFA3kJspws7P3fQhN9PfKCpn9CpU7zoGXc8aXVYdLmzKjp",
  "key4": "mm4XViHiBY8ZDGBwbMs3XMmf3791bf7bt7o7j2bFYkpUaPDoQTYN5Pf6ho6cCG7L4u8zsNDYcL7B5Fqqby3Z3p9",
  "key5": "54UpzBnerc3vBgGpJ7ADFP9Y6GM7CiLnG2awHZ9oohwk8vtjLYWPVKXMEW7eVEoU217xSBpCRhAt2nSPuZAPsC3G",
  "key6": "3srp8C645t9wBqK6peMVpqytyidj2hr1aZ27exmVzixoRTdnnruSEmqjgD6jv5BSuhBpJKVscFXi6nLdV4PyoGzi",
  "key7": "3RuRNW5oQejoEjsPGVfrrroJrQrLShGr186i2TJNtGnnHQ5YXeGG1LShTqBWzBtZNfahJ4bAxe9agazEStQ1D58P",
  "key8": "FSkU6X9S5xth89af612L21LtS3Dy2rE3DVVkZYD5zhGspxN6KnFXUTMcHU8PhEWQ2G7LbmTD8FaiTneVpX37ozi",
  "key9": "4eKTADUkX9EdoSNqES6ACbND2b2M3xgb7dztSfDVR5nCJZ1xxGQHMgNgHWnbAZTept3rVeh5RSD2r1x2ymqdpZwF",
  "key10": "5Z3XnFd5VNagRtVwamcruLofxMHyDJAHh9WPMxx8fF8RKD5u2xAcuK9SSSdtikuELUoErCJwnT81w79MGb933bG1",
  "key11": "5VnuJBm7rKJRnxNMME81BTzrxmRg7nr9hjN6ZqVKGfWSDVuHUKeNXtv6rRUm3LRTYday4GMcchaTjiYsfcWtdLBc",
  "key12": "23V6mFxB6z2b6yt9jkMSF8B18Hv7aC9xEVnhY6i37UJwATwdBwFmXVU4LsAAPXtmmRP9CUHTJfwAhMPmJCMbXkX2",
  "key13": "2jNnp4if4tzK2rhrepfMsxoA5tvgqFdSiLHyRowQaQmfMc2ef1WgijkhcYDVHKMTkQRWVUQmFCiWNsPo25DaqnPp",
  "key14": "25zKzEAe7mNEeqPf1eNuCERmcfRPsDA4kYhMjnhrbgvkEZ63CauQGmJtUSUoYwy6Y2AMJJqTgHyRP8ABPBzo9yEZ",
  "key15": "2uAN2q4uy9u7Qruzd21RDdad2NygSf4SNMQXCFr71HcRifLaQpGPLCKKHWjjkJbdGfb65mV7nrSdCQP2vxvFiFrj",
  "key16": "2scT77TFywGNzZDubbeW9L5ctpUGSAqNQKfwciLgFXCAVJv1jzMe8tZPqJMTLhMPTSthvw3vFqtzeUL8yeX94Gj4",
  "key17": "42kNi9CFQnMcu1XEHQHRjj8J79Tj359g4y7pnsj8Ty6B5vsScfmwKm4M5jSVzGGn68kFyExt37Z4dRCQvtangV3M",
  "key18": "4vFzUv8DgHHaFPCvqngEsqUhJXBt4SZf8HjtJokdgN9XzJafS5YNdKNJbApoq1pmHVvVTWrdypiZVYQGGHbk4LHo",
  "key19": "6ZUCTk8oa8NoKbyty3fF7WLZRRuGwA2iHf4f9jrNgYQT6QjGn1ZsW2zn8hVfUmnbtJxrtMjespnXFUM3WsK4mx8",
  "key20": "42mKTsdQNWniMAbRihhXPbzyqguUT2xxwyfqoiXWggpxr5wYA9ukyYcZn11PqAHv1VpP2QmjdjMLwZcwnMgkKV4t",
  "key21": "5auxYr4GArL9HEY5pgZwMMRGMgX5dCkPwnVRkY7GqAke3kPJPjS7XgVqAFPBq9W9VVocDszg8urxqkULvfh792c3",
  "key22": "2r9P4yXp6uAVBYhW7tH9JTtWqeFBL7C3Kc9wQnZiDrZ66hZ4Zwndo6ZjsSjuhMRJivLA1hWznTxjhqTcw2XBYwHF",
  "key23": "3gwKW5qs8pfCBqtD5UcwRt63pKB8MyJkXgwubkvRCjCLbfU39mQqbFauKXAirjQ7LkbSh5wKDgjcf3axrxfELNvd",
  "key24": "kv8fRJQJFP9NCrSSSmC9peYiwcQqz3Q3g6CW6zSjogVjci8SYc1iLX3HJVQii6HBQpLiR2mCN7ci3VnDMAzYyg6",
  "key25": "5PhBZPE4ZvMSdvKrmXZGTVZEA7hYzaBaniivMGeLgBSKuweWnG9qfbZzgeHrev9nHkzoz1n4rJbC2MkArR3Y1jpS",
  "key26": "3nUpx6XgDrQwhKScbAjbzw2zhDTpz3wskR5jdc47NQqp5iDbmqwKVbtwkBgKavqccoABWGZLyDFiPpcvepAHcHsJ",
  "key27": "2iQjvJtKdNmWoLAFVuFjeQ1aA7dDyCTBQLgSrJ6DGHVt7eUvxXGAUqoJ3X9gEwe9H1pqj76QfiKDcLwG6A2ZAgMh",
  "key28": "41XGi2BnSBj6VazNBmpyBhznQZNLXDJfgye5ptXocC2rtKrKiKcCEqBBm4D3GSwzZN33YfHmDDYa8MN8Pda13xyt",
  "key29": "6tA1D6T6sijgPviRmYrYZ2beQ5b84T7LoG81Sxi4PLPBwp4gUMrV7M4nsnArAZyxG9enQbiwLxP2dhXjjhjYiDJ",
  "key30": "2spJu2PjGp69qMmRjp4DmqZU3KPoYi136NFKyZRJZrvzKwmCQ9Ty7iH3aBi97dv4836oP8o4hfEKZgsWL7eX5dLq",
  "key31": "5FLp7428B2hiwicnMzFbJR9ZjM6KPqKGVCHiDobZ9or6oLVWkNkHgZQnJwQqyrzM79wiVWJAd8qdWf9m3Bw8TrpL",
  "key32": "43mJiQnpKXq9zWWp7pbND9cUpgnUy7qki34apsETZW7HZwHvUEF5U8Nc7bJVMErKFNMsGGZoUXvQJTUej6apVHRw",
  "key33": "4ekdNcC1MAUsQKhHJYJTox7FT3G4F7FaH2pe5bHfmg1GoRB5rnMV6GSUdKTGAMgPeMHbVCFFoqBkFzjSrw4GcPNN",
  "key34": "53yHv1zUW7t6kCXtDdXHxTxkok9Q7zctj84JT1yG4mcDvncqhxWYzLMNLjpFHZSnLqjDecs8nK6biShzMCiiAG8y",
  "key35": "3Rdu7xoTgWzRnanzBLPvxPJpfXcFBNm4oK3Rg33ghyHQjbhjm5vfg4QWgH4bDJRS1Bw7x3UP7ZJ1c7C5RFUY1dkd",
  "key36": "5zebU93fZGcKoTVWZgL48X6tH7Ce8948Abf4PzVdZcuyiZF94W54GtcUz8RLZNQsoEasTXsvY3o985nah5FEKyNF",
  "key37": "95zyQmwog2vwPbNQAisaLCF4JivJp3Rm3bMHLFyk4EVd3ckbnfMC2FYQQ94h82qdnVZVt935fdX8YYpkK6VHib9",
  "key38": "2sQVya24eUrRBmdXsTyGwHPp1FkPHpXLhz4qN1XonUh6NEK96vca5zNHUHycmqR2XuUacu1FKAmLneg95cRawdZr",
  "key39": "4XyJ9DDmQjU9SSAwXTbWdCdbtdUqAiWTWP7MmFcGYfcrDZ8tazzajSMUwhfDcZRApehppVU61FFwf1VNSgjDXV1a",
  "key40": "4cHXkAPYDj7bHR4GWkFCccPatAs2Hec98iD1rbt49shey3sHs8myGe8At2uAWMKDs9f9Zc7wREvimCh4cD8SXyPx",
  "key41": "5GsC3XGd4hF2JQCRRWHin8SEd1oQydk6EZfjTwkZN6XdxJprLbjRx1YWsvnCTPj9cjotb4DghQ7d9QTTMDk4CBDH",
  "key42": "PERKtPocFPYV2Houy7d4SouAwdSHEB1bjCZHy65sAW11XLxVhk9NErBsr7Pq3JGiYJkGejbs7XTJcYUto9q1G6t",
  "key43": "teDubCoLEwWr7u3fCPW85M81sFzNqA3m4RwSRfxXhgKViDMHpSxdbQJ5GE4QaoaMCGDR8Lfs1ZKkcxEytxQa33d",
  "key44": "4c5nnFe5mHKoqnGtGUw9uedAWdJUhYZgFdTvMh1BZxyVEM6zcRgTxRZxByXppaiB6PnAscu9b5xHtox1DZ1N6dxk"
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
