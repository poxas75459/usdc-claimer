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
    "5u8VvZr8iAL3gFHTLKnc3aYfXWWPaQ5P3o7zPJMjfR9VDueDMg66mgihUMJgsyuveM8D4QsU7cL4m3UJHVBiKqAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwkuxDxx6q69fCsfvjys42e1qN3RCnWpsmDh2nH5N18zvy97znJw6Soa19TjVehyjLjtfTnkyJWx7gQ2QSKK3nE",
  "key1": "XRCQxutsc2ZYsV13PgAAFziQaj1xFeroYdiCr5XKM2qtUsFhhtFC1GVnX5MwEBQU4VRasG8XBrPWBbRgQPbhu84",
  "key2": "3v3Lqw2WvvC6seSSDua2yTJAimq1wRYyP6eymKL98MSnhVMLNpo4v4TyEhhEFnAQG3uoBLfEcio9Pv97329CPKL1",
  "key3": "4LdXxKChsXDppfTzPB13kf3PbfLE9M94DygtudwotWt9Td4ASofyEyUTLNno3ns4C4bfxiAh2Btxmc7WE1oEb3Rz",
  "key4": "2iGMbnbjsN76QVsRPpAZEYuhUXa3FR7GnKctMafb4Uop88A2EvDigUqZKh1QMm4v36BWaJymdW29VVHSSc2isJzq",
  "key5": "3aqQxJKQkeHraC9GnZXUy5PFGWuaX6zi6P8GGvsXR2Gcgg4wbkNWNgTzv2CZ9XHEi3uX19QjP8qafNwhp2j3UW4E",
  "key6": "2Ndyw89Br4xPscJE7uuCFZbKAsZ5PgGqZTgj9BiP9wZ4LZmSwQzzB3EeBnn3jbMf4rkc8rcCPK9RfZ3dMZKpdfcJ",
  "key7": "4scVWFoGYxppvTw8iQdEmC3N98DUAcmiS5g4TgFtdBHgpYrFkG2zCP7MoMwpXGWjRQX9eKozCCr68hNwwHHbRbqT",
  "key8": "4ZeVX6E5sNovDvvfFgqbeA4YmjxcqMYwjT6xsvD1mzVaHNcfgFeYXFedSvK1pmBNhhBzoq4kBgXvyXJzjhNn32T8",
  "key9": "3fhSTjrKKEY7wXE44VnHH4qUhXdBmRbEHYt6XXbxcfvuaVqjDRBWUfN7qN6UDprDznvjdfeLLMwQ6ikekTuDdGfa",
  "key10": "3Wr7vki4r6J428GxLmrDH1SFbe3fyuceSCTepRCWSamXoFPy8i47YGiYXseCGkpCu9ijSj65ZZBEDj8ZAPHv4rv9",
  "key11": "5YpMq9Rsa8Zyk2HtYS5GhzwAseeUPZtnTn35aMB32co5rcwR8Hvptj9n9LGupWtrXScQqLZbqQSnuW2YXxMqCkof",
  "key12": "jAFkBx5wbivC3U3ztw7E7kWBAGK4EfzqR7P9N9pe1L6fEZbnNYrbHDq1zidc2p1qZEsTRNUBG6mxm6R1rbBBn6i",
  "key13": "AAJvBDjoVckXzWndn3kTRiWejTzbjUW5n3RE5af7hDXGh9k8c6jvMxuCRYiZBBrgB39CzjFbXceiM3R8CdeuYV8",
  "key14": "587m2HTEMcHbERCNXUivuZc4bM29UCUNtK2RCW5sW38Mh5vgw1EBVA2YicHZomZkqVZTka5ReNiwQjqrmM9JK7Ef",
  "key15": "4D5Cpt7nrVCH5TAetpSvfUfkGHzXZjCuGuiVLgDs3wMUmNAy61FxfStoPHGwoFUeThY2pqLsHgLdCAt3fFb1JZD3",
  "key16": "5Sqbpk5aJR4CWzM9vXJafBtynfd3jq1YyVMprCzu6QcLdH4rf78643hWiu86DRcaWM6iBdBXUyDZssr64nyEpHtH",
  "key17": "5Gu1Bs43Q6obgHwCQBxFcD4v1Y7dTdeaunmMsvsUedGfC8QDUYANDnrm9FP4GTL3SZ4V2MkTZh23wEv4Qce1Ua32",
  "key18": "5dtZcRzh1ZtFnAYAojXSjtFQiF9PMFcP41MY5WfmX762ZKPXR5tEBWwwzrQpbBYSUvdpwZa7RC9onMmm1h5m1S1V",
  "key19": "2oADcjeJoZVVrVWhZSgGhce5tSvEaFLptjWSCTmKx2WmEeZqcW8MKtJz8rqEAmXogjTGHUw9gZ6tgt8HX7WdHL7g",
  "key20": "5SESacWqTwuQvwoJqTPV9qaACDpvGJqLXqknLZi8tx7KKPEz7UsvS38SATUmDimDNgZZF68ACSE1LhisqmwKsJrm",
  "key21": "3PSQJM92NqAJCKZmsbqPQqb9c4u1Zqey43RezXvgnt9oSQEt2LtFSfSdmYZ6PXDSSyN2Tr54C9keJxDMoU7BXkNg",
  "key22": "4q4NZhmVgwwSH2GYadEGH3tdRotW4EqSVMbj5R2vR2QArpGm4ZgUDpWzrSHQwwiVmaxLtJV7pqwU92HwsbrHGkKN",
  "key23": "2Efdm1yxxb6ekpnbPkxR1D1r1iaCbikBDiWCSFZUkfYLQGq6CHWPaAytHH3a3zdAFroj9v18H1nk1st4E33DS1dm",
  "key24": "3pxiZY2MQV17Be4Qc8T912LNBp5oaw44MgbEApjQH5yrMjeknCAkpXatw4iP99wVgjT6JMqLLTEMuvqZaPrUsAGj",
  "key25": "41ufbEFf7mhZ2SPimPuCHS6oX27cQMtA2jcP16mEYheaW9tUzUyvDzD7qFgSA8rzfxNmXYpa7YmpbZmc6NzoEfda",
  "key26": "26YFNfE8BxJ1AoVi99tsgK5pp7dT3u1GVLqLZKHnu8fPtK9PrUnyMn57aQUciyRuKSCWqPF89qUvy8Waq4Y3KoCJ",
  "key27": "4XRoLxkPvCitFoQTB3zdiqy5p8MNX7a1nWqEdYJXaQXaMzJ6d85ayKiX7nKtWZeDgxuEE63pvtkmQz2zknU7LnMf",
  "key28": "2eaVABYZUAx53kA13WS4yp42EEfaCwPMcuZT5PUGq6yXT5P1uMbiyX2N6kYx5WMFBHXxTPWMb4jzeKi96Ks1cJMF",
  "key29": "3Z86xxVhAwgkAYUyxhndabKqdrPiA14qcdqhtj4mbyMjzh3tXJ4dxhucH8PcPXt5HrVx9F6mk8QYAiMHYJnHHf1B",
  "key30": "23ECVudq1WusGd1ZEwVhhszDtmE8dNURcwhzV95KdMBou5zXqwXF5DuUJdfw1iDMhosXYWrxEURL2x6qEnHqgvwh",
  "key31": "2JYqXoRnTBoAudNeoE8SDCaLnh84Ydgf3bXZSQzANhVcVtiL539ziY4A4ZsG144c6joLxSySyVKzk5FwcrAWmiBP",
  "key32": "47d24Z2Pov2UvErbttevNpyfMVeHfxDxMsS7yME378xN3gLncrbXNU8Eq4qga2PenrYnWfPSXKbE9yP3SkK2r29B",
  "key33": "3sMu9KfdprUC1qA1zNNYrXMbKnacKqdy17Njm3RbRWFFY85AHThD9vcWSD4SLAgosMwom1UWV5wAfUyD2LQfCZqe",
  "key34": "2RsHqAuyKL6BqUykuswzMj7hBGuSRSseQjCcWgG7Y3Aj3mXn6N3k3fwdaexLAJdaaijPHD2dmVUXCVzi3hWmVPRG",
  "key35": "YHeVHtW5snEkgXpfzTzMovdFQmoJ9uLwyMXXX799w9sAQVzY84wJAggM6jitkwCN8iinW23ig6q2GbpoRtytbmN",
  "key36": "2qXf8yVHqGMchXaXC6zBuqz7e87inbhRj6pMSqxA3vmrvH1zUyv9RLmKLSUFs2myQJz7mrbjGkM4wYuV3AZWbe1K",
  "key37": "3EXgLnh8mYprAY4jP2miXTmyFSDDhopCqFd2WFQV6EESp9dvLGdQQ1idN1XjkK8TzM636xdA7PLyH9mVJe6mhXWi",
  "key38": "67kYLXNSg584vd86SxZPzt9eGccmfV91c5zSFjA9mxSQmnNzjr2ThKRKt5padRfqXQLEdifYUxQXGzhvSCjQ1E6M",
  "key39": "2C2kRy9EsyzKbmSZHsE9shuq8WNtzcrCzMy63xZsDbiryYkWx9nHDX2nwB3uPW28FXP8VP8xqn2wuFtJmq92yFo",
  "key40": "3LqKrYCqFbFgw2RRgxdUaM3ktKKomXaRxutZDvwfpqVqsaXZnnARN7J3Y45rUYyPk3EPKjNhTm6XNZMUBkvVYdZh",
  "key41": "3CVm83gQtARJT91r1H8WMcVzJhvzHBxTXkG915NJLRrd2cPukRzcPj2asXpy2dH9hie7FZZRf3LBBMyyixiRsqty",
  "key42": "5E5n6jykDHyCeNHcD56bD7fCmpYa7hipV91sLJzvpxe5Qcje7YcxEt9QbyB35srpDA2AxEzKitMaL4VznbKwskjE",
  "key43": "4YMsLtKttmpGJvgZ7g5jAUyQtaNZGnmnUgEh9wymBbfykkenpJvpoRtFbpvLmbLYDCjjbVX2VQCbwGkUHf3A8BkW",
  "key44": "2dFhmcsg42krzh5yg7oXBR5XH4jrYCMfCcZqhXSN8ebYadV9vgppxrpfxBGyafRf2NEL5Z6ehdKpbngkkecDSqZe",
  "key45": "5UakyzqzufMANbLwUXPFPjXrbeAcpHEVFD1SqhJ9BJjWySoUWoPuCEzuyeQbPpRDA5NHo8Nv2RWRpeeUZ2eTQSYc",
  "key46": "4hPPci57SMnEp4REqP2t8jQcMZFo5yeFyUJPctUGLfeaagNjx3T1sNy816g3eGNaCZz7c3jRBedGn67eBdP9VVTA",
  "key47": "3xzgCZBxBfsEfLxTEDmKdKRqer2VmyLC2BaKUiASTvhhdqmGYThcFDdA4rQUUTSXRouGnyCwmfjtEwCFEkyQYqZb",
  "key48": "3PGc1cBiqTKouXppxJ8JQcEmgNXpp3KXWyKamzzm2UxtHptTUryK6CB1iiY3C3CUS2AGrxxodhyCAAeSbbtH5Pmq"
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
