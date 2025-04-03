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
    "5MyVMffKkH4YE4q8CWm7ZEeK6bz55cHLddJwz32k9BndwRXNuPvDh8Nbj44DaWuqVHvwZkUBqrSduxx34ps7rqtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527AT7Vq3R8x43SmBbZah6AGELqnrZH5gYeuXAHFERDcKCbrL1NvzkK5tUcrpr9fcgiSLEUcPX7iVsGoqibai1C7",
  "key1": "2iGDrnB9E1N1E3t5yBYp8oDJD4y1BwwJoyHbo3Vs95VH3YnyWvdjhZYTvFGbSWvyAcPdcrNScyXyt5yxGx81qbjp",
  "key2": "4ZjtcNAuV6bnc6fnyNPh9n3xh9YW1RL1hMZ6TMy8ASWNUesiGwh84axCeDiUjpFp31G3HJkQjCLUh6sXMsaB6Z5b",
  "key3": "M1GMoEWeRjWgzySK2WmSyRwrhdYEHwbs5zFQNd7kWu7KiczSH7apWw658HfgauZ2KvDCLcWzax5keFuYX13gG47",
  "key4": "4u4Qv2Gx8WjC7CLcnrRkgabVDoGRXyvxdorMwNw7E4gax2AYWb8gjt8dYPySEgToXfuLHuc37XCYDn2x8zfkvKN6",
  "key5": "35mvZq8E2NKVJTLBaffR3J1phcXFFzMxCKV55nj6UE9NpP7UWQDq6tWAt2YQMJ51DZqvPACwmf3DYy9FtKrEdJbJ",
  "key6": "5uK8eZv6TebSNaKsGgHQJLdXV282d3xpVErEGPv7yREFGYCZTTZp2BrsCWzimcZoSrEwCXC3N6ZPv5tof1Q4R6Eu",
  "key7": "3VcC3o8HAJyPYH1ncQpBPRhzFUZkTCKueKagGFd4WvgHYnxy5uBvNxw161RfeQzKKmNaTyiWCxerT2y5TPh5nHo6",
  "key8": "5V6E1iG38fy4URJJWmkTEs3hMqNzWUfX9DdSjkW5mgkx3m8hhUjJV3yE5aN9mjFkCQram8NUeanPDZSZrgzh3y5c",
  "key9": "3jXp1s8D75zLACpVKc8YbRajSPUaFBEKjWsdD3KZ6XR4u8RxHPEZHpa76GiaESMwha2X9nvQJMcVbxBSbREruBYM",
  "key10": "5sy89maAj3sjkPSz8tGvWzXREFjehFYtrMev9rq7jgwZLYf6ma7mJ7aytR8qabJMAAkgsRgJuHofNq6Qnq1fY4fP",
  "key11": "2jFTXTQgW2u69Au5vnCxayPtp9gx635MThK9JmG5DXepzP7etzhoRm9mJ3uE7eiVjjexUyzdfpi8vUVvJodYXQWT",
  "key12": "5uAo5AVJPxBq5P1o2MvmQocc1oicSYEMfM9a9QN1AC2EhvW4FZR2raQZ5kfuXx7N8wRroNAxdzLTgx6FD3BiYdZR",
  "key13": "PyxUiqUqbtR9qRqPXh22mWiaqQyPRTAGUAfF74Cjqr4A7o6BoDn5roLN1bwxApaqMayqSpU51AjGYkgh72drsm3",
  "key14": "qj2BGCoPFkLoRwSzhU3yrMq34fRZFtur6tLreFx9jxUEYs2KyEt7ayT3WjCGXtsGzjQeBs9UWjQ3MQtpXxwgw6p",
  "key15": "4AsLVhMepFEfdbbifXPSHTFqTNJcqdyJFGAZf1ynqpHtQZURsX99tBotQrSazTzmZRMZXSN9msoE2Y139kJ5s5Tn",
  "key16": "5Kqj51FzJEKZwiFEq7sDm1QmgVJtWuipZ63Ys7dx5kwFp1W8aZ1rupTTjYndqLB7noTufqAQKMj9s54ti5nXC5JV",
  "key17": "3w5kANaQeATMG3ktr1WJfnPNWkENiBy7zVhFhfpjj1nR4RrY1GPuoRxdAyPwohaXj2tnW1afyZV3JA5zu6CBxiMm",
  "key18": "2CYpWhhEDewMh5A5xmVLiVY8iFqaHMpbW6eTuRcZ54PuCPBPTTT8MCJ17Hcoco35ZCvbE2sPTE8FRaabeUyBVmww",
  "key19": "67GnGidycqZuTtTpCAe7DoScmuYydWHgSuzPBxQxWMp8Cs2rhhZVeo82s8sPs22Wv8xTdzLpw9VC9iQ9vg1wfthA",
  "key20": "5AvEcvLSCyknjAy7XBr9FS24j4T8m6J9dqimKjayt6v3EUkPitRc7qJkQ6VvHbbUyLtiBUUHrStiWycU1QrtDssT",
  "key21": "5ikQqHRhQNJwXWGCkPB2nHu7mbvf3bMs3TNZ2FS3pyetRQRjtCBdx5DK2UoAVsy5pW5WpEfiZmwmsca9TSaruQe5",
  "key22": "2Ho2DdSQZEqr5vJjgfVE7uNf7dxxLEkEBW3mHWGeEmAxiPkzLEXar4b55m7NDBv52uEoKhNfmMKTMTxMhZJKuAXi",
  "key23": "5MAaQLFRZV5K3BsCNiBtTkzspT4RJb1AVXJRZzRDfmB8msBjeZrZPdshyJCah6wtHKpjhzqgWVytXzc6mjrfk4CC",
  "key24": "2JCiJYhVdSJJE58auRBYdFhW6EXLGVC9GfDzEFxxhyfsvkdgtUabWztzDH21HNvRLm1hwYeVeHGuq7K4vpeniSqR",
  "key25": "4CgW3YDdd3uQBTBTLsPwRSoVtaN4G9YG49xL3H5fwmdaQJPKMsiRfh6ymXaAoKynoCMfUdw4aY2rUi7TDwdZ1FVz",
  "key26": "4aCuxrQPkoBSR2LoZFvCgTbsoqhWoJmNx19uavaX7m598K1pLrue7sMQUKCaRShSz1D4fraRAgD9EhN8epTcToi7",
  "key27": "2msVVc9ZMkUVzPbM71h9juEy6VjFibXRz7rxVDktM1pqW871B1zDTTX87zveCrkyxiX5PtCeqHAEbSZvL7m4AjsN"
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
