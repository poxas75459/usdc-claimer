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
    "5aXiPw2TAK1z5bWfLxUj69VLV9qLS9eHsp7c1fztaHzbwpF1JeRdeH1KNVaYuxtChxbdG4B3hpKdYnSRrtM8XVrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJadNasaqPNYhnKhYe1BcM3UJQzh37P4sPkZdJ8YaECRcgpMxiesppHjTZvwFGe5zEm81ikAR4oCN2jeGgZhNy4",
  "key1": "47EbF2jUdwpMqDkmmZ98dUxc9MgxKWv7KLsCC2dzSABLavCeMz9JQXMkPrr7pBdSrM2GpcY3aKYEt937dy86KL5j",
  "key2": "3FLVoX7ZctzKqFAGbd7cnD4LnxMicXM8Hmk8qa18RfgWrRcdRSqr5SnJ9wzDtQahhzybgzAj6NKBvCkiBnBJfk1a",
  "key3": "5o8H6eoUHz4iWSau189ezDzyd2U9VN1YbCFitq3cWAFPU4nC5dcut1HZxEbpmrUnRCwDBCJYRUgmrVJh4xxGNc4o",
  "key4": "5ixgr8cxdsSEgL9J7aeQ8dLSxfLzMbJEu5YaJie5DUkDpxa3FmkJYWemg9KzTo4mtsrPnprynavphCr1ZiwEeFRg",
  "key5": "3HPnvLNLWjeHDtvKthGnENifHsNBWeit8zQpXcNmdRPCXeG5dm7367weLAqSXDctZZ18NwdZ4qi6WdNhbYRymVaf",
  "key6": "4cfQqSCMT4ULELW3KM8ZhW8Dru112QWYdBAy6pCJ9hk2Xa1nT3AHX3KKDxPzZUVNKcdyvdsy9JVTrX7TKsZR6ndk",
  "key7": "5ef3XQvH2F1EesFYXM2wbBj5qnfgJYcfPoV53H4ci6TkjvqpjaXQo2Ffy27S18F7Ey84bpEHcrY46xgB4JYA3WHd",
  "key8": "YVLwFR6ChDTYN7NGjkPohNhZeFUhrLMRyh6TayKLr1saTBk1vLG7Q3rN1ZCkpnaE1gyWmQrv36s542HKdvJzpqp",
  "key9": "cKZxcDfqaEmVpNbEJpgjur2FrdqErYgkHGAbyVS394zVZn6RmnVWdfqyHwFuXhg7vBSxerof7vuMCZ9HSVqkYYi",
  "key10": "3bfjRsLHTYCogPrDCXhZnXhakVKemD1qreqB3xMDsoVER529cnQNfjpEggqem4W4hzCzxpqB1nEh7JAmfXMJHM5P",
  "key11": "4SroJBhThCKg9G2WbEaitvvyvgDz5Nu4JMZB4BeUboKXiN3ftFmErFq5CUpUA3F8tmkPTBynDGpoFg4yhdEoVb5S",
  "key12": "2AtUtrqTi7rTuCo2MaADPwWhMXDGyfKcdqpSyc1xo2vB7JqsBQY1NvhJCreukN2RCxrwnWp9F6A6iNETxAffRi2G",
  "key13": "oKa5rCyxbqDsM9a1CZ75Fj9i1bvgC1yGjiBf4DwWyjWTseLK5x6E9BPLzhN4b7WK6gtsP912tcpjZzCjHsXYu4c",
  "key14": "R5P4fKoYPBxNZs1g7udKQtjH4nuNqhK2AvyRaMcJSHeaRuyFL73gP3yZ78i1NxybLPPMYxUGsEmbKAXyhjuMgpr",
  "key15": "3N2GzafjMH87G3GuS2WH9ZbYkiZiCgWTmbjiBoWjGxFQLcCTs6kyrMz8ZqtzxDXXeJLVRgFRTCFNSdpGpZLDmf4Y",
  "key16": "62MKeNUjeaFNYZYdTdmB8EddmE7YwdpvA7ESbVh2uUqRfFfnga3v4ZhxJZ5T4EHAd1vxrRJEyuojtGJSvcwEzrg6",
  "key17": "Drqpfc1Ntiakb1KVttRXoAy4zenFUdqTX5ZkWyQCHrpMy3bhBou8f9UJW1PivWdXTyh4TfyB9CDx4FQFdmg5WHX",
  "key18": "TMs4ucpaVnw7HuA8DjrFWeD8BF1Zum9zNZJJZLzZyCgYpcWfoDN1LYJsqTPpMTqaiX7B8rqwEwoasoeEToEyFSd",
  "key19": "qCEucZhZRWN4KjbSvmG3xLbw27cg9C4gS2TzySWcbEa6BDeLek5ZJpACFUJghwjCGnWGc5CPexhkHuMu6GXYJgy",
  "key20": "43cFAFFaeSdVYKCpMwCpxruGnBCsgr3GDaE6KDr6N46E58mpBzk23dQbNtMfajFLje1g35E53KRxhZ6LFwCRFrYa",
  "key21": "4pA25Q6o2To8WpEAFT3thwmBhrmJxFnVgMdX4MqFWRrGhK2QB139XGmwsqZvaPx9wXyF86yuqZWeaxv6GzwqABqG",
  "key22": "2asfrfxWJ593kfpzMJeqBKtNNzAVUrL44WKwv7en9iazMnKVtnP57LhG7VLAzo9SPx1k1DGfQfgMhXi9uw93AsTH",
  "key23": "5PcXiiGEarN8wGTsjcyX6cu81SYMQe9BnS6AaA2HFNc1zb2mAG5wcySanwr7ARhShPAh5e629bkpxf262s8AVJKy",
  "key24": "36Hvd92pN27U1iJAxCLvop9ZG6J5c3ses8yGYbsi89JGjk9pcp3EECFKD8jKs4i3R49q4W5hWJuQMSR6hQowLFYR",
  "key25": "5y4x9hcDLyFxdsFD9b1RNkJmgQuDmRsA5Ms7nSnZLPQWTTqWdGx1XTPuLLE93TibkvRiHD3oFGzMtbB8QgtD55md",
  "key26": "B2Ysvo4NLDeNuPMgMnYWzNHt63ubQeHNnPe6dTjnSVc9zRzXhMNVb7oBD8RjJtXrrC468yzf6GRfF1ifdd2h6Ya",
  "key27": "2FQVFHBihDVzTDmbSSBCrtTRUxfAPxHjdZvJmeKocDUgxbQRKeBwbKx8YhvtFKkxkvhSHiM673j1udcKAGG9Zyrs",
  "key28": "5LAkWCkeQRFcJFyAveh8oZq9P2Sc3QGUewzpWTyvHrQYD2LeC6ZYxRnDZj4iBqquTe9BNFjLKeGFtwNPqX5Zabgb",
  "key29": "3or3FuCQjNiRNuk88MYVJvAhg4osCiiQiwJ5V6d57BpBKjTP1CDu6kNfQFjgD3AGkuBcE3PFw9AfSoB34ybJ9NRN",
  "key30": "2hz1s6rSu8HSTzdq2UdGRxXVKe7APWnTV3DcWXdznU2PsZpBoAhj1qwwm2DcsrLBuAEjLmDT5maE9PDbd2RAXobs",
  "key31": "54GzE1MQCRDq4pVYsGkzBaRhGSZJsCxHk2mgyYZbXM4pU8SKNdoGEbGihjiKCjDiYXUTni4yxTPJHEo5hfbus8mq"
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
