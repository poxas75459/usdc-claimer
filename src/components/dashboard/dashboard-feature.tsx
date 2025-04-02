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
    "62sa2caceWRwpY1BbhV7LRQGJjgZJ3QZMVxj4zVk8gKB9Reg25W5fR7z2fATirp1e3sbTU3MW3t46XSU1wKRSCkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzLMzF2T8WMQUmY3PC65DmqWYCJLUKt9YbYNN9xN7MxRh6cvovsMuEEFYG74NQr3XuKu1sHKL45rndiMVK1AH7u",
  "key1": "UzbKfiR4ck6Hwt7ZTzC5T4rAAZZAJXz2dewzCRku6FR1dQV4v7y2osRkG6mz6F7qDrUF5pkVrUYTx2a78qVjMW9",
  "key2": "2NkGLFS6jeGjbNpYf1Rnb1SttZGUsg9PV3rLcVenmSvZ3e9MJk5m3fGvR6XDnFPouH22oFu7ai6hKBupywXAXbti",
  "key3": "3PGw6VBkjvaWc7dWYm7deSYLm7CZ9bwRGdvaN3jiuxazDZXNVzgfVCRUA7S1NsWYWyZJT2rTQhkG6jut1JNUvQzQ",
  "key4": "2JFqB7oTUmd6E6swo2tMN7Hyjoxo93mVmWYVdSzqkv94DQ3qujKggyoad1KEeHNLQAADtU8WTTpfvJZmo6ciuEiB",
  "key5": "4px8hxCbNNy7myEpSYRGXczbSKhu9CBUcJ2zthFdDPxKZ41NSFUdeGmVNffoafqtGJBofex5WSpzwfh9XR4MPt3A",
  "key6": "5rpT3sDmESQFXXJQqN6r5Lh22kukK6mrjkXqvmSxUtL3BSc8V1u2sX43Z1SZaJLsu2QEcY3ZC7PxLfrFGibS2BgM",
  "key7": "3peN6HzoMo1mL6Jea494ci2UcztRaSxycHNyFi4ntr2LB2GfETDnYfyvmNBXYG8fbPqVc7JW72rpkAz6JmEPziT6",
  "key8": "53LEa9Jicjt1mffdxgp8neV2D9VKfKCKUzcEXkqoA8vue1kn5o8mWswMJUmvVkp9tA6jcUTSVkwPkpH78Ua5tcB5",
  "key9": "3tqf8TSVwWouJrWcm8f8oYUerDjKh1sxgVeWr9Mdu4tEb3g6U2pRfoJRNAGE2nNYo3o9qLRWyQzh43FQFkS6HGt7",
  "key10": "2N75fnkaXTivQcTRU78H8pr27ph1sDgZ9UhNB5PMuW9csaU4qqs1jzQ9AVS6EZ16rNeBB9B7SDTM2FrJT4ZB7gKw",
  "key11": "4DZtAL4XJHXMN1WEsobW5cF6CZS2mvFRZLbBEewRxTvWa9TQPGfL41r1mruBGg1BujvxYCPm1DVugzEen8FoPJfA",
  "key12": "5iKaaHMkMEYX5NZRb2c4wK13wbHHonn1u2iFriDa2kTZA54nevTCy5Fgt295UEiiFnz4uRUU5wPkKHQ19AVPMPv7",
  "key13": "3GqmTW8NFdibUTdj9iDfG9EZQo65NUggGfNzF2rEcACUqKMtZHJdUmCfvHkhEpvTue4qr4fXoBKpKqjYwrf88d68",
  "key14": "2aoxcCtWsf3sdbAFEKumed4q5ig2E7Stu3WVut4qvqE98q76uNtc4Pu8XrJxQiKYookummScuU2Xrq3Uv3EuP27c",
  "key15": "2Z51vTeHVMjVZphBJkhMAoLTD7dt5zYkZqeKSCmMg1F2w9FbeNCNsJF5n2ZGi3mGdGr1hWCibATz2W34Rvw7BsyP",
  "key16": "2XcZGEsPJaemJqDP9dtm3hHLS8tZHYkAnMFqr96CqwU8cPz8xbwJ4UhXFNfunEvnwKnEaDzg4r9Shy5SqEhLMDeT",
  "key17": "3FRrqhk1L8cxvJiKD18oLVEadvGPDuoTYVv2G8UnvSmWU7sfErUQv44rN1muZBTKkPKCe4hwidq55GSxTcRRY1JV",
  "key18": "2GzdQdMcAWQ7pYUs12JgVaZMM1AhnvfbjPCQCt7UHa2F8jkKMpwE1RBzhAfe9Lf6G1yazxwcqURnb9zxCw1xFfcb",
  "key19": "5QR9kGDAcGpSjxkSBncfifXvdHG3LoS6FPT5VC226xQWFFeLJUmffUGpQ1XFE5xuBLVqQqdioDxjNbZBHKLMU8CZ",
  "key20": "33VVy3ziM3L7KHkNZ4R1abnuRpsC2thyZmPMWsRqeuant372adwcggGrF3D5CLmoAoTaX1h3YAuiW8Hu4X5WWqBD",
  "key21": "5CMbwSZ7g3ZGC56riEdcsrecmLCgVy8bwftzs8xhq53frnJzmSXQyrV7Dzd7NZrpxY8drRaBa7UzjZD9xr5jszpe",
  "key22": "1GLGYJ9UEm9D1jou7nde4aSYLANgJFnYZ5QrvqcxijXMmfekX8jGNE8A2FdL1zPvAtWRVL8jGzDdaci5QLfyG8h",
  "key23": "2JWVGZ958uAE7hxAZTM28JFgQg2fkbuXtBwU9psPyGdhr9B4ugJm71DKXeUtkceAjdmDxZ1vs9ZhvEWsuhNn28A2",
  "key24": "5dWLm4e7iVPZaM1DjuSgzQHFidxMxoCzfDaXMxWs5khPCQVdAHeEZqQEdWozuMBdyNfnWFH5eLWZAf3nkHmZDLQB",
  "key25": "F2LoMLSbcrxgcUa3M7dxAgyisRQZtdzCgX6ZT2R2EditPEYQ7phxz9UoxhsLaXXpXXJXeEhP3wEWpmpPgwremei",
  "key26": "4BT3hj4n4KtaJywMSA2ETFv4qnULcWvVT5pPoPr2A1B3Q5fQSp2jsjpeYgG1QqhpnBqabi6TxQnSAdxJFoC7M9Ui",
  "key27": "2KgWYMPGQTdf9UtXx7iNFuviKYF5ShvGkD6r2hyi61viW2eQ9MKdX9s4Mhkjqq8UWxU4fgNMUdremfjrd9Ag85Xn",
  "key28": "HokGUpbUGi8BNB8ER6zdmZ3tCMFDd1ajWSxxchLx4YUwfB746ZHRHznPzeehk3ho9cqGDXNi8y5bW1oYkNHmJoi",
  "key29": "2tqkM5UGU6zxKmA9XmriZnhE3bhDS6RvtqoH8zbAYG6rs7HuCdcEEpAXJArUBSvndHVUqwWinYSZDNSa7zfMkfKK",
  "key30": "2YMtmtxqgfv7rydx9uvsq1n31KCWtUzjrAvgSBHKrERAfDaPZovKyUjiAoand72fqpiJnwhgw5U8TKBWsp8xGVoK",
  "key31": "stjC9Ks6eaFBvCuUwzZEeyhutKMtNsmSMfhZaKXWasbQ1gVKZ8GVyxNLjdgVEV2z4sR1uNcFYZGbcJAv3UwZhfE",
  "key32": "4ZuXu2qHj88Ub1szV5AgaUZmuCt3Twta4zUshR6Vahyz96sL26Jhqj9u8zeT6d4jwZix5rtTTCx8Xq1ACs1yXAgK",
  "key33": "5ubQZm6Gde4wT6pWfTdNGQA58PKphY4vPUoL6zkgoteRX1JuGKzvMFnffis2ggNCFX5UA2tAq4VbmVjYwy1ezxYg",
  "key34": "4MADAKD7oDovBLgtkLPDPBGRr6Cd4fVfdaPy8H7EyjCn1BwQHjZSNvXepzoyiRYDsQipTMzqCXyu2xk9pRroHuHC",
  "key35": "27xsHSqcbfDykUNeRrQJXkLQEyoJu4g6iE29PVpsWr4Vm38qcnGrWBjPazzbJUNXAJzC5a3tCS63Tpugj8y26bH5",
  "key36": "2VoSrBHf99u1p5gXVNtWJjEAsS99yp34yqUupk88F4iLduRW56Cs2KpsQVSGkJHvFwF4kw4HZdki4NgbeBTpiqmF",
  "key37": "YXPw8DVjYM7EkScfYx4ZaZEJramg9WDvQN2yUFxE1VW9xS8JUehBzHFAVp3e79UaKAhDGzoh7uvu86Aouxx5YY9",
  "key38": "4hnqYKw18SySX56uU7HmjJKYner8DX8fFgiH5ofFEgwdYNwa317dYrj3nenoGyk7otaRwvV1NkDEHozaccN5C583",
  "key39": "4anLdSuxmHxLCrKejy2mAWfeoSEKbnkJxDfpuefpFZMSFEmb2txxgHiCxTi4uLErvggWXMLzB1z2W5Na23v6aTYD",
  "key40": "2v26wAdTTmdN1P6F67wbJhARBvmH5MF62Qqr2ntr956FjSbK2oCYTyx5uwtr8ArhTJDMJd64QamNaLPsfTRJ73X1",
  "key41": "2mpitq4dmy6YiLkB7PGNcyZtxzNgniQRHK9h7AkD9cWXHdQAzgouRECu8Q4VdfNXDcLAnLBp2dULSKNyyxdD845p",
  "key42": "2DqGPniCGDxTrMjMLGVtxLYsKDtQfTskbixSUhJ21kpqoKZo4DZiVLDb5ZNaxtCD1J39Tk43sjZwU6txy7FT9T1f",
  "key43": "51XvtefPfJ5iLrubSZxjyAvwWptery24vcScnwJZQXL1o4rdVNyKpBf8tQKR9GEjBJGzqp34csvYAWs2schTqdad",
  "key44": "SQZ8M6VJRLVJuTCwpsmsc81GteaeJFaxL9mVfq5DFDp4Lnm3pgeWxhQsaqs94r46Trqkf1Hj4gCzCJBKD1iZGwH",
  "key45": "357kVjqgtdCwohgzYj4ucYJrt7ANWQZKiEipsMgoGYCWnJBsRpPtkiZZMmYtEmxmgfBr1mgGicF5poAMnk7hPUSG"
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
