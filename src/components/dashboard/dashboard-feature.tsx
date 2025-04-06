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
    "2agjRdVMcfvFBmytDBx9tmYivbrJwUWC7wuxigJ4wWLd29S2YQnQT7WfYEhUtVRVGqysFWDLJZHLYbz4BMYWTksP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T2mPtFYXbJWTWQD4968tGnQrg3T4L7WEiiyxX9F5c1R9j93MEx4a2o1CBSPy64RvccJP65fGWwTXn4i7FLNjVE6",
  "key1": "2N5yS4yDGz7L2oScJeRV9X8zwUyz6R2Gq9hs51T6Yn53LctxK1yvkHV8Ani8wXrknts4szjgTkk3Rvxx1uNN4QYv",
  "key2": "41X9iayBvMUbHpHQWPKtAUh6sN94szTuQBztnuyRPdPnPB3CCp7czKEvLwNWnoEawc5vJydqGURvWQC1nzcxEoys",
  "key3": "3b77dS7RRE28YbxQC92dTHXry1eaXvmXmkSWYEUXD6WhePeFosaZ8TCTk6Wi9fis7KGLELKn9o5YDwWJCxigKUpS",
  "key4": "3EFMf6LPVjRB2qEhXpuo7zoMeRXu3vno54hRvsmkp6Va44rUxqXxYwjgy1a4KAYrvAxxheqkMUUXMfZWZmV299n6",
  "key5": "Sj16QnZ5TsEYhMF6wXb7hgxBeZ9V1FRtXuesF4XkDCijftDDuFf3CQEcAAGjxSQiZwS8N6SBMgocMvgkB5ZmdsS",
  "key6": "WDbCtyjvWkDpHecnzVwxqQGo9mUhuoXW9w2h5bRtuUazCd9ZTm4Uo1meCUdc9YSBkvCDhAFi9v8m8y45xDQUeJQ",
  "key7": "4wt4thFTmKz3V6rVbcF92FFtbtRSzyNR9z3KRhg3uENdYYxC9NbC8rC6ZivMhLFomWXsZYb3WYGvxUhBSEvE2aDY",
  "key8": "3XSq7mNgY5d3s4HZzH1K3xBx64Nk22FUYDmBYFBoQPTJnPeZiY27wei5QVUmZZofE7mN888sHVX3uNwbiKeC2nYP",
  "key9": "4VTwkSSbRmPiUH333Mu19884QxqmXYsWYd4HHjmrdgb6NFqBrvyNEmvon3uh4vGfG8N8bBAzNMPYSWrBEEWpEZZt",
  "key10": "3TNYKTfaUKj9nrF64CpSgD7Hhi7UhDcCFBzWftbtUbf6nG2kpC7F2TLmvMFEK9i3PtZcUNpCq6rC1M7GHLEKB5SM",
  "key11": "3DWNqLWJDUdY3bW4KjsDhcUznKYkyXR9cYJ71Y7SEk2rqa694BSj6Sjg4iguLxr7yVY4knGbvxTBvdaT4G7EPpHm",
  "key12": "4j4LjBwSSG3dL7AauihrA8W1VjaPRqZGNr5mWzcc4XusBGZrRSfCwmL9hm7WUTdFj44AkK5dVse8NYHwRaZqpcKB",
  "key13": "rKwUnYmP853jqiu1XmwUPEY1C6WCrF51F4TxZVWppFxFgA3zn4fA6SgP5a2qsnErGWB2W7Rfg3BT3Cs2bXN6KZT",
  "key14": "3w2mNUg4t9n3zP6BEFY1mjFJyesjLTMrviMVLFUsAFaituWpc7jQcjNR64kTJhtDP7X8o2gzVZ3iDAJv3wWHxJAa",
  "key15": "3onLqTyWRYTY8FonCkuVWqUTS4ocBKFbmTRsDXY5vALg88zpSFRLG9LLSoGe88pPCUFqnp8asv3crnHz2SQtfCXZ",
  "key16": "5LN1KDjwGhy1ZFMNs4gw9LGjzCPVJi9LgvjbMxaVPGjhZDZcbqqVmJ19NVbyebSps6Pzt7pevDfsKTMWFCMC4aBg",
  "key17": "5vNXwkr9z9PFLSsUdDw4z2kjTvRi1VzEjL1Lz6JBFTYyDhMZ1th1xHUrBGawVqTvsECznT4akriXNt4EYVQxPymf",
  "key18": "5bAhujb6BCnNDCfL2UXPyNvhYsLQjYUWrStbjyTwug5PCqxUGRKLH1zGg4M7tK4WZ73QrmpVmq7dTPjKUHaFqGYL",
  "key19": "4pq3ZCjgZgGfnRw8Zwqa8ZYR53SiMy2KbB5QT3eLMHwk8RfDximfBjaB8RErfW8D3a9YTnmNKuiQXoKSw6ejpuzx",
  "key20": "2Z55GmJkWXskSQk72rJshMEmXFQC4ajnkwvBNbKGNkZVtrWX6r3VBZ2WAnUF24N9yWmX8qtBYAjPgrfMwAcsNN88",
  "key21": "2q1Vr5URbphrsZ1ef7GmQKZRF8s9VtyZBUhxj3rfBstUWFHBCdwqQ3MC2JGzxGSEuVN9qhEEQKUKwmY4DUA1wK1h",
  "key22": "Z2xPVExZQsiCcTntE98Qz5RsdvCBDJxbJVwTt6SBinKFVb1suUN1H71WeKcYk5tktimPcvxVqwuUFn8podkufTK",
  "key23": "4hUr6QwydBSZkMnY3Di1fjuddky2ryohaeYKwA62vaCmfJ7EX5qYCx6fiCFFwLWiaN33oEgGAYhZYPG7eypwB4N3",
  "key24": "674RXXz3994bpa82taDixVER3HVdKDdon5TemAUHqPiqn3FzEvGqsG2W1SdgufwNy1VSChTj82mPZNVCSXmKL44F",
  "key25": "37SLsUNnk8GMRVfq3Gy75qiGqgjYQkktHVHpTetmjxXQHKmo1RUGQNyGSQvBfstsbTJJ82dCeVpgpyHyLJajzvVK",
  "key26": "5PzTA7gAykkxhT1FFYauSn8U4GSAdeju6cpf3kERJnwGtWeJQAvy4EVgedZ4nQhH52ZwiNbaTz9uTYSRgyArFs2j",
  "key27": "3upuKpwzGwKu1bE5mYTsuKFrXF3ESxvbNScCFiq5p7rHvfjpFBM3nZEi8YeeqcTNVVQzLEJu5am5qWx1QD6zruHC"
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
