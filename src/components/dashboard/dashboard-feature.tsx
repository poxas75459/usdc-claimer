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
    "vgkSMgW7T44S2gRFS226c7ZU5gqL7YHebJWbtpJ5DbZSSi4gJdrRn5Le1k4pBfYrJXC9KkwN1KANVhYdegVRDvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVgLUxa7Nz4bc8jR2w3AQL8g4QNmog8YBuj3uUotDjqhhz1o8D48yw3GkyS6qmuLfpjLM5cqsvS1znsvtZfz18y",
  "key1": "PLeqkDKhy1VXWcWybguaDQBeAuB8PyU1q8Uyp1jMRXiH7MzucshtG4p46KYBbLy8r8dkEWkabTwXTFa445B93Zx",
  "key2": "3dWJ8sukgkJEcqCRVYazSKG367h8NBiWHaFqYqPgKWWtDp9AWQYuuTeUvG5nLCkJBw3pvudpYyRGkC4bShqrS8EF",
  "key3": "5ib87Gji7P29SvRkMnBS26BzX1sDhz4Y4BDciB3FJ7fyCASYBcw9Jrf4BGY9nmbYM5tGoQ8dfRte1woWtryJM5Eo",
  "key4": "2bonfNfUVFyTbibR5YnNFAFRX89Fj2RxLFi3bddTqC2YkRner67Jh7YeDuLgVw1pgom56dFbvb25KjJS34Uqd6sg",
  "key5": "2H6JmK8EesyGK1dh9bYDFqM2MhWTqAit3MbXX7imCrDt1kXKk1ZwPuQgaMDiErdW2HWvukFNZsV2fL3QAxUbS6YD",
  "key6": "2HaVW28v2Utxw5NY2fChDQd94Tw7aj7qkSbhnbnu2j6zJQq7SnpD8opKXXqLjhcHC5h4hFsey87v2dmHNabM1mPB",
  "key7": "3LM213j8UYeTshmAvB3y8kv8DnifUwFcn7jSKJmRgcAfkU6xPzXQ8GxbMH9LQopNYWNRBEyYNFNbyefh3wse4Qec",
  "key8": "4QXfjPivc37GBFbA2eqYj3p5535PwS3om5A3jkx6dKnHPK5atCE2nedWb7TyKVqq3Vdvihw35BmvKDAkUbb6oL8o",
  "key9": "o59byuhdKRv4DgTQ893MkGaTEX1Eu7BKgpZtFqtEKfE3jxkxvgyygThU2k2va8m3pMz2UWdBB4yxXLqNefLagtB",
  "key10": "3PZMP76LvYBV7rzqQbRNVSLgtjY9ncL1pizwS4xmSNuvyY6AUCEdg1HSxFXFenuvvfAaDpxd75ywzCA48RjGxc3",
  "key11": "3Es2bonDakRJFLZCcrtn9Q5FxTetZzWadN5Re14kyfdvyHMuLx9Bmi6fEZNkAcLdBovjgmvWyk2dWkJV3SzzN61E",
  "key12": "3H2M8WCZTzD7J6QiqPdN89zBayZmnxWHWd9cConG4BudRVm5Mbnbj2XP1GpiFjYsVB2b5QYSWJKucFrz7rbba3DH",
  "key13": "54psiHybjf49UfgPUv2PMYkxtTAKs2V7zsfHBYUv7nkJR1HxunusPK9ntnysvkKBRKDNuvfFrFEpBMuhsqYrRup5",
  "key14": "5qdYg6GSrmL9hJSNx3ZdTLhQAebvsmg5jyxFJb7LLYfDMJDEMneKnNNQBkdvd7FtSjbBFYtdU79pJ5ECrvAB5Cvs",
  "key15": "2QopAr7U88YEXMuuDWFNU5g2TYVc8xmKTs7tXj26RV7WPvoDdixCex85SELBLvb8rNCcgSu7HTDiPJywTJypkUp6",
  "key16": "2qj3r6bXJa7BE99a1BY8pWGv2R2Zbpm9TUs7jFGHF2Q4bMuQmEw4DerPxtJpHUj9a6sPnJ8MoZfw6wksq9sd5fGS",
  "key17": "YZkpc9GJBDo1hWkv43CvSJGzrfb13ZyVarDGdCNuoCcc4Bx2azZJT8NVUaE52H9Nxwsc6pZsDKbUS5yJdzhpxW9",
  "key18": "3677dtpFjQTvQHAqRjK2c4zcWb4sibgccFFyFDNprRMFMFz1nvz8uUMdRho1G1hMkfERX1mAMQHn7Zkep2k4Sfb4",
  "key19": "5iyaW7EmxARMw7WcVDPK3ghUhvkWxGYvmzLDLpCtehK2CCXLjk2StXBmKVy2PfiAi6J49WNAVJmcDNaQb3zb9csD",
  "key20": "4UoMEiMttQHWFfvqDFVyUKb8cRP52BxH8SWYYwpXpU3QLVe7hkLRNAcFE5GEv47kLXZMXQ4brfPzcmzUghTJtMGe",
  "key21": "3RRSWPEAXAtJ3PNj83Df6wYTeGkZgGiJjXYe8vW2FdLcVFoT4HoAodPLtd7j1n4KAfhzQRHdKRDEqdmZ2GkCCHMU",
  "key22": "4nK4W8xmMATRyL9rvYefdsNgQNqkCQmgyWhv76U6CgtMQrFeJBH7nU4QTfAm159qvY88a52yiYQ9D7av6X27UH3Y",
  "key23": "2H6jQgATXuxAsY1FXP9GDzAKKPEh2DZpKKjG6Y9LZyFXHJ5iRB9hyJ47KywQZWuMyGMoGsFUcepeA7omUFfFEX5b",
  "key24": "5njVqRd6PR9W4ucHDu5NiNhF3aAQJ9o73vNbFsgFr3k446PDBPZELtdpQKeRKjo5HoeqsAwM2Ad9vZiJdcVudsZg",
  "key25": "2Maks8bXw9gVnrtoYE4S62a4hFyBU3DhKeQnfBCon3AKfZ1fMZRjhXTqTSzzrx2nmiJTQBeCDqZRxAszn67p7tqN",
  "key26": "HiBRLLhfeb7VfoEfcR6PcJpD2VC5x4MAei2JsNXhDKxuAa57XEyUXfErefNA2YAaGbdxmcuj8wqXX2NNaL6PWJm",
  "key27": "4Et7iNn2FxPhNaSdQcCE1yCVZPomSyfZtJ5jQpms1ekHn6jixEMCB6XE6SUFryyLqCtYr1H4pwpLwXoYQ6L6wttN",
  "key28": "5RXBDuLNMDNNRxxbF1YVSHiES5PyPz6nUTcWizL9k3PawSHHPX6LbtVNziPEXZKCB8s1MpY8YCZAYg2bxJDPLcAq",
  "key29": "3k6twqxuwbGpztUuAsTzzALiSsRGdkecG9DuN6pR4Y9eyQ42zJGRVDhxZRP6KzATK5hXXtGz5dgPxfSgXP5mddZ2",
  "key30": "125iQ2Ut6k4TXLQGszWRWgdGNp5aQDaxcBTxHygqSAYfypARXewyjTNmnBfRBrDhBTZGudGXZRsMCTVHUJBg9tPf",
  "key31": "3Wh4Q27yHCPqjGcCYaHcZwqC32vrFF1izXhSaguhFo8TS8ikMWbcGmB1B7ujn7rgtVum94QovtJHC4P3scGgEM65",
  "key32": "33qZRCaq8nQLmUmTYy37WnGqpF19cpSv3yFjFavHLgRjiAevocyZKFNhfHoBpS6KRnxSJnT1XVRA1UKLtCGiyvMC",
  "key33": "3YpfNSYpQV7qroGSwRGjfoq27gEkC5CPJLCvz729mmxzuod4rN3ew89Y53NUsdUqRa5Wo5ZrQMstetbnnc69hunL",
  "key34": "3MNnhWVtR2MesYMQz3VnHrESspWNgrAQ3XrTrRbcerK3gKaKVVW3QEGPmUV4BWeiuL4MpTZ3ZqhJeuJVoSGJvevo",
  "key35": "5mzkcHw1RofoiKqAmNgXTqNC71h5U4ojEcY62tKBexGxkQhx6yfhXAKVh62pu7kgvicrCxtGjb4f2cTotTitrgXH",
  "key36": "2Kjv3sGuvxWtS3n2BS7rLpfxzPLiS2zkZ3KHJdq5LyY52ZzbbeJYuaNMmzCWhyQtksvN2geMU3hTQS7pWAC8rnAa"
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
