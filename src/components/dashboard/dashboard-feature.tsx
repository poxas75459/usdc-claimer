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
    "65pRTJYJpRqrAQy8Uwtsp2MPEcRTyuYX9suobMyD7C3SKtSdLP6wrVxG1Cs6eejbRpEdComb8V1AdJ6hdiNE3FFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23RLFDLwCxfK7Zk9HWzjUSTqmAYMsenimKACQrsDrVbcXWg4wuAVS8TDXQ2zhoYNXufM2TayJziSJEEFPWxcDLM2",
  "key1": "RD34Ap1XE54VXBSeunBBUvAeGu9dt1M8TSFjYUZNxP94MG5NNkRB2MB7oUvPHTVPQdqtUDqT5wuZnkRmiWqc9Ud",
  "key2": "Gnc3rckcKhDd9VVyYxFZ4x2yaa8oANg8JmD51XXhDFuTaH7h3rmr1RLvEBxhisEWoCtRYVCJJEEiafoKvienHrE",
  "key3": "4naebDyRRBwmuCvUtEoVQ7sNGJjyW4S7sbx79yPg2kYCSqMdLzz6xAmWHB8cLTDrD1Hhth4KngK7zXJkXBXvG6D6",
  "key4": "4hTiNvhiutew5YTTbaS7CUePrHyb8JxXDNx9jsQXrioXuxmWN1JWt7aNebB7vGKhgW5SeFFBTrms5qqu8hsA9Pg1",
  "key5": "4cMtiKtpqHGBHUg9wEqz86usRfnJQV9Z4zZvCH5yr5txEsHXDJ51Fw1LdjsPRUVbEsPfwbtSgk4dV9ChkQKuNwiK",
  "key6": "2CrBqxYzzYQAJGYJgrBDB4fMuwpDsVqDJGB5iNB3uS7viUHV1BUASkM9KnHVXuq1web1qeHEaqwAJ48wjZsyihwn",
  "key7": "3YomdFwK3n7VEzQEZy48ohCL3pYG4XdMpczHCXTmVeTxuetfmbGHsN6iqVdQ6TtbMCdrBk1AgLQsaQ28AaDjAkxx",
  "key8": "4QNHes9nmXgVhBYd5X1H3VNGPu9YE2x8Ckf9SgrCrn6nqj2WKqWy89121TEyh182RYXYgYHeuteqoCDqcdzpgT3t",
  "key9": "5DVFNjjTbMVdXYXCzLpGoAALCxNPwFBdurYupyvc9jVDtRrx2jBS2Vo8AcXmmBghUA7heVVRrjbPoPz62GhZcWvm",
  "key10": "aKPByrJoabuRyBBjjbCaBHziQK5p8HKKHqFVAqpgfwuPMAs28jJCTWwPFbDjK8BDaAuW8iqZKPFsrmmX7HQqhQf",
  "key11": "24yJRcYgARiHJnUAAzBVuZBzwDvS4GrKAfwLp396Dk3suPK4Zepsib5yVysNt6Gra9rxQ5zLpvbdAWKkg1u3hJa6",
  "key12": "2yLxXy3AVN4EUm7yJ6FKxbrBd9RxV5cvsiAJsh3JcEB73eocUcRw7HJDz43Y2d8QNdfRGvUj9s7rKCY5zzdsFtmw",
  "key13": "5BNjeZig5DjufNCMXfGE1QjUGx4kq1TaqZBXgRHKDjcQ26xz2sHX3KS8Z728hWRj9dRpR72Gh1ZLoSqZVZvbL7Er",
  "key14": "644zqJVEMjfhvnR3FKqrRbmhz4Ge7XKuE4Y9MEupsf3X2vdocK95X8zpECsa8AyLoJ74KaHQYi7QUMU6zc5P3NZr",
  "key15": "kViFkwJbUd55GgynhFuCnUPY7wLEAq1UXK6kDuiKe9qj8skKSrGJ5vFoZTbfhJJR8PDtG4CGvxAQ6SDGwKZbARe",
  "key16": "pbR3fdcos9oHZgTkLLLKWE2LR5nW55TbhZW63YZwbQXtqsLZxMR6zNnXoEf2kZA6Bi3YVfuN1iDaQjpNCAdZBrS",
  "key17": "5KnmYVQwgo87tj5NLvpcVBKk2Ki9gu5mU5qPcfyWC4idw7fh1ALQg6hBjuyi26HAEVtRSW3C6ryzE5hpdyfT8dwb",
  "key18": "PESRW7v89CiAjjySqPH1RUgAvHAsjsLwrycpLiPZ7ae5exby2ouS9M2tYthm2Kw57T61kvBVFvqa9faF33XThkh",
  "key19": "2VgFNF5pTUty1gaqNscRzsY3KPnFp4tJJ3fBM1yKgPK7VdkAzLTz3fgLeVAJ8cLZpFwHzakx41416uEPtGsxkYRm",
  "key20": "5xevQVtBgAmBfrnubEHirh3wvHUT3TDjYvppoAQH2Fm3Fe63Yzt4keumAi96746mC8DyBR9qVqcbqaqR8BruyPP",
  "key21": "21fKkABQaXJFQS8N5DrNVQ1kgJJxkrVzVV9AWJxfiw825qwNNmHRHbxcV85vFpxgvhFfLKjtewpTxE5gSPYsw57Z",
  "key22": "4HWHAHvTZeAjdqRXRgiufHLqn4JoBZRF6AKKSaypBm3VdBH1isFLonm3vFqdJSF1E9eHM4n2N4FY1JS9byNf6iNF",
  "key23": "5W5NVmr8gEpFvvNFiBky3UiVcFzoW9sxo4fjsmn6WLf9TMbpxMVPw1frAkqnFn6qHR5pxUJ8EYLNGjueWrCoGAdJ",
  "key24": "4QVftAkitXsZnrkTvWnUQpo9RAKfpMs6HgGafmLqSys8BgUzpmdBQHkLJSpdSYyXmuTSiwmNxEsAfbw77ZZqPdHV",
  "key25": "43kyEXk5275w23bp2AQd7LBpqB172FMLZUpU2cgwrQCZbyCUbL7s57qM54onSyMqBLYh7WMJ54PrPBJVhqXfzkfe",
  "key26": "fMmNb8ScbgKTRygc6fpvVLncYhzvr4dGAxXC66y4xpEbYv9papMWGoKNv5WHTNzsMt8jxMbW2H5u5SCy9f9dm6L",
  "key27": "41GZXK75TEkQW8jXAWnMYhK2btudcrKQGnNEXQA7b7y9pufrj5zcJ2zSNvSMx1SKQF43eZSVarXFnGcukNi4dQap",
  "key28": "A6kafn2JFiVNY69frYgTTG3TVQYza4HWyaopwfTNKMCuVF3mTqVPNqQheXQS8FKaiW3XUqC63A8GnYrtUHrqpWi",
  "key29": "2QetGBjQAyS9p5fo83p1EALGH8D4xy2cg6Yg2sWewZeUbv4FVuivEQgCGXt9kWk4txoqMyW9agHwBYsBAeekCk2B",
  "key30": "3JunWcWPHJoMs9NFW7ngmPBWf5THWBhv1g54sTeHUjZiAddtphNxgapvkZi6dX8UHpxvSQA7JbhrNbE115qwtxve",
  "key31": "q61wu7q6671NFZqZLxRhupK9bpHUwGeRhdVZv3mqBBX4gD28HqP72Ni1LXTixX5Hi2EAhCmmToThZiBYoEqUTis",
  "key32": "5g3KGPXKRkSiftp1mkaJT5Y6xjJ8HjfcBUFJdain3KUm3ioXUGkq3j2mKdbvendqqJFxzzwkTknTwn4ag9NhpHdw",
  "key33": "63ZBaKN9NtwJXkxoDX9N1UbZvsE4wpLT52KiPDcXECpe7qeagk19fWHWLvcpGBkYT57RYprvgneyNuVxLXuecpMn",
  "key34": "51z8XfztfKwTjrFKq1f5au3VdbS9PUJW1wWgVtmczWS22QatabVuyJ3TbWfeNeshZohW47iUrjPdgP7YBuRqdahC",
  "key35": "2ft36nJ4pWUEpTLxgBhtPVmfjh995JXDrQh1YhJPpzuSSDA53sUnpSULkmszCW8wGbhf6ciHkUcED8HoVVm1s7mT",
  "key36": "4sD2TXQWqYc1zcSqPdE6CT2Mgx2AjupXC5EsdzqxSTQ4p2typaMqJNrtEy2SJgnw7mMhswrkAvgHKNZCLovpJ1q4",
  "key37": "5kusaXsX1CSFj7QFXfmy7BJiDnvqT44MGRwG1GN2rCKuBQj3xZTdZvmRsST5Jd9dK5Et1iHjBSkWmdTKohsw8fhs",
  "key38": "5gqSupXFpbVMMztXiZwqYSAib65iesesZLjR4Hvyet3mnX48PhzENCy3G1v3sBZW2kB6SzW9LEajnaPFeUseEjve",
  "key39": "4nA6EYNPw4qcZGdujihSowuJjbXUE5fT1TP2p97NydnCqDsvMztaLAMfSpt2Dn4mZkhkx8tFS9FWE3aiVEpUL4jB",
  "key40": "5JFRMavea7unZj3dPQRNrfun7YvwVkeNtBY1w3Nd1XMV6AhTpXC2TekpHTbrGdig3gLdx8ptz46HBx8n6AWsjSi6",
  "key41": "RT3pej6nRosqM66BLNhxGyegfNg2NR4MA5Vwy7ohWx75Q5ZaopzLD62yBxzau7yKj97byewA3MQCNrr4wkAqDQa",
  "key42": "UGHGWs5rA1HSPWSzQmxWFsNsyhR2eCJxwE4n53WqUUv5HcgLEV4XjC7umgMSm8Pr14RcZNZp8JzWwQY2Fv8U1dG",
  "key43": "3avtYpSGhG2iyvkC7XLSiUd2q3j4gsZeqZSGt5bqKELfo9FC4nMp1gggujCE7ZKY9w6hothfEKKy2hJ54dy8Sm7F",
  "key44": "3Kve3reujtZSQtxwVp7ZbGvJFf2zoTTTvgJV4RoWpD2eMiGRF4XPCi5W26Y76V1yLsBpskAWaadQ59gwwDStJjjg",
  "key45": "5ystmAavkqKGvRq8kNkHUtbY8w3KWSD3wZWGD3YBpo79oKBuYtRMezVaS6XDy4Tc5LXb7nk428sp4pyCkifjcNVr",
  "key46": "4iv8pJMvYUkgDHjqKZ7xaLtAnmBJnuy1NPM5px5CLZjhqHtfJRaKLHktwSW2pHMfuehg73muK3f4MDt6QLn14XcU",
  "key47": "5shG3NseUpHzJE3ka9znEdyJm8vYQYurp78SP3Mdsd3WKY5VUkZvYVYYmdF9tuCJin3UduShe51LbAoznr8zBD6W"
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
