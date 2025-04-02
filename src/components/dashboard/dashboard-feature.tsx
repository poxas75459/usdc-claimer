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
    "5spc6JxmJ9FYfiE2GqqC6ymzxnKzuNWtcD6rDe39iuEisbA4hy3vUr4KF8HUbafJbqckhqdZui7jt9JUpKZ5jZZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gv9u1HQuTR3rQ9tQrkyeGDzwh8FqDTXHfvd6BoMGTCBpaav8FoEnDV9CedEWrdL8jLxnD8cqWPYiq6TefqjSLB7",
  "key1": "4TRB8mC5ffUD3kAa6qsoFqAdcazJffBy4tbHM9ekaQcMtCgsRei8F3rezbB3MQaE2u2LUtcxoRX4SWgUvPhzdQCL",
  "key2": "5EZe2LM1mHuqkbpoRYbXSVKcamDapXbzKAR5T1AjSvJcC4HYJynt4YTonh4GRCsw3Xs7KgYNM9dmFHoiLbvowx4",
  "key3": "3SH13dKpBLyxSdn6DxFQ2fvxALhaGWj6AZnmbwTMiYkXxSdme8uu4rxXTFXKZE9F4ycMV1UZgKmPVqTzGHpMfY6Q",
  "key4": "4LasVD7TDAod7hfPPVC57HB2ZsSk3Ay391SqSwj75xuaXEPHg1YttC3veQA6yZ72MXASD537FTnVmRWHST9uVq7G",
  "key5": "4nyBderHHs3QtFLyJEfnvJA4ybUd25SfvfsnUS9VBG8YfuZcfFLNG3zm2YfKuKPBUQH46bZdVDtTHpaWv5Q6bWuD",
  "key6": "2EpEqFPyz16aN3B6jRW2y4tkZze8nDj1CfgrfRqcfhJmjK1jL3EWc2rHwVRVrQ3TKpwbyhAnoUtKcJi6Zvw2hUUX",
  "key7": "5N2nf7j7irsYpRCZXUEWC8hgdba9JiqCcyd2gcVtiWe5YtgVisJ8kjDfNmqTzCrDr23RxkK6y7Av4akyjfu69Ni5",
  "key8": "2hfcgWukLtj79tLXmpZqc8W4h1oMFVFfBfPuuKEM7QafSZJ6rqh4WJJZLvrs3DE6ijGTponP93pL3pVDDeGBfRv8",
  "key9": "4EDdfKUJWkjpSAtjSSywpcmabHyPEuQ3s6h3yPq77ZsMMKZwzjQpieJcnHwwXgA6nmuXLtwQBfAP2asW2scwuQTc",
  "key10": "2BhP9Dr7Niizvst9YNy7DSBTdqXvksGd7aHkVWWCdXcJy6e66s9sJU5kZrbe9NsardcQfw3a47nKBCXJ2tB2dpt9",
  "key11": "4XBgYkfHN9qASJpWPz6Vf9kjTVbqcHtzkSexLYg93rwjkgVheLsZjX6vfjzZopKwcxnjXusi6Lt7cYJHB7D977EV",
  "key12": "MAZLxoM1uoD1P9qfeF15Y7zPTHCwQVYS4ApyUTYHmgXwUySQ3qWxyovtiqz7nEDdWELEaJSoGY1CAy2TUa5GdY9",
  "key13": "3rsDMo2bYnaXmUR92F4X2qVPdRztHRinWccSamTEizLLPZgZN4NjwyXUXsf2iBxc4Us2qPPp72DdafwKqFCUWohK",
  "key14": "5gp97JWZcsrT9YbSdBuDcNJPa4EgJCM6dttkeXMAs5U5k7FZu2ER4yw5pRA8WUc3sL24UFJFhgNYokDXxXSM7dEF",
  "key15": "4QJ36vhqB7o6EaaxTxKAVAADdWpA2rwFERRmLYupqX2h1oPbULywaKgUqCu4eAz6LkRnkHCt9m2hXv6zAADTsvKU",
  "key16": "5JbU6j1cmMoW4GbSowaRjD324spqcKo6gNHDNxCkAatuepziocjbzPjytYGCpFjkKDncocC3AXmWv4bfdDDTEPc3",
  "key17": "2bRNjXioPW3xLvWQEMY68JMs6TzTGtcoKDHbuCxuXPzfKQo4yp4hB4sLasb839r7hEKUkVx8PVG7sEWTFgJiDi1u",
  "key18": "5Azkbjf4gFKypDd28wBpxDqVPYuaH4WHvWLbadjWuVZNMX39DNAxnJKLP1X9XANCd6Q5wxcwGfDEC1hsvytFcWkM",
  "key19": "RuvpTeLYt3WkfEmobt4TX6BnVtrwD4aUEZxcosDiasGDBtZqBze6WPSePVbdVCYKT849b74U7KR49FvY5j9FM6n",
  "key20": "3LfyTnTb7rbjmYckgc5nNXRknMPiHVGuc9DQUew5KsVexmpKzGgQ8PjUkYJ8vp8kZw8eUZRXE9tVtoNRshdJofRT",
  "key21": "mpsH2By9vMYBXHRCyGDxdTWmEhdyPMiLV4L2TSqoKRP4mdKJephGjJmEp3vsbrthsgasajCXMFYEBoXaUN9sffy",
  "key22": "2Q3nYqBuZprdELC5Qgn4dp7Ab3c5D9oNwX34PMULF7jeQLMgxhbpu7T4Kc6Kk7LMDjsFxJYWR7fyTbHKiXNL5zXm",
  "key23": "4a21GpVZWKacxcR8Ghok81sgnHyu8ZbrfEegauByZjfbgSTF1N5ydMdPMz8PWNXobqxU4p4wcANJmwwFKMwdSVa7",
  "key24": "5TKnEB9X8Av5Yf6s8uuyf9qpvof8q2Y8e55FtvzgEUVMGju8cfambS4NAErD83kvCiwAvbsTDDcPH1vtdjzYMVQ9",
  "key25": "2ZDvkqGkCn66sgVDCmUc9jmcgTKHcpp8SAN3zkeN8xWDjhqwiyuSPY6rey7Gnu7nmyKZuNVzwYaCMgX1RsCzooLe",
  "key26": "kR7Md3JJnj5YEJLvoY9KeWxm5Q5bXNTt5mpM47Wb4YZi941hC1sR6XYgGGnetn33MonDjkrvchViuFx4dKNEkg3",
  "key27": "3ShwYismz3GMmHhqvEUUuXMbpWVjQRnNoFWdJYGPpQtA4BKE1yZyhpy3iiz9zc14x7qw89m7HMCLkKDXAFzQmt9J",
  "key28": "379YYvQjjnwqUeFgAoihvxpCKXe2xe47feNGHUXzXGKgNA4f3gXbWpgXm4sdpXzuT6wVithoAooGGqEMgbHJvTHk",
  "key29": "3BzADgxxNekg6zoxkF26XC92aS3MTjPA64bAbDBEALwQ3VDTmbnyPcLTDdsmugqpzdFk8bajqxyNc2kNcjxdvs5j",
  "key30": "5hc983JpJsJZmkka5s5VFaZE8dF46QD5ocnDtSV4PthSkBsMEYWybLnE7kFqJturiLQvgjBY7nR2H5oKqKreztgo",
  "key31": "XiLYJD8yZrocKRD1rUnK63vSbBHTNu5P7xJxqHMFD69iqYQVpRyTSnUiYH52kzFPFuLrcxirnPAg2XN1rDmR1Qc",
  "key32": "2LexcpYKSiyJJ1PmUYRun4QscSkasHYCdFVF8tfgCi98PAi6rtsDDDx22C74CJpi3GW7FfjWNxvKph1AA3Ma2AwU",
  "key33": "5jJhZ34Jy7EZvRfFXs2387itBdDJK8Vxd8P2jWnQdonkyvRmDURPQcgkE2F5baYonTiJUmZ12ri5fLyTnbY3gKXT"
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
