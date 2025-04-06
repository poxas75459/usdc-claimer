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
    "mCDbzjNYAzp8MQjeJcovZ3GJemX43LcvF7hoojBAWDhGADLfh6QPMkaa17XXDp9sPcA3XNvQjyJQExKp7oXJdHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tqSQArbziw4sLCrvFSFQWP81SFwfyEaJSgJq5pDFtEcQ3tmoYh6uMtHHdvXH8TExHV7ZKUZUkgrujD1ykcvC1N",
  "key1": "2u2gvXbaxBi59nUf2x9cvVyrTt8s1n4Ctz44BouGncUVRFPnqPP9NtNVFR4183wGy1ZJePHg9hRqBDNd2cGbhSiq",
  "key2": "29WYEeohoGzCpqbQ98a5Cn1XGtQ4uP7FJ8k6SfaPLAsccaWcuzzxHccPuCyNb1HBbVxcpPJ6hH3dudGoPtXEbBGb",
  "key3": "5TTuKF4Cb6iNpX1cacCjE5bt6nVRWKakwB8RNGT49xF1yu6CmS16Ggtmv1PiBPXSkbsZ4bkRUo6544TBDhSW9X2E",
  "key4": "zvvHvUQxzoZ91goEUHvxwKnQjET3FZbz2w2BBZeRmnoqxY5etKcyWo3q2ePFwoeeWz8iADXxMkwQyG11GqP8EsK",
  "key5": "4nu3MCT22VHrFJCbfy3PZthrt1zHN4D7PjTkDihDykcu1L94KMy2fCBz2Wq8wcZjWdBP2VHVjzZfkoWsHbiHVH7e",
  "key6": "5cnCU29Fs3SQsPjwcuLybdU7Rp8owo3PnrEL58nWaje2WcVY2kq81oN9w77GeLcei4JRr8wEcWB87UmjW1ymKsZG",
  "key7": "XFesWSn3EL7mckzwTFLPFLxBGw8mRfcnbAMG4PTdx77W3j3B8jeKkxzajvRKUPqsoG656Jkda7uqtvWqfSDzuer",
  "key8": "5dMa3rLGvFpW7VuhK8pK7SnspMF493aV9BUu4fco5bknL6YxXiNTsHLvPuKQJovkzU3HKDVtFURAkvpmYm9b3eFU",
  "key9": "4NWekRLfwate32hoiELiWcfqPq1x68r2ctQoUEG1UdnRtchZrQESSBMGQ4JugY61zxNejC5f874fuMvp2aNx13v4",
  "key10": "2knexcedfpGB7ccDM1JeevGaZehqKygN7d3AJdqkns3wxdtbnJfua2zkHgfmc9QgCwGDFVAtbV6pFZjXkBiX4upg",
  "key11": "2D3TeRUW6SvcT9mW8zCcQEcwwkj9mFxYTK3HE7p1Vj3F4Rvov5n537VjLmGQwKNQm3dWQa4p6kjjTgyLfHz2d7Er",
  "key12": "2EbqyXtKmhTkYNkKfXThVK4YfsBeX7bCuKXQ4pNfENZUV86UXbWViFjvJizh7bCJEErnBXsbAQ7o6eksvn8aJNUw",
  "key13": "2EgckngtradRaXHjxLM5aRQzeyShzjW3zWrg8b34nbiaEzYqUGQ4oNTwYfXc3nLNraZ33jKrBAwgNCBvNQNfULc3",
  "key14": "4UhbBKMV5dAZKxQpkgCM3chy6eDhJN46JsPRUsBkjTEjZBfGvmEYbuRwY7vQx32sevmRLcs3qjnxHDes9LTEJgaZ",
  "key15": "294YnGmoc9sm5VmbspgD6ttX2wY3Q3WsDMdAcZ8UFfiPk1mM968NKMSxx5SYSchfPjYFoB1Ni9iAxQjrct618919",
  "key16": "44EFPPejvrwYgQv4iaoJcoZYU3DkWZrQ25n31NJvC5HMkHEQxandCVQjRmXb6VXKvRCTzjrqcmgHANGXZqzbHtLu",
  "key17": "36HkMEdQBuHADQjWQEfsSNSTEqvDVn4z6dffAeJLrjcNbFrVo74K8WsbvWAM7RMLuRWApKxgseaj6m7F6Q1HDQiw",
  "key18": "49dephyeNPZFkmp6Fw1tWvG42GdAWR8mAcy9BdZTUK1GA3p4pNrQjJenkpt97uEDZgLZWt3vonEMmDd6FKQjFmJi",
  "key19": "5fe5jut9hUvYXfeWN4NkasPiAgXbAkEqDCTVGdKQhr57BSuaYEyuC5UGbxTwEw7JjFv6VHZ9QrSQwB9pmrHfbZyS",
  "key20": "4RyEuxamhScPmrUxXGUD9y6p61jxfjGhXcbuwMGZZCeW17nuHCD8DZZRNdFpEWZDuWouNKUh8ef8fhWGNFu18X8s",
  "key21": "2jrp1Ns3JwsUNEzWfTYoQpCqpSCXGoQ9DXB4tUcX8fJxGvUuaiPq6NpGV2Te6VPRASzzR43WCn9cxYShLBjN48Nb",
  "key22": "5mrEWY4CoCiv2UNDMfAD87Z4Fk62e3315JUb72ZdAKWAFEU8Despa71x34GjA858oMQgYZAVyiwKW7tweGP76yPY",
  "key23": "25bWrNWUNk3pnQf3v5c9M4P7dR6oAJW2BF8kjwqgKbshtuc3NLxjcY25Mb6tvpzcdFudCe2Rsw7V4T3gxAi1avPt",
  "key24": "3sBchhSKySQRCkdEYuAu7BEu25j4ffVsWw4x3iiP3bxjDH5Kc4uPmJAhML87to4aaxQ28VS9D5kERXPXSPTRxcbv",
  "key25": "k4h5cvaDtErnm4vJLChGnyFjBCEPuU3fC8jQygyK3UGzGWjwtWvCwBE8RTt6mQ14DeVdWvDY8YQ9azT4BHFXs5Z",
  "key26": "62huno1ngAiHHsmo8PV6PBMKpuJuJirvpRcrGPWA4XgQxtdRTWRqwDSPghpoQC7HkBnuWuft8XnHecqmJAEfkwQc",
  "key27": "3thzWtC2GMtYAx32sKfYRiNoLbApzfeXnNFpwUXY4Nraz3zQA8yLUjDRmni9YBC8aqovdT4n6JtDrz9vF81JbF1q",
  "key28": "5HFgQFAFNWaRpuJG6KJrw9qrbsGCmdAjRY49ZbHWtaMZvZeMViNNbNxBqVaXFgaDK99P7rhVf4gxFrfa9fX417sk",
  "key29": "2GxVeKCXqkq33QbGft8VrdGo6J8Yi1G4w6Gco3WBNqCFdyCsjCsxFBE8aVo9KY4zTQRoWWa1NFfNisRhkar4mQKB",
  "key30": "4wxbZMoY1D3codQwjQTQLKvWs2W8fn9RF5uiNkCw279ft9o92vEydn2efufHCNUdoqX3JKWLSUN1tToSLN3Tovcg",
  "key31": "2otiUvqK3WxaVtjpNYH1cJz96NHsb25pbFGxxbtfmpyueUimvHTKqVLHhgYPq4xVt5uyQTsXG69HW2R99LSaP4m6",
  "key32": "2sdfc2BZDCdDLciwn75N5F8YbrPyfoV18f7e6JBgSAVZvHgKSJDnn6VtLtBYXFswGms5qRgjEEWw5jQ6w3Qxy6ue",
  "key33": "5BpDsQPRQVA5qKvgoo9NEPHz8C7GLw7EKueXZ99mfGuHUwRwSniVwQV2rNqvsX1QtWoFHgwF5BSL98oYqSMNTW3j",
  "key34": "2Ag2nDEh1bC2LLsVstZZFwLHj2mnRxpZoffsiQjdVtj54TPpkxGfjqdnfJnQMN6RdBnkvGVEYNwRV2t5EUDfy87j",
  "key35": "5exqtRLhcwwgdKubwuQQTHSBEsL9dtwsTrnic9WBbvBvXmoHwy5zj7zQKMJ1xJ8JHC7tZiwbPqwj8aADErJVDJwy",
  "key36": "5Dh1yrVyBnjD5i2oUJWWTqMCgCsDZtY4btytGUG8ZxbSBbMqMgsiZKcLMhCj1wjqC91B27VWZvqtVJKAi95SRhZY",
  "key37": "3FGLs8y6FpBBb1az6fQtQTZo2hqDtoaLSx5deVHDGe4y6QoynFfwEPf6gyqhYqbaoBYPLhVEy3fVaCxTV7g764hT",
  "key38": "5um1Zg8VtjvfaT7GzU2uuHsMppCFe8xSuG6BPGVCK5CgxRA9BFgC9tt9GkFEqyQ2bDjvWs7UmFXrjn2An6DjtLee",
  "key39": "2Ta2MvbuwefmmZiV9e8oUoynyn8sSYedLTJCLi25xiWujw6tPyXRqEEDxfpBMP3hJAii4Sk3d9UHxtV5QXe8XKEi",
  "key40": "5uWxhMunrUZdE9XPMGpywn1SCWGU4C6RFBU2heE35faxhNfcnpVpkUWYPywwHgiSd51kzc8tT7hig2EJ5QbxWKCz",
  "key41": "25bVKLJfLBcpt1JPW1sAU5Ciuz1sj7JrxkUKdpEgtmjAP6DuczSu1iWiBRou3ufYVudhvjnoTWnMCRXZnsvSwaBa"
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
