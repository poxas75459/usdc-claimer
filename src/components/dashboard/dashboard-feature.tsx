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
    "2FdZU5UwRxcyeqc867vvM6RtR6Nae3a6mm6vZ9FR1fcL5zjjYQCijecdP2FWWM3mEZy6bPbVegD4bMgHT7BobX1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfquAWvvME9dfzJVLtGx8ntFEYB8NUSfocVCRXZG6G47XjD7uucXkSi4dnGcfM62NqHpxgVRkNq4UQxBn2nv4J4",
  "key1": "3hgtRKuzSqFd7C7sCyjDsE1RLQhsZ1tvKpnSET22jeB84QWyykH7awSjfbow64CGR9hWJ3csFhUPFg1Ra3xMNv1U",
  "key2": "4auZKXv4feG5rJkgHMvqAKCopNSYb6vpfHphWcQKKo6q4YAcWr2Gx8uGjgqZU11xUzxktRqunNTbuahqdWnYD5of",
  "key3": "2Qx18cCxz5iKKN6Q4j2xrac941riFFC46QCjJ37KgnDjsLQQdTiWrxtkq4Z4VB57N6v3NGpfQpZSKaGR9KRLe7DB",
  "key4": "5Awaq1syNbxC3222Hs67BevaiAcysrruMwcTN4u3ShJcUTA8YzGDnHtRxcKA8GDdKjidpwBpjKNqjK8d1PRyUeUZ",
  "key5": "58FngcbZHYYpeydsRcucj1cS4nj5HnG6yWy1mLBR2gB4XAnCxaGxfaws6rmjcqGnkM3npD75xn7Lei39jYtVHeDt",
  "key6": "xHLfd1gNMfcREAfyXjXm2ppfM5wvXcRiKNozzyLqtsTgPRXPtU4UgfF1gjDa8sLhRPSmmBEF5wERY8UJ4oBqtdx",
  "key7": "3EMXohUK5fF1p5GxKcz3HNABzodxMnjn9NxERGMRNHXo4GkRN23Tu5rEXSW9NoASmj8k4q1GrDMyCz6wNoxf5E9Y",
  "key8": "61D4tJQh3RGEr34DDnTcBPoDgyaXmf5itYcqsHbh5rt2ewFQvfET1pGS9iXjo6V6xhMEPZQyf58HVmULdd6raXjH",
  "key9": "36ZyokXRhW1Z7JRmhYUCBcBU5tXU9NWmNUUvL3z95tQREwwKeXiDrk1LdoMPSt1jJ5kDeEV9RM6Z1xmotYFzRVN2",
  "key10": "3w8cMXqQRQSqgmJGcfLiKPYVPNuGoccH5sXttnuskPd2bUKjNVuFTCc8WnE2RNYMbmVSUdGcxKTwk712wouX8WvZ",
  "key11": "3FC6Mpyt5XL4rPoSGrzg8cFsM5ZQDxYnCxMHA56BUofMwAVSzYqYoWcKyi8rnfydptrFqsfVZYH5CfxgWBoG1gjy",
  "key12": "213GAsro3xEJSYLakKnhC5fthB68vUwZpdzsPEjdWrVnx817thUaAhxjcg82BLgnKAVjwWUWp2HbmvmZeATrMdyA",
  "key13": "4jqJpBTdhRHcV2bKMWXP5QB3Lmv4RPG5iRagmyD6WpeAZ4iG6mMiunxqbYKxK8BaEQLhmrXZAAvtX9sjdTD8LGuu",
  "key14": "2gX2xJtWUWeQGxpTv7RWVXbdQ9rpeLXdpwZw3PbKrJuUuEAJ2bHkkB8jrJGF6KANkz6cGwg7ZoycF6Bvm8HTiUkT",
  "key15": "57JDpDDUqMgcGUWWsaiv2fjfoqpk2defVWT1KrEUcgQQeZhWEykCtZGnursNfeXL5m9qG3BnC3YkZoZhF17kFjNV",
  "key16": "2XdCuQAd7FbCDqV6fTYnKwmXG5qbLibKRy2uADPZ9yyGdtm7QyRfA8MHn4DvNimnSngVUda2bTkRBW1ARJthcLup",
  "key17": "3fNgGQzz1wLtRKpZAp1jkBq2iDcaF1kJNGJceFmok3rBcp8KNok7Q3kQsw44RN5Y1gCgCt5tXHC3vDGus3dPcgqU",
  "key18": "5pEmtQ15Cix2XBo6rLPvoeYSVvqPTaitZNHH2NHr9rp9MBmghz5j8Sz2FwuGrEmj1ZoYAQSowYN3B8MyJG4gycDR",
  "key19": "2eUVFgcq9yU5NFVDcS8Zjbi3jcaEZrF19hNkaoNr51PFKJVBVqVyfoZiQCDtjv2MgFpPgSb35sL4GhvtK9EmKbu7",
  "key20": "4mt8pjEzdmobtxd8qbFYWHhB6BksGvEjBWWovVfwGemnp8rSi6T4eH5Tu5jx9Ek76QBpaBvRruPPoDQxKW95Eobm",
  "key21": "4qkujwrh2NHsNG9KHJwGEVyZGRPgKhYAxjYJyNrENiubbyvZDzAtm7YXvdq8gW8VwYnmnHN8uDejhFx11UMuhM5A",
  "key22": "33i6sc4VhookJZhaYfeS4vDqaxSixcZY8EXNTt2QYMAJJmbAwCJQHmvaohQpWsumVK7mf3WBijoRD82obyEGZGDQ",
  "key23": "5K4YG8GY4Af6Mmnj6WtuXo9b3px3FZDMv3TWPvyZhKKzHbi5P8q3v7sN7aH5N6ADniZVYL8a7MEaaX8Hc7aGTEKM",
  "key24": "2FiYkXsd5EdGJ3buNLvNPLAu3ScRfzbYBFMpxWYLsBLMq5Fr6efJujujRBSapjtWy4m9Hna4jBsTqdEyQuKYh2fu",
  "key25": "4kdhBzz5G5Z6QxLeNvp9YiRfMr2hhbDiSdNtgJRmMuS59XKDqUs9D48AdZqDfevqemL41Z2pqxPPVR3ZMgsvGwtZ"
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
