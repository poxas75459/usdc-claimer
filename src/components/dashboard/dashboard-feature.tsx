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
    "5Ukf8kDfkay8tm9iSsfw2iZKkjkis8iRss3ffLWj6zDFCooyVuEkbY6pbSkCwT6WzjZ3eWiw9NvGbaaLpPAW8KZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pa1w3xxSDC7cmj8J4H3c2t5inTs3cknzNmNutCS9ma23AzFJdaz6q7HPmrTFJgEiGNbAoyF23CQsqjVY9bnSwVk",
  "key1": "5Rsyh32cuY7GjJQZXJHw1qQipHqjAGT33iMFSBnHrZvxbjTsJuGRFWsuTQadLfxj3dyTeRkGJEh3tAY3scADz8YL",
  "key2": "2sBWawau5apcuu8YtyLKZmJzeTSTaYZo19HKmQJRsXSxFm52dgQsTJWwvkPCCjhb36YxJLtr8Wdbku3YBHHUpojw",
  "key3": "3BKMT4uNnG9BZDTZm4WTn5Z62h2ehQwzNbkDbHuERLFZND3sWUqctNfxcAbJ7nbqmMzG5Qgy8ii2VqtEmrox6iTa",
  "key4": "2vVQ4aJLqHHyGMoudYPPkJgqciGU7wF67SUXyK94xzvCCzLEp4cCTdnAGQPwAcL5XCvstbbQot1LREVQ1XHTv2ak",
  "key5": "5BqwRRBV6kePKgnXnomhC3f5NrGLGHyceuMgNEmiQ7yV82fruczHRcNLVqtBSL8NAQuQj692XQnS7P6zDw1XR6TD",
  "key6": "5pHKtaKBhm6K4t3XLTj58T4psvwqWsnUmfk1nVWwpBjUXeDzuhzod8YW4RJqh72kBwbtdYLdjZuhzEmTZvKF6xgb",
  "key7": "59ptVe6tLov2yaoYQWZ8kFnAw59JvURSK9t6jbPEp8ZLv5wcuh9tjuodQebTmLK5ZHQ5aesijUx8VqzqjuzbravU",
  "key8": "3fCpzTAgDvFrUvwYSzFhvWJTLpBf9y2Qudz8erPyhKz7F7QEWbT3ciTaZthbadgvhidhfC1W8nPiuWTyxtbvbHCe",
  "key9": "67ejcpPZPN3AEnfz64f5yUUByP9VhCqmC1G5pzQ4q6W2L9FZVYunsuE8UjwrCKp8uG7W8r3S9ZXTL4QYQBi2egAB",
  "key10": "2h5FNMe4Aokwkbot51GbeN7SwUUpJRoXv3kTQDZdiZ4XUBBABLJNUAM5xZyFo1tLMuqi6YR3aRKguPRxUB4jASWr",
  "key11": "3irnQ9uAgaRyiWEJxhYika2BBF9HE9bFHZVfEvjMNrg5dSV55hAAomUqk1MTJaUGToxKCN7SZgdKKxiNhzDqnGiP",
  "key12": "66Q8crN9RRMsSujbuUEWAjLs5SLurCCG6KFKMCfwjgiwhDt7P5YEKu4Sse8Yue5QVcTiM9M7URAtFiTgTp1racSY",
  "key13": "2T95e297iU7GX3dtGQqvy46ug5XX6ADzd3X45fYW7gQ2ePGtkER58xbKPprdgnoZhvjxgmJgPg5XAJ1d2KJN9kQW",
  "key14": "57QSCrHsPDKHvxgiyZ1oKFgxQsZa4ZJ9PTwx6p3Hnqb1rsuacu1SieyrciKpDi93jkNWoxWoWui9d6gzzSHBgdYd",
  "key15": "x2Bf1RdsjgHFYeEHJkmAfsELYo3DUmeGmtMdEwfzdHDB9Q4hfonPb5wVHDf5zFTJVPiYtXX7UWwiGzqv1oCpdqS",
  "key16": "2RHmwHDKNS8RQaYdMXaFBuNDtPBSddBR6dKyXsJFJ4cdy7WLz2RJssAjnDPHaxfynSQqQPBaF6ULdwfbxonpZTVo",
  "key17": "3zrH91Pz1W3krGod3wYgbWGXHvKJ5MK1YY2zcssbSzQTp4LiqHrsVL5DC2ueVoUpGG9wvXGbBrqmnLB1eZjkQJCe",
  "key18": "3BbBbvb4urcZaxKMXsMWeYdRMYzDRUc3gpKNpGGB2UDsbg5CYoX2iS17W82LQaUv2NKQ14KA8zXnjHAj2Z6w8u9x",
  "key19": "4czVUE4Sm4BNsmiBozd6bZE2VoZVAJQ8AvVy7v6rEL99bjDot3jS3BKVu3GPQAvRPYfHaYKVSwBhpQFsr9zgTaye",
  "key20": "5LJmMdwUhMzdcza8fD6yd2Ao7vk9ufFXiHfyo9U4XPB8bxXo5ExfrsWchaRsFUmsz9Z3u51Z8M1MiuRrjiReibma",
  "key21": "shkehaFSAjmDWK8W1CVt8WkszytE7EsKrLh8YyQzuqYctHhkGPdZUKVRLK2KwDgvEPHKcanvLvHVmRi5sdbcA4Q",
  "key22": "5RqbyoEUE8AH6WENrWhS5PuitPjBqxVbQLmWxpA6c1SJqnQbezWKMdanZE3cdib75YQJezELhg8WqZrSN2TwTaeQ",
  "key23": "3ymV3AZmBTHKujJxv9eLTwMyF19zoEGSvkFJ8M4Vgiqta495LR353PrqPuGtWfCF6CGSKQX4rsQCLTPNE1N2ddF7",
  "key24": "63DZq2FC7mn1oNpioy4WtT7JkbhJAeL1EUnwHxJFbJvpLfyxvB2CktGHuewwxq9MTDRLJksDr2bhJxc5Rn49QtGS",
  "key25": "4RYhnBSzQeCMjSWzb7BmvutKoDSLPvxsHmV2y9f6FP58tpqLssyoFWmHGy32pMRLcziAev8CtsZdb6ULNss1xSLF",
  "key26": "3z5y2vEHBamfrpAVfPWuWnN1uE63oMW1Tzs12FERA5uFAV5JihzHixN96GZwv1ppUY6JyfyXZ8wjLV7CM9h9ghju",
  "key27": "5v9wBtV8ySWMifcyaaWxDHNYvR11bACXMiUrN8bhT2wNeh7X4z3CAeCT5abyYR5TmUpNqJLa86fczhUGwyFhumES",
  "key28": "4H46fDkv2ifousL3tuagr8QaBBydfEPmffeZx5ahf6i37MEVvNa9afCrSJ87dgRm3MyASKe4iiAf1qGA9ao9GZoJ",
  "key29": "5Xwo4RyStSsoq65jTFgWKE1Mfo5VqS3QvnQx6ua2sCCu78pEG8aXyQt5YgQwBQYPfwyFaEb8nnoA2ZuC7GiNnQMY",
  "key30": "T7idgkvsHWPvidtK9ZxPZrWrceua91KZpfqqu19GGn52AcrV4dUgf8q8rNAK4bKs8nBbJW9vfEeUC1q1q5Cm9Hx",
  "key31": "4raWsyPEy6ZQcDeWEp14BA2DMdBg7JzbXiF1uG7QfBUBksR3KoRDfvBN72jYPBA45AWjghavE9BAM6UuVQuoRtVh",
  "key32": "2p7iR9RqBeFachYww9tk9wch9RtxRgMwDu3WSqzGLYQ9CTbxcnrjdL6eQFJojTVt79sL3GwbByTErRHTZZrMENoU",
  "key33": "4CXQDPRnp4vMuCzB1ZkCGJWJjPCSHJrvTEJ5GAhvqLsA7PBkKHJEGkVyyZoYxr8V9cmd6NoD4LCLGp9der1c22rg",
  "key34": "5yUPGgcs2aDo1Hq8SFu8Ti1bnWh2XBDc2j2JSw2K8H152dFc2U2rV7fozQMS4L4WjtXSxQJbRYoEdnUwXwAXK57P",
  "key35": "LovPLmQiJkXAfk1uQzaeDTocVoLjJJ77gbJNBsoNgJTKSyEyPPpbi1xQyT59zQ5mjNtpoRJQsQiFDkwJAWECCqq",
  "key36": "2Jm2T8jzGyRAGCxu75Td8jpRhs7DSVmgjb76FDUeY6i7EseeetHaqM1YHHAhuokbkkZXyReyUwUQZDo7TwhC4wqB",
  "key37": "DJeBqMhcQFiUi9BaD23ExDzvsyehUq2QjvsUCyZcVaoEmEUVd13ZRJZCij1A5S2ZZKFNtaw4G64e4Hw6uk9wLS7",
  "key38": "3H3RM2QquaTvKwoT41bxBKng2zcEYEey8i77QSqAvaxAzRR6FwEeYmMiBovwLGYS3auVhJ1UGueFBKwN8chvWmBj",
  "key39": "2Q8MhTx3Wmukd5v8c8Mn7egFxXLEMMvr3gRSG9dc59hbp8TCzcqFXVPVokAQMuPA4BH2NjBKvY821YNMcJxLAFpt",
  "key40": "4jS7qLUaqxVSH1kuS4YgNNun4dkWkWzhNZYBcr4Mc6xzRNrPrSf7msWp4vhRbaRweVMk77bHkBHaRkVbbJeQabmo"
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
