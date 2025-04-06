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
    "4hVLCYUv78yTMNkmCmJozR9heXRovSRioFutSeaf1WEHB2RsZatSQ6AvhdrVWrzLRVWofpU7tuytft9tSSYKhFhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1LeWrwow4cA1NQ6x2wBaKQnQRSCqAjzSHKxmQUmpWiXDgph8CcUZ72BGSYkhqir5ZzuWwseWtkp3WhtmwPCLYq",
  "key1": "4AcK2kztjajfRWrfANqdDUh4eqRiDScW3t7NBq8iFhwJ83prCFDSMWwJDQFykTmxUeR5bfvovxp6dA4FQ4nc3vQ",
  "key2": "A2rWim7X8TM74NrHfDcV91223dkoBLWBrcXWNaMWWvSCU3Ewd6nSn8ELBEddE4ktsnbuf49VCEfwdg8eNEifxth",
  "key3": "a243Tm6vEx3wjNq3yL6y4n5z8jrrwh7suQBERVgzJfrGx6GZWpVVWXWbwzUXZ6f3NkPnVS88bRdjtWugHmZbiLP",
  "key4": "4vWtQCuyb5C6bxhVyKH2wAqWwdU2L1n6CkFUhGbFJBKrjrFczxckCoCmXHb9MwCVT1A6q29zY8p19y2Grj2qCGK",
  "key5": "NhCvsspvJDapCZ24QXKEJv9oDNXYzK19J8Jpx6iBrKhgG2L8L7F8MAhvEZCzaxRv5CCSvXfdjzj6x2jZzpugrMh",
  "key6": "2vxjkTgDYJZnmC5puYusJaugts3BuhYNCKMLht4PN5MaouPge2CC1BQHRvgVT9VtNEJu9TwPELd97txD6c3RLxJL",
  "key7": "3vLRn9Aczkg5WTQQR5UnHRbhYnkraiu8NUUwzSA2yAc7omnF9oerLmTxCF5YD6Urrd2NfNMrYFpT4omJiXX46Q8g",
  "key8": "4XooPT6nVHsfy8sTvuJdtvXJ2ExULwwdUKZgvYUWMujUvmXMEk3EmW7Gd1nZgGww3D5eYbkM5JkQQewrghtnYQs4",
  "key9": "5cvHDrqVLY9PhKGaoPtRh54uyrmsE6qHuPCbDD52CBS5VrBmBu7ZzhQoLwHAXoRPviXhCT2zEraof5UQWwtBVVzP",
  "key10": "21fMHosW4b6LB1tuK5gjuEVDCSWMbEaMtzmrn4Sq9z8przjGqf1tampstLDUFVEKj2SntwTgPZPPxvzrD4hEfhA6",
  "key11": "3M3dV97aFoav1S8t9b7P4kuwtrhMThHQxNf46LQdvf1v4yC4qybP4x6PPNBpVjBsQ9DAKGbfvk3t13DgGs8F8ENk",
  "key12": "23v2qjypoZRR2x7G6neubNYXpsA3tDKYHdrCagcuY5PAkTRpz1M76MK861NHbR6v4tq6p7HUF329emiCyRrSYzJ4",
  "key13": "5HgyLnCtE1MXdME7TCQZCEuJP2Dci23T3sSibi4zW6rjGfys88ETvA6BpxMcGrBBaGjbpLAz31xBgfoajwn9D1v6",
  "key14": "2jm9HSYfWAAe5Rx9zm6y7bwntTxkuuJHa5EG2mXYbFm2hd17pnVVVbepuMMfstVa3tMqMytwpndmnCEfYzSurSwn",
  "key15": "3tUZZSS2doE6zq7KymFyJh2QsanpbpmEeieDTL5QTzQRE2zZ4v6U3U3JZpErxuK3Hg6ouxDZtFUKQeE6G5d4ZTry",
  "key16": "24ST4wYDAd4z92Brf52dWSdk6LiYQs5ZERrtnxaH72MQnzoaDH5e2Q4uZdBcHvtSQUQHirhyaSzjChGiNXQg9rZ6",
  "key17": "3Ng7ZykxM84KyoXZNBoDhL7GLmNschqcA5K7K8Z7bHEqbiBHWnu21SHo2aBFNj588eaq2ZLpAxTJqShJycSL58Wc",
  "key18": "NufAjMYjiZjTADt7Udwz2uDug6fBQE6qfwBuUCTb7Z7VAQSSxe6qy5vbdpcQo4NPCzDwiabjiR11mRxiWXLcGMo",
  "key19": "31MKNL73aJZGz2vJJHefyz3gYqnsZhNCz9JC7SReF93eZCBvo5KruZZqHZxhAFxcrS42pEciwpPPkKYMGNPxjw73",
  "key20": "4fT9eAKdYJS5aTgEHWE3yViZXMvqh9phuD3Rhi5u3oS2SwSmyqwKuyocCBaxGrA8assrqvyJHNmXhWJkRffNPqW5",
  "key21": "2roEDKcxm4Zaw3zbUXNgajt5W6QgvTig4kiYWTHbWgKYNMmru2Ek3CVQFyGKeUT6wogNh74BRtMWYXg42fgH5Baj",
  "key22": "5cz22xQZ1CLVonby45Lc3PD5yyB1Bj5XvhQ3jJQ7u6mKnVcGcxRDKK4jWAFmaHu3MMas379mcXD4fhPWLextJEog",
  "key23": "5xZjFFoZZePCq5azMKh3swosJ3gWAKgNcUsmtpY4BkCBs4uGiLZ7D2QpUgoDCpQzDq1GHtz65vXEFZBGQuoNqtbE",
  "key24": "n9SEQT7hM5H8AmPehBSV8jB5zLAceAR7zsYyxzH2C3qtayXxySerrm4YoJt19jhETm61Z12k6qVXyzrGG2VyphL",
  "key25": "5fo8b8DadhMmyfwLGNznvZ4E9hUWVysubdaWUqY9gHFxxdgYRWQqiB84LN1sBt2C5P219ywrgGdyLLes7jue15bW",
  "key26": "3DqZy435g5EBWtydeiwPiF4Wy4YCsfH6GGoj7iewhK6i4KVAUcZEoAdvnjKhTWTcxn7WPG91ffJ8fLTq7aVkktt1",
  "key27": "4SPgn6PpF6n1f924YvvYaiu895yp1tGwouQy55DWLxKKb54xXcf82Dh3kDRsoyzMEr5fzqTzQzKkMqwP1QAxENUx",
  "key28": "24chisEX7vt65yFv3NFn6wfst5JM4Wp3nP3ak9ZRv5x1YXkxdtNtaVadNCXYciDJ1siuZqugNvDvRVZnkKPgGRwb",
  "key29": "29cmUw1Hk13V1avsBk9e3kj24bjydseW7cCx7JBr4xhCp6bduvnSb4do3bLaBY3eNoZBVmiDNWgRCEeuYuUWQyv9",
  "key30": "5fpWCHuwNjDpEssczdRJJXPAotNxU7bVU1urRrAoBtWAYfv2v36Q37DuDZ24zhC1P4NrMYsGJzTP2E4Kh4DDfGAj",
  "key31": "zZEAMwNyQs8VjaKq9y8wB5HNXSWFBGrmzPuQ5EriRSfEmteUNwWbEDvuiimy3sh564P93JcLhvW9exCSup4cHzH",
  "key32": "3DrDKEUmMbFB3QCwbcscS6bYeAKffo5nu3H38yfs8mxosnZws4E5omAhjAVryjUtR9NJkhCvMvsg2naEoyxYAt3W",
  "key33": "2evBkmscauDjmnbkED1FpmfPCaLVjTZ4XfjdZoNdooN8S6xiLNsNwFSvPh9FAKVAxgqz6dpfQZSZNKMD5rNMvDVx",
  "key34": "37UsCuH33f8WYfmyeQqURiPcXXFxUiiiPRdNGAYVZ8XgVhhtZyLyH8hHYpv5ksNdj1XHLytyaqokjinK7SxZHnrw",
  "key35": "3Fdg5xFKbXQSfYE1RA68LAS8s1nH3U6uiJLeQ4WogjPo78mdQoKJcZwx3kBp4cnPHKTqQbuAYpiDx7JL3izvGVCE",
  "key36": "4CRoPjhE4FzJLX7GsaHe4X8msyDMRKVuJgKMb6fpQB1J3ESizcCxudwir2z6vTBoB4t97cFZEPE2rLmNWZzU18Vi",
  "key37": "2nDJs3kYshjt6o6a3uVdEwh8GCXbYQQcB7Uya3EbR3FRJkK9NizEDk3Q8cVXNJNSbXNN9v74xRqY3ada8utY8Xot",
  "key38": "66VxiuyHFsuyPXfSZeTS5PwYeKWWD3hBAsyBroMVfTZpg8w9MxhzxFNbXa99hKaCToSToaBXm1X46GAET2PjAU9f",
  "key39": "4KGKLehYV3TALzyUVsLZU2D9LBr1pNtthz14PfaJS4xL4pZRyThmGs2dCEWGy7oeXrmyQBFBGS95sqM36NEEDw4n",
  "key40": "3dTR4VBfcnxrr6gm4k5M8nfm75yHXUGq4FLqG7AkPKMx6rMKz1GJ88qVeYHMnVMEvRSSnMzNWSBBLJN1HYVmapKS",
  "key41": "28h4cb77fAg8QWzoGAcG4R5CWH8Xfsq9tCSayZ6tg9tZr5AoCkxY5yyeGAhvwKDt9HgqnCJQSFVPmGt4zeRm8SXc",
  "key42": "34J4xAfQvQUXbkuLzNq79b8RiPcaDnKn4Y1zJTzHndS6VeavWZUTZAcr3heuBfQVNEwp9gyBMuWBPK89PeDypZF",
  "key43": "4pgnNjG96Vsi5mtFdhPU2piXUvwG2DsFXHsAvc7hLSAJTXj8dqLYDkaAbg8Vqyow3mQ59acCY1m1YVpBQvn56PJh"
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
