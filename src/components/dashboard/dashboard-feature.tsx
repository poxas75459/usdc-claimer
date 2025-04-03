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
    "36jTC83kDeZa7NbeaXYcmAws8jsT6vNvRopQzEbT5AfobBNWy7fYCWaEYJYcdTHQD8sf9Wh9eqvBnCdwW8JMmSBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTiJExWVemt5dDA1hJyi5g5VzpZbXTicrLPm8vnGmS7xWcpjzUvWUdkjLqM3SSUCLsXfViY29J5zViUfa7z41Te",
  "key1": "36fTGxXcDxFs6ux7b2SJ1wy1s76k7M3qtBP4aQzcD7fpUD8dDkYQgoZkRiUxqyVEHbbtXQYAZSPSaaTvRK7oR5FQ",
  "key2": "9rqBcP1SF5JSKhdGHegMAnoPLG2n67wFp5d5L9s5t2At29sTDLTpYbSaTPwjm2C44ZL4g8uVExiMWX8Wcd45yKd",
  "key3": "3vschMJpP86jUmGMzmgidddPDf4KKhsUXSHjEdKhw14M8RmL51xEPgq43oi2XfJqHx84ic3MF6FhadjW8XU9ShPQ",
  "key4": "36qtej7ZzADKRSa6RckuYQkqtvRPDSx2iooDREtRj6MNmtwffCXXnpPo4KKwkVjRr2yYBhM9Hu1fzGm87kedTRML",
  "key5": "mMSxgZQx8FEkKMjgxuK64yfhh5626FKo6ueFMBLpWvVggTo45mGwXK7KyXisZxSRBBojLJPBmM9kHagjCgp9tzQ",
  "key6": "4UYL2VfNfXuK8R8hVQe9EbDBJY7vtkKyfWwtGBBt7KggP4WokozW9f2Qp8o77GyRmq2BMhcNic7k4ZtEFm4qU7E9",
  "key7": "37gcwnJu1jjy2BG5dDF2k1zJGsSzPaYc233NmTYehJRW4kdmJwe8RnYdShKhHgAQd47SJ1i2hdF3aNGPs5YkWA43",
  "key8": "PvD55URZiFfdEwvBzAgi1M8gHXc96f6iBZP92ERe7xkJeVyJ1GRJfrD9iEgqY4wgFxn1kyFGSvaHusJq6qdXkNf",
  "key9": "xTPh4PktEL7vzXx2so5fR3kYKi9Qmkdk4yP1XF1xBtB6QMuGJQmY2AW7L7a8cwtiiZootMowvk5EJxYtwiJJsSN",
  "key10": "2M1ggLKYHqyuWpDbfDxPXg678E2KMZFja4vxh21VYheznyhXFuhysfsbNdb4Ht7ZqSgNY7kYRTFk524KNHU4w3bh",
  "key11": "3ubEWXqtz4iPajxfoGcTKQ1CBKtGFrhy7jdjQCY6ZdY6SEKRDpEnooqd3qV4BMvjuQDv9fB3U2j8NcCFTVZXjdZT",
  "key12": "4FDQPEgEZeCV4H9pS4ewhvqncav3UWCpYfAx1CaUQzJf8C3ftSZu8qc7oZ6FgifrTXSd3VNcj5javBRaYL7NRxvq",
  "key13": "xmDdrQcCV2ftjg1uREYpusedaqzfX5fRNfn3ohvsg55ot7rrrVzjEWUnC5vDezJ3UttcUw3MEMABH3iG23Uncs6",
  "key14": "4mpwZT117cQ9ac8H6BLKpyMjvHZ3nawGs7FoJPRntw5b4eVcVUWnwdwhQmwQ8o9LEZwQ24uczqHc4ouUDx2Q266H",
  "key15": "4gE56HzAriPzsZTScDbcp7L4HhhyD9FaF7NtRGjpwP4eU3cK6Dwf3PzEhfNb2Lwn6uWRhp2CHHrZYKKKP8wmZ7pR",
  "key16": "2z3rjvJrrwtLR4e7ZmXkzmC4HZQYmbqEVLLWYPtjErsQLzcpkeJDRkdexkmLUCsgSoH4MQ9FJJAFP83bhJJBZcaq",
  "key17": "BHv6g3mMvvZQ71F55zLrwvh3roGALoCqnqc5ymT4UD7UHD5L6nB5TB5EAcx1L9cZXH7vCSidi5kWzTbH8Eps38U",
  "key18": "367JdYb67rdmrmoAQhsCdGwEwyYsDWyAfXRiLYfne1rYRpDaM6FK2Uqpits1y5U7bCxPL9QG5uSncMBh7hoNJs2C",
  "key19": "NUiEPcJhe2dSvbvSdhRBgyoRGPiBqweWyT6hBEYJvZ3uXNux9PnPDkfXkJY8ggaJ8yiEqxxvMbeCggp5vqmqQve",
  "key20": "3ndVXzMbzpTJeHsswzCbzph7TyvDCna7VkY5aBYVnbVMSAftfXGy9YmSADSUrfvmt31SDx6YyYDUE3wYcYJ1411o",
  "key21": "3Xtr8WqfNNpitbGxz5nXfNC6nvWXnCAecMBrHxxp6rNBoiT21Bdwu2T4cT1qzfQvNGeF1NcLzmEtyXLRhbb53pDk",
  "key22": "2BmSYnv25FVfjHk8324iuWxYUeYdjzXc4FDChht94UaComtb1DN569LVe1Waj4nPafZHhGUyzZi1RWoWdhvKf6Jy",
  "key23": "251fiSYcYXxGm91NQDWtMcwJTaMo9SRRoMPea5YDTsXkJtBeJFWmq3CWTUFFF5gum6eXmWdgDFCMXN7kz5jGLnCe",
  "key24": "4RibAAAmsLaejT7zTxH7RZ73KFD6N1iuuXokJAS6uzA3cDXfHMLgiFUpz9dtqSQ8zPf55kuiEtQcToWqZdyABrM7",
  "key25": "5bzXWrqEqHqjk2hqXZutYYLpvHT8L9qzt8KTZ2kowFTcvmKEYBiLcMCEybFsHwJUmZXjRvBRDQ1DVX4FjSim9w4u",
  "key26": "2gyFMa6HCEbuC3t4Bsjo9MrfVEFjg3i9zbAtXuXrw7EnmdZWqvPGejoHgNNnaZm8RuhsbQG9VrVKrsZwNQbSTwhL",
  "key27": "4pr9K2a4RHvsDGH1qFfDhNySUhNPPjpMtPLnCuP4xjtmvvBoHAqA8iHEuowVcYfGT1sputjyPHbNWyC3vkCZXhPx",
  "key28": "4oQ48QJ8V9b4vtZVwWyZYXe6qLFzr2fzWhKDCg6mdofYBoLNHeMA6NUB4WKzovR4HLvJN3U4BFRdnpqwZYiZtuok",
  "key29": "2iuxj1xW66qVeqZvYA8C2bdsLzRoSdwfWMTMMQgBq5d6aeLvjuqWvEEcs15NMBhhhNyJ8wn292biB7h98k9JuMPK",
  "key30": "4CEZzg7j624VKXpFu5WmSo9jGm81sVkRMQvdxgRKz4tbv5WTa2ezq2RphJTCmuVhByLZ61ADgutYpUf91Sv8Ersx",
  "key31": "24dVDMDansSkL3DQcfQEW4m7Sh3M5kJ9f7j25KwurJkCWD5NkWB8ncPQLYCRDTbcvCjddrDe567XrCzRATkrLtD1",
  "key32": "4FgzGynRFPMiXdzYT5GEMhk3QVmSUJY6E4arFDG7PHdm61ucR9zZCv3JDRjFJh5XZMe89gvzvn87fa52XoL9GKiV",
  "key33": "3b7dzN54idPV7bR4uf6Ghkn57ptdnhSz7DxetcwK8JS8kZVyS22UnpwrFADKU3Wwt2WPsYFbCQDWi8Jd3As8gseZ",
  "key34": "43JWd4XRiPZytETQfdrNFuwnrWUvsWG1nheeK6io84jVhX1GnmiRNahDps1b6GKJF5RHbfBMtahDWetemK7ygcTk",
  "key35": "9EXyCFrFTqCkExYmRQqBfBjZNCc87s2Gp8xG2v7DJG4k4BfjyhqkMGPRi5vFNVWYrJk1GAfhoQ7VgWuKYXyCpw7",
  "key36": "34nnGhzWLoWpg2M3N3PjtzySmyWkJxnykskBxxfQ8jXvxUdCFcU7rTdryYtQ5uJV9RhNi7jztTVRkUU6GUqajzZy",
  "key37": "3Amt2FmJsbTRq29vwar4tPQtfEBaJr3ewa8MfW6YnpZ8RRjSCTnGEdtbQSAikKGURoez5zRrYYAuZW3egbg6NGRo",
  "key38": "5HWVsE4Ck2D6trRrtsxay3iaorokNz8WScPAYfv4j1rdA5avWS47AuHptN88v5SQXHGVRW6UXsGqx2zmAzAFJsBE",
  "key39": "5CiP1rMod8w9juJbQwDdv5HExwMBbq37wANmQFT3kRsg7zoaCdJzHVbzppYaejqM5aJ87L9K1iUaGDF9U1N1nxnx",
  "key40": "334ZkKgA5nuzjNiXshCBMZiLNYBHuPJQMRv1qX5aBowjUSbmAwyv2Td5NDshEjAHV42DkCXXc46JXr3TFvfFWUmb",
  "key41": "KwjHYBDciCaXqz95vbtUbdWXmJGn1oS1q79UAdmXd4Qb1fQ8kb7rchg7BWNsBiAi39X7Ax1MhTRoFTk1q1h73YV",
  "key42": "3FeDgkdMkbAHV9yAsWpgPZR8JqmoE2BbaSVWQ5tS4G252s3q9k6bHcdW5Cv9ga2BGCtqYzX4g3oRRdXtXwmXWZN9"
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
