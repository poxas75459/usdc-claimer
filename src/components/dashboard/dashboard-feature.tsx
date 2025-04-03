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
    "2WuRL7jvqYLhoJoMz83Zhh2gQN9XFHRyc7kSTysE3oRPrrxtZ7iRgjuYsqngmZouPw8fJbxNqWR4nXKbHXLXu95a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcaCEFnoLbujFuoMAhwS5cz3XXTcWhnMC2DmsvcGTABhjPCePURNtrQC6i7y8qrX1DoPeWWWRfVUhcVKwdc9arX",
  "key1": "2sieGkiV1oCRCB8mMcZrnD8vfNcz4Z8GGLsy75m68RkWk7TvG9wRNgqKueLo48ve2viu8dAEzhnr6Df6oJtyLgKT",
  "key2": "5raJY1RTLV7gMUQWwQ7t1dvxGC3XYS4QS3mWAHqzEpgxLAdXDst1c178skejVzYYaYBVfZ2138ku6cEn4E2DZCYv",
  "key3": "6FUEuZWxZW3UhYTEvBW7u7QMjMJGSqdNNFHkpTSSQ71K9cT1gr1biv3JtG4ovY71sKG5HhRoX3qyJceTWPy9QZ1",
  "key4": "2JdLGabCN2QqmQqkGQreu8UxeqEqHE9NgjqTuVybmVAn27kHggzuqYhCehzrEQgMvpB4BpnUXDe7ue5CjbwhrmPu",
  "key5": "5wRia3M3FX9qqoCoDEVaFhap5SfDBWBCn2fj5tCYEaK7yowNSQfRvqNm9y8mAzEaKZUpKitwBGrUNanMidzwhR4",
  "key6": "3vcfbG6Ne5yxz8Hmde2kNPbx91159zKQ5NAsDbvYrYMGXkrQBR9pgWR4LwvdC7epzKdGbEu9Pb32qhAGzoRzoYE4",
  "key7": "3NuFm9etpCmkoRNYUmrBdxsYs7uHyqAiE1BNdNTh569RUgqfhZJKDRy9EgjUfRZHtGiGCvLJZVcZqoDDMJvUVHUn",
  "key8": "3V7iZKGrV5UoaYxkx4vaGVByFxtg5ApigGPM3T2RYbsyjhgzfAvTzhRdCGx7BjgQ5sp2FcgPZ1YwaH41mVM6uh9K",
  "key9": "4C56AQrHjoXiowJgRvfcQDhN1Ho7cFVqJPzah7x6ZeDX15HLFggYfx8pG3ndXbazXn4UMLx1GfBquuXqu6y5KHEp",
  "key10": "3wqEL3G6etLxUR9TGYToNqXPewK3KqyDhKAjL8DLqNWbGeGSQBwrTBaH6g9yvpFy1bMuHFnAHw4xzqtnSigf8hiJ",
  "key11": "3rzcUdHv7o5bKsFHvBd1dQ6DXNfxzic7wbPCNkbqGdbV3BptSxKKXsNDqnM5vQEHH5PZy5UvB2tcL2H6hPmrNjwd",
  "key12": "n2eWHW9oX54vAnVhDcQRm4iVmGhorevu1sgmWfDsxU8apQs2dFVoDcgrngZbri248LQhQsx1Gz6WNXXTgELLgMR",
  "key13": "4Gu2UQYyihe946PYDQXENVnS9dHSzuMxsZgkuYdvq2AX9amAgeo7ZDEYrNjnE7tY92H2PukzHiAKyDepaLnxSyLL",
  "key14": "26w17Vb9JxmhwnwqZypWYidHNfpLAYqfrfLfZV7mR3JWeKkjw7981xBpoHKMgT9J8RaaGZHQZDvmjqLtMLNizs2t",
  "key15": "XmFmrcXV6SBhVnwPubcaiDoc4BnkvL7nxcHLTLQw5RWm4yKQfVyN9qiq7aVFqhpc1TcwZYyNPeQabS5yTXor2kp",
  "key16": "5qUTZpqtzT8hSDb5QqRn81qRRk57wQ8seZW15bmaiSwrZTi71uYa8i6gsZXwE9gHobr6Ti6ZAyJyQ1PDDZukezX4",
  "key17": "5auZ5iLKV53b2b1R5yRr4jKmpBpnryfj3k3KdqAtEMwcAhy7t3cPtCBAKkf7uBJCgtTnunqAv7hjfsYjqpavVUJN",
  "key18": "4wN7JPcwX18jy6okc6rTLsNqAHLnBMV8rBoBTpiiCscxE9hHzRjbRuS9DbJyAdyLZT4H5VnDvFSeoohjx1CR159v",
  "key19": "64jbDVkhGGCBJJ3FbrSF3X1rtMGC54vJ2yhsAenjBT7hHhbBLY6Rd6yQHzNxKcw2H1218w8nKhzSxj5TRYNYGD78",
  "key20": "348LiMLRxehAMJe91AFxK4WMGu3LfUa84WtMhfS8wUvETEspXDRHqQ9vkw3NXoSB6mKAdvtXZGGPNVsVgbnGrPCR",
  "key21": "AqRZ2Kw961feDt8mFcBr5Kd4chSQhCDmAR3KmNCBbvNQyAMS9Qan86yjjDH69Ngs9rvSV9mMwRfTMaCmVSjhBE7",
  "key22": "3wpp6KZ8BqXCa7GzMZNUFfy3jeM6NLvS7uXtJoBSvXH4HqwAwPThG77Y21ZRMQD9mFfDow7JbS3pi8YPL75dRD6L",
  "key23": "WnehMdMNXg4Wni6MhgtduaG19fWj5nyXezoCua7ZgD9T9gG5ViTxNSztNjPvG5HwWHYPCpUe5ZvPPM4vS8VxSYE",
  "key24": "2NsRQNzn1y371AzvxmBUJ8Mcn4iLvx8b6yR6kY7ny5jmXsFQirua6ufqd4GRM4njcF3hh2X8mV6UQ3GyKWqHqWUu",
  "key25": "4SPLqvPhofDxnqexbi5oFGJStUem229nV98bTop17H7DypNG8cpm7cGw3CLb6iQFKHEwJRGMTTxvazdLBFj41oKv",
  "key26": "khisYHGtFkapLq1jeCLP8VLGCSuBqKnappgEpbxk2zA8Cq2J2QwsLLq99fZ97V8wV535p2sNubb3vcDi2SWe6ss",
  "key27": "625i4pJTBMXCf2rfp8bmXgipuMPmVn91r5QCjwrZt73dkjw7s4eLNJkAdbQNQVu9W2UZn2GG4mtgfr3kD6yoYTc4",
  "key28": "4rpQ9eh3TRuJ7HfvpKLZxrYtaqxboyrWQ9j6oMfwQ2HVPxAybhaaqGQQkUrMy45NzNRy1Z1WeZmc3bdJt2C3udWo",
  "key29": "3uJwRi92VEV2gQ2Kqt4gXfUFM2F6qRi9LvoJn5svAQLZcBaBjZCDtGbA2YsguRYy9CH4gFAaszHaAocpzWsc6voJ"
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
