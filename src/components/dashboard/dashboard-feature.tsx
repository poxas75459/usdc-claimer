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
    "j1HycBmQfi6Ne8K5AopyzKnCt2qqYtQQS6pB3sUD3GC8MfKjf6ei47zP3xmfPLTbFQGRx7qwK1jRLtGdADtvepc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTzTFaHphYYySpMxQBkEe8s8vDj666t4Lsp8YQHsWjzBtEhgVs2U7BceTQZd7N8LN4jrR2xe12fu6RLkdtx5kLg",
  "key1": "2bbzppf3hXaLWBJ1e3fgu3tnqowKourpqBqA3ysh58pSwsASQ5d9cLD7ZcyFRynUeSTpxSdqpTH6NYvQEiCeN46L",
  "key2": "vsSTKkxpkjsweji3LGLsu6B7M3HyccYSn3w9CoSqBNNMQ8ADRzShWdSAscngquSbBw775MCM4BUH6tYeQ1EpDJd",
  "key3": "4hf4mhBW6rroCDqExSMjgLHCaXD9s3JYyCaYqWVQjSjj9HMcyPPn7kJzrB98bXd9egiUCB6GBXSJ7zjrrRtvq5xC",
  "key4": "36N7usCbQsyf4qkuHq6Bt5AGp3Z1ZWyqmrMjonZpkaVrGg2LhmgpZygi44cNsLkrBkRr3rDMWVqj8yihQFntoSGJ",
  "key5": "ZqczKtWZ3kPAhk1jitXF9SR3N98x49UkNC3Xw3XayjzwSivLaxvKUacEA29Zzx4fvk76UZrMiR8Vrd9girdQc1f",
  "key6": "4sf4npWqebvCsWkZLrvJXyJoTNda2w1sV8bKGkGjHkyQBzypumhzwv172p9zbM11Nuo7DpQh7HRKXVkjNmPxnrF2",
  "key7": "64xyCso81pSVuUQELxQ1zttG3wZAP3drXW7SQVnuaZwsLLHMXrvgdhKAwxUZqL8ng2wD68ZPZNawiSr19tAZ8Ayt",
  "key8": "kM4QzC8XqNN2jdngM9eczWmRSxtBgnm55QrgVxEXp7qUGEEpi9m6ohJJcWQdyNirq57Fz2wmieVPq4PPYD7L3Y8",
  "key9": "5afmdouBdYKCwBfQVGNu5dpZoizrnLVomKVqM4yUXEX1TipVW1VEKNxanqDK7DA2dH5DUebpJnLm65PGCSvDdfUG",
  "key10": "4J9gxYrdpdCqBntiTGkB4Jchtsiy8ouqPxg92AT7BVrGVxBdjow1qxTtjae8j3xgorPbZbYR7PFQfsuwLx1yNCaF",
  "key11": "53KnZkLieNfJqu2LYa4zbb4ELUz6JEA11zuMxoDAA5dbTfLVsuutGLR65AFM2kHBjVkYZGzYGzwws9DnibgvTYhP",
  "key12": "2hdWoghxPdJe3mQbYt5jtHz47WQJ2RFqJrRzwkZcVe1RdXCeDePvXeDV8mP99WZLjXFFtnzejFbGXDXjT4chZQKG",
  "key13": "35MTJEhm7dpY4L2LMiqdb7iki3yfu4z2tSyMfwQhvwEpn27sh23tbuR8HM56VfD8F5JNMfpYxhoMhwNnNjf8QvaM",
  "key14": "5dS76Ca8jF8o1RNF3BXT6ZtR3LvFMSZRgTjDqh3owFt7PR29K9pMPHaVqJsvY1rnFFQayHL6a9b2cfEDoW49pqUn",
  "key15": "2BYgVcfBn2T6DKRtQYBSz75L5nhPh3mwdomYMBc6nqtpLdZo41yETxJQ4ENmshjvtEyRZ7EhQvrGdjdC2BZVzmXW",
  "key16": "4Nt6AzTKEHbAWHXC4REabQHxKrUCN78m65vuAKkfk5TbkLK74QSuCs5r7EkfqumzokPQjJULQbwgamLbQSf1ELwP",
  "key17": "3p7d5ELpaA5brLcmraqMR7gmRq3DGpTzhnZfCpp2W2sdosHNovFbu4jg3XL61PX8kSxjVWRUzW77Pxs2nDeNgmFK",
  "key18": "2G1j84DcjihD9fjwXAQPmAhkbuhjag2f4Y6oLSVksEfbyCuYKrw2ZVd7R1iSkzkPL9JfdmQx95g5zkhjYVh2DtJV",
  "key19": "3VXymr5R9zBVbFteLe2JNk3CqVqFYRK4DNuEcEdbsyGRQHA2PUU4hQmZyAcVF59aEiDX1m1e8MR7j6FW2UGPedzd",
  "key20": "2bpbsZwgP6b5A3j3iQj7qgCREp46yoCEL9dEJVsMsx4UquEpWVSfC8VXADudGxEcJzZVD7nk5nF7QLN488dYVeMm",
  "key21": "3pmy8rzuLct4SEnSB9WuHB3wUyRq9ndA7MNyTm947KEeKBhPpkWcG9LkXAbkjcxk1f8SXktiTgNoMjcUnMirM2Ui",
  "key22": "3bUtvEagt9BdkVqdwwRHtVsuD5oqiTF6ravjbe4ithNh3YHXvA1pkBWHYtMSr65c1PXxfCf8fHHDRERvsLGoVy5d",
  "key23": "5EYEPFSoq1Y2XfHCi1C4jZFyuBguR1i2f2rCRpfo5adXtAZAk7RFhNzLVuqvRbhHu4Zs5BreJfKDzD6mBnFmpUYL",
  "key24": "dH2hc4MkESi33QRUzRpeEJxpN3Q93sVziycBwXoBNbzSsuxaN1BqnsdbTcrbHgaAxhEbWap4VMcfJCChEEwfT5i",
  "key25": "46iMxDriuCbSqDZ2o7sKDCoUvdQFrwFeBh4yoJCaFgGQKmJPzUirrhX1nVMC3EPQuzv9Aj7MzzNWctTqfEqt7UAG",
  "key26": "CgF5NCPF4jv7cML5FZmpTo9e2BQ1YcVPAK2fcK5D2M6iBi5sbwCv7xDuErnEdmC1qMjAeiDJbVXWh5f5EyVGUTr",
  "key27": "2drUn6aF94nntTaYSJPwF3HUKr5SZTDB5qjWwEKNFf7LN739G3n74GNXxgb49wfPVCo5rQToZc8pbY5DtRZiJwT3",
  "key28": "2hHrYMDf9VTZGAJ7NN39S4WzYHwL3TCjM9TQnBACathHxFSWCs9XgpDERUvVWohYtQUEFFnsYW8gicoWKDDemtvD",
  "key29": "4yNajbZyub6YzxFR97QVPoaFU9WKJie5TCrUERPgq21B2u1orMwfAXZRXHZzveeQ5bnPFNKvKEcAa4j7fuABpZXF",
  "key30": "2vfovzYhkzWphZnRBoN8CC4SmQFN5Cm6tcCQ2WoMmtBYJqWpAvfH37cNdZKVJJd8iEPkmamVWfKjvgwCSAZwmuzU",
  "key31": "44GWHYo86dkmiHyq2M45c4ieR1dTA3jSehQcdtVLbkg5cQyb8QBGTdXvhNtszmWSvuRL2j5ntYkX8ruKabGxMguY",
  "key32": "3iZJKMJnF4UZVncbMU4iLC9Qbi1okg5AKqCvhGJKZcDJ8J1snxuorfpNGHBphovZwTcXyBWbjh9DEU5PU2cPR7uu",
  "key33": "2qpdeuJFG3fVukMW2oNdfpFGGBgd8bgYaB7vvA6QKiGoNAB6dLXNFf8X4DPFFLBdtggg9R45BowSWpiT2dCnh6cW",
  "key34": "2n2dfTJRAsVR6s5jgipHhSfaMkYvfQJbGJLdNGP4EH7NRB1tctvD8m6xrzk5hL8JvNKur93WPwi8MfsNdBTZQ5Tk",
  "key35": "65gACF67Wv5Re73ktB1emcAB95HEYSvozfGc17MUa4N8bJbSpXdfuNoSqdnDuTxi3kSXXxo52AaoukXqBBvZ9Pm",
  "key36": "32v24TEHBhPd7gc3GexmkCgfqZphoKgtRCzimKUeX4D4tK7Af4mdWSymRHGfxiYbvKZgi7ceVKU54VeVxspnWTzD",
  "key37": "WyBT6mcaBEf8e7gUJmdH3XjhnyHh4PtrvsBiTj1TvxW1rLR1iSxbkBGs3XeXUu26HRwsDTUhV2icHw8GfcXpTMy",
  "key38": "jhopJQFQjLDaqagAVqtfhg1XiNJGQzn5LpCpiPW7qAbC5a7KFFUpbyqeZCA5ctsMH9cc3NJNEV8BAp23EP42Dzy",
  "key39": "5Wx6LnPwqayaioCybjsivtQWtPJqgkjuuqwyYUBW3oJUu3VYRcF6ntDtJosT8yoMrmG4Ds82Q8wXMaMhB8BYF6Pp",
  "key40": "5LScq6BpFUEHndSbTraYgn63znPAnpGRSghnzj8nmz9afqDSh4ncTu8WzRf4MCLunwYP7nLc14rfePHzsxQe2h71",
  "key41": "5bwJjpwa4L2dQiM5iJLn3vqiZFoEgviFMFWBrBknACjhRcrnDxeAMzexJwfEFVqiGBGK6qhd2ASEWVsuVEXGJvXM",
  "key42": "26PJqKvGJbp1FDWGMMAbfy8CihCjREtNTL4N4efGWKZpeX9iNaXm5afC4DZHfEdzAcoaUGJVGVpSr6nScv3CVmRp",
  "key43": "8k8S55Zy7G8jSZ2VuXHWwqL41mmpWedHVV6iy3N2oJrATkYgwc5cYGg34sMx7EAJE5JTXw62cgmG5PagFwYi6ip",
  "key44": "2kGg8sXRTyZHEFktPvaAe6fSqkhDXhdREY3CvPFSebfnoyE1ssiZFAcBhYvJ5HHoxoa5QuNeRJay98a6mSgU7cXm",
  "key45": "5Yp36LtUJ4gnTyMGjnRG1vhetfrmkBhii1gKx6b9rP5PZzntvoApyUWCaYvzVZvr8LSXutrtH8MKAznCBF2t2PGm"
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
