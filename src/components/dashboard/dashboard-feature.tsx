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
    "4E5zcyzSDLjuSLgTZ1Vih9eVjkvEyBY2G37wiZrDiDqJu3aWyCdxcd6vLSvZurRLY39FYGajQKcWZUCwVpcwQ6pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jmNrCDT2zyYCGqCh6cCTgF1gaTX6WYZsaEQUy9gNWq2eCjgBZvNjtwhaigQ6brh3Pkz1Kxxb1gDbwMNyJHWJGf",
  "key1": "TeXGoy4eJSFdWEnPkYLXLLXzc7GQd4XkWAsRxEgXcvoPhRePijqgAiNRozFi1wPG65mRfRqmc9F7SyPVozRLFnQ",
  "key2": "5ArCVUu4mk3oH9SRjJATDqH7AVjVv8JFemM4Rm8wuLNArqBnB4xFRoekk3fmX8pRe4XDxmDKbULhxjKW33dAeJ1U",
  "key3": "2iEuSSyfwKzkfFhqadzypWYa7S7kuuxmnBSCzLkoAAxr6fQ93zYFzRLP7fGfEy8JnDMtqPyYv4onkoad7bESmFzU",
  "key4": "3DLyWE9j8izU9DvsGS3wm63MP4aEDFGGB9PR2bXdXVw5yYuSuhM98WbeYj1tLcbGaiH5s1GRe2bimMX8ct1t7KFL",
  "key5": "2uCoSvDgTFgRRiGDGPGLPPVX1UErqarY8y2c2jWfFkBmDbWEKZfokRJnmdqFCA4Xv6tyZYJTEupoK2BzXehEm6Y6",
  "key6": "29qEiYoHGRUsePsmv7dtG66c9xQXe8eu8WBWR4SFw4LHHFpn5Y4T6V4tRwbb4rJ6voMipc6cea2U7RQALZoCr98n",
  "key7": "4ZymVWzLtFnc6So6gMzXovjPjm36KYrHhndTs2dbJjdFDQ9J7S3r2hC3ow2JcCWteQvzT8FaUSR3DPCyfk9fLzW3",
  "key8": "4UMuNoCkL8sbsbVmEZ44WqiYsJYoK4vtGtFtdoh1bsbWjBuHEwMAKHoqytsjB8dt2RSZVjE8N1qtaPS7GgRHG583",
  "key9": "5TKbmDj2GxrnPsvkipgebJk7LLymb4PNxiUSaqan5iFkcGsGKYvsxDW8ua1WmZpPJeZV8ctWhmvLdKG5vP7AvtRd",
  "key10": "kxudbepKxYa4rn3k4VVfPosurX7NXAsW3B2T397KaBziaZ7qniuxf2RqqPxqTGGzJZZFuUZzL4v2drXS2C8fnBE",
  "key11": "5VhxhRwUWRwJZ9w7ZBjtEVdyZ477YTFvMGf2DTxt7mvGgSJW7rEYmyJmGa6ThAANRRnVkCbu8Jgns4VfxfpdpMsD",
  "key12": "2jg7rJ12BMzKivXYdu6b7GhcmQJSrjwUy8QaLxfM2AoqcNFW1NmRUq3rm3t5jEbTGTHBe6c8SQKxHH32rsUAMcDV",
  "key13": "yeYzZ2ur3pm1CaCpiJSijHNvCZRs6nMn9SQ3t36PvtXu4u1XC3jBEEbGEg22UJcdVHDzkJHLX3j94NLwb2Wz4PL",
  "key14": "43m8C1zfA2aBcCyzDwNeBzPczwLsx29biXcuhb7Arz3Sv7Z1E3m7KQZmpN8jrgkvsmH3CEVi4s4pR7infnYTASLg",
  "key15": "2cyfRDyucqFDb5JD1Bb9NvMUHFT4r6xCFSFtasWNdhyGoRgJdZDXcTKojnuGYMNEUXtBgincAuC1k3uYJyYw6taq",
  "key16": "3dxCdW2gqCNMeoxpsfTY4dybmpxC2cjx6vtW7iLjdWKGGUKVCj2UwxQtac5KmX1mg7aRfNuCxriZ5WRXpD8b1XFK",
  "key17": "zc7kRS6dPiXgrDrJgEsjSjzFSPn4ZVFEvq2HkKt2iqEZNwKMFKmk8h78Y9KPaPQhh6YZxU58XJPBKajM4zFmGxz",
  "key18": "29L9f8tNaBHcrGRSqyZXtqKTwrwNpxfhSSFUYaPu5wsZ8oNGEqM4jsJhnDVmqHfu8otNz2kHDzUUnyCgsZvdkr8Y",
  "key19": "Vk91DFDTo14RPpBqJwt155bP42NoT2QfmXYVKhzS7Li1geE4tkC1KTDXQnxpmoCnoKL1hjruT2sF2Ca1t8B1SEu",
  "key20": "4xWTMCycxKr3nmd6an8LAh896tLKqqErkxSJiVJksYQHxJdYtZvgykyTqdCMqdCwjWJ7y6TsFK91rBNAomAdEerE",
  "key21": "3ThddtVfr3QSnraiP5iNpUvedktAydaLj4PvySZskZ9iCZphQtkvVdzgP1zeFYZT7x7nhPKvs2fiHJ4WWyi2TnEb",
  "key22": "pqEzSczucPtnrjn4XAnBipVBzrN5ptyTFNvvo69BAioLw9Mjx8Hn36mWAkE3Yis29d8DFCkvZKpjbSSe1eUJaUH",
  "key23": "6Zd3eS8uFUH37JEK7MwxV5FfYgUCgRBpxMMj3xu4Vfg4tFhY9pcxShmtdL3nYTbfFqReMwLfhy8GKcCbQsU9DaB",
  "key24": "28dG2Ek1bsU3m93gW3JGQWSbRLNFy8HEsMKiqUwnHezpdv5sY2aUA9bW93DM7nXgDip1VD4rfcBz3cnyvhvgFfAT",
  "key25": "2Bra6abMcff16ppuPvAPEHwwahdyryfzMYkFu1GoQiQFFwPMYRAoSoWGpSBFRSzdJdhpkViEe9MancCFpeCQN1Po",
  "key26": "3qfMDhFQmynH6tmLiJ1nfnXfckCkLBrjEQBTXaRJ4wy42Q3CLZH6Yc9PLhAURByn51vrx7zE5uhThUvKxyQbiPuZ",
  "key27": "67LrDJaJDRQm4awHAodPvzvspeQVSBQ8bMwGQjmDj8FYCytXc6q1ssXXfYg33JdozN7uLSChbF6Kf8Z5eB1ty5Wi",
  "key28": "qvs17GAY8ast8FqHwEaCdrJH7511PnvvUp3Wzaf8dDJ2RAkrSpaPARarqTjZPhUVBuPXbcQtMHHjRKCQrNwnhRH",
  "key29": "5ZjFgvbaKpHr8DsDnEkXNhyr8YTPuxCdHeq7paCVzTaQ4Dc44V8wKBggXLdzjYgksiHRKAFZmLbpWLsZC72FjGJn",
  "key30": "3GxkF4mm9NCBg1UFJXy6vu8vi2b8ffEWGEUSaWwtXXJCo7Q1sKYWKbCxaFW4WXA1wAc2xjVdktZhCztsN2mD8g4U",
  "key31": "5pEuugwy91DgDZH8bFwMnD3Q2eur8BBPUnXEgvF4ai1vbHNqKeQknZ361NBYV5bNeFw6RgreGb64tBF883q9x4aY",
  "key32": "52HeYcLKg6KgjVfV7VXfDYh77gehJUMLifKom4zjCkYLX3qEsdy8qoU7j5sqaZt6cLYerbVCJzBaGwaaexPgBmn7",
  "key33": "d3WU1GboVJ7YEGmMyxY2Spnjr2acoKRUnCkAWAsNzycUwSLcdwAtiGVfdcRTbALC3gBmh94a28kdRdDJNgGAosA",
  "key34": "kXacZDGPeNpNc87zECmbpg1jCDb9yt5TUcXCcdB2g5RSuWNL7d8tprEV21yvQ9Emf3wTcTdxwfphJQkgts2U818",
  "key35": "2heEQJM32HzqtTpUErjTF1uCXEd6jVdzsQpjop9iXuieRDaAcAU9oBRkV4yTDMU8ATpH7G3rgq3N7nryXTryxpAi",
  "key36": "56ethdUodSryLtcjssaBPXrTvuKaMnzBJyBvPLQZywZJgkWme2WLfjES9XM1rkJHN2hdgcREdZunv9oiKv2WD21L",
  "key37": "4QDkiGvmpt6rQX1iSoXbenqvU6PcR66oaVaizmqw2F7rHqheS3MrTgW59usqTz7Gav8BPKygksHp1nzFf6fEfntH",
  "key38": "3QTequtTjEyK6BzfWd3DhfnCMtuvScAPRfDjtk9MdKwU3gCi2PpfZANZBjAfSgobn9fUszSrQuQ1gbBrfEunvbqS",
  "key39": "5Z8fmaQeTcYtNy6h1AcTRsgZLzgbFnJZ6mbwNXsCYqgCpe6xYBkVQYragVYPXR8LiAvXfUn3ukjmwXjLNtSdj1U9",
  "key40": "NwiCRidESCtVtNuvbSu2Q5PGoWbDKBWPWwjLgEgEJdBiNbkWbQ3aBScPruwDWLHuajhuKpdXXdFadPE2upxDK4q",
  "key41": "4v5kjWDUiULV9HFcBUS9MKhmuA196mS4wBwMoHd1EVM39MtDCNA5HkjP6LGDMWE1SCREqtWcwSq8kUoQAeRXBpi6",
  "key42": "2KZ4EpTZZsxN7hB92AfUbNAcsSFoxHjanuC9QcQgCEXnj41HjdDAMp53tCevo8sAX5tJJzq3b8pXVEu9NbuA9jqx",
  "key43": "4ua3pzCRn9U8XapaewsTNwAWgMq3aDk1tj4TUgpmi1nq3pyJXBCaTAfiXwQ9faXUJB58hTU8SDp4HeahDPLUM3Le",
  "key44": "499kJtErvKdiv6dqEFHkbs2UuLVksLidfu1RHsGBZvxmncxZhTdXepjbjK5UjP3skYPfqsDJTFhc3UPRgXYBMbwc",
  "key45": "5YAdNC667gfgxmzrCjGUe6X1tHepLGbEk2ktDsG4WWo2nJUMX6gpxiQ9mDhkZsovwfj7KPHkemoZSFwxmqPj8oeP"
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
