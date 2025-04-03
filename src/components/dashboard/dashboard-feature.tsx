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
    "5qG71JngX3QE3wSTShADogaPBj9jGkzFc1hmA97pB5pdwSVWnjGJRxd7n5yPReATzpGwM2CcmN3JB54E39FGEa4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQSDgUPj7Dq5p7VN9BcBVW7YYU284EPnNBB2Kdfiwh6MRdanXdy8p52f42LvQ1aSEXntR41D62beuYCiyjTG9h6",
  "key1": "2RZvgQxbpoRqFGuFoXBwh9WDL81aP3w4emiiBmiwYJhcD6WJ51qEfuLGDNdP7EMtdc6mN16iL9x6EYEZA4vz9mtK",
  "key2": "mtjW3DavjhBV18vyxaAN2XzW2Dbk7yAA8zazdp9bXTdNqxyL4ZceYq8Zo4bKZBmD58fo1ZK9QPSLNVkeE2sebkd",
  "key3": "3cnVDt8MGof5vkba32ndVPYUUUiSemySwds14Njc8yfsZnUgAheaT45hpjK2C5ViaKpopKiDBApwbZx7KqzQrdnU",
  "key4": "3GcPaK8dhbVSCeVKqXbczSSedtK6hUN75G2WjRjZrBkrXfTycXcgvQwRUSJioiDU9aa7GN8avNBZN46LQvegTNs9",
  "key5": "kRDqAkcbbbfoXpTQRTTReqKNAYnqQVYJsuWhq9iAmwo6E2aTUGYxekcGooonUFLBFM62uYgb79PSK4RkGUq9TVv",
  "key6": "2MyX1RuoZE8KdTDR7oz3fRYtPDomfUwu67eM7RgUqrYSudtineobjtYicWG4VxJ2BuYZHZ8Z94e74sXHuJwg54VL",
  "key7": "2VH6b3Gek67KWyszJJqsGEShd5rRCMo8i89233rGMykzKXF3ydDKPE8YNLXCr7YLmdndGos1ay1YgGHL24EgRUvf",
  "key8": "3g8dGJWTww92iBtpHxUarTsnmh7rKEGuRKAmRCoP3TT3hyzo6GuwVF225DYhvJgPmmAAKrvntEnPZGfBviZr8Vuc",
  "key9": "38TZVbn6Dzeo1ByrmSRzh1uNMuaX9kYy5us1seCu1ZHrTAbKZq6vFfuRwausNmNAijQL3i9Z86jSXdSJxeeVwfxf",
  "key10": "YqwUHPCJX6MHfwEteGnwvLXvadqQrf1yfdAt9u2mgQwSVsR8XrFdNdPM5Qmen2s5MafXnqSXPyfJMpmNrxwCb38",
  "key11": "2hubuUfnQm5Ya2Yd5x1jb8uFScg73vSSYSNjRb3iJX1cnA2Z4cEzynXiXtpTMxWgi6o9qWPY8GGwyWwFuFbUhT3V",
  "key12": "5DfNMhCn5mHrz6Bt1SBCrEFAmhsXyug7QBX8gkVzWuDhGEZ6zK4ri3wczU75ZrsogG57z8YTqGv2ojCt7zuhEXPB",
  "key13": "2gzhYwBMwbLamrxvgawRX5uEJJsWYopABT3FUUVXLbLKVv5yoBRttAXKjyyCmsePSWLEGrve6TAXajojNh3URkHX",
  "key14": "zqNyT5UnL3uZ7sEVRznu4MD5A1TyLtACULc9TisssC8JR3bhEPQjQ2vsmoPfopae7sQusWQPbKaJJJYY6rLTF7R",
  "key15": "5Dj7VykfcyyvQSNhf6JwrVJKMwyx1htjxxgdC4yGKLzhn6yKjV2MpXtu2ESQSqu9TG6Fucn7rrZuA1Q4gRPDgMHS",
  "key16": "4gV97zKgVugTNDzoLKEeXMZkKiJi96FPamiHDSHvMz7BJAQbxnRfpkQfXzP7QHbjdd919bVkNDsUttcuAPruGzc1",
  "key17": "4wYHmEqFbugT5uVbCXdSGRk6WUSSC1fWZZDXYsKMWtFAeUdUeXbTYaq7f6C2wdhs1JXPzH6SxUtSbitg3NoL879H",
  "key18": "YVcR2v2rqFFhE1mZboMKkrd1Hk9HsiR5T8bWPFQ2FwG8cAEc3k5yeMjVFrTsEuhaNoJGnrHojqR3feHzQP1r4AV",
  "key19": "2HpCSEYeQvYkWeouQErfPXT2kHSyi6kGeshvjU5KJ5sZHoarpHGaMjJANCYdEMnwecVU2UBHm835TdEohvTcieuN",
  "key20": "2tuYEBKV86nseZxgFhQs8xUnERxdvHufFgHv2VqH8JvnADFtBTGP3ra1euuCVK4cFSKBwBxrQpgT6pVhurwCX7P",
  "key21": "3FonHraq9nsM7DPcj4y5AXdPQsUhayHZb8Nvt9ZrY3R9q12zDGmHMYgEBqxsCr5uiyZnijCqPB41wuMpRvvo5Axb",
  "key22": "PFq64aAN7gQvGqyygcYneufx43xuhTe58KjR7pPgWYxZaoGxwPQhhCbsRCGwiGFVEVX94t9PABSvSyk8ysE5J4v",
  "key23": "2XDNtKZvMGms3TqAryDxX7g2Qs2FumWquAoa5dKXecnwp3RFR9C4J6ep1S12uAon4D4vjEqxPt8uD5eXTUu3gdgT",
  "key24": "2ZrBXxr6npCAKHhueoYGQctpUd2bbZ3KQTGT9tbPGHLwMtG2JqZmXMbrAWNijipLVxGSrL5fH19aTTjvoedAdpoz",
  "key25": "64zTquvjD6y1dRhBgpRTf2TnjXhXyTtawXcAwvXhhtGpHUZCBcwdRjVwn32NcbYeBgU2fLYWpdH1mamuSZj7KXVt",
  "key26": "3btFq6cqi8KaFN9aWLXF6cdHFBCisC9iatvFhao7AQXhqrhSi7eTe6B1rSAyz5fqB9sPTZrsFyp5gkySrf34nhVj",
  "key27": "3fUVJpNJpz3CgNmgo7wouQXwZGf5GnBL5TMxeMJmZ7eZVuShgiwX7sC3zNkMmH85sg2MvF6zKX53JavU48gcCZwb",
  "key28": "3SYLzSkBSaGhwEY2QSbtQmUN4tKfTeuto4Z8i3aRSGG9fswGszRUCKCnMgDLoyRPBCZ5tWgLPJBpUdfrTuAR7Bvq",
  "key29": "tSjkMGJvdjirHqYEH72HKyDd8SNSzAwo35h1vLZzoFvuKGW3KpbZwKQBYnUAURYXDVDjeC74hR6K8fQCB5JsDFc",
  "key30": "5YTNZJrZgRcz1SqkMykQrLcgEQJhiF6ns11j3n95MRC7MYcoUHxfyuv5WuKMZv8F4DseYwAaQZLPVrmSnYXFERuF",
  "key31": "5spboP6cui6wZTVKVYRAqBX6tUPi3e57xa5mttoG6TDy4aKT7HsEvLRr3JhbwpVkMbgApNkPo2B4855Y58XVGR7y",
  "key32": "2cw1sSR3a17vBQqrDBf9Nq9JXNz7umypGTbedWRDrtFVGPndeQvFcuidkdZ2tnyzCs2ac9c3K2FVTUVFe8AMaNCe",
  "key33": "GuKAtPf1d2HdWV4Kh4R4W8Z1PtSz563UtpgtYyDj7rXgKbRVLepBHLWicVj6arHQcFy8ezAg9aEmqZCBtFra2Ju",
  "key34": "5k3Y6R6poPZdVoZC71rtGSnupnedXq9TPmSyyVb1cThLPShXE6A7xjSZCpBSkb6cNAs2S1UHpcz2sSsdQ2YujZuv",
  "key35": "4JDAgDGa9TYypFLMLAz6Rdyys4BbEcs5ZLtowHG2HHGt3FD7rwDTERdhYTXE5fvyFnpKUS4kihCt5QB2SYqFXZEg",
  "key36": "3Nni5tWidwDXYgHvDQXQBopLpGqQUooc7ZcWDFTssx1Xpug7naWWyMZM6e9LSuhtFfYkB8g8eYzQokUKsgkRYeSM",
  "key37": "2fSDugCDWsvrkYWai5LJKTzzqciXRfPUqcxYViZUET5WwMoMqytNq2KcnygkMxJxBEyoh5qBtiR75MsEs6CfFrZ5",
  "key38": "4AawW973nva3MmMcSWYrtVPNmpqiqECiEFT7gHBHkPUViLKwv6kkB5oeyMk9Zd8SkckXecPQwFjvWYgYKPTouA9Y",
  "key39": "2yatuJsuUMqPHyMvN3Rhcb3jNm2s9oUzYQ9NiNQFeewej2TAS56kYBxSSNVtthk8u9K56bLPJNRouy2QaYsLvkDH",
  "key40": "4YErB3Twep3BsjCohMXw8rFdkiDuMKPKq14RAM9VwTK7CLH8Z25c2HeYbCgFXWKnBN1PxJmv3jLLXS3PXcSfhBqB",
  "key41": "2Jw1CHd6FVoYLXz6kWh33HWpdUMenEBr1WZrp8QNH76PzxJUGdt49juifvcYoTYjrbW7A2RPYMJpQHPpNP3JSpVE",
  "key42": "2is7iUwfsJd98in7AUEdR1ndacApdcKtZj4UUSZrnqEYHvSRE4w5o3LuauB45FAE5etUp6fV9PhKyQatLbZ7J8XB",
  "key43": "4hHDwdWmvWBzpmUzeiXhww8Fz8JpLH2EbAFFGW6y5hDppWmAcmHmhwApDxDPfwFDNMwNpG3keDQhFcr3QYh4PxXK",
  "key44": "MRrkYLL37EVpUVHJSyCwRJgUFwUyW63Z4X4NM9Czu5GEd3nY4KfF1tujUsgnXvBmrnhTjLmTjhxdCn8GbwbvjJX"
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
