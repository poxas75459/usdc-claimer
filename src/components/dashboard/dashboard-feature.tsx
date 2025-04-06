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
    "2hxbumwAj2BwSaCk3PxZji53XFMxUYVEbqc8yZupz3fxcWQneu3zKyHdLQn77JpY5FmShAx8rF97UqgyVaBkaREu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9BkrAUbAPsPvghnyCyc7iprY5dpyyE5f9gYa7wEo8kkdRPBBUXFbtFcfN66vamHmDRcjYWYhU6wvssy4SeaCGG",
  "key1": "2332aLjGdirB6XeKiPrHx5NSxqGZzqFZRhXpvLUDXbDgC7tBeihRWdrVrtkbTAy6kRZf6RzRKQB7hjGrwAyYmWXT",
  "key2": "uZn7pfdk7y7Be1vQgofU46iXANWbnxHcBMbMHbosFu64yRKJct49wYb5n8La4TeNxbdxMRYVYJRkocEWPtu8E7X",
  "key3": "kh6ESXMcUdXge4d6oHzgSD6e9YbRq8CLo7CqVZqi6ye9NhYaFvSYxruCpYXH4WKoQhLSua2USCeZd8XES2WwWYY",
  "key4": "4pMCVs9Qk5LpHwc5hAhQFqkTe3LeXu73aRfedei72FKWZzm72mqYo9vitTeiBsPUQSUmvdfWpmqVPBJyP9jDKHJt",
  "key5": "3APwyUPAdcBecUwNeNoRd1UyrJHbi7nSUHQymdkmC5vv8YnYTNSJnQf8oUmuEvoNBtTH7jzDFkEaeYbZtvYp1BD1",
  "key6": "4EhF2jCtbdAdC5ujuU2sXk146YzBPkMGvKZ1KNN5Ch2F6ZSEq3Rio48qJKsUHz8y9qEeeJcSw4PViNEGmPWAW3hV",
  "key7": "5tiUigYgR9RCQGPhykbzesYtduD7XzYgLkFbizkihtMZv81nF7ZbxHtQU4Dbcu1u8V3JJMNPTfUAhnVseYu3sCiM",
  "key8": "Y3bc1xRrM5TdfWj3Z8mtJjisdJu2K8t3GdRGiQi6rskvqaf9YjeucFTNvAc9eLkpuLqTzRL1zWe9m9UuYUNHCsd",
  "key9": "2SFxAwJF7T2X5zfxL3FLW4KgAejr3DwM1dA6aATWRZTPG3Px1QRJtyBzGMdha2hdf6My8ydoGm7zoKjP1DYUjZtM",
  "key10": "2aoxuWvQVfeyKAZg5agqtWBLHSfgh3BGqcS5mUhF5AZxaY9o6A24AE733zAsH6YXZrdbGaBEXP2v9PUnts62VVFe",
  "key11": "5CwEaXHaHCZKZ5rsM4RUxTXdbRudiMDa7fMeQ9WiZr8WoqGGKcexs43Zie3JkgUMRhdmDkUEtkCjs1aLAv7AfteE",
  "key12": "8N3jb6PyBKcFFWonxcndGi48joVU87KgmUrkvgsiFyLiKn7DaoTJhwSc5asryZSnHxLiF1z8s9tccR9beKwn27a",
  "key13": "2FYHmfBVv8xVFLAMuBCWPBeFRxWhsjttdZweJiMiiP9VKfXFdh8G1Ry6UhmDDZCV4Z4uXjWxZZngnv7xc1WkAiNP",
  "key14": "3aZcWFThcXF9L1b1Yb3PYpfnmBa4kDEF2Bpx38PNitSMtnqSnDVQ8SHREGq2ZfrAWCmQ47wxvihaf4e5H6Jtx2Xk",
  "key15": "ptt1PC6Z3pHh1WWiS2tbYFVtzjbhvXbobx7KkbwMjGCyBnF6ErfiHTx8H44CvPwiuwTugwQELCzCnEFxdeca4t8",
  "key16": "ypuAM4V8DSsB1YAnKmxCXEb9uNHhMuN9hfJN4J9A2VvFDbZuYH1hL1mdWWShLeukWwPoQuj6GLLLUJKJX6yDUFT",
  "key17": "5ctPBY9n2EmeBpLnmGqNPdrsyXx8uuP3vHxobgJoBCzwVNn64EwgZrcuwaMkAhSJ2VJRQRWpsvfWetUP2vo6Znms",
  "key18": "4kffj16ENm6MyhgZo4iez96woy1moQ78HX2zHMcznZW8Y9yonwzQWNmQWqBQz69wUCZ9e6K8JgBsXDgWfhvSY4va",
  "key19": "2jzaTQhqvdh6PLTVTaJB4Bb6XGFX1i5P5WiBvvHyMuLp4D7eH9KQNLFpfn2UdhBvC4wc1dxXYPPL5K9CPvb8YdJd",
  "key20": "BEEdFUu5AGsatE8aLkLDghArj8woBDWDPprHN8ijTyP97XoDQTdbqBJkpMh4fHP397ZjaTP2SaUEJE2iQKiPRJq",
  "key21": "2Tharh3CtnMRUacZhVgmg3j3Wv4PXE5eWh4hy4XoecbXHuZUZK3mWddxXfCNvzQyhRgCjYskZkTbBhjGfCDn2yLV",
  "key22": "5YWGCaGBvm9YQqHfMisvkRFRSCDHwoBEnANBXdNbneGAVz7EzA3w8j9XTHzEntXTHwqkQRd8X96ixhzvQdEKTid2",
  "key23": "YSJBLH85zuUNFLb7eyjQFdcdGa6iQCQpeNNv1vWoRhB1ADqk6jHBP2zkgwH39tTrACk9dBxb62mxrHZjEkAbh4t",
  "key24": "fMY6wQMXkEC5KbX4NZgDJu54Nj4LiSWxMakhvhTYLhPxTukKzSFKEfGjD4RVuDi1DwVXsr37iYc5k9dqo3NEkDi",
  "key25": "4UDSZ9twnfZv1EoHWBg5yHDRrcrDj3sijKQiDbyzvsX6doRtqjbZWWpCf7sk5SaBucD3ktY8incUU9L5SqcXcLFc",
  "key26": "3q97JEDw4KzDTnrTpY8fQWj33D5iG4ApqT5EGYnrymbcejUNPMtVhKESBLeu9APBsZvwFJv5gbbtcp8TqMGaJYzp",
  "key27": "4F3fkYfc2NTc3XqVHDYgyrSUDK1EgtqhhnJocRipEvgP1SuhP8L5ZMzTjmnq2z8qpbnnUZ8a6JUJAXbGzfNP8Wsw",
  "key28": "32arRrsW2iiW83v87khUQExZ8jCoVVJ8ygYb5MjXZmVXxzu8dnHhS6aMeW6YtMVNLh4G2h7ZnsuhQAqfxxLeTAcm",
  "key29": "4m1j3kL4H8ybMkpr4KWicrM9umZYbBAtjWb68K3hSnsHpkNcFH8KNFwE1BVwkQ4NU4dJLfSNpASYfUZmnUiYSHTZ",
  "key30": "4KmH11mV2PXzMoRvuv4exHYsTRPDHcejPTCLzDpiqHG8oDNzu19mbiCh82ADtSierndCgzkP7UzMnUkdMvqFumDd",
  "key31": "2wi5RZuZVouGvSfTP1vK3BXjC66mXVpVdGVuoGLU6ZSx7FH4D5pd3CZEgVvCJBdNEpW5r29EgZsAmUbwwh3GVbRS",
  "key32": "34wxdEfe7Csk8mcue7PhyMsDXu5Hz9uoC5L1dKKir7WqUUrg8DcRdS7nt6padhx3SvAsUmV3i1gQCjLXt49eee8k",
  "key33": "NADahKosk7GyWUJs9vi5nVRds9pgKXiU9Xg1EGXERsqLicKhB164XVEaHvjbgXrJrWE7ToNbPBHBCLZQgHwdNYf",
  "key34": "4maEUm7ChZK8uccAU9fDHChBPjrmxFzBwkk4UGxjcXctv1dQgj69Pav5joNB4wKumhq1Qmt27Tbn4FhZBb8Z5n6F",
  "key35": "36kWy8hYGTdYcGYwhBHtc9UwRBCXWprVLmiis9NWpsj4tZXNNtW3dkPEWMvKqcWukPaQ8RpTX8i7aZBhFf82mdSi",
  "key36": "3eQ6KF6RxWrCP5FYgULCHjD3Nb9o4UmHFCDgQjw5ajAdvpRY5pF5ftWKqLTyjZvFsFmJvxpWFK1GarMUmBSP1Ha4",
  "key37": "4ZFfKpRmZ3bHbPUfesrWxFc735ti3P1U8WBnBi11RACtmrSfqYMcoZ7rBLzFPWUtycVXrCtdXBxbtRkFzMBNX3cm",
  "key38": "mf7WnTz6TPdzwRs1zhN9kdFYSjhsAdyZKjv6Ph4qvoSqe4hizJ5cXGYHzCFcGcREzpykcU4TjLVkwhvtomEpwoN",
  "key39": "4odWtqs2ghvPQbbu2GgaAfvqcVeCPGNG4HjP5Na9PH7VxEQj7AzgzMsVwfAnaFccasiM9PMhW7u7SmvkxQv2gQ9n",
  "key40": "5Xr8piiSvEr4WBXuquRwiE8B8RPE4P3aRfYL8RZj4qYAy7soGVbJNwzEZn3hafWnwnHz588MbnoBoV4GFxTzTDT3",
  "key41": "3JxHVTsVCPXpwPxwNyRCKG4aDMqi1L4nf2mBbaBXWgVS9s38vfx5jofSA5P6HQ6dzt6ca3kkc74svL7vWFAwVyjW",
  "key42": "2vuYuZoHz6y4pn4ZMSh72396fF3TEMt6FrahmAnzMXJGBXsra4di5AgwV2mcxqzCTaNaxMnPweuWPGYC6bm36GjK",
  "key43": "2wxpPw1H3BsXTaRC2rNPGbxe1L7hHRNB8mqCXSW8Tv8hAXkYYjk79AVEmtqUo2yKEEz8fp6csAPqEmJhR9TzubtG",
  "key44": "3ZayyfqSizvbwWvto5kdSGzaeGi1RQExD2yGZbHxoqJisuMXCNhpNeCY21nBcj1onUuTTZsuSnea3GSQjWwejign",
  "key45": "4YkDQ6XxEyuH4HHqMbFyJ3ej2JnHhNDbXSgnLEimxknmPuYV3KW5zbyb3bd3h8oH5sL9NHiLHhFfRRrcHc25y3Mx"
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
