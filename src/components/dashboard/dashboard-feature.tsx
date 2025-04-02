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
    "58F3iJGkjb2oduZhcyUqQ1rweULd96hztqNAcmdXuFXZjhj5VmmCwfC9ucxnxRXGVfad3FqDzjj2VwrKSuHYfoiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65X6DpcJDxw3V7PEynt536y4q1G4n13x8MLkaZeNgMj7FrXrhWai6bpFYiVxTwr2NwcJvgkxYzgmHjKmU1ydzG4j",
  "key1": "56BdvvRoLLSVL9e5wTgNkMjEEcmooN3oLp4dPdDjJGXNtC3pPuRcy2Sa1icEHyytXWySG4d4moZA6KdZ3X8LKui6",
  "key2": "2wn78N8eCFL9LLc9iEnG91h6guBZnGw2c7JnEdEmnemHWc3w6XZNDjWFTUM13fpjSV8ZiEh3xU2JgLQoUtXdzXmK",
  "key3": "5VaBPnNXp9wEr98wBJRMst15ALKk3WL9naWTdDHadg4vBUg21wxqQUX6gkWAtdYxPe84vLYfuZBLPPR9DRWQaJoq",
  "key4": "4cwnnvEvLuMQKKRrMNacQHzRAzbiUrjsxJn9nEMvoem7AjvkEy5We3pJuAAJKjH3H7vFSw4siJ43W2jDLTcGJPp2",
  "key5": "SWCyTEFrPUJpX76tLXKd2nVEM6D7dwCGeoVNkuXorFe2nNNdK9E4zy8ccmUMyVbsbuL8ZfNnLijtXec1j5LvhLe",
  "key6": "27bhVF5eyhGJGwkYxWVyDo3DAkBtKFcBBv8ACfgKbV1DwKAuWUtvkvkcDvZA9CZfbDTp9N3zs4dUXnTEK4JcAgkZ",
  "key7": "3FFheCL7JhbnQHjVU5uAqYCfpf9guRDg5jqFubzkSRNSEQsmFfzBFMWNgNyTTurgGmhATV7YnFX8LxUv69ZA3g9p",
  "key8": "45GBiE7UKgxK8pLXb5kVsPvG435GhEwd8x2wjUycR77qPyXaPUq3gqE4E4yLp1j1cKmszMyvwi8gchL44YtpnfGH",
  "key9": "BqgyVQRejyKqrxQVKNygA2u2iuWDT41eiHZjuzab2UonkMPy4YXSiLAyqhYD7i7Qey2Qbk5wRN4PECUZhy356RG",
  "key10": "4oWR8UotT5XvbdNwt8ogeEeuGrne13hv5ugSj2zRtMRJz3U5Jv7fBBEMczfSR2p9aaaoSLCKh8tnVKTFMZWnvTrB",
  "key11": "3qKASjwZvC6FMGXkUTeUsqqq76AaLkqJefpLCy3mNSeUesQxihSyRs5jHRDAgB8AQioKUwCFNqt89eL5MfqT3dLC",
  "key12": "3eXu6en1Nmi5pwAPEY9H5W9mrojcoMfbQVTnFCf3o4tHApiHVj4WhYWP1LegHLcbtZcBydD8BTFVXvLS9ZzRZH4z",
  "key13": "2TKDmybhspPhvgNN85KA5Ans9QdN9NisggqStXKBvSKBgfSKygXTj6NiYKJViUbmuyAkxifsh9gcpevLJ3z9cptn",
  "key14": "bd5mRPhmy7prDcuevHDJFymcNAw9Y1fXXjBqszrhZSK15igqHa2pu7UiQYoPhowdnoED6agoygSXTySooKVABhU",
  "key15": "nb7h2AE4ys3L1LiuA9LzJcHxSmEwyA4oUU4hjHrFSrLimpVY7TDxWDhRuQwdVqMxsXKt4DtL6wv1FSoU9ccoHxk",
  "key16": "JD2z7TZX29i7xPewDF33svryBWryy3c8Rgo1adkoAnEntA1r8Pyr7C2RyNpYsMQJH9yifH9vaC29B4pYMk6bq5L",
  "key17": "k43jjwLCqmE4LCpLKWFSmSYhX2rARaTFV54w2WQa4BGx6j8FJNYj3YTYMpai11c2gnuKswbF7QiZESiWaiR6dJX",
  "key18": "56hUdBi9NLKnrMExpKtbnBAUNnyBkjSaBE1pAjNrhcjSDyyZydKuZAyCN9jr3DivAKDY9Mkn1dU6dUw9aqt8FeZ5",
  "key19": "3WXBbkNVmbVqRD8AvftrvpK4SyQtfZxmry3gXWP5PwhqR7Vswk4yTaDLw2YAZAn8BGaLFCUsLe4FmPEsZMXV42H3",
  "key20": "2x8VEp6nn1PKK8cZiCJpBPJeq3xbxDT1UeWzXqoQixtKJ2KFYfbJxgEirXVEDPpr5J1qhCH4vpjVjVZjDxQrQSa2",
  "key21": "3QZKvQWBNiWg2yiDa8KwBnRcyyXbsGgECz4TcGifSRhgCJzb17y4tTFTRprP9FpYBUwaxRbbcTnkNsATnLTQZMM",
  "key22": "5HL86pGEZZs1VuFoY95J1DLVWY3uzqT8S5rxoKPPvG11hvxCRatfUx9WzF6gwH4VhG6dR7oSfcnqXk2Z6ozPMWLm",
  "key23": "rUTzfm1AsfhH2Y5eZ28tFxrPCwE9CGh6BNtcBxJZMgt44QWiSUAdMawuZfz3Tu1FtYhCVRAbWbbTs9PAFucJoru",
  "key24": "Npf9ut4ysGv2BCpMNWo4pq3YwgcKK4zJ5cvEjSaqFtK2DxWpqcjm7CY5TV14UHLvbqHXuB71TeAzfLCTGSgMeUN",
  "key25": "s3Djr2W6pAymf5mhWCgdGiU8dfWEKZfHWtumA274n4VZCv3XRjYxtx4mLLY8cykRn3MkXN2ZdkaMtFJZe2Ff9Ni",
  "key26": "3D26EduNktmQ7BdaC4HQEhKYuYvYC8tSQUCftxEmQaF4rvWah7s9BENbUxCnxKNQqwpVNAAuK7qcEu5CxZ2FniPG",
  "key27": "4VAfkVYzDmTrz5dgD1uPRuYb1LbskJPogWuXaFT79WR83vcXYqq2WGuh22u7DvKGfeZKn3z7WbyecBa5MPCoqVkC",
  "key28": "3M2oww5Tpz99EKccSerowtcJo2bHuEPHHFXzH23podHiNrK4ThzkSM4cHwTAeYPmViyfLTR8wTegREFBAx348vSh",
  "key29": "3gFL6ydMzp1jhGxfR22siBXzEVqjMJAEQFG9ULEEjBt6FzBqx17hZ66UY3uowDAhnGxxeZ5VBDTHs5AiovFL7Em6",
  "key30": "27PvuAadRpxf6STNMYWTqJ6hLaeF1xC38tTdRchZUGAkRrDkcsJMmGtPu8eJayrn63SKkNjzLdsiTcSZ2obuHSPN",
  "key31": "3YBzhAp291ZMzSgSTRQGWMXoVCJAwdVeNqATFHQGhkY8yHzrozSkp3i5pEs3qCvVFjp5ik3GbDUpiVMXACQrKpE3",
  "key32": "3Lzry2QAVXFGrdYhE6aFfaamaoXXbXG6McPzx1sf88HZQe8jLpWC2aQ2mgfcHFw3bZoTvmHVZVbcnDnhYzCtGo39",
  "key33": "4N4Cwh4XCfENTLX5S9ui4C1KnxjEk4xSFP5Wf3hVFDbtW6uodU6PaqM8SiWUutN7U9zy548eBazfxk49qr99MKWv",
  "key34": "wiBPhNtVtqxyfUrHdVGJ6JbQLZg7cYDekVphygEeQCvrZ4kFDPkD1h3vcrrettoQPCeG9p6TKD2BMuEaMneWYvY",
  "key35": "5eWZGbYphhM1TwG77Awn9gV4c9LkgnQQP6wUotbkk7zmEFYtGyvBgbF98qfTqXFqzRvUTJ5PZ2mMMDnkeLyhxt1F",
  "key36": "3Lzfa1E4HrZ7u5dy4Sh5pnt6KWBCcB4evDmadkZVfW3jo9PwjThNKwvgxZNCc7idG928UjY8jBXJ4uirihL9v6U9",
  "key37": "4yhDUmzcAKQw7ETsjFiF4tJrJSojiFveishx4X7XZyXxRmNh8a2pmzguD3Lxo8ZgB3NN4HAn5GTucgj1TeZcXhrG",
  "key38": "3EZnRoUhzRarp9ouRvsUZmjbL9HJTKjEFcFXCAG8wtKV4rsz7AC6ZsKrAqAexp9ZnYqGQ7iwGusQSKQ8ePwsQKUx",
  "key39": "3eRNBHX64MGchesCSDu3sUCSrQgJfipT1c6DPrt5JZZTrzjJ4EewJmRog2QQTYDphTrpo2mLzqL4kMevQTuewkQ5",
  "key40": "3zarD9XCnc5vwZyr3rXmczyq4Ja8ERV7SN5RPuT2AbcMsrw9GpMLqqaewkyxaS1RhTFgk4jWz9SFueyV1TM32rzA",
  "key41": "3fyLDM7GyESyJoxMovqCzTExepLSjuqhqc1Byy7YrTcfAcy6kAaJQ5PPsJGDdT5ig8QTykLbuJ1RnZNurFZcp2Q7",
  "key42": "GbzSGHUnnd855M48CJon7SaFav5aawr1fnPbeeBtNTUVDNq3EZuX6rHweDHkkcFAofxQkAV3AEqdajuvSTwjjFE",
  "key43": "5w4psJx3ko28iy7M7n6CMxtg5kuVcYW9BfeVM21o6dr8MdXPJmudwbUw8mB2xkgGALWuCU5QiC8aMxX9t8nYozts",
  "key44": "4vSzfH3DebrswuzhHebaQ5DFfNjT8EBRq26CTKJ9UhTSVZxmmFyXhF5WsjtQegpuMsjjLCnMKu8yttqN3Bw9qaDR",
  "key45": "3oBGyZc6iuNfMenc62AV7iwW4dVdpemw3N8Bai7hoMt6WJamJnLe2vAPcCDLWFMhgprT7pghx4bEUxwu6eAnusr1",
  "key46": "4JNH2DYrfnvX2k2hryUqtW7RBEpZS9Fd1TCaHC11yw9kx88qL5y9pmQnJfM9cFjPM1gn5DenJmVrCv5SKngdXGDk",
  "key47": "5dk9rrc5nY3mgPHckYK8DZZVCSSWWesgjKtiuLdXx4bZV84jUM41zhZzBijrN7SQk5qVRc7kpcGzDHNoepS9HSwe"
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
