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
    "3bXdSs51YmXFr17ZiZ18fjfVdurCnGsXVrEyBBC3rxyrhAxDRsBSH5sfpaaG4oXBS4Q3iRfWoiYve6VG5EeFoe62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsDJwfQn2zs1VdUU36GgTUGstQhinchbHQZnHcL7R3iHwFUzn9LExUkNxnHKcaeSizLDPXyAy34cCJM6y7i3FFV",
  "key1": "27KrjFbY4Bi1QzKdPb7TYqEPiLhDuNkNZfmkvDL7ibhH5DS1j4g1r5ZEzp5NL7PiRyr3TzCpjVtjqqnsZpF8qHEw",
  "key2": "5cUFuQ6sAaPXif3WeJQPSnDmsvASXVJYnUy4uGT6epGy8yXvz6megvMJGt4LZbRsKuHFBfL8fdoJNc3qZJbbdoCV",
  "key3": "2L1DMp5jMMtYTEQNj5CktJbrSaqgxeavfVNnQjfbsYesnVGSwqm54PvdkwYAzNSKUPRWZ7NJZwTWF2deFYa2i7sa",
  "key4": "56UBwWPnoPfRZJmzFFPQtRrEvrpVEed5g1EXerUMuJ7Xf8RnRvHZXnJ9uNUDoY6ecr7QBm7amwWARWgGchRWiyxi",
  "key5": "3UieyiQGSnYbQRZhJwRe4MxLYwGz6BdLTqiqwbYefUofHCay4x8WUq4L4hyHqumDatCV4nd5KeMoWkHmY5M3RrZn",
  "key6": "4yG9Mhat7tHrCQxqLN679xTgFuZtyVDEeWSUcBgXcr6iENE99AuA6BUXjGrdDYw2mVrsNGSp4RD1Zt28JB9UWYiB",
  "key7": "TpSwFJXQTQrDExJ5G8CDJVbzdxZ5cdiMUuGbBFFfAr5gDgizuwpG6PYwU6TzUjfKLCmoCQGAp84vSHHNYav44Gt",
  "key8": "5z5eSerPfAxgHNhDPZ56nY5dwxvbyfQj9V9efw9c1s2LJscGhNmjEFTUMJjYG3D4yZrBhJkJfzYHrpkPRNkaR1y",
  "key9": "24G95ofq1153R1oZEmRyimf79x7bXSYyS7LxHS9jUm9kFnbouA3c2xQatEGQGNwk4LkDe8QS2rSwihsVgVu36wUL",
  "key10": "3Q3TMTEva6yzcGbkdj1vqzd4QYkxEhDwkTbzF567EzZ2hC1bbiAcLTm826VqhDb8in5xKSYqC7x9HDqB46YyLYPH",
  "key11": "3zxdgkpV6rQvwuL9T4UDQ2aRLbHWmdTSCP5BaJUznWn2paStZ3gQEzLUsMZxLP2p48xcyfLNK9mHrQmKsiVRqYPj",
  "key12": "3kmSPQEGqw8PiYohqdgHetE79m3g1wznDJmsmwGabFuK4g5wtfveQQHYB2hPkP6xMtUWJgVKByr5B92inmWLKR34",
  "key13": "2PQ9L2h8YLkR98KeNZZgzEsJWFoSc2HuPppyaCLWyKQit3uWHFgGEzGiBUtvMicZS8MkRg4dq5WBrF9c3amS88wH",
  "key14": "eFixMKkWYyrH2gQCCnS5BJM4WVjgiseh1HDfCiaiKoxN8FrQdQbZ1mUdGExbHyRm6mnygcGxaDguEhLzkNqXpuT",
  "key15": "q9SS3vySc587zEjfZsf6yBc2P9W3AR3vxHPhBf8tjTRpUfNTuC43H3tQY5u3TLQEERB5yWjNyBpidWCV95LQTci",
  "key16": "QA5F7W5t8y2aQWSDNrjSrLPwFsgbQTQ23Y9No7GKkqD3qBp2aEEvt1u4QcS3ssVmVJ8926ZENMA7ESeqGkD7gvC",
  "key17": "37R3aJPBJjttokGahVFjFsrEwraZgFgw3jh8qC15yUbT6LAZ97miud4c2JWnD1ezJMdvucTqWDTZFgdEVLLXgg4Y",
  "key18": "5YJLyq64HWChX5PF7pUCaUvLABFM18ZBRWmYCeyU2NSUPP75bvqAXYVd3N2Sawn3xARVhbKBVZS2Enxunv9vAFEC",
  "key19": "zRoPhfN2UG6yd114jpMohGUFf2NNTUS1eHcWisxnXjg9RZYkrahWmZPoESEfKbK2Bp6q1uVfgoP9exjVk1Asvzd",
  "key20": "5QNq2FqeGsUCKWzs7g6DbXRaEM9Gtp2NR7eG7k8wJBbt2zFyd7xSKN8n2NKFGxXtpoLKGzAxoieWh2GSALKQesM9",
  "key21": "DoCLxtiFxUrmEz4jdnbiYqFm29o3HL9oM9ecZLJtqXx7NUDJGBeGaTduA6inrLsugjXEV86qAHTHNSPuaTNNfL8",
  "key22": "23WS2a8fbNRLLTHhppW9q5KxoNX3cEUuzE5M4iSBm9Afk5tmujqV4JVgxSvcfCLDbfaDT6ayiMsprfQJtoshmte4",
  "key23": "YNMf4RVRMqQm694FNSNFxJVHM7C7W2ZdXLZYTfRMNVHuD4tNAUivs7RBkJiEigaqywVmBoxAXA3Fd9Xk78rJCMo",
  "key24": "656Jd8BEG4j9PUGuk5hpB64NGX1W8kBKHmJ6S2uoQWNkkT2ygtjoTJkWXNMSnXeVNeJYmjJ5fYEqj8mzrimNiwWm",
  "key25": "5WnBz982rqToxwYTyq7RsfMUhyiS6V3AntzC4pJTWprxy75ZvHHAmkytZkfod1usKNYCzeETZJDEJqkiHX7T5npq",
  "key26": "3t8qCh9xVVzdC62VMvjP9ATZfmr9QR73rfZgSzfpANQFKAGznBFE7HBKY8erHbSkjeMNGyg6xAYY1zb1UrArYdi2",
  "key27": "JQrE4Xo8VsKtjQPdhntUFkwzUpDqUYMAYYF4fycd3HzuRck8LU2uHPgAQRXgGf7fHapqc9J4CzJn7ncsNu2yiCW",
  "key28": "yyAWfiH7r3b21NveBdjdgSQpLWyJ1n3KDjNZx2uwBSsjV82aodiKwCCmDucpMZi2CKsnRLjgTyUPFWtCvpVGidv",
  "key29": "5EkcLg8YJKzzpHQVKv34qwb2wEFuyz6uFktmrHzmC6QfcWm5TQSA1xVpUW6HVmtF7gaaRrACuLZVr86tMDDffV4s"
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
