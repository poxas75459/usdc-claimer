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
    "5sSGiX5JS2Yxh9apd8vhFfshdKSEZHm2hxj1JqW5FKrbijSKaM1vnWSW22gsqdbVgQdj2QBGmvgNY4awDqJtC4Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZgcS2FziHNbUQW4va1aca6jgtMCE2u4ep5LuoJgbi2aCUsGTAPHKAk5ocZCUqATvrn5tQQN5K7ccZAefy4B1C9M",
  "key1": "BVB4CYXBsdHamLHixxSyKmz5RabK4tc3oHPUnpb7BhKfwXd4WpKVjEUXMR2PYQ5PgKzKC1CXASaGJPSWvKchEyj",
  "key2": "2QNUp2YD6BaEZbfZ3tFDe1Y1uKueBthkzMnNRWYEhtsKZbh66kDQDxFYdMHMyjaNqKYwHbdUPwqvwkiqbSQZqWR6",
  "key3": "neCENkqjxL28jLQKuqvHGYpbkhtRBXjm6S1poXCy1N7buczVWP5aZcKvZVjKbMPk5SvtDtXa9XB7QqfEoCCMDwr",
  "key4": "2KNiMdeTsfSxXXUAAcQwPz6p8wqJhdxbq3Ap2kAHHUaTdkRjsFWM7egTNKvCSy3X7T9WtgyJ4uJiJCaU2AXDtRa3",
  "key5": "3hfkzFvhqEj76tFPsUoH2ZLY7J6cJAugAui5JTryRJW6uXAcQHof2sZp4bLSvu7QeLVcDwcBbRdfTzjmyCPr5MBa",
  "key6": "9av4bTKpD17wF2dn9Q2Mswe5DF1ThLFK8Ch2jqpgTcQoVGRaqUsZGMoAegFZX2wwfmr4zpJE1CzTUrmt3z53pJ3",
  "key7": "5hRH96BrZYf2cwAzUv75bNLpVAbQpL6D3RKVyiF4VXWVmztJ13Zq4jAyGQmdZgTZ4FTvdgib4jJ3RcAhr8UNKoCx",
  "key8": "3N4FtB6WEWmd1a8tG33WRmmvR6qXPEcCTjQsG9oXMPCQMxJazMYauTK2cnc19EP6Bjn1KSdJKfXWhZhULM46EFiT",
  "key9": "2r5HdegnnMxBfJR5pdtVeqiiLTcAzmysr6YiRyTTjqXvXZvffvzk6t1YmuVkDQB279PsyEq3A7Q2QjTSJscYuG8K",
  "key10": "3DeAwDthrVvwfvf7itiJMkbroRnxnqzPCksubM9GXVMx66UZQfisFqiJcBMVKyArRZPsrzqXe173k1d6spzWeCxW",
  "key11": "4MU53B686rvkL2wzpKRexy9wX9FXYYuSgQ2vXWBfstugkaByf5AJXZh9coeZQ95QDjYExz2ZK1sx9ggmVZMoBJac",
  "key12": "jsgeuMi51tmvCs43VphYFUzVPgLQjV6zg74TKUPzusyHKfnZE3aaoHafFr9Bu1u3X2jJs2aGCu5Ajt8UE3bj6S8",
  "key13": "2ogCufnVj1srURFDn9M9Sma2STfinoYrf4R7c326N367xVjoz5o96dSLHN9qacNJoayJ3S2C5QcZ6rKHSKDGvEGG",
  "key14": "2VjksN4NN6SEZY2m9kXPwFbFcJe1jJXZXGvwCHw5RAHXD3TFB6b7jpeW5Bkr626Cj4xuPZgNNJugJyr8vBwY6oVo",
  "key15": "XZcjRtXqendEvoxtQ7DK1JVjfBESf7SFr1RFsF3PUZu6MKk3ZaaEQUVxJb3qUzdVg1TCz7XEyRFhvKqrRzdWQxC",
  "key16": "56WT9EtQ4wBVFXfuTpxkNr8WFyQjAVVegasuYa4YFMETjU48yUCajTpBikqqxhDZjeJz4XeoNqzajHGjeAS52gUH",
  "key17": "3aG1Dw6EedSYk6UNNrSeJrQMPxUZNFjyYLwCqtT8sKcka7GLKUKVum4o8HpHtxQABHqu5XJ2nAtm2Pjbj19PpNNp",
  "key18": "5rky4YphEH8kGxV6FePSGDQ39SstF9JHLxptFS16yiF4r26Ju4BGSw4zh1RfhspzRRHkE4geogvUMUq67uTfTmWf",
  "key19": "4EqJcCPKa4vvuaj98DQWEhtVXS3ayFCNjRviW1sXf9nMwNFaKdCh9xEAnBmyjbnPkQ2NQmgym9hZvXatLWo2QeeB",
  "key20": "67ej4pgbbrafh7R37HFeAV8Te1trEARGNwY88jn2kSb49CzGVEXmQ8jRNdTsxxejLcd7M7S84esdMPrXjjtC7VYu",
  "key21": "67PL4s6pZBLkF4XxAPJ3rwTkGcMLZrRNoGUvKoPEoLEJP3kRdpPrjMvRSdmHXsGJzhDaqMvWRBpFnpS89Nr2hFcm",
  "key22": "pAGJEr2X4s9ZM6Hhnq9wZSY3qqSb7s7C2SVCJbyLtHU4fdv3tpD7g2ZTQWU1YHoF5HdKcRwnYsE1Kw9tXaLd8GN",
  "key23": "43o2F8AuuSHErBADRv7nkwz7WsyMsu32uUn3rJgsDKQoSzJCeYdFdnC1uMrnMVt95toAkgTxqoZGYLUQCy2m7jAY",
  "key24": "4tGr5bgmDN75jCkgjTYMq381k7SC1cKceUrXsRMEMpHoTfQpNSV4r5wffLWugkh115b9CKBjy3M2nYMDsZ5V4mM1",
  "key25": "3UWEhDULDtPjhDJGK4ngRtPwXdNgLkvEQKCNQGZWjfrZEN6Xi9JPec4T6u3cwR3gNnYBQbKvH7fDfjegM6Ps4uiH",
  "key26": "4PFYCcEBQH19h4VqBTWYyvw8QyneLVtevAVUGd5wrWw1BwUJESqLa3WX7nb5ueuXkY7ZbZRM2sdd6Y3WxfoWYW1C",
  "key27": "4MhCmpsMsmKgPx9ocjfYrZ7tTzv7BTNWPqs1RjgH83SRu7mUu2XtbXUxf3cfSFFzL5q9hJuoYRi8yFm3qsd8x9s5",
  "key28": "3C645Zhm9gvmAUTHW63bD3kyd82RVb6xtnhgNZfMRe47w3LZtbu6HoXQ8G2eBzyybeHcBGELMq2TuXYsnRTXvT7r",
  "key29": "2NFySxDGZJBZYEt7eHkYBE5xzxFCNVf1KjeVxazkvZb1XtwLiSp62i57WoUwbfbC3vmP8hvjQCmEweFUUoKWNr19",
  "key30": "M6bjpDkGFwhaPqaZwrTBGStvHGab8HVu82YbZEYKgEuN491vtf6g6CRBEeizQKYu9nTHTNjQ1xLWR2HeJGmYWAU",
  "key31": "2eZD7TFumh8W3Rye3sBXbVX7KpVmx1KxTqfNKNyBgJ4RnashSyXUoaWqmuq9mdC9RBCrHz7QcyMnheTxejE7kE39",
  "key32": "5JRCsc7yjLZNf98kW2WXKFNVzgPAVyH83tYW7jRhGHS9p88HoCSh5msd2XTN8kDUJXcp7dtFK5ZDw8iZSkduXQ63",
  "key33": "31NLev8RAqRBiYKie8b6nFzVBPU3iB8jMnVxoFnkdJpmdUceDEujb2odfTkPLChBDdnfP9UjsSk7rZfVz3eodQk7",
  "key34": "25m2VjVt6AHVN4XajVZEbEfCgkqHufg4dCXZM18Vyjqh6G1fgSj1uipo3TVFc8hh16HGUtt9Bz6BuHhpAPMRPirz",
  "key35": "3QiSmNbM5iYrSrA2f54ezwiXv4QUViSXSi5FEu9k3pnji3G7e5VxVAgfW1sGxukTSrKuooLQXadQUh5D7neEYPh",
  "key36": "4hKaSXP9Dw2E1BHMErbsBXYDiSPE21596c7kfByEhtwUibg4NRCncZ6QgfDEJF8vnUabUgKbLKzgwGo6PEgdokQK",
  "key37": "3NfLXg79gwqmvEGj7LnZFs4BVVAM7WpiNdmyrCqENRAZm6WghJJfzBMVRuf2b2neSid9yF71WTocFAiCuinEX1cR",
  "key38": "2YadTTcZmhM8MqWHGakArW71cimHyqXgJ5Dy5BCu9HAuHZwSNEUvis2rRkoLctkXDiDnYp5CxYx9TMiv2g9hGWf2"
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
