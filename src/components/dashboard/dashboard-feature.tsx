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
    "no7edmL3BQG7A2iznmmnak3RobALCCnE5bZohN3vi9Pjm6LMAufwVxUakZdza7SKQ6UNDVmgbzh8Nv8FPEq2eou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UL6AMtBDErFUUZhyN36ULkBRrn5bAWu2fFgarztVK47AAuQ2aqMiLtH1KQoSDGiGqQbFHRCYHAt6npL4rdeYuf",
  "key1": "36KqccZkiGncQgGx7zXF5iPEHdDRvPo6cYxXe7eZhYq3LPJ29dowT16YW9avUsatNGUo48xXPbwu2ZJts9obEjv",
  "key2": "4r737MvUc9HfFeswEu3RKtupaUm3j6xZYzwiHrpd9g6VNSoFdgDsAg5RDZg7q5DeM1jAzEEuLrCdAexoAKTYtsjr",
  "key3": "4igFDjJdYT7Lr8ksXAekxF9fvTDw5RESA6CbnvkiFsBajrpMSHUKbjN5KYmXHgVQrwk87jSD8GFrFYS4JTLJCbSc",
  "key4": "5whVEi9gCT12Lx3tT8WZ8w49G8ji2htk2eBGJGGhniX9PmQpFDsh8cYGWPdWAAtyD9zEgNhEbdwC3njtp1evrw66",
  "key5": "5wBqo2qwgcKnzfwrjNbBYS4Hz2SjrmXkbu7xnvFtTyWhEzbe3EiGQvy2raqA9XMQAzvNH2wdUf1BCbQHsxepCgAF",
  "key6": "4ZBzbTqsK7FcnKHiVwLXxk1UKk3fQdtqKpjkSjyKfaKT6v7TAtPNdUktjbNZvKXpG7Kgb4CcdfqQmAvhMn11qWp7",
  "key7": "4nguzPfxmY48vqYioToTidyeWB6D9qCqW8NVMdu4gfXxUchyWwKiJMsiQRZZcjsqPU3SEaQTUTEdDbm4BJqjdYKN",
  "key8": "2dxTew2qP4Vf1jQkiV7WEf5FXjKFcSKr5ViwC2CPr8bdyhZvg3pvFpvpfF1sXyASwujmZ3EnukgfNhFLJAJo6SQQ",
  "key9": "4XYCQG4nHRhznY4rKwxpvAW5JBEWaYKRSbqZSCYUz3Hu4S27MBWUCQQh1HqAsJQE89kvULoxXtsAFrsUteL7qNMp",
  "key10": "5qXgPHXJdi3UcjRbxbULVoKVkCtinB7mZkdakMENhBV75GhUyeDTuNkjbsHkXXcSmkjhRTCk4uTQ3gFczrHTtBEJ",
  "key11": "zBqBNFD6MChqqGVF71XRViZv3HpBBjJBkCUpfzQTkepBDUqDfjFBPPGskKneH97trTJDGV7GWXBkF5YZvytV5jA",
  "key12": "3b9uNr2rtWu4A2Kp1HdDdtKFvgvLkpgbyoJzTQ3u1jypXcwvURhy33oPupA2Ws6prxXGyNbnR8ZSEYyczpLEtnuJ",
  "key13": "4erzMy2KzofauLrYUbYvkAVjCtKXyd27NriSZDVVfyWvKvhVETypipHjpHYA5ZhYZj8KBBoYVZzoec8Y4wUM69m5",
  "key14": "UUgPniJkeuJmeC2xmXNdMjsnavM7gskhCJECrX1fEfXxV8roD22E8ua7x4MWFk6cZqWtuhaaeick8eEEDMFbCwK",
  "key15": "5TRdomRMGTSih46MzmzuFoxJWamRUVwgjRdfZ8R629M93eUXhx8F3NSG2rvCzm8FCML1JQZf4XwSKg3VnjqeacQE",
  "key16": "5gAdHDYGF41Am1yJxy7AHmHAPLc8VHveCSJfz7xffxW69eJZiHw3acGtUBhkTWQ76GCFa7AG3TzY24i8Bi6o4JcY",
  "key17": "4YhCxzEUzgCGpYomRBeL8Epg8wkZYeYdaZkK9388Ac4HkPbqaxCdHyrnU55dH6qAUE5AVwQi6kjmLnRZnKRrv4Vo",
  "key18": "2XNUw3xdq9ATf95aBoJouXePCTuuMVYMQAaszf97rFaLvUn4eRM2Cswzirb42h97yXZuLKu3iXCp1fsjVHEptNz9",
  "key19": "4zUTE5XDxNZiAZAtSfxXjDDmbwhqZGXDmKAotZW1HHBCiwQBHZfw87ueYUBzQuAkftiHG6W1ix7ZSoFKaWwWnVqT",
  "key20": "3UFSip7PTxZpNx7KwXSYchE8UKTSsQGCTLFyS9Gj7TdwKtktXMjt7eYYCk7CHCZEodkgSmNSbW9iSVtXnArgS55f",
  "key21": "3f6u8brcdnoSrhYXVX2tDDnBpd42UUvDuLzHz7ryLvyt2ZFpbtX16Rwo6z2zQdzYNKowmLa5H6YJT261tBDfBWeY",
  "key22": "3u34x5z2CALUU9QzoA6dFFZLZwQqbyMJavzDGDCbTmLdP2mUa9geLrd5n6Xdyo1192h9KhBJdBBN2qHgc8joBPxt",
  "key23": "5KFeHT6dvbX2DPyMd2ei6FpRrzntm6S6pbLTmqzSrXDQELcC2GkZejTfUoyGaqx6vQjxCY4vUbRyg3gFUa4mwkvN",
  "key24": "3ZTgcCqhQvgWpQYewHzYkdB6R6CFNdYtP7RoRf1QiSyyRwBXsuHeWcEaF7WUFQHWQDWCSFgjoy1LuE3F5R5xrJvd",
  "key25": "4ao2FunRNzdUBtv3Jckbo17PxHWNTGteiC6ERyiv13Q5tWd2ayPU6KpwjdyvjNivnmGLL6NQDrZuR7yQZT4kYKpf",
  "key26": "3CG4rTJrWFQv5ATk2UymB4VmyHBvbhkH3h8k4CiBCbV8Uc8Y2rKYCY4dWdbAcsNy28z7iuMFfrthBz9NWumattg8",
  "key27": "54cqDd8fRrV8jYDZAbEbghNdUD9xGoo4YFLx17pkTMVHEtCUNJTAsXnFnsWG27suL9XxP8BB9AJokSKkr8d1AgLB",
  "key28": "2rFjMsJvju7TMQeEz3fJwbfYFTjYDzJtpM9JBvHPfK3GKjQJFCdnGRNyCfToW1QABtBE95CYzRq4umy5JF2YNsUY",
  "key29": "2Gw1ytVJu5kVDEUpjTE47ZcDLwjkBK6tjJ3M66Eu6Y7bazH15iXMeCX6QcfSS8H5HHDjuN42tSVnK1wUcvR9rPXN"
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
