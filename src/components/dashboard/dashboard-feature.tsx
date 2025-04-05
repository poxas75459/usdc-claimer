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
    "2EV6TU4WMB4Y13ZgykzvyV9YNaqARsiWukFEF7yagSpxLy6KMPT4LRrBn1iQMYYEFEQuDpQ6e2GbLXi5WLdBHSB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jm8t1XK3qHWd6GCnSUL363LgJCACFYG4JxSQNLLx9KmhJsFTaSbwvJ17RSZBshQfp8A3C3zBdyeAxE2MPKuHi4C",
  "key1": "5xbTgDfi7qfDTx576qpDG1WrNaGVagP4hhqtf3uKaSHW64DmjyhdRaNqPUWmMBbh8GV5WSABef4MiJPLJXEb9T3y",
  "key2": "4FeM5eeFhqdg6QDnXyPQycWTu3VuoXNcLj9nb5wv2NCK6o1CF2VtjEgNNhYXoh7W7pg5MewhZ2QC4Fr4JNebzGkc",
  "key3": "66yj9zNbNPGffhgPHCMw6KFVDXXHYoF7D2CUoAboumM9ZCitXs49YsuMxYCQN1HYHgb4Jz2rLWByptvtmGk6pucR",
  "key4": "dqSwEcvJ6sHXer43x4j8ESxqkzoTAfZir146uPnW6wB23X7JC4yLSRF1s5SZWoKfKpmhJ5f1J4f8hbQxPh2YQDF",
  "key5": "4TKRgmgUFfK7DjjqkkCi3VrAubw8FRmsT1AARs6YJzJMpozi4uKsYghd4qSFFjLhbHJ4jCKBroSxNVG5ErTrAPwx",
  "key6": "3qkDjRw7RrL6hLkhrTtv5H3rohsJJmEGuS2RGConBpGjfQiY1c7p2DajVc6JKZQs5gyM3Qs34v27a1Ktgd7UQ15e",
  "key7": "2FtGZYhRBV7hoVz4RhCVF9ceJdqc2Lq8v9osFeYYK2KztpeFVaPdqSFZDTdf8MNrpBHt7Sm9KKLvQzQcE5Txepv",
  "key8": "5CfrV5xAuEF9bpyrDHFZgN8NQRxprqmPWwtAdMpWWkNSa264KTXFLcjeExh729voZ6PU1GZzXjeiDxWLLT9K7oHF",
  "key9": "2xeQ9uPRW13rQDawHE5bvKBnqF48JQ8RMKhUg9SgRopXKhBqu6465Z1z68yTxbHVyKFd1ZrJKWsJe9VJYzZxeAmd",
  "key10": "677vPfrdR7zPiKAR8rTJszzyQ72i8bNYhkVXFiCoMndRhugz1pa7g6a6gQANFDE4DuMb5yuqAzmaVKM9auNU3WFL",
  "key11": "9M6kDNNfQojipSjxAP81KNvNmcQabzewuP9Vj8KcLSwCCGc1b8CXRaPBTsZczqprknBGQYrJpiQaVesvUEnFowg",
  "key12": "2WRLDtYEWnSJ9Bny3aNqEefxJWQhG5S2ia4fpNyhexdtEq8nA6Lt6Gm8AdkRCHAihW9rhqoUVpNu2riAMjVijndv",
  "key13": "2WUoKTVduKeCDGb2t38QK5imkXxjP22mpMbXSRHMiGk7PSEjGsV5oqnULjtqGERiMqskddzGB9dJuqwM2XbM3kqe",
  "key14": "4BUfQQkrdQJTSmgVA82kjwVdvrpTmXKN6PSgCcu9nZFSJMZqrwqBLPcfeKahqcAvCTBAVsjsLD7bpQbbBn6JF52N",
  "key15": "48s7uMQJupAWrz4JfqnDzzHEEFbe6K9sXNtFnZh1YDF8hGX6VYk1KNbTP89kidwAYAHKbe333h4MqouhTawdgRDX",
  "key16": "TfyxJCmceNYvDEcwnAgmc5Jnp46ZNGYoPCFwDCG8NCyRU2KdAFUb92ymsyZ7kAYYSRLdc22tzFeDaJmYYFmwvKc",
  "key17": "3psqU74tKZzzej5ZMFnK8UkgYz23ncEF4pPaY9soaLdDCg3vBXJNQuHcAZ4DZ67666e8r6SyJHm8w3uBtqbbCEKF",
  "key18": "3ztbnz5xSb532yUpHncEPJDSqDwaMsQRCLsx6rA6QtGLgdxP41pJCVCfYTqGoGAmkteVhcdgFrSV9xP3UTNwYh1U",
  "key19": "4LPQjyG6B765z2qqwLZCaHaAu7pHWkDvS4HiNPVt9pKAe3dUH4wgWcAquzF87tNvSShhb73yJa34jrkcr5jenRwu",
  "key20": "fEWBwNf957rmwvFZsPgKQD22yLun4CXTKBe6bKw1tjraQFmLvEY6C7rdon6byQP6PLwc7g1UsYYQ9FPeytBxNgt",
  "key21": "2fx7NEHGHPBAgebc8Ed12WMHzb9Kn8qMmBsiRAkiN6JJ3Y6YTA1H4Vjdaux4KEnj36m5hXhKLagBJcs2Mg5eDZZh",
  "key22": "55LREpGdVpS97fiH7Dir4V6YSrtQWr8rhWQRVLQgVkARnAu86PiVSJsWYtVaX6BAP1zMBVbCvRMTFppfNagSou4V",
  "key23": "2g9ENAt5ttzETuvnBbKNyxDBtw9g477rsVsdSW3z6fdpVCfPWicM4Akm2RoJ28QYunr2vpsfJvZd24CWrqLzbYvA",
  "key24": "3nfqVLBYgV7UVKKwnA5L9zs6vvKH3SMEtX2g9JmqwNhnibp695dc5vgQGWNpXDfHKjeZUBNWHH9UHfBB2vqw24Y5",
  "key25": "24yadoJGHBqrDPt5roeoG9UwSdbPEMGkUq9mKbKxhW55EB6Q1xBZo6UF5jvvdx2B2PgdPCEyGz4ujk5k7fTEo9e8",
  "key26": "3c21QuJtm8k4RpT4nCQjBexVMBjxynzyTZk3i8GkJ8Cpgu4V2Y4XmbBT93jjRnxUsDq5H7k7GwWFZexwMRo27NSR",
  "key27": "8aEPWURmW2cHQJ1NuDKycskcAU4eVrCRUrJCPXKrfW798FDQFZtsp5e2SoGQZp3obcLKJ2R1PKCuQkEGQkEhqXh",
  "key28": "4tpgRKg88eoctqvwUzzCTMPZfnEhATxrmSLtv46N1x6utn3pujCDiUvHRr8Dz7y4RAR4vY5F34ut1JyVEVKrnLFX",
  "key29": "gyfbRDnVCHcqGYdbHZw3SCkSjAt9BZvk9WEgznSVn9wBbrZADH5bRuT2eieyqggChecSxNKFpCxwcjzcKds6eDx",
  "key30": "54RygB9oE79ZeF9buHvqQRifHmGVeronc6ZH5bEPa3NcJEo9z3enHefd9vQ2JDGqweaP1VqT3eKP449X62j3xDvJ",
  "key31": "5Mqwt3fr8u12hJ2zQmRdamCcvQDUfzHTq2BpRwXDV8BPiceFJrUx5Hxt3cJ6j8eC5WdaeGdVFBS7gKm9WvMeiSgr",
  "key32": "4yaNsruUU1vNd1Y5U5yzy9q77YWyXKHArkhXPp5wGJpu89NdaPXVLh3i5MMThaJHjAVMMfZM8sCEsHyoexyivmDc",
  "key33": "4rXJdVXEiQAVeXziTJaCdToUDnWM1P97gLSyTjCBneKMW2oqPdUa5xAK8b6q7tY2Z4QE3LWH1hdGox5eqfz1a1jT",
  "key34": "4yXq5EP4y6dP73LR5mwQiSqk2TxHinaCRdQdZKtP84jkm9JLHz937T58XJ4tjeAZSn1dh5YEP44ohYYetRCCsiug",
  "key35": "3VVCLtTTpeNm2st5p6TGYdfWMb1Jd6jd9Ttkvo5ih2vzbWWhnqwbb2ZSRRZWRxezdwJaZeyvyBMGuHLuqHFRFAZa",
  "key36": "5Y2LqZSok1feLATvZ46q8zNBLUF2XgZHv1SkiPvmhzZZcGaZsznJ3K5ou6tFzt6vLVRu6vQjywK1gYbeMshFDGd5",
  "key37": "5gqL2miugfvRM5aMaUQPbjjCFVFaNUzbXd14JfC4sJ9JfAAweDHFpDnGTK3N6uZvnAYJ6Ctmj59aKo6seyahyv2a",
  "key38": "5juhEgoxM5M1wpHSVJgR83yUCFceweX2AJZMHc4GXgaXJXAbws7hKkXhNHGJwuTfR7tgPeBDpBhC1zFiqrq11Ws8",
  "key39": "2MF8V8ebBURiTku6aa98EuqR9JLSunQbfekJWtkPyGeGWB7Jwb8uRHxVc3YnhGUdE1xNhczhFpR8w7dm9wK33Sk3",
  "key40": "4uNa7dmTagPTYsFouhQVR9cso2TLrWmbFfBBbUpuuaVB4ubKok8pGaTuQzG4LR1LzczSN6qY6GJWcKcSktXXFWd2",
  "key41": "5uHF3MV9rt3ipvRbMGqRFsWBD2fgCuLCM9Giy7ahWXpY9v8smyMLQ5ggaATWTtR6uqpAQjemb2QixvLyJ9Ex7ZS1",
  "key42": "2LyR6qQJUZ5qBdJzRuaJNq1mV9doEdp1hBoXi1iYcuDv7Q2Juti1sZJW1y3VQhsHpJ3PvoaLyGGGJEM37ByrVx9t",
  "key43": "5naJTsHyBSCyCmU2qeLQ9iu4fdKMUrW5BHgKiLsVdKhrpD9AzVKRJhQay4qs7Z9SyoRpaFryWPpZzWtvsCMTZjdR"
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
