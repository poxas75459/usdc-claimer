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
    "2xX4n9V5pLmckTnbznHGQrjgRTQCFhQJzo35pbmnhVHdFad2giVdWxKmHeXdhdMp81EeJD4yfCxpF1XTDCzK3S7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGuaqChu9ayYJkgv8m3t2FfoMiMEgetcRAZeq79FysqYBFHLUPoJgHnmCNsk1uXUdrq2d12Qy4AmbrMmU6Fe2PW",
  "key1": "3i1cCb9xXQSsFdcXywNYccLUkdRGtkVxQaimjSQNQQngNQiWoXRg1vEke69tyw3vPKqhapdZ81swigGkY7qijpLr",
  "key2": "3R2sFNeBtzoyeSurXRDqvvKGqqZumdDFtGUZL2EEzPDW9SY7D5LcqUYCqTHyns1295gzs9S6J4BHFS791nDFB2VY",
  "key3": "4Qwa6SVbDEmWDjtcbLm74DqmFpGZr4uf64TogcqiKHZTxtZt7Q2gLpkXXBBpWSFDbJc6wRG49W1aokBBk2HP7ezK",
  "key4": "oXTtQ2ZznX8ud4ydcAvutdS4XT5AfkMvspypGMU8Jw4fY8b6oBGphqsUtS76RXxmWptkma6ygeCj1UviJTjTnpx",
  "key5": "K1TpWHJWu9vx9U7pTrXkv9bpW8TXCaozkSMuxBUQfYK7ft4vJpBbsa2TeWJneQhr2pKPHtxPQNXpHk2W6atqGtS",
  "key6": "G1j6dRUEdF192DuT8cNTLHGpjsWvt4Ccwmbs5KKXafhprD7hnnEZ2wwKdNfnvgDCr429jM3U2J3f41bAbLji8rw",
  "key7": "2R4o8mRC5UmuTF7kc1pR3eSvrzCL5qNsLksV79Hh1snuRCSA2G4HSWkPW92H9FEkrb9nMeX9j7Eb7jdNKamimkuE",
  "key8": "5yRSMWSjeDfCxvy4nRisDU9cC7M8umjMWtzZxEFhw5r8Tw8DdZ3GdKXowSJEotGN5NbVH3EiGEccy4DseZJk7wW1",
  "key9": "U6NV7gNSDhJWuau3Db56wqMxJxJt3cEeFJDM59XiMqW2nmdPZwDUkLmEBFXkaGw5ofvhr9j1Mj3wUUS1azoLBJ3",
  "key10": "5tUtfmiY74xnBNNPP5r3hRAavXZL1ggNTvoKEE2BknrVhAcy3CzMSkzn5xP1RqFV3g1XDokJ9hJL1XLEjDAaMXAv",
  "key11": "2Znxok1YyaYcZLYUwEq2HrW7pTNAxWYbR8wPHBp1ZkoZQ3L3LHAMAfuiKpGcuhujYBakZXqf4Xo4Qd7Dmm6yYsiV",
  "key12": "4asbVVG7mDkt9gN3ZSBTYTajSGABMauomvwzwtNJpB9abHjDYCDYVTMDyM3W4k2ZMyxCas8pPqyFmttWAsS9zT2G",
  "key13": "5wPbAaiz3XVuwGmwZfmARuSoyTE3R1qAXMgbfSvZaSb2mWFr3bqBECTYTkTxDN8nujnnFsPEewMhBvJKRj8kQXSA",
  "key14": "364GgtpFKayURcgSoJQSctMwJ9GBxWSTPpyH8dNiX2jAG8tXQF89hxA4kXce7fHyqLi9pHQXUWYszphzJ9ktvZ2H",
  "key15": "2p9hcJYKGLqKCUnyWp1VaovygrguNjtmZqRtqHExKoV1mUnDL9LN34J6zhQDo3SoFs8Y67v1uHh6A7dSVJYJXguA",
  "key16": "DvNE3nsZ2PkXMxddMhCfLaA94acNmgYy5MRPZEHkDmUg3XEfnMVwXjTghKmWzbiL5DApDNeM3R4tSFoHFQ6yQQV",
  "key17": "4gvjpTXCa4KsYQEsyndHmy3SnxLD86FKtv8Mb8JjXUZ7RUt1CiLakbJb1seWCa7XwwhBvgToUGhwuBRWfsJwjE3N",
  "key18": "4hNYW4kKccCJgAAtM7jEYn3UDA3yoS178WF4VR4YFwnAkkyH3EhY4QkHpiVKCo3akPbTvEmBT7kjPXoGgj41AywC",
  "key19": "2tnwT1Zy51hCM2au53FWvCKjvTdSXVq5nszC9ywxFa8cK9sF5PayDanE9BZzt6AQTqpucpPHyN1ZS5nn5sm3dQao",
  "key20": "29DgygSguFW2EKPTryw5PinBR3hcb2XGFqrB3jMZnHupN6V7DaWgYRY5fUggiihp74z41UfKkDN6ohDcWNmGL3Vc",
  "key21": "2HafbJHxQkDhNC7zjpGYNBw5i9tnRfm6nR76BfJKhnMxX79cTQMqN2jVAMrbNhAEaKpjvxKrp8UwPk6cHznPWbSi",
  "key22": "2RShxg4kyKPtZSiUPYW8hijxjenFRhsTwZwW1GHMQomYsLPRsQ7Qbo86w5x3obLM9pv6UK5J26MuWi1DWeKTVAec",
  "key23": "4Bm9Wmhssg8xX7RtvT5a3r1zPwrtd1v3m3s5A8445BAMjXVRAURxPbEZNoj3cqUN2iCZGxRHEz21Wh6jLHBkRxS3",
  "key24": "3iXea5kGfEc63pVmdoZkvJBR9f7aixfdhvjED1ZZwqs9rQD9f8VnaqGjdpHVsWb839eY7TvQqeQYaTeToRLP9Mfn",
  "key25": "4hoYAK5WeeMNunvA5ShP4cSicWQXsLUjjWNKN13538njtY83mb5X3tuayAkRLS4z3fc6LuQHNmTgFgDYKv8DVqHK",
  "key26": "3wiKMzRTTRYZnb8jyHaw1cBAMd9kgngsHB49nmQMpe4dKkPLCCcd6ZhAj3HFB3kd1b8Qfa6ttbMRooyNZFpGiUha",
  "key27": "4iTWEpbRbEHjCqqPPsh5mWEqimQ4otjitmgtUHXnQeG5UA2sfba1cf1XJYgcRvMqa3dYXmW9b4Tm75Nx4SkMzebc",
  "key28": "5LNHZPC2KrVawrzoS4X441HRqYpp7scWg3VKHgXQn8MBoeiQ4p1PnPLujvnn3H7iLwyGqnMkgbExxrs3RFgRLU9G",
  "key29": "55wVbUyJvE6RbtMfoAzTq4APv7XNrDgAVpCUFsTB21UhchPuK65kWqsvVqXVSvAeDGVQ6xAwKcPyzJBoMbbPGtds",
  "key30": "2cSBefMi2nmTwvJnHb4RMitXQABc8G7yuTt4KbipzGQ2hiSQRWidPVtcNENyVHThrgjxGSBrhVPLK9cwPAeUCLyN",
  "key31": "2Hy2pqiT3w3BDdhYyb4P7n3fVm89cbnhPAoaPwdu31XyuUocQZqXTc9uDuhM5N4h5CiPPsQ3cZXSerADNqeFGvfn",
  "key32": "EdfJH4P8ZHrTJukFfMfjMd2XizL1xSGyD7Qk9hnpBtv87gbrc1qbyy2Z6H4joa9JapZKuiyKmTJKtB7dbTtuyAs",
  "key33": "YKMgmTzA79aibaPg9HcWrQkdjknQ5mHBTRAjNqzo95sDrNycCTka5hv4fCiYB9MAsour37rKqsFwSyt6p2NTewA",
  "key34": "4bzFMYjudnoJ4w9DcEzHK4vteteFX5eJKU1i1C8qxrzXVuVEhk7h12tNTabXG5w3yVLxdVmGvtGAUDKdCnFuZmqF",
  "key35": "5uBauUQ5GUDsqqzSVQUu24fnzb1xuA6FBTrcztJMuwPxb9SEQFDSELMwD3ztGvpkNU7mCuxDYo8aYsUG7PU34UU5",
  "key36": "2tytZ38GULz3ch9PLYv5rjAypZ1zxmZkK8X3ZHvvQmiJPC4V6DguxoJv9kdG9V6WLxdphgoLoABX35NAQdCPEhsN",
  "key37": "59v1E1F1guEvC5Kn6nkBQ4sLrGEBvn6unoCtKKG4HzWjFD1AYeymVbZkmUy6ssxWV9QvZ3f8xJfeZGZqK5yhTQYc",
  "key38": "jSA35L82UC42wp9hxXKzwy1Cj2Pv3PFjtjnvktyeRd9aBoTeyRaR9cvYdAMoDaHCovxs7wL6gucMS4Pe2VKiCi7",
  "key39": "2gKK93959t8rb3hX7Mqrrc7wFJU4K6VWNbFXkfD3jKMYuQLrtkXgBg3jgyueNjRMon67XzENWwVB1pcrhoTqA65Z",
  "key40": "3gyRSiBu57zXMYUYyaQz2ygQ6UBy7cmduLqT5ikmSzeVdbyuFoKVQLp6DSPk2XTn2ahuiV32d6L81R7bHrK5MLDt",
  "key41": "6wEF3euyL3wXM28ZQUgLUfu1Jfai5fYxsDhzq2dDC1V7sbrbj8ASRHDnWgnP9MXSK4PiL6baCyrpR8ZTaEFRJ6m",
  "key42": "4pNdBPHewDgm5WmZkensson8q5Bs3GRqaQnc5jQnYsamp42VpoQ7tb7W6JZguHDPot4GC3VQtXkH982d6A4Chs7b",
  "key43": "3NXXRyTEmGTCNrW3J5thXVuLM7n1hn22dtwSwuj3b1AtpNyjb2jijbDu3SThP6hLtbLwVZ31nLfNM5hpr8S7Z7fi"
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
