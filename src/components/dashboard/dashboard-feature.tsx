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
    "4xmUbrez5QrRAPJBUKNYBAjBvQBHrSmggCaRujdRiWsFyDHKro6nHYa3caV9m9yVkVmtfUWsZCnMsUnq6jLPfJcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8Xxq9sYZZpooFUdQiAB97L1L7DoqnYsMes7CXjJF3qCMrsRBYxX3pQKppwXZ9GqSak5aiiXVmHDZzwFcpxoSqh",
  "key1": "5Wu4Jgzq72N24P5oPdttA4aweLpiWcoXaD4uyrXNboJ9oXabm2oNpjFFdHMgmrCtucc8QchURmnxcgwf1r4pyKqG",
  "key2": "8QtUAqMsAmaEYbj4Z4JGftDsePFTbuFqJTdVnPX5gtTy8eyVxdLHsHRdGe2EEwYEBk6u6Q2tAtn5pdFVgFXgVZB",
  "key3": "8WTgyFR5FoVdx3JSGGnwfZuuw9kpHKcE96cJ4jT6TiQKJiPQ2ZYgcTsUhwc7E1MJ4gbRcQi2oHaS3eGxqxj8Gwz",
  "key4": "3jkXhJGGPYSNz38cMKKNvwBgTrAXJa847LZjnFHK6J7a611EZCZcMxPAFXZn6VYhg4TxHxEhpbQSaG29bETpQSxX",
  "key5": "4CNbsLfzHUzdhHEeWAomqGd191qpNik7qkxuvmr72R3xskHt1ZCCXHovwMBUrEmCiSKYfAiC5tUR4a6mF44jCncJ",
  "key6": "WTCHxBG3L9fnpeMEGzbmygNWiYcnHn9aDwWvu1yyLcvTLeCLvtuBxKzcgTvLhPjawCCn8PcgtVdTiJ5Q6XDu4KP",
  "key7": "5jMZmaJ9XD5JT4pk9t3X5fM6CznZKLgCfxinLKMexZCrjv1kUNm6YiKAKfsgED6EeaDkRDPcL93FuDaPVfZkQjLj",
  "key8": "5g2tPQbtsu8b5ct4uuXTMjL1VSGqRDUUmzLpunqburU7QKpMPhujxK8Pt9wdT38ukHxZeP4Ak4d5YwJcFdCpDpTJ",
  "key9": "47RsFwvAU6J6ra69AikrP9RqrshLFc38FQ4FPMBCdVpDnRxrHMUUyFVcsu8HFcgKeq4syBko1gZ2uaftujTN7HmJ",
  "key10": "584oFSpUqGgauRvgC9AbPhDaBeMFmdx9dDcGnEpoeFdnxv7F1ZaJ7US38QvYfVaHRCmF8WjHTRzeW36kiiVcftrA",
  "key11": "2MuPLauchnhwphJuGmTMNwqKcmm8j3wBFwQgk7SJW3LP7k9wQsYLu1Q7MyhHPaHoqH6SxJEtcL4y67vAge6Ww5QM",
  "key12": "4xLx7YK3V5ikQskrFSxKv2ECRS5aLQRPzVTdTQWK4WReZdjVERLFYScvRK9rS9BYvemeGRSYvusCy14sftrejQoA",
  "key13": "3m4c2FtEM2bSVDK7aa1AxzsvJHfaArPHs8NKoPsY73osPh5VwVt6NFdvBcrAz3sHRaK7YJ8PcJHL2gd4tfYWnjYv",
  "key14": "2UBt4UFppGhoMTPNzckd5SH5513GjHfECrSseDSAqopDw3zbfz8Y9Zszgh8QW6JQdJSSbBgPQHRe3xuXWAKKPM8R",
  "key15": "3kT98kut3boMjkq51Qzo5422TyVhZngPTMiVxHfSd63oMJsdH72vtTvu3tqppsSFrXrmjRPNJYbpociXgArhSu9t",
  "key16": "3YMRd4PhQqHtdK56K6MbBZ8StWCJ6DR9d2eu5PEWThjUQ15euZFtje5dAzWPpucSjwL3SxWpBCFUkV4treEJSCLe",
  "key17": "3t3nPBTybDAfqV7Z9F3Z1tX4vzHwTDDZd5ze6rb5u82KPyP8QW9gnQQMM5bRn2u9YuAmHuASd2UjZ3hhm8Hc4vYf",
  "key18": "bU5CNcqFqJkT3iLKvSox1LPP7JuGZairxqFG2c6gRPx3DdLrUyMTS78wxiJFB7ZLxhsNttuUM6RScfx32zV83dq",
  "key19": "2t7WUVuZ8ZxStinhicVvvX4xpQNBtzFMHzhJqmXasp1Zd3CBaxfvNZod2iCGEJhaFLhHSdS1afpBSHVNtr15syBW",
  "key20": "KbLVqFkSkAKMZdr99HrkMVWEeXbA5bk7CWs1WRVy99svfCm2XGWW3WYPjzGMUQhQLYF1nUgMz8KTxBZstrh5wd3",
  "key21": "DYR1EpUjDoTiZZdoBCXWu8Djru7XocBaJLkWHWM4nUL2G9qLuoPVkG6YynkXeHHG9Qbm7XfzKPWGYWyV81qFES5",
  "key22": "4KbWVjpuDMov46oGtJ82eRE3KgPdEA8uC2Dt1WrZC6MmERN8rLZgr5szfxT84F7SCC19hYW2ak4dVinodwzAyujp",
  "key23": "3mEtKhqwYaMNo73mjJogA9fmhispyU11cPz1cMsQ4kebkrLQgdPR5PF4X5sooNw4wTymwRznWbvA6jSvDC9UnLU8",
  "key24": "RGH2bfRfzKEJLNosih7rhxD4NyWVDWNria5y7TyBjW14hBwjVpHvZnAFc6dsfwV3ADLjxN6yY6Qb7eu3Fi1YCrj",
  "key25": "3wr3g8uhGpdR8TCWDaYWiJHXUBewvoTtqvDQaTSdQc2A3ArVatBP4NqxHTK9CaLFppw6g7u5QhtGMjjCrDR1Usth",
  "key26": "4EHZXsuMDtCGDRRF2xFpdLP8J4wzoDg2sUiKmeZUQDDtg76ziyDAjAe4morQnhbx4UCxM1ypau28B5b6KuCy8b66"
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
