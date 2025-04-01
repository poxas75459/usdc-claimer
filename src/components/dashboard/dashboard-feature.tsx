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
    "2pJNpKzV14ihoyfgFoeKTyXWwxHoErf8ifSkJvRvPKBZ3yGDxRZG1yAGTYiLqnw5N322aA6h9H4ar8mRU6ojD6Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvsxG84wXmQ6iu8ZVAtVRosE2t8qNWVm1uT2cr84nXYXmbkiy5sAashTzK1gXMotQMD7bjvZtSGdfkqD7b5fL6K",
  "key1": "5uh5Z6Ha7aLk4qXnc1EqP4ZZqffSsvn21mZzDzTn8P2rLhnXUcrHKfsxpFxSMhEYNFWthS3ZRh8h1YFSxPRf12kx",
  "key2": "3hpnkBNQMz6wF9cq5R6TBwwioayy9g3SUvPu2NRQbNUWGG9fNQnnPuWGQN8ehAw1CxGMdysrvGaDKXcqir5KFEpi",
  "key3": "2YVxLSWyV2za5Yfqkwf9eeGTD1woWcTFycmRKyHrj2oVUosGhB4E33kPcAJSrfG2gPb4F1KWrjdjNgdbZgEVAVfT",
  "key4": "K13DGBJzGhcNZ7wV5r93VAtN5X1jkwTjdYBsRfzTYZ8RxVzaTm3827rZQAmFd46U8FRzPJoBnzQmnHsbxfVertt",
  "key5": "2euBVB1PEZWr2Qr3S1hvhbx6yHwa8L3FUvY5MxkMyLLdm53S1pqVu8oxv6YxqetPH7FUVBvtXqbJZeTm3RmKmBd5",
  "key6": "28cvWa4e37G6z5sZpuRcfyikofegAK9CkUX4wJ2fjrpF1SsbEydAwQgxvTzZ4JaRQdt8jgjrfTvbHPhC1sRYn7qf",
  "key7": "2uopAZHVFizs2y5bD2zK2QmjtzMkrx6H7gMDLybEsNDtS4CU1Vks8kfvr5B3oBFSYZS6pwV96QScLZ5RHTzzT5NB",
  "key8": "2E2AXowu4oCwUZBcJWaxbQCwKiQ4NQQGJvQoF7d8X7J2GDmHyHr4N8xHgbFcbKXNwi3tG4t6ACL22AYAzYgkC5cX",
  "key9": "5XQJHDrsFCqU46g9J8E14VpARPM8WZef9e5aFMz4g9jTPKfNzJMELm2kAc3qQxKzbvpJkQZrtbJ9VFzb4WPxqWcE",
  "key10": "4WbKWhaTxx8pi1DyNgm6Hyqz3QweXZ5UCsioMSz1p3HBSNMY6Lcj27H2cd8dyVkSyp3SLga214cyvULB3ANxHWMU",
  "key11": "UaqEsSdn2e9e6W3sx33KitUZstGhAjQQ1zsZ6ooFoVnqXmcmZ66nuDy9gLqnRtpDTvdjnBXW9dVUpGE3CUAyxd1",
  "key12": "5LnjMa1E2UCNG2EZ8AK7uk8gNpeB1DZPzFwFVktoSkg2fcW9x59TmtJa53QgHBtAkHJNN2hz6mowmqxDwbEddX8E",
  "key13": "62ubmRAbqUCk5k8EuVTy52EqKF71a2kqkSwoGWbaWiybcY7yeAPehSEydem2BpsmJqNWU1bQaQJNzFJ2Qoxh7tVP",
  "key14": "3Rthu3za8PttSH6dhhNuLNDE9h26f9WCYPEexfxACXPdfrt8rtSQVSq18bMHjU67eJvgPD7Ak1e9tQPKNNfbDCZJ",
  "key15": "4aHZ1tUQvwDkYNUvnzZYMqpzr3xqcXVNyS9BjB1iygP32wSVrh6ZAGJfn4q3NQxJT4yYWh8eF74E1zaXome3KGr8",
  "key16": "5SSxTYJijWnYd4XtbmR7FVRYvoPUJcPkUs9MLmgaPCyW5mDibQ9S5opp7EuY26z5ZThdRuVb5QEiG9mCzQi3c3NT",
  "key17": "3Pp39RYgYpyEpGeNCULMf6a3xcuo5oJKN25K3R11ZDFnB7KjWBqKcEpxAXojrMQcRtcqnvtjuixDmXQbZWPkV1Fe",
  "key18": "4rAZYY8BYCabHJLcM5CmaAxgtnn8ASFa7XKX8TM161xiG6QaTiuax1gPtbYkMWMjiZxvjJ2X9FdGG1sdQUDR5PAo",
  "key19": "4jsdpftYoHr6EHqQoRnpo7Qk24nd19ySB3rQKxa5F54qwCT5VP9oExZqwaY4Vwtxq6rwvvzq3wYVhbMLtffoHM8V",
  "key20": "4tq2JiWGiRpoZbuBBtWQoYzmRDto9U86DX7B4jS31jkctW9Lmutds7i7qEuGtsNx1CjM5jQR8Qp4gRTSoeSNi4vC",
  "key21": "2NWxTY6FXTYKp7ybo3srpEs93GfFQcmvtMXa1qLUjxJJiub4U6xMSx1puP7JUzjwaF6KsJeTufVzKTMbRDsZb3hn",
  "key22": "WbxULgQgQH8CrkY6Yqm1xxiAbnyjr3wZSbUWjhatBCFTQRjNVyy3hRbvfPJWXk2xR9xR7KRJY9apRRUEGQjNLef",
  "key23": "43E4wLnGAauWvv2xB7LaFYL9wmPBgYrEto6kZN1Hgy9iecR8ZCZzSDGN4TQhkYDryK2Lr3T8Uy9JSfFVT5WEwacu",
  "key24": "4rpjSfhJ5usFL4vCUA1DfznojuW9gaHQ94SnS7Q5skP4f6Y4Hx77aWRRQoiDz6H5FSjznmiB6U7S4aHNsXwk2NL1",
  "key25": "3Ssf9kats7idSuKnHEi2gC2DSdV9ZMKMpFiMaAs7PERPFCAaauknFszJSSzet6aJURYziVdPSMZSdXN5LopNhWEh",
  "key26": "Ws9an4o4d3FK9vRnmWtHXaTR4mPfFBKpJaKhNu48SvQSqQTQgrLbZm31h8fHe69c6vScZgjcsyDq75e24Rsm4EE",
  "key27": "3kAShEovfBYNQXuhTm16cC9jiy3CKrZLgWqRsdTQ8LnHNriQf7h7evSQgNeH3CQRSH6PTNrUwxa1QTBCNHQyyDbK",
  "key28": "s41VzUzBT39tSswK9qHK19MxXoSwWbRh7ZYmrTJoAabKqNqQHbSYSL7hAWBRqQD4XHkVmvNNPdJKoANxWa6Y2Fw",
  "key29": "3MRbYVyfQDQD4HQbb6w9mZx7i1N1y2nG28igNUiBsF6NSbNedHQJzyeFWi5fL4EyuQL2i2KWEVUu7wYttdhbCVRz",
  "key30": "2rCRZuLrLVqgwuv58ZDiwhFxNaoqAF5Jd1NEohzsnT1ZW8Gzyi2UE8DHdKZYuX2vAYxXp9AHVgswitdwm7U3Z5dd"
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
