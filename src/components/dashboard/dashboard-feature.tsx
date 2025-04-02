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
    "5i6yY8Px326U7oh6v7BP6ANQswkz7cFVCPEmpF7fkkKTSfitLHnH3wbRJ5yF5wzMTbsRGDTPsDqzYdhJYm3XPujC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qHe3T64nbTCt8AnTa4qAHUMb6CB1ePDak6bgg6unvyUztoQqZhCTmefwhdTFYdXsLuAyVH2kbgtybgzi2WoYBEF",
  "key1": "252Ceeb3zRnWaowejD26hib8j6997igAAdp6mas1rNrYPfX7PTWqmdfudt15kHtbkyy5KEQEgREmbb5M2WkskvBZ",
  "key2": "zyBA5rooTjpKqqbkTKkZHRJR8ApAgAXoMCC32S3ZoSGjyRzcnNhRwn3ih4KdstEukcbbuhJt98Ph2jFii2VSFNz",
  "key3": "37erVR1ZJGpRThEby4c1tpmQ2n1ie9Eu255T9YKEwNoZGxCzCg4zmwdjQtAFUJxmQP2TcRijD1VMNwaSvz9g1fVL",
  "key4": "AsU4vzh1RwJwevxJG6Ds4a54KQ7za7UexYTpscQ1sQe9ozEYqk1hMh5vL9njXnkBwxq9b4txhUXfcesK56cREJQ",
  "key5": "2pHWreXbpiQ9i7ppbVQiApttWuR8gvesC6bgLuP8pqKkPSj1QFBKCjC9JfrH8w1KGkonuHPi3KCwi5US26KN69gg",
  "key6": "5hJp4y7gux5dBWgn12aH6tV2ngmaig5M35xq5YY5pAZ64L4fTmsMeanACve2fsHAvu4FUTqRDZJBvgnw4m71LiCH",
  "key7": "4kx5NppsHvxyYgNmFDyQWcxx2G2LXKNHqSoJkELwUdrxUs8Qbh1jsmm8nixHkArkMy3FdCGyNKQuv28aEVKSVeRH",
  "key8": "5fmfLctE1bCruxDQsKWsjiojCauct5YTDFutNZbY7y9EWwF5r4QfwZ24Jw8LQscj8tjR5dkP29JCycgtYv94gZ6M",
  "key9": "5Pwzey8fP96T8dtTMRqbwwTqaoQFwuXcv6kW41bt21UgrfacNdD7JdvZYRyAX3FMUswuFb4iuq2sFcwDXmVP9aEB",
  "key10": "3XQtqDFr3HFFhzzDUAKEN9niafgPiBvkiUHLvFwnPJAnevadcXC7ZkaRTBeYE1phCDGtBqwp19erQwxkZ5Z3qC5w",
  "key11": "uHWwWLNwd9UyjBwDHYyNBYE6MPtrgNEGDKGf5TgfmmCCweZaXu2asowepwcvbt8A5NXQ3LV3yZabkU9mS5ASWgd",
  "key12": "59zmSQcwtUQcubkbLVhbsGf5zrzVy74cshT3KsPbvMiseiNVVmvBCvgXSz3BwP14Sbkfp4EGZxqhAeq2xtem9u7K",
  "key13": "r9kkgdcVtLkKsbxmoAwCoFrcJwMgWroraAJzuw8mch7kWWQv3gQfcvEXk4bSyFUVCtYm8K4nQo8zo7UgwfW1ETd",
  "key14": "5qPE2e7X1TvCYpJGm6T6w7jp3dMf1cfCJsyuUNNovCLSfLkywGGNp14aVjikD4DK4BsXHZUyXcjELRWCNpU15uUV",
  "key15": "3C31xTt7uzaxhZSEsQSnDiykob9wgXVfu4jz6GsmBqtTFrfcsRvc7yLjfhXbDcNPs1gtNWSjVZpvS5hWg35uhcRY",
  "key16": "3rgw5okUCWjWwCrCJFUnKXzn1aXaE5LiXdzHFC3aqdqCBEEHuk6HGvBqi8GKoakEc2UwYGiiRDqcFKezVcqGrdm7",
  "key17": "3sd5EuzGbA45GgCc81EsYQfkcSEb2VHfjjfagrnT6S8th1yCUuJrJzpFYhAAFpq1iEN7D6aA1tRznmM27TKkRT2g",
  "key18": "4bu1t9wNL74BzsARyG5nDQnP3qciwqnsnhaFypWc3iXZSUff54UQqg1XvCnwsPzuamcY8Y99kk5PYNS1Es2kPMcr",
  "key19": "5jW8kdqctaspMRA3uhE1YqDZ1py82xTcRpM5neLPTFRmkimscSdafme5rZBLnaNtijq4eJLwexHCnbM6NWT5P5zi",
  "key20": "3RujgpUKePyehm3PBBW6pPdqntidWw5usNwtqCB9jCLBPCQuVHvYvegv1LdUvnDho461wDxr9Cb5KERcEge5ghuc",
  "key21": "4zaxGF69WHMr6gnBb51xby57VKD9MryghxvhPsezCPUVyXeNBkwafM7TANKqRFP8dogNNZhoUD9XvUhV4US2dRcY",
  "key22": "vHUKqLLWG13FDJDEkN8chJNzNtjP57oMxQMJKhvCJcHMdKnZtvQrWTuUJaKPteFTi5L2oEHfCvYEsGuBk98CCZC",
  "key23": "2r6jPaBMXA88FzqQPPNgSYxfS2jD65cKnFejNZrmaVzu9JKeRwRqQJ8P8Bwbw8zmSiBo1Uco7igYYC6NUVFpNb9W",
  "key24": "5NqgUPdkwvhhDEaZG8RzBKb3Fq9oeKNL83NVKM1pQ1DPsF5d51q4JCfjenucqMGMsNh4o6mBWmsymfDQrq32isNd",
  "key25": "VZjonfkwETn48ZiJTZFtx5zCsX4PuvAY2sr9Nt91eAqNEdei66YxrCpv7fY7ud3qqfNi4noHPL587TY4ogxW3oi",
  "key26": "5V6eYodZ2zrqyokPrY8jBQTRw6jfmj2pPZf3qxWejb46RiumE1Qem5Ax4tjDhCjqD7EknWq37f5jsmnXq8zdv34L",
  "key27": "26TxyrxPZTeSNyQJG1jfghRTBqbtQMD7URrPoiQpjV9HB5NNFbEuj6TjV5ee1WtZsreEMvQjwdGbRqGkvZCtCuxU",
  "key28": "4zTeBL56EEunSLga4pkqvjACGZgensnfafJz3S7e59Li7S2BsFBC4Q1xWSvYbjsaGGiwg1LCTFhekZm91ft82Dbe",
  "key29": "8pZVrSrskExKKBvWtN7ZBPd8PauXQnhYRojyGhNBK7sbL9nS3YrvaJQSq2S5sEYWtFz4oeMXEzTVTzcTGn6LbhV",
  "key30": "AhcLNt9E4YP3TWQqhvbQGzBhNLpCj71pcgxWNWMMiDE31cFyj8ZXFBu26SF5DA8P4ndpiE1PEnF6DZwsf7Gk8Xi",
  "key31": "aeZySpLbnKLAZfh3QSzmUhCnead7iRDMRZFbEWJHobnXEHqgmwAKSd9HnoL9C163LAQkboGX3a7cJmEK8aUCBGn",
  "key32": "gV8V6c6vd8aGNbmJiVUWsTDsw9E1X6e5kPzevBtnWTQ1DJc7hYjPcTQFEx6nhiJrGyRPQ6s33byGGp5RjjRdLmv",
  "key33": "781xsqmQxEz45ShSQR56FDboDAKB326w737M2nR9Stk2wLYgMutS33zy4Cr5rWZRTYcie9Sk9ZU62MDrF1Qbw8c",
  "key34": "DRTeYH2B93dFjiQwFimU96Aszm5UTT4Rxqq9LXVYiwSzK1HFLyhmqE74cgJRX7NhBYYRSMfEMJMwRETAKoFMKV1",
  "key35": "4sLBu42T6XbHT1uTb3R9MDmRdUiMANsymQcEBfvzpHmJUqm8ZLBN33WJnVZRHJXXNLb2ntSNebWwgiRib7bK9tZK",
  "key36": "4zE44xnZ4DUxJLd6LaVCDMMzpdCgnLVRmQRuDXQHDgo7fzaD3Pw65izaczQ3KxfMFBjw9sfWSfTB66yFQXYy2MY6",
  "key37": "4Uq1ESN8WokZBC9h2yh1hth8hKPWnfp8uUHp11tfJKDJQEVhKSFwMPQ6UzE924CKam3didY2KETaBjyhfESFh488",
  "key38": "3xnSA6Vch73TrNvJnNU6cfvYQmiVhygyE5gnytNESedeqA9YPP9jgofUNeGzGP1kfQ6WV61hm6iLqmZBZhYe6n91",
  "key39": "3PCwE7LfYZrxG1XYhB97MNhUPdYXRxfzG3z2LKDvVRJFBPDiRmhQ3XybtBKf4UfQWjhChMzTtWc76acHLrZMdJkQ",
  "key40": "5eMFN9hqGqsjAu3RNxCxmJozbBFRJtJcveETHECjZgCDTZ38VqyggK97AB4tQwh3guqba29a8Qr376qYomC7L4R",
  "key41": "5d7bHwpiNz3XdJekatejUfV97Art1s43W7d7Z695ed6RpA3TSMub23vn28wzkGXFhHvsAsRK5Nkg2w26RSxYNoEo",
  "key42": "4baPEUvrUMHdjftKEFEpz3JSixKxmYXgE6c77xutP4Uhz3m656zv7jFSQVytrmpbcuFhqWXeR2Njk98NbB1nXHuF"
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
