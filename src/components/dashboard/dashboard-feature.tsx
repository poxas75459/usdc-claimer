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
    "3dpu26Jm6mvxDY379hNRT5rDUVzj7WEg8KaP7jcvp7wYWXrTkfZdLXYq3XxtyRGM4wMrPHPBsbmnzayRRXshXWts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hww3LDidtwYdXn9dzAUUoxED3UR5aHjj1gzVcnGPnr9bDiyeeMpvN4eG6d9Y6ahQz4vJYvwfkbXEyPhNCKqGsrk",
  "key1": "2zK3fdn36GxgnrwXrLmy4KjnNWjrzgerFZ55NJ5Kq8o5nqo1yMeVVigiUXvqFNDB39DsRUfQUXZnFhXEbsMcZiNT",
  "key2": "2WXpLLM2x9efVLHZc67yNQhFrXECmSAQF2xkaa6f2FWWDgppASLAXoARnFjMQBEBjijxdK4UCN5fcwwM4DUToRXQ",
  "key3": "2QLZVmNCcDgLL3VWaumWQnHHS2aSMt7BUnJWegxjPdYfcB22hmLnZFjmdW7axr2vGDwhrTm7JX8rXC2LTZBshrX6",
  "key4": "TC3iYvRqKyu1meH3Y71Cvc48WfjfjLCevN7z9amgzFqHYfWZB21DJ3hnKvLpoHquBUNWTt3MEYJzWanoAWEoAkx",
  "key5": "3g7DinjSEBcv4cknHYPdyi5A4E6CASJ5nUWoQDb24nfCpZV196DK2uYyUsNd52FEigNuTKmKV1EiWCWKGQQNWnMF",
  "key6": "3oW39T5feR9xsJBTRcuE1DCFLQo5w5G5P26Kf96u1ybVWsc6mzgZX6FQYB9udjB4SFrXtxtRr34tS1nAdc2z9DXg",
  "key7": "4x6q6fsXULNec9hiU8dTmppG8ai741McvGmKmJ92inMDeFtkLBX5P7LJS6xVHW7digMswFstpCFFWuNj4bySWu8m",
  "key8": "orSavdaY8qDkuHcM2gLZB687MSebqWnmQFmjixiXxXDRXE2fb3DuaiKn8NDRfwmpC7ta2U2TgkrYKWmLeJTAF1L",
  "key9": "4sXomKQ3BvaS9AQMfsV8urDVAvTpZqsGW44Zs9MwC23WCgRfix2S44yJaAsBgvsspEqArTsAi4gi1SxssV2gLxwj",
  "key10": "2Yg3S9A8UyrTY8mx9m8cbkF1wbtcpd7hKLs6odHL7mvWwsfQdoveEcxSLk2nHXsUmG4stooXNYGMSqzRsrb8cu3X",
  "key11": "36C8MvMbHqKeXn9CHMeGAtR9QpamkL9JVqN7y8QDMx8LUzmagqDbtMZdUsUxa9ejioNHVumVmKBGwhL8iKLjFjzh",
  "key12": "3brXfD7YLffub38MxERvdQ8g3MYGmTrugqfg3CpnsGw3geFuWmR4p9DkB1ZXHTKPgPScUj1CRimkxQAJvLkP2nRS",
  "key13": "3ozHyafwaryaqM4bivM5ycB9aFpX66vpE37Me3W46Zf3WduXA1NUpZqJ72zdyHUL4pPdGKc6ou7B4UwJJYx3NMrj",
  "key14": "5vV9sKLnchV5hs3mQk7Xajuj4DtKYBJzYCU9EiMiMLMKbZbstFgVyTN4RmA6JXj4aPUW6jFW7vzBFrdH38sTEdRD",
  "key15": "kP1XjC1tC2JR7HdCgyNVwxESa6rkExVauutcHCSvBXJpPcgHmr9c8zmcL2XiGUbavyph3LvJeogm2LuLRSPs7Mp",
  "key16": "4V1VNj6LttLFWE9MraB3hZtKHvdNuBoX5u7kZo6WkzL2KWwsBw313afVBc8N7asdArS3wVaBMUG3wtJdEMZ3bGX4",
  "key17": "4U5Y5xyoMN8RzXXk7fyDsU7NyxfpGtjbvWakYhbCJqP3TqaM2ppgkidZD9qcFHXtdeQjKRbHPJeTdG9eJk14CCX6",
  "key18": "5QonNtR6zU1gwB81yExrttvPJhRfMTVvwnFrhrJxpmSM5sF622JxYGZZvqp8acXEN9tXMBLHKHd5rgCvowC3wxWq",
  "key19": "64tdto2SKjU4grbWgNioY4qed35R5FTMWNk8zY58KwQhYATqghvmJkkqwcECR14xe5gHpFZ68BvheBVPtqeFzLik",
  "key20": "kAQrHfnHtJAtgtmy4k8E1z6HUTZzqsxM7EpVKfdKRSrSxi2d6egSSmSguyqEhvoPbfETrrSuJsd4ncyC8NMoYHf",
  "key21": "3nY1dPgBsSk7bQhLKhS6FdxSw3FgqKA8fgXNBkhpvvY85sLVNsMV3FFbmumRzKMuzXThYQrqErR1Uctjm6DmqVGf",
  "key22": "52JjVEAVs9RXv5m4FCsPM58YNuD89pKBgoebDPBjXdrUjRrB3FRdakgVXojKp5jcjSd2yH9PkbaDrCHpTUb5t3RT",
  "key23": "5AqDCw1n4CatX9xGR4yVszHZQWDaRBwyPAX25fGg2jkB72wURZdSpD3jwiMyUxQPU6PMbzftzTyCq2NRj5RyEAvW",
  "key24": "2denej3U5LpbBCUCfptYFPhaz2rqWycnfbtF55FNLWNCUTW4a7i7kmaQBErybB8k7oyxj3Qobw8BRa5JiFxnZqmT",
  "key25": "36Nt9XomGhF88MAoFSuF2aef1TE8JUsEtonWsGsz1TXQQdavzu8rHKZv5bRAYmNZuHheTZkhvkeJZXsRNsEWoLMm",
  "key26": "5CSTgS81Xh9ryp1t5pw2QXJvd71Qjkch8KBXxC6YB13mN3vDZWMM6cMkFMmRm4BXXpcF8kCSMjkZn88V9H4ZGeuj",
  "key27": "3ihG6g3MDrjNqQnf5rK6eHjDypn6J4WYg8UGfM9r8UnRmMhvqxjemoKZkAsRnBp7RBLAcAfSP4FsMubnpMyusFuC",
  "key28": "5BAHNKwJf2uiea8DKTvhEPdHEQJ1hfKNLrhYWrbdeFNKxXnfWEgdUaGCQQn8CyYxx8s6jKnTiEtbmFVxaKcoqYdm",
  "key29": "WcEtNzwKPzvUJ9R76u1wR5LSfHya3o8pChW9oqYWFD2ybTzguJeWTLBbjF74EwuzaCAeud11qpdPdFUHheRYZ29",
  "key30": "4E3Kk3mUeBfkdYAPfCYf5at5R3aEJQRVmZdhf6RRpK3pg7GEbsrCweC3T1hX2NR4DvfvJjQyJ58N9GG2Z14uWMUw",
  "key31": "2TYNZgNU57KijnZacRErrxuoUwKrAthSzWN7FCah2ifeLsyRv1J8Yo8ApzrhNkhdh5uCrcLStND9S6VSXaYq9cbj",
  "key32": "3N1DK5RefwmUuAGwPKHukBeBDXNWvDgabZQvubm4rCzYDrxk3BKQ8M7ek8fCL8s8C8PwCD27TsEw5AtXCu1mQpfF",
  "key33": "2vQF8Rcymui7ZrXNJ1wujxfkon9rz2m5bF8Q1fdjjkRNXnTeisrARrQQBTQLyeFcQjTX2ugtPrGAk9Mm2tbtyZGY",
  "key34": "56pfv7XcM9jAtCoh2hk3Hi9e2QCNHrVBZDzCTMYBvDu78w5aZ3anzeinZYpvmSBPaGYtUmnDqiAAASDxA3Sy4rx4",
  "key35": "57842gkieSqJA1bV3WmLRuiVB4MopFnbBkcWajNB6yHfcubePfR2c7PtAVdooRtNU1aXnm5bPhpzCDuBptyxHx8H",
  "key36": "2yzjxXKW9SHKXp4d2W8ZRL9yYvYjr94czsFjqdaF25Eia9UqJKDvZCTQAoMDdBs3EJydniph9fPB4ftPa4zAEeUh",
  "key37": "59ieu1ZLh3bkYothyWjfLDK5jLdydk28MJJCPPbWxpas7PujgLouAJsbJ6gh7vbqXQBBcH5TD462yiTsKL4gZKbs",
  "key38": "55323eaeaCVvimabVZLbDMmsSJ1otHXVjLJ9D2Lyqr4uSJd3MxdHtpb5NDRwaC1oSFLpTi36a8oNeE4TwWczqpRP"
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
