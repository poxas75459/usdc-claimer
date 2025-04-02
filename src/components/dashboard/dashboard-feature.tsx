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
    "67hQTjZKZGePLrHsT1TQdUinf9h9S1s1burpJtqQ6AoQM9rPu9NyCDuLga7jTregGPTDrknWee5Lbu96nQkwKB7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HP8ggRuz3MYTeCat3D22QTdu33MKfknQHcwgtBTJTEScd6FXkt7VbnZksMDh1yCoE4oTFoG6NYuuJfvoHUiX1rm",
  "key1": "4w4Sp4yYjjBfMohy7rdSPDBBEaaaXpMeGaz1VbvFxetauDYTAJVXfNVttKYkdJBWnnbkGiNL8mCoU3cmZj2e3uTf",
  "key2": "4zc2TJaKyGFsAgdhvdxBEhXU6eTx43BHjKZSuDmBfMycG1JNuQWNLcrha2ihyqGLLziX3uYQvX7PTRLomcQoRzq1",
  "key3": "3RgKUpcw92VxEh53L1E3iseuEp41Ljv4EMpViMsJAHTn4rGBecyTZ3ihTPvBhZJyGuK4JA1gtXSRdvjRCrPxwhya",
  "key4": "5LyvHRBTyUuo63f5bPEy4sWw3f6oz4GznxpifCu953z9hT5Kg4XWrGt9JR6AEAGyVa5T7FCUZLLyoa3DpFwftCoL",
  "key5": "4quQo1gE5T4Zn6DhtgsxAcqXArtUGbsGfFbUL8ti6XfiwPpVCHkGo76v3CWQFsSw5rVN1xkwPq37yCDmduRFKAtA",
  "key6": "3Y5rs13s3u2yB6frndtxKiUngvoWnYrwP3qgFsqWCsURVq4vXnQ1WfYjGj8ab8S5FXooDuo9ZFLC9qpoPLATzTX4",
  "key7": "t8uWC6rcEzQqjcF9zLim5M1G9nF5vDrZSbAPapAuASi6RkTqsNebzhpj8DxV85yaTnaCEphMTzC85aSjEsMBNbH",
  "key8": "41F47NbcnEodsCfJMyHAEQKA9KAY7cSpNjSvwpfiG42hpRd1nDzkf412MmVXJUo4m7mxvN3zNhpMK5Sgooj4TuQZ",
  "key9": "EKQ7LRqPf1Pf4mmjWz6zHSNqHChvE3qt9CerkcULyuWRA1mT1iq2oAgRE4A29azh7mdJqvFsFsjydcQYmUm6JRn",
  "key10": "3XTvrmg961YjAaEzXotVK3f6mL36tBcnwkVQ8ztpoGPgbqYmzCZzi1kkKyqiatnRxK6KqfuqB52TzWHPngAWNF36",
  "key11": "55t6k9EzjY3NMVfjATXDj4LYD1USBCv5WhHch3x9atesW83DF13dYPFARRcFYDRt9RN8cfnp54dz2xQnnpyzNEve",
  "key12": "U2fZtuQe78irCi88ABpCn9ePfL2HJQvEpGjkHdM1N6vmYdTdbkCGoAZDEa6UjE3F2XJbFDTc78CTtAtSjThVLgr",
  "key13": "9RM9SRrQQSaJuh1U3SwJijxW7h86ZFMBQ3GECekg9pkFPukAqruhbt7ABc4CcsJyepmaPmbZGBS5dR1BJ6xxGmA",
  "key14": "5kKwgpvdj1kXTyrS7o79fgmK6REMa5RMna39f3VuKFHy6CLsvHze3yew5ydYEtSyEc2AxudxgNQP22cdpT2VKQJo",
  "key15": "4v5RhFtYRR1mzVdwetmXTYfmTrH7JnsXhUEy2oKufjTSrXrAi71WPULjnoGxUvinET8ZjpZwkUakEWK1ggKLHECs",
  "key16": "5NLjJsSUYH858kwEBsDuhVaHZk4CeB2xvBgjxxeqES76gBb55LFxgHvCGyjpzRb8Pbq85yBaTxEtPzbYRZRA49sQ",
  "key17": "4LxEw2yDVs4EcW1GYtuL3iHtUzwvQgjDHKQp1ixLc59mcEyt3r7UNtuPCvDJqxKzKuXDBXQ6whRVhNch9z8hSVLh",
  "key18": "cjj17AwQh7fvExCeZL9Zkk2X4WAu796mtqaGPaeTNBvc7UfP73trQgdEaXGhp8kP1emde4EXaTeAANB3Q7Jw8aG",
  "key19": "5PcEjm13Cm9okW2552XxHhBHvXLbmaYH3xcmAs6oCsWMLjMmaHXMR6qErKrcBQygCVoim1UniuWvcru9RdhEAKSV",
  "key20": "3ZtuGJu2ids6vaxiBGzuyBk27WMZ95QjyfHJmhgBR741Xb2FQk1xr8eGbzeWTTZaYjQAfw1H1N5TYsgYv2M3hieF",
  "key21": "41anTj9jNp8BbZFB4TSvB7ks6o4AmzLk3tPhPAt186tNKAMt8VsCA85vNjioBxr8AnkHwo7zaEaxzZ1wx5ffqgPg",
  "key22": "gHkCQVuuajmB36BeyeCuFf93zZgu1qjGwLYnB5ZN2zSNdE8nJeJnJjveQiaQ53ZgLh3eTwypHHD2nYAvSAZa9LP",
  "key23": "41S2DvL1BQKXU7pTNY4ZVirNzG5LjupHExfkj6JZCF52B3JRn75sWABJsSxcZ1RJZGhG7N9ym2bhDrjrr45Nt3mY",
  "key24": "bcyZv842FJ5kenbUXpBn8MjngjNrvHiZL4eSk2fawW4oZtML4DhmTP2HADvEuFQQu5GA3yhwA62xTUcjrs9uemc",
  "key25": "TY8n67nWN4SXpbaHQkZMACn1UfW1edtoGnefrxYTbaBazDC1XWajGY9iZP77Tj6aFdcXeWzoGJUUwDG1r73PYz8",
  "key26": "46WsmsYdtGeAVZHXbPKW4cxUSeuLKvBAZ26xxWpH7XKzvozbhH3gseZ343JHSWG4M7cGQ3XvFpSNmm27gVKCVHnB",
  "key27": "3h3mtXDL8cqVw3VHTaYURhb2f3dMEjN39TsvH2ZYnkQQawwZ2uPMVFP9LfMArwZsQaXVnKPYAYLySzoGuTcYZKnE",
  "key28": "5ZsV5sisHrAeaGZx4koUvP2AfphxzbGcBNqnHfQPWx2c4dmG8akF2Z4DAtRdjtHRWohM9QpQFrHN5mstc7rawGgz",
  "key29": "5CBXhpb1TUciheLnub78VNKiV1rdQVnM8bYBwCHVtb4fTBiwpyhyq2jQjY3yF2ZstDWRUCmGbUnavgh9a8BREksH",
  "key30": "5rqvqJzi2HBZ4tZq2SjN9V4RSGLg7f8WVXphXdBcFCgE5pYpBvAyUdvDCbjGKoRT3oH7McC2ustVBv6UUfAE3rQv",
  "key31": "2VQbPjQNtqHRmMaxmFkvHoxRSQeoCddZ6jvEUVCBmt4ovPdeYxF7TjNf3awLkSQZoLfzF3AWaF6Y7CabBWxh31mL",
  "key32": "37D6yPUQ8zMLsSHmD9TZrmy7aeJvt3iezNddAhh5zLqGsJsn88RajRv1L6k977iMtfLwfEkiuvswJqwmyg5wor8c",
  "key33": "r79rFZU1uMeXhSoeFe9mgDuhd9M5aorsoV2mHgwHUqnxKHrJcjV9hjw8oNKKe9sH6XWrHNhBA4CtTW1dsRJiuDn"
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
