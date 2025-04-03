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
    "2RES5CKcAzcnNTrW7gLXQr5rcL5K54rcWvSVZeRTfHsrTkqn7Exq6fXywhhtGkjxnCjAHnwkvLTe6V1cCV89XmGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xoTzWgTL74V5sD2uJCiqHeiuU8cgtqKM5Nzsrp2weT9sdJ9orQAD4hY4YmkbCj6YDkL1vf7NhGiPJyRkj8n6UJK",
  "key1": "faCa2TgepFzyytbpBNtQdbyHq84vgG51sSTrSxgKF5fZ5gb8M2NneKAP8CAkkniz3mPz32cUgiYgXW7KR4xtkHR",
  "key2": "5BmtZyv4pF2LbhPmMzYQYXGN9CetcRuNXMb6rS6deoXtHcV6MwcukznByin9UXMxPZK6JRJmC99yrE4EFeVSP4CM",
  "key3": "48G179Bv77kyqJDc7bkJbxR9n9H1ojsE53b8BwviGtM954tM6hWDZJuHy4TxtKMyoswBEWhTSmBhxAXNqTHmfCpP",
  "key4": "2a5WwHFNZskhVSdhSj7vdAvbSqi24FJtVcx5ukgddj3shgW6mLK3p9A1JaAaAYudQZtqa1VZL2Gv2RWwN6bgNnSf",
  "key5": "2BnmcJR7CTfUextbJVL8aPWGGYvsohF5qD7god1dQjVEwHWBFwDP9JXUcrcpSQKbBUGEdjEFH9Y7SDHeLCaMqtYo",
  "key6": "4MbZSe254hXz19KwWRYfwNfi8zfdaU6cgNqP3t7c9jaYWkC815EiiSFz4vUTogwixqis4UX9mr1wuYeNe853cnnK",
  "key7": "5zuxG38Kom7gZDuZVDdqQhi7SizsL14Vn9nZ6LKXeEvbrfY7fRhGi8e3hJqN3FRPSqK5PsdLBwkNQmTw3FPuCXq5",
  "key8": "FPbUsKi7zws5kGun5eqzVt8jzzHmrGZT3V8pvDJbEGGJr3TnJCQR1JBGUPMgQEAcj9caSgfM8dhymvos5Fq8p7u",
  "key9": "4dpczECmg9vm8uW6nEdYMG2aWCzTWkK4gzxHkHiKGZa3Ert4y2jo79fGBR8HaEcEbM2v8H3jJ13mPNAvT3hizFWL",
  "key10": "3Xb7XKoPvFrkAWowEfyCUvHKgmiRhFLHMbTChmjHwUC4umCyu4xFt153PKYZvzifizdXusZRLUGDbTa36hk8Gn5Q",
  "key11": "5RxvGAnC4g7RLSUxBSkZd6fd9YqGwEvQQATLdDFLG9rFTWUVYaYUfy6GngagN8KyxGxnyisWVVGxoRt2upbb44Vs",
  "key12": "57Wz88Bv11RQWpmXgGB5FcBVfWZnMQbFX48R8dqgjtMHLukGfwN48FFwBr3w85HYSgWQmk3mad958CE6hYzEnPgP",
  "key13": "3jECgYCCPoYTtv7Q5xu4KciyQotkHqeZZGzRXEbUHWw48tAeENwaL2LHC4pWFgYHHKEDfobucyCKp6ratEoaw6tg",
  "key14": "2VneZ26vmfUXy1ygKuDqgimNXrJDm6gzWdqVfGyPW6MTQc4aGnPk9dN9keCT8XFfb3FPmq5znLEwimUdXVvSrNGt",
  "key15": "XsjFbiJ2MtHDftnzgoJhooGzrfNqd9xXtia74R2cNEnJH8PrmmmWEC5wD1AdDMjXTMyYGGZ7sfWSZ4igtk9QT63",
  "key16": "5LnmCPJcfhSJNvKWVkS5kCbhDdnX3uJdoNmwUufXiZRfUQFhFHcYBDPV9Yo6XpgeM93f71K79514Cx9Ax6axhn5p",
  "key17": "2BxTv9wNypjTEvHJbZb7oLpMnTsBxLnnN9wxDpWscRJVfVMTRQVUNqHsQyX3WwJm4z2SD2BQPuPGJh5X78pZWGU2",
  "key18": "5u5wNSjnWyD44VCnwj9oypALoxfjr1c9ncQKwEQ7ceykdmqALChErJDsGLTM4ThFMCq2cQfLJpppNnJpDeqRdsbH",
  "key19": "3dfcaExZBXFw6JCo4EPFiNgFDU4j2Y88a3BzH8H3LgLiWHQkerX3hVpkPA2cbXxUL64kiJxNeXWGN7mEtBeZkqw9",
  "key20": "2Y6Fk1G5s9HTsanyymxf77NnZBzj3eSpK7WyY3zFaLuM6ZX5ae3TbS5SNbVX7HfAHwJPY5xzsaT9enNJADHEjkhc",
  "key21": "2LWdWVEnX3wWsGBGE74dd7y6kcy1UoTc8skpHXsUTWimtnfJHdMUdCKrDhdrCC8SLBabcDeiQo7MJsbaT3dP492L",
  "key22": "2kytXUFPz46hTP6PBTxJ2xpEpvXD2fPddcATNCTJtWqxhzG8vWvfiTvDxut4MwKt1h4k5xnVn27R3LxRXZViqoNJ",
  "key23": "h7AFhRezHCJ7HhH4FYkkhSad19opQSKxHKTqFSc2eEYsTnWEc87EobPv4oWHbqWFLtiuYpL3Bv2cGk2qYUC1E98",
  "key24": "4PPEp62Uwk9NZMfnL3XJYNEvpMH9mF4FN2RRXmJHEvuExka6tGF3GyczKpeFpFykuK1jBAcbwtGfSFGg7UrdRyQf",
  "key25": "4zmMsZPArXRsjwGzPLXvrsnKqQHiYYuP5uwW31Eb4WVcETZXYJzyM6HzFiuX4rMnfD2Qun3qen6SrdFKNSgLbrb3",
  "key26": "66MBq3ysbSmKfMY7Q9G7PVdticVjqyx7rre74Q8ztvaT75Umr7krxnqB82jpH1mJUbPuxoqfsXbJMdoAwGLWNN4T",
  "key27": "3SunRixhFP8vATsiimxdDKkaLzvqBcDxChEQdo95w1zi5mvwRbmH5M7YEt11t2Pdmn9Rnp9RU8RN5oGfJwx2VNwA",
  "key28": "7JRzAC47o766f3XPHvwvu5jtmmwcZ1bXzJ8E9fSFTVDe2Jes9JVUvpPScZPie2axsMDfKx6DPB3yDUFKQpN6DGX"
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
