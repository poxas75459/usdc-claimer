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
    "21jEA25neZ8sLzFjBRsfs4oL8CeSRRkNBUPPZJsx82DHtsxsNBeHsTC79addw9wQenXqUUX2yHe9j69uugh2H4nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUnsdb4UfXsHportWmbvR4Xjdw31qQQgaz16S8kaAuN9tTbPTwwRoTqBwopwcnQBwpAb9hADt5pqDrHUQkDGDTt",
  "key1": "4TEjFSzFoCxiQxHmUpKiFDqCzLB5JEZMZnYXr9P5ZYPLRRq4aYmyonjPwq7uSkFbD64va42rufqBwUavCfHr6b5E",
  "key2": "5eyezwWzF97Rm8CD4zUWvCNVR1CvYnWqF4bRWC1cFQUL31tzsWJfGFfEa7mJhQJe3NQGLxMnSSjnsqxFgAGAowTX",
  "key3": "xwipY4RxYLcBf24Nw5jYzzBRrL2BZqhV3QYyarMDNg4pN7gVTBDHchFA7ATcSjXQbXCa2UKdNt3WYFgAiCaTqts",
  "key4": "24dePjmTNL2jsptod4ZtbbzCVpSLtHhM5zrCgwHfRy5Z6NNWZ8MCwpaKirBaM96ngsLnhH34EZQns588MLgjPa9T",
  "key5": "3yT8hCYobu5NiozYneQ8As12UTKZnVkEQePbf1L1tiiucEMhLEP1KLNHEXBiBuZkiAAi6dFPUyHjEt8ESmKdTJc6",
  "key6": "3cTBMaZeyYnBu9iJt5EcctVtPGZYEhpjy13jmguyDCnMiACcj6H2R7ZpgX9P5CAC6AUFN33rAGpCzgB5syAASVkb",
  "key7": "5MP52pXX1eWLyf6N1GzD8baGgziSyJYjukioB1asPeGLsMhkbthwRN9eFsB6vKHES2BjqyYksB78oKp2qjdS3PQ2",
  "key8": "2wYiwXuNZWc3ThCTBjzLiTsZfqWpWTf6fDpRmH3tKzNQcXE7hfLoUqQHMW8yg1auXCvbi7WekxHnoYrhYBeuBTQ2",
  "key9": "2CQQD37u5NrQJiNcQdR78XTbvFdrDQQ7hAtmRWkg1GEhLB77yA2jjG87FkeYe7hsbk8LpXDcW7MVGQficFMZW5mx",
  "key10": "4wE3diWo8AFUeEGrX2hL1WnNqsA73omeV8PyiWUZt1j3zrLm4N9RUGXDvkRuMuM4LAUiQZYDsww67h7qXt8LZJZ1",
  "key11": "QWUH92poNv72HoBPu1KBEajrchEwtt3AtEfYBWnSDNTTZzibbxXts2JJch82VbfHaGU9mYidq9N1PpwNZrhCDei",
  "key12": "3M8o4sTSFLSPqubP7ANGJ73LmGX6aZtGZ6vEE3y4pKyfupj5tCDkijQ4MJEsXVXS8iJN9sbunXiCrYAcW7eKgQuf",
  "key13": "3jfUak1kZXouxGFMFq3YGAx78ysosxHmEmCJyQNyAByd9HaXNQJVJCkJkz8HwafJTJYTPnG7ZbVSXXrz44fTN7mP",
  "key14": "454gB8urpSuAHCeNyCW9cW7NXsBCf3TzvaSwgo4RYNpeq9ktfyQbaZH1zAwCzrijKJQDBZd7oiUbpASn2DA7NpVi",
  "key15": "5vq4rUnfcYWD5Qkwj6ZgHfFM8NyxAiLRQcJfJoJSyMKVWbrp4RnMsi7EYbZuPfgaoQoentxkjvPytcPTGDGX8smq",
  "key16": "5ytxNjF7ZTht72tor1USvexHqtujxvgvVesDB2ZNxz2P8w1Wvv8h65MKRnZPkaJrLxKNZCHeuunHrEVtqjEW3Tia",
  "key17": "7qbKCouPk8RAzuP97coX9n49qT8D8KJD72ibDnZohj3rXhtDvczmLGQAk77wcp2d3PCbvXe3YbvPXeRfKskurX2",
  "key18": "3RSHJypvrJh3rjHKnxnkftq1ZzUMVkNVtVQ1dxkLwsGEdJjmbhWi2FDHXR8YLUhrLzkizChR5xzyQC9ZUs2n97iX",
  "key19": "5g6XxfnQzzyCdrmEyjkos4EzVhvprmA1d6pCWYkAmzcFcHdoxMzQaPxBbtWkStpPzQxBvnmK5gWEgXKzKF48nmMa",
  "key20": "5FHxT7QZ5TvYHTiHakWakT3UxnJUa36NTvdzGjNeJe6QADWGbVHX1m78S9ZBobrenye2RpfxrG39BgmbXufmwgGR",
  "key21": "53vXbtWk6sXNJTtB3j2zpmKRW5AQ33zgGUPXAMzWbEQiTKM41rgVDsFDbTY4SXSh4m2mxdBTPAQQWTTrKRRMh9er",
  "key22": "4KvuomoHxCrndsSk496SB8eUZifjmL6ne7HW2PC1ehDGLLfYJ3LoDMN7Zc3dVqKWdH9oAXwU8FLox5fHLv3RjZFC",
  "key23": "SQyeG6c5tcQoQbWgNef33jZ53Qfwa17AzARRuj8ebiM2XEkMJoGKgyzSh5zmKD45pGshpoe8MJFac1K4oH3sEf9",
  "key24": "3TCWZ9D2MwxFnKA23acoQoYasgLe81iEENpieFD6EhdqDBRBGNLQGkNsadmV4nk2xK7rEetvWPjbXZBaU5vdNjPV",
  "key25": "3qJFndjKPz88CPFSxkR8dTTNduEmcNEB4C6Tq7B8vgV6cAjeqXdp93zLEEU1aNJqneyPm9fvKQTWsDM5vygMQDe4",
  "key26": "4QJFku732pbeyuc8erBiSsb4FUZmr6Nji78ktKvD5JB935BhdoeQfPBye22UtHWoNf5QpEsQ3bt9Tw4DxiUKtG1Y",
  "key27": "2HpdxGtpx4K4gBnwtw5MARAh3f25iVjYSrZJP8ZkzMCuvbv9e2Y9NyrtGPZAYeJnd3K4WB3eoLCKuVkk4CH9ooEH",
  "key28": "35d54dnRVSn8QGRfD2kSSqth66onJeNLmv9LqyEZCf2rWiEKwQFfTTnzWVb8QWYu28jLnZdR4vPeDJv4JAGTu8cv",
  "key29": "42XjPocbW1htde4QfgD1AsnFqZtHsAsBwx3LsEoRjjSc2c5W47gpbioZ6cmuKFaAdnchw6KhdvzcxG28ak7bDpqg",
  "key30": "5z6qp9cRf4Mp1VkyXai54YcEfLhWKf18iM6P13sMeH6iaMq1xfSnEYwAk9quWNcryJjR2KVT93hF7bADrHThxQ5i",
  "key31": "52tx2JhU7UzXwbjzzuiJC1kEjaF8yzGNQ2L761QisdvkKvc5hgeaV1RhqciQUH1QR4ekUnaxkYByfLtBr3NhiXkR",
  "key32": "3mQiah42X7FTCW9QrSnm3mZpTrERuz4kPrv77B7CFgQEgBJAnTVeoShEig2DLrwM9HMwcGGU5xXYoeVXaewrzWVD",
  "key33": "uJscZRRXFvUH8NP3ZdEayCys6jGjKk1wt3eFKXPScV9C7HRGSeoYEGgPrvvVnractduJL13VpPijiHEWhoMyC7e",
  "key34": "2AqTzbx6Mx81J7SwrFWjSWDAiSt7vxUSyZKjAubpz6DHFUzu2LbzECHkCKSAVKdZEnLhznWBounSc4LTbUThsU73",
  "key35": "3qJRdE5Nm5muXvSP1vyBBrwQwrD3JWXFuV3TqzLuQxxiD8JpzUN9Adw9vwxAG5wprPC7UYEJJmssHxrFW7pqgNL9",
  "key36": "MiFU8kSyibfptKLw2qGqxfRzu1SuGpS38YgZDuDa5saukf6sKjKJBd8Jx9fH2MyZJoerHt5YwkRVRJr1eM3FL4L",
  "key37": "BiKhm2poQG93HGzSW54YzX4Qf6a2C8JXgRdWavcVWgwY17Gzf6TCh7Uwoarfxk1TLG3eyQdv1qRGFQQBkTCgtPH",
  "key38": "4ntaJCXae8R3pHqUHxbxYJWenVioJXW6W9GUd7RGKDrDPYBQCwxYUY1v5vmQ4dzSwyJXmWuh1r8tsk8z1YqgVecn",
  "key39": "3kGA3dwudnF1vjbWiAN7GkH9Zt4zbEf5UFyq1rdRJ3raPj4WDDLmPW9BbbF3vYNxzRYvTMEq6N7Nhbty8owuWBdu",
  "key40": "5Du6hsGsPhUV8iwkhUf2nGtrSiRzvhZnsLSNWgC4wZe8rYeJb8ib28c55czGLA5EQqDAj98CM6Qarrh4Hh2smvZR",
  "key41": "qvZJCmLPCb1ETVvy3Mc3np2MBeLRZHwusZ2QotPTyk5UCmNMwejERLQDgzau2jrL1WagB32wieeevtK4ucnReER",
  "key42": "4ECrxi7Zp6gwW1XBDw3Gax9iJUd2kvscS1GNzE6qfEwQFCRx2qFjStBZJiXxBcdZDuYf5q5WB9CQYgZeronVuwmf",
  "key43": "3VoqnT3oYKV4EdYtrsMG94HG5qBnxpThkpfkUYyBFCGePtWQdwnsNugrWJD5vBnWEGAQNPaDmawNbsXA4zWGVcGQ",
  "key44": "4aQsQoD9dhQgY2SoPdFr9bxmpa5NcTwTkQSn8EE7SPUqZyHLPEFJvmiz4dW3ddVftHXBsMuK5jx1xAhsvVQVnRud",
  "key45": "UZGjpUZK7emz9RL2YMxaPC9XPYsU3xBgejdztFTzkJGLBhQ3hz7aPiYFkdD1Q9eZe6pw45hJ8rCxxmi4ghbWma2",
  "key46": "5M43hTesi1Ukrcywdtsn56qMTr9QtJ3JfxSbBkPjZYzi1BmUsvywWmVmhNgzFcuLjTgobgcRerj97csx51235Vez",
  "key47": "2NkAVjjKohGLGp7aA4ibqCMXnvZeRMmMjTUbAoJQ3LPA1F2sTUnXMkj3HAu5hQoj55cPnPycp9NYLNBBgUCiSxUy"
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
