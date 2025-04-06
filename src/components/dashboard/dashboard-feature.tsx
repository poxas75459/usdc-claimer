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
    "4PqTShsBqzFHdjAbz42iTRgkX7NvGg6TMhYQyVdA3Ze1mTj5WZq4Qnqq8AtaohB6Tb1F8hX4HxwT1ybZebkeqU4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Haic2SU5MYDbPoNkEjy2JNv884Ey1CKevdiyaCHBbetvGKZBKCKvsF9KfFksq2n1L6mrWRGZQdpcQYW5ZPw4mFN",
  "key1": "dW4ubf7C15Q36TMraC61E7w8e5Bq1ecfDoaUcVLZnDFPTS1i5aZVaU8vd5G83L13itGRax3DeeUEsz8vbFW6Nca",
  "key2": "2T5FvTkdBaSGrs4KA4oEoAenb9M7qXdy4ZNcDgFtHnnki4bYc8B836e5iVt8Y2c2CoPkua4pokrtyep3nGcPfvkD",
  "key3": "23Eavwbxgk4PP3mVWHRnZUHi7JhUg4WyoTQ45VGQQ4X4hWNzpxpSxGzYgXttZ2fhysMyzo6LiBogPEDaMWS8fF4g",
  "key4": "5iaFSnWdXVmjwuAvakmZb1FoKyL7iSHbZgcBsud2Tb7EbBttsZqgZkEvMQ4hz5uL9qR7M3JSKBTzMWg4GNpRAXmN",
  "key5": "eBktZgfQjYvbuYynzF7mRR9oSBCXmE29bxnXSQRWuYZiF3ubahDGoFMJWkJvsLUhAop4BMr1yAyeZzkngsdqd6r",
  "key6": "5XTGYJvEmHX14AEobPWA1onVyv9dztanEnCjYLZX83aiVMRhKE6muGTjr1nrQhu4SQQVB3Mdstswctcw1zzmtPLS",
  "key7": "42jNuvZ9CtSShcKwMowfxaCQHtKPMPZUUmfRsaQbxnYqZosbCjWC1DHYxEZR6A5LYQXkRn8DF31PD7rnD9EmR4qf",
  "key8": "2vEvpCCZZ9gMzSopUPEaK5jeB6mVYnV5mKUpK5XVwnpLbZW9KSbqRg8C8GFozoE6E3SFiU796vJBV2Co7rcn1194",
  "key9": "513fBj6oHnpVSeYfesCoDGWZTeE16QoxebG2R9CnpCxcMNKFcw58LeTceHHuVidjn2GPtrP4qPu6Boh4qMPkmt7q",
  "key10": "3rrcrGR21c81nz4ZKaMcZJauy53A2mKV1aXfAzrhXvEyJj51vGMoWBimCZCUjhLs723Wg9qALLpvHihprKuuWYsY",
  "key11": "3NsFzvKEASJZJG5teaWWLDxBnb9ceH4oShMuQymjhw5Gv2D3W7sJivC7ihTerZcbaVbZaJALRyac5LkMXSEj8z7B",
  "key12": "5kAigUyZo4L66tpodgoc6Kx191UPL25KZ8rScV6wK6xZLh6F7MzDVxpZtCnLYGuqJbG89Be4vZXwFzgkTM2Wh9G",
  "key13": "dJjn7Tw51W1FhP7P77UJffMr7EU6cTYe7B5sj8KwBrBcDk45MTf4mGmhiwes3KWrAgbRvb8KPiYSmBe5uCcU3xB",
  "key14": "4NqURF6U4J2JRY819jMfAvxfYdH87wNbv1Q9i2fwKQo29jLLxxQAwjkWzbYAo9XJMZNRZKKEk97rRZZQ7dHubpLs",
  "key15": "2QY4Z1Snv7nv2iyY4ofTg4n1KToMJMB9WGmwAsuHHeqaFMFLsNjzRFcW8WCV6av1wAkwSSuAADdAQ7RGVdF9fwHr",
  "key16": "5BsuGfRu1MK6dd2HotNR6tqpPzNdUFxmeozZrEP9nKajqHy9jAArZD4VKUSQtFFYmuZUC3HHURQysd1d3zgMbAXD",
  "key17": "2tj18YiPncpt4p8GPDyLWu3DAxpj6HXiuQMT9sdCHekh9RwWuoVoHCSxTdaqyhEwP4yVuEA8jd3bQ77FR4T3c7bK",
  "key18": "4b9TYSkkSTTCnMNjKn8RBYqTqQB8r9sM15MNHGHHyQAShf6vc9TJyCS4EZdPcgFbbHpxU9oCbhuDMbUkZmX15PZQ",
  "key19": "4tHZDARiS25FA1aFgcbcJkxJgSi4SDDUjLBeFaLjmxk1irMvHU6QerbBAZev73MGjsYNDaM9CkoCZ7cnp8yQFrKh",
  "key20": "25N7jjgPhKt7YpR3WDqhgyzXdhtQZjqkLpD56bPQmvbcUEFss9FmzJQZrUX1VAUkmNwDrVLLfJ2WsL2vuAQ3kkby",
  "key21": "2CjCvGCvrbnq25PR3cxQByhmumDCtnevfYPgfUqJodrZGDRkJ1yvZKbBjUxiK68LqAYXpv9oEqaTmCAszW8eN8MK",
  "key22": "2ffFxjoX1XxSNiDvS2xnVHEkGeDU2pKBs2JWVsjndxBN9QY3eWZmYjv7TyMAbZpuUaxWTSrqjwBrfxQ2yqELUwFA",
  "key23": "5V3EV8we1Q26YFs2Cyuyy5cMqQEjVpnWvFgPyx6ye5KdQ3Cfn3pr2qVbzqqQyQg1pgp49tnNHM3Fy9TJYKKzvP42",
  "key24": "2szcL9icS279qUHXNL79H7xe7e7h7oxCJ5RtB9XTtQqGGX8mJFkvWfU2TdD96sGNucw8ntbSYKnvLTgnrDC1oq1a",
  "key25": "66WX3bTVNBwrzW7utvYbLgx5zDHD7KN2mXCfBfZ4WYGdtsius3hQ3QtpqqTbiNmNwHGxxX5a1LvxBDYBfj34Uikf",
  "key26": "2FgSguLwuPHS74VotJinKufWbhCduw8GR1Mr5H35ZDPbEZXvNFNrrjzVeZ2hHxDVKKak8R4UbhPTMhLuafMB8xTi",
  "key27": "3dbRkSCimu5JJv1En2xm4PDZPhVbaebCdDK3e8roNnbHzMSu9VGpn4H4pJq4a4TDpJFTPgJAjyR6geYB7C1tnSmL",
  "key28": "3R6mWwy5NjXFq3BAzW89nUY3fEfYEsgULJ3yK8T4pK7PB4QqDvDshxabGZqE5bokF4Zt8mCYQ7rhWUrjPjhJ4hLf",
  "key29": "4nZG9PDS97EPtJvttKFPhMeqxJvwfEFrKjX2RDzHcTVbw5dNqYLPeDpdBPvyNC3LkwzSug7YqPWyEaj2ZNJKJut8",
  "key30": "2DFqzmfEdhRSMLDzDcG1hcBKy6pF4WRXFfBfjtxbvpjGoktd2G3siWFtNrF7r4Ri9UnqGbSwRoC8vuFTsmAsRx7T",
  "key31": "2XHFBCqPVqVgX4bkP1rJtZjFnFr2FC94YCmyDYWb8FBeWdstqLz1uDaqU2j8TfB9x59Z6hjgLuVBqjikRXhZbiBn",
  "key32": "3YJRZ48ZmLPf5beFtEva9u2wQKnuCfjTiemhMwo2k6SiPaTAR6pvxehFb3YtGU4PCHYgMHRUrFSH57PvR9p8zkb6",
  "key33": "5cqvrDyMUHSxff9kRkHmDmaauNE3jp45rR2ZpDezKQdWRWkQQmFwMiUxHcqCzBKsZ1K1c84CLoNk2Ve1pzaJndij",
  "key34": "4BvpbdFRfd7GbapvQanExqHA6e3fJuYUDtFAwJV6iCDAW3s8pb3SYVHW4FPKiET4eaND4WKkSaGKMRL8jgyTzDQb",
  "key35": "5dnmLtAWGcsrdL5ycEusxUw81RnbykFT3XLQH8GtuNWzFUHEFEq3FHw4bBBU1gyiGMLpWzurfA37Kqfk8RKZSZFi",
  "key36": "yR1nd2RTChDSRvb6RscVUBM6q6mfXck7Pc1A4hbr7L4g5ERKKcyJ4SvyF61AHX5uxSk48zStf3pM2HKUyEDvxJ3"
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
