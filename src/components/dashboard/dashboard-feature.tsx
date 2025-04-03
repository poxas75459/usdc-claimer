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
    "3NvKYB6KLScTQh3agry5MW5vb7bCcbbx65BPvTinxtKoncpxwcDzaHUv4DvxZqvJKJwNPPPdvGMygGNzp37pJyUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPMRjYx7Giv95JoEzB9AocHH3YrGqSJCgrYg3Pqd2Zx4EuXzPRt8YynQAwu7QNNprycrZCbLPn6uHF4L4WosFpy",
  "key1": "45FxAwgnseCccTQSUiEe5S11uW89a3Yb8y6vTyujLTRED5DS7xy8qHr8PKDyeD6JcgvMAALTSuad6VKsZYmKrgMa",
  "key2": "MrzBsiTXgnubmNLGDsJx348GNEfUos1AnZsbjFoC3UveCw1MyQDf5PsyZqhRQRdxYRz8St5NyK4wrahPSdgvnMN",
  "key3": "4MXoPVVwqddBaYyfVSJQjHD97CDdhPxjHLNsDdqixiiuRh2jfRaYDyG5EFgznuohMWLsZFme3Qt9yWJX4MvKvmtk",
  "key4": "4RRtaD9UAwFntpHbTavxTi4DxBA4E7UqLQ2mCft7AzGnXS48tWQvvweMFxVY4tAbU6Z8nEGuhEGeF8UdKEWkYPL1",
  "key5": "r87Tu6KVevGetdpMgX8Yy2MVqqfERZSCZzntwTzVie8U5FAdJiTPfXgQDMddy3rqMSr4eQtTGcw9w7swATNnR6H",
  "key6": "2VgC16cW3NzxnvhDnFDetuqWU1bf626MVokmG2NBQeC6CEqE6UL9cepEUHU9ZGraEs2H8Ek3GUGThhUTvx46EKHD",
  "key7": "4H7pAnP6uANmWvxc3GqUTHioQ2yGgBnaNvD76wG1KcfVYi7vLoAsL5wDbbxYwmTBqobMtJUyKWAicKptiEHuMnsW",
  "key8": "4ED5djgpJn3WsyLYVh469YEqyi1WhaPa9oSDcGT2rTffkRotoQZZ9LLRHif612fCr96FAC1Wsb5FA21uWqDfAAwb",
  "key9": "3JrhenX642mmMDpZHfzHQD8KfKj48XsxQZjei1UphtqwFLLG7izj2FjFtoFZghr8jLBx3PxjfkSktYuRVTVtguRS",
  "key10": "2rYjrj1AMhEDycwPJvKe9YcpRPUmip2CcRXz7cVDuWsM3bun5B6sGbGgk5bMCBxthejLd2SL2EEC1vFveTCxbBJx",
  "key11": "2SMPKCExgqo5dotUwpVxxkQe1jDKrXjqNpB4oPsN8sgD8zfCwgt2S31jSKLdC99HDXQuFmcMWSHwe4iztG6ixrDM",
  "key12": "2mtkLAnbWWjA2E5QmU3MgktxHkPXZB3bZToraFgBs1beCWj9dVnBLMrYnVPPCYpsSh3uujVn2PuQmh1jYSVsJsou",
  "key13": "2beXHgi49XoDScjXzq5NPJC14Qpb2JfDKJVFskmbgefYPmw1uJVKYSY8kVtroxoCdzxdDigXZGAac3Bzsr93cRMC",
  "key14": "2QQdpgfAftQ5njnc8HEiJ8Db6m3UqqWv1MaABJhXhbs3c2NpwiBZWJZePgMvjQFEVys1BYcQuazZfWoTKcZHtpNm",
  "key15": "5pfdqhrDdHhjhCAxNURFjBkdCx6eUdB4xmeEU1ZSdHtuArvpW64HKBarFZdwRMzAVSeqBekgJ8gGaxXGkFW9eWaU",
  "key16": "2adF9W45XMqfTDyYKnuaoLgi4X5nZYUx7yrqjcprQ6HkRmU9wE5e6JSndSYnke7Pgpa9jcL4wpHRYGFVGi4LH4UC",
  "key17": "5zpEgH3Pgb5cfnx3hnNJBys8DQGrecpYfxn1nEcTKoZzKFLSmKm2Tz3ph2KLybkRBGg3SXLnxco8CeHXpG1YUiK3",
  "key18": "5rYpupPojAYBgMdJJQ4nkFH1W3RAv3AnB6xH7ANJRxzB2icCAY7Y568LwJKRBcDYVzNG81hZ1wigDdbZHZVPf4Dw",
  "key19": "bd562peB9RfRyfuxQUxi1hBq3v1iS4oVHKvAzQhgGyFFsGmvPcEnpTp7s7BcDrqUbES9KgnQ2vfchpGyu4bqVpP",
  "key20": "C7cuVsvTjEXBzkz7XRh4xNgSVhfhTF8YK9S4Qg2y5VJZ4wDn33JeYVs4y6qxQAdVuQtD4RsoG3cnMhBbDh9S7c1",
  "key21": "48wnfT3svGsAuyreWfdVmLeUpnRWVQoB3uZFG82AU1fyF28wwT6qeohBqN3azhfuvVJBxNQVnrim2Y4YmbeVrdnu",
  "key22": "5dGrKqXXnkBYoMeCHmyG3V6uELhmsssjHtnSYBSpnABQhPqobNLUHWXx6TS8oXCgfK96Cyn3Vdjvg1CZ3FPdsFpk",
  "key23": "2t56SNwSVGN81bvygPfY4W5vGH38sn5t1jhvS6Ua897atFGcvcDaUuzos3bQY6ndcUULneR2WCKHbDvns21A1KFx",
  "key24": "3iYrDxNmVPFtmSUo7MKgvCSbiWwtbUTVTTsdUu9XEmVL8CPdwpU6AXZVozmkm6GhT5kTKFCNpRf2HrP3QjjMPpdA",
  "key25": "4AT623SB9oKN2NaKaKkt2C1LSJEHGpUF4mpAcR7SbsdFpnJtMcby6mNfZCAyZe74XtHvBcKT5jhctmnjf8yEi6VU",
  "key26": "28HGNs6dQYbA5kz3mDFKA39vwL4atttXrpz6sQqHEbf5pKTUZoNoQnPXbGX7PdBy1bcKX1AeQ6Mba3VsL1sibMMY",
  "key27": "2wxPbjqX8iTEWKJyTa6At33JNuC6j3G21mto6FytqXS2X3NQcpgXwQEK6en4atbEvtXYS76rhgUYm6qVcEJgPxE9",
  "key28": "2PyiuRF621v1pJvky67bRM49PHXyK36JCd4Vru5phmVxHGnV8bHUrAQvzhroo2XRL6tBQcGx7ncQYJm89FBZeP7M",
  "key29": "5ToG8zxJcbKXC38A1s8V5X9nqoj9QVwHDdjifPN4Xp7kqxnuSSjSBzRp5mBJPmfTksZADHzyj5GBvYDtXdZov4w1",
  "key30": "2MfwnVm5545mtwgJjFZQDo2YZgWpEFzuroSdbMcCY9ZtuEwzU5ny5kmW8eotHbKMaTvP2NGuGgSswkU2gGCnHAri",
  "key31": "2JxbUmqDsqHtakULzD41c3buJb8NzWGpoJpmfJX7ovshc2NV656QD1XBNEEbJK3JAf4cKrbuHMYByqncTiuny8o2",
  "key32": "5n6sQvRrm6ZAyyhwiL9x9VarTz7fftpr34mVJEMuwQzf1DWFYvqkLQHmToZyo1tK3pykEDPikeH9n8YAQp5QdoEJ",
  "key33": "4Fz1iVb3jvrWh2iurKamYAZMd76WGDnVP9W8aDjpbP4yiHasnWND5QRgrZawmN1fn14DHokyjC8ewmTDGcgy4Tj2",
  "key34": "BJy9tcBhafgG3hpf6xuWVKKuqvdeA7w8KWt54By4C8GwJ1nKy5k5PTcnTVoNpHJsr4FtD2TpWFmcjmCHvmwDSSP"
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
