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
    "sDGSvp2dw6apyqZQuyBb4cYLdea9XZhQLxYYoxfLysTk8Cwx1Kj2xMdjvQi4enrj9LT6Rpe58hppNYcfT6wtWAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDqTqYaoS4oSKLrG9fqz9rhUmrSftGqmcjcpECd4okp8zq8qQsJYAsWqCC1CF3Kuty67ks5b7LW3sT3XfyKHEZi",
  "key1": "Wds4nfbKLCJ4sFVsCs29821i3mYVbDVqTk8PPgxZ5Miy7oNDhTgsJXZXs2VVxJMS4Heg5vidjt5ttoBU2LgjEkY",
  "key2": "YKmWTW9sWqgFsbJHGDRmcSRpdgfjoJTB4GT8ZY9ybbD2ho1oCCTVNeu2cQNKPnDFGxohd2CWksju2wAvUkr81dh",
  "key3": "5TaUSp9ZaLBcZ9oSc229KPgzJ82VKuW6WsYa9kyjJCCaNyf5pAojdaY4oeXj8iRWFW1HPUwCaEVKGRM4eUqZxtep",
  "key4": "28NKZWUyc1s913jiRtdb5Sp9pkz1nPCQCpVXjREYWRKE2y34u6MGasLTg9ftfjSQZ93W3Ev41Lr1o42TnRa9fPQ3",
  "key5": "4qfnXGw66QuYYfQHf4bJHsoSHGmqDuq92QBHP1KVpfsiAEvHHudbkHKvvvoWV1SwigjvBG21Je9UiD2eXqU8FyQh",
  "key6": "MfjwWuKCjx21Y6rxRkR6kPHwad6msoPrsXifFCdYWYfxdbsNyGPXDCmnDymXN24hXb2U4fSQV6PVnydUkDWGQrz",
  "key7": "2HZgNYQAUAxwwiPwRhvyVmBLNXDtoSDJm873LQ7aL29dq43CsgcyWYyfJ15YwmHSjLSi1TgtCctRM2NyM3bWDLi3",
  "key8": "6urQ96LAYpeayifCPrY5dhxaM3CzgTybKEDp4GD7VYtxv8j8qiHnnPg25Z6ecoSfu2Xf2y94R9e3ARe1rnUWUxL",
  "key9": "2hsRbZonLgpFA5hQVKvWkoxCxZWQYkoBfKphXWrPBeCi4g8W7xSxnamauLzRqVbVWDFtLpZD8Y1EKA8jLDU7MegY",
  "key10": "3YD12SvnpLZENUg7zZNPrbU4qj572SEcucoZr8ajrAypakLR7zxSYkG942pjdnFVSKf4hUyTr3zMrNUc1GbcXagY",
  "key11": "5Dv9LBR6jgmBGWdAJ9usDn33s79WhpKbbaT5dRuQDj7adEqG1wyBAZfAEeWQnpKrELwWoqssuziypPpC9AwAjDAX",
  "key12": "3hFWqtEuHCGeSpJU5aVUovLcauwCtY4zWVuMveaMfodvARcsBzv5nuwzpPA9DmQmH7vgXwdAu4qcUbnq1meuULRR",
  "key13": "WfR9Dzi5EKnA3a5Kzf87EK72xQhc1Jzt6uctJ3DG5SUbvVQMW5FCtKtri7z7ErucycdX5HvScUaGS3SGJV9gsSi",
  "key14": "5YmWZega3QqtCg6S2ZkuP9V43iPtV3TuKrG8ZcuAEsFJ8ohjmfbXU1oxgv3ZTiDF6UVzM8yx9QHcuBHdxQ7kLk75",
  "key15": "34VFrET395G3nehVBCTiR3MkYs1JewMazKMhoWh6kRoJ9opuPhBfwZBWQfNPskAnGuXGkY2JKo4Dryj5sF272sxo",
  "key16": "45CwCnbPZTdv4te6vxTMHMV2yXujPrkbqSmTUwvfuWcwNZjpimEE9sL19a8J3JYw9v8pZ6Td3UJwp8sno9HYHgDC",
  "key17": "2G5o61mUodEqHMZ8XgCvc7epHRs53ipPGeEvEbqXvQfK56BSt9JWarDwULdKvcZiZBYfBaEJMvSdcA7dEz9ozNJj",
  "key18": "5F976jjEsG1csEDZbaC6uczMiAFcQjATqqJTndpwbouA7v8UoHPCrjxeypwQYgJWf9iJgMrejqBYsYjR1C5PT1cs",
  "key19": "5L68PBLC3YVrzbWycgbBgste1cxrVVugFpuvoavQ5r51AYocdi6mGEg3dy5JjQarVP9uf7JyoWDowfC3h5qSYu9p",
  "key20": "46Y6PgFUv94g1iorbTy46j4F2Rx57RzFAHNqBmyziWLNqkDJefaumFrbz1gBtTq2N8FNiTCfhrnHx13RkStc3ExY",
  "key21": "5sGD79U5NTXQwFmayLGDbn3bHPm7DoXRGmM5xVNbdGMe5LuLKhMCHWsbqEe2gDntBhdZTq2ndN3HVncrEw6HjSTd",
  "key22": "2AgpVE9eGqaiz8c7fSFwGoRonMogLqsy8vLbkhKtuX3GS21RaaoegnQLQXuDDiG2e9jmba7uASoJvXy7euBKE23M",
  "key23": "FhzC7A1AKSNRbJSksz9dpTAQWM13qkTAKs52BgG4F8o1P2LumvUMtS7pAmgLhP1Ebm5xHgiL4DZmgK84ZC7Q4mY",
  "key24": "yFg3nHV2cAhp32dss2FSmgooiwYs9CkEY6vRPduaqPCxAiL8PrsLUwNNw7sbvHhqH2C4SAdZRYboA9xQJMpKJa3",
  "key25": "2ZFoX6zGGTCAn68BGHdTrauTzafhSca8UdvnE3UpvmY5dXSGtrzVyhjjmEk7chZFHN7NwU7j16TxfrYdaeg17gMm",
  "key26": "4nT49dFXLvomD1H61Jg8ZKxmDUtAPhzhbLokGMG3F2fWEVgJyiB54ad6Y6H7LGScoMMRzWPVkViP4dq9YFMxZxYw",
  "key27": "3CcKvm5znw1SoZQhLmS5rRXQBB6NewexyVVEo9ADHo1LmMLGBztbw11i6cpCy1eJEN7h8mpaL9rQRhURrzaaAfm4",
  "key28": "xbbNvBZScnCz4dWKe4pmXxvThC1gRbvvWC5uBx3pZ5JsPnpjt3qXPdJoissze6dmv8ZRptq9V5Lc763qW55TkYr",
  "key29": "pMmT7xUEZF6aYnh7NWHtVD89yMusUGfGZxN4d7WSDQqcbkappNRzDEePVABXTxZKgNtdMxTSgMyF6hZA7FNpW6x",
  "key30": "4R595K9JUMjYUV7pfvRs1QKyvFSbSsGjw1yqyYXVHCr8PaK2aheXeYYppf5t2FX6AeTPBD9BA6aWr5wJ5955E6vm",
  "key31": "9qogpZ4PVWTMNCVWBTQCdtJMuw4f5gD9VWQ1daws9Wx5XDWQHZ9QvexGDtff9XtbS5CYiNWntFHCHGrToPNMWUQ",
  "key32": "5BJf7kRssrSpsTenqoqYeAZjoJM52mjDpUSz5ZKjgUsSfm5kEr9o5UxS2nXDx2ysYcEnfFKeHrePZ6cN4kNktuqc",
  "key33": "yzS1zFAtmMLnZNZqnog97xPQvj3jArBdNZ7fgf3VnsUmrdU3roCdczteVVLqvVcxsHhqnLtxyiBY9ZcrXrkiiKW",
  "key34": "5S6nLskfVPenkR2RWjJUSciSXveYdNEGbqarr5YgwokHbuLFoqrDzHcKhkawGkEoXSntasmY9tVFQWoTfW5Yg25C",
  "key35": "gaBqxXJUaiNwDFVPmZgcm92MrRJFKTt4y4qJu4ez9fefAEVrigo8QQJjU9wpsXeuVnSnoK78dq7LpJB3JZZ7vK2",
  "key36": "5zjQVyUQVyZcV2fThWXksYx7diaHCNf2dx4Djxw3RV5Kfc34WZVAJV4MC5QGoYYshmHbVK7FcnrDjK6f2GGMaKVY",
  "key37": "5LL3z9rLD6Q7HsFUXCirjNfrX5iug2ks69huLbTAkR5ZN4xsCfBH8rBtobsg6PFgRFEZPkykcPgrDeQ1cX6RdbYj",
  "key38": "4MuVCnds5Umvkpq3rTWSqdjZ8EUEh7iigX13jwauqiSYs8ERpaxxNSdVt3VZdZY2Ft8ECopan3j8Wn7XimvpTs1r",
  "key39": "4d1x3sXfj16Zo1BwWbecQYqf5eomMJD3H54cq9z55Rskk2PTx1pF7btYMGnNr7ZJTYLPCevx8L9Vbe3UyDAmt32x",
  "key40": "3ASrUmMb3ebuk3qo22M6mg7uFepaFdkwpoDG5PCHKMJ26t7spZksz7ew6TKnnppNs4kQXAtdKXCKXJwr5ohJ6A97",
  "key41": "pPJgZ5stjMkKgWCBNZ7kRbzjXS9APmqhTciDWvekSRVWZN21N1cG4BwE37QND3GvfK8oXzziwvczG1GZThvidqk",
  "key42": "UrshKW9St9gxhrGZNw1FcN3WN4Se1SqKUnoRgt69z1XNhr2uCuWDQzcNNqyfsbJEFpAbnvnYVAJGgLJjPtpSpw4",
  "key43": "2XvAx4SPhp1c3a8TSXECyJujvhPANcpwEV7cEBAg9Gcu2ePAEXjeejmz6wULftKTHU5tBj3PhdxLujvpEhn5iVY5",
  "key44": "3YRuD6LbexbdZGrbd9H5Ev95HJgyX3pGq8dmmUijdBhNus3mL7TzFBZPSmydAGWcv2zMQcj3BgU3KERvraH3R1vF",
  "key45": "3BdnH775sqEa5RNzRKrtpPxu86cRgLPXKGJr929GP6FcUfpHH2E5jLHwZmT3piRmBHzwaGQVDECVo5zZZaUfNDas"
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
