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
    "2BqZwtLBXKqxQfqfUg1GNNLLPnXcGe5eMLZfMJtPLxpYwwHmEN3CZhovBew3r6VZ112oASXGvXUahwkb8VBNQwsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDPfQjS81CQpG3Eq2GG7VAfGVH7t8vh7N5BwAGRAnx1wkuFJyiVhRKx26AJzBzASdqfV8zgjWgLzqKYniw9wDwh",
  "key1": "4Z7z1ZVG1VmP65h9tLW2nicRouUANTWxjAqd2Yh29EL57odxk6a7drkgjrJTSAGdfKoLRXRonL4k4KRGFL3rnvmq",
  "key2": "3seeWHHH71dE3DKVbp6FKesxZ5rPDPuM72KXMUxedXxAth4A3Qv2VNGzsTrQsq6uWCPp5KdGGv7xUFLZLqDu7HNv",
  "key3": "bQhWgsC2h2XWqkLQTe1hwDNLDvekqibPerxbwddPVEdWMsFWMvXY2Lho4dHzyEr7zDzWMpasSBJwPaHi9QwUF9e",
  "key4": "5rhcxSqCtEaSChmoCkPCWFQ55UfydKWXguNJRsAbCMYrEEkcqmWwF3jKF7k69Qeuk6Kj4KEGnsdukNEHtiXSV7rq",
  "key5": "3t9qghqCScixEjmrZyKarinz12Whf2FqWzJqRBnsqzvkcgGSUBdwLdE7q9Sk2F7EwkTqxDYGW7SJgoUJ2k68bso4",
  "key6": "3Ew91YJCHMwz8wMcaW6kQJP9DT4yQV8jcF3dNoAVQzFbBCy57g6CTGQKMggCMGNZiYXT4yzGrxuhYTot9om61pio",
  "key7": "2EKGLTvMiEbbEfMdsyNE2w9wHDs3gs3G67YkRUoQwuTefpJkiT4p5HR49SVYsjruYy58zGFSi4JwJyc1XPGsBbEN",
  "key8": "VQTe36esQHY1RjMD4iDrsn6EpSEymZMKD2q2LZi8A3F1HxgHa7nhEsH3N8XLvW6UEHy82ydDQsLEYTBh5FKPPtZ",
  "key9": "2sPe6bfQTPRmVtqsVgr1w8m5hmdKVKEA8VoFWSTbQC5eNQpPMdDzMbqvXXRigrMyYdsCroM5yW3iWk7sLhxV6Zba",
  "key10": "3tZjKTXgE2jZZGAFP1hxxY9JnW5AqYyVjHHW7hwFVffkPE7z67WPMzWjdLs9ucSswrPmn33m1TvcBt2ewhSLKTuo",
  "key11": "4xEbQYmisDHnhqY7Yckd63KoZAAPaLxL5ToD3PPo7zP247Lzif1A5sAU5t9GmE7JeXhDeZ1zjgkhahELtotu61Qc",
  "key12": "56d1q6W8V1SQ8AJsLHejqaTtGPHxnpitSYzWEKXeZRWtV6xKnKa47eaRFDqLCtjDwmahE5kLx73VrQUE4SmPZGGM",
  "key13": "3WQEGfTUpjhiK7cwHp3viovqdqZ5jVKCx6vqmZ95UPdZeUZdUycrVU6rXiWPfaAVEvKzECC7Nk9Ss7hrWpjKQ83n",
  "key14": "4zBekQFAv7BpUQv5kHtYesL7Z2dgkicnPCJx1L5az9Dfbaid7GS7ZocT3rUb9yvfzXWf6zK1CrQVki2JKXPuoyVm",
  "key15": "3QCkgqtRAPUqqWeKucTZJ3JtM7hWwwhMSpdxmbN49yJFSEaetGNU7ob88tvjuZqfxNZ2UCVgGYrf2WYMMM7L7sPn",
  "key16": "3YnhcLjH8PTDqxyk9X33nb8wLmLygKLKzjMnyrfCxh1UuBNzHL6KnYBf19L3RrhVWEKsFJy2PUSYaDkhiqSyN4xX",
  "key17": "Z6acadafpZUbTExThT1hmn91BL4ShbSHE9pfjAdzqC7bXjpiQRCXCQzt9PsxFrFhxG7N6iZaaZNQxcar9gFM2td",
  "key18": "2YNMDPUhFeGNVPqosQK6x6qxqEWKZxdqKZTZ4G2PhU6Zyk7cpPbCoFwsUuMSU87WwhJKod4f4SMSeARe1Xzq7xzJ",
  "key19": "2mR6iCSVoqCavAgdAdGGnuXdmsWkT5YhcaXMWmVknGWsfE1nxSVB4LPxomEJFCEFYUbHbb62wPjBR363KcmkE4Jx",
  "key20": "3GE1SYhTe36keapvg5WwjeFwHxqUtUFLHFwsnp2PgXn3X9n6jqDtJQqNWKCmcVQFrxbztKwRPZPjTTrUurzM21v3",
  "key21": "ayFZ3kidxrwMfzvfogzFCCyovYwbJ47SeDdCd3S2jddmtCV1RRZB84wgpZfafmGt4VN1KyojKg9x64Guf1jyvqv",
  "key22": "2oEeifMZwKCPj9gvpT4dkAwWKRnwLBjHRDVGbV7rmmoc6nsRPDAPkvYyaFFuBokGR3oBVqkdCHwU3PzP9c3b87GR",
  "key23": "2ip6tsLmyYkwxNea9PE1Dm6WzLQL2akvP6TgEqxcq5bdUwW2xWgq7TfiDCkPGLaXkyGficF8nxaghrGN1z2RJ2gN",
  "key24": "6UgqRw1zB7YBrpGm3iw1QczuE1XYT9cJ1zoB6iKt1maRK4jSTg8Zot9gyET3Z52VfurCPz7TK8o1SGn2a7nDEW7",
  "key25": "BrwmEupbTwdQudLTNthSR2FR6A2D7RsH6R2f9hKej6HhdRAWjNWRjRw6G5YtD69sk4439JU2nR9ACFJv8FAFkA7",
  "key26": "2zWhe1TBA8TpEtJJjboSJZvyGp86Ao5E2k2tAGps6bLdASjNCMMbMHFf94vCLtHKkobRbBzZe8H3gr8ABMpeeDHe",
  "key27": "5RV71dFHrGzKHRVC52wtfHTrsZYY949mh2NECvvt6wEfWEFuBswW8yC962Asg662JjhQVDCrwHbtSZAS8NkUWFBA",
  "key28": "2woThFU7QpSonz1azhBtBymvCPC42dgqLtt7wGGFgXHSC5jia9ohziMqTZYdoF5CTYStK8oSPJk6MNJyhP8dJkw5",
  "key29": "2ERUn5CZM29sjHTYn2RBwpXxiUK6k642vUjX74VtJUriHu8epXK32CxNzBYFBthU6VKC4oAtyc6mprf4QyVrmw4F",
  "key30": "3rpMxK9js6cfQtDv3xNipw9C18FwXUZdjxPzm5D19BzENbbyAqf2jgJ49Dua1aD5bfLSRKjvKiPs1x5CdiWXeNcm",
  "key31": "383C9WJgjbJNqMTkJusttmocyRNK7MNA6BuQ1MDfTY5VH3YN4otXrca65hy6ZXZ8VRr1bULGvypuKh5xSJgyGqc9",
  "key32": "5gto4xFfmRByhqQpq9tK61wHVyifwHGvKcJv6bqBbHCqB9bwVgEV2zpHGLZyz1thYwGFrvERwQum74mAt4FS6xJk",
  "key33": "vJsKbhoaftWwr2ExeDUWS3ND7LusXVxfj7GoHVCpWFaJASVZq1MJWcz3J3UqqJfvdBGvz27VbLVGoeQn7Btpcdo",
  "key34": "v2t7tueiS3ZpsiACL11EXcfXi3PMyFTh2RYQvxuzaQNbbbV8XMy3r88MXGCZiBLgKyUFHj8kp9jG4ndUY4zfHN9",
  "key35": "3KfetcYemDvWLt21vnEPoPSywLk7oit6PwbisBdmUL2H1gus5a3AjowP5Yb1Ch1ZQsybwwnAJAKgXYcjpcudPpnw",
  "key36": "jhPPZatapGHd9uBEduf2hRSdqkQmwPVfCQsg2gCLXQs6B2QMr6Qw9L6HFMSjeHW15r7NGz3gPyyrwzgyUovEABq",
  "key37": "4RtPCRSfi2QPcHLWnczVtuLsrkntvGfDdH6wxxYoQrspbMs5NSnr8tV6Q5V7TH8AQtzdym4S9xuwAzGAuW5qVy5W",
  "key38": "3Anzk8VdPt5piz3PhSphmQhAqauZXk2ETnkJuranLPxfDLJmkhKisdAhrhCa9h8wGpFQ7Quc2T3yv2zumbQXzN8t",
  "key39": "5YJTfXghxxajxTXUMc67CaYorALeQKmvkNVS6Y35iVMw54BKYW3sQ9Fe8hPetPq5Db7dN26VvJjDFGns4rko4Sj9",
  "key40": "2cUv2Sp2qU8QZsLHCJapSFPgsHxY33BXn7kHpPv2nbjCY9zMDmqjb48Snd8n1E3z61HWvvnFa6Q7R7VdpBb4xEgJ",
  "key41": "2cz3eY87jTKXTKDxu2zz69omzwhmqv5yvXRkyaEdHiqsGzDDwGQDrofxuYdbU38tzNpkjLJz7iCricotjjRjvbgb",
  "key42": "4w97nSatugT2QHYGtA6qPwoegG5LrFCjzAmv6dsCNAtYwdE6mZu2FDwVp5APhnR5vhXEjKzPQot19S93ZmeHxUdt"
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
