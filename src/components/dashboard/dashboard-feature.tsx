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
    "2DNz9fR5exwA2tCGYuQhTzNPtnKKRP1zhyeBqCfFoBeyf1Rximundon5ujXFnxwoh7CTkDeeWLKTGkZ86Yma4ojg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B5tqEo4Ds3pnuB5nQku2Efnpd5i6C7bdaMocqvQ98vYJSRdBxoptiNvWdUhu8ZnbsK3yVjmkUwmuP7gKBGM7nD4",
  "key1": "32ugX9BmGajBjXKALZ32qNv9jpZfP8UZUq8xGFmWksRRggaXCGx7gJkYPYi3yzm2oQsmwUsy4dfobQYp2v8zCf5D",
  "key2": "2ETBfBAc9QLmRHZbmjQyiKjuBU1W1jPZUiqqmunqTbvUQU7Sfs4UWRChcPZ5J2F3cRPjNZLQAiQYLrSZgo6PRSNR",
  "key3": "4KCFD1e5XVhAZoXBEtzXGoEg9Wyz2gLNdYKwKwmTUrg944V2MBB6zJ5jG4QruuuPfVuD8NGZJhdvfrNGjK5VXomG",
  "key4": "4wL5V6xv7reXWzvHANVNv4owt3FZAU9tsrMh1sLmik1PJrVffTknCgZy2j45WngMXJDvqXLZ22kyngMrpE1btNiw",
  "key5": "4xCkGNw6KV8Vqy9Eo8JXjRvdCJd6ZKKDpR7jr5nor5tSVPCojN8qG1TzZQ114DoUjWFVA2mGzwZxwzSxUkvyDeZf",
  "key6": "5p2bHykAqYf9ybW7SkALiP751oKmmKXN3rBtrGTESVNLsXtC2xo2Jf2owisDV1UMrPPBcACF1THfkMbvndio7kAK",
  "key7": "5Ur13AWHouAntQN2MhsppLL6M9iiWjtGThjzqNxHXUzTZZZ4TLhDQbWqk9SqRKDQgZKEiFuk83cKBEzHK1qT9dBS",
  "key8": "apuwNo6Aqr2RbWSYR5GK6uaHy58SaYvAGgKbagU2obPf7LHee8WGTKxR8zTiDz4xp5kS8UVp8sh5qXkd3dAEG87",
  "key9": "5NFiLb2GjBkhmdFU18YjP5FZXsRDw9oKrFgBYDtrWoxQB2eGzcxFEtEpHpmSMzwNRBUfE2VAELqEULyyWsHwmfep",
  "key10": "5ArStFqKJz3Tw7TsJvw21A7bQBg3Q52xVPiBZKEQh3XMRvEh8BXVm9ENAC8xrFBgQejCkFd2exnyW7GNnLWvesPy",
  "key11": "YAU1He7QFNCjMinz2X3Th5E88sWuaME5vHNjr4KkfgspAWwyqNrM7LXMs6cFZMjRsP3p4BHm7unfm9hKa73zZBB",
  "key12": "pZaZAoxb9fPyzZTUqcuuYvS7fixvxZUexaJvwQXeFgu1hpp21qGUGWmWGtqoechiM96KnmqNmVVT6rGuePDDauK",
  "key13": "4Hmp5T4BQknzeKaTrg8fhc3FNYYfjrgBxLETQpXfk9mzQqPpPM223dHiB5CVC2A6NuCr5bzVyLTbi7HcRkGVxM9X",
  "key14": "3ZFjKt1TumXfTdPCWFvTk86uZ2fmVj3hA62tpP4pN85ZLU7tQvkp1Z9QhFv1KgrFZkc8JUdJfMjA9CdUqN9JXCff",
  "key15": "2wcfWueJ6tBDKdkDXuJAZBTaz154vjHitnS2p5wbHwppqNF6pfijpvNKfmuUQ6uXcCF86hDu7ZC5woqt4Sd6TXSu",
  "key16": "3phBXd6vZAuwkLa7kjkqZ5Z5vAd7WCspmpMsDmS1dBCb6e5R95nfgFdNi3Mng1otMWu5qVUihH36F8bLguAdLreb",
  "key17": "4ipa7eb6iBm4cwozV5FkrWdqJm3ZiejnDnaHXcKcQtDK4HUCjwgqHvEtF6tj2jq5syzpqM3vat1na5j6mwVZdTHR",
  "key18": "sA2BFpvnGmrcRE3Pyp4PP9RFGMxYhxsj8ioo6KTBENyMWPvfGX5oDAKNdfpsqpRDdquCasrPuY24sZrVodthEZu",
  "key19": "37BXS7g5fnnLs3riNVezZshgsWpBcChzMBHXpy92jieeD4cq5xnsowjxScv9Q35zZygoT4S7ryizFk7JVodf4c1p",
  "key20": "5XfZSY1Xe37dqqgFAV9e7SaxJsK4CXpvaquskrJuKb4i4AgWWaciyxgT3N2gmfKDBphDygqvc1o8m43V6CnnTCJY",
  "key21": "BMhgnJ3oqPmRQsGZEiGUHGRoF6C7gGdQZXC3haCF3MnHMj3smSJR98qwwCzLfxrfCUtDuQTSxLxQAsgT8TNUtop",
  "key22": "4g5WGsek22xh5K3g4jqYv7dfxnqNkpTgwtCD8d7ZGxrKvztJxHaf2r8ofhuGdKyXJ2BgW3ntuULbPeMo7TAH3iHh",
  "key23": "35n7WVyNkrGrTaVG8iE5cj6oQaEVaVTbdRYhVSxkDjuWsqDafjntWEGiZJ41LGaCcKSMT7aW9mF6XdLYBQ1541QW",
  "key24": "2U4MpgS3jY1Gj97kp2qv4CJpnUdw2LPJmHcwpsVhDGeckkvd91mX1qYyZwSs7jTgD9yueFRoDJofRei4FxiK5u8v",
  "key25": "3Ho96BoZdPE4yviUMjX2TzUMKorx2JJeYWjvgUMvoYwYiH2rYwpSTUhTZ2XZ3v7XWuu5PabXC5iVLXb5f1NgQcVo",
  "key26": "qNscySvVXyFPabtdUxnU6qRHq7R9Qpz7hXXjdbKeZm1Um6unspMtqbUrfs8Gour5ftx8pCBSX3ybd5ptmAk6e6A",
  "key27": "3QT9v5ggg4HWLAFugcH6NSrgwpcZRKGBK5LgUpsYjsPWSfEsiH7jDCtTaHhbCW2QokK7cQbyLDpnUg1GnEJSwWkq",
  "key28": "28Wb8HQ35R27d7wYArGNxaSextzzyC1pfoDYdRBVXQx64h8meS7kTXcDXmUFsT1Rq263ChYUSHckH8s8LhRHTC6K",
  "key29": "jHfPDKF9vCXNTmVahScPNarJuGSajSaToD7ubFaKfqEMiYzrHtBFZjABtyTuX8imrAEEB4Q1SWqWUCt1bfX8Wcn",
  "key30": "Q7kukJoS984ef8HEzcQTy12X1KncLCvdHdLJbeEGeay7kkxwR7r79ogJw3emFtg5CEe9brdu96ZrTP2GPgBqh4N",
  "key31": "4JGB4Uxx4FBncKFUCZbcywqtq3NQeHCdkKnX3Q7pxfB5xKiTVAY7vRSEP8Kyx3yDwgkfZ93kVVHh9fPNUVkrwynY",
  "key32": "2C2cFj4b1ifvQB1WK9w9ciSE8qPP7iRjnNk9F9HMRUX9vUJGdoCq9EgaS5hm3Dstf48JAkmN2Q3QecHzt9Z7eppG",
  "key33": "bbTMNeyJhbCjPhN1TwsbZexkghY6KYZeMkLS27P1yHABto13kaPsD9c3scrMCBn7xSMZgpC3gozwmwSnQZNfuj8",
  "key34": "3azKjUWG1o8MHmNwygBeHvzQCVTyWBdCDKK5qzX7QAnQJwpUvezZ7KJXKsaPnbwf2KNemQgq8zz54acESpHZmnDi",
  "key35": "4ZoCwvgKN7bYHVsiGHCjWyyDwH76RaQ23tSMC2iKcmVpAZmjqbUc3fDyDpgz1NKHMd4rQ7ScDxaV8pop5AdZdqS6",
  "key36": "5hZXMhJS8vGvq64BHvXzKhApBhKwQFu5t1EFUcMua88cc6LKHktUeLqpdRK221x89P72NVj8p1WSSGMrC3ww2NFx",
  "key37": "53pcw3frCNgtHDHoLg1VeuvJKoGqPJPZio4fKwNuJuKnUk7X2Jz8FLCyKYfCEm6DWdbAXJpRYBcaZfqGAYUqBPBX",
  "key38": "24fyk3FkR3hzkE548nZTn3HKJS1y1jWyG4WoPZznmMUNCnvFENaqs9VnNApQuTwsfMfVGXCUParihUfyP98iGtg7",
  "key39": "3nGWiLzqC2uPTG2CLGkv6GfRLw11wLqj2g7tg6v4jznmyYdH7VXhMRavsbfnLkLY4JWiyVECUgZf9ZQUYomSc6pS",
  "key40": "21qgApKW1YVEWSACQRkLnyXHeDrNeaJziW2QbwWhJzxmnnwP9Cq1iVTavULEDfwEvZZNjQetJPNhNVcCzLVaUjtn",
  "key41": "3ur1rdF6z7c6frChujQYvWvGEzEY2By9nzcJbbBEXr4Syi8HvTrf3VUnqa8Cr7vpoG8mC5WW2HWzBSutR6oY35Pq",
  "key42": "5fyHK8zi5Uo8Rh8q2pjpsyQMz4XivYZmfL2PBe4TGbQcd2oCNVngpniZEM4xrQymaAvMLmSNT9RroSGDasPF1Dw2",
  "key43": "2XBrhT7LRBzNf9Gw8fQpePutoERyipgabhV4FFb9dZty43CYqhHJ2gJd8LXwqpFRd6aPQgAu8pATHDvEDZtddWTR",
  "key44": "8zP9eaZMvB2eqRAPUkg2qqsY2PYBiSNnEXpZzXGQPJrBnzmVzxDVnkasFLxSDcJPU1jDm3mZu3Aiaf3PvXVRwBV",
  "key45": "4uMS2cECWPdhLtvr9hpMQKdGin4Ljmus6p59ZM2H9o4e4FxE1uo9hyeDojE6mQZi3qpmAy9ri5NDwpVWkJsMkwJF",
  "key46": "5YLhVwjqfiT9QKgD1g7kdqjBTU8iacdLokxTxg81zRyrAmB4wZSDSCqV3rn2J8auFuYKtYR3E27z8zQezMVjucLQ"
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
