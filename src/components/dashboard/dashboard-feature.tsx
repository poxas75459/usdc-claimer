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
    "54skb4k6osWYhqTUUso8xByjfnjKWeiMSsRHq2CCg3irskyPbvQUStRqDWtZLTkD1gUXSmXFTSaRo9r84HdmVu1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtvmN9vhkWJdBsYH3F1Y2j6kCZH2Ui22dZ16kequWrWqxSUz56Q189KjPW1giCf1zwaMfoLdpmoFLdMN5VoTXhq",
  "key1": "GoMbfLV56NdbP9fik4cEg4WSbgoZMWTRjqxP8vNcwfiu9QQrkevyVetjhAVJgke8YdfqoBZqSVqtjU7ak3KpYzp",
  "key2": "4nNVxjAcHwPS8o98H9KF5r67XAqsx7bprFSWq8vzvVFevDh8aj8HiYg5EvDMxqXVoh59yw9QS2CUxaFnXQ4jcT7g",
  "key3": "2pBv13G7dSBP6SFD5HtPXfYRi94xAwX7XZ3B8P6HeaBzZpipww8xRLmizciMr3sJiZXoEik5jAPuJFGBA6xa6CZd",
  "key4": "2EjwaToPwdK5TaDC4896TR7KAprayL2qhqGjzZshUTsTGS2RwLEpNaS36nHSJTPNVY48qRTxRNbdyPyWBchMd73W",
  "key5": "4RXTqErtXrggRUjsrn2rkZRYWnMTS3GKpysX4XFnnxogetVHRGg1tMvUL8n6gaHnBKYN1RweVU55QZfqR39yJ2g3",
  "key6": "aHXPsjMRmomZ6jGdwuqPM3VbGxRyTZ8K6oB1zRTjxehu9rytRdrHERwfHZ9U5F5ZxpiWMAT2XG9HHqHDUxnda3J",
  "key7": "2oFkEiEeXTwsTcwE7VmBRtQRjdtsuZSqUNDG8681UpqkRaaikPTuUGfHro9KPLNFiPwCYCDmA4q5HwpEbmQe1xcF",
  "key8": "2VvpvzpiYg41kSkpAy3rn2F2eXrSwYejn6GWvn3Wzmyo1Sn5XeDcCWzA5inqu5sAJxsFT9VXYfmZeM6y5jTtqT1q",
  "key9": "4Pw5P4NZ9Jnc366gszo6DM2ZRCvT7LGdyF6JJPgh3h93kCo2fk7dTCWA7zWafrQ1HTs2q86RaVPc7DS3eGJtSkU",
  "key10": "tjxbLuH97CTmJ4ChCdAdroPdP8YWzqiJqfcctM7UJ72C7yafka2aNGzwitQkzNuQc4iH1KGLjkC6HhF9kwqVuCK",
  "key11": "5cZAHQ8rXQ5ADqHe3qQhu9b35vHyWvTed45KAn1uwijZJQ7PM7yc3s46afHKwmBidTsy4WixznQVo6XnzguiA4sy",
  "key12": "VtooFVEGtEmDtDhFg87pS6sBjnQDYhSp1K1zL31Hh1bXXyPbPhUpYbGLpNvZGCkWoBw8MnRVF8RrMTB2C1a1F8v",
  "key13": "5x2inozgXDpQb8X5F8ueUTcK8g8JBajdBcNRHZ7erpHAgjPRYeSB9qjAohz5oGtcK4z6oH5Z1ygDXNjMEaytbzJK",
  "key14": "37PkvKLW5u77mRtuWdS2RGHwaxLDnJbu8t9uuFEKXxoGKvmEbEPQT9QSii9ni7fRj1wgkbybU2J9vG9VLkFqqvBS",
  "key15": "65ozBgTnsh9bpN72ee5415qXd3pCi29YijeaaZ8gx5PduvYZM9rSxx28pP7cYNs5hfG4HJkW2MCVyvzRmo245zB5",
  "key16": "3bmMEgVe1335Htv1AHH33XfnfAzY1sGuGTheWdsyoYsdMKGriXzzqLzAVJV8FVDzAEv1aKUTkP4wdT3QrB3291nd",
  "key17": "63HWEvfUnAzTnFa7x4D7qN25DkJqdub2RjH9ZQ78pnPV2Jm1KN5iqLekx8ZbhTSiUhuq2ExPmZDgv1jKEDUgDmw6",
  "key18": "D9c14U15m2ecpKWCNrE6hDn35srvQxUEy63eoRq6LpRVjgbTNaP6XMMDD2KYPpJbkXLTkm9kv3BrHCGASYDFWUq",
  "key19": "26sXc1cFkdKDJf6vN3rpPx937QpGPoqwGXALBF1qGFy2KWvQWuHKTfs7c6vvku1J5MMXHuq6RL3MGddj2AVg44cL",
  "key20": "4Yt3SNstedrTZ9SFXzGa8ukLt8AsdHgCXxchJfG3duGykB4BDKcyZL98vyzLFMrnpcu1aGmAbaQcstVsJyLFt3cJ",
  "key21": "2YWWwUBbiSCsQFGgxTWQeFbAhvH3LddsaGurjc7B6p6TCreKJ8QjeBSKpAj3oWRXfrfkYnbX3sMkJLkefhopEwrZ",
  "key22": "YvwgjZq2NNdtVQoE24CDrDXYioHuBs3Tt1CtpKrHGsPGbrcn7Ufs5VeznaB5pdMXiXc5whmsE56vJPBGr1rPLK3",
  "key23": "5VnreNfxbuM1d4EgPKjh6PMiLcbGjmMkZyQZEpibDnaKYv3mi6KfzDZFDaoXc8wMoTYoSVQ9nngSs7ep8SUWXjhZ",
  "key24": "5guhMfjJRrtoSrTTozvoM4kJ5A6iBJRwS6ZLcVUfbWtLuDSQq3iZ6patPsEoqsyKYVjbdUDRo7CpLat5ysBaYMRG",
  "key25": "23982XkqaZ6YyowD3jdNw48Fjvj1FEyhmtRBeEcJ7qkRooWkWu6FJZnFecgvRT4VJ6LD7StBk932SzRcNX5LEAiL",
  "key26": "3FNvTpVEQsqdYWwAgqD8BewRLaNWS3Yw1wERvkp25zpMTyQxqfw587fDCXhGGF3q9rHQVDrAFqmHJdpqUwcKaxdX"
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
