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
    "5YpwKRk9hTymDATAKoDMXhSykvZwvgvkhSrSJHWbcgeGMU9yyDuEH8nPDK712iGEQHos8aCFTMQXF52cxFiZfjAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wA6KnaQstJeJVzc71uz4QWo7iKQYshE5R6C41hEwqRAidLBzK9tNgzNRbWQvvyo5gT2GTdrFAqchtMc86AMvkv2",
  "key1": "tUsHrTT2mHsQAtYhApHg675R91dQGbkQRwFsQJNaCmjmwo8GK9qP1yYvb76Wij4pgTkBrmLuZUxDFkRDCRE7wM7",
  "key2": "4VCmbJDBWZPW8rpZ96CLAFzfxk2GyKyThnZddiycJLdP8QqCASNCqxdBQt78KHKfEfD6jC3n2v42gjEtLFhrBqK6",
  "key3": "5znhhCtYAY53osxrUdPhJavpy5oBs94J1ffEv8MmD1iAhMmdg1ujFZn878M5aDovaBo29Y7SQofdm3RFd47tk7eS",
  "key4": "ZFJVPcuJbQGjVxVGbHLNpVxguUd77VA3fxZ671HPVbbQgiywK7igtEE8nhCSLt2kuSxsHzjavkBLxSYvo7p146F",
  "key5": "45NxeQzemXFjMXsXTauWnpXuhaWyA9VRUUa8ZwaMLsZHdha2ka13vLkRC8qAXEZmzisJT3YJERqoYFq1GK6XVwP",
  "key6": "3dLWjKRrZcDXBTrWYQaqen2CxZeRqgTkwXTv3dqENEZjFNspYMCNrtKic85HQvYuSnMM33LbXFCMEbhfUpVw9a7P",
  "key7": "2DRmofdxD2HTPTxemi1KTK2bfqQLJQnzgzArbAtDSwfenMZxfZWrcK2W4oDxQCYA8PTSYVrDtEAg1R3cs9mqTBxK",
  "key8": "5u4Kbaxy7ZqAqazfY2Ghuzf2XF1S4TJhsnLTobC6YozjXRwEJMsv15qHtovVm582gbYeAgcQATLCZ3FQ3acc8cng",
  "key9": "ScrJicXQpYcCS43R7VamRpZkdDXxfHEX9BgdZ5FWZL5qJxuk6We3XTcSn4ni8rGMnmYcaFVtcXVPL5VAd8nTaVG",
  "key10": "58bRpPF4ykFeskXSCZxhix8GoFakBHBHK2eX22k2BqHVtZuKjd4ehTcDUYYRweJHnLsDp49d35TSWdBCe5h2r9Mx",
  "key11": "46YafMefWGbbbBYrabkHgKG4Rc6rnrpg4x6G3AAQt59XPxWGuQxFxVb1am9fwwyjJbyiNCApExohuiTC3A5Kfxg",
  "key12": "3ni7ZJzVWFTvSUtZyRA11XgjVyCFVxq1fzpuNCAxkA3U5DNdio8g4R5kfqVLukZgz7gpr5sEU8LSNX6ow8j8cTWi",
  "key13": "3kQH6QJNsMsAbVq6XLVtYryKTkdbhCScFyKhCEcZfKopE6EY8FQ3rFiZHipziADchLLXdx5FfhzQSQGdbtp1SBJR",
  "key14": "2Lm3dCyVgtz76akuBcuEPkHHkgVNhhqnNP34natpFMTSa3AzV2n728YtFGpUm3YsZufa8ZrzWaHvv59jjAz37oeJ",
  "key15": "5qGMjT77CNHwHM8NkoEpcY8urGDrGkRgsSVNEpu67pdf7MHrHRFTLZtEk7TujfzJjyXoPFnY5YSFFQLKAtZwis9L",
  "key16": "544MbzBuwHfZeD6Y7rzU8zof3FzAKtCM42YhhsuZ3Z3Wp3PQdFoMkU55Ye7ZCYaMxKqyD8mJziLYc66KVVgGLh3W",
  "key17": "5Si93uzSSzwEXXqG4EEonZ8ktr46KvrPwZQ37KGQZzT5eE1XMbAfB3BBCu9gXzU8rw82G9DM9JLiEP7ZLV55RibQ",
  "key18": "5dtqHxsozT3Tp8soy9dosTRyqdgBXUavbYbws8137jie7bajT6ABB8EohSTN2EgzpP1jvXnxBALgDbmVpDKZ7bce",
  "key19": "43Zpbsph3VwL7HtfEom8zLYtBRNaJd1UNTA24PjoPDmnKvAxYJ2C48F1VUFfAS9pPBamTSHXcqef1qn8AjrnKSWp",
  "key20": "5HdU6nidb7h6ta1K5G7i8NPu3oTQHJzVUXLCc3856eBhyQq2yzafjcRBNcDC4M3yMfeuBRogJz22PXJnxUNVtCzR",
  "key21": "3X2SdTJmaFhSFoup3S8QWL5asgguVKET171fj3yc8tHx23FtwFa5GZSAxBijrhJe2jZ4f1YME52jDPRTiCjUCfJV",
  "key22": "29UaC4D4mq4iKz337eHHunTt2S2oSn3HnH2N28JsVG7TsHwocxrzuWwXcettgq2JzKcPUfDgdEdR9ct8fj1WiR5C",
  "key23": "5HTKfrEgP71xofCwW7KGnL2quGVsSmT8BDceyEwHxyKBwpZgWRjCz8NUttjcD8oHLWwGQVJsvZiJ2wUmCkJuD2p2",
  "key24": "7DXwVEzdSY4EBU11vqFRiqSV4BBbKdgwwHASp5GwtSPAB76P7VYzryVM4gWcmPhUH9oPqxfkeDQFXRnWJSyo25b",
  "key25": "3picrPzNWnAua7kAxHHYVGYWyKtWpqPf2Xf6kvYn4czrvTsXzphHr3PToESQS3qzU41T3gSuxMSepJ8cfbDs6e2V",
  "key26": "iZ85JR2FL3bFEHc5BtShtabbi9XtbJoiEoeBiFDqcZEooFiFUtdwDTSwtLRDHjVbuRqFKo7VBrkGt5aFJC7RWtJ",
  "key27": "57d8F5af9CmLiW21stygFrcQjNUZp66EnB2yiqeJakMm1w98C4tuBV5PKgTWuGGqBw5CWxGnUDF2V5gLivZwWHgN",
  "key28": "5EXWZBzreDnnaX1Nk4zqG5uku7oZniyYGQ6dHt7pZXZMKAjoEkgMF71YVzRmr6WbqS4C7FbPQsvZ3w2Z9h9WB8nQ",
  "key29": "252V6dS4P72GPWG2SzQsFBkQLsYLcBpRNd6r1WcD4irk8jbRjVpriSf79TF28Xzt4Yp7U9nyo4BDQ3YrtFpevobJ",
  "key30": "4KLQW2aZAGWwRyGLGPks7CCYM5SnxYbg9AgnS1h2s2BkXtHgVG6XcigbzkvxvxiKWKUuLS8hH8JXNoerkLPoPppc",
  "key31": "3WEnprByLJdybUhEoMXqd7XkJMnfbTiw7JngNkfyUAf1bsepnr3hAdizmSHF9rMQ3jpyBe8noxtFnDxhgvDBrrXQ",
  "key32": "4sdYZKqQRxBHBBMgQVpNb5mu8V4HcMhaGZhAmiiwSHcC1wdFSDoo2hRixptLVoecyLTKubebWD5Qwfz8jsQTm17F",
  "key33": "2Hw9E9YZAZbJd2b45EuKFe8XeJu4g4TgdipSPXseq47kgT2NkwDD1ozN4cLHSmoKs2TPfKPVjj5F5BHhJSWhXqhx",
  "key34": "3C4GTcgqV1KeKiqYG2h8vTmDqo11bFwZJ6Y2mzEDSovkKp35J6pLS7CeUW2HVSqJvWV8i3yWZkivKVX4odW6QKLM",
  "key35": "4sHuzzSM6NHuN4Wm8tWktG4EqNXbRUaEqRzDSTpaTSD6Zo85DBQrVJ4Uzijf8A2u2zPAbM9Fm3mSd2ytBxgkcaMm",
  "key36": "5yVroHdGR52XuKiQGfPBtxi1aNSCZq7HLECWrr7dn7iXVT489kUUT4yBwDcMETJECF7AaxFpEgdwcZ6CUTP3W7Vc",
  "key37": "22iEn7Xz1Gk6Zy2TYsqPkBaHp1xttDc9aZdy4kwSH42ijZjLPFtcDh2yoyVt7k8mLZM9p1QJeXjE3gt2wN5np3fQ",
  "key38": "2zirea1YACtSimyTVyVwQyWvLHtovZeGNv1D6z5cJ7ixb6h944K6zSgYRhR99P23iuqnmM9eSv6369E6uk62oMsx",
  "key39": "31WYEosZaLxY8bonviN87TRPx1aTo4a1oiupcuFq8A672i72ScBVUzpTNdrdJFEsidULDGtZ1TFg7Q9ohkNqKFYg",
  "key40": "2DAXL546QmhP6sbb6RqFYjFvFEjCSz4q9v88d4JPw9NKK6Z7AnKeJB8RUn6XymZBjb9LeUbkoi75L5yt8MdqCZDf",
  "key41": "4ve7ZTQtBrtmo245v3XeBkmS5LqnnXXyC8ZEnVnuD9Wy4ESRbU8B4SHLVbDywYNnovh3FZ94WWgiBCV3Ex2r7Gc",
  "key42": "21FvWUsJZzQj6WNrb1u9KzqoA5myriXsT733fGws8wvnUK9TLQmuD7BZwt15uyx4Yb5SqkFpmgQdBww9xJYMmpw5"
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
