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
    "2H9yPe4HDe3T2KyR5JY8ikbHXKmLhDtHTBt2jMR4N5BsFyxa2bvdaGSBMS1AmCQazRqZqiubb2y7v4XQySSTdXkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9fUGm1HwjB7axrR6axKRTFCFWbbvSjJNNwg8bhGsFHhN3MLk7Zk1DUh3vngbvp6CPZZJj5L1oEh5cycx3jwc1f",
  "key1": "3r4Sdm3bSSFwTrbCvHDp8hMF2AGmYbXpqBG5dUv8LetS3BRL7r1uwYEq7863H7XXLniXypsjUbaJPP4PQ1rRjZqx",
  "key2": "NgUkQk7PcUWXpzzfrR41oJd6LtL8QYgL3FFUcFSMHwU5Cp3fGDuQArasfmYjHftBdb4NZJ9FEW6KireVfQNoU1m",
  "key3": "5MeB318e5m8CAM5CjGpKrKmndfDvEdFYrMnnRdKZL7RKcDwQmVMoQ7tPVxHpN1ArM5YSYqX8h4v3FtvVmSQJ8i5y",
  "key4": "5xxoMyo4rvhLkvwNHe1MUcLTg2GGibjPWxPmV7UUaNqoESiQB3vxoVEWhEa5KH5ieGGtRaDjnnMQioUFUru9Rrsk",
  "key5": "5L1f8wUvGBAkHwvRuAwgYHd9p23cKCDcae6X2fLpt2qu3AmqJRJ9GQLkFfN6DArkkFQAa9jE7zkX4tYnDFUSHWRp",
  "key6": "5VNuhqD7VUDLR4EmC7KTsBvsP1xsF5hbf2wTxpzBubmsN39S9zrsdkur4gEzVyNGvRasfispa2vgPUP1J3gFKwUo",
  "key7": "5gfLVYSACRmCcmGY3QVTDyqDXonMRo9gdFWqZTGHNa4UdjfFoEuh1se9nd7S6t8kEczgHvmji4QaDzPgj3a91vyh",
  "key8": "5sTQEZy6rFzremK6C8rC17JSuBTnSbegqvRvmVxyn1ZyfGQGkeAjYYv7EpnFdJwcKYLYWW2CWyuXy3i2VHuR532s",
  "key9": "2yAxqzgoxtDT2eMxXR1LMk1NahFzXUFFaFVZpJXX9SosZTuJpVQ3LWzLnX9DYxC1gViK1Tdh5aFuLA3yM9ouH1EB",
  "key10": "pTtWV4sxLj39frcNwnf8NVZsN8Ca35hyozG1etqQvJfT7yEgqaJdsSpm4Vph4bwAifqE54qf4Nqok8YtXBJzJRQ",
  "key11": "3cFcogitY142eWAxHhrhPuL4FeLqj2UezgpS7iyefFWbL2etZ3ZGszrUeNkr9DhdswwWfFs3AhsTE7AUPsDqrhJF",
  "key12": "3QJGw3tGQoELbKiTv8S854usrLQkzcVuBC4SHPvLYKXEaxtztb83HgrM7YKFphJEZwsBXAFvDBqVRKhSpcgESpXV",
  "key13": "58srkmSSvmoUTDePR2pgnXvyLXoYSz598fdejfBwWHKzYPU1uFSW3YGwnmvTuBAEGNHidrdXyERD15NTBgXmMmBE",
  "key14": "4UCCuyHf9mAyQkzJvnP5wHoBruwdUSDwBno9NhpPLQX8wTtLMqDMDyx1urcMLY3tWcTtGhmEm1vosBNfy3ZBd9iG",
  "key15": "3gjV9fV2KseU6MRyySuUnC1R7YBWbNnDRJuBGYwMFTfWoPL6cwroo8joBj1DCQkqCroWW6P168TfwA6ADQWAbpe9",
  "key16": "MXncUd4ph9k2stDWAfYocAhVacSpxb1MuZ2CxJA2ErQHvZDnGy6s9XgwF9EkavjEQ9W8qTBrMA7UHoLT8A2DtW5",
  "key17": "2U3iBCc4XCt8LQjPukrYR4d7Ymyq498SoDsq3RoHkh2uaPDXKgQ32nHyCqYfibuUWY98VWznzq9CVtCrHdEiC9hJ",
  "key18": "fBQVAFcKGFzue4YnEK3v7qZJRqutxUXgWz3QvA7BgjVbrfoa1cwvyEtzyC5G77mmTsM8qSq6ytjeDjRGHTPL3gM",
  "key19": "2e4ixwHUMi3TxKqhFg1izodYcgFTYNvvSFAARUiwd5mmURAJZ7JNDPaDMok1CrZTDTFzZG1BUvoxeZMW8A99pW2w",
  "key20": "3oJabv7nKnd19xm8Xc8TwmZvMwcV4p4Hqv5PZC5ZDSpzFbFXVs8u6qeRMWQaBdFxos5VePsqQejCFAoAZXSAZ2hL",
  "key21": "35vpcZALk6UcZrgi4WNqZub66j4Q9diibfyKnH9zNcWrP52kWKFVSPVugLCNWDGgeFFRbGVxqVpnDvp9LeGn1dxE",
  "key22": "52ToUVMGQAhgVS5hQdtLYSG9bbYCQqGhQQpT5ABJwvBbNYEQhDFcs1MbDVMgJfxF1nAPnmN1r1kXyFZQtSmCrCw",
  "key23": "5JtEmM1qy99MP8injLvwAu7WjZ3M56vJiuCZKAcknS5sbfeHm9XB1HxUP2bq3BArYeuASyok1b8fJmvCMVbAG3sQ",
  "key24": "4CbsBTP5SVm3V9o8FoGJPA3WFA1Lt25bTEku44jjCSp8wauwDNdtDVFYyMgHGNS3DqK6u9fBWHC4dfQ3x4Pg4LWk",
  "key25": "2BqZnqSKC2pwdsE1LGxe6eJ59HCayHTHDf3uoS7XwvNNZi1NcnM9E65jvHZzb6in5omMTQNb1J7kUd52d6VmXx8S",
  "key26": "5UTS7G5TksxpUmDs2yRcUC8tABanAaQyhQFQLiu8usHHmWGFHwacCiKrXuJ49fwZmJuiRuYqbSWUbTBeJLXoSgtC",
  "key27": "2ReoNjLCNiJWqr4Xr8hR56pqRa22mDHSsmPbuLC9ouBt7D9JhYHKC91FEmLEk333hton7jStUM7X3NCPxFXcnsF",
  "key28": "55PMQWt7oeEZaLJ3bewdRmh5tCveb78S33nNFx5cFnv8UijtWTxaceMJqaLwdcUk1Fk9QyjokPxhjJoH1Ys6hSBP",
  "key29": "TMfyqExsM7es68ppRA8STkkQF2TL1i1xiD1vyjt55699mrfN31KyDw7Pv71TbMyCt6UF2Wu5axnthv2pHda8PRU"
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
