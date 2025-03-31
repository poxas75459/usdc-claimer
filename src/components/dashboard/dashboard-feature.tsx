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
    "4KTZD6xpw8PUirMZtfNDRNaabBCDiWKvVkxk4jX1RcajVg6i9hixKq4ndzFnNoafuji4T6eUyotqoBbPHeZEsse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zv67WjFLCs4WEMxFdhYVvdL4upch2rM1NWDstdEDBd7q7SmWibmibKHW19JRraqGR8a7sj4Y2Ea2hYGS4R1s72J",
  "key1": "2Ygk8YmXY7hnUTRRzxbqnAHHBH86kHj9WHQXy77idktTSWcvXFtFN8TRHPhstPgCQmqzmb41LkxpZeFW7SHkJWhH",
  "key2": "64DNJxMZ6uLMr8fTQ4evHFwgyYVgVukoU7iYFTCzXGmQpEs7KrFZMbiucf9qb7fkVKNjXBvLyxB9LZpfUbFVHcDs",
  "key3": "4DsnSA3XhcuPnDALM2ubc2tCVsKoPibEQMgikoqypHYeSrnbA1MCDPf7kabuXgnatT25G6v1DMtCAt6HAMVKG8ze",
  "key4": "3afBXKPKs3gvXbBPomggA3uVhjtSH9YYDpeMKmRcgTyVhCoDjX9PuAp15KwRrcHY1T4rWtLPyTrz4QbAg7AensNs",
  "key5": "3y8WM2hqZHy6zRtkJQNjd2dibjkA9vMPBvNZ1kPYs4PgQeki3urQBEjBPT6eodqzL4FYKoKAAwm5DV5gUeYcTbvf",
  "key6": "3aBVX7e9ygZmJLQiPHsP5fJtoVNyByem86bRbNzbg3Q8PTc7xeGpAGukcWTSVSWnNem4U59TAbfqaKedTZp3njxz",
  "key7": "5fDQ9tjU3jBz3fspMAVVthuXyiGv31rA9eC1M45j1wR135ot8BG62UFiDZEqPqkYVRzjgUCaPLgpqRgVi6B9Yf47",
  "key8": "vBnfTsUUiyXktRUVgc1x8JXxuHRcjuDmzVwLpTYoqVKXHF7hHH1V9pCxW1btWkTRMjGreP1BnDxfM6iL66EWSkE",
  "key9": "2XGXoTYmVPoT1e1ayksr7nSC2T39NS7TpXkjfHy5kmfQWQSm5cqGpVMcgbQnxonVgC4cynb75Xek5bdVpph72bSq",
  "key10": "28VvoDHXxwcgiock1CY58FiQgMQM3NxosREHfem7K3GMQSgBkaZMcmc39nz8duAATSarq3W4ezwieyZ1eFkSwfCP",
  "key11": "4kntoy1yhGHvStoZyrubHzRijgZTNBpBZ6BGXEURjd3WizEwHq9J8p3yH8oZz41hSc8eekJxJsW77eazCuHtcB1y",
  "key12": "4oGHChntBHnZZoCksL6zTzgq8BQ8bqtburMBbqw9Edb47Sn825JBBQnppBEMBH6baDWnoWdvsDJJsZtHihFb9Con",
  "key13": "2awQUF3eSnUpddgZhvpQjWg2XSnFpn7NWC6pPZpgZimDHwBWHjcC18MRTA2YQDvekFBtrJJbJmZv3gmw65acPRoR",
  "key14": "mUmphLXyvCS7wYqfZg4fhWd4dsj283pRuHzdxvn5rs7HszvYx5KTHF2K5HoghKgsu2bukYg9NxBZwvAs6a1c2fK",
  "key15": "NQYuR7KMdwu9f7yyTBJSLJ66MVsNKCrMJmfzUDWBVfNE2w2DHyGYYrcu4sE2eg9MJgGSzhZdzy9m3vK7j8nNcoS",
  "key16": "5yrLjoiwJJLEr4dLny8GHcWmp6PjXYufCjZMUm8Y6tSYYtXYjFQA9hc9QLyvdxpDCoMLhL2KpxmRzebpK9978ayn",
  "key17": "2E67sDs4BsTyExmgbNApTrZEDGaYi7cC9cSv8HjKGGQJ99JYi5cH5WUZggmfFi2Bvd34nvUTg91vDTz7zjrmKY3d",
  "key18": "4VQisdbpL8Gkos6e9R99xdvnh8ubjqtRTnRcyrvzSeHxZsEqxVLZS7FZ8jTQR7ia3UMUWK27vpek98yHB7H3L52M",
  "key19": "48mvwJYpXHprpuhpb6t9NWGFELYi14e7hBEEULTtCKBwhUcTex1Pg5A7EgjHLBzaPTWotFVu2MRUHU6WtRYVZbCM",
  "key20": "3Eyz8aoeeUgHoz5cTCkTMFShAjUbMPs1SyvJXQiwD55PJhoXxNJbKCn3pXUKELyGJnoFYycwR8gcA3gtkRorAYCz",
  "key21": "5y8Sbss9VXNL6RGneHPPHyzMfxYZVdri1dTc6CDUpDykLAEA1pebN8qEvoHCXzbFi3cZ8DyqpcHuv1YGeYjFhhto",
  "key22": "5efomQt9vZmbj1EXW2DnUwAyfdKa9SimTNtYUcxGNsNgAeNKTZg6mZi8tUDjn5JW888rbTvQB1YHhuEJcmgMS4QK",
  "key23": "5gdeT1tMuE6YdxK9FypU6SrbRUbR95HNQFAL6LSMXE6u1zAqBVTAmC4RLiRWmtsyaKrfvv4Ui2oe6sG9G37aVwna",
  "key24": "a95xhqmmiQK3AwaSxM335Wc4uSMDEQbYBqKSLVoX5tS5xXr9AvY89GQ2siqZCa5FLbQyrScCeGtMhZbvVXVABL2"
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
