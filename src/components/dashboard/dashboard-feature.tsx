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
    "5xEQTS5k5MqiCHLviUjXLcEqkkJ4swgRGzmgs1jq4nBrQo5zUSYo2nHLXpaZChxC8vnKxwfG2TqYi9zVm74Hi3Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwrNR81cKtYNfCh6LijUD1v3wQND2s5At7dc6T4Rv9KqLbMJYzJtzKtsX1smbSe7xouYurV3UnJviGNTgU9yqqB",
  "key1": "3k4oU2Yo4zkXTHN839AcUXqeFHJvqzaoC3YkBe5kLqPpYyTnaLxERUPfaPqE15iaUJu6oB85DZjZqcMbZfAfAKHo",
  "key2": "5VF7VQ6nSB9oiS4GMAoLXPjmtYV7darKVL5aYkUfiBcNmWSwPTCpkJ4BqCanRgdfZHtRFBTe4PiaGFzJteoGM6M2",
  "key3": "y9iiTYgUH16sdbgvw7BeoemMg1tpBwjNT6EMApP6yABzuWibi3BG2e8vQpAxVrdCZvqgwjfwgJxPo4ZBYedYkM7",
  "key4": "5HHDarUDpvuNFh7bpgE6D1WhpRpySBvx8KWNqaxFJBtsAZqou8zYU7exJRD9jpSFbE9xftXyPtVHFoZzvsMjrWQ4",
  "key5": "2heEdSSxGALYdxpgWYvfzghiz8jXo8oiB8WbDKFq586Bp9NtdDLTQMRB69SK4L6jChAKdL7qHPx7Q1M1FKh4RFrp",
  "key6": "4nC9Y7GN1vgjqkZCk9TCD7hfRD4QJ4pyVWbi7UqhGbzL1WAsqFrWCuCHAwT9z95XFsU74jtsJzxmWUBFUw2Cd6uV",
  "key7": "H43GTDQfgmQsPipD9yxynkpsvEVjJoKyqAYurPsdZum4spvcVCrJCXvXGvXZX97BE3qwzpVNPQpY9R69sACoRXi",
  "key8": "2kEhiwEb2utppzP6eHYRv7X2sqy41NqdoSt46wqgVLNCRuZoU2xeKYHiFYPYDgXGoBwwHcagDz1egctwXPkJNQLC",
  "key9": "4KoqMVRJLJVabrFkUnoojsDnEV6UqjLAKiSLJKbTGKBQjy7NxiHUq933foQ6UWVreLJ6aakZsqQckGHJd4y1PXbd",
  "key10": "2JmG4hfzxsZryGoS3xZnB9chiGbUVVJYzvw5EfrNdRVqerA4TG19bQXHrFAo2rAg2Ms6Xc5SvpE3mZCRUAchqMRd",
  "key11": "MLPHamoTe9jwo4qresPSaEgpDLQu1HaoqcUepeP2tm1LVXzog1haz5N6Qk4UnT7gQ1jBhBNc64j4Ds3v17sX5gP",
  "key12": "3JW3n3kSEbzDkiyjN9wZxGHSmKYZPvnZg1M3S15X1kMYEHKkoXXQv7JEyvhpQBvxVieunCB3GQ5M4skhoQ5zBFFW",
  "key13": "5nbJvoYwu3Hrh9LFpMXkZE4RBVq4PG47XAZmwHHr1i3NvaogfKmzCnXpsSztroZpF7A7D8PrNaswDbSjwA4kMFiE",
  "key14": "4erBNq6e6ZLSDAviAgYioR6ZDdFqC31LrRnpm4UjNpeEwyz3QLGXCQ7KQAB4SMnFwoSDGurwWwGbrAaPt7HNizh",
  "key15": "5H2u5JHhdCVMBnfEo1WF1Z8anY1EKgfpBRRT2ybUZHhjjPEq5w218Rc4HTfrifLMnJsTKsLPcBdbR4qBuHL1Ygkk",
  "key16": "4moBY5a2WEdachg5yzc7CJWh95mFtjJEG3pCPCcdr2gHuvxCy3yARFiZgLcQmQYDYVaYsuNBXSPeX3QYQL6xDyC2",
  "key17": "3Bp7ogKemufH2yGnE7JxHpxDuCTw5SQMSe9NX8izJx8coa4skkpSSY2WhbnNXM5fbUWGwkgx8J9g8Jf7Kd7ykKKj",
  "key18": "SaW15QNw56KXTx68xsL68bNPo2GmVHRWjycND3JrEdDASKFoU9JhJ53hkF5fUVRdkQJggt8UKYSCedeFgu48tyd",
  "key19": "5GGXj3vu66NWjctnUsAXatUdVaQ9W9vGTtt1TF9ASnfHJpaopd5eYSHAesEkTppRnQfTBH6Bgs71W82RoCnybm42",
  "key20": "38RyAMwGZDLwH2ttmQaPnb2y8uqW9WMYNZBcfM1xLGD499MmLPeLJJVLs3BWzgABPc8EaBvfvoag1v9C7NZrTg4e",
  "key21": "52pq2xQGGuiHXVdbVd9kc9NYoV6ctkN7CyVXdEzMpw6UyTKQzzEK3aBRaobRD2zSm3wzjNdE64TZDCyorFn8zaXb",
  "key22": "2moYqk9vzriVNHWUsKugBeWKW9bjf7zNMiwcCvnGHuJ7zUmGLrryKZRfhYBD87uBzrQJCAsoHgkefFbfGQHooKai",
  "key23": "5hSAu96kwNnxFV9yPLEiTba8WgF9ymcUQcEkrfSuYZzj8rvQmJpaNhMNrG7scY1eY17WwHtbsE2eh4U7N6b2Z1aa",
  "key24": "9FG2ZX2TLL7RCFCR4vxmwS1ismRRBBEdnu3hL6pbxHwdsYf936e8FwHdxuZ66NYCNYCjhaAZAFR1u1Kv2icaYzT",
  "key25": "5CACPZ65yGMu4374kkQuzpQWtasohGxGHcKGGB33A6YtdmZ4hLZqf3b5q6n9JsF42Cb3v4P4J51nLoAbzquBzBLY",
  "key26": "3Kn1SqDfigmUcpjrEcFjGrKXqdzFs8qUmZFC8af9hMPhCMVnt57FEkD1yWvuLKQY7GVE1TXigScVahaPnExRiHYJ",
  "key27": "3wYVYPh8Fet8yVzhMyFTZ8W9w47g6YnJJQFR1bdKkGaxpoREtKGRGPvFEPJ6irXszfBbKN9dDd4ZAVSkzh8UHAsM",
  "key28": "5N7Eh9iRcYXMRJYpqpCf4yVouu1skVpqLiz67FuEqKMwTrQ1nUBysV88i917W7oaQG2WmXsbrA3vZNAJgA57xTDd",
  "key29": "4GN76XaAP3m8XpLdVcGKWwFLbuHTxHtcfxUM9PZH67AP5aZkjECtZppzhZXXJsDMBhGYvKHE8UV1WShifet6jQU"
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
