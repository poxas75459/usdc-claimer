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
    "31paaiM8jy5Uf9su99VTZ98di81bupTVAqNijzFmN8tpCdAGA3cM25Nb6YR44T31m6k98vrpz9Q6QWNvZJRZUvyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CnFzthHyYhPo11psZymsW9VWTrkyRt3KeumK1GrD17TgVdtXQfxnsj4Su2Zd7qsD7fadxa4rEktbsNiHNWJMjGb",
  "key1": "2Q4zGRtv6kh8Lsr884q8iVeR3UJQTsBzW1PqE88xgi5Hz1pzU9QhdevJNJQRQJACoNLQA2eAsSjtkvHMHCuyyMdB",
  "key2": "4J6RZvTng3kE9Nqpo33ckkksnfDgRuzvDxkFFXqiRTEr6McHaj7s9wWxSc9b4mspc5bnPuZ2q5Pzj2Er3BThdSUW",
  "key3": "2XWsyNECujrVoMr43QLU3h9ANgwjtQCwjRmKh1HpEtyT8GiLgo6jyLiVa2afCGmSkbZ8kidxVuPD1Bt84dNCrCTN",
  "key4": "2MccaoTiFiS5MDTVE4AxdCgEmEZRYi8CXxWn2mmxuBkY3R1FDju3moEy6fGR2iqhQYHcngVsfX2wt2HQizBHxUvL",
  "key5": "3WmAfipKk9J6fG4qEZcEvPsVYRcNhGMzVJFiBZYQARqNnmbe2KdEATQ7SH1mHCYpfNjr7sH9ciqPHB1AdkPsgtND",
  "key6": "rrTYMe2bZhgk3GQP9VWvUpTVHACZw5Gg7jM2jTLSQdRqtsufuR4iswnNbaQe9eqLmpvsJYmnTFYVWpTRTHQmw7j",
  "key7": "67HQLmMGVZuNxwU3r8AKMKdQxt4C56uc4KJBEv867ovJKE7NhY1qrrw35pPJa2Ss3BwnUQtrKQcU8go2YehXNAkt",
  "key8": "67KqwYPSt7gQ38gkkLRNmjWsLwffRub2cYVsLpFpd1nvqyknocGGWMd8Fv6anRb57Z3Nnv9S4oMDk6EJXXVHWTjz",
  "key9": "5YmmJk8LgLyMrY9Uoc35VA9M1w35xpHEyf2ehKdrb4STYaftbKb4QnoJDHRKvEg4XyMaaAsisSNv3fv2kPNZVrGW",
  "key10": "45zxorgVaFNB9BH879NANqjqvMidbqkc7mbu27xgpjWxbyJqeL8mAyym1hXmUzLUVZX1HeDDEgtWndgmSxs2wV88",
  "key11": "3meQcTJoFZBwGEwPJQLa1gsjJhZYkzTtWAiiV4ghTEE2AnjdahWpTHm918JtS45hxf9EoBNYeLQ3KboByiG9hoiE",
  "key12": "2YnUaNgQ4FMhLGZBtzjyMbcGbZ8rYMid9S3CcGMSSnB1vwvUR89DrR34nskHXNFMsWuZzxtwSfEHpc5t6ezWMa4U",
  "key13": "3uycbkker5BaGF3SA4g7Wc32vh11HyZrdV2m3onj5QAZseBFm5snexqCXTtAoEj92GsACVv1mTNGMuHVBwEFA4EU",
  "key14": "45Y6vXzaRrkxMkrjdEWVJzy3kznXR7UbTBHJtjAdBV31ckzWmsppsS9JKLerp18So2p8t6h5yo1TcsMHTrSeQh4f",
  "key15": "4Aotm6iwFuwUJqTmoruMiZxF9Jpxpdh3up9jXgdnPqb68t6g7tqHhhVCbddxbQSqhVAxSwh8iA7gXLVaaDKyUzYa",
  "key16": "5SoWsmX24C22o8t9vVXifqcmZ7M2YNLgGTmJf1bdDgyiqmMM99fwjYEKt5sNv2pXGaNkczFyNKwnUdj31Akvx4zi",
  "key17": "41sCCLncS2HSTSjF9iULLAcqCf2C5t55BhtjQjsJuFpQcWCiVXmkRBxhXwYBwqqUEKueYnfLeeGWWrM7iPQsknd7",
  "key18": "238BKxoiB5jUGL64qtLTAvAjVN6npRjPGJ78yhMue8L1SwiixgapYCEGVw3DQwtJLgV3xyiVL4NfGGqNW8E4UQn6",
  "key19": "5JdVMfBR7BWPgAVRfuBibpA8ygMXg6kaiUPRipBWRSkh8Povoa1rXaUNrCNHN36VUxduHRLDDR12ZkuhLDbPQ9kQ",
  "key20": "39Z2As4q7CoDPF2qwWfyFY2uStLqxhLp8D23iCFNLtSwViGaRnQF7PLGmj1JqGKd8GZwV2gnR8oCwHTvLDZD6zb1",
  "key21": "2rENAwrAvSf6ZCpja28pJG4i38VGQrttyQRFHrs7BeUB3hqCQ8iKP1FS3A7VZ645j4BM2tspGt3w2d1H87T7hcoc",
  "key22": "45kCrKcmLnRNMBUtUdqt9abEidf2M9jj8mY1nSfwf8S96dZoXQMys1fUNyPemcRvaAvJwyEGEVtYDjGYxXkPdktc",
  "key23": "3mnttJ2ht4RhURy7dSnYBAh3QGrfnm9Js7AnVGbtmxyJahWoaSKxEe3U7bCJDVawZg9EQ1gARmPWtbigrAtrVq1R",
  "key24": "45remWBrS56NWrghisnQccXPeGeRZCvuNdo4baSkLnwpEGLDKf9Cy6fUKrWuXUSPntUFs8JnWqiMWXJReEr57KmY",
  "key25": "4a9rPL4BkgHAfT2jMYiU39kvwgwwUmVtMcAPgKuNsGSq3MBs3CyAafj5szDvVmoJXqiaAHX87Zf4cUiAXBMGDSCv",
  "key26": "4nm37fC1H45gEy1nkEb7dSxjnkSuDvtprQSgT88quV3uC8rkD4qMLC71ibwytUj1DVL6FZ5vyYTD2oXdPvFV5axb",
  "key27": "2hiDqRAwNGhSumAMYVUQRtSGprnFEcFBfWoLWh6it5kcuaheGtnTHj5XGv1sKE7juWJT9JFwHsWMQ91wMoXiSof1",
  "key28": "3EJErrJTWBNQbeTMR3Qk54kEfuEEpMaqrgkEuqa9FX5fVC3VKcuYtvqUsLpomeXpYM9SbCzVuxSK88WfaeHd44dV",
  "key29": "5aVSMKGu2SMgWWAgTmNHKUiR87d5EqJc9VTfjh3R7stSj7tSZ86gVhhm6rGGrarivMJVcD4pYWpU8SykzyHLa35S",
  "key30": "4D4nxTsuv4mHtE5GoExdUxvYzQTEY19UNtp1fHVt4bLefh3RZ43mb2FJJKj2rqYpkcJpAY66vHktvisc6C4Z8t4L",
  "key31": "5Wufr2a6xUkBjdmQvH9sQxU55WzW163RSoemHN2wXMVHNHc7Zj2BACpgD9P8DuuC4ixBGbofx7p8brwyLTSvpj2e",
  "key32": "4zE7WwoQgKWus65si3mi7FfGSEDVGmViwEt4HQzxTuPKaxqz4wUkWAUozzYdhutwE17MTg2hHcAsW7aq3pHHQ3TG",
  "key33": "5HERdHJ5BSp722uEHNJ4QRiqSWgswvxLaZyhcpJwKyZcYX73sXi66P2DgEBk6TZhUYDCTGxBHANKb69SuxKKhS6t",
  "key34": "2xowCQCWGGAk4Lw4ukgDmC1Q2bz87iazxmWLTF3LTJeR4e1NNAVd5AzjCBSKr1qWnh3fdffbAfhCTCe766G6mceF",
  "key35": "5RGLp2SQwSQW2EZbkynP98evzh4nBUUVRmVVQabGKgwtr35mLBcWgheFzuGyyJRfrUakYB3hpT53bHNAUD9R2FeD",
  "key36": "5ovzpsQDHRRu9hDK639zcVxu4GRCaxWpzttU5UmcQLWF7jiNA6mjfnvCaUti5pgskQPvoeoL23pS8Xog6nHfGeNt",
  "key37": "39nCVsE3zdhxuReQc3oB4Evx9qfFLVFWneWLPyTtKRuwDU8qKcvh6fHKa2aMZJVVceuNzehSCcCsntkwucJNGBFA",
  "key38": "2T2A1iqUYYm12a1s4hbviDVbeMvppRtP6U1vVNVAoGnqH5j1QSyX2TpNtm8b19Qn8kBx7Ca7PGprFJi9gjxwCJqV",
  "key39": "5xnau7y3P19D6iCAvp1JKQ1ZvL7Qkz4FBkvvB3nktTrojNPHhqivmgiosNGbLAqzEPYTnpQNqkX1hpFbaoUEwVMz",
  "key40": "fC6nfQVVuad65VoeAmYadXn4MoBygaD4DRaurzZKboXFBUS91s7ZPRAdm59EJZYdhw81DZoqmcxmLdKPRVZKUnq",
  "key41": "pbs5svgpkyyWDG74NgrjwYyEqyGdbiEtYCQv9zpbW98ZHCLNt37tVsUZvHDpHnj9BJCyZyu66g9QeDYddWw9H2s"
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
