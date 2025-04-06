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
    "44ZSP49FWM5zxWXmZ8A4N2hEyKsVN2wjdTrxoUGQpKPyWHBpFx7cV3oJAeMxosG32CxYuL4B6XqWHaGU4zt1Cce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RtniA9PkMwTMCu29ZT3GZPWSYUx6ccXNextmrPRDqZXi8opSSCgGhyn8tDKinZXDhb3AYKDvjptuvKHPV8dwdm1",
  "key1": "65BdzR7z1c9cv3Tsk6ATHWpEuQkCbwYvKA2jo6Jr5QJQDpmwXcY7DVhCXkaQ2mvqqeQc9Agt5Ju6Jy5b2dxJ9GKi",
  "key2": "4rSZ1jtnLEKaGS1YCwW1vuy8Yh8eGCafcw4Ju37Rqjzp8RRmH5fgCQNzRVqgonDfr1VHQ86kGn2ZTpYD5o9mcogu",
  "key3": "2pnAi1DcNLkFgxHbSJCXDnL4oDG3cRHXCkeMjGd86GXVQHfDxxudhXge1cNaJHh8ograBodxos8m6bC21FMWnBgq",
  "key4": "2aU5H6G5zf8V9pA4XD8kYMWKD18JdM2Xgx7s3GJJDqa6gCUyXMKU1X6rJMwX4WMPHZBobH5LBYENpDQre2uetMfP",
  "key5": "uEJQCwAbUbC7uvZfcTD5UWsZujXWWsofeLGWX3jjtW6iBuebxn7QAKPpB6xKEmX9CpbLkSA8jknDv2x41LbTfKy",
  "key6": "48BmyAV6p19BosouJP7LbLHW46WBjcq3Rn9SSQoi2C6VmrXRjx34Lkw3fC8XRn4WKUmQRNSa3jV7ARJZB74tRNSC",
  "key7": "G6yh3g5FniT8iUx7CDfWz3zcfmA7MjqSRfkyq2hufqGHprCJ4dcVYbzT21a4rpbUepzpGdCRw3hS9wkSWzG5xeH",
  "key8": "2EnscFKjvKhi2TNnnXcSWeEVmgArkPNMpctVLkRbUXt9kDxBKaoSRVMNBSsKJFzouFYGWgPPH9xUgXLAqUDYsCfn",
  "key9": "4NxtfYHgsZgzHisvX6WGcFPYBeC7iZ3cHnWsvEJi7VpPU89LJYNL63j2xKXM4Y1ERiVMcQzgMtVd6Xs8ydgYtJbJ",
  "key10": "3QzNbNNc3K2uzAmfnzbGjSvq741xDbSN4294wUpvQKNXQNWTeCPbK8UrDkri3QMjKHSRVuUAD4GzdNjdRRgKZxzz",
  "key11": "3YdurgQ7ZxyLGS41J8qpa6w8ooKQoWs39FurtzVecofspT8GeiPJk1cbXnLpbAK4THZkC1EMb3veiLzQcuVS6zxg",
  "key12": "3BANAm6P7m9j4nqTTSQ9sRnwQVxuqijqxaUXB2FwcAgWUCNBfXhuyyWjjzW6uJaZeipBMcyS9Wt8x28NXbAjeBhZ",
  "key13": "5fhwGxefhe42yReTN9p2BUCQXzqrTcHPKtEaQth3dKzqGQFaTwMHTBLoJUU1P3ysJxJPFH61oWLVayMqjWoyGiP9",
  "key14": "5UZcNt79vv1Wefkomr3CdPvEnjE7aErq1oZH6W36ivB4CC7dgbwyDEeoKf5HsURm5jvThUXfkGZ3LvR49RydLri3",
  "key15": "5kxSxiKa5ixf5mS6D4puw4kE2GPgYrAEHFEXNvzcCmWkJrKeQZsVghHBVmzueux8C4t3d3Rn1XQBnwhExRMHdWkU",
  "key16": "4Qs4RPPCcSPQwGU49KuMkiyRNDv3vhq1fzRt7P5AwiKXmvBi9XN15kq5yjCPQ3hoswESAXhBEBz5DfqSQg7wQLPe",
  "key17": "28k7iqeXtj75y8AodWprjfG84eDf2KvRRDjzJGtMn3LYdyRKgjx8HjLCSGFLeTCnAojg969mVs5K873AvRsDgNa7",
  "key18": "5dMjU3T7KQYqZjosaWYPYNVg7GVf7UTFHfYh1NLR3ZzmhHhauXGbR74umpJjZv9mWg7wBk9h6Kp1zYBmaVmW2SAY",
  "key19": "5xVdUdkkUG7XiRMtiCUxVoEqvNz1Lt4XYXknY74zbTvvE8jzv6x3A79ZaPeTUKRba6WR6TFksVjwcEgC3WryZrrL",
  "key20": "5tTaTxXh7ZXgRuXPtKCShptQd7hyxZQsxk3Nue28oYVXYUfRHsSsPVskqKq7Xj2xYEUujnbrY3DYHArPLgSL1xBx",
  "key21": "5fA5LtaqDgc8H3XTc5mmvoD9Z8SvXMFD91mdWMdXY9ea68QtU3VrmgEUFV7Y2gbTwQvSNLzaZhEL5zRxU9mukcvE",
  "key22": "3AUzvxhfSqocNVPb5SxGVBbMRRZoLpNVBKdrde5RJ3Qyv8mc64X9G7PCqV56EEUdWWKULWR1uCgarFGadLW6jiXx",
  "key23": "5GQjUFWoGY8LFA5kawWr4VvfjEZbvHb3nRZ67nvUkPo71DQvbAWStCzURnEp1m6W8wrUw1YZKDNHUjgzZ6Qj1pM7",
  "key24": "mHrrKz8vCUQerVRzamZPTndnL5j9SRcueZq4xWiFyQmmGSxfSfC5Hx8AG2h299n9a77pkXMQSDr45j6kkXgFnfu",
  "key25": "2yt1kdMRs9uyLc12BcpZiP3s2sYYaRQMZoUASu2XyKWmR6h2Z1H1J9peczpzoEGo5YpSFSsF7qhnCxt95PV6Ws9P",
  "key26": "3sR3H8G2vDeQTusjZ32Bp37aMzZofFEN6Pp3k9u2mvexkpn2yUN2PdFQMypCUpEhfEnytDHwzGmS9PisWP4KRfGZ",
  "key27": "5yNXARP1RYfkf6pwRvfu7L8uwPdkLtymRKhbn7dxsyaGPXqhbCtyghv3pQyHDZPtVNXvZUA4jkq5A845XdsEhqLx",
  "key28": "5dXFij4v5jb85w73nf9FAxQpfpns4GE9mDiZFe2Rd1m6LmfMTrAEj8dLkjeRjGAHHKxAur3xjMUyxZQV8LyXsjg2",
  "key29": "oh4ycVNAdaK47ZHEG9U1FrtaKmPnG1Ba8aHJ7CrCQupiVetcvTq3ke88nwZ4ZzGs4KPrF3D1W44qEYopRaEiZ5s",
  "key30": "662HxXsYELYAewSQSHsRq7wHyDCRsh799syic5dWrxjWNJ4XY9jQTnTDWtoWgN9BLM3eSPk1BK9Ugr5jPkrp2hwz",
  "key31": "4kHLAP1Rj3D4CiUdXiuB3Gjhxwfe9RuAKAMLTcjtfX9rnCW5qAJJeAUPeUWxSkiza2EWKaExkdBxTrBpw1goknSA",
  "key32": "25U5nMTVGTwKSAySPNGm4ALjxEfWPdFAuWsyWVT96Xj6VaU8hqNmaKNqeLViHieskzEZcvtDH9hkpYkYhFP7Aek9",
  "key33": "4KtQ9owo7s6TEUDJzFLt1b59X4WSvRXp1a5So4JeYqoKHg16czz8NjdRtY1Xn2k5uAsK8yyQc1irok9o2qLhgUu"
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
