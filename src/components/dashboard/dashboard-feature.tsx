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
    "5oB72Sfw5bz4ffNNyqWYhvteihBGJjmwUdpcBLryySY2xX63xjYtXzj1Nedku24Wj19HWVySsUqS1Ha6QZaYhta9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3ueoJ1HsPyVicFubmFUwaZhRWpbYPEoUUHcdVtDFoz4CKBZoFifWva9u1KyCgs5n3peEK5SBonYZRmEfFz5F93",
  "key1": "4oaih224Dz16B4ikSCynP2SxhPaa1aaE2ZAHAwdQuZH9nxVPMpGkVmycCVLV84brGh8ENRr7B4yhBauYnw6LzKZ2",
  "key2": "5TnsJymSK523tQwNUTAG8mwWJ9CF4PAL5JEuxDRCF3pkiqUDifvuXyaVcMyyguds3iZStPtPK8FWGW4ikwYktyh6",
  "key3": "35VPbHGUbwBRWHA5S7kyu4qoPL9CTDpqb3BWoqU64heRKDwm1CZxVKE9z2Kvw6wQMzmW4QZT4YguvjdYcaa3mj3E",
  "key4": "4WUVuYiAh4AaDLhbB1qkZ8Lw8bFcqeyfiF8QQzpkwLjM1x2uSXJGdzKZ3vGEdjLFkFMSRPQDyxbKwg9zmRALXk2s",
  "key5": "5VCbC7AVsxLP6EP5KHNLCm8wpSdB542NxrPKZYfceW1DCP8D3B5XqwbR8jg3LPhAghZEzpkZvyFjeCAZb8fHnDrT",
  "key6": "4GzRiR1bJugsov13JsMDxZ6x19EwLqEfQ4egCqAabYhX7Kxt3UwFdt9bVD8NMturMKTPivVsrvzBxZR6EZ1ua5fU",
  "key7": "2X3ovWz24CGera7yfm5bFWw3qtSTMFDxSMMxJif16o54KqZN5rQfZgTVUao47gthW34DJy7HEw1tB3LLDQpWepXd",
  "key8": "5H5w5H8jjjLmNVSAqJDgHpUH6PgVLFa9phr1vTYUPkCfWXtgfvkh9LDvXVgsMJUhRch4qYKuUJnUN4H8HCA7xJXB",
  "key9": "4AaX3KiU9KM3XCre6PDiiwuHj2DRBrkCW4MqRoHZ6BwQf8AiL4hmk2U1m46DJZNJSaoATU7zDysW3hVTkV4iV4DS",
  "key10": "3ZeWDthKh2DjQBx4oM2s3WTGuABBKZAzCs76kpmQozth6Qp6PnG6nQG7iqgkG5JvRu61WbhLRe57fUXYxbS3K9kY",
  "key11": "3ZaoWndiqGnrBoNLuhP3x5YorcmybJcD1qw9uRLChAEScaXLammhUTNogh7BzTRXLojSzmz2xgZ6Y3eRaXxoqF9J",
  "key12": "2o4Ypvn91Hn5HDDqA1TTecoJYoMBbsCb2kyP6kju87etwcPLFJRU3Dr8BYyWewiNrpbqBEwB1vsDEmXTsgNf8STp",
  "key13": "2fXbsD1ZptQG84hTgSiMnYeFuhMrE4aMZCbmYmXrpXaVq9ypFCYrNrSpMCgHzPgDYhDTo43ryYJefx14aZYzsoDo",
  "key14": "5vYxAYcwQdDSbodeWUuvu3tk6dFXjGdCYZ63Q1Au6aN9kJ3Ppf6nSYiM8NS1Gf7ZaCPmffzau3vehysVsjS6FvRG",
  "key15": "3JSY19DiHKiHW5U8HoQYRvTJA6n2Safdkmtpr5qGXT6w9v24etjnJMEunMZHNbryoworzR5amJvzn5YcFi6NMHvR",
  "key16": "3Y1JiqeVQDsABCGWgPoNuSLrzcCqjxTisQBQwA4g2E3YnXpCpsRqycN7U5ik6FUBJsidtygZKB1mDi7YpbEjrrQA",
  "key17": "3S9x7Wz3XiTFaY7o9qERqSNmG29XR1ZQ6WcJRgWbdYn57kV8RhPNa7Lm2jn1V5jN4tN9p4QYUrWVZv5p1KTzjbuH",
  "key18": "2Xx6c4htsctaaJqRH3vpmTwKKEswom2H1gAyKzTv3GRe3ynffZuFRc1ifPVZR4vURYjtqjhrYYZL7CvMVdz4ey4G",
  "key19": "5JxSTYqmPx877vvSf1McR1ZRCGCat9wfbET39f7Pco47izie8gZG1jKcRhY1jP4DCyJComihttojrr3rS9LQT3oA",
  "key20": "5yWUspoPwX1CKZd2NcBHrzeXLNLxARCf5MKot7SXmWHvgU5eboZbpeUSbgMgMt4giwzM3XYokL4jmJDNg24Rfmju",
  "key21": "4thk4GsBMoygNUHqYaMcq9m4xRY7GTHdzH8tf2Fxhk4KoBkLqv8XEPUacbyKf3tKqPsTwjEhU1nUXbcoC1ykLNac",
  "key22": "3eyhrQ7HiJk9P5X4sHhYvg6rdoQnkkCGi5ShQ6AUjyaD7xdrp3kbiCkcNNsfZxhD2Xnuxbm1ibLAh8mqPHdjGDFb",
  "key23": "MCqqJAXKUFjSoC566CFDZeesXN9os3B4u1UR7f2bMqNPzquvZpu12omEfv7cRisd9VjBTQsFKQypayiTgUaqAV8",
  "key24": "gagU4iEMHkXkgGxYuQccPqm5PR8dXikq5UkWpiMzZTCkJuJqF8FX4Qg2VU7aY9DmBpLWuKPUaSFXYRCgGtW6cjZ",
  "key25": "Z6x7t1ipfDmtgzW3EEspPcfd57NZRoV6KJbWgGpX7vxyRvbNksGRWAMNhd1CVjdCJYWGaeUXq7rvVmFJNsMKivK",
  "key26": "53Kdx65meFDu4zH9129934CWh8A9scU5XWBTMsiMuG5DMj5kVDAQDWitqzHYWa7w3s4tBwZiVeikmZCxre6uhQdz",
  "key27": "2Fnez1272x7tdWL4sJiUsPmv7u37Zs3jVCAkGzLmyUrDcNDFzVNSeAe2wRYBdmwKWBzGL8THw82F25J7jFAyxBoT",
  "key28": "3A56Hx66jU3gtTRfJ7ztLMwC1A9jYW5PiTN1pMvFTuuiuuhMAy5qQNsZTc7gVTG5qQyn7tr9Xc1K1aZZQqNcJzUd",
  "key29": "hSY8cizvTnUtUnmcn44MKH6BpUyBRdgT98dGfKwmTzkYGngVTqvaKCwzy5mRSj9eoVdNfAonQm9t3okyabumyRE",
  "key30": "5sB7ZnECFiWqo5w43FnCUqhXDtRsnFDPjR9wAYHnrLSNfHuJkzZFJYzGVm3EK9y1g7qCgj7gXtvBJ9bQowcv4iiB",
  "key31": "5Z6qpLutXdVCTLUkL3huPmKEfxq3MgHHwSWoQNYoZVLzUdp4Hk1Z1FXk1PEJfDrojpvpvhZ4Lf2th3mNBtDCQRjm",
  "key32": "4dKRBeMtsX4Rxdx2ECoDDa2cLicEDaVQbjLGjushXZ5ujzRUsPXD6HZnxgx6wZhMdxBoqyoiLNhrrJ7fRn4RoYs",
  "key33": "NKc1MGNSjQEL9YGsHMoASrmNn7hXuyGiBh3c3JXAnMwXKH7Hz3Bi2M6dvqZUW9ryTQNW8qjLXgSkeq5GBFDD9UA",
  "key34": "AV7ifuEnAbWtqh4nNcuQLmrorzr6s25GZ5b432suAraRyFgCSQtHBLRBXjvfJoMZExnEfwxXswxqHP2V7SKF1uh",
  "key35": "5Hrg88A8CBo4h9xPaz1m58dvrfxUHvH9kNAgF5jZQd1KgyuSSd5NLKYpZ2BuiUibFcMwVyi83KizJZbEC69KrtRR",
  "key36": "27fTupTd3ufaiDNH3pjwffnGmdXq8xoK5AGBy7mFQdTif5VhMMPtNGotWSM6Ka7z9y3xRuSnT4ABpCctSQ8Ameko",
  "key37": "5TUZzJsE3xu3LsKNdy79nqPTGp7qeBksZK1BGsLNkGjEPM6jvtHpvso6gUMXZfcFZTdesrvhozDw3iBBuik5yLNv",
  "key38": "42EbBt9SjerWtrhR4iezAsARK4hAPuyJXBmMmnDc5udS8wmXA33FsmdcfmEZtxFDig6K98r2unmgEEXWqXbcL8et",
  "key39": "3GXZBBKJzEgUqj1yLSvHw2i76uc9YjQuwwLyYyAUGgF9HCgKN3JEkWraMVwyoTuzeA9B9YuaCuKFXuujyk3MBHMh"
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
