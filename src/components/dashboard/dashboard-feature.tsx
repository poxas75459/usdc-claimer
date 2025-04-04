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
    "2WbH9ecHjgv3a7qEyg9zpUEn6GHw2xPLQJuXUfnTSyxpTg8hmsKaRKjeCRw7ky8Eqk3Cu7K4hFpLyAENz5RT2KDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XM5yEFa2qEEtkcm9isbcTAfTnq8ZD3sn6jTSpjYVZm1GH7AJ6dHDuim55h6digPZPC28HHBxBDmwcRB7Jy1XbZ5",
  "key1": "3ZJVhmYFDAEFAhuEqxX6Fdw5nHQncBLmSDd9kVgdLou3wXFZ5BLDN2XCDhyZ5X8WXzhPGftXqtbbefajAh7SQHQV",
  "key2": "3z7vwmCeNX6YMoFJRA2wp6JHfzuHLoGgZkxxmQqFMvNBntnmDraaVWUiuLQgimzMT28sJS4kMfd1bicBsLCDteNF",
  "key3": "4hE6F6ZTMRBZxvnodaqB15z2XfEeA72b7Dok485hxcZoKbXLh9S19QLBEpN7LHbTJZN3rd24YW2th2WgZUkrhjQ3",
  "key4": "4T4dkde38wmNS653QStGBoAQRimGeYNSFf6ygzzRNY1WTSG8MZKYu3oANjYx1VuoPNMZdQySKy1JiQ2tCEEhVNJa",
  "key5": "4DxQRmaejdyFHrDPEHeEAFfX4nVUr1FEfKhNk6gnUDpJfDS9PPQsrku8aUhn3LaayatLHDFZYNuTeZfkvbFNp4bb",
  "key6": "3t93V683HHBcdbG3nJDoJZtCGyn9o1XeM4foyubpS1uaFjG2SDDgdmGXejSYdFyLaxdYtj9HViiChmDLvPcHY1NY",
  "key7": "222PmzXXwUb712HnvkRSxe7J7tWH7scVk2ntXHd1CaTqpx2aYuvebys49kaLCvGUkpZrWZexoKzW8pERLgkPkhfQ",
  "key8": "5a8QqvcDPt2q9WxYY3CyEFAifYVwD5pdngnbsGvseJNnrAAxW23RioTzL46GtFCKqxjgn9J7YuisjXQ6tPUkiGhg",
  "key9": "4gHMavb85wJHzji2HPb85RwnmPdXyJ4GNgk2ZdPAGX5QLd3pSnQpMNKyPBuvbxYXRYfzYkkrSEX2GoZAwVk9XmY8",
  "key10": "5CvyFmM5pH2cHy5JC8pSnJatrjGLzVa52SYnhxfrKtywEbEaj1SuFTYjS6Ra3jT5EqekPuSG1KjphLxD7a6QeG6b",
  "key11": "4tauVvxLB8G6KMTHa5Di7pEq9HzMunFKgBCfu2LguycJNwwjE3f7jN2QgsnGZFmepRCHUve1EgiKbEY15GA42Meh",
  "key12": "Gf5F45sMWMvBEuyc9kr8E6R61cyaMFhXY8Nd2hKSASgft5FBsSSYPocyMu6Bfq92LDut54JEsqZMhJ5ueXJfced",
  "key13": "atDdeR4dtH9f5G6rRxrEPp7GKcZCdNA3KcUrWvLceNcgHMJZfAtYdq4vGCSUgX44ys5JyC13rAVmRfA3HDUvPd6",
  "key14": "JDsiiMtr1nF5ADXDx6WQ9PwYnXWbmPpkqEnV6chTpkD8sfxtpFC7pYdptTh83VjF94mvbp1SjLt7ffc3gsTBMXw",
  "key15": "5QoGpWAXJRL1QSkm2yRu12NGi8H6jRTcK5a7RYMsZdPs3GX7giXU287bt7WPybGF1wJwLdBRXCbYigjVbDQy2ihw",
  "key16": "r9gBpP9PXkqmxPzMvMJhMFZt4ctDKRFBkvBMMAwsXtY5BzcRAqmaEPDNNb2uWwTAuvdYQ6p8X36ByLjRuQyWjK3",
  "key17": "ub5FiyMbQ3agVFX1PkUJYd7unLYiam6Eqf5iB8ggR5fbvjW6UNXqNYEgWcduUGj9TXB1ZMiY8iZMMcYmdGoefS1",
  "key18": "5XeEfAshmQ66cuBArxB9omzobo49zhbT3rLnFXe49VG751VfDsG9fcxBGdHr6okyJZG7xE5YLe88UqKVN6awYxbY",
  "key19": "3XXXUYda4FrL8FsBDiRsporAk7rvKNt6VjsRp9ucFimHxsRcKH24BMpd4y4c3KeV8BabrB8LKof2KVkS31jqHHML",
  "key20": "42pXn1T2DkfxfkFuKR5KZ9NchfPcYJB3ocS7hWsjV4hMn7BaHwpTS14NDyHxxJ5vupovw6DN8EiKakCxBU3sKRUS",
  "key21": "2aRrqMQa1GEimjLW6Nh4fi1yod5urcuHefHcPqJPLBbjf8HVSTx8Qsf2pJW4uvFR79bG8g9A9EFxNvre3fNXy6xX",
  "key22": "4Vba9jir7qn8j6q6v8xdFA8DLJFo1cmPGavx1CpvKhYewc5Ddytk2VkzCMb9hd7uQ92jJm9WatYfvEHad6YMyR3D",
  "key23": "owrg7BRrbjjjyKX127Rpdw7wyQ5jZxQRxWf7MqcMsP3GtdL6AbAv8Tjs8agG7T4YBwTTc1bNUCKUBx1qyiyTywj",
  "key24": "KJZXruuAKUqdxCjKoBQnTBe2FFjb712RXA2gyzp2B54nzmGU3yjdmGobyeS262AtVWrcvv3an3sNf4WgF9ydzfQ",
  "key25": "3UMneJUC93op8SfpddLwZPVpKqnqpKuRpdKJL2iCLY7fhqPQcaQ17Z6jCQcC6CXa2e2yhV54r8FkHo1x7yB4LD47",
  "key26": "5Ng6zv7zvQTLVBoqgCtseBaDQPTMssFrYYQy3ZEhiuQPoRfooZYHthNSnhhYUKL2yyJGgAJ62EgDBK8HeKoMqkYS",
  "key27": "3wxaMQ5oNcnkhr3kcYMeSBLkKJtaBMycEXLhYGEK8E8LdYJvEF4ehWtVQYe8mFdroihqaZm4FPWNRYCLm9Sa9gf2",
  "key28": "4DJp8cmQoU17dRXwvGXHL938HXrLuhJzCzH5nSQn5GFWqhcJZrQCuSRpekjyGQ8wbayNrmz7RtgVmPGKjN219DrN",
  "key29": "3wQfQJ3S8VJMHdNLC3tTHWjLYBtteoYMdajTenVUJUivrTkaiaMc8eiNhjsyzo1VDo5U6Z3xw5jJX51z7dNyUN3H",
  "key30": "3iLKGSqPyjMAtzBHu9XWH5mZEnDcKbzSdP5GJKK1b6DgUUqk7QdLCn3N21aDEJZbg6DZuusqixuXquPh9hExbcBq",
  "key31": "3vpJK67q9BBs9m4ySZ6pbjbtnXmGZ8WAVZkiwqPW21TFwBXw11wRB6KTtDJVuUJkWScnqSfJdvrPETkgrg9aRRqf",
  "key32": "2pFpitQNkg2a4kXVR7DkFS3Hj85dRWUqSq6fEgFhbuvwRrUUGMAkTkCPNxWvfMQpHRXSmGDyJw6ZawvaUf4CHms3",
  "key33": "3PPaBp6tjP9hcRVmPPbEE7XidNC2SMtDgj2g7xgcepeLDc7xh7u7Bwm3fherLbFdM5s1xrNQXunK887yKbCFzTqA",
  "key34": "5kN1nGSxHf3hRsoVnhxhGSHGdDwgEjkoQRu9Lo64AXuNPbwzbJgRxC1zJDxaNAGkfhmaEuxpm2pY6TuTAqU3MwMe",
  "key35": "22r45knPTj9fpbXmjZZ4hC3AtX4v1sDDC9EfZUyfMAiY2Y7VueL9oCL86zpheoMUdjDBj1yLA1Fd3Hfro1zVoB1L",
  "key36": "5HpSktZw7hadgci2uKLq19vq4hbJpJg2G14wHvJtvmUXKArKeavJTBPd4gLBEfNPqBuLfuaK532joxZaxQJhMkgQ",
  "key37": "3Up5cegr7J2vH8LHLEXfPhJ97JBeu9LT3vkKFA9WRwTxjMM1BzpJaeV6QpP9NCGhiVict98ss6bChZX9abkzYLHM",
  "key38": "s4xS22C5msgdFpfSa5SBzhy4umA7JzSMgaM5wFU68WCGWPFBWexayM4b8B57ayTX87N1VCTXXag4DcuBApvVkKN",
  "key39": "3sgkZDRjojB4ueYEVVcZT9jtNSDhGfQsjGtWeHBUHu4uGUTZ9h9kNu93nhax8B8NyinfXKiJKDNy8QEJDzGwCtvG",
  "key40": "fQpgXhGH28hEXnLGBa4z2VypVHC38oZfD4xGY7kWZpMHsUvdyK65gy6ki5cAoEPnw2ksiMcQ64irJhpP2TBZTwR",
  "key41": "dA7v7qnknPCYhYBTc1DunZNUKSo8tRDC5CDVaXmLspEXNDkdrDEt4Ui9jUAhbtwXwJhdpThPP2doFAT9am9nthR"
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
