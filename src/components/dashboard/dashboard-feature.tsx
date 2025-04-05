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
    "5QEWStaRDEcycUg54xeequb4qviLScpbAQH67ZXaxqEtnWcThbqAzARx7rt41Mq3yDwrcacmb6VCVXC7vKcbKBSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Fgi9BJwU6qVUbDbMj5BY8m3F1Kk1nGfNJE61BRaPC46Bt5WhsKB2mVxMK4gToYJ3Hw8PiYmErVLggdL1QMFuLx",
  "key1": "tmP4tqTAZkC5q1nwKP7Dg9PC61FRL5rjZtUw7HXVaTbfnsXXG25PtMq4TY1PAFjzWwTB6iG6EJXP4o1F9CxdKD8",
  "key2": "eRtw2PPQfzXvfZj5mSSLShXebnWq4rXVAmBNKX6EV6tsmjJ63rE8N6JZQQWZ9dzC43GFW2BCQG5UhzrL92QTk9Z",
  "key3": "q8W3cmAzorn7sAaTZz1nLaB3PgREgE5y4LjYxwge5mH4EZw5jzoFj43oXutPujmdStmr2En3AJgQA9yKk5LSVxt",
  "key4": "2ne3LqNvMMVM3n2MbjyFDhZx7wUsYAPz2RhAyDYCEMED4o4P7AfMaYNjeG6UXn1EByniQUcc5jNvmJj4YQZ16B6P",
  "key5": "FdT5kuCiBt7c7YWrhyYTbENnFy6BRNwD82DAG5YioGVBtrzKihRT67JTe4xbB2wxuYtXtuf9ZBYeJwAboFeAxye",
  "key6": "4HLRURBUFUZYjsd5NexvEBmQq8K2HzKpSLoSVHCuzjBamUesML23JXTXHUq5Sgg7BRrZMTRtWcF7jzTNLSkiyJut",
  "key7": "4jLh9daAGLd9VVUqfpSo1cFqLHi6eWYodAbuhxCpXTme5akCrUtkoJk1dcJxntYdTgQyMg2TVyPiND4QNrxndSpH",
  "key8": "2MnCWcMqJRwsLfgikte1tGwhmwmZ5cLbx415SGMDXPT4nsbrTgWLubmfjpE1Ff1f3a64YZHjuv51CdxAEX2qiJ9y",
  "key9": "4fhpFwVUaUm1CVRUpc373zBTq5eKW431sLxP2jtRs7EAm5a81R1QaRACCHrEE3JAPpHrYaPvok4NNv5BXH1D2wTh",
  "key10": "5g5Vt8bvJPVTnDSFgJ85m7Mz8xLwMesHEfAYtTYGPWim9cPUofRbC5fbuXr3GwkzLXm4u2J34hJehtyGUp1dBZ51",
  "key11": "4A81rWSLEr8jrfipsgzmYruB79nEWyJPnwxMG7fTDRYcSrF5YnU2ggW68ZFVSeQGpBLe2gjNxsBhx9j6tdS4Z7hK",
  "key12": "3M7BkxCkS1epTavCSEzCBNojxjHXNLfDFZFHjQhT2Mghci5FJRrjCFdCwPPn7zzsYuPKLcmpiTc56U9rkVmZZkhc",
  "key13": "67hkMQdq8EfJjgRziMgAzJJdnDRyC66uC8GXfaKMH1hbWtuZJ9K3roW1T7Freoh29R49CvVowxeturS2vqYwtTP7",
  "key14": "kEjiP5E9ZMS547UVEAarAFhLvpptcrmpCDCZR3WWM4vd5GNQJMdn1ELHV4EkNwN7dw9QYydZvNEgvr1CWgw1cSE",
  "key15": "3kbmN1M62WvHv8mShLNUVk4zFZDKRsQnhVAAomo3RGfYrGbGmEW2sabFo4PApNTxwR7H2Pu81UHjPNJxU26YXC64",
  "key16": "3oeHKrmAYP8gADcKSqUs1cdrFkAZTiXRrXPrQQ5q2KmRB8L3tA3BvdAsNqYQeu5SMzAEcYRvreRaM5Wh9GqZxRs3",
  "key17": "2BzqeyG3vqp841Q9KrPaiYsLDUvVVU2HYYZyneymzDdXykdTdVkUmjuYahQzx9WcX5rBXi21a2mhGNLqGzDrpsgq",
  "key18": "2Q6X2tq2JvSiPSJGDtqZ3xp7a2xN267qiWH4zmrNKNFp1eKmWWWXYsxSxgPX7h6UqYqVXJwQDj6kWNYGhysshr14",
  "key19": "cSvxyvMrpbCGny2oqtiU5wzvM7H1jvQ2jywHYZgdVWTQqYXJgUpc1zvMyBYEeZEzPy5yEmMGTpNPPBDwohLYJhL",
  "key20": "5Km92ww6x7zWpcd7ks9J1DPikyXpnu2FntxkJqGSASJ7Ay2av7wNQgDD5QKsdXRhXd9E3PgmekcWKiaXAhgdktV5",
  "key21": "53XCYriMDVwpySsSSVxWGhiQXHzqKiRmoDjRoLTYvwMJWCFJmP9ipVpGAG9k9Ekf4G8BtJxV3ZRPZnSgtrT8H1EE",
  "key22": "3SNui4gS66SAANpZ5285tnKd1vphGkr6S6AhU1h87psFDqkxtiU5W3MwFb28soU6MEf8mmDmAJEk4DgAHfkUsZVy",
  "key23": "2uzy49GpsRk9PeSMWy3ekYSza7VzduwvyKGoW9i95jKytKvgxjuzhtCtSBkN7HAxmFbXjLKYbbGdDebwy89Cydik",
  "key24": "4nWAsH3UWxdgzmyLGKV31Byivw5yRaZ2T5evzap3k3rZHRg6iiEA8p2JBF51FuevHGXZTEJ9zUJKqNnyMZoYWq53",
  "key25": "3FmxY1ioAaC5MMPS362EwNcFZGSV75bEMQGo4ZWzQzYc9TWyU954kJZfd6pDf23wT2EbLRWjsLFjVHdDb3Q9fm2W",
  "key26": "33aws8JMzZ8ida2hD54XqgPzQpU3vk9izrMAUB49omtrhqhLBywGH9Ua1UAenthneVCAHRXby2xFmJXoioDKv7tZ",
  "key27": "XxMyfw5ZCQGPwpMbpgMj5jxM1NPqfnGUXtZyFZJ472S1JpXQ1D4JTeVP2ZLaSsF2BZqNykCJR46RhVArzpEU2KP",
  "key28": "2umzCYLZGDvMsLAvShc3ABFLa7JjpLxGJnubmiQw5JfLwxFQ9bXoFwwjxkEgr5ZSDk85sVztAEG8HzEHNoutAJtN",
  "key29": "4p15UB5zPq2sVvLoMHAvVU3eBmmtP9YYzfNEWShxLjtqe4rf54AqCUrDQi2DungzGMdmQ4nQta6qqDYog6RmkQ4W",
  "key30": "5MUVqeVZ2QCkqtjKRuzNWpJ1Bhu8zyv8WGfpwfa91MUSuH3WNF4ufM2fcEDvbGN5X2K9y7sUxNcGvbFPpjDUcTWr"
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
