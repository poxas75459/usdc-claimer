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
    "4tFbqzUz8gDHL98ogsyL1bYyZhT2f1LBvfeRaQVPtLiejNwgiRxmuJhAyTKDWCvxLX6wpEuvcjBh1uPkecMx4JLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtzxUAarjzCr1QdDU3xEM5D82yPirveZ6xLygwLKA2Hxwj4HkKabBakfEmJUeUnV5gmVGKb1WW4RLsXVWWv5aPm",
  "key1": "SudqPzwNSPo27gA4cHR7XUkR7hwCJntM3AF1S9wiy54XBe62XdwdVkNHB7Rn2Ht5RzmRSthRdeoR4EvkUkifUbj",
  "key2": "293Sv81C5bH3RDJASosGrN1UKJasNZqqYSung1rckR45HXbmSMP7XfqpyE6V5iLuhhAycs9TAjMDUW1fXWnv4W2s",
  "key3": "2Ua8XXWdq1APCJcWXVNx6MJZNWCKYP6pYC6MUnS1NdLq88fK6xSG6wBSVw3XqN5CRsB6abtS1FuiVxUr16RL2Zgt",
  "key4": "2foVUguuXZLgxsaf6yrxy7jW8MJxD7QvQZHU6a7Fi22RSpQUWLuEZtxAvD5AimCd9PjrCMRAWu4yy5boGQeDCKP6",
  "key5": "3NjpUJboLqn2KEknWixW2dLAXrNa564pzS84XyXsxYwLAYqYJV2YHzX9xbv4USaC5tu1p1abxssPcAQWAKkzY97z",
  "key6": "31K7bqiXefrEy8Fs7bUkxVCsDBP6WRttdHEekEUbb3JxDonJ8WgeKqeHYMWVYnZ6XPmZVmSQFxoyzHHy7kB2zmBf",
  "key7": "4nhMvc5qgjWjxJ6QAdUeKa5gC6jB2kE4N1sDXQuoXE38vfmjrt9idv3qWNqYd5BGtp1EcgP2tbN6hkf7AYyRTG75",
  "key8": "b9559wtjRozKxWXBVPEUwjpHBmdsgDMeev81SN63TSXCwV3bbPEZx89Wj6zCffAg1qavNJkwREKCWa1vGGjiPTi",
  "key9": "4omoaxtZ6raacWySAgw8qGnufBE9aSrRyrSgjuBS4M33b7K5LCKcF8jFUD7aL3pY1v6Q3x1bsVVYgAxBDhRCvbqh",
  "key10": "5RysSS1CfyXcXjQCYhX4oYJgMmorUnaJcCH78RuK96JB4WTCmUepce5KNw9aQYJYST4P7LQyeJZFnqWRJxWbneb7",
  "key11": "5n7bjxJ4L8oqXbM39GGJqJoWvS7A6U1ZF4w2Yya6riQ8KoXDBmkQK1K7E8i2m2YAfBs26yNGXPidvqeACnGxyrGP",
  "key12": "3x5fx3vuLNukScLhNwrAUnwZvtRxdD85YFQAFz2DdkrwZicwK92HGfP8FTapRi2A924ieJbhgwThkfbnmYuCzCnk",
  "key13": "516szagFuvphiXogKTQ7jsy4QfTJWT2uV7P2KqRgbkHoALgz2aWxabEKk4rcNKG8tVrvrZHY8oRvdSMw2c1rYDW1",
  "key14": "cLVg8YRVuq7AJsD1kW581aUKWMkHosyQN5hahXNogQX9mDr5ZZoVFj8zBxPNdYn7EG6RMSkfndA2WbcB6wqogiz",
  "key15": "2SWfgqtQbLshTXyqV8xtvxB9BpXqW3QTMow3KjpJLmz8rawnyrWNxmA1xxQV49ruxfbcE2dMPxSESPNFkYsqGvKd",
  "key16": "WKMpiAsgK8cvNG1FmZC3VdwyGJ58NjjF2RihwBTZNtVpwjrMfYVSQn9BxyqEC2Y9TAKZs7SShG14azJkvtTdcKx",
  "key17": "4T3vXRfK6jzH5y4iyYfMcNM55hr83wH6ZBwPgsAhpXpz49vz1nyqsewsDzBT8byyHRNJh2xY6MasJYCK1WpYtd5i",
  "key18": "RSbyJqEYbx1G9w17Ys7dvyNECw1mnpov3HupFEDjB4YGaQobPYjF1E4Mdvmnu55ZmVmEjJG7FFPbuFZGKouThjx",
  "key19": "2bH3g72edua5eDn7yKwDMh8NUZAmHANiYLB96vm16LGEosLj1RGDHGnz2hpviHRw3ywEpmXgz4cLqrnWEoqp7ZHh",
  "key20": "NQiVkskKz1K4sQQV8wYaaHpb1TU4VVs4qHWp7mUweKNPkeYeFBS834nK8EiJi1zUzSvQkVD9A9uCZt7xyQ38HBL",
  "key21": "43dU8KehAG5o8s5JYuDMzJgTZxK1Gzc4dUsKuzAviThjDqkGBNh3cXTkQjZKN9HhWCKda2aAJ1u3diDgnC89qDDj",
  "key22": "2FojMRRo63Jgq8Wcg6XQLMVij6xyb3zRe7HND624GX8diDZ9WU2LGp58jNn251PD3MHPFxa7SbZrh4ctwJX9sxCw",
  "key23": "23DNCN3LEp3NzzvcZXBedf1J9DoxHZAAPAYA4ydPb1CFUyoDmkD8drBsNzaS1zdhe8uVYMMqkCT1xknACEceEnx9",
  "key24": "5m5ZT3kpRegR5NgeoV1T9xV7tRPqD2KEXZ4tfLctYjo4eqoaEEmrbJQgBB6eVGZiVecDAxpQeC7V54KsAq38Bq3r",
  "key25": "2Fgi4M33oHSxCDHMZib46dzMsRxs47B9aDZstB8ZUj5S3jGLDPmHeaGtBmGodEmCdnpQdrZpkFkYzAYvaixzgSqk",
  "key26": "33PzrN3v7UJKnp5YsuvpT96ofZxD6ApsUEUo7GLNeVMGrJGrMKnmki2azptrNfiACkXTAtnUMRncVAMjVKBmnbVX",
  "key27": "5RzW6gfPrjAtNNMa2HVJbuMgddqQQPHrEASRBSqHJ4cmBMq3vyJpJjpXFXs5BWKbuDAnu3N3GiJmoBjAQ8bcQBxL",
  "key28": "2TqXE2NmHHeoznixYebUN81hdTFoTS5caXmfx6Sy7JMzFqKPrc2UmkFNtYTxeAvqQEKR8hwZ4BKxFES5VuN6pRff",
  "key29": "FrPbXB8xLmuEZebFQ6HSvpy26vmJv3x1amsUDxM1mhZwu8qfVe4wNg2qfQke8YehWAxcNuy2VMwp1yqVWjQNApX",
  "key30": "3qwMBjwAm1XyqdnYfae6NauqPxHjujvAuc4NgJ5RxdnCjGumpzocREs5YFDUCbH6vj91yBpcWbHbqJEE7QgtFZtK",
  "key31": "3t12PKjkshK6V3LQ81aatSBsGJ11pLuWYDfghD9uaonD4C8putBYaHJFiqZfTDsFdU2ZN9f5Vqn9h9XVDi1pRW8k",
  "key32": "51fyxTrMPM8CyiHHCNamhkenQd487QRgnahFexi2jRAaagR2Lr6jgpvnndkDWjSYGrPQUXmwE8dY92g7nAss9ExJ",
  "key33": "2b3pCyfbWSx3ssBcJgHJjho3XB2ckMe7WxkQ1mxHF7Zp9zuzeK2iXcTC1FbikWHdurUz1KyAwFM9FgrxAdTWJjky",
  "key34": "2bLJfmbepzYHXXPX98dbj1PRDU6RnsK9oNmcHEVnDE581tnppVNJriKqC6MRPdgGKY3wGwCwDM8GZenftFh17gGG",
  "key35": "3bbnRKqyS5cSffXS3yPcfvCSykKqRj2g2tCTPhkV1ZNTqD4dXGiwoF4cu8M9ZyMJ5wyAhN4BDhxJUCutkrTGK2nr",
  "key36": "2KXoA4TGwLaaQH1zNjnk4PfVsEhSXKtFGhv23KmKDKmPdR2UDif5BiGyNkHUGuB7hNxdAEuGtAvMnhX7EeFbvDCW",
  "key37": "oPJZ7LEbSWMi8eXLDuaNzu89UvyDKojAkpJgxR9VA7SnQFVLKkTNdAXjGnNTW1gc9PZyfDusKG14HmWyAkp1MTx",
  "key38": "4sAv7ipKeh7EgcagReV477SyHoNCVL9jD31ey1p8Hze4ecUxJcpYfAEZQUVEr4KRtMTd8Trcaf64Yi7ZUAyqUGsh",
  "key39": "qyQASVGrCkbhKTBcydHtc1fZcNwrUeSQ7N3tuEntEkCfj1CFPkapZyX7f6GUswEkMTWtvRF2Z1bkLodnwQfZ8Wp",
  "key40": "4BQoPiBFPpS6Dc4TQKfv7qB3sTGjEpU7HzVEZXvwYXRULKGGL6NQ8QYEXMY7ZD35F3mMSGujAT3u9E7DJ68PsrwB",
  "key41": "3Ct4P2ibRUCnpUrBHZW13xG2dKiwgYspKQW9UE6u6UA7NMuVDPAqWs8KyUA6smc8P2P7kvRj2wQC4mAdav8u5bf"
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
