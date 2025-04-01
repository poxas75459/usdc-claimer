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
    "4MmS53xGwRDa4r552SSK6F4kAx2KLLxd3FZnsuNmxDpZZb9o9nuYgP2Tr9JyY73sXWQXBvoZoHRyvpSfXemWumcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LbCP2Kh2uBUCPnDW4wPZmCth1LazmU3WDvvcV9Ak8mYaakw31NdzykdhKLRZhGd8kUq1Y5pfRPxWc8ayQTVYmr1",
  "key1": "5fT8nihup5EdYFgqt9pfYWXbwJZDeNCPFpYim4GGi3CVzLNoWyR48Z73MvQ5iY7Krfjrn8Jq355DfJi5sc4Jp4Tb",
  "key2": "3UXoA56hgEaVPnD7qk2BcFQ9ewCWWwjNMYRjEK9gd51xNQhsaFNyw2mMYQZ2GjbCr1b9vYm6K86jqRu4iSknGHFV",
  "key3": "uFBgBrG8LDqVoxgARr27jaFvc9UaJkRrZp574KaFZPXzEiKq3yMJzMGgWiFYzQ14aKbckyLvgMCkfEDAtykbZ5J",
  "key4": "9dwjqEiJkRkhpk1rTjW9Qbus4K9oB8vx4EiK5yn3Hy1SVgAcRcq7wAEqrR5W4mWBXgpskrM9bbzaSb27XR4YXJT",
  "key5": "5bj7crnVNAbHxp6KtpbXsUbTjb3RMhQUmT6SshSZPcxr86Kwrv5zmVMjLQ2AiUjcNfKQWNVGkoVV4SEHpaBhhT9G",
  "key6": "3QacaVFSwzMoCDqPm9MV8AgH8Yv8ckeP8XhKua5b7SNtWJRPTmDwuQGCAoXc21MBn1w2fp3mVKSZCHuCDfG3bED9",
  "key7": "97DSD9X1hX4zPjmxQM6aSEgwgmHp6yTHkE8K6Dukcru4J5nCezQBfcsw5bWjsrH7DPfodCmC4axLU8MPbkq7xpb",
  "key8": "5NGWvntpBjcQyp6YBiKwAV1iLhhHFty3pAKT6Xq3nHsSQ3ew4gtF3JnRNXdKzxmEPrstpy2wbLMX5oW6T4fr3XZ4",
  "key9": "5v7Mg1GHJFoiaXz3b9mKxAVQ3xn8NfcP26jtLZgpwUm9VQRQTpRUPybU1LytA8iw6b44VFjwivFy2UZ3rDSffjLL",
  "key10": "3RGmecjGR9NgB7jK29TSR52QTf9nYMzdNWA35xf7ZJZZBLw6uM5g8jBGUgTsxceNMMHHfAcvK8A9jwWT8EwH8Mqn",
  "key11": "3bs1Hw7WqJKJzWEJfgVBkTxpwy48x4NemYGSpGXg8BWYwfRajKmDzAEVVZXeSCnnntUZMmp5qjTuRkFToCiH9Vt9",
  "key12": "3UzVcmdi5SUFzi6UrkqY4TCf6KKsEyNoKBVQXcs7BsV6mj9RaWWFFb4fKFqKNM4zn7ibAuUafRxRmoi5MSTPmwdE",
  "key13": "47PqQ5bY63op2mPXdwRpc3Fi82Z8vZuHPf8ruynYRhk9M7qPhc4fx2YC7rXbJ9z3TtM37Gjjkgiq8fRp91rPEF4n",
  "key14": "44HKKWYsyXHAu9xJVuPWN5EzPkgUDazKz6GNWtD9Ny8ev7m8QAzpyzXw1FoMzioY7c8GShvHCMQ9Pwh9LWtEz9ra",
  "key15": "4y1cVRupoej3oT8uKwVGeRyLEPCYZV1jcywbufF84eUwpZ3YahfyhcXVp1mZnz6RiyLoKbzcHcL8gWnCJqpjn4BF",
  "key16": "4R34isDZEVUMdwQfxHjnW8x9ZjdtEH2noSPnx8zvzN2NRAcVHe2gxr4hU57V6Yqy3tmGAvu2qFLYwdDGmJTVrxCr",
  "key17": "3UEuYCYHMSNhGvRyprwfBZdQzpxTsxypmEi835fBjFZvjdgm1Sei4nvQextrYkct1q12L7GhALUoGusKBFBV4Frs",
  "key18": "5NqphgFcTEr6VpFBkETN1s87Kz5xQ6K7GqWKccUuemtoDWEkEzSkv3oSTw7GVyfUdTZ9FSc8BN873j9ibsBKdXRU",
  "key19": "5FwXBdkcWpTTtpDq3eJqrTKyBXS4LLXzgr4MHyqjj7WnbyUmmEmU6ifcWenfw8fu3simuLWTjtmjanMH76XPgcGK",
  "key20": "5FhXrdYgFR9QtcwRANETKdNk3KV6YVdS4vx8a4CWdNGZxvgKCvN2dZ9RyURrBTBjZP7X6L3WdZWJBLCLHh7b5JPS",
  "key21": "4rrpPdUYUvewrUHK1hHVYLQ4pteEcQpLcg3uhywSxzF1R9BXCBBDDDRPnzoBRSQkfdsred8YTdRTG9JtA8XngF5q",
  "key22": "2fdxFxiRWuzHqb3oM7zZf7dQzZLx8pwRCHzGtjgZ5xohKzb3S38bLqtF4DaqHvUtKq7Qh5SNxXKfvi1SjiZheDL5",
  "key23": "K8LFSDtjXBAKRELrhjb1XX3nPACMJsWnVisgUccrxHQ7b6ZfEinfvtEVb6WJRBzNZxVhhNygWoxhwXbeqWhxrDb",
  "key24": "2U388RFn59RctQL3e4R5MEQY3EjgNBSSMDEH8HLhzrCLcNanuYMSYzcwJ8gJZdKWWtarBe7ShD14HHB3wefe8EQy",
  "key25": "36z6CmH8zU9ktX3eYB88krQGvsEszJHMUuAxkcaStUuwmiBSqthSccMkykY1RLmWh6ZEGRhx949EL9u2C2yUBXQt",
  "key26": "3jZnX8yotWJi9UMJFNtpBfSm6r4pzmwHW9Q9QsKhogAuVw5nYi19wRWBgkweo49KWxaBn2RnQwkevGCoTP3WfcRo",
  "key27": "zCuZDLSJMr52r2txDW3sPJt8v8uc6so8FYvZtp5BfvWqH2XAkYavVVFmCPmNp8VZdHDX1XDjqWmn8hp3WFJzEYE",
  "key28": "5AmFse6RqLz8Kp58Xj7miZFJLVkvdBbyFtDfxFpd5KaPribLGBTv5UB3uU1gF6ActgvH84ikV42VqooRx5QVEjtG",
  "key29": "3JBT89n274WTyYAbJqt98Y8B46WNEwk2WxGREcByeNSWJ6PZJwnEsYnw7HhrXpNGUjtWKFQjDeDMRcMZmJEaNV1W"
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
