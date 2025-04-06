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
    "5TmyEEViV75Q3DYYjTw17UJoCisV1Yfd4xSUAy6RcKzbf4W94D1UL5TvpvfNP6gAKfJ9Fdzcn142eRVdqEbn9wsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxth8S1WboAk2EXjyL94dUXuufZi4cB1m7Fs1RP7buhqu5t2JuHNDEwGL5rYHR5sSpNcouLrfuDqsGPkdNUMep5",
  "key1": "5RFzEcmhMj8QQ3AeUwpYoAVK6tivT49jU2m9t4Abb4HtcjKgm777eC5PoCQ7gBWFvqwi8449wsmpMc2GrREbW6gC",
  "key2": "3gVVnrUzEhyzGkHbwKP3D4u2NnXuS76VCsgJWj8Y4H6kzKzjpH3TKabMGdiUNL8ofpEbeomBr8m4v8mMszPzSHvR",
  "key3": "4iLXULmvs5K4CJXgvEn5iMVpAxwCPPzGqeUrnGTw9iszJztT9Z9cHjQtgAhWNHFrdPqPdr9eK6FYmmaoYqq1zjr6",
  "key4": "4FSpY5F2d2f9LiampDH9SQnLfeLyt39LKCqqr2Mu3Vg5NJwiiip8NzKhg3HpVfcZ9H7wcsXSZ4uRU4dbVv3fWag5",
  "key5": "3AgLkvob9q75mcrzJ92vSmLWgubVWm9bZziRQiWUeTgWzMfqGEagSPTbLhhVNmxnx2hpDHYpbsz8cRQE8rrR1RnB",
  "key6": "5pdugxs5PZhN3R9F9EmS5mgcoU3QP9NYNsWozKKiFH2fT41khTiDEfPrq9N68wnuZzyahVnJj4VxiXFbPNU6PWDf",
  "key7": "roDjUUh3o3mALBUqWpnaPPP2HGzQ3iKr6HPfLDwa2HsPUJAwkQecZCPg87S2izU7vwFwZh9S26Ybkk5UiJtw1rr",
  "key8": "2j2ERSda9FE5P2nskNdXd7rMUtGZRJVYfVLESQ3DvVgFEr793LDcZBqMiwQXVo1HNbqxzVk4kHpwwSJ9WJ9YRjg6",
  "key9": "Dr8DWLE3w3JkTS5LkA6qSu53bc3BGrQsrnRGS3cPmiVPXFmVsayAnkXFLiUtQdqqoQx3ME8HcNXTZectApkNhA7",
  "key10": "5RiBwmYXLpUv3UiBw35G6PnWaHmrP6rv62ahsMiHw6KpSm36hfBwzZhuC6t5xGRuZ8ua1MEhctHFjaveYFcXN7D7",
  "key11": "w5bskkkpcbcuEzwJMspNGJbhSYSuuwK3W1pM32NWMgShox6t2fCfbvbFhPshhhoDUpdxViGZKKJVbRa8rkRGiRK",
  "key12": "54A1Gt9mCjMHST128tpkjPrzqsqzrYj6wH1iV9uxL9oUVfKJgaNb1c4A2QGWetFmaAQQQRus1EDzXMyvCPGsrxNK",
  "key13": "5W6UvAzCfnAMZBJJLARrD8EpSwT8LoNZceKrVnHsboCMYCkpbu33de4hi1ZiY3cAy63DsAg6w6pv6KW5nyXgRfjc",
  "key14": "5mQoJ67bbjvgcsJa2bLQ3PMR15x1PTMBGeJ4KQHPTLyd9Kezo9e38h4Wpsqyr6ZPmfw9yxGMCXR7kSNc4PqPGf9c",
  "key15": "4ESNqUNxdQ4HBHe9utoWJoFLRQnZvfF2hd4rexfpgA8djqKy2J7XTncyCXbztQAMxDj7wF4QAuKf6mWmY11Vgthb",
  "key16": "3F4jKKUdVorDTFd2Q6uxAwd7GhD42W7L51VU7cV8FUx7agLF95fAtVw8XB3Qo9K1Z2RePjbhbKGAH3nkHj72pCKG",
  "key17": "4maqVyAyDersHkFNT4kicudH1W2wh8YTWMpT5UFoWNzeWjknTb2zEnAnRVqP6pVL4yR3A6XKzegqPPSrbHbMqp5L",
  "key18": "2GJgSmpGedFscEf3xfq2gDKZtqrGWzMnmzakZjSgqsuMbMZfBsZHUh3js972hzPfrZLZC7zcwmb1HwV74NRXfChV",
  "key19": "5tXs8pppvKNQjH4VkbEL25wdUHDpYMGt7UGWXX8RAzb32dnxysrVhT5tAgDVg9L8F56Y5nY5d4o1r3k6xKpip9zT",
  "key20": "5G5iaf9XKN2nMT8cbZprGkjWBti9GQ9HTCxWtE5YEFqA1Q2s5pUK4p1wAvdghQu3qXer42m82bshH2iw2ut1H4x1",
  "key21": "3CfTXYL5SsQBm4z9SontK3RpQRPkbEdkko2FmimYJo8w6NVfwqgvaJDRGzh3hdB4fAZRskMX3fxKmuydPTNjbtY2",
  "key22": "5ix9QiQVocDY36Nz3fJn37pzYZUdQt7QRTiXDG9i7978S8XWmpa3mJ8k6yvZTBdHwrWiTkFqUYy2dhyBVL6mNgMs",
  "key23": "AxLSELNSY2HCK5NcB8MdYT9v1LQY4kGeP3CpCmv7dW1QzusPr1rbPtjL6yJHqBJDoWTK1jmS4wHAyZscvRJNs1m",
  "key24": "2fngW3tJWMpQy4cLfb97ubWJZSxyFnsqmQdfdB7PuA32qjPhg3gffJRrVxCMbeDBwy3eyzdypBVGvSofj5dNweL9"
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
