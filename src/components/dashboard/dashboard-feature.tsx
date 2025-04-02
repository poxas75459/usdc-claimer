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
    "DFK5nojSk3maa6L9krMwtAaCcf3eHwGsXYuJfCw3VYZnYQhSeKztF3hzawnzAzm2YyRA77JPsD3L21fBvuE9pvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxUkQ6cNWLK6aMFmqBSXyh3DTeCYYQ3jRW2ztXww5KEwKMnCE4oYv8b66LgxjnyLv9siHoazu7hcrxa9FLqFnCT",
  "key1": "2CrVTvFcXmSgw4CZvcCL5ya3gKtL8YaeP45qTfhCzSFpM4GTmjRfb2m3V9LHomAmRP9tPCytpaKDzntGsgZ7GAzP",
  "key2": "4wavRiiwx67QC3k78qt3QPiHeuQ4yTEUZ79bvP6zSLy1GDvpjuitwr2Terg6uWwqMN7YsQ4J8RcmXUvCuQ8u5rJD",
  "key3": "3etJTLh5VKhB5S66oQSmpRKBHQgv8wpJEHCRdBeZCMDRNAoNMxjnT1F97mhCr2RR2DMvZS447oXoQyFzEGKbcG2g",
  "key4": "8tKYCq1CDyUFWBKREWw9r1zUawmSccUZz35SyCno5ya7oFojJm1ThGgqjwJ5r8DcDEcd9kmqeoCWghzjTicjKNA",
  "key5": "4ygdiS7rovQ1q7TB1q7zM9rrkGNCgHQ9NQ94eS9EbPWTyG8JRDK2KGURwVckCuSWjospTwHtQW6KdfH72Jv1amLk",
  "key6": "5Pr7NSt9x3dhTeJzPuY4mYk9Jg9s6w1UqfZfDjp1UUeJP3cDuGbgvFs6H2Xx7v4mJXLy8WvrJGJRbbPs8MrkH4xu",
  "key7": "4VDsHkA8A15DfeVHqWoWd1i55WoPQbj9ckbbG6eD12XdzVciuVpbPcdvk8VFp9SmuBMD1eiCzYPeHR6x28QgVipF",
  "key8": "yrKaATT5YUegzL7aE5o8UYRsA94UtETKq4EsNLg4Moc9BJJ8n77X91g3SFb89h3A3AaAtM2LkSVjzZ6XpTpEGLX",
  "key9": "5hW3uBFhYEyGzjmnoeJwcbZ7jZk7K7vdzpZR9q98uAaD9WCuWKj1M5NbKG6TaYFqzsJ9zp2kx2eeoDrqhSENNzU3",
  "key10": "FfKEXzkrBXTF6sGSdH3G6c9Saj9DshAPkgVkT9g1LRqs1zwG6RcrSbBvHp7hHw9V52j3A1mSNcrzNJ7umsfYT4S",
  "key11": "2Qc3ajVV9c8DH2nyGZHcscRPSxRxDMtVZje7PFhqSDqdE7UJYkK4AjWAaZ41csuTVvgTywqeP2dZkDQXZYNWobyj",
  "key12": "5nBUjwupg5ggsBiU7D1TvuT2DYz9Ncm58bvjknn4GA84ZVZW7o9vyZEb9g3x1d6TpxCRMdKipBfy5vqshPpNHSar",
  "key13": "3qLN3Ym4PyiHQvruiGqqBeRJoDuPUWKvxUXXVtWcyiRTpQybPix4mE3BWbkzBLPh4LuZ6su2vpAhb1pUYyNJPvHU",
  "key14": "2QNn4yH4S6KQGP5714gabA2cAbNre9xff672iH6aqaBLEMPLt9m8GZogwRzo5UL8yeDX6ymgmdhmMYQpxJvnyJUP",
  "key15": "4bVScrCtLoYwkPsUht5ivNEKFvwRcLNyHgedfagtJRDt7YoBzhS66yAAQsb2wEQrYWLzrjUEWdNwNnWDDSjzXBU5",
  "key16": "4qBw6Q4NBs9CRk2HCzLo21YpPGG1jXcKN2KTRy41yD8kJnMnTXe9srQCpjZoh9NiRbcea4hxy3AzXSKQSH9kJHJ9",
  "key17": "4VRibPB7VQkqQbsiiDFKohTPCG3R2tzNNVSAxgnMQRU8atJunzNZ1nYDSYubLLkH36kc7HEx6zyp1vYmM6FAQZPs",
  "key18": "34XruvrVtJzrTTpsak2yjXxWryBzgGq2uBKbJtEnGSxZJ17B8RDxhJYCCc9cTGgX3V4Eos3N91qHHuoWgqCr4K13",
  "key19": "zUmj3NKwzQbsZi3hxscCquxo1nRqgHwFiE1YGdbGAKmRHDo5Rcsw1B3LYqVuZRvfopxWifH8Ww3rfJSPhqXAMY5",
  "key20": "3QvbKduHXa8sDiG5ekTdBMdop832nAk8xWdRuyYAbs8vXgUDMnoXAPv5ssaPiog25U3JuoRwkdUmHJbqAfTD9MqY",
  "key21": "4nWAg6oTTQGZULF3jdYdnmFWtkKRW6q2QRSU77n2yoAzL9W2PerwPRN8dSDTqznukZZjZ8Zn5u7zdLWsEbXboALB",
  "key22": "2A7KWEhGrDxgyBrcRpmTTeHtMp5Cv79EZAmFR6zVD8yMhGMMJcW9JCzPobgPHXUDTaFwofQfQhqgSXRNyYUJCf9U",
  "key23": "2aberPhrV1ubFpsN4oyPZ2LnLGXQZiNFh8GCkkZaoCkKARDEKQVtS5NAg5hcjMrZhGvrBkvZQbKg4PPsNbU8ewhm",
  "key24": "3trSPCdXxsuPu6fTMn6Xw46AEXyyPv3UqMD3PAWTSXqCdXPX1fJXNQz6qjg2Cy5rpgMKE8rQztjuvMpMp1rLGRBG",
  "key25": "4GHsboXvkY6y8PqymN4dy2Zjg5v2T3yjJVMtu1KEawCsx1pgouQn9As64vZFfzSxCgaVugHfGPY1yfSQ8qoqm83s",
  "key26": "3Mcs5jPbZYTzQiNtQsxBj7kd9ozeAedP6FRbVdsGcNu851HqDwUVqvP79sbAviHHwiJyPXNHrAAE2SMiNwWitF1H",
  "key27": "4r9X8FmZ7Husq4XiJ6Ja3gvYVRjMjxqoHyMgR1VUhBL5gcNGQyCw8bzKnBaVP9qnVZ1RpeJnHiSfjeGxC79UQ88f",
  "key28": "24vznUy4WJ6bJhDc8ZRSPFAvfMrXaL2beeYPNsQ88UzMcGLqrNt8aBkijMuCtjcAo5WYTiJ8M8KW5VezVPzeZmw8",
  "key29": "55MFJsDzsZH8CTVPVYzL3vraG7hNDGrKuYwPP3H2xDd2n46RSVUEJdS1jCR7C7pMj1hZ3pjzz5GYbnQMwEada9R5",
  "key30": "2rj9FSWdqRjF6EPkYUT4L4x92ze8SWp1vaoYmkkVkewNXT7fmawnTntE5zGgPpMWwvY3ZmtQtbjBDQR3YJzZTKTz",
  "key31": "3QWq4dT4qA9akxrXUYGfetxDEA9L7jKD8kWHAPyFbZ3C1fPtFbssyDC3VYyrk62aB9fd7pZCftBZXWD3MMbfoHqM",
  "key32": "3BPmzTUKy9V44wnMmwdLZfrRoXEGqzjuTJKrXf6Xy7EUBVvAqJApCMJ8o2Trk7aG46R5WBkqF4fhvWJiTQZU49pg",
  "key33": "4Ram9JJiftsjdmkKoSArFPPEZF3JojtZ147Zg7waYJ5w7XgLuGfDmjmrLkbxr1FN5izM4kLEvCuMgFpyhpZVXdJh",
  "key34": "dUAPnAezFpPNh1nf56m1yTWSMGwnxXsEodmxUHJG4kHQG9HmtcTCGt4CTwBu9NuFvttXDkBCN7nyiZofighWqQ5",
  "key35": "R9X3qasAxAHd5mM3a8VDB3vJgK1PSDvm6nbwE5mWbioUrxXr74mmTCTzB8MaKWvBuvgiQ2mGydGpcYY2KEqfW4k",
  "key36": "5gxy6w2TDnkXxtNpFMq9S1nSdxYA3h3yNvXGUYe7zhZnxPkjux5mL4s7JPmeqYvyFibiUnRwBqqKZ1m41NZHBdya",
  "key37": "vge2zJQEymmr9haoPT2uDWvSxpSDdCwy8x5XUb9QSFzQdn6ue3ai4fy8hQd7mpEvsSyx3NVokYJKSs9wCeyyfXD",
  "key38": "uTPrJ9WmQR1d6GfdXUMuktfkLuS1gcBo8USzUMTEh83F5iQuoEmpB8XjEJhsJj8cDRWEGwUrcTczyAWd4fzdtBC",
  "key39": "4SW1k3CRL8mEGRGGKHsfUhnQTsLfjBXAEUpYJJxPj3RSFu1ueSs3tAgrRZMfH2HNnp141aagRnCPmubQVKQmgsBU",
  "key40": "2Xe4aSADLppXGeXdsu691zFNzxg8kY7AjKv1aziUxwXLZ1FBLeYSPjTipQPLmyrTNwNZ5vaZhDunBfH5nkYUCm5s",
  "key41": "5EkzB7qRjeupoCdQPQX2M9obC9Sp52x4XcaNSDrC9nKAmVovcXuyvRfZST5FyJBzqVb5wKpJx3PD4gaQKAKkEbxF",
  "key42": "2aLAq5ZxtsbT3SMi76SyuhvBc6oXpedEaaLzmK5VzpdrVAmhXyJtc6azdnoBWG8nn1q7sszB3a2pGEz57YzwRLYA",
  "key43": "3yLYgi8aGeyjusvAzm4nuGeab7pM925BU4n7vUhai3neFvYxJS2phBWUbwrrKccSBLt5GNtEZ14EixxUBdShoWqJ",
  "key44": "2Ur9ktPBmzvDnapvvRd5ScbQjgFqi4A6W6cAc9dYMWKGP493honABD3TYPzT54mUZNugrQpswjazugPhCA9pvMhD",
  "key45": "4HhyBpgWJZTUS9xZg8aDtdHtMx83NaFSmDvt3pyUBS9M14CDf6r4EarEVnJxa5ignmEMFRfKMmoyXURyQ22kqvif"
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
