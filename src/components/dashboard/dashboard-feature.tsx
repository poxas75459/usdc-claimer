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
    "3FjThSre9RF1enNKXx7btkgACRaoDS7mugxGNEgDnhirFNTLuQ3MvkupjD7FLwHRkm9RuWyqYgfcjM6dEWsyFNvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPBDEf7V6SmVuA6f1Xsk7Gmi5rQeAWw9zhQthAQ42qTwNy9QFKdGmRs4j1zAMbcJCAJYc1q7Jeij8P63pcX1bBF",
  "key1": "4sL8Sy815Hn8Jio2ABCkEtp6rZ5zV6cjZCEn1NZSvY9UepNPp1dYv8gd97Di2ybPjk6An5dUZnM7FyYyGziah2fu",
  "key2": "2ShfUsURTr72rLZkQxkd795pqixCnnkr4MjuWernMU9F29smrN6MwPv8EkFc4c9PMbzZ2vQBfXw1b7cWPfTAg4z8",
  "key3": "qG2hEbzDhr7NTb5GfEgLnXMdKJn61SQ1GyuZTSq5dBqC3QNvxML9PrjpkXJiefKh53ohmkLLCyxaWamjbxTnWba",
  "key4": "4edw8NVKvuz1ZE4rZF4Txpe65H8yhQ5qomEDoNQ9gSfPizTxg513ziTVPLo7ZBwUDKaz6zvASRfFw2m5siVdBmgE",
  "key5": "2Vmd8fZ11m9ERtPx6cNewf36BvUgrxdJCVjxV7wnVJwUhjgkqZF8QcEaR8d6CbVRc8L7bc2p6bfFzq2AftoaxuHU",
  "key6": "5E6hhn5VaNehXpP8hR2Yv7xmQrQ68XiZrv6KLnQFK5njRmm9wVHePDnp1iH2cYZvDSwg4ZPiB7DW6b2UiPwDxS9H",
  "key7": "f9snvScYmbG7AZyvx1pPUy6vG252oTj9nZc3kjipHEESB8rPFCDP61D4BWxpVsaKVvLVuhCTKuFvQ1u88h5R4Wu",
  "key8": "2rjpETwteMFTecvoBnqieZfcVfcDXQ7iDutPH7vjXqUTxHLwhsiyYgg8v9rDos5yp7xK5bCEeM17CbNG3RaZHA46",
  "key9": "5iqAq1jrhzf7zPSEQhywtvfaro4KvDcX4NtjugHzSDzyDu3GPyxoZX4WB2mmE7h6et6ijPFdWznfjLvUJQq59nA2",
  "key10": "2bfycMS5URCXWkAbmXqXmS5iszE5DgeokYzpZ9vkUWubhhkZLnqc7D3rXUA8TMyR9LVqufTG29YqMc7yZjYbwmZF",
  "key11": "4oZ7gXh5DZDBKCxppRpYkTDtWt7x3UqsCXyVkSZiqMKd5AHU5yBPGjjAM2UiC8wUKVY5WrCfTKYHEikn2mMX1Fdp",
  "key12": "VtuHwgmurpmogSyk6yemhbiBmAeM8H9B1vJZAisaq6v8yEGwp9QpC38G6bYxJsqjDXcQnWS2FRvVnHdRu1GJSEW",
  "key13": "4fPUSQ58bn9HEd7figMUrTXVqvKukPpfcsA7LWQEMbNoFaYMPtqnzsuKdi4ELMDhbWxvvuehnad7BEeuh3TXPtuj",
  "key14": "UhQ8WkKfvstaA2yep5J1f74EWtSJ61SkGCK7HyFw19D4otjJEWVLEVL5LPCZ2BNdxeirzyKzC6QRH7pogCdS7em",
  "key15": "5aTUAYrtx23U7zKjCkuzzSD3bRxYWQDQsYCmhcFUsg5haM8yfREy6aczfzfpoCgoqqECwuHYktVc9ZH4aSU2JRzS",
  "key16": "8TVK8hKu1cSZ3SUmsPSnmhyoWHYWvfDY3FDW5kt73q4KqzFgJ4JipByeKxhGuWjo1YpKrqC98wyJq9Q8ftnEYp1",
  "key17": "4JoUCtm4pU5w2iVXoDDDn11bhtM8vqi8Yuo5MqWGbyoSWQYx66bwxXtGLrgBQjbnSX4CPPS66vsYyukPQ3NetxLJ",
  "key18": "3YuQaqPjFSHNJtbfEU1z25gVF1ram4LJGHzzwMKQdJjs8EVvf5v9pfbsApfMTUbCtieZHvFPhNFcD1xPVyfv98Qa",
  "key19": "2GvVTTjpWSj2zthZrDGgu1ubYARsAErFSG6kjuTUqxB5JpzWeZjsX4SRkPrbsw6K8gFMuxrecDi9qRwiAGkj7LZa",
  "key20": "4zQpdJtmUdHRjirbJLLFd4eNmcseM444mPZbaFxQjLDKP3Lk13aPWyQerfLyjURBCGxz4X77T4t6KAWDUJbEVEXk",
  "key21": "4S8qTXRpCN1QFkpXLxXwPWVaUVn9nCdHurWSrDs1N7E7ciRPSYsCQf6wvbCrwJxXptQJhjKMWiettJNP5txJdSfX",
  "key22": "3FRntuxkpkPFTKsiaXJzhTaUjtLGvHc5ppPLcT2ZQvQWPvtyxBQ4Xx7QK2wZZfHGthtDN9RaH2y1DGuTJR1sAcuq",
  "key23": "2cHsUJZFG2Ld7XAeYCdwpt81ciStb5cahdSk9F4Bd6QQWcMXzhknKPNSXbS6Xo7RyGqHZznXgB8a3L66jEJNwkdK",
  "key24": "3JUxQncRZApq7yvz4wYJJx3Dq9bbrUDwdBVGAdAqtrkBvyxM5SYCpPmcoJ3c31cRWZvBh8ewn17bCNpyUi1FVESG",
  "key25": "4LPMDV4tVz4swVCCRyGkVxoyTo9uQbCFCyKPZVg46VDXAMPambvfDZL27KXNnh8zPKe8Re4HE3CmsefXAvncmzU6",
  "key26": "2scKeKmeGkiJUHieraZyMy68itRPufkbv9BiA4eiPNLtBdfaiDm9YbB1GjpeKMyyUvsfqL1LmcZH27pcGffWHVVK",
  "key27": "5Lp71rzfXFDZ97AgoBgyhsJJ8Ls12Cvt7bydxnKnbghjJBpSTK6t1Pa3tquGrsXv3VN5bCoqH9UHeVhJWKYY4ejS"
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
