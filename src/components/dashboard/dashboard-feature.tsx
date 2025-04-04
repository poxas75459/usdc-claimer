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
    "2JNhs7SQHGo9q5njk3Tgg33X28GLMmqWVPvFxne7YwAQauyaTEvkVp7T6pqxCDgd7Hso8Dk6MPdUhikiYEG7TbAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpSrv4JTTxQvmP72zUbVoVJbTkXeU18U1eaniozqkZTfRNxcyLEepmeS8TZAG76TgoetFuU7n5de38bVSw8CVYP",
  "key1": "5WaKRcU3tJx8RRHmpaj2xwPykb7FeWCnkc4hX3yj5fusYZJUMt7d6xbTsvicyfCLKEZPCHJJ7HimS8d8AcBx3vji",
  "key2": "4oV4RydE5wmXG3a7qpwHcSwxqbAwtRXQS3Saunwyei6HB6G14VcY1J3A9zFv5o4GRuBsRf7o3fbQLr6m2BuwFVz6",
  "key3": "5XYH8LoZ55c3RNWik2Ehc78MR7jSbKvpJwbBYxcRfauqqyoP3dUHyjv7g6omxekSJE5kMLgSX1jDrNqgEHTU244x",
  "key4": "4GtKG1ScXZUCADx9NzFxVqYqkhdfojmdFLkzUp6f6uYh83KNnomzToDyK6KQEAai77Myb9yjqF6PCEYgCUNmiHJB",
  "key5": "5kLD7nQPAniNQRsAGRNhDvVp5FPR6zp5bddd66ELuGwjQGtRfdtNcTpJHu6W3HEBwEPC39Ngu1ZAeWrPXw5wqLFa",
  "key6": "46Z4Js4iNe4YJC9e73TaE5nNLqGCN8XiC4ZP2r3wkpber2uFiTMB2atJ8k361zh8NNxKkeKXf3EGJqxi5ctmuZVC",
  "key7": "299MW2EeXhCVUNQPunj5FfNWAW76n56KKywm46Ld6k6fLP4wkZYVVb9sRBNqg4CzrRg7XvSvfaisRDuyacc4q3Kr",
  "key8": "3cjkB9sfQWaYdXN66AM382VZggSmHDii1TTXY5TqYVTDEnggQ951zXZfqegsAdYYKHufTXK3CA5DneSq4PpGdAJW",
  "key9": "7mCygzfND4vBerJywqjyKxToFLeYDvYyfdof7CTcxLJj1cvRCHirGFkyrs7DM3iCjqwtoWbaD1xxJLG4D4hvgUP",
  "key10": "5RMtXUyAoynj9GKhmJ9Wb3GLC4viSjKxw7o4Yf83p8iYJBXf4wv2JoA19Xw9vKYboM9wb1ZtwjQn63BFNQebEi63",
  "key11": "Ryzun2Z6Tew7vPcCkZtiwCJLQ77rUYv6xsHBuP3STD5sqHa8t1Y7euoKhprX6yLcAgTtgqigdcBaVzZpgSKX1Vn",
  "key12": "4A3RH57QeT6jm6JETHQeZ65HGUvqfAV2fazG26YMC9uixFxYjPtPSreM9FesSVJDgRC3f1MLYrrznW8tb1FKhsiw",
  "key13": "HJQdhc5cjw8FTEaMNVugeRNgs2xwYxVqie2qAZEu1BMWUzUcQvoUkiLGdWW5suuMcu4XLw4hbpd2PgJ4e8yETWR",
  "key14": "4siqibsoVw5P923TT2twR2Gai4qAQGDSxg7za3tR2BH1pH11uhLYUnXRj8r2b9r5hwKEuih2uptomNCxgQtjcLrK",
  "key15": "MFNTHjTMzWsLV2sW6UgmeSN2XvP2MDQcaUH6GeLhhvMAJnZzngsHEPryaVNDgXhQWfFbjVrWvzRXF8gd77Q7VZQ",
  "key16": "5fR2pRGHUFuDJvc1HiXekqj8XPyMaqw3D3sUhtSQKv1EhxY9VyKCVUw9YKzdh1nLCThwTjNzrr34TFVDz8imTkQT",
  "key17": "qLg7yXVu2Wgbpnkv7CnWZJrNx4AFmKC5GaLjV8jMBdSkStmy2UNRvfLFnqXCi54TfsMLduCJ4iYJQCg9pS5jHpA",
  "key18": "4JuhYkRssc6Qob4zASaaLxficzQ7yvMFa1VzoWCywYSSmERRnubXys5T6heU6NeR867UAuq94wa9imTHWD7EBntD",
  "key19": "2wqQvZtrjsuQ5iZoqDfbw6g5dmRVYBaGyP8emGLHwKcWiuNND1KqDTbQh8Hq2qTgZ8YiGFqoTFYwoBic56Jbj8Mb",
  "key20": "3Dnep2jAq3LioKYaw9kvq2MnsXW5a3ouypGbwTtX9TpKqtue9w5tDH3LgupstsHtGaSZdsMaHBBxfswPkiESwjei",
  "key21": "27JaD2V51G54obwL412s22ErBA8mjmnpQ3TAbtrDEXtDCzzbbNbR7S3uMnMyUPD3k3nFyZ312TcdnqmW7vVKqy8Q",
  "key22": "5cXBXC56qjurjWsBp3aAkPXqeN4JtmREZMm9TFx4fUBUmnwzPPk3CSHJ78xBEcwHYkjLnLHqHoHeAGVeAtHudu6w",
  "key23": "cgVZRhY88HGJ2PCYFJbMvLDY5kfpMJVYdebBo3NNtPNoXaiT3p6KtNawSwkp3Q5pYiuJDYT1fXCG25YfXfyjCwj",
  "key24": "2hypax6vWe4EfXyB9kHNr6EPWEoToZVb1qZRmLJ7AbAer6FSZC7Vw4gQuvYxNmiPT6Tw2QHybycbzL7G1DiR4Yk1",
  "key25": "aemfR58r95JJABd8LUMmeGDDZEV2QFVYgJYCequkLGAkeAe5osx1MQskXkA5FHtjFLPAABVjUjxpoDTBctuHWnt",
  "key26": "iusozJdncKPSayJcVd3aM9Vc1wCXyULeLbCnQNKJuSuyducJUGZuJg5c21CnxrYvxbSQyDW8FZsxSVTtB6skGoh",
  "key27": "2o7mUnjHMPwHCDjF1n4oykaJusDBRUmG6xvgFDLwk1GQXBfYdzmnKkw4djXnZ6RW1UBE9ifSxcgXwzAhQaZ4TNH6",
  "key28": "3Dh1Ui43pnikZatV2Jhcn8uPgFnyL9ZcE7kHEWuJkGX3fMskKhBPQGb6jJsNC9T1BeeNDKKjSUccrxx8gKefk1aS",
  "key29": "3x1BRKwrH7s7MrihsxtgaZpWowvS4uaHJHDHdFWCmRK4BLLLuQF1C6H8gDaxtNKXH6xF2uxCakWgySufAC2qVkBR",
  "key30": "26nYf6WDSovXdZMDGiVqb42N6RL8hixNqL638YENdwPWdCN5XTGixmVNvedxKZajgWxTLqnmrHw7xjn8NmnUkFsE",
  "key31": "5CBEm5NbLgYHTGKYL3aJVbZ1KACumfbH99mJhsfucPoUoUMqi9JDysW2vqevs1DfCnXS3XXrwJmLLmpNJq67TUMb",
  "key32": "3dR1eeKx5Jpx7TqAYXCsvm5uWpcvMAtgfNKyFeryMtr2BN293M7KFjWCTdL4DdeCw4UsSRaP5mckmuCB4n1okQC2",
  "key33": "3M9pDa27dDXTJTCaP4gAK8yQ3oY8eH8THuGwgXeq4aX5pupVg3hTumZUwA9CQzMAwe6yknEXUb3kAe6GTtaYMa44",
  "key34": "2Nw7ncJeCb7PGipKVLMp91uwGQVzt8RATpdBZeu4iTpg1k2YySscmz13fGdJP7JphnkXxkFkLrmMB3pPRXhEArbg",
  "key35": "nNhdfcNfrhdd1RHGAQHrtrvZ7TYWSWybJfBpZxtq3WQNPfVnNrU7YQRZJKFTMuccuBqtEH4LWoB1vDCDydiXsfw",
  "key36": "5zjttZp26v1VWnEXzkrXvpNzFixn7AfsM5GQ9pkGF1NYQzxZbudPxEqrhUDunab2noCPc9CER3VroxZNtw7iebUz",
  "key37": "3t7HqTy2FWSQ63PmnxP2iyR9h7VHteEfrFs61gLw1iLpZ6cDBbNFnZxssMvbtkrM2D85QeMz8fcLUafyQw6uLJkr",
  "key38": "5QJDuJLrSAC4a6KABRgBZQENVFmr78CQdnQumbfLfH5pjRz6yLu2Um7DRxCnWwz4Eh5uUV8ik8bdQ5eewXhWbvu2",
  "key39": "2MNdJjPhtq9tkFLK54Ud7dN4ScrwHDuiy6h592kDBrAHi4U3UTuNUB7XvS26BXa7VuXAiATGjTa41AkzVQQULWFw",
  "key40": "HcZHYUzv1KJShGZfRkk9t9mcXD932qFFGoiyH3SvGabCTvPCDRtaiv21CYQiPTeUHDNfZVYokCtDYwFbjgMHX6o"
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
