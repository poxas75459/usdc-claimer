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
    "5DzAj6S8WTJdUDVs6LDRDNYAMVdtsWkooCrEeAphYpfLvo9jzU82cYqzQ2QQzbar17UUqtggVXLkULqWyAfz6g5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66K2XRYw1dnHffoTGx8jX3zXnFFnsU36eHPgxtfpJmcuHa2TQDrZ2Qm1PrByYQPdKXjAzDBHAbZrzNAw3fQnDJqk",
  "key1": "2wRRY1nyvr6vQ7hNEsJSyVJE5vUtLEoYCcMsV7qCCTMx2wZBwUVhSwByhuuvKnWnGpa2czVJwUSGCctvQ3VzhquU",
  "key2": "36cLknTjxBfG9KGgYtFiEaKupDavNHCimhXvWrR1jTjg3B4J7hJX1e1P8hqPNKe4dRYwcYybECrXRqDfTu7JUW5o",
  "key3": "34QYJAzKqaXAys9Xns4UHtG3CRKiFxUvPN7ThmohyhV5hjui33A91YhU17a2DgoPyNFeo87A5fPnKrohgZJk5fkP",
  "key4": "5BTATBeeH9Pt7U1QhWTwJqzxscL8Wk7B8wVVTeSVTujpoi4cv9USSCqw75QvcXvUNLzhyca7KDGHnrphkzar57Le",
  "key5": "4sEJBMPBmhE33t2ZLrUPz52YUEcpkjMFMrwxXmrM7wdZRDA8SEK6hBoU73ftdaK7PNTEAxJK3QPVpy7RMqoqByHm",
  "key6": "WifXqEvLif7warQSpgJ2S1pKV24ZyaRw6kBV8RBWLSC8tmpqbHhFmETzbzWwTrPTa1sn8mMuHnPk1xQq7HP1SrJ",
  "key7": "5Lp6Pmmx6JNdMDWYhFDBy9JCUJJ9v9a8Zem3fx8yUxUysZG9vqoZnYzXj15uzseRaf2U8ZGsm4Kym9zN1SVySMEU",
  "key8": "x59qPxxnoeacAfp2dANgZhMJyvJaYDGD1WWLES63V7miHebwm1WKdJMD6zKXSg5uKcQdefpHizR8oXsyjWL8GEJ",
  "key9": "26rUYUChLv6r894FyqFgaN3cWYpGVw8dZRTBKWAEzXQUi5tm7pGWZqpsE49KVCU4RYVSAEsT4bjWkEeq7V5mLneB",
  "key10": "2tdyoWsYYkeim3aWJyJHSohty49KTej5ZfrnZSAm3raT4nGn2JyM6VbXU5qFU2oVZaVGYfiKc8MnYoSF6U2TanhB",
  "key11": "2SXbhNLrCmZPuU8MCbjQ71KNoW7TepMWEJnCBEVZ9W6X1pxYje6e4ZTFsmUsT98aPkUfQTU51CZyeQjjucNmadR7",
  "key12": "2LEy1q3zK32QGjv9UnysB85ceqWrsyeAatmPEBnt7mTYLJVvkiPHxAi6Xcr7ntfaaNDZy4unEBZJMRTXjVJVSWpM",
  "key13": "5Db5Ddoo91pbdc5ERFcGGfFmQgTiVtTebpcc7gB9SJjHA62arTRjtLKYMyXxEriqv85JG97BdPx26KWguqYz3Vgr",
  "key14": "2qM65E95w9uC7FMVAeH8wBYfrYh9tsq2Fk7ydR4iQptq3yL8HomiA2fA6QnhAXWjHCnCaV7so89WQRemLZpbrbd1",
  "key15": "5dRsY7SRVwPaVLCKE3ZjXqKdN79rc1iTVoKykHAAWVkN2vq4mq5dAMYg9aDaujkaFT9z1wrSv4KE45uEQ98QpcnS",
  "key16": "5914noTFjNuWA7KCMkEmcPF5waPKUWtEeVWBnsXAtK2MDpGVEDvDPHzX3xFpQUupaxVBoBWDRbJ7o9GVix7Q5SjA",
  "key17": "5nx1awCwHHhG6xh6sUfeYDPDYWwgxYGrjpCMQWk62umKvaZ8LoTAuGqgKvn575TuMLPmM8J9AxEwiccH8ewS3oPZ",
  "key18": "4Ax5zsTts4q6LJSFxtAPryaVzqJdL2s6cgMxqRJj4bXVkZKywJvV9pHtyMr1qoMDndLj6ZAdKBR1EwnLy8Lv1VXk",
  "key19": "yTLam5cua6uTVd969Mn3qzA1BJbRem28F14iTyjRLNxk6mKVFsCh92oaxHLm5daqpiCs9SQEroF1CN79nu4A6iB",
  "key20": "5RQ33uiMfKKVa9FQ3wQnQAhazqnJLh4KiZJ9eYmv3nWbcByKSxEfU6ULVCXtwtYPZrHC6ghpdZBBZHZL7szhATjp",
  "key21": "4JtZBBZf3h7okY7aB5q7XYdF9kkXauELDymvj71yq2iEg52CiepvXw1t7a85KLR8pTwDkspGajCF4wKvcEXy7y2y",
  "key22": "3UfYrwkheEHb61rijMLASSKkCKKQgkRCW9XDmWMB4PyMgvWptKUxobHWiaZQh9qrMrBahAdxaAPR1KDAdsmLDLMG",
  "key23": "51D99fDpfRtuYrHEWJBUS5RapcAPUwNkJye349PsGKU46kwYEJshCWehZeaPtLZzZS77fmXX95FZF6AsiF5KB49C",
  "key24": "FoBLbq4vNKSo7jw8bkEuzKcjPeXVrZMWPBNmBxHA9fX8hhTBiSwtq1Kwg7Y7Q42n7cXZJhha8AdVsW4kZHvYGRb",
  "key25": "4biAzramwYYn6mzDncyRyPiVWxJiLMcgEmSMGVbwB8FHRqQv9sv37yoQ8AD6aZN4LTpVpTuuFoLZFrudNiKYkQbP",
  "key26": "4YMU5trtQ8DdddxrDWg67ztcU9VMhiQ16QFc3jNJBYvawyQiuaY7uNUcDHiSBV4t1kDtVVi5iDu9kJbvvricc8Dw",
  "key27": "3d1P3kz62Ta7HAXkYpD41sWT4bGNUTn4zQVwx4jQLqXa6U7SKDKXD2S35XgLfcFCX4XsKc1qTJvWRnDKGiepr18m",
  "key28": "3DsniXKiHYgpjmc74PFY6pedZr5EUg6eL11Zu5fJbvZhSFLX2A95oBwqJeCnoZjehkUgKqAKuGSEXYjkSvsao8DT",
  "key29": "5qFs3JzUwGGPi1dSxaW5c3M5mzc86m9Nac9w4M5k98DLCGmMCm4tZFwseBNWQV3E13qtXbVQyjZfUjKnq9ofQTrr",
  "key30": "3Zd2r41vEJYNiozsboSii4AqyebhF42WMjuRqsoPEVoD6DzNYK5dB6dBaKZabm1NXiLXkpsdrqDQU7HVavRhWoYX",
  "key31": "4oKcjFzZNmVTRb9C4utLBHg94bSakjRZibKDsbf9gQ3958uWBw5P2vuj6tHUPKRkzzeXwzL69S8k911yZPcq9WFB",
  "key32": "5GuejTv1PWQLb8Jft7Zm1fwubCC4pQnw7quHfyCU1msMTvVbHWVx9yjEccAa49yiyZzj3j9QEz4J4KU2w7spW5s4",
  "key33": "5epB5JkBLmyGcks3oKuatWuRcNv7u2JkDQFzyFM3K7CVgZLcDBGUTcCUALRe7jindPg2ms72hn1UVZ4T7d6C3a7z",
  "key34": "35cLs8Y3iprTRHMGM2G8yhE8YB9pUY2HghZKuRyCzpRPJuDcrZURWKT646efQJQp8kjAcZm3pEzddaXjAeDACZTd"
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
