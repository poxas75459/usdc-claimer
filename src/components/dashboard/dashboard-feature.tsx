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
    "28o6dcAoFFDaE133M8CuUoDqrLrFjUE5ZKtqsQVDPLcKNBaNg4sx9ukM7yBWBRMzSRUUUiTQMQc2qZtXQF1zUtq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyXLfpZMqL56TFY39k3ADXEUVJqZMCAnNXXBayg3bohoWf26ED6BHCipe5ZRRvXtsfiZ31t9TfyzGm9Qz7Awq1N",
  "key1": "41LPz871fRJ5cpzcydpWHBVBf5P44gMJzodadwx81mDUZToY8YVPxJ9hbVpneAYj6b9uzMWpQBpYQqw5HjBVZzG4",
  "key2": "3DvNgEejvVvBVNvfyHK7Kcx31dYrq8LsQbLx9XQwxyftCWSChxA4KNc7EMAjHL3QyfCy5wQSNbTL51VKzYkxxPnW",
  "key3": "5mkvzd8gkbcq1zaatHpEHVm4yVtCwLxiJsU5Rk2gKPHZkHQaTh8RWGYV3NwMw1RDfLrsaSWEoqtfBc2VgsvuwLHs",
  "key4": "5Tv6A5dYjn1WopXu6kRnnwZnExke2fTwt11zij7cS6SaShKNPzmkfA1nwHmfoDNmwoEwW1EgptCQYvH8GkbvccP",
  "key5": "h7C6oRpcNdusQUFEBmSTuDejD4f7aZZyaMi1pFKGfNafpXmjoqf5kxpDChjvMaeV7UCP8odvJtVpVXhspjJKqtk",
  "key6": "3eGfMCrLES1dj997xhWpc9DfZiQNJUjBrtVA53Sc33gPLszGiM4rnF2WshFkbWAbqmF42ms6oe9HZdmKDmvtPmFQ",
  "key7": "2QtryvSrMfSGbQtA86VKhM8oo68g5wNtTypJko7tyP3tvGqcfwbrj6aFpcXzmK5gcALuC6shnfMahp9h89ko11Gs",
  "key8": "P8HQvYv7MCa9DfPFJmr2XN8wvz8GWhq7KRgHEG7jYUVHTk9SydUzcva11izWSkiFw5iCGAsf6s93c1jT3iskcr2",
  "key9": "MJ1Zdo821Mcn5YNnWojc4p4tkkQ6CsoKDDNR91WpDwPeJvzCV21mKRPTdPX7B9Z3Ejeiu4jG5q53PKfam58gfoC",
  "key10": "3GjMKaPYLT7yTjPTH7N5JJUrgzLEkxwpyUZAYHg8MUMgFqJnZReqVz5RDXET5gJkrj7eKaRrpW94T2LUJZuDGGGG",
  "key11": "5MWHrkFMsutrg4BqxCZTPeBKEpBmEwDMzZbo8EhnyfKT1LR7vbQirNyUzhZcVWrX3UJ1RTgSTgdQKauNeYTQLauP",
  "key12": "4tacGC91owV1vBT1bCep6JRe2x9ZBp3SLnCPYdE61iRpjTuFTRzThwyy8RBg6NNin6Va1i7rkghCeCBj1AVQ8N2T",
  "key13": "5L1hE5qcKxyFYDt9oH81U4BRFbJ1w8c9HMMjAcumPpU7RQFGyxYqu482cCZshLNyAQkbAirDMNUGhH1B5qnTMHW8",
  "key14": "59khLdMTTWpcQ4UUuLzpJyCSZuKZP1ZFJBWE1inKYmHToYtkkXo21x2QijYQBawhiZPxjLgxwGN9vZnZazU34uSE",
  "key15": "5hAyn7eNsrqwcr5yHFuVLH2p81CxFmejCsKoyLGwW4pE1ng5u56Z3eSnCdwPR9AKUzkwzP1pLUBcU3qYwi7W6P4F",
  "key16": "2vyEea6VHpvcExTXvw3tCeAFAUd5Cg5Bya2Tbiioe8Cc98PHRR1AFQyWJBzR14QBxBGgacZCgV9hLgJrcVjHyZok",
  "key17": "5KuJFcSuU6JJi8uBe6ok7Asr2hnoQ2Rd7mGGDpkgSjwUmyTWisjKqDRUe16ftRjhVqF5qqS6ugu1dCNYUBfY2LoY",
  "key18": "2btGU9fGazFLxeGdvTf3HGKGEdfPDCiJmXkdPbUjRQyznjekjB6Zg1qWioTk1E1AcKdJn6aFznXx8rdZea1rnyPB",
  "key19": "28RA41sVmPkDCkwAuXt1wjogFzLSLADfuK7uibUJnPymYcMgKxpg2SSfUiweqC9HUV8TF3CPLMQWfLFaBG9Z8PHR",
  "key20": "2EGupjyV4JYd5JmeAKDeSM4L5ATDe1776iR9uvVP3RPxY9DdJ3nWCbFiC6ejhzD8i5ocqXkfetiSkSSEEr6RqXH1",
  "key21": "2Pz6b31TtFuETV79J3CbDsj13W9ZUmQV5CSiaBqVpN8xKCqWG9T7HKSFkAaxGdLJ72JFEo4szhsfXSsKFT9MtXUD",
  "key22": "5YfFjuvfuUGVX1vMrgmBkULdKKK39bsVS8h5dPRHMdF6AubhdYCwAg8V8mAQV95qjf8KgvUTXoETuN5c9nP7eqkf",
  "key23": "w5goC1nFjC1Rs6ANAhB4PpuyExa2gZDZG4gvMF5jFdSR2VMuVQvnum1hQGWiqiJgoinGJFGUvxekZ3WonL6mzW1",
  "key24": "4WMwHAH65kRymEvujG9jGSo3V5Fr6haegcGMFvH8YgGE5w2bdiYPr54a16CX8SniRwPdBDH6TWEsACtz6wijx7Ns",
  "key25": "2NtxGR49fruahvigu2pify4B4k97ztpa3wxikkphHVE8EibgUhhDxymTp9MbnMhUkgkF4FspQ9zHyomPUnLYFKA7",
  "key26": "229hS9S65Un8Qq9LGYKvqrLnbGrbDUJDKNo9G6knjhXapupvRUbi6xNW1m6ookijFGkJV8cmYxZ4kZMZKfHMSapL",
  "key27": "2f2Z9f65sMd238q2ax6TsMHq9a3vjgQGg4H2HNADBJoCxR17A9kqBkLkFXJsMMsnDaR9YfkUPUsb17rBrMU4T5sP",
  "key28": "3jQnKqRoHTg4iBsNNKxH7TzjXNfptyZH5K3W1dqixqzGcPdV6n7xc8nD37AMUUgNiAXGQLNgegzrAdZSiZc9v3No",
  "key29": "53c12csZpgYjaBkwatCoJg32LBmhsvkiHjTEUvZD9ax4DfqBPZgwVAyWqtzLuSTiSaaaMG2ry5g2X98rSKtQwhCG",
  "key30": "L3NXwMhMfJJ1kTwTzPvhPpCqyfnavuZsBH48dXhZ82cnh8eX6fy35Eoa5mQgUJCm2LVXWPt87yD4wgFRkR4AqKD",
  "key31": "2hnWegzAQsqGkGQdByh4hT9ding87fosj6HKzH9ywuRNx2R4CHUqB88EkRhFKFf4j1xEKds73ZSvmLf6mDemrpfi",
  "key32": "25wna5eEx94UJWWLtbaEUAREaQMmns3quZgxC7zARiTdU9apLutfqdxvNT6cidWQSysdjxpHggx9bK19XvkM8vQg",
  "key33": "3ZnUK6i6gZYHj4JMoaghGhdnwme9gNKNLiat26x5MTFrCK2HuG8xFCmxf6PzHXYViBi96eHYSXT39Nu6aqstWBhm",
  "key34": "2ZpaTADYWdwxS7GuJbvivbdEWkrTLUaUDhia2w7KTg7uLVNEV6wbd1B7YhzvtQ3f3srNmZQDcZoEm968XnBeZzqj",
  "key35": "2WHynpUwuE7VyJ5AEPP36mtpqwnZsKFpoyATdVW4cAeM6fekYHipF8yXuTNNDxgn43MsEbNri5NKkW7e5m9yHv9F",
  "key36": "Tvbqnc1BeYEratcYzoswV6bTWWJnuNUemhghBWBVX1F1evDjY9fzrS3i5sBJtWvDEXW7DYKpZWpL8g843noTvKx",
  "key37": "7sTresWgw9tBn5qc19WzJ5HHjqMFGLf4rQD1eCwtTLu7XNAVbk4RLAuyXBHZ28aNdHCEK6s7KJfu6oMFoRRa8hM",
  "key38": "62eDLm6cgKjnaw6Q166rG3ky3wpsUsd8TaW6EpJ8zgTCvcJsYv7SG62aA2G8DsbiEs7cH3AiFJXjKbae4ohwDzwh",
  "key39": "2BjzwwTSmkMGpzYHgPVzPGAmmyD4fyFGjLjXZ93ekzf9TUYhAoX5TXBSmygCzVEeA3kCNPhg33QB4o1huKtozpKG"
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
