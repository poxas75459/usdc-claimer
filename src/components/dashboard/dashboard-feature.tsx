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
    "61dUMiWjzrrxxSzKKSe1pYcvFoYPghUcCFRoVdFdFBXkQG9C9ukpfzeZwpC4ttE8YjqSnNU46JpSTghc2TsKYBJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ea4wdSKZChfRieKDtFpNykeej2vpyVwWkbF6SUEMnf4z7bt8Txo46pKspQHtoLX3CzdWCkufM7UHmiGRKXMninA",
  "key1": "48DYtuLN4AMD2VrQNuvQvNtZsKitdyqyjZXvpEi9532edBGRGivohwepToKDYF3E3SXtuMwXk4NhcYwhSveiC5bV",
  "key2": "2kkjaKW5BsPYZLbtoUsarsc4rmyxzmEpDWBMvrHNMYnms6UbPXNCa11Lm4vVE8GPXQkJWSe2PCjvhcdDbmVWeuJx",
  "key3": "4dj3MN2Y2ZcW5uGkn9r5r1fnTX1KS4ZXFuM167p4snwnDwrakEoda7PgKkGJozk6SpM6iG5gYEYxAe6cTwxdZqUU",
  "key4": "49yyHJuawbX7WygbtRBVNZLDy2v4mjVzejVekQjKbPp6m4FAdaB5ZEXNurQb2RH1VVLQ7zFfBvSzFgXaTNayQTtY",
  "key5": "5iK8tndJHedX976ay5A7zFguGuzuN2BoS6yQsWuXbJPZoG3kqGNAHdHnomCv5E2eQKLToKjK1qW7HFZbQLtTSf5D",
  "key6": "24LpREQSKjCMLt6ybFmHrVdMMUVjoV4Ya2o3vg3htMiRzP7HPZU6aiBUMiaw42wyvgEx9M9dF3s65K4n6jPSviBC",
  "key7": "5rzPvaeCtF5jRphYfXvjFSE1BKoXEsUSZ3LWzGgogfZYEkJtaw7BDrTBn3VyjgSJeKXsPGbhdf16ZcutadGzxohb",
  "key8": "3ZEzmEumWufhhx2c2pitjMEHjzZLdhTi7uDeUu4FjdjrS2AmJLPpqB7GbK1GiDaJrGB4RF7ewDz2k1g8h3zzaw8o",
  "key9": "568Qwc7sN2AxPjRhu139r4aiY7U7wFC5FFxvUMYZsUR6tHsXKtY65wqWvwcciNoZr5hHoJMvutZvt1pFmo88z4Q3",
  "key10": "5s2ehR9QahysJENFnQuhdjnZQfe1PtqcYKmEhs3zgfo1qb7MkHHR8UjtWiMfbggKAvgX7cERjmpy8wL1FnWongdM",
  "key11": "441FX5XxWq7qSmkdvtVtTBej8NbxMAbKZxiuTDkrvxXThZi34tGxGPqf9Xmikri9mCKEbZ4nTkoQPyvmtJRA3kTJ",
  "key12": "3tLFY9MdYxLa88nUjHt2EHLgzTeG3a2pY9dLTpWfDdZj64bRxWXdXyzVu6AGA3Bxv124VaLYLefea3agExPt3ADd",
  "key13": "53HhTNTTMTnYZcMqHGz71AZMA6irnc4K1rUETDLXrtac6n1bqZTMG9C9ZPHZAGesjhUS3RikYVhr8pqXVGCukgr",
  "key14": "5c7jxpFJo54uwQr1KKVA2V4mLqL4z6TRVyMv8uCoZwPHhSjgdTpSjGVxpgnhmDRPC1hxmBsL7crj4KdcTqXyM9DQ",
  "key15": "5ebb6uRUPt3k6pTQcz7Hs2eiPWjq9BYocrd6nLzdL4t1iYMCrkLY9vx6yMXkawfRUD3TjTMe9htHnGhe1ZSenAhh",
  "key16": "39kgSZcmHp94Y1V4TeiqddFZZs9udsN5nhnNL9dxvNHefs4xwgbe4kwmANwXtHCkDnqYy4wFURAyjrxmnPYm2kvY",
  "key17": "ahHdyNVHQGENSckkhAe9moTtA5oJkKwuJfUJVvRzxGFfpgKVLvh6jfA8iHadN1sGZEXnGxYFWqGt4s7U5sVPobj",
  "key18": "2jtnP6HK5w9t5ghdyYZYscUyPXctAA2cnHfxxzP8T9Nk9Pk1xAb2YgFrA2jSBPVr8P8YZq3b89GvEmhuQ6zWL8TK",
  "key19": "5aPXbaUsrsxaDuwEYG62de8wTfm6weQz5HRvBKnU3qWBb1trkYzwZ25P1CndkUyzwFJHpwjga3nViTCgkRDVJU5f",
  "key20": "3Lk7psRRydnpt7Upf8EbNDwnNGYwqMiurrpipx5HBvSvNDYHZkbKY23A2whK2kxWA5ZnMTeuN5dGYoGYJdZ4JCPa",
  "key21": "4z2Bn2yc5uNCD3AWCipz5cRyy3vP4XUdZGV9vpbxNfodiPtNqCpH7qKiSsfgYZbtxx2xTzEwRo2hHwAgPx8hJNP2",
  "key22": "eXhuGjG1swpsGMVK41PhRizhURx3EL2snads3HhKkPBTCmCopx5PejCJmNt3x5duhS9t5avmEsRL1nAXbxt4xhy",
  "key23": "63KqgutPKjouFbFjF9EbsdLZAH4T7qHDPg9TB9u7GxK2aktcFTXFkz43GNPdioTnqae2RnRaBYTcbWGXCqFJPHqT",
  "key24": "ApeS175GH59ST6WZLrm7i43WAA7chHi8KsZnrFA8MYd13aDe5jnhtjwPjGboqK2bwMu3TaZTUFZfRtKRZGg7wUM",
  "key25": "MXu4LYyAR9F2P3RQjYz76QsnwM22JcNdAyG4ECeJC2SbQAu1tNR65hJEZSnhBRgNvSfpHBTVABgB6wirQkwi3W8",
  "key26": "2dfPfDpHkowCRbxamqRpn4w1iVrjy4Xy47WXMZZmhL4DaVKcRFo3rHwPDS3nVWwFgQg5zcTm9Fc9d5AQahcwEDZL",
  "key27": "2LayJDzqNYrN5JH6tKFm9sdJgk41RaLs5AAgJ3K2qLoYNAH5bevrwbh6Et5E9VYKXG9rzrqfFUEHsFjatwJZDtUB",
  "key28": "3U1nGukebVfrFDNjDmw3VH6bKuQmUkXxrs55KCEkHTHo8iiA1D9xNhQ5nQ78JVMRZTkEH6T9VKAxys5454uqWmVw",
  "key29": "4qeswQRxtaAbtW8ighRhz4BCFz3AwQt9VaxdTeWGTmhXMXhSFcv8jsKUXKSWjP3fnbJttauTss5vXVUsqCVTLf1K",
  "key30": "cmQgQBeHu7deU83uP4YQKDxyDjtdXjUYbjQp84sj3fvhaE93fTkPLpVcnfoncRbFS6X4BPi587jFx2nZG1jPAWJ",
  "key31": "2wc5BJMTsn7RDXw4kZvbGk3Q9ibE5nxFV5msxua34ukYqiJpLNHZCxaiVw53jA52PzvyUDGeupQ7aHpM6dCBdtPm",
  "key32": "6vPCVzi6WyT7TyvfnbkYGzJToWgC7im2Ti78fhdfnrRL9F9DLJjyssfv4Tpsf9kA5t9mjKQnygqE954Ctz1b4au",
  "key33": "5xPXmXVzM1PRqAMGKMbbQxuAokAv4h1YorZAS2vER4heQtgptsXELXfBf79YtUYNXRMC9AAC6HihGJT2FgJRi2QX",
  "key34": "4UJgZz7yJ8TuyF3v6BV37Wcxmy8TdJkaZ7HRscge7QWdfgZYsTXscx14CUGoWrABsicaoTunPbAbjp5pRmqNjfqy",
  "key35": "2MXfLCcre2HU9HuRjxYPzxZYW3Pz7PXGqCkgyfhGSVwD4RBXzZvWmX1HuE4KdEFsuHLqBUz2kxtJkD2x7PMgzJJH",
  "key36": "5PyaenAiTsMdph8VM3of1ignk6AAD21odQrfEMRZdo4VMxSdawVfJfs6ovZBkHiUB7o5MTwNt2tGgcUvVF1YWNqY",
  "key37": "24bQeVTVURzutw1XKywPndfNQ6BnExfHcMZQNzR3DzQEosaTjep62iUBbJNC94kZncrTb6Co6WGbSHEczhaVNPyW",
  "key38": "2gAgq6gnyFJMvzaXhQpdX2c8hyTDn2v2CsghxLEU5xAcgH9exB4fRJEwQJuF5EKBxstF6pGM5PyWNEPpLzkn9vX9",
  "key39": "2YZ6Hn9KRPssj6LVsRvaHGe8pdi9b6TcWbvRqxPdZb6Lx8Xa7o4CrrUojWMgfdKejoXBVofLu5Z9xxfvB6B96sVM",
  "key40": "5Q19yLZEiE1URfxG1BiAjsprubnbM3MXrBdmAJLfgaN7XBzFW9kfDqDzue8LKfR2AeKK6HbcxxASXzJeEgWYnszt",
  "key41": "4yUAzTNx3nxkyVsLZx7jFjAL6zRJN2azmnSBysYV2ThihaaFxPxbCEHFJgHdAAXwXxv4m718UWZBei9zNNEr4ALD",
  "key42": "gRdjAoYyVrm1eQh8hVezw4xd1dj5mNWvnVrspDEgYrq4Rps5TMAKojoCfqMxRdmK42vqvnZqMV4gF5svg5N73wY",
  "key43": "59m1WvxCdfgtof6cYeYGYAo4ajdvkeJnKrLvkvem5f93AsUmNxRvTtT1Dde5a3DEPoxnM7jMkpbT1erBXSbBdgii",
  "key44": "2BgMGzs1zXu7jN4F9PQyWxinijqYPWjvJKZV7awSUQzbGN59pKj12X8eZoMTBjCJ5DUjErWuNy8cXocKPTt6E5DQ"
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
