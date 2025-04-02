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
    "3Q3sqi4wp3AnyXQXaUWH3m6xizkHTJptPJBsPNwo8gSgA3Bdfb5cbkLuJ54caDPA69ca5aXGVhLFcdMZ8NfX2gTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wj6Cjc2vRr7iFFoaZ4ZeKJcPmKvnP63FfqbnaNHwbFZhvXGiT69jAfYLKAfG4vmX4a3E39ZM4TxrfmH9dJD7pwE",
  "key1": "2u4GJtYiEMgd3n19Qi4HoCcvCNrH6h3EbY88rui5AFf1BSHSYYZzFXn38iCKEwjk7oTYdojnumg5FemHd9JVv1RF",
  "key2": "2UaZLmq2sGBHcCGUJptCHCyNB4g1h1HhUSYGqvRuQpo1MVrfHpAcwWqvAsoJ11ugCBbLb6WhVuVf1td5DXGLNmXE",
  "key3": "4Kgfvgrkx6vZgWfxTWDWU5yFxcL7sTPRi5oihm5uXpv6q9sFmmBoi64mv16C6f35iDikBuHC1gLrsUJz4J42w3EF",
  "key4": "2qHRo21uJQw38hnMtYDML6vAr1sb8kP6o3qDHnG8bKuSu29PVy4Ljq2bFHXxiWpw56ZNEZM3gHq2NP3ebnfBcuhV",
  "key5": "4TVqzvWA3wSuJushevzfQzCbDpAzUWKuqKEvXwfxckGjs1Y1Vjn4Kyhu8gP77xik4SXpAEUsHFTZqQfkCVHKXF9u",
  "key6": "3CFN6Gs8PPHLiCEDHcvbLa92PKXKhAMxepTv5Q7zNhdpjE8jDJpsfC4TQFsmqC6mp5JDZJpHka2xJW7xqGuZ3vEf",
  "key7": "5zUysZ5edHFK5D4WLJkWAGosyfxDknRJ35mxYXA5vYJ348RYoEqs7fk84PAXouLp4AJwJXcTaMKT5s1Vh6A11ZwT",
  "key8": "3jkUyFQxg1mHMspFFMBs3ku4PVYbPbEjrstuT1ynGKgzJTYsbikLHTurtpwVoEpz8b9u54Do7ndyyF9TdZ4JC3zT",
  "key9": "5C8XaGSkCW349pQvSnGo1Jk2em4bCqGjDiiLyHmtqgroq3zvsmH1q2VFu7PT8YL4BZLYyApxS2dcbsDGnsHKttK3",
  "key10": "2CnpCCaieaiBgAGJmw5XXJYS2frKE68gJS4NBVq8uL6CpyxNeRv4ZfZFuAXiLbvm7HBjxYz9zC51DcW7XetjYzaQ",
  "key11": "5oL1MZ3LQ2sVPypQr6mYon6pQ3gXNhDfqTWYtM4SYMfX63Yaqc14auQVhuNL5epQQpmsgnbXghkLKbtCvDiL3Jup",
  "key12": "66acNvs2qoXa9L2sv8oruwaff1c2upFG6p3k1LBmyjTPS8GN11xEL5rzcJx8ddikwo1wFvYP2AMHx1PAfaoeUdHJ",
  "key13": "4xWNVTtHap7KUUq7v2WaxYstTF8kATcHLgRV1yG1WeNNbMVeeoZ9cDihWCQYi8rVR23NfodkpMvNkEJDyaddruEZ",
  "key14": "LKPWwdMKEo15SuMCsXpTKE9hZHHHgrjhHxsdk3UBc41MurS1QYdKuHXEkakHGF3tUC9SHuD4BdEYy6dWoFEaX86",
  "key15": "24Fp5HdcYPiXDZWs7VWxXRJTNRr1n93pg2gtgLjzRW3tpGZcbeZ1gx2dp7xdgyUvANTXa62u7ESGdwwFJwNHK1wN",
  "key16": "5iKwKcyBgoqhADa5jdT5qP11GuwNwWqRcFz3VA9eRrB6EFDGFfnTQKvG3VvgZSsjtR9qKD7skWVetT2kd6SLp9ZS",
  "key17": "2LmDGizynt431koF8s4pEwM7KCUf6Uskvr897tZ3g14Y2fBRUN1k3VCNsGCPmmSHmPZ8ecWy4T2QXN72gjiiUVDC",
  "key18": "3rwqnmKk6RUv82k4nLnniXC5ECtYLiugGAwFfyNvwd86Ay8HzNp4ZtfPsdAii7XpXxwU541ZvRPKmPVm4zrahcjM",
  "key19": "43GHDg6WcvmCcWVzfw9McbyVtaix3BimvBFPLAWgiBVfGAdV5fy5coRP21BfLcSA6JDpJmHzft39qSULsmGoUGHd",
  "key20": "2wA2whGNeksasYbQTSnwBfXvVWnPwUxjCqUFbCoJ2uK5NdkxmUEprh9LWTuGPY6P76cCtP6yJXRWfb8vR2ZCWb1F",
  "key21": "3LcB3b4ZjxouXSMpLinFzHVo4vHdRemmqSKnAwbvTDq6wjM9Bd2rdeewLuUuAX7P7uY62n72T4pgWTsim1Y8gwYi",
  "key22": "3cWhw2WJTWZFxjEefZ96BUpZZnzMWEfWYueDmpojHmLGZdeVefdy9ZCFm1nysiGgJsfFcZtQ4XXCaF8DimcxzqX3",
  "key23": "43iLBt3fTT2PF2CmPU4YmYnfsLtWF1PgQuJSgRg8mXzgK5qhGkgcMkDFDdL2hguwc8Fh1bPfQU7sWSE2NJFf5G6m",
  "key24": "3yjm4JcN4G8d9TFfv1F41u6dWQswLabPGvbVyr2cw7ouYv8Ykzm9fFQwwZCTkTdsMXWVnqjvctuVWdCscMqazjU",
  "key25": "5ivASBjx25TK3pZdsLmw7pon6FTjBF1zYXcEdzgASNeJkS6VWtm9ATuVyuZbFG4qFVRwM6inA4SC2ytfhCQ3zcMz",
  "key26": "3dzxV1nQoDY8HrtPjNTrRZ1n1H5Y841XHnAriWfS8NvzUBkWfTqMzWEr7uKY8Tce9GzMLfLjvH3RsSYYH5sqih7b",
  "key27": "uNcjquH32eniNoRVDpAv2wgYV7SYVeypeeBmasYiQi5w6BJzaAKKxBXUYRVesMeEh7m3sxdPi9sYcD4xFsKa6yZ",
  "key28": "4oESyzaSs4DP7TFK6wGHLyL2xKPnLSQsadMmh2NbakRfz9DpuXjhbrhfvErSCjFSwKTLf6eJnBrtXNXPex9DgcN2",
  "key29": "3ooAnQpa8keN8BfGuswPBeLRsZ8qrSjoaTtZMS3BGXpdtUk4eu682S2tXPN7yo7rJv8Z5EjruxU1UnVdnqDfxpwm",
  "key30": "5xBhdQUJxoNMasDTsUPZtVR44FAVKRA5iDa8iMdTgfM2CX6P6Y9nG8nYU1sKdH7VQ2G9UEXjwonivjzipnk4Fscx",
  "key31": "4wfETP6KypjyxN6VNXqk2ZFFAZpNweB8iDnedSoh4dABkeBRLhQbDnjaoJWUuUzfFhiFNaC1aCZjfVfHZLRuc5uY",
  "key32": "32J9fjQteJefyVr9iBREyi1m4MTBJfKnoybnAtDm5pMg6y9xVbemRxamDL22fAW7RaQUUDzMw98x2oC9kmGu44QR",
  "key33": "2aCHnVTThtwHTkGiAvWBeCx5CY1m3ZH9JFZEReYeAatwagJV7JB7HNJhyoGhtsTZMaXij5ksDy5PoD4BaW9UM467",
  "key34": "3ugWcDXnLDoHgDHpXecdgvvvSxWjc8CA8TdwRmQzaPEYKoc2xjgwgFM2BLkZgE4SCGBGsE7RFA2q92Aqq54RLTu2",
  "key35": "2Bwt9v7V4HScDv9rX8pQfhDqUPp1MPMQtJnuJV7biP4bYyKPmVFJ31s6Ns289TLULwSh34e1YaPjPszCYSucqRHE",
  "key36": "vzaYELmEjjJTMvVXyyJ9jxGjqszzFGys5VcWKZTupfyJraKofp6xzfmMTAcPpnij7PHCAPDLdp1s3WCqfgdMTN7",
  "key37": "3A8ymSaYtFWAwrtbBAiWsoiPaUX2rqSDro35KAq6P5RAbwEdE57JYfVGpwd84nxbnSzwLEFTvDdRK6gxawVt4sPe",
  "key38": "64T6s1AZpHc7xhUeY5GFiTw8d9iLyprtJkZtUtGLMoVpMc7VzpumJPj3S8iBFgjRpJN9uzq4s2w513Psa436zeiq",
  "key39": "4bzfyPmQyRw9cSDWfpqWr6a6Aca3kh83xWHryrNX5WBLvpXskkQKJuG11dsU7NX6p53PtSYhVHKHq8sVZ2e2F7Be",
  "key40": "2n3Xhgh5HsKscbUNURZrReosSD1pC8NWP1AzQsfTaVoX3VusU642jVxC5B9zFcNd3FkmNWs9uKYtX6UUcTWQpRAM",
  "key41": "XKmaJp1nskMVJwP4YFiFvpFtvBNwB6kLN6oMc5hUp7eXVQ1ZGb9n2aNmTcwNqZMeLjMovEY5T8vcRkfVE8Pgbzf",
  "key42": "4zESAwEy3qhKcLuiT2W3aTPkaotFjmicKBwfCpF6xBrJrYvNbjEQ22853aTYRjgFsADm6YLDSdFfMsS76okrKJ5P",
  "key43": "3ukFWmBfsMAowR4XkcApPz9QBi6zdDqCbd5nE2LputSUfgXBEzFgZu2yg3xrg6BBBozJYmJS8d4iE8PX7ENcfWRA"
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
