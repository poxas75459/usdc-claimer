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
    "UtccZeHvPeufgfnyW6BKtK7ZEQd8Fi5zMSPU7ZEjQNRN5JuwLnpZ4VN8fFgCEsCrKnuDMWSTx8iuTdBghfXbMaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2Zusv1DXAmcCgcWVQPXHmhUsLTjruzirS5HRBcpYQpgq9w2x8GndqhgkPQyqcfR9Tho9n5yA6wuAS2TkVL4EwM",
  "key1": "4ZDA34Fm8fnxUgN2qgmrB3VBFmjKpvjbnWRZm9PsqTH6oXnRWD1Bi46nHitPdb52dJbBDtaUHeSxc6eNixiWJGm5",
  "key2": "3udU8X7mbqFUFgAuR54doM67kP2WHoqNnZ54FtYNR6ocQe1xLSuUkeG2cRM6fj62BbbMYtu9fEmKB72ERTubVF6A",
  "key3": "yWy6s6w41VEm74knZtfq7LAh4q59iuxP2pqpecNfH9BWg8UPE9tmGYVnHJHnGnApDyFaYksavW2vjcU5BYcP7TV",
  "key4": "2Vf7VRcPZJQ7dAKJFmCrSv1xycb54YjxGuVqyRuebF1sYbD4Ntzh53VCmpo1jE9jw3yuobSFvLaUaNKLzbokMaSH",
  "key5": "2SsQbo5ZdXFLbQegXNRy8fciZLR67Pb8NFtzWjh3a9QKjPPT2W51ZtsZPutHz8VLu2WQdDnb7iYDuRH2XScjKUQu",
  "key6": "2C5NGiHRY7Me8B4YrfqATcLefqYBRvKLwjVb9A4hPqjLHgD7XxwDr3iMLEpoRS6QGKT9KQxVcrQdb9KQzzGWdq3a",
  "key7": "3yWXD2ZoJqdTfkRCRBP594B4wDFXnEph4xxSZj9ALhfxb1FKSEMzwW2gtFbNU8kdRctHSbZnTpQ8Gfx6kvJpAomV",
  "key8": "42mxsx9pJUUd5U5tD1eKwyQLS2km4QvzsqkjfXK3fagoVHiJH6HmxuHvtzTtKXoZZEiL4J6HfQbA7nkrnZbcVpXG",
  "key9": "2wBi8JUia6qwnda1JPxpsaeR3Lg559sQyBPifAr6kYhhqrUCnNGXNPX4ySZo5K7F8ZtKtKcir66fW58kR7jK6Wz3",
  "key10": "5aEB2Y9T8p6imp7NRi3ph8Pe9C7FDfhpwhncXBps3XKbGar7m2ARnd74Aw22KHToGVyVFLA6en6zt5Jg4cS6ymzV",
  "key11": "5vrHL3g49i5xvzGYcrmZr7vvwxC9nsLE2bqmhEeofbCuKMybE6LTnuhAaGMYZoVQD7Kdv1RPzFBvx5SgDbwdJszA",
  "key12": "4ctmP7qx2wGHYZqfaWWYHm5TYvGQpuXCvFL8gD2useV7LoFDqG5EU8snzoCUnsN4dEJYZXa3eSaAjjAqPGBHjr4N",
  "key13": "mTQtRDig2RvjGvR2NNzadaGsc65vUh6uSTvnud2WP9a2H8B86rjMKpEkazPhFpijixHWGryhQov9sr1U46GqKzd",
  "key14": "3YDkgKyvzujbaHH9qidSMz4BURDnZSvsZYq5vDvVdi52UsfbHivy3BXBrZnjzpyniq2RcXvJZm5sv6s8MNWcvxHq",
  "key15": "3vnD833SYGquLecpRNDU96Lu5SUHL1fZC31p9Vt6DyHkA7yKsky7Ae1aubPHVUWRDAxzamHmfmv3Tq9sXNozM63x",
  "key16": "5gfs6TyBZpKJ9rg7RkXaaVNPbSkgpzfLbvavZJdDqVT62GYTWDLPw6icTGfdhyufEtvE8K8U77GS9zGFEDjJ33T4",
  "key17": "4Yx2s6VnTTEByruzXYZkQYwJURcBdkpBhZbpjfCmMgJbXB6kzVjehQ1vdbGoJZDb5mVPfnHxEX2x2Hj4dcj9ETVd",
  "key18": "29zKgEvYjvZkzb6vPwrM5qNCKyQMfjCvMSnjy5DGFSBDiCWtNy8QgXGUQoKnVA3rgzwGy5De2hmC9cBn9zvYv95b",
  "key19": "56MNXgA4enbibNb5AVp4ZoxJFo9QchnE26y3FjwVy38A31BNs5qosWtP1NNNDLNxXebaii5DehYwJbzKn2cGhmib",
  "key20": "5qRdYbmnpVX9wxhy9mUBeKqxHBTKp1KYS3ZecL8nAq92EYgya91nxzPZP3eqxPgszHw2VDU3BS3edhpoRKwVbkqf",
  "key21": "5YPHfXzYTSj3YbjsZgFkdeCTpbqCdquhMRqmz3v5uF7KtDVPGgY8BQT7XZxnbHVTd3FNYad4v7MEHyuLFZ2J36F8",
  "key22": "4cnBmXgKNSmFCM4kLcx2qA7QD4aH1RkE2v2R4b7V4W7xVQ4kZTJoptupeUugQrSzkkRWEfaxNAfFRs2TxSG2Eakp",
  "key23": "45iQnByBYRn8wj66bdDDnmSHvt98NV5jQ7RTrEL8yPeahPnVXSbwTmLRwq8pqo6LbmLbV9xfNJ3JVQmepBKep8JW",
  "key24": "3ChK17z651Yoeu6JXHYUc95LPHYNnn7fX8gDfUzMGsApbeSY5USrUGfhcSK1We8GThC3AMH8CcjJRuAGgBj7mnno",
  "key25": "5w7qdQPrm57PUGxq5gkgfiMYcVwuQvY9FsF1toT6J65Eafhg22Hcip3cxkJrWUvqacUgneRjz7X3aps86gDfH5pi",
  "key26": "3D8TcTwMqUspLKJYeD56y9faw7a7ZWYRQf4z6ZaDrRPCfDTvJgXEZ9saqAZjbRVNKUkrgMuWtCAmzbW7rWUNhByb",
  "key27": "p3kE7LEi9J9t7BxADHyUb5MQZtWCqh8SjE7eJQGpcwBRAgZApZut6KqMYS8gvQMovqB6nXfuAhDQpZmEpyP6rr4",
  "key28": "5VQq1RC1yYe91CnBCoMW2iiRHA8fahx7L48aghMVVZ8ZJ9srrg6oFH77HE78Rb8eBt7i3Rh1E5vXgxxDXiNvQXiK",
  "key29": "Brrba6tfQ7M9954os1e3FML9NSTJCJHQUj4unyTYBSXWkGudLNc9ZoiyM8gPABcidZa4hccctfpGesrrzF4o3yQ",
  "key30": "3HYJCCTPojuPNf32LHBvNt3aqGQq4M9afCkubm4MtU5F7oRSVn3nVYvjNJx4txJqiWVbzRjSzZVWK6Z18gRpSqQa",
  "key31": "8PNPh8ApPnmL6tNiS6Lz8fQE8EcbrB2i53tyPHZLRksnCRoz2GD4vqTdUK8TMbARj263o2hJXNKQGZbTRdosmz9",
  "key32": "35vQaE3Dcwng399P49MC88sK9ejdYSpR7UsBAJxsUjXYoAsmp9QJrENWu3Pfx92sH5tRT8c8AWK4arKQmoDkybJz",
  "key33": "4ThDsS3sd6ZSugpCqz3RhWNMVqWqoMsdZ5Bn9qU4bvkuXfmwJNYcbCZttJorPgw6jd1FX4na3wMMgRVnwGSYpauj",
  "key34": "WEamGDbdZSs8Sud3mMHqCEyEH8XaQbLCwaz42RjPW8nNpwATPQvmhHgKSSexzGjzs5cLKXwSXQeyfTBoWRDR3He",
  "key35": "33qFPjU3ewU6fmhvrmTcrRPnkfPjHdpMyE3NBXWfDTEyZWduv9hzgaD7DEzXgMPJQphGrCtUu8nmFenYvFNkFNwW",
  "key36": "2c1mcZAzSMcxojaaCag8rtDvyxeBJwqK14CPRwbV4NdFrbu1yTyJj5LMpiF76ZjmpnhNcAkyJZK7oN4tWMp16jp4",
  "key37": "3UfAtYLvELRhBjJdiWHStYa15wMksTfbV8TD3cubGy3Cyx7aJFEqM9qBLKu4VyAF3XqUas98WBffJ45JPc867e6m",
  "key38": "wMmA12iNajqF2AVZmvLugcyRBmnxayCGwrhGVSF7pHr8oqXR7EppVuATpDLExp3DFiQpwMGJg1t3SLLcticKMn1",
  "key39": "5hotg8t2uqpYmbL2QV1TZpmi1ngamkcxKZFKxdvrLM19fvkB9HFLDy4aABEnmbfJzHv7dRGEuN8oH4rP3BTWJ7bZ",
  "key40": "sv69HuPawBtLUbkXXp6LnEM3UzdBoHKUsVy1qu9aTMijbmbGD1BwjarJNTQaWwviG19e9PSQshMWMH2fWFNAMqn",
  "key41": "2E4NBvD9U9Dz7VMTsSC9uTwd8XjrQAdUNqTfik4a3mHWL9ws37bG2tdBkqi1mg3J5YLTBT16Kceyh13H4yaGCHvZ"
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
