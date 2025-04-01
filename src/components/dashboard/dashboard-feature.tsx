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
    "4FxiGiqE6o9HAKRgDQaRettFfuqmkV8zXFrXkWdb79FzcBEbZVr15fVQSwbS5mTfU2YncRUPoqxR9bGnBTtgtSpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCt5bGJBqPbyN2ykXPHAMmqx8tmiGV4SRBB5bignv6t2tPc5NDyXkXhvRxZgYmjVjFu7N1p1RvPCMMQE9dkpVwG",
  "key1": "54u7QrxdjPBgSSGy2aCFcSqhsHXCvENpYm2A2rya9JJLu3rpRUaNrmx16nM2LkpHDSTj5xkT6g7SLunDnaxGqE75",
  "key2": "2cVBBkX96AJvkBMxj2XU4JmjHAki63dGu1da434nDwhFDwvUndtruPuV1cXoWVXqx4Baa9RZhgUDXQdZfEEZKdBr",
  "key3": "2uLTMYAvoaTaMGijDdLaHnVYn2dc29AwRJjJki6TVrNnGRnSmW8fqfTafQEXnpKGwjY6oeCXVvPZRUAjg8xq6oDX",
  "key4": "35VQYtyuCbup8in8bEMb73A7Ep1tk3UStqoKTy5dNJTEtzhP1Y7PJnzheiyTYdLL7hTMyi3Q5JApLZsqu2hTJjJ3",
  "key5": "53P4sn7xgKvP218r61LrVSvedfycvCm1c7dNEngikLRBEqDjkzi2NVMMSqgqMsdGPdW7KWdWfwJvarLswJjfa4Z",
  "key6": "2E7c5QDysaPyAZV23YzXY12GLndH6xhSDGvfnP5qwHDYP78DCgvVkBZakBTfnfuybpctR8mff2mx8xM61rVjHEZj",
  "key7": "54iLHgMh4d5HPxJ8CmupT3rt97A5X6w19QxUvJMqNzUN6NvGmFL7GGpp9fj7Ey8XovyBg9J14E4r3i5RAYRWJGLk",
  "key8": "cz9brkUWwQdjfeakakmAF7uUCuHKUCno9wLqVie6Mp3aUVF934UsPgSeCjRkywtDW9KutDToY6kMxpVW2h9Q1yH",
  "key9": "2WkUop44GeamQTuUbr8oMFkcPckuH7Swogfvt9jLe3NZkSyxBPtuEL6AZRXWyWKRZJmuhvzkcjEPw5onC1A4i5zd",
  "key10": "4iUxf59hdjrgvK4J6xCkHHvG2Q3Ps6UYNTiFEpFYQPgz8L5ZbtFhumyWNjvm8sdmdpooXLGfocExQz9BZfYwNCpB",
  "key11": "2QQBsoEttF5TSfCBKhf9KfvpBanwEgV7YAxFVJfitAvQJKtZnmy7wpXDMt7rvoac4nmYtit3FgSRfR9TnB8bVjSF",
  "key12": "3t2C5q5ptHYs2oUkZf3Z2nknaNY1LoR89xxkHCdfkAdPHKLNvEvxhT1GuBT9Px9mwTaLGv5HeBrTLiFbt8vXBSkV",
  "key13": "2e2QjHzKY5GgNFKdKKh1KKHZFSAgVu5y4ymuSnzuq9Rnkupei4CSmkHq7UDjs6HorKPhCzeA7Cdzk7xXEB1uanCy",
  "key14": "3U32sFr9pmSDEug6jNaGxJXYaL2hRV76f899FdHGwCzBCXwm9d2dcVmUwWFHnZJU5rYfRWHkvRcJBFL8s9VQ8Btz",
  "key15": "2FZNySZ7xscVqEyPXsD4W8s1qNLXGqcvbdQ6yFWd39bKrs8zd159xBjeA5Jti7hzQQKHHmWr24mxyonG3sUQB6AU",
  "key16": "vdVQ4gXJCoBcef6t4kzByrQDrQN1TP41T3AuKRXNwNvAZVew2kMndh42RYbwZS9hB2G3Sc46GsiNqZKGt9PYhut",
  "key17": "2SCLnBJ7CUSFGYRFb6dDXqk3E1SJEL4jrkHhwU58GLA4pz39nyhUG5BBGbL3d42NgQ6Y22uJNLTKwNxje7X74dXT",
  "key18": "c9fSZsNtGzwUguzZ1qYj65on363mk1vq7pP3qQqH7TJrZTvDa4nxqSXu15ijT3GmLezEabUtQ4hXJnais8UFsTF",
  "key19": "5er9D1i9ZS9EjzmYz4utjoSgz8NdpqhERNbWoQJr6KnvwxK15K1A34S4uUX4AxLEJrosULb9cQQggqmroeq458jn",
  "key20": "9rDLmeGkaNwV4U8iodTrTgpjwYvNVoV5WQpR4hu7qBeG5gvdR5UJxct4TnGbX3zGLaWb4NcyfeC6XND4pDij7c1",
  "key21": "3a9Y7v1yF4eZ3ZavaR17Ck6E8B5LuBKHUcKHuRbnTdTTv1eJvEDYGvoHj8viqfAUsWuy17WWDVj6KkvX1S4Kmya3",
  "key22": "GX4ammucNqVsy5u3xkLdSYJALi8yTn8B4NVfzURSg81YWDwDUN71s8ZWFMaFMgEY4h6tsvx3QUgei4q8dboV9Lh",
  "key23": "5Aj9BvZ7K1kKH8xYAUfzkZECfZUHL1wCJUkUZ5PK3hAwbqwYFKbo3N5AianYgosoHnrLCaLwAPrxfdxwmRqtTjVK",
  "key24": "AgF4A2uz9K1AmAs5bjt3DoxXJhEyETRAm9gemcSqwjv5KUedMX12H95f1XYVyDnqxvAtWH1YZs9xrrZxHvntwyZ",
  "key25": "3hCzaQyMezfVY5cxz7bq796NouPQ1SxBz2iuyJGcQmv8EQo87JqoxtAtC5D4XpRTCw2sdzDFqsX8LYQegKjjJ6Zx",
  "key26": "3RmyC3CynDh87xvpAEZoeg94w4fayuXD7G56idmec1LHfAAUXFdVpzmWuPNm1CfAwXTm9fhUBM2LopRGRaLQn7yM",
  "key27": "4XdjNwb83BoXg4R3yANJXHQrZJ8Hv8CuoB4gdhrsqQygrVJfA1qrMrqLt1gcsmnT7y5BY4X7sacrvsJbtdruLwPK",
  "key28": "4X81QUXqC92oqn1CQ54kMj2Fuezdw5d4KGnQ31Aj68crdwWZgfkoBV7FE25YuFNQdEVdrTGq3UxAr7PzgfYpVGnB"
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
