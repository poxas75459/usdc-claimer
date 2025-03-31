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
    "4gx7uw8YgNzcNEKmSw79zJW8weGup9yYWwAQrWyDdTw3hRcM1LzQHNQwB6zNjt322TJSRDV7BsJLoz52akE9ETqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2TvYMbMqaxQYWr9FoQLZ1G73JFYiZitpC8GE5DDBSSrqtzEA8wJEDcHt5VJytPjAfrnbSz71Xm4ip16BcoKeVc",
  "key1": "3k7w7v7kfW5CkzvbvHDt4x5SzwDZGxumPBG4sAuHAqL1juB8hY7pCC2qksqJKNuANCwQnqV7h9R6ATtguDajf8EV",
  "key2": "3UFXASY6GHijsbNUpsKDWHxEG5N6pUfMo5xE3wJWN8pCZY38dMsQntxNHMqtLTkUGegyWtkRJxbbzAZgjPFsisWv",
  "key3": "31nC6UpWZ3YqVkHuwdUZTgpD5R37D5DRVE137XYBfZidJ5djJSo44MWB2ujFvWDCHhqcHSo7oaDij5V8HWWZ7M2U",
  "key4": "664wBUzsgprAX7X6hWc1G327hGnm7VA78Xw4aSKPE1F1Qptfirc9JP6q4pX9tKWmeTep1kNoERpJ4nkS6T3DtCT",
  "key5": "2ccb5iVKnBdPe72izE2UBEcrxcTF5sZbKAfYBT64XzejPKtkJ3LeCdQC2JNrJiAh5GPkcNd1Ye1fPYYAZK922Q3p",
  "key6": "4BzyP6BEmqt5cR84EHeNRSfAnMqjUXemTF13svdptxyWmDhUbUVx3x85gr7vaoRpA1yxsh9V4QdnrjKrq58d8p88",
  "key7": "JTxPTgXQ7CJL6Xk1DUVRW4xNysAf2qv44Apjjow3cGe1TZg9kTrpfaq38UXGUstSVWRigW2Xi2kaMzxVTGaZXqG",
  "key8": "2F4qmURLMWZzjR9qN9MCraikiqmcmtngJtbzgDdzxKNsGBBxuqDokQMHWeuRnHHSVbUYRKaJ6KCBn16wQyB74TJF",
  "key9": "215F9MjswszN5Dkkz24DRUKETTn6UX62CGBicwoxseMvDZjmkyuwXE1K6XuQtPUcChVFYbZnQQHqSwREXbKwr1dT",
  "key10": "5u3gmHeWX8yihBDWxh54KwznvdTrX83rpZX3wY5QxmmpSxABHJp5Ki25cAuZ3i6AhsyyzWYj8AHSR9LgUnXa1kXd",
  "key11": "58jbnWPjGDz4uT7KhRkVxhYd6uwuBvLGAzjVWpAsayfumvyQZAiDQF5dqnhCvuPWTnNZ1EmjB8ayRQpq8qCK1ry6",
  "key12": "3WreYRkkR9g3e6aYY8xcJWyLSwdUfAQ1HjRe2X8M4uSQy3yMCXNUv94zdop4EprjukxKkqVRmRYDPggGXZzbp5rk",
  "key13": "45qMuFzCctXVgXF79iXNLe4gQcZhqpVsweMmNH9VmM2iM3xDwY5i5XAKLZuFoz15yqereodGukZGedPUYpp7bWzA",
  "key14": "MGjrMqAWspTR7yL3jdzrR5sj6rjpLku2DrXZX2HbpekJ8Fe5818PwTspYrH3sdcMeMXouhodksMZpaSkz4v8d2A",
  "key15": "5wYFTDe2uUKpBDUKrT1N5iZdqMMr6Zf9cp2aMvsHxrLWSFwQ7As44qgEDmgJ3A474j6hT1SfNjTa4GULme3Zf86j",
  "key16": "5sPDNCHmByJwXddtKYgM1SfDYYYxxUsSKrRqJ4ZTjkZzwa8soTVUQ2CaZV6GEJPYKKSABBfavWCdpy7Dw3m3RSkQ",
  "key17": "3VvBTbEiHUkvpkcxuuQd3Z4mpB7gmXJFGoL6fYp9YcQnrHspufyKGHNPMAeEuPZku7DArZFMxcGmJqaR1XWzTuYy",
  "key18": "2UmggnwQo7JxEmUTM47f21EgKnuRacmEf9UPe5o67n1aKRkXYvMaxtWsueEQN22Y2414yVfAqsdo2ADjKoWdhCfb",
  "key19": "57w6Zav4tJkDjCQERLdyA2ceHsXkTJVoEhBv3DJCckeHRSjLrXirnjgL18CKHcQMbPfunJgc1783jze7Wigx6f1y",
  "key20": "2ajxLDcC47kKNc5Zd9awmvKgdWZNrB54zHcAV536wN15vadaum2Us1tMstq9TnmYGF87yKrzhRb8cPBD6Gw9YhCA",
  "key21": "64DaxsuEiGsewr4ctEdHrhx3LxHuWzFDWLQuacUkGQ3H9JPccqdCc228d6YTccGCWXVaMLS9xAqgEN5kerGWtW6c",
  "key22": "3bNczKdSkitBd7taZMsBLmpCpZ8GUJsSUSmUdxBkGncBtGHHfKfwAudwymjZZ2mhHJudnhvjjKEPPQxqYrsuowKs",
  "key23": "5rrgkYXEudLtGHQMYsgk769m54VHbEL1kJdNhvMKtoFf1iVubNSRfhhv51eJcAbcgSjCHNhHisu7XSWSzi9NMWnS",
  "key24": "5TcxR3bbHfaynPRy4YQTiGj7GQDkXbacHBeXct9ZgdfqPg5uZaFEDZmicawsqcjCReKnT5g5YF18XrKcgFCwvHMq",
  "key25": "2Ea9oZYiUdTyCpCZgBwCzTkHRCrSwcwRThfw9Tq5Uvw9nXyVrMgzS53dE2MAfNcXKMvh8s4NhD23h9ebtGneBEJ3",
  "key26": "26mbJWbtiMeeYR15qHYnEddE6BuVoqHLYbSWsyqHyapQn5FQyYRNYsYwDSbXQMFXocSw3v1VcasXWAvmFqawVB6r",
  "key27": "3Ziv8bNtJJPdQsqdA2Rfyqxu69VZLJUCf3XcvXM3dnhqDPMRxdnBy8JwALyJqxXaaM6u7uHU2NxtLBstQ6pSEPch",
  "key28": "2hJ3wgasMnGeRRzgA7C44ktVo6e4dVKgQU9fyxEPeR8WtHAYz33zq96y19ysAxP7aH11r3nsmnc6wxhZxcJauQak",
  "key29": "5sVpwesASLv4uTv6QFFZTWQvGQ81byBAg3SNeooifKG57taMofGPTNRH2FgbsXfzfETv1z3VMeqFQaMvKHffMwHX",
  "key30": "2xs6kAHje9HkphSZbRHf4yQfYcTk3nk1HPr8Ch5uJ9ipVLxtbVkJ5N4MLzGzfKFAVe9m43dEQR5YrWLRVyf4UzMh",
  "key31": "242HWgTUg7mF7vcGi5VnrDoMTc5zQmAAsdqFEwBGtzPUQJwEMrFSgnmGtJyaDDYfn2foGhD2TvV8oFZCyQG5rAcD"
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
