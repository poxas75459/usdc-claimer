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
    "5aJGqq3jMFBXwcffpBXko6VKxUJqBMijjkzpe3gMAj8xUVk2S58tRHQppNTDTz5S5CeFRK88KS29t79tu71WvVmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFL4WDjfUw2EukjcXyznZgAU6ttKhTcr1ogEqjpBa9XmjHGxyBDMAXW7Ex5tjSRJRvvkYJFb2M4ioYQ6abu46UN",
  "key1": "2ZqDVJveLjiVKYjwoMj7TqWaHxFUaVaEhXkJ6Q5F2iT3Z4mVYQA8nyfTUBkpbFnWE3pbudKhP9XreDr2SJwkrWcr",
  "key2": "uUXUqWxeD26EZ3FzdSGNcvPmUWMgQgCCf1gPotqKGYwzBUMuB44vVsxjSrgsssUWAKqVxx8gEgpWwtMEdaWBmJ5",
  "key3": "4q2teqaTJ5oh3yZ7GrGaFZxtjT76bupgC3Jayzq1SnkLFx6xC99XxKH4cyKiYCPRxkgo5r2QrjVXJhVZP2XfUBkZ",
  "key4": "3PQoCuJznSQq1NdiQ3w6wYJpLDtnfWt3bjYdUGgj2XJp2rHoj279QSMjrGCTj6BmYikszjADVgKcgDsHbSM1Po9E",
  "key5": "VePRNU5ZHWGoL4Wo45U9PmUMBTizjXZU6cfi6gQcaJ5eTFa4WN62iGpKuN3iZNaR2sWgCK2MscBacPbdZtsWydk",
  "key6": "3sEPfRVmv8zg1xD2oHqPX6Lp4ntaJLLpcGdPvAzwHK7kg6w5NaXfbG45TXESjx47DsSg99jk3jQgCpximc45k5GV",
  "key7": "3QfhZ668MSojdzgSoVSHQhyK23phfpDU3u8t1oQPLqF6WoJnMxdAMgKPWKgrXh37vYuXiVPreB3djPfhqD71jrr5",
  "key8": "2xhFg2J6jYR5maZLKL4DcBRYoDEzz6TQNnz9qKZ8xjpp2kJ67dMuNh9gr82MNWecZ7Hb9r2L31oi8XERyUGq6dnF",
  "key9": "sG2d1m1JBeWm6XwXqRgvEcQ16anTQPowTzjDmazKGfV9aUVA66dxuDqUv49pTwPMyWTJrh4hKzd8q1cGjxHJ66G",
  "key10": "54iDc5AJwqdfdRzvCLswBqfza7La2pgLmVXa5caZ9zwUqYZFtgbhFJ6EnN1SgjxRyXqjfE9yedEi5KKovUTDbXQ5",
  "key11": "61M3VTg87vq84MXpsMFAHTY26cCEQpYhxrwcf3F2abu7iNdy8wjyAqFyg49UDRoW2VmPJFzvTAA8XBqenp1aAS1J",
  "key12": "34v8F3bXtwHgedaat2EEb5HpgXMdU93UeNgDgHSNn8UgXmu6ZvcGGQyrWYT8RcEMtVBgWgJU5vs6hQmFgtyki8uZ",
  "key13": "5Prkoune4PmFufN5b14fdZNTbw68Px28F5TXo4RG6GsWumJREWBkhbNHnmzvYhrw9bnXxfgtENuDi5NuhMhbd9nn",
  "key14": "5LezjEEgp7Q2iByS4N4QVxYzDH4KveW6meQD9RR7WUFTgEBNKVfiDVMt9PoAx8Hrs3Uo3gqBztogkeNXXzrVf2E9",
  "key15": "4UiQrX8UpPVp9zqw1c9oyeUGHFCf2rLjmr2VfYgbHfSCZm17VFQ3HZJg2pNdLSiZJ63yFno97tMD5MEynfLaGVct",
  "key16": "5V5ay7Ajh9mb3ALFyzAQedUhttCGqsemATm5EgbaShiynMqyWd3fmRYi2TD62cNor1vsEQFjAaU9Cxpu3x1yyGVa",
  "key17": "4Eds9MtgiTvt5v23e8J8srDDRH1FtvE2g3vJcAqTZwSaG96xjwQRHqQeDceowHiyeCLFWLQiJ36w4Wfy9FmJxerz",
  "key18": "5jRQZmrG4dhcrfmxEhKEThgenghQ1pHfU3iVY5Q3hDdDdFMqye6DgWmZi2rxprYAzGxmnWj9CSeGbEGBYtDEktNc",
  "key19": "A4JZvxZkFHLL96Bittgygc2VV4u9cxPm3dZyjZUF22iFYQzpZ45DeBQQovxC7Hn8mih7A23JJVAHzCQkdCSghQQ",
  "key20": "4FUSSphqmQTwD72DJGerw1rynFH42yyfKQVLePiJtirZRiXvdXF2UTvQ6Mgo1Nwwah7YMZ3rDYUcjttcDUUGD3Kd",
  "key21": "2nfJRA6dRqDqW7Kgay33v1Mxars63942CLEtb2JPAMC5XCK2Gv5FBa1rrCaPyh9MGo2axxzhut3nriKnHG7Gc8eX",
  "key22": "53MkAqT3QYkcVK767Wsm7wjCpZBgfEEiEdwuKk8AEXfTR23ocsaukXU8TpfZfA8a6khMAPfWxHFRJDgSA6vRAWvf",
  "key23": "3MhxqpdyBUw1424SnrFqiQiknAtDGE5ogcp4ju1ET6wRUKGZC5EF47eqiMysAcStow4iaKf55rQkPsRNeEMBU8Hu",
  "key24": "2D1HZiLDW6zwYFyYGv1N1h31sw8fVks6aBNbZSodo2sFt3SoH2dAdVQk96VqQ3YNnNR5ztawkobyH6fRM3VBuKDY",
  "key25": "5AyjXxTXSiimW2m8c5eQyKYyo37aa4L7CySy75YipH7VFsa2jn9t6TFe7BbK1kp3vakUy4dvjMxoL7cTseu6vf1T"
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
