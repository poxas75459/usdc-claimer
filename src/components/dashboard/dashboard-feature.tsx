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
    "UbQNV1RpNHHwfn7pebgsowCw2dkBKNV3qT3Lo4BxYAuyx4Zovkb8JwpZaRsCUwGFFKnSn6gqHYefdvfdNvgGSsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmyEBpZLxvnr6MGCoQwspAVdHuRT36oSSwEw39PMoBu2LhTJ7yh29QkoVUQaYdBqKMiLP6sXPG8SxYYsVPUNi5A",
  "key1": "2avWi9v6CG9GKAd94RmHHRYuEbcu7BRXLns7GTGfzFSQUQPQpSbU4jK33CEkDGtjQTAUfZCrxSUZE9nFEyH57mL5",
  "key2": "42HxaL4DbY7hvnEV6padw15hnTLTBu4jqnt8tJgRTbVNcHHkwUDidg6xzQn3GemssdKH6yVnP3wWLss3N2g4cn7J",
  "key3": "jc177nHisCwkZv9ADZXjaFm2NFe8zZQsrJu3EVe1BWAjderTj2BDDyLKCYX5hrpu7QLWe5MBuwRr1iNCyvXAS2x",
  "key4": "4xbhxX31PaGJnuUiWWCZEVtWxR7YBAgARrFKMfZU8ozsHjVmZbSazpAjxNLLQQQWbePzKRjc1WwzdZc1kfHdVZ4t",
  "key5": "2oVYeiReNZAkRY4KhEnofnEsPPToCWCrAejPu51bVJPF2ixFAsaeryGRnujQ14oAuhW3CUHvsJFtGqjFNmNbkdha",
  "key6": "5roXFYEHwsDNdzdZDKuiGTW6kHndRJSCeUvKb5bC3nmxxMfZNqifMSabR1ydjkJoeffLH4H4x1nfZcGGQNvLVoHd",
  "key7": "43tBwyQWHQgf1wA3a5ctDu9zS3VbT1i5Z2ampbdgGDXpjeRUGdCcc8ebdaraNn95Jc5S5UX5h2Hz5uiiQUmZEYfJ",
  "key8": "4X7b1GwvjLJkJoesQm8fj1LxQMsV15XdBidEKBJvY6Vr1okdve7hqTahAR4mmQLjTezHHJ8sQk82zt5djRmTbcRq",
  "key9": "3p9PptDAY5QmYbsUYriVYFrtiN3gqwRk3hKPgK7wxndrt5vmD6fNBdNunecA3jdWZwPRAKxECSVozSzqHSY7B7m4",
  "key10": "2XpmMKP3mZxfFfR5NCWAy3HGmRQpDubCwtLyhHbM8sjkb1mAe6JP2qyyAb8iij3j7TrZTVQ9c4wDTtCJ3ahmuXQr",
  "key11": "4db8m3P7aWEexwUG2Rsyikvw5jKBx8RwtcE3JPyPDE2M1kna5gCJ2RkbrF1Wa1MzYWxtK36VtVPJ3uKcDELsnccM",
  "key12": "9ihwUB7wuGpyePkTckcKNeA6ko7Cdnouqc56rWPMS6kXQ7k4sCXhsmXBbwuesDksZntTjatQb4zYEeWJKKfGi9c",
  "key13": "DguukVh4Gmf5UEfDA23p7NtyAxUv2oxoqR56BDDm6JxNwEu19x3eZVrLYHX4Kt16iaVuRSREbPq8VvevXZgJvYb",
  "key14": "63RrMtD3bSNX5cBCnYoSYxcuRBQranRgNE33beyqqyzpRCtDGzun6Mkp5TnrrpFagDdThCgD3vKeENzpx6zyMw6J",
  "key15": "59ixvUQLJEjCQz3zXcnbaLFtJgFK8ckkhJkkzXhpciaR1KRaA8oL9uNbAYwgayXgPKRVFrUKWUx1VwLo48sg9Kig",
  "key16": "4WbW1XXdy8mmsdeTTjhTdgNLYw35BX7seuK6YZQQYy481EEMrP7UjCGYxcNU9oqBTbMmXNSrzkUcw96Xo6wJ8AAB",
  "key17": "5c7BmmdkVN5YB5r3iMg6GUBdryAzPF7fWpF2wXYkD325FKqTbHWU2uCC1kCwjuZ5oTZmijiGFGdANta9QXA6RJuU",
  "key18": "LxHdBvuVZLyUAaB2MMuBW2eve15tn1JjuAm1zmQch3PYEJsP16YPUUjNr1hZK566CimWAFPnempr58PbaceVoQ7",
  "key19": "56NXydc3Tv5uYGHfeK37sx86qpnmR3fjdQ99yfsH61iQEifFhMcsALSEhV4FprP7Eu7N9a6pXen1MCWc9DFc7bxd",
  "key20": "2YCiqrRvM4xwyUdevKtJkTyGyj3xJgAXHxaMmMvVWW1feZ48TEH6a2qmMagYgcaCvHjE6KYNsbkecQwhbmcEE1By",
  "key21": "x2Bru2CUbcCnLkgfTEsuGgyXejKezxavPD592JFwsrvDm4XTWLQQ2gjntNmr2VnPX56nkjuQwBrFmSA7xw6A7m1",
  "key22": "491yuKk1vVPkXgQFPXMuRxB2KxisHWYyj5aVxx1tZAXwdNENv1WerCwGgkgCaLzz6AAeMMSkc4mAvFmhWtThQpKo",
  "key23": "27q9hdETLKTadScy8RESLbwYyUCwVeBMeR9Cvk76ZuNtd8z7bkYgoEzYxHkxmwrGecs7RYQpvpjtowRZuoSqXkQj",
  "key24": "2JJgKntMBziqKw34sjZhahAE9qgzPH2XoyjFEUmZjibCXSCouMPsDsNxEtNwzgGtknigV6MVyqfZJCfLYLq98Gmm",
  "key25": "5ZSd4G59V8raukh37CYxUZ8fYkSkAZhHLvR6HKtuzp4WkcmH5oEscoYpDBrjsSEfkoZJP5DXVqN7x689ngsJXhJ6",
  "key26": "3nM2bzZXnUP6wTufs8MSEjeU55V1duazu5S5tFD4FU7QE5EXorTB6BZo7dxjn2nTXhGbcDDbuTKJRzK6VDFrX3be",
  "key27": "58ydp145jm3TJEGMbEbEf7n8Y5nuTFZkqm5as8PFiBG7G9Ce9P8czvrEyCJKT3cmjZggb5jgN3oJ9LT1fnzNKYL",
  "key28": "2qY32K4yk7BLSrFYHFbMtS8qz9zUJuauD6y5sjKPahp6RcrDU6nwZz9LcRY3QewaQg9zBH2mNjpSnWAv8vQ4SxUN",
  "key29": "4S1qXfVp9s9AeiMyTmY4zVQSFEd8Sh2ogTTo5phWygxy1mS2B9SKiQdGHpJicaYFX7B7JyypRDXnW7yQ6GgwvW5Y",
  "key30": "41R29YChMrXzXAYTNFg6r3orE8syjiLtfad7cp2knMfZSwvHoro2SLjHUFYsWyJfmjwERcFDWDBJ7jynmzSD4Aeo",
  "key31": "ecWFR5Hq9dBNxF1nvKmf5iiJyDd46RMaHjPquSiE1xPmKNjhvPBzg42LKiUkGSbdFpj4ursrNfbkoi2keYyA7gs",
  "key32": "3MTkki3DzopmgSDSfvW1Z6DR5PmCYScwUUmnpFJUPNXdHxCY8dVnPDWBy27wSVEU2ADypMMrbyTW2AY1nMBqBtz9",
  "key33": "4R2PuGYXu7wuEPAh7uytW8wShQFPZpnxjXWiVfcU3RJPbWFJhCjTikZCJcENPmRv3H4pds4YMhm12NqyNAEr3dVY",
  "key34": "3qTGeB1YXLhfWeV5CxirahxfXMC6xoRmBm3K1JrCw7B15GzGPcx1uCF8su5SiNZU91eWfYJCny6phZGtVW11RZUc",
  "key35": "28Eubzh5J2td983t4TRnMwZK8Dn9cGNTPW9Bxj3KHJBGJoeKK6x5ogt2MoTWE7vfU2tnuBCqVkCbcbzBPzzhySMe",
  "key36": "5SaudSxnjgaLRmfAwbyVJP99Hzg6eDtRQPaGqwHDbBvrGSs7Sx1eB63RjUU1HmNHHBMJaGoAT7RLMoTPp7hqqb81",
  "key37": "3VytEQDBERjLu4NpWEV57iF4BCy4wCi8UqGtrVdoD2xL8WUgAAaxQMdD6P1TKvvDc12w1qpL9AHgKSa8RynGVX68",
  "key38": "2tfGkuwAmC92DVP6TbugvW8jVek8P4Zxd8MKqDU96XRxmhXsbdbPErxYkpBgSQXrkkzzS9QUasM6arVi5gCMpgpk",
  "key39": "2RwQrwoFNAPC4tPhYKHLUMGVBd2b3v7v4c5EWpWyoTCVrPFSejUi1Kdq6FPpAW1Jbk4Vqmfm49BGnGwVdpAkDoXx"
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
