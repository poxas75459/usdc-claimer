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
    "3yHsbX5nX1i4UjtFpa1TiTauUYW4LZ6bwSjNaFrrJd2K1FvUgUMm952vUdUXJFqJ11Pu7CvsTjBsEQccbJrdC4pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQVuvYmpb3JgjJTEqGSCzcC5nD7u4LgtT9azqmPaxsEZrVfEB8rDMyRbYPgUozFYmUjWwucKnNARd7Y5NE7imNZ",
  "key1": "3ggEVWXvBXgREZutMGJVYc5zcvLwrgFrDdpEMJGMRdACuZZzS4vni71tvAWTMDCGnjbePJyzN2uyapjWSnHZYMKd",
  "key2": "VX7WejknGoajwF8hTC47UJs9WyU8My56bHs9kh8drKPaTuJwx5fBjfaCuWrRLrmakYi2hZ5p5kYCHGSPWMavp9v",
  "key3": "4rC4TJ2Tm3kgrGLfDvWqKKsYHZmbt6pdaBLzYFonMpPH8EjrotUEFChhDQRu9AessCkDz3ZxHDaJZ8f97G6QpuMt",
  "key4": "2cMYbDaxxMGDNQ2jb5HjAe2w5pU4JLRbcFcPz2s55PVYtRHgAhJerjz5K8FJWEjVfFbUyQPXAYZeTPkqu3Pi2Rhd",
  "key5": "pcpWQQQPWxh3R3gmS8PLqYd6dgLV89T4ze2JPpBK6WoZ5QnnpE4JgDoZnEGQvsGxScpZiXMxtiQ96xNsokvYQdn",
  "key6": "2gE8S5o9UFH51RwXJ5a2G9VvqjLXhB22WMMaXubgrF6zbjJ9hBV1KTMXXXoqmmEywnkw7A7mn1iD1CBX5xzmmmsg",
  "key7": "2NConA9y588jhVdieD3pQYHQ8cwBeNsJ1T1FoX8ebxPt6XSXCQXDMazumEX4xNjjPJ7qXpRYMprPEoqPWVPpSL9H",
  "key8": "iAEyJq4fjuAV8L5c7QmHPHbZRWB6dg7PzYuPMzLuRUdYND8hUncK2UNrgeWyVz8XpXTR7Hy4AYTK299uTjdkQfu",
  "key9": "bmfKkw3gMrCURaN5QM1RLXGRCNfGJRbShru3Y7AUop8MD1HQtA6GmSZNBEwD6tSDrp2F1adQa2GcpJ59LJqYSSP",
  "key10": "4FgRd9UvHRMiWPEb9t4wnAhK34oyspRd5rxaSCbLvHK73U36VRQTbnhDfmkeAK2b5zTzNFVek5dGozAjF9jMiH7Y",
  "key11": "4UbrzU1CxYEKaBSKGFwLiyJTExrAzYUvu61i1CENvN5dTDhXrjLgyjJJoCBmHQNpgjEnyirpUTJJZ7E9NVUwbTrM",
  "key12": "CZefcK5YZPEycWn4Kqocfz7amu2uqWSCPxaye6HPh46e341iU59V3XQJtp31M282qsTdhV1BPKEcc2KgZK47fYS",
  "key13": "5vDcfaaQ3MNp62t3pMk3BL2dpDZirwJNEbEinaN7YTHnFtxG3xvBGkYkke7m5TRxLcdkRiZhW9wN2PCrxnqrPQ7r",
  "key14": "4v8BcN3aXAVBZidCcmwNbbUkNCKgFnriqUBejMDXwmsQBGdNYWdzGvPcRacg9xvCFz45YMAewWUCJiAutkTyoMtw",
  "key15": "2s7ro9kVa9ExAdgCuEKXDMeKxes4QmsQHUUuA827erEE3EZofcG2agyhsq3QhxnayU5iZDy7bKN9a74z7DGN4PeR",
  "key16": "63zeYpRDryMvnBEh23mu8BHRnMzYhoyNR3AND7D9aDbJYuhGvTBzCKYuxV1r6PqFjxjUpV23vQN5amio5HXVQjVB",
  "key17": "56c4xQS3Z7w75AqPySjae4rjkChTFtEpsaM7QrLeGZRurp5SAdNvEA1Dk2d8QACkn8S83qwhGFCfLkT5hkukeaHh",
  "key18": "4pWR5QXAWSUThPZVK6t8eQJw5MGLUubEQUrcSxbWDfPeqyCZoiBUn3iBmZsuTyPmd7jb9TBdjn3goy3gin7X6hR3",
  "key19": "3rUWoFcytREJpgzDWkKq6uVNxfLPsh5pPLiuVx5ya1MqPazLJ4CJzwoKHmgT9q1URerN4VWEzEVSGiTDU2CPJkmJ",
  "key20": "4t8Ser5K1zr3CDPnUktJZFdWYnb28EEnUJT4EZEkVjbJSMiTRUc3QfMo5rSn1r2gFhdJc36MnrZGKnx8YwZaLfmC",
  "key21": "3LgKu6hr5SkK59Se2DcLPaEsSTdvTex7T4jfLLSY7SwySyJhSHM8xJhQbaVxrxy7MaHvFYrLtkDujUZzdRMVqrvR",
  "key22": "4gpdUrcNqQpmAkVZBbFvrYxDx5P9tQuJ56873aJoDP7Je73VMtU79c95h4nVwNLgCBkcZciVkZmzZKjKf62Jie7R",
  "key23": "bsF4puxnSUvshyX7sdbfNwkQbnSt6LZk6fRgimUGYnAMG9q6qrRQhsNGPsXQ6k4AJbT4su5jcGNt9ph519w1EZz",
  "key24": "4bvuG3kzR8FbYCQXqqtTpkYuBrDJasP9v8ho2nQrVmmQQ9hdZjNFBFNX8gbcYfvgpf6ixvBR46HiVp7DV9N5sK6M",
  "key25": "2nKEUcePzGJ7MtcUb7h3PbD8vwj5YmYnDrPskQiF2D8TUZVCjfBXFG5WFQt3u3LPKwP95EPMmboR79FDuF3oHMDU",
  "key26": "5oVXcpYCzCzi7mVzHGZaEgvELj92s8sRqSSbx6rTyXmv2NR8FBM8wiVTzavfVuxvSnSBGMER1radU8UYD5a9b4T4",
  "key27": "3iKeNJhY9RFmCjR1152FLtiwoqPciDAegATNtJAALcmGbYh1bHCzBdFbKP2K3X5wMTBkJbwecEWmrSq6PXpXKZZ8",
  "key28": "4u8JYGarB6De7XhDJhcs7T5G7FxZimuSq1XMFdbe6KJEvZbVZZ2TJSsy1B86Zos1ECujhV2EV2Gm3bpivhKqcSAi",
  "key29": "3hLQvWDrsefNq2musp6cWZ9VPQPcyAQzve6tYBRJvuUF5BbCM3DcL1XweVvy5r7nC5kcfyJgRyqNcnhwkNadvCz7",
  "key30": "4Q4Fzi2vuMHfaWVPMHrmMT2HFqiYTctitHvJjxR7dbfCEYPPzVK8bkGNZFhWTe3AzXJMMamVJY6abRdSEYwoFbRa",
  "key31": "3wyd5H1DDNabFA9wnQuCpSMTZCjfXbZoP8m3qLocFeUKmYfiFMRWzz8QYYD2D4UwycnpV3gyc9ovGbNh7kzwGDzW",
  "key32": "34xFebQEkfZxkJxsxzCaak8HmoQc4DuvrzdBsRh6YKMvYwpa6jCwUwCC5UtGYdU5PXMDXd2vuc7rBG1PA1UpbNjz",
  "key33": "4b9PSGLmEpwK58bB7Af5BcMoGMWS274VH5RC3wafpdhHrtxFGzGycQdQVYSxWBMmNcvgY3CEUQn9TKLFA3RVDMyi",
  "key34": "3M26J1X52BgKrHq4MK21xMiPhVzbiwcKB44XgGmqZpRkPtnDxX4aTWkkz8s1G1WXGgJNFyJcyR4QPxS4gYMFYybM",
  "key35": "5Cs1VtowXNn93BX9L9DTvaMXYU3cum7rvT31GfJPtwLWeRinchJ5Ckv55wv3aAH8nxfBnU2MftuZaiWSZS66CfEU",
  "key36": "63whTbsfVC1drudsd1HZfjG6pNCGX8s9iXouGdcw6o2bgXLoAHYCRqKwuEQTi6eAvHfgLcJGx6R7VuSNEBHDT1M6",
  "key37": "xewoU57t3fhUUKoHqmGUmyuVZBA9CUwmJZQwTx46VDjgbiQ1nRXJ2XAGfnSscZSjwVSt7dQ7Fr4sqEbLENq8mfQ",
  "key38": "52RS8YapLsndHzhFyzzYomLQpaH4tP9RgPs6EGdWfo8LzRU2s7CS6uL2SKrcHVhUU9tTJstk6T9LqXntYjSYUoht"
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
