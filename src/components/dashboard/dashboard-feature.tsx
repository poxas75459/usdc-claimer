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
    "443mGMdW2Xk5dm2CgonuGnAGY2zFVfLzRXNw9mK6sp5TWUDJu5RtGjbuYYsVtkv3JET6aZof9dbnowWYpD3uQSxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Abu8S3LV6eoFVoDcwxLBjZ1yceBHR34ZbqqvAi8j5Em51xQX9wdhbHxBsDzUrciyj9wEnriEJHwGDuMUJ6aTvT2",
  "key1": "3N7Hkvo6eYY4QKnsvcet6Wtn1SbfxMWLicuCSbHnBhyPmXzWrKrzrEsKMZ1RawPFUQ2nK6KepLLSRKv7LQtQTuyh",
  "key2": "kVrztfr3ReFZEq4ZFiHpZ1XLdVDzWbDhj2AMsYSdMiywhTQ6SkJJj1kQyXvkmoEWgf9KVLBXxoGAtAraujbgkj4",
  "key3": "4VGNEmNnggXSsDf49mJPLBNmgs3FRpm1PN8qHKC2XLyUytoE5wZ1xJunPvcw2CRpw2GhC6kuGnQAdEjWxCPNTJPF",
  "key4": "2daDAtu5xPXrYbGhiwQADod3hpgfcksuotDqLcS39NdgogFaHMd7fFi5pExnFCufBRWo8kefTD32LeyK2C7Fu8Go",
  "key5": "dxqZepLPrQfnZnBLpPG3hVds51pasi55BUjUERwzVJo6NJSh1Hag8WcUaxdWuf74nfsM4cEaLTTpkrvWPPE3ooR",
  "key6": "3sMtA56zR1M9N6kwoSUyNoT1RQ3DVGVUmHKwdo6cUuCMMPVe9nipPoKaG2dQeCZbLooSFcCmNEYQLqjBRrqG8Vqe",
  "key7": "3hpCC8NbV959xwDxBjwD3Gc1Gmd5hrKYiS2GmurzVikRnsjBmd9UbbD7vPKnn51Gu5M5LnSPkc2YTMJDmxKMVRN6",
  "key8": "5H235ESBUD4tCHnRf6FZcXHfRpr42rLtrsF1A5KP1SwZWC4DLCxvzPUqbeWmuM4JuSF9jwqkxHUFixNmz8u7Cdk7",
  "key9": "3Y51Ui5L1SEkRrVvAy4CqrghFRUcAvgejgMfUhsuTAkotRcJ6K2XoqzV8pms8HHgSxB5pbaVsZoYhJy4Fsxs8t9s",
  "key10": "4PAmX2oU1kr1bWVaJdX3TsJdANJnepSoabu5Unoa5Tt3qt1ErGNcCszBMb7Sya2NWGzCGyw5V1QfEwuj4skFYmAf",
  "key11": "ZfCyvQ5vPdGB1GEjD6JYiJRspp3ps1nd6be3pxmWv4CDs4pjKYThCfLwB53Fx6rXhjqnMVVtmC4mTwa6iQN7NVq",
  "key12": "3F32GTmzAx7qTCY6HZGLE9kFpKT6c6aaqpLCaVHhBvbMaTVWVQrMX9rpLfkCZTUGKbot3vVPa7z8DwRNAkxm7Lcc",
  "key13": "3kRwhk7KnFNZfnvBMmfoaJaGjVeWTTp3eaEfrcsn2ySrUjKf5LM7CgqWuQ4zcmPdCUmvmGoWWgEPvQc17oXRhLLw",
  "key14": "2mb1faEeYDimpwpNWdVXa4dxT7E2tTHYX93Wuxye4a5QzK4EGj89AHCqVXfqTrusFtJW8JuLkMgTNkbR4mZoVAWX",
  "key15": "5gK5YzaAcX7WN5F33RQE8p1h5VspyUKk3MV4fQz819qDrUKoJ58TLVysNnL7RGvi2Ghkr2yLHm2tqNWZD1vkJGDQ",
  "key16": "4x8XMudi9uqtA8VXAQzwZSqRvMunJa9MZDgnkpwxCid5VehfE7nFbAtAmLnQ5SpFiv3GKNSbAydA74H8zqou3awx",
  "key17": "3rqquut8jSb8NfevZPjs1zbhaZeJqfCZXuZTtwtEU92r3eX1DMnMw328t2reLZZYjeNGzGGHhizobTGh482ZXVPj",
  "key18": "5uzxqPkG3dhMmefFH75ZHFacCteG8XfN19SkCnq49TgHMQo8FRyW3dAdUGtfKDsE8tqoQ8o1SJpAvdxZHmmSQpYB",
  "key19": "4mwGs8cm18npYW4KvmKMKKxMkX45xMUrR8rWkGZGyQ5fmtsUZpM6KKWkYqTK9AgXa55i3jMhHwN3JVr9Jvq9gJJx",
  "key20": "51YUM8yiXRvhF79SkzWbf5KRJCCBCZHJXZZEZBvxxYfLHNM7ChimKJaAmTQL78WVGWbaPGu5YgS1hxCy184JpRoj",
  "key21": "2NX4mYKdMsGUoAGXuYAceAFQEmXuQqRgaTSGbfbjEcU8FjwHKoD4DvvfoNbDRR3VYH9LTh4eYK5QCr8zxemPdkTQ",
  "key22": "5eGARE3QQXacokkbiGLkwsTzqgLX4XiKyzd8FJktNMZg6Uu742KQbpxrYkRZXKygUSWKN4KwjqcUeSBe4FnhAudb",
  "key23": "3TtPdr37rh6xVVKow5VsEYZVPVVzuwCAygz9SMqFUwX527deLXfXCanwv5xTHGZRN3kJk47Rx7Rx5ejbj1x4WWW5",
  "key24": "2SuwSxGyvgjXuFGwTxtfRMMmsB6SKEbVLwyyh8fEzg44MbiEdusAP3Dvw49ytgQDYAmQ6zZk2XJuXjMd9tLhjGLq",
  "key25": "3t4qtHTX3cQetGhKzx25BVNQtuYmHq7h92Rb1JxHukwDaYwgM44Sb2tQxRzbTFDj5hwatcKWaQ6SD9vQnwRLZMLG",
  "key26": "41TGFrSUMsAmfsdM3qNc6MyDgVPKALDsAYbMQYABBJFSEwtpL4o375WcMfdSow8ooiNMwvmFtwPw3enQ4ZJDtn2M",
  "key27": "2Jhf1vM2XpomCkvmecrfxj2SDhBGD7uBDuERET1B7aVSZmXooi1kDXJSths7fXy5Zw8tzdPv59e1DjDJYmcAh9pc",
  "key28": "63spB5rR4Mi7QGXAuEJzxWCW5oEfjucAkWjdJLSnFtTU6UBeq3Lt2CKo2gEQ6b7p8BGSJ3ap6eT7s5qitBXii3qw",
  "key29": "4o19yrif2DqXxmVV66XWPz6KbaJvajWLvhDzpoBYa8m82rse88d5HTesPZG1ZioFDH5FXcHL1GP25hZX3oPwttcy",
  "key30": "YAUhEUvRtoX72QxcTsqQDuxcbtYEAaBTJgpEdgwoodx5Vv6zgun7NNCVbdmw8dih7jjowuMqzgjC8nP7apk8tvr",
  "key31": "3voevKEEFWHiNVxSyBfXMdMoTh2LMcsYfTfVDG2i3aH76VqS2U58oFh9jSX2pQCfy5eYK4wfmrxUsFHeZUtnwDG5",
  "key32": "2cRN26j4bxqm9FikkRa9xntw8kst2wYDfd6dYyS5dQ1TC13pDX3BjhXD3Txb3aki7ken2D7DmFcr3uidfd9Q1cjt",
  "key33": "3aDjpAsHZMdPkwNqqig5CnKUzQzpUDrm5a5cPdNQ6XmGLtdU8p956dmbsBN3cTfkxyibUDxds5bkwc1HaXTbZyUh",
  "key34": "3YwRKhvcq8FtjALyKK9ovhit6PhTrqfCyntKrwAmHPK914FvdMb8kXzhkhPgZoh2iej3PxxXfGY1TQQGN2m5rVqS",
  "key35": "2iTSq5d6rzVs2uPGbZy4boh8oX3nyqadpug5U8FSDtLqY99tizPuwjauxUz69jm8nvGLmxtaTgJZtUopiRUNSXga",
  "key36": "Z2dURQfYH1brS9W4DN2tG2TdCak9cgPGVoYcmMdKsQUG5PdEtcr8DwNfcLkKGmunLuZrhGRZ2abAcz5cURfXg7v",
  "key37": "2XrMz6cGnPsLFE2RLbrtVxM3LSJc4ChXD5h8TYCwr3FbvQijDa8XoMHBBkvvHo6HezPtZX5y9E7g8rahXmGoE8JZ",
  "key38": "3psBbj5rfj2asWFovirk5VggMh4zQSRCwDE8EsR3v39Ha6mRtd4XpXs7Q9s77WWMnFT2eAJJm1m3aGKqj9zrZWQV",
  "key39": "5wDfxezcmeY5sGP6ycENCRsjhXrse14Q2Gr2euPFKTHZJKbVfszcHn5uYfwSnYX4sbDCFNFHfZrdpkn2mbYfF5bC",
  "key40": "3w6SKvy4XnF5AzK3sYwLcMKQhKVtUU9qPh714vjabeDf1gbZjufnvXs6Y59s7c3HAeBgVS8nTtytdG9kAod8AjJJ",
  "key41": "75nLoBzx7AAuqZVVUXzeiGD1hDBc3xWcjKwHNXQQPPqr4fsTAjS1UT58TrfKzoVpXGpSABtS84JsBH5bWhcSJ49"
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
