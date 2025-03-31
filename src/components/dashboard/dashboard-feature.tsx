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
    "3dDsJaS8JnU68gREjkLepdEpqJ9vDeTywwaNLJngGkyepiGk2z9DC4PsuqgB7D7RAyCW1zZex5sv8zvHYRaqJvcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVMFcJntKJFD6cjcqFDQiMaq7wD9EMpxi7v7WPkmbuPEmv7NokGwgawrdh7RhUQ263GXRnMRAJBcaDdVqeYJfwL",
  "key1": "2DrmR149Rjd7JqXVKyqM6SSMJD1xaqsMnEk641uXd9LjaZzAe98PwLcoK8Wh9Js4VCm1mT2ZhjxijKYw998xYtqZ",
  "key2": "4qiYkVZ4vRVKto5hB4V9gsSpj224qCnHZDqCQvyVAd7PbqxWkfmnU4TzPcBjmu91EAkegx9NtFoNwoLmVP9hBPBf",
  "key3": "rAvBGQAuqaagjrz9kB1K6SHJehmaji2RsScvATzA8wyDNi47wuaAmXPEaLQWUS9QfgpibdJpZNZhw8D967Srb3E",
  "key4": "46sZUQUGyU3WQfvNe379T5akr3yMTjpHAE8aG6edvUFGrUVB3q7Qeh6WmpaMAmJ7xp9aa6ZaswGnMuWqEAhfSwcx",
  "key5": "ZwuiLaNaKjXaf2QixTUHeaB6pX9rBg3fz5ghZu7djmkJoe1qMBqKvWB6PajAJZaQqusi5DFYYfJWcomSKkCNGVw",
  "key6": "3DQXqfSCbf5kR5DQSW1TNZ9vKxuBVkj3dak7A8TDJbN5WzYqkPhp8o4pWL83kaLMTQx2xqaaABLqa6JtfmGejBVz",
  "key7": "295fEBsA3YCqm1dZXoTtH4cxfCTS7avuejFnF9FNgNgqVtRVJy1Bz6hUE9MRMJZSXZsW7pzswriJidag4BpAiBwc",
  "key8": "3oYQ4aR2Jm3b3Ur71tRPTuTq4p9vrKj3EeKxoUJ1USnWzpJsc8AVZ8k3E3EH939crYjLXJ1vQX5Nr59HYoy1FxDs",
  "key9": "3vQy8UAUkJCqk3Y4rX1BFuxPP3ACW9kdyP1MU7ZAATRDRYWCZ6bH475w1XSX7EBu8fMB2RM2kezrtYhSiLW6qw17",
  "key10": "2qPZPKCDL4kWwMqYA8aBWo9T9BmgivMq3APdku86o9z66MV4K2B352aDpMrYqqpZUJwoW5QYwzJfLbZ8y5w7CSFf",
  "key11": "44Q3EWdXPTfnXYXgJHnhnauovd3Pmmuy3gMQHMVWLb1TDgtvZpxspnF1mvC4rdY6JaG537j2nQtvxihUwq1Cfwa3",
  "key12": "a3iizJeFEDDJDErS6X7gXmDZzNHqS792PwbP8MF72aRdjzsTCN8cn6LETFR3KfqM21RFvndfXu7QMdXCY9ub4qp",
  "key13": "5jmMYrorjgtPxkggrqykXPJuSZ8FNDKk1idQpdmXQM6W1MYZPYTfdGmXT5rhVUfHCkg67CQAzVNriabYwZ9KnQQw",
  "key14": "2zarFDkrSap7jRGZ1F3rAGzzYN3XUsmmtwNUe8QzdLM8ZYmWLM6YxNq2nVq2H1FF75npcrDqAmq7qaT13MYzypG",
  "key15": "5xqXcJJ2x9Rf8wBVLPmD5araVESb1dwEcFVtobfkuYMabTv5mZa9L1LEaNssS8duRCjP2jgrK5ZeXF7Ye3qMUwXn",
  "key16": "5uGjeU7zUnSVj5aWNVNGZAYpTAdaXyWSbie1e9Eybdd12eo1HVB3zb6QodpZuQUVwntCRJDLvPNsaMZmRBha3pbS",
  "key17": "2VkS4Yp4Z6kXVrnRNkMM51dYhPcek64svhJsH4gMDqjLn8bsdvyq4zCTJrq1bP1h79Y861v2q8sB7kP4vAz8yZ4a",
  "key18": "2FvwEc6XPPDJG9ksvVw3MsvacE3cJyZpBo3p6pMSptHERKMSRmcb4vVMYXJkykvTU6TWgYQdbsZceQ4sVLFwcpbH",
  "key19": "5SraUYsk5xKBQx3GZGYckWLQed9YnwgJw7kgci7rMnBDC3c3Wn6cKWbDaBjN6uHkVv9qiAALYaakctyLsBo57NiU",
  "key20": "4tG5QAmzATXTZAjvkBChnWGfMjofeXRwJoLmf6sKXUX6h9TrcSDzpcw2NvsqrjHSMqYXrzqLBSRTYtUQdCZcZ6xM",
  "key21": "22TVPkT6Zu3uRcYbFzgcuhpuhf4B3WS2vMAxFuG6aBFHyX4QxDPuto279pCLKLrkqSj49qdsTcsB7MroTPc9hF2C",
  "key22": "Y6C8kboXs5BmfA5r5QWfS9dLy9vC93GePfhR1vyy4tWrxmpCAFQxFmomjm7NR52WXNW86ocb7ZJDtfPYJkSBHT9",
  "key23": "5rZFYJgquszw9tszM9YykMxX6dLEGufUdCkrRKV5uXzWWsNw9bEq2f2ghx66fpYA9tfFYCMQpzJAHEs85kL7hSoZ",
  "key24": "4D9m4RzV6MFg2Wzd5FQ819WsKrjmZpMHgz7h7roJbwjV3YFwi1o3cZ9FWC7B9KreEUcaSZZFzNf4qny3gC8eeyds",
  "key25": "5SaXdaLBheAhsmCgQyCD4im3HkghtXm45xpDjfpEoShmaaVxK9sXFCqk9A5XwHNtuyhdceHY9v7GqYDMc4w3J7aC",
  "key26": "2eNkcDUs7CQKnaVKx55TsXTCCbUwTZQswSopN43twgXQdBwNaQ1nbtmTpLk4pKKuB8BcvdHDjKmSB2orSrrYH2zr",
  "key27": "62CoMF7p7dVQRHuiCsKfMBYG2nDV3zT9KkduavyXqARrdsjcdonCmFzMVUMz3J3DBxvxKRndunx3xEhr1FSiJhr6"
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
