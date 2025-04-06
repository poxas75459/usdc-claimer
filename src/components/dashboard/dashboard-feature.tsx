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
    "QpJYZnCvkdp3kK61N1Nqx8mHWqdmbmXkniddUHhLpsm8x4KmxgFnwdwHwicM7zXqULoLrx7wW4ZeUtrv14zcEZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8vAo9G7VsH69xGAkCfWo6zcboF56DcXhWsjWKA3rQTvkHMLgPGp2BNvLH526s1o1V9n5dgMLG7WCeEJNi8R9up",
  "key1": "38Qdm7it8Uz87EkfvdHsP9CPo37Gw3fzhFFsmz7fYiAy9NatbAs85VAGL9HT1xaVo85PB2BHkrERCRQ89EVvCEvq",
  "key2": "36U43oC6VPGG3QqBGSQ7TW6PCYp8aVZMDYw9ttdtZA1x3jGmxqFzkzw4gbHjv2zT1ZWFRfeFUYXzxc6Mr7isPeAX",
  "key3": "2HSu22YTkufbvkWUBv7GAhf23Kdvdtx2NZsWSPzJxUi2gxhM93w3569byQZd7odmBFFKxJRwxRVz3QxjrZt6Nrdu",
  "key4": "46y3Zsun2smd8yqehWqX8kw73Z8R87wMDKor2XZupRHD1xPDUWzox9RJ3fTYsUTbpEJ6e65q1EemKeGdwcVzdz4C",
  "key5": "htwPebds9v1pXziCDZiwEZr7qxNBn95KBGfSMKMqJ7pzbXT5pZnzPhYBHE3oCoUyuoUMXWr7BVBSBQ49CYmTDwX",
  "key6": "4srwKbzSUGyL512Bbye9QC5rdvoyKCPmLhookXnqkJKBZCTLjqypCLALRQR6dMmBQ3iyGFUcfhG8t9kaKwZc4ZVr",
  "key7": "5LFxuvgiR67jqKZ9B4s4c5AoJuegFP2C4nXkBru3piECfRy7ZgnB18GmtjLS9tXtS6v5AKP7aKW4CW2bmvtJSjft",
  "key8": "3myT6bsYT1uVjauFb9BZWQRPzDdFcULRmieus8dhBU59Q57nvGhE1FuMw9pAJd6qFqKFUqfq6MTdNfE5M7nMBT48",
  "key9": "2kszN995BomJadvF7oUinyDzKWy2RzM4LXEiku8qx1AAd5VceoYCZ7Fz3Gz9sjdo8uf9mBmUFpLKEcQmf8h5sXCE",
  "key10": "f2VxqiZ8SjH9Qzpf1YbcmSDch5UZG8TuMSLDjjMjYy14k1dMcqTqv1xmSdsUPLy694Ym7tEg7dwjVK78iXxM8dD",
  "key11": "5hbpavBLLLPsqQwAGXeLTa48fpyp1Sp5VaxAx3fBQoqzDNBe3wzmVVuJJMKdoHpiYsRgGnnYSF4AnXzxS3hvKpZt",
  "key12": "4AJPKTdH3bfs2p4oXiYZ9V94yzNEtnTCrPcSRMJkCFKL3vBmQYE8Kx5S1BjYpwL5aVtzXWcMrJw6LG4mjf7VDY9n",
  "key13": "2KRMqNf5NmuB1CfVDqr6D3t5Fg2B3hzr8SCgzkkS1R3gLMSREGD6FShRT3qudPzJRvu21Rqz13qagiNhJkbz1WNg",
  "key14": "45yzJAYRUKmgJgkxPxLpi9AfH2KDM97TFHTiv8GXC7SXCkjbTKJooTGUw2s9zoCumMuQ6BDnfiD8au5cVE8kG8D6",
  "key15": "5sGbB3oFogpALG4gnZec8G9VyeCt1vBiUD37acMiLt8x8RF5cAtYwzNP7Y6fsXhGY4bSdayF9bE7aCmSzViEzp58",
  "key16": "2sEkZM5hLBUCx5QWzusQYNs6FpwxZMVgGm7QR6iJM3R474NofdkdQ7vweU9NAWn2yNWPVFyqpE1cjLEpFyU8gHwe",
  "key17": "48NQ42oxXUg1jMfJN5PFE76s7hTwroBryGy4yLWnkWn1fxEqZ3vFaHuD4xdbMiHYNpkXapCHq3FXAdGyUQBuZ9Gs",
  "key18": "j38EL1Vq91vhsya15v45a3E2mrF46QxP8F8U7qFoisLyTcgLUsMz89x9b1HDpxgMAjpMUec1eNs4cBrzBnpXeGM",
  "key19": "2dbAU6ovhK1xLMyAZbiWjUVJz1kUJiRkoxxBZy9Yx6o1BKHqRSwuETY97Q2JkZH6GAqDinknjp55TegGiz6JGPNb",
  "key20": "2evL9nXyeMFCDhRPts9yquHqwAy9mZbLsH3xmt5Qu5N15tsmGKo9LQvb545CcK9RBXpAD6W5UNBh4a1GYz62Ut8W",
  "key21": "243of9eCjGLgG32yLmx87thXyMKPB5aRkFM4w9TRGrbGvjosWYwtb7MHkEkf3AMUc4Vf13bFyPa2Zgk68WjJyvMw",
  "key22": "5X1j4fDttrfbPyzWe8GBLVJSKSXJZSEVDzUG6WoZbfNr1HhSKGdekZvFoE7JcCgpfNgDBFpeJTBbmmKyQyspdibr",
  "key23": "4sXsbPxhCY7pMf63Z93e6NtaLzQqiTGVw1mi1Vc3UDMeys1Anj6PdHZ5Z5Kj4bzG6y9ZkZMfp9285WEU2QzizZd5",
  "key24": "5P6sfQQxK3Bd61vmk6Fem8trSKX13X4UsdDgBUGRf2ryg2qt7mBQMz2WXGhbcJKSA9DX8WSRQLto2uAk9KLcyR6f",
  "key25": "2burkNrF6wCaWWMBZhjXczPs9RY8frPPrjinKiRSfpnLjUs5gR8VqDJ88TQvRWnZP86qsBGGJ5o6tV66EfMaSR8h",
  "key26": "3vYdaBKuRd5BW1cWPJxMN37AY77ZtmVVX8MEh3zsCtpFX9LZei4iQfA1FGe41eVNnCfKrhLg6GYGuTcAPc8DpZLd",
  "key27": "5Df7LNjA14MYww5u5JmtDfeeZduXhMNuVoMaWCG7JUWePJpxmG8U9pUjtogKWhHAaTUTEPeMYooxm1dKXVcbGbjc",
  "key28": "4sCsVrXp88H13QSbMGhUtaEeqqq64Tie85L17jDZW9Q8W5qs3zK8DqSoaD2NTMz9LRLkA3ipP43fPcbFVscryJpt",
  "key29": "5dJMLuMNUEyvWE5zrmCoKuKPbP7kkbi4VxzYFD45Q3yeyvJWxZNUikbsyjcqZX6vL1CMpi62SPooy1CWRrmAEWpF",
  "key30": "5XFtR5k5zoxFnvVHNse5ncGGH1S5hU1ZVxcrSqrvtatTS8DBF6Wsk1niYxCBCxToc1qT2DmxzD3N1jghSEg1U8v2",
  "key31": "j9x2wQ1BkaEbqbdhkUYJKYSgUkWW12j84AKRhLwg5H8WZZskySWRxYZjNsaky9iDP4nsEXSLgs9c4Zvei1icdQj"
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
