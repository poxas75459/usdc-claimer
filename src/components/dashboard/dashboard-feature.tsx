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
    "3mPZYvaeTBgvqThYKEs2qRdm9vBfxockqKxK8BNLuyb6RVcrThD3uhTbWayS47td4H2vS1sT3UbBb1BfKhVAzP2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zATekjen9bUmquBrjQAz4owzEGL5azx3zd3ayeJRQ8vn67WYzZFdwLSJHM9G5mbQmqvxZFoqvLPDmDCg7pup4KT",
  "key1": "1udhMy5SZLZ2pNQsok4xNMAHybEqypovZMrHbGC6U6e8NAaRudVBQcR6sjuJh3XD75kfM5jkqCdS716DzifuZte",
  "key2": "3wJNaRgGvL1UgePibSXd8RASWhHVVv9JvK6rahUUVpQkfB1zRHtvLy2J8Z5yhVqW736uDGPkd5hkNMwNYdubkSsi",
  "key3": "5F2zbofms194kYXBDo5g3ZfiPAymep71qbJuJCG1So19rvibxrSSJUVxcVAyNYrwJTijF4Uf4LAhpk4kMHE9QXDV",
  "key4": "2UXsGcNWW2nT4KJCMYiWEBFSrNxXmq125eYFagaTrgKbppKGLrgY5Z5VHDkBmm3HnnSoRmgp1n9FcnBfNJhx8TB9",
  "key5": "5yBtp6QwzVKRjgVEoAec1RGM9AVXYk7snNkmxcb1JkSx8Du6ipiMAhoDkKQg2vjHK3AP44ZYo93F2KeJ7sVcFZYD",
  "key6": "CHt92JAicGHi8fpuKuBPgjaUhSLYYr8jGG1jXiUWmFVDdJuHz1g44AfDguk24deqUdnVZsfP9UJM1XVc6H6LBdn",
  "key7": "2QuXxB1jfZ3sUB2MY6mB7TZFottkQfJ2xhLwVKopkppYy23LPKi1nnNwYsBg2qG2X8vRiLcwnxtxgKaAPnaTJ5eF",
  "key8": "4BRPxZco8dvp1UdQ7SGm5URjbvjMNPYFsofHvqQYisruDRn12qfRCh2jpEWb1iRWyQo9nGyfp3bGRJ4sdGahLBA7",
  "key9": "VL9HhF9awN9yKgQqTq1oYemqgX4aypHJ2ffz4imEWoQbwaiVVv788djMtjjBb2APhzAX5q8PtT5Q5iFrtRV48n7",
  "key10": "5CioxYERjCtVspn7nYLB8nYFSrMnsu3PMX8bZfhjbHjpPvk1VKDDwAYx3mdx7pkjLwRwsLcfNJneX2XrAjqpJirJ",
  "key11": "3ZNPCLzhwcixWXDnYZr8kXXcdJ7aobPKmgo2KQXSheZz25u5JCQRHkuHemeabHkXRJtUrwASZBpUKisDgAUSy8pa",
  "key12": "5FTSeK8S6HCxkK2sTMLYHQGuD2VQpKQsSYNZPZMxmPbETiY3rvADuvYxyHvRtzjWedhQS2wP2NSdobiNzU4F3yL3",
  "key13": "yAn8F2ZLVu7YWcN2Aj1ofMM64xMwHZae74MnPofybxfggNMwbPdwubpHoxuDkyuAfVWitbApPzwYCdK6VY8xHYP",
  "key14": "Eg5RuouuCE5mHmJVXswEpNHvAP79otYZdEboJHbvEyv137Qho9WF37KcJf1f21VBZn8Saw7ZuF7c1QQLq125RCc",
  "key15": "4dneTGfWotHum461iNEYe9NEi1AkfoBpsQ5aaG59zphdiSaH1aWcQmeUj4saib56R2RJWuY2b46C7dsUudcHYCSF",
  "key16": "47SUcsPVvGm2AECJ8HT5RgWkC5hYrGqk4WWdnCaQBNMhAAPoJ8YWv7a4Ud5MMYLyEwstfJwBntAkf26cBh9RG6Rh",
  "key17": "2yevHrtXjx6HqrM6mwvc7CYRS2mBgLbf7uMC5FMYYWHHHyTD14EsCzsmDGHMmLSSbokfgKn31QK5jase2mJmr8PX",
  "key18": "3fNPvwowTwc4ZZr6D1JMzGxh3s69k7dYSHFPzfn8LAkzrYL8gqWbc9diYrqzhWkqj8bRNz5d3Q36du8n7YsKSofn",
  "key19": "3bPgcLDGJxcyJarNYKC5av65MLuzdhuUNHB287thQSXLZWV2wpjX4Qc5pbYGj9woZ7oiLUFojh3BDzRfaub5g1qo",
  "key20": "4Y6u9WRVmsK4UN8fawBbBfFCgGLgMGXQx9is1YzHnLPjcdKcZ44dpkTYKEMVMByc8w25JAfsQPMrBNUULNZBJr5v",
  "key21": "1RsUVbDFsGamfuZJKcfcAfj7dmVQQAsqMDTZDkK9YXUCe1e48DZQvVbXTGGcj12DthHW7nMv8x3tKqyUS7LX8B9",
  "key22": "5hi8jn38JYqrdKk4KDANvwGfDeFecu5Y95xe9VHAjuzwpfXhhN6jP9yZKP4AeiKXLwfk77Tpvzosjmpt2VsSHBwG",
  "key23": "3j4NagWA3B5LxPWtVEqkk6pcsGbmG3cvSUtHeRX4vCsBL1DDrrufVGdc2D1op86q4AF9adfNWFQLjpTaKar3kWB",
  "key24": "2iHm5ZtHojQ4pDbH79Vamoo7DhxsbseG92HjGQ7Urzt6D21VfVfL6sdyHVad5vRWCYCCxwkhHojNNKsc6jCDKMoy",
  "key25": "3NuA1Jq4np6a6XFDQZbGj9hBdyaeecq1skzYNc4WR2q4kDdZwyFhWrcxzY8ZNJrdBNe9GUU6aTcSJfPesUNfarPo",
  "key26": "Nj1ZiFVc22GWZm1WihrwkD1eTeoq4AbFG8VwcVgWa1ZX9DzKvobxq2rUdRpmfsmuGwxgdST2ainc8MzQTSesnqw",
  "key27": "4rHmXVV3ohUyEcYTgqF7BXkCX2AdiwkFzpr4bEFXmvAo3LEQvD7VhwBD3rCJY6An5S8ByamkNU4YRE2YDjXHr2or",
  "key28": "4pFc1GCKg8pZ1SAhkcUv3Keiyc7D4eXQH1DdppDvFpqXAyMSLeSRVHHfeJFWkaS448F9P2ugjLeBkk1DZHJENssP",
  "key29": "3WzNTSeedvcp5G3rfhxKHJcjAGxUd15FUXVHXuJcfMW7jTvBTYUShUHRvojcY1JvUTMwoisGLVE3bpfYiGZXQXji",
  "key30": "4648FeNuKoqCfcuQw5VrNGjKJrZh4NjpbEcS7B33udER8P5hvr8JTR64KMbLPw6EgcR6gcNAUuKurLGkEjKy7MvN",
  "key31": "3AKpCmSdAsuM9qApfsM83YBYG8Qrg91aZKrts66wzmGRBkcJxhXGdc3ibEkqoCBqLu1H2VVezLhUyg4GQYrCmugg",
  "key32": "H72WLZFir44iVcECTq9ExRQPHG5QhzPceCDa2Wiy9Dz3nYyck4fHFnhsLqFDVxUJutg5J6eVHcydZeUttqaYzuK",
  "key33": "UsMHFrZqwL5rJaU3uqPR1jYVT6htV2rnMRnwJMhqNjqWGtf6CJoSoogqhJQMLzAc6Kiwmx5Hv6GeczfpEba7Ufb",
  "key34": "RxskJSBNwW28WsDjadTknEzud21zXSd1htKdRKWvEeNyWCjUv8YN8YGFned3TnsAWgpXrSUw8BEc1RkDr5p77QK",
  "key35": "EW12D6uHUCGf1dvFHrq2fjXjNndrQq3TMHJbfrM6LmSxKS2KYAhaT1nuF2jYY8NYhBKvPdU4r3UaEhcSzrJzb4N",
  "key36": "3uLQTdu5PmQ8q8aZNqLgz7mF7KbCgBVN5DrxB9cZ24Av7ehRBF16UAPYsZXaDkJLUFZdq5KG2Ar1MMaK5Vyz9Utj",
  "key37": "5yk9qTPAkEfQ4v6MiBh75i4yQLT6djirHcoaT5SDKELPPu1RXLA6i5wqGEeTf5SPHdp8fLKE2VaceDJ4VqqnKXJd",
  "key38": "3pzFV2FB6noxLvBAJFjkvd4Ft4ZoapN2BBy6p7wFu5mdstkMvQyQbwggFotLzCV5WA3ftvfKJPiHvNYaxHasTLdw",
  "key39": "54KKDG39HV3FwZy8gijDtg6R7mFrXWZzfkUdyYNafy8xdAhS6KLxLkNyqSYe81XMvTqq2dHTjybPXURT9dEpw8kC",
  "key40": "3iPQfxoU4ADdqK3KyRoWWL9KcrQjGueZjecA62Z49mqVqAxr8j94JzLJ35NKQ3EsaALWefeypruDhbfyGistLmG1",
  "key41": "4F5srzETJ1EwoxMdxfNXStrwmX5MH7NyeHPWLXWE3MzvsBE5wzNXfa8EY8HLGGzUbEs6hmzy1kjYHsE5ErQrbVGK",
  "key42": "2et75PYysQCbFeauhPfpKcZfYYCBFwaQW4YN22XhBWFDcNoh4PdDmaF5fYnDbwfDNrPx9KSaYHx3EeuFHQL9L94s",
  "key43": "3dGtTbNyXMQvQCCUSpiNUfUPkjHZp7ScD7wVGc3xzhPHEP1n9fT8w1Zni8XtgALjBo2z1HXrsyT7vhmNFCQgjGbQ",
  "key44": "2L4gVwU9RM7Za1xGDnYtYNatj5tDuEtMwvw3m8fQ4KV75YioeQRPUidzcM7i6zviJmSWhtSX6YHMyifB7qdLWa1P"
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
