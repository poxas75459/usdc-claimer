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
    "4gLVKwaq8gCo9vtDURen6A2hyXXKiXHtYRP9yqzmKmR721bQg1FsUM94siW9eQSguPLUmij7vDkbEcLorsqrzcgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uoZzwkeNtSgrrPuaGBa8Esq2WTgeLd7dbPrjcdfsEZyUxCTjUSAmNnhU6CGSNXWpG6zPbfAmo5D9MCW3nWu8iv4",
  "key1": "H1PNqZATzQiAqRZmYyxLCqEfj69a7Sna45oSraxoWJdBHUhiSGoETbVYymb6HkqFK2CgqmHbFWHR8bWrG5dvQqe",
  "key2": "2ygaRVDuYybbvCk3iXBT4HygfQmpM7N17dem6hPMNvpnemDjSGpWpBwZ8Anaknda7Pnx8cBVCoizrCTS17dJ7SVp",
  "key3": "3hwz445zZd68sFgAC128UUQvV2kiENY7aVbdfArkcDZ9tXozVbeD8q8Gc8KgXhoRTEYEntv46bUBt5zixrMiw8w",
  "key4": "3LJPDwTUJ7MjstSboBRZ1R7izDbAb65JR4t4LLa5c7YSs9bxCekKbqWjMH34tVUGhWSxMastkHgX9YAH4nmLMJM6",
  "key5": "2tt1XZM7zieFCZARfvEadwjwxqdyM9vxZWZof2DdNNZgUBjweVczm8Znw2pLKRE7tCvjC2VonT4qmUS1N5qfE9GM",
  "key6": "5FFgcu7tzMrP6HHS6MyqfrZ7MH5pcGSAm8Npx7KNmYd4bk5k6CF2FvoGvfykjtQmV9RCC4vLwH9F6piK1WJPjpWZ",
  "key7": "2KLaM6CbTieStGhs86FzkPVi4LnEBYu9NXKwEKwGCTvrWUT2RshvHqy78Kbd6m7wZeNj3QnsKeVuGNfuaWGGekVR",
  "key8": "4mqYEwpoGL2JrgJRHzWC68bwH5LcdEfQBLKFianM1pyhZGZoVwUXsxNQ3UToPYmEiTVPYL3ivfE8TeW5o2LVxyBr",
  "key9": "4FKaRXqcuzMR732mfDAEU4JHijXabYbNWjukeKuVoXy3y6KhPkoJqH199oKtgRk3DE62VXHv8HLXCz3bLCCKenYi",
  "key10": "wa87opYDtSrBKtGg7ZSfoiZHQULnafdxso9Xsp2LDaSBzRUFsuk7YcQ2eaqtr88rxBSev4PHxrbLcwjZdP7Mjm5",
  "key11": "27N6VQEj3f5htSWaew1gvERrErS4NAWeH8pNkTfhiavwFzmpbJddaA4dfTM7UidfonKpqNrjUhSjkAXBQgWXCziv",
  "key12": "4KJ6tzpNFfRFpTCXXqcntN2MuCEGLDJTVrynCSr2KthcGzQ8aJb7Qu1kra4aLu7ck8eRFZQWPFMcowEpkQeLXbpK",
  "key13": "CYpZSYf9Hqxq2vMvhqext9WUoqfs7Wpi6G2J5qPpHxDsLRM6GtKm9HxMnj92zRMvAZeA26TtYhsQpngEqKwqrzm",
  "key14": "2YVpFA2bz4Tncnxkb64oHRFSCg7xpKZjAoXznWvEfCaDAsxEg8VBMwcdEpZ2m8nyDcPgf1L8kuydEzQh8g1P9cw7",
  "key15": "2NHevgNjXx3kXmgJoTg5YnJXav2GsBvaahE3GDoKNKQ2jounLYG5hNwRwTL9MQELo3TAyYm5kDaD2tVFqBskDxst",
  "key16": "3N4ZBQbj5dYjBeUjZeMS6nDNTsTyLRbWhYEGb2N22H1KTRtFYN3oE3kvK8qfzmusqS4KmnSe7rSHVimnu452jNrE",
  "key17": "3pM3mKZ4TVFRwUCLJNcvwhxcdRZPFMheBWHNW5MPxBucp5p9mMapkggEerREThFE3CitvV3EwYVpqPU1qzMGrKNg",
  "key18": "2wrmmtQn1q9yzkqJEJw5oDdMwqN3eVBDi9KjGvrXoCW8Rbw5BPZtv7wTLYQ4wYRd2r5orKte8Vv8JwuoFpL4U9ie",
  "key19": "2cDJz35fwu8DpwoPv8TBeB1eKW82pgNzEJogr9gEwDvkzSTv2SQ4q21RngqqeDmqq4QzJkMrSDXAjrogxBLsNfN",
  "key20": "4JRZ5CpZFesYHVugiQDfxBKwHhioanvQvzKunmpPm3oxnB3oAq98zVZyzQHxiRS8JgyTRphw4j6PwegUmuezsCSj",
  "key21": "3HiBtWTZ24bd1DAgvD7x3CsgLDUAVp2L9ZJMtTofrqysk46gRE9JmPGZg88p3c7EA5XJCqPG4rAe3KWkQjURsSnZ",
  "key22": "3BDjNdXUfSVRbQtyyxXzKeznRLDCdhhCi38gmRU5wYzJXUzunj7nwkdWA9EgkC9XhY3Ps2h8cGAFyMqFjqktyZJQ",
  "key23": "6Yfu98vftnyLD7YeWDEJBXNfpFRzvj1hfgB3QtxnjHsDqjZMErQbc688tbkAssgU7J9F5YMcTrqJPmLzwHjZMCG",
  "key24": "3xVBgGtev9WdtmRmSodyivqcn6F6NDRCqUmro7aKxH2sdsTEytHKApDRXjUAwEiT1JWJkfXafZq9BD37V4iBDUiQ",
  "key25": "2Q8KDNDZXdKvWnjktbQAYiB3oLcXgpREvpNLbcieMtQCWKwfbCQy4cqjaWQGjpwZXtiSTbmkGdksVmMSKoPDG2wR",
  "key26": "2KQA7wqvK6R9gArhRha728uwFpLWrcmko9ewtuuqNQ7SfyCctYYUzHai4Q2NhzpgVjY8oE1rjj94SxNbnqSA8uZT",
  "key27": "r1KEo4cZ8cZYxuXnQ31yrbGR6ngqf4ontGD9VahcS7ATEVaoXgFUvqs5G2akrppp2g3qVyG3Mi6Qh6CCazCd1R1",
  "key28": "5nVgMYKcK5Qd6hY4dXnBHczF1rTffKzPdu19PKD67hAxgFXrTaPb4vPkHSWifDfAhpq7wgEeLNCsvVRzLN6eoN4k",
  "key29": "5sit6MELrKWWX6dpsBwCu4PNUPHpd8QBzpD6Muwm1cPgQaRMH5uQ8Lw6i127WJ66iQywtF9CxzjkHXe8GVksjj2G",
  "key30": "3DJ9Ed5Fx2wLaTnvyWH2ak2L5WMxUmJtCdS1QZyEMbRXJwwpydghGdVDcBkQojGjTAtd1TYkm58erFCJeneSEdZr",
  "key31": "4JDPBQr2AntUoVqQVanqkUEuXgsP3Q7V8UZz5Dfe6tzqwbhzNGpyUFMuEohqnUtUXZERf9S6Wv2oVafUkChPZXCV",
  "key32": "XzrLdYDZHNdhf1FGN7fWRCnzZjgomQzyBBJ2WzX7zMAZ6JK98qGzgGbYTfxqh8aKrN76JyKE7RtZHkSGojqvk8y",
  "key33": "3VZMhYKQYj2pSPDrqGVe4e6uLwQyUCKh4Xu2WGKidvM1BqnLrqzBdBoMV6CRNh8SJA5vpTpWCxsUt8xX31FLy6Bx",
  "key34": "5zFCnaFU2LgJvQypm1hNKUBt1tu1JVyxk8jaj6upCrnkhVTDCiLVqeTni2hVcj38a7MWCFPBmQryx8AxL3debEjq",
  "key35": "SrUmJhRj6EhDGRHLm8gQQiDxuxncnsFji82PvBhEEn4G7Q3QqGidJqdPez5Q92hERb2b7kUoh3n6nZqnCiSQeWf",
  "key36": "2vBkycgs2Wvfp3fu86mCy27LHHVpcRujKgrhEUEt4QyLoTC8pUnw2dR8unSJokfWqJrXbSEK4bzJJdXyf1nFswxn",
  "key37": "4Y98D5Vywjh8SJKyexKwJcdJdXZQpYbqYLFh844hA74UWy5C6RBnnQQFyd5pfifvMREYWcvVzCM3zCVJiW6xgfE6",
  "key38": "2u63rHS6JiU3CBH9uzLMjtBE4j84oVsmF1mY32VbWdsz8gj8TnUQiVrM71RzLb2uf9wcqjeHQEQQw3NTGcGG6ndm",
  "key39": "4P5L8RdjM9DbjBP5qZeuiyc2cMmbQtY43C5pvYX5WAWPMY8iSppnhxCW47etfeeSWSSLyjWq5VSSujAEpPQbYGTu",
  "key40": "34QRPXRgCtukZjqvzjMgVUjJDgSsxy9FeYBucTfTNn3SYphY3hoo8n9vekB6Ut7isbzWRMpN8ZZxKZ2gXvTzym5Z",
  "key41": "yJywn8dyEJSycWbEnngKaB9KeeP89GcFurjRZF8QTN8eUUUc6MhYgr3jBjDJRjM9BpfdnnmePo3PQyGrgCrpeJi",
  "key42": "3F6ZKYEMmjSZia41isC41PNugvxX5hgMofqsHHo99k9F7xYGxkLsdFNGwnvCbcDNYoymUmnRAsaHZ2GSYMumSvWy",
  "key43": "3m4RDhY65zLVRsCHokqWu7VhBGcVETn1NamsJU6CMYw1XujAJscWjAnB18S4XS2rRF4APisyqSwvV3xyjjjxZFrM",
  "key44": "2tQ8Cc3nE9vQQbVruyvtBZFxqDmiTdR6izwpdJ2hiuoPQc1X5ndz4bD8bYwnBk4BbcHSnfAJbWUgVm5VUnKAJbgy",
  "key45": "2ZkmqTvE5vb4Xxkx1JZh39pYgxo9yuXq2C59DugNvh8KoNQiG5PSfAvoRdh5Ej4xorrZRRXQ7DCeaMQ33KsCPgjX",
  "key46": "2xK8UAthF6CkoH3WJYemxKxB21yAZNNU5UWcmNhVRL5R1XrqJSHmeAQZFieosGEXU8ZCZ8wry7ULK66n3B5pDjaR"
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
