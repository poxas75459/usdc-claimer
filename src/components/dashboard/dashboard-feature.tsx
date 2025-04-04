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
    "88A67JrLreHDJyp9pZmCPUvgLMmHQtK41AYtA2pzUn4fbmB94TbTYFpyb8bcxAY4cxGNvXZFjWmsZbZx3SwrvUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PXzpt4MSKTZz3nAkNdBgHAmZV7Z85q5bz4QvWnqeFsWnZE3qZGvXpKCnzT4FSLHGUE8eXmcTECAPDqgTP89yDN",
  "key1": "2eTCvs4SB7UyFvBokUnUdgizJ5jqijrcsT4u38mFT7RKN2rRN9JNRxFqg4VPLpqKaz1QBQwkzP3NBV2oiKAeDeeQ",
  "key2": "35sXU2kdcaEpXyBBgRcUkrVn7nAasa4LnDm2UoEmjT3TwcN2mVK7u1GJCzZN3xTfd8WJ6zZW4LRjCAhuhv8vJ4A7",
  "key3": "4JtVScRcE1J4BXCLgRJfeLDPyrujmkAo4EPhsuGtYiXwAHc3Po1FArpqBMGUe1z6uNfnrQYpfKCwNgxCXFgDNX5k",
  "key4": "39DLJANmfaY3B3exGbLckirrgVwGmVhmr9DUN3LbwepFuLgaSxg1yBA7VBRwfVzJaXNHHTkNx9dK9mcoAE4tfSdj",
  "key5": "4jfMmKunQk7vmCtYUrJyahJpmmFpd32x3EnZXqAFLwmYnzU5XRi3HrPezG7pjdi1zMir3KVACu3dm7Nabc1TpQGc",
  "key6": "2eLRW9mrMiojdKTcHmWkG7naszbxMdyanu9ShoUcooGdFAKidqn1WzkiFA4NjjccqS7nGPuUGMLtCGJtN8AECwXq",
  "key7": "2ckaFsvhuycjYR7qfZnPnKhadQzYn12ifsEwNd4MMgufSWtyBT88WEXR2tmhNKPtRqUk1eaFPCdzmc7r9xn3gbVV",
  "key8": "5AAmPsCRaVDsXMAXbm7xpZVdtW2E7o85ooUPCFtSqMR37hYnrb1xjziY1dAppDjJGj3p8wH5ouXknWKZheGTeFQs",
  "key9": "3eV2KUhRTCic1CeNnUzkX3DAVASgj1hTjNArmZTvugLo7N5YLgtU9PMECoVbLLXQRFYLLHJDM4ZtPRdEY5fjbxvL",
  "key10": "EXh1DjFkRKj9YS2eLZxrKGQmCsnePpYKDLykg7S8JY1mjgVzRhCQ9VtCUThYCRCwfCyu1HRy3qku6zNVkFyssfA",
  "key11": "55ApWW2v8ntbRjvpTev25Xdp3TANk57r2WGm8uNCP7phGxVct8EjfQBhRNA3tT8qtBND32DeymFkbYnhgq7gzVvk",
  "key12": "4ihqM5CLu3Ta9j6AGD4rQdt5dWuqgvGkHNC3rkjfL4fkW4x3XVpQmyrLPnfqvCmyTt1nqXMpziE81XJG9qu1Yiee",
  "key13": "KjkGWJAHePkv4Gm12pXRV18DDhoKdyzdpDwBQsUQj53AQM7GTACnGzffNd6uK5N61T8AsDaGoLBrwG8JVMZqcYA",
  "key14": "239j4u7EYFU43MYfmSUTgpopE8A95sfznZsnB8gqYEQEd9Q635UYZZMCVK6KUJmr2MgUJxWDwjoa2kLpNfpGhwWF",
  "key15": "4zGbUVNkrtKAXsqs82aXoRRc7H4K2rAPea4Du2fwpV5MqNtNcspFowzQ9647Ru1J57jvf1EVp8Ss935TdVxngWAJ",
  "key16": "4msLqN683yfcgLvd1DjY2LA39TGGEFjauY6Wdt8NxYeHAaVqA5xz9en4XC5tBMdPBZDMc8nk5cfz4DxaNeen49a8",
  "key17": "5mS45pg3LBRyvZcKusb9kwRLoc5hgqGtBJqJRRXqQa8qfygXRSQyAzhee3SpJWfmtff9DnHf2x7pAHRgVQCqUL2w",
  "key18": "26Ly5yhNVQktnX4a6y5DpQjV74JBzmzgVGVFwD9Jqwc3SHiGW8uhYkrrSArjbnurDQc4bGU4PXSSBBg3zX8r8oQk",
  "key19": "3SdkpDXAFMamBWYNYM3UU9LZzsd3d636UF37oMWdKCSp3yzbdnsCdTBm3y5ta8BRjxbfNq2924usawnqbx8aoBkB",
  "key20": "5ECrvRU1FaoZJFuHm1qGizVK9MQkgPX9PxifBEAkcVAaTYBm4jRCnN6kxFLPA7op4sXAf8DLBvWMjuFykzMw2K7j",
  "key21": "67ngy6gs22tjfTsenAL4wBiJuSGGErPuAxSAtYHFkZWHKrR9eQFYkHccZnojLLQNvAcr1qejABE6yFzZqYj962ir",
  "key22": "4btV4grZ3BmeQY9gf1X777R453nqr41CdXZ6xSNmn6N99nqZ5WraLbamHTLcf9XDV6xkpdFHpQj8eF5UnRBdB631",
  "key23": "5bBR1kkDnN5pfy7x4NGp5d7QqpjJTmBCAs9jKgXRnHQsA6vvxyhcRVmbYdPREbQCYnj89F4NSvrPJBQpwqoHqDzq",
  "key24": "aSsyTai99wmmxprvKGRaAJ6Q4GzHQ2VeMdMrtcoTVxyna7k9dptJQ3yvJ6gMMnbUEEZzGnYp3Bhatav4rRrdtXd",
  "key25": "246Ytvr2YDNh12RotYiBzDmD3sRFUwddGj8PkdFcAj3uxujKhMGhvy2eU4kZ4EV2TZwxzxZsCmwrL2jCyNzKuXeB",
  "key26": "5JqU6KCvXbS33fMhYnHfEFtiU9GVDe6xRg7qmBsV5tGkxXM84pWH4gLpmAQF4DrwM3vtGL7PiL4SG33bdvBS6pTp",
  "key27": "3SHhuFV159jY6u4syQxQVK3yQYYQx6LcDQ9ax2huANM4qDNcGierztHdLJZvygx5TwZ2zpz2AU6qkHkSMTXq5gWa",
  "key28": "4Xo6DqN5QrZwTChkT1xt6m3R2wXUSEEDFSKjvfUF82zFtdoCdsjGuFBXybznzJ862Ukqyh7zUtoeE7jusc5ENjKB",
  "key29": "32B2sUBvmEfePzRCX43qeD3eLkAd2Tby9MJBaTJFTy7dBRiqsgXtuBhPXffeKGCBxNBHv1nkRELZxyLLoxkW96aU",
  "key30": "3RKbYxejHN2cVvd9cLmKQ2tukaxfkNgzgbz42uKCN9krTr6dZwUVtD3HdFQYaVwqMNWAXyDh5BCwGGb4BmxePNYb",
  "key31": "onR1DjMf4UR5qGmkLMxWRjXhpkPGh56eL4pAoyC97c5F4VjMvKPnefss4ox6z6DdtKjJrbztSU4hdABZ9HFzCDk",
  "key32": "4WQ9JXW2bRMY3C6G2asfi8eR38h1NPMfAqjmBg7YvU6d8Vzy9nJHnGyUSkTCz9G3tgjPtC9BXy68WyaJ127fCJE5",
  "key33": "5cWFT1KKnhvYhrpz4i6w2QsBLWvo1nUvJp59nkTEnaX5SZdsasy7kxfUzY5mYE63fZX78HZishbsAMTYbmwMqTos",
  "key34": "5CwZX6phKXrCg1Boz2FReStaNgW3qfzuPirS2pxpSozhkLstuVFKPAPq7sKQTAm2bu2AuU6H95HuZop5kLBpeVGX",
  "key35": "Nhng3xP8De6G5u4A5KZuyLtyH4Kyx9wvpTPdnrh3WcBFGMcFPXVhyG4EoXtktTgXVx4ZaSwS8qUSTtmGPgGcD8J",
  "key36": "3kSwYfa8G6QE1RadrDaJPQRJV7fyFi4urEmK3KQqokGY2xfKD7t9oKTs3u6CfbMeKsKubaXABeXXFAzNCj23HC9g",
  "key37": "iXatBFySMXE1o1PWtxSZyQR1tzfr5ExsAHkbMp6D3a2Kih6CQbNbnqKu8okjrHxUJzCgQ9VubUeQ7kQjxJnKmeL",
  "key38": "3KTPJ7BiVJ9SwxhomqbXvVw8A3Dh6o1WKkK1U4WmKwnUe8pbhuRSBGsGRBu9yiZDrgpqNw4Wq5wSiTnEmrcmQLdV",
  "key39": "3Rd6aR2tM2kcX1yryxgKLo93eU4ydzzL61UfPBdWJwzkeVpwUHendrkFKBztadVaGVcD8NG3CYbS234ZGeK7KqAU",
  "key40": "4AWc8SFHTKgUg73eZB2zjPmYFGyRoc9ZPYigf5xoTqazbnNF7SCEQHVQ9Vzhgx3Arz3MiaMZzaL3NUuWVqJijbdu",
  "key41": "2nJHx9Zr8KADvLFG6ERsphvsK5da4Pm8XZ8bLs9iBVqmAMMmhsLKhFaJWu4kraLu8vQn9JigB3ZHbhgkpichgpFF",
  "key42": "5RZXakqtjtfLaYzttmNAPcV5Vb8SQncWX94KbMug5c4whNMsBgdqfr1nmJHznEg1afy5pkNQifiYBr9GSSURxJkr",
  "key43": "5TT1Y6G8WmDVj4jgp2juBtdrc9cBvZgVbkV5qFABQvDPiHGup6zGPXoQwLpF372GyMPAKnHRXgGYcpKWSkML1tgn",
  "key44": "4GMGbgWehxHWuCcRUbiJ1JCQFzGuym1Usgm9QWFyhm3yBCVdPPZhm7iJEjZt8EfAGJrpyubasAeBz9TxEzyTwqGy",
  "key45": "3XhaqyqLpQdU8Syqrx8UYpxH8ov6e5GwLvok9Ne11gfWHqgr8x1ZPJ3E3HcankSYFUbfiA1e6LHf9CFSodsPFEfV",
  "key46": "GCDSZUzhcV39m98szb6Knzsukgj1ycvrKfx4EKLrN1NK6hjEBRN9M4Uskn2ZDG3VRU28avHb1vCAzgoMu2GWdJ6",
  "key47": "3mCQvPtvMj1SvmtKSCJi2j2sKSYzMWNo5uHJ8PrgF7b1U1PwXCbW4uzZfT1wM3fKVkcKi1bSaKSpqmyLX13Fmsnp",
  "key48": "3uu5ESFq2kFhU1inYBAcjwDQBFNvrdJxzQbwzPS9kEk9Xcy9cGhjG2RrmXXr94UzDuF6bVw8aV77vDZTft2Vmhv7"
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
