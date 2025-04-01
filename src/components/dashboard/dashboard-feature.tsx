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
    "57TS5oHigb9G1DYDAVaYJHxpWEmP6a6HF3XCxk8RaGu6MDbLijTHtejYkEPDsg7M1v7DqnjeMqS8entg3xvQqTnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpwTRNaHorW58XnZ9Jiu3fx8yuMXb6KufVVHTY8dkNZp5gWYJmW5aVFeBqpZi25Lt23eqHrMfvtNHW1mZVz2qnU",
  "key1": "2QFNoL2reUboJ9rUKbg2PrStcd2sPEQukhhruPx4VzqPNNJWLenwgjBKtVfgsbYoKnWKPf1xf7KpNGyunngRs9ac",
  "key2": "5JPn2t6ekQd7r2WDNNxXWUzjkDrTPwoMdfz7Gi9Q1NhkHybtgBcbuudhs7cAkFLS368oYyLgaZnc3P1snvS823z3",
  "key3": "38mLA32cfeP9UHjkkexVwCibc83QeKrKwxjmx58yuRcBMRS8C7vaVov7na7s5iQ1rkdy7sY6D8jScaZDsEXXoMKC",
  "key4": "2mVq75rCv1K5AQyeF38d9LQT4y5o7ikZa4d8Yvcs5ScuBUbe1FJbxAxedFpX817Fr5X7RaK8spDAY1mYYLAWYcr7",
  "key5": "66SegRxj8ZB9cgyXDK6WYGYz1kgB5WhFFabCFamgeHsNHmXBejgSktDLn7uKpzXjtnHH3PwdCfyBSDf9hB7hQUyZ",
  "key6": "4q5U46PJP3SLnW7s9HbpG1UPzrkhcrL22yD9NRt7EH8W7hcdkS35sze5sc5x52mKQxcMzk3AANjc6Y8r2NXeHpJ8",
  "key7": "3zmg57R9YtCGJVrnHqxTtP3gem8xBjxdXuRANg5Grsng8uqJdronT8vdpRFgKyNS5cppKXfTwFqUHGDx5ha7NsfN",
  "key8": "518d6Wa1UphfeUDCukpimE9mWvs5C2WEX35qA4oCXiKWsrgASxje2FHwWFovqgPT6aFtXnDKCW4Af6dZhsRDW7Wp",
  "key9": "omiJSrFvRMCasnKcyjjXvEjvJaQibVBiveuKNVYsZ4UPzwALYqVbynLqZLmcvW8arRCiqRRGe78gdGhLHAFZNdK",
  "key10": "4SpT6dDr3hxXxhTwtgJJodofRAAqTQBjwBeb79EGgk1sSAYPVryPiYQvLTLxKCKEM1NJHHxFsZffojSU2rj3izqT",
  "key11": "5ZqXwyEvs5rQtbbM12c1U9kmwMpyQj3BciXddm8dTmNaRkgn1y2TDGqLh8MjaEgSp69VxhmWHaHjpZ11wSazb7PP",
  "key12": "4DrmNRTV1VCTVMMybyTuSfabjrRFNhAMKyMxeeQkRDgyUp5SF15koDukT5cCfX3jVNswFnLjhRoYRthXugZZ42dP",
  "key13": "HnEfAFYfoDe2BF9h4dQYxPBLEt5w3xz38ekLn7wjZAKxM3FhPHU5WyvMLoGpqS7Kschbpy2asbasiyzCwRup5pF",
  "key14": "Fh9USCyqmkRoHkrjy9WjKVFVP1pA9HqPe7GGnwKZAryRwPGyxUUsALg7R7h4UDNUyp88j9Jp2LskvMjtcaoqKg7",
  "key15": "3YvanpGo2sJL4ELTMYJHEXVS4xi1qMEL3VV7EGZjnoSomNsBCvybmUeE9cYaJKpeTogv72CgWxhyAYHyEdGvrahi",
  "key16": "Ck4oGyjFCM862cagNDLu1n71hG1664eJUHgMWHJ9RwVXbJw6B5sRMd3YdSUs8ve6zJdyeJ5Q3WaoxBYW8bYnuYN",
  "key17": "LgSJEsQwaVrmd33JJgXfC3pHvtuwAh1i1GRViJeP8GEnPRrPTpGS41hcEM5aaTEJEhYw8PHtsLuenBmFmvyYfCT",
  "key18": "2wZAeR38jToMoSFf5EYxvR2xQTBdwXXku76VCN2fMcYET6NLHBxxQ3LJyhspefVYcKKTmAit6w8YPgsWpa5LjKo7",
  "key19": "3HMTnL7oEkWX5rFSEtkKqSLkGpgnSobzM3yiYPfvwEcjjbTk3XPeuud3vchyVy43tTd2HxNJQCxbxrDmSPTNWV5Z",
  "key20": "9KvJHfowahfRfkWMo4kiYsjCso6CNuiKee1u8vWBQ1BdvPb3PNjwSvk3UhvRAoKP64w5p7dqgGpn3ganbqVyqEt",
  "key21": "SKsa4kFsmmB7KqjrA4FvUUSoQrqWD5yFQv213ifZJmpRx44NtZpJiQeQ2FSfXAMwRUTntUyWfBXPPJYwhwWobao",
  "key22": "499trfkX3bP7jf7pkcArqumLW6Sbx26f2ZFJ9CggkMBFcpQ5Br27yiBvBgBXbxy2NJn2rjVe3ZHTLXfEg2Qpdews",
  "key23": "3iHUBowhncMyg2rHx2t1rSEwoY77XMrtALHiaFpZwN1j1YQdecRdzRP7HzPafJqbwZADiMJxHPBUoxmAFeY61ncw",
  "key24": "3M9JDLTc3mkdybLQVymD3BM44uQQ8LvD3EdJwrWyoAeH8NYcwgU83Fu1yEGvW1dqPLofhbDBnNKQNzM21yvCaksv",
  "key25": "2bcF3ZZJaFHCKoSLJCMhyFTmWWnkBv72dEFBN2bJxxMLtwF9p2Jxj5SxT2fR9WSL2NUmAmC9rWRQqtGqXHp4Zozr",
  "key26": "4MPwCm2bkSGsL641u5ipVmhnSw7TwVGNEB4A9N8DC7bN3NfKSKrAZ2VEBv8sc5rSw4LXY1mKqmGPN19hzDrzJMFM",
  "key27": "3jSmTKiqBp5EbyMPHhX4aWU8REu4JVBgUgchSscmC5tf7wC4fszpE5o9Db8fKwT4oGY9BNRtY2XSRrspAcoFMGAG",
  "key28": "3qzQezQZQZZwxEepVXbqUfZ71yxF3SBKkHEXHS7XjnGja2j53HfjJZH4VfDnX5DQMuBT2wf7EJ2H6y3U3q6cYdET",
  "key29": "cEB5vHBWLcTiWYAC8uzxyWh7mVEVQkJdCxeTqpgEuXE2rMYxp42og7iZomQjVEeU8wBKbi6pUPZGCveiTTPdya8",
  "key30": "4XZNoYgkAJrRJjhFbKKByRofoeDmaFeUVmrYd96x2LqQCMhaJQjiCJQh4VEsrqXmPukWYwepnmN5ztA7m28Vc8UU",
  "key31": "2sd9HpZQanetgQZHUY6Ya2SnXPxGFcm6oZAnHZ3zg3nGrxXUyv3iMf6oiQN6ZKCC1DstMJxL5eAPe2SKEsts8Mv3",
  "key32": "5xzvL2LnaiLQ6eNyyeqiT74ny7CUW51YHKp5ZJXNXwCW2fc8gxKqdJFgJ73ZyTmtNVWa2A6eG7fUxXfNxHgfo2pp",
  "key33": "5kXBRwe8RaMbSZpDBnWDr6PA3hDNqjAma8mGVx25YbWGEYogLzPdwqtZALvyUsU5U8v5Djo2B5TMcVD1zmSsvNKt",
  "key34": "SEBgLcsEDpfXwdtS9xXwXdjgsd9d4MuBApn5kXPaAEGvsyHaMZvFiN95Y22ZuMhJrDzFCrcQjo7tkjHUnmkZFRD",
  "key35": "8W6KSmfpLYMA1HFx9jokZCFSxSutVUp8UN6Dig4zWxyDyPYGLdDfh7XTaP3nmtN27sxQSeXR6pEXm8sV7iN4jyh",
  "key36": "4zUEJPFhB9uFAaXm1yWogdCiEBbqQAZ4PY61iRaV7qKrDXBaoc1FcFMZJMtawAc1s9xaJZ2gLTQLk6oG75UNK8SC",
  "key37": "4q1utXv3Gei4VrGwqSAu4dqyTZeS4nFnmz7yTeTp8MmWbXXtr3NEygLnszj9mps8tk8YQ8RKcpmQr5K6CSPHo782",
  "key38": "zLmr3Fkks7oxVWGBfZmjHB3uZRjmkTwGmYzq7KcnsSV7ewVDdard8C3zokLv9JVtgqK6C2aJSrCWswRECFfSGcF",
  "key39": "2GManFNbATNS3pPfvCcwmRNrc1EkeyFLj9aAnmArzJd4LRHq7h7J5q8B8JzWAprR5vuH6yg4RSwosfw4PpJh1wyu",
  "key40": "3HJP75KGoedVMsokdiwudazz6j1CJnst19ipSDLXxBm8EejvELirkPk6DeLGer4ERyjQSvsUNfZ8ErW4aMfvbazh",
  "key41": "5j2rXiemjiNu4hjtgPgeZdkWyRPZyMY81fHVoGKv4ZMjxSjxYfHAw6QoyspgRPBWREjreGj8FuR4ieqXVqtzwwLY",
  "key42": "2ABnqcEBN7qoxSawc2c3gFq3KUnpX7ZXdNX7ydoCStqDig1aSzyLGjbGcezmsraX6hdv1LUiBLR3r51xxpfhQ9hV",
  "key43": "iAdHzda1duBuZ2zz1bPA2y6oGMUBUwiefrubgN6TByM1Gu4tXKSZZKAwcjC56C7QpWUAwcdgwVPbPR7JJT4ic4x",
  "key44": "rsWmqn7wwr2HTT3pkh48gUAoPB2b1NcVDCpzjwGjXrv3DNxR7W7fVpWMND5Bs1QExTSfqKyme2movKn6KGuzw7g",
  "key45": "2KjG9fo8Zs7VqfsEiMA9QnMhxVoQGqQQWZfEf5NgWy4w8FAdGjruxsp2V1FMqJaB5evcgPHSyJpyNY63xzzNeWfG"
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
