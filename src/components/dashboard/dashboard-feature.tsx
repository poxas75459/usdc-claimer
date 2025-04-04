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
    "26x7pDATYnjqEBK2KbSU3x7AdBr1frTr5arLJCJxu3DKzbzWbERiMpVEi4dc2nxqDsZkz44Q7cHHGx8NjPPe3aDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wSo39r7j6gE3hAqzy8zPc52TxggcbLUeDf3ZHqN4dRouVqTuWwioTWB2U5MgcbDVV4LB9mufjECsGgVYnzcKQE",
  "key1": "5mVmLjmMLDUY8VRzTjw28kjy4mFW4QtPrYnDPUnoFwdHgSNqgFBZKNZ8PFY8bcHRkHakSidNk4Wutwa9YRDmAoz4",
  "key2": "3FEi1ewktXUJYD1E6jzaQ9e3U8MoJHP3yGaGkrqFtjPYkG4sTGxfMZr5brzP9iTh5nRZ2e39Wd3L49Y6qh4ZKfSp",
  "key3": "2tFE8DPY6rvHzxaTsT85MMEVcppK78PTNJi1GETHmFft3AgWkpAiELgZWJrSk2k1qipo3TUSZuVCgBqCaWJUHDHJ",
  "key4": "4k5AMq4nszQKJnVxRp1gHoQHGqJMXRAU7jaAefiaQizzjEKJZBo6SQEHTGHuiuM9T2CCESqR1KCGBHWZGGcJCh2N",
  "key5": "3EBXiJjco7dRTvJfh1dp5rdekFka78TfWePfQTV6Ko1QFv5i3URk3AucE8jNSmivBWdSSYEyg3LLcTuBkAt6K7WZ",
  "key6": "2c3h9y3hiXucoKZN2MjbNPYFNe57QpCe4hv83mTW8MReckeYs5QTb4c6trSZXGVSmi4jNWsPJxJ4u4CtwFyoRRFr",
  "key7": "4kk4AVG9TBoCMPceyhG3uXrXevgNKGKMd8AvMaCNXnt5qYhmxD7Lmd1suhTRDFTfVHLH1LUGrghiohHkYe9mkGmy",
  "key8": "5wbQhjjtS1oDRrwmFxeLY6vMi9BT8rPv9VMomCrtMUGV2NmVyc2ALPpecEtbMn7YmadwTGdX8cRMLKGLKyBbuU26",
  "key9": "4NZroU6twKbx6ahRH4LiNgYCBhvNGBQxQ1M4DnEmpDqduYzQy7bDpn9U9aafFtbu6QyKTiGmXZ8oaX1DFA357LVm",
  "key10": "26VjAXnx1dnnyX43nCf8edhQmZbXyLjXRppJRYtxXggRKLVvTn3MW7RPjEvS61RvzNZv6MB6QRtYLDBDpCiXYBMS",
  "key11": "35NTVfZtaKzSJy8VsiKzce7T3tdhAqHsRyZ73drmyFuymPj1AuqSdaHN49XuzidyzXy7ucGic84LznGPRa85z35p",
  "key12": "4f7fNpdciHNG3A5vDidSwPXJkDNh3EcBSAu6HLqKR5dgbFYU9Y6CaYs73Lg2vPyxVNHQPt11GGUM8JHYxbL8czLj",
  "key13": "9F4Ttv4yW6ZbPdUehHmGNgg5MSjZ6nhrPU2jnk81ckLmBmkHqgZcQMfrjS1mTf4hYLotZvNhCV8pwt8aiayQbPA",
  "key14": "4i3vA6Zamm8X9K5vj5cQfhe2g5dQj93cdn6phuHmvWHiwMPjik4xKv7FTYDKQBz8TQbQdgG7nJTA9LQUkrTEpCFH",
  "key15": "gnQaEh8NgezQmqCsGQfBtdLKyizxYtHrVH1nBPYbZPyzc3uQX3dZJhLqFKxcJ1doRp4ZCST6QNZGRuJqZNocETE",
  "key16": "3jzsE4AYwnY9NYYxoTajubkzWoJAFsTfDZR4QvUVefrECHK4sGiPf3yoBctWBbgZgYk1LCpgGnH4KVg2BGBhwzvD",
  "key17": "supY79gG2bPhJGhQxuMogANiidyBYYxDzgH8B8bJ5YaMSLBYSTNdZzcKAmGQugmCMJwvgfLzmQj6b8z1VTcSDzZ",
  "key18": "4K3FLc4ffuHc54DF4QWKv5eMJfVWPkA2Wz7VXrejpMf1cPunBRAZMNyhXVybQTtaus2GPLzQuKptm5idfbFFCrUs",
  "key19": "2nK1JXgwXxQ3MihbYHr1bipNv4CzAFPTYwxjdwy3ZeFFevXVEdwWoZcfzK8UEwYEevrdCRJrBpr4zPYbmRT3ifFC",
  "key20": "5xUeP8UnmHvBifqJ1uGS14sUx5dqkTEX6CcQXknDkRv8d24i8HTdXMqEYbcL2DJnTYAk2rMXbnuq2qC6DX87GsX3",
  "key21": "298P1UdkxzyPuvSLK8SZyZkSBc1CXifvBD1ETm6JHHqnpTa7aRHbFv5GDTaDAPoJJ62MfKBUqXWLzwMhbYSyBNff",
  "key22": "3btDk7By3zfGaae5MMfMcPQoWiyzaorgU8PdWsYxLi9ZqJqB6vg8APJ85g14R4zqbLJ3s1M81U5Yk9L9gDDG8owE",
  "key23": "3TU9AQmeXvNGueJELgD1kcDpQaQocDABrnSvDJbBdp3e8mJHKRY4sxrLdiLpm2bLXNYyi5v35PYnb4FqVnndCj5n",
  "key24": "4HKTABKhoF8ahQh9LckW87T6zK8hKVVDW1CcHanTGPM1mpNpVHSSpgQNUHReaFuW4KyMUU8TgJAy4N9eLG7gPm3v",
  "key25": "4qegowAcoe9NbWck3stQJE1udFbKBo3hQnMrY3X2zamQ2q7KSUrXb5LGQW81aNVvNZQrX9dbSNMihjKNmdXgnoWa"
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
