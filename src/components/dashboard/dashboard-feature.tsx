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
    "2EqjDWACXtuJG8s2mgH3HFHPn2HUqZC8hAdj9ywpzxYKvdkUbXX5jjuU62AFZN7H9KWXzwaPxHB6mKbm21n1tGqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDMGedYcKfUqmsRAQPKfDK2JbK7d8qvE7EhWN9f3uecDUDEQuSBTiNEtuFgidpRwTeY3crP9AykQtxecT8m5ank",
  "key1": "2TnvaPCjVQt9tt93d44aejanx8Dv3UQX2YZRzRnns234UvJoNPUhCafqkVzS3tLvfGXs9dH5To4XjKtD9VWRKhyc",
  "key2": "54ndHriAwGpx9vpskaZ9ABiFQ1ZWcmcXE2jW34EvNDRzycZd3vsoK1G18akg92iyQ4qFdehu8vVntkA2qUoVw6we",
  "key3": "3c5JdUXSZjrSv5tfVi44fHezS4ojR4Jynu6LvKav59VqYKrWiA5GSii2kCJWEWCrEp9faEqAkp8LSrwnwKmjnZL3",
  "key4": "38qTkCabh84YV4Ragz39TdcPXYH6FJLGh3MK5baQNNSRobWCs2wNq6hJv8V79iFodzojtP7tifXSeRjG1ekxpsor",
  "key5": "44AtdpNTpssdB4UVGiavRebopfsyhBjjapvmAS5ndD3m8pNth1kbCm9141e3RyVu8osGD96BDPUuW8hFVUCYeova",
  "key6": "3DSQVV8epmxv9XLZuRpQU5EQhAGJFyBSdWYGc1Tz61iyozCtUzELgAxkarqdMJfX9YDg8mi9BZhG51S5RRkQ2tRT",
  "key7": "3QT3t2AgoBb6TBQnoDXBiCuErWpEfqffUc4vhdXu1dhMrvUDAKFmn15fPgWd9mRTbM4kCM3Vqrkj2wRZgqwjkcEu",
  "key8": "2eyfCMmY9zrbuJvGznwhrH8s7kh7fn1ws9Jp3cGZxtL76UdJh3hnwEpUZ2p2TTibcbTdXXvy4oVWmXvXREzCQgeo",
  "key9": "2HWb6SDsvo4VxgPQZc6Wh2H2zqcF8dpaTz5VHQ2MajssqhqDJnTzsDJEcDXkFUFQTJbDbdonJqrwziQE8JhnNRj7",
  "key10": "3LcLhnpGbaq43SXURMvBqSiJvGH8sxXagsgi4r66L8XjLLrsctXSvz49jRgud8D19MtD1ybJFVepN5g3KSbKuwaz",
  "key11": "4yvrSQR3qCYgF3AoW3eb5ZCe8QGvnqQEK33DoJ6d9t43bsJsCCwrX1m6w2n3LbuvgkDQLAfShB8VcjPujyVehDyL",
  "key12": "3CsuedSvGAAiS1vtzdyARSJpKn6vGaM5spnAw5v9i4BNRebXb66ZpmcUsdJMb6enPc2an47RxWbrvLaJL8TLPKA5",
  "key13": "5JPHHBNu7iagMoQDpJ6JXdzRr13J4LNytrvCohKLr7csbNhGov4mpUaBrzVHu7iGUcUsAXhDmWRWvYpfRLUJv5eM",
  "key14": "2AoXxzVgcbo6YukiHk2FYUigooVwJ5mzZfuEtTPr6B6mW5GQqT5judcB7pn71TgJ4yAShbozzvHbjRoss1DMFipF",
  "key15": "GRhxZVX1nyaGwjUfTvXcggLVFw9QfhLNFwxKULomytY8k6FwxLpVBg2BhQUdedpJmUKckCx3qEDbGHLbPwwwRA2",
  "key16": "23jyXCJAABSPNQL7ZqS5mvpDPBbaCg64vVcLUhTmr3THcLsbVo8rHvZvLVCALwzojZ2wqBSEMqA1SGkMsVgjg7iM",
  "key17": "2MeKdwkh8KKwQwWcmvg7kuyLiMFq2zH7XuirPXDcvF3FcDdxhxTDfyWrZY84rW5BNM7Q94iZa7gX42KCsx1HpVL3",
  "key18": "PKZmP42pMrntm9p4J31rUNWgDUYV1rEXGKc4iCvpJkpowzXAw6kbQgqmCCRqMWJM6zus2kUgaSzvptTxBTUxJpv",
  "key19": "2SFoG63bfCWBmMZiAFCXAMgfiWobk3oK4Q8fVa6XMcCPD8vkRpp3qfLHMKJJXGfHeZeqkzRirUtnSARHQMNfCd1T",
  "key20": "2mSnCGsaFCCLLEFYiiCmphhtijDVHXSg2urPAcvMiAJJE8ZphSdxXxX1Q2E81aW8QHFHrSDSBbaNiE1p1HqfUQ2f",
  "key21": "5TQrWaJ3Z9a52N9RkQ8jY2iacRBbMm8tj3W4EJHd7qiDB47aKUWfPH9aXRLpmut51uApHgaKpXPAndd7nYgUnyPA",
  "key22": "4zTgDzz8NEBig6m2U5vVVd9mSnSVTY9Pp9b1fEnGANNyH5QvR68DHj65N8hPD3KxSHK5qmUwxeUxz86ARsYZyvnr",
  "key23": "3sLTJXyhAEZcLq7k4S2WqhsbeC9vwGU2yrjZ4gCgKfAzfmQRtHYhLay5htCRHqGtzfeJGu4Fmek2CaBRUwJCtkw8",
  "key24": "SNmWU5TgSmsB7AwBjtkZgFKZ9AVM7LHFKXupQhZJjBbMHvZ1ycwG359G9FjpqznDR3BpkYvnB99LgQnobVVxsJa",
  "key25": "357JbZJw22CSu8iTxFkmZYADyejtFd6WiZ6XwUihEHazVVGGqAh1sGaJRRfbQqTB6XupMPTHPvAMjk41W7EnMRho",
  "key26": "3Pj7CMUbTEThJGebM4mkdp6r3cF3b4znRXisCrBzXUPkTUCHXBtRz67qNwYaCuCX5rocVqJSfNeHtSDEu85nvF9q",
  "key27": "2tinyxh6FvaTv6HiKxk64NRwzBmmwEYQtqqxMfsf9AMKESGVgSkCu2jpisotHoJQUztxmfYsutRT7gPDHd54H159",
  "key28": "2V7VeUxKPWkp3xyVw2c1Gac7Vw18vAjpm7YfRvm8PENvA9uyWPGNqQmMcpHFdahbd38e4SyjffzA8F1tZd17shXb",
  "key29": "44o17yZhdwoEWQVF5ZNhgwtXi1abeTe4qPQ2w4Z5aFvArvzXci8qAtF6ZKfSnVT7iWB7jBGRPeTMtkxdZtdUCcJd",
  "key30": "59F3Adczx49nKiUJf6Znc3WDwRwqVzLqKSQZeAJ7mXeWRaP9xbJH5xKCT4KRzdJ1TvwMtNrxsRmi6dDGWxvx72f1",
  "key31": "2UXep5zSBAqiWwAzDy9zqKHzqK6UMvQKu1aQAPS5dW73iYiFvrqowVYEM9MN2UseHBwXj54Z9makoRahvktwVDa3",
  "key32": "5o1n6fQyqMqNYw3iiWyC9bmasJVkcFM3dsGowN1FFUMN3LaP99YCiQ4H8yZ3b2FmRETxi2FxsWf5E53C456YQ1LS",
  "key33": "4LQc1HEb3xnjC2SL4efXMVSMyskJZ8AXyThQRUUfByvR8Nv3y2HX7upMFQNsGetxX2G2yj6FEgpEFsRkFzcAjThg",
  "key34": "5fGT1CPrGXwz46tQpj2aknKNNQ2wv5AyvMxATixmTRxZbAizPW4dvkaeL8KT99QYruaKb1Sorcp2BFmbXnUXnPfV",
  "key35": "2fKEknvfh3q7uZEiu5hJVdZzFuk1cpoWoS2FoxuuMd3xJmEtHwKBqdDTN6tfFwgJJ9NYQ25rSRt3ZTgWMkaBECFF",
  "key36": "61zRahsSQY73kvGMm1V7MACV65zmmSG2gfMznkDFb2Jc3tx29skiH9B1ZJZ3wN6Dor67ybDkq8QHc4RXUiKFwcXs",
  "key37": "2vQQ7vHwpsxfFXKEs5MX1B7Udsx5ABfZ6cFsAfuhy5GvFF7JFzDbcvx4ySQjmmkz3WJVUAzgxPMVSyBdzZNYVXAj",
  "key38": "3LRENM9wGAS66EARyMPBQHe1FQnJvXpiP4SYtaoMRmN9vcMTWFbBXGex9V2oZK7nWEmeWKsKUBBaBEyeKB6eAJaq"
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
