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
    "4yaYEYmKQfeKWfFK4A6LBjbWv426mrbSoj9EHkcxcsm7uVkzWSRCZFN9j4GL9V9RMM5xauihpaQDBBTptbup15ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAHzEmrLB44gRCBaruzE7PLkSry4CGqW26nJKuSPL7QJDjsK3RpXKy1DSdwrRKaeFkpEvoLfUFwSMVPHg6mzAXS",
  "key1": "2Qut2sQMs6MmLfhkE6Ciqg1TcQXV5KTdDETq6VvbsPgtP6oNLd3Wu9yztcG64EfiW4SSEg1T7ZDi1XXkdvsr6DyU",
  "key2": "2UhyhZZCsyqfgFrvoo242aRG6k7sEnx9gwJoHhzGPHVyLPoacJJtdPLFTzy1cjV1b7hyzWYpzyCfqDbyZBaf9zD6",
  "key3": "3igzy7ZQzqTacfsBHVBV5Jo6w1ixhCMWjNyu3UjexdKUHGFE77DgKstsGdeu4PBnSKWGcw7sLT29XFcRC3j1o436",
  "key4": "4wtHzch446NE2cZELRxd9kJXqqPXWjWguTboGSG1VqnsMkBGWUGPXUGnaqaVPmpRxPn73aAtTvoNkQbSyjQ5HzMG",
  "key5": "4LoojjqpnpJ8QrrVmoAnbzbs9hZoHftJKX3si6QEptTuUprkk4iQuD2X3rmHSoARQa6FZwhUtRm4CQSjER6FZQs4",
  "key6": "2gjLkt1VQu2adGfywQMWHjBVFU6snaYczLUW1SqnbG2dH6k7fqYxyqSJdXwFAw6g6aj4hUNKkQJTvWBiGkgAoK67",
  "key7": "SmiJmcUUxUCyAm9Q7sVPLBK9ovaRdh3kTzbKFRkWnuZ3Y3Chm24mMndaVVeMKCfiGHbukfE3AQzjXsXFGHYXupy",
  "key8": "47UzbB8EQmXtaV9FMX5VYAbzhzmRH1DykJDsyMPbAtyUGiD9gRBv7e1vHmReBxqN8VGS1tp1UnbmhugEY8L2qmgZ",
  "key9": "211bWKG6JSQaKHeWL6jKnw58GGxA9j6pfAt4CdwkvJCrmN4BrSCLWHG7mATmBRArt9mKpD3hqqetGeqkD1g6sqzr",
  "key10": "4ooemhsLxX96zMXDwjpvdsPmbm812efUVQLDjeRUwSuUu5XgVQg3bQ71umcojxswMZpAs2KoG9zsrTtDm49RVjVt",
  "key11": "244HytTVwZcvPe6nEW6mQ6Exrk3F1DxVPuySxanD6p7dFs7EdbDho9nNmkAE45ez9TgZdoF7cF4MGzQVpVVhtPhm",
  "key12": "4U3y9kVvvyrBXSxuoCCYo3DyFD2TzR88zqBFHF8r1CAVzwqBnHMRzpcQngqxzpt6vei9nDkQ2K8gu5cVzjHxTCwX",
  "key13": "3p8BZUgaqVqCvVWpfDJLXDdnc6Wvme6wLu945osMAApekaucN5yisXQ3FuhFpYW99aMQBXS3d5BKNwdQZRH1d8KB",
  "key14": "3tTkxEoiPUXvbyQ5ZwRLdKfv5TJhErdQVkBFsNCMhJE6ajv7SQCbwK76NJUb9SmDrdV8acqcccr2agLyBHEyLYa3",
  "key15": "3JRUioufEwKWB44FmJFyPtkxpUBZBhw57xNQmqiY73pViGzY6hoQ4dwPYYQu8WhRQ4VtzMbiF62aX9CDzbJ8EX16",
  "key16": "gMmXQpp2iZWDe7vjvPYtAL7XrkFVgsrMGD4pgoVJHRvpp4tooY2cvddRR7tarMo7DSfRoNhVsMuLCRPenuBSZ47",
  "key17": "9ykypnrMUvpjFjmnUBZbK6QTyTh6HvvV4YWcUAKfqkiA5JNk14JzZ5WeUuSpPkKvAMBChuT2nLfKTKrHuNi9fdz",
  "key18": "27GfmtA3JCCpVPKsd33b2zc9ZcyRGhpbaMGZ6xg6RHWhsZu9rn7YBPPZ5xVjVKWxAatdHUUiaLvB95WvXSCtce2R",
  "key19": "3mPq2ZgekfoZNHXB9tua4Cw2ez5XMu1cKvAjkZiVNjeesDnGNCXBQsnBuyQ3uKupEdWptSGHaSd8aBUvsMFfTvzJ",
  "key20": "4nLDhr6xL117eL3vD9TGhbWSAdnA57uL39NYH9Gadk2xtyCEXnwH877Qh1o8M4psEhTioD6atRQviWcdYz93uSXH",
  "key21": "4FnXYNykQqECiKC4HD4C5GXyMBb5jvFbZnnPczgTR8iBgzbHEKTnJTKhRLLTkKnprcVCM94swuTvmxevjo88i89M",
  "key22": "5pe3uQJXjhPGPiS6PkXGmxcgZXESiLU5Tvn5JFpnYGgwEsznuDmaV71sRPasLpCCEBaa3JFSQouL8DmjGMhqxcCT",
  "key23": "4kDYxV6pDS1CsQ1FkLFWNHF34FrnZrKX1tBkBGMntSq383hFpm8wyNNwyCLotqBbu4CYcHA1FE88yJBXB8bgZYTP",
  "key24": "2QBJFmP3FYQZrf2vrjYHrGqMm8cmCxykyY6UqyJvmjj7H9aHthAERBJf9oCokaoMzNq5Q7GrdjGfqT51xwQz28X9",
  "key25": "4U62icGcj3214HGHTWXvvLBJfZrKETS7Yk1KcxtDZtLFYgyT6dAEFJWDUCreCuR6shfqzxZ7han5Er2WuEJWPNDT",
  "key26": "5hnS545FEBTyGwdbcJB8HjWrULajYK74Vtn1wrmBzQXsoCgNCBRavEnD4jRbp2TycgL2tY44EzCE3qLTH1qvqmM3",
  "key27": "3WPze4MG7kVg75q6UeuBh7w4YNmQbcijwwJ2DFJML6wW9AwUz24H5sdvLhthKSsAzkaq9odRy6VUZHUxqjVRegdD"
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
