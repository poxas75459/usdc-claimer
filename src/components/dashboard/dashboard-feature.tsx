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
    "AdJmdGu7ag2jxf9gmcPW6b4uEF1z3Wnh6RB2wpQsZS7ZRqvuf4v6D1t4gmTUjCRzPvEmv9Zq7b4iNVjULiLDqoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sn3dg7bxccsAqLfAnar9KSFMvgxG7pA1JX3i88SVH1nGAHhaKjtb5Z2ySHUuoPpyXwX4QBA5c2siiaWtu1eF61g",
  "key1": "sq7TV2dLqgtwB5BFxrYWBiobUC1b12F7QuXuA5TKCcrCrfcrkM3mSHG6nFZ8LrXhLi5KRKP27ZWNpfqyabLypdT",
  "key2": "5LWcg6WvL2KmstkiRkDvyAcZeSqEp5zvDUwn9niAr1nZZRVN6zJ4WAhz2fduVozuVTp6S6q4UbH13b5jVLNunLXq",
  "key3": "2cDq2FLqhqjjvesBHQT6fiA8XnWB93LFy6a2ud6NWeG4DSuNCRqNyGK5QDciTmkta2xDks4iZcxZ8WFVdEjN4cGC",
  "key4": "RKK7b5WbWGZVrQoz2HfZ7r3vBVNRDMQ2jezBfhSqQmhC66kfo9kR8Jcm9PRM5Ah1meW49UyiGmki3mwgDXms5PU",
  "key5": "4o3w6fuDfsKiTKQ2ZnovawMsWhLMRhUCWRkVet86DrYkXo5nb97vZjsjshyRQ8MCeYoXh7S5bWME5mURtAHkV974",
  "key6": "32oso5Joj8KohdzLG1T56VA9oomxJMGQHdY176T8NmrkSKAmsXiz9kj5d62pAaxXVghajYms5GUf1EttJ5jpu43A",
  "key7": "sLrH6QjPcPckoeKv6g3DvbfrV8iikvtkymvo8ccUtd15in9kgRFU1tUnaMmBr2CWL2AQwun4A6jCssLvEdwSc5u",
  "key8": "2a9VzQLe82tRTbHAe9qSwisdzeKaD17XY67NfWbEJxY4p2qfcuT6mt5aLiCgTq6qHrjXirj7WxJYcFsWTSeVCDTJ",
  "key9": "2WafCBasCKZGWTw59jd8hvLuuaWweWDgHpUZg2vKScFRwJtkqBkmViWNoQEyDyQMjA4DmvSau3CRwmBJXSNodwWe",
  "key10": "2Ssom7ssjEKauVsaYME9kBoX8YYWV1HJefdqKxkLy2wtUSpVM3yKkiYiCzEmgi7r6a2AJ7VzXz5ZMhHMr1pnYfLs",
  "key11": "2MS5RikjyTitpwC4kvyP8HYbCt3tiPX7irh1XdXsgWHMkEYZS1ay3nnZsFLGJMmmhgLUa6qhJy16NHi98EXmpGi2",
  "key12": "5zikFeUSG2xSRpLrJtMue1FvqcEzP8BaihEq1c1KuDe1QK9bUFNc9EX2Ugat4BVQU44GHiXV1yVFy7M9t9P4VGnK",
  "key13": "5hxahf5GpF5ZqKjPvr8X5KNzgUueHPHSfkjkMTjuJQbfAzvWbQwgf32wfVAd76UBeDJDsDG3bGdsoiU3gvofBNGg",
  "key14": "5srboZ2hJPz1W2sRdo8Gu4naJU8CkMqZTFjj3jRtRUnare3FiX1uvfHnJCLtbewsEdWg4rG12QodGgs6TTxrZUgJ",
  "key15": "SpPXPscAkHEZvURM7NNnG2h9uM5hCsAjEAPRqisbjPMhMeK2A9g9zgGwGULCLVaSSPRcgMSGsULov4dUxSwofNU",
  "key16": "5K4gKgoHmXs1r2NYKToyZXAi9W1JaYkWLRuLgkXqUEUcDxuFc5ae4GGkjauyrYZLsznYBJbrxpokqydudm5vp7UV",
  "key17": "2WKKVbn8zkfbNNTaWz3jdjrNRkdmpeaLuxRc3LsvvC63VLFZ11yMTVwLPaBk1XdZ28rXAxFQmc5ApVPuPYHoBPU2",
  "key18": "4bkHtgmZNutQaXrtbFkSvAQSxWaqveFx8jEk2kagPuRaYaXBNfk2upjbojcYwgrtVR2gLWwPfvjjFcJVhnankk8r",
  "key19": "2cqbUbk8S5nW6PMoMUp4utNGWGuupveWzi2zh6mS6YrskPnFghsxzjsoLGtPh7jCh8UGSJYg7EaDtXjFtnfadycL",
  "key20": "GZfHVdbvys2hUhgsg2ZYAowRchFCnsNF5rvK1L84vNqwbwkLCX9tFkL9SohdcVFaQX8wLs6Jo77dFbXPQ9iE8yV",
  "key21": "HyyXjNM93uK27maWx8jzNJPiGzbiunTLU6a8gcnwzXLHNCg4AuwFbagXTcmkAxGccTjoQ98BuAVmBoTS5JwB9JY",
  "key22": "2rnPF3ttuxnCeaCzBtNLN4EdjKKWCMRNZUxRM2cDSkWW1canK9sx3u1QN7uho8iBEs62Ecd1mySVHXqa6Ry5MFyx",
  "key23": "2ySf5KLjpqVNPh3kdaEuuiRwZJPHab3ZDpFbbmo6CWb3DDYJ9rRRc6BW4pM8Cgyjt5tg1p2e1m9yHgiLhe8q1srZ",
  "key24": "2sh5hARC8UrHqUYRkibjHuUC5jiATvcZGHFsTVMFSdRpwwjrutXVmGb6mat84BXjaRx893JoxAJEWSnP1C6pmwUE",
  "key25": "5zinzhrUW8bGe9m4uCogPZLamcpBgVavX6rdaQ3VEdxFEG7KbfUa88HtYgqPCQm2xF9oMcVSaReMrY2JsrwY3PDX",
  "key26": "tAkmEksG56kMDvZPXsee6S58sBxqPeqkZmKryPuHJrJFKGYE6MuPtHAQnDSjNz2e2upC9YkBSemSePDq89npT93",
  "key27": "5eCjWPsifg8dACQDvq9SgMtouxkAx4UrJQubhNJtzyGEup27zosPYjehW5hwDAKRTesQDYsSoHP95SFUkybi4kj1",
  "key28": "5s8nYD7iyUcBN7vCRWLouuw52YyLXxthhaJ178M7LCH9wSCEiGGRzQQeBUCW4TCKnZaiVHeBQkCbMiCJAbT9zHnt"
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
