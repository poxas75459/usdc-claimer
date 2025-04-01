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
    "3bf3d7X1oonShgWHi8zWwXqPxWE4BCpbhrsTauKH9Gxk6xjKA9AL2sKt6ER7FP2kGL4twDRShxrULCLRDxNfSfHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZEc9YePVeiBV83NrBGoscLzWmt8DFsgJ14v7ux48FiUsBbcWPZpQKL4FUQ362JXasRoo1UjuKX1CJw9yFkKbob",
  "key1": "4PJkvuYjMzqboVz44Pv436KRRHCZxYFTW6bGDWxQ2qxEYCmq9MWpXVfSwQd63YFQ61FvhnP9BsW2vxtP4cvtyDxK",
  "key2": "2E6PxYnL8FXSW1PgeqZsDEz56FgTDDkvM9UJcQCoQZFYvvYQYvkMhXUG7oCRstJEE4Q6QFRMTQTsgSqo3Lst1c1Z",
  "key3": "QBtgvL15D8ebVouJKBYa9N5nN53mVCBvQyxgUhDTaVMmHws8iAf9tFUfzVFHFQSWjUJ7QpXSA8MEw89c75ffqas",
  "key4": "517wMVWcqbxGLgrsW2GPQj44cCi6ewH9Kg519wh8Yxxfv1w5XyaqjSV3U52hD4rUzrQJZPfsG7YR38XGH7U1ZJY2",
  "key5": "3wocQgCpaLWN1h2oNtbBa2LiUdJ9mJDiPQiWiJum5TCRVgkFUC241jknM7NVZMUKDKBSaKVB7WeXmwWLLeazi8px",
  "key6": "3vwFPhZ8wq2bcgEtSgwGwYY1ZDULhFJKwiS7sk97Fxf3Ct2ikKKnSWdn4CM9hFtXX6edjLZdr86LGccfFWYmBpWe",
  "key7": "5JJ7gh7kquuzJopwVTGfLuoP2qXDpXxzN7iuAcrsbk6e4jNuRty7mUCZrMfxLQvBVvs3GGpkcbd2joFame8Vm1Xw",
  "key8": "3R4LEyLwQkb1MHBtHdHh2FMvMCxTp6nMBqQmaZhR4cQBX1Y69xq7kz2zXZoEdKWGkWPK8MebwHBv92yvyrkEpLNM",
  "key9": "5SJwUNgjdDCePNXEvwqHdgMip8JxJgs5VbLQU76tjqVeHNpKvUpDNnLwATXK2oZHRSbsiANKbefk3HHSkTPAnxpT",
  "key10": "3NVZv9Y4JLKYQazJc5P93mwpfZNsf6AsiZEwDN1b3bnmUn8m7djLGCC21DvaMjEyHQiqaGeJ3y354vxRVjCLk4Em",
  "key11": "3HJiaQcELozCCWJts79qoWJAznd5oE1nU8dM28x3o7Ky2ZV28WGUzbwEStvn3TfeW44NZaRKT8JQAHiZHn4FntoY",
  "key12": "4oCTUwhz1xBnLyenNEY5YuRbvPsyUSdD5ARMa4mAFo4JWNmtcdmojjce8jj6wDjbtnrf6sr2iyNCWwrrW8PyyuTS",
  "key13": "B8sGxAT1Xber5jsPgSuV2swa9ZDHH8FvzxrXMw9284GdFxf5u7xFiABSvtspV4LdtbB5yYbAVxNE2ADcq74tE9C",
  "key14": "3STbjqA4odLH5o33JKGDWn8GJATG4hA9m38SGZj1m5suhqAMMjZSdKtUhfwWAt4JfoGmQ7f6QqJvusnqYPU7MTay",
  "key15": "5sS3m8VsHnZ3tnLQ1mjzsH53Gp9vyTkF5CmVyTo8K4LRvxG4vPBdDijpagmzmPzvEa2droGSZhypAsiA56vrhrks",
  "key16": "64fuZXg6PWBPMMNhZbEWrfGqhEkbBXkbSMrruTM3cEUHPSPGsV8m7BygqbRdwMn95sWqzmFHYJm6gjoSV2omjpRs",
  "key17": "DBWU5cWn8n7GfjkyAMpNGF4RkVZdGAUPVJtJBeP4CfcoGbCoWma2eqCnv6AEdB8Zv3FJVK3ke9qP7wHBsWwrhbN",
  "key18": "4B3d4KvRqJjnAKWJbu6cK9pLkjq3b9Fk9TEhgD2NVso5HzceyM4gkK8GnaYD2u4j5Muxo6qTtP5Rn1ocdJtAGS1v",
  "key19": "4v4PYUeT3ZWcjGcfETunc5fgM8QkUyw2ZnTMZvqPpqTaNZ2hxx663PStsXQ9v7TWaSdCwm6YGRPHwbdjCAYQ5dAA",
  "key20": "2vWY6292KuPn2M4udVfdjgEDx845qfcHbZpz5wCgj5LiTbTJnrcgC5tuSj2Fcq9xgJjLzZJ4JqEVYpUdFb5y2GFT",
  "key21": "3MJbJV2XJew9MtsSABUN4sfvoNLSP1UFfpNU74t7TBypTMWCuTCrh8ERqA95fAAuMdhjKD1SqLVeiMr6oiPQ4EBA",
  "key22": "3P5Dtjbnd6AJ6SjBMNdyPXsf1KnCBRZUFa7Qazqs8LJmqDxqBCwspmsMPUfcNmiCX5vBvQYsQdRHEUNUyjJHN8Zi",
  "key23": "53im6cRa1aqN1gmr2rDzx9MZzHKPezuwXaW3sB9g3Kqi1mAFZ97ztGQygTuqt3HuQA5ZGkCKCwkvUErEEEFwRMMj",
  "key24": "4QyqLSF7aB3K8B7QS3WXB6tzAhfryAk7u794mcoHx723BxbtV9hYcnCexVuZVGzr7h6eFTZL5j9e5sWsdo2vKPC",
  "key25": "3fh2XeCmKrFcWQX2R2YtF2fynzb2hNLVoWxpvK6Jo8g8dpjgHhTbCy7Qpsa7a3DfyTUz4SoG4pHf4MfhRjKLeKwn",
  "key26": "3p9yUDQxMVhpKYFM6JbBYQWvCtHrmHRxPPsJ8VyLjxhTBqwNmFWEFFe7ghdLqfNHhNPkuNGBVydJvLJ7buh3jMs5",
  "key27": "4jk3hFUYRdC5nHgLGSej14mGHj2nzumxgd9hLbTtsBowNL6mXdk8WSReaspAVfNMeKXTYb3eofprjE3bnLq2yAME",
  "key28": "S59ZYPhrgSuoGrGaq6Cu1AJBUpVuP8qaQeEghj88fvTMNvuVrDTLw9GrzmiukeFwaBMvE7AdmKUTQATattMj5Cr",
  "key29": "3SD2FDfs3MNJcg7VaX9cMpAudw5vPeJ68zWHobALmjcUVyaDwrsBKy8nyXEea1qXu3KmoybuFKJt7g1Qf3c44FHk",
  "key30": "4b61jXm3ZiQnTm71wPLvycqxgRfZYXdpdY5dFgdWKBYZdLz5m8nzgBkTSpHBTY9TZ7GgFxE86gNENdHyuRRpRPYB",
  "key31": "87mX6KYchBUz8Uj7fLnVLfKERdM68QMEFtxT7wEJV8iQrx7tSLbKkiNKj6EHM6qPUdrEq4Ee8Vk39kWmvb5RugM",
  "key32": "4TVZg8czi5VPTDarKQkeJQQDKdMpHfSJ8BrSc2VqvUjqZRb68Ec9ZKzo92YY4L6b52ES8pYjwY5Ttfk5pYeQFmZa"
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
