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
    "RQgvvsUNbvt3tZfoBTzuEmNL2dnktV2n7tz9ALjRY5eDtdymRfZ6z1XcajbqMKCn3cyiZPTwzcuywFiz2HrgHzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySc8ia2bG9VtfiyRNMGaDJqeNMUYbPJ8BFDcDgsXrfG118rkaRw6Fnnph6M4Mwxdu545YGqq9kmr5bczEZNmSKg",
  "key1": "4RGQPyztEtThKSaRrVRwNHX3zKpkE1VHxyhcJ7bvmCJhrDzw3Qxn15j8CSQrBQZh7ZgKBUujnsrvLb7frBfm9kHW",
  "key2": "5sGEiYdVkhFBNADCHyDzMj92w6pVoj4eUqejitiLpBy43mvZ1muv7gYh7k6Lcy7rbKBPrKXtAxbNr8yZWVmuYBzs",
  "key3": "2j7Njcef299jHB98bzy8Hb3XicrAEfvGUZYbeLUobpeBfUMzwS6nRyBBJXwVxNu6ybJzHSiw4G88qXpu3XT2J7jn",
  "key4": "wyiyqX4J6gLtyzCWkvrfoBEYH7QecBhAc8aL6Gz4LuDudWgJXXBUhVRjXFvXVnc4s4rJAJa3HaioTH3qSnw2GJW",
  "key5": "4PpdwLef3EbvT2tD2Zj56CpGYsuJSBaKnyCTwTexvJT8KU5pKdHACsyRE7sgL2Es99kxoC86EBwfmEot3qpMUjVR",
  "key6": "5wkJ2Dn9WbiDfhrsJzLx6AdLZiJGbwEFx3KHBgtK8yXgQHQhbttZVzcq3WaXAfjcbo9d1CeWZLRgq98dNz3jRxhD",
  "key7": "5bAEae45iocfAta2DMTKPfxxgp57vY1Jjw2MgaDbfK34cN1P8C4FXW8DTxUJDMF9zPdzq7GAq2dNJgV8nRakxub5",
  "key8": "5GJFWCsyQ3U8Ma3gGJzh9P77pzwrj7eTWCTJNro8D6yvy9mReDX4GMw21bUXhxHxNW7hQL8yZSTpMZzkWeoU2km3",
  "key9": "2CaksUu8D9XrDumKUVupa4NuDKicknVGMsxFscB9FvFnrMXGBXhECdVP4uKxg3FwDrHq3i9Huhb1yzHMB3xiprhE",
  "key10": "2qiaq8b2wqX81dLRd8svJ2gNJyUJrjpVA7Db5ooLMrqoYT1xdRnBfnTfKRqN6Fuw8cF3nsXUzARMvECmxoziEp2a",
  "key11": "XyveDCcvNsYAF9iK8WiP8VUC5RQwwPj3v53g73SLQG58CbtvuQnC3ELn1GFs4BDdfcxg7XYYcwKT8vXQwav1gcA",
  "key12": "514a7F2EdzUk5Sd1oGyfojr45jE396bSTQ5gSQFc3UAwXthkVY1njDZfsfqZupxmg4LinVDspM1NZHCU3nQtuiWZ",
  "key13": "5T752ZttP5P1PrDqgfjAMr1GtcMMRy82ibX5Fka6sw2qgsazKht98xVVieQvP3gRP23UWEjCoAraM61MZkyjLpM8",
  "key14": "3qu3Mok6hJeJvmzs3mUAb9c7vVXJocmn77smVAKKyx7EeiPG7qMuywHD175ncEjcdfYQ35fz8cRsyecSRowewS9b",
  "key15": "2W7untEcXnHFkgBVLDUatk2qr7dHbkkWH534keHzAMJ7xkWaQEo5FwJFqmvD2jbfKznJUB8a35vMVa2iY28MdRta",
  "key16": "5PtsipTNbaE9fsxmPr3BcFuJNUZE6wFnHRPJtjHnvMsgRpdRL4LsT12eoEJdNdjcZp2XgS5Bex5UM1DUxfZTeDkf",
  "key17": "3t4xxKt4gUiw7iVZ4M2pRpCZsY9TFdjzyvuvFr9HtACaZfupisfWWiYgs6zXXM5Cg3ik4jwzWj4dNCQ4sXxo1KV4",
  "key18": "uiQbHQun4LksiTpgHGGp78uwzvPwxuGBNwMVbVxpqxgCendUQo5tonjTpUxMTaBeK6ibs1V9PicvYuF9WHcW87s",
  "key19": "2q53uMcYikyAFaeqGCKHMnUG3MyAJAkDBj9veGjVonse1R5dW2n4nzWakdZFnLWocRieBnYajirLfBjRXQ9kjr5t",
  "key20": "RUX8CnNNcg3r8jD6ML3JPJGfQmzeuJtLXttR3nqitVX1sdpiKMTcJhhUA9NyHLvMdQ3JEwWDaCENdXV2gTG8AXx",
  "key21": "4FtFRmks3tiHacXz7CEj5Tui36sBQeKTAeCEzBjfQYkQcfiPHakw8FTeKRhbYAcgw7zrigranj9LowwN4nnvQ6xe",
  "key22": "5JSHpb5sLTCrckzqQTSvV9Ctqrbhxbwe4Sh3dyVXHkHjtCo6GYmLoDmtia7BX5X58Q5R4H2jtynup4MFZnbXjyq8",
  "key23": "3cJtqL2hJRwQyz7JG9Y4sJi6PiotyJtkCHKuaZ4rtxvHVS54rdiCNc4o2B9ALKWyt7vEpNrwAv3aDVFnpY9CW9WT",
  "key24": "4Vb9jDjwJBBD5JZbNzSF7WskcELSEAc5N6aKfQpHe14qZiuePGbXYTU4ASqgXD87ZdAVmm4T5aa7Hb2axgpVPTrE",
  "key25": "X5YkbpBtUSfQbSYikrUJUUwUH8q9xXL91if71czjaYwsdwE1rL6e13vGdyRSxzx6Nhu6DpWqYv7AMWKiUEWMS8W",
  "key26": "4gcaqninarNxdUEcoLNsiU5VjnqqA34yPvNr7miZfx1YLgMJAqLJqGn73o9szfsjgk7nf3rEN6R9R9VcziiMHKng",
  "key27": "5BMH45phrqj4gyzLT2VL3zTbBTDrydsQSX8KqofYZmkVnTk6Vxg4abP4Ebiy6wJHyGHFxvvS1U5rXJRvpyeeysoB",
  "key28": "3UQfzAeBXsfhmyyQghpahPJS4F87xQGtVwoxUTtouviQPsKqi8yd1EksmLmGvRHS5ywwgsYxZo5L3id7xYaGkgwD",
  "key29": "33tnngwUDJ8cgRrVSnd21dfJXrXBcnLyD6RmHczfYi75bYyvQUGfYhWi5P6ZiPB7x12VXESNvxMxPHZfhK4BF3yx",
  "key30": "3B3nPVJMEDqaqWPDGNwrfYJT38Ho4V2PuJxzdMAqfxyC3XMTtvjDnkVL3y61CiYKRLfa6UAAW7igDo9xXc5VL4ct",
  "key31": "2rhTdUQMt9HivrxFguwg4sDTLFJ7GVRFN7AxTphso5FRdoStzrk8Nv6HBS9wQZ8uhmLaqdsNTSzMvAYEEU3hxkoZ",
  "key32": "4x4yU5uhKn5CWLrs6ZJStMxRHqsVWfVvDZGw1H4aET43L9JWPYY27emfBnQK7URCP1eeQCjxoz2CAEG3MdTyJ6wQ",
  "key33": "4rUUqyKpg6rTvHdjKdqawjBrnGVsghCA7h4nd8JhzEqfxpuLo7unJQrmcRsr88E6JugiHCzqtUVsaeXDKpVSDhXs",
  "key34": "4paCrcm8uCmpR7f9zGWeRFZL5ssPtcpKg7ngRPkKTv6mMZssp6eTSnJu93baxboDvkY49PsR6wbvgYnHHYGusaGS",
  "key35": "YvmdgZoZk6Y1xgLQde8HNonrz2jaHAZMogNGTKxyZEbL4X8WEm4v2K3NErrdscRGi849P5hRsE4ERCP8JTHVPja",
  "key36": "2hvdK4biPr6JEdp7EL1QtbxX9DdpdBz7PnGxVzTp7V4Erxsidod2icEXWD23PaS6ReUpzKyevV8EmFFkpbFiU5G2",
  "key37": "4FUQ9dXpYhRrjeiGJM8kHymLKGHuP8tqVNTkXuZVdpSoUkP1P1Y8imj3QPSNp68oYsSmMuwWY8CW7Y8dG2vfGir2",
  "key38": "5QuBKvA7hhUuTK5jPQ9ZXABm5Mcc3hiJaqRmNMtbT2gj2QA4SJMxYXe7GSEkzK8Li94ZSmAk4P9VCRPKEPLDvgPx",
  "key39": "oyTWMMcsLpfcDDyzdEw42j5v8qBR528vcmA9WKSpwe5eiN34u2zse7g3aLVXcc7SNDinhWBqn6gvuvHBHiqJC7q",
  "key40": "4jVNYBsaTF32EGz96Y3Hsm4cDuu1diLhcJJxBsYsXAiVXNFErgABs6F4YWKVYQCq1WTeY3pj5pQDCNpoNXvtfD3z",
  "key41": "55m9KDwCiv65zLa3L9EGqu4M6JAEzg9wkCFGmHu6ssyqWT3vpBx4PAnyEZcqDUZJhuVGSjUPG5KUNcMeRHHTHptt",
  "key42": "4o5WJS6LTaGT7oUKnc9zh2VZ3K31KAxxjUo74msD3BXYdZm9qyyZaqqhuhp1VtLP5mPuHtDenG9iELYBBqxN6dP3",
  "key43": "42KCodZfYGKxrgaqh3fmowq7hKccQZgGrppkvUH8ztaPpzoTS22n6w9fsZSERbdvK6PtXMkBoKdmdzKmAMUvMPPw",
  "key44": "2ri3pq62AhLe4FpGsEqAFNAUJJ2NcHdRQUtBDD2xDbxR3UnfjznDDw1MmRWBWcTZtuREKS2jP4mUdkZNhrBvgCH8",
  "key45": "5AroCW38ZthMrr9hL4baib1pepf5uuM6eJ6angoD7dggigJ7G8kw22H16YysVq5sJtyZj1edmvwMcNxhcJCd6TTJ",
  "key46": "zW9eGQdZ3wf1HBYj2ArNR1nHeFEqQWdzfUQZqfQ6YgmzsUcKJEtRwZ7snkdvGpu7wR59Qxs9hPWzVeaS9GqRk4L",
  "key47": "3xKiMEyyedpS7bhB8DC5L3rACZ7wf2fF8pvL92wrVEDYmSRDNysmXGFFUyu7jangysMa4MGsCZe52mPqrsyYsAXb",
  "key48": "zx9FmZFXReLK3hzRC7NvWw2Rd616bSs2k5SVYiksryBexPs7nQVmRaANZo24okxim415RQz27j5aAsKVuWPQvav",
  "key49": "5HLYmfR1EdUa8XLtmoCk5Nc7tXSDYMgG99QT9ibqxMXiEggWfymSg8nfHY8gL3FyXe8wrQwTSS91ck7atjcSRe7N"
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
