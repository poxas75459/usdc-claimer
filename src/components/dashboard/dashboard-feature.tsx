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
    "tifnayYwmuKYtpUZr425LYyd76vr1ZtG3LeifqenU9xDeAmKMKq3N3xcRAmqAoKKriPyeTq5uqgetcgDYQGkSU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKCGJS98ys1BbYmmZvaHbwKuEveZbHWsiu3fky5U1XDTAuW9q33g6hMSfEHkpSStqokE9Lq5wiGV65WLFLKDKkX",
  "key1": "kDXmdW35QwVdopppGPJ5QRXuxBjS4egbNXZwqiREQAEaryTX9PevjQEKVL2hJAuJN3jS18ZYd9Bf67Nv88MoqDS",
  "key2": "5cRDjdnEC1vy1FX9oGt5XJJctjtRuemWdcAbJUpHtTpd7wj5QxFw1vDZ9ssAQARxiJRXYdxUeNo1EvZWjsQjbd2B",
  "key3": "56kvEp5HtctuPy8uXi7U4zfehX3JicqTQV8oL6iyPPq38X7BNMLqUmtY5DnPDUWM5uTRRVq6EWi66aRpemcR3qr2",
  "key4": "5PyAD7PMi7he7mceiKhuvrLcZtwb2tU321bHzEApxBSm2NUdK4im3ixiZpeHCfUMkAFDaTJs6swnQgE8N1GZbeWc",
  "key5": "2Y39Rg36hzdw5S1r7yd13Sxw3TXhVp7S3LYeVb569AfMJnYWJFiwZuho1KYZp6EW7zfBDEydQbZLJKyawCMu9R3d",
  "key6": "2yT5W76RnkeD2PwtAHouERJvxZDqarKaAZLv8DpA2VK2ieAGZQLjZWmBamKA59c7jnH8w3ryDJgzQqWff4DYCZvE",
  "key7": "5crpAhrTCTQPp1ir9FMKGrrcUMsiTyJmbskKB1Zeo1mBPdT4Q4ygsFv6oDqBgrAxEj6PkVMei6YJp9566U3Roy83",
  "key8": "SXWDxGwf4DhpZo8tDoBo3taWdNgVTQGRhoFRynFWmmquNGuWYgdDbsdxBjk5yfLxy3KHx2zTMj4YusXJAWN9p85",
  "key9": "AXVK9SLLAc2pnQMUyvxjQJwTuGZkpogu6iXMQQAxZJahYgnn8bqHQUHf83V4EBcZHEzKszmgQu1oX66rnohhLW9",
  "key10": "4eMVW9LHthn38hfnbMjwZakKrNcKD9YjJKfu2nbaR2WtEUByo996BxgpC83akUepwGeNpsnshsYZvMZG7QTQfT34",
  "key11": "5ftDL8qX5uG3F9tH16tw8umYxsbF7UeWavXwFKmUXYXfp9dr8YgMUXCUP3JiWmgEW1vo9cQi5ekceiET26Sm492g",
  "key12": "2cx1Mjic6jnD9oSYw7U6TyH2LQMQyxCT1CmwZSMteS2VkPiqUhFnfYssYoWuQa5naUbK3miSE2W51GpPMJCkXGDu",
  "key13": "27KS4aqZZfwSYnr5LEVUJ1w3Xyy2obsYrEFYFS6j6o23tdoit3TUJkZMVgsGadyRNVykRDAAqZbDt4oas9taYJXM",
  "key14": "66StAmwUgQtR3HoLoFWY9uFuqkYH63XY9smF67sAfLofYrnPw8NYHd5iuYfPHiwh1hiBKqKie2SbLuvD8oGcYZtW",
  "key15": "5EExN4HPYu8ZbUcLPgUTwXivMrRSgW19KkpfijSdA6Qhuey4GtPmGaNGMdHxpwuqZo5igDgN3mVUvNHoBNG19Vys",
  "key16": "2yqsggDKxkixLb2i6KPTjRWu6x7tMm2rRKbDz51HZrndc1PF6DqTbAtmgKeCwqHAXNiXXNE52ev7qwS5p7sFC1LQ",
  "key17": "216UC27f4nLiSdgD3VQVdyGuob8CnQSUGVdf8a2jBweqhzKBLKygbPWNLiS2bLF1RRvbCxtENqJ9iV3Sh8RmAPVq",
  "key18": "2rGjxNJYir5tsRLNth88pNm5owf39eGfKspkJjQW8uGA7rr4myDPKx174x9TAhZ48rRaLydNmseVaabappwHkmQs",
  "key19": "39xLR87NLtXKpyXFGBNf5iVsZE77YR2R8SYR8AMMK4cymGZSmyJUytwpHf2nmxeSDcDYmz4q9aPP3eJdjT6ob2Hd",
  "key20": "bJ2pEzxbVy2MpNZQg48RrER8rta8DhPgoTUjye6ijJP27pYzk1nBHuPbm8H5KqHdAiQVNusyKQouWWaeFstvEDJ",
  "key21": "5dmG429qmohEy5S1vaBQ4LSeW537zktKQcqzKpSVxnUcxrjE2ybWVVFj12EucBPuLe72zvAqxYrCTS5tuUWkG6rv",
  "key22": "5s7vJrvnHXxLxQsjEEfz3CgnxifwbZUm5XrXyhraY1UEmdUPfJinuJ9MMqZSsyTsFvHuXmB5WUs6NmpUnUmNiusc",
  "key23": "2RbqkuUU6Hm13Jb3X1nC1dzwzM4DkmqYG4ByVX97yDUfW8WFzVNYE9h6GxjfbgdRP3uznqq18HeXhWvqRggcsFze",
  "key24": "4tcfYDEi6y7mPCKBoy9CdHrD6FkjJQQfiPhwd6tonUwBLeSi4FGpjEWVbPLwdHBn2hreZBVJQMMEXLmhCVy9ccRs",
  "key25": "4jbSSKoXHdXujaeBTkieYUgoaER5pwzQSrSWFrsZatN1JzqDmYj1Q4fN6rW2wVukbYyLmzNR1tUH3snCniMBLsoZ",
  "key26": "rJdMJTncknQK7C7H2udbDCRi1wWsg6Rt153xfXCsMZ3E7DwhXLHMCprvFy4XYUYPUwihZhVVuyu5LyFcAkd2zv2",
  "key27": "5WMDB1Q559E5majazkacaUEkE965yPwPmZi5jy851TCCD4hntcDMb6VAo3PeEVqhuGr132wuAMYVxZKPHAicB11",
  "key28": "HD6nCYVRaLkL3f62633LyFsG1utUyHxwws7ssJTj1V5gZ81xSdMpGQFtPzre87ibgJpruTHgXdcPcfSDL29DXJ9",
  "key29": "1cdrfQu5qQocj9E24JDPSi7qapm86gD9tj1GppgoRcspV4UfowksDQcmSavqBeTZwCgdZFmVTCmV8g3kikLiF4z",
  "key30": "59bQYJDPgfeJpUN5wq9GazzchtsyfAPKc9vABRyn7dLpTpSQ7RhZeaVUHYkQYVZ1m2o5VbJRrNG3tWCRp9S93p7E",
  "key31": "4cPJW6yVet7BzdWvt1BY2J5weTcMXShVvxGgBS37UDbs2DFhNsahGt1pqLZ1G2bAmiGBkRb83G1Aa4gkSGBXT2Zu",
  "key32": "zEDv6L61A6LbGGT9cxQ11fAHpAzcZa47viAcPRXAJJq4NqPEqXdHdAcJFWad9sHRx8BnYFG9msF7v12YXfVMukM",
  "key33": "YS2kqhej9JDPKR58BR8id3f2BpziXarXX7DGt6u4XTq1nLrTpsnAXzuuUfnChoLn9jp6gSJ8WuXQL3yaHStEoSS",
  "key34": "2vxWcWQ1NyCim1kwqCvRB5Gi1Sbifn7bAeTnndJirizKuJ1nNfjYTUeMxhodnJKt2Lpu3W3wbRrhxH5a74EoLBbq",
  "key35": "JhpAbXAoEmj7js3cdSj9EvnW4jJXyteAkFuwfoRE6ktmtVDeNWyYLSZK55CBuSW6n7NgHriTXtHqJ4fstLDVBAs",
  "key36": "4NMMunAJYwZ2mVzVDc5vX4N2LQT1UTH4tUGH9V6Jg2vf7zoxL7cHX9c8nAr3UUuwJj112f4vwJEoAa6XVnMGqDTz",
  "key37": "4eT4ZzRULecbQZdm7dz6fPijLZ6ZSUJT6WYPLUPJ9Ng3rcwyyCjZ6c7iM7QVDYLw11FjKcEHRBErz4gBd56REaNA",
  "key38": "5SYMaTXgv77HFpshTSuwQaPftmg3nuPPbg3PBZr1FQzH5jsfvMZdbFRG375PsDWYLtUmTaUoeUexDwgoBTQ9oev9",
  "key39": "4Jgif4RFLmdmC7nchAfs8AaZ9wc9RGmcoMnLGexLGNeMCgwhaJzbsEFgvjDmaGBY8UuocAyKfe18BErXoVdGpQSD",
  "key40": "4wzqwW2HLeqTgUQ7Beeu54kzErGAExv26iqj8fkWB6Vbv4GmBfeeuPYKEaEcABZVzzY3xGQM2mYXbcCJjyN1gP3V",
  "key41": "EeTcz8jvGxatedSfR1RUfPmUmkSDdttaeCvsthRRwawfAww9jV8TVaMirLzBQMm5zPyGhg75rJ7bc2nUYUoLRN4",
  "key42": "2B5xm2oytcDV2M6tN4pgCFi7heYcaPGBrw1CLayfk77P7Suu7MmDM1x5ZKKa4sMFHXjJ297abSYEq7W146rUKanR",
  "key43": "4oiiqZMD3JoSj9bixKpobkjoLG9xfiqfm953jDRA74KNRt1HZd4M44K92bsHH24qgBjY8UWowtxgdaAqX4uaxYA4",
  "key44": "4VbRQjDixTPepMXn1RrcwufbuU8VXyepZboz65wUDFsgBZhiEGQTkdD7iFvatzGDHbTXz9UaJ1PN4WJ4doUuFCQM",
  "key45": "5wrC5gt1om1sr55kuz95VVSk3sCC3q3Fj6F33BHCKAoK3fB3R9VmwoDMF3hcofdx1M2JT7JWoPwJFzWSzLoWbgiu",
  "key46": "3uqWR2daWfphyfnj9T3ekYfQknxq1zvTCzeEswecA6oBagnZMwZdAs3bjc9mbjWssPn7nvH4Z5eCe8jYSYiznw1L"
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
