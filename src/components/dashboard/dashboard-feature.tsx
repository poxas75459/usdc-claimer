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
    "2X6yNwYAKTBa3WjrS1VXub9tttPD7Ks3iCcaY55tm3Ngp2GVdewfnQsTPZx8hEuC5nmt5k4pESagEpDsMKed51DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etJxAmoNoNifMwwzfssjGw7nnD6F6vZRgu5TfsbAsKUd2Ju1HqW325zVv9g8LdtTDs35MN17PorZyHMZVW4a1Sx",
  "key1": "35Wd9V1XZRVYvGGzXFKPPcXyZjyTnGcMkPoBpwdjjiRHKwawBvQiw7ne5JnK4Fxme2TwB2ujnWm7Wrfb2BN1M1HP",
  "key2": "5XbuzABZdUNiLZsjczrYW1DqZVTvdn5n3m4rZFCQ1u4YnEjL1TzNsDqDCTPQdbhhYApUGyoajQoT6LtVdcyXwLCx",
  "key3": "2LeG6PS5qkdXZ1H7Rbc5mLtVVW5WixjqTMqYEAKdc313RXUyrWspSXZkTU6LhbGybA7T1vryt5xpD7XUX5uB5JV9",
  "key4": "2deaqVEZJzMzRdMLBawoc6SrCdFQw8KiLjVE6LgXqoQqMt9vz4gtn2HQYfQm2kv7gHvV1BmNkvKVFPwJka2QK4Vh",
  "key5": "4M2dhpYoyzauczQTAQV1P55BBa2oiYLppLBkZP57uDmVjchqtiAkgdeUQE8FbYKqbYD3eEmSSXXhi2xFbALk3KVW",
  "key6": "57vKABjf7Rd7Zbpsm3guDNJGNTrGPbUVgDWz6L45kGH1bKgUFzQannEdGtGCxCkEQNGDMCimFZmDHCMhjuYTVL1v",
  "key7": "28MjgfkDH7U3o8EAw7EDbqBTaKTp3ExHAJYBB15w98n7Mnpru8zhguwZ3B7xyP845n34yc3AAHrU9odw3m2PYTwv",
  "key8": "4LvAX23soy1Tz57ePStsp4k6QmnzaegGFPbLmWsGAHFzxL7dgZLg8oEsbtF7NWh2rfAjoRbp9Tj2oDJtfnoF5F9n",
  "key9": "5z676ndohPgS2KLHU9kEEkJ9FCYvHFcUPqNDrK9HsonpmpTeqeipQDkcMA7Y1c9t6FbqLhZo2vFCvHjb26d3tvL6",
  "key10": "rdwwRo7jQ1uKL73kUTRF5Nx75sMT9L1h2bhcMYEwTcdibQewi6rKRYaoXYQ3dwMU3fYfx7r34fM2Z1HgvpSMpsc",
  "key11": "28HBc8jMeaqrP5f19dCxQqFGCZFHCxNxbw1xj9xcUPubqniKcC5qUC1TQjbA7oMBsCE2oRW7iUnLbiK2uyT4gv9G",
  "key12": "2ugF7p7iHc3gzHf593RphUFBFtVcKzCosMxhYz2ZB83jKbxEy539b6qrSQWRwNfdL8SZucsgNmrpYobRoCjc5gPz",
  "key13": "3pWZTpAuVjY5aj8urKSP93F63cri8co2Ec5zuJvzMTVrTfS7vPoCBBXqgBNx8d9BE9T5tj9axaoMkK8WfrKRxAQ1",
  "key14": "4RLxuMY6MYTxMAZzgj26erRSqoUJNybGk8FaPNRGi25eBXxTFUvCfvF4cVekzDF6pfuSaNJepyL8YrosXiiCTkxD",
  "key15": "4rbyRuKjbwz7Kbr1i9jPKwvaHGmpLGjEQpQsQAoxp6RaUDa6xHe7wj8CcYjm8rgkB8z8YP995YXSHGzfjWemLbcH",
  "key16": "2gVTQF85BcH9Pm6NyGbkqQzaF6JtniDNXugRqGuv6F3Qjoxo9qVzYXnmykSjeo7xFTYNGj96wt5QTCT1j6qhwuRj",
  "key17": "JqaBcZeu59ZXYUBmZayDpWtQ61AwESW7nxRznDqCojALe9f6tZDAtrYNmKdcqXN3ZG7ejyzNqSMmAVR632zkBCp",
  "key18": "433fiuC8qjpCAo8WXz8XaRcdrxUBdd4fDqanVif3fcF9aYnBskzEcL3uK6DvRJWra6syPqF3QE1Bo1i3mef2yTDy",
  "key19": "YwAxWEdZrDrWBJsfZtcRce2mGMyxCfejk4koCLEPu1ft1LsfqFyg4JnDeoEKtVD286Sx6qM98jbctmuCPE9uXoT",
  "key20": "5fUPwT9uEwy1rm3yzJjZjYC51C7MWJDfWbyLkdHASFg1bMt693jfeoayymDRzcVzTRwG7tBKb2UKnMBrJUZ3GiM3",
  "key21": "5b7DvpuzRSd8U2DHs7aNTmr2mGWLxgSBjMxHc8dqisDb1UkFBx7YArc1NAj3na4NVML7DwuyMtMnCERWmnV3e4Y3",
  "key22": "FMxHbHN89L6kNmi2vmmxvGwxmU6Z97Km2mbRmxJDKRrrpoqAEfe7qtY4nFXmTrSd3jU5dJDPsm7fd3knyjwTo3r",
  "key23": "3hznHKuq6oVTEjMExTdygQVAUbPmYGui2cwTg8t6PJcVST1GmJ5aQMzq15E64KqN61pAg2ET7219624JfgTBcpvT",
  "key24": "397xEARvHXTmisUHhJkXQDu5esrUiBVFczzN3mALLCVdbHjyfDafWSyEzWPsCVGc3oUQhDUxfuD9kruUAm5foa1",
  "key25": "3YaF3CT6Wwm2mVqbrqyN282GkYZuK6TrDjzVa3HMSwEdYhFP6AAy43PrMa7snSAGgyYuoBLXVhGm5aZsVAR57uwr",
  "key26": "4HyCxLwQPZt7ZVjP1n26pmVHWFJRBUSgQrD2nUuqD2PSYMFCwt231RZTdZwcB2FEXyNVM3fqW9u63MXGtKY3nKUM",
  "key27": "3s8fHL6dUjfoxsvMHQQtBgu1WesGvcR8uKym3MrTcwNZe7n15wxAwTTcp4AuK1ivgoMTynG9zXPZSzv9MEUdyyZv",
  "key28": "3jArQaTQQkokMxNmxaAgHLZtb7mPvx93r5rZ1pq54nDfzxvShWxnAHQRZ2ZpYd5BWKp6bwJ7VVaeof1fM6wMVzzi",
  "key29": "4iaF57qGe6hNqDu2ZQrBxQcdCu63uVUMZbHz1UdJvQNiAxR2xXie6Y75hWoXrtzoZYYT5ky7LAe6kCffMpd8tLmb",
  "key30": "2jUbLVEu2MJ12fSfPjwRnWEh4rDWV1LT1hsFinnpfBAquRqdju6aVTYd5hD1koMVEASNMVLM7CXfrFqizBzx9Bpo",
  "key31": "XVoa16CdxtpL2u8to9XyiUyBVmmr2RnfAv5bgSwj1xYPqeMia6btd87PsdqTwGr33MMypipcEaE5RmpAHbtiQLz",
  "key32": "4udybSNZP9rUnwW6M3fi2oCNgph6JDen1KnU8fWBkwoiv1ZD5dRschXyEEQ3GGdLKeuUK52LHFfcRzTxfUpgKFjZ",
  "key33": "2yxFXL49NAdTWUryZpBSj7ZJjeCwLZkhbFWphabueTxmEu8DCm2a7A7aUGWMcfQ4QiU5H93GjmYodR6T2pMeFSKa",
  "key34": "4DUccVNxmzTnNJeKxK6AMWxeKEGETRUx9fcpSDJ18cqmi91rXvxzwbPG1o49DkaHQsFVW2foqZfUbTnqC6Zkcj95",
  "key35": "5PyK3hgqdvjZFKCNMdbbcssEcRdDwbY9R7PiESFWkBoachS34G4z3tAs2tMxdi9g9GS2BUvWCFSJzL1dWTJTCYQ5"
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
