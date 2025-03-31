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
    "6vJKYFgMx4rgxkAM8RFUJifwWG2dNA7YPZuR4K6zsuaKGGvygrLAYfdSvqP8GXzx5eJCeovPok7X2Xy3gjDEuf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VppeVhUBybehptYccNDVf27MeiVCR5LSHwJx246wbBmbFKBruvKoQdJMXQtWdFVB7BBTrJFLAc4cFuCr5ebxv9B",
  "key1": "3QRp2JKoXGXKutpukxP9snWSnb9F4PtegJR5p5MwXxbZprLnr78ChfsRwypAyBPZP1Kp7srrCmwdmHt7k3YBVVKE",
  "key2": "9rTpnnoqTLMZyTFzhyfgXjF4rY4feWmL3XwcBXZn86GSKG9Ggdqp1RAyi3jTF2LdBt7ZVUaqmkBg9HWHVjsKSxp",
  "key3": "4KQQ3NM2wBL79JM6PP9QQ2yc75UKc5KYCSkZ6bxa1HU1W84Ahd8j4nzAQafeZnses2anULNKh6iDuiUShgy7K8d5",
  "key4": "4waQtecHceLS1XkyUsQqhofopqda9hXSBhJFXe4i7uRhBKLdQNnrjHXrV4NpydoitrSUQxJgMHDBng29T5x8puda",
  "key5": "2F8V3eMbdXjYocBiagLpwoyWRkENx1AtY12WoDEJfSn2yCbH9qaS2tMF8DNf8c4RorVUPT2oP8eehFVX2cTPhzhC",
  "key6": "5Yuvana92PyPYiuqPh81ZBEhxrb49CPDgJPvJLiwTZ7gEGCMwLkK7BWPxauh22SgjzyuHPixkmENZyT2GvzANQ6d",
  "key7": "4wcD7pFtqd3BaR32RAQeK9h2bjAnudiSaCwgUeqkrxXEogNhigGUvSJgKTzsLiSQVWBTREsmfjfX2SojKgag1GCE",
  "key8": "YPsfzj8Q5ZsETNQv2JQ5ztFEXfaGE6VmRGoorPYQvpebDbMFQMXKbNSmQgxZocqeGcDXSj5fi8nUvVoz5RZseAD",
  "key9": "4Fuc6RacEwb65mKP2P3Pjjd3gUgU6jQRjPeBnB6bjs9TM91YedihR5WMWEcZcuGDUCSNHEDaqakFomgYcLLrkW6T",
  "key10": "4b9TNyxcFaoGPVyXN3dPwRkrToJEfm1W2Qt6DG8AQpWv5DBi5oycEp43ZYaPbsqVs3hQfo6yXrrfPGDNbR4zKq65",
  "key11": "35fkCeRZeokpgdMgV38NALVa853EyQpPtH6x76cRx65iVkh9hjJtUQauRDLG7A6EZaFpwFei9Y9fLwyxLvTJ6Gas",
  "key12": "3Qn9tjCZCr5T4SPEEZGMb4cUrDH865xq4tLNU446hpbnpad31iTjrHbfEgBgRRLbpK7jvAtRy59MVa1f55LkVtSn",
  "key13": "3GYcMn3EXzv2RUQWWLMekXi5mNMbwo1dg6vjdofDLSEBt9ZgRrvrHxyVmviBnmtRDqaWJqqTFKBXoSkizPUBSpVA",
  "key14": "477L54PcGLT8jKsdosebxW1LFPaTDcz6KANYnSH8Pz3kSQiabbjh1PxeQi1WdrpnzLoh3yPhp2wQ5USwnn4hfV7A",
  "key15": "g9qLqUKRbX6p64WdvSjP8Hr2ggVHBV2hJ8LZB9VZVQVng85K7VJhh8KAW2pmVW4RwzqJbPxSME4CHPb1R5ZiGqf",
  "key16": "U9iHuPtXpXJU1bqcttQ2ENjXu9aDvrvFMt9WPmWVeaJxQXZMD3Lq56z6k7U5Tb2Rxw88KscS7sTcCRPF9uiWopM",
  "key17": "vC8tJokVz6ELRe7pmMym1GWorCf1BidN57JcNh8M6E9hd28yPJGD5hzueCRuks5siXg6gKH3aiY3FKEuXUmFC3h",
  "key18": "38eQepBnpYoZGpWxZ1f9wfCnZEhwtqhxNWWTWZMYxi85ereSs2Viom1ZnLQdueiFu1EYcZSLfX7siY8QvbBo4Kqw",
  "key19": "4MFgetF15Vy9QzEaYueKNa5kzQ6hZDMne195hz3vpxbBQLCqyXCnSnWX56L177UGsFQZB7LC1ywBSrkm8GbaAwqV",
  "key20": "KMyjbUwajfCqYMT3rLPXW3f256iMPoxPiBWSgxJ7J5jomQxrtVqj8hFCfJkgFfzvBByaXKEBafVw76rNkaKVXJs",
  "key21": "5resJYZKdhryoonbGkRewJH76or6GtmXjQzfdF5Cvr7ofstVW5fS7sHxrWcMtnX2FD2EyfoVgjrEhpazLptdENg",
  "key22": "2uNiSxokXKrR8KMQBKv6fCRpLgjEZECCgpa9v1ByfCkYGZw8zfxfnmF16ibtLGHpDbKcTycRQ3kDxj6XogriDoE9",
  "key23": "5rYwraBj4zTyvLqJzqg9vyKahDX6x4qphB8dbHCdh4Gno7QQ4ATkfx8sRAqiXcbRpVtRRxAK3TQLqGh9GVj7EUV6",
  "key24": "4fZYWBM3xTjR5Qbdx3R6jwdtCcgoCnmBAWTRWFYBdcLRB8dYp37F3z6QyGJdY7pYTK9rPUfTcqJ2G7RQkawSCgDA",
  "key25": "35ftY5MNfXAgSb9mEcwUCvaf9dDudRkVHsPHMuVTxDw9jHiShMYdZdByPW5drybGhjtJ4aud8KqVStNwTm2JepDS",
  "key26": "3hSc8MVQ8K7u5iGAtNDs8oLEjecGXXonqypmauYM1DsmyFGThXKktSFRx8GJE81oVbRQ3U2M7Uj79cFJYcZ4A2m8",
  "key27": "3EEn3sqpWMLokrY5f3nyjATGn8akfZWFc34X42RAk6XaavwK1gGXowvckvDKdN33y8Ceh1PNAYg5Y4b9wAyqeKTr",
  "key28": "2zH6CH7ZdBziAyUVmnNU1yt5tVokVnkKyrY6KAWdrxerb8wTZKjiJY2A33KUESoMDMjyPUP3THhfKn4jkcRb6Scb",
  "key29": "42chWBPkcuX95T5EBtZNbQQ1T9VN4NsKQzJN4C7uYViETCgB8BX5VKscyp2CL1aTuVWsW6td3FHnwKzEPDBCHXLB",
  "key30": "43w69yZBUzZZtEBNxh682JNa81Ho35c8Y2AhriBAbKSVxGcnDHXbAe9aoMDHbTWmaDenk9iuicN4Xc61SEmyLLxE",
  "key31": "44rrbZKPJw9fFKmY8KhaRCcDc8X14EEGLUzF3uM7TtAMZPEZJG1mJ7Z5Vkm9Kc6xED8rkv9yejPU9hzF6qLGNHYn",
  "key32": "3z4ZiTfQwoR7N8UZHU4NcvcKrLftumdHaNsa5pKxNB9fh3XtCUoZe9ah82KGbAJV115ooyx6pXy9vzoW6ZUGqQma",
  "key33": "Lr98631V7bvJFDopCWKUT53f5qvopLGVfDzvhD1XP63trbFdppQxB1ASpN7UDg1UP1BUB7hwinCHM8NGUQz3dpo",
  "key34": "28Az8bXWhMdFyFpXg7jywvKx3nmiByiYDP21iprPoZAPyF3F5Y172iXtBhzYjGD7yx7phmrskkaRjmDDHd8CzRta",
  "key35": "577vVHV2u4TKsaeFGZgAbvWjMtUgM7oZRM1mqZz2DwK7pZwbTZZDp2pqkvhiKxy5XDxjZFejysqHMUdh1Ccz1GcJ",
  "key36": "51vASfvwt8n9kGvNHSNGeaLoAt5CPiBToCWpZTqinc6TGrQ9787BcivBZWhUc6La5CTEcR52gWyxRhkajTWakCNM",
  "key37": "2PLmwXCHoM8kEXYoTBe4BMjqDkv8nHaxHY4jB4r1Q9ahak6BpjtjG82LzaXAq3sbdRMagjNthopFQnorcree486Q",
  "key38": "MhRrFSDntPBtg8P9DFjUTvkwxoDBm8YvUt4aStvFqP69oad7paszFLgXTFaAj4MaLGni65JpnG3nAEBMpvrwaoM",
  "key39": "3MgCvoi2m4zoJ9JB2zQNYD9orxHhahUbXC1CuJEjhp4DsgKKQmfzs6L7vopS3M6im2weJcVkBbB1xDA6UNvJDv87",
  "key40": "5iF1sU1PxNKsqC39TRm7KW6PVq9ya8QQYVNGvF6buAqr1TRJqE3VhkhFZYgYotTaQ3EYXjJBxpB9GXZTAob8zMKh",
  "key41": "2hTyZWpBAEw8cuXvaFRBngtLH2j2idUB28E4g4XBWK1jBAu1kbWNyja7r6gALsV8o4ys2jD3YiCAvnQXyjky9pCK",
  "key42": "42dCX57tChstESYRGoVxYMXFZteXBwz5mfSMZQDGd2tHUf2rB53Q53xK5sSBwkr9SgwUUqsyR8PkNdSfjH7SKLM4",
  "key43": "5qiT3xSE5RtzLAEpQBGg3wzkXetbFXFit2mY9FZP6K6uxUZMt19PTWkVv6t4pLR4EaMGi1BMFeb4X2tP9T7C62QE",
  "key44": "6XnyL2mcSiwW2wzd8EsLHAGm1tHeR3NGK1ZicW2Dmv2ow7AEHW3EasmhD8ahkKAmsvaXypzc91BVQDMBjjU6tYW",
  "key45": "3vsskMfgj2XqjXAQRuJ2qnuRox4cGrPsz4pUyPK8xKxk4BMCv7z3CNiJLF5GowFeYA3ky6ixrLh2itFA9aaZWSJb",
  "key46": "2zL5MeZHbMn3qdBLwTYaGeetYKSqdJ32VZ3LhyZAimj47KQmQ2hm2fNa1Z5dp1aN3TwuyyXVLM87dxuWWoPsuRkH",
  "key47": "536ccSWn6SGv6Vw3uGTswd9qbAvUfDG2T7rFPrbh8VYzi5T9bHvAMMaaaJy38fSnhWUYugaqpjHoUejdNsoE8Dcd",
  "key48": "2vziC81Sf7imUrPqzPUKeHmWocSDPvriWSWNTv4poRwnwT48VhMRSUnYBqGjGiMk3Sw5R2mkvcNarsn2SeqfZG8r",
  "key49": "374XgjShgyRKaQfwSgWhJCxP25wBi823xfg7dENsMFKm2gkJs2cCZBNzUstyPEdsKbTSN5kHTvKroU9mPH3x2E2p"
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
