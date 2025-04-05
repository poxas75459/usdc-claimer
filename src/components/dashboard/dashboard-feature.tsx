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
    "2B2EMcx2KuSRoxTxXUUorjmBtXowtCM1UVaxijR28mVuZLGfKgeYFbGMo8vZy5HZRWpeDfLxJ7taujcvKtNzrCuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v8ThbRP5RZj5zoi3ig4WyPW6pKhqn4LNK9kZNEPe4noUBw3NwRRKdXABLXBjjKnQbRa9atxkgcYEejcCcqxEsSh",
  "key1": "5Ac8pQnuG3wsqnRkVdSt2ENuvyQC7WVM3ico6CjN78YLivTbG5mZdPAkJN4SZBkCdKRMCN48u8kGh1yeR7pmjibS",
  "key2": "47ukj52uqagqnpWTL1cHtEpuZeDAanAZXKsdS8vthio93vft42GoYx1epicEwKY7ZZBoicNfw7Jez6LZczhCmkke",
  "key3": "61pfwkZk3XUnTnqAyanuTKjyBvVNvj3841beseq31YAMAccrc645NTiG3PGiyxnUun5i2GDGRocSKwtz5vrfTGGZ",
  "key4": "317mJwXQJhdxG8FhLHzuFb5iKurZimYEeYFg2G5UPL7HPFmHvC3nydUCs1349RPmB8jV5YTGToFrwYg8hGTGFQtt",
  "key5": "5JTtoLixdwpEQ8Py8wNLLW6gEqjZ4ENsRmDCMuE5tPu7tDnwEMNtnE6Zu7t95VhKqX9N51thmsxyeRGyMTnXfXQR",
  "key6": "3BqLHNp4jXsHXrhEcUr2TdibMwGkMk6efCg1BNdAjxtDcT54BV2eKff4BTftCT5NMzgNpyQhUxkd1YK7eCZh9zc2",
  "key7": "5YFz7kZuPMzUcc5Mawugteq94ck8YHHo2DGoQmwQrXBMrmRcdP5LF7T4GZwSH43774HkugLiyqTbxuBcDuPi9rKT",
  "key8": "4JNVcp7MZHiUm169zrhJkws4QkJNnUPxFbp1Kq141ETsCahHsHBHC1jAsgxVogfNmUKq2CZtf9WXwBRTRRLgu8Fd",
  "key9": "Ljv5WSeUGghSGgpn31TYoU4YpPV1m5q3MD7bHbq6d8GWjvwbRcF9v3Zh2iAfrRmTCLaYfrxZTPwH2KyABpM7v14",
  "key10": "3kmLjTg8FUS1JsgPKL8BcpD86LB2jacdL2ks1xs17dtv42N7Zbhjhw45yfzZFmeRa6VTFqygBmY4x19TbZKoXLK9",
  "key11": "5T5gWVH2whu9eNHrviNV8zpEtL52Gm4faHRag8jS3Mj8c44Kqkh4QHLus7DYgrbVjsyKvr5KreYLrL15R8AyfQUm",
  "key12": "G9HkVquZDsp376LfYHz3nv16fkFsjZWmFTpjFDYz1pJjv1fczvwygS87JGtko96SiGBc2bxUe7K627HgrXJZkxF",
  "key13": "64iQdobqpfFrnysXn82xWPYNdxz5zi1qP5YG8rTFicgXXBNq5zpBPybvMdEFYQBZfVRnuaXtgE2RVNVbnU8TgxU4",
  "key14": "2jj9S5CzpTDypgNPaFXv6pDFaiwCM8w7FneQJaxS2A4WRziXuWWmtfKRYLzsymRrWhURcCejdUadHzx5Hg5z3RZj",
  "key15": "5udjshPz6qm48fUuVEueHjT93epa4G647PFx9kuWUBh66xBkH6YcRaEBcBVpwDiVoRcSRcA6Zy1iz5Vn5F8smepG",
  "key16": "3YR9oEcJNCs6fchwkcPKhfuChkyfCM9waBNvuW8iEj48HvSPtwCD81aagu5d5ZvY5NJBfb2XaXRr565sCji6V8jE",
  "key17": "3i96LaAAwCPtY4KaXczsJXCngb5t4be9SPsn1NrULr8Ab2WB7Xe2fcDce7G7u2oezoTVBsT3Bv7b9qyJJ5X9jsHb",
  "key18": "341ypfBnhS92sRwZb8L8rJxqGGbUD7h5R2B3Git8xVPZaTPKcqMAXqE6oXiTN1McKiWQnh2R2cfF6fAzNJFw5uJF",
  "key19": "3hnMXnApfXU7zmJzNTApTJTPgTFcmbnBxu2CiD2yTTSQGunD3jMRoYFzv6MjdE7CTFoEjDVA4FfA8PgMfrcqL8Fz",
  "key20": "4rN789dGwvX61wP1gSVSBphmxaau7ZFFwnb79KNcULRMZ8yG63mjNwa36Cwa6mAmkSV5cot2Lx5KV9UeCp9YAqkn",
  "key21": "4PWy9f4sj4G641mDanQNNsTiTN9qKXcmt4un8vSswQtBxydzvjwLTFmii5fnVF3G5Gb4hkHyuNxXYcuruJyAWUjz",
  "key22": "5EKcWS3A9Ys3XRd94grJESCthUgT7L1dAi9qqoquJSnvEARvXBKkqBUCzjkDsSPCdc53wnEJYvq3HtY34n17suyM",
  "key23": "21nsGjnJhqyME5tcCQbZEMxh5CASP2SWc7sLn1mLuWxDB5sjauADAJWfjW9yujZUYi93mubTqAakKsw8SJWkeke4",
  "key24": "3F44HATwZe22JvNeX9xcf4BGpHTNg5Zs9qNEwEYTWXPNTEATPaakJFDLnNZ2LuTawHP23APojbZDshQBBDUk1AWs",
  "key25": "3qop4JPQTefhED4HfjgvSVAoUB99EjkuYive4xs7UTe5ozaP1rM9ewLjWDpBxiMZQopQf9yGJGrB7AdWjrfBQioK",
  "key26": "y1VfakQHhNJ2Qy5Wn4WRbgBYb1kKwJZ2JLMjY51DwVGGFXEf6Rwq5MCXumHsQJ1o1wbLkgD3N3hjB8PaQM2X5i5",
  "key27": "dSSbe48DeYuu7Qk28z42J7WTcfjnfYAMMU55dMDXhM1ghsjHUjm8Jmo86qxs5Bg6vKQjwRXB28ansTy4dJu7ejK",
  "key28": "5z5PBNFvFeSNHFahQNTCi9DKwUJfxdF5szi4gpPDoaEZqLpgqq57jK8SiTnGvWryvUG7q6VHE2MWoDsDA3PqW9ZM",
  "key29": "GgcnkBCqoEdV1sBopCSAwM2AYsRFeo4ktqxVTJ9wJSfvb9sCeVErkZxBooEdCE9DWsaD96wMiyENaoYALTZGTFw",
  "key30": "3a5HsGjhp8Zyn2nyTbS5uR7gwG27NgStyVkFtj3E8sjxkLrZ9XmLMv2C4gwb8C5BWsYZnd6MM7bfVwCLRRc1FRQY",
  "key31": "4HneaWbBaPmz7zCnY9xtyWDbQSsL7KuiaPF7w66DFm5sN51bngoEmzNCgvsWdzf1g5rg5dwJrYBUX722Sm3Gqx3r",
  "key32": "2LACLtopTPLVmGj6CSatDSAG2H159zSEJG5ksoAvYjva1PjFcoZiUQhh1EQZ4unvtgwkMjbjfacUJsu7xaD4g3kb",
  "key33": "2oDwtXjttcirAZUsRYR2jvuvYZE1M8AK9jcKe4VwYq8SsL3wFy6Nr5xjWSWLFVbmZ51zbdFCMTfvnvk1zqWYqEee",
  "key34": "8s9fuEfQdMUD3GdP24NW1zkTzsLatwshfA73yjW77joymGoMCSSAhsv9CtAy5mWQ6D7rTvgwogmS7JnDT57JoGA",
  "key35": "594pfDaMFMhWHQSUZ48uZP8DT8izmgPKnxuUNemWAPHGvFVUTLo6QR6x1XKCibxJG2ozc8WBsSfLS6GaNexGT6TC",
  "key36": "5WW35XGNiA2S383A6if9VozAv5UuhENc2eH8qVNb7Qn5VgdJkLdxDx12sAuLUbdMrGVZHY49szUzWRXgCTjEYKNH",
  "key37": "2DfrjMzo6TqkwkS7LJwqbKjQWb5tJMeQRsHTXYQSY7triiY6cCZvt4QHdkbBL4Uh8cFpvHrXCWi3hwfRvpL2oudP"
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
