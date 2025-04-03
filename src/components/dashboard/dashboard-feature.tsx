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
    "2id3ecrRzekUW4CkQfRF4sQhLwpzYacP4neWozo597cKBQy79GzCRqozdi485ce6a5rJU5cxNjAiAtTek6PdhGn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvJFezYocRyMGdYKpgyu3XRn6gQNNjzD3RJxothCEJ2CyoybCNKmMcCFTw5dfgv9sg9qsELYfJi7Q3Ucn8SAdvg",
  "key1": "aPGvPHNKZHXiATQTEivUSYQijN6XZfgkFdn1VfajaqdoJqCe9X3PdUAAEBMYDyRU2wttHTq9icSjf8HuQViXHgn",
  "key2": "2MwdouXb2wvnXCzdV8qZxkzq43dPaMR89HaNTF7JhM5dQhsWAd3LuemnshGAWw1PphFaAvRV5uTz3DjLq5ftzR1k",
  "key3": "55G16gej71fn11tpZGCJ9rSfFna7dUR7z8WogxK2Y6UyEeQY9n8H2EXbuHrFBjwVKwdMLepv1no7R5KLahs2gEh9",
  "key4": "4mnqkFKZty4jutqpNC2vvF6VHgh3WbKWPHVbhobqWR1743CQkzqV34L6M9yym3pDdf6snVR6P7e4bhaBV6Et9YwF",
  "key5": "5pKmwP5Rux3DitB7BmdGjV1ZbxJfeBZVxw7518JRw2C3ptp2EEzusjkJ3Puun8Mtv6uAK5HpTnjQCXAAwsyUN48Z",
  "key6": "4dgqJY8phaM5mUX8iMBVkmwSyUNinX6MKxSRKcXRwDbRg1DjFjpvhAMcKb5reXSM1vTxVdNkjk5JawGh8sQjRjsh",
  "key7": "55wHfRHEFNHvfQbJkpYoiVkxmxP5a4nbHa9GvUMb1gV4SQRNp2sHEzoRBPan6iwzR3ZT3UH7GH2Ub9zbLEH8Zmk7",
  "key8": "Mk6TALzJT9GKaCtLFStwwNPZFryQFntfBgXpRd8WV77QvaLz7rr39m9a1cXo8uue8cUUhnPaaquECQUYDNqJ118",
  "key9": "4uoikuppNG343fUqZagQTwBPFXWuQSCDg2h7EMPK35d3LwDPqPCXvRag4uewDjh6LAnCxrjrpZ5TaBkGuN6LV7Vb",
  "key10": "5RGEuTGRrr226fk44ApRuUpbgvXLWmpF93i8pCsf1jymZrffKELjjrfmU9ixSSb43sJQdu8vULoYiUuM9KuTxnJh",
  "key11": "2esJgk1adJZGLaQ95wys18q8DLKaJXgbffehfdytAXkbSvEujhfxRiNgWJAHy1oaZySFZmT7j1k4GYQpgWHWAcem",
  "key12": "66KDAVW48rKRbfcjEVe2aiPiUmApnacN5X6sqWqDLZytHtp1mMuJTNcrVQumGjAgr51FXfnUiBnG2hkLThSas37k",
  "key13": "4xTRKERpdgX5tzMaymNsXnsQTDrWRaZ5KJY3PP2JzNvX5NGLK5wSMhMRv84YCeoY2NdvZbV8BD7hBknY3xCkm567",
  "key14": "4aQd7RbkjKzLefLQNU7m5ZPUHZFUh8VtYownfpsxwTypjmPYCFQxNEwu6q8VfU6YuEQBk9aQtpojXcP15xYxWGAU",
  "key15": "3U5SNRz4zpjRmfTAEWKpDFPThzVbC726CK28LL33zAqqo9v3VvLKQm7wWDe4ktKF3dQy6meC971P9BegZAyqivqS",
  "key16": "4PnEnTfRQwQn1eqfL8mx3QSKuYCMX4zM1J8MYiS9F4kG8BqYGyG75WtwWP7ikZkeisrwBYvyZdKCqmEi45fhZePn",
  "key17": "3LTW3vPi2y7YXKxFw1Fca4pjLP2SCCueGZJuVDqeb7J2UxGrjA1yuMNHFL1SjSkxLPvSUTfQDwfJRB72ajFSJ4ad",
  "key18": "2kQwXYft44TYfF37ds83DqtmmSUt58avwnaQn1hs1QcME9TqcRfef7YpJha44F24dqHRtby5nFunfDSNXLUrb578",
  "key19": "3qzHrpqxEXuuzVZGgnHBdwBvYgb3XFhXqyvmDzxTrEebhh1TznY2ypnBVEs4xti1boGzYuoQV1NKzh5R323YH8WC",
  "key20": "2HmTvhzByhctBxYCqvxY4P7c84UeHAVX2AagqP8V66MHi8EM1DtQenk84yJbo8UGMpzJzHuroqBySXnxoYWbPz5Z",
  "key21": "CvkNNowq4iRr1FDN5W8JqRibjh6awXptwxv2CXunRx1Sxm9yvE4ygE7e2BTMmgk9Y4TSeA3p2mVf97rz2Vms7Au",
  "key22": "4uGL9uUWxxcCJxzMaEeU6BD9rRc6GizSVZpWnYhudkCFyNTKKLCcgCwS9jHCXDF7ww7Q3qj8x7Bc3PpsK4V5k9qx",
  "key23": "49VUD3AffvEkvNjrUD2Jzrkg7aNDXzM7cta55kqYzHjQyjVbPiEs95ce9ztPyGkYiQRWjgaBP8aFfi2SRZV1q1c8",
  "key24": "2CWaRhiWhj57kXn1v3XToYPwV2SSEgMnu7c17JNgK736zoK5PaBG3CzzH8vmYBZQXBy3U9qYtz6CgSq1QQ9U14Wr",
  "key25": "5J4nTXafS5PPpoiZK4bSFfx3XwuAvLi4ytLsLMd4kdzva6L94T3J4ZTV2WP7aEjQhuCUK5huEhDjTU8Gr5Hcp3WC",
  "key26": "3aTY3NhoVffTaRwDuwSgQ7fqZ8uGb2UdZAjdskLqRSxASFVAkSMqrJjDMExMZKr9orLjL247rC5Pc5tBjb9Upsva",
  "key27": "2UQCRBigAjN4d3MEFS2cJ67rLNZwYrPewSE6sceAzvdN7dGNJnsKkStSm6KARaiKmDKxRbH8pifV4PjmwaT4cedA",
  "key28": "3XnwmAM5uMNP7CE29ZLd69qXmHQiBiDbeyfUy7wMgDLVMquFLUAfGf1vUwbVSSSEPHVDPchTpXZACdQ41tgyR9kj",
  "key29": "5KVMHdHBhHpAe7p1zh6sfPtmYxTrUyVVAWgKtVx2JFnyt1xASxH89N89Td5amJgDNo4GXMWxtqBg8mD4HM7L458F",
  "key30": "3RrgjcYgmSXANPE4E93o2VDkvypyT8mD9n87r943UHm9DoxupQFEg7W9oCugKFKRC13THjArhgTjiji62UEgGsrJ",
  "key31": "2Pf3E1UtGbPPMxiciNbYrWwyJDSv5pid5ygjuc2dT3vAzGNTJrMgVoABDiNY8pMxpwmZwrpy8BysC55xtqB28f4x",
  "key32": "6yVH5rNcroHv5bpkySUgo6D8x9zGNFuWjVWqQKFcDYrAi89X4mQyiATFLjwsWb8Mx548cJ2tfvd1fsb7yAQ5S5Y",
  "key33": "3adx4vVz3eZ4LgaAtZh6ynt7WhYQA47MGvwZKmzpBschxdhkwwqDvJgwBZWVfsuLEnyWsjdYqqxxcdqT5h9aSA2M",
  "key34": "3hUT4ugijDtujj8psrJFFJ7Uhea6sUCp6vjNpLCw5f3yh9AYmX8XHDwbyXL2qgpt1NuJwFqMyqnyRFizh62cjzHL",
  "key35": "3QwLjXeiFz41vevXs8gNeojfxmBmokEFDRw3yXok9FXaj2Z8CWGNzkMekes4UecaKDuSrn9ajEcshpp2aY3nAqH5",
  "key36": "671Q1D1opEVTHKZJNm23vpkdTBvoLh83c2ktW95ZFhoUGhWES6LSciRGcEDzVpjnSSSqefpdzs6MNLRuueKxV28A",
  "key37": "2Jx1U7LVjWJEjrpSs49ePCLBGDx6tUTByk2mjRNUe53BsupiVLmofpW2NVnNVa4DRioaauirFvydVmr8o3X9kPjP",
  "key38": "4ytsnvmuxaE2AYmN4NjGftcRVDmMXX5JyRRfiYgZJUfywftyVS5Wkjd4uQWRGrZc1E2f1adgHU7tcvfWyHjuB1eC",
  "key39": "jLvqjfnXSyM8tDX3DSQXLtFCjjpDArx7jUbZMYUHTUs6ogMhvyBkso32GWmAoZX6cKVGHHjRS8Fm7nhNfWXqMER",
  "key40": "5NE7mA3Y4p66sZzEZ26SxNwu25c49qXrkYWcdFW7o2gUiWU3mepoYLtAAHYM1n712MGGoyVdcp6yzk1Jqj5evA9T",
  "key41": "4jXCKbWo2HE9GFsQSXFsieYcJL8YFtMdwFj6kFciHiMF8T2d86Zn8xhcJjz19FY5Dfg13iTkgTitdKWfAkjhkWbX",
  "key42": "3vqggHx4FwQk565mrmVxjo2Xe5Ac4xVM1Q4chFM4escyYrfDLRX4C3q2cEEcCUErRPnjBCKe75As1fY1GcaU2piw",
  "key43": "4favb8PyafY3SCGtCYhJVN6pxkyzjWdd4xUd45YXtHVkxYVYQM6paPam5SB2NbLm4K2GfHjXP1cBd3C7Bsv9NAM9",
  "key44": "3KjjAoD9N4qnV44wGuoGQXhmkqmksuX9JCFZRB57ehKXTo81Mfmof4kyf3bU5pNMX2XD4ExdT3jCfHK949jsLu3j",
  "key45": "2cbKoUKqBn3FqyLmweNqMtSbxnhzGN6R4p2EVa9Qvc8aZpjBj3TU7C7XG8J2RSNWsTesdimjVcM31A3cy1ZP9sYc",
  "key46": "4MGUgJW9UcoYDfDubmZYNv8rkFx2FGE3uRJAdedNwAVbjjcrrhE9nNm9sffTuTiNuuRAu5kpVbVEQZiD9EHyatQP",
  "key47": "2Wijq6Hy1StGyqtUsQSmKbz963JStWcX4ysYum2xKFcqwzky7jHYjFRXB8GjfsmL16AdFGoq5si1EHo4d3tPCuN8",
  "key48": "2ut1t85zGuPzDUuH5Adues514z9oAtvuYCE3s15DP77QPGniDs6HRHrUG1ELXCqjvQ6jd7hPGG3oNqhtySWpx5sW"
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
