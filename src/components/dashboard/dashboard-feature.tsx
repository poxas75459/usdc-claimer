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
    "2YjFdd7e4nUfuB4kKEwHHmP6SKaS8op3G8yggaNw8vRScfANtg2X2oPN5Ek8eRwnexqdcQw76fsT8smCPpgVn6Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKRB2xfXtAMiM11qGtXaTHrtUVBD6i8AkXVQoD9rmcn9bfjYzdDyYzmyzvJBBfPjpjk2P588UAWBvrAu5fVU5w1",
  "key1": "hkBPxanp7AEyHD1GUCPqUFAje48i27QBJN1zHatZ6uCpidQCg7vRz9EWzv1Ch4VmK7FcP36UNtc1vwi88v6cgmW",
  "key2": "4LHDfE9YEALr5EaQsnHETJY7DpHnwpFhSUvUFh53RbJYaLftJNxyarDdTwHvCKXVFWYejyn8pZ9GoMcwtk3yd4h3",
  "key3": "39HHANVpQ7eHQ92YQCoazgMDArUvkckWLy96FVntsQS7jSmEF4cU5ugFz1w5ffNWz2gbkgPjK9rR73gixN7WiY6f",
  "key4": "52cTDFcYXwZDZQ27i3omGSStzaEKWSAeJXw4w6c71P8VD23HBXjjgVBef9S3rTrFHp8FJY5rK5YuT1QwxwQRiezM",
  "key5": "5A5fyVtppXQp8fxk2CD2pe2fvni4aFsxTSS34rfbHUzAB1uVUVheHidpeQ6bQokTiyMWUszfVJoJ6hAdZ3yp1snw",
  "key6": "38omaJ9WPS8ZDcrUppvRYkKHZBYAAwNXZmLbaZ1CtWBD97xcuMPcDdHawXLL1fKDGNrAKnhEhxR4oncTX6dvXPnA",
  "key7": "4gAZq6GoP9CpVkEqK4zygCNpEMunNuLLDvyYyH39ErpcVpt5MnqPT6hLNuYj8nd4MGwwcWmta8dyDMsQ7zFgR9oz",
  "key8": "22jrr1CKfk1VG6yXX5D1piqPwvbFqDWZYraTQT1JLk2Zp5dEsPz4yyMes92kdhH2V7YuF1f1pjb51RNNvY42bmXC",
  "key9": "4tDMp3pMvLmbWVMAvfqGasrMWKsLhrRSuxrQfTdid8WScLNLzBoRit21pvcEiNDzWAZ8CDQymSzya7XYAcYv3koH",
  "key10": "4jUZVMC5ovVFmVQwFZpivQRLETz9yEgZqC7JpdFMncodDHRi17rQXCntXuV9kNGcH23iavDDodwjbYpqeD7ctS88",
  "key11": "3EsirRwnsPN82MbEqX7cKeLYiZHjqwkfmFvc6kHT3SWyhRMAnGUpN4jzWGKd7FicqgFCNEorrJbMhRwoqafYFnqr",
  "key12": "YMZfZzkicWcuz7YJ9UT4nv1Vvzz58p2TNJwaAGMnSGnuPuLvpgDfi4JDcvZ3oNEknYdx1Md3MWtA1kF8moWutxB",
  "key13": "3pHM9AZ6ymDdAJQaEJUJr3grakMQyDkvsXs4Zupwjj78Yz11qXDEmSWr5MZXVx7KBt5A583rbaXUXnR9hZtyQnh1",
  "key14": "5iiFuwbBbhfL3R9JWS2JP3ufJ1Qw4nVmQd7vU2uKgU2vNpQHgWaSDcW3EWbJZYSVMAP3kUTsewPt2jCDhwDpSsxn",
  "key15": "4su56yFJyWKa3t5YE2jiW6mVhRmF2AXoj8MdideJrJgqbqXLA8bTn2kybLhZBwvsr9jqgS7JeeLeUzXGHdgM3RuP",
  "key16": "q42ZMMbqnMUuFbBWByoBcx3kJ35C2JDsMHcrpqTrforp2tSPLsC5tzmVca2JexR5PMzcc2ECgp2YwPoSzJMCSJP",
  "key17": "5uLz3Wwr4MMFVZY1tXUxYtBMXYKNbB2WVLgZCgY7HFGWm5a9Pk9txS1p9bQm9fbvhmcBTxogAGfBfvTxbgeespDe",
  "key18": "4cG9iU9tjVYWMaBF1ATaKU1tQDE5hEALzoRjuXMhP4XRxqabHa5Q49eqvAsQzhBKtSWF379cUMNturmonSuRXMV3",
  "key19": "5sBxg2gDp273RchtqXER2Gykr4tMhxf2zdWxJi2xjbNJGgQ8NG41CAUmryNHzobyxkMrv7sr3R9dqC74nv8qiVvC",
  "key20": "oFHgx4B6bB7pcAcW1tv9WVn7MxMaYDvZQuYAWHYL2a5dhukThCxUnRCKAi4CehgxcLcjTKVTm57gJDg5sTHq5xk",
  "key21": "4qr523LuxuFuDhTYY5Xf2qq4BbAuV5oyR2Ecq6bbhke9KKa39q1MgeB5Yc5nJXvA2gpZyjpwwWMd3JkRRzcKhbtn",
  "key22": "7BPw7RZs81rBoriBabEXf1KJwGfF52GWe4irJCXGGa12HFMdmAaBdrWU7LYdnupr8FrYccXvwEGfdENGCi8zYjS",
  "key23": "WPtgeQQjgcbg8XkrwDN5aEBwuXEseCZDKhzqavJvUUpncEgt6n6pGSRvt4Xu24qiMNbtQS3M6wdMjgc9kR7F7jq",
  "key24": "3vD5j7LjPiscWaDmei7bbkkmKwyPqAdYJEYLC5R9i3PVM8DQV1mhdtmNfkMSqzZXYZ7kht3m85eDcnaGzAAhXTJB",
  "key25": "5k9C6a7L2uHdA2JSoUD3qmCK6wYHfpYCo3jTz5ctJK4fAcz4PPcCvJvRnPdkoLKDwfgcEsJb5saYAknfFbzdtWSY",
  "key26": "63ELDfJrHfqSEgWmMrY4ygnPVv4WV23kdAMgSNGcXEcA7cZBaPb8yJc7YHKr8yxG6xMbgw71z8txfv95sxWK9Z4M",
  "key27": "4JijxZBYzT2k4g33sq6CGJUSmufz8GCr8f13yJjkn21g5skx3fTUWL9riKpjkCSQ7hpUVoHKjYq4EeLmWy9eiHau",
  "key28": "524Y7jXRGTdAqxoN6XvCcFqXzheQ7JJFtKLcJ118rx1mfDiL74qXyUPCkaojpzMfLWe1K5WpsPBx978NLaFTFPdJ",
  "key29": "2KM37i9QhmQK54VfDQ5X7U2orizj7i2fJGVwaqkKAMQWoWz2cXskmCn2JLsS5LhrE4LEzY5nFAcS3QXwo56dtZgy",
  "key30": "usTkk2muB6J18E5kDp8Rn25JRJ1HRnkjogM871v432zf9aH2bM2s9CaEDcgseYJoVNWMv9jDWm8xcoNtFwXBfqW",
  "key31": "peuNw6tjRmXxxyVrcYU6qQvhB3DFmQnBuKM4rGBSMaHDastH534XtPaBow82nfk4sLgq5X5Q8CKYuYhuB31Uic6",
  "key32": "9axbU2V6D4n7zwbX3xbNRGGQKTARC896A8GPPdJhqtwU33P4fBP8KazPKcEigQFiDBfvnjVENYrTps3UwXNa2BS",
  "key33": "Lvpb8KNo5MtrXtAiRwjCcAmLv2heuVJ7zM4W7DVkHMEwoKqGPhT7L8XP6V5ZEy8MRpx294eRCWoCoSrgpETnCVK",
  "key34": "5rpVrWT9JmPrLMNN8hLpyTmwytrAzX84CxKag9uRw1Ab7boqqhskLdPkqXLnBMiDNe9q863qTopJKNhbtiHZyp9",
  "key35": "22CjpbWMYc8YSKY4afX7V91jw3DggyiJWPqZQgHSJ4MSrDMm9A8utrZiUK5t7yfALYkAXqaYiMasv7ppUvQreDZG",
  "key36": "5jEe4VN2qzwS9jyDbBqdEjxqQx6CZMSE3aF2CWvCSaZyETf2mc7WwDrJkYmNBvutpdniFMFbT2t4iAe3iFP8vMtc",
  "key37": "3P5fATTuxDoWu5ZHLUsn7N6T1M1Pru9JxENMY29HGNMXDKGgSQDbZgep1wQi9tYBuccNsFxX3jvv6BUrKjNfkY14",
  "key38": "3UjSFTxqEWX6vKUCZ7VDwHZLiakaPMtN4kMjCjwM6u7CL8mNQKMhjYeTb9KPKsb42EbYEdA3heqb9LvyCKefZ1Vo",
  "key39": "3fnHpzLxvPcN9TiHe6idKJfMy1PunAjEF7sH2SuKAZ1ZGiWjanQbx4HWLz4oQs1rCJ1q8CKzqyBFsm3qkM9p1Eno",
  "key40": "3n1j2zmC4JqrGASd8rtZLM9TgVjiPEA2jwdaeRviTFnA682BmQHV2oZRSmPbg6tz9RfYRyHQzoYxAcivrbTUBiNs",
  "key41": "62Z1Zost5wKuyvdWTZnxfuprxTQn9LrxL1Pg63ieqfk64Z2FuTUCa3WPEWRSZBjMNmBougAyU4ABj5GVWfM58EWX",
  "key42": "3immU3gLHwiBTGrS8CwP97A7uPka1viHv9shoerCXwdPuxYdgfkBQ3nvEi4h91N8Dxgxuu8aTVHbQLaCmtN4HgAo",
  "key43": "4itW2n7snaXZcmz8NueSAgTCHxvwjXvMcTraYsMLigGufSaojVpSvY2Zt4D1ZW7Sa1Zms1eKxA9auvaXUbyJsFtz",
  "key44": "5XkgVK2Ew6eoZyYSwZxXQWzF7Wzqh4tPVtsTdqU9ssndgMwFNjqEd6Ai9hbYgbmqdcipf8N8eA9Luy2fm7rzKM1y",
  "key45": "4irb6mJKwGZX1CVDHizzv6dQuMxXMVVH8smTntYqT12U9CHyyhQfHAk2JX48tcdpTFQ6FfrdzkAxAwYVXU2TiKH2"
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
