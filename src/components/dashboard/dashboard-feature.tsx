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
    "MN9UWzSTr3NSSBwLGFF5KxvtbjMnLQQiAmnYS6c4XdSrVcVJS3rN9xQuWGAZ2iTUKikkNLXo8LhzXaehS41XCNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsXQ9B3tGhUzm7VAGus6aE9SmHSU3LkqVnegCrFbuVzsXhofd64GJaRqBu3YbPaJZYgQAyXtHhKfUKJDsGGcnrH",
  "key1": "3aaQbykjPfAbusSkZR7Amyz8xnkk44vjRHAdYshLhRxVYgWYLioA5xsmSHUS8hh8rMxeMAaqAJX6ehonES2XYVsJ",
  "key2": "3Qy1SpMFVogjn3qn75i4pZ14k2uG9WNhjsnhugd4xWmcsmg5ic13fT4Tb8dbRCCLLATcC371qgA9huPXNihF55DZ",
  "key3": "3gVqCHziZbgA3VbRBFvq1SXo7BLHhyQuopcSGe8MemmFK15pA3Bw8BaMS2a2zVq7xgtBfLMATkuSrRQKVTqyrYE2",
  "key4": "4vRSDAVsyCDAvkP1NDFBUCDfwbSQFaSXVQYzw5qdkppHDKPZJQ1qYj66v2QbGanHfHt5KXxGfCUZgHgepq7MZmvj",
  "key5": "4yLFDup5KVrLSkiVzQKbZ4FjC1ZZ4yxEmcz96pGthiK2UJ2UjHK8VvyF9kFCtZWcvicEEmFPusZwmKFvHgmpH6Xz",
  "key6": "huwEcE7oRnikn1F9mKGqGKMbkW8FdjaULDRGqG2hz19trxg6iDHcNkaGZcLsTHXDcPcn17dwyywon8RqqoMQXND",
  "key7": "36t9jVDKBmWKbKjS1x3QLcZsd5YaRxYTmjF1xWVXeEkdW9jYFir4GYiJdeLpxmEH1PAqi9C8u4bH2ByQDya9p6m6",
  "key8": "wGxfynUs9aX9gfNdcdmwkm4ojKXES7H1RU7grMB5tXdzpVPQxqPfpfitcxLicZuFGzGjfCeNZmsiYQRiMqgwdvn",
  "key9": "475z98999B8chHrNHokXBdBxwUiezB7bgVJKfT9ZkrRpJQHPoSYxj7DmGhh8BproVin79SA4c2GMjypzNVzjAp8z",
  "key10": "4eLQtVVLpsAbgbLEZTQ4yuvYxQ2snwUvLobLGj7cNgc7iZYM9gsTVHH44kbb8gN9ahofAQ3q9jnwbfX3PBTg7fEN",
  "key11": "2woYCptp1ooSecNmjSfq2A4m8rsnEEtS5Ti1ro81kkxBMaH65pxY5n7ae2Xkws4Qj9QabrCxaZC1PMNNQR78sXHz",
  "key12": "5DTSqZ8fawzbYAjvgyKy2tcr2tFzu1DW7Jfd5RFgiorjZwiNK726HxS8iab3KgzhAFYTLftNbyQ6d2fdQNrMvitz",
  "key13": "3cmcsnD3pZSivKEMsJHaw1c1p51yz8QMPUE3H6G8FhCdiukRbNzE86KmtiTaJMhnHu3oPAoXeqRPoxPFUYCEXefF",
  "key14": "4d1JmmhNJbDXwmPRNQeHA8PfuX6ajPcW2PpQ93FWbfjB4DHapq499LsfQJmyH2JLJPoLpHt8u9BY6pN5fuxD2tyQ",
  "key15": "2pdYuKHUKsnPWsx9f79tGTqbuViJJ66dP8xrVmC3YTgXdgCVZFaSyHUcHyytHaeKzBPgWNj8b6a9p8iYiYRwjgsF",
  "key16": "2Gezgwn9Rvjj3ar8SqdpowK8hCFERY8JmisVbZ4w3iaVofPAjoizUNcVQnZ5zSKGdjGhNryrfAdSpreBDNJkx9bf",
  "key17": "yEN4mVFwXLDhqfiND2yke7NiXnUtn7cUTfFf1uQW6f7scowZjfr51LYo2xEC4FLVtdQDMbxUCiEUAao8q1KwUxR",
  "key18": "3abepDcmASqP3nhX2TswZsv8dVTgpbD6hs4bM5BUfTFA8j5bgXQ6QD65tQS6q1De6PkZ2iGMhp4fcWzUaHdJ58tb",
  "key19": "5MXG2fEDVEzRu4WrYBTnRHttcrnZvpPbzSQ3p7wTKHpDKoBtyFaP7C1jWMZuV7DarCe62dTfgvQATQ1WcbznPz1A",
  "key20": "3cJDW1wK7HZZYxyZPrVsH1fYz12FLGpr45Ymv3yBtk1tk45BMrtN9GdxxHGSr4qW4ZNVRxceSB6gdPHUv9xfrxSb",
  "key21": "mzfoxa2yAwsBPAUefwHogtoFAE8e2tzhLBj6zZgt9h5mt6PamEo7xvsWq3SdAyqzLzXZ4uR2qPrusX9kohkEDdD",
  "key22": "usuZkufEmwfp9bDW3KKenPR3pupWCNik1M8S1fghstNnBX38VWqQNjpYzYRC7VSPiP9ouDhFix9vT2jJuA4NHnt",
  "key23": "5qpMVJFWF9RWyxorFmmzHmK5sSXo1nw59H7DMbHHe4M6bnmwthGS4BtX883ewZcVjTUKfJ6qck68RmvsEna1svXu",
  "key24": "3gYHGT3ZfN3EUkbTqrTgMpATgC7PenFFPJ2RxQhEvqLFQ3LoQ9NVwarKzrvgp1TrQCbAxqYf6JRgiwEBcX27Gsgf",
  "key25": "2aSJMfPm7ekzTDEk6KQxstNjJrsWwqBfGf534izxennx1rPKLnrxmgZdo2xctkG6jFWULpMqghduA8mB6aDYCyPm",
  "key26": "5bD9dz7rgtNswZdyaaxj43LpaqDJePoYxfQbEJroS8FhJQxJ9fqByatVfhsA81Z7TvLuhW4SAStg2De3NKyd4PVx",
  "key27": "24qbFcd3HGFAJRBGSXrZqSFsR7tTo7XLyKcCTjxasTNocHPf5jXjX2ujHMLdhuyzfQGSDeDCzRiQB25kZSiZ73fP",
  "key28": "QKvVbxoSd9K1i26oqSdhki31e7JsYz2qa4v82fydcCYMobXM9vXVgeoL99FkXJmibsQFp7G1Rh1TQAgictcwm8E",
  "key29": "4peaPRn77ZrCtpSXiks3c5CGGGEp7r9DBgfP1Vn2jPdgLqZjB98yX77WBMEX3H3LQYQwCiTqjtPWX1uAZHR7u2ga",
  "key30": "4h3vbwBggcZq6nhnjL2cC6SyEJpVMkEk24kRbERigTP2WnBFebdGXamacTifJnCpsXtCviB8mR9g8F2dEtY1Lgx2",
  "key31": "43aDiJBtRaku41GbTLngcDuJMovoX2uhFGUy8tMoNVW1uUs8KAjKz33XgDN9bnE65QEeQSvN9eMQZoessUbJy5Ny",
  "key32": "39qjouByMDZazxZakrjJVrVUFiWuJYVMBetz44wDTaH4KHR91ef7waknC8nW7EpyLcn35NbFBuYuNNcVeeG33WQK",
  "key33": "3gR8RccQr4Sv8JThpvEAjrNNBWB6P8LgXdNtBiTdNRWWLdpCT7ppDAYJvKsGV5fP1qD1LqteSKuxShdtts15eWSA",
  "key34": "1254BVqc4PP1xRTUnvHj41K2Ao7Brib1btjrNvVfrrfoQy3y7vQFiLgVmEtVDRuyw1ZxYzneZNRqRFairJqv8BSb",
  "key35": "3Dq62y7QpMUJZzKefoyeQhg15BoEXJ1bQtRSkESJqMXDaFMq4B6A4RozvcxRRQjGWQ23CjNPzFGtUgHLMmGmbe71",
  "key36": "5BFqcYQ3zKug19oyufrfu1NUy5atLAtf3nbsqpqfgxg9BCdNU1AaydXTwwD73pcmS3fEMQKPCKS1dbxtJXnE7MNj"
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
