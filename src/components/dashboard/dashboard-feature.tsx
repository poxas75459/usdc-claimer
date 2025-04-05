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
    "ZsfYjE6rrC7HgBT2zHKJoAtyHzMdNwRruRQpda5s4CUK1NtXVQB6AMy47J8g3pniJ5FVp39D9uaZbbRyxMVHN93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUqqj4wwqzB1TBsi13t1851XwaA2KGSP9tnBz65iMCYPhTNvav3w55GEw2V69nVrM5H6T1G1MQghPivvyx96XDn",
  "key1": "9pJxMjrMWZtAAaCcq7a5tpDZEEUPtxLJj86VwC8UR8oZzbFiRzD88KGkkf5N8HMS3Mu4XrK1o1F81vGVNDg2D9o",
  "key2": "4xqCint2MMAzrG3vUdEefQTLLAetL6qqECgpQfzBe5ESQvdJpK9w9NE957QDtqjwB9Ke3PkJo3ykxydnESp2hGuS",
  "key3": "3QjE9Es2dkGhDtN72HFhCJyGAdxoh11JderDkn1FMuWf6mRjxCwVgSK32GckQAFny9ePsK37ZiRoz1PfYvYb27mY",
  "key4": "2M5CRoWvqkMqzbNBXSmUxBZmFLnXZ6uUappEhe2ayzVfudmwyUMqgsq1jr5FjNqQ3y61xNfVmRow62MVm2cSHtpH",
  "key5": "3vEYBXRm2Pj9xhpoHC4zvRXLrWHtoqLwNgfpHKLoTELtgucwunBC7T3o8AsWCjPKxAKuum48nqb81yTieRaavtuY",
  "key6": "2mhfjwuwbVBeWSfU11eKURFUbKETTUytDQqt6SAunVQxW9cHVZWPMwdeuCQAYZDZDwEAFaQAyeGaCHhz17Fb2VnY",
  "key7": "395W42rDcx3rogHbedynjVCyxj8evjnuTRoA6x3fyGb9pjBtwRF6mM2PVeWQ7xgFNY7BoRGZSyvuRzMxQ4aydyqg",
  "key8": "66FBz2yAR8oEuNmLr8kL5CAMFMwAuo2MyCdpZQh2AGvUSBXcHk9zWeewBYehRfQq1eZFBc891sG9XCcpM6HSsPP1",
  "key9": "d9aTz3ozDn6qWf3RjB6jCZ47BxXo4inuT9noJv3BfqHmJs9h4pC3LLcGu7fXA9QEPrh5WbSsUrLxVPxcoXrswgK",
  "key10": "3GxjxxixEyGNgdsPU47o9aEAczGJF4n56PANHotWs9hmVWSKg9tYtR7nLRP5tfvqtwrSZgUyWH7xn7jRTmtbVgRH",
  "key11": "RVieXFrW4RFhThjEK1dgL2vFe5VL81UKZYZuf4WGgVWS2VMMBjXiRnZE5LLaWJqL3sGVJLQK6xcTTDsffVZmsBw",
  "key12": "2mBqgamu35DYbLMdh6yaNbs2roAkMyngy1wWvJD5YeTbijrxnEuqPjC4TZZWbS2uqyYR452qzCug7d8V5dqyojZC",
  "key13": "65v821RF4kg5U69YuYu4CVZLMuzBNiXWGA1gYbUSYfRhuyzSYbst1etct6vPtg8gozDgGV1NaAV9EfvhsQwQG7Hj",
  "key14": "2UFKtUU25aFfu6C39HmAzcB7JWWcWfWQkVkmeq5pMM73y1hLXhZzzFoKXQ5L4CdKA9jRags1DF5Mb5Tj8yfkiTCb",
  "key15": "2vgWazPwpH8Do7uVZzENwDW2ErsFMqc2miSybsDTr68quJCQ7bS9UhFySfXXb7Fpr7HsidtKxo6PoAYrNBwzEBJL",
  "key16": "5Gd51VT3DzLVR7tS22oK8dnPA8CQnityfprYXtPiyuDbRRr6BKj7XxN6Rh4DoGr6yLcHeRv5cFCxZWNRpvGzbvu4",
  "key17": "2psTi8DZDnZZ4zXVJDQSBuAD9ppTHhqyNoLzS9no1E7J84rJLx7p7po3TZfdU5GR6EdZTn8JtoGLAnBcJxfZ6x2h",
  "key18": "CVcroUiZFpwv65v5AVgUguhcf2HXBbv1W6wLc9VY873YmJb5Z3goxDragCtp1CjTK15iDrRXg8vuqnPnMEnQB7M",
  "key19": "48Kym7DUfjjk3iJn6ZGCH6RpRP6XrZqDdsMQSkjgsgUD4DjNALyBhkAwacxaf7jsvc5nMfKasy8osR6h1bV3MBu",
  "key20": "38BP5x2wvvH5D9i3S1TVvA1W7WT1MJajeKydmSyrfBAgdcMZ6D9rkiMwcfqyxpYBhfEFqnsRjXZiuoC5wt4jNvuD",
  "key21": "4nBpQ5E8h71hPNyZoG4YxQi1n2pE7VFBS8anWKvFL8pVpfdnnXUdQ63DFd4ok43iz5GTJYvRyv9Nj38ynQnJdtiW",
  "key22": "4ug9pCbN1L3L1gVgaP7YfJ56dojKa6WvQbKDRsrXCQW3EFdcqq3cDEjqyueyh389VZrX6eNgVan5zBXbowykbEKG",
  "key23": "4zGXqCGNWTn9qU8ntdZbXHYrt7ASQ4k2dikBQrVg5R6WfdJFQfaN1CEbLrVRDuuABeckbV1CjfNDHDSVPArAUWAL",
  "key24": "ZXiu5pbaQAAXaQDgb54JkzpzEfaorKrMMGQRiGagPBnQb26jT56DZ7XkDAGkem4PhSCVqyZF4rfCiE2hT6BjNoS",
  "key25": "5HZd4Ue8jeGsEAfgXjgCtmnSEsaMG3VN9gJhWAvgpdetNbavL2a1wqRZvp8JcpbnwJVRnhRGtvR7nVDNMn4p8TdT",
  "key26": "3VoWLzAgzXYLCXHRugBYidQ6GmfZf9n9onCNuSBmqUn3Wcn6Gctxy13EcLyo6kd28zM1TiRL7ZwQoJNSNn4q7kBW"
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
