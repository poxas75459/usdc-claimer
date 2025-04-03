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
    "3nsaDtoUGLP4itPWEqC43qniptoe1kL5tWjoMAM21rJXTavFacLqNRZvEfHc4jHsA57sE7Mc8U8CnEYsxWxHRznj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDeSdGXtGDgpbdSCuaNFXdh7qM6rcpjCRjVovDBtMXxUZtqXMGd5uvgwND8BL5Ju56xX59kwk1BkJdteXZcEvAa",
  "key1": "5d8LpChLe1Ld4m2SuyQnhnmTihBP7VmNMTY9MT1374PwC5fiSnFqgFtoXFzSyV3AiyiYM72AsSNqVA5bjHyWCGFK",
  "key2": "33UvTJBYkkwnHzURcktsRn9rS2CsYNWLvfG3mhkf58JiFsZREM5TuWP3qSkZyuqjePbzh2xG9p73yUxKbcLpnMbD",
  "key3": "52ch3ExYi1ANk1Sh8ATpUiFabbRBzVzRd4qwFRo4ygXmABcpPrJwaRdxLTseHeEg4VGU6LsUQfQJmVwpy7hqychx",
  "key4": "5iPKJkMsLiPEEcd2jaZW1taA1a8qo4RMtrmgU8uy8rF72c3QJ19ns4ARxH2sN7iayMPPpFXy7iZg5sUZqkTTs2b5",
  "key5": "2aaA6ubiujUvcPcMtYAxeoYAfbkKwL8zjfx94ynMq3Ki1Z1a4vBwTXcaPQVevtYqcrurfSch4jovzaDzMcbnS728",
  "key6": "3arh6ZHxJwjBop6kibjme3sJbu4inL2dUcrn8uVYbqf9o1ZB9921nYhxVWPqr9VSe3wBtsoYN2P8zFf7bBqVnLoP",
  "key7": "26xeThPCUPgjXoEGCsgaRD3j1tusrx3TpsUTHZqmvRbaGd9i3CQUevZxe5FfuYenKQEgaCHZGeNcbG4YPQGKxTMc",
  "key8": "3Vi9m4yZHaUU6xqchqUrTP9vS1FrMupqH11GPabv7ETonCtYhuZg6sPpxJcM2AH4aVDXQrUcN8V3RUrd2onZDMde",
  "key9": "5a1SjQqaFohobLoaoxDosuuVRT6ubHiAYW1z8GDfuEarwNZcfJNJAjWhBZbhDrmsPZKrbCyuA1DZbWZpJDKSa4pk",
  "key10": "5yamHcwt3sMDAMh6wTWaRvGDGQ3ipopwvXgW174tWwJTKuGznhFyfBjPRvMkxMUXKKTdfSh1ojhQR53vW5Ue4nig",
  "key11": "4T62LhHaRC5dyFDP29bMKWeYHdkWxRiqPDRYVfKxh6afNyEiG5YWhPGRrGCeEsRkrqLzZBofx3VXXqDrLaoaK7fC",
  "key12": "58M5Q3sN1j2RZQLXpp1X2DY6wzCUDDVhHLHGb1xyCRFvHwCyBXakevdjNfJHFK5uELXxijXeA5rWaRAKgnjZdZF8",
  "key13": "2WxBZE6b277yMgme8JR17SUKy1hg1YsemZS5f8e9fuetMqtSigLzUJDPCQyj1uwfhQPHw2ZooeBp4vwtoZowuzsi",
  "key14": "PkCNNNwRg4ch9BhutGwrQ1p3TekgsuEjxA1hCGqnqpagfZ3x8BSbT2qtrUbAQUGnnCYxJg1frxcqHMwxVcUvFm1",
  "key15": "62aZxE8j9NhxBDNycdUzB7euEmSwa9xLfRo6HHofWxTM8dU1SfCCzcVcEF2WGqcJUFg3W7dxdDLsf6NYTb7zfnaK",
  "key16": "2pLZXGSz67dCDuhyNub39yFvYitCHspykRXXk7NYssWBsY23jBDjnyipZhAhQD1BeS6BCCnmjSR8QcVKMAUb63Ze",
  "key17": "3m849M8fpHY6VUrRaFLDXPhFzZaehY1VyXZKP4VFcay3TjbJ45BYzWwiooWD1WiE5VCGFVPa6sjJYi1bnQuEPdVp",
  "key18": "CtPT1anBWuUcge2qDWqG89NEsB8sPmrUfM22LnCvanRj4XzkPWi9giQQzWmb1bNsBEwgN8sJYTcdPUcXYV9GZJ8",
  "key19": "3efnNxKe5ut7eQgHqRdwngGrpAWa3cZpX9Dw1ZpesBist19oePZkdCCnGNkov4i2raaEMTkM4aFyjTmM4hjxz7yV",
  "key20": "38ikz2mGcDCbnoj4KANtw91NnFwYGnRsxWUgRY8hvQWTbxFzBGHcgqTwBtYJsf3Wm6PTBY7MfPcUnoBZUpJgnaCC",
  "key21": "33cFzRPGuG3Xp1P4irsSad3iP4qErHYnY7EZAYd9JaxJSpPV1FNKL6nW8AxyQwYiQQvX6QJPqB7iAPFMy5uYcrek",
  "key22": "moHzDHdW3B8fKGmRBqPPe5qothvJ3KnAQjMM8kGr2FxWPsHCny1KGHohc7GWApuRDUsyyw3j9E9FxYKsxxxiaiM",
  "key23": "Nbmf2K4xH4G8X8YNd6goczxnjyR5tWhP4PnCCTDh3jHMdGGt47M9dSehCjtJ2zAg9Uf7AQXAM9d7X68UqQxKGLw",
  "key24": "3NZH7DBqCD5cMkYA3zpUiJWsC9PN99ou6EDqpiAqeQT8zAnMN4Mb26eLEYn6R4VSjFnXFcb5vJQ47vC9uP58ZPRa",
  "key25": "vwJpEHdDkW3N5tKaJZZUA1G3AS2vi7LgmsVgmG7oFAyz9dhGJ9udno6DAoGevAJvQTJM5ZGvCxnmLm3cAQUe83V",
  "key26": "3FDUHqPnuP8k4XE2PTs8JPAR2L7UBhjMsxK7UAbykRChFhHGZS7Lo9VepN87hJ9thibfmNBUvuPWNJhc6oY9kqwn",
  "key27": "5XW5Gn2HnwmnTzjiWwVSRWzAFCXLW5ZfzHkreoeKEh5kX4mmPZY4wXfUUDbR6yxHZTYSdT261HM68XF2RcPekMs3",
  "key28": "5o5qz9vgmRwp9i8EkMCBWyfwQZBxLa1YBzpQdRbAjedBfBHicYnFBXeusVBxgUvYaLhMmaUC9oE86dQeRz4EzieM",
  "key29": "3pNLLeYXmLUMiLFXVtXaGJHWvz6Dkn7zBwTTbYGuJ7c9nESFBy84sWnxWBtsTZWa2ujTsvAccbGnHutKPAWQhW9i",
  "key30": "Vcw83tdPxYNj56HDC8eCQqVobJCf72YQ5LiKDoUfnCJ4MkxW5t9VW5qhWzSn2afbXs3ZVjscrbfVG1rzbyXWhya",
  "key31": "iQHx8oqaoiSDuV1JKc7DnauEtxv6oBa5i886Gj2y2rL91YdHVLMNapHtXqWa8ZpXadTXTpcQ9Yw4EQtMejJVwut",
  "key32": "3ZzcDZAwLnpp1MnmhUfsnwicAu34DcLd6xJ4mYzNf7zUeWLCWpoT5frmzpcA4NrbHeHVvdE46nktg5QyBnrHCX4Q",
  "key33": "4JhcGsPbf1EirT4UvEHzWMgN8KSHJ918Qr2aNyVckiw84B4fWDxwiut5UDZn3xQp1BRzwNEHyVzgnnpP5WzB8w8n",
  "key34": "5j3eJAAYFyyp6VibjEvQViYqHW4cTxACpjLwgJd1TNaJjziAyAGF1cfyimN1ttUAr19dz6qL1XVg3X4HdrWTeqkq",
  "key35": "4HfqmUzFZuV5TGtDcUvaneTSpUYDEJmYGwAdu5GKHgwYTEgKxNdE9NVgRsgYbfAYYnHWGgzxuKhxnZpXP8WoTboG"
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
