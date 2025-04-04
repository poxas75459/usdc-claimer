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
    "5vbm57Dt74mdb7NqK2DwUcCRekNue92K42JG2cxtnG3NawRRJBgPTqWFTHuR7xjf51NQZFnU9Cg7gAsSHeDJqeis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgPUGo3WxYcrvo1rXrwKCsMC26DVECfhuY6KENwYuHVTuYPrKEERR1bkcy6THhNhT31uYkb9Pt3DFEvEHQuH2D8",
  "key1": "n8bivZwsUAuVUsPjBT3jkFLwSW5Dd6UWcQgP3gqEqy92bcsuEmhdrnFbY5ewiW5e4utE3H13SfbHhWoCuBqhePY",
  "key2": "3y6xvVCkjN9toPSqRkePaC2GtExQwXL1ZLtPgGUbRYHcepdSyDVn4gj7EKdxwZtYv1V77ThsQJK17wquLM2WZVEd",
  "key3": "28hJQWQu7wwWBjCYBfctdWxvQHqzYD7mhYgBtU4Dizj5yghBEThTQ3xeSKMaSgkK6kLRU5c3upjG3oMB1dhFZ2Xb",
  "key4": "3iSbdAK5BTccssJ6Jj9HrjtqWWtPbdw6KNooSmgY2reFe5vwbjkSe92N2C8z4BJF4L7MY5M3RAWXM8iXGYpLtBN9",
  "key5": "4th2j4psY3w4uK1EfAj8YisupXMnUbMCFvVarnJtN7emLAw9aWgXbqmDjhckyH6mSX7N7de72WutF9NkFCrmwAC",
  "key6": "4HP5iXM7JwbevGZHJFHwuFm8Fj9mXygXrTJXGwC7iMjV8FibeKyEBgXgR5mRxnQ5LbPpJZN94LMLpj5qizp4EWvZ",
  "key7": "42J7k9mfHiAJ2JJtLZmfpvX8xsveVYXtaZH2SxYfXnjyiUswE6UDZKcE9MEw7ixQJGuVXLGf7ttAeTaKpLZGtBUm",
  "key8": "4mvBMrtmgA9fUhq8XSvhLbNAbcLmMBem3wHpKGWJLswcsas2o4VZrvCyayh76gGtMZ4QQ4UKsbEKSX4f8ejchg8m",
  "key9": "24YF2uFThy12tgYyzsg7oFXEwQjupGeKv71TyzzcwMVyNM4S2daVve1m53aCheGtcNaNPFSDcizgq2jt4KGBTWck",
  "key10": "2HtdnhBPNRMCHc1aaxxQaHvxwRXhSfrmhCnrKzhnJHguJT4K8MXAgGScWBjgZup3nx9kvoiQNtP2umZhypvBKQTh",
  "key11": "LC3BdwMjaG34en7Mg2n76SZUWtWkNnRtm2GsdaWSuKKLT5UKLs5EwmJZWXvR66ZRtDyGk2YuB98UUujTRkoZMm7",
  "key12": "3Vhc8Fj7CnfYGcRbb95AAQsJVtfJxP8MQXmDLsbd9axYRWFYZFGrNPbG8Aoudcm5KjVL48z58Y7sSba36zAX1ZPw",
  "key13": "2WAA8agM1k8ZQBjCjrXhSw9U66zCYz9MUXyXY7uFaMkAmYdDT8Yh3NAAab5FCgMTnBjimGwez1GMk2ZTEh6Qi4WG",
  "key14": "62xV9vGinVaUkY44htV6A2g1qLV7Dtne9SaBWBg2S2RtmVdJPfCx6TAoafGrjWyY2fKXNWa2dTFgAj4b8oFcwk96",
  "key15": "rMrHDfezo9J3Da7upWGrdNunJN6rjm6mviRFamMcYeVtfvQ3tTpk2Ls6VhHdN1SMupkFhvmQH1T9sivef1amJqj",
  "key16": "3VgYWW15Y3PtBPbPWrFBor654nWmDpaLJ2FnAiR5ufcTrcq6RFnyytjoWEEvkJyHFADq6qv2furjDzWXeXfZz4WW",
  "key17": "UmYgaanGmUbMKAGhtUPfnUY7JKR2hxUYct6Tz8gnbgkCyHUgqKGsU3UbezDYHouZUWPm7xFMP9srUpMJhSdacF1",
  "key18": "wM7EBZ26R3DpmN5Scc4pi23cqfFvKdcyPL9rd5f1KLdgNrnypZWHFFAk1Y3RcYAF42nSuN1isdDs7jDktiEombK",
  "key19": "5CmaL7PtCm9TKxCyCMNJyhAGbTQhzcwTcMYPcHq4qnfcejV5qoo33byXrerMJurfosoPQP92gU2TL4kpawt7Lr6Y",
  "key20": "wcey9mghSQVFmzCRuJufwkZKAiCrJhUzpk4eCVC1QUawmiMNCAz5RFwMgAa9zxWx4DxdDCz3FxFSiRdghr3FNGB",
  "key21": "4dSwPv4qRsvGP2mQg9gvqPLsNcGwPTPnfijUjz9JHeajbQ4PSU3KV9R49szrqjLuMyBdfrByyUAjBaeEXt8846FZ",
  "key22": "46K7Uhdh91aPRkc3yAia3QJPMNeo5WzVM9XhPR8vTZNPChkNfV5u1pUSPCh7r7EvaUJeV2vCQtcaXDx2hryXnmF6",
  "key23": "9wo2qbrtXPGP5jdfQgUSj1LU3gxLx1kwhoes56sEbPEyuqTBBx5rxod5iyzvxubVjWPWSNCVs6RZgWJQM35eCTN",
  "key24": "5XhdyxjAXUu15qgCRr3ZCpaifE3R9SVacTEu9XrXLh4B1qkvYYZCT9wqBoQWaivCbmQXMWXYQtJxWmvqQuLDz5Lh",
  "key25": "3Z3CDECN2U22HH4T4pDL4wYAmxgvSuzGirkutnjHLo3bi1zY7YBB3w1oJRQLKS6kbqU9jjSmoqUViEnzehnYoDHS",
  "key26": "424QEZ7DgShVNVzHffMxRLKhph6NQAPgahEwf7ZjbDd7KVkS7zeJ1r6nyr9TCSohgJ9z9hQJk16Lmgo7qUnsfW8D",
  "key27": "2BHswW4YWnmQMxU65TUNrvrPcfx8gomEL8kgwGoXVE6f9qhSm22yTf1g82VjmDiWT7MBas374mTzQMUABs7R4Hcd",
  "key28": "59hTjD67tLESJUYG9HD56dfCmLvXdqj8TDxR8BTLcYEvwGwbA41RPmLFn5FsVUkvnRhkakRDZN1mkkTb5qudLZyJ",
  "key29": "gh78q2bA4tY91zeg3TqedvXpBMEbJUSyYuuFAFHApjCzy7AErwj92rNYhytkDKrmhgYvSLu8U9MPRY7yVjDH5HA",
  "key30": "27rFmfMHQecgMpFE3RELSigrYSo3LJh7MjW4ieSVroxd72rvJD4kgoQv4EiRcMeD7PNWNkT29puPoLpaFFeoFHSq",
  "key31": "2grn3YTCm4AeTJHj48wgc9JPQsc5TK2aoutV5qfesU5ADGyJrqa5n2f4Y1324G3CKq995iZ28FrvfqN4RR8t1x2M",
  "key32": "EW1ibQkLv2TYsXdwpP3LyhqkeFinTvjJEYLub1pxBZdtige5bC6AdceEmQ7TUY5UsWWk2QQws2tXeWJMd2UXuB5",
  "key33": "628Ybagsk9cpcijR3XbHuWx7oPE6TLY6vXSA6MCkyVCYm8wgTHcFKqStg6iiXpJQykkMwwGBRJuHk8Grw4PzgHGR",
  "key34": "3ZmbHD9ZM8D6brqz2fkqdc9DXohKj42mj8cr2fEd9vL8CVwXpYx8jCduoHejavpEpYkuqdQjL6xVHBF33e5gsQ8v",
  "key35": "4yQXXkwFw7wMVEEGZ6DrWRSZuzw85mhiQ3KPoQvPn1SZmb8YYjKqHUxSzqHELLp5NSNqr6vyA1CrSttKbwJJQNPW",
  "key36": "3UW3Uf6LUDEctvKNtDpdArVSQx8vmfzt6woSPVZQn52Yy2bfeadX7mvC3pUnXRouYMTMbU16WTGktHfKRK3hQyBs",
  "key37": "5MAo9zbkuyEB6Ft8yzF9r1KYWY7X6MpcVhoHeNKDtZfkrf2iSqZTuCdVPMTv4HmyiNhLqwN5PRSKUPD8e4NkM5Hq",
  "key38": "fzd34PuPFScsMa2iA3aodWkU9xJpg1UBgpfuTiCu8bGz6yeqVdMFkZJtPzDHPo9HhsiTr9UDWFbtoUNSsDCgF39",
  "key39": "5dvpe8dCoYDNUzZ57q9f7iy1Qa7uSWteGQnrdFVpaHyhu1ii8kdHo1K6jMfxEek8BDhETCzpzXVb3zFYaUoX4wWa",
  "key40": "4h8VjoEoxnUaUhoopwkpbDQBwC74L4hBjDR16jPCJspszuWzKheFeeES3feHiodoN6ssjg5ZZtCEBYGcCCnjLRuB",
  "key41": "4QNpAk5nFGppkUx3gduFEsNaasVTcjU84Jwmbkypnwfgo39L8yWQPkcE8RSXpfAnf1Tiqy4HKvuFD6VMgnUqTuMh",
  "key42": "2K4kFfdmzt5yfYuASbQohSq2mpb3cgQKiRYnWpccUywqsrKYBaHsKDj9wakpHWMVhbc6WNZGp91qZLUmS9Jhvd14",
  "key43": "bJPYbpTuotZwDbiyfSzP5jiW3wpKMK2iMRTMe9EMkU9ScgLniDKGqAGe8sxCn9MGPPx65tu3CAWfpEMTATbmeJt",
  "key44": "3p3XjvdzvXLn69AaizmSHPpRGzDnvSYVzxRmSUYZt9W5SRcQTdnRX62syagedSPq9huJQ23k5zmn16TnrN9cqmy3",
  "key45": "5mMrqCwr1gFNnQyV26wtg9kcXzX6ZRkvDNVLs5PNtW8hB9xHWWyxtHHadLgJ3xnUtC1u63yiAQq5Frk1VKnECmjK",
  "key46": "2tAPYPFNEDjZkdtPVyf648Lf9Ls1G7SZaZiJmrbtqt89wVaGcK9bUhqAT6Dcn1opB47hY9YByYvDN7uegtBbR3Pv",
  "key47": "456rNSVFopoKbqFGVCYpT7HpCSnbDP4yVJ8eUnWANVTp4FJEnyMKqFMLsSSbdhFoj1oJiTSwKvAXpfeeKhbd73yq"
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
