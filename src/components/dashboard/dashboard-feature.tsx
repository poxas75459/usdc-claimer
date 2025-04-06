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
    "5D3XGqCxAwx3269vv7n8gHiXkaR4LjEqdkVM3ugxG982UHc2Jp9GVeRrJoNjkKUH7QMgEqk7HoLEMGmxdDveGT3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pALwmZouyWmP91bEqVwcpgriBR5dupp8vBPrZWE3QM1AqaDpqi8E4UP5i6DTTemwai4bL5J4eiK9uysV16GyQLr",
  "key1": "5KxRfZgpotW5XPsABTJR3VoSNMCrBXW2SusUpBzruQDT3NLndEnNbWtiFW4bCsEkuWWTw5s6esUb4vcaDSycBfcZ",
  "key2": "APaAUoioo4YwToYQihgnAcbHku4nSybQXRNHyyCC7zky5nsuPRBwThyMYBAFuXQt9BxPXkN2t9b67dioP71iBpm",
  "key3": "5NYv89P7PBphXH3huVduouXuJ7jd6u7ZSpjPUMujXZXmpztmh7LnynmLdGNtusdkX4MUTxkzkQsGrhag4WwFc8iz",
  "key4": "67ft6GmWDN4GNuMdQeRv6ERxHMa4QMwXwvq5CgehsXGSxYUoHxoFGPutPdgJvFSewQA9zeDszzYmaNaAYWYXsmgH",
  "key5": "3f5C59xzCu9boAMxEtME1FWyU6xom7DwpMXeYbRyMJ68iVZ93sQ7NuSAkr1eYzoLTZwe9gP8x7gxFs9hyUPnHKc8",
  "key6": "128pt2tfHUScmXNRGWnjMNLKqVX8mZ88vXMJm6eeuZjhbYBAamJ72wW1QNy1Rd4jz4DWRfcMr7nFwNmt3zuy7o1T",
  "key7": "4RjAJD85sY4KmKHDuVvPpWyExapaBB91mQXmkBUB9jSbjbiXjJuyXWuQy8qXT77sbymgEfpeFNmprKBgbW6J8AYo",
  "key8": "2HiudzW1roi1ysKqrZvTxnCWr6ZsYBWaXkdhrMBbBRutD8FLzQnv4ntBXnST2Z6nLBKEEr8cHTMYNdAVZE8HWDXz",
  "key9": "2oVikCyxYt2ysE6jMA8QG5pbZMhTeTz1Rh9A7jVn9eVBkkDBR3xNKAmi3VBUeb2JMAQdPTCxGZaYRzK1UpaCPzU",
  "key10": "3UuJyuQS4dGaU1gAbNy7ACaHY9RGCb27bw6sygTQywnaQmqicTqss7jJ8LNYY86BSddPYDtMEshzmTTsW7KR3szW",
  "key11": "2J1VxEsjJVKhLEWLKZ8CqWzfRBdU7atiJyHQfwEuXHjxNxXwxAopw4GqGZrGg65p4YUsUqLUFH43pd9pdEUErYrD",
  "key12": "5LuxR7GBLZvpLDQJpt7YgjPAZTZjWzYYMtWu9pAyLXKHJ1g8rBNpGWPuJy9S3Lhx1i1q4x1B9S5kSbx878pXS7oU",
  "key13": "2TafyK89UDg4HBxi1dDxEAw3ezAtkCQP7sWKAHU5539Sp6CndcWP45Xqe5ioTvD5b3FehbWEM2SYptxtvhEhZdY2",
  "key14": "243RUUC6ULbxVkMXCMpoSKNwi2GUrYXtqRzXhszY175wBiAcdD4cowS4SX5wU6BEYTym474CD8AramjDjFezTDwT",
  "key15": "3Ej4zuN5Yy9o5yFbaqsbGCFCuzhd9BBvXJ2gn8VeyvMuGScDqaNrxJrbTFaBELFdZjZt7sAkNsj4fb8jeeGTinWm",
  "key16": "owB3JLzRDDPaeTdVUotqckFfhqAKXcEr3HuwbvrJXsyAwjUZo2fGheDr6993Xqf2Ce8CN6Vkd3mhgQJguVbfbB6",
  "key17": "35eZMXDuhRK4HiMxiLmfX2YY2t5cRWXEsN3Cpo9sKx95gZzMsCfcd1PM3NKgbxLNXU2H9DkGtLu5JqtUQkTgXRGS",
  "key18": "5U6cegqQDW3cji2WUpfqnuq7hBgX7H9iVizdxtFwDhVaEVbH6ZQscPVvZmNvRYLMxthqsYinnLuDAFtPX5muGmFz",
  "key19": "5d7e9Jt2kYEwFEqpSDqMx4fVHBo79EQ7GAcMH8ccEnuZK2tKfSGYnhbWBhSjz6F3PRqVuY63EGfzkLEsSLKNQCfG",
  "key20": "4JCq3usEqdKE63cLFjfeS4X1M6fwciNaV358odgeRRswFWTbye2rYvCmQ13ogpJaiBLxCgeoSin1JXndTGrftdSW",
  "key21": "4hsivQ93VLDG8iN6krGGx58tQy8Z9qS7ZHSAGDjRoFLFtbWRUD3umrNPwzRh6eGfPE8y2MZJarXDAXhq7jDkD3yL",
  "key22": "5DWAifFoW8jBL1gFhjSa8eUnQrxonwRsDHEDzdM3bDc3MXsubAtdxQfpztUKpfbMPM6WPqWtMpgumm8tVQYcJFcd",
  "key23": "3vEH6t8xKLknxVYQkMh9HzvotTRMfvB2Mj1muArpngUKpcZJCas1o5t459VhCKnSAjrBgYNEy8mWyXxieEtq45bk",
  "key24": "2HyDaVobhVDcKx59KrtYphF3xPMbdKAeLeAH8KbA7SsfG2Y6AbJSsBe4ZQJ5USL8yW5MuztupFRMi1CQkXhdZStt",
  "key25": "5rQC33Tj7Ea3vEtdUnjmkQLL6YFYTp8JqPmhnKNyYX1eqTchZvBqZYXrPoxvNa9aQHSTZM4bL1jMk6AdEnCs8o2F",
  "key26": "3svBtFHZFxqq3STSm6dxVh9C8RXrVUs2JS5Pg1Ej1agSxvY5sS5vzDUNeixifAtFt9iwHppuUkLhHRyT7Mj618w",
  "key27": "2NwFqN5guMQ7ssoUwoKG7GfaF3TcBs26FrUFpqZfRfwHCvH7pddrQimCLcr6Kkgt9FK1xMjJTbUsjT6eLgtVzziN",
  "key28": "ryEyZawkUBuremkKxnUGmFATMog46R2JBrY6U9qvGFgxH8U88C1YdMAfjEMrg7uJZgg8geYpTuYob8QDpKoAPpx",
  "key29": "3tNTa6U93QoPLdZKWtDauNMDFvdt5qeuANgv3fnzY3yVv8F1CyQGXAhoppdxFNfdPiQQFUT9GR5dkzoCyryTuRqC",
  "key30": "uobgDtHsDeoj49yXLmLb7o91nBrxF9Lh4A1iqZttauq9UPc61QGsGsJH8Meq24h7d5ZvN9BQ76BHE14wq6ipgMr",
  "key31": "33kwAH9j8AvNyGqnoofXciqCL9KuBCkHyRCwPonhxCtUULe7FWYmaxwqMPPRC6BHzQBniqECjGppySbWc43h1NwB",
  "key32": "1ppSR8HXtyxoGLTRpejP3mRSHPoxVsWxMFGaQaWUJoSq3FZ2bRzuVtezR71ag4Vzbd2DFDuDcQzrCZA35UT218r",
  "key33": "62ETnim7cDFkerQBt9xojf78kTjJ5h9oR9ptsUq5SMJ5G15vhx6X9WK6QMqGkKoMU9gZkY9cRzQ1vCCse1cQMXUc",
  "key34": "4RYDLaqhuVDamygg3umj432SpU8H79DUht7o9cHszYkmjoFxqrzRF9YxoTRhWpbMAYMVdaRfMQRDYskQ23uQawnb",
  "key35": "35tBqg7yx4588cLaKWtFCV11ewrrvhvNHtCsZFo5Rdsw6UgAWWYTo2NZTthf9trH1n8m2zmsSTZMorTLY3UjCYkp",
  "key36": "4zMDpFq6hpzBfZKXCawzXsT2ucSUibvceDNLVF9Kcfb4HRK9pagUYEas1kSGBK1xxbhZi2P17padYwr2UKoYSDjz",
  "key37": "37BJRtGhJNtRvyo588AAnL55G1tV2UnZeau6g4oivZ5EnU8yVtdEvFRhtou4gPdsPNcwvVWGu13ULoUbZS3pmsVA",
  "key38": "4ev8Dhab72yRGBKkXnYtjo5BUYhcCoxrYhCtKzuEXFKoRGKG893JAfZsQYF3Jyb1o7A4uw8BYEHBJRR4Bq4q5t8b",
  "key39": "4WtyrJ3FmiwPj8ykCzYthPnEXEoRfeF1j4t1CJ8gvrgE9Xz2gJcQi16mCoTHyagq5YDhM7wGNht3WQLca3AuuTbE"
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
