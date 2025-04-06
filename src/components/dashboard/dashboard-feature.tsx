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
    "3uVrwPCn6N4CfLXPQ7BgCrKA3uPd86ciKFPZAkKnua4RW3PGnw8QEk7curuLiKJdaj5KHx3Lpgv85pcaSEdCesB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jx5wxtrJspq51RLqrGuPooTtnfCHNhCeKPK4Sprvmcmf5dGoEZUnasw78LpobAAzmryg4pkajUuboNfC8qfNp5f",
  "key1": "vdCkxHkiDDzbZXKvXZNjXnxE7d6MppfoD3exqpHPSFTEP8gVJPrioaDyYuyMKfR5az5NWJgykK5qEYvyKbgPwWt",
  "key2": "5snb32GKQcgMd8TvQvrnjoxDajrezPdoBTbRuuEk4DFVH1eEGniqWwFYeHkW54gzBKduP5CMJMyrSfcjgLD4Rp8h",
  "key3": "21bCaknCT6UjkG1jLQ3XeD8fCEMtQ4FgdW1VbVdRKCVB6hTwCjwDimrj7nf5ZyfGecwJZcZTRrxgaXoyzsYcfKsy",
  "key4": "21V2g619aTbJ7NRhKH9EHv98HeuU3nKkK1RMEXAhmjDg8XwG6MtmcpGGCALPTsFdtgYMF94ESPcWytB1kkzA5Et4",
  "key5": "jKoZHLU9V4qMNqCR693RwxAYRrgbzrq9z5L7WowRrtH6riQxZDDnRA5CFyGpaR8BPqhvcJdDNe33hbj5jt6fGUE",
  "key6": "3XJL7eqtVBgLUX18ab88ZwSy5C4ACvxzf1d1hvofAMDmtoK5yqunsmDvpauJ7FtJFHiC5QcBS3FbF7HLdpAT41E2",
  "key7": "5x2ZrbuBvDqGygwGtW59weaBAhfWSjKujgUVsH8PWDv9AeR4ZPHZ3WW3CXTiwVGpaNoUKZKwidm6tienNSfQokuP",
  "key8": "2w5KSfR56PKvvyhy3yUxNYbGpngF4LoWuwqe7pWgb4fvh4SPCWLqT36HUEwHNMDUD4gVGaybfyvvrcSwFFUkKtQY",
  "key9": "2WrxEs7XpDqUnebsPqbVnZkgu4YuKZ3YDVE4A5vrcbPuThFVBZGFTTmq4kN9L3viztRQGcmkonrnFm9eftrEDEMQ",
  "key10": "5mhSt9o7QKc5ovhQ6AG7CbJyUrmJbiirB1XFUpqz7hDD65tSEpX4Vf5YEaoTQfSnQRHUUJspq5KHPAMUyV1D4M9D",
  "key11": "45wZWoowzc9zCUo5EbWL3wLY8eGa7tw7j7BcaxuFJj7hxGSHBsMA4CwVdS3T21pfGRZ8DQXDTFv3xfx5RfHq4Y31",
  "key12": "2sHMj6YHAfJgYk2BMkQvmRQbD2sXUqb5LJhXYt3eMj95fM5aAYdndhxeEZVwDo2417BWcBvsJ3tpkgLf55cqfTs2",
  "key13": "4gUdfkrNRf9bV7TEchFwAdd6uot7iicTT8YLjPTj4YFuAVGMvPF8AKunnVJGeHWMRZgF4eJXoGyhL5Ws5ApxtkwP",
  "key14": "4FdguQgaKDAwj7j8vDczqhvyNn7TTnyD9fk8z6LmtKJgM2g1HwNbmJuo3F9YzDLHYd15CZ4VgfuqG2j1cUQQGkbc",
  "key15": "iFLqXziDjkiPPmLHb8Uk57eSVL4TGsumfRifQUECCRNwQR8SE1Y7UUo9fmCjyHi9ceL3vGYQnEGRimkAkpdKXTd",
  "key16": "3m4eSoTzvEYYUsKQ6YqvXotBiMBcuB8MiFXGewEbRVsGHj7DNoW87CAKfFQKv4LH42mHdRknra2bmbPm6f5bZTr",
  "key17": "5FWuBXmpT7bCwaVjbJpGEG6rMtHP73ZGvU9yHB7NkZsvQYQz5YLqzHhehwmw736vGcbnJGJrg2UMge6ye7WFdYqz",
  "key18": "2fQzm5cTJWyiBerAbiuqrJvBHHD3AbWZU1oZPcu7uF3ixdNLXyxC8N2J7nvMmgvrg4S2zJtUbwX7yQxhJyBAfSHG",
  "key19": "4AESLJXm7m8Pe4mtXyb7cZ7ZSTLrf7jouxfJByqgeNa7bGcP4gW9nssrGvA4s1QkXe33koCaXNn44Nyt45bnoUXj",
  "key20": "4dUM93b7YH4NLSmEm7wYYCmzCWUBTd38PHuLmS5CByXvDK7HGZcm3z3kK6SKH7SEBqLJmBgUU4sFg9VkDqoRZo2K",
  "key21": "oSsy1HzoaqHVbZ8whjL9XQJD3L2z4RGH6MsaBzozN8EFZPnSkpyaxiXo5cUMHZ5fz9e4n5KTVFv4uDgyf7r7avD",
  "key22": "ED9MTsXXMwzxXCwYas4FcFVyba1qmB2Gs48AvQsi6jRJCLcbxsbQQFWtds6Bk3Qy4f2yRXcTu2kF8NNYdwAXgH7",
  "key23": "3kZoEjQS2CBqVHAaX634Tf9R6FwgmA5bAwwUsKm85pi7ng4SPRZ4Nu29ZjxqvyPAxdpnu9yfe3sayB1qH9dZtPg2",
  "key24": "3Yt6mEoXSu2oxyNBKvXzTz3auMhrqXZr7Kn88ut4izqDzZZDXzZdjwcrVNJPGFTHmFeot6RzFjLyLLd3ZVJMyCC",
  "key25": "49T4SxN6AwU5CwTt3qXeBJuryofRtCGrAfNTQLEoSpdLWso4g6Cg3aeNUqmZTR4jzg2KrXjw7CRCRPZcisfTQHMx",
  "key26": "4XarzVFQrTUrcGWwhuG6chVKF8CPDEvZ4fG5BGZ22AnLeFfEkPPRzXtN4CaEiPwmLRSH2UYXUGHho3QzADwpoV9h",
  "key27": "4gpARGDvycFcQKfhDHJzwxZsGck4iWnhTqKxuzWP6XwJ7iESjANArxxPvLXyzDQsV8CF1hYZRxWYNFWYG1QXkYmU",
  "key28": "4ZFEMncW25eEMhaZwEAQg4jrVMzgP1VmpHY2M1PKoKmn3MmLBxUy7xcYwsCbKucCtLM6f7MtLEhwupvpSQqbD6bx",
  "key29": "5Evy79fkP4zZSDi1nCYCQdv28RX9cGZbJMpE4itgvhsr9C3eTw6DimSbEhhHXkL5nkFq9ypNzY4xoMdbxSjfZXNY",
  "key30": "5EEcTTr2pC8vaVs6kUmJmHL8424i5jMCRrnzAH1kuBheoevNfWipDpBUusw4vtFH4bcnm2Qriovy8oBZYK9rbLKw"
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
