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
    "2UiAo1NGu9yJHMZEEe3iF9NwT6MqDVS7bi1EFoYJreTAVZP3116KrKPmCEzJZmsvCJbCg3w1GRdHjySzfS4HJNd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQiXiPw4a7H5vC4oLeaExVkc7RJcFqt8rh2ep9hVf4x6GEVAS8EcW36rG7hzViS3pUov5pLWCFQps3KNEXU5im4",
  "key1": "3NyTwzaWF5b11uD8Vdc2mVxN2PDRpwc6ErxhziCAs29cUTbCmNhNagDYvqxJBuQBb23YueAqPi2Nz4bL4wypAawN",
  "key2": "y5BdxFgjfpLtHm6eBJ4CLfyxPUDVJc42LZ81wgmSULPoHmy4j7dMWcRi6ifbRgQsepn933wBgG5dBsrrTNjEbJW",
  "key3": "25Er8TcASEbtasWoc5ThUV9n4EQ17ysEaGasVFrmtmnhu5wYdWSMfmAUzhUELMedWodQHF5Lb8qR9Wjvn5Nexsyu",
  "key4": "43YKCNCBct1DK6dPFNpZNWeAhzhFdNSxhsSubTeNQnJ3kzscdZ6Jdta3ssjnRZ7ReTqfHUNYTfsinMUqNHsrDrAp",
  "key5": "Ay5ZoMPmuHtfQhMukp1tQorE5aExnetYXZhdYit2ZGu1vRLJ2wa9cQPtKZL7tKCNVvtCUHo926qZ3WDhY6qGH43",
  "key6": "2xRskXvVRFj5R35Au1EgE5Mzap8FYpMMNR4qPxG3piui3tXRJnqvAcdLiDx4rcvxsC7JN3Jm2aQ8zYutpKE13HNR",
  "key7": "5B1b3EF4pdSnwzXFthBvV3ghJe19VnZYHeBygy26iqXo9tHdEdfd73qGWm6fa64iJgJ7CpYHEh3gG4KE4khjdQrE",
  "key8": "2s333KTzuKhaLmnwrKcBvqJDG3qJ16Zt2rapWPG3hchUjtVRrPrTqm9mAKydnYjPfD3oRaMLNHPyL6QFMoqipnPG",
  "key9": "45TofpECRvQFBSXYbtR3tyUw8RyRBYTJdu5BMQ5oBQi7A8pZXTUYoewXaDWgYUw2saJpGE1zp7d2HwjamVa9hk8M",
  "key10": "4sYr25pCVYhBjT7H35Qqh3e4uXMvnUoLQLyD4DK7nf3eB23ThnLusRCPmVpexWfn36JYfBHPdquVY9JPaogeK8sp",
  "key11": "5fg46dsYysjqAmhr27nJJRdkCWxgLheHXRUJasY4UiwcyCUvJQwdK88Qi2WnjsDF1guDCFyZMBUxv9UEkzM4bir4",
  "key12": "mm6PtTSPtu58Sip38U1hBmZwWMoYcMHGJA9mJipBPtwpmgaY4ZB3aLsuUx3NBvqYwZSzbfhLUvSaggPTTChjL8m",
  "key13": "2mVShxjVB8sfhr5qu2fevim4Bc4yVVLXVtCLm8178vG8po2GhXyNyMnBhiK1JZjpGSwsC94V9uvYHQ6DUNPTdHT3",
  "key14": "4oriAaHte8EtjuMDQVqVRZZGoZzfPxPwfUyvP7TQtFwp25ig2ZYw6idvK66r5xjNohfdDnDQaWJ6tVD45QxGGD9c",
  "key15": "5FcLKVJdEwA6LbC7MAhF3v2so6vJCqKavZVJ6z2yA4J2RK9dWeNkHazaziD4iRJWFkDdd1ELdywWw6HsEWL8d81M",
  "key16": "d3FvAAnQvscrskv9sFZaKwuVdQcyhnivhi7HMCzA7zivgm2fcTTQKzHnqkTXSbzU3sbXAghdveb8v87D9Pr2ynV",
  "key17": "3irJ9AzJHpDjQFZJmfuKmnVnG1e6ZmP8MiEJUha6bK6HTz7tDdhDUPjZogiduRVDkw9KirKvwhbVDuJho3Gex1rc",
  "key18": "2uZenhVJ7MpbjYVpSW2wSPXJTxnNfXMfh1c36ANVfibKoPpe4bDBLggbrAN2szH1WW3juLFdRQn58UhJnqgNAyQf",
  "key19": "5QA3cC3gbMQRsMuJPSg8tCLt25VABFHe8x4DPWEXoFPkB1P19kiuY16DMFSPJAaPPaBEez4LgdP5mUwB16J1d7ku",
  "key20": "3LsLCyVTkxVtUkY4x5mdnFJwDBFjrPvRxpMp8XXSpQw31GQE9cKixJXXM9UT4kB6ufpQWs4o3ooqqydDkpmW2ufw",
  "key21": "4DkZSpcDEUxwUyrf4UUBtDba9Z84R7dWWo2ainUaXBhLykc1Tiy5QQ9ryYkmEFLkcTQAT4Sm4f69SJ71rWYtisXU",
  "key22": "2NBXtR6zQUtFbFhLHEtYRynzwtosLdtTHLGg4syKZ2jMq8rZwdkZPXDFCiWYke7bEAwbp1mezXEooN2taMFL53F8",
  "key23": "dGF51HA3vTiH6Sobwy9kGwf56Znv6iB7FsXANcoF8sEHgztniG745K7cBTPz1z9hpoEqWQtR2ShSdjjyN4tcqgc",
  "key24": "2YTsgSqHX4CqwfyutrJrdqt2zrdHwGR3zh8jLFkJSJdRmn8Ftq19YVChnZCMfPg8dBtFaC89QA1KyQGYDbQVvbwx",
  "key25": "3hJZnNfjn8owEVTJLgxTC74xxJ8XNo8sQS8yeyPjuw49cj5gsu6uwmduNgpa2un8qkxLXHNdChd9WZf8JvnMHzMm",
  "key26": "4KKAjSMd2gRcjuCwm7WUko8QiE7Z5NTh2mmpUas1wqbSMFkqfiWJEYhG3esDgggEkuSyssod4Sc2KRPo2XFG3gX1",
  "key27": "GMwJhvmjN7LmEoK47vYuK2i8fSwvcVa39QwzqMEH9gA7fmnVTQYrKEuKnt2idE398nkomZAYrvk45VuumKW1oge",
  "key28": "3DJ7nLvtKSyx1JbQ5SC34Q97QH9KJG4wGUDEpA8dUxa6e4gZcHS5VUmupxSSJvEdmHKSs5JJ9HphU98FdAK2wzbA",
  "key29": "i5ZXrAjxhryctedMauofhRcrf2AcXnkMTeGGH5e1kMapBWPsADMwKSUpr19wY85qAw1k5tdiU9Xx7ys1bgzXgPM",
  "key30": "3N3sMezv3dHNcvgmRzn9f2KF8dCsLMK2ErbnU3evhhrBRzxxCMAnVo3GMfBT4tSudk3Xrqyy8QiqUo89HvVUsg7A",
  "key31": "kYVCff3cQn1fUSdo7FaFJLhWFg7q3mWkstDj82AytNZDNR1NaiXcZCWYb1gzE9VK8wKiGKoAPYNDkDV3SrdjT3u",
  "key32": "cHZT1YkQTo5h3zT8Ce8bPLdZnho2v4sxbHbdRg8Gg1RBzAhA5C1LESDG9PjMXEsvDEfsPqC3AtTeTSwoXxEBFEH",
  "key33": "3eTnrEfqTqTZigAetPipWXVP9WVisyVrbknjK3XLaua85g6nbzVdEmcPg9NGoYcS7p97F6FqTL88aRUWfc9YfDdV"
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
