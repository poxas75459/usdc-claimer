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
    "4VnF5XfdtesGbig4HTeY9DZoqupDYEsFjmQCMzw3WTL2CMqe3uD3PcxATK2MiZcSbo5h1o1Yo2v546WxDoRBWLqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qa4DmizRBMx5ed1KTVBT4yZEYnnsLd1YxUSYBhRrjKVM8VLcGe8jtEhdHov3JX7Tkr4Q2pn6gJrdMM6UkNjYoc",
  "key1": "4YWB5YXDCWqGxn1PjUbb14q5iXLkf36Dd4ZwDWoMtqaTCtxJVoMFSXLXUNq2pcYYUowd2Qvaajw8kTKfb6EY1XBi",
  "key2": "3PDm3Db8tcorTxRn5gLYQ42ngDXXFMffztphYKHULzj4LSVYK9YUXpeT4vXz3QmtRH3Me1QMn4eLyEuJZQrBp8r2",
  "key3": "5UEMhEPAetkYq3jvErMs3N64tHJsWgMUVzaxGsBpS6rhZzYmXhTLcH5nT2Up8MEm87yFrbFY9jBZKSh62Hc2pCB6",
  "key4": "4Ww6nek5krRYLib1vZh4epfVq4Pv5oAFo81akn1a9v1bizV77CctSwqeuhJFLRqpZDQxzboj6HusbqjmqzALZ5uq",
  "key5": "5oF1ARB4zwxwTgrsc5fKpKwRK9pHn9Ku1Qs8bLXYgTL7wvQ2AyJhpqhafL3wY13bbwV377PyCadfYGaFQcRL1urr",
  "key6": "226sRCrcwZhbo3LhEG4kgJUKhKC6ZEKooWo8V2GwdMx12iAd95qqfvt1gVHiJ3dXv1dKpqJFby17DNgFWDv6f9j4",
  "key7": "5rsZPCWHZAwXAdKRECzSVFDJFYcqhy9AxYiH9bPMidfMGt1bgNRDKd2Vdf4S6QCYcLnBHGn1x5CjdGAtQYod1p5x",
  "key8": "41YsfxaDfk8c35FKbtK3yGFMUC8try6NTGvaycD8bXkYXG7dWqPbshrUydtwm4M5w8WB75DX8u4vxcqMaa1NvBqj",
  "key9": "2j8B5qnL2YfMVsSNba1F691UnSVSw33NcsycD5hV9D4QuKEN8grVmNTmfoCirWz6eBcJe2qsLSmgsKBrQwy8xU9w",
  "key10": "3dQ3oRoMez5n5KJkoh7UfS63hxfBoLoqfNkg3sdNH6hNivZ2AHizq1UqjunYpL7hw8cku3LVZGQtRc9QcKxkVKzX",
  "key11": "3T3ehGS4nbtuoPDLhNWUFXtSjqRHGTnJt2fWUwDpTNF4oDdHD2xfC6xy5ud6rgcYUqLuZ99THgsw4RD4vpLGs6Qh",
  "key12": "4zKFcNoasZdYye6AbZbFAiybEt8FFbew5otYBY7qoeQNgxSwyx1bBrEMuBFcu1Yxg2baZocscdemUtx1PZMjTGjD",
  "key13": "4s6jf2Cy3a5K1WzEw2pBLQWDKjbkDnirRMsVxoyG81y3xvHvG4kHbBjYfVnkyWe9XZchR15X3yQnHBbAu2s2xQks",
  "key14": "qzc8D8AM3kz7DGs4E5c3BzufXVHqkf9THngbXUXurio38dEbc45XHLCWzxYAfeR3wsAoYyPFPCS8WHmJWm7Pcna",
  "key15": "Jwy4U9h9nA43VUhLwkQThxHMNqbpkSSuLUS31c27iX21dUKE8Tcp6Wg2RqDNL2KWJivvxBq3YmpCBYEMUm8tUyR",
  "key16": "3QyStipkWwWsghZLFzy7YXUHUE7YXkitCfRqBxCbhRaFHtF7tYMWdbMoiHvSLf56AJdmPuW3DzGkqyhKSfTKcBRM",
  "key17": "3UHBEDby6C35wi28nHTeg4KeySy72EP5z4rCeSAMDmfRHRRK9EVEcUKgJUWYYM8R4o2cYjpgCxNXjKWsoGA2UAi9",
  "key18": "4SN8pr22cGCA689PZ2C23VVDqEkgfBJEuS2vQdtRqBYM868mDocHoHiLQVrtpbsmtmnqmsvAh7GrgB9xbE9VMSBf",
  "key19": "34FQptMRAYeuU4vp8JJwwwfcFhror1U5z28W63nPF4X63ztCoBwa6J4M86EZStSrUa7aU8tBL73pKC9HioA15rnu",
  "key20": "4wAzMevVQ2PucJLjh1m3tQhUpooLqe7P73V1753sTDBrdZY1fNRboGQsLwpzNUPoPzSaqixtRa6YJH4ABL25snU4",
  "key21": "3jcV9Zsuh9Ph4mgEvoaYY58YadyLcCFL2dxKxsrQ6MjmSfWzgkMu1CJQ3gZa1n4pYDBjGKuoKhdQi6BXcQnACPUe",
  "key22": "5Ep48tE7nVWBi7DPyu99ffZKkp1oEtUh2BDMAWMypRMmePtYCbjzs78KjCjpVPsy7xcsiCqxX7GH7cpLRMF8zxTN",
  "key23": "3PhSTXowowdxU2GtQCXF9V9thGSnAg9g4ijkqufbdR7yBeCWZPauXsNJ16PyanSzgaHrLXbXjRqNeM6L2WUUnGUS",
  "key24": "4gjFCj4RwRcZd7RqX5AKwWspDcMtDUUTHZGNMMUVf7sN2Vd7YcM8etUMfWMYs5mkwLWxZkCwBgr3nScsWzHFV3Te",
  "key25": "54WVHQnVxgxmTQX1HUNRACV6qrS34ou84DNsBVALW9D7wK9bxKkCAsfxmNmNpqurM1yDV5i2FJpFbGRCwMue3ZP8",
  "key26": "5BVQM69JPNkdyYEehqHty5ioYqYznCViUS3pDAMDdEzR5mdD7ZBBbBGY3yfLCeuDtXF89CUr6ieDUvEJAAK8tLqd",
  "key27": "24JyvPDsHXUE1MAYDcjNGaEyuskRfb4NEDoimV7z45RbjpCyNAAAcxFzc1kbi692p7qkfeAKUT6Hp8vBE9xu7wKn",
  "key28": "4fX2ykDQ1UrWGtBJsyCTB8tYhsktUEZVvWfVhbaCyv26NuriZKykJYLskTQfv9TAQG7RasEykDxWRvqxpFwckiDT",
  "key29": "3yR4Mn2Uityn6rw3ipTpy5j5ro2seCzofsD2kHpRFBNPvXRtodXUX9mwU7PUVZF75gaswXE2Y953LNFYLZ4DcKQV",
  "key30": "38fRY23HnTdsda7Gy6hdv5KLfm9Xd2VL6edMidhCpAraJV1kcRVphYrQu9aAbktW6GAqRUdeToJMekSo7xf5QhVk",
  "key31": "2USAunCCMFauz9Wrhf6rjjEeG6biaxMAdrvW6TPzPJb84EfJUSMTvTuV1vRuh7qEudysWyKSQFetju77gT6dynsP",
  "key32": "46rMcRBTs1FGgcLSGhtnpjVt5xi5oGAiD5s1twPubXs6FbYKmakLU7ehmbipsuFAui3EwGB3bxpe2EAQnZjTzHbT",
  "key33": "rC5Z8KV44pBnB6XoMWrNrALtpH4tAHaSCDtUgzuhXZdV5ZLisBT1pc44Ni3cwusUHVx6H6XU1HMG1M22ZKFVERX",
  "key34": "4spfY1QNmAd9CWQTQ1jWh679E8bZdzcPSrJz867nRyHF3EyuQqJVaQbdQf5xK22QuPTiFoidwZMJwTnjtoUziTr6",
  "key35": "4sT5dzYXPLUPbXkgTbF9iwRYDDaEiHFS9vZrxwiNhJwCqXuk3ucwHrQKkzU8ZRkeKHU9JgoEvJ3wsRSYH91Sn7st",
  "key36": "2h825NvvZygkuvNq8wtSfXow7tgbGrmMPNuA2kwqieymkkx3Ar4RCYkHY9EXjVbkPqG8gigJQVnjokd7zQoKQ8qc"
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
