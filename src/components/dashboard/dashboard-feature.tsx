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
    "2mJT2pg3y1N8RFuJZCt2Z2MD3izLZhNKoSmYMA71RJMzbFaHDFsUMdbvtXbjNbWaCiCYoLdQGeYiaoqB4QndxDyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWpsCGjCzX5GFCSBay1RqBG68MMsTHBUB6Vb3sHRVsREdK8BC454kTDLejGzrFCjmWQitwDFkazADqessWGH4je",
  "key1": "42Kej7zG7ww3ARuSmxDE1575LosUFHY7fc1WzcgxivarV8pcZyn57wAiY2Lq1ayMU9FRDVK4r59f94HknfegQ3Q4",
  "key2": "2sfiwgizp715YxYVCWh7Gm7rjAXc2crJiYtB8LY6pZPjvVU6kmFpwBRF3wYPGFTKWyziMQj8UKAHJbR1bnf6neAX",
  "key3": "67MRT6VLxWZRFvjcXHdumpFVBcPq8LzqAUPR9b3jm9umuYknsmJBT5V5Dqj82GZf8nxC4s5e2Xk6ciBWVfiKW1mv",
  "key4": "5F5UpDGSmM1HmetcT9HS3ef8kFjPYYpVpvHByAHxgMr3mr53f88JSzVTNMyrjNAn7wtDnZNGQsDp1GgHdHZyJcmw",
  "key5": "2pf5pYAgtTiXNJqgz8t5mz8s2xUgxSwErfEwxruG3VfM8xg4CpQufF1EQ87yd74DcYpvnukQfnCrZtqn5Gz737ev",
  "key6": "41kKbdXy19WJtcLG3RrJEVY3RQbWSCm3k6NPqMHZWFcqJ2oSiapa7VGyC9KmSX61o3rNfZpiwvpQJnueBXrN4XYs",
  "key7": "6S4xVPnJMwXJ7f5mN8K6TYYnrSh1D8UDe2pzZBziRo7TR55cGUqWjb7QCYJ2Kxo7psU6Txvtziv573cfW7e74Qq",
  "key8": "2vjoVLWAPUokBEziPe7oNLdCzm5kieLfvyhbLVdiJk3eDPzrvpgYfcB5X9V9o5t6Lukxyvvi4DJGDz5hn4xzbb3B",
  "key9": "2VUoYucmCenzvfVnJDEvfEMqaELpVkNZtsorWNKhbzfF6pdA646zqzwpgs4GgeTDFgcm6yV9B1nAJnWgSvNN7Aye",
  "key10": "zQ73aF2QLiqKLkKtpKVjk6xprn7jfqhdiQqvo4QzCAeJcX1NivxWvPqKCFd1f9kTpu4ezcWbDU3oA8HGR4pgkJa",
  "key11": "3TPk9PLYtYifbenUN6we8e49QDZ7gQWMPoAEEQp9PsoRzJvA8pA1aUEGvG7a1RWsCU2gyxsCcNb2pBgnqyT7EyGn",
  "key12": "Lk3T4yTRFJ8McvzXusyDoxFdSn6oYY76KJDLQTQyYAtWzbHLL8hjsTiBEfrvzWNKxGdTyuPj4gkit2CyiBnN6Rd",
  "key13": "roHEr5j221bSx2bEXiGRuhWX7E9QgkVUAAdN6ragWsHSsxTxQ91a8jduBuVUiYcj8GFhPEXXfiU2HazJgF6XTde",
  "key14": "2mZEvhxXuSZQNhVS2vxyE6jMipMK9yG6aaKzMgWBmuh8WWrssGHRtPwQoKemgXg39wRQTqWYqKaH5rVQNtyeMk1z",
  "key15": "qDNNrisXNdZ3y5FJKXLsamEo9yrxoWyoyoAZxbXAk3KXkk6HDnzVMYYyFacThetm54yhsH33fhiXSaR8VW5KnAo",
  "key16": "647Qc12eRjZRXVjiQyQaCX5n6Np71dj6aVpsHrUGv2WC4iBAD2GLGcRAMLvfSFP71RD18NiQ1dv6bz5WaE614edf",
  "key17": "qS4rmDN6K4dDCofj7NBcyrwkUwo8w7aAQw553vtKe9ELZq3KhFznGDXvBCwu5pq9fK9LSRmhreeCed4pg3U6SJv",
  "key18": "3TvGW5TVkEzEGAxMX1m256HTUVQaewXNZQBnieZfSeoM5tcrRC7Q3sxpEa6CS8VTXv4tmfLE3rk7aAJXskXCbYaj",
  "key19": "464bAV8GcJ1KWhCr2wjADm37Ua5tZsZF4Mt5SQc1susdHz2HFLLnfy7f6y98nVAArvU5EKkNaiosK1y5WAjohZVt",
  "key20": "3EmKiaopA48kdttQmGAwRQrW2qPFb2fiDTZwocKVyw3LTtiYNkqShdcWqiCen1BjMudF8eqMxzXpZfNGo7tmbBzV",
  "key21": "2iYTEq5qRb6qq4Jk6e8CuAQ3kyJkMvBPE7AVkFGdcWg13RkmpZAeDsuBzQjzpavJeGN7KBvExahqsohSBGYes9WC",
  "key22": "5wvZsbVyN734KvhyNJgP6wGDfkwAVwcKdwjVkttpjq6nfkVM7sw3dgN7hd3m4Ym8o4ESsZ4BNgLWSHoHw3PPDHg6",
  "key23": "cgJ1PE3e3HSzU8ireuvaQHse1wHVBAyyHPMZbJUteNzaWUSko8gxgizuGKkjz53moqfpjQYhYgjMQbJmqkrzU7F",
  "key24": "5syGRcKVAKdYTt1myxamSagHx7yMz1THTWY5VmkECemboodSJpYqsUNacUgF4Q8MdUkD2KFshu4BJLYpfGHWBUkr",
  "key25": "4TFSCtrJTvakW5s39MYvRpFpJcQbtLh4kW6eME1dZY9mdh9sWsx9oh1biKW1MwHgKNaWy1DqtEBuDEbDSBkKqQSE",
  "key26": "gkf9QQQhAchAVHiRqwB1sqEp3Cv69iT6aAVdBFuPnJ4suDuKZNrMcpH17qwqBPuuWHjzDKYn757aUFhtqFesXEZ",
  "key27": "snrNEvRqBGuYsHcCgME8Z2Xpa4kScuJpuX7EQbxr8zEVTUtXj6sAxgJTWCkfxW5be92Y97syB6WahpwpNMso1Mz",
  "key28": "4D61aAbD4hbPbztq2xAh8KV2Cmy5bF6D1QobFZU1ZqAtQ4pDXyePSN9zcXRNLiYM7NjbVMEpkQmxmVzvNQUeTkTM",
  "key29": "3hdM4bBMjUQbvjtykzBFfdrAh6L18E6UcjhTKVFF3XGWPP2x2JptDevCQLGj7pNEc45AvZg74PFsgcV2BVXdqxLo",
  "key30": "5sFty7fbDXySmCNENspkUMQvbDY4YAQ1VSD2GZ9B4XDw5Je5Tn1Z42VmG5BC7AWKicG66QXdzasjq3yVrPjaP4jh",
  "key31": "38eLsdv2rPmNGphwHtzeyDi7GXX85AAyMBYodW7yzPT257bc3otLKrQbRXUjUEoUVLiNoWWfHQUSzoW5BJmFBqWF",
  "key32": "57pd4RHg3GPYpLponWqBsLvtoCWhUVEwivAroCTQpasLrwphMYyqw9xW1ZTuCXShtwZkZ8oZ4rc9jqTkya9L1CuQ",
  "key33": "3Hej7J3TZsggYj2AvwEjt3UUiCG5BiV2eZft9NbH8owr1g7aeRitBEMQtMs4yGaQmbfede7W5UbcWjcV3A4UYcj1",
  "key34": "3iNJdPtiLVtFkAEahaSwRgsxX3R8gz1LCHsyrTCt5SvRjdhAk8EjMpZZWJNmGqqmJ6tQL99qDrC2VCYXNJ5wozPh",
  "key35": "JwnxFSvNvebwGQckaHDV1AaqAF9eUhneD2X2rZrWAZqh8mp8SdVpmTxzTQK8eHRVVoFdL5QekCea42MgaWgw2T3",
  "key36": "3piaRTBybQwAjVwMtxAn9LqYUrEaFs3pPQ3CsrhWPki3AB1CSr6vsgDWAbUNyPNXzRmtWuhAYtVKcGKqgfoRZMUQ",
  "key37": "3nD8qUCypAS7LfkZ6NSwPWhxqZdHq721MWTnyKX9M9Yfhc75Jem1mQEftjneLNEq6cgt67QE4cTksZgpBABxr6af",
  "key38": "3eaX1SimVmkBTzQRdJhwSukjgduxLxb4mtofvDh5Vr5pqhHMWir7nFyT6vjk2uxyXQy7mke37pfPBDXxkBeFjAMd",
  "key39": "5wBJBCQnCUYQfRSsABihPe19Ee5ts2ThgHv2HGKjVwY9jZLjvxvfqpjF3pzBKNDJtiUqSpJkZbMWT7xtqc6WiyS1",
  "key40": "2j9ngaKMxr5YHtTFBPzABjc9dCiZDHcYm8Nrarsq4JhfaJ5aPecx4BKBmJWafUDUkAtaNW2TpbMJk3hFeYHvxPJ7"
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
