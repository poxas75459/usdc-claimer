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
    "6DmYNYP8Dg38dLcrRxrwVpnhM4J9Es1dh8EqUwLsCtDCsZEyRCmfE6kLCDQhKyTjTANNqv4xL3Q7NyVXDZcgZfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4EvpTGT814sayxtY3qE2K6dVxACkGirqrdBYcBEeGCBK5cYbSKjMxeYwN5K7zZ3cdba8SzaKz6CoEXBFu6Bj6f",
  "key1": "4Td7H6aB1789SF3mRMqq6tmLVuVi1LC6KYRB63wSPnj8Sokb6e19kc7DtxqXLQQAEU3qMLarrhJtUS9chEQy49gm",
  "key2": "46JY1vaZGihiAykSUcTaHQPd1QGJRsBgT6JzA7wLfG2nCXkLXiiY5pzbUU4yLsXxXoJqvxw3F5cVXCr1mMbjZXhi",
  "key3": "2wzCxFc3MkbUoSmZfxsBU5TiPE4qJDj1KUmiA7iJhGsTyaoHC4yLK7K8iXMvv21tbyn5pDSp1R9PCwRdv3QL2wms",
  "key4": "3uW2QcgrPmssMhHmfNsYMBpEwoaXdAKfDZakNGSZvNYVjH3jhoA178evAdeuPPgeUzvmUuvy4YsfwMKN2K46Biqi",
  "key5": "4ch3TZ9W9xT8hXkCa6hmcJapkNSRZNpNCVdaWTrULf65jdsR7MHpfBZKDd5GurtQRDFKiioV7sisWHiCusFatSww",
  "key6": "4w22fa7gAgniKbtyitySn8BePjSviSd4e2f2NN1dTL3UzeCmK5hjwC3Txab5RS9DxsRvth2nRRq695ypy27sHWJ4",
  "key7": "4P9YWG8ALAT1wWwyit6tEAVyFZbF39biNV8Nipbgkp79n2XS49R7LeCgGsCkkuejRziqMqqSGp12JFiLvcPpr154",
  "key8": "CLwkRNjXVhqvQX1YP6nhfx8scujGsYdBV7MTZ9GRyBN7gLpbuyGVQQypvbiQCcEC9kMoJnyyrEqyUbD6gAPxFoe",
  "key9": "5cCZnRrjKjJJW1hkNgYyhw2pEMq8Rq2BGn9G5TGa4wovMc8Ur99qBpdzsqziUgzxKdkhyCU37M8uhAhifzZdFbyA",
  "key10": "WdmHFcruWkCC3NxABNvzssCyqi3zV2SNJ3rJ9tCJtfubCyonSMrY7PCkTT8zPnUYY9QAXiVPEaMM8YEgJ7Hzg4m",
  "key11": "49CK2NBuKv7VYA4K6mKthodQn9pZVfmvxk1YLbHGyfzN3GotgPLY4gsZuWLU2cwyqFs2ZywFgLyTGCyWV5U1sdTz",
  "key12": "49rcFGPhPaHBHqTZhur5YRrBV1tFhxa5hqtGKHtjZd45b26oH5LKNFGA8pCWt9mqYdbNAKf3M9DaGeyUDbdcKy8Y",
  "key13": "317obUws5PGAypcv5ZeNvNW41Y8HmXTXBEWB9BezHGSVYWfTuEuT5zjCefgHbPVQj66KZ3fSWGf7Bb2fVxbfqtSv",
  "key14": "2hQJEbsQoxpJNhzSvG63LH5EiQqAr2PxNxDMc3Zs8dvnSCuVKNCjP8t4AjjnEBUQxECYXdcTupVdm2jpaVQwtQ5S",
  "key15": "3sz5dUY2zYogLNV8KtGe1F9tncXcjFq571WGtvqYNfaq6KoHRNCdPgTaocsDhTfY6JCxhHPWvaqr5LKhuw2gKshJ",
  "key16": "3Hingg8dAqBbFB3B7m5UEbZBchQyrqCp9afWFTFTMc8Zse9wuG7rT4khPFKxKkgyZQbUxEgqU4fcp1N69ANKcNEA",
  "key17": "2KKuiPxefhh3ub1X9vGmZZf5heAGCjdxd5nYEpBeDEmNUjCcvFckLNJT9TkATVspLBsAwWA23YWS4s9G29JZAbMs",
  "key18": "2y54vFKKkLYRRNkXX8WbxBVK64zNVHvfTLGZQeD5KznVaCxJMQ93w4neYPwAj77wEzQnmbGnTUSSHDYyQM3Tmhqp",
  "key19": "3rpzkh9g4mC94KfzRaP511K329RohEKkVqh7CXbcfFkJ5jBj55Y2eBiaKPiJqyw6Uq4aKb7EcUhVQscP73QERgZC",
  "key20": "5XDSX71HbNzmZbkP4yBZfzCdGFjoqrpUth5GrT9SQNyVDTd47fCHHvJSn4BnM4WEqKqSxXmvsDAoMm91aZxA1X6R",
  "key21": "yVzrSHGwXiM38enVa8pjbxhw9NXrufAQWtg9CCxiH4v1vsgvCQjaxnmBxBpP6DxWFBrZgr5w9P6Y6xqLZVDjb8b",
  "key22": "4kCki7yEPdYE8TmR7Kv9XnnHbSfkLnLm2S3G58zjjFWiePSEou7Jtggt6Yw7G76qqkYsEhFRuKN9XPqSGH2zWbv6",
  "key23": "cA53tGRNbUPrrPENhq4gCXP9ckQ9BAgaqMqwa9v3UTeP1fQSWT7ivFdARNDwsF6vkjJuUYvmsJE4PoEF8euM5jb",
  "key24": "4vtHqUAfBu8ZHtyVSDr7cL4ihPmjtFaHUr3kERL3HygstNfC9uLurFrsHR4HPvqJxrV5HCPDBCx1aKQa3u6vzkiG",
  "key25": "3aZhkKpYvgd88Ypgt3VYF7tVkG6ejfkiskXHcKyuM31ekjaweG2L8jU9aKCG18qUVxQEoddMEMnj4JPk66RgViEf",
  "key26": "3vN6GRFM5enmAkTXcHfVNgvaGJNsjufTRiTXHV8iTHdGDFnJ3S2rF8Aj3ZNZa9avZjZpMFZjfQMAjHuyxZN9QgVb",
  "key27": "2WdfwbmC5NuijChUnmK6zDpk2SLBmV4wKrD6ovyWUyABRTWrKARYzuKKgMPDoQksxNQerDLBW9Lxro7mJWfVCZpR",
  "key28": "p5r6D1qccDZEbs7RnprJMJY3PMQ279n5XAqzeEvT3QxnoDGnWK2yVuEK1ZxQrMjYv81ffLz23Tfh1axR6Aiyw3U",
  "key29": "4SWsGbppaGgJhh9butBEg3svzyMgYU4wEPDkHu8x6w7ML6dvzgxJf7HUFUNWZCubzYRjYDHxePZiV46WpwtRV8sy",
  "key30": "4uKNXsLJXY8WEmgjPhch1TQygJVbqVbejaNdyCx3qyr2Gu5Zqryy5EqmUFVoGNYEgaapsczCTCQCgsFSmUQ4WZ9D",
  "key31": "4U1HbyuYySZeGRrrLia8Jsdq4WSxiM7Tfr6PNt6kgsfkJ66JcqAViquMy4Q2rib3BZUPdqnfDKSvxCoWu69WGQVf",
  "key32": "677nbR3RCXV7X68WohfGbbeDQFkYR8ZK4PKRDsQaMGNz7jHx4EUSFZASjrEDxhM4mvFyuoqEvormppbD7im7bx8b",
  "key33": "41AWLo1BqJka4X77CTUAckBq71mzkD5gvSWRPQrGcV6w4X1wWADFYEAr5ij9XHwFwZXN5m8QKZupUcfCyPTKKKMp",
  "key34": "3U96TR7fZkoqxJnPpJ9F2eFfKj8cyCxZbTemJAL4SGyCkoDJJgnVDJDnjNMQeZ2EZj9jsiEwarRsAYWAdpRxYbYM",
  "key35": "3bG9hTshsBLqHs5XxFrPAc8Ta4dukFM3K3GzPUVa5svVURc5CR5RWDLD8RGG5GRHjDQUFxfo8dvnBhco5J58SB3E",
  "key36": "4FTtw71kSKhheS3SeVekX9N3gDMwFhri4iHFLZgpYgm2RNsYugqGRxpdhDFSoiAtvKArr8SC7uQtsswPTTFWXnSy"
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
