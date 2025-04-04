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
    "2EYXcEFbsfb1qpDWGwug9HVmkGiRkP82UniYzMK48Fw6DZkRKpaPQqgiijnJGs95Ta9pEihFbzdhzy5jp3pNwUE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJKWKkzqsKL9E3PC2miYHMyWyTqvsLpg2JGRpDxNfDjJCMxvZTjsM755cvf47YYEXSjkWTQoWrPNShwwYt7DZ2z",
  "key1": "5ff5xUE9V3zeB16ATgYzT9QuwiK13zbCoxZqVZSVe4euMEyWyZqhoLiJmvuFUmXDNvxx1y5obrgZjGVoPUN7T5jQ",
  "key2": "2W3a2DL9Nw9u6PEySpdo3ULLyvqxgb6swu6YNJVm72r1UarvqGa43LvS58YMyM9mMM65sx2fvcnVkc1WtrWk2LAx",
  "key3": "qCYGPMqXPtDXd1uEb3jtdm9Kx3BuVh4GXoWSy8sfi1CaTm7G23QYg29uhddNNtTvFoCnrPc9ZWKB5kEpDctfLhk",
  "key4": "3Nqah9dfRU7caB2LN3XWVPP5ubMiUGmpQwqCCWyAkPpeL2YWX4xuHeNRTTHAMSsq1E6QMrXDFMqLwmDCiGhna3Wd",
  "key5": "3nYhUxRkayuhcrN84GzKTRDg5Zy3tuRpkDHb84ZFWnyU5PzsSWADu3HQ2ohj6FLmoBmZwznFhuLDhsyev5sheL6W",
  "key6": "3YWHnXrsJDS5swMi1zerzDsjPXFKkAXXx6eZt27GK9XADocmutaXioQMQHwjjv6vesnJGUnv6BP117D2GqE63J3C",
  "key7": "hiRequaRKkUESA9ubDzgswjvKR7x5NLdjQrgTyGUKn6ajFjgmvMA3ymqjXqnnNMViQKLk9G6axtYCddThh9J6ev",
  "key8": "4JEyiX5skci7DdeD18n16YbNM3QCPKmaPyckQvsade8zVnAU6phYNV1NkGwGd1L6Sfdqv4urvzZtEJWqhtSErfDz",
  "key9": "44NgUP4ASQo9LDSUYMK8Mg4NwdAwdBqKdkyfK2HMEGCdk6zjDqKYprmCugJ5TtQS4ZS6pQra1DEHnmK37pLn85HQ",
  "key10": "5wV49NedxBZpjNcS5TNCakdiXX59khbw8YmNWjYFCwW8q7ZLKSYvTphzjsSWVR2DhrvnyYdwS3igz1K138hy4MAi",
  "key11": "3ktC9hLi5G4CBayUoeJ4kfS5j4N4sh5HdD5fmFEeSz4FXsszQGw9bpGN16QvrotGLmYheVk67HDmq5FbxeLwowrL",
  "key12": "3rbwQ2t6TkmMbY6emsM8Fuvfon7PFw8nYafk8BJU2JZ31qdyr16EkAzs9YjMF9rTfWeSyYR1uGcgFvdAENeksZuN",
  "key13": "4SMfb3eUGZhmUSgi8hEwwxHt9Whcch7fpLz3DnGV6UvyD6s8itqGj9WrcNtXHjmsRSSex4UFVvYKEmr1rnSAoGUL",
  "key14": "3LSjqBiuX8TQYfhrFsPXL8Pdnj3qiBky6q3C6DgUoLWoV9GDBxDTbeshB8fYZs924KKZkAKNHoRqFFP2aWZtmuBX",
  "key15": "2V57aHSUPvc4YRhycr5rCV5UarQjKM4nVvPgr9XnFBj9MFS7KCQQbAWK8TL4CyTFz4Vt3m9esQv2s2CKgQqrmuas",
  "key16": "38m92D1oFXvryqm5BsVuZL4kpF4QpocypSNWbypeSeAN4VEooczUcmXkSofbKN9dz8jPKXFeuA7rE6NeADCeobwE",
  "key17": "22nSnZsPjCnpwB1hNRy8Eftaao3175SpMDvonN9hy23wq8oncj12kt2jbfxyJJLqZgCyiR6ghoAjc5iZwfnyNDb8",
  "key18": "5iYjKFedDqBzXPXDubvyj45TU2Lufq2S3S9ncvZKyDTp2V9X1jJgKvv3wtAD9bXpBqfRaCB3BGfqaiVNPj5D5wm8",
  "key19": "5GCJ3MMGDsqHtnxRusEE4RWd8nMCDp7kQWpxAxw1pFxm7cX8r3z3eincZYFJpCZmv3YYT9p2KKkEDR7E5By9nEv8",
  "key20": "39cshCZpxL4ASdyF4F6KVaEyDZVMFE1ADCK4bGmLWs6hUrHrKZF5EbyzxnsjinAsamafQu7B3nrSKn9KXWXzn7N2",
  "key21": "3eeCDvTbGikhTSpwKXz23GTe7KyZYCjvan4orqxucZk13PvzdzcijV4XQSd1HKFFUfg9ygw9AeDRa5fqnzSskvi1",
  "key22": "4L8B2KAEzkwsPbxtgzdZc2Y1bynTHtZZ6K2d5pLQ1TpfnKiVYduQCffuEoFfh1x7LkWxKvVUzNrUt7zcqE4FxfKW",
  "key23": "5SJypJwchZwreRFfi1w2TSB6wpDmoabpsvDhJdBzFpiVEPrSyeca9UvfpqENTwb7GHL4yPcEcekTKdGFqvM5jkTq",
  "key24": "57RoyJaJ1Q4cM1ugPauC5AZqZXfqymrNK9uC4uZ1sgJ9Ysv93K2tFm5ybrg4DzC7Nss8YvCrtQEWULMHkG7ne5RD",
  "key25": "3K3mDK1oDa8u8sMEeowShiLMs2VXBK9DU4DLZUpYMrmXH9tdBJqQ9Wt4Z2gK8DzphAboZu1s3FgQmKrbnrasMBbY",
  "key26": "731qD6YMume7r41CAzfHigo271PM5fzWVYuGKeTWap2c8WPdxwkWV8HwfTbykYjbHemBvSLA7B2aFo6gbARKLuP",
  "key27": "51usbzXnTM5cBVD65fVEiDTf2ceWWgybM5mi2GSucYH9ZGGndBTW69SCMHzF1C3K8jgJZXqRn97r4aE3xvQKF8Vm",
  "key28": "2h6VJRFDuUEnEpMWdKFvYmRP1U4QJzPZZyXWBGSh2ewe3rrpzPYsLadKzJddwdNua2v9fjMKFpyBjxESSrPv8Skw",
  "key29": "4KS97VrKLqZhuCkc1R8cYniVvoR2mR4pnmzppqr79pTec4k1HAkDKgmxMVjENy9TotN59PGa24tS7gSL4ArvfjvA",
  "key30": "4fpzqo7XfNcqntc24jub5FdcMskKgsNLkqbcGzttsnV4oypQU8CiBACX9jnXWYrYU4GCvmozHwzc6ZWaXtZWywLc",
  "key31": "3aYJmqLktyctkVWHKGpaYg3R6m7ha9GNfpj7PKGSuYtJPtmDmKN3Cyw4JLnAapjYyKAC82xA5oJYB1Vr3CVgWbug",
  "key32": "4mA9B36xgNhWKyHobvXv8jCrgy5VfKaWbvsSw1a6J6eG7tnNnU4Z4DLXaG8bBBj7dBdrpEW4tgtxp25pHDvuV9pN",
  "key33": "RCG77xmXdTC1YXfp3FyYzEGnVfZ6qoKD6yJ5iguKnQKdreL5ENye1idPT7WbtFEBGL8vh6Pr8EkD1fsCvJ2p82a",
  "key34": "TauNTF7nJs8uPYFRjefK6rpDmZFPGy1oE2gVMXo9nLe5XuYMWJpR4uck238Ufy7G5UCe8AfntwDcV1JgQ3esB91",
  "key35": "5KuLvGc1Ftv7zR1mRpNP3tgvXJEjryTmVyMGn3AU1f6rA2BWdieYXCkKMW8qqY2HxX5cyttrqY1MHYbhqLEXR4JV",
  "key36": "qmeH9qLSxwSHbiGuxnAUz8jsvm1L4hhXkvHQXqBco8qmLHoHEm1gFWFuENLUkN1RSzx9yZbxYDnvyqLc8kQcFDM"
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
