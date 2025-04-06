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
    "3CSg9nYMDQqKa5M4EBXPaPTZYHZzzXechKjKwsaMrRA7wHNq8ikWSJdDEEi8ApBr2ZfykkEMVJeKpoqvEi9WvPYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7fUkLtJ6ce1HEsEWkwk614RhVpG3bSV3mBjrhhtaCNqvU5AXoVESjKRCJ3QNY7BYQQa8p1J5TUziZxaew26Hoe",
  "key1": "4Rk2GUpcebGv95DVEtPJ8zJebQpQcK5okq2XLXBjP3Re4ff3NLDLbWuPC6rEziHXjSbkyFReBwi2cBNrX4oMUpGD",
  "key2": "2BfhpyLmiU8rbhnXMJum4bnyHV3n3S6jvyCfv2RQurnhcuhE6zqxZUMsPVDjZoqYXoSYkyJoMsoV2iBpG22t8BYY",
  "key3": "4uQpYRnuP9vzsrsTVcyuQMPnBE1oGaYgg79pSsLyWcxByqa4SCnZ65qzLZ5ykEP1VE7QBrWEZBWKGAm6DBD7echZ",
  "key4": "MaQkZuJw7hYGRWDCVWvKKjAgSzeeqdVTTSyqjQmxQzEx6PgiyDCE992yBxUhKGU6EFDSVf3nZEb72hPQeVNPKbW",
  "key5": "3k88hQMLN1WXhKdCFZc4ucEup5rU2kvfBYBdcN1agYn9AUMxv3wGHsdThV8oNffjn2hkHyNGd8sv7GCym5YCkjc4",
  "key6": "538ukeZCA2653Sk548hQPiTX6qq2sBosi9QsL5jVvzpGQFSseHUHEKK2N8UWLdKpidLRx5LWV47ddeFfGR64UyRc",
  "key7": "5kCDF3aywQB3NX5HVVkbn2BaSNSSbKZzishzGRRoJLy7HE7JhQJ336QBJLh8Eo1QtFvb7pX28NAKXMATof9koTxM",
  "key8": "2WTeT3S2w3UvxRfnqM4ikUCra9NTJJynZmWqffwx9iJPaarrTJFTpPGMKvquyB3dju6hHL7qjj2sGNvQG9kjUfvo",
  "key9": "JgrB4qwPrX3NHSrg8RMcdR1LTVigenF25NzNj2DDnCEn4hrtJpnL6RVjmZncbpkzCRs6aUwHKaFBLFKkpAYxq8K",
  "key10": "4rdV1fSapzGZQYDGeWH8mLPuAhvyJpCLtZLmfGP4jyoGRxo2nVYkzA9nRUVdmAJRoFLvccxnLwiVbRph7sy7xcjx",
  "key11": "2t4P9FVuPyTL38pkXrwExpqHbhfwnJe93ToWH1SjEzVKNuwmV59tQgQiaSD6oMWotmFQYKbnvh9618ABrnxF8Sx9",
  "key12": "5sDpp2bM6SXJiLWsvj5pUXrVjCUn5FyCNAc43Ku68MVUvFJfoXpa8mbsvufPo4sX3NBhbLsuSq9PLPSaPpeL9Aey",
  "key13": "3SNcy2Scv53yZ3p56yax4dhq4pm8RWuDbywa5b71ycwJgVRymDwoNnYSqU4NbE7c2ucZVJqxsQQMGo5Z1ZCfvEaw",
  "key14": "nCUk9dk2UjE1TZbjvwQz1bqmtNiGzfKKGA4K93LKo32d4aFdefiiZMc9hZfofTF3kfcvgMNp1KT8CzmH8eSbjbc",
  "key15": "62FVYwx6eeh5bKciwarf87vekQh8VJkCfDoE8PuedRaYGGKWBC9zE5TydBSato7ahVgSH2ZakxNeXcFERtHSxr3G",
  "key16": "6RMFAzeaZ8fqvA3UufMBvaha6vvWPSbmYwsEsRyEjKdynAvAMuYw2WbyhHExRZVwoNwXvP5LzP7hsyeEePTRiVM",
  "key17": "2oWedrtxgFBewcUPp7DXCPdacnHbs1wZFTWRizxK3pz2GxJb7sCT41EWQTGmTuikSRhngNmBuVA9haGxmZP4WUNd",
  "key18": "2sB5tm5dtKXYoUjNcDUiunmyA5vkfFPEyKV69qLegrZzg39jDhKY1yDdrGXd8PyQpWSybaRtYq9KypMEC7guDvvv",
  "key19": "5Uhhg2g4ebPq2WyGHDRsBRM5UfhhxYkj7ZHTQpJy6HxZVtHKEafFPAhqPbbfdbjQ8xzTawSUXRK7GyyAKpPiudcW",
  "key20": "96FjQGaxsHJKS4cWk6NKwq9TxBr4pvwNstujXEnBgCpv67Ukm47BgRe2k3aPXxevoHKB7PUX23vqfXSUExb6GKB",
  "key21": "64QZ64oBuTYYqPyjcaDxtXZZjpzNuh3Ut4bZpQMRJYz8k5PaUiWo1uDxUz1dhEEePcDPPjP3GMXEvMUjv7BN5dUL",
  "key22": "3QvEE8tZmyVHbJpif9MpW8MhzXYaGbyrqx3tC3twTAB5zbvy4wAABsEEgRru3SyDELNjEzja5zoonvadA6xAX5VA",
  "key23": "2e1mXzs6hNLEXU2ifaVHR67CcQYKrtbmZBtwrjKnHcRXe6Pp8X3CV6BySAyySoELgWN3Ke1SSZf9mtTvXotLPHmU",
  "key24": "4rMdEyHsXoUfnajcD9whGxxoauaAL1V28mvUuEFwEJ7v6jorAha99QumrBJT8v6Y3rmVMd3XGfJeyFcbp69Fydea",
  "key25": "kiTjMwdGWHdyY7PopcbmynDXwd1wZkPXXzr3XZpepBFRgFoLdHm8QXrdQH3gM4t3b43eJkLmrusniW9qGadSGbN",
  "key26": "5aWwnKskJ8ZnhCAXJxcVTcgNN1Um2N3f8yJjQRut5FpEeTAyjvww1Rq9CdpTsC86Zkt7rYbq1tQDPiMWqw3e1htP",
  "key27": "4ZZKAupBVZ2mrxpaEv9CUzZguSqdXzJk4aQP2A7NvFR9kyyExa27mY5K8SfWAApkUhBHRU5XDBxhpxveGnBEufjQ",
  "key28": "59rNUGfcDu8EWkGCMuut7fBY2gbY9FdnsLAxYLQpLZT6EkPjaQziTLTRHhNibmXVq2qnxkXTnu4a9djYLp8uYwzF",
  "key29": "2SVJt4qSEBwkuCki6timWqZgnU5Sr3NaKLbh7L9bzU1JyG5Qp75jxxjCcy1FsMbBtimGFFugwZR84NrHMpS2nmDq",
  "key30": "3LZwkSUp5jw4QgB7VYcfwk3Js21G5s2MH4no5xRnZuCyHuFk7LuMJj3RAZyWkbmq945anA3KrW34UtfMj5WtYFui",
  "key31": "5GwmjJuwwbqkVBhN6AvmqkpmgN1arU9EBC4dfR616a5iknc3x2e1qSEobd9WmrG4jdjNJrNWZTnwteHVT5s5G8xM",
  "key32": "4PcmAV4uoRLD3ifKGium7dS5RsYiFLGYrG4jEBJc6sEQg9ttq47qvGdLWdfmGEz6tRTr3Ftm31ine3C1kGLWR4F1",
  "key33": "2HZFEQik4r6shcAYR2AmPkVaNA8FRCoSj8EXCLcxqLwnYikLDfZbCoPQYbeSqcNJBs1zKn1heAdMY9dR1RsHBm9V",
  "key34": "mJ7a3EpBd7cDbLMk2oRRgjg8BNgg8xA47kjmu1CHYyrtsZZDN6K7ceWxZmchVu4Wqr9jUhz6qv8NLAWtFqXKEZU",
  "key35": "64xyCcBVSJcA6ymztHHiqjRPzGBB164TaD1vssS8gYo8TsfWcAt8r9Eoi2xu6kuZV6WyytfbiWyNngrokuCe13sy",
  "key36": "fo94ywQAsuaN5HxdyKAEnEBeNxwzx5NfXSWiFemQYtpmfYPU5cy2TzWte89dWXQoTphByXmVSmQb4iA5HWDSNuQ",
  "key37": "3xPpnZwtksoBH1UzZtoouL6aqXoJUq7pX5D7NVqZcJxHmzxmLmYe1XwXewBduLudMQ4rWUwq59Q2y3fvfJ1rwLWU",
  "key38": "4WdMTr8DuRZnA7XKz5Bzj1xxFo5Dqqj9habtvvKso9Y3ztxDTD8A2a36vew8HVE4tFBMPFLfRNnoecTstcwQ5AF8",
  "key39": "4GbNowzwETUEUcP3wTpzCgRhhWxDH9yVq4SdKkrQsYo7SbGRhVriwzqhh8BqMURD47FCf4NAn5Xu6zuBEMjJMCrV",
  "key40": "2rUWT2A3VMa72z2XGxCNKB2UoicjgfNvWrD5JvBB44uJtKSx8apje4FG5fBKxYgDf1QJVqJHtmghgzK8XecRjAfA"
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
