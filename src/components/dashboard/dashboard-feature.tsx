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
    "5DWzTQ7ycPL419yK4dW1YrkGTcHK7BESkAET3QHSzR13K9vB6SDWLVg6JTvctW6Enqt6aUfbW5G1fwuS7wyY7c5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvza11CKCmFPTcgk4dArvdxZ8NzeAM4bbbUoQHb1H4vmfrLWbKDpszDvw7gnzarXBoy6mDXz2N6T3k2eA9tbMpA",
  "key1": "FiR4NjYx9jN4Xygbttb1zFeKt2oJT2yb5ijtkNT6o4FWsu1WjTdds4DJ93MXu9ys5j9p7NSmVnVSa3vXtS15SUM",
  "key2": "2cRMcGBK3zzY7iS5j6L9GQahmTS1bPFauYLP5ZPMf2AqXUjFeHkL4hsG2hBmJ4Nb1e2eZfYSZ1YXXU3ssCFJjBBy",
  "key3": "5gLPQtnUcuRMpQFYMXLNLBc6su7pysLvdByneZerpMZu3pdBW79spdZu9cZ2BXPzvcFgzkDA4TcNuRnxo76djJzD",
  "key4": "VKs4H75ugmRsUovMcxC2bz9ZdVusYFJxBrpDDh4jUMV428xr5bgheJy6jeVatTb9Ci78rukKDMEUnKTA9yc4qDC",
  "key5": "4949u8Skd7xRFgCqp3uMKYCYCHhyZaXNrsjCrWz47C2xEb32qRbpJNtUB4r153uxGe2MTaQBt5SQZXEi2wRX7xmr",
  "key6": "2xsLEAaBkmb6vEEGLeKtMj4oQ5qkWnqjRo24wPvTok7cLaj4hAqtuWXzzRkUaa5jdb52DCgT2TYCfsn7h7wf7rjd",
  "key7": "25rHaA723156gWQfbp66xeVdJxGgiBJ2w4UBLR4dA2G2JU9pfwVCQPri7bxRBnQoMs3kXB9xShjtBpDF6roLJ2WK",
  "key8": "LEfG5Z6w57hnsxBYCUkiJndwM5QUyq2EeQ3djZMd3APrEFr6MrMGadfrXpXXbe6xFKSKEPSDxDVQdoZ8D7Kmjry",
  "key9": "5v8CG5pMaEUcyojKZNduGieju5Wa3Wmw9qByBYcbihECgTiZCSQehT1eHhUQmw1zXYF8yLXZLoPytcf46Q733AyF",
  "key10": "4JZVHU45vV24h5qmsQ6EtEWa3FyJQ4U98bEB9anr53ervg9CpCnCKyPVwznqHNFjJekHkdSjYzixEGQV7u7MVFsq",
  "key11": "4qyTesaZt4ABCbpy1p3gbuRWkoUBYYtKf6GQ28nbJ43VXm5Rwn3m9kZaoq5dop39QBeQbQgF5hH76o9W4xrpQUoj",
  "key12": "4ySRMEdjenCaEXoqdvYR8gcgXRTsL9o6jPdQCXVC76SHuoP3yK9WSM99dw9epmNrBa8sFJRWWZUfkRtYJzRNoqtZ",
  "key13": "5eMNSh4fpUZmp8XnvujXJNArsrqAsfez9EQTEyqp6tHgyrSehoVc5kUYXSAVkdWxeguoXXUwhkHtBy7b8RzxxnPE",
  "key14": "2GMnaPggvaFf4tBoYufm7JP499ZKuLfKQ5RYCqeg3FdgkfgK4gs5WZ5vJehh2rs8Pe9N1LUpjxTT85ycabdrfdL",
  "key15": "57vnCmrsouoEaWKEfvHPCr9a3K9LPPFvxKZV9J1dzKWNi7Jb8LD2ggc7EcXjZdyudCXPTTwNaYq3uiqXoHhRfL8A",
  "key16": "5VHqYLmmLxAdwCyUNeGW8DjUgVXgfTbyrUBGCthhpfzjkiFbsf3YRHRPsEVR4Doc6qEpHo38E4fjLppgxKGE7WVX",
  "key17": "K6cYB5dx76X7Bzy574sJkru5MEyfCeyxoNZHJzxTk6mtQjUS9muxrnTihYuc4FRYZMu85Hmo2CfXwfcxUWv571e",
  "key18": "2qjaTUvDAKdXNijfFy5ZC2UZZ5zkeSMteDs37GMNruBNDgjUahR2J7pZxuJsFwvCx9EVz6vauB78qmpYjY7L9bPX",
  "key19": "3cKjYsd6HaQkZZWFT4VB4Bz9D3KasNwoLfaakUHhY8128173X3kaCuRre2ZNCjAx5H87mqdCrkaQL1W2EdrjV9Z",
  "key20": "L8zQJ7de1CYTAyrMTVLsjKzPAFSoupiPCA7gJKREfzW5fyZ53gkS8qVpteWn8XtSrQG13U7XeczLTEztMJ7FijP",
  "key21": "2MPk65nAFt2HMeoTViPRV3pVpWtyA2SKAGLQ4EwPqzmb2gjyRDPEd1tVSzmVHr9E6G2te6LvBFpLt6mzEQGrycP4",
  "key22": "2BpHvAHHcVq5QghGm4kEDGRvdniSwPiMa42WqageD2TC4LHfCCy1Q6ay5V7C1RBcn7njLvKRcjQeyYW1E6yLamRK",
  "key23": "2dnvFpGsucUVcEropwhPwxNjip5ggpgDfruY1NXhBf8YJ3VRrEHgXjYkt8LYZuQ3wFyLWndFbjSgCyd56DbHgky4",
  "key24": "2KAg1enSM8NApWt7A54UifmY5KbhJFnvDMn5awAjAdt4dm39DdqLkh6oX98y3Mz9wFNYDDf8EqRfzQg9TUA9NTpE",
  "key25": "34jvcJzbs21hvodAytdCSQpgE9de8xhw651ZxgEw7GiJnyHC2FhssZ27A9ySsiSpXhtPWmsp3GHExEnVevJDfWsG",
  "key26": "5sdJWLzYMG6Ka7ECLMKoshcEWkBoSNqpaZuPvGWvjLGFy8J9aqQgN5SEQDWTr2AaCXLKs9c2fAgFiV4K5EChudww",
  "key27": "3mp9RmANZNfVfmr2ioYtdKgCFxvksvHbf2fzNCE34bPJZtHq4amZcJCAkA4MusGChvKBhQ7H6Ec1kG3dZ4uMRHiz",
  "key28": "2Aic6XfAuyrG1awv2a6fzWeMRMUZQwGpkZSu1TvpjuVBExhU7egzLkkS4yznKRYUa2bgK1hUjhUfYUgsptzx3MpU",
  "key29": "512WU2EdvRdV7sYhdV221pyi1AFgfvk62pJPSzNu2GPjzNnL2ubzesgFs1ku6Wtyn4pNXrxyusz4dnKqWzPRExXd",
  "key30": "2p4dHsyDcrtzbUvokUxkTsaCWsn68jxNSEYvsb5tcDPNgn9RpviK9QaqoKuJSLAubfCyauHjmu5jgQeX8HA2ZhTj",
  "key31": "3BWKrur1fUo5dxB7Z5dzgtgTXmDpwEjoWSsqDHeA1TA4DAV58DXTcnXbooNEyajnjcM79Dwf1TArdujUu1xZGhMX"
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
