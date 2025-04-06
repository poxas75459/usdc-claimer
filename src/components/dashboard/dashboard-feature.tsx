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
    "EbLME7pEVWA5iQoWZ3tWk2S3gNXb7NtYqXdePEX31yysKMKntHSD5ugFhZpxv9uYA6YwLdW2J1qzJs4fiZXBwwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9gi4umqFxVPWeEoFWZB6zv7DvCDzdGfsfjvK88sSfNDfzcyMY1Y29Wfu96QsQExErFs9y4SMa9Gy9KiwJYcpt1",
  "key1": "5yhkLEHEsPqXecDaSA3uCmchtReYvqYVowfw5m18LS1ok7ie19S2Wgg1DswXaeBnFa1bqVL9wQTedzWeQqcqusVp",
  "key2": "3BR3iacq7uShbYVwPbCHfh47MjDDGJ8QYvRu3ES4pcReCbXtNcadFcge3A2WwX4BzdivmBkfrfCJ8bW9PFPG6FLt",
  "key3": "2Epg7QqDdfCfnaKsD9bgJGDK5pxfs4QBDwyccfARUpKauGYh9vTrxr8ZnoL4YCaY4Mcy2Xf6kUiPZkAJ2STrm192",
  "key4": "2S1h9FJkhn9t1B2RSZ2jdME84bkqF3guG2AgbG82Zm5iQ2hJ84X8Z4iPPWAhzFE5wNWUU9aXGbFbEk9a3x8bMAD8",
  "key5": "5uDXQ8MWVAxdCPiRh5SjjKsHMb9mL8mx4nVcNuudThiGFoVZ2PPaxvfxPiUF66XtmUVZCwrLPaHG8QupvdjtNYuY",
  "key6": "5ra5wjJMoYhxhAuo2V9DHExoog4zAE3szshhm17n36PpWj75dqPaXfFnE5yaAqXs9SEY8egKwZDDfmZtyGXr9uZm",
  "key7": "5ZjZdP2AQNEMRd2igm2hjtTapYBREayPtDtLSviQMXCDXUP5W5uSDdMZz2HjZqSz29jnDpqtkBZPfMRMs9Hq7k4T",
  "key8": "3EDpRVPn35ueZiAKQCQye8n53PBwMhDAPoyf3tRrjfmByqkJjMbvcRFvTmw3ogqMMSHCwToEoVGxucJsbfWqLbxe",
  "key9": "F93gwHFUSu3TdxyHP33XgkSxU52Htysw5PmZ6JpcsSMrxoMM66HyMQvmFJjEzQ2ioGdz7f6QVu3m6r5qXt8AiCp",
  "key10": "4kVZ6vggYmTcngHwqrGxJZ3QavQrGM1JDWDtMa28ocQzHHGw2En5XUJsWRyefBQA6u2h62VYmjrBPS4FF343ktmy",
  "key11": "3FdYemM52YSzPpMCURkez8Set7BJfcNfLP5QnHAxNRvwR9ye75Yua8joiupEoVLS536rW6dWcRRpgGQKFaXseChr",
  "key12": "2PDCcSnQ2RZYzoeAe7EwVJHiffUJm4jvBk7xSoz3nDA97kXvHmRDe9tX6K4qN6XkfmVdXhtUoX6yczoq5Cr1Derh",
  "key13": "27hiYMnh4hMnN9VD8JF3f7GxVMzh9MbTSaQN9NsZpFsYA1ah9XEQ99dyVUnDZbMdok8v9xa3nsEvWUcNowJnNhhM",
  "key14": "4Rs6KHqo13Fs5ME9t6FMy4dcyrmFcqoeUTtjhvhh4JZ8mksk2gezp1Xs5iHXswrBq1gDVrQu8FvzWY4hev91A47G",
  "key15": "3iTDYkqdVPBWM3j4ZXB1nJ1mKDBPrcNSKRyUZJWpVmMwvEv5pagLu6y3CTrNwmAzyy49qdEAJ4dJ4SzSSUS6MEa1",
  "key16": "65AnVZDZrLW6aBqCeXwZvGxYgWPKq7ZbrPQB3krPvx4oHUQJMZ7orrXk7w6JFPxK8Db8tAj7AoteyMQfy7UpLVVA",
  "key17": "29ZmAbsB51YDddhVcWKsx9uwGpbivoez9KgAR4yrM18ByhvF6UmTRDxP4X6sYqhBtoERTBpJbDHJxmUTZVK6vRz2",
  "key18": "63mcdcyxPDSFwYBM9Q2fN1ARvd4CpwPE5MRYzASd9LrhDiHB4sKUcVmPEUa4QygYMqsUVAvzHPPgoyFUbypHoJKE",
  "key19": "Hxe5hsEczGXy8vbbSvewTd5doEK6yjVeZtcUiTKNWEUEqLaXcssujJgcThf16auTJrKJk3eYQQMr3t6TVJkzNdD",
  "key20": "2dr79x1Eq64pNaLLFxHpq6e4PFBewKhyA2YygftaUtbp1sS96pTf2E4DqyzPk81WVXFBUnDnnBL6BBG4L3eQSHLg",
  "key21": "3ZaGZwpARfmam1MVPSy4FAbtaJpKpD8c2c9Z1KR6PthxBkzhzk2QCKrDzq5c3e4dX88qXYgp7YLQB7yShAAFPNX3",
  "key22": "3g8XtguCua1kcj3NHHJjUzGCuWaCFDFDwzUtjd4SbexY3JdKYWYwyqbDb917MpcoKBbbJ3yQ7LTPRtfGew4K2SAH",
  "key23": "61hfPjs9So1ZHQr9NvUJMZ8JtsPHw4su8sukPFFksipSVijP19ternUT1kkvJZHdXYWEKm3y9MWdey1Hf8oJ5sZX",
  "key24": "627fJfRGPfrNgGTgimjAzz1L37UnSzpyb5C8nRjxxoz1yEnYtGwqdZyn9RP6hbtX4BHr9ApNrbHUmEKTv2ZwGaDi",
  "key25": "5e4NEdFpRHF5C1xrr8NraLiQRTSUEyPP1Bxfay5HHet5xjAe5fLAmRrFJwsfJXb2KhfsvrUzdhZzV1pYpH9bmhsJ",
  "key26": "55tdzV8PpXoB86nEr78RL1j9YS8iTugmq7WDUHt6X255n2BosLRBzwQ6aiHvMQ81ZrbQKDECwFi4YB38UEnfAiRd",
  "key27": "4gdNmd13XnYmGHmYkJQSnkaZxPfT6RPgeswcaGoSRmvGj779K19AN1QQ11eDJDdeGFQxbBSmtkYCNNKe9GZD9FVW",
  "key28": "5GPkkB94VoyqVYr4QmUJKQqkcQPPcU3x2fNhgDQgNgqSYSy1EwMQnhzvQ4Pc8razVcUm5aMwpXw3nr71ddSncFQJ",
  "key29": "5Fpyuom67S2qTrqvrsLVLWmeTGRUg8iyqS42Wnnmd9WxFo6u6bk1bjTonn1bj9MzU2U4x6NxKKygz7Qy4waWQZRB",
  "key30": "2FYbybn8oZtVPD1gtd63DQUa7Gy9sWN4CssFhbefSf8fEqVPcYNWiMPjZa14ygq79iWqPrLHvpJ43J1sw3sUHWwB",
  "key31": "2x5nHySj47DDhDf8UWgHfjkgaTJ21cmtFFrp5ipPs975Dx3TjYghxEBmfVj1FbeGp5Z1ks83wRsj7qkfrAD8DMrR",
  "key32": "2ssMGogfJFEutbEFPnJcPW2DemHmxVdXhWgscVkU6eUJNgNvtBGggUKYu7MD1EM8om9rwWdXmwmN7yfP15dKis4a"
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
