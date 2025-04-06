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
    "3vNzPsa5hhwjMfUnx4qpKoMGEtBRzcRCktvzXsp3pvh4o4c1Gp78xXiYPeiksAoESv76Xadnu7829LYarNtSg2ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y7F6yYiewN7RgFERXAAo9yKiWdb44KdMzqtPRVsnCifVoxovfAWzEaudBtCEHmuWxzFAGkCRc8ga1mVdS75BYZ3",
  "key1": "A7pF8sKBiNm2TsVyfzdjr4dvL3cyvQTzfnEFqbYXwEzpajwnDBSNJR5vQ7upLW54xGBFYGisRMhjKe74qnVmUi5",
  "key2": "22r2vGVt65VsU8LxSR9krd4QaoWqYP3x3iimG3vrCQWuAfhkTHuBRY1gdmCeaijtAh1p1FRmWJqLEwfJhq1vFoaL",
  "key3": "5e62Kz9jsZiT1RVQaSRhciQDZ8664UhU1nMMWsU3zVHSoznkhSry2U1iujfD5fJhs4NVo812enbEnqA6rC8BEbgB",
  "key4": "3TgLtFguJSjzY2ZK18CUkLZwsnGs64uqCvofuGPwkgGWH387b1ZUJEkaGdy3YdbT9T2ABmrRsadGKWKfpDqw446K",
  "key5": "3WXjk848r2Uas7AWWBi2rdwSp3BXcgMLuwVhfoNfepi1QEGtU7K29ANVNVa4DcUyXPN3DmJUM4eZeoamnCciv9i",
  "key6": "3pZXp11YiNt3USvMmtcm8BSwTBrprKk3mF9petVLVSQmQvPq1EqTC7k7FqTUHbVut8JnkgsoMsTatCmxb2bDirnB",
  "key7": "35Bswecgm4N9a1BaGzSY37R86AT53srr7KC8uokHWQ5kov84PgWEyrRT9NXYdhnSgR7Rkt37qKiwRyE6qSw2uTEo",
  "key8": "2QhGs8UdSSRVexxFUvpus4kkXJRQDpu4TpvkwtAwWSe22ZZ3ZurzgyUyzeWERdxudd7NHxx8hb7rSQwwMxpidcmY",
  "key9": "XcNmAatB55pNGAGpHWFdprfxivwEFcqS4mTsSjm8jtffHBWE5fkpxMVsdWKGvY3Qqmo1XMfvViweEZJKrpRwmG5",
  "key10": "3GnQLiHw6XAX3BuMF6yFcLu2jo64e5nHk95fBgQfcdVHgMxypmi5S3krXyxqL3vuX46yax5zyrjzYNBbT2bumHPq",
  "key11": "2kcE53PPtz94sYk5LzGQQgK7odcmA4HH91s31WksqgjvsZSn8xbTbzYvnQcyDR8KMnJMbbeCA1mLXKNj266cHjyT",
  "key12": "3NccPkoXeewgP4LLgStJ5dnCoT2ndCSwJhMTM91YoFc2gWXLsmRGzfjByeT4a8gFjrJjQPMgDJkAxRwFAiTLetBg",
  "key13": "4U9uuf9t2rjGTCqgvUeTeXTZLoTdT92F85wmg2dehpvkiAEQodvSxJDipxx7PiYTniWoRXrhLWvXpUVekB8z1Czn",
  "key14": "3Nn4utUFqFns9p5iscwnyEsXYtjAbsSaA15QF3trPAsvuus3bcKN9Qyy4SzZvypKFETH7EG2pEYpamRSE3inHvKd",
  "key15": "4ihwrmCRKWB1rZe3CGPkqZdZJcz3qf5soHSFgxRmmP8M8QRV5K4EvVSp5GYGaWUbnEbtRXCEx9qA2SJXn3zrE1v5",
  "key16": "tTZWdGNwHfv1dqTAPsoFhG79DT4Di7cbQAV8XpGbLj157EwkWALFQHrpdBniAVQPbQGooc5XFukixD1iKZBoELc",
  "key17": "sz6JYcUXaruZ81beDvbYfzMRxRRNCHAfyCAZkpZTSRcL78X9rAqKMmKmnh51djqCtLbb3sZJPa2qi6BmB8P7xqx",
  "key18": "2ffUVzunzF9WEMrTTGLPu7sjMJKaTuiGZRcdofw8ufYHequWfqjv75bqP3dx1ipzDnYYPwcWNihvywdeyAQDgrE6",
  "key19": "5csktCwoSpFRD5p63JiFGpbtPyHZAr8AQyFGqRtMDch19fxnJ8AUvDhTcij4aXQUwU1zCUX616KRHyAeZu4G31xb",
  "key20": "3cmp9azVpzeqgzSzibv8ZG52G5n9QxZDDZWcqXLWsorTV8oPspPvGAMiRYde76gFDEdWjVBfALZLMYLv2wcyVTX6",
  "key21": "29tXg15DcShcib2DCo16pSdVxJD9V8oHG6VCpeoay52Meyg1VaW3q8YNaUkhq4Uc23Zj1P864uLXCATGgZ8TvpMZ",
  "key22": "66zyUSCh5mLiYcSqp5tBSuSEVQXbCUWZWvY2wAjaMtqjzDjbVrWdh67V2SMWHKUQFmGna1cCJvsBPxAUpv6hy648",
  "key23": "5kVYcFPQgnyboXFf8txuh3jhR47XHBwrVAqb2cupacY4DBHTTDGPiqqnSQ8Bvb8pM3f74vGa67Yvm4iMDeE4crbm",
  "key24": "3Hw1Xb7tjyPoqk2doPhsNk5Y3Ce4eJ54RnxKkyenLkujsUP9gRJYeB7qGD1K8thfF4jkiNbhcgnAxgDF54niZLik",
  "key25": "6knVfoSRemiGL8MMTSFHxEtYTkH6UVQzkLW6fSrNKKhvA7JWD7TR4Wnn9fSijSiKwbrzjrjrd5ixpLbTL9sA12S",
  "key26": "42VvSFmkpcd65okbzXSZj1FyEiL4YGPzuCH17522UBNkeAkamPH3GWAYUmuGKyyHoVkKZzuU3BkduufUrKqv8Cn5",
  "key27": "3b6niUWWd76YExhoAoDuyuFae1vsrrMtVanJ2RQUsnAvYPq4JoCE2aGVgbsyrHBzJuWCfBqsG4axfzZbVJzvmGUc",
  "key28": "5UZe5hJ2Q4MWVkXYxSKiTMTJWzvMaQQKfd9PFA2vhJX3Xcu6AeqKeDyvdBcQHgHjZhTpRiKe3CNgDw9nwuCyuZsc",
  "key29": "bWt1oBSpGzJb7pH59GTuPsnfAEKUizeHwXt1iZYhRByyyhVAMBP4Ge39fhdY1yVJe52EfRXAvWjEeBWdsmuSZzL",
  "key30": "Aoxczpzr6XjnCqykZjnq9DNetNkKwTQJLmGvQPYjaSTLpXDnxANLs5tniERPU5HfUF2ZMNYhCsTCwNavJa4chCD",
  "key31": "4JF58A1Wzq9e4Sos7RUZu2aDycQKPSn6bwbHEzQ5Exmxuoca7aipNJ2s7wQYzq7AWjeukamPq2zZqBTYzoRM8sXs",
  "key32": "2ZJaA5q1uw2qq9MVqSfFMwYrUcndd1vPUns7X7X2mk7TP1s59yVYtgw1LE89ARUaDZixCsdafAcorpAs8wMZTYv6",
  "key33": "4riPs8QiZwAzB3MCNsefDzkLVRtfwLHj4kLoGH7XxqPZQG6PkjcNtSLv2JUngPa35tfSWSmAmHAK3wMFADnJ1QKh",
  "key34": "32CG48uMZXXefvhQwsp8MkzAkwNy5n8BtNPf2iwuB3Cm4f1ovRwqQ6zg8bhNxa7frKD9y3dsogrmNKzatucT53Az",
  "key35": "5HnWP5ckcEFbvAMATK8kjFFMmKULDtm3N44eZMmWWiTHep9MAV2QXxndkyF42YEW4R6jrV3uRAwyQvxR2j21TMCA",
  "key36": "5MS1GLVvKxUKbCz7Jt2XEMDpBkTMDhoxWwRBqznnoVqkWKpbnkPBwcMAHNtMnMRQ1nUP6VkkVKkZgNZ33hHYKJbL",
  "key37": "3zSFHXWrvoHse73HdNJ9HusA3MmHFfedY8Vd4oEF6NFj2sWg8Uce1EpR9VcJEBVwX1uTGox9rPhg6n4YTintBzu8",
  "key38": "3TiqgbZ6zuxCt7HJaQd1ZgTkmgw7dpoAgEcstAbbodSgwvXpLYMsdTMfJ7Eqc9kANa9sGPdvPAErrw4is7KXAsJT",
  "key39": "42oKmzSnS6prSTXnyESaa9tmHE5rnJfkhmiPhAdRCGXtnAbvPcSFzWY4c7KkVXhq67k8vAGP13pGU1msbSokL4aX",
  "key40": "4T5b4p7XM8dpQPnxZDo648rmxqD4C47mV2HMg8sLeC64wPaTEjW3fQ3pXhcyet4yGqDLvj3u9xfwJzrVDT4JCuQm",
  "key41": "2uEf5PhQZKtYdd4pQeqbczwx4bjSsBTWsWnqon1hmkkzXgKXuu9janBRyhm3RaWVmkXGgZsGcZraP6FvrtWk2oB8",
  "key42": "kAXUNXLhjLSKNFDSy3ZaTrNxLcyYhwsQXKS899DrnGEcXakjJFGJbcqKnuxgubjA2g22jBKELgtXcLL9PUXXFMt",
  "key43": "3yBjFyKgC8gTz7VAEUuna2C8VqdzYAWDkDxDLifuWFMq3cFHjHkmY5z6FGMTdfCFMkkfuZyTaEwyGDwqa4MuTktQ",
  "key44": "4ycgkRMoGewa8zocjKGGCiPBgzAJsmJvPeYBfwf5JVmBHY1G2StxHqyxSjJwXyaVeXXByWtUuCdKRebjKtvzoRkt"
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
