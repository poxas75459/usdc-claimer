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
    "LdK25L8RSSQueLL8aLMGDyTAWhSK4XGZAZFqcmHZqd41pMFrHNMEE8MHvHbnU1Q2fVuFBRPBUKFxDQ6sCR545tX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNrdxanA77amUJ4XzS3fSkdYpgWosW55HykGZe1XKsHLapoDNYezTPmJahKDEN1wTqQzxdbVnKLKqdAkPFYGuJR",
  "key1": "5bX45bWgjmWtF3hsHke4hUVWra1fk2zcXbCHxoLsWa3pgRyDJF7m21NFkqCFWRjkrHK1haMCeQWq7Rx988Gdi2u2",
  "key2": "3dxpKMtSs6eaD8yS83ehyuE4rZQmdMTsje5sg6BmSwsuNaQtVBxvowxC4d7Ye7riDqjAKgwb8JWLWMC5K5g2xLSe",
  "key3": "4NZoHcQjWypUSRJLiv4mPh3L12X8fgh6xTMxoih8JH7ujdcKv5bN7AcDoEFZmNU2w8uMrbVa2xr4rxGzRAX2FG5d",
  "key4": "4D6yGtYAzeeDZ14rCagt9edCxHGnfSvbTrkDAPGBeU6B3H6VmVL5MVghNhw3U4nD4aBcpEP6ew8g27HhxgA1b3QV",
  "key5": "u6jDGq2GJaEXprvXuDLFRyTb8tC1EUzkf9UXKKv7SX5FdW7hmdfGLVtc9RBnhCkQXncsv1wN5Mj8E55ZiFSDPCU",
  "key6": "2sBUuYUUEUmaKagWMphETB2p5EoDWd7MM9VjRyghE7v48fQKXiZWcX1zu56RXH3ed3SnCNKrWJ1QNqmZsoWLShJJ",
  "key7": "5NUQy3A8P2U2qCQuGteRfkUonLCHzuYEL98RDGgjcUcxtD9ybvZu149G5Vb95dXkztSWJXurup3hSsS76D9htYph",
  "key8": "36KwjgQU4BrWHC8RA6NboZTganvbXVgD4s4Q8BWncza4QhKyUKkfqsc4XQJiYh2VxMzwgWukqWw2zk8HPrN6A8Vo",
  "key9": "3uicKbsJt5oF6qXTzSMyWV9UJfcVV4UGTFgUAERSSyBypJZPs3wDF9RcZ5VUaVDK2iqyeqEb2JyTAmKPP4yHd7kb",
  "key10": "33HBJroYb9EXU2GUHDjfhHvRUMUNBWHDmUiXFFJu6Qo5xMZFKohqqpuHYpCwhRRASrrMAdypSGDBJp3UEBY4kdcc",
  "key11": "2x7eXzKqfPT5xY7AL2pV6EDjHJ6vQFWGWsYWeA1k8BKy5F1oUaCLE8M6aXS74s9Z2MVbUuBC3SG1x7qcLXqe37iY",
  "key12": "3LTWBAKgdE8MTULU3X3uPJbCuba2uWdJaND9fn7Lq4F93q89wezAG7ZXZcEZFG9ZPTtuUubYUmRHn6vSSMtg2pMm",
  "key13": "2YJ5GmoM6xJAviUwctFU2dHgvaQYtrKkKQXo91WV3ZZm7gLuPie1YKg5jy3rrU9EA2Aozt78jfF1dpWL6Mzd6RKm",
  "key14": "32sg34vKHz5jHKdedW9MerX6FqJAzuS5t6N57EXmrc2inVgmx6i9avCHDakd4k8y4rxxqGW53YMXVWZ6uBQV84Ry",
  "key15": "pedw5WzXR7iS8pahG7AYjS6vDpo3PFLwBZnb5oxomfovtsDbxNWnZDhrbv7EuKhPfZ694rsPvNu8g8escoRDDMU",
  "key16": "3BXBzuEedxxu5dJj1jVVN4fS2KqwTL1AWBezjmSnifcfgb8VaNrBghzbu55o7a2BTanabydxHoW7GeF8jn7JXSP",
  "key17": "65XQrX3cTF8fqHp6qsdqHA8F82dAT8jFLeMd1EXCzFV7ULZ4GbDXZWTbwVFKzR1h4HZ7xcdKycbTPRvdQTUYUuBT",
  "key18": "5JHQSaT2qTL8U2jv3JpqzAkSgL2LwwEY3xixAidFCmgCVezyCiWiZzDtUfJFUbtqtpkieeyknRZ3MMm5kcBVSV1z",
  "key19": "42zCn5e4uQZN5ZoGq9q7mtiwPWY2kCHtNcUnj6tz7qJvvHunwpin7XboVqhWhaVDuYgiEWkixSs6nSyYD42W7m3E",
  "key20": "5b1V16BmVwJMQxFXBSwAhsAsqmnJ4x8gvvCTcywtAsYAxJRL7QWtPyn9VWNTb8mgtYFXwCNqzDjFsvxBjgAwKHku",
  "key21": "5zvexTTdtFFS2FB2NhUQzcKKaPJiuCjbeHfbSA3Cf34nJBHg4z9YxXsd9cULCHSzhYTdzJdNqi3HyyRAVm8MiPUd",
  "key22": "22yXfXvFJmWDMRAqVQxZ1sDLsDFtidF95WpCjXzHC6pNqNqAVC847K7PVzpWmg56VqMWozqFTYZNeLg85CvmD1xz",
  "key23": "64X8Uy5bhwwLBhrAPCq38i4EujAEtLKwNU6dURifTwpAwDJABocMqs7TUP36tKSot9NENJfhFfSarPAaJGjJXreU",
  "key24": "8RZxgTzHGcgkWmy3CmyqJodnDAfJe91j9Zw7dNni2ipYDh8JqvdPMUARbboVeKaYBMqCjnfH81KagZNFi6Bwsjc",
  "key25": "LZmxQwfYGqzPhMYVHDdzTskSFjQrAdBeGyUxsjxsbPpefreeJ5PnhhUBV3SbJdjFx7Ux5N4SF79AktMSky1Js7s",
  "key26": "621M8cTB7qCsd94haNgSLUChSW2uGFxUKqDBmMGhmk6gczaCMCKshZB7DxzYjmC3vdLzxNbE115U8GN3ZKRx4b7K",
  "key27": "5xiYfQNSCntXRHWc1wQPK7Wvcg3A57LYKFxJPdWW5R3XxJ7gBvKiUE8KxhRGYZta1Hd5bXYwoDomGiSy84zvtDgK",
  "key28": "3mW9pQhjawvohLDfw2KRUsk7F4KyUvXQxs82eb9zPbsUk4V5HvseJ6fecStuiEZBF7gZ8zNSMKHQmMsQCVddyiET",
  "key29": "2AtTQpnkuuyCPTSNdRGY2br3uwAs4FCv6DzmDKNJVWiA6Bo6TDhKqjzbNLokWakZmcoAZQzuW72NCM3XDhGek8Xw"
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
