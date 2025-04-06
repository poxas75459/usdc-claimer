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
    "kzLKnS4eVxUHxeYvQKM8KueNmsM8JbBsiDBwys2GHVExuc2RYmPJUbHRqZVqneS83ZXxAw59RKdmWLGRLbSh5vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmeGDygxTBuirMz1tKWBxsTbZEYf3gFBHnxiEfqcSEPkYuC2Zkkpiybiu6GP2xkGeC8jjXULd3NkLZEiJBa3rRU",
  "key1": "2ajYCLUcMS2ErNpJ865wE64o8F8Zqbs2VgoMXv6B1uMsraX438NLch74XNvHT2Tc9XiZxz2KDB3LGYP7i8smPoeS",
  "key2": "4xVnrWWWasTFQ7QAt1bKHrYPnyoXDh6A7SKrHmzJUzq57tKdfnGfuN7tXZU9cyQcctyJsnwUNJzV1Jn5EFtwaAKF",
  "key3": "4L2D47W6DtrrHqXWdhWXyt7wXCju4dQ4vryfytwxySW7LTu5ZkBXYyM8GBd9ae9GGHXgCZr5fZdQwBkjwPp3ntET",
  "key4": "4hisfZbjp8FRcHvfZPd3pwLTBrNWXzUpJ43DrLkykxfBNViJFeyDjkNwuD9dsLwdVkgruF3ihcrT5DJr3qbSik6Q",
  "key5": "2RPf9JPQfxXNHje6CdMP8AsvVoSBEHNqVUE3ACmyaZ8fNEP7KvWwmxBaLa9bJHiEZcL58Rj5vnts63dJ8jsQ4JqM",
  "key6": "3VwhQcCiXfE6TnG7cnn9K6Y1NNjiBfwkryMRYheDXUHcGr8U4UR1MXk6vCCvynXzn154gqG8kH5xV2GF1NvbCZSh",
  "key7": "2Zgi5XWuYDC5z2GURRctQopAXTaSWLH8ufGd2k2FiyYRoVEzzt8HrtMEQxHwhpPnDq6dyxKNVAveMkf2ksBFVr91",
  "key8": "2E7EWTAH3mH3kUUniye7nyedzjXD4B8wqSnToGrc8jasopnEKt3nC4HgcAKFqJ9KjEz969ueJQTK4obRShcyH5hF",
  "key9": "3npG5crTuoWVdi24VUV4Ht9u9NpzAxH1Aaey7tfjYkNvSsHb1FATSRpneskrEUoCUDryxw7xJd2RWbgQggMWsBaY",
  "key10": "2rpiourDSgw8ZPxmwNXSjjxHrkw7ueRrsQzaJ6mJ9oDKtgj47FLUCgzSwSbUzuq1t4cuCvvQmtptfXyXn4BS4eTH",
  "key11": "391vGVsGSVSFFCTSRrUR3zYqdRcfzfyZmuoAgQvowdztdw31ymWV2JmHRzNtd2DDFitZXWwtPRumcJVyPhnd1Qbr",
  "key12": "6rzx9AvhdCHpS7sh8V7RNuhQHGSeGgVrBhQ3ESR46ztFNi1L9DhMrvJSAxUUWNg7bEaiJPKYoSf5CLd1Ur43iLR",
  "key13": "5LVQs8ZiyK7fwa48WRtZi5zbjGZRJbiWLW9PuL2C8XDQ2yuvrWrSkk9B8h27zbyV4F9WdGW2abC5xWzVVcn5woVH",
  "key14": "56D6Qb46b7P9pTyhyyAw1QUkXN8V5P7XH6y5jLjdBFod2nVFCmXotbecJjmCKQ5zNq1Kp5rnmdgggstxLS5C9nY8",
  "key15": "4TY8FocUJc6VJGN8fHXRBBPCKbhNFF2dBSprgBDF6mMZjcoVnUSA6iCpiraCdMkCo5GaprVUYkMTF16h7ZDD4WDL",
  "key16": "5xTdFjXvdVfPcoiaiK6r4fQ8vJQkcCyP6dQzkeYXxgoeUbzXBE3f7xpvgZjRNokH7Pzyj3VUhDq4caXgXXsFLvxA",
  "key17": "8u7ggy37RZuSkCjFd6LBAF42sLRPkxLtanrc147Dk9c6ifuPz8be6yXsyiryiVCSBzyiX8hh77Sy1GSqkPwH4jU",
  "key18": "Mw7Y4b3qm5asW5EjxC6ZYzzyLqLRgztwJksfAFj3v5KxgihgYTak4nGfhRkyHzjgMj2vL3snR63S3v1TRtJbDGy",
  "key19": "2TWHHCNAd5C5y1w5yywBc51t2ssyXH9QpD5KeMUu5RV1X7S5CSEUSoUxr9inUzQNguUAJgtFNcY345FX3pJijiKF",
  "key20": "53xrJ46M6A29NNwo9Y2aAEMtCDmQBtyiu7vHbcJ8XTDmHcoKErKWbdMrL3awNwccqRXq2zXZ1SW11NA5PMGZ9uoX",
  "key21": "5jSKFdQSsHXzzg82zcpHGs7FreMjua4i1XJSFLMz8QUDud7XmgFjLco8buDFZ2tmKEB7xMK7daKQ3XNVvGHCgiGE",
  "key22": "R4mYQ5bFiELcZqStuNxgLZTAWYwSQU9brGfpfoznTNvaneMAqpXr5LK3FWfbjAeykz19t6eFs7CbSPBeLZC3D3b",
  "key23": "4hBpJZrs7ysHPFhbaoQqiS8Bk9a3dSkvUBjr32YvPQwn8FBBaNvME5CpzACT49af8utBRHr5EucWM5VcCbqCYxu3",
  "key24": "mHfAqZeM7TAoWAVitk4fuNroje2wK5eTeQjTQCU6DzPs859ehLECvNybDzsof3SxCPYn4uaF324aEBhVEgjvkBT",
  "key25": "3VGQ9qm81mR66iabHmpMV1Bzi7R1hzVyCLgtnxXxGcFjwDcuT1G4f47823Q6Pnm7mdTcgQdBvQncsDYzTFb7Do8v",
  "key26": "2UVuFeC6w8u5yvyT2R4YfXZsPEGcTk1WLCr1R6cNSAJmQvJPzPUAfxm6pes9foC5RGko9TDwBY44tRkV9P7KJmUG",
  "key27": "64XL8zFhUFL3Cx6N5dKVtWz4kPXwuKWkRhTCRY8yphkNiWXe6WCMyk2RhRzQcpeM92RzSHE4btLhYVHeVibxNMgB",
  "key28": "41jKUFWxjrGGgV8TVibyagRoCt8uBFwBzmbjvbAxkV76Dc7gn9EfLzaePWwJhi73ErLk5tRA3pwccNpGyPQbcJX9",
  "key29": "53arooXACgxFaCQ5a8GBEVq4xXUnmTnZBSw73FxNeTB75c1yzCDHB1xGxctDces25xiiT9vUzPnXqrHYcdFRBFDY",
  "key30": "25ikVfMeUe52dBdMVEr9p3yemn5NmrYqRjKFhgkzG3AVEY5gfwLfxGeKBsDSmxggLVR1CQ3mrswFuZMfS5HfBrgb",
  "key31": "33LYn1LdWdjBUQxMxP8gevtHonLE4JK2vZsZHbmRNMKVjZsZKbmoSXQvPbBpKbdNjtBhNjD1f9WFe12EeDSoycS",
  "key32": "2zfyGJ4LJEqxdYWogCUR8cB3hXrkAAgqYfQ857ek6eK5Pamye9WBM54Mbk6GcJqejv5cCu9eFEgHUVC2MVNVdocs",
  "key33": "qzRHuoMNNCpMwMnhAqpzULb8fBBDkFi85vtLMgkc2QQaR94nNFbGZ8AjrL7qF8ywr82Cp2n1X4NxLAgk9HFGo93",
  "key34": "2yCeZNHNJ2zrZfJT8HPvY4NHsa7RLvaqLQ3TQRF3LZgQSY6Thm2PMVGwY35rm9yuUYnD8TiNsYj9FPBmNnCS3VuR",
  "key35": "2BUW3JPbPXNwYYrqMXmMFSbtVg7AZ5RDFiYWENVByBNRkdGfECJXjdMk3qEBq3TzUAsMw8A4fgavrHCGtXQ2zZuE",
  "key36": "242iU9UR4poqXtjpmZWYU9GMAff5fpf9HK5BGmgqUPCBb4FjHXxfeJiLgzrnoRaYbDMHzFnR4e6EQ9V9Rnv7PptH"
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
