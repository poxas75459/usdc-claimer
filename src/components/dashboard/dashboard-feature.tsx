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
    "2fqx3cLCAjtrqbScBdm4Bp7ujRx88StXRMiKKp3fErYMF72DxaBMkXfMBgV5rTjwyadx4N2y21osgyyzdo7p6bZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nihJ1pC1enNesDqbdT1Pxhd13bfiLHS116aWtbktSUCLeEWQoZk1r965t5cdQRbYMYu9g9CJLGUhm7cdspaEMwx",
  "key1": "5A7GV33mxXLkxReW2SUdc4QTUXb4hGLastiFAWNtSc2XkMhajZGJwMGJgASN2n28Z5pKjhdVsrXmKAmRM36SFHfu",
  "key2": "BRnTpv92Xtoq1bKqnE99JfrhkXJLBzUMiLLjd1Z1EoBggeSA913Wx8ydFXfhaKj3Sj6jZTSAbEzAwPKBkQQsSii",
  "key3": "5LCXkGwkTvDQrPoqYjttDukWQWmHockBiB8n3nZGq29oNNJ4ika6yejkTXebpG7qwA29AiQimz98RQN3kAkvJcQK",
  "key4": "4kmsimbvgfSvrvkiYm4hxCZdtrgiCEb7RHfAGW6AL5fCguB8nhGNijLfgNggcpAuJbN39V8JhQhnNj6U8aqWMuwd",
  "key5": "3TyWA5gwtPwa4h3FSCbgYBLaMu8PLX5utJnSMUFRhGUXVb549NRAuqUcotR1WXhVE2oDCcVy2okpu24Jt6xEosMd",
  "key6": "3TSVvqAVGk1VxdNJ9NFwdNSaNZUhJDdE16Ktxnt8HQrcZDUZup38Y1AnZH1Wp59ssagehpV81PqDRT8nzo2fiKQp",
  "key7": "5EbxiqBpuyEwcRBWM5SoNzdpbmP2TrJcDyJYsvsmtsSbiFMjjbdsJnx5XgbkF9x7YAh2yf2Lt4bsCQZdowjv7858",
  "key8": "2u3cP9fr1JzTGx1ZeYsBFhD95V2DkMPSZyRCpxQWT5vRceUCCveMe6UmSKZEpQJrjtTaHQqhA672Wdbnw8AnNc2t",
  "key9": "tGH8MhXGcxvYDjavVXVbu5KKkGFGeEFBDJEjQzFndtV5QWd5Vv8NbaRQU4CnkKzkKgiepVmC1ARMu4TCB4e2xk9",
  "key10": "3DuvcqxR3i22vEiZiAP6DLdEhGcbtCT4YX2sbhHUpxohErN3dahPvgqrrvEYyg2TdkNfxWKhiyzyXGauQuw65Ycu",
  "key11": "4E6eEiLJud7EG3Epd4nK3izE8auysEVTALB3523cbR4ELtzEPBBKbm1ENNdiM1X6cmiSZnDUCZbNJNmkXB4PnSMS",
  "key12": "3Fzcamhs16VNnJ8stqk19epiqkBHynjKdc2wzqZ5ScCRPMR6jXCGThRhKofxtnPsvmFx9UMTJ3RgUYL8fbVeNGSh",
  "key13": "b2feFmA29oK9Yu29xjQjgwZmWN4cX4Jd4FpttdSccmeX7FWfUh2gx2gP1sMoenFamEvojWZ9SEdWKmq6BB2YCFc",
  "key14": "63Q7tWX46DPkUuk4BdZRSFswGQzZMCDdhKSo6k2QE9ENRQ6RNWMonRWpkCUZRB3m5jdg7UqaSJSrfRk8JT8GWSeJ",
  "key15": "2VZMFPRTQAUKbykBqKFvcidJo2TUjjPj9RPAdCkYGT7JtLcZNX3NT5ArRus1UMkq1gvDY9QocMf9rBrdmbXJc4uQ",
  "key16": "5Je5c7LLZBbDTR7sVCc7d2UCsbPkSKY8Zh7Tm191s3v2fFF8vEjL3u7aztmAcGg44XuBK3kYSiMUhuviFtATJt5q",
  "key17": "53Z8dT5SxvmMQ9xTEkoNfbKbgjQU38ftjApZnXFJmXb23ECgnFbhRbWEaNz15dCnWFRafLQcLTV8iPWaC8aNycBM",
  "key18": "4a8sF81pCFkjsGkwGGBnxwRJY9Htko8JioHiY12Lsp6oab7jRwEgBp18knP9t17qG9ENYKb8bUohSd5aLgeg6LN7",
  "key19": "4x64LegajbdZhgQR1YDVAK2YjxHsQy47p3urzLXPx9pVg7pnSnbQ5DECAomTUqKy71yJavyJW1MfTiAeZLTWHLce",
  "key20": "4HNqP1tcAp3Nz7D4STnEgPja1d1n1ZfGqNADgc817qQZpHkavmmkXaWvYzUgMJGmd6EoCZHoKCdPnKgXXuBrgRWY",
  "key21": "2q6fqKc2RcxYrCZYB2QVDuvtF9QZGiDzHXjsmuu7rFRRh4mezJn2A49dS8TzeH55xis4k5t1aVAFuGocLrjtSFn6",
  "key22": "ctxJxZMK3m1gQN9HekqF7VYvUttqkRF8EKwPQcVPvEhET4wUcupEyyPkyXv4pGp5eWHZyGFWgRhEJpY2CmrHwhM",
  "key23": "43Y5xqZryb1fdNBhhfUdUhwXNXWe2GafmVqaWtSii58rnu9sGDiXhjq23pP12a1EuddKAxvFyaa8Amhwyx8ovcnY",
  "key24": "3DU1UyjfeFfRiNQ7YtDWACWUWKWhuBy1DgWDkPs1PgD37xk5kjaeMugoRfxMjkHv9bgdNRhTePj5bMEuRWHcDxFf",
  "key25": "61ty1BgeuXQr3i6W4curqPiKbZRYHAptsWT4Z1EwwhKWLhJyDan65CdzfV6pFut2KcxDH3ur5ebzQuLok8AuLhmb",
  "key26": "QMLeHtfACEaZa7j46iE4nQcGZN5S1BnUYFc8ZM7LDJW1zFbPnruzEiRc95m6TERef7whn8LsPtMBCa3YHFappZw",
  "key27": "5dUFWpwaEXZoKemppqErB9fLZu5JCkQhZv1NqyQFa84H6gANVevmdmLWxLXSk1TyXUM2oWit36kC5hdG2MMe84J8",
  "key28": "MjPBqYwGrhBydsz8C95mCgPs3qe5r8LoZcKYV3hSadstXo8mbkhjXgvhA2ohbSvMfKetndpWFnKhtiEz9YR7iB7",
  "key29": "4mT1uti2hoz8p5QZ53Zs2JV8QuN2rwU4EQMGcp1MK3TWHnoWobrmAKKYXRbgh5MmoFYaoKEuXzbkCMwb2qMwdw1g",
  "key30": "WQJuaLwm6BWqtuZKTizSfSm8kksFMcygCRBT3dFx3CHZPBVCr1P2H2FmqUQTT9GKyFrYxYbniyCUsojFgq35QkC",
  "key31": "561sZgXTnpKvN4TUpvxNZodkKZxTmL38K2woMHWhYeU9FZ6cLveXu2Yk9R34R3DLVUebR6NMgVZWeVGWP42ZSmAg",
  "key32": "3xqoZpWP73TwQUcsLZQbK7aM4yS2rrrjUooovqc5sPr24NhtQ9dnoavJ67tppoMG5WcjFF9w9ZxjP51XVscEPMzt",
  "key33": "XYfdSfYh1ceoJG2DrFnxMTvsMCL85tyV3HncKZnz2rRdn6LoYsEnEnHYyvD19776MLHgG1KuzRzbt96yygjuP3M",
  "key34": "2wWzyVnUgqDuMJThVpSPokBuSSL9txjTKDcKe7qBvZmxAu7wc4GcwiwDTKiExPToEw4pfEpaBLBc7Wh6WEz66RYV",
  "key35": "3XMWXVfFnZYUyhMrBa4qpTexsRBMRogszpBFKDA9ZhyNu9uvzMgNqiS1NeZ8vPrMVn6mrX3VEX6MMrPBKAXNhkM3",
  "key36": "5CYDsntFvGzdbLdvvAtwUFYKN5MjhyxxdkHxf4ub85ArdSGTca54msYNAWyRurk8sfMFUUnSTvNbNU4ir5r7dRen",
  "key37": "47gNV6uVmfzggyVyEHhZZL2hAwAEubG3WuKWeGaKqEZocMdoDSfHHxRPNjnQr4B72nxPBmmkaNQdE965FCS3xozD",
  "key38": "WPGA7DheyKLB8wD29HcmVpA4hJssL33PWKtVzXqzJjihZrmFcys9sT2GxC9HdAdsGYk1u9j2BHw6y1c9XFTTWpK",
  "key39": "2zZi2weouosvgca5u29yHAKh1cjMXsrpUr9kWiTQME7cdsgQHabuy55KMM7jbohYbACwazMVDuWjxy9FLbH5yrgs",
  "key40": "5ndwJX5jygzDa2HFWWbYdmBo8NZEqC1wxzDoc5uQV6J7KEaLYK56piJxRgVTzQERz5wbJfZGmdw25PLmn7WF1V8N",
  "key41": "5DoLqNiWjUbyuG2JXVP5EWZ88LhE7GtxKyyENGLTU1LfffKwP1DfGoQrXaCfUWhjKY7TzyqXXn9fnMNU2LSWyFNA",
  "key42": "3tjiLj9PhspaMLKJfCPoqn377p6taMUpKv3fmWmactQ53ssqV7Ac2gnizooQSXAJbiu8x7JGTTQcSuGsPRDQZFRP",
  "key43": "3hgtX7UMdFjNdBmhPj5Eyc9C21FhEUTJgyGzYcdxQ6yGoeibGkAMLyuynVqHX8rxF7vchnQZJVvRasmrRgMwSJk6",
  "key44": "5vLbhUnqB4B2cR3ruwkQ8uvF59A3WvDDAPpb3vtQZHCQqMCcfbWzBC2jP3BGXqCZYDqopNcYWUo1a39Ky1MH46FV",
  "key45": "2tTpUkF6aCgH4STbskAcMoJzwouspS9MMEYks9TbFuAejiaZWBRGKcyRDDgSHGvJtEYJBfBqjBZuTj4LtwbpJTtY"
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
