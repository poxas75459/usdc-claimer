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
    "3NrcJrt7WfQQGFp3g8MNtRaArGNs1VGeMhFGgQBeXda34pS96cC2fgWBEEr4c2x4QFtukcT7PSRFHrfn3HLNu84W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDTS88n7gj8mEEf8diHSaGaC1bXww6w9BAtQYsVWGnUvXesnUyTs4MLyZGauGcVKCg9vz6zxwLZhsp8jsousr1R",
  "key1": "647ZxQzBRLSf1AbmqrpZR2s9FqVht3q55GYvw9PzDEq41eWLR9bhDtrPYnXRKAbfsMvZftjW49vQ9Les3BsbQHX9",
  "key2": "Lhkuy3EAQcBKbyzCcks36nEiNFJdvq4nCjjUtv2DLbUvzLqpR3yGV3kTpSuLFQ4qU5czKFYd5W8ac12ceD7Bsb6",
  "key3": "2yMvJUEZ1ZHEsJUyPAG7MwvE5CJ2t6QL3xsfYuHB1FsSU2PY2auWs9epT8GHQeBr4CiE5DuKVxRQy17gvYjfbJXh",
  "key4": "5EM3QJMVhpo4bveuxgcfSEVEfQb8TcVWrMLxUh9tdcC1zHvSGhLmEUgvKWLdCjCgiLXmE7SKoyCtZSMDmLry8di7",
  "key5": "4sy8fs5RKKbveGAa87jYKHGxgM2oHaARAAPwoVCP9VREVEuyLJS1zbTs85SuitqiXCG6P1fS8wnX25zNhBuVtRfH",
  "key6": "57BVuQ4EVAM8MPz9LCV5U2jJ4VjoWjKtFrau6x8NQynzJjpC35uD2TUYWZD4BrtujSYSFY4bN5Wsdj9DEV1Ftzyu",
  "key7": "1wZqPm7X1i5bqPVKP5EnJXWbLjNtfiUyWFjMCTC8tMUw5H433wQCD2nwGchPYUnxp9ZeuZv5rygiJm87SZqqs9a",
  "key8": "5iZvWRRx2ncNTN74KkVRafe9Vf17MsU21XtKzS6TQ9B4sC12rzczeBzg3ntaczp3UfCriQYQmWZUoTdxpjCNqxyZ",
  "key9": "4fvGA3rA9jCBSB8to4F75t479K7UdHaySTCnot44tTwxpbHs21c3nwbbs4bAWye6ehNR1MvCLiCkUTnuDSeYAUMG",
  "key10": "3hnuqTsLgdFL8GnNEkFbKeXucZcitbEo8nRBXyd3NfDBpzMKLb4SLSRM7CjRmHDkQC2uQ93aw1gM5RvdhYjd4zbh",
  "key11": "5BdVj34hfvv3uBxGqpeFDPRJP17nZe6pH8zfqeAoSM8cXkJ4QUi789oUVRH8Qtp2KuwX8JmB4ccBsNVXDCZ4116U",
  "key12": "66UqygNB9fbwbtJAh7HzBmn6kNAJaRk21SrifjyeEfUZZ6c2vJDsGH3ohBkMq9L51vg11eztb56UuWftXkKXR9Zu",
  "key13": "677rMsFH3mbMgaPRoW4qjRs7KwUur4qGGTzhsZJBDDcBSw1RF7fTFDFAe1S4LsgQWg89d7GWnTyka3ZgJgz9RsXh",
  "key14": "2F4FWs96ijqHgUHekEnsTo6yfTntJGEaAwWWw24Q2TDuJ5BWVQRi9oNMjRWBqgip2gHWPoxPKSwNhufw3HePQsNx",
  "key15": "3yLzXaq9cLLLLQgVEpzpWU6QtQN1CTnmEyue129EvRAWHsP6NXZwYKa6fHKvUypSETemsevZbyHFKTLZxc6LvMnN",
  "key16": "4m6csdMe81tiBXGGkAwM3xFmxWPvkQUsGKegi9k84YW79rk26ANmmKdgh7VtJCSn2jvZwWrnUZfAHUiSujhaRfkp",
  "key17": "4QbBorz18MKq9XrPs6ujWiYGTZBG7csDRXgu8Dj2dqiTBdyc5Wux4XHsFZt2R2Q6REHEbcdyJrHm3oMrJUS2EGvE",
  "key18": "9ENQptTVCntE5mmxat5zMudUZygUvQH8YReRUT289miB3oBWQCofHb4engiSJEw3fcPB1PxFuhZf25EXmTbboT7",
  "key19": "4YzqhB6dP5KxEHqYox5hn88BbYCHMjz8asPAprkpYobmTyv8Rm7XB9mCyu4J4jGuE3vVFdemYXgvd46wJRaJ9wri",
  "key20": "5tfagMdKpfGcPfWmzxNLE45eNuZfKjFSnn2VyBwhdzSCxvmEYq6qqqL9PEeiBN8Sba8wK4Poxc74JB78tLTYbB8F",
  "key21": "3Upye8VKZtL8QGucwRb7xmiVAi63jgx2ueMCzrEwRgyFPRq7f5ESVPeANCiR3bFdzNBXnv3a5M7g6wPb4ycjJmP2",
  "key22": "31U8E4KMK1nE5cRfoYBoAMhsLqkeT7Tms3BUrLtxwZbRhbQMTkyhwFNqgE8UufcjTguT83hsiKy5VNrj9dsP2AvV",
  "key23": "4bMVKuhJrLeaw6615kQtLpZjucqVSTmKse17JQVzQJokHC9qCBuv2QmQEYX3mGgHxysheKTM9graAZ9d2nhPzE8d",
  "key24": "4TqdzJ5CvoFAcdk6MbreLi9h3SUtcC1LXW7H7uQULYuEXezCLQJGf62LP3wW4qyVzqNxwZak61vLb9JNSG18wa72",
  "key25": "5pwebtHZrjjQ1jYTJPfPiKBsgjxXUb9nVr3NdEDupPJ3o43AYjyfHeeMerVhsXqMvQKyUoFhor7EeCxwUDqFfQZe",
  "key26": "2oTSXgKTRHjx7DLoi4WYkn6Y6hhsjWVNSU5ogpVSE7yd6GbPmeCEgwsqBc7U9myCDD8vRwF4DSmTi3UVnnawXH7a",
  "key27": "QXAURfFHygJUskgxChJBwPGzq1nUDLNm5eU1QTqmz1U5xeUz7CgyKpUag3QS1dF4tu6933M7ttWaaR1jQVuwFYn",
  "key28": "mnMv2F4vrCnK4zewF9et6C7YX4vSkGcCAY6gNpHC9BdPbka8T2hWNbTUTT3LM4rZfKWVes6vzhX4GPLeiEqXYrz",
  "key29": "4syVDouDxMwZd4q5vG4auRGEC7mjs4C5rB9geBEHCQqhHZPRFSo5MwpWoVM6sBUVQ3DUTo8nKp8GmyudemfiA8jS",
  "key30": "4wnbWTq7xM8C199kbb1fBdThC5377NWGqHK9roYyquEHCf4vPut2tVWq8ttkWJm73Cd3Up9GrWgNAtakqxjgimjR",
  "key31": "2xjs4EfeBDkPNSErQZcWWsq57sMsbRBCy81aAAtDbr3jkwmvirKSQKtYbpj4q1wjQB73zFZu7kzLvvqEY5GZpgYU",
  "key32": "2zvDuR5ALDMSzmnyNndNZxWCrCw3m4Wh4QWU96eB7xKqdGtjDA5ZFcFWsb9UPemp5kJhfYn99EjsTY4Hb2gn8VcB"
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
