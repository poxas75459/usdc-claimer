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
    "5nAYZZfU3xRB31DdVrgQUVgEq1rQWXQLqBfHfwLZXpR9crBnz6RS1J3CsjcRsPUsTbyEZoqH4TvkHeNqxeQ4qoi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuMFeBcWYSkkmre4EpbBP2YKWhJqXnFynDTTJdUqx7eoch6mXHgY2xyEHJKzH7MCJV4Co5eczRE2sFx3A3tRQe2",
  "key1": "2vYQDKES1QEtpbcf2TfAZfCwNUGwrFmCVpawrPqtPq4zWtgx3mcaXwBuFckq21xjGp9s3GACuVjFoJNCiMTwGD6U",
  "key2": "s7Kww6Q7i4hcthK4i66373Tdp1K3zYpvqLuJWJtkKYe1UwithJE81LFQAuLdDXiMtNiFFMVqxfhq4szVzzFj1s4",
  "key3": "a4eLyGxu3FpxxsCrVy6mG3zGCrBybTNcrFJ9VymByVSS9LkYGzcPYQF8nRU7A4A7DdLF8S5LNvSaRTKSLLjZJVg",
  "key4": "5A4Jbp9kxKjsU3JHaPYHttbmgWtxY4p8QJBK5J2x47VG512hpapjHF8i1JAbGSPdyxJxECd5Z8YgCD7vGxX7qHQJ",
  "key5": "4N5hYnrKpQLqAeAQnCGvtmMgXEdzsNxEGmcbHNeoxNc4BzYJTZg9YXQiFshdYaMZBQKjBCz9HhLZUyMmQabXQxtx",
  "key6": "27zmZUuZaNntsBMjjSHckkFSd7vDr3REqwTFAvKP2m4hNcTTdJnN8GdmXYTKYmKoxLoGyMR3GDMgmUbsxr6HjR89",
  "key7": "2GpWTzt7zKRvejzcX1ARUBgPSLEakR6Ji7n7PRxAPELdGPJz5bZBmaTRZveGsGiLMwAQTHD9oCA8emoJd8DnZTVF",
  "key8": "5hLZuLGkXEV514mBwVVNMNjrC7AyLPR6Gt4B7XvHpuBtNUS2QX7pKF9m2AE38MH8ojyW29CYjPJSbveSX8qdaczN",
  "key9": "4iq4HGe75m1ah6PFnzTZ77Nh2cErnmamxRcJ4tMFXYg1cgGcVfEeePifmQe5RpEBfPPPydCwr7RGAX6ZdJgpn6F5",
  "key10": "37UP9KPg7KtsJ48GiWBU3EgK4zhJziPY6zdDZ4MAFk7xdXQWoYR13sD93RdwQa9aYosiHqMGhUEedRYLKe2Bew2E",
  "key11": "4mWJFVGdPAw5tK1jxQC4XaSzAbUhcVznxi5YbixjRThvcrR1CrtURdPWHztADFJmggGYqtw12ZrBsQRSArrQ5BHc",
  "key12": "5mCbVCwaunRceP5a2MC8a6t4oxAZCw4mdhsCVXhckXDkSqxd18C7VqGhzwTDnfwTM3FNBrwdBMCjcN49tEfu6qzf",
  "key13": "3NtokDXDN5V2bW62icBxDLvgyYUkHB6ASJ983HJeKGZVkDBwwJAVYVvhoyCEvSEpLsmBQcmWkABM3Zto2topPSRq",
  "key14": "2A1iTWdB4jwRck17DiS3ZH6Rsq2E6XuVNTWQeoYcMUKxkZi76YWrzWa4kbSpHTMCXZXdogXqpzqGNPj9aqMw7wKb",
  "key15": "4gzmP1bsYTmLiczicTbdEcKxzjLzubJanJB5b1FEmKi53U5GpNSjTozX52f9tnSpRr1i9JeyZbXYxP8aKGZ1GY9A",
  "key16": "4zYo3VTRtQhWszzE3edXELRGwBgpQAsD66kLkG61pMWyB61tr8ZuzuekZyW6X3R71Fqt2QmHT9jrEPEYbeUh57yZ",
  "key17": "2ZjXb9xWhXYqchdPBxyWWALH7g8aHiauytuoUKYpdcdsR7Vdy92rpBQWvbwdP69CEinwM7R31tcvEAo5ZgMpNrqR",
  "key18": "4SJsoESYkTLWqxK99qZqpsRiAL1c5kHjdiFdu5V3RvkPwKaxMGvNNPeuydLNjTS9yV7wy11aFmgPuesRE7kYpRvr",
  "key19": "57xJmfrGMBVgXzmiHs7fCPyv9ia8jQANPHyMnv3sjMDkvgyywc1Zd7kkmCLdWARGCJ9z3oeW2jTji3pJCzhMGSwj",
  "key20": "38u5jbLsbVP5qCXj4N2nUQeNCHWvTbBYEL9mTwWhHL3oMeLKqrcKTHiiEYWWyidTbK7jNedRmsqqBx3mZ4nVgodu",
  "key21": "67JrKTmMpLKFmuffy6u7FxCKLptwUio8DxhrD8ooXXZUvn1i9pa4Y3HDpcfRGtZSjwp1o6JDncX4FS2F2FXaXo5V",
  "key22": "3g2AFD3gGLBJUyRC8VrBqARHPaHNKq9V3QwFjXCZkn7XaHQGEXZ54in7dBSdCxSKA6ot5tWcNEBpmfv8zHbBkTK9",
  "key23": "4yuZcypykoc4KiPzs5XNfccyiJidrCZc2q37ec6rYs5a2K27Cy8tj4fNByWRPA8tLQxSUeHYXhga5y98FDHFHizy",
  "key24": "5WcPEo9ofQjz1Ud6BXgv1QHFpSckQspsnDAv3oUtpwG2uZvgnth2QScCfmPpry9qQDfapPXAqphRUEht9BcHPiw4",
  "key25": "3DZiyK6UeADRLsH1avJ3TgKSYSQNsCSwPD74jfyZkAFBdrLnP9RUru2CqsfTZewdPAYBBnV8ypo4VjHPVGZXFYe6",
  "key26": "62tYZ2Y2qHPnKjMYC96kFXD5ACDpPZxrupWqiCXsdjDbXjNdLt7znfCdzPxwZWvjtVhMoGtaGD8bdrpHwFWY8LdG"
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
