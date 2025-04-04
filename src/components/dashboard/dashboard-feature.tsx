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
    "3LxgSeQ9VCVS9sb49pUodVRBiQvrKD6eQf3kQXhNgUGVH7fZCg3iTh7ZHhn5MU9kkU6AquDZQNLorhvtATqKgwUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZnRN8f4DSytxHVHhLhEw5W7MhtGCCyg8qhyKhiJUdq55o8HtMav6XfjLwHgvSwS3gKQe8k5343iXq5QuqrtKXXa",
  "key1": "2YQWeBRAtzViz8j4fjZdWkRJV7grjXTGTL9gc1SDJJNuPKfqsvV27UgPPdZskyz99XQ4LVjTLCzkGzvVqKgAaCNe",
  "key2": "3iaKB9DM3eSsvBx8EB6J9m5rjAbcydhqxdNYhQDAr9eRAF3oxi4bX5ZGX1BXaUUkpnsdfJWb8XpmfLf7PHhvNhU",
  "key3": "5ia4H41PAcpyqBNSnXsUNinJNVWBmDg4EDD1MjN9NSQeH4ej6KtDBjW5M8V34VBSox4T7YG1WKTyrywMJ4ThA31M",
  "key4": "5ba1EZ3YjdstgorxBaqbhoat6F1yHDdfLQy127uyzrDFurHP5WPXNrFc6kC1XWgT177wFNNzqNhD79UZf24cK8iT",
  "key5": "3tQyjLhhgJWeNg5qC58b58XHpBAsvg3P8r2jna3YoArG12nwqN9jedr7eEYxWUfMrjFdo5s5914wLWLy5VhdKG91",
  "key6": "36kXP2kkhRz7AABdxHQFqsmpdRCdXSqb5vXNtPfdHV8gqPVQ8C9xVStDLtmZ1qV35odtZQETB9aBiT5w3hk5Fj9N",
  "key7": "48W6zNP4BygYVxt4ctFms2CxCmszCsCirWAQBaVMhmpydZKqXBuJfvNB9HAdyoBgcG6hKoT4mbkHjB2V3jX6THqA",
  "key8": "4oA8jUG7WafQEJRQiNom71nxnG1JZ8dnhMQHGrTWnm7F2QskqeuUgz2ht9g6JxUrCkhqWHrfhrFRUDPZQ22QGXb1",
  "key9": "2LCQaRDswCBiqpPKy5PjjCxzmHZsgumx1yFfjV42FgqSZvJ6cL9sMsLdYtgKTy65rU81rG83smuyKsnoGzfvEHg6",
  "key10": "5KuwbhWkTcNKyN2LEEvR3tg2gE8BqoqfEsuXQyV7c2wfyqNzh61sbMUxkfnNnUMk1xYKMEMXXBLUdZ7z9BxGNY92",
  "key11": "3ux2NsrtvkTcuEfhroNRge46D6227JLmu2THXZGapD4P56ZdP9sN9oErVeH4Co5gXRUYoEKverjmkVHDcDAEAhkS",
  "key12": "25TaJm5pHzUGq25ffDXkdYBNyJC1ZzVqhV5e7F4eQjRK3HSgaZTdmWyUFtBau7o2ERhfFtQwTDf2e1w5GUqUKmHK",
  "key13": "4E3U97iJK8byaqmv7LfG5kRRLxZXBRTHwKjGLJpuCEfBomL7sEQ47aZQBWgXEDHEo8oNGS9gnG7hVwyHpooo5pLP",
  "key14": "9MXheN7MTWBTgba6qjQ3TqqJik5QyqrUY2jPoysM2nXLWAzuHHXW6SxuiMjF3j2mYaPTSnbepA3Xy8CDmcrpUEG",
  "key15": "3qArXJDfc3wms5hBJ7rwT11dYgYP7A3NPa4pUb1mUewU98jmUHURkSoyr4tkaBRFrTUf3mbSorVA9RHbKK1677R6",
  "key16": "49ZKR674krqQw5sLkSxJMto7ZXcp461jxD5fWbJnHe2222dF7xzzLQLgWA6bCPFQoRaJ6KxDT6UFLMCbWfgHwJjC",
  "key17": "4oqsSVSxqZcv96o9H2Hgye4mgDayZmCpgJtsN755Gyaevj8LTk7F92wRmys9uuZQZjshfPvt2fRK5HzVrtubsHWg",
  "key18": "3KStapKQaV7Kv1zu3DxdrR6qc7Vx3sZ7Ng4g5tAmbrpQ7LwySA9e4y8scDfsdRFmRMEnky1JcuwGAM33EC7beDkr",
  "key19": "5bfhYRAeoSTffqcvSrv3s9LyKCtM6fnMCsLAqrbSYRtthYNNCanSX3Zerx6XzEnYP95kq7657zccTeytLatY59zv",
  "key20": "3FBbzMeNvGXoT5CCntsbAwoKNx5GCX3XkeEwJNA5tG4wjbduSiYf2rgP8ENidEFR8ZRxkFhm24zcLGqSoxETq19D",
  "key21": "32QekdQ9e5rmPevraYVYqoeM9kBnyBeQnXAXiPLSM8a3R6SyxwcwhLJwUf17qgFKWYCvAuCRfBQ9KAUeT9Ux2SXo",
  "key22": "2KTYPZ4xv3ovyHSoDRSxDD1XEP6811T3rRh25JYeUUzrQoXnMzUFR3k8mUPbt9J8vmYfuBsmemA1aPJYEkEbbgAL",
  "key23": "25YQysb8JfNLdAsNddgDeG9v8pmSs69usNf5y29nwkKd551GcKP7JBmKgPw56hkJWn9CRKbqzLDv5jJ3AVNbjTSB",
  "key24": "5nFoVmBQzoDBw2aXGDZ8zkgghmCJzwFQcR5RsdJfVKY7a5XpY9WTTyn7Ydg3qUZm6LEm7Xu8s1WGW3qrdjRRbqe2",
  "key25": "3xHLCEfrMM2nBSzE8sC8V2ZD3PxZUKHbTs5XqXoPzV5WVVVbGynGzsvwebxAXK4ngiRYJaicZ8pugPyR431pagtn",
  "key26": "64SDKRdgoPNBnqTbu1MPj59prDqPCQLCLT18yMRg4pX3q8Rz2HqGuXmGaVbt2fXimws9RgNKKpBQbPJ5a3SKKg6D",
  "key27": "41WsiyBqi4iTd3kRniES1Whuj43VGC5mWi7z26DrDCQQj51MyqGtu7YSsC3x7KgmsUzJsdFAd4cKYm2ZeXrsmTND",
  "key28": "5AG4PYXwgD5Ghv4f12iB1SuMh1rPdwz3M68BMPS1exnLbFmadN4bWAafQjGmLh9Dp7Q3HB1iTf5JzMHpSXfJMSdR",
  "key29": "4CRCxSH2YozgSNirFm1qsk32y3Ms4CvRWaoaZcRAGnKzUKTdhTWjKU9YMdDmS7NXC3y4jjEEJpsx5NMbZE1pdfSe",
  "key30": "3dEUcqtBrLyFEyU93iybSaVePEpBzpCUem2HnJgLE4utHsU18nSqKdezeP5CRrLTDpyuG2ux3w8W8hzVRhZkkEBt",
  "key31": "d3tzCPaSw4MF1rUvqF5QcB28MS7jREMZmhtU1f7N9pHWRFdXRiQMLHavtaVCE8gXc564Rf3EwcWyCNrKR3XqjA5",
  "key32": "5nsqQsJTPLmugenhPXYKYh9cpfgNwcstZNNKTQRpLzD8E6r8rvn6bXYZieBmUP2PjovLebD4irXDGYZgLQcwqD3x",
  "key33": "3WCRaTq9E8rY2N9eoBfJgQQnwHWezg2cubyGig7Xr5to3T2WhbeNQzVSZtXMAVYEfUMu9A53FRwJwvVhumqFzwGp"
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
