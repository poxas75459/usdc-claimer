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
    "3653dZ5UmybCX4PvCLV3DbCvePbmMgbdXjqBB6tc3X2gCxi8oqbGbHzu5jpENyoacHkEkr7TBqmyV6JnwNEWUzHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wYHnpPgoZBrEKLRYqxpHyZ7V7XK6zQtucNNeZPqdVePXEUhwCuKyCJ5XZqfPiLii91AHVaykze1CUjFHYRyT4Y4",
  "key1": "4Dqisha9qsi51L5enn7FoEzvY64znJXSsBg8CNeKKiFERV8ihBCuDfS4yCx7zi3q8YtRCoY7NswQTL28QJQserg1",
  "key2": "4YtTyx9yJUh6DbZXtmTSimB3pHijh49XETThGuuVAZELv7GF3PSehGAK6GYx33MBpJvrHtSWT1wd26r5G2pHicX9",
  "key3": "5fRRNvcgDxfvDny6UhG6aAWypbYJ9SYrbrRWwoXmym1GjDQcFvXEsZmGkCBEyawMDbgGHVmN7J9cDuT6ZD2jTofj",
  "key4": "4GAVqKjs94fWf5p9Hs8uHj4yfgA18XvtkLJjbZfZwmbC3aVjcpXXSDNY3hUeLKdanQ4y3sK4CvQwYeH5GEuGFY7s",
  "key5": "58TfLohYFjvfXVYGHbYkND2oj63WZePgRerSSixvb4AGMvCiRDimsgTz7g7XTw2gDDEG1UWEmmsR61pQzBT2nxGt",
  "key6": "8pQdEGvqdnxzQQAJBNRsKPJW9puMBhyK2ATqpEGrfPw79bGu2W1B7Rj5LQDiiVTPhMqCZjZPYnZ5iHkCiARmhr3",
  "key7": "4jVTsxzx2N9gmzGJbrwGEiwg2NDGyAmzF7DuMrLTaqbEJZtZAC1Lof1oRKsiJZg55PX4ZrRDhx4oZ9eDb7fEhu6c",
  "key8": "4irQZiPC1N8YoCzveWgBZM5GZArKmqYx8ktHqDM94nrUAkKKhn771XAbb9REtDeo9HknF4Zz4tNARXhhPkqTfLvJ",
  "key9": "2U3BqYBUCDBxGS1o9PKxvSKAuQkTjnbkjBHrG4uriK9429D3Lftktw4VefaoAV8JZaPPp2VuLMRSoYsPuy7Lnj5j",
  "key10": "22XNLxRQdkoinTPRMN2KsiWPkbzsfcmpkwTmSEQuxkfDjtRRqDDLSpfUwxPJM8dGpGcvnWk9z6SGDGXDu8tFm9ST",
  "key11": "5zS2NdbKp4VneGcypPpoz9jCe1nFQFLKsHxagc2ngfx7MWfVAUkFu3LTqLRCYQaFfjwgJgG5TraBuBBbrkvy397M",
  "key12": "2mmVHvNi8EHQLMLvPE2kyBckbWmMUxqTVsDoZE3Jf5EQ11K2R1PaKJQ4LximiCt2Xpc3jqFM9cZCbW2deKTndbZn",
  "key13": "4LwLCzrxAKythzvGgoiSKtTHPbiP1rG778Pmqzw7cgjAorjoAGo4LTTXmr5QssBt83Jyb3wAwzDyx5UcFCcuYrfw",
  "key14": "4DAQCPxDnpE79iX7y5KswgpS8VnA7KhjkCCzJ3EZNsSwAFSpXSVSh3kmn2C9XWwEqoZ2Qc5GUZrTDuYcN5Fmi8Jh",
  "key15": "2z2grhM97sNPfXfUFG1zDdtYBa4d4gtjQvXVCqRxyZq6Zg5RadJHVN3EeSfrjJ88brzL8XLnuYqZxUwmLFpRE9tP",
  "key16": "pBoaKSDasea9AgBYNT8cuYxXpuFWcwFTtEjfpzNWtcxLqcsk9fd51bVvuc5nJsKVJtoKVRg9CqeQ7P1nSd4BLP4",
  "key17": "5DNBJizmy5yhUSJNjNAdWYgeWBAare1mvhTQ4FSwwWL8W1F7BEKWTQVRBxjMzXNUvMy1HyBDagX3GEBKi9y7au5E",
  "key18": "5YkRcKArCEt5BWiiTAi8T45bnrnL8SRryQEyo4FVQZgHWZehYBJ6jPj6SzSwC3fsjgJX4TJvPXrSvBzYjLLa97UN",
  "key19": "2sGtPLufmPprPrhmLu773SmpXDuiWeNGcejWS3Y8v1msCQTwCD8KhdNA7nXcrEZmYxvA1USLzsR7ktxUkcwbi4tf",
  "key20": "MEWgsT3PRYa4LZkdJGgbfygoaC93KYpbQ333bs2RQLminip3yuqj8H4dWFPpnX79XgEydXnnvxDMic1TJCphXvT",
  "key21": "4ASVQrrqGV7GJTuzDmNYvkBSqkktVfnJRbGJfvXyi4voWmVqYG5wjtcnLwCCAGAroFmPcj9DxDJ2GWBQXRYzMqLy",
  "key22": "3GNHY9dbe3gsXjKotC8ZtESkiVEznGnRH8M23KH59KeCdrEZAgy9yeJoDWH9P4hbNomRPkUcLNcu6D3xPDSMPKb2",
  "key23": "42crxuryLSN9rnv7wScZs8NmozqU7s2RgQp3nXJPr8R2SF25NXNbS8odpLdXNggrjN7XhKojgp6jP1f89tFHhh9A",
  "key24": "2CZnWMwgpLrGWzudvQPb2ux5fHT424F2h4Ck64a1veNXFAmiBYJibJCSJgzDJfrGcuS5M4MvnS9ychLz6fcjAetJ",
  "key25": "2AjsWS8eGK81ScQMV6bUEbfaPENWdSz8pzfr5SLPnHWEUGb5GRLfh4XE1Z8sf8zAQJnDpRaRbqYtDvmjm9sw1ARw",
  "key26": "CJFDpSDWcpoYa6itBvFrbGTeNY5g9CENRRRinh16E86ajgu6YqmoxbJRuW1cVHENXGNFAopGn6bFzK8yFbVdU4S",
  "key27": "8esuUXg3Z5J94sXGm8wR3GQnoKvfN75qPvUU8cSwAH9M9rZrLvS4tpKtNP11XAUpKMppv6FYgVyrPFMymGTRHJk",
  "key28": "3XJFAwiV6X8ESZNQ36APFeM8jgbQhMXqCYZ6Mh4cnnPcYYFB6Ui1x2FqezGG4px5oxchqTfAemGCm7ACHbbCGnTK",
  "key29": "4u67VZdkRtGzaDoArS9HnuUkpBg31bBVRLs6TUNN7HqzEarXmR3hqEwAXUgxUUKbyahTLENCSH2iCAVB2c34zBBz",
  "key30": "3tMKE8ep8nbh5mpWru1zwmDQ7zZkhGR7hNqaufJGs4vkioNX3MvDQVHnd4x7eWtiRdHa7JbRY56tmQPe8QDqe2Y9"
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
