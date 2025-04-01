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
    "3o6JSRm5df1HGvADe8a9oGWAdEDPpvs5HH84AWWNR6PdPxm1geiyyua2hLKAjsD3tbuEQvNHY39h7MnkmNzNLcVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtwknAdZ5FfkUJcCBovpBKqwvm4swB8D6nqWZoxJUJZLoyGVoWw4nnW4eB8bCrhgFz7nMqVmB8VqYVW7TdB1c83",
  "key1": "241FbiQf6Jfn3yJmWZvUUfabsRwzJXVC5ZodH1aN1XZPmPkaWqHdQiYNYxkwUoR5xkpoPtaLNxZeZPbTjsLHH4vB",
  "key2": "5aUqqUbqfefHyAVWcCA8Y6NCrvvaaJbU3X9mM27QznZQ7jTfBpEo8sSg23sEiiwZegnVw9C1cfP3z5VQYiSSf9kg",
  "key3": "3V7Zsp8ztqB5NQt73Wnfy3nEecKAt6dF58Po27nmBogbgeK7vUxiQUxNwjUqT7PAVi8qBo4tvtggyZL6TJQR5rDW",
  "key4": "CTh6aTWG1C71oxmf5DPem6HGsFLSaLysytgPd7PrFJ4KAnw2DM4bESXmJNCAh4HrZGtpfgY6YByYg3qAT5oSQmh",
  "key5": "2NT9NHancPxN7cgznXJ11QPa1oXxwgGJaHNq8kf6zkd7RVAQYiWGytEuJTvnSLM2DjZEuTict4SbfGzyGhzssmeT",
  "key6": "p2CFfSWb6mnwfCJ7ukvxzdHBCuBdQzNiB3iStfStS91ciLHTBcWLoFFHdofFZer1nfGj83buxNQCeux5SMMfr74",
  "key7": "2P153zhb9BLgMvd1SkDhPWLUfNFKAXFAs1Y1ojk3CbY4a2rXtpg2H98bCf8WSYuveEiuGFJqCk8J9XJsVfvhyJ26",
  "key8": "ZBVJYgty36cLkQazfmT4hAh72DUBUtdCVVZNLb18DvS9YV1LQds2Aq86Hd2JyEK8Y2dfgNEUip2N9MmBnj1NiN8",
  "key9": "5vBk7rMh6mHU94uB475JxDDFDXdjWXpsXrej8vo3yC297TsFn8WXk7ffTrHStuB4MVMYjoLCMHdzCcvi8Kpmtn4e",
  "key10": "3EdSG1Ta9gjUE1zAz6SugxJAVffdePbktqxYdaw8fUZsx2NmWmoXiPLxfL4pPiEyx2ssnpKEwmmigBFQjAaS3Nsq",
  "key11": "355EaTjCiSoq8GBFhGRKkLBBt3YRbJcfjK2rDYUVpHLN5qMD8bzu1VVMXiaPt7rZXneJ2sUoyBNmJ9VuMibxnRh3",
  "key12": "66yaaVT2eWwM6Pz2iT4aejzTCWFFjMavtJCdJbDYtHZp87GfTnxjNnW7jJ8hdVrsupfPW455tqsXYa8fmM64jYAw",
  "key13": "YLqpVD7scYUmqCcYMgCKbJQAZdCAAgKYArD4WwU2oXQAaAyRSuKXB8bfr9Q6YBkiK1EcKgNCR6JqBMnxyo3HtVW",
  "key14": "5V4tu8nqutp5q9JtZDtFE65UtzdPrAyhR2YcKfUtA7W673JE7thRXHDX85xuHEDFnswLgDUrmfx1PPwn7zsu4RWn",
  "key15": "4KvKX8fR8i14139w7q2A6ySM2hQTpcWUhryC5n2NaijedFtsEVHPUo8iHWpwodvyz7TtSm7Bx2v5TipKvWi58ogT",
  "key16": "2XFBErwFYZUy6UkzLpdBWitohGYD763gAQ5h5WyrxYDiFbpuwagGUHxAMiqbtUimLMAEnx4YQMWooifvGg1YC336",
  "key17": "2qGiAipkJxquwrCrbNfWqhBssaYpe9NPuSgWuyJoh6cYfUSMYAaUStdJgPy9c9pTXWKjyU62Fjm7AZndFpDqesFn",
  "key18": "5cd7SANqwfroaStSLJ1Kek7oRqD3hn4EMA4kNfxh4NG3pLRbEthBcPP8edpuCyehLF3N21Ctdx2GX5ao3aSChN9w",
  "key19": "35LiMqm93esAhfTdf5GLYKzr4sj3H6yjidimV94TDozovfW9BoBiGumxPUZeSsftgy7QnnQF6bNzzRWkFccrJAq4",
  "key20": "5QQN3GELaJ6ML7zzF9CehetYJHE8H53USys2tMy9cx1Cx85nNcNhdC8WFZZ1tJGfJjo2JX1cnhq2ST5LEu8MNRjN",
  "key21": "2yCLD9X5JNobwsTxRWXUfNGB2pkzJckSumpftJd2oeQRP33xEhyq7YjP1uq6AGmoUBcaDQ8xoHtTdsyh2wrvAR9F",
  "key22": "4WD3w63KuSd1xMmUQoh3HmUSmjY3pbQmBXzfbfov8SLyHW4TLADEvSvac1wQjhsGUSmLeh5PfUUiv97B98RTHwWc",
  "key23": "4dguzAPjUEZVwXhyVYfxkHQjNk7vWbWUinZwfdvD1mcfopsvtdeNe8LokRBaJX3L793EwjWdekYT7LV8uh1T5mRe",
  "key24": "wjbAeaUogbPBMExMzzDzwBbi2kEQscc5fLP4PKxVpCXiRTqaGBSDbMFt9m6pMpULhNkwiPK4PeVHQcvxbNws7ib",
  "key25": "4s4wsLojZ8RmDH9tv8iHtc7b45oPi4a2HkZr7tZ4BQ6woUNM2UfZ7ze7dYagCzYUGvJPU9nEohUJ8HxEdkmcab4n",
  "key26": "CiVP5RAyp938ou1koUSoNfvF7zdJwxH4F2GFyL9VCJTiMBD3216VAU3dxGttgUrU4M1sF5LXqfZThQ8x6gWG6j4",
  "key27": "5pZ8qv8NxH2m5KvdBKHsmi738Zz9obKHX5Gd727jgH7ickADwj9AdZtdymufqgDpPbsXMV5hdCjwWfLRV29K6ptM",
  "key28": "2jLWbrTpoPKbRe5BGFUUKwu63YMJojK6JPzyyTiJyWRwd6ii5bYnRR71j1PKPfvvzkCuPN3pmDKoPAJcwzcbta8c",
  "key29": "2kMtNg5hPAX2XEUSbtMLpufRboLUjJkmE1vTiQmxcpqgjLwiv1NF2gC7zZhUBmR3eR1aFrdHo8cYEYVZofQNoVo8",
  "key30": "5Y4L8KCc9JxvHa3cRpJxUi1fJUHsuauYj2T6imqoB3ndV1Hhp98mDasA3gsqVzdX8bLdfi9xyGVsmXhKqGy5gm1J",
  "key31": "3AyMsskkBts4kaEZxBxymw5GSzdJfSWjnMyUQk7c2aDQR8csy8HVqgWkgMnNTrhFtv8bdEdiYGT5iKuZGfZj3tiM",
  "key32": "joReStaJnkidaFN3PL4H4AHuhxSCmD5TZv9ruNm8Kh4xH6VKyihPtfWPs1pLXgoQwVGNd9UT7iz5pP3jzd7NZQA",
  "key33": "3XwWPwrpoSEaukmLcwZtcRReApmiNZVQESA42gVYjvCui3EGfgbFx99N8e48MEYDMCCYkAhMehp7SiaSEjPk3ALT",
  "key34": "25SFBx7e6vZCtNcDkpuAQ9CjYZWQWuQVFfowoB3ZXTtPiv5MA4PFG1VvjCxMakznK2rp1TmcdV6u7aVpnWkKtyqu"
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
