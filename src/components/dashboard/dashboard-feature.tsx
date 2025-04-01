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
    "V7zLv5PzW4Gy6sQFHZ5p6RHioXz4p9uxxQgXxZtp919Q3AQVZRc3yfV3TBdxGHfUsUme5TZDSVEBp85XSw84cqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mf8k2o7bxtgULDBpZ5iW9mUjPshP2jMmfSY13o55sbnvpzFuKHWQuDPA2gJYBajmM7qte7Bop5zweXPj8xncbU",
  "key1": "qkkfYQS6VHoZXxbH3Z4dexVEadSkHLCPctGy4aRU2sqoiA46tLcyLTEWffn4WactZsjdnt39we85tamG8YaqMmX",
  "key2": "3RbMwCGa6XaQD5ocPHmPrdarWrstnxRKhEbwAvyyPeyTMzKdvUWXPoTkpEBoPVL65QQtv8pe5QYc3uHEXpiNFVUL",
  "key3": "3kfcsNBxL5mMT3i2qSmkFrfh7P6s2VwV8P1kRfC9XSj82LbEGwHTwq2QmhVan8yb6geUX7g2mecBCcmi71noFuqB",
  "key4": "uwtNrkjHrJamkpuwnQwhJEXKB8qTrxG7UETXpkx2nZGZEzwcdZsk8n5SD6GTZsrYTzAEcisobw2nokvrmcWUmK8",
  "key5": "5CTdSHvfoC1P3681FxgwRyXd7xJ7j7kiRzMnpBAWCSHppxymig54b4pTUyMTECvidpE1epTivxnygtsbMz2xWPqc",
  "key6": "SsJREUReuvFG45e96jA634eYdgoNiwAvYT5Nunoy42h7ArSWqytfH3QQWM48Qyx1mVp4oxQmgNmCmy12ZAS5CYm",
  "key7": "43WGgDooCdEdsC2ATWpJfRHm267NaooToZQW3DMxkckFnJNH9U1ZtAdgdrjsJvBTbttYxGQLo2EsGNQzoHGZv7D7",
  "key8": "2uRM2u9TVZyqQnnz9HAMG7nbrh1ab4HYKQxK781xuWAdW8JLQrmmAPL4zzcmcCCGruDYEyaNNetJVVCmzPoAoZ3F",
  "key9": "4HaQZBvG3nTpwWTcieEjdQfMk88nHVAxU6XDHNfUVoH623HFNWczKc25nX19UpiYEL81nLxvszuEgpdvms8xgtwa",
  "key10": "4okeQCAdaTgJY8oUoHdmdYjv1gRMZjG3gRkbxGANy7xiHFhSgU4xHyh8HPXhZN9n2G3gxcw4ZSUkxHZTH4QTqp4K",
  "key11": "31PtyBsWH9uCK8BGQZkKURpFP4q1Vp4CHEqjDaYR78ATbV931ATerQsU7Q3UVo8yeyxmVGx4F5yhJfd4qv7g1zGB",
  "key12": "43T8b1ntSTDh5TgyzxAZW6gKVp6C8NTzG59eb2vrYy7a7oNy9GMkLUfCWSt47WcQ2u1QEePMhBbpgBtbZ59eBtM6",
  "key13": "39faJs1FyCGyi5CKL7D2fn4UYaiVZySsqCzVGEx7m8BAuXqoiT1umzSwVGz4tWo5rHrxXPgMML8fyFPdiUf6Aw5x",
  "key14": "2eLfQRCKRcsuBxKRsdeKnQ6b3yJVVLRpnYxBBWNveLxK3FtcUHUqeQrCeoZadLtZyFMWNLRQkXmjF7UJhrfvwycE",
  "key15": "3voScvHd2Lk1CZirdxJCWFLFDovK9srnGmC3rvBAcCB95nRTFMRz1gJtGXfsUfW7GWvX1LUtkmmgbmVRaVKhsYF2",
  "key16": "2ZLrcpniLr2NTJ18pMKJhHEuknXCtTLVbQc1s3BtdgY8X7Hs4SHwbVf6akkRdTpGcrFBLojhSphFYyxSf2mRqzff",
  "key17": "DNesUBQKDELLGuRDBybDB3pSzs9xiuqQF8ZLgr4EDcNna5VNSQa7iTgvNSXb3k46L87oChMwtjH1gPU6e4kfkCe",
  "key18": "2rP5RC41ex3VMSTvAxT2i5Ext7KEVssWRrZgjpo8zbaPex38Vr2SM3T39uHsFjDtDvs6ioffY45m4t4KKWu3gEo6",
  "key19": "4g6K5wTRd1GqzwkMAATQc8e1rWAk6rrsUscMz1vA2vDQtPbT4fj79RbprzsgnEQXc1CbMEwQD9nqxnPYrS63bFf8",
  "key20": "3HNvTVX4e8MHtMU3KzeqNbFztkmXZdYZBqtdLbVS5DeawGQ2qBjwrZrUMG3uUuKB4JCwWztCNXnaaDiCACFg15dX",
  "key21": "Heuxf8CQ9ySSetQWy7wQ2Mhus1QAyouYL3tWjtNv22XkmHtmV9squBnrqSPgeSeThEvoUouVsAVxEyRWTZZPmB9",
  "key22": "5S9FAHEXmsEem5UvUpHvHJ1y5V2ANz2ombcNGhAfK6vyMSKtgZ2Yn6UCDaNRVw5Lx6ddFfX4GpeoaUhentBnFbZF",
  "key23": "47wW1mKr7zyUHuxuS3mmc8pqcKGmGJFw7rYAx93bFGwA32BAHS9jVBEG3mbKKibCqcjWP4wov6HGwisQ9KyXF8tb",
  "key24": "26EpCU6rkcmebQm1kVk6dTVYSbvTdTTi5GyFov17dVg6f94Ma2Xnm2XJaq31pzyMT9RmwmC2VZ4a4RZetB1ZbqUC",
  "key25": "4hu9HgKfF7V54GsApWH4vDPecK3mHSGiqmtj3goYonvQJnkSeDQYz58PiqpqGZjDi4CQyP9QCpT8Ssm4oiDUxhLA",
  "key26": "5kMc3Y2ETUwSB4MuHQ1BouKxLp3P4TN29HecoPu8V85s3QMXxkLzFJifiCpuxx1xAs2mXirA8yPgq3mChZcTbZ6Z",
  "key27": "26BxXqHLzNG2ubsnhgTEnpgt372BmcU6T9inifUKL5dC3DFDSAC5LidTxHsWypaLeZWhkSGdtAwnfFDRw27FXYdn",
  "key28": "38uVydRozDr2H1EmaJATuFYJswAodgmM7cixn7q9om5RuwpncMk8cowrZnbKHq5byYEosjW262rLWxgv4cCfTNQ9",
  "key29": "2o4LxDkYFkTfjLuurMg5qysM7tZBPaR8YibWfoNaqAexoLdVqr5vRKnpUQ5euS3gEu6RR2DKcpjQCWkz9X3kTi3Y",
  "key30": "47nukAxkyf1eene6mZBWBuRxdbMumroYNRe391ku9JpzaLDvAPoKvJLmDYDqxU3qQbfRNYCAAnkDhhMPw7kFneUo",
  "key31": "4PfpnntxfaU36HxAcqErZNNy9mCLyYXqFs93pELrBdAVDA5BqjtH1BJNesNtMXgnGS81464vJVLPTFucZFtLYHG8"
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
