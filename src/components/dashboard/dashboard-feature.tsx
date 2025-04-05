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
    "2PPmQz8F9Ji64CDy9oHbqsgHFDcsjmUjVC9Rg6qsJHgi3kZjidoDMvcj8L3ipeoa3vojgLfXfFKbvQaPG5xRynWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ex6iEpXu5qW1nhYadZhC8NhgA7d18P5W93HDhSC39HrJCE3ucX5kxAsYUDxrZPejru3LiQ9teuWChVbCmA75RM8",
  "key1": "37q7iecJudCAoLGMYvKnwmsc4DBJSFYw88G97wFrVT9QhTWPnYoKhgzDjmF1TtJ9QfPiiQX7XyVXsjFDnJybFMfR",
  "key2": "64JUvJTcHLLi6qW8fCSzLdwmDkCg9tYxgXYH8DkQ1SmpAoqbzCuBSRiAhGfnY95wjCRxDFc8b74YZhksgCH45uUJ",
  "key3": "24Qy4e78mPmgcz5cMSwn2mS36kLVJusj3F9M5oYiqf7KoZnjq7enj6wqpaDcwMDssEDCoWFysPczjGL8Fm5GnS6z",
  "key4": "4uNxPT1uuLS4TbaoceScN4mUcSFi5yQXnwZbj2sPxm8vKBD4e13bt2zDR9NiyCT7p8BwutQAhvt4uiLjR2b627ti",
  "key5": "3KnDFwKHEjnGSmKwquAW8XTDX32eNHj8o3vtnJWCP5EoVyp9JGkYV4yXKwTuVpsVbZKAV7zC3owpgqpA2RVXR78R",
  "key6": "3k15EtQb3bD2UpYgxgXfzAC9TuPisEkmBSJbLi6vXRwxDf3zsafnEyFsMYrD7aYUTfYT5685B4iRnn5dUBjfYzWR",
  "key7": "2NW4PvfwSxqq9c2sEN2ihATDYB4VYPNHu9rKnqJhGLpYUWGpr96ChhMVze9Ak4RR8WV7m4SoEQTsBZsiar5aQqsz",
  "key8": "5RKThvDC11sm3nmDsNxd3Dicrq9R51eRDBhSXkUSMYHDrajU7YNQkJx7txv4UhQjQbZ5fxYtn2gGHBPbCQasATFT",
  "key9": "5SYm1KKoeyNdQHjMQRShyknm9yrQ14Hvwy1iupukd1kbVGCSbbZNhJ7ve73vEqQ2fyLvdDauE5kUsQBqGjbCVDW4",
  "key10": "4gKPe92G2gACf93Jf3Cq3vzMtmgkQ98yBaoLVRXA3GxqjynvGEtUaGLTfDpBdvhERmwH4mLTSgbw4JcwcvqerSxB",
  "key11": "4K5G96NLsnbBLPz7gGgMZ4RTdPpWshhkEvpSCDf6c8y3UZkfpo2q46qREBUqNJWUrNzooqddYoU5bV5Q1b3GWVp4",
  "key12": "4643nXiMs2jH78NMEoGstVcoXoHEHt6gRu8abCqbUjxmGnAfaHCr2vqvXccjhQJrT6DYtCbR9kevffBT8dqFwXyK",
  "key13": "55nYUMYtHwXDQSGqRshdswaWgVkY1U1U1YzETfnjVQi1tiRY45XDT9yJLojuRMjczHJhRRxgP2dj8u5fCDiVJ7EX",
  "key14": "4Fm2Zx1jY3uL9ME3oTiyeSehKJ6oNUaDkwk6hGzgTEJXbhYDNspVkvb3nXTeFZtoHSFpDBdXTeLmNKbCVgvKmku6",
  "key15": "553Q9Uz8ux8apgKQzdxymmCLPe5dGcNvAnt1gAWCkh9XLNya1JeuPf3kWjVU69ayRerHiV2EqWuUUnhV8ops4cRT",
  "key16": "2jNkCT7bJrDo9VZhjoyF82NKUjDtQaxLvbQydRHJ8kLumuLQFVubdLD2KhPth3rNYpz4qrMgeVcnmjfPjGG8K86v",
  "key17": "5LBUcovgbceems86a7mteSkL9z9w9BxbzJrbx8cwCNcHfm1YHsQHqZLupErMnp3Fy8GM86PPDQGQT1PZFsn4EK2e",
  "key18": "3DdKWGhgSfeKq2V69ACMELhq5F5ZN569WkCEp58r4f36a1sVvjzAyyS7FoR1VBRy3NfRkTTMiUPpZ3hPCiGSHEZ3",
  "key19": "5gjsCvbQ3388nBq3H88DjjLwkULfCDQKZ8hLdwWedZhZgPhewm1XtNyFdRaLhchtpr3k3VzrDrD9ZAZC9erfa4WR",
  "key20": "gRfTMgnnC7wZ6SFeawyD4aqcHQNzdAn6KCCv7Q3okTM26i4xjdEUyDgBKzh45tfvi3J6pqoKH6wpoygSAA91qhn",
  "key21": "3ANTPRRwSitoZAJU1adSvdKWF97T2xtrTwveh2NReA91zZ1FEgqJFzVnnGi8syfNcGhgTntYUr7onYZbJBM46M6g",
  "key22": "5293nZrHjR1QkBB47TgZqNLJM1wxg8PeZ1NCbRgqq3wBM4kTtBsmLxHLR1S3Qs5WFwHnWmbvHKqDZuRsi9nJWgJt",
  "key23": "7TFQFUUkVs9uEKvkjD7ScELY51oaRRbD2t22bvVngfp4HVUc3fec3NgB1mBJQyT7UWS1ddDFzMep6gLj4qhq2ER",
  "key24": "4psqFfBdWZMHE81PAGnGfpme4WbbzCXuD1SgDzrszZFyFzXgKL6G4VPyENztHnuZZnETqzkDn18DuJzc2WmTntrg",
  "key25": "bi6isoFN5wvXEAULbxR1SQKH1zu5nsue7R2ZabQVxXMrrmZvXRiizA9j8LiSe2WL4So3Vbp1uxxEZCDLmqM5kBx",
  "key26": "5zpaoagf8UyKQiMZnV9vBvsnjNcR3oJVqtdeJ5NLhiLS6AcU6JeAVjNWYEiP6Uy1jxCfhTdDNTc81EKFvSP1ZQyT",
  "key27": "3W2rSHFHsWzacxKRn3Rh2NCktaQWFAK55sRzPnCMDanuBdyRyqoSu2LwxvvUh49eAHSEWP9vyd4yKHzkYFGVvjMc",
  "key28": "4nkFTKN3jqdjB6gd6okLa9CPcWn2fZx8kQSj5zVxinZoKtHGgkLarubwS4zYYekC8UVU5NmRdQ2QrbH6Sjw72xKV",
  "key29": "2fCFNtKXm64WFaomVraeopqWvPoWVzsmX3113XeXCYTEjrvkDCRU2cLz2mvXmYjqeo8YjTc4fFtvarefFbY4CK7D",
  "key30": "XM9T1Wk6rSepCMcd72fo9kLTr2XKJ5f2PpTTCGd5kyX2rN8w3G3fYY5i5qK8dMH9QDUPCaJPC55yBi4ciEuWQTm",
  "key31": "4Lurcvstt2f67PtKPYxQff3UByVf8uNvumCt579nw4Ro9RwHMM8XA6LnXAJ8UBzGT4Dd2xEKa7cosLqvmQBu7nV5",
  "key32": "iXQbNaBUioc3iriVt4o2iZgL4eL729XeRt8KDYg6bNsRkHv8xLxqRGF5ohiT5cB5ucDioT3E1x42tKHnk9dMHBT",
  "key33": "266jwLQDtDe31ymNNiHce1k8X5ujBV3Q17BLmfR3AeqPbbqf3sDQEnJW8ianwreRaFBPbzp8uenEqknmhEfCLFVA",
  "key34": "vJru29CF4KyAmQb8PJdQ1JH3it6bT4tz24ukbubTDi4H6iRDkPr1FaFXuaHFApbpokTn4ygYTLSxwBCnNM8b4e3",
  "key35": "57rgpccmXcAVzRG3DbU2hngdxQ4xFrvMVhiFQy4Jzu2shyUpDpizpx7tExqP6fJHo7Hg9fEGwtknDLrXrqNLKZyx",
  "key36": "GimeKgfCpvnXkyJDS1paVTjPVHu1WYSgwVZuG1UuvvkotYLUFPaYrjXbBFNK7eM46zMrCkansMZgd3DFZHrKJsx",
  "key37": "3y3Vi9GFV5eTbK8KwBBFwPpm6Jh76P2ftuE4zqoxmBSstaRYLYc3TKUbeRBJYKfvonni8ubFqpnafcFzBDWwXULn",
  "key38": "ZN1eNQyymi9zAq54t3GeT3SEgyt1HohwdZGTkVUMtRYMptkwtd5k7j5iuZtycuoZAcTXP8xFg2VqM1VunYqM2VF",
  "key39": "2V8uvGt6HknVrzLcjuRhBk9AsAkEjyjjGN4VMsFkn1oPF1GcYCsnxokTdSu7WqVXGvr6zsdN7XYUSiRXUPRXsaoa",
  "key40": "s9RQzS4gxQMtRzBdTP6kCNPghNCJb6KWHSa8YZCA6cdzP3ySdwvwrNf2tQ5Rs88anpjA6pyEJhbGDmAXfBVgeyi",
  "key41": "51c5jxvePSwgWSJqMVSfUD4fJmzqedSSeNfP1YUM91juUuyTUmnwcQ5ostYiTLdgQcfpX5AzQPXWRAgnmtRNtn5J",
  "key42": "36K9HmM6C8WGNxA6DhHYjNiGXqcSyTQiztNkBiB1eirUgGcFb6x9EiAV4w5DdG4JuJpnVvjedyfpjEX7QRPDn2q8",
  "key43": "2Y2rHTrbXQif1VQgWoQx4a7EUFPzqqTkV17eFib2ZTx6xFEVSTFCYn9uM8fd6M2Zaz3JLvmda4xLkXJoscdgFuX7",
  "key44": "aKi7Wkwd46CRjWXNet3BmtDZws7mUdoKibmY5i8wePXq5CyKLu7mcM1M3EShCDV2qTHKhVVa7WfEF16bkug67js",
  "key45": "3xZFgxw6bQzEVtVEAn74hwTsnDkyL6sx8UatrfbgWRxzBmcTiLqvg8gXUQyVUKtV2Kpn7T38yrFmwWP14cR2wWsb",
  "key46": "v5WbtemnzTtdbomcqoLuS1TTxEgfz6CpeuR5bu8awx1dWNxavLZSbibymNeean5bNw9zaq2jN4qMCXNA5Exfgv5"
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
