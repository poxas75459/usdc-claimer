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
    "QWdBRpw86xLVDwZdR6vMhBGLi5zAjWSrDUJZozB62r9GfAUD8GZSmGuURab7fPdW6DMcaz5Z99RYbjhigHgvYQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4nA7DPCuMGVmHBhgfYJ4nKivMohZNyph1mn8QVtfuYAc8fUXG5MjsuA6NLteEhwfk3bKyU1i7REnPNuymgLnNg",
  "key1": "5919yvLYnL9NGLvqDK2uYiWmhHtW2h9PDmmjhY4waFihP4rnvvYU6btaXrwQN79vschpeiPyWsyn9mM7YJAHcXvN",
  "key2": "4cbVVug8SNKhWFANooqFAnSCfy615KRr6gmMjPRVbq6aCUjCc1iFzBbmEjQqvBAJtqcnUmrBn6NGiCPrFx2wSMEW",
  "key3": "5F4vRTqPgjV9QpsdtT69ta8fX8odtP4i3QJoNhTLWDGUC4VtKsjjeqzzLwmfK7pH44rSXwMMYJXPhS7qEYBK6mtU",
  "key4": "63Ab9uqpq1JmLqFvbdDUuDubhVRm8GFxMH868n1sYxWHY6BjKR4uftvZVsq3YMMatp5mB3KoEfdxaGfqMwUnemYK",
  "key5": "GgVGYX61WVUQxPQRKLVAH1hMc2689KeoRjGNAKhbPTXXtdwS2Uh9H4Qu5PC2B86VHZPcP7tqdVzXt7CBPnVugHA",
  "key6": "dwkDWeacQ94DsVwgB8c5osWLSKycfi7ZbZ9ov7ggzKQ3ySS8WET8m9y6VgeKXXfHyY6QUgRAZgSiDfqEFWfCD9p",
  "key7": "4FSTjcXuryeK4RQ1tVyvgtzy3njzM9BLAA1CaQjm7uWpXdCippkgEPmcSZfyAmPRFUTQByuWWzeDSSZ8wrE3irEw",
  "key8": "5C4wy61C5RP6EMJdmw7WvsAYCdCX7hVpsTm5cjQmxs2br5QPdZ5a4PdMKufy1YvjiBocWYZmjCKjNHPwhA3G5JyT",
  "key9": "2dSy1wSTikAqqpNcptByCt9BNWM1UAYHtg1ApV5MSfYt6xsqRbwvGCY9ixwhsWMKAXTBVmsogxPu2PhUoyX4qF6z",
  "key10": "4jK8uqFS7ghxBePWqbP2TRRGpkXqcQpZKuHKZQ7kxRbfymRZncytiBQx2pd65t2VRVs1f1ZLyYHyX5NA8dAgNtzS",
  "key11": "5yQnXhAgSps2AnvfA8JZATiS4TwYs1aiJdwboeHdZwk5bewrtwKENq82KhxkkmuKWtXfWoUSGdxUAaGS5kLw5PjT",
  "key12": "tDWULr7Gg1NpT9nV5wFdZbdD8hwFFbsABpHJmNVxUx93AjFr3AWGmQizGT2Q4bJhSEJiAoj1S1eghu5ZB14WBoV",
  "key13": "2vczPpFH5P2Qby8bkmMJ6YhNcvBqRUpTviC5cZ71o34wMcyBtBhN4hGPb7sexqHZfNruKGpd9RrzfrMwdejvSKBN",
  "key14": "3sh3s7GbaCFvyYKV6qNNMRRBpdBqQyuvWtqb8qkkRYSfVjNonjqnMo2guYJ1iW9guped3WmAGhTHXxz7xqDSpNDG",
  "key15": "43CrqqkbbSk4RQpnQJUdEsEVHkAT6BT4iuVmq52qRHxpFowbUjh7NKdqEQM6ijfuKz8Gnng6tQr1D3JhP3fWErAQ",
  "key16": "415PbcYpx8frAMr1jT1EF6LmZP4X6k4nEhW9bUgkBrVqc6zpxaPjmkYv4n53N28WB83XkYXBVnCwm58B4ziDGpi8",
  "key17": "2e6xmJ3XFfQm28WNmPtQfabYJB6jse2XQuakMH6shctytNF61fSdQbvR9VPwqupoJ4MNbMVobK9CsXRJGijReiNm",
  "key18": "5BX9TD3kuyuT2GMALncn5fxFB9nEskWsUwK9cbZKpKk1qxAxrRRtnFykx8kKdnQCYKaXi3nAfzd3oxYMp38eCMgW",
  "key19": "2ZbRANnkXpWvcwm8CZgMabtqKoKUUUWzduYHsNd836pv6EemGH9YmmSaDb5ifyXTmdAhECfiF5PMjtnuVqBCEDRy",
  "key20": "4ZpdHvEuiyJhxGKMoCG8fJxyUh3dXof5rM5Q29P79hxbwr7BCv9gHTAZMpJ4mDykMFuKNcwZkvHymh2QN5uY8oeC",
  "key21": "AWydZxPDKieYcpv5FXgpLmCudf51nDBDfzx8WudY1v68JxfT22pEQjhuKHUFE48LJ2yVEftnruLobBmgeD5MLvq",
  "key22": "2Jfm6ituHkNYtNGpfe8F2btD8cbMgk6f79MgyhrqPjhLibqJSPnbTmi7XsYesoDFLJBDHVPyw3QzRUfRxgySUsHR",
  "key23": "3388wQvSDfzxAVfJJkoQQaARphZJdzt7EV9qWwdKmnRRkHazJmNiHjJ8cJemqAghtF7rHPeQ6zrajHpwvBNy8AAY",
  "key24": "2v6m7jZyCAjedJGLzQkGaw9CGyskBaaXAfEBeKMC44WMEsUPCi1WsXUwxCrkpdSd346rprkBTHeGB9mq3jL4eGdV",
  "key25": "2ktyXNELFuFLMES6XBgksFpmEbiar3ow2DYqDmbaeAqnDJArGMm8HVuadDE1TNAzk3ihw5FoWhrMVHQthWs2n3KZ",
  "key26": "4XvxXsfcXegM9VN15tVgHRrHmsC2dmwD1VCutxqLpxfrovgF94oQg4XzvQNBw3Q7wv3tYG1duCV9V9UipWrX9e7F",
  "key27": "5X7NNeNgstwqAG8VuxEmsLzGmLFVaB71K73x3rkyzwvvpUf7j7bNzdmoqsVXLN5XTEaoFLLjsTHYgKZ6GF4kj572",
  "key28": "2GiQ2AWximdmRsF2tjMvuxZChMQxaq8ndtqFidz2UGyLZ2e33WJQRctuikDMb6VqA9FipwhpcxXYSNYd9rBu7aph",
  "key29": "4tUYAYPusTG65eabdYWwXN3s57ZoTnhK5kaQfgeVYbo2TeEWbhhB6Bx1YzRhkPXeGo2UG861J5TvbG98UYSDxVCq",
  "key30": "3cRBvC33juGHkiq1D2xjideJPH1MhPR8xa2be7nFDztUaYxDAdAHqXaxN5r8a4g2jAjirjB2NXvzCU6tbwayXb5i",
  "key31": "5h7Ehmob7zgKtJCf5TzCqbEVZAhjVYYP1yCZrJPFdUYu9DjYx4ZwqWZsEX7pKt9P8ND9VQxXtaS4qbgfBPw7oYdS",
  "key32": "4zjgQWAV2RDkawmSeR9YCCjdhvPQW9tb7tTer9FbDkEKnsi35GpXNtm2sf7LmoBTrANEVa9NoAS65JbVGJPH4h6t",
  "key33": "XgMtntXjkzs7GTFpAEfLbejAYvghqmp729qkqVFhw55TaN7UYgdQez4sNGL8WxxR1kmcaTBybeE7qvSNdZziFfK",
  "key34": "54WFNxZ2wLt32HHHDaK3vfFvpJtjLLomhNgwrtSpZmAYfhNiBVMadhVi1LKLuLreN3f4bKruiUVMq2bMghpxEzra",
  "key35": "4BHuXX3Ueb3ATyWaQnDYKHjweM2oUvcM9KsfePB4uNYWCDTSqk22jDdMn35AzFAHQVUQ3zqpFdNE5mxzkcLzxJXx",
  "key36": "3tgCaPM5ivGm2F2bR3sAA8kEesWZkW1F99uikEbiwFKWgtWw7euvEHkLtxMA94ufBdrNTM1fzGrq2vsFKVy6BYhP",
  "key37": "65ah42KMAcJDiHa5cGFWSzX45AgoZ9zYwNtDZg8n83dhicR4k4hcivZXvSna9cSExYta1FyX5DdNQzANLKn7enEQ",
  "key38": "4xaB7dukeMadpQGyuVgrXZnJgsax4fGyN28KFbFrRKmWAvWwDagYmtAajYQP1PGGA6e8AeFHvsJdZsgpHFZLAeeb",
  "key39": "5z8E9F4w5npTEBkft15T2QF5DVF9ArJjgfAX3aHFebBsZ1yC4QyCu8wwuGvHi4FpBdRYVnu2wvLKKQ73ip9rKZ7j",
  "key40": "nu91aBetVwRFDN61wGZifbNCEF3tZG2vemQBDB4N2LgUWVbEcCXc3YYjAfXwxMFjeXLf4G7sDD6wZT667yK4wYs"
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
