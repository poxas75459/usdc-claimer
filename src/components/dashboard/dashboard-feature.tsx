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
    "hR43Z7Tsm8Y5qtJgQpPvykHY9NuyKzK4T5sNVDLHzeVnHiPGSpj4LaN855NJLHtZa3VUYE63HbDYzyUeRVAdH9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQ9bbYES6vLxkKGDg5mrDWNcVznScweSQxjsjKf7ev3d9YTmVGK9rBiHj4k1NL9g3AiaVRxo4gm45nTKcqZqKDB",
  "key1": "4BMf4Z8qBboKC9N1Qhgxyq9qxdQooycqvcixPV5c7QvMEdS91eA1m7yJiGwm9o4Ug1Jtrd8PbwH3JVVBr6pXwBVf",
  "key2": "Pwv3dZpFxdfKaCqwhSuUKs8Mg8ftHZQEHRkdHChh414G1X9gchvCGexAjWYVwKaF5j4gR7tZdZ5ZAD2KQa3QrEe",
  "key3": "fTEpxzfb2cbWUKJhC1M31gkWNDydfNTLC8qznf2o9WTYW1TMLNWe6pZqsgLfcgiRkphzMM9RSj47vLacVfqtaAs",
  "key4": "3mVwQjRuAZkJiAh9FPaKi3fKuLs1vdYpNdfNbiaDAqJKLwWsL1ir1jVvscdUYNsSqR1aQBPbFQFnBL1vWtKDHkJf",
  "key5": "SkrhUyPDDVmDnkcubMbBXNCjnmby7HRGB6ZbxiARAN3VMp8G7MQr1tatsTkGmHPUbtDNjagZNh2DKJvJCFXGWWR",
  "key6": "3gchBWhShUETmjKNJFKYS9vDUGijZd2M1Cj1dM4wzqpgFFRFUKY7PVi1HefqccV3D1nW4B5xJnERQyK8fT3MBaVL",
  "key7": "4t3Y958pzqqwUxEHt3suHxUj45x8j9vJi8ArXg5YxuKUvL7j5HnpHDE61DZmcnu4aYDyKi5x9ygW1eW26RJmYf7Q",
  "key8": "pcS5Rfhjkr23CaQebboJ9yMzqYfW2nX4J891F9cy4yUeBNzpSUhw1GcBHpzRigvSh3W1d9skZg3z97u6L3qdjkZ",
  "key9": "4TL1xh1JAdEgjQmTGNmYJTjn9iRhziwAf5XNLn5FLZhfFc4hL1zab6HRT7xrNfEgVaNgJmU3cxtDUj6BhJXAtJJL",
  "key10": "opWSApnov6rwwJ3QV8sFyr1kQewVbvUzNiwFabEy9STYRpECaYv8Hx1nuucZMX8Zk9yGW3CjthcZKJvJSBLeHCV",
  "key11": "5zkqreebRyfTwXojw2Zxe3EvSrYqUAhJDfbnbkUoqGa88nu14j7ahU7HUkK4Bh1mTN5Gak2J8eH1PjRRPLgchy9",
  "key12": "4HTyLiSUAxzNt2E9EufC4iqnqmMLpG2afN6QnxtmdvyRP3dr4gLwUMWNgu32sS6CQFyvLCi5kPpQSi6cE3WAWEKL",
  "key13": "3LYKzVarPcmQdPfgTrbGfzxYA5vmDYHidNDM3VTMz67Sc7x4N1SN2KeTRJ11MRJMdeQvYa9N3FS17TG5Yw8diUkN",
  "key14": "EtuSRqdTw97hVmRnPuCzEo37TGxpzqqSW9XjABph2u9buGGYvJZpJT5sVYNFasXMPrtEWn33DaY1GMTTikrpvMu",
  "key15": "kKNh8SujyFY5GUdsX5RkVEZf19p4AMvjbiUxj577dUAmbKpXUkuv29QFtmsiKGpKZ8Bgf4jqXV2zXuDioaGzg4o",
  "key16": "66zriCRS3Y5L3TufK2y4kMZiLUACboEKziv2nNXTf2EKYPmHJCLPdagdDjsy6D36A26hKubn3PzpJu4MtzogCR1z",
  "key17": "2pcwLj62fi2xCgtffKXWVRviWpEWKBZRmJ1ABiRcGUKx6U8631SeT1xbk17iABgsXpuiVKzRropSswSNoTuedPof",
  "key18": "51yMEv1z5Ussd7oLKrPGVm11xB4sraxao3DsfPf9wvcGbCeBzr3MSp8PJDncFo3XLjGaTqXZigC9R98RGLQPVugr",
  "key19": "3vE9LqaJH3TLHBQLie8e4YVEQ3xos51eVJq2riTWfKBbSjY9sgynr6GpipKVnuc5LB3zhmcWpA6yW7wFfuLSinzP",
  "key20": "5YAU1g6scbYhCCwipt6Pp3MzrsRjPRZYH9a3HTPT83UdbTqmy33tGatxcxYrt2tyozqFQ9uzt6zFczM8yinR2RCQ",
  "key21": "5nZN1CriEDHeayqdaM4e58qPZTFLbsxDuFAjh3d6zugCxsFW12Et1yiLjBZbKjpce6DwFMA6dgUq7h85ZvMnGr9w",
  "key22": "bA4QELj7AQ9PpFyTRCj52y19Cb6ZdNndDHyHeUvyQgNwf1yg3BaisxPmR6FNEimUQ5Lf3wtokVc8sjepqBjmzZF",
  "key23": "4UoPJ9pN5tUUNz3JR6BhcNer8KZ9d7uQF9M63xEtiTdP168XkuUhNEXL1mtg4LecERnAeGZ6JYh9vggU19oAsVzB",
  "key24": "49kvxcdYNCf8KktXFABNU9ozgNKmpmHKZpN67h2cemFBvHYQz5paVVKyLE9CWR4tgU6oVWBY2PPrPrZYBa6PwFXC",
  "key25": "2aaep83yLW8aFeJcLtNZJ5rFrKPj4gJyVSepYi5EdYeU9cjAVJVeWou4RW8XbmEkNDvYzKvNB36J2fyLc47tHa2w",
  "key26": "3KaeKbZ3N3tVg3WfCfuNgakWGcL4du1hxxwGBqK264jA64Kp2MXXr6YWra32CEEw9qq3us8pQX4ri8GehJJSNcc5",
  "key27": "29BpeJhUHhTUToo1wG8B4NPV1hp3MHvFa4QfpZK3i4shKfmUYUuhPMKWWKzFdZyfEH7YmZsEhAdH9Zufo9hpSCzF",
  "key28": "4NeYs2m3N5YqvJkNB4xSVc5H2GhrGh4U3P89dpqQaZawKMfwpwyBZiDSpQ5fEfpSFQ6XSG2cwj8PKdHJuXiJaTDU",
  "key29": "3QHE7iWGvXsjS2vgyQbtrKK17EL8NfYdxjq631WoPYnim9QYvKBqoQgNkHXipH8sPDbTGx3Vwh4yj2Gn96j4u7uS",
  "key30": "5G4u6DgVY7jNRNmnSne2G31ibHHDKUA99kuDJ3eEoX3EsgPRmmhbFRDD6THKH1881EBUB5gryp1U6zmsRbKFceWD",
  "key31": "3PtG3TCztd2YP8GsKeEi7Yg26q4aRF7ZDVEmH7LQWKHyg2BXXYJv3VadzTPrpLN3U8TcmM6Cnw6AaJWm1dDoTMbz"
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
