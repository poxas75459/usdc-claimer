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
    "55AJMaWsqhArL1j2amt8jx5TE9fEUr27zgEBX9Pud3BjtJiZR7wjMiBdwpB5PT6se6Ey8bmhCUs8iktnz6ypw1t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMdg1ZeKKZsK3L5KryKRKH6Li8Mt9NSksZ4ZPBXjCY8DTJKNowucFbw7GimCpSC6cKcYyoESjChapfFDZuJYYzh",
  "key1": "3fwQFVjvArZ9MHjNfTcDzra1kj4LGMD93FWJ1w1pBYxy9iDTmuutavUAzb7YJTN9Ft1LEQP5VWhx614AGb74wdMi",
  "key2": "5oaYKJYHgDzMGgbek4BrdYsFDPT4PC4kxNcr6AYSrrh43zS2nwgFLhNfbTDyaGdGp7RpTkFGBVPe8GADLgDGpG7R",
  "key3": "StNATgNgWWbQCVnKVAx6Ao4bK57BKicZQzFv1hwTbinuQVvMwcWpEBJNHnjp67JCcbhpuLhaFtyE1DnXo5G7ZdC",
  "key4": "33PsCXvbSwYtijn1rw6UaVekJ7W9YnLMvSMxqw3iChWXVUiodbYUKjKEyqtQU4AC2QzpvexzZNoSQ68z1prdVzic",
  "key5": "4E7dFY978gaLSxG81SqMzokgdDhmxjJoJWc4jSNW3dAx5V5U9BHBm1CzVBRt6ygWPx6ehTgf62Dfht3H2DYWY1Pb",
  "key6": "bXkK7UpqsN7xPhUJgrFjV6U3rAXx3fgYrkjFQLykc49mH26MEjfNF6c2ft26wdjDheovGxpU2zHJQPXyTNQtcGw",
  "key7": "4MBQgfppEbRPL5p9bKXVUrvd2tZk4cyFVT4gXPL4UEx6H2dUX5x18fxDQd3mQQ2vqtGa2gFNH9CER81ruXMr22iP",
  "key8": "RBWb1ARjzs4LJ123jRdydyvjuAvuHyiJxP4BTW4GFr3CcuDEUbuWNDrMuFdY98nmQvzFQNrFdJpb8kyzZw363mF",
  "key9": "DuobU2RH1dWsnh2cVfCsm1jERi3TD1RnfmDWpJkxgWkphvQkJ8UHh4bJG93h3zV6DTr8zVEizJgSYtuza9SdUqV",
  "key10": "2XjRS8J4sTP6XqUipvsQBdoK4GAbjURqU1tinumxNxJHBsu2e5Z6NQVKbVJsE5NwgaF3n7A2iykBUzZSQpcXUkvR",
  "key11": "2dZ2REW7BHmi79Vu9CohvuGGrQPKGBY1uqiXdegrHBn98FSuQSNMjfhyrPWNMjpEEpZ6vJxbaoF6bAnpGZS22dTU",
  "key12": "Z7vkcuKMmvxVdu2hEqnbBBi72uEaV6qP861rnE5P9EoHhHWGwAywfGqCr9ndeHzYaerEtmXuTHvqrZtdUgoDkEr",
  "key13": "5iFH8UqwGt7mbfQzvMjUHEUaybKyWAXJdNPjAmEspfwzo46kpnvZSHDCWvWqmmbJTsdF3FPPnihhgjNEdvsifaQh",
  "key14": "5vuz7dcCEF8EVe8jPfunCBNRXVPoZFokf6n1WvtqHLs5MCA9ev4RTq8ULE8rYEmoSzFgwgWmpqfEjgFEQGnFgNV9",
  "key15": "55KX3c9KawBjSLwqV6KHyVznk8FuzFhTz9Syu89Dh52DARkpyWag4BXNggFPKCZwgsePB6RcfmcUzGASEndmLNaU",
  "key16": "5rvdr1SueFkF1QfgaZCM4ETU277EAk9Yp4PYjoexJFZ2tK1Rpwc2oZr8MEra85wsNsumk1z4rxRSAvkfGXhh57iW",
  "key17": "4tn1M4n6wKQiHyv5yqCQasAeMG34YLAtteVPH2ic9Hu7n2Nika9tHRg4cWjGcJLpatvUwuCKUKsfhUAQrN9pinnZ",
  "key18": "35fK18VeNa7L5f83MEHcMAjtCo6SYveGupNZRMmJR4Y6N3642mn4C2P6dwvY8hSdHAYSSjm8R9DowDoR1wPNQZDu",
  "key19": "3QxBt56SKTten27G8zt7mD2USD46qksjACLoCkCvpEW2xZG1uA6ERrr5k3hqA4F8jQbGfTvE3gKfuffWWaPPLr5E",
  "key20": "5o5U9b8isQQisotRsGcQdYBJhSeq5kxzH2vEgFpqpou5KMynDLGJVctNDyGvAd6u6Cs4LwNWHzxF2LX8CnDvkQm8",
  "key21": "2oe7qwP9sJbZEZCGmYDW81ca8YcFkgHCwmHumXX8HEjv746MqxFre962CfqCFi17nX2sVmF1ydKtbgpegqgyZhe3",
  "key22": "4bEptXtvzox2RLCipPbrwugsiVW3JFfEqfd6ejNHjVLXRoLmHhbD3fAu6ehATPYuGsgDKXwJhyLWDQfJoNABy8yz",
  "key23": "5oyd3y7ZnvNBpo4sEssr6dkBxUMkVEw7sJiWuqEHxpLfkMXbKpNtkpDPt8vKRQ6m6Lrp7breUzWjFCJqucMWLfYw",
  "key24": "34uZbpPq2gVXLWabHgqXpcgFGeFYfAQbLuBKiWs4PxX5TUt6pgGNP8ZQ2DqPrQibid1N47KEG9PzxJzw2eCJP1o9",
  "key25": "2bQu1G9RxxUyWwuFTYs6KUCkEP69nbygPuHUHG63XkHWqe79AHwidxWuSL6F9KS7GS5xK6p1Z4us6GCnbrK9pGmF",
  "key26": "5Pp1tUHA65MHdaMV5VxQz7DZgZ7KbPpc9XBnovx2JchojyuuoLS3rZG4ZRPqf7tLtY9QHQpKrDjgYsU298RGDqqY",
  "key27": "2BHj5iiwDth1HxH6CJydq894MqYJEzzxSWXnGJ7BrUV9txrZ4D6U3KqfMvusEcpdiZUK4emHsgfyWeMaiq826z19",
  "key28": "56tQNawyS6PuuJYvHizedTYarQBXQtz9HDp41uYQie9rzwgNc95PzCkgTctaRHgQSLvdrZCCGWgjfTtVvRwK6Vo8",
  "key29": "4xuQeiSohRsKMiRxsTd3vbSpkbmJVYDrCf41NMTkQ163BWqqA6qn16AzwmaExK96yXrfdMBEZMaS8Putw7C12Qc1",
  "key30": "gYheATcdQZRkJrgf3GjedpKgL3KnpHQY29h24HscJWEbma6CQsnHN9hQtkKiBhKNPtto2oyWd1uzfAReCciGCec",
  "key31": "5GToMRmAyqYXnADVRr3hswZLzbvZ3UNptkzdEJHqPEJMQzJrK2vWqXsM5YWtiAqmPVKMP57kbfJPeS6mcopjA52A",
  "key32": "4mnETdLfQtWEzjrwNWYakzeZrNSL1zTj3Fpir8DokKtMW8VtZTMutG8jHrwcwL1uvkHmgYKchzLUH7JpuvVj57pw",
  "key33": "Puw7WC2ydnXakrXuZHEAvACX9kDoAAeE1biPD9ywK4mCu2A2t1b2D1ZTQ1BcWL5jvsD12RTZgDJQ2mk4AZzeKxR",
  "key34": "xwgvHY1mMyDHNjHaPPdD1dCh1LnJE2yukFTXtpdcCNrkVyXu12LsrgYtecLs1n3Bfj7Qsgkn1xJjATR5UsBL5ve",
  "key35": "JNDUfKZ5Fn7HVhsapu8pENz6odm8KwwCYMhf1YHcw9W8XdaDRCEeSwsv9QMEqrdeSBejK9a5SCLmuvEQ9PEvjhv",
  "key36": "GnMyG7Jcg2QaQ4t6y4t6m5XtbcsUy8riad3PzgSqYU746srPDiRtBc5YNqVZpyQs4viXyRACsxb1eLBsgEnMLeo",
  "key37": "4SErm9EHsECarkr8XM1jy9XDNAreyoNoD2WshizLsoxgxvKdyzW5aKyzq4R85U27TZNV1sV8guUB2YCYjxGBR9aK",
  "key38": "38R5TEAgjEzTyJws1DPuCJaUCFbHrkHu6p4XKfbN3Nx63Uh94BPLRzGye716N7bSJcH6ahCi9APWTY8f1wWfug8P",
  "key39": "eb3qFkPGLYZKoKtwF8zfz2VfbAeQpweq8GRd2qkJKRg2yTABARjgZ7stxgA9wabL7sWc1X81GNLQ8nrqHq5ej2T"
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
