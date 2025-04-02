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
    "2DgPLXQA4UJ5Z8pbJY4ftYgofrcrd7wCdFbfyqSYbmPnTXfvrNLuE6BbYnDKoxeoCrTWqzvpiGUp4Zps7CyZfkFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHe1hRUwtBPyXWiFiam7TyNymLECKFKFKKxmdSRZCpsbS55jnroHy44RdSkhCysUSuv1DNjXr3eDQur8rkNNv3X",
  "key1": "5VtZEmcu8uGPwh4joPyhgixffWuy65AQo7kBMEQ6chjnUvWFc5yfQAG8jXTjZN16imiSFwGoFJki5GSyC2jBVwtR",
  "key2": "3XByMBPfBt4EY4M2ZpRjVq75wGKnTb3E9PmD3XF9nkAzd6oqCEWksTWeTLRdwp8uyR7VVhiFYMX4oGQBpeeC6oBK",
  "key3": "5aW3CNKHsb21DLeDXWQRYAJWVxoFcSZ1KRYfAFRxsBAXogVqTpqEMRDeQyufyKJfovedh8nTpP5NbHhB6WxzE1yM",
  "key4": "4C31iC48UXrGxNLT5jmaVqU14oCfsnSTdko2JCtoUknHE6vSYcCdRhWgXuWpnFE45eP6Kjqybps4ggXwo3oHbuZH",
  "key5": "5ffefmTwPCmFH5cStfqYkGCDWg7jKuJWuJnU2YAhVTtFEoqgR88BzAWKY36y2xRovdUxNaf75h3UjHHXEtNYqFSk",
  "key6": "5D9en5YpiZsz5Dnq7YCF9rsuqPBWEQSoVL6mnjMB3pJq7DhDoNBxYowU7CaM7NDn6oCktQ5NUNNtYHQkaAdAsTJh",
  "key7": "4Brh5rtjBeCqTX9wuRcAt69zuanwsAc2Pr4mnRM7AGgCzKWPRUgwmGRRZV89GDnyoVBmKAvzVb8wfhRkKhaQtweb",
  "key8": "4TTrQgLY9tyECz9ohMFvPGo2xTcvwniXHb7XC8ScKBEtUHaQ9D2qvyrMjxN8ttQaF6WcR9V9pxBuugpb3gdaVDQc",
  "key9": "3dmWBy2Gk8D5uLhwbe9t2kaiS4QAHgmQ8hhkkanKkETFyMhFV5TcZR1bjBP3cMdHKfAHpDEwGtkRHNsEiW6CSreA",
  "key10": "SpeCDyGzhesWEqCcAQ34RLqBFipBnsMDofNkYA4EGHHw1nmMVDQ56cpY752wGZzCgqjLoqJWbZXmhYyyyAUa7rM",
  "key11": "tk6CjffCZHpASQoRMMux3FsnFCyp4F7WbVBgte9xvFqcbaqkqobCkh7PYYCGx6mVwqecC43Cqnoy2B89koFR52R",
  "key12": "e9MJQmdakvDTM2d1vF7Nd5on7n9PDigXkcdaUPys2QBSmpTt2EXREcnkLujrCrdzYgxjGVNEUfC53mwY3Cq35fA",
  "key13": "3EEdy26WLHNgn76xLA62NQhkGKbbZ9p7iKKt95XyG9sxdJ4nYf9B2LnZFypZQu14AqKwBypVWdUPDoZTWGjqzriY",
  "key14": "4oTfGB5VkrCDgY9CiLnbARA8yxTt4T8kw1L7hXEvi9JfMyRSNHuRqdoWMcs5bwDR6a2A2V3rFDue6rfvyV241AEd",
  "key15": "4d1nNyMyCtZugGataTChXELQHW7bkiGcijUDd6xSo9okUHrJiDdGLcE4oPxktf4UKSAEHQoMBcxZgoKboZTsAr16",
  "key16": "74U2aeDaFs2FYSVBcLJun28asTt6wQKMQ3qt3VQxwtwX5UTy3A6SvYsk773NsGDM5xmPvdzcWA1EVUnUAgNHakS",
  "key17": "4aioKjP8DAfyWizhmBkHgLt6hHKpUwj3o83dHcuKG5eZgbPmBLMGBbqDwVVeskguwfppXqaHad6gyeMHgcBiuTxp",
  "key18": "5mnGGqHUNxrGe1p4AQL7eFZkKtouPJhmobCmJAeUWcLZ43cmQ2wEFGazrWYodJYHB6hA68vbC4XFWq1agLuzUcso",
  "key19": "4rRnjLkHzMzFg9r175DnZ6abj4sehYqrgoP1q5Q98ruU8FArmuVuZCrv69noiV1DGpjUppU1KLmkBFsgbGBmLCVp",
  "key20": "4bNxSSWGD4GFGBcYzdmrjkg9wGPzuYVjufXxVzwSrAKXLnW6si6WKiqgLvFREg785jHCPXka5UoiEhxKPp8JV3fL",
  "key21": "3vWTf8Er8m6jqnGknpjrDxNHnYCdvQevGfW8RZ7CFfVvwLqy2iAG6KarYb4RNt7ZthAaS9e6Pwg9cerPFwj5AJiq",
  "key22": "5LZyJ51wnbbcF7ozWFpwPmhXrcVQP9S5cUhWYWYFv76WdzpTB7jVyLuPdHDJZ7eyit7TPQ7FVf6ceu6GRy3riSUj",
  "key23": "WRYHq7MdASHA3M6iQRKrtnq2UPkWuaGUstNTWMfGgz2nGBtGH9rovVCo8mjveYzZbkZcViVepenEbMywk6uzvoy",
  "key24": "561KWtsFrWhhTp5LaXEBJCYrHcZyiZnVqfjHHRLXQSVRvXxZ1gQ58JLiMGrmknG4RdDmZoxkAyfcxQZ5a8bTqKMq",
  "key25": "3VtsnsdobZ1CcVQ93GJk5qrdnxYp5wDQuHp3ysiAR4JLDoWDL9jobyJHRB8AzjEGZESXNE8HAzhR2Qi8BnipgoSk",
  "key26": "3Wqqikie23uYTD6QYdQ1zN3T3qRZLhvYKfxyHZxkYhHFdCzMbvEKrcqS32hgV8hzcGxctdj1pQFerCwpyarveW3L",
  "key27": "4vsdGY65vMJ4Vpi5wMoEaiCrq6ZWHAh2Dui2VP8Hr4GpR5vx8cDyaGmCHxCQV2kU5QN5GQktSCip96gv1rU8QibJ",
  "key28": "2R4ybZ6VeLM9A5TCMo9aJGo7YpSqqw9CafxAZWLQsKfT1VM73jnUo1UG9Tu44BLM5Kyz57SoDbJR9GscH5T68TKD",
  "key29": "5kyUfzQMRuCdtXgxH4F2kcSWbECUZa331kFghanmx2He9oPRejjJ4Dd9MHv6yav2wK7LFBgAEdZ4siVfjEfHJvad",
  "key30": "3RpPk8SFoWmE5BcGjhLWmX7eDT8CfGVQuLsnNQfH7rCQtyVMbX1GtZwtPjjqJkGwxtZwebwf5mWBX324MkPBdvP1",
  "key31": "5UbrpnbBKDcSKVHyFn7poZFGefjftQsZGZ97wQS93ie7N6hm7ZzhrmNd1JD5zgvLjm64BAbWNrfNWuPg8oAH6BXN",
  "key32": "5HMkCKnyibfUyrWedMSwQPQTnhiuLztmaq9NCpjHHJN1jF1inQFUBS5jXdAdDHnZimCK4feRJnciGUFfHqdUMEXi",
  "key33": "31fFygq2TbR4FjsvDREHb2Xq8QzCJ11SeYJerRkSnwsyz6YD5otRCT8BZJCGEfHL3mEEvAv7umPXLjdfYEW9cVyS",
  "key34": "646qYYRkquoTVXzPCpw5t1eK7pJ98SwkEeV537zTB4hfDryN6sJRLtGQ8Y3itTby2VkWqFGADpt7WQejDmxvex6Y",
  "key35": "2nh32YWwtqv1kxxkzGND9wPtKTJ5yAftUGiypPB4XzkRVWELnh6zmLXbXvv5cM4iguMnTV2YCupEPYPtgQvPLjS4",
  "key36": "i2ntkvX8yeKxHm8HCiB1K28CfSYVRgxpPRrue1eo7XYWZWUrf7VArBzeu5N9MANTymfwBSekWpo65fvXLV9zgrz"
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
