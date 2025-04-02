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
    "4Hhb2eJEpjoisH9GhnJUTTwDoRFHPv5yeqdq4kU8kh2VR41VHumYdnHu4KxmPDpLWGUDBeLHeEo7M3PR8jQvHPgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262wR1gtD6ztacJ8CiGXGkHXLuF52HrxgEfZrctEx2ruf86oLv9ue29p9wbc1nJ7tw2oMWvcVbyLEoXDMf4MDHdf",
  "key1": "49zcdRvsmuUrRFb3qSzD1JpuH1wqkSCTwWMiCpCU1cJnGZ7cUHi2sBQAxLSsUgTB8N2TCmTpS7wkuNCKw7HvixsR",
  "key2": "5iam3RF4VfJELknLb8YTLtDX611SFVM5q6F4ESgLi8GZKrCarJkkqMZ3m9Wi3kraTZqhgQ8Ju3mqtfE7536QGZHL",
  "key3": "2trkqQvZebxeuZoCbLjA3snB7YSUZa1xDYgyuccfc4EbVnEcqhJqWAWQ1coUP2wcdovbgzDv9K8kw9paQMxBx5tY",
  "key4": "3uXCvvJUcrnGmvALFwTeLruuATNBpqthXH5JHaykCggFBvoBvd1Pd9o2raxQ2jBxNyQF314xagy9Q6pUsPnD5VSo",
  "key5": "3iP836i7euwXKB3yTTtBtKp4AiFVhLQ3R8VwbTmS9s7BPxmdxqEycuSSjfQJ8Xds59GF2wGhh91R72j8uP5u6eJZ",
  "key6": "4UmxwL1YkmAFfqmnRM6S8MQHYAABvmDjt4SymfEEQXNbxW8cM8GkPt5roAJbgQfybhYHJS5yace7ZfZD7XwWfGPi",
  "key7": "5dibwn7NwW8GXXgNcjKxhNomPVdmEjY2oJ5LTGLEdGtPrj3jwLp4fYNLdB2o25CLMSnsRSyWkAekLSCiRHxr1uxR",
  "key8": "41YEsxfGKFeA54pymWRfS7jUNK5to83nTbDe8Yr4e8dsW49yvaC5d9ehWLE5LpJmA8Fyz9Ri2FdXYhfGzUev3jr6",
  "key9": "5WU1mnWUwxKfHM8h729g266rzFYFwkRKz8xfgT5MY75yaNLBe7ka4uQBWpTDfjBeBThK199uCVZBCK5Z1bHfvXUC",
  "key10": "57drQmCyxHJitGnP1arPJgqSYvq9q6E29zRUd69J1ZSzgo5uoaSrs8XW9FiqsKUtzo22WD3g7a3CNg4ez2eJvhuB",
  "key11": "5dL59QiEPh93LvW61eDTTkqd6HLE3pCwcbxdYi4pbZzNBh3viJXs9vvfAS8WBREGVjPq73GCFsnuCyNkAH6y8sm9",
  "key12": "3GiX5VSpxhSBtw9WYqjFHoBp1hSAqpgf5Jh8iKaD8ugpZAkMzQhpfSXAC6XrufrGdA4mWY9e2X9Zi4B8dgk5xSUS",
  "key13": "3c3axUYAoQjKrKofqVFU3CmM9nrJKo2VJcCDsBcgdttcSg2WyUyqxD6WVxCdpFXBuFsEU32PNcV2pUbvGCZzST3u",
  "key14": "oLySoJW44RPv7C6rehhFwwFNw6rcebVTb1WpYWzoWGmDTjmbWUzmu5uB3Yqz4Psp6kE9DxRMEnEB3zVKqB8oxom",
  "key15": "3vdriwhkzUtxGi5YUfYq5xPWwzV18fNSDQaMLn7xh1xgTANQaSqEXCR2wZ36rkLQ14fGejmn1dVZHgRyQuWhi3Pn",
  "key16": "WZoEjKoPxbHbRwgbZCQRB8HmS7fN3TaSfnWdowJeSk58D5cA1sDkTsGtVsnvazVQScjypbsX7VdM1gBi8hrDvW2",
  "key17": "61K4bqSb4tMCVLAzsj1tV7tVioxNxiNUvs2mzDrimZMZLrjVwE4ZVkMShufPRPQTHBgM4Eq3sk3ceyK8kvirKWkt",
  "key18": "3X5vy4KQuiv9NNNnMBgCBBRVmHwdKyiSyEKXgby3cUCocpgjy1wEaMfdyaZpkycEEuD6xPXXB3NQ9t2vSsCeFk27",
  "key19": "2AuNsAKC4c5vN5msFgDgafn7Ntv1vu4jZ3mKisL7sQYXED7tKUaXVq73HNdDtvd5FjcUZL17CyrbAzDj2xp35kgE",
  "key20": "2ieTvh36RWaWn9KRm2QRq7RKH9A9UfkN7FNAyo1QB2Um4qXtTU34B7VuGwmnhusM6ypn4qrkobaisVThVQvvqnPd",
  "key21": "4xBZp5kFSD34yeEMEX4fCmmXi31bRFHkwGfMf8sP2rT57SPSzuSocdWEeRcBZH5ERHKHsjUS2i9CduZdUtdMBVZC",
  "key22": "3MLBxipqJKYN3rV9KpuXHN6mGwdjkm5S3519FtrQq5qS1VTZxWxWkrRe2XWnUFqq5U9eCYXsPpt8sFCNkionLpyj",
  "key23": "2Co6Rw7jX9QNeR5gdhCLUk8Y6yJpzvugD6ocFBxpgrd8R2ccfnp2u6RSXUTK15wrobyLQrwWzfBfvvF8fWfTCEjP",
  "key24": "4HU1ZxGNtfY1ff9icf3mjLmgEiqERMYAn1qtW62wqiC4zK2UomMaN13xd55Rofoc9V7tF2aaQEeTziAdPVofBwuA",
  "key25": "2cLGce6huv7zNgYXJvYz5Zy8FCFXvXjzmjjueUwrtzEQBpB39Euae3HX61Cmcx9RsE2GdNnKnjAEV8jRj4U9PA5R",
  "key26": "4RAcshL7SFQ6uQpn51gtqoeL4GUziRmoQayks7jiWU2J42EoqcbMkTc7hEuQBQSghpgio3QEgaFLMxaAuDfHBuXt",
  "key27": "5xxdm7FX3wC9VS3di6RitMAVhX1mUiT2Hixr3dixhuY14oVD3VasDoU9CFKT6Nom6krWLyhjtC4ektVgmBJSt28d",
  "key28": "4Z1cwHeXCqfbfsDComkaL6YDo8mDV8iYoEdSgRYK9DU9xc3pSgpU6zFVXAr2CpF26fvQfSfTYJXJGRL3yFdmf2M8",
  "key29": "4DJSc6xcq6i9u5wQKxnip3Ku7RniJsf5EsZreGsjNuFhNbrJK8LdHejTKxsz32fzMrfYGWGT8ddRW7JKogq9NK6P",
  "key30": "4wHrfUENNCezPFyWd3vYw2FZbdXo8kJsYRFPvv8Jx8EqHUHRVkuX2vis7pnEonJ5WjyraMNvtxfNsMqtHn2KwS3g",
  "key31": "4jXP8oxxHqKc9eG4ayqndyQiFtJzCpwHsEXvsEkDxm2QRtTwennHWg1Qn6W21JC5Qm5HJqQKD8uwfSr9AGLkGUJH",
  "key32": "38gUsRtoFWLT3AynvfSpXm8msRL21mTtPb8Xnj8Jq7vG5U7EXjAh4k2u1Kw5ngER1FEFZZMtLSfjuJDorV2dAZCY",
  "key33": "58q2mEdZ4geNSE61CBbj6M2ezS3NKLmyty9dC1ersW1Jj5vPBX6wb3EcexrVPfctRS9d797jqoH9fGXcuV2Fc9MY",
  "key34": "4k97EwFPTCWQ1ed6dTBYnuJoP4cCWpRkfrxjsNeX9rZWfBVdbHarsihotX4CuZNoWqCUGapXoTSPebH7t5YYwvbs",
  "key35": "3F595LVGkp813jCXDkV2v7L7o5qUBdKryuG4C47PHh6s3CSfSRVsggpfdjzohphhGJJKkrNWkQyYnL8pX5WjVYZc",
  "key36": "35iNcVSu5PaH7piK7NiphKVu9W8XQonrHJFfUbbQ6qMpbgbzpAhtiw9SXoNRQPukyPg6JQdXbZboVuEcczYCzbMJ",
  "key37": "2NFfYpNPzhajBtiq8wuvpM5bg5xUYZ45PZRRepALtij58JyAq9cmHi8s61AwFKrrtjKhgYLAbp2Y2CYPJJJNEeaR",
  "key38": "ofH54aMbqVMspbggLinM6qSwn5mbbyS7z7WbXU1dFasLaqAjegevqSUER8N7GgwpzTriLgaTVcWUivu2CQwSBek",
  "key39": "3V3AvTz4qpyfq8iZpPLxvwMekNeET4DGmTPNVBjEKPCUSoyW6fHozAw6Hho3tcqzZJbzvUVhH5Phuc1PUdPat1in",
  "key40": "5hDL4z9XDnGCr47jQ7vJtypsoBY8YNMzY25SePczErqTF2be4xqJR3XFiFd434B2k16TJj53MYCyxrmy8BW91tbb",
  "key41": "3wXNjEjkUWdrzGfWYxeYZ7Wjb5GozvuQi3hdnH1RDLbwYoSqgvUTd8LUcNfF823TyRijX9qsXUPrGzHEcTUdCA5j",
  "key42": "hFvoYXRhZqPh7LYy1LzVdc2hv2y3vBVhyBvueh5UNZNsatfvFBntEk3LQxEemQHJzFevMavQhYRNKcs39LQud2c",
  "key43": "4EZJZmYQ1USMUQvhosoQDDDGkzDqUtxnFoo77LD7gUqyHy4HvCuKzJnWTdZbrndmrvw5RThFSLz4whThrimMyjir",
  "key44": "515zxB1kmbhHyvp58W29Lk6EfwTDaGKuQNnZnia9KmnMP97h7VzS9PE26zaSDXxwpwhFv2U7tGaoU6WLUEQGys9X",
  "key45": "3y2SLWdeDu23hy9NtsGt1KUDWD98gtaHQFF61aVheQ6spBp31zndJHY7XFrsyDAaMgctxP2rPTmHjeEWdBM1fbUa"
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
