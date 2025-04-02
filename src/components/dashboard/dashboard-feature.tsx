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
    "3oToQcLUvPYUvEz1CusbURqcGkgrBvGdH9YmhfY7zfPD6fZnLfWub7VAdbQiMJeg9g1XBtYhDkqhVytyu6BS1dAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oag3SfVu5AeQ1Q2Qfa45N9KwnQjMWCim8XgM6NiRSZUouQ4MDcVRkikD8qBz2xPika2kY1r583iQkj4bBeRzYpZ",
  "key1": "64dTYpppWFdkB1PnZ5LbNGVrMuRojVWYrqySde1Kps7HcvLpHLjSaGtqQzyEZR4G4hdNY8WPk3ni5JTXY2MqjgaY",
  "key2": "4QkhB74oRmsrFgvW4QnTiVDZ84Swa2e3G7Bf41jj4YdNRAa6ALKpntd46W8naV6u5TaM1Bkn8ecT8wKxUo5mibMF",
  "key3": "3u1ztGqm2NLytKMcUkJgQFhQh1JWRNHXF8vDzE2m7kPJ9hbAbvbrzFEjw3wDXE6B9jf5ttDrotugjx57t9Qjag5e",
  "key4": "xaiXFiFvW8DsQtmof8AAVAjLS7w7QrfYimrWAAz66wn8MVpZZK5RY1qpW59MGK76usnTnpFaD7YMVGdvhWvwQMS",
  "key5": "5kHNRXPppP1SbksqWnEwKvYNBY4rapAdvLwWurZgtxKsfeoap2akhyk1jdnpnHaTrDFn6t54n3Rxrvu6AfdCpAYm",
  "key6": "2ccYJZQeYYR5MMeG64TqM89qsAxAgf7grsKW6jiuTn3PfPjLPcD5uorQwURShKN4XCy8Yxu9yqmrhLeY1xUC67fY",
  "key7": "4yVfHBKGVDzoe8rjbU7XtTWRj5uac7RXgr8oy2bkU2YFQJPLU6fALrYXGVhrfaDLhRtZF5bUb4iEoVzqak7b1B2c",
  "key8": "Z4TEbvrNbQxuiKMY6yF1bwcvb4YrLkQw9Eb2TFDMEvs2o9kAo5spbQTHrsEnZEzPJpuDTbMTrzy6WspQcUhaDjy",
  "key9": "2YrYr8GCrCHak9QCCnrsan7C9p7BhC8nVUpgg9j8ZA4woYuAckS9RXHJVuD2vBKZQ9dQTZ2mf2EVcGCG3tp52Sf",
  "key10": "3A2wyJVgadFEunicuCN69tFd8RS35Z97M8A5GV9nSKVJyAHgMohTLtYRGDR61LnabSDvtEsUE3ffkp7SYZb39Tnt",
  "key11": "51gt5xnTRMgGrc3wUKt5zfm9uB1C5r1Mt218ZKPqnF6TPPsiUGic9Zk7zpJNLurcF9rY7nyejGErp9CRZfkfsVY9",
  "key12": "4NfU2zzBKkdi9AhsK1ZH9qNedE4kLFpcK14ovLRFvWV5Q7cC2CvzEdyRpwE7LJKvJA23TN8pjbtG66qsKLEjYKfb",
  "key13": "3mxeWq2DWZRoJqkQxcHFthbyFa8PKkGHSqVox4vHNSD4vcgoHxT8yU2ayTsVHtvR624oF2d21AWR1focgS4LUaXV",
  "key14": "3GHLCqkE6kopA6T2d4JRMvS79EDJtg6f1EHor7kfsiZAooJrV8SW9ThJytapBbi9naKma1KGUCrUjLUjXpYAjm6q",
  "key15": "2rTCeJRXFWrCJMXZZJeUFebMkJYcvY7gtZbwrn28NizdDCK4FS6BzVnNyyzCcidWmunS9Wk9uKPo9krW4JiPXBhg",
  "key16": "3R2cTuTnJgaau5Z63x18BsAszS2WvW4LAhah4HrrZgbU7DmUzk8LSLe8yckGeahb1Jbwk1bevHWmuWbvACLDCHzY",
  "key17": "4xop6N9LRWKUnPgnMEFCNx9RTv6kxppmwTbKLQ6RvqKrBT2X6c2NPMrEjxQmXRqhYAEUeBG7jZT4bAZCjcUaq5wB",
  "key18": "iURuDiwXJCxoLrxm67A7qkicQshPcdtoKyDUJ7MrgDYTzri1wWxUEJMqhZkajoTBHc269XqLdgvL2tJd2eQStRD",
  "key19": "BkBfehPmYPfwCH642NwqSPJ2uPnYReTbkAy6U115D1c1fss6KDYxC3qYbxPr82ZYTNzTyGf2bjZKUtmz2GBum9W",
  "key20": "4yGHZPur3qcdT5qHjVKHhWPXyRheUXqBYMKuaq1bFuXaUNbuXn6v6ptg5QokoNxYwz8MPhN1KxXnZU4oiov8y4J4",
  "key21": "61JMuGnEewx7eU5ZLAnudWTcUNdMdQNeohbf4uiDzDp4g9R2Qqccxy4BqGVNXHSpjeZCjndthMg6se9f9FJcsmKQ",
  "key22": "5nUPkmymLKREisUMQvqGFadM58czxhiJEJTziNjhLL19g9YeuRdoKZhxLrfPdQWxPGHNTLx9QqXutXr3PPqEwtki",
  "key23": "37xQDrxNtSXyRLUDeXJuGpYyMfSJsGo1nJThSuzKv5YFRyyh6RVMoJspepw9aEnpimWvJMteHyYkEJdfcX8x8Gu2",
  "key24": "75aHHLokhN4RyGs8rQZXtLJxprBV7UFgCQ5b248giW9rtSH8wnnnsbVLyqCDYCpnLazRSLXmpumqBGheFBMuDZW",
  "key25": "5k1g5DKDmqxervwGwibKRVMSyXesey8MXKMeLoGGBq2M4ZForkejnYgt1QQDS9a4pAofhVxJRPNY3hu3fiLbvomk",
  "key26": "3He28D8QqrDmT5J2HoKjGqP9gLY3Fr3pZpY9e2bTfDwmpeVW61JwyiRRJWsVfj7hXxnoTWP9kUXs8X2h5DM824Ud",
  "key27": "3EGCVpRuJ1v9cepUB9zUmu2jdkZDYZt9sJCRgAB47J6kae98fFkscsdVQwzWbPMaNYyKw5KxVnNgSiSa6fdEo7Mp",
  "key28": "2b1aB9vGo567DoV1frpzsVjWkn6GRVbExqh4GiewG8yB4ZtvjaJifWBNns5Vf73RzGkeSxF1Rb4yCQZ5kNNFttJo",
  "key29": "5xe5m7958mrCrGpQg5gKKDeqPPWQr22sd3CydWNRccBCjmeTjqBFimYjbFqVphhbQmfrTB1r6MV7HMZ4LQjopZdY",
  "key30": "2xF3T1MRE67Wc9DGJmuyJR2NMnRTS8Cv8NjzzevHpPBp1pejdBHvvApbgq3fK6tvh4D4jPUcziQUUZGkSuC7C8fZ",
  "key31": "5QzvSk8NvFjeLnsiMtjNnhhhkd9EhqutdAFWXaGH3LuPyZ4m8fcqSfNoB65BAb51kvFA2F59iz49GzT1fZxMaZge",
  "key32": "33gqU2Gwa1rgVi1Ajo9qKCtWRp6fZDSStK9Z3URdTAfvUX181v8zYEgezPvUZhG2oV112ev12DAJh74tu4LdwgCD",
  "key33": "3C7jz6yuYn4tDg6MX5dajYP9gCVYGSan7YTUte7gfyB7cQyUgS8XMrC3eWs5FgyZ599WJUJs9kKacQ5VpS6Mg2Zx",
  "key34": "33wjL2f572KipvYGthbczSEWLFNuhpp6p4VnWsUywH5gsqn2G2GsrvrMKTeW8pPPf3EsPRMMnprkS4VEKoWMXs1L",
  "key35": "5YTP6M8THioY2gfoaNa78ZrBmKaRtyhGjiWzbNkrXnf3iJEqw6DTihnYczf2ttVevPsH95Mtd1BgE6mgktH2vbp8",
  "key36": "Wctjuf3ixy6HohsV8mS8KCoTUq1SwLhBPrFmd9HCFSeJ37rqrMYHVPTZz82FmY2mmDJb4ARzShDBXV85LcrK7Dz",
  "key37": "2HGbmrfnMLfwDWkWUiZ8zSFKnzDN4Zw3boDhNmUvUbeFVZ38MMGWeov65V9RSnCsFB6oQY7tRVxCZYuicUL86seE",
  "key38": "32AbgkoJMzAg6ju6tkG99Sf6275fxytyw982bQFzuDYCf7KWpGTje19Ms8y1UF6CMwHPVe3tPtXyXSRWfJmGvsJJ",
  "key39": "3TPP28rYYHBmLxirjJxjhj7Kw4FUoczZLboqifwDhbF1ADoU9AkpUM7U8C9iE7ZeY896C2eXtKDWeKHFLh9PCZNN",
  "key40": "3ahEnnG4dE2hXyBz4Dmwj3visYE1KkQi6ZNBBSb4FpGx6x4eaDiSf8MSe6yGofADaMqDstwTiz1E4gYcFJed95bK",
  "key41": "3fR5jRtKAoKTfy4c9ue1iHPBKVY3iFDhzCd15MFSTd77tvxiDdd36suDFqmjn1HMDH4kELFRyFEELc2VAvcKj5cE"
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
