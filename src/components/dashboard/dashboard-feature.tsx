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
    "3RuqXQRxzpQxd6a7jpgtxHNufVU7h8EikHkHsPedZMEFjZygoDUY9rCkpo9cq4YuTJdbAhH94m9DGqfsMPB8kMjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWDQ6z84KAbZD9mMEwARe4L7zi9NLJK7UNAxtuR5Fn4UGDWbTTBsdZqauatkQ8y1nXafkqrZaBaZNQBXVXtqduR",
  "key1": "2Joyq3yx5ZSwHjMNMhEe4oMs28VUWb1UX9PTaRoFjKadDbV5QSAfEAijmyRJtH1RsT8dt2KGcRubMmqaLwk9YmwZ",
  "key2": "wWG89yMVhD1f9LyjC5h6nExv2jR6pdo6Hr6tE3bC5iKrMrUFTvbAFprQ7qhjNjzEz7JsKqcatNS49E34qU7tLBz",
  "key3": "frSBUSXTPbpoPCRheyJftr7yQVLXrDWaFCMfzxKMN2JQmHzJzRe2o6kUqmS6HP1xhipHPdR7HWrZY2d7GE35ou5",
  "key4": "5gDApuPwMVrMjsvLykQgSXPvFwdWRdbPQu1u9PMtXtXSXQxFoqrj61vyFpMrHtGcNYhaD8pnotLqkWfDMGrARMfq",
  "key5": "EHhkeo5WF18C8yRK8nkEdBMhiYUbLdvEvsGcgTfPxj5F9uvYDcGh3stpACZHEcLDHPKwi7fxrhYi5GUUZACKT2f",
  "key6": "2ZRzUQfeMgNWQqeSU6tGYGjkj9J1pMVzo1HK918vZiU5tBfr5fbJB82XPRoiv9rzw1g5TyBaeCFJD9YGUQBTpZcb",
  "key7": "5WavX7roCVnQZFdVLtHZui7ML5i7vrgBVQSU9QtTW1Kd8okaK7gMhWTK5iaV3ZTxiD4xefXwrCPaFoDZDM24UH8H",
  "key8": "HZVZqgPMSLALLZK3RwiD9JH14mmP1BXDi4LgN8QoZvXiyyL7k3EdACH2cXPxdozrEpbrxLhe58FfPNYSkX7jiFT",
  "key9": "2Hb5cUS1EPhFjpmcePorFcZsUM1vfNw4zArkibDUTaRChh1SqqN5Pd3Mu5xckE6t5amxfJ5PvAjWqydDZsaTs14G",
  "key10": "5cjKo3o1KrpWf62pogJfGkcaatgsZEhh3vPitwNVXGevN9QzcvAAx7UUtDdXrAcrpcfSJfEofQNRe5tEoJUDfFp",
  "key11": "SN4w5ecHpW6vp132phcArWk7RTQfc8NDrCg7REwkaqDwm9SVRDwTu3tYJFtpwe9GesTfaTX8oyRoG8X3dzi6AjJ",
  "key12": "3eQRNaXDg2eJLZuzfP8jKJxTZtpkjQ1C3D4gyGjg5phkPQc65cgd3AWJrB9c5Gi9gykCJxDokNiK4DVPTx668ktt",
  "key13": "2FH83h2GiTLPKGhPh82mQPUFNUxraQH3pGV9nxWgbW3QUPMX33DzcqxkkVhwCp3iKA1d4oKRFxeK9zd6mUbcMna9",
  "key14": "dPxVdFAHtq6a4sxj5RCr8BVkVQosEcNue49XziRpFubCBwb3mXvQD8oCDVDtyoHJKkFBq1PUrB1CDk8S7Vq6Ecw",
  "key15": "2vjyHzfKyLXQoDQBBpF4whty3HjzT99rSdy8sU8NvmvCU1FupJk5rJ8c2kHs6J2F2eBELDg94GTTihqyujenCtHv",
  "key16": "4n5FhvGRmGujH5dk2PaDEtjUbf8L19Psi9A4aazuGpAF8Kmn6tWAKMuPncKCvwDdXfdgc8HHDMYGtym2LM1hDaDU",
  "key17": "4aPxprF98AxmJBD2JHknXaSupicKaSdfpvC4PTcK6M7umjw6AYYKg34EEVuAZQdZPst4uBMNUreB9Nub82iAPVmG",
  "key18": "2fbcqS9sSRt8wgrbU4kaicFtTzGVYvxcd4asd4bXkYNEZXkEzyTkmiiV8Nm9WR9qjshTKYryNKmY2n7sTxhdKoG3",
  "key19": "5Lp2Cqv7q6EQC4ezYPFqZyBtJN4S9dACfj1FsxRDwfqBNM6Ws3wbFxnQPqc5i28UDpLdticosDBx7KYLjRGfqRsT",
  "key20": "2nXasDtHjTMhc8mPSwUNbuPXPDTmNm4oYCvazioYevh1CUvZYp2U7UhbQdHMhDWYQiypVWEJiKffREhCJ7gyKxcc",
  "key21": "4FgsPkLQPWipePjUu6C6Z5wPqJMZy9qGpKyXVG91fVGi8kxyUb9sqRWutmE2pA1gqLhQ2qxCGz9ZbQwSkVZyXpR5",
  "key22": "WnjTzSYAxA1ymVqME2AeR1nN65p5MumfC2Lt7XcU5Rw6MJG8iL4CR16MHX1UsCD5of8wADkwaanQh2TX9Y4id3j",
  "key23": "4Gg4ymb7u2FSx58jU1FFv7wHbmd78BBT41BDLTMNhMjusSonjqQHd4A9TtK2aBG9m6AKqADMjtczFdJZWfPdFbLK",
  "key24": "49KMx7TB81xte1MQBBiuHgCDP4oUA2jj7Zn4KtAZpwt3RufhzqBvi9Z4eiqGkJRxyq5XAybrs3pyzcxeUFADqLMv",
  "key25": "5NZWjuTV9gmWJTZ4tTphjVdgJvFYwMv4EPJvLygDUcKkto3fF3m5Eo7PeLUVw7v729ihLmv34atKP4kokpqmqE7x",
  "key26": "4NCS7qHeuGtDbHSuWgdYfx1UQVu7cjDsu43y7HveoAiJpkSKS3JwoFpN35gXW6UCZYgFEtXw9uLNzeQfyJqCEGFz",
  "key27": "3CnaqsLzuc6WtgUZfpZBS1Aq8nZEbbSdFZc5oAbTSYYFi7geyEVkTYFZPecg1vKjoiFXfMLNU3faR4t31Lgi1Ec4",
  "key28": "NMGqmbPGBQ5doctdgReZdTK8UUR5evn8kWB5f95uhUwxVtbUqcCjG7CbqUeVq8NeZbnycPZTwBVXvof4WifBKJY",
  "key29": "jPoreaoGNspf89Fndkiotn7XL373f21u44yBGPpLUSEZeoAKTQswCgV3PSfLi1rKd3wkEFDf3qUMmggYGExyR6Q",
  "key30": "3osqTVESjnpRooxWfPtZ7Hubme93yLGPQAgSGPfevNQpPdXq7czNd6FEUTSQFQbRZzdtXrUeVmxXaE8AjqFecUGU",
  "key31": "4Z9yrWSGaGZtzGpTc5iZdJrK3ssjYeJ11NZu6RyPVnne3KfgXWGwoxRrnnNMWCPzBvfU9RmD1awGp2Axuko7PERn",
  "key32": "3pJw6A4V5dHsQVibgfJQ62hExVksU3Fs44jrk5JDgkgby9fU6Gs7Q9xmNHhSvvuBX3662A68mpR5T9Km7a3FaJ3X",
  "key33": "5SW5en9mRD6vejRJgTos5jSoGoeJwUGZ5nmMZTZTKyiQ9pXBtYSQxs96bQEQHWyUQQJYKL8eGMzvnpLUqN7wpkmP",
  "key34": "CZyFroi3fGRCpnUaFT3eNETFLQ593GptDXrHpYZxLyYqcVRYniAJGNbMhNpXQFHdCHw9PLhSh8zKNrdiMdCefEb",
  "key35": "27ioeoL7XLAvCccj2vZ9CYrBfuYZzbHgLdfKhfm8AMVCw8UZUc2cqTHaCGxju2Xf9cCwfBQddPYb8GjpUZtzXUUb",
  "key36": "joNvAge7ZxuJdya59rf82tu5p7qgJLGt3bRfwQY4peBh2JSsVfLVCTzSsQ2GFUQjnqgHWruasy1BseAKP9jTHoJ",
  "key37": "3wvhAvFerXLGHD4mr1TSmLvQ6JQc1YvWMUGHbibxt7tRxRYJukGCV9eTFrkZDMw98tPLSBmh76WzfpALh3Djhjgs",
  "key38": "4cwQaqLUzJQdZsoMQuGokDWjBGRESbfyfDTZZDnZMnUWXhQqY8AmUjTYXrShphY2jcMMUeweJL8m8PzM9BsPSBpv",
  "key39": "4XQ8LeDzdbZxD6ENZxeDE8HTCexRzq9Jfi39qXUfZGzDL7sfxpPJXdUrKgEDGtcfnL8KGhpv1LAoS5Ta8q4X84nm"
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
