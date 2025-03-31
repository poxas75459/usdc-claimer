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
    "m17yPqtaX36bKK6ud1tLwLXTSWX9fnKxHBRGMgkgSTExp3wqovfBAJJ75LfKEo6ftLwfxkSwKP5Xrh1kRpHQXtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EuSSMgdtvbwvbAaEn7BJPRXCssPdCQAKSKtNaGV7XC2UZUi1ed63ae1QBZdPkzt8YjvPbDif7ieUQM4yxB7shW",
  "key1": "XimvnaF9B2mkiRZUpkZ2MCpcAqRNzoHa3Wmhr53XNkjyap9vwjEiAZ5JfEa2m4zmF4SyuUuexA6NLpKmvsXa6R3",
  "key2": "YjHvXB14yERz1sncHnzo1XA6GBHjQdUDCWsG5yMuTzbw4QWPho7AGnuA2m6XYUQfHpu4xmDa8wh7sh98q4sCdbZ",
  "key3": "tTeqeqRby5M3X4x9nGQBZFap6J8bEgSAzEJwDR7jvjD6b8dafDZx1Y8Nz9iYgrFLVaeaApesh3FXfXJuXRQW4Qb",
  "key4": "gGYEWMDiseHaf5JDLkHknWkYxxyH1MQDLh9RS3DiKnWETBLFqhm6ZPWpujidDVSQnGKWADQ89Fv59oht4ZA4BUA",
  "key5": "4aS6n8X5Be6w4eaYe19iZgpU8nWpjca7JTk8YrrbceRk5EMFdFodr7TvQG1FuHzbwny8ryjUf1cmuERWMRyan9Eg",
  "key6": "51BNxKQpWmTJGkAsMLdCQE6dknpRgUfF2uzU11B7HfTFrXyBPsgyGjU6w9RH6HmLiSwjFQiRS9e49kPRTW64By9o",
  "key7": "3yiEY8JMmc9N9KjxaBnrphhzC4cweZEmVTatyrAHPLLxpbrxj2vFWdAEYBQaB15b5KUkRXD1DQ6fKEtituar8WMC",
  "key8": "2q834oTbE5oCmmnySjJdi6Kyp9fTnsupX1HawNR6aXPxPHsqzGk8V4nFHdxqKD3JFU7aENTxKhG3sFEwVyy4JhAX",
  "key9": "2xLbumkMLQhGwqD84kSQxkhSzhwm6h85CQsFNAmSk8gjvNTVgigN4PSnoiUeDDvggLt1ufNvHJAMexdKBXf8C1gW",
  "key10": "5eRkmeBRcQnakQ9KTqie9G2vyHpvv9D5q1WyJ8zgGY8uZpDXeZpLK6AcF9JdbVoSqWzvbDEPkAEJKU5GxBtaxw1E",
  "key11": "36Ga5UBeFY8xRcQM9fVeKV8xJti8RYY386a7oWKneZ4eRFBfg9L2VqfB9yhPS89etmGaK8zdjPfsNQa38q9pWX1V",
  "key12": "ckG2HzKkuNAM7tdsXi2XsJwZ9L1PtY27HsvcZp1fgmAeaAUQ2mJCe3xuSYg2RL8WxkpDqLbRyMGAhXRmRUEqfz5",
  "key13": "3oG4FjLta4ZZmNiGRWWrGqcBvbb9yResSVJ6utGudhKy47xqnRMxDasieLR2SdVPQeeavYPvsEWrEjC5M4qh8Qtx",
  "key14": "3Khgrr9PgP2svNugULRp2fVSbGf1pTbRzMCbjDJGWabFvyyWSQFURuuFXDFNeUtXVqW17P7QrLN3gpQ3qAZcK154",
  "key15": "2JXQDfVHnKqKR1tMvaYuak6jRXhjRG4XE88DgQ26bfjV1sxfHjJ54p5KAq7zc8fVSNmG9HCu2TMq5HCcrRGBXzc1",
  "key16": "EefcSzbJUmNProR7MGNCDLhpJXNFWQjMB6msoVKCyyYnPoVWQu8DzMWtwdR73K45FwUBd9r2LAwVq13kAZneyjx",
  "key17": "56w4PmPFDENtw12szMjxXhveMmGgsfKPp6WckzXZDL4XvaZXsjy2W2Ta5H4K7jdckTRtCscpWV5W3tZ8dyzrY6Ne",
  "key18": "5CKZe62zLH8YEMG3X2orB1snDba3sabVM5KT5pEVQw6of8XZNjMP1eaGbRzEeke7TYWKv33gkNdCLUsumL2XMQjm",
  "key19": "5ebMW1ANiNchZMJX272up4opYxyc93c2AHrznTtBtmkYznD4sQAbredpx1q7TBc9FYtEiWgD4guvnvJf4w5XwSdu",
  "key20": "2g974utcxvuqBTfQjHJJC1v2ymbs81nGxe2ctKn9kSZ33cLAZ9NV9xegbNYXRsjiqur8p48tok9o5YJaeHyZCBbv",
  "key21": "32hnRHG2rxnBZTkpHLcTbg9jcrJK67SDwNW7fA2WnUgWqENS44WgB1tcUUPK8pN5gFJGrQw4mA143WF1doZ6qn2b",
  "key22": "2oUZUuDCwSQxvaitQgKrYfZywcotPG4TNoYk7Kpg7r7qnSYdXz5FaGF7wNUXgVxqZrUjuzZ8yh8i9bA7VpVRcUQD",
  "key23": "Wam1pBi85zrmciy8F8jq5ARPF9647o7emQmhY7DiXfwEcct7MXMQpyaRBfkHuM3gTFydXDV8Bq9R5WCuZmJywy3",
  "key24": "4YJzMbSD3zcx8LyS3n3soYSxGXWaiSwbf3qorGGP7yEKXM9JfQHcrxSrvWKSz4Kb312ZRztvbpJmsFT2CVx65T5o",
  "key25": "3f1N7n26szzw49G4J4YPwcXHwvxmKWbHYtxpQ4KP9wMnWTkDfUodszdKfnCDEDpHoV8e8TkcMY7hxLaQfhjaEdgS",
  "key26": "5byn7SHnwzZ23MNwbzquZT6eHbqzMbrvgGgTE22PHZeRLhqYMrnuA1KFRjgGJjFzzPbec36TP2faS3kwCmvzdR55",
  "key27": "5cHNSNB4LnBDp5HzGLShfB8AZor4gqCBiL1t7cssbMNA6QZ71ZnX8oMnBVhhmDbgWVSBwx3QCJdh3EPBfmuipo6C",
  "key28": "3JTBrKky7X2tzDNSGXuwpS1ce9jGN2qyb3U6JVKC5BdfDMjnmAUtufcnGrFw5Q4Co9NFmH8Mckd1jGcC5Gr7oFBc",
  "key29": "3KGST9NhJC17qBmk53hKkJTmkqqXVyJg2VSYhPxjJ3jxuA5XEGbrkEasFAVfjSnmHzxSNi6GuRHSnv84B5Nprd3R",
  "key30": "5jLMDTrVRebMwYbZVKcdjCUZVWKaCBtciAnU9Xw6LuzRHSaUonqxtcpjur4ZTBuhVUbqz1Qn36JniFtmShVjPws2",
  "key31": "5hoBKyGFs7hFyjcokMmbnFrUXJ7kUHsFR4CtrDHLPwBh27DjvLFXySpNEPC13ju53fxcSkqRECrSPJU8LuGVzWkm",
  "key32": "4Qqs7zjm38idypGvvSmXw3ViqmV5roUp66qUupdZFpE1AGkLFh4zRY579oDwCuJ9JjWEmZmZCLhEGqEnnP3L9T9M",
  "key33": "xxnpAbsqAwov8pXWvsEe3P5xU31VDjW9QTyhPBxnkYbxvjXzHHT52JKr1qHLYB2HHCj1sQuceuVtufdMwRE9rVJ"
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
