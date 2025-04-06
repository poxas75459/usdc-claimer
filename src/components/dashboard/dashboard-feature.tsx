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
    "4CSmZFibD4oyyZx3x7FR1KmULwAkkmAjtXNWDVLCQLS117nVrqytVkcdSF8C1YrWm7Y9ocqqdFgETc7nQ4LVGP7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JL5hQczCQFBmjfmDou2q25Jrpcpj4npQQSWnYPh13TP5Pn8fLS2rZdMH8j7zyG8U1bwbeaVbacen4LSeU7WabDH",
  "key1": "5MdJaoAatXfZnSBLCVVsgd4qhTfX5nCh9P5Py2Q7U9r3VFP7s3zi1bDM2q1CXG7BdVvroJjfqnQSrJjcFTNvDQyZ",
  "key2": "2L6R7gHerSwCffaxfgBJCy99DtGuaXvW7FXMzC7VhxutGdeR11xNR5LuWFSvB8L1akUPT8ssmo93KG2YghAvXrYo",
  "key3": "2K59eyozqzKBeirBusVb76SPDeFXf1eokPASoJrfiSjkkdLZBUSvSKmpoARMsVL1thuMmUwtHVW6S6MEuy1mXPDM",
  "key4": "TMpDEbgoGr4tNAj7uvdCy4UJpRAf6BbmJ3wW93DnEHCXq8yVmZjAMNieaeNbdbuQotwXwcghBzgzbDVhU2mkpZ1",
  "key5": "2sfiCXRRdLH6FYaMPypc5YNfZuVhdHQk9H6wDVvdxgdiSnExapUx7cZcqcKzeqj75LfcxeCVifmgHiP7W8erGQfP",
  "key6": "e2CdaX6dSYaGtDj5SwJQV7dy6eq6dsDPLWChjXcw7EgUfmYxEZFY12FXVUH3Wm3U3JvBfJjiR9xZsj7g46hUKqM",
  "key7": "j6aYs9qQQMc5UnjbzLkVr59Lh7VSVYLpR7sbYbFmyYEiqJJ2v24v7wmiQh5NYF4TFXmajd5yDmi7yeDrXpkMRG6",
  "key8": "3qBWGxHZkF9MxJSw2Mnc4bv6eDPhUQaVWLSbWty4bkafx8a8GY9N6rEC4ZKW3E4dDcQdGzLx1vjyMz6b9XaLPwKQ",
  "key9": "WyvJJ8aGnbCxGNF4d6mX5oKMFdYpogqs6C5oyXmondGavEU64ba4GqYnPSxL69yqvLqeCLm7WBNFFaUAF2KYTBS",
  "key10": "57WV6uyELRAZYDD6coYX7GPzdfWcwXG3GQHZF65BuRkLuv5rtcP9vMf4QWv99ejCJgto3ZhjWcFzqUpyVYU99tWE",
  "key11": "4U6BLPzxLmKymsZWEpt5VtTzfabyaMgYJESXPHk4HUsH4mmCEjBEy6C7XBVY6Dw6BTuHP4bxT4JmESxrv1V9pUiQ",
  "key12": "58h5JBPnPMyjxto9CcY4Mt1QS8M9bbHNCEHfc2QgXFN81V1aFKqXLjmMKVQG9PxZgS5kfauQuwtG25iscj3p3YeZ",
  "key13": "2R7R1P5u537q5MTRQKefCrdXFTykzbRnMTcEkCSvLjGMhh2kVwBRTWaYVGwo9Z7uQPdxNMM74FQvfFLd7U6uNABy",
  "key14": "4ACYEq3oa2eCKtsJNkEwrg4ZQqDUMKHugg8RH27y4PSPgwBSqLRyUBFKFsLKBAWYaYs8dBg1T6TpsWBnbNXf1rsW",
  "key15": "AkF35sr2T1yAiUdYdwURH1Jt6uC1B5V8jj1bqYSQJAho3mDDGVMTcP6L3vv9Qi5B8Gf326djvKsKdKq2mWE5SJ1",
  "key16": "4hky5MFJjbdgq9Dh8BSmSwXHXusY6LB7tZaPz92MM2TWatgP1F3pRfCVrKCWenVS7rSKojC9onYGZfEr2a1MLBXt",
  "key17": "2yykgBBXX3AC633UsTdD1R5GLZdedMDGHeTjBh6QBqz5YUhWVDf5UvAB51Ahg7rtMuA3BUP7Ho42zrqmxBbnQ47X",
  "key18": "3YSf6E8Afp3VRFspWH31cyzSoJyfjdPpJ1zgpmVhsKDcBiEtcy9MpBHG5xykZVwGn9qefKKt6ZjBS2DjqCRjUnd9",
  "key19": "2kcuee4cUjUZ9JLaqP16Em1YnPvUCoM2bNas8jsQkqmkosJvbkCgdV9MXHQ9yKzQAruJSzwCj1MuAEqLVWh7hxtx",
  "key20": "4JD5cpYsDLLR5fxFT6Y5k3134V2hWjW6nKkYiVvktRQk5TFTvZKW9dWr8MArWoPSwFasbT27BSXcmz7LMGLr1iWn",
  "key21": "2bQioTATQGCEv54vPSB99tb8xiPVTAvMmh1oDRgtZvEXD7RrcMbpnDFAUtzxRhctVhMRjuMwtyst4Nk2CvJK4wTp",
  "key22": "4n6ejy7m2UXdoiVnpdYCpEhEacQUxH8yCekLMPhPDVTvrcfDqSoF48y5f37uMzG7Qw4HdETvSgyFj2nBLnv42Ddb",
  "key23": "3FAd1NswHRsLYiUnM1BaVaV1YwMAoRAxm2dp5zkgMFk6o81GTPar2nCuuQXB6YbaFVvWY6xsMewQUPKD9f4TM8ec",
  "key24": "5aZwTaS6YzvwSsdaLyKp1gXcWXad1gFbnc15XUGwgEuxFSr3MHcbw5C9td1rDwkUhFMHthtdD4acKNnVzRKFwmrY",
  "key25": "3PDL8auXeU8uxMicZuGuXUDZpfLWc8WCXFrpxVayDusx6kbZ9eW6N6JUKQBEnrRKVnmiWUpfYZmVAYmc979rLW5W",
  "key26": "4fL1B6mtn1YBCetrPpcC7UkfxYCK5LSoXCE5bFuqHGzLK9fcDZD2KdrqXUMBhNytcsRR2guZzUvcdFqJD6qEe8sc",
  "key27": "473pgQbpc14iB4yZ55og1T6mVpQjXFirqEPkEpmWx53fwcCdTVfreNB23EfgWjV6jFqXFWF4pFBod7oXfmydcWvD",
  "key28": "oBZmTCrAZaW2FXBdaxr5DGyHZiYfSzbo4Q9TAVo2k65ofxe8skco1DSHhTKHbEbPFwNZMsvAeYUgy9ojsyehoWy",
  "key29": "36JBq3f95oJz2HawGTgKgGTyAd5uajvsAw7iRqQT3oZnbuoYqiKEx2ZTPHFyQ4cGd1X8oMAdMVAhNPRASazACEFm",
  "key30": "NcHUuGK9dh8FirM9kkN5hCJBYATmSHj8pbGi5NAfcgjstNvb4nfwZP9s3dT2Lr1RdB2EkeiwprCeY5TVb3iHwUH",
  "key31": "23v1jov3WMvNraKJmF1oZxpxxjXhU3UMSu6MuWz4C4kHJUKf37AmjDyF9fPGmwuoi25F3v4V6NpGjRWQ8GYFNmzP",
  "key32": "64AWg12CRsWWahSr6TdfM4ZRVYBgbFP2vaT3EuT3U2oudj42Mu7JoHD4h7KWtKkC9WxDTP1QEXGNewGTYzgV6V1z",
  "key33": "3tJbsQzzFLuVXrqPTM6RNsuJuJHSAaT22eJeQGVNRqsj1y58x7pcT96ps6PFRd273xWeckPUqtmqWUJaDYQQbpxN",
  "key34": "494eCAMckVifn4vkf9rEyspcs5s5rQFouF59gJRxY1GF2HU4bG16XnyvvR5StCX6uNVeuHu9JxEAbNDAtb85sSkM",
  "key35": "5Le8qQP79D42NRs5kJ57f6HeF5cjBbDZZzSTHG1q6Dp7cPVHaBMP5BLupqPpfroszzQpDd3i1KrfMZ1idYdzhPzy"
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
