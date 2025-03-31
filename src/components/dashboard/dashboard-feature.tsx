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
    "5DTK2ed2wZdFyFkL9JJdKyexXGDguc5qECHpVwC3rXZFNmMqkh2k7wenVSTF4gt7VXCw8o6gSmeqK4cPTo9WAQ2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enyhMNyzZ5FzMGyNWbsnJHWvy3VihRpquUjtEG1ath38KwkoXtJszMLGEumW2Lk3wDtM6DcA4PHjaAHchzommnS",
  "key1": "4LKhvtyc56ewJ5rWgxzixS6TUHKdg27kQg3JWPuUTq37o996fgtPAmu79qetYktLtyCdB1cPtU9TUue4UjYcBKbB",
  "key2": "3D6SqNyrNjj7Q8JiP6EQ1cvq1HzYyAwYnBxuncWXZLE7JDWDpucZUtNWfQZWcZdi5ZX8ZL8kAa93JXsuJQBQKRaP",
  "key3": "4X6T4ThxEUywuhjmDXVytwz8PTuzouZhkUUbfszKvTb4SvcYJ1ykKiKp6Nw5MmMEPa1CXKuLapQwHgB1shQgtWbB",
  "key4": "31C2RJdpFck7tuSerYaz1JrmAMpwZSHddBxCSkP82AESLeALrQ3gVsPRF4kDCYpiFfEqxA8vBrPvKdtcoNk7YCys",
  "key5": "UyDjJWkNji4rvbY1qSAkninBndJUgZNfz7j21SNEps5kZDCNizrF4hgAnLyAo7s2Ha4AkbzQmNbUqu2rE8WDy22",
  "key6": "3hYWfLtZPFyZPg5ri6hDm75E3Vp83zTAUp4nufLmzxUjUmGbXrhX9fGXn6RQCkHJNbWzGsdSUY5YqTNuaZQvmjmt",
  "key7": "SnEvftNpUfPD2kp4FAkgX2VdAkL4JinN5muPH8tCjKKeUmP66Rf4mzL1asv7DgW5dTvMLusQgvSP1Gn4aQsHC9f",
  "key8": "3GpGd7ZJJdCqLHgGNTG1dShgaqyVp2zJMkEiVkYovJB6zNj3GKSvbvdELaXgKYfbSsxbZ19DqNXwQMYkfsU5smVB",
  "key9": "2xMYGmwUzW77wHk8GYXzf98RU4zS5QccP8SZBbbHNcqv6AvWmqVhs1Vnqsuku6CfR65xhbJ2dGZj1qJTtaPFaGdX",
  "key10": "i59Dof951EfHC5hPad3wW7ezCAp5RFAnKXdumHLyJBb7QuHFK681JzB3yHWM96JakdJJZM4dygdi6yKrHwkrM29",
  "key11": "4dFTfQ1k1pumRJDMLuNhr585mRFnYxQaFhP2vp7NmveK1qc6yFxf7hVfqYVJFcAvgbdCDoojaZFc5F3Vq2tD2CVa",
  "key12": "65upHdUKX8sdCu12d9VDwionPHnH4DMHei1H2oE9utsWSxWiQeFciMcJRq1KuMrb3ktG6BNkFJae5bi37BJGGBxT",
  "key13": "4sR9JPyF8mfYLtD7VPk6NsSJgkk2uHpWKNsCG96geoKBFWWyjVG2SyWcQ1cCXgtFq5FXxodKAUymZri7BLcF7dEh",
  "key14": "3gSmeq4eruezUUJjimTenyhZfLzDB5vgXogccfiZ6bUdYCemFjj4ejPZ3j8JBqiEcfZhmvQskeihqbhPuuAsTdjx",
  "key15": "2Ts973ZmJZuFXpHiksfLziqfpVTkfLoWmF1LaER4eJAesYzN2ZnP67rLQ7BHGBYsCmeqF5JenynwdQRw1RFhioBH",
  "key16": "4kKEDLeSW35HXcrhTTpdWTpQQg8nShW26Hr3PjNhetmmBSdhKYZUfNpMC9ZxkE1rKqYceh1QxkfnAspfj4kJsAZx",
  "key17": "5J8Kuip3Nynd4TKxboXLnHgtdCkuUYinvdCTCThPfdnL5tYm6skBFuwDwTfHLLKgUQEsvZ4gaw1Pir2osrUKVMC4",
  "key18": "5AJdwfBbbUrcKCNd6UVNkXhPriaWtj9fHCWMpExUFg87DFiFg2UGy1r4J4Z7MXSFSZv2r55LhbSRt1naRfjWP4d8",
  "key19": "5w88nKpuVEFnrP348Fhde2joe8SEDXdhBTfttzNmba4w8uJPfZuPiZw4qjYhZFoLwJwvyu7pViShHRt4rGqFS6MC",
  "key20": "Vn7eMn4AvHkinj3gRVYMVbEZYUrXPpHjt5zfCvqsjQz5AXuzDvQisHzZ99r5rb4Bjzu7JPTH39CQbA5c9t9JW9m",
  "key21": "58ywfXVJqJFJEYgPuFbwfpLN6FYuGX7VhG5EfF7SGmkBa1H8TsguJiAk4xLH4JBVFPBMcezPmQPBaxyZvNUeiRms",
  "key22": "5foKdbDrNyp7Kb1eUXSeTLGNzUD8vY3xPpVHBouE9KnCMAk67u7GnMD5dFWEsmDS39rin9EhEC2bs5Hd6cHkUt6F",
  "key23": "3KNC9RQZmDvbPpE4jTjVhdLct3fyBSwC9RhonCNs3Ms8inV47N2ZVm3VYuisDprNW6N3Tuo2GNGt4gFLrKnBq2NG",
  "key24": "3cJGWn8JAzyJvPKE9QWQSYtFAoyHXVNkTMRbWYzbzwUfmGE7qSYMHe9niAYRduYcY9EoTZVwfYmrwM9q9zu3oiaC",
  "key25": "5rvvxZX9NBGpSctospHm547MS28cD15STuixcC8TghcXCm65QB1bXfq43pfrUNRYpXaEgkn7evSS8KbxoDhb9qY5"
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
