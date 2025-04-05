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
    "3n3W3A3cMVCbgxwUHBthnxqBCpicmzQkN3L7BRJJKFJ69GhJSVmDd3Yf4SKgoEw4vy3rxM9cRi6Mhw6EExAVLmYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4u2Vatpe4QF7pQNUm8wySPc2QxFCRU7EMKgutsbjF3g47BQ8ZErvJCVkTN7CNSM7euRBZc3EZ6i5YyHuX6n8j5",
  "key1": "47BAh28z5dT8TAgWMuDAw3d7DYS8BSDtoGoeQUQe2Dcku1Siw12HK2TVJsXgEKi89dvxGqz4ridQsxTpSHn1GjAX",
  "key2": "3qqquokTwpriRgteSJvSUFLQ221Lyp5xdwkhsNAiXfTcZLsqCCCbmG4CFGQpwmpdTzPaXpmedYk1dNm1MqmbKsCp",
  "key3": "2Z2fwz6EEayr99nenJjdPcFhksbskX9pqMaqoMHmFvJigZgJCEF7YWVmXdJGzHBBJkXrNEW2MYTphU1PGTk5YcL9",
  "key4": "4ETWZD27YWQsR5F1163umAAindY1jyVQzhiTRWb26BQhTk94HtwbBtiL6dbbBsZUjYPbyYx4JaTxdd9VZCeCsNt2",
  "key5": "35XKLkxBA1h7NTTrEHYuBd9cpoquXZLb46Hzka9KTYdHTuFAyc4DydFnNGL8cLcH6KCN9kFWHTSRnyaXmcbWyfPj",
  "key6": "3hyz3qr2yhQw2UgB5b2HdWJnDyU6HiooKhvU9Jv9YqRNexrW331c7HHKHqsD4HXMARqAEGrMtGi1h7TGYA7x5ar6",
  "key7": "4EYpHuT9FH1uDQncnMUnsKzj76sPhrz93JQJGTUG6z8zRJYvDB1bSVuzhvGGrNVJdDkaV52cy535scVRjsLbRWCp",
  "key8": "5BKjy8TJsf8xSVBwTGE4UzU5CxoiLzDijY2JQHBregS9sbX8DUh1EhDdcgqLVyV1tjUcKMQ31Ay235nGPhwH1LJf",
  "key9": "32TytL2TgvBtQV9haqDLYJdVwZvpt42p39PQBvrJAGg2hCxzHuge77J9CLJ3jCa2bRLLXNsWjngp79srR2n6mzzL",
  "key10": "2CFztfAN9fzDwgSkHkbhiWn64B45gowd93Wrwv3boQKziiqzM172jw8AJB3mZCA6HTGug1YGZympJY7RiriFuz7G",
  "key11": "2KQrTDdyYGQmi3UbWZfGDBtXX9YpgrWzFSwTaExRepz1DkFS6rfks7gNRrJKcWqMACr1wbma2Y1tMN5opV3DKL1f",
  "key12": "22Vs9VdGxcUGNBDuDzkrvJ62gSqoKuG9N1p4cCLkowQPh7nrmHNvcKG9dM4Gw5tobqxPn3xbfw8ygeY2SpMTWsu9",
  "key13": "47NGnFuGuzz2LAxe92dwb6v6oBhcWyE42tFjYJR3EVPWPJ2AWoCv8mWN6GuWVgcW8cCtdrPV5chvstVbkyAKcj9A",
  "key14": "64WdZPqPZNtVt1y5bd8LZNTAKCCLcdmJJiB1YNpi32SJ74YaT6zgbwWwXm84ADG6TNCGkuTZDAFKuDeh19Jg46Ar",
  "key15": "5BS2EvLAF4XJiLLEzLrgTY3TtmCu6TUa7Ah7zUMhgTxhCn53ES7pieKJ5hPBMGd96WUG2kStuF5Fhy7rU29wp3Qv",
  "key16": "4rbFz6EC5U4jF1S1pKAf9Ep42apn6vP5RteDVLTthNc8QuiWWTjhqQf5CD1G8gzud1L2z6v3kK6W7N8t7FurwcKL",
  "key17": "264yQHSbh27varA7YBwXHjuvrwXwMKSX3yuoorYcZQydqvKttc9s2dtLXCWrkbvt6L9A2DmekaCMr7DWuYTUJLwZ",
  "key18": "5ccN5tEdtrN7xSsVy7XGaXZUtetFk697CJR4fYNtE1M7ApewKRfoVxcYeoxdotuygC2n85knthS5X1mpnaKGQuh6",
  "key19": "3GuSwbm5UhBc3jnxnW1h8DEg3Ydr5tucKYpctEbpM8NtbX7LuGAro5qCc3qXtWAAgyqTRSrqczxTCAz7NTjHiyW6",
  "key20": "2zZVsesz7YSZ3baafAd9fsCp9RqpysgaNyoYTgGB14G58Ae9HukgwDTVzsjPT4r2CfSchLmTuMwi2GDfV7Lromv8",
  "key21": "3ykdvn7zFSviyY7wDbPBRiwj5oGLbJCaroiHzAFCdjeJphrBvgyJfXpoDRu7uYTSgbQ4RT5Z3CCUV9b9iyDvXVZL",
  "key22": "5nLQWLMgTXbwSgd1k9oWsZ8J1QhopoH8S5t7AG3TZuxucSRXekePRdU6K7vWCHTurGxEfrb2R1HuB7JVkmeSNqZa",
  "key23": "2zcU5eWYUwxTBVEj3hytoM477bwuD2TxoEuJMivdU8gD56WSeZhW56URggExA4qw1g7oSRFN64j8ZfZAube9ujaF",
  "key24": "38uc4NmkjQZhR7nuV7rXa63t3TZDDArBh4gGyZZV6Li9pmeFqG2WNcim7mnnrufopHrMwUot1ywXG2J2R7UwCy23",
  "key25": "5zeqRPW5fBqQbjbbgJhv4MqKCfBjs6w7JvvqwjyvLpnJGehTpnPRpV8R1nZ7y18ZYk2TPny2yHWttER4ybYGtkvv",
  "key26": "chzqzq3Rxt63e75RxhmHDL3abKFb33bacoibKsfn8pSJ87xEzyiHe8R1QDydbguoRAXv4BLv9jPMstBsewBZYb9",
  "key27": "vR2yTX6vtVtogLJmovEMedk62qg747EutJxUM4dJWdzs1FiaUK76Cj8pnTDqsQGX2TaCBYHYGpMLNBGmjvnWJty",
  "key28": "52Y21o9HpBqdjBF16mkH5A9REgYs7dBdZ4f651YVj5EvKanGLyossRNuMQoFmdw6BoU51CW64YXXcnnSReM2E8tT"
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
