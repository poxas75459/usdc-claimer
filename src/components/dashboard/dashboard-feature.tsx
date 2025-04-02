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
    "5cbC3fx5392DR9xLApMmppsckjePmycA5mcFL4QRYSyDkm9paFYayUD4uaRruj7Z1nrUHu7JD47d1NTpFb6ngXBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DoUMwvTK5HV8vLdhQy2feyY263zD7tzKnDi2Y1cK1hzsn7dcKP7GniHNbbJtx3tuqLv3Lp3irswkg4YAqZwJQLH",
  "key1": "WEonVM9YkLDsAeedbG8yQHgLtRMYvW8KLaZ2ya4995jUXBc9BZ1mC5eZhq8vbHB7M3qFotaCExLejmcE2nnXowJ",
  "key2": "3MsJSzYtq3LQjm8ZPmNBQq1bzimwxfzik8kbUgkM3Zi7H1JZ3GVyjMiMduNbooj6fUa26A86eeUucAc85UnPtKnB",
  "key3": "65djE1Q7ZQa6qywVvT8TWrdjtYwbXcmvzEfff2pCSUAQ61if1FHkjdsqMuVDb3atsodrc9pKjtvedorTorHTi9Ak",
  "key4": "3ua28uSrdcmpUwfxU3nyt889ZqjoR8AUMzUyqfqs1qeXSL7Xq8PETr1a5i8i6me2uAgrmRJWiLUGVSM7eAsb1CZy",
  "key5": "2CvbY7gRnfXRkU8CzAyc4efyTEZiS6eprKkvfLuPpHyNPYsetf3xsZx81ZTm5D1eEh6Ntmb6JdC6ihBJ1QfkV361",
  "key6": "5moqTngpPgy7jGLCNSytnP1pSEzjamUhZKxHBTivNU7CV45fsRJKVrS3hgt61ST21Yd8iBXHFGrhWEeofD9efjoz",
  "key7": "45ycGRKgmoav4Zk2SrNwMP88gFnugQd8jZ163DpLW3JNKxmuZiQSLJNEm3SADvdu68J7x97uoWiS66MpR2twxfUS",
  "key8": "2nwdEsCLzAnfpGDHpcDBdJoAdhvGMAKbKc2qyroG6aVNhdcHMmGBVxHmE17pcxH6KtZFQHWBaApto5aPumgUChoT",
  "key9": "22FigfZzTFrhKcebB4c2rc5gkFegDAvyY6RbLnKRnAUAJ5sHYZNtMJ4EY7dXvHB2ByngB6NSVehiV75QrueKzgvw",
  "key10": "22TPioJKWEaRtWE9EfkvcZmgujPNe5jJykLLJb14sKsuxzMdbHtQjDNF6UEXobbvhSFiCPUyqQVcpuWD5rFYbALd",
  "key11": "cFfJLNr6etEn5EiFDZf6ADhWZu32hfB8mdexkxfdzaJcR5JKxB8afqCLu2mf2rCzaUCB5QUJJ1BPHFTFSkokLcN",
  "key12": "51iJDdHDGRHQ1imhQea5kxfhmY3Jg8fjsgYKQJC5Na1rcGjEWr66XuxDXykuZbpCYRrocA6v4PjfaNbUjEiFUMzr",
  "key13": "Qr8aRBtpkxfq3KX1AdKDiKsud91hiRD47sWStzTpCfyzmWirvxm5cEtHTbKFPNC3mnLQBP5ukqxgZqEzxTjSTB3",
  "key14": "2u5oCz8tr3MKYPG7xs3G1keXYAK2wEVZq9Akjq8TUchkKVbhG78cP9QovNy9LKQskbLPH9nSQS1Ks59wkaaP6oAb",
  "key15": "5fuBFqodqYeULmkVHCPmACN2H9dtPiVBvU3muyy7grdpgQWcWdAELxV3bUBwKorMKLqiczjonxEJTJq55KdojuVf",
  "key16": "4yYxtGPXDQvH26poQootmvb5h5imKTPNFZeN7VvsZwVsp9ZdMLykDUt8c1kvM2KNZnm3PAGLmBy97mYFYjipCv2B",
  "key17": "4FwruxBomENZRNBvX5QpEoyVKVbAKtbxrNaAjdJ6we5qESSYzrfYksa2Uf1Qza2JQhmVSvnn6bzYAfwzT81SyoTe",
  "key18": "26r473EdQx6CL15UDnaLCrGchHYEm2b18Uy3LAWEpMqysEsC6NKwV9XrHamUUJfUKk5q5ErjQMYEvFgodjRkiE8y",
  "key19": "2PLESvVcrd1bTpGeRSjz753UwGQBQ65Pc1d89CmErapkmVHmQr7Py7gnUmRj3bQ9W4yqgtaY8rWjtJxbnsyCMAzc",
  "key20": "4fs6szowpstHsx8VMYMG6V81Ko7YeWyJuEBij2CcV1ojKG2tjrPuQMRpFVb74uSvFcfQm6noQXxw6PujzkY6xGm7",
  "key21": "5upi4kQTCEyRgcXdBzQvBHyysr2mtRDPkeFBSqybNVbHvuUQC9rjRW6YGQ1bV8K4zGYRiBr66ZoxkeGKaxZ6jRhU",
  "key22": "5c8f4R17QUB1S222NAMgfG8JwxuTYyWyPozi7HS7L2TJpj2jgmh13QjgerpNWtfXP8NaqRC8vhcvmcEYGwwqongo",
  "key23": "5BDBBRjS9WCqdMLdZ7HXQpXsbcMJsz7oLsvFKuLhfhsPXM5k6vGmjEHikxJas3nyapw2QyYfzfVvS39j1bMa5egy",
  "key24": "5HQZ52WUgL53U61hP5NcaSx1U93rdZYAXBqPk333C9d6EM2LP6zwDsKRYsqXMVUjMDwUHYEpgQVS9ctyMqofTXZM",
  "key25": "XNzbgWYUUnexySUBhf8M7dATD2LRvPxi8p24bcRRYmq1uVXfPNcGgNgGikGGxb6ebuTFJTYgcXQTmo4u5xnhPqG",
  "key26": "5yTXkaSizDa5D3dCS4yVruvaARkTm3N1Tktor67m1bgB2mBZr2v7EzdJJEzK32BM5o12WB4TXsWVXn5p2c4qbLMj",
  "key27": "4tPDJwCg6qt74cdcbEBiHhCM7abaFaRFiuuAESuPwzsPqQ4hnvmom4PGSoQLS1CWhMkCzjjUrnzCmsLRkquCpMcn",
  "key28": "4fftEGWRoLgpnWUDbGVq7iZ6SE5NsktT53jC955v1Zfu5QsuDUrxuQjHNN5yUPYZ4CA5CaG3X4fiiHa8Mwgdwa5Z",
  "key29": "5pNN7bvsVb6aqwjminFWtCoDaPcptL5RVesNt2b47zr1ugYoCeYhD2PY1PDxH3HttKoV84M2jG2cV5E8gaGPKxyD",
  "key30": "4EzYjG5BW8XGVE1WyZc4tsvPpYKPUzbTTv7HiCPXLk1TsT9JDWyH884sVV7sgNJWTGXPQrWTg6ducBGfpg1nP1jX",
  "key31": "59iJnJZJVbs6uCJe8xJ5RsncgF4yrAvLEiJMYDXnSupKi4dneHSsogZJMX5RT8hr574Z2zade68pg7q5aU1X1uaD",
  "key32": "3fFwsM6Y2WeoZgjYYgoumJdWaJgHQrQBbNTzxUbLsC1qn5Z3JWaTzzENxaX7r6SVN1bPqPz8ujU2deCy2t6SxU6D",
  "key33": "3i69nTrd35TpptBrXMZNaUqzs2AABaydinwGXKoGUN99UKwxzYarp2Aa8BpDMMRsczic68JmS3jy8zGPA1Lf9ppr",
  "key34": "2TnPjHLcNVXULfrvigYuev9NCxkLXda3NmQd5paoPxfpRaQQrTUzmhdHsDkr45APUKSBKyyVEEc1Bpwkp2Pp1Xpg",
  "key35": "3CmhtmrS9whHWMmZ2Wfbh7mRrTfDYkuyegMQ5Qp2ttvQFiRyu4aAB3hHTnnGvbwBqszcAxrrSn6SW25e9GvuxGkx",
  "key36": "4ajoSpvNgqrBHZynn7q2aiDphZiL4LjBYV8tpvcoR3kk9qN2CXcDZBoEPMqcKPvHtM5NVXr5wdbEiaT4pdgy83vf",
  "key37": "zkcwwh8fNjoRLJxEyKgjfvG1gjhKXE9n9ohjDy9TnXzJ4Le883mWRGqp8g1bZiNqXGTNZjrw7oYNt1smVGYZg6d",
  "key38": "3A13PQX9gh8A1xFCMX1iH2wViy3F8YeaGVTjKJ7vfifpRwhapUmJVZnKdmJ2tbehiRbPe9f8Uihtw78SzhRrBSgg",
  "key39": "5TZxxm2uZVjTfgKnXc1iYM33apFPrJwbq7vs331WvksVDCQkC4v5i7WKSAS8peYGyXuSLduxjpRuYoRTpKKT4HzB",
  "key40": "ir1AYz4NRccmFwKkf4PzwwpwZxqe52eQLHu11fx8cuR8zLihCvmBy6EK4pDjv3ULX9dvtMFdsXzBYnkwhYXkMsg"
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
