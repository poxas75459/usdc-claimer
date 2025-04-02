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
    "4cGNSi14zxouwM4NGxLMUVgYE5grrAtoWy2K4Z6TTjxxEun4Bvr2Ki3wAFkccBuKTB35HW3bRJAoFxVcxvbNivKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZcjjDcF37BuaJBBzHocg5WrcGv4fxkvNrDMygFPVRg2YHHc3UKAwjWrSogNpz5C5pWsdeGvTwNanqqy5EZHgeW",
  "key1": "4UbKs4G369bw4KH1pH9jzrw6DvaAExNL7gpMFYYPX1gFbw9Fp3iScLbZK2a1vUQi4e7k8SsSCw5BS7xTzPtRtVNx",
  "key2": "TZVwA26QF6GLpj8DXBuPbaRBYuY6f16GD96e1Bq11iafzuNREq4mCA7wFMqKmMqr2iC96JeTVxSbDnXR3XSzpxq",
  "key3": "aw7Tkwyfog8H2BLreHjjPE3ZoqrgWrt9BhhSrMtro26KbmNA3GAF7Tf5vvtggGvCEk9tD9grpFAcbJXPdD4EqbU",
  "key4": "33HgocvXxHA5QzWRZM2JNuocYnH6p1psVYfj3EQ93oUmuUVqV6Yapdcuizf7TcMNNZHBXGDpxXP57Kr6irBzRX84",
  "key5": "2x3PxTY9F6RoTVhCjkRYL3L8DDMhYh6VvwWS7wfeQVBeYfyB3YQjwcWnBgReCgwyCCUtJ64tedhhCBhPhRGAtipz",
  "key6": "dKMpUKvLhdAGXp13Awxs76Rj8ST9Bzvozv5yq9NVCtL84Kd4tmgjXCTeihXRoobJ2AAySUUez2KxnTdxkLcP6ci",
  "key7": "9ux9em6tdWTSsTMu6b2dTphBwgPDMikXgWoDiAWYEzu3Gggb2VM7bTnroVVqKHZaMxvomcQALDyvvqVNdxDVwtG",
  "key8": "62xEJ7AjRCFZHr9oXKQaPAi6JeZR47FXYeqpyfXyLGTEgjYciMLhcewWpyS8FU7xt4vPuEgCq2EGufQxGcjuP6ia",
  "key9": "5WiyHWodESBu8qvhxSMyZY2jPbxTuq3HZEV2a9q4D9QwegPhjMiygdBcdRDd72NGnyz1Gy524eU9Q3crPtKoyfMy",
  "key10": "2yDaWyGK3htxQ9a2z22MVPEj5YN4FVo5JmS3LTTTCsr28wNbiyjVf7sm57HpAYbsgkD7tKt6UFNyEe6biNRkpY12",
  "key11": "4PyAvZvcreSUk2hnN3PRmRMFMAAMPhLSV6NFJ84ox9w5nRDkMaCHPhu4W9vG56voz812dbvwPM7GEYsjXePPt3kY",
  "key12": "4qNaUk8QA8XD3G8KeV6grRavdjBdqVH4SmT3KJvkmu1SD5q4UrvLpjFeA6xgEvs8icH6T55YqVeXvM4CXTnc9BQK",
  "key13": "3tXeg9JFFD6cX9ySmU1NUj1KNnnXnZrHEuDyNGApUi6qPq9sRrSTCeqNL1xyKcY4UTnUKTQ26Hn4W1f3u9tYu5K8",
  "key14": "VwXNnP7QiWrLE5RxdwkpY56RS1VAt9PCB4MZqMxnTGGUukJkiwR6JAUgVkhgxN21QrTxC85t6gB9VdhWtNBFR4q",
  "key15": "3HVDDb2VB1VZ3fY2ZgrEN5GjJ8NmnMqFDuWBBGEAV1PyDcAbD4zpQRZ6cajgzzJHKYU3cnUM4ZQzY3WW9LLC23xN",
  "key16": "23P9gaMku1wUbTH3yMaQEmjKdUjrUh8jBgSm191JBQKQxVUG48be1JC39UbCewsgTyZtUqME3TZYJPcv1RERY3Jj",
  "key17": "2Q8KzhnJZ5d2WNRxjd8LauLigTBmkZxEagG8su2Pug1q2Y2XYo34iViATQX6NbPiwH7kuvAiSi8tCfqunjvzgaLT",
  "key18": "2uwJqCaHHimbkPU32asMYd99KADM3HfTZMGCsutKtoVWWKKYQwcM8mt3x4PLHcmQncjCF5vXX7vgGbA9y72v6PE2",
  "key19": "1nVbjSv5pxzEEL1si8zHDcEQNqH4iw1AnAPWQHHGuT14GwUwTzRJe7wjTMRtc1pV4mTYeUnAazSoErQdrLGd9ov",
  "key20": "3ubgHaDDDtVthLnHStSRH2uGHQ5MFKSSNjfFXgCEWxsjUu73uC8q4TUj73FnY9p6VT7qC8ADbKXaVFJLd6eenyUT",
  "key21": "2KnRXhTcdCHog9Aop6riM8g5vW9K2XDXcykpotcAT9r97V6kTALnVymNaYkC4QGCujzLuiXCo6MFUa4dvQ7gheqp",
  "key22": "2f99LhtihrLEvQLqYBPm1RqTjV2J7m8i5upuoRrNHK7PexkoHJHRuwiyfNVZo4u2qAQMu86ghA4NRjq5JsC9BKV5",
  "key23": "3VfHz2LuktuSoicp6bu172NjkYYnaXaTJuBT5QvR6kC3xia8SBMFZ7CjymcayEEvL8dnd6L6hBqNX2CWDvsbXbeh",
  "key24": "2SbQaPdWZnzVv99wk4Lu39Mhq7k7TZD5RgE8NDPJNLHdXJFv9iXg6jUn4kUDzwBsxbZkdMMZfFpjQge1bQ2KmcZw",
  "key25": "2dwRKf6oL7mmASLYd1P6UFLTqj3pgPmxbehDvxn2MgpysqkW16HjiBp8Bavs5gJF2DcrMmJahiyaDVLqnHYabBB9",
  "key26": "4NzkZJc9kYn6Q21kY1syiAnfQGhYoz6PEAevim6wAKvbJSbhsBjmM16VwomAxHQ6LFFiZa2EteDrxAtcpLT5LN5N",
  "key27": "3wa23FWookXbDV4hhy1wRdYPjG72kxo142vin5egikjKx2Hpuh7SyMwTkos2CwdiQxqVYd32oLPoTCZpYAceYPZ9",
  "key28": "2BTLfoTtCJBGo1Ve5cYT4t1bsQDv4B1U6j563feJ1u6hnL4fy1eMq1p9XboJxVVEANKymBUUgvrsb9brkGdbTLTj",
  "key29": "3vAUaFMbTrfD3kJChjppwEWhCGvUCppF1vrsCouwF71mGL1rxv8oczCxWGxgEaDYpa9CwnYZ2tSHyUGWP5iVLwxj",
  "key30": "2T2qVEgZokSogme8RJRHKGMvBBgijHArVV6HdSDbECrsn48oGNmJDNusZ7npZZ9yd2U5tG5qanM3E2aGBgWzQbjJ",
  "key31": "4oX6e3oqmTSvCqBX66zrY7ec9JmHDAVxU1YRSjuzv7YMkoFb6mMaCYamrCHaBGxoYzvywqQKk9BCAC3JrWbgXbuW",
  "key32": "3xD5DHpZvZGgfjCJndi6GkT8zQy1g4nfLTzCKbHzyEKMq6Dtaxc4QXsBbdAfaEzwuZoCuLF8ZVtkzipZe3HvqGWt",
  "key33": "3Sf1qGKPREMCqH5tDLNDZx2owwWbjeMZ2whv5szZK3kr9JCwTpiKbpujd9B8e7WGvDP1HCmZZJBvfJJCYDsTQnqK",
  "key34": "2LmzZBK2en8QfGZB2pU8KwXKiAHPE4QsptT7QB29i5Jq9MMQzptPiuztFDNAr1JQJCtnHfNbHscHjCnbmhsZdsBR",
  "key35": "5DzX9TYMFyn8MRZLgzFt13CFhRYXmgnjgqsr6UsqwfM8gRoVYcSywb6c1yRGfvP1dT7K2KC6BFUtAEhK4Xtux6cU"
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
