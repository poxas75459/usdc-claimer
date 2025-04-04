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
    "2jK92ZdTyFKxaDyw1XaJjpWkPTVWrhmK6y65XP9cX5JisV8NiFH8vawmysxvugcUySEPPdGEdjqPohfD2oNnEoea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nb1ZFQhoeynPB6oiP9rpZaRhRiFWAYQtUJsr7errvnUaUr2kNoxgrbhfxEt3Lqe6CXFWY79YxVzLJAD15kncXUX",
  "key1": "4he3EWrTNTKSyQ9hd4krRDN14J7tsxqawDPxxWJj5Fpq59fjLS8LwCysKQzsL1VA3s1en4rNCxkiAPS2ZShMN7kw",
  "key2": "4xFAMggagUtY51WonYbyYYf9WPmvziCeaFgf4WNfrxpLt23sDJCDf887hV64Jyg3xhXnoHsuFT3jcAGcXroU69Nv",
  "key3": "56TRnnbt3G8z6EoaStDq3ydmveauYSAvXHBpj71c5GU29uZZKYLgTXDFYdjQxrMQg8Zsvx4ms3nFQ52hL9hzsApr",
  "key4": "2ErCJmiQC8KXXcE7YCEipTpbmuZxziw7iB7b188sX4rYxJEaUHKsrYNRoAMvGCh6U5nZeGkX7U2vfkppyQTcHH2S",
  "key5": "woMoZWvJ5y6ihz69hshgW4u2D6ExEjzaiKLpzmcis88JBmqf6MFXKraaVtAdLn5JrAapi9VudKyXebfZmobC4Lz",
  "key6": "4QdY3QYuHcXFsmfo5yZiqj92y1ybfJE1BNbqj7CQTVM6EXHL1PyzddvFFHcQSLFS6s8y414QjBNZJyDoE1xobCJn",
  "key7": "35SqPkVbAYQtciAbbEtX9Ntb37fBYvvy4rVpxqhdqKxwHcrMzduoLnCM1yrEurk4y9uGAPYFsnb8fPCe9ug2QAZn",
  "key8": "LhyqVacMQ2kNDXUWwqbV2JQvGKCTjD9Qz3wujietNDyXyksyHkCabzPZ2aRDuvpyH9yetUqcb2UYg4UGEhkE9cY",
  "key9": "5JoDCWuYWFTuZBFv7BBX9wUwCNXz7JeezMGygBHdSia686APHDcKLTuLCpGYn4xahYQj95KC18Y59x5ZwWR7821Y",
  "key10": "5tx1fVQsfZwVQH8qLfAPCbFXpQ48GB3ag2Jrr4L1cRfJzb911mDJ7bUMt4K3xdhBggNehoo8Px7RY9jjycs3AhxD",
  "key11": "5HU1oUY75agmaAo85WHsy6mNjGC5vR2NsH7upVY8zRdW3GJX2ZhD4ncRQwndJgbRTgVz2uTaKu2wXPXfjmXYyRra",
  "key12": "4KAWsRHLZDX6XmRW3SRTW9nmVKtkTgP1ys4ZLMAzFFdBQruiViFQQYmrARThWyirdmcoGioe7JhMfWC2paMbTjqs",
  "key13": "2dpy27DdFJSPjw4YrNBjacRdQTZxj9aeyCQtnLWJGR2zS47C3oHFNKuYw7GcveC2kS5QJQ6Tyu9LT8TrGTuzGkzF",
  "key14": "rtM6iPKUEF55PURhzarxEa4SW8KHfgEpA3WUNN2sqxzmDAJLscZRTMMFK5PVtXwR1pt3x5cJn75DLvGoa8NAB5W",
  "key15": "5TJDaD4YyMfxfC4PkgH8z7rZZ7kRJ9cwQqjYM15NkxCppBPCJ6BQxE3sYmHzW3JjsRmA6DRh4BxrN6pie4mnVPCj",
  "key16": "5euXaFkkM7CmJgD7TLicqTMA5oNWNHH9hhHe2DNVAhCFxxkAxRnERP2HRQr763tHxGzzBXXwpsnAn9jBRnUSRRKy",
  "key17": "5jCfWx91FdzsXv5LJzrq89BvFZegowo37U8xahtx37s9A1Y6TKvQE3uQwFnSRRFMjmgDy2byBS3juteJ1ehK9ipb",
  "key18": "B4eHUxGZK4XTzjgBRmPhfm4Py6B8kEeeHw2TfMJiefT2xXzweYg2eQ1Gd5mEAiPoy6aDMb2y89XhuzdZp8soFq9",
  "key19": "4hnXTCLJf96N418YqBnEP5J1j4AQtByJQ4WWCbEKjNzW4oacDySXjuxUWHunFAuLeWiq1mdNnUhiwoyeBEDqcYXY",
  "key20": "55dnP2a1d617U18fNgn8ZPwRpTXkXFGNBFpq79T48VZ42bFLtpgKmMqo2PAooLPBqD9YUGSxBZ9M6HRoacGE2QHP",
  "key21": "2KDiM65fySMkhrDphgAtPdUqg1AWfcdcj1tZixKPM6JxHRRrfZdh7zkLyp9cQ117k2bUL4CD1Mo7BkiZmNUk87Vc",
  "key22": "3T6ZQPYi28F6fDwJ9m2XcjcfGkRRVf43fMsK4H5KfhvSMqb7GCnBadtrXMrAGMmPjxv8365iTycgKXg5JF9FGLnK",
  "key23": "3cgTeErLPFaRgQbfTCjUPZuQyCRpsF86hP5G8bbCtdU6RwXLGtyUctsDK4y6t6JxWouK3ksy4Mc57LQ2Ppw9eDQc",
  "key24": "2jfhW8HBg2HiBd6XUcQdcv4QYMAvzahgy32FB4W6Ma7XZSCCQtRvXWwzcU6QcGMMcvUTH6qAiDF7UcaZE1o5VkiD",
  "key25": "cTd81ivX1Yj7eSJ6BkKnVWxhSWkfkTHSDpUr3sCnEVLResiB9oBytzXhxLnvRtt9jHjTgLzoGaoe6uFCucFGXq3",
  "key26": "4Ncb12vsNZYvp69BK7eeSrKfayS5Jn8PCY2qWCW7HbDrPGdLT9vr6AS838QxKpEBaw3Zcn7zySFuD3aJreHvqpZT",
  "key27": "294fV2b9NJ9W6fSYsnqBWqw2rwdBTvGE9sD2ctsD6orSPWY9zKhE9LsMpQGakZuojzDJFqjPCwYA4BsAVayz5LKu",
  "key28": "4mjR9FY3kBeE53BbcgTvQ5uZk77Kku5iR68dBbc5sKit46wZ73ApGKba7XVAW5Gnk4ZMwdeWgXwMXp2TznEHZFmS",
  "key29": "4VSegbfxXnCkR3DaU1zs7SfEt2o3mHQn8CHHDTtbN3XA4DsFYu8WrzdUf5tRKrJLFWnC8AKhMDVYxgaYt5FsGPrx",
  "key30": "51h6J1FsSCE3Co9YR4MqL61zBybMeqACfAEAzUDh55JVA7Cpqzds2uzhnicQm9BM9wfySRTmDLb32SerkqFVSXqu",
  "key31": "48GSwEynQkFhnpvdAFX6EcCZBmWqqdWUxeWBmKj2i8EzjNRJQHws792phBfdp8Q79bV5cTw49gXkA3Hz9nbknYSz",
  "key32": "3yz4NriYPXxTu8bqXBwRC2S4AWaScRq6JrvMpXtdTASgxGkpbtSvTyU2wfhMfxUeo4nDfxJjEbS5twuWn3JAeURw",
  "key33": "2n3eTL1YiUj52vBLmsoGaK1TpX1NXZvktBjkEgDRv1r7tTqz3aLeCHtRtB7eWPpND7PNse9rfcFhTgjwd2yqz5Ft",
  "key34": "2q9WqmM1ZsSrr4whJ15dieDfGeG8ax1jueMquRDH3AojQMeRMg5V6ckrN3Z45mEaLFtEBMuYLBS32o8NjxZehGmm",
  "key35": "4uUHvYqRkVbXd4rnzvhei4asxruAWn7iCag85Qtg6zYenpvXyrM2Rzktmg8hYY2D8JqpTGjdbH6Re2cq3RJ4Gvx4",
  "key36": "38GQxqRdBJx67Q8tKGcgN3BbfnSBgq6Fs1RwFebUdtjqEMuURSNr5yqz5fp3oXPZKh3AGsWmRRS8Yaw7kat3UAwx",
  "key37": "3xtiRBx2B82Tcd5QK161D3R7fth4KbvUFCMZ92DEbHUuVKrJ94Nz4D6eNnuU5xu8fQp4LaiZjf28QDB37ZKyzKoT",
  "key38": "5Q59RNYmzbLoG12YubuvhJcZHu8YjJW2nRE7jwtp4F5trTKQMezs8QcUcUT6VrnDxnKRqsP5vDqq357c4tcHx2ZD",
  "key39": "2KSoFnBrUtgNGRKNUgiqv1AJ8VUeGg6i1MXviHNFFPP8MAbbWDwGt523EKEK2bNs5dvU2eV1G9bqnosTEiL9YiT9",
  "key40": "62wo3Rx6ncJ3vwqEffX8qmwEn8h2dfc77BJcJMDfco7qmHwFsVqgjJgqLCfMCrwJcjmnz2oBZu4LoF6ahNxKTMBT",
  "key41": "2whVqjtEweNMJzni47mkCczqvaxxEZqFxm7YvakJsYLuCZfYSbb24pmrcQujKKjJiUWPYJNNDAUCwsduB4Xf7TM1",
  "key42": "3G6cefysjvowjjvGeiRfzcDrN4zAGZ23N4dpYWqac3cSvCCZur2YYhBE6f311LyFsdciGQWG7PvUp8U2hmwtRE83",
  "key43": "vrXfmnmt8AHFXyBJG7DrpDTi1bxyJ9pwDu5p38shFWid7UG1gZRHHVeBN5Vf1mpTWRBeERAP9RJSNKe61WxDseg",
  "key44": "qNqyxMgL57tHPrtg6YwngCVzGJ1pfe6Pm6Y4qBCpLsWpXBQ7w2DAQtb3ATzUMdSw5Q85Pg34ihUYZoHjfFvp19R"
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
