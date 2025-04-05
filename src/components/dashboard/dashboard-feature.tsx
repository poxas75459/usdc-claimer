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
    "m7Q2sqpvVoWwB1DSh2PCmjyPqRGkB2x6GeKwo4BJmeDQBj5DvdKHt2UEtHCj8cethGy5M7bCuYdojqX2LGbJhms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PmGLDcKMstMzimGUhPKrER2Hm4V2ufQHuJgHs8dCHPsasN3xTQJB5w3XivFohAaYDPDqsn4Y9C2HiotsKMQTDFT",
  "key1": "5ebzWFtSeiRigQFtmDuqdbvyb1nHfbRNfnx6SmVSFFmKdgh7G9sc7Tiv1TKN642raKYsCKCFL5dqgJwxEncB5yAx",
  "key2": "AFw27siRueK8SVh7FtrWNxposXv7xKnXwP4x7PAkQs9jRZGaiGEJTzf4T9TPjZLuy9jSd9TkmFx1qQZAKpmgWE2",
  "key3": "4bsLQLXp93HPhebwDxvXNnyfcwmgVgG2wxfVzNjrmQMm4gPzgKb9YmAtQ8Esp9ptW6msoRLTiQNQMHxcP3KouJA5",
  "key4": "45zhpPuEASS9YSCdwyXEveMWou24yEkVjcaxMGewha4UAv5BX77SNWqnBCgRnKKvAbDKSwi4Sa1stXV7vG1etxeH",
  "key5": "2Xnivd8ZnALvmSHTtvuQzhj6Qcao99FASA4X3Uia2DYvejoFK4iNqhoHqB7CmSrmUfjeS6KtqCFVtGs8ZkCz1XQ7",
  "key6": "2tPahjXRR76FsxrygcqL17aGSghbrQiDtYWnRZvKJ6REdMGChALpKXTx989d8kEv2QTBk8UbsXv3BPaC4m5Gv5i",
  "key7": "4jSE58YkDicmMPpGLb1okAFyFVF7SU7tuXqwhwhvCHzavMSrA7RfH7fwUZ3rwQG6RAPBkpZabdfHSgoiY8RjWgUL",
  "key8": "2dgy3qjyEYMT34o9p4Rd5gYcpckWopzYDdBHC8LvyHdnghpwcyc6rjBMfCiPy5fkrstST6CsEFKNCEBF8nM4X9A1",
  "key9": "3t7M2adV1RiauBbVaAm7bcx6CaWwZVWLbSZPTZUt4Q3tzKazfrGrBZw8J4ZGacPTFMvxt192jicoxbEaepVvuh3T",
  "key10": "54vmUeDnNb6r2rMQPJDUapSJQNB7rcpvoinKS2jU9WKUYU5eq12oAFbEXafRCUN37eTnDiRENtJpQyRtW6KDm3z1",
  "key11": "2ERpyUEjpNhBu9pCHMV646QBzGhf9NLXXzFFymnxc3hRCoNrw7Q8imGu75pm9ASJkE3KX98snrgfQMHLzJvQXrCM",
  "key12": "3AzMNBtFf9coVNqSUWAFrWU9kEv6eiSA66wem5fgdosWu74DauGCESzZ7G9nMysoGuhkFqfH6XPcuHebQGsdQ1C3",
  "key13": "4sZm4UEuQx9VZiSCU1PUP7batpaF1jP5MzgjhN4k1XSAPyH5VWXKYgsaDdnyYSqyZBsRVXocLo23AYYxmP8DRqju",
  "key14": "3fyMPmyWwwh9WCFLrgc6BdMTLCDoZunpgbAR4BBZHTrPjqhJTbqctMZRMqYMSZeE9XSBiQ1vkexdMbezYEQoGSCg",
  "key15": "4YEfNwW1RQnFoL7VQ9yow5p6mFzUR1LxfFfUfUDd1JrFaT5HgfTEGr7NELy2UKrJRZBe2BMabYPJHgNbSm7kunHn",
  "key16": "5NcQZoHYc7mmBEsD67zhWnTC2nDsHLLqzhc32gVkZa45shDX8vmPYpzXJMXxbex1NFzkrQA8h8soHW4ysgrpT4Pq",
  "key17": "2bxVnnWxWuNSX4P3KBT6bzFy9JTNJwXU3pst1aXmWnkvPdVLFdwXDiH1cQa2nb8ypChE8MxCWkvB34dRQDW7tzzm",
  "key18": "2yJrkRFPyHqf1tFf5jgbNBzEkBXaSovPVZ7vbqf4RQ2MHStuvRLHXQ2wLhuSjo9qVUftFauy6gTYW7cerAX8RGos",
  "key19": "4kAh9ag9sHYKtCnBTXnLEM5qi8VeHi294JTrH9tgm4bt2QmToj1Ydjwy9sRYujLDFs4vboVrWEQfmiWskjZXi6gz",
  "key20": "4CtjuE3BxdtniZTTkMPS95V7PAjWX36p4fHiuVQi6nj8aHNLdUfajdwGXUcPXj7fchbSk7r9Mk7a5VRvz2FtFgBH",
  "key21": "49C8TXAUUHwd3bUoJU3FiKkf3akx8cfqmMn6i6dQmfpmDTJcaEdvSfJRcqTmXZKa3dXUiR8Twsazxi8WHAe9CT31",
  "key22": "5feqG65P1RyRPtzmtT5dJm3EksyjS7nAPaPMHmErg1KFC8sJY3116mTozBZrP9JQwavXKo1NbuuHCrCMpyknMHmK",
  "key23": "28RoprygjnyxbodTsCFWFfbaE3ptiHKSSNBH11yrinFh1E1pcKGd3wWmT79eaCPVXBeXAqNnbGe3NcKVyYp1izVS",
  "key24": "3kAfVwa1GLpVmdq2rHcqcWD6UfiaTJWLT8taAYaxw5XBV5EXfZVhCvHfnBS2tPGcscJ31HqoibN2ubry8YwVE2W2",
  "key25": "xiBsfe6AyQarSSx4KzkwQ8so42e6Qf5edzf1yhvxvbT6rY7yVm9YvQXoP7citrBThB3bztjktxnNZtjnqpFT7cA",
  "key26": "5NjKsYPAZA1aZbJ2tMnWn2gNnPEw3q53R1KoXHeFKQzEaWZbJtcxkNJRsQ54SiGSuibJKLHATHVKaF9jTsXDbesJ",
  "key27": "3VcdpfXbTQguMPUJZZtE4S4Dx5E5piAGD2KaQc3mtED6ZUMYKxxkGDboXXeSk1XmaHePddAcK3aywZmZu9z3ajDn",
  "key28": "3SzyqDbeD9PxDdioiLY1vZzfZjtf8CbUj3nfk787AEYW5LTy47sd8B2WEey1Dxc25bFDxcAzebscvv1pfJHqBXw",
  "key29": "59rE1Esz33knkc93BnkM19MVe5FBeWXxR3h6ATfHSjr4Z8yCvSe5XP75ohY1EfrxcNbbkETXDQxPTXsmGS2oxohb",
  "key30": "5uqh5nU3MGZSdhNVSDtX9p3EHFCkjcGW7cdABhtRX3XqjSmDEUn4aVwDZBnZmqyfMB1oFF597g1nXFQsJdGa1jmJ",
  "key31": "27S8BDURLz9pPMBwH79cFL4L7cit9y7Kfec5dCkV5sFDDRMnqNCrvpEiqABP9PMHwGJ8dY5YYQxrGFpAUsY4FqDe",
  "key32": "2ARVrF5Rz6CRrmgH1Pkegvdc1rss92jWS5vwZjAxYm1RifoQpyhvBCUwZm972pic512JvmyA7XcHagL31SxF9AvR",
  "key33": "3LkhJG9JaAg9Mcfc4kDnKhUKuqQB7QiphR1iwFbxtAws8WR5YFFmKjcWrCRhBHVeraJC786WAJTBDzQPYDs619t7",
  "key34": "4Yi2GJrcmMiqPjhmNdFhH5GxAt84oJU9PnG9AxHo8Zhvm3SyfXMrwqMi9UtnkvmW7BHENf6NgqRqE7DWgJXKk88W",
  "key35": "4VdL13trToDZ157CzrcDSNf7esut11RzQAhWpW2BGAWG4GsAMSXsVLxreEy7PRL2c2LeMx4mwYwerGXk2gaXzgJ3",
  "key36": "2G1XkQS1hr3vFWmi3Hw6rwGXGGkD5TBXoD9cZ2JTtAGhjbyvHSP3pNbDj4WbuzcPWfYgSmf2PY2kdrzQBAFY6vtJ",
  "key37": "2MrmyqLSu1ywN5Gv7GzrrkLGd8JauZoGMGwd1jpTsRJFwZJ4MN3JV5929PtVjT6FPTBUL93zfePngzYWQEzoXZtm"
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
