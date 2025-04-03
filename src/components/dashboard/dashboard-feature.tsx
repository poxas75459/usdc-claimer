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
    "kzFH6ofAvA3gdU7kWeAUjkkS49wHQPi58pd8Mxp5Rnn4QxeXdTpVHcMNsyKoscYDwHFTPRKNcQFFxTXm9fiZ3xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEQdKcuwsUoQqiNGYRDH2ANWJo8faj9UmeQDiYpp4mJkdyCDKqDw7nqZxPyFw7ES6iBy3yZXpgi4VmfSuagc5eB",
  "key1": "5bo8yV6wP3f5V3MUnTDdixPGKnKtoryaSdpPkbHWGMCDLX3eZozBcWf77Zf5xPGtjgXBhPHYC5K6YFkFZcSzgosP",
  "key2": "5KACxRtTDBU5tJCE5NGp6NhpDC4syuqbgrTu6NBCqcL59jbuYX6KJ6wtepvyaHyVs46rDywiBo7h5WC96qEuCYuC",
  "key3": "4tiBQqe435fs52JXY6PbJRuUoiRYtWLPby4tZhJpHtEB9mXKpN5CmQKLQLJ7KKKvdH9yYaGePnovhfbZPGuh6WC2",
  "key4": "5bobocYjPnEEFewMw7RhA7qy9saL4j67zgJaMVWv8UTjRmTKRhx3nRNYhBHnicfeu3kszFPducuAxv6rhj5rJfEq",
  "key5": "vmioo67U6WQd6K59KFNM4Bk6fp8sPxNEYieS96y77GUKNNWXxBR2SEQ2FBjdHwhUTQNtv91wctmMWyNudqubmXu",
  "key6": "BzjYVURst7nnJ8e2tHk8hUzpUXdMWV6X23fAgE6ahjrfRrmo59Ur62zW9CbYMd34cpn5Rrqxi1EkxLEKjLAJJZK",
  "key7": "2NUHxQxsoBdtQfL82Y6Kfmij1rh1dk2bpH2KJ7cWFWHLFmsCftTk8ev1neUTxSqWeSQWLFdBehVZa5nEkgDTLMG6",
  "key8": "41FYc8xUjahcj4qLHS5K6xcxzyVD9LQxdhJdvWGonSM3vbJd7V9B5SKQ6dWnQ6keZSgsiAuYNQK6gY4mzXKpJWf8",
  "key9": "478WL3NmBUgJZqtobCNdgZmejUHx6J6J4WJHtEUrmQxDifU86VqvVhNnzu1LoGH9uxPH8JZCPjeTMFv9U4nzFSHM",
  "key10": "3eKNsEby9mjxtCvuo8PYqfRxEkp5zVbwc1tpdJgZWkr5gnwsByWBCtjqeumwC34WKwoghYSfoZJAtjSf5iErVWiR",
  "key11": "b4y7eqMYt6zPqvDq1iT8hYhva1r1EdhMqXSPQYvosEwWZpz63zBQ81d7vwX16bmAsNWdMgZMpPudGsZ6QCMePfV",
  "key12": "axKaJw5cgyzS9W25KUFsQ2NYHo1uEEngZcLR7NnJGx2BbMrMerp5kZ282NqLPC9h6h1KSCgrq3qiKSgAGVhfa3r",
  "key13": "2W1C3cn9HPB2xeAFXvvsWYRdKuAYRHtYNSV7tk72s6JnwFAsBJSnB1EnE8sMZKTUv8Bw2ofCUx6xDLVBgB7YJgnx",
  "key14": "jdJm1uN4HH4iwY79D3QHFaFJvGE1FBT1feDHNq3qinNbHmzhXY1ZBxFutTMikCXtfhjN9LVEQ8qYrdW1k7dr4D7",
  "key15": "2pGWW51BBCAJLy1kiqXDrQs8b6Y5KysyEbBF9VMtfqtVk5n6eZjD7D5oJW8m6C7doPbR74gTxQhcxHQLaNQjerKM",
  "key16": "aXuak5SzdBYFWhi14FAgkCih9qKwff1RJncWscUxo6149ebTPjR3PBkhzNN2sNzvGhc3vxZjf1hpH3NNuPrZPRh",
  "key17": "27qx8CnS7TYhvg76SVaJDjbX5ecPr2Gt1k429Hj8TsoBvTeYzwymY7XAy25iaAnuda1yagGmL1z287RgYCprDH5C",
  "key18": "4JuVuXPdhLnMX1j2tVp8hMXKrPLuS9i9SQnyufwjofAiVV1XGs99m7HLBJ3YrVfRft4uAzno8wLKAEvxr7Uj9rav",
  "key19": "4UBs9q2TUrzZ8if1PkvfH1FSPXG2fbUiFy3RFGwRucND8BAkV2QNVwpauURffWoLzdRCqBA2a3SHufWhbxGpJfQx",
  "key20": "Yc6aTeKrtGFQ5qWR5NfSJ5Vo4gJ9zS7KMRyNsZQwrewx77vbnzyxKQ4622fGkMgSZDZZiY7tvvT5TYcrMRJyPVq",
  "key21": "2NDUp4FjkoKyGvAUB1YKr32N7zN3Xf6yfcYzaRvZc82xGh6UAgusiZNXk98ehZiMj9nPFci7Wc997TNzH4yZSHyE",
  "key22": "gTWtB5PY2FxyBFmwTBqgwW2wD3KnwExQyR3CMqWvQZg5FCQNmHgZdEq8yJ24Azu1xi5qCGDiwPSMeD9QvuTyqJq",
  "key23": "5BYE4QLQMesYYPYD7riWvYbw1g7vswVfLqjPxbzruXYbC1LCEXHcQg2Pjn9NVUaXqcHbTm1q3r9FD46Qcc1c16Jo",
  "key24": "51kJuCVfSgNvunH8F5zmG6EhhXsGWGX7xQTv8woKeu6seuF53yzMqHauo8CuHY5JbegFS61UYnfPwFHeEhiY2iwc",
  "key25": "2Vg9abTJvPBUXMZNQj5VqVQGy3MXk8d8J9GWZktPHd6WGjXisxHUCV54h7vGvkRhkbivid1Hb16fBxW3qrsEDdk3",
  "key26": "35HZNroS25mWt1vY5b3W4Fh7cg7Ceqog6qj7WUor38RXwzhLF59hCXPptzQ5Q3q9GKbY6ovqcND6Q3pyqwog3crB"
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
