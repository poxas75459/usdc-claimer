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
    "3F6tXeJX1F7F6fyCmRLDQDeUag8rA227WxkdpKq9L1LqksgbmuxSsVDEbfvts8Y1koFUBCGd37pyC36d5w5kHgcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ym4odX7GQV7DcoVvz1QFe87Bx83qjU34cnVQt5BwUCBrzg2QPWyiVYMZX24tN6ZdFbTeabEDg3RwovWFSxdiae2",
  "key1": "2zK17yJC9fzxdnEnH8Xr3TNEdEJRTt7ELc9dn2CzAaqsm7WG5umAsxJnGqqBMiYQxiJ8eRLydpr3PX6uYHKE1ijA",
  "key2": "tQwzr76GiQVY8ayPkjunsEcHKFGow7bLz9F6Vfp3Q1prYbigsRD9i8MXNJRhki76ffdo7jhYxedYzkYYtfL55cE",
  "key3": "3rxyCjNqi9otiUeqHRW7bGdCgjsgQijcAFwEVM5wEWLiUoRyf2TLtjcoRFRhKSikx2fXs1DiTgwXc2BJQRrzRi36",
  "key4": "aD2P1rmyaeQebou5xSCwxv4FW8ktj66XcVZwzo9mUhowX2KMbRgsxpzbwJoqUznhB8GzGWoeRYvRu5hcsdjriSA",
  "key5": "2spDGrjSx48ygsWW9hpCit3D4iqQmCb7TXPyjMEzswXRcMf8gUm2mzEfbLbDVBuHKVKyjzp1He7MPhqDAX7toNwE",
  "key6": "5pmxaaQavmLgLW1SLBGNQQqTQwmAKDQnyeeLMXDFQBuo79C6xeiBBvraVaMjnszPddSb1VgjT3GziM1MkCBHae5K",
  "key7": "2YjVguraksffVWQ1yvi3UWwxuN3cyqGN3xB1qBW5Nu5yRtcK13M58xqR3kWCHDaZr1TyKjZ2Qv9TnXvthGcPDABP",
  "key8": "4Vxp9p1GvYjxNgDGMzaLqr4Ei6SbwvLx6LJ8GwH4bZ5ZArCHNdnmTNRDQc3AjdTJaMMQzSYhsPNuT3mwe97FHtBy",
  "key9": "5jAkpMZS4y3qQvhmj2ap8dq5xxzLkrg6SomUvYUULwsrznesgtiVyECxe3V2hvdEE3A5b7LJYhKsFoLd9akjpMKy",
  "key10": "64RPw2sxYaJwXLm2FAMuEAf16KJFMvvE4NtpZyotdfSBA4uyAN77CZLob2Mjw8Lg84CtBdokbaNT7F8EcerDCBLS",
  "key11": "4RkxyV3tWfaUfFgQzBtbFiNP5ZaVPvV6VVJeRR8D46PgAG1mZqBcgqKMYu7uUqMbMKSyKjXcmezQYXR1b32E1Yny",
  "key12": "5REUZdQSJoFT6vr6rtr4spBjv9UX9SYUvK4P4cNpaSDvd46zXXQxDZbVB6oheeGzfn4AKEtjfzMJoxk8jEdnH4cw",
  "key13": "258FX5varRoyEzd6J4yeCXxXkjrMJof4R5u8hF4TFnyRPR96pQC1MqKd2B8hNkA313B8XFPLkSNu7zAWUTaok274",
  "key14": "2Kg4fpYFWrnFyqaazyJhMwUrVrpt6U3BtivhfELVHaq4Y2SWQXFeF4vY5zdq5jFLX5qKteJJvGtzvQzeBQCxUP1J",
  "key15": "4yj1K2n4MBFd7QvcY8sztYKgU4pF3sSpkmL5gUWMAdKW1jy5o8G3YeioRZWoqXT3tw7eppjKmJVAcWwQWJSPrCJf",
  "key16": "2JYeSbcAvJowNRap3zyocjinfdYUUAiAPcsg4ACm1UNFJXKxhsM2Sca4E5GkzuuiUmLcTyaTYsQcwS97Fx4HNEu2",
  "key17": "YLtSY5K6qkJSHYcomESqLRrmyKnFRbURw3EEsrZJq6xpuHKSYPqs33JdVtK7aDfQKbULc3VYbDZnKdwpf1vB2Qm",
  "key18": "2U2MDCwCnZRpiDbzSny8YNxScYyqBG8njhp1UxbVJS9QDtxnFPmPd6qBjREhCMdxaZvXCQp5ZQXtdfXS5pQ49iZk",
  "key19": "2pJGh3a5V7oBQ6Lb4qafitZHQ7q3QNsG76CAQ9TH9tPrtcQNoWsM7XchAWwsHgsgQXdwo5YoEkQYPnUWWN6vGKiG",
  "key20": "4dUmnmrxQjuFsKW66F8gyyRhD4aHZPZJ23S3vmN28SfEeWdFZ346NgHm4CVe4ANrGgaPyRf2Crocta58tHNpq9eW",
  "key21": "4p32ZsFzdoFXpDyN9g7qXdBpDWuxB6fXbKJG6B2v2f27x5AxoQ1mkDrEuWNftJkBTHLG4QkbP2QQAGvPUNX38R55",
  "key22": "2mMKfByM7Gc2q6denFJ3GTKYcvN5KrpAmNDfa1SjG2fF2CF93kniNNiowqGMfVt7JjX5HZWDCNEAjTHrxYa7vTea",
  "key23": "64gxKRNUUYUcqrj3u8m8U58zCLDdnXe59poFyxbMUA4kQ5eLrTtEGVdVytcecfjN98squTf4UYYeJVYBqNoBGd7f",
  "key24": "3NKLUqtYoEn9izZtiJrahyHfxnTRomR9pbMG8aZ2trEwd3bqdgqFX7wSSKAEx6xaKsFoHYgw1GvSq7jRLf3jr4Ej",
  "key25": "5zisTmG9RYBqTPj2GDzsJb7EPvMbuF5s9R7GqBjQNG1UJ5EFaMNjmfi5qGXTnsacDXxUBFNP4KxzwibowWR9isB2",
  "key26": "4bNa3nXyr44sL5yBKLiNLuH88NNngEfUcmGaDbJ9eEAybEVaWdv7GjU6A1iF4MhduhHJEAtTRtj6jKXoUFXuRJRJ",
  "key27": "4waxeaabRE6dAHACPKVzHoBnXirsqCGQjazdywmsCgAJSafAC5K73JXN8K3n5ygiAcXtQKp7QCd7cmaAcFDktshP",
  "key28": "5Fm9ovHk94pNhBQq92WFg1pD4UocEFEKUnoTKSvHDVRbKx3NLNwj1obAy2zuoT7cXzDyYkPmvdG7Rqs6ZE22jurD",
  "key29": "4emeaZyVVrU3YrHmvmGYzXFhtbJ7dw94vCWNUCXk9zGYKiWN4WkybiCuv6M5u4rq5eJWTt8Xpaa9kQy3e8zXGoMj",
  "key30": "LKViNvv6qLmK3MkU7wvHDpTC3eT4JbDy7M3G2rM2ZsvgooemaPyYxCt4DQZerjxsdYLtfq7GNL81Xvn9gMDX5kr"
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
