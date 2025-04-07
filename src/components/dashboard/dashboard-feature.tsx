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
    "3bRn4tEkHfw76udhWLntAWLXt7QrDaEAgrC2VCfk7kawATCfivNPewS9JtH91FkyfyhVpDFKGwULTKayifNHyMcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnmAEZVD9rpzxhf58ajZUYCp5wCSCRK34Bi5DNsL5LUrjMMmDMPDbjTkj6FGADLrvxDVF4EeHcBcGDekZBiGe5Q",
  "key1": "5rYfjrPVZ4vbpNtJCHDPqDzgT1DJwSWb87pUNfRiVZ9re9w6AjHRcnrvCduKrZ7BycFYdj9G88B5GfzEct9V6yZc",
  "key2": "3UL7htWq4QcJiDnbaps6H3JbUZXgTcVgmCHcARveh9eYjZYRqAdB9bS3gs5Ahn5UjDyMGHiDg9opZbgGGp9spz91",
  "key3": "4XUgQxtnTT3arM7xqmtHpi3f9QGHMNnYcAp5pBgFzbZRpiaGW5i74kXqiCGqFWWmLMqX2pF7f4dyqgSB3resKgah",
  "key4": "2oFuyYfJMqrL5iSvZrSgQ3MDyQkHAM2bCzhbHkQ59iazkBRbLTtcNee5vCYchF99fZdqrMrnBunwZnpn56tANk96",
  "key5": "5ruw5SqrDhw6dkGJ6PJgh1ZaycVmiEcr6ktoYg9rGLhEFPC8EH5KKc2fG7tkQRZibUaBSnb6tNVECsagmei5NLA",
  "key6": "2pYUDX9aafPrGkzUqHBw2T1BTxMH2wsbZXcJ6PJRffsrmJZPaVAjcvsyPNtLf4qoRRTod6DvUKoMN4SxJcahCa8K",
  "key7": "5oNwKQJphxv2WX6BY6AWfSrLNtJSSK3VBpE4NHTG7WX9Fx3HwfCkVSWGie5rqhabrrk4hhXhFbg5kLwUpQmumSLJ",
  "key8": "4W1ivhLNpNWptEHYyBgY5T9GqdwHkyPMLW1pvD9u2oaaFwihtfZHELymCN6vx8xZfnRKaUBuQAHKtXLkTcHFgcSU",
  "key9": "4eoZj1vfGL5NMjE5hFQCzLiGoLLAFD7oTXMEeFJfc1GmWt42SiF1kGW9qGjY1eHdsCt9oUp2ymbBFH7TTyh9kf88",
  "key10": "5xnzjPW5cXXSa9BiCf7tHBK5KiKXpQQh9jjoj5hSy2u8Xx2GTzF6NrMNUbVpeGkPZptHv4bwThjQQmJWR18jtmy1",
  "key11": "2cei23azYmcyzKdJYC5x269Qy7SJzNuwpbvKCjQVUxGPfdzXW71temhBXqP37dgLjqb8v4Ka6L8vFmDYKpN5Cr9Y",
  "key12": "66S5SQTVXwtHWo9ycYfGELFETy6ufQ6wP3VbmEekfXskEnZEsWmoNrAgskfEHwtTqBJd7SoSdXWSQrfXCJ2nXzj",
  "key13": "5pNn4nJuvFP4k47VSsbjjiyTRSCVMcDqLE1nt3ehr1Z7Gznzq2LzTjyvfh9gPFwUoxVDJcdYsyyV5Lx5k5U2Wiyo",
  "key14": "4cLiKtfXNgbBRHnkmSjmKxBnQcjmfGvSwAMYLmPHx18JgmC6bKnKFeHo91jGvN6FLQ8Jd2qgFpp1xywRVFrh8TTa",
  "key15": "FjdytxEwqsV1w1PGa3gfdNBggYqkwP6miG5xSep1FDPzM4dtY4Zut2ktAWF1Y7VRijnE3mosVcyo9FurpGndtgY",
  "key16": "t5ZFMckvxnXRfSSf9vn93UT3bTT355hbcLp1zc8BD8tVXuipKGGWUdX38dVmRHrcDdaUdgPKyn6KnH4VMKqfced",
  "key17": "3D5JWuN6SzzmSA9wBWNAChQGYY382MJr4f4XArUaArELuxxCd1cRJVhGyAr1PMW5xymPBuiGUcieNJNjRsi6HDrb",
  "key18": "oMiAigRiYf9u133gYzqXvgAu9CRtjHhy3Syv8ZwhAjpB5mvnehSv5ke3ScD33QLysXaCdQNdnKeoXErmbXuxnhu",
  "key19": "knzRDoZHfJp92m2WbZmM81g1PSpgXFt7h4KtvwYquZ34audyoLWhDwZtvqjUAJYSSjnpgZWjEPXRVvun1TwXKwo",
  "key20": "4ZpixbAom8BTvGaPWSTfeiuio1XxprQ9aziWwytBzMj9s8FT7R5xdkxkxyUi1DnmVSgQGGWt8GTUCARe1WdrV5JW",
  "key21": "5T9VgcjNfZE4emK91vokjbLaJU9QTQLmZNJKk6d526TjdMZSVJUfGLEgsCLhRRmGvWDvW1ek2yTXzmpPtzEMzHBf",
  "key22": "5iNqucpuVpjzAKCTP1RgvkQDuiJu2sTZ9cp3V1rvs4LqsAZfzTM88yu234KN3RsB2yEtC47g9kpxUKX8VnW6bmMk",
  "key23": "4srw7ZnbHSS37JQ9Tn7fMxafjzGhkdJHL3TNPjwiKkX5cwxKxP3vZA6Urdf6jptuHmaLCMVMDoZJmYgTFKdFzc5N",
  "key24": "3recSHAsEyFs5cN8FkJgBYDEPoxVJ42XsRrumQWNWJzzdGo9FTzrsTaTptaC18xSYVL86Q8WJe3WJwgA1rfHeexP",
  "key25": "59e55d1tQq9PHzitRyTyki6fC2ir3ZAxpxujSSp27SgEGZw7YfTXYKswgGkyMPgCaFSDHmhQD4TbzgkGUKJx8X34",
  "key26": "47tN7BKoWJeW9RALYu24giDPiYVv2JSnoGU3Na5f1y5r7JXnsGrxuarhW5NZtuG9M3QvYnuQyNSbk3LiCx1ZP8oZ",
  "key27": "5o6LAybt65XK885vtRkNaiB9SSkaeHjqSYupdf6JpBdoamUbDk7cezr8a1UFXwCJFzUoxGkzgabh5r6rXQ341MP2",
  "key28": "v3sMxuoMPGvB79gQevyukP571X8stxwitBHiYaRqdEbuNG1qsfSFpUJC6x5wnHt1qAH2rBEkMx7NghroYzxPtrL",
  "key29": "3zjWQF7DnPTGxAyBazLbaD8q1B6qLDLpbwS62x4kxMg98RACvRBJ5kL81MJUsMQdNuVbL48YZXzUqAX9wAPEs4wS",
  "key30": "5qAjve4NBE3QaG7JprcCeF5py6P48mGccZhhgwXHTBaW4rMwPD3U6mapH6rQYqyyF7eDJbpJBLVFJnw6DvBDk7HW",
  "key31": "3488bamfiJ8ydtuJ9YFQNrDx7HRNgh5WT3aKhiHzPETvzrGY5fYKfMhycGc1fieehYDk3C28k6tB1tqAkYFScyHf",
  "key32": "2BqJagjTUhMnhmzDdnHUZCmeRpYnShin4mnXdCd1NgmeBcZ9bDCbmfyqiSDayo5NA4Wxt71BoTNmxim3KxUSHH75",
  "key33": "2LbnikcPH67YhTx9QaYMSSz9oxAnYVa3kyZFR19cXH6iD4oKMe3B2yMXrA9iThEMe58DwgLRCjdku3tKoWCwzWUG",
  "key34": "2nEk73KdQCMca7rLdJqphGxcXpAvCNdPfqSuaBZjBqJZDyxxsVL3S73emcyRyjKbXoZ712e1WpWe2bMgNnms6Qj6",
  "key35": "4byfnyigDjna7JBQrixsVwuCby3XRmPdyhUzrLpKDeaZ1KcCXEuUtJX31y3SsbQq8Qw7fFqFiywjWjx6jGgZX929",
  "key36": "BaMSAt3BmbrZZjk7sk4LHTZ2SsGkK1rysBTXJ7YG2UxZb2XkmY9WAoM8ziGaHubiR3t3fPs2cDWKhmpo4V3zE8P",
  "key37": "2yaBrBjs4nBto8LK5Rq4zmsmrm4jH9t3yWNtKBERXN1HZH5i9Y3FqW9r9AjKDpVKmwbHjc4MxdSz9MC7DAF8bYvZ",
  "key38": "3Ph8VvFPYdHrStYJ7eTB3PS2vQMdyCumobHAMakHYyZrquQifMrhcwB78KQEva99tEoCJjHHvECK7B8NyhJiD2NL",
  "key39": "4QZZqEj4z4eJnHZkntqaZmeDLkHgHrWhCQAm4EkMEe1ZXJv4EnTw4TkqwexogAKhrrgTHf5aFmzErhyssPg8sb7a",
  "key40": "2VuA69psgd5PJvWvGd3TWQgyLbWV7D1W6qekBqYWjSnoR8rUKuc3kMRdBXkUmXEeRoVg8cy7DQCvjje9wNpoRALq",
  "key41": "66s64qLP4DTT9ShhkGiMfS9gQUrhQKyJ3RX2dmcnDX9Vtg4s4MhP6z1qfC7neZPAN24ZNfXU7sZufw6nFtBWSWVf"
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
