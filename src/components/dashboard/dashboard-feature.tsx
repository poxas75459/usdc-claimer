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
    "GCaKFcSzrqqjN83us9wVzJreLhUneQuWAoMZNnH14YaduhxoTics6GG1Cutp9EXkzexwsXx1gDCbo7RTEaTY1B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vTj319HXkmmu8qa3xhPnvBf4giLCVUCLRUHC9t7VV7QveQKwX4KF4RaS4GTCpr6JtQ2su8umqZmgGztyDgQHVRB",
  "key1": "24wJhABATHXQ9YVPu2JkNkYXoRfR1Rthqe7eKJfEmyW6R79Wewb4d533dWw6MW3S6bgxEsnneP82h8KtaV4gxhoF",
  "key2": "2bNqEF73zahW7hneTmSi7GGv97J61eGm1vz6QmyCkJVdkeLMVJezDjJCYQ6ytYBaiswcCNNqdcqgMDcnRt9YiCeZ",
  "key3": "4UvoDMpbvc9y7FzGXEvxjCwKtGDQ6jcLxiz3yK9u1zaZxkrUk55RDNtcVjQEtTenvKSmtygijDzwmpCgLunUGjtM",
  "key4": "56QCPQH7ojcYahjk4wVc8mCCwLi4rQJvDrYjzoYMQkPMvREGUVsV8TmHLLhMMqSTH9zp992V3LfdrFEWWmPn9ZSf",
  "key5": "5uYchrJHSNA3DZ3yZEtSPTMGbU25NVWR9ucXVKxH9i2Z4QgNsniLdqmDU99NWQXiotCnpuCwas98H9Qpco7Zw71Q",
  "key6": "t47UKo6cN6Lw8UViNARff6qiqeSGVmiUS1MWn815BXRXjbjtQSnP3mm3kAQNNMq3t6YYF7KyRyangAo6fpwjLu8",
  "key7": "5WR68NseVqebFmDkvqa1kAJRUDqbqwxD3EvEsDbty9BVSWtouiBF45MUyMNd1iRhAXkbPqtRwfzvPkTr4hV659gy",
  "key8": "2L72f8cFaHQmLXGeeSvcWLi7BRHME2Z23dAiNrHTevtdJLNKxPzJRDt5wQe9WHZHLUyjZkipCGRTeTpnmuHeEBaC",
  "key9": "3H5y6efhvfZq7gPaiJb8kzrrzVKygz5Sxde4pCmHQbVed33nEfkDtDXP6R6PBCc9bLnifb2S8aF4w7YDZ48TKHji",
  "key10": "5kirsVeP3nSGstiQxxWcwBZejXPvoGwzWwUJii333XbMLpgZMwmbDn6pmw2o9HEu8WiUYFwKfaoCKXG7KxFzUdsW",
  "key11": "R79PJuWxv57LvqPUZduVysiH2fZcdLL1MiYeWjkKRpwr22WQQqo6V9rFH6HAKeejGTazKNRuf2f75CuqY2vx1iV",
  "key12": "2fXbFcakUj9Ai9hWrvNx9XmihetUTrJxBZLRJXNQPkkZS7Tjo1eqzrDfiUe5tycdt4Dok1Y9jnBwiSU1pu6YRjPL",
  "key13": "5245oqjaAhcDjqNut8v6eZ4uCp4ZSTS6V9wJFotHSURCHdVuRQ2T7E2VMvuEK5XoMm49seau7UyyT3DNWpnHDeYa",
  "key14": "w5tVZ1ApgddzUiUzck8BFhAYXPRTcLoN2dpsm5RmBJ3KJisZXDCtGEEZkFyCKCiKveNrsfy8DGQq2pUBwBhBrcn",
  "key15": "53NViAVvQU7RTnYXzFMDm8ZoPAhRgucMspJwZq9DZ11E8xCTJ4XSDutSxoEN4EzJ5MThXHME15gwdc5nRWy8vYHn",
  "key16": "2ez7mvDdGAx28JZSNxw93osWTbWzH5NdTM9SMvWStEXw7jXKnBL53jaCLwRkB39z4JQS9Qqfw69y5TjTwG28NpQd",
  "key17": "4aoEy1mqy1YpbG6g8LnuHMccPHTe5Domne6zLvxgD7c4DeiJnPrEapgGagmz6N1jwaTb8CA4oQaCrx37C1mFrArs",
  "key18": "5RYSEDnsxyZrSzWJLhGL2XA7x5XgwpYLLhkq13QqXXJggkPLjSbnHQMso7ZHf983CYxfEkAGtnztP3e3BrXriGcX",
  "key19": "65boNh2SvEpkgAnyr31ATbuo3LDhqTeyxa78KvWc7Z2DN2whkvwF8Tm8zVKZBL1s4pDFS4Q5WkNkf7hGzqmRx1E",
  "key20": "2NCFC4z2tx9KUPqyFFBpQiHiqAprX6vee37hGUK3HSmEi4r3tah9w1ujpotTBuxw3bchcf6cfQSH2SgC4KUa77QT",
  "key21": "2T34sH4ojCW832yyETKNgrmdn92yiUv9L5VeTczpoTcAjkGJwPC42XFR8DCKPsbsGDoYgk8PadYMP8bExjoLVjtW",
  "key22": "4Bs7TQmA9Xuhfd1iKaTwCbofhLc4GevExSvFtoQrVudtFH4XzkNHG52oRE1fNQwBZwehBqUQUEgDQ3tK5sjdEFDP",
  "key23": "2HWKM7rQj5HDTEpTuYUkFXBtEY7NrC3tpEUZsn2M9Vo3VYcKCVmnKJESNxKGmKY6AUnvbdptnkWTKDNSM86oWzKW",
  "key24": "59k66fAHMBn9EwJCNtYYnNbWZcA7WKadbF13HYGHXMoszLd7VJvrrBqwwjKo7s3n7pTDsN9UFxiK5q1bcRfs3BvT",
  "key25": "4zD2CZ5g9ucrZ9dmwzuaFGDrfY45NbVE7cbqWRxpY45qo7tmxQNPBfswREuEK1gCTKZWcW35iqeuPgANdVbzhcgs",
  "key26": "5cmKPV2cHbXSoUkSVssoraGKsyPWux3LRh9wkChPBnJJWtaRyPukDgnYm63QChywHveonnk34YC76RwkvJy2xuBv",
  "key27": "CqRtKjVtQ6PoT1DjnYxejUi9y6urdhLxVJ5c1QYMdZRRQN4riq8fuPX7QfXr56vqh5febAwEmUEY7jdDbAgHqMS",
  "key28": "3J9KzkGY2qKk54jYG6uDQZUYUDTMuV8jTAoQ3PNSBAPxQeS1zor43V86pWET72yj1rH38HNpFgANEn1okKyvx4ox",
  "key29": "5nHC1a5tujvLn1unCjMuXjXFnTcKBst2W4wyf9kXzEntADa4cwDyx1Mn2vVgSygTKcUXgzkdvQ9rCNydjnSvk7DV"
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
