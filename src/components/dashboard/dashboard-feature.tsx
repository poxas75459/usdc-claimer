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
    "Z6pwQeLDJ7aaBmVtT7EncTRNUmNic9CivT2RBA2EXv7TD6pjzYPuKArgYgSipvyCLCZzfBqmBLoGyBAAhwSkxZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGLU9eNdN7DH2TZD9hxa4bCJiAHbDwsMtR3tg8Nhznvbhh4kNEpC7KRgxmGMjxbxhWf1qDLpHibEF1GvEQwQxaZ",
  "key1": "fL2UDBM2xuzNNkX3pTdGYkGrDhHdChTgdZUPfmcJ3XEveRWmsW9PwoC4gkqitPFfV6c3LduNG3kzb9negJbz2XK",
  "key2": "2n57mJD9Kbw3uJHBMeTxTJdRafQFg133Ztvg4TaVLrn13tindAVggSUeasMwaLuQUT3c6gG8GHKvSStJMzkMwDj4",
  "key3": "2Z8qgdmubNrqvBEw2Ejhfh7PRauf6qgkbYn5bRu3sdbfg6naBuNxVoZcA7wW7Bif6eQuRydTyzjBCcAiNUncvLTs",
  "key4": "41nb5LqmVSqc41SJXoeZdstR4ziG2pk2mYn1iXUs15AcNb9ULLibeBRk7vwybe25p6QpVmhWuebsakDSWFqcmbGd",
  "key5": "2TFKRR5t3kdte8tpAqRAjuAeeUSuAi4aNpxH235T7j4jo33BGfCXVSi1DrRFEDCuc7UafCcRFCxqdbfBNMLnrsdp",
  "key6": "4Th1oyxDjHAFbAWxzN9fwBDPW4yFJxn8ebNecV2tbBMH9xHHkcR4fRDYJtVs8Gg9D4T7AGdYCacE4tg18zyP879t",
  "key7": "DmZkgiiQWaejDwWJHr4jsNKcnyMrxqtYUsSdTmc1qFHNKJ8cueua3irPUHyvivTmtLGo7zgzTJjNK9JZNGv68gN",
  "key8": "5eURwymGYxsqCpkrYt1LEknoBePcdw8Ww7hqKFSfxGZcuH4WvvPYDLzMNKeXpqQ4MFrTbbigCsa3HKzi2MSnpzeH",
  "key9": "5m61uKraJyD82EbiFLEPjRRwBzMTD8FwG9LTHQ2usWYk4567hPRRjszXxjvm7dqNAbC2gYB74gh76ykMjvcjxCvn",
  "key10": "4vLUyop7f1P7QuWeBv5gcevRagzj4w2pkMRntu6MKTVVGLypd1Nf3WgPMmotY5VKDQLWmcSyW9jjf7ovdHT16jKV",
  "key11": "56e1C9JYf8yAA3xi8a2Y4yMgS73Z99xFTgCrexDaZ2B79MRMnCGcbo2LPMW6ksFeE2RxiDTdZnepq7jfvZevy9hH",
  "key12": "3gCgANUjQvBqi3xqxX4pgfEroGGwrgvPH3LEz7gdLWNTY36PHqGRPs6JbdRGFUC3CMgcRguA3qTbaCqxTnvptsYK",
  "key13": "4zr9ShW6xo47Cd6BGRytgeg8mqgaMsrCxdXqz8wVn1ukxDJjvT7dRiVPeoQMu3R6e2T6Z6ziuwMCN3vP142nppzF",
  "key14": "58MexVkjAGuU1XAJmpXUt9yUM5KDAFFoBnSX6ahwyqeKh68aGivfEXhCkHGAn1CukiCP18PnFU4Au79uXCcQ4dVw",
  "key15": "1PQFnD1ve5digDFEmdEKSVV89JEasbjqNLsDMi1J9f9TLz5ksT6G2ozhVR4pGC48bFaUd8j8fsxm6KXXfXDbwCc",
  "key16": "3QR1D4Lu9Dtiz8jkmsJRBTPZAARdC6LMgRLCm5BVqENCMKA5t1gMEik6hgv2KLBK41qAjFYwPH3MYyjadVLAiENm",
  "key17": "3wx86GNoC3Me6Z77rNQMK6utqHdCM8eh7pnEWt87pcHip3Bqy21ZbS2rwKioB6fsz3LxFZsGU75DJ88CAyEVnveX",
  "key18": "27mDdRCE1X6JLae3N5CZwTSNQeGHurY8EBUSd1RBK27KJiJjiPNReCwjpcsiHBQuS8etGqCGsvP4SNnuRCPb6YRJ",
  "key19": "mpJWTRwHgMWbqRaoMqYaef1zFqCqjSmeHhA8bzGef57FThGmGBhnQg8TPoANBLR1LRfqRbieBbz2YDfRa4ToRs5",
  "key20": "4EZLPeMSyR5pnqwPWSUQTrqZKkJTxNwEr4w5UhnSz94pnxaR3r6XUjDYS7BJ4hnAEpHv3vsVSqMTYxrM81Q3SD1C",
  "key21": "5jySUxAA3d1F6jwMMK2Lm6Zkm9fJJU55wm1GEyzgwdeUMVDN9cFnvWEK7ra1YPLdMnAEdGdfk5Mt66pBhURdTVnw",
  "key22": "tyeg5G11edhjQkuH85HQWL6TuVGxt7GfPjCw438Tkgh8N8yCxZuLxm3fqwJe9toMLi3xJ7CBKj4H2C1U3VXxRsX",
  "key23": "pLXdTH4uJdVAmEqmSoxssqemwP9nG6VUNSWGZMGqRXG5mkPKk96ZKgQwgUoN2mrAoAV15Hv8hEGFnrNc2HMkB9r",
  "key24": "4MWvysemMakXxPBHX5Rd743RH4xzs7qP4QpqE94SBNaXAxvZFmyZSHxvvpRtwJcNCyvRaEa8dTtziXSyP9kNFg9c",
  "key25": "wjFZUs4XQgW6bVtiapNK1TikXrrCBdLdgn2bihwFJGQghEsX1L8t1yQoZvKS51Dbz9QtobCnFTfoHQWCBx3aDDk",
  "key26": "47HEk4UYivgdPrvToefzcdCNj7Fi3JVshQ9J7QH9XJL2G3DtLp9QmU3hkPX2NaQqv8H3ZjiYu63AgBER1xcDLsQm",
  "key27": "5Zobc2Q8JCDhwzj6tX9G3Z4eNWpDHL5Nyinz96HFrX6sQjJ7STH6WCs6yBjeVwPFzAR9GgzwLW4MX1KZeZjokX3y",
  "key28": "9kV5LenVMoNs7A3598WfmSXy44K3vUpot3RZZbDPfRKvpF8aQW56AVBtpV3hvN3cPw4mvLKSJ9Di6sEp8nXrbBA",
  "key29": "5i3uaLzzfkxv72MSR3apJVKpyem14bbG4rawVnkvPzkB2jrKuthMQS5hPdVq1e6kaJtQy8FwVpwNiYxfhFx6bWJZ",
  "key30": "3frAf6WLjakrDyt8kXQ9djpVwvbPGkYfPDPoNzRTW7XgbTUoLiZBkkVkuWbX2nCpB84KbTpR2UiHHAgn639yGmdo",
  "key31": "G1RkA28i1nHswLeZ8vCEd3qM7EquBvZaXMmeGa96FXdpQzpD6kbf3PnMZUuUFY1ZUEcU52ddRFYDdmJK1zFA7bS",
  "key32": "7EEKY2opmA4zMeaQuGnAkAW3KubeTqq6atJkX13dYWstRVBTZgL1RHD4fnYTQrRUeTkpn48XmrDtcMYJrWMJrEr",
  "key33": "AcRHJiBJGba4FdgKc612DS5G25K4MKPwUhMWCy9DFjcUbAHMoX2UYy7sK5PMWf4FC1QGpojT5aGSsXdH61zsqK4",
  "key34": "q9nUQn58WdNsMxmb1avRUurKpUVMkWWVK6t4cVbvraYomeMiNJvMAWzfiMZGtqaAH9MhuW7c339upEh8RwyMpFd",
  "key35": "5ycjXXGRNMDkszJ78d9svm36ZcqoR2g7xpTQb1PjYF3apn33WmM9TaiuSgqTxzawD9uDxzVzDdus4na7yrpQqy7E",
  "key36": "3yfyx1W8ALGacUPi9ujHTj1eEgovdNjBByWNwdEoBB76i7431LdSAVqYdUx54SjhifTeRsQ6vFz4S11DbJ7Vwqrd",
  "key37": "ps2LWoFp934pzHyia9E26NSHJkQRvcw1SBSerBn5sTbF2FwEXVUroDYLeBkNoWWFb1aTTtBAKqtpLvuS1LyhJMy",
  "key38": "4ai3LXsEZn5sXv9VEZTPJoZ4NoGUNFAowCXiQQWSUQDX2Pzru34fi7GZhAffxngQNSZAhHKBbFKuxR1UJVfmXvM3",
  "key39": "2Hv2CipWmV6QP5hZZBciTk9TfZ7rTfRc2n77FEBa8y29CaA7Rh1M48bVQzecAvuHy8Mt8z7fumhpfB4v4HFtLPU2",
  "key40": "2YWCSe73yQnDoe3gZY2fg1nFU6f3yEtAqLQffxNbpDtSXPsjgc1rDMQyb1DWPUrN6NevbtzDr9u1BxxqSLRKa7ro",
  "key41": "2TxMcKLVadudt96gEtnJee7MUpNgtRBTA84DDR7RxXNu6Tqmpcnp1PDCbEswNgfWaoNyqAbnj8a5JTXb6fij7sks",
  "key42": "4EugX4CCmFxXD2jPXcReK7fFb3Lg6tZs4bFoCrmobJvQKJ6yg62ftZHVuxp8pmvAYS6mBjWzs1ogBGb1R9b58EsG",
  "key43": "4i6QSUPjw56BfTGPHHfJmpE3YS8sSQP33tx2By9ffEKh6yEdMxyN3pafBAZXwkYQjnnEBegyw5tcLwbgXgYz71w9",
  "key44": "4oVkNpjSNLoK9wEUkozWAHDA9eb9rRSNj3fF5UqSdAiaqtpSXagm4GXGrTatjVu3tsUCCxC3jCfrmKbbnwdSnNZh",
  "key45": "45KyceuguKAms3SQgwdigcsMdgMKBQrM48AiWd8jq7cKXSRFee34gtXbZwXowy6LeMtzcWCjLKASFSyZ4eJagi8L",
  "key46": "5fBGcyMapQrDUQXk9ocbFD2ZgTCgRXCa3Yn51nR8ZGQsnDMwBqTycCd7E2gnXboxyz59cvZ1dfuXEUxQAezpQ7o2",
  "key47": "1nkRfJiSy3Tu1wKYUg5JdToWhuogLJByEE7s5js5XUV6udgs76Gi3LcqQZXaARtkFemgnoWv4efCB2dEVyR5dhn",
  "key48": "31xaLEdCxma1bnKWUD3RuzpZivMdpADScyMgPpm5NDH4mgNXmCZvNphff3DaMJfg3uyyXiqCDygisHWPSWfvb51L"
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
