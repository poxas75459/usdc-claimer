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
    "XzqBMRwTZ8iLxoJkCDce4cbuDF2TLi6RzYyXeUGNEPEZZ6qw1weVTvM4o3RigqkR96Uzwb2Kmof8GJVLShNq7Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iawAXkBjTn76e6yqn4pgdQD93z85y68zUhkiSP7Uhsav6J3NWx85Uj8RkMFRcVKrJivfdZFzMDJJAj5AYcTeoyj",
  "key1": "3PCVruGHTC4xY1uJMNDKx5Mc5ebpEhxzG6Xb32gADDPFDCwmd7zwjjoV1xfUMUaNejvfRXhvZscQoTiMrgSNradM",
  "key2": "5aQ2hvu7ft7EB4QBwnaXAfq3Jitc4HHWQqxjo3Bgi8KQw2p6YiyLH4dEtbFHWmSqgmQHvCGCMZQ7uoFqZCoTmpkA",
  "key3": "CvbmZYZHpceCrf7j7LbDHqPBBhErUAGNBEMNcEpRgVWxKwqjw1bdn64kGTberTHnv1Mn4nNJUEfhntncC2wx1ST",
  "key4": "4XaxWs7mtPWGD8tYiPtw1BDArVzEDCwD1abhpqZQueoEJf844xQ7Q1qHoqRoh1YcD1eX2itKkwBPNCXNwpRcfySD",
  "key5": "MU3Sq4r5ZzGHX6ydKfi5phApNMNeRjZXiC7bCRrFPDeUsrhjZRc9JJAt5qAYqAqznhM9nkndA8PGAvb2VB97sYN",
  "key6": "2dAh1sJCvUENitUQmCQPtzcYPVETViVtP2akJKy4GCZpKiUG4exme7yN8qRUp1wTsJpa2wuWtdSeabRAFfGQLMHf",
  "key7": "2BbmjSjGtALK14jWDwgyGi1NrCosk6st4ko1zkYuVE4rPxXN31HNp8J6WdjARgQbJfvHFhWfRKtQBpqubeB9LhmV",
  "key8": "3acYCHTnHjbdnbryb7SSr5yuwdEZLrvG7v8Ln6MxmuJnMc3Eqf22eEPFBgJw7jQe85cEfH9eZVDcYZ3kW73tbUFE",
  "key9": "vQ1VhyzwEehQNcfRU51D2ybKs3RuzmDRNCfoXRJn6Vz4bZ1t4YXEYav5Q9m1Pd61NF5UZSyW8RWDr4PwXw4dXVk",
  "key10": "414ZuXY7msqikVRtZffjN9dtWJVvme5R91BChPkarJonveFiFnYdbEJPiTtw5cjmzWkrU573YXvPm7XwivKxCdSx",
  "key11": "3qsw3p1XAEtXbaodLwjqE5FGWjvwnQN7SMjGbKcYkoM8aHhgMxYamZ9cxzkEeis1Tvr6BYGJY4dfWcb94m3uLd4t",
  "key12": "5GpxZ6ttZqDXNpCgJhDHowoNwPFPixmNaMvvRphYkWGAZc2QmtB4BQpxVnPPZFH8XD5ENXRABZB3ii3R9i9Coy2U",
  "key13": "4zbZM16htxPNAhPgVg9yrgY6mn6STpp7LT6iSrySVErdzc14Pxyd71gKbkWccooJtFAkRzE7WGE5PGRX4qZNCxhW",
  "key14": "5agWX2ksLmMGpSeJToPLWArzyFnDB2LxqF6L8STX6YQrBke1b7ZVRJVPwhS73RtPhzTdqtdsQZr1Kb68LLY6XJm9",
  "key15": "4JC3RntH2TkLzS8dLeme9xviW6YMcCPMNNkHWsENQxn4na2BHYs4m1e8HS1AZi2EkKxZjvDUEKectdmmDprNmzXs",
  "key16": "3jo6rXXGSmTthHa4UMRFPV1hyZAbFUUdau8VXiK4nB2RXvn3Ch8ab2B9yEihqj5J42va3igQegJbGWtV1qob6kzX",
  "key17": "3ubYXnkN6XrDnBijxuFFYF5pNM1TNxEPJwd4o44CyV2iybNdSor1rW8wcBuPGqsW7yX6M6QyZkdbdA7VEFdGQZ6B",
  "key18": "5yucrqbyiSHuScemDhyZTLKJaaqxhkd5ZQXGaqdFJGAMryiLPNqG9R7n9JgNx9doFZqSD8uAnAZAfL3LUytrPuWb",
  "key19": "67qXAgU2swQS2na79JjjbEm6M8crh1Xmp7Tr2j5wGiG7rksNqC4oJ8mwND8HJ8z5kEyd5wqj7d2RX4B9VxJ1nay2",
  "key20": "4xK1oTWnr1smcfwSbhHJ5Kf2YeNq7EiaRqcv8BdYTjSEhvXjBuFxnN8LTqys45NpSxjYk9BnHQGjkdSSUq7tQcoN",
  "key21": "2yuFcyZyo5a6wsayYrUFw7GKFVKMxsm9B2rPWbMQV2rrWrn3ZRYvfsKVgncRqQCXbKPU8jVvzmnyx6LyVR44PjbF",
  "key22": "vgnugxByZMZBPZrFbgroYVKTsWqLrnvqsRhpZpCLyDLBRiQAxLzbaHTCP3S8Xx9YcsTwY8JswyyesCGbCDy4Nx8",
  "key23": "3ZryAPGjGtdBz4dGqbny6YJZLo57V3S4FFd84f78ASPjKHWKtdzivgYy1AL8EW4oy8vu7FZQgduPY9kWGZmGDgTC",
  "key24": "23iVqP5zVGcHwgY59qzjmApfExh2H9Wwf8ARizZoCrREXcua19Sc9Bh9rjNqgwwMagRZUcTk18QKV9EXYteU8kRn",
  "key25": "LwmGepzu6JXcq4dDy4PGeoA58KXNjeLDqWCT3BeB7eLy7FEAT7kgyfLKAuPj8sSq68D1Y7ZmmHWT9Qs6Ho61vdU",
  "key26": "2xkm71BqMGENT95PivU9tJSGnP1c3Br3abXrKsmVqAPx8HWGeAWvoGC9FyCeMY7WR9Eryqd5ezEkz7DBf6rrXhTT",
  "key27": "22tGMVeRFjca1paD2tRvZKbdAtWc2LwHhHeZGa17Yo483kB2jsMvEupXrtCrJhperuBk4eaMHXssx7gJ1EAzuBE5",
  "key28": "7U9Upz66ntthS7aL1ukYgmtJ7DeJxARgv17hBw9qGsTRN1HYksFsZeugbjBdcjFcDUnWixa4njkNuuLRQgjGLqq",
  "key29": "2ziocA8ipbjmUBu6McUVmvBCPEJoF11TENBBpgay7VNjg1LUX7sdMuD62RtyWaqEtiTbwmvDKos8M4YkBuYKZB63",
  "key30": "2N6oY3asb9CVR6sG4W9fx7ZCCQsjdixafbQKxcrohhV54UYiAJuhYisNUajFHvFQarPRvv4UEwcheqFaWfztweGL",
  "key31": "4okSSM7v3ioKUnPYerep85SGC8npzKjaRMgoraJbsRSvh2zcjTk7VEpb2rYLh9CVfD7WX4QSTGU6UPtoFXWLyC3j",
  "key32": "2QXTKyjhj4vMpKgU8vgBiWu2SRp5XvCwEbNn2CdYFWCnEF2ijdCaaXroGeDVFgDehxsjXFc3J9UJaMaTmpdNWvWh",
  "key33": "44o7aEExSXapfXbkHZdRRscUCMn5fH5hxd3CryCFAwaPQyR8HGbfUK8qhKwD1foecreRqDfKoURJRwjvB5NfFebM",
  "key34": "2E1kSARNY8FKAs934L84xELxsraLsTk2Rq5W3sKCVydn3vQer6xfPQWSBvAp4g6ekzvm9FPbsq5iggZayy3f14HH",
  "key35": "5ffhbTGwcUETsjzjxUUcywMzUcZHR2BKEsG4dVfCvfQekuRWee6qR8ZxVgsPQPXas2eMH4dLLcD6LCrVJtDZSSzG",
  "key36": "3g6fmUZgX4tgYXEJ851ULHJiJ97YEBs82qcNUAHJqKXrBwdUd7Ymu5CFUaPdXdyT4DoSqkPkuy9JqhmPWdJ6Cejc",
  "key37": "65XcDkJHMXapTr3gkeW8wSEZexARnZZj9qavWbFmvbADvqHLgiVjP4M3dYTm9aHbrgxw2XpP4GzLLFaYhqFvJsxj",
  "key38": "jqGngLC486JtPCPL4jF8i1BUwEYe6UvReGkxBTRfKp3PiPcnZ3Pf31XdZpzF78bmFFB5af61Zb7KtBFqHKm2jh9",
  "key39": "44BfmGcGFXSPazkBtT8xu8UdF411xFKBFTpA4wkKSZLUcsuBXmT1UHBpWghnQSie7gUoZ27WL6pM7L6Sb3uKHYAu",
  "key40": "5c7m8y7uV7sbgyQ3gcBob3wRvWC1J5QXuLUvazkCMoSaD689AXm6xWaLuXd6zCTUdfSFdHyzYAASi7pmPCmwSQn8",
  "key41": "2ADuHqhJqyBwEWeJJgy6b9unYeUw8gGL8JkkymD2aCnVPtP5P2GuRKKLrCaRVtniHLxA7o7z3fZvKTpzG752UKHs",
  "key42": "XZeZZcBTmtLdgwdbS1rb1wKzajdDxmAhCis5jTRXbPDL2tXxirm99oM1pWGJ6prKLUNc2ku2cMwtQwgoYy1m2gh"
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
