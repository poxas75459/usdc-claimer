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
    "32Vikd668i3cKumBpfYkcan5Zzj7E8uhFZ2fAsSHETCuEiTcDzK7BATacdKHqZrGGRdGjnRtTdmE5f8edbQS3CXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yVaN1hmrHiCGjD9VAdaUzLEbvBdUsk7agRidvWuQyBSsApHQrVS4yBhCkj5sXxnv2cb5KRBgPGCkJrPbWnhMHA2",
  "key1": "2f87uuP7E5SxYkybC1b2FUqJU4K71DarFgJQZ7zYwmeFMJ6fY6vCY8pNUSvxeayDaG9EniuEKcsxQHkJbNdWKWim",
  "key2": "125oEBsWirJzZeggyezPtezGSHV42j2KJMpaXADxF2zLp3VkWBwC1joiXHJCYA3D6q5bynWu5mcJ2T8W22sJ3wfg",
  "key3": "4CnCKjxSPGzdGsEDS6Q37FdUbNgGt4cRZoZdYaJ1gCtUCsf5zUhQSaREBwsaV9GTbYL6SCTFdYVUjHf2vMpu1FxK",
  "key4": "9f3DRPGdKDV9ibCvz1MhgWRhMhPSaasLhYJ65GbiVM3SjyvKr1UuYoRxLc1fyneE3j9pUCB4ZGNtYCrYkwTsyX5",
  "key5": "2D6zvb7oyuS1xqU7t9EETMwN29eQ5gX9Y9fkiFf5dcKL9PpFyuNSpwbLRSZryNn9tkBpEMoTWpH7oqZy8BumhMES",
  "key6": "42vExGNKucM7m1EDjgSGawy37ig4dPWayzhXsPTLxfjjxUrzb8tXgoYWTc2Syp5LzNrQPqnLAboo5gFdLPTg2udb",
  "key7": "5371dfnobg7yiSQWC37r5L2cA2mypHSS1RMBcoZzuQgpfbTjesYZB3YKCCdSYRGMJxrxEBsWUkALBXXYvXbDQFKD",
  "key8": "3K2YAq8mUtCvFYNnnMBL5XYZUMD1rLjJpCHuLUR4gKZ8Tx4em4oHYuaL1NT9Qm1HYmmN9emaM3vUQiiD6eTq9Suk",
  "key9": "2ybkH9BiiEJ8DHJUhWoqB4dDGM7sLJ34Ek28MMDYxHdpzbpebuszRSC1Rfnw6yqCfQxnaMp6BqQnVv9VEEbQcXWM",
  "key10": "5Fh3TLUQ6xiYHpj4LewGkxfCL3h2FvZCpP6Szwd9BZoPKJ4VDd8wrobP1Cs6y6C4H9JSqZTX1fmE4vDNgb8TeAQd",
  "key11": "5Hc5AXmCdc3M1mofQtAmGnbzQ1pDMvnZw9VbsezFvHXsn9StHDrV2W7PfGAiL7ZEQ1vS88S8NwkJ86nteuaSKwCQ",
  "key12": "5mz9hn8L2PuNjgFdxK3wbaeVbbpBowT1Hk7zkvUoh4dBXN9f8dbsCVVNpSemEiCkA7LBzZozL1X7QHDuA8NoAkan",
  "key13": "R2MJexbHjabyhKJzjUVVq17QSNyQ2tP6QhBhfGf4mN4UQsfq9dTq9nhAMN44N4PfpKQZMWgCrjFMi69Nd2GoME6",
  "key14": "5CrwdHK2Z7jcPSZfTfxb4JxNGEeX9LUhMqfiVzz1czdRqrTaz1eWRck8d1EFTDpZXNJyjrcV4dbu7oWypx6oNcL2",
  "key15": "4bjCJhncDVm57Y7jqbaG185EodyHF5YWEguepzPCgvr1wiSTqdkiQvGVdJgDEYvFTWuvu4exFnLSceZZq8mUnz9j",
  "key16": "2Vrvquw9ZWHNRPtNvAoCLS19HDPaGWy9NzGPuMEcqJSj3Jj7PKbtSKQ5op3Sxo3qz1BuHJbeMS2nu9qLTjUUWT74",
  "key17": "3gHtnp8cBVUi9WJnufMyhCH2PY4d39WcTm1JMdaF27JxtdmuW1BGb6MNgs4mytoLucr8kU1V1ifpRdAyeGxzgixc",
  "key18": "3yAijvZToKcwb9wFUXCDZpka52LsinS4kg5Fvm9aNBeLCXf1Si5oewMrtrFfG72ZXHpeKK37LxwazTKTQchWkpV1",
  "key19": "3HNwh724yF4LCp9heiK3PCrU3jQ7ESueA46ZSkYf1HFcJZmr39TqjDFEc6Rk7ZTtk2VXSmyCtiamKVKtuMspdnaq",
  "key20": "3UfxuYFpxJCe9nwuvv4esVCaekQAqBZN9iWvLQZeksv1JwQycFEnenKBijBDtzw93kg7YijvgvgYsdP3WbqHoHFP",
  "key21": "Q3zJ6xepVU54occbNS4rzcg6eqGziTwrE5VE8SjzTGbjoEyY5KXTrMbCwj7hsTXqtJr32LxwahuYDz61jL7KT9c",
  "key22": "2VmEa3g8xfNCFr7G8rnTcAQPDSrsqFZywBrKpFSa6EEuGCVYJzj49uaJxM6gvNefRobxhASV1RfLDGW4SbKean9X",
  "key23": "5NCBf3MGsif88rrUNNbNPcpxnvds792sUhvjwVbQDMHYBvYUHrswHJAvZrfTUW4FcBUeEiYZxtLgGr1ZGp54WX2",
  "key24": "27yKaBLGLTRNCBZpNLSjumc4qXRn4pR247BgLzqkJDkey3djh6yJsasVEfhhBMY4nevm12m9xomWoBdb2ddmibMt",
  "key25": "3xNQ4UU5T7KW7ojU6GEgQHMpVSwD82b6kLvYcnds9zjixY2vV4AZY5WiTNRBgMWJ5L1LeBttTsoYEh7tgUaBYoth",
  "key26": "GShV8q8J8bvgV3wboHNVwpUBemr2VDgDVgjwDfAUjXroMgM4G58WNYd84mnprGgUeLf9UdGecqbbPfj56aP9NC4",
  "key27": "3VA9BBsxFsL9XQdt44f1JZ2GnFgbn79KjBVdn5fhsjwsUpAHx2uEqZ38HTCQXwQQxyeig79UGMPa8kaEhfChBii3",
  "key28": "4X7S9QKKtDnndE9ryBnpRbVdERJLJpu7YU3dArSwpqDA8kfcnsasAjNxqZCBaVsxPs786fk1XFRkGaSWfsUDW2Jp",
  "key29": "syeoe6fuKKXGg21rBAgF9hP8FtKDM2j1T4J7Sc4TxCjmWwuyT2FC5pcdc9oBkUmZQzoSGvg3E4ytXtFtpLUJstE",
  "key30": "2Xv7TP63w2FJUNVwhaQ9xh3Y8YvSJeN4EJkiGWQjTMCV2N7YW7NazL5zn9waozmgv58p4wHZC6Tfy3ZPtC3k2bgn",
  "key31": "5Kb8xu32eATWFEaprUjNTsPuBpWJw8ka9i8GTcv5LMMZjhupKykm4FoRPWQdbH5C1KCthsRozTQBCXiZrb5WzZkG",
  "key32": "3DTGmvvkmxdyxvVUmKMRchd84321QMBhMLzEZyZ9u3G5ZKxgN5RdZiC9saZZf5qewhKTdwT5GWocSX8UBvGsJFWz",
  "key33": "4ncDo3Q49pXeGdrfdsm4fV9T3GMtEPV4B3Av4p7Jpk1RKJHphCAe94faXZHVdCRZSUkZfnZeWHpa43tHWbcCHGTv",
  "key34": "34yavHGa25m1A8rECes9eztHCzMnz8oACpLLy35u6jNGcz2RerUbo5xcD9F7bT2s3uFwTq2oqWNfCCEKvZp8kbpn",
  "key35": "M9CaydwR5fLvcPkdNQb1znbfSnZ7zvYiKyePrtJdChNSQhrYaCf7QGkjuR7LtSSrEtdtyVp8qb1NegAEnryDEn7",
  "key36": "632734bU3ZaCr4xi2C2eQihzqBL75rCXBuFKGBRweP7GCUwSdshWfQLjHQimeCVrunGmAq23HJfPZSyTp1in1JwC",
  "key37": "2vuZDJPiWoVZsKp15tPWsqu3ybQbzozmbQd5UEds5uuFufTQGtTXBJjrec6g6AycBFVdrhvnjSfALBr9LW4iPgpT"
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
