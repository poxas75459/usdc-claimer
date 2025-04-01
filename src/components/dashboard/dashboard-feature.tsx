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
    "2zikgLWxGnjUVUb6EuBt8yoZoMXsDwYLRrNE9hNLnKDt75uSFa27xJvFAPCQbLCHtW3BZoz7rs15QfpZHfEaoZva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4162WHCFamxb4SP56p8rxCtMT4P4zNVt2opKcnbk2AWcRmtLHMuNUDediqh8aVLFvNntygpfSqncJEYv8sYWjybB",
  "key1": "wbm54tpL83kLCgbUWJe7PnUPQxGg4kCP2MWgrArFhQGJYFQ4sacYWjgXjBAx5QiaqgnTHpvprmpekUtSCzfngBS",
  "key2": "5PfowGJh9YuQwEkxcUxvtmcRMzioNNZXajHKzZtm2hWEAF5qMQWYn3xn4ZxkkQCnWSSJTwBhLLRWZTzdbGzjjEH4",
  "key3": "441iCRrr1mqeL8VVohdWkfyvB5eePEGy3Jv6rKPG6HMBBPchQeNTYf7QKQDxu4AyQQ6RQ4WQwxx41qU7hMn4bSWe",
  "key4": "5GHJDwBjsU3X5QHD5B3sGfyhRUwcBqe9KJpC2MR23F1DWEExfUbBZoFaBwFL7WUrcghUtL117vz6mJQFZTWy2wdi",
  "key5": "zZxiPB1bWA8QFrVaa8L9y1QhGgixi1S2yjqqirnpBh6vsVxRk9Wbws9j7L5DezzFufk1LJqdHG8FuFm56DsLgX4",
  "key6": "3oaKGm4gJ3RoUxkRhe5sRgVmJDo6hxcqUWdCxWr7DCj462anrTZVFbRUbs4QehRpuSyP3ryTGTUyZ2f5mQr36Gdy",
  "key7": "5EWdi61p3ABvQLwPF4QTeC3N2CghRyAtTneDqsKD21zvVqPg5r9aXBvu1KTVfe8p61ww32TDK98B94z4xyZXZc6f",
  "key8": "3Kt6y9YGcejy3Hex9WPmQFYbkPRGt5FP8qhYTtRWiR9kyvqDepK94ZxWisziaYaSMdYqV2TkgLisbu1aGizZwQWJ",
  "key9": "DjPez2uamY7nbyuFexX97NzR9eqe43oi6oakWBARuH3J6NyzxZmaZKbtP6EFJzgx7t1KMXUMteheLaBoTddRJw8",
  "key10": "3xoiiNF3MioZw7WHAvCzJeB91tQinkKdJQkJQxZMzqRVoH8DweAk9v3TF2xyRB63C7mtrSsKguszrgT7HjZ6SkuN",
  "key11": "7pWdDekLshjLe9dGZhWzf1aU6zBBoLJTQtUCbEp7oa6RDZfMusveN6DPm43r36CxJepamEfTk3NXD9dLLVPVcek",
  "key12": "5uhqBb4W7hByLbAGApNJW3WwP5VZEmhjC9WALyCAUeb5kHFwAobdrHWNvwVJGVhmQPdHQz2KUbtsoH2wn65J1ypc",
  "key13": "4i4fetSJByamH7MVk18Jm9HLj4kFprJRdgbBCs36nQ7rhJN1jZ74WsxoSF89jrK2f3kTHpbzcLVUgFvpBRLqFveR",
  "key14": "4eNMhBTC2MMTmmRMKSHkT9674HGUpdCxbSf8mKGza6m49qEE64X9gMJ91zckSj3iGnNo2tDrUj3VErPePto9m4jo",
  "key15": "5eXDSLWV5diV8vHmjSB8LovggGSfZP4r1iQanqEC4KqjhpmnUravqLp5W8dD3zpQLXFaxYHT72RLT86uebLYWVqY",
  "key16": "28DYftYR1dsbcir1516Pq1s9CrU1Z9p6ukAGMbSFhuSGib5XAX4WWPwv2TsRAsiPNBya17xQq1k3Yi8GJr8rtX7E",
  "key17": "2jyTFVzhPKrzqcETiG6x7hgZg5JWmgW6pPGttB21MLgRK3TpJYsS5yPr9XPqse57LcZhcb9TZuCXbLbxA7cf3gzC",
  "key18": "Jw7reZG82HUsHGjNvoPSXpJ4639hxAtY3n8aoxVXkR9rfLFjTkhBgccWatCS8GfDqC1SAibmcbcsr5a5CXxynYZ",
  "key19": "5txS2vhtZtZ4DgSx6PWUC8fzhM3WXEKrXzcjjZ5pxkrTgFXfWK6uuhzfyjo3xqtigBfyUPn3Z1xGj9g8MJQ9j8zp",
  "key20": "r3HC2eW6C1J1N1QQvgQ9uPSD1EKybVFUKEQmBwn13hw2qwY9rtZ4B7SpWsSLDLbC3hks7aw18sdCNNCAjkWHvB2",
  "key21": "H9Y3qLXjWsGkaQhzQk9EwwUvUtrnWXYmSDsSm1y3WEEXa4t4GAhBpNJtTUvjgZAQ91utujdwEzeUjNFu13PmDHC",
  "key22": "3FaBFfrtK7tHuy111Jn3GXVnxAcm2af1sczd5vCz3mysAWYmYk3q3sz7Ano1Y38eQsNrif7raZHVR779ghADzfWP",
  "key23": "3RCNsrUjYpqExVMhs1cFgZ4bKvp1W5eKmJxQaEhq6eNyUCvrxW8j7TKefgaNX5FuNJBHGpjiKzuw9oTS6HJdMYJh",
  "key24": "5pWbg6VaVpo3p62DuZnBxHJZNUoAHCfrR9HKExdCr5E9kHzyPFBRNz7Niu75p8cVwsdMcvQVQZa7bV7MNenT6w1R",
  "key25": "3w55349ReUf2DToT6GB9eY9vH3tQiTpzJ8ykzBErUUTPxaPPJp7GNmkvHwaPnhxhnmUKuNH6SGiu98iU9uhSHHYH",
  "key26": "3wkb4ebBnthAopYTA7bzzCFw3mnSe3VQnQ2A4Xp1q8fPRyXKM4URezEPCf8PsMPU5Da6VsWPY8bF5SpaQ8yd3ky2",
  "key27": "4XxwAhXzdfA2aKrJCsaVBwJZJR3Xasbc3SmCsHiobz3AKrXt2AKfPDfVjmL4T9HZarnEPVr4dR7wWzcxDuNFEuYb",
  "key28": "5uxxuGyjvqFuUgJXN4JGjBeCTTDB74CMBPJxuLdUwcVQHw9yLM9v3FPbp8s3eAz6Rmize8zudwLJdBrPQqKrxGGE",
  "key29": "53RtpfkknFa9iEqTo8yvTHTCs7v2mnJ3vFQvdGpT6hgNqLnxKLRx3dTXm78BiDuMfbSuJqsKfSXtT3r75X5Ps5YQ",
  "key30": "8rkohg3taTATcxMzGHE9nxHwvxdr9W8DiNfdP2fKzjiVEXDLneCp99ig5udLiGz4AVFi9iURWjJhPjFwcCfPa7H",
  "key31": "4HQidq6uK6ZZdJexUVTLK83SeTy7Be5NoJcMA2gzGunHMVDKoVQ1jMEfJdGvHAw3WLwkwgEMCBV4nWmiTcN274BC",
  "key32": "2NiivJNrm12K41LtxrATHUsS2SyMUHHL9QG1PxHSDqBwQQwA259kDjyUv3M8eK76Sytw7ysArC45dm3xFwka4MXh",
  "key33": "4ejeZjAPtX5DsEitDL1Z4pjKDd2fmwRQ4rH8kwYbHoqKZKwuyBZJUFaasbXWzP56x8nDKkmnpZLUv4ukFj6aw1h1",
  "key34": "2nJMyZD1NE71Lu2snTe4HiUnMf3CtwV1HQrRPtgJYLkxyELz399HbymG4TN2GHbtw33V4mEbrJJEcAZrXfytCAze",
  "key35": "4sN8oj1ZnFmwQFXT2H9VNfs9VyHVNYN71f9ETTasHhbpnWWYVMLYs7mP5CzrW9RYVNCXtbo6y3BDX3zW6hjeep7t",
  "key36": "NHtsYqVNcB6qfLZu3iL2y8Tx7oKq4C4BUGTu7tC7a1t4h48EPxfrG8UiXA2g99dybKRA8pNWYgcgQZRXkFwUSAJ",
  "key37": "5BFAtdAkzpooyjTt7KMJqqiuDJ6zaCox4deP43SAcmwx6wVLPk9FzgaPt2C541RSYSiFnw3SMdm7Zcispg1U7sfE",
  "key38": "4hBNFgHhvFbSBUnAchoSP56XPRzwVcSMVfrtz1yPwfCNZzRGroFPwRM6yHCa9XTsfd7KPAJToGck8CANaPaoipF4"
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
