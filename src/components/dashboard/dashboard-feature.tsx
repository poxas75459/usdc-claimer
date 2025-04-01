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
    "5jMwkDstNAVSGpngNzph5yno2VNsiaHUVDtC3QpwiR7hi3fwQ5FK7reYQdRMrgPUUpNW8m8bpRHpSQ3jJWHy4s8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqvrqShtMdWmJZmiCWRJ88iLAMudtWhaJyg9Luk4zk1GvLWKXBAaR4ZGFXRxVgt83QnQS3prbLe2x6PskZNuX62",
  "key1": "3JtsnKbP1Cyiec2fCHAiTFgLpULxYVVWc7odZoCVwMcuSZ39fcPZx5ByP17hhdQswa622V7Y2MeuG7wNFCWVCQGi",
  "key2": "337ufPxrDcgNxGx7Csmf75kigEMGTxPVBbjYUsjVc7mzia8ScG5qnuLW8j6kPRSbJWTP8Zg4AAqTY8HQDdXx4MZG",
  "key3": "8BCueaujcXKD1GcesrLUzhUgukPfXKmafxrwkUoTxeQVjxchNsWd9jw91g1azG9MKjyQK1uPL3fBhDHYCWRVkbW",
  "key4": "3LmrMar5euc2JV461yV9dJjJYtBzMRwKkVeVBF1aKPag2oGZayp8HXsR7MJs5HVasoi5D2SvcEQN6NSEy3djJh8M",
  "key5": "2kdLBqEZBmQFykYF9aYmJFYHRZ9AuKGhmU9w6DX7j4cuzKGHR9DQ51qC8B9nx1b2fcmNquLzGJ7FJsAANGZE8LzR",
  "key6": "24c36e5DnWEpuL2Up1z8uwJ8e2MHZ5FxfVybGHPeKbqVfgUUVFRU9RNRjMM4BMCYcx2Ec2rL3QV2iAWPU9GGuf67",
  "key7": "2cJM2BYVxWRbJ3mD9QpzknZ6muWME3z8JfF7bKKbkUznUNnUkjU5UXsX8nydeAw2eMLUDuD2Kw9W49x8JxFJDywq",
  "key8": "2EsDQz82A1C8m59e3xECmvHLxKR5ZuKoNfJr5VWXGhdiuPYsoAVwDS9QmcvUhdmn8juyzS9qyNgTSEmyaqM8RNgP",
  "key9": "4BP9uu5C2ewM67nPUbbyVHBp5wHo5KQWVepxqU9G1FTEizr44bKFxN7iDfsVAPHKCzrFahR5f4xdxB3p6euHqK1F",
  "key10": "eCdXs5zjqmBMy8CQk3TuYUyTUuFUgYwBxeS7YaNC6hKDpXYRrwV151Wpzn551rfhKHRnbqvh5myXsUHSMNtx9pw",
  "key11": "4381EMCaBw2NDnfgmYMvcCiy6eKm5mN3EE2krpcuizxHWqcG7GEjwtxTcXUzSNa3rdLppCyEyU8SKdLpPER5S7Bw",
  "key12": "2sYQbNNCqjSedFoPAWDPT34GFaU3RGWYoWnaT9JBaAV5ugYm2ShTHMSC94wWGWs3j9hcgBwrkrkCRqdkGsfvp7Bg",
  "key13": "3wirccBHaDiaYkq4MjmXVDdigT2qYXwE9FhDnAgS4xgV9m2ZiZaMq7ECUyEACKJxxVRVHhuDxtuLnWQgQa4at9B8",
  "key14": "2KsLEyW6S9FX2rHdZrgrLVKcfJb2wdrT93v42HpUygMuh37oHDeEKgC4dCHoikJ2vopQ822ZE9rmd4RmfTTSTxvi",
  "key15": "3kHtFDsv5VK7yuNatF4cFPsfCUmc8vzbM5tbCbD7ZDvCqfHMnWbLGv9CQ4Amni43Kq9TxYh5NdEwNuYJaFNyT4Go",
  "key16": "3FYUKzryuQYSM9FArmuiLah9JPhTampHLMg9vg7hUkKAm5arwgMFuRzYXq9CiW4f2G3YjthKyMC6VKQ1UJyVM9cr",
  "key17": "5ubSXjQm4161iJS1VmBUmS87RLjWhxnkSLj4g58uNsBcsxTjbrm32Mm8Y9fKTZEY8QYPBr4paGGYNFefq7vXomrS",
  "key18": "3qsn74CH1jF44kc1hcDgMFLaaYsfFcNLx8Akjc6pWn1X8UJ8wbaJ1gFjEPK1VQoC2VzFnW6bU22Gst3KWN2NKaQV",
  "key19": "LuCur4rKJDQ4BpfJtxM7SyHsXQEmneiVb6skjkCqeHGdTNrEPRak3Hj6F18oH2ZMsPtc2ytuX5APL6Eh9e4n3Kj",
  "key20": "2gmqrTBj47PDX3vXP16a2W13tK1J6CWkWb668sxWrSmxoabf7tGNofss4kGfwh7dXFcBM1rJ8RZrQAaPxVbBTcrC",
  "key21": "2Wsvo3PygsoGeKrfarWw8PRyirFQFauh44oTdMAN6ADV9ScKAqn1QJvH3JtTzgckrU8Pt2qEkoyfNEhCYC6QXpQp",
  "key22": "2owjL2W4T81URHx78gXiyv1NzqBdwYP7axZXRkB63wpfmX3xUU43MxMe2hfbJq6tQ7jWcXU58KLnnTvDVuK2pK27",
  "key23": "gixheDHHEhMGZ2ompLh4oDFbKbZAi9sr1nzUDEWQ5Tc4Hd6hkikzR9nSDN1ws9TCj6kf8k91ULZK59xrWHk4dYR",
  "key24": "2qjgo5e1qpx3EUWjpaHS3Ann5rLirfwRD4k3qu6iN5jTst2MTnx3DWPJ2iNb9sDGAbU8TM5MMW3KWwfAhPxSF67b",
  "key25": "396ciK3cScBGiG9mEt25ZaH4N2VxxPXGfwfweJyM7ZMCWRtHYMBR78tM4MLupvcsCuXuUKCbgWYxtsKUERkdzHk",
  "key26": "5BsTSyPc5uWSyHjwKPrYvsxbScScXpjqMWz5TExY2YmTTSqWBCsuwgvxVrxCD9k6A5BU4db9DXsKpbDwHTJ6PzD",
  "key27": "3gcdeFvGpHmFqwiponfai39FcrtbAukwRDpfhgxw1GkggC1ZqN1TLzXakFeQvL8ns4G9MFu7YmX4DCvFJfo2iz27",
  "key28": "PKhTx6dBAWKVEWAnikTdTjUmqsZjDEpSb4KpGbsR4HhuwGkHdgmp33eT7Zy93WB1Aeis9bvuNVwLkMco6nWwuAA",
  "key29": "65AtjjUU38NWuUpxoTcp7hNtjSNtLSpQyfktcpUdZ96MFy2JPT1zN6vcZ6ffeKh6UyiVR6asUvdQguiVdpFuQshg",
  "key30": "3wjoJPWhKXZtPmp5dG773HNwMqZot9pBv1SApmVMGXLe3nDR9YVGfMLdSbmQ38wYoDYtt18B79ii7Uc9GGujyxsy",
  "key31": "r43iRj38zyGuLuSxgX3HgktwFsnpWmorDNsX4uKGSeU8k6S3Pb5XFoL7W3nYwnG3Q8yQhDkP38k7PA5VCgpuanC",
  "key32": "4vJB4DUE8SP3L4tXX63CXZ63F37yEQZvGLsDEonBLE8e348CwNmcCanVXkWgweGgm7n4KQkUMxkvdCbBXeNamQdD",
  "key33": "5Zy7h2zzcCR45oEg7Res4Bwcc3mibSpguyue2vjiZdFG69uMrDoKPdEGhx78n4yJ23QZGX5ZmxBEj2bYhs7DC7yy",
  "key34": "448foG6gPnF5Td6oSqFQgJiD9F2LBMBh3W6qk6KeK2Yf5oKfFvEkkW6WEpsk3nUppNTf4f5uDaxTBe9uBdh2JocS"
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
