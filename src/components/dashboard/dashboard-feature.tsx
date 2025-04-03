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
    "5vpwXrkxgrq4BcPqFFrL2d7WyMXNmVJLZzupESAodexiDsPJb3EHKRLAmUR379JQmADcinL7qjSZvsUbNrvXfgrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtMrxs4srNaSrrzMqjRutCQtdEpwUe4GXQ1W8YFvBE3bcNGWaGcNAXZ8itZ4JwQFxz87VgGLiuZeEg4MvEcMhHu",
  "key1": "nU2M4TQyvUdJBr31rvaeJuGw1Loq25UVNy4AjYiY231WQAbxqx12frjF9a2YHGKycX3zQFFcT7fjfkvzhwBK2Lf",
  "key2": "3hnQPoKXcSkFm7unhZZjPjpjXQfiDmAUUU4dJQPce2ejK6y2eCKQ7kMVJRrvt5x8EMkgeAA93dvu4mkaHNN8g4Fo",
  "key3": "3iQSyqSBktXaZJmuggyZPtF5XY3UvD6CBRnMS6eDRURGBUSwJbd2QEWL8LQB8N3ChGVqiDLuogksu1KPRHnrGS3b",
  "key4": "4sHEfmZ6fShf14pm3JAqRNnHUKmh2Z9NCbmEy4cTq2DMKgLot1gtoRnyNgpjMxaWhZ3YXrNiPJFfaf9yrR9Nq5pm",
  "key5": "L4Ua9wzTGk3um3w3afLfwfxh14DmqjEpEwkCXdZNrTSWqr55FQsB4kWw25ZbukMrWWbE73eX9xPbedjsYbU3ea9",
  "key6": "DiXore37tFfQm7uc9ng25BKvAaBv1W4zF1TL3S6YqetN89iTqg9VDPfYKgnBxSjJkU1GCoTMXsFDxThqPitAk3a",
  "key7": "2Wc7agLE6wd4R8MniiTQavc1hyWWuFsrdgGLLb44WjA29ifnnCn3GgQjuWK3GuE4hgec5F1FXzqhM4YYAG5XceDR",
  "key8": "3HawvZZAyepprRDBCQ5dnWkbTpsKREA34BhEoKQ7qzbAEhtRdoNKxVZjA5pUa7GNZH8WofD6cD1z9BhJjFrG3Rzw",
  "key9": "5pr9HieRYXmE7LhgA7cWvPuCEXMe63KtYPXQN9Gi2vR43ZPdwAfEY9cpyT1y9TGmMcAkZAWEezZqQHo7CDkVMnfk",
  "key10": "xE1NdDjDgsqYJG6fKoisQ6J4fmbjZmsKK5y6drKrFRDNnHu6FYjXbfhVZNPC1i3s1Raq3iVjrywj7xpzmM8X9NE",
  "key11": "2eD4hgrg9bxWZjnLYphCqAaxMcAQgyJK5Q7TLVy66khPJ89PBYsbvhT9ba9amLvnTaDDZCZL36ediGbdhQMRhnVq",
  "key12": "3Qifc1mPp3uRoJTDHe2xbEEjANtRvjeqMs9gTPfABwNNKRkwWrPnDaZQ5For2TofynC2fb7vevbr1XFo3u47hBaq",
  "key13": "5ooUJP5oQ4pZWcjSXkEzDLoyh6Xh7LrCbvCkDkX4eAXPugym3X1G7FXNQ4x2qcpVD3WHfqjAJzxMYarzizPRY25",
  "key14": "3YrwMxu4ceHZSUwUcaKdXoYSvhwFxcnx5Hgk3eHWrqwgxKA93VJtcRqA9zz7LBDy3KsWC2P1odeVUhoVrNBZHe7F",
  "key15": "4K1RZngVHW5EwCwNJq7tfqU8yL6qN9ypTGgw8cAvdZXPNmjU5wRwQPAuFLm8RVi1H3BXAdYjhPktqgP2ng4niowa",
  "key16": "3krTAkcNRi2xMk5GY2eGVvpcKWkzNopuXSNu1NjiQkTyvzoDueWXuFgc6kxGUKK5QCtM7bmWFVgmU8XZW59tovBo",
  "key17": "3EAxg9VNfFHkC8J5d9kKBGmBK3LYDFttCTj3gcxuheSvigmYAJ3KAN5LcjbVEctRJhxSVNrs4jWxJo7gpLVkagif",
  "key18": "dKjwZUZtgfpwrpKJB3DfDnCXg2tD63Gw5bRgWokC7b4Dww1j8x25ufkzZNY9pzbhtcQD8SiJ8JSxKuUUbWXcqu1",
  "key19": "2d8zw8B43X5xNVsZoKT8jmGRgDFLJp8jGQBzUmrcGUsNXV4FtBPYcMxoBSTgMy9Vg4AJkCnYQEKejwME2N2JLLPJ",
  "key20": "2AvPunZF2e1aqX9wnS91iXBLKLuxmnKV3KdJQ5gPak72Djsz1HwZHf1gxdxqsAtC6ssr4CiJxAtNcre9pkKPVDJ5",
  "key21": "5eLKCoT651LBK5oh5iap4DTvWXMz8Z7wXj1W8msYnmuhQyVvSaqQc9ibtKVSmVfNRAn5DVLMYnHVRQ7M2jFkLPwF",
  "key22": "5x7NWLWVP7BkVHVZ466fT19Tro6hLfSwQakzG8LawyXPjRB4DNSJczxZTLomG6ZxejPFzda4dMnvyHU4FD1W1u1J",
  "key23": "5ePXXY2zY2w4SsKdCi48ZpFR6yL31Au63QX2Q9yRXyUNQ7nw4MbXK3dGgoMDYHVg4eQcfkHF1dodzCFrbdb7s5xt",
  "key24": "3qd4dBnf9qicka3iBXBLQcFEYdHFo7pRjSnRrF9fYodJ9cRUs2nsSVWWegDoYH3UhauoavZWtJokZK1jDaQ9LfAF",
  "key25": "4RGDdDYBYL54Mo3iSWuBmaGYdNdkLxKT9TFHdT8KcaV25TCLm6Q3Ltb5S64TZd6PW8CfgcFasqvDRh5RR5tZTgtk",
  "key26": "2PmMpWRytwWWc7c3UXMc1KefAwBQmao15kQGBFWBTXRJ9prnrvqkXCgVpXRiJPabCa6upNMJdzcpRZUS9yPemYDR",
  "key27": "5x2XHh4g4x3vNpHMmJ72e5zQoWCyza71Rep7BXKo17LkzQPxYHPNKYdTwzREJyJ5cHeiFNz7EfCovjD6yVvdR9Hg",
  "key28": "AmwD7R1TBWt5f4XAy94bnqS5YV6jYPycsJGpHZhM5X6J58Y1PmakAarfZpbMnWBnzsnh7t9KLpfzUcWCckcfcdx",
  "key29": "33Z4YeXwTuoMn6vV3XuDrC2feBV8Yo2FucN7Hjq3v3vR6Gk4M34o2CqZi8CoMhpQQsPBYA1DaFD77umaXCLEbgvr",
  "key30": "3H7AA7KasWcpcHSNiBARUmnEdtKeUNfsWjeFbZFz9Q2zs4gbMfQMVnss9dYEEHy2WGiHGtgj1enNzG6TyL8UmuFN",
  "key31": "2FD7vPu3NSp2Q9ywTTPJ2ukuFjTGgkKemftvPW77aFk5fZMv3f3rnP75WQ7r5EEx2GtKV6xbuQB6ZiMgXP5cJtmK",
  "key32": "qwabmKNB3wLVjtVCvNT51fdozKJHEYUjDWcWaEPJsGkY2iN4PiaRy97ZecUgt16ihskP9Xxa76ca6tukQksfYwh",
  "key33": "5orQCAecDifeGN28cJqJLzNcXVkkuuZian3Sv1MZ5VDHDMmC875tCBcS7HTHdHKbnF2ZptrxpsB4uXyaX2zeoa3a"
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
