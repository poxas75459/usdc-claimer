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
    "3tnn7vvWibJZnzfC65SCcxGMYcuLpq6Ci1mLKi8p2YiwkmjDazDqeVXvWU3qp1S6hgnn6TTPYuNYN2mbmKYS1zAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LbD6uywbhdrzA68xYpshuW528E86eN4jGqQhXbZG4S93pxdt1WqFnbcfQrHGtrN6MKAfVJwZMYv7CvpaoYWd8d",
  "key1": "2KZ9RWzcMVAWdturWDdMQav4smexAfwW6aZUbaCBFswDv7TmPyHHiyNtaQbsZ5j68aKLd3kqWTjSndfP1WZVKGKZ",
  "key2": "4YujN94VGfsXsG4SWxnXFngV7NJV3iK22zEafGEjLMhFHpEZdyYekt6zYLEwp9TXpNvTerDoc4VENEyh5FQK5xPC",
  "key3": "66RMkKdsNLLhX6oFbMBD52L4iPFZipo2ffFiUPK2iT88uhkYtdsLuFGibfa4ii39aTJjBRiaiksA8RYAYL7QHUej",
  "key4": "5Pu5pkNNPKgK9i3qNojPzkgxMrfeXawprwN3wLvjPobHgsKfoFnTnDJtoPG6kvL2FBurdraKnKqPyE4vcf8vqzCp",
  "key5": "25nwWTUXkyM2FdkD6ntoNySbemp64ZRmjuEDT4qoAPwK9PPoJfCYrRoHHXZUDD4SES5TCdPDvvHKt1pqHcFtU743",
  "key6": "27jtcXMA6gipsNKf1LngXFFyVGTZS2WfkkJxS9yrCzwgyUz9zLYz7JoRqRDDdfT3dR1zufnYJdQGdwLZTXYDPbMr",
  "key7": "32a6J7Uwh1AY68qCYB1LqJ9FLKsA7fU9faXG34dch8LrCdBNNmzn5uV3ZRkSJN6w7sjimTuP2Nfw8hM7UZEFpbHM",
  "key8": "4U5oYatZGDVBkJF5BCW9xhbJSTUYYN1NVLqu9o9tHrxXSuHsrN4xmKkyMKVGMy35TL1Xe3J1339ggDbcwMvWPRhq",
  "key9": "5BiMnU8ZS4RqS8CdDq6BKyvDvEAUZSx3NN1JT7vXuGES5qekExEdyQRAmoZcyQQ34p29o6NcS7869UxWmHnDcENZ",
  "key10": "2ksoUm8UZRf6uuterkbAiDj38BizDXL3DGq52QeqcDBWPPw67FCBZd3cS7JY4egSgMNUN22T4b5nKMJ7CgYpHRpk",
  "key11": "5iM7HdcVB7SVLJdLSvCoVa6MiFbT6UwVbaViwsCUR45XmYLK5AiTzB38AxnQfdaf5UXxxxEGipwV3vX6iWvnbTfx",
  "key12": "3xSXbDGrVG4o4wszvVaPNfoU4crC6Q4hxR5scbH2Swr7ctG7RKkvYDkgY9nJtLbu9y166PhDGvfa2K2cwm8dzJhX",
  "key13": "41y5EyFgRTWWKAytW95Urr4hLmWD18tk36oYmpv3vXQVeWrPhrLuM7taUoFDyscspqHDBhcxHq5CiuxZy9aLeGcP",
  "key14": "5eqX1bbrztCX1XykssNBiMgxjqgcfK36XLtzViXvsbWm8gP9K3zZ3BEw4NMCH8H35WDDAWxVJ9KYaY8NqXCEtaUw",
  "key15": "7bCjruqqYqy7MeqZycVj9Ty2UwSZrguztmUQLukxwwhgJMsWypAJpJVkXV1Bq56MbXrBj75tTJrKSB8tQkWcYCu",
  "key16": "RBuSYcNxqthxK87si1oqXVUyvQxJ9usagpjErDvmaayauXhYWd345qkUyBK3JafaC8FqoYgQAV9KdyVLvpDDHWt",
  "key17": "55AvhFUW9RarPVpNu3uUatXmjRwizfS954zeiSgdd2YX81U5doUk83j6LxhvKFY8HNLmbyrvzBpapfJPYdDPPdS8",
  "key18": "4FWGQksbB94mQ8MuYy1tpcHupjSupFM4fbVqkoBnTHPeoAHHJ7QHMaBc1R2ss24bPAsUnamw3mu4ahhXTsChaLKy",
  "key19": "67ZbGKuCQ8AwCvK5FZRfgdtAWb26yCTc7vvkYSBkWaAbeLMMfBN8BYEToKinS4EaTMkeevgNEtDFKgJXPDS467QR",
  "key20": "5tyqE1bM15zQjesW6yRPejTAeABYpUdj6VWe8hPQnd1Ue8nhAsmS8nGUJTXWGdpqbPK3pnM8ao3HAWLqJ3jDyGHR",
  "key21": "LMz4Roe2ZcJMoe27iBGQktKCGr3yAJHHpeachAgmPXmrEHDE2v4SeCAE66DEsFwF9bspvbNfVBVkeDMDk3EA3j6",
  "key22": "57dN8HGndv79idTxzvMxLP3Zdr92hqjxaxHGnPW9CriUskvv9USnMJRExQbVRGYjtikubksLHjiXECzGp6GJ8heg",
  "key23": "41USvJty7Xp8UbX3GHuqtX2jYKToNaEmXqezVoTGmuUVgQUnTxLF2Skesc44nEd9cHkzojjqriMURzsQsbZFQAxJ",
  "key24": "5ibMdgvneMHYhqxzmQaa2q6zF9gD3PJPt1qWP6P2oyGHMKWvUo1ZZWV7aAkrdqPvzppcq198js9ZEsMHLLwA7XJN",
  "key25": "53Hp1sCixJWqkTUCvgdBZisA2HQCWJ4t2BqNqc3QYK5k49jsxQnpU9oXYSMTLHKppUjgSFNxYFwFK2YqBeZ18hZg",
  "key26": "4ddFWrH42NqxtvyagdiW8bqvWwqngsxh8AM7LQWFqEzn6EXm6itqGxj6eTCs8Zc9XPxCKGajWcmJbbVPEzACkPxp",
  "key27": "5yqmvdW2hqBeR7jsgAyp2WgK3i9qAEABeWhnahNEYEPP5jCUQbKwd4cMfe5dUaN9LB6jbQBiRf2Tc9TpM43Dndtd",
  "key28": "poPEMWgF7UbQbHFCnpTAcVkBKMa3ZLDrUt62DPi9XUS1FVMpHHcD7SLM7Mukar9TA4Ns9HLmuheEu2s4ncVp1Mn",
  "key29": "3NmjyAg4AcwwpgQbQkEkn4CdJkuBK2Anaj46dyd81Zs45XQQLYBQTbKe8vHuKirh3ja2qqumxKsceavWw7KcC2s3",
  "key30": "4BWSB9AMuho7bzmQkf7jUpUNpcddpmCCvjupKf3TbXhAPi1tsp1ceP5FRBhBnWBgDWLqSiByJ3DwTN9snv4rgDGf",
  "key31": "Drb5zcuaXo2B3mw6SYcwGq1F6eNf6vA7DJppeevjUvB8k4xmrfUdsGaLpLX6TCpUcK3atebRRxtabthAe8om1dY",
  "key32": "4HBG6BHhCHbAYtMWWYXj6Nb4dpuvEvTNM6PeZP18SQS63ycPzWnTa4BFbzE2zUcnefT7Wx1NsXGZWqXYtBwUBBLC",
  "key33": "5eFWfin2uXaKnYQVnNLsftqWECxFouD7XvjsAoBrnXxZrSAZw5hjsQDXNawpEgunQLBBWeE8ixjn1fpgndPBm2TX",
  "key34": "3Zh3dcSqmTBvPQiHpUgfEMGv3fKgW33CKXwhjPTYidAQyJt8gYW3d1iaeUY4svLf12SnhSoj5rrNkWkoXK6A4J4u",
  "key35": "9wCkvLNZhAQ6ofYHro2cCQU5WVA69pnra25yB4Rd3En5ZUJhp1fJTRB8vX5Mj7vDVgofAjR7FrMKuv5mm7ZJeKK",
  "key36": "3dcH9fL7jXd4WMUsAxbdrX2whUHLBypbiL9RZGvE2tEThHibBqvRL6coxqjMbcxbmXrtSBoMKxuM4qrKnKJvBteF",
  "key37": "5u8bSwmgpu3D4N8F3A2wZRzRzm25q4w1MzKdDcNdNYZubzEWRpUo6MeFLzUR6yhBqapT5sUicE29r7gqZPyY4qPF",
  "key38": "SaWsyAQf1deVG8WR38u9bchsCaxByrVxuaeBoAvcZTBqAAXXbjUocPWVKU9iVHVJPDnznMeFpH2imoSUHscngtX",
  "key39": "3x3dCzi2eksAi2kNJKjRoR4zdsvMjSJfuk4xTou8yytmJbDoEmCiSQJhMB4y1mPtUGGH8iX2L295ET2v75mfPsui",
  "key40": "4weCcv3EYe5rd9nT7AXFUMFWxgAXF5fZRotKBZpHsin6dqXZQ3vCXmWtLNQsVC1UmEuFM3GUbgVk2BAHVCBHtqcn",
  "key41": "GEUrVDFPYSek4UWsnVPQKFAFf8FUbfSheGAT2c1wjVhqxELNQdbHcrdCmriGpdTY7NjhJLSvYJ6THcuVWPfjzap",
  "key42": "eARwYF3MrdrHkUcc2v2VZp8BthVNRDnuAn9YekRWUL2fNTc39UqatAet3MDxd7sbQTuW7kmQSGswXtgwoB75FDX",
  "key43": "NgSZhEFoHJp2Z23EntvpWmfgB7frwBd15Bb2z6defXDDxEqdALmX5mc3BXXssZYhFXXch2Fp5BiCS7rQDnwTLU6"
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
