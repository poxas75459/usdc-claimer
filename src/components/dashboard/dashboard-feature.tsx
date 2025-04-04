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
    "3nn4GSawiRkH4hyFBbs5MnWWBhDtdhGtFayqrKCu9tonWSLLSM4ScP1hGxfoa8AHoir6n8MAV1pB9SfvDjZDTQ9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiYMH26oSYtBxYcoyL78NYofeB6r6w4XUfGygMcb1XqoDHnAGACbazncNaYxbdik4gTLMnvDzeFf5eM3xXD4aBW",
  "key1": "4v9Vf88zUtF2qJf8B7rSRBqPsFHYohvPyEo7fL8g4BvHV3x4dbbNRwXmibRhoHhndjyhQs87REENPdFSVcduCKkE",
  "key2": "43zoA1i5diEu9J67xJ6qPJojC1CUbsF8o7rra8vXjHWcKdqJoqXe2HeKEeSWqtPbNw1reT8ez654Y2Vxk9WYeW9R",
  "key3": "5v7eWyYfZDEE4wiFQVrXzPMwxti7HKLvf3HkjiQfeEFAdmua258rT5o5JJpeYWGQs6Lh79iWPojKq4BXkJXsWJYV",
  "key4": "2SmJzRPtGDrxmdFpnKz6hdCwV5wmM7X17ek5ibN4GbxkhUT5uPN23DKyLvqXN8ud4z9L7kZukdGz4LLPAAtbQLwk",
  "key5": "TXWFW9QbpvB8xGWQkCttxut7yJts1KLANWXeS1FBXRpZgywep7EGCHvWJS8hJHxZcvPFCAHVN5EVaK1WhKMK6fE",
  "key6": "4iikPrhohcKdsD4B22TNHm8e4N1aiQ3b97bL346AZz8vedKxG11gq2fApEUbDTGn3S8e8sUVnNykMnb9zbkNKpgq",
  "key7": "2TqVV1HZ9NHNDJU4N8TJf16x93hNNvLRLmdpe33sy7aQGU7UpEbCYyrchyEv67tte9NAcdyoWkx7PHUid3qVHnfM",
  "key8": "8MU2USYhQ2VSHrxJwwD2egahgVZodjksk9nttChamDesn7WFYCa1s2KDpxzaFs1hkNPPuCL1xHxQH2vYjnED5yZ",
  "key9": "2SYEdyCvJFcQEfuzWhTcq8g7SvUA8TpQcCRYgESQMVRBJR6tyAwNvU8qES2MnUpcdCejni6a5F3PCU6t4UBL1feR",
  "key10": "3HZoCKZNKWHAiYjy3ZAKwktFSMgK6zZhSMwcReTTBRH9bJkr6YstC95QMB4oDbVdnpAbeW79qJeiWJKdx5iL1gse",
  "key11": "MxhfZpRGeYXSu2wvCmo9D23iTJzgjYex5JZwjqcT9p4YWfnKLA1VN6E3DL41FJNYyNdW6eYKec5izyV6GGKRc1f",
  "key12": "22Vvo3uVXAHRhstAtFvvGHYmyZNvbA3N53Zvv4y5nxsF8KtmgfCahZeLce2C994xL7PL9yALVKwQ6KE3ja7X8t9X",
  "key13": "3UGEAHSMq2EoRXMJkxB5VoWuqQgkcnfZMurhNxQJZ3ZsN5KPnQfUbCam9y4QgmG14wFgYqs9HF3VrZn7hfTC4h1M",
  "key14": "2GCB9Sc7Hp9amYHN8YP1d8EgiQpZFBJx2Mws5Aubj8tgjPfoMQvf7naFiBRekRRXRBbaEXFVe3wtkNaXkD8GvK5N",
  "key15": "2Z1X2KvgtyXHQybtkbC2Qhd1MzAEegkVWoCvwTUKkasSX5w7KBX2YPNpELdoH5ySHuKu5yJqtwnBVnwRchZtRhBE",
  "key16": "56yeSuKAqfSZKFBP7LcxjaAGWfJCqWjHvVvLXvCkutzxrpS9LLYyZDoxyReWQA1TKS6x1gWnvj6nabavKhfZo9Wg",
  "key17": "pa6rb6jWAuPEoeNnWSCsn2ThBcuFmzW9nnWbsvoBzziLK13FdtYi4mCQZXysiZajr2cZ9v6QEnA99C34AyNZErc",
  "key18": "4VHck6RPU87t5maZkQgfSf7uevYtUibQuCdyG38Hv7dRBoZkpwvT2Pi6JtR31weoHeZH6gs49NyNa3a9m6WiWNF8",
  "key19": "enHE9PsfHrbHEpHYBZsgJxWkvmNEQ2vE3HtEE1ePfXQWxwrqZkQh7he7qAXqadnGTMGZLNhh6zcF7QMaPFyrih5",
  "key20": "4ZkADoLCoi7GCsfaU4XXZByR6joTsdANHjEYYDpXnTP62eiFFLsyi2XghqbHBKowp7cRGaNcWp6LmHNJDeBow7AE",
  "key21": "3PTsw7X8PXPgiEN2LGf4mr4otDLrNNUhLdTJpRzitbXNPHmz39SfasipUk1frPGynfwuoTnX59iu6kJnCBywtLFT",
  "key22": "L8DK27AyJcUhLGTqJjaCJBGjYKsDKHbBwesJ2fn7dSTcscUaXTyh36Lbat3SUEj6phrJkLmGtFFD4hQBtsH9386",
  "key23": "Un2opYkaroGc5BiqXvaJbC4j27pbejrRyPy5VfsBw3fcAuzCb9RD2j4i3JzwUxPUbKwHEvYpSeVR92mDucnBcPJ",
  "key24": "3xLS1jpVigVpwAsQnFbRPP823CLiA4Tv4j6wZmmrDzTiYvPGvK9tuwUVx5GkZWQ1q3Gkr7FmH9jc79oZYsQanAQ6",
  "key25": "5pLqqe7JPTgS7fLWyocWesKBrYX36Gq2u5ic76rLndgaizaPCTnMmR5FT6d12iaWnnKG62a3nFGQ51y6c2zGoYXn",
  "key26": "4gnM7WJzNqCEYKmVJYP7WESpma2QvH26NuBDXKgyMHZjJXLQ4eFTp5qRvddy7VU2dQNQiXBQQJuGDjJjAxxqi8Dz",
  "key27": "2HtjEvJkw5zsbzbGLsFMXBCjqVJJ4meEn35jAMTz7LMU1JiUMcs79JLXsuMQWpBJz39jTmZ3YkCFHXofiCwoob3m",
  "key28": "otGKv75VCXSztASH7qResNqATwNFBMGxTdJqrKbnZXMpZARs48XjpceMLkpkJhwYj1opWFzoQ3BGt1h47GRYWd2",
  "key29": "5fBBKQrGqmXMZVgErq57ZbDveciW3sinoGcTF4ZjZmw9VYkmfy3RHGA5CCZJdxZVSsLfkJ7nDTNtNmhvKykzU1Eb",
  "key30": "3aQqimLGgmD5poTyUcXgpNG1MQ9M4FnhwaEADvbWJJoXpEepQs5GZxfuwy5j2qNDKrNsyJoYyx5XGGxrQhrep9B9",
  "key31": "5fPV3HWUF7hqxvPpn7UReLCaP71RRc3PnVJ9gnc588iKNbCpyVct4WZ9u16s31SRdB3H262RxcDo4XxnD3yasLvU",
  "key32": "29F2VMtWWKErc1gAwA6UiYabs9uUtziARmkByTfwPjfaeW6bN1Qn4sYN3Ybcc94RcWGigL8pHA5gkZxH3CUAt2wS",
  "key33": "UfhdYBtf6RLLjgaa8FEB5qrq7BZeU8bph9Ua5F29qhwoJhjF21oJG8XVR63SQu5iwNnfbvRcKWoLwEzGSfN6LgE",
  "key34": "4q67687Fbcu2cBmP3PRNgzDGJexjx9RrKyQoSoXtRozv8N2FSFcHxBQg3TyfGQK4zw6EGN6USNwyFh1b5ZZv3gBf",
  "key35": "4XBVjgf6woA86AJuZ2KPiCpqJWCSffkX1ea25Z4sDA129QxKVDq15fkAKFXEyQuT9GesxYQHXKCurqHengXs1XyP",
  "key36": "5BSry1KYQCuyXn9sSrx2dwXcyQBdeMhPw3AS5ozABrbRoaj2yhFcdZbf6Hcx5n86WNW7SyZfbYmLeV6KsokiEAEx",
  "key37": "4yJRuBEjkoxTS2ZRXvYuUAfM5QQreYSUqZVzaK7dUXG8m44DbAJ6mbpGNQ45yMC2gsKcg2Jq3brzxV6oSeuf7Mqy",
  "key38": "izXqxMTRmjTfsieEJBwM64GtESYAMDzRhHiyAzehhNCxpDtR8BFMdD991nbbihnexhjMbTU1V3pLmzwmBU7ucPD",
  "key39": "32FCFZfUhwBsd263ckpc5jMMXZkNQMUDkHaS826r3TwZyW85ZoCamf739ZGE3i9WrpRUWJPHpa5pmXg7UxRAm5AQ",
  "key40": "2pJthzJQwnvnbkoznjJnLgNwxHeb9kTVyFe7atZ8R51RQy77MHws8qyfZdbuygzKhYAEoF5XfMDLDN8ECaHxafHi",
  "key41": "5EyeX7FZrrkVtB7u96uUr3Y2UcaGFKpoNvRsAsMe87TywHqT5c53516LPfyydm3xjzd7cRJrmwQYQsYAUfHS1E4M",
  "key42": "3toGWhMh2XgwH8SiDixwrgGdyCngh9fzYWubwCaKu6EhdKuqDz9YW7N44m1QBEsGFN4mgtGNRJHgNQ3r5nMeFX64",
  "key43": "3RHqc9E2ej6h1tFZ11rAx78oPXi7qXkLX5srAz8zUkcJrUKYT1j2j3nf1tsmptmDkVzjjB8Te2Fv6qNEmkMXYT1D",
  "key44": "3sD7DebapXZ1CJsmJDbfu5WCcqJhYUa6ghab4ABjvLoDyPknHnHn8RhKYUVzSeqK5HCbx7tPZHVK1BcJoTUvrSSv",
  "key45": "93mjGUi73eErkosNNibrwYeKrqVFhxgA76zXgwxgEwDV6uLmd4B3zSy4syFX38kLcxFE3UcwYe2pUQDBV1eL3Qa",
  "key46": "3Jt91ZRi9JR8a4GMpkF98QV4Dn5oH4p5y7ddy8JHVBHV5572dFZctfMPKphU3NXKJDhrgv29wAhcBpY8adciy1uo",
  "key47": "4G3KDC75cXKzn46cshEb9D5kfZ1re9RbLH1KYEfqPhQVRVqrWiLEXbDXQKqDFyASpqgJuc5f4FhEXCpDN9nfP2r6"
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
