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
    "5Z3RoQSzUN9SeKCBSTPabdK539w9YXnpKJvqYbcRNU4phXGLphwPRg8vZuCY33zS1FfKF1bwTvXXHyiEKBMPzK82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NT5gukXTpZUKBVNpxMAFzWP2KDYKi6MGkXUoP4yE2ye3bwQ7zSJnsUE1fg3KdCSdWcjXZ9bvrUKskfUReEhtMFB",
  "key1": "eqfdLpKYt7dANUByFgTPwrXbPnuwvmMJPFnMTCpXdKrfs8jW63GwKLvM8x9bmdHnsmVk68CdA4UexwwjsJUXAFJ",
  "key2": "3rQ971tZYuLgx76WivDVdSMvjrm5vz2djtGg6n2sPWLQD61uNj2caFfn3JinvPJ33afVLpqc8aLP5wjbuAERTnLo",
  "key3": "v65wvD3pYJnXQY535VMCME1cLWdE2hFTUAXje5DdnUpmVMLVsPm3CHAsFoED82nEmxAxkkmwvRfaweKxKz98M2L",
  "key4": "5gE3359vhEmZitUudt8bq8EsYYECZXAmL2a5BzHKMdn36Y4AmTTjEYQm3p6JXv4gDJa5QrHhnGs9ciR6gqHzU399",
  "key5": "5Q7CxdbVDEiHAiisZHoWjQe3wY6Q8V5DGQVjfqCv4YWhzjn4FaKDdcSupZEqMvUjnbcMKXe1qHAHoKjnbhZDK4Lm",
  "key6": "5Tdnnyk9usYpPieCmHpJNcv82TcHoJCBSSfRrhfiAgMD5DxTUPyxL5fsvchwunXsaPxenUNwnjELjxU2CW4iuCWW",
  "key7": "2e5VLJBonP474Tae9pPrrZawWQ23huxnkmBcz8ZPULvoNgHQh6YDFxZSAv12FyNSSJmUR6PQujfvC6fehXNh3rWS",
  "key8": "5SoTj5mnHPqt1io6uRTRTkkG51ne2RYip3wio2TAaZcRx8n6EVrnLtJm52BJ9udji17niznRjvhSRiA4xrEDCXdL",
  "key9": "5YGZHV9AEHL9xv6AAU9hK8amYvXqatJ5zvQWRgjjvn9n2vvNorCzjFx1KDXjtwDa28QVqzpmDqapLBEKgvx24qzf",
  "key10": "tjoaDk5PUdokb3g3DpcZvBwJ7Vegpgp5VTgg3oEL8cAr3SyrjT9GtEjF9Cy4izkk1Fz72uKSPpV7HTHwCVBjGqx",
  "key11": "wdE4c7usBYEm8c8HeXHvVJrTkVQpUELhEo25EK4fdgAnmsBGd6BoAWrfF5dtzEMQuKdPxEekHwgnwJfHurpRguG",
  "key12": "3tpZDaFwuSH3btGQPiDbN8dbuMNhaxSCDRiEwRRkfhrkVgjPWpBXbqXEbJHQGnkLzVkbTRh7kf2Va7p7khHkVBbm",
  "key13": "2kHu3Nscgjcxanos61AdKtAWEuwyxFDC2eD1dJ55rsCL1H316s7WTQFqjoJMZmSA1bwFkudEw1zZi429k1sUQCw4",
  "key14": "4YVDzTUMc7u8a57R2taYkqSM89tGi6EMKv59JtvKQpUyecGCg5F8xsrdP8fVTMjvqtM34GYP7PvSUTPk6cYdDbHp",
  "key15": "S4ogtDyQ7kZR24UiB6rDk7P8R1CrV3DbLGi3PxpLBKY9YJCnTpEp6G7qgeo4GumwSEiuYeFb38o7bkkz7VqEUwb",
  "key16": "44pmcBLkuUycwYDV371pNMfBaQgTxkNCsVxE22EEHQaymiLYK7Km9tpaBU2GFbTnQSLhHvfM1a258gphSmKwPHaa",
  "key17": "24hhRPSvfmMpBYwKx8eouqdA7cc5YUhkTJHx2Qra1yTkN7NMDJQWta7P2WNhggViUGFkKL2HVdzyUACbJAtNRr8r",
  "key18": "3KdaEihhwQPkWeBgK5cjECgJxE53NDNo8YYsPoGR5oFXxXiFU1ENr3UU8npCQ4a4WX13S7CcJSwEPAB8WCMEU93Y",
  "key19": "3dcL8Gqgkj65dnhgNMspcAizfYPGFTRVXimk3teP3vMtpeo9XSEhHW4MUsWcDFnJc1ihUyF7kffBm848MELcGj8s",
  "key20": "5PXDRRQYXZ63bZgWuZRX2nFg4mnTfzFGuCjuji79PdBS9YqEPAfdKKnposv5ruXezMagd6PJCz1RhuviC8gY3m5W",
  "key21": "2f4TXPGrCuXjEZzMtsbKXLYGqnrAPqbcLiZLrDmB28GctnRoUxBYm2wq5Z5bWZNo172dqyCSP1HPYDUscjuTLTna",
  "key22": "2n7bVvF3pt9j8ThazQaodF6A1rQ62w3nG5pkWG43TZivuxZY1bMuBA6gYSJpNGzWAXfK3CVkSEcm9QHUJCABXSYq",
  "key23": "54zpHfurDdiBJWus2akuaJoZJzT4YcAT6Tp592uTJXVUA617WxG3JTsFJe1AqpC6Y83dEEb5WRUU4Z5JAR7yzGcf",
  "key24": "2rNvMwQzy7CsWZkun8tfp4ALatzb1WFzEgdB6EVonHDxwEyoaooqgwork3NypRz7nUyADrXhCaP4cxu32mX1nunu",
  "key25": "3pFkyQhtzJ4Mc2o87HyPjkQVt3ddWxNP6asnXFpHSHqD9Rje15LtdjGLjQhPKX3NbLWpxVEXmwpejFsS7zs43foc"
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
