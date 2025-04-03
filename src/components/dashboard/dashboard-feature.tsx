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
    "UQMns6biWbw3Uk2FCY1teKmdNLJyAL4xRRc14pvHJxNr3HxmPgNSXMS2V3CSu4tjLkSWujVFpHZ7Hyfd7YCDuoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHixizYWX7duysrSX53jVwvhvXDkKPWJxHFPHKKghSeMDc7prEe5noyZWegy1yEiXq3grLAYYXyhHmL5MrQcBUZ",
  "key1": "2xvNN41TAvVB928rf6NraVpkDkowTobRPhbc59RUhuvd6ARmE5gEaxm4tHuAXrafPNb9vMiqbFirRKGyxmpY9yuM",
  "key2": "4A1AzpZHCUFeruFR3xbJWPEJ3pYc5baKpXEBqCU4NNyeCcbqvp41nuDQzkJhSEffwuhVkgTY6aetPEMQY2u4SAr8",
  "key3": "3s3SWaDCo9aFm6iut2E13DEPoAwngRGfEyMoZit1yuy1qPnpZKX1zCQEXfva2crEow1MpdocxZ2HYENeW9QeYUxn",
  "key4": "oDJLw8tG9wcPb5UoLpgpJu6ogNbj8shdi331BUsabhek8akowrVBh5YtAi5ciy4ikXvjKxx2LJdKgHzBd2EsTek",
  "key5": "3uRaWpGM4mYvnzhJef2Tjh9nJ6uYu6W1AXCyFWZ3DQt1XjBxX1G5oWPWBp6DABEnnVLavG8jSXRWCMdaPEr5yH4S",
  "key6": "5PcUzsD6r4qvztXukkkVWaJhVCa2FL38w9q4Z3vgo85JYad2KD8vj6g9WzpqRyUS3633P5EsdV8q61tSfu8m9FNg",
  "key7": "7oy6SoqUTJ6zz7bPRAvpJ57Y5f3iL4d8h8kdpkMfVeN2SS3YgBmrFEamncrVa3YC1qMf4MvbRixXVtgtnPAY6sg",
  "key8": "443Mop9BfuQaQLWsYr6meyzBXLthew8c4rup44LWRksJ9LW4DHV65XkYZzvpjsreUQHyxbAnq99C56HSdAtXsjQa",
  "key9": "3CdpHGkfhZGcXYUQPtuK5kzEtWKx89cFXqJ8xqJwXczkCz9yzkuZ5owgKBtXmt7B9N8vGgAvB4EbdAYz8q3eiGXo",
  "key10": "8UasSRD6a1bk5bDkKVTsKNmiyEU542fKgjHBo9GbhfrdaatRy8NQDrBYKor3kKXHuk6oB6zQfvzmwVqeb4aXeoq",
  "key11": "51U9qnfq2bS9DjuGH8Sb76S3BvWQgwkTXsZG8aDCBf5LYBqFroRMy5cHMYkYYsMxyzW55sLX9mvH17Ha43eNjv7n",
  "key12": "65EqyLusCPZmQQf3twTqjiSzty2jRoMPnduWt7Zh6HeZNJptkmQBbKvyNo9mhtWTGS5TAzUtEVbVXKbcBNtBzHZZ",
  "key13": "2nHZU6JNXd1gCVCSm91HqpAFbayrxgf5eMHQL1p5xir7KJujxGoShZ7xggXFucQHpqiutrAxTuED77yGBugBwdsc",
  "key14": "5wdfhibSFAwVveTA5n8fBjRzAA4P9CTw9T6gZZtkGUsRc8znyoTGnsukX9R1csYN3ddGamUrrQ7AsLR2Rb3i9YnA",
  "key15": "4bn1QcJkw7RFUNsz2VU8WRN35E9WsV71nCBveTXKWyDwva7HdqYYnVnHWRNf6uGKUVUqs9oJpA3r7mEbHgusYpwL",
  "key16": "3aQ3772S94VH29NRxCRm6cRkHEHvpBKZMwr11bhqQxnT3HXAwRiRn17YHgBCSLYuWBFD4K7kGmAqXGvSD5b7YoYV",
  "key17": "3S2XkPkFVRyPaJsfYQBaWGBUPxGz5g5ioMFtdtALmjkzSonBD2657ztbrgTQvELUFYPd65AzDpfW8r8Bjf8rr18i",
  "key18": "zfVHm4SbNjsyFxjgH46RiNAVroTRi5DSj2mLVrczwojdR51sg18ayCZpLdqQhk99kEj1Wrp63fgZCFFeogjUDV1",
  "key19": "eAXvvyhJft3KtvQtUenCN3WB9iDdVUumxgghDwgh1tYv1LnJUD1ZV94tbkgobuaJjw3qastJU1AfXj3m86ef6Yh",
  "key20": "58AM5AJ237fRgrtCMweJjAHYrUWtBAxXQLyP8QBSk1mdtY4iaH9FKV5i5ueGskejCAPykgAqZihYVHM5Leo5fDJ8",
  "key21": "3MhBMfGe7csmdVGhxKdvSZNJY4vc2ink8Q2Q5asNtYHrj3hR8Zty26woz6REt7np1ueSQbpZ32BY89NK8C6PsV94",
  "key22": "3Lx57LGy5gCfVepqwCbs8w7GbA3X6gYdhEhrApfsh538f7DGASuMqpTL1Q3n4tWKexar4F6e4b7QpiJ4WHNKun4z",
  "key23": "386u1ZorGcv7SPZnkrsySXkveoZCaP9zot4WsAbiPZr6VthHesYFtvsn5CWzgrDhfKhW8A8voxurn5Ue9BVAww2A",
  "key24": "3VGrYNn4a8kLry8E7LuasoaSSTcHvVnoznEVm8ma1czmqpRUGKqSvAL4oQKDmseaGxM5b7fM5AF2iwsub6eiNMie",
  "key25": "zWrjAs7rSBgENNhnT44mC4RYcHgDgndZSHmMpeMj4JA6yaBoeJZ4k6JxnrfXQmsTRHtM4yEqt58d5a6y4w5QTaQ",
  "key26": "31gzRN76B4dcRonL1UcxhJDk3qFAE5JnaQN4VFfQMBSBkxK3u1Ncpf3LFPbFq6dR1KGcYE9Gn5XJDPQpSr3aJRFD",
  "key27": "5oPTkut9nhpvzGseK65KC6m7aUZAYNVStSifyMt4zgfjTnhESEsBgFTzYDkJbuwDz8vHGRXh913VGAPjv3BbFPfR",
  "key28": "4gJetRith8eZpWV7JMGUF9ap3n6QgfskXF5GgaGyET64UsDi84SRU92BCeeSWpKdVRqgwb5Tahhqy7fK3TpufZZr",
  "key29": "8mWDHf1QnvFettDeEFVY64GW86nRhEAGSnSQEfdJLrAByUbjVSiRyaxQhMFjk7H6cL4p7hQvdZyXhkL98q8T55F"
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
