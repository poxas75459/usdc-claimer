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
    "39WtwDKoanAHeNydqUD6hHLdfPvMw9gxpV1dZwoWNrKFQuX8EHFeaKLajtQHLTjWEw3aM9JyiA4yFJAi5oiAqrYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bothDCV2LvFjfwK811beJkpTfBd34Q5sxtqMU6gULDJUey2mJyJh1dFMfvQCqQe2thtXxqm6iJcBFW9WqpYv3ye",
  "key1": "2cdRV74E4e8pd88zdVjQsKjemPbqfQZ6TwhTCmcCYtrgJzDz2y83ftWzr8sE93tAssxc8AEnGgon4K8q4Gti2pWn",
  "key2": "34gky18FMQCX4A3enHneCrZsW8aZzM6URiFssabr6USEM2GxzpUp4Xn7CbLDnsSFBduNkfUdFiCoQzUHVjpd8mXb",
  "key3": "3NjVvXqmgDFbh2uzgfJgWKV4sHwZmxdz5S4kybURi9uGZ6dcFVHgsZUDdLLBRkLpxmkv5imwBHjS4EVAQVMBG45R",
  "key4": "2R6yBc3eKqK9kau8RSzcAxpEhsJqy8CjFQ3aymusPaXCthudyZ9TNCPTfThLSK52vDZFBSfvvPu9EeEnhoSJx75M",
  "key5": "3B745fAiGnhdYjUQbiSw5LmvCTRHnP7Ud4bBqUKcToUQPqquF5dTQZB6hwTyNST3deukSG9ZQDvmqr1zTawZetHL",
  "key6": "u52yPqXbrc4BRrCb8MvGsKbb66HzKMUZajJ8X2mGcCbf1JNEvUuiFA7KQdZWqzfS1naDXvKxZkbUJQXqwNDEmVU",
  "key7": "33hDm95WtirHUnSLzuvqm3WPqbeRW1YEXpUfPmXLYLWY4q2EiCuMxT8CBPnwMcAkb7WymTYf2ud3vJLP5YxY19qf",
  "key8": "56Ebm5NjaUaEKfFycoPpmogJh7KoiVaXQevtBn1kXSb5bCDCLumRWZz62VsbZBejCpw5zBPZv1MVtiEFdTvHfndP",
  "key9": "4YDY3CPwMBXRUf7W9PeZp7wsd9ndT7pFG3MUkFz4oZ1gDrq3pUZbqqiCSyqmzcMd2MqmQL9PVNLZbthoDc5wYxaP",
  "key10": "2RDKHFQpuZQpFDSiuUnEWQ7Jgquzgm3FtJzGuE4FuEbpcu9vz3szyAXhN2jm75EXCErDYxA3yJG18kZBg2wysSxt",
  "key11": "5Cg8y8z5RnxExYWbQ9ogi3nbPJX7QhFhyVmEcDo2eqazYxvoekw5hNrCzBH8z7982eoBd4QYQh8AnmgwmkTMHgxY",
  "key12": "5joEcsKdwmteVbUpTGTqh4u6d2n7p3SqfvZnDo9sS3YDCgfzCj1f8spBSANqBfUsiXEqjvThSY75sY4bW3vWHhDL",
  "key13": "4RzTaGmm2iCTDEhTGY98c3Vh4Zc6SExKvSoJh48E5fjZHsf6yW6Fwvm6g97LCfbb4Juxo9wUkWeVwMrhFS1EU9zo",
  "key14": "2LyvydBcq9RHrx4BEjzF6VLZXXR723uhFPiJuHNR4qcYz5uCM7thGxGNeD3oERYkk5GDsSz1wCuHpaE46z9fbtNn",
  "key15": "5pJboK31JvWZpZeDwqyngByPDChsURyTWZRc95B2FEVX2iJQnipb2QPmxjNurWp7qTiF2YSstMBwis4QZPK8oLNL",
  "key16": "5utfuWLoysYzot6NpRkVpTdRHzzFJ355NdH2CthxGNRrxLHzbufj9hakwiBb5QA27uVz6vKUhYg3MnoUh7EybsG8",
  "key17": "61hYq6T8dGHG47rGBH9drq2VCT7kTA7AAQiZCAmvFA2R3ag4Kq7y9uU5Bv2wcmu9yCvTzmmaJvMooGK2HXFiGKfi",
  "key18": "54y52VannY3NeC4UTJXA4UCYAv26Fxcz8wA8Gt77xm1ExpAg5TkhkcXwFu3YV9LBk8Dbjti3tMye9LcoQLNRXRSK",
  "key19": "GYfuksP6eVZp8a85ttuG4qiPt2DbToQjgxfyc4pp4AA6hjpUF8w5WgggWnfZQa7eF8JapDrt9TXiMXjVDnjoZrq",
  "key20": "5iCxpA7aESMd7tTUNNbJ47binSvdJLtqAm3KDwm7TNvpZNtWNCuyN8sU3mgKACXyFsvQsAMyDPYKzcMNKUNsXSv9",
  "key21": "4oNzXjXDEzBExGoamJ92JEdHQuUv65VNDAuinqQsHh44qYCHQmcMpFEAK4imHK6Q2JygXtKR8SFUqYaoktfzkuMN",
  "key22": "3gvnhVwiUhw71srfqYiXKsqW3i9EDekdSgzHnex7piytcUgKDUq5X649SnxMvgyAM7uW4V6ytQ1wuZQRytqawb39",
  "key23": "QPkiPKuwKuh4tpxxcD4unkgRHzH9Wn7nt7yMMCWtWDraCWb91PnTQLXCYQ8w99cTx4BXvonetYZbMGd5yQhoeU9",
  "key24": "9XPQNwakxM8598MviYyYYDf7dU9zwCG8QiFdT2c5QNf7mwKbbXFqtkCyJxEYEYFS2id7cwXycaAAGZn3UfU8mxi",
  "key25": "4DoXHkRC98ijkw6eo3mChuz9AShkC5u154CSLKvR6aiLj92iujZoV4DvuaHKhXEBVnyGW5yC4beuLSF87oK6nUJu",
  "key26": "4jZMXctUSPLTwKu7vDkA4B3LCJ67yVFJLUGoMFY1h3x6VexkULf7jHF1TnBYihUjNXP92eaGSonD6wWuzgfwZTTW",
  "key27": "23pdCGZYNQtGoWQTNmABnzz7TWbkA8bfZRnUUm6nf2TPTF1YpmjtfVMRUqshf13nRbwb2XHzR28CzQfADemJU2HQ",
  "key28": "4tq15wuhFiz4VHKti7VT4Mcctj88ABorTnwXMJYQxij6nyDqS3rB4Fh3CVwfvejrxNuXVSiPjVkViunm4ByGyLKE",
  "key29": "2eumCanUD9y4cowW7NqUm3PjaSK3JQA8zAM8S3jK5e4DHTncPTWH15fh5HXiobgT7NAbvcGxqFqkfCuF9sSMV18F",
  "key30": "5YZxkAQW9cwX1gWPyce4a56cJ7cWEpnqBXkCr98D9X2tireVsPQ9CVxiBVCspyJZj6qzv56reRy4pJuJBygvCj8J",
  "key31": "3kZWdoB6jNoRhtcGm3j4SbKR8LfTK6Yb63jXLguEVPaS64NJohtXkufYyJhHNgjF6LSSm1bf5fV5Q6AWNj52df8t",
  "key32": "2cFmTcFLeQTR5QNgV47n93VeEPA4SxLgxCbwKfFUjaQVEFqkFxM4oFs3HxhpKJcA85SxdaKjuV1Jt5nD1yTJwtDd",
  "key33": "5gEWYyLdgF5qXJTYFgZ2Wy3ZStq1hsrujcgPKGkAV3feeUmee6dbknMym3HeLgTUmNGvLZ3Cx642z9frJ2Z6bejm",
  "key34": "XWWop9u2AxciWQXJNmivDVw5UnXPSoUW1micCuPKGZRDhxjQgz5yTtKdCh8N7gMtLwV8YKrVNBKfe8kQEnNVEnQ",
  "key35": "3848BnGJGKTpHWMw5QGb9GN4aDzKcq2fNWcH5fffHuhZDrYBE5qqpR1UuZ3XicuTEAnxYpGyQ9Tg8K9ALW4xfAtH",
  "key36": "3QBgLeokgx3SsbPnMUNsqcEJpPMq5uWiWV81MU7bJNaXQ7Qpvp4QSucRVmHmKPfBTybDK5XuwiS5YExwz87iQ8Ya",
  "key37": "2GQen64YKekGo26hHsnyKyvhiQFuXH1rsS4itNGDaxuHH6UEnSCqHoyd2ajiBSUQ9FKx7Fe2nEhL6KVUwzshYim",
  "key38": "2GoyDyeRxsZnhfEawT2GcCqQZbRW2s5x26G8DiDbDD6bwyAznVYDLBMFF8eMHLLc9CgRm2rT13zdFjhwLAuzEswD",
  "key39": "4ePXRa8mw16SgBGkzsT6DQfPCb3qUYBvEYAFJ7LFXYYwCuDoZe7RsN1KeoqsqS8vX9LQNR9LxVupfQKD8FKwNtHr"
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
