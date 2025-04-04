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
    "2rAApLb2qeUGpUUEYwmboHFBN4JiqhzUHiLCZMzpp1dEEEy73h8odzAHu6W3AWyRWwDuQLitmeNm61hXBnJE4Lbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sThkY6CDTVL3a6zUcreZ4qHDgibida9LTpw1FfTUPYgdFqPrsPDsTSQmqwhb9JaScyspoA1HnioMosfWh9QwiU",
  "key1": "Ku5iVZiQaDhELwDpK9geqVhNUMvgQSAybofXcdtfUiQ2yx8ptgwsky32dyyEG4Zhmv8Z3bYfZBxLPL3mqVvUmTT",
  "key2": "415Ea7R2LLP1UBDHiEeFibr8ZEvizhDjL8RrqdxCyVeHH2bRnri3ZY1UkWvzxWRHpysrS7XSfgHvMiuNH6dcxRJ",
  "key3": "4Ek44MMN6Bn73QETATWfWDn3EcV6t4hSoKSYN6hxHk9ySgs8qdcbmby1PC79BPAPmBQq9e85uKvRyugBaRR1E9jX",
  "key4": "3PTrt4NPkvAxNTJSVpd7xY8CcFzyypmDHRu95yz6BqRTmWyDCF6qRhDALRkvqUHWPcsXYhyytiwgqD4soV7jH8C2",
  "key5": "2bq8WNd3ufN5PYSEY8hZJ44Qpt13hyoNyqZiXttkS2V88yLXX9p5UrBxq9AVECo4XDW3fAG3dgtv7mHE2pgkDKXz",
  "key6": "5YxvW4WFSiwDv3Rbvyw7Qi7vCT5RpjRrnVH8Dvby4NMsoFGTMiKWdrPUZ2oY8ytwh3vdPUgSG4Gs6n3YoRox3Tgv",
  "key7": "4e2WRm7jsc6WSnm25n7qpLuUoqUAfaBB2faDATvZpyENBEPj38Rcjo4qsQ4DxZJaXnrDFyqcZuFAsjpo4hHzQhjQ",
  "key8": "ZLBzgPPzHPAedyRtYy6xJSEjRTQNvMYvdCoF9kZotnAAuZTyEypz87PpuzBEu5MfDjHptwCTu2SvhhXda6W2QLM",
  "key9": "4p9hiEBmV2zDzte2KRP2qsNPsVfKnF3eaLXYLg94o8mLRWHu1tGgvV5WxpL75fuwWhM391AZqebc3o4xDvheRxXJ",
  "key10": "XCCSayLb4eQ2jDqWYnGFLkYeG7V78CjiD4yKP53Hr7PgCQjqcJELKbbRP7rfh8zsLjBsjEyin5a6iytrxcwB1YK",
  "key11": "4VjNQcEaqPc2HeAn9Ge4mg7CaKWXkE2CZuKCvXcRb84AG4q85xy9q79xU6bZZii2xTCTAMSprQhhxMBLyiArxkRu",
  "key12": "3Jg3AVzpAtzSfwd5tpNKMyhKihcHDYE3WqSeNKNsb4aHTyx5s8QkQ1uiaRzGDoZjhe5tjfoMTazpj3Pd9W3ow72w",
  "key13": "4Zr3t4ALCPn5VAGdVQ4hMRAFq9xvwuJAjazdZrVYykFXWTqV7Cwftv2uF92XgZFpc3xt7ayEEzV2DhbiojGzeDVY",
  "key14": "LX7mq46tyzKHvcHVLnwUHsNTYaCjB5tMjF3cWuSpdP11Nz9BNwVAUUtLtG4JbJU7v8qCKyM3ivTcBufK8hq7sYJ",
  "key15": "2nFU9h2VrEz5ndmtpseePYQALUk3PbdD2XJdbPa3HbCgUZhwwRicK5hzUGYLh8u8VeDzkMiahF4bsbmi9to2KByC",
  "key16": "3dzyf8HqmV1nYvqxiWpG2MiZwAAEQfay5u6aC4Rs7UqckVcQcdXynv8s7BHdnN7pDR8jjE2mZecyNWnSyhdu36hG",
  "key17": "ZRanQXP1B5fCfCGiWCBN598qwFNjZvoFeKTTnFJEBjf4uuhZJ1dPfkp8vKLnn1PP1ZDwmMoQXbATDmu5gAWjs43",
  "key18": "4hBQqwzs78kxBuByiWetRYffV8D47mjX5S9aJzhLt3gimNTbwtbvycod9nnbrmu7r2BToFwEFnNzBwnfmZzb1g96",
  "key19": "Ar7xtadvNd5xrhfP9Cy4HQQSdpxxadRbaeZr3Vig2TwnnVKQX5is8WYWVjzmrnmLRsZqt8bRGUoK2jxMrLpXZNj",
  "key20": "9pJYjF7v6Rwpz9zuGaaa4v7f7W3C99HCPcMtpZ41truNYHRKdkC8JtiT3YtvVWLrKaVFgKPfKyHkMUYCUEiwi1K",
  "key21": "5Hh5qEZkjfDUvexsMe4qsucfrRBCnaPPX4JX7WKvPQ1ov9em4STJ4wzqeyCq4QUgm2BLpPEgyU14wWSURCzc4BP3",
  "key22": "y17Wph9SBgVxw69viVjsGfan8jKaWTVU88QYLkRcHVvnm6XAf3PA8meywi5pAR9UX5on5aeGsunapcTXQvN7D3o",
  "key23": "3eqXnnpyDr4pCVkv6rYKYDMun28YXeQSrf1KNK97c8Jd8a6yRFrFzNrVv9WANHRVtZdxLQrAJn1SbgqEpx4Bp16Y",
  "key24": "48uvcvMw8E8SCyvHWfK4UrTPSaA5cY3REGBCoL9tSjTTi7yCzFPWUH9D5EwsYusUs8Vo1s11zSTAqr923yAyFHeh",
  "key25": "PVfjFz4DeniSNXEdm6YEKtH6eZB3NRy1jZGhGKyYXEgee2QTn35T6JS5eBaCXdtuNDypyDUnuH7MipumA3nggxu",
  "key26": "3ZANACJeWSHG73aaAbPhU7tHGLbqBbYt52zZAXD4d7FT5KQH78FzYChxi5xJm9bHNBMKPJHzdoMkJzwK5R3U2W64",
  "key27": "7KaMEKQSeePjqkuHiTZwU8eimRqgcNdysGj4STiKfqDkU6x8rdgnbeG3PREZ3ZXV3v7trPvpPFxQCUacGjgGTcG",
  "key28": "4AovTrhjDZAHx4Pj3gKBaQywfP4C95WVo1WiPgDZckp71YW2vVnQA9au5Y79eXCX5YoqM5r2cra9fFP9wreEH2y7",
  "key29": "4TBoFZnd6Xvm7icga35Ygj5ysqDevb6kmzD57XG9sEuDyxot7cxjFvcUynqgFLWTrpWXPLYmNcR9mUDuikspNuSG",
  "key30": "3dNDm3BgWdcdFZtnDLCaapH8jSKFG35z1La35iLV9ULjXrRoZAFXzUMJnAsWU9iT6duiMZjVPknjNingxwsPyYns",
  "key31": "5KwThxFMKWba41AFrMZLdKfaQJ9nrSeGMyx2E5zyGjexN8nXXU8LTgL13Pg932S4Tch9zjkJpRqng3ukNLAyjpjc",
  "key32": "4VEZVZWKMd1spRZCRzUGQzi5gjejBDFkDBLRxQN7EpVgbVrpSQhFj6BdPGbGFCpJ31V7313jQQeXg49wNNxQoiMX",
  "key33": "5tvVNvyknhhXnUjomfy2dyhRZTy4154hwZprXUrMT8aHi2vmqJ7UKmLCFk4Pia3azhyGqXYjhfxJcuAtmF1nuDkN",
  "key34": "49kFM25AyqkPovfvcdmHocrcEJToqBAXsABMUQuFyDfX9ss4bJ2QpgmMbefDdSvGoz5p6oJ5tpxGgV3WvJcWpiLe",
  "key35": "vNuyvRFbgcAFJQEAFTGSrVDfeLt9ZjUZP69v5WH84yjgPef2brC2TiW2EnJ5wirvwpk2qAh2Jk7HXigzacP912z",
  "key36": "4KYAy8Ac3AdqgbihudnK8zNomGjfuERxiy7nsxFi2fGziQomBQc5DqbaxUXksLQLum4NTZMXxPXQNfjCwU5EG5h9",
  "key37": "rZmRKDfgfd7NyfZ5sQoSa9ST6r7a48roRy9DykjqhkTTY8dqVW3Av2LM5aSZp7AZLnQZUrtFjkrQHHwyKQMC17m",
  "key38": "d34Y228XFq9nnLAXnS1JmKjjTrPyX44Pj1vCi2zijJ9yyjtWpFDyJh7eRK27XBGfxTWLjx9bjE1BJFomLG8PyDz",
  "key39": "5JdttxYHht3FENc11uU8cH8gGPvgiSDBh9PZKXRfggqmbgqnhAJKxjQX6ZMTH1moWAPSLhTLTdiF8FExeQGaMxha",
  "key40": "ycMGVzm345QWFpVRUZrXQCAvzdbamEexPrSX8zfm9xKSox46jeTbZNMGLxiomdeRvnWBaFanmtYXUZgMSVisJrm"
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
