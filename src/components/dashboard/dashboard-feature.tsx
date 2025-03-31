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
    "2jaKxpa8qymiMf9nWv1YFopprdUQ2ZH8eGH7BtMgTZVNW8wG37V3QM8FSP1Ufq18rxzyGeS6kRkNzEFK5YpBPb4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdbxHKBFaxSxSFupLpxbCte8MUJA9tEro8V3SaMGTE2uC92HTGMnufzc42oaEsi5NLJsndM65xqpUPZUk3jLdqH",
  "key1": "BgKh76iUq2JjhSh25Gxkd8fDt6m8seDbBprhwBXjhru8iFyhhCs2Ci2TBEq3Mnx1P1MRb8QfGF62MSCz1DFb8Rb",
  "key2": "5bD4pje1NKd2UZbeajpziVQFs5McRPALRqUzpnqQKCzn6ad9FrTwR75vJ8RjUt2uQ26RAHCt1j9ATFify3Yvd6sD",
  "key3": "3WfWJbuUvpe9LYS7Kc3n5c6ddFZDRk9zx6N3JR7M2keFmXye7rYzvEU5npCzfQ2zLZdkTrC3nVno3tp7Ny3iq2es",
  "key4": "2H5gnKC9bgRjXJjgjHUKGrXLCemzhMZSM8VZmsyRFJcYTR78MXVZF2qhBeAikxjUjcp6A1SrgKmWDoJ1GTNAu8bU",
  "key5": "2naRviwAmdz7PQ7AwPmPWdvJ7qyZyVizcX5cQR7NTpsFK9YHHhATnzjChMXreHA725ehRLUHTNSh7UHREWARdqa2",
  "key6": "4n7gh9DnKZjWcDpxeBzMdAMGSsmM1j3HyBmdDepts5gormECNCCpYifCf51TeMaWh496ujEj46BXJ18qMNJuMXNN",
  "key7": "3mE5qsUSQnFExGpftHETUGYt7ZsJmtD5PN5iRFDMrn6E5B4WjewUSoqL4F3bQXBbkwAHEcXzJKNQNjG44FmMZGJo",
  "key8": "43YLrCav9GzquwiyqZBFG1JnRaHs7ZgMXAo3JFejXLGNXrNXWZFr53cukRRFzqj9NcoMqiy2bE7W24PC2X9WwxaV",
  "key9": "35opVQv9wTeNktKCwGB4hB1LZ9K7xayEskph1oLGd7u16wS5EDMc5eyAt5PtnKW1VSWBvfzfpBiRDYdSRhudcP4B",
  "key10": "2uiiRqT1am9W7imKbtZTrLxpmt3w8R2H1sDQqf6C2W8gUMAnJt64nUxTfH1y6g5S1ranqSEAtijt863KSqwSw1cL",
  "key11": "5KEappYg2We79P6P3Ui5W393i3HT8k42Tc9c6cg4W9aGnzcKfaRt3z71dc53pb4CobeWytQTkwnJoSkiGTcRfM8S",
  "key12": "3KdDEhwNn8nvrDxPHpzkYGDWpBvD5LGdnqBtSbnMT7NTthFjTzahp55v9AeXh6g9UyRDL79DzyhiQzBpjznWb6C9",
  "key13": "3RUC8PfpVNGMRPP312yaroFGGMYb5dWVAX2Qey61uSFEoZsrc32sfRehDv8GUsqrfJZXTBsk5S9yCv3Uan2fTMp7",
  "key14": "2LrqaTSB8ovJcQtW3NhWDub8GKc4mnmCLLYQVLMk5djQvrgVdNpaXbtDMz9zMDWmToMkyTmh16yB99TUAzoDyNRQ",
  "key15": "2SxmpjrNHUhdoj5XArMstrjGQaTpPUfER1WYbP3HwayjPqfVBiST3XcVamNfcmm5vTfXPiBn5WDRe11FQhKUkViL",
  "key16": "3WnqddF4p6MhXrUUMwbALzPuEdQfmi1hZXvWGh1wXwdmn59iH1R8JMs7Tf6HsHjEiAf6EvzsiaVxv5D8D13h9RaA",
  "key17": "3mnARnNxdfkUdzm2iSpHmrVaxbf1NiQGyNjsDNkwyJYvxr7zizDEsFWix4SzWvzvQgUaBbq1xvysJmwjuwmLZCQa",
  "key18": "fNpvRdBwcDpauSpJduy2Xc4Zo3pVwjKgbMWDp63y5Ap1avpheC1WH1wiWMvVVYYkm6hf8DDysUJ5x6FGMtEHFYq",
  "key19": "4w3sWAfnKk4WCmj3oox1HAuphgnu32KZDgTpoE4UxQrJm2KfV8VxNwyThoABzK7sNQvtz2UDTefgUfw2uxVNAh7N",
  "key20": "5GojdfXTNwmRE7AQB6CJumHotQDm7Zj6DgPNFCusAXu4atgiRTNkirrBEmknGTkPagBMJUCjXQjWYTVBxJ8Jz31j",
  "key21": "3spnt32yKzLnH7sxYwrUgsEUcdmRNaXxkwZyvoL2m8VHFD5pszFf7rNNDJ2LgbKuSDE8618bdtesZpq9x57V7Buu",
  "key22": "3jbyPy5Va1UXUFErprVLMotTHYLEQY5wHgj5kmakMx1HqnC7Lt5ry23sMBLeBR67rQT4ikdCzReTeYLf4Li3XcWk",
  "key23": "4ff9DQiPAA6wognvvA7PPwv5AmmecR3y2y7qHWLQPxSf7hYzDixf5rojxYPzFhTLuhJvWuSxXwLGC8V7xHuGrdEY",
  "key24": "46c9BoTfYDCBxKc3QEXT2f2wN7kbxuEeJwkftiW2bUqbeDxbVCpHyTX21aRscyLomKMgUFaAj9GELJGqqJArs8v6",
  "key25": "51NcSfEzgo5ajE7p5f4rHZ3JE1f1xG7rfFkEua63VJqnC3TMwo9Wb1z2o4umsZzgr6ykBh8duDkyBA32t86kixJo",
  "key26": "LRDj1GcH25FcctP4syvocJvQmFQTEmEMNPFetxhTvB5afJuJTHdTUy7b1BVaoFWnJwhYCC3LxEBtbpsS6DL75jm",
  "key27": "5drsXVjgSe4aWLS4CB2nmqZScTvVRj5mwg8d3XwCtUkZ9in4jWREEkxvA7rdStudD17TuDcQZ7c4fUU9YPqhgenx",
  "key28": "Fodp7RPd7ptv55ELXcNFhuzXwqN9YrQMEpBdJnB6NQgeVUwErV31fQASrNNi93t46TFiFMSjh9otGTDeYfqJnBj",
  "key29": "614xzr1WgKaQrYnmtvU7CSCVdseYZrD5XAZnZPPCcuxB6H9ZNPXRoio16dzuNdh4uiVARJ7PpXHAxPRF1FJGYXH8",
  "key30": "AR4ojgxQ1moaootZPx1Kox39Q9VcH2VKvNtNDsaG3ydhMsKFBL3Z5KZZwsfdnkYPz8ehbvjKbHzmrU2gp74ELmw",
  "key31": "3mNsKL4MnDMqNvCHKzwn9438ruQejr3GVE74bQDKXU8zewHRX4gKHKcwbHGHxghwpMS9yZngWTxRrE5QXJQ1Je95",
  "key32": "2dURU3wfuGMV8SZyF9UEUuSuoSos41iXzgWmaWfnZUAxFrbtu8XWr6RZ1DiaxF4hqNkeAbwSSq7g759WVAVzGiZX",
  "key33": "63X8DKS6EXTtRVxjVAhszPmB7wQbFwB8MW4NDHHzjfCZkmBRmXX6RjouoCsx9smWHkABGHavipgedc7Z1naa49nA",
  "key34": "3AfBDubocRR6XwdTQJMmoZuTa91tgW98uW88WHmmG8mfxBCkbMsDprLRSBPuUuLmJczNNstPWpg6v3JUBFJNA3yT",
  "key35": "mSEFG2awkiCAMBdwAH4iaCo7u8iXBDMCkBF6F97CBRdDjv5NUtBLNETiFfi9J6ZiCYN52V26P5m6kejHskQXvcg",
  "key36": "3VZJQoUH7R5PwQ5GNVE91H4U5MBwhh3VWZTFHjAjdPhTfi79Qcj3mhdSeLa7N7Ri1KoLDQEeTCi9fv3HmWu9vY9M",
  "key37": "2q3vGtPLEaD4hJRqH86uUgGrNowXmTP7RghNtkCdhgoChfFFGzecSMdsaqzSL7oiLHG43imt7uzzpuvyiK7xLnNM",
  "key38": "2vmrYYTrHLMwLXypUghQZofS37wViPWXrPYt6sCX254qcdXWQJnGCDcJRqiAXZ2oQxcDLoEzVtxuouYXfhx2Xnnt",
  "key39": "3Ke5ssbcLiJKzbxddJwEibH2hFimeQMEwaYft5kWT4p4h1x3Zy1T69j1mnEMKhVzY1RCxGsApm3QcqF1aWzqUUUv",
  "key40": "5Lehu9v2A5orBQ3CzzprvWry7a46HJbnpUMBwEHhqXQc7mrjfLPa3rGuz1RNLVpKLwGdNnwey44wGB8o6q9kj4FV",
  "key41": "AWqyxUS59QTvtTDQ4usY4wXY6pDCPz1a6tL7m2MxgCz3LC5GMLumAr7CVED2uUYkLvyHqmsRbfhTDXc2LFvbZpx",
  "key42": "aWs8pgb9wv2RURuk8aXtvmJV5pqVoRLNUwgtBJtCM1GbZgDJsf9mQKo69Qf2W8X5pHS4HXbj5wWe15ZvWapx5K6",
  "key43": "5dXDZuDqgp8AMHi6TNbCfNAiM1batTLEm4efpCcGnkpGxzRy559akgM7s3bUiF9HXiBwuCgezWima6AeYXzUXP8s",
  "key44": "2SXJdCug5MKRxjHF8xq5fN4HXnVBs6qHnUTKoLXEiZYWduGQ9zkURckTM3GHPkdjLTf6EoyHMYcTsArhmfPx16sa",
  "key45": "4zhGYjfkz8wEQrcmz7SAB1zyVLmJ1RyJP854FzCSo4t4mCUPRvmCiF9qMAe6QRdWZVoRbgbhmghN6KWQwMCozFHH"
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
