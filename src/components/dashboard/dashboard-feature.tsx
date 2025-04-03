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
    "UgHtFDXpTjdtbCjYLMJwCen4GpZmysfz8sVW9rB5SG6wKdqTqmxBSD5mh4qFj92waZnpaBzxA3VU6sJmBgYgbkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVQ42dbCb9aAoQTvTJ26wo73Rt6qhj48hD1xt3y82NPWity1MPQXEEueK8rGaFW6gsxEQDRqSU68WEVH6QU81ad",
  "key1": "34rr56kXua1UZpufMH5Xzctt4V4EgjBYS4NBgvV2by3ZNyN3YHH6GikXsxrKeLjERoLB3xkXWVo2giP8P7Qkpgt1",
  "key2": "2f67M9UiNqnNNBUViPGdpSY4ppE3PeqWHvNR1wurAitkFmnHM7pU6ESsM6xCAQifvP3iq7UNZ7eQc65sUk7dQA3W",
  "key3": "4dhMjbvo5hvW8UxYbGpoAedJgg61TsBysVoD31yCd6X5TEnVeVxWRj2uZ19amHhP6wRsgkXcDwx4896UhwhEcYMS",
  "key4": "4WY14hDbtJg178QRCo4hXtYfwh568ePeRxKBzp1xay9xHEZMdSFm7bPTd6KW8ZCFJRWZK3rwjaWz6FoMPJvb9p48",
  "key5": "3WPcDxTbSjXPygAbbTLnXSvPPA7swdcZhoD38hVeyjAYpzDZBZhDYME3DgWW3XsPoXPa3HQNpaSv85wdcPzuVvw9",
  "key6": "3JNGEYkZQHMiz4cVUGWA5tWSiwBNrdjJQe59UFN6wvDBUYfibpxuVXVAm1JBHHryiAoQ7MjUJThCy8j3o8H8eqvV",
  "key7": "5QKJcqcLnwYCJpE8HSLpZ6ybmwiFmo9vapYruS7NxcbbnWLpYX5H4DQGRTww6aiCA1ErpxRhaaMRC2wkY5GPhorj",
  "key8": "4yEBYYrAr6fJnK8Mv8gpNerxE59kTf6r8u7wMyJ5Leku1ZjWSprFXqxQJWmVVYEnWQB1JwN2vLMxA7wtcPkZkSRw",
  "key9": "PWnPCU6W8jdPG689TnACkxHECxY7igMd3MHDakSM6xzSQqG8LzZFYxkGM3K2Zutj9zjMiiLHPu3rZubTtEUEKZ4",
  "key10": "3RktfTByL4PGwy51xqrSUXCyrCp3MvGAgxZ5h8K5YoczUNMv3h8p95QjTEkxQ8GQEn1Ax1j7bVhV2MtG51RGnHgj",
  "key11": "4wpk6xC2SEyFfJ8cJi9sxjUXWEWurNzzGxXCkcRfVru5JWQBbrJVxTWEZjhtWXaAFz7xvV9r7uzTGqJsk22moAHu",
  "key12": "4wycRcmJ51yPGW43Ayysd3mfu6UM4B2K5jQa6JQjPJRq3ft1rv5PGbTNmUka5HLVuPJCki1RBmMDZYwpPzM5HY7q",
  "key13": "2jyoYsP4QiaPZffzeBunLjHermMNVTNQA3EwjCMe9xqDx3z6VLrGKogxMFs3gV9yuCFt6jhvwzhp1HAMVk6oxvRM",
  "key14": "5s6sodLShXhRZRfjGbk85MiHT563exJ5wMC39W1bKrkQ1yKLnX7yyT9me7nsewLZkbkGLFLtwFqekcPZoafAjkE7",
  "key15": "3bjeV1rofySKxzhaK5W9eB9nfcED9V9BcJM2wv4hERWxMasXcbGjHk3ueibct6sqDnYrB4GdVJaxmtwpjPqmNuhv",
  "key16": "4oPbYFvvMCKGQpxd7iFNHFAqW1xNXssfa9Ep6bHJuueBrMv7vvwYwps1vC1pgo5qnHPUpXuuzf7xW62jvxk19BP8",
  "key17": "CszY1nELfSFZGH7jUQ1VKfcMm9ZQs5aYz7Se8MCZYFC5poLgmyUwXZP5qFikTN8FVKEE9XGzHoQnKCXP6yPkPEU",
  "key18": "2mALJ42nsS1UekYP2EgvmkbBbmPQP8NiWh9aswzQ4aSyoE6jBJhFs7qAFBbuxsoX5LvkgV6H7WM7GoDdJkLYcoBz",
  "key19": "5xxBLvnAV4RUFXZjxY1kpRV2droHDJX48fJhDfio6m9EpwBqKhxDTgGPs1f1teVUv38Qvx2BfxRqSC2jZN2QwCBR",
  "key20": "Rkb6c9kbVV5XVEsaAknEiVQELihwNGSWfbzQYJzx2VBwn8QdotP9yJ4A5YrPMByva36JngE4MvFzT3UdvmHhW45",
  "key21": "2jVKowGeF4FvatBsf6bsdCG6qjoH7ZX8PChUkKeA1bh9DTZRTnvfxKzbPKvExCEPy12TYDzXskTTLNKfgmfcWHgC",
  "key22": "KHfaziWEE9HYYp7DaYhWqgmxvQ6hU8dqvVmZn1udJXQguHJG4o33XQMpY9wL1gq1fVzDzS4YNqSfUWYGPZ3p9ix",
  "key23": "4GXGJFZ7TVbPp9dwF1L6cUdseCaP1Cy7Ji9mNduffYGeEkjZrWbyzhpZ3RNXpp9Dd9BwzMaF35xw8qQ6TxrETqVh",
  "key24": "aGNdfFsBF7yAYQiPS1rrVt1PoETWnj4JyXZbyQLCaq7EoCGS3sZydvzVywnPRwKE13UotPR7m9MvPJLN1BU5nGK",
  "key25": "2kMRNtYPT7jVFveXJGc6UHNvrgxySmWA28GCg2HEoZZYzzRxBSHYmPyQsiLVc97VUeVV8kU2ftsgxHNQqo4AANoM",
  "key26": "dd7fggCdWzXJzBDzcAWjAY9bHLzUNr6aTQsraGoucMpFbpXcL3WhAFftGDTNS2anB5mjrbs7ezSdoPZPU1zEnqT",
  "key27": "7vFGraiDD7xDjwijGn9ZfhmAymJYaJ8Px6ELsyFVavMvnvHCEmXCXPPjpnmrfNWisRaPSDjuB558nAAMEaC8ZAL",
  "key28": "4P6GZm5c9iw2i5unPFWUQEJ6Z34RGqeMZ9hVfkEqaSzUWMNZ26XFw5J9R9QAxHhHKNgjHXU7aVu5fB7KNEubY6Ci",
  "key29": "4jMYVT2Nnt2GVVg1rkghThrE3dZy2mvP7uLoLL7BNZzUd3w2qhC2ts6Fpeukxp1atbmNQjFTL4eF4VGfB4t86wXp"
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
