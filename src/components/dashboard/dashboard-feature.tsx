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
    "3Hi8NQwGoW9gkbbvoMaSzzZyDuwub6JGm4ZVu8hE5RfvL68gsaViRap5bvztLA7oVpA6gdpqs7dPpPpE9W2eoUUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9o1bBtmcdUkT6bFeKUAnc5ZBHZDNgfbHm1erZUd2dGZq39ZFQMLFmXQEHHHW23XtgxmDcZ3CM4eqkVzKKcMzF9",
  "key1": "5HjiMej1uvQhQUgBapNMSpMuJCuYQukyUn5ZZ9xumDBrp5PGKex4jgBC39PJtXmo8cRMj5KQztcH28UM1JaMRfmt",
  "key2": "5SkuBogrgLGkURfTcXwkVJ4kgrAEgeeWhheSj7SAWLptbiBHAmEbd8s6kmJHM9GPYNbGCQNJanwocD57CvHYKATN",
  "key3": "r16FQZmw2dFX2NrP8MnKqTYpeKMdESwUekkEjU95mTxaY6crHHxSxmfKNi31d7LccWxd4XpEuUtkEEPHiUMotVP",
  "key4": "6771b2db6PaFTycsPZJ9VDtDwmTqWVJddPBjGNwkB48DRJdzEPNacZHqdavdc7H2DP8qD55CGwseg8QN2bx86Q7T",
  "key5": "5wc3ckAAtYztpPZdCcezr3Qp8BzWJa594SPAJjQ5o5yVu43ZfC1gejt4af9LfZsYWmyq5bFLF8JGoz4kmTmCc74L",
  "key6": "5mhiT6orNiXqDoDtyaiB7ZVNGY92fL695zdEVwg7RwR8CBPSec2bbLixQ8N98yd2mELtxK4rUHRxY2rg6UyUy3fe",
  "key7": "DDUCvqmnTVpYxSAxNhpiWAKjcAbHQdMrrWYLSR3rurgaoYyqa4Q936xYh2STxEMCKox1S6eVmhCbjhtr5qKMRmv",
  "key8": "46rNtpKRSRAU91bgY9fM5UvxEzn6tc1eWK7uLXWYEucZavc6zSnyoHncvswoJrhxEvmmMhX8x4i2cjU1MREw5GqJ",
  "key9": "LS57cnKbPLE3MvgrdgTp7d47hiHvAXYeuUUS3ystSeWANc1bNar1osnZDnY79skbuLhAvLiSSZ8Be8ke6aT95uE",
  "key10": "3WczpbSexDAi9npW8uNJpeXZ4MDFT8YbzeuMB2ej3Xg7VgeXihuu5Lr42znFxF79aXj7Cj9nodSNUv5vNwM49gps",
  "key11": "4Gapvmw9pZ99sgmyyvZKhmDKGodvBNS1aJjB5CaNsehPh9J5PJfjpgyVpskm3bjgHPrfnnU5i5hcQPka3R2RE93U",
  "key12": "386cGnHHPFSpfKUwFYHLoXjeHiKFWZWj1W5jfYx1TN7ibwLZVqrXSTc6EoBPJ9UAWjzxjEw6jVdSB5Cw97VwzbCU",
  "key13": "2a5mjKRpCVFGj6pbCcfHfMkUxTakNCAs75JsjyzJiyK8R6wrtLesAtD5DWyzt8L7PT61s8q337xKv7qHCCjWSt1H",
  "key14": "7JqcxqRq2SM7Nj4EEPyTncX3qB9PztrUbZSBTDq86HT9FG512JFmjQLXhgiQEXmVPKhhxfdDdVfq488rwYpwEwV",
  "key15": "3NNpDbYF6MzbFh4SgNp7au4NvFZDmDuwDeTxZ5SfLQwesxPnHuFqvmQrNLWKCpFSDKifwdN6ZD9VshfDMgxZcywt",
  "key16": "38C7tmfd8G5ycfN2pDZDt7kc6G5JELHnnemdfA9iz7MnSeUytYtweKSWjcQHtfzVDJfU6k7GWbwT2PxCMCx1RMK6",
  "key17": "5tbaWcR2LQUosUBaRZWpKNJ4P34u9thGbMsWEyNp4bcZmjgUfCj6cf1cgfCwU68b2fDXjEPQfiDeyg5B8nemVvJL",
  "key18": "4JR5jwa71pjPesHrBiQJq5z6qMestaLXdNhCPJ1nNrAUysmecVVmwJ16bk9nrSWuFPn6mL9mCkdE5cH1V1i7NrEn",
  "key19": "2yUwN4xEnvMXNBoCcokqnNXGBdhgkBa5RqHzEbTDwTRw5pSDm6v64W2qtdtq1zvbb9Z4HjFLfWFkgrfeDGqTkezx",
  "key20": "285WLSjfLa8ycqaMHrqpc2fRjwSjn5k4bt6fQzUzB69tpHzRs3ZCfacsmkG7jCcCC2C9mhAKBmmCGqJwCLz8718i",
  "key21": "3DbbPUrhtg8Xy2EpYwZ2WgiuWT8HeHwQRWvNifyXj5QBYP75wn4jTc2TApG8VSXF5JXZfRkanxzSb6HtjwapDRsn",
  "key22": "3HRbPTm7jX7Gqug89Z1AkaCNdY3XuiwxCY833ZsyictL4U363kKSxi4MY2jpbJSu2ZfUPTNkNhkc3SX4gjRkAj6L",
  "key23": "3MQQS9Q9NZptwSvXMorvfjC5xvQkJLSVQpEPNKBrniL85CyL8M8JetdnPuJFyQdFfMZ1VjqEpgjPLPKheoXECEn2",
  "key24": "5FWDRK34nfZQJytP1EsFbdZQxiWKA4s7TkSUot8jaSyZWtGVezkRVsAgs7i1JQQPiKJpKiEqbyx3PwAm7vBJpiJx",
  "key25": "2uQEb6TYrkLyu6gZxkYBToWQwfTrcWz8SD6wbghBGVLcCZxbrd6ok4B7FAfExgLBurPv1xAZuqCK5dgdmSnAWM53",
  "key26": "4uXnmJxn7mEyqZrscnAFnDREF2Jt71vYWqCTwm1gH8Qbmw7JZsSCaMpkE7DJv75RUL5zD94pSvVQVpMDvvXtgpoo",
  "key27": "54CTTumKjCKRxBjnh9kpvCsAdB1Z4VW1e3GTLJ4YcP7v5p3i9GWUrxDvS4axvBGAnRCCzEynV68WQekNXAjmnqXg",
  "key28": "4CJd1cg8apa7jFcewWpfL9HAw7EAW5entsya8JSRkZbyyJRayvbHb61L7Dmp24m59HJpqCXeyQF6MKKNzWqBRBRt",
  "key29": "3RCFQ27zKys4JvhqVL62aDXmd3WVNiucs58BrRG9gHMXM94YiKRjwEucyHansUAbiPUSTdcfVqz9MzAA8zAWTYdA",
  "key30": "5J4VBSw8okPrq1UZeL6Zyj6AghBnchDt6JXQYJcZ28bLrs3UGYaYVrWkVdzFf67WcVgYSGDGe2aY9jYFtAoEErUL",
  "key31": "53VWka1vncpg7sSxs5FycM2frxacdgsMHgGQ7EbLPwhY7eEEoB8KE1sR19y4we99qwFSSRtaXuLgERua6eVzdUPV",
  "key32": "3Bja2M21z2ArX5pFfa73c13tiY7qtv5xgtnpqupuJPhevHsHRSrN64aViNB6inDgwA6zAaggg1UnmrmPPqgQ1EgE",
  "key33": "5vHA91YibneSogYi5xZSSiPQPHneZfMzazgLLpdo1fR7xQZVKqT2KG25sUZkS2LGVW5nVwaQeM4V4ZDeSBDogcAx",
  "key34": "4F1P7JgkrML5svf3fexYdtN4ihzXC3RGYYPWWmRNSe9c4kZtU3KweFt6hHLRSZEJfZaVJWNNCFYXQbpJ6s7ewg5W",
  "key35": "84Qz5hgatETbF4sr5WjwjJ7W8HQ2hhw2fbfS7rT4LrWoBtmBmS7hJ54gf8KwHknvAPF6egtRozBhpxt6afQ6tQQ",
  "key36": "3amPog3jB5CGzrr64EfbD7EJrEBPuZbu2Vth6YMX7ouiW5Riwxpbq14E8v3yf19EqbZo6Vde4fEPTxjeoWXtNJ6",
  "key37": "5pdFuXbxYVjKb2y83731tgv2CqJVLQJrLBL7Q8FhQE52pdDE9n3d9QwvPooopyrnmZJepSEnco9MxzLwLCShVsap",
  "key38": "5Xnz9N67WxyMY95pQni9JB8KsKsoL75qvNn61jdZNjjR4b2RopXCPBGjjEPb55YaspQKKbBL56Mns2adMD9P4u7a",
  "key39": "2DsFirFkEaxJUkCNFsVTAAc3ASxpGepBcpsRoxs7P6i3cVRdzVrk2YQWYTnCGFYjFExeysVrbADgjnyZKjjwxxEq",
  "key40": "4x6jDjvR5USLjLKUqSNWgY6K7JQLeXxhUbfxcWuvDzUwpJAtzu2oi6wWKwFrsc3CEkGNH4ahj2UXse3pLL997hGa",
  "key41": "5X5GdYgSPp3meMR3E2Fp4m2nDDi8CSjnTccjffkqW2BivhCwXe3d2E2FCttYdGgUwvHRXZoNhZW9j7qoQquAYMi",
  "key42": "oxtKMnb1UCQMMWctcsHXhhMVbqLKCoxdnitrh2RksZR1KHP9mpReUzV5EyAWUinhB2dxUhRHBLQUMoULxALcQpY",
  "key43": "5sFkPP46G6x1CDZWZrfT9zyvBKxfa7TRZKXwo12GujZC7BYfwZHFfS6cYFEMFrSzpYfwEVqycfb8fn9VzwrzNFPf",
  "key44": "66gxu98tx12o2ucA29S2Q1HYRRSA4jMZou55vc2iQkJxzMNyBNduwps5vUcNjJ9YjUEuRBSojNJxVA56fTWgrfMQ",
  "key45": "2iDt4hSpVdio2qqHNXeaESSrRRTwbFwHSgpLAH6XeaCrnzGQTZjWDnzbJrjyPrqSuC5PJSgqAfFakDWPgVAPrmYZ",
  "key46": "3Y8jhAUsbK7oGmSnfTtWDmb5xZmKqf41dnofgUfvy871EGqo4sWWWC3dwzAVNBGJi5VMXNSeYi2rAXgn3X54b4fo",
  "key47": "4kPwnGYUwM3XH4YTZDRTaGPseNEuXVZysNYBLXAiudRu5JkQBtAzPNTfcxANMpdY8qyxUY1HP2bvti2jRaqAXoTP",
  "key48": "zWyNyBw2QHUJmr3z7vMZxue9kppWzXjXB2EbMoCAnsJPF1BT5bn11woWTZR7Q3cMaPWGwsrHdSeK12VAqftLtNF",
  "key49": "3sA2d5MzpWWXfDeffzshJaWroGLHuGM6yJzGRojgiQi5exqFzuwKygehVHwZXz5ZdvQBvK1j4hqkrzv6x7ee6sVD"
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
