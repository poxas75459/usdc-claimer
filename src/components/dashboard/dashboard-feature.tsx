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
    "a1we9YfHgFrfxN8EecxEbWdv3KaYsYw2fyChszEkPwTpbq8KWTNdwmYygHX4RUkxfrh7fYwcHnyG6Wz2kvmBP79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knvgBBDT8sahDE4zjkbNL7Y4NtywVfPPg9zQrj9bVzPRKRYX74NE3FUXC4KM61utv2Bsdmumb9mqRWCy5X8Sjxt",
  "key1": "Jz2qDKVZVAyuZN7FQGwJSrG6iFKATsbTHKBxa7yuFxwYK2CxiQUR2mcuez4kqx8HrLBNskW4Ee2TmAua1TQoj3b",
  "key2": "2HJtnf4dAKDDZyi2oivNB5AM6pAvndLT8dWSLj12rUHmfPk8qRiK5GMyp4rmtDMv5Ac9zxz8kYaYUnr73q2YW8pF",
  "key3": "3at2v5gzLsecSsNgB3TwpPu2d5FLDciKqCm4B3kLU498ar1h1K6sKiWZg1FGqimKYRFYRwCWvztyeYjaqYnYMqJA",
  "key4": "o8EWoGAAQ8qaHQKaqPbEWGayR6HL3KGz7hbRkk5J8tTgF6YVchfspzUsbfK8G75CkEFFn3vncVEPXwXTEiSYoPv",
  "key5": "SC1EYzGUFBpyFUjAZcSsfZsD1tdJJwH4Vhso6AZ1MS6NjNNVvVMC5txrFoHpTVM9rsfzT1FXXYJQ1e9vXzS67jr",
  "key6": "41vgGnfc2xjfDxANbanjYoj2iov3NwuPHgFNwWUQq9xCp4tynRVrPTCeYrZYYPVqWw6oY1LmAYdPEZ92b4QnwZUD",
  "key7": "4V1ssPfz3A4bWCuto1dP4PTDDfWCytPab2EbkubL8ndtPgY2Z5gFxJfdBxvRzM8ey7G9CKDYqF98QKHFn6eXUiyV",
  "key8": "5J3iTCPEfP8eP2FQciZo2fgDi4GHrNz2d746RaHUjLxDhUzvgA2CmZDmwtjmS4ZQKQm2jWfh2Ysaar31rj3vK4Uv",
  "key9": "3oEeNm8NMsesTCr5hJwTcYx1CDBJbZfjfsW1rKANGJS8nSgmmjGGgTBLj3iPGdsDupYoMqpcvHT6sFEyxMZMTVcj",
  "key10": "rH8NW48J67C385XbuGeFvB3rxZYBYZsM9YkFGsCXkqqyuKTTtAnGGLvwaDhhKfULWPXDFoMh5wYFR5BevGtJyYX",
  "key11": "58yQ8qM2zo3ivVU7ouU4DrugpZmFpifAMd7SyhL2Zy48CPS8Xd2vRaYx8SYBkhJCKDuASJ99vbfCMTqTXU8NmurL",
  "key12": "2yyUbDhrD5Zoc1kigB1exGPApsEaSDLbF7UwipdfZTRDUv411szsVoxpcjYNAujJ25hmbjS3kHj9Qidp6VGgGCWn",
  "key13": "4EoybLe5FfQ9v3vrJMzxx3XQ1iVadgeaCMq41RipsCbgr1i2gyTv45WvwfDr4HKMJnKxxHdFEVyxXtVxPBxQp24R",
  "key14": "3orDCoCtjToyESA9s78yHqZUn7iwHPnFSXDhRWKvB2g8oNRratvtJydQmupmrKs18nobjrCi6wsVw5QvJFSkKUVT",
  "key15": "5syqt6boU1u6yL4BNYnqXEHAqdo4LusXs3mRmFAdppZTfJAfWnx16W9DhGKsYUNzpQuN8t1a7jCh8z1dudcRptV8",
  "key16": "2ksGg139phtHpbNQJdVumGNeDNKxS6UtfzxLHsUFhwF9pKG9HS3gUfaSUB3UDMTkENSqmoGTyihJB9NXFm2QAqsb",
  "key17": "3swsbCqFtZGxQNi7uggaCQ3TCfebodUf62ezJQYsQtKMN8g1BmRnsdT49iM5zFN7NgtRW4oxdMZTEKxc2tPqvCWf",
  "key18": "5zAdYLZ2eZ4Qd7HhWDbeHEeihqZfjiBRE5oCPRCtAndMfzFfir6DpWfAuukwu4TVb5jTxXCE2Dr7jAcPi32NSEeq",
  "key19": "5yAoaqRtU1xhfzfLbSz7b9odYXW7vhGVPDy6h2eEkHAMqyRXAuPX3azAEHomtV3Mg4zKfCX8embKZuyaLvJJKrD9",
  "key20": "4tWrboih8FcBcapJFyvPUVFosZJx2muGXKDkhNiD7rqzzqA7qKRHAoNaHsJdj7CBY9fv2vdPUJN5NwpmkYKsZs64",
  "key21": "1LGt2HYLD1evmFaWPgRd4SkMYGx2UtPEpBfu8NaLhN5hk6ZFfarUuMHq3yoUfqN6o5GXyTfRcV9AGhehp6nTTkS",
  "key22": "afPk37qyuhqGdKHNrT3u57TftmWD3hPcFhpF3uqUTqZUeyVfsFMWV1uoEqkLStss5KLGyEMPqh5YR3Cr8xmJaEF",
  "key23": "4ZSwZJthnWApVqTdLW7qL6ENqT3LSuwb9HaNcGJZQzHveNe9Tho4u4VcmrDPz6qYQCjeWSjZrL74RWwCaXxX1EQr",
  "key24": "4ebekCYa6Px9ckrw2KsKJyqhtWgJrqpRo6J2fWtrNhiV3Pkfr9A49TWwmioDWxveHCdLyKU68XiNgCUQ2cWf1auY",
  "key25": "4hZZsArzNZtJ7M87oRaN7WfbMzKx7D1K9ExD9jaY3jNZa7UC47jt2HWDCBxhV4HxayxQxf1PSscQojeJiHrv6zit",
  "key26": "JKyy5ZN67UKfUx9nc5ekayCbvxEvneUoQXwZQcvP3uyYyHmPtN715zZMNpynBWyAAKigzLtdarjyfAwwHGNQDxf",
  "key27": "2fKaoXVGYdZhoDE4Zv54txTkkWVTZyoNwnrYBBKLmGxmnHb2V6oT4mZZLzektZ1mTVnxpQaAoJF4zM6E9Y2ZY4VZ",
  "key28": "5yMhBJ1G7VgPewjEzqj49VDyn2zFQmdgfdTacepf8vJMkSBuj37gpNurU29Ln6JfbaNZvAvgw6KvbKg8PjhJMZFf",
  "key29": "43MBrAssUwVxzHbn3zYEme1S65rnQRA84HNHbtjheCEcDvNx2g1hLdLXEJSmuQeiVT6uxAY3Npu3kcRv43qhBJey",
  "key30": "5AS26WHRMNv63PmMbQMpyXiTt1jzUfmvgZMvJvub5zqYbCXU7HYvJkFLQU5NsTWqZ32Bc6bUymCcZKRgz9AN5ZG4",
  "key31": "58UQfGwMxTGU9EhGsZvtxjTSaDrJgRg7h6wz9gvfBekv5JCxgifXuXdaK1qcSQafzooXHoftp583GkKTMxynmkJS",
  "key32": "5A2HsXu9YD548DioifdqBXNZG5LZvsZZhstvRd7PLvLwuyBgVpVzfCXfVNvxCbauYhLGXD1BiRYjBTKtpNhzm2Jt",
  "key33": "3s66hGPgBE1e8PuKujZh8vnWxan7tKtX3sFyNGTg4egPBRehVVYWYjT1DxszMyGRQ6VcBSkv9Vz2MY68briKxsTW",
  "key34": "58z6dj2oZ72GtJgjvWeByPxWBPz5LREVd8DFojkfTb7GK8PXihbQJCWnP2mxAY8ALXQuxu8D5icM89Kg7A7CZEn2",
  "key35": "5VL1Xg7YFkQqk1XPKa6zsX2pEzeBrThB9PuhuSZywDbdx9g7pj3GMsvmmwYPYYzbPMutBvFnRQh9AFaqdBFMn9e3",
  "key36": "5P6aM1FXzRuVCs9rt3ygZWUneptR43potQCwGHMQFJ9Wp54Cn4rjiULXPA3C4pCwqLgQsJSwhNEvWPC6vEYyGEsn",
  "key37": "5xzReRtVn99Kw3SGkpFDh3C3AM3TtEybEVLkBWJnH2BHcxxkv7UeLKwzcZDh5vqzhz2w3dHbZUKUT5ksjGaCfdYu",
  "key38": "2E6hzwNQ8YbBvUQmn2uef1fskZbekfuRKDAieMoX3FFu6J3Si4eD2hAW9CMQwQgetpaX9zvtxHyoVzDnRsbBec4K",
  "key39": "4rMTNMrT4X1mLSwLqFNLAnqUSVupJfcVGd54TogcTAH8kaxo4dHUakeJ9K7wmLxGVYtuhtCGAt2VcTjMsTh35A7g",
  "key40": "2ZSvrW9oNf5VMcyzEsQaGkxbmXQXxbVuESLwyi956xwM46J8LHdkwxEVBsk1ob1BESqyAcYhJ1uHmzcPLJKk2wvF",
  "key41": "2p72Ge32u1uKUNKLmBAQyJczSFVNyST9F3ypNAkjcghNM4hGMY3sduNryGBNgf9XGPbWJ7JYHYPkC7GGdmRmcVkh",
  "key42": "2jkbsEgC4BZHRJaNtsjtj2wS573raMHi6K2RXAza9PEXtqrfmyjnr4jGqQenVGvar5UdwXD5m7Cg3CHe8gBFUuzT",
  "key43": "44Fn3ivBYQBcRdmNfjfBY1kA9FGMQ5ZgE1Lx4cxTx6tYStVpUHJR29nmaFY7neENavvmSfB6rD3VFHwhvD6kCh38",
  "key44": "571qNANdwMpKgz3hvFcJtyKS5zd3hvzX5qdZQvtDqz8JRNB3AKEGceFCepqPU23P2FwmmjNWcHwZKsJyHvSTtLY8",
  "key45": "5BM7dXSLqCPbMFQNWcLjAeqDq8zEGtqQnUfe6pVPkwLNKg7yuCchJBVCqDhYaqayAar3vWCH6RCbRGwZfhzfXX2e",
  "key46": "2mc5WkmbDc49gLm1ZbJEi29GVXb9V8A5ynKy87BnjdvQtnq7noCEP1Nph6PS68KWgs8bWzcuJAxgwt6uaj3ugSJm",
  "key47": "2KKHHVrjs5xcUNxd5SfD2KdVwh5MQubome3pzQHGXSSWKHNdBohh7nPng5gokjm2Ko1qdo3cSMN5arfqZtrbR7tg",
  "key48": "3XyPr3tm72fvpZnDXagn9VNBSyFrLipAghWsdwmHG3i9FSEwbaVUCwvGJuXzRYTTMkGYwUPsxhTBzYs41z13Yby2"
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
