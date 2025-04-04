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
    "4CLeZnHyaKLfFdv2Ys9iUhZABjuJDjaAhyArESCL5vwSkV7q23xG8SLG3iMr8FR79CXp35TV1LvhJo2tkTPSpDgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjKNCTHGXrWEn5Cv8UWxWjovok2nF9teMHxDDPh4C6NS7y2Lr6HnhJBwKjxKg1hTMB2C6EjW197B78sBnkxU8G5",
  "key1": "2DAMkrtsQEtUEj8M3gwVnhGNZLrxeVUYpJeDxNdZvMcAW1oE3KMSHpcngJN8dDxLQuKU8g4R6TMBBXZYkPykup7N",
  "key2": "33zfSFxoKQhvmV8DSKAcdhT5zcmYPUo7ab2613pp1gBPmZcsK9PnQpk1aGUk7sgF56yF3hK6z5HZL8mJjaU4qEgz",
  "key3": "38SbAcWgVqoCBuCdEhq24KHFXwzQ3U55H16YUAMGBX9apWjp8282NE36yW1AJ6Evn9dfi7Xcx4BD3Wig8iCTWcnt",
  "key4": "5Vzgbp8ZkjtnYkbquubtfgo9hS1o9aNGJEWWfk11jhRYzT4enWUnXP41DSUqxq7DwRNKgKtAtW8rkw9PLBHjtd8y",
  "key5": "aFtgssNMgPvgu3AdR2qxeeXAFrCsa64zTufWuxmf63tZfPDgRLe531M4AgFPUm68BDHyMH3hnxmrf6kqhUz1T8x",
  "key6": "2CMtUdytdwJwo96z89n7oDwzt8G99nUMRxKeTUTCgqmwxB2JdWwLihZ4p3BS7a6K27RDvsasKvv89dFGF4kmNisw",
  "key7": "QpB7UKiW5w8NKgKKWiPCXgihvXdj7VLE7gdh7nzaSJPMWE7GEss2F5t8beGyg49nsC4SfQaLTm5VysLNk6GkTbj",
  "key8": "3M62CjHdvRFh2fGHVTZL4WaphQSRATs7RyYakRsTenvA6S3KkHF8iiCK6A87jBLQTY8Lc9X9oHMPB4Yp2uetpTkk",
  "key9": "5ngxJYjYW7XUGnpV69fQX6gx56mH8ipGQkEXVKW7HEJFzURQjAsjup7twiquaxPwdffS8MtXPriK1tjJZZvuR5c9",
  "key10": "29LFJGxBJNyJQLUs59ueTrStSzESZG812LXhgMsedK3u68NRHSxd3CKwzGLfgPaRTsLKVNVp4F6u1t9roCHKjdwL",
  "key11": "4AdbfaCAEKZT8Wt3Ji7EeWcAhvPdXKVszgSbHji2ArL9L4BuyMcJmyyqQgrGxUEqHHU5J9fXkC7b6hNVzjei6FX8",
  "key12": "dAzeYkcemPG2dZ5sM2aGhXXgrVXww3aynk3nhrjG7AJRNnCST6PnAE5atr9YtBkH4s63ia4pBfUKxC9xHHNKZoy",
  "key13": "4PcfXS7tSKAmgHji34Bco5uvZuE8SYhqNANXgpsyppPna1DTCDhV5zxUdQkLd81hNbJuapT67BbiwsFLFQDS1Bym",
  "key14": "4kGsCJKbeN7BTLJJutYt1ZTSBWjNGaRvgBkNQtWu5R1RPHAfkzaUWTQg8JQEGRR8Hu5xypuwpYHHv1Yvz7rQmN7D",
  "key15": "2eGdVaWBXokzCxYXWGqf5pwoH7DNvH8xo4srSkYAvkc4AzFFhRR7SmS2ZZRuvUzcB94v2WiUka3JXvMHN8fMcMhT",
  "key16": "2k3Cvgv46Qdzsm3kLMvHCtP9iotD2BuHWvtiZvZgkeFc6z6ZTMqzwGWUhJHpCjYNXzd7HjZmyTZ7eHQiWxy3sUDr",
  "key17": "2Z8k3KHX2Z2BbgtG4NRZTiim2Qe95vQPp6z4JwidQVHrRyWkfYPn6np5PKqtZpLUtUvZrhNpYTfAK2oQ7b5i77wo",
  "key18": "2ADupR71zYA5SWDzhhk9U6B1gVTtLUAKjX4UMn5JYR1hQGRAGRvMEgPK78zhbi2NXEsUhGF6tjrvBzYRZvjQk3WK",
  "key19": "5sijhrHgjXGQaN9bYyL8DuZyNhjdSYfMfbQod7YLzA4QkDa91B1nfxrLxQmZhq6XKpuAc3JrtiE6HWyXmi5HDWv1",
  "key20": "BngVLWbFdhv3jAo9hhAeobTnNTLgmXC84TjCovZ9r334RET5hy2v8qcnoDb4Ke4Ce4h3xj3NVptKsHY9dGtN3R1",
  "key21": "2vRsLrGmv1er1Mx4dMPtrLKtvbp6AzE64LFZFWCwyWbCqzGfee7bE2aQ2Ccozb2HvHy8XKcNsNzXtsrC41HVwpPx",
  "key22": "4VxtnikfvDBXoCN9AEvQieBnS2RfuXZQLqGJzzWqUPjrdubxfdXx4usRQwuFWDHNwNy1wRXfERUgUsEduPdnKkTg",
  "key23": "3a6MsTL1A8CiV6NhEHbfx8DMkZxuHdM4FtEZDeR4k2tBtN3iFVTYsPaduYd9JK9ybHU7UPyuynrvZkCDc5ix7jUx",
  "key24": "5YBAhqtY6jFAC5vodhE4eTfxWcVJ798woSB8Qz7SXMP6Ki4rngtmisG3stsfVChjLvArkP31TcGdCJq39jchRTB3",
  "key25": "3rQUU4vEPmkxzr7hCU3HTANMRu6D6Ybvk6iZ1YQFLBxv7xRrqNgyM35Fu9sTTy3bZwisuviyrSUaBpWTLtYS1dPR"
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
