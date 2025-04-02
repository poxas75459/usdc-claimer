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
    "2VW7Pj8cFnrw4KJKLByPav7PJG8yNtmcsD4gSecyrmeJWc3gXTwteDAhxPFV3sGdDZTZxv4U2TwXepwKXGgbJTeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVJW6UR14yPckvFi4AxzR5s7W4X7rJSHMa8fn1sX4wJW6NBxoLU5FSBNdP1RmL23ncjCWD4AaxKdV5uAUZJQbTu",
  "key1": "4p1nbJSs5V69Nw9LWvKhT5FsJVzfL8CxGR3hm2pQQ5F8uAdW5sDSHpJMGnUcUFunD7pEWnj6U4oG9eBY7F51Uvxv",
  "key2": "3WrFcEAKBUuJLH7aZ91FFyWTYmZSYePuvd28QFkF6JWKi7W58N2AuhnwwfYxQ5e2bvF16Mq1fRy3ke9kLBPsQVjk",
  "key3": "5LPjGX4qn7ez3nRRpvo3cTB2CFN8c93GxsxJEtnvTHxPphHgzFXs67S9zgNE7BukWRRQzE9bsJWNcr7Vby4XnveR",
  "key4": "3XwDiFXrsSm4sdEEYpskvnkRVgbsCfMgRFV6omrwxC9fP7DV4nfQ3a9A1ygmkqErCD7RvqTMcdXEsf9UyUdgCBTz",
  "key5": "nq6eXjHHu5FNJpEHfEJoWvUUr1ZBWnBQmW3xmnbKpPQ6fRhGZawfXNAzy6Y2zHFMG46LreCmQE8UZXixRqj4YVa",
  "key6": "2QTewgb1n3vqccC7RX9tBp6jLViprDk1DBr1qhBkRDHVvXyEQLA6ktegihtcrSUDK6GL1nkDsdstzprrcGKEV3gV",
  "key7": "BfQbgbDoPSaQx3rCQQbNSJSqqNRu8Da2fdxMSWTyCRpG81RvkfBbagE89QxJMio6KR5StTzNDR4YShsEEKY1enM",
  "key8": "5Do6FapJnv83rSFJqBzjW1peUVW9y82Ry1nNfSr1udjcQUhnvYwDFHujsw6rKyepV1MDr9kF5WSv42xvHX1aTndQ",
  "key9": "3A1CqD7mjSAzescNbVLTTq2X4zm3JQvaABxKtD4uqzy6KqfNRc9ufW5X5hcYjcqzGgAuLRPbfcrGyyJ5H1DrAPds",
  "key10": "2SyRwSqzQ44hpTDKg4h4h1GaYm9NrnmtM4huhW6ZmCfKuD7HgwYp2zv2HUbLbhMx4YHNZM74pCkXGRGPtDTd5NwX",
  "key11": "2ionHPHZMNMWj9A4sRwrEEHRQbS3P3YnHnaKAgC6CAF8JmrDBxPxwUXpqucUNJLT6rMmwb9YW1hQ3FYk948UMPos",
  "key12": "5F3qULqGszq49UeDzwuJMqBFzWisRz4ck5L9xAESifmcuno2c3nXYBemMTxMhQapuyUqFAgoKnqjmH6SUpoGvFYJ",
  "key13": "piZ3FNWF4rYgZzhHakQJF789qoV24gEmjZSA5VMsGqjAqrsYaFXNVCy9WPcYQY5TDHBPkZQLXJhEKLvWsWFiUQf",
  "key14": "vTCrzGkapWnsi82UbSeiFb9g65Q7ZpCPyzuJKZZaTxcnMZ8guVJSjKgZkthBcezYRKYGfTNBCro9g1tdhY4MscY",
  "key15": "3CYNzjnmswvsH1pxLUohUTWYuC644LWrXQKeovtd6cMtit7t7oZnrxpLRyS2S66ZbZqhUFdA1VRFtR6Z6nQdiire",
  "key16": "4bKC5FreM8juoB8SoKKZwosrVcrguazyQxnMYokRksRUaifm46TaN9Krtq2UPssPtSHXNf5VsyFcRpj4ntDDAzzX",
  "key17": "4cq65feyg69bmSnGL8VnVnEpvhk2Zqqf2UBcjbKJtfwp67pmu57HaRShs1gTKujp4Grup7cZHGbDYB77bYFgwtUh",
  "key18": "9DFkunxxfSnZchXsmzGxHLY5AHPSTV3KCGC993ThsjcKUJv2k5G7SDVHyypadmDo9k1wDUGJq6aVt6NXnAfaEMg",
  "key19": "2zkVhsDmJqcUJXrXiUHBnTKvnewdR3VNJJDdUJHtyX6o5rFGGzDt4FNhiRSGoJXzKMLTuku67RqH8juWqSYV7aWC",
  "key20": "4sDW1sMnUXPhF6suYGKz2wv1tHxyy8mmqp7NTvbDhNNhYE4msVi9w2v6nZ31x3BtQpBRjMZyK3MyMSsmNKVuFaHh",
  "key21": "2pWBSNh42GSaQ7zmXFJcGdGbxEGu7v1ZSrgSCBBKTG2hZJHi38cWwEphzpQPcvczRHog2SyTdsTU62qMPkxtsoZ3",
  "key22": "3Png5BUmcPR8yk3QjRSjymEVvzg362Zybe9d6B9sA6Y18qL4meQML8qpD5TvXpTHJGhiKBc7ycqBJswRdb3uRMXJ",
  "key23": "3NquRKxP9JrqzetCjN3uX5WFxzhsQ8SFyzZNFJbLzQE6B9mbxRUvyc7WMTxR1F3sdkmgNWUMGgL6rZ1wRnphjggD",
  "key24": "VZmcBsoTGxiBEescZzSNhQPKfYfwLWcPzEG6nqcKc8hjJHRmxMK6EtdpMBHudPWFCAa3YQw6yP5RRFoM7iUm3tw",
  "key25": "5FhfftMRB5Sj8hxkKkDnW9EZtJAQNqZ2mnTjD5PXr4W4Z7hTqfhKXsaoHDEsiEDBTavaSAUvVbcQ5MbCaMZTkvVp",
  "key26": "dbjf3dNXFd1XPEHBCL3oTuGLXuyRTCfMLCc8VPhsNUxmYnGQYyGWNFQ4X9UKG5zQkGgM436R6BgCpocpKCdzvrY",
  "key27": "5LMRLmUDs6q3eaSgvUXgAWsvb7Y17kEVku2z7H2qAYtjVtA2T7g55zx9LzQ7So5859devQ2fF2h4AdKCXPTNphrf"
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
