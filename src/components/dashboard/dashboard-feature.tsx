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
    "2k6v4SghKR5aWkcY6GUVx3P9sKdkSe36igqxn196MRmQteEwmmcCAeuEoDTf1X33eZx1vHyBkFKMFs7wFUy4f9Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7x1KKU2nPoQ2EDQxe95wJFjxyQfY4strU25A8fGrQkGqdQkC8xPk2E2ygd6cm513gR5yjKFzoruyuh1ZpmX7tR",
  "key1": "4mpaqRiqVFLfVa4e2M18N8xLRmaNyvfQuVTTC2VwGcwkLgvPM9jdH82bny4fr1mmqkANhSJydpkscTLwWJH9eZDn",
  "key2": "4mrpgRb8ermJwRzJcv4ccSzfpQN2fZxqgNnK4W2mQUi6FvfXepsM9j7gCo24ob7Ddh8fUvyiiSKznAdadGsWfs6m",
  "key3": "2sqW8FYKbTy3EuiJCvctf9bfk1qiY5ZmWkQjj1g5Awo84quXfv7b6iiZAaqtMCJfz6zx9cSux2JiYS5Gca7VUXZc",
  "key4": "4wjQMa1xKJM4G5vjFHqNJLJBGioWeyVFtirge34RCUXLisiNwRMJ2LdKb1u2LVN228FmtmJ7RCmRecjYTTaLnJV2",
  "key5": "4unLitEGkkTENMYxa4jogs9FpLLxvQAmmiKYSrFSB7GtG7n6jRSiGjLRHxvCh2z7BvrKHYk6hhgwDsvK7ZqjaQ2P",
  "key6": "4HnxByDSeMAPW5AAzUanyaoux9GPAP8ekBqzYgZHiKtjBRigKjLPwpkzTKRYMejNANT8JacEkdSFACsgLLsfNhbs",
  "key7": "5ZSxErCgDJecNPNaRevQ5bC7W4APhiF58wb2yvRYsKhpx7KZzaAReX7xWVLoXD6RiQKarPqANdzZHor4ASDVGEak",
  "key8": "2rWpZf49Ki2mfgdTBrMQb7UyC79GtTJD11NjCWUpJjBHw6HEA2EoZbAnxWrNKP9BGnokj2p45uiYcSozpckmYWWr",
  "key9": "3DPfVBYQiHZf2P1NdxKUNxEN9tzaFzPkktiAY5iNsTh5NNbw5VMZRSjzCA8JxziB1jfJK7XnV4KXn9dxGqLPj6Hi",
  "key10": "urvtaaH5dSUWJxJ4nJsGZ25Pvcwu4mSMUqnjJMK2dfdGC2pMQzCBfCnnLBcycFQnyNeYscijPoxu6Uj55ePBTb6",
  "key11": "28V6ZQkHw9kmF9YScEdChrkeSchB1boaAiF5iGVudrcm84tpy9kt2tJJdfXHUhcfAg7uJbGr2pDPDEwCo38RmmQy",
  "key12": "566xcPbqZ6pWrLsZxSLKgUjtC5wFqQ1u6mkNJUA5xMYtyKA4dJgPrSov5EzAJLRWzdjk8KyoiWuxuRPBbjUyjC2g",
  "key13": "4v7PCK96662gSanRUU65eFJcR24Wz5whTFxLVLmmM1qetyo3W6Toz3QPWjjnmNxrghxLuPRAuZu8abbqgRxNtA7q",
  "key14": "3gyS7EzE7J5aPjRrbZEbkZUkz7RqqWe4i42n3YrNnjnm36QPNAojedCTvcrv817R8BXkiWzVDhQDViVF8H1Xj9T7",
  "key15": "4MQ1nbS6BmuFpkTwbp96Paiv9bt5wcdvVGwJAuqeztZPJZLXGUy9N2vjfmq4SPf6nj5j6HczRcmy6Epy3yX41QSv",
  "key16": "2wEBq8pXN76TzSRV51NBRVuuVHRbyduEzt7sRgnWqWcvXDTUrwynuFnNFHdVv9kR7SXUM3461QjgwG69U3LsUUyy",
  "key17": "aHgfsuWpgTaxaM4M8RsuFPBJbGRxvyhWH2xSYfpFJDS7Et4j3q3N9A5EtD433qMnMEAu9qmKXuqF2N5DqkrZnHg",
  "key18": "4B2GeFdEJ3MpsS2A88MjLyMsdGrUU2gzdtLG9Bv7K5zHsBeWYnD3m8zRsK2WiYi2CJ8oSYCdXvh3jBQqjmHWVLzr",
  "key19": "5EGmjTjZoajM5JiXq9n5YHQ7GL4rKArkUPugBkgb89Luy4dqNkebagNM1S3pQ6tPrMXfcMX95NR9NkSCfEaedY2x",
  "key20": "vbLAQCd9nzYUkQQjBQ9JSJuxyfEcoH8aGpyt74734HeRRyCdkDFYZ9YHBLuKiNSN94d9cYCwWJXBrujaqtyAZJk",
  "key21": "3mbTQcsCw3epF4NUXRg5v2NpYsAR7jfbijN93hhuBWAsrdW2Y3sHUQYDya8B4rcRHaJsHZydYiysTYUcCj9nGrES",
  "key22": "59VHEP1Sknp8JdqXjCuK49thtUL2JovipzhzChR1oEeBMorreXz1H1ytfyY1SJhCkyD85yPisaGtnXbUKoHrGpVm",
  "key23": "4A7WRTS8teCdziPbT5iWREh54qqrUhG6iRdxbdkdtu3LYo9rrKKnPpLKsv7v32qVLqs7SEaw2u1q228LCKEU55uh",
  "key24": "3MeCyi7U8dGwA7LQwDj4B3Z4rYt5XAVmRGNEUykf1XqJXY6b5B42EtsG2phTMttjtbbM6uRgyC2kGcXe3rL2PK4r",
  "key25": "5gj5YKsSNHQb5ofGAE4V8uZNQEakUHKA1PLiyC2aVjo4uJzS5iqRrWvBGgATDa1QRBbJD5qcNua8xUQbHb4DHcAE",
  "key26": "ZfAEpDXhgRsG5t7RveNqoGS5f4CR5okBNNPxBvhAvuKJ8hhfk1xdV5xUoxcUtVAS35zXAMRciRjL98sNs235C98"
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
