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
    "2TXyZLaMR8qjTah11TTRQUuuTmNLt1Xbmc828evP1KAUv2Xo6zShHYj2Fym3ktC3LTh7daJZa3qrNhA2pw9dKfAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkeHTPLNrw93qHiBbTbypD3RcsGb72VDvYibxKs8iGh47rjpWfnmsRoUpxTu7pWyhxJkHwzeCCJVa9Q4dwEsBvY",
  "key1": "5T4WdEeQ9k8iv5PN9BqJRE6Ag5RBYQE2Tkpw3hjGJT5xF23xf72rzrnXBAkLYfFrcwEyomDX7FKMp67zZUtAAbXe",
  "key2": "5AuNZiHr1bWGjYd9eBgyp8ED3GEFWqYvJTfJ3RZMyb4Y9fFEtQY6Ex1BUozhyCTUjYUHvUbQrvkYyXVc44zzTpWS",
  "key3": "k5CNwTgQRXzUi9A2KvzjwX5RPN45SaC5MMLxCyTJGUcwbRwvdmVhTGFm5yH1b1R8J6WqpqANjbdRA2C8q4x1EbH",
  "key4": "127jT8DRd1UaT6ZxkUjTUGXbmwNpDwv8YCyty59piViszCLr5N2k6q6QZJvz8nw2M9wc8jk6UQ5KCdEPf663pXJz",
  "key5": "4rmFTDjT6nVVTPtbKhjbKtnFniiLZ6xvMVDCMjgsdTpVYpECHREHrk56ug3gVeCgdmerinxkVXi2vV17r6BAkF22",
  "key6": "2ZL47s574s7tHQ1MaM95a4xPAJfUY4Z6x2s2A2oK3omuTmF1Xa2bN38dTJ1LoqDoPgZhWJtx2F7Lu44Tz7z3185f",
  "key7": "5f5kFHJFmqQtLA8veMpxRjsKvLAcD8e5JKXkVMTZJWnKAcVdjrMH688Rb7Ry2SySKzmjbdLgEUwcw1JuVCzWQy6c",
  "key8": "5Ck41fh46tpkKYjgCBYz99zCSz8YrKJK2RPmhNo53tRkKLwhiFDujhDc9EbJs8mTeXJXKdD9n5r2kQxczgsNPw6a",
  "key9": "61k4eEyN4vtcDxYL84GasGcwCgV32tG7WKpSaYkAxEX1q8FDKmDge62pBwUxcFQrtyX97581dbDeA7Z9m5C1r2YA",
  "key10": "3Mwf1TUVfEKdfvqt4ZwXt8YG4SM5xXB7AJg5x2wUoeNWooyMjSnmCykm2VDBAJFUbovhjFLfWDkSJxQeQLKiSPKq",
  "key11": "4iE7YcxBWjTv6qpZoecsiMTcycDqdAjGT3PnABMXHgQydeHC7LnTZtyyv16tSerreyCPF5Y26g4G31dqfCBdJ4fy",
  "key12": "5h4dFbAuLZLDodr7woT7ujg6L6FJTq5UFbx5KzHXdEjBWRqyQnWfro4KhuWrL2JXzeJgtJ5VEC6xFAdzQuze8gYL",
  "key13": "f68ucb56pFak5D8fG1ij8UcBgSWmV93zh1o9Ecz2XyBYVbhXfeu89AdYkZhmosS9CB7uxGYVjCH4UchtBLJwkeF",
  "key14": "5UUcJMC6538DHKMzNmPBKaxTFjSLZ5bWBUwPb1KbGMgJfujW6sbgUewLF6BfDQCkVLhcTZSyxb39ZC24kyoghWAq",
  "key15": "3dAjaJxDrc3oHCuGSYjFvUyg1Te4oNNFUDrfn5W5NnFWfUU5pgwFjJnBD9J3FdZMv1bFBVntapnNrr2GpHWCmv6u",
  "key16": "4sLMvKzG7XBexnYWHyUzNMoZL7XoS5WVvorF9QVt3EsnrDD6r5EMtk1TgjXy1pzy7c9Fb939oRWgwrKAG6PvaHA1",
  "key17": "54JRMErKRvAEyAGwdRCSnBv7T8PvDVGUEmjutbniPPNB7s6a4eV9fyXNxXdSznUy5NAnSaXe4L3SmAXcaukgiS2A",
  "key18": "5nx6uPBW4yy8hBPd6sA7RroFfLDm66W2xXXMwoGLP4AcLoLdQHssCgy6yWX8Keqwk1KahwZkmppdQi4k2cQh7ncZ",
  "key19": "3wAKhmUAULoYRKJryt7XYBa5dXy6sStgh5sXuzF2wRL9vU3qJxubFmJ3bR7GXuRMjPcLuWPcrSBB3qcMm8TnB3w9",
  "key20": "LDTxXQtMDtRTexRRWxiUd25KvDJWfPrTvHLyjQeQXEiSeXTPPjwGoL5V2gwfiDxmZxreXpa6FgTfTRGuf1s7TE6",
  "key21": "4jAtbSZVMqWUMKx2RgQr7duJKJ9ijgXhgbtSpALDMcuqEhRHcFs1YdTXSvnZbTe3ctmkViHYMUhJnimNobi7RyKU",
  "key22": "32UiqrVMftRbSew5V7KqvrrChvCq3x5hnAx9nwYX3YkG2pKSzxpVjxqGJ1PuJ4a7jjY3nSuFRFKqW9ZXkxCzSGH1",
  "key23": "5nF3NhZY1QjVK1fb76CEyue1i6rxXLz7NhaHDHC73gt4Zu86LgrdEqiQ8mdDsgZ9Q9D6Abf4f8iTTpey2egc2W6c",
  "key24": "hWARw4eMb5mPNhcyUyJQQw4Qvbd6cfV76phMK9BsNFXxt8221ECumbXmg4wrqp445c9sbGtiC6b6jS6Hxwrzfxa",
  "key25": "TjQnmxkyis7NCRhkLudQtyzsXLoyqmURU4EaiWGJp43aJnhN6it25EL9u8fMF5UYV2UnXuNsou2pCE3q3VCmasy",
  "key26": "5TUDoe7AZLkm1JaUV9xRdEpmzjnZ3sP7yfBNFWvBxwDoQ9hmE2Kek6VZ93Q4qHqK7nG3bdcVycTSrm85iqGGVD4U",
  "key27": "4hUfcU225iq8vXEBShHCms3TpjE2vimVNijcMsnqre5TQxp3qyozkJ78cQjQQAXB4g4CVwsS1zj4yH4MjMhQgGJL",
  "key28": "56JxTWmqbh57aypTSMCB8KnnRNeCDW2S6g4KqfW9pTtKSznRzmjSo3J9DKNHt9UeM7aHiE63GabHLJCJs1FnCdmg",
  "key29": "5tW2cy1MpLfSVPoCKKutvbNzbJ2Ef7fLUEEmZk5bnUPN6j2W8aDhV9ij8DWzuRG93XSmQFbhmv577bvcwGY58MoP",
  "key30": "3tZMKowBh57u3vXjznvJ2nNiPvLvWykcArxXsfDV5pRVCUhrKEF2qCJisPTsw4DZFUHiNbZtYkgRwaDf3QPfuX9y",
  "key31": "3bGiS2mjiJyeoSvaatY3xZa6UjYPra7BPndcyx9G2scj4nE1y93hqVVJAuJZASBRWoqGoicKnjZbL6DmsPrirgLd",
  "key32": "4u1yKn2LHtvKdg7SGFrRVrMNNN6zvqSmXPS3gbitx6aemvwgyx8u8LrzqR7HviQzgubBTHtd8G8KCgW3QuKSvt5i",
  "key33": "3dyxewppWUKWv8RP4euWNDbL7w5UUvS9cTh9n75EmCrfyZRHvKxXDhz2nsjZr2PMPw41QYzHNYEhghYDvYq5bvf5",
  "key34": "8xu1AGFy7nnBswGzRWkTzx6tTeNCM7tZFLpg4TYw7ZJJ6FbjXCToZaet6HBCE4iCXpUdEoMZu8bzd8kGHqHDu6H",
  "key35": "RaGZhBC229EBVUgsuht4AjvAs4R9nWE715WXDBr6FsAhGtUHGNuuuXaZXm7bG4KmRmdiaBrjzVCLTPTnsna1FxK",
  "key36": "2ub5ZthLJouo3K8ZTrpHg6k2XXD3KdXQh89TSCoVjgUvqSZ6UPopF7ixjXkHqeY5DD9bZtQnvuAATVJpgDaZZJ36",
  "key37": "zmgcYRvC9pGdpYLQ2JaZpHEt92tSPvB6EkTq6YeaNBcRRW2DMQabVxxFr4uvoK9bbkHwKJtrk1gXVTMLeHFKb1W",
  "key38": "3x3DqcyArvdmCGNVfsoQFvojP9wvgJ13Zt8hnszAipVVLKf8SGzeh8tANanoLwYAWfY1pLXeLrSMa5h4LPL3rEAC",
  "key39": "2YyMcuEHackPa1JhHSpxRAGJy5xHSJjngA1j863CRQQ9sUfS4V7T4miTv2T8FzbDpuYz4hon7qHCb71srfDhmQWg"
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
