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
    "3sCJcb9ohLY3N3iX4UtcmyVHHNWvVGESvSANSHrwHTZSGqhYoR9uKndfXjiBaHLuRSYUWA3GmyNCaHDQDfn83eRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZeN9SmsEM4J6eHeknHrfYXWMcv9MQbavKZkpmmMQRND3mxjUQhQVX6Xj7GHmmjEXAGd888BXhTRGd9ijmTAj8eT",
  "key1": "4rJnigZg3keNCbgEfV3dGWkRkWMuJhMQjzSxDaYLnUFESzRvvzi3GxodbkLLYqUxqkyMAcREg5Sqm2LHKvtqozWG",
  "key2": "2wo659m84pfvvAZvvNtt496MmEeyQGgX8WJ3a8qYRR6iRHKSmqUGwJjLWHyVyegAdbe46BFfwUEQC4nVKAbyHPEv",
  "key3": "2Au5E5JVBE5XGx6JcJbpgKtkxbhZwQvyvrvaxkzR7CXuH3KcEp2eiDdSvcD484HETZtUBjkJTbqQjt6uAnyBHixw",
  "key4": "54wzz5hL8AGuLBEXrwfLdf9byJG8kAVvo9uNCSTTRxqqmqkLivaSYnpPV3Q4P6kKPnJYYmLwuJcRTHwmjHRzj5aq",
  "key5": "a6t6ULDJpEiJAkMGLNHbU7rtEEBtcW16K5z68K5i1NRvR5Y6TrAZB475gVXVFkty8Qzrj3PvdhTgWGMYGde9Stp",
  "key6": "2ZHtV4z84nLkW6uqFfatexXJXeR9HkwKAUT8bMUzBcEEzba8ZHXa8QtiEcT3z1o96J4EFXJwDMrfNNxBJ6o6CVvA",
  "key7": "3qfm86iFCHE4c9qC1QG2YGS5QREFmCRRWZZCqPBsCtpwLSuZYuLitzrW9RdmNJSLodKMA9Rzm1XyD1NCrCVSPcMV",
  "key8": "LnXNr9KJip2nYwQNVa4ZvFGrJibfFmTacCKkQtXFXkBgoV1Chd5f9unWvu3SeJtsoUagJxinRKyzqSwEq37weY6",
  "key9": "3imVsJotKcgbwu1nY7EGZa8ZqnUqPQ5ogmojdABzqtcyhBKJa7znhLvknNhwwobkaduvqYyqH3SNh6PPMs5VYMLp",
  "key10": "3zUo3mpVkC1b2d3mtq7nH8n2EvWs8CZ4ktFnYfEmwUQfDeQw19WBYJJpZsnSZwKFwe8hfMhzNXb85dCz8zWcknTC",
  "key11": "34MznT7GbDqnb6bS8oFMqY5gV59rTAjJzRfx742XsEXMNaYEG3pFXCz41KKdGaVijP6eNAFwd2o1h7RtziyRrz7d",
  "key12": "331wVZSr3eVb3KALYXkjbDJqDo2LyfKAwsjV6DjDaxWJDHfSuXqS54VQnLnHeozVKZZt81xsf4YGSWa7zfQYq4P6",
  "key13": "2SqJZnnXhL3qDmaMsqXtujqTbkRjP1nsXNESPYm92uRzQZgkrH5vH3ifqzrt3RSLUvqWNegoBT5cGvZCYhvZLzWh",
  "key14": "58cxBSB7r7UTJ5Me94JLCANZGtm269AUbXgETp2d4imGFWV7x8TgkyCe7ErRj9nHrKfShESCoovmy1fSAcT1URS3",
  "key15": "38cSA3BpNZ4e3D5M2A7nrmFCCM4J5EVe4yJd3SCCc8MwskYqXAqfFTEYCRVTjWy7xuPrQuxcZeaZst3EvYtNG8uH",
  "key16": "4MSeungcF7YqA7z6GbymCZ6PtFMtiRGB4JCmvhMB2rjuGsHJbXmPkR1pFZUz8rM7gwBjs6EpbyKcksnPSpxdSUXp",
  "key17": "2uZaZo5Ti3D5MdzQf3YEqnwLxNhuLsQYpJ3nkosAoJDGrYoafiWMbNyr9fQ1eK1Qk6WBsDsmzd1Fa8EfM553A5wD",
  "key18": "3CpnBTepJ3CCVqqveM55cQfPC8Zdvu4JemFkCpmMua331hsb9VqMUjsKV9vJY18nLyg7RbyfH19ibnJALT1sTEu7",
  "key19": "3KCr4tRtagea65z7UFjftvxLDeqU1M4ySTJN4YXdqJmnhdiUDwiaPdxdjqES79hmcN3bhAQbiHT66wNHJcqVsnnu",
  "key20": "4BoGKKDiKE9s6vwdrb8Fqhy3sisdFhQCPi9BMBxYd5hk5pnKfn5aEvEMi6LcQsXGhpYNnrXmnrkkn3nMdyV9nVMd",
  "key21": "SMV7FpbdYtC8k6Sit9vfA21MJG2trRkwrFXuAn3fuyCH7MyMZeY3miBqC3sgZaWkSWcxeVdcnkqFCCbdmsvzD2j",
  "key22": "3ksng9hpzra4PJwYRwbZgDiYWKjiBDDTDX4oqfh7x33YQsidpBWbH6fr1wqsYakj3uoLAaW6rJB7w7iGvsuFHwXd",
  "key23": "5ykuSCQ1dkLf8j7Ht6v8HRfNiFL2Uidne4s5mo1D1SxhHrN817NGC52BoZo67pdUX63n3JQV3NVx5THmZEVfAXQj",
  "key24": "2nMCCjmUZY7yVCENggMbtVAFkyYg53dizfiVQYHY2M7XgVojfpBKgCVhK9oJBWVU1o6185ipZ3pb4AJsN3NSA99T",
  "key25": "jZhuRpcqFjVWuiuFYDnhmu5Fzg36awWYQahi1UQw8Hf682frYssCfHSVwW33CUyMu79See4nSkSotYtEpcaPrn9",
  "key26": "2etPBkcF8QGQwuXPHJM6gX2ofRXTxziZdUjeCqQP7sJqJQpf3Y5ujawkYLN7S1mEsWvLVtYCeQtJ57t4LU9Kz74n",
  "key27": "2d7imgA6qNDpmwGd2obAhas3ec6Tjv3tunQoUWiSGv6EnHUqCiNQaWtLh2ANZp77zoGyCT1M1BWTddZqKUo5d3zk",
  "key28": "2s8NZ5hcEWXLsQ4Q4QKWWHLeVJukFWbMdhBEjH5AqRwL97fPocMkeTMJoBLhBcMAfMuXmAxEEDyMw7MigaozUKVY",
  "key29": "2HzjUW7i9eG2TSHPhg7xnFWiJur1hNigngbpqzurpx3evUKekHe3KfpKAhBKy19yHSvSkVgU6cvGaqRrdgu66gvA"
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
