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
    "3e7wL4RzvRuMpuwVdVqKYbSE5wHyjj9qRQzCbQDR9fhbkB8Bk3RsCUCjjjPhBRMAwA5C14HA7v2eCzC9FvDyxkgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ChsyaVfamQjQALswXxxiYcVhjFHTSXNCJ1FfjwbYjHPvZyMr2zuQVUqXpLNTeCmMVonexrQKjWpdgPnqM8o9gcW",
  "key1": "34nUJB4vHjg4WQCpX5AmVuTFZXPAorLzDQiZT18s9t5rvV7Vt1aVg5HaFJ5qBGmukCKm6x7GxcD5jaC6Na5ghTdE",
  "key2": "46WY38YrpwrYhsLAjcE4PbWjzrqVEgs5R8cte4TotfWZ1NKEztU7AeWqqpSWaH2BJDFhfFekmtD6zNrkhn5fe3Zc",
  "key3": "5VLugBj8k5vZrGt2zPzBhGPEQfWQbjTpPaenCA4hfkkPQcENwBC6MfFYjAQHZwRYTUgogEcY5vXMbCGuPZYKcsjV",
  "key4": "61aJxTNZnso7zFSxNGAxTCsKoyiHLzgbMEyjxSLkb3n4BF8HyMe1tu7sBSJfFA9F4L3hDwN6LSjsVsWmbjXAKecL",
  "key5": "5L3CmQPAD68vHZRzNdzRpstbR91939ypEtSXwzfmzN3CQUhinMKSdiBDre4QrPSyhKjogFjsPFsHdbczswdjP53j",
  "key6": "2je6kivzZTy9wozqr1ZK1wxPWFD2rpjSDqkpVsWiVnJqcAeShG3AvFkFSS8MAn14HJbEmEXoTPqVVPwA5rdkqV7j",
  "key7": "4z3avXUUQ3dHYxN6uotWY3CqCnsJyWmLHe1ubizb8rCbPHmtnE5dwAu2Fz5PUJ2G7cirVHHX9JG6LPmxLZaLeHk7",
  "key8": "2YBv3grYMy3iAzeNdZxyAybY2kLY766RvecVhcTx944XaCotx2D58JHZnS9puQFz8xvb2PCk89F1fGN8d9xre8Lm",
  "key9": "5m2cxa7HpqGpZQKMa6QUMDVkspFwYCcKX7rH7JfKCGRXjzPEHvfV1vKBNYiJfUTgKov3cEp6TbW9ybHQiYMRr4Fg",
  "key10": "4EYRcAoVhNv7iqseXXqRd4hHpRrcc5KrLrSBjzw3MSV879Jczfgp48jrSBuZ9vr97RebzFyHbFfDJCdErtEvZBtH",
  "key11": "uBJ7QeZM32zURvbFGCsudX8aB7dKbDfqHwu7LsTUKCvDrkH2yLJncJfdg2GwPjoz7ztWdjPRkCWt6eJtEjCTZAP",
  "key12": "5mGLfZeab5RhFkG2JmhZuY3FyMQXQD5cpmNTEP2tzEcM9EcsVPmuwxhdc7V2NSVuijjU2kCJgbD3rnFpuA9j7ZLv",
  "key13": "4icB627CFRT3vmDjwHbBcHnP14HvdXJ3FHhJcneCHtnCqVFpjgPTSEe7Niv6ZAkvJMHb7bmf6vmirY3GvrFmqyFH",
  "key14": "4Umf3bBrgcNYUrB8Rk4Aojhai2scC8iYzMQihHLAiKKRQjKLb46javjDdqSHVGyFFktSwCDggsYJKAgnrY38FdCF",
  "key15": "6211v4ZdJx48EAKBRLPcHPmUBKh6N1xPKcnexWkMPuPFyovmBS6py3n1JoM7gPzfkpMXMw2XQJsBqzqFfMYrCHua",
  "key16": "26aZF3sS3iw9iPZ5C8ckmXdgefkDKjGhHrXSytR7LMHfiim6bcUVy6k7YVrSa8eou5BsKb16iMtMy8PCQMk1RqMW",
  "key17": "5jzoUteeS6ymYRm8nH14sNVgiti6SQt4xZgQXR88hUEB3pXFLKDBis3rea3X8PzUvHbgXwTkFwJE3z5Jja52ZEzN",
  "key18": "5z99G74g3KoME9WA4QoyLupyHCJhsHT86iWH8YpXR4bCtPZ55FpiX9dw2pC7UNL4MZSwWtthXMELfSYKCSYCBFNd",
  "key19": "2FjbKXw6smjSTuerL4GTi24JzYTxLYMSvWkM2ucDRWRhoWcrUTfNwGAgTwhr6tZEhUbs6ktbrmyADaoZM6cT9Gev",
  "key20": "3kMRzCjAv9gnRAreYBWrxLqTvRYYHrp84AhF6BhMbgioVziQnLbdPQ6ubNm4ZP1AokeziESDeM9acqQHoNLQ7FR3",
  "key21": "3c3PHCkrwn6hR4JZisc73rFwHjtvHb2vJgsHXFP4LCbNvYT89HxtkWZREnQa3mAvEWvEDJ669zv8kGKRTcN5A43j",
  "key22": "31HVZFP61ufGX5ci414UCo4DVRvA6WJ6qnckMYzQVsNNFrf53YF5oc211BNSNMAKsj9oCi8Zb4oj98ehViNEuam5",
  "key23": "4JDzN9y2NFWcaPY9YYh7pWhazcqgRW7JwNzcP2Q6mDQjucLiCzxoiNG598AKFQG2Xd664eMCydrbWHHtWWk5LcXw",
  "key24": "5WtVNteJNnjdx4wPxtN9W98g6sqs2GMnnawRYHLQ7WQRvCTJtYGGY1tHbRYHjAwRPsHDtzWQBQbhmUfHaa73tbeP",
  "key25": "3uMTJM97WtR62aT7fxKziJDW2DEQiu9i6RWh4fNKtnix2CBcWfWHzjen9yvB92xjv9bkARWCqUmRQASc7VaaNXUH",
  "key26": "4dYBGd2oQxxUjRQtSS1e1wyckwrDLw9EfX6nsepskA1Jur2KhJUJYQWvXs1G5uQzRN9z5dYnumRJ35tdR3yVz5cN",
  "key27": "5YwoFKEMgcHECG71Po4HRdgTTsHTHmY8B2QPuhm3zbPasVNS81hkQ2HDUaDwnsrkhk81ENSKDavwfBosShpceYzK",
  "key28": "SEe925cCa8WFdKVZUYiimeXhYLRbZjStuxjbfs1siBUeRedrwFFYhjK76dXhuoMKEqzK799J8HNbewucVeNPDW4"
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
