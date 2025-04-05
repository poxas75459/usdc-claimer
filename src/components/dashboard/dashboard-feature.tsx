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
    "3nLaA6YoJjjAd7xjF5M1F6pApdHFAG6CWJVE3d5TSNFLcMHW7VyXqoRCzsPv3MW1ibTsqV5G8iSPyHnHkZ6nRcxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAngBtBoRSFPtfNSF69LjmYg8FMDmbFRHdwcKpujtPsDESPZKhKT3xEShJbBsEVBtx7b5vD8ggZWKuZadwULyvM",
  "key1": "wtTjqPy9kLqGTC782eGswyW8os4awvTkq5tCELS4fvzvDpHjNUf8r1qp4u3wPCUYZpMybB5zZLwL3m16NKDXrJ9",
  "key2": "hPCpKHjVAFTwBsJxTCsJFm4MDPT1YXrZqPw5tZjdPPbT8QMe2hYU2bPTxpfvnmg3CVUnfZYvHak1x2U9ZcvLD73",
  "key3": "35KWtxjcHwyAni8YBaevXho3Bwaofxv2L7gzHj9pgu4DShtY9Wnz3Yg1bGzpZeR2KfYWYJ1uz4JJBKn48nCDvZth",
  "key4": "52e9A6SLCLCUvUghGjzpK8sDojT5r5EoW9t4cP7c5hNzPxYw5NeAEjrxWD73GpnY6aZdVrprZ7ow7tub9NSBKHSu",
  "key5": "5x4DAwFfEXVwohKthMS6ycdiAjEYNk9DsgA3MZVNVoEXRzDYsaqz6m7ETSkwGPEdZRmMUzWJMTgUZnCyWTZWAuxe",
  "key6": "2gJ5nkegjyfpsbrMaZ6Q4ALLD2KjL6BZH6849mrvFfuQPfMckW8483nZn9uaiBcQVxzSxnWk1bVKhPkzoHj5cTtV",
  "key7": "3ipEXWdn3Vv9g68EuoMVr8PtEgudA3VgDwziDEN5AwAceDLzXLQnnBxBf38urxb7CYvuDEqvniaX7Ei2SkkCY59A",
  "key8": "WLuAfCmgRHxsq6dABQWBq5oTWH5Crj9atq1BfDcSu7yi26dYtBiQR2UTT18jE9ShwTPJ1LiAjDRmHZ8yur1U3xL",
  "key9": "2oWXxrzcuFgEwfgG7GX7GKjFKNxvVEAhpqCk8uSRQtpQ25cLefwfYUv4goRM9J4vZsXN7FYxjD4a15aHvyutHmw9",
  "key10": "5bj37hSkEMuxxw3XYt3fXUbQSFTCnaCcaRChybiNKRxp1tmiuwCmKspEANok4HNCVSFSc9D9FRf7ATGHAfb5zD91",
  "key11": "5MiXu8jx8A9x2qhtSiiEmKDPa6omKSH9tdhcJYXTWVLnPZ5fVonp3Yay9wnSu8WKjuhN5hRrqoSLZxMz6FrC1fpB",
  "key12": "3JDGPwVqsk15GzSbJ3nU6Cb2Rb632wSB2i8hP13o2mgh7ZZ3pEASJ4F42iWSEzjyTiPKkXPFQuvj3i9fFqaHAzK1",
  "key13": "41WsjA6DwznK4x2paMYH8uph2x2nKBKudqwTkjCEe1B3Ptw83h6zQP3grBpYf1NcFEEUeGS5HtM4ZfNRW4VDVqtN",
  "key14": "4RjGAn39vp72dnxxjLvdGaD3hGP7y45EuwvqRN2bL1dxKeUkYtVejabj6bRvjZnedgFxNzwABkRuakoUY96g9ru7",
  "key15": "5N3KeBUtGHkEytvjPZaDvJH94KQAHaMSd5ya9GqKg1umcKpVyEZxdZ3dQBrQkfSK4f8NdeKvequoBtK1zT9aFXhk",
  "key16": "4dYPGj4hJg8VRFJc3caL1ZUx1r3X6jRo1M4fVteKp6Kp4Y2gK6Vuaun4dzViNmdoPGvuSXwZZKwNMHfDKBJAEfSs",
  "key17": "N6c2MnPJXiLPpjCMHSoVMEK17HAPck2aD8oueR3XkSUa8gAhyU2d5YuELMBXpvzXdC9NegFiKzCAVosiq7ehzUj",
  "key18": "4Z5QUsHysc7tc7eb8raazpezynA2Gofo9MMm3xq9kDZAGJtyrZHSFBuDzkzk7JNY4AyqzstTmhvEjZ5ZsgCaoTyP",
  "key19": "3W4rjwJbMP41ycjMdcXrvFJwePkhSbNvbzvV2F6AC9jEtJLLHj7WdUWT3JKVLR5PdnFU3TirjCCzX8tLQ6fA3j9C",
  "key20": "5DgRkvYkYpAdahgn91ZkGeBYakpU6Xt88CmTS2kM1X3srJGS54qyzpzr6SsvvseUFiX2v7JSVUjjYBm6yDRbevrH",
  "key21": "4XAurPszKx4yzWwdZZj7nVbx8FQ82TR4YUtW5C1ZjEpHkZjjzz1PZqLX6rFf7dn68toaSQrXF8AvtStwery96dqV",
  "key22": "4qoUJLj1xZQd2xXDv3LYo8sJS4njxgTjiswVrA8rLBgeffZ3ocqA5HqwT2fsgZwgZ4xZqCrbXQMTS52ycn7XSzsT",
  "key23": "5R4vTrVokD3WGpUEgVApJf66ZX8RkiWzoxunTNuEftBwuausDuq9aTUsdmD76zZ3VFj2g84v54yRmBTS2avWngvW",
  "key24": "4HeERn5jcnNtKaUMPnN7GckeeFVCf13oGXsfKaf3LCRxkD3SCGX9cTCUa9WsFAAKqc9vLgoAtxW3v7gjRXm5EJ2g",
  "key25": "5W7pRN9CxxFM78HV1fsX3qbJYJnqwLENk14C5PTLNToizP9aLma2tUGSgTXQP2piLZwiJUjieu4BAPBZgVfWo4QN",
  "key26": "2xqPrdoqd4Xsd9c47uAXbUa8zjkRYVGj1y1SZVkF2dToD8oBV4ezEVtXLpoGW9SthY8dMuxjrBKXX8h2H5D38ASx",
  "key27": "2gRpeRGJwqpsURqP7YE8TpkR3RWFUqmjNMmXtfBggqex4wBi2eR4XzL1NU5UBGhLu7nDYZa6Nb43fVbQp1QWGgXC",
  "key28": "FoyK5uTPA1B64YdVAkFoZdx72Rk1yEBPULK5gZPobrRXYjixkYNRkfnwXEojJ4VXP5wob1v7paeKr4obPVN4LTS",
  "key29": "3tXQNCiBaqN3URiefjnko9bcEGo8Wk2KLRA3Yp9zzNrzpMofzeaqJrVMTYtpZPXAHmVpZCSVHDar3RBDzgutFtM8",
  "key30": "3Sxmt96hw28sE2AR9yh3rkighiariem6uU29voSHVboEjQZfGtZQhSBzcqu3eBA1jEPxJZUrt9Rr8f8ayKk9FkrT",
  "key31": "2fgrF8fqj9jmmo4BAKuwqYQYjmjcK3sWNMy8N3bEa7v2Xkr6CoUSXduHhEMah4F6pkZi6TQmrTpH1oGQiqR4WNHE",
  "key32": "44KQKRrDmRwdMvjHsBrQ13jZuQRrSpPKBuYgBSrenBEAHnYyiur4HAaPG2o9QGxzq4P6sZ4TP54wCYfrr7K5ib9U",
  "key33": "y1RBwiQPknbAWEi9c12NFw5Ge2VzS3jLWj6G7YUZExaU5vQjB9vhoDpMQeQEAqcXisVDW6EW2fMPXAJeRAifYjP",
  "key34": "5LfvzSB7F8wfizHRtgvbLZz8iGsT9oqkKhzcEhHQC46C26PJtPw7FyrRUTrBjoiVCtnFR274cPX5vF8RoFZxYvXK",
  "key35": "2jk6Ep1uCq2QA81fHRVwFE9EwxHRCb4QqnbA3B4vQFGmgYJBtaKwbMzVV4fmUQzVgA7BKH98GAFy4BDetqSVJjz9",
  "key36": "1b2U2EmiqQ1jzqRndrGvifZV1McCHFaF3xvvfyqjPdapp2etAuYX2f8iP9GXP1zstewJ9yFnSrAagAFK37z8mxX",
  "key37": "4Casoux1fJbgVG4HVPtisEr5RGjsZcvw6d6yRdYRbpEFpJQ3vuygvKzvXHLwbKw2FL8ozBZRdrwhvKUthscKGinJ",
  "key38": "5hK5VcfNqobpwSmE6wGSsfUTagfa1cme8eYeh3FF6tdTBG5DwN3tfpTsdJMNo4hTf2UJYKitEe94h9QmRwPHS1jM",
  "key39": "5f382aZ577PPpHNNA5CzR2zmjKpxJAVHfwP9CNubXFZmMTheUENHP2EQMF2wa5rh19VxQP6Zdr6JLN59wcKFdWUq",
  "key40": "3kEgVsxkZsaomin3bYeSjFk83pry2jtJ8CirvAAt1ddKZEB7FyWEZjAkUPZDwkSRxiX84YY5t1VRT6f5DWATiLY",
  "key41": "5zoL3Nw564RtxGbnEuh1kicLVo7zPzHzzQgNrNQKhL1ie5x7qwYbz4oU9kShq65z6gdqKpHYyHGW8RcUyySN6R4h",
  "key42": "3WuzhWzPZe3W3EWo9JN7STS766ir8eLaSCTPaBYTmrH3UrPottiuR7ufkbAYSfbryAW1jsiBBpq4u6eXdx7cZqdx",
  "key43": "53tzTXMa88MPQJc9B1aT13UBTM2u71da3vpNwjpzrfP4Coucrs66ZW2QuV8xPZFvCFSSGTL6UKzj8vSFkYugQvHw",
  "key44": "3UNgKhUwStAEPLPnpBbdsDp52MtmguAJHJb68VvFZ9yjZEKnv83nhPX95jg9F9iR5VsRzcM21EVg6Y7xcpiWuVSe",
  "key45": "5VaZ3suQMwFLVCwSJswqpmj9YXLfZdJY8ZiNVEUxAp9UBQAEAfMHCJdg9hF5RaLwEmZ3rGxzemhVzftUthQsEUv",
  "key46": "3Z478o7Tz8qi3RYRk38WPHHxYw8M1hkcoHMK3EDXaK18ieZXoJ29529SFQ99zRbynRYWPSdA3RUKR3XF7C1k3tfR"
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
