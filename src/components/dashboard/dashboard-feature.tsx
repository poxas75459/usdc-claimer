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
    "NHVe3HAPb1KG7v4vfBPtb839R2PXZutLKvbu4SxdtLCzr61M1S8d8uwRTXHnPyoYfqVBEh6argJsfp3KjtkZRLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5X86gviPbAaVkRoKkG4g4Q7FoMfVTEQAWVsntSjBDMJoR1MjX9397hd7SC7QFbm8pvGVZEfEZtm9xJPAgpcBPS",
  "key1": "4br8ZS84FWy8U6DbhnQKx6tGNngRjn7kGqWyqSjKb8XULMfL4wqHpUXGXdVN7PGUQnjBHgWHBnTQqncHYdJzvkH",
  "key2": "5dxZxL5wSgMABZXAfgatgxBaovXmn3dpgeK1aUoh2LmGZQFUsHUU25RMP5xt2pZvdSdQwNNkXzjgRujkAmjnD9vt",
  "key3": "36R2TWA9XtKzNHnNkpxZhZKJf2BqsYUD2aBWfcMW8PCW1GXu4RMUFeTYrxWNmgTwZhkoSvPyCJ4oPBzpBxw75vEZ",
  "key4": "4EV6DLMpyeYdjMV5NFnRFxHH58XTVSBA7ujPXozdxzzRPMdpuezBjhCRM1JvM5wBg8r63SfZXCPs5uyKLyQ7eudE",
  "key5": "3ww2TzfDmMGhQK8fpz2V8GFGv7hTFHUQaeR5xBYePwuoPpwwL8ZWNus2TbaY6g7nSuETnphVPxdW521MwpFh7fxR",
  "key6": "5mDVJmgiJArtkgxMnuSaJVE6XPwxLWVCjNJy6993jr6EtBFjKbiAd2b9jhW4JXYdAxhhscRWjcChMbvnnneCFpRJ",
  "key7": "J3QTuVYukWZscmFjYbrYE1omKzCPk5dChP7xMKNZUxza9TepMKhYPTMB37MPZb4vasW3ycJ156oZWW3v4PM4oMs",
  "key8": "5azezonbr9XNcEKg2NzmductSpnw1RePA2vazUqq9aY5x9Qksk4com5MdcRmDBwvszCYijKurobAvnurbUhnyFZr",
  "key9": "61nrh7Gxv7bBPKW7Z8DqCMXPY9bQg96deT9b8kAmnsoCcm3SzdMwQESwhJESTQo6FFL8ikoHkcWYXjBvXbR8ypVt",
  "key10": "2hznFF1S3MhrCwqGe3yo7R8uSz1957ZZ9C1SMDNSX7EtFsLZnFwtpvTdBqeZzkkNq4do2gy8qseX18FTv7ugqvg3",
  "key11": "3REQBz5GB8dWinwzuqtpNcLYfuVNGZJmP5xXuW4vvwZsit1NgC2ewTv6nTiqNQJ1VPLAbyGXnhqKFLbT5asMaEeE",
  "key12": "5B57dmXWELbVWu95zZyKAke86Yjj1vgNwZnnSZbf2qr3TtGHcJ8ZuhBdtNVbZ74tkz7ciqBKx8ZMPxP6MXLCnTdA",
  "key13": "5ChAwZrps6aTb84vZ4nEtcACwfbMpUR1tndnSK1Q4y6kBastCDTNc6MaEEuwmhWYvzkVn9AZrcN6HLCN4xPZ5cQd",
  "key14": "PWBjHHmSLp2RT9iBXc5ZpbjC6KT9gs8zPmSpEuWZfkaDfYv49E56SmvgpDxrNg9c3vPFWcv61ntpKMLZV28pKoL",
  "key15": "YcMf67eYhEg78aFne2hGD7DQByA19V6vBBFi6cH3FPZi7FLM33ZiHYvEbJMtLRhWT8ZhhN48fzsM3F41LvqNjN7",
  "key16": "5QpGPXe4nqQZH7nKMD18g6odbUG97y2KJd6YpzeTD2coZcm8KoEXPL33efNjk2meegADfmDrJWyYhiyjYrkVFeY9",
  "key17": "2vXEytPuvtaMKWJqwTcB2ZZkDStxnZwYMtcW6fPgqjh7purdkG8mNeVPtHkcvfMEsCpTgYg1FrgPFTAS5iZXxtdA",
  "key18": "4yuMzqfQfP3gVXkeawZG1Yi1dVENbfkikAjKVKkX1U6Yegz7umYGfZFH9ebUDsSMcuCTr2j6WZbvE83ts2Mf55E2",
  "key19": "wgeRXo8i1EA7AhPnJirqTNyPiE6syKuBmzq185HGBg85sRVyxUdUqc2qMas8eAvakQFKD5QVxz852eCUvdeKkig",
  "key20": "5rGkjUKfK245beQ2gaAUJ8EjukdmgXgXz8X8XiEp12mcdUWgGmSXB184fsPrQgt8TDwdK7hW2d9Jt1a3GnxeMY4L",
  "key21": "216JccmXbBYTwBk66xhdSriGMTYfkWycgeb2dnpbue6ggAwMSbe4HCaP4xFoN6kacbeW1Cs3u7USvyD3ViLMVd8X",
  "key22": "3WY9bc53CLNHEfexXfqSkAidkKWUDvEMAuiQLwvwTLRbhAvqSFyXDan3ASefyQHrXLXnRx6xyZVNgrdLzg9ogxRM",
  "key23": "Dk53zyaS5MkfZJZYMkjywCFSUfJsZKGfgRwjFaQbb5xiW9QNiuRgae9DxY8Na8W7XunRqsGNFbn37WzMJ661cd7",
  "key24": "3AAt7UEsQFyRemBnhZtGQmaSh5uTVoM2JjB31mVF6xDNxou7o5ejFtPfXiFKwAPTYLJJYJg8j3DyMCkD44xBoE8a",
  "key25": "2RkA39qgpGuwarhuqipyiuNdZgyhYChKUsuCepAauGs3RKdwEBiTraZKh5yiYyLHUb4HsLrF74hxGPe9Yg35VGXF",
  "key26": "4kkuWv8QsWRTe4jcGm4H2ZV5fC2NB9KYZEPC5BL2P7JjZECFifzk3eaJQNsG8LYA2FzSSUHzEbXGWcauo2fugttq",
  "key27": "tRrc7siQy4AZCGzMS5a2aJi9Zj6YaQF2fi8B9k5jExCnreTRpiVpgMxEBvc5LbXfME7vWwsucHbaavkFNaQwCxU",
  "key28": "2Apcha3f6aPRYncqY8ajgNtJUFxLsVzqqJBKZ95CSBFjnQZz81xgrFUACFjEBvNCV5kQrCCUvh41UbeZ8pjR8Ptq",
  "key29": "txg32Q21yeWwsZgdBuoodh93A6osjetWgtGeSSGzkWbPg95hwsMVVSBGEDzPGYh7cmZv2iNvD1msu2tSpYiYYXX",
  "key30": "2qKzYvAV1p6B8zGN9JBh12QH8CJEnL4ttaiafXndcPBdvYGZPct5TMyZC3x5s73L2Ecq1KDiViVYrGiaVCQyisai",
  "key31": "5WLgjEfC38NLkwyNYaEj9WXtvPm7yQgoKxkRGRjRBkAt3pGyJaNzvTDfPD64zDfBBiRKUG1DFinUJDpRriewKWz9",
  "key32": "211K1ZJBjNsPsUcDSW5MBYZR5XKSU7R6UrWjJi7xVctajXiQHoLthJ6sdHLiyZZwpN4QL9vG5NKe5L6xs2Yfd4ya",
  "key33": "4cJnNCK16cVJkThm1FTPBCmUMsRbiAVm7yo2jfafiAK4xCGggogR3HhwB2frVgedcATYSCVWAKjsjTpYWhUoA9U6",
  "key34": "4v4xtEv9URnRJnVPGeoeZQR4J2aFEFJ38cbXHPwRXNoMGdpZdAxgdgjJ7oj8zvnwcTJdZTpmv3qS5Yt7a61XXwE",
  "key35": "23RnVk4V8YL6mM6rb2Nv3f4ZvX7PSHkHVhKQWBydUEmxRDVKgpF3AMnubm9oHYcq5LdJid34JKDWyAbBd1yjDktR",
  "key36": "4t3r14MB9nhU9NFKybRnuxMDiWcwsemKnECy8GKkowLVxFT9NeWD4VNSkWJ9BLMr5ngzGduB85Yx561kfdB19Nce",
  "key37": "3pVSzZYchzoZXBxudTXbearn8x71NhK55hrPq2M6M7WpwrjQ8HFobGhUMFkXtfwFLyjQZXP9j2ZamtEwuEgFppi4",
  "key38": "hRFCkEmdM75dZdjmcV4oZGrZ9nJQFTKivbzWWNdpco58k61vzo2FNvAV7Zv2ZiVC9VQjKteEqBsRQC85bFAHz1M",
  "key39": "4DvBUiJBHWeCerjcyDiYcseak2JD9FoAx3TKYuwyDh3rXhUSwxthMzmWMCyTh2jVDqdpMfxAbXENv4t86CKC7uAw",
  "key40": "45dXumAToNvtdv1Uh4ypui39TfJMqGVUjxmTmAJa6LqbxT2tP8p6EReT44psrCEdZdasL3C6C87M4njbBznRR8sq",
  "key41": "21hYVEtqGXuiEibBHgqKn8J3UvUKvmoxtogHAvyJ7AgS7AGgW2jMjMBpan6GNyH25Ug2efRfRfifbSsSYS8MEo8S",
  "key42": "2TqjE2iEXLS9jbh68yn6ncCsrg3FdbkUHLCt1yij793jQe7tGvwT3J4p9UL5LoQowGzmXjQeMVY9Wzhtf1pwGUF1",
  "key43": "45tH4mZjdPSTMfJyeyZpKvzzV54ZSNLjTfH882An3wJob666aqQ2422CTncyXRabWub6wCLDp3MRp6m6HrMX4WpC",
  "key44": "2oSiUro5jwkFCSEP7YzFzihpVAstGB7KBwjd9iCQxawoiVaV1KuvpUyFtgJpcrNsS8uL38yJ3ZaFXCnrT4Csmt7X"
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
