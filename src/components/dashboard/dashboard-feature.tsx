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
    "2hkXDkbtNQ1j3kmjcou26GcDc3sUr3LVRmV7BagAaM7RSWTdR5vfY7pJuswToWJMbne48HuUAVVWAP6CWxcQFoRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfVmZDjKMNNT6GXRDhVYBg1zubiTMJQwEyeE8PLn5TNKLPeBg2yUyoM6D2DGXBF45ZpvDj6EHKGXcFwA58Cg9LJ",
  "key1": "6X1JgmbRAUe5RGfPq4wRNTsGUuJAhv4ux5BtmLJmDpWjxhEBBAF6mJY9sX9q43qpaAHZQCSNHwtXXUVDX2oQyNn",
  "key2": "37iqvfsYGENy7NENoNrz6EpdHZpMYwFdKQd4VcrNyftbSWsAVrKRpAaKyhqc1Wy4xnb36gq7LDwzY8fZ1SFtSR16",
  "key3": "2y48CHMZ4qPQevqMizUYo1CPmn2YVZkisHVEYsWMRcuALtS9uuxqNDoCSFKYQD3jEw5cLQGgznM57ZbjEBpSnF8z",
  "key4": "65Nmg9SktbnSgPhCSFfvqWcARsqvDyoryLV7pBp38pkpd8wGY47bbJeywjYJkJqR6oHtDu8u8D9ubrGBqu5Wd2kX",
  "key5": "61q5xcRhpxmzKK7nRGuLR3QqQuVfNon4eGj4MMvXCJHPiNRayRoAPSbRgswVK2sdLZXTY58qUcjZ2FMMw4vy2GyZ",
  "key6": "5cjetxAJdAek4ehh1VUMicnYyv5umWrMJMBcNLexf9yJ7CTZQbfTFewpbtV5p2X5pzBfWsgb9vom8ErYCVeJC7pC",
  "key7": "4GY6KqLwQnt6ssPbWkvqCCrhUK6W2jBTPS1wZJtjGzpzGp7iCZNCYKUWRYS1XRmJnbAKDkN7bDce8MwyeXBpmzZS",
  "key8": "5NWJFJZxKkqVMm9oQqd6Tjjytw9f7nYnXaGab3EwmbhKkuqTVze112azNXvyKoqSWZw4h7FDqux4repfncuvD5mM",
  "key9": "9wwmFEYqwuQNeTbsnZZBNpyQRUo9iWXG7eBYSKZxNNJe6KMrb2878h7uZaqEWBteZZsRC2n6FjJ6CahcxQrG3nu",
  "key10": "aqNnudHJdjELQ2xry5aDULRJM3nTbywwAr3YRqsNuN98vqPMzmQu5KZv9vey7coMvEQ9WX8hedPgohGKsaGcMV1",
  "key11": "QPS73tpRQsx2qLpUsfvMiKrnbADf31odLo5e3j9gQwJmygBinr86C5TF7B77ihg4iTMKFUWopT77T9jm2nFZvip",
  "key12": "4tRtYzGtNZz8iv9iA8oHeDn5Ho1RqUJke9AmtmjseWDfxJMcs1VL7Yv17ifNFmjJVybpZ3pu9wB3zCFQFyPNdCD1",
  "key13": "rSJpLwXKxNq6aXQWerZ2jaD3rorUUBraSFzNkMjriH4kfRigVqRXuJUzoXkJSeU58RCrZpby2JzSnP57C6jDW63",
  "key14": "2ZzmUN3q9vBqvzRfsoHvVo6ymyXooPnuyLpnJAkp68QewVtTGcQhSjjcsANX2pspAFBdqV2YbrTXbwsBRUknNU3v",
  "key15": "54gb3FNtiYs6TvUKDdqFyvQP3AKidgQCxSeTCXEbhpCzYQQPkya1xrCdnjKfriwraBYxaEVUwCKHkrutbBbEkWrd",
  "key16": "2HLz8AekCiCkHSWiAzAE12p1HhkuKCMKoRcxBeFJpf7ptsqJ3RXSQzeVjdJSWXTGsF46MsEGtvEt9HDnFutJywJA",
  "key17": "5yckMrad4pdSWKeAsoyicf5tkshRyXQ6k3aNH3Y4ZGoZsxgvfTipQiVhsfzTdqa9amskWWDZFjr584GRkCiQhkTY",
  "key18": "28y1nRBo9QW5afQy9pK2JkkyUHEQFZyunZ6KgTYmb6yWgrxNAEZQg3VHv7GdPSHHopErPR6hu5ktdKJz4zaoJJDF",
  "key19": "4gmyxXeh8dtmo9oN2BzFpnPxZVuhR9xoQ4VKayHMkRVZkEgt94sTFruyqkiJDRYsJxXqLAx3XKfJAGi86UmWJmec",
  "key20": "8bfxbG6nXjLYXgQLCcP4AaEeAj4aeSxiHycgYQWzKXJSwzc7ryA15wtX1boFVCdFZLTUA8swYhU5NqeDVbyyPT1",
  "key21": "44w3heSUcEXhtdnidxwH5WNNBpJtgDhwq8YVvXx31HCjDCdvcfQaAQFghZq762bpER55a4b3S6khVfh1mSWamuGN",
  "key22": "2Yd4WQXphm88cP5p1mAtAexEXMqvRMMXsaWw8RwkPfkb4rdkhqMUbnT1QU6xcX1oiiubVnsCw9s5PDizkhwjUArq",
  "key23": "67ku1qr5nA3bCdYETp9ztzg9tTxatWs2xBQV1vkX6YrG6KVnrRusE6vu8kpRkpR6twxDGcMrQmqK5uMWFWAgSBmt",
  "key24": "5MV2w9q71FJBp8JHKoNTFRTFQrgSzzPMZWvrVfhLmvT3anAYyqGCDNnbMeDWuEMftXDHSQXGBHNjRz2NXfNoTKTh",
  "key25": "21pyrc52eDmFFHKvSod2d2ts5w9TGmuso6Rt6z89Dcus7mjXc15sBHRkkKjiArRkbiNVtJKKbbQUdcDba2uqLoSb",
  "key26": "mhnoBjsE8oEq6kkWzvzuGqmvWS5NMejYHoVbRMeYh7WW4ww3w8umsqF7iW4UN19LEQaJJiL7xxfv9H9sM93MWsB",
  "key27": "124PnM5ridymUVoQ21WxxqJJFW5ySFHP59dsknNVANW4ctZt3dWSxgP1wiAuGYWgnV4SaKbZYpc9HLp92kUXMp4A",
  "key28": "3SdgSa1DCP4JjesAs2EWZPG6SHd7aCapQymRzvMmSmbis2Aks72FTZyVQtZ7gwFYUr6HTCpLasfSMBvQLqo9AsKA",
  "key29": "3ZuEwCcNdA48LzHq3UMfeuL95msKfWqoZfjEgRXNMkarz6wXpJTWS72rNtqDJrVLem7hgQyUgufRw1scTA24tFAf",
  "key30": "5dFYtWb34H849RCnFn4PzoCBm8z9CT57kGAp6tNvsWUCKkJ4CdFvAY1ydA39TnEjs22yehdjDpvYzwSwxPFD9n2r",
  "key31": "33VYbd8oxwAKq6YtDHuHYtkFfmQmCN88u1aFoeUeJxpw5fUjzJxpp5FDfFCN9NnnftzdnLZJJg52rchrKgNSTXfk",
  "key32": "54nZuiXzAMdserZ1y9deSysJYJbeFfPcTka4wLyYaEX2LkxdJRDDXynrk6hSMddEAxvubiWGKA1QkCro5ik6G9h9"
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
