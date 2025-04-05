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
    "3aAkcw1NYzSfh9EcVJYv2rGGsNKD8T8XHtAuYgws528fiFKXEKVK6aaeVtf8RZ8nSi2Y8V67Svi3zNoTASB9TNpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvMwp9nx58kDuZ2bEkumKXaD8grUi1pnAHvFGhV4XNfB2Dgci9R3nrir6qyxXWRgnsAHHBGsdpzyVqnxDFNoH2r",
  "key1": "HwzGZFox58cb8Dc6tBwHCcgYnWE7W7vjdP3yRWXYrLgm3KQ4LGTLYsMiMq6KjySCaKCsSKrkxt8dwhDKcr6FL76",
  "key2": "3ncA56qwd1VLx4XroK7XabPXzz7TDvA2F7KMG9bDHKTS2GDQFnyAyW1FFCMdxNhDw73iQyMPPSWU4XegvfHth7Ud",
  "key3": "3P3ZQCVnvEP852KxQ68ewgRMJc3VSSmap3PBuqCbPGTCMDnhfGRYmcphzurfdJhN95v4zv32MukLRgfLubzzcAoL",
  "key4": "4LFd7UHdDmzW9yt8dhXPhGFLK2YXczNhc9sCjnbRNcjYdPSoJ2bKG8ca5ofdouHKbJNqfGBzcogQkM5Wi6xAX9J7",
  "key5": "4SZAPDj13qJQdpE4rX91q4zaXTZJs8td2HPDpASrCdqYf64GzUeGsqncjWhVknFKNrumyTAC8HoGEjWNfbGEybrV",
  "key6": "5mrkyjWnRYcB68BrBn3fr6Mrc5PWtrswxoftcqTpbcxaGEg1rgeLcbuLXtFW5pFJdCSWuD7j6hMi1hnY7L8P14Ti",
  "key7": "5YXNNhWvMuNiiCbj34KSV5WKwV8imFi2g5KmgLyr9tKKKuQmDmrzjSGPPRkFT9rHp8MhjE5kq72zDc8PRVRBLfxC",
  "key8": "4evY62mvWi5H6RReqhm2Es3Y1ffV1tZ8omgcGyscFhNNbP5L28bpwu2MxD4cSn8mXQjaXqFHMpniV3q2hGfhUrQ9",
  "key9": "58Htrw1HJJC1oh9rHYxS4Zkye3JnxTUqbpX15sALmNnhqZG4QfK2HSmcjBJTAvs4jeue8TMupFiMErZxFvSbjry",
  "key10": "4GutrQDHvxPw26LPkhPZeFMvMvCKhoqJmCX7B7rHqveuDLC3vZ17U4F1QmiKR4QbJtNnVNnccV2jAvrCnx69m7ht",
  "key11": "5zJ8QLAZQnGVRjk5jwzt2m6Uo1B3RUSRKNx1zMhdvRmEuPuZR8LA3s51TY8pfo9uweafKbjjcBWqyCd4xuiT9TaL",
  "key12": "VvHNkB6ATddnZnEx6huP9YCez296Xz7T3QcZ3ixu257rQ4UCamdJAsXJh6dAHj3Zn38XS3GnLCYLUYFNkD8aie8",
  "key13": "3bv2bJF73Sn2WLpv7DAPSpKJAgBpK5cSu1p3eghe2fFKX5QuJneXaMndLZ3CzK8eyzZfXsqnbyNRgmRchVWpzbiv",
  "key14": "3TJH7d7SeZmSUNL7q8NX2rs66eenXimWthbXwvgbnJiY7ZoGSUMYGnkJzE6upWFatBhmEwGzcT4eUHfHFV8CGGMb",
  "key15": "5xWkfzraLhCpKYdd12JUgNrrYsXgpVWHJ855Awua9MwXesRzzBVfCeF8o52z8P3agAP5bm9hUuVssXWGJf7fhzvi",
  "key16": "M9GVd8Rzqi9irkawp28ZPf2YMUqhoobqZAP3Y55bds4GMSbEvUpyMGE69GkczNKRDgRQ5Vbcr76xM4U2nw7iakU",
  "key17": "2BrxtyfEQqx5gPNx8virSQ7ZJhX39UfzVxuibS5aAunu5ZWSTTsA6Mrs4Sb5ZmHo7vmxPTqpy8qDzgZnf8E4upSN",
  "key18": "3zMAtN7DLPKwbd4fbfd2NhLn52po4BQNVJ7yVsEYdr5qP34MeT9J2CY83XEf2vdF8KzSLc4hhH4ryDrvX3mqiSZQ",
  "key19": "2K7MyCdSqfB1HcaYjjP8DyS5MoBKzFyHzBvzThkvQq8m3Espso4rcEZwooQdxXx5eDbebSgxYCcNaySv76bSX6Zz",
  "key20": "3XiUcttoRXNEk3D88NUf7K7zE1TVz8PniGU1CozLatxxUUx38bX2VBmR62VQYvfihzwbkifPoXdif84Rz8Nqn695",
  "key21": "4XhpiqxSP2Eqyh45CXoi9pRKWiycJZXnBVN7PFUYavgEL1KgzSEbZjpa2kozxDF5bNuDbL5fecP8Z3nz6VEdN7sT",
  "key22": "3KZV5Wb9X7UDy9EvH8PNVupQ7cxq7pdcJFm1zxhGmVnUDufzSeB9c7jYZvcp8TVNwuioS55TsYzfWqKR166qfhLo",
  "key23": "8aZLf1MrjmpTtDdcHyYPqXP3JuYnXQcXrE2MGESmxgG1Si95EnpLEWVTPhRvVA2bRerA5EScGi1S21C8L6UtkUh",
  "key24": "5K7pXtfY16bPtJaEPxG3h3dKhB8xvZNCwxgHsWgS1S2tAzUwoY4ZrmBUzb92ViP3aYZMkEmkCFB6dPGJ1qyuCuiN",
  "key25": "qxoaYyhkin57anshPc2wiVzMTS8T6qvXZo36Wx9sARPQRvERFYviLfCkM1cvjguxJjiuhHFE8FBbfvgLz72fEk4",
  "key26": "36PEqn6wwbwvoBu9TxgTrkZy1aKewJveheG64xKGKFrsx9MVHUJH5mTtFe3Fww3AfuA34QucgMm7bKxnmQaqW6DG",
  "key27": "2125QCpyUhKSBGdkAymj9cLm7nfNkb1CxcQBhKCkgvG6oo6HPk22JWDFKxBcVx9XnH3ez9xMBe6KC6VmrJ1xqf7z",
  "key28": "2p2bjfUYtKYsZ5qgtm47rArij7tMGGg4k6FXiHzPiua4fgxuoRmojHHU1XpFJFgKpBrrDS6qAYUkyRauK77AXiJt",
  "key29": "3pxyNAMbZjfQgTDM59mKKuV8UXLUV2uGs8QkZeR1TUryd6o4dDzsP1yb5GpsQiiE4WdLCritHhq18bQ4hAo4RPaX",
  "key30": "5vLcQHQb9gTgN5GiREA7kMNqUCeFW1qytAtCtY2gtmakeQDw83vavY9wqNG13rfochQT12WD5hztUHwNNZRbNTSC",
  "key31": "zRWyJNRfFi6av9enx3LTpZx1fY53BSnVwgxoTMRxhBSfGdbEa2VWS2ct73jGUbefu7fNTcjgc2QwpQ3EuVq6Xro",
  "key32": "yRz3HTdtWaGAhHqeMSMUXQFzrf9UEBJuzgyJFeVHdBogFNwSx3hFRQdwGNbTbcT1VPfRAzhZTNGpRhM5eNT8tMA",
  "key33": "5gN9aDGk5o8TtX8V7tKRTeRJbvxGwRrRS2pmkEkVPyU4G5guN4HX5GGqzUdZb8dN2ayNUYVHWXLLZQcVxnYtwMJ7",
  "key34": "4wTPz5FDNy6UAXWfDvQz43s1i3h2J86YPUCt3qd1pnW4C9kAnWy7TRuYNZuWuc2BqLJPJibzydwsU53B6Vdnn9RS",
  "key35": "5fpMSNYXLTrrLxTFtse72fSFxsDFYjyb6rH2LLK7gmerr2L7PyF5CJ7xaoqgJeMmjYKmMdfhbXsWq43v7zVdKXzn",
  "key36": "3saSiDWEBhPNZrg9fLtQ2UU8x67SfjCniEm7UUWyufobB5PeK6958EPXKmaqCaJzzgBxJDapes5sfXezNfdhYapi",
  "key37": "UMgHEPAuZfPLKbvFhisnv7egzHRQQFoaVwvGa76wf6RjgLy1PsW5p1LLRKMFwEZBf9J7kpt3aAQ5U7xRPZaCHCm",
  "key38": "2edcUxXS4Enzg82k7ZdHuLE1exomqMQGshf1ezDKscwNgfFSn1gqbPf9kxxYqod8GfDomckbPZ6EKhkXzcqLsCbq",
  "key39": "4AMgTfPDnYAsDaiGvdWig6Sb19dzo8cLGj5RFxJ4FHgxyB3EU6fzEt5x6xNtTkazWGHUYAB42KYKq73ZcP3hvxiH",
  "key40": "3XXjS38DLjUSoo2qEnnbYrMHmiU8VnDh6mr4Umioqzd7yQE8pJobQZmyMsW5UGEzCswRa1KNMPYXE3g5mdc2uer8",
  "key41": "fu5L71mGz8vjJ6fwpQUaRk1Se7pniB5F2Uye5mfhUEkUARp8Fauv2suVLe9z7htVLKoy19LZt7Ef4r4BcRD8GEu",
  "key42": "5CJ6C93ihVnucgcnmmqFRHpoJ8aKXQaZE74Ur8vPPn2RLwPrPpESARNMQm4ow57zCQp5FTUxH9DggyMVtAwnxVwf",
  "key43": "4XF37ox5xGgE7o1CFgLEZ9MdENS4dABUKaWEVU7myx4HdNDY9gaZTEKUqSznGPHcRdomq8DZkcfMGqgAvYvTMYJz",
  "key44": "2sEyQsjESXUMYZenDCuMMktq4mBhLsG7yb6PePMA1kpGa4FRDxZNhC9wq7MTGA825BPBVF1MPSWNsaQezhZcFG3s",
  "key45": "51UByfBLC2x28Y4c8BtAS5mVQPdpGwmdwoejv5WkpgKFozxhrVeUWw7zp8QESygcHWRF6DPqghvRWZ99zdpB4fb2"
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
