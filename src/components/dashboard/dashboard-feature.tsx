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
    "2rA79PRbcT2sEyCXSxuSZxdNxBbtBfMpTVqkNiG6SxXBFYA4nLbE7DzPhYk8XqsbE5GQKWtuL5WMUZi4jFfVtCu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNFCJ2N8AywyB3SpfmLDADXeFH4syJvyzYzxZ2hWz1ctwLEsWTvNEfaQYnPjVd2XWvnJGWbXWoqQF4hWGKdUT9a",
  "key1": "4WjvASHadYp1yYa3YkNrMhYWjcde9kjHyg2TZ5hoR5BJtYo3Ag2dT6VBDDTmetR51un9BdwfhMkNQggp1KDdJNh3",
  "key2": "k7crqwzohhKBLxPuaefgZZ6mfQuWiDWcCcTnbw2XpbbKLFmUwxUMJ26KXYYRtrRiARDyQ8F7VWB8Y2Y7FCKtPHR",
  "key3": "4dsqE2L1ZrmAP1XRj29Tu6MqK864M9bqhP8txW6tw8AJkw9qCrFFhy8M8YX5UGS8TL4LASQVNuiB5C6qEqnXwgtp",
  "key4": "e1PbNTNFWZ33nzb5sFrg6oghPaX2Eez2yZgZYKjuz2Ai95irqanfU7NMG3P97fjK8ntnJLotdJTnGYhDQM7y1MD",
  "key5": "5VMfBgfT1qiFiy2ttzZ9f6RSJMNaEdjUCHvH48XzG6t15KsKkjtZNryi5yDVrzTStGVFvvZTotULAdghYTDZNbBv",
  "key6": "4zJDvnAR19jLwekLFbx6Gffj49tZcGDstJx8vJJ6iJcDfpQJvY72HUSi5hDYi8qWMfpGnDgGUJy7gWyjxGPgHaPP",
  "key7": "NLG8d5WErxBhTHt4buiC5rjaRV9h8YwJDCGs6fbQiHH779S7w2JKJzGQc2A69G3AapM5bHPc6hMKV9Xxxt2QfS5",
  "key8": "5qoiUpMCuq7aW36omCBaTPAyBTgrUewgLDFFN9KrpHQxU7E9QRG3SpDvymUcA74Eb6R1vRzbcpwG277KQZmfYQuS",
  "key9": "2PstbmrXo2SRZtGoDoKW1xYM5TcdoqJAsjN3h2hNQvjKnAbwPiLntdR8gxsPtU3x8wktxkTTPnw9Kprfpj8LKXMy",
  "key10": "hjQkPDuCKo9S6Uqvb9UamCVeuKCwZKXhYpoYY4E8arcGNoDHSibH6m1uMxCQpkNcXYGtsQVJnCanCNusoZVGv7r",
  "key11": "4ixBwzPkwKd2rBN3u9cLzL14bLCZtNRVBbQcqUEUwkzRQfsTLsUTYDWaxmPvC9U3B3mJjc2Z6zx7QLCYH5NSh9Nj",
  "key12": "2ybF2diPHYdfvcrmz8mQJ1KMTjaNw34EnhQEB3BXL9GyqavEhJioc78CXt5wV4sx9JUZ83Ytp33wYpYN5AYBNT7L",
  "key13": "YTiKta8RaGzdT4xigk3nxELsG2bVE6GYBWYFU1mc1nFjBCJUFBssyVjKiH3Qh161JHQkgjdmMSpJoEiyw2sWNaa",
  "key14": "3Uh63tQQm5pyDDkQkeQfRg4vGTwzLGNSjGFa5hXoHzuf6fbQfpM3ZTgroX7HVaCdgTV1Tav9w6qyccM5Uo4f1KZE",
  "key15": "3geUXDgXBcFEdANf1nz4tc6SfRsP437mnqkoTxYMSeVuJvXQ7XuHmaoetBoTRBE5ZiLEjhDffNWuT1XPZec5ssyY",
  "key16": "2V8zZ8xaDaEAT8X3CGQYxUh4tMAgxGGpEGwdngyyvt6JycvGE9qVpstMt2K4fB1CiE26iD4RjPc3TpxWEo1SKqcH",
  "key17": "3Nj1gQRjGoyZ5Zv5fgmFPgxGkb7xiMsdEkfK4DgkwcA8sxKxqLKFwTxEqqT9ka1MZbB4x4YBtgMPSyuNb5kwrwoq",
  "key18": "42ZH9W3CbPyvPem4KRBVcWpTMeCpN8K6qJgJbrLTveqD8pYuJDdRT3FMPGRJAHtr8A8aUMqtRD2u9g4KBv8iMDYL",
  "key19": "2EPyKVb7yosRDsgR3tcBejdnRdyaEPkX3fimw4MMh1vnK56yzYkrW77Jo2S3awaxnz2e66wn3C1rUZ8qtYL6QVjV",
  "key20": "3cmiUfc1PYW93rmchCPeSepz3Fijj1an6Z8ZaHMAzxouwanXPQJMbCB9ZaMM9CGEdZz3d9hf8LYhPke3TqDrafo1",
  "key21": "hfcYFiWLzihVwkZs8uo3cF2VdbGSaYxSxX31vchKdpkdZJKv8GCBKuWYrG6RovWtx4wan5y2DU5n6RRFaz2MdLb",
  "key22": "2VN8dD52xh9BiC74Nni58WXGCvboQzzeYG7MtQZRZ5xogKfEsCsrGGXcHS5Zv2YRBe7pCceL1XxKGjXXLJ7w5YS5",
  "key23": "4dEiroR1q5UaKR9d2CucaJAUMgu9aX2AEuPTxbkaCZrbeetJ2VEd1QFBN5CrVxPZnsJsqTigfTraZ731AfCFyrWY",
  "key24": "4dzzARKQ9p8tnzTJndzxz2QAk5wGCR4E62UJ84ttoTf6P51SQWGEwd6buXgU6vCrZ38rhW3hPXBkpYvwRMWk1jY9",
  "key25": "41jipBgTgpgqqBeQFRYFkwmzvgr9vq4XtCLAZHFTQhLje9JYXiUYf1AotZXvaiVPv4Y6BNdCgYhyvpJCC9GQYxTk",
  "key26": "4Vyuey9vX4by4CeAEvbcVenVcfLPXwg4LDfaTQAHnaadfqeFBcXQqnKRPezH12zeZgq3yCA5ZzFgPgCuLJxzpZrx",
  "key27": "58j8m6JaxecTaXC2tFqnVPUHsVzqo3Yza2M7azuVV7LML8kGtJjqkykjCm2SiiXocTP37fXEmiTCxvDQFnYQmzAQ",
  "key28": "3iZq8C6U94to3r58oX8ZcFr66dkQymbgbGbHWhNYNVg9Xjkg91wEwYFedggWtwvGLupwBNg7GsYNbwUhThuNcpey",
  "key29": "boW5aQaBKeoY6Ans5eWPHQkg5478HjkoWpnz8ikvk22xNypX9FmHh92S2wwUwqgqcNyMhMARSDiJim88FEfApJp",
  "key30": "3zzjXfhdR3kyhkwJA2LHJpTcMr8tETXpUaww82yUcnzvRi6ftLwXbgmU2fcMjr6MKVV4rycDmSq4UJsrDnTGR1wv"
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
