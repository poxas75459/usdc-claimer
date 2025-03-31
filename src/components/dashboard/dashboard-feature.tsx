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
    "Htrm1pXgBp9MoUmZwP1Ct4RwabwDZXoUK73M9SwgDFrsAUbMQnoKZ8kK3E6ww3D43C7TVBDYghcekdWP55MBvsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h66SGiw1S796xGLB1eMHx6GGcGt1QPiKrw1SMZ4uysKkHf6kKc5s4X5XcNJjePKkmQ7X62Na52TgeJkkkoh5ZVh",
  "key1": "37tzXyap5M9ifPFnfNtMfqsRz2VXBb6kMcRo6P8piBJs1hX4h43mAhQynndbXC223yNTwnmjDwTHFbJLcsKek7qG",
  "key2": "4qdtAWJ81TSzPBLfmYJBC638ikRtJ5s5oKcXPsGHZCbjTgjYbJf24WTRFQGUuztJxhUc5BQ4o6fo82RVfBkXPyTd",
  "key3": "3MBevz8SCmyUX8NMoM9yZCKE6DTi2LGKBhGuh7wxpBy68FcaWdVnwNAxbVN8xSVxC8U4WdnLPwgkbbFB2dm9NZFC",
  "key4": "23qLaoiHGfKV1RyubFQShxextc1C2RNESvqRLgmq7Whr5mi3mDMSi5ZWca8nV5YAjUMs7sQevWJEW4BYECi5Gchx",
  "key5": "3WgHvR9TFjA1VR7z9VteJ8knSw4zyHTFJuc8YAsAMZHsHe8DHc8pfdGserYyjK5VXyxVLojgt534z9cywGpqmeAH",
  "key6": "5GRgXC3DMdMKGq4uVzV2KypkRDPUEFSsLaj1iufQ9sEEeW1rUM9DKERmvNWuGQuDtGZWn3TkhTVroytWr2rn236e",
  "key7": "3SD1tCHKXLdq4cdYQwDu4Js6jXiEz7MNDmLjkRqNuAetm2G9Kn9cCTKzN2FGvqoL31w833H9UraCTKNUdrdW5PPP",
  "key8": "3Feqd12XzDuonZqpeFjbLhatSRaNW8pQ6ecCn4jAyVeXXoaBYd4LJNWnJBQzndrRe7jELVm9Q2ARibtD7s8T4ZsW",
  "key9": "vwKi3SfXEjwdDn3Njdzj86hETagYpzREJncSqZY38rhVF8u9GF45yxnEapaD9XJtfFu6z5Nfy7UoDQFohr2rP8H",
  "key10": "kF4o7GupHgGZiLBnjddwNeqUUSjoEP2cmcAzRq9EmGJ16fX2hbVALaLpqXkWqRgzu6Y9T7GUf4Kba3TLjvB3zvD",
  "key11": "RrewXKdqAKLq3PypjxTSthbC174pX6ZeWbHeXoxc15j7p17W582RPTCKxYcCNLiMJzUdt6QLCkvb7UJNDfebUfy",
  "key12": "3SZhFue54fWBwndGmamDVm2MAdLRBvfTh6zgFAu6xFpJJUc1uwYSiQMztGp3j5Vs8gztuZac8SWX5smNhXuUvNZj",
  "key13": "31ZR27fHYkfFDhn7Fi64eFJL1rEwFNPL5BUvCwEj9tLLJJ1P1qEEEygyy6sfiNiDQyFxMMToUp2EeH7pWCiqYrUC",
  "key14": "58ohWBLbcsWgPiPFnHVoAKPHBVCNihbFFkScbHhuTfAGsuJPjcAbFXqmRHcqTA8Y5DEcuJGAko7xd7BMMYrDmue2",
  "key15": "67LHC41pwL6fTsmiJAMnfJf1boQ4kQQqUgZZyx7rk3fGxgyTvVkpBp1noZxCZGaucLwod7tfz5Eu3FiVhv1kgfEB",
  "key16": "EjYBXtXScUE3zyrwqXE9cnnWGpcLD1nqwsZH3Y8xpSShSN4RzbjVYsbw6DgsmaQ7jTD6XGT9oNLSqDn5NEgg1h9",
  "key17": "cw45vWbT765xgoiPZUerkTYaZSuziW5WEERpRmYNNcsAWjug5Pd7WXGXQhHMarHnbUTXB5gmbuC7oYKUSQRsPvK",
  "key18": "uRwxrYmhvUSX5fPj1K2qHWHbMnKZ14uFHcsxJigzh1WkEXuBe9vKMyzT3Nr26b5jz2s7ufnHMXnV39jxe9EaMjV",
  "key19": "5sfNxM8mdjEtLMiC6wiLKZDJ63uYyTnRcmhLN6xmvsS54BqFhMsPxLyWAou6VRe4trD3vHytZxv3S675c1vAoqeR",
  "key20": "63JRwMSPSVXoBZbPEU4gndSwkchKmZLyeWU5vJikd3eaNwXaMVf99RcvFz5wmsGc9u6NagG7YF55JGRn2FEPi47g",
  "key21": "4dwp8qeBbPu7UkEYC9rtPHo3s4JDnAP6HB8tVgFc8CpZSuUJv4iupqgiEYhEpRfmTWWyeen5DRdRpqHDKJuW5utC",
  "key22": "4KJhzQFfpVT5rACrxj2aVQ2iTpbVcACYYzCckDzrYDFjAnzjzhbwLYYetPHWm2vJ4ia2DyoirdPFvtSHyfZ3B2bz",
  "key23": "3hq1WeUXxeLPQH9T4y6k5ftJyheLiL5NNNZMkRwiACLHg33h4pNUvpkyrHRmq5NsVBDLZ6gWLwUHJP7Jr9QuXUdR",
  "key24": "3bGQLgap4RNjsHAe32kECEHzDCwdmDvKGXR8H6YGHexLnEy8Xx1ZSsSBmEvtSeMai3h1U1ftxt4UhJxgm9aFzkbY",
  "key25": "YJ7mFuYH6UfeVcdwiAwVz8TTBcZDHYbAuqxWHbdbgmXcLb9FrTuR6mXPaEL8cCkr3iDePoLWyPfBA5omygPW12M",
  "key26": "4wNuABFnDZatEe3T7gVocPyqUDpGiADk3znfSktPVbFZGmbbT9XBn13DUh7P2nfrVxvZfWkQNYmJz1XZ3bNSBguV",
  "key27": "2MKD4vFCQTbWP9nwyvpfN7AxzgXo6vmQad6eW7msWf5g2waWibsUsQTeDdWkVDpVxQSkK85ungqZXB1LKgJt3CyC",
  "key28": "5vmo5FSb7EkZac74gzxHxd4APB2HEiHvyvTp8jCnkqMYduC4k2ZgNsnsvTMYpYtvCVpELZ35DNtebx643jXhD1i1",
  "key29": "2KzLNpJmL31FJBwc4KFaXsexxN45bJQN1fyQUif6FNZ8sGbxTH8EWahfFsJNnd2WMzeoVRjrfRk7GsvWeTrADHNE",
  "key30": "VTDkewnvaZyXE4aF1tVeGaEivXwaBkifDScVPkY5qQBJfaRkifsCafhFiF4C5T3GQNtvyeiFwnxN9kbrJxRQ3QA",
  "key31": "nAL72tdAn19FAbqQcd2XbUvhQHAqkY5Xi69BhoEDfoDjFxS4gz15S2AWexNB2gEdsnhw2CgZe4HC1GJ91DjAUxQ",
  "key32": "5d6oG22ydjhuG8JDZeA5ZEk7mEnqWNYYbVJo2ZwLB1YTfSktNu1puokMibRdWYEKC8RqkuSjkRYJgya8VKayMZCC",
  "key33": "4aSpDRBNChtnegwrTm217cHWG2y5gAgERDJuvxfcXqrH2ypLLtbbFKmC8Xe4kCdHvGvaZA1hrZoFMCsaLrZnfs4z",
  "key34": "rUKFSUTC93xmNCYd7TqZRtcJPoKznmR3TfdGposG4QXHGbi6gquwjmAqqfKBHKGt6tALfXyv8xXcx3iCnBb4hjt"
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
