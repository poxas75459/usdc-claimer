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
    "5ct4uic4BzgSsTuBFERBysYimZWKyPDCnecFSt3sgyiav7pyUVq3TfhC8brBXKE3TYNPkA1v7QjxqzP3koiS6JXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8uadRANz3dc68bmKFUnvATG7Ba9cH3jU1KuwFUJRtesi3TrwCRFRH7jQyJZAxHkvNk5NhDmaQ1LaA44mZzshJX",
  "key1": "3y5qwK8x5bD5tbnnBaLnt33h1qsA34P8aWqsL1EsDXB7WuEXhi9RpFMx8tCeQL8tDkZXUUKDy1v3gbPy8mBkYXWg",
  "key2": "2RoyA6iz6PKKymZ39y1CvKwfnfu4gway76Uyg2bqjq5Efi35D8j6TYdmL3UVh6YkD36fNx3PWcNyVzuUj55PkZy2",
  "key3": "3uCHBuwDRSca8T3QJ21qkjMZaj7x9uuMmzhcC3G2FYmn2m7D2PnfyF7Kd8eHtX1kS3qHDWz3zuLQT19VJanvdY34",
  "key4": "3MPjM4fEWW4CcGPoFGAP7SMirCMm9U5xY6mbUwUnG5mAX2qYRPhwuYCh2fmLB5SmgnfDk64cPHBV9zuiY5rBDJN2",
  "key5": "3aws4ji3i54J6xoGcY13CUBjXaLLQbNwatnwDH34AEbx2C6rCQYotPF72zKfiBqsaYobx6UsiEBqQahysnLQ4E1h",
  "key6": "4TK4Ja2Y5Fi3ptqhjvp4zvGYESVAMZGk1op2pifxcH16LkNytAaYuy96T98e689rJowCjGf6oySWTgf2T9h86b9H",
  "key7": "pSoLfjXq9V2UxTNkBThftc7DEy34nAwtLLjjM9QC36exSC3WUHSBsz6ANVHyPN1UPPvoC4BkiQH43cThnZp2Mxv",
  "key8": "2evh1imrXPUecHGVxtJKYuDNrkdrQoccMViYajr8JvdUU51jL8TdwaWXjHa6TzAyic95fYjy1gQdMkgcJNMXKouA",
  "key9": "4W6eAHzrEWYNDzDWaz9JKkqSyKcxTdRXoEApKbXqgHw9bzwe72CHdyMYwvTLxWScNaBbVTikZdHFJRBBFCgcdyy9",
  "key10": "3rYtBMYDdiSufYWTSdMRhBoLGLXsRawoc3iWXqYw6oPKm9xU3WVjriTBJxt4MHbxCYDu4W1TmqZmht22yKVKMpSo",
  "key11": "m2Ve5YFgXeAB88RNxaimsj4PZrGb7BJmbgNWP7W2ejz2YbGvarasDDwwjwSovowMY9CbpWycDJcMC3gms6H499a",
  "key12": "5Rffoxsy8ova9bTZjXB1pcrCGdYyWvdsQ5eMM65JKdG5MgYkEPfufJuAZ1PcnH2psS9xTp7p3Tip8bp85VuzzDsv",
  "key13": "2KPZtKynMMzHWBtDyr75tgi6NYQLbGvw7uUwd8GsiGf9Ggj3tCtrYycAeD6cQZQMZ5EL4YsrtjQnuZQWATQ1zaUv",
  "key14": "6jHJY8CGGy9HQoWJucL8fXsgxYLA2BZzcBH9kKTkThfkEAq51qBHhdUfzUw7UL3w4V3v9TLtUtm8ipSTAfXPmBf",
  "key15": "21CiYrUssFw7ojS5iYUavkVkuQobJhYk2fc19KRXBdQa7cbkkTj4ocona5bjxtGAjtha5EziCKau7XhtqjvbMxm1",
  "key16": "2CfmeZ2rrMzFrnxe7XLorcpm5tKnvZPhNErRCsHrDLnBibiJavwxTnNvVZ9ivm3mDfaMmx887PCbgGiVJDquaTTQ",
  "key17": "PnYmUKjNExDc1W2Ds8pc6HbZgvcG9VqETymTLKi6TJMioHghtudCGTTrwBhELqbAG5gTQRyMNj6X3Cb1QDyizhX",
  "key18": "5tdCjWBZZQbrjomGPsxo1QpVaJ2RqJWBVcy8pBKPmMJPjypQFFGMo7EMexHi5JPL6dD9vDsrb8X75KZm6VtjTg3D",
  "key19": "4ajVPfprkUSMaAL7d69hMsFgCbPXor5ETyaxSaHVkVJfj34N4TdJ4FgXvxgFgbgiGMEnqg7FphcwHKmD2Xxa1dWg",
  "key20": "4jWeuyDB75mgPLD4PgmmLgdB8myyZgxQ5EAfdYGKvmcFWXdKrrGoLSToa8iJRqResDYBZrUUwRBjspDfnXEShJ2H",
  "key21": "2Yc9YeGbTT5gqWsHMgtLK79RCu4f2ieAfRk5X15CJMuoJ8bpWhTkpfrTLygMwg6f4BG4NkxHGG8Dqfbqq8mpShsh",
  "key22": "4beoPT6qy52YGijQSwCiAUnv1UPa1TExqk1VoX3aj6Kva49vsB8mEhq6Q9w1apj94QKCTdkPhj1xVHX1z4Wrjevm",
  "key23": "aWEGBCHGtEgyjsaxZZvTjr1dYXHDht7NyPe4SUNPe2FjwTrhzdN3sBzRdrqSX2yFY1xqLfUiRHS3FtAjMVvyqcq",
  "key24": "3zxVye7yRcpg73147wsiHuUngH9DP25dSoVnh55QYkXFEbgY3AcxXxyDRKiPfNm61jf17nPEwtirzxncTEPDkH2Q",
  "key25": "nyuUjkwX64RZjgNZyTCZCFZCMWkq7T7wXvro3Bo85T83foQshk2sah9qJkWQGby5YuZwhEjMahdzA4636HumJAP",
  "key26": "58WqPtu3dnUTUPQ6J1GUJYzFbD3MLHwup7fLNvDAio1bD5FUM19vc3BvJpMSjgxAmeZvmGcWKWAAmBL94c3YYYom",
  "key27": "2mVAQACFTY8CThBPz3yByj6muojnZ5UtRfsayP4EyDV5vt64LpziynMCB17EyXZDCgkpoz5FJsZ2Qr9rhHgm4dtJ",
  "key28": "35WNCK71LNK1E5TUPmnJjgUcTs7iNDwFSwb8h2UqwzkAnzNJbbd4LJJvXnLL2avUo1UBgEYFF6QAFEbW5iYVZq2w",
  "key29": "5QaQR9nr3xGDmQUdsiwuXrpwyMaKxng4Fw2RrEeqJHBrYSDCuRL9wFXERxkhAmLomuSqb743fGxedQQofLvFQMA8",
  "key30": "5Lcvd618MJSRVg7HAHbfXkL1LA6gYLevE2fCfSUn7CjeEVH1nZf4oVFUH4NGFarYv2oXphrGrHd6LyFFv6Edkdbv",
  "key31": "3Je5zVTs2E66hfKwJDwUTZEFXi4o6GDskn3R7XwLqkPTu9kWPAUKmp3Si19pkEue4P94q4bNpCR6Xv63iBaGoout",
  "key32": "5P56yBGq2rytveaKJNZzXvyZGYLLrZmYhasqatbT8DKuqyirRfTMMwNMdKzEfjd8ueNic8qHvDgPoUAoGJyT4qK6",
  "key33": "5i8SMGtNBrqiEUznMSezLC1tnAAxYExMxUZ55H8q1KquQk9hjN5u95brGJY2whQgNhPF1H7eacooszGF4AzbSQrv",
  "key34": "5VmzD7d3tr5z8BDLUdAGAiBTKtJgduZmTpmGmwSyHY8fW3yVJfMTnx3Wsy5S82LYJJfYu2dkUm3oDL24CLFMVrUr",
  "key35": "335ZXFYNaVhRS3pNt32JA5zsG4xK48HuKjv41d9B2WNTmvZc5NzSDVFJpEdHtisCmFuGsLrLswLLGjtqiBojETaK",
  "key36": "4XFeGcd826YkDKvn4zNAqu5F53iPPyAqjhJVtvvr1PRwMoDjy15Eoyd1BVETDs2FzaZwnH6NCben79FKaSNKLkU4",
  "key37": "byx7HeUPEW4kNeyoB3ESCryojpJWKyLg2kFSHb2L9Yor4ovEBMdXDu9jX4RnDBkkNLTE4r9hFsH1zKUekVLEhzR",
  "key38": "5qHJJ6pkXaMGftkQoVj4xssPJqRVQmZsiRxBkXYh9zmGoe6Wh7JwLhYVVMX9Cgku2YvCnHCsBhkGmcY5ijgRyFg",
  "key39": "4oWc4mv6eEx3U6weRo9gJWdQKaKVYKUrhFcNh2E9WSA69HNDkj7MoFZPQUmk2cbuBcNxjmQPF8KYB169vq2kDA2F",
  "key40": "4qbpxwmJX1cNY3g28CYQM27t5iewVvzUf3biWGy9v1oLVW5DDFTAuxzvzN7o1tN4Tu9cfGssktH4urwHCQAEfuor",
  "key41": "3rhove2pg717wxnDcYe1ZhVC2GtkbXDmf3cheQTRgkbHUkfNivi1RLyzmSQ4zBLRFbpCUSPEo4HXZseYuCH7ZAz7",
  "key42": "wsrFY578P1RN1mcnPYM3Rrxtbbkx4EeK7wffZUGpzXES4Q2UQTA2Nwm4XHbBJz64NS7bQvCJQH1fYh4D3wDAXiK",
  "key43": "4EasA9rfs8tHNyZayr6snLKJr93yaLQ9MseYYgQtoQC4r23fvx1zCp9gCebH72B46F5PbhBEgjqtDRRFEhgwA3gZ",
  "key44": "5YFpMWJD6YFWhqKJvUtzxUZ2r4zhABT9bpYeByLWirUe5Dycodej3PtRiwaKFDmMy7fAPApEWob9svhFDMq8E4yC",
  "key45": "BPgs2b1CHr6hGrdAqkVAoKwM4hMRdrFbUoYHJKz6CixqPHgxbsxDmvweNLAGEqmxyT9tKfmNKPtaNqBK32i52hB",
  "key46": "39VdHZctqVkWVs1zZS4cnpkZFA4uHfxumBzwjixHdJBUwncpZ2nFvhFr5D67BPXe6dKHxbJW19Kk9qveQ3XPT3Yy",
  "key47": "LvttFyDvttYT5V5Gwf31CL1NtWGEKWwMV1D4rUeoRAt6pv1DMkp7AnK2eyur4RJ6NEUSGhemZeWSYKq4avD9kkT"
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
