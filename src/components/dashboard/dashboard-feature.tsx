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
    "5k77C34B9GYkFAJPpu6mjw87nHV2F7s3Gmrsgr78W4Y82YpBS1mKt3ktSCatrUubxidvTAGx7aqfA9fupTJeE1Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNX5mcagrGxdj535RGkNRQtfUcBuMpCcJj7UaL5nTUqTGcinr5AvCgLT1DdZjHp9kit6S6cfoU4ZTzGZJYktgXG",
  "key1": "2EHkXmFDp2PuBJVfX53DEwdXqs2qA1yavG7dPZ3xPSEXWvFJLoocAvwAPkMszGuqKKYrNdzkMdvXH1WJ5SDd4t5L",
  "key2": "4eZzCGAnKPbhv7W7TWAfhY6raqM7Z5ASHKLfr6XEaKbx2Heg4bmWQX5XfYuKJ9Ngd3EdQ3gpbszAvc7NPg5va9Jr",
  "key3": "2rWrNwCpEyDyEm4aJgLG6beTn4K2HnojRiRbT5sV2gJEMG7PgUrgtPvneRiLUaQQo7tPCVC314fPQqQmy6gQzb45",
  "key4": "3MWDisZRyJpFStJJ7im9t2nQPQXZayQ4wHsmBMPuFW6WGw29HeRdBS9pv8pQ5bEViHxYw1Jy4ApjEkqMxYv4Km72",
  "key5": "4xPhkqtU9jLX7sqKQg4tMCAet2Z2ukKQVyMHgLTHVPjgXV2asTBdqozudBfaRuPoQ8uRF8rVv8UaouzZSkqXovAw",
  "key6": "5ryPxgm4yym6YNXNx3aQwSBc6j7YS7iGH74sEYtrXuiMbBaNEZJgPKsyaJjsMSpAWNv4c2vEn6y6pGoNAgpTpiKV",
  "key7": "KXyeFE5e4866SLMfBd8GrkswwRDTXZxkEnrs4gxuXJus3ExKRQqxhgBXPUqhuFeAQZfQAskY5AEhpTyoVN6cjqt",
  "key8": "uGUvcBA2nfLfcqN4rWf9KiSnqvwvaB9PgVQHPcWXm3Nv6793A2GZA6jvQPYuSiqaJRHJVrqarh9kawLr2QEhpuT",
  "key9": "9E3i1VXgHyXMFM32Y18wbevd3YsXgstXyc6std15LqNGKH1EzJU3JAkSD7QPrRe5LZb6aSqAN2oiikjT42R8GG1",
  "key10": "4EenhbdFydwmfGKrykeGkizFWCZW99fiUtkgR6XY8Qqa9vpukqryMfWXZ29GLSm4MATksgijLMexVnL1M2rec2Rx",
  "key11": "4PZjmpdbZE1YJdbF4gWs7HtrCNjwYQuSXP5f3S2p7ZrXnsH6D6aPSMZw88t711N2M6d5vFKZzdzbWZN3odfeNcK1",
  "key12": "4TW1ggDNHvRh4tjdytaUByYZ6PgvhLB1ERqo8tJwr3oJ7qQ6wcbT3UG5LwCauQYwfGSJqwP4M76T5gJwzttgs6XV",
  "key13": "3sF1rr9THqVgRotEnfkMj6YUCuzsMtKB8Gwz7348QzYruhacxdLR17fvLBCJcGGaH5dig4T6bBxV2unuci1B2hf6",
  "key14": "3p4vrTPf1k6zzBzT3pLYUDmvjqUC48LXmw4rBZCyAFLmdmgHzYpcUZKWwpqHoB1HpKF42BC3cAss8X3BMRcw7o6w",
  "key15": "5zg4YAga8BT71jeKMtPYnmSdBc4B6zQ6LyFqZrrqNtL9M7g9KxxTKykJsAxqAM3EKBroxo7JYyQYZzbHctuewyhr",
  "key16": "4Yi3hdqM6HznSLV3sEeUKGgZSz4RB7Yba7NuoEF2rMpZ4yGLwmyUKh7rLs6ZYWgPn41pZ9KTMn2W75fqBqZ5tFiZ",
  "key17": "5kgNSerJKTnZ2c28AqCFkha5bwQPdLQmGhRoZjcCD8spePt586WtdrUTLUB6c3mZfWBTsdFX2RU4rNRotCoTysSr",
  "key18": "4Cpw8VPJH4xsYupmWiYC1dS2JzL6ooi1TV5aRU31tbgCDFAThLvt7RgCzA8LrcMdJGGuJk6m4KQ3niNwAzJkXX1",
  "key19": "2tMRx8MedytQrZnL1xyC2vS4v7BaMhkGGoKWtMeaNWjjXB3wNC9c5VTDsu8iCTaqS4Cms4BmfXRSyAmsHJfACifT",
  "key20": "2sf8r3W8KA1kaUPr5R8ATF1VAwSH49L8BNvSyExgyWieX9UzAdgLnn6kJ3aretC6Vs2rmaCsawP2YfkKAZLs3j7u",
  "key21": "5XxdY43k8CUD59hQJBjjzpX25wxqyj6trgZ22JB7Dex8xpzRmuJk3Zd6an1y6aAAmtLWpgVt75LeBdTA5iFR2UK9",
  "key22": "4LS3dwHA2ob5YgZfExzWCpU4MWze5sYbjvPoGQPLxk9Yf6zAyjwD6uhtaUzqPkeGakh4Wcw5KpuAYMwxhPnEhWh2",
  "key23": "3U1qf6sptjSdMxQoyPchhAC4ZHjVcjQFDmgC1kfwXTiRp1PFLdPuBTxx6zXbypdHNa1wLMcYBgA5zcoYr5e6oqzu",
  "key24": "2XtxY38sJhnHk7UAK7wD3oY8jcGpS6C51hw89uXd7nPfC65Gjx9TnJmLkAZukzKZ6VynkVoKgedJYwj8BW9c6xKU",
  "key25": "3Z8R3qM7EFLUHNW4X4fGqUKRYS5cNvfctZB5pSNxZaHk7oHQntERhM8LYMJq8YPqx1c9MdTx5SyGGCrCd8qn2AJ1",
  "key26": "BGsTmVydBmFraP9HxWaweKYtxD9uLpKd7qnEnV8BMjLJhmmh4bPs2pcPJannkH3xicZdWTbcjzh8aT491qnHe98",
  "key27": "52pmuaSFfHmc7t6oVs4EN22HYcAo1h6wG7SdZdeBU7YWbp3hBdJmGuiFXfc2xnWKoK2CuEE7mtCXiiKSfnR2UCLY",
  "key28": "U4ZC7HLhRkFPYUaGzwtgJPPMV5nqRQzbhCXHvm3VSur1s1m8oRmpnSxoAipStjvEwz82NnMsVuLs4X44oi2ftrG",
  "key29": "5S5iYhNctjuAsj46x1YR1E4tXpfZfBfoka6ubfuhTaNFXGchE94FBEmCaJAEAzbdZTxEwusfj147nj6qr9dvGriP",
  "key30": "53rpjHm8PW4gPEtgLbvSa43bHVfU3mXbJVWxPjmK1MSqTnVDXoSEFhuJVDUc1LdngdD8bc6x1apWWzj65cNJ4ZsV",
  "key31": "28bCgj7jqiKcsha4MT5ieaf1KLz6So2NVB4yAC3326mKMQsrzrHFAZqq5hJEFE1gzWunV3FFq56LQhkgQM9CHu94",
  "key32": "3KgUVwmEuJ8NvYqp86rQFLBunAZy9QdnaRWuqyXDe3TMy4t84a9Ld3HHHhRvHdgYnWMkHRBXnGAfUeDYYaPkST4w",
  "key33": "35R5r1RuDQLDb1acD6LM6P95yZ9dmUCc1gjTxCDtFWdTRMoEY21RAL43UA4Fi4uap2TgQp7gRwzte8EiXanoDYxx",
  "key34": "2u6mT2PkfW1bv4yaJJt3zeKHi38NCVfF8wTVfJYzgn48pGxYd8AFoUhqvz5qMUcJFbFgMCf8EGdaDxEwBSR56an9",
  "key35": "5wS49i8U6xXAJydoE9sNeX8ERc5EAAcyWXruQvmEBq1t5MhNFB4DdVAGQNpw14dDwYk5Fx37MMbEXhNL9D1SFifC",
  "key36": "3mXcMegV4c1bHcGejt6JA5ED6kjadnskwZVkP9fPV2fZWHGtT9hdi1HbnVKYWdSDGgiFz5SEaSkW6qBoxPd8FGV6",
  "key37": "66kLv8JymkCDQru8ApysPpW6VSsmSJ5xk47EEm5Y2yByPKiQHRgXG7a4sQhK3gWq5pYWas9mVv6mDoUeBh1Q5A1q",
  "key38": "3VnKL99UnMp8S2d3T8yVPKq4aS9RZu9W9ENWqegAY83s7Jm4ocif2LnuZbtJsGyPpJjPoY8m8MDf5nAABFoyP1iG",
  "key39": "2mJkFHZRHNphrk3C37erMgPj5NPbgnnToQSZPALztxiZLCLhxc5jecUwRZmeCsH75CYqyyJKHA8XyYqT2dnbxnvj",
  "key40": "4yyomL8chssbtzsD5ZdkmK5e26uXQJMLP1wNK8Px4upbpGVSSnubCbvVV3s8VU4j1fJpRQaKbXafsvognSqG6ikp",
  "key41": "2CawWS3Vjqxjvaz3HwcbvTUdNV1FwY2cRciYGij82PP25gJNRDcXa2f36cAfh5kxgM2mcZssn1dZ3L85FuhrWp7p",
  "key42": "63vsJ3dVa2Ajrw7NNUj8UgMwPKG1o4tAPhVxtSfb7A79rhtxunt5uhNJ5pwANSwB5iUFsbGFHL89RxwDyJ1NiPfV",
  "key43": "36X9eGfyAbR6zzoxY52FHwApAR6E1RGuacPQaauzsCQQJAYN4okXKAmeC2G5qNohx1yP5TBpb9smZHSn3N6VMHBf",
  "key44": "5VhnTkL9cdzJstfwixzvr7EC8FWCWwP5dxLREVeEpUMkQ5XZwFuYQALidCovaBXULJzqapUfjYdBpuRCMHVNM2WK",
  "key45": "pY3JejsPhR1Hsxpk9wfCMPDBushBDK87pq13oyQUr2wNnbLHG3vnYjoWe7mZZGLUziPN21ZinbFZAjXqWhH48K4",
  "key46": "MXtyenKusraDb8Sx1ESt7BfMBtvwdBRBqGaAdGXQ7Xj1mXEviaXBjVZf4qL6UXEAb2FaG6g1cWfW4rYR3eDS7GS",
  "key47": "2bF43dtbrQAJGgVkTrmbcXneQ9Di4QHJAtQaHh4rJwCisqHRo8wSZ4cQRXyWjRSCBJXJojivKwrC5ZWzTAoxpTnN",
  "key48": "2rj4Fkhy9itbR6DyBcLPzQDfBb7AbJHoU7NTmj9R4EUQoTVAEsXzH8CU7kPUxfqejpohhUkaGrgpGjMYseZkhrxZ"
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
