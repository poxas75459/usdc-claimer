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
    "5sjJMu7n94WduZrXRh1Kb3KQoGDc92K7NFTLyeyoGiTtrjoNWkHyvgcpJpU3XV858aeRhyckUReW1LqoivWVFBya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHLQxk8KwtLFpwtExK75Snvc2NKwmVRJ4rKqoGLBXExUXSoTBoycb8UyG2Ykhdv2HhbcXSkSGwV6E7CkM5KrW2Q",
  "key1": "3jkxv3LjAx4btKZfyWvjwa3LuH46odGZX3r6UxiHKPMdJJqJ9La7AMGvBa1Ga6gTTHHW8kEtd2rBDoLX15c6sZKZ",
  "key2": "Seycs3CdiXJbS8EjEeMzokqkPe3A1JA7bJg5VdQjoxHv4B84KWJZPCYu8Z1BRXZ17AmtggBZD1AtEcDQ8XBm8dA",
  "key3": "2Fdg38d3KuxpapBQgSrBh9MC8sbUxTc3j9HLzXKik2zbAKiwU1xSBH1qaTnTq2jkfKann6rVGiRV8gmUZKBjCT85",
  "key4": "4fBzggBRRXq7DtPBrx8Bk6Qa3aMt42Bytq6CazrUA8w8jZTwQs1w4LfMYwRWrn6MeQjpXcSgosjxdfMemT4Zi7cQ",
  "key5": "5rmm6zPBsnKKfmAEJEYAEhZFS7q2hPXUzykZphSMxtyWn6bmgbp8tEKVbZEKmuudgtdsFjDbqTnrmYb63sUAMphh",
  "key6": "4W2nqQ5NuSZuHpy1GvPXZWEUAtuEmkLzrBa7j9snp9pzmcuMynP183NT9FgZQfYaFouWbnaKUQW9Gf1A884E1tXv",
  "key7": "5M7HxYzDco8UkKiS3TLX5AJEd5y4inTEgDfy4anPrJcLRxaCjdEXw3Eu8CkUHEYy3joP74YKVoFoCedzFoowgfom",
  "key8": "44T3o46p2CtECrvbBnoNqtfCWa7CmkvPiQoNXQBkdRPRaDGGYQMb1r89k4Tt2NYpkrJH4gXdi5Wy4RuniLoheCXA",
  "key9": "51vNGDBPbvJCqP5NK7qdms253s7uX7j9yR5CHnZAKheMsstL7EyEMcBjBm43RMZVWWA87uCj3xZZh38fT4N6A2yq",
  "key10": "uBodG5hrtCVLJQ1QUuKCi36gtdXtDPbFT5i1fd57QQnrmAg3Er5weeSR4pGYFWwxAXRccrTT7mFzsLukFaEXbz9",
  "key11": "gRhHQpWicKyPgu9EdhqM1a8k6RDCWukRr2XfHANEQhfAqYkUhWASwpBjcP7wszQ5aHFnkjx3jNB1swtTW9Tn9CB",
  "key12": "5uExjRuhZG5WDrUXuNnC2osmdLTm9v6aHZYjoHkyzrBKPQEGwPCStRHaRmRG9Ro9soujF8eFrWs8k1bhouKHJ6dK",
  "key13": "5T42oTvpq1rH53PrrqcSMDgVCoiWtsWwATUg5seJt74gtzH7MREiSYpNu9hhDvrTnjtgh7MzELid6rms5ZwaRyuh",
  "key14": "YycVrrmNHi9yW5CkDwEAXGFeXYMvczdAp84ty3dwFTPL4cL6TnwoJXkdXva33n4jF8TJ3XZAsE6AE2D5SHAeQGG",
  "key15": "3dZE6yst6SdBaze58QiPFShtAZFdFMoBKcdQSXjuCmRaiCVa5Ru7PJaquskaevXLH4ZChHQ1kKbGudu5LDxZhKBU",
  "key16": "2FWL2izsvq8zTHbaH6LT3iKpYfTj9zbttLmHRr1BDiasZxKVZuom3eZDpoQyEYQxJkxDJg7XVsYSvZ46qzrcPN46",
  "key17": "3r61jHEhAPx5xqXnqKLpPnnW3vKKpEoqVomggi9CeHtJFr1Px7eHuJEWq2z6PzQVKBunwbfU3deJUcAMdX3pcg1s",
  "key18": "4df4Zye96W794kupypgSMLDCEdAbUtTiQTvGT4xb7gQPKGMAuf5p6cjfEQgZFGZZZXqNPLarqXGceSANXnMLu3Zk",
  "key19": "5ezuCT8vTwJJsbRAVhYWoMJ1HFqiJTvGPZBqFxZBBquEscgyzDqNsiS3v6ZfPGb4zgDA5DQP1NBhosde7RwreWVs",
  "key20": "vMaZz5aRUKng2gDbtMsEuJEj59aY2JtRVKaJBXYmp9Hutj3rLg4cjK83Sod8iBMgvRxK2bahwphsUQs6AKAtgY2",
  "key21": "22VimAztDz5K4nmGxmRfv21oQYbAET8TMkJqNKpYDNwhkXABvGsca8AEi93kEdjoxNuJFUwb5Gt5U1rvNM9UQiyQ",
  "key22": "3bVQUYxSXsJWd7X25pLSZBMBSzpWYviSSujUNPNfk9AAerPWJoRPL2AMCUvqcjdH4jqTGf5qFw5eZDLYrwfTMn4m",
  "key23": "2BtdC4pqNijKLmf9YU1d86x53wwzsQGsRToYPzk9PkNXUh4qDcc2AhoCYB67426F8At1BUDziM9o8bTgZA322YCR",
  "key24": "3je9YeBxC35HfKMC4zbHWKdCDLgfXZAfL5tH7rGw4iEx9gykptfzv7SnuNcX2AHwf8erYt6PEr39N8PjVxDyAQiW",
  "key25": "4uYkXGyAwkbP1Ehb4oYxtscfzxryBkKnts3zATDafhUMq4KKZBoFDYfLpJrNdxqpjeC7GchUdCxMiHowyJZ1jZGp",
  "key26": "2sDT7L39s7D4388a84jms1aovBM33tz5z4zn8CPmnPMYyFCot3DWUReoR4GSYUucbkvysXTbWzfDvjsL56qhKNtQ",
  "key27": "5unpEoZTDWXAF8dkvEMju24Z7rfZKcBY9NLcX9rvaGYWeSPiqBGyY3pAU8dU2dwZgGyhKsUzY3uDj5NWyTemGDsd",
  "key28": "4aaYLKeXWj9fEZjA3Wv7EATBLs1emj4J4e8Qfy1s7fYWvb5t7749jH76RTWfd8xkHFR9S83m8xb7jTFHfH2WrzyC",
  "key29": "4btCKiiKgvkVMLQudj1AeH5WTdeA6S4Gx95UdaJNGGpbcz1VktjBMJqASgspoDzpZ8UUHtB81WZ8Wm7kS12oG5YV",
  "key30": "2CvqxStrz2aXA6KCpa6WCsKoo4ee28DCn55wLY4TfieEspucUkLRNvFzE3e7XBJqJXoGXxg4REqFyDfD1zL4y3JS",
  "key31": "4Eago3MFdGaEZKoCcVL5tgrQeeYgEuf9Ka2eoZLjf5fNqiJHWrUvrwyx2jb4Bgb383tJAeBiafRwgnzFhVAjeCPH",
  "key32": "5cy6WVT8tm9xFLnE9nCNfyFA1eFyCtd8x4qu2LgcdU2D7za8VyUGXwgC2vRkBbh37wH1oQGmPc9PuA7X2uYppRQ8",
  "key33": "4rEwg1LzQdfAccmPqjjfFohQDQxDAxcJoUGfNYxNtvL4BfWm4KVyHAZvA9BJQTB8xbkRvGRcY8RspvrJGxBidBSE",
  "key34": "4siBJhHGFrRhzFNBbmNt3x1Xfy3eB1ErJtureeQUwiS9kmKwQkAxLMHNDRiwfzfJttbcT1orUa7otWC1dfzk1WPt",
  "key35": "5bfxgNyvWmQRwfRiaWQSBubTSxyvVvTm6qrufGcQzmcrseQ9CM4pcGAfKbRzwNC3jBB6a7s3JH1FSnFLwdidqhKR",
  "key36": "5KWnbQukr1V282qNvf2hAXp5X3CsMTxtm6eDUDLRuBP9hitKX6UMyfKyZueCCczyf3vbm7epbg7fXaS4nhxMx5VD",
  "key37": "65rfCfVWnEqWDtHr6kSD4xq8CCYFb6J7bhPUTKq22a4tEJh7DpGavHnSNw3GFFeakQ11V8u2i4BwLtb2Yw8TyUeq",
  "key38": "5crrvZD92DrJd3cj7xde2REFh1iv8zPHDortpGcyVSvhPkNJQeExqEkuGd2fGPjCL4eQ26fpbaeLoT2rpvT5L7Kh",
  "key39": "5y8cyVXxS1oWmRSdzqkTAYGDCuRw1T8N4uu5tzRSjfWrMSYVP6fhfCKkwwBJEVhEpynLJbnuyBzxigdV8tQMP1Pv"
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
