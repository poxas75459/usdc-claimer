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
    "4xcm3xBzB1tbsDAqmVxFVi1BmjtiNvM6NFZ7w5LfgePuLNKszGQxWgEKsXjFmWgpFPH3WsoPQwuQs3ev359PfTxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TXwT5e2iwb4jQm4cpwGFmeVjRs3HjxMRnixQ1MD1F4uuQ6DNbTSJiTEQ2dE5pZdC3PmPRa3rDeWzJC4mXEsyWd",
  "key1": "3Rkk9mcFuA1B4yeGwCLKEN262sAV5U2FXtJryYd5h3mEarTBK8w6D5vBVrbxJvai8Evc2BaZxWdV7oZY3Zt4rrQ8",
  "key2": "ZT32hAww6RhmWMR98311SKiDwpmSBRsQnqcEHZ5Mm3U8K6cff9G4QyzSV3fFgS8Y1aTzhTpufLuPMFrR7TH6pEf",
  "key3": "3B59WbVXUTHHHvMTULymVe2dSnh1YsXhDQj4QiTPawP1RweU8xRLwwqZUSwULfwpSrCfexLYFrWfAbXNv49AQUPL",
  "key4": "2Vj7hnR6GBbLiwqe1TFYjrNkBFu3NCopoe8yz9z5Xdgqro3ch4sC4oKo9hwF3ssx4o3EFxHJALcme1gzM4XpiXvh",
  "key5": "ZsAtju2nFUcCi8o8czyJeU54fX1RJQRAtexAH4GR5TvWGXgXSzgANjeVUgASfxZ54xAqabEa9qr5gx4kZRzx31X",
  "key6": "4C5X3MX4pWrZQJtkBk4J4r5RUc7yLbL2GtHFCAJnGww5D7Tx5dFCRKLCG3APFZRTpcVNEhvk1v7S9cW8PNr5vd9o",
  "key7": "4BPo1EmWFed52tN9s7XY7fRMHxnUJWiQgZKdzsP28tR3cJWdhmXZiJEJ76rmJR7pGGMCNtjFtLtaiNaVzDq9rJNR",
  "key8": "53KaoGyyjdwrdqUzkaAZca1RcgDaWGC7DgB5VVA8qhgfDUtRbWLs7ZznjFEhJ2eWMfLiFhFANkw6QgCvvUP3sagm",
  "key9": "sFitSdBaJz1kgGuwxiNvUSxVoA1uAfkZfSmjmuULCzWnjJhWMH1FXnzuEjRZy1BNyETiuiV4fayrp3pmu7dtpw6",
  "key10": "wGm2nvQibaHsViXECPfh1NyhrLTmbje4c3kPYe37FhX3KN7yZTKg78dobBGuNsoAKc5FyDtTviid7b6iXY6pSah",
  "key11": "4RQfNDjiTXZh658KzvrAfr8b73vbkpSMA1oA4nhwfoRKW6XYAyxYYYHMHUYofyMgb8ko7nei6c8chd3pxouKmZL2",
  "key12": "4n8kvyTL9kQbq1Mt8mQ1fLNZAEyRNVsY4as79dQGmxV9amEDhZ895QdCNZKF4iwnEAdAF7p2NRN1x9Ry3fBG9sid",
  "key13": "352K23nspJRRtc51WGRyWHp8cZXfwsjDCCqeGbmSvbCbpF3Nk4dkUMwCPjYN7LAFagkfMeRNDznyN1ryLzQMyMQE",
  "key14": "4wEP9kBbZSNAzT6ZiY91KteZUoZbKVTEwihanXqemNighZJo2dq8P39K7vUcpNMxUVscXNg3hHeQJQ9KENt5PTNX",
  "key15": "5uFtPHR7Xz2V9mtU8vMN4RQn47FvmfCk23cpCov2hdbKUw2KdrzxB3cf9FvYwuuoPyxKDBaCc6zdBwGdkjGKkFCt",
  "key16": "4a91fC4p2kE5C2krPeWKdaz2EaZA4zb3H6u8gewR8XNU1KpMQtRBqbiJECvAMhRYaQVddfzJtGfPhoA4LPeMDjAo",
  "key17": "36zzn15ajbgzoQMmEuS8gnTYqAGK6PbyDx1GEnhg4YcMAH7R5xvno8wgkbvLTQap3L813b8UwB1yntUPf9BCmahq",
  "key18": "3KPaSxU83EdgXsy5fvh1cQV4HzMG2TximcERupjd6XaK8esQ5npqto5oUWHSv6pAoyaQu86k7588dxosyPFJvoND",
  "key19": "4fL6pgxGX3bcss7BTXPMB3GgpViKsMtfVPYv1etzYQmsH7nioqHGSWy1nT3CTLgLEoxxruC8CjNdPrfwDdVs4A7T",
  "key20": "2uWuSVDVCQD7X9czmXoWLXbxhnLJgR5s1qsjRYdETFoKT8Va4p5kML1gpwy3LTuCYyTveA1MbnWkEztXrnWoVvwv",
  "key21": "499YsDtzxhSzupZCySEA2jbhaDRhvDnYEfo78HwDEsAp4TRweRHy3uHdVQwHYtcFmUoB9p4VcQrcAnuSfDTgFUvm",
  "key22": "YXBui7hHoXovbXaXpHQWwCrY4hPF9ezhGovo3gQwrqEE4pUp8ijVDtvRYz6AbnvLJdu8Ucbsz61KZ1JT5rdoHcP",
  "key23": "5RHBz9LsivnnqYNJLSjSZsiQiEtDLiZsvqvFVSRq1aB9N2qSSuvg59eRck9fLZUCKws3a3yU27URkht5FqniaoWe",
  "key24": "3TPWZdgqHzjVwEDFXKwtSq2B5xqz4K1aA1kcwGxypmRcdgZLwjcdgLWGSwXXDMQe27kMYc4XmunMdRUAWknU3pYk",
  "key25": "4zV2d3fXLVv7rZC4iNN7dnADTM96wtaZdVGfzJ9sN5P46pqg226Ybab9pr7RyWHEBbnVkB1hHqjBEbrPa2uTLEpz",
  "key26": "2jnMqpLDZuecY748DNeRBvfDAWML8vueNuiNzKJfJ7xgYskyP2r9G7AXigBkBzusqnUS9kn7c1T21A4SUJW8tn1C",
  "key27": "5aWf5Huw96y66EyvPktU3Bg2czQVZqZrnUiabJJUH6GeFfVqwBoDSco1LSM2ZyQWaZjzASGCySDcL19zSXPe3qy5",
  "key28": "4GtxrvC3hp3YniB4kiDNHnW45C4be2sLwWr144GkkMfKwxz4wHHfV6XwvXP6yw9AaiByPVhqoYSFvbamL5nmdCEf",
  "key29": "431V9qSTq5QidpywTZdMFEYLm5HGFuVYZNftNR46p7AGsPTMgkyZiij2yUasvFfkPfs4rjSTbdRWet6jdPEjG2Eu",
  "key30": "51JQaDGaeMmT2Tw1hWMvD8a4sE3bbC5KDRkGCfHK3isJwWeEfCKvDqjJe9fSdQD1SEvVycDRj9dSqT4eFYBngFdH",
  "key31": "57jGT4w4gjpYwadNYrFbp9wvxjErcNuZjQCg7A1TvNtiXo9kjfakPLKP7Ez73btSWeHxMcJK4HxF6yumzzJLBce5",
  "key32": "4UVB1jXLEFAFhQi4hnRhTmvGTGKCtGn1EcJ1Ay9HWRMysxfM5KrddKK5FjvmqTP3LW2k9unveTqGsGiTmDjPxaRF",
  "key33": "2Zftq1WGDgH3arMbNUjayMjpf7uDsCUrCrDYA5C1pgRfoLv42M2GHSnZQKYxNpe9ahXPmNjebpn3sWkR6jttwYWQ",
  "key34": "faGs5zxV5Vqsi4Erd1LN1ec44MGPLBbXphXyBrzJzorUofPL8VQ6fVFrCzueQLF5DdszJJrSQkgVMjspWFdoY2x",
  "key35": "743qcf5XrHcV71AcZDwfiHxo8eLE2mfNVX3cxYFzubrMbc5njPMqVNu33iYRezSC5fjqKo3wwDWbLCxYin9gugi",
  "key36": "3cEAcedwAusbTve1VxA2mAnza2yRKV9TxyGTa57tgtFTCGRqB4Zp4guqSpMJtAEKLiHUbvYjjaerbZps5tp5BXgD"
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
