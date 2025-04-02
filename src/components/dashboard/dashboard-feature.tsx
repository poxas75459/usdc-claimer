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
    "425yGnTWN7tFY6ta15Y8bPur3YL6J75aeueuTjQNNKbryLy7T37CANsue6VsGUpCZWE5A9YLZ8Zw9nwRgR7jniv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmGCV8Gp4Xp9B78gWQ7GirfY8tcHV35maK9Kdvcw4b3BesP6AEVvaRi5USeZnsKfUj5ApZLnzuUdR6NDvYPmLUK",
  "key1": "wsVgPKwYRZoqrZkzs8XFdziETetCay2udWd5E8BhWWW1FEfdpDTnjk5dDpzJMnR4D9MKTMnkZwPiv4sBULbSwxC",
  "key2": "5Pt8c1p3dVEsA5tWJMnCKu5J8Wub75f2RUz1ckQtYt23sar1K5VZHfoMPgGFBUrEfHs97sYQdxYuQmPKWVRC2oVq",
  "key3": "3RLEhVPHNMSQdXNUrZ3tFVeNSKS4S1VRHg1nKAWN3k9VozCpU4GNZx5rkX9gAFtyQUedA8jGguGAjquNmV6SuJjm",
  "key4": "61fpjrbv1FB7XErFpSRkbG5NEGwTR9xjvpQz5MpZMhpEcT7VB3y1Czbz8hDZLDTbdcZWVjf9LmK3cwfRgjRnaf5s",
  "key5": "2uZiHGdgrNw3RqmhSqPrn2ZfjpRBB4ESDsyurnHUVpJvqCg7btadTdwNfv6EhBTR5rYoTfvpD7gNmgAntZGoP1W1",
  "key6": "5CWxrtmzeXNnTPTDzybCMFo9y5AZFxg3af1xN5x9ep6fSHeAo73LjAQD7PK7tVRc89JoVQeEnYjV3B5cTyy664iA",
  "key7": "3QR12Sk51S7sBmZosKb7m8gSoRnxHcCd8G4nmmZFw7ZAjiACTk5RaD4gW1Yzbq5YR859u4rY66HvdftcvHwGZGb6",
  "key8": "5f1dW9vfGVrfannwT7hPxKmYJpFD9CXbqi2rxXBqVewKZjKxvo4YgRGJBc6U8ydKbJX8W46vPsMu1HF75WzL7dGW",
  "key9": "4v4AM7pWWDwZMjhJmZzxisZTCUZA8gUz3PVF9VSfqeZsh35uvuwzW8LJPwjQpuh18JeWczpBhse37SyMy9z7rb2J",
  "key10": "4iqgMzA613qftGAitWv61kyDmf2JQZHFYXq3bym5niktezZQdNpL8fZjXFhBgojZpawdfcJ9CjMZkcqNNPWEKHFG",
  "key11": "2tCzUHXVbM1d29VyWf2FS5om3bmVdrLbYyZvEtWB8kgnxSNmeze6m3PkttQtbTg2htCNQyqcuc1njSVUfNNzNkPq",
  "key12": "43AXcKGLEmrHMuhMtQG1yqBA2tJEgPDKUoMUJp5UWKDwfajL2A7kgYh1hy751DGRCuzgXSDzX1NRSRbUwEmxgyCA",
  "key13": "3mBxdjx42BsehhgCRKPn9kNV9rZsL8eg4vwTjzwh4LoAkaTMwZdBjSvWbdv2LHNLKLPk1JczzdnuE8RGcYavNctN",
  "key14": "5cQH9K9zrEQsXEp4TBavKT54ZKAbp1BnutDfq9RhLJZjp6VS5wv4TDGQMyFBwQ67YqFcE4pwVihMwgWPmwFNMUyv",
  "key15": "5pxhf9cGpVUFEKsDeEJp6E2yLVaoe5DUFgTFvhw1Kdy8rdcYEhdyus27DRjCtPuScskLt1hUcuTRhV32MwgmyWR3",
  "key16": "2eMkWeh9Fn5DAXFEUxT9MrjQgi7XKe7VGKf51jtR8uvh18gE7pbbvtGFAMHrNQcfVy2nxncZRUsKeamXNJftrjY4",
  "key17": "9SbVngS1oDyDfu514NtVA3pea364rVXbc2Yhs2UuQbUdwLXCUuaNf85Ez5vxBzWPadQXp92cjaiggZNZ8brX3DH",
  "key18": "5PUyfRHYcEbPiZLe3HvsnAPQLnmtpyCoy33k9PFeA81v54uGFPMMbgifTmao846KM4UEGNiAY4mHbQcMeYdNm7k5",
  "key19": "4S1hFySUxN4xBkCY1PbJZVQzinGYToQYnotvq9iq5fMvGGqXmnUixNe79Q4whfS4PoqL95Hrdbq4wivDW99htCgh",
  "key20": "2zAfsFCYwznpneQ92djrXySRVBVjZ2vP8jNPydH1QgdgkjNY9w1kVL5YkcSHHkgNwzwMwKy3B3mX9hZWkD2DR2QV",
  "key21": "RxumanWLeJWkBQKoP6QfmAHwL3XbYLfDo7Uk5CsoiqvaUw7JretiDcgaFngxofPjiAG6qmTiqnQpve8uDPDsYnH",
  "key22": "32hxQ1BqervgDymkGFzoi1zSPh3gHuVQSGR8ftRixMNnTrfSMMGczA4LhqBXmNLYkLD4Nr7ZzMrvJJ9bwr9nzq5W",
  "key23": "2R3XrhWzLU3vBsCGmjgmxuHRZjHBW96pm3FoJpBWfJJFbiLjxWphJKGiAheUGRcPRzmHnNeSQgRYHRbj7WrmQr5Y",
  "key24": "58zu5VdrmkQpnfQAaFArKZbfKf8SFkgW6o9kseQi9HoSvFWjKUBaGjAKfPs6SprYmVK5Z9H6Sf4gJVAu6mGk32Vh",
  "key25": "3HF4HFeF68WQG1kz4J2D6qNwwwmEQwsoKd8nAuPhbyAcRRKhcni8N7xa7YrPn7WBzRM2xPMGBmQieNeKTf9jDwB6",
  "key26": "45cJBkkNzsmLn1LWhtyRDuawsZcML5Gg4i6Wiws12vzQsHKtR5nvWr35kiKq4jVCkwHpM4jdAgw65sFdr66pVnmQ",
  "key27": "5NG9LR1mgdWYm6Touo6bgzfVshZy3yBgzvgjvnMVids3f8sZdPyULCNHXE3ZhivsMd4Q8ALkm3uX5NyhBwSCuXjT",
  "key28": "67WAD2LncJFeXQr7tgoePiEi6A7cCLf9UDP4o3k3V9HAxNPaMp2NNKv4pp9TJo2xTZXkMf4vQ13Mqis7BWAjgwjj",
  "key29": "5n3u7enahw1rZkKrE8pnNXmR61bwCebUeL6GmAb66FdhhoSprj6Vh9wyZni2nUGCw2wPewqB7sTWVegXLihXubLR",
  "key30": "5MvG9D4yECRm4uXZ4vYx3Kdfrz7HBtxBSKciKu42BfB4Pc2S2dfYwbVMvDDpR5XM1ZRAfqjfD8C2DmXErGwQXwhh",
  "key31": "5zdxYhpkPZgVJrk1RA6RJnSfCPheaK6v1pzrkAjw1HmTLHWS1d2TcTpTeEsfCfpUE5hmys7yenZrtkrajuvfoQct",
  "key32": "47jbg3BuzfYP1bhUbDKKByKzsTGbCM7aoEXNW8KPzvt7bwMkczcj8hj6J7AEmPLo9bnB9RDy12FbxSMu4SbJy6d1",
  "key33": "SzuocsWVr11n4nFeqfeYMuteWc71rMdxyEYVX4aSKcxi9XFanQFQvDibQMLvirz2RBYbWnQxzKTn8Qp4bjY5TN1",
  "key34": "2jVXVySUbaSKH355g5Ucq67WRWa6ZL8Maoz3VjuL978cXPsbFinxxs9Uw6bQknwuLZz9d7d5h1moFw5jmrWNngiM",
  "key35": "1LMHDfoYQ8vEvZ8FN9cosWASLLuUcAetEPdyRjS58behrhtAq3U5VgtuJZTTQYGjjGsYNysvwmC5zJxL6ReXuY",
  "key36": "jGPJZgcpkC1AW7U7a9K7LCfus9Y7DK8JS2UCjNgbcJ1aKxmbaDG1ZNdZaVez3JvR3AmYgJbfQF3Enrs2dSzKmH2",
  "key37": "66tu4epG4YU8pVyDcxbmByKPkKUUV6hPsQP1ih9DDR4mLrgXYwXYFqpo8nb7g7fp3pCYgBMbPZRMY9eCNGTTYX1f"
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
