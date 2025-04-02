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
    "5ay4FrsrERRvzvTmFL6WinuoAhgZvRngxx7P3hmgt549UQXMxsFxpxqfVVsJZLM3KcNLBqogYBjn1nTcWbd64vTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyYHet9BdFs5v8SKuCGBNUCkhq54xhuxbYCBc6Fzv5Hx5x5MUdbEha41ofgAi1Ht8t5tZzvsw6rdE9mhsxn6Ls5",
  "key1": "quLdPJgxiSJPkTkJ8GG3WDKCe3531RSVfBSUXYbrejfiRdZuGuwu1MWP6swYdVmhBRRcsuXaSmJLuU5pfuTY2FJ",
  "key2": "5WoW8Ptt3n6qUEy7Tfrfo17i4jcfwRL68QaPnuot5DUks4NqfPENTjWNLYUdPD7yj4N6MjgrxWkituwuf7fDSGth",
  "key3": "vCEqvh6fMAtk1Hw6V15zf7NKDYv8mUCSqL9FSN8tgargLeRpoT73g81GtwKJ6rDtK1ZJxEP9akgXFKUjLqNhuQG",
  "key4": "53uAqRtH2Rqt1v1C2n6uQWCV3Ks2HBSRXr8X8yGzvZ3SYaUk3U36bqKFQYcUt4W6vQmizSX78H1R4RAs2Qu7EN4c",
  "key5": "3py4ULYvMyAzyk5ZBkEkwVQ2XFBiAfjeYrTfTZofGqVXyVjGzfmjWATBoHwLtwoC2JiWq9gpgbmT7x8nSz3kChJN",
  "key6": "5HiZx2e5uQiGZtSk6hcMcbRdDt8JBxxiWw3adHs1cWydmcUcRF1jfWZvqrHqzYR1thbsyJmGMLGYFUaJoVK4DecW",
  "key7": "3RidKQtPwLQ6qZJEV2spdAfhod1Taqky3DHJXKuTsgXaWBjoA9wk3UqdrPx5XVgkaRoMNSmKHAAgwsXmeWprSv2G",
  "key8": "5rUaEB4pdif18ZNTz91Sar2JUQ7dJrjZh6zZnNMYL5244cFpbk5AEvjahZ4L7WCvkG2wHjk5JxX1yNmkmVzRynTe",
  "key9": "23YLXcQB6nmYoVznmm5bQ4K8MNMvVuoFLA2mK3hRUDFyBqdK72H7Nr86vLsrAU1kaaPs8KfKAgjFpaWfa4Gb3hHd",
  "key10": "4fVS5Gt3QZM32XJDTUDZShokMTsHbg9aJyqbNzLZU5LPTq6yfcyrVoD77Xdxg1e5nb77t5dBMNqdyzUAsnuSjQvV",
  "key11": "4L3Xdh9sbTsvWeDcuMmGkjeUNnWgfYuCzHJfJR5phq22aqDFtcJTi1CdYJvx5pYoQmvTSmHEJvdXjV2AsAEFPhtk",
  "key12": "35RGXcuwotV1pt9fpjkRdZZ1WXXCeGFYjYtef9pAokDGDQBxWPsZGyfMr4Cjq3TF59Cs2dkXWbpKYuWLbUKxEqi",
  "key13": "4guNBTkuMmyMEouaDFu5Xqx7JEu8b86M8QCaYDd7R6svJnYq9p7rTwAPiHmKqURJBfCsb7WftT9TrKt8LcZjq9EH",
  "key14": "5JcszXUUSWf53XAfof1vpwP3VdyzCHw1DSuZX9cAEQK5CGsmwrncgjZ5dMPk4b4P8H3puUkURoicz87SU2DY358Z",
  "key15": "5cwFW6BP2hphoDsJMRfzrWd5fD9CPTEqBmrxpNg8xvFwkfk5zXfmkEsNBvUxJV49LVh497iUsyZh8Gm79ViMipeJ",
  "key16": "4mj95Z4HbDH8P1ubU5YEGD47WE2g7z2zQy7MViSNWx4bNmyzhMhzjCirxsdUMEN9zrF5Fhk9LwEp7Xw5k37tmaPA",
  "key17": "3nwJasQxNfsiQ45yJZPqQedjUvYGDPXscTzr4hpFvroAmAYmxKv77QWriwzzBh2tpvXKXx9DjNe68r7u58hdwbqz",
  "key18": "5ZAiyzrEWoHrozwGdpD2dpv8BhCzXzHUw13W5JUYXPjvHg2TM3Q1SmHDupaxcVENJ13GWHsznKyNbLs5DkjFKLqt",
  "key19": "BiYCqi8b1bA7iuSvqqZ8AiJnGDwjVtoqYdgv1Ro2xLeGniMhQmmaNu8C2YgdpWp9foaQGvJs2WmbbwmKg4KENTR",
  "key20": "NrhLMeqCpNkjM1ZoYKo32BXuvxdbL8GgziBUoNxTWNv8fQzALFP36kSrR8zu9zGjE2SVqbxYC3m5WX4bFEHMiMk",
  "key21": "qUvWne5SoyVYkg6GoYSyHz8NdQgGExoN4KUmB4zWPSgD3CjtHn1Qum1WoWAs78eMvcnrD8txgAMY6wmqK7auqeo",
  "key22": "py9mn6nWrui3etZRxtqiC4J6DFF1y8FLJgVxwkjJ3YSpKf8bfwiC5pJK3sgQEznZteT8YGBCcLzkS4hmwi9iBKZ",
  "key23": "4TqArgkPK2oAQdcFig1ZebnDnGCuD97nkAgw2K1EBe24rLC4b1iccvXRwSzY3XixFqpqQYx5PvXWC1saGfnaZwYg",
  "key24": "2wP9SswonFNBEe1sWVXUt1wnznZtE4r9H5ihiHB1shNV6gShyd5CW2sjyEoqfvg1SJy2qtYbA493sL2GBXTj6KmQ",
  "key25": "5LCKQxsVu6o4wBfPfDMr14sEXW1VpS8CgfLXCULgANEEUrPRTBmeaBvU5hWEPcZ92d3MSsWiJU1ig2S4tA22DT1N",
  "key26": "611CBkDEFCuVnuyx3ePKKLG99SVMzQqLDf84Fqjq3NVeNqRdycjUDG9boYUMAKLmKuHrR27Cw1eaoFXXb9tb6ZWw",
  "key27": "5UMy71o93yfzk63AFEiurmDLhnp4re3q1qKFRsJYGj1nKswU6qZXubwDkWX2zCJCRfj63RxYjL8QttuLrKvvSrvk",
  "key28": "57RyjAQQ5MR6ADCwGHGRTtG1EvDLi6mAjDkH8drG3L8hq6kwVpfwp8UZv6Q5hARdxneS29hVRgHqyJwc5FNfgkjw",
  "key29": "FoCyhdyGT8bsFzTTVNxLY2oYPhR3WpUeN49RRho6tRcKjCgyPCLZFFBhv7w4v4t9EpB9gjDXNfeukDv4T9hL3rm",
  "key30": "51asY3R9zr6TfQ67As1qJ9XymfzhX7By9nkNKFtcvHmCn7o8LxiEnNNuzQnuo2YnAjs98uiCqSbiq5orJecGkAuV",
  "key31": "4XD5wEQzghNKibpAa859qTHUvEN3ZeffQLjfuo9XtFhCBUG9fQaA2cHC843AqyNXqx4Yp9URxorAbbe3QzhPQqaL",
  "key32": "4rb2qJdfTY7hv7Eu6sb6xspCPchkjNFyg2uPYm2wQd14kezyvSJQBHvTYRdr8mRfEoLs9hJRswM4MTEuzEDKEC8h",
  "key33": "4DWpZV34w4KPTbULnwsXUiAeWSDrvyn9zxgdfkyKdeLR19sffu8ZhwTN6VKrnrApdYerqk4JdkpWLevt5MBjWpoT"
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
