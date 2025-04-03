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
    "4jfCCi4tEormqqjUzd8QkzeMVqo91Y3H7QA4Adgv4AUTC6989Z9PcfQPnSQamb47knek3qp1wd11maqYZMMB3hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJnDpha9ZH8hwZeZDCaxZXgVwB7FGA2s3Am284W7WgC6ehRwoJBoWxVywqYLHWxdXn3t47xzdZWywk2qTXNnJHQ",
  "key1": "5yzrEjFJu9wb7ok2LNxk9pm7MXC9fNWyqWh5x1QVuTp9dKjbLNP9gXmdSuwVTaQF4fTByzu3nggoLuyrGMbtEczW",
  "key2": "3Ud3m7usGJMJ2xU6JbpvxFySZuWKuYVedyEk44pRG3ZCzqnLaPDPXH9foXykqUsNvo8sri6vLKjj4cHgnGBiUmge",
  "key3": "Y2fk971VZUCYSj7QCu3cH9Lcnvn7fd6xYKt3cbF6fLFQb6CV1T5XD415MsJGix8UHJQbFjSwnGpT5a9MRZo6avB",
  "key4": "2YXEJ7RzbDs3uPA5pyQ4sWrN38KHanU6s5HR74w9qj1XjrQqkJajDaHvg4UfQcpiPehVw4ZTe8vmLqUPwNiPt6yP",
  "key5": "3FPpifRqQj6qNHtvcjxvCQucHkFk5goNgtMfFnyQ9d6B5ThbZYDm3rJ2HaztzfyAsttBhDixoJo6Z7R1uqkuXP6t",
  "key6": "33A9aaTtDxETFt76Ewg2nk3qa7h5AUm2kENA8qo1LdMCvFSxrFWwwbFMVAAFcnHJD19oczs1UXH9W2yB56xXPD3k",
  "key7": "54aUHGo9Q4BF1zoJUMNXPc1bXnxQoM62uPYKW1snuj5YutQHb2c43Hh55duhtKoZ1UuszEWESsCWcxfZ4Na2jc6k",
  "key8": "rxJNhArSBuDk41Pphfijee5GqnkZZhKSX9cBBNVj74jXJP36S5WqrgZ9brNES29PDu8A3oSA8J6Ynx94iXm1STH",
  "key9": "49Qvdc2twu7qZsXFbqx4vVxBCQJgKQ7JTuMB7gw2toAEA2Mf5yxHM513McEKURiUMk45rzGKN12c4trhSr1CNSJ5",
  "key10": "fwJaE7p9T7G5NFoznujrnZXu6w1QpBkbyLGwfCXJ9jpdbZdLpXvHrQQWfm6aEtq8T9JyNEbBc37rWEgsD7gjSwX",
  "key11": "3MXK6nuS1EkVDKMpuEk6ehV3F5scAUFEZ844T1QEyxaNPPJp8JXYyK8h8AXwsCU41A1NiEMoGSxdWPW5cuPvT1BP",
  "key12": "2Y6QAavCMHhoLByy99eGuNTtLQwjEUVD9ZK8sVj6WRMm2zKwKrGU3CRtKGvfRSQN4UQPwbsZgH9NyoJEL3h75CyE",
  "key13": "2q6RynZnHnpjN5JhS1z9iV4SJjkqP9yNfZNaKgmkPLNNrnJQ1GAe6zTQECrNv1tbXbtiWow3CN9UM2CixZVxFk2P",
  "key14": "2euvD8XostwBQNDTQyjHE1QRpvP283CPAMk9u5qJunUvQbnLDMzvFpB255QVZdfZL9Ub1QH4W4wBDao82CyqQDgG",
  "key15": "4MDWgm4VWn2DSedzvCTcXXdQuWiXDYGgZFFGMttfV5HEHYvXNGvVa2kbKd3VhgRovH2EVx6D2kwh3kiVqCZeCcj3",
  "key16": "2GLoD3uPgjLM9ZCDbcFqigRZvE4SWDnJx4nhqdpsp8f3EQ1VEVxYi1aJL1mz6bu4UpcyZac4WiecgizPDuKg5i8d",
  "key17": "57RLhm3CV7uARiopeMK3TMkRFFKFVVKnwevF5e2xNm9D5VSSQNHhFC1cX6WWdhVCK78KDkUMHj8NZRwfDPD8ZGj8",
  "key18": "4SEc95KGUX4A87fLB1dsbv4inLVa8AqjjbhPjhMKLnKRXDmsbuDETjL97GPfvsaWdUYGLgmwGgEuPP44uE3PtTot",
  "key19": "5gir5PynYXQdqJgBgMUkHmJiZKFUBLRqNZRJbkRVBht9B4yBxfE2wUgF1tPZFk7h9bCWp27k2m882UndDGmrsmuk",
  "key20": "5mCEETKoZBBtdZYUwB4ky24394BTYN1xf2CjS1kfU4vfJhhbBaQ4DPKDB4sYt9ZkmWKUcqTZPpY7zKzXjDsez9hY",
  "key21": "2shcFSgLTt3wbwDTN1m2X9Hv3zZbJn2YaVDUWkCpeqZ1QJUyFkREUf8pbciKV8qfq4z9xmFS7hZYDvJTPVq9gjeA",
  "key22": "2nR8cc6Pazv3de6p4CozgTVXmR1d7KkDPCMC49hDsi4ncKW7vcSzTRXXakBqXRMS8KdNKG7Kk25iNnTujxjWRurH",
  "key23": "ewME4uc9Ce3wMLSbufJywqiuC8XF1JNqS5XRMtQC5M7cJVzcrd4Bzu1ups7RL8udLoGoUatoq3qEbzG267H55S9",
  "key24": "JhVFLpA2E7kDfNLwR3TE98gEjaapFCq8gvtW9kvXDc4g71iqMLJi7J83uQAMTSfznXYcYLmxbDQ4JGU3W8pgggn",
  "key25": "44QQLHTw79ZZSNYyxTLqdq7tMkrbWQNHsZKFM4H4fAVFjMa1bpkReoNyFZ1jHTUTR6GAkCa7NnnDwmMUchffDh61",
  "key26": "2GTxNk9MzMp2E9bB48xwvkaY5xVKhazjmXazqhq3jwm6iMzRrHebUzRbZwcdJhUja5g6gHJuVBc8SwmiPHmk7Yx2",
  "key27": "LupEcsP5Ykp9xnzWVxYwAG7d59s3PhmcC4CMKqj4hpVd8ufrS4nk9fZn8aqaHF3kKPwYkC6LXg4ZYiWh2ryRySs",
  "key28": "4z4DEX7PqbRhGiz2XaK87GkrQGWZTK1LbUFFUXKELV2gocgUFnui79D5jz5QaiCma6Wq9AmxM1xH4Z5b2nQDkZYJ",
  "key29": "4CNEzyMx8y3RG4aMV97mqiu4A5hYJ5T6YpCYsnvqFjsCWgohLTQZVgDXTrmEvaxD39KDfcMJei5nPVU8wptj2Wtk",
  "key30": "4kkcgXHNemngeU1xmHijSVaFqPAoLUhPiFtMGVSGUQ6qPv4Qttk7qcwNZFjTdk2SaVMKm6PF9kQyxdfXMpBK5oi6",
  "key31": "Q26pFCTWsrsc8fByjzDzdZJwE3uTCQb4sxJd3t1sR96fACYPmf8JpMfwv8n9sxWxf2TqvMZbv9s9xttMy7pWhve",
  "key32": "YsKb7uVCMtD7cr5XhmbPKWxwWJHKw6kTD3mhkgGbRs4UktZRVnCCUJP4896qRnJVhxbKede3SHAhXtyhdqjH7pd",
  "key33": "4cKgNt3VfpnUuggeAQ6tweFxzeVcFY17X8stVKuDmhq5gqsne5ZLR3NnYc4oLg1n7YziEGh9is4TMJCbpkQratKs",
  "key34": "D4UyVLLBKHSbDYL5hXmPKMYkF4utdPCermDuGijqtwiDAPfbPRsyQf8vQUwRiwrEGGhEs6xcZBrDj6yXGueSE7u",
  "key35": "47DoJQdDVgNsXYjuqgdEsEZ7moS9NeY74mhMTy7J4qtC9KuH648viZck8uJd3fvsD1zH1UBfqjWwG1CCEwfhjoWo",
  "key36": "2iLnpNbRKZV7TCVVddizBwaQewquao94UNJCH8iPpkYs5tExrbuaJs5bq5GdYm18SK52NuH61dskCNScVuzjqcf",
  "key37": "UbJYeNas8eHRrSAMCKcCj2AZ18agwWvBtKCKJcDHsqNQmT7DBuvLMfmTLTSiStj6jtvEe1QYZcD8EMPZPvpgzYr",
  "key38": "2HoXGtpYUkXZsAmUasBsQrMHhz3YKXszVf6hKeZuxDKGvvozKCLpNrbcUrVFTUCvakpZ9RtfquK3vo63Gbajdmbj",
  "key39": "xC1BaV9CPy8569tKG3oG2xVpJTD1B5PQfXyKqNSfMo68R2rDCbZbDNvnBUzkSrApPjaaJBdpg87G1Q9r7AmKepu",
  "key40": "5DvC4EdkL3Pqac5A22xXdQDVPATvsditRV75DhWJE1GKgJXvNu9MCXP4eMXaeisHmd9zTqa93tNq33EKbhnt9Dex",
  "key41": "6EGtqy8Ai8TMaZnaM8M4iiJbBsbsuVGuMHNT1x18SFr7dFyrwQhHVDNQBPkKjYgM1sRAksjGCFMM9LMrxEMXgfq"
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
