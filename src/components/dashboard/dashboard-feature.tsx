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
    "34azT2wufHXekiBchaSL8RM8TxsCM5WJNuMRMCrwMPHTBXYTKFgp3vH1Sx2bQb92bokryPBN1EUgiKey2r3rfxft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVXy7yFu1AwjXwXF5VzViqqwZ6ZdqUsxFHBLrTTWA4SeLBCBJopdhpchCyLXYxaWqrFWu2S2ZZqXnCNiva5agK6",
  "key1": "3bLyQs19u7x835eNyUzgJmceL4BFatTTVZ1WSwoT7fwZXuVMem64ATARGpvsQFbE3VSmtydXDd4pK87nfEyzDi6j",
  "key2": "3ou2xEwM4Nek37xQcUxZmFyfJF8j3N6tVvLVAkY3tM3RS3Br6nkuZ3GjRWMGL6CMvhUcybiGoZ8c9GbzJoiNwqj1",
  "key3": "3H5BTrnQh5y6Zqn7SXqhNwyY7TdyH9q4RNJpXtUAPUXbg5cY2gYus3H5kfFRBjJMsmUpzvgGahA5zYpZN9Lq4Lie",
  "key4": "2DKou2nEsaNLgVw7Ztd6nHANZsXCrbrGEFMLvArMYsYdRERCVBdh4BcHKSbZJMdHQuyCAgnoQoPQ8y5DrbdaQTWc",
  "key5": "b2cP5jDMRjE9Ks1zpeVsap7WKxEDMUw9d3EsUQoe3xeBRyJi9imcPcra87CWRnTHgtyitRbEQsoRc38pyUHFMvQ",
  "key6": "2qzkNfSUyMBcNR5uWmJfgihZdbHy9KhTdqcoiP4LTMAcERKaJ5XQQyZfzWFbAJ7nRjhXfqf9NxsRemAyE34c5RhH",
  "key7": "s4Z26th3zvqhnyyzrifkzyzUdTAVHXCFEe9sQ7TBEdzrk6b1TY92rmpbnx8ZGS6hTRLNvrDQkpbv61YGAxcWRsx",
  "key8": "m9sV5ASEgVYkRyzBoTjCT151aYiso82MLxJiYy2kvMvDcpWzjjoKezRRZSSA9DJcK5KxJoUAHkjYHHmXUcu8nDe",
  "key9": "51kankrK4BoDh7oUd54eoxCLN2nQDpY4aD8ZXeWnPn1poibgcjoTdnPXWjLoB68Ch4oa2p5XvXeCVJYmPtCzE21E",
  "key10": "22DrvJhuNzko9gaqooYYTQ3DG84rVixQvNQguUP6LXqzSTq61FBngFv6GTzwPDRxS9BzLNkvXXtSNgb2fANgfxrz",
  "key11": "nHSjYfDQqZsDVb9bitG6eFmmr4bm4MJjRRXy45qeGiRAwCVWpTCv2XKxdVafJ9SuwusQeV3oyBbmHjaEbPckUaA",
  "key12": "tiL9AfkinWzC3Q4hKeLvdXcxTBt89a6kvjKJkzf7etY32sBHD7syGgxgr57aJv6xjBP7kWhmLc2NMjowPfw6SQY",
  "key13": "2DaNsN4YcNcn5YQZ8GZ4YeL9dKG1DHUzXZRisy2RSkZuV3HsP4yVWdrWjPzPLpWBEtnNKUVwic1YTC6E4oz87D7k",
  "key14": "2TTAFj9fP6eXgnSf7WnryMLVDnKw9F6rPkauJp1BWM1aZng93AevqgjeqHogaVFqWZAc4be6dwR1W9dp9rv7cHy8",
  "key15": "4D2uVfqLThrnKx3tPg27YnTUPdnCAzwzuZLH9Ed5b7fcHQhshQJd2Bsz1LpA4bFLtYkDaXatqkz9fEyw8NY9XcDT",
  "key16": "2n7E5dB8jnmTV2FpZCwSWVwD7zE8ZS1EQodbfAkenhW9mC9uyfYbweVqNKSZyzBGFH1dGifvaJmEt88tSC5TpVwZ",
  "key17": "38Wnz2WirKSaLxwCprYbJHHTtKEg3oFP7LoDJDPt4Ahv5Jzaq85R5uryKnTdaVdQE3mHEHKHrjYEkDFUyyunT2yN",
  "key18": "3RoEB8nLJakFfa3VxpWCHGMQKQM6CbCT9vorqGMtaYHEZZu67i1c1MWS7MhnivQxuUtW2hD4Kdeor3YLiV9BWnyC",
  "key19": "2VSGnyD63bHoYLxrnBFnTRGG4nmwTHSUWACkZg1dF8TPjPXEHVeuTx3ub9WyaafidGiErdLsQMG2yRjTCLN34YN",
  "key20": "3GtEGzhSqo1xhuiWMdoqdFMN48qFGUGzdB58Kvcz1DPQYx34eVLmD7iB6swpcvQAQJr2jsL59zKpMvoj12xqGZTb",
  "key21": "5F1WKskGtojjkCSTCubp1BHw2zVUjjBHrrD6mx9f68XJN4zJEomDThLW8GNY6WnP7aS838cDUFCMBbC4VCLb8Jix",
  "key22": "4Lsxp9hcMUiQJXMbtUG9LdRsvgrVjrc2wVJfh92Un8bA8CAko54JsoabQx8HQcXnEM4uY4FUJEaPmrXXnnrGG6kF",
  "key23": "36FKKQKfpWgKGXd7ZUJ3rAKpcBZL1swBeZZkFRBTtLeFWRLzXvuNC8g2MyddJ1BF1E89emaEqNqVcwMjqoLvJkRp",
  "key24": "d3ngZhdyKpA4B1k7oyzEiosDMS4QXehhd4zn3TNCDfueWJ8jGomw1swXHCHr3vfMgo9MYJS7s9PJhRVcMigFkig",
  "key25": "5eXwEsYmiL65LWXLNXcpVwCAoHGbHpJq18TGkEThK88QzmJbisqGvYJKaimXitT7LGAaDfJyMg75uPikfHSi3cS",
  "key26": "2wwtC6my7rJ3VBTapmQYtSpRSbqtDieRDNyeSDkCJ3JdLBJHxmPaPSAkRoCsbdWiPRukggYV5giuHqGpWAMCpxKX",
  "key27": "64N7PVVqdGS4A9TdjDTSCGmJE6v3Dnqa4fPBPXdLgaodcmeQt1BjnnCkPMouHAGiTumiV1v7AiQ4LJ24piogqVVY",
  "key28": "3KvMUmwmrx7QSZds2R8jhTLHYob7JyEJHc4gG8BZGiroqoqs7zRU6yjTk8wVwUbEiuHRponHVT2nm7BBsGZdU6kc",
  "key29": "YrAzFvj35S6mDLhP1ZtyrWgv8z5DmAHiiUXQAJhPW6xD2fGkEpjj4fhFN2Epc6YicvS1emTYW59VYNaAnJG4KHz",
  "key30": "4bip3NU7H44GChEQ6T1H6cMWxxbURUFHbU8Uruzn2KGHSa16xYq4e6Vf8FzviG5omPZKN2oy3TQRpVUYs6ujL1Ld",
  "key31": "49NXuEvfnX4o2Z737VT6mLcGvwgMjgsPUDBXrM6HzeKpcBspLa3BKmjrxjzWGkbhhJ3j2s3UDWfyeBKke1BuSMUz",
  "key32": "qtXwV9cfbmbL7w3eRpvxdV4721Dw5QMDX9cQWyiN5UvKqiJQtvuJVZABqZmC4HR2WapLZM6tz9QEpzmqX4WkC5U"
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
