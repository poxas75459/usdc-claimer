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
    "2Pv5uahEjPveDdnDEt5izjCj2U3jGj3JaEqN4XNzX8VHSDtnNH2mpbokJu12DJj3aGujcTqvJqYdQcyvFd6Fs88t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L143wt9rJpSCmNY6cydaXJ1F5LhU4t6FhQcbnrexAGRcfWDrqgnHtFsSwJqhKJvSMGNeA6g6n251JbG9xzykR4u",
  "key1": "5kj9mxCy7Y11BAQB8s4mEguj16vS3wUCfgFNqpEzX38sTQ3fJc7Zbr812NUymw5mjZns5HX2bWasfBGhJQUwJpMV",
  "key2": "2PhmLnvDFB5dMfMmehtj9BKf9wLaDKQZS5bRRAB9DCPRnvHPmLMVDvK9g6UbdxfjE3JRyvwAVKefStBDKBEJgRaz",
  "key3": "562SmkRtnuj6ASAHKGMkkGTsrkWK5WTqAZsydMzZDsWVJovBLQ59sWfiXfyFcP5RNESBmWwurf9cGcLBVQeUXzHg",
  "key4": "5xhWEeTrvmkSCs2pSKMy3zzw2yA33eKtMwSAqhKRHcMEkmjpBNosYJTMcsZGrQKpVha3rS1focVkWtnM6YGjYcmP",
  "key5": "Zt6KhpWsj6jC5svuX3DUPDUN5PZcrT91p2tBMKe9xnvonsw3qLYEvZijPhyCC68Ldr5bLs3WRKFtStG9pEMC3Te",
  "key6": "2njTLoeFMBAMtLSugEgEDBwhYfuokK5xG4J9r7Yv2k3oEJuP1baD8XcdwJ4o3c3zHs4YMq87UEMmWUfsYdihWnUC",
  "key7": "2VMN4cbtTygRsmG4oa2kcbceLg2zJNfcTs7vo97jZwyyxPknJ162H3SzHE1ddwzadxsecqRuXvKsEqRxAwtR9kRD",
  "key8": "pTvFf4AXJbqEtATrTLa6rwcwCNS5PEgiut761Eca3nak6fFjsbtCtHqftL3yUfhcraXX3XLkfaY6mGFz28RjHFr",
  "key9": "3jpFktaXn21NSDhkWxbq5rV8NYx8jwU4stBxT7y6EgtJsFicATKCHLjxNxSbxc97QGjzTHTMwH3pVeWwgXA4qRoc",
  "key10": "RNgPvpz4y9r1opTyxFsGuuCri4Kjd1AWdiBD6UFvByrqpW5c3Ro2rt43WLnAju9Pw29zeuXbUV5DaYiQNq88fw6",
  "key11": "2FK6x8x1E8RmZ2FRvKtDdUQbmkWjKb7zdtmHe5VjnD4zTB3GmTmgMnWrANyUSjFHcK6QXFRW6it5V22AgB8cmn84",
  "key12": "4inUNv2bAafKUVdMCS2xzD1ba15aCFwmcFCKpWhqFRyh6QsPEbkT76mtmw8HanswHmZk6S9hbuWKQjQemtJeoy4b",
  "key13": "5BHTVnE1xvdK8KgfehsXgVknRN9UWxQnVhfLQ4nkDRWGnbq4kotz8adGskQzMBXYKJGzhzUeeUC3oM3egQQEXZSn",
  "key14": "2dG3jhbAGPk5KgQc6xNMRoSaGowXwQ3pq3mTbv4raV78RkdH7xe3qfYUxXQ5EvjhEVqiULJwdVotkzBrM8aNaNqe",
  "key15": "5cmngxy4ft55Kv4mvTB55YECrguBU3EMepj7Bj77W7P8wgnWt2aEyhz58nd4YYeYJzMtyAxSfqkqHomw55eCo1eq",
  "key16": "3boicdtwZYxcT7WcPBfdyUmZNAiG6W4umrNihktJ7SWG35NezLm1FsP7dxhi3bkKF2s71b4AX8nk3SJBpwJTFgLL",
  "key17": "388qiCo4u91XqxKyznYa3JqAcJE9rzfnpX59P2G9bZXUFJUZMbDbErKuzubEqoVYqT4MR9DQjT36EFraaJbyFVdA",
  "key18": "zfeLBtavfsGK5WxoYBNPDyytSaPQMsnfQ7Jw73NrGpzXHm54boxXzzPkhAbZ6bGweZnSNBwGwENBHosv6qoj3FC",
  "key19": "3zcdT5k5f2HC7NDC2YYnLzxfQMkLaAWnUNp9JEg71wnabtCPzwN8FZ7ykoRnhGMxjV7LARXdWRFcC74mpf71aKfw",
  "key20": "4ytTGKFUEUpUzMCAuKHjPgVYMfd3P4GD52yt9HPypdn8heR9fNb8MHKqY2Ci4e3RtP61hGx2BSreteFbAa4EiRgZ",
  "key21": "2wiagqKdJa8hz966qjfd2ggQkj35d2kwqzDfrHQBhHRcbpLH415vs7SVWZnXkiu9PyHYaoEn5EYxysEBhzYiL4jo",
  "key22": "47rYmrYhjrwnGTaAETD3iE9odfVMSvq37CG9ThMeZoiQ3ST9Y3r3WXXibR9RLC8Gfwb9pzdy1xmzif4Z64WxYuvw",
  "key23": "3U7n5ZjG4tiwtwRnuZjLAga4pDYdk5UkjW8sCDUFQ6P3ZvembfnqRNWKpPrFWt8FvbKriH8fPANrGyt8zTma5kZS",
  "key24": "2CEKfxnCVnf9SQH2SpwmWRSq1HPkHgyoP6quygmiNMMTqHdix29k3Xyyv1xmGZdFCEyWFgMvemUBkvEL18S3iCU8",
  "key25": "uLmQQ4HR4pL1GRAH3rM1gT6A16NZNN2KLxDbxDiQ4cVEPjyCLWsKNBHPKbWqC25UVJQFy8uJoGF2obhEzkARGdA",
  "key26": "3G8CDZBiRhTE5PaTGq5b6REnY2GDX2gk4PMV4ofEw8DxW6pNwfZJUFiSDkZEGR5M9Pqgb1QSk471FjtsYtaknjCS",
  "key27": "5mqpKjTSviiQtbwmRBCTqQxniZmrDsYmws4zi1Z7U8Pb5CoQjg8AzzaquxMqpmhQr4WgzxS21MN3zrsDjGertF5R",
  "key28": "5ou4hdjJD3Zkk734a8E2EHMiifgoxaj3G2JTtfduc6AJHGWpr9n2mrMgVZofHvFDfVX8ouQsJBWnesCByDPZofi9",
  "key29": "4VKwcCj3JCaWTAeBZF2MyQgrE1i3JAQPZfvurDhRi4d7bGQBxv4TzcBxSkEWsrXbvtxkQZSfSoYRknVKDRhbpJKR",
  "key30": "5H7b9fwxGo63fGhkmqQAd2meCkZGPTLEy5AeurcJKRZQZELc3N8v45mWmGvgG4RVWY4ex6HSAD4ZFkUUGU9cYSnw",
  "key31": "5BDXSRibiD4JVjFgLHvJSBPhzpXuuQzcMynDEEEeq86ZTpwJK9tFhkSe8ep8kFT9RuXfTbhbnHqPQgSJC5BJLh6q",
  "key32": "CGFBPr2y7CJkY8yE2fX4MsU4CSqQ9uE8RBe9opDH4FVfKziyazcjcNpb1SBthqpmR7NEYjJK85nKqD5EWNrFqay",
  "key33": "4ac4g8U9DVSqjDWMqBGkiukaqS1pj3XjthS8xSrvUJyS6iXVx2WF3y77KBRVchHbeaod45xXDUBGPsT9ndtkiZTP",
  "key34": "5YdyFBXLfMR3PeiVe1sLJGk25BaF9jFunWrfR9XJjR7Etd5rPk8HYGyr3dRTdxNnpixpUhhucbgMtXDL88svdFYJ",
  "key35": "2nQsyNTnRh3dg2zdyXcLsWBASAwoC9yz9c5DrCpLx7mkv5v3rcSvfA6M2K1xesYPpJbbVxomwSUAa5KnFpyjUqa5"
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
