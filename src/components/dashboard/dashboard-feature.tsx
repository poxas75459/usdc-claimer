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
    "xRZsCQiS9oeZMfJz8XsuPQzKCNgfM8oyCLdtUBhP4gg7agDBYE7kT3tMyPryw1cp6RyZkiDFL3QQbq7ixbZ8JtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w6XGjFrHd5V9g1b5FAf3RjJwZZtJZeeqwo4a4W1mkvh2RC7wfw7Eptban81wbKkT94FqDqmG45h3cp3UqkrKm55",
  "key1": "3V5rxPXTLkdvvy8wb1qf6pcADRqTYk3THhkejJdr6JZ1ndk4WCy9LtjyMNb2AdNaSbBb3YQAVwENUGhBsbK9cj5E",
  "key2": "2sxcdTPT3PMrDcHDDjqhj9bFcRAByWbro5Br64iiCbyGroBDXp9pCZ9wVDVuPqd2dG3p8gDT3Rgv4XZ8C8hA4jkm",
  "key3": "579gNG8HksoskNbvB8tFc8sPoCoDp1whMfXjZRhnTxeoJ9mxe2CDvZj6a6qpZjUW3sHtYo7BHKH9VofJZZCCswmD",
  "key4": "3Hfdi1yL6XGRA6hcnVCJSsLzgi36qhoogANxPTRys3Qj93NhSimjh26HnQW7NJn8WKNUFpDhQiLDGTvSZqFCBLS6",
  "key5": "fSqJKieVuWufoB74o6RhKmggM2SoHarFNkxPhx2e8ydfn2qPk5iK6AvroSM234b3sujrf9Z8yhQ2WjahaPghCBn",
  "key6": "5owYneDRNkftBKvqvntheMhnfpoqhHBf2aSgq3RvqCtotNbUmBPoD3uzynmsdfyiAJcYYcy1fbHcYW3EYLcyQBTd",
  "key7": "21konVqHSA3x2k3TApkQG9eDwRRXW1HfmuTTUCwKsCbZs91wYP7MTDqwqJsD7yDnhtjnXUQS5Ju2aEVvAYSEbMEo",
  "key8": "dBnnyXRzCcuvzvJHykquAmNZCAiTa3HTzENZau8KxkeLERV5dtuGwgT9Qyqq1CaGFUzjrfwQzG28Fbg5H5QFQ79",
  "key9": "37qtBRTTPWtTj6VActs1hsevK7ZZvq1bRc5uv775w5wK4tsojJPznpWBfRtJ1ikvwjv5PHyP4MMv7QT6qPDdq53t",
  "key10": "4Rivtka9RWkjqTS8GurDHC4Dm9HRBUTegTp76dDADeWiMjGQwB7mqeGjVCehq5n9aCKKkZXkvzk25uCBrJBJh4CU",
  "key11": "2ZwZKMVx3S5sh678p8qQV994XvqTxfj6PjrLshKC6jPoHYetvABvkQ7qKVr6PmTVm4YjxFHxf6eJCxtftrJcqZZF",
  "key12": "2ySWUMuUKdVuZog1MryVVrcsdFHm5X9j1o9bPw8n7jrkNLe4kYPH22oVezr1jSCttpF5nkjUc2mJjLzLbnbXWCzy",
  "key13": "41Usuc3ndLjeZmWYUvwwS1yC8w1YxZ1wUZp56q7U3Hs5wRXpts6zmxSJi65PnWeqgZyFwP2DRmiy7AsMAMN9GaQY",
  "key14": "4pX49zd38J7CyScAtjqpihf9FD6LLZv9hpGS7a3bWXLHuszt37F7hYKLWpffHkR9VBMgC1y1tDDE1w2exdfpjDp5",
  "key15": "3SZrMBSPmqo9ufC7EtYKMqNJ9zAMMHeipruCitcwoGL3U5AMnczSgJYQsZmth1DPJa53h9AjvoLmxJ9kzTmFn1w",
  "key16": "2fp9JrLDjKomZRtyuXoKNapkXNNDn2xMCSJ2kZQdQQQqFUV3KTBHKrFBhiaqR48XQNGkYx3ZimNZfqfhjvdTvUve",
  "key17": "3mcQe824uXwTrWjYWJZSHzKQkqvXC8h38SzK8VZ5KoRnEijhyPnuUmZ3R7u1weyG4DDh4VB6wm9xbSSN5JWfihg4",
  "key18": "3yY9imAZ6NRZeNQisv2UBtTgGpgujxvXqyFT4iaDWP2oyTkuhmDL7Msfm3i3aEcTV8mc95AGdAXNGuhw5vYqBvoP",
  "key19": "2gAZe5CSMuoQg7Bh5dYM9xwc1GhUTjWWaRcmaeLTvJCdFSqwEAAesjExJdb3MEPWCPiA8tYny5HBYt7j4cxnXdCq",
  "key20": "4m9You3qvXArkX62dpkJwYWMQ4pG7G1EMvet2n9oUtHoYUK8JwnVyig9FJZ9hpqTc7EVF4JSFDQxA1mihk5BpsAs",
  "key21": "3Ye2BShNe2RJbed2XUbFzkfhe2eAuMmRqzbacGXtnjFaAtfHxfLnN5WqtjTP2kpEFUcVH1d9PGXbrwqEEbe2R5Yr",
  "key22": "zMnFNPFi7A74sSW7JbQCo5oF3roi62XzVJKvDvDLRZ5d5YXgxmd2ytKSbeQ4bwkgYtiK9JavHKrefkBqkLq6FFx",
  "key23": "qsPfnWkAG37NccmnTJBGUBGhPi2EEDD5gWZT98gaMXwFZihn5BDtRxw5uYoAQbxAEBApUHnaigAA14VtTQZ5bsB",
  "key24": "5WXxJRA71RouFgiWDcXVK59E2GBAntf4VBrjVzFnKzNSz5KvAJF6crzacedm8w4hQ4onttaj3k2UsgS6r1Xw3sSr",
  "key25": "25XPXCQRL6KG2brcGtJB3aJFsDT44Jym8y4kPs4MT36Kmvvp9VYjmUW8k114KUMBVJ9Dh6SJ6SBF9YoppnBpZn67",
  "key26": "2rQv19bJdGMBXWxgJNkAr2HJxsZK4kh4BCnjSRDp6wWaQof4NWcoN5G2NuDK432PDPUBxJRheczmoPb7VBzK8jfx",
  "key27": "23XskzMjGLSLyf2tk5nf2WK64CGBifgQ6L5pD7szBpaspsn5RoYQqa39QfZbwJcgqtHJhXv8adaecYd55Yqxt3he",
  "key28": "4A1unfBtosGrGsUhLaEFiDrw6GDPhfAJyE9xTN8pUvJ4tdv46eKDtRzqhrjQWwF5ajRZXkaaH8W8kr5bDTsZ6LMq",
  "key29": "4Dx5HKvDGkv7uqk7gYPiRtRQJAJLvwh7z8vpLcwWHSpJQ6WSyTCttqyb9xTCHveK8TEx3qntxm1mmmZkuhhbSvsf",
  "key30": "3aXWsDQBnSb7iKmnYz5n2khNhzvgtEEQCQr2UzzHDGR7WJdDmk2YhogUg8CDexBNJ4GyCW72dHwEfBu1fyfUC7Y1",
  "key31": "R9YbYfFhN131cMFbSmwZcXvxGYVfJmDnyoK1FEbJnkd5Mji893ads3Mt8J3DjNyN35u9xC6ckGwFnfiQwZGAPH3",
  "key32": "519dgwfsZ763YWC2ucVTHDBJn5hD5ENMJvBH32V6RjqzPcdqj6EknQ5p2JnA87Uak7qDmpGcPGK8rWECWi9UgfkE",
  "key33": "4fFYcCiqYGsHontGyNHGsMoqVAykHJxTFRJdEjfqqqp2uaCEErjzh2qRYXTzdWbWfkwGNN285tt8WnVUXwk8Z3Nk",
  "key34": "2iLwmNuqNYL8L2soQ2y99ua5QWfsBoF3TSrXQwTprAZzkEcCrmsgSfvdVia9JqCjnHawZRt7nTgMua2WR9AM9THK",
  "key35": "2Japwz9dTVHUXgMEupU274SSYDnWhztiQ2aVbW4usxGwyUbrhdg7WippvHYZEoNwdPShndrbKJ9QPhf6uhjoBj7v",
  "key36": "3fpLbatjJDATG9ggvtFyYbasMrr8oTSVo8DjxBJDpX8r5u6bbyj2phiEfhzms1hTDWjKZMG84JwwUyFdqP4c3K9o",
  "key37": "2uh5RKhxezcvrZrxJMtiaU8Y1zQuBdn8Lpqv5E17qywuWSuEa8S14N7DtWLTKHwMy419We4RKc8aB2Z151xkZoju",
  "key38": "UJ1A8Z7Nx167kHLXsARs6uyUMf7S8bAPGDv167H3iwg9heeCPK5CLeXKfG1mbbE1ZNQPb8FDPDPX9FbdYd9QNbE",
  "key39": "42N7onE45hUsbpS5m7hPmm6RhvnauZVyVCoua8HDJRUZDgsG4R78H25jP7ZMBrQzfFwPVLxGmSaqJFeEGmq14ZEq"
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
