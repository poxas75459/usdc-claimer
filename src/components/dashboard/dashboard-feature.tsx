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
    "6Caif7yqypaPsX6Jn9DMABv9LpsMgBJMh47L44RHFuz38xWfop5qBFTppQR1ZifCE2jz1fUWwqhWb4rKZnKxw1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9PWuyxED5W96tEUaqEXawpoLeG6Fg4HMeMAB1gLtpk7Hc8Ur21WS2L6Z7ausqTTYFPzFpLVBbdR6kWTohgWgyh",
  "key1": "3ybxjJPZCYftoxYGqwcVYAJckWU9YJtDqtPssLLon3s7okEJWpNhpSBoV1cJonmXN4kwP9uxxhNmUCNeQaYcMhcn",
  "key2": "5Cp8qJBkRyW86URX7SfhLjWejWvNPrcWV7rpj9NSqKQW8Aktib65WvmfQgvHA5ybNryM72obbon9LtA93dZjmkuJ",
  "key3": "95C5RnwmideZgQPYyzBYC3etjsro28K2kGrhT3shw3by3jdHDhsY7i96FDNxi4aTxMnyHYypSBbj8FJziecRV8H",
  "key4": "4zK1tfZMAyqEb4jcsbENpg6cVE74qHMrz4mSpk5ip598ywFkR3fjqoGmF98AZJCtuzRzQKg62pg58Q6rVbzqQuTK",
  "key5": "4ftrstLpSjpBhLTxuTqPfJgvA2VWRNLQWQsrzLavbRV2EyHjZqsNoFKzP66Pd46ZwwN336hvZRpPXXgn64EGct3x",
  "key6": "2fjYEPjWX431ydk224y5PCNc9Zv2gERC78UT2GKQ7f8Bwen8Ez9LtVt57NzHQGrudzw1QR5wZTu9DcpRRe7XGBGn",
  "key7": "4XB8FWcC7DS3QRNejEJGDYVXQn9dkj4J28TMLNxAsrbAsxLLCtVfFXsmq4PdX1btMynq3cy4fM2A43exFJregTys",
  "key8": "2LmWYffqwK87pj2wwUJ3by7vktCwUtmP82hMwKburNHeLw8BJxaGDHAGxEVNsYE6w1MWbUGHtvFtLjmhArLsuYjv",
  "key9": "4jKYS4niBRtdea5gNRmo4AM11gWsVUGWZvuCRPhp3ccM1NFhsWD72v5YEGDjRdMqXpfoQT5jWX4q8ZVGy9fvq7BK",
  "key10": "2TSQjPrc9NQMsEiCmEGGxxnstBZHRaAaubTekCsavkoioq61AwVNXKctsZHaFcB5oS9amboFEh1YfMmNLpD8N3Zy",
  "key11": "4GVr4MZ5gEtszdkqcwUaDejYUNw7PFdjpC27u71YJ7jCzd2AoRq1WPY2dn7yYBHAYbzvg73jKbNDvH2AMzqXYLzS",
  "key12": "8smu1HG3v7hchMr8uMJpvyYUejwpqaGAEVcYEFVg3rLR4VxZdUDc6DNr9mXeY2jJZQZnzVDUhjujBhMB2DSKjSa",
  "key13": "5wTYvk8zwNgwBuVY97RqqcxxTGN5e68rfTwg9rN4VZckeZStwTE8Ha3BWyj15pVGsAHyoEACYEAWcV33nr7SqoAf",
  "key14": "2wdQLsXXGyB2JsPLhampnevJjxKdwa7cKPvSa4yWSGB6Myg4jxrQ4PkjPw37jsC1Ci7zfCu8SnDx4H1go6p1VVoB",
  "key15": "5hRMiaU6Zt3ZDUTtyKJ65s28JGbtshHCXwE54Ljbs55F6jx69BgX7FP51twKe5SS41XhVLGp9x1SBGbotxixdKTW",
  "key16": "2RmobXC62tJszEiFjyjSeAbWATb4pTFvb3aPWbnzbwngEk3zBzeDqfqmx8LNYWrqWoekt14P3Co7qG4JwNF5fo6k",
  "key17": "5L4i9iEfffZ3UnVn5HzYWunC3uiUYNDAitbh7z9Q9QCFjFjq56B197dJ9AvDUvsJH2YuWp2ozhhj55dCPRpBJi6g",
  "key18": "oCHSBsjhuQvDACyhiy83n3CWGpWGY2E1SkGo9BRgHs9ve35T2pSkkH5t9vrNbgAVQyPKhAMo9xympNb9xDVWe4C",
  "key19": "Sd8sicd4iJV4sWRMpS4S3us4PJHmYFoEbtzS9dyk7QXgdb4CPmK1vyTgckxV4H3gPryHDGDV2xbxjxVjstFUvEV",
  "key20": "PNKiF7cKkj1tZm8aLW4aAj1jA8TYe323b6WVusuWBtHWBShSrEmQrygSBC5F97jEsXiUikipXBaJnxd7dTFpwft",
  "key21": "aCYYwcKqBhRFwNFGemyMVjUoM4rRg1kvnzAr7AdxBGvupvoDMvwJQSsvNpGE2mQuCuucAb46q14FJSRTbi7tmY7",
  "key22": "271qC3TP3NxmScbgWA7QA6pM2m9EchiVkDqwhTSEgnPhHnGMXQjjc69PC9UxtuGcTi3LqtUS5M5M82cXWUpfC1Q4",
  "key23": "3WjzHH4m1VufU8gTuev4S7vZMVjErCoiEjgYmG7zMpKpgQL4C9xKHzBpvo8FmUXZDBb5U5RrFjoT3gpuKQ1Y6jEK",
  "key24": "2nsWE11EtCFZT9wn2MYBBYCjTHxKJ1s7ipfwJV6rzUHBY4NKaCZu9t1RTGG7QxLsbieqJhRhsaNo7HD1RAohfiiU",
  "key25": "5EZapyGvrzvhPK84xXkzQaBrQuMvgGtqDccjiQqWVbyAc8DWiJNVJgeYk1XauQ4cVpCvgGtguWRGDLjMET2ThEF2",
  "key26": "4wn5PqCFwCf21zPppZvuzK9tjnyXBuWE8k2C8JGJ189xr1vSDN6xAxiuTe9XkJZEMt3mUFbSADHBpQVXfoYZvqJR",
  "key27": "5SYTXULKFBascLDHCs2REXq4r7vQRA3pTkN7PxPDVa13ggjMYegnSgx8DwvV2BKbmc6WFNnGowvpm3fkgZWtXPA4",
  "key28": "2CrqH3DxSghg8i22y2F8ncHKqx7pwP4VxmavmiqzKb6yLS8ZBo2baEw6GL2TTmeKgDpYKFfozUyRHRprnV1o9RWW",
  "key29": "emq9JFGDrkFQyAaXVRYJ5VHNHXwoTnvLtPV7M5oYorioboDPRtkG1UvCXRwjHAo3ZY2f3XjaxJbB6gkXLc19HTU",
  "key30": "ddmjgw4a5r9fYAkg5N8YzDFaFn9vFYWJyVmqBopZrwxgc5i15VBdq27eZTk7CL9vjb1iiZqfk7RDE1pQJRrCQ8V",
  "key31": "5Tg2jM5kseBpyjdy3mPdsc96RFZQSAMEsd3kHZpiYEZ3jxbA3dzFLWjtuVc2eUQKvZErdvJXMwU5sb531KCXPA4j",
  "key32": "5JfGzsQfLTA5vDwUYwXiJk7SNDqKJLiuHhskN6gBVBuPHL9HQB3BYK1MFei5jE4oBZyu6E85AGiY9Se93CN2gUeH",
  "key33": "57ytDQ7HsBhtPmBNA2XQgopgB66rHjR7Gg6QBEy8CCASxymB2tMVmdodtH61AfYqT69CGULohGFiNubFcmTdoBjv",
  "key34": "pHamSM69bkAevtZwG9okPFEiSmtdzNKffcK66DxAdUj28Q8FgMHcY3H4z68sUWxTTDdxFvDASvTxdJ6FWbKkVMT",
  "key35": "FvxtCpu5kQ5R7VGG94PJv3u2pz8pTiprhaFaW3Vp9oWWLjeHapuqwpPreTt4awH26s4VAAbDrGeRXcgfoYvVmJB",
  "key36": "2NiwBmytbfKdYZmGAAfgBQXFa6j9UsuBsZwQDqUgkWvs9FvJj9dCi9KxucR6KXaeYKv1GBajbdmrpnJgdP1yVZm3",
  "key37": "2QTuYxFNRb9ssB9aLDF87Kz3WZWwEUAk4iiUSwWCCHxmgK5cUVNGVsVtQc2tU2124UZX7g1Y2prD2k6t3VnkqaNH",
  "key38": "51qgyN9CRKMAxikTcmUoMFBotsUHtcUcSEoiej2uaYp9Cs22sgHerxKtsphwt8ZQeMZcLqYgSXeQdDpgKfqARNwU",
  "key39": "4Ppj5JsebyqGaYk9x4Nky92U8rGrzgSai1cATYcjnHkyxqixYMBC1Xp7BPK6XTokKC9NKpWSuB5zi5AwHpbZZ1at",
  "key40": "48GLsfk34iZjQwAeJMLPVSCkVkDNTmLkjw9z2Nq7ziQhnL7r4q1ijsghEzNYjyMXbv4WxES8GN43X4EiMgbF9YWn",
  "key41": "3QzaQmm1SYtqgFdRUdvmXoYcGzfJWNwRD1gEK2A3gfN21Sr4MDYXZndutaQSwwPyBfGnixmF1FqeqNk8WGsPSmSt",
  "key42": "3JMzqL2nDFch84PnpTc3LbedAEza3ERWzt5y1RqWdmDwmubaGHKsumLVpczDb5Ln63Kq2fzmbbzsPPRjTBTFyZWs",
  "key43": "FoZzD8BerhWJmEAarGTF67snSufrGYKU2kjwFxMek95PbpZsXTAHXBZnSLqEDDEd21CMZiQjG9yfCM3ux5FX46g",
  "key44": "3uN7JRxHyAyWqaPs8K5bdw5Pnq8AVsSmWtydv3Pe9qCkVvN5g8DfzGqaYwkgdjSD75Ra4r4asr2mHW8DdGbfz5oX",
  "key45": "3nAy9CHBrmQzpptyKiTaApGFyct3GwfhxE14Yr6j5t7czYJgZ3XNZNpjbVh9pefJ4EGtQhsa2vDY5GYJgebGajTx"
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
