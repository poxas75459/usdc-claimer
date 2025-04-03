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
    "3WfX2EfXVwTAV6bt8iDCi4Nrmb54n2r4PF4VtXwsFvT214cwUGYn8e3uFwPZRaHLJihvGsKMp9w5s6hfgtRSMJso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3un1hZKpMg5vpuaeEkJ6XyRxen2HiiNJ4UmG2cpmjb6qTsGQQA8dhjGbyVuCeCFsYdQtejXDKs1Mwxagj8d6NqDw",
  "key1": "3UQSWcPBemMGPpw2Eku4fVZjcutPTLbhXHuRFkUg8f7kp2T39YVGanjbgfLjavGWfFuhboTWCaW8vdMKFjRCezTU",
  "key2": "5r9jt5yynvZphzQr6d7YY9vmPXRXgZNrSp1XtEL9Lcv4Duy4HhxziHeUMgTh6n5vkhBAZ6BXoNWuj93aroJu989V",
  "key3": "5BA5qgUtfxTaM2w2VBgJPQx5bvAZ2TmySWD1TruNm89MCw2JsHkxQvh5qLaU9MVxCLpLKQaKhCVbMoDM9qbhPJ4A",
  "key4": "64bukHFABXzv4R5cGLoXu12tsFb9Shbnqk1kABHaEPduyCdx9bMQ3wkRMhsSYYtJAUGADAZ84D9NAU8RkQMx6by7",
  "key5": "41ntouE2DVejk5GmpDEuv34RSYKivKU2kFWX8fxqPom5FN3gCmGYe6k61fqRAkMH7yr87HHi7YSYRM2E3MWTsuf2",
  "key6": "EQ3b483WvRpxt9qTUvPcT2mse2DWXNNXEx31fVqf7yVT1YzD1YxJHsD2BAxK2WviCZHp3DoDrW5dKyceDVn4mkN",
  "key7": "4VQeprcS2cLpzhNXNQ9hqfvtinSGxWyGd3hFkB2mNTAopWtw8VYMwhwjb7qdwMpEHk6Rfcgsn85KaGb9KMGbet46",
  "key8": "LaxCAaHZRVv3zxV9mmxVkFTH9tRwcvqLHaPbCuuuS1UVrWbv9yVVseuXi3HSE7eFKHV3nnVBBN38aF6ERx6AcNY",
  "key9": "2T4wfH7t6uCynPtTDMZTYSGczwYR2oRfYEEaKJrVq1yF1qGN5pZ2aF1ytyTMJs87X7Xow9V7UAYH5DJNXg87kcKR",
  "key10": "53WSffmvkxnYZRZnbq8GMD3ce4iS5dLNguaxFZJ5XHDS6aEWQ6YLT7JPpLKQP7HnSktyxFinKZBZkGN8Bv63Pb6a",
  "key11": "2KRLK91GoozuiBcAJpGonzAUXdbnCgmPQqZdNJng3ZK4KyGuJkYcWdzM9EASLZGsdt3yybqXAgGcgJqMADYRWiae",
  "key12": "3T4Q95XY4pbABb6RfAWX1jm5T6A22PYCbQW8ZbLGsNsUBBZrUo4b6oCfk56fCibysMVybSxsVUoRBXSk7358YLhV",
  "key13": "5u1MP4wCvNLTCBtYGLE626hgEqni2SZtcMYm2TTuGMkD9sPt8Fug38whtF2RMKCgAoUPg7PxegUwCYdrsZYaDoeb",
  "key14": "5fCPXtHq1GXYMi6hWLah6HWEfu8boXXLEzGhGezungp9FSdFgS9BdKuWLfi81qBDipJg8PMiJaEnmNoQ8x1wGzBR",
  "key15": "Nc4a9spC9ztzZPQaiavDrvLFNEgXXk26XymzWinsR6g9B3B1JMZaVRZHeKebrH4gfmEDzMtLA9zG62h8Ecmx2dM",
  "key16": "7jCCkjPXGD93Hpc3MgLF3kD7dtgBha4cy7FGokhnTU4jVBi8oBUCa9Fuj5kUjumyFALRT8hHAtFyrqnHztvGaKi",
  "key17": "4uwhfdt7wBCbYZYNWUJi1wn5x72X8gyW8xcJJURroNn6J4iJVNZik7BXri5qE7xpsmh1LdNTYcTxiB2DuoFohYKF",
  "key18": "5zB8EPc1QRncreQfenedfzUXKN2s2AxrFkYGwZRTr1D1sKzVg63jvzYNkLF6d378188kbM744jRrQts441b6XoAF",
  "key19": "59Wgu6Wup1XiyE6N27Tfs3hM2fBTm7PuftpELmJSMfStFdNqDrViAo59LsWH5VXdRxHmQv68u4wWihs9jbuAqLyy",
  "key20": "4t4YAkCScQi7fb8hWPhYYmdarSGaCssM9R7JxkB6tmJfqNhmXZXDQZPAuj1BzdU44915GeDX9TEd1YpHMmSqKND9",
  "key21": "5sZnB814jZ5raiwmep6HccExxMAsyUCs5qP8gENSJs3oYkYSqNjCPtzLVw2XshM1Yq4PhNM7kq7giGD1ZfoEEfN2",
  "key22": "2ELQ47HhV6dQkd7yMsXynavYUciyRqzdJR9EhGKBMjiiM4G4baJgQETKDRXFkfCbRiwJqVJ5gKskNPLeG35m4cEu",
  "key23": "rne3d1k9RCurW8CM3Ldd8UWtRbJVMCsXNw7ThpKMwVfnRToTY29jWWUQPcmCioSoPz51H3gnKyAVqzGSS56q4yy",
  "key24": "2nsVL1jfeAqGEkbp915cbf9sRDmBt8bMg3tv4CAywKdmZkY7TL2ecceobodYrpFAPm3n1iGyGYMTAfPEt1NVHXen",
  "key25": "58QLGa2WyEp8oPTxoY1yMgXjV7QhJTgP388btb9D47GPj9SSHBrAb11j1GvENsSd6UnWjiS6Bb1xSECUUemsHBuv",
  "key26": "4sipZLuXNVYNGJQ5g2JMdXkiSQbACoAAiMaSHKsyicLN7CedbCVzxGfJpzep6teqAeqqJ6E1Hadrzmhu2vPtoPG9",
  "key27": "3idub34kw9kLUZoGLpcGUTQ4janJM7bKUKsXBuGEAFY6M7dWSrn6M8cCWtFCUor9FGjiaUZ8ti5J5y9bMn7kFB12",
  "key28": "6JtxNNzXdV3hWnVxnvLU2EyJLDy37EurbZtQcwSapxM8iWWUunrGSxtH7xSh2wfW7wFSgtLe8A6YXQ3vami2osS",
  "key29": "489uh9YVmiECuyEw5mMCqFHXGgeiHdff4jEWZaA1JwymF3S4FhzaGLLkBcqubdctRawSDMvQJ55EG4PPW8wRJR48",
  "key30": "4TadP3fVuEmHwvAR9CqYQK7MuVf5KwCCSCoVap3qeqTzzryTQmsUFTCZ6ZivPSaRaWWa7rK8AeMQom7Wiwc2s1Kj",
  "key31": "2NVhc8YjcAjksmrPS3mjhJkFbkZCPrcU6tKWjhxDZ8tB8NkMFLodqyMQS8bRyu7hCitJ11EKk36RtvgjTCP4Kp2H",
  "key32": "5JEvjE5VG6kK5sCbTb3hCvukhHRDDTvucFDc6iTgKu64JWeZh9fc4A5tKzYQdx5DtcgJg21EgTEk1V2Y1gpmDLQS",
  "key33": "3PWS6a8wvRpR9boKVJYMRPuJH9dMFjQdDMZE4ocUEcnYjYDRM768qJ9D29EDCfQxYKPMZNicjTe17VBjFA6tGKYV",
  "key34": "2Fyzt1Zy7kt7iUKo5XMjuHeMLX2Boxo2VrBUj2swKBy6ZxD6B8E5WPFKnNdyYPhxfRdUzt9iHAzLKS51byYjZ3r8",
  "key35": "3MutD9axyucPhc8j8m11S8QnijQpy987h38Vok8HCyVB4EY94T8fEtKoVbFtkSsmS8s57WcChP6CRtE7pKjoQxaZ",
  "key36": "Re852HnYNXCVF2jodbKYBHX6ED6FNimLj5yVkja14g2iuA7MeY5Td4GpteNWEHFp3fQ5LA8kAf5xTeNqLVmsSzs",
  "key37": "427zLrmqptWxoNkvpj6j3c7bPkBPLzjT3Jtr99VByYKSGfstm4dskd9mM8dkJ753tJxJRHcDALoaR167ukEfWgGW",
  "key38": "3Cr9UyDp2VesgAevCFFuu7BQa3WZoiteZMbBUT2vfx7nWw3dmnATQwhaRSgZcePUGecQFvRFS8MzU4EUG3WwoZvK",
  "key39": "5nhkiRHfsEJdyqrghf7pzXZdwTnEfaLEk2d1wjHy6Zob9rjhLKXjUQZGwqG7uX2bbXayUUmuAxkKrDzo4rsDuT8K",
  "key40": "jF4WAa3aYmHfoytFzGUYDXVJqgJpZYfJ8C6oEUwQHjaGEYfbRKUF1saUYRjQ7H2zHJ4XUfAKpMwM1coE1LwWysf",
  "key41": "2Xd9ibyGhUveY9RwmqQDBYDW8hwjaJyaaUDhSCFQvjHm4nGsJ8z4fKMKXWqJNBWpQ9TvpvD9PyJwmT6cxKd5Udzh",
  "key42": "3qiCrGQ7PVAY2xHQZYAqPJkS4tYPkPpr1q93dexr42Fdiof8BXpQZSRNrzZAznfjRaMPfGPkNZFKq9ZUiUyjTzNV"
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
