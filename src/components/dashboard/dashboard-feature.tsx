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
    "5VZVZ7eNK5Un6sQ6rr3jApRY2eAa4pozD21FDnBsPzdzUwf3afeBxf3XhhhCdUPw2rrSe6uwaTe9AP6rJbDnNVXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLkYyZntnRBqnxnsbV3Mp5cWdWK6hAJbfYevx8katZnwqGseodXWsCSLHdqXEJQeFcm9XH8gLKP2G9CBzsmXJpu",
  "key1": "4BH1w2jwYRjx5Q9WMybSVyyh7rxT9avCnpFWSVAT8K8Yycr4VzRD8ge8mCgL1zjHFC57uMLWbTN6EbmYZoQqJNhJ",
  "key2": "45HzriDEWjtqeEjVS1r9dHFQmEKFMZHH8qzVG1v38p1hyiJC3Kc7QZJxkx9hkmPJBsPhD8PG9Lh55uHrxdHvPbBK",
  "key3": "4KyDpbubjW9j75gU9yVLwKWDWNaiQr4ZnkMuh2qBkaLubk7VifZ3DfusXvq34wEBjn4THjdFbKcH1TWp7ndGKQnp",
  "key4": "vRxDJpapW6JtWmptoskGP7WnTxAdJiQ6d9385Viau39BioFcZRWteV1jRss96HTPvYTJNJFYC1NebTs4ocKen6h",
  "key5": "24TmmNuxiHW5Z7fitLpXQDYRcPab1UuULUeUctq5vR46A4DzNYfR9Sj1u4QG8oxdfjxcdMgTGV4G29WG4TLxHzGj",
  "key6": "2puLRCtP93F59JqnzeSMGGMWkjHZpCPhQaVYQaoXnL8PjQMdND6CL8bf1PA7nA9T3oNjegeakEUp7rsUgXmbn1wp",
  "key7": "if7Rpybs8BJBbjLEKcaXE6oEKJr6m3bAqdKKV9e2Q4yp9zpeZ51ruTm935uy9Lvcv388MAQT2fmf1pTErU1U7jS",
  "key8": "3WqP5yZ2XjZbYv46aQ8tUaQwEuP6CdzKLgxKgno2SToRm9ZyNfdujtcqVdv1Wpzoev99R1xBB3VQhQa7ZMtmWsYG",
  "key9": "2aUxXJKQjHt4Y7TSfmg3yha3jRWYnoef89E1h3SVFbDaYrs3hQjWN643sZPpofSfGYCAiipDZPNe1oTdtgC2sHiC",
  "key10": "5mCW77kjoFaWgP1Pn3Yxa5KYGZzc8aHhtzgStJUHcq2osrNP3MNiWtsoYarvovfdbEdCif1LpJfft32WZxUBtcQx",
  "key11": "4C9xVrx9Bo6pBio8TV47Q4GGSkxWDDuZv9i6fZJ5YvDif8HxPvAJ2ewvmHbYiYF9JBMujUtEyVq1Xi4jMpBso9ap",
  "key12": "5bsKS5gohPfsHgnvdR2acfCuEDb7W4c745eoixYacz4dLERwZ5KDj7qChKya3bzjsorK6MVF2wKNR8wcX5NJzoFk",
  "key13": "U49Xmcnup5H6p6U22up8W23xHK9igKBaa6sAiC256Pfk6N8iTH2sxRLTiPUf3T4S24qZgmVsGk1i8yU9NUaKzZo",
  "key14": "bHbAMLZBmy8tRd3u9w6hptc7p7BCFxW8AiiYSewwjB7edwKY2Q86TpP41tcxHjL5dVSpZ1eamPgrXhGEx9X63qj",
  "key15": "55oPYQStPSpjQ66uDF3BBgYQvdDhmbm8KozzkmrwyXooMAW8bmy6pDmEg9XpBgBvVebaQ5vuvvHEXTBxRBViGkXz",
  "key16": "3T9NtmLTvw2trYyuPnQeam73sVLgdJ3ZPakC8nvYAxGH9aPpdWs72WQmr8UgLm7vXvCsaSp4fyAJV48R5Jh14DzN",
  "key17": "4zt6mznWvYBjyocEnuExbuHshQzyAA2XUPQof6dJPyRkfa1PKL9RWNtrQ14p2RX35n6bBBAH8WBcs3dYbuBkgmt7",
  "key18": "4dJs5BiJrEa6KDALhww1cjGgXvaf5QYgGcawykf77HZYqyAcyAZsAUG2idJhWjfME5upPRbfQHi6WSHa1HNiHuCr",
  "key19": "5LhWJwHew63oN28FQZqMh5w7xpir5zME1fURvdDXmMux89D5v1PKsTkymZ6qrxq1CExqfoa1TJ1Tf2A1y5ZCXKBK",
  "key20": "F12xtyKLmBXULtecnGiXH6zEj3iu6jU8bJ1rTe8K1j294CYK1wxQ7dAQaLhvVYpouNDUaR6T6wfad2dB8Zq4rBV",
  "key21": "3u1gV4Vji6FXMuXsQJ15MERq7Ri2P1XuQGtseWYrMU5zaYvcoHwhpfjRmeiGx5udTy14EShGUZ5QfW7o3LQex62b",
  "key22": "4Tws3auXP17zoJYynMrUPMUCRxPuaSYxmLcZW4LjZkE1HjDYFVwG6gKeyNq7PK1h6z25oB8C2wYg69MEdbu1axxp",
  "key23": "5h29Fd2DBJRDLJYWjY9nWqoJq8rR67wTXtPnCnNcTRnKqLB22LZTsYTWNofnMs9raSsToMUj3yBPdtq6Y9UQZksV",
  "key24": "45GwBarb7yse5f2qXDFmjWUbsHQPdpd5SFzj5yG98oYGHF4ucaqmCk7KrwyQQYTGZLb8RB5xTMTGpvdwmxVg9Px4",
  "key25": "2V9CKGyS96uj1YeGHKg8oJ2ys6tA2SvWUY2RLKBfXP2oMBYzxPWCyXutXqCTbyVcNXqMxnS5nP7m2TZTfdG2Qriw",
  "key26": "4igEamdNZbJsAgbGCZK3yWgU3aaJBF8dyby1j3qZcsteMPM67xjkAdREhAStTAFroiH678TGXedoZkCzNr6mpMP5",
  "key27": "2tDq46uWtXBGJAoREafZpCyaRta4Zey34FRyMJjSS88B4A5E2RpTxmWfhTx6Bxj1M4PWA612RQbQoPM2opj3mQ1w",
  "key28": "5F5FiMpaxHTcaWk8PnLRwF1rNQkKKdrSDRwGnVxdBUnK5XyquKUZRDNpzuxdpsrmFr6yjMUHEyHREk5bivu9yQMC",
  "key29": "5fWDJcJyyvJGdCojH1vrmXxiiVpAW57UL4b9bt6tCKb5gYYYicZTNgdRJZCerawLKHqYtSjsgEXhsc3AqyRah7nX",
  "key30": "4eQBJfGFhh52urkqFemV6XbCPvqNWetiqxkCDyeobDLeNqJBpC6AaxxbWBmuqEya7HsY4m8RTGuujEQNqdk4YLvC",
  "key31": "DN7KV6w3Z8bouT3YoLLDgE6QnACS4JYD7EYa1pyktwcznebpMwxDszhc6TfU7CgKEVYzL6Fhwme3fqXyjmnBK6j",
  "key32": "5hDUrPpMccN6HN9GZdYkzzDZVZwDm8otKj5fA2ZmRWjtFYfnSH6AAw6MJkEqEvJbBR1hJWraQYJbTsL22Tx5sZ4g",
  "key33": "2HvQihzbX8YvWj4VK3bf4E4X7W2c4XeX4PxY8MvkcK6E51q4asULZSBsCktRyzbaJcCEn2iAXiShbNTjgKYRzJjn",
  "key34": "23syFzGUNYEJEKishqudF5Tz1ymYqK73YtrKqTCFUUJv6jb31PRWEFhW3BvAnzNoVTh67WfyWTqto4zH4cDcPHjN",
  "key35": "cAC9x6JhntrhSbZvshGYyaFydpL2BPkmHH2ewXSS7WfcqCYR1mMRMHDAqZ3qXHWzSEQvt4KLtL8VgxZCbCwAdzw",
  "key36": "5wQtSh3apGjojAXYz9hXPoZxwRzW5EyqYcJBH9djWJ8WKUpGmN5YKLHwoKuWzArX2tMoZQ6u2G7efv8bMkSNSWGz",
  "key37": "2jTRaogh34rBNXCVC8Rk7aw75zjQcAejhPfceKv9YPA2mpHiyeAP3HRtXBEvDRXWP2YQ3469v5A1he2CRBHj4sub"
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
