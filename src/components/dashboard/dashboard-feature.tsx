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
    "66ddh4qPhAXbrEaz3GnXB2SyHKauk7RieB1pZVjRNsdX8RWWoXh1DAmcuhRGn2nWiK4MN5aE7vjfsUCniKdWLDS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cn5LcHjJrJ8LPsdgAoNCUMU4VqaX67rzvfoa2pY3y6J353epWhXCf7LghL21QR3BSbRC6tC1HZUCF71G59K7SJZ",
  "key1": "QYSjMigBz3YKYWuZrMzauh8RhJ6JG9BGov6FYaA87DQ4WVnnx2tDXyyWQm47NpYKApsfgpjdVqiXs7EgjeAiCsX",
  "key2": "2TjiBFAoxnNvbvfsWnASxHXwD467gAcPWa7Wb1yLgNy724A9XLYJHBRWvcaYderqAU2jk98TjcDPbqV9KUDpr9SB",
  "key3": "2aBaYTroANiNrmiE3gj7kgBnawzKsg1EYfN6hB6Uu5kydmXgd3WocJ7cEeT3nkEdWKsQMVJ7mMe1sBrAXL9GsUb5",
  "key4": "4jfmfoiGdsnHUipJsZ9Q6yWUTbYDsMLMiDLnuCT7De3jofytsAk7g794isDkwuSGD8J3BmnYUJP1j1W18JHFH1oa",
  "key5": "2EYMBMkVdJLC6QB9LtS128w8Gw3TEJPcMud8PUisA8HefwNuF7GUp2yNcs6zTYtndK7kSdDZoRQaiGkUeXuihT9r",
  "key6": "4WCokyCT5bGdSoGpWnG9oBJWsy9AE6LKAVBxh7uUywToM245sEDbZKb3c9xLaegpgvWm6WPfdJ2XbBfq7uwMFimN",
  "key7": "oPV6QwVppDXak6Hwg9gk9kzkvajpFzLocZ2jtvWGocRN9PtYM71KJUygFshPSQf5fF5tEf1ZVz9tAzi84vs35rc",
  "key8": "2p8uzmMXCCZzv8LwGgrP6cSTmiJyvhHpqVMHLrSuZeoL7WqeaU451xuQWGv7WAuF6L2u516bmEfH7fXEXQjwHpqK",
  "key9": "4mmNaJifKh4Fh3oib8kC6Ym8ZTJTDFwwzjtPLmUETcUrgxBrkD1UUgdK6jxsLXSJfBegD3PkkCs7MmVvP5NQZUKr",
  "key10": "41bjHSKZ8PJp4oT9EwKZmgQBsp9apTqad6e43P79kwTQLmDUDy3jcu2wZJ98SdChqv3cRhqQqizTddQyXmpypMVw",
  "key11": "HxcMJZc9exKhihMme7YyoJ27geLAAdL94gwYXS441FhCJjvi2eESfbytBGWBcWepZg68ZLNMpBRU15Q6mJwQcw4",
  "key12": "3X4rjzCUWX6RQTeZvP1oPwJyFEK7Y2YH5fDoFzqNCSonjwXqBArBmbxxhKnenYuqjq2H1iEymG8PeUmqHApemeBx",
  "key13": "3dDPJ9HQ9WEk2mFFhvBS6VKeHpdaE51zn47U6FLdE3YxD96WgBXZ9iCtsk5Nfq8Mdf9h8ZqixFpiCT8A8mUmVSVj",
  "key14": "5nTzwyAZGARse3m9DKGziD14r9y1qFBanjZ4QXiQoVwBS2i4kQYPTDw24JYBNdCQDioukur6k6FUYWzNo4Nafjrt",
  "key15": "P7mfFMaDELMmC6AQHiFQuDdhZsypr7y8CJNmyCtdwpjk6mQr9GNpKmqQbxTzW3r91a9k5LvCoBpBWHdJRfDLY7J",
  "key16": "bgFmT8RenYDmJmRZMw3LQZZq7JUiVoms1zaWjBFqRTvjRK5Pt5DWfKTxbbGikJignAMcVAxH9pfaLE9NrhdjKYf",
  "key17": "2WwiappkZKakDaRC1kigBCh6FZg6JFKnUDAkNQdwTbD7o31vUY4TJ4h3c1y4j9YZFggNcdptfVP5u9ugzGAFQR3Z",
  "key18": "Yb7hJ9CxEfJyQzdPraQHfD9weKcDXVryfUnVK6FMMxEmxTArhAWiWUDayheKNz88867i9oShygbPLYWbbMRn3vn",
  "key19": "5tcfgNe4PXEWEL3FdUwNNWjtNqW6Rw68237qPraKjQ5BKkdE17k3yD8KYJiZzx6pQQGQzVRbhFVXUaMZz7kkaqZ4",
  "key20": "2W5EPVbFnyuRNUyRYR9kXTpfxZcyu2NT8XNNqhy3qh7N1z1pFMKcdBM9siRYFge678HFvkGrv3QvMqcuhm6ZyR1H",
  "key21": "2BoXx1VHyWpervWojhzMsRaUcnTbpWB6jVeWM4wzo12JqTXcjVHHavWM5SpdHr2C6FD1kZAwLk36XaJeBMt8kJFi",
  "key22": "5xBgvcUEcUpRvXkEvzm7avXfKSHgkBa83MYW2N1eYQs1rDo7JA1Ubf7bueQcBujLwxUWetCftAcvfWfh9FLdMnwn",
  "key23": "26bcPxtRfvSoTTgNWDAekwSmcTN4cAaEJ8kHbC3ywvV9FdfZCHKqr89Q4F7CS7Bxi82ygCzDs4bACez3NNAQ3ATM",
  "key24": "3yc8VCrudXJPcRpHMReVcnq4DoU6QD1yocGp2otjRtzt94RYUgw2pZ3cv6xst8QPJR86Q2NHiHfH9PYAaWTHUxko",
  "key25": "5wjcLC6C7PVikv7oKkrjrWji9hA19NUpHHU3YMzyt6CguA1WENni4hQgN5mxT3KQJ7T2VQzLgf1ibk2z4xtJ9Eaa"
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
