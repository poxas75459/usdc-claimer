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
    "3tswcSyxxuszgoymPPb1ezUU7uebpsEPLcEJCfXsS6Q7uBUZNspeZsMMNFGucpPxvUKeeSLzBtmKM5Y5B7Vd6EGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joQQQZgDfpwRyJMRBLXycHnZnriMEcq18VUFk1k8nDS7P5RXmv98rnXa7JhdF1TYN6Td6iJfdJh3q9xkXGEgi5f",
  "key1": "573edy9uRHBTZBVawj7Xsw3maMF4k68NFsMpb9bMmSDfiRUDbUXXWLEm6SqjMcw3LhEpWSo1zsXtmjPztUrkhb1C",
  "key2": "3QRzbBtLMcLrHv1phKLGM6kwgZAswyXJZ1k28HSK324GqaZwnrtvTR6zeBsxLpnCwNELZFzod9RwfQppq4zTcmvt",
  "key3": "3GJdzZneWeVoDi5aWaB3Eogh7fMBHwKPThSdYe4kjobqfvWrn5RFWuanW7aethJ2wNHvqhXgF9XKfKp6N6TBpv9s",
  "key4": "L1PAt7ejV9wknMJybCKiDbPjHDzWcJ5SsJaDumhpgEKxkVHs9B7qn3hwcEX2G4gmUCzzpKX5ayn8ssQ5hz6i7xV",
  "key5": "9yytk8F6KJwoYRSx75GTduE7F9FG2R16RpAifsnxAMztVS5XfTdAFFWs3v3GnB7DpRydt97VwugVpTU5Kv9ky65",
  "key6": "5VJqcsWCL6ePMKdL9vbTYzuCmRsQajGTYJqQ3et2tMB6V5Wb14psTsGYFgTbyvKXJivYoYr2SBL3qVnsi1AkxSoP",
  "key7": "2DNaur6X1MpVJH5zmNy7KWsPbkUXB4ZVwRAP3yVvvH6M35b8D6EJ4HcQdYqHSaqHWpXhTfcRWWRRxw89L4JBnrtj",
  "key8": "4rbU9AyCu72NhvXRysBG5XSGcB2V8s9qD2qcKunsMQDw4PZmJRWFkPQVXmvUW7vk7BbrKSDAV9mHEh8qSh3YsMBk",
  "key9": "2kshmWNNnRf9AhA9SJmJZaKfQuHAtW8PzQM6vSfBCyauAJp6qwYiEQv4MKLPFUXf8gEyMbWggPCH5EiD9138VDwU",
  "key10": "YxY3cphfLweGeVTzK9858hpHDn1MbAFe6niMEedu9i9jHPh5CYG9oHQBqZWJJuHDMqAx5q9h5qVhek3GsyRRZjy",
  "key11": "4PKm3E9DczaBLHAyAoGDgA4eoTUqJJ86ADsPW3CCeXDxpXTf1TDwFuxWZnkhU8zNCWf1HAmT6dRCwy5XURaZMpUJ",
  "key12": "3Xf9ddRYtF7KzKYcimU2Dx5VMXvJVtdAhUkPByBVLa6SMniNj8hTvstmA1xXVdREXX9ZM7PXKcThRrtuup34ASqV",
  "key13": "2YzNMJHmR2uazgy2t5XRRLmnFmPkTn28Xs8xrcXh9rxP7sPePbfFCbVvnt3HGpSRooyG593qN7ejw5V1MdEr5SXH",
  "key14": "5tZvPy98Ef7da64Rjeix8tiRW6oWY1XHC9KgZtg5GitfSVGnXEWz9z8GctRTXc3Xf3CR5bUXVfMGDpDeMs4ei4eh",
  "key15": "zBx129HZarqCh8Zft3kbk5kXaT1nkqYCjeb5rR9DZ97747Zea5W2366Yxy5JnKRPQJkFox952MhtxWvME4bXDAg",
  "key16": "5dmrAcJxTSEbGuSLw9sPCsNNETJmHBgw8Dv3JLvqiX6V3YsPwYqW5dVaohKMbwekUUmQ4PwgHbAy9ah2PCtMCwMj",
  "key17": "3KKqWXrvRWsgTPoX2PTy89xYCsiQ4EsSkKEDj8vDQ1Uc21eU6168KprrMy5UGUSoyHYmX6Ld3iwRCUUZmGCZ9giz",
  "key18": "XFpDvzQvCUsPT1vy2cg1RxcDcc9jeJUiwEtUMfDDusfQWsDEgdWNnViHH27XQLECvXSS7WgEGHeFveAXT5tG1Fh",
  "key19": "Zu8twDvCtjsxfhVGP3CDEjDfUNAxadH4HyVPge1KnSfEHtRHKRX9FbdZ8QXmLYUYEf7X6exEP8SS1LqEZbGrm99",
  "key20": "2aQMH7TSMNGK4g1XfPfyTZErmaefBmUh3ytYbNb9r2APnTeDF1A6hM2kFpJVct7E7VjzmVwAE4cGeNwxqJsXDjmt",
  "key21": "47wknSC9xMHC7zPH7HuAv5NSmEQkghhesDPHAougBt1BcXK5FkkbkzsLjHTPYrq1ENtmQRTxSLCqm5sDBKeW7rNK",
  "key22": "4ypRjQd7MxS1Q54QVL1sKCtL2QZSpWDC43i6wSeQ5yFVmAzUgtR5D9yG3HCZSsjcaXzpRAeyhyoueqQjwZuao4m8",
  "key23": "5jkyjNQSNJ61HSzsterjxF2C8exXCDJUEKB7VMYmw8nodpQ3PCXGKir5sypcHrvFQsYviKX52zQrmpBhpLByVqpy",
  "key24": "2xApMiqkJAXQsMgdxo1SXU8Forv9SPAraUeBZZCBNJH64HUMLXCEkGYy6vS8mDEEDJJu6Zmv1msa1zw2Gs234Pf6",
  "key25": "43XArEicDdAxH2ip6WC3jbfbH8oDNZrbqcyyPTzrdpmsb2sy2W5yKFZzJX9tSCoHAfHMyuTBCxVCoJhfeQ3XmLtv",
  "key26": "3NMDV6sRcRm3iKU5fatPAUq2EA7rh6afyDwaEzz4uBVJTCL5GKS4kZcXj7CkzapgEjh2y2aegmXPji4Apv9ZQzw4",
  "key27": "2iq5P54LeEZgUXFvaVEdX45n8ejMcYZ1LNuwhK1PHnkjx3q2o3Yx5xYRU28rHKd1dJL1EkDTDrcLz1osmYnE3567",
  "key28": "ZXpDQX3QwMytcwR18yfEipjfQ3RJfuoo3YWj5CfacsuA4hUvtDKnb7Kur3qMzCThpjPsKRyrNmfGvWEHcTVtSf4",
  "key29": "5dkusEFxZhnGxvatrNcnBysqwxq4iNxNdeLEWPsmZmTn32t7nsUtZv4vdFiJpKowFqnhBzC8aQXvrqWPT48E3Cnf",
  "key30": "XwdUJ1Zoo52MbqBB8J31dCe8jPBFVcTjhovZuQANWdpearPnt1o7j4GcFf7CoGsW7MVWPeysA1qNG8p1SicpW4H",
  "key31": "3E35y6PzWvnfnmmjTGtodxUgz6H7eyQJ47eXVMLjPLecU1KRdhvtTjBesfNJmtFhg8d9bPsk2hoDyYNEhLToFLTW",
  "key32": "3hcFPnmEaxBjGwKLC63pYrv46cCkRXWtfenykyQZckCwt8UYXYzyin1XYzH1TswpRh4tMXyyhPotQfbENFwSH71r",
  "key33": "4ggES1eTfVrRq9mZwSMJQndEYPWj83AFmCntC3Ds2ioNR1pgxJFEBVU5NsZBsXG9MrJYXSF2aSKcM1QTnDr2qaQh",
  "key34": "4a4cKNcTkpPdr6eZUcAgK5P52Yi1ow3LxarmCssxh1UjeheedghagcpVEyevdSsCDhMJLhiFz37LPtVSWPAFaufd",
  "key35": "5HGt3Tg2LgFSs1SW4HV4C8eK85BH3FEkPUUx5Cmbmnza1HwjMKyLZdGydBFRKUWCcNbvy7LbhaB882JfJ3Z5Ta48",
  "key36": "3HwK9jeWj7hGFCMGunivrxUy2sj2DnPmbK2GDrcbC66cJYFFjoVvNfhKCNbRzUkmie6StYri9YzLFuBxMx2tFNYi",
  "key37": "4sRgpNtrEoGskA7virMMXR5tQUvXQYSL7PGTtK36QvoWjvoGYGkpEaYEH3k3xm3KGxmo4n9pfuPzwuLBZ6o18GYd",
  "key38": "4CaDxfj6dR3irrsdgEup1g6v9x7FqjVD9zmGRntEFCr25fFiuNrVD8ZGqKZgvxUL3yhzf3rhXjUkdXEcAdAA6uSL",
  "key39": "2ahUKherKQtgYZBH7t2Y3VKitQce26RTTPSvjPgKDUpRmoLXKUcULLHPq1qE5fCEjFZY7ddGdr3d36WBBQ7qmxFa",
  "key40": "2BYBFUFzYs4FGSP51VC5NWCVdtu6wkf7Wh3ujAjQ9Uyv7GdmcbooXPm9uAhSRiKXrEXHwR4bAVmZk2rEvfyTusrh",
  "key41": "5N3ddQjNM3ctTz1YHXWpWkkVr78VZ53jMLYqtLdWVvAhykAjGK4khdAoecfLesxNPW4BzHwx9dQMyCekFPMk1EHt",
  "key42": "25aLs2UcbECKiD8JHUYX8C1bqYiPY81e4gyPDGm7FHYPJL5LyZqmF57egqJNnLPQXQZXuc7Sv9vSjWTWN5TegBnB",
  "key43": "4FuyXhyfqap9AbgvRTZTAssGUExMGXVC9o6iY3AM8TkPQdJRjxDVjT7HPLMyYqD249pnaHR5MaVikxJqzX1ZoXsh",
  "key44": "2tvkP9X9yPc1RojsjRjSQaeJHwhCkNzzFvgssFZjCW2siBXkk65GXP1W4DdwxUsPaEJzwkSHd1Fsie85y2hZvjW1",
  "key45": "2CsVXsLwtQZr5NLURcRuwm5nDbfNrtY8MrzG8ZDv3udtqdvEciXSpFKsKSykEezFzziVJ9mF1oyZ8wGzS8GtDuy9",
  "key46": "5NmeJx35na3sCVNQmGqtCjYctRezQPobV5BFDRPT7AkA3YkFH4ynu8dQRuJykbEHqiFNybK6scm32Aocch6YtJ4w",
  "key47": "2FSunXRQAwPD5U2LVH1gX3rYpCB7D1BriuBV79K2nkndcsoqzjsSPzBnZVGNegrVDEB9oLhK7ds74DT6X1JyjYr1",
  "key48": "32prymsLSo9kvK96qid8CCv3cGJSmwBvxnrCDhZ3aPsDzpcePebze3bBEVNKNV5r2CLoiDd5ehzimguEKDjTKXn5",
  "key49": "3EdmpSF9S6fYVyHT6KRivJ1DwsnFY3GbVSqudGnrV4Yw5akG2ENckwDZfA2tC51e3m9vZDt8wR2QMJmr2qZNgLd"
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
