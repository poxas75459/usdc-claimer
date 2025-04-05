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
    "3Lg8xSAKUU5dzCauP1iLmzmZq1WtkQL9ppHcD39jrGvnvV9fsBhkAQRRSijtibYvDxtpWB1aH7rXE9JD5uecL5yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzoJNgrcqtV6csJfU4avj8Y7uDxNNDKFddc5dLy7hqjapcLvVW3b7JsLG6QxCzUroJgKRTftPPtKGgBB82nKYSE",
  "key1": "5yxytM6aD9V6mjQgY1mhSsXBDf5kEaAtb7hhE6SeeWiZoStpTenhbRPpXf7gyMw4avju2DV5udZQZH7fyetHoepw",
  "key2": "4x8y8YBhVEkmLYRyPiiNvUHYp35ud1GCryJfZWVTpNihWQm95vA5cqBJMXaPSva3cj5qfWNZrGDx9K1y9wbouPxT",
  "key3": "LznMVtNAo42atdUYUHyV9FiAnpVnTJGazM7UM2p3ztFwNHk73P2AvGH7M6b48fqMYFR1ZSx5Muz7CtTpTdnnj3S",
  "key4": "483ZhQobcWz6XdVPvS6NReWnfFM2zCQT8Z1qha81zJk7J8cuaq5Tm2KQW62JSkj5sPVa9wkVVqMx5cMfyuMYDtAW",
  "key5": "qymBiujsfitRtvRpfA6yEsBBMNzUSNj21MmC1p8KUyZ275raVoCYfbnJgQfsJZJyLeXXctnwGWGm3CxJLfz7Ah6",
  "key6": "3q6DC7TCyruSTy1Ti3HHKqecgsvZWrM3TduTM9DnBQ8xxkXsKZSJidYxtQbtXuUcQjkTUGHbKok4x4sUTD5pUiT9",
  "key7": "T7FHQiEFpsgAtPRauiu8RyuNauvPMPEXXBjnosJ9aQUyesbthJWFoEbvXXtJDcLTcbFtUsaeMANArfzp1TpDdiF",
  "key8": "3yka1XZuavRPnReT1MLj4Df4tA7pA8pwq6XgG2YHv7h6yyvm8HgMnB3NG794tWDqg2EXRwmoH3e9egaDUzNcU8f5",
  "key9": "8GPbUri1BWNXEinJSHzoJkGaaY65M5MEkJsxTFnaCHxMcjd1cv3hHzRbHkVJzZDC9Yy9Y6DkbXkEfB532rid5Tq",
  "key10": "4hDQkubBVHtwG4necficBh48qfiX8QkGCLn2yBSgXZE4WCYUVdNqHQjZqPjgjcK6WSEDjt8NacUJNMQrpBp8mxMD",
  "key11": "2mTKgxC2WUU8cXHRLotVXtCufRQaPZmuR3HWmH2beRn6xxyTbkRsAzfWvHvVaMG8B1TRs6w9Eow89H5Knpb2Pr2a",
  "key12": "61HDPWUuV9KAzQ1BQuh4rWcMNAY6aDzoPWzajSmu73jYKqSmyjkjpaHVvxCqPDUoZdFAcVA9WEDSXYuZe8cEaPhZ",
  "key13": "63Kz3FzYvWgrxgyHGskoUtAhCvXU2B2xHxMLdN5ErbSh5eQ18uFjpt7aUJakXZN6CZA4k8evMFvWjnhkL7fkMK8S",
  "key14": "Ja9HrHYJ5xcz3zrQywFpB8FW7Wp2xhVt8R57oJT1QCJTfvCRVFMxtwApktW6SAPgXD6JQamuaess54axHMo4kcb",
  "key15": "2tGodJs2GMHxN1x4YR1E8n6RFxeNK7nk3RnFA7U5JmEr2Zkb2PpevJahVupsCTvbxE4sW1zJwYCGWbe9yRNKmpmy",
  "key16": "59GfcWGoTX5ZyYdHcaePcG2P7YxfHAirSBror2wWCEaUFp85PqEdYE8B57fViX3TUbH9bWBmUwTDvfJFh6SWvvsM",
  "key17": "4dJnbkRxPDUTcJ1AwhD6kYsz3mFGqKksZjeMchkecGXzDrJqK24M6QvpKNw698fNKpeFtqDKb9AE1KUceC4YHtia",
  "key18": "2bBqRKcpVeN8FTuM5E2Q8rd54BTybhpJHDG6PKBxFTgwdrm6VuaKW2NH4rYndE57927P694CGP2kaaKnMij3q3dy",
  "key19": "nN4BLLS5b44rjQPc78WYcJiLaj3RvyM6heKso4oYTyx1uWLsadvZPsP75YvKgFfRdRayZvNuruLn6P5qS7EvmAV",
  "key20": "aMocTyDAAJjMgjFbY6SyysZaQnto1GXAqVHuxT1DHyaH6EiLY9SZaNMrg3Qq83RNPr3wPfMCebkwjJmP5qsSZJN",
  "key21": "4pA4FyWhXshfL3GAAQUHBCnhiyonLrvTHYYDXnLBHfNgFnLCzTKD5jvCdz91KL31hpbgPgsaNHiX7ZbAH49VKM7d",
  "key22": "w2Mga4GyWsD72YhzSyGDpW1wY1KZNiFzgk8FWYQJsDt1BcRVphcCoCSYmaJRnKKvE56VwmfUc55vUV3h532QyyQ",
  "key23": "32RKodUTv2XDf46sfYqrS3Ly61wAfmePPwGJjbrc1pP1s2cJwbgPwuiExAwcNYjiaHZmGR3z4zKY3V1Lx2ye5m3t",
  "key24": "3B7992PbvKeDQ5sYSZeEwxrBehB39QLMwNUxReka5ggbWEQEy4DSdg7RurXW1reBrXM3sustDfhG8BjEKqLKpY5K",
  "key25": "48df6FAw3R8qRtL44MsBPrGXEqMYx5u32mxLHxKmkyztZorDXWQ5qVYQnq2ti7FSAK4RRpU7K8ETGfKJ8RtGuryD",
  "key26": "5SEYkHtzh5gxoerobf9T8tQ7NYu3AZ5BKknBo1T9enn1XLjyFdpVnQ7sMnnNhv7tcNN5DWtTEGbVDYkiqddkES77",
  "key27": "2WFkQwYSCRQczxHkXWKojVjN1zJ4QNZo5N1f5UtbsrnHiyKuNDwThWY5CQnfUJz7R6dKYMTzetRFtBy55vfhhpnt",
  "key28": "2MjnECSM9QaXgstDQb1nByUefHgcAvm26PYCcGuvEuVxv4KHhStLciN4pryyhARKWPqnFnWToEUBv6avCTr1DtBg",
  "key29": "Gi9J2s7SmEYrTY1dEGcr1WStNc4rxfAjomVFKXxz77NBCsUortfiTrTn1Gv4szRmvS96mu9g9qsD71hz1bqVnic",
  "key30": "2MRx7917G7XpYr76Z6vV7e52N42bijNgqUisAmFGe1uXmoFE1gD9HfkkbBH3g7heyMnUY3pWTBMNJj9JDn528y62",
  "key31": "4nBoXT737ntdTKkD5BwpTm9RtnZ6aK1FTJyydtkPH5vRQ95q4ggdEcqh9fiBfC8DjmrcKLMNi6A7PYGtbDpCcUxP",
  "key32": "4Mg6QzPCTMX7wnS4vM9T473AVZdNjHCZ3fdcZvA5CWdhUY3BbsZC9HATGsSfyx1sjwpYTVmwacwxGhKDsfmLrjda",
  "key33": "5BAenpVKLoPn5s9aMfeDnnFXNPiDY3o9v2Az9E6nj7sHnJPXLrFcKfNEgoWHQRhzYii6CHRdiQQDwZ6SFqfmDwxW",
  "key34": "2MnUACBorLVGKCKe9gEZo4CE6v6aV2Vot1Uz97CqwFoDpgDnQvAbXBRaLgEKemmcj1ut2LXZN2UdHSNUMYnezTtY",
  "key35": "2m4UAh6c8ycytzYxv1SFhjgTBYCWMNmTYjU1V3N2SQXsGFnrNaZQHHKDTiWmqtFwxFfUi2SUf8GFAqHur8sS7DCB",
  "key36": "5C2tzbuKnRqnTMFVwewpvca27NeXchgxSRP9gkZUsefWjbvRvRzDN4CfQk24GdsRmuryAYiMqT6zTcbD3vaQ5DUX",
  "key37": "4s9iAbAzV9jJh15D2RaWWyLpRpHfAkFug1g3SgCLoM1m6FgKN4AMi2hzqzF5cp4Vp9pq41cCUU7SJuA5HG8tXCy4",
  "key38": "5ano4kJSZxNu3GJj2V9zvt21MLQdYwacF7r9Tou7gVGaiLkxmktFdAqcebw8Z8x71mcnZj1JDfsWFS6BViU8BxBu",
  "key39": "PDLaWHvUrHH6twHJDHCKUhN3GGyKmZvkJjYbFCDkLMR3bk17Fgt8iXFgidToK7o8t59aZp6UvVg5qLuYRvrMyCg",
  "key40": "MabzD5KoYSyKPMsUThCqS8MUu7ePTYRKzLRh3eRzBnui6Pztus7vR5hwVgU1MSMVxHiBCHe7Dk1WrJgDAQRYbob",
  "key41": "4eEVhNYPBWyL3AnbRsqL74PbXopFXYJq9L8Dxqte8AsLACPMV9EtiRyeN38tP2j9zaNujoD3ddxuFV4QA6RRA9kA",
  "key42": "24C3412gykvWQHr3dW3STVHyF7wLRGDaxUzUA2JvQzituE6gy7JgT3zZtMVyYfHaPhpsusLaijtXLA6GdrXt2iCv",
  "key43": "4oQPT1h4wARRNM9yuMDXyDQN3tA6AVDGNju1yvGoKRtJLEHufUwK1sS87gqAQrRdgrgWPjorwPuYipg3m9J2jNCY",
  "key44": "64RpJ16kB9CpYMq5yCwHRdN6b9bGvNfqT6h7PedS3TbJPejhy8UUtecaC5JdoxaxB8qrS3vzpbGwADmP5wof7AEQ",
  "key45": "5EdBd3bf6X9Dz6xWcM6CbCmXaSEcVcYw8uvFoMCCjc2idJ8yeKuGWequgetXg7BdEWdGh7pBzWW2MvgcGBJzyDpH"
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
