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
    "fv5uWPJj2mZ8D5zaFLRdzF23fizZjcjMcHgcLRqqNyd2VXgf2SdakQtbz3z88PaTSNEs4LmpD5Y3u4XW6gZY6Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPenznqzc5HvemFu3spuqSy1CeZbhejEThNFSU17nbSu2ZSbD51KTryS3RREJ2cwRXEb8huihxN87fPap6VGxnf",
  "key1": "4b8HYhJavzX3FWBoyKT5mE6KPwwz5e5AzeUaRsqTXzQKtntdGy3Xi9QzLoPydi54fo7qucBGbZ9zxcFuPNMftntx",
  "key2": "4yKo22mCsjLYV5EzW5j7kEmtKwUJuvwmdWpBFYVmNkRGNzLDW2kTooskFGe6WvL8TnBnFTCTsSjwmxozhWw5rvtS",
  "key3": "5UPXfZfiQ3ufYr4N18Ms9AUgGiJUoXLqFt9MiVDfwbBf2sEF6QpqwZa4Fz4EtFEN7PAdMQPeemRxR6F4CVHRtKVp",
  "key4": "64c6ixSgjFZPsEtQv1L6xb4Tma2TP4hYrRgibJJk8J5wmxkLnG79UkVr8heBQuQhYKSsZkbwxrcu3RyZW6hFyoDf",
  "key5": "7frFZGWSChLKmCBGrYmtvKcN2ZH8bScDJEecSxuqmivjgvZuCEjGs2L9NqcfuhJVgYQgnxnq7pVWr9oUutJ5r2Q",
  "key6": "56sudQoaB21FstskPyAjxHrNJ9RGAV83m9hwsEze16EyxkArYKzRvMcbYdj7kfF2mnPnb39syfw6H3t7N5EogKXq",
  "key7": "5uGHCpQFrzQNQfEm8DAiHpCsBy2FsRJPDzHo8Zn1ugSNBC1BJb72bd4CWN8VpudxG9uSJssdAY7DbAq5QC73b5oJ",
  "key8": "2PKAq3CRzyYR9SgMLFG256pkXEwZbWzaurhJJbFfSePaxTckPiyTsSDcBQZ78FxciXp1ZwZwphj4NCAJXDwpZgFS",
  "key9": "28VwaWUDmhh1QqtwVzj3DUnzq3WB3wmhcFDMNXm92a1vaJdo56D8sPUqTL3DT1vvvwk7ystkbifBEcku9rxqQUuD",
  "key10": "4xgpdEjd4BoK1SQ8LXNh9auSj9Ve6orUAtZqpuuKhULZYtE48WSuVSiq1ZSxJJeC1UV5tmmJPyfsgi8YwbFYPymt",
  "key11": "5VVHeh1NXD2qUbkN3ebZvu7oW6VBscvY14CB5ChiFSV7x4XaAMsFXXBgKqTAXdfKnjH61G6GwFCCwgPv7yCqKzmD",
  "key12": "LQ8ArfyVu7ZRhS6iCh5aSLaDKQiznGZidpnnfMRNqs2cp5hFyz8pyAhbXB9QMtc1A8ZaxeMZwyiX9LDyaDJCdXS",
  "key13": "3qCwdpn5By4zVy3mKo7wwL3DNHBZ5KGTAX1UaaGT1ezvgp5ehLH1rP2wdR4KDRqddcrMZ1zbZ1QzdgBQ6NLwWFpY",
  "key14": "R3oDbVhJyKf8w6iahtzK8ZTQAq5uzfmBfWWmZULLriW7QB1kevgAmxDDVM9XcGrMGB9TcFQ1pePHZf4iBgFDCjN",
  "key15": "K35ehgQ6GvcwW9kD3x2fxVVkzyQpRMMYad12ztXpQH2G5LxkckkRnRqSsHRiVN83bvhbBtjsFCiPG7dNEY5Hhss",
  "key16": "mRPjhGYuizmiFNKngWBvfRookGgtE5tewSUcv4uWnMPP3XKkMrywRBpgMeqwniaswWeJC8qz8NsRvP9KnciWD4s",
  "key17": "2Q9Jx9yeyABAoXYLJyLPTTxkMXNQvXT15JHANaZw2zYZFwdXN2f1msyj4gPE1kAM45k63Tuy61qCEjvT9XQ7fo77",
  "key18": "21WhdyUWkt2KUQvdE4TGFmcnfvBPxfrcVXNcm6m8u9RX3SYAZJtK8BWb2XPi4GCGtMtz5RJq7SHG6GyvtBWrRhFz",
  "key19": "4eTRHgPYUGsVv7WbsdwYHbYiPyPzawHmiC9tvh9V3BiCyjXt69exYvJLT8FDKGEAWzYb69KTXp9xtnuFHxSMoXFK",
  "key20": "2ook7LWKSeirzh9zua8KKarpprJLcNUFcNDajiraSC3dTCnuL2SN8wAMTfFTnGYN3gjN4AsqNNsqQyb9F7KQAicL",
  "key21": "5a9jVL3i8DiTRhqovNr8AaBaVkrwkLKYZmQS5H1fkdZDPooyckSG17u5c2oAvNhFk42jR2VPvk7TvD2trVj2cXj2",
  "key22": "YcVyn7EwubPmvix81TLUomSvfqrmZH9CzTJr7zown5QbqiccYZ3xWMmpWDfVzhvfG46RpDF8EC3AQGdtiSv5tn7",
  "key23": "i7M6YWqjvYtiTRAVwRmsYxmNhRGgtfU2oNKbHh5QREUJt26c34Xzz6XrzqAgHaQgdXjur2cqB2EhKHmLKxD8SSX",
  "key24": "5paTUB2fQzDHnD8RzvH6XpodRdmwiM3SWFtM1hTWDUsAsdwiY5hY7ujtyQwuduUMuWQf1RJ4eNrHSXTSHtg7afH8",
  "key25": "5JV38sKGeDCxLG4jWnbAgdzQA5L5vfE4oxDekwdJjcoG4thvRQEB9xmpzZRPrbM2w4PWcv4DYxFw59qNjKhws7Gn"
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
