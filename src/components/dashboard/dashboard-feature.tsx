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
    "4JLe82ahukXttUdaV3KCDkKQfgAu2DtD2ZyyhBqKhkfgQS2fCstSQrhcJrnEAdEgfTUy6Lt3MiXbCLcggvs2Efkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cbx5WAZenUER93Smac18MEEjcXHmePqf3pTawNAaxn1Rfo8BD6vxfmR8A4X9oGCc5y6TYbbiB7KyKkXiJo3VvWt",
  "key1": "wFtuuYAhXEtvyUDGDWWj3Xe3fZ4GuyNDWFQLhRFND3nZYQFTDVyvo9C5rxpqf2ie2s6uMhHSZC8ddxc4fNm1eTk",
  "key2": "5zc64RDcP34SfKiYTc8taX8ymoLRWYb4VzrJvZ2Dpds5AjPgquA6bXpuTyfXguq41qWPnZFEiaxMmX8vV16tToGA",
  "key3": "38hkEzUCf8ZQ76ssRe4JJ7mTmRFkbkXdL1jQr9KF3oeUDJw75QeWtjrAXSQV2uVKtiWvcGMFHLpwVi48aAaefmVF",
  "key4": "425pED7CKtMzYiinFDVoD4t1iGHjxANjaxAejPPKUS7vniSSQ2yfc5eaju2uXDPm2wrnwrLTr4XH2Cb1MreHbB7a",
  "key5": "4SP8LEWyEutaCex6n97MszDQu5oLqEgPJ6vBTDEJPnK4XpMSQXTjsadVHCPQvefY482daYjXgRRbmnVgE4cpLQZT",
  "key6": "33UuSEaAgE3q7XHWuEEBfm3sxDRHBbvjVtkjH4oxgPA71i8nUZMSrkoDLsjTup9xUnLAwSnLqZc4ub5VThhGP2Pk",
  "key7": "2WQEkS1RgoMFz9ZEHJxvmqVxjfcBngSxUkUwgogHSA1gY9WmM2zUFSYtAdkyhvZyXbFtaMThwjdec9cjuYdKZtpe",
  "key8": "21sXtmqvYWHkrKd923XQYscEafbuhZV4ve8KdNEo9RXoCA2S7yuMTePnXAiSA9kDaYQmRFtZefJVoRVq6zSaJMFW",
  "key9": "4dk2iqWjm2C1mGYurBh5NwB3Mqh2d6kTgaDbZQbYK7M8C5kT3McX9gRbmaqFrCkGtK5dWmVpeweQuSy7HQv8q5Ks",
  "key10": "2dqyeUYpuMWGWutJP2VqsHaqVL6y9rVra5y1rJicC1kjbgQmHPeujwTJBNG9jR7g2eifGSNSfxhreD69GC17roMj",
  "key11": "RijgFtj5ZRhmHY7E86gfAXUkrgCu5ts4L3UMjPBu2czxs91KFQUKFZc2pVh6KKC6DYExGHNN7F7GY8u2dbeaYht",
  "key12": "iVDQi6Vinmri5dWzATsHeXgxUnWYLDxcfbuyY1YCpqo1u9Z5UxSZeQVHn7wqPye9AtTfDN8st4Drnfs4pnATU8z",
  "key13": "3hDHhFBR5t53EZpXWcTbR8vNRmtFi2uhtEp432KoAH96fHsPxnsA42yRYffTjACKrZY2Lxn93CdknR2LE9piUeNq",
  "key14": "ByQTrYT1G9ir8szMhJTg1DXVBLHDLLgXEuvuBSHamE9oo24UwsD726WRYD4QqaF4ddA5nXoHBQgGQxDQxtzPNyv",
  "key15": "nAyS3Ko2qHntNF9kQGBvSMDZYYFsMuFofpSCAZC5mfKxwfHSf8mNjCt1qQUXtpT25XVGzrxVEYdrEDuFHo6sHnQ",
  "key16": "3YwEhr4qqfoypje1HU7NBjMzDJ4iVuij3eJM7t1jpRdDofmnt8FwTvsUPakzCmqvKfQExrGjtLrhyz7ZnV8Stka",
  "key17": "5eEUWo8Z3ijvxQbWmQ225KHHXtvb6UayNmu3iX5KbWVMAqFc7vWGD2Vzs9J5gzwkNuEf5NWbbnVwWaVpRYdNJhab",
  "key18": "2YUJBsd4uJsNABG4rtzRefFCnTnqS5jdyio3s7f7E7McsVCKthirXgWKQYpb9vHeCrC3dDhpcwK1zX1PTfEV5w4f",
  "key19": "4oDYFJhc5ACehsbqymuP6qfgnMGBQe5wCyMDsBvZmp544StfEeeuHGvzpjghEejrKTM8XRtiJtBtFhgKtmZaEp7j",
  "key20": "2HCHLNn1db4UDj2EsKSJPJwatRp6ezpKPo3tANe834Ek18Ap3k7wewEixZkojpMt6yDJEksYYSAQheK9bzxU4TEx",
  "key21": "52MPMyEHVa6juMiBQZjjgE1GT3tj2aBsQNcL6dgC8aWoJrkTd5JhAVErQ9ew1MvcvLr4n2iEkmCUBmbnY89Ui1TR",
  "key22": "3rDmbL9UbdG56dBLVHJoBHQWQ45qpQCrTujfTYFgxLZcSUq21wLtnV1fQF56knSqbooUq4o9BkRpt81naqkKgQxZ",
  "key23": "4T2C8PceNuKhwABk1N7GShBK5o9BpqLc3kLdAS7XckvEfALdy7oCLpDXc6Q9afBsxNoPKuxJihdXPjwXRg1odRZ1",
  "key24": "5JqCFckne4MHNcCEPsq5GZovZdfmgCaGxrk8Pf99aV5K21CZDsSSVWurfuDVQthKu8crgY5WNYEvdsF7HGrBL3zQ",
  "key25": "5L5s2QNCGpQhJpv7iJuo2cKGkbZAtQoWJYYggwfJct4YgX24Etyfcptgda9vGXnwDvsFBzZLx1G8Sh6jRCXwvrux",
  "key26": "4cUZXxTTfNA4mu6ZLdAg3AcQaV4wMCrmDoTHineQ3BQtPqqCPygWgR4aARFZNHZsGMDBtxanzTazCpe6zd39YvUU",
  "key27": "5RjkXQdBsrBQgNkj3vWWEj7P1CMeMDdUrj8vqHCsR8GqsZyrjLr4zxrw3AAMYvsYAWAdLeMNn2TjNMB1hqCeSRfR",
  "key28": "h577R2711hzS8A4XVn7eKBf2KGaXUccxg8AsxF2vmDJwc3gA4UAT3t3WQNstqrYGqekaNgurkAtGsQa2Zq7AMuP",
  "key29": "3jZduZMJUS5LEMHExoCWomtx9kiuxk6M1ErQxRaEeHfG9xDnxhivPRwfeiyNqBxE1rUtMKU7d8NJhsRc9FWFBGmc",
  "key30": "4LU61k5dKrFjZymmiLMNQzWUijD4icPUzJ9XztfbcEPdc5asVXkAHJa3wcL7RMntqPyiR3LZq9A8D5ZnzVCdQcmY",
  "key31": "3tDDjSChT8wjfcf7ed7Fz6sM79FExPHcjjZRf2Hho5Uyq7GxJRNCKy7nExjS9zqKhQcWypa5Lwrh34oF2yh42bGc",
  "key32": "5anxYXHq7pfnsQBK2MPuQaPE3EaBThoxZ2mroh2uiWfvvKK3Yoa11vGpjmAa2oVcdGbH1cuK7nhCkhg44nc6YSQh",
  "key33": "374G6ZM1hUZZ6yDejV3WGxkUwqcqPQ7Yzo3jQ2cin9RM4ekcrxwWJEhkzTjsvLiFmXiR4cGHiZj33e65od7KKNkq",
  "key34": "rzmGvSYSkqdEF44JEeBCWrD3WHqgSkTZoQUCnFYizzyVsAF9AVCLJZUUWJMs2ECAtReB4bJYd66Gqd2zQB29RkT",
  "key35": "2FA9NgKxwE1aGJHy9H6dfM2EddTKnPmM1a9F1vGdn9ySppK5UQYCQ2FiGvEMw2rNgqNn2zGp8aCgGmf9AnofPX9p",
  "key36": "4hQHKCiDEsGVGKHubuaY8pSqtRtmQd1DS1qJviZucAFS9g2BFWhDmr7Zu9K6WtuPKzECHQrmG2qWmmfmQYhGFgYH",
  "key37": "MJay7s3rHEFneeDKHpjXzMCBrxi7RB1T253jkrA24kw5RkqKiQsiCfPr3FaH2SLzFVH4NwnadWgyEbnFdu138wV",
  "key38": "3oUebcFAYUfuZGzXnjQ48CDX6rEqwFuJxa6TxMjHmAm1zsfCPDZCm5AcmfhfBvt1TGYif9mtZau28MENbdhg9Q2i",
  "key39": "2DGdwo44yTPzbLRxhEeJFrUuPgDje4hEVfBZrmgvVoAAV4b4nc8kLig4826g5JmGsmNXk1NU6oREn2EcUJTXEtd6",
  "key40": "58Cyovq9u89VqgizPgfZvQxQ4e7DXMa6nnSPxBPrMsZMPPa3KgdE18v8VfkEyx2zfGdhc5K16o3Hn4cthvRxrRMy"
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
