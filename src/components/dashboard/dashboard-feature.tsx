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
    "25sJj77PBbnMbdXLMy51iSbhE7nFhYxfvKabQ5REC1AXteu5EA3V7yUE2aeKRxUbCp2jyuA9vHhYo4q9MAjyAPCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjQpq9y43qdztFc45zQiWLkkiqSiFeU46SsWYck9S6fWaLoYXMDHUqcRSeudZUq6ooHaEWWtGxq4kozMqKZWioq",
  "key1": "4HnAPznThUTo4tKufrGkggqdetvJMRiV6NwFHzj5PDP2BwM7aZCCkfNGx5hVb8UEJoW58uAyXBkPdGX1A9oL7NAB",
  "key2": "5qaxUpHFH9JbPx1KoqQnHSWmNABU5WYAaFsru8j4Bum66kx7QE555dWjwoetVkTs73TCUBaTYoWobuMKDjxfRQyX",
  "key3": "5rwHyjmJdXfXYQ7fp8Yd4mqajGYZBrpGExtYSvvSMMonpb4PofhVt8JuwSWPVWKgU4tiKxNgAJdX5iFcKLrDBTpe",
  "key4": "64PmJuw7vfmx2FTVS3T5MU9s5HV7TV2Vm6aBqHKozNvN7T2EjoRzCY9bCpV7odPtcPu43uFS2xoDGL9Qhf2NZcVf",
  "key5": "4eekXenKAggBGhZAhHhyNkJ9R2GznEAQcDmuUPZz1HK9eLvtNvaMG9mTfZWyQZpV4K4NbhCCMr4Nw8N2erSvyP3Y",
  "key6": "28rLJLdfYneWwV4AhUZV57wx1y4xeRPnok4ScWsoB3NUiYA2HZ2varyuwyB7Lxah5cArCbA6Ev1QmkRdufUfRHbM",
  "key7": "22ZhEHf49rGZSK3r67BHFZEkSRFbtwJGg7s94GbyD7y475pqRpPVPF6GQNLCwVRvGW92bXaege9gV6SAN5qtsUA2",
  "key8": "3YEXvVJxwe7vr1MqhzG1duuc8HhqZEbi3vLBVoPmXx87sL1LEfvZnQYLpbfnvJY8vzEmuTkejKaYcPSd3gmVD7bN",
  "key9": "5MRa7Up64h2nhxJwy9Uo7Ae5nNCv2FcgkjZ4h7eZorxKYdsFN3d4KZtJvZvygJLNEWndF4Q1c2nfHKBhBL7on34E",
  "key10": "7qZX2BTyGTePZS4wsjBnXVbhz3BsrKBsiZSgeuZVLtjX4FmVuqQUN2zTRfPQRYq17QEpVDpVmZskJmQMJQHG9VJ",
  "key11": "5xv7wyzXbjZLoSZQRBfh2rbUk7gBRAAZu7AiC6qKtZaL2cJhtFK3WbiWkxxkn471FUNcxdVE2CJvPszJQ6jk2LZ2",
  "key12": "5Byzufkwijzesh1HiEP6bsmskLFXCaUAPCNS5m3jiYm4YSxUTeAdQEbeEehs4tK7ST3e1AugiAyQJvUvwhCQS119",
  "key13": "57QP5hqkGK7dRn2iUn6bQm49ifu4jafwcM6ohXK6R1CzTysZ3rtYERB67QKVkusuJFgGcbaeEfHJRh6Bb6txGGHN",
  "key14": "4xYcvhiKRtTqNeFhfeA4wXfeeN2c7QsR1XsGewXdCjiWWfbEoN6UmLaYLfgyV6YFEVgWXJLTyUvVKvymAtmPyMcK",
  "key15": "4oUJUG3E2VUnV4aMEcZFB5zoiSLAWrXMZBkuRRHToocqcBH4zaT4PsHy4iC8VqbqkSDQUjcBHLrAKDWXuc7WqUF3",
  "key16": "25fzt26yq48Q5ChcS6a9bdRiBRqvW8rVmbtpGEEdigEUcH5oeY4ywSxedgzLffDdPzGFoBMehLtnMi1f4zb1DB7C",
  "key17": "3K4fVK5s91DFZTKoda9XuGB3hbPNTQtPBQsL9PDEj5ff2ETpZbE6oPnEkE9DEsE2VbLTYDGqfSbBntb2fBHsen6w",
  "key18": "2fuWvhqf2NcR65Ls66BsYCWs7gWcFU1MdWRKbJPJGwbQ6iv52mmXbvMavFa516x7AdPPidGTm3iMLNi8ghxDSYxR",
  "key19": "5HVwRakfzTvvVyJKH8LRNHTwmu9YZ212qK8rNHij7QnFpLrMy9YQATigDHKVMhsyuYjRaH51SEMrLzV9y5DyU1hr",
  "key20": "t2ghqbQ7X9mAD21aRRSgWWZxxrP4hobnRdVnZo8FpzCDrTYYmA1K2pejjpP7ZbcjLd6PgNMnumyRVrUr2noXsA4",
  "key21": "3WLx1EAH2NRmmUzFKdZ1SJva2KhpHGKRHMFoxTba3mdrCdxtXfZuvSvj7fwEyNWYhBsQQnuBvy457JBREzM81KHf",
  "key22": "4BAvNe9JU6rSLkSCqPjT8EYwYeppWX9kmmfVAEDTVEAc9aexkhE2qkvYqSZ98mPStbVosStc2kN93fArUj18TRvz",
  "key23": "5tda4uvwcQjswtWqbsR7nmDkRmNWJmve787Ghdi8vm6VyXKrbJJMfcPPWyZmeR864iixpfcjtWtvNBNb2xhGKT9F",
  "key24": "4MveoDe8PiRUD96eUxYnS9UF9sMFMnL5hiPD6sEcw9kSeoyuUuAbZWQDwAYa6cj6DZG86htMLcZx4YP5PQspsuzK",
  "key25": "3rknWp4EVtoS1YVHr7BpDPUETZM1UipYaZJJZ8NAA7qCECtRKsXEh4RsTZuwrKqLQaft1geeTb9WwwhUuqxT73JR",
  "key26": "5MYYR3LyHA4QJTEo1YLWx4tFDmmcu2rC4QinD1rQrFnrVotUn2DQ1zd5hzqdjNSetH6pWjcYQZLRaZ6LpubEzDzX",
  "key27": "sgfi5MQtpEajCMHZzsXQQkhJev1ug9jr7szfkPoNNKjUmRM4kBRgrLJ9CH1pV6FWEXtB2HUFYnYmY84nNjuxK92",
  "key28": "5HfG9nyNLqwY2NwXnJQr95PDYGyCKwE9csBGy3FCTQWFKmzpEJhz3YjzyJDZsBWtBhPDFmuSkJ1ejgPsDh22Cu1v",
  "key29": "5Mf87ct5ZhUc2ozrmQ15TGdS6CUmo6af7jeSCHrbxxvo9jFVPkcc5AJBUGQEcSwU7WLG7Kbt7cLyZ22hjNHSHJ75",
  "key30": "4yrt7Y5vmariECELUThCwAta7kV7cfjXtZ1j8HNvRMGWjkf1itziaYkr8M47eenf2sSDftbstM7pQ1DZjPXxwt5b",
  "key31": "4uPvrjC6qim7ii7TbrwaUfWfR4ETixUXH77Rz4uCBQZC3Hscn6rf5UviHr1hEu5yXWooAcPmbUKhvUAxNDjh7c7x",
  "key32": "5BW11WS3JYmAqYsRNdGdY69j8tfGFc8iSmrBGczbaox8LbEoh4VB7TCfx6BDc5xjV6u5H7S2HRZVEinuYdJPc3iF",
  "key33": "U38QyYEACYeygRn7VFPd2ezN37v2Gi4csGw2bWuNYcVLGMD25wVLCVFMtfHJ4Bsj3ZMSk5bWZzYRdSAP8TpRqmn",
  "key34": "5MLKxoT8ed46JtCqjq25zHq483Te2Tdx9Zv6skbkJHab4TsBJBzNjVAtb5BFGRbs5k2g1qbjAG7nVMabi84dKwZT",
  "key35": "2UoRpBjtDf77hMk9QW6xWKwUiwBcbrT3fmFUeFoj9Bnpppp6dNfPrVJCN7Va1dvoAMn91WyZDdFG3mYGVGFwrTnj",
  "key36": "ZTZx3FjWnHiKeyPQa6jQrR7bE8vgvqBxSdzwSB3dLW1hL6ytDTK9dRUWVgnLwci5s6HMekcZpPffemaAjaxWs8h"
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
