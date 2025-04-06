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
    "24fHN3zKnt1SZ6CBsZsjUFA4tsjQ81TkS4Vr7Sz5cD9iKQSEFTkJkUhTKVkJCYDW6D5zMYc7B9CfoE5jcgbpTAhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uC8pDEjbVLxYFx7MYKoU2ULuiH4Lnzqnw2gVWXCKhqGs3QWBJgxAmCHPVsGFNutykRRej8eW351zUJQivipudQn",
  "key1": "nkRsDFwF2rfLEfwYi2jm8wrojxoUTF5GwXhwh1xXeAvE2iWroizGX9bYQsFbSccEcChYCqm4rGXkZTpHzDPHPRs",
  "key2": "3GfSL4JLcHxmnrNLQfqHdpXYzuKccxqC6zEzugkeJwJFhay2yhbLbqRULhWnK9MLRA6bFpcDHYpGy416Kpr1DAPt",
  "key3": "36wo6Gz9E6qr5GC5xpe6LkP6gDTqg1wc7CtkcmyHnwZeqYgdhENd7PhQBUuDbQ67mEcYVF5yxFXuLsjsgLtB7bkH",
  "key4": "23VTUWsRcfvcXT4dCcJTyyWpesJj5ctWTvMUxZKkfgLaSzPuGiyFtF6Uh8bz8XShZeG199mT3aMb4BJCDogEUB9R",
  "key5": "2qGxziH6n6nNioZmVf74eQHzkkRz5Si8puzokMempovFLr7VFKHaDTcU1r5yGbW7viJ4rADhLqiKnh5jPQkhy4pb",
  "key6": "4y7jWbmUAmzLCid5YySET5YnMxopb3vtKbS9mFmjhKxZZykDNFve1Udqivgpk7WrDqb3JThJDvSLa1EV5Yf4sNpL",
  "key7": "4QLXNs8g1cx4JSCR4yRsrhh4WRByZzo2wGKkNBmsAh3Nb18ciVRWovMbAXdva5YB1HsM7mVf8gJmyowAPjCBwysT",
  "key8": "4isM9NAaVxCCDFyfqdA9K3XajXePQP2pjGpzjEJiAhDHmVrtJz4SQDX2oaECZ4PYyuxd5FM82cujUn7ccE6xfgiZ",
  "key9": "5T5NpHsJRkzDE2UPAwia49JCpZnT8BiYovidRDWnPGTGuAEGVqvUnnwQGRdC3NsM8ZAwsNMpk8mUJThSiQqUM7KZ",
  "key10": "5H8uLrbW7k3eke7Y2cPwDa8bRY4YaDTJEyicXVcNRWkeY5NfzuQSwYxMvoJo8yGRhuSCkraoaUNv5RpWjkjAHfTU",
  "key11": "QVvdbZLvuTA3Dn3HKJQXLJLzYYVHZsEqFt3yKVDDXrMqoyrJvz8cDwSUsTa6WbRHvzkiPsJi6R15z1Y12q2xzkn",
  "key12": "5M7Z1RPMYs8Jy4NK14iibKt2TbuEuHtEUFBvAzKfAk3uEGkzMszcbE96cG4np1qNZdPHyU7QnmUBTct9pfqJJAjK",
  "key13": "u5k8zovrms16hLn2VUfH9wz756XZWifZoAW2boaRE7TgBwqswm1iavpoVuLDbAx4FesrBkyRKWxswySapNFgZaV",
  "key14": "5qdLsDwDZ9spgwmJ1QVfdYARha3njRgkwFja7bBF2BYrZk1WT9vejNvrFRCYQhmQswCphtoV2YHiWoCi8tiiUtoy",
  "key15": "4eBEFq3ijR1ohDsZGSNvADa1SAaYGiPyRxx5wVZrPYFjiLHcjvHVUjQxZP3rtYqdDzDvLQeFNEVBXbdqrJ4aXqRw",
  "key16": "3pAfsiwWtL1ihdAkeLQxqj7sAoBpLzV3Lhi1Cp8h8KBVduVeoFkMEvFuU6F2dRDpYZoeGuopiYSgaso8qXR4dJ8u",
  "key17": "5d4PtKLbLSszuqsicDDktjKcqzrt5sPvcLA3ZxL1xasDaK9H3AKajoSMvKHSJTmnGYYJkhke2Nq38fSkcyE4wGD5",
  "key18": "2LjS6LJqBz8eo9mUCPadrQJVja7UcZ4Z5C3LGmX2Fd9PamJ4ENFMBP7stsuJvX7GJdPfbWWehmvLn3UiLtbjXRQJ",
  "key19": "4ggBP9r8i45SZs7NbJnRxAGf93DgFLZ7K29iKeJQZztTrTbT8ERXaRGC124wNEzSCiRbAC7oA7etaCAafaPhaKKs",
  "key20": "3XKyp8hqurFbjja9o3BfhWUZbQkQh6GmxBE4SCJUhPDMaaFWdaoLEky9GafWnLUefnkhkqVrS5nTDm4AMeLohtX2",
  "key21": "H3JZvyiTZp8XGgC1cFRhRGaimJdYKKVNxghPKvSsF19QiRfarh4FioV6BzHdA9RMm6haai15qSTPpmrmLAUmhTV",
  "key22": "3yRUpVCYFx8AomVWqyaSL29ZUXZfLGtWbaYRVf3iHUmyKiNe1VhQhqh67Qmyweo5V5GZMxzsemjKLsvxZaT3dnqV",
  "key23": "59yJRSLySwoMcp88vuq1xjvC2YspzjShuAjvLrFmfBUZ1RFK9MwNKzz985U9jsf7EZjbxyQ8GxQGDEHGW9cMaz7e",
  "key24": "3k9eCdH1cPu29zbWiR5TZzYm5NjAqAAtS7jZAAu3hR6RvrQ9ZxBm1LgUEwbd1M2bbdLGHUg98LESocEvcCodouQc",
  "key25": "4i2FnAMFb9y2jL9Dc6cz9YLe8suTEXpKqy5qeC3F7azvBrwMYNe9QvyPEMgrWAT3PpEFccu8Ko9fzMp7BshK9PvD",
  "key26": "3TFvBSdVv6HBf3rhEKQUUoh8YGQKsKAvukUY7rb6esez6ewDZyewZiUaqv5imYpc9bvxQBkRsG6tDjvYMGChBE3c",
  "key27": "41R3HGJgcUnJuyjakTbMsfWSjNyLcKnfHaSWsLyfPdu4RucLTViCZEgMoQxEbTCiDtYAFxDHXm4RXW1nox7eZx4w",
  "key28": "GJYHepqEbdBda1PmbgaM5osw57WkEeThMXcWXZH671h3DbSvpHBVPpbM8jJJ63mMbTp1RPFhd7dhqTvKQnd3d8f",
  "key29": "EczyBqgemrv94fv4MGJ5oGWjLLB8rqDqVE44APJ61zg3JUFoK3vdj9QoYhVDLGNrFj7iwo4jwXSUCjZuj2uyuWm",
  "key30": "vScA4URTEEG6qoPAXCAaczvMDAikzn3jBMKUTR7L4p69BH442akf7cFrxnuQArVn2q1PQgnCTxcvsuiD4ahcAxW",
  "key31": "2FimKBwU3dvqfvugxGLkeebk1C2e3gxNtNWn4zxoZAqgxUTRZQNMYFpSwsLXbrNiLCgkr7zKDPR4AsuzYbKebdDU",
  "key32": "NyTXBxqjWptoNW7BppoHbNuBUrxEV29VLQjmXFjx7BSY72Q5M4tFa9ka7495UyDCEB6wLqhf9mvkgJP2rodXXa6",
  "key33": "we45r6n5zZSrbdYuo5DjbN2pY3RSTbdpy8amSLXGiVKw8GuR3cdPwptbou8LJn5rPxW2QvtLhP5BnF1Xm5e7yd7",
  "key34": "4KA4BR997yb2GYiv5kp2jiYwB48xURsnRtWeSQp8NCtdgcLzJy48F3GHj6ChtjstC2drtkJ9HEB6fg4oQuuseg4",
  "key35": "GkY21Yynf46m3sicopV4gfzkFCL3C6xKHg6wjsvVnUrGZSK7DD2keJh8Gxkji2egMDNnGDDYv74CEjoZUQR5etU",
  "key36": "2LEkG7UxJfnhZyPGn3ZZ2XbXBQ9aDMEqgquTWUdmU159kkpttLZCY7jjMmQtWARo83Lgba9Dy5axy2EoB8vDXea7",
  "key37": "4zAwHqz8LRU3QrwYUTKefLTFhF2DZVbXawCjTmK2fNR66y3ifFE53oZCWSQwfBCkZnT2rYXPTNruNNvSWBQPDtom",
  "key38": "2W7Q3FDaJNbQtsp9XpToCVHK2FDBg8MeoKdDNagEgnoHUGToyfEUFd9jD6nQxhXawdz87E8VyD5jawUyYuET7yxW",
  "key39": "5te8MicfUKjzKN2pfMLtBqAbUYwfamNTjxdThoSamKcLhUc5oQS8YohiDRenB5igMZ1Ref1sCRGuUCNBnfdST7Yp",
  "key40": "2yCNiiGLnucP1QUSrTLQze7ZvwYS7QFYui8JgvLHaaiKMNfUZ8Z4MzrKwyv6JQuKpRocSdE2WkSPWFE8wdadQu5Z",
  "key41": "5EV6xw5AsrdhBRzx3H8rxqzvswLL5dB7eKMzs2zyW9qsKZcWnU3HVsS2WBjqZJCVhHMLtYKAsrZM8zWjopRxtJBH",
  "key42": "itimwWw7oYWQoZHhAyNdCGR5oBQ7StGd8DAaPAJanMuGaTGeJu2q8u4q7QCQdUMGkC2P3j5iZ2HgTtZDaQxu5Ea",
  "key43": "4V3PUzhzEuEwB6RrMs56W117LJ5P75PAu5Nr61LSEL6FJegpZzdx1Us5QsEk6wGZysxm5yUi9TkNNJo9V5QMxY1V",
  "key44": "54UNBpmHMbUbn7edUEfU69pFAsaA2k8KPpknJkwoCg7We5mC8mCdFmW6XoLvvsWW29fRXXmup64zYtRqLn4u1FNq",
  "key45": "66asNy8hwCnqGXdmGhUVogdtspgCNjoaeuMkTN8ogPCcTMBcx3MWtLBQGHTAMkyRXGWKjhY2gYJEMG1LpT6PCeBb",
  "key46": "46WDMYoCNosM82xLEYhwAiFTNpn8rEAGZ39Ymzft2HdNbsk4Uab7VUZYNYm6B7cagrFQ3Euhmc6mxrnzJp3wtabV",
  "key47": "4yu49Us2sRJbzzoNJTbXZugKcVvHFsKmfvqw36S6ovdbcJZWwWaNvFGH5FauFvo5gtJbgEkzTPwmy87fN1a6hb7g",
  "key48": "ot7xXkSfcafGTgGmjX5znJr3AqBZxFEgG9kAqbUx9EeJGXbge41HNJVeDCTkchmK351SZ6sDkG9yors41vc9cfY",
  "key49": "3jXZ9yzAy199ig4gCzMgA2jEHbRwb5X6TuoSVmbz4QRyyDEu92rTmJvDPMnYqfX5pqq8jdqaDveFdbAabHcCNBpJ"
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
