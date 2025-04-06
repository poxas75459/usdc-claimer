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
    "3kKpNBvi9sL5yE7ip5p18gxD9fSvh9TW1tGohZHRVpgKBxaduy9iAHLfxTZxC5SUfa34M7YCp49xHshnB4TsatYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6Vd8FDy5Uh6X8uUEP9Zp5VjNn2bYNwUpopdq6TiJjg9qLiHRWNQnGccXYvPmfMtorwmiY7eYNHnP6441PvVWas",
  "key1": "5XSUS6qh3hg789wXEd7ZGcpCxe8jJAtMkjcYm1Fxt3jRnaYFCBqT12rjuzfp54idrokUvGw91VnFX144Am6mYtCH",
  "key2": "2KUg2DNbTbdHGpaSW7GZiDgRcqPJ3GKV1ySi7Aj3xwxD7Voi8TaLrdc3BuB6WaFasGdqULaG6uLTCMauFRb6EXqf",
  "key3": "2eLo4BtFVrTNSUBU3px8CBPTfrhH1vZJZqdEPNNzHzvLFqUhe9gWBWdpNjzt1FVKTj2drKcYYytLmcxd42ZzmREn",
  "key4": "482Ga3nZmEmHWYkaZPBBMWYqxzRjRQzZHF65pbAQfPiC9LtKCCckvBv8tyesEySgcE7a5P5do76yCDAgSCqG3J8s",
  "key5": "2dcGzzEevCUKDCpHBwDgMvexRUw3nDtjhwzmtG76RAqStaes45sAcpNZRPZLdMjrsjQLGXhWwhSmSrVvx2Nrp4Sn",
  "key6": "2Fi3AxUqCJmiZ3ShKnTafXVMJTNWPMhQnxcqwYz6fCBBKaX8AiKxpBsAGQCo4XcmgyFD2wtAmf6gYvqJ6cGbVZ6U",
  "key7": "3GHRanFxGQongeDKmCyiaC5AWUbmbVCQRWn9nb2YUHp3Hhpy7EAc28axEFQ3DQhZMS5TnSMUPVYe5nPGZyfQXuS2",
  "key8": "twBNUJuf1DW4DavfrJjFmZoijJumz9T1DAEpjz3tsTVnoMWrWQxuCaeyUDVyQYXGumGrp6CgQGTJzcxnRqzBvuz",
  "key9": "4HyLMhrvkSU6r3rUgin1UMjSF5YP5SaZ5t2qXsEGSHGts2rvzvbnMjwLSaeKPcvv1Y3Gm7zWCp7wzTYw2Nm94HaA",
  "key10": "5KES7idT7EMi27WtRvuws5EuqAvehdkAv3STZo9gCSjXh5UqMhBjaRYzsvSzrqzvDBwQ7poCpWnE9QkLMAXTafQ6",
  "key11": "dQNyvy5mPUeinnB9X9b1yK7XKqdi4qJ73idtwK2Q5rdwxNFHhNrXufLsi3qRenDMFHzcbdGYWGr9vVfH7fJmXZ7",
  "key12": "4Mw9ED6qcAkxByYDTrXfiw4VpKxCwLDKvxBWG6dLWK8UKJ3NCJUvyN8YCmbACbiH9HXyszdjRKsMMDCC6bBr3d44",
  "key13": "5h7RFpftEqZvKRECdM5TWUFYTWWXaBJPe28cB3Ua1PE5G2KgnASmmK1e8oZ4ESzby8nFDoEXpJB648uLE6Yaemu4",
  "key14": "4etQMqsbe1voi4xyWLezyhyYTeko3mVSK8avaWzvHJLARuZP6En7efvZBsqAsihLcwSpyPMoH5zCXn89Kz3UTN5s",
  "key15": "dqMYLhNpZvSmkfPtJayFWxcyy2ERAaDesuKeCcRmpyAUHvK7TjtFadWRnYXwXwUfp2ECJ9s3c2w7QTXDt8ayo38",
  "key16": "5hFJagkZW6ivBMdpL2Cb5BKBRvtu2m2TamGAW7927iUPZwKLdm52ugHgNZybddHBkA5G7nGZnR1WvQWcFy5iYVuF",
  "key17": "2ts1kKKVJpQJWxrxPNUCfizpQXr476tnGuQRweGJtf1Tx9xHwHiS94q6mBMmLz4tGC7DU4dknzxXtVt9ZJSTSxKD",
  "key18": "5SFxQXcwiLdThFTt9heEdju23y2VVfXxe68PNmZ8rrv7vmNWr1ie9z39fS4wGks5WEmHjn521x4WTNtaFGGnzatX",
  "key19": "2gihHC5gDpYSs2sxKRUBUBqW63tQaP6gSnxMYeRp1ShbhUiCBfCP9FaGttEbCSnGPefuXe9uKBPuKphpxMgg2i9i",
  "key20": "2C2X2c3TBaUmwGugWY4uT5bx3XGo8THE3bZs7DxKnMDaYH4dqVJpNdDRWb2nqstcDezRenVNYtRE2NBaaje9z7EG",
  "key21": "ADaK31tiynptSsimEN2VcnDJpYzHSojNX3RMrCV8VKSXSPUbLWEUFtjbeCw8DXCD75e9ftyDrTcQoovdNZUwDnm",
  "key22": "S9R6xABcyKoWqGcBc9pS1cNeY1xquFtPTxNQYM6z6KHtZFePALrjtpf3CoAcE6KJsF3QLW34D2y4mjfFG8HqdzY",
  "key23": "3mKm97GvEYpUGw6oqTagvdBSz7DBMs18nFxBa9GrMHHhxY2es1pSjJuEqvcNbUfT1mD7cphYYXTnUxU8kvZzsCAX",
  "key24": "3xh28jQYxzAfwyusmYUKdegKb45XyvQ4tYcY3CHdTqi4HFiEuhnBucyJiqUScHnauQSVpHusyKjqqbmyULbowLL",
  "key25": "NkraQwdM22viWHdQcfYnxqoaQCLT8H95zMEKgdMtiuDB1uSJpipAQ94YXTNfGpJQKxEtb26rd1AxPWWzgqQEtr4",
  "key26": "67HANX8wgzFcjFtbPsMEvX1VJNLoQgYkjGtCEg932XJeEkGgBd6XuX6hcBJFxyihx3AkWF8ZEhgMVyPnau9yezt7",
  "key27": "Z2xWdzf5SCyznGGKQwzVqMi7bcvMbudoJNw6fjGMeNzgfK9vMNvyBnE7YANxHgbNguG6KR7XomrZxa4itbGs8T8",
  "key28": "5eMFbGEWr9WKqiRyUMKGxVRXjyqH6F1fsZFKrWABbbvmPaYDvmkhMf14zufYiFfHQemg4tBufp3vqqoBqJcosvNS",
  "key29": "3WxBDipM9KBv298mfjsJAj1m3NcFRh3eadV3x4APYSo7Y35bs9vk3uGWm6gWKPiyLYjuTXg75GN5YU8GfKVVzpe2",
  "key30": "37DmvkAkMdYm8Bka4ruHeCeasxUppMJ9xLTWgqh148XoVDQVkntRBLXaJ3oqbSB5YziCn8n7GjYTaJ1GJBmAx9pM",
  "key31": "5Tg1qG3LHBHxcwwXTvkfqX7jftzsY5saMfD6EmR68nFwuY2QtsmUYpiNfr9GjXqRMYnoWpqrAWq1qH97bTkoijnL",
  "key32": "3KF7sdVa6GuSZdN4ymigb1NqhhFxLvQVc8nLpHQKSKMJ4UejYpLTAUURRKJGv9Y3DPkbwjkdiYd4Vz7jKvA1VAwx",
  "key33": "3FcayeLcCjZ3GBBuuDK8Kuaip8BFuL1E5AZShKaBgeUvt8yYj25dtoVmfU2zQec4qLmh2i8GugKRMm2LwjEoqaH2",
  "key34": "utKnb3yRz7xysEFUGEUHvn5xBVvs6ncEaMsmkB5M3XmjEYKyn4r7Dt6EQVMkqKzF2RExHA8QHakVUkLbmA86Z29",
  "key35": "2bH1NXWuAE5PHnuUhCEtxM4x1sm41p5UnFN4vt6d3n4zkS1B3H3P3psrqKuyZsoRqZ93BFZFrNjoCVbMCUHyh8Ts",
  "key36": "5ywsQoE9iHXuJYCHWajVULY13MrZPwsoa34L2K52GDB2JNb2XMDakqVLv775wrsLNZQ4XbKf9cK79voUwgToekPz",
  "key37": "3G314qHEL7kS9ydHTDUyBrBuqv3o6hqShvQBm7DDqhonmuCKhcxwY8z3PRnHWxHU5roxSensFBkcD1W1MFz6YKdN",
  "key38": "3GkeWTo5MU3d5H6avHkZAxUuMjLt4NBS4p3kbvWhEjpQskwZbSheXD3T4x3w66Do1rSP6CfWktWiipBf8eomRbjT",
  "key39": "2RBg3qfHyUyn11gqnrobGCr21G7dcvkEgX8wMn9Qn1oYvm9CRn5JikMzBFNK2xAjKo1ManwDxMjy2NieVLH9PzFf"
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
