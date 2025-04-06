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
    "5BtQiw3Js7X2KCH3epEhHgchkRA1pWDp8kEWN2EeCRT7KJ7aSFxT5VxRjP7ZKbifD4uQqp7YqJd8eAsYYn5Vb3YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oAQ9BzfAN5QbrrDd9TFKoNBT6qF29E1XAk9QL28zFCM7EMB2HqbL3LNLKTqt4X8iRWmbFvePCZkmsG1rSqFFG4L",
  "key1": "5WS5ds9SafzrkYp2B9ErYj4M2pnaZoJQRYEGFVeE5fXSztnjXTg1KjyiB7oLyk4aGtRbUF1qWzbm7j8eNtQAeiHK",
  "key2": "3j2V5L7nZJCgNt3osTMVwWuzgsfr5jSjBjjdARczr7JF12kS3g6rfoXe9nhpsbbFNohhxyCjJs2ianF8xyYWPnJN",
  "key3": "93SWMzSJHgimPXg2vxL81CqvTC8E92amRZfceCJhGqoWrA6ueB4dECsBU8Qx7HXL7y9iyGcYKaXBYKGFvoNkntz",
  "key4": "3h8qhMZLaD8rBumbN1iU3vDigJoEECWWd8h63ZdSiBnGy4jPaX7BfE7AYbUyWVTs7Bm1gsGDcCSDWUyWCpQR8x6N",
  "key5": "5tsAyJXrEvNjwjvM2LgbVRzyVDXUj5kgx9hxV5vyBkT23N1ZMBNtPKz19F812KoxCWGvwA5j94Dj7fkoC3aVsGNe",
  "key6": "67VQZ348sqRrEUgUpZHxPGZjKMvrXTKDneb8jJa1wZ1X8FGZM73pZhzgRxSRfnPeVkoE5JDKTbK5qqsnBr5MiGap",
  "key7": "aPGJMtkkh6PpmD16Xa6zfeD1wxGh99n5pGu6gyf71HJHyu2PM7Xyxdwaa8ugTQL8M4zVGmBoHto8oXaLtSYdy72",
  "key8": "2sn2FxdzLjXejHFCLcoA9NsYJcjU5SZTnxQmcGjGHxnctBHiT27WckmNYVqCk8ZQtSrCLU8LiUackcdfiZDvZQDw",
  "key9": "3fcB1dQg8UAWhK8VbrMB1sGPJe5F1gjNCbMHvFmFKvV2rNkZpdvoLhevtAJSfBFdSBjv9PFf8dvzwzpbTcVWCkHr",
  "key10": "2BsJkDyCgQyAFxCGhgg4hTYjvsT22nD4nzDvSKiFhYHVBCjnxtngk9pFLDdi9swYWf6gsteGEds9LSw2FPwjmm5q",
  "key11": "2CKz6vogh1DbLFmEY2FScdhS2feVY7spKKkFxrczXT4stvbQpxQhoXFHSGoGPUbzzazik44UtsVZTSW7CycVSG7g",
  "key12": "5k56f6LzWg8aLKWupHJ66G9igHXmPz1UVXuEbLUzZKUSKBoP9t1V7GYhYp9Bnoz8UVp6FRarL7wkVpBn2LC1zoUD",
  "key13": "67mq3oXaULSoVcVJC5ijViX1dR6VzeWkwcb2BoYr1eMmPHi8Ra2fHetz66mDnb73ZycRK7U9AmUVLmwWWW3EV7SE",
  "key14": "46sZ3YHTjm6yV8TBGxmhKMEfhPqY2URs98cNGzgf2DvCai8E9QEmvQ7PgpUKPFyh35ZeobQAdbSd7iieQ37Zaz7",
  "key15": "xKLSBh6kwBKEfaJTyeDLuTGDPfeKZQub1Li6h2W812RK8JaCnYYFmSttoceihm3SHPSVCLsS3j1sYkqo9G43DZW",
  "key16": "vp4U6iop9MYrMZNMnhgG9yiS9ixni6dGEwNu8iGCBsrTqtUfsMQffyxEmdCvhJdYdMbXmUBhCzossrQ3MECPMW4",
  "key17": "xt2txFkyBsmDDEcm4Ajyjj7WqorYeU2ma5yKD5cbZmqEdWrAH2iTWJrSgnkdhjQ1C7VPARZqYejMEpAwb249BDK",
  "key18": "5n2fftHUR2kfLF7d7kw8n16CXzADN4VpaUzSntFYGZa7RG3UUN98yFNkDMD4ERSL2jTy4aBivM3HXxokzJh1tN34",
  "key19": "5MgXWSJ4kb6rn6yzRW3XND9rLUGUqEvwTQ6tQbdsbUnYQGyxVmEiaS6C9EA4Q31wGm8D9ok49Cx3hZWNZs58XTB2",
  "key20": "48EWL17aWfmETWvomr8sXW7da4qY6ZETaGQNPJ6TnPKRMFWw7Q2TCEs24bPx7mFfM9PevhjGQDLiEYAhGurrSKBz",
  "key21": "4RfkpWHSF6idFFKB6qSVN9pKHvPf8GMc88MTwCWmtQ9vH1z985M9Qci7C9iWuDjar8fjZ3aL98uyRMsxJn5NWghf",
  "key22": "TcXzzugiFTo7huidmFYXLe335ekbBgUYbGt1vPNbkQgiA5uzNDC3DBsNHTxYgV4z86bsJ7Kko12g4CUd9G1M1CE",
  "key23": "UViSaryZRWwA6WEMMoWDh9kn1XxkkuHgcZKmSYZixCNwE7eXQHT7hRHauhAC2ywTvGXv51NuxuyruFrSwwHhfka",
  "key24": "2y9NQDhNtMTTNwxrJypqT5Axj6WNEbN9vkJmUCLX9GuMYYE1fQyWvtwUq71eQZW72whtL4NQFBmQEiwo3Kg42Gmn",
  "key25": "xA9Mm9obiaoLmxfHQSAE4iMWA11RpEUxkMAn2U7u5kaAPSod87uURw4wD4ZysaXtZ39ZT7fjdkmbJUspYs9HSMk",
  "key26": "5NqQg3ZLFLWvdj74DY52vhMPeUi57rZBUmoyym7ucVDadgaBWh8dTgrXHQzrfwGoy4sFTgD1524AXKigxFyFBLPT",
  "key27": "2GQnjVQxXjvSVHZgbjVgFLskXewpD6m9D5H6ewh6nrQZ7BQA8hq7XoesRq5J7GY8kpc3ERY33tY7NSG8kEVDxeXx",
  "key28": "3NqKXNjn3k6KLh4iCfLtit2hHRD4ArrCuzhsWLLjP6p7XPXPaua1WCsSnmeYjfAEurpKuzCeMkqmKhpuRMsENY3Y",
  "key29": "5ZeXf9ZBYEHdWuzxGE1kbTQPRW2B9WSin4c9HthpgfCdFv1QrAV8nVXGYfiM6XgYLdH8LwYif4Zw8EKuEFCnnvNd",
  "key30": "co2yucKubGYTb4EiKnABxfnLzRf5ZmgZhAMY4wzeJvqm2bx28J9QxZRL5en6ewamMLDT2NDXC1f3Z35BdW5XUqB",
  "key31": "qFBCzt8RqzuB4gCMDCUJmwFYcA2jjL1QGKU62FNhSxHn3WvHWk8mbT6dGDbyT8uKF79Q3EgvmX33iectHFakHop",
  "key32": "3hY2iJiC1mG9rupKbEXMepjZmhM9wuaf3WhFgPgFruwbYZzpeDTMAUdVt4bX7JL7bCh5AQPD27UizeQxvKjahDAt",
  "key33": "4oqN3KcbXs5qYRNQxZNU9usEy94kKgnGw9EPAuncsZ9YRGheWx9o4jzmeJ5zU9N5LCYmzXJ3XqgzQX2q1g6iXMe2",
  "key34": "2Jzwhu74c8sxjdxwufvcpJVKD1SGucmWD4JnNSz82tpf5rYaUEd3wHLzZ9S91pPGJQ7nRZKEPjLmqZkPCdm3SqxX"
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
