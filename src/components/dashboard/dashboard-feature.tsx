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
    "5KrWSdXrHUyvGgbWEu4JVWJ4saZrNKNSczkHELcVGi5AwDN8CDEfKoxVv1RYm33Ef4emKAcPBgQBrb3VAnjEAzoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSk3ohSRicxQiTHaBdrkEdqnWAPewNDyp4aPsWUUHrUo5jpoqZ53vZmybd2Z692GLZSU8bs12XVtkFQ1kDdUJjd",
  "key1": "vjY5CsWtcwsBEKdW4KYXk48FhpnndwzPBVsFUkmNb7WJRCNSKH6wXJaUJPgKfTMcDJcGq1C3EdUD2cDETbxeJc4",
  "key2": "3PbTtebLPWmNfrH5YjRd7FGLD4JfSP3ULzVvM4whk6brUit1PYoGfdZKAUhXCPx4kPf8UuGLxqGPdhFUnvqmfMwC",
  "key3": "2Lrpqxp8UoAqiXEZUDawhTfT8HtCQhkQFH97eBH29dU3xvmrZg6hJA6QXkbb4B1xYxrWrg8D85D9bpoqK1ZGYZ3r",
  "key4": "59BNNgu3Uq3b14hi8fdy1LYkaje74KeQy3fFXHS9wp89SPfmU7CxM423kLDdX77JctBterpPfjvxvfo5gu9MXugs",
  "key5": "3QT5GEkpukoLT5f7zLE2UwwbRCi5nGKi7ksoBPWHoAkv9UCaXus3xighUsWbBCpdMEFGdtjdkZsrLm5LxqpG1Arq",
  "key6": "46qQiv471NQkk4JPxymCev3WytUc3ZT54dTdkikz3ujFLZVTT72HPZY5qVgpeGyQyGVydUFXpoQgV5tobQidDgeP",
  "key7": "5cQ68DtomABMN3TC5JNn19ADSRcWSjgKxB5Kn4xzF9Bu6VwBHCiseWQcyzof3NRJ2XZVmE1cWv6gqhhDrxPYGK31",
  "key8": "4aTturHk2T5ZGcq1B7sPg78Wk12vNv73t7UC1DFkCW6zxWLrbx7qfMh8wVZFnYQxYB7S94LNGwdfh6k26Pw8wZU8",
  "key9": "qwhcKEmLepyJyxbV9qYhfjwDw41uBeBKkCB9353ymrGwm7MyjnnSCeTEkQENjhisFnZC2hPSqQ2u8FLE6BP8oXw",
  "key10": "Af6uLC8A8tBCuCrf4XrWVZX7sTGANPpfwGVh3pmZfdnSAGRgYnqLnA1j54rFyXSYQyvscyxnnc1SZF3NVuziDaB",
  "key11": "2iJkUM3VMnTKxsDibC3fsnMJuhwRD33cdQQdAo4eGwWF3pbqWHfw6Vg6sbaHCSC5iBzbvnqxEtG97WjewA1Zw4ga",
  "key12": "48Fz4c1sjprWJsxt6aC4b2Abj4u2jTrbARdPekKhmqR8BWi1va7gr9mvFUjSGnxtmhctqrYK4i8M6wHY78RRaKot",
  "key13": "3bc9aDFeMrqKG2wrNkK4WhEsZJ7Uqc3uJAiHo4wNcbhMXE8yfu41YLSEDPvqRZskJTcNLBm5KKDt28XjEusbee38",
  "key14": "soV9cjN9tv2E3Z7ijZJzjgC7ad6j5jVfbt1AucfDg9JXrq63wvKvv3RGswHJUsYyV89w3omEsFt9EDQ6cuqzyTJ",
  "key15": "3K94RJavoPndCXGCe4GvRAHN9iKkASSgeYiKip25Hbiq2mDbTXHxWYKqA1BemxswLnKehRuPotFi7ZqjUjErE6rd",
  "key16": "5QUYG4DN9dMvB4dMbem1MszG1SaC8b5Jfut34DhDaV9MN5TpWaGoPVzdkXZPiDm5rXVHvfCezpLm4V5GuSpjkuic",
  "key17": "5QChXey4ffTB7HiZNaQDH7pT1LN52yvy5Pf1RaMEuJKiYRzdcPVp4kNvD473znPeVJeniNgNukJNsBvyhCfYLAgy",
  "key18": "oRw8jrogvsu7aoA6LPKajbAkDVRUNvRt3HSfKCMv8jMZCFD4KLiCVcrJf1VPtw9P9rGPH54HxQBueX32XjeE2Kh",
  "key19": "4ScCHbNuDy7JhUEkWjWPgXSpVn66eXtEmnipSMEk5D27PNj2NETwwNV3tCrMJWKbtKHtQJzBNuYLeVJE4ZwdTYQw",
  "key20": "2YYuZ4caFoUPf3x5i496mCofDEtRMrpJLsUqTM4uyfhK2LHREQSMMdZiEJJWZNAdxRN7uuLkes5xnjr1Jd8hQmAv",
  "key21": "4eChVWs46ez22YL4SHVs7Eu245maUKQx2o8me3SmWk8jgiFZpropC8unWh7A1RiUaPcWhaG1aWhh7ugdAHiD6bi7",
  "key22": "YRZjent2kGs64RHfCikjJKNbsHkZEpwZcHa1VRCG5KmSqPm9td3DxAVLDtXTZnHCqed4cNxybKm7EGeXKRdWPsr",
  "key23": "5DnpqkZkvtGPYjX7DApMMfiJYFtn7dwfYoSCJih9dwuqXebFo1UZUFuiwCcd8BzEYeFvq78sBmYPnHMVaZavYCiG",
  "key24": "U1nZqkuwmybnE7M2VxLzk5EysMidTUUUkxH8MeKWdRCrqCC64jTGWE5DJ4HREPwrt2Sgabe7hsg4UNpX6KJjSSQ",
  "key25": "3EPUFwjMt49HtxokGPHjvs3JqfhSxVPukcFAXUmHJaXGEoKJJ8FwKD87Sbpy4F21jC7ekLSfaYNKuTZGhD3ijrSW",
  "key26": "5hvja71JziJCBqozDPSAPRmTD6FRXQNdrNrQwQNx5AvyzFKiKTzNiXLa1mgvn46zfvutDbeapFT4F6nc9kcgnbCK",
  "key27": "26zvB4D5o6tyfc6oczX83Rub5TRUxQuBgwRK9Fv468LPZSwbzL8FePKRqdXK7SGjxHmgJu6JySiPC22Nu6ZwKzcb",
  "key28": "2xyyMr5irrGBu5QPBxbFHGs2E72gsPwt879Hg4YmgFEsRyNBZjx3Xm92ghCsTPBoYbnW87LpQ7uLtK9wXBg6v1UL"
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
