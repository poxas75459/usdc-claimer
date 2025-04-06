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
    "3wkVciFKEi4kx8GgAd1jfPypYkahirS3M9Hfvf3gs44eBLVH1LTS6mfKMxU8HB58r6iA1MJkS1UnRMCmCwgAmG21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TezpXFgxfT1YPD26ZKwrvAX2MBWtvyvWwy4pSprNXSe9PkSwSCgRjp9XUNb1MZuVjx7z1qVQmbg65KgJ4zdjb4g",
  "key1": "2bovPBPzzMf1tAojqi2ggSfeo6Z4Au2ocLSp5ybwew8jJyKgFWmcmEgrnHS3xcbb2Hdov1kALdgGVBTM1U6oQGq1",
  "key2": "2aVi8VJbTGLcTRZCbhXBafA6n9BQb2VaUiWiRki7xoqtta5HdsXD13RmNUHaBUUaRWS87RHJj3Ai3QQTYbcYCqaV",
  "key3": "3mQoQiL8E9uC9mY5gCLB7KfcG2cRFbXrSkubf6vrcuKm72oioL3PETc7gpe594iFzARFqUx4G7cHqN9HiZ7oUTET",
  "key4": "656oM6RWffbC26oeY9j19GLn1Rbr2Zf1imh2Mcb6BUgRjk95v7udtfkVKyRhgwuthh9DBBedt6whroAKQX6mRbc2",
  "key5": "3hdipsBiZJLq36MHAx17XJPvXPLzUoFcvURNp5JStUTZBVDVtm3HzUjgZxASadzU6fVzg4Q2KdvQqAr6gd6mDPTV",
  "key6": "5SNJAVAjCxhiz7mCQxCbjW9HTaPwWTMFMEVP5oVzwu8WLshtW4nVM9Xum64XG91YjyBmrPvUtwzD8n2hhtKX3to7",
  "key7": "Et793ShCymBEPHdatpbBFncQ1aqwLvugzwfrHUzLg3VpziHGFmfte411FACss9pW4jF4So2jTMGZXu4UsRWhQz1",
  "key8": "2xcSnYjhWGvqMKLiq2ZzomEPYWczoPvZXB4ZcuYN7ivt8c1praJZDZxfgLiPzgF2imUbUn1K9Kt3NmaUQwuPQEg5",
  "key9": "4VYeYZpz5kmDSsAmyU3hfN2iD7kXf9YpKYEU3rkNGfQLB4MrXZpNT8Q9JQ3d3STqixCQyb1FbcCpnmVMnbmKJTtU",
  "key10": "3CKvwhqk5jk3EGbjHUQRrixGj6c2HKQpnRNuLEJB56tLjRgfVtYvVjCN5ZgAVSw6Zt5GH6agddZ5kfEXoAn48wzo",
  "key11": "3vwBEC8anbBjWtUxMgEAamHNmzThkUVakycnCtXZrCjMkWiYNi7DYZ685HJYSthy3QygN8zwRyiqdHN1a7XQKrTC",
  "key12": "5A3dT3x26Qn5sgrVS1SzaeqqGnHN7aTbkqLzenkAR4wnRVCT8oCZTwPkabyqLDViyu84R3eia18UaFbGaVyFMbiy",
  "key13": "3mdjbTqcRw1BLtkoHShNFjNptKsvZ7k5EqcpP2y2jorxCkTjcuPnsNuLyLy7tdY3dkSCAMsXEguvdpbi7JyZW6Yg",
  "key14": "3czupjNKVeh9LyaCduBcmNFfybEGfZbYeQ5iJBz9dSiEczuzeJzFaCwNXnLivCwTsr7vKA25WmLv9AWHXvGFAP81",
  "key15": "5ro3ZoF2fxjjX4M5NWWhvpoMhSBw2KhAQUYrJUK1RVZRe9N8S5Vv6DSzg6jrnLXwUAgxd9mZruCqHmCecwcbYKv6",
  "key16": "KZjABbijhqaH4nekjWFGfTvm8w7sKFLtqT7Mv5ssCX3KVsXm7CvqFC7kgDtKnuqG4j1ctD4KQXFpNwdTVv4vEJ8",
  "key17": "2S6zqNLqwFTUHY7s2LNRBySQCzuxjocZdpAY4RnKECAX1KZF6B2euxwwf7ZX56SdFBBLSNc3o95js5wisrB9sTY6",
  "key18": "2dNNQPtASEgrx9XBs1YPQZdUjWPwKXLRr1JK6oTYogeSJ2bwDjsYiErzqFW1MX57BfAuAuxNNQ8dCsmskgiL1b8h",
  "key19": "2dNYnBDhAXAfiLVzfpwDUHdNUR7hanNz2WhgSwq1Hpwe2f1g5917k7sgcW5haQpy7Dm1eERq8amRcorxXEqt2ihF",
  "key20": "xyWSXV6GjV4mpQco7WVs5cy3SGGfzDo8ZtfzDRC81Af9w5f7vABuQvUxnmDJ9nTryoSvdrEzbqpaxWmwHeQAWuU",
  "key21": "2ZEynsftvTKh7Ddw5MHNLKBPyrKaMs8uv9FsjJsstZ1dyHY5rCpsisjWUvgutMt8QVzhW6mXhgVBn37kwjR33SMg",
  "key22": "4tBgEoFCZhZgcpYxGBwfp5iz1H8yoLZHhNsp8aYZhnDoDkVi3DEgjeLfCFXPpHTJBTucJakE9C9HzbfGNkz8Tced",
  "key23": "2RbyUDqbzgVMhdWoxsWJNStdFV2n6NmKzTyt5nvoxjLTqix9AQ1eqm1ipUuPKngxe9BAfvAguQ7khTRvSyXUfXiu",
  "key24": "58USNG9ohkMg5YtxyTscNqPEMHpqz8R6aEpo5aHGJ49BeEZ4kG8QTVFW3RxSheKqDoo8RtsN7v8V99NWVwqyVuZ3",
  "key25": "EbcARaricAjhY63UM9KZjpuadQd7pNV2ZR1nPwgkbJsC7z2Htrv4EfHYE1HYjzEeVK9Ly1VMK6RvmtugaxC5XfR",
  "key26": "bXvZTKxQccUs8eA5RsPPmBhmF3q52D9tSvVWt9D1pU6a6Lhha9kBgBp7LisWP8Lf9M64YRgd9r9m6d3Yf3YFTNs",
  "key27": "365gQwYZuCkLgfhGK1dz7uN4C866SAA73DLuvHYGNLoGYkLdENHxANnx8sNaDCBXCMUReSJoLGH36P5svfCzzX9x",
  "key28": "8KGXsSY1SMHedcdDWYaYWCcWmJwFUiUZzEbgwRyPMKjxEGXWFNsLH27jcV6DkdasTgjVk6UpP4abEBp9d4WD17t",
  "key29": "3ZbpVKg6LyGYJyU49MXguR6mqUjNf6Qafpapxabg6jERGnnvRSrrHMpXpQgXmUUrApzNPMGjn1UbXNa8E3bvdMNg",
  "key30": "sYYfUx7XDHEREjc91tArqnEjTtNEyNnpGkiC3u1E54zpbiuaVmVxk64CY7urxEuW3S2DeSfgVxc4JuVnPQWQQES",
  "key31": "2cKxSjBA5xYHckuRxqkqaPPiFBRzUUEz6Rsxr9zrbTAZ1nZxxnG4EroagQSpkHTqn9dzxgkHkQQ4g1Rd3tESAop9",
  "key32": "2uKvkV5bF9eG6ftHn7ysipxyeB1EWJqdQdxauXTUQfwvdYFZbe8cpHbQUCCnbyRPLEMPzX7AtcmrwpgwUDf3cCWS",
  "key33": "y8WUVAx6sJMfcEuvVV3S3j1zzh62daDRtNRCCC8c4guNzajuvRaUqBng6TLbu74jtXVvejYFoLneyw9aTrtuZmt",
  "key34": "4WQsHKPjb95gFNkX81kRtYSzYkf3i6wWvjMjGgJ4y4fsWmyr1jeM4qGZkcCu3t6imH2cpnCHobVVveKaBCJ6wJM",
  "key35": "2ScaHsNJYVpuSKfKr4GupxzZAEBY7F45RD6KkjN8W2hMYm84Ha9EdcnZq1JBZq7ugZ9uvBmQv9zwBC7Nx76To2T3",
  "key36": "2v7EY3iaB8GEwQCBu4t4TMmXgnP7io2zuVs69czVNtPAGczVsWNJQtpQQw9pD9jjG7XtK2XRgB5nKDGKadL3zj6Z",
  "key37": "2Tk1xzYyT2WsieYCzmZhwtP2DF8fpWEfTCkrpCseoGexXZScRr5EUfhBNDM2cA7UZuo7vD5YS519X1EYwX4ux4Pi",
  "key38": "5SG4a9PukdcDrsC7SPyFYqe55dXwQmLWyJW4dZ3i23UQEcoHHa2ncuERSAfChAoPYJ6j4jtAQnryiX3B4vgjTTv7",
  "key39": "qhf293BaoxKFzi5S5oR3CffUf6Eaa2AgMUf3Dsyi3g89kX3wzPFdcYfKzNXPoYX5uNg3qGrB5RURvYmh4YH8PG7",
  "key40": "Jz2SULmMnnLVXYdNrh1Tz5iRSH5HMhSHXYjHJTQE8hdL16SxY6oE8pd8ENbTrY3RQsfRHiio6RZPLGgoZDQgsba",
  "key41": "iPxzhhwY6ZBuaFqGutGCbU1xVVX6crEjT73FfN4CUjyGbu4gr7B82xe6zkKzZEdXJtFdqKS23opf1XKvD1cKdZR",
  "key42": "5W26PGNt3Cfk4acby78gr2pAaAQz7Jh9K5234cfgKHLHf2w958PSNsGinJPxXrdqah8Ypq4QJmS4SyL79wYPu5vh",
  "key43": "52BDaYH751gUpTLBdpEVypV5PFKCKFjCtRhFfwZEWDpNhQ1KUQrWtqFGExmvA618Wx2yjtNJaE7KVfsFyCLYJsAW",
  "key44": "Kv9NcW82Yo8WR1piDwrNozqs41fojsbkRB3goTPeJkhfSxfSkSSVjjeTWhwUVZ7DffE4YomA5esaWqVGPDU9jPa",
  "key45": "4GQ8WgVyF3DLHmrvtJoAYceVv2yuRC8Jhhq9Bv39qRNL5EWNpMgbkoSf3NAG5EKnNFtbaGWxgkFmvjRUvmio3wk8"
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
