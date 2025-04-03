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
    "3c3pHddon3595yMLEtr8Gw6K5eoJKQCaq5U58caMoW6anJY7YrjDrrv7tnNaF7jWuwrSSt8PV5WjFz5UUPCS8vno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58cpwKbhUkyC2zgPLwLsNp4UvDTx4utCDS1Gsi2MZvDquXCY9oWiAKHvRqN5XujywippZkVkhngUmAL84znWgs1j",
  "key1": "4w9VB9ErWpHUFMjREFJ8RC1hXZcv9WcfDeyBzEtboGdTLJsv5zFYpkueaxN7qfe6AgGxdvKBHVxPStzjx4yjDjjr",
  "key2": "5Uy24SS2q34oWvrZtpQANH8Wap14nUWSHyMcyeFRVDWzsbTpiFx2s4gKdJQNiYurgs6uQLFz7etLqWmo8DhogFnH",
  "key3": "37prwYHioAVFk6RZ8ikizXQqHU56yk7amzD7PfLTFNmyLhkXtDhqZSEkt5xamVX3xba9ANgJomfkbGWWbiczkgaN",
  "key4": "33kxp7T8F8676WKZRXpQHLKnGiVAq5RhenuBGyxmDLSLYmdTCYL7ncMSLazqEQrZZ15hnE4VxFt89a5VRM7SvUVa",
  "key5": "HVhrzJJhSPHxQ5kgUiuQRVHihMxvtJsmMqCawLzMJzuw1a69QdZaEqqSxeDFFj9p8hLFLdy9N4yFodhkQL88R3H",
  "key6": "5RiKAGFWRQpuQGmNrdXgwwErLHEK9fRz1ULYz9tbsGj48gN7xpQs1HAkjijNtAGFeZx8aZgv54wNWm44UC9oDqKS",
  "key7": "FvTBfr5LnFNpoRhaDPxwsD9pQHb1NG1dDXdtptKUh4QEmrAnQhzg5uEg172RDngvU6SKXQQjxuAq7fRrG67a9VV",
  "key8": "3SPtZtnwJzxzRDJrh87h3Fcp6oohWqoSjMArWsSoqr26eLBE33NPAXiCchjS1uunUDLUetiyjtSDCtXEi6dsRTQd",
  "key9": "3aHXnzshFdCb3YKf3zeNDJtbmvsvdj8fCsZ47gWKsnQAgf4fgjVBQh8GDC2bsqNKry6gEbLhEuc79AzGn9utyW51",
  "key10": "52cbsgoN3X9Fu1QfP9GSRNQdiU2MMJhLe1WL6c5mGpMytUjPmZn91p2EDxzsSdyaadJw7wv1a2mDQ3c9Y6a1XQjG",
  "key11": "4Lo3YorRzbrjq4xZzoc5n74GLdQyuzg5FyXfpyn5cTBKrN2Edy6NwSxb4zVzZfBMDckkopwmKXsPM4yBmTeHghSB",
  "key12": "3CPtazDAzuf6DgxfDzUfHLrUK7GQDTMVX1jkxMZCrQ98DDwBdKAopqioRi8xUBtSF2sUVr5TopxwbgKoeN124vH7",
  "key13": "4qd3SWUgEfjXzUpoJ4wNCWrwj1wBn2SK59Xe6z9aUrcPKGqUUiWdvR4oMCMc5syKxjCDuFCBTEcEbsyugHHZftyh",
  "key14": "5biKHxNA7QkNnVEzViKa3B7wwefXsFmDfmN9qmucAyRHtFtBtd2HtwhE76AMNYgNJEdiMkccVzF3DZfG91BShADz",
  "key15": "zNyUVAYxh9vh1Tk2GKDLdBYvhrmAVewY95nyrXAwK1bE9Y6DDCk8w6H8pRUea5vdoHzEXPUKaHYqnWJvR9kpzxr",
  "key16": "58K8mK2Wjr37a3czgXq8rp3WrUpiM5qfGG7oQg6W4iaFvPPZvtn4yzLvsWrsFDsuqLqYcYEC7qZSN5rX5bdZMiwK",
  "key17": "5z9jNu9F7y7f5JeUnFHPrW8yMxGhnVqc5EzT5azJrPhmqhL75VpJxt1URi3xA8HcGQ2HMvtRZhFJwqMmJFXG3TTd",
  "key18": "2nuZrYssRLUQfPqC5RTQgQrSzCUMeWMAneo83CusAzFfGrjUcipknHot9fwQBcpyhUoRaVSApyZtABAnvDSRiTKQ",
  "key19": "2b3SirkzYMGo1SB1thxG8rFSiiMgqv1nMaMKQ7jRNohZxpdkRxafyKZsXimwAFmrFmnynWKx32F45TCxenWTZ3g5",
  "key20": "5Ec5RSZTz2kr6KS5hHx6W5J1ZMpw9ZNyGXFrx72E27stHVtKsMughckWY8dM5oZqqbeMrragsuBTKitvXEZwvL3z",
  "key21": "5Bm7XjVY8SbCd29vqqcApz9Hr9ATg4diq3ZaGt43DvxsA5PZvZaWHFqLNFr8rWPhHzzkfy62cy1Zw4zxE2cqUcJU",
  "key22": "2n3D6qE49CJye4bZ2XDxgzZSvedmvnuyZbYAq7A7egh72bcbqk66BMDUcTwuKCCxdcQ1GNjkweiEf26AfChUcrxu",
  "key23": "V3ajeDwcsLFYfrYPMVGeuwhSZTFhZD2eQycCWvLxo2EPXGCLm4LLagCoCDLiUGkohzBCqsLNdkcvEc984ij7Xf4",
  "key24": "2DRnTn5eGBNMH9Y4u7hjSbFDWMnd16mUSqthfrkPoWeA8CQhHN1AnmkGMdDQ23UmaEaUL9UiXTqgmbPrnp4oZQU9",
  "key25": "3k3rjjpzZPL9vL7upgTHG6NNpWPpNJtVNAy3tmmiXyeQUoMdBLfh7jVT8rAx8unFP6SUwSebt2BK62KDUudEgNTM",
  "key26": "NaZ9u5T5XJHZf5gQNzxJ1i7ZbdcNmBZmogFCJGP9YQv46UHoyXijDBPed8uZHgemtgHdXy4v2DbpGDgn89yZD6s",
  "key27": "PqCADtzw1VDghxiTh3qYv1pcVeBi6W37mkmELesKDmLhBXw1Y6tHrrE9rzZuGtBHZCAcQwi8k5pq23YsuXCacpZ",
  "key28": "4CTSvq5ca59pytDGN14XzTGjhQ6Dvn3xXUSKh61C6sjQ57iEhK5uhjDQ433bJE6oHRDWZs51HsErmxwrUZe4yF9C",
  "key29": "2Pk7TUZnaRtNdP3NVRdDuakgi9ptRadLnrKdgVMLwK2J3b6MpkdrKKmgEKEGp37sLUXM6EULP1rTe6xDKYMK2Ss3",
  "key30": "FaCcBsvXbeUy8ygipytY2Bx9JWdDtQ48ADeSE4yRkz97XiSzVHEmKUC32eUt422xQxtSrwWwbGhzsjrje9uyduf",
  "key31": "2xjaz2JEzek9dqHDvvusB8qhwoyqcAjBQhYAx1nYfGNf13tpUfpxqbqK3t1UGCyjKi9aS2wWADcJTmH5Supaz8Jo",
  "key32": "2fdeVVPmVMM9CGDiPemfkHFu1FApNz4sUgSgX83ZjSVDo37z6tB4m8oFgHTQr9yQJtiWskoJ9VTq92C3qzSfY7mE",
  "key33": "3pNmXhryE2PDemUmGCDn1HVY9XzPEggFTkrLEgNq1YHLLwRxGmbsWrx9JUB5qr7WUjyTZUsPMdmmXmgQosYFkj1q",
  "key34": "63hVK6oAPLszh2ZEQ55a4N8TeU61iyNoZyYUx6RrSJDFv5jRsV7uRpBwBkMQ2fobH9Lm3CzXQg9g9HXmeys7sanr",
  "key35": "27vmtde3DDyzADWRSZkueAXZR1sPPCcjKLuLZTxdLxLRYH3Y8ephSWhw1fESJSPdCwBbu75fiocmHWaG7gUdPKLr",
  "key36": "59dPBi4s8kgsHDPeS7puky4xgewXZBoXMWwRERu8rEXjKL8gvaB9EjfD4cWFbF98kswL3mEzyeUDuSyxhzEhAXiy",
  "key37": "3QsGyNwMCKAipvEKcv6Wt9172aJVUZHmsWupX2VTSMMwxHNCTmBrHxe6XzZZsxg8EahBKaDu81a8SLzz2sKY7YGv",
  "key38": "27jjsDzJ7GDgYDkst2LvbNi55GuoyENJxgUKfWb6tpkT8hTd7YMJYKnrE6yT7bzisSjCSAi7zqwnYtBWkU6tf49i",
  "key39": "64R5PHWj9WS7BjWcdCgAVUFED8k43QciZHD6Rs62RywbEh67JyNDiGNK3CTjGsm4tBvzrfCvswgTLcQDVPDbq2PY",
  "key40": "hPcZRxHUxkCjwVKT3gpRx6bpDjHUKnf4QhutgJxrPZ3ViQZWJi6wE2EgNxJQUzye59nKdciBWjQyFAhgrNCeqrf",
  "key41": "3BhHnP4TWehafyYoQwvEGmNePx4bSAD8sLLzPpV4vcZNbpAqMVVvUMV5ggpEsRj5vjXZGoUxt8m4KtTMjPCCFG7x",
  "key42": "5a5fPeJGfVgRdvTCwF9yBvEM1uvkqrjLq6EiWpkweUcKQ9uXWHYvFxB1J1Egsumyt14LQzuAawjd1nji7SHe4Q8",
  "key43": "5TK6JAL36Dot8SQjK7NtY3KehZC9fV2PYw6GcB4C2Vb42fXXcdRnUnPShxggFUrkQuBVqoWWWEKvBeA6rRMwEXmL",
  "key44": "53SRviAHyxmsdKZGBG7UBcndbKA5JPRBaidFDJ4x5ZRFFaXGH5Ggbs7GQ3DKNhtaUdj9rAtmeWabuhtq2hqvHNVs",
  "key45": "5UNSmB5g71uJST8TVXc9pxyb5BkP6AVxyTDWqv3iRqW6Vogne3FzN7NYAis5K5aVsCfcuFoD7Dvb8Z1CGXdfAR3p",
  "key46": "3V7LVp8XQfdaDGTSKp918K1w1RExVf9YgkW1oCivG7v6h91tLK6vJuC88wpV7yGmgi35sYtZMh6bS4bNDXKafSRE"
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
