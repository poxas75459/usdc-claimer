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
    "NUkcaruLo6tevY1woJ8ZtrujHARrZqTB2vKDPLAevhuymy8XJv817iycv1gJB1MnybybJmGPRaRVxqaqTDJnQMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjaTF9vJG31ZGNLNkMgyywdGVJQq4Xw5dGDMqL4p9J4BwR8j67EFL5sNXzPgAEdDk7Who5dTnmZbcBu2yVhBHvu",
  "key1": "oBJGGzfZyahodTCAX4vVy7HE3tTYxN5YjHyx1h1VbCgCiuMmpJCoLEmQMJ5VaJDKZaQjMqerwXHPoqoGu9xpAwU",
  "key2": "4ye1xKu3hs3Zh5X7N8w8vngwxbqMgQeMu9boynHt1UQZ6Fygdy69aeiHbcG8yj3PrLR7uG3VGQXA6UWZ3u3be8Z9",
  "key3": "47KviTRpfPKVjqFszshwNNvgxGwP3YL2Njsb4yR2vLDF9JgGSW8cZAoXgPmF1wsqqAK83DCizX1qAhjDg1Hk1Pt",
  "key4": "63S7gqa4hde8HCYKuyDyXmu97iUoq7XA74X3wuVUNW3YVTcMJURC9wejVgheZYq4Xt8UGS2RJo1UcBfMFC6tRSN5",
  "key5": "rdtQHYWb6ggh96rigYYSCGoJzdN7ECFYm5Eg1qrrpsvdfq7mnPVfZCv6SDCb57eNCSGNTkEj5rLefQqQLVWtZgd",
  "key6": "4u3vS5Bk2Ax8DrmeJ5vu7waKydwdvh9dfLqVp7hx5GvBfwrtdLMey7uHNQfkFtFmkxdDgiLAc3YmmGQZcnhhe66e",
  "key7": "W3aMdFZYyNVj4mW2ZhpZsaKhMxCeyLTR1XHWXu1uTLUxrw3Go61QtaiUiToLZLbpc6tgqsqHkUxTtAy8K9Yevc6",
  "key8": "3sLEeFdFKLn1qAdmCMY8zxcQ531xgUAMzWFizPmEkfjtQCwdHUtKb2uh7kFuVSjgsXNhNEkLNyGphPn8aM16e3E9",
  "key9": "5ZSmrapxNHvRT6Nx1rN8MzYALiD1qFRqUEu4uwtnXnQdimWKeRc8az8byqLkYdzVJrBSRvNJZQ1tdC12R7PhgV47",
  "key10": "39n4etR7puFUAWSKMgd56JtFpj1pY8SQGGkRct9TWUio7D18VENrEPzxS6iccmiC4oxoxN2eHjmAGjiTGpqjzW8L",
  "key11": "2GwKqcK4FsBdLVtTVFtB8UEMwiWv7UxfQ6zE5D6XqsNu7CpKwEP8bJrmX9wZzC4JTYmK7Z6pLXr4L4eTBby3gjKM",
  "key12": "4T5CFnezxAebPbs2N8QJiN74XeDtBL1B43HPrBGqFgpwP9cjW9dAhjb6ATo6ANGb8noCNmJY34Ub5qDA6gDhUHfZ",
  "key13": "3NphcLiT5ET58ktVF2yJzmqWgytCDHKECUtncfDjpqesEQHNFemuXLKFinxykxDmbsAYUSM8kp7Lf7viNy7WPvi5",
  "key14": "4e3qazjcf3JsAbA4AYh2cuMhR7jYZEySUk4YVxaSpwBYbFh5ZfUWcc3HnWjdPNpzwbL5ErcmBZF63H8QkFjaJsz",
  "key15": "2ceuX5dvZh7x2zHZoCBNYDDP5xgguDB968EBYi5GX6bGq7aWvKHcgBQbArbhixBDGQP7vqE5XdXJ53UfE6muTkWg",
  "key16": "WXYhQeyU5QCvTgdJ6qEA4dUNcC9kNjQ3fCJvGzX7G7Ud9FfQRx4fcmT2L6zB8Qc3Dhf3qpUskSg2ma7XytsX2L8",
  "key17": "4HTxxtHtP4khy9bSMX1m1vxuN5TtoWCsqX2d73QucSbFM9qCR3Caka8nXsfLCDMB7YnszmZGBDarBYd1bFtSwbbA",
  "key18": "3tjgaKL8EM5PGwX9Yz64zXMQAjRxLsSjJzQsoGvGJs4YE2epx8vZzm7jMG2sssfYjeX71ZAvEivCshtWT8ghXqXj",
  "key19": "2HYAY7eUyreK6L5rdzDFVKBDSTF4zqN1EQGzz7dLBZKoxE75TYdMwi9KKJDnYrmNAtnjozn8UQFC7EevgHgcB3xK",
  "key20": "5R8dFgYuaeFXJC2rt5gN1Uy3aPjw1Xw9SPkHvs45bYNzzs7B1jrXF5Fr95QPMZj1bMwiFdRv9bKLA65VeQbh8A8m",
  "key21": "uzueUBB3nrZ5LdBh5HuWHzXvL5p6S3nyz884xSYAmC72N6usaqUpdcnBz5HfyuLA2L68ttZ5HHnmQqiAp7PTCSb",
  "key22": "5svf4bhpj1ckhaawbv8KzZ6Z5yJ69j4qDpUzC4q5GH8yPA2LcpybFQkqfCsiD2uWfHBqtKmSGWKcSvg4SMRVk6Lb",
  "key23": "32EnhkLgb5ardzMqTcXNRs3WKD7poca6uEmE9rM96YGA7ceKNNdQTvkmvAA5LZWN3fCBDTaXyiC4yBapNbPuQvDq",
  "key24": "3MjpJ99sphzcPkL3HD8WYzw2gYaEujCaw37JWNu3NjynPXxGjMraZADrBd5pWgbkebKhWaPTQTAyurdZLuZm271M"
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
