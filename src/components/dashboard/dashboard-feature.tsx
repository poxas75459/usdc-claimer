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
    "5BLXn2puWL2kgNVroWMZCtBcnh9VDXb4aXWHy7QFQ5BxtTdoknUZ9Af9Au5tzFsz2CsAgN4qvwyUHrdNiZEsj6Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zodpiZMthpRvVJGYuAk5T7K448oD5D3HHEM4L2VC5my1WK5M4ZKQ6u6fzpSBA11ZZHrGkUT3EhtmSwhvANrVDhN",
  "key1": "4mVT5wi1cr7WbReJYdaoJaK2GD8saGLduKFtWkWg6rNjVgLha6BrtsCrmEU9HKRP4BDKyuAugb2gDg9TGGzHcDtC",
  "key2": "SdWFaxdjrHBFGKmTFy3VUfYbtcEafCM8nQJUGtZ4wQWSU9wyAXU8oMsf9cFqV3atLSyGz1ErDnDtsFDDEjGXjiN",
  "key3": "57Wx1YhDPQ78MvzzQGbSDuZRAEaex1y3tZhpgw2fib8kqySurXt2qy144oE3Qno98Xk7MHXhyJPb3sD5ZUjW8HHK",
  "key4": "25kFvTSGGrGuHDDBnLvHBEADrpWbNUDXFwVbMTtKmrECJcJxpPv7vTdM6oQG1ZTS5BvRS7MaRghZMrLemaB8XGTg",
  "key5": "4VNbQnsxva1BLvK9EtSurcVhi7ZKL9Gf8ii3FysDv4zGzuokgGp2dgnDKAJ1mJVBQfcRstkLYo7NnSqrErpAAqPS",
  "key6": "5S9HQ4KjjqBYCF2pWFv91kvPFRJcjgs1XtkuXGYsjuQzf6737pguScTGU9vYER83nuLRvxjTRwmZTqjuJCsUMij",
  "key7": "2UV8VYkjGTJd8YYqNzVYRQhC8oaUPe43JurT1gEyicqxGS6B8G4z8HnX7mQzPBZyafWGK7omGmXdsvT9g2vjqEMx",
  "key8": "2YVKqPmryCHW7CK4jaaJ3aopamXfnLixDLfSJ8eHXLeGnjUpxoKxSpor9hkjceyG6BF1NwCCV8XNo9rcCjthjnXg",
  "key9": "2Wm9yd42QPXa62KgubLn1n3bT55R9hnqZXATpLiH1gNerhNMBNfy8zTNtYcvSxu3fzNf4TGBZqjXnbrBnGNKzCRN",
  "key10": "ufippUtSrerBgywZwewsP42vjzNXB9wvATpyKwAiVQ8XEyhdmDZbdr76CULdFwmFc8FUD5x3E2upeZGufn3rW5b",
  "key11": "2vutppjLxyx2Abjv6Wh23AMMfQ35eS3tBGbrwT5FFzNLRVhgXqkup18eFmrJjaskc5cBGFrGappwwCRWaGfhrqVn",
  "key12": "5PpxoqAvUhJYKZUozMVqsDcMXtPijPboUs7i39PZvXwVTq77bLp8Yf6k7Jgv8qNKdTesRryrenvkGwXQczRuhUDG",
  "key13": "4oejwumYD7pxtq4VFqeAkKBSa5PkwKzL6yyfudF3HZfN3aB54y6Swk7EniyzYr8ncVVUZfioQaDYZWCUpzFvfV54",
  "key14": "5g7Jd4zaz17nHE4TWJnk1gm5FF1nCAXUrQF1L3vF1VF6cS2q1pHxrRzUBAghQF9678P1oVPaKAksy3gNenEYHEod",
  "key15": "2EyMv57WSLPzQ8uihcPmiS61iyTUgL7XzNqusb72gGxeyoxA6AsbyeMx5p8N4xTKXJwm9XmfMxvjJnyxWkbZcSsH",
  "key16": "4ECoChJnsrBp7CJYaAitdWFCNDmY4QdKDH4uk36KSe6ow8zDS8AEVktvKnU5uqTW57DMaXrxeuMdGstbTKpCE4hW",
  "key17": "4a4tbU2soUprnyBAgcPzQNubEquRq3xbXcYuap1RHjuG4xH3T6zWGUbMSejgB6KtTvdQhDDYuAF25qwdFBhwd9az",
  "key18": "3mdtyzg3bnftzUhMhpCHtujouhPR9ZzwWrWfFGGSi9rNx2g1YxeV2Lavsa7yskj7BqX3yMmwbnkLcF3QxgdbeEqv",
  "key19": "2kVAoVrZVdXYLy3CpFsgFf6jwNDPkmubWd3wrBYpFECGH99ArXA475kdfqXFuGJ3FL94NeFESgus4T4L3nU79np8",
  "key20": "vvAXeWckiDVbi5BLhfAo5ur4rVS41Ep7HjkZZUMcdEg2FN3y7gYVC3z2NYSXmp5gmQAXWY7KjgouuvByVPvrXx1",
  "key21": "5eW8FsbuCSK7KeVKCsWUvAGF3FiWj44s5NBTCHCijBy3oMYU34snLuKnVshhCZ6YELWDP9e8t13LmrFtN8iFUf5r",
  "key22": "5CF5D2a2uFUsiQwuwX3XrPTLvTERNqBkYSMKJUDwKS3uVidYhBRJH8xTL7ebHVmap6KApWoiyVYUq95yg8oHhVp9",
  "key23": "47Ghp1rouqmyveZ66SsnTn4tgvEGjJVUbFTQEjkFVxWCvdPyNtTsBQntgHMXgVEuaGzbRxqWbZ3hJBs6JQby3rjo",
  "key24": "2Mb2PYPH3LscjwSitwUBm9yxiGYNEmhR8SqH2ntGgLvABZ1s12ufsZE6g9E2C9f7iZryipitzjvjei4gjkNWUaiq"
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
