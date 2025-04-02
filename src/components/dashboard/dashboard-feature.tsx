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
    "2cJPbFeh5zRP1Hy6jQj1q3uYpRWJCmaJCtgwqd37F7ucfur7AerWUF73gXAuALKHo5tKsXtPNcAcZSztBr8V91hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckiuT3FwRDarPLrKha2BndFw7NHbS3xN33w6XZrMQ3RXQhDC96nAF4c7RmZcx9xg7sZ5moRksjnWb9jp476jk7o",
  "key1": "3cKNvQMZh973Z51bugFmPfdXVJcRtzy9YkTdG8wS1TGc93xf4ooDUbcPhZT1FWhP5F9qo2xfv9NoEuMJf9NnioTJ",
  "key2": "27vvoUJdfGgLd2Dsij2c9QLQhHapsPGsp8ivhVib2qvgqkKc9z5ThNoPvJJcwDox6d5b9cZcEBzBGRmBREhRR9NE",
  "key3": "5CRiurMTdtuCJygaDfQ6LGPHWMVEQpub4JwcgxkkibCHawHyX2v1yPbLAcPv3QiXW1hfonjF9D3KWRCVWrR6BwtH",
  "key4": "2N4UFnuJD8fYgVFCqQfa4mw6kx1tWstjcXd1bhknhxYx7j3hNtea2dVKCBp24rH6BkD1hLZfGrdANuvmSrYPRmDP",
  "key5": "26grWgiGar4eHqdGT9RaXP8EPEqGbC5idYrGqdKwPJNDju1MbfiLCRYhYFZx7qFQ225SNe1dPChwExdmcXJnzuih",
  "key6": "5KDFtxtkSwC3EmgJegRWmMT67iUWir3xsrm3yaoCkGNBky4XSG1Q6qCMjBngYN7nTp4wurawh6J39cEgn5bRpwxD",
  "key7": "sUPYAsLtt9gnmhSPuTwXFof5r2NVLCvy5pvgEVYhP3ZPzGgSptpXE7mje3ZJWLvw5c8WJruD13uUyoUWbc3jKnH",
  "key8": "493Rmpb7gGAkQXJUBsx7k8W9HBKbKEF4ZWDEQnifVNRMba32yzMd4ZoZzSsGfXSCHhZ5TuW9ovaMTYH7dtoRi7hg",
  "key9": "5ingM2r1pqVDGKsYDjFvKG5mMzdpjCXRUdJmNtYfn3qvESeCZifUeuM5TGWDRfbnZrQha1Xt9XowrD561tcc2cUG",
  "key10": "5QhEzCWb99XsVU3qk7aUUsmxbDVVQyFb9sj9DebSiu6kyFdtmt1Wu8mFomEYiY39f2Dh9buztmNMyJ5Dz4XY1Ywp",
  "key11": "5sDv3pr4pYkZTBZMvganwtLfuEmAvhhtc2PFKeX9rQW7Y3ytSrtk5Z73A8kzqRSY7w82qfVFCuJJponaipDCxSPy",
  "key12": "5DBACvQByjKv22cyuuV3sR5Qzg5dpUiXzUVvAGaMF4vdfPdpBwfyMJU2QANvYNWfKLmKK2JDyDdU6Q58BjDYGbDY",
  "key13": "3b24XjFHV93HpgjSSB7vfhz4HtYQxuJGXRdwdWvBBesFXEuUV9hWcK598cHQfJbXbcHSLg1RTsFZ1Ro4XzUSkQLH",
  "key14": "4m8QaaS9LommRs6jeoVye8zdxgmgtTmUHV1zAgYNve6xqXkAh9yaeg4NbQ8BR5aCorjnXCRXCncbRSMFLmm4a2WP",
  "key15": "ngWt3uTbJsi6QsJiMHnCeoNcvh17pEJ373XRgGjpYWz69b9C4AzbK5pW5uwt12qH4kJXGghT7viP4DKnux9Gtsx",
  "key16": "2ibAVoVEEKGmhqpZfFc8w46Hes7SWQphfQ8gUfXXrvPurUpG4rhSYQvpYmtvrH4YFQPLqTC6mDP5T9ZA1STAEsFd",
  "key17": "3qKGp4bYm3uFvaAAyFLoWmsWwKLsTtwr2FaEpBbnW9FXaa3vp1dHPidx974wQcZM3PD1eKm5u9S7Evy3qRPNnoet",
  "key18": "5i13aAuYRJApLqb5STe1donHkjgnDVTbCBXumD54saX1RHoUZW86WxY9fmDLbRJ5v8jZ6x1Yys6QQrYVGca1CvA1",
  "key19": "3uQsmDNBtDsaxjT8T6oY4Xq3p9eK6A8StMLCQMWy1vAy61rYszsFwxiDZcz5RAXsPNvzbfBpRh5jgH9RtBF4Y42E",
  "key20": "4R1vPzL9WAd356CZNkfud7Nar2tXoiR8hHWbECs5rqXkTirnR9om2BkHX75qK8fC3UuhTvEiTcUnw3aTuzRhKtTH",
  "key21": "48anTEuL4raAjVuBWJXZtHxaMCmnNDkmmQEaKiQogk6XY1t8RNEYyfYBmx5xaLCnTXcGJTCuJwRkAW63n7DUkhGT",
  "key22": "5sjjKjiaxDf3tVzcMoB3TQ3xE6962YSgJuUv3LhCz51TNTrBJDPQ4V3av7AAuuSPAJEsXNhjj3pTMUsmCcKdwCkD",
  "key23": "2gibfre4YW5r5QXy7ctLLaN3sEh6Pe2GdeEWUZSuk1NaHo7TnDYD36BnziU9SY3wDqhugxBrDC5cvWiX1WUbVULN",
  "key24": "96bbFhdfHMjBanbq5uJKg3GPvJ51NjzraVDL9DH6PR6Tj88fL5Q13CGAti7BQ2zdkdf9wo7uqaHm3fKzbaVRNUe",
  "key25": "2YRAoLq7jCREQ6duNtDEdUt8BQGUXJLbW3jf3HYEMqVdedXe7q2w6v6TbUef3DTyadpwucHHdkrUiDJwDjjn1Y8a",
  "key26": "3YbfePKbM4TLJcdsXCxBJZ22u1aHuw7JdLJTyAf34YeVpJPMd8n8g5CJ7cXUbRcRwaRxwQBZ3EtyiYvfz7pH1MjS",
  "key27": "4P7F6ioUGKUWHsUaknFoB7kN1z2bxv531GQzv4XkVwCFifQNvFjd3ECukt4rzRJwe3raKDe3BpsyKkKFgFMef3mj",
  "key28": "3jRx6frHbDDRSccaxFqfr2G1BTpu9ggUxEaesgVaTNHJ5hS6NkLwtbjwBdYCUAJcB5ADft9yGtKVvrbLAEcPUrXo",
  "key29": "5b64f1UeQP7WnN3f2U7bYMMkHBAmvTHQQvFhDMiTNT4x4FQ8YwFgfxdnjHewJz4zbP2Kj6g8UQktpi3g62Sb8xEn",
  "key30": "M3rjM1uvBuVTCdpvHbtJWWkVeVT5Q1BMH8kuKja3WTMQ4CWjBnrnfVT1i9qFPPSGHj6EgDBcHFzbEpd5Lof4EHA",
  "key31": "4nqH3zbaNUdhCKddD9mVH3nPurAJTLpAL9WLZ9XTBD4vpgiR7P4hCxCEbpcnyGXV8ucQCbz4BFWuPdVqQxfeUV5r",
  "key32": "4wnoPqgLgtjwSZNBpiXNC8XXDSrq4GHEuBCD2wLqxgzo28ZZtprWJi243Qy8GUBS2tPK2PJirNfurCP1nmPDeMks",
  "key33": "4aTYFawNYnx4jreWYhBHzFxZjf5oY9VdS9KMVuSyYFAqzswkmt21t8rQcnDQufpyAcbXG8V3W5ZjbXPiS4bmiq1a",
  "key34": "4NXKCWNMLkgWW4wSa2ipYwpFvWjxyLJs3KiQcarPQRZh3uo3n5iipdE5BMWVcK8EagrvQikLg4q6TVaRHFctZALQ",
  "key35": "WxXAbiyEUbTYU7h1NrFuPpsZd3GJ31J81P9nYqV8z2qbQsGPybEuvF8i1mJ3mTX1ZTu4mME2YJbkJeu4ijwmECm",
  "key36": "42tUpQGdDub4nReUXHyVXVr5XtXJc6TwUbNXQ2MnK5gxXYJnaK4x1v6fjofRRRejDp1z3gZ7xyE4hxEzuU1ZaE3A",
  "key37": "4zxAmu76KnaJU25re5DBHiFUwtks1ZUGz5tstSgv4A97ZxHmmrXisBD1g1YS8zsnjVxzLP1MFE5TxErJV3FXQ3bP",
  "key38": "3iPrW2v5d3RdaFLxwACsGr4zWwU2G4xqUJyEXZgcoQsmUHtyWAg7N8oXsHLBBQyP1L4VZMFYtUcfrxVRMWQ4A8AN",
  "key39": "49xENu1RUb4f1srNqs1JC2gD7EaRJFbq2gkwh9PAMLBpTUvR6bai1d5vyAULJtDpGcBCKmDwh9b8advLgMcvSYyM",
  "key40": "YkdtYszWhS1qi9T6pkDooo8XgoXD8SEcy2v29vqMyV7kFrg6Avz3qUytuTWnU3w4rJH6ZrPFsBmd3CapzBC2BKQ"
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
