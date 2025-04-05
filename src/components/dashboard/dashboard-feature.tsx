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
    "5skZKFd3qmaVYYR2d3abLjW7j5GNP7w4U3AVQmqQorLASjLXRcjLTZ9uks2W3tQnfh9LRYsrmAPQNsik5hv2GzbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdidpkyejtxN4Y46Luqr92W3h42HcdgBUpQh31XUqSHZcUTZfqThVgrTiH455fKS23XnDPbz9xgmrBiA7jX5dBR",
  "key1": "61pkcCq6kG1EUiZjwhTJhCWy645XRGUGJa1m1AeBCqMwpSWXtJgDSpcL7nTSuLFZqRB8ZMMtRSrwJfWVbu34uME9",
  "key2": "5spWN4Z3KiswYWMmmeV1BQ9J7Ru6DStK2h26fnCy4oB4hm5rq1Wxh5uLJo31Vbbq3Xu4Xu5PtGyiodnyAKaNjxNg",
  "key3": "66vRwh37PVMTmQwqPFHJ1YhBcFYqPSkcaGQV67fBfMLM4UCzHKT6QapXwPNQ28FjVe4qqkXo2Wg1QLFXkfeTFL9D",
  "key4": "uNFKHVq5acE865ozxZueft4Nnwzd26VNHc8igrN8AdkJD3Bx4Dn7PtuGoNShFzMoDUaQvDppSnebrBSUFRyi33t",
  "key5": "3TaoZcMVJetLVBikCYpvN2oohWUbVmLAGvXNanNiGj9tZiYrvHUkXKfWX8M4qZwZkoQhs6QataZVfKp4Wvp4XXkp",
  "key6": "4xqzmLF3mifYBCTshL6xfyaazfNWLw8e49NBvYpMQrRnFUmLS5WBKK6oB8g65v37bQqSRLgRhPZ5ezxJ8EkhsJrQ",
  "key7": "5PBvpoM3GDgA81NwK13pEmgBKApTzYt5K7yaFbrKbL4cEgUFwLTnbABZ7HzAor2MzbWVCyRFXfobE32eqqqiua8d",
  "key8": "hmLx8twR3L4MSzv2FVcxcGffjsKKnZNUEfnJLB5SbrcMfc1inB9UZ5jZymf9B487XQSAVFRiQ7mhNGdLzNBSTik",
  "key9": "5hHvR1KBga3Y4a2mKGrmD1kK7ScLkgYRnDiG92p3GDpugnrmQEdS9NJxQaBQNLkaNFfA1M1KtwRSiK15usCzAaZt",
  "key10": "kmnu4DGGxBdECyLnEDFyScRErZNigkasSGuX7x8Aa6D3WnWSUgvMU5QBSgEJxLo9bDAt2AFQ2mkJQVXN2RpJLHo",
  "key11": "QZUznWz9bTSSsem7or29s1SAQcoiY7zUdTPXjnfwxb3eJqyqKd5uGbJznbkECyKeSZqjqdmrD6MgEQTYVBd7XYw",
  "key12": "3X3bTjj9xX8fdHMJbJEyqepdi7UDwR5rZ5doUJET9g1BxsYovhBfaqCzmYb33YJZ65wnQxp1ivizm8uENemxmWhp",
  "key13": "3wVbGDNSntkdzWymnTRHCy5yYm7AXQ6UhB9ciY33HpDLDus7Nod9cKLUmeyyWoMHmEQTDpT31Wps7d1QCvA8DwWe",
  "key14": "4SxNCw6C6M3xz65cgApsxQNNFpqTAjqYXKHDiuL2EUnnKtgSjAqiruxoyFzz355wzgUS61HM8f4V3GcdLkD9x4sN",
  "key15": "47A6TbnkTMYYXTo2hEyFfwNV6p2LrNLst1o7u2YxqHLcqBgK9bREEFSiGXRbqXJQtjRxMh8p6X3BStxf3pYLNzXf",
  "key16": "5Y9rikiqVjmoe1B6ZgGGmhfcgf8VMybosw6bzorZbSGPFwx97skRDGpgbYCzgzb3MQwtLo9UAoGob15QPBPdi9m7",
  "key17": "4RXKmyQBE1XmZCEWv3e9nq6b4Em4c8XrEzd4amJzEeWk12JwofxU84aoopsdFP9ThPDQarMgJHpUsK9j3Z5jVFCZ",
  "key18": "5L4yGbxWJkTMQ8jWcn9R3VWh9Yy4CXd5eshLAhgGmdo6LRhrtJHtyT8HeVKhBjeBGM7MN9oh1TXpwibXMAAu4FDt",
  "key19": "5g4VXAtK4QnGtePdCzUmHRRjqr2pgTB7z6Sqojct7THLNXC1PgANDS3SwymL55XtZ9Lpw4d8c58kESpQH1Cawfbv",
  "key20": "5zUMwv1kMRhfmneXr9Fw2GvG24Mfn33joTsUPWmb1WvvpuRqPHE41jDkqFi5sxNBk7GSWpxW79X1YE1A6BqwQiu2",
  "key21": "3PK1k3JqjU2RXDaxSqWAMeFExJ2Lus3wez941amaYv5QyrKfGFoeekFJ9o4uMD1qWeoJb8VnYD8KcYaqMQ4HvQgG",
  "key22": "59mfs2EsrGjtRYjUshqkbx1HiqazbMUV52L8LyS6GT1YAacCbsj9WLHKLZq6WhF74gMbi9aRZnV8opTWRb9RYm5P",
  "key23": "4Dp8enGyoQ21LMb2iMSgvVBYgH5NdGMppyjzbWtqztH1B2HdigxyUzzRnESX9xW7ghRohvzW7E6NTnJzTLDcdRem",
  "key24": "48nafZaFJNGvtcQDizMH7nDzgoYwb2Xz8KuikXE2VzFpteqnXLWp1XQF7cNqtLuPikVt9MvEmm8RcMWZZ4yEJ9v6",
  "key25": "4CUpK3175VaRJYHV6cvjExCQnti5ameaSqbbhsPcWQN8CC1UimnxoAgp9rkpR8VLa8mmAJKNksukKgF7GrntMu8c",
  "key26": "2NCXEtobF9cEtwvBnEaLrLyWHCDyBuNUHH2XiiDYDNNHJFwQibWfvGQKTge1DLL7hTU1KvEGhQAByLkqzdVkeQ84",
  "key27": "36RvNz2BtxbbJvWhteo2Yh9qsU5LVRCUr7dV4kddxMp1FkTFjcD1bafW9z3ibe8tnnHfcBGSGSMLyjhHyWJPnGh",
  "key28": "5UgSVPRoy7Lpzhped3VJzswaYXz3Ne6QrrAnHg7oJgoEJeA1aArHuizLfTatuJrcbD3c4kqd72zfz8amdBxikV5F",
  "key29": "4sQRTAVXgtKhmzQssnBVCktPrzCzz1vs5dy6Cy1WPkWnaiVVjQJhKErpjMJ59phu2n19TZVxHqcaL7ftqdp7sESs",
  "key30": "4TnPkMjgJhsZM9LKPDBDmtjqe8fPtFbQReijyq7DXd2ZW2qFxLmYqHDUnbbFAwUxMD5yYk7zAxsHFGnqwFkqVGms",
  "key31": "4R4foWX1tubmac6s6jyJXLRqx3q3uZ4nmjc5BySjQ8bNmQARy767kFzD3DsS2c4SX3w9ny91Zgd8Aqt6ULAP42C4",
  "key32": "3r3HM1jFyvY2Xds7jphmRNmjziPxSHEZV8C1inw8v4BsvTBSgsfYDu41YuguDcCwwWSS8bNTPs2aECkLXyAZ1k7t",
  "key33": "2S2QwRBqhRjbV7cKjHHpXFHupKoYUDQFWbeZ1k6jz1ieQ7MnjQg3Bx81Y8vcQpd6KXSgZw9PcgELi4mAhrnzpi7H",
  "key34": "FuReUrXvXYibiFSGZVYeLdbyzpc3w1CeWdZ6hJTqdMNC3nvQfaYjdjyXT6AUergW4qH3vKaCNZQHzRC6GiH6mJA",
  "key35": "4xEWKWpBHZ41L672ReoBGmdjizgyUnYChcyw15BvuAfGH913GNm4FbN5momZbSE6875Sr9ppuJeFxLRERtCT62s",
  "key36": "5cr7cmksbvzR2xfsFvZ71vpqWnLesb1qUzoSEWjMtLrWj7xiB1ANynPNkfnFcw6iaoT3TzhTw6zNbzGuAbFxAAsX",
  "key37": "23FMZ4S72kEewphcXstN7nG6d5LJaHzeGfGXzZYo9742o4YwfZsSX67BA9AqXoTPXoScoLU4y8zFFNaBU816BveZ",
  "key38": "3Cgk1mrERKJmHNaHA6LLMXF17PKYziPEGqKrrqq4ZEDB5cbL3uov3CwJ5ceCPLfbJ95ao3vcpT2VSaDFap6h4tP6"
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
