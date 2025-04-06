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
    "3ETSPA72dmW5AA46tMFfCztqHLfiRVAQKaFqwYDFH7MjLkwy8m3ierY6VLvBg8gn2wTU4dLeL6oZnknxKKNqE7Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SiiperXwLwKa3MVdXpT4y4NNBuehvY3CU3kNPmcqDxsD8YZVqfjpoJJS6xc1XZZZbVqWxF7s8KvG5H6DwD7ARyf",
  "key1": "2vwbZG5eEh4Eu5J2kTDG5DoF2wQvqwSvBqzFsfewwGwcxgRnG3fDMZ5BrUV49D6Suu281YDZ7trne528FW5eNTLh",
  "key2": "bZVe8uB16oF3PmFdMnjbcLzgZ7iKeS4oz8fwgwWTjune7vvqEzw4oVUvTpdzmUQ7Egibi7YBK3AQ6t2dF1Eq6Cj",
  "key3": "3gbUrHBroVHZ9avKmiWCEL3erTaxx7QSp8VmfcAcd7Pp3MRrij58CSdbirJdHpjk5UUWiHpJdcNo1JZxJwMUEmEV",
  "key4": "5pQavVYfUCMuwpXb3Scgz57bVrjxmSj3c5DVHwWUJYsQjMcPc3F9M313n9nhQ9C7VnhSdwx5JivTb97CkVagSN8X",
  "key5": "4NUEyqfM7RbEnhSyUBth6LswDUPvx8iLeNnGmN18saJwxq5uGPfcEN3fbmH1e9kuGeuVAW5g3Rgrv3nP9Y1VE9Y8",
  "key6": "2oNRG2YYwnMkvbsw77yJMeyoF5gCbdvCJ1tTF2HNVxDdwBXuucPFxmZ1o7a5QyY2x9ohzv3U7JSqYSMqdHdNbTJ4",
  "key7": "XSZWzurT2z12TvZmJZjXgF5fyxgH2kEb9uTWcjo7w3YaGGqgN1GBbztSkfDBpwMF4kguDx8byQpxYavtdkEZYpG",
  "key8": "2QgxKT2ySfWjjwpibduPEnVEjJQwjVwKFF17EyiNuWqCBeqi7TdkEfVprP3zkX4cJbv4uwsE1h7sB1bpBdTu3eq5",
  "key9": "KxbhDrBuUJe3j1uR2XC94VyE9Ae4ou3hRQqZrnj42f4LdAx3sfkrCYhchQyxZb2bXMF1MyTk7f65XRL3Wc5cdCB",
  "key10": "3yZ2DGkkS2hHLEZiX7TdTePjWFEJyyTPnZ4kaAVsmrvM6gaAjdg2DccUG3WbNPq1R7WBUHDisu2gQ4psKFM13NL1",
  "key11": "nDG5c2c8diFRH8DECHA9q8WpGnhVRJ7Kvkc519bfKUxvwAYUi531SAvtLNMzQGmgkZVXBg7mwNG3Y2QYXbWsMsS",
  "key12": "4PPPTiri1ynfbkwTUasQnMJk3LLZtvr18nxio37Eez9Gvzf8mfoQ5ELpFHRXnSe3dkSpbQAgF6ko8nEKSijGk5u5",
  "key13": "2uZZQpyKqGqsc1VFgr2iFP9iJRgZXGhwoKS8riYXWYrm4fttsYSyoYXUusQK3LumbC1zjjFFbC1Z2UGY7TAxp6Ye",
  "key14": "3iqCgyCyeCheRu8WzvShYqfYUMVsfYT6e4MeEMXW1oj1kE2kEVbAVCRWv3QafgsJy7Y2swnyfyEFRkv8yLko1wTr",
  "key15": "4JW2S9nSMaevPyZwBs8UaUi9HR3Ucxw7NGzEebiWjFKs4YKLEdCAHCSuE3vXLHuGaBTwYz62cCo8jJC89XfRSFvW",
  "key16": "5sX2wu6jcTi9GgPhhGu771Y1osnpUQSHyEYHkkbfhCjHbQ7eLkYXAJVygzWehThdssaY1dPzMytSrHpXXsiGKuFg",
  "key17": "5wnhV1eJjjZ2C1n2fWdHiRdjM6rET8YJGx2JQ7NLEZ6omvhTZ378gFvT1wo9YbQjX93FZi75JAsvhhy5sWXXPzst",
  "key18": "58G4AQ3B4NPzybrRv3bRQ2rkqzvKb8GzdrFq4AdriKRzdBASujyMZjE8hRUsWeR2uaf4U5Eu49sHc1dcad28m7dF",
  "key19": "2LNDnJtxPQqTqspzbqDMsUeYkyXm8TjqTDy1R3ptUe6LBa13kYbdtuB1Cu3ZifWfHgRAriR3VmP9NyEiW1cYGjDy",
  "key20": "K4suWAyvyYFinxbbQ9BrVe9i99wBk24yQadBwsMTGtwjmH6TuGXx5peTYnHfAEjGaM8bkwdcJ7EKr19GoswqnaN",
  "key21": "2HHtHvquDsgoWeGmomxGNoznhgHT4VtzAXAoMsHx9xUmg1Ma8CGBdmfFuE1YBPWApaZgQc2ZhfvfayRbqepnstFc",
  "key22": "4G8LUWtBZf69XEogKcWC6phVyatCJwfDSdJqmScHTEHTZE3JJhU6WxrRShTJozmFYQzWzrBHLUnqnGU4NW7DZ5FZ",
  "key23": "3j8iYjjTbiav8HVGhZDDcyM98tjqLyrnzGxi9S8mvCjC7q14oFn6YcfrRpooWhuJcdZix2urLpCsypCgsWn4YaM8",
  "key24": "3G5yesA47pZhCRNhduq61Ar7otakpCQP7vyNdUtsGYmX2BQkUFat9PiebupQfvL75MCyL7eAc4a6gGAoWXiHvoAr",
  "key25": "5kKFxZvcRV3a5Vr7kojs2m1WDY6U5AqiQgB6JXNismtAT8CNfre2fj4Qzq9j68hw77TS3o4WyNodBkTmCvfbdCED",
  "key26": "5CcXQ8Gd2waGTEwELweq5WRPtJYphS94DHpJPVMbbrBAY6Yqk7g4aH9yKmvLY8McBhi4vdsKeaELHguxaRjj6FJa",
  "key27": "4V55hYiM93kw8Wd7vv9wjTN56JKk7EpBMGGXigEQYP6fXEq9afz3zC4gv25v3MpDXEjtVQ5yGTXpLTmkdTEtdC9W",
  "key28": "2VoEkpn6R1dEp4NJ4dHQYgDF1FzcBQY2nrmwWB1pph9h6a6zgxfD14WLi66xwQK7GYPx8Bt9BpJeHyz5e9sqSFhx",
  "key29": "4KLWfbCR7tVW9uVP7KY9Fq1j7mdUxEsVf47ruwa9AcCgYRaJEZ7Vcm9ixGoNrHSkXz8NVksjVRKcvbbtWJrYP3KM",
  "key30": "3n1R92cX4K6P4zWTacLY1sxmjecEL6RUMvoNam2biBh1PWdAFPx2HsrKbd6QAQ7Mea42rY6wMQpYKeskSu8eJoho",
  "key31": "2271LkQJ6ZJB2YxKzh94A6VF8mkoxXoGqKRjx5vw7DWRvjyxriFP3h1FWDLVJUcDYW4zaSymsbRLuNVXFc1htvSM",
  "key32": "3Uq39dv8vWUma6fAeQ6ZuSzEtTpCFawbKwpyrugsiku6X1KuEW67DJkdLs8W1i5BR8aaB1aATiYfVzFTJMhte7DC",
  "key33": "2kmV4JcVVgQniyD2QRtUfQRFwFx9nWKsKVsoC5cVnFRdQrPqfAKGHKXpBJtVMB1bZHccEWxM1MkmBBrX7uLsh6sQ",
  "key34": "2arankBTz8s7n8UUXpLStpExmHV3N8tvSFkvuGq7FJFScwa8BVTP72J9jq882jJTSQvWTyRubN1TxnmYxH7LtPTj",
  "key35": "4d5Lnja9vQVQQDCvmqDzZEBYYy7MN26mv3jTwJm3yGt8PDN4yoXQgphv8W2wbA8REQW1xgxoysMNN4kDvWMHWhLo",
  "key36": "5UPddyXEJVxJzQ5HkMpfQB3TS5Jn5VCHNWeMeLyngGDiftSj2sXCYwGKoevkzx8zTYgsqDXWihoBkXi1PR5tAxzQ",
  "key37": "26RrZ6w6w4cLWQHBm9mmJSGH5aaeuWXkjX5JZMNjsR3UHsLsE3M32LvmHeLqPrm85tPwYT85KBNoCDMdiW8tmH3M",
  "key38": "3YYEKzV8pa9QHb4fZJ8fnXqyHvVkg7pFYeocWmuja6fkkx4kkhH7xAHcLDRUSA8iR5uebvUzDaPybtdz3mZC6vuX",
  "key39": "3NEybezoWE3q39L6ihep56WZ5gAuvBk8FdWrGrXZ83KxLKiTLNZaQHTi7FYC5hWE91MLzgBmPs6RtTdZ5gSY6UN8",
  "key40": "5qvCe8hXcNoo9xrTnSFCnzWGF8NBAp4tX9rPYZfk6kiNQJQxNXoPvucFhHo9NHqwQ41i371435vZ172A8uYx1Cbn",
  "key41": "3ao8BqJWNLtnPMbyd9xU4c3tcKGPN8b4QaiduGkUkf2r5digcSPMLq8grRqprZjhATsHkkp7dYZM8pFZTC5BSpCz",
  "key42": "5JFvSKvNijmY4WAQn9UNFoHPHQewYDx2ifTJxzUooccuebnaJYoU2T5Bnoz7eDsvb27zs6HLqRQZzn3b52YfsytG",
  "key43": "4fUs9oVsDciXmYPywoUyiAQwGqEc7UU2NT1zWBBbXBJN2XkR378PmazQ1HFNzBZAAvsTdRVrjhL8EfphqsMsZWdj",
  "key44": "3hRcq7u5tE21m2B9vZHDVoap9zAgy8tZAyYnszAtgmspk9UQWmbqBuKKMQyZzsu8HZsNCv98dnjRYV3o2Nzc8Dge",
  "key45": "4moJqGgacJC2qKtbkhsAEnXdNw6TM1NAyJBUzUzu3iXPJWY6qz5PUUqt5z7Kw7oFHuHChtpZTn5YGkp7bsHiiQ3n",
  "key46": "5FkUQodAHE1kxwswg1AHxjjnsTMjUmsNHFekD8v8x9xdJhSYfXnEfCih7YGMveiZyzyrKjfcQ4EC21dHq3LmgpuT",
  "key47": "Sbu3TfjfqF91qzWXQ7XZaRHMush5Qb1gdtvifpvbvWocjaGDVWyjMTKJwf9Kz1LYSDVdqKFcPDv5zeCDmJnZXb4"
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
