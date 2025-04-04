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
    "5tvQnWxW21N4aSkGtyfnR85Y7oK41Bz1fFt2ELcKpWJg9JhFJm9tKJY1iZCCy6ieAakJ1zzszKzra1JPwzCtponi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTmQDd4GfPEWZNi8n7EpK2VDRtiqWwUgV5TnaPnMGQdF9EcULu9MGEqh7Zykj4aEembTheZA6KpEq962rXX82TE",
  "key1": "2Tn2Sx3GAeFLyYfEdUpzstrkifEF3qV5UHHr9soSSTUtupEvXwMyeozhZ7k1bGUYZbes6S3aP3pifK96H1FbK56x",
  "key2": "3Y8HutryzgAUYjcqQ3Wd8GUoU2ddb4CSs4NLxdm3Pe2nAhTaAzR4VWAjAN57wowzqZnzYE12h7eYY3qM21ow98y5",
  "key3": "4ZrhLWrq2om9QPHNtEG3FLJddwrMnTpojbsBmuz6Z3CNmPXSjXHPSJeMWmpN7fYkqN3HKCRN87bnWYsYtEyUQdSu",
  "key4": "5oULhHs2tZc9Jw4eUx5ig9mzt9LQ8s4zDy9Bzv62wLCU2LGK6V5bMqa5asGG7qdX9DNgp77nWdJ2KjnGUo2WJ6kG",
  "key5": "3weUiDK9CeK9VLKGR6PyjQtkcUvDkBYB9tgZJC4wyTFvivZWghg1uG3gMZ2G8ShEt79pAtRArgaqTPPCRusZTY3e",
  "key6": "4YxpBW4JJNPf47VYdFRJD88866bEZuEpSPyhho4u3xNVuDtVm7NHYp1WfqJqRJk2Y62PHwWhc9APYSyUyxz8AydW",
  "key7": "5Lmvcmm5pT3N3xxMQJDSWX5896MAhw24YkDzfeWfVgdG1TaA9DDZvFqwsmWbYX7cUfBkzVHwHzUUgvHxcKpWisiA",
  "key8": "2gQbJWSx9dhaomX1VdymNj7zCYQxb3ut4AChjVWhGoe8SxJUjUmmn7ZRonTUbLHtN4DxACZ3YtgQuHmj5cdHXiaz",
  "key9": "3wtX2yV72ffyv8815LUq6vyqkvDGVTgkbHuFZUjQqgnUC6AALmHy2mXuYGpPSK8apyFo8a15UNbNNh4o8TuGDVWQ",
  "key10": "5rH5cXtmfg3DzrkhqvpP3y3zfSNj8tXfW4jgHq7bnPTM2SiPTKQMHmYFioqb998tnNFGbBP4Q4TS142RfdWigpMK",
  "key11": "3D1cXXvFAZeFrbKd7cAqAKV1s3vUXnCRS7E9tngBcEeDH6Ys72vjFiFAtPHgwJBRwEW3ZUbNB7ieZ7k8W11UUVyZ",
  "key12": "2T8krapkoCCh73Cvm8yKJyLtnpakFSVJyet6MYxBWCtnVCAQwmqsBY5q43qa9GAaxwiERfbiK2EGLaqh8p8rEUZW",
  "key13": "5sQsoEMTnZ6euXw6FqarYKycp4aNZiFxTfQSkF6Ce96maoecRSpZT3HbvBaz2rHEN7U2tVc9vM1CyYrxjWgLC8A3",
  "key14": "4T5Aw7gikcL2yqkRJVvhqag3hH6uvsWtxHwnX3oXxo1Cdex3oEEmXDmoWvdZDDcHFJHwgKZt6vJ9Ct586KMhFxrw",
  "key15": "5NGcQpa3co6r5Wk8qpDFEzyRyFMmzhkZEfsZAXFfpFsGRqvGXv5J3upQXxKXEVLzwg3dU7vJoq1a6aTMihu4idXu",
  "key16": "24U8jK4Z8BGE322u4gTv716zEtbPMj37ngj2AVzUMmMBhrgwurtMFgY7QRaDyG6W4eMjNne6Yf9ovUA8xb4Q9onJ",
  "key17": "FiF5pA8R9tUCX9h479rZLaRLMNSwZVcSio2UYpyex9Zu8AZtRDVqzUHbLSGcG8FdPEjctGCy1E5HLvpcgtabhM7",
  "key18": "27Rn3pUGNKJ8HLFaEAcMt7dExWGr2ZogwKsaTSHXGjwakGefSAfPHam291XL56o3hEb7iAeB16YuV9V4gYUAioaT",
  "key19": "3b9KUu8G6vr4X3oZNTxt35ihv7wXtKnxETj8GNtoMz5rzBKhDmGZ9qDwq96E9uSD2Nnf8MpVtyvwKXj5aAPX3cet",
  "key20": "61TjgTHNkHs18VkEgseDP8XqLo566kxmG1A48QC5kHXxoakRcP7yy1ASb2F5qwwkagAWPbe46Xj6cvMrjnsx3XQX",
  "key21": "2C4qZv4bn5zeyF39WUwTB1eUFLcRq1dTYpx8VPiX8VZMLNQ21rdptPCSziQLcSqdFFY7NwMKFoW2WFz8cmSSBXoW",
  "key22": "KLMUexAvAXZUHoZq2RPWXKLw6HoBBNTMJcH8fZ5Qxa8YxqWQvwuWGiywtS7s5yFMq7qHw8wpZAmPAqHkW6sNpUJ",
  "key23": "4u7i3uXPngHeFDPPd3n3X8ssgzfqr1RWK2hGqhfhYnD6XEBwLi1Xoh9bP1SXgXpHAAdxuZ6n72RQkpz43L2iSi3Y",
  "key24": "X8mik6MzvamqE5mHtyMHF1kojsuCuN7D46hSmnG8Ww3ZzrdAJff4YxN47vcyN9XiZR38y1CNM1t7eV3jZucsgmB",
  "key25": "2NzJ54j4upbQbyA1QReUWFPyDW79AWzPjpZ7s7emBRFG5ufHxT6Rc4B5ghyhvp2e7jB2NqnBC3VdePkQGW4VFqEr"
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
