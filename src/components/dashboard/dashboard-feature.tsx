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
    "2pLMy69DvaVteRYQcoCxvPyXn9Uv6yHH5HBkamwxGzRYihLLvHeJoY1g6dvMBkEffmfXr3rcMtjaQLYTeXgSrTbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43McZMD7rWJS3bbRDesZ1iya34cjuKX7cRpkr4J2BnvY1pt4gBcgJpWi7dakBqnqbpjJMFeRXPSWSRdvXiquq7jT",
  "key1": "31DoxTPhAV3jGMxSRRagfq89y46ppuScd5LUFNRNozAgrESwFNAUKzX2n6xxDwdmtST36djq1mV5zR9Z2h9QBmjQ",
  "key2": "3GCwGR5UJjxLvKy8eKrmnBTCBs4qinKtvkJYVbhzLkbJQg9E4PvyxYJbJQLMc4zoE74mxAK4vgAoUhREaxQNKoJD",
  "key3": "3bH2hmfxv29Y9SWbLVcRCToB9AT4C5C5cs74oSo1X4qC43D4h2LLKFhYr1dmyKb1jViR1YWbg86AeTnX1crRcjqk",
  "key4": "3eGqqQSh1hZ7hjyv4fqmEG8ex1XvhZwVunqAxUSwsneS7jLJeh5Buf3ifhpjge8SyXcjnTSv9578BAx93XZj72A",
  "key5": "5o3aC2gDxaY1K5WweRrRqodAoh7wmqUFYE2Cnj6q5FxW77uJe9FqWokixdimjgTG2UnPzs2vkRwQLXTHD43a2nc7",
  "key6": "4trbgvqXFFhuo3az8hBtf6dJUW81eZ6b7PmMogFfixCrX3dXsLRkB7mwBQGt6Vt69KeoLZqtKU7vCjvAVM8ur1wn",
  "key7": "4Lj9zaKCCKu1iFGjUMH4cLJA1zM2TF3TLCPtjHL4trSMAGkPkhakkgoULmGfEZxYHuAYcH8twYrkZmgs898dRPej",
  "key8": "2TrXWhWVJcRzCWRv1zrQRgaE9P6YgYjqwDqbmZNq3Tqb4gBqjYWGjAjaxH4L7BDSeLbnExFuETeKUvokroGuqbWz",
  "key9": "3mDeNi6ucD7c6wm1NKuK6F2waEJawYP84vizSEtmK46JveN68U3HaPCPg4qf1zfjeERwnPVwumz8bn5m6Z2AeEEG",
  "key10": "2xTnAf41r8KY7FgJuNCFFjn5W5nKLW5uSUnERKWwiKoCHao8XUTtCHwYYZFsCQmvH7EiZbGZQ7reEYb8zM8a7UJN",
  "key11": "4MRGL2wY8rbD2e1EYQSZoTaXp4RdqGKmvRoudUJF37CKfsziRYYSNNs7tzf89nYDeqjnXpp3oDgK3tGkmpbatR7s",
  "key12": "MTvVqrNUFEJgtvqoeqWnBFtGra19YdphwKJiz61n1hhpCpxQ1XTwTesAqScmoqsQZDUgT8mbnZtkz57ZQuKB5jo",
  "key13": "BkE2MCm4cpbrkgsuTMf3yZLoAK9dz3qi8u82NZ3TLU5w6tqiaXeEvFdTzpmvGSAKKGjGFMD5tHNJfpCPUxXazyL",
  "key14": "25ACFwkRebU4FTe1j13GZgFVQdydiDo7uLeomYhfZchNgN9wMTmrcoKHji2gLe9XZGmukGSagpRp5UDYyn7uiKDS",
  "key15": "mCPx1ZvQCNzyd39uW6CGNxSCoCQeeGF5RpTjix8eBxWhzjPe2bLcr98tf2wHQtYZQoMxSBUUUFPhi5Mo1gZ7VVX",
  "key16": "3U7x33XEBA16qqUg9k2gKV9NmqefxJrAfgzGxF4wzfBafB3c1Zy6KSeVhYB3EVjxn8VZJBgTvzXJbmEeQ6q2YD6g",
  "key17": "TA8CEyajCfDRha96Gs24HhsjTeGkUXP9gyjdJdJ1xBsZpdbTTkQTyZqT93oHm59oKcp1rYbehroNwtEdKXthwoz",
  "key18": "2Pbd5Y17seRtDXgzvQqbbiVyrz6uSc6m65DhCH4H9kD38LRktNjbdKNW76Tp6NM3o8ciWMzYkm9msojBXNSGWzh5",
  "key19": "Qtd1hFfSRT9ejUpXBB1tTzf52KYxLT53xLVWhoJdchXej8mKhkChUr2z8LgX5BdEPYoqrFzDpTgRomKQ34ijiMK",
  "key20": "4hQDKDVw6c5FST3xN9ymg9aSRwydUYXFTKmrWGoKmYi9Ku4jJjm2UcMBNSnvq9SgiGxuNxeujfmMWHKu1XvpUdcT",
  "key21": "3LMBuJEN76amK7YuTu7Didki5pZktVWKZitRVSNgiNPpGAaicmSEXx7rZiFdYVD6Zk13FAxz3TjpB6HvWzbwScfv",
  "key22": "2kUpGUTJc62x6sgYveRU1JDA9uT9rNcS8XbXgxHszwghCQyqYQZRwcbtj3CForwDgatxZR6mnkFsz9XmZAwdKciM",
  "key23": "4sFT1SvwAT7pgxVEkTHU3bXeFmAxPui1GxC5SmpUgMRtFnsHJvDiwnhrgB2BYV398FdqDVxZ66uSgHEQ7Q13AkP",
  "key24": "5vTwAsemuWjA8TDof12eLz7ZhkZpzgPQBiZqmjaRk4gXkuTnzhxZNkPFnyMKTJCaEwfGmf5amoEzadfDFP9FuC81",
  "key25": "5YAD6N7oh5ZYpsZfGUG3ZH168Qn7zzvZA2tde3ZfuYP8XQvDLN83d88d88WctdERtrfwSkV567BtgWMRYNEfseGz",
  "key26": "2wmkPFzE6pFYVAzSges1Ad721qXer5Kuuxs78S29L5qrGPjLCD9GkUDL9CTV9ASQjDbt4ynzFgFuVnzEkzJshYpU",
  "key27": "2oz7q6rReqs3NYaapJQ8rQNQnsLHzgzARTnFFhRamMevXZryCUXFbvBmwPUytyXuCMjgmvdXtbSAsTPRSabHcLkT",
  "key28": "2f1eje3GZ1kCVKXWPzDVQD8EUXRkG6kjmcjBHmq3rrBCrgj7yxbWqv8ot15axEzEkutk46ZBE9W9zY3TjfzJGHiB",
  "key29": "52poXBuLh2PqdXoj6PFekRKPApxFKANDcYMQxZbEuZDF1MJ5ARziWi1D78aXG4Ens4tqu5VCjU2qY5UJ5HdqcPjt",
  "key30": "3UAckrhczEhXp1tKJxcuFKASMXfmdzkVUHM5xf4qVxBLVQm2TbA1MEUQyzvi5koVUPto2ZXhftQ3YfwXEENWM2ot",
  "key31": "3dqahYquuCTFLJZS2JTMJUEGsPBCKHUHZ13d2XNEUQUyqKV8qKGvEerXXxcHwebQ5LVfszanpL7ZkKiEcBQH25TF",
  "key32": "4untt3x3HRG6FrFh98tVzHcVYxGoBfXcH8MFoLzjdXJS4sUoN9SdGRFF123BPnrptAjfkJzLzD6gcRdoE5mUvQXD",
  "key33": "dFpyRUh9G3RtnHB18KVNGPndvvaxaGrSTpxxRb5driUDUMBDNnDJ53rwKEu3Zhv2wUfcCAgpCRwRhBXdFvxgQNb",
  "key34": "fHiadVisG9b41ZWTSaBWPS7hug29TMpnthEsREJawjtZ2Q2WfPUD8uyyAqrG7SymkY6UMT3DWnfkbpyW7HoQm23",
  "key35": "272Bpkprv7iEKyA4GPBfAXUQrj9bQCfTzTqzfLEuKMoKxf9Kj77x6mp7ua819ezyAhmKsNejAjX9HnSxZnu8RQ2w",
  "key36": "5Gk4X17CdpWoXDtzUNDBTU9W1KYVynFHQ4ReUqPhDiw7oHnFud5UoYBbkp8mq9DNJaEVQy6KPt8L4hC5hQwApM7f",
  "key37": "5i9dGKQ9bZx3AmHWnMVUi63B2zyhkSaHcBL3ivXi75aDio6b2q1YtxFfMgtqioHep2PJRzvc6KokjHuYZgK6eFGf",
  "key38": "5vT4WJqLJRYvz6mY5VWvaefrDbjaEzD96BSYuofxN68xCxLHmDw7DdGGZMMRV7PXrZrATHg1tW9sYUVKqeSMkS5K",
  "key39": "5Qtsrwr6X5Ew5FMBeTV4SqgcWgbLSy5w6aPjf8QWVikfnFu8b1jS8N74f1A1hapUoVMkUEg4SDjnRMrMBKMpddqv",
  "key40": "4hxa774fRLXe4k2PH2bnYb6DM4QQ7LiWKdEpLVb6gZZYZLfip5PojtfCP1Df66cC75zbduu2wXu8fSTm2fzjoH4E",
  "key41": "2bfqpdeLcX94ENvhuTUVLEwFgC25uUg6NJkard84mv1oKTovDHxeBZSo8weE3HFRVA5VAW1KdBmisusS3nJe3rbp",
  "key42": "4kmsavigCQWZf6zx22rvHqaUBkVe84vdE2sek7SmXHcE9bqj4A2DEgDjisMYv6y7S2H7GjpGXk85ujzN8stYTTw6",
  "key43": "4EmuDN21njPPYMESntV3ZYAcSjyMgXgmDGZ8bWuAmZyrkww5eyyavPT5daS4B6Akp1YbdSKfmnvUQm5JZcMn5dXx",
  "key44": "5DBVPwdjhtTqx2FZjivCx7L2cprEHX84PgVjuc22LxFxs9kAhfQH4TVMtBz6seXRyi45asBD1tETEsPG9GqV2MHr",
  "key45": "3DqGHQ2Zk2vjhmWJnPbUMJSd6BbF9gKDFchziLbn9QGkTNCusuW8GVB9As5TH6WijZVP9vtkdrBBAhM66ugyd5PX",
  "key46": "25e3JRCbk9QuCRQPbr7tEThRMFGWYAQWizzQmZywioa9BRfPoLeo7AKPPCmTCcYsnsDsteCxsLw3m9LDjYtGSGVF",
  "key47": "3Zj4iEE8Gzaf6kVdFtfHDJkkPWWn2m5Cf1UCnda9mSf8TK74jiamkzvk4dgmkguFWW4jP25e3rpmfiaBdRFRfM8C"
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
