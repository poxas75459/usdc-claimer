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
    "44GcasnZ66eEwaaTR5wSpBaNWsH1BHqrJfNXZ2p5JAPEBnocjPD6A3wdnUHWsbgg4ZTSiZXJ8eZMLE89QeJJhZ2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5b7qYhg1WANiHhmZdnMA8NTVZsbqqR4e8SibFk4Tn9V2gvPb27uQ5vwsxkBAsDtVDeqsbV6gmkWZxkGBT3DBJu",
  "key1": "4gddXNER78nhvMt7aZwETFDWJdMCMz3KF6ZrWAsSiWNMd8kZvzXB6pAqB5JZWsZRyV2XeVo3trXCzJFowLskfD14",
  "key2": "5dsUdvJzfctP53zgLWbo2BnmVgkqMbeYGmuEWu4PxJu4gZPmCqrF4RcsCsiJXSZo3bXtkQWNWcUcTxUX5ST6WWy6",
  "key3": "23XrJttkeCjtKYB7gjmB26jhJ5pJEGyxp8dtFcgraUNrBqJtp19NLoenuYd8h9ft4bwzSYRCsscs4tBpdcWN9gt4",
  "key4": "3aHiSuzooD1kensxQQrrMriDePfGYr2YUiU6vCT5USQbAGworqsdrLr53mXhYBHd5KaZLJ9fcEE3SZiieP5ML1A4",
  "key5": "31henmSH7YS4He7wQdXQ2mAMXksmuoFybVFYzGMy2rXYZSqVn9Vb6nfnSKyoSbPNTfApnBQhWAgzEB1MZN1qbKzR",
  "key6": "WAUkTTCWjYvqw3u9QjfDVsfxNhmvuzPpTzLia3FoXhNct815EjiJM2NRrn8iZh8QRSj1NWMNMvV3dTBivapy5Xj",
  "key7": "2YLJRUQuTvRLuGgJDg3h98BNWSUPXXHTMPVnVakDZzUytN5NNKmhkqhm3Ry8EfLQ8Tq6sWdyTRLrSfhUfFrw4hiP",
  "key8": "4nTCUuiPNsxHNNDh89yKYEeqLLJvBg8rUSW4dnadcUj69qBm27aHPpjFyHSMQXir9ZxoiuUuU1TZ2tSX3RBkxidL",
  "key9": "2L19gtTTz67FeEKoHwLAz9bpMv7jUuGc7U3RMBBmGibcHJFfN53eXWHrgwaidRXvvV3VfxQs9bmeztG82m5sEVe",
  "key10": "5xaqUFQ3HRhL6sMMP2wrFD1BA1J4uZdGyhmmQ9jCxXb9xYxB7FQME6pdoYBmzx2wEVKyCvrkAtLG8niQHpFkD6iR",
  "key11": "2a1Q32NYokoUbAYWjU5CLZqg2aNytvvpNsnzJaQVXJpnMor3GvpVckXxZvX2QcAACNrhLGM8istuaU1f9SaFKaR4",
  "key12": "5LoWkciFDSvwpFGCnbV9oBJAm2GMaqMQneooD2YExatCGvbsRiJLbeqs7ersPKn6B4wreJBPQzWtx846fYptXFcj",
  "key13": "k65UKmE2ft5t8idCHehekzDDfU9Y7iSFokRMwZtJxWsRWiErFukHooHMc7EEvhPnGZc2mkzTXbtFrQoBKb7h4Vh",
  "key14": "4xUyrXxBYXmasxTJtXcu3Q5eLSWjNiGTjEPF8d3KBXbovQwsYpUovbRgSnXhkqJZvPBqFJkTpPHuAuMBLzMVuLT1",
  "key15": "54FBQX1WT7ajL6A1m74qrBcirnsmv8fcLYZFrXPdgZm1Sd15TNe6cZFTpW9ADmvGL9ymzxVE19GGwr65YEeqXMH1",
  "key16": "WqJhL14vv99FAr1rhSLmWsWh3mw4w25ZeeAFD6cPHDTK2nU1hiM3SfsVMe2X4ja6EweoUYD2KwtDwfKuyDuvYCR",
  "key17": "3GfEKGZAn4RVVz4EtKeRKHUMUE5SKs6HvUhgjWyHJ1Ns3tgrBCp9octLfff5vARkrv7gMe8ezFDxFtSiCVM4LS3i",
  "key18": "4SeY2oHuePh6S2VS54mXfNKcr8ZZEmijtcXyg8DHu8bwqxgnNGsVQtFKyUEYXyxT7rm92b2S9wqVXxPmDDtn9iLt",
  "key19": "4yvbnJYsL58YXqhsPWSgdvWV77DDvuXRa2xMokagEUgKL1DTJfqK89EK5fyyGZoQPBncvEswkuAYajSnM66LWTUr",
  "key20": "4rvadbQNVnycCz6FkGTc8aaB8xibZqNDpbXDN9BEFehyzyAbfghV9HjJ2PaPhZSs2F7KJhJYfVxcRrAEAP9Xkw6N",
  "key21": "2rCGX4Un2nmFZwYVYsfGktjaxkzegvwvx1f4Jyx1LNayq1ha2Shs474dL8UmaahqjJ6T94Q9z8kgczq8oyr2N64e",
  "key22": "8suGQRUhNhkMjdPgq4cZkcc8z31hhTJykSsfpbYaMcBk8k5TKuQCKuJKDBfPsb5wd7HhDoZGgxLtFT2NbNeGmwU",
  "key23": "3XZp3qXswg2oBjT8uTxkF3TAWyV2jfGe6gKTCnNgBPjjBD871kPwFw31nNXdH19C8oq2PzkitPLPHBRye7crpV1n",
  "key24": "3ZAsqMb88eTcvkaD8kWzqPJkGFS2Ha1WqXrLJeZL6kAGtBhyMfwCGk17XFdXVLDiy24Y5nukjP9hQ3DN8HyJFnRi",
  "key25": "4MJCEVdtf1Ch3jQumMaJKRSqneSSAoKeJmC1jKEo2H8dVWw79Lfon3acLAE5ag1wpvuVaoNfkqXs4vbzZTtFMjU3",
  "key26": "3XV9HRTrhxVoi1wLs3xufYLa1Y3R8i1D961RwmSRfkLboR3icjGJNmraMQAegZ7uDaMUJHDchy4W7ccL4oVaMXPR",
  "key27": "4AGPooLbDAn7JNHkEFaEvwydExkqUrCCnDojBPpSrrURE6gHfEWWwQdTg2wPsgyytxqz3G58MU1HwNgK9Y5yMQDC",
  "key28": "4M2xt14V6Fh8WqF4icomTtErnRUXBNgQ1rsW6FS7EKNNhF2ngF6GVLqdMiaveeiYTeCAkk3CzbECpo9VKeCqEwWt",
  "key29": "5KrQHnps1GzZiMhkwUrFXGXe5ChB4Ju1WcawHmFBS4KV6arZCaXL2jW1hDsKvFNqvVWRCFEJ3Mf2XwgY1stN7LHL",
  "key30": "3v4Y4QCeUm3SpPgAE2SjuGsMRyP2pN5JTpYEGJC2Fsjk2gMQwjt7G8rW5sG1EdjFvVH5yAxNQJLXxVbfLEPNZ9ux",
  "key31": "wU4yASkFBf6WXh4F5F9FHnc9hR9jDzqjdHx6pyowvgw5YsH2UbqQuTECdwsvEVL4bxQ1LuYrjj7zoRbv7oYRdLT",
  "key32": "9UwsPo1285QXi2BwUGXXpYiVhGLA3n8pCWZLp4AxNM6UuCv4ksyYvedeKBKYybyvrUsqd4q4q87ksgMrVrbtYwC",
  "key33": "27CLEC2aMos9csrvzmbA5uqj5yzBgfBefV8To9CHx8aTFouNhgQnXrqUP7J18Q1cjUAdcpmFyh8u7Hy3W9NTqyxV",
  "key34": "3cCYisY5jaLG3ksHkuffCN8PdK8p1jhaDanfmkUtUnb1StivmgK6mrbV6dDfxH4QcRVrtJpEMHEiMAAgzhXCn4kC",
  "key35": "51mBmpyxF9WPBuV16qAHS3vzGUEtoqm31LSiAsa7bczAVRUC2ipuMuo6Lef361riY6oy35P2sk8SA3XbR6Bf6US8",
  "key36": "64kbrbBy1Zsa1ZweiXJp5GdqJhSWzjK1So2N2aKf5HXaoxWFQJGrcPbcZH2xcCJJtjNqgXbGCFWuqpfbra472Sxr",
  "key37": "3uSdj7ekVwyKzby3Pts5gdMb6oiF4qjkV8Ni57BaGh6nVEUPKBSEDf4mxoZasePgYoPTzG78vsuTm5mgs1pqUGmH",
  "key38": "41Ppb6xDA1yWnDL8p5YVqipMyWu7BqChW1mKV4ckpgBGAnHAr93ScezQ99nAuFvWRgei5yxyUTmobMm57sT93qn5",
  "key39": "5VHEnKYM72R6JT9qkeWSCDXHmpLRHMofyBX8SnWppzHXRKHuKMaVMS2Z6gjh3hZXV9UanCznwxgsPBErDKcFbMXd",
  "key40": "2VWY1HmKqt3PcPyh6iVHTSYfF96ugkDXWKBGc6iAYmiNpUpUkF3xfm9GojfBXT7fXerFNJus2uA1s67uQmGFweTS",
  "key41": "33Zn9jnyM7ZiwBxRj9eBp5xo3yJv8Vrsq39BEEfYUYFGWqnLFk7QAaQ3QDBJtfasmBKqjEsK6qvew9S5C3Y6E6m6",
  "key42": "5HiqnP4nyL87gy2E76ArXHKcWzFfLJPCRE7wbKL8sj2EenQPLLYuqhatXyrWV4Jr1oqaYwdfZakc6oz9p63AbYS3",
  "key43": "4UnaZxZTYzms6ybJXasvVCXW7qLERPCxsQf2tidw5u4DMDSjZmnagEKuzbdKncDLs4cVuuxR4ug5V4k9zFe3h3dh",
  "key44": "4pFoBhbSEB3KkZtndNNWwV9MyXP9J2Dn9GjNwcgx8S6zLyTMDRQogcG5rhAJe9E52aAK2Qzzji1UojxJKqGPeett",
  "key45": "hpjvyKsknUArgvZoHp92JDkDcCeXJMgDvrbBHeip5XEDuQ4mGUeaJfbq5kx1NN1gvShPkRZVzzuhD6r5X7oHnCC",
  "key46": "4fiaBoYhykzeJ28fwvHrzPv57diP835tfEkXXaDxTxQGckg68U9UTnghMb9MSDepciax3Jr2YbtnB5H73XKiG8LP",
  "key47": "3hSDyVyjYobJDVXWUB5dfHWvK61vRQ58L4YqMHb3tWQ2PCqZsJBE2aLLXSNNbBATjHJG1TWyjQqFk25zTfw3yZgP",
  "key48": "267yREcqA5XdQDYhQG7MbUvhrs5kEsjSG8knmQq5F5cib4PncySEpwNNYfX2EtS36PnCHkQds4dhA1QuQMazXxG4"
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
