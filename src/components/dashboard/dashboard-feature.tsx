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
    "3odYT8xK5K1bDzFRyntqwxjjRGKekHsWc7qN3yXNPyKUF4ZhQ226sLMYgiRHRwUQy9qbjoxyJQ6Wx7ih13mKWV2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZ6PspeQUPE1pZQAzriBd1DWkXA2cT7kCc7JiJ4pZFWpWMyQki3wALzdHQG7MKwYs7ihdBUizvumMPwvkk7uBQd",
  "key1": "5gJEY2bSS5fGA9scpdC1APQ1QJkj6RiYVk3wJxWL6AooWmei6B1J8PnUBX2chw3pLYuTJ5JX3GcLKsFkHNzxmHvE",
  "key2": "59cCVjvCioJFjhAKGtToLwTNstVx8UqA7uexz9DkNUqzYhSZ68dHSw4pNxT8r8w6QnK1FvSmteVY19GSQ6tMrKDu",
  "key3": "eZkoHLUFmJdozzuoTX7uXimuqx66GxXsNuRgg9YtmJYXD2ZFVV5WCbPwSQcMipr1fNHAh4jN4bURTd8ihzPeaMr",
  "key4": "2L5L14gv47bFfMEpz2Tdu2EvqrfY8gwGUvu6czRkYZwjfPEtyCzbsYuQhJfDoUa4s9NTXunak69rc9R4GjuZzTwM",
  "key5": "4rWuYYHF8C1gEvRYASc47MuVZmYn7WwALhG5fEaibX5srxBp7X4PTRaSuW3zFrWrwuCATP3jCcQ64asnvNsZMDo8",
  "key6": "2GmGaT1QtfA2dMbiJ86vUQsjwy2pQAqd3vJpmz7e5tc4SXhxRwUAwiAZpzMvtp3XQcj6Vjy5xqhEdAZMHzctNA2g",
  "key7": "5uKrY7o3ArHDUmVZNdo415rGNV8ihdUj5gKT9Vxqz2Liba6xHYs6dUQxVcxa7t7TrKi9CJjZyZpRbYJbJhggpLgJ",
  "key8": "2CU6oTCjCNnsJxL613AqbE9B6uNLo58hBJDDSAMexwiA8Tir4Q4Vf7s1MmyRdL1Pn3jTvsQ8def4PKkW9VQeCCpk",
  "key9": "2Qhv67Qw9evNJCLFnSju8Y6ar5Avq8XxehwYkEhCGFoTZjKdb3yBh3jzUoFYu8ncYnqLsWFdVNe7W8j1nDKFym2i",
  "key10": "3eHErV5RBqoma2VLVPxa9auxwkNTVhzFuXDzCT9TpBw5h5hQ1KADtGRirHm3R28XiD1BmdvCEkk1PxVbxUc6cCeB",
  "key11": "57vZ7hwxPtHrYoAw2mYTeRoYr3BUyCGy4ygAaW6xa5Ao2YV4tDvBUUrx42gX8fovrABWKdLqmdFJFeZSb1CXokUH",
  "key12": "4bQoKc3HnMa3LuE7EQQSfEGxvzWzBN9j9Xm1ems2FuoU643EaXY56e11KHvfqcq2ouLRxmJMh1kRPxk4jtXGodmM",
  "key13": "QzL5J569a6qHwWXaGPtmgtuYGXpTpRCm3q1iDLzZKEnM9Vo7aWCX9CREcdExqnTpVp4vtwLYMjTUZnkko1uyKHZ",
  "key14": "4EQKoXnZzqSJGwXwSap3tKcERuoAZiya8jbARn6iUCyAMRvZtRGUZ9vDyQrBCtms1wcKJtw1QjcbivccLWQnqBUA",
  "key15": "5m6pJ5iwQyBe7KFvpyCPQH3X4zfPowMZ3EhJqbtcnqZtJ5zEQeuU7CVfSwZFeMUDs3ndRVbBz7n3L97gjHVooF8i",
  "key16": "4L8PQVDtNc4j9SQhavj6js4BHxZDfi2GyqkgFfUzriR1U7GxHfX436Nzg9ZLoQY2S8AcLDwyNxhfn1RAHGbGJJXS",
  "key17": "56SeSPJ1jCkjNjvwKbDabUiz4pk6pq7cHqD4zyFNEXoRD2c5RSp8TJyfkK61fwdAEvxQWEk2zwSqrhjNUmyXJDRg",
  "key18": "268cKmLDnjYiFomvUSNv5a1vuPvzhjy4aU1B99Ng1MJYFiicB9rRsXbRwZjvVGrgKBWpfJjmquPM9c5g1Pi9VT1F",
  "key19": "2WhGzM3ydDPjytLy1nJytWMjtpHg8wrDicmAkKLrtYX1Yxidb2p8f3RaZfTaWBHxMoZnjsz3mHnLBiZuvojJsA8w",
  "key20": "tTU1hAn892HonNjRT8hbWyAkPwJQ1z5okxZuVyxSJBSVYf22LUx1Vbz1sSnyLswQ7H6bauvrsDe6mVXXFjwao5C",
  "key21": "2JRTqV3rvRmvMgYwvgejih86MCF2jjAw7XyUKNcDSmL2gWFuJ8SMnZqsqDQ9SdwF7jsVTHyBAaHNXkPA9ptKJnzY",
  "key22": "UUDbeAHMJQmjfJyCMPi5cPCKwwnDMF4v75qdN8mJBjAc9tXSVoKDxnVpb2brBqDANME41VTfeeamSSnFSomtVSk",
  "key23": "58YQ7BvZZ4dR7QAnZL3nJib51Y6J2pjvRCvbpPDNQjBwE2oMdyrx1m64HntHbxMUZPEAC8kyJfEmjwb9pBgU8ynT",
  "key24": "2anw3XUbbxaunJLidGgnNiQxuEdAFx5TRD9hikTCY6RXznfcSgCnpGuhAkzDAJVW91zjPBAHo1g3dTyZz77QSmKF",
  "key25": "53XPTX4FYBkp9dhmrY3fvWvC15bhnjhqDGqN49wGPMkXuz7Gm4QnFjXEjCdWjUjViinuhBJVpwP9EA7U1EdqAomC",
  "key26": "a3UeuRxdSHs58h4QKYqKVV9tRKLubU9nFrq5yJAVqsCtyGmzD5GrYxjZWmwf96Ba5yr3DvhYVq55AT7VEAs4bib",
  "key27": "4K6CmLKjNGWfoC5hUUpFGNxtqUcWx8jEyBYwZqqASpNdPSnmLcSZ9KxbGfR4MCZH7uq4rbCFEQtCMF7R6m3H4LmF",
  "key28": "5QiyeoTd1nwFAAG6WMLtrAesTqiixss4AQnuwAuioNciQvDbEqXEQV4YYL7W9Hj8LDCbVp6Cc6ytpMFuEAzCHMtj",
  "key29": "3d9kd3R4ChG1SK9UBvCGqRH8LSPcWxSsr4rzbr1B6MNyNiy2i8h44Mc2WmUZyqoursNwLSwVFgk2HrVKgAsewJPj",
  "key30": "2uTdPLn2jZvMqooyTbKxKU9KJU811ZxgTUszvRWxcAWzon2qFjjs9GhdhLRkVMybTwBdpN1KjfdV1TSU1i6t2vb4",
  "key31": "aLsWEUSjNZ1oUbmjQ1X6VULCK2CjwC78D7PGCx6shUU5YHYeC6YGSj86E3XaUaxa5jp4Wi4RyxdQqrs9sZwkD1B",
  "key32": "3TYvTDCpP9isAqS8nEQkATDGNwiwnvBnbL5koYYcxe29Mb4k9vtTec6jSNc6xkg3Nhm2dXheMfq2fZucNQMw5QvQ",
  "key33": "5vZzbVVajURKT5sQ9epgScyPshUiT3KxVJCAABdDaU3vTCE1p8WwtQCGdxBoQEVpMyZQDD19cdnz8oxXbSN4hK2a",
  "key34": "2otKCGq8fWKxCyY8iNieTnV7NS5F1cFSiGn7XzNEusMzReyeKpYEBXtbu1aTCZFEdQWRZ8rEthi9uCmXYiebNaXn",
  "key35": "4PCvVLYkagLfapG1rFWWH3R7va2R1QC9vhew5PfbnLBECXuvwgmtErwfmDRfcpfN8xFKADqjtqR4nc5zGEejtX74",
  "key36": "gNQvnYY1qsYoot22TnAYgMWQRLYrusds4F6sUeBeQyAHNmcTH7AMJgDU9hRdbzigT4yCFxw5CVDzoQBKMpMkjdc",
  "key37": "4dQ1dcdsiXe9FWwbVSpCQ7mDZPtTMLpAKbrKczoPJXHVGw5FJ7fmEAmrTHuLEw2yVmaztBiFnPM37PQ3kUmyqNXZ",
  "key38": "4Xq5JiNP6uF7KgDT2o3mYc8QFnWzRiAwE3YUxbPvYRFkpgs8qhWeUwzTeTfMo4ZjewJYumESLhVfKMYRVdm1fv9j",
  "key39": "9ymHuxViYFrMLZhMt2ipbppvzHoA8XZAdnJQDoaAKacgx6tsRQRmyPN2wKuUiH1Uy4TMNt7gGJ2RoJnfW5hNiZf",
  "key40": "3ePXq7XCBVjV1qhSiYgmNGa99SLhGvK3pR7G2YcsbfH6oHMaZWttCrfqLnWMG6JSFJx8vKv5nppfBmzisUxCRVda"
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
