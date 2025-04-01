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
    "WAP5c6kJ2nJMvSNsk4y9QuY9shDCF9gmQY7cr3oAbdujKQDb98cukuEhLyQxVbvmQsKa87VuB3DbSqwwN9Q57oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdgfUEHcHryD2tYkddBPCYsKKd2d5LHJvaKJH2jDSsRi8vf2LcsX272PhzvgZFcc2Sso5GSUjFbEgVoTHzdv7ov",
  "key1": "36UR7Uc93GEmMkAuJxAJoBGpkiVncGSKWXcXCUhKPRbYQRGmaZncJfyiepQFwgoXMMKELLLDBELdkM81Tux5pKJw",
  "key2": "3JyCNJDSV7MTZr9Xh9JfTsC1wmYGphypLFGmh7aU1UKm9YceuSEvwbTn9KwbqdAYMqcwwKLAPqsMWsT1piiBcgTv",
  "key3": "2rsmpk75ErLJP26PSWh1yKf5wfCXJsjntUkZgz7xL6Skvd2Gy5yG1He2Q3qKyhJhBjPZgHwoJkuwVFnKF2QmMNaZ",
  "key4": "2Bd2PTuFNFe3ihUWR9dsgJVCs7V1Apm5i85PHqh324ASkopFRgQdR4sdzdFzmAhXPN35q9GnESXSUZxYfYuUUjFb",
  "key5": "5q87GHDVUsU3zMXbDrEMeH3889diksbNLryEhTpfGv32ALJsd93dhECqvfHs4ryy5xHKXVDHqzp7LvQpkjLNfrPH",
  "key6": "3VH3k2F3b12XtkNX9bgkZXM27o5zfdVEKgbNtpvZrCtGfQZVscms5rtZ9K6DGefYuySdSDDutgmFSUDC3rQPYwmf",
  "key7": "3YkxUAjQivCHvAsY7UexEpHJu3haMbJiDvUKU5kJxCYpyxrjvNnH16CVEguqtwZQ56EZjmSXvtKBKKcU2brLLo9u",
  "key8": "2y4oC33t9Lrho5mQruLYAEua6c6j6cX14DauYNxCVv7RVuZArYLUvWe9jG9dvVBKqmYdbvnqYdCVf3uWwd5A4Gv7",
  "key9": "2FrGqx9F54bovRaW2UmE9Naidaw2darLZSUtn1ASFUuLidwXzBxZRawSY3wdxddSX7giUe9Jz7QgsSFg6bN6gU9h",
  "key10": "2rsL3AtgD527vpM8SSvKQWx4pL5GatpDce1SUstLXgHeWNh3783ocDQxbvpbSBFv96stbBYUACdNENV58zd5G3Vf",
  "key11": "35aR9m3FjUxncZfLeyKqKPjae4QtWkWuKqS2zbgvptKUAvnmxH3xm28pLXMQZmtxGA9jtjVFAKQSthCum8RrkYYY",
  "key12": "53QQKzmy4qTkLkJAGPZbhgv387r4dvGnwygu5SLjRU1UkYo5KhMHUKNigfSKf4Pj8iVohcUqxxejHd3z7C7YQugz",
  "key13": "57LX4xSfP8okm6yEHpgMCJSJefSXfQ66TU2xbBfgdXQtjCAoyxnPWqfHVrbm557AD3CteAQXY6Bu2nJ9HNaBSyhs",
  "key14": "4L9pXf1BAypzEnE1eV95WvxSF7BYYidRr6hTrbzXKbmofxjDseoSPXh3WxP6uMT1LSbt7jCRWmpA1q4VuwJXWXQ8",
  "key15": "3K69pj9aDyeGAgdcfpTaDSxLVuMcBB7AS7MqNLxL9fvm1ChL6w5Rjrc8YbuDvVMy8qsB2P4f9rRwwASuQHxEuAoN",
  "key16": "3NsZ2XjVMzyTaZozQ2dqYWmeekNoGvogphHqNupHJxnS24Hi6h5Cmsws3p9bLe2BcPyns8jCDiZcYVfuzSYick1y",
  "key17": "as6zwzQeVtydSFanTgnPfR5nZzhCJTaRuveTJTY6L1oW8rC8cQHBkafSF3mJQejS9omit7ecTUyfTtNuT2QbYvU",
  "key18": "2wt4QSAmawqoYF37r4rxehAQkCN9TYvxenMs5hx3hsfFX5ViPzENNCya2YnUYLorYESovWAviyPkkUkDZsg83fPN",
  "key19": "WXguZuP4gRAZCQTJ5hE6TqwyrpHXmHqaHvuNv8V6osJHjb6AuAXb1WVu9vZTTeRhiLKZ5BuyphQCi5hV7zcvNcv",
  "key20": "3b9S3LK7GfgU1MRaqw9G4QV214jjNGCwtb2iEcfGvzCQjGeVwyptUTLpSY2dpZoBChNFkjtepBFcJVBdboiaw5Ug",
  "key21": "ErA8YbcDqYLzJNLFnFWWLzCCzRMMGB4XzjMWR7JN9Hgu7xyQacLwCjjidtsSbeycaS13RdnT6FzZPscdhqxGAzJ",
  "key22": "3n7NeXzJWwdQ9ik4iJCo93cH1YNFz6cgurr2gprDqpAwqtRkEmUrrN73AgesKadTMPBaaJJw5DWazLCrtQbTj9AU",
  "key23": "vPqY91QDEzdhmDsiphCBteHJj3UXPemc8reZA5w6AZmYwGgK6Nbe6Z7dM5WGELArPEpcVDU9smPaYeRmFVdPWPN",
  "key24": "4tam1pUmpXRebjWpy9GVXaXka5bSyMw9dipDQZ6PP9hxyKrRaNncJ3tUMppajE4DKvMKM24E5bnWzp9nNXj1SJGj",
  "key25": "2Aqw1HPM4icChzufWM23oopiFxJbUwom8V6E6tGEB45B5k8zo8YiPbeTHi6A8Jj69B177qVjG67qUFL8FfRrEdwo",
  "key26": "3KXDUiSbp8bfMcAnakBTjteCo3urP9bTaeQUTB7BDCQTRBymU9AzAGQHLgUsJN2b5y2vnr1GpanCoxtrquBMeKkH",
  "key27": "37d9yegc3ko6YRarkP2Fw5PEcNBLVvaDB3ytbcbepxhtprV7zT9SNdkVdaQ3bEhs8gqcvk3jbsZ1YVKFtEMo4SHi",
  "key28": "4hhiA24qXQmJ8x5HmAMJEQhdVJeLyk8kHuYJ381bQSqBTNTBAQwybApWvof8EWwUARcsphAAncyhpFX9bFAxGAqt",
  "key29": "4cVSrdiXs6SoW3a33UNXtUa9suDYp13fLxuqyVYtsRJgnLfp79H6gNVyDJEVgXj854oScS8oX6iTTkF4iDsbYeMk",
  "key30": "54u3fmHKmToJBFp9pkXX4WZgb6pDbaeW8oMjBpRgiSR2Mt9CjhSH4kF95L18FJUm1i99ysxEs7RcWad8pkHCy2Qk",
  "key31": "Qx5gt3oHHUo113puNXhNK2FBW36spVnXXEPdJpMdWCw2pKtxWbPN9Z2i4jqRwxZhXdQQhRcZCZUEZyv2jjbbwiH",
  "key32": "5P6eoeKrF5ofSfXaASMkbG24NF8uHv9TvXNXjp6f6rESb4vQ1W33sT5wq5QeWDsGEPMxTqmWkbGdWeEaYMbx1R8V",
  "key33": "4kitWxsc1XHprMhznmb7uTGQ8DjQ3c9U4w2nwiMXiBMfysTVrxayacQoCbNAMYqy5zfo7KDfSEk6Rb1AiHB5qZDH",
  "key34": "SnNm3FxTFhgMgcRu2RZX36JbYDFrxvqymRymkWBhTjWfyc5sZ589vHiAd4ySFPDqQtczq58ywkAwurgYyFCcQdr",
  "key35": "42nkr9sYdddDFPqThitGr4xGGTdbh7kyseDktgabxkSGaV2HHbkhYJMcnh7ufGMMbbRLXJUVhNkJF3ncpYuvfkFS",
  "key36": "xX2Y6ru6whjiEXXBX4M8VJYNBJbmjP1U2rBBAhxQ6sXTJCFSZbeGNGVTXrD33LT11uXPKQKx9jHYFUMvxGWuiiZ",
  "key37": "ev2A69yLvqMZqeBBgVuEEwWKfACCiQRnU4o8b4c1LAGoNiZ2BYmPPyfhDc6FBr28FNkydYMVon33bv2GE5MkV1p",
  "key38": "3sBdyKkseghi3fwz4V3q6dYhzVwuCUxnvhjoi3ia4fXivbrZp7RMijn3gKTySWbEDNcmZES5xEbRxvHGRK74W7Lv",
  "key39": "5gjrWp5XMDmTEdSEtSJv4QLJ6buDFCfhcKLgsoZK1zGs4voThBpfa8i9dnJqoWtPEpBE1MpFv6MoHeDQgZ6fXRVU",
  "key40": "5Tja9niTa7CFWmSK1G9S2MripeLGenkrxpj73pfYbdfemcUXWwMGEdkjVuQiY13rJB8AMccmE17iaqT1d5zeRq7v",
  "key41": "YwAXNh7zCznGQjePtfFnMD1PU6HUzArDYi4xyEBitsNrBsvgsdw7WVRygXwyoXM3rK9Df8Bj9eyWmamD6hTEn6P",
  "key42": "2KVwszeFYaqER6kd3iKEP6efakcrmj63bYXcoNz3Lp3Q7hfqc8oftAs2FzYCpHFcZs2WJsBRqB9N4pWTrqTgnNqi",
  "key43": "33RubhdAWEkqu7XMfd9oPXzCSdbkNQSQx4Qjkfa7Ujwz1qDc6S8hBW9rAQ9QEn5HYP2NvFB3PUUtaaeEDdNStvL7",
  "key44": "26u7LB3zA3ztzPYJUiLadfVgG6VyiwmNGUKdfYAmxZuYs4wmnDy6oKBVa6dygUF8YUXqGRU77gPRB5Wg8PbpwwAr"
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
