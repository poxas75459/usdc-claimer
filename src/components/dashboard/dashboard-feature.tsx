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
    "5cyHEM8goPbrFoqRbj7XYVXWwhAqTajHFgKKUskwi3t8B17hc7u8iYus3eSXrDPwh4owSCdgk5GXYVvJp6e9AeuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wyagzZ6zrWkxCT6pGseNBxo3Tbtvbbaf5cCJUwDYQpXJYDfov8DjSRRkEmXn8PMYhCfenGGY31xbMb1mg7eGEgm",
  "key1": "2sNJjbjCtjygynuPCQCAw3U3uyG5qfdEnrFGHDXBRnC1ykS3it5opsUzbvuN8n91WpAviM8fGpQoWwgmUXat1sUL",
  "key2": "41eGWvKNrsxBAH6BnXGVbR4gnRo2TeJjmiUkdyuHdu5YPmbdBg4r2Pb9qRqztJQDTQL1stFmNDv34vQ16GfHLUn",
  "key3": "5MgjpbKiBZRT4EzKZUvzwEfDdFjstPvBDap1bnBbtLGWBmioDwToKcMnHTp1tn55xcQuhwqQtrCnJma2t6gEGE2j",
  "key4": "5nxxbp4bbZtDqE3exnvA1miT95ySyiRyGPqT46QWNT9cBbdfk78HdbqgCMp7F4TtxfEMaHeGFqTp64Gur9A8hCrs",
  "key5": "XFxbtfkG27F2j3iMKy2QkSxypij7kpsMMZKrwQKpjymuWX2MFjQXDW6y9bAxN3HtFkHeUeuNEtk2J4vrpQJ19sN",
  "key6": "3VsozK1EGzpN86TbnUBaN3cGkZ7UwLm8dF3UcKk9h9RR8GwFDCS4nZD3tQVQTtHujhSTgSFAuoq6PyMzxrvLtnqA",
  "key7": "iSsw54LqPSXFoTzvnSmDj9uVZEtsymd9YETqC6xqTzwcriRxpyskiCHwqa7BDqmMtEEi1J1KShnUigVqS8KNLTu",
  "key8": "28asg3dwfUgqvWppxRC2rFe3WfDjfaXYbtc1epYVuXdoTGVddJQRPQk98jESb48XnYzrwdceNaLEDT5VnCyx9ZFw",
  "key9": "3ToT8XHKGiXiD8n3N5KAVnWSzYjKhvix4YUpGfYozuD1YAp3XS8eK72euLp2enQSe6xjwFnfqjK5tPY4yaUGtBK1",
  "key10": "3nrv3zkfCwG2E13B4ZJwp8EEUvvPnWwNqEo72rkUE2BybuzjiovnXovNxToGSeyRy6iAwj7bhxJuGni7j4NEJtQ2",
  "key11": "2fmXXSo4Jjfvv7MwJDT6sFfverAfGdU8U1NNucmM9MRPfqBgzfP2uKnCbxZSexxoUuRdz19WQNMVHuS65ykXxvJH",
  "key12": "27kk8zPboBiXA8Ja4XKXfEjeCtPvf6GtCd5B29XPN7NBMzW7p2c5oqGwKPiAjEDCuVw5wDuEz3ncZyAcH35WDb3X",
  "key13": "3MPGtjTt6RbdCREw4AtsYnFEhHofzMbya4PGz5DGa3ewastyzvK8icdmVNxbhSod1ZQNW5A9XM7Lya97SdRNiZeb",
  "key14": "5yn11wdF7euyhLfgq3kjR8PX77kdqTPZH3Yeo5qr3dpYVP2skZm1FjmS4i6y852jFS5TP3H4pqneWzPJpqMQ7K93",
  "key15": "5XqLf9oPYbyYsB9Y45PUCfSEdhi1qqjGTcU3fqm8ewx9Bq6UckoABVsenPEr8PwKZQcDLFLFPJqJyxugDmR93Uom",
  "key16": "4uMxbpgkvUv4aragwXB6q9asjBKDv8qt3epDW7L3H8ZjTD4uRWRVX1bJc1Gw3w6GRjU892L2vmgKwzGHZjUbWHQB",
  "key17": "5ZabG2Uyqb276EHpXRs73BrpbnVM5LkmVHAhrMiKepBXLjWumDyfvpfWMSZS5TwrWs9965YjJPvpTQiv7PSbqUQB",
  "key18": "4BS7U4PPZjCUEYeYtsBLtQV5JjUguaqvm9TF1Dq4aqwiejdt57ExpXXMUmLTBFGjcH16QFSaTf29TCB8vKXjbwMF",
  "key19": "bw5XVT1Q2nVQuwYybjLxuTi5ZbWGEuL7tRgGWn86fQMAFxj1esEo3Lc9wSDY2BXmWk8uZdREGSyfEpveZkWUusr",
  "key20": "2UG7g59rUHAXUAN2XYaoQM7T2AtfUmKjzvLWQc3jyvnuVMGXNyvXheBTvydW23mun1hMGXBbkAYuu2DcEuVuJzaD",
  "key21": "55ocgqmoPeFNeyq5wkV5p9efcUEmCZJ2RwAqA5DBXifuHP1S9bWF3msfZxyarsNRj8pqzbFEm8bGWKuLL13L6aBx",
  "key22": "opsEyUjAEgBdyg2hb9H6eFj2BHVnNRZzEfSbamuytYG1GBtSQiXznVmSC7cDqxjiDSsmgmgxSEQSzqdaJK547Qy",
  "key23": "FjhZb8n5skYGVCJYv7ERik45TTuEKPPgF45x75qPz8zn1Q9wbjeCBmJt6TDuhGCmfoiGSWiquxi8u8URCunNe87",
  "key24": "4J2DJvYPY5EU42QrWpcWBS7HL66Zc6CSKcATsohBiyNYsSPr2D1yVBCg4K2ThMQoa32Nk63hdtr945qG5vZ9k8ZZ",
  "key25": "55cGtKuCtjBgzno6BsUyAB6zdiq1fG1aWB4HYJgEt4YqnDP2NedScAYvNGVKJk26RJegjw6qzSoiUDPoT9tPSNXF",
  "key26": "3Rt31gmfyctHpf6g2gq8oVNnccNq33HLuN4xHTMY5D2R3wRjwfBmYU4eEynPkEeuJATq4wREA7iNeH8wY8V7FNE9",
  "key27": "5GdpmUys1cggRVG25uXdLhMGxkTUkpkZpPqbCmETV2ehKMNm4VggFLYRgrFjZoEsfwfxq3RfYXHokiKuHciirK1H",
  "key28": "63NRi49HVaZURwMdrs49KMzuja1pgq8EpFbv4zN7RS6XTaqNspgdnDVkm9xAeCebZ7qwTvoEVMJkrHYCsZ3XrEap",
  "key29": "43kGa8FpdraHbuiz2e8dx4mRi7YWW8xXi3uNDnLWLCs4kFs5gzv7vpwK7mZmn5Xu4EcyLUYi7cgUcMRqtuche3jt",
  "key30": "3P7GkLyw6DLmumed1e5vjgmVTGnNo6UQHL1GUiCrG814sgX1jzw4QfSnjMs5c7QvzaWrqocNBbUCvzie7u87n3Sd",
  "key31": "3FZZZLhJiNwNWRKqA5cFzvT4o2yk7GjsKLpLCiA4dNU1jvMHAoYT2PsnfvfRBYKSKurPu4xpncypnN4czDpQTkAP",
  "key32": "55Dz8DLHCu4cA8qJXDbDAnMzWqPLCXZca9a6rwK8yQHjTPvVU7mDxsKwhPyr2hLJtVUK7ArtZfRdZj7hLhpYfutv",
  "key33": "3ATG94GsFtQNkhQr7vcpRWZH4LnTkr3VNfzquqr72Nn2WgVZwugwqQdefJ67ZxDWhukGr7gPBWSa9AT6tAQP2bGx",
  "key34": "4uF5psZctyt8WMfz7dhsh3nRekzpQGUeDKvWqtay8FdnDXo7BXthEECC7WM3jRW593Stp1tTUMuEM4JW2TWX84F2",
  "key35": "4DFxGoVgeWE6Lm4mqsUPMErpaMceu5wgsttnzHEHYdudwBUhd4pfEUbWHjfBFwY9y27EEkEfAw7FDfgqtgD1hMdE",
  "key36": "5EfMPXmbD3NMrYspXahUGkPC2t5yXvRFiGt92mqPq2UdFFffyv9HwbUKafF3cBqmHFgEhpzjtp64PMee17q3CNqe",
  "key37": "6NNrTcwrjWuQ9YJPuQ1Ven6i1UjuQvAphmobkb1xBJAgCsGnaGqAuS9vEN66iipqH1xJdCNEt5dsvWp1nHPFCvN",
  "key38": "3wqH2Jvxe3aWmkd9FfWD6gu35B14wh795mtaJuQCuRNifDn3ihgbNwRjwL6oJnwDb2HxG2UFnuuKqksd5AnxjHDw",
  "key39": "2qaC8EUtJwaAf4ZxAkvqwKeNwTNwVigQBSCLpAEYz6eZKaXGwv6FdEL4wXwpaa1DZG1t4Nmvizm6ob5XRGmJ2SNs",
  "key40": "4KydEXcn8Hr6q6DTDmJodZnFKynePU7o86SRAKen5tEBK7t6sYNb97KFbQ5V3mexigb566FcHmuqKzN4omXZvHWv",
  "key41": "4rA2cb2W1cAgMx33BK9kDuRVqvJptWRC2ZqBSg2wdjdsQu6AqXvTYypmq2Fg9ZQ2cTTD6n1fPeV6K9Kz2uCGkiPw"
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
