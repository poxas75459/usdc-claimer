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
    "2J5ALu5igaBeTG4S6ZMtUYvPcpfCFQqnN6EAZStV1oFrYqbSipphvokkyhMnjk25mnbijnoNWjDbJnAernGighMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SnvukVjUbDXxDS84J1iUG8qVXuUwJPmNCKQZQrwu8tgNwSqt59dDVveKwYWmBxN6qsYqhssYJ3k7CZiAeouvxCw",
  "key1": "3f2jWBTwMeZfWi71NLNrvqP63dkMmxVA6MvZzSvP9rbLSHGdPV5SnTKNnHF1ifrbhpESuixNB81txvD5hJXp3PNq",
  "key2": "D8JWoeFL7P4ms5arjXFET4ebNQYTq5Tep8Rescc9s2YK2M9ni5tkMAm2s11WGk2qbHmufY2eRQqfUgWoTXpdwWa",
  "key3": "2DprFswBvekXxDWBVDGZL5BEVYN1dm1zPxX7y7S4xQsAfLqS3SXLtdgndfdoL8ejTCuDbgVtgFQDvdFoT8JRaxdK",
  "key4": "51fzqxqpLK8tCW1ZxSKpeYUrenNvkFmzPh6au6rue4qUzCaFqBGBjJ3TLgND5zpJUNbLxAumNCJ6B4yLBLYQMxQM",
  "key5": "3P5jq74NSgzV43bYF3SY24A2BDFvFFE8dARZXra9qP1oyBu7wp2nyxazVhiJ5S4fEvx9rKmVUWooKXjEGtxxuG7T",
  "key6": "4MdH9DsjxT4vMDUXUdumzpPAzMZVbC3u6xSaD9PP7q73DmHcc3AbMZx1zuKdzybY8ED5bxW6Db1kwZteCzNnAHBG",
  "key7": "65ucFXAf5AZKKkFMzFr6Ybj2x1g3wo9hJg8wSkagwT7wRKKibBBAJw7hzAhEhYQjxZYGSpPdP23UNAccaLzg7Rav",
  "key8": "3kK8KPmbgLSXxN9wjbq3Zw85H5AtgQh1268ndtQHBbWQGeDcBmwA1n6tfLr2Tq6CpvJdoqpFSRAPzeUerNfrFzo6",
  "key9": "3bp8MRmt1nuzQgMGB4p6TnTamPHWDUgZF9Mrmw31cwe558EkhbEJ6EAsRRgrzXAabdAWtLQZfNHnPVLTAwXPTMQC",
  "key10": "34gGUtRjbiYSPTw2MJk4nwn7jQqUwE5pxfQco23dYdf8E4FjwB5wwG4Shy169wL4bE6fdSpJ1YWpH6VHPRJ81Q32",
  "key11": "XHFM3x1XY2yRHwJE3o5oi71akHRUYL5zdjSd4KfkAUKehqp84AiyeYGGdA1aqUP6fpptTd9cQKVDGmHzMPRLizn",
  "key12": "56qLKc5rCHxcHy7ZTw3KBghiS578UMWjzrAcxxRHdq4gSzUxqSwaYS77RW5WuZpwC446oAuXy1VA9mQLeYUxmWf",
  "key13": "4kt5LbT8S91dr7qQAM7vkRa5C2Srpiec9AS4665kodytVjFD7Gbavmx5ynretgDgsZYzDCeKMpKgXTMh1iZ2TjN8",
  "key14": "4MivCSgt8KBcnVYQ3vSjhcAuZFmeCokAvFHs9Ue8AcD42CBWuUihdrvbrfoFD7URioAjLdUfutkLoPHGn1LMqJ7T",
  "key15": "3KSnnDpsNikk7FDynDKQZJdWrRHkuh2zqFUtr2v7nwM8CL4kjxUg1SPEYhj6mjvvJRcDC44QiaNFJhh4g1WJ1Ymd",
  "key16": "5sjW8EBgqKd6Q6WyB7KQceup8rREFmmpJkx4nd4XkoiPSpBJhZqqpKBaf5qFRGpGqtSM8zUAKCFjYh3SoLzjaPDZ",
  "key17": "5Hno1NPzJ2VikLy26YEaRSjkETTd2TnhdP8TXVHDmkqueuzei6zVvD1bZSxqNjZVg3YisDoUm5CanCLwW1ysBF1Z",
  "key18": "2RnpTgGqiYXhR1LXoK1B1ohwbDEjn4rgipgf5rEhtADrDKEf6mrMLWHZdbsuuZyokrdFAsScDtGb9Dkg31dB78HY",
  "key19": "66DaPFqNqhxqJND3om4vtoXLWz18UihwVfJdGuPgEEiZaabDRqJFyG8fGjB1hjpMg1aHFDx23cFy1FUZLM8z2mG7",
  "key20": "hMLvE4LtXLZbDBXsJiJ8oWKDtAQ2mqydd7v1b6aQUQAkEQ3ajukc2rKEoqG4oiD1FZvpuGjBpfjfURoYeHT7y4T",
  "key21": "2b32no3JhRrSftKwfv637qUHJ6emay2DpNkq3QZiXjFoC2SAb54HULe2vZQdZ3Jov2bpk4aDTxj5hum2zV9X6hzs",
  "key22": "5cxPxCT3rQADtPye2GB3VVof79FWsvVq5kwDpXLyZTtcbicc2Q4wsMg9uiitVG5xQw38snCX3x5iD5tcdowdZvn1",
  "key23": "3gmXe8U53ZZPSHPP2Ay1fsRygrK7VK39n6Urw6ciwgWuxY3vwSVv71jhvJhRZBHWdokB3fTArcHGgknpch4kBaBG",
  "key24": "tgT42hXaVp87vPy5KTcXpcwUF5Ek4A1dhHN7oxopgorN2hosNdyJ6DHbnxHLzSVzU4xyAtAFK2TPf2vmbhYuF6o",
  "key25": "5LD8npJjbhdbBbhBD48WYBXNwe2rGxmsfncKS1Z2eom5RSLN7ivFPpYu3fKPS69A1MH4gXbW8qoRVnwhoedEr4DF",
  "key26": "Uz477qWAdNu99bb8ZyKF2RrqnPzbqpEDLynFzwHvpwtpXQLz1FXSb9tJC1nGhRt7h1QJs6Z1rUHLL5EW8WVDkqC",
  "key27": "3fNAMgNiFmg7m33T6zjVRSwvVE5Aaj2arx5qBoqCfVNDdq554NThrJxyy2J7ovAxk3R3wBuifDGUCxEVh7fdkh9L",
  "key28": "4YY4D4C92iHZsuzQNgfQ3FT5oZgNHkTYN44BMmKUiaoxowaZHdihxSxA8NeT598LYCcTFqjpXc6kzpzvDNKREtku",
  "key29": "3PdaRDPgnrUWhNJ18PiNgpUGyXbGWT15hAeNViPbh5vkx4kt8bWZFX6tuC4eP31XiQt63yCZHqSKKWgN6eKab3uW",
  "key30": "isYLGCBJtT5gfanuHygGic5scL7LEhD7JhAuzzc2Qsfspin9xnLb4sbNdzD35u7r9sVED3BYisYdA3dnYfxBEY5",
  "key31": "2U6jUH2PshTHLisbszAQTut7a3PEHTDfXJeFTDjUuBo1ZugUEqYHeL2ukS7EgX922uB6hWz2zvruP8LfAW5vpNZ9",
  "key32": "4NscorqmWf9GanLS1uEJ6C21D7esqUpMYp5VALamDNmDaJ52ZMphjaiuM8BT8WPwQCfyF2f5WGsBceCgmk3zMrhn",
  "key33": "4oooGdBdNR2v3Y2cbsjGWYi6T9fa2gULPzpjThXZdr3Xc6kQSSjmcYriyXbU3RjtRwWkTPwHZiqw3TuEkB49BiSW",
  "key34": "4PwVGHQDRxHDzUNh7JarrKcCy6Fc1fZZ9dpbS9dLX8kHzbhgeoEL5rXKLpsrpriPmKmqJocj1wLbPY58oZsfNRYs",
  "key35": "5zKw4GfSg3osmFk1EdsAEy25AhRmgEP7oEEKtdmdpgwiYwXRZqVc91YwbPg73S6SEZ8kaR8A6yTxCc987mLUhpjj",
  "key36": "5esoQqWYadwrSYvWyHU9rZbuVnvuZTA58eSkvyV5yZWBCu5CD3R2ECmdcZBdYzS6PrNJffCDf5DHTbqtSD2TB1H9",
  "key37": "W1wAP6yVyRByRbwZqorZVYjWG7KQYnfx4PUyzLVHNdZzq1KgbdTu4emoMVGCRJjnZnXkmaqaCU2iTFse2iGQDLb"
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
