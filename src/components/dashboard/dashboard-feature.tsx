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
    "wX5AUPHk9PPseSUCPaFLxDTV4U5so7q1wdfrRiToH8psULNxpM7xzbaxPTwy9Yso3ThKRJtHMorj21uFhwyDM45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fh8u8Qv12pxBmT7QZUMASL4yd3KsWdQ43qN9GMH7qQYtbb9YnRBtZ7rujW47aiJ4sat4vEo3uMBnpXcXjquw4nj",
  "key1": "5N8NYw8kStjjecGDX8WuB1VR95T98F9Ju2xp2yPfty7Qaj3RpCshdS1whfkoCf1Pcuf6uKjzFqjayqbtAcK9hGx1",
  "key2": "5uexVraDfdKdFouugbJXfJQ3mnaNek9MHFFtdMArJR2M44YinFgmzScfQCCwLY24HVgVBX7Cqp358FwMa8GyEQqq",
  "key3": "5qLeqx69Yf2MtwnzDZnbEfR8nunDUi3kixQaJRS3qYfDNLFgMguMihq2soXU4XeuonRuAEUTh1fNTkCkdzDBdEx6",
  "key4": "2T5bdbvZDGWG9XU49q3RDX2wuZ5iGj76UniJhBpUfzaDtVuTTukXUvnGeGBbuKt8oWgV81FUwXoEhp69LcMW3Lct",
  "key5": "3zRGEjv9DYAmUwXX4eqhe1RtvZpo6K87afKD46DwqCmAB5bNQ9TP83SoaB3Sg2PxTPsmedfewGkESD7Fn7vs2RkP",
  "key6": "kQbgRAz5HSXehHHK644mZVfu8bRqzSqYxKP8eXdqLZz8T6yyqDPvoMRjtuDfZ21E5Y8kthCQFWrCnCSzBZZcgwf",
  "key7": "3aJKdfNBfzjL7UWaSFDh2b4RpFYGCDAcDRSqFaqNqSfoNtTGQLv13XMK7tJwUTkapKELKd1mW55NSTsf9herCFXa",
  "key8": "5BYZeKDzPhPn2hnKcwnrQRQ9kMaUdvziPFnLJTBXJoVHn8m5cHyBADeueihC88i9tyHNWTc3UCN3zePZFSYcJFM",
  "key9": "4Phj5AY4gdxFNMqoqo6BxBTqm7BM238FaX4QynweSRnArKDSN7jLQAXAsTxpHj5ipqvVFGTmLNcryhwsamjFeAqH",
  "key10": "3rAy63eF9qtq9kdH7XECePUk6rLcqVrMtt7PXJYNb72MQdHQnbY8rcUFUTBUxWdHvyx1LA1hJPfcWSALRccd9mCK",
  "key11": "29bbgFazGhZ8nRy4vTFbX4r8qejakr9d49SPwcCctyYmvppWL4nKnYuVFMj3MaQi5C8k4UpFpJsHa8BpXo5q8Pjb",
  "key12": "2A117gDj6bmpWPfssPwmpBfQTso9WH3vL1E9v1UAPQBtJMgwQM2VVfjVtHJspWRuZGWUrvssERcEL3YRSzhVhDi5",
  "key13": "3wBMboavZ9X91R1ox73VD1PkLeVu6H2m8kgTyjT9DTXz2B45YKxKhyEPkFBRBQSeNkEUEiA3jmXjD6Zrg1f1xbKp",
  "key14": "2fyCszVH66yBN7R5cC5AAUjGBcQ7re49f2fYUhCN9ghHNMPEiCDEGRyEAKKQXKyNuduAPwNiPzbf28CG3jYcgonv",
  "key15": "aq8gTFXsEyuHHkYMKzi79QbQjaWj61TDR8sx4XBbUPbGq8gXZY7GcDjWJoLEWzdk1F67BWJZpH9cFVTvkeza1ii",
  "key16": "4YmkMk3zdpKfojB2HwrNJVjVeuhicDFekYhWKgit41iRjk6KJm6SVRD5PpbPVvFoDDE53yrN5pTiLHT2hPAp5CwK",
  "key17": "29PY61hRosUbVAdCk6Eqq5whzms4iY9iXMcPrhuRKcEncpYXgp5LMqYJnavnGKtdPrhZYAGu1nHjQd5avQ2CmiQq",
  "key18": "4t9pBdByEq4iUd6qLxKVW2iyVdbcbKDGNYCtGVJAwcBjjRTJeAGX1uysUZ67UPc54vJHzGygF9eeLaR4B6v6yMCE",
  "key19": "2UcmBkiCtXdwuQ21aLjrA3RGHx9i9K5YVgkrZkfP7RqjfyAEV3W1wWFEKsaF4q4NydbjaHRiKVh9oyy59n77Q6xV",
  "key20": "4rxyCyERtAkUYmhHfKpszfd6Y3NpN5w1jLrosT17BMV5JYruS3KNu4JMAjapgAL2VQedbZNUsbbajuE7tvGLwMUd",
  "key21": "5hjDFVKCghoix4cg6tosvcDJgMrWkompGm92B9hnyXXHbGk766E1nSwDynz5i5RT9A47mwUaTk6GBSQpfzpGoPME",
  "key22": "4QUm8bqDKGWvqwq4z7dxZBLpXX6J17E2oaZWGVZoXJJ2W6Tdp143Rmv1QEv825wW1ZzF5PW4gt4jEmKk1RJc2cHx",
  "key23": "ptAJBhFrv5qoApwmyyWLm4GAreTmzU6VM4TPkydP9d9qdj8yzCvUD14UderUjAq7ecQa1CAqvMHHKP98QZ84vrh",
  "key24": "3PycuevBuiddUMWzRqoky3pb8s2h6d58BRMQcjKaViMMLjgBeRHcgmLreQgZ9eBY2nrQ3mGcnZ2BSWuUhFx68Nqk",
  "key25": "2PT651d9ud1EhQhyvzXQM1BD1vxvzCUoX9WoANK1FssMi9yM7mVxFeibeaJabJLbDGxvV19QowHnjKrSL7KSoETW",
  "key26": "zY6A4kP5n7GZTtzvD26fDbrJESm9NVVWniZusBxiLB3WW5u6F8dnQtkw9pUWWN5TsMrWLqKULjqX7xtACwYvdh4",
  "key27": "4xYpAKXdMzcxMRgpo5NVK81GxBujmNuCDwWS3rULMp8NZZiA8Puv9ZW6NAkjE6NWSTNoY1yJVLZygahraHmJ2UDQ",
  "key28": "2bHwjJWDPWieiFtttfH93f7XAqPHaXvcu3py9378qbnCEvS2omsNddUmhaxXBAPEBe7coxnZAdRptH9Q9fHAhxyu",
  "key29": "5ANvpBpvUGFZp6WRD3bt7R5K6cGNBmXta8FLMahPLsBEGB1Zvei1bsSi1rdtCJPDACHuRgweDc2rTaqEVu6SrH9n",
  "key30": "52F3nTFZ9PNSxg7UqtgzRXzzRmkYTiMZ9KNhAMcRgArDjbskUnZoco7SiEqmFE3UsfM5tFppYUruFdNpgLzT2ENP",
  "key31": "38Y8zy5YbayTdLugXFopM4ckzGcNmsL88BZ5wpjPkDhLaiPmXL9nCebhBrqa3qtPtipZJAYBAJMqorXzcqV4e8nJ",
  "key32": "MhzGbL95P3yA1FqDAzbKgq3QokQGpn5LDiwze2Xw5jStbFE6r7uwFQZqdzaLSnYaDA8uuBZJxehn3eTr2ayiGRt",
  "key33": "2Ju5uT966wd7PFcy6KMGxUCPMQYBo2FFwzJwjZme3A1NPzSHdZTSw1czTqtscje9NZuCRN1mCYJRPZ6JMcN6ee5f",
  "key34": "5DtyHFADHraciLbGtGZrgNh6SY1KghcFvUHr33qRxvv9WKno4sh5NNkJDMpX3BAy6vALBmEcpA81sokTp7pGPvfQ",
  "key35": "2QqBuJAZkiAcofXoeSQcCUPMc4ZZS929Ue1G24LduuZbK36ukmobyTRmW5RiYwxfwWYx4tMm4YB6kTtiCf86YDBh",
  "key36": "472aGZ4LrVQCQU3fUKXGTLhhcEAPWnvhn6gA9zy5t1Ufq7HEEbjG9MKXakZen9MJWT2T6HmYx4LqKUb8AsoQbkeP",
  "key37": "4jkWcizJkRVRMiqUc3DE8KeL6iKmZ9Gu8fKf6o7DPdSWnKZ8S3apayzpDxMtwyBa58iSQo19EfFPF5Vd5Dpu2nQ2",
  "key38": "4Xo6fgB5AKWVLJsJpr2wVZ3b2yMjzHXrFG2EUCihvMqhas7ALE7FKP7gE8Y21dPC62amDFaBowXzAnWwTQiBmUKF",
  "key39": "5gAUUd2aXbjfiYVHQMKAS1x4odqEcwWcaxGtkW9feq8LfDkA67Y2rzgxBzJh1LYcyeq83XzPLMbc8rHFCxcSyonk",
  "key40": "26xSK8QhRfSLWL97qugqGSJwz97CPkbA5sdyW392myFCSa5GENmJNvS63Lp2xn4P28hvTfD5qdehLjbAPhTgvn9E",
  "key41": "3wh9d4xFGm1ijf4gEk3S9Nc5CvRvxdWPTKaDQ91rYJYqrD4JarW3vxonio2rkRun6LyECymtnFpQosLsv2W9RPcH",
  "key42": "29Jco5BeuKgwmiLsBvt2mj69aFnh1zh5aJ5YjTR9KvzSeVDDUgwipvPXeoE9634m5ztjUyZFjXQzCuW8sAp13NJB",
  "key43": "adLJHTK6aQurBV9Veq8bH3ZZ1679h3zBhh27D6gA13FZYceR7YJ6PUzfePCCRK1Jgn1FnMxBxvKJLWgTx8cS2Ud",
  "key44": "2cULzC3WwEt5Ax2VwnLZwp3m5wygaZLpnCxWnwEASuFTbRqPxVRqXPi1WdLVGVjKqoQh9RRzCw3gfgbQGeBxu1g9",
  "key45": "38v9NesJYtGgUfsgo93RPv3wSCPAuMqw1fJZdKvnJNDNpPLw1mrtZAAJJK4wcSoWXNzgYuAoyTvZgYzqYRiyHyZJ",
  "key46": "2awWWaYHWMNWmPUCF54vbXcu7ZPqDH1QjNdtWJyS3BENg6JDrmEnPVE6fxqfQwdRzyCCotZaEPL9JpFoM4gg5A8F"
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
