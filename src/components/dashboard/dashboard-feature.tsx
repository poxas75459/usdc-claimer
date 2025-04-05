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
    "4WKnE8xWMV4giR5G2BTQcjfU7eC5ZsqnifsND2KBjsMuuMQ7Ufao4UJohQTW5EeF1Ua5BWVRdnjBQHENV4NTiycc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsCmXH83jDh9x7dF54YQ1CQeCy7q3Dy88KEDd4A7yAjUo9pnQa3hjqpHhi6btZDVRjhEFwSoJF8UWBHMSBo5yPE",
  "key1": "3QUBqgMrAydbWiFcJfwfXzCWFBPwkFBtXcwgcQvkoR5VBH4QXthMkKv42iNesggXVbccGH2a6pKsrSQFN1wMbe2D",
  "key2": "JCcYnYwwHSymyeZqVLdJJzvLzEAAosfvVsLozaZ1uPiJhhb7x9PWEpTtRaSqXfzyQXMPT7x8HPxQmQVNKukcpHc",
  "key3": "5qbNaPzsxRhX1279CUJdc35Z26BBBRs1Yqf2Y1Gab1pnTK7Fk5EoEDMNyqpvdSbmGbiaAVHEEHnPYxaV3yUYZMpU",
  "key4": "ynMcTnjiJg1WSAymhKkNb3s64h3evMffon8tM9ufxp2JtaP2U2wr65Jnri6MCurFLcpFXg97MLx5fF3y8kmoU5a",
  "key5": "34mwEjoU7tFxSjYa4bYQbVSJMZP7AoPKTKNr4FRcZAdM9bhRNnDU5SDXN1sxs1pEjZDd6F173EUPPndeavjw4jTt",
  "key6": "3Cq2eo9mF7UmYrrfroc6WnojU5EANTAJQwkdHRtuUUSyaqvchQvxgBVP7z1gEe5kA4JLEL7BYCJR4rgKqPXmHb8D",
  "key7": "5TDmDzu7qNb41aZvDT147cimXctWmgLsVLznpwPYGEjcZr9X8WoeFsbPjML31zEDHXzaqCWz17dBmDCpJBXe7P1t",
  "key8": "35HWgE4QHQKszae7q4kcDyMj3SJ5uHpQs2EuNng8EHXakJGyUxq1wD1Sx3WPCamDgihPD32fAiZSQT9WP4v6vmPv",
  "key9": "5cx4zNbeTXnq7ciDvxUBLN4zGYjtZNoB7NS84kioBU5xqkRr1JygcMLduTF45uTYqjUpv2ymvRDvvtzxYvDYtxjd",
  "key10": "Kcpd59h5JHaiTJnHKG7o4vf3wP8Ev3wamBw5f4Sq5gPyhhmwZKSm6Xo6ojYLbQHZNzqDrGy7fVEeNyorHMUBvLL",
  "key11": "5LUwkp8pBRY59yXvwMXFKWdZcVZm5w4MDy3fBRxZBT7nDfKwkRAB57zkbzLgohdwf28xDPbYANkqDKkcyypg1WkE",
  "key12": "5DsoW7sHeZ961JdTFrCe2Hx3s9VpxwMMfo4HVk8LXk27BcAPMjF7r1FbFheoGzXaGLDcLLGkPjLTvppi9SwQsFDg",
  "key13": "4iAnZLmtcRzCasUStko9f7oHto4oUbe2ncMCZ7h3jHc99Djq79aZFmfhro754xLuz2Ykbbum6NYQYvrLhwwnyoZS",
  "key14": "5GoEFUKzR1EnNXvP54sKSpEinbqWdMpK3AAmjqceigXj7iWwBcGGPdwYCa8637NHgEhKJ735hUJrWFSYWyxJ8CCb",
  "key15": "YRs5P3epKJ69rrNU3SQWnERxkXhYhkp4w9zjGpy9cxtUXpsLEsgNpPrGmL2gyKoWi48UugTsos2UXvz7kVJGxHa",
  "key16": "2ey31NTZd1v76VYi5Ex9ydJdDZTjVmCzawDeafnVzzB1zj7kxdAFnnujaQVHFpVf4pXg4mTa4KWgd71FEzAc2XWB",
  "key17": "299fQbfF3t8yWz2avk2BsCCLR8gdN7Ad3vB8kCjRjnLEWHVUBMct3oZnxUjjTHmJqVMhvmW5TGUryCKr4fcDY5Tj",
  "key18": "36vwiTbQBBUKYT8fcXzcm57MQGjGK1RdiD6DLk3xt8jDHGB5X9K42FEwpwmLCRFc9mgdMTE3ozpLd2WmF5JBJA6j",
  "key19": "3T1gTurxv48rYx7TghqBFute8p4uixj1DdrmTBYGEYNzVK9qxFpRNRgik3xrt1uaiqofuQTUyuBTs4DErkkAzSYV",
  "key20": "29uQqkjQYXU1FPskubXZF3cdZ5j9W4uFrfv7QHtiqVgLJ8MpJiUmsYkE6xDwLEAB2iFviqgu25kgbf5bU9PeX8Bc",
  "key21": "51kE1hJSoLHtj4mm1wLWATWEWba5wTEmSxQ3oTyX5M7HbDEM3HCWsmaKtfhZwhxAKRzZm3v3jhyhSLH8e58YgBpQ",
  "key22": "DsKGSjQMPMUJG6xxFt2QZrqAGfii5NuVaoap3Rnhb6Mc6WoY1Ac7qTSnuokyorxxLfkY3Qd7rPJrvfESW8nXzDV",
  "key23": "46K7jKaqPyYctW4ZqY5fZigY2sVdLNQCgbDTPrzrVqKBVs853KWsoN4f9T67FB551q6zMFaPArJr1kyjttiGTdcp",
  "key24": "5TnRsVQJGdG6iibETL6nCnj1B58rkpPyydtDARwYrDetQRB3Qaf7zhpr3mYaj7FtoapaMcnKckzRz7gTxhayqbzq",
  "key25": "3zo8dHXimh2pzMCtqxweRnbKEreaePvz4SLLPA6oUkVfiNNeAetCZFfJ6YQiuVS5vcvkWxcxszMoDyfhHLZoHf32",
  "key26": "2rKJkLwR98CPRJHJGiD7CRM3FFYNqBr3fvU42LXjhJ8xKivv7a9oHzaS3ESQNh91tLuquhTr9RARsNkj4FXhiEKj",
  "key27": "52QjiU4YrGGHo5Fr87TNJ4uU2i2XiFHRzUNbAKbRfNz9LerML2cxvWoCgAAqQxSPJNkjMAHH6G498VkVg8VVRe4i",
  "key28": "5XL6DC579fesr1Bi4xEMTyRsm8Rw1kSWNZLCjY5yGGf1YG21i6QdSG1Yj7hNh1PjAK9kXzi26KqGyYotty5cV1d3",
  "key29": "63qgubBJ8YZGzS46H77QvPdeXGK44dvpxQHZFj7K4xuBug6MWmuYsyykvLXgfRgVZQQPDAwnh2ori2VZE7g8mp8G",
  "key30": "2uzFnwzhK1AXu86CqCipW3Vh6Q3TK5PojfEeJeKD4yH17Hs4K623Y6aXugjSC1aBG9XkfDT8d8KXjE3fyqKjC4TF",
  "key31": "4K5wQBvdcg2L37QjTbb1bKiwiWinWpk6P7E6mQmFEWQwdivZKeRZ7q1tUSfxhgFmScVwLHHMKU4u2ZWnu6Ly4suY",
  "key32": "pBdGcaaXohyccjztVP5uD6MHXTpyXzcLqYkdeDtiKZKUoBhZ17ce5rdxFdDJajqZrWDSmnNere38iE9NBp98XM9",
  "key33": "49rEqCskq5NJb7wujXpZpuMcF4tLa7LDAfhxXJ4GEijjiLNE6km7jXfWu1ZrSvXEqLad1DrztZD6wqSPGLkP8CD2",
  "key34": "2k1mWL1cMMSu34LdVzfiSxbyypkqftARRFghvJ2MsegW9D9nxhpE2YkgHag81MxjaaDBV2Mvd79q3tkdAbmE6cQU",
  "key35": "2ZQtLdDXqTWyGfuAbpHrHw4a2DTt6iprNpteo6uFLPiu4NyGbZ66Ft69o4Fk2Gw9cvaRUqPKjNEkdkYYePQy4FFN",
  "key36": "3n5fSaXMGv2VSE8v6Deke36PVWLTuVnBNm9WRnKs17JRKR1f2fRgGuNpS9AesYUAZLNWTtw4D5i7MmktXYJH5NXj",
  "key37": "3bKNBHD8q98sS5rQMohqYub732fR1CZck2ibsW4S6Gx73Gnpm4DxumBzs9YnVyDpdnSALVJJ26bgEnHTzPfZTmyK",
  "key38": "5hLqqFPHVagJiGnxmwH1S4abh62DELvdzGXA1DAN5DDMWh3QWVsgjnUzVG1VQFMBFMqSty49B767VrzDBWQuhyFK",
  "key39": "2aELWJSGBpHEQYsewxD7hwUDuiKecGYxJET4ynUoeS9ToJ3PBjL9ALtRXnQMrFpozeizs3NDGM9U18r6orTDzVRf",
  "key40": "5jEqmXUf1HAUZ3nLfUudHuRvEmNBNpqP8UZjk8nnBd1bJijXmvA9fonWqKZrQjLknKpUDazz7oVmPgbtvbVpsWbH",
  "key41": "31Y7AgUQq6SDB7bwmjSUn8JMzmcQyTRVsGNf1ywaRw2cSfHH5KyEhUBYqgtyHdNCKcCjMUxD6ob5Dfw69T5gzYNL"
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
