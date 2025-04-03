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
    "3Brf7GYrx7KjYuGqdxtUW3GNa1GF1STfnrb9Dgvs8udB7QShF6dLSmvjrT9fFgnpENHTUVhbkwmUymj6fchAJTdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXvrozgx7NKb7ineNJZGjZF7YX2VyFgKKA47PxiEreEEYD4b952sp8WK9yK1L6S2WYUyyqFnTWcnR3ogqgyWjqA",
  "key1": "4crzUzeQcDbEwzch6ASmL2QbFp5JySLpCqGJmEuKHGUpzgm7xw8sheAGvkZrHiqYGXSR7azXmenN8kGyjPrtavej",
  "key2": "5AyCxeMNaAe1AQacVdkbCYfxxRe28rNCNf2eSk5vBQx8FYm9FmCVFzLof7LUA2QeAGq6nabnf7LPzK9gSVfJHFnu",
  "key3": "26fhfB6ajknKR4qWfeB7rDbHwpABkRMb3NiAfsk654HngkDS1PueULQhqwd8mja4ZbJhcE6LUN2xHmFdnWzQQibS",
  "key4": "4DGjCQ9XaPgooniNFw23tK31MSBt8pQTtroAvMnm6NHgH5JDmDLArCyqTF5jNr1qgy6NfHNhSAHFwELhQe3NhBD4",
  "key5": "2ggsQJ1gZ3jW3tBGCb6BvdbKs1RD8sfeaLzwkZsSwF2A578efjTNNVfYWYCfgv5R7UDkrjZtTm1gF4Y9kjmFTiGD",
  "key6": "2tM55xC3Vw3nYWeNZT7kbydWFQ3ueubMwboPknCv3jowLscZgjJVcc1oHxTqsAddch2fMSGNzU4FrSgKCFN9fTDg",
  "key7": "2tWGLRUF3Dk4EYMUdVx5LwUwnRMzxSZBKE3cdMsoRk1vTENcKLvKHzAqiy7YFioqW1tEmUiAL1ZrPped94287fje",
  "key8": "2f6r29p6BsuefLePGCMVab8Rs8HtueMKSpoRybkhosenoHV5qzJdiQjiiD9P3KksKZApqhBNyiVJQzpsBeiyDk8j",
  "key9": "55Qauv7BmiTzUNdatJBBTLGGgmWoAV5SF1Zq25XMZ9nmiS4nZJUmcGPrLAaJy39Go6V9eHPt2oQj4X3GcrPfyaqV",
  "key10": "2kGaJPmQNR8vo2gwDyhgd9vyLCo1w8UZdaMdompoMuMGpHdbQY5jXhiyFnKpusiWyiVsKuyTikkSy7HjgGH7ATn5",
  "key11": "2q6fGHZ7KQUKTHNyDy8DLFWE25JZvDTd3qHLbPK4kwgJKkX7hhz6zPfQivZTwSjgm4XzmDSRmQhkKdVaSmWg7tMD",
  "key12": "5Nc5KSXxNSXLckmadSUhn4Z6DsLGacYER2z1EEwZZg95b1nSgCKgG5YRsq8NC2G5fhR8R2t1trZ15NN2dtNwRLKS",
  "key13": "2rKV8CPrdyvmFph7zph4cYYt3HMuJuz9gRvHkUFxA9aLy55ZEQuasSWpYs83rN6NCq9P2azdh4SPRDX7NNG1ChsD",
  "key14": "2UVY6a3vvZKfNZA4H7xgXw59ohqvEU7fX6iswrG94mJH49CZhTYs1R5VLcaiKR2NF4tDLhVDt4JkJ2ujhzCxGuyU",
  "key15": "47Tgn7d69xSybLbLPfDiA7xtFNivk7mDSpniA8YXR72UcBid6pAxYaBGbnMAA6tdQ5cda713FUgKLNnzbpvc5EB1",
  "key16": "5JQ3dEKy3TYaZd5Lhp6ZEYfiU6JMqjdQcCWkxJNTQfbd1kHGkUopS7ZDokjiMzsz8MzWZLb3yP7qQvCDgT2LuRQJ",
  "key17": "5pqUpDJVHL8U7dXvMtetPg6FHcvUDX39jrtBWgSTYpGJeHkbJ8n6NK8kRXfnmYuiEmbMGaB1EiR8vWow5p7ESYHd",
  "key18": "31srrePiA8Sf1JuUSRD6h5YJ3XEmXi8axkniTQbXhR7fw7GzqCdKbMKxQER6TTyKqXrEy2Gf64uteXtheCcz2ATf",
  "key19": "672V9d7r5zkoZ4qgN7w5gHH8o9eBcUDf8e9uraEPtwc1ZXTb5ZK72mZohPp6WRrEjo8q88JKcrfPFuwKgKKrDMWG",
  "key20": "63RCPWcg7GF1nTWDJKfq82vdhXWYzbGQehU1UsYxmbALHU5gUnJTsi3bGTyTGxYg2qUuswNW6XqqcJTbY5zst9RE",
  "key21": "3gNqmbBCvJxrUAB8Gwh92F1oBzsqN69sSCrnEXi65gh843kqbYup8FvgWXZnXzXGXYgQmjfxWu6a6ofgDXTPEk2C",
  "key22": "47KgmoTNFuobFZyVarPr8irJi5Px9bcp76vt2U4MNez3hwZAXeQWFQrDih2qDBiqpCQHGJphPZgy7PB4X5AiMwDg",
  "key23": "4T2oncGrvvr8jc6btQZmJ3aVXrVsQbrVrqFBjEFB4aEUF23rQyhrWXNWWB4mR8zmnQF91Ts7g44sJi5uzfoJnd34",
  "key24": "W1puiknWteXJHo1k2XMpjz8L9TRTP2h5C9Prv2YynhubeY38V5GmjfYJR8Msjxa1anC97aDMaSe1WK5cTbViFHb",
  "key25": "3b7sCyAKdMWx6qsDLXJDY4psojXZydcMmkLhJMra44dpo6VHGgtAkhcvtshsRnKN4amG8T17ULzX3E8mnKFzZUiU",
  "key26": "2XFwvLTMCbCKc3im5XW3mPedXXL6YGtvkSWTUcQ3gmCQDmTVMRfEcBa29RYEjtgxZbLVcP5TzuPCMnrWqHxGkvRA",
  "key27": "66xVW9XNgELBxHngrn1He7yFy11jcjaTWnZ7oNbT3fdMkCDsHZCVXg9ytiRTHdahcSR26oi5F1PpnNB6Wcp5LAL",
  "key28": "3dBvSuxqQPcPTudzctXSh96aWgGUaDU3JGePCmEtK6dT7mkPyZzZG44WNT3yPME1RgoLY61nVfhfXJLbcpsveuJ",
  "key29": "a3tyDLPad5RuLi8DXhHLbHvvjvDFXxykkQmpnYWhEDpY5qy3gfo7icMRYK5Z1HFq9k7V8gBdv4w3XJyATzb6iQ6",
  "key30": "2pjmoUeJJiRcRygxJpMLXXQtkSsL3WPu8Cso6f2jBiQbS1TdraJgRM6ixrokjSsBfbzs4umVN5SgzWTZY2rGaGFh",
  "key31": "gbomcvYv787gHWx9RGfSfFbWzKXzJZb7mfLEunwtFzsvSqTzdba3k7sHkPoVssHXiCkTdsS2orFpiaZbX4LoVhj",
  "key32": "33tYsah3koEf8u7LohgXEZHJG4NpsKEgaMWmHbzoDRgtvs9znkwHCLcXGvXz6fya4cAio4BomACbbu86ehqpUEWr"
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
