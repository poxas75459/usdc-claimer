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
    "4tK1i8pVVkNSX6piJBvL89HZPUmrV41bHCAehJbCSxhG6ypkiZL6dU4WNR91eKWZqsDMRBvaQp7f6Zug3ARKFqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wsp42CBRK4JBTz1Gzf9a5chmPDyyfaxkSMCB55p2Cw9sM7EQtQtLonYgQndgczdDoxqi7HJVYH5uu1QDf8mFA8F",
  "key1": "3yEcFPbKpDJeNa4QR7Kp3BS4SYU4fZRbx1PXiet8K6LLVq2H2m4nKm14xXutYabu1qVGxh1r6io4quL3LYaLUZyd",
  "key2": "5QDJQHGiBznkUCVwS5GWq4JyvuRUY4t9LCHCUspffHuiDG9nKPCcH7XA1QcSKC2NyrxDzz3aEF81rpG6CHHHifGB",
  "key3": "4Uh8xN7NszrFRVfvHwZWinhndfyqdY5xqDjzdtNbqk5KguzMifMqsEyDVfKZvyu4pD4xeHADSR8MRk6dkiKguiF5",
  "key4": "4yTucvRXmQpLRUXDFYoHM7VCe6k6MRkJVkiSsp7gLHBLSfShKVofg5U5888QtYFkNAVKUpWWbuBmC2ZipSPVmLAZ",
  "key5": "2APRVHg5HM84577r8byN7o7rXvLrTKUdcTyyjBacnsxSbCcfUurZzbdK2Ch7LvoxsrkrNSYEKvYLUGo9YRQtUAjN",
  "key6": "4ou3cReRqs9PVN9xnLFueJCYckBbj5BsXkHKVaNLeqx3cv95cfRkT6N5VBmFSpLM4pdcSHSJHte1YM4tWqoFc1Wh",
  "key7": "31rGbz6xFDsNG8M7NGZ19v3nCSCNECWUtEtG5Ur4oEbuwNNc38hiXS1H9u3LcXyN9ehyv9kzkHpGPk29wBaACRwS",
  "key8": "2fyouTrfNFCaJ9QmRcvbNZhuCSHvcX4XpJqUFUerWjErS76DZrybq7HgxNCFhRMf7mAfBfHHtpyiLNYAC1KepM4z",
  "key9": "4YVtWkQpjDQt6Ddf1Njt9r7cb9kcr33oFGryvxE5GTFt8CHtvw7vHjF5Zz5xytLpWCa5RWoDwSz1BPxQqoHT1amq",
  "key10": "4LNSAyiUqxfTSG476JKvcExZh7HnKoeWhpBy16QgkkoWacyJkPg3csKeVPypgWqwpxwMVKWp2b3zXg6SuuWRxSR",
  "key11": "4hxxqfnbQ7Uj7HipowLrFNN8y3huwDANKYeEVmhEMLHKkCfY1jzqgv6NRCmGG8s1PmbgRaWLJ6838d9WfGjbGVDN",
  "key12": "5aVgbWJfyKF6VoePHi7ACzSbQNVaGdkXhiABjXN4NDjLoraRLfrtAj13WSYsvudC8NRb8Cq4v4RCFuBmTX1fU63",
  "key13": "k6YWmnb89J24KS2bHiFH6hxneqgkYARj3Naen485FmAXg6AfDg9TT5PyXofs66m1kPmGTfX7cRXfKc52aa6U97e",
  "key14": "3dnp5EEeE1htqkG49LGj4timuKvaT1PfXMyTueGxbfwyR2zduaNh2kb8q1QQckTg24TFQaovZypWVHcEp2GMQ918",
  "key15": "9ncVLoede21Y5WUqhDqHsMqSAAH79jdDguvScG1XrtYmzm1ZXjixWy4UxehXnubvV6cZ581iobRevD5qAFhzrcF",
  "key16": "Fgu4fXsxEo4MgXXhZqRByvrdCcK527Y2icggUGx2b716AjszjyvFFj7mjmiaScVamSCmL58DBXciP53QeEL6KA3",
  "key17": "5tZC5Cxdef4SQnHttuoEFUrTpqw8sRX1yrndFDUTL48jZA5E5bPA8Gb3yoNuWFh11fAKWBQRtLtN3dQyEKg4qVmJ",
  "key18": "66hFRTrYoLBXpYV99kEKpYVt3p5LMyK2wqQbFWvAcTvkejwX3m6PghMhFKSeVwKJDFz5tVKgLpRwxMt7186VTzqd",
  "key19": "3R9R8vQVMEEaPqaQQiz1gDHnYHAry1nVku1jwkXUCgxgSgzjvksDhFYwmW5viB9UQ1oSbajC5j7kdxP7B1KyLDUH",
  "key20": "RJYQKjzrVLK3r9VizgwxXqKjQjyY3MMx8qGvLH4PARpkqbchnXPKP2Ti3H3vqy4FyXdbG1n1p4YAdjWvjAArHcs",
  "key21": "aj5CD4uwnjvMVWuhxS31Wsn6qr3rbKbsZbvv2KFpQ4FM46B2W5Vi7wmPD6xcbmhcTcWciFTbT26fh4ziWnHj4pM",
  "key22": "2xAPYU8jjmiF5KyJY9wUM3uDf6Xgk2e3WDtxzmS68v6jB7Fqab4vuNqzjiL4fWUmK4DVywM7dpY39vf2ioG7E3pJ",
  "key23": "42o9DpsfPncFYD9zboY2jq4Mk3kpThPsjAp8Q1maKUpLgcy9Z4jNGjyFRMN5ZtYesReKsHPp9tHucaoc2Ure3yVD",
  "key24": "3QvW3joowc8jgkFxvDsZcMoerKPhwhqW5FnxEwznGmH3iVRbpVXf8zazf3mPhXFbv6wroyHGx6RzhHJt2Q6vXsJN",
  "key25": "5yhWpkqB2i4iZFDfT7YAzHxfj8oB4bojeeZCKCwE9DL5LqxoQD7FQ2ir6BFH9BboxoxVJYEi6CF1hHwBpMPr2K1W",
  "key26": "AbniuD7HbucdLzrA3eUK7CCTzmHAsZfjjyssuEtt4pAd4B25EkgJf1DErbbnU1u8G9wA1XfsjPzDKTqGChriUcN",
  "key27": "c6e3tcgM6zG3JLxPFTZdnSnTmiW95o9dQ8PvkC17PAsuDcFkMtHFtiZDBZaqu1G6ufLTr1ukA6SjiFFNiNJcQJs",
  "key28": "5yh9GiiVw39iYFpPSgYi2yqPaHpFMRgPSuFAzWayGEqquq8r6MxzjH9QDgxxANnnVvWup5jeX3v7wAAEWxp3CffE",
  "key29": "4wDgwJpApQsg9sBdBzzfGLjjqAbqpHgBVT3HtisNVrR7FjfmCibs7A4H6yR1aoAa2jX188pzErYmn2VzjNqpE1mh",
  "key30": "2SPu84dK8iGDV81RSVgru59vuzKsq5vPgAzS7tYtEXhKHVcnFE7fnCUadgNm6RbprbPX1Fg7FkkPghwsE2jCJSmD",
  "key31": "4Dx56KA3iARccQTjDwxdNoTwizPhGz8fFJ6trgZcYaDXJtWatkC4psgT9SbKFuECzLjPrkQ3GkaiWuYf8QdtctTG",
  "key32": "dV8CJNVhbrR9kF8mNsJaBtqHLszhKoJ62hjn5MRdUyjPnd4MzhB4AUFyyYmxqSW4s7TQyA5NbMeYvxap6ggcLRt",
  "key33": "124sMqnDwSi2wsCz68RsvX66YkCFuJL2tSKScDfkRj6wfSA2JxCVpKHwfpPdGBTxmyp2UFMLToC6hjrpEMoLGFSa",
  "key34": "5SjZ6gttf2C66dAZkndCLppHfHH2WAZeBdsbN8RoZw1BpfYcTj8z4rnWCSwEtcUbLuBas4KuyRhYKoTadkys16F4",
  "key35": "5DfebGXYsX8LbmCyrK1TQdrR34cx7A9GqCKzuKUACj7mrt9jkaPrFRybN2dWFwbkPCrP8GbE1nSooTD6w1BsA8JF",
  "key36": "2vRTNZMDNiqebpVZMDCxgJafQsZCfunuw2sgJyW1GWcLrQP6dXniRTUwpPswVr1waw5qBD7ZYFLqwTK4eVHSrTLs",
  "key37": "4m1LoqqgPWo7XhMA254WUjBDABvqSGz8AsA78Ufy99S8srLDohowARZfoub4M2GVPinxNhePJM1S35BzxKGzhcRb",
  "key38": "8ChZ34SkGU8hnokkyDx6zMJLgt9ZcKfMqdV3cWAw9TzoQf5yLvvBRnfgRpAHPfraL4zEfr1iUmH55RQYRwp2CL8",
  "key39": "516sawpKSUmbY9DEgdU16Jiw8NEv8fASd8evgyh8dKS6yDFbNg87iZP7BNxQdxx6W5gMSJgUQTfSdQRc64y1Paam",
  "key40": "44XfPUeXTDsK6xK6YaVRkHdrWJ1gewCtSHxnA8PK6NKPNupBq4WQ9ZgBrzdrHiaGwTd7qJH4bM1pT867wTkwo7Je",
  "key41": "2559tM4stPeqNXZRGZ8j6RYN6JfSqw3qsmgdUNVVBe77nGVssENppp6y1LfthgeyPzYLBcW4fVHgBg7tTwMtcW8J",
  "key42": "fhYt5Lz4w5j8qmiGCN9BfZtELLf8yikeeGJubyD2KAPGz7pSMXdYsNWp4FAfwhhParQ6XBZhUWfXyPGBs3VuzWu",
  "key43": "2xBbEaQSi8dfyCmLhGRgvufeSGYngoz3rcbR5vv5CC83oh5JvTU7YgDtmpSn7msgSkc99JZajEL8Y876bPjWd5aj",
  "key44": "2pKLGuN9NEarf7J9ir3LPviCVv8Jq1B6H5ajuVK1gxdbnqAgzAnGWFw85nhrCGnVZVnBYzSy5w4ZUrsdxWEKcYyA",
  "key45": "3WQ2hfVVauhYxMnXhxxrwr76tsTVyHVi74sDbZUdRJoxwypisuUMF2o6iqVrdFkbCFUprkjQBbYk8A4zyi3a2wMW",
  "key46": "4Js1Fs3imDiVAUEtXLKyTny4SmARArhz6fYFrPTrZEgy2fUEc2PSp13uSSKovP67KnHC3scyv4s8P47drsc7YJxV",
  "key47": "4RKEoKJZFeCq1G3sLWh7GnTgrGARYA8LUycDEVoj8diHh3Y5usLBBaqazRT6ThD4CQM9h1goNNMyu4VuQzZ9WA7F",
  "key48": "pqsmbhyvvj6zeNEkuSxhhRCFLJ9T6W9wjRTc8USxgZ966Ly94e5hB3Zpq3PD4knRCxhxkwwj3e9fXD53F78FYX1"
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
