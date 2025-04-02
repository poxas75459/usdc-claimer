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
    "2YQuyRn7k5nv1mgCveNkw5B5T5GJXyTVAw5ZLa3firXWwPD9D2Fh1ZyZL9qGCnSUne8CKdEN44uvMKzLrXawe636"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNPX9ZyAxvQwz4sY8E1kaG9ctT1n7gVXMvrdQnJDWfqG6cM7FLqbbrKh5AaNMByWcmGzzqpLstsoC4oZmLmJNPV",
  "key1": "27XWfzgmoU1bALxC13qJKRtjheBrqCuyyUEKopJver8Ag6MHyLhAeYkYogCijqUuXRJ1y9R419mC8pUtL5JJN4sw",
  "key2": "3Uwhyx9JZ49mUGwdsrUxhfhUbPjntetabdzSihTyGwH4EeSGC9MqHqr3yJzynhvWr2thEEUkHaqN6M7hThYtqRW",
  "key3": "hH2Ax5hTCCABeKGUwGPXpV8ayeaebsBcmXvepeF65QXFc5krqe4dmS2RVBLoepHQEwifepmWsqkeAWxABpm87Z3",
  "key4": "5Zcfck6GgzrNVqrfgeZ64nVBu6EQYMYZu5Kk4GwY1usysdmLFWnqQxAf4qumcRMbyx9oypqCJdEuHhg5s8yNjYpx",
  "key5": "2VPLxzyDAXfwsyaJbrRnQ9snc88JiMpK5PfHutPJuo2hbtpmpAiSUQLJMj4oN2hREQ63vYWGNtgstUfQ14mAGCc5",
  "key6": "2YTmdE1AJ3cWad7ia2Dyu9SomqhzHeeTLXT1BvovE12jsXdAqGspPg1TqFtzbK3XaMpXhGrFyTwn4PPfXRprEgHH",
  "key7": "29eB7px639NP64oXHMCo8u5fYYyKSU55oRNWqHRrfQnfmCFKhyTrpDcMP4bf6kNCEEzM51jiP8erQecHwn1M3oAg",
  "key8": "cqYdXqT2M2wdvSt8UTqcgk2XnEjqbDY8AfJxJseiEBLkJidwt2czfi1YK3t9ubWvqFPL9k9bsHLX6WH5dLGa796",
  "key9": "u9ecm5anF3JRFwyNxgWNzfznSNbVMLYmXZ9jW9UAvGEfJVZTGjaME8cTfhtfYHU74Mn6Y4DjnnrHYjEEyCxmp8A",
  "key10": "2AUi6jd2zebwHKeTWVG5a6R3nwMyQcBxBjjS97JXWkhVxJnGqWrvwf5mGovkzVxtbMHRtXx4pHPHLgeTLRS7ASza",
  "key11": "4VQg4wp2LrGFopHe89Bg792XfVP7d38G25kWaALNirn1vGVV9JYm4miom1kUXhuDuwcT94vKpLwD9A5tSCv7rwLC",
  "key12": "5MDW8cM3mDCq3Aq288vvoAuuz8tuCEVQNUop5CowWf85jLMVjyfyQn4cWS2sGwQbMrjq8yXMkByyymRrMUXZZutw",
  "key13": "3MM6bhFQt6Ao8Dr2WoCPtbaL3VfWJZ226puznbrjZw6m8EvkxQ24TxbGmJmuJk2Bhv1ojA5bXCvKfyH1WgqWEQyD",
  "key14": "2FcothUcgMEcZ2aCUPDVW4rVHMXH2YDhL1xMYtrk3SJuQakChDV6vxp9aDj3sg8Wt2qtVWJu81zWanwqtGeVCNAm",
  "key15": "43xgcWs3vpro9fQHJT5GCVoMa748y7iUBaoAyBc3PsobPWDEuXvLoX1C9dYyhQSFR4JPNAbn7mdg278yE3c9yL79",
  "key16": "2unPfb2h7RvN5nKNw7aSx2fzDGv1WK8egNUSXgnm9qG8dbkEaYquCzKqFrkZaSYXor3xVyz1YH7w1ZSmiEuSwa6N",
  "key17": "4UATbWeTKT5jzp1qzGwSacLFGzzWSrtgQChSVNu1XHAXNzjP982ws6ZcHia5LuFR85LXukM8UhbJf6RYYADkPc8r",
  "key18": "5AcZCDxYRNNHh5mom43v8cBEs1QxG6jbAq2FQsRtH3MnGfvfHer6drryv5aQfNGBBcDT4kU3tEqyHnVCzBJdwaB4",
  "key19": "2mizqzUShfUVELiatDzXtSELyJe4SqwAsnzpP84u9feFnwz4ssuwAv1WgXsAq6gCvgkxviNkawyPT7eYdcEa4e2t",
  "key20": "hLRybaLo4qLqH9grGGiK5kuRUFtLyxisywh3fy3ute3skhBUyWpRwufyvdWabonBd9owrbXqwjqg9C9ZMip6Boz",
  "key21": "49mH6p5YbkdiaNi8WPWSJnZu9ds7rpe3qP7UeYyRQhbfHqFqoG7PTNqZ2h9CAoiJHYemihMgzyWBhT8ZCAjoQvgA",
  "key22": "2cJmtArMeyg6SjVswL4yYNBU8sFA8LxLp7iFEPrJngYkvyjUX4dM6mXH6GV75YEt7HXY8uT7LTpARJhJAxwjCVMn",
  "key23": "tPRoLQoqqtYcnXGJFbjTGTb1yeaDADi7qTj84moEEgJBZkeCyzezXB7eBDwELYp6EFNQwZPSMJABmVWqsuJEtCw",
  "key24": "5ddvNfgmt2eeytEmHTouLf6NjEsfeo6RE5zqVd5kCbdofU3iSh6Jg5tpUmLn76Vwih6BxRaQavRSpZcFYMowKAuW",
  "key25": "5aTgHBxyTrnwr6JxCswPVdCvuPWGNLDxSGgfiaxWJKAw23GW99bhtUNafX16h7D1jU4wvmiKAbwC1pprAhJtkMj1",
  "key26": "2FT5yiDVhnb3t5Tv4DiFDgxoajb5nwv65ZEDb6ZmZbEAhhUGu5Y9Cq3sP261nCnVhAeCxtiGVNNEW67cV5hB69J5",
  "key27": "4aUZExYmHxNw7WjABgW4Quwrgv8WjF1JnT9n8Vh6sK8nKSzixP4ct4a9gggV97kKgzSL8DeREsLxUgNkFd6G7gYb",
  "key28": "phQS51tZ7K3gqZSLPsKwrx2MVF6piZcRmsd5NJcJvUAmvGxkA39n48sodRyHHqkwqPJ86pY9bMG4CKQDHEJYsN4",
  "key29": "4ohRBinCzfH2RGj278cu6TxLH6vLpDyCrcHx4P9tCDorZo9XgBCuXkM9f1FEisfSZVGKhqcCUUV84M8mVvWbqzVb",
  "key30": "51fDnJadbJvsCpiDig9gLgKr1zAhYMvSNaTBq4E6WYoncxgNEnwq96XgrkupbmcQ7jim2KLr9z4hY76tbtuSWhmZ",
  "key31": "jo3dkToMc9by5TTDDrCxDWCwJQByFvDQMRc1WVjt8psEy2AkPTuqp7xzxXQKnHp2jf9ZPmAxArK5uEbWQ5xPqM8",
  "key32": "3SNKCzMSnjxa48ZNkdpa6Zf1eXVQaeFDtQCKkQCHiyZxJn4EqL79pqL8XyFyn2xj1tyHpFYzYBGYWxRuRVdd6w2g",
  "key33": "3ywjDXQwXzgoUGyM7Ev2xQhjX83tXdVmJnmtNCURv7LTswxk9o3uJEfpbWSVnbHvLhhCFw4RC4PYJ7Ehc9gsukRd",
  "key34": "4qVK7VNZHw3L61MaemJELeo7ZcBY1EvkffFJB3Z9q6PjR9udH2fG3grLJMJVfmGwBUeZrScS8ixvgnk2dUkxbUVr",
  "key35": "4ZtUzAu7Pph3E7qbhJMcJYY1HSWaPVzq2DujaBPMcHvwNrUyRz2fLf2XzZR684qgCqSkwXjTw5412FXKeSspMV8b"
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
