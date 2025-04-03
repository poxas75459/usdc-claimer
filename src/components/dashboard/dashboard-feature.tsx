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
    "mDsK3fAjhjZqAcXdDiSujgwSVY8RX5aqnmSpRVNRykweZoxqvdFvpTf1uvFncmUTHk7p2fiBVwW2fjHKAKDhBfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJDmQUooiqJetX53gZAUzyGpSaLQ3rvPzf7DYh44DtxXfkhtJTPkrfHLFWE8GWGrULKsSzkc6d4pREmdpRjYbPR",
  "key1": "3eyEGGiW1W6WFiiYLm1M91kA9ATm2qRQmfG24ZTcg3U9pjNKhRwNoen2aavZ2V1o16r49GDJV9ozkB7bxmUMWgaR",
  "key2": "5Ut6VxarsykXADj8591WChR3MP64NChgrht66NxnfXYe7bN7xQqowZ5DvbnC5hvW1UYzeofQVsdtjytMfNEeFsnZ",
  "key3": "21ghtu2WDUdPpsffGz5pnGD5tDKqLSdq9QztGupJLo84inkzamazaGSgmiBVqw5b4nDz5FxgmGL8ETJMn9ATTqt4",
  "key4": "2q2zTidbLcY2NcZUFgYj9rttzYbF9jhmsuKCThq8r2YKMzwccLHDpwG1Apjy9vWZVmBhMPog6TTTpp9YQ6iE9wWo",
  "key5": "4EvcYJ6MRqTVqkwm5vZPdsyezCYYyfnVQiUWfxLhyrRyrkMbDX4W5bAqTy6nXCXHokcak5vUqYgeWSMTmuxEEGKL",
  "key6": "2R3VLGFxBFygwiUUnsDZmLvrfokdoSqwhbbeoGvSi1WhgxDJMQDSbdiTE8woxC3HLX6UYKSchCchXiSaQXynu88k",
  "key7": "55GwxVUEsRZ4r47XLNU67mu1Qd9xNjNx1xp9QNxfmsb9Wsnn8ZGoNGEncmLNbMCiXShRYdxdxBdjeUzaj5uanSVZ",
  "key8": "3xVHuaS1p1EohZJfVuEffffsaLQfrBfNc4SrtDbj7nmJ1FUSzwtnTGg66kbA5KQ4uUrK3zzqPm6YqdCfVVETHZph",
  "key9": "hnjSKnfVUGwALKp23iE16r5QYmYzpr8cHfKNtGuE3kjN8UTE93ChFyq53Npem6CBgns7t85nJnKvM2vtNbXpPwy",
  "key10": "4Tn1VLFSwRmKGJUxHsK1V36mgvTwJRMsTP2BfzEHbUGsnyC3V9Bn3Pcruqy2Y3UzSiJwFNuaDqCFfyhEU8VWgzAZ",
  "key11": "47dqJ2s15iBD86YqwmeNUrHwShqeZiX7HrDEiM26JLBUyNjMSh2LfCEVKwfQAHzH25dDtzFMzaERwE43hVxVt7te",
  "key12": "4EJJPXwgCyaXuEKimDAwuCiVTUQJLTYyUKY4CwRvNkqsFbsvnAi9rFzvUTxc7htH3zBRE8RHei5oBXEKCx3B6gXx",
  "key13": "3E8dbxdLVENGzqpZFBWurHG3aPrrBAw28btrTcU6Zt5ocoP2C8MUJmoKkcjW21YLhW6zSaZuBtto7sw7Zv8dLkUA",
  "key14": "3F24SgqaWXvBioZX75sU5DtBdM13UFunmyxRFHDJPP6EE29gAzySC7ZaWia1mXrod7gQ2BCAPzfBGvc9a2sNw5CF",
  "key15": "EjaTWZNQf4dzY4DbTJjo4VzUtLca7qEDbTtcZmEnJ9Eqf3FAWCtx1RirW3cqybGMtBpGHcJ2defQt9J1CdnhTkG",
  "key16": "3ow9R6nGJH3T17C8vLt4JfwofrxUQdA2hNhNVhzJ6d1doQsuHnmG5168k2U8i99fUkQ8aj9o5hghPEUEZ5ngaa3f",
  "key17": "so1siW1wbcyNCXZ2pcMnDARkfGkcJf8V7yDk23R2EWfZBeNaeof5w9ruMNk8ntamk7RHBHUq1wnD6PgjieBoe1j",
  "key18": "3N1a7ETYzgBFtx4PfpbNYSVBD1P8Bgp8GrB27SDL5sMCmmTq9Qc5CdTMA5fJcQuVmu4n9SqJ3SLtPzzAphqSTdzi",
  "key19": "3An4qF4zRqEDHi51MK1ZKHeFakMu1vnD4ZWEAs9VRExGpp81eXwKoU5TS7upmL3MGcRjgUdTywAEfvtgyzvHQhdU",
  "key20": "5Bf6KDjJUQpwQvMe9xoBTygeDGUhRQKHLV8E4UHALmv9jP38Hafwtdo3FqiRDqQtxWp1HmHBTZxpntmYwDwrw3hb",
  "key21": "u8biLUf8qmWZHU19TVgzCc2azbr1bojdXoCzjJmhCXdo47B94Yiqyp7rNKCXe72tUfY3cQmsKQaup9h26wgQwXw",
  "key22": "aRUv56PvMXeSaGyLS8H442AnWDHcCi7WCFJBvUuHVmq3wx3fKeTuPnjzvNTFDUK4BQroZhmP3KDh5DuWz37aCwm",
  "key23": "2ycAZvB4YHekiyViYcFvp1PQost33Z3Hgg9dz7M5kE1DujcF3xiRmatXPjUJ9sgSqbu9Da6yuzydEUj26tEAXbUh",
  "key24": "4AzV1dYyFYHTB7tSq47F7xd7aqRgGg1tkeWEdrNrRHfGTHy1hRb8NpsmpM5WFATkF24FCohdQWop4vgxVAb4Pma9",
  "key25": "4v5z7epjNp8znmwUkFxDrT7eryvExpAuj2xnRPEh8c8EpavP4B7unnUnbNCFDQvVVWYBkGTt3cdqg9pHfJ2woNna"
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
