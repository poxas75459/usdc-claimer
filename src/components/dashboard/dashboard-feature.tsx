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
    "2Ls3tuUHTVfvqaynku4EfLTbpdkcHJPLiqrCA77HVsJWtEzxGqXYQTLfZjqZVBLjseaEYMeYjrn9xbz5VnfEebx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yijLdXdemxjodwtLnKwM5Ec5dDhNDhn2z3ECd3jYV1qnVhcLDd2YyRzFAynrg9e2EqdgpfDa13uGQMnPtBYXqCR",
  "key1": "4owZrgwaTF8tyXkSeKRXQWV2CAqNojkzQEoZi3TWCcA97TzwX1qMjNi8fXDBPhuBsPHKQaQToXEjjg7UfRf2ogrL",
  "key2": "424Y5D14DmMQS6SpJDpCqyAjYtxzfbS5TqDrqUDSmqxkiMoiMPPVPghdk86US47iuyKNyXCKkEZrwP9fH5PLn1DD",
  "key3": "2VwhgAb8PsCU9oe3z8QrSgHY9U5UGp5phiZ3B3tkGJe4v9k3hwGomBFdBKLdESjoog25m1m4LizT3hJw5BAyNBrr",
  "key4": "2vKqJaemrFwm7ebCqFtWw4XYGZdGCikKDEFnbLhBKhNJXW8ELT1fMQaKTa5MDpyB4Be1ir4WvdUucF1dejKy4Ze",
  "key5": "5gvGKHRkc4ayjCSKAaZnHAvbXPFzseiLwswoBJRjmaMwsqnQYfv198SDbFzNZ3aHo5zZ2sUJobzVEDxGhtCVnnua",
  "key6": "21g1szf1v7pbXkjeozzvi9mB1t6b4tpycuteqwEpfN5ufyx1MV6wQ1PqCbb7rA1EFhQMrnumJ3s4ksofxPVkGiEA",
  "key7": "5P6p3LWJXhsAbGttEB8ycwd24wRBsShwSKFN5YKBMwpk3S8E9AKX1Y5MSu9FDndeSkr7Fnv1JKUNtcHRbdgCwiat",
  "key8": "2EckAV1W13D1i77qx5fufLPwa8SchTHrxqXaF9EPvuWre2KeuXQRVsvoNQUue35Q8pr6bss1zSHRrxTNVtcK5yXk",
  "key9": "VLksQS3jegXK38UtdfsLKBQJj4r4PE7DreMrqNkd8dt7RoHUG8r7p7V98No9FwvwtuBBv3CXXPkSsmCp8qPPDHg",
  "key10": "2yE5d5GHUwQ722sKRnLYsbBaDbHYujzQ8iciWXp6uTbuc2tsm6K1K6oJ1DVMbuorpEeom3Vki8UmqNqqmScxs6Gg",
  "key11": "4V1TsiS9H4RFo1q6PLEd41KT1wShBpKHy4PbDLyS7S6e4n51BsjAX4pRcyAhNExx2SQ2eGgfTwZ5MCqkBSSv9BwR",
  "key12": "vFpXd8buLo6CitRPQN6LCf47A4uRSZ2AhKXuj2vBebcLMrM46b1qHnprffCy6UWGn6kLoFwPjiQj2c5p8pRCmkY",
  "key13": "2FjEhQ63UGNRb5ekB1nkE9dx8Ao2ND6V7TCEtFzK1iSTfDC9mYp9ax12xyR4BktrsH4YBYvVPemPQrma5pjjQUHk",
  "key14": "B4ZX2k9Nmacnaox8rV5ss1YFCAftao8Au8Ktz7WQDkWDsNzq1RFApKCt4gx9uwYMfYecmgJS3XZUMxL8HtMeBXh",
  "key15": "48qC4jRmZTyuLfRF7EU4txWFrsDYPNgauMEQVjkHEurb7am9QexZBbRYr1bJXNNJZWskRCWVAK8KT7LRPQPHVQKM",
  "key16": "4jDMEiNeH4L6bJqqfon3JEwqwwdYKtcNkVMJ9xHe8YT22a3NXDTbizxm5E1sgkHCjVNRudQdKKJ5qmaWTfAQd65h",
  "key17": "kMhwdNigrJF8s7zP96KH2bY8EdEDyDGJHS6NKEBf4us48c5qTVVingcuT5GebibtEyxtxnPUBNDNYz3ErY4hnoT",
  "key18": "5HpLRBPmhhNJY5pwUegSCSRHJcVJd7DmVuAu7Mo2fnW3pffq6PgD7JyXYfHTQQKm9YuEUBWgLoxUy8kcjrWs7wC4",
  "key19": "3SfduwF6Meu2sizHW5tHsDC9rQU77Xfb8ZVL7otwmMQ4t4oy6siUG2HDMfUYr5JKMuhRQMGwScd7gVBGpoKuJRnZ",
  "key20": "2tZPmF8eTVe8tf6tafHfa3UEhoA2UTVJJGwaALEtZfGKgpS6a96Gpbxw1wS34npXFL22fkmNjxZCt86EoTFKbBCa",
  "key21": "5CfzWeQVQg1QP7T8WS8W2NCRpDridJ9YgHDpiLVBpKDGy6z8jz5D5ysCKu7AEjiY5jgyVV3Gsmh7jhxkwXDb4s6A",
  "key22": "2hGsTYSzRDz9uckcsvDkx9YXLT4vw5AqZ7mYxmbjvJRHPoK4TF1esBwTa7C3tM8up3eZhbMX53ZQnKiZSQ1nuCQS",
  "key23": "5eE1xnquMs6jEfBnWcWZXZBLjcR8dUu2pUjZEC6gUC8DHUK3JRZy9pe3RTczx5QbEEon2oSNxtEhzzu8iYLnR43o",
  "key24": "5bj6PcU9Lgvu6AKyJahqE2PKYMD6rG5c1qcaE5J1BXvCHbBxSMGAPFHpA94vhyoH7mmP5mRPCmDgLsjMpfWEzYUr",
  "key25": "2mPW9wKmFEg5rg3Tp6ZN9njmJtcY3JJaN3XTAsE79pzijyYJoy7uyriWi9aHbrLzJV2hVZWv3epyHFikh6M65nVH",
  "key26": "2Usuo24Jbqwr1pJkDbkMEk1ZMKhU9jcpRxci1GN4pc5xARVTKM3Pm2KUqNNYybBEpYeCnbpesHvtH89f4faa4osD",
  "key27": "5sbfcfHJF7GtvSSBJ8sNyBrMRdszTJD3CrYPLEcr22Mtn7uMuV6i95eF4KkB28xjuX5AGsCYnS8v8zSxbtmVp9ir",
  "key28": "5TpFuU7Tdoucu8sDLS2YsZLABQn2WSHv5rVueqwst6znGVU4bzeK4RCzYJG2fY46FTH1dJKYN984ow63cEZbjJyR",
  "key29": "4Sd7otrwAgsXGjeKpr2ppKx5c2EJQgRffBYCBH5nzjA89w73sXDTLnj8Yy93qakFEvcQAKBXgwLurNrKFSxmmnC4",
  "key30": "4Av4U1T6SfqUL142K58zXXS1sf97pU8dbejmLvgk9RU38Lr2N93qkgmxUnPs221YZHKrnm7EyREiZDJ31sHFd9gc",
  "key31": "QhL3DZvsh6bVQx5Dq7NPht21kgikd5eKoNVq62rkVGyGVeZ5LSMuQFDJ6S5z48xHSfusqLp57Ekbk7dFH8Fo5PD",
  "key32": "xLhBzJAJhPZanN5ecr7mBSuLhrsEqaRgKQ12M1oRDAY2Tgy4g1mi9MQQ7S7tJb8q5rHDkfvhDigqyDWf7kxFoQj",
  "key33": "4sVt3ViPXMVkHsN7Rvm9XRDwVSbDJEvbdk9mmx7d77nyc3t3XovPNU4Sr1Pvvds12iLBKTf8VPfxEVvC5hYovhrC",
  "key34": "3DWYChZEJt9PRq4Ca7CL68mMcKVf2mGPg7pFB7YodKJHkPs5RR4SEbG1ZoqncKUjfhgNUi75XA3pgX5bwLWSPGtv",
  "key35": "36bWrnEwr9NucMYxHZ9tJyfP7Zayb2YZTgfhrM6Y7V7CnNsiqARZjmS3R5WNsazEjJnw7YUyxzgRizFPqtdvjWKc",
  "key36": "2FdTcWfAggZi6VZk38Yh4vwNzYheQyCbX3YeNjAEnc66yHBevsKf5LocY2RtxSnJeBumLYA8W6RoPKMZSkoRC5Qn",
  "key37": "bj542SJsFZadicsLbWcx2vjwH9zGUn4ew7pPB4gASDC4Wh36Xm948WtKciNpxxxhoxZi6KNBwPY6echBmov6xee",
  "key38": "2JnkwLXgAALeoJkZYfhHSvksfEZoEm5LhKRJir2pyo65Pb2odsRJo1qbKPmHH7ZiDLH9MQWzyRpZ5d6fJrirjLvg"
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
