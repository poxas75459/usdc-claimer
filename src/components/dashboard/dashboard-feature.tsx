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
    "28is9kQgX26FpERDqdv5H3prExguqnetix7BxLt5LX2Db52BrWFfsT2SWY2UrmS3u86ZvHqrf2biVGepqoSG2scU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvCWu3h2uXccR1BLhL3t3cRE7Lv7gjCYE3KBMv85z8McAgJcMnmwopTWJWVF6ZcNdXKF7Q2HJiuDtpymL8oWDxu",
  "key1": "63PdQQryv65DpqedgHRMoGTTptrEZ44MENZN5SD7NGwbJpGVPVTxwMWb67WEVY3KmJpoPk7VH9Tu7ABuXXTzQQqx",
  "key2": "2iNHvkXK2Leysn3dsMwtWwFAwt4aEnW4TRmeaxDXETC2C6qxP9SMLJHNAMtuTUJnfw97Zcdt6fbPJbfLLjHcgvEY",
  "key3": "5Uts81wrX9ZXxt9sPLWF9pSpnJx9HJfR4jPFkdEzmNmdmetPzBsSYJwWqDCn7PG56tPQk7mWE38XzU7FobwQPdtW",
  "key4": "5nWbYrkx9ktCd9fmDSNaYfmTTvXgBZmjjSaMVxBwL32tXTLQ43fNiu46GMJJaq2W6Qi4NWAvWa6fnGHpKzZ1mYvC",
  "key5": "3bRqeH5aYudGXso8UPXAbQpzEMkY3GrAqswGiJxVgxzWnSdX1UX3e6gYH43atuvgApxAYpWzREsU6zzAqKvuVGeN",
  "key6": "4Lf8QVUay63Lg93YXeix15MxPqYjEmCXQjdwtSH1gbkhuX1CpWG6QXPfeMhGqiYFik74fcLz1VLeFDZ6yWcvEpAt",
  "key7": "5KiFqDo4uYGiogf5zVnPfadgSHTH9dBKAA7r32Et6UokexvjqLPo73MnGg1KMp1juTzWcceoNHHgd4uvgAvawESi",
  "key8": "3qt6k8AinyMy11CBHr2SYd9BWdKebixQkHoPSdPLy3eX6xDWLTUguHSLpaWFvx2SUJpYnsa1DyygkpPMxCp8kpoT",
  "key9": "wZma4jDgPjvoX7mieTzFGRfQa7gC9HZbqW935Q3dMNZsz9F1MrGRwKkby27TySmS8Sf5GiaW9iXCTVBgxmJTueH",
  "key10": "tUyd3aUZWKZfLZTVJcnyqsVzUjK2Jer59N7LapgkAEYJqx5bYudqhgAqCnkz7qotkaRht9hhPRrmbrKbRzVtw1c",
  "key11": "2yxhNF1rYDHPFN2VHjFX8px12PruCSVXdJMbNUBAA6Mnja8eea5Gqfi8wSv6tj6Pz24794fMCBK4MvnFBCKYgqzK",
  "key12": "4Dmgb8Nku3QR1LcaBkSdFD1vsFpvDT6it9Nf4KTRPn7BUjqTFW2XiSRfsyMyPePF14DSZm47nf6aoRYTP9KFMGKX",
  "key13": "3pdieL7kEyNNJwv5qnbkdJ8M14YHd4WnsaWUrKTpGrWiaSzjAn2A7Vnq3pgDkDTJ27DtEjb8wSkFNWHTTBFyZue",
  "key14": "3axgeUgjtvDCkEiu4j6EgC2gzHnotkohL5BNkLGwmjpyRKfuGP8WAQWVFe7yZGd737Fgkgrq2YjMUXLpbwgUSffG",
  "key15": "5CL53YbqbT54JVz6ZSLTd9iLfCjuWyJDJ3Wu5gYLiBEbsCHY4unwxtWiZGc1Ud97gvvh7SLDK5MFQi7tsTJiAPUf",
  "key16": "4GEEoFfFFsLxs8DFSxfX4bMfATtr9zz98VadJSntsRmYYBYoZ5FUy9KAvqANKdSLAU47q5LArQSzzqgxn3FvMfW9",
  "key17": "3VnZyLQrEh9n1iSQ9uBuFgAWiz6mmBEdxWcYJvB1mpPkiwugW39gNmDf9ZVwuiFb7XjqpPmTqY9Lfvuf24LHjEpS",
  "key18": "sjyoFd3cgnngoiVjjgyGHdC1WBDnaqjpix4usmDtrcCfrRZHqoyZ4eQRJ2wQSGEtNtd72wrX17eCGUDtAyk1KSd",
  "key19": "41bCYygZ9rj9NUwaheno4Bi6tRDTdn5HcDsteKDe3gjZF7qjVdfTKng5TdqfVZNgri2ERhMpKvFbPj6sDbDynsb7",
  "key20": "kHL4Xuf5g91hJoZuYRD7i1vXHvZQwcXFwwpng7ioyadGXZjgKeDjMV1VBgJ1E27heYFv7nmKpVexfeM1L1eoxCQ",
  "key21": "bc3PETSzT4cz6xP9cBop5T1ty5kNjgxCLbR3aGgcG3oVtuYVA7J9UtSp5bm7MNjHv3syz2RQkQzKMQzY8RSMatz",
  "key22": "5wdFecGviwHxjMt9SiMt5dd6syaUdAx4cpsRoFpNKSQ5w2DzfgXKxsFMBHBuZeCY43DfFFfmQw75hbYt9L7bFSGS",
  "key23": "2icRCAxsfBz4zpbHA7TwfZkknEc4RihKZSZPgFvZqEh6edsbdS2vMC4jNnq8smKkxSzG6zVRFAVKXKdobjr46S7o",
  "key24": "3p1dJrucnvpGZ2k4PiMbf35nggt1mCa5UcV8gdsYznnMDUHMoATguXmaUHnejNCDkux9r3Sdbbb2coSbD6Jvec13",
  "key25": "eyJ9cEhj56UGdELxYAcdTVS3BmsGAPkfnftqxKY2sNDFzrxcw51iYCSeuvjxoFHJzw8hSEKFcNxqGTQFGoqjimW",
  "key26": "4qp1QYctqVTwHbrBgsPo8vFUJGXHX6uwjzv95b26sFZYTtJ7coM1hLhWFig7hijbaUx7RCtKMKQTqvg9vgmTdviB",
  "key27": "4Lq8nMLFTFwSxr49pAFxgsr62DJao43W4r4GbG3VHpA1ca4Db3rwWQvuMF5A7yuqZ7V4c2wzbULu6gPH9g8P9Gzk",
  "key28": "cnoEzkBmoEpT4a1Gu9znKe7WSqR6K2QV1GRC81no9XF5tNKgkKDBfV7jZfxAHNzKxtbHw5aRZWykcT1wUoP192T",
  "key29": "5EkD7RM5TeWhmFrv2XUJrYw7mTmLF2i7DXqePVX8qWpPyVUZFRMVvvX8fJZTjqm3hrUQvn2X3MtSZzwWD4aQxmn6",
  "key30": "5ozdmNt2Xkt4BEaPC8dodkFP23LmaC2sUrPo4ynAqyCHEdTtnJj7sZHfXxTPhwiWJdichbb2tK3SxYR1WcnAh5DA",
  "key31": "5XBvRprN17kGEiqUuxrSGQxYVRpPr7MePdMPkiS8KbuoxtXfHfv5ZLqHUAMpFhatue8i7TWmUy9y2QggxuHvwDU8",
  "key32": "3KKxwafemREaHzEnuF4ze5uyDrGkABCHPHtkXzXW7mFtA43AzGqnr8pcPQt191moNUKSASGDHrGs1EJzoYKhwumd",
  "key33": "3K53WRnWXkRU2fR3K7WgMstt3LUiYTqzt4a9DUbbkMwvkKi4UotSu5rxUeXzHmnbkNFgkJ7Jk5ZqZZKz4vYsbzLX",
  "key34": "c3tMhE2SAQgB1xxHbwnmECm6Y2eL6buQUGiZfR4VcuS6Gcm5Fy9B9D1aLtYnLfgLacAtc2ixHbrJoU2Y8VjScFD",
  "key35": "2x9DdSAHWV7rmDjNVSFhjzr4pJn9ATCKEiWxQcrrsNrAEtZZRdod6v8pj5yrTCBgCCfNtuAumfEEwF2AvFZMvXWo",
  "key36": "3ezvs64eXkzcRvmQyCqxhGe1tB8ZYcUZZdaXD8wAvHFm9ruDtqru9JrJMz4wZMh9ADUGVWfihT5ohbnk8qHxeMic",
  "key37": "3JSW78KNdYhSSnX95NcKzGvCeoPiM4A3wmXq4VRT7GFmunWwzSqVRyDudqXSod3TarmKNcCpFm6ENdKc1rduWQDa",
  "key38": "5vt9QuC43z1RjcUsZg9muzUKKMjkEse4ZrT5SKPoGxJ1FTcEK9rXzKpE3rVqWGJw5R2s5y2eqXJL99nsgqpW3o4U",
  "key39": "5NaVuyDpi4MpSbRo4dCFjtKTiQFYQGixPv2KWymSV7LZ394Pcki5hVjwPLtRR4WmWx3DUNygzpn3TnP6Lz7vApbh"
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
