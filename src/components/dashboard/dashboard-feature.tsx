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
    "2cuCS3Q7FEeZVS2LRecBWkyhLZLw2FrvRC6JbN75xGgLe5ixKdGZBimJUBkFW9QNjo1spDHG7YVMPqCEkAPNNwuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNLGtCF8hzy18TLP19dGgMsH5o8yRXs9F534UHVsrRCZn37KaGfR1uftbTa6N5N6WLwntmEuNYRCYsrLMX5cCbg",
  "key1": "2GjxAvEqj5Jkg3EtuqidhwnaiB3NLkCv3NLuKScWLnhzZxSqWYPwxrkbW1uiCXQw1bmiRfwDkshkVZWVRfJp493u",
  "key2": "2bwt3u3TYzhpQbijxbMAzsSAeRykLSVsVJxkTfihuSU85bRK3QjM7basseUUBiBQdjNSi89YNes3K2ebvsj2wrpJ",
  "key3": "1SngtdP6Ab9gy18R9KG8JQNbZfKNZaiLopuRyukfo81unEhXwMuP1f64H3MaxanrE4rhMNmTqKp3TZoKQBiqb8x",
  "key4": "KnYhmPPNpJbA6njZY1Aze5bd2ZtK3MHhaQJL9X8ww8og79QGFfyZEUVvRb2ehgSgNsyQy7wtXct17KVTB2Pv5Jf",
  "key5": "U36L5wYJztj6Pczar9UwCY2fMKUsS81CQ6K32DY1mQVGV6G6o1QL3JeJWdN4wpdfApLNA3KouTGtXfVGGxeD9mZ",
  "key6": "2nEe5h8fFgVYr8xS3PRV9RWX3DMedq4ZWjrhMgZs5zGhv7YxRLdgL4shL3scf9YcYXg9ocrnR2iytMSpFEogV9d4",
  "key7": "5rsWvXmQSRuqjQBmM3sYZ6CqvkCHYJ2sTwuP1maPNpBx2rVJd9aEwUeCfSntjZkpXXEBuUFe52Dx1rmJQXcMmvhi",
  "key8": "5L4C4cJrHd6CowgsPuzbsciZwsMcpNJKn9nFCU9mkq2pvJzZdTeYifjqzKi57eUH4dGHaoRAn1DrXuJDNYjZ5hze",
  "key9": "55ag8WhwbgbgckBQehui5TzVDZEZBg9wYnoDpzaWLqiSP9Vpw7wAKxadAKfUjA1m4hpGqxZsMUVUnePzciqBQDMP",
  "key10": "2JQXpmAtbDbGMsSDYZ2QVK4cEFHbmu7vPCvzQCxVtNDx4GpFsvHqAiGYrmsjcUvESeAmU3BHoo7UGqsMr3EpXkMU",
  "key11": "wZT6MNnGHCsWHdv1VMU4yRbm5UaAxQCbYukMcYdeNtnMyuhrPr9ZabygzoR5DEVUi2aVbXRmrdNdCRNToPqiDDJ",
  "key12": "FnEB5qkrWhVLLJxdzjdr8k4qyXCKVzEYKGTPWGSvwq9woR1ct9PrJ7htnF13L4pDakLKMoiSKX9x3UsQTQTjR1Q",
  "key13": "5q3VLxyoqH5XgE7x9K5fhV6foyQqdfrzszDkGmsJc3hEzmtZF7Gt8sDY2izsBjy2TUfRqkkyUa891JJWMUQWFi5v",
  "key14": "4b2Ym3mEvdhSnSYRppfaG2MmCYhRLzK4vjL44fkyU6knZrgMSFtxaum86a7TF43Gd3fRsdTTWZyrKP3JDnbxfzne",
  "key15": "2MwaRfwcbmsYjuDhwPMuUQNXzaWjQDLgX5CF93SAtU8YuRM78jnSbdTc3RPNgdRqwrWh2rZ7udJs1HuR3FS23gZ9",
  "key16": "2pNLvp44D1WEFKhHh8pJL9Bcvg3VGkimBJWp7Kc2uDjzATMTvfQXHCFoDpcwtbnyhW2QqrDwV98oZP4WpbfnDNpT",
  "key17": "2VpcBH6rxcSKUuy8sQQugyhxpUyL7dnfLWUAZv1Wk4E3eKgJi4Cp5G4Z6jwdXGMCxYwtyAMumYs69sxniyraLh3E",
  "key18": "g4DaFQFkPC9CWV7mVrU2GGXvnh1YHZu26hTMoip8KCNRkGjsS5iSitWLYgbKjmjPuYHvXtXqmgioXZZtySKtgpa",
  "key19": "4Zc88o3QDq17Lcac7dtdBR9RDchVNk7ubn7FHZj2LdKpjRtCGYoREZkr3D8dtMFPoMMdtrCBSDxTTQTkzE9tiigK",
  "key20": "2rVxKd1Ufry1GYKTBt4sHrKKzgmgkNcC1eSd5wyup91HinLfqcVfvoBNDip4sZVpYrxgUei1DcmKgXnXLCqWRRWm",
  "key21": "2JwCX1qwkNYnp8GMSeQ6md3ooak2vCjv9udT7GB9fx5T6E5TR4jJH9sXMiUXU8ewJp8oMwQwXn5a83nU65cGvnLV",
  "key22": "kk14zkLTXNJuzoc32vSGJFCd6oYnzaqdCxboXRKZDBsEikowrRjQD1TegbCe5y3cVvcn1mSKbwJcQorDZLPBwoK",
  "key23": "LUdRVFEBf661cgotM7Lt4yQzJApCqEHGRd2fBXdDrUWigeh5dV5LHPEiyHPSQ19ZDgPZYAzWugyV5PWR7VycEbw",
  "key24": "5xgTXona43AjeQACB7JqagG8TVnFXpDM11HEgHgyNeCHoGCw5deYvrsLFQr9bRVuz95tzPPqTTZTU7Ux4bzphcUD",
  "key25": "2eyEKbQd6szkUqyf3hGv3Ptw3uE4h7h7NWLY2UjcdTknghPKj9SVxNW7ngQSYbDLQALnrgBVxXLXUPLTfsBzhBkG",
  "key26": "441nYtxqAfH1PzFrE2gBNscvrG1pZLCV3u9s3pVMWKH1hmJN7zBqVZBNYsB7FXMxE6PARcjTxPcYzst5VbpjUZaf",
  "key27": "2PFW2HNm7YueNYNZ5qX5hebBu8JhPsMoqW9B5LoyzhBqa9Kq2XUEkVXVMbVSkWTn6AJmHeCyEgw6i2LY3ZRgRWfm",
  "key28": "5jetUHz9wZSscyXkhWEmF5qbpoX1Lc23oKiiXtFwAbpBNGHWFLMhEEiaBUqqaX38BFhXbjK1DmbwczqAG4U9s9Mp",
  "key29": "2CrTTHMFDLfemGnuWcLRYk2dD2b2zTuPAXXQEBNCUkNnFiGcKBvt1LBdeS87pENeHnjogLnnmsLRZd6semNrcJs2",
  "key30": "6fDBpxqX1XHqVbEFbzP6LdCY4v7gVQGnBWM6eyfJ3PYWrcBgvvBFNo2rhYdqt8krTPRkqrFfo6ZhJVWufsZYV13",
  "key31": "zswRkk7BaGzNfDXhtAsEK5v6GDaXDB32W1k1qM3411bQAJLoNngEuUZeRLCxfUviLtMzapZ67iU3z8VK141Nurr",
  "key32": "45vhECV4ERgxxTW5PBBM3v6sLX3DbfKgXqZxUsaiDvJQN2czUTGjNudicNDZg5K3TNGTeo538y3jh6e6yUrzoRRH",
  "key33": "3VV9iXchB2vqvDaYSfpspQMUpdeMy84uSoaX5TF2MDnh1xhJLsnVcfqKpi9Hedz1eB7Dv3mKRnteCQQErdw5gbcM",
  "key34": "v7ajtp6aHGP2CSfUdNvVEfKgEo3t1VYed4kv487Xi6zbmm91nAXwDuZwNec7yyquvmUwEugH1SvaKJgJmBYbtZZ",
  "key35": "2rPPtsGuApWg4BMJcR9XNvXYpy6Xk8oxYaERpJC1ntHQAFU9tSCNCJ2VYL3tJGuTQzi3vn9AkmRSsGZRVcyN7v8r",
  "key36": "4gLyit581QJuGfViSN7DfY3ATKRbBTw7VMZSaQ8cpmBjzbahgkWguU2ZMz8E3G34UpZ6kaNmvBx3jyrDs1qY9sZB",
  "key37": "5qrrf9ntHRHkxZrFCxyXWjr6SXhQg1mgwNbRAig9bdDuVGqTpb2biN5hMiXJbudpYtbX2SrboQw9142uEwLbQU9t"
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
