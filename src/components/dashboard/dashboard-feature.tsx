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
    "5GWVDqPCbMo9YCRPLCwdFEgXhFwsqxL1HD53hKJG7Q3XeFqFFy5aya3rHemuedyhz77nMLUuRtatYL93CNEwT612"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkVB3Mu6TFks4MHGYVLbDJnPm6toyX3tUkuwqHtoznHBjZcfMHQrUMMESGLZejMvbNkKefiZZ8stsWxxoRfF1d3",
  "key1": "2Veh5BERvhrW5rHaYWQ3ykW3AusM1jkvaWRyjJRr3KhbJ5TRh1XrEZmwYe89Qpycup83eVowccdd3C3mmwdAqHhZ",
  "key2": "3E1JZvRjYgQ47jca7q3SuGiLmoriXU2NWCek5kz2htF8Asfj7orDB5DsShTmD1od6jfRgnq5tjvzpsGuhruWYuzT",
  "key3": "5BP8G4MYTEYykurXGi2yZTWcqLTarY7X2o5Wz4kQNJZcKQcupcjTsvC9SimZqMoaJzH6hRX8t6VnEyfjPuc4FKDa",
  "key4": "2ivi1ywrgB3xkfebUpR5ybtdzgfb8t9yk7LKnwPrXJ6gbv8bJzu2Xft51fzALBj58PXZpLXNf2QUxmnb1sTEQJtJ",
  "key5": "JNctSJnnmnTXVdZryhUVwzkRz5wY19c6zz295E1628fFDJ1QBF1C58ubVzAajufCqfFo6iDUx2U7KdRkQ7f3MjY",
  "key6": "2Y4AASM9Q6gbRFRbKPiCbMFtYb3rfVfFwuMdzaExNY73dHLXgR9Cy8Vqse9PVKzrx8mvGKxujGfEhubCmmD4PrJv",
  "key7": "4aUwL8tAsVccXhkhphKUHCmbh6UaFnfCzZ8o5QaTaBZprn5vuJMbtQTMZzQaFQRLczcjAu9GzHcunv6AqCk2eY4q",
  "key8": "2uLxwmKuZ1iJdA3yyu4ddsmi3b16KJnszspkhJzjBiE9Q3yf6ugQxaCDuzVq7awHUA6P7WwVBaB8uCs1wQ9ABacY",
  "key9": "4noZnuRQ13XKXCfKGk9Kf8SKW1ggf2WT2W6CQYR475FaZmhqGqnfP4XqQEUQHDTapy45Ex3SCcL5M4mPKWCron2j",
  "key10": "vx3fjq7yYtsAvypvxJjVbJADAxZZJ9VgVHqrbUsHGQTQKhA41KRtMNThZzqPsryWp5ZnJjTYuejYLq3USPgCnfw",
  "key11": "2uPdT8W7Dc58JGYkEf7arpupJScQNGbXmjqNZ4T7HapucA6SS4U4ZrJR2JtbSCM5NxKhF4BBxWZa3ojm63pNKmxg",
  "key12": "2ErE4DMcuwVJqmjGM8bE4mZoT2U55pX4cnZ9azwkr46KiCYFzDX5ZHQ3evwKkMn56PHjGydqzDyFHj3XdiZUqdXX",
  "key13": "4uMCbFVjX8WaFinq3LhvFc1BjpGJD2RX4ZjiDXSM1ffL1nwbKzyn7hJMSPtd5AEAUVC3dxVuPuw3jjNJL3RjevQs",
  "key14": "uht2qFZt5yDTpx7rds6S3bJJrJt18UrmWuCxV5kY7y5WYHsBbYR1vqC5AZ6p7uvadj2HHBT2u3jqdK5MnAmE7d9",
  "key15": "4i4VoAP5N6kN2qokVGUpB1h3Y9WatSgec4ZDDHoJ6CL2SdKWH9FA9aZCLLCmvQxgTLCXbDtWzLjcACf4qTho7jrQ",
  "key16": "UheQXfhRTHo6VARvXCFMdexmQzwPENvxbdhPPgUtJeaiBx8ZH5438aL41oeXJg3VXPDrmmqbjBCeGLpuihVrBw5",
  "key17": "Fz8SbafCLk4YABCof2MNXyj8o7dCpM3QkMM5XgR5f1QGbLQnWcvVg6dFQoZKsah4i2hHVrzStDubhg6ftecWBfD",
  "key18": "3MceXn9Ua6FYEGVv29yPLm8EGuzv4YFD2mkv8XuooT58LeX7Ry6Y43yh3KqLhv7nQNkrvVXrNgN43XdfheEAZmJW",
  "key19": "3e8YxSC1Gs3w4m5c71qpgqAQpTgpW6PfpnShqMTUsrUYDrLN8shTrnsNjprUb3NKvVihNetEb2LUf5U1Wd8QEf7b",
  "key20": "c6fdFKcFJkXMGMWk6jkeJrqEmeCYs72KTWBWGFoBXo1RxGh8UiHQfHUtq21b59yuZWxEVifTMiMgjJE1cGEhFXM",
  "key21": "2jGYtLenStVYEr6hLuQDCcqArLvBDyWWZV7tRFtoXncc7HzzG5cmPVnMXj7A5M7X2WPkyV9c43rhsw7ggL2V325j",
  "key22": "vhoBRGFtoWo8MYL96d93RqCJVMB3aqiy4V78aaJqPauLrGcx9kcBScAYZYtyjFL5AuZj7Wv9pBY5sPPKkYowxT9",
  "key23": "UvzSwhdw3YEPhono39UTrkQTNwv8hCNNezRgPH8RmQMqdVjifx9rfUGx2bJfeMWnfKnmTS1mQDKhxnhPq5RMDdi",
  "key24": "DPSBpxoPmp2krbPKU7kWWpPAcmuJwvxSJrbuWJFVmu28fzDTHR69UYTv5cae4wCJ1R3rbZeEfgDcHHMBfYSGZ9W",
  "key25": "4kXdR7n5E5M8krqkjiHg7nJZ4wqxx9jgEEZR8Ss7BKNmYgZkJfFLnqYNBzfJWqQQ1uEbWajdGmds9WECD7Xh6kVF",
  "key26": "4aHqX2HJcCfLoZGxKcEkMEJRKSVU7U7cLMsbyMrSiDsFMdCPTBKgRZP7trCqiRaykaUrZF5RrmG4e6sbrcFANGYP",
  "key27": "3FqC19qVQhEMGQCJ8hPhvSPSPHYJ1bNvcD4YNwYHg17bHPQsqMgWzpwcBxt7aYv27WSgX3iMfpp8FvWczTpDRjGg",
  "key28": "58YRddL4ZCE4LUQcu8wP4uVqne3A3iA1sGvWvAZ7GyhUs5ApPKQn5CrjJiS52kC9CQG5nTCo5qyBez8qr4rfq3GJ",
  "key29": "45hb2WvXvQUyCRvZHhn6sdEcs15Q4G5QgL4aehFW5h4KEn6RPvXrvVxktGn59F1VGw7dYd2SxhsqL9Zfau6SGzH7",
  "key30": "2kMkPVV7tyeHxf4LzaRo7XzTszQxHHrEyHieo49xnXdn44GferBoJ4Lj9PaSoCej4WtFFhWNwLPfwqf4UBNCAxKH",
  "key31": "4eWunQ4WkBFTUxF3GUb3UA8J5u2BJsGPgG33RNUC8EYo99Dm3fM5iyBwwGhEc8eaqsC4PT8zGxoXV6znvuhxqghy",
  "key32": "41WfWZ2QWt5J9kRjBwx5uBs1GuJdKoC3iMFevdLPmENJ5m9ufkyADuayEmTzDUEQqhTxxLwEk9hZDTDJZqToMtcX",
  "key33": "4pYF5HkjwiBqUeH3Q3pxtXuBPAkBgNXUwU4dN5wteqW5pjCnsJAUK2KGP7DjW7c2NWbhFCXLKgAoxhEmmUts2WCV",
  "key34": "J1m7PTwvUY3CFDD1GPmTJZJMAoYvTHrVC4CKtYQTrcQZcuiaKpEDXznenyEt1gzX75UYqDk37X1M66yfVubyKYb",
  "key35": "3A4ncrKbLgjJPGbwAQ2QcRVk3VDjNbwsXreAGVPqqA7BxUfFrWuSMvPyRT25xSLv822g4JNWU8v9CtRNxx65EMGq",
  "key36": "3AcbUyLD2RBUYQAdnvksg4VXN8Bu3RSYYcHogZq7Hz4HHr9VFZcgoSZQqNqAgwL25cHpCGFfuTrmpqLUJYTGVuJW",
  "key37": "3bUHfpfxyroFumaNXSa92Rr2CUdPfWbpBcUQ9nJ8eAcmGiXJMstRtdKK8Pnj1acAUpnFgbrktgmU2g3EFmAFmsQx",
  "key38": "7q8zVXZWFZx6t26KPJ2vCxVqQwLDYHBLQs66dkS8NFca8giSonhF98Ac7jBYZgdygjWsF32EJQ1SfsaQodBSfTB"
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
