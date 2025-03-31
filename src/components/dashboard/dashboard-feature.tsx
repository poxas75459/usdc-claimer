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
    "5CDdbHMytJsKcj4RFp5LLA5zrGPw5S3h8vifgDUeZf1XWfMVHHd4B4bLfkJFr4qYZfv1rCUVTYmbu1zDE18PwLpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEQB7jJMCCbD1WrPVxdWYAS9ojT8b4d1pwsks9JMVFHTg2aN61Yn3wUCySgvdgfkXvyfz9BRbyWTxrGVBrKWana",
  "key1": "2yMN9GPB5q9ZzSJPwuy777rZaTFw64WLuALgT8yRdKA5kXRzJEn5SsfzF4BrPgL4TvNFogaF6BUe8Kft1M8qi2Nh",
  "key2": "5EGnBMRjz8XZW65ZgxmpScqNyBGRauqiXHVMxsVQbqNe65gSb7SJNLhTFVfz21HZik2asGaRVsnKV7CJwUTwSrUP",
  "key3": "2JiePppTX3EkrsZLL1min1ZCRrycMTKG6czJjbcPRXE21UGGAkpopdoDxigjuaMifVgjQZD8F5xHjadUeXKku58B",
  "key4": "5kfktwNRNttSn8MHpfPUvpavKFrTLhtTXTepVxHRhVxM1ZDXunrSVKxFnGZ3SEgU7PcQ1w1Pns3oKbV7MQEUDRX9",
  "key5": "4kQB1WoG2V7f1igErjhLXqRb8TMAjrUPr7HUYqnFxiK729CWCKMz2eZixnhv6TrscLFJzT9x7sR3H1yw4tKyaRqQ",
  "key6": "297YpRE2rvrYdqQBXXs4ZtgwkuCoUSoGZvJkmDc7Z5Xi5RiRSmkuwNrjUk9cTr1QvUxgnGErnxJypot6DK5B5Tjg",
  "key7": "4ShWNmrN8ctvUkD9qcj9FiiCCWfYQg9fxK6mDi3UWNHnjTegz3tLiGXfPjYnWUBvE2NLcAFg4JzMYFaBUbpQoi9x",
  "key8": "2TpyczM37aXwc6Q4h6GqrkQxboN6k1QytqNY6zJ13qyvPqrSn3K3aNcupVPSsvUKwtUJEP1JCAwrkTTNGkXag4Dj",
  "key9": "2pTbVKTqaQ9gCZkbQ1qLxtSHXC5xHxeNxWxFdbFTig7VzgYxC3iEPzy7CQM9QbW5cXDj2UTpTruAHdgYwLheP6TB",
  "key10": "3RYcHXa8nnHsoVSMrCKt6SS1gvYeEQJseVJXWD3jgKdFPGivmutEMWAUiKKkE2ud49dBN7KE9uhM2wsPhZfCSD6U",
  "key11": "5uUNtvZCXPKHH2AG44M5JQtAeQGR8fCS6Tox4ZDWoQVs2a6aaRxdxpN8BAjbvAyukuTdiEWBVanNjiUZ19bqPwsg",
  "key12": "4NtDRfBx4fnfzBqZpyjRWLbqcqEevZZ9JSVdX9WD7win8sD6PXYXSx61eBYtjx9RkmeuBkhCPS4qzoeD3Mbdgd69",
  "key13": "Sj5A6xFd6ocSkT1vXefix8wCrW5gSNijHj1HHjavYykvGnyktDBBfStEUJH4UucWaga9WfwPVqg8V2XaqHLQdXr",
  "key14": "4mvLRjZT6Dhn1wf9te7wNNXYjM8hJzHXvu4ghPoTNsTNEYWYyuBjSXKhKUakufj5RxSwPfQfHMEVYMUmxU78MTHg",
  "key15": "4TjhwFocen6ikoMvoY43huxBRkvtEWnHaAx3P4cV9qX4Vt2vzJo3N149aDqnNcZMjiGb9coFTbGYmQTdyC7UmYfa",
  "key16": "4KCzsotdPUd81PQZriFfcA7sGdUGbY5rPxEwySYgsLCDsS5G4kToumjv52VPSCAK1PXnq492QF8LpBp4YMdsHyw8",
  "key17": "2CDkthW5pffutBBDpmuGivjRy7FFzzcaR3TwxygqxhK5HiSGSzSj7m3sLZg1PeQzC7RC3H2jc6YK44wx33EMomQi",
  "key18": "BD3CbUdSZqBRCBgx3md5FG7rKnj4wZmSFpDeEavSafW8k5XHKW5zzU9jozFDYWqvU4hPwHQ9HMqUK2oLRnaFfuv",
  "key19": "2JXDr4zUFoxiqM1AbrfFy6W5Tsb7bhD2gTecAjqKZW9CLNhmiZN6666BXmG4mnAV92X42k4G2NxR8br6QTppXURw",
  "key20": "53T4NB2kU3KKQ6m1zNgEVRGxPNmBjPzwE9C1VG7BhMCaVsWg8sHPATdjm1G1EAQCd2JzWPFb57VjxMwVcP54HM2N",
  "key21": "47u7bGxrUE327fLB76GVCgbuLa1FpJ9LgUyC1AFDpkDrPqfRsPDoSR3FWNZbVgRFqaSSDJn989HneHr1GRHbCFUr",
  "key22": "USKPLei9PBbVyrGAGu8tB93tCYJEerEQc15brGeaM6h77xSs5V9v5yojXFMJsTJ3b1muotKtRHBpG3zHtchLwSo",
  "key23": "3Bnumez5GGiWGXNEioaJgtiqVbSvdrfjsbYHnR7zuK43Kq5KRVzu1s8odnWvUYH7ZReTVt5zvzfgRMLAqWBz8nm5",
  "key24": "25W6eyNBX4czXeaPho5WbcVUMUkirfGaFuJdqDgtLGpq3Uxf6MrdhaaW5U9kJBATdfk6SP9TPj6AbEsMoxTqkpfM",
  "key25": "5DGG1V42CN9RHvJdV5gRLNc9zCm26Mk3Gbo6MuPgZi3y8j68bAsT8km3iCKXefUTRBQRb9PkBrpesN8oN9PRgPup",
  "key26": "XxzQF8tsT3eNuECDBeqJFfb4zSpu2ubHKA5w3ZdQAYAnmjwANTv4idfuztbe3XxWi313ywFdwVVj44pPyR63hsh",
  "key27": "2zQ32s2eWnpDDGJYQJsKmH2xvt93eRTeaXsZm1gE1V6YfATpksUBYVLgSfjtgcH4Q251HStdmArbEJnuB7Nxoyb9",
  "key28": "5NrZt4pKYfrLNAGjtZBv9fTaYzB8aTWATChrJfwQh8baz7Nx5NA3GQMnMR2rNZty1LAyYtMUrv9DspRueNBTGNfP",
  "key29": "61ijskgcty84K7ciPix8f6m5WCotX8TdNgDvKT1QwMfyNW72cL5xcYjHPcwf3yh6G2a9fYan1toDmVzvmhQgq8NS",
  "key30": "4Wjm1upUkCB1WPbE1BLwtRnKggybq619fDD4EmufShMshfrQLjMRm7jb6M1YPEyQUNgVxnuwhUUvAybBkkuhMnms",
  "key31": "4UxJWcC8sjfyjiNY42PiWEfqpuVGFt5vsPA9CKgVMo8MhwL9zfdekqSJvsQiGc9hU6EQof71WwHugC5sUV8vhBvi"
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
