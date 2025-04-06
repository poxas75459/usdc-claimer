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
    "3xt3cfdZxHd17sqPKqPMrd33APtmBUjPqJjh9i9xgPKCfJZsgwvvLMrta2ACYXPJn2iU3imCxuwSSJqLgQwmJb5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5QkngsYJ3rMcqANxHtRPhhAo7gMozLhZfHwbDsCvbGwM9E6GmnVh6Co47Px1rPd5zzBGTdrw9ytuMVDNp5STob",
  "key1": "4pwUDJjCG2hYpnJE1vvh71hN6vRtAcHo3TGzBHgRGcR79qxWgQeUVHKUBHkE54xHWTNBxdgtMLA7aMTN6VYScbU3",
  "key2": "2XkHq5CkCjS52aEqQM89EFSvL7WDHemjbQjvEJcX4CzEx4mazw6g5LXFnDpYZptyT2Uab8Re3gxFTLhYTd2mE73z",
  "key3": "3dPHEPuqCZJzu5kGuCwVheR4JNVxAxgXSH9PR5odTc853JBDxYdTzJcXarFtAtsrix5hZ8vpgeQX3BfaaAtGSuEF",
  "key4": "2cK6b9nvS4261hKEkTLJvZv8Sia1wWZaoWpD22iPTVExjKoavrMU9ptXF8YffeSYpxJ9ufHFpXUFFdoGoDJHku6F",
  "key5": "Bfzp6aH633eMDbZVboi4rNBrf52zH2b81TVs3iNWLqsKghmmR7faf7VufPLyFYekwHNJZ648yPsvXsZp3Kinpyo",
  "key6": "4GeSHtxfY9eYm1J4ELnVBg4vS4FHRJZpNKhTwudknr8eEGCHmqE3ahUzXqPGKzLJvtnvf2B2WsmAcugYEVNdj8M7",
  "key7": "4eVLVnfwDcCidcLWRND7Lat3AaxaLPjKfigDWNKAciuJbXQKD51RMytuQwAbDVUMUj8PjsdEBMkg6bEZwQMdyk4B",
  "key8": "24aRG1zPmeCA1jzDpARbTkYqrw7GMD3YhjufepHkCRzzMj9C3pBvYBWtpaQS5BnZA8moMQ24hatF3pf6DdTbBG3X",
  "key9": "31YJrMPPR5gN255D2LY3t9Un9EcxXuf7PJ2EEpNfj8vn2KRXPfGNBtgPyqS4zE9LEmbs7MjHymELajbJn8sUvJbV",
  "key10": "5Qk4Bn8B3PA2nvUUXs6zWvgB6QMqdRgP3PcwELeG4EQEm1PQywX1iBLiif87LrcL5UkM3964eerANcsLukA6YdyC",
  "key11": "4Hbu9DiGsHj5jy6eZvfV4YXeGeHy8zeNUv47Z9ry3CZeTVKsJ1AgvZNQEQDjhPYUCgFFAq8ReifojMAdTKFU3wo4",
  "key12": "2cBm3gRySLmNL14upX2RaVLAyxFUeikepVA6YXsiXuVasndSVyXFkKmVJvAxxFuBZdBJQPaTjXkXHf1WfdjsCTmc",
  "key13": "xNPtmKoQDr6gv3NA4w584deik9GDk7fKZLycjWWEU5bUuYkTS6GGTv3yDCYhY5wgqkdiRiCNqGLWkcwVYh3NxJB",
  "key14": "5wLCXCJaikcLb2cu1U4dYP6pBWsCKWVC2NEpCxkqSeCXVtuc2QhwpfgQEUtxTuijzMoo6sYkTaXSBWL8d1gj17ZQ",
  "key15": "2idbQN3PxV8r3HftLEwq9sakmBWcnaL36NAEgpf4XPgJAVtWM4J2Q8hHwQocpEesFwJHmvkm1AW5aKxvgi2EK9Dt",
  "key16": "34bnxLQKNNw7M1RaKciu4PpQoTaWNBcMatxJDaQXNjNDehdh2DyqVFdT5Pyv8NK5gFrvp4RntW91H6Z1yiGizRW8",
  "key17": "4UfWicrVHygKZmMiYUQtpWGZQ1YRXikjwuE1E9sH2ejqfrbXqwNre9yaBey5EV9GWHopMgP11WfXmp9PTNegiibG",
  "key18": "5jFx4gweh3FVJGdNkAwNLbGW84bciaJjecxFEhHtT6StnXZ8zrHWmeCZ9xjgVw7wY447mx9p8ai6wjxM2Pc1mL5s",
  "key19": "4KR1uRUsXSCq9WPwMdWzJkmHeey8c6EW8wDqBreG5QGGjdtdgG5ZiJufsd38HE2JxcY5oSh8kQs2K6ntVYB2emk8",
  "key20": "4eV3JoabC1auQ3u2aNJTX8XuLBnsvE9k7ip5ikuUye6cDmxkJTeA1aAQZKXKJ139EoWLnkReokBGZ5oo3XKx3tw5",
  "key21": "345GtupsXiPgPapsmC7ZLNggJDEB9sd9ivW5uAbJDkQJMxJQngyyLbCWYmHWLkacTU25Q8dEgRcCAjTjQbys4Apc",
  "key22": "3XNGyKHNGzMWpJS93317Lyfu7VZTM5cTv9rbYoRKnxcCw512Ud7Fa99Lsw4FteZWWqqwPsmBp2A44inQz2FdUKe7",
  "key23": "53AbsoVcRUXBBaDWbGJvQxWi3pm64fRVEB5LLWNQ4yMsNMDswzGFjnrXNo3KGbhNZZqEShefcYimJAJm2t8fzUkJ",
  "key24": "2uafKRnC9uVc8TKuMEjM6uvRyk48v8QsewRA5j2a9GKeFnPsD3D3uVi33yDHUPVAUqw58rFrjfNRYt3KnqkvEuMF",
  "key25": "57vF1n6G7DVhKamGUvGTTLbLo4NUq2zNpMG3nPK1rZBhGck76jD8hs3h62i89DQ9C5ucY5cciAZtziFzKr1t8NVB",
  "key26": "CpuEYpbfZj7vYuX5j9Adhj7EJxgYRrYo8Vcd6cEqVwUGEsbT4vgumBrEL12TBKFwxtc9fHw4rShBBwAQFFY1s9A",
  "key27": "3BkgXqQvmrcab8Ws5AG5PNe2MJkGATx7UYvcUFbCEUoyCK9d5WDsj5zmi4qdjVJsAYRqRpaLcoVM7NbDC7d346wA",
  "key28": "u9aUwFsoZcspvuZgxT93234mbwAQnyUSLkTxp49kgC3JJdbBEKeibUtFkVrFFD8re3UbqSsJLJEQRn5pEDKtKKt",
  "key29": "2RdU3DDuJzBeFSEGYe7omjFdzfYyYG7a1K7RQxEk54E3jJ9rHjmFgaSvm5YKJxBpSKKFZsxhTSAcAFv6HopbDVP2",
  "key30": "2fpjhAXudeJnXE7Ez91NfivP8bZUhduMEXAQjtzmZuhLpfJDBMiA4JUx3b27g1AEDvzxNmATntshcpqeUro6H5XX",
  "key31": "4bqLVxc6HyfDbLzeQbXVjYmfXTGVkF444rpPvv8QTz5wHpEEzenfKtc4x9XwD6GXE1a4CU8aT7TFYoz5JzzyvcLy",
  "key32": "KPbSzu3Q43JZBinFs52JdcnArvzFqroNZLELBnwNLiMpT1LYfhbs9e4NscC5BSp8m46UYnMewTVyfitUZXJ6U3h",
  "key33": "4a4K3prDqZa9VQEJRxU6ChNgwVs1ZnCyQpCxK3foNYrQk3g6KF4HGC82v5YxMUZN5yd1kutufxkVMmC2BFEBkz85",
  "key34": "61z91iCgQXyfqfpD4UJKVGdmqVrnvCHspoNZ5y2dN8ceSskBzwAfsPZGLEMt2nM7F24WvHRMYVBdgDMTtKYVixVP",
  "key35": "3h4CwDwpuF4h3o3xUHZTpPGnihRowKjJvEUkvPvaGNpsV3rGQ8tzN9UVgRvVY8WowYUzDbb2HnSybG23k5aCLXZj"
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
