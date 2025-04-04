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
    "5Qv7G1CqV6vuMiHKwQcJVDTmCc3SyEE3Kfq7bKTqn4czi3V9VM9Gn54BL37bBgLuueSsU7KXgq1zvDUBYrD9J9QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTpAz2214tcKa1vQUGw87GhpuiJx9ajS5EAZ9rJbHkF7Fpc33XCYUFXsHUGHpo9wFs9imwbNxU3CVqHFPpQD4GC",
  "key1": "3PmatAJbqiiE3o3akUyUcChnLqYebd7TfyEuHsRQGEncNdFXF9dbZPJ8BYfqBQcghcVUyAhg17Q3sTuQTxbCKVXA",
  "key2": "4ggipDFmMVmWgHhn1dc8iWFb1Tggb3sxCrUfzo3zfbos7V6cJ9NeB3EWngC6A2QDADWVZUf7CxFHkTD5pLvUmyo9",
  "key3": "23T2dLKy2GhjAjvjvfndsYxEqBACkmj7QDW91qAei8rnV33yG7tE7VYYoBSjxWexo7U1EkXxqSTaq1Dnw9YuTY13",
  "key4": "4skNmLYCChaPTEaCDmwxCDDNYXsjU7JTsRfFDohruKqLseqn5TErwxbM4ZJ9YPWXPHPvuRsP2JUKkvpfr8KPEFT4",
  "key5": "5FVb6a71JKaMUZypo3G39aoYrScxprDoMHboAarJg4Y4Gbi28qJEsVAiP6QhuBBioQMAnJgPq1NBXjpqrwNv3eGY",
  "key6": "5A16hZV7geFWWqXJf94LCRv9fkQSzMhmxKmPMUEPsdGDqrtKiAEE9zg5eBWDiJeymq2Btnf383rQRK9eyhnKW8HZ",
  "key7": "3mcW3YfUo3jQdX3iBgJifpWyntc6QrBQNDahLWTpW788QcnPrYHtKCJKme7f62N7ZB216Q8RmcafcgivabJU2sb3",
  "key8": "uAfhvrVMTVJv7VruCJsgneBS3Jtf5rQVxCmYZ4pCKKa6ajY2syXRyztjx2eJyaHy9NPzpks6CZ91BR7G6A9ReDG",
  "key9": "24bZmu7LbNYbYYk5o4kVSGgnabkWvj656q5eQNncYUxoESPYoEHb7pZnYfpqQMsy5gCmKSaACh9qdf6X1FHqDkuU",
  "key10": "QC7M5tF8HxNP77qxqQCy72yyr2zPTfgCaejv4LJZhcoJD9Z4o5d6nf9umySFFuDVFYvYjDFZKgp414wq3QjZWpZ",
  "key11": "2VrtorS7ESeFnTPJa32FebEamBA9DE3P27sYUuR3KPtXm4Dge4MSLTzfZi27b4strxSxPJjsjzg5vB73yz9vmA3w",
  "key12": "5SsuDgDeUs366jsvg2NSgvrx4d4bh8PNaVGFZdibc6EwyUcsqVGaKQSefuJSKyj4RWyfc5tMv4SjV5A5dbKruHLq",
  "key13": "DKrDEa28e5bkFTcVLiQ32622wfGc7YZHhh5xMUBB9Gs6Und9pUFcNB1xeXSfeAcPcKLaypTEWwpCFGndqjg82Jh",
  "key14": "2oUay18Smtvs424BXssfHKG23QGuWcNVx9WRJ9Xb7uHesrNmbFQC4QGkZTqEjXQj18dVWpdFUCzW6T8CJaT3QX72",
  "key15": "9Dk8f5cxP7ztH5GCkyf9HDu66c5md18zvamKAb7Kg9v4AfJsqCFqima1oXJwowb9gz2jCUofuK2R5ACXsoMnCqZ",
  "key16": "4Yo3AxCzeTeJqLxPpxUMZaFK9bPRuJZ9nJzuEwkHf76NiGcX6JgkHxcuASiGauAb24fuSLyGaBLkaxzA4cFvDVhC",
  "key17": "2ss9wekjg9fkQk1LnJ6g4Q7yqSkjr367bukYoxikw5PodVqZd1ExdQf13zJx8WvBxm2481ZAzxst8F6b4JxcCmdn",
  "key18": "475aPcg4aYN2VDfMD4imWSV5UmGtUaU14xpSLk7RD8aXd8hawaJSbq1sPGtnrYWjkaKCa3zbfgW41QWNpDFS5LLY",
  "key19": "bcqruzsddGL73D8JufTWgYiyrjEGHmprTCts8fcHs4gecmQDrKbGkuqJRiHHqyFXBVbnYBYkm7VYDfe1nHUmwjX",
  "key20": "sqRdBypetfHnL3uvGfkAgkr5uAkrjxkKtWVMf5EyhMKuDGW9iyE9iKSr7sP94EuZUt85p9x7Juq4driCHRNeT5y",
  "key21": "2tYHhKksYRzgHX7DpkG8CiGZHxP5hxYTHVwbzS1oAyYtxhesKYx6fEAZDHEiX1mcHCVCobSCWbM6V2RPZd5ewj6x",
  "key22": "643XuqdK1imPVL6jTdPkLJ5oKUAXRreoz1Joozxp74kw6CpoeQtoZ3Yabgs5pJNdTbwb9ad5zX7b6LZRkJvxhEG4",
  "key23": "3njDjcHoTWUPvS8Sdbo2sBuN6GAnHMs4wMzyVuEfLpWrU2jfek18SBtk3bRbh4vxw3ZwMzE4aox5dEHkWQ6Y9nkZ",
  "key24": "4G8bKkzTywcjYHyNfjHVkN8yEwQx9xrfgiZ4W4auh5DxrxVmrsgxNLrFbS6iAtCkLUVp3paKv3o6Nxr1JMxdoCZW",
  "key25": "4ETuGaYf4qVPBfoAkqHxHG8KZLt96nPP7omdyqNr4DboZwC45kpcdzXwArBj26BvjBE9pUd9v9oVBi3fURWhhxFm",
  "key26": "47q87MJjfCFDBnJHw24cdmKekkJqUyNj8MX7Rk16E6thXbRxZnoj9ivTgHsywhZmi1fQyznHc1wQYBcQdRzs4Vz8",
  "key27": "57tUzJikLn7gkSiqcobMsoZ2Cu9AtsdM4pDNGiPk6yG9ZC1TV1PNwzz49XVmAk3UxoQKUhFpuKWCBvSfAL7N1hjQ",
  "key28": "cUuWTkg7d2xrooa93qap1xvPJM3hZaVJm88FSLxr8FaSAWnZpVMtLWZniryNp9rsg8D4quTwReZopqT2DhJ4zhq",
  "key29": "2KMAnUHyKYkM8T931GLAUf2PjWQBL7kHFccXgL82y4g5zKNvZhqVf8TttqKa1z4cPqWZGhXKyVnKEVPoWdxe8V1R",
  "key30": "2Xpyn2WsUyBamdmS1HwaqiJvwamj6iHYnFumbqkqnHR7qQo2L3pX2xZWsUowkqNipWcQ9KZ1PpwW2Kupi48Thmq4",
  "key31": "x3X3wDfhurRFpq6JxkT6pE3BxktVaufi9PFoRRRnN2wQ7JyVCNXtqu4rK1CbaEoPJYkuMBuWPEUJL4EuMaaqYG1",
  "key32": "T3s5ncTAd67nbEmVdefLk4j5sSh2U8DTUjb4Xdkjxyr4kq18pua4n6ZM5DHTJeby1FfnJwr75KsztWsgDRVSDgv",
  "key33": "4wj9JGWW6Y1oxmTh558n3rUHxBcTj636WeekBSEcpS6KBUawyVsuUjeeWX43Xe15LFN5LCMysHYgZcabsCqsWQeZ",
  "key34": "4Vz8jhw91A58cnuWhPV1ciqGFWCLCvG7FsaAwHpVtCABrp92ddjg1g523FasYfU1wVqigJWGZvP7Ro2ByyKzdAsy",
  "key35": "4CFfg1ZS8CCUJoUCNqEmzYouJWA2UXc8EiED7cJSPVhhi5Ju7yN2A1bgDEHLmbNCbNWPWQRdepYdZQh9cjA6HQ4d"
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
