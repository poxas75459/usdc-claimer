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
    "4GSvHjG1aFBPTn7ZQpX7qzGuLqwgMjFosAWaWkE3Dx8uJTJXyXDP27DBuBpSfJyewEMej84RWD7DqV6dwqzDMM4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uj5kr2gpAHno7YJ1Tznd6sJ7MykiprnghYfttYvuTnM1H2kBjEceMHkoebw1fsDFGExC6nDzQHYnrbJswpB2rzi",
  "key1": "Z1B48kMjCw4QpDNMoeSJzcZVs9g4hzLpetPBqzRpbXtiHMERivnLVxZ9u5bGP8VLxg6yPREsT2aoQKCbP2yxtK4",
  "key2": "5VNPmfBxdN9VzNR59tCELsMezU4Dhske7k5D5n9eTpznNqaCm4a6yz1KT3wUkB7rNzcgNRSaUuNmdSR2oPyzneQ9",
  "key3": "yTF19a9dy8X29rRsbTtzspmMea17UFx52a7mx3SnEgEg6Z5UdWM5o67yyB28SYAnw4WRbNHv1axdbob7YVag2yx",
  "key4": "2RQDEAbWuixSxhn7XzpkgL7A68Z73mSC2Nrxqk6ZLqPTdeKvtNY3xciq3Fb7ZvNKkdSA9pzP6foug1MaZUJwbAMB",
  "key5": "7kvhciuYgSVULiN13KgUmJQpqrkjj24LwcKpYQQ61BzfQuSHJ4q9Yia8JSseLb87BBT93qtv4KLWhSAsK4HGKyZ",
  "key6": "3Y5hwp5oPdc3GRzFZnN3GoEyYwRYoyXQg2qVEC8ffBzect4m38KxVYAsqLdJ8bJKTEccaxE9ZvXsDHvPegu3YCL1",
  "key7": "3wF3ytbaW79xajPSa42BUHNQzxjAKqzoG4F8PrPwy8QXPYnxz4wNyKJhPbHzuDqtHH1LNsoFVXXvMaLwtuE86kbf",
  "key8": "4f9Ydwxg1RaYD4KXLp4pjTDNWgHYJGX8nmSd3NsKrMkbxS829913UhMY8MDFSZcZGQvJzKanfjuknfHMUWNveg3",
  "key9": "3SqqaSfxEmZ2vrLmYREp4h4jQXFticAirQgrX7ZVp1R9QQ3xhNvE2MTJW5X8d58PqFaQxw1hFsV658EhhcKZsrg3",
  "key10": "4kyfTzy6Y4hRgShh4qFzDYjmF8RSyS5zTeSPprA6eiAKb4CBR1BPd1PSNh3tTG5M1N13dCkqDc2FceRMb67n4bK6",
  "key11": "61f2KNoRA46oFcNNT22gqR7bwJUP3yDMyasPnd1GBqHWUByP83W1RAxpuxwMvWmmcCZsCJTmM1wySJW6oRMHi3CV",
  "key12": "3RZr4XSRgiP4eKJ7smibeqZzz3xoJ33Jyyd9hjQViLxUUPqN7p776bMX4nRwwLffFUCMsHSWtPUdJqUUmsN1Ezze",
  "key13": "55qfbBxSdMDYB7jbWjTNKVcyts8Qu34Mp6uQBVrqTXJErMjQBvgVRM9SHhTmy7b9fxKWnhZUSrQVWAvQboDcZue1",
  "key14": "4jLGXyrfBtuERm9NUZmdTHFisKuMJvpYjdZxA3MSQXKYhy7qTgNTrb58d1pAx9canf8gn92vBBAQctVHXcAT4jdy",
  "key15": "4RQ1A9BvccAUbsnLACaus8azvjMf4mzRfrYXkQtUTkr33vqd9ZkvkeF1EuiNcGws7AaEFfaxFDyh9ppdKb4jMUCq",
  "key16": "3BNf7nCg3uJ2A8sNGvhCVpEC2D7zxiNJzhS1fjeBWkMPhDZWHVAXVWKRgqGcCzPTU75qkJYfAJnigSru7PFtDHPY",
  "key17": "4BTGCpiL5YQzr4g8gAV2YfwPyueqbZ2C74aAHV1PM3QbpvfPd4vpFwLLcdiqWKuvQRT73tkukjwNLPyPagw5jM9m",
  "key18": "5cVo7BLGibRwm2YGpDdZ9n7tY2ABFneyCjYDZ5GWhgZLDzbtXyDpFRWnDbUsPNNbdpgtdUwoe1NrdrEj9eXpmSU5",
  "key19": "SUMRnBkGDYh96H9q2byXoP2TzMDuL5HVpXiWgSEy18Kuw3SmKXjazCHkTLQJ8NuwT6kGzAM5tgz6onapzbTumGD",
  "key20": "2YVafXmzMrywcgYxgRLBszHQw4c2Y7vvFhPreLm1kqMAt91zCAJULambECD8fdmh9kZpKdGK8GZmPvC7GUzUAyKn",
  "key21": "2Jn5D2XCVKXteNni3oj99ByBczeSrvc1zSfuwPBBizUrExPHwcqqdCqULBzrbRU5MPXL5WbwaYyEqxPAHj6KkzaE",
  "key22": "2iaLgnYFtF2FjkHFoRZm7DzWyZajyuytxaFMjY2FwBh8zFUGf5oC5VLsBr4JrS8vhVaxwC7L5K4Rb8hEjpv1k7MZ",
  "key23": "2RY4yqfBwiZG4BtFBBoE7MvCQo6Q3sUD2Qtcs77pikU1pCuco2gGdLdzQATBxypdPpn89wDHCnXz2Kq18romxd44",
  "key24": "4npJojpAFUFUpty2JHqhaHRMkDQLAz9nWA5ATx9A3dchpSdiozHkYQ8yFNKpZggxbbciuSxKyvyPcmHeZhXz1cDC",
  "key25": "52ZGtoNR97GmYjBHp8f56k3KvdbHwLXjTpqk8FFrykgUgNcAJF48mxkAeA4miaqwd37axRCSYukkB5JDS263QH8x",
  "key26": "yZ8Ak7DBne4tts5BXX6vZbiUrY1xjknSj2p6Qz76Pkr6JHf4Xtetciqt3tyPJvjxHz2roLjwVVboaySUJjS5vCo",
  "key27": "4N9RsFAy9WEg1Mr3NdvqSfg79z5fGD3xReLkE5WjknHxqYBpKrd7D7Srwu5aPMT4bAM1rymbqSD6Sb7V5uFgfkCS",
  "key28": "F1Qz28MhRNrkvUEdCqvfr1XhXcLgiGEspHYhvpVto6E2vtptyJ5W7QLgYKaCp2qBfvVAboT3Een4oxA6hXi1eK7",
  "key29": "3kWxSpQpqUXDGnwTtPgcZjhvDV27Xj6KhheyxKHMcK1Yx2uVWZ9WFcWWwVvoeY4zqiiXmiznz1hLM4veR8WM7TFh",
  "key30": "5qqN4jdLeD93oR8NvoS3La6A26yL2wb287vdevTmw6ZfYTYPzXiDTrxMTrTQJTW1iSxCB3vG7MZanCXTxL6y7Vkn"
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
