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
    "2JkVjiAG2ARKmcrvzdYd24fhyaXsVkdwKkLrnjwR8ATNUqC6Z89SUJH62qRoaDjc2eKFyMrfVDhSUVoW9tSmYhgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkrNkQWpF1hPYJ8T8xFoce9UpFv29AyfbTcz89u2CCSF9uZk3pxNZTKGjh2QBp62MsEbuoqt3DiUeZTbEXnmnWy",
  "key1": "39fCxwYJwPFdeYKamUaH5skQwBD9zKLCdU7TZNExPaEJzz5LA1XVQq9n2VAwF7jD2yemWvJwP9yrBaUvhAKexRVB",
  "key2": "f2CtTZimZy5UdXLACRbgGVkViYwoULqToFzzZZ9CPeG1bcnzC51BBEWim6s53GoMzzsYANGD7DUtH9MRBVrPZH9",
  "key3": "58Y3H3zQTkodNCtC1L4vaUctM3RQUsSxNJXgTAXE3nQPC7kFZPg6emiuhg11hE63sv8Dw8xiBDTC7WUrLB5gfK9R",
  "key4": "3FH9ytab1eKhr8C7H1QhLQRmGCBeCpmVH4F5ZhWnZHfPbNwDWtotK2a2NbbWFc52MSv1xLuSHsB7TkGPu8eP4rxB",
  "key5": "3kjJHPmpxKpdkdsUmpHkqo6zSJLKKzMrpXBpDjJtFZyuraAFuPZy3PAzCjbmEXW4j9wJTGFUBcuD8copmJ6wKhMf",
  "key6": "b2L97BJZTgHXtohSsAv7CShVid46LqHL8obge3UkHSPnAG452DuoQSr6aqa5tizPLT9UHWJdBdFjoRMXBoxkLYe",
  "key7": "639UQpdXCXuSjRWFBCUXaJwcdZhH5dQy6TwRvM9J1YXuC1ySENjG6rVbhaxNvhpEuWfyJ8Xdew9LzrB8c6WSfhni",
  "key8": "4bPET5JtzXQe2iqtBvPsjYU4dpYJ5JLiVQ5FFN3ZStBKbPHnXpXbuVj8JZubXvM4F9Up2D6Kr18u5P2nLc4ZNPoq",
  "key9": "5eMpmx3AJsd5BRjbd6VH8iE64yKkqSazGLsLw2w4xnZd7btSCKNx8m1D1jWAJQQHjGM16tk4kF1oS349pby91ypX",
  "key10": "2ygfePCSECh6Rqrx8nzxt6ucjy2wGsHFVRwe3oU9Qe9LKgXSj8R9dDMg6PcjXVXBZySKXnAkgdwNmf5Tdyj6KPUe",
  "key11": "3agefRyTUFKtMoae56kGKGnBcSAApaHE26cvSmNqXqA7K7HtnLxWQfh98ohqFux1nEjNVncuEax2i2y2RRo2tBjX",
  "key12": "33xXcddDhZs43vmkqytEXAkEQ78WLBETCWBMYYtXzhJEKQ9ihveTWH5WDkLhcDzDvUVPE4dtEy1NsucmqicAMmLS",
  "key13": "5sfNz6hBneV3nWuTCHazdpivw3VXJxgDEKeaWY1MXaDQDMRuZTJZPw355d52dFRUWeeSrxDGiNUUFut8n1BHzpwK",
  "key14": "44prabizdfVpTALBvquHMyw3psjomsvKNzVA6aoyQzTTtEooyVqRV56rpzJS79n2DSpsKtWotu5v1JhS43PETPTd",
  "key15": "dwQbhbWohFEAjNiN1z9QHu4quXvjKgxDnpP1TKkD4FgwZERENmwVt5PKAtJZtC5krE1hzxyi74p7FX79AgyLHj9",
  "key16": "4etatKH5viBS6FuF3vQBfF7vn3ns5EgRZABsdJn8c1pSkXUB9UrAQhHLoEjFvND46vRurMhzovz7upzZyp2Roumc",
  "key17": "5PD3pSd8Dpog1EdVY7v18x5f6WyCsPTK6Swqd9kscisaR5A5pa54PDfyowUFTzcNg5MKTyMuDyRfXTwRN3rCZV9G",
  "key18": "5WfeLD4Z8t1R6xA4YSgQ81nQTzUdKAsXV9GJxhFD5jvgye9pTKNSW37VbSx4sDTLxZsnywnyr1rpftkQyE37aueV",
  "key19": "k7XpYpd2smd26yFcgdqTviEaQrqJcEZ4NcHHD6ksnd2Ndr9CCXq7e4CxXUa7HrAN8V42srF4n18tSzA3Evb2SXc",
  "key20": "32FsVC3ZdoCPrdPDLNS1ismT3d3W7t44Jjnww2BD7xYtNB9jXmbejw9FqyPdUjzPRreabMsz63VrJPdXRaxn17bM",
  "key21": "4a2ehF57fCRTPjkmyzeZjPXTdpQ5MCiNgUtTkmLv9RHNNg2aD6hHTSGV7WJYhmqMy2YkfT16g3Hp28T6157SZ8T8",
  "key22": "5ePQ2vTURSZD3WjF3dudZStGKt1MGHMR85ycp3PbuvAHBmuocgFMiZJZWrur6Lv9gd9D9hcn5FZ481xCYePeTmuS",
  "key23": "oUBpan5QiRwWtddduzjyBSiuv86Bnit1h5Du8v5yiHf2rtVMfAnv55gt4xvjsSkvtKUxjtVWEFKifPMHoq2o3rt",
  "key24": "WjAYGtsykNVVETqucTDij1yDukvM4StezGcnZdVs3iZx3zsLkUhUWwfWX6NBEmC6dupZyKsRCoU96VGBRZnxr51",
  "key25": "3bu4xnxJx2C2mCWAHor2rh9AyZAccafiwC9XcbVYArFMPEVgGzjdiab35CozRqhZy5z3QxdFjsAgsdHMzRZmiqTz",
  "key26": "3FTevfPz3TXCNPHGXdyrDH1cwdn6UYH6URGsxH7JSrhHWxhxf1LLbJrR2n6NZaCfDrcofn24Xu92n1xdYvMKiY5v",
  "key27": "2yZf9MebtzqFMdZvH6Vy2nNZNfdyRuRgnRjujFbJ6JdBHWWuqnwjEo2qUyaf6ME3mNyc7EeiZjFKKv9E3u9aTiJ4",
  "key28": "66JctoRKnUbfpxp8fhpJJsHgontKqEPGquFsKj1HVahcHTVhHCZAnEksQ4wDSAJ9dLh7pW3d9pNH6GsyfjLVarex",
  "key29": "4m6cia6EuRzys6tjfVLZo3EFpkNgsYfu1WbhpawbUjBmMvkC2dyPXKVKyhU4Pp56ipEyRoFZKtAYTQujPzzTabaE",
  "key30": "3YyVXqhqTwBmyxZYWru5kJAsE4wjDitvJk7kFCCwHZvyXSSyS1AznN8fcSTNT547gjxadT3yxkDgeD5LF8Qs8VMg",
  "key31": "5kcmCknowVyVjFKHzSc4GUGhdCc8RkpRVKGmqFCSdxco32djvjXYFnVoTKQ3LxsrLqhSyr4NnfSnt1yrBtYkto7B",
  "key32": "2tsS4L27FJ7SPQFVZ421RU95ueXM3Y8PEqsa7vJVZq7n8x438ZwkvwZszkoKhxVZQw2mywfNJaUdqJejUWuNbaSt",
  "key33": "2q3pGd1h3mTEZiExhL1U2jH8DHohDERHTeuBUWzhYyY4huAvE789mxjF7DjzsyfyFpm1FVX9hfd5ert4H6TLqRhB",
  "key34": "3vqmqJzUxihBXpqo3bVqP1PZWHKCziPvsrUoetts3p9tzvw5XrFMmyKgYnh9jZU6Hq6SYF1eqdq6sPGkukmEyGVm",
  "key35": "TJkXkqcjNmi9jqudcJs5Zbdy91zEsyyPqDR1Tk4eknXwcTKnWmpNbJSYmTQUfLX8X65UfKTQ4kv4LPjBSLJmViE",
  "key36": "643EP1eaD8vhNzFhGJWHKmPHGMnj8qUum23dAxB92ipDALmPNkQdV9byaU8V5DYq6pFynkSxQnyRG6VwGQ9gTwFN",
  "key37": "4ySjYWQE25M4df6zmNzPPR6cqTGGFPzNSA1G2NWHrgZGusZ9CXwMMaPf8ZejjP8H8FJa5UAgjcWHGdHyQz8NuLBU",
  "key38": "4DhzX3WxRE28t5jwVRbykgX5PMMjqRBrihWCbK8ePfeqThVF5eHe8iWD4cy3x7b28mNo3kDQXN4egCv1ZSm3tjAn",
  "key39": "3sBNzVCKDDSypYN1NVP4btJbKfZLEqazsKDJnUBXoYgGDgo47LxSWX17voMxxjKed3NPXfapQjmodkVsY3Go8oB1",
  "key40": "5wzEY6DJhnvkCG3fQstWHKxaGvToX2xv5gvdQsTJfSicEZ9XJPAHUgiH1DtVc1wa3wMncZk1RenA62P8MCucZAzw",
  "key41": "mqBupPtuQkTjzPG19EzAiT2HFbWbe6zxEx53khJgu2SsGQ9byE73NjKfaFFftBc9jpTvLsABzewmkWwbpC2TBeN",
  "key42": "4ew5iMVtDLpCZEi95Fyt7MeUfdC5k9b7gVwe1K2AR8MjJxByVcHDwYiYj2Xgf9mSQSzyL2CXai7MATLYLKGj5gxg",
  "key43": "29jV8bsDkSaSvc54isyubwTopxEXiuvWBPEvtM4UmVFTGfxFZHTvPT6YoHH26m15ri8Kuyvb4vVKg7hH1fin3rbv",
  "key44": "5imxBN8xdE812iwwKrwmfRQMhcbmaxNcUi3ht4dm5Yg7vZG9aV6AhdsXDXkkeTasxP1Y42rdPc9vaMErKRwgTjHx",
  "key45": "eMHAzV3p9RBa1THWiQpqdgT6YgKaPge3yhvoChC2g4qkk9B3z89cMcwsdQ6NfwvGDM3BRqZPASuvW4V9fxxJp6B",
  "key46": "45qGXRz8ScWRFZshtwFcPwRdqkp2JSESTxyETocyiUZAQQmdyGib8wFb9sVihSPR4oDQsFznvKFUtmLdVkxavaXU",
  "key47": "44MZ2hEoXKXH9GBJXnU9x69tYqpRFuVg7yGYXk4bC1SyxruYktmEpXhBQ85XBpD2PrwNP96Sm3g9oUy6wSo25Z9x"
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
