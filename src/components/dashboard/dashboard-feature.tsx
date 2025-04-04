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
    "2fxM34efvEEFS7XMtHVWMQD1DEQuexQ4qMhXwTw2ptsRvyTDywZGURfmfMBHWbTd7EaJHDCHRE842GbY3ztVaXm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgBxDKJteTGHngDd6DzdrkAKBBDawQddzLQoMmvAdCj6N2mBKzEkzaYBid6VJNMqXrEf8MPAZTWu2jVN7yQh7Ri",
  "key1": "XEB6j5vq72444knR3DJSTYMQQBw56QebaQiuZkqfbTbp42p2uQw4rtsi8xTssp8ufsQu7S9cKuBTeAancUmkQ3N",
  "key2": "39Hs6p52de3bXJd5UoW1uF4B1KLU7famiPAfGdpYoM2SKYj8oUt65iPXMYvqoackVc1yJpk8ocSuwrL3s7mYqTWc",
  "key3": "3NhyJkHzFakPB7cv7uVxGqQ6FCwbwzq7oGUYFFJDqLuA9NpJpZiMRoUTD6ttWCqKby2vW88V721VMCkvzoCdAg2A",
  "key4": "5WBc2JsbHx7BgrSxQcmEK3UbjvgApKUEA2M4VFrBYCisszJYCTXBk3jY73G5oYBAE4ANhd34Cj1WTDiGK4BXE6fc",
  "key5": "42T38vQJNCcimCZny4jvTeoSLbH1NLXQtMb987KHFQbwDPjVCKuWSfXUmC4vZGgQE9citsQRUEAhYmneieqHbxVb",
  "key6": "VcKLgWnqRmvAqoNw1BXpvqo8n4XCaJymiE1oiMCus6g1cXu9F1o38CnJCUbFQUpA3KYkfgk4E6JjzJeY9qCJBou",
  "key7": "i6To1haaGmeqYrLfTV6ozJnVsymfjT3BL9pg3cYc63MaAmZufMvYQPTpGDcHwQ65uz9QZ4m6o169fJFVWqzpWGh",
  "key8": "5vBSxb2JSVHiADf3p7ZrMBG5ZruVeP4KhxzcJg54UoXSdoy2mKKXtpKcANaMYj3mMXYQUcbSZ3yxYNRLu3ukYAxA",
  "key9": "4TzJ8vm7mE5EVTZH2UNaEou4VAaapsxNUeycrffH34BhvGh361ZUUagrS4ycEXG3Rb7N4XhAgm1WH81zT5H1UTmg",
  "key10": "5sEF3Ji5pzya7xLRFpiEQA3t5LAkZvCsPnZYxeCjQbeUCRhe9y3S6t7g7RQbQibAHzh8ah6oRrns3Csv3DR6Sjot",
  "key11": "34V4PmDbAcTXs61CfyZX6dFixEsFmQeYoHeQV4YsyvY7nVZ5gqEt31JCQTQ9f8bNbdKUu3XJBNyxKHxoFAYiWTK9",
  "key12": "31DYowfPBao7vAJPKRTuEz4NkN1n8cc6rkWkQ6FuKtHMoP7yJP1vCVYkU5zyU8Z5FhJU79XE8g7q4rNKoZ3j6VKY",
  "key13": "264yCRNRTV1ber6Z4zTZLyiEaWrqnPA8knhpS15s1fJXHvSGv3wuN6rcTBoT8ArAtPZJpGDpuNvhSkSDbZupgXBy",
  "key14": "4xk2nf4XeWcZ8GiZZJg12ubkf6oQ8VVC35to1X4RfP8L31Pag9XviBViv4wKZdHso57EFdrVJQJXXZxrSDL58hWo",
  "key15": "415EWV96F4nUtjoiNUxu2oLP57CuC596DifQrz5gejtoTitfLhnKt1LtUwN5Tzg1SRPpEVEdnfaTCxVDqjTJdPqL",
  "key16": "4GRS4fE7cRGDu5WuGSSxeSJKzWc3mPXXBiqotJNyrTBr74gY7CXhzz5uh3rJ7iECF8e3vSytgv2ZaVnZMD1PBqWd",
  "key17": "2MX3XXv1NVRJ2SUtSPqs139oj8ADF8z6Uu4tmzMfzCzB5X22Y3fTwfvP9Z1XRKRpLwPfspWMCRsy5KykMhQRbiGJ",
  "key18": "8M31C3XPCz2ywaMuw6ycSw3fXe9uYv9pQVU2m7UTMe6fGYy3SCNKe1cWBZNznBSLRqYvNjYPKWwP73R6qwNfkkx",
  "key19": "jsszYcwMnd9qeVYawB7MzpwQSXHgn2jDx4TrkuCBmPWhr1u3Ugpf2mu8BuUHXWELuVryZVFg2bz85kZfMf32tkd",
  "key20": "3Chz4YL2HHsf6aAXZ9teAbfmDuwcimsXMD6MmyC1YAfDt8iKd4r91nqeG9iPuF4nbQns2QwVaXPkuwkCQf15ab3j",
  "key21": "5tyRThqKJpbgVUgbECuYBmujjMDCWLcaeDpdBg81hM4SudarGdNx5Z2oFEs4iceft15v6rututKPniygr2NFsf24",
  "key22": "2N7BMMU8DoZ6pdsW8Zsarcn4TPznPotGCttxXLup2cM7UiyqscpyWmVSzKMEwKuxSKA2dwkNrjbtPvXuCpLnSDgb",
  "key23": "2sm7SAaq8qAdpp5aAyqTNngcEGg4ZJNDH32JdWZFr2Gt6La5M6AzLskRXKyxNGBrkn43N3kNWeP1dYbGHYjdStpc",
  "key24": "3TdpYfad3hBMaLXbhvDCYBQcPhbkeFYJirs29LstozDx4vKDXVCm5rcfXoAAsZJGu9JfHj9MRc8YEK1wKq2vxT2o"
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
