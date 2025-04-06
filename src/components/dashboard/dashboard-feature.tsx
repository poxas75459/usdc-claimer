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
    "2xrotEYKvYnm1MsRJ8p1kKbDKU18MAu86hHuwoUzGDit2iyWF8MfNc8LqGXfNdz5unUJXwNmtvdfBTpddxQ7skqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjnP5sBSXw9V1xwGeLoYLQ6XbUpjqNhtAW25Qua5xRhTZYzW6dwsKK3T8dymBN7QMiSh5cj3ZDw7WQMEN2A347Q",
  "key1": "owQqX6FW8c7YbVjgnJ1A1K6pMM4tt1j4VJrSPEpm5N8gDBG4aGrH9PspXKbCvRpUNfvd98Z7zuR3LAEpNaC8pEJ",
  "key2": "39ZXsiSxt2b5VmksbFwnMRywMG6s8jMvkz1seZ3VhXi6mQAuiMt7gyvd2t3RYk2GDd4yxjDewQK1Eamm8s8nLaMY",
  "key3": "Bc855bnDxBcHdqmLyHqqvJQBTLZ7pX2Z9unnPqnHTcj8NUGYD3iMD8qR6p2pyn8bXPMM4gxdKrQhViFu8ci8xU4",
  "key4": "39U4ZD7Mih54LEP1Doxg9zcYFUSL7pHwLuxpJTJoEa78Fn94BSpAuiAyf9AjW4Y7L84tRfDPjQM4FwxtXS3u6yqn",
  "key5": "3FV2y6q3MFeLTWXkCUpt57Pvm639hTJ5kps6QEoxEVGsMAADtqTnrVWfth5SpFD8F6Jdm2vakNnqQZcn1mXvxrTV",
  "key6": "35jSqWW2s5ja5mWxAB3gp7UhcqasVuKDcESa6WuBusStgJJVrjqYEyPC4eSL8TkxQSANZ7g4vLbR8tnVakndRUUg",
  "key7": "BSTB1KxweA36uNxLmv24zu47mF7Zt7BJhWE57fGfM6JYUMeFmU7TpQJDeby78dmM5rVVKhQoKdyZQxSQ81gNt2G",
  "key8": "1LpMxkeP9shqHcnj73AGex5LiQ8QCWYnUfLRJa6ZCWh8LGGxoJskyTcSW3DfUQNB5jfToH9NynreT9tKnDCV5MZ",
  "key9": "2zRZMKyqWQCUaKT5gDjvVtxJhuCoVcgNdU9AYC2UEcZHac919TuT4xfLYwZDqmWAHfKomvvfXqSHHWvympcFF6N3",
  "key10": "2VoiQhbovpyXKYbqgbzWMzwyJQ9RFDPNV8K86fFqXWyjEDyzjrEBTGwibEWzvNBvC7h2YXMN9ARvXQEP8osN9A1M",
  "key11": "2TbnxF9Vj8TkJUJHkMBQBvE5A8j9Hyjr4vtLCNhwXmzAKasrmLk2hZyU7YNsFdefErST5YbGgR2hbtdvz3ULKGXX",
  "key12": "2mXAksv7anYX6dyFXHmmpevnkAZakz6q7qrirdmqY8kt248HzQHp5MB9PMYMhQTZk6kbPJoyvWWLTTLBRi5K6dNY",
  "key13": "5B6FnkHJmzmeXDMxbb7HM1tUiAFTaNVCfJRNw2ZHsLXv17WxuG4Ta3pATNMEEgsD8ZR8qc5AWjC5E7Ugtsa4AhPG",
  "key14": "4Be6sbFM7Un7b6BXXd3v7TK3EdmVo6Gd1mMZzQVTsntfgYWba6sycDAmR7D3wJXR7bJcx66hi7ZMoKbsoWWr8oSp",
  "key15": "45Z3it98zcZtCsFWjNF38ziLLKBspz4Kvq1uWiZ8eRSaXcde5AqRUW1xxdMye8soagS68tJk3ocagmRn9wJ6xWcc",
  "key16": "4kc2rkfSkxiPt4WBMtu51GqyyabkJViL7gNpbcj4xuMRs3DSj64E9cDZLrcnjkvpHeFH5EyeNgkfN2VTCTDtcYbW",
  "key17": "Na9wccsdp9pBPyEycgaTrMZrvXHJnd6tWPWRY27ggUuaxM6TDHAhke5oo6tZ4mAk4qXjkmj8mFZMxJzSjk3c6br",
  "key18": "5LMwPDKpKeErh86ffS7CYf2QJpN96e3Yur9nEFuJBG5o84wmPScZpk6mY7ZgT9UkAk1PZMieWUhQ9bP75Ycke6cy",
  "key19": "67Q9dXEX9G4knJsF9dszsqYpmxpSe5axrBvd3vYixK8WHgG9FuXHJH4nC3Jh4yawDpjunqqFAtVw4k4TduRHAkT7",
  "key20": "67iZb7xKgR7cQ6seMiD1Zp7q3SsJCkUgGty6WTVoR48Tg2nD5LzFM179QsdiLiwKYDvMi3Dnz7kX9A3HasfgbsRB",
  "key21": "4F2iNrEJpu19HrGYcSvPMZD2bZ3dX2na8d8uJg6bh8k9n2eQrnVVQbaACqtBPw7LRd1stQJTBDt9yb6xnifnC5PP",
  "key22": "54mJW2WTzEFP46irmoysPyK8eb7wiX5j5KHe8V6LZw3jMRgAaR1UmYvMpNBcH171eG7Vq2L2pTaAjL4avwZ2ss4s",
  "key23": "4XYQ6bHYiwLisiXhGBmCZZMiFR7L6rYNX8y2Q519BodPaeR38s36Xs6E5qSEwnid57M91Kb7tHP62q4Ro34gC9Nj",
  "key24": "3kpb4z5XhKhppLNjwCnnBMogXTAdLZa3aifQgcEMgzPXM12vhmFYX9NWfRutDDcPgJ7hZs4kZq27hSL3wfbbRFVm",
  "key25": "3BZDfR1Tpk8dCLcY3qSRFvWPYhBX4ekwCFj4WdfHyni1YGnTPzGRzZr3YhwHGGAEWSbURBk66NhSEBZHwjDf9w2x",
  "key26": "44DuPTnBC13jmHztQuD71EY8m6mAWA6jCR5jGVXaJZEgAcSveBuhYX45n5ecFMS4rExkYJuemWvix74w7UcomtA4",
  "key27": "5p2VnypZyn3Ydyj5XhG31HfBYgB9JJ78ApoknzUnestVxRBjXMJDwQ2ekXsB49x3QdDDS23k6Mdac3h6v9M9Svr9",
  "key28": "RJn2rmci2ZAicURqim2VMy5RZfEutdws7KgAjoEQEs3a8opTBFvZxaFh97S3ytf1Xyi7zXrsJuZQw8a97Rfe3YK",
  "key29": "4DDVgQYNCQWymJbkjSroGvgoPggs5j6XVXJqwbLaFvjL6A9Wg5EA8BNA3p3wZcEZr9VxWiHbrPS6jE3HF3zwi2eP",
  "key30": "5z1LJCYJg1qCvbN1gaKwaRhwJaTsmNBNXkt869eGL2XYXWP2iKsEX7vjSUBad2agaNVgzTTk1MXqm9dcnNw4c4vS",
  "key31": "5MyhEknuQsyrJ9qGxiY26KiavZwiKrbc6h9WLaaR3yX8aeVVDTncie1QDMGP1zF3waZy6hqSm7yrpD5ZSSnDutmv",
  "key32": "3QtpVQNuC94W1BsHJNDWKxuBGnvjjwnp1u7xSjxh61VFjpHY3eeLMGmQoe5k8Hsx6BMX49ZNns13ynv7fSuQunwg",
  "key33": "b8QRDh4jGzZtHbnvqFyaHDSTePtenJ1ftmsBrZyvig7TqUZ5REsHmieyWiSU7mEzyG3yZJ2LBXUrq6jekJYedkp",
  "key34": "3v9hHfUx4Z4tHjqA2X2LqL8FqcKkupEhvqzcmJBhGQUmvcCmLAQoMgxZsutiPuzhGVNeyyiXDtk6scF63UUW3jiw",
  "key35": "3xmbWBaYX4XU5z6xe66oBw34RP5MWH2iLKqwupwv3TAS4guYwxeKV7bh2tCaCjKhGjpRR3oLATgbVUhteJa6DCAd"
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
