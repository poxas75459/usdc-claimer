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
    "4MuV4iTs4w2HNaH3H1zvyeH5WutMgjvxu3a7KmfN1M4GEryvWvLyF3RLmfno9h7B6NH1ZRkWXb7qaCUUkSUihhHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SM2hnLxTnVhsFaE6GtqfMWh4xY8xuJTQermgjCayANgscdr6bLhbEkNNSBSPHDduEnbMUBtFC5orBFHPcKSvkdp",
  "key1": "3uoUgCEvmWNKbNEMFor94QTNY24oaVck4SuyMydUcBXSQU6kgWNN694GEyxArUF3aecyJTymKm29ZMYVPhYDwnnq",
  "key2": "53ftxRsr31XvgJ2cJV1kL2VpRCsyNVSaPYDRpBrgEcfQVc4U3uhq94xxX9q3GBBdZAbguzDjfWpn2u8D4XCf37Nv",
  "key3": "4auVdnwaUFJYXwo67U89S4hWtrGLaK9TZvAGG124ouwyodj7dkjM1VHKs9VrUReVNdqGBfHiAXxRSQcQqeGTLBTf",
  "key4": "JBizrfpdNqBraRWLDXEYJ7D5VgwQoUMZofX8jdTp89cbHjCziiBtwadNa8gWYEVo8HTXTjntBoiRFBvGCyxL12y",
  "key5": "atPekmU4ipnpJ41rpER2LQLAtRUBCDKUvkPbLmhyXZgXQjVU8SuaHrGzjQwxQPBU2N6TTv36GtwheFL5yH52iYc",
  "key6": "2BzAWVMrttK3mTbMw5P36P15i7yNd2UWnYxi1y8AJ2S15PdgW4EF1QzbdV7MpB8tYpjGcHGTcZPFN9B1pabpTKip",
  "key7": "5ntaDJAEbkMrB8wLu8QHnpqUXtdjMpYM9EAXv7Ht6NtyXWyNHvzgAbCs5gggfY431UcCgfFNsLMHPi6XzUapX1iJ",
  "key8": "48mkfrRCpEjpFKyLWnTHyEyzxdHRhYZDap9EwD7Quf8HCdTH9SJQBM7XZXofyTyFo2QWbegcwrwMB2P9b2uHXLUg",
  "key9": "8Ti9s1FDxNd6XAeQBF43irXzXxPVmRCtGDD7wEWaQbz6aNK7TDrLGwsyJSXUmwJw8UCeoT41V17YFmuo9wTjCp6",
  "key10": "aXmXWb8KUq5jyYoZWD9LvwvJRbPUjmfjqTxeq3mmsb2DcpNUyVRsvqLKgYNNcN4vz4at2wMrAvpupubMhL2ZcaU",
  "key11": "3TTfGQ85wniH9r78MnVc6m4T4gHE1aCoMnbsDvgczP3SESR7LgKyDsbxEa2k77ZwdT9aMsxtkv5a5ByLW17Ruj17",
  "key12": "62PB9euKKQTSA28mz7oy5Nwd9AmmZuDoDmxB74gPSRhtgdKJUGGGDuA7NrUEMCYDsjP9c7GWmPGy8uYUE4akk6uw",
  "key13": "4FaJx5CRjCNH1ySDtJqoKVvUdWPHHLWp3tsXUVUzNNrVEFBDzjgJEwSBeUPKNo2kqh7UvpYKryf88mZBfwQuYJTA",
  "key14": "3zSjEEsUJvFPxFpahYKjBWYSeJpM9JMgfqF2m8aS4NTyawxJjLpS9t8qVot3wmMbirXmeV4o3FHyanoiWQjFroCT",
  "key15": "wUJe9rvGQWJvPwLiBjw1y3qBqAeSzNFMwivgE4ZTKSy1eBfeiUz9Tdv7C1mEAs8yXfNemK18UAkaFdSqRWTzmLi",
  "key16": "5Qbq7T9EhmSYZH6fB8gkiJLD9t7tCp9Z9eqs81iuns8WNHiDFwmqBsgxmjuTNJmNCF8U2CtycAAyyRhFJNSuVaAZ",
  "key17": "2Vx32fVA25TRuWdTGiTqiXjBARFcuZZanvPExu8YER3vGBoZRxAWU7X1oofFpwMvVN21TqF59gWfe6LwXefFz95G",
  "key18": "2UdU7LGgmhbPK3i2TY6Z6GhGM9pAYVrbrP1aQ4CtZps4BuA7cbsrN6ro8H9PWfnEJ81MC5YDwwkwcoi5VYP2QhmE",
  "key19": "349B2h56JWPhC8WmUcsee6Lhc9PCyLxWFVVAAigRTko4U9xizj44cynitUxr6jdEeyFkM184hdZa8CPmHz7jzGip",
  "key20": "51h7zPwkJdzzMGs5EsmmkBttWovAwxZSemEThXRps6Q2LFAU1fPNketVCfbwV6RLBGckhX6QFN1FVxX2bvPuMKXH",
  "key21": "s7Uek8fwopcArv9V9c3Ecd8iJtBFPiXMmPSN4vtTuAgzzjtChVFW1mopt2jN7L4WCbYTbe3Xx4cve7zsL43qM2c",
  "key22": "3Dy8hvQEnP7gotzL5mhR8NMNnMiGJnCxKgLXm3qMsbarcwbrej1L78YvGi4rHsjay8cYYZZK1mVV7sgRryzx8WZj",
  "key23": "4NfWMQetkg39h2iYUBjNy5ssHQYrEMmprm1wX3956K982JPA8QoQuqLVjFfTsctmMhZqXh5D1Fi8fLZLAeTj4qiw",
  "key24": "5TXP5EECZytb92FD2Rfk2CPKJCSYw4Nh9zanSQRgQ4wJy3uZQE7eFMQ9Um8hVR2xEVu2Bz23hcjsxq5NtKWhg8gG",
  "key25": "2NyBP6m6SoQpJtgKrEmqG5Bg43KTKZs19MSgtH2G1GwhAUQk4UMviXKmXeU1Tpjv9Qnc51TPWuam5RESZwXmFS3w",
  "key26": "5hRdJFXeEMck8MACWXPeyoKoKC28fyqzqxD4vyVNQE3gsUmK44BUY8qUXaV1kZDDEAkJdxjktoawqmEEN1oNVtXG",
  "key27": "5PJ55HLncjKo9gZHaZL34B5aYC5tYzid9fLnowBYKtYo5csLhgzuK9iZrT5tZQmgMnUGJgQwFCpuiB5WHYp2nQrp",
  "key28": "RNJmURGSWEKnCm7Tf7odcDaNRxHzcKKJ1fJzd3UUKVSBvYYKJ9QZn8TUQ7ZF2m6J7sJiWFeGB3P2um8tzNq59zt",
  "key29": "ZK6t6bmEJpE7JFWw3s6aHzf69huDtLFYWk9s8Le1AyQVuaXg98JpAw2o5CCzCPoGxTVUHfbvCyRv1RgJgnG2qQZ",
  "key30": "33rBxj3rZFQo1ddZB1hVwNVg1KFUER2sbEyjPJBNUSYZiatuj3TzbFBKF6fQvQaDTz9iCNKYRNzwLahJVHxY99R1",
  "key31": "2x7swXu73HdduHkGbt78f7rJq8Pc1Ji6nnX5GNHeJmWkv8eKY3hDPp13fyY9YDsjJQnwJxZPKYGmzs7WTrEm116P",
  "key32": "5nTjvv53wbKBU9wtAx5ZygRWqXvaGNCQGsNqXmVEC5humSyTkpFBtGSpegBUPFCgfKv6Cm8UQxEVwPDzD2w77adt",
  "key33": "4Ge7Ju2XCjhyRiSBx12ptWgz5n57ZLcRVqi1LcyJzZKbCdnbV7dcJCBnkrQ7YUKU9n3SAw9LVugMXo45bYr27rtF"
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
