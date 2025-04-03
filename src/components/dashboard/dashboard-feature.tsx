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
    "5zd1SCRK95HbfLsm2roHC2RbbQHUHcwxS96Tyg3cd5SYjbcf2w8wLxSmk6PTbDGYWBGyBXkc8uJ4QoGxuc4K6Vx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbKBVkgBqATrBfo4G8AjyLJi5D4SVpFeQYNWzHQaeg7s9YAxBKxvMizKDoEATY7bs6XFGWCz79h3fDz4o3jYaGQ",
  "key1": "5diLoaozJSk4sAdJAoAeXHfQ72YgUFUUMvijUh1itKPSqCoKBPa91aMdxZonYYDpViER1hmLVB3gjsZ5CDABZR7Q",
  "key2": "4zYcLAkwgwnJcSBHLgT8XcrHnXeE1s4LFEpd258Cis5Nnm7dETxerqEbYYmkpqc6n6QVHK2NZrch2kewUmj83Zw7",
  "key3": "5xCoF6VFioJA6yh5pu13QT98YJhtzBaVEsQT7t3bQcKN3Hxe5jxVSE2deQEWmZJ9v7FQtq1tukv1upLXcgts6RMD",
  "key4": "5ExN2vya3yCpSea9irzYcKmK5w2SdoGyKCzuTvAbXDCvUQyvFUPrZ6H2sztz4DDaam8NeuATmwCto79AQom5fLzM",
  "key5": "4C13CjKxHPgwFBkUapFoJfKML87tjcwYTVGfbSd5yg7Fm8pEkdUx54NGSNbYLXfmsNNLZZa4L7JU5d2uNa67KTQS",
  "key6": "4BPm2wavdVK9v7tLyMpSDysq9b5wHmNmosb2KpjxYejGupKjHshnvQpokCzJMe9NKPfNJSU8XDjEPb6RAB1td91U",
  "key7": "4N7A5pAA6jkjJYtFhnNGcTMDN1GtUQsX5AgQZpivBYk7WgpnoyBKMXtpxVyxd81npyfXQScdASk7xXWtqEMjuDah",
  "key8": "bKiuXUcXbkX9Yt6FBzGsdUZZAa3XE37q7Hfp5ZYCoX2FRGbgd2nHrsEJKhieXjrEN5aBwyng9dhYqYZJyrz2H6V",
  "key9": "4iiFw94Deiurhs4obTMiKgQFCryFemuJH1aw9Ev5xSZyRHwfP5UHorw38oEA9jDHyD4UtQWuAJ5mq4TKSUAY6Cap",
  "key10": "3zFfhRYxENSSH3rgjbyEfmwtccqcDxVEDe7ceRy4VfPWsUKQ3FJ8y53Y58yuJMC92djHVQDqCKQ4KAdnM8awJTyL",
  "key11": "PUZGJ4cWNKcXRe1hiUiGZgEy8mws7yGxihfBzPRW4UpGPqpBsA9PuDyHqNdaDYq7cYuxsff81AX5PwiMv5Mikaw",
  "key12": "2Saw6CTT3PQhrSmtNmxX5mBrtvpS4ZRWCdsycUZuHnSf23UsYjgQ2tfXzxRYh1nAwyn6UF2c8z66WQ7SWNDbs7Dj",
  "key13": "3ZBzpSJyFo9Aq3hWi3xW2Vcun5NRNLetLdKBBpK3zCQN3fmgJx5QeA8Mz55ayrG27umYFzcEE5RtNdzvBuCRu1pP",
  "key14": "2ay81rZfW7E7Dunz4THP3TgcUWUiPYKJALMtd1nTRYXkYyAZATQJYte7b2ootGT4VzhSCVgFHwB9Sx6Hj5AbjFyw",
  "key15": "hFpibBiLNwc1Ypb1cw7FzneKbTCY4ts2ygZom456V2sSYSWcpCU6wbehRYyRpBdQ1R46Art7wfmLT3g548gLa6z",
  "key16": "8tP6s6EBCrwVbbnWsHseGeT5TM42iPxD88R6E2cQUxHZmotL6PjSsZfZUTGiQoR69NeqKqjUhUgy6fUfuoMwjQz",
  "key17": "2RgT7N1t6qkCLJQxtjT3WaqirvKC4fmrhuWdmCrW8RSZSkwyBfs8WD4k98YEpN8wWFNNxM1SMxwwrsuzNaEB9dDa",
  "key18": "3AQLCz3KScpgXTbiFbaBmztXkgBEBHhTj7DbD6ZNRyQPXViU2ZeycEr45twyFVNG9TxVE1YB8gbTQvXKH7WqAdgq",
  "key19": "2uH1P6KFqpxjyE9DLyWahFGg6MxCUEAcZKJ8KxoKrvLEbuJqhQudRbxQxbqiz7NQewGmQ7Z2FxqUEkNNLn7a2E7D",
  "key20": "56jefgrieU3pdux4i2QC6tXa6FKrvCCbCjpZ7NFxp3fUeT6pA4WADY9m9uKmfB364RtqRHzbsLEhEL4fRB8avNUR",
  "key21": "4vT1YsfFdwWiS9XmU7UfRQvoDQ4wf8bCGpdh8ERmabcTBSdDo6ofu4G79ZyZnt3PFGz7Z6KCFxYnHmMHLAjtTfCc",
  "key22": "649BoWJbcU5Edd4Adn6DmNXGP26HDLP35gCos2NpUgRrKKEVC25dwbN1mfPtpuFsscw5uRcfXW2MSwg8WvzwcjYt",
  "key23": "3tXiSjCPgLzK7q5n2zVzf2PEJBsQDTbKbYcE3PztVUqR2X8yKtrQgXWyMavEPMkW8UWZLCW1d8CviRSMJhBYHBm4",
  "key24": "4WC3uY8hKapvoZnPtEshi7dGoczGEjSrnhitfqHJNvcX6forKqtjMPm4gMgdaHZLcRmcqpPXhVGjmWrnTZpqRKNV",
  "key25": "5DVfH39jSy8VsAnb87fsLeJuTVQ6BDF4A5ysKWiHHMa9KgXakzSr4yGa3ysi7NWpgPgEg1DuV1kXtWdzyWnVTQbZ",
  "key26": "66oV8pyfCf3u274d6AqreSt3VgSYNP1tcWr5ay3aqfZXoCuGmqjoPPnGZLtnfABr7FdyZDQ8VfC2GfCpfR2TDFYm",
  "key27": "4728jzavJikw5yANTTmRV3fLUFgezQFXLtRnL4zkwHbnuntoWGzZcLGUZ846XtRc8W5WPDmjpUMzYeXdj7466eFD",
  "key28": "3fKeU3ZbBY4PMbQYZPUh5iiV4mey9Tda2tZJ2XbwgsbNfaNPbkdmo61gRPvMMYLAtKXR6fXWDSSnXYGLdVWVYinn",
  "key29": "5Tx7pKTTdmxMKnNdissTj98wfvwfXjsPP3vo5QZq6bgA9NJw5FtTFzc47gVpfXKQErCxietcnPbhK3g1QH3UbYrZ",
  "key30": "2wiuQpjFzKSyAFR9N9rc6Kq4NLzLEXaqhETJEtjjgHRW1QPpLeG72gcLWaRgo8vJcRu9oKHXVpsC1KkvdxUEZ3NA"
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
