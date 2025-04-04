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
    "5tMyxuuZmedVf74qaBGkcxdp3sebDGcW4KqmatZqwDoFCwAkofaii1eL5FqrCYYVXxhSB5BrNP95bJAggR6WrQjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjWEuexMeaAUFsedVmfNis3EVcLPSqTPCfSfLHGdggdgV9GJirqbumemkCkSdJeTLDqVowJ9niznvDygxeKAHNc",
  "key1": "4xFDHdBVJabgiQHDFa3Uwfyu6gPAgbLnBhmVLkVJuvDzxv3u8aHUM5e8zZ5YDvnE2dcgQ8gFksuxtJJcwcuDmnmL",
  "key2": "4a9nF9e8LRENpbp2kxv6x9si7GbY4U18nLViRPRXn3ccCWVT9E7gUcLxfxS78S5c9DDtsjvH4fTsE8b9HQNfhSUZ",
  "key3": "5aA7YJgh4sLuwo83WNufcE3x1jrXDECmnuevv2s7vaMei3avF2gzqoqSBv3eF9eib4nweEGFSESkiKhWxLUw289g",
  "key4": "615UeZmjtSy3UPnzR8oHGYRaTD8ybDyFP5odztjidKFWbHPGkhDVF9bm5MXjt5umQMpKFchfmsTGb9N3Mtn7pNK9",
  "key5": "3zumdx44CkVt7AJt3qctipG9Rc21kxmSVMwRuMmynDYBYxfdMs4S2rXjZKFpzQLgAZ7i1rc3VKvB2zbbDFX77neG",
  "key6": "3nK6T6ExsaJgjFTt2CYQjg2AvJ7ZeGsFzY8Qikvu5DmVJ7csjKFKaqMvo2seDM9CWHHpFZkct9Y6WSa9dVwVxhL4",
  "key7": "5ZyjSNJco33s8Qzc2ZiAXeCy8PgTQqRiAjeAEr8UxCLxvFkSjWGee73jKVhnLKrHjZ6hrphefjAatb2rkef3RJSu",
  "key8": "4GiyDubtSJXgh3QhX2KWD35XRhBSQmpvYi447D4q62htH3ddtsbh7SUAKpvn2WcVjYafhpUEsjTqHfciMgVH7it",
  "key9": "AfZJYRMFSF87c7XFhCeYxWakyUzpDD1LNZ46Xneif8CUCz5zsbjGWRJCLaBV9GREqdQQK8tcdJxphmHNd17LwuY",
  "key10": "321DLBbEf3JB3gpXipayMNh7qGPa6spoW1hK86q2wX78PxHJyD5SWuGYhJWGWk7LEq3LiEFofttddoV9fnjvXmXs",
  "key11": "3vpdeJk9UXBq4FUEfdy4cZowDDR4LYueEHpiQJZzzjGQQwT4UBqvqvBXjQkvrSZSdZaNCcTDUnFDdcMn6kVQUScP",
  "key12": "4dFdJf3M15rnrWcxGtS3eD5B2rCkrJFQZ6PgbEwjgEEJ2rJwr3dNa9Zpc3rUxT5brMa9wt9fZf82jUiYsoU9Xq8S",
  "key13": "4qmboNYhfQ5kkNUkSg9aqAVD91gsgFTU5aNdvcgUENbvZyHT7xPScp1Zgp3m1PC8cNrqX6QqqBm5Eshu6y1d8CQj",
  "key14": "2vv7m5CX38jFU2YhbdBsH5Wi5tp5T5KQQWQbT4kE4sZ4FcK3NhrkUZTFpMiNhiw2LuancRR8eP17Cee8nUXYKdeh",
  "key15": "3b53TS9hdjbATGHy6ZScCA5sYNUiWfRY8KV7S37h6eb3Rg37STwuJZr3Re1nwX4ZPGwvDEQDnEqLTYSqnhvSZDYe",
  "key16": "4JG1rVdzKBDKitFQuAaXNautFmFTLJTK2AMiwxR9dLm8b9bUfnydAhtVWHSrzGoead625foUZhuTKj28WQX8vv2M",
  "key17": "5SHZ9LCAHhFXYeMjqE1hjnFLKnTpvnsXQP3GUhEMSfegKYQadf1bWBQR2EXbFSvJNBWASQWq2yv4c4HJP7P2oyvB",
  "key18": "5hJ4HxRA6q8Fc2isZGaBsGryNhE7xGWshJupKQj6J6v88QYu9EDpKRRwEBPEzXiq6evz8EJ5qfTaT1nf4eBpRza6",
  "key19": "28GqF9na9TX731fYeekLaRem5S8RZ47G6idWYNTSqxfTxd4dgsLPHJiTN6x6JLFhqxUiwD2ny3QkafB6HrzUtzME",
  "key20": "5QFrbR7y9rZQQXrrpWB1MPqdKGsCo2jp3VbTZ5iQE4XzV41BqcDVTC2hF4Du1rb1LCEAcXL5EBvmTBYjEPsD7aQd",
  "key21": "5RAb5fPw3BKdAATAHAKCPAqnKGr8Qmsm5Q3X6CiixxevF2FwfT3KRQbHi1WHZoXzJ8iA45W2FkiWAD6s2w1vEDMb",
  "key22": "2wh9UwWTJLDehy83s7rPb6w7XQqKTar13Pitec8ZZGVeq8VUGEqzVhBHw7m1UrustDUTJdopnWiaxG64dejeFWrY",
  "key23": "2uAbjBzKzdfhQg5EsiQg5Yk1TUYNAMjzZ5uHun1aycvhn6CPp6cEGG51BDWEG8XXQeKLeNP9FX3me9KYfBnEhk1W",
  "key24": "2EupcZxDN8azv8UTxaPxcCJqxCKrBfwexVBJCEnvkGRGLvHWz184EcXkXAwhGLeXHNt16qzmDfTrw6b2JFdzyyuB",
  "key25": "4fgL33My6nCFt6d8L6Yyc6XjRQYT9LmrYjUrxsFqwLEdT38A3o15wgUYzcmdnKQW6Dyt7JTUMgnJyPADhwaZjgwa",
  "key26": "5Uo6XAMmF91Je2wFpXaxBg7uiyY6r1RfwQB64MoyAYbEJjnooZ2ZZrD43kHKREKK7yS7QhgJaH99RMnkV6a8NT8k",
  "key27": "fyf3ZfPogGsUPonexgv7W7j1t5hs3H4WGgbGBdJiQmgV7BHwwqdNQ2YGQKcNfLxG8Dci3jiQv1Y62aXUN6ENPc4",
  "key28": "37VT8KT9hEhe4wb8xTbBRLHwu5UYjR1gLhrTL3bZ3yaiXLVGDwGLmEHoHoYRaco8gSggshmZptfGrA77ruEBZSQB",
  "key29": "4BSEEE3LrtXhuADC4HhmQwnMsqczgmcaUJUcWHuM87o9opUZqcw7kMDbJ7uuwN8zPnBNpphmvV5TrKhZLSXPk8bf",
  "key30": "5HTNaaBEBmr6iDdRUDzapWDQbes5eppSCP4rAq23cPezu4iXz46KFB28UzywoyBJ4fjinQpd3zfhQBLwM3LH5sz3",
  "key31": "5qoKgur8zibyW3Cs6nJ8mMchnFNWgxX5PFdtnFAudxTAa6KpV1E6w7rkSwUqnH97PvyPSXb5jAiVE13nnCkaTAUo",
  "key32": "5r6iLonj1vpDSNgqEr6h9JdTncX1ab1Jkbn5jwecTz4ewLHnczZoWxcYmQPSLfqFkkU2UpRJpR3VKSxWAikpUSZ6",
  "key33": "2i7Mb6ip82HX86qfvrBuyWyPhZBQ4DjsfDXkptkAJRc8zmSmhNcQ6JW4fRPiBQDzAPzQSGrKpN6KKjQyN2zeLAn8",
  "key34": "2jK3AEqkZg8tNaXsaxf5Lqp7PsXzwSRduJLvs5BcrnMNq36zF72o5gJtx36Bnifi1aKRUsFQ2VG6fqbzZjwtJUAJ",
  "key35": "3nFaFGRdaLqDa5oj34miKRMq8zSwgoy8VrUJpm7uKfETs8ADnZViUiGaM16TTJCz45cBwxGDvsfeCt5s4Vd3sfYf",
  "key36": "4p6QUAa1XPofLUmccG3ricF7sJeVnQZgLfaqY5pa712wLs7DBYwuLqmJ62BSEouixKYjSQKfdxzweeyZVinE7WzU",
  "key37": "2p4hDkitdd7fmNSfvwBkj15bfQQrE3kzZzhDBPBgifm5i3Ynzj5pim3LskQiAyZ1YfFgwGe9j4xwtqfS1L78xGhp",
  "key38": "5aztmH3G7xbWSzBhD1kHoLCiNp8J8VGxguLdRsEYu22iEaPN4BxSwLUqVPoBXu6EHXppUbjv25D32YteAoySnkXo",
  "key39": "3qxY1B6VEN9LNcmXK3Qk4SHAPVhH34HuQ72QME7iNZrGAiqNomSp8ZVk46SfRS5mJWpUVjK8zY7g7oKwbGSrk6Bg",
  "key40": "5JovJ7SMvo12sZQhgUTKTXKDJcskyv4KTLaLQ4ReY9nG7xhp1gMyWJymQkubEzmmjz1DHCBM1i8AaG9U7JjDf5Wc",
  "key41": "5aMzAYepDNnPoJu5cmZGYYJzQ34DiSUXmaj8uNvPRREXSnA7nnRdVfvSymqhHvjaqAi5ADjPXjsNRa8wA1jNPxzD"
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
