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
    "wCYhrcGci5Qx4sMdTMCRP64CJwDL7HZTyXX5wUbdJda1P7uZdNu8nFkYqppKda6DUCGE2fZb2H3BunSPV43MXb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyxrYALKvEqv2XaCqH4M6aE8MA7qamKryRi2yhiQLkXZoonMGRmN9SNvoGictjJJdcNJZY5DCnB23idqnF41iAP",
  "key1": "ibrSb5kCtxfdSBRpaVsfj9mEwyAMhQk1op7D4EeasonHxhFpnzNVhyY4hFYYMqrgdbNMJcUs7quHzUgQnjyUZYi",
  "key2": "5T7S4h9vN6bDbhBnqTUyeJpiseSqkRrquWJcmgAP8wfuiaEHQ8cm7oAJWvuRi6gH4Npfu2d6XG75sAMcL4b6VCuQ",
  "key3": "2RWu7n4er2krEA5FCr8sGJYXX4Rg3LKALLoxcVdobYU3yGb86mNhn8683EaWwvaoNrGBECHNTkR5rBrkNF6egQey",
  "key4": "3H5dDXnQBXbxy9jWDCUJ2SdmniRFWJBDBZbLCDAW71nMUy6dLhp4nz4zdZcJLAgyTgeHajwTUg7qmKs4B53dDKkP",
  "key5": "5aK7jokYAXTbnnPa7ghTa7fjiukBWVcuV2j1dPD7jQfBhxv41nShoHFDcYZyiEjF9aEhK46e25FdUaZxifknCYfz",
  "key6": "4cFgVEgCya1kzwn4z1fg755P2BKcUdtgiCyZsMk5n2J6qQqrztgSyHVYj5RFLp5ZvdZSLwYhsk1gWahHnpvs87R8",
  "key7": "3Z6Y2KiVwS2NSf2yt3MPWweR1UeimUkHaSGS92QuazzKxCdxx7AGfRziB1wx7DJhid2owfQ51uWX3SwsDwx8WvNZ",
  "key8": "4gmRc9dDvtf1zGGRAjLpZdBgDtWXSnxMtNyTamz6tWjf3xwL3RW4wR5hWWKhNaQKTqVpXLSKoAwVQMz8XVb67rgh",
  "key9": "tkxKY98NQi41Ls4B6MoKXx8AFZ9oS5nG9VKBfD3wnRFmxUFoii9wekkuiGsJzkqUSxd1GS6ZbBQo4QFkcoVXnjV",
  "key10": "4FD8St6tsrYoacv7bHU322VJHPy5j5nEWXeh1bi8RFe3kxy7H5busUbb4oxkiBqQ3MYPthYerMGaFhvmcS4cVU8H",
  "key11": "2JaFHXABwmksM4M9yNs5tTH8k7TwNynaSqphbRqBGzbS6ZJ4XZdTDAbpRaJbNHxjwKGCVbjzpr57bjU6sK3XRYtq",
  "key12": "4P4EhRNvVBFAXjP6VE4Yuv5Q2ouUDmjNPKERGmEnSQ8zNJJhSGNeFbBCnSNnRRh8SdmFCQgBNUCNnSV5K18WkvEd",
  "key13": "2D4C1DA4UYdcSVdvx44EonchrouxnFReaKiK3VUwfEpo6qfcbeSQ96tv6Qpnw4u8j5F1yAwZo5S6gVNXvncZ3MQe",
  "key14": "3YswPzgJHKzSqo1UZry4H1EetGucBK1HJm5ez4ujGzbvmp2JQfzaxN3dzUd1MAJHvFVi7qyKXP4og47KUqA5UsT",
  "key15": "4eZ2SkTL27e3xnMXZr5QcbcRq5AtXBd4eMgG3qrFsVJ5K2dw2y3pDGGiHYv2PxYM9P4CCk8N7R1LsCUgpb9kySqo",
  "key16": "3yeSRxdEVj681oxXTJPe9SgaVmLhMgZvBrHS7iBhescBvNBK35Fm5LRZUwKfEVSZfsXCqGhEvoBH9739p1cfxKpe",
  "key17": "72jVtZEQLH7FwEfTK5Q463c1snrsn2ezMb6kiVKfZqkZnBY7B6nDqK4fyBU9iemG8vq1siQpVLDjSXkpqAPLsDX",
  "key18": "64vTzog7USHxFuW1brUw5WDNh2ZzKT3nA9oFJoQYKijfCwthv1FoX9AqawB4cRadyzWVfTNMzVyPXYdend1YrkGz",
  "key19": "2Xw8uxmys4yX7ouQ1yc9v2FzoZekawKZi7ygHdrL8wgGjg9cz668KYzDma8DEUjdbHD63EHyMZxayPk9zkE5dEZM",
  "key20": "UcWKBoe6vWnwi476sajaULVVLr1WH3Qm5tFaQMhEFT168gQn3mXPEZpbd2xAFVvRGBPDdriMWWtkaX6kpHAdDzU",
  "key21": "3JifW61wcnkm7QgsRDE8y51uRFPkCTkhY6ej4bEwZkKy91QMG4ngCWn26fKT7LcBwKMAnfECsbEhprps62eDfKjx",
  "key22": "syDsxZAyLti9pj1A9VQ2Kjxvk2mQ8ZMCqvQDrK5UZmkzAndMo6tGNx7LuSUjX5ipUDqratWLpPUmtgR51HtMpgT",
  "key23": "34e8hyL1CExMbZ1W2c1r8TDtkgMxPeBSnidNV75Nv1TuuqyzJyP6qgThkroTrSxN5PTk4B3Xx1i68AC1mTqoBLgB",
  "key24": "41J887EcVnUd4hktqwGFp2aZBzjHiPM93EgLfEZCLq1QeFFDfV6qN3HpH2TTGRRU8UZHKqinpkjVkUobVPpUYmix",
  "key25": "3UCEMmzzPQybrRtDnMY16PJziiudrt3AoKm65A1cjYqnRegbNsesqiKr1r64wLkAXPuVL3RGkRkab3mB1474W728",
  "key26": "HQXGPHDR6GLyEdyiSyJzBAnzFo68fCbNAStg62uEKn5ufYpVrLFSqZsBMhyZL2VVLzgrEJuBSpurJ1eJtBUyDbr",
  "key27": "2jvB4ehec1mp7Mp1bd6zy4UdkAsTbqfeS2Cz7J1i6ygVUY4oi7PAUviza6p3qyAPNye8UsuL97dsDX1P6NfvvP8f",
  "key28": "2ZT3kCbLSXPSE3igmUywS8Zbd6iGQVQfAX4JqeyK9N3PzUZ1yuZYC8bGbAJj52GUicf1L4TiTDyGak7S2QSfTt47",
  "key29": "rniJ9bRneCKLWSFExirLVtteUSJzmV5n9pBB9W1f2pL6mawU99GfsENus28bxHHrrT3YaUtF7N3yHFfJM2HF9LU",
  "key30": "3dV6jRYCMLHXnBTPFM6bduKRZJqw7D1r6Lb577vNhFyWgnCZx7guvZxENXrhpaLVmHJM44ykzi7XhwbHkHooUHtY",
  "key31": "3eSgLrTaeDopi7zxnQeGANuXxMuHJgo9nK68n9FMbYEoocn5S41Q7kTFbAgzoPfehkMcj38rYarboH8JCZJL7CCM",
  "key32": "z7tcufyBBeqNj8DQwSU6fczhcDYfXZqTqAj9ZaAbPuPzsPJB4YidENAKMoYncU8UycxCfhEk2dsEzYMh8DrebnF"
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
