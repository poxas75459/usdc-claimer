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
    "495M4VHxocMdwqQo3RUyn9NSND7KardCWo8ZDr3mp7TZBGmts863eb9e7C5Riv213fgZqieD5P7ftgsUWJ9AEPwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dkfdcxGSygVtjfjWJh5sCj3KGigo864A8QhWULJV82eCZbTwgWqLymF9eoyDm8yc3ngR29qoSbHcKfc1N7v5pC",
  "key1": "3hxCg7fTXUGtiyJymmWUqA7Z1ptVfiMZkJf5DZA556WHKbbfE6Xg9JuiG2nGnrhiqajzNERfP7zxCwVntSPZvobJ",
  "key2": "5RauQ4A73xuGmmFp8LjhvoJkdcc7SYcu6aBqnBdqSB5w8iY26KLMZVBv6ZaJXsC5iYsqGhw6oTQjPSxxQvqFi5FQ",
  "key3": "3XAauCTgamU44dpnvB2bREDyTZAmZ1e5YkTPN4faDhXrgfyz4RaLmY6fzmvwZC5g51ciTtYY2RrJVn22aK2gG7ng",
  "key4": "36hwqhJuGr9nHTPjWP9pVnUdNwqdk6gmfGHpaPgPoczUgCkgWSvjnMJFtAnhrZVqybXhiX4i2D3vp3HS2nsdKLan",
  "key5": "2mpiN4SdFxcXyaZ1ewL91XcgymyNdmH44rwzf9q94qEvrBJAwKQ7Nq3Qoy2iKGi6ns46NjyXp7krUCqaKPxZPv6r",
  "key6": "4vTqfPodsVqNjuxYUjPD8qqsnaxNfdgKQiGwK9vMYeaTxM5GSPgFodeopBe7vX8vz3QFf38zcc7rqXLzCdcPGD5H",
  "key7": "2ncCupdaHoQ5eSbBUbrin1i5AoVEDhnKwrWpxeqCth5JYGTCZmotWr5GqoHayDiRVHuiYr6hTFzBvTEtYwe62h3J",
  "key8": "4cHuNRM92F43bbhi9uubDKh79dSk7bfC4R5U583Vxy4hwXUBvmCcbZoamnKhY5UxtJsvBvTJbXUuc3Ww49A6Hq35",
  "key9": "ukaYuoS4MSqDxbPYv8FUxStVuSYVaCP5P3oyMRX2yLUcNP6RpMfwveNdE2wiw9CncavZ4uQsFwZqDERwhJrq5Hh",
  "key10": "5MzznJ4B3x5hm3SCvcy7ymVPX96Uer4E781x2HJpFJgupWEHwY1Pyi4zFhn7a1Yt7JJYgEXh6CzpNQE1y9CQLHjL",
  "key11": "5TAx15GBodFf5VQcvjZg7JDNzgn7sCJMfq8PYtzkgyCzgRqC1bnb5nod4LnTJhHVfvCBumPquaU2Wne3rWqA6FfJ",
  "key12": "3qckbWZT3E5dSjC6JEcHM8mVcwoU622gr2YWmgSc31ETegeGn8AsQDLktjq2GPwK6nQr6g7omb8k5fCH6kficYYi",
  "key13": "5FxXuhfUEK4udxQW2b79aWjiwprZqcPxby16RVuJWe3wueM4i4CBZdNmDJo8F4cVicrtYG2V4Pbe2feo8dTdZMFJ",
  "key14": "3T8wj1Xb2kp62jK8LyYk1UAdWCWmN75mqE3wXVDMAdVb7wSNPSvAhgJNS1fBMnkdxJvxDAwFDgvJteVZZfTvspm",
  "key15": "48FC6dEgwNXJqghr6b8wSyuDXaCSsUUFkanY6ALHyHpmme7ECGGrqcydtkv58QmQa3ZBw9BzHsAKd8EjVZWYNpjq",
  "key16": "2CAzAYfUS4zH4K5rLraQb5KVvSYmcSfBAv7yzdxAnumT3debZrm6MMLkdbNAGu7fcqhxBeWbPBPLwuAoCwi3SRgF",
  "key17": "4Voh7HAKsvSH2Q6NVfJvhFGYsEpixA6ye41o1K1rVQf9iM8XrDT8n1Txza2mReqoKtsATJrGXQAMSPgA82wMZYWF",
  "key18": "4FUJu9ZFSsNMaVYrevxU8Q3STVcBEUjcJcF4SQn2CRn1TNKwHc6apSCqxQRDJxgd67as4WQjm9vQfqWyLeHyc5vo",
  "key19": "5cAEzVB1pswwYxL5FMM5BVEqjqDNMD92ZQeQ8Myhaydkvokhkg12oBieMyiHFaT4mzfMehV3MEqsAr61uD46SJ2Z",
  "key20": "68xq3v424aHJtsKZopLB2vCNRMB7dyGGZEt6nPjF9uBQEufUZ2xbPFociAWhgTqi839MCeAzcmpfi9njTngaRdG",
  "key21": "2mRk5BrFw7AjPHuHEYJZWSavetPnooXbQk2dGJJHdKZXpJbkbChdvhFeTcUFwgBPtJ2GSAcgvSR5B6wmJRfT9JZe",
  "key22": "61gLBBsXJrTfEJT4y9JaUGeFDjvLcCk3kmbuNeMDmtBKmUo5nCVs2MN6hY8QJ7Qne9Lc7EFsdUwRf8voJhB1NvU7",
  "key23": "4wRJ1dLd3FYhkjMYKbpaZ96xVgMM5BA5EjwQKtMxRKhGY5hAqXothi2tpdVoqs31rmHrYwEhG6vcmiL6pk7qXoAU",
  "key24": "225uLKtS1f1fN9gakL3UUcmoow51teaAVFG2BRrH4psmjkm3hsd9mj387D3RZaCgWgD4H9TV4jfKCiK7qazDrQhr",
  "key25": "2XaiHCFyWXThSQYdqrMhLxhFkE3GokzNXvc2cDLDzBnzAkaVTgkZVspAEJd3gGJxuwnHQsCUvDdvJ1iRkcXci21r",
  "key26": "4sFAmr21quhLJ1oVV5BPBbK3SWJN6PpJxwEcvDTMApFDqNW4wFmecNGvFx6UiyaoGjrUQgRDULpZ3JgLE9xAR1J4",
  "key27": "3KHQ7qrAH1DBbQhsnjsVYCuW5VVhj69gHQPzL2vP64ZcuDFTd1Wr8DwAjA6HSneV1i7ZqcVb18NjGjs5Go2XaKiH",
  "key28": "2m5J5APYE2nY35JDn8s2eyiSJhRTDkkWHYKmAnVUqGSLGQQqFoRBLqCLP1jvnjaUfRPUCrw2pLRHgT67aji1QqiB",
  "key29": "5T9nbwmzEshM1p51sUq9fhjubZeKY1UFPJrPpzQPe86BRaicp1xU2pHAeHMSKm4StqMM9cmUoH9aHmS1V1jSEsny",
  "key30": "4NontdsQzgpyHahqTZkh7rmkdp1FNN15xBLjg8KWZr3Vcm28FExzd68s7C5Xaj1cvdhsmdE286x5kU769gNG9KNy",
  "key31": "Ko5HjnuTTtkjFEbiCLkBTkV1kBtBrTm4thRrJPz2XV3QRrvcEvXWsgZAqMLhfeM9ZRQaGT4bGyq8bB4WMZP9z4n"
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
