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
    "JUH8PPTshJ7uTKtJp8bTFtCh2ZL8NUYS7sJ1nDCMff6vpFmbePBxsJjHve5HYPfw2bBVv81kUx7VURuMJuatcwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8DoS2AK7zHzGBSJmEUYAUnabNPzf1oebANb5P3sHrrNDGRom39mGG7UkpHMRVogu4TaCPJUsjbEt6nW92QHJDB",
  "key1": "2eackfMHPQ77vp7ixKKxQUbWLLBpUCDh4BMixD8aJXJmTPonR5QnWyeY7wmojBvbpnfnapYpaksnfPQWGqLMZYPG",
  "key2": "4787FSkqZtjEukGwdywLxUzMatxyX38zn3BbbJdSkJxtBMUZAbuiaaQWdBYWL2zR2GJj43daJnWs7T1rUKFaXFHo",
  "key3": "45Pt5vpCinhCdEDpCRd2gQBNorzWw1ugnXRbKqiUeiGmj914umXHY2KAF7coY58zHzjj92rC6eDPjTF4JqvbFgf6",
  "key4": "5no7TvJvjfjsYuqc8VzHkfsavBuf7AeHzz72zcfPoyfjae6fbSpFhw2sD9CXyWP4E9c5812cEYRDsHu8tGbXgqaB",
  "key5": "2Q1h7dmFg4SPJkkwjei5CBZjv3G1A3cRPvp9cRZiymqqanUTXfoHNTXAAWUYLkkKMrYUuzd4htFJiL8FsXx43yUQ",
  "key6": "DeJAY2Hyf2AWjjtFmumeV63mJjQgazK32AmRUZrojQ7vxHgEzk91oJjPbPCzGeQao1rTtSuV7e6vhUYd3ridRm2",
  "key7": "2SbwnwHwg2kE2FooqHUpENWzdSvetPwLfHrcSCoGyFP25AbXPn3ZLUVnuCkMoRHrMdux7h5djJ4din1wL42VJRCh",
  "key8": "BvDsqY8FgMJbnwPnsF2ZnGiPTN7ZaNzdJbvUY9G2WoPViMo9UNL78gKm4Da6mDHb5AtMfAWocauEJQcdyTNDqy2",
  "key9": "2Mqz5ywci9T3e5MrZ4uZxxufLsRNAsK9FkhEvcg7THZg7sa8X4LvxioepqWEUE9wurhJXPv86GqGtFPCa6LzmNfD",
  "key10": "GPvEUZDqvDcSw5PDudTzm82zHH8vTaH65Kvy2Z4av4QPDY747ertVpb8haaSxnJXYpCpBmtBikNDcfRmUNxGhbG",
  "key11": "SxngEXZpxQKWC5AwUkGWKD7HcMG3HHxDSMiRMyZjBvRCdNhxvph99pwZvDX2z8PS9KJiH8VPui5rpzR8Jaz2yo7",
  "key12": "5ExsMQx6DmjswkXWV9Ji9CJG4tQZwe8bo4wh3PMfKJp5tBkZmEgsc53NaH8diX5MHz7BpmS4w8CzCaToDceJCBLp",
  "key13": "5WZFv9qFUq1qKkRR9kBczvs13VXn37RP3pv4pfRea31n4aD3WH9nHU4j44M88j8WvEvJKZZKXJFKdsVrpxeG7qdy",
  "key14": "3rLCYWUeTjkPSKQA74XJjZLKw4R1fodBET9KHmpthYVnXT7EhrhKWTDXzXRxU9i3Whov7epfgjUaag6DNnGawryM",
  "key15": "2LTKoYt5BcNqz65v7ui63BrtpWFEAg749jL41cnx1ycQGjqnyFUcV2yM4Be5xseQZHYp5nQdYHtCNDCxvxz1MZ2P",
  "key16": "3rpmvuQ5RzPeBPLYS7nw3qzz8rUH59yd9yMzSanDFi8fpq2xYqsHAX5aegdAAAHkWBcxmyZeJEHd6gDddbrMPvrn",
  "key17": "keQFbPfQjjobFxxNWSrm4uKK2BeechB27ph7tUqFrAXjpisXSM9gMNBsLaeeVEZeSnKbXkbnrseiZqEcKXfxACS",
  "key18": "3sHTmBWQ8Gug7euYQPbDctnyka2ARcTbxSaDv7w5kwogmMVZePyo2tUcFjMwkKqYp4rfLhKPn5XHob3MGRQhSSTy",
  "key19": "4M55kxavdaBbj9PvVSeghVYqDz2m5Q8ethEuufCDr4QX4UUtEXB4s3SWqW2wpouGogic2QohW8wUwtapQUKRKyhX",
  "key20": "5xZYux6MHX18K4n39uY6A4YJCvbjPTH5WoUfNqQadZkNG34xYyQTnRAk1qPtn4mamNqLsc5anUuxie6ZD4t4xnxi",
  "key21": "38PwirvU92Z4xCw7N8BCmnUqTqd7XhuXGMHVaApYCmNrNiD1HZ2Hy9VgC8twMfShybHEjfok8znQNr2j6dwHoVnP",
  "key22": "4r3EFFT8cdqp3NP81X52kVaMaGEP7iTDJw6zPHAqo6nXBgUcECapVjaAHeW2grpP6VWnRkGNhdhMDyp2epeu1Lt1",
  "key23": "4QrFHo8nipCmLCWnNitjSE94enbqH8DSyZE7GfnHSYbJdP34hSMf4zazEsgzcnBtFEkzm3j9NVGgLTFiWn7VQUgE",
  "key24": "2s8rA9oT6zi5gZdQTpCA9xESrWQskNjbg7BuwFZU6MCaV5W6qjUa5VpzMdHhUoyzaqr5kdoSbNw2uTd5DK6JAYVp",
  "key25": "43mh113kCmuyixFDQ7PFnjQFEHDeJWJijUgvpeiEuHLUD648fqDEdDsTATNWVN5Wgyucnn1ES6oW8XBqdX5fJ1rv"
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
