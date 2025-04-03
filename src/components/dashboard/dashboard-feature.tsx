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
    "3CxE1cZrCrvaAEhX4C9C5CU9Z7F7UWcejqCrrNBhDjRxHaFY9DD8vE5WrEfHp2SnrMnw3WXqYS5XVskE6r9BJSUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WiMCMUQFwXAgyDnqkRwEv5LXZiWb2cufYfnSeZnfF5KdKBKBX6ygJdroDV8UCVP5Y3QXRTVWsarym8nBiDnNLp1",
  "key1": "35MdScgDQPo6z6AZKhxzSuVuSbM43fUAQmNbDkPqWqTYLzqtwMnrZVL3CQjXEvwHPJ9PHXatQEHDUYQmbothFRsS",
  "key2": "m6TZpBnQtCGiCnjEgYkNZHMvkbhYHpaVL7LQzPBfCVhaZu4FSjaXH4sSKkFBmzzFmqDgcisu7KfWqf1hmT4H9rG",
  "key3": "2b2d6yX3pCeZeww6eX1E5RjaiqQqLYCeoLfXBjR9vsk5kATmq4cwLRE5jrMV1JgHFu95jp7Eik8xXhXpiAvRJxrL",
  "key4": "61iJKXgh58VijggV3LGd6gFWnHNpzaU6E2yJ1WrvEft11Q2SVh8P1cULb9XncxtNLtSTciVTGyGZSAzoQHVFk5d6",
  "key5": "2wm4jcceqY1f6ECf4RsmBkfYjoEwvDd4gcwNnc5HLBJVs67fCZV912Zp8FmDode6onRenzn56urRb2TBf4m2GFnX",
  "key6": "BRhDt7bGrtupu2PDNu2ph3iWbQS2BtNfxSsQ7SrscPj1XY64UTU1K2jqr17WvVCUzRuYzuiaS5oq1xefjnKM5Yk",
  "key7": "2cmyPqpCqg4qJsrSP6B3P3AeECdtc7L3FzsK9TJX5gw5UEtejtpjPw7x5zLVUeejNiu7Wji6VyNSx9JpYxvH3bHx",
  "key8": "29cFs7u9g88nuj1tyKHpM3zvV56wuteZAULEcpAXbDZs9TQcFGRuETUa8MKC9vQGe9FALUK1NEWirZiSwpL9iwrh",
  "key9": "3z7W1fZQUQb4N2MqdKQeJwXnMM9tgpk2A2z6jaY7QHCF5aHruHJhLiLCWfk3BWbC384XveZ9zsYpLMsn6wFyhBNU",
  "key10": "2bRgNnDpSBn8aQnMqaZN15yHS981azMHwcHXXWHLj4AYgfLtjhZGkmDkyaQo8UYp7xwkhgXuDXesWfNinX8yYhLS",
  "key11": "4WCp4wy9ReSrKTzok7Swo39sJSsjoc7jGs6JSkNuNSKvtPPu3xsvDRbZq2TbJmLQt4XuEJJFSjx61tAZqdJztLn6",
  "key12": "2gpzYCvXETz1dKonm7ncLdqyjKj2xsEpidzzVZguS62YVfoDrmEDLdAAx4snoch7hBJLWNFzoq5feuP4PCsSHDnU",
  "key13": "4gpQY2Tc5qsKYMJ23h1kPdv4uc7J7Y29Baonig193tnNF5nf8pqD7pZe41M9ZZRmX5JjcCto8PCYstkaTMYNfYW1",
  "key14": "66f1DZP2FyN34ZFLC6xKRkUz7AV13e4JoHzAqswGn7zwwXZijyxgeLsyXJBPF4Bay317ayThftNsdUmyPuSff4M",
  "key15": "4wubZ3GXtyCuVpKqVhVg8R7frHjcHGtinCmBC6p53nUoL6wjRjnfXTKLgT2g2UkdxrWDGGi5ZYV65zjDLcxbcpWc",
  "key16": "4QidxzidXoXCAZQVc6Ey3FKZxT24cNjoYLoGr8fUqS2RsmjsJRpghp2ZqKTDW4KbRgu2Q9WHcmBK4uewUYkuBrtN",
  "key17": "2RQP19URuqfvZVYqeeG3bXayzCLhmhDStbKEFQmbM7nuXPLo2SpCDTqXgmnPBBUCoeVBYyxpraGt2ujWMvgv1y7q",
  "key18": "dY1fYzJCY22iUpXyt5mDTGM7whrie85dTB6jjNsog6mv7FvvXk3hCEq6Lm8VRDPtsyDimiEVKkd2AK8CXsQu2Vg",
  "key19": "5Tr7Y9dTLEqp8EQT8GepM8TKvM8hKo6b5CUK7mtNR3USNCQVeazMonJKGYpeiE5hL5aEY6qaWn6YrWnJLy4JfRdi",
  "key20": "rVMoQZ8dyhohJghtbVQybzc6To6Ehq7f3Xmxr8zhpJWaAhZ3QAeSgMAYMTe7wkuLQzLVB296g6fbEBywsE3PXpq",
  "key21": "3Q8VLDaicjFogo7aKh1bNEqmns9dVzFhuZiH1y39nTinYRHE6FNi2arDfAWMaza61qREXFQCQNqajvo9uqQ5kkSS",
  "key22": "5o8bVHBFhx6vpM8c18wwgNgJh5fnsDBGUiCcLU8QppuXFnirRdjRmSgmhu1Y7JpCumZYhUCAJHWFNKEGromZCNon",
  "key23": "2eyyNwwa94fVWMrxV1keY4N6DcB6yHibhuYqAgzRFfTg6oLTXVyeehpZ2UDpGXBPx3pzbRGFXEsTV8hsF8nchaCt",
  "key24": "oLRryzbD6UV6qC2PMJhgmuUyRinKMRFJJ6imi8EGhZLnrVoeQAm8XWYQR7cTL3RiCmqTzwATz1Rd1PfdA6nrzTt",
  "key25": "52RC2gKqsuzsnnaovUAutUkweruaQvNCcsQMFGVpUfmodLh4rb3eVLoVF58pBPNR4ESLfs3p5NJGHpeqiap581nA",
  "key26": "5Jiusg3m1nHzmeLzSRpnH5z8uf3UVBAoTFtP8MD6A73CvxFKqGw8JXMvaFdxKb1BXAiiChogudUgpB6AHc6mFhkc",
  "key27": "3ejNGa3vMicf7gXmUHAbiu8BsNu6ZXB1roqKiW5KRk6FWshsYaHAgA3PoGpxwAEksK8HGritj3MuNWjcJgbvmHfP",
  "key28": "3bLYa5w86KGtJN9mLETaSXPGkc8XdsJwakXXVgHLiG4tpEbzvufryRHtviDMARXfD2ZUtyd3xKVS7rVoYDJKNm35",
  "key29": "4dRhvUMmfPjkGGPueJKsyxC9WqPkJPAdBTX2TrvrvEDBpkuEvot8qF7mAPk3DiUuKEnteNqc3TN3HEn4a4zXwriA",
  "key30": "gjstuBQQDQPWctBvHuNQa9DMJMunrE98rPi1HrrvR942QSGjX1GvjbL5PivJ6pP76YsGSb3sDHesvdk32fVM4wo",
  "key31": "3nEW1uiiwm5TwLXtGWgsZrGDAFvBgztUS34LYtLG4HBPskeKsYQQV2tFUN9GpUAvCP75gNmouPTpbPb3nAAT9dHG",
  "key32": "2FAqrEG8TUNn6uGaMjt94qtMS3sg5jj3DRHqDzM48zpF2RmWZ7Ak3LkwafDtmKS5x7pJuG8R769RCyxyiFBMjsvJ",
  "key33": "5tJNr7aznJFUV1CFUN9Xz8UXXSVF92eUa8wDMS2jN2XaZ692QSJttAPGz5n8mbSQz9ANCvdgJbLsLnSEqt33DDpM",
  "key34": "2STJ6j4n2eGNtxt3qmAexgwNzAYJKAGnBE7xisB3DnK8WrFmow6UvQnD73DTtY76mtDUarXNoLH1o7G9u4mfnrmZ",
  "key35": "4149StuXn4F776MLWac9e5QwhnbA8oPsxq3bPXRSw2qVidT7zX26DUKwM4pV96ap8WbyWtB3qKxkyqDZEcqa2m2x",
  "key36": "4q5cXjGgJGbK366o1raJ9E2yq4WYeZMpGd1GTUkvU7QA7swAyk8hYXv9fMhMbv5mQqtNm7pjC4dKDmoFArfjRTD9",
  "key37": "2TXRB9nmoa13xtCwykWao8h83DetnWEeHmr5jg6Vjs3oNPZQvYE6HZJA77d9f5pQq4b4gPSi87qKAnY2iVvwgTdv",
  "key38": "Ys1iLJ3ctZazuqynzYRgC1Te9yuX7LTAT4TcPj6HqKcP5ivm89xDrDr3df8JbWCSPAMjkaQwu5U7yaS8jtbSVyj",
  "key39": "4VPBmBNg26DnNnUXv8M11gn5fYCtbeaESCBuagktptjWkNiiwxdd38jV78GskZv5YQMNzwgfrJs9j54QbZdq9tfa",
  "key40": "2h5ntJuoMjDdrZ6t3BpbpJBqjjxGQ6LMGEVJG19yXcsd8TFKbWrPtwPx6dRuiLTf4CsFwamjkK5GrsmM8NpJpXmx",
  "key41": "LE8K4TNbe9yBWD7zKKcx59Lg8F5crB3rp2EDrAGydnqhExi2WMyfqi9Vz82kcs7qKECh2F5ewBJFk7SY5V1Sid2",
  "key42": "2gc3NMPx5EcTUxRSjeNnZhjfT5bMwfn1gFN5ptUJhezX2X9qWX8uAS2yjKeTS3sjRs3mXeSoduSQ2Y9BbCK3Hk6W",
  "key43": "2QoBk4ppbV2dCmxzu5kZTu63DBrY51RCzx4AvGZNK2k8fxZnjB6irDFmoaNKGUnR3z9JKcvy8bSnpetBGyNmHzVz",
  "key44": "4qhpgBwhWVquyg9dMhVcoJSqLnCw1TMzQh2UuEWiAWRkzc91ZvwNBvYZSFqya9s4hF9Wxy8UWULUZ7XAGdQZ4444"
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
