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
    "5SYxGtCLsZooAvjr5E8vZD9CzSgPtA1CiDyC3fXPmr4RU8G4tn6wQCfCFoZDU4dBnE8kUv3L5cR1dLyTS86Z5hiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABrPk9sAabJbrzK4xgDkFA48yPvW33JfYHpj3PF2pirv2XcwWCqVX2chFpw6vLve1SuFuN1ePPCmP1ZpXgLJ7d2",
  "key1": "5D6L2o5Vvf419iyK38dsaB9x82FoLmzs8gJkA75jH9aREyUQw5dYWYMQqG2RsZjwLdmRdwVjfgX4nycxfNYDEUnZ",
  "key2": "2vgxgQrML4vmXwt2dKr7ACstZ4MjAE9nAmQMjNUaz9KMNfzkTRVkDWVMDBMRuppTqwjKReQjbx7uWV7jaeDQBNwp",
  "key3": "2bYexiknPJgbB1myKdcoyyyNuRax63n7SxLrxaBYTvJb8fh2GhNMgacNkULecWdVqcA4KoZJ6wJobUq7nnj8eAGt",
  "key4": "2danVWqEv9tpSCXfxT8PJ8KD2qmme5s2ZrW3W4Z3uvKen9QidAJYDoaTqEvog5XFoCAGXFjrU7HYiTBQbu3L1R2U",
  "key5": "66LtsogdKHVWGCsMQia5WLhzdi8JKrDRHfVApTGRr9p1guKQ1ExTZgeDZ8V9ZCezFNGHifdN1GYAfRUZfLcJq2L3",
  "key6": "3fwwKF2BPyKvW2j7NtpkMAJBaiuT16LaJZWoB7qdJd5Pxe2gZkZ9kTA3UJiSBDMydMcqme2g4QgDu24VNZFuyjTe",
  "key7": "2ZxW8BEsUZamsVKNHDybr92yKyisB4VqxQjSU5HLEfHhuJSj1gr1QeM4idgoBju6NA1X88iJqKZKbmSkRBcv6TAB",
  "key8": "52nhS4HcREWeQUXC18a2kRjv1oAv9DoWY58ceBi231cwVhyEcGtgcv8AYi4Hx8n8XQeSkR84ezjbaFSJv7UsX4XC",
  "key9": "hkn1BNDf8ZPmUJKPLnJeBHC3bsoB98Ltj5CjU8bJSVRSoqBnrVCKQxN6oLuooyQzxHZRLik237cfs7Hr6QE9Mwo",
  "key10": "3CzsSVGDctKZCKpKiH4SqaUJ1wHm5p3fEBPWe4X3xDtGQWmqrLSkg3azu4fU8x91uSzmSQ9dA3zEKjnTJBvPgC1A",
  "key11": "56FKqsJNG9UsfUwxGSd7Bj4BrhZKhs7WHEcVuAzXAk1BfRxhzsDH6uMZyUEXSKrfd2NxuFh3eLdasjRQdXP75TxZ",
  "key12": "29bEnpa3sCqcUnRJ1W8rpR2mFxELd9MukfZuyjX1g3YnBsMY6XRJKUeqkWQSuMRDbBTaE2cAWKhCpA2dBmPJGBhh",
  "key13": "2VsVTgtSA4Gxx4PhNSfQ2N9zUuFWXac5Pe75qPphDxyG9rkhbsrKXZ8qB7sPNMQAMZ7pExPHUc3S3hTigssfmWw7",
  "key14": "d4nqY89RuckfYAZtC7V2pStCBskXTkCtoDF4rRfKQz1mCHfHcjfkQKnPbwEagUwxRZhzx3BgdSGrj2FJFz9pQZP",
  "key15": "5hNa5Ro9mV5romCcgdfBFDm8AUkxAYrhWrr9TgjgoGETASqGfEdoyBkEuqdqYKVHPweqC4QVVqFxrnNqLNrHoSRn",
  "key16": "52wHdCZAcD9YsNVUpCMhbv7QMXfDz48Lo1jfB5JbzkjM7vj92uh4GDHMYMwguRDYguK7Li24BaQMYyx9K6GC6LkB",
  "key17": "4mTyanSFcSHTCeGHgENQQGvVvLagB3tC99TLyyEWJTYsY2JwgErYVABFVsa6TVg1uYE496vcrN8a2bmbKhGurRQ6",
  "key18": "35Vz3iv3fHdcDDrRJ3uJQ3d96igCKk5giCuNyyDL9eXjnuqMovTLEXZraxknyQNMXuPULdoG9ijgPbcSuySgyzch",
  "key19": "2fy1jvX8yFt1fH6GKYXQkzAYDWRWt8MUwWvepxTwdG7X73mvuh5bgcTZn4sc17TRiGhoMFpMnoHqHcY6w6TcxU4p",
  "key20": "3CDAHi2GdQeKjtsyLvfEvCqKrQLUsev2rVjPiqGJy3cT1zCwMwHxB3svGZeZiaNXx3YttW6uFKXiW9Fwwbx6tsgL",
  "key21": "51qVUWEZCC3CsKb75fVCenu1GPALhJjVZK6RDjo1QVPtpxmzq7bDsehnF1YfF6vfVYJFtwkz69aJ75zQP2bDa11A",
  "key22": "2sNr5tJLM2baQCWXY163zAWsc8pKF2e8572NS2uY2zqv2woJZXXn18y5iz3uA2szLtypGtrKcXRhhDoNF8aQMbTA",
  "key23": "yRAHgtq8MekXLsEsDEPdq3asHJFQs8px8LYBnnMXmvLNZcts9qHkRYcBYiQDXF7BS95GvpsmFVMTjRruetXrGji",
  "key24": "3sY1i6dtXgvEVbnQh3XyuPLhU2BQG6fpKHFGQrJRdH4SYHoy6Red9LHqiP8F7hXYGKw6b7yNFiVzcCAPodqvAgLJ",
  "key25": "56yR1rm37QPNxFVmyods2GjkufPfF1TETwqJ4rVEBBkyeu2SjFbX2G5S4y8n7U7FQHvbXMQfgmewzwaRGxn7cN6v",
  "key26": "sY9FBkbBeYHHE1reA2r5ZoA44pkpNjo6fs9vi53sRwbSwcdxSTpFksUaN3JQhGBDgUZ6FMD4fwpyTanxJp1CQjA",
  "key27": "5PSwsVSaTibaoZVEAHVj7ePgvwxzim7UP45PPxrejxdLAAjFif9hZcFtAGrPKq3egcQoNH5Ct2iuuMFatMRC8c1b",
  "key28": "4DWULSuGdQy8c6TzALAAaescJkyDYaP4JhGBzmNKfWGpsNh7ueddqUXmVEAwF1KeVs9QN9nZSyosrJvEPhgFXLaz",
  "key29": "42XA91xMJDN6SF7nsue87ybe5vrayjdRgamqE8iWt1wxxwxz5TzbNmbhDfKSqtu4ZXy3MikU1d11KeYpqhK4a6Tz",
  "key30": "33Arrx1CKThDJ6LHn7bmfiFAwCY68NHfmSGYrcQ5XyidVQSFgTtCmSNyG1mUNn37dT5tywwLkRiBDvejEsJpVH2H"
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
