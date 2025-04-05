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
    "3FpaGkXc3r8t9SKqYyqBLJBzrBWQ21fouoZZPwG8mjtDb6WpjgdtC8NNxLdmf7uD4dPFiJoVz1wkt7DsGds2knm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1m3eQBgTAQxRvvaznUdTZBrAAX8Yjn7W6YR3ZSmhNhnPLHAkA3JYoE5HqMZs9JZWW5G7EQe2WynmDJR7wgcPaBz",
  "key1": "53Bdh6zNyjKJrrfDiDLMxfNLz6sAYG65eChBchovWzftptHwrinEEhf1mXJWnDPh62FAsrnefLb1uvQDWvMfm3Eo",
  "key2": "22cZzBoJsAtBPatB9xugKTrd32Y4PoZ9umGWRTakTBfgMnVb3jg6CBYjyEbMNXoed4tCBnRqkW35XMxR5MVs6LZ4",
  "key3": "3WrWmkuSUjHqr5CRFzpez3RSJDEoUUV1CDpCjDidriEVe29oidWZTxqZtXnHSEUYfSAJotdfzv1chfabPzrLiS6g",
  "key4": "E8TqxpZvRS7Mk9VPJpE2FeF3YMBToXsZjWTGvG57Bpn8RXbwxXDYStv3R8yzPMxS51L6S74JLbWELwn5xnXwhUf",
  "key5": "vy3KmEmsvx4foWvXjtN5dWfkQk6LjMoznNFDnH1goCRoqSLQDr248ZjYysUg4Gv7nyKBgLCxosAg4G8sN5yxnEc",
  "key6": "2VxT9LC2MmcD7MDgBgDCdcPcTeBXU7ybMbYgpZ3XsoWLppHniui2yRJ652y6ZZuFzA3Q9qGRnA8ErfVfd6vjHgxa",
  "key7": "34MSVtssZBthPWHiFRwMH6cnm2gMH291CpmjFjYr2TTtdzKSkXwsMktVztNM4AuqmQUs89cyuaEcwkYD3LxNJo3i",
  "key8": "2QCu1ESKMC6FjrQtozjSZd4jB9Q2DAGRhEyWwJqru1ZSFwYsLKMsRXYmoHBjtwWoe5qeLoGRyE94mcqfsi5Mox9b",
  "key9": "2FetZHqjmXz7pz5zCUhxUpRQvkiqJLdwURRvFxwJBD94QjocVP3uGmHJHoyV7d7zVADnGYUaPL1pxDxcWv5xLzwi",
  "key10": "5DEbU6dV3n4Xc6vLemeRhtEARncRMeirJ8BHu3gzRg8rQCorgM2GVzMQXBxFp3AEBfkJg91BvbjM3SvJr8ib6bJ4",
  "key11": "2Jo5xGUSGFjEcHbqDGHoEtvzcXLQQCfKKFTjypEVGNBgZ382GGAgYKoY6jdSrT8rsoHdsCSzKuLDPz5rNpwsVSJK",
  "key12": "2sp1vVyUzRMjWwN6zDz6Tt46N7mi9T3LSFJ7ChSNFFJPvT3zB2eLBppHKJv1GwTG9WPFmji6LEw1WQCWXnfc6SRM",
  "key13": "2VLdKgZgxcxbe55iaoZMbFVnZFGpzYdjM1DQLkmh1yePbHYUELAnS9jLioTSKx3m1uueCvNytB7haNzM8HwQWkdB",
  "key14": "39L3LY8MJizrQQ3uZAafmiBphijxEnV5wKQjEBNhPzYosKJQnTC1FcirwCvHouS88mB3s3RthVFxgxmmt2DLwU9S",
  "key15": "5NFDcSc45huyEiHJQh4Z8nM3wEXufiQTJgmUKmWi7eBzXL94gRjKBMpk4ZdSjZ4dH243WcjXsEQC76NE2CTkWCup",
  "key16": "24dhKBb4hFZwFAb8ec6YqetuC3ZfyyEYXZdqHWKmyjCbRUqutQSQVRAYQQrTcRytpBoRgdXcpqw25ad8YapKv3aC",
  "key17": "3dD6owpERjSshEoqov12ejBgcJ5UAr4opzH48tsgrUTKrWKxhwHa7oEUMgMwyELvMqi8Cnu6qCg9RwBKhYgd4nsH",
  "key18": "4wjfkhY7ghqxn5P777iMeXw5rNdeaPG4Wugz4zduwfWGLK2rCYBmCHdpzQEfEvAzsbuKgV34PXVaqHjksTMiBDs1",
  "key19": "5rtrDdNdciCFdE1Dcz1RMrLRLN2vyz9vEvUSsgM8yXT2UBRCG6KFFPuQ2GdmYxvJRCUKgsUbG6fhrNHpnaVSHWzQ",
  "key20": "zcSZKCqjGt3mnBxQEdNZR2pVyonCZHdphsLq9H47ePikL6GEDzWuY4bJn9cqZRTzFitHVEjHdFAf1LRQ7re5nhH",
  "key21": "5rnzZCPsGEud9txNivgEqcSwo3WAWTryTBCRcitvZSWUpQytTBxsWFrEdeYXyqJjHYV5uAex2ci7N9iKicZWffHz",
  "key22": "26LbZ6byoLRy274hqhAYQuRsngdzYZXsosQpQPUydhwTixtkgXZGP8u8pYr4DjZTjyGB6m3bVB8GaV3GLkC7Boqr",
  "key23": "XyTB5QXbDbqDPTtKdiEZa8BNm4wmJoFRuVj6Vcwuo2D7zgFaJGXyp5KhLnxqar2sHVsJF4KQYb38FAmenoaNvQw",
  "key24": "5YKeJUh2XVpAmDn89TunMjcRxPhhnZ14m8Nw8if8nqJ8Ps31q78fF8GWcZcsERvNyjkLMzduYFBTEUdAuo2SAKtJ",
  "key25": "2Rwp4S7mQnsDfenHrZbdeEqWZJocKgxYPKVt1MboJKfHLC5tcH2submZW8vvoSrNgvdcJi2BEutLMKB3VvTMPC2W",
  "key26": "2eEuNrmMrF4hTf1GEXBceE9s2gahQ4pcWnEwaoQpks4dEq2q4dmCpJb5VnNV49BKVGdbXFKHiUX6MiSe1Rf4NUiZ",
  "key27": "4hzAzV1rxNeacn92fy6AYrzumzWzyqYTmG2C9CtamLVo3c3L7UQHeYKSErgqXbvBwgiuCuwEgPgrK1T7zMo9N4Km",
  "key28": "4F1r6u21NY2s8inTXUPYoiwcVqa1t6Ka7Z3AMvsnj4rm3Nnf6GaRYsyxQKnDaeoXekca5RR12N8t6Fx3DS29SFN2",
  "key29": "5T9mUU8i4Ws1yGCRN2fEiWjYwYMWSG8D1dmvEPv8n4Bhu2Dbt5F9Z2XZiznsPCvq87pxVu2sVWuAHP4WK89NAjWE",
  "key30": "4Rv2ztgCkqfnudsSuRQfymeYZgjJdfmZzFvKsYgrhM3EJtJYQGLFn9U1CbcuGpxrNm7YnVqsHhNJGibqhfVnDDa1",
  "key31": "xSGB4uqR5QNLChvKofqX68U9kAPTX8X8HtdSvpdgeeEVRm2w5L99qiFiBXfPaVD1pQVNkF3UxXwuEoxg1YZCiQM",
  "key32": "3BEtY6SJW1mWMbxJvr93RnMZ5HaLcWCGNzKCz6zLKVeBnWKCFypJvfJ9F2XVWgmZ4Cmw8tgzg5p4d4Wpd9ZGVPXT",
  "key33": "5kqgkRi6h4yY2LwoEkDaXSQuiLBDDMLgz9zZGSng6LzPoy3SKNbA1oEXHSEroD29navZKyw8QQMb2zrL3zo7pXGD",
  "key34": "4jiT5GTfb6yfDsg8qhCikGJ57KCi8pn1C99rmbrj4andSpD8rQmKMAn2n2vCRa5Eqi7vDhy3W8SDqtdyuuaFF1fg",
  "key35": "2P5JCbXoXGu14LBio7M2PN9AkUTcmA6rA3HAvi3P2aC73zgULwAzjqu2FBJHHtrmfdUeV1aSZi4o8cwqJ6aTC43J",
  "key36": "442nuQbV5WUADzswQ4TZYaJgGvtQ7Y39NMwP6rDLTVxJDfUXHCPyoaMfg6QPvdSSXBemk3hnH1xU5BQrNWB2z8Mf"
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
