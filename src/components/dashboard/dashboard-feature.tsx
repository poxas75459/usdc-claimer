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
    "2S2PTyhR9NG39aKsWTd6aB2CWMjVBHVkVuQPPX4dYWPHWJ75bWVpHsNZQxna3S7HYGAndiwEbTyRKRkv54w677tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbbRTYHMKH4NdAPDBsnjnhJuqPeCWvqaT9ut25r4wTJ5fYAhVmEZY5mSMRbscjdKhf8ktYmo9Q2Jf4RWMNSDbwi",
  "key1": "4eKZxDMRwZAWxGi6XdqBog9MFARQYxa1F7AdvSTs6BMDbHJUN6HTMDAKFCb5rMhvpqzCYzAoyLXQRn6fdxLiNiNy",
  "key2": "66ZLyxHsg8CvmLEUJ8y69bsmkWZy1AozEqby5ZZENdTNxbszQxCx2GqYrdfpJkwLfSWAeszaGWwqvbhsihNzHGZq",
  "key3": "2e2FD8Q6LPtwRY9kWW4p4SyeiSHcK4fbvaM3UZ8j5LPcPZC6NCdbNm2SSqQJq2VSq1d7t1fZ6pA6qQkwiQ44vACw",
  "key4": "2N8E6R3VJz6UrQ7my6m6QuSZUWcdjLvuorXFfo1HMLK6qh5GurSvXj6uARKet3nwBmdZzhaLUCgJgJd8LXhosrx2",
  "key5": "5kvBLGCz5iAUa4WYLj5o7HmkAU5qK5zGsHcazVT86jguj1eZTh9YgNbDspE8Re3oMs8qS217akzWpAAFDiUNy3no",
  "key6": "3UyDSq1ujrBZeDeCtkgFjwcoPMZw7iLkShNTYJJxBHwp2QYEGFYia16NvCMaVXoTwsXtJHFTYx9n7VwuVdfHC4Ci",
  "key7": "4jfF2NHVCAz9wBBm79qBsrvfogXYW4UXZGUTkxW6M3XmiVER8Jm6FwqktEm9rQ9BJ7nQLJNqY4FJWTNdtXLJcQmh",
  "key8": "2u9sPMnoaXNSv6JfW4fAcxmqQDVqiqzTqbPXXzhYCTKT3gJh5cU9MU65DncFEfSP4nRcwfam6uoHjC5qQ1NS7xR1",
  "key9": "vzUUieS9Go8ad3kUEzbshpwcAzcgoXVK2WECeqK57SxtsahivnGq6hPBEorhe3S2vzHWxgUTLAVLruVdQeCfbAA",
  "key10": "63jd5XxBsmQvpj4oYKZTqo4QWMgQp4vCVFxad7Ynaauu2BBc97wbvf5Lut9yvq71C3nqVAafgbNZmLHoCaUn1UxB",
  "key11": "4wLmi3XWWcdMKxPJdK9cUrWibwSfXST96F68zAu4jVj2K6ebYLJfhijtGHefwnHp3RcPuyH9irhu2aTspo4NNmWX",
  "key12": "5kMotFr21iCMAbF9d6TD5Cjxs4Zn4NngvWxAUbUftag3kLbyAe5kAhEEMTnU9LszRhCBY3SJZ2aREgx5wQCD4ZLY",
  "key13": "2imqvUw285H6BN2cEapUDjPSjwd6phU3gufzned5RPQdNamm1L9fBsGnH3ecAfupSS78V218mJ1ojpqUuvU9RmpX",
  "key14": "2UoBLJWpd4osHZobBQhYvWA7yjReyUjEezYVwRUpHW2q1s9yYo6YtRiJmAqsNnEUpaDXKpobX3vNK2a9B3KCzayD",
  "key15": "3uQM7Nrs1xvUu7g9piaC7nUHJxgBX8P2pBSyyo1LNMCywT1Wxv9sMWTQFhxZuFK493TKgiwDoypnoDRGUhWJMWJp",
  "key16": "5hErCFrADt1DwTxeimkd8Q7anTXBaDDTvNdgs8KaogcDeU6oWQV3XwNqBQ6U2y1D85voQQM6m44tWEJAPFcpGGBk",
  "key17": "A8eWMDfPPJ9PQ9DD55jJ7T4CG94eNyZJbkxEXjAbaEvDKrkaky7TfirB45zS39bgU5jWHgR94h15YFeZRkjTqWb",
  "key18": "4hhJjLVwGvdeBft45ePWC4HnLh4adJujKQuxXRfZ5RaNkQXDc1SVCJ3PYHRtDh8f9pfuewZbKqpJ8LsPi1JmiyBj",
  "key19": "22t86araKAjY1DsiDpoxfoV7fcz78Q4XWgN7EdPgseK1YTXfiqXiSomKkAf5t4mCKMNN8jQ8pZ6QiQ2Wnci9mcvU",
  "key20": "4bzsEztfo93sKrcG6UE5dpKaHwZH7CUn6FjeNNbfYHSCVLwvaeEyJ4BaP7Uxkmi175sPWARHq9UXdXfuEPD3Q1a5",
  "key21": "2Pk39cWJ3o59qaSryk6GYeyM3eZSLCgp1bUUmriSAsNVSRPUUsVnxEGWY4pdmfsxMT7iEvGnznCuNoR72by1GJab",
  "key22": "24pjxtTm4wpY5xJpjpphvEFagVNDMfPyDBkYir3ErUiZZNx59ky3MfF5zfCWexBS3p336BWMh9CURVAUCHbZP4XK",
  "key23": "W3TJigK9yfvh5TyJbTVoEpgWLXVtnpCo3LnfjMbhgvG7N2vT3pgr2my9qGqmAdnyK9Wbd9csswfxUg7pEB1yxp3",
  "key24": "2Axa6BE4qyFaU21QsNTJQwZnxCW626FHsZLXomjWyNcgxRFVo2n3aGhzmMjF1uVe559S1s4TPmo726gU8Yows8h9",
  "key25": "67UDpxHwANpABAvboc7QcuqncGRtye5UE5Wpj35HfRL6M7EU13qR9VayztcqUDW8inNWJyfJvUY2J3z62mGAQr8Y",
  "key26": "3nzdR2GwYiTAi8227V5BpcNYX1u4Mu4jSHphnTNU9BwqfBiYTAPpPPPDNsMHjaJGCG5MRoUvkKDhd6uX3zyr3rDm",
  "key27": "36AtDfjz1UVFgz7BQoy1HYq1EiNmeA8dUpNzrw33yM2F3Zm8VNjmt1BZjNy5rQk3vhWwwM37G4yFV2q9tAwKnE1Y",
  "key28": "cpCBTnXuzNCoLr2pajTrGD3uqb5um7dNiHbELZbiAXowinWGNSCtLchzTKbytxCuxbHqYpzphLknSgn65XX5if1",
  "key29": "5J84LYaBL36WHnVAP8mDGMd7irfZJGJoVipwGgY5QK5GDLSfZEZM1q46FS4kMgXx5m8MGmS9BpRYpxwBqFSncb1N",
  "key30": "2FVzNSmMNw8uMQLBQRYEcML6et8PdqqDyEcUsUeG2VRTHAgtptn6trZcn5mfNnso6ojtUG1V5CYGdoSZR7a2WJao",
  "key31": "22G5Y1NzftvhqnHsgyAH7VPfhRnZXVgpdNu1PWJzqHUT4HdMUi3nPEQnVjX1e5meyD3Xs1FVE9TxHSGAmiPoCcJb",
  "key32": "3J5jbGw9vWsvCnpynonG7wwtAtBeZ7FR46wtT9PTHRw6kBSuZrenvKgxmiAQzFzrkxeXLf35ycvkFNGeMKwrosGw",
  "key33": "5mh1GZj6WF7J5LwYdkMapGxEL1YXhQu1VsXkH5FFB7mXJKnDKFqYScV7YsuudecmR3SrRyjWqU5hE8g3S3y6F6rp",
  "key34": "9THqYaDwLBz2cn3yMp86BAEuJgTrCEw3fLjpGFd1hHCNDm73gSRMomcJiTaQiY7pawSwNxFEvqhDx7UZbpBrnsx",
  "key35": "5t81AHsncRPWYBSRB1z9csKCLzxavFCRZYP6PxJHunCMYyr4dcbz2Xg9gXYBB6VtNqVMKmAQBBWcdVbDr3qxDrSv",
  "key36": "2V2UHTMshuitHZ8giMJ8bayLSYvQfUYkP2pvFz48D4FiLxvUjeU4nfVquNMba3Lx7S7iTJmjyGD68ANae64h3Lb",
  "key37": "2J9foKMMoFAJCUmsH7X2N9NAsp6H1pJuBufx3zHieTbP9yrfKYZiovCn4R6KWZHn72h1fYGWQkqudV7uZuwGsXKX",
  "key38": "3mFjBXjoUaAJdTrwj9Htz6aHSaUW6LsCfJHYSrcBGJ4jqU7aMUhdLwWq6jfBQcxHs16vWtt3xb5dFMgSFJByhaDY",
  "key39": "3pHJEwjfiK2hBAZHsecc5CEMS9XsD7ft24Gg6L7VTMHNmnspcdNMhiFoKJHfaEcoJW52dE6hE2YfpUsiGW49EGgn",
  "key40": "TJkcKsAtYbqXy8pXZ16kq9kah1pEHPHrGfi56foykaf2r74c32pZVeUYw9RL814Pqp8k21p42kC9tsenaNJLS97",
  "key41": "3ytCsMk59VtkofSU8r4vck9w7QMaz87cjT1kxijfxAF6KQgonEHG4agaKJW1s6M1A3stSoiJo6QkX9gPXHMwBMDE",
  "key42": "3DQvMagybceQqxtAxJvzca6QyZwT4aUsL9QRoEZ5yym2B3WNeKnkRRwg6YgTH2Svpjns7mL3HdWNooFy18N8B7zd",
  "key43": "2swLyYLJiShgqGeoPEAeY8Fr4vqrW7YYgAg9aR1McMYfkEU67W37s7aXwGBUYqmSFwPyzN2UUqkxUGnh3dYuJEop",
  "key44": "4Lg1e47XbfFGSvPhB2dFkZREQGZyxUR8yu7esWLvknXyuGh6D6qap2bFfcrAzcGXW3sPiq9q7Ptuj2dJEQH5W6vy"
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
