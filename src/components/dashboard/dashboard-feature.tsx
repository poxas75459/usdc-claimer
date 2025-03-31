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
    "3cTxCGtePKhLQ9DR9yyDLiUNdzb8JUT3GLBW1pRYCg54qf3aKHEa8XH3dJ5s5NcmcFeK1DXP74XArZpwf9u2J6y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPzjrdbecShf7ZRfvR9rQPcAXkNY1Y7KhdgKrDBo6ws1f5iq6NfaBwNpg45P8wcU9xgbvMC1ZafRBZsLB9rDBtm",
  "key1": "3jkCSLtmnML3QUc6pbtRftGHG2NfN8vH8kBuVk7uzfwdzinU3z5QaU9ZQB3H9Qnw9xFd1KDRLGnXfi1kgmm99Amp",
  "key2": "2s68ibAyqXuN6M7jt36WJuUmiwaRtkJWkPVGn5ce1VSahZd1bikMxw2YwScFgRFNjmYje4qZZtzTmZMQbcotBMhB",
  "key3": "xQUVxjL7mwru8UusnLXMGwPgmtvgrze5sFNdnkv8wEhFnPFeGbdadojSQ4chW42xsGFc8YRp1t59Q4hj2WCB7xS",
  "key4": "4pdKLhqN9bFffbnwJq4qA2DBqWQwzJiY32gfJvKSJswZEtorX9vEU1AuCd6NzjZJMtm86MHL1Ms58CwGwEzo1iqT",
  "key5": "24ec4EPhhp2pZCHTvNCeczwnzpuRBQ4uB2WkYASQViBD3JVzWbRQ98VxXwLgLEiEsbf8Qr9Chq45ARAUTh2CSXu2",
  "key6": "33fJHXbyhLQttvgEfEfVmTb31a2d4bV7o71wnV552fenhtjK6zRyAu2ZsAaZFAkzwydeTvfCCSdBu3ydY1WSnmf7",
  "key7": "By5eLESbuFBicE2jbB9JAXdGMrW3We5VFcX8QanmPooDVdMTbCvthCSXy65nvBV3ULfMHwZRLfgZQc4ne5i4kBu",
  "key8": "27oHhw7soL2hn992wJ7CuwWuRwUSxc2D3DVWZKdDArbP3v8U7bqc3NUq7L1yUEtfDSYwsWSe6nJiLUGwqQLkeDuB",
  "key9": "2qPWoUyjvwmWrxuVS3GqKVZCcHBQoASvqud2zHH6BAoFp1onHntXupTSe6Nubyoqo4an9pPdMi5GvkJZ6dDDW8fR",
  "key10": "3zCnkuMynVrjPrA4bxxcF7ZW89zYR6AHAnzMJZ9XhyNetX38KvjTrG3Ace61faEB2stUo7BJZwpwoGyM5a4enrHN",
  "key11": "5cnhBrBFwomHR5ydtgt5ae73NxR3RjDpJ5AxqaazLWaXFX6zf1ji4Qm2ikikAAugzXnE65Lm1qcqr23cUBmHC5mo",
  "key12": "3uLcuafairfCpyLMG9Bt9KrfoEH5PGNaoGiJyFAZ3TBCdUMAe3qihVytsP13CV1HmUw4M1aKTEHqhcJCsuUBdFwq",
  "key13": "2narfuFukPD2ZBtg2n1hXyWUxHZ32QMw76YEw81ULB7TfdFRSGULiExuYVGvPXSckzfnJq2HaVMDfZSynk4Kb87G",
  "key14": "5pF7XHFfshj3HEgUEFLoHrGMRhB2c9EkXo5XiMQDPZWEFCERJcqFmiBRwXX4n6TqauBVnsnvQkEXWtLmrJjfrRLS",
  "key15": "2px52SnmsdLXKGbAkzYuVWzt9e7RdVm8R2ckSJx84q9QeJgE5gVxvTteL7jSwMzsZpRCakhYxr9mT4h9wWxz56fM",
  "key16": "5eWPp5R7aqTpP4ZsPETrGT9htgP8Baia74hnjCxjPxLdbvYgbr5J7KybN7ZCFvZCwsAmDSYnmjsG2eG1q7CTnm9i",
  "key17": "qmB6TuAYwgxNjvpRaH1ecfbUQWE8mLMtcCCe63R4vNPe7AJK9Xm5bnNDZKPXXZ12aA5i58wVdiqoPdD2UraVZsp",
  "key18": "2nTQjryR8KwniaNWRwkJjJ67ma6K9m33FVri8trNstFv2EyirAtDnaA2HpTnhYjEeS1LePQsFFbZW9K72G4NzyFY",
  "key19": "43jRtbr5wK41TxBmUF9cdvG51JnfMcmqYfQkWfqveWQ875SEnospvm8ok5UCzjHmt67eyVNdu7otkDvQZCZVeXaV",
  "key20": "4jKsFZV4mTx4i94zVBA8RLkdTYCF7mLFbxMmsRkMubeZ37GvBxnGyKSWdjzKDnWcTQaLxPHXjtjjNpY99NCMZkMW",
  "key21": "5iJGHc7dbxMxt46L3UxyPPvNNF7J2E7vZsLA7sk2B2kNAjtcpsuQXymFGdLJLq9Mm6XKkvrtovgvCWJTGJMqQoHt",
  "key22": "2tj38WmZHGeXiNkq1Hy19ey1LNgu48wwkCUgM9C2VzDqZtpu2sNeTo73zx577DHFPUBSGNTRp2HhkS5swxe2JanG",
  "key23": "2HkgL1AuZPoy6ToimbTax4V9edZgpLk1ZiYaZnDqWqnXxUXQvW7zMNtyQqqcN1ZFsAFikZGmWR89wXkwMknKzZCv",
  "key24": "2VPkvkZ9vTdZ73aoUszim7VmqA8UNj7PEhARMbczRWeeP5eZFW5Qp8VJts5831RAuxFeVGG77KxhXetHGgRGzZGM",
  "key25": "3fXmVQcWKB3AaKsQZqy79qLXu8iQYL2iDdNDNrNaUS3pocjv39kJaKXC7udLBECJNftavCcr3Ch92tJDvQ7F2uPD",
  "key26": "36Pi1LDh7CVcsAGYw2z4WEnvBkJCVxTRHpjepcUmKeDqEvoTMH2WC4wBfJSQHASC5Yrw1quDvTc49CzKYiE8ZCza",
  "key27": "zSSXCE81P6SV1uDVYSXueZKrj2tS4RA4UDhU88ZYktt3c6FKZ9w69fipw9k1FrHVP37aWHCtUtRoqyxza5xw8Jh",
  "key28": "3L8Vjh41wmGWFzkZvQc4r87scSR25jgfmLdWhn6mhBRcMGZ1Rkd4yNiNbNA8igtVoUn96P1aAdY2akwrMATDHJyu",
  "key29": "64rgHKppKize9WGbBJWUai3oWJM1n8LhCp95wnpEtawjTpuoGQnJTsH42ATamiyquCiqMYkspRta8pduttqfTXVu",
  "key30": "5KQX9tYd35Yo9h8UTfNWqnL9ndKPKxsN9h3Wc9FobZotmTHtEnub4kvGASoqixSC86jtm1m46yMfC6rkPt4cYcGi",
  "key31": "232o3jEvYfkzDa599ZFZhBxoQyFMLjoYDYpXbZDUZc8wi81KuW5CqdjZqLKwY2PhVWmLuGZJboc53CqKWWPiWqU4",
  "key32": "654M8VRGgEsNVZLqTTyuELReL2APzkRYtks6DUJkV6Yabog1jyRGAaEAZb2XHSG91xeondEXfL4GFfixcfJWqYS6",
  "key33": "2Mvzw14vsCdnpRwhWzhun2ko7qzx6L59DbSDhCgwELiFu78kuWPCrZMR7RKECuwD8jr8SHoMiVAWk47DjvDKMpcS",
  "key34": "67eYRDQmUmYDPGxXT2NQEapi5iXHdcJokZfobWgoWusE3zYcu7a2cVH2Z6cVkXGRvAytSmAkDA6Z91szu4CY473x",
  "key35": "3wEKdAg7Baw8fBXFWT7x3nwLs3nE3mSonjzUzr6BBbMxnNKDN2hDHcp7cgkj47LacBTK4HFTPUc8fWEvBhr8KgMr",
  "key36": "47HkF6xrbad6dRPvZnU6Ba3tm7Xvv2d9EACYzX1AHgMg6X2n1bM58BfeRfRHMPRbhEZAX97XUYE8EEveHNijHoSJ",
  "key37": "38scYXd2wmub37jcagyo7JqCQFQMjxHeUuXLeijZnDbM2jxBXtScYc3dFizeuTQkpaYeNZnPZq5tWVw1FB4JP3QV",
  "key38": "37YFeAkSWfa8MKTj2FKJV7UT5Y4BUfGurp3dsmg7YCZHcYiEoN71M8TXjxovLnQzYUPj9Y5nsKTVZwz5T2hqoA8f",
  "key39": "37pqjFnta1CwntPQgcQWx7NUhPvxU891ZPynwbsJa23kRUSU66J9tqWyFJiV7F2ukomAYSLPi7K13hGrzr6EYkew",
  "key40": "57LZJJcZMZJW2CpaYZPyDrFGBJHaFTGurBMD3ngpagsWYHxgzCvmo8er2sbpjyjyD22rNzqUjvvBqSoQJpfSYi4z",
  "key41": "tM8ibCrjeTzzJKKLxzHn32p9KPtaoxe1Kvo1Bz94Yb3CEmjYgFjKCDqqYwHW4D3yCVZYAuzkE5nH9MpfTfQX42b",
  "key42": "5MtV4wYh1QP8BzXC4dJ3NTpV5P8GhLzdiUvUr2JW1CbtZWHVsAoTKoGuEd4qB7GuGoPuvS4fGJYATQjgdhnhDo5p",
  "key43": "56ZBu9qvEzpdBaEq6sLbc2rTrcDm6CtPy7G2eyHfWKmJ3ZyKdRtTHzuje7YpM9fogjuzQyNwsdKpHE2XNPeyiqSa"
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
