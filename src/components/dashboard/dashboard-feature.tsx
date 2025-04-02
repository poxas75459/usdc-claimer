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
    "5iovbidL4r5QJARpVBFQT6DFBcaPV76TTUhMU9S3aj6GeQPbV3vJbgpsqyqHzQoUTcWW2DSqXwM6ZXXy3SBDtcxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBu8aXDy2Geqw9BvfC5qtdoPceeMCW76qLqXZCqSDqnQQ6hGPnRdtzgXTewueEf1XWqp9rscV6Hbf7HrboSHwbg",
  "key1": "4xg8iLYAtViAZryCY6C1H5AvdpKG27z723xTXcNZhLYe3hhsCckd9BbTYjw2qSAWdqNoDxx2Lh9aU5uuADtueNxf",
  "key2": "kLbFHnUERV92QEoXdYAgb7oyVR3BKGAbaccqF9W4r3B3KnWViJuiG85FzZvcHvfExLNEaTwmrxdUbUefPvxoEre",
  "key3": "4sY8brHbKmL4TTcSnsdvVMFEDj3xdenMysB2zyj6du18VAxaxyttiZAW97DXWrKTZhwqCMtQKKYbYzeELhwZQm34",
  "key4": "xYbu9fQR6YQjS1btVDr1HaKLdCvz3x3bwfZ48yR5VnWRbTfAQ7N1tiuewj4iMjEMDLbSW6B4tvSrGuw8sPgKVgV",
  "key5": "25DfUvWbVFUGZ6jQatThAYHhZaDFcDwjJYq8HeZyUHkNBWkvjGVANByPY1tFA86fqjQJrqot938FcRfX8xeiFnEU",
  "key6": "5tdXe6QRC1i2dAaeHCzafiDz1ZhKjgVKFcCF6yUy3dCFnK5H4MFz4Tcn8TuKjUUHfqhQ8aekMCiyFxBirA1JS6T9",
  "key7": "3AosdgFiART4PfCEeLfmnw3bDdKxv4seA6g54k1bTHkSmwmXhyYx9XUQQjqA5Uvo253VY6nTYPkH2USa5QU7F173",
  "key8": "3Fb9ridPfSQwE2tWdeM4PcZo3jtwCibMKXrKRUeynW9mmdHKdB3YYj3oNDuvbLsS1KGroaicTUWMxgWHkAXgLz1N",
  "key9": "4xnHxtWbmzjrZT7hsX535wQHejdR6SXARSrkJTfu5scN4NKoCsW1nEXwxXndgU9Q8Vftc4vbU7tf1cTJ1HrFAJuy",
  "key10": "4Wy7d431RBss5kBpTXAFBeUCb49LJrgfcjZofrcVXK6cmPvaZm58qjsVLfS1WPToRGikaMDAW1hr8x4j4wT8e8sC",
  "key11": "5b6vpa6CCnhkie18JCAm5w68xa7Dj5vL7TawXQf14vNMo4ht3KyVThZ3BjTmwBp3SqcG9cCwCkCTxs7oi3wUXvLy",
  "key12": "2ynzZAa5yzqQmuZW1rMxW4NPJbskjRf1cGZkhKFwwbP6BQUKR7BhZN7sfnp6MGusN2a5pHjfU2L4jArAYn2FLvGP",
  "key13": "4xaJbqvkKzX9iq6HKYBrz5VwPAaujZNz8dQnZoDNMDBVFwGpBrEZ8VQnuMJom5tXrQHDj8TA9eHtU3ZuDbUQYxwm",
  "key14": "3wkWvdPsNsMV3aj5KQwks7ZXQoBCsJWSNmmSGattdtGkTA9pBB3Fr1SVM2qZJ6HdcwMKraNF8XvHWsY3QrByuSzk",
  "key15": "a94WKgEpcpCk9RxSrjJVFgvqoTkUNmhEfDUVrSDtz3LLD5aNrY8f5kazgHqzZ6mAHqwMTKqRMCkDsubcfk6xgSu",
  "key16": "33YvRbW8pYBvwfFZjomp357bFPPBZnsvd2ZMfaNkqqvZcMQWG9FfmyrVmLnTFaNqEdUT79fmhq2zQYToSoS8wyh6",
  "key17": "4aWgr93wMjwi2RKayEDtykMgDB9aHLQkUvBymLXWruFdBdUJA6v9zqZsA3JDBADsBunx2kepsAUz5zF7NUaQiEHv",
  "key18": "4AZ3nPXixrZHRJxADbLfD2YDD5sZLheyNPifuUEABpHn8fKejyfNvdxoG51iKKtFQTC1MpkVCivmAWNDvHbpkBpV",
  "key19": "38tKnKniV6xzX3vbugTr338GEZGwNw11yrbNkLim4iyS4cvciEA4uHpMEJzMPk8HmjTuxiesV9vWavEchQFJiLGY",
  "key20": "yg79A5L1kiqaojZERtghoKZYCPqDjhj7sF6ba6NAUJjxBCknwo6dyePNjqDYz3Y4PHW6jf8XJAzZd97xpDAnoBW",
  "key21": "3v8SRzADCG1nMcGfe6iaNtQ2wBhC9fEHbzfTAvgpZEZTnBMb5yW5vPArSXqDH3orqbhbRS3TscEFvemc8ek7gwYP",
  "key22": "2715QDL5AhqTz97tAfeZ45QsWyxXk3hrwsjXDcTaQWP2FNfUCikXr1yy8wbtLUMdyU9JkZQvo4ZofEtSPRR8gNso",
  "key23": "35oMJMXGtuThua9LUkW1wGRnwg1b9Ns1VQkvri7QWQK2SjGNiwgSWb3hr9LbkoA8rYcbwLxiapZe6StefhXT3uKT",
  "key24": "2EyXfXPGD75NPZZtVcrdtPaK9FXjp24HGqZxuc75QhodeJdAYWzVheanBPYJ1tPYdMxpu3Fqbwn9q31MxkLosTvL",
  "key25": "gCn2cgAQBc93UoCq7EZqcHWsFjqbyoRRD231ptFaNQyx7HctXryWDzyi3QzW3obBneK8wiJ4HiTaV7sDbhVLd16",
  "key26": "4DGyeC7eT7VqFhA5VtKWP4CtpKuUzLHtGMCj2Dgob26t7odt3SQ6BcXqase6Nz9MCbyjzFqgCR4zDGHiJDiz6msY",
  "key27": "UTbwqS5gEGtFFQ4qz5wuETJBuiJWbcFusdoe5aVkRo3ZGRPLWM6kVVcF3ZMTRSDtaKuPqNX8UNk9h7SSSpKoVTh",
  "key28": "ajSfQibTjsYASSLAvWR9dHSD8htxSpZT71m8orFnx87aM2jpgeKdkmQEcTDpBPeHeHYmZfCgaCeQhgdayGReFNw",
  "key29": "5FqeaWoE89qq5NNN2SSmLcYcFXvgLX9AXFCxUz5rdBNUPFDfj3sade6YCDGjACYYVxS6E1uptqj8mNgTy9Ymjyi6",
  "key30": "2G634SxUiGV36MVMFBbcWW7M6Hi2c7aUEX8hHwmrG4TYGpzxiH6cwHtUnvdJND2LgKKJYGQy2UAZzMmBTQRp6Q1",
  "key31": "zRhvdiSsasij7W1M4kHsfwCwruB9ADscY17T8kCsPYtaSJgrkRqnhujoWDz7mhiaHM4yQsM47xZK4D2SSZH3E51",
  "key32": "8mtLXSZybdx3EcQN67bu8ThXqLTTXJoVbHMVHPkfDVAUFZ7Wsu4KjDSg6hvfvAabVG2mA4sujQeN8sKrkCTdVvA",
  "key33": "5xHoQ8VoCSQ9PtqAsvTVQu2AH9Yaqz3emg9dg7hEQcE2eEor2nyoDfmsduFtLoRXDJUHmCyCsVq2YxSHAdEnFNCA",
  "key34": "4dSXSxiWsqsG1dDusBX95XCJU4DDpbzE6F7E26FSzgo1v9hhvcHLJMYLnnbKsSX8dDcQqtxeegg2XfHeBGQVBuxz",
  "key35": "42ApDhdE873yivQXyNH68GJmAtFr57X93xro4toUXdrfzwghy7FVbzfWb7DJUhCr1QxxEBBWg1qzJyex5or63G7N",
  "key36": "8UYy8xZE8h89D6rEudhJSHQ87etJfuBhDtauPVs6bbqd1fMYcN6g8ZRC68rSjKyLUEooBBoHSJrSJ4WZGW5SMDw",
  "key37": "ApY3YANFZWsg2NqGNoRvCBYiozAYtBsToHswtKYLPqAcD5WmcW4naFEXctkxAgjcUHYqxoj9whco1iH8yuAwLcQ",
  "key38": "4Lj7XYPVqJk6q7ycm76T9UFCDcQKa2MkPh16USizVhyJt251wdWUc9NvM3tPm6TA4aJqVHFvs3cK1R7rr7TAouR7"
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
