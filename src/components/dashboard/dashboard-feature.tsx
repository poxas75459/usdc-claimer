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
    "3YLbJ9bkRV6hXQjYuou6thaCjFEUBT8zHG3Q8agQ7kNJ4eHcph81UYYmcCTXwrTtYCDopJS2GXUAU11iPekhRBHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJQrsW4Rd8STSJQC4H5Zxcga2ospx4mz25EdWojdtFQDznsJKZGRd68ojH1ein9Aj1gMjS1thcQaasxBR12gJMD",
  "key1": "fH8ENyftsyVhViodsS2MWPRJpsN8KKcLku2wPqEDqZKXCQU1fnwdwi6qhcgt84oTUmfqEki1o3YHJmtTWe9EmnF",
  "key2": "4Rjw6opkUNMHbBVvtsnV13AcR7BQQPzVE24GoazGNwm829sS9kbBK33asQiimzTPPwTrdBGnVZFerma9LPw6c6Az",
  "key3": "39isctgxG7nEEP9megRR7BXkjReqGgkzMtkmgZNsgwhCbPCa1u5vKfWq1PVZNUq8YTd3Q1upuu2gbMwk2jMwAc46",
  "key4": "35QPhKsiVC3KBVJt33HLMrR9Lsn2d4qGuLiVkQZz7XigqkS6erSbdfaTPgsTRbsUWobkx15M8NMZQz5mrjSGugwc",
  "key5": "3X6sV2X676dFw39cnmmtVDdH8JQTSCHw87dbDgfHGAF9VcHyiMw32CgizkpnyBGJcyT5bFRucufDpqMQ7iQaitXx",
  "key6": "2Zsp6QfcZLGGRr92zQbdPrD7EGwd2FL8EN46ze147sZtss5qvCLFhHZExazLBFsYVBuVv6i48m3R5yVG2TBwbozo",
  "key7": "38Y9gKBarnKjWzfCrMzfG99HpzSSYkG49X1q1B4egNqPFRXeYRsK9cvweQxvfB7VgHEd6gcKv1dW4t1nm3ZLDRJj",
  "key8": "3Qhoi5G3rhqmxJTHD4RUkm3HmWpHu2iUTBAdzNeJVq1CfioFKLArgvLEVcaRvM6WYfTHJHK4i2wsBAf68raAiYz",
  "key9": "PuXW6nzebbvzxfNmiGHsoq9pv4dZZdkqs3Kom3p2o2rkXJDmNUGdpq7dGCChbQ6hvWyQAwBEMLgYkFndMzqmt1d",
  "key10": "34s4zz4KorwyT55Ya2vhTpQ4MMgpWzgW2kw3XGf5zjxstxc24wLXWCvkKGqcroUBeit6W7JJ3RztdiYBnwEdA9t3",
  "key11": "4YQGJhUqW78chmxfT7DnNu8dcohmYv8HKCb1Fr1XSK9RLZkwJpKMJTG6hgkARsLS1TKTZEyzqsbThYxcrkH2XgS3",
  "key12": "24dfL16c2aYTbnHjUzr98MSpxwoyaWcpvURuwwz3WSZA7jbq4LrQDfhQoit9TKe3gWbsGrUCneV52mqGpxdwfa4C",
  "key13": "5PMffzHgUZ27gg9JgdtDopxHnZC87G3QGaiUrAGFPEi6Gn842TRqBn5mnFZPBxGNxMYYQnKACVc3q4b9HXBeyGpQ",
  "key14": "oaEhfth39v8qVDhgQrzy4CFnPxcT7RtE4as7GZBqRwXhBLdsgTmBuawproeFWP6FtXp2Rz2QqdKowaJE9pW8PGN",
  "key15": "3tbE5vnEySb7gXKEewnF4D9FUK7Hu3AtvfrUfiytmUv6sHoLkFMccJ7Mv8C9jk3Ae46c8HXjSZXbeZCm5Sn5HdRc",
  "key16": "9ocUHVqCCNbyLAURaiRY9FSQEuerrRvqLDfTSZTSWt3qwRSd1N9w9mxvi5ZtHynRtR37rS7zwjKuc1oYCqg3u58",
  "key17": "4hq8yy5GwnDExtmQQtcHWKKgHkCPjuabcrGWrcYbaZn1BetUvRWGwaypXToe3xE4sbJ266pLAnMRLrCdyjPkFvWW",
  "key18": "3EPd91EaWS3LRcmL9thkJKbqft4aZf41rhWdrbzEpU6afFwLNtf3UiuqgRDbwVXD3BAFSXEmQzkU7btm9XgFm56m",
  "key19": "2JU1n8pfXFMcamXFJqHR5Gh3PwynZZnF6NeR1JhPa1nUsVvDZeFUzRERr2rbuEM4nq4t7Qx2KN3opnCaMTVrPGx",
  "key20": "9436MBX9w8E6teq762sSt7snvNDpohn75uupkuubxRJJntCMFXrEakuJB8d81D5MXXMsx2Tw9VkJuHCK3PkaCDt",
  "key21": "KDDKNmDEXnKg2CZtgnM8PXA2o8xCov8MxiLXnVN3TAJRJddbErMg4TobAG1xd61rRTTrbqjG1LTr8cg6zMFYUUm",
  "key22": "3WB7JFNwmAfNPvw8T71nwXCFgMZqd4LkC9DpbKPnUfLxNMZ1mha4Cq9KhxLXrFiL2krxYr4c2ezZnpqqcihoVrnq",
  "key23": "2qpKT6CaY2avMAqCCdMQCe1bh7p5VLc8SgQY2ijvAXP3zAmarZXNXQ8gWtrBrrP4omexqNEHCQT1KLBufiZtFGAv",
  "key24": "5uEAACqsuzRBiWMZH1wvJhdPabxFdA24i5rhfF9xBjYBC4cwRNFFw7ATGm126ZPYeFwU2GrvzB9hePr1NtUKF4QN",
  "key25": "4zTHUa6VdVL89XKRz2KnT37TwsCB56AY6DsBykpXWpmuSaChwm7bzTbTUZCqzKSHXTRTD9xqDp4kJDMwzjVt6LRN",
  "key26": "5xSQ7pN184TU9CYnfNH8Dhu1UvWgEeAg3EBQk53fTFpAZgk9KC5drDatqg6fF9ZV7WhEav9yHmGukyqeWVdZTn9T",
  "key27": "2PNqx6kfu2cy2qe14ThXgTT2Zg9yhZHcGXDUBpWKs5opfMBL4gCicGdKJsA2WZtNUbTpfLUxBUJnBfkcTjYcbbcg",
  "key28": "2ZhdEqZigNJ1Wq5BiedCHBjvt4BLNBXhvMjeyygYvRo29Sj4ZiXaeShLX8vfR1dZfut5w8SBTBEUjnYGfeG8xPL7",
  "key29": "PBF6te7RUWcN2VQmFEGuYfDYycPmf5hirGwDm2wQsNCR7MSJEhuV9ev7D8c9GzUUqL5FP5e3b8Jae4q536xaqMA",
  "key30": "HK1bPCpSB7Xh5DR3G2JrkWni4crdbiV6eVLWZZMQyDa4hLZx6fpKB5S37QbMcmdEo5fd9kcsBvvEDxf982FzHoB",
  "key31": "2QUrGjfT3saDtKJrzuzQvg5z87zZK1fdNWkZTKz8VNDvN5SBNiX4hL2fQN8dRVWWdrbGqK6Nk6sm17ZvsJfUnsX6",
  "key32": "63WTPnkjK7eFbYcAnEPL2JH6TiXSFzfBsq37kWMLWxYFVHYVTvjUAnjyXJfEWma3hUwqmxqcdyBjtziDStX7bkJm",
  "key33": "43piHxruGtFTH1tKPn4jGT6xruKtcyQxBfYEMTqjn9MW1bhs3XZoqWN7kqmiVXxbEwdobWXKqiciVY7bRq15i2uV",
  "key34": "4535txTx81WUKTR167iCPbhggYEweMdaHGs9AXsE7geUzrruUeSB4Ww3BziHBYejbmzGDA3Cyy8vh5VPY5tkJRdz",
  "key35": "51o6n8WS95eVMrhETimxiVj8rpemTWQW5LQxcYwYrpWiuffvE2T4QGTsub3zT43e3wBczbpK9oujJY8mLTDSMaLm",
  "key36": "3GS7KXyrtqY3bn8LAJGNsZozfhYwpL4qYLqjEmdaGnVgxNGXXu3WeUEV34Xnve1h5KyrMxZihEztfNBzmwBhGPup",
  "key37": "3mG9Wk6Feh4RS8L8MQuSZH1xB8opz9FmYiVcTSCicCqpSXc23WxDre1kKhfWozaAsTJ1wmw21csNVcPDEbkhskjm",
  "key38": "2bNrLGTmn54MA5rdpJsXehRjEYcApfe9DgBFmnYhsrLTx4zTBFscgVfpLF3eXx59L8zxLkeZUDXXsRKgobuhJHEx",
  "key39": "4yeQoTnGCsPMhYyGDsjMbpkYKJqcUbDui1BPNSrKm6Lw98tE9xFmwoFtJ5fWcFzB8vFz9GPneUtAUFFU4H59Yu32",
  "key40": "4RZBeFjpttMehUN9fPxrZ5Aiyk5Ce961LreatWXtktBvwUGVSQSasQKXK9STqtk6CEKbBo6ezNe7spDvNjsY6n4D",
  "key41": "2rJjQwFdbjfEzgs1saGfeEa3R8CKXTmHPa8UpncnPfACZuT3pSCrZ5ufJ8Ee3cTMhhbcvjMXRQEbGLsERnkD9z7a",
  "key42": "2shLMpPySNrmYmvVLUkN5SyZ4ZBx6YjgBsKsFtwU9Zr5nBpXfMswFxY2inEK8NzX7dEh5Mrzai7uaSJDaVbZ5mQq",
  "key43": "3dZMkZZtjitJwDQo4b7bmquLvjcvRRe58Gv474oin4hyfwqvVyqTpXjWxbmshkjpJhN5MnT3UXdWvgDAUVHKERaT",
  "key44": "3aFQyWKwLkzobkDnLxXWQdmpH4CPdwNFZzNUz3eMh2fybJxhwFj1E9Yq4fisaNoPZcuyRwXmTcvkeDjxD3hSrxzZ"
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
