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
    "3sEQt4cGo1CA6ASCwWn8vxkfqGHMDatxeBtbEWkYqDebM2uWDdyKoVA71FEgo2Eq2oEKg9QDAethNSLrpmGDi3PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RWCDwREpiW9YzD65j6PRe7XCZT8Fj2UYLAvyqcL8LkNuNEKHjAUfp9xnFe5bkoHxGcUtpTzNrNtZuuDMGzZkwmr",
  "key1": "4HrFr5j9SS1uS6hCmszYFEy6ShcXvsfJaVYxNgkSjashGfwD6iTVZz1LG7i2DxWHdx7zpNStdyjEWoF4GhLnbcmV",
  "key2": "2jzypDA1ej9akpn5BFLE8DRPiGNeHacagv2xy4mgfGZ4XczMaRv5iinFLdddf8aJ9uxyKwffUyvHqxTsq3uxgZD4",
  "key3": "63FFbTpTwX8XaDVi7RcFC2ZFuYgXexmwAiVAzsNtgvSyUjbmCAw3xo1TQRMVw93BMK7wJV2jYYF6FAVJqLetBf55",
  "key4": "5ga488e1HoU6Z9FZS1tmVaEiUqYnYqs7Cbo5UzHW6JrrAXhDwtoQwq4D2icMUNZLYtbB5vpB11gKdmoia8pWz6TB",
  "key5": "39EnaxRdKJf8TtT5HfaZSpLfc4QhCbTowaoQjZXS6b1emfC46ht6SZrFN63m5sQNrD6rm77RwqR1aob4Dzx2Pp6y",
  "key6": "2mHPHDywh8jooTxEq4AAFVzEoETjDVHXuWPviDFJcNn8XbQ5yo3viJ5h4PwuDepMUmWp57EoMkfokMAgPRXpX1HL",
  "key7": "5issFmup8f49jeEjXk7YdUQwEE8zFdDeVC4NiTE1W5QYQiQBmMSEaeRNB4jJvrrFq3wYYMwP8xjuM5h7yGrSXaSc",
  "key8": "7wAPsE1oHqotuZnbm3WzmLCrGPmCgACZUd9WEU1y2CVfcnMW8nMa2BgySgmbY4Ymp1tU4sveNY6d2zuw8bQJv6p",
  "key9": "vc6SvNoPNJoay5LPLphxAMJNa3KrdY69T7rFjN5NKvLoSabCLXJGp42f3yo9841H1htMqaDEhaXVqtcXcDRHLHZ",
  "key10": "3AeuY9ChZY97ZrZHYLu4wJfUEHNbPTSqFwRzztFFYM2LBJFHEBhC5MFy4kKfRiUw3XMcdZd6BwHbHqxjS61Q7h26",
  "key11": "vH2mCPvbvmss6NX5NSM1xsiwgWxqvsxsss5F6j7G8DhwwkC2sJ75Xw4xJLy3z8GfWg4hHXDLkg6WLMLvFujrWbg",
  "key12": "5gkeuc1bS6Ppy5KKh718a173pG5ycNfdgjBLhYfZeZiiJBzRLkgxeTSvq6QSFKcCHHEsmWr1m69p2TV2gGWaGYiK",
  "key13": "4tk84qWrJEZb2HAUM81HVuqjGJVvH2fco4LTaMiULeyeTizWB1QwzQ6kDhpYiXJf5r59X8X9q54aN7YdoQtMsnu5",
  "key14": "66chVBmyzFmxoZzAvtv6RDTN1ZCLLABoWV3E88XGG8A5hWCks53d3pH76K4bdVmemoA86L3aToK7cGXtBQyANxxe",
  "key15": "2b4zvW5V32KyEiiiqHo9xy8wZT2f7BXGe54cv1mZBpXwuTmHpXaksdwwcv4z9WRSC1SEhqtRjPRTd26t67qqGze6",
  "key16": "5sStURaV3HpMgKHsajQTBHG698GtrshWZaptaCaW9QocFWYZ784Zm6YjpGedWWtbqm1uyKnNqfT7GjLVjWffK94W",
  "key17": "2s3PQXfMMc1XpZrybmfx8ESyQhG697PWzKqyAcewfjfpd9y6tHznnAT1c46CisF39gQGcjGDegJYq6eChq28Yau3",
  "key18": "2MqjhcdvT2Qi5popmoFSzTYxorquFFnpQSGeuQNQVS4Bgp4csBAkhDohfKsLjxcJmkuhNrvMP5XPN8LjdXNpgSrD",
  "key19": "u8bDy7ChdarHxHgmANAS3YSjo9xe9Q1dgCtgmt7uUDkKgLKA74KGJpq9HS1JhUr1ocy3vhrcfVBJ9cV4cKPxSQu",
  "key20": "H11ZkuUcAVh49HM3FHg7DbVt524USxpTUkDi3YFaxkEEH3RhWJmfAAahRHyqTJppmvZ1TthTHXbiwBmvr87PXUH",
  "key21": "5hmryRuvD6q4KV8CthJZBTZS6yFrMHSzRTvWRiyoB7hNs5qmnGF2X4qansgz3atGoz1ScqKSaK1pSJ7CWFYrCwxM",
  "key22": "266mpNQPZx9JvvvVza6nJaTvoWGrpLizzWQA1vxukeTCSBLBAVvNVrRT5sLyq246YMpKTWdL5WPGt6YJ1snBmh2J",
  "key23": "2CPubY8YWHCMzb28Dfa4e2vGRmkjRsiiPvfR5ZNcNykV5Gn5wNmGXmkdwJMkXCu1at1EDCCG2bXJdVZ1UMiA3Rzu",
  "key24": "5VcjFU5SGfJpoB5DnKa1DZ9Vevpn6dWvCvf3mMob8tqHSMjMNbhi8jrWH6bRYqmXvzkZ51vqVVeG4EZ6YNh6sMKS",
  "key25": "46vLPXVf6K87pVYm41aqQh33uWWaSkcwjgTr6v9n1wz9B1VaRYkxXWZouMmABs7rrXZtu1G73NtKMykSaUAbUdke",
  "key26": "21kybVCQ91BSCKN81iSpwHCb1YLfY8YfcABMTW7itgoPcLtYMpG6SwdVr19gJagGTkGZQZcKM8hMkRPfX1xBw6Vt",
  "key27": "3D9DWZK3h8K9HqCUftBSzsdyioeZuFU9gy2FZAyASa8h7UhPFcGCpShBSzYQHr2HH9Ek9eXizRUycieP3Rmkpfki"
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
