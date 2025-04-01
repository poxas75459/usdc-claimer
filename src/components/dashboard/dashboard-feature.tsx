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
    "3BpjPipPEtVwvKuG98SN2ycM3BeL2PshBbbkG7T2ZmA7SZ5rJ3TcX9xhz1nNydLQFzFAMg6EDeRgr7j57K7zj22N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sbo3Bf5cNrbVrzH8MA1c2X7jQ3PL8XtB1DsfkxyzVRB4EdfLF122SXyuVW55MVwVK3EeZh1dZhThfATV6mESHJZ",
  "key1": "3HY4QtUG16MpkrxkLZqzHKoBpc2Pu5ppyGdC58ZEVbKLiEg8HnRVLr2gFP6WsXFXdFSjufoCxuzpnRmwjpD39YzE",
  "key2": "gobCYDjyn3pUNqDwFj85yFLK5xynrytrWbMzUDpfCiigwAxjXvtqrwpHUTFDgMLK7Zg5qHbTgj9a3DpVendV3d8",
  "key3": "4Bj7RHZ3i4LRiN85L8WGySLcjr1HtUSToAcF9hsfHrYpWpLayBeBtgSHBoAAjDaD3KtTz71gwtHB3ymZhqSCW87Y",
  "key4": "46eWwnLnQRnSpqskNVNy1J5urZtBNaCFgJcjwNUfxXcmYE6kYgEqizSdyTgztZgEjzmqC45dKZDnq4aT59sSmxBF",
  "key5": "2Cvk8duyvxtmV8VaeTZuBN7WvYgUbRdE6iJEQ2N5jGETkHf148gS8LHGYhfXdGNc9XMPdy4nYefuebmUnzrvBTip",
  "key6": "67DMkRdU1EseybmwDL6XhEwXND4chqsm4HvyRN2prSNwqNShfNwVeLh4cbL1nUyuJL2rVDd8SRFhCY7BPE7j1Kir",
  "key7": "3m7k7MjMPof53EXYmT8QAhseUACEHGbTVZybfqy9Fkw1pLZHHCLRZLNhDN4Vvbafn8inZ7UCyNjPyBPdVPqV2tng",
  "key8": "B7iwtthkjmemoTjecvDZLBCFEtuGGV38ksXhZoFCGRzEtQYqDBNPUnHiSEShWhRjKBsQFKzAna3jdBErgZwqMWc",
  "key9": "qCKrArz3fupTDtdWbYYtEJBGTUEL2ZyQHbNQeUtUwx4v2X8GfgNWKiv7yJp19TNb792LCR8U9ByWY4T3fvH1rV6",
  "key10": "2cobhK7a5khWRu8FXtvEV6nvngUhawNNznsWgc944ySA1Vw9THVZgUSw8LvJYLXuUvzDNGVMF985jDiECx4ky4WE",
  "key11": "3Qk3G48FBDM8WsQGn1qE3e7kj2okrhNJ2LMxZd6HCjGvN4GhHaqhxTN6sQW1Pf6eB1SwLomqa2XZ7sLUeb8FUwLm",
  "key12": "53q9XjVwLy98tKA1ezQTWdwHc6AEqYUrDwZVQXs1ack4A1LTkUmSvndhyhjry1uT6vfFcFfg1wdcnXMrs14tAunH",
  "key13": "3A9kfdipqGbxQv3yw4Qpwa5QYY1jaC6cQ2GpMJeWr9Fp4mKCfgw5e12sCrNjBCF4uk6i4okHFH7HLeXUcJDgASB9",
  "key14": "2wXueqtSfWkSbbjNmrSiX2yv2euKcDf7SQEoAwZA2jZYBDgH8xEN6gKGeL1UKHPUnN5xeaaWVTdQKsRzon28kG5",
  "key15": "3rhmEPcWMhZeBE1fY65imxKyT9FwL1s9pV2pgYXjktMKv4YvTBQDVxNcY1XHPv52PbDRd2FLDv9J84HFKwHtnvFi",
  "key16": "35MKStP57eEGesFrtbcXnvLC7825m1VfDdfDXZg6yankaUBosNeuCJB1XXcqi2P8Hw2EQWro6ryYQpN7BhRqUytY",
  "key17": "26nAqTT4UGYmkzSjYFYcE32NRkwmRxctW4wsX3hVkSaTG1tLYLk23TuJjMXcUjz5zKXTDXPyHN6re7nkejyaEm9W",
  "key18": "4be1BvQ7Tt8nPc4qLijGH4bshaVXt2CFkujyLJKiT6gvDWQM2b2Dhh7AwnUhu3U21wXFcgXyJH89v31ZtcoRaZss",
  "key19": "6xH2ENpR44FmcQb2T3AoaTCAwo166uj5aHDhAKj4QzLkTrx7CPZE5JuUAjEwmNLGXTzfokmwVj8wsm4bGi41tHM",
  "key20": "51xb9AXNAQdvMjd5EVt3c4CHGXYf3Chikhh2iN6LeFkv7H9FB7n35VQL5YBk2hZF5Fxw9Ffz5gscy4fkxWtHUHPD",
  "key21": "35pt2XS75sWfHRmCHNNNrbu9FiNMrd38dJ48jXpzuk8LnqQrDjqsigi6wEkrFEUGG8jkpGsSedH115Z3VJQHuFXS",
  "key22": "44kAGAsW3iuj5Y1LiBX3k7X8u5Z4optZhjUZeewnaTwfM9Ra6x5MA54WmTgGC7MrJgB6qMnh89TX4TFoVKHWS3n3",
  "key23": "3RofqDHKShaLKP1w1oseVvz1UHyk3CumsJMu4saEsCkcwf7zaW9F2QWx2KjdV2cUGkwZ5E1EvNbtXG6i2cJaxDJv",
  "key24": "23N7YXbZg8vGEsbQnRptT1Wwg9owSmQqsbX14aMRqLexjn5eD9u81ci8odg4SPvcwDJXtECDYLYGGrczcST7upXx",
  "key25": "4dPC2JpqfL5rmHouto7VoCs1kWVQuNd7Pn5Wret8nGXBjLTAzRBhPsvXrn2az59gnUqqKGiDc2Yts47juVwxfkv5",
  "key26": "aw7gBU2BQsBDuWiFYfLeuAEXnNLDAJKvG8TTx33LDfT45thfAeqTvyj9TxJneeC6MXgFE1MNF1aS314jUnL1jVB",
  "key27": "3YdWvTySh2XehB7m66UHRnni4j5F9T4i5YvyNMqEHqHCCmimzjrtfyfa6zT6moLZxBCgdRFCaZcUnT494Bs1zeaF",
  "key28": "2E3ApwjjZbDvhLeyqifMccWf8DctPQMQxNmkR85NpzXWTxCuTjeCp8kLEYaKjkJKKRqbth4dwMnTgBZ1ccKMxusb"
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
