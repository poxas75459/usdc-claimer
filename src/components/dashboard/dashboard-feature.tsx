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
    "523eCARRtXNUhNjHQ7AM27Dft8veGrbW8dhS9JFiYwosQWxAoNpKZkoXRWg6MTPh4oHD4kN58ztVxLA1G6EQeUoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhBg5dJUJZVeDFDaoPaL3vVAWxU48HD1nAn7LkHCML9GGehLBLiyvGtUw5A9LGCjbGhG98yoSWiyVMrC34nJgcS",
  "key1": "NLSJmieTa7qm4ZNnTCnXuFz5aJXpToakQRuuSrJ5zNxENU6gyZvwZ9cpdz6QEU6TDcA5HAjYPAT8VUAGxTueEvp",
  "key2": "24ou5agXA3bye4SuGbzYVXoT8L8XJnEpjiLwRvHb8HPB5bHhdZYn9VG2GeDauUkR2vVpWa7o2jrXqiwhhuFZkeBr",
  "key3": "3CpqP5nMdL5YnwXs1kkHu42HExVJDW5syvgtsaHqWGVgZgKD25ra2UAYHWSEatkMyyS6MLWj9eokiawsMAPVY5yo",
  "key4": "34ct1QeJ9f6gMSrZ6UvZSguj4es3AaAzGsGfN5otmkn8hheAcdLfgkiDrFQVx7Qj4x1hVG5xrFTjRc2PHssyccpd",
  "key5": "2Z7v6Nb2yipeRX6BejoPLWh4D32jkzjcBVu2jdfrTR7H6yLUqXziUw85NMKGvwCcFA9HEXw81RJ6342u7fk4AzA4",
  "key6": "5tjnujzvUUqLHBZ94nbjvgffDw1CWNbGhpgRgYx4VD7QbbhQwjitUCy4irP9mW16i8RYrbri8iU3U9snCt1Hd7Ga",
  "key7": "3cMFuBHyQ17uyCzk5noGujEFehKYfxEY83r38E2mLkbmrQB868gqQpiVo99AuNTeFZWF6JVRn44VcthoCCvJ9d18",
  "key8": "2ZzoGUUDu1vcBD3H5iya8Euq5W9oEPX6AE55yJW8WSyXLQBhEp88GFGBQaySfAG9yejsL2iB3BQfnUdQygFumP7m",
  "key9": "62A7MLGKQSzz67mFpzFxbb1iK8VfKuw87Yh8vPHGzGBtXFiy5KtY3GtXYh2641ZcPuKq63wkFbJX8fXxK6fMLrd2",
  "key10": "3RyaKPCKEzL6iudpzVxDYJVQewfPdh2nzC24j9xdYkRnSsvVo9RUMC5SMoskvu4cUwtSzS4F9Lezp5PDw1dkkFiT",
  "key11": "ueUQs9RUt9MDTxoq6xkpi1U3Nb7hwk5X6WzSy2Bu5qP2VQ53uEUfVwqzwWC7wS5EhvLbEQS1sqbJHLqH5n59ziN",
  "key12": "3VhzVo8KqA5BsoyjTbiigSxpFFy6Md2pdUTmFJGD7x9mV5DUk9CBLmjC4hA96MWPc4DgLhUUEWKuY9UxB9rp2EyU",
  "key13": "2Wn6b9cE9JCCJHAdz4ExeQbpVdSb3QDcpFG1w2PXdpj8rKgEJeS5pHbKzUSvDjg74i7WGU8iVEgyAE9fH1N8Q65B",
  "key14": "3W4qdt7mWTfp4bnCvUHHC8Bd6vnVawMzATuoLR3vUDEAw2Ta9hXW91ZQCUsTTmHsMMu2XRg7FuBjgi72Y9Sf5iwF",
  "key15": "2L1tJjEKHTJDuEmZrzF5kLSGQUo6Jyn2oEWfzuymdFXr5bSVAw1VXqEfbUCEBP36ZPeQdwny7cKuTjS7EbjREXZW",
  "key16": "3MzByZfh2FoQgLSJqp85nyQS8qtwc5shxRgqY961xiQSyozwKuJ6bVjaNGizffXPBo7DPCxqg5MUBffwTGrLssw6",
  "key17": "5MgsRdYB1rCWk1nQGzxVHKNZdZZEVrhKFXwAgY5Y1ua7ySJhpeChL13LHKKKbeD6x6roHyjRJTo7ZJ8iH18A937N",
  "key18": "6RBVkeMcRANt5dj5Gxeni2Y7gFvMQNeDCBhTfHEoVEynVEWUbVyqyCQwx9HpFdAYPA5yvzmGjq2RaB6zKUagbKx",
  "key19": "2gT9E6s5RuAYPypMj2voLwwbpMYqCisHhDMVQt9hsmT9hcoESJEqGikQyBc3KTVVK1pnskgK9tEcbhUBWAYmYPd9",
  "key20": "2ojepjbEC5ZmjDHNfDbRoBQseFttUSAffMYFcvBb3tvvFU3KH1bL2vis7QA6jGQ3gJCWvJms2GYuKMkFXYgc1mg5",
  "key21": "2x4LkjkjGNKQ64ynrh2GALmWVAzCrpG8JDeTSYnLck58jwr9SKi3SsdtLhPWbJuRbRqFhgi4BEemkntCDG8aJU2B",
  "key22": "4bah6j1FpputySaGjJqPQAsRbB7wiiqjkNX4PujqoMgv8sDwbauevdFre4H3J9QHdrAYwd2Byp3Rxdx743veKuDH",
  "key23": "51naAfjxTJMEJW9ZkisD2RcZ4knWYy2tpnQ6WXAg6waNuTHeoq9aWfWPiwBGQ5QRKDyst5gAYku7bPnENkD8Ltma",
  "key24": "3SckirKA9VZAFNkzEQrYByCMkj3nTYvHL7FKFvpCC9JRtFWerkyJt6EHPL9VALtGdK24bRXN5irwxRyFWgZdFMzu",
  "key25": "4XmqziJdaDratLbLWiwvZEC6T5wheDaE4769RxSPSGDTRmYWLT9Tifqn47oSTvtn9DUXCP712W7VxPT9qjD3CKbk",
  "key26": "294Edad8jdoLuN3bzBrP2D24BnQyBuEFLg6MBeTzkmsizCrmPxJ7HPAef65ug2N1QnfirCUpPswwTCUgxkxa9WJK",
  "key27": "5UWSXLSxkDQpRaJ3VyFjBCYkJTP7vzz3bxBn2ybSqRDvSUjFPDkDUmMtiJeVhaBjef4MDgcueBKDCscizhpoQnhC",
  "key28": "PVMLKHv41RNevKhsiXkJCDywmyqJWzhXAj85pVyi6xGM5AVB4DUKTHwa4JHYxV8X5EnQfASBEyLTRk58Woe27n7",
  "key29": "5ryNCBBpxmsiyThkte5tq2UR6qNn3eV8sbsQ5xYyHYoTfCBXEU2Bd4WT3m6Gfwx7gPNf3892rpcEc3F2gZqmXqwe",
  "key30": "2pDbwYwgbsWDqCqanrNry51KejMBATboqtaY1BAmkfeMquaqJfPZowJceQUr6uYX7mbD2sFZ9THdRdJTGrJN8Bgj",
  "key31": "4wtSN2n86mphVrCTtKpEbWQh1tBVvbg5QwUCG8MDUqVHSYeDysCeYQw1VdE6pcVVo9guwjVLPu6PyzTTLFBR77uV",
  "key32": "5gkqs7mB9pr2DSRYAq86P3WZTvPPWPpD5XhBuHinhjyG55SmoNG99XNsam7kC774XkuUmG83T8NT14LS3oEb4iH7",
  "key33": "L55AAQcHC8G8pmxYGEaRfpSoerzLrekDu2gXuTs1bAbLf2PFezX9bEYsyJmhhdmiHfhjuRDZaxP1cSixhx1xWDB",
  "key34": "4GhrbNirMpSJRSPN4MK1tHn5pJeNtqH6F3qbNyeS8SVxkjxjc9vpdPFZ43dMrjiP9g1hiSEuCnM8LSDaNFbjNoos",
  "key35": "4d2fLRvCydniwJqNEEpXBFDqhEgY4Rb3y5Nv4YNGLM8jcPiro1HUFR9zqDXY1h4oDVH6wbVUoadTSSmdXVHoYzD5",
  "key36": "Setaz77etf8T6pfWrhynEkF5qP2JcJkbWNCmVT3Rb4h43ZRU8mTa3YZtEENZS6kBCva9N6eFLcPqUiBB3azESJw",
  "key37": "aUpa99otphnM9q2DsrLpnghzeLuxgN4wW97qfirdPkKpCThUHcWDcmFNMouKeUfanteDH3yNGbwtLEVPLcuKinW",
  "key38": "5pjxdxuY49chTcRPp7C1o51hEkQmxW9iHJNvAwAKoLYAk4WzaWZ9fG6GUmwdYWCWcZbqkBZK8RKYnsZtPiNTwzfc",
  "key39": "3efRRYCdbXWvGoftYN3rhY7f9ahbmSnuVpFq8yRh1Jwz7TFTBTkovrZBqHsoKjy7UMYyYeWJDeFgAVZKDM4cYPMz",
  "key40": "2Mq3Kdszmj8PnUqXyMkzWy8PrA4bjnbTUCVn9PDBGuf8KaKHyjtxhxrCG1SDcUPoohGHXc7scGaKxjrbzH8aHU47",
  "key41": "2zwnqshZJwScx1Pj7K5KmC8GrhfpVZYHo75GGkv1GVB1CPXX2EXibsmYNHSRACZBnhz4b85iuRx211xg3vACmvJJ"
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
