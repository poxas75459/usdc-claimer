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
    "4v1ncMUmKgYB13LnHoSBTDm43B8YuUr54Z4o4nZEqQi4aV1fX363qVEVNsrKugGJE1eyWQwyv4rdz8GNrxi6RpUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZsqLxGbCZ2vvmafbXu2nZqWmeWPfsnJ6CadayYNsFxEKrZE1mQwUQHzuDXjMP1whStpzPahEx5Y4aKxjMT8AkZ",
  "key1": "46SBpeCiRXonYxYJJkNoVSHjUv3cvkN1FMFTU591z9TgfG5HNP9Xm1Eav6B7US2DFHCBnU7jatRCrcRgAqKPMGS8",
  "key2": "67QyLBdxyRVXa3xXycLfPn3aYbXgH9ZUbFCPUqsZKu9WNzzeqQuFbGhPZQ7YuF7izvjnCRGYEaJtQcxN9iBi5Xav",
  "key3": "2xoNq5xeFTu5kPDR1wamGy8VjpfA7jzXZEcBujEeUTeK4h2dhuhrZdSBPybA1jPpamuTaRMTfqrwoKYUSvBhLHVe",
  "key4": "2ythvXYvyJhB748cDmFuPssBGNXwX8ktZ9NBAt4yUPnzZKWK1Vfveb4BGXMk9jiBSkQRwxsfaizWnBGAyLzJGMnJ",
  "key5": "3Nge71TZfbLLosjyTYsavnVcMnQQYK5zn8bC3pjQMsyHCWMypbs23pqhbmrM1o2Ufx5oUishNhiAq5QUBEUFY1E",
  "key6": "KoCVH3vDa7vyDfkKJr6PfsQ9qq5gFUMFBFdeYm8NeYhv2QZQycBYHsXwW6fvW7LrEu4pQfEDSDmcVeYmmTiWQfY",
  "key7": "2GpVHj3vHz7LCehYVsoRvZ5aphPf3hVkwYKwCZRxhCwJVicFEccgNwSpryzSxwS1RoZy8z2PqQ8oiFNYYE9JnU52",
  "key8": "2DubB6UJH9wpYCdfe1rfZDwbrY8JFoL5WhTaBq5qfXXmB3Ge8upUCrwdELEKqR9xSqY8sf1tMibACEWhAXU16MTR",
  "key9": "5CF443q1eUYGZmzmZne9oZcrz8h4se3SHViutXM3Uqo9DL7mFL5repCu4DoQryLf9ZRq2nk5xcPx1n7jst9NKPFD",
  "key10": "427dzqLc12pENmnKmmTvKrUXDWVwtgfonCM9Rx84zB42Lfrfx54WSyrAXbbDYaPc4QJ3oj3dwrj5N4dhHnSnTjWW",
  "key11": "38FuaSco8WsAE42GtkTWSr9zgNknPUZqKBYkezpwM1oDgc2sSFYiimydhFWb7hRvaEzwL1koeoSx2aYSHXwvqmT8",
  "key12": "3V2Lye5UvByTFU8qWddasVFQAwwVgnPFAqeng978pHvHGBdCHBEjmXuzXVULkaVUwiE2DSnkLDQHoHqoMw6MX8HN",
  "key13": "4dVybCdy16xyt4zUHvEtXrQBWFZihkcSBJ6b9D9F2qCiuLrGC3JmrkuT8mUpvevPpUhvMrehMdYj3qE3CbHdzXpZ",
  "key14": "4x369gxtSCWZybB6SzZFfzDFdDfxEkmosBimC2mceM1m56aahsKsycEzTL9yqqnHXSYozhfwuw7nZtXS8dBqixeH",
  "key15": "2Utvz71DttL2CTgLNVqqxAHj6Ck6Mof23Gve4SdkrhWDgB8iLWVYnRHc4fqD8vs1XtrwY33VEmHhHvaPbF5ghktD",
  "key16": "3AAPZiWRfLhAUbxLU4DEkU5n7gXvs2GkEykSoPDnC4oKDCkZdkEsNTVcp4TBWT4oxsNqpJExAA2dL97FhQ1h6YYR",
  "key17": "3qdMKP2whHa7ykgAN4h69pF1SjDSmXSfuQBY9PSvMYU3LT61pgwA1otBDttxQrGXYwvQDx47FVV4A7AsVb6PfxXf",
  "key18": "39v6p1sku1FXxfKWY7tSzCr93KRnXARJrPwvzHiJVDG8ZzwENuavNyn3D3mLsJrmTz8sJaMKjkFt5eEYMSCDMYxh",
  "key19": "2ECrKVFK9d3Mn3N2zbpCErhgm6irfKRvMV3mfG1MXpeJYjA9KhoyzvmFedbAEAQHTrPRvzsUcgfDF5afSHtCBsct",
  "key20": "5knraG7CXTJYiHjuweXptexJnR24At2yGd7QRAqgHoUEgCxzvCX2nK1sTdigAcftLFaVLdbG2F1kgQLBbBBKavbH",
  "key21": "5j9SiABtj6541yrLYJ1DhHyPpppTA74QAphUi4cFzgA4FqfBHLNkiQ6HqMpbgngDXk6x8QhwrNvDmse2rayuE9YM",
  "key22": "4yRgoNnFmcRbc55FPLxwnbHJRiEVk6HRqWKcvSGgVhD1mdX5Nj8Cpn8YYi2JT4WGBrTLv14bW3BdVJT9aJ5xASna",
  "key23": "66EzsZWMfneG2CoACeq8VWR6NYrCgihTVrRUNsg6LD7WBgHZysL7eGUtAzGCHvY1jmZHGpXvqPbJU7cin7e7pkrM",
  "key24": "4sXkELxjz9eqXJSUi3zpeW1TPY5ku2joiDE7bWmn2cBVKpms1DeASz7oZxKNvcuy5TDu5UoDyAkJyzn3o2VqRQ71",
  "key25": "5ojQzPqGWxcMaPTr7Lo4qpGkQya6AYuLBY1ktyCg1xAZAH98pztFcGmXeDGyuhGP5VJVgyqpv1JsZL8D71xM2FES",
  "key26": "5ncwwRtNPgVQTyLYrJ8tzftmR2mqpigYTqd7GF4FvC4iyA3bu9B7sBV9jjuDVdN79vsJPrtCCKxSDpf1266HhoZg",
  "key27": "4HSQ2rGGJEjjrcucEAb4rz8qdaTkg64uWRXDBLi1xKhSyXPEvxe8Tfr937powth4vPJtNvS3rUjEeS8BjfbiEgyk",
  "key28": "3RUiZaKqVV2GZd8Pq2PXMYRV3Z8AnrYYY7ZNVbVVGptCBVNXLUBjfH4usLEQAgNSbGcqnQM8EuU4BXYP98JtAtuv",
  "key29": "3nne4W3wsW8GztvH34QMT6Qsum7D1VcCiucEBNSWkU5e6Rdppn6JcYsed1gae1TJxdwnLKEQqnGKT3kR39VfMziD",
  "key30": "jUynjddKtNDmRubmMGfLK6eE81tKXJfH5ZKMLuBWscVUXehALmnWqAQjbpXq6AhHpgKESXVGgAzSrooQ44A2XVb",
  "key31": "51DuN79Z8wc6Fc2Gy3YzBh4Sbg1tN4FfoTpVP4k9p1oGY8b1e24kVHbGowKpaqxpeKuAoDWmXHWF2qaBSJHSDPDN",
  "key32": "4GUpXxJ7ivFBXABua1WgPQHsNEFSybCaXf7cd2VS4KEXjq9Md8E1MDZ5Q9SZj63ZyMc12MxBurkiSEVT7DZ6uAyj",
  "key33": "LKyt2cVPJeYYgsnA2MVB7V1rBN3F7r7NmPv7zdbtyUGaCsvENExoSi69V8ZDTY5yiSCZU92n1s56DpBgQoPx7Mf",
  "key34": "3JnvXi1ZgtuqLvSYBzDofPuKCCfT64uXRwyx6856XN1nuroPbRYEfAACbroPipmWZDyUWeU7VT9cuCDXrpaUNcoJ",
  "key35": "48Gffsv4J4tatqmvBgxmMAVRdP7gcL5D9Hhdx8VkBzBo8rnMP7H9ZQHt2hq2XAG9qsRQGaQQKCTZtZ5hACpqqKu4",
  "key36": "3Wd7AURXehTNamEv77R2P3p1Gq7sMuE22dmsGyXE3qtPyiqzummaNx27Q5Bh8eMCg43wWDFcY4N55ignMMNVkRiD"
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
