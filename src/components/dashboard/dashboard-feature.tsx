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
    "VV7fgNzeriXg1E1SmzZWtxKFe9mKNhk2Gc5TWR3K7TZWMhySJ9q5nL1nzqCRkbmuX7LHV8dyZtfocXeTjeXhydW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9tuQgJ5fgDBvP4spmRscSqsv7Cq3yVWAF15btWzcxc6QcHzs59bMobKJqfcoH9QV82gwD9sZ1Kzf6RehLnANeG",
  "key1": "3iD5TQZFSvKSQ9MLLqrc1nBhu2VQfuLwrwWakAu9WQmyqbC9YAX4UoK9WsKpojMqK9GDRTWtyi6DQaHK8t3pp5MM",
  "key2": "4UW3BMzUPRHG5m418JyrxXHnK38vpV4Cpb7pWVG4GbfLQ5U2SH2pwixxic7HbHTkYbt8iT4RYnZnrAA86phNfZof",
  "key3": "2bwSdrfVcNPyjHo3YFqLQj562bERoGHS6QCcYaaeVfCyqiy3h74Aa22vVPkNs8Z1Kf4XxmfcoTURYPQBZ5B1cPQu",
  "key4": "26MaiDVJ7sGxM3fLfJrCbXCL1s8XvsUnqfkj3MwXYmC33wM3E1jUHTGvvS7KAdcgGLfkpKTJSw5GWJe1NeRvasXN",
  "key5": "5QV63xqVneUvkT9E5bA3J7ck5xxUkhuLmLwt2AzJEA6jCFPcWCcqA4dSt2CbbE4zDb78HtAmKRZMqLJYyiCjvZxa",
  "key6": "2trT1RiVJso6BY2vauCgam5R9UUDmNbz5mMdZgmVYuZTXn4epsZS648EoxD4xMojwFLqyzMMB3ym17848fvxshCb",
  "key7": "4AKENt2Cz1vke7WMAwcYb9VXZxVGMF4PEveh3X6KbYYFq3U3hFeZhLtKKJSihdHqfuipCLMFjw7NKevqMZa4y1jv",
  "key8": "rFoE8aXfM577GBT8uf264Hjm7UCtAnWCnUwpcA7ydgByNrGNL3gnwFwuX8CzVb4vv57GWuLQgupN5fB8tMLRKFo",
  "key9": "zUJa7r2rSwMyY5BXXJe3Zu1os2zz6QhVdeJFkAavuUapziHnaUAUR7mCYF3hSmUSEwrZpRQRD1KcWVawGxaev1P",
  "key10": "2gYWgGyXE9xVFkFE4aCnw3cXMNqRj8Y7ddnas6oMj94bQCPqW22iMH4Wz7WbLMLYEbrAsoZdBBeuMVaj4YLEGpNX",
  "key11": "4dmfDrbbZ4cFCdSCFAQTW8gFFKxCZ5GTxvdofqUWeXw6WQewk8qDRjr2hgSkMCjy9LJj2wkQ9SnviKpPEYp3gNqc",
  "key12": "25j8RBoNtaDpay7qXWrqnaVHuViQZ4r55wkVvdwMhtGLErAeQgDjNcaLqbQjg9mKgzKhu8D6ZBVbrzeBvFVFyWeR",
  "key13": "oV2TNqtpbhGockMsthpaE9oDmCBZ2HtFajU3j5LMfYVHoGU6GLGCU5ZW8XCUBxMBPRLXvVj9kdqaSWk18KWHNPD",
  "key14": "5Sr9L81ME3UnWyKkX6cR1HPYQyBohm7od79ZgA72TsZSPvPLDC4AWKCkYD72H8zH3zaHu1Pf26KwEuuomeLWHb4C",
  "key15": "2iGfCC2DxDDckmJKoznSA7xzMonS7A8BxvdoBtPidCAgJct5tJjR2iQxJM5DpKFyqHvqktVjQGyj2ddu9QRqr95u",
  "key16": "3KShfPN3XdM2dZfN8MYFmmdmKYeSJBF2fs5vgg8Ld7k2RQrDzBKHJ1vkjF6nMoSm4ezPEs7NbKRcAVt6gcuo73yk",
  "key17": "aMwTtmc1Fj59brW6YzhKptDjZ518USFqtzVuucLSAKFsFQQfXHtEZRqPxyXZ2xYKBFCVSM7LPjtgibrj21sfLV8",
  "key18": "5x4CxF9EkQXvJXVxY7JNqb27paHsn6BxhfcFVD1HiAuX4Ad9vhV6hgAt7ejBzefdXbFU1HPyg3uSUtoRJ6iuFuGh",
  "key19": "56hcpcJzXxw5Bzods5TAMiS5w57e7CkJvx6g5iwUjRUUUsAxKxDQjBhanfWk3U5Ra7peZUVWtgNjG1GjKEfioqHP",
  "key20": "umucWJiusGLqcwNUQauiRy7oLNKntSUuEQbCzCMR7UhppQmfXurkks9hAiPBVwhmFwXGYxgWNTxHUyyxRcneXZB",
  "key21": "3858xpyQBkX7ZRjUqb3uFKDmj4Tdwa3mFaXMM2MoXvsqEdxiXe2MNp15LV5MWU9s9T5LBs99Jm8hrkwHXj7ng5xf",
  "key22": "5oHjMR1nUEJqK5cUhLfrG9r5KEmBS5SrJqqfFUCpCcxyvKtuFJGnW1BYJUijyvWAgHDS4S3kpXVbDaRV7y9WneDn",
  "key23": "2GJspGHLWawooZh6sDbKeGmGtKNoFRq9vxmnXx8dkePV2cGVpmFMqz6EDsHLnjs4ttPyag6kLjSLufN34yhptwLF",
  "key24": "N4x59M24aPnrfmk92w99jUuUBrHbFCZovkcu9t8W6nnmjYN7CkxDYXpAEbUUX3x1Y5k5jSDaHxKLLatG1FPLaGn",
  "key25": "4FVcrqVAefB4PEQW8bvLb2FSYBAQvMjUXr4dpJRbGA8jmg4t1W6CtraHoiQRSDBY8ku2ARuyNxZAhsX9LYb2c99d",
  "key26": "HG7wKg4Tm1fAbL4ohRBfiqorJGZMqzkcRQtahTm9uZKwAWWv8QMnzLg7C6wY2XQZYHZ2pbeQo9o47aSCNPqeuRw",
  "key27": "6yu7ruutZ22ktA4LEc5zcJoDJK59aoUbS71BJUyPFEEpYfowB7ThbrknnZVFTJD1bY4hKbMStSGbergmnnfzqiB",
  "key28": "55BDyiA9C2J39on3vcv15QrFWsyamr5WD4pSAV2hxY9wpWouDD2QCgviK9cMgTnJ85Jhb6ssHoQGedxyPfZ614L8",
  "key29": "2sBddkPoWBEaagws8vC2FSti8xSQaTZYB1MzpDChJ99331Nwef6nYQEq2SHhg1KdPcW4gikdJPj9yP4iz4ezGK4J",
  "key30": "39J8ttzx8ZBviGaRxdbSYg8QxSTVhNzRYDReZYTWntiJnKUDG1bW9PLeghhHPfX1Q2RwfABhLsoUCXEoczrWcSKo",
  "key31": "HCRko5Lso8g7kmhRssMnfFCyDQ4jDuhsEuVnUDp4B7TKCKZ16bRHRWrf18Ai77UqB6DzEGrttQqVHUeAcfe44MC",
  "key32": "hC1HQHvJ4nsKYNrfiiJuBLUfhrjkvfnMdcQibTbvBPNYrSTQCZJjrrhvQDEpZLbHsEhW8BCrtPhS881UWTdSuva",
  "key33": "43hKDkRW87e7WCoX1x68QwjUzBitpRac3b5gcBGc71HjHvFc83iHHvaR4FUE6Kyw2Bgpuccs9QEUBdYTmK5wTG1g",
  "key34": "3XBroK6xJQaWbBzSEEMNJwLCCBPcaq9bbZN1A6MfVLmPoXbbrkdxJKKRUfFrhA4PRbtsSNQUhVYS1Db4NgmtLu1a",
  "key35": "5zsRtShuPDK7nCJewobMcjW821gHsUujt9T2cnQVtkeTSUYHhZsxtCwUfg3knuekDg3qMcXAq6SuyhWn373gro2T"
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
