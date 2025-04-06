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
    "31H2A9xXud4BymuozGKKZ7d6Qddw7Rj6cDsNfRXtwTG8zfP3kzVdniKot1rj573xuLbwN8BFwZbSVS7MscuNPdK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqrnfWcwNnsjnEXZPoWZEAYJ8SA5TxF2CH9HbkUUBBj2vJKWZt2jQhYtPwCaaYJngcRLHLkSnkPUQSyt6oaJHQN",
  "key1": "2tLBpbM3TC5GHoLBNaSjbArrPTm9EHZwgur52v6h7gNj8BCLJae7rCzPPiivPc6JRdC8tf5KQwDBMuHRW1qkLFrv",
  "key2": "5spq6xMx3hm9W3R7SZ285CC3S6yicwdrkDEmK8kftokRufMCJyMCBRcBYcAeJ7cqnGg4ws18c4XRAcdM3GKCszFy",
  "key3": "2oxb9Gx4uA34kEPuQc1BVXuM4JaouPQLumtRpUwGqUeWcyH3Jod4ra9PkzD9TmxqNMh4i4ZJbQZ6xr4F3GdY1ZNL",
  "key4": "38BeLkja2QNbJaCLmk28zQ6Cz9mYogShJGxhFPYfhWLNwSB6hdS2FVw47s6dpcdZMmjgJF11pimAdxUk9wuS5B42",
  "key5": "3WPdzVYdABaXesisCTzKQpCzHD4qpHT1KzUvzwCG5Q5BvCVRcoQwTj19qj8FmopSJSqvr1rPn3qGjZUNMNQMfa5n",
  "key6": "4dmLciA8qYDLjYNi46mC6kBEqacJSY5w2bfxMNLPJEYZRYYVsskuk1VsEg6d9XpNjrpFXnXYMhyUdTVmX4vRqNrY",
  "key7": "RHyFSW9vVaKTnYpEHnuhzdA3Fod1G5hz7N9Cp8HLdydD22TZu3TBxN1FSpWgtm9paPsuRotCRFCHqsDEoEe9oiv",
  "key8": "2dhqKK4nrrFi76WD3SCmyGt1xiQGmGczBs6vrTo3cMzoEhZS4KEjucGbfX97T9YGsP6BdppWV5xApZiZvMG67ZNr",
  "key9": "3YK3SDXKrRuGWsoP8NRNp8jGz1EQqdFZqdNZ2t1LdB5wVXYGRSKvwqd4LJSUuhHypfJH7ujUQV9obcQHj6UCfNrk",
  "key10": "2zYCbLXc2QwWEd9rtU1VDShzTRXtbMCTUJce5g8tFsavCiERz7fg9HxoUctG756f5eCf8bzJ7P4wuCX6nQcXwMzy",
  "key11": "2kbVGoN1NCstVFZWqG8XKRDuB3DQHkrswPAGnduKkCqC7PjQzZnEvrbbAearRiqUX4KWPYqEFRUkupdQBviZgYva",
  "key12": "oQJ4P3bCLA8ZtzVvZTHJpBev3ux1PzX2mjmx9qY8Gr4vd8m5UUFN4D9koDnbvLrBZ2RJUaZvvzyJVLstamz58t2",
  "key13": "4EUC8kWFeKSsP4uHVYch9doBQaEZQDDHCdoo5rDw3VCQmZzy4Fi7bWCBsECX8nCxP4jCnQ3t17xAPAzXYyjDdSW4",
  "key14": "2SKz4q4ohKozMamkwTdVX5g2nHwR8XdWxAL66Sb2tCY1RNvPHDddDqdwLXhUcSoJi2h466nMSJKgX3LTxU7VQPxK",
  "key15": "3DGcHuHDWwzDWcofv5Zm4tQBfx6b8UTZxYLRynWdBqh8NDXRLkXgnknamqLhScvGrnCKWgRcsaPsm8oBQ4RpJ7BQ",
  "key16": "48yepLWBLhsZbQNxDadDYezcv94zXWickgwY8MQTW5wzyRyX9HAkb5EqiqZeoSXS9eLpuAxVvF9UB2g7XN8qPint",
  "key17": "5tRxVpxLjCAsEiTkQvsgdRx3ATjZhYLqPZL4AcJ4TJ7emee41qwS83FvuLUAx4XaUncuDHPsE3z2GwCxkmVskuKE",
  "key18": "393Qce5w2PYenTHwyg3AKurQ5wBzuTuGRYeHQ4Tf4fpJnHqgHiUueHQtoCDJruQZzhLJzByN8y1dQCDT487iYhjF",
  "key19": "wKQr6ZTP4NrXEaaGATvZWxc3JaQMMwbh9Gv3uY6DWcG45WPHrsPePA4HJTVtn2teW9NWAb6fSt6SkKvFdaJPro9",
  "key20": "t9zigSS8hvVCjyxYxPZBZMc2jYyrNgQnwuL77vnieNgWZ8hJFvjG9mHoY2fjUyhcWrHjavLXdRRfgZKZ2VGW29h",
  "key21": "5XKoxgRZYcXU2kNZk2UdU66U7A63EXZtnEVLZhcVw5q33uFxSMe7r6fvUep4EMhdYNoHttEYKeahCfvVU7icSRhB",
  "key22": "53oPuX9FJovKDfMSqUXwgeyE1woq432ih3J6bKjj5PwtqwiRaKmXpCik6gzVMWXKkCnxnFWACw5B4CE4LB9Dup8i",
  "key23": "45HA13AVegwuyqn1DLskkBRY3wN5KfQGGGw7Af3v9Ayi1T85e1dqHN7MViG2RkRVsj6nffz9YBmawfrjNAQ2wvaU",
  "key24": "2PrE98S5SY9uBu44Ri22We4WK9HLSCxfVA8Gf29cgK4qkF63p5vGL2onrZDUs8RUJE3skFAic7bvR4D92ynMsepb",
  "key25": "2esQdr1GQE2Cj2LrabjvxAQQBybnGRLCoMu2Ro6LJrAxUtFBWC4T1c7CRjY6EVzQoTTWEPwjYE3LuYwBZJQyNJEx",
  "key26": "fMcTXEd9DLk3f8iH51GZrMcDShF5zFZKKTXFXJ522CSsXiZPDy9NeYvVyeTLsYFY2iWM3LsQieZiAhaqkjH98oE",
  "key27": "4Sn1ncfQK8q7UZXSLrT7BT6yBv99iRtcaPiQntEcm6BwbPLszKSaKfUWvhXf9uxhn1FKzA3x9LSpK2Zy6qVh7JTr"
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
