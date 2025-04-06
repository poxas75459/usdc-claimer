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
    "2f1ScvRcsgDwSJVPMRyhze8gwxrxASoB8ow1zrqEFnQG9LLXy6t4t77pjBfLGh8PTiLL1PBMdG7ceJP2grFxk5dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awrapN74H4RHchhUFMjL38dNVcipWncy9o46Xc81yXc6g6zCsAqcrkhZLPkU787zyVviRyYem5crMqZmiisHqBh",
  "key1": "4k1FCWy3S37p87VYCrkSxVXR2VkuePDv1NbkLPC5dUtodpsBKNRfh2YL38MAzGHtQtkEUUPuP3hx3kDrqXfvM6tJ",
  "key2": "2WTvYxpn2dLQAJgKBgEBT5Y1x9KRmehB2oEc5xbD72R9Q5bKHU3D7mdzx33qpwAa9HDkJ8fCLNUVaie8FfkwBdUp",
  "key3": "3U9s44HRjFEkrj6ssCmtc9eXavfbDczfJ4CNwM4dQ7mbGEwXhgMBSZtajW1mVvfkS4GhmMETWLQwq22cD9Q6qiJZ",
  "key4": "J1J9w5NtNc1NcDsGK6YeK4Qabwgp8EtNYXj2cQMTphAoGjxxozZSCxD6Es5CgjcwzN2h6vYigrmxaKw9sHsM97q",
  "key5": "5FseMQid4YTNU3F9bJbD4vdiSHA8TGAumQ7mnLHmsy7Kd2BSVKgZ58tX3wjFkBFVZoUM5yhSE28w4qWVgkafaEzn",
  "key6": "4sVT6tHddHytJjLuV8icBCTDYejNVYM95UCVVjYeyNP9d5madveZYQez6rdGkTaRo8TNgppz683dk3aY13jt5pQ1",
  "key7": "5ohMMyfXC9V2rnyY6LMwaxgczGvrJWsrscwWyTX5aRonbg1JTH7ErvqYcAjsCZ3CkpcaLJ2U9rQzmCoN5Hnzndfa",
  "key8": "2cmUkVjAhv8PN81D8pL4KgwRTXew993GsmLLhp4g5DoNZhL7QWReTS3XWxiG2myUhHKrMsyWx8uMT1pmCmgGWb9i",
  "key9": "34dxUWpZ6jQEGzjQjJbgLmfd1LM7bNFzYGij7XCrhbmba8LL64P3GpRxxioix718zK7iUZjkSBCwaFBMx6EGLKgY",
  "key10": "2GUNGbfDpKMupWAHNj1H15YcCDUJfF4dEA6jWoj6ua6NNxkRzXNxufpF4uv2S7NoHFGKeTqFGxcn7AvHJeQLS9L4",
  "key11": "2ujgEdyhJESRigV6ZW8kWULDYCzX6nmMv6gnkruaYfQEr8GmaKPrE7mwtmvf4mpC2ofq1WGyvSxJRK3nSim1pVXT",
  "key12": "28qHLqztahkt5vuyHirscRT3krZmm3umTzrKX9bfvwPbtBqtb8aERoaL2h8C1NBpGwkreBGEL3uEb4nkSvHhUvtb",
  "key13": "642XZNGA3W7FmhdYMhNM19k8bBwsA7mgfiUzwhruMn7GrWUFNpmJ4JUWmQ3E35CfqGu9BqJdSQ1NXnxabBqYoW7L",
  "key14": "3ZqsZfErSr5hjnDwhUaNHA7MmeQEP2wwaJLUcvrutqxihxWAhWSQaPL7VBwdCHbPdiRKwiE8shjck5HcvLWYTCqZ",
  "key15": "5pjVA6dZZpCDNq2pE7eE3QtrqpMSfAbkbcNWi55PBE7VShx9c2VjrX9QXwBLuz2y3oGGUgXouhhtDZ4zyHtSKRq6",
  "key16": "2w9WyzGRKRriyP6MeWd22dnta6YLZc9Kh3Libq1Cm6k4RmCpzRx4cYCZRCHHLXSRWpBQ1qvGj9XdcFSm1tLWVj2E",
  "key17": "3oehZcQfcV4xSonuznmnLkXzt6Ld9BNpXKkF57REuGyHH4xD6fTPfYCNpuwQk9iMtc88msb3oqM5rXYrknFrxBiy",
  "key18": "W3gF92o5E2fuuL3RAqL5e62GzEjE1PcgyoywERgbof7ijgBqW5GqPQAxv88vKwsRwXT8DV8ThGadtNwyePhAHWh",
  "key19": "e3C1Kxunuo7mZGWkpGFLpaZtn1TXRvdVQ8MfwGrxRc8E4gCz2WenauShVHuAVqo53cVGHSCniTLiAxDgTb8UJnA",
  "key20": "2qaBTgtXdCDYMXyhVDj19j24mZKNQseLsrgTPDdgjwEK7oH3Bpbc8JPQyxUgBhhj4qbBDsdCsVnDVXjQKriTCpyf",
  "key21": "4qjBxmTQu9Cg64ewMXh724raKtoke6jYRxDVSaJKudHEZSNwfoJny5XNRNQqrcuQkHozMFDUvdc8GrVjzpmBJeWf",
  "key22": "5K2hzNmijvNcZrJZRtbraofZcejCVxoxJviNTdRWnAMYqymZzoV8QCEbVath12ZsnJS1gYXLUQEkM4wHJGHU1wcV",
  "key23": "heEhZc14eReDtTSpgAppQL9hZfgEizrCsHon9WmdgEbPLWVFj1GUTGKs6DkziiExHHTmxhipMQQeHybo4NZ4ijM",
  "key24": "4iUuXjH8qFUo3ePviinoiQNcHSchDV6nDZTfdq5j6Kbt5ArYJRXTSo8S3xHAuUSmiNrPYFXM4e3hTGHrmP9fDSsd",
  "key25": "5ZASXM45Ys8NnXyqu6gFQAD58vyDB5RnaFmBoL4rKB9be2phjRP61LhqbtLizk2W2EZuDEsaLpMjRJTME4Sug1UW",
  "key26": "2HZFg2nRT8qeVzUM9QCzP7d2tRAiffbReSkXYgMF8Dwq9wvc5MCNW69E3NUkbsP8y67m7kQoAFJKYsuFwLcLj7CS",
  "key27": "5REJH7DfyeCxqFiWNYp5vCBa4fKdkVBvLuPu4ZZ11efXUTqgkb8SuDn1eAg61t2HZvcYu2DbtnicncWPadBnLdKw",
  "key28": "TnEADdDXkcR5e736bPtyPaKqAJruFZc7GPvD23uMSPCuBGHCL68iqLF4MYxptag5XXWcQTDmgBFYPLZ8UGF8742",
  "key29": "4AaPwPqGPQEug68gxPrbWQc95Ugajd5zwFjXJWFyfhadZpHpfGD1HNXHeegErh5cWAAVzJ8YTEn6rHD9qZJL2NzZ",
  "key30": "v5MHauRyfUYj9TY5CDS6pSeugJzAvNyBuqEjPpvSBCxdYnmK7thZT9kzb7monKUNEfxvrYVh93qPth4gsqyN1or",
  "key31": "EuboFa3cU3eg7j3kFyn526p9iz2A8SL46dibW8MysptHjYhafeAo4wGiiKyjB4HJy4LPFDDGqAgGxtzJJwH7zyW",
  "key32": "4B8TkwUVaEJe1GsbrGSbv8hDfR7Wd9XpyW9fNUzdP5zLGWQVau99V6rJjKBNNPqhUZWkN48bJCJ42iiXBze4nrD1",
  "key33": "5aLJwHhEPscFz3EbTgq1iaX1R23vwFk5Crb33QHzsP5a49GhjskitWtCQr138jYvr3ZJqEdtw62bcchWfKyGRyor",
  "key34": "273XraaeLYAiQckgzkVp5FsfPmGR4ke9ADrkwK8p5sNEh89JuSHrTeBkaLc3sCbEUFXzspGMeRMieStcVipMWFQ7",
  "key35": "f1yUXiwvFPVm3AGz9jjobXAJBG88NdvGKviHkdxK2XzEqYe7QyBAV2ZkYCGccexs4F5CJZZKKBtBgBoq4hXnv1a",
  "key36": "36Zb6JBzmjC4X7dx16tFG9vU4yZqyMji85uk3ZhsXDgQx1bS8WuafNheR6hmR4pEtYJwQChuvckcbBbZDgLgUSJu",
  "key37": "4JuDreSUYVSCUUinTr6ru923N6ef7TVtUfsuX25NCu9KCWMi63ttXZERGfeeEheJkmSiR3xuYK5W38RsYQiPB6jQ",
  "key38": "2ev4QxTcZPhaNS1C4Vfw9o29GB6EcrtF3ZkNwKFm1Hsy4G99XKxoHHQ8pJ4YGUVBTdjDqNTD4hY6ff4owmfYUgPD",
  "key39": "3sVaKLQ7coz1Si2U9BTBShiGGms2fbjBS7apDKnqNmsyGe6UPuxdnptTCF1cchVwSfZY4zbUT8abDeRCkuEHFUME",
  "key40": "275PF8TEzVQYPrDExbLbRcouLye1TEieVP3cLX2yXJMortgomCBVkrXfHaK6552As7AJ7gNAJ7N5Yh4DA6VH2t1J",
  "key41": "65enMXfNcqtrQe16E5i4LcBVad8iHxBTdJy4dkV5PG4yTCSXjgEDQ86vwpZZ2SZiXGLCAvE2o6j3FBqGHaPFMNE1"
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
