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
    "5uZv4whbYBxfNE4KdvyLZQPbYdTKeu9FDdm8zdM4M8wBYs5EvMEPCT3XrR1cmQapsay8UaqKKiSS9s2xWyechrND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jicGQoLnwfD2DhM35Nhbhmgv2TKW7hCjz4hgfXVtpfErvRsQpTR47zcWeRzCrbriZ6DFToYW8SVUZ87B7AxhPZ7",
  "key1": "3AkjBu86k2xXRw5r1rZ45YrcAze6hGzJCNeht4Kovvp82YMYNSfmAufyXWprJaXyFAED7TccZwTp52PZoUSGnges",
  "key2": "jeUoyLQZK7aabmd2sNTh6b7NbhzfRj8tX238eD8tcLAdaGJ8fVgJQBVWeHJkJUzofoK4DcXU2SBgwLyRKNVdPKi",
  "key3": "2yCj5wBY3hcbvXbZvGSoAGLAQ84zJPQwfqmfyitpLF2PuZkyaRAn4uZne2mMSQPwj8dtNWjSrSJaLxYwBapTicvx",
  "key4": "4JryevupYfSFyUW5xJG1P7pySj8S1YPptt28iqtV2aa39JWxW4t2thXkL4HDqjiCVkwU33HUXfaryHhGMVbWB4Ck",
  "key5": "4xBt5c2j5GVdUSqXq9CUyB1NYFwZEsfXMHrhmifUdbEksnWqVasBr3J7QaFCLS8NsJ1F9M8CiEcTNszeDFmt5XsV",
  "key6": "4zL9eEmWfUmw8o6MWAf2hvEWaRDv4wXR7Xk4wsfkUPkfcTG2qGWohC9SC5rNH79T1ohQqAeskKxjaCN6BrbsdwYt",
  "key7": "4t8susGUbqfDJYp2TVA87BTsgEVN4tBUAYziXwpxjWHmN6gXj7GBHDiFc7ck2GBRpchxrpwx4XBJmKrA4AdMuZ16",
  "key8": "4K5g1rA2Byt1vdFAW75MQCWMD773vegFY2rEiZGT1XSeXt9HX8ZJur3CnSCb5RAu92nw8zPDo6XFpWyJ4Ncvijyp",
  "key9": "4Dra39Y1Xfhs1FqGfSTkwcVu1afUxPvULUcYURng8Zrp5f9fhtX7gBcMxi1JUMCnRRJFUNGzDQ9JoZWXF4RTP6ry",
  "key10": "5mBA9iLFveU9LdUKBnCmMp6hqfqa28AMBpLT67WYXc28Zaw6dUVKyWybavmKVS8xJ5EWbtLH59XhCsuu8RSVe2x8",
  "key11": "2enj3fM7xiQdTrTnEYmJ5nufKwiZEU4kYcw9HC19sxuxQnMkUieMJ9mLkaTbzmrTTmcAMv3RqtfC4TXb8mvsjipV",
  "key12": "2u93qh6Hhf5zUEEAT3oMvphQLF1sjt8T6KsjuQ7Afwd93PcvWCrBiJfRV12BtRj4pHo24aU3sEvynfqvG5kzybB6",
  "key13": "5zYK7spviPY2UmNiYrBs91aWaXJ8UUjPZ8zo8VkcdZSJ7aCNRQ2cmUqKYQVoSNy1Mmqy1QucKG2bNqjZq25zZ7pM",
  "key14": "2sR6K3YPj9vZJbK31xYd8PgzwnDbt7JEjatqfB4kFYYvjhjHGMLfdQ2opFXKiEMhDESn79NnM5mcuAMJNpYhxC8D",
  "key15": "giixjPRBBC6rxrtj6tuLdkhgg5FadqMmx5ygKbRcwfFH2EyoubxJdVAZFbnZwYsNEsFjD7s3bvRbWNG7SE9KbgP",
  "key16": "3RzA39xy5dBH7Sh2UrAngmdVuu56NvwjgeA6M9RY41cxAjm7DbqPAj3Swby1SJbmQHFkNTrASFKos7WwsxLwfzZa",
  "key17": "55VqzJ6LxyjivCSLUZ9JbuojcUMcyCCwRipmpYsuVV8u6N7Yj7gSQxkAnNNTqfJ4avRcn1Gnsrjho3r4cjjYCcj2",
  "key18": "4vuKAJVbscpjJcnqbjiowoRTdK7ceJKFxpBud8Qc3DSRkhEhivkrpaXtYX6F4Wr1fR3SL8rCH1DJMFWzvpZLxNRV",
  "key19": "3PyjsL2LBYvTxFLb8x4JQTwhbgujbq8caTyTKe7akwRm4SQX23b1iNkWGiXwfXNejzNMW1ACANch5AG9BmAuo6ir",
  "key20": "5PNTAdYCQP7cxwdiiXbQP5h83UhJcwBhTJwokP8wH73Zeuc9BzwFP9v4h4nZxFbd36JTqqSkdJzgJurbWNF1YdVD",
  "key21": "42N6TPYPbxgoa5mQrcnZP537MdUUuz2nvjMCF3z333RRrjFgbLPuoqCWmbrSV4MZL5vdHcQRSxQWkEsUr9xDCBJV",
  "key22": "45bwvc9YWQBf9fpFZSKiPHHUVUcX5krX6WkJHKde2fdBmct6eRq37qmLSBtAZooE2gG5eujPPPASC8RromQjbsoQ",
  "key23": "21VyC524gmmujL5fKrknVU56XTZ8VyPgez7aDBZNKMvNj5CPytvdzvsSoRRKrjczmLA8XSSHiKZYdcqjfqqpxpFM",
  "key24": "4wQY8zqx2CrvxRwoycQusg2bVN89cvzNBw8WQHj69Bj7rsHMV27NnxhrdPPdWwnghtVTX6Ux8cwdCkvL2ZGXVfsr",
  "key25": "5knzYUfmj5wrh8PRA1aWpe4Md4Ks2CAQYVZKFFRH5geHHet3fPqHXsvXjKUm1hnFUuswFepfQPy3ZzLkYz1hwjQH",
  "key26": "4KfDPXdiv96tYP68o7YA1mPpkLRcB7zdV5BQtZfjztkJjpvMX8GZZsST9jEd22vyTphSs6nHjHmd76xVp9bEq9hs",
  "key27": "TTS1iVWrFGBmQSYGM5fgHpgBmBy5B2cYLydNGyjGZVC5u9x21DELKwknUwnPukyvY74oCMzuN8rkRaKgRR5MUDa"
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
