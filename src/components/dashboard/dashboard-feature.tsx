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
    "4NmHY6bAfdGXpcSYhbyw2cpByfrxNDNRGqph1oxmb5oFkFNBfBGsNPn8XrHZYGhsxumZiKPJHcwDx8S9tEtzu3xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWdcmdLzP1sa8J4bqKpheY93vyTxQLoxeHRBf4PT6aWFKvhbkG3rmZikGC3CVrMB2Wq8XWkKN2teJDv8q2fZZQQ",
  "key1": "3XYDNEA2BNXuQwhuaBtXHzZiyq9KwYmT4EJ1nVuvnN4RGeoqf2g3Loprkc6y4Td46nR4q1cM8BBViQHkZu1xgBrq",
  "key2": "cBfWS3q66UHBqQa3B6PAMkvxkCYjLcJX5HxeqJ4hxXF9uHPPm1CpwGJ6Tcdg1wpcyGRepv5Gvm4W5kLZ7Sn1FPo",
  "key3": "4a3bmFeMF6mS3L4niV9PtYVzTF8yK91YCrAawSou9HR1tnimVHWvj3vmcien1nRezTmLWhaKtcpCg6m98crHfNFi",
  "key4": "3c752ywJCLxzg9EZ47GX16U8bvQPbh8Aswz7YzBafid9Uk7WSoHvYNWTEpfvokbJ9vkuohLywZy2ptYAs1obQNAt",
  "key5": "DCPpHV9FDJvm2WFsGoCFbAc3bjCFQ422NPBju3TgbfBAsXMJCgYCWEr5KmrNmwPBkMswDsJXkWqaabwJfQHMbrN",
  "key6": "4w7ihoSfCGfjsRvtmatoi4p5v1bLKPkxMT9tS32wNKkCeaVN71jdWCz9iDZKaAZzfXwMKsEqBSqGzRvSLfEx8Qy4",
  "key7": "LYasJSo2SzYHKj3VEKdcyJgVdeRhx4hWV7qCKJXTGRqqSDAuJbJt8TxrWo5MhAGmYvQBVP8cXgS15CaRPqxMed9",
  "key8": "4EN46AMBqyPgrTffCqZzbUsbg5FDJ2Zs9peV7JJQHEZGxKVqKU2wUkL5eRAu5x1hreuPmTRV2bMeUvUdQMtSPaQt",
  "key9": "TDToHtYiBVPW3tja2BAJprasV5zUjfc5B44x6czYSpKVag3Qx8EyoigUP5RjUjvJjQWxUcBAHzZxRd4dQNcNqBr",
  "key10": "L1b9Jc8EN8Dz5cB8fzJdxBQhxwphB17cpzMUWpHin2oxjvYJPHcrfpVsZasSYdF1mh3XExgaj63L3mntaJ8NdT2",
  "key11": "44GUypJcdQkp28ig18jg7nxPKLX6bBwWpAJbNWQ8QbyMAyymvwr4shBcJ7brerWjyrFAEDVz1AjYK2PhMPX4Bqok",
  "key12": "2kyAVBZPDSYob6e21wkfBvGSERrqQpy7EWPmZgQGtnVSs4vFkgsck8rSxwBQK4xHNJBX6rAHdmgDmpbcTmL5H41e",
  "key13": "5u2tpbNtABuHBnFhnBxgMAYbNQgCkrePHaBgc7hHafV4Nzn2KsGhyre6KAn5y6FzHjaaYV6jCBP5j5pzJQFLtZRZ",
  "key14": "3vRCHe2PecXWHpZkGFFBuxUf1eV8ZAbcyTitgJWLcRBhSuZjHKc8naVcvoiDkA5G4tr5HMhDZPx5nWMZZB2dxRiw",
  "key15": "5ZTEexPPVnFkTYCWhx6fFruvovPoSGMuRSBQysScvGqjGp6KW4x99pxsZKW752TFv9xTdhgb4dAiF6z29yKix2G",
  "key16": "i9sDA4s7BnCBhi6rFZ9fCkXPVL8UT3PaVJum4xWRsB15BVVV748BVWs3aqQvtXjUMowvpamP26FaXGe8VxoPCnh",
  "key17": "NeqdQeRL3zaJLEgsXR8oUrGvTwMkHeWY5sMN1kHNhenHEbQzkXWikgmXxkU11B2epWbGqmEHaa5SJTUHZu6zVDn",
  "key18": "2VS25wg947vspZeqKtiCihBsRpGrHKtNdRGi35k55YjR15rvFdhmWhDpaoGRvcszecopQNig9No4dzKCQK4iVncC",
  "key19": "33nFKysDP92qAmY93XpqHFMNJFmawm3E9GAyeQcCCT8erJm6igqQNTxdn223hw4t4rsQB6mxXnT9vr9uBypG2UdW",
  "key20": "hVE6AZqxhUXzvCsHpzhuY26qtuZXu8zCnWfxz7TzfusKst9pgcnsoZJCeGbSDqqJzs2a3GUo1rW4g2M5UPhaYfA",
  "key21": "5FJe8BoyU3r854WEHPPxTTi22T9anCdVVg5MyWdcTC1A9XSXzGDfp5dWc7hPmZLDeytAmVWDnLFGKEp58vzzcUJ6",
  "key22": "3qoHsXicoaL2TGtbD23p4rnoHAeZcnRgnhcGGWcFc32pA1qDdakTahQGmXVqiMrroQnMNvcM4XvxAjBF4gR37Ebj",
  "key23": "4f1BvqUFyqBTLM9VCx6N6Fos1UDe2z5Ex6sgrEeQGsu2gvNXarRxiDeV356KkFRpNYFFc6QEMUbf3rVsXavDUbSm",
  "key24": "4XS6hf5ezq16D2WqJesbGte6Yx37sRLrJhU2t5hrHby8W34zQrGgRgvgNcTAPAamaUHrc5prdve3nKjy6AaqA6Kp",
  "key25": "3ju3vtnuzLMwkjrkVRtjp7ijjnVSLr34f6TzuvZc8tTkdNgJnA816MbJbS6Wg2ZsKsqrpYP21aP1cKrnKrQD9sdH",
  "key26": "667wgESJLiDXMYqZjDNAxkdGcvNA6rmLv7w4RtfeV19HQPxeumrkxhmG8sURrpYpEVCn5uGKSj55usCVgdVYVt5Q",
  "key27": "4kWZvSGcwmQn1CMSKFPhAi7hUbezjfKAD888xRYf2fbDpUz3tMc5A7tQSvhBgWuJu2GjeqhrRgdSXPext8USFsk2",
  "key28": "64G8J4Adrg14QoMoqDqkNKidAEX2S8yQff1rVA954QJBbTEcvFEHFpUvwgXTcSUtXdkv2MQ7ysNQk13CTUAiY2V4",
  "key29": "Sztc9nmnCXTvSZWDaTnnomfFG6UbrHhw1QT1CYcoPGqFzZXWARzRX56H3G1F1mCoVhrj8kmQStTnDLb8684fSiY",
  "key30": "226aQVjKWqGfmCvygpa6MERqvrbs2mD9nPq2N2TPhH8Qx1yNHMQ3QUibzPvJR1PDV22NfrTxGUrP4raJYdDm7U8D",
  "key31": "3TcKtbXBbS2BmvYaCQD5Pgfkoo5etbgtt7ukJDSj6KiyM4XhP9E7v218Lqfc7RVMEhCynN5q5yG1eoodoZee9eyq",
  "key32": "3dj6jGJcGcfUb4kCZhCPuNQtpwJtmvGpAQ2gFLk7WYNwoGgBnWz6z2xVhaqMigowiKC9STGrnyyfDNu3u9erAjus",
  "key33": "2bczgBXQsUWJNYWVK27tV4p92y7KDvsKR5ndtyRPf41WDbs6PAfgqWzZdL8pQbc69gUgzivnoCBYpgVTR2JhUgV5",
  "key34": "2wwNfxasKzM9xB68UdtCQJJH5tjTmK7beih9cxFPoZ69yjARiTGKqr6S1BcRhDHZM6YWpvNHnyLEobq1ijkyQELs",
  "key35": "38bt2S3KnhJ2RSp2iPMmFyZye7HAg4ozZL7J4wSZpoEBCpLPUysaFnbHPKtxidfmVePoRCDFu6t8AstRaU3Upbjg",
  "key36": "5t7GtbW2ToM7tfMyav38eYQBBHopNN4Hn28FBjcCVP86TZHCMY4bwhXZRYxLcZZv69pmb4iYGQM32UJpzoBpbFh9",
  "key37": "2vbxyr2K6EQaaPF6XCCPnChi9ziyKpCxe4J1g47cwoUHpf5P39MDYwRapYhymWyzNjASWmKzU2paXryvhSY1fGJf",
  "key38": "4vzSHujJ7Aqs9LGsUq3LwU8pDvM1kwvWUAqDRFSrjKwZraafKPwc8XBa9gfHwvzkK73ENJDShnJDEjwmkj13jLYr",
  "key39": "983x43WcUv5CM75mmSTagdCneWnUF7LP97cmE9i9CDdd1xxrZRnczPqgNyRHB77ThVcNBD5D1Tpw3xwQYParPrY",
  "key40": "2K6n7kZZRWiikte6z1kQ21uMak1tZBbbWVLimx937NJY1u1DSTbEnxWqGCRqvjt58z6La6HYxaM9uyFJTTbXtagN",
  "key41": "24rz8EifHfHPy4eWbH4rLVQxYhf8Kasqk3pWNpbQW9XmNMHvgfdFozpncTAqL2cbPkfFiBDA8GMKnHEKWHxXMqdL",
  "key42": "2aQQMPzi2vQW7cY4dyRk1CZTaNWp6M6Ret5fX6RSxZMckfHPEiArLDFf6kku4cUZ6wZ6JP39sc4CZmREpbqaCqUg",
  "key43": "55uLrJV8NgRiXL7NpeL9eNHdh7Zyyb8XALrZuevFgUEgk3S8kqAm2mCBtszWT2twyxWvYFZi2RGaJdib3mpEJqk5",
  "key44": "WR93VWMRHcUANoqwyPtyh7Wy8tHpk13FaEGyqGSnQGPMcs8J1i9R1xLMuuVZKyNHdWBXSG1uJ9uTat85TUyEpW3",
  "key45": "28JFvnEeBRu7qArM5sVRXhAMvqrGoaNG9cp2FqxoRP82WNXp6X9m8yUTh4HQ5uXxFeFbtTrP3AFyUH9a1oQzwjZA"
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
