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
    "2Re4rzWwqqLJdAzbuve6NvXG4L6bAnGodRd4EGUNBBfdSm1DemuTEKfnq43jTX4XQF8W6V9wAjT6uosXmMAPuX73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSnvUyiHK2WXySMyhPKT3sUjVCwL3mYaEZppAT73c877y9xedoo9vLR9X996eee3WaS5tVK5mpjGwRKYrX3CMMV",
  "key1": "V3757Y77YEcHr1rUf1DMzATR3cvixFMuuSu5iGJpCh5CoVc4Hg7rgSwJzVhy8ypQboPcBrHnWfM9kBrKNcyRAEc",
  "key2": "3BxRwq3TyweRWkKSVsLwthQ12NiS3AHvLrtU2jdMczUucsir2NystNLL9JEvJ7Z8KriA8sZaNSVfsaX6MzRbEK7a",
  "key3": "4NwBFUUjxHbMTmLAwhZe2XqgMLvhz7Q4fSPxpBnpUGdTTSrqixyY6oEzekuQVN1aaYzSpZeCLBKNxXvWffUoAj7V",
  "key4": "vvNQdPQN6hFkHf1qSYfA44wEU8Uqv7LnGgUTSx5cQnfSR9JgtEPcygJtmqB2Uddi9K7cKKQNxS5BHthrrFz6Gkz",
  "key5": "aBTnD5rS2cDML8fkXc9UA3JCHPvt2MPM47V22HbQD1wxdhkx1EmHn5WsvWTznoQs3WwVN7rz3VHkUdZFV4cxgT9",
  "key6": "2TeZsB4ooRgskQT8bFR7jcpWrFMVwnGGbtqwPHXesWqvkbMKVC4yLGeraa5Xnns7FGvkN7XEdfXtq4cYX3Lq3hx9",
  "key7": "3mVPaVGWxe2SFVFZxLwvs1PX2rWuKkqKEKevhEDszkDLoAm3ojmgbGWVjKB4TAuw7xViSgrQXesoRkQ7FVZEAE2s",
  "key8": "3fSZUS34EigrYy72bypkDN3BWyDdZyuJscUbGbntCEnugDu1eBa9CwrFWSXwX4xjHXUS7vD2jMLU6M7CVjvmqFzr",
  "key9": "5zrReWuXpz94trpCEq8TjHHGmGiMULKDEfzrap5xGorD28skZR3cRyZRXo6s15mjuXTqfbD7mCEYK6dY7Lmap3GS",
  "key10": "2K2EM3aqL9UmC4G2NFoTMPQ9cymv6yx2uVZXLGKuSFLuPCZ7eaXonLgisDQjpCvchxFtZ7HLcndaBB65SJnYtwHY",
  "key11": "5nB1ViCjmntw8UJA4KG5kJ771xPAo22rsbBmqzjQvozBbULwTFcozaaM3KiBBbyt8mHmLmRB3b5Ab9UhqmzH8UgY",
  "key12": "4zE8uV1r6KvxaHv1RYrQPsapLdzV3CDQhvnirT2RZdv6WMtzWcos5Wx9Luw5SY5ZWcqR7RzSg9RHi7x9sMr9jB8e",
  "key13": "5Zh1QCB4kwmGskLK5sti3uqg2rEt8JeY7sPbXkH8YD2MqxntNgDDtQUa3fTMpk2PVKx3EZNG7J93NXb2W7hcS16K",
  "key14": "3uBudFsEi6TuqyNbnRsbapjj19qZYkLMKFUBHJAKuZ9bPoi3kXJYjEb71WefoBzhUUZsdx7KgrJn17ayb6wNY8YG",
  "key15": "2LT61Qha98EV9DrhCYfTzRHk82aG8U3FvKULA2ZJx7yeNaQTgMrVozhhUmbYWRCx4gU7gvNvQ7McRbbv2bTjn5BP",
  "key16": "5BGVQurF5Ec7vFE4oMqx2bCcwaSuG9stTySfj598CzDKFRimdpr4ppYGqxjfd6K3mnnBHjoYjb6wdask9yVm99Su",
  "key17": "2Gnwy3HWtofC11un7fFgEnX5CwSquXyZ8xJZ56vYyrTttRFCPeUFjscaXqmZYNqZH9aHLTdgcee22TqL5RLrHV5t",
  "key18": "1PGYYVMPdGRJwDBVKDZnfuHL8eJkHonVKeoBoeCtiB35t5G7VFKWWnfe2BcNdQG3YPZwjkGPiDewMQY2oj4cGX5",
  "key19": "3vau7unDfRcYfbQfjLkHAUjpmHhFNPvzreRbbWFB8GaCUpc7VvTp23AfMdT4XAtCPvBmhDgEcuyLWJGxeB8vQad3",
  "key20": "kauZ2xkHL2ZXK6TXAme3k7Ayw95AaS9sAfCdppECkxwBkTD9FRqZYM7G4eNzsfmzCyj6N5zULaEZB1vEBBzNuUT",
  "key21": "5XHHSXAt2zygkSqes61LVHXEpV8L1TJBkitbgDBj3Mtfoyg7NgNgQ935KG6knw7XNCGEGJM1pAnTyc3vskV2XmN6",
  "key22": "4vWLqGhMWhbenxnuor1fMQJPtBz2HkT7WPCzZkrt6kFMh4eCVKCuku8iDVYGHDtPG9imjktHW4ArPU4aBDqAgTN2",
  "key23": "5RsBCtUrGPhcDhLPoEXRHd5jguQUoyTxiddWFjpKrGCnNvoCqQCuNofBzfz1M1SA4pMpb47fAedSEiwC8jnooxtd",
  "key24": "2XD4Bp8Qg7RxoPoH6HzErW4c46pDDnVTCi6gwVXYk5x1MSpsjZG9JtmceHahcU3Z2cP96fdLJSZaxtGeE97iheDB",
  "key25": "27QuvMizsykXxWbSD2vmLDv4WnEmGf9Qma41xuNJi1zXsgcaBHtLG5h42nCajHrvZ65kiJRL9eFeCT9UaEicEByd",
  "key26": "HGgJJLseNYPrpzuGWCoVT8fAuR4nZLNkTdcePTCLMTCxnZS9cWiQg2KdqunA4Aj94UDhvRSqhVA5KcwGbBJKRyf",
  "key27": "5FUAQAX62xjUUBJexdye9Bqmcg78AH3ggUFSEUczMrz5aRTQBNfZcyiwLC1Ebd1cgo4i9DCkyHWm9eCuk3CaCw5u",
  "key28": "XgyNZwjqLZKG9WQNH8asd4mYhLBYBxxRtUgpwzM4iPoqHDAyW5dNAwiKruDfVQse63DLiLXB1wBXvYuoooxZy7M",
  "key29": "36LdNiQ5FXkXaSsvoKUiYyMPSNpqZext45DpzXvp8jKwoofMoZKsdeWsfGhy1L2RDictu3m4uY2DU6sdfgxi1FFv"
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
