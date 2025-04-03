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
    "43JpUcqykSj1c8dLrc7PMrgXftPp2cwFhoGVzo8ms2QWkGtM5USNZ4Vg4e5QpnQEYDysse9wCDrbeBMDPtRYTiEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgtmRBbuz5ds1J7CpgM97rARKndtrj6XUwoWcjEFnaczB1vLbHJ4dFr8EBMzMLoVEEiVUVWrMyrvnL3BeV5bzsG",
  "key1": "63Tx4B6Yoqz7MthDMDoB4aapKVe9h7LkdAcShUuLvVZZyZ4NG9KhNEDYVxzTzDFvGAbcxXM1jfccyB4gykwL22zV",
  "key2": "2CEzGif4M1gpvfVx2Pkr2M4FskNms86v6cuWmzgNZVacDXuMnF6UNn1HGjep4JKyfbFBtJTwH6cbZLoRw5smfaWs",
  "key3": "3JDp5D6c8w42XpgpAwC3AH83UYo3G4idj9D5gpXa8g3rRNNbKFndUKcFUaYJHSAtBFWC3NmoA7TZnQHqc3bALZnF",
  "key4": "3BsADyXeSXVDmTjVDCQUwN9McZJGxUtBYyMZNRrc4RPVgC5nEneeTRPSAr1X96h9R7PhQJqZco1MPrLC8kdEBvcq",
  "key5": "5tgxzyfk96gzkZPG943VURx7VhvVJrNALgwfpnEtvT2mDmVFRdyS7jfN3wanXUfNNMk2QEKcPJYivkqjhYLro1u8",
  "key6": "3fxUoHHKbGbkgqLEWQVNpmhPk7VGgF5X6CtNbD3v71hxhr3qv8wJ5WAiCdifhmoqEhx34hGuAUG3k1PCBios54Cj",
  "key7": "3zfEqXcdty8PwwdFjk3kPfK3nds9hx95cT7VvnAYapZabGhdrFt5TELpPBUME23ZaNgT57S1poWjgWpSjFvZU3dZ",
  "key8": "5JoYaTcJLV1WjQr9DvZdqyaDbNWrHxbSF3mHrNY9jnnspHnCZm3jSNBUKShXPjRaFCGfivCMdfG4vq82QGuDVVau",
  "key9": "4FKTR9HQMeGL1eeDfhLajhtrg13ZQFxwD6e7xpS8dFGHNVkozWZfK3uzKKjBoXMuFKPVP62svQ7EhpMY6cgb93i9",
  "key10": "5yfAGmzpXnkGvbY6dPY8jErGsg83gVux9ficR8wqDdfqBKNHTztiAhJEHKWKrH6LgGUJ6YGWrSsq8kxEUxPL9hS9",
  "key11": "3e7MFtdhW6w6MeYpC83YxgFzGqHwu1iiKpUQaqwrm1VUruRuEfH1MRmKA7b9C9vQWywNcP2RsPp6UaSBi81rk2bx",
  "key12": "2akHcWgWXKuedpUEEw4k6vY7yTYhmiQebPxmwzQjQVs41kpxrVcdLScAAmxEigF9UvzNDJWftxW5Q5cXvWhjDLq5",
  "key13": "44w3fkvSZbnMraJUbmSdh5sX1BV87eBhETpsNYmeceyLnCHmtAZ5To1X2v7KJcWmXGz7Ns4HMxwmUKRPLkdw1dpq",
  "key14": "3KM1ViPgWqCsoBL95LRKo8nsHg6NoxzF9VucDYgXw2pmSTa4GeZFuQutbB5ieboc2qwkuvnM4eR3CogRSYVZqCJK",
  "key15": "3qTKRUdn8nsSsF2py9DsavMadWCfnRE759RtZw2jAUTS4YRdxG6HLA6hKqW4DMph1Q2kR4NHUCYsKnszh1mmcTS3",
  "key16": "2GsFFKJN41rdwkjFidvFtJX1xjiVQJ6mgKRBw9LAEdS6CbryX1eWvDK7D2KyiGs7ZEzYo6ow3C2BJ3RnCyGemPiN",
  "key17": "Ai68ovFP75QKZog9fUCWA3aAbTQ6Y5VXXXZCzMsCirvLJpS1Se88yCSo7prM3BWsGHiaiKvnx3M63V3JBz7ebac",
  "key18": "5jxdRYbPvqWWj8BjuyFuWgvyYZ27Xsz3fGgPb1TXjvpzDyszNH2a1af8BgFP6hMW5LsjqpjwwxXHbp2fR4fhK8xw",
  "key19": "4XLLhPBCi8gWixjPBqEA6UuZgTowAAc5KkWxAXYhxertjXBfkx9s5wY9UPXdU4QQq5GEkc8YK1DkubGucW8PmHA3",
  "key20": "46pVginMNieDFbkrEiLTJ3G58yWUw1eQoZAq4Yft1XkFbsNbZmf22TSLFrEi2xi7atGM5PJ4XY8pyRxX7GUrLXNW",
  "key21": "64xPqR41g6RtuRtaCgzFhqJ16fH3Ra1f44LXZTiovVyyJpREQrF1nysjfwhDL61MVECZ43LL3Mr7xFHBGu8Xv8M7",
  "key22": "3Tna4ewSFw12apJ5zmn5EGJeSkWZQGjb5Egm8ikYrmyCEkGuPpDzDQoxEwtn1dgkyvGB6RcweoAgKNCkzAQgmMb6",
  "key23": "5Ue3pHfRiNEytnQx7dho3iiz1ahacJ6x7gFdSSnPjfW91yA1MVixvpC35fVRNDoqoxK8d1DS8wcmjQA1Sf8oUZMd",
  "key24": "5bTKkr91yU83XsiajmgpEPKpGxs8FU7rynaFgEdodzvzoGyJ9D1wbFQviphRQUBebTELMhcQGKawH82zHLL1uwSM",
  "key25": "2wKDaudj1QQMTkr3dMSsnnuE1D4QzzEbcD2CLj7yBXeg64PjWzA1VfBNzwtkNYCWuEQExeDgs38DX6u484jCMN51",
  "key26": "26JfuWD3ShTdJoSWwHGA9CxjAkyuUaEPRK1tRhw8exZY3HKs8G3q3fYvyEUwzy7t9C96F7XCWedSDAXkTqjN3eA9",
  "key27": "2Z5Wvf6hmyR1ysmd1CLCtJKK7P72RcJES3eRxzCAwv5Gqix1NAvkySRTmNqq31mHkWTjS1rB2xXjeMW266LLa4fp",
  "key28": "AjaMDSkMma4WvQ7ocbHGfYMnrqivXLaTiSLssTf2dUprMrP2yLRpFTBErYJiunbUJz8jzbJbzaFW9PghwqD1gfA",
  "key29": "5N2T8HHBmUcVQXdfysE8vkBtDcY7cfXJyT6bBeBwd7FdeTaY3Z5E6voyPePdBDbbAkyjXDM1HofoV8aszdUNdjZa",
  "key30": "5tBb2e3J7xxzKeHX45Rwik5Sy2aMddTL7EKtVBM45j8zVza2ifE2mPHAqU4dchmGXR3MRxEtxcF5NPcLiX94bpsq",
  "key31": "2W9EpUEzBkoygBzyWNVpZaxuR8ZNNhwZ1xmnuFysfDgETMGYGmMccNw1CKGA37bMHbHFanKtGNhYJ5imyMGEB1cq",
  "key32": "5yfVQAgzXNfhhctjHzmiq2QtYWMMiNcXGtorAhJnEAHcGr2umC4yWQxyeXPGra1QfR878JV5eZtGx7imzjzVvNq4"
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
