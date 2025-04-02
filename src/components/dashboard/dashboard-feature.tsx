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
    "4o5grvxWnsoyF6JKFzuNWUAijcWoRrLHKJzJp8pxBzwrCzZM12XKLVXdLquqeZiNvVwM9zb66cm1x91htybBPyJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Znp86NCKsXyEQAdLdWdFBwiFu2HjNCVYGCwHHtkLyc2pEbjGVaAtvgjXLWCJFXpo6PPMeUqmyXnKmJzujUKzqyN",
  "key1": "56jb1WVRTfG7CyqduU9bfmCQVfwxoxBSzmg8NF5GjpR2iGSzkq9xXust66GfPRX1udAdKw9DGkNminQWYm8VoQYS",
  "key2": "4nVwYWGHrGHF5x9gQRaELTbyMqejnhjdpPhZRobByYS95CNvK1nNuz4tuDai6iJGbC6M9s9KzcUMLiUts6wjdL42",
  "key3": "4QbQK1hheMNUwZGFW2r3HKGABjyFVcSdRowSKmL1n62daLngdYizGtNjvwpgVtMHAUooNvsnkPzwrM5H85CYmBMQ",
  "key4": "HX6ZxAgK6av5oQpBjYFRYrDcaRYCoCCSmbN7R5S5QX1s3SxvPhZ77X9noUEQHXURN5Cjr7kZo5NeBHwCqKEgBfk",
  "key5": "3GdjRtLQsWLcmK1PiYX4geDsuDfwXN9T99WYwLGFgQivtyv5rEc8BD3myRqVj2pbedobxjLnCVjbVkuoQhmum1DN",
  "key6": "58EVPufW1DuksKu6omZBX5r5zvgUxEie6eKWqNTam7hd8zZaMuQzEihUqbVFH5ZwSBXkX8RgkWyMNKoFHS2GYV6L",
  "key7": "55LhCsfs8NoQ3cZnrbbick6DZCzNjfo4kMZxosZbaBzEVYvNLYWFjMdtNhV19GfyNrnfKVjaWKJsXVHgAnrUiZjf",
  "key8": "g9TUFLUjGTokfGYbRz4reqVWA3EVigpQq2FWn3eXwhhcuFccS7BhU3HqV37ZEHRszZcxNTv9bEvvaA1vLuFuQSp",
  "key9": "2ZVChtAuGwNgTrAGKXT6bPzDKdVqm1n56dFWb3yDqDUj2eyWAUGUMZ2vjbGi6DswmJhngeSjjL37g6qYpGMPxoET",
  "key10": "5JU9XA2PzWDifKuDqtnvUcYuFxzxuBKNsMA6rYjchHQG9tsXXymTNZPp9UMKV3dECGob2B1Waky6wV8bsGV34is8",
  "key11": "2eQ6phqnkPPB446yx5HqXHDNvR1ZmF6eoDGtPMGnD4G82EUyptLAJJxcWR7dKMxNB3t2bdiC8g6aBFnTHcxq1wKt",
  "key12": "2qoC9mrfzKFt3QVAuzAhx14bJGNaadMCTJrefqz9rmUY4GbsDrssDGKqBDy4QBBR8iC3zqw14U43JXyxdhjsRKM8",
  "key13": "ZU9So45dYXTUZTrEPdQc2Muc3W8ULMLsuaZLmo63HY86DMVyXNb4B5UStpfdp3TaLSTPerXGJ9UiLYwpMU9YSHo",
  "key14": "36hqhh8BHRpGFC4DC3ksnoYiyZXNe21ukN6ujzgQHGgjikyr56pekkbrM7sxVB5fXuLXGhwxXPtUjytmssnpNPYC",
  "key15": "4mBPKVguGgVMZzF84DNnmFgQvrrzboSTQ481sjc75pvMT8MftTwctQKeNA7MSMxYgdtXRN2JwLABo9DzvnTjyK9M",
  "key16": "VPrEero2rHKXLQrXih6g5cUH17dFNQp7pQjTK3gjE1qrpS75ojwYzthF6LvSLNpthzxqan3rvRRE2Q9KaeR8Cr1",
  "key17": "5W6GEQ4rQ3T5ZJkGTVvAhkiMbXjJthJ8ruaQjz988ob47VHkcu239FLdwK8RJbhbtPY3FnQztS3nxQxWbKNrpatM",
  "key18": "4ZfsSZWZtmqd6LBXPxCYH66Lc8pST8YdYycDKVdvRiz9z7shtwvkHagHjFUzwkcfBMNbQTff6HqmhsrCV4pWW1mv",
  "key19": "3Z2A8BaLJLpdsMnhfGd4VrtEKoYyHqMFEsD1n6sAy9BpgBoFV6aXpNr8FYoCtjPfbdnSUHdJjir6SE5LYsXSr1aB",
  "key20": "3gLwUsu4ArpDicsX8WbLo661rrvNQvqNdiJU1wU6qbJwEdx4tyV6Ht9FCqoADfVtpFneD5VqhfxuGK9HKtNYTJoR",
  "key21": "5Xnf5vpYEFsLPny5tA58kHCpqjuAK9FtkGTkXGQFBgqp9W7UEvYxxAuvZtuAQqmoqxZrWthqT8rQdZYNNzESLFq5",
  "key22": "2rqwFbEifLZ2kGVXq9XJPdyCCqMxfCnsnkZQSaSLxHJNxTSAZULJL54BqdKEa3FGUaKHyDVnQ8pTToJrVPX2LsYX",
  "key23": "5gg7AvRxR2APq5Y3k5VACEUovkvmmBM6xvZGqufJpp7ijfD9wSQgyVkjWL8BQns18X7yGjoenCsWrSPeTgwf8Emf",
  "key24": "3k6wTzV1EgkLEfJMrA1epEmjhWk3NZFrkmhZJLkEwFeaLwWEfUpsreYMkd2sjVbcKhH2CHSHDF7JdiitjRpcb5AM"
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
