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
    "2QpftRfGjXzKLChXKtCh6qGRGnAbCkvrHZnHy5n2kBqD4Fzx8abjvUW67H34UFQzvzctPiB316hR8gvFaJqaQ1y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBbAMXtPnYYbjMexicJABdgTmm8xhoZU1V76dZYWF6tJxx8V6jh5TPhriB5WnAdWPQgXrDxMe5J8e7NAQErdHVp",
  "key1": "vKZ9d7TXq5pfj6CXCLsvTNfNhq7bXBM1hQh6NFXg1D8ZrT4wgG6qHSqTePSA5UoWdy1xvU22hL5uPWJiUur6SxZ",
  "key2": "3DfgK2Xc6F5Br2SR7rY8ExLw789yTochfV1GnoCktfrVPRBqeNoFcrzM2i7sittPwRtEoGdHU5egA644NGDubYZj",
  "key3": "5sMtT8K8aiUsNodQHFWDLRPRrpBuHs7BB6TfBMjuVPD2zZt6YabknpWqLoLhFqyZFJBJ48aL2yki1KW6vLxWcS7W",
  "key4": "4TmekTjQqC98TK88LuC2xrJGRaK3usyhU1hXz7dUcJ8DVkQMU1QU8RR5va2zDyo9GrjQapS7bTZgz5xYDHHgUzDi",
  "key5": "5xK7GzM6sCGyWcvqchzEAXL7XWnvKDt41ocv7ebRqv51s1K38XxToi1gdcU6WSEqxhZZbkMQTntUEVuRy3drwGrm",
  "key6": "HZ78DBNjf8jHbcabdLVoCuB3hiFdNgqeUGBC41NuS1LsEUadXFyu97MjKssFWUoaT5N9FZRfLdtNd9mR6xWcHc6",
  "key7": "W2teJomfScgwEmG16djYJbbJvHh7RkfgVKJgj4Yhjci6hz15mZz2GY4zSzKaGns64xgfPAzhrBbSbrRTHaU9vaf",
  "key8": "2EcMJHPmHoQasWYnfCyLx63NcbLxAeiDmZ8NdeAQm9nZJh1ScXE4oiEWZZz8XV3rbw1LsUyLXB3K4x3NuXoS5VAp",
  "key9": "3CxGiDrxqatL6UYxw6yGmJDrC7SGc1CWMYgnmLNgAf1Y1rXibgP51JLcPnEvGh12WfY6KAQGRgXN3ddLZDJyC5cq",
  "key10": "4pUVj7GKwb9GmJ7mccveC2sXTh3nqwGeScoCpAMTjrq4jcVkRe6CEHApGKtrcJvSJ4wGLLoaqDh3P6zPSouAhUr",
  "key11": "4yMBudBEN7YptTb9bisUT2VPVVctQ4PNTMjWh2aeodLxdVt4f8AcKEoqwDe7YgGGxYc7tjaLKhdN9gqQYADWDRAH",
  "key12": "zmTvksoJUSqu84Dj4EDhEkxSGdgqWZXu21ZbSHa3W3XZSa8az8ini6ddJsGuFY241kvsMpdqt6DQJTys97oK4Ng",
  "key13": "4N3xGCyTvcqLwfMxi9RaDdh6baJw2uN6V8REvA15oDV1Zh62N6ikyooYJdL1vtU9E6tKmw8Gv9xDuijtbEKGGFmj",
  "key14": "QihjeaPfN2W4xV5PCZUzmwT9ocJ6WxUUPoop55N2ZrSXuW7jcddhnBkX1tye2txfhFqXaHLcoB4gHe2ok4PxQE4",
  "key15": "2eP4y8bAPBAoNGRsFZUrTMZgP16t8emmTDFX3e8zDyxhbDRJvqMwk7zY61xbeEFhGt98rD4VpXLnfUtkBqdaFydc",
  "key16": "XkrDoqhTTbemrXie2HKmeWfuSodW1s3TphakBKZg3brYfDLRf69hz6qfzPW1xd1JqQob1aZbYFF7WRX6QnVZtT1",
  "key17": "4pqRJzj2Vqiy2JgkPLcxjL5AsGuTvZqbtTdfRCMBYA8E4FkmzzTwACrY5FRqWXBUMX4NUkNhusewrVqFzaZME16v",
  "key18": "4RPmuqDMcs8BA8sJVDXsiSvXhp3Nq3x4BTp64W2pppqW2jbRVtkAsLXvceVtUJFyeJEwXsUiJjKRxL4us9kvZeGw",
  "key19": "2cdoa6mh2GuqgUZ5Tbp8CwEJSz9hbebBtUZNxe7NJM9Kwekys5QArcQy2mkC7cd5ypgtDR6jhJDQv6NsLsVFmvRf",
  "key20": "EkiNukarnx4MZJ5tpR9Zd7JAtPL3fuqsaCtaqcKxhhkRaZUMvdkrmsj6PizR7bwM35PaJtNHSGC937Zy3dw9LpK",
  "key21": "5o28RhRQCfJ56b4xf1rwDMiLPB2mpyYyVXGgf6yPjNVMjpqDNfr4Y7EwekVkDv51a6MKJtrn8xHTSrTWLgPmKMYf",
  "key22": "59fcyvAP16bp8Na61USCvVZv6tzWSR2TgnEqopRqMrqbYYBAkDmr3rrnkMqvv3YKfKUyiWB5daDFauMHKkcPD63K",
  "key23": "2HNZRFt3Fn8QeU2frEXNMnnZARQkPuEDYrUhcHQLzWPcBAqqcW1zBD9zSe6hWsgzSw9LDo2eX8tj8bjWT8HHX65U",
  "key24": "3o6mBnXaKL1AAxxARUh43wEAhUDmbTDdNtoeH7389aAw6FrdGx8zbYx6Cpyi6vEzktWc9cNku8booEdjTdSUG1qw",
  "key25": "2fztShG63TNB1dGBp1a2JFZvj6so5Xxorvo1i8pnbaxLqEb5LgRtTzW3s6tsuCiQaR29Yn7FzCB3qNaGdCRQ4A7",
  "key26": "4G8UrE8NHhNrRdNNbgyR7fvSoYeXBoLsNbDa6K7Rd3qQDTDH6xYfiYvvyRBxaAmsuz1H5EZ2HYqaRQKX7x2EFmnF",
  "key27": "TDhr1ecgJW7gg4GAhYXyNycGhy3h6JfmsSU6pi4ibnceth773bV1Xi7gpumqjtkS82coDmAXgyheTTRy8irWLyw"
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
