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
    "5pAfEvrn1gU6Q9GhmXKjk1MtuEbSSZFyenUfTtTrvGbZDHoPfvCt673yaeQ8Mwt7JEMuRp9yPgh4KGaud1Bmw1Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nBXWkizzsxy7zHtEMRMrVqph8mmrtmLNZDSHkc5fM3BNVA9BRjAmaMVGeQsiwnpyaLYeCm7DCVQXZW1cPbn3u9",
  "key1": "3cNtAzeF2jKb8VV1RhhVQtwXtmGH9dSi6V6uP4WGs8Dm1VtebvCQv4k2jAh3BE6io2PK4wLJT9oKFrtF4X58y43S",
  "key2": "58CP9WcfHLU5LvWzfYMfyGg8BAJ2Mkp8P2DF5YjAg8ywk8WXbUUTY1nSDhM9AnTT2waVJiRRaTnqQq1WY3asQbCN",
  "key3": "5QLDDytqAeUs3Cwr9xoDChfjR496A9L38qMshGy8dCi2Po4iQbLmj2TodHQnoYs75FUt67iSte3U9gCGB6UjXj77",
  "key4": "4UMMFooNtqiZGaYTSD5BiJhNVEyU2ykDCzwSpi45w8KVPgkKujqpzQ8i1do7929x27rBpwD2KST1J8yvW1mQDGsY",
  "key5": "iyNjsDCc3vFTgRTz6m8Kd8c9vMMyrmFHvAydhzeLHnkqoffMTcFgxkcUWiuxbM1R1sNamkPR4aktK7BKHGFgAFB",
  "key6": "5uUeETctMhegdJo1TXzFracGUtF3gQ5MWg3i6byfYQg77eiguyCj75RpZxFeuthQvJKXrErerza73WkXN63aLB9E",
  "key7": "67ecvA7Az2tBhN2oSLNkpoyowe2Mq32MM71nCqm5LEo2vyxpAY2PqVHcrHLMLpCSS1k1qs8dnVA7tUQ1L9piUToE",
  "key8": "4g6zwqK54La3DgLaRzTJy7VSmLxn1pqE7G1SbjMKgY1HFPvVtKRuvyQWPbhWsutsziccZBAdG7p7v9uJHZrPEcBY",
  "key9": "5RXNnXwf25QHZw2u2urVUsjv6Kytnab7qyfFZwQHsy62EeNLzwcYsebzbD4kuzWdwTzrUNNoTM2ZQZ6THqPfGeEy",
  "key10": "3EyeCx8TusDJDSXSM9FadMXnAP8ku3BhnK59LGZnB8Cozokd1rxo5pZnC7pfDNFuUcbuiHCbr1h8YBqrNJn5E7eL",
  "key11": "35wJWXnj4cD4nRUeuRzRSJknJ7vvsBvprRZvAybsB786Gan2gwx2BL9i8nSkmMERB5MJKpi5r2qsm7qSKzgAemo1",
  "key12": "4LFrpee1BERUswAM27Q7U4hqU4AnhoQpCURxawzqFyvz57BCiXwoaat85wBQNdtc5jTBJzzuhVRGfuUj1DaRKkg5",
  "key13": "eLd9qZVv924tRTEGTbJvcSAGsTwhRtCzqsK4w1i8RmesYhnmu6qkgkXnRjoncNjEu3VKi8nGWokbLoYRDosVCY6",
  "key14": "5VCUprDUSnCy3dWDtQa7xMKoTaRCSaUBp3V2y2pq1ECQUtNfFCG71BtJD4zD9zr2kmp2DLPvsGzogYikMVcqSiSg",
  "key15": "VVHq4viVKjDfarTGF1uURTwRJtK68fYAD4742pQJztZNiweWrbK5JXyLuu66hnvts9rPX8mzSKTo4EgdHdD6Gga",
  "key16": "4TAAsGW6iH6Mc4a52eHmANrhFuxQA9zs54t2Luotm1Fbo4Prqq34SNb2LCeT6DCHqMEEWGHjACaQ8ZFJRHcgyMfS",
  "key17": "MCWczeHrwc7bDhydqoUMV58R2uzA65Gn5MhQE57x5vxqyxsgEv2zxgUMjg88Vrv4wcAE9hCm9EfKftxwkWMoLke",
  "key18": "RGTJUnYzxhgt5y2pEVu54oVkjfe7qU3jfz8uxBHMV3SbKbuPJuZcXkxQyDPcXcMXhAAKf51nHBmGPhhwvUxGTXa",
  "key19": "2CadS6Rk7Ho1aVHRu5mXXTk2AV34CgZjQDj3fJTrY65jZsZt7ZgLj7xTUwor8sK5D34Z7EkMZtVTGAs3fCJqC1hh",
  "key20": "5e4boJSSYeBQFVeAFqdnZ159aMpKB5cb4U9c4v2Z4eMeFqbeEFrv9yvh4JJ5Ten8a8jcW1n4pfC1WKBQRQn8Tm9A",
  "key21": "2g7FAkJqe4myi8QQ6j2yV97jop8KaZmQxS3ZKnb2tPpYa7VG3cSRaZiyHxxEcfyatr9rRdfHu33QmzdxXZEvKefA",
  "key22": "oJF6vLedKB1acqBNz9oMTYJEeUQMstVA8cU2AooTALWvXuXftiXSne6DNepoFeHHgEKeeq475vPqo9BHr6U4Xmv",
  "key23": "SKEz45R9s5bsggmJzVqMqvMYxri6Mho4bkTmZAsUj9Xp6c1KHRk84baw84tdNoa4XQQPD5BWNJxbjsq7pyPcyHk",
  "key24": "gG8uShoMVCgquah5LaMEhv5uS5vYxFdUTAx4HkGCNJ6GFzrLDonr2hbmGWBgUkBNjLrVpvcyXKZuQSU22nFUNMS",
  "key25": "4nvU3RFktkz4VPapyfNmB1XTo9KXNR5hPwU9RvLeQV6pqxauXj8DUGnVYojk5v46ka3KmVLZW24TqY5ZNYCoFUZb",
  "key26": "58Yp2rmEK5gkHzruXMgjVEYvqdbwcvAi1fLYM9vQXK9eMoS8WWsRnMKfLbHvvMh13XVsB1FWsD2cM38g9voYZQrk",
  "key27": "5gp1dAQ8xMraJPzDiHcTaHUw93oj2awFdyzicMxNSXxGvcTmrs6oUkw9wkW7NfmYsyMabf8WTTa1MDxbeKRK7ALq",
  "key28": "2YLUg3a1z6T84MBGcd4aJNigdYmB6UVThjtT54GpBAKyVUeHLDuzTyi1Rd3TQx7ku8D6DqtVA9EarJ4tN4WkBJkG",
  "key29": "57CEF7EF4PwjkZ8dJrVrqWuyAm67tWUcyUsRM6DTen49AR9rYAXeKPNCrKCg8jwJxG36ZRodC6VMnSdWKPwKumts"
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
