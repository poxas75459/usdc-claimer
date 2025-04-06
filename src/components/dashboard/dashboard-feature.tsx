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
    "57nJNxzcoZwn9kS9VwsieEgDHJ1Ezvf7EFmSN5dZpuT2CtMSBZquwJHKNTbqpenBAZotbwgyhsUHebRMxDhW8ewB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nQDHdXbMPWCQXSL6iKcQX7aNumPRphsZXhmYBvmHzzpqGEQKF6YcE8kABozb1ucwH1SYdf6GjgDbcmUXFHndLf",
  "key1": "3Cfc7JewEtPRHbwHZVUZiSaej2QSHp8q5HYpULaBC9iZhRAgwz7527CwGbDjKtGw6NK1Ciwnf7bZpWSmZhPRUqfA",
  "key2": "4UQHKyZ5Hs3KQRnbxH5pWCjNypsGCky9LRap6zdJp1ny9W9JGQqJZ8GUKBFkBcs2drbuXnFtuS6SHUmLme5i8tei",
  "key3": "2gX6HVpMgJ98DkLjttuZxhyiRS6uRCYf2aof7huWCnMan7AqYLMgKDupiJHYAeCxKbeZdgL457tUUFfDepm4StyX",
  "key4": "tEF9MKWqJ1DXkjnRR4W84M1xAJ7mFrhYbAuAUwW9BAByBghdk5qupSFhgKnqJQT4zdajtvLLVg98ENYWbDZSu3b",
  "key5": "31fx5rjetrTtnrjdsyVDXpnv7FMZqgEyWgjoSCYNDavSQows4Bub6opxu7pFinyASPhvGUBuHRRwJegxxTPqNnty",
  "key6": "5E7h4NdrpH83tvqVqJ7Y7GMYyo4Z8ThWDy21GNg6wSQThsCddo2rWR811HDVDzQBGpdtTy7r6bR8SCa2pSMmVPb1",
  "key7": "2THs2ZcrgPBZRPSjdFTMGWJtbJhzeu4oAxqEWxTtkpXvu3oCp4Yso7ThJjXE2tTgY9ZDuJnjjuzk12vjmNC8iJg7",
  "key8": "5sm4UaH5PYzFRBGLtph4ejEAsN43MZwvJXCbVWM19DnBkN7WP95iftXkfWTzY3eBEkeWW3LW6DgyH3EMNsXLhsRy",
  "key9": "5Rqrik1bK46xCPPonCFQT1DKKuGdPtNchYDR6B96qcincqounb8n1DuqB6b5TAFFRNCTzxRySeDoupJfJHcBJuMn",
  "key10": "4iFZdsdkrjMGWyTGP9rTBZWJMnp4HfzHoRJq9ntfbGv3Jh7WshXBDDhfFZJSYNpHshfjcUaLzwV2AEGtQNFtUgrg",
  "key11": "4PUBZKW5cREymLydzasFWFs3X3joWP5t47sbFbWcQ9hamzrH57NmZ8hDFGEuyQc38U9ijG8QNUD7oTkRBtmeBsf",
  "key12": "po3Hkn2Pn9PZ4V8ryLrAcTA3TdctZ27icJegRGeeG6udAiqyRehd7RBXRD4eozwUSnKkAD7FJzr6rsDkdMjgpPt",
  "key13": "3HYix62TvyP2kPZhpzDUjuSRg239mCJQ1eNvka3DXzpPkqxa8F8KpkyEn7Pg1kKT6285bYZsJfA8nSGuE1S4qQ5U",
  "key14": "3pLS54x9dGvzpnVEFXkfK1ocQiE4umqVubqKSECrrKsFywbQtfp4inJPBTkiyUh3sw3PKNx9iZzFzmBTFABuVUHD",
  "key15": "2N4h9Jnzrpo5rEgoXFiGhYB9neFHgEWR519sVPhucjTEpbjQ1qXeY39ZUCoPA9F2UoidDkmfEFbmE9Ks8HTZvfp3",
  "key16": "5z4DbR6JxHmtf6Gbkhn1yhdqMc9XxPoD47HnFvsSuAs9aYJBxnvJsYid8kKkPATFNBWG7tDerGUCgX4LT16Bv72u",
  "key17": "4WkP8Q4FLMo1zQgSwExxB5XR7Ms1iUesATt5HNiPAoh5GGzmPTuKugHNeAjLUfQLMUJCNkPaBpYrkTAbnhqg4iPd",
  "key18": "Ms8ew8r6K3Xqy8571ZGc7q6etupcwDapzp6HFQ6tY1my8V7DaJYqHM82MnhSvyVRNSgodmZVKRkYoSwUpVeY9hK",
  "key19": "3rqE3wXAp6oHFmwxZdg2eodfAem6UxKbU9X3JL8uTyiszf92tR8dbMcT2otzYsxGYm5FN3x8p1ifzGf7YhqMfhXF",
  "key20": "XGV3SEgnvRopkgYuKS1sF6Vmh3CGnqEJDJcLP15CERMetDC7qcBzJwVEawAsn7pgHNKx9d2DZcbCedEvTLfzfvr",
  "key21": "4qpSL5tSLD19koUGP66WJEks3YPVgynRKkdTKfsbP23bWLpgBekiZdgh2PKuW3RsDdGZruN5ySMKz1s7phZ7U4SC",
  "key22": "4Z5YjN46vVBurCBjCwscZBMxKutHE7nZSnbXdLaT5WdViRxkwuAS3ojd4H7JS9Ge6BjpSVH3xz5WtsEgPVF2Tt4k",
  "key23": "5i7dh7cSo83ARBShzUMQfuhRtqyN7jLnKbBX6QdSRJKsYycJcDqhmrrhBA1sFLYTk9hoJy1nGUk3L8eS7G6rGTSz",
  "key24": "456NjEqpvMGCJGBt2QHqzitSfQ6cLgBte2cPP2S18SdwsjD3fqPGoJCtfU61RMQjnwo8psTq5iTQ5x1vMkUhEZRp",
  "key25": "2zRfYxeB24o5Worbyb8hx98gAHi6vRVcsrbiG4BUvb3tjTQn2qGx4riNeRs58ZUi8xjSAb1mxRHPA5hGN21N1muv",
  "key26": "Tbi26HVc93eVEBV4dkUxoeh1ziqdqSgLGDofdNAsAr89KeyntxNZKV5KmqCR16RJfe7XRoZApdWBssPPySeN3KV",
  "key27": "Q3vuoj8E4NzDgtPmQ8m3kPJb61HQXimt175dN1jWHFbsgPEfZujUiWexc7NupQp9Qnyzu6QpQkFwcZv5hb8SsMb",
  "key28": "5fBevo8JVjQx9zvqNxkPpJhYjo4CkkVZMLwLuGAeAhs2omwhq2iRxPhrUMxeJB1HENY3SCzXoWhUHNjkjZw6PLMu",
  "key29": "4iKub56pKL7Bh4pZNGk7bfv3eDBvRfGZcNZdDFREHi2wyfKxVUyoyqRfMr3bx9QpKoFqMp2mQtGw5BXfNPugBxFZ",
  "key30": "2T8hHZZ595wcCx1oi8QScxf2HCKTyXCufYMSqVmaqRszfKVdb6fKu9xUJeUjeibRwedpv2KGjDZuTxqUpqWKBVkB",
  "key31": "2QyHHwM6DBTpXv8ooBjju22KJe91hS33xXmrj1pfKMSQTUPdniiRbz7ysL5bdebNMf5fGG8G5MP8XqSKBKUqtphL",
  "key32": "jJYNm7YRsb3bxZqPPT44K2SViCdtXkkZwitFZG79UtJHa1jjBfARrtSTwQsn7WBACenz3ketwhbqbbQbMaMnuh4"
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
