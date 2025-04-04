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
    "5XCv2nLg7hnC8SB32MGcyYVzemnzz9D5E2ndPqqMZH5JSs39YyYJdhFqcNXTpeFXc43hHnC5JeWvvrC9HEr9VJci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JtimUhk7hBjvg1qudbKycMWZvZuGKEufcxZKKvPo31HUn39uDyVQg1YQSZpg1jYqbxBMVXCM9UwWCjWV9rR84k",
  "key1": "qTotejoRiy23HrPp6GE1wooUyBPdK37LdacDwBTcpMqNoaX7qy6ayXpugWHxUiBkgHeW1vvfnow8bfe1dvz6Xip",
  "key2": "3DNtMqUEk1jvjteVbbUKGSXcCQCqxNMEyW3ikY76NsShCbdaHgPc8VCH82kG885fnea5YLFgiaXtyhBiFaoQkBiZ",
  "key3": "3fDjjqaYEyr4Mx5Tgji4fgKVbigqDpM1MNxxUJtJJSL398aKzeL5DVLbZqniYSC1MWqdRuWkTSmzXTZfiaJkZ7C6",
  "key4": "2RfFtXwQhvxFbfKUXD5sxuTCxRX6GyZ8cy6v2H4ER24ra76trsnRSz6QNJcMApaCNYKtch1FqMyXDU6Js2gyGUnU",
  "key5": "4Rdig9FjPY9fgvUcGGL1gbThKNpWemJ2xKnqzoBW95Tyh3ACYKVSeJqpDrAUJvdiSYUVoAtgY3CMxGS47WzFr7Kg",
  "key6": "4yynj6pczCRkmkn2jjMThGYABmAsT6iBtuWukZzmjnjjGsLKuhpSnCC48iScVHH8ggS3doBW8vBRjjsxbKb6AiUW",
  "key7": "5PL7U5DvypHSNomKPDdQoL1tYr8gm1h84yp1Xx3HQRUM3j8eR4LYWDkKdn1S8bnq41DKpG3jU9avHgJkaGeZnmBW",
  "key8": "4G6X4PyY7vQRWFGKGRvxRXTvP2opX5NT4C5QLa1WLACCTKMcncWfidWMSidjPJrx6z3M7TD9r3mBg5WyjVajnz25",
  "key9": "3Ky1hadtMwLatvVVuXZacJN3eSYQcCvv5Fsp2ci6EPLSGmTBX6utkAW39AScFYkQgp1BNYuyKYjW2iB63qksn49Q",
  "key10": "2YbbjnKjHyWCcgs7KjnSYT6dBvKWtLBUSq57JERbdowTLNw7QxUKN1FpBsdQW7RgrTvfSRAMCoJbtZReyazcgDzi",
  "key11": "2btNs4zb8ne1r9Lv2ah5iCfAYgPAxsFJYM7srT9bBa4woiABujeiAkR15PzphB4LMufkWwYihuq9iK8Hu7C3FJdX",
  "key12": "uuc2MnLQF2JjVNcD3caX2ztydjRCfAgBzk7Zt3Kn2pr94McA22J1HMdy9fmdMsYMwCzxtkTqrFWkxpkwvybLMdg",
  "key13": "4YYYfgc717tRjaNAj2wHmD4hh83ruCWEGXnNR6NQcLfQFxvu5SBBwQmTQqSK4nZjFBZVtpUsMwjeqVbUrn5iTRbx",
  "key14": "4odFThfkSycV5TtQTF4TxggnRzDUFafYFet7oD6s6rHT7RH5x2YNVizVFaWF958eRUmpH82DuTR9SQXxCdsLUs6z",
  "key15": "4JPjxcdTimLVcBL5Azbk98c8d9WvopwDvNHKRzwJ874wHSiggmK6aJg4pWrqpJhmVbX6s67njJzrRePequyToAEZ",
  "key16": "5MwnLqbtVLoWYCNu35B5LjgYxh8pg61Gyyxo1ue2sTNUyYgiRvtscnC78TeJbUKrirgNH8fMELU8fJkhD6bXG3A5",
  "key17": "3CzsUpMNmpJor4qzXRaqLGxUxoxbDKKfPm5FFqfuCzsb5wPn1EQWEf4g9qaDoCovmvmFqAeDLoDam2Har3NTBxmX",
  "key18": "2kBLiDhJyZa9tcE5pSDjjDtMokDSNdzASbd71eK849A61s4YYyRf922D1mnirJwR1en4rwH7Wzwqt4YC1QBsw1Tu",
  "key19": "hDwu9XTUtKZdNGC2ZJWPskCWi4Ui1wAhaHGjLq7iR3wqD9gENPHNB9ybaMvg51irFDHF4154EiunHHWx2R9krSA",
  "key20": "5CTViroyTxVk3ou1XnxyZUrtoeYHdd29r5NfNq7DfJHLNqGJQxwJdPmPdLtEchZPbUdFc5xDroqtfMGrRkoTQtjB",
  "key21": "4qdmUUhZHx3gLH5yYC8qNWnTLRtAQaCjTsGUkMRzR5FHRbVfLC9TTpJfkLr3R2PnvdUjWPhpL7Bx7GxZa6nr2j6V",
  "key22": "5uuModverNdJf8GJxu7hLWaUtzL6sEXrLnCk2bxQviXFysRdeDwSaj122iRK5qyF1QG1uNXfmao4M8pa4An6Fe7v",
  "key23": "3eD6Bp3SZ7RFtP2dUq8CtXG31quj5aB4s171AWoVFqmNTMchnH5zyQddSEuT1Urs95kJKPY5GTvpVnMYahMcgxr4",
  "key24": "5snp6Wf5Agk2wNyEdU1R5pEbKyceGeDBXASPBAB6eK2GqVWTzPpkmPcARnYHetTDPdfHTU8APjpSS17pc3mesehL",
  "key25": "5G9yL5HzPqGxZnV4v35ykVA8XjqvuJdxZJFb3m6mH1QvnVYYiJtEpvcR7tPwRPZ1qUtawgikFYp5YHtwkre38pha",
  "key26": "5LpS6iGQRZb1tixdjffXYwPN5QaWfrWRjhz7Eozv5BGPxX1WjYZjVgNEz2RvAGVBUmPZiTE5tAfhjiLCTXwbJEEK",
  "key27": "4nTEUkWip9n4xVcAcX5Q3b15aYKHcgmsk6isPyJ7ZAysTRLnQ49c22QfAa8XZ1FK5sXZgoeyekTiwSDCLKic4Fnp",
  "key28": "4bo7br5ycPSfjPsu33hoZSS1NkJzXRkjo8GDsG9NdK1Ldz6Zew8t1PMseus7W2RDD28UHR8WrJ2bgspBMUTEtUUo",
  "key29": "3E3bjozJ7szkpYJ2M6R2vGBfFttHw4emZXHm5Q8mY2aJ9dSuHaZ3vvfUWqTg2AZKBHFhSMvdgCERctSDYSTB9LHa",
  "key30": "2niE2rLd1LG7AP8zYyKeVPeC3VLEFYCnufmoSpXykm35nZztHDUs5MVSWnTV3Y9g6NTef3k5ywnLVrPdothorBwW",
  "key31": "2Cgrmn5cZU4QKkgYnVfi9hPrg8QGzHEE659R46TtwwuT4B2WMC7cLPENZsniNqShVEVbK5s4zCXRDePGBBsLUxft",
  "key32": "4KNsEebLpK8PgwNY7DmJgEDuh5W5RK7dWh1Dk5qXbUnxwxEyzhcVJzi5t81Zsz7XWyoizXvr5FQMm9whdjYtRJzD",
  "key33": "3FMxHhSyrSGyhTQJRScd1LmPFbPHkNojyWzkuVpdueEtpJ57BBf8jcSGefyKrht7YKeAHvJLm417G6mjbuW2jMLT",
  "key34": "2EBVKRfcESmcfnuKYVj16RdPT3W9JFa4EnpBNyzG1UsRRR9cQ8Np4tpQ4VZF5Yvce3Pwmr8YUP3VLS9AKUdKkFNA",
  "key35": "5ve8rvPaE82kbzkczJ1oEVVUwA1oWmTeW3XMmPGMmLrsLvsShNvyuqkcYxjDKe1MHQ5M89iik2Ts42FgdBwmaeJo",
  "key36": "2cRWpV4TZv6BdrrefL9kiqinG6E1Kqay7Dpvgq9qki9brmYgXuiCySHxEJ6CNRt4BTvpbEgqHxinAEAuYr2F4dvc",
  "key37": "5uD2sDjZ6pacWcyTyQTJy6VXDAJdbLRf4efsafSMT1EZMdq3jxNrvEMcK9rqaQE3mmkEqkSVUA2m3MURtvjMYwiL",
  "key38": "2AtZCQqY7zyDevSCFLxatweNNDUo55eKZBapoRnSPMMc8FgdVgPuFLXzCSYAs2ynud5pPnE9s5TFd6qDv7g5fh2h",
  "key39": "4TUCFo2zXVdCwFcuMNuYsqeB65RyWoSUvfrW4FrdrdqKdmLdkvYHthTD3qaK7U9emNsAfnrj1gbNoNSphuMQcygE",
  "key40": "4gxFUTAiqWviMjSq97p23gQJzeNds3za3QYweoXTJNE6qCVELoUaBp3aWvsCyjiu554HjrvJEfdmXV361AAbuqtP",
  "key41": "3pp2e85u2KgQBKkgsaxeSGUuADEu49QH6BDQE4BaDgnNX8bDcLN8xC4ZqfUmnr5gT6tguq9MztJFeP3jqC31fZSF",
  "key42": "RxNVWdUhGTo7SV9EWRMDe9gkbfgjvrGuvVYX4MfiE2M1abUTCghZ7oS6XPpaT2xmedsNzt5jFFXd4yewHrApt4d",
  "key43": "4Xb4F6Jemva8gBJKAQqJso8aAzj8dqUwTMBE5bhY9g52do1Gp7LhseSCF4oB4UJyEYVQkBSYfBFGZHcgXD7tUZhH",
  "key44": "5Nv49xi2ZsCjkhZmUmrou7Tr2NJ3V8qGwu4eztwgL1ZFnPqCf8SjZBwj82zAZySKUdWrMTWK5RPCNPgQxjiQ9e4B"
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
