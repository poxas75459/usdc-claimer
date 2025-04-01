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
    "2d9jbU17EUq9reCD2NwG8zy2vx8W4EX59MHTpRL2jQ3vuUWR7Wj1NiRHxRc4cQ8ubLkzrzn5DDE8DERYvcqfKL3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AH4F1ZSPeG87QGC6vSZvGi2DDKsrd89DzJiH47YSmZqiRQfSXRuMNJoAPQJxBn7HNc48FLv7PSW3H2kSBKZfUyJ",
  "key1": "5vooxScKXxCo1wKSF3FbKCU49AZsNLpjVSsU4ySfqDXWxjXC3BaGwXkuiQx2Kwr52gATGTnxrRxAvQA6yHpX8ada",
  "key2": "3RPXtV3hnSH8zqUL6du2Qb1nvC95zivcNXVoZYrdi1ungUG9vBXUuJo6prnkTbpjF9vEzxGovGk5ZAGg22ioq3w8",
  "key3": "3w7x8P72ZgFyE14ZCJk1THLGiCZoCkRU6hY3v4jekFbB4hfCSw1ACRaMtj33e9qtnefAetWsTMV5nvWphrucrD22",
  "key4": "2wkMsAT7yCLn8x8RoCGE2eNULTBZgDKTUfcoBsZtJvTCvpZbZeosYhxYn5NoU16RfbZpw6Q6HbPnjrsxS52yLL9q",
  "key5": "49vmGt8njsytKCbndCVRsgXn7adnXeSodap7cC1pgHZk3ucjRkQhsE5ysjyUvQMVw42mwipRXMhXTvijDN5PwsUA",
  "key6": "iy5fmuKCD55GmsFqF6jwepmNUbcd1FDVjcL1yqDBXyvpXgmG3CMaaU6KFS8EwEqbP4sN9kY9n3mmLidrfJ3vyHz",
  "key7": "REXdyVxchkCWjvXu4GEbnBadLVTVb9CNXRqhTuqgJXWZYtWyiD8JRudVTF6Y5kJX5TZEi4qmhsAZPLuiZYJrgTW",
  "key8": "5CHsdHs519MMz4KsCeHyTVXnABtC6Qme7dBcAaDBWcuBE62HDy1sHjd6LydeTEs1Pc6cCp5UeVSFtHf9uUpfiV35",
  "key9": "zXb5v1gycsobNGTUMPGn43GPkv9eyyYbttnX5BR8mRJBUBLSH9UFTRginGLjm44rjnER4ugbmSFgmDfiZyiezgY",
  "key10": "LaSDgNC5zDepurFXYWm1SCuxpSZw6X3ptKpmrRWRJPGCi7mGNYvDj3w6SMJBksKzLXGtGkGC3675mdFgwAm1cft",
  "key11": "3q2UmSXmDXJTtm58YFcrDiWK51ULAXxERkaR488oLjRaY7VFBSNAndy3WpqXgggCDcN5Ue9PhFgZAr3ZQVWYPTfK",
  "key12": "LjY1gQ52s8RfwNwz86a98oqirEKVSzCRa1YnRAv7sztgsvXiByVnEEEhDka1PGXCLs7osGVfEjd6LJ5ewxkaCsd",
  "key13": "JFsM6LCtGhmVYBHi57fXbhTCVxmz2FMGUM2EGCvpHs5hJXiLW3PsLS7JgLxTQDGQeywU3nWiZSdMW4DhCwdkB5t",
  "key14": "2VDTtJsZ7XPKtfesYHkRgUGPcXNCq2wbf8WTA6NftkihKDTERhHBhGq6Kv7j7t4h6PBowttcT2cUu1jeMtwiZV91",
  "key15": "48B515dbNgy8iKxteMC36Hq9qCaWD6VCEih3YvSNmFKJrtjYQjmmF4yFSfRkMmZeayuHJgUkdq6Yp5FzJhmdutEN",
  "key16": "2RQmwJDkKkZa6kaYihio9SSFgQL9JqQNUdFzeCysriyieXf6fQ3wkp6ZVKmq4JHaX3bMeSNU2CCEgKMbvVo7zrp9",
  "key17": "3zUM91zYQam2hEsXDf3Z1jrHUhR74S6XBEHVBRMiBTuzngqNJ3PikArFGwAsAZwWgGRi2Mjn8zf14megMQunm6my",
  "key18": "5R52XNbVj7cmwLWaaHkQqbNud5rzd1AwtYKeK6fyVMv3QYbioSiFwgXCyyRxHePeHQptGRe6WfTrgQEYwq2riYZ9",
  "key19": "sEGUmUY8DrrLPVEGRhG6XGj92oqaAWdMT2gPnNn8nz4oUhpthF1LxW1Yjr4esUpB5wRSP4PJrFehTAJEdrVPqSh",
  "key20": "QNfgWHMHzdH5VPZD6nLRTxRTXbncAzEsJ92G6mMDJxTtkDfDhKJuwE2GJeBPs9qaRtA188xe8sTPJ3FGKBpRvjM",
  "key21": "3Zg75xRqo8vdxRoNnDUw6iKjSJ2FddHwi1nczcS3j1Pkhyjz1eA9F8zPZ48hiNXs3U9QdkVRcsNpbkFFzVqp7GqG",
  "key22": "h4dthnTAKJS5vvYzprKggUiQF1WvkLjusScxnvLeHoJVTZRpFGB3p9qFXDVNuEgWu6r37GdNz2JWTTKt5kfvij3",
  "key23": "4EBLVYkpXihXYEDJDMmpMCQp25FJmwACzXzFSDTWKmChX32pX48WkdJ2woAhhAy8boN2eFhi8vjxVaC5BbcjNqNR",
  "key24": "3yvZMUUU3D6HugNvxBAvFYYxCLV4HGZJGqU2DbEGMDcEmevygQ4MLgCJF7DmQoot4UAPXxZQ6xqLvBVP7fo7TTA2",
  "key25": "5Zn68kKA22Ewv68sZo6dcsuimN4KQwA7rW8c2VtBGE2GrtjzJfN5kDVRywZdVhuKNxvpQKFp3FNhhUqR7WzigvaU",
  "key26": "3JcLdQmncfWLx3JXE5dntQ3fxEdZCzE4V8RU4sn1VfKV9xksuqqMWpMGm5AP5zE7Cxyt2JLVKYxgGZtVS6sqA6VH",
  "key27": "wtRHyPeRKn8D37D396wae4e7JbsUhzSJxkTAD4ywREK3Q432mo21LjgnfvA1MCXrWSCTHLWzcmyhSMstYi4eT5U",
  "key28": "2B6NYMKRqJXFyejMZ6uB1nbEbjhrKPzVQzDhTWyAZSj57x8w2zExVCUjivAcpfoSLsRmTmTmnttkvgonFVST2uLj",
  "key29": "4pS2NP6Pg3koFvUTzp34p8CX2qHZtWjKAeaGkHSCua1s1DzBCjUMZtC6MRMTDYHkRb9wYVbaLWjxVU6SCBFAKFse",
  "key30": "5U1ivXN9A6uPwYw1XqyZ5oxeh5u7bdihuk9fdPPxc95Uk2k8yowZNiBK3VYj7YA97Wi5SVEDVBptU9WGo3Zw2jZM",
  "key31": "2qSv3K1pZv7fWL9dKNxcfSiPfqzrQqxPvxUyUdatv8kaC5Au3NU2SrKsGLFCVmV2wqhHXiB7QZVW3NDmQA1qFCgi",
  "key32": "4Y7tMHYY6hnbmLgc63Bf5uBVcHLsowa4HYY5uR1EKGU5w9NhrZ6sqzKqbjFAKCfo4YJUYcZy9wra5GfgTzKD86d5",
  "key33": "3aspBKhceGzet6h8HeGkjrrFzwHYUNJB34GBLwoRpiTWSsgsExSaTpCUxfCRB4urCS2AEept3QtJ5nK8o53C9jsp",
  "key34": "3Et2kdkWrveyf7ysbEFFxVP9ouLGQwfKWvBGbU74gySh55ts7BUNapVtazSrWKhdek9ij2fn54xH7ogT1r7uWy6",
  "key35": "dnuPk8PfTRimDCWpCEFFSS13JLzEJjVJ9gk2QVYvrKeE1dkunusQwEbXJGJL7RVSZuvFNbBiq5wKgTPJuw83zzW",
  "key36": "54BzX6rhfuw2sgbguNBqXnt7cs6DTbBro7kXuVWbqvEKhBN2mxc6nvebbaV5LKzLPAwmeqFBn8gmSM9MM1iQTcf5",
  "key37": "2dnqdVY9dAbjzUvfrZL4YjGC2Mn9WcP8RXMvDQpBgNKgAWWCbHoyRjbmpUkjVUY1PhRJ4F1HwBus6Qua5o2iXjNE",
  "key38": "3F3PWj3sGJRErEJPdLDe8XZ59P5gK3MGBBYoSXHeHNQjEGAAoovyZCd9VzfFpXtzoLnBp9HgRRk3rRrxzpdPmv9u",
  "key39": "yFHs7xACVor9Sp9yV96xqWynpPZzuW4EMmeBcdS6SCQ6oUv1jSC1WytLoio6Lpry2BSD35pzbMzqKWX8HRAncUf"
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
