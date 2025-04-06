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
    "5A11EA9BD7yScoUyYVZUKCuTvFacCbM6Yd2V8oBkuhD3tw2CKgZWPCsxQ6cbwmg4W482M3bNrBBDP5YxvedL3tNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAZ29nXPAFzmmp4KsKbyEwb2qcnLvCQWW7rvsYfkmprksZxJRRxWALM5z3y9Jnqu8xH4cU612XBUszQoYeUT1vy",
  "key1": "4pA8kBRrpY1WC8Bf2jYEmg9Po52NjQFt6QX1bwDxndq5WT6BNj8h3gWKBm8f58DnA3jxTeQiBjYZJo4G3GXLH94B",
  "key2": "5s4ewy6DFEbD94cctQMZavhnSq4JWCqYNTHoYs4NQKJVgF9zVDv8VEnC62P27QRUP4rHpV3gW92vai3ry2aeUgbV",
  "key3": "3b7wmu7PEsUn4B1h6wqeYYvs6TMCmGcVTSxSFKGCLsX5r7HGsU6KWzzs9ZCHQCJpf6ocF7CUkUfSz4BdTzyitzpp",
  "key4": "3YKCpqd35t74cownYq8GYGb2zvz9eW4yRuYhLgFnfW9XYmSbFvb1sNh8JWqhRjQCURiz5yvdTvJMTYMBpBP57hHx",
  "key5": "v3FWTLRT9Le87xjdQQNtBuWVeRq3NKefu69TazJGQKn5E5Y7nZcGi2DqW2nvTEa3CALqgwP1pnXeK7bgRmmGueb",
  "key6": "5SNS1GqvPmG1u6oxFuLpcvu7LBZE4SpdKc4ZVDEpock1hp49GbBRTTdcyzzbXkaFQ4k3FmnzVkn118b7eMwTk3hc",
  "key7": "4eRUPvxswpTSoeE89LZjzm8QqNfJsbTXEAk8bhhmdHXUvY3PXtW9ZkhPEnjrKmGpCDefU2kP58toeQGHXRoWi3VA",
  "key8": "4mhj2JqNBTcv8GHrdu1feMLkvUkcLhiE8q15NZxiBD9DvYMKob1zYZG4Een4ZnznLJkXK8EqAPo1MsZAHnzmaMd6",
  "key9": "3M4U4DziwDpWk6YaMBKf1QTiN1678e1M3n3Axvs5aS22hmYoDTqrZtcMV17CpuNAHmxZy5i3i6LXB4bEEKc5uwm",
  "key10": "31E46sJvA9dBA8qvVVmKqb9FR2a3dQE3v2KX2a4QENrJwKVDKtXDpsonXMzrZUP7sfauxRJNDXrs34gboPej2kRf",
  "key11": "3uxCnuy3s9VsfoXwyBiHyKPHWTrc3EnQABHbkEfPYwenwvBmknp3puY4V6sf74pSVa72BvLKLU3PPrGyvR4mdyux",
  "key12": "3eP6Yj2DD1ZaEKp92C2RWzQ8MsysYSd6iSdxnWCrAF8pZq47aHJWTgaaNGZpD7xNkcRUxN8CDFXc81C6b971vbfW",
  "key13": "2Hd1rG5wcEeP4w41xyKERMMBbeF272tTaCjUXp1n5dskjzXxsyFdLrPZNkC4sVbgqGaESphHtjqYAyPWgWbN1CBV",
  "key14": "5XkYuvMmYWFuyDBS5sqLKk2kmZJUUaTcke1cAb7SkXxLmrXcc5kNzcjvj68WCEkTvsRaPvUrUfkRWLqWr5b13oCZ",
  "key15": "3UYPkNQLDWtezJsFG6nRkw6BvvqhoiMR8QCF5ScGkxrjJbnbMefAfPY5nEr7UWnBAnnNSp4fQnxGuwmMcFvLJioV",
  "key16": "3C6vBieiwH4bb6L4ue1zyH3aT6PWVbYLibSzN2f8wSTioobMnH9yVzUB9Y4GteU8CaU7ZrcaYpTuibva1ds4mC48",
  "key17": "5YPWhYKAnAhdigHt6vwSLqyRooRsurCJ461VbAHZgFJ86N4fvfi5orA1EP51Wgf2F9fghkARoS5mwS2pzDwJsR3t",
  "key18": "5PCqhyY2geq2WVbC68TWVu7MnwEAZ1ox6uKT4b9ebDLSeu6WTcGdLVxnXpYaP6ViALTLXwcWvMYcLpRMVAKUYeUC",
  "key19": "5Sqwxh5F5TVRW7RDMDPV347DGGA3w4yG1zVcdCgN6LSfFB8darA2xegeKfPsnxcdvnfcwRuQx46Ju2Fi7zL4vKG3",
  "key20": "YtvrYse7ahMYuLxsP1Nfg4AaXfvk4o1WFPj2xtoDD3UDzxTAYA4PVFA6zkbmWDLFynWN4L6DYDo3nz1xLMJrmNU",
  "key21": "2Z7ezeb8wSpw6BZKehPp4PJ8RxzbNdJQLS6vHvmyw6zbuJWw83Ay5tR6F2oZ96io3T63heG7if8K91M5y1Yem5N2",
  "key22": "5os2NmSs6G3y6ysgT1GwKe3uwAPnsPUDsjWatACCGkX7yPP7LqrmEMUZSFUG7a7XNvNaXbYDZN8uXdavx9q3HnJd",
  "key23": "5pmCwt7TKLknCQZwZhBXQRQ71XeVDP1h1EBLiWJzBLuMxDuLPN49Jq8DCfBPmfB25zgHVPiXjwG3G1iv2DiGBAg2",
  "key24": "AUeWEE7mCSWfL8cbAAL32x5EGLEoR5wxsRGjDSskiEHboNAkL477GpFRCSwKE6xShTRaXDACjnGtmHU6AjbPsZJ",
  "key25": "5t4gptq4BG5BbjhrztBVHcFvtQnHy3rHo6jPaG1n3wdhCzir5Nm1kzNPpcdFh939Wo7qi45GX4XnBwBG5zaehB94",
  "key26": "iQfLnKcW11VNd6hdC4j4QCekzpH7ZgefmCC4veLA8t8i4ASnZpGXjNNxUPA3SUSAgLAU7LJemUAMkVh7rpfHyr7",
  "key27": "fPUzLJHr6Udn5ZSGJjjNsHEMAfq1hrWsdBZWAZiMsbw88AeVaXSEw8w3EA34KQusZM8TpPiv4tQWaahTZbV2sy7",
  "key28": "3o8rqqBXNoqWQcNE9UH4Ce58uMH9BjB7Nu2vAHLcCTv8bjf4YFpE9wGEfp7mpzV5pYPq6S1PxkfxmpUANpkiEueL"
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
