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
    "4UmHZdjcKjfTKDMTDJmwepF6xvvCUkHeNK7rB53px6mNJSaRDY2zNJDpMUeFCaDeZ1nNXoLFXu9irQm9ECtwW9S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HH1KLYwfpeecT7FMGtg7jTY2us4sjotRNYZXAK6QuDr8KVhYewg328xjQmVwrsueZfMowYLsKcBwG7JLj5BwKnj",
  "key1": "uqHHqizxCWuBsGehjPKFLS2n7KK4DE7F8yaHtwGBUoxs5JkXVvBZW8RBrofbMGAp8T3YGThmMB8dbikHvhr1x37",
  "key2": "2ADjiQ46dYLNGZoBsWKSbDQRR39qN2GwmbYDxjkz4qBMzPtfaZsA2BLATqj8syb7rT3M61Fz4JboLPUgRAxFmUt6",
  "key3": "2z31Z5APYxvcZGL5QVsCCJvqjZbC4bePUk1eESnzVq9NSsUxsJkzJB2b1DgSBAUWPAmn1E7Wg3CSusqNTb1CkvLs",
  "key4": "56biZJ5UVMp16H8FLMirDZxxnMU7Lskuw4HLpkuYpLmZdz8LW5QXS7sFvryXPui2Xd3euVJHpw15MvjZRdsKFpC7",
  "key5": "4qgkb3nQpUq7Q7ASr3JbicqY8mDaEpHYyY9zBREuYgNXByi7djCbYLenZ6f8wPSUUVWPzBBm1hfKL3Mj764ywjNB",
  "key6": "65zn4E31ExM7VxV4cy92tDPB37wDd8DdTuwkXDXouvXr2dfR9xsDYzgBczWJDA6mSnT7JYNexaG5njJTNVRwYCg6",
  "key7": "2m3sMFLCdusmCs7VTuo55JNan7cANXNTtS3ReEzpnKkL5hKHQT6HvTc4Aq1yGWWFRJmvGKtWjUT5FDLGdoNEuZw5",
  "key8": "2xH8kjrEiaaYLmzJJJ2cdnhc4V7KDvds1AGXuRNKSyb8LYLhNY1HYAj39XPUC8BsMxPSvJyEi51tqowcxczNMNcP",
  "key9": "4sbLVvwFzvLme3xZEbYeQJcijfQodFcMfewroqxMXGpiAHFrTkXMNb4pZsTnpTKnxmWjs9THnX2cmBZPR4EfzVk",
  "key10": "PZ2aVRk1pThKhd8yAh45GMDhy568E4um6KeWpfHPiEouB7eLWWnQfKdAHgZ5FSQ3rGj9xgmyx5CqVKPnSsiWEg6",
  "key11": "5yvvnjkGN6YzGktVuXYGQqcnqfHjaH85XeYoCjrBX1R1QUSaBqFHrXREYqpHGZipsaAY1cDfwUykLG7BfGXaxF8G",
  "key12": "spvt2MvxRCTLE4LvA7yCo9BM8bJTZ4XBr2JMHzenCmtgXebeb7YhzY5bWV4hLxzGQkuP1EuFNhL83aDY3DxkZ8w",
  "key13": "4y4fhwuXRgKBXS7hmeua3Y9cKdGLTLkXFoxUpszk1h3Mop5HsLcdw2MUrACdqVHfdFSZfaeGUG2vzJCoHUT1oUq1",
  "key14": "3tnCkG8cnHXZT72tzy6BtzE67FAzcKRrMvmooBVphW4kKoUFnBzi67oc2der8mSckLqaqZ6Jh55ZToRxThGbpe7Y",
  "key15": "4jCMb6acA8iAuSnA6xVoZe4onbUzufR59HcuYTobNieiniw5TWf5DKLDF198xre4c4Fyo89YwPMPbeKoyd7k4qNF",
  "key16": "3RL3Kxh7HgFQFpPe2PnWB5crLaSvFHhpa6RqMQKhz5mi3eNi3ZRX7oaDEgnajdjaVv7AaAs1xe2cAysNE8u1QeUN",
  "key17": "5EH2X3xv7e6CjLY5ydgkoENNCXCsX5v399ejtyKSMwnJpfAEa3u1whG3zX5bTdfkEuz9z26c6qZmvkR4C5ZukB8j",
  "key18": "zuyfMPnFYSDHpsHQKKEM8xZpt9Ks9CTNThcjqfBfVnd6wA8SjfczgogrK6dZB59uv83FUN4jSz9FbH1UBUwu89i",
  "key19": "379fzKJGkMuCx58wsbh8eRo76v2R6UiUeEmMvVDyWDTHHkr9ToSonamjkXNXJZvboPdtoYcSLUQZjcrYHkC5tUR2",
  "key20": "5dK38mFizEPtUWTgPGb1x7aX4PT3Z9DcW3VTRB3Z8ovJDYWKoJ65fBP9xvSZTYioXGkScYJZE7xiTuRc3ThMySfx",
  "key21": "5zDwCrGTZwuBjkpfkx2fRzeMFoiJ8MTD7WDsdWMjPtuqNANffPpXMPWhu8Xr7AtdbU3draaU2jkJdCq8McRuApVw",
  "key22": "2JrEezQLNYaoQQM2GP5mE8o6JVQQKapN3mniFGLYi1DWhWkk73SgGkFBMqxxzRMam3y8Q4i6s1Ax7ac2xFNEVySB",
  "key23": "3g7a3rY5TsmyMQvwYDrnic2CVYj3ehN5uUTCCkuXUx8esxqJ6P4A16M5RK44HUWttyp3wvCL473sT2HL14uG1L6m",
  "key24": "29auQHivhRMrnhPMKMqp5qJnevo8xP7JUnuRZjdajVxBTdBZv8ZEbT6FSkgXCjpTA92ZznZtGBfYwBVfgHhRRR8K",
  "key25": "3o9z1cGLj6ZHDuCU7BAUxJ8QhsHiiUHJc2c9wgrVDuUL1XDhM1kGq4aKmyzZJWSkh8nr6CQq3cPUEPoBoqEvB2gB",
  "key26": "3bFRvME2eaFCtJf8E4pNM9XBFHRd5LNLYgaTLNWqFvQZoq1ZaEnwMC5NBhwqcYen2wXQYL3vysDZTZ56xNNjTTA2",
  "key27": "2C8GxGGHn8wRfzfrmLJGUaausHQy2gPDV7WJota2ghQyZDKwiTPxVLnsu8Fv7B5VNNrzFSd6dUyfWTUQYRrJHrj1",
  "key28": "2aT7CppStgG5ycnxyXo6PeKj4aNNRZHndEpCN3TZ75KUHLn6cq4Jukc4moA9P6wP6AUeEX8vKoefDxofErfNs3W6",
  "key29": "ecndyc3Kb6UuZZhVPzorfYP5F7uBYmRRg7xVVwyqD4ztZKKCV3ZAz68eFngj51uGrwuRjvDHsgMvSVFb3jsQfZ5",
  "key30": "5pMAQgGe8jCeNuB4tUT83CnzS9wwCpxqsWg7ytfwBtGuUoWYJ9CRYXnHbEsiLdfEpRPqnh1eaNnLzGuCVFVdj6m8",
  "key31": "QPiQarNRp3nrRyBWdvceGAfB7LVTa3yKJKvJ85bBfbc86xBLJPfcjWsooh4okNPS8Cxy9WqVo287JxtsDwrw4u9",
  "key32": "5Mq34FLCpHHhW3TKKJ7XrxFpau6JYooVRyQt6yMxXjrJjP6BNE7mT6UEBJYFaCx8GxA7EmUpAKdWA5sycVcHJuY6",
  "key33": "5rc77j31ary3ahFBGeQhqMVyB2zXfNMHkErLPyA3nPcQHAwieTLGNbUeSUQ6tJ9wV2VuVvLB8vJkbM2TQE6P7wjY",
  "key34": "3qWFSMvTRg5CsyAFAWV4K9k6xBVXWXz7SyPwuSTc2ZCnQGgna4zRwCySFcBYUUYV39osDvvS1h4RWyEEtFeuCzui",
  "key35": "4hSUomzKXw7fJzZk5KGZ1Mpbj3xmZctDkaZUPoCqU1H78Sy1V5QxYCVDDssQCNEaxHYaruKvdQ2yc8VGMpphwjmx"
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
