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
    "5xB8B5DjVNkksa3vVvzADZTBa1HJ2FZpJH3yz49ECqaGkeLKjK8K9h2aizKekzg1iCz85T9SnZDU183a5bRATwY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SbaC63EXQB4Ptqn1fVoGJVi5cqE6EqgByt2oCbCD3JCgJ3sPbuhLWCyHhmiEqMSXApxaaUW3RvWTrKB2gZkfgym",
  "key1": "5h6i8vJMEZFWVeazaKMfZZh1xMBY2znsPSd5uj7kothNDdmYMG8cRVnuKs6BNMvpTVcbDGDJfwBi4z6JUh2CrnqS",
  "key2": "31XPey6hwm5xxn1sus8ZhprTAdginZn2UNgdfFjsCWUjAbGBogMru9S2dALGUmHDtydfH5D1DvkTByPoiYyYebA2",
  "key3": "4TiCskfZNkopyiWrwu2s8qHXTjaU4nwwvHGSHfFVSxmUaaYEQb6qEoYd1pEKRayaxaSVJAiY5QMvJTYgqpm1Hvvg",
  "key4": "5hMW34b7MYSCi1w6erFXUgJHqZkGRZQJ2b3MbLt3K2Gtf7HTBc4f5N1XadSCTM7bt7nd7ZjWn9L5KkSTsB9nqQiP",
  "key5": "4yrR6CrE1Q3kGDs4gM6NsowuDHQxqiuMi6SmrAF1oUe6Zw8bktnPc7hzqsydJKc3EHo6JoiuxGeQyNT1LhRZT1Nm",
  "key6": "5fh3QqkuCPibEkVkTqoXKpjPCz1fJtgW2MpiAmL9eedwLfVDSFwSdYUZZbdnGuLYwz7Zk4mxKMvBhZ5M5t7ZMYRf",
  "key7": "33WJ4C5CNYSJP66sChz6E54a6RfzcZk1XrZsWn465FM8MEcCS3ZWhtjAXptwfZ4tEtBH6pe1YMnVpXGu8ojAvbeh",
  "key8": "2MFQRwfeGQCShx6zXp2yr2YGsDRw5aUxv7XBCGzAkuahjsDUZVA4Do3DE9mJP6Fjh7csMj4n3eJa2oV78KAdLNoE",
  "key9": "3F9MGWvfKKwspZqeqmwDLSwSPWDEMH2NoXUnDaYpmiKZz7msC97vv8BKkNpCorEWKDRXPjCQxoerATnC5bVkmHoS",
  "key10": "2RpGjRvrvnEcW3pUfQLeABJbpjQJtHQMixLToDpt5LFRY4M2ZQsKUbMGqMFAQQF7v8GMY5BV3njeTmaQqMpqnFNS",
  "key11": "98GXXEo66if9PPeFhEQtMVS4hZo3YZkxSodAyTBvxED9YTBuGB9Ft1rnaRSAxym2F3Vgfag6yvKVk3cf6aMY95u",
  "key12": "3HFdHmLbgXmwwU7V9wLx19RJEZn7uEUQUHQNfN4zLsRQuhCnNcnw3vpGDw11yMRaMg1mL2iK7wgahcnL3QEkd7mF",
  "key13": "3EUxMLsWQTCQcDutLdKPggMgdzzkaFGmpqGSPf1BofHWnEN4YXZb5dgx9sdW6H4UDJUEcrHF77x4UT6fymMhQukN",
  "key14": "4CiyvM9yDhHvGBjeZhvDTQUkcdJYcp5TrXNZ8YUncggJQBaVnwuPZH99C9juWd2sh6T5trDR34rUExZfjXS9MxDM",
  "key15": "38UMavWJP8mmhk6nhZGnwgWtQZfJDJeMyvRrdpoXDTn39eKLKvVnk3rhRYsP9VbgBsmnAE85AVHicZW3eViY1QUA",
  "key16": "4TF544bobXseL42TtbyVitDfooXh2ozq7iofWrBkwr4qFRN1EvbhVxc4PV7Cp1xJ8krpgo2tivWNU85hyuhx6hfM",
  "key17": "62uZSsCGu3ggWM8rvwCmNAuXB855nQPyLzxo5NBhQyNGXi8Nn2kWoxSLFbaksGFajA9upDHRGXVhs6DJrT85JyHq",
  "key18": "42hZCk76KkXM1EC5wZ2XaDADAnfCyadYezB9VTN7DbtoZewNvosAD6FuJsx4Zigad2ctJ3AeV3ySwLijMyeG3e5F",
  "key19": "4LNpAJsJxA8oNCYDmTGduDW6UzBPR3gvyMNcE9QYTWc5SjoYrSgn6BNRKTZuvwdRHpeXzgjAswR5rfkiN7LJpXLG",
  "key20": "5Xeu5EVMTpzkwJTtuPuLzUUmk3WnZKeS3r2oHR9UHAmfPdTwkyjST5ZdR78i3eWQr3rD2nbAmf58bPbrcsbXQSVm",
  "key21": "5FWvpeudSgCN3QThMqvLeMgtFXWK2q174jYHgEpXge6YQUbSaYrP7MUKCrEihBGeq2k8VM8vjfRU8UXPfH4aUMwM",
  "key22": "HBdnqVUDxaWBXUzixkmtuKgrGTBkTjeSFYyBgynSrEWipz7SD2EXAZcppRk1bevRMLjsp9SeuXrtwmef4A2bwyo",
  "key23": "3qDf5Pc2zUpx67Vguh4D3kHpq26v6ihWEdtGrk3i5UZFYn1kwQHZStGRjgxY1qmvndW2DYgmrgCjemzLRJPtXsgo",
  "key24": "4kJQZPansp3V3xSXtrJuNyNScHywzBFdfnSSK1FX48wq4X2s5mxtfFWZWKBQgamA24HfQwq4BYpCi7oZGUWjZBeD",
  "key25": "2Ceq6cGLeiFcGyq9yrYT13vkbBaV4MyuK7o6Mqjr9JGEdTKTxHLyK2dSq9f18uE6eVTKTeGnZoK8RmouHQU6MWRA",
  "key26": "vEkF9cV5FkgsJvoiqT2uihkCKb8pnJKdbUoVbuj9FK86SJnt3PvADXo5G4SF6aAHkjNFuFfVviGksjeMdYPpQyD",
  "key27": "4dw6arwoVFHFVtDS5Umea1FCx5Zdwq7ojNM7aGXmnZ4x9pe8Uab2jhCdmAv2EiLDPTPHDgwZ4Nd5JUzRZK6UFRjV",
  "key28": "2Zq4XwzzvfTYFacigVBgcAarLmsmrqPjtF8VQxoX63tKJ9tcAZ4XmzuRKjbECNkrm3cmwJ3WrkW41TqBPLwNVANe",
  "key29": "2LqXLMgFkfrjFy3PNktkmSxJDsB3A1w2QSTXyc2NCZvRoM2e3DeZznSJBS8ztZvfmdWH8SJpsSLf8tbjv4XKZ34S",
  "key30": "JChtuJLmvG8q4fTWJHzJdpppA4LRrBREeR3S58trPzuAiNm9g5EqHDbHfxBEjVY4zKeo5xgwpUxsneXNmW5J6UK",
  "key31": "5qubmPKQcYBQJbshangfEJZTC9mgR3EDBBu8UAQaV54NPQwAMwzpsEUn7dXqb62sZqDiB9TV2iUuFZHVJaunRsML",
  "key32": "FcVwF43ENut49reM8xFm5FEjbgefFE4UztfMtupEau51qpKh8Srck7HpuMcmfJ6YuX6BASdDWV4bLLWstTSvGAD",
  "key33": "2fw1KZmCUEDr3xrDfYduZwfRiSspi8AHr4NA4LaEBLBmgoQZ7Y3M8QXJjRCQSZ5pD66YduDctNHxR3JauRhatwcn",
  "key34": "5bmmTNtMtqEJkry4UyUYGNRaq6wCBi2WL1qrCqh5RpBKPz3FtvX4pV1qRHMdpGcQfzZfHk4tr1VVuQPaePAF8RPY",
  "key35": "43DvzGdu1w9Xed68hDW9YELPTyQLnmTmBhTw9F6ZDyvv8wjWsyqgpNkRFTs6hL1GEGNxUr7tDW1PMTfXAVLBNrfx",
  "key36": "3pgtJwrhD9YbmtrpV9YBuQ88WELC1XQxFhJCky8XmUreoCrhUY3h63XVEni8486qYqR8ehPQQYPRsZiXkYkMmXEg",
  "key37": "3yNT999YcVeaCcDwYgx56C6FqZCiGF7QFwAVVqQnwvwH5H16w1xNp7Ly6MUcDk5GCWZ1GvTDAEXEm7LefDZSvtc2",
  "key38": "BKkmx4hB3GygCniVErr3JG3dv7G6qXsmFk2Rfp2V57ZBH85ExmzEmGdvc7e2EPXyjd7QaMG9HyA5fd2eyGhua4M",
  "key39": "3ZuUyknXQtLucBbg8KHNgKerDoms4ArWGmK3yUnQzd3cNnC3duf87h1nfhnv5Y1t59SuQVCBKUyxpU8643CuK78h",
  "key40": "t7CSiKD8qz3PjTBApNnvUABn6gzBgEWtLh2Ph5rH45YSSg4PbAYJRr73ByFd6ic7gz9YktgBKXEvyw43rWEq3kH",
  "key41": "KAtcbu3LfAt9KBh8mKEzMjBCsBqUNjJa6QidcrrSRzoQG2vCVH8azHsF9tkDaN4bi7hp9C3mS1UJNNDEY7QT4UE",
  "key42": "2HiCjNNhhBc2gY87qWRyu2wy4isKGtfHsvhg1JvH6o3DmyfiYXfTiLW2e5uTXPG7cfMnPRngt97g4oQsriYsBnpd",
  "key43": "4uN4h8J58aeeSxMuseZDVHfPHmrSMu64VVdUsgz5nt71nKur6yLAwjEPpo3Xaqps1rcSDEsqmHiPdVjgcLy7dDED"
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
