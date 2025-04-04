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
    "4si13qsGQRrNjKHJSTrYSt4BAkRGRphv6QWn9hU8LGx8vnLrZVTRxHtHJsC85JSCUCYMqqpEdzve8y9cWLkmsEwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmnPEJqYCxv1Af9pLaG3L8ZPKQ2rdgY9erWa5FQXg4acaYDJ6UAVEx2V1jSFURGQGK35kg7FD6uvnEgcJHULoK7",
  "key1": "32HAJUhNDXhytQaBqZfi6DGD58d7A2HNeRVnHwSRmTsCAChAKdsPDsedUpvFMNAChNK15Vez3oVXR1TqexHLv1UC",
  "key2": "zDRrsXGfqdfKV18RA9r9ks2KdUrHhrLr2Qu8kpRMTCNBacNwTtPSjngMBa28S9MMzVoQZ7gH7PPene5kQNU9ov8",
  "key3": "35T9pAaB97JR9ZSvRy6s8hRxpjTrzn9daAoszj6ZTGVDkqp7PSJogXDmikdzqNzCeMbKy4RTXuj2kEeJWhdABwAZ",
  "key4": "BRdKJNacNEUKkGqQLmgHLqb8uXWywoiC1wrR5KyRYqiwUqNE3AnMrzaHynUfGxn6YKuSgPyyVQjsas3syWXT3Xc",
  "key5": "3LCBLeDD5N1WMzQpZD5BpviozK7moL3u5ixKYNJqD5N2iADet4z9nqXEtUgpEVk29xk5gc5hTeaQApyb33DpzQpr",
  "key6": "3zCrHZRY1PfN14HJerq29r6SZDbGM1EaGdjof6g7hC2rfAi28MwsT4v5YxTgjRLtFjCqprjQYZGKM7aAF1ZiRTtm",
  "key7": "2btioa5GFTccms3GThvi2d5cqD4E2cDHL4aWv9LqDwxPUrvb8LhoaFpqQnU2JwxCXEfqSvYH6gy2SVUxsUtqTJWx",
  "key8": "4SwEMbweEGEuUCgnjMsQAPdmyhmBUSmhmPszYiBWr5SsSgUMC7SHZzHL36nKeJP4GED6BY1XE84w2KmZ5BbQJSFj",
  "key9": "NStTNY2aZV88z1uzdK6PwKE2qhZas8PCFiNe7pCRpeeeWwXgzJpMDqak2wEKr4mv2MGs5NkLS1gKzqy2PA42XM9",
  "key10": "4mDTCSxazA4pwV5t3sn8TChDGE4xwCkpwdfboSZgzNCup3LGY6TvRh3oszXmVKYeknZrEZNWhCZ1np9kW1PrY25K",
  "key11": "6191QLwyWScoWEjqi8WQ5P99b41mTGmW55NHF9vkcGcKcF4QWKc9RirmWz6kNHLZiXBseCMgb1rMUFnY1KeSeWRF",
  "key12": "nguwqHcc5YV5X8yW7FzUFXWEkNUSpAauSm85fKrDcFsGwHmkFHWywETgNabygCKPVLPoymtWkEazDEZEUTQAsUm",
  "key13": "38Aaaf5YDBJ2AqZhSF5Uy2MGBaNX3RkRT5RGBccUToX2ta4SwAXoStZoHzA7SQzfaSvnWhVLxdELDRB2FExVVenA",
  "key14": "3tEEGhPykJhNJZDo73rq1mHkw8XQyMfuGsYHVD7w32BhNUFveQQtqN81iueVX7gS9FYr2jwa8vNZvhU42iLzH2Sp",
  "key15": "2ni4deAqTWVGqFryAonNcD5kd3dJPi2tSRqoHMdTejUffAnHr8zJJTtnsFkAYotg2drVVQze4Kz2a81iLmwJzXo5",
  "key16": "4k293k11dF766T86G9njSg2sQt7sf71QT9nbMcgGAPBRRPPfcQ6LPddMRbk4wTnrU56RB37D7ETgEej9t3v2Wi57",
  "key17": "5Fb2AoXTmRVpmWQBVBNzJBVaTGxDdQ59xbsiTb6QY4Vxtvs6Ei4A9zAqnkrDaG2HcoUxWKhodG6RwDfs5FnmyZtA",
  "key18": "2Mp2xEqRTbR2ZsaYkqMMaiEtKq3JXjHTBKN2cHPFRFVUY6ZeNKbvRpNXYY9LSwcJjPd7xkJtBiPngo2FWPRQFfqC",
  "key19": "3BBH5eaJVWx9CaXYXWnaEEx3fDi4KPTNWLXoe2Ba5piuHBfjC2jX532wY9dWCoK1ifonyh24eWGHVsCHLQ2bR9BV",
  "key20": "4VdSQwfaF9FhgGVqZYXZfyNnattb6dQmh1VEQaSMfNSCVRR7nNs9RBEemTUtWdWZewPEZamjttgg5HbzPbqonDpk",
  "key21": "8nsKps9wxSuseWYs5RSUS9ST4ev8fHxojQPvnAQ4zfD5APkiTQidskaRci7JtFkzcu22Eo2TJK2vymYqMZwSrSr",
  "key22": "3S5Q5W5bqSR5AVatxoiPp3HSNjksPMe9UFf441HuEJARxND1cMSGCpxUHJhbuXkmmf3k5LUUUHL7F3r63dh5QUbF",
  "key23": "3nq6qWpXzrxUj5DVLzg71UUaz1ndF38eBPegifbHRh9LQFu9awXdYhNr25yQdVyaD2Ze8ZXVeFWeXQfs8JTxapUM",
  "key24": "4D4ZGKB6zBnJfGzsJLxfL6AeSM8vdrUmqysE1eLnu3RvFgeQsQCv4U1V55ny2nTFht6od3Z1LoBrMxnWg4pasdjF",
  "key25": "Akbj3a5mf9vzUcbWhEgnxVWp9FALZHohw7BqX97SVLNNCsnhn6CzF1XfkPi8DkDxtWyiDydowY76pj5VWv2UE6o",
  "key26": "34RYwCAHWfJruw6Y8G7B5aSLvTvnA8CkkZ7FmYzSpR91S1KewbjVwsaSoCPTK5aJsT2YfiBYK2vEH7anymuPFtkb",
  "key27": "2wNFYcEQCJZUiEieMQXDZkoFVTMp8Go6kSCnaR1A41UZvRB1ihbp6PoNN8ozTNKdCVuxvRGYgJL4TFk4hbuhpP5Q",
  "key28": "2PPqRijPB65XyPPQQdwoyEr7s8GFPweDReZUvBLnAbuP748GHC13rnCzkABAqc8VTW3JjXQv5QQ1C3nGYmovb3FA",
  "key29": "3Mp68n4HCMHRTETF7Uqv3mAysCxPvwcEZ82eCWUJxVsGLyJiqF5r2PyXUpaHThsz6BWdn149aWwxPTJDWrZMXcDs",
  "key30": "4AGXjZtib7TUCTYzaLd8AkfnwGrdQnEPeUsy6DweT7f7xyWD76pt17bn5E8xPGSGjXsomoTbJHRsjHEkPkUuk53S",
  "key31": "JpGa2T43ECr7joqURvMzshZaSbBKeUBFT7Ejrn8KYDUTxHvaG6J1MJ3tR3yiRhmNug4iZC4fynqRzMEoWbuQSbf",
  "key32": "4GFxQs9iyy3cdToMdgvzomzab4x2ZDhwpiKkjaXsg7C2iiuNoFvEKCRoPnBxEXXiF955W5CRJfK444n8oNPU4TDF",
  "key33": "24w56p4fW6N9XA59WLXyRbx6ez7bBVKQxJnChEjLmX2CPTn8iLX5zmkvD2FBJeL6PTxr5QVpoyu4PnaUuWBHKsSn",
  "key34": "khBmggXV8GUN7dYxNPKrku1YSYD1ke3UtHVBveQ3MxFb1vczVBEzQChZLP7GR637jZPbwCGn1T2Qhvr9UkxoLsK",
  "key35": "2eD2pBSZMGsxkk4K6XYBGMD58Uyd9aRgrHMrjTK9dZoWuKPB1ucmka2g4vZ1g7iEuwZxG1kYP3xd9TPfdy1nkj4s",
  "key36": "2T255MhysiwSWJiYT6hRsuWYzB1cCpP4Q3oJbpsFSLRjixdyFF45j1rMLhrX17rpinn1YdWBgPSCsv1pouuu8d7d",
  "key37": "54upY1UCPCDjzc53JeyUP9wQ4sitK3jn7LP8LYAeoUyhU8iA5MPtwkjJ4QfYW3iUcFFuT4B7Nm9LbusbqpJSsLzx",
  "key38": "BdQ54onG2QrcfEfpchqEBfzycgr5A7XkgQhjXQvArZxCvvPhV11njnx5oThzJ4yDKVi3TjLXvHEzcCwvAwYi4r8",
  "key39": "4zvwEJc9Khwj6yja2bDFCjmbqQAdr3Y8uiUGrhMKYPDBFGXzwF2NUMwyENypWxvVRof9KvjUJG7tgqnn6fjBQbMF",
  "key40": "3s1nRq6jazDGwxJABA6qCpFHpTTfYTnWdYyJgThQ7PaoqtJhXBDp1Fk3xdrrh4aThUwAmqaSoVZTPKbsmzwV5tgD",
  "key41": "3hMi6sqwSVp23SbsftmNA8Yo33aXpBxMh1oaNp9LA2ydAXMLdVbmcttaD45wTdfP4Qppq2DjF6vg68AFGAuM7ros",
  "key42": "2p71KEYqJBqjtTF1iAsWE9ZKtUSqHhcGFtDGFjUrDQQpGVb4sSNh2jUHxd42XeDPs2TgwMkJRZw2n1aovbmt5uc3"
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
