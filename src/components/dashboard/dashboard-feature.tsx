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
    "3YCncLFbXU4HQVeUXHGmiwE69TdoGT7y5yncUa3bHwoM7C7Bd1CnzLoa33bQJd6JMUDeZviMhgsRTueTTKjvajJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKDSdLZWtNe3AnK9Ffy9dh8SR1JAV9jE3VAN3iqqtDW4WCSLrpZ4gx4b9UYbNhombSFoQX3qYp85h7SY1nZFas6",
  "key1": "V9EHwvda7kAXY4r4on3f8c5CHyETmnZcCkTjbBd2q7C476vhVFKVqVTJTtf5rubJoVN1pxRwXZaCyeDhnbcthL3",
  "key2": "hJ8BD98zjZ5c1denf1tLiXeH5wRKbUEX6CnVcjpyztzgq4qf2WvCuQoKqpXCG9ZUDYFZAcg6jXzA7yV3ivqdHN7",
  "key3": "2yKbYVTM1ZwfFMaDAqR23hJ14YYKt7oowHrXLayAUebnwqEGM6bjXBMHKyUzpYqVvAM8N8ozAAUstVaXWjwm6d9h",
  "key4": "32qbWhDqcWVtRGPuyNRHPruJjp3cwT51H9QTq4xo4V52GAzEa3vwJ66RM2zEAF5ybVEcBodrPQapV4PxNhd3iKJ6",
  "key5": "3UdNR4LUFxKtMmCqEesXDqcPNsZjABb1tYe4YeU9EkV14MwGkTCmTTH55F66g1cjvJEG5pur8dkakE6BKTUMdU5N",
  "key6": "2z8bhdybjv1TeC88gvbysAuC6qtfpR63XVnx4bEJZRX9tLqAi2nzTZST5TTDfdY23w9SChcRCphuzubqCk34e45V",
  "key7": "4Xu6mFLWnVCkwxZHhfMTdQB5EcKpaLwn1hmbxyBBPQfkXsX4sVotzmcWi4qJjnU2hdcLSSbCUJqnDmpgHbtz2K6u",
  "key8": "3pBgxrrFa5S23BozPeXobyyi9dDBfmepivJR2dQegWiQPj3a5dsfePmgFditvWkvyTZvN4wSwvLHzFmQzz9JcL2T",
  "key9": "J7tgFQ7d9RJgeHpVWqq7eWnLY4qAsoayq3qVXkGJybMXkhfck3tCmMfM4EAM7N7ko57nXVCoRc6RnUj5LitYMfU",
  "key10": "aSHJodnuh2KTWwVXciDf5punCgVMk7Fx3YjnSLGgAwyav1kLCpCy8BMsHdZ6wNytxeWyd3rDASCqAJo6CtQDLP3",
  "key11": "4VEzRbpVLvUGZhiVPn2GH7NgrjyM1u8sEKgPSoKRNFdVWdHHWyigEXsQZ7C2yW6Fzp5SbgsZg1GVDzSyqTDTDMvW",
  "key12": "4rzTJAr9rZusMd7TTxyVoo1Saocx5HFCkD3UvPcQVsv3GLcM7vdHeRdEuLQVh4fz1iazvbFDA9ZMszmrp4NQnhDh",
  "key13": "2RtD1gTtu1v5WAvXXTSHZcHMJohNnbRVn9wQyaLBkmRhXVvTuSU8n4oRZsqmxmffEt2VqHDUXUk7s6s3ioY9gAje",
  "key14": "2ezakbqadoQAdGLPbm6NFEvbhgcrCoZGErht6s54rdzDxmefRyKV9taLzY7J7ufrEUZsNn5DT1ZBXyoAitzG4JfN",
  "key15": "3QmbphKWBPdgJ1bMhQRDLYzqivCowg7ftfi8qNNYJBKz6UspBfBykMr7sjkXSMtr4CzPJmudLhxYdmng92oEHRQQ",
  "key16": "51ST3myhsNuBD65znBpXujur3rujh36sgMmBExwBEJjw3Dg9NhNHdY6ng5hyU7L47CDV4FkKZrNvfRWDZHwrFhHJ",
  "key17": "59Z8U2qZVKxC8yLmp6sg58eKsA4u1hZp2i1v1bBrq2CKFozCBz1dxtgJ89ySjMiYj9SdL9YaSM2hs9JjvWC13CUW",
  "key18": "RHuSdUMcCenZajXUDrg7DBTfPiJ4GKYmcTvBx2mJMDwAX1esVVPtK9MSXoG3uBR5pF3U1AsvFYiH9bC7ES6GJfA",
  "key19": "4Jy6cZgA6eDBXvwveQrrscksuC9dud3UF2wQXxbrfAUt1CnMnqMDA4FpiyBHxrC959R9xQ9snoCnMTP3iK6vXLGR",
  "key20": "5fCG83L6HSUiJLvtCLD1ZWcrXhn4yPGj5QJhB7XN6ZWoNdxVRANFFr6ciYqDUzFhKTvQ4gbMukknZkNpWEgsgSAP",
  "key21": "42Sg25gUB5UxxYgyZP7pjqziKWQdzVQ17J7rMwXwtGLzSWMCoRHJ5WDbrSSoMj3XNJ5HYma6D4M6rx4hiqQzNoxy",
  "key22": "4aregoLpGNzn3aLdGPBcLF727SUt2ZCeF3HFY2nza2tSLhqW6yM4jwhzz9DfeRKF4PY91pXxPi2FY1rBwxoxYhRz",
  "key23": "327smNARGzcMtmhQ32yniSDqhsQtGCZj6tzKF2Mnhi3NRm8LbzB2EFkmaXdiTbTy5xi6SSTW1d1WVjeeHV1Tmrwz",
  "key24": "BJHgnPxhWjuVr4PXkPfYabeFS2yL6ky8qo96ncEo1sJewfx2CNfJfdQvoZxEf8Y41yuCvc253QZyAp3883e9wp7",
  "key25": "2yiZzHTRJWKr58npQmtYMPhxofCfoqtYcqBYwHw1GtPLZdodW5YivdwRtzorUZm7UWasERs4zXv7nkNDMS2FPHVT",
  "key26": "8q1XXCThyYDz2hPAirT7g7VkVn12P1owWbmJ3Lv7KuzyMG7KULJRAUBhNDaKHJxq9D2QgT2XgkbueUTBxy5Mtqx",
  "key27": "4tsxchQhSdwDYZ8tKcaPqQqVrWKqhXfKqh13KsRc4PxdYizRgP7HPBjT47qtizmnJYj7LWLyQrHL1RrZWcBXJY3R",
  "key28": "5ubCCT6dHABxLeMHnVmQeb2FevCvfPSCYw63qab9LVirh6RheCsXxRSZ565B3VbqiD97z7FrDqW1EGgHaUvK26jS",
  "key29": "2NPz7MJfLihvmP2SqBnEonGDrepvDAWRq2Gumf7KCZnzzHs8jxmHauqVdWeUGMff5DLk3hg4gNMpRNH4mvUh8Sxa",
  "key30": "4F4ktjxopv1o1JsufgrkWQTRnJECUGwbTxibJ4rkrhKF1EE73yJU6STPFSSqRFszFh38AwnhiXChbneJwJKShPTb",
  "key31": "c1A81ERT9LoQrdo4frXvdJBK5aUjFt6u2VEb5rZHvkTyanYPigTuSkynPDDVBQkaAFgoCwXZyikCnaRMM6B9Sst",
  "key32": "53TsHBbMGaErYCSSdZwtNdwPGZa6Uu9Lsjx2b9VMSayzFzT3hbNCvFxfqNnjL2XffaaBVxe4fdrbMPwc6fBvFGGP",
  "key33": "32xpy5eRNVZKA4r1jaKGENoUdZnh8giqV9u413dELw6vx2yqWzrUPonn89hBaBTyzQmTubLJtiQUH4bBGGkJLVwH",
  "key34": "4Pxa3sbm7fdQTFWoJfHCYbwGfpLGVHtxJefffan3YRhaUM7V6zWWqnp9FZ9A83ACjuBicSkmaR9aK4qVX6QPANiT",
  "key35": "1nu2NZYxVjJ1okgtCjfLPpMfuTsGr4HYXVV9R4sToBPK3KVq5JNSwWQWRjtuTt8X7TX1QfxxrtsweL8uXoYqztU"
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
