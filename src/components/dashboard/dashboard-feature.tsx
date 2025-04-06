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
    "4ndijSCGN9uRqrvS9GXNUj9YpV91rbReWyJfR9avPedH9wLPEz6B5TPfQQnqA6rvciCHMfYcykU8p2xf7ZXg9zxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQaRy7KtZpBCAYpRqur8zFFCJsz4YC8KcoukriuLMMtA3LUi5xFYg1Gq3CXigNzFzdX8a234hquxdEPEdD996QK",
  "key1": "W739JjdVRedKG94LHXnsUBg1Rpttw2wbjnyEu2UN6rUj75wgCWDfp8PZD4yNrkZgpMLZ4Kdf9SdXm51pwhsshLM",
  "key2": "5npguGErnks3bZPn7ySatB5vFGqVt37TDcoV9SNoqybmbyhQpo5LNXetcYEVuLKfSQrWtR3Jm6QDFgacJbFHeY6M",
  "key3": "5jYboLwr91xJDVV9hv5nFtMpprA8yghwwFEiDQy1JWcMkn6ffK8FZenkFFrNqfrTXRLKvtBHrdQSxUBex1s68vRR",
  "key4": "21Azttzw92G9DooPKMEUDPGTk7bhtDzfGzza1NWuSgYHoMJxK9vdySknbjQLyuiKLpXF1GRLq3dhsnJUSR5Ra2UK",
  "key5": "2bojA9EygME5vWHmcwjB3CrcenBcjt8Zufthoz2UaJ1wz9GxcKDzUWwHBpzeZYCzvqrABLup6Vq8FnUBpf8bXHHi",
  "key6": "GZnYE9WYbEPGfvSmqQ5ngBxAee6fr4pV1atrfkJ4ut1JHDvqwHd4YP8pshQhp3Dyz4UCMPGpge2esgE8hGFKTsZ",
  "key7": "5xv9zMoooev3EpgvMY8fkGP9ekcWBSYj7oX2Ecuhe1E17gw3nS7QLn8Zc86RkdiCTktLLFcQ63TBsCVhp4KA3Pq6",
  "key8": "ow8r5aYqF8tLVhJRzAGVWZrpNnG4Du26P84JAPdL8pkaBZ6LFz7MXY5eHU3xB1KqABzJXZJt9Z9wTGcBQ7f1z2R",
  "key9": "2E2BhhJaNw98Ybs45j6HrTzTcJc4qcRVoEJSdqJzAJiU9TdB1XUoChfLrKjpQqqBMb5xTnwcjTdsjoqX4xR4qGmn",
  "key10": "vfT5VRP5zNWi77HNMYUBzRzGhx5HBg14pBXLBQNwm9bfm8YLAKVYY2iZRRDV3ec4X6ZiR5HGrAEyZpvZWd9b4gd",
  "key11": "5fyLFseZetWbmpMH5771qvtWJkXqKx8oSRPMEiVEDfD5mYAHZuSfuxgFtW63DFt6FjTC1hHvyTd5FXHNYoCoxUcD",
  "key12": "GERphKSxywsrqWH1zamRG7LHHB3jtv1vJweRu42R7scCZFHLPMY6JFZMkHLVLxNnuZDnpMbtXzhehRRKSv75vTK",
  "key13": "93LWqWqEVu341w7He1GmeHwvuH7mcCHvGN82FxpKHnrnrnuuG5mu3kWPy5mYiZgh1H97zue88ASVBSkKjnaqRPp",
  "key14": "4cnwCQ3LyHkoGFnJUpdtL9XkMmKyLtKvDmCu8pcNqhTtZpbEKiP4fEqDz5ff8v8ZLEvSLMgYcPBqDvBXgDUAnTn2",
  "key15": "4S49ppBET3gqSz64SjQDcZrqz2C8NxqjjoUKpa3ujciJtnbrvvDLfJeTCe3wNyzMvecYaY8dNxPxwjhoeMSSiN3W",
  "key16": "2LdR7BvE8VMK9kBk4gBx5xGHKnBtuw52nD5awSWRxMtxfWqzNeetghCkHpBPhiLGNzSpiKU2WzQ7oqDvi3xXoLjj",
  "key17": "25oZ67quVNvjQsyD3eYFxwEh75ofdaB4QhEPT1bmU6pz36exAFKJMVpAJg66sZ5QGLstcJUWhZaiyBopr22S9mGT",
  "key18": "snhC9HkWfs6Raxg996jwaekaJVNhVpijvu7tevgTi2JKijN6VVQpZJRmdyuA2pN8Gdwcg8XNU9rkswocCavNW2L",
  "key19": "67UMzQQC2JdST7QusvsDUdpm1yPqKBE65HHtUZekz4a2HTh91evXUaSWvGNTfzSvt8PYV1kLfHsXYMpATTfKxXse",
  "key20": "3ddjz4WxNJt3vtBTJd757muvVFtzn313tZz3zRF44hiNyLGkveaahfwB7w3JZmi1fZtKCyMUxqk8JN54TEqrdcwR",
  "key21": "4Mf8LwDbcvQgGn4nosqKNHkH1rwWpY1byZYkmtd26CQwf8yZ9axSvWSec3ycMnXaKfttV6x4ktirZ4XFxBsg4Pge",
  "key22": "5s3G3NhbZTdF6NG7cr3i42gHmDd2dGEPBvpyKdoyprQ1kqfEmNyRP72A9MGUtZ3LRcb2h9GfcgtM3eznyTcLkLcj",
  "key23": "3zBCWZNX5rxHmA7vJrzpfnaPt9dYyRsumDDdwZqqkN25922cknwyeMECJpwiMFtMmqWNCPWE86He9fAX8CE3aqR4",
  "key24": "2747G6HwPe1LpzgAP1Pmdo4GZ1UhRVFyddUed8YfExfFDsMv8bNjQhauvKocwHv3QL8p1JZL3f1y3zuj8N4ECSSc",
  "key25": "3CEqUQC7Tpjs1AQgYXyT5ZGjj7WyX9uZR2wB9owZH5XWSf92FcoNnhZKqFbYmdGb2f8uGfGu58BY2nVWKUCjo6Xa",
  "key26": "4pzkwbGxg3wqDjh24Qv4d7EhmnoJ8pVejqUrcyUxpkpkprtViMu1TtphZh3xR846b3kbFmRMbM6LmVzTGdNdoNYT",
  "key27": "3k8uip3WBPRyjwyTowAa2d33Ktu4BhWinX14Um4UKu62m9Xbvw72ncDtp4SCiMi4weBGdLHonXam82zQz4VTpN1S",
  "key28": "pFEjqi6AF7B4C6pz4rASYsbzKsn3axA3G9M6gzKZaP9d8aXHPfRJefbmiwLCFNTNqiV7CYLgtHtfUoGmdcUa5vu",
  "key29": "5jE6tKtnDUAP13SEYXYhYAbAiJQiWgmM3PzuTv43oJMTZP5ske5ULStbNdufi5pM7TkgfungSUv1T4xr284SmT7s",
  "key30": "5pNf4upJ1BN99eYdCaBEiygGxQ9sZec3vGEHFYMWyipaUh2MWswvhuPa2jgDxc4ouXbQ5d4dFMzw9VonceRPVnz",
  "key31": "zUZ1qYZtPh38SbsKKQpoeDfeXaHP1ZVUvmNHEmEDwCfR47VvZ2E7RptFBHtTgQe63a19BEehrTpAAqLwwHFz3X5",
  "key32": "3ASdmmLjCAJJ2xJJ482L6gNMAduosZ3jFgJNXSZzjhRFn1Tot1XPCU6AW2FxU9yaRvoVxmz14MQTh7ppxNeBUFSR",
  "key33": "t9mzVkCZDma9afeifwez8fLtSv4rWVXkwZovcaTnUprzF7NQzHJLi6DXZBttw8TeNPU6QdDTx64TH5cbzxkgqsr",
  "key34": "4MTKAGv1dZ1N2jjjcpvk8qpJ1Y3MeEU8UzWjdos4mhTBUtEftijodjgE7rV737iAsyRtRWr4E16iMFbFnL3ZN2Ns",
  "key35": "5QdTteG47sQfuQ6sEhH632GxQEaWwTdSbDPKwZtMi58WFGmM2TC7hENvADW6FJdUuKnqLLVq1Ame3XtUnDWWadTH",
  "key36": "3XUhzwJZscvj66UoB1eFEa4DUiMVCXBi9AR2KTdvXdLuR5xt1zbD4XzgvBbZ7tnZPNL3arzAWNJBP1hUUrCWoZXh",
  "key37": "2yU8F6qZjtLRpmXr9AW1YQFw4KLkTX285qFnVCYFxPnEmgZzSTT3yeESedQXVd1MnUH2gdyxVZhoXxyn5Bzbv75y",
  "key38": "4txtxDHRnYjZtoXgUfD4UzDXKG2e1kh1y8APkzd6deeiU8yXbuCLXQhoWSXRgdFNGNcY5cXEpGi3kNF9H9xukS7F",
  "key39": "24kBNPja4wiBwt767MG4hioFnNtWPseCNmFFUkfffDMcWhg4p8oShHuefwX2E52uzqpSgwK7b3tLZ39sASCu87iy",
  "key40": "3FFpJrBvrYWNLCw7HoLJHY3uQQjPyuDBzA4E22kKjaerKfnMoMRBCRvUFNKczeStFPiazg8Upn3iTBNX6p3fYnC5",
  "key41": "2qBJz3q11ErT2ah631G6os7ndS4Qvr3HBYoqvJR9mF47RWuSUJVYicbw6T12dXFjRPXVNz5AXENPsRJHSx5ELtP4",
  "key42": "5sHmep9X4CuuRPZUy3K7u16JUJexgnH5AFYG5qwx8bCYvUkuUYNzoAjcVYf84K6T3PF8LMjHE4SDQkHzBk9zg8Ew",
  "key43": "5asXcYdiEn71FfDcR9N1sgmLX59JWtLGNFg7y9brtCD2b7CD8wxThFZP7FQ7ovqC5RdtqZ52E9u2aPiVRR9Vfmon",
  "key44": "3rg4Yrr7onC7uxzEaWgFSdbW8dcEShAYJXFtxt6xUvmRVWPFcUfQhiHP4e6ozyucDfojCn9yWFycmKVRW8m1Uon",
  "key45": "4b5LHtiD1Dt3WyYL1tAjZaYtsiRB3EdEG1XjoGwiVZ97gMRBuhdj4udjrSQWGy1QZWHGVRMH7e9Yeh5PWkr22wtu"
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
