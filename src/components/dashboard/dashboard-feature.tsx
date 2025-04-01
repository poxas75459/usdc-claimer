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
    "4yj1bq1TnbdF1zTHQTC35WAf46Ac8GKY2hGcDp54eAnrAMFzbKcGzpyyKLiL68HnmPDUxtPgBQUoTKeGh4V4sqqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhjipBBJicZzjH9dLzNMrDhsSSiJejnQMPrA4k2rHbCCWdDcG8rsMKAsJnUCFeR9NQ1nipCs39dvAE3aCDpxzAZ",
  "key1": "3ZoJ4vzngEjhY8C1WPBkBy66yR1zn4b5ND6W1MHgMLSmCCS9CseAV4ECsooaSLvNmAMFKNiXgdRxXZdR58e2qT1h",
  "key2": "5cB7h2t9421KDAwDfP8DfNrteWq2tHsvyK62dgvHNibH5Xxt9rHe6S5nXw5faRMTZ9WGUanKVAupfzSa1fW3cMdE",
  "key3": "2hrRY6oteTnGEqTUkjSU7wwDmWr2741qwFW5kfAsinNZmxJjKM66hKu7wSNNmB4R6cpvExdSDb4Ctqoy9q4NvZCU",
  "key4": "3pMnP2jPe7z7e6UV8kVsTW5ycSKRhAnT3ZfuuV6yWurCMXvLmjwsENCSdof4fyieUkdYVD1Efqsw1xjn51FvTU1R",
  "key5": "5z7QCPSFhuo3dCrAMtKERe4bDT2YjSxidJvvFsydydYYyb7mWKBSEHSVnm5aCjqQ3cQKNgLD3qq1VfR1REec5Sjj",
  "key6": "48ky86YwHrSDxjfogqNCRiGE9KixH3MtgZ9pbDQwjuLK9wHLxEGMVWBpUqaTGxcRFDdSuTPnnvdPvoMi8FPyqErX",
  "key7": "7T74MW5xaiM5yqBNgFevAe8etrXQC3J6uxtnWUAz75qMHgUPw2GMPXFgeqfcCPY2vZ4iW7iF962KaoF4jaqQUUL",
  "key8": "25gL6aFq1jUUJCmCpgFSsA47LJNzyqtmob1iKVWcAnqL9pSJsNdmvWRGGK7khhPdRd2mGoYa4jDvC576yuatJRW2",
  "key9": "3tNELHeGPMqWrhDm6hnfVK1XP1k1codpRouc8UZhPHbwWNsCoSiEdGuCXik8RVfz5AVb3qPSj6iciZrvmD9GNbri",
  "key10": "5CvGBAAKcdFMNGBcG2Tfq6gn7eWoQWyJQFVNzuzfvAthjxfJRDxYdyE5GH2cFQdQJAD1U2hHixcLUfZUkUXRfVCf",
  "key11": "33ciiVGqztwjC3ATD6WoVaUmGM4F36GhEBMGtNHyv2S4Qkw5pTrCXB4tv6qkzGAuqaYaUp9t2ufwT9mh5MvnGi2f",
  "key12": "5vKJJxfCPzzDiYtwcc8WPHPSaXKFY9XS8A2MyyTJekLT5oEwZnXcPzaA7gZDtUTzMRgvLsTN8iSCEvGM8234W5dS",
  "key13": "2oE3PajGiL8LpAJnpwgT8AdtyPm92xaz4U4hLDQr3AsFvy7SG85nQKEX4kAioTmwNYyvRyqoiUpXnRrWSWGrwnqZ",
  "key14": "Poa1B7j3Fij9fy4QQqLJR3LjELGuWnN6QJkGjMRiwWW1Dd87SRkSXQyDEhBLfTfsxkGSziGVAsEVKMV94tBVqSD",
  "key15": "5wGkzznuHusdeS6npagiDGcN7EayBxaNxFj5MeBmd1MCWKnPztg6xrVBYh96Kpaq6w5Q6LmytS8UmY6SjH7H1HhF",
  "key16": "2hSRF9E8s2Jj3GqiEPsCQXLNBymPXSun6cYb3CuxRSH52vQ1b51CKhdXbGWmsHPVUqqmbUxsNs8r3a7AaaRZsnoD",
  "key17": "4anE9anarPPqZdJWr1c21iAgdzYkKHta6LTKwR8uSKrRZLLHEcx3D7r4nJaFyAAzsKEwGH1JMCsM5NogRXGPY4qd",
  "key18": "pzTiJft8j59b4RMbdCVTnYd6J3mcpRUbV823rbLHE55Qd7eaoJ5rU4oXN1zqZ1tYBsPs9MEidZkDqkcyDiZtRhk",
  "key19": "3npTwqngX4mAB33Uxk5se6a1d8rNonvfR8H4boPPX7ZFXVMJXLk1YiHRYZCQqzpo3BUwxcg5e8SL5kCS2k1JSffT",
  "key20": "27wynct4iWnocDD2ATiLmbWrpvKrgXXvT9rE8QWCUyAW9ZxMkbau4QrX9MwzBwB7LFLHHibd6t3NJBGsc1MSuA1t",
  "key21": "MTcr3aA3sbbkbfUEBrmxnpJ8D4jiLNuwjQCEwoAPVbsVEkyeGi9jozJV68jqgZUohbn4r6uYCj3FokeqUxiHQgr",
  "key22": "5PQhu2agfBZ34WTia8muBNWkUc66Rp5r3aFLWeZg6K2o72DbLRm2zGgM21KcCN58wpTiWya8TQ2HMcRshe481yuf",
  "key23": "3S7U6yNeCUvx7htBNifiHoEyVmcoLKaUo4gQaXsxFwfu77udTEB821p5KCTNB9dEFVmo3BF72bq5ar2BxM3XcKLe",
  "key24": "4YmjTBz7XsS6yAJo6yMaPri4BLkmMECWeVS8Gz16c6m2MTeibyNabQKsviLR7oEzSPZfNVByXSV74LUijdz2o4Bx",
  "key25": "4DCveU4RcogN3JzgvwKCtp7NyFN6Vfjx3UQF9tbg3L335EEvxTy6U4ziZJBMGsW3qHRtrFaXbJ8bUqocJEsy9KsT"
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
