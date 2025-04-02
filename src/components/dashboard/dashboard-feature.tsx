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
    "3kGB9ZG7nT9T8nCVMV2D62FYzmuXVnjYRkGXdNp3ZG6kU9dF4Y72ZLpzAdMZtevd8eA96B57eMKNhYjRyqLdNpkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ScgEopWdq9hvevcQf8Fw9uXp8DcoRN8AhiS19W5JgRHXqF3nHMjKoX86mKJvGm9ScJwt6KF8qpETemEaePd58Pp",
  "key1": "3htjGeRz5pWmMpV3J1VGHzDCqQ4LQXgo9XP4SkXPkL6oTCpBRbmUYQ8mLqabuuojJMauyjpjxYyE3TSw8cni9LGS",
  "key2": "4Ybsm7k1rt1S1Yv5WAbZeAr39wdKYT4ydDMAZ5SnYSsaCDFaojsx1Eg6GSZW1VqxZeYRjUjRZpe7xw32wHsmVzry",
  "key3": "5peg1AypZJWDQspR5fWXZPSuX1PkTG6i5CMLYBgydHQLpkcJWypVQ17fzr3UFh8RMF5HSTg1CrprAYJfomghGPq2",
  "key4": "3iMsKKM3qkQGgPhgvpYbxaJKv7Dw7hMws9p8cENxzWuf2mcGKEjWRYYjZpsqs7PpvpNDJEXqe9NEJy1WJiafvR4r",
  "key5": "3r8QDp6bunxk3bJ2HsBdfJ577p4jVsRZ47MTuCLb9DnbLns3ZyHmd2dB5BCXb3HYRCMfxDdRKAcLYpCeB1tHa3gp",
  "key6": "7q8zeEiET98DcDQrW18autzxxR3pXLZuGDpUFSmQEf7vPNTnchxQzEnRxqsW9z6U9XZaAp6viGfmN3QV4Xosxs1",
  "key7": "2zm6zwososJcEZtuwz7qADwjKMR3ois5b1thfR2T4azpKuXg1K2Li8s1W3Aag22iFMaFr2THr8yr5nNS7i7UCysb",
  "key8": "2qPPvEp8jsEkCw6xV8rPPUiQqs44hmYSqVrdw8sR1pVXWy7nq2vp3dCpXwew1VqjcxqRyAoqsUPA5v84SpWGNkGn",
  "key9": "4BhMZ7R5G9dGXJnf4USojMpjSUrPvuBPZ7sG1MY7p4RygpHE1dkbgti2daC5KpqL1yegHKBrGQd9J2DARmnMmq7K",
  "key10": "WwUSQc9oG1U5Eyv7VB7GC8ZSZZkAfbJcFMuEgN5drfu5Le7jmQrTN6Xj5ywcCVXqXEVowMmuhDVd7HTEaXbtjM9",
  "key11": "2jyRDRqAz5E5B9uWrGogSV16q5yZReMGxe37URGS78xzToXwmh8TzTRRmf7SASsHSJBPLxzmnBxdhrHgKDbjaezT",
  "key12": "46CEWC4PBvq1QNPsTVinqZLyjr8aAjHWAZQwyBHHFYTpbjMGs4K4xuWezk3xb6QoqTcTLvSX9XqLfFZ4k95H3PPZ",
  "key13": "scK1LY3nrp5kGWkEPTTmZxGtBFH1yMdXaYhnnMYXxCibjwYFF3G7Tc5FE3JkTUuz1PsmXxvLdM9fVPq6zB7SUuJ",
  "key14": "2uzQ3BMy1Hw8m34vmZJspU2WwfShjat2JHzfpcJxBkAGEjzGwxAB9w6jgj1BGGFBFuCUTqmBy95LHMiAPzXBxQaJ",
  "key15": "LHZcaBkECdJcKEQgwDFv9HWvMBEj51SFRAoKqGxTLgXqbd2N4vDjzzZwfCafHoYuLiohQCphU9DDos7Mfuf5B25",
  "key16": "2S87hC25NLqAdhT6WSuXTtD1KxNNq5BdTcy23uToZJZD5WsPyDBNCur4414Ps2is7CgcJZUaGXyZwFMFknw2F4HR",
  "key17": "3AxhHKg6E5M8NiQmDDPPgFZMwVzpw249iCRPBqHrrYhCYStCQPRiubGLCoMbxof5gcUPEHqcq2nhsZN9FLLVSvCG",
  "key18": "2Eu95tzzKmZkSrXAikF7xi78Rmsq71GyiCdPCs6pp2Exg2gEUxeHLQcWERC7Awnv7DoKDK3ZP2wqEy3wqYUNYxE6",
  "key19": "4kX9fskr9Jv8nDjVt8FK1K6VsbEMnWThUmKGoUEWeKrK26dhakVsXksi62FLqayNyc9tyUTjet2GNeXQA7ahCURk",
  "key20": "3cs8enUj9K9qpqjZ19ggswZ85jXUnKBzcbXkTYuL6Ny9DC2GpmRKM2ZNjzZkeFLa3pEcEYUh33tpqGZsHSQuCg4u",
  "key21": "4ZcpqFpMNJnfUhzc7XMfQwt5fZ8UtyrCRuGCL2Aj2kFEcKazqn9YKXKTtMypFBezGbRdoZ1eKgVdEswLnuEwWR6M",
  "key22": "Rro6MAnChU5hdVv8yPoye6AAEztgCMmsxNicY8rNhPwtwtZ3aQPsg8UGm5S49DXTUp8qhBuVbhodXwWHFikcYSM",
  "key23": "4ic3cQCJUQvDwhheECpsxWL1imQNG7aKPxd9L7wnRCQuhN9TF2RXhedXeP8uJT2AqppGv7CnTDEyCpGPWbdVKGJo",
  "key24": "2Qqjxz1y8yyQXRQnYBW6F8Vxk9YGQSyPH4Gt9pASoLZkJnk9jnb2pZ1ewwQVDcN5e965n35rpkMAQu2PnnEfC57M",
  "key25": "4aZr2wJ9tZcQLpg5PARpfLGbaQiSGYMCm75PAWA85gPmDbVVKoacGR7sDn8GycHuYio8B6tUeNedocu2Mir7bMKd",
  "key26": "2z8rUnbUAHZ21NDcWUDU9KqvZ8sCw4GJ1YGvDK3u5uczsGzsmbifZVqp5aojB9yD6zizMkMbrDUEWqjmSeuEFq1w",
  "key27": "3FCMn2MCxsiopbWU9wAGB4i8J8Xwd6MQfKNhmAaE1H3Cpie1tNCYu9cg3Y3Nv1K1EAWneTDbUfwXQAccAPCPH6ZW",
  "key28": "24rmg7YMEgotadzh1HbZVAztrjquQDw2T78gZnrGWtSzDNL6PzENigxZKtWZRwbYrM5LDxQsJ5sVQ6mZh1kJmxtB",
  "key29": "4rbuY33GFr4bCZaTFdAru9nxKY6kPAoaxAFQmTYCfTkWbP5SHZXF6jypUjfBngjfDbh5HFz5h74Uv7AD6SLMvnYQ",
  "key30": "mzggYUjULNcxtCALpNj7Bc4Ei4ZzaqMEAd8LBEjTX2GiaXJ9DmtBFUmDZBRqV8PkoXJtVT2XmtnKGRHryHWWoTq",
  "key31": "4TJwWDuopEtwTsKj9GcsL5cugF652WcDKtLSgnR9TFaQq1tCWk1na7eSEGE7vUVKfvGJjLi4hy1AaK2wJe19HhyC"
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
