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
    "4zapiVRzc7M8nmvF1rCsH4LyYs2HigsRrdddH91JzJdUrZrbMNBF8TVfdtPch82AKyyyDVAMVfSJ2tFxcx645G3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKEZasKV8Y7BVf4YPBJgrixYCNf1BDNzBz2k1zUSvfLNyUwfkvDc4wAXwNSQtCwCi9HpSvFTHkw7HsKhP7ApPyf",
  "key1": "4EHP1VoDCNqAJffpxDFQh5ZzWBfPTxHVmengXPRZyoL1ZULvgxNN7s5BBfT9WWSZ9N4b3d9WqT6FpdAUX4zT8Dd4",
  "key2": "RLNxzfMUr4mu6pWuQWz1j1tUvaFYfpe8pPjZ3iMFMQ7f5AVJyFAGFgBnbNrL9emuejUqmMtQbezME5fnuFDoELT",
  "key3": "3aC7msB4AEVynKD2ccLnToycM5cEihwVavPZLwYTL5qxGEgxNUk5M8yb3Woxp3X1mrC7FEAFghVrvR4M7nnYvp9W",
  "key4": "2oqVeePGHqkuN2JzpoxHg4ADW52EWof1mRQS9tKWfwyyytfb8f241MbmFHEu77GxPdzJET22u3Y8aVdzVfyEegDC",
  "key5": "2KrpgtUj3fx9koo4cGVcaSAp2G8yK4DQK6kfCg9V4fHFf69bwu8getAtGsuxX5hZZYVoWKSqAT8LyoC3D3e9u9Dx",
  "key6": "5VoxUF3i5hiUDfQU6TDqiYKbPbRYzSgp4LVK25et6W8fsE4hzvsB7h9qnMWfmXJ5CTNMs8UtJqrEsDJyddZqePqF",
  "key7": "s5i9hZJvGrMjKrKwXhcLQ6gy6UEkA9GzSJ1o7tZKQSZtxbVbQSECouanyapDSJDX9YdYvkugeeggbTmpjDqCNhD",
  "key8": "4M1kRpVFMwJFLCDF2SNzLo97zBERuJn4uh8M14rEXa6T4GzMUoTRNwYBGi5zPjYv9TZwo9nfLG3Q36DsoCu5M9fQ",
  "key9": "3DZYRwpvHoFABTm6DYS13wv1Qevawa1qJ33tX7shgzj1BZMgeo1cTDSJ55V87h5tGzAjeVf4p8jvJqt2jXxkjg2r",
  "key10": "4JHyUAqZmiDi9hEDqk7Q1hixhhoja9PfVvW5XQ6YJNPvWhRmJRHZvR22NEkareFn9J5tYMSZFzxYPRvxRPma4b8B",
  "key11": "4PSfrAPDFkFVqnAFq8RX8w2vzxQ2RYmsokSJFePg859DaHQgr79bdMonnXUpVn2A1tCjjZmfmwu2KLyEeoAHLveh",
  "key12": "5xjdaniqCizFdf7EFCnh5jo7Bmu4LR9YdezF8XtRyevD3RwjsR8FF2JLKrhytVqBXzr5azNLsA7asXyuvfq7ZuuR",
  "key13": "s69YGFXx6YSRoddgnyuG5bU1kwaJ4YTthCAy5PcXY3VeUadGrL4CvPZcrqgKQacbhStri9wfhD5ciBULsn6TfZS",
  "key14": "5qtXauDaEQvhLJFvQ9VTgpS5uhp4wERHdukxg6ppvWb1YztsxHSXeeLAzxBhpE1hhEmTsRRbeWLst6qNhNga1Tra",
  "key15": "zBsebqfrUGMbKUb9apLDF5LHCrmbakPUhpQTUC6GSkYb8JGwwNX2x8j1T9n7osaJngPmMmaw8wc9YWyiLXSmmMz",
  "key16": "nHnZvuSYKGTSa8rwN6efrBfSadPNHjwZziTEvzM8ADENdRhe5MCxyQ4ibfwroH9LP1BPHJaCDXV29312h7HVwp9",
  "key17": "2jfHoDCCzMQsAeZfNn3Rv4DxETQGxMzMbd2Wx3jVex2qLwgNhkXqftvwW7vz3n3xKMs8WfbbYa2usNh5m8MCcodg",
  "key18": "wVoPVDEZKUaWCjrLLi3ab12jzfxmnqWzhLtuWpxFXSAVDwt945SDF3tbR6x1KsVwUT6C6kiVpRFiSPzs33X9T6A",
  "key19": "2fanJK7qDWhpPHg94nfUk369qFzGDJEBEGW7ofXtwsijYxT7HmtTNNuN5mcQ3kiNBvA4dwd77wcMERnVdg7jcdwZ",
  "key20": "2wiYxXz54W8sGrQK44brE3SbF7ZiWQLUEXf3e3NGDqsrAn2kDaiQDXNMw9d7hQWw5Wnhov9hhTyLLXntijkEVEkE",
  "key21": "2sddv95Wh3RkRQkneUJUaNHxU7zJk3JMVWZ6pnmYZviJGdRaLebJYVkWjrbrzNAWAwPtUWBDsDnZat2js7ujJLDr",
  "key22": "5JwVF9TRVyT7oY4WvbjVYgQqy5rGXKZkYS7JxvEjVVWov4qhdLLzKuVJENh8epEDEymKp4Rbu152n5jwpCi2kS8N",
  "key23": "2euwKgZQm6gK2Hv9ZHZhWrx76LH68McGyF1BoCtnQFh5vNXSbKanYZ2HnnYV6eDgxVsYrQQwEWacYzdZvrk6rJ1B",
  "key24": "5TFPe2YbgY3mxNtfdagFGbDf9vNucSDS746wZeq9TLaRdFzKLfwWSRSsdsok2M7FHsj2x9Fzgw9hTF2z6XhFfa2G",
  "key25": "4XnYSVaXAt5ziGDCnBFvbfRU6hUtiMCPXRpXAg3Z2D6RftqL2S9jcXVVwd38eBqJdbz71GvpSnK6wcqJ2tq5NW3R"
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
