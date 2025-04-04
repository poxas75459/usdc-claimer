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
    "QZRBXUCy3XY6r3rGsiUP4KR7g4rq9HjXeDSZqh4bMKvyvz1EjdSB6RVRQWpvdKfKWx3FDhtTmtYzSqHKdUv1pqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKyJpZPqDT8AKsGSpMj7wqbpdEiEHMm5N14Hi7WWzjRKCC6hso68M9MXTbZmuuk7GdL5WSaDj1K8uzmqqfF41LT",
  "key1": "3pLaZ1R9Uav4CWG8Cs8FCwawPZ2pASmZpqkrM2ADPHD8LFFzy6ypNzyQWBy6CTHuT7fSCh7vA5cHRyZVntpkxWrX",
  "key2": "3kvAunZN5dT78bQ6NHQsuwMHeF92ZCezgUS6b8KTvdCSwypQg4TiSR9gGR6zQkEDD5tJSUEkcsqtMFC39sp2Cx3K",
  "key3": "2UvTvYkcMJY9iKXmFQRCKTyzmCsyVdgVxZfgL38sLsMavxgaAECMa7osNjBwwgN69E8F1zsxLCKWsQvAz2GeHHLP",
  "key4": "5dVqMXPGE4ECkY9eJgL8VLnQJ8u4qqnKzZ5ErVNfbaEhRug1QwLt4u9rd1mALDvMt9kDv9acBzrnZcJJ1cgSJejm",
  "key5": "LDjsVXoubUkjd3EPL3JRJuP6oYRAKNCnVWDkMyyBJQ46qRcjwJARzgbjXVUgNJAMMCu66MCj3aCYQeBTx6keL74",
  "key6": "5EWEhaMimDaLb8FUeiPNktm5BpPzcJjXpNLB2MTsdXRzdVuTm52SZYY5RHqwekogd7Mn2qdojLgLxk6HypfD4N8D",
  "key7": "3AqdHTMyMCWsjwchC1WCaUbu6EzqFyASrEcigVXhZoAycLsGJECieRfxA1cytGL5MMMFJttomUHduUYKCPdaYYn2",
  "key8": "3Qdgsuob9Sxw9iDCgXWCC8dX8Ncg7pTLN9noqnEca3eg8MkXK6WyQdehWLnf5jL2GrbWkpUBHvBmWXF4t999hVn2",
  "key9": "4DbgHXhsFL175BixYADUbCtiqrFcfAxgoPjq6Eu5tfo2bMBg14L49JpLqRqYkKZFr1aYuXq7ruT4XpsWe58vLRnp",
  "key10": "5XZdw1Rys1nxCLLPqUAKJgB8UygiqQ3afcFx1wYwsVgLDiZ65SdRhVfY5WSVWQwVyKNYkFQmv7fzxStBFduobGio",
  "key11": "4uNcfJ7YFnjZraj2c3ENjX7fn9HVYpuNGVxmWEzNgLiLqf3FFssuEU5bd2ZH2htGmjjmzSijHLf7sbgnGQG3q5Jn",
  "key12": "28AbjM34iVDEnHGf6VwDSv8E1NFMHtfYb6MCkEmFm5YZJXeNQCSN9L8XHdPXm1M4f13DpVjMDHwboUS3vZVxs8R4",
  "key13": "58grxvCUrHkydieSS8Nv7wdt7KgdVWrwLigPsUbh8W43xYFSHzk4qncVuzhycbRWWfVb4dNjDdDxJFkeATq5Zh3J",
  "key14": "3KxR75jHAYkzwtx2zD8YnGf2HxYjhmrzcuncGb59AdTEUnCoHk1nq5YCXqidmXw9cx2ftm4VTKbgbFsTyZNUVrTK",
  "key15": "3VvM5fDTi155mtfkr3gcGWzse3LEiNP2cciXRoZhL5SchPpSGFrEJKweK6bRFytu2zXFxEwjerqzHy32V5HXjpJX",
  "key16": "4hXx91Y9LCZzGkTXPEwd2f6fPZSbtFKQqgABbBtXgyKLMXgNj6ewpqZFHMPH8TufonEauQ4xU57HbyrYgVqoRtua",
  "key17": "5sz2Q4V3a8YsMLd44GoyppXhr1BrRWyDvQ7iLEGqFrGeryTWqP32LYvhTrzphHGjVGc8W93h9WvGT1ouAhdKZQRj",
  "key18": "3DzZy5RKUikbo6n4RwsxiDByPFpUN87pzT6iTqPBhs9r3mXfdNYqmzYfPTABccFDGrrNEt3LwQ7pJXudUx2pqRDp",
  "key19": "5sbYNxUEqm3P4bRbDz3gtBvK9UD1CBBUc4SuRc2jv364sQTKoUJfWkyz3i9BsLEqBkfm5onvnZQN85KFYctfSMmu",
  "key20": "2bT6s6baYHu6zyXU64d14cYJxJviVVVXWFwFAiHPRiDXVTGD2p5fmqZpESDUuNfy6zmpmZ82QoxFmxy2swAB8tx9",
  "key21": "2o8UJpUTQv9mEhEexZA158LcFgqgfoBTeXD4LhaXXT7jH6L9c9BTwZVKt5mexBDDJdmyzXN8Qikw9UtstbTLxA6z",
  "key22": "4psh6ijDghczBvXBMYFRt8ssWwxWjSU3qz65ELMfm8zJo3V9x57MgpyKpAN71zBvQgq1MKwKCAoAi2mbRAvDreaz",
  "key23": "6E6TwVR4WF4ziDqoUcejLETsYprvJEm9fwxEG5JdLiu1kDHxLfpkeNgmeGDDq2TY4nh7Tt9rFfnD4i6uFs1AHvH",
  "key24": "5KxegUjHJtbiH2o4eqSPCGPCp85SqtEYi1TbiuQgo58Po6oScziAqE3rM1hSeqWQcHCQKvCj1bLw4Q4ERgumPyaU",
  "key25": "66dhvPZrrb8iBywL9Cxs6K4ECUt4Jte659xsPNBdnWH5CkSKLvwoRmnpM5iH6QjCgTiu6L2wcDCa2Vze2d9h7Cpd",
  "key26": "52MqRU7QQWes5xUVEtyZJgzUu4Qf6WRhN7yM8g4fTZDoXvtMQKubpz4Mgt8Ps5zQKQLFgzXRhQFeVRWX7V4NK4c4",
  "key27": "2u6F1biTxTr7H5RLxKCuzdvDVzeuZqYCBgGvsxCkcrasg8MoLT61ZoNkxQEq1ST1MZhVZx69cxLeLGdqnqSafyfa",
  "key28": "DVCPU38mLJiXmXfvwftSDS291SK9r9X3CpryLb6MxMaXz3jj3sozQP1t6C95Q6Ph7Tp3hqG9fhqN1PfFTYaWZ2J",
  "key29": "UaHymkQuSsgCJ6oYLWPWfKp9UwCgGDouxmmWy6R98AwsUT6rpH3ZmoVqEYXZa6N1pNPn8gEEELVan7y1RFT4jkJ",
  "key30": "83MhmF8ikrHeDKzXDnmCJ88cKFf5aiwScXN3eE5xWZShXFM8bT5t6d8jPtcxn3gmb76rCUr8RYJZSir8r3txTaW",
  "key31": "3CdLJT5SnZxnJKik1iNJmTPm5uuK88BU3hXPLXkCWuF5GVA13c6pgwQWZgjvg4f4ivdEAatgm8kYojyTvFLXMaoC",
  "key32": "5Rf1RRx62E8fnamDePpCGFhyZe2fofVMm55LvC1eUs6srhQi3fDrdDuQ7xehdaHroXEzfMuMkTxdHgiDEjdRjpcb",
  "key33": "5oQCHPYqdEaCMjSe9YiqWeAX5hq3ZhgMJigddoTF4wshUDsmUS47N7RAZDXevw4sRuw6YReyecrj41c9qr87FwGv",
  "key34": "4r4qEVNiVandurmPv83UK4PUkZcU7k7DHerr153x9pyn1kGQnb2ivAVVHC4QS8bQTvUxJ7843QR2WHSdJuzGzYUG",
  "key35": "X1wgVPrMM4VUpi1gRsNdqMVBNM8mzpaKLMhiGtkEVGBrAUJCJXgWb7sZxW5kyH9dGdopjC2k3Ek96RddmW5pN96",
  "key36": "MCenuHz8n2mx5TCVC4TirRPPDrTx1tH3AvQtgnXBstKEzjyDmH6aFmEkQbTYEpfzcGodQRdhCJYZCgT3umf6enG",
  "key37": "63Ve6ZBLNgW5XoPPkRM9jA7VeeFEC1sEW5UFWRqtwZabR4oMyuXSaJz6SKfbXxvGxBGxwz4D71NuL4sBzLQ2wjv6",
  "key38": "4hRCJEnrEZV9rtarsLV1jXaWaZpB2wEgsw1ykrzXBuebk2VkmBhEc6t5HXFy6mot9pnN1qE3m4SjJHaYWkqBdHUH",
  "key39": "31eVWNAKcUYxh8EZkb4xZPjn5cxNKrxKMrqn1BmshZT9U7xFbpsWsNi3DUCQqiEYKkJSB3kLrsxF8vmu6AxThP9y",
  "key40": "TiLhfqgSTUHA5pa6isPBcbZZErg2eToK6yZsVSvNMRiiKYcrxfVMrPPvqAr6rHMkt6CnEkfCm8XW6YQGbimvzjb",
  "key41": "8bCogXyk6Gkg9wkgrWSwWy9kSB3Y1YYk29c4ZZCcSqRMvkQEF4PqYsGs2kfD53EmeuNE5m16p9N2vvzRMhbXsqN",
  "key42": "3tAgWoFBAMwpZy3zUjsb9agyv8Qne52a5R4uh2X3h8P7fdQk1234UcVf9XekfDisaCfFc5NCEL4d2ShxU7hj2sq2",
  "key43": "45s4tC2sR2cZY6j4MNcCFbjDiwAPvvoZJx6kv5qvHuyjwv8nYtUoyAkZxZNXFyTJttCMfNBYWUd2ee29LTgpLqD6",
  "key44": "2sGYq933MSHkdWikmSgsCrMEuNMwbEiPNaeGgUynCxz4bzNGZ4EnHPeEiKFwkrjtfvjGag7is26UiVx1sPC2uspY",
  "key45": "3bHX1TQvt9SxNrb2JuaCkJsot4kjjWf4TPE7H6en9zcpR7eRpLcjDqzNd1kgNJpyihE5JSfA5mM6R9iCmmLesymW",
  "key46": "EjFjcKqeFhzUX5EVb3AL2JUm62fD8S1GRicjddxTVVh2GuuhqdkzacnxUvkKcd4Gq3NB2MmkEsvXfUJ15u7GUKp",
  "key47": "4W8pDf4jmkoQwu96vFXhkc3xCEyTB99kKQg6c8AEVuMdU9m7GhJf8ScjYcJU11Z9gE93TyWUWpqvLA1g6x49m5Wn",
  "key48": "5qYZc528m22VMnJcZKbgrseUXEYxYusLah5fBNrhXrMuEE8DwTt7hAjuXdwrqtGVD2WYFuVm8E4mdQBbnZLp2dxz"
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
