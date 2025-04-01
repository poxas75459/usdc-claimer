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
    "4ZWpUuRAYp2qwsd6ZmKN85TjMEmSCVS1mG5YPhJfqbiFLzG2Dc5V3nd7P192yZbknNFz9RVmCxQsFdHX2Cr1S9XU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kRq3JTURAEjcvoNgbKPrdiZVvvTZjeVrNfvivRZDjHtvU3LS4wniYqQo2MAQUhaoWCM4gwPi9JKoajjjwRXvPd",
  "key1": "292AFcYX3dqNSobCP44FDg4tSLmyGeeoAYvpuUF89y9NL7wpfxWwjo2ZFuDTdS9NWVicwDKYdbHnYbPz13rMH4wt",
  "key2": "3T2eTXxg58XWJo1K6k4BfrabK4f3iifgXBuB7RAGWPUB842bPuyWhfjv91bMeZg3wjyAJ5LdDuX4AT7YoCLVsWjV",
  "key3": "4t2YmAHxeJzeFm3VvKWXPsgfkKJT5dXAqowKxc2XrqJn5wr3bZGTQAE1UMdgUiPBFgAWsyfQZXtoTtcYjXy2kqiY",
  "key4": "4K86iaDcVa2QRhDWCPZdGRr7CBQ4R2kPHCQ9c6rx1C9ShxJk4VbypWA8zPJ8pYTfgAQd9woWSddqcdJ5pRwXYYax",
  "key5": "4vcdodRoNzQZzWb1Bb5GwXepY4kbrTVh1JhNL3y2dcDZNfLhetVVZjpnXRK9M1Sau6ny9eiqLXRVRqDeDa6qkRCu",
  "key6": "4756VwEUnsKMeN98SQKMteJ2rAwDcpMkAtWopiHQjXpebkVWXbhCdDH8toSv5fu4HD8SbxXqBrJYB5USvNmkLuz7",
  "key7": "59n21w78nQqruepRmarj3BwtGLMjh5KAu992oH4QYYUk9sq4jsB6ZHKHpgQhcZtZm8pGsSQ4yHrbN3cqp2Tjm8sH",
  "key8": "3CXoq2TH26kqo4digUYyuMD7pDchiGmAr9tTuZkZH75KW3QBcJnK5bETT6b2dBWKNuSANm77FUz9kRGimdSWM7vM",
  "key9": "5McNNZPV1QR3H8JyuqUHutrE8m6CWUjnJ3m82JHavu2PsKVY96xX2jgup9DUZj4BfhYf8MqdEwbWhrbQC6PHpXJj",
  "key10": "2utg8LjC8PBX8JbURZx73XRLQiHKKNwNWsS9MfHKxppRE3fC4ns4eH87UrbhdDjQobzEyCPJGXn923Q3JCwV9Xtw",
  "key11": "63JXSyemhoED46eYSFUQ9UcfK1VxraLvkmQ3LSzcNuh67HDsyRKXPdjaLqA5AbWvCJaQjXzprcdxY95Mk5YnrYkV",
  "key12": "2Z5QvwWTazNwrWqWPwbtmUNU5dDeA6fNUZS29aPeVL7isZHYoDDqzj9Sa1S1PvmnmXWGVToSS82cSRVFg4Va3VxS",
  "key13": "3JF58ozmJM1MYvHmfHRKF3wEUoLspVUygZfmUWLkjfR91KoMmZbcivmeTWdzJ8uxvL3Gtz77b1ZctkC2JKF9XFu3",
  "key14": "5UV2Na52S7ocxAwFBcjrUs1UmfFNpfFoKDZW8mBXyUCwAMAmMbGWEKkcP9fnjHcAHmpkJZuZgT3wwW6NgPoasJ7X",
  "key15": "2Ls7hsA9SdxgvMBusuNsBpq14Wrk2eKZrWzgz7s4qvRgDFKEeTxaCksfcqoxcAzxSVcEG4G9dtmyo3PcBMLKwH4D",
  "key16": "2efiA5m58FTw1SNfLqKK4j2U6WcDYqbEPPVoiU1zhHxM6qAgiNpe3wqpSXWP3zSk6uneprapwDaEtpEXsx4R1uLU",
  "key17": "3WvTLeM7NSHsYM2W6XsjKQjpbUxzBGkNqbdLaUbDT6o4CZc6hpxte21KMAMGANCAjxktxDhvEWDkfDCQcXpZzXvu",
  "key18": "49khHVt9VamXeruaozwb8vTgUX8v7SYVLwHPbEzGS9czLqN6P4F8VDQH9AN8yoKNtQZNZ143hULpxjwxv7ANtwrC",
  "key19": "2KQtKEyDgJM6sAKtQYwGh83h6xtTzcReJECC9EnxmPSfreuMQahL8QRVh4h2KmqPMGpu1wwJBNeGR66mPjUyFRe9",
  "key20": "5U8Z9SLHVMebCC4EXHwJZNx5buUh7Aq42wTHcGkrf7DUj2Pdjt6aV9aEELVR9UJSvmHLByfniC7BfY3NodsTKDWU",
  "key21": "vqTFTXUv9cHmEwm11NGaPCHqfJkFvMrEaEmJBmr9pkLGTkRmQMkTg3MmqrQQJLibDHe41ZdsWEKroU1B5N8YHDC",
  "key22": "5FeCuXCZf5T8cspn6EUqgtZvRzgXmLcT2MoHtBPS1afbwTmyhRo7TW4Y2aMHdb7w9uXCapM42of8cYvT3SRD7tJg",
  "key23": "432VfEePsFAgkaVJ6qoa7Yby3HFrF8szAvTDrPCHWUobXrzvehwcvQkYkpSDtcR2XJFp8K8Yk4TP38k3W2aTcydQ",
  "key24": "2rtWNx7PTF2pUSnEUWnj6MVQC5fGwRxyHwKkvErrswDUAuRBh9DnwvbjoNwqwqQviP2HDFR3zJvSPzkPt4ysb1cv",
  "key25": "vcCd5NRcR7Xf1dFoaexnFKUmDLPHen7zfwjprivUzhhV24SemvfBABYSypz52scwCbKvd3cVjohYLV8uKBgDyPm",
  "key26": "3rnYbZxAX2bBLkC4GeBRhLM51ApeCZRJgfPwPib5DUpaHV8eG59RinBQpJmmMZZ1zThKYDE2TFT2L1QK3QcjtduE",
  "key27": "dKzGSL8kv6dVrMgYhSGMCucmYanPWUEQnom8VMbN7fYQFHQX7Sf5JKG7sKhd1WQThGbm1ZgzUV8CPBxaNyPhJoH",
  "key28": "61Ukhyv2LCmMzobqNgLozVo7aB6tzABBbFVoRjmNjDYLUApESu1phJFeeVmLjM4eicdgTC3znA9T92cBbjeoKdz3"
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
