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
    "3LieyqnQX9NkuGYDkcbmu6j7dQx4fEKARJ3MvhNvTnzETdFJynsXxoTYDMFRU8Yhppxtt4aJDUKtUcNDdjyPz2Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VEu2g7iCj9FA5wuP5LgBpSii5gPJQJWYE84CmnoUJ8R9chLrF3ehZYfBeNyaLsP59byZEP7d2jSdxwdCcNpkhpd",
  "key1": "3ZqcY37SuEbKF1RL8PBJ8eBPaBV5idymgtmWva1tCwby8dk3UdwvUT4uXHHWLL666JPugF8nwGpHsvMXf6EmEqUe",
  "key2": "5Bp8CLRcAKwSphJzt8FAUrrDgw4tLDdv5nAAJ3nURzZUj5DX29axRiDzQe7NQGsyzMgL9DRJfA4ZY7VNfd6Yi8f4",
  "key3": "3cBrp2B2YpNPwUhRusCKM4ukiYsEdCgPrq5hFC7jgDjqtpiWvkTXBFGNNq1HdACiaDuK9fCJLs16EJ3JjjirL1UY",
  "key4": "579iC6LoirRWg33niywbUagafGz1VDzqTXfe1rywBPnZZtUKat63oxNTi7gHSBg5wumVctw8dvfEULRpH1dJpyqJ",
  "key5": "29biniNv6dFZL4dqi9bk8nrHfvcXnGBzKAKpL6yhVFN2GGnSr9ZhrRE57ViiHM4ZGMV1zAhzqVGEMRwCEZT7HkBj",
  "key6": "5hyiiujacpVg1BbDi6Gwcr8kgfuyoci4sfQ2BNLv2sftLeYf5oyZwqwTAmkyQEfV3hmyUU4t24W2s36hSDMwCQQo",
  "key7": "3HNL9sRnbbvW9HewtoVDrx1ZquPSRh7EQ9nsXSEv5qqE5V3FvefhUbdeUsdn3xcRkskVZahtrJMz1cs3XSb5xjgB",
  "key8": "2jxGnyEuthkq4naxMibLmGXmY4o2uQk59B1wGv28gGAu3WSCrmzG51jLr8iBtL6ZwhL5edRjkeP4vuykZaFN9ybQ",
  "key9": "wLXmZ4vZbt59YgaP4bKcsWFK1VXRmmzPzAv35q1KSrvBSDHHv7RWEaYGu1b9FnK6Fwvcxm2bKPQV1B48caWUkPj",
  "key10": "4oc6GVEruEXKf2Aq2ccnTrNT14RBMSj3i4pJffrAB8HDUCCTL3nZHFGGZUopPx2qRvycPK3HP9bsaHjArQeNNECS",
  "key11": "4oBz46Z8VKPtq9m1jZDJHCLYGTu4BG2vxJrUt99mysLAT9PUHwiKFaWws5CvYUgxYmr3qKnYkFCtA5DbYFjvETZv",
  "key12": "21sejrmMaTT491i5FxALaPF3qiZN1m6SbWpQmTRLNc1CwzAmB26mVtMDtAinnG9TfQGfgDZGMhSvs6FwxcVSwp3j",
  "key13": "3wgGvVMMRix3eUF4LAxKwCurwzrRFRLA5ohpF9sYzTzdrfNU1Q1L6qwnAUchr34QXztozKkbPyhzfxZ5J8ZVQHsL",
  "key14": "4wRwtAWS5iEtckVTu5BcK6jH22KmCAzoCZA3EohnDt3ur4YFy6x6Bm8583HGU7Sjf1PqXj3vWCgucSM5m1nwHAVn",
  "key15": "2eqAaUuLK2RrZFH3Xhc1btZuKhhNGxbGBLy97CwDNBww6QzCr8BiKCfeEwB8Kc2WEHhf1HrGdH5N9g2yhTKXKqR1",
  "key16": "3UssiAyM4qPSLZRrmsYtEDJcJqvwwPNe6AWfMahEAxX4Qo6bxukWZDVbeAGYSanLXiD7VLYQiYmvcnSieU7NdF9d",
  "key17": "4z9qjwfSPLnFK3vYb4Nc1mAbXuNChpNqTgMEjbPrQqDpuKGoGi27VefGg8n1Q94u2eoqHXkPkk2Rezxr2SWP52Zd",
  "key18": "jRxM9e5RPCyB36HruER2483krCRFFFXntYiwBiMUtKiwuL3eNuSMqWsrZ96EQvh3n4kcmPLiVZhmosB56ccuJ74",
  "key19": "65qycF7asaK4M4SutUMmg5bMkiKdABHzoXyvN1xx9m72zSySq59KCfqu8jP1tcB7heWuC8BrmCmHGXmDnRpeCY8c",
  "key20": "5jyP7cS3bTgjfToWufGZjj21xPbyUdzJWf6i31wZmfJ9bzho6TneGRU8EveoiVbhDUJcVNwTW6ZPnx43i6gjhP8Y",
  "key21": "2vaTpcdd7MMjNnh6STfe9VHm7etfu9wsPnHFRDqxCzj18jP3e7a379baq3cNKvZUpvN4xVbCqoEprtZ2HyJ3Pxmf",
  "key22": "3cZVBwMKfbftx56P5g5ghfvN8XX1sB2cyuELWF9R3WstkWU6aiZ4DfaDx14aR7UWnTypgkmgcuk7zh3QshnW2mqh",
  "key23": "49Wcubr2CnQu6GALNKSAfirmb8cfdgap2o4a3RfdcLatrbnAeQBfZbbXJG6NVNPcEXfF76Syr9jx6vpT3iNq3LKY",
  "key24": "4418Y63Pi1yuL5aTX9zcjQauatCK5FkdJ6wyvZD3xu3ujMqrRhBZi6BH48nbKaVHK9Zbwnh9K7hREVHfGkfeXjqn",
  "key25": "5YUJoixoBASRV4UZZRtgRBhPR1yGYeBfhxP7zD2oogys6uTqyW1mKay9Py1LYAsnbNXAw8JYLJpRuXjLpdLJ6dXm",
  "key26": "5C6CBsX7JSZA7is664rkmHsN3yH43nmqiaydu1qtghFW5nKLavqgGW9gzfg2pdux7Zm42TdAWuSv4b1pKKKeXba4",
  "key27": "2uFT8hCjnG2x2Pa24aWdiVNvGfWdF6amjQYDS4mmLTZTBviLdpw796wpvqSNWtG91tzM8ZiBV7675XyE57HhFSNi",
  "key28": "3TgV6fsvxD6qA4VJPHauXi3Eeofmr8ckHmnGFJLKwjivvcXCYzk1QGLBor8SGnoNNnUfBvoUZbnmKiByHPnM9LVp",
  "key29": "suJw4oS56QbVGGcPTFf1rFNb57P2B97cwhEY5pDQybdKn4AH9rwyTkeBv2pTkQeA99MWGiuniAi6nk4CMPm5Qpz"
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
