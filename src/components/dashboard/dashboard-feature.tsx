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
    "3owvRJMvoVn1UvP9dAFhTkzL4FLGfpaddidkP42yehH34rnbE5FgmhqPXZUB273vZ5UD1uB6PCZGuVJ4x6Ve3T3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPWEHyngvevXTZxh9ajEctrey1hCjZBCWABoU1jbn2ZKaJYYXxX4tkSTzxdqvLFLymdBtB3Me3oNpZxb5Ro7Giu",
  "key1": "5QWAX9LSsQbGSVwZkGDHX45gjqUHUUZL6BuS5kNpdtbtnUzJ8yykZATcjT6G5gwsY2MJyhPB9JfN2JBP7mpQQbAb",
  "key2": "4ZkUhrknXKse36k4svGrwk9HX1d8qXmjmFLpNAEkFwJevQqtM3iRNAs9TH7m2yA7PAsRTJEMd7ymtyq4ES9xQK15",
  "key3": "5TUUDRKku9N95BbksN9faLoHdGiDfiPzWbAAqXfjVYvut7EsnGDSh7duUfTQtvM8DsSn5XQW3wJtodVmJZYHUvQN",
  "key4": "3CTMKASyFEQcgVF7wV8c27Q6TgQyuY792yU5h5XfJeVfpDhsT8ZtNmvPyEWWzvSanb3mboon9dg6zBfzjpZZVAAf",
  "key5": "4YcESC82pzWDmP4XKMB5fKVv9NuCDj3ef7rBppUUSfj6oC8zNJiFtFD9NwgFxmiCXZ8XkKv9dQQLqpPrso5Aif7J",
  "key6": "3T6LrsSuYt8JeSmyr4pLNVJ4KWF8i3TKFKimRvGnCbAbVJhXNZg2GzpycsruX3YuHAaipRomDHTqccadFxceGEC6",
  "key7": "JBnYbmxB7ygyxm1T8xHAd9ChhCL4TGGQBFAEXzE3zARWy6QCDLoEnefe9bKfqC6gofr9XctGPA7rbLKqFvQzTwa",
  "key8": "2tgqqRbYuwrStngYNa3bnFts9o26F3vNostvp5mJz5EEbwVYLFFFo2NttXTJzf1oTxhk6zn1nHPWTTmxwLqEfEsB",
  "key9": "4AnCUvQvzjLwx8KhHoZ1gFeq2c2QFQ8qEF4a2cnKsQBHSH2n2orUL66vbJvUbyHqKpx5DM5jAUWDY6TkwBUxJuu6",
  "key10": "2YtbKCK5KjsrEPrgWWVACJfbnjcmJdD2qWDKGigFfWy2J1CZenxsbFmHL6WtQ7sfS4rvwLoc5qBPi2r3jFRer9ZP",
  "key11": "2G3UteTu4HMbMbUeu7rM45YcxGdFid3XXSwwx82tVcXm8KsW97CuMkXN46wgsYpwK4n2p55G8xYAqczm3TqLt2eo",
  "key12": "YKeZTfjEfF2CufgPLNbDGZBTxRA8pzWwq4hdPRD3B8ZWB2aLQGq4HM94n2BtCDp6KhfwLQ9cjf4FuK1hePMC3sL",
  "key13": "3qCF8PFAGx4UN14j9aeN8i1KpMjE3BvwcnJbTCJ5RvfHArkzGPkdbPuXjSbbqP9QudJoZAGVE8jgWwfVLCuJhKNG",
  "key14": "2JNtzM8NjYsCLny2cDQfQfXxYLNUF8qgunRjRp767jzYXhmBdy4dNCNmB3MG4RfMWLuWhvRCA4NfrTWiS1MDXBgB",
  "key15": "XPogQUqbgETYesq3V8JvzzxNLpqtJAFt6ZppKzRnqY37iJnJueDLbtRwKera5BRQeiFnUtijxrW8MEnB2jhg6jn",
  "key16": "4Q685iBrsqTKNvbdoJFC97Y1GkdGgsNzp5FWU5HtH3N7GBmnKZ3QvkiVe9HsEBbt8BtW1VoUs7Z9c4aX2ViGo5f5",
  "key17": "mk5Lt7QPLGPvhcxGubUn4mnspTPNQKnjp9sRb8qHMwfremwysezsZaA3vTmCddcwcDLw73YJLbZuvqMWod1k8g6",
  "key18": "61k68ufzN4wzZ4QmxXthA8ayz3zknLBRtScxJ9kWKZ6fzKKV13KQq5nEwdgysY9bPax3EQX14gyuMA2CpmQ9gcJP",
  "key19": "2xbTjVwUYuct3Jg1Hua5a6FXP81R6Do2Hxy3suxwKNCKbujJBNLkwuTouHgZPcW63qED137qrzbVVsEeQ2iXe4BA",
  "key20": "4hQtoGosVMFWpmnMJEC7jJ3vSP4ZVVXwvsqBuVyhkbTVt6w9A5Kj1H4MKnfNc2K33sEEzK9EFbquJnE36Kjxenma",
  "key21": "3JPQKGvBrJMJR3D4wfuuyH6n8C1vPbsCNDrfb5Xt6DGSesEGuJiHuhfXNnVCoZj6NqVhyPQoWLwdaNRY1zcVby6r",
  "key22": "NqcsTiprxupUS8ojdhrs5yCPWx88cJJebaXwzCujxNuVE4JT41PQ6SGL4q1DFXBg4fMRN7br8jc3DWdGC62mZTJ",
  "key23": "BSPzE3xyQNMEpthztedZfJVJDc46ajBsLLbqLqD2o11yZm4rK7wQ2Wc86tDghm7Nt9DphZinWdzttW1wg5mHNTn",
  "key24": "478DCmd4HYq5WUgNHNctJ5vr2A3iAuDN8pKqQPPGUvMHtf5ZSTTAPyQ2PcmXKQipfGsbdr6Lvc9hRcubzRTRJ3FZ",
  "key25": "2xzbthiWPX5DM9ZJtdDBbHDu8Wk8Bv7f84iALwdoxHd2Rvumd5sS7yDNgL1E2qEgAmRR5sKUZoD7PwJ7NCmDqNEU",
  "key26": "2SU4UtC4meGg7wLmsD5yRVsJHPYAzR2FznG2RXAdNNerMUAWaJx8yTth2jgaeQNGV342bCu9q4cD99rYxXxtVLim",
  "key27": "2DRdi7cX5U4afv1sKJwoYM8QQJnGE8EmJCUaTgT3Z2H7Dhd9p2dCoHrakXHVwatwsXQbAfLyRfmfozGXkhQ2dNNz",
  "key28": "2fjTZ5Nynq1F9mCBvW5fr83zKMgvQgsUDoXvuptHX3Y9L8PUCLE27sKCsEoahkk7KwVoeEwouHDwknDssny2xGNq",
  "key29": "4RxoCF5emwqg7QdetmTyNZ5gg6VEbKHHqWappoyUZX5x2BdxHCpWqr4Ci7gyYuj4jnKnjAE65wWaLaDhRQzBGRos",
  "key30": "44C4XyeCNa4FSJM2dpp44UJM5mJbmGJuYm1WoHfeXFspRLDheLnNsBt3yGbW5c92eo4vzvpx8bnPWG3sfWnYnsSC",
  "key31": "kEB8t7NuD5FFqQLWGfXimrJ2Huzw8Ei7kSAwwMujjTmDDnhEF5bgMUXihcMt2rgeA5kSCcYgZ35mb6Kvbmnczc2",
  "key32": "4ccGU6SCQfRBX9xBsUuyqSoj4BWcLoqaps2yHnTNeQisJwW8Biw9TNTqfNg699qmNXcSCBtUXMzua7b2NK9yGazd",
  "key33": "5B1HAbxnGSQ88GDdzHHy4dgoiSY1Xf3DZTfqaGH5L2L7R7W2naktm61W5NLRd8LcscwUXhSh1XXTuQ85ckZU8YE1",
  "key34": "2rnXqjZouQCCXyWjyHFKjqukcusQ1vaWP6v3WuuXMa8aD9qJp1Pqnkjcoegi29P8Tv4MP5LcRBW6DZe4Lj8Bo9RN",
  "key35": "5Yw3YeZ1rafYegnu9MD2qWa5NU3Fh5mv87tPWbcuyMXxb3iDTSajpqP3PogBZjeyhYG8rPiSRVBTr6ZiTVmiyi5n",
  "key36": "2JsUQER3sukdy1djRbEvkirBcw2iVYizfT411WPet8E8dHjDXmtXzc8fSZ6DHuupfB2dKaJjuLsDPKykL5xchoFH",
  "key37": "37tKY7Pt5ZeYHRvLYg5FvJjnWV6XJLZZPYbksLBPktVA4K1zcDdpWVuqt8ZESJd9pqva7yjUdSaKCNPLLo61T7vT",
  "key38": "Z3xRqSsT6LeS2zUEx6ukeCTqFHbWAJ78pZbx44en23GHtDMb1q82EZMysf4sm6Y2e88tkAC8BKqj18bckwe9awm",
  "key39": "42btp9ZjHm1t8XHp99hVM5wXz1th1RGPdZMaNT8EhmkKjSGS8CUjyhE9GBhJZVPgkfe3xiF2X1b9E67KvsuHEKru",
  "key40": "425Mz1UwMzxkikFnMvYcGfWP8CLRgak425ajJC6s7vqQBbQZVKmP2hTeuQJfAfRGwYunUK3NfVUuxfEMvWHPNY5D"
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
