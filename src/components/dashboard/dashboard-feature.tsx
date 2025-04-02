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
    "2pPpZXrCoMwSitJfWcBynHM8d5BFVLzU1d2zY1aNn3jEKAZFEH49mB9oxfPXRttS6SdsyJ59nNmRzuXna4KnnH4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrHdrpRgaqRqNPMj24d3t4N5Z5jAXf6jV3Z2yd47Wu67YpVdL5HfYNoU72LkF1vGtdCfsPQJzy6cM6kMM7Dj4a4",
  "key1": "2jtML3WBid33GZoiwmGAj7roeis1UC7tC15rqx1rNuomYFiAWh9wFEU544x9NTPxic6LipVbemWkLn9cmjZkKx2Y",
  "key2": "3LXNcYRzM3a1GjW5zRaCdrMTuMRKJENd1BoVonb2D3xF8sUAAYkypRamnG3akv88PKiJxxWBuWRFbryhHwi4tJJE",
  "key3": "22Uek4XGd3FAVFpBXvgWBEHgWdXaHenbmw19qyZcvd2aXNZHhrNNueVMa9P6QWeHFEhQbfhuEFR1cWVcRcTFJjiJ",
  "key4": "4rH1hTtPaNd43c5GAYHorbwzXXPLqFdrwj3cmdn9cHGRktryamroXdf1KFuvUkSrRpy3vTJ2dqXSTtsZxFQfD6UB",
  "key5": "3CJyoLKesoutHMjz5bqXTFUkotoP6CZ89ymUW1XYvR15qcJKnfwX3VSqVBmPWvkCEXF2ixTAohEPGWuw5ayaBn9u",
  "key6": "2WDQfnVLvqVh6xMzz7QShD2nhxxBdN5kNEQTYht2DCjAfqhzwhRhwyJDeUHafT93BmeywKtvVoLcvhtfEuaaEKgk",
  "key7": "2hr8QPo4shhi4aQEnfN5LmuYE6Zn3tdLSQTzsGRQVhXeuq7ttyRoiHD2KEkzakLcfxdPkStmU4n2wLiXEQAi2Psm",
  "key8": "4eaFX1x1BKyEThULGviBC246d2D1xivK5NmMAfkutgWcWJqtSbGbE3bgUM8P8EXpzp1vtCCGDqgQbsCe5kTWEG48",
  "key9": "5YuK7cCnuttT7rqYzznHLc1sXxLNTwkVxEEMSTXaDH5fqhrvb32JxQGqwB66LbererJ2FFTkbDRLDZ9f4BAPE7jD",
  "key10": "HrHqDesUSitd2S4rC2aADRMpN3UepYpcJ9t74jLdRKK3sSLoGo9p5G12azVtNZt7kBdkou6geCdFKEjc3iaqf5M",
  "key11": "wxuyHCHzq3GgxVTs237F1BwLyKkcq5N6Adw4cR9n5U1hchQwFbjPnbkKZkKsEo26ogSzoZFKn9xDrFk7DHJhuAr",
  "key12": "3ghAuVZsCAV2zNSmqTCdmmb8oZyMHHh77K9t8TxPbNQkSfzfu9qPyJoZ7kWz6UmLdook9xzdEEmBZeVZzXWEtgNv",
  "key13": "2x9JWYMQvhi5KCmmDEUbhBz7zJ6vnBeWonG4ELqpiLDnDUW1PtcgorEMDwSSHcGipQhZMLd1WqLGzj5uE6gKSaX1",
  "key14": "4tkuLZWAGCNskefuvrL6hYrTZjMW1jhgbrtsL2U1fPr9jrBts2AYdBUZiVqbd2tsLTTqWk2Gn9vdKiZiGjxV8Ybw",
  "key15": "1FBx12HxV3qACXaHbyZ76GG3wRzQb98KdyNZXyNeCUfnCX2n13nUpq8puQFCNgm5ugKV6qu38s2keerEYEsGm4W",
  "key16": "eMpRpbjxborwN1mXFku91i3ocmNBc3XvrdSgAzw9cjwadzFhfGwMqmU7MvuMFvQJ6Le5otfu3CVrEKQquDrXEuS",
  "key17": "2uMxQ17vcGefaudsDJgRJNGDiXH2Ehj19epUNN7wUdUAWdR1G1wMsvcBPWtZbBv66fHa6yjyWr5sHSFB52dJYi9R",
  "key18": "GQ34nxLQ7BobXP3X8Lro24AD9uioUKimWmqPfEmBDHbi7s7NEyh79ov8SyCnYQ54jhjthD1qfdo4U3gRvXQ4M4P",
  "key19": "4xokkXKNELQXaPavtA8Bih3qqwBJ63tEd12avEduQmQ8zH9Rkneqz4bDqCXc9vgeY1oYoj8kivw2Sv1K6TPDDQwC",
  "key20": "b99xjaxagCjwLXN58nE5AfxhqMFXf4GXeGpYjAmSdmnZFNGbH14LVmgRc4ZjbHojpGV2knA5SEnExooD4aWEBsX",
  "key21": "4gvxQLAd14ubuAb4jGAiECCb1v6HGxvfppTEJyocVpUph42XMYk6MQSytWhE5QVyDng5rp6b4MWhvDCGE7j49PQo",
  "key22": "jQPZNtjb98DCGpafEPAJrpeUYkTZD8ogqa5b2BFtZiYgiUfGR3r3cZRYD5kmVjYyvtNnXcgYwbNjstT7aifJD1y",
  "key23": "4uvjfUofSEsQAFbV1oQ8j63r49YJNDznHrfMgzJobfbXqJvPj1vZed8ZzvQMfPCFtJYTe4BzJP7S1DWfqtnnwPrC",
  "key24": "4BZ7Vzv3truGRvAR6YAv2fhUyjBFJR3F2cD7ULxB3gY38NBVbwRrdiYA52umpmAeMjKDHgB89jwJEuQhHY4aCzbj",
  "key25": "2B6kH55Aybfmn47g4WknM88RAmMzXUfkjf5r5V7otVKftopf7S1Gw8Gxn3GrLLEqs2n1BhiSXUDxqMnXkiWpNjtA",
  "key26": "2uKkYoTYPehfJoDBPNhx7B9W72niLgUvLYrGzqiTvHWskiavhw9M7wZjZyFjvVTrZ3v2JbPYCfTMsEWaL8d3FjVg",
  "key27": "5aSGtBiWt5TbuxCdaRn7iDCbkMhQ4PQQ5MyXqPDdu5CTeLUX9f2vrXu3KqfNg1Z9vMgEUqjxoABF4kXKkHWR3h5q",
  "key28": "4dyXVcGJD3xbz4FTLazCPpy6kYcv9q4JowzBPZAXbN63UKb4EaNEt8CRKc123L7RDXqbQme5TrWyXwUc2F7qAben",
  "key29": "3idkTvb8BiYW1ErNpzXJU5GY5pbyWuH4q4dd22fWgohjN8S4Ck1YHo59GD9dHYJUXyue6LPQfxXCKRpp1yT3yT3S",
  "key30": "4VHqVYpAdnMaFG2PE1tDAuzZZqHw5hDwVqvb2tTDEQfdJCUoj8PSDMXa658Fv68fsAN7tv82DDQhwkRH9K2kE153",
  "key31": "2FMjQjTykVFZT6RckF3kMKhY9iYqn8oku8kGnDpHYNNDXKXdYgn6FTJpK3fzarFQexnKZ1wRSq72jMfjMoHQmDEJ",
  "key32": "2TvMTU8qrZVJzMfwnpwn1N58dkUVNeAQFGG4TiE7DB54GFnEnofXKwErRXjjdrv32FqHWrApEADd6hMofK1V3DrL",
  "key33": "kxGoEVmwWNPyikwaN14cNAXJBvWgMg3K8mAzh2L3hELUtA3qQH6YGcF2FHQgX3T6AcLxjw1iGp92UbrGCwj2aYM",
  "key34": "5NXTk1WQY9U3vVBHS4RGmZi6mWz7yETMMBXkqU9nkB83goSRTzSpDxey2VFeyodEjJfLjPnJqTCrHfoRZsP6Yrdr",
  "key35": "3BhBTWcjap1kxiUC9v3pBbxFaJZnPhAMBe6SEY7wBpv6NDmHBTXVuYmowG33RWzCWSCp11JvpkMNb9GSKoS3kos9",
  "key36": "5xTyKPnB34ganJDXFRRyrc1utLAXUxDB8vSxrX9anfUnp4FqPqpEx6DSuSDeqecXtxEvC4wkZT1n4PN2h6rbJT1a",
  "key37": "3cG4vyoNHPkExU7Nb9nXsgyAejb2KorNheEnE8BCdxyCioJrLmGkJbhuChE9n75P3SjNFhjGjtDDGMJrBMYmAU8V",
  "key38": "bXsoB28jM6gsAocWmnT3scw2kdGMGnMv6AR6dqa5Z1MvNR4nRFDbw7SwQDps2ccdXeR4HzyLVStcKnDkEnizT3V"
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
