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
    "44CgnCgBg9t25ESUsAtDPhWN7egep3pzhsRscnKqdEmqKM2hGmFNSiUvTqg3W1hNaLHDEup8mEQgHMDei1Eg9Gmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKioAzbm6exwnM34Zjo6cfNhnPGnc5RhiydaZamD7SLsu96ExxAnBRsFZ2WmWNZYkwYxhXFQ3oqm96J5SkW9ibL",
  "key1": "5SVD4fPsviip7WA6pVf4tTsYQZyDFYnmsNyMewP8Timp8RLUpkmWU6KQ8WsdYYgYMt8K48S2e7UbRpjCc6ZT7etH",
  "key2": "26V6TRk4oneu5WwvUEYts93JA7vZAAhyzUEA3WD96Fdi2Sw3LNPSaCfZM7dNTg2H5BSpStA7Bt4J8KRTVVPWLc7T",
  "key3": "4f2NA9h5q9GRZ6LM1B5McknANXri5k5oajsuWrPN8nJ6NcggLiHgx5oPwvvTCSJjjpYpjK3Qa4j4q2THEuAyBuET",
  "key4": "3NiCP7F7FAkjnMQTc5q7oxiZzoGLQb7QBpk5RaEQbqT6HePACqcoE7BfT8yV8FS5bAXyBKYrB3JfZzY5WqXcAJ7U",
  "key5": "2WkRmCRQjf7Rcwpn56pF3rkHPdPdjtFHEj2HZKyciuSQnr6VibatnPtuUHkGa5yERS7HY4iQuNUMkCsp7CS5mY5U",
  "key6": "3jREjrD2oUppC2LSgKkhK1sDMmoECSmERQPyeRQWkQYgGK7Tj5jiVaVq4yKfEPHbDpJ2N7XUSYs6QopFghkyECRn",
  "key7": "kFmyGriwBjb7Y4UViSYJkGcHeQqtH6F8wt85hezGegqWx9ArHMZVpjABq6psiDfD3JUCG5SmN6UzcxHjAfiu8NB",
  "key8": "EmM8FTGFVQt4EmXMy9xgmVKPec9JekuXFU15XEgzpN1iUUK9oC5GHTKmU1nNx3PsWfpnzrWucGmj3nLCeGRAU24",
  "key9": "3Rqrf1QqDFPFdWuNNQ9X1Gs2voV1Cpf1Btp7zK1F128LyxsH9iGVSLiEqL9ggFnua2H22T3fk1eW2Lp2i4HXeChH",
  "key10": "GD82Emuh4yjwwMMqQT1jTSGD4WePxe6aZEQW9cFNjkigUyLK87dHUyGcmUeHpKsNJh8TxHpyT9HCDWEKZmjbJZF",
  "key11": "9jKxHRf5UykeykEBV7iYndzWtJ4hcPqayefXq71ErFzCJN7U9pFmTnBuCLe9jcaNSuvs4fGipSBkRxByoEcAZy9",
  "key12": "EyFjvCPce9AbtMTRUofMAWp1LrE3DiqKmkSdqvsLi9dmYAFDZ4p3VK7aisZHDUiGvkD81qzmSuqexRskkfLADXN",
  "key13": "3KwoxSv9K81SRr3ar3ANgRS6PqdJ65iBxPrmpcsJmeksXePB9sUadpsfxVKdRL3sC4g6pTTELKYNQctSnPz7HH7S",
  "key14": "3G9XikACg3mHKd8ZULFgCMJDWcad4RmXDjHp2fZzf5k6vJyrF99MkFHCha8VnNTSs6oFuNfz9DK8ZkRvmzzc8dMN",
  "key15": "3K5ZfPbgJMjgexSLwaBBq5YFNdMobpAiPWV2njQN62h4m4cwjuzzMjxyJjuVmQ9RELM1qQrwqo7ssRUahmgiMAaK",
  "key16": "5PKxCtafUY88Fwyzu3Lf4ENNHV837FbwdrAGCUTRYFUM95AxLjYYJScR6NLNUrdrUiCggSBiSdH24RLioWUgyNDH",
  "key17": "5jbP5UakC93DSf6tc9FcBZRzJ2x4wEXoqt56woxhuLVX2yXQN73bKvJj2BKr4i1twfuVr37QUDsj5x5W7EKSZdvt",
  "key18": "5u4HRFCMzLfRDh1hF5jBuGyasjYkdBp2j8x9iEguE9NdGE1fu8dobD8EjmBnHEB4HXaU7VahzoRpNsg7SRtvx7AA",
  "key19": "86E7MSzGTQ3C6PKudCd7Nfb6orX9huE4qLb7tbmRrfuZKXtx6ou8idQuQwK5x3otc9zgCXX8qY37Wv8z2fUwBy9",
  "key20": "RgAs7sbYFZzQTHzGHSZ7jkXeSsF6Mmia9C4rC1HQATimPRTBpaWffH3kDEZCfAY98Y3CLc1SeBy3CJgSRWyR9nn",
  "key21": "3R7PF21gMUd2p63G4Eb6r8kBWyNNFquTsLjotKPifBLYoLpr7YWDzYNBdXR3dq9GJpRGfLb87WLx9USkaf38PT4f",
  "key22": "3eUjheGqy3cP8M6hgBxwDCXiSfR5xLEUKkruNfr9zS7s7yHY1HeyDFBuYwzTyrV8b4VY7pYTpvz2nzH4sr2venLA",
  "key23": "5u5LRqm52zP9uKxB7eTe43H3VJipxUhYDEeTjmDak3AuYnXkzeL8ih8H9j2BoDKzGogo1HMtmvAm3jCLxeh4rRwK",
  "key24": "3wYB1t8LUnXEALCZXNw71eufLLuDmMTE9q6D9ZbgK3biwPCDABWvDsCE6F7ndM5HyENZubBBUSkJdA29pZhgR79P",
  "key25": "c9tnCjiQmScwF1atBfxfUvqBWBaKQu1GSKyNzx2HfXdn8LLYvTHDQotE3rvL3JcQH8AKuBFCjaBHEqMZzTLDRpm",
  "key26": "3EhFYuxRQUBk2ZxbAqAUXyawsNb41niye6GTzPoEA9XdtDnuoHSchvpHDRgjnh4hKwUR3Yh6G5j38d3DTvtxXMwe",
  "key27": "5QkLcA57w3pDb7csurEpsHctfW1yhT9w8gSTjHCAcbwbcvJ7uWQDfYU6Y43DXz8sMbmwNNLmeGnvBowavVkQmN83",
  "key28": "hgEBUL2dxG5MnmLkFHP2sDDLh7aWYPa3CKGbeVXCeUjfe5D7n9hCMJzTg66fcaiARKUuTgu1hE1LNkfnzYXKxho",
  "key29": "4vJtAVdPkr68YvhPBoRobo63Xw4s4e6tUcS6omxyBNq78RSb7xmBcXWv2cqcJmWGvpNbDjJNdVBytu4Abgp9vugq",
  "key30": "ZCnYKuHibiBDsJs9p9oqTY5hDsrbnyxJRMhvr4PUxaseGawtw5k6caPaTf7dkwFnBVAXjmXkXznAuA774y7VoHZ",
  "key31": "HDyze2wQGWCjkT5ABAHZJNTpCfN6DviTGyrwZwUmXmGZNvYeCoSAsFNT2jq2mDMRetzwNM37sX4U7zaJ6V1tSHS",
  "key32": "5e57PcWUyMs2bqBinQ4t7U3ksrd971yR94Jogxf89zzbAx1Wa533ZJY17cZqJkCcqehKHqoQxS1Uxy1vsNmzDKyx",
  "key33": "BMMgAXknciR7FhPCWjVZQVzAqdxF6mLYMwiDxgHpgcba8spd2xGjx1qHicxfPCR5V7RdCyXGM6GAdMZvb9MUoQn",
  "key34": "fakbRg9SKksx5wwYVjiGNt13uCGBG7arb9pJdLbe28YDEs1hQFdgMSuaDesfAKbux4Nkjozz3ALMoHpwwucMK6b",
  "key35": "2Te5xg69KchJ4trAbXsBaonCkCE5Q1oqbk9jod4shLcbU6n1XYJJMN4jDtdQzeyCNMZupvM9xnz1a9SZyqUH4Gp8",
  "key36": "4ZUfQbJUCyfRFXoFKQrq67TmX3XKAEFx944hdk4Wm8HMT1ftgxo7wu5N7AMGB9dCSfp9WFAqUhseye2VDN8fwa22",
  "key37": "jpmf4Y4EbLXVyAa2TiSch9xznxBK5MbbzBfPCXeLFNXTstjcAKbq72QiRu9UwvSJ6ca2Mm9obFMi5aGrz3RjpzN",
  "key38": "67GwM2qPNcEF5ToKS2mwYEdsV9a2ATmuo5A7bK9k1NzjgsrzHkqoPn34VDotUqNjeH8mkUsfys5aEL3pq3o2XXNi",
  "key39": "4AXuHpQwZw6KupHzx46KjyTrCFFZBRGqrVGWoMUmQzV6zNnqMqdvweeUvtsgeGKzXm3DzAJe36zTKYmSSwFwAFkg",
  "key40": "3xbg7rWtRZrCNTNtfMemkNDpuWpHKQUBPWRS6onvbTjNubxr2GrSdh7snLfdmAFK4F5mvL6YrhFKveiQSuzoZaQP"
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
