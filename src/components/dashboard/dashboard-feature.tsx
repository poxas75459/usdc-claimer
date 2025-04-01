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
    "35MBxeJyDNyZWyWcgcAbhQum1ZqeG9APjuTHkPeTF6Jx63ASqZq4LEiJPPfv1BgKRnDtSLq67Y18Pz6t2xqj5Qe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cW5vhD8J32Wte63QgKgYDTvZWTdBUTyqiM5r3HcvB5LTRFd6BB56iKpBWC2jyKuc2UDVKhYNvPBGQaVuo3TpmLC",
  "key1": "4eGDuvXXQ9KLR2PHcAXJYzHX6LVNuvYLsF9xSNSiDpYWuGgPcRGYgZ8rgBzKhkxgwpKRWJLKxndMXPSrZgdRFNct",
  "key2": "25zUCg6z1eeU24QT2G4itMAAWbVmRfXwvryEvsv2BbVYQ7Zq9PQGkgEmZNNapv7fSqZiBkZgAEyjjsDHpQF4KqFd",
  "key3": "3B8C5QEei5ReV8yfCUkY7wFg7B44hEKS2uUCWA7wNQ5U5KiKvy9Bybj6E88T5UUJTo7xzVgzk93pT2Cqa3yW9ozp",
  "key4": "3YXTReF48nY3soD24RTajJCaNYubRNni2kEed4DNrfzHmmv8CBNfzyebsByePscrLdUM1CWYEDdiTjn9VYF47bt",
  "key5": "2eM79mq83bZe3PVj83jUx9esT6L2k71xHuyemBWMRW4tRVbmr4VANXVpYdL1WwDhxVTPGUCFLVw2uycbXu4aAuXU",
  "key6": "3vs6LZbhxZfi8KcVN1wDYYzPhNHJVQNEsUXqZRdmoWD9j12yTh6fkGDrKbuCFHHLh8x7cxfEUmcmjL4X8gpXeyCN",
  "key7": "63BNgLyVmsVJSad18QgzgeV1MVcsdwr4GqAX5nFudVXffpwDvAWoqDj1YDaJVMyE2ZMUfWox6odqjeUpMpnoGukk",
  "key8": "56QP83xsK71z1P1oYCfdGfFgFPjU92c1J49mZC4MYRuh4UhErG7RfdvotVaUvGZUcGopAw8a3vfFRjrVYgwoWntD",
  "key9": "TDCyxoy4RVkodoVJS2LnZWdErSdaEhg9XxJDSbA5FK3eBfZNF7RGPN4UPb9dRg6ad93RUBy2AFFYT6mNVVoKYXJ",
  "key10": "4ZstFb4NdUnt6C5du1Ho46yPCUqDCWUvo2f6e8WTTZVnkKyLhXvrSu1FZQDdSQc9ZmREHJKB9WZPGAdW78kZk7wp",
  "key11": "JET4SZkPsxnaUY5mkKuJGhDWA6uXRWNCuZi8ymQr5BheTAvUt9r7FzJKXSEgM5FTGjsZk2L7YbgBkekyjFSzfdc",
  "key12": "27P1XJtpcdYv423oLZUkYYRY271CwvyrVvAbeauKS58VUQehWVg1x851VRGGvZztCypiw4mLuhy5aie99X3xvUNj",
  "key13": "4psLYkdbXFkzW2bV22bBTyVHuqz1DdBowe1TcMoPC13coQ9u12qRZf96xSfb1jiSU1eAa3g67LqEuP9z8wj68FA7",
  "key14": "4jGEeZFkyfdoVMh2DjrDu9aLDL1HBNULiVeU54hL13GkXsPTdzkCmGaa7LCVyjY2vSM8SUjhQgtqAvuLC23iJGQp",
  "key15": "QaU27iyXzpxiU5uBHgz8RWUfLYqzRMZnoSyeKVmzfVv8MZ9F5vUdPo8WenDUfv6N4WWh6Sg9W8sbYdM1i5sMgmr",
  "key16": "bASto8e69c8pe7zx7Xv4anxK9HCWxPq4WgeR5En889Qk744QRsmLfmRT9ghW19tQVqnsxACA5sGqgHeQQj7S3tz",
  "key17": "3ooCZH7WMoD1WYVs1o7pVCc2Q1ZvFrjEwZU1pwZTsEM4erKbgQrWwpQZ5vrctwtECFgDMxAKysuhnQAGw5C3VqAG",
  "key18": "7oqsJBbsRRi1ZTpk6knKbQb6LyDbofvSDuqYHXC2TJfkENR4Z23oMqCySXYBgjYNy3cGLgMQdAC9hwXaRa5tUjs",
  "key19": "zmBKCTngci2CDiWci6B9T6PU6wLDrWnmXVqymVEaTguLLyfAYKXmWPp9StPLDJoaw9kEJsaaDRbDwYMcz49DjM7",
  "key20": "1w6mnjnHyS5ohuNj2vL2jTDGQBNiE1821ZTo6s6t5H7ALutbgrBLPYkNftixfzNHLnKcX57dVhuTRmCJFQ2c4ZH",
  "key21": "4mSXXMjEJojyGaAwPUNseAwe3po18T4Ch4RQViJt5B41eveWMwbyscHuGUaRMAtrAbULE8CsSW6Gbxzx6vTibmgP",
  "key22": "5mdHcF3QGrvD1TDmCdGyD6Af2P1bH7kUWSU3uo1WLHcAsTL1v3Q3gNRVbinBDhKM97cqd5yXqG6EU51ub92X93Fr",
  "key23": "3pSrCmPYPcRDsRqm9Anj3sVknWt6QzG4hh8o587hHXEDpo5XWdQRwmjN3oJvogEhAcV1Hx9SAT8PZXxnsFB8RBPK",
  "key24": "2WspNxDpFkQJzrn5EyQd5S6AFQuFuJE8uZMDKssmnU7zQ5t9HBGVWUChU8fAdTkK5WAfCYhM6DtR9a7GE3vT9DsQ",
  "key25": "352BfbfHLv1yFAtZtZQcy6m6g2FhVA3Nqzt1x6tfMkRtxX7vJUwYtxKGWJYXak5FpXnoiM3kQVN32MzKym5Z3295",
  "key26": "5TVDr4hmrmLu4sjUWWEUBN3M9zWxXqmwtUpniC2SvuqoGEqCBdSoAAsu9ar2oi1c3FDfxLN5ueguHx2WdawJbVSv",
  "key27": "2XU9yJGqyNiueqFB9grcSaWV4qJSxfVRuP22dLW8vjVfB62ZCjX4VrPJR1sGcW6AQ652vMP9ZMksbv2r1xERRW77",
  "key28": "2TzDr5wz1JYGpsUufdUwtqCNXejzCQKXL1MTM4dfUKH9R23xX8sitzky9ryounFmW86vEqAev9RzCYqEg8khNcYf",
  "key29": "3FMUWtDFoXeYQFLgBa9QqtkEvmPoHYLxdfrf7VbhLEEZbS12nL4sLeMGzPMVCVtRj8nkGov1XGv5Jn1E4YK1BfhH",
  "key30": "LeEzTcSCF4QZCdbFCKuSzzH9J1QuLzQNG5Tv6VqczsNH8cwPaQu9fFupYxuNyeXUWQ245SKscdZ6dB3DMNoiocx",
  "key31": "Scx1mApSAYa5gevF5s7vhrGUy1TXM7C2JyBDzNxjpuAM3ut2hSypyWZ3QwZiXDyM1ePR9d8m9YxNL46TfbaRsrE",
  "key32": "2G7pWDvQrucjq9bWJqyvvrTk86PbuJK7FP3JPRJGqmbLJ2Vskki9rMN31ND9ZTvn7FwSnvNsLm6tG6RitWyBFeaU"
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
