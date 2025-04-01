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
    "61Y7T46BAFEjsYkRFo3S7ecFrwUrUw4VoANagXPWf4aot1dF1KsCdjaGbams3DuDpEoS7yvyNCMxcnqwUhsobGje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeKBUCNKxQHnaVqu4PvsFgXnmhttZvieXiPGvMqKvoZvt7XMjNVfReGMMK5hhW17ydgdAyr4f86VyBPZhLLHmUe",
  "key1": "4ky4qPWApRnZkgFcwksPjxVr2ja5qM9EaYKQcsgxoqKgG1EpkRCqsHbRnuytu3aNtaGQonK3vXsDCfiHmsCSEtNa",
  "key2": "3mNtaeUiE2CXoJdi2ocUX4dYDU7VVftNtV6L2oYQjhuKs2xcQjdDqAa56nYuYy7XX2AgxwZbM5yvyPXjysAJY7gA",
  "key3": "GCWXjrnTBsNfBBjaTco9t6K6ZbRx5pWPaNYKcBjJzjAfG8aT2MRSFVDLUVHEZ51Rfa6jfJ4dCQ2FUKF9Um1feTM",
  "key4": "37kNT3fQFGbXLYY6CowMbFJMYLeh2QG2HcPmTmdsh7FB3S14cW1z7AH28G9WZcVDVcvdeGV4QebjsnL9bb6vy7Aw",
  "key5": "o3M7FRnb4by2dWpKkroHPiPW5rVRpw9qFdzv4mGCwdhKrs98xpsoPDzFeDxfhCXmuZg2Doy97gqwH6PVTtuuNY6",
  "key6": "3Kz7t8rUVD8A8ZkMEz8rXMnYM7q2pF3eZRoN7RZ3vc6E7WQy4HGyjyVKgRxPBxE3Hp8RhmM3PegNfTwMKvKw5NEB",
  "key7": "4kxzVdVuT9Ws2xrr4EA15pWXKtMi9t33hPdHe3TyaBX26i5G9MHFZyQwCYXgbc3otjMK1JKD1qXVLig9hycaSjE4",
  "key8": "58fFpVTPfHm11Mo5fnd5BqHVi1SbopA4cNqWQDPsw4dSHhJBK1VBbpqQcSpxyFVhxkv9hxXYWG7S3H8oGa64KWiC",
  "key9": "4PvNYkHiuUT8boKZLmHFnFYcCEbhHDihFq3sZNVuxhd8jpBV33DmofVh9VGUJB6Vg2mjPrM6Z3kAg5Vtr96KAqfM",
  "key10": "RQVsRDCbWpPyYsEkUwbw9AQzcMYZkTQEdBf1xp9Rgdm9KZfW7X1LZ55oLLVYPRgJ3LaGUJn5BZwKqEutvKEXdB2",
  "key11": "3qQnCwu7LB6Pn7PKXY1eyJ1yteEBfYsbnb5TRtFBQEQfTQyeq6Yot4HqejRmkNK2CcmeJTkEr3U4ZcqmsQU3H6RU",
  "key12": "S9VrywSS5NPNJjfvDWQqQKDEpyvZWB2ZLLp72mmYiLVize396DESQ2o7kVV1ayVAWRnai61nfcPSwV9LNNB2JE3",
  "key13": "4UdsZVfV3f3dxN8APW71mddaCimXsF312vtXs9RsU4yH4NEfbFnMTV4RySz6pcdFa6MPiLDhMP9k7z6CH7KKHqbR",
  "key14": "4iSkmSRuqEWQ834Ktnv7zPApQrhfXUY1SwTZYVXGnGKEJJufqfZ8sxyYwmiaMigBJnRbn7bPC1TVbfg53hScsqQU",
  "key15": "4k7LJhrT3KYbkGwa2pT2c2csPMVjz9SJAHzcerqJE9WpUq35KRtQeKKmjDtfgEtrD2Q6w6LsPBA5KdG4M2e9NGD",
  "key16": "4FbshC2a5kRC5DkvZ88AS6faPqHohbgoCwrpvn3kdALfGWPRV2aaJWRXRoY5rk2SXUcCgksqwQhf4RXCjq26XSxN",
  "key17": "3QKScHqubvh9piGReLAuuvLEFGJUtRSNUBG3WcK2goYd31YNtwJKmJ75oJ8AwJXj2RtPmVnaxa5xZPmhp2kn5HpH",
  "key18": "3JPebXh71csCgU7wU8sbKPXk4tF2KPc31XGSV5GK2wpHV42SbEFg5VRLEBFr98Ji2ouRbvp9qiNGkvDV7Shqrd2k",
  "key19": "34wGEQNDbgPVLy4aEjLPhkRK5v1g9nSY5u9cztKsme3RQmjwf29Bvvm7NJMFRYb4Ko8S39g43qfg8vnKG8dnPmRf",
  "key20": "3nB4ar5V5BMtmno7Vx8JUe7LdwyZkVgwaPnAAZEuAr4Xb2aGJFP7RgGywYF6JQkYPAf4dCB7qB31h9mnfHQETkV4",
  "key21": "4z4ZmCtYG9owpebRUiMLEXTDm3T3w8fj9eJJ41GUN9xJ2ycE2Vv9E7FLRfbJBoAfKmQcqX8sdtRBCsYfCg5BmfiR",
  "key22": "2jKtC7qBYfhjNj2q4dEV1aiuqjAib9FPrfNcXCp972zouYcGJKVxZbva8yLS7k92c3oswpsHSD9VqKA6hR5jvxj2",
  "key23": "Hd9RBLQLAVedUpM2c4kekLPPyRVky4DSmUxvBbdAk4qzYChkMuPQqC8MRHdp47teDK2YkK4JefQS9NkeA2hmBAP",
  "key24": "2Vi2icGdt2EEdT2wjUJvvHfzrBo3rw4eG3T9MGyRUUPAUFfAyGgSZJEAuonfSWq8PF7qaU9goVcisnoXdDygmWFp",
  "key25": "3umEkn9iN5Ugcu1fNFdYPxgeWErn7Rdzw7W8d2awin3yjqJekEYRS35WPD9vMo72RTjwbFV8K54MnYSrigVUJ9mR",
  "key26": "3Mo1M9SWCQNc4YsBXWz1Ve9uiTx4Vo8K6HWcM58uJWGndmZqDpVaP9oz3mj7UmSm2pFrKFUr96zA8CuNXVsFrnTc",
  "key27": "5DDdXtziMSfLeKACqtZcFgF99SyLR4t6tM1gxP2nKcoenv9FM7cXrZMVKKszY52px45T9jNcFEi3m2a8yb3JcHoA",
  "key28": "TwSYLZY6aYGP3ScEkEcjdrneWawjsws3XKoRwbYUALMt4r3MqFDZFypyDN8pQ7fTEz7M8GzH3ZFnPbGQ3hHdXHo",
  "key29": "4iT7cD6ghKcoUcH7uEeGvCgReSaZFaQMSYZJxeLL4EUhfgLFfq1eMQ5UygqEr7dVm3EuYD47FKoNHZQTMJ6STjjQ",
  "key30": "2VtkcycibwJGB1mozEd5xcMoVUSJGpSe8ffQK8rYkXiJZ73hZbog6uW3UDjLDD4Y3EzrWamZXjhgh4xUnrbAZa5V",
  "key31": "2tSvaNoVigE4pWBdTMiLRekSKfmT693NPxXbQgJeYsUbUH82ry4EsyaMw3ZHPj8cWomnoKpT7GEn52RqYZ3x4gh4",
  "key32": "4TXRU8dufP8PvsVXv6fSGwXr7wJCT842Brb2GhryWsZRkupJdqifD7q1L6sffwcPgki9bkYhGwXMUyZnfDknQDQu"
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
