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
    "2diHtr6E4WhyxWNPL5qxksxwgCS6giQ71FiZrPkJyiV9jgrtgnJPSMgkRcZMzTEJcY8PZ3YwbLxap9fVPr9E7ANk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SR3shZDrh8xU5WdEF5RpBP8dARJZzws8SsD1bGNakE9khHKcisVZLT53ciDWFo2L3aNQ3JX8HDQeySRNnFX7fxX",
  "key1": "4gwsepodwXCHWnVmk2CBUP81pdN3W1bPwGHxMaRzN1sr6atE6Uhgder5qxWgr5MZ3tYV4q3Yu7ggziKHMhKotopx",
  "key2": "3FqUC3T84i85ipJPd35w52qdi8qXAWFn68U3kc2g6ntBex4skXFCCPmS66gjxz3sZPUgNLpsVMxM7q7m1bNSUrus",
  "key3": "2UNd8658buiqYpLqTppMWZ3mGj4GNwYBWhzijbooNAhmF8VbyMbTgb3QqZ71cX6bj6PeRv9hnYwFmPadbmPBNqH6",
  "key4": "5g49TaGMFR8b8ZALe62RGRSYXtgZbuZ4vKtqxe1BymuCWJjxFz9Lf3KCGaGA9PPvvkryQsqvZ8PYDnp2ffrqB6z5",
  "key5": "ebLf6L1sPKdVwfoSgQrtbHK1EYqKXFdDz9bm6qAx5SqPTBUrv3fZuWUxcLeSsJtq3MP3AkopnF1pBw8eBB41JNR",
  "key6": "3snzE1P6GvED1sn6jS8DGRCNne9hGRaJCx21o6LRDjmzfVTJPfNzuyoTFn5WYtVoT7gxM6xvNr6ZaVoXvLuBHsgr",
  "key7": "3Uq7QGTmEuHLtWCJxo4B3MxC1en9yEWixZ2upj8tyVKXz1YVQXspHMtyRrstibm88kBhAtcqyGXmvutu4iRucwTG",
  "key8": "3PZahEBjBYuZU7Pdk725UXw563zsXQu1zkuGWDA8Z14sP6uhdEpdxbZtNmY6y3JJhKQMX4NdYwKPhjABFNXEKJWP",
  "key9": "3fESKH7k9NUhW9RBoF1XTMUGmEpqARUq4HXECTzmBftekneq9QeC4sKWL1T4EK7DqfXrrUVdt2W5ZDzGuucDS5E2",
  "key10": "s4WXAH3qJGF88KhKscHx3fFtxSiuLgeDet8nrVkw8B9JMfdr6PAvi5tdqqbgjoDR5VGiS8Qw9n9pJmv9n3hreaC",
  "key11": "DKQpCAPyyXfqRTR1Ep2P8eh4WPMkqSD6MDxrYMzdWqvZ3suDPAkFjss5Jnsv9pF2HzTeUdY7o3fXaCYkWxfkt9Z",
  "key12": "1jNX29E7FQfe1BjFZb5Lep9i8KNjg3bfXoZc2idVekGQkNBJHKgdZ8XZYuoVNnSs1wYYuwaPL79iAxx2F3aisVJ",
  "key13": "2mo81UbsNGQ9dnFbCaiYoyWR4uFDZk4UbCrcoNqYCQVaXVx5DHLPcq7hVfqc48WWeU9LZETtA3mC8yhT8cfSir3z",
  "key14": "3VLm8uhTzKeeix36YXthQE7kDLzH4tYdjnbySr4E2sXVCGH5igk4TnoGBUxrLqkt1HuD8CmCevQC2YZiQ8D28Nyg",
  "key15": "4zxPdqV3kLTzHu7CfauNrCMuTG4s78qkGP7WWxkVV7Jr713X2G7bbh14htyYwnUeGYGLe8woaKJfRsh4fAE2FsHd",
  "key16": "3JpDT1NHKMkRhwzbbKtMfxJzGTRUizgfrMQPiQttxuwnd19vQ9zGXSc6QPpW7x33DcnHJmDZH1VMWg11fFu1busb",
  "key17": "47vH49YwHKv5Bftr7tpBxtSq24at6QbPberK8iM8U45xHkVgRC7wbjtLUBwL5KtwafQznc7EFmgkYmR1vikHjMrk",
  "key18": "CwNQXqmirr7sgdac1VBWTMKPD5LYqRqS9tFQ3VhFAF55oCT3my1Z8Us74EzfrJeShCW6wDaP8SdeJCFzQP5Jdjb",
  "key19": "a59FaxXonTcbv9wqhaMzGq9YYJ7m6g8yKr7qmAACfTSG3GyuSJVjwd8aSNkXCPmzzX57DJdym7EcfiTmZ9uK9SF",
  "key20": "3yEJjkdf2w7R3UVZdQW6LuMsLHTo6Dq8ZEv1CbZMXdL5ULBaGb6P3yLBXDyT6tKUetwgjcTQ7GwLzw6DA7PXvZVY",
  "key21": "3ui1mhesxYqCFUZWTxRF7cBGKq3z9jyXGfmNLfaBRso1ac8vY5YtJX27wkTvb3SrejVgahTURTnuQPQKQbMUetnZ",
  "key22": "3LKdBLWBG6JaJ2o6wJjGHEThnKHxszvAtqSsLvJG7mMh59wPfKeKjyGbiozUoUgPhdZa4GbZJ1iM2bnfYKkEmXGg",
  "key23": "5rzpXf8DT5AvJD2VMqhDwt4tzEhNJBQWFd25CxEjHtF9yjyx31ktWqVnJxocDBqv9hhxE1SDwTGwfUDubs692Bin",
  "key24": "5vZff1FW65XwC8Dcojojw57mP4C3r56KuVW9rybPv47jYGpS5M4eLD8tNXPMRv7efPMX55hYLrgsvec26zDDPKMw",
  "key25": "4s8Tp2So367RGFXT2tgscW2YN4jpCeJkfU3bY7DJpBw1ERtXirkyVMY8WrbtuRUgUbtyeJFngCuWsSjmhpA9i6fy",
  "key26": "5HZrrRnpekzTfXdtbBPNq9CuG1XNr6hcCKMVjfxJdcpJkH76PvG3Q5sAFGAZndGwMe8NJYgB5wYxrEjDyhGxUXsa",
  "key27": "4xujua6CPYqpZPKWTZHBxpzkpNXawQR7GhPmUPbX4qfmZJmQVATeFuxbHVZJ9Wn8TjYbFXVuLiHUfcF2Jea4V3JN",
  "key28": "56Fsb5ktixmDVqqJmeNC59ixqjfPMgNXV8aFaFVnwVtgUu4JFjhVwiXed6pUgbftbAAH4uzA6v55qpxpR5yQAK3q",
  "key29": "4eACzU3VDbW4txXWyZK4TTFNUNXPNikcXxb8HzvtrYaVbHGNLCiPXYvQZvnNoBw9YYsYS5LEcMZ5yFmzE2KbwBor",
  "key30": "Q526qqYb8KBXSnVeAo8fgmLxY3nHBAqowkAUk1NQAtdaB2EkTrQjTYvaZCcRU7LnXLivS3rEBfSyYUL6kxvuJHw",
  "key31": "48QtM4D3vnaUC8PYjr4zmVoRU4Y1jodWUnnA4Fp2GDVanggL85r1YawUnx2Ph463RJvj6PrMRpMLEqL3HPttXK8C",
  "key32": "3Jh3EWk11LX7UN9B2VKYFx1pfzkYQXSkeytSmXXYDbKtkeGirveAjr4Z9Er2PSAVAuBH95XJjgbtb7sbAAtTsRPV",
  "key33": "4jQdYpVB7NUxdwjqSBZXHVTyyzjFQVSZo87Ki86rJAoRne4SKgvpNSeeVQHw8mrnNG6HwUAwBxqTpZiiKREVsFzt",
  "key34": "4YayRLKLXaz7n2ZC2y21bg9fg4y9SPrdPvLhz24hM89gjN3v8ZtGjzhy5DYiJ8Gkt6AaAed4no6Tam2g5csxTCJU",
  "key35": "5kmFLgSpFnrPsndv9iCJVzV2J6kuuiE4MWSVZJPwHfFXLSW5TVEV73fmGrjbfxYF7VinkmoyLtaVRoQkydNx5To7",
  "key36": "3xdpAt3e5uexSSBDiJut3eiCHxxhEFjrfeRhTBHu7WdrHEgj8tEeErv3jUbWEpWKbkrPdaYtgMsKhyZc6wW9RDDh",
  "key37": "22rfxkWv6kX4JeMVphBsiCvVoJxGfxSp4oVzMPmkuSQ7zJQm1qt5XinT4QEqNkDiuMgEFm2Fqa8hL7oDuAxVv1zj",
  "key38": "5ZjvvQYwcbJWrJqVF1jTNujGs4GVD6Zbb1ZAbqjguv9osnrtnZTtsyTgfMg26vAyn7kEDwzjLtycGGZkq8TfKQzs",
  "key39": "3kv9oqxbNEusKrSs5NRnWjcxhBC1UeYYZ5fNjxF87xqSdFPjc2CRm6uEQh5ce3KrFwRew2xXkmxswBX1HKdqjvQa",
  "key40": "osNSggzcmjBugcSB73e6jZRub68AAiWUKRYvjCYmJL567ZJ3i6to1Ge7giwUuDuPfnNVBT4pB1CBUhqgVSkbFmj",
  "key41": "5hagUta7JNy8vxHJ7ypWU3yf9EVUvm9ZcieHZPZod1ufMCgT5DGRTZoxDQ8Zt996npCjstTekcTSs3R3bQCQFLuG",
  "key42": "2ak6NmZHkdZdQ9EHvF8x54CJQb26QJoWMJbuZSE7gxvuQT1NEA6vmJJNuiDnifLeQ26RVmULBxJwhb8yWwpAPWjd",
  "key43": "5J7Smx2dfLx9zL4HSAWJBB1Pbu1cZJ4nH81iDjDVm4nT7vJTDmeqYeKQk2HnjZcTutmRCWhMBiHd4kb8GKqkdbGM",
  "key44": "5TQ5JAtP9VyVEtCxe9zUFKhvE5e9M1nTAV7m4CEFUAqArrMJitW9oJG2v7BZjWewiFpf45vza7h2kpwGtQDFLWNh",
  "key45": "4RtYxjFeFH9our2S1mp2Ddk2mQc73abezfLfnMFwtRCkjCFqoiz2USKkPyzAutnPAuE7tHQZr6iQsjzKMUGVn4XQ",
  "key46": "61Dtp8uTF45xhtsFNcDd99MR87abeyZmuWdr6Kg6y9EdaW2uhGTKcFSiDASKksLUTxNKkprDH1G3CdbRL21kaTDF",
  "key47": "3JdXFsNTNVzpx3FcPCyLKMYBcBqeY5wVaAUd6FrcUP6EHucA1LidLXjPJ8uMbjZEQMjPfYt52v6HpfR7Bo6AkSTu"
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
