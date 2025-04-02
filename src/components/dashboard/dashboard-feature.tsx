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
    "59yVqnMeahjDdkNHR1a9apZkY3XQDAPsLUvenSLJxnCQswt4QqNxYBGsytZJTnTZEuq3fb4v9j4AhJemmf3drGEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smSEVC3qJWn3jQFFieoh1SGTRStWDHGWupsCKENCr6TFM97kguSRXZtqm9RqDUyV9kQJBbDoc9L8AXvZMEwb5vw",
  "key1": "39mT3hMS4P5V19Cm8GGzJJswKMa8AJsfssXKzRfBK1DHQHiV1VYWgXe1SmYDuPc2CFPgrFyY9meMyzeK7aBK72c7",
  "key2": "3qZDNcSqpq5B7bXzi74KUBS3kZdC9mYnYRBnpzN5geyptcGckPkFaXy7tLkhC2HzQMefig7QcFhYZEHd54aU5TjU",
  "key3": "35WutPAksdp9ZjwqkZLvB7EUCb4jFv85Dkou1UaZTRjwvQc8fAv29ddKiRzLtBmTm75ua6GgmmXWbG2p8oQ4s9Bb",
  "key4": "3hCFgBu6SLpzwh5MKTbqF1TmsCe8ER1jJjs9jRtj5SLwidDRZhgikCyvu55n8qmCJvhVgKhoVjBkuyZYSkpPmgPj",
  "key5": "4cpLhS6Qqs2piyXF3YoaE9qBTzHCgib7QpuQ6LxSQ4z34HtXR2fEgDWMXTRrnk13s6gW7iF2vdmK3oz47W1N2mQN",
  "key6": "4m1RVq3gMyajvUbVzf4HNLb7ie8T7P7Rq1wP1hr47cPj3bo5oGNRZcgQhCwfqGKT2mZtj1aBrsxqnJwHZK6T4ijA",
  "key7": "3nwUpWDTen64Jb7mdj9G2njgrdSV8h4HaYa4DFHQHmCjqrf7xaaifr2iNF8QdKeMJbCvLRkvuZSpuV9ULJg6EzvB",
  "key8": "4trGJZJSkLBiS5oFj1mgoHtHXBN63xqkXM752NQj1s5f6XdBYiioWHfRXxCiiLrDrbx2L29jHyLJNEK3DUNxNUZ7",
  "key9": "V69nHC7BcPdyExrVJi1CQ7F9iAx1XKhsFN8QYBQHANvPCkrH4urphEkDZopRQMLQxLC7Kby7yHPz1ifULEtUWep",
  "key10": "3aBfCtYcGjLqbYgFEwfkiLjWuwo62KaaxpMhbU1JtCdc6NwMDZ9UZvHJikD4Wq5SHxgBrhRUjbbnSEMvcDAJF3dZ",
  "key11": "2gsXtTHTnJpEy31d1R5jVViSKD9Lckvjhs7TzDSMnxNGzW9M8jVXAFUyHHPmfHBcVFjdexX4Ge2Ht5MUtapN5u3R",
  "key12": "5Z6Nv5TkWaqZbdn6MGUKidMY5vjpsmYhVn5fHJ2ACnrwzmyoDd3QTfu3H13jDjHqvw7TVsXmvktWAf3vX3hCugWb",
  "key13": "1n6HJfxsTJbKR5CZpxhqfrySyRsrVDqudLgDWmYEqVkquDaQn1GDB32eoNh12PoDX7nhbxExfPthwTMvtpupg18",
  "key14": "AVEt437mXMRTW6y9SHEgBRYuL5CUJ2ExQruW8KwVMS6N9EYmUtERmqoxB5tEoy9A5qHD7jYc9aV6M5KNduQUEMR",
  "key15": "2Tc5hxXjYa3q3kJq6QCT5FA62f6KzzAihhUbQ1q2ExwSXDZtHpDwPuwmX93FK1h48Qm2dodBzgxi4BfSkUnsXFVS",
  "key16": "2ez6MLpgMfyViMwZeigV5zXMxrayQub9rgXZHqGDYviq1TiHUmepuPjPjkBQF8VwYHESi8jye6mHuWpWq2kWqTXt",
  "key17": "4vdkFtkRFgU9J5ymZ5WULsqmtfHYBJ26nrfkBiTvDhzy64yCH7MY9LJaZ83f7u9UAXxtA7ZKL4UKWB5eveUzjJLZ",
  "key18": "55hKkgsbvWWN2J2WyTmr3wZDdPhB2KsaYbakqpuhoWkBCRqxZ6MjF6V31AC1PsC6E6cBx9P9X2nZ9RyN2S1QzcvM",
  "key19": "5iPqQqALg4ujWsW3YRXXPs7k4WJkFJguW6dPEu9EyFLdv981HfJy5ZjFbVK6QM94Rb6f3rZT4FhFK8TVhPmNMK9t",
  "key20": "33q9SLn6uw3nYKpczwEaNyPeqFTL6oPmsy9EwdPtCr86gvCMUmsPQ2xa9Y4YttSHfsfXGJ8eX2dgTwxAM8oY8hZV",
  "key21": "2oA4udC95fVUUiYntVry1aoHDCuMQrtWCLXageZ1RQobhV3epTDZke3M42nMjuuN3warR1QkxmLa5HvCpqq2sEXe",
  "key22": "Hbq1zx2fVSBSk6xWxXx4KHY1cAmbGmHrSFox5CxdvhJ8WKphCsCwnxegJG3iFDh9zeQvK9EUXjPTDuofEYfkKmw",
  "key23": "2QnDUpGbszTCmLhSgrXA9UAuESqE1YciNLhQjje6ddWoHMTNAnTcMDhJuJ6n3YtXrWTwX1CzBhUHXkDtr2xNos3Y",
  "key24": "3cvG9o4fEsPBFdBMRRswLv4EZi3Sz45jF8GMyJtv1Xzx7FxjRsXddjfyyrXjwB2FLcrSMg8d9ckEJRP3qHkNgXf6",
  "key25": "4g522A5ZmHqLL8zfhiGWH9dKgcaw98e5zDJKYtyfQ9Gnfib4hCEG9UGp9TSSmJrZCuHdUnYCz487dwc5tPfKRHC1",
  "key26": "5wsGXutx4pEUvCuGPLMDn3dBBkJMcJtYKp6Kzgc6diw2yJBLb3UHPvLpQGzJuSK9xkGXQmeuKcwTKNaWAkSEnsxw",
  "key27": "2iiDSL4Zi1MbeFvgRf4PAeXihGy86TWtUtso7SauMs9xpBdsmidUUf6F881VUCtdD7zPsxe6CxZrGmqdMTi7nxF6",
  "key28": "2kqLN19NGumR59PUG6T1JEGSJte5dgLpMzUzX49tDq8CNToeApXdNypKDRkunE4YEMp76v3q3WwRcG4RV1KfL2Py",
  "key29": "5rE8JSMssjenkStFKd4Dk92m68MqBWG49jrUHGHtYJdnXh3tsDFVxLUjQNbw41Pq6GnbSB5nPTi67wTDGXLu66Ss",
  "key30": "5DqyRnnwhuGvtHCfSYX7faj329Zw67crU6GFRzdrS5ziBUFkEukTC6kMD6u8VxZBHJ8zXKCm6JGCyCWVVJNniaCA",
  "key31": "49sJ7N6A4Qr4mCQUzd2ndrp6PUsbJvj36DuPb4cxFtVT6Q5gW6zFhQGB3cqFXPsZfkmFB9BkCEyRWVE9iAydKZVh",
  "key32": "4veMGKMwz22xPpqTrnBc76MTu4p9uH2MZu1XCM1WYE1KQ27eVU9HKmbASu5L9nFkyV1k7MabtBZ59hz5PzNWrFEh",
  "key33": "5xm36vUtLzRfD4AwjFx7nPq1YjX9fHxaZEAH94ifn5bn4uN2W7ekbNTf96WehXm7ZJNDHTuq559aPn75rpuHU8k3",
  "key34": "4rj8KDDTy7iicxs4vVVN9JuDJF2rYwruomY5noYX79627rxkv46z4tFDc3PtzPmiRXmCUNo2LXQuVRzCVn7L6aqR",
  "key35": "TSK7r7e1VAy5QXXFF5Kt8WYCBiSegDYcGx1WX1bnqfg1cCxYhmCARkHdRfQdjo4idvBcXVwKT3C7UYWWvkTzvZP",
  "key36": "5ULgrodBzTqFVZbRZtYa6peHnEGbWz5Eppi7CyNPRAcqi5JhBubHbgSz6C4JeJw8YDSuuYQpa5mGG97gxeWUibjz",
  "key37": "2HZeFVC6uB4YeAphSHXCTd65AcV52bGsVJwMDEihAFK5n6kbSGGCYKeuig8rLL7TCWNmU2LZdypQnaoTtHM4LETX",
  "key38": "5Wi2P2DEKgPZjFVTUE6ENaEVgVqWjxccCbgpCAmzmf9qPggFfnRQm1WNjUzC275fRUz6UMkBAFP3BhhBy7qEHSXK",
  "key39": "64A4ia5YMWxb23mBvYmekNFnwDAcEkRGdZoUePaiUP7fmHEaXHpQABPtN74nVPEkdVrHoM8iiSzkJQPRQJbTxed4",
  "key40": "4M2dNWJKpVdEaZE9ULB7LpBEdVtceEAM9RDFLbAAdWEV8SacwwAvEMeezUkNCNdJQ4wVAajw5pAmLYRzewDiFgx2"
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
