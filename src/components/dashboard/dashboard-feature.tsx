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
    "3XRAmsGSnQhU5LtyaVjrrJUUZgR7Hex8dzM6xW6BTW7qEMwDBtqVwELp8huKWqzmCKAXe2ytZy5wdDMkJ7r2y71y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nz5zVXNhE4kur7PAZUuS2QQn7srQeDuoU76EjmLKxhk6x2kRyJp7ccWZLRAPfftxsHQd6KgFQZoWVjw5rDrEsd",
  "key1": "W1hydXEtCRpHSVUL63FMY9qJsu7WNY254dxWaRAXXJtMoKDAz7tRK6mzcNac8n9KEoAXhnPVYMwoYbFTKeYD1Hc",
  "key2": "ahEz6t6sbnYyJWyYZWyhKmCZSZBwhWRqa34XxBnExdr5ZR4yytJb7LqJyJ7hv6k86gnDkcU45F7zh4SxJJnupq8",
  "key3": "5iyyXbW7GMvE3ErTrvFKmNEfTXrGWzpdBHLyCQ92WqebFBUETQXfGEPgYKs222RJH9afSKJ84qwXQG5neBvJ7m3o",
  "key4": "54d5wmapjFTc4xtDZu3W3iAicuHvJRfZ8ugGjFwEDkE2nZZgcqh1jYxw78KNtHWhBHniLacNn8N7Y6NoBBGUtPbu",
  "key5": "4MQMmHXPFuwjGxJxNSp79qaCHJtw6fwKa5FyyJ2a5bVSRdBnAmqbZSXebvkka9LhuqVrZtt1PvvTyGuNtYexoTL5",
  "key6": "Pv9TchxBGPBecnJooikq8XWn6P2s3mxuswDGmYdXfmn8UAJv19SFYiWSqiuw8EtjGn6ftYaXnsfxHPnJTgYUzNx",
  "key7": "49LF8TP8wKWPLV6ALXMsDnRYzXkJfia5QncXPVDP5WAGhDfEBPaTg4DfHRPDoMQCR82vrowZDumVaNtty6jpbn8f",
  "key8": "2JobvpU1WpYrHmj8ZgTquexmjjRAnWWpL8iHi9uPktq81WRbsnTG7z1EBvxsMPgtBttx7HtQ5GyURsmcyUDXG26v",
  "key9": "5iGYKZMjYdpzJQNfSdz9zsYiuwA35tPxi3MchxeDKJhBDex2ErpGFFVSAvd4pDdrgqwqxNvN3WGkFGCXz8GkHRZf",
  "key10": "2dT8BfJwp3wwUiaSKpxkteyHLTqnmG4jVaqMEMHLWrhsHH1VXCMZVgu6oXbayu38oaQSu3KvFCQCeJR59NpDwipT",
  "key11": "5EkkdpzpxFeA22bZrzwKxiQWotFnkk8mnPSQMg3G8qbKHJERJCQNuUGHY9enHU12BaUk2muMfRBE3fHCAYVV5rMf",
  "key12": "49Jjs6hisyjkDWtXsgo22Pv8Pe6s3Z9aot4NCRoUPJeS2JqMXq3ZtywiBrsm2N7N2twKp3ek7CbtYDtz7AWQep5",
  "key13": "2rdMw7ycLTCgtAS7NebLpnfCABaMc4y2fL4CAdq7s7PwsehAP2iwM9DxJkt11gQKVnj9MxMmhWJCbFLQ5UqNVae5",
  "key14": "4CGXN6DT3RSx7u9Z6UFdpgYFHjEFNRUKob8djPBA7LQ6ucZYfXbvZdmDKvJgeevHCfRAaVvbMGsnNdrXyU2cuVE7",
  "key15": "4J8WqK8DWKwEmLSu91JHwRoyZeKH9kaNXpfj9irokD8zRtrdmUPVTy4m3GTGyQc3D3xqXLUjRRhttpY6hpac9Prg",
  "key16": "51PDeFYJT6imGL4JVyGV1eXfdaWMyHjF1zroNbhSJn6ps8utXhtpq25Fo4G8rjm4JwXvEwWnjxVe5fztC8UzVULg",
  "key17": "vu5UMCMXNfqKgNTnbqPQYG89YQCceGQ4Mm86fQNRQwef5cjXyfyfz3aPfYReYxdNuT94KN5FTdf7LYUEfe67VPq",
  "key18": "5rDYD4AnCrBedwc2XW8hq6CfrncnXuM8A7kwAwJGL8tVkwFqK4ssZRxgJucZ7XRtprnf6mSp8NQyxHEGQjoXtgaG",
  "key19": "HBTjiePRmXQv548trDNWKFqN5diyJQa7RNA4x8uvV5YwF6iahgHTpUF3CrqE8weUh8y1m76ZLGQM7yzttbp4utk",
  "key20": "2Fgy8dfgrdxfahefZTMte2CSWQdsJcZu2RHVtSaNivtUQTqug8Metw5oj3cTDg8Mvi59ZHwn1U2Zh4mhss6MqL8D",
  "key21": "4YhfdueCnPcUwrcMdQcE4awwGxzK7WdtEYGcm8RvcrcamxNpoRRdGRc7AwSCGz6Z1mLQTtb1EygWkRkbzZxR5EbN",
  "key22": "2PA2idvQPh2UpWWPpSKy3Ws7cL6nVHuokW23itF8MF4FT2AY6hPhpYqKH1rephsaMys1GSYEDq6gtWK2K7ZS2MMG",
  "key23": "5i5ppz8NdnES5iA1cJWr6PKtHGVtoe2zkXA5PpM7CatVtkfmABjMQQqAp1WTN2AwnvogHVrqQxzoTritiP8CBXmq",
  "key24": "2CYVEuX4CGkB3dvEgYkf2yN7KWq6pA6fZ7chChoYkB9m5Xm2BokBFsv9W1CNauvZciePkbv4cXQSA2aTc96vuAKn",
  "key25": "3iFL2oFpfLC22yxffVC51A4oQf8TP9LKXKFUX3KkL9VwFRE43vqUdVknHxzryAuAYX6BWfL9Htwx8ZB825m5zDg5",
  "key26": "5zd8BzFxiftRBbbSUaAA98PXExGSS9V113bLpYJ1oAGTsusSuQuvrouPBvyWFoUx6iJUbA6pswUPdtepLyXnqA7c",
  "key27": "3b1afzkuf6yPfhsjpPoGmL5Xhab1i1ujaxaVVEUFjyn4JFPJVv3swGKreV45zTgNwz88TRjMBBeEK99qM9P3Mmun",
  "key28": "352oBovUSnmXzVwQmyKD6WHGqMMPi4mLxtYDQQTTYPcjVPpkzw53cXntBzwVyXygBqLCCBcfm5729fxbaUQnPvJh",
  "key29": "3dgTKmrNyemfAraPvBMa2N6bTCQVcjzvjKXBD3T2fjT2Je3cRJSvBnavNmNgeVh9gRqWmthXANtWH9Rcn1Nh8vMR",
  "key30": "fX6JmC4fBJxCsEmEkC7QnY4N3sumy18zYqr57344ff5Q4WhA5i9ZHkB8eiK7LUf4BCoQFtS8ZxdesgTMPj6gZXZ",
  "key31": "3eELquwpSscgjE2Adip3E5d7KYdNGYoXRkHE32HdWy7Q6Dj5ct38Gh9rc6e6tTUR6nTdpV3yGoUBMZUi81CxPWUd",
  "key32": "2KEYEW9AYx1UrpbKxSJDQmCjP8duFCPDg1TAaoBeagJ3r9v8jtrMYFZgR8nkzjpAviD9NmqFkF9nQuniHVSppHRP"
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
