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
    "6VUuxCxhgfwgGVP1A7qRfEnJfsdW8GtHnTXjv1NGUE49WSBdBuTyCM2ZnRGeBodjQNBabmjRV7MXuPkAeNhL6Mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Tr7DaU1YWNmGQcZGiueuQtabhFLKEoA4vw9Xdt18d9cCJZkifY5ZZec89LACivxK54Gj7tXX1hT9qH6MgerHzE",
  "key1": "tMz9jgfK687M5fo5jVSbWsKz4vyujdRbqNrWXcmgPYh1e3UEBbe1fxuoECaGV82b3yodXAzhZJ2dy4vsnkDBb98",
  "key2": "2GwR7yceB8RkZ8JjjBw6Cj4Gj1BbiJre7UyYSquu6f7VnujewJotGPyHf18iiPBGiKxb9Yd33rBW22gWre1rqzKG",
  "key3": "cihks3sAWmyB6iUFsSde8YV2vsB6HBqi19Hq3hBdUBYUXXWzEJNUZfJZPxLfQ99rS3nhvxm7wNfYP6eKTtsaAdF",
  "key4": "5rMqVpqqJYpTKYyM79U3AzqFSYYn17XDngkrHzbUoG55jzPWN8Fsrhz3t3sGv7RJKMq4R89Qks1gEpsCQTU2oaTN",
  "key5": "PVqnShK82eCyPcNi6JeiBhaQ9f8Qjsd5AQd6pMXyEBjSraCkdbhNKZrqRjFcM7oFSyQALeKZGFTD3QAVarcUCpJ",
  "key6": "mE4W18houw9iZrkje3a8ijyetGHvUQEGRZpfHywww8s3DSH8HVKaR6in7pVL2QciM1nqxDSak2o3gAb4rAU8EYr",
  "key7": "2Xhy2LRShU2redtGCLGbGrynv5YK3BmCBNJGtpR5yW9YrTsNN6pUCEydkiAUFBT6mQnnyB58VExX7foDVoPbnoWW",
  "key8": "5Nzm7hLNov7ic7xJbsCoGVeei9krp4F42qmukgDDDFxpMzwdyX4QP9kix2SYSgEqbndCCnQY4CdpTpXzBGQGPErT",
  "key9": "3Vhu1L4Th5eLk8PmTkbKhLwLgVJdwiPRJLLFN9zY5sLossxX8M1iHew9WKkQD1pfWhw51Docfwu8kuUK6ZDpxvGQ",
  "key10": "4ugtCxdZyth4VAqMKnW7X3P7i9D7Zjh7CiaMSm9P73gD8rLZvkHbLEUeCczy6o59wh2roHqzW9KymdTRyjDYakpq",
  "key11": "2WtrMiQv8J1ezvSEFG18Aji2TFiJnws8Yq271pF8ijhsgrwAJ7mLfqXzsP7czVUdfctq7bjexfe7ZEvWMu8UZYuu",
  "key12": "3c3mHyAV8HXZ9ZY8HdbMRomX1AUB6VDLXivn8JdSLTdmxFYtcCiHQmx2am7WG2gkBnDnqApMnobnT7onmefwC28n",
  "key13": "k4oSYbZRRvF5bVhAjLftrZRhCz2eMvfwE4SnKsXCQKVJnnmDvzmmchF1XrxJ8aa17mkLeE6nrwR5ZxDpCsuCLrW",
  "key14": "4sVdcmbszhEi7TRnHo72HZXJMMrn12UuwXhQhGgChytG4ZX2cMnYvHaxqJT4MjjUxyU2rsmoQJa9x4wSFxZdJKkS",
  "key15": "edMZkPcf6qd7ym6vjdXEoqSAFFBGWCGqWcsmoffHmPUYkPe9j85KkFQD1VNDeFhY5xzzeMNLGni8YyXbHcPiaez",
  "key16": "2ihbeymJ69uJRQbQ5HTHdPyTvATYY3AeZySrcVtTRckfRHEWXP4G42iXiP5a7JZvjuGk3DcC1uPinPjVhssvsvMf",
  "key17": "33rabuvsbfdruC9xyrhabj673vDtF95ajnvvoBSzCg2BLAJT66sFAvN4PQtyvfA59iiaNDbm661R7ncFBbebLwQx",
  "key18": "4WsZmMHam8yxhdyMARtnBMwVC4DQzPTPF2yirep1WiY13xo8ffw6oSWBijp4GARNca7p14h8hXUKKRw1Wbk1B1Ab",
  "key19": "m6KymhD5AEjASUYMWhKmhaCuN1xbcPN1qStpbSzCWUAWp59kQNDDg1a8t91cEu6NNKt5iRrEnmMX4ptJMN5JQ9v",
  "key20": "5m655w86KLA2c85KKtotsQBhzKZ4kBeVXqgiHsZxZJ6AoTKF6RooiMDjk6AKW5y2tVLU7haALQJ9ApwHvMtQn4Qf",
  "key21": "5BY15cof1762cZ2RC9jBtXg8YDdhfNBDzajAtuga2vvkWGzumvCxHXKhQtiSsoUHxPESoiZWCGxPrGqDv8yum5Qo",
  "key22": "5j7y8yCHhTFRbLtVEc2yotpqp8kszP4HimR7Q4XiWmapoeCfWLfzrLGhCys9i2HAGgPz37pSVJjVZswyYKuYT1iY",
  "key23": "5sR2nsUzaQ1homrbYbH2CegrCdBrHRSgPGSzud21otuyJL3LGYpQ7MoK8yNU9YbrYzWitgkX2JjiQu2cZXdPuHYX",
  "key24": "433CD7omAuat2H2cphbHnPJoZSYHDq4bMVMNo2fEmLw1XKKdif711CBvaGJy7oof4YVXezbxR72RD3ytiHYJYYyd",
  "key25": "4DquJdQcb7qicGdfF3sC8ar8THLgxL2JNsRXgoy2EeVeWRjFKYGrVmetKET7UzN2gue9hAa6mATz2KsmrpZAa5mH",
  "key26": "4kfnvKmFiDYe9M5NhATRBz4kpqojdFYUeABhcjjwuQ5Dohnz6sgJbHYjPoPY7ahLgVSKjS67nM1BdraEpH4Ftycq",
  "key27": "3r6rDr4xQNM4HFXFuAkTLKKN7Cesh9sGHFca9VmAoKa6n6iCYdG9wgjk3LfqZa9srKd2pjB5Xte9svyH9AUmb4Tk",
  "key28": "22EM9FBYqNbyZhjMvM5UZtKjjbsvNU8uEHMm5ogiDnuBeZE4xddv27TeDSE2CDJLNyRYrAe1KMuSEDbs7Hbhq8j6",
  "key29": "2G1FY6q6vUwHMpPqsQBmiV9esxKp4hCypgvhTmFje68L1waKqA8EhkcPJqCbn8MgMkNetumqRjxeju97eM4FNDPM",
  "key30": "4cw87uCe7FQ9CoDpsJsfd82mFEAj9r76vzy5C79mdMyo4iHMzmMGc9pwXoZhgLeTp8kgYJKkXGTx86T9SkxRsmgS",
  "key31": "2YChp1g2yTpi6ZcpukkHcU8awi16GyM9T6tXWbzcUH5EdeF1XpRAx8ajgSBDDnA1KXHTokKdJ4ojriQvjcmR88YD",
  "key32": "27aAP9ud2FTwaLnZ3DBxGo4JAZw4drnE1vpyXQE5fgJzp8Li6YzR6V8spezh23xCrmyfH4WNitA3xv5McU6qnZsK",
  "key33": "45TgzmrLV1M4cwRJLtf1gWfFpEMe3jBa4u7rhtrBBvi7EAN1sCacarSvmRByjmTZwppeoYV8D5SXLWqV3s1aq4PU",
  "key34": "5MfMyxQufFz9St6JLYt4EgefP8wiJLUPQsbQyXBcNEEhWdtFtarKnivhPr91EXPx8a2za7vEJ5i5MsGu4FhAXjbj",
  "key35": "44NCmz87aHikUuXHqi2oHkfNttb3Z1Fkq7hKy895dbQ8aRYuBgGiSoRHQuCd4QT6aT4LXJ48Huo3NxphwCXkUeWg"
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
