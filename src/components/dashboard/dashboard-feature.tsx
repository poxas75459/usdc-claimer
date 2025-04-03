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
    "2XBq7y2HiLPEiuqpyMwsbVYoLAavxYqnuWV8hicW2rYmwipjkSCe9jtTQJHVSh8pKoZPWzQ1ExcGqKQQEKAZG77z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35R8V8fEBLo2AwKhiZrrdzuWkYt6tL6saZNujW1Y2MwWarfnStpLn1Jy4iDURjxP444UGasqir2kTDmwDsUi7CTJ",
  "key1": "2Hubwy1CHQke1QdKLR7vVSt67neYrGNAkEUeGsJTnK4DGntrBodeomjMeci7pTWKKP5JDzGdPbCkh28VGED8xYsW",
  "key2": "2ogVYf4Ci6LLo9tYt3pEaLcfvGAcCCTWvbhWHDYpyVPo7W3RHu79vmyp49az3FkAfUMqVHZnAbsmnTrWgekynVgF",
  "key3": "4sn5oFwwPchxeDSn4CkpHH7MjxwTfsrbcimEyHmQ3nokczmc3cwxMJKQwD6uDAQsBfVLZTaLdGhmHiDwvrxmgRfq",
  "key4": "4kEc9ME4nWt3W2QvKutgch1wUnH1SjDhQJJ9kdQXxC8r5shg7qmCjfWG2ifCh5sDLKajAAKbu4bfgtD4wpu52Dpd",
  "key5": "4C1DZjU3rsv18HszeySne8vG7vqcbgtSWFAUCM794SZtB1n2Ugj4yDzAWJsxcELfdwuMJn6GswDyHkVtTTXMZDN1",
  "key6": "nKqP8dpciCdopgQWAVRurYaaR2q7opEGf7UFDcBKfD6GXaG1FY1UgeSEGzXtcfb6kdi5peTTPw6x2QgxhR1LhMm",
  "key7": "37JLRRGns7M2BktoB5GMWVVw4NT37RarG4gVYK7RL9QEuVQenAeE35atrCYGk5AAPE6wdUss56r9XyZACz1sagWK",
  "key8": "4YMjUDmmPrvMZ7TNATzTerpKVyMjjxFXD3JZre5T6YCwPbCKfMhLYy3Xhe91SV9zxyoPQC6v4orgT5xui4waiPCq",
  "key9": "5Mx1nF5CkEwBApHUnX512cCEuXNp1NE92SDddBrS6anNaYcZzBH6DHg3G6qAUpUg55QgEx78rFs3DnA7bdSRPTiU",
  "key10": "3tZEnBhUm2Leki8GxXCZnjiVidw19nSaeceam1y3uTbGBMQQ5wNBNFWQ8vQXcCKYCxc2YmJZQZqLxUmorKpccbo",
  "key11": "5HeC3GeH6LTcamxTLm49GMVwrzd6yVfDAkrUcs9VPBEfinrkpsDRhbXRg3w4gu9FXfU9ApHMoMRJ2vRKzrjhuihL",
  "key12": "2TbiHnjsCveXCGDhjH7ypFPE82L5hxMMA6u9xgM4vrBctznks4uWBjunLvYZrPmqfjXXPEECH3gB9FJ7H43WKVK5",
  "key13": "2nv7qwErVRBEDNfBybD6KZw3Zwp8PksVpCoUYY9vJxBXWJ4FLVt9Eo9HWhfhzG94xyFbBbKi6nYBrSNtVdNg1JVC",
  "key14": "582cwwD4dFTavRv9QPUagSSnbX2UgNQ4VnkPUD6MQPqaFMaK1aswDMHAFvUyjfgxND5ReE2Ev3kT6MfnMJKfeq2v",
  "key15": "BsMuktoY6XBzbTW7SD3exCJ4vVfEU9X1hJ1u6HHNrQBg73yC94Qhszwe8JzpUw6zfZrrdSzQKLyXEcvEK9XPJmV",
  "key16": "3uh6HcPybiMknzJ9eu4Det2zzeE4x1tZV9FUJpYVoxjhgWBTFniUkgSszBuXk2cSRaH8Nh4FSyDtxg4G1CMdKDZq",
  "key17": "2PjEeSVqRwhvdtwNKaBwyt8qA7mgYaLXVirrtmgVmQYnw5g7oER6Nbn2MdJ3akLBDr6MRyXAz6imiq7PD7wrXs1A",
  "key18": "3b7VdtJbG8UHfoX3hEb2Dnf5BFeWDLUzzeKTBm3sZya4r2pQw7AW7ANQPKqutWRSjzFo5ARMQyfW2iFqXFmFTVpf",
  "key19": "4k56aPvpfsgHKzokD5FS5TKztv2xZNa496aZoRbjHcwppnKcEGmVvYde6cZFFqkh6EVUZy3HSh2wXh5AD7u27vJW",
  "key20": "2dC1zmVZFVt6VKVaxUJPysBGyPTtR4VicebdiJgfCYspKhbYcwv1RLM2N1jRSbiK5xsNQ27iL9m2xWHYWkDNABTJ",
  "key21": "3z7MwZrd7KA9QAuh8WLfCp4tV5KH1jb6L8amfBxLR9sZ28shEiHef5USh9WJRMguSrEYttxZyuTfL1T2M4igCxC1",
  "key22": "5k1mkTzCRTSiaSnzBW9zrbQrzp8tYPrtmJYJKN9H8nHHQYo4hvXqnV3D5PqLDG24nVZX8TUGyJvT7BEeGgaikZKQ",
  "key23": "M143TtTxccM5PYgZyTYB35DNjtYuyXvXL7dCSrNpYbXfgeH5pbgHM7ZBtoXJbpq8fBeYsXqrNVv2H3rF6yTse4t",
  "key24": "51GKSf7S5DsbW8Xw93eyn2cZjqHZZDJ1ivUsyL1hz7asfibFatpPBzAXAN8oeWtQ764wgW94aL46ENcJiEDTBafa",
  "key25": "nVRnJ6MXdnFAednPgkq7dryB5xbs9VUYEkNojt5G6xVX4JM1TWJXJsrjbPCrNRd57Ba4L4LhnxUHjMy1SAJqfMx",
  "key26": "g7dWynDaSGXshm8nGUjjmwg5QaCzbUT4vVcgDfxiQJqNZRHMb5kz72qwV4CBT6wbeA8uXU2fMTYCK31peDJL4jF",
  "key27": "3ypW91xo371unSR9nkJ4kR6g3Xv4vxDHkZyBzHsEP3SszWdWRbtcc897qSc6V7cXqABQQURDCepTTGbjcEmouTCf",
  "key28": "2nkVrKJRvL52yjbPfp6hNSg6RUjHgkCQ9XtBrnAZtMnpHitYEyFf52BCsVUaqqnU2Xxn3nQnoyFy4FkGMK2ebTCL",
  "key29": "64ohGgpTmN1bRGPFK9ksj22MF8oXrqHj37Lqs6qQGeXwzHW9EVVYbmwqHhFQc1DKCQthWmGpQEtAuKpgQdVBE7qM",
  "key30": "48xpDSnPzThBCLitY9ZW9ijNYcaQ3JPVir1BsMUkdnE2n7TeBQzVyvnaw4X57bpWdBmebsHagYoWbzdNwCK2sxQt",
  "key31": "64a7P5wh49Ty2PukkFepmYYZzcnM1hN5XSJTAhzBqfBvxpGui6mZTEoAKnz5GNwCg8yyVgjD5JsXKZj8tnL2u42g",
  "key32": "3gc8z2bwvmsvTRrPHsJfw6ssHUz5ejA3DSmq1wZQ5efJCcSkBvEA2ghi2niT4vjyMWfT2w1wsrfYDfjJxxkWVwsG",
  "key33": "2aL9bLhwcrSYHGLaycALu7u9arxSXK2KX8frHBZNZFhzz5p1CKCitQUvjCyUaNvstBZruhTeVWopN7qwGSGVwzSf",
  "key34": "4X9uMYCkpEQg8UBmJ89qYmsuriRXgLMYGwPHMEj3EtVR416mA31X27m23yiRRe7x9npkvmrcosxwMo8T5y6CnjmE",
  "key35": "3UkXhspFC1UYc9qkj7X5WDkZdeUdr1uiYCDfjuBwqgiLzHeqnjeu2Eokpy31PeUKGDZ87c3BhDzbvNfjzLXHpUcB",
  "key36": "5W8GCCz8bfrPiH3nBYCgiYZYn6dMt81Puvn5nu2ag8L846xsTcJRgB74kJo9mF39ZMM3HkfD5WkgBo2NV6pTVDuE"
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
