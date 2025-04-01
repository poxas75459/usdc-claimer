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
    "5FZgcLBqb3kussZd87v8KVHgzdmdGH1ZjQwpNSsobaH1CzTWmvhGLRFrDUCf8e3hfzVqvueYcCsXH8Qacpv1JAoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hsoKwfDcDWkBKfdNtwk61ZNnifnRFAuZ8YPnR6bBEaHaAyjU6mXu5sQaij1Y5HRREXNZD8wRxAyL4H5xomUeHgA",
  "key1": "4JKJm3GHjUwHuSgDSQ8dD5DuaTJrCeP5R5PoNjKBSaYEA4nkrCKxijtjtzWDkPkKFLTpUGH4tGLw5QnLmddHfWPd",
  "key2": "3zMdhqro3YjG5qdvxrVf8W74X9CwVxJoDAvgeQZEEfW1qR6diG8bfJYWAEnNCb9Pr9jpTjZtnUAxLQW3GztsZAJ4",
  "key3": "2H3fn38ZgVsADyDy1MeM13VHsPnEVyQ1RV4Uby9qJTH9EkHLTQdm4LMFUfpfJW7mUXQapYQXSp3j81VozgwX3Ceu",
  "key4": "5ogAFKr58CKf61KsEnmCCaAyW2P61HyhbVGCDuLJ4Tsa6D34ZkfL8Ue1U3ceKU9d2kMRkdHggW2VGBgAXs9diE65",
  "key5": "2jLkrw6wf3PeHL9rppPyAMiJzDP8r1BbXpH7Z5ikJrfhnHEuQXfbvMbdHp1tAowgv8Mf6goF4M7X9AC9MYPTSoHn",
  "key6": "2J7nFJz7KXcKLg7qYZHeT2SYibXxZfmVsLntA5o34huve4VxXn3RtQ17vVfh7dR1N8FY9e8fxmytTHZzBiYcuKKv",
  "key7": "5j5fJ16Ut1QWqMRjbwZ3LN9Jd8ru2EDPyKBrr3YQA9mkqEAe1ZkyDMS6KDeQqJQevCxMbTt9W1vtL3uMiLHnwH4P",
  "key8": "2rwcmyU4vGHfLPoqmxT6gozeBo6D2T5JuYnkS5bDtGcjLkAeMR89iwEuja98jsJ3evLf5RHCA3uQQFtBH4opySjC",
  "key9": "5kMwZE4bK2CSV4Mg7yQGp1NqwEshSYLz5L4kef6CxwZteBfZ3tYMUPS4W5iAd7AUYeF9Rruj4QDXDjS5ikyL5aPp",
  "key10": "4TsnAFHg69zdUwDddmwYAeQfgCMEhhvmNybpwa5jHzGkzbixJXN56dcNCr9ZjEa3X6rPGazvsEyUzjPwVZQYtpn",
  "key11": "3qgVvQXwLmRjaUJvFsaQuzDmLc8ryo9Vtd1kp4oqpFA6hvCmmA8bZmHynxMpKaGsRzyk1TaDCCsww7jm9dCnTbA1",
  "key12": "56Ca4F8S99V5zgzCCNgo4xiBdq8eqPDb7KxxXSL1YcPq5mKaZTtrRez5oXXDVRNy4C9Kq2EX52h4KXjM1VL4R3L4",
  "key13": "4ct7CdTaqYdtHhAA4WUUd1BHvZKgA3Nxu2i4BjBE1ZNRGKstyqU2smaJE93caBoDm8Xd2KCThwGYL3izoPr6zfEi",
  "key14": "5dd37tQDfAZDW2rc5pKviDS9RcsJe56p2Uhw7ffgMtF7PGu1E1XcDbQUoiaA8JMktunLDzaiDiRWwdS5sF5dqRwr",
  "key15": "3MKjq996NTBBJ41UNaKofkcFYqD7y7UndUhRHHerUfdw2rsmaxNVfNc8mT6nTser6JG1FKZxJzqPSG8wTJJ5bEGr",
  "key16": "36mNgKSzNgHFG1pLAzHWabWwGPTcRzpTpzNoHTQ8bCUZc3Xcc97DLEKjKSEhcnjNsFU8TVGehPEgkEvYHVPXSuaA",
  "key17": "2fEaxkGj5UpQKEfZquv3oLYR4zivsHJzH9RDmi7WHt4mdPbnZ3CfWvkczPxK9YZRAst24jbqJyodFA5UvNSZA4ic",
  "key18": "43sC2fqdcP35BD5WWvCJ6KZ9yNzetyHYFzjDTwHC449AKoKFwZ5jvPRNNRpSfDWwf3Jdj318cnLXVK1Qiceh5VTd",
  "key19": "4hK2FfquewJdjdXH7BgzB66EyPzAq3RjzfbLovHZotY9XfKkMwWnw4iJHoNij4szLyjSCisQ7CbwNTPXzqZ14MER",
  "key20": "5hSRLkq9g2G5bxtwrShvWk3Rochs1heQTsXpEeJ4QLqcobRwnXjWmfkSpBSUCmmRkr6bz119CsbvkweXhdtQ6rMd",
  "key21": "59z5ee6KCLuj2jv2dT39RoLZhHobzhabbj7W7a5qKfXki3ik8uT25xkCZWMcY5TCsLcqMeRrVLbFfn495D6hj2uh",
  "key22": "2e6xkDm9ZdT1Gk7hi2jbKA88e8CENBwedzXTPUpMHvuwoXwYyUQG2b6UMeR1McZNEoSGGw9KmUz2MdU4gq84ckWg",
  "key23": "45Tu4ApmVVX5BBsBfHCjJVZqc6vf37v3fGtCvkQn2ZDemGUqATy6wwfN6wyC8WwTHpMwksQcbCwcH6z63WpXyAsz",
  "key24": "3qNGw1akwwXGQ2HZD6WetmymT9By5GEfWGg856SfV9sQDZkG1MHS8LcBG3YrvdiEG4bGhJG2Xx43BwQ4Hf5WD7gz",
  "key25": "3AQxXQ2rPD8n4SBf2wiWHiM6grgqdGLsRjJRGW12jxiM7t2nrtqh2BRaGs3H7cVmQZnbUag2qAdYwdqqHhbyEZnK",
  "key26": "54kUXfoPyGijmCriFAHR6SyRZZW9K8ijpHq3336F79v8DDwxAAMviq8W5j2wKCBRKmCitAgfATH5YCQqCth8oDGh"
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
