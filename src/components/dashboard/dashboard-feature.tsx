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
    "3DDwx1K8LDq1NKP5wTZ1YGQh6gLcaEctvwHEj5S3Y8u2Unwtr14JQXH11HdxoJTRafFF7ibgurWwvhjfvdAKsR6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5mLdfQMTQujdWVWwWDGeqy62EMMbWMzse6ZZEGaejroFY1nxf2XHGtsTdWS1RMrQhzYuoAMkTokiw57J3eKgrq",
  "key1": "48Na2mrC88jLPZw4PB2a3XKDp9HzCQTGGsHA71xGBAxVcioKuFQdqBuaubCJ6DER3dqG75JhWPXodCqqNBHuNCrh",
  "key2": "4StW9Ft5157fSCoBwiZywP4yfDPrd5dQW5c69sRWbKo8qU69usgqJdXBmNcK1LU5Zhf66FfUwEWznkqPa6DKPz5n",
  "key3": "2Kz39S6FGnzwFALtar5C7QQaW1TGCRKuUGmfRrrnvyyLn2q5B4PiL2CtsJtTHi2uxefmHNWWJQHpw2sVTHnWpRQJ",
  "key4": "fWWhqK3SnfWUBN5cJg5JErFbxE8sA7scNJK6XgQ99mxajseF794TQC9CFJQ1dxsB7hdamP9E7T6UaXZNQP7wmaz",
  "key5": "3UP2ynvYXtVjQnXf48Sok4ih4ukBwsxqTBMJ9owBq2EGFdrv1eZwoRdM6yw64FbUJPsL8ZiA34Mq2qKaVMo6pev1",
  "key6": "5uu2g1vc6twdc8e2X9gD6dbiEb92ULE8vVUEGVyo2y3kEzMEDUjEUGuMcAy6AkefxFXEB3cFZvLf4t2GLqAihxT6",
  "key7": "2K1gjebd5M1JZQqbgrmmynGwnxHuJqFoRFH8rF8mJ3hiupY5wZgNeVtbpU5zBGRxm7qKaquq61TzBjBskbSxfHgX",
  "key8": "HZuCorQ4y9Ru5kmuQ6BHxYdE2vULSubTkDZY82K87eTkCnU7RzqpwcKbADNf2tniLJndNWfHYtNL6Qh8mUYh1LM",
  "key9": "535K1q1KpiKzCFL3HqMjkGP5gn8qRTY16Cco8GtaptUYFLPURua1j4h4CH1Cw3KhaPciCe9JYdDojzSPAt2xGEPy",
  "key10": "2QZNGSgu2JdJPHdHGfE7pSyAkxB5xLfr5xaK4Th6ed9pr7mQ9L7ducUg6SPLbEsJ7jeiaYhVYv3PvRTyQd4uUdVf",
  "key11": "3dWRJMVs1Fjmh7YULqhvWxgSsHM5VAzVcBW8C5GVjmaWYkDYWSshZG6QaL1fn6DRr6KcfEZvj3iPXprrfG7LkthS",
  "key12": "2M8Lfzk79h4LMR6QCw6cC3ooiRmfcYkM51iKAacxD8FK4BrWXYMHDKM4RHTSsY6zV42y2FJ2skzFK5BQeJQy2VjB",
  "key13": "3P2TxCp8PuPxDTY8GcqZM34yiJ9CS9U9mBVfuCHFDxnLFqwqnBAb5BnVqJuGaQKtmEMcGqgUKEaE8Ykx6YQa2me1",
  "key14": "4Qidej8ELNqpHa77Dm8B4oJ6iqqgxQww2JDNnYo8nmxmrHBDRuNY2QzmjnGPGmqEbBKHPUy17HZxynnqXPePDPRt",
  "key15": "5u19ntRrmPFD9DiPBV7YwHrRQBsG2VmU62FeGUzv3RTgZAUv7btyywmJP8i12pUNNwrF5TckcsBg7uqVuZ37SdfA",
  "key16": "4VWmiVKBgnT3toQzLFwU3JTfHFY6gH2HajgUmy1FwsYz7KwkMLyrpg4FBcYd5AMzgeovfjsEUqfXAWccdzwa3BFh",
  "key17": "pvZ1mxcwFqjuiB9ZMpQP5TJ27cK6DkzRBsUjrb4seimsaatdn4TS36Ni9RTh8FvLW2Hq534UP4be4u8rvM8CcXd",
  "key18": "2oKRoyBMWMePuK425EozX32F937bdAT9sXkiVViNK1YumD6QZJ33J9ooGcMBjvom725mdeJrMiVD935QfS5JGosu",
  "key19": "49RdJ2c1879499qpDkdRaZ3Ed42JeEo7nQiFowXt1H7jHHV2szkmdMdZHhSray7eL5wsbHUkvabspEMMaen83goN",
  "key20": "23KiireKNt1DjPT1gDiTnUuBEXGr8KunrqMKh9d2rvJegjLoaR4AkWeDHUT2ZCgA2ZGftRiv8UKmC2WvyTuobcsg",
  "key21": "32tseDtAevKz7nEQDTkwaGy954XgpHTs65bxUaB1YyP6R2v6q92BL9SyUXmzhQSF1C3eHGeoHbmuBgJWiBEdnaFy",
  "key22": "2Bha6x1FSRyZYoqAnRyf6A1BbEGSruHLfXX51qirmdH2zYgzy1wU51nWAAzs7tQzoBkXfXwQDgm3wPX2ejhc3had",
  "key23": "26nV4wg68oGBJXW777QuQDETcmjLVYMqZNyDSj1HrhLCZ2tt1Uvxnd6jdKryL4ypNogiStbxV8RkencPsoTsMbF2",
  "key24": "5JgmKGbgvMkyJwQH1s7Jm5MUW6dbnmASrS8Gqr7GqCTrpsBvL6Pkj7BKrYZ7sKg1xLHs7VCRfT13hh8bZgNAZt8F",
  "key25": "5fvQkLhUXaASdRUzbzB8zmWTbHHqMgKbb5p7i8EzUmJnL2XacjqVCtUc7ywT99sh1CSETm2DFovi7HDUdBeNiBdx",
  "key26": "pfKVDMonfWJ86TKaGdHeDQ5i4RHT7qhQFiezBwiREPBBLHPzCdA6zkedqGTaC64otV1HsPMS4NbdNmtArWxBCSo",
  "key27": "HdwEqm5ya6SXpxzQV45TiWtXoyjdeLLXYj8CNuoY4Qnrk55surdut7iWJw7y59eLS1Pr1niJJPLij22eJrSLNnN",
  "key28": "NDVk385UXnUCH4np4uRy9gxt7rBcstrPhqktaPqxHjR9wJ1dBGaUbC7iUhV1QjVAzjX74qi2CzTWvkC5bF8Ruy9",
  "key29": "4PKzGGSZEG2VSUwbuqufoUStE3zc9D7bJG5BVuDhuUCk6DKot6erXNv7Xcp7mogZJhAFJqWcuMnf51MUbR2MpqC7",
  "key30": "5LvJWWB23WzVkmqyS874NNgDdKU4f93JPko7Qgsmx7QRgeyh6AX7uSx6MMowB9AMWuqzMJkGr8WYYETaEyo7DHkW",
  "key31": "4Lf1RkyXbYaMMcS68BzwScR3CBoGNpd7QFteF23yYqvGpdxwWQzxXyAJuorLhWPLKmVE1R7ezduYUF7LxukE84EU",
  "key32": "3xEmrjdNU2mjVTGeB6APmm1AcJzmJeNPRFhchsDagzJtJ7ko6v5oEXL7wHoe3G87QWRagiKWBU6iLzevkjPhfJKq",
  "key33": "2PjvKVrx33Nd79ELVYY8dcBfUcAsBXbFgCakfUi7bU7uhLPeps3MNabwx9gSBfKFDxC85oQ3pKRzwW17LDJnTcGE",
  "key34": "2hyRq9oH7ML7xqnF9uZF6S2TrZhqbnEs9TpocWAXg3Bwn6fXbZ6JP4gJ8zagD6bdjHwf3AF5qb88M4wdo8kwXEV2",
  "key35": "MFUUpaTF2sHAMM47SXNtcCoJzH5Mo9PmQYdDKfQKRjn5WDZqXqC4mDkX63cPAYgTquNnc3rmJ61HquQL2dnYNHZ",
  "key36": "3tcRviUKZy9Qmm4fQwXEnP8vowyRHVzExqcydsLYKAd1iv4xDDkUxgYpiPmbZoXfVjnhUgiWXXRWp7vypPJnavAf",
  "key37": "2WKtetArWWLrctAN1sqXBQnptLVVaZL1RAyagv6VpL6Tcopgf5wnACz3CreeaZSeEEzySPK9XWhg6Mu2ycuQJEUD",
  "key38": "45kXsCjt2jawoZRtyXz64Gy8fPMYXoZbmA6oaeVUgm2ay8q2ZiG8ECZMz8mhzL6NmF2NHdi21po62nrf5iNDw1Up"
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
