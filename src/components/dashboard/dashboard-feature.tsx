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
    "2u8CdjK3Fb8T8Kgpg6xADQiYfDYNXTBuD37BsfiLVcALHZNbZvoWmuFHL6embwMSgtpK28mdSjRY4qapiWQTiVh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7J686UfFtugy4JQLNYy4M7XFNX5nSmqG3edeNhyCFEEiQQ2zMXRZbyZgiZtCZQssjkDanbqG9fMTVNNLfpsV5m9",
  "key1": "3kvzyb46c32g1zVLZUpNoBJk5Q6hVXsfiQc1VYjjuMhccfhMappMrJErRZuvdoTUQekLbTRrHicUXeWrdoSgyZNA",
  "key2": "2vniQSi2punX6mScAVJUsp8HRBZc6HdLugcFru3gFgBCcTma9ud5RfAht7oV2DoNXS7HmwPw5BoRYKjSjYNieCJs",
  "key3": "zAGg2NaCpimTvj7gDPJMUHUUkxbN24JdrGy4o4fqXU9ExWMfpQ2ae2sfX4FousTwipzdpR6jWLq2s6T8wH2ZE6u",
  "key4": "45vBrWyeRpoMgYXuQhseRZ8M3qTKvxgzVvKKnqVKdkwohsjbrSdriH1Kmo8q7GKUB1PSykZ4L6rN3DH7kk3f3hDA",
  "key5": "3ntT3nw3L7nuVTSCisS37afCRrj5ikeR7REHbrfQjUCE62U1pWm4nJx7hV4LtWwkXoDXuBC6sP5337uEmVASLn1n",
  "key6": "6u8QBFcNF3dMHsDHAWcYutAymXwaxEKUpZQ3JBgKWWAmFcnVJ4Trt6Q5TYFRHr1nAXNu7cx7qUP3K24NMbQviKw",
  "key7": "rpQpGRQrgTQk6H5YwKT9MBwwAyhSRXoM6VHX6VHKkjJzZSWdgLfHSi83iyB3Nw1GLvJcM6F6qncAchQUpEbarqh",
  "key8": "4SZSBftTbn5HA6SWChMi3H5qmb3Mww7MZsj77JjFraZLVBz3mQrbtTjEND73nfbu4fBq4RBG7GFXAoJJCqkPuKgy",
  "key9": "3wkwYosSiDgbEEPpw4rduFQJbjnTP5FV7Xm9zdUDN2tXAk7JHHEmpME6nRLKFvwzs8t2NTThuyStCxCB4DsgGsey",
  "key10": "57dKJPKV16ibTdWBj6vCyJ5EYG7axSAUvdB6WFcPohS5SxHMMpejv8Eipte9VfRi1yzTb2YhjLjj1JjAEYYuMnik",
  "key11": "79128FshQDHhKo559L35q3tXG8oqxKGfzLZZ3X4Py96CnP2u48TVQnhBM1BThpf6XiZ4bpMyuhkYuQTZTXNpzP7",
  "key12": "3ckAK3rjtBFGt6cXBk8gRA291szUmDtAd6rJwqEY1fcmcLZ4oyCCCYijuVnfwq9bXQkczCY3rNb8SAV2FV8eekig",
  "key13": "2eRh3TC8E5YqNW4ckJ8t7L9zZpQZN9FzkTfRzio6QjZTeaVeFq5p69aHZwA2RWUci81zyKM7rTXVfwrencvVA8B5",
  "key14": "4bpVpY9LGt5pRcnHtisgW3p1wv7HZnJPpP1Sv7wExqWbKzbXzAWxyiSHCuMgmpWnUU9rD3L5mFiHfc15xthrE6H5",
  "key15": "5s11jmrm3LCVhWfsV1Af69d1w9sKFQmSqPKTiWmB9A1CFg68vYD7wquJ5h5i7t5B2oPCtoFWZU8pdeGzaaS857nx",
  "key16": "5b9qTL5be2WdVsaTB3ypYFuR5REjQCxX8jTpLpi32CcV2JufwVhXJq4VAWdPKUK5qDW6b1Z6MgL5A9gKJLJCwCZQ",
  "key17": "2bwDWA1qvqRUFgeXGEJh39qiAnL4BDqoxwFbQEtq6onsv7houwT43Gwxkrjx8DAPuLyuX8JxjMG5qjPjGtLjaiM3",
  "key18": "5T2Wthw8qLjhK9npCAgYFT1F9itwXf3kwkHuM9SDJeyABNPJsf8w8ysehZDZV79V9cndKRkKtvNBemT454F91kCX",
  "key19": "7Wsh8n2F5WPpgfAANDiQHbmvkX8TnXJ2DsXdZ4XZTEzsYNyZdEeHPEaor76atMmkSUoTxr5LEGs2f3hKY9tWeYg",
  "key20": "fZuiGka53b2us596feVfTmcaxRWnawfd4fFDtmqgLNEsLNSr1RUMQsQ582NKPRKF24sWGJUDW6j1gXhnngRuYJJ",
  "key21": "5zoWPD6MKV7GNJK9U4yywnNM6EYiEGeez3WixETbXhPs66ySrZyRxvBoz9xXToyZeie2yf5AYAXxwdQUVbK3aeTe",
  "key22": "4h5ZqnKNhAFrY2rrTCBSyfQj3XhuGRSptrvRVHJbCTFmQDiAfgynaxC6MmiJK2WXdafZWnkpo7R6884KKGTpMqJk",
  "key23": "47ighUnj92G74K1CreJMz9FDULT6X65hK2a6m6bomofGpBimNheyjwttSBoiywY9GEXYuNdrR5FUX3iqVqyC8dD9",
  "key24": "2dp4i612E76S2Bi8xVKEueadT1KDk4XiPCmW1XaPUkTVPUrEC26ka6VNGskoDUQZ7nWKeRKi1QnmEEVdTGQy7etp",
  "key25": "3mtRxVQFKNZN73PP7pVzLNjE9DPWvyJRMR59YxNxu5LHoepcpNaKycJpQPq75SpdN1SP4kVwSpGa93KFRd8kHPkc",
  "key26": "2q6URsqXdBtUZkaviTWg6iRLfV8bTeZ9JcUsjQZJV9FfUV5Tu2e1g99GRai7aeJnwCnsHk1CJb4iwbKPxK6FbvfT",
  "key27": "26VTtEWzQjsgX6ccfFk8mg3kiQZu7Ag4omHVFa1kJX3hri7Fy8H5GTxB32YLuHLsFrD877iuU9dWqRYQCzmLyzRP",
  "key28": "5rFUw4xcaBLw59Q8xBYZcoGspyVR4TWEoPHuNie5SNvSSKhzCc9H3eEcNgoqgSyhR5bkX53npvxAWoM6b8y6uZZD",
  "key29": "5EYtWTnyFPPywBTt9Bkj4tnseWyjL8xEwRYwU72NmJsAnQ451rhUD4k8ogBdnmbPCz4U9RpqJqmWTzg6gyKRxbXa",
  "key30": "475hvLJUHhy7RUFLjgC4taVv1oAhFeELk75aVwXoBY9pi8QoFX2iEGqSH1A6pJgCR9ZmfmT2Fp9uwtNpoYXh67RT",
  "key31": "2fp77fTs4AycbQ1QHe9cnYfWCKrSwU5Ltj9APwhQv9tBrSJBEUdTSWQv9EQ2fc4PQ57HnVvLFjNpEbw4Vn8N3EMv",
  "key32": "2tUxmsd4UipZe9E3bXAMCfL67hpkwgTcvXePrd4aiFX8oy9ZrmVS9Yqkf55RwLPEfStdHp5YcWD6ZGspQoxqKJAp",
  "key33": "41HWbmg77rB5FLbsyGAEwBEY5oi23sNfAqzATxRAtF5cRMECQAm6NKJeBtdKNNYLAQ7wckdAoCaqhct58jhTX11g",
  "key34": "3vUHhSTe63TJm9sJ1pqCZfCvcish5icUq9BNBraR23ig2AMTSHg5kVYBKGPdZJ4poTFfgZuAmsRvz1R7rZnC7mQH",
  "key35": "3xRq1mLYeWka1SKPqLN8HEsqpqnzt5WmDfzaSuv29iWrKgL5wj1Zvhob1MC3wQDU2jg8AjmQwNbJUjc2F7mQzwTu",
  "key36": "gp5Ex34EAoDEn5cUTHV18XqgDEQzhWBJxrUzcqSEZCGY19suXtqPffjPi4fE8qeb3cWBLJ6jq8VED1BS8QetVcZ",
  "key37": "S1Acz87dhnc3hqj66owAV2PWaUqzVPUWfaRxAXobxxAwVmeYNQFBZ7WySJ5MyQgWMYTPt6Q9XBq6oXnSJs1PiK4",
  "key38": "3RWyXAmFR9oQ7u4dXkumUbxgT5eaNCPrvcn2ooeQAPSXXq6d893PTqjXpg6GWVnTBzfATZnwf7cmyZqQGsUsRULk"
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
