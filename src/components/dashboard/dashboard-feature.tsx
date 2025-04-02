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
    "3WRpCir94SmsaYUTEDYxi6G7j39W2BVGKctbZ1bevs1XizGfC1UZKgYu4Vbf4rpiKmQwNfePUdt2WGNRcgsj56BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wi9ca5P4UiG9WbDn6RwWheSrUG5o6SXh1h38nwXZDdrCUX7wcoASoyRVj79yWoKY9bRCh3mSX9Cqw2v9ozmhBrJ",
  "key1": "4KG9SVH2vH7UCvHYG7CpyfCgLb7CBCN6bDsqJMNay9FkRCbdiQCXoaBn4vb5GCXzVQxPnrFF4UKiwEPcjWsXt89P",
  "key2": "5cT5nsXfKBa2jo9UXuorPWcHsEoAokLhZyHDN2osQvaKMwe22YFaNLDCqFUDJkBUcEwQhDFyKJoVmXgmvLLYXUZ7",
  "key3": "3rZwRfWJkYzk8NmPFobZavHFDFJ3hFKSnYzFCScscMAzXj8aS4XZTzNp5ezhx7bGLgrFgnce5w4AzrNLHYiM3i2y",
  "key4": "2sR3MoU9whUekU73TwSmvgtBjUntm3fZid77Nvz7iRYLjJvnUvcuC5F4PcNH2iu6tmnMKeSU3tHRxPCdMGphV4CB",
  "key5": "2umzbehLd2tJ4xpBAuQqHkzpXarADBiU2S27oKFZTRG21KFkPu4ED2a74vxAJdZAArv8zSYTr7SsFETUgRnfXcsy",
  "key6": "25SQt8kLS9cEg3mMn6eAWUUY4jyAn2KTHGGy1fQw5PXsScjQays8VXTZczitNVz1vWNWPB5mMwSzc9saMDtLLmMX",
  "key7": "4RrQXuCGp4Pb5aZf52WnE9c7cTH8X6wXfc6LEUg9B62YeuX1GEhrVMn7BrEVwRpx2x1gTpegncxWzpT3ZUX5vcYX",
  "key8": "3NkSnxZfaDP8cArrNSzaXk2Jm1gvnPTwjZsyGeu4VieZHPwEDn8teHk9BnU87GBPfVVPW3hvHKpctrtKE9JxucKC",
  "key9": "5rxqWJ722pGBAyqpRLFzQoxkQLLWHXjHEWtnejHyBzrkHx1G7ADK7g6hqg16CveuLfjqAJe5mZoSP5YJrAAfCSWP",
  "key10": "379z1ToMzi1Zaa9wY24NL7Y1hHh2VWSQwWMB3m1J9jwxt7SEWn6LhbhYeb3BDED5DtbFRgcrX5Aruz3f1XZeC6AP",
  "key11": "58fCj5AP5NvzbxuKpHP9ekMMJCPKwWdGuVwNordfzNpnfmwUF1iGRHte3291q28JB4Caty4SBFatZmERUFjwJLq8",
  "key12": "3S2srGNJYwCwfHm8X7zw6fQus2fFqbv4GXg4NQmyn3oYYvEn5upxszJZdLx4uSvPX1ZEiK2oNFHYwb45ciQdA676",
  "key13": "2dH7wpUBjsvnaVLSWerMS7tZxtZLDF2rumsDC5AnmCMWtYgF6SDJL28XYEXdPrTvUVXKVJDLqdfTUHVXM7mDjPiZ",
  "key14": "5ZAL3LP3KuwbBNp8Dd2UwLigvkqSdxzAg2FeWqW7fhiWZpUBgZXHY5CGBpcoMXfodNLqD8eF68wdNdiRuHhxEfsL",
  "key15": "4bujL8gtqodHQ9FLtRKVyb9h33fHKE5LSZLwoosV5eFVVLZ2QCj6jex3GuXGG2XDDo9CwSCRXDKePvLyzVZp7Ven",
  "key16": "yB1Lu4N1c1dnhhLcunmXmc6ghJCrbjMdJq8uAh3UbJLDvQeNxXnKyZDPusvWmAptdRqNUvBhDwRprvJSS5NYvyd",
  "key17": "2Q8MV5ms7AEdDoVWYqe2G1NBQfZq8m8215wFg9vTdjbeUxmRFRZh8QwnQ2hGSJpxSPa15HkfqMo96U7LDPWAf45r",
  "key18": "2fPYu8o7tpf9as4E3TSUihFzne9RDQ3ERAWHufS3MfSQJv89uoq3c1GwG9FFBECSufQGJRPUz7CG7t5BR6pn9Ci6",
  "key19": "2Tj8fqYv9J7fp7QzrFQP3CoikTJSkTRfNd4eLiEgjmMmrBjJFygdMNbu6dqpofKr3LySwh3KbTsvZgRecVuFiCgs",
  "key20": "hT2kGi1tn2frGh129RLLtbngXkY4VjgwUzk8gdVeaQGGEqFyJLgzMB1qDXZnS3WT9VDk1sXMTpZdCbKg4boY7Mf",
  "key21": "4CtSMKFN36QQGfFGdioY5xyBv3kH5dYaYdQXT8Fr8RDAmU2k6PdRHinNqvJDjdEqvTFBiJWJLKsWGjHuAqun95kM",
  "key22": "3GnGwBvaz6dL9UbF1WUaP13jbLeDphNoKa6Nish4u1H43bnF8cGFPyNNdJHtQf7c3JV2CvpXPsi6oHXTP6AUy86d",
  "key23": "2rLJXVvw2kWgJY1ffgNrXQHn45nu5NnsYvnRGv3R5CYwDT3UPrMcyiM4ydU1qTRQGWtNDherJ11GrHsSSYdNngYH",
  "key24": "3UDpFxacGJaAXtSMsFJ5gvggCMpSzszYBHpV4X5ugQZ7mXJiy9jtyJdS4xq3BEcksANczmyFQTxP4ewjjWGe2z9p",
  "key25": "2KYWGrbAbm2sBYA1LNsgTMRZCZPS3oPDPqAEex6vimYWSnnN6f3Tbk1FPjftQyesNLJeKzhTn7mp69bf7fHWgjaz",
  "key26": "2s8yv1RshnAgPuqGhjeb1CZohFKm2jLECfrKa8y57xufrPyaWwS2Fb44JMfyC5fqHPYG6wcG1uacFwfNk5vJsqtS",
  "key27": "5wVaFXF6oBnb4yDH6GBYJUyTq1ZFFsQWrN5EHDqcWZNkKBYfNHet7WnvHqRERsQYdmjYm6zs5QeowxB6vM9o2VUc",
  "key28": "4o5gAQTuShSSTVYQfz8WWrhekMZH8pZgw9NSfUEYEgdamaxEK1VdXy79cZb4WxsWZMvYpMUSQ2mBaqPSLPSCD7Rh",
  "key29": "396PYpWPdqEi2bM1cjThkW8hqoh5uz5fCUK452CHZxC8XdVDHp4hXZf4hHeLsHKQUF165VY1ZqkdK3eXBVeEEKTs",
  "key30": "4sW7GZDi942PgbiEUZiapcfNyyXeYsSqq2kmxNHvQgJ4xmKXyhtKWs4ofYfWkq1uF5KabPcmed4xei1226hvGUR8",
  "key31": "4K4QSLD2H3mvMULsvYgqkZpeAuJ9KVqxUiyLYSUcnkkoCrraTAduhNCY5TUehn5xg9nNRUqiLTfFze1LPs2vNc1u",
  "key32": "5DxnADB4oobRxYg4RgEWkae5wiTQ9Y8zMPTD2W44K8vj6G6e8XSMvVzoZJV6kWD5nzqmbfB6q5zZuv4fcnLaR4B",
  "key33": "3By8HZeagDGR1hLURQTcr1YgPwV1Bnbp9fAmiTt1F9ij2eb4zd96wh44z5KF9PbBci233qbYJGtn7YR68VUKSEde"
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
