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
    "268hEmmUF5jwxVfavULZuGuAt9grgWge9W8csP6ew7LrnhLpWam62nariR72mwdCpeB4r7x2E1h4zotQGATZU6iy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbEKgbcCjE6ZmVPscNBitYiV7zinVeirAgp4mG8DYWiZUtq6KiEAF8uYFQ7RVmfem5sJhaLevymRE2dVL5oSkZC",
  "key1": "3L1XN5kNLkuYMBBEZtsVbhSr87neNKbdDhqg4CYRs1EvaHnSrwSzZYEf3SEYbrefsT9L17KukmdS5Qruy6oQ1H73",
  "key2": "3ZA5Qnmeo4Uh6yDSvtGcRHjSXURX3uySmjpLudEQ2N7uSxozoK2ukA77qbSyrJCkWvs7ggvwLu2vCVTztcHe56PP",
  "key3": "5Va8TYCSaXFvBUU3uUr5CrJodi1FLGLb6etYs7JCE6VLueUzB1kP8KUz6hDy3YJR7PA1nkhys9nwotoeo8BnrNyq",
  "key4": "42Hn4CFYXh6B5539fpniVbP5ZTzW6fDTrhB9K5327KbwDSv5VvkAYW3aXBV8gMXQYBKAqvj1Hv7b4EHc94VoTGT8",
  "key5": "4VwepuSyfDkKFws9rdn6T4fwC2J572b6QqsdosZsz1rw8QSqJsZ9Kp8QujAwfhdj86bDhCgbacgqQ2F74rX2Xob5",
  "key6": "5rCxEbhK8fk6tYUjPRc7tvs81thzRTNu2NdEjij6h8uEvgjPnyVzJaZAu6xMt8GYFphFFAF8UkPt1iY7R3PUq7YP",
  "key7": "63G6jKUWD6GN5A6HDo8tJYwD6GLof7HRcGd1dHpN6yHDH5YP6aaqgEwUp3Q1fUg7dj57pWopyx7AhTQKPuB6GNRa",
  "key8": "BDpDTzGxBYPeNLmVqL8swLANMimGArvi9kZhgAsMhWA4XcfJusLzmsSv3CuUNBVMzEVqwFFodUHCmcX1oVkcKPM",
  "key9": "2hEu4RdfMoG6S2ATFEvMx6u4PHCawcQ14udVMgfiH3HTqxJC1yNwoge5Nmy8KHLqbwpGjB4iDGAgkfAj7XxhqEmB",
  "key10": "Ein2VSAuCD6YY6eGmN4DZ5KbENgff6TzxspR2nbtX9MNP5YANMPfEEQQ1biHcc268Zi8ApBSKEZuWgYGCYjFBU3",
  "key11": "noWm52DhtviekSWKMbm7m86cPuxTdfZBiPoGRKvxznsERMHkb6AmS1uTs4fwQ1nL3qzLVJdZXhF6nQrfBf4Fs3B",
  "key12": "5aTdyD3yCU8h8E1bVPFrWRy7xmV5SWahkZagDz6T53djUYgWMTFEfDfkZD199vTcXw192zS6TpZTFoEHvUvnciAu",
  "key13": "2k4hfbfTXAwZYp4Aj6g9hX4ZiMx6dLpt7mX9mft1T86k9H4vuvW4vjwaRof5nYRq6k8Qu8jKSdg7FYQNpA7ifr4C",
  "key14": "5t58ky1u1urP8AD3EgVPwnZj8rufbQrwvdgMA7xwVy9TtNHwuj1Z8nAsvdQyC8qAx61DQwHnT5RrFmWmCz5aZAZ7",
  "key15": "ahXVuHm6hSbcwZnUXjJBp7bTrwSXr7ivuBqNYA8N6RNJh9Z1pRwWn24AL1ihaRkVn8LG4RFrYssJkzQhe6PZwCv",
  "key16": "5S8aihg9mkNvvmNPRppKkMDPLT8cus4pPk8VQXoMhnGgFG3jzqFVEzTLWyzzi4GNjETnobLATaMomqQPnwGKdQCq",
  "key17": "3gauXJQ8YJk17FVfkr2T5WZWT9S19WGxU7Ez3Ky1unSP3ds1jc5nNjS9eurWPnUxHFfsTCX45ebZ2SZt67s8EsYo",
  "key18": "tBPfvVarnXYs8pNBUTBbVZmJbBdST4jq6Rmjt5peGndg65VWQNDHDBaDiXfZnw4ANxa4CieKtcca1CbFkTTQxLP",
  "key19": "5gCLrRLUF3LVnsDbbcUSzcr1bt5iEws7nFhgV8uQvQgPg4qjMfwu4sngvjnNW8CZs8PnabM951ZAqbMPeJ2jymEp",
  "key20": "5Z6ebVvN4Z51Qh2ACYupR19rXD49Zf6zQRLywsRVDAEEmtbuoqxmqZEkjSbMXRVChkqQmvVBzauUWeXKYYgHUdMH",
  "key21": "cR8cnNvsud1DPLQKp7SYbDXZbaVWbrDQBNY1d7bk3j3VuEEYbNRHVV2N8ag2QFWuHD9LmBMNvxYnaho2vbhxDoi",
  "key22": "5Pc45xo5E4GUtmU6ivwZtXkbhFkDHCbW1qZVhPMjWm46EXPsYjJ24i7qHYWCupi7w8LudqJgJHURAmnSTkdjaJui",
  "key23": "2pyhXugAnqZZG44A78GHroVNQTQf6yjD8wabvMfcYFZd1uK45BSBYjweBtYRCBMN4VGjhYU894PPvKAhAsXq9QWc",
  "key24": "2LYnXWJDLMVeKdaEWHqVoi1DFvbHQq4Sqxs1E8eRhXnMWCa9xpmMVDi7Vk4oSF8TVPtu6aA1RNZQwk8HFmcDcZrs",
  "key25": "3wJaZiESesbxdotYC6oCZManxbAGsaBitBtgCXqTuXiwspoPo3HnKR9hxj6jgEduM82ispMsMRsEREQpzQswYzUi",
  "key26": "65yPsBJSTbgAdDAJrtQnwtFmz5dtEp524Y6vxSTuJKVDyeNooJv6pChhnm6vdmrLDEb563zmNBn6vRwe9Q9C5F7M",
  "key27": "2SaTtqd8kBTP5QWTdSyBcpciFdFvFfA3MxRF2q9WxZR6dzo8x357AYWWF3s4YU4noK2JHCrhFLikBUmH512NHiEX",
  "key28": "42GDEk3as9DY9K1X2vojgZu8a4tsySEQCyWLD53cSDT48E3PfgynZmH281rkkCHM4T5xPg6i7B7KtUfJmLMrvkFC",
  "key29": "45kiYwjwoNHeReRPcbh4Qa7GhEW6BP2amiaaLiaqsxkr38LCsGExTL6pSa5uYEwiPvxcQK1G9Nd4rnw9RfE1tB1a",
  "key30": "4Pgdn5UuWc8Ls1T9j49BedLW24wE47tXdJHbu9jeRgisJhpbXuBh2JP5Q3i7QPP19hySpNf8XwnQdsf8bABUjuco",
  "key31": "4P8pmG1AH6b94kBmzc9rxv2uh1rKVGo8HBrBzt1zXxPmSqASwexjjsWNsruEFw4zmBw2to71YjB4qYvTBefNJ3Hy",
  "key32": "3dCEjWuTprYyprjrNDYZf5HvCMxb3UbFCLdytarjPA2pQVqCPoAFHDjpqhdQvADWa1zcqEs4WgmFxXvDLftH8k5U",
  "key33": "2osLEZw9FNW6ZRi7S1V3aWxH9Sy4wUwPL8uG49dBptoRBYsyhgMecnQdVZsVJT3rYfpURFXmK39ZDAS8eQ1SPpi7",
  "key34": "2AEj3KPsWngmTg7zZmkcTfGSd3F6GSsgoUk756kXoy2RYmJg9DjN63jKMoDi36Hy3FabApMtGdN5feUeDrjhnKAf",
  "key35": "hXuxYSudVLh6G7iJhAd7tBzsdj2chmRLg5XcgTYfxCUdw8sGW7pQJjxBVTEbHJvvRMYgkbCxL3VQBUQd59Bo1Fq",
  "key36": "3qFXRKeH9NbBXYfcjtAcHG2FswBH7sTUQKuUXBErYWj9LGUKqFACpmL3LGC4q6Q6ndiz14XBYDTuKswuYMrNfDdc",
  "key37": "5beGfDBFyGN3XGE4npEC5rtqhovSYVnLj27HJANr8vGHKCU4GShMVtnNWY8wYttMWzUT3H63W91PwhXM1np79toR",
  "key38": "3WXk4ndED5pbaVQVh3mmfab3TAVqV5LmKnWD7sTWnCGE4XppL6BcYJHhWYRHiSzLpMyi9VrDtSM2jAsdUyHi6X3R"
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
