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
    "JHgRyD6xnu6uZzdocw7AB8TSt5iXDHMX3sdaM4kVf9BECHco1NQnmLs2WM2Ukfdw6kkGrCNWSUhNjtCxg66KD7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jhNEXWBvuv2as19Gnj4zVEWFFJsUyU3roGYey3pWfWCpeuo1yxLUMpLMHvaLFE5MnLrE2C7qiDWhj93r3C2gCo",
  "key1": "2Hd5emuP48s4g3ZQgXCS3HFWUwKC2jqrvkN8x8tUokYhmrvPL7BE2snWu7qkNg6Cvu7hGrRYUEjAVswZfdz7EQo6",
  "key2": "5zsJ9BBw2TfAhq9zBsNW95ks5N8xNVpzMza7rHxAQo5q3tjGCdUgR6DSBypTNYNvB8YMviMregnDsJJwZJY4Ab9K",
  "key3": "2scRQSyCWUaEC38DPiW5jixre9xXihbBNPKyYyyevJW4qdktNcbjmrR5PgcJvbEvjKv6o5xGN4NxYQ7e5H4f3SVD",
  "key4": "qfwNhG8iwfMwdpd8AbNh9KiYaavSNVfVBSNtYhvweHKBCEahp6M6M4vv25UMVTrnTD62trWnAacqeTV95r93K2L",
  "key5": "2Dujnu4sVVBxJsfhfgKSCPxVh8m2EXF7qm23G6sEjvcWVYwDoHN8ZfnYedN52Lc71cUpeqToH3SUC83WLHGH6vU",
  "key6": "4shF6ovegguQRsimTNgTj7SYbwigq98FyeXCZHaj9jmxVbQtd3DrX6jCA3JG3P25cEEEViykWTRF7YPKBV1Be7ss",
  "key7": "2RwcmwDsrF5teaqCBHEbdk7DQBgwaTrswvC4JjXEe1imRVJp7uevHq9P6NrNuDygBdSWrWk78qwLn7v5qhmMeo3h",
  "key8": "5srKfrMYJcNTiUdo7S4yFZDooRb6LozrqJyy1V2E443dED1FwjgmdazsjiC757kULZxkDmFQoXgbL26vskpruNHk",
  "key9": "3sR76w5fnRTmnA3J9tUwNAQtdrYNHMKpw9cSaJHvbEwkCMfNXDDcM1UgKxo6SH5onxwXV6zceYLELgp4E87SNMED",
  "key10": "fqB3joAqUjqx54y1RK9sppoPEDU1QJLQvr6ikcEwwPuxdybvEWmhk6EGmFViJyRtC1FjaVPnsf9yh2GdYkBsb7D",
  "key11": "5h1TjwUCXs1iC3gkvRwjSCsJ21MiQWz4eqF65T7NykQmoC57SV2rUSLbYyJJnuqVRbg1bkfM9RF8iDFg8jzRApKz",
  "key12": "3jLi5YmDMFBeTWE5xdSurrtRFGQqhcjd6jdcbARQnvh9MjTmsqZriq34r374nhctmskM4LFZy5fyHZ1yfa4Ftn3V",
  "key13": "xPCq7LyDCLzYZc2RbEQburiQfX2NkNyZXn8HT41QJk6XeEaLUqqgQcSRFAE5qJKfqCo3FvYwVYrjLonzjhLWAtr",
  "key14": "4c6w93eTJ1dhEKGgDiHiXA1WiWQ2ePsLYXUai7TxhKJHDH6ExntyYHnJS2TnpkS7DYbGv27a4uv58e3A7XuHTer8",
  "key15": "2Z6CoWME9Qs1u4aobZbzWJQxEzP8qrLHYeXF9jrZdaHhbd28zjaawEVh7HXtaxLhuN2pTqCPivKoFfX3qm2ddbaq",
  "key16": "4u8RcECMe6icgZmi5PAQtqQaZqL53aSSqdb499zNryn5tCmbNu2j3iyAVcATbcUVMg4NwMKYtzJYLFmCCC9j8XZQ",
  "key17": "2VmV7SG8vRcqcVd3HD9KbpkyqQ13dUen2FBQZkTDcsY6m2AFrtX9hUwNLYX4kBgqwYig5e6D4s7VduaFYHaygiZz",
  "key18": "f3rTu3e9aWYu15NKpcgKKh2W84gdy5efesRzDJaSskCB8MsdQUjAatJZQQY94wEP31Ve8LBSthoipG1rx5MZN9i",
  "key19": "5yDtuujyfToquvQoa4urvoHQn12w7U64NyZabbtz3iWYohBPPeK3ub29v7MDSFjw73NoZT7MzWUnCMdeFEP4scef",
  "key20": "54S3M6mxJsgnwubppnkoyyo4vTARbQAsaurEv836R5kSVe3MhgC8K7acmqzsEyeeJgPdqhg2ZakvuEDEjJrhDgd7",
  "key21": "4SeRtw9jpNZc19Gz4vfzMhCBmiD19uJtBWid63P844XFhnBVGbXcXoADB6KKY7qtS5EryWiftq4JmSsGYqi3KDQm",
  "key22": "5vcy6iufovm4BhLAyhHpw1XHui7aSp71UayMkGtw1d9X3dbUUziRUNw8WJmBnYQp7MGLf7odnNd81RHG1ssysWxJ",
  "key23": "4Gvz8Hh6xUsF83uzgzNwcPSP9MkzpHEhnWtijZ9JGyzsNQC8FBpnen2bn85JaURphMRm1BwgrRgnhkymCvqBRna9",
  "key24": "RS1FPpiAUybadoSz5YCddE2SjSCC7uaPtRa5fo2fP7tmYp2mUz3aCyNpKL4pMgLPuy5tFxe8BzCi6XPoAjdRekR",
  "key25": "4YLkDfHXirvky1rHVj3pr8wyjdxfngzdhcJBUCFoTuZtLMZJQdT2XwR6Q1Rb2ouJnfLHuqgU49pWsi5WUmfZD2uk",
  "key26": "4HaLbgWQxbghHr22xMPENeLM6RFEiLzJQQJ5jLfLqVNie23wJkjQ2rJDFwEouqXPHK8WmS9U5dV4cHnEPfkuFJse",
  "key27": "4HDad7wsAbkrvSSGL8q6PBFdmxnMPrrR3yB8rkWQ8ZLWoDC4C29vSXHV9roerUAAPNh7bzv551QoKT9JuSmo2QWb",
  "key28": "4RjfnBrvZPfBe1zxH43pECtMBUfmUWUQw7gk1xvHrGf5yekeFhrcG8EmKZi8sBuvhQCTsN8TTxBeNAS92k3y15Z8",
  "key29": "3nDp435MqQxsFGPPJcnCqkDW2GLYeHfopofok8AizQr6cVQXpaFkESDnt2LzyjobR2uzULQvL3jP6mjt8dHqfVq",
  "key30": "4ZAKfT9YtGrKsL6mV5MFMtLMvS1BKL2We2xhVNoLhXZ5QFkbVgDGxyCJajWApuE7UfLoGo8VgZPzrP97VuSqRbfs",
  "key31": "4Y72zve4BNhzthFsek8bDYBC3nZ87BNpwDkDvEv98BUeCRLws2uXPhAc9ExVDyhen42urRj7BGddZh5kfp2xnWMd",
  "key32": "55je3T8sNFmYxP1DAiv5LpQr72yz6wN39Q3JoBPLY6dPvDSpPHpeGqQZ9vgycmzujb1AaVTkwRy8ApA1razQYvK8",
  "key33": "4suQYmMkVsoVN6rtwA15uha7Y3GY2dfb9ewwZwrjUGTcNXjvGwAAvZDbPcWbaRV4v49PLNoPA9h9L4fdTMhJA86Q",
  "key34": "5ZP7tBCe8TZzLgimscrTwKajmqtTnxbwmqFmFHKRmTAWBY8kqeuU7EPPgXSvBpBWgG3fkSpzvr1X5mj7c2x7MyhP",
  "key35": "333M2VrnCE5fnNWTDwgAk3jsFPYCAZWhVeZTJXHCTNPypPZwXhpBvswuiiPYYBhopcyruKxDfRmkuN15uiFMpQdT",
  "key36": "5aCxRZzFncR8YAPpumnkgtpiL9TiNEj8iPXBmFkeBVCi5dyfFLa6feadnTFXMgbZQuxCYqjDkEuQF7UdSzDB4Dx8",
  "key37": "37nseASRR8X3FBPNez3uWVARibbkAy3jj2NEF6cnUb6d9dKjE4jAKdaiLQ1np7Yf3FrBPNwEVMAg1KGgrDtYySj2",
  "key38": "gG5u4CZrq53GXYdDNWXFRUGEDgWuWcrumVY2FRhiFmYpbZMmkwzFi9ULNqaTWPJymoDUAWsaeMxRM8RMa1GKinr",
  "key39": "2M6EoKGFTNNmAf77CgBPdZGnkkJ4qMzJnVafoorDVYuzg1SvAqTTFTLhLddWtdQo2vbdSJj8VNcJwcXQQr5zJMeN",
  "key40": "4uAw2Gt61kf6GfAsAa9bvgz3WF3xPeu8P6P5shX8KSP9J7v2rYAZRLyhDgURzy5X7F7QtPcwNVbS5mb7ap5U16VA",
  "key41": "4LByQ8dGihLLbVMoDvSUyGV7Mjst4HnCoUJ1iZ76wdzLsFGRw6QoBh185NFpytWf5BGfuPDjyKRPVDDA1XsM3V7G",
  "key42": "5rVfChDYvsSiFWQrcAUx4eMQbxoJBJWkANjd5ATQcrYKoDYFU4bMVyhRC91DoGpTHAtiVSvXQco6R1E62zebF2cH",
  "key43": "5tqL4uVZCn2QU66iXcdrstuuAzU8aesuAWUUc9hxzohfLJ1WWgkfVPSz56CaR2R1FqChnrkb9NqdBUcc5RcXjqVU"
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
