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
    "2iSAMuSqJbYouD3BQ41FWuxgANKKXELqYsAykQsHCrS9nArPVN7LdGgVyWfBSiEDNPVnp3GKEQrJv3w8rK3o2pZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNVKaRRNwrNgFkF5XyLwbNDWG9ReootmwZfpY2ugbNYQ1pvQLFmdUwo5XkiV8WhiBzGj3BZKTVUpRGm7Fgp1fca",
  "key1": "4htVvgfCpSP9HpenpbicQ2aoXmBvdERa29wHab2E5fKDdoyvVV6BhMKiFnHPdsoEabTzZPpZEqYQiaGZXEKtuL2f",
  "key2": "4kFSQVL5bX37ywx58y2Jp692x4s3WWZNqoPDJrqeQa8K5bfpWnicZDTTVcxGpR9p9b8h2jFohWhuKM4yseAGKU96",
  "key3": "4iNKL2qLC6EgwF6UipTSXaztnvuNKhokVquTPhn7vo1UGjKDc1uos2QZTkVA57nyXFaH34aP1vfEjCGFVUVgpNc4",
  "key4": "4kpvogHK7dxFipCE6BRSwUNgW1J6M6PbFG6vuLkHUF6xkcNQLnUANm3XBYidAreYqNj52Eky6vY6QSvr84444Cny",
  "key5": "23g8DqXxdT9brm1wTUze8h6E45rWtTK5nEbhB6sK2ZRfzQzeX3PohyAHRVna7234beGtpP6HhiNcgA7K2WJDGeh8",
  "key6": "4SJQXAxjkQFW6eDsvNNG5puxQErccTSd92a5SWe6wws4Z6MjTUrf9RUeztN8Pd5Xyqv2nP5GxwpBgGriNRtsRsCk",
  "key7": "5vJyRWdBnDsHK299RES9ftJkXGqyKQaaRkvfBK8JhE6gJ8TLiqeRi9CWGhCkp36X9KGGh9qsMZTSsVZQhMTK7r5L",
  "key8": "nPzVDaChKnyvMjv5hEn2Fc2jiquxWM3XKKHaGL21mnRXC3ajMRZ3FCPkb5NhMsWbNwesQ92FhrvUZ5UZozMwLgt",
  "key9": "3oyq9PJFRyRxxSaQzr5csofrhqq73Q9UK2wVq2WSzkjmbNsLsvTq1BGa5Xe9v4cR6K53aBJhFQSHm8HpSQiQWtAS",
  "key10": "22BbWHhiKRbomjVYiATrprcxdHFwivnPUt9KGqMmrpfPkBJnqHz9eRF6wFpn33q6TgWs3TSqEAGdmMSB2foiUrTq",
  "key11": "3A9eQQCV94ydVwpEQ2XeW8kWSa1o8CsD9addQLmRPZAEmxPJCW27yJguUaLTTTLLkGN4TzHoGs5fxnwD2Xrri3RM",
  "key12": "4h98uLwejsGVqz3zUrUJL5UvdnYiUa7SxTkkSP5zD7o4UscNcLnGjd1fkPmNua7xTLpyEYprNgyqbCELCGr78DGR",
  "key13": "5qjhC9ag68Fv3EKCH1KV5EtEFQyzj7jDib9NDVosePCHHrpS1GSPtNr53uH2xUoWswuqEDQKM27jJvYMVdYdbHPe",
  "key14": "S94AYwqPQq6jczGryhEdZL8Wfn8rC3sZ2ExHFNE8E7oMznG7RdAoAETpzTShf8iBEp88YYHGS4fEDVC9zyUXKT1",
  "key15": "3hsw9G44rgSqDcu1PkuqcxW43HjGynHbzzQXSrP7dpwkLrMiNuUxu5P4vg63Y2A1ybAuWdHTGT97xQYBD9cpBRqj",
  "key16": "5XTpxE3w2Q5VYQTZYZPzvHNBbgsU3iRVeKLn1caXvkzC257BpysEdgZg5cBN8JXuoTc8X5zUpRV5XnLYwFjnTKux",
  "key17": "Ymc6xRttMkvfRnyWXAvj7Lh7TMjU9T1pDiP1H9aW7kaoYvBz3AF3q2yp2zBWJfb2vNetgerja9GWScymfVhiJoN",
  "key18": "5nQDK5WQLk6AnvhWYU2YeztPeFtG7F2hH9CoZsoAvG7n9pm1o7goC8vzbpnpnN3z5imxh6tKznQa7bjVRFBrWpfR",
  "key19": "fAjHjYj8ZpCZCEBvkL5U3QbQMeTnxiTC3fd7CtnCQt6KwEpjoFj8rmmDMi6pqQ1BYjGsnDXRk6mTCxJFLWvwuHn",
  "key20": "3VqYNfWb1BqWT2z3uWSgk3TpJh6zbXy9cj4edjKCjPV8MQgJXC8aoXHfaoATiDmXVTXPiuNYvY1hLZwBjMXbKubm",
  "key21": "3fPcffhAdWWfyhjchbJZcpN1HY7AuDqdstRgmvA98L7y9f82ei9kNoGrcMGB3jfMDhJUsHJZRpvPD4HBjius5WBJ",
  "key22": "4aFR9hHCtk9s7V8eZUmTjsXWr9xbpczEE2Wq9oMiZuc24GydFa3Zhbrhp4NHad1neWwmctgi4gugZ8BfRFLFzMFj",
  "key23": "7QfUkBetDYeLPzY3fXdqBA7PuNF6vm6K1699GDMmneuBToHoysDeGSj8DVxcs5HQr68H5x225DfEBJMgdkbAkCi",
  "key24": "2BgC7RWi41pGGWK1avqfGgFjiJKuEuWFEr3DTiLBo67AHhvvV25UMcvwNuo7qx58j5jZR2CVLfASEwsuPAgXFMfj",
  "key25": "4LMARe98gscwirnmRCxQx8iwxRpFE5U3BgFHYucAD9p67KcsZB32nK5JnRh7LaevpVbngqVCq6MkedFwJDXuXsRg"
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
