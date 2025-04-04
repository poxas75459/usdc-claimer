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
    "3wRjEXez1ANGbKB7UQ3GM7Z2cFRhsWpmtzyKQnNuRMXS4tiKCsayh1N2Y9gqHg6tTJormDAjSTnXwBeZCMfU8Gky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTSeNQxMuJ3Ktm9KCmzQNZjW3LoRPPp2HcnfSTGdNYp291V8C4sAvUEXPpFZVMTCM7N8KSBfsMoJTfFi9cofqMA",
  "key1": "3EmLYt8UTy8NiqaAvWPKmpZaMfpGJ2H2FFZtx1QXAgxx2TBGwEgZhQFFnkUAMBFgHCQfC8jU1PbfJSr3t4uNmDQF",
  "key2": "5rxnK4JoU4ePoqhTWJjgiz7MxhPZUdxg2U5zpW2AwZiH3qdsDSWHPScfSAKUE2tSitJ8jRNF2jKXxnAJakqhQXh9",
  "key3": "5KDefegxh1iTnVLdscL1KNmnZrWW4LjFZFKFp9tgLfhPfaAQXggeyeDYVLT2jBZVD6jTXHgBt1HZLLsPq6Adzirh",
  "key4": "4Vy2hn5NBdr1v7TFTXZaqZ7EzJKDWzLnW5c7j8FjJDnJteJ5UH9mbEgvkMMSN1uRE68EMPB8BM6G8T14tQG851s7",
  "key5": "8rTAdeFu97M6nMz4rtMAaoiTS23th4LemKuagpPCGpUR7p1Kp4J44CSkx6wM7hL6e9sXZa71qLTbQzn5tCN2ELK",
  "key6": "4XJembEhZcrtw4NwmKrKVssHKCDviY54yCBj1GKFSSEwz5qX3em88pXc2pjphM7x893xYVQxrCNvt8DRzCfNGm1B",
  "key7": "5jHsCU8aGC3AFjckShy5obZV4Eu8NnNQS9uf3vJQYKLnrr5MtRED5qGpaCeRZ216GxBnTTqWw3ehneB16js91jit",
  "key8": "41F32SUbyNwynzhW2sX9oqK5hJgG7ze9r1NqD867AeKLRwDeNbXgSPAevYggXGTd51hwoLJmGKgGRnu6yWhBmzy4",
  "key9": "2GVDbEL9aw3jNfeGNMPCiDXnb9uP8Bbj38ffWBd5s1NGpgUfjm28cWGJtXevCs5gYNtXnTk6osKRMLLXDxoc2AhM",
  "key10": "aFLx244Jtc2vEDUnV1uy9zVCGB1JL57LTR7LgbjoRBWcjycoErSZHPK3Qeo14s3Hc2m8hxAm9bhNCEcGA8wLfev",
  "key11": "3ayqQyLTY4n8uLX5BuNa4ciKk2CompRt3v8Vi5pK9p9YGd5RYM8qKwF3aySwhvuVMsL1qTdQL6ttJXKNFnZi17Ks",
  "key12": "5jwwKiMhxt8Kwva4tgh2ZZJVSix4fm652Vx6ETFh6FnhVqV5v6sXwnuYu9m91L8QdAKgFi7Yr6LWYodcxeNNaPde",
  "key13": "CZEnCX99MKvxzvDDprChqmvi7RdRRwBo1Kh8v6F94LtC8WUUx54ipptJnaEzUnsnKcbtxz7ojKVfswpX2nk5Rd6",
  "key14": "2MdNoRAy9ZvHudnsUyz9q6ETxGsjsm3QZFgiTseaDQj1zH28KjpJJKKMmQpGM6ti7GgQ1tbDLULBgnhTYMnJZdj5",
  "key15": "4UmzHspXJMUp1bDr8hqh4Vq3irpoTfQCANZDmG3e4LpNFHkeJkYCn3VLb7MXwLhL74XV7G6r4UHxSQP4UpqA2FL9",
  "key16": "5DqLJcdafP4fvZb7NSB2KByK2HxsNbYibWLyVM9F5gy8SXfrBW4cQdvF79Vue1NcygtcECkLAFb72u9J3pXzMYDM",
  "key17": "3SYqD1TGcGZsGfNtiJMwaaTjYDHomAaXX4r7EsRT7WbteGyLDhUkEkqTs7ueFBG24ABXj77bZPvDbwXawgqy644G",
  "key18": "LtfKSvydmTEUdgWCWwuPmJT3LttNNyjQdXXMQ2tDhkfNicDUJyfdC1gtJC52bYZrEpzi8HoXPcqJGmyX2jMK1F6",
  "key19": "549MdbFJfb9g2Syih6iehULxLdR78npn6YqDcTpVw7ttDCYyukz4ThazwNN6sohfEjfF8CYrYBtXLoG8gJLBCFCR",
  "key20": "AgTwxxajsdUtgP968jJvWeb6s9wdq4SnNu3ZGKjY1kYb7H4m7aPbuAAsRNwPNHVGYRoUYwV2m9t4aggn9nK1Mmn",
  "key21": "vEzCqnPtPFHR39HBWnPHzW98SbYe4mDr6wC5mGMeagooAimXRmRc67TvLjHdiiBFxBQLLTCAYck1g4sweneiXrJ",
  "key22": "bkL6oUQdr3moRGBCPz7ZgrEKi4GZoZhSTA4k1GRgjJXUPfCBPRHjN3Gwvj47i9J5V8YgU9gfhcxLcM6HzWdXzet",
  "key23": "2BDaAr6uXjZ8v68htxUEsCmu5FmwMmsWbcXagzEnZB8YS69EuxbiubkxPEaSkNmhrUChQHBXrAJi5nGYdp7VWmqY",
  "key24": "Fz5MWTCktoqx9WZfSe9H5cENdLdvDw3VRc2yMyCjUoqz938rJ7zgZxgAY8m6BowdBHtJMoU5HSD6PsVT6B7g9mo",
  "key25": "5JKzbwk6evFoxcocqbtALETjgdr1UoaHCf57ZGMWQzmmoWnCDqu55aZooNsqidpgnVivPSno9bNepLREN8qRLZEk",
  "key26": "EipMTwDjVStyjcoVESBDPABLtj19DdXo9M15L2WTnRUjYFrvmExs1vGNR4XekgrbAUsdy6MfHsTSV8zC7KAswkU",
  "key27": "Q3i2r7o6F3Dh4WffTJXE5N8pbGEesUkGaRkbRws4jXk8Hw59KfygkNqz21tBuc88tkJdYJDPRKNFpRVPRWSHEDq",
  "key28": "5xU9ddWRPKdY93E2jNZubcWpWCjwyc1Hj58rNH38YqtmRnyFiuXXEsBs14jrBCLFYv7Vqtf49G8UAB8oMPdXqYxB",
  "key29": "3NLHCBQ9wRa8EXd1oJeNCJLc9rBfNk6nr4NQGTft97cKoThMafcs1VYWnTt5sSq4ZmJREYoGSr2BhXqv21GgH1U6",
  "key30": "oetm9D6sj5ajrn2SreGsgqikzwYfmDxmXwuB9g7UjqqximYyGgezXgwQZWFvts8V77cvpUDhtUSHJXQimxmWtgi",
  "key31": "5LFSWf7shJQLpYXc8gXAHa9WpnFQJqWbWrwYBzsPqJFw9yji3TytjAHbpDEeKz7ZYg8BH2onea44YzCTP8JBJe89",
  "key32": "2ngtVR16oSRYF4JqbHyMpVjtK87eb1vf5uLQByjvL11itjS3wLwAFtP3WRwUNqn9GzCPg4aTsmqL3o84RDSHfJhZ",
  "key33": "YCZC5MSKwXdFU1duPoP6sF71JWumLYpmCDFSWyxH9agygTyBhqDE44nffiKECKtFzM7VY73Kyuhym262bWxUAMU",
  "key34": "4UPfcwRYZC1WiyZB5upbuPgVFkL2LucSjDzKivVckMTsJvF77uuJGhntN9b34bqnZ8jAUqdZye5rKuP2XMxyqNTV",
  "key35": "4j7GiNoBDt6wCoGWWBWapiMHpzBHwFjWgevXBE37CGrYAj9DUtt4xA4kb5FuUZDXQ25idSH53BqZUL6euVurM5eD",
  "key36": "2riidwrpAmtDGaYJWC9Tk3pJnfUC2xqPZ1HFrXf6sB5vtA7L5ZziEgDVaA6wPA2Vb2tHvrTEEieWP1rSQB4w4KJy",
  "key37": "42shKoxRw7k3ke93qTcL6yPP1A8S8BSRJhAYdjpsrcRpQy7p7otrPpYwZsiAKADk8CFvUmSvUdFZbuXViVPhT9mi",
  "key38": "5yBdeNjemjpfRAH9GbunLK47HJudZKc7rSGEpg2c3DxtysesBRJjcE29bxWLHAPUajAjpKVsXFDkYTG63cH71LYE",
  "key39": "KPB4NZSb1ytPNER7vLpt5jBwaLM9FmFpAmtWfRqpcK1A9SrrdrUz7vCkEF3gwugVHknDoQwNMjQP9cVveom5h8w"
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
