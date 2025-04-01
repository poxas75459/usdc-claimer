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
    "5zzKDrPJVy5Au1kPpp9LGzgibAYUzUX7NoZNnaiVpXK6krHLsEdiBdptMuZ3QPzvqytzHyjXcrENNCL4WXFSfAFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbaBWPSPTW3fCXMaNNQTA69kE1K4hNoPzKzxgHfuqbnVMRxyeDKjcBQ41n5nJ94NqcHk2yMrpUenQsncrGWCZux",
  "key1": "39bD5T3mNxe4e7zioPi884W98YmoEPnL3sSJj6nuVR1DnAGhMbrgGm5Pvtzq8MbsU6pYHLqNjUG1Kgv82aCcXr5G",
  "key2": "2oDACVr8udukwiFoZ1UizBoNiXWj45XFRkVQQRaMHFfWDBNow1W5KH3L7MHbRqmGuTJeJ4b3t2Mv12vmYp2Y9uvs",
  "key3": "2xpnYk32SAii1Vu584TEC5NSeyk3UiVjB3q7zh8b1C4QJG9hW8VsZ3CYBcf8hwwnw4nC1rk8HpzPbyJuSeE9CX5J",
  "key4": "2CQ7tgrWqsMWuxQusSahaBtebv3R8zVdytLGH2euSHAS9DptF99taWRKHXMQTR3YQZ88AiHDBmrBkoYBGKtMUHhD",
  "key5": "3kqCbTJrTLySjsVvqfWDPgomunwMjoArjr8s8bheXaPH3k38JvUWVpjaKyvjShvfKMVsxSXgmto2yJ6wa8P52VjL",
  "key6": "g3WhZPHwS7Ft2q6zWBSmESv7PrthAsdvaYCqjH7jUGPPfwpgmnFhh3QLA5ar1gnK6bkFJJqkDw2YM6jWMeUG6zN",
  "key7": "3fZxDax3qRFVHippweiwx1ovC8GV2Lf7tPoYghiGoGJ6kXPoiNczYcXuUy7hpBGU27jVUELnEtpjFzkS7HTACtQQ",
  "key8": "4xhQ9nN7ndPDsypUfVYWiuyNScdjKB2pZsA9vHg2EqYfhCL5TvmtBLgpqTb9Qh2A4vE6d9E6XmRcWL5nVPSKi95A",
  "key9": "3Tf9oxeyxkBZgPKwnbMxWc93hfdTE9cvtG66EKjV1ToDgQAMZgPKnRtigD5JmCqRtrUbfEoV3HexWJFqwDuzTuh2",
  "key10": "3obMoh19xgtatwav8Tq9XezNDCBPyF5CEtDw6tZacYhvghdsiBEaTMpsRYXuQnDJoMWPSAN6gJsQ3zg5m3z4JXFN",
  "key11": "4HK8G8CVo9a3PY3UFWoAiQJTh2x1Tg684yXgaSWGNCkWFsBf8NLRqdwAiADF3Bdbbr9k4fmu6JbWEWFrLcpSTFpc",
  "key12": "3DWpXGCVPBq1ZLwBYxpCNU6t7kPNQpeDwxuFb1kxhF2iFBwSQrMeAb6WABpEJjRYDjttfqvYbbExGJKPX6GcZKfU",
  "key13": "4jgK66YVTvJ9EkJdA466DqynLU53bcpGbGCneNiQWGPk3DcYU4wcez5WR8sLJy6qo9kb8diodvzwandLXDcr8rUN",
  "key14": "hC2M5oehrXGWeyBorMo926rX8oYKgD8VcaWRRAfU14DroA3uS6N3SU1SEaetMMLDKRzPcyhx5RS1KLgD1wUBF2y",
  "key15": "5qm3AXJqS9mibnoBaUiMWQFqgjTqLeWMS1xeUujeqTxGcDgvBKoZ5i9YqhDDiR9c9aNWJLeUs3uv6jmJPYwGcgcy",
  "key16": "5uT34rKtjvnJdKX4F9Dac3mLGyu8UHG7YdWJD54uosiSF1j8AAoYox9zajFgoGx2tdYf2y6Eg7roW8nGqF5PcN2J",
  "key17": "5vXCTBTRo77SpwWJ7LVP45fPZTDQM4BHa7QsLYYNP6SB48AcWtRgUBALDAQ5HhfFFwrQc6fNbn2DnYMM71F6Ghbr",
  "key18": "4RkXV1G7RuGLSjhzPFZJ2T7NQxNei4QxEgSTK8MqyLxRYmPSpot1LaPejh45HWPctMKi5nucy6BbXsX6ESDKasbo",
  "key19": "21t2X5394sScxZDASJvykigWf755gwmU1ZYVJfvqjHVyoLBsbi2y67QSpP3zfH2xT3KbHbfLeYfcPuP3wNzhkejP",
  "key20": "5H5CayKoWbbbXYcJC6mGq98dQQGRfLgA6AuU5UBJ45LQ42sXeTVk86KhCUwr5cRhmuqYap8biN3HNgt9jpKwWrAd",
  "key21": "55cgityP2hogNw5R2HvEzq9FHXTu6RKLJUKWzXdK5JFfGNzMUnFvp2wCT9WdeB8Ju4kkeQ4RYsFut4gTqkRwj9AC",
  "key22": "BQqb6RepSoRy2Y459MUUqa9DWBdHt7PC9QUZeths3UT1Wi8qMjxe2qsTwj8GsdYRJw2B5GgFFq5CsprtnALWuNC",
  "key23": "3Hy7Nc28wYm7b1M552aFMdnWKYh9311W96PHeYz6cc7zX24ZCrkx8FQob58F1kSzuA4Hva7jiX7DNE93QWUZ26Hc",
  "key24": "5E6oxgfJiTf4UWi5pnCQEE4dkbjE89agdfo19cq8Hdnqt4UjStK7nMQ5FE32Pvh5yBdrHBFwSVsb4rTiyASWYuZT",
  "key25": "3jwPcETU9kEgEjVxPMSaALYPG8PMoLWpsEvUwGZFdE6odqhPvyJ9C2Zb265khqBexfWDG8YeWq5JVGaytmACpuyw",
  "key26": "3hgDcBEciZpR7dfHTThHMAyB3k44Yo7uvP9sL9UpZ21ZhLmKKRhkWmxeHhLzgzaSXBz1Gh8Vmjtm1RD1YaKrqbVQ",
  "key27": "EW5sxdm5eBSxtBW81ZhGvfm6PX7Y92X7bwdJ4imjzjTTme59LpeMp4HVhtPssYGHBEkC9BRBwr9rM7TCVfLUbSK",
  "key28": "HvXaXqkYt79sVtpwanhG4Ud1aPiKPHnKDiEAjZE5xBbZGqEqsVJtqNeCK4aKfvBAc1vMd88YiVVeu5KJB1D2XbH",
  "key29": "2aj1aYgQeMEtTf3qvU9QkWJQrnqdVyHuipBjLLryNoMkE8UfhPZ7PUikXmxHGtzBjs6k7BaPk9DABDdxCVEVC5dZ",
  "key30": "35XK2zE9RTA9dJ7sS7rPSbDG2xe9qVtoiZbQiBTPBmKufEWM1RZs7SVirButXG8DB3f2jxhv8RkK7xzr2wX744DA",
  "key31": "2FCSbpGxWGcpj3NBkemajZMLoMpJs47TN7V1Vz49dtUh63zCKZbFeEd2TtDK3MefqyEi63QERdXSFVdWJnoMLLf2",
  "key32": "PRWNf2R3Rx5b2aM3K6psRr9BqMnbVvgb3UWCtfSAzKmieRCYCLjr9XLZW92di6LZH42GxNeFRZJnUgVSTKAa3pd",
  "key33": "KP4JxAbqwb96jz9NdyH7LD5e2XWxP1Mk7xt17qZbqFFaLKBMrf712ktH7QPXeVovZSHc8pHFYzpddVbbxHh6Zkb"
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
