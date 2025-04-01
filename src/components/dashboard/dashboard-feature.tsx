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
    "b16TmJz6uck9YMirSPzqXBEfvmBrAsxzMnWzCUsa4pQtCtvPcDRYXerQ16CHXVExhemMEYRGrpcCy1jseoKPWew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Hxcv2cXdCg8V1J6ohmHWQqvFJv84fKXjxj76FUCQCDrCa6vBbjXHdoktkLBe7TPu5BUMeLjN2fkHmYXZF7HSf4",
  "key1": "4t13ktMk2CmdRUt5w5KjHCB5ZSg5xdm4csEKwo8tW9nRqpphJwddtdKTQ6Z1eYkhzxPGXEp3gLvfSfcVMwmrhoDt",
  "key2": "3kstXSTSBbvBhvHNQm5WmP8ZjvaCFPLQNekCXaTPT92tVBEurM9mAysuytDDZKnkec4seeUtaqCfTa6K2jAsbjrq",
  "key3": "2qqiNY1kZ3JVskJed1rsKwUrccUAXZ77zp4yqPvQjpTRyqzDH7dErVE1nSzBGU7amoyjgAk8WD13J3QPPiyQ9q65",
  "key4": "4RtpKycXcUSN2qm9htApBBjPKkXiAmzzvVni829HvCnWNRNUJqU6dFxZqGE7VhCxPouNvgXwNQ5g4HRwYraiF6o4",
  "key5": "KKXstk3q46fkVZUZMebePvUzFuXWzdve3JjnjhLK3yQosNFbCTnu8cxWxgnVmneyhhLZuo39LqfrqX5vA281ivp",
  "key6": "HM1cjfL3jHKECksbuU2AwVH3ybxfHJ1d71e3g3o12QMUBFz69iu2Xwr8GnuiCRwpZtiFebBm5f3K7HSxafwEv66",
  "key7": "357qtaHzer8gAS1bbJKK1yTUrRzbhF3GgXn9P2YXZHCjei8j4gqqzYzWvDcAjxhGtP8SzCppqF1UyeG98vFDTxxM",
  "key8": "5N9tXqj95W38QzR5JFxN7MLJmHGWRk3frE6L5WhLZeSaqXmxFBt72J8EC6DJbsfNe4oHjcyvpX6j2K5r8Vjk7tQU",
  "key9": "67EUseGCiP7Ed2UTZRYqBXGH56KQnbAgAG46vzoRTU5nDKM7nZxDQ4kLqChhJFPTw4271ZMgwZhn4R9exxmXEKmR",
  "key10": "2CAKZdGbMk2HiVok7UqE77ojUYT6xBJFjFFDdPoXvfVfvVy9rU9pC6MkUeTszWrTNgXN468HGrztmhRMc5f1hrT5",
  "key11": "2jiK1iicGMoppo47poAtb2CmLfFm9tHJ6oBSAgFb9yyxTeUeJ3DpYfYPsutBQ2Tg9DaVxDqxFMMSFJBgiRCsLXTG",
  "key12": "4kuouM1QZZSCRjDDbHKAXV5YoQuyRW8sQifSLX25JXWfLVdH6zPciRFidHijNYF6Cnezd5LQrokw29frr3pLzcrv",
  "key13": "34V8Xvp4HLZoHbFbK2N2ZQiSQmGHDF3sLFHnsCbSSZZngFudJ4njjLpYi1khE5Hzez9CHgPZRseEF6UMPMTgberF",
  "key14": "54kNeGbMF1bskk68ViqwAj31dkpASoz3Zp9PbXzAHN9aP4GhKaBSBGHBdAHUbZQUkftBJghTk2U9N87stgqb7Veq",
  "key15": "PbMhzCXCji4Ei851H9ogszhA5GRhpRZXrAGvKKWJj1FhYwgcwNX8wvgVLnTdtbyst5Ne2fGK8vyC8UvyPpgxZtb",
  "key16": "4VxDCLDyxqmxtprkQNgEFpw27SNazxW2Q5Vf3Eek63ygCZyRhipogXFmD5JnE1YfJvbVmvseZj39mWdGZmLH7xit",
  "key17": "8U1obT9RceETRWqMmURTxKXe2WW3468U83dKTJwhaUhhhGW3y2XC9MeTxvzvxjFrqL2PaAYwvrJmCcdqMw9Sbcu",
  "key18": "3pWqKYWZF8eLiR5V5Xc41Bbr7fMgEveBfV5WNTjvDQLUnAutfAsCw8KErwSd4p5Z6BBmP7AmycPEH6AgkLSZgQnS",
  "key19": "2RWvvwMUToH98vDHhPfcFpKVnFdsciK8Sqo3c8q3rwGni8NH3buf4wYVPmHcqZpJfnRnVuDmMyVsr9aY9UKtQKcM",
  "key20": "5Q6ZEbA1a7HJDFtnXdWAktQ1CwNnW6pQH8yf2qRLTzNi2UMnAQewESDvaVr9TVzoHjzZEXEgKXxGJjzQec3X465G",
  "key21": "5xkSsWqS2BXKX1sJBi7LGNyBwDwNvqPEc7o86vhFK6NY5bkm39uejV5xqqgwtg6Z56PJNvaQkhMt9GH8R62m4fG",
  "key22": "4XjD289aHDcmxGjKFJJWEo46N2VEWNNwnATvtRS9qRejxf48cnJrTzecWmYcJRtDD8oqMzyjSjkoTrH1sBJg7JGK",
  "key23": "3X5oLwyMqDD294kXYbQZfkqoWWnrFqXywc8CdauDCneFJwmxbcNB6Dq39N6Jo85dVwYyLKBYMrsWTWUMU5L8kMwx",
  "key24": "41WVmXFHicyaqa1uxSVRFoLUwrLfMdR8tmHY3HHz8syZSaFhUkfuHPktmH5X2jMWc6WexEejsjyVE2Bm7YNw7sR2",
  "key25": "32v6djezRpmcJsDmpHUCYbFWGJyjANMoXbpJwv1wtq57wRG2L9o23KaZSi4zpuTpfMKQLfFKTW9iYAa5dahi5BXt",
  "key26": "2T5feacrLp9wU6V1gU8MzPApQKu2gnTVC8S7jtuqtkVTgSLJXEBZayPFET5X3jSXfG7q5EhH9oJWrqncmnKzczkK",
  "key27": "4aWcG9RNRcXcWwKgPqoJX1bUpHoAf2EFRaToRUtuok7h5JUiwYzaH86yi1pREYqyQPW8aWjcpNwQF4MKTccVNu1g",
  "key28": "249oTKgToWZE41bukCyo2A2b1DyLTKmGmPDDcbBgoTQZar2WYJz5pCr7wmBqpVnHwFZTCAU9gN5rnxVzyPtzNibK",
  "key29": "4d2pGWruj6yaupnfYt63procFR6DUijL5LhkxZmvtxc4GSkpcX2Zx2Mr7kHWdXuP1yxmy4GY8UVAC15ytrusD7Qb",
  "key30": "4eGbmGHaYuuPeCHoFEUaGqsLuBisEodfK8XN9CV8p4FTpeiMykrbcgkNybzUu74U83sP9dZd64gYaN4rPSBDmWca",
  "key31": "65azAiNXz3AzeNCGuai226ii6ew9mmW9BLVYMvWmafJrkL8cgDn3UsfZ8Co4jwck592cZXcvmFr2yJAAVFLpNu7G",
  "key32": "3qC5qnGgDyyzXrVeypJdjHF7hhb1F3wxCxBngtxhkRRFh1ekuifHFdXXV8CzW2X3p97nT5MbqQNyr8NVam7WmSDC"
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
