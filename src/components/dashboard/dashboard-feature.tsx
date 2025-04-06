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
    "kpnsA6pg5KEn7vo9i5sVupmNVfejeBzLBUsezUtMbCH99WhBaGKqAjMRmdhMYWuSfrpDcXcyT9CY5H5HhiNXrqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnY2fJ6jgkUU3REKiPp5BXbdCY5ZVu769JCfWw8Q8oEkPPZPyLULAZL4i53jbjTwCnEj8mvRvhZT9ftHA6mYet7",
  "key1": "5C8LHebW9rEJb3SaYe8vdJtq5jnCtphsp6LrVwwo145arZLYwpUn9af4SUn2PTfphmDbe4edTMAhfaEatE9msj5T",
  "key2": "G3eCqhkymyXk7HatjA6dKQURAgnqg6yhZ8kc8jk3SFYfYenUaCGdVXzcBiQWE5gFkvfxzztLhe98RyRyTQycqQQ",
  "key3": "3we7ZpzMsbRV7oZNjpexjA9V2VSX8yuKGpk1Egoean2rFCBENLASiHnSzN9ieR5QEHsVtqG6NVpty3qH3gTwvkGM",
  "key4": "b1Yh1iWfXa7fgtG18GJeyjWbrxjPLQcEiauwJoxMdFQrFhkmWMz1TeH5tyU62LsBAEp9n52yGNfJEjFg64yV4FQ",
  "key5": "gpji6cMDCaDJ3wivJASvRjBYQ9hUkGWxD5rmVPi6LCmS3xDrgFwsQck6zNWanUKyXV3oMGbCjD8q3bNTW6kSZFr",
  "key6": "2aWtc2PLhBKXHzdyRCoz2fkn9F1HJHf5Rc2FHXJedRV6qvsEZWehpc5AzhRZMRtVPnBM7wL4zJfCAskAfa8JPtng",
  "key7": "8BMBqejRw17691cgomLFSXfFcTCohUz85SMXzNZNx3VeVVa72x9zkrr1i8yXDEheQ9VF3e4n4TgSnSo29fqt5HR",
  "key8": "3KmCyc6k2xtNHAFVFF4GQsooYsBNbJLWNRyBeNECuWemUELC4J8Y1BkkJBF58qFVHQvkMLSN4jBMpNZvhnRpXeuo",
  "key9": "3rjmGRugjbtNNLq1vS8KqS9Pw4xjzj6qt6X9ycT2drQJqM9A8giMCNyfH5PKM4sqiizL8D7rZMfu3Jfh3zMNTw5e",
  "key10": "4YrSLKP6TtngYPxSK3C7LTVqXsYWek3EuJjr4Uq4nom8uxRHaxtvKBU6gTqH1NyZRf5UzR941Cmt3LS17DUz8R2v",
  "key11": "49R9EY1kFCtPoHgMmWdyTSADdn3dgWWKuuVWgiCSLF8oaRBoRhzHtDJD9YQFE6GD2WiRjKknvUK1XVE75T6nvdog",
  "key12": "4q9ez4WM3XpTXhzA2UPt77JbxMGbr4DJ9cuiCsGUEsAADbrNi5HxsPkgL4YyUighR7Q25sE39ykZgnYVoee2iPo9",
  "key13": "3VySmoNW3um87Gj7oE4dR62jn7EGCuvgRxmDRdM3jKFgjmGEB7wiVoH9vBJ8jpJAiM9k3ZRRuYi8Zv7hVLRf7hdK",
  "key14": "2AByvFVQx9hEqctZWwCUtC56f7aPw1Hr98MjFLUqySp4HRHgLhCL4SfivoNXC5fKazRLpU8398GESjFZwHLiDsPL",
  "key15": "VGV1gv1UBnHWLBXKbQZ6r8oK7yyK91bMLQbiRN6LMx8ZW4zsedJyfjK4N72AYRT15Xe1HfBuTAqP7mHAHNSTpUu",
  "key16": "5xe69aVEWuqzXUezbRdAZcWs4BansK8qnmT3zpedQsFT4YUSBrCrdSfmwWLVZLn9xW34pqXLkmtPfLvpqQj7MQbc",
  "key17": "3g4h2m656M5qHMj8GYV5Y4evMJqGB5raEkgPivG9vdM7eU4ofFhCEisKuVQm1eqnYeSzpcTcUJ8rSwvNpFVobqrZ",
  "key18": "vhBxtJaQH1ZiacsWs8rTJiGDb1P7bqr1qfiftdUBLEgfn3Ck9dtpddF4AuSx8jmoqmEC63w6xNkiUmWe9LF1d7k",
  "key19": "2bsVbUNHjnBf5h4w5F1gggDMMr1vfvhTADxB61GKsHZkLhPu7XwSuUchPCtGWtwa7ozFEP4TuugcFjmYmvvkmuhX",
  "key20": "3z3QhY81XM2QC3z4fJrmZGReU7RfTN73nReHbysHHn1USjDnZADZKaE63PxeFZNu2KWzH6r9UKhW8pSm73ext6tN",
  "key21": "5YTUoaYdtj2eYDUiFTrVxnKxd2R7XsNgxT5WzHNqfpLAvo76oWoRvSU2uDcimh8Bagi7xNfMnggg1SPLJTsnQJ3f",
  "key22": "2zhD3LjtMFcLcKaNxUk3fVB2jZWdJFBqEMcSEGJGnzwu3K1dnKH3CirEyT4LLLbPRxBc365YUU12eBhL5oxZEh6Q",
  "key23": "6Q8HMVHKGe1z8XrD4ZFwGAdCfGUPqB9zEhYRKqoMuVcJiskmYLRV9cpr1dQ69kbVKd4VQit7P5KGWSx8Twf5F79",
  "key24": "cD58F4Hh7wt92nZyv7pZUTjDkTsXJkfk6ezmy68E3zTSm9yLzzCCWooyw6x9MaND1HeSBwr4SEzZazLFTanaAWg",
  "key25": "aro4SuWshBWYtiA7oehWP8cVcAZvG1NuCkXSmsXjvdsyuj1x244M7JR7WKGAhL7gs69yWEhHNvu4zSKCTD31fMu",
  "key26": "62k1h4dVefFJzT4QrcAUGvznfuY36AHjwmuCS3gmQ5Vh7rfFohaWJ6sP4k5dw43aTG7GGnpeYz44tPMLJZhhkHmV",
  "key27": "2DxLZZdt5ZWSvmc4Q39rtVYhYcF98yLtYyZsSXoNTgFAQ4VRH4XtPuNb2cwFNZYRFPY6r2RDi2kqW7pjG8Z5pUn6",
  "key28": "t7bDTM3D8Ef1n3VQLNpeK6ZMPqR5Se3LmuVUQUmMXUsxTPkAC4GH3SpDwH4rqgEXZU7XQwkmPucLmfPj99JMTUb",
  "key29": "4CTiUkvHAXrs7Htu3izgkvcJb8xm2jDhoTkmG1N2SuNEfdTCuKbg3RaqqxWh38eHM62P8ZKXEMx35vFdmEHoEhZz",
  "key30": "3gr3AEgUd96SuqfahRVd2QgFk8x1veD58Ye84WXnqvVNzthSAdGFMuY8pnHDt4CJVPZNqdW2ezQ8Bbxb6GvGek5",
  "key31": "it3S8bcAd2gzH7rCo2Cakd5sCabqxEnWGFefYVUkABMi3fveR3ZUh2qLDKpfuvmZLtjvFH3su4cVTDdowuDXgKw",
  "key32": "27NXpiFSsiAFF6bfLreQnvBNmc84WsbM8Aq2QEDZSiPRWu1w6GGaU27Yc5PjVzcXaYoeDNNjtMZe1rGBtBdWbACx",
  "key33": "3PSixpLqe2XAFRFijPVUEjHXSJWCP7CXJtWTDpXX5tQQQweL3Gn4266kCKTwXgDQuZ2pLd1gTJ6cbGjZNNQ8XTUz",
  "key34": "4nmZDactZ2rNjTnz6u9zrWwCR56JkNH3VNVRZQFSNjgeT6uJNi824JyPcHux1rwfZbxL22rBuoPsdzMrUYV6acSj",
  "key35": "2DJXr7W7N51WeQzC5Wrp9bZxqmuWw1mEf4RkQL1U17hQ9Cq8gCMXeFzUETjdDiKeFtb5HxpvLpwJ6quVnpVvY9q",
  "key36": "VAyok2kWGFWVnXH7NTmJK5tBgqF72DLQWeqyLpE53fYYwQx5VmzAdUsj6MkqbV9LtK8Bw6R5RdEW6p8GTuP1k4Y",
  "key37": "3yDj1wPqptbqzMWKvYKjnHggm9RNDTtPp4D3pwEAds9Q9RvkVFXuo9CuPdC8FVQo7kQVyCBs7tbHsdeCRifG5q4M",
  "key38": "2DiXoLDKrbhAzWTvShbXAGAoUic4egxkWmdQFHTzwerdgtvWYTzTdLGeNx1g2YruQTZwAK3PymAXm3S6BQseRCnM",
  "key39": "3HQ4XSzdUTs4gMPZ4bSFVg8TUz7KUJDtVPRCPpHeG5NCFzyqhEBkf5jEdufoekGWTN5zRkZZQYjL9Zm5znd6xEKM",
  "key40": "96wccLsFHVW1QWweSGG6GpqWidfSJVZEagCDYAgajvS5b1tMW7cWJQrhT1xpkm8RSc1w3cEJtmaaRf9QsHCqzgV",
  "key41": "4Pq6zur3vqyL5NMUBxWskB4e2VzhyYSfjgQ9yfKGswr9iu3qHgZDfbuMthLoxmyUgbhkMmckeNRm9G3oKaaUniT3",
  "key42": "CZ8uxwRVAYXkAHrJhtsQdWzwvFYL85PqU5iZf5Fh1wEFk8ekwWoL3uiTXN1Gqab6kvXjEsKYxd5EykAKkaLRhWG",
  "key43": "ZFauZJrjf1DQS39PKyU6LJ1PM6UNZ75dDyePaXwFFahSGrC6z5xQaarsiXxh6vcokwoUdMKzooQ9So1Ld2KqAzk",
  "key44": "57xHhxdNjJHGYW9XeCBiKJqaZNsCfNFgwStkEg6RY5BrASUDDQifWqcYkATL3wNEw37ifyAtm55xj8Y7DrGRbJTe",
  "key45": "yF9T8iT2oLKmmuePe9BfRahwwGkq746AEjTJirQzBb6DANU1jHrpCbtxT6VagiobMDpJ1N9MGF3SjyD3K8k3hRf"
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
