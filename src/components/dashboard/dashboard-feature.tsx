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
    "5NnEUv9RXswBWnuqFRByMGUuiZEhNcgDSdvxSydyLwosUUi4zPH2dAFBfh5edfcbZmrNVk39sBjLHspk5mnmyq88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kZjve6UjPtEWeQAeiQ64BhW2m2PbywajpFiPV1dGz1MBtz57yfybxWNEbcXLXLdkRWbmMXsC6WA2SSMyWK9ypj",
  "key1": "5Lq1ULvMWjmBYFA4MUj23W45641VWxSCRZsG5XnUNNbsVAwE5ezjZVMDdgTpQ7bSW81dG68fxW8Z8F67jGVGZXwc",
  "key2": "3oUkEsHpJ157Ath7n27Rzxq7RrWDhMpJrSmgspF2fPviQVuhPeysdRQNeSbW7r8iMZKJ6C7wtmpSAWcCi5NimA14",
  "key3": "299Ku9txnhqYUzXrovxau1cz2xJcUnyUvV8jzUt4z5EbY2gLnPGgWfUA2WznSCU46XM3zTd2AW3iY7g2jZuhucVp",
  "key4": "2HQ8xp4RADpWCsRWg8RSwEyE9HhLi6GD2Kam2TVQff58PhcWRYaaXK4VBgoFb8RM16vTAmqKg3m48gt7Ycz5t4iF",
  "key5": "2QPQfthcMZqHXbWMXNZnDi3WpKzrfw8gYZ3Kp7xiNcwHinsp3g7AN2vx6J4NFizXcAg5nzV2BhrhQJk9diqhjAo5",
  "key6": "61FnxHkM2buAZbXHKLFveWtuz5AppVxBtRxbZoa26opQutFzXT8mP85b7drNCvE93xfanMV9XqzB1Rn9fHp2AgaZ",
  "key7": "42cRRcLFDAxCfPLANxyNHBitgXZb5TMsQTttQqYSCVKjmtW8LKygwSi6FJZiQEPsWePRYNbWD1QJ9GZHtFBrviu9",
  "key8": "xv2aKHNs6HHAQRvJD9BnQrSQ7y8NA9Mbrpz3vq4Ad67P3GnRQv3BBQ2yKP7yrXMm14KmsoJKugUEk88QYLR9Gyq",
  "key9": "2d4xYxzabbgni7Soe7BhHVpqYAL7YY6g2yc1jjAoZ312aUCLeHaqdM2npxEibMSuiYFqdvWfuoeaG12d35nmXGPc",
  "key10": "4FmrPXRfenRSbp94X1XDaJYq9jgtaZjrBGAbEz94UvMmqsu9D4zaJZgQY4yZfPS4cSxUb46Z3F5Z3z5gPGghnxx1",
  "key11": "44249zFtit7xn42WBGngVMtcjspi8B3vFXrq7e7wM5p51f8VW2aHM6yGkb8GxdFdJfFkYntT9EpLzh39kCSM165F",
  "key12": "2Tmd7X8A6MFKvCTTTWCQaAsQNojMQsrotXfH4Lnoib2Xw8xua3dxDKe719q7q6mkH3xoYmL6JjpJNEv5v27ieeFb",
  "key13": "mPcHB1CAzN5urSEVsruBNDhdrmUeUqpjyLdMk3otH1pF3Y71hwv9vUwfUGTWDeUMBHZuz46dPn5ueFqr5kHSNAe",
  "key14": "TA9xiYwMp1h8Hc5hNHAehYn8wa9BftcYEAKUzLDxdoMfnr4VtL72LVJywGdRzGE27bWtTZVjiuYzbsygLCXxhCx",
  "key15": "59XkzQFfw1w8eUrH45HbkXUaKgPx6CAd5sYnLq8DgKNTMrGE45ejjZQppqw5T1rynMSm7weCvnreeVmQb3qDU4mE",
  "key16": "3Jccq3qq2A6pe3EK1dDjTQrwX9noZpbfguGUXMAL641kcoeUja1mnzSfqkvkyjwZ4MLVUVNyQhAgC9xtbH2uBB5z",
  "key17": "52ehvpvfdMzBfxgv5gq8REeEE4rvzoLDHk7iqNz7CAtSdeboMpSkDB1oaWJhVsFHbjEehPDP63qpxqAonfVvds3V",
  "key18": "q1pfcRt9JVRgZ1xKnUVUmigSt9KF7mBtqQNUCXCLmoMKfa58iBw1rw7BxVCLoc5PfATTnLo8e27TvpubmoJZfhd",
  "key19": "2AzCX9fw8qG1YDGKz6zn8AfunvqeUqYUTAduo6ANRZVDp5L3Q2mQjtXzALJ7sMJ5Ai2McSauX1nFGnzv9J7JPDh6",
  "key20": "5LRtGigFuGotY8AhaGvUZGn7YXxwLLhbMpG6d7eBueeRtA7Gr22ixaMzQZdNJeJZhs5SEUhBezwE3iv1XVRGuHZV",
  "key21": "4DMyrQ52afCgTAA9K2CdiN42f89UPkbgYHKHVtyB7PftLM3VwW1P5hSZ61HcK6ZNPCKdsQ2fB8oWoe5uCefoYoKT",
  "key22": "a7F9cNK8JMFvNnw9F233yfEp1bwhHGWeoD6B8x28n9EfC6wYtACzNPGorGmA3zLnaAXseQFWzr8dgNgBYTKQJFL",
  "key23": "K7RtsFFdRy53rMjMiuLLxibXpCA5xh24yTNNqQznqYqE6HKDngRxzTdqA6T2sTTJX5HnNpMuqBw8AYSG8xjEgVY",
  "key24": "3jrhxsSRDXWuhn3PqMzatXDfpECjCBFzWGeozApMyCS3B7gqmGNDTY2P2hUfBtJT5PoMfk1W9vvtYs7tRE6Mwwib",
  "key25": "2X3Mwqrxgdkm1Gy8zN6RTt76favSWi93MXcpMFreaxG55YYPH1PennLpxwwTGH7yEPcrZ6xDGBDsyqswwk7wpnJd"
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
