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
    "2ZC6H2RDK94XpoFaNwL5qVdnFYiexdXzFdePc1SwLiszfadnLHkN1gNDtG2E5RArwv2Lh8pxWPXQffsJ5iJLiMbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABow6eZUWGTFdY7nsbL3af55A5Wsi6iPQ4z1WRsxuZzfosBqsyxdB6KNY3qZfa7i4yZ8wFffzmpKBTwjcNpTkJZ",
  "key1": "327uGSiia2Ka2ezJRk64jrGg5CQed9W7LCjfLph5xwAFa7RoaiuJSvfbXeCiH81C4BoX5aSBubQ2jtgskLXVqrKZ",
  "key2": "2Mt1cYX81rYvi2gffesjzu69jxjAuvLWnsjM1yL1Z84L7jqKn7kpE7azT7H4rygu3AUQwndbJvNdTo5Gt5cU1m3r",
  "key3": "5fKiTsnmyTvR9DPgEVhQYWLvqrHkMQU4aL12jgsQUaoJLKSwmtAqvradu1sLndYa4JxS6sR1Gefopm64fJ2C1fUD",
  "key4": "2TKWhhPfwb1ce5yZKcXDMyTHNrXRmjm5t2iPgziqD4Enen36EuY2pnD69HX39H4cnBXxMX8v8GToP6jTBD7caxvb",
  "key5": "4FwnxdfKocNRK5hB68sEQhoSf5sKHZjo2K7ey1qF2WKgSEJ3Ammy4E7UwY2uRYge3RE46Ees1VX6MgNx7uDvFG21",
  "key6": "2wzeXeUMdqwD82hDbmCVUv9d7R7gCEg9PB5pKh8kVZSmuFzcLKQ7GwV1rNkJ5jneQdUSQprH3UJNJa4Urrkoz3Yw",
  "key7": "4mRQTUvexBAvZq3XhFcWuSWARxb383cXuiKBQ9BipdfoXiM6b3RXqFofL6bPRUhFzaHyhGLenBathaRkKSjosGBT",
  "key8": "QNnC82SURHm7curqBheQbLgHNEq7hDQgkFpdbRkcFk7JXLoEab8y3KTW1eLupMqhgKkXcHBMcS3rHRwEepkdcpZ",
  "key9": "51HuzqNUkCoE9M8noC6KZ2PsorqrXiS7WMBHiNtcfXEhvnWanhm9WhZCWKcW4VJiPZTGn5zkji9tdfcSitxVSj9i",
  "key10": "48grRSN4vMLWJc4F8kmogkCBVU3E3kw6NwwNgPfL5UpqmanseZuCSKTZEAobtmKikDVPF2jLwjF74qxHK6Euy5kn",
  "key11": "6aFJD3GVxgQjbrVMUBbDzhHtdMVHCZtJ46X4n6uLggskNH4kkcemStEBYBWPJTkKYraaVh6HUyJRwUd2iPoVDz7",
  "key12": "3eJB4VCXiDvaW1z1aRTme8JsmZjMbBgEpr9HneqX2YN9R1LAp18E8sPb93rsVmHWqaoFMfcq2bzuA6xHUFYgymnu",
  "key13": "3RSQ97GV4rVf5bqbHHS865otiPYF4z7yLS29dFie7wQ2AN3nShWAxRTwnVKxFSvgy6Dw9pq8zXiYyDZQeQ7rf28i",
  "key14": "2JawcX75MUkreg2Kke2jh7cFmeMZXo8mmECh3fAuQByY6SkTLtJrut7SGFtJiM1CqRzP3PgxumZu5eQDibMp8W8Z",
  "key15": "2b6oCWSi9nwpcKuYzyYwednTvq3BqV1QXiW2A9UyhWAreXP6dKRj8T3NYsqz6r93rhgBM5BypcbLmTnWPWsqFpWY",
  "key16": "ABxrat5dYyxYJM9BM4P8GrmZv3B2c4ijTXmEycubEUJsGXq4GoLtH24pWc9xf7rqd93mUQgsY2TDggHJdYagdaS",
  "key17": "38UPtL8sefNfyNqoGRejxNrcrm6HcNMfTvbThbrXb2UhBcNjYtZFf3hmQsFc3ZXj5zVxbHLpLnuEjpDqLgrHJAdU",
  "key18": "3DwAHpTLJjzf6u4LSTBK63cLRNV1d8YudHFHmTsh1htSSL3oqfbdibuYoU5NQb5FVHRPgo7S9BF6cS4HaVvKNs6N",
  "key19": "3w8kNqVKzZUQ8NCNaWQQDDjsFhrbWPuoWhJzh1UHnbd2uEd9hwLXiA2VV7MbuYoRehLLYj78ZjPX8rUdR4Tfumt8",
  "key20": "38k1228PFoQRtCFVWiqVsgHu36sNqTEzi2Ky8QggAgwYoh25nhR711xWqLzGdH7jQ6CSi8NQxhPB9sf7tbSFvrRn",
  "key21": "4RHA1zXK8PGBrMSkZE2fnNm37CzLAJvW5wEG49DqMvDwL1h4EnAJAZrqJsedgyADk5ACHw2wJSorBHukDiDi2Syp",
  "key22": "5ZL3QfJAWsFdgf44Ym8drGbcM6fhfqMH9G2NvECWm4U27xq3FzkfykAEXfw5Q6L7j3pq3gdGURMsuXHnzKC1gZxR",
  "key23": "ks2GjciMCDipQTGDHs56HRggxq3R4wFesEojnpU8b7a8DWnaUrZ5qsJN6CEo4TxirXuGjZaj2V6GzgLQyefzMGq",
  "key24": "5XGWtFWh7Hcd7v6M4VxKczfNGVr1dP8qF7sKPKzKDiHWBfdXfcAwEXYSt669ZAEvtkLfELuCn6CNPD2BAnRftJf1",
  "key25": "41fdfJAZaQtRKsTm1fiXzSjha5M2fUyh3VVt6pnh9WMTbYZCtAFqfXP5ie8U6Kop9hE7UQqWYNnBdHpk7x5BjoDh",
  "key26": "2ZLMS2gZaBN4cqf5uTgMBgnHqX9GiqV9FmY6yvdiAtG5RXqwg9edAVAoAop3p6nGn8GpDPYfKPkec3415as55JVf",
  "key27": "bijyvq5KZyo5KMzXjVJGjcwTWsRCNab5ExWUDhAdA7ouQ9qyrSX1YfQFo5Mdgn4aUuhqzvULDqYEnBTPeXaTvCP",
  "key28": "3nDuWujoZRmaxEm121ruQ6wdmFqWVKFv19rCwoZMEEcdmLzoY8DYMkfVuoTxkJAhR9ZCoPddcareyXLyrTFiYvxr",
  "key29": "Wm2EiWUZCzCSXA5snCBhTnY3pXM4q5xqQraXxKaj6sRmcYauYzGwpvcd4x4KhHDL6YDMuPZbRSYrTGLmqCQSAB7",
  "key30": "5uDuuguBSBoBvkDknPqEgWnxu79hJFJcreH5oWTy2b2G6C9dgvgJncqDu3fMBb5NaG13gWrzrbao5kXEUZ8nXcP7",
  "key31": "2uucjDUDRFR5rEM5Vkcri2DdtMgk2h2GhyFzKPcznqAT6gMFvDB7H3f6yuNtZ6DMejhuzuqMdxQVWcLGEFLCFGvC",
  "key32": "3f1EC4RcLbt1u1K6ConJ6sjoCAsFYnVqsaRJQH8jR9bW6KBfErVvx3JW1YfHgp5DqgrpDKaqzDDV5xU6jzFGcrRq",
  "key33": "4qCwjfJoexaxnWhZQxrF5RV9hwWqNdmrH6T6G3uDpRVRLvN9f9LXtGEhZKCYGJ2xxcnNr9DxiujATZaBcxfbNqXL",
  "key34": "5SU5FwaSytAbjC35W2yr4MjmYMiw37cGK7Kgqptwg7SiHMnKjNe3zzJuM7VAsZMgK9FuidqdBqGehwQBNPfmVCH2",
  "key35": "3sb4xWeq1BDereZVW4eRumxjqmWkvkWMmMTpybdS55mxok6z6cBUYx3bxqzbxKsSUebPZgZNHD3ePJx3DM6H1Lo6",
  "key36": "5PPzTfQeMNTABj76HTUzHzuMBX1vH75qUYcorw3Ao6JNU7mF48Vwd7YGTLXG4YbfgohCu4dGh6J8LWr9CwXnbGQu",
  "key37": "kvfYSnja9jMkkg7R7NRC1wnCK3RCDSf9eR3xysiqBkAS9mJYX1x4UTz8uxpLB8LYbtUVguqGgC5Kkk3R1oyDXKw"
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
