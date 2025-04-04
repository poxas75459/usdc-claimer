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
    "2WSiQL2oXALwR7TGULckCQ7h6hjPfBf1XPmqYVmuaFG6d5b3MPuHHoeXUgoE5maYQAH4AMnnaGPsHg25DpGLqUtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CptYsmi1HPctVNFVKaZMxkHYSEa2QHGhUJCSKXYbyc6b5JPEaSrLkk791Y14AixNFG9RK8VQJeFaSLzG3yVqstS",
  "key1": "2VFzrGpHy5XaPqBRj1x3MTu2iedRHmSin1ZNiD8DCCgixbtyKwtkfEqB7Zyk4HM8dMsrvat3aDeSvaXcVg4wT4Yg",
  "key2": "5mUW8Ft94QYRXjBQBvnWmR5hyADgsnvweQ9W65tfLa4yupjtcBHLkJ83weGXqBc2AbWAmzcjih9qwP7Cxagtygpz",
  "key3": "4ebf4P7RhkMcEbkmo3Y6b2XmqEcs2yE6NSBxHFszMHNBYeNUB7wMBBMGBBD8qkJXjkyxrb7XKvyfBecNkpbLtENC",
  "key4": "TJYWrkjrJCjwwKxeHv53Pj4dMiP9SYjPbypZoCwNzEbQ91oGWshkgaZpR7UQNVgsuQkxmCz9kdyRfh9YktFeCaA",
  "key5": "dEKnYzhjsj8tQwx2R79dp1wct4ftKd5ozPM1XEmQJQ8ixNz4oGseRteTe5MbZDx2j4cmMDEwyNHb2P1WJ6v572E",
  "key6": "5NHiGnfHRja17QKq4E8ZB84hkL7kHdoSbrosuxozKEFn6kpP5HP9a5Dcfyo2UD6MGzFJNefqEp3mz5jBgyQ7i2gd",
  "key7": "4EahmRwkdo9d3NTaiuF8vM3YzEuwVDfW6X1jckL9iRkuGk7Yu1x7o4MD7YnhMhDuvuHxaLyLG42HSsBie1zukdqE",
  "key8": "3j9Nu49UDPRavMMG21j4iezKQncq6fCPXFa5GqxThujohMbuiUQhueHj215zkqrNGbk7d3w54TynqMWz8xjpNk6p",
  "key9": "5tgMaqP336hMzVhzaBKV1LehdxE8rUExx3xCQa9Y38jJkrmySocEUJg6SzuP5s8bk36EAACuQBiXBPHgofvzX8YM",
  "key10": "2bvgrBSCRCwdETGHUrb7SSrz83j1nNDnZ9CwymKhHikgPEv1w5ysjMGRt6XGZqCjrxFMv2meCVxzJKkKuVf4wDGo",
  "key11": "4FEURsGLoSXRo66jKM8U6Mev4kiBRwzG4B84XVUnNRo7ujEPBZ5yUfNckWRGP1LZfepRwHfenQJFS2dnkJLGBmzP",
  "key12": "5zWGTj4YCpLoJd8GMeQnpNGCRtHVrhCuC7v6oACTH6tcQp9SDnA9KwgZPydj3cBvYEdxQAWXrSPDT8hfKDFGVaqs",
  "key13": "53X8fGweVLmvxSRFGuebC8N6oyCr2Z2PsnCyngKu3yHxfczssFtbdbjxECKfm7c68RexfXW8nsAfwLeUaANxYbgo",
  "key14": "bBcXvvTSvzqdFQ1EymfBcSTo9f25M7y3yE9RCFQ7YVnb2Jb5tEyncRF6mpd93Vm8mgYcVBYRVREQxBnWmVr1wGY",
  "key15": "2NjAxknxjBJfVFFpHyL7rNKvxM8kyPqGFEQyDdtF8jidAJ7qxeQBXFjg1N6SqaSPUd4YbjPdr69NG7WL5wTmxAwx",
  "key16": "5kkWyzAFYsBzo6jjVkWoVHk8S5jj2FL1FGeq81AXehCDrNUFwRcYqcSdrjNKymaLRcyVBjKKoc1GwVaaubfT8Gio",
  "key17": "X6xDcbcav7aGErKHd5ftno2z9aYgtaxGxohg64gJN9E7kcmamJroKo53JWQLBNyw3HDjM5Ge5fEcXe3DBLFVsuj",
  "key18": "5sFCcQyA18hL65pZYvBnBAuD3jStvcumWGTqdztYNs7TSv2afgsiyqqztLDbbMxwcBo65xgRyH5KDYgZxsccgz7J",
  "key19": "2gkX79hXcd9ixFoyjaaZ2LWkDbE6WRmKbnCfh8PSwzFTtype8tWegjxn8jiz91xM8pzf2kdQViETcj4LvaWnAfdL",
  "key20": "3AxdWk3BSP4KoYeqdJmYqM8rzsKDeCiVNwkm82NsRZXQyHrng87g9rcFVH4mcaQLxhfbtVg6TA2dCNjQ4utbfxcs",
  "key21": "4htrCbDmetV9ivgHWsEzjczh5QdJjnrQ5ottbTHajV5m3akrHUNdZoFSpVS79ZhhakhEw72GNw3GR3FNL1CbyUVv",
  "key22": "42j7gXcZWV7SEZs6gQw9GMMoYsAf1VYBqXLj4VoxPWfBjNoSa3bjpYqzHFUPdBYBh2sv2iDNC1STJWA6qigewFMY",
  "key23": "4L8xJntcWk6Aewt19XTrEQ4qiaZj5zmatYzzaG6ABxVmv7fozfVbHYv9vpK7iJrWxgEouKbe8sp5iVkChNguiCZR",
  "key24": "4b33seyfew9PhfvbWMEFCF6x7Yfgy9mYZ8zLzcFV2m39i6tu87F5ugLb7jUx6nf6nw5bwc84EeKq4oFfvq9AGzqW",
  "key25": "5DDev1j5XkoX139RCEnsu4hbohpMYc7YUUvJ8j1dL4NmAV86ZHb5Vc4WPNkGJVQqdMhQrEpwQhEZ8dNpaYH1JNbJ",
  "key26": "53RTicSUxhsUTeUyX5xWrfnN1W6dNajCP1CNLTebbd112KNSWxxSt1Ee6xgydLkD5cQ37tXmtNdhtuodQExSt4vT",
  "key27": "3E3QhbSMYTz4YRezUaA7D3uVxT2xY4gdqvidi4sMAczrbMZ8nQpzZKJbPoYu67B7D9iMcYGs6s2etHK5rm3x99eG",
  "key28": "2adEGbtYri2jqdPgDG5nXU4BjFLU1ZAy3b8NMvgfudT7vMdZaNctJHV6wPrVcysXxDhYmGdDRD61AuHZhaiS3Q3k",
  "key29": "oak83Tm2RUEZkJL5zaFTds1NxeLja4juPqkgR4WndQiBPkcJzRTj6TzTbRkdQXtn6vsvH98MUUS6sdJRs8cVkr9",
  "key30": "5AKHiwEKiGa5M4MiU21PhkjEgRbPBpWqhJLprzerBB4QvLkr5NHucN2KBqumiAYq6Cv7nAtknWnbzjmFCfaA1yQ7",
  "key31": "5KDDJcLGBtKte2KG5ZhPzNQrvPFXFcwvRE4uF19tRw6xd9MqAt6q9yuLZDgUhJ262iWgBWugNyDSS4YDZvBcHMgL",
  "key32": "EVuQy24vsaZRFYqw8m53UuKfy52BhuBBuw19fWSRmuySbeCJQdQuFzquratCUKpGnLZmPYNrUW5U4Q18TXTK57i",
  "key33": "4BecX6DDNQmwqxduv8n793hngKvu9atz9eY38SsS1BuRfpyR2RJ8NWW9gFzodASonryc8ju4PU9c4DWYEioDjydV",
  "key34": "4E5rukav32eGQZ4u6f6cZPH3rrS4P6W1XwUgFqU2pqmhdLYsNUUMndnwwE86xeB2KtNaAzp5oiF3QsKwoQrPKBPZ",
  "key35": "YKe1usKVeHhqhMykrptFNrLDdGGhXjgCTy9ha45GWMiabhxnR9P3Srpo5PU5BjAjarnJFBhq5ejFrQqS8Lr7EbB",
  "key36": "31XvCboXZ2FrfQi5tE3GqSkd4719CGTqpFoEPByXZXYSsqoGAg78zchxsFkhwe1EHJwAaMZtxVSJtqTXqdzw8BCB",
  "key37": "22VaLxyM9ALohYa9Wf7fS1ryeXQxtEaTsS554daZugauguN4MqU9SUVehgVXffd4ER4zKhvyqmAMb42HXSVD6m68",
  "key38": "29WVPtTJnUBJ5QXEJox3kHYzwd9zU4EAnZSq98wq2RVYK2ZjeuAmXatPw3NJ7tFVrHYbDnHb7rMqWsa1sag42GPo",
  "key39": "2pkZhQEtpbMpGPccVDCc5e1UhxmoMovKx9L99JtXFkBrDNARhqnVdEcKnfSYM4XgWzy7rESYBuyBjtJfcGYH37Wk",
  "key40": "4QauvhY9JFsTxxFPYJKjqWfcDY9SCzY2BSsfubUMR6yZ22qEtEDtqSV8hFTPV94swmHzf3jM14YkYynCwytiD9Ve",
  "key41": "3DAGUeVEyVPXwveJ9rNe82yMCuYJ1As8V53gRwmuy3eLurgfQ6gP8qWpvEjeB3vNTpfLVS4dsHNwCL1fQco9mSZH",
  "key42": "677h9YaeU2sfkHii3GhqTdPobQk7oQXeuUC3c1kY2wJN1SsM5BCbYgEtkuD7bdXh7PDguNnstHg7Nc2kk5AEnyku",
  "key43": "5AJgJjGqL92Jgkk3cUMsRGA43fsXKHAc1V7yCoo6fft8fhwYKa7MRRNw6db9kMyJKByrRBaToc4D7aVnZ6zdochP",
  "key44": "qtLnm4HUX6wf1Ynn2Fz3ai7p4HdEHbSe4ZunMXpbnkNfs7U9ZCQR7t7zW5wvGAXd3SZfQCNsZGxXVXFbAr3ucRE",
  "key45": "3iaXXJuPaopSrAso9o8TeBV7dyPaBxAbRqTHv1fM38fAvzd1G2FToMLnrvw4BxHSZcXaoxQNPtWYFWam721UCo1i",
  "key46": "5cMs39fFe3jYZY97mnscReaYAbX6pSyXitfuvUEAdHAouevuedi2kEoaSnsAHaWbYP7vnjhVuPM7Dk8riZigPWQC"
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
