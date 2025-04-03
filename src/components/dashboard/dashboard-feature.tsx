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
    "SNUQDRySUZiQic1GvKK29tJrkKBHXyyqesBTQmn3QcdZRfaHhH3jNrpTHAb3o6hesbFSsYZFZCN94mzBUFHP7xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GguiR6YZbdDaXp5bN6bX1dTky28CiX9CukzHvoZQRNsuE5dDvLLh5T5mFf1syV6g3BW8BJFm9DWL11GZnZLFBUL",
  "key1": "5UZhRaiNCghfWdcYszebdPPuT4H5RaAnZT7czcpcmC8C6fgF6xwcPER5NjjhoKEjSzqbPwZagMogENu5um1ozC3H",
  "key2": "5wjyRSW94VWQtL4uj4DgLb6YKMWS9zYsvoTTE2RmDWK9y6b813wLakJ2AXB3arqk4E5Cspmqb5A7yijJM1idKhCZ",
  "key3": "5vpJckAwGYJ1NdogYPb7giXpiLwTZYY8aADfvXBqn7jYgvGtawAjkd3EXQt2sfyB5HeKjxcvQHkqeBEKPxk4BEcN",
  "key4": "2YuRhtUA9Kdysaa46c8fn8GXikJEej2ehmsX8eB1PDUS4Z6pC2VvgpVod81EmCbuCbt4iMrGAVqMgd4DqMsV4hE7",
  "key5": "3jUjN5tovBUi6CeuzPrhfmFBthQEfEoz9YGTjcjBsUc79ifDANs5ytF4WN7TXb6D8qP68TVTdycU6W1bHUV5gZLG",
  "key6": "FFArATJX7aAKZjqMKzYsziJq1ZVnx4E57VemDyH34Jc2UFy3ne4cyKecH5ZMzEHm41Tdr5xxqtf5knyhVXm9ygh",
  "key7": "4KktxaiDkJoxnDTw4QJaAnHZVqMLBkDDr5DrTTss3VashaHTtkqBrEmnvSHz5pGvQcXmC6SV1Mes9ZBkEx4fRkjk",
  "key8": "2G5rRAzV9NATMr1o2cn2VvqxgCiqte63fmuZ5TZwEhWjkkdjs3FYo4mwaTUn9dKZiMCJ8UQRsTpKbCSeBSgJWFeS",
  "key9": "5bJ3UcJKwi2yHYRVGjjHjnwi1vikgc9V483BDzf6hWzZDeDXyvy9pEUAhJLJeMjX51FhqcENGXJVgbxE1dwMeoeP",
  "key10": "4zVL7P6aKy77YyduV5gHsbqPQiiE6VDPEQu3TNbfyZHGxfBt2bBbsrZpVLsesSXehHFNqR947Rdu7Kujm5MrLFim",
  "key11": "29qvp1mpREa49vBY9ZzSozFKiDWL5KuvPW2g7YgC4DRZrVgp4E4XENmJtABhp8WXM4eW61WS9q2GUhBw62nvyoZR",
  "key12": "hr6YSg7PUyPb9JX8FMjtANTErfdx2dJkYwV1JNzcu8TKHRXdc78cQGQbhh21meoNcfCkL8rrphTeUYP3kxuHJ6d",
  "key13": "2fSoJmzt568Zauvgk1DU3H4jdwHzoCNVHhao7DGQWffmAepdUoBYeWYBiNLrVeLLEGb7t3WCZeADzF5yMoqSJdJt",
  "key14": "2Rd3p65W7oxKsz5GbXd6jtnE4ZVhmLy1C9bGwj2PJcdL7SUUfQ4pMXJE1e45HumRak2a9yiDCz2W4fkZqUo4L93z",
  "key15": "5dMBt9JmGqaRhqEGaorAhfbGM9UoeTxJGrPyu59YYn5Xk4wMMyqD8ZLNd3jrGjS6xvcjVJKKMapPnF9xNK2fTXmN",
  "key16": "tScCtsnhwbsGGSZRREC83Ww4GTL9kLozHSy1HVqPee3XZkK1VUjxrEySFsANzB1gC5Sp7gPfcB8f5nTUqdtvfWx",
  "key17": "5oXiXN14ctwwMWhmD2DYqy7n7G1MQZxrQLEQaf8Pd6GwDRy6xfRRY8LEY55adSXgNx4mmE21UWQhYHFbXmyykQJo",
  "key18": "3KkucY7cEzBQs6CjaQvJCj86ahijmZJmPofJqvytBbQMh6sa5mJirCRqigjV4noSsuyT6dmB8jb9bEBuPukfHeeK",
  "key19": "3Y33t1n9CHGZayM5pMqFgjKEoaNiDjXVZYgo2xbwkDbinauuzwZwJarKJAzg7HbdroB8tuPQ5hhZbJobgqmYZ9sD",
  "key20": "5r9SJCZgY1CfhGcCmPB4bbTNgaWBhzwQ3EDJVhshu5zq84Hjcm1BGbAKwm8aKmKUUqELDGM9V28GjRUUNPQht7Hk",
  "key21": "4P1CMBDjYK3BFenQUyUASFMTMTtjfXXfiuSxwEvWuyBWaN8NYXBJb2aFSubE3gXmEoAYKQTYFD4NL5UZSMJvKchn",
  "key22": "5erDiqVzHtocmGFEe1p7jMLoxnTqtQi1LKRNhcHhxr3TPwCvKaj8zU4Ehg8kyC1LdpX3EnWvxMfq4dFBdrt7oT2k",
  "key23": "2Lg1KEWw96tmDmUWESJw7eV9TKtGTLYnPwLjtdrbZ9UqQr66PuBTWP3sKyJ6Qymj4CVs3EEgVrec7LEdcspnbYFo",
  "key24": "4UTtaPR5CCxoeqfpZp26pEM6WgEjyQKY8dWMb4GZ3jNoSUUttNXvAJAfUxzFrYhUmAHhryPw4xTRxX6oQENMFtmh",
  "key25": "65NThpb6sUaXrsw3VRxT4LHNbcn29kvVHgs97NPQVfYSs2nJrGwqcD7pVeUejfQXz9GryCqeze2hRRSiNJ3jBhqj",
  "key26": "4Arva9jZ7nSvCv7KjrpUxxrUFCAk7UQLh4uwb4EGRX2GbwAUv2ABS4MfQ7yrinPfCRruKfuaVJo4X2dWRxxLjate",
  "key27": "9wyEwMyLyHKnwzcL6YykiDaQYHsjq5v6pMyQD2CKqq8MUjbadcr6fjzFxfwy7ifuU7uQiMHpiYFGMSvWbavAvms",
  "key28": "2JjNi1TuSCs4fLi3dj1nexn8VBTB9zggbAEAEbDpN4RpiKurT48DNGhsAvEGFEcQrr7r34AKy76UeLhdregJfocp",
  "key29": "BgJyt2zcvwxpcAs6xKbuZ8oCMxtZSz2VfBjrFujSFBQKPpj3TkfFvyChhehTaTQRcZLFgrhED9CSw6fQXYhD2RN",
  "key30": "4xuzuLoa5oW6fRNrJc6Es7MKnaZuhmhsxv1vzYVcf9rRPvViCpFoLbYjZ3kQcgzm9CwnBhtHQMpJmAQZe2D3GhBG",
  "key31": "5H6PrBv1HuYvvBmu62eBfheZxhGGBhfGAhGme17Dkqs1cA6q2mqXnxy8MEh2Q6Ljvrt2bMLFT9DcmxgDq6RLF6Wb",
  "key32": "DYuxUqmmW2ATd3YFDC3YNeCBeSFzWU8bCLgk8ndC9NajJLR7BBctsCV23xyYqC3tVA11PtRCQMxy7iG1UatC8pU",
  "key33": "574R3F8yKXUMLxoeGahrEqWujgb1XR5PmJwgdZivyoR18VXVtE2LuaD63iVric4ngX6c4ZHou1XhTYozveh3ZE9B",
  "key34": "5zSHq6HS9R7X5577YU87mZPu4ZgJdBgnjneawH4E1Zx9bFFZiPsjB1hEB2VCngifJjr393dir65oocLiGwwnNGMn",
  "key35": "2f12NSG7F6zuy6kfiaxqEWpghcgJs3K5eqfynmXTTdu1VSWNwME4bhUhv6JdavVmx4X8iodhp2yonxMRvc6kqu82",
  "key36": "44oDKdG4SVjkLY4Qy4XL4J2ojs52i5kArSC4v4XvSqTLydm73QS3r29SumnDwYdCLn4yxGT59KNN2y6aMTnZd55m",
  "key37": "4FLYy54sqpsTuE4QXjRStL68bSkmgaDE9iGJjHU8vRGLQo3wHNJtYhSLjsdT64dpLmAGGa4c1i7E227nB6Ai59Xh",
  "key38": "2SgKtvF5yH6Z66fGSLxefy3zTpHKGZgxzCxzza1zu6hRuyBXUDx2Tjbhyqx2c3EL6zyUMWyETU99HixYZWSh5paE",
  "key39": "2Z1nnV3tQpQZR5E5NT1NB79QYqffCyPEu669bPWz8iHLAgPiRewBq9nD7JvQFJeCyR72mfBiHwhqcHthZfpq3ccL"
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
