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
    "aeewiYvb4G2rgZ3HMb69RByMCyZq3eyMFip7JzQFcb9hzbEvW3bLFoTcZXboPPwPhGp8Z3Rzc3qtujjiU4sKkvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjoW9GvYWVDLzG1Dagz9zCizB8vdSBA96NJ5dvBrVB3pAAgPVajkzMaGpXCx8irw2KZyZMYGDH1Cs4RB8Ar8ywU",
  "key1": "2P9f76iyoi6USp4fWM3xFi9UPA3AejWzGQHcUcauzPRHLTc2SdVWB27DyoeK9Vfo3EbX6TDNT6EkUUJBLi6x2VFM",
  "key2": "3mYUdAcH3aovziVFkCTJ2VMxeUr46UwhcXqy1FCjzRCGLmqDQrEVD1UuYrjSbdDJeq1892J9u9NycYuS1Ptekn49",
  "key3": "5yPkyUw1h95YcXaBHGFdX3mDPfXrjCyhrUpEWsfiW88RkigJHcWmZSDCBJEHsMj4PUZcVPe2LrZiN27tWCD9nvNr",
  "key4": "61afhXygmdHiDcQrKrYKw7Ts7yQEKQwUy9jw4sfvZrbAeLrMqoH3wMSXRuaJp28EnnFrfJYeXq6LoUH3NjXHqb29",
  "key5": "24ahkGfTjSickLPa6ToKCH6dUmX8M3hVNmXy4c3hA355NT4psF4omR2hHDDMAuLQv7mFcLJya8XBVHQZjNh2qeA6",
  "key6": "3ZV7zz2CnKfSUHQU6ERTsZBMPyhCbrFHFF28k7oHY8p6LiPgQTzNQMZRzhKpE1rYWoeNNSmDyNww9aA7b4cWphGw",
  "key7": "2UsCuMYSwX1vet1vuYzBkLAbw852okNhGpYFphvc4bQnXfD5hv1sKFUFBQGyjKgBaPCpsWFzyW3FTFdkBz4K9cq8",
  "key8": "mEdzLHMpxK82VmUQ6netUa4K8CkYkmX69yXstxPhJvnD745X5hPiyDq5NF5gnvdovWrCgs4JA5NAjVyE5y96zz1",
  "key9": "59j7gnvTDZcddRZ9qVLFcLPWEyF3ZmR9DmAgtqWAE8XF1tRG3JyWSvDfpVmjAer2C2PiUPy2fKcT95WXBq8uYsQr",
  "key10": "SvB9Q2QAk9XEHhM3e6oAfaQHE5qno7QxyLDtnqgoWqgnqcHqCx7Bf3YnhPeLPpK2ojHMBH8KfPF2fYk3jDH4WcJ",
  "key11": "25bU3MabJm5zbrbypvR3E8VVHfY4y4PjfuHQxVRuac2Ho1cxDPqgjV2MwtjQRDzeuwXATDLzSLVQFUrgzierY2jZ",
  "key12": "2r2me2xpmonoUiGEBhKzfEHzdrDFMFxDopJ6wZ1eWcbwEuFxtGgvVT9uzooqhg26sS4LtPrARXyvMpVF1LpFNdcK",
  "key13": "4aeHgDiwG1NL1bSpLQ4ADwJaPzDUUsge4oVdBDDoQKu6RDxxE8iQ5ocLetwmRuuTEsLfU4mTUZG6Ku7FZvVj6AG5",
  "key14": "4ciwNVQd1zPmDctqN1EaiMoJWfy4ndauDBgdqX9G64XPrqdzYuWPe5XBds8GS8gr8LZuDoLnBW1PYMUwVHxbBhca",
  "key15": "2MGjucpiQoBG2V4uMD6Mwmwf3HqeZb7K1kcLE4y49uhwz5b4ieyo6J9FYdSkQJTWmWocsXZDpbfTphKH5EehiD81",
  "key16": "5opyCFAkmfPjuygCdM7GtHKzh7EtTheaHcqWF7yGmfPdY2oNZ9Jd9uqwinv6T3nPfUAm13awJuGSxm8pXpWVbod",
  "key17": "2L6e9XGXgtE5xJyemRSSp9ZttQUjBFdpHNQoVnQ8LC24rVL3pNny9FnD6Ho9MHKJpmDYpTBP5vKXhSAhVu44r9vQ",
  "key18": "5P3PjPJZkdz6yN7pxWwW96gf62tEepYuUWMGDN35pJ8LzDBEJewj2pq1pAiY1cHWLrQWtzni2Ucb7jmNnkZSYTaP",
  "key19": "2rZHr9kv1xsiF6YgQK1SUnuCRcDe2nBXmfhxBzhLfyWybGVcQAZMwjVmNgP1iFMb6diJdw98B5aBksMpBJWw37hw",
  "key20": "17vk9SyCgLf3fHhPeQNeHyDMUY6pzaftL1SXgixt9asWuo13dvf8XLXMiLoxkYqoKbhzgrykb2dSXuFNRjMK99T",
  "key21": "43ZQrXwgEHZvuV285gxHvSUXWep12uVjtFTcRz4R8T2rarFGK9j4K1knZgPgJc4qPCKYF5VXaqfsmwYm6HhhbE1x",
  "key22": "3TrxHX2NiZ7pkbR9XW8h5BcgGuzNcTSo7hEXLXZNQwdDq7VoDgfrfpyxj9N99xd85SG45Yen6HYZ2j7bdjvqRSJ8",
  "key23": "3yUTZeAyQPLzrVeF6hSGtiLNSdZrTR7wApsjv5CkBkP196Qpec97hgKAvG2aqRBZ9SeEY8L1RxqbAEpd8XsFcUUv",
  "key24": "2fPdzJXWbRr4o1wD5mnzn3Ugc56Ugzb9A2zDiiwCDyDHUdR7GppGhkqafqgVMMtFen653vZUNUJYkqyiEEH82Jvj",
  "key25": "8JyjruM8FCsKexuUZqg3pLyznHKnuNK4myrpihui3u9BZ16wX3ZDskVGrUxkyL3B3gPHHAEs5waPzWe8mTSLsyL",
  "key26": "2eheBYYQeoK3rYDZkrj4DV59cnov1R3iHEnnY5y9CaLigSe2H7d1X2fmQRMamwF32Ttn5qjAz6D5QFnzQAZaSmHg",
  "key27": "3fY3ahQo4zE4YMY7TigRTYfNWMSW6WNWXmdmWW71UiDK5g9can4RbE7ytpDww3D9WGN9wES85q9ZtmKpRLHaurVt",
  "key28": "2XzJtizjbbZufVizDKWFTT4VqWBpzLPygcsP95BXVQvvrp1cs3FPXF4ebLzWz1AiRQyKJ5AHQX2kRGuKEByqg1Fz",
  "key29": "52VGADc44ntpDeCBjAE8iqqjsVr5dKxdSmwGozbZTXcnTiUFLejKAXkFax513qZqYxxXQkH6rbedmg7QSBALxzcM",
  "key30": "dnLTchTXjoT1BuLCnkrUkbVrM4dEUbLHLHd6TdvWMuBL93ubSrhzcNpwD24yeXoqqzRQsVhb9EoaZ6vPvpgvcgh",
  "key31": "4v8b5PQvdkHX73qqBKwFHU2C6JobkH1dYFJ8hHWfuB1k5N96ESsYGcoFSte14Z6AVqUWknZGTK6wsb9wYDvub55r",
  "key32": "57CXDpT1r7ZXPay1k49GdGVkFDq1Zrm4Ztd2DpLMLs9zZRGeyMLuMwL8REmNdsJWM6GV7JErXeLMRNhijHNg7GrP",
  "key33": "yAyqvAFpuaasb8rvd2VzCNthbHbJCyDgty1kmMuUk1Pstr4HcJxsgKX8m7YHgZgqEa9zycow4tUEFU4TD5mnehk",
  "key34": "ZAtZt9F26xySqsPF5reBELL34Feboy2HUAqJbu4oW2YUs2WS83c46cq6V8mpxpL5fk1Ce7MNKX7djwKTg7ADYpY",
  "key35": "2YVmR9Yi64Uh8YNbdQ3sRSzh3zEyLA5mUxd76J9pyMpZ7rYH231Mj2ezvErrY3RtqAXiR8LGB53NnBhU5pXVGm4H",
  "key36": "5C5vFn42Ttzf6bcLwdPKKJhPuYphPnnu3WxsMSCYKwhsfoMAMTSgFPn4X5AeETXi3pmke9cYgrf8Gi9a3WyJ7rri",
  "key37": "iL6MEsqoQDSE1BtoiGN9MrvsNpoYYGMdNBXqyLZkddWJw3ksHA9GL9eKEHToExuFh2rLB5oB8JE1smmb6D2FXYg",
  "key38": "48BsQNgrevneqPjPSGBksZPM3oCiDQvi2gpBdFcKYR142MwZCPDoEZZ8Qgcynima1zqFczFxZHKSbUEmDjBtEsy4",
  "key39": "3X5aM5NEfvLCd8HY4vAEZwwgFASRJPuJYYBjU6Pj8Xm7f6TWPm4tPMJRbMyrkhc8dA2bP4NtMAWSsrnTHKJ9Zh2B",
  "key40": "5A2cfwyUsxxsZEMbv1y2QYun6RaJ6YpVdEXbcJK4LCdM9Gt9KDvbuWL7PGSRaU8ToF3P5pAqFmXsxn9MbkJ9CRxE",
  "key41": "5kBpz41cGty59AoS2S1j75xVduFsoECZkjrCtuehF9Nr71kYQuzyuPRDGCVqq6jyok6ELopTbjB3DwnYuYegcmDc",
  "key42": "3HdXZCsxvmi7ug6NmeGCoFRXTbmfeBVnFF3D7Gu3W2jZW8rRUisrJHNUdSCTwx9bEb1kCVn1EF8Mgan54xvwFpPh",
  "key43": "TTmH65aCqtVYxL3wo8H4mg8Pt359oMofvnm3afoFaJe21zBnob9kQeZDY4sahKXkBZiYfADZuyMMHUoPXvMQpNK",
  "key44": "5zMSgXSkwhKUDyWqrVSateWwxKBcP39Kta2JvUgG7cAxBTi8A8tiDDwaU3jujWnP4v5wcVu8GmMRoz3BGNpGcfaV",
  "key45": "2ZjGVbmsjAYsmnfzmxJYJFA54tozuCeAzVVadXsZ8ES4nYXPBrgDPt3swehRVG28297bQ5Tb2z29c8ooepW5m7Pu",
  "key46": "5r4gdptrqbgzoDVSmSofemGfz9beaS4Yt3EunRBxfqWh3YeSJMfZSfBZagdvX9utFW8QyZVoYUmyQtbCmbKco4LM",
  "key47": "xJKg3YXGNeLF2mmKD3qj4jk1XHn3UDrMV2iGLoPq1K6Lrw5KPuNXj9xVL7Jf4piiuG5wxa6ZC6p9aBbtAoAe75R"
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
