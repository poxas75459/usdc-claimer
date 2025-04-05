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
    "2PdVtdCFS2MjT3BFgLU9co7GLhYwRZojCMuzWWoqLyLLAKrYwL1Xy2RqaPNrwiruj4VUocmozaXFsfLaK2LkGVVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtHWuqqd23p1TFMBXb1rLZKHxbqGFi9mnwerUzzGYhAu9CK9N7d8JTJfs8eQs7K1Gh8mjxvM3P1mNxb9SaYgNL4",
  "key1": "t3zM3Pf53s9QnssVojFuWVXto941sFkzW4gymZZkqkBJ45mdVUkWJY4UGzEvA7orBz4mf5kMXtN5MnyEYKL7hon",
  "key2": "2psUzq7owzdSGW7aqKxSLF8BaxMhGSRxUKFWWeFkV6aP1ozM3XxNjzTaEqpMV3oypqYdLzXpmiWz1mA6aumn4dpA",
  "key3": "3h1VMsz6izMhWT7Nmg5raqowEZvJeqLq6uHSj5MvUQE2NKkmd5ac87od3wTaddtiWF6Haph7wqCaQFkGQnJ5RWvs",
  "key4": "3vFgohMjDP6YVEQiRWEfZf5Pkf2VX6dDmL5AWKn5Zvy5BCSCZEXrFkwHx72jNHA5CSiEFBjHtfS4M7t9MC7Aic4d",
  "key5": "5U9DaqbPMgQpcQBqtPwHMgYDFju1bEm3RmhAhgzAGfcYQ364ZqdiRJBqGnvG3i5wECkyS9QTtuyNrvRG9QTPh7sn",
  "key6": "4KXjMiVUjf9wMyPHWwz928JkyBYPowurQ3rgRM9M4KQwpkxPMfjn1dxEwKXCNGexcHt7yzg2BFBxKDJDMGR6CtWC",
  "key7": "o6x9AA9uqrLiiGNAXeZMp2XaVqi3cucDVwnN1cQ2vSYW3kz3dtGtY8diom3GQeiETZpqKvrpnJfK2baC17LWPbL",
  "key8": "4fMHKiN1426sxmYWz2aZdFZToXbvKLQGNkovzKcqTbuniphxQFXBF6Czqmvp3UjE2NjpeDfW8nbpDP585rakL5sb",
  "key9": "5K8c2M5GpTUPCQcsc5rXCCoduLH9ZX8pLMVtF3MLXXrFHZrQmSruywg9hq615GUSm62RNJTQg38mSZzE1UQ3sa7L",
  "key10": "bu5AnwfjkNaHL4f11sZLBVahVFkCAQpHS7a6ZzyyWPLZ715aSar5ZnCLQGyGRo6PTmRKP5QXPSXPnqDZbFCi5cr",
  "key11": "3NMUsQreEyy4nhfKUjCJPz1C1LXaQrL9FYE2EhEMPQee2KY3ji6zEnTxr7nHKMCsCdvj62ENz6WrrybSoUEtwNs3",
  "key12": "2TLbDFgFRPvq1GiKCPtrjcEM5g1pUyUobkFyYAsUx2biD1puZdSaBMfUxLYpJbJNeT979ZhbC97ZPhtY7EYKbm16",
  "key13": "ahVwmd4hPXY7qyyebeqF1tpsHqtCx17LgkseWb9tSnU8XQTBpMsPLfXcg4FhnGriLSkj3mnZggUWV2VMoPrX24j",
  "key14": "3ayV3qK59s6besaKgG5LYqcfkBFB8m2UFu3WHqo8WusTDByoUQRBU4ZWh9ZsnibLcH65c49T3tDHhWaoJGdqW38r",
  "key15": "52xfF5mqHrM6JsHULojjwP4pc7Gf3hUUrSdwNW7WBzveH12V9cirLxB3WptJcBrqj4D8rt3tB9vGETa17MqWpRrW",
  "key16": "2rF5pdnQ1ZH1BtH8ePyJNEEGkUXZinpSeNhHpZH37NM9HYkvsR2jCE4mKTbvfGyKh5knNXEqupHAPu2T9FyCUTLY",
  "key17": "4bpUSjk93LeNjDevFitgnRZSSRTF8LphMvecRxg3ipkUG1ixaa7tU8S8JWic4spGGhAPuPnE1V8vPCJ6mw5S2pqf",
  "key18": "4LdbEwv7xffhhtcaEJDEio1iaPoFSPH5WZCxtid1jub4sq5x2mjGhnE8oBbrwzKMab35kdg2TxF9pNPCvpDGmXG7",
  "key19": "4d5xoEJJopCb5daDuySYmaZ7mTsyWGKTbeznkiwvuFnw2wQrgSpFJNfWkHV2M3SYxtaLJmtueXH4uqQTQoziz3Xn",
  "key20": "3tECQpoCdiA6F6i2vV8Vv6X6scvePT5Wxb5Gt4wZoHUD5LPaihjPFcLurik1A41Gbij6KDw1nUnhcKWdhVBHYGmo",
  "key21": "5oJJm3YujWEt8dnWqNvvX2uyh28N3ezyXfrBrWwPc3WtPHR6cBHYhAcxdKy8AjuyTj3G99drkkq4F1ypBUpSTc38",
  "key22": "2oxHPsnUdgTxpm751oitN43HG4XRkS4Niuug4QuS33Z6VN8sG4bVGz6GdDU8BUTniDh5V3J69PidJPdzN4rEUkiG",
  "key23": "5tWFjUGqHKyrpHKeTn7L5ZHhRLdbcxj4ihyERxQDQdtME1YntoJmYT1kuRmiAn5u2uF2pK1jY5tgMH2reTvf8N7x",
  "key24": "63ZKrUhzfn7i8A6SPKBLdyiGZNaKh1rtX5qUVrMJ3hg8c9cBv42Fyfxg4poq8LMGzobSVyxD1HRFL7ipx7GsUhm1",
  "key25": "CCA9jrV5pbzyF5SfyRhzTrXr2WcKP1Vi8BeFRxmzV6x6EcL4k3StRYh6QyaWC9fMe3UJ8yJPFQrSawrNdaaJ29q",
  "key26": "LEW9uiU5VfAJTrduN2fYsWSXrfi3Vjav3nN36stRq6uDXzyh95Vy2adQwjFT36LCwEHsBhf7CZJdFMVpsuc9D7r",
  "key27": "FujBp1LNy1MuRSDAShABLXcL8vdtijbo8AKn8Fh3ouhwCUuZEAsx6phsa7VnekYj3wVnwuJxV7g2VorupQeDNyf",
  "key28": "3KXcCyps9sjYzTKQwXE6jCURzuuzGvFJ7dXEgE2eFwz4e2oCyL2hicQ3rCRtNm6X49vaK5KDSoQHXL5eZCpYz9Rz",
  "key29": "PZxDvG3xzWszouf4tTSmvgPQo72qMYJAkioANA94qq7EsngAQSkNoLS1WzNDPrxF8sDWJjDB8Kes1acve3vocUv",
  "key30": "3TZAHQt9axJvSUsWvXuw5HdSbKvYzWtekf51DAtvKp6zns34oq5jeZBA9MFMjNMkYuvcsU66qZyrqDvrbXvGCyYE",
  "key31": "2FJSiSqv8G27cfbUzFqzTusfBuNwbNa85pDPJgDanPP2YEZreu5AmS37ZmzPAAujaoC7XhcQaa7UBgzz2vmQDh8z",
  "key32": "ChG2m9JvHyuHKrNvGJ5YT6ub22ZjUrkamSdTKS1Q2GytFJyRKSHmXeBDrk49Ua8Ptujmo5irw1Rg2UPALjcD2rY",
  "key33": "62Lhnz8aHJSYwLJ4DoMqt4BPuoXHfpy7b3of4vxB6wB7myhDe21yZ1gpRt1YWQvhPSw5HZgjxocg5xkR5uVdiZuU",
  "key34": "5tb3HqJUDTpZe2Ga2cf8Gta534Cu5qDdWXDhXwGADSLVwJbPMqVWJMMXNi7NDTFeqymvhsjJcopspXmqasmz7VjK",
  "key35": "2dkFvQs97RbcTZgc6JrtdngMCxwpG1yG78BtBUqPPiLAmjGurG7LYbz3MfuoZu8LAtFuj3P14UwtndtyMAsPmixM",
  "key36": "3KHqmebmtrGuvMSfHKZeKwZrpdnypBkzX7uRShJf6EuHeeisp8vJL7cJTozKLXaHhYXWRWDjuXgkgatQDReSBk2H",
  "key37": "3TarRcAXizCzikTyXsd29epcegp6481RdpZLHgfJEJ2sxPmLxm2K2q5bVk94JQd4jgivRwV8TBArExHuVYHvGrRo",
  "key38": "3DXP7SUjZkbFQpCDZuNsyFMczJ5Pp4pqP5cYdEU4dUBVrtNrsnGHJiL9bGLZmuSK5gsiFwBP5N81hJbE6s9i69eM",
  "key39": "3we947e39tV6MpL7nJR9eo2fAe9Xa7RcwAwey7ceNdR7MX36mRy6ZFZKQgyU5jEDm25UEtq9H4hCTzqNyUn6amU",
  "key40": "3vFdwqSLQmqw7j24m9ig7jPyWWzFSxdFpfa1Xtsi31FEZAy5pSx2fuypkZVo8fAWAJav6cHeqbwq8LYPUwvGpnZK",
  "key41": "45yqZkbYY5X4CxvXsZ4kbCwfAetEUNftH6HgjkHCP8ohB4Y92doJdEec5hS479Bj1FKs41vcRJYUDZ1qr56WwAyT",
  "key42": "4fsA7cuY3VodLFaL3Mqbq44GNeSoWGSYww8LRR2iav2QujTTh5fkpZHhJwupk4677nvzkG1RyNEZzRar55U5Yu3G",
  "key43": "nhtG2hkQHP5TS8GW5YBPanaMEG5c4e7B1juHNDuAWDJVvYsuxaKbP2ddMXRY94mdoa6eu1DXayowFLwSzJBA4C9",
  "key44": "2i76kSvbvBgSBcnrsMzkT7FfeKp7oFGxk1fJCRCbFQ1n6bzUF6gNYv48XM57YSaWf1vXsLPZyQuFJ4aiDykBiGqH",
  "key45": "3xPXvfz1hbp51VdrSFAhUBtn6a9iuLvss2kSSRoHwLeosMzGLwZPAV394behbCiajKDeTVsETHfkbpBk1613QTQy",
  "key46": "27o7jvXDhUF61QH5e1YXb3zMwzBYFM2QD6bGYuiuyTNWWf6yXVubAPpmfdksdSLJNZAQc9ifHjMKGkoqeRszvsBw"
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
