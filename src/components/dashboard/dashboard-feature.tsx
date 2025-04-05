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
    "3t2kcnhRQWAojuMpad7UYYyKosfu1VFx1chbDHZobMdYA4sBqaCuPJv61iKv8uX6bPHU7DV5C47ZKUGh35zNQoZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjvpNkZWGWhjXBVUm1vFCer39dgc8QMhuR8F2WnR8ZYVabbtT7xNEcP6t8JiJL9yyVxuqGKCG6N5x9y1rzqjumm",
  "key1": "43EHcgDi3iZQpx5Siqw2K688WBPKjgMdpS1sSxbRejC7mjXhXoWBiZA8WPShBJqik2AWkvZXJBb1tRUTDAfdMghw",
  "key2": "2uEhq25YQEzL8sDBogW3KDynaZrSjiuYvBV71aTE5wsBjafv9VMxKMgMtgXjU5Dbjy5Sa9SnDDftXdeLSsAkYCuY",
  "key3": "34HQtKYpPnwj5EsLTvzbQV97kGyPVpztVAW75uxttUk6oBGwwM9hzDJe6KTtivP2quiHi1zjqtvJHahhHEWTn9Rg",
  "key4": "3PfvdwgbSRN6c7SYvoigM565AM32rEF21sG1YU3Yy1YUe242LfGrHAt8stcm5cx5VFqQCttCb4HLQu732EfVQ6kb",
  "key5": "4dj5jdoCeTyx1RgtAWKrShDnTLRPEz64qEeLLBSN1LmN9GgVWS3DfNfBfVpjZykfgTbgoNnZwgryPr4euMdPXZ9Q",
  "key6": "2TiFHKQxmt4y3inD4h5bZbtAUDCm8hpxBbPTqfVBFRMsJPEr1CCNAhX25vpYRrPSBjfBQihDtVNQHTwdT2HynnEP",
  "key7": "34T1K5ExyeMiEVGibvEqYdEoUivNtyLjzhcnX1rQ9UJR2fqSuBBANkhZQeBhc6eq6oQrkiq2rkJ33UDA9w6fhBGA",
  "key8": "3EkEsmFLo77jkELYjcfmLbS2JN7CRfqG65jcwpewWSJAcpCHFpTZ54LXAzyu9cvgfaz5CHvrHTkQv9s7e6Y1pmkE",
  "key9": "4MxFvFrdnn69x7R7uwb3s2nbQUaLyqRFwvAfMA91nDM9Ku56uF94tFEzcknCG2i83NDqhuUYebjMNkT367tJ1foz",
  "key10": "4v98po3Wor6U8SSkgh5dzva67yEikahfPYiRqSY7KmUSawzJu2JwmzngtaZR15eWmb8Z9WWxoDnJ41vJqfy7Z77w",
  "key11": "3comJKhWimahaoMhHHpSDTe6EEmGQfxRk6Jh9Rpexe6CLtRRTP5mDi6GbrR5SLKTsho2GYNbQUC8maSTo3fkptGd",
  "key12": "5gELCUqUccU1YDyrjfyZzbyfK6LzuEmwSw1d5K7mqbBCfCoBxUwWSLX4FzNY9VqDS4QVwMaukEpQMh7N5hTEPP53",
  "key13": "2e1yo93zzhq3SrXmDPi8WWWtPn37HtTvUqHezQCfFWdSTvfqYpY3iZzuncZySzMCcLJrpwBstKyYVHbpzP28BQBh",
  "key14": "jKBQtnkRfw4UBWG8ufMv4mCz8zjK4MiN72b91BuwCu9imhx78JJuRK8oFfP46Ep7rzLLs1NJq2oikyGTHSaKdDV",
  "key15": "43KDarzvNEwrFVaeeBg1fAGJRbghkuhMSkQgE5CSYK6WE2k4hhNznDvqRNBrjvimsKdCD1VHJvRWLdQW2wfMsQng",
  "key16": "44cBdRWd24ezQSiM44z7K5EYhUuBCtLxpYwXGW62jmksB8pEbL6MJLHhsQMEwS2Vjffni13aJXGqBcP3WVWkHMr6",
  "key17": "5FNTm4Si5wkPKyo5ouGD5PfxhefqyCgq53h9NG5TWfxeBJMaFsoGDCVmK8b15Fqffcus9MxDxDsjiEGpN4DsKL5c",
  "key18": "4iftprfYbYNfM9uNxS2gCJQeQe3PEkpn36FAxgrgdaxnrcbjoKdDRQc2Hc9yq4txdUDigPUTUdQ6KAXSiYkBuSV7",
  "key19": "o6YcyupNRgzKjxJHho82Qr2eQhki2JGYgJ9zkhheFPhkNKHpwt8VyvtTWCKtsP1H26E4VJ5Kj3UUYvNP9wF8aLp",
  "key20": "vfJswfaEw7gKQ4aFUjWAa96JaoMyCAtHfrQYkkoaHqMfpPjBY2ScF9EupVHzCBiXmUEVubJUfVzHBoCRPR7R2Qe",
  "key21": "3e95F66AKxHGidGroi3xdgFs1Kvs4EfQLYVzhuPQiqaKG6LcmNSc8t4pFvBr4UBHxdL4ixEB9HuHoV6KmMSjXeCD",
  "key22": "5zGF9L9j7PGVisKj6nXci4LF6azGxQVz2xxg2x4MzXiPgNTaiNZzfuKUB7sThz2ZPuTMqxZ79gyUa7jZ6ZCNMcDh",
  "key23": "5E5i6Ssc23kgS8KyTGGLueJiWeNmEJYWjGwY3n6K7TX2t9jW67HhFKrzRfWJcushCZcMwFmbxsmzrmFGmwuVJA8a",
  "key24": "bm6Cy92eNGZgrjXYGvsvhkyCzftcLNvkhfkkxeTXY6tuHwgiuPHnqyjugW9aqRdijJTe59VBi6ScBXKuRdCdUPu",
  "key25": "2d6p3wyWPkJ8ZXJqneqcm7cJePGYSyTvvfc2pN5Wu1PrBLieCMBBX5X5QT4UqnLLqZ1zZAvnV86gaBqGAFzE2a5g",
  "key26": "3Wy9PFh7L3c1ZyF8KSE8zagYHFwNkyxZDzbqPVZrZMNh7xLdWToDjLfUP81ftVpRaS3GWSYu7beENKZKDRYQGQje",
  "key27": "Q5khMjBCXWko9jNFf9By8B8ZXer2uzVzcXpsYwdqeRkEBpaurW7RCVxcynV4jAP3bgGSj3BVTnQevrTQ1VcZsEx",
  "key28": "7NkWXkPAWRV9uDoVVsvxC1BfcfKpeZyT855cvwMmGdrDDKb7yCPNd6qVgJUhiXEWAAs6Q8bDsnWZcKHXUvuM8T3",
  "key29": "SYtw1UYpE3ub4BFQp3JcznCQyMLd9dMBgLqUTGF8KRq5Ez2Gs3xdkP3tsden5fhCM1ZbHCDBpCtTZPttmq8RwE7",
  "key30": "39S3mC2pu3sZFMPDEH4G31QaYZEXu6zALzMCYa3DbReYcYMvtF44xVXqhnS9zMocissUxjzqRjp3xbtTb77vpjpu",
  "key31": "3BioE9o34gWRZC8STW3E2TFzwogcPecGzLu9KWMCSezviJCAfCTTdDrFYv93KgyJAq483k8F853msszxLja3GZtM",
  "key32": "5M7fVpZkgMh8qhtqU3ZWfhgvhSBQ4bqXpXxiHqWj6hKC3QpLXBmUMc2dz21s7eBeEUzVhch2SW9ZFboDrEvmtiU8",
  "key33": "H2PY7QYv76Yfh1QVvT6Tb5SpQLieZqLRhnAKpRDXdoAu2jECoc4t4v4fhCNU4p4rf2P6cG66f1J1g9R3sZZLR91",
  "key34": "2Bm8sPMoG8y5pqcsdHMGNv162Q8aQYpPfRnWqhDPsNtjKpPxtuNqrYKDpUfsC7qFJVwx6fLf7wx8PvxMCVnCnmEx",
  "key35": "2m1Wrmiim6KuNEBRXTiz2rQydviFp23F7oobkB9Lk2XSNACXfVFcgizhcPnDCRW815JxKXaQ5sd2aewPDXAhG3Ea",
  "key36": "2GtJ4pqagDNmEUbzirQAoaMK89TzGGzU6fKGepxsKG6ed24KWcZYXg81vx6vmAuRmcbQ1HkZnRVAAVGhtEJC1YDH"
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
