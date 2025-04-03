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
    "4hCNJsHFgnmxoroETHBmSZStwaZrLSDm8AR4ceCT4Zr4xyJaStKMtpzRn2vYyjvMgXd8RfNW2zAyMBU1zJyUroPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VBWPnu9cWF13hUkA2op9xWdB4i2dMD4GVs7Wu67g4jAiByLjYiVqqhX7goYTdbSqqWFprknrGk5uN2xUxgyu5dH",
  "key1": "4Ri9nUKY6Vs54KiVqV1PYhYMScF67uxbdHv1MuLS82rWgyt4utUL4FaC47AzVBU9BnsfBqgwTtkaHa94ZuX27XEm",
  "key2": "2GiQvJbZ85jnX4PvDH3ip9qbULDXWSUhTpt3kJRzScQFuvzFWPcsnJt4wRHwoHaXwdMpEufZTkfeMxuKjT1V2NwQ",
  "key3": "vgUJciRPMpLmBqL8TGtWNep6jk6sDarDEN4PfCkQnujsPzCjagsYRQ8KVVJKRkxS2ngLmjUcVSdKwqT2XpbzFyJ",
  "key4": "3fL3jydnwb45TG3J4uZHmBC7npjx69wJUaPfj1uEYw3XzkWV2nauXent9zcyL6kWi4myvpR9HKPjZY5Hgn1dKqGK",
  "key5": "3SHz8HDgfAdPtQnrSBBsCi6JwwPnyBXzsLuc1aSb8a1dQrZkf7VUUNwynGNJFYhtPiePBZAnQKJ4jdAQq9YwVGjN",
  "key6": "54JK9UX8CppBmYaTE3Luab38PuHsFkowgyDe3B4UmyJiEJY6j8GsXczNxSQA1QRitoZka1rmhnWviJETnZPwqkf1",
  "key7": "3sSuZZRcbnZui7NE8x48XsRfg53yH6TMbdNg5sk6c4RYtndCWGbD6MKq4P4iXymy7JoS4GRaRNL5yfyxSEctbZrL",
  "key8": "namEsxQtPqv6gMueqTYU7z8SyNDqJ7gMyw38DFw2cZujLcT6m6p6HsH9RMAR1sJKVqkHqTeuqKKrQ3gx2kDwfjW",
  "key9": "36Z8crPoSTQ7KmpykgPCQicm2yFdyD8jUaXEffECU6EcSihDVtzxD2nsdr7CJpaLaWVr7NLCtYBmQbNKj4nfpdBa",
  "key10": "4KULwiuMMjGVniebFiEtHaAeAcGrA2hEaaUPBqb2EuHrfja79gLpJo9rdsLGN9taU2ARbd7tpJF7QkWavrSN9bpX",
  "key11": "5JPFMQimDpBRLyjFFBs4qxfWdcadRTdCaSoyos35Ktnem3mjxbgPMSy2nHhZWEKKvLWtn8RDhDW8Rv8TPkD9QScr",
  "key12": "51PcnKMYdhPLQTMJAbBNnz7eZPGTbtRFgeVF7koih58tsnoapWsgzSTeZhGfKabAzPMb7CHQrsogupCtD2zuejLr",
  "key13": "3TbX6PBQxkRRWoGujnVMwf7oHtbsZ93Wegm8EPLL7yjbX9Dy6CUwbKwX1nEghk5L2MVSMYPLiG245fYQUmcMvKjG",
  "key14": "4cfUFxPoj3c35m9dJYVFLENmiYfom7Mc3pWL7PdpeMVKJTQCqYhRLjTWzL8DLGio61goCMBwAnFcPHa2CGrbadDb",
  "key15": "4qYiW6ML9ntdqERh6zRfQDNiMSto2QwUsoyt6msfaHzpsfBoEovzReikXJonvKi52EMNo463NNhjhwwxuS1v42kf",
  "key16": "5HyUK6oVrzqfnmRJkBGXzHWE9tZi55mfNspZbkHN5ugAnad5HbSZGhdUFsWzs6oJsHupYyn75BHuHv9eoVtn2wtD",
  "key17": "2aACf8BVX12nPoEgCoaurMFfPCQ1M8CS5xx8LLxaiFkgM2kw5tjiVazHMPX5jimrBFPcqc91dBujaYdBQS7zBuT3",
  "key18": "4eXjQR9RrACX4SpXRJigqNCjL5EgEDbdQh5xdD6uXta5sZRUYauh3ZcYLbYpwh1KmEc6Bo77f1YcSV3LFc5Ao8vJ",
  "key19": "2dcG6eNsFN6uciPbCNwgPwRQzFhpqcaXdK7A2ToYv7NDPheQtsFwk4Ni3Fo46i2JnfDrFK6LyZHRzsao5LuDShjJ",
  "key20": "4bn33L5KUPzsMrkSoDNwKnBboMbN36oCApMnosp47gseKYJ6XcPwozqNMKnXmkrbT5qg4REoKNBVvnfPpJ7DfHSJ",
  "key21": "NZczedE2FMkjne472jVvu5WrQFffy4aeiFpczy12fT2xdLKyHFETmzEU9LNEfSvCzmiNGbywSBx8ffJpZpY5YWd",
  "key22": "3Ta4VzDaQfRvyZjcFqVrZFtL9w5XAybiQPti73oSueVUtvuGS1gTRJBvWJMJtYpfU7deo6aHiVXKiDni4D3Vv4H5",
  "key23": "4SRVoMcoN2SyGiQF4XD2SP6rnnBXCcWn9TN314qsqF2zRsyDRyDhpYdyueGvj7BFHVwTafpbLSGUfmzRb9wB7Kcs",
  "key24": "5DQDgEEyjJcQn81NY6LWt5ry2suMuRNkF6SNF8mmBqv1S3kFqUpSRdy6BZhkkfdiAxhtG6qyYVn8LVKegLVRmzLZ",
  "key25": "4C42vyswdWJqJBuxHMM7w1wWAPEkwjeAaecpKKXL5gQiDm9uSeAowxLonAiSNDdE1Qxc5Zooja4hbXKntzAXKpmh",
  "key26": "3py6ddBR2Fbvc3YHp5ZDknSYtKv1EFNJLKgxRXECKUppSjxEQ1FCJzxvf9zAQQZaANTcSvkXrWG9ne1ozp7qVKNx",
  "key27": "2RiP8sHLeoYQTHy9so8pBPU2XyAAqRK6TyDRmTb6k9zXg5t3FUEJ5PR9xuP5nmEfRvPqFDMqm8YvRJPS3PXWaD2B",
  "key28": "4RoijdtBzfBDUsVpcJTNz2JYUWgLXirxkAw6tuHHshbd4cM1XN1fYfAwkf1ueQ4uEfN4QnGSdVRzCYGYnapZ4UxA",
  "key29": "9qMWadz3JzxPwxWYMUpPuJPMxTnPmsDPQC9ePkuB4jcKvrkGApSGAjmXwWD3Dr9EV2WSa99dhr4smN5eVDkCnAN",
  "key30": "4SJP2KhmMewgWyydKKTRfv4UBJ9ssAMtJRGn5FmT6NSc2mZAXPA21HkDSvrBv4Ag1vWwDsZ8N56PoLeksFgTF9zv",
  "key31": "2gsKxTJnTZp1pmMLw6QtCcSKiiWSPU8f459oNteWxwwbjCotEQvgE6Jt9FdJ6L6wyhbxRz99VH8PzdBN2WyRwSQt",
  "key32": "3vN2UDvYx6zwCdCohtpJUscZ5EWBqZGbLQyT3UCH81uGVJLu553cZ39F56o62BS3HnyxjpGCZ3SCViQTHL3UG6KN",
  "key33": "5ND6S3fmfmFVVRDw2FbdHGS2nA7cRML1tE4AkJKAUuktnY6fZdPFMDKSy7g3HNL8Tz1ovYZPdR15mdYogJNoBbnf"
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
