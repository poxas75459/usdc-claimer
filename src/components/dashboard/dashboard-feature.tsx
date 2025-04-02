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
    "5xxTXY9GPWDPCWmbR2u8syb45XDMop7w6uLufiUP6RQhDcdcUKWjWJXBkXE8qFgVuov4EbrmgSH2oyfb3AUweGZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACA26jmhfXMxSZjvhEDpDBtSd1gSfLFw7LGoz3pXFn3oVb7mpD7qTSR4SQNB9C1Tv64NDruWdKJyGhFFAXcYcbq",
  "key1": "2ywTEQUsEAdyVbj8RqhTPHm55PjRvQffh76FRVCp2TXMSAG5XEPvixc8SjKcbnyEan5DRvFv9Qrdi8oWvfVLVjDy",
  "key2": "5Y6d74BECaVc9oATLiK7MoJz4kCPV9FR7Vr3Mn4YyMauMPAQNXoKaMW15AQ3ZCYUfTctgsqux81fGYPnybgMuutx",
  "key3": "3nRwRTAiXAnMTA8MZQzxbHqwnnDu3ynADZJmcSHprgLXZuPY319GaXHnQHs2EdNG8X7SSS7h7zqSff8Rib35GHZb",
  "key4": "XxoKMFSJb8N3KWzjeE7U9g2uFfu5D6cSRiLPJdnhRpkLv9bK4WbF4LvteBUeNqjtDb7PTx4TSGqkcbiWHXhTgqS",
  "key5": "3QKhwyWUtcjL4KwwpYKMpHtahBeC7bJSUnZQF3NGnx7VeVjaMe6QCjvQrcYSo717qhWM5KhqLAsFLXs6uXCGcdU9",
  "key6": "53RA7AdQNvFnujxwoENE8aoyLs2iwyvJtUFPrvfWPrABfeuqB18J1BzSHfUsXRcz5E5TapzVaaqWUMzLZps2BsYr",
  "key7": "3WN6ZEtnR4ybunwjDYDNgLJ7xC11mZJ7N9hT7Wi4BSwFANcnqdsgkt9M35KPFB9bsvR8uM6PUM7Nn1J7X9URqYhf",
  "key8": "ARJ6PACupSbDGAAHZqKvzGFHi3ptoPy4f15ozcEX5CqEk1z5GD5Qh23ayAb7WdVZfvA8zTbHR3Fk3Ex3pB4T5oS",
  "key9": "4nwcdf2H7wXXTNABwsUiP11GqZPra4oogKpUWpfMig6HUk1gFAXjBWt3g5BsjhK4ubYqtJGMmxFMxk27tpYmG1U7",
  "key10": "22Tf7GW1KesFraV3ktJ2hU6zvzd86Rq1rj31Gw1s5sXNcjV1HQEQ6xQFtJmTdCerBBfuiMJsuFF7rewKGuecVypQ",
  "key11": "9KpXbqCNu1wUDrB4hHWouk6tJbwCV5H2YCNyRRfR7aTQVvLtsTvoNKgLe6wjzhKeXokq75mxDpbiwvzP6wG8j3J",
  "key12": "dy8bkVabzdR8JSrAg9J2tX63SCth3o5gshd616pskBrx7WoTyUzfqmufQWLo2AnDcrmJ9VB284DHyPeoLanBqZj",
  "key13": "2UgwHzgieJyv5aWdzMz1gpKG84VfdA9HmPRynLvijUKgT7VR2FRFXidedAbNqeE7w9BC741UJ7C1rtt8CAxKCEgA",
  "key14": "36RqfVht2Y8Qh7SBX99tkMekajwmJKJETWMgEoPkYe4jQMnyPd795qiJ6cEPs7Jp4j5uBL49RqJ3a2Xcy1HYJkXz",
  "key15": "25L33E4RgUi4W1qkbp3Jxpt75HKXLJsoJdwYw4c1fB8fZ2ADdNT6aSwofsxWCydr2z48iC9bTuT4pdry37SzokAs",
  "key16": "38gQtKWYjBEqHdupQ5ZSgYWbQuwu4TNnDVBRq4YbNPfZ4oVe9fVLgiJSZhGjzJeZ8MUn69kQXhNQRxCvruLCiXjP",
  "key17": "jbMqneyrJsoh9FDwtMJm9d5HysoyhdoMtYjKtGVahksdu27bHz79eCAL1U5g2wzXwM2aMhMdbms8pz2FPMhFrKd",
  "key18": "4FQcSxhp17ZbvoL5m7uK8g7FMrrhnSQDwKAT1WSQjhyXTrMWzCDLcoZCBhJHtpUaMQuQui4Yfhc1xYcUJnxKNt6q",
  "key19": "4KvLZtJ23kkXs2cztQrPxdhhX8BB4erV8dZTghTcAfQ8FyuBxktijXHuicjjfWEsQbqcje69R2xajht2amsjjn8W",
  "key20": "45XjzvXgRpvzzut2CTjFDEhsehqGJb6coDKYrcMkMBWreeLX8s6QeX48e4HYiqspk35ReuNwpEJfL1JAtCsQoBjx",
  "key21": "2KXKgQ9s223shwCTsbHHDAP2BQVDUFRyXdUrqtYiZTGctQR3uUWEUNsvsBqpU1a6EsqvVJQaw6JXpwe4iYejRVqb",
  "key22": "aVRcBs6dcbvsWrXfhN7Nzh2tcXPQd7zDNcf442drBtcbNvL2hwyaqTLTDZjSqYi13WHyD4wATQknksj4x1AoKo6",
  "key23": "2DDoWxr2j1m5iQL8kRf2tEFmB3d2QEEhTbTHdbYS4R7C2wbddV72zN2LhBUVUnVLgYoH3d9i35BMUfc3cNbbkVxD",
  "key24": "XSSBvSZyrafGb1yLic21M28mqcuXBDHPbsspHWJYmcwYx7eb7Dd2Qjdt9oP5EPQyuYfUUnM2gn57FSpb8hLyhp5"
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
