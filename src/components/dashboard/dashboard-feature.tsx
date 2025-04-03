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
    "2kovQGVG6naSdUPWY3DMoQr9H65nPpgMFbBoLSKQeEGwYbpsMYmCB1Ho4afruU4H8MkVoE3sSsHJXvChSVnnFL3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLkhpB3oKfdpdZh319gNKkQmDqFzErYxxd6h5qrbKX1QofL9VH6RqsiUGzsBU7uNdA8tRiZTzoPNisqD6kZAZU2",
  "key1": "zdM6Hi5iJQLqxhSRrFDMqbJF8c9U2tfdxcuyeQRVnQTRwoQBVNy2S5jrCL17qmwpVZrUrD3bRCxsJYM5ZnMXgJS",
  "key2": "54MonaSCyoJXfdr95Ncx23ZXHJH7tXodSsNqJ4rGv2jJR8pdLcvWUusCja4FGL2pWckfrmnacZ7oABDsuZCw6jXT",
  "key3": "43o6jVHo8m8niTPLKQM8xdJnZA5hmNUGUznKqLq83cp1kgB1XKfrXKvK1imKvNiF8UTNefirkhjw7ayGS6ERXzvT",
  "key4": "63Z6495xqzX1HXnfNeUikEvfjh7WLnx4K3JbncCZjHnFKLbLVSnj1TRGLJBPMTULCM3Ym71NTKuZkXXDqddryZL4",
  "key5": "NemQ6T8MCfpGo7jGRz8q7uXDDX7vFFGuQXgL1No5X4vSyXYpQWLr4aYYo4C6mPQySua136xUtE9knQtVs9RMMDQ",
  "key6": "129gJby35zYWu5Txhcb56zJsvbNDFi5oQAL1yhBtwd932FYDjUR69e13fKhejyRFxdpF6X3CKhAdXfYR6ECfxxit",
  "key7": "3NPXZo7zKQURZRYWFZgEsuBt56P5JcVb2kfs1N5uYbGvCVS5cnNGDd4itvYrebiPaDNpQYGdNR7wCaYfHD6TJimw",
  "key8": "5zqWRwUeRPmdEvCrrEDcfGogn3kA6aJ79w2gvYqewLoKrCYRGj5CvJdLbXFfXJmMRiMEtxuRvp3yiMcqJBMzeH3C",
  "key9": "4nARWh4iidJqdqAqAsya6hzng75GGNFjhUpQu4ASZ858rtArJKngNfgSpinyfSgtKDvoE68fnFDAfMiwrdG6qPQf",
  "key10": "EQwdw9ut2ZrGh2N7vYBFRGmRYtKXojBM4nQS6usKD9WVhBtGRvkiiJgzS31MuR1DAwJCpVhhLtXrx5QnUn2v6ex",
  "key11": "56vVENpbaH6C4m6LCVVAEyXS6YMJSvhGGp2gVVXkzpQ1iatsd1rhvpd6etJVsbMxnUViuyqzRN31p7Bfmqtqfrqs",
  "key12": "3Lzk5uNspnLnKUCQsqpReYCevXoKSKRYF1sRe9A2Un4zCgPxruCd2jAk6yBKn1fCKQELxHheaBQVd6jcum8zFLer",
  "key13": "4fL6nKeXnpnXwewGgzKtosT2mDFr6GV4vhx9Yjs6j3di35HEPnFNBWTtJjXUakCkPS6xxuYKGaBYf61Wf5wsH6pe",
  "key14": "2rornJdwDwUi1nFGGdpBPimdBGGHqZAyzzKQuY35SBQG743MjFvWJvgExLFAc1A3kbpyWXNxfDaZ9Xg7YnMcc1Ga",
  "key15": "5BceSzJtbupTyNL278TqEQ6EeGV9zhEZgv3kbxZPqoAVCnzjcazjkEUZqw6yBSJ6VpfbEsjEDVHZ3ihQkXpGHVZA",
  "key16": "31u35dmiDKNnhph71Jwuicm16fvxnYWE3m8wGJ9g3HQDAtA9eiXoeMomDLwLMJ3bhqsprHrJ1SFYsjpDLkVgfBq1",
  "key17": "2huq7evrK7soVbC6Wk5CvFA2f4mvB3tMhW2udKjronkahvSbwcBPve26yfD5HMDbQXiceH78s2ZHavbBZ7yWEpox",
  "key18": "3y2m41R2TN1t8rRdaDR1X7UWBZUGH7SfHoZX647LRdYEc6owKN4LUEWyokbWTraGng4qdLvYDazmqwUWbdop76LP",
  "key19": "3EqZRPZsHX1F4bDebnwpq56weVyP216TktJozyBvM4c65eKeA3XVEWpd6tS5QRpXXXGP8mwUtajsZofck1UctPTk",
  "key20": "ayivn9yDCo4U3eW67yARoJ24fXKD41RxghvCogymMXzdu7JWkZkc1razqq9EJmXwiweWado1FWT819Cw2HXSKqD",
  "key21": "3FZ97NshZdqc9AgoiDDcxKUjuZzypq3DJk1CR2kqeh42UWfuDBLNaXz8Uj6fegKYNzfF3CQjVecaXNeKiCV2iSr",
  "key22": "aaaDwbosfPjBXcvaGnXeLSTCqwJHokbkE9YxBxfY5EizBhcCjv42k3cXKsF8bVb7uiS7S8dXaRaVjvxRTqYehEh",
  "key23": "5YH4Bi81BToJFYvtg6KhiqnR9gWUAuB27xCKsavaXUn38vpS3ehcbzzwtpsJJ1TFToM5cTbMfRK4FqHxcJNekgz3",
  "key24": "tMTuX9FV3cJQxzWZP2dAXnhMAQTpLwJrUo2WPyHSs1oQEhVTJes47XbSppyHm7otW7nz3nWMSn2Jevn7WULPvQc",
  "key25": "3GphdWdUDtUttGY4xL2uXyraVkCr9qarFCEFXSwJjfACRpaCWKq6BSV7NHKts6vWTu8Hn7gWKgR8BE9dC7s5QkCk",
  "key26": "4T9vxK6ePpR4USMJKGTZEevgaZyYyRfFQrUXTkzjeVTyEMKDYpixiSHzWYBjsv73JrkjjQxUbG3RT5Zay3vHu5NW",
  "key27": "2ZgqV7VwUjG1iAC6NTZWQxDsGhSptcDfaPf6WVCKgZX3ucGDjUHDEvXr9tjCw3LumAndtjUW5XvBjVkwT2Fye3mG",
  "key28": "C1kCScxeeejkg3UAZYDzQ1Rkg7iCzb8FrbwGtq8dfCxmLK3fC42iZyW3orW66STY9LgWVRWYxpjmnoAyAvUCyQF"
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
