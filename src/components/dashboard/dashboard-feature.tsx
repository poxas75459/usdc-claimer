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
    "5yAM27BxMxamqgDBmZozAGZFXpDFFgr3C3q53v2mWoYxopzMzG3yCzE51CnqcVE9XrTdvVk2hUnDLw5rPM4cYQUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNtWNq2mDRv49DmsVAfR6Xi2czH4fxhpNW4PEUYCGjuP7MRgfE63hGTaG5uiiJpbzyHWWvzd3CwH4P5GyqjRR95",
  "key1": "2WKGJihhgLbgpGQ34UwctfK9GzJKs5qrwcnGXAd4dZ4wX3T8a7NJNRfPM19Nq9e6P3yYhd8Er9gFPBg8R8fS55kC",
  "key2": "4jQeAgvraqFULvgUcg4dRwHCB3WjJQuEFj57bUMuzqnAVWVQxqi8ux2GikFAHmbvU1kUCDTXK8zS3udjyTEr9eMF",
  "key3": "3QARSh4kfHAdfZtdtE19D34qzQYriZDGNptvcxVWJwUUjHNoGQFyX9QYAZESW2J8qioR4aBSGQEWt8ULmxgEsGhz",
  "key4": "38WZ528TYdBuKrrsCFoJCjgsioJmdWosn2wAWrgALhoAMWi5SM7ynxPQPEoarGQwpaRWtTfNXNTackfwUizvXgXo",
  "key5": "5LqV5w4noLXkvAhQvKm3UhPcuapRXiqMK9z64p53EeHfpLyDCtk4Rgck5HmwFUHfZCtWayaNPjmgpn1BL4ioE77Z",
  "key6": "5wcvEMZmVx3u15vu8BUu635y9rTuz1nHCw8f6VTndAvp9kJxjARVurPUn4fFhn2gEwXt9SrypsepTP2HiWJB9iYz",
  "key7": "mVGHz6f7VNcgBWuFW3RTBcAkbm7ZLScJdz2ZWjzuy14NKPPQVh41nAhUjnvzzr845EHbXgC2GRbppk8yCex5E8k",
  "key8": "F9rjva7ZAfX2dC8fLJCRJi4iV2ri4xPaf7q8hjhTU9usFKP7G2eb1KvqSyk65GYEoYBAKdhNA4ja3c3V6GwReoA",
  "key9": "2YfBziaew3GQg13ku3vJNKzFz2yxhd8Knvpq5kFiD4XDC362PEradH1SaFXycTH4v8yMTmkb2JfspsupF73pyKvD",
  "key10": "2tmQawCxk23x8uUtoxD1RwJPnA2vDfUAqeFVMYEiomXhzzmbjkSv4uB1Fh2m4dn9g4RG6afUSpULn6T95Q2UxaxU",
  "key11": "5AoCGgPnV6qgkk5b1rMi1jexQbyBw6hcuego9xvEJrk7ZR9PEUBzKJ4b6ACNcrFmGjnyLd9jgUeMh71E6BKWfq8D",
  "key12": "24axhJaaPSnJwJyMNQv4YEoEWUU3YrgXQeP9U8yQcA8c3B2etG7GEpS2cy6QGqMGd4BfyG4Ydjc1DsRifmdzi8oq",
  "key13": "2dr2vnXiSpGUY1C3kgVXzF9BtGQ3Dx2wKPWA3oE1vCHM6ZbfSAxqWfR5uS9wTCiSYHqP85yk1rcuKQ857ZR2nBLs",
  "key14": "1VBiy7xewYPnhduX1F5HGmsC6cDbGEtA6tr6oUYouM2ySDTpQ6zHL5NJxFnj1ggk4qrf8FuZ7LzmQbuGS5ysnb6",
  "key15": "4RkLfbQu2VAy7snmVLgnq7z5ajzmHKkTEuAnFH7yBxQRb99xejA5dYaZviusJkPehLn4e4foATzxwAVjMCJt8PnS",
  "key16": "2zGFyeFU5ca2eVbakjnDWShjgVBmJ7ejRN13FF7Lpb1qCy28LbwkNVKwGZ6dydeK5k1Nh3XUtNJsff3T3aAfQZPR",
  "key17": "5PtSLoR1XabASkqBmafYGxdxAwSMjwa68kVkCnDMCkFjPV2WPwz3hR87xDr8f8H35XLsdcxb7nM4ojsm3vSoXNC9",
  "key18": "3NbJmfM6ZiUPX5WMou1mongPNcUBJinixZ7eTBTB5F1sRLmGxekSqYUn4MSGoe9n9wtVPufDzRo5Fz5yhBEwiynr",
  "key19": "BxfhURgwZsa3n4zpcEiqbzfmdRcb7XfzMpEJyekb9gEH7ce5WPTJDpUQDEnKPBxUAuSEzcJod8L4sXjinEGrfM4",
  "key20": "3bcKsj4AouU2AuszhXJvJyE6AQuZEsLMDEucgvVd2XPdJkU27XbY6r7dskvKjgGniNA5hgKHzduFugaszkP8nAwj",
  "key21": "4ddEf4wBCL2pnoLRH1ACf6j2CCWF5EcQRzQGPM3RPzfn9Xue8JVtxKPbYCUw71a4Mt3VjbGnrg32puwRCcMaRbmn",
  "key22": "2oZB1aoUrNw2JnaJDztGUMjDcu2YAuEddQj6FbyHwy5zsTJoaAcbrciBqYtSv4oVaoekgedWR4s6r8ohswLD6ibT",
  "key23": "5A8XTFgepptyrKeJ7qitejyqK4BpigRkr7DrFutb6WPriikPGQ6JYUEiCD7nVZ8qrXaRfTcZXty6MddoYAsN613u",
  "key24": "64vwU7Ndjyfop1Pwymuip4TxRyvb9dxX7nzyNy6Lj7Y63XZp9jraiX3YGXFsW7sRPmQzSXCSiJ5ro2Gw8VSy7ZBY",
  "key25": "4Zwa9DfiRxdMAQ4Lq9vJnDFX3KnQXgaYizopvba9k5wbsK2VDCXc5MqFfuZ8aYErkQCyGt7eajLSxF8uuSkBCRua",
  "key26": "DkLkauV6Tr7nUjbJ9ePgtzD9StwYRLRP72RnUybmTJFDGkam3rGSDMxAYAdoEVgkrVLhDYBguYvtKsCLUA5nkGp",
  "key27": "Mgq9P5n96Y5TtyBuWcK1bwLXWAAfE3bauwpupr9jZ8DedAY1mgVSXuNmrKDTGeRTFqiDgoecvLzdbfnxWvgiF5n",
  "key28": "5TwcFXTB1k3bT7K9Pfkxroj6YsC6DwejwsvTHvqPjubQoXNzMo19t3UYp1fBoHDDqLMoZXqHHwhd4S3b2hR9rRgK",
  "key29": "2QYsDfkbYA6cobcNWQL6PrgzMa8obZvR8ixmNB1GUL89Au2W53gK1YsSsgztBtY2kqc4bRAdncUbGZvz8ZFJ9rdN",
  "key30": "5P6AHhrmFMXsnoLXr1Kkw3QQ9oB3yrKfofxugUmxi3GaoPeAnMYDyYP4Y11UB1ma7jYAy9sRyiyTKENK2E6Jpu9n",
  "key31": "XpjYkHiNbRtDhnfd7KUpVgct8CkUektb2Zi5LoKdgPiGWGdCtLtKAR9HYfnLQgpYPQrZT4UJ7cMacV8GP4rgcz5",
  "key32": "3oAES4iMKfmUUspEdBk34kdXH7T8CzwToHRB8WyaT5m5qheZqhKnKLVgek4SGcjTVLqxpU8TBGRaQ3BRJLVnsj1A",
  "key33": "4uQoza7PSYcAJNJfmtKLkQ5yASVBc6uEoeWkeybsaVRXvo4kriMpgN9xK2DfsTywNASoK1iXwoWHEJaV9DxebrxE",
  "key34": "4S3CtGZkobzH9G4yDweqgVyhDAkJr5gekiNX81zzLmaB87HMb5gStaS5BUEAvTS3QzVUgimVj1E1tuhc9pKCfXRK",
  "key35": "2RpXAwQ7UQB7F3Dp1LGizgumYaE9HqPMZ7vhXZz1LdUax2Hz6xhRh9w7ndV8rx2JvYmbfkRKnf2wVbw2LZQmGaPV",
  "key36": "XFjZQKkSjs5aUg8UN7i1DzXzXfPcZg2gFU8CmPUCvjK85LRDHZjnsWQt46ZHDrsd7z94DiXH42sfVDwFhA1jet9"
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
