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
    "23ZZ91RXY9jPb1MBQPr2r8uvNZ7NE8K61ehcGi68mo7dFky9SiBqzFs37YHGGbxuxJNPxVTb6NCPwq1G2HM5VAqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qz3gZzibFn4iw59RADpEh3VqMxsmdQt5DX3S8mFtpGN3M398Zy4MZZ3Nu8waup3EtFB7753YZ55Cx8gyz8mp4fu",
  "key1": "5zDKkbZTSWjcUbN96cYmWnbkvhwptbp76XAr2adRcdB1QboeTjCfvN5TXuakamCMaRnRdSvrbN4RreP4A33BaCME",
  "key2": "4cZmBuDaUrEXWpD3udzoCL7vM3EcD73doKuSD4bMojGq92eZeaZNzMe7WHg97PZRBfyyCa7bupm8W7J46i7gCqfC",
  "key3": "3Qr7NdgA5mCvNSRQk7MnBQGZoY53wNVTwZWaps2XQoPK2brFb3GczAwRRMK5MAF4XXajtRzaexBX1uMwBmw3sgg3",
  "key4": "3nhbo98KarmCVXsdFALqrSbb2s8frRMd1QFTwuumx1TSqVTw1kgrkEzEQhQvYzvbpU7SnG32fWLbsNjr3zbWVg5T",
  "key5": "4zVfdNCV3Ub2Su1D7sUYL7a4EcF57fsXhHYYGGG1jy4or7aLN9jDm3zLcAKVBG4QZiaibBEWaTcmab3CdT5yhKXD",
  "key6": "4iDoQLDkDe6zApJ7DeorFdMBEDCs3UP7DiwjFE1hSr2NmgQdvpnsYcjuUSDJWzaev2ecz4yV7U7Z7ik8uZvPRb4j",
  "key7": "4a1a4DNAmNAN4EiexmFuN1HnG1RGfMgRbE2vXnoeXKaytvL1cEz3dvbxRfS5jLaoDWzGsWPMoUJVsEpwgo6XSCS9",
  "key8": "41bSmGdQZh8mVTd5nqinbDLVqbF4SGFtUBcRdGfrJhbDXnczavB2uV1uN5LjRkegmXYYzq6tqGWMS8dxDnaAzc33",
  "key9": "4Y6z9YAaJY7dFhakbmfvzWxtyzcQy2Va68LSdsp16rG5wmkZNsAno4ZiBSdb7m2YW7tEMaXjehSJjGTn9Hchv63o",
  "key10": "4d1cU8SKF3Ed3wbY7LFyxZ3KaQGRZE42a6zH3W8NoDPUQJuQYssARGD6yDV7KLBVByarGXy62gKcehj6rc3qxoeg",
  "key11": "ebthdeNVgSskCXf5jmZvpQJfSonmH8XAKARx7vE6rbJqhYzvi5bbzWyjd8eYw4SB8oEsvoRdGQR9SEztXJ1usSM",
  "key12": "2Dc8VBwaNzUbXLUPMY44HwwXyMxBEjUAXB69HtD7mJfVrzzCZzDoo2rzzKwCURfFX89LiQbBDDw4hYkdS5ogq6cZ",
  "key13": "3c87VEmY8eRQAcdG8WFesv9bTC2XPNnqtmN1TCmmVic8tTwKqupKHYXVDWF7UCUGFZBKVSYm9xsyMWDmKeDo43kx",
  "key14": "pd3NTdYaRhkCqoJ7RLk5WnF4o747PhnVisLFQSERQVssr6mVCzFKExvwtBuyToF3Vd2JEXa9RNUvafwmcTAu6pF",
  "key15": "5dzBmBHEu52gKzyNaxEMbKAyKScZUQ73pyW4ggGBN9v7LNivBUGep9A3CVnHGyW9LfKibRUjBKrFLtgDfUSKeVFe",
  "key16": "4QGu4EtWFd8jMF3YyMDc8BYJWpctVtBokfDBmQnND8E8dnSkVAh2rRhefM76dncJKW84f7JQs7uz5birg2E5sGuz",
  "key17": "62WxX8frj4QYtxR2oDuWev3NtLerRSxuw2Hy6dQx7FhtaRF8Uw3Kg3gKxuSg69e3mzLWVScfee4Go5oQjanTj1Rw",
  "key18": "r9NNvQ93oVt6oGNJDfpyQF1TuY2cKNxRzckAoXV3RE3aa37FvCCYJ14VKiRaKN1e1HJdw8zZtw62MsxLNuu6ed5",
  "key19": "3A8RX1gGpDPir1G8Wi7La9VySVGUQ3B38Nz54srhxxYYe6oqAXxdaGjE7dZjjuQpcVPQUpxzPBzR258oexXECude",
  "key20": "WzLQjMjBQSFYvA4WbgEUk5dGa4jzhRCsC1eaUYzzvY3BbMpdPqTTMf17F5bAzMpcurDCo1MyurQerj3qxNni4cj",
  "key21": "3tniELenksp89R8tQWE4rqaU3qyPiafYtYjUkmTXJWa23E8Mx82s375RyjJk7RPNYL2wj3hp6BPmbi6TKxQZuaSt",
  "key22": "3wyeFcP4FA9KgFS7XiKSciF7bUDhqCwTQCmESHgZZbp6mvGPpQ8QM3YB8Fyd8dqqv2oeGSfNv7fX29zKQVie9sVj",
  "key23": "2UvRXacM8HQM5KZDn3DKTbwkA4EQg58kRQX3UoRtwAJ92FjGvxtSCQ8sxnixTziZrsG8hswJRDt6zXCdX22LCCPW",
  "key24": "RRe61uheB7mdtyYc6BxGkXGS4Zj7txu9v6fAJQoEWfD8qf4cMuUoRHxVw1JKESUS6Cuir9HcjXKdVgwTXkj5phP",
  "key25": "3XSvTGVNrZPPpfZ5yjCnaaKqZsmhWvM1xvChN7MQ4mKYQBLoL97G3dFwdAgMPpabuyNaU3WibkfgcVDyNs3FAHzj",
  "key26": "2MR5tbsad4W7ZC7TKPhJzt4XQU8NbxBvUzYgCUWy8QXa8qiAgxt8nsj3mCmikV7EihgChMv4j5WKyKfsnvKfUtp",
  "key27": "5ALzFacR8yaYAm7zAMbS6mKJ53RDfZCZYjXKEFUAQ3upHUyhpKiVVd4FpCsmHPJLoYqdzhhWXCx7XwCMB4Qe9LHi",
  "key28": "3SJo6ooRQeCQqYKzSYm62tjXhhtwYFr2UAdUgP56czAFMZubcTpMgEJQa3Y861vHoYsWCYDCMfgVnP9QuEV7bCzS",
  "key29": "5i9Jiz2aRvgpFdgPxAK3edGYT9xrPb3shc8fWn6JNSj6xX5yX8JCxK9vhrYNU2rNWbXTfJafm1ucpy9XBi7WGzZC",
  "key30": "5Y65MFH75yRFenwnpGSnyY6TZ88fmQxARTLVbJwxvg12XZYdZsN149u9FvJzZyAmvYs2H2NyrpLTMhEF1jq1AVN1",
  "key31": "2fLMLxGAx4sa2UWUb1dASadbB7aQbENBdwnFzD3iAB9tTv7npcpbAKgwgi4PoZh2kJm19ck8zUDj2YSzMsCBwdaa",
  "key32": "5oK7VcceeRi6SwL2sMUQUTSLY8RhtHBfx9MYRWZ3DdnTPS3dU3PeF78xUdNBvyLbvRrEZnrgcEsRKXMUcnAbKc4y",
  "key33": "2aeCPmWF3BZjyc52tVcnECQMMsvzPoJupQw5xUzNE7UfoTEvjgT1qsvVpWnqHPNP4eAVp2vyUytbzrgPEssUax9B",
  "key34": "5crgXm1WRW8NaieeU16V13PjM1LhZLvexXfmRKbWoXj7CvueCHQcVzwZLhG13j832uXoJ8G9pzXCYr7hEu8dcarp",
  "key35": "QF1BHdgm8WVnAtKJPXFE4rS6MsSRxEbqQVMKpFUSc34Aba89WbKk5KCEfCBPiQz1kimBPt7fxwWK1Jc45xhjJcv",
  "key36": "4Q2b7trePBt7BCuFM3vNB1FW8GRNQpbD1pY4xUkV8TMYXoBVi7hrzqMfz2uYmFtXx5pj89sLAuLPJkhkRHnWUjWD",
  "key37": "5hZjZ9c7hCrrAUdKosDUvoYHiT2QWrPmyf6tsKzGW17aNmViHqrrNuf6dLBR92xKwC1Az5XcnjNd7kcopNfe3YvX",
  "key38": "5JZXn56iJXRtK5NDkfqGaw12SZSRjFL3JtiER27JaZ4owbxnWX5np9oLSSB7fwsKmjFgECn5MVCx6yVXbG8Ya7iS",
  "key39": "VhQUhcwViSTmtSzna9SimtLP9vrHs8ZzT1F9A5hxvXnMu9Ha3xq4tXguyCynze5mKk8ZQ1Y7UFGpZkRZPqmBP3b",
  "key40": "2RL6pViqEARU8hQdZPFXAX9EeNTu5z1f9k7nRmrQAjELGcdJ2Ahn67EL48mrp79LLNZKuFTnTuMkGsDR37Z8yPD4",
  "key41": "3ZwiJ2nxGgLjmLgb9Pu7yUvShEJtTpbBaU2RXfKnn95J2s1FRqccbztaKyCh7kJorAYj9PnBZSfr5FHVUykV8Vf9",
  "key42": "3PW7eDJTarATpUddnwf7KG3jPCU9T5Rs5CbFG44A9s1KBrKaQuCruQvR3Rb8YR5KchqoTDQ4jXjF44NFhxogDbUx",
  "key43": "5a9kBQfaxNYFTmw9QTGqNwCzwKweK8vo2v2Mm34GutM9ky57mxJJGBUoiQZVEvA4DMnZTww1xoNFznPEpdexvGjG",
  "key44": "3shKLs9di7AAQJNY8x3QDuU4QmZs3LRGt2QVdrMz6372JLTD6gM51JgHCuRjM5sXHWnDauHJmt4KE3Mp4DsWdEH6",
  "key45": "4L9Cgqj3fJLyqoJRcpVvhFsLpjkmrvFmL9KcMKbLt6x5nwyJC4HBw1YCiKmYuPxa92EJ339B4kdAq63Zr4VRZP2L",
  "key46": "3jKyyWb4uJS8Z8FmYDLx6t4jFdsBPyCPqMQPeAh7D13SnZvKubgD7ctHjEzNtcEaeCMGy78NtufFxApWwcZTnNPE",
  "key47": "5wGza6TkYT8hqNyjiubrxTVGy2Gp6pnLAYhodGdxhM3cBuNaxLHcu6hJG6xevkNBtW4nS69Fk1CnXt6dj4mHokZa",
  "key48": "2uMd7WMDKn6apYgyfhqQVEf6aM8aTV5VUcKohFbmUf6Z5DYDSiCcT5AY4dmTByz9xeWBdGjTMkCBYtf2ik65TNGa"
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
