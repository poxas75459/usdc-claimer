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
    "5dqATYPKj7NMB3Mp9J5BxQ5TV34kf5AnfzkeRs97a1LTW64Qip5PYYvmPovYkquvkgApyDNH8UWhQtv2T1bSG46a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLFqrsg14GtHWAcmPgcyHJFyt8Du1HSPVdos95GyHcQdBQBuZmnPpNqpzneQu35Jbn4UCLb4Dzd3QafE2nLjcDc",
  "key1": "26T7Y7bwJ4Uga5nCXNihLKubyKSNmrV4iYzczgmgEDqKaS8iwjdwTMeeJozyXUaCWazZK7k8jYszwYKXgjTQvSR6",
  "key2": "4AAYaoydbhrsq92QqQJowqKoC4hxPKxcgzMKqqwneBhsTgE2j96gBGiFmyugqf95b4NR6LscSVM9HndD83m7oVLC",
  "key3": "4xCaZH6xa6ts3Tv6XHaZApAvY4zx3bmwGhMKYmyj2XvPVuypHbHo8B985zxv2MoYkEyso2WmQD9fGvmb6eW2boB8",
  "key4": "3AYb3peBvV818iq8bjeMnUfJDbtty4VeYqJ79Tjb2EG5Ad9qefkhkZzJVta4xZb6JuNf9JJweKoJGbJYry7j9EKT",
  "key5": "oDPdznwazRyTHHW7RWYfG8UUtUGSjrHy4fJPBb3WWPwyj6i9rJupyFcQGByNKLxtS7GdBf3oppx44D2ht3yFWAY",
  "key6": "5oFw1Ey9Tpgp3KWPMhzCSB7xWENa6kj2tLHn8nrnLrc2LBVJ8zjH8iFqht43yipZhQxy96vwUHgySDPiw4Eqzhf7",
  "key7": "2JWYoct4BXtQQ6fbFWoqAQbNGRN6rFYtVi6xaBPYzMCAp6FZ36Z3gdvp466beH6eWSPbzbg11fWxcrQBjUKzB63F",
  "key8": "vMGH7eYoLZRQdLMKst2xKb3APiWCFpFWBzbUAhGqDnZXCdKZdVwecoAWR3MKUHg33Mx6ELT3q5dVodkHyWj6Py4",
  "key9": "Mf9ZMPuLhtXBbZwTcMEMWdpbwaeZiCEv6hD52gajEmwADxP29fXGvRZHYunmqDEs6WUTYskwxksUNDLtWmTu95L",
  "key10": "JfLGmWjMgSZa6CcV7oA1BjLLdiq4b1WvEVLVDU1cRMET6NRjubujnBuGRQiZ6GggKjT4PRVSNxmPyDQBt9GtH2T",
  "key11": "TCENY7yNv7h5QUQdF8ik9keNWtZStTEjjdVr23EbseW8WJ9EVudaxjcYGk4nVYoHbxw8JvbKTbr2wDMs7JxfxwR",
  "key12": "5gTma87JeNZE98jSpFrovC1ovW8dRARGdhJ7B1D731GBdbHnLMENT6YDuCxV9J7xgMwEGN1P3wFg84jbbV7BtKUJ",
  "key13": "242ucFWMVVvX34kwynqJgBYENFj81DP8mxqZDw1cZre7hKUyGHt2CE3krarxHNyRoMnzncQYFczYXxmbJQkJdhex",
  "key14": "XbGpahoFRSvPLTjWFwWKUeEP3KMTzkYrkodknyS72wuH3CniNZEhjoZhJ7dhD6zKU8YiUzwN6oFFoLzzMMyxhA6",
  "key15": "3JT9mVeHRcboH5siDtZBrQUARvsXKwh1KqXzCQMzjLZcaxnpiPATqDqpVBv9pHok4cH1dZyUBvgAE5pCDQVaZdEN",
  "key16": "5KGgQhTsFfJnLKytqvFjDrf26M7u7TMSwSg1atFVp86AoMcrdG5qs8mZyjL7Ucir7XjjrvpSGHyEnTYtQhSbvyvV",
  "key17": "2R1V1AKQKZWxN5cAbMWXeAgPpwngxePPgDNj1bpB8W5UxZQdorXa3ya2v4TgBoaDVTw8iU8Yh498jnEY6zsH4AER",
  "key18": "rVDdmaWpsvB8syuQ2qEoTmgDpzWwa8RBUMwR3MmSuzY1nNQKJwhJhxMWNc4Z4PT7tTXRbt5B7waqJPczCo5UA1q",
  "key19": "42KLNtW56Xgp9AgK3hwg9UHhxhmowYC7GtGNayydgshXs6aE3qDbjYLpQqKxBUPmYkLiZv84QMXXojZ89oAotiU",
  "key20": "5PYr5aych4baAbfa7m8fcFiqekdkgnLaiou7KFTkUiwuMbwAY36TS7yErxs8dBFJoWpX6nqAhS9DUnAUjdgF74ub",
  "key21": "3MmKvYfdMBpzAptq2eEiMcgu22X8iR7CXzVczX6oFZPqG9KwBCfbZhG5jBVVABx5x2muFe7ftMdFop42Gz8wBycN",
  "key22": "3vvBq7wyv5EDZQs2SN4aoWtcdeNcrF7avcg8JeDA479dzjXLNaj445YN67qLikyCSD8BzB2ucZUTnWnXMmM9xvHv",
  "key23": "5qjiBmUzPqxQCeKXzxYVtfLRhFxh1frUH22REGK8KsdBBS2vapNX3dx3Da8zubmuiLVG5y4TgkoforLHN8a4TkWh",
  "key24": "2gui3bw2S3ey1TbgGVRV93Dw97VussSdezDwX3JpyXTeacZyaA7Um4coaUjVZpiRku8mciuB97NZQiatmkhNFS6b",
  "key25": "3kVFsHpmCgDc5Ru6fTPTefGY1pUoAYreGwg8aWoBbpTZRKHHWJhEPS555XoxnA9ADduEWf1PeUKfZYAqXhYRKY1X",
  "key26": "2efoipDxrQrMkP3X7Ldk1fdLvMyiFt7bQqSbZLZB5DaUbvDGErntUR2Avqho6v35jLD6mZVj14sD8GoyzPxFu5oo",
  "key27": "5SG5NLTZjjH4rw5ZXnQwv3CDs76RQxWJpNixicB312g5PJcCBbdDGqZoJfzzGpXSkJV8PmFQchEthgzPq2vxbQiJ"
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
