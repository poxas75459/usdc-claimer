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
    "3R4f6Kou2fxu6WN5X1dpM42oTLBzM5cDHUu1fiNPr6KcBvA4SzCAAbfANNprewMV8Z34sG6JELh4ia36r689wCT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CX3yPhjDAHg6fguGh3AoZKUGhBZ6oarsqmTZsXRsxLtqBHBJnZrUm1C2z3st4uCWseRpf1uaa3eaCyLKqfvRLT",
  "key1": "26dMqE6oXXQZpbqCpeGCd6KsN24P4VuNdpUccSbLpw8cdQk66HpqFA7BFAhVue2whqtb2Kak1fFckhDkfLbE95Rh",
  "key2": "5BboZXRA4emSpr7NVu23CF78XoZkvrcQwfjnkcdpCykPZbnzHJM6fouL4zsz8b7koxgXGYZ2AqS1HKtJPkBMP4GX",
  "key3": "545MTEcVjepXSn6Nf8u8CDHQvGdY3U4nBhKdNXUypCbNPioZzUPFDVRrCaB4ZBM3zSSJ3dTYTyygZQTBWEdVbJjM",
  "key4": "3irTXLXJMZ2sLXfPkGiHdHAiyBvjqwg4Aqa8usPRkejG5cXKkHuArtmYBReCrjep7AiTBqfrdToSt5i5cfbhKGQy",
  "key5": "2EtRZbDCu6seiXHJcLGVgMfc4mGLDmhbdoLrTV5KcSHT8tvkibprXtt8yJS91q94jgxBEiwuUDfxqNMNxmAuy5PR",
  "key6": "3qz9JY7AGKSo8AcD5RxbVcAWRTzTHw13wLTNMZxMcoz2LCF7ydt6vNZrYjHYvhNFvFEJrwWiKkAkNjCYmZuNiKJP",
  "key7": "pJjYzVU6dEV2zdVLkdB9NRjdyV4mxbcMjsiwfdENdKq2naouvqDM966SaSqvgDDTpHb2JvTwHA9SfLVPbW1LafR",
  "key8": "2q5Hg3kVE9GUggXr4y5nezUENyZW2JhvkJhF7BrFhk8CV3kHR5f2Sho9Zts9vUTESRoE1ugQHtC9oCyESKMz8grz",
  "key9": "48aKaSoBt9wLymMdRP3ToqvMj8VgDfnN212rcYPzoohW5SnpWTHfRwZXwSfsE5vbsSzBCxMXJEpqYYTo8B6bduET",
  "key10": "PZSnHPgPnCckC7MgNeuTZaC3huFWZFgtRzeVKyoirjFtyXuDwod75SnEzpfsbRpfpLKWZAQ4tnXdNWZhvKerp37",
  "key11": "23rnpiJVrFT61W8qNUV9mxqWt3MqUkdqyc8bsacymicMrC1e9FhmihWXkqFGkDJ7xSFcY9gNmCq1zvo3H6Jc6Ss5",
  "key12": "3ZN7LbvAFP5sJwuv7x3aAYw1agUV3G7jiUdFocCnkSW6wrYiRmAWbBeKqP57dBWwMCwzk2p5Hob5rTTeFNgxMfYV",
  "key13": "28d9b6MGRLe9wLhYkbbZ85thBu4n7faxohqPztbdRASYopYB2gHTcVqiGwraACZ56VSEKVsQPjLKAaMG6Mhm3nQk",
  "key14": "5qf86rt64NVJGiYa44EJ5BHZ31MzvVzHu2S4QryDvc84BPskCHPq99Q2dzVYvEMr1NoSnMusnvJVdRrF8XyT3fEU",
  "key15": "2YrHEZce4cAxP6G5v3cDJGdvZh8GLNh4rCxULeqi4m9c92h5MmsynVB1yjMVSqs9oNrMNBNDs1k9PGRCFgrhf3zD",
  "key16": "2JwgHoZtXFZVnsv3xAPK99knMkegUnggB1JiSaHmkGjtpny1SJXWW2DvCHAa6VzerU47ENtvgxx4xSRAwvnYkbZP",
  "key17": "k6bAq7w2VSsnc3SEW24mDm5HrqagHmKaB25VMrz7GmM7hgF47QR3ukW9ZcXS8iz7CumwVzpjJHn5GHUxLPYGHWw",
  "key18": "2BeBxEjZYqJeVBRJLm5FdnP4GCSkRWWqW5mfYgWASEntJWkMpavPjt6MzDNSPDHFUjjXj6oMwZCvC57hvPcDDsbk",
  "key19": "4SyLPA1vHGoXoKvhBH7KDUsb5cUpvqx9S21XRyqZwtjo1nYht8BJDLre7n47Kkgig1VwGXAmEqgQ36bEWSkABbAV",
  "key20": "NX9jo2XQmsrBRPcbzUebMxjzS41nmFeZJKCTgz1aCAv92romCwfDjc3QQ22tVu7kAh1JocMgGZ75647x8q3J1Kb",
  "key21": "uF7qyxnFxV9KdJ39Jr7qKeeubjqbz54XTBjbFyT7UXwaqZHMEGDuH5B2JnA18fbL7xnuK2tYXVRQRFYcb3dYtoP",
  "key22": "V8J6svQHfR62ZYcJvHXxLpkjVpnmyoGD6cqKv3BdG4uDqKfkYsfZuJsF3Jk3uKxcHJtXUdvKf5Swy7w8b7c6jYH",
  "key23": "VUw4TXsuVEGYf1F8Zz1pLkwNt4KTVb2MkKY6k1SaBMde5BBWtqGRTLwtsCoWzp1PouaQe8i1mbue6WzknNfere8",
  "key24": "LzSTV5wJ9cn2oJBMgL29zqHCEpi859F4Rd4CbKppj2n23MbEY5P28FM7ADPzMeQsiZBfAdkMXR6quAejQF8tZbt",
  "key25": "3AsqKND2dghZkPpim34FUS1gwUn81ztQbg8a71j8B6W5Lb98y1SUu1CMs4dAsRJucqKXxnecsjdZ8RQKJWLTixon"
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
