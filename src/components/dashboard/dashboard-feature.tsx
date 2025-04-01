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
    "5eeHwcoH5i8BC8F3MLKsoBcAbXRres1hipKLKCxRwGPtfzJUzMRPUCoNSmSdtMcxCXreGKgHy3qHrhep1CogKg58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKyCWDFHWhoHZSNCncNHKagTQKuwuXpg8S21prtae52QpvAPePhhNXuvbxJAHdmgzmb3hnDZY86xKShT5kMo1oa",
  "key1": "3p31TK9gbx4i13Kk3ADq5TU98T8i2ktwmmrCwMstCubfYQw8TeXY5cxs7QuKfy3JiJDooxeFLoyKH8JRbMZ4arnF",
  "key2": "3xq1UBEEVsA8eotFDN6pqeHgt2A7fr2RaV87ViVguV37E8BephcXLM5qfnnFJJKUuyJToUZwYaBDHAXddzN6RvCP",
  "key3": "2g8jSe2ujpUewD431T1bBGLfJfPdTGkJytvJkwWPartekpVyWSdt1674U5Z7745GcNd2LqkTdYKzgbDtAPc7V3Tp",
  "key4": "5brTQqDHqB6291R25RVTCZvsAUFeS9fyepHrJgsRKHse4U1brDZQe4XaXgVR7wMx9B38Dh6tMYKERJrPjcxNr167",
  "key5": "QoCE59CvK8YmsgPia4CjsCjFPqywLdoavEf4kwPhsn89XHDyPZXUTwmdypy5fkc1QEgEsowvdCda3Hwmvrm7UHG",
  "key6": "cfQDFtjd8oMnwURdF9eyyHnP8av9TDVEQDqUtfLJ1fAr1qbRQM9qiH5QdgFNVWhXTgPYJ2F1XoY1PGzFiFoidRx",
  "key7": "2ocV2LbZPavQ59utgVMRvLMCoeyipEK7FiRP5zLGNwNRddnZwREaiUjQbMbCKpmBKoXBhzJ2wpSHgtGpkkuvikZj",
  "key8": "3URqYPUHrBBUgHr5TAVNU9gZ1LteCEUoRAd2rkkKCwEdawCa19sLevLWs5ZYhJCDbNfcu2gEnUogA1XP96NxPR9K",
  "key9": "to3Wm19mNSEW3pDkTbyTZzuxLiHU2rDGfsYhyyh7HfR4ZtXJCqzNeAnQdNob4rN3YQcYhzuyPX2af2EQWaFhasS",
  "key10": "4Us9y5kss33192qmUCZu8QpUHYiEbB5TKbuY93mKVpZjJ8YeWCYA3Q4zXEhyeoJH1Ao925buGSAC9KedDmnns6ks",
  "key11": "44zKebvAbuEXRWSsmDXfpcSf48ovnG5amUQVGpfeRYoJ9hadNw4HsasW5M6L8cRBX3zEY3pAvU6geruRhiv1Hr48",
  "key12": "2XaXtAB3x1iZLK12yUzVtavJHtSDn39qwwH76SvivuZgnqDRXDQLyV9u6waiNdRvXfMULRS1yBX3dm2KDnzjvPat",
  "key13": "ZCKZa2k6MfBtXHGXmaeVBB6eTqx9AqxkhKxHhbPBKNNqKgaoAQWS3QrRdtpxLXe9Y9UBHkoR9QWudstPrq56GPj",
  "key14": "5haaxYq6pPSUVUbSQtRZxteepCMhPKB6ZkaScTDt15XVRervcDU3TuyR2PxJMBBXWh7m9mimTE4rQ2iSAd5sjpsr",
  "key15": "3TYs1db72sZstW8LDnv1dRtQzs8nT4FqHyU4nKDqmftcRCdMJNYYr6VDnXun6Ukv5fzdWM7hhwjNhRhprcAGJriN",
  "key16": "3MgGVNL1m5vB6f5Fgfhruw1nVnDxArCBDPSWMN4QrvTg1ABkZNKiyKfSWkhYCqazJBSu3scAqdxw8ea9RCjg57j5",
  "key17": "21tkAdXPnaWCW5hqXRgvM9kkdzSAYfbCjDcmyePWUbui28yX1LJPvf73TVhVcNJWwoMr2s8kHoZ2Q6wvjvZc9Jja",
  "key18": "3boBNB87MZhXF92NenXJuuXnB3vwBoRDUgCYjGq5x21AaUDVE2r6rZsr63A8i9eabGGsT22p1xHQcTJSz4BNxxoN",
  "key19": "2E78XCQP7eT58z3xB2dMQBf9hDin1yayyy2Kys96hovDJSemboWwUr9hM8f5kYsk22P9Df2eMtuuZRYBAY2vUpjv",
  "key20": "3kY15sagES8vYMXViiZhZAaHUizVvscL8ouYUbWwqJmZEKobQnThz71frry2AVGzXCUuZFzUMvoEzTTkV8ymMw8y",
  "key21": "5KNvVR5rTniaZbN2dasmMp6h4HbGDEiYTRW5guFqhqSqa4mhmJSgcG8Ycbos8a4kdLCR9sZBth9DV7Aj2Kzyahg4",
  "key22": "HAH2FezvUufKbfJAShW8A2EynjusGDMkANDZVDPvjNTMWo1S9YcZasoALxSRBsV1TjGzvJDLWNyfjWXc3P1JcR8",
  "key23": "3rmyeBSHecGH9Mn77YZSMHJfswq1spVjGpd3aBQqiRG7WGnuY2jkiQJMfquWQFS5hsh9Hj4Z2A6XP3CDerzDk6fg",
  "key24": "4tUX1spwGdXwF6cuAgUash1EnmDtr287RefW7L3Y1Uiv5DYjm2MrUdF7jw96J114RkuvFmzohm77qgD7YkZS1w3S",
  "key25": "3guHmVVEiGEQxGgYPPq5jWFSH85Zdd8FXTwPb7R4sJ13WsE7f9KNk3jbTuWMk8aErFk6kPdWHWuPKEpMjoMZzw2S",
  "key26": "5Gw5fSdPejVFqt9UV62xvSPdHybSXr2HhQddUvvCLzCcPoGma4spt7c4cS6evVnBSLocsmsAi6bZCRNb7tQHxK3Y",
  "key27": "3z6ju9DoaguTGsvCa583JYR86tSvzXW5KSmkMEANkTPZiPs6vTqT3o64ZmVF8zKhxyrodH1hTWwuqUMjqQdpGr7L",
  "key28": "465ME9NWdbrFcshBR4FwjsPrdVHi21NdfGP5SkEuw6jihs9XhT9gWqoEJp5MZQQZxGWXi5zV8TmfuWFhk5bChTD4",
  "key29": "66YjK33SjWXkL2NN8ER3syKfyWTpLZ5H9kHe5Rb8PLmQx2sWc5MD1XZM4qMvvdKp4Qa61KKvhYmbSKRxx6t4Q86e",
  "key30": "5f9cp1DgZ3skzX95ASinAmyo9QoGjgMx7XjpU4zEGkUpu63kov3rF78hEpyn911e5rF8CY2qFwgJbbsBqS3kVRtR",
  "key31": "4E2ZqTgznKZrxsaEUfJ3LxzVE1eobzRHocCvr3AaAqu1s7RLFLf2Lk1h94xq8ojFn42ixLyP7u2jc4zpWZYgqqNv",
  "key32": "3Yp9b7iwa3sSfozGBBmqKuk4psYwe1yE4oJTHm4LL1TtVsNk9hzMnBeBAEDrWtiHXTDe8gSYHjGrbj5Y5oiLjEVh",
  "key33": "4k6BJ5dYkN86XUuTD1cr8pVVY8dpgAMvmZPUWmyGvUCeUfbmFG5riEiuHjjHveBY4WsqkvUahquaCDtQCPLcA39r",
  "key34": "2NSs9kKFHLutdVsNvGhm4FRemXDHrSAYxqAUbDmQCj4XU4rgo5SJSoGajzYKzNvxkvhAMYuDJS7L146RS9wmEJjB",
  "key35": "2utM15kgDV8DkdKyXuSpfS4co2oEJENM5usdALqs5XvoAUiGDbY6dDwJcv4sLUwbj2o9ZrHdUua1pMJjtfMeqhqe",
  "key36": "42ApN6RkttWm5MyAyPN6TsR9qRXhHVU7qKqX4AD3FJDe9bYwexAPmYUmuXmVxSremLiERHd22Zski9aaSiBEFpsP",
  "key37": "5yFAuHEZzubULoupt7X8Qqf4zymm3Ty1Hdvi6q69eRMEvpiS6omQBT6W79mzQtisRAX2ndj1S54kXMrrDEKpe12n",
  "key38": "4nAAYvkLRG5UQ6KJadkTP2GTWPjout4PVkxe6uX1ta8yh6B8gzPnmc4uXR1Y73ssf7jh5b4hipRjWmQDZgqJjJ2a",
  "key39": "4UYbdA9qKcdN5JTxfFuwxp7Pp8gncf4DFAT4MdrFUWYa9SvnMkUoQVHakx5brn3FxFV6q6eWJVcYWQx7pDs72ZLS",
  "key40": "3ycRdWpiJmsWEyvsnsRz2x7vNkGa36D23UCT2JihNYtm6VbTYqPV1tSTAmZ3e7By4tE5UgbtCXog1kwVp74PdKAT",
  "key41": "J2ciDyvapry8Wkd5dGiMvaUKqhHFhpgKwQ9iCFweHs3HSMPfvXCTLq8o894srKKPV9SRge6TAYJ2iwP7q2fHxaH",
  "key42": "g1AqMZokus7Vmo336H7iAiT6BtN82TN6JgMxv6Wg3ajKqKXvGxieXp6pD8xXxLN7dqrENW9wAfpCb9VW1tWaggt",
  "key43": "c739raEjxfwVn1XUhn7FFxzaP8T9Gq9gwS8LVbR9QbL4JbbzbSgxSdNGWTQETeb5QDYSms65RdsvpGByFQFhiQM",
  "key44": "2qkwb9UKJZjDSGB1xGURb3YDfhe8rvvxSzhGafwcc9BaEJ738CgAH3NXKcEGCkHVMPa4Ak133NtjWyCACsZ9K9er",
  "key45": "3k9maWob5aNDzNYUUBasTdNhxveCo1XkcRikQtRvR7y7s8h8TTJxPs6sM4UwMR7DhMAFp7m9Kk8CU7HiwUinkX13",
  "key46": "3s3HbS468qhHRrmUEzqK3V2KzGjz67oVhyHfZ11bUaJcRr2TrPrEKm9vs3P18JaFaWy5g2f8cyfz3EZCutNCniZU",
  "key47": "35k8Y2mAYNCqoJQZodWKfe5Ph5JNVdBJ6JCjmDhCmTA8cKzCTTAYQjNEWjuG2MgwvTsDUEm6rmE6H2s8SLx4MvmN",
  "key48": "3XQFUi14URanSX8SFdbtcD3GhFc9tirrkZXjrx2m5KTmtpYcTBd8xnTXSwhVhsLw9HCx5WP7LJRAgfHjnDZsHCWh"
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
