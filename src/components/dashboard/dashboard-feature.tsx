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
    "bjUgfFwjJUomTXHtsTbQA8qKsXgpSXTkiYVrWN7neW23Csbnmb3y1HsUhdGf3zoTuEXEZjJGaTkBCUqXG2qG43H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7dhv7FDLa6BGB4JmAMmkCC4jWQnExZst2fGzQRMxgsorjr7wgZ2cofkGwdYxrrEdpd2du1jghSRQM8TgPtbCBs",
  "key1": "rJiErnpiWgw96AuyZ7HPdicPXg3hcsAtSzzXTRwPKm9myKkHWBewDqr9ZYE5xptSypTJQ9BE1uVpRPx1QzgnGmC",
  "key2": "4tLeT2XWBrbFD2BEaiJakgfHGrdCGjTcK9V4jawbCKFyU5yfUzBNKdBtxxPpSP77HWGwC48DzYZkbLbVzrcEo3m8",
  "key3": "64ePpvXYnhm6qe9sxg3FXZwD9hrZRdPp5gDtVVZ8q6tRfLGtSNt5WYR84fnTmXMgfbG3trvHqS6Vi2yaFfKj4k5b",
  "key4": "2YT3P833rnP4uND5hPATpuotxz5dWeWWfSRTmNLPotcxve8wvreNNgg542Fe9BJ4c2w9zxKhpSWNGqcUHxGebGTw",
  "key5": "4JZLvn2JrDHSEXWendkRnL7wA2CsNKF3CQRDuScpyJtQrxYtv8CKfHaVyXzwgMYckkpM7FmyBWxCkT1oRpJhNJUt",
  "key6": "2rtxFprZbwbupYvQEF4riSfEALTN9UbcXjFvGszY1dZHZcmeZnZk3V9dU8itzTY9FGjMn4tbDEXsK7MyxTEeRD83",
  "key7": "HQaEKU3YE2fmDvdywiBYQdN9Qnttygi7mG58rEFiyKMyaF2AL4txZNEzUr23Pd67byqAJ9b6K9m7ccch93VNifG",
  "key8": "NVu7vPdD9rgSFTDm4Da6kjF7hbhz11LTP89EnxmjWRrY3NVxcqFAnpETFw6ewYFpxyayk7NbyZAYptbwm3K2zZS",
  "key9": "4QQDmDiGRjhkEBBi3HqQQbtVLoo45XTnHqGEpKwBvgCaqT6zP4dX1vczYJKsr99AJJYx2H2B5KvwdHxtBdfWhhiN",
  "key10": "5EnMcPKX1qo1ENSCojvZQztJ71YqSg4jaovTYVTsCduwtuhUFU1sMq71w5YttRomDQXv8AG2nnMd9f1yfNbWG7p9",
  "key11": "5cxM5U7cPX7DtosciYQ18Dvd1PeiQgXjMJp6DWaat8W5KATLWJcnmUAdUGKmF7ZgtBghkSNFABK3ZKdYpx3UAh52",
  "key12": "3MNdKYAd5J2Zzue1dp44Vg5sFiQcL21fP7wfRm2FLvAsp4kr4zSi9bS6sPYqrCAogFMZTB2QHzGzcpGFsyJthWp8",
  "key13": "2qqTNUegS4d5MhUCEwK15Xf1W3NFTa5KNnzkYDEVjJB9KUSAp2p8PWixALzqe2ecqf9bRCSjFbhi5xEGRZ5QBdfJ",
  "key14": "5BiWD4X39xDkAVJdmSzvPc9EuNMJBUBn565fdWeMcFek7j5rzvov1A44yJdfUvpNRi1Djo3yTqU8BxQGWVfHjfpL",
  "key15": "2gAJbqrgS9cQbLpuZfeCNTvYQnVguaZUXgZ5F4AHM73MA6C3s864PTrDRFThpo6wq1dQFjLdKCvkERL8yshT3q6p",
  "key16": "3KaSAyDsFNuC8fUmyyVtb3BWCbyfvugtT4q3ZUUbqxdncBnv2s5DzY2xZHPWicWhy7HqbrtCuvXtV16y7NTvxFzv",
  "key17": "5TsTWM1C6faMvJ3ZZTHNLXiCBHY8979AP9TdQ7fTKKNmhuGbKKNp8zKpKqD7M3VxBYLU7d58iv5McdurVbrvmQhn",
  "key18": "2XZvrChFBxduowvq7su8pD8ga3tNXszCLCzW6tn6PkmtpESyqua15LvpDhukDGd7aiHGFnGcLLh5gjpUWiGb1Cwy",
  "key19": "46sNeBLX76T1MTK6TXE8gkNPZf3x6mh4SHa6RBPYa3cHPmi1xw1NLSPYVimDuH8kHbbked6woFcmCgN8Z2jw8dSP",
  "key20": "4rrE2ujUN8bkjPBxMdQ9mkQW8ATjuqDzRpPGX55nnSjmGZ5ZEPcfcez1W3LRoyavnwRDxZU4bDwVKBdC8PGXxKZ",
  "key21": "4B71rZZFhv5BSkVyKNgwkxnTiWht2RzTSSnZHDcAHGts9vYAztQrrJPfXuH6HV6pyVsQc57s8fu5V1qfkVdPEzQ7",
  "key22": "3xYae5sBedkjhh8eAr5EnTA2xJUCkzLVSg2XieNrMSmUac5HyR13HhNxj8UFBigBPKoktpBbjQvsLrer1GW3UcHg",
  "key23": "xsn5hj8BcAkfeHfLQYYEC2g61UmewAZtcQpz6WPizigAytMYS5mvnficvEL29udxHvuyN6Kzt8SDCYAiq3cyVm6",
  "key24": "5T6trDUmTD2yARQerdirdsDPAuvAZsZLBB8wQY1zWM1HmPFQvVwo5Ey2kVn8rpgscPFm5yC4e5xtf4qxTTUBEqQ6",
  "key25": "3pTqTmRnXdmMCaEdqyTk8rWXnuQjs4sR17hoAPYXzdB9LWVBLD4dr27SqgPer2Zgt7ofZuBJLBKgAvh7vTmqVJvb",
  "key26": "4GqVWSRVFTR5rGpnDDK7q8cQULPxcaFqKXUHX6uYkFbdspnJfMmukRVGQnbdmxbi7Yde3H7WEGskLo57GsH4X1af",
  "key27": "5dh9Foo6FX42TUCzBKcxjA5a825L654qoHD48MPjVYFrg76WoL7HgZGhpqP2VyNxVHw7fQ29c8VHCsN5LtvAnLMC",
  "key28": "4GBMU7NPeb6c3kndYeo7xT5TeaGMnrTjeSvgn1sTQUYJ4ud1npQMURfRHJEC7282r1CgKnYxYrCYg9ppLSeAk3LH",
  "key29": "X9Djt8edxpqcvauygVB7zToTHnuQ5c6z4TyKtommx2aJpm5vZFBqhaVDZE7p8rPVweeApNdvLkMamFAR55k94JT",
  "key30": "4gFmRX8z5TrptLKi18tZVFpKXnDmCDKLddqR1UzR42UieTsgMibBqB2txqypHoNRvuRPUq91seMzeB28x4qCWs9d",
  "key31": "5EPi47BWjYPeA3fg5gzzEPRKTXhsHmZMQBsNfZ3xfLxW8pNfXBxA37b5uJNKFg6DFssmF7w9bvhoq2gxYWeh9ZUS",
  "key32": "4grxahdh5iwpgo8mLwt6335q3Zi6mux4oiPekYRK1cu7xGCfL5JM3VpkfnWzfV6qYKNbd12vYBawtHpQYKha6uYS",
  "key33": "2dVu5TKRaeH7A8D7cWzBMnksfdpCfYMtu51TQp3AtCbwRFd64XQRDnoakwiKNjhvTPF6rD4jXgnzUNLwnSejGS5Y",
  "key34": "Ki42oYPt4atn1V6NfB4ZL8rHbanqDgdDXrgCS1JjtDAPznBT2qw4oM5anHLLRf7XZSfuEFfNwWd4aKeMjySVKp1",
  "key35": "28oM8uHjVfwVaKvW5T6Lk7jEjWQwKQajhq1XV4nRX9EC36WdDyVkYqtvHGpb5P5Ctm22jcy5bhkrtprPpvoWmvze",
  "key36": "3xmEw58mXtgAq54S6owevTf51hDjscEv9mMvi3ReGc13QMCXvLRsr2LcqzdYzrDxjn6pHbuKbhv45HoTZoEKcoJm"
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
