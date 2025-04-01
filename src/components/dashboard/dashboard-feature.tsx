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
    "5oFoz9raUdS32vGopV9JDY7nDnwYjU9q3YiNKMGKGQm2Av7xkndcXHnnkDVrny12R7vjDGvSeJeGvzjApk9NuxEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZ4mrwhRHmUFNth8ThGsvaettE8pX5qnfGV1uL23V41PKzTD2zjjRghLXr3M6CcEsPTW1MCHcXdUcLhMLborZCo",
  "key1": "4KatqAcSD2q9yqJZEarfbsgYXYHUYcrxUzAFbCrbP8HXqYo7ixUKqzpDhByQGhw9du8DMmqmD6RvqgmL4dAKrime",
  "key2": "YUi36ks4by5sJ1ppo1TdovdcpZqiySYGYsR9ehDxHFmPWBJLxmnhrQ8A1ug2DztsjjHxq68gwyhe3zkAaF3rJhb",
  "key3": "2iPfYsi4GecmkPdJcqBe2apJSXjWMEC5vwzL1BaKyfJCQAqeT4fHEVahp4mkMG9Nb1PXX5wcYByjvpaktTzrKbP2",
  "key4": "5P9g8MvUKWSqEgG1yY7RRuCgf5veuyS6aevXPNGx7kMLKfQxVwxK4e9NmPW5GXQ7H6uGk25AkfYoUy1Q98A3xN1C",
  "key5": "3DhP5xWkhyYExeb9u7eUsmg6AmYhQn39X6Nx1twskBHYjLDMGgr2FXGAK1BhMoAH6fJ2u6dyBcr88FNFE2qs7se6",
  "key6": "5ZMbPzLCywPh32PNEPMoxJohaXXgBxP2EhVD3A4bfBTvVzRNfJbryoU7NDRSnTaYPaXrVWR8wnrREeus9xtjyWad",
  "key7": "5Cm7zsFB3GHGzkNH1E4UqkaqkUym3V2QEjvxLRq39gcoMnDqHNHyLm8x2z9H5ykj83yydYaDxkPm6HswqweAbZEy",
  "key8": "3E5zDsLoBHrH4hSnZs5SZS3tPcwY3Lc8eRuPn6GcNz2Dg7HY2pfEZUQidfgjgoWeGW2gMK17LiXJFqPnKMEYijPy",
  "key9": "2wWgC46294X79k6H66mnoaPvkqDrGXubhxgpmqFUVLT7SjK5ZcXa7VuKbXUVMNFKZvpLtUSiQDsLq4B8vHHwkLRG",
  "key10": "5pnKVNKHFVLRWV7aPx4Xc8h2wN5QMtSSfx2QaPY2K9vUNojWfw9RVdTZVLVajM7mwQhNQSg5SvatHcQJqrkfGQhZ",
  "key11": "57Rbpbd3rC2nWE8UDVTcnmuCMXbGGyqK2de4ZEpKGaJSBEfExtneEx5ZjsBYA78CZK9g8BuVSJ6HmQBdPHdiYxYx",
  "key12": "5hfsSkDt7vHJp9KqmWhyxqHmjwX4GsHWtxUJoaCMBrXxhrxcicsodtDWgrFUoo8dyggsiKGSS31bQFhbz9qgexL7",
  "key13": "Cdr3KV8WZjKyQU6F8iBiu6vGdLLMZMxeCDce7NydmvHnNSgNfswidGGbqa6Ztn8XWAmG9wLxnt696tAX4ohR5zP",
  "key14": "2tWxX2WRfqsD33D72ztXm4dwLJg34KU5z6yEaKbNsmKpT2VxSkWWbVmrdMLrr4PFkiXqFSosF33GHcVk7sJmC2mN",
  "key15": "26YU9ta7iRthc4hHPR2vxVua8mKrUTGNS3js4yisLsw5VW8YfN5QRfGtVjgHeyhWhGWZ2Kzt27Hw5K5LGPJ7KKpE",
  "key16": "4m3FTkL94VJay1AFzcawZM5xCiW9xU1xkGwn86ZoWb7tpvdrcHGqFkEXWJMHqPRbwRH1efPDe9VjGhj2gxq7bLaU",
  "key17": "4CbkY69VdF9nT3XWXVEGxroQwsQRsQAG8vjVvKo7PUouAjZHkENWDCecqadhUobUwYLnY1vB8numVtwBfp5jy8xk",
  "key18": "5x1KJftdwU1Pz5XNcUpp9ewb3erXUJGtbLEpAFkEHNQWUBzsf41j4oeZ6PmPuJU3ibtDcWKVjWRYuNZt5zZSDu2q",
  "key19": "3F5PFX8nsiSnbYXKRZgXEaxosdo2vMd1wzmNooWAyDm8TdiM9sdRkyjz3hqkeCmEQHnurDqbeuvdWDw2tvWtnWzt",
  "key20": "3dAS56besJ1LWY8kPQiZSq7g69ga6VkoVrL8GWHMrncYjVEfQatnTkh24cHyo9X9NAyWyunCM91PtdzRvs3a35vg",
  "key21": "rBp2GS3spF4uX4CipqWhR9eLgJupLr8GgDBUg2EcgJkkus1gzbd1h6nPe8i6LXeZbbjrKYinViUvN1tEsqaBVkc",
  "key22": "3q4n1sPWFbkmkPfhSp8WPHNsKSZGVuy3KAYguSmQaf2X7p84NWHzHs114GWAXfNzPZPBHjP1rK4eeSTNQaMunAmh",
  "key23": "27wZqkkeTnZJvgUscfwkrhYrw9RZPxUminiJbavXgVitdZSZZTbVcRJ9CtybAFa6Xta6jN2THMK6pMgQufuzWEWh",
  "key24": "4ZB9xaJ77TcLEzzgBFBTdhJJx4W5DknN2RfqX8HYw83bKFBgs3saQaF8wZjB3fG2ieoo6AEZggNKTATt2LTo6bwi",
  "key25": "4hsa47Gj3ZhMJcFSUGZKxswRvqJp9FLDQF6TvkBepTCqLGz6AEjgc5FeQYPfkrejpw3CWdggQE2DpgvEbp2gMpRw",
  "key26": "2uERdVCFcuBZwPz6PSEcktajdJ4WGqa1ioLUFbGu3gsd2frjb7bzreUrorkeo3imR1Hz4r9jVUQEERfTa7Jif8Rq",
  "key27": "2TdLoeedNt9EWfNgc99LixH23to1xA8JBonLGhnLn6AKt3rGGiYV3KdExKVuz3oQCdFMKZpV9nXHyi68q5AsxVBY",
  "key28": "4LpPQEe5bSzVZS2TkM1gKYYHLpQhTkZg6E8AGUdYXgef99xf7bavc46fRfnVnNejXUtQ2DN6CAuwn7LACfPaESkB",
  "key29": "3nWhqny3Emtc7RTYvasg2TyG94XECyt9whS8uYciTq59MDiLxcphhd1uStzC9BtQa16Wk1CmQS6nnH3rAvBCLKCu",
  "key30": "3NdgTx7vzr1cxGZHLJBAFrug1pY8pucNijrCfV2ZHmKnm8DdcGsSoyhDUnQcSS4gbjnJL2REgXYuHekc1sS566Se",
  "key31": "3pQ14NaNMkZQewVxiBhH75B1vojsZDoUcMbPYjAR2jkyCi1pCfZH5ZCPF2E9NQNqWk2rZ2zHtdd6887iN5RyC43d",
  "key32": "3evteAMcGyt9HyrCSpo1J4s9qVZpszqDdJ6BqMHeseUySA5zbY5JJ8wQByQVVnBJoavDqap2GAkiAgRq1PbPFbM6",
  "key33": "2LF35ktBHVNop6TbVv88mDE366UymcgDRHHzp3ZZjhPG3FqAPqL1b8FmHHj2T1waVriTqYRefBGu3CCAx3jnWkpM",
  "key34": "4A5aEyyGrrj2QwSk62txj1Lxg6RdYL1KtKZqt9kRRxDYqH183cN2FScRRsp8aRsDCEV7CHXbdJRwwBnGFVq1Ent9",
  "key35": "yqHp9NYvZ292tN2Ujf6Y8GBnXY2bCBYxK3FCVDZ3SxwTfx9HqWEyx8dRzwmNvCUo7frTsgEQfjeqknnVaRTdVfv",
  "key36": "3Ki5idFnJdduhytqJQzqrsKBBCg7YqNccehHkbSKcF8AczHCpVfTcHJ277zYmNQ7vn2GdzYWyg68gAqH9NtewGqp",
  "key37": "54V2q6razbo4QxTHy5EJXBbHqtz5bs55RnMEJmdwquP4UephVaqg7Zp8XMwNBXsopy51rXPyNWgpR8a9vT6we3LG",
  "key38": "2wCVwbPTH2mB7mRc4y7WArWnSHcgS7nRkuE19xu7BDkMu77nQTcAabZroABTWXxdNsnWCMtzrTt7dyqjPXxLgCZR",
  "key39": "qJN9VErtkFmhhowEyQn4SWoMSnTQ5b4NhiBEy6DE1SQVdKp8XC5mUoC1CZt1dHkAwmySsguNTCpVWs2gYTsUjBW",
  "key40": "3osBjWPtve76jge2AmrR4QYqt4oZkbSkgDQEvGyfan3MArLR5WtyHxh7A1AJ3gw7nHFS4zwq7iD6BFV6NYeMMLEC",
  "key41": "5xSrY8FhRYSJL9V3nPnA4SaE9W7i9sjFAJsmkanvSX6n5a3YrBXwgtXipxCyMGwtc7LKqX68mhGnjaScUZYYCfbV",
  "key42": "35PkMqFQUKNob2ejDLhoa3q7sXV1qcH2BWUnts69ScVHsitBfkcmQAmFF3oFHPG5KKxo7TLN5kBhJoxzxnSJzT14",
  "key43": "5UoRUwQ7tTfYLMB3BUMNNJLL9R4sTQ71w4XzrCNH6X9dPAApfx4K9ZrWHX49p84vkaaV5LATqWjhQ4deMPV34isd",
  "key44": "4xtfziNMLPhtBt84UaRo1zjaiFSNxnJMRQddKZn8Fm7LC8xrNamdoHBCjsxTTDgy8ipFGiPctD6ZZzeYd6WE7abB",
  "key45": "4HdikYpfd9eb9wdg6m7PDM5aceDAdF2hknJRBC2RbdpXzTyFpeWaQh6kPjv3rBemJuxgGQYiwmX4VvpGDrm6HEPu",
  "key46": "4wZHgFEN1aqCymGuA6XCymU1BXYAsbKzkjt7ntE8mDruPpNBXJmSs8g48CtafHcAN6PcaUkN8xCB6DczVvrBaFvT",
  "key47": "53aLjDUFznjMQbhmTQ1FkW2Uibv43ydvZqrauCEybomc1wjCPtBKHhyYuK2BQWhQfvPqk2HvMYN3VkjBitLhgMYf"
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
