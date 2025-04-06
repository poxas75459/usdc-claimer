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
    "29g8cHdapc39jrbQCeWeefBoy9ViSbxpmYTh11ZzV8Zfibui6F4yaAwaMbPHyw25GdAgHgT6y8YVuuR4TwARqchD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNxP38pEti69PkPFavWDpp5BmfzPKEsFC7ELz2A3tS3ooEueFqWr9nGq8dhkafX7bjVc8iZHi7UY2CfS63kfThj",
  "key1": "4ZJFjrgbSTjuCyhBZ1DkdgqnSgmoPpVMYiy15qTPWCdFskDj9pWYUy4ZCLD67HERDpxVRtZg92cLCvwmPB89USsK",
  "key2": "4KsRgT2ZvsicUx1uybnFPukkWesCWDDYcQnPdJibEmJdLTVhv7Hv5Hch5UYdKHpCmv7RGapbJ3cRpUsXyTH1vEZN",
  "key3": "2yaCZ2xzUu62FbCfVHHmnEqNWBpaGhvvxVWK9Ch4pHSaih3PSLBdoKFSQs6VPs5vF2Gm1ZsAbtd7EKQw2JzB33Pc",
  "key4": "54fbkG9XYAjAYehd3qRNw6EVnLfnXyo1bos8RcAQYqciTUxUZAN8MFyEWeoyf2kwwHdrmhFw5Rk92a3W738qDTc7",
  "key5": "3bkJqScfqwM45bNrHcutM8h24DpKCnCu2EytKRF7g2etWtnba23YvVzAMBbGuRHVYv7YpTXW7qCCqkEL9oYVExxS",
  "key6": "5TKDZk5ptJA6jUGkU7J8CamJcjMrPR6GTBs5sANY1DRLBuP3nZi8Ybb4LqkFYhYkPidZziubkq6Hq75QV43UAFsY",
  "key7": "5R7ueMwvAg7WCmUo2qZbMgBUtbv8pRdvFkRLqZGDjkRdkGpvbtZABpSsCndFFo2299sVniqY6C3MtsQXcX39yAqL",
  "key8": "25UUSsPXfuLsN1p9waCDY4i4vANugUAjpiSQELB95z1oFxSc2A2MFALZFGq2XANyB93JKfP9UpoGSrFQ5YpCMxuG",
  "key9": "7BEXQkezowAkDurEib7knK8PtKGo8gWfFj8J5aLfD5kkPsXtJUdaMUE5eJLkpGDmVVGTHhZgY4NLNBokPFcNBB5",
  "key10": "2uj7sVbEVtzA2D2ca1Vj3DJ5afPC6N7dQjdtN1W9NSt8KHvmiFnymFxa42Dn5QWLteATqT9WcMRbxJ5RwwQooD3g",
  "key11": "49GHVTPJ3SzcH8a6k7JarMM788ZspWQmmT9rLaNSGTdAaRgHuMX1zV6HdH1PuXUd3WUypMmpkhEjzMoYSHh5owhD",
  "key12": "3pYWPR3boatkJfzKMzWcxE87dyeArCmVXE3WTFJ6syAPHVUtDFHPchY5Qab9rHqXZhJ19u6qw5siMcznt2pXxd8K",
  "key13": "2zKyANidQSXdUF5QVMYdkBdvQwiccHKQGSMKyZHRNhZNnxrHbiaHgdaPKc64VH9WPgT69euPfA68X8L2s52Sngyu",
  "key14": "5Fwg9tFXSvTN8J8U97xkW4ZDro4SBgQtKGuNyRpaaYZALWbVYqrus5AaQYjm1juFjPshHUSpXM8HSDSg2mkfySTV",
  "key15": "2ZF27cPvo2dXmaojeeuhvszReU4vpyPUj3q9h3MFfjn5fw1z8JgBNmeYe1zLh95jcg41Gxi6cZaV2Q19KGFk7N9R",
  "key16": "5dubfpskdkdTxC9RFvyTxS4xqDPUxvorTuhNQbZo6xt8QU7PWr363Ter9zgtnzDfRDNqHyoVC7Ug8jfBT6hXrZu2",
  "key17": "36L2eEJz4j3A2A7H3FH5CuN9k22FVw2BGkysKKTp48cDsCuxZ4kYqR6zh1hD6CqzXGC6t6RBhh7Ce6mXY2FxWRcj",
  "key18": "4HM4jzdWJXeXPThqTkV33ZXVo4YWT6BR3nmXXGErJpwzKpLpKLTnda4Lfby2ot5QsxEdT7Wz3osbg4KaYu1zua2k",
  "key19": "4DBs8auiKczmrRk9EaVz2st3EW5hG3p6AC9nhUZDY7aVzsgcQqc23K4pFn8Cct6kQgUTPJR2NeB3PSuUxVU82AaY",
  "key20": "4jUhm9pq1MfBc4J4WFBDB6SWE6A7MJC58fUj7JTzZCA1XEyYXuMNt2PV3syveN4iyZEG6buftMVa2Ae7oaLUbuK5",
  "key21": "41thgL4s8YZqajVz55HKpJ7iQT6wRB1XGvdftfviEk1HRy9dQ9buEohcpgY4FXJLjpPGbMpAxtXZ1TGH5DpWFfiW",
  "key22": "2eWkkB5JZbfp1nbqQdh4UPpiyXFTjV3bszd3XAu8id9TNVTXganhax6dGLHYuGSqjK6B4kJHLDubecxRFEFMCKU1",
  "key23": "3m9VFe3zwzTzPWAaQuSjYLeEyCMpqKrRPSZJKkAeuxBJEV6ieW4ZZctBrK4YBYU7SkGkZ5ZqAJBGENKsDop3bMCi",
  "key24": "99ttbE7JSifuw5JxowK45UCH8HbuNgH8iPrTJDitHxo7NYMsgQiCciZnbYTr2nHBo1xgZNsHCobX12hjQKXdjpq",
  "key25": "3nd1LD6M7LpKtFFt3CYfQo7hJrrhePAoyYwdQB4xPXEktfXppJ95mL1s1nvfHv9h5TuEAmRUrPh5ao8XST2tDnq7",
  "key26": "35W92X2nacrLFeJVtvniWLHxpcW9YQ3hVo5PnU9TkesCehdZybkzbttRBuU2pPt7cxE5TF1tGVP7fEUbx26qbvtS"
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
