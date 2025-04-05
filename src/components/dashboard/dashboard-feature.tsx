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
    "4wNdbDiqDXamTmYCwahvZmuJPjzQHhUhQvCgXfF9xq73AH8vEpNE3eAU1UD8URSaVBhmuUDPkhesfzRvpnXoCkTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUQSyn6V3r2GxpE1esNkg4WcX8cjcHRg9VvbXDsm6CW4fqnfDg3ZoDVzDw81T5RXCtGsyRNVsV4yL3CMRmGQVPo",
  "key1": "4dhjUFbgZYuEzwkHgRsB2WWGZMaTxZVmFTooZVpbp28NBZ8Me6cVAtSwSxhoNUock8pPFP1DM49seUAWfW2ab6wB",
  "key2": "5Z164ZgY7ZicQ94VmtVnYMf2j2bTeXjTwCKqMCKzAdbpTzSmgbggcJ4HncBzykZ3TkXoaicSYk4YmwUmj1fCbY4i",
  "key3": "5DFwyM85tEhApbMV4R7daBCsSPteJ7RQFR1KCCZRckrL9143Bkg5GVfegJ4ksqH7hfoZkeNHGqY4EAsGZYu12ViP",
  "key4": "3QSUeWfhMqEFRmJ9ndRBP7QBxfA3ybSHczbc2TWG9xSCteyLVWU9csx8hvLumJRMvHnAbHVRgCKxBtg7PrYjp1Dx",
  "key5": "51ypPgCQLuqRtJu8Ng7z7ZqfDNq5yHPEeNg2kuufF4VCL91Xdf7i4kUAS9n7Fpbguh2B4R7GprQQmyqrt53THZJZ",
  "key6": "379wGnKfX4rBtAE7oM3qaLkT45iXdZemecyba3NDkwqUbZjhG3eERB9J2vhddL6N17aohqbSA5URLSjfdN7N4c5i",
  "key7": "5vLzKRJ1MUnJrpp32QNbYqWodVLs8NrcLAQPYwr7aE6jAyQQof2RkZ4sgFUhDWVQqD4KPKc55NSAPAamHgM4s6ak",
  "key8": "3E57q8VLbKwQAY64Aygnm16RdspDb6uzHLmV3hHYUJvtsUkjZ485q1DrRNiKr7bYmTXKFgtaC4eUtPvY527CFFmU",
  "key9": "43YFjtQwPPRUQDH6P3BjSoTUxKK9na8Uca6BawFKLxpHUb86UFoPJbdnkzx4xZuVXbWD85B6AnHxWPnDVcWczkLV",
  "key10": "4mo7rgdDZA2h1rBQ7WDes2RV8ZCXtAvxfhy47cCQKS3fHiypdxR2uT6b6wW4VsK3Res9VLsej6VRthraWVwhH4ZP",
  "key11": "5cDUBKu9dgXu69wvqFGcfuY5cqPn9L5dXG2kHRCnVaDNUmiedPBwHoTP5rpyQ4qrCdQKVYqnFQFyKChqJ7HTtSXn",
  "key12": "2V8L5mMPmP755oDC95jswWyVfmY8c4bzaSJwcgSdjeDcHsfox88Ch3G5Lhw4Z1Sqcq1nA4gTs8wtQV6BQ5M2h5WK",
  "key13": "4QD56yTUnBPRaxwiyJ9k4o7cubCoTamK2KiAeQKz3CigA2CDoVxZwXb8gaRvMn4yDdABKcRE28QyofovsAfZbPWd",
  "key14": "mDbU5PFMqzRpxQJ2b2usq39k1KSiGwTYHcBAjdv4rgfkccrvmCnv9CJUQkUGBBePahUooQBfirYjrtGGTGcMiRE",
  "key15": "5XfZDvZFAXg2ojLd6JUxAp1xkEXg1VQ4eqYAu28nEJaZUuzbfKjuT6z5L84znrnakz4VnSn81hGbM6qcp9UQ7RpZ",
  "key16": "3qJksikuAhnYJvYNRaKdAXY1Q37F75UeqcEveXcM9BSpdfgthPp9EQ6x2SzzVkBAuvQAwC7U66KWsL1ibf7rWwe6",
  "key17": "4EVbeD8GByZC37cjsLP2Jd2wTtQdqANDsfHMzhmfUwvPT9giZxDrGHn8pn5oH7YXp4BhkoiVVb19KwKMJsR7kLS4",
  "key18": "5q4sXpiWp1duzTjjRducmSTjvbByTN43y1UXHTxfYp3bX1wz7Duv5hE1TjRZuBaxDon5oEr3p5qYM3obeCwq3F6D",
  "key19": "4eiLc6J6bLjMuG83assFi5JarjVV3AfauJVb9tSuixxCAgmazVajaLJWn6cT9rJsSkgGkBTNChSJwCELipNU8yRb",
  "key20": "4wDvT38aupeqnaj8tuHrnWksGM7JkvRMNAUjPkzxgBStYDWjVRqihFP5RPohREDo1D9DjhshG7TCMoX2Exr6S4Ju",
  "key21": "vAFfcoqHDCZ26pJHEHTmWVaD21zbA9JaoAZ9HbzeH7kq7jh3YFFCzwmk6KNoHUk8Aiohm4J1fT8hsAUYdvrBr8k",
  "key22": "4PfT5NwRHZ3fH1GeaRCAD16r6vRroeC7KndU3k9wGc4JqtGxszDj1YVzz4Rhm7gGBxACmN1jGihLXgHRF8WWHJwx",
  "key23": "6PP3yAPJpPtoF7UJ1rn1Qug2o6dDBgszKzAWtzepiSgGxWCGjm1ywKVH6PCHRwPCv1rJ1LZTz24Fsp66hEfe6AE",
  "key24": "3VV5ZtDyLWGKdKxi25Fv9CPA6cfbxiehKtcH3D5fggLYkBFuL8dE6tT5i8JkPfMuPmMmpTj7bg2YiNUE5drPiXzw",
  "key25": "3wGk9i8XJiUp7SAGxA9BKG3GPXsbEt81C97rR545dW5vyAgcF5Vh4cLu9DCLve11phjcQnZeVJvbVHx9mbmW21z9",
  "key26": "2Le6YsV4WLhCenG3W43X2BiDHauRj2JyHVDsFW1vopr5vxhAJXovRDJXAtEtc6vbFUbkB19Qmsy2vNbfwpkEMTak",
  "key27": "5yMnum4uPsxr3xxmafZW2APgPdJXXJ6iu8L1iHiyt5KY1ku5jXPb6VAL5QaJwb4tnE49VBgXNUo6uiLptp1siooM",
  "key28": "5tFVjFV9jsRqfp92bFo8Bqc4q6ZRCZ7MAWtm711v34b94WMJtdVFbvGMn4x3hGSLoZVKwAfQRUrS1N9h3DDtPCMb",
  "key29": "5T8RJ8TkcrDKbG6HWq19qvYWTJLVp5xZDPvL6wmHa1wuwiac9NeTQqZQYJXnrTcafNPDH99bYcgzC4qfdBEWQjmD",
  "key30": "24wVPKWcZuPAKFZKEx9EdvW3SMrGdTZf3CanVEkBwKRNhxGXSwy962CR8xaZ5rt6xyFGwbwKRaePDpQ2XnyD7Sqh",
  "key31": "4vfDE7hgNRDnnHKgJ1durFSr2rVyaSMzEb3XFnm5GEVcxn51oXtFqqcm8x6w11aqtmJ4WUTZNPEgAbGTFMmYqRxv",
  "key32": "2GbY12tLhBriUZuemXHvVBzVbfbvjrPYw9RDyey8L57T91u1mofgESUKxyiwHS4sHphtgzVSzzYjBNUdAQGv3dSf",
  "key33": "48XEDvVKJp5fWFTuPaG7hgv7mnivniSULMqBuv8UExLYmcRegxG1HzprapxZjWthgEyv8maPepYZ1x6Hbr6DgXEn",
  "key34": "4KWoo56YRDKUCUQteXFG8W8fDYsVTcDK5RSz7TttU7a7d1ssZ9LvzFQzbj9Y2uuBMiQwZm5jiseMw8h91vs6Bcgq",
  "key35": "5uzz86csPtnoY4op5P9ZxbA2YYkYiXHJdjgD6e737tjtRQj2nJgBjo89nja62wnEBMGNsm58e1Kwguw7MW4RWPxB",
  "key36": "gj9VytabsDywzQgozAFV1rkqV69di6UtPd12Sq5tu84j6M7SK8nQ6pVfEwCdTczXkaZM2sgup8qKqDjbQy5jfVn",
  "key37": "2At6w6BSfuBJc6vWLzgHDJ6YtcUvYexm48QPN4wW4YsqY2Lx3BeiQAGbsKJfpeq59DKyLxbXNpRF7ajCHHbptKna"
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
