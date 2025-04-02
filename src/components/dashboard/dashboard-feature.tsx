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
    "2mMNedYZnpcWnGcEeEVDtJAvGZGCFLAcd7G2x5rFzD1JVE7HeTwPqjtYcjgyu9axbqwgcr9ujEH9i1CoiMxfJ24y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xj7P7ukXgQ4tPvUCLyrxngD5QM1UZDDVGaQJv3SrCqzwmPorcuN28zgmtRho6YohLM2NzW7fGXUpN6VAYZNEt6G",
  "key1": "5eYFDbi622zCnJB5HnHVuq8ViVhViqNU382wThvzPEky45TRGaDbo75yA92dqp9fL1q4h6WL24HJLLDfZwtBZyC4",
  "key2": "31MwPmj1GHg8XMwzfcm9GBHf5u2WMHZpiSj3ideriXezszbZztTcnUyeex7rav4pcaqLsvUno19s8akVZCy9ZRFc",
  "key3": "5iPmeQpon3Tn6xYcbqwLpv5wHt7uLY2j9U94Qqv3dubJKcB6GXNE6gfWnLvkati2XnQqYRutYNNvbCoKQiLtxa8A",
  "key4": "2CvVhqw4hwaQUTDwiqcF3Y8RADxKEkJ1TVwXnWLufKw9UrhoLaiw9bphZjMdGAkoCJUk6xBHGCXRRQ1ghJW1w9Zm",
  "key5": "9JtQzY487tFsT9AQozKWBcX9VoyqgHMNuGfsYM8CPjqW8pyjMKvkdDCCGqyvJbjFuDjN49SVRXqv2wpcweKpPH7",
  "key6": "2Bd46GHz5oPi2BLi8kqSbMnYKdgbSXzEQLYniW8yh9eEyT5hVcv7XGRbJ5uefaVw3Pnq8sWFwGKLG4wTeHrBwnod",
  "key7": "XYdar58p2AYNmV5Se9aYNx9JhgEdrzTWoQPkCbkvKVUEzNHEcuqhB9w4noNwh1hPfFgegEKkVPFLBWh6rEWdEe6",
  "key8": "3pkmoZe2vo3dkoSaWMVLqCAqMz3boNm2wac7WwWnPc65MzceFzhsxQ6bbKrF5HUzr2mqo6w2BnpRVXvMnicwHiLU",
  "key9": "pgBnmEE4W32MDZp8xf5rY5gAeoFXKGXkW4qpByiUBhu6WS5viDR4WwxVLJ9xZnMiaPP9L2SPLjtaTCwMemoFfMi",
  "key10": "2SGsHMh23cqM1ZUKDbv38pbQLukqxzfQHLRTx6FzfaVszJ2TTvDVy2rWR38RSY18iQaZepPYMZM2grQFbKm5Sh4v",
  "key11": "5qGDRfBzih2MvoGxL8fzjxtoPGgxkmruWQS4rPst6h9QsWLcBd1jfDwjSHsSsurMdEvvB5iiKzENzFCp2c8ejKDZ",
  "key12": "5zSuuGVEoWhcE7Ey52tNqb1czd7yGw9JUjBzU43VMQ9thmfPkaAnvU8vFd4Bq6Ywdo98gpNEz9uXtugAdmTD7JMN",
  "key13": "6414XQiASAziwrxDMoG2CU2P4QSM4LJwGUdHkLrdd38SMCoeFExnbu3P6KFvzkwLURW6CHEVpdY8tgyPKejD1ios",
  "key14": "5S7jAwSoGFbEn27ZyogG6ecJX2wsnGjdQJM5jDwDsbdBMaJvFzGu39zD2Vo8uhqrJBYSU3toAgu6B3WPXATkZqNU",
  "key15": "5tbkAeyQi98yPDVi5oi54hhTv35idhAvhqu44zP5vixZrkMbuhQGWz3XHzhJCicx8L377NMMNF4v4DWwnBgbhDWy",
  "key16": "xKVtevntwkKGpz75DHJ1VtcaGUQ6rxijBZgctn8R1zkFQNnQzUg78rYsPKGsgatb1uBqX1pHjY9SnwMy8oQKCvn",
  "key17": "4XmZZTK2jDMZeNPDu8VRb76yRQxwJMfT32WHRq9JuBKxKSDX9LiF8vXBFPhjzmjGJ8c5TwV37Lh9pdCevf8Cq49S",
  "key18": "4vZRffGHGGQYsVy9ph1HwKu2YdryRfMrD2d2fYq3oETaP73UehBpqaYgw2FAf1W3dvTfX63bTqBrkGgZwW5a1Q8R",
  "key19": "4st8CUtoGL6HoQfyP6Vc6UkAzBZLhL5QznLQzmdZ5HdK8Xwvo8kjPU6vFgMtJ2Up7NzosVu8wWVbbf18frLigFJK",
  "key20": "4N2R3EXhczaTLznhwSEUBh5WmLwA7B8ReYj97u3GRLxaKCr7Wes56UzsomKXmjLD3VvfghiNuG8G3iAxn84Fyy6G",
  "key21": "3ZJoV4AT49eC8NwUdMJbuUUQhgwECpQmHbbTCs6QwuGZhPshSsF2vcH7sYTY5mWn5UC3PZuTmxmXV4y5CQqEUVvw",
  "key22": "WUo6wyFM8BrroBuC8q27Ntnab5E6LBBvnM9EoBC1VJGff1PJFQqbjGMMqCsrJo2DKa3AJotwHegYK6FPqAECzYB",
  "key23": "52burvm9KfGzt45cpPEa125zuga3s724qtkPzdj5oTYS4ofJ1swS3cec5hH7rghUEgwc7CogR7Fvc2XbmZBJ18kv",
  "key24": "4nvnaVZGpMMUbnAjsmwZzjaS7EKP7zbaZjdGmuE8zk4DBhKFV5gc7YF38y5gYUsmRC1sUpcmoBEG48C3izoG4JWp",
  "key25": "4r254VYimPCnjp8qtCvcvTPADC4KzxEamKZ7gDhQgaMH2miU2eFbsvGX6RbXRjG9oJwURQALu6guEjEhTtd7hoFv",
  "key26": "V9jVFWKW46sQ2YfC78mXu2NgPSnjJmERzQ4CTCYB5kLQuxvxQUHsgtruyBTyYWG9CwDRUK1Dk27HkRsNEgimwjc",
  "key27": "5WY49jjYyyot9Eq2FDKjzTdUtMJTTVaHcYBm5m3Zj6KadRYMkoSK6Dtam9JWDZCvpfDxhwHfRTv7XYSCUCKGsWwN",
  "key28": "2PJJkJGUWByuf2NZxN35giJbz5gLPmUSnfFYwGehv4NCM24otEm3aSjbkf15toFDYwk3Yoj8DRHpzhxbAketf74F",
  "key29": "51wgvkqy6M6LHwRofoLUAe3DKjYEDVWK1padwzExqUxsaN5kQESLrQzGTwA7CsggeCFsypGdgjVSjYsfUYRNQBrW",
  "key30": "eR8TEaf1yexLSK7KWEe7VNbeVvYzCdbpbNUVCoL5z3nwc3hYzJvzrnJq1f3GutQwsUAbFuoBHrL9oUEtKZk8C4V"
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
