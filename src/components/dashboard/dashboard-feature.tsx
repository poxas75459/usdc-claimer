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
    "4p1pzvJk1fzZ5FPvpWY9guFvyqcEj3V9ieo9NS3Ao7iPr5jmf3CdpV7VKgXKyYPaRTNKSuYHjmxPf5A43tMGtUJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtW43rWbm6xzzuKFf7oYz7cWwZaZJiiFCTPB9iRxpD8q87C2p8nQpK5DRePHsiJziK3ndpof9TGHNZ62akW8Tn9",
  "key1": "62EzXvhauxP6YJXaPJMQn82UsLeMViKg6GCmFimjBrntCngCxPTxvisthPctrNnvArUVFvJoQmzWGBvaA4qerXDy",
  "key2": "2ytsz2JopBhYR61boi6ZEtdVk1fEYp8ihUfkx7YtULMXGDBPtPRpCupa2ffgTsnRkTNduGPgyGZbCAeNwbDRLkKF",
  "key3": "toHHN7Ws4ebaqNhsC6snE6yDTwxbfFGuMpr1L3g9S6aMHeEKfu12fDBUQVGGr4pfbLELrQBoTa8hUzzdjBQWrzq",
  "key4": "4FH4nQkUSrzeHY6cFQ6sMuvrH7APC1xmpdz6NBFeLaiZfNAuoXQpaEzoeSoPKaz6Bbnfgm2ZWK6RpeNzRwuPtY8v",
  "key5": "2FgUqqXNFN7Pef34PRpsZP6dEnfZPDKzr58TLDMwdYiHzhBm2rB6LLm3S9ejPw5jdX92wxPdDrNE6NspCnfUUpyU",
  "key6": "3kZiTV5snJBEAiM1hkVJWxAzMKuPpaFUxE15MrjqgA4BouRB6jAY9AqwRR7XNfSZ992hRdaKQWhFXaTLvCxj975D",
  "key7": "2nUHAPmbZNn5aAe78HBScWF4kKwX9puyjHbZnShDwsvWRgqXMPSUdHCmTkz3DHcqmahLspHi7ZmzzmNhwr5rEL6P",
  "key8": "3UPmUgCJfGKcQhJR3QybwshxJU5TbYF7YuXDLv5RP3CeM3zHSbDCgXhzmMYzDEPLzsHet7H4UMdZUkhc2XKw8ucs",
  "key9": "48f6LyCZD8r8UnppkimRy7jhxxNzey33UQjNpvqSDADduy5pGigo61p69iu9aDQuJwPVhXvzph4uH6dwaHzJeubH",
  "key10": "54p4JekS4JYJBTa13Kt3F41qqD8qVd4af73EdJ4LtT35PWk7a3Smbe1RtteFJMuYiZj1xjqZgpnbfq7PP7ZSEvG6",
  "key11": "2ZEuKbiQ7MfHYpmF6dCqfZ3Jv86ff3ccpQ93Suke9Dj6SPzgBmkr6c3HCRFPF6VNyo9ZTgsGUGmKhbEitjCdakX9",
  "key12": "3CV5rE8zYtzTpYUR6RuCixo9cTM16nwsEggLHzxjcxZywhmbtPVHbrbUQNCpye2sB8aqEgqwFQ92p9KrtAbVif7r",
  "key13": "5tEKe7ot3SbRATznUb7UrTK4Wwmnhxn1gKpkuUgSa1qH6AZ9vTgndaKrEqaocVtFSWHbwcg369U9oPsuix9DPktR",
  "key14": "37XNKMTTd3CVVe7VVkmnga97ENPgb6PmxpBpxZXShZaAY5opqRtjzuK2b7M93MGXDptS6Hqx6PYQCCS2ahFhgq23",
  "key15": "3BtCmAtwk2kjdrWTUY6CUrFfTSC3MXP9owjhss9DCfb54ikpUaPip3Rn3uEEV4iHWs7NN7bkfpCKVKAraxja6nKk",
  "key16": "51MJeAaUBGa4DvqVz4BzwaY752xrhPWc2rkTGgVYuRuF4LVug54Kdeh1SAyZN8vYxz8qd6s8JAmqYAe8boxvBsUQ",
  "key17": "d3S4As6aPuAGeBDCspRjChBinvrUytSymtSGAdNh1W9SeGPJHXkWNfc5Rsq1mSACwpWY6JMQjWHdFQpCeEdRXzy",
  "key18": "4UHWbqQAP6vpm8pR8GgMt8dhikZKCEqizhDvWVaS2URYXrYN1dD17q2wspH2swT25ifZZYqdaeuFDW26G26Ruwy3",
  "key19": "73MBbrgr5Ri8Vj6xvu2GJtvSW8FHYXhuZkf2qvRSk2GdhJCCD8xkjuP6G4ogMUzVkcztgzz5dHhCu8E14xnC4We",
  "key20": "2h3WCgdF6mZiXB2aA8ejVpg35jJgBtRtHUwLpz3RvUavVjHoUa1EqWrG3qUGbbtndUC64bouHwUVzPH7uEvrgcAY",
  "key21": "2Dbf1JfrcXkWEFkWk1kdjNoPZ2rN8BkS6T3WLeGAtfDkKAHVXyj7hPuLcz1zLhZAAHiC6n3qeag73HdsoKtPqZVc",
  "key22": "hSEWFeprRGpJ6TcZf6kZo9dzQASNnVoQ1KPTjgx15BPKYYbcLdP2yh4NWo7En7mrjp83CJZz6DgmXscWGM5h5Mj",
  "key23": "yP9QZZPkT8cD1GJkQ2itW4AzkaGwRG1WYVyNBSyvFLdDbBFysh7Zr1tRUdrTjsYvA7QTLEGNzASbPusL2BwoHeb",
  "key24": "5r275vZyaC2CWm7xosF9ACEFvCnKgxXZFfRPEn21scqi6WbdMsLBgJQ8xFGLqwby356mgguDRtXPadyNELNDmRv4",
  "key25": "26EuoVDNM7HDz7bK5mYEPDDwTQvh9ZsCMPedQ6MmPw6FF79C6WVGYYjLT323joXovEW6iViFcFy16MdsHFgA3A2Z",
  "key26": "48Y4DDt8FWvKtc2Bbz4E8Tmdc8HkARa5jQXYY14BsmJtwWmV8Yd8eQ2D5jjeEiEUxDHMx76tHFSbrZumRUSanCu",
  "key27": "568mT2PtJzkrNKyfUv6Zh1Th4uLG3J6mwqYzZXJXXkjJP2Rx8pKxRkmLE5znAq5r13akSu6dXC6ZhSDR84xEtwVb",
  "key28": "W1esDLSb4nYmsr38EM6k1LS4FFba92im1cLAKW4J1dS3kcfjZCBbjsAtBtPbzeX6vtAymzsSTnLfqVy8vD5m3eT",
  "key29": "gFU1iKFZZXC1HQD1GsBY6ce6eP8q9y3siSQf3tYQAaeZrNNF1gEu89yLVXzTLgvLcZ5xTPm9HxsQwneDbBm7ARZ",
  "key30": "38HZRHQCqL2SHyvk986BynizSoinni7yE8LYdzAWXJTr3Q5LeHYLErGMYJ2XsKchjvR4XayWwu1MbuUWv8DamyZH",
  "key31": "33xUKuNjQLQtbgtPjfLMcpX1iS4G4bFqfzKbJ8jCAxPWAwapPnMKBiwb8pPTv4a1EkAHaWK44FNLMxKVAqfu4Uo1",
  "key32": "PNigNjYkCwLT7fZJNDXhaRxpGVKyaRuWHhYLq3VkbQbjQ6L7GYKojpiCcQveJ2TGdNcDyZrdGNwne2PvKMdX46d",
  "key33": "WhMwqY51yaK41of6TrpnahXP6oNKUshRZMfjKLUq3fvzTdkA3qFiNNrmh2QFAK7UMdrKgo88NrFJet4Y59vAxF8",
  "key34": "4oZNt4wNFo6QtoLZwpMstFuhfPkoLqK4YME48QZNp37bJFWjak73YJwXeDTkxBinYG4TKdh2sWGPyk4Pq7DqRTaX",
  "key35": "cWQptGjF4F9SqXQf67AfJiUH3s1RQrdLqezhPBqEwQnQfkChKV3xgzEPpY2oY23bCJKqCcZqxeizNgdSGz8AgAo",
  "key36": "4HeqPiwE5dQCDmrWbSkPuBiXp7nCs2KeXLtiECrqB1MrdbUqzbE6zssVTkhz6dqYVP9ajm4yVZ9wuUgbVBWorKT9",
  "key37": "55Cq1ZYkxhQHuBqamNNV4Nf785biY1nZNmxe3wFeqC71tpbmXstmZUcAiz3PuS3q5QqaeApSF8LgsrqDywxbwoVT",
  "key38": "xjqn8eNEdXiZLeY43kBJB2gXLARH7zBPBbUcBfwL2ToZmeUhsEngV7GT8qCmeYgNSoZczyyHmsSSXctXxhMj2kD",
  "key39": "obfjbsYg2HC9r82tzAVFnxprmmsZGBQ3vtQJD3qHif4eMiQNp73WPqyGRap9ueWUyHe79zQPMiAzKpnnVCFShkm",
  "key40": "5ZXHa4CC64F1R2sDuZcqAdTfhTGKeEorLv6sbTALHvjY1CAFuGu4mSZWp9GwUycvHXkuhJytc6wH6Qco4woSTGR9",
  "key41": "48FTzLz5MGBCWCQwi6XfC3PpdopLSm1Vzcn4zPPqgXEZX2KLbHv7XHK9E59VCFs4uP4Zwr7TU2Jd5hVmkKHdDvGu",
  "key42": "2z7Q1Jnfz1AUyKQz2ycFGHe6meDjAgUWTcF531bS5stpRbDjtzTxzinAWMxA8wBTq7KvC2xqkCf4qTDNWb36L51J",
  "key43": "4fW1KGDCgeGMGF8mmnt4aAhreZuGEsVXMTf6zUZ1ydkLpzQfTC3NmWEPoAMZ6xTMAa7sVPx4ETcj4rQPpFLZmLhm"
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
