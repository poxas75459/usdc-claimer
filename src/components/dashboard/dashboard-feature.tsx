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
    "3Lbuy1F4wAKgsQFJtGAx5kDxzfs1bZnD4i7Qsp3eLs42DGrJz7Yq9sV5hAR92Bhtd4FJ5rCX4omeSoSc94xVVu6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgFU9HfqDtrdNVwyh3RNMLg6U251WUxW6TufUVGZWe5YW1eE7rAKtgheXVwMdUkLk13sU2yehmkbuUu3PCTiH8X",
  "key1": "24JNgzY19v7sNhBEzRUeB26pERyucDUDapZ8N9nBcsbcRZGKjDF39ScpSPwxrUqB5ygsrZ5FFsfc5CHNu4GKgo2M",
  "key2": "2DpBdGdqyW9WCjALWbJE98JfYh8UoQK3cycZhg45XqxX5VNLCHbvm8m2XhpuFw2t7aXY18zVnY61nz1wiWDLZhMX",
  "key3": "4BroHmSiwwJ5f24dpkBLdMnXdENDQ3FAsA6xGScRfwcGEjieBMoonorbC56aQmAXAsLCnzd3fihWS7E79sn6Qef1",
  "key4": "3suiDkV5UbhhaJEBcq4u1WrvRTLJcJh7zv91zFeQjS69UmPRgZH1cczWSaJG6EYVwtUBoiDZxWuHbnK8n1jGiMSt",
  "key5": "2H1Y6NFzmLUhnJVyyhUUCvqVUnfNPyvEQji6fWbroNaEo64KfAeWZhJguUuh4HcRE9nZ2NnQqG8buJnu6oMaYqEb",
  "key6": "ygAXzoWKDXM2gvAfJJ97cVQcqzBBgF7BjVT5EVuF3dS1qiGjhUb3uYvDst7Xz8LLqMvHnbGYYxEJHoAqhjdrNbG",
  "key7": "3QJuVsWspwRySrMLZHwjCfD5Z4bbpjVkd4ERt4WL8pcF7Mia8xFxnhYs15HDgtwhMivJd6RGAfasZ6254gUzuMA7",
  "key8": "23xLqZNUk3u1R8D7RfmxgtPcompGDedQaHyL1RnkTq6rpjvxp1gstmPxJ95v2sxwAfU544ZKMtRkKH8mfSSGUxPb",
  "key9": "2Hh15JweoNpjqhQWNPpsgTKEge164oHY6PunZSaVgjkA88kHh2KK9uMrzPYLBhi8bz1MXDh3dDbi1sCxJu2Mkkga",
  "key10": "3hDn5eXuTbniDyghF8vKNFdQV8DBmRGMtzKneGTAKhAuoL7mjtVNDcgK7ynXSPTvUCtnGc6DV6TeLixu1RBr5NZn",
  "key11": "4vQoCBTAHCrx4xfwA7368BJdLXpST8G7FS2x1PXMRjuCHbgXCHm1CSZi58YqkEBjjUf88fETxnEiYCSYkvzDNjno",
  "key12": "5bgFaYS9vDhQ4P5gjq7BLW99Q3f8iCkvXKK4oGH6GNt6svcnJ5r1wSRmUzpgR2wdtWmvpHohTHyY5sQdn3LxokRV",
  "key13": "4dLt16spAXeshtmnXn8ELJzm94jwtkmFVzbMGy6RHXU1EMn1MrqSsAwM7BfV37VYYPXXazh7wxgX5wFqAsfhJQkX",
  "key14": "4UUtwBeAgPF8sz7eDNkrChWDrhV6nJTDHudT1LYFuc1gtNUmF666g2jUmfm5Gj3uvh53xnE8i16F8SuuAyC5gJig",
  "key15": "s6AHpPEFk3jBHLQfzxi2akY7Su1RqmT1jwLL4WZgCCrwSs2z7kbg6MXhcHbRs8QfC82R85ooZsAyhp2aVNZcoFz",
  "key16": "2H65eyr5KuHE4HarrYYSi4kfLrKySEXyJ7a32nJzrBvzdz29aKKKarvsVZgKGpMcpjbspVpbBEDwMDUUG7v3opT6",
  "key17": "26WYSRr41mdFRXSvFZFm9db22A9L8iEbYa6AL4pgeMQBCBJpq8hndpeNgCv3TQYDYAxXQs8kF4RJoDQ6TF5JVTgD",
  "key18": "vjeF3QjsN7YbCwSiFLRf9vfK4W1oVtJ2kQt62oRM7a9GXxrNwBA86p39AjcvYBB5zKDVn2N3Vwv8V8WfHBbkwb7",
  "key19": "2uGoAFPfxxGxLgfpbL5bGg43vF8vbVYNa8F6r7VKcywkmcummBWYP46XWWRc8ZWAN2fbkpwS1fr2DVbv7a2GZr5f",
  "key20": "5SWFw8xkYEwyTwTu2KHPt4ZdiyW5yPYNoY8rBFiVgAxjeBbzNq2fXPQB6AXLNjUsRWFHipzkDmX3iL7EzPmyghcA",
  "key21": "nwmDujSsuDTfV4Ms9RPYPMhGWzqrKGKYdoHL1D7v5E3Y1aVe9vLAUH19qx9tJ2dWp9zvih43MxqQK5wKFc4KEtN",
  "key22": "64hVF9ieeyatFK1XoEgNzHBRGSqyhGhoXRqnvBu4j4hFuPqGUgSyo4VuPxXru8sg1u9Uuk77zpTHzd82jXnfuvCV",
  "key23": "3yAMRqtc38Q32mzAua1zzGU4JCoxAQu8mLrPPKxsUjNgriBcm4E7fhqeMLBTNNWz4CmqLqRQD7oGm7fHuMCMt3Jh",
  "key24": "46ekrbpRgFveaujxUbBzpPhUe1M93RzmG8wt1Xin9N7Ltti3q9wWqgnX1apojMYHVnDzP3TErUC8tH3n7XiFrjU9",
  "key25": "XJrq3SRK4sBkDNnxMB8MNJP7DuUYw3ytFYW1Et34HEmDF7kEcEHYJea9K7srZpdRceMQ2knpvvpgYViimijH6Jg",
  "key26": "3pvuPeUyc2wJTo3b53XdveFVAdaVgJCKpCAG7B8Q9kKg9LRFhf3D8Wr6Woyt46K1vf3hLAGdvJ6UodWyRyuBoGHN",
  "key27": "3kmjPF5mNuMHBTfnmy9HYC3FE7beBsd4wtMq99V6pYQGVqcd9SALCAh173jsFDkxQswDYoTG4WRrHtRb2a92vZfB",
  "key28": "3kWPu79Ex1t6q3t5k6fzo8fZp182wNpt6JgGvNsCDe69u7BnmUCtsMsk53eE9knkhc1EtfsVN6sStsgh2LaKTj5",
  "key29": "3JwWG2HkQRAbXQVsAhKq4rh4DH4HwVqB5V5viQEawB8zT2THwqGTCfVegpt77p6ZUUpjYbRw3zG4UVkzToYTkYUR",
  "key30": "4K3s1GxmbNdBbBtigC8pmn7Fk9bGnDRsYS5TBEwhenyHZE27ib8qdAtJKpsa6A1qQRaoxHVPC7k7XP9me1sjCSiN",
  "key31": "4eudTA81d7hTfuvzUS9vmtDq23hqRMbAmTF2X5ij8o1zuu3PuXfZVqGGwYJQK97DHcVmdjwq1JDf9Z5gpcXMAm3s",
  "key32": "4F5T854LmydYEBY4B2CCiedqpYG4Hq6F1LJchyv29ze1RrnyomR3jJ2e4Lk1c2kATTakkHWAFwknKAKDPRsGzCCt",
  "key33": "48mDV9moYm84CXyTAH1zhZLLMBW4ZKRbBkckCCy7i7qgBgg6LMU3yqRiodbUve7oGQdzyPmetmqAzicbquhcKYQD",
  "key34": "2UB6MYntXRqurahpBwzbkSJHzj6y9wWDGGCkmCvmJWpHkZFWEKZSaiHpcwjcPZH3KwSLNT5eyfMm4C7KcaLrfw7Z",
  "key35": "43gkhYbPT6mdouB9jbG5RTCF4jTBkU3ktG3in9zhE4ZwXZrmLWZ52hLLGMdAR6DFfJ28NUQeo2pgyFtiYBzvVnM5",
  "key36": "56MuA37My3LkwLF3FmEDzLcTQ8NvRZgbQJD1gJ5y2gwEBMLD7nEfBdJ3FdkaobWssWd91Div3fwDNFGbnpV3pLgx",
  "key37": "5Dn9WAxADZzFqKcyYpLnjBJyvNnMs2828yvfrJhfuPn8PKUaWviYUB2YZAqSuUaepG2XQY52SSDDfYh4Bpqgunsm",
  "key38": "3Mf7W9ymQ7mqw9MAHJj3bmrWeuGjabZCn7Wf8zxURkAJRgLsEZrarjjepbc3vUBYzHZEYyVun96JUFZvmvv5Ku12",
  "key39": "5B85sYZvzMGUXzWBhYfAXMwgV63gnAbxpcUubMbK7n3eyFmoS8DH4C58u6V2Y1VTEPqfPyvjSx4zfahmUPQCyrTL"
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
