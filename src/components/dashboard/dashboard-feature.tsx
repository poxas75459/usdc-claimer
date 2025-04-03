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
    "3cjU1RUg6fEa1UKQsPBTDzniCLi6j8z7bpZhPKZcqdjWePAJ5PJfJbv81GAuBwjVT4M5qGfQrZKs18zubwitgTnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kxe6kbbukjkaHBA9pejtwEUk6K7vrBKJRSYnJzhSky8pPRUUMjyLwYG5rGGSi4UQZZsugcmfcFgyt7bm4KvpxG7",
  "key1": "2uEA4G8YgxQNmruxLo5fT1mwCjg3jx144vLxbMzGttsQ4E6GsMatnMrykjtk5Suv41U2qhGVp5aiW7GFnvf1Vhay",
  "key2": "3nD5wuHKyZESCKKCmuCQrME9ZtC6RNq2GMcvH2yeU37ahRfwuN9ahZstvJ9bBBv3AGM57bsnn1jjBcBoT9F6qPep",
  "key3": "pRM3rdxy7PFrYKLnVYTypnRAKgZnUfgEz1LGVCPNZLQ3JCnwkKfZRd6jRdwCEjf2wM7Jz3iDjdwz1RCwybAGrfx",
  "key4": "4TTpa5zAucsrnEYWksTSmDnEfhGJNtWy4tGGuRosP2J9wZVBN4nsr8rjJqVH2r2X9p1AhsFhB5pJ63raD5L9xkyQ",
  "key5": "5rKgi3wcPEYqwaHuwr8CPnAacms2dVowPZswyc44zpjRduExLK9KM16gH5pHFUJHFvgG8ymfoQnBkJtV4DMP5Ps6",
  "key6": "5fTaU2f14UXSWd3TDPuidVcH6ZfkCdvpxY1qhoc1FePJ3ow61AWRmyxrWGfxBbwhSTnGMuUvyY33pq3smFWCq1YH",
  "key7": "KKSQAoVsi45tdAnknX5H6DJgnoTf9BSYgjYYyohikBJXswzP49DUShB6uhBJvNJVHPEd8vq3fGbq5j4JfzoLf6u",
  "key8": "4akL2cUveKuuWFZg6RYuKA8BwGXiWocqtDbcM3ANjXURFdq7pRHQgwzsmLo9t4vzvYj19E8eDL7pLLfp7qkHm7bg",
  "key9": "3uhXhk96FiK62PNcFCnVaKNBVP57XHMGgsVdNVunzL4eNr1dyJp9krmypJf2Q9FoQcSwNNBwrYguUWvzTQSjZvky",
  "key10": "4B8SjYUbDBJ5ZrqfzGNQmdEXwvZsUX8vU2oRxRfg4Fw6Pb8yNVXbduVizCRi3qR3FrvEZpQFdxU6K649C5wwDVuP",
  "key11": "wT9HRXzRQArH9hrxZzB9NP6r6u5K3nfQGgQ1ckUt7Q2hsFZ7CtgKR1tt4gKbNHdFGBndgcd9A92GMEGEoimSnSr",
  "key12": "64WpBY3s5y5j2SiNq6BFGesTUJoxLuZzibKWp9tQXaREw1dtxfu7PWJjVp2v5igkkddVuKgCEUu96LPVZYEofKye",
  "key13": "4gSEB8r77XK5Mkxy66QvrtTQs2MXxXnG2WvXVVZCkye5W6QFNBaWwN6xJPnd4ZZXzoGJjs53dgNU3nxTBeQyue9A",
  "key14": "4Fd3Lgh9t8P1YShAR3pLVAocvZVQTmM23bDdhuE7Hir1qwqa55GdwFvg3RFJYwjtr5e1DQH47L2CT7AE5JucEYgW",
  "key15": "28aK6px4UXSWtWM2Q8dx5Ekav9xQqWWprQ1moCMhoLhSCfMQDVwUvJCrDUSSpsbAAXVXkTXR4efRouyZ5QG24KDd",
  "key16": "2CTduf2tK3VCUzfKq7W6uGSYD8RZZDovGjVAEJEGjJDTm6nrSDqLavGBYwLRrxn5sTfrYVe1SzsJQ2WraNNt5Hkj",
  "key17": "5uqNk9ins1NWJbidsqnrf788TaLswUadLzqguA9E2dXgCxWGWsECLg2aUteoieG2CHVWjhwmoKmuzrQuS2GNVeXy",
  "key18": "4UqWMZoAReS8gNfReWQRQCAABJjA2RaoprSsw9YSgLyv9GWtJqCksTBUSqaMnRmpVJiisfUmKYKYnGG41zemU1MV",
  "key19": "3KrvqJZaksaME3VWStccNTg9UEsH6XtwL1eoggDbCbGh3x99pnGCT49s4GUegDySP3kZLhH9gz5Ru6RN6C1uZCKP",
  "key20": "3ZDK7R9NFRQqg34r2XsHbTTwMgXtK5xUY3frbjTpdgAMr4R8yo16mrnAYvX1S2XSNgtthEbYFP8mqnMBG3kLEZbr",
  "key21": "3jvk4dGhZ7qaieVz86zot8z8KBozVrxPjreEyqHtPFpk5LWu4Ay6tfyrvxPSFGR5ouZtwEFtrdN3w4pmw7nfiMh3",
  "key22": "4vAkCkVjBdmXMXJCEt3kjRqFDsCEz1XA4RUsncY73W8Dyjnm5TTtLEc3ZUhbxDx6vsuMNCi9c67xgzvyTcVtTewr",
  "key23": "49WdHKCW4VPaaeXmgexELvGERu1bt47wsZLSkAHyMZPS4uJj934dkLw7sScE8GHzPf6EXZVqdfZiyYAqocER4xDo",
  "key24": "2RPza4Vj6agjqfXAECn1xu6WxhmD6v1Futi6QPvk8gdqqskNmWCzn6vKJyKXJv6isHFPVCVTqtnzwpGPaqNc5XFx",
  "key25": "2GCfR9qShptUNKmz8F6txGc19xKPZQEUAK3kqjP4HVzrovEnWLGWYnLRp8BMUUmwKXyQGpMMVugNcH19TGquwGRp",
  "key26": "44qf9K4Nv8nAYUXjLj9GCcD5idPJjMsr5E9qzmNvnrKAG859v2YrtR3CNZzanazTpynF32c84TxWBr1LsbBPCNuw",
  "key27": "2YBS4h6MD8C8npLcUdWeCovG3djQCKagEXEynHcEXXPvLmGShWsEV36uzxiikpete4LnNsd6aEGDUf7uRx2WYPGe",
  "key28": "5MBU2UA4GWAmGGtLMHqzALVTSvkqGnVGz5og2HvApknZYoEWrQBYWYnwa8jZ7i9pF4BbMRPwvek1JXYuneBfoTBM",
  "key29": "4wg8FmsKSTTUEJKqndc2iJVHSkCHbL6pNhktCDJkXg3L5UhMgGMkiWNhdb6eNbuh5PPAoZfmpQFTteepPKS7G9tQ",
  "key30": "26LCE5Bs5QCn6dDoLUnZCZMJzqb2V67RiBJztUn7wYT4uuupx9Vf8Rt75G21gkQYBQ7bX2jdu4Fdt4ZTr63xUpVi",
  "key31": "5HheiyJ3sSMGDpc4SEksv6EnUMWJYF7RvuyTr6T8dwcmzko5pBBxGecFTyCJMPH1y39gwg5Tk47VnvzDmh3f8egc",
  "key32": "4Eqpt6hz6GJQUVBCFz3AiMS3dKPQSz7gcJBatxSBYK2WXXQNgFjT4vH6UbGxMgXwJsY9C9BF2cXW95VSDyNLVsLv",
  "key33": "4ouGTUqkxQpCQNVuedSy3xXXymXXpVfasyKZMRnwdgBgLzJxhY4yGffYYcL7pQbE692pV9yNbxuzRcZ1Qxi81SXT",
  "key34": "3L3TDzrmywmojVK4dc6BHVSjF3HX9bi7LUnkioqFWs28omQc4Zj7aVNC4ru7kj1AC7NeUpc81D7GYqqKYSdoG2Uq",
  "key35": "2inb7yQ3vtxkKkSXL2BUrZYQBTUjiaiLdsL2WqDkMFwaqboMGLMcvsPdJ4j3pnwuHedg3K91i3PpGNwjyBhpt2Zf",
  "key36": "4DPdbpfg739pqx2p1HbE7jz1V64MAQWMCYqtYeX3guGvbcaBPuLPCbyP7B3stucsj8Z9auMPBnVgpf6HvicLicqj",
  "key37": "5Mx4UqKtftSf3vShrqxjdz9FgbmzrYmNdmBu4S2PNupXUGihXzhav5AuG2ewNyuUFqcYmSjTSm5D6UKZqdaqgwiG"
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
