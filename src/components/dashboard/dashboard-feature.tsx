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
    "ucguFLwNyvkPomELkke2d1iVEqP3LAxvheFPrYjpVkvaF3VEeBzRicihYYXN26NMALJbYsDXXwynbRM5tUSaiUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UvmKXKEDgPNjKSMXqoF6FEMXVERGdHc4c3DVyyWXBGHX3iA6kQqjQ67Dc6TmwqxDdEtZfkyrEKT9ArgbFkWRcy",
  "key1": "3YfipYzzTb2CTkY4Yvu7Te7emCH29tx12XRYGXsaCJeE47mk8aVkaE6TioRKFbA8zQvPpXFSB6E3a83EZD6VEmZ8",
  "key2": "2iq6emkfF3EDh4MTgqC38SBZv6GMDXydN4a97iC15xVpqjehZ7zQBQFp1tfysaEffffv67p1EUTW5thZ2LEmNKdJ",
  "key3": "4XMKo61tEd92odAbHGQWyYM7EMnTW2GSMpipFVTV1EosFnDj3wPXhNUy335rhCCH5WsWKyHzyNUzznZnxUBGTdte",
  "key4": "4w6dF8ef6Ad83abdBYRPJ6u3zPWJuSgiQX3GKD1ASCiXXWPBecRwBV7APaXgZ8UtqMQvDqSJHnuzetk27kbWPM7",
  "key5": "3hD18Lqa6ManCit8tW1evX5uZPygKsLizxT4CRPtmaTLwaQ8NbPzM4squAzNz2tyM2MQMLf3hP3gJ3P4qDUqP2tD",
  "key6": "53pXR2SHkc5uHresZe94S5qvwUNgJmL7CN3sibndEzH2WFuG6M4zHRdLkFCiqeQyM5ABHFUWrubGYdKZM6FKLJSd",
  "key7": "4N3NyiKF32LhCrbG6g9tFwELJcfharqDWEzowMGni4TeZ3mPc29MrJkLQN3uLmwADyvYHAVw5D49KguMwjouPi4h",
  "key8": "3oGgYCkfSjmU21zZfSLNPtis6LUyca87wpTxfdj81a6cpHjw5vC986iWVa5VVS4aBWkHwwnGk8Bk35pZLtNn1fXg",
  "key9": "2PmhVQZD2f2Qq5Fo5HMohRZnUT5zMBbP5LKP5TN6gHg1CzMPqXDpKSTKxg4JWkBKT5mLe8N8coEtTSnUx86ELCdK",
  "key10": "5UUjWbym1xNe6muVmCbtEgzwvkszsZSjduT6KS8eGdQk3SoiHNJs8MSqGDa3nUCSq7Khi4g9tAxEx75dLCecofUv",
  "key11": "4pR2Kgb3oX2hmoAHiUpWNLzyt8UXYVDUQucWofDjvx1eTDEdAyNXyGeZtRUvWLzDd1cpQVUKPfUSpGbtrzozNqn8",
  "key12": "3T8c9F2y9Gkxx45je7JuzbmMg1EmpRJj6YJjW2px8rDQhfR9URoUR8pr312ma73mbr5kihD1dRewjHVwnov1Z3kD",
  "key13": "nZJVmDoNQvJ8CoE5sscdJzodkVhXkux49ShxTQrxEcAWjp8bohwSfKhfju8Yj9N8eEXpkyTncXMBytj6SRrpSz8",
  "key14": "Wg8WCC18TnofzsVZcK7fPxEnU2LCeu9Bfw9KQ7nBoAzxbMhjj2B5Fyc7KZFSa7m7UeLuFKnHbASZdzeHSQukBTi",
  "key15": "9DT3Qhqa8d8nfGhDjL8U9kuSRbUV7xQhUSvYTiiz4GwoozvJhQRPXnvp6LvngZ7LVoaqm8ogG2kkfEdEKbKxCSk",
  "key16": "EkED5jcGzwkwFyHeCxxJZoXfAmFd7KthjhL5KcmuCRGbmkHY8VCjUzQn5xX6BTaFqHJtFbrso8W8UE6RaxkzkDP",
  "key17": "5zcSLy3mzUKXekHMfLFLeGm2hjA7tnHC4P9zv9Waj4kC2BFhXpJzhM3yhcu5kdCfmC2RoK5rhfH7dzhn2EQA36Q1",
  "key18": "2pYTTop8FaWoBLhkPpCttuEoQwK4gr6zXsQV8eXt2uELR2LrVz4zufjUiyi8ELDoNhErtc7gP2VGNKu3SghF1AB5",
  "key19": "5o3KRzJ2Y4buqCX5hPbYY31qPDZv9gdRvvVt7QQrae78JTLPGNNssUu14oE3Tj4ckS5pTA9Lt8N64TpRYvi8g4K2",
  "key20": "2AHpM6i5qggRvvWiAq7gsfw1WrkFCA5yzURvNAT8f2bqbBrsydsZWAgfZaVEsKeasmjAAERtrVGTGb44irHZj63Q",
  "key21": "54zDLqmgHZxHWija29nBfhfuezuMxZgQX2AGEc3fKbY6Kse4dZdVweRYvTZR6VGqq2qm5MSnku3wQQKRc5B3cu8x",
  "key22": "3fbMRgnJJ5e2WCFrAVuKa94AXEfWJVXWtS4BjLB92Mf22Ln3BChqv5DVspC6SSPmbPMvU7psSvWa5nUBvMZU5ud2",
  "key23": "V8MnpuANAzzXDQBG2xr2aTvsN5z273Xmwg23SBx1wLprjjdXQCVddAi5pHJDdB2pXpgU25EhDBTtvXN8b8FuPp1",
  "key24": "3y9He5gBcXg1jNb3NqTFMQy7w3GegHV5nfJ1Go2DmeUPGMFrG7HZTx7T6qJ3A6WEJU8EMUTjtFUTfxvFUpt5oJ72",
  "key25": "5rVSwyo2sdx1ycni3tZYheacu3ikDHabYAx4oy4s4XQUZ4C7dpi6Fhg2VCgHSPR167h2FgvkXronQT6ZWGh9B4GL",
  "key26": "3GdGpqSFNvt45CTg5pacmPo7TcsubeZTSuAw8aVwLDTbfHweWTGbxwo9tMmneVVAMWwHo5LgQQx2Ngtf3oyP1hka",
  "key27": "CEZtb3yZV4Ez4G4M8VLZUR7tx9N2G114jEukJEZr4s1HNCUJ8Go9cCyrqtyd7MGShe463AhivF2ZQKWGy7BvCXG",
  "key28": "3PdPgyjJiXCXpsv81JQwYTAiRNzcBGqbALTYcjzke9Jxt4ADTjDRLRrbhVciC4dE9oUcAeLsdqM8jTVRHsFg5aLd",
  "key29": "3Ac6eaACGso6MrNA72Zt5m9Z11iPXdfmy9rwGUDZrZESinmh5b5wEXeWhK9hWoeXeE1qvFMreQNU3o5jCv19yM1o",
  "key30": "2ivKH5tPVkjWcgc158DM2SYMYDnj7a3wRPnkT3vhYJWkXdw8Wmxcvbe1VXoc97FV35eNqDnhyvsN4ifR7xf7v72D",
  "key31": "5bBYUFgHpnuxiQCvMP8TyHSieVAQCpL5x5eUkhKTf4FXhjEuyh73KpjBTpsMLVKPHtBguReX7tm6WZHk6BPhyoiN",
  "key32": "rJgYw6jHRQjHB98ty7AJeC4kXLCr4gED7oyf97pJpUgDYF2CTwLLLus6SEHKMo8J3AgoLpmvBqiH9eZhm5pEQKN",
  "key33": "4NHc1KcWxLp4srZ4phfehEjcpdQst5ZprTUVLTg5J6x68gThhnhXrq6dQ53HZQGyLqkcsjEzaZSZeEFSJYUYZXvj",
  "key34": "2982Tjma3G15Dbi4ZU4Mw1tfA3EBPsh9PYoQmeKVzipUG1Y6FLL1gCGLXeiFfFPTzWZVGeQD999GDASzwNn6KnnR",
  "key35": "t576Gd7x8bjnjz5dZe3X6GhxHJsTBMXiqGYgM4EmQMuhGTJbYs7vJpHUNgUQvHFm3oDDF8wFCryj7kHhp2FpFWx",
  "key36": "f4hXi4jWgrPJ6gyuUcimoEBiDToJYuYJdcpUu2TwGxxgTBVFByHpJ9vpz9MztfaMMKZKVFrb6QWmXSUY3h7GaMB",
  "key37": "4PN2JK2hCWKDadJ7xgQhB643yCgJQ5AYgznb4YvPYhfsCa7jhWvg5mRAjSwyRB1kbMEMCWfNdVngG848UxxcPscb",
  "key38": "4RSCq8mFF5svvqYeNHAkgsvSqL3S3m1v1LanH4NicntCNLu2dyxuEUYG5A88hT9XjL1Ac5UBgZfsYTMReNm39295"
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
