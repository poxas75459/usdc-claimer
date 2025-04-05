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
    "3qi6XssgSFjKzWGRpibzmA2y2LcZDtQ16FDhPmkzsAFBMKKDdeLoNNT6hpipGCgYcc7piuB3ueDs7iF6GQ5uzfNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eProCqHZkZMC9BNwR84EZSWkviixwQFfWeJpafwiRzhhDmEBGCvCVypiekBRCSCiSgHkakTCpQaL1bhDynNcFcJ",
  "key1": "23JhnkAXgJq9nutRpV6vUDaWYV2gPg9cKAhsUPzTPUR6iqP1T1HHsh6CEN1LAqYMETyuuFCgGtqXCBC3JX9tZL5J",
  "key2": "3LhfPoTurFC3KqMGPTvN9ViHXJTJMygHM4wJTRarYAYuEu8ZbMZvDWHLhY9Fp5dpNpdfFJDuns4zb3MhwKZwXM2c",
  "key3": "5rGTCqo7bZBQKxiauazxhE5NtqTKC7KMTyLuZi49Z2c2Fq5G8sT94veDyDNAfyqSN738NLqbB8r9a9FWiJz4xqQP",
  "key4": "5Stz1vm6SBPQW48FUPviUCWV1kGBnBAW487pQUK3fbcsb8WaD9V1jRdkMVGb3WZo9e3wAjbbhJ883ohr7aEEx5rE",
  "key5": "4a1taFhNRJkL7PKf92xNZwgsz3oFTH3QvsTt6yJJ8eeF5GDNMnQwL2ZJDYYyvKzru3tfv6HKiR4RKKNw1CfUwSwx",
  "key6": "5WeQLveRVXEANPMjqVFETA2ZrWTLMY8aXgLkC2KdzxJeEdURpX6vYeUD7etjdXnN8gf71MfJV7LeVFVbqHVorNfP",
  "key7": "3xmiCsp7QNJJNxoXtkKHnndu5QkgTpYBtGWvp4EjTrjBTAHTCVqFNu2H6h6HvavZrmxtWcnjUSAkBJ9EwbsFNzBp",
  "key8": "5CryFExG2kEg7Pmdhm5Kh3MD5WVEJeSwPdB1SYhN32cVtQfrfyLWND1wZBgWEHXRjGWm7hZsfJaCppuqhttj392M",
  "key9": "3ina3sGZgnzaWXHexh62L2v1faADFtXupJbYzuA6b4LGez3pZJUrP7To2ySvUEAJxPaG61H3wwzhEB4pmwoWEyny",
  "key10": "4mfHT26fyMvAYV17do1iSPFLJEuKE5fXruS669EKabTxDBGi6SYBpTTv4gwAmzn38b7bNUWS2LZhMwfKhySBAbsf",
  "key11": "4UozN1AFCNTjvmRc7ARTzUsf4rDYR5QikVPhoCjiAJcBdNU26sBmyMEB1gWzzkxZQtZmS7cj6pymyjSa7VXS1oLn",
  "key12": "3Rt11J12b25Lp6S5aKzzkHi1S666eyNmMMVDkDdLsz6rTZx3qihiH1rLEYDpP7Pu8qdFh3C7c3YdQR6kQJK5h3av",
  "key13": "3rG1TEgJbBBYPeYM14Xb3mdK6YC4cce6jC8c4ccVr6pkMwbpjgT2joK7PcsSzEXHSAquAgnD7zBJ8cn7SN1Jdbnu",
  "key14": "ZdF1bhZpE4euP8Jn7C7b3G3oPnHKZZdLD6kfgHoqK8eZLU83A1rUBpfK5TddRWjKxpvq6xa1taGi22nfvtPkVHo",
  "key15": "xP6MFJozSQjKnkBRPdEaAEzGYEd4FU1auGMHkLU5FQ2wM5ceSb2HpvyVxQxV9ZfeawBMbKu3d3mjT2vjF7AKbhP",
  "key16": "28QjKbo2T2JchFkLLKTEAze5odmUv6Ewq9ipHWgL5VFDHiVALYFaDrwtqZwNvxeY4oJh4zBJchDHYZH6u8mEYi3y",
  "key17": "4Paf6RmGfLQTMJ13E3P2juBoJ4bgX5n4HscgW7BGdQTh5JHcwnL2KPC5qxFZhBdpfRj4aFpNXkPFhCeF82fjvp5J",
  "key18": "2pjfRixuhArcWbPSQZJ3CbbcPZDka8MooR9NCouWYPydZ5nSwTDm4QzXopnKm3EjLmQNeSkQ9qBWnkYgBkwSFZJB",
  "key19": "4zn93jQW2amMZkJQwyKp53jrqZt6YXBjM6K2UNBVYnC7u6sZCjpm4m2gNdieX23vKR9o5xPouajXiEuSHyqeL5KQ",
  "key20": "4ckUc2WmmXMELyVQGJiqcYd4VdZs26A5y44VFMTJFXUFzq4EBRFcXTZ2tm6WoJzHMe39xPLLneW6hcAdrev71xUB",
  "key21": "3YhEfH77Nw8wpGZ9ATytQHAwekQsNXktL1TKpRjKSWkkssyf22JZMTSqtgc2jmPt5HEwfYHaMZr2R9sgesL1FWV",
  "key22": "26CUDVEdU3W7s6aW9KiE63Skqj6xEi7bHr3FRL1dXbZqzrn18zvhjeJhGHwnqLBuwZx8hJy56SEUwvjsGHATiFij",
  "key23": "dKAhJn6N18Q5L3WGA65GL7jr6e65afehGFGjopSzXndAfiLJThb58yvXfvNkLKtqq2bF4MrMvByg4f4QWbxSuyq",
  "key24": "2qmkhD8RuCTrcoSy3JPQYB9zNBPTd5BWdCKfGDrKzPF7k9nsygrSfuFWM5rtSvVVLnfvxQXU3wgCxkY4iYSF7RZq",
  "key25": "2ZvnSuewKi2wM1pBU7MzG71LuADah9W4vrHRpC6ANiV8cGhhfZw2f1mAWXrfz1eid9iGyARDhHMgNLWD84vZhHqA",
  "key26": "3sHzFoHPwFJSTyvp1f529SW4qrsJthHJ4j3WvPhwbLe68GvmEoZPhhUhUoS4rEZF5zL31zNnqxZnPegcrzcQbmXW",
  "key27": "kJNBjC9htQrkdD7n1PyKyEsnVSTegNqJx4MB8UBtnBW21zPFFqHyf8VavrK1wNkkKr1YabMgfURBdv9m3v6up6G",
  "key28": "4iTSyhNYfkLiuXsuskahvgw2NqywBAbv8McCHZd47XyZ3oyaeTM5SWu1B5ArSzwjyUbEybmii6JDKd8Ryv1FVMbW",
  "key29": "386bsCaqs48pd2wT7QdvB4FA5fUBptxnm1xcBzNHsVQ1wBQro36btos6pUf7det56n4iMGmUB4aPfYdr3WNj8vLn",
  "key30": "5sER1H9MyEaZSoWh6bTetiuhYkRRzyK84ApBMmXTgvk5FA6FC9qAAhAZWRQeaT17Hgh6vN2R7ApQ1oJvYuTC5yMf",
  "key31": "4mcc1jtFjd3hXpAVjVQYE1VU9UK3e1wUzWDFAEwxjdGbJXPLw7MRprfMe9duGd6472V9ZLQ8rapW1eNhNi7n8dDj",
  "key32": "596NGyRGbT6n2Z1foeQQ5ojffbsAXJYJQF4kEkF3zsaJ55dcM7pWXnNPmjCgsQEftDmEyVPmUf1QhArjAqYHSGzv",
  "key33": "3ofnP5mwvCTUfmP9Bofnpk8RDq9BMDzKfqyadZBkhZiuoo9p4pGqH1S2umhksnmoEQq7uQDmr1EFSmGXbn3PHdvH",
  "key34": "4kCA9AaMxzz4iLpH128ARJaqkokApy7erVDDoGKNcSFR5pGnB7u9oBk6dS78WZqodbFPL98bqC3dg4LduudMurDQ",
  "key35": "31xCvAv4hZvq2NtdT14DQ8pf21s8VX9PH9p4VfKJJxfDgDd95djU2tzdg5hMeNosszr6QZQ4CCDtCY3dbJP5aRti",
  "key36": "4EMJJWp4cjQr1Tmw2NrNybsPVVKGTFr4nmXmKFqcVNPqhUbXZXR8naLMXMbtdGXKFZgnViaYCjjeLBfLmBeh32Rw",
  "key37": "2ZZ4WKQ2tw99CmyyPvPehi2h3HhTJcFTpGyMirrxyX6FxgpAET7TmAma79y4jeAc6AUD8yZ6A1fzU5YxxpEt9zSH",
  "key38": "4Sxm2Dkyvr3nurRrdyG451LqASqUc2G3EY66MHui9oq2yptSZ3L58kibaa8AJMtKUR4vXiiXaNDyumjfFW9uFDdE",
  "key39": "GvPH1w8MYqWXdcV48cdvcnX9niWWpix3rN4NoPtEGsCaCnakE7kzw2seZYowMkfeX81JNc5J2eP27SB9rWDR443"
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
