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
    "Q95FEnp2eYmHM93B3LaAGwQjbsCgsbgJ3HLduH18Y5pkHuG5EATDPfCTrnv3RN4KoRPXM7yWCDqfx1uwCLVfP1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2B8BA7DPkzc66Ap3KWWm7HhF63MHBoS1RfPTFsnkC9473VJW9i3tLFxrLvaxP3AUF29u3trUuR7Een8u48cCNT",
  "key1": "sNn6NbR9cifLzD9fgSCgQDB1rFhBbqyrz3BADY8Qt8XfH7BAZVTDt5RLTTgsNjdEE5RQDQBn5n9uoGaza6zsAFV",
  "key2": "45TK3Epe8KUwmAfX8nehq1bHkgDqtxAYNr7dgS67hMewAz6PRvNHtUcTYyhMKx33APtt696nEvT3zZceLMv9sgD",
  "key3": "3UEaWYaVzdASQnHDhrTEs684ovP51EXztfAtZVqxc3owrCtDJXw5rKdnkRt2HfVK3g3mWMBhYVwkqYNQWb79fjFh",
  "key4": "3kdK3jwQmUDXAeUa254DwZMVSv3fnoTvDagC7RwBxe5RdqqxhG9PjSbbQbxoAr2t76FgFjy5BLSvu2KmXRFMsmpp",
  "key5": "3nsKUZW3AYQRArpTemx7BW7zgRwJMgnCCGoiNBSoGC8BNuP6J2pECvPdYYYx19nV9EUd2PGaU7oSd7p2LuvGnocR",
  "key6": "28ECR1S17SDmk3T6TjvvzRqvZY4AvL1UkiJLTnLJyBPJLLUij1MKe7GVzW1Ju4FbPDQn2C5sPUDh1Mbtj1yEJdYY",
  "key7": "36ddtb6hfQtBJruKBtyzDP6XC3yKPtbpW4yBUaVS4W6tB7F9d49jVSma5GTWWu5EJHQgFM3JqN8v2TXqHGcMeL3E",
  "key8": "63rEPekFvppHsApMfG7eds1BUQFSN1UfbuDLK5TCH5Kxre5qqdL4nV8UX5wvjwwTe2Mmkqzwii4RMpTk7M7vM9VM",
  "key9": "5JEhnfaZLHof6Jo9wHAVgifQSaBiuuXnGHhgUse9krqbqEyWo6HiV9MjzLUr9Sjr41uKC3AEhap2Sfchi6wCqxwJ",
  "key10": "3hS91GUkFxiq3koSkNBSyfTra56k6bA7QZZkBdoM1fnoNBKHMSn1p7D6u9dC9As3RhHNBLeU88Y39tWLUaMwQy1E",
  "key11": "2rkBaB9aWfpcXikuaKKFrPe8ZPygJnER3cDBCtsNSgcCCwUdmNHGEVMZNQeENJgKFAJPW76UoroPFZbqMGXmmxEf",
  "key12": "3QB58X41TLbUPyiikFP9TqQTpS6ysuqqCi9tCA32dc9wFmoqHLiPTMWfe8h6cbpjSm7YGP7Z6vYBG1eoe78DWmi2",
  "key13": "5dqM4UmSgpPshRM5Cfp6cJWww89WCTrtnKpK1eoed3NSduGtjCfQ3zyfdzfk6estdB42T9yd1oTyCMZCXpGZcGvx",
  "key14": "2RGpmg8nUwkmeW9tTfMQvpBcTEZ8Ei2PqeDyN75BZwzZXNxT3rWi6EJbrLBdC6eGF8mCerm3tYKfdNDzZ6YphKQV",
  "key15": "X9kHjyCFiqvqgQqafZ1VH5TbhBKc6LqE5jjT35TadwbVX6zQF2vf9ikowupgAjUJCjDE25SqjRifaAV3dKaoSkX",
  "key16": "2nLSR589NTPuL8eb4igUc79ffCXbSQH3atnvQAhdnV1KCSuq5n9xTh6fKfzLLrcWPZHiFXgj9jBKTEz3NeLWuzbq",
  "key17": "4NhEgcjG2q9pYNbxAjmdbsX3vbsUy6c5KPWSC28mpZ5Bvmc139pnVeDXVgiFcvoTj7qasJaJ2fSGLQhFNzDEbUZY",
  "key18": "PtKhSvryA42VnjTR25rXVtrq6zo51dZ4K3ZstBo3TiNfjHeZFb4mTNGEmNXWUbjejbB4pTgqfY6YGzXeZ7TMnTD",
  "key19": "5sExgYXGYHTsi9YM9Hnea8fPhXiNCBW2AqGoE52i9EmXeXL5bhApT7FvDpVDcTdifAztia6Z63a9rsNhC6rhqiNB",
  "key20": "2MENsw4wDeQkHsM7k4rErjFF16LPkB8Uw26UB37V2UGGMzSjbiApNJSUMwCxs4kaKq4pvdMHxAr1VdL7DXQW2tns",
  "key21": "2NGwj39zSjfHn59RXHsnHyxBJqQQ266YrQ7wwSqk91aQenAgHcMapgXoFUaCeHVmDMLf3nwefJtTBEuwyWV1R1qC",
  "key22": "4aBcpyCFoTbBuDVeXYfuD9N9xfhRvsPLpFsaxM5keRxF32j3vnvWNngex77dU6V82nTNSnMcnW7WWdYBefrxc7cs",
  "key23": "mUucA5XmNgvZQxhrDyHE9dxLSHc4MsoSjpcGvGKcLmPiRVhMBEJmpsFzBw53JKgqdHptLJDJvvUmSnut15ojL9u",
  "key24": "jQFqFRAedLu3LuwubrULbaV9XGatdsW696p3SL2t1Jywhsi27QCxuEHh6i4DJteqCpHB2E1vpkfPttYqGDgFw1e",
  "key25": "53WuznxUXFQSuXwG4hLT7s9a9mbcdn2safThrMKyGqxsj93rMUHco4rJnFJkJZdy4uNdTg9HZ2Yt3VJDsJ1Z53Cp",
  "key26": "TSL9jPte8NHq77hnnrN9rHcnUW3Qq4ZvsNzwFnyymEDFF8Y14rAyKg8irqimbcBNU8aeuK2eWboXSLnLVW6VBPx",
  "key27": "Wj8SRFZoP7vKtSbdkDFmt9fYxMS6C8XkjFjSysX52C5Kv8jPRaZiCoQ8XgTjVuzHvC9VDyfkNKg8W7WfGbKTgqf",
  "key28": "5tX1MKRwrxfqD8LSWZfbeBeXzkvksaEW73fh2JEzenc3A5tgDXwskzWswSuN1YhC4T6XHUUqEwcrWKGWdDy8pbkj",
  "key29": "PNzA7DjgV2phD2FYDPFWski9xEbiPsyAowo9jJBy4XmZ4r9Gkp4qh2nPUL6qwrhfDrFxEfUswUrPVqYALCNA7bw",
  "key30": "4mboQJtSe9y53GxTGhWpKHjZ2jS2cLwvLfbAc5fkTku4nb4XyUKdLGwxnZ9pTfo2u4gYyAnBkJtrbCFPAzjFHWn7",
  "key31": "5JwG9egxodT3FUW5cCBQ7uB8R4ZFVRLA1E3y4tB8bhCjnzqAx5p6G7amvDJ8g5eoHkuDdHL4WU7ZHttPqwSjTrnN",
  "key32": "41s4hfS8r6xBTcddJC8diGRfNiH6psM2wX9porPiADhCwgXUacGriWxYCKM6oNMy26xi5CkQdo6qsGEmAUi44jLp",
  "key33": "4VQPD2276DaXy1Dr52cYaRxX1DDyrJR8VKpj3ZKWfikpE8H1gbhS2rmNFTnPkhSKeTZbJGmKLya5Q7tm2bHcginj",
  "key34": "r2sohHPjBmYPpf7HA38eryrBWLHT27LQJRHRNrRoDum4YL9nfabxdoyJtwwZRhkRTAMQ7AkNzYktti4WbBi9Gff",
  "key35": "5vpsEwNhWpoYtjArmfzEpXTr41feHBYg5AfNHJVmAUs1dnogj44sKgPfue58rHuw8LVK8LnBW3rV8Hm9DFbRreW3",
  "key36": "4T65JSsTLmoqiabpx3piDZLonygpEHiELLbNGdGxQKRnaftSg86dzCLqicvTnRayYNHb4JggVurkQpZb1wTx5F1z",
  "key37": "3MNQt9SyYdoyPrdjR6zZL83B3FwiWbpvSJ9VA4BjTSKDrW6yKkAxSqRUH5uR7a6jF7eLfQvTAF4hP5DQJVWY9cGc",
  "key38": "43Mth8cNPaT4c25a8ogZ3kRpPe3osYL2UBZ1FCJucX8rwQoqrdQbKAB5yksXwuCNWLKQ5v3ApznCjxEEroJpcAzq",
  "key39": "2Guqpa6DfQcrwLReZYwmzC46kuhUWPE4BGD9CWMmRuFtejw9EeJzixn4Nr3hry1XHeDxhFR9GREdeZ8twR35gKRp",
  "key40": "4fKup4NcgvocnrHunTLLVNi9KLcaG6gvP97A5kSar5srb3ExGzs1B4XmmHXYwn9vbL2WzjKjctThFniw5AFi9gK7",
  "key41": "5jodKtsbKisRtXwvEMkftbAmCQgsXKe6b79ftixweJR7cKYa4oi5odbx1cfJc5R4srmLoCdtDSfU6iaH3P8bicre",
  "key42": "2AVxpAX1XDLkChuDEmSu5pkSvpzSg17yynBThSkobcdAazB2aK6vJr1f11mZ7bDXsY62EvYcrfrUAooLYAnjzqEx",
  "key43": "DaSPFrNhTZm4CrSj3AiYZntM15vbQkhudGaDKrx978pEjmsg7gNj1F4dE7jsyDu9ENWnatwTkmE8t96L6hmpp3B",
  "key44": "5y5d8MRgD4cnZ9ivuq7QGJKc25JSvBUgpLUdVe2royhp8mZiWLFBV5D1MHaQTG6oK2nBDs2V7rnuArNoqRLWQ9gU",
  "key45": "4VbBLogrtSvd4WuTZqsqfm7HobbQq13YcuH3c9xqNMfcGXsztZ9zKYZbZrMxxTsL9ASUtGce1y8697ajJzccgz4n",
  "key46": "5FJGv8iorg7cKjUcZo4ZaeLw9ZHUaij4VD7eS5B5kiPnj5p1GSt5qeHjDxwETHGhnrAV25Kb2bvwA5Yir6i43hCY",
  "key47": "3EG8V3U69g7VSCb8oAiYC7hofh8go2ciGTSS7natFGjzWhfEgZBNHfE7N3dpbRmKyrp7DKbRi2gzzX2ZoyQG4Xzq",
  "key48": "2wt5Jh1Xtnc9ZsDGweYSqSAccENvB8EjcUdguVS3Q5828WJYvkYZsveGB3Dbmz6KAvMEBH4yb6iEefLWcFV7bwS9"
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
