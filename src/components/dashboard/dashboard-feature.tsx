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
    "41Y74cpfFEfuug9PYphPJbqEP4VuNy5vEW1Hxc9kiwhsrhtxwJostgkpsAhocN69DWnt94JSu31jU5xnUmWJmYCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124nDM83csD7gedAcwkawJCQuq3YmWD6ZLW9ySa2v8Q5KW21hpwSAk5Hbkrt9PoxBwfABHBxefTjXJxWvr3GtMpX",
  "key1": "44p1gHsaV4RYV4XEASMm6rEsnMQTSg1AJraEgw24CpNN1SZmiN2yiGweHuYcZXkwme9Dyj78aRqUY1GkgJWvhC5U",
  "key2": "2bUQ6DUihUDq9ocrseKysvLNwy6buDfz8x5SAhM1j1XG5uYRejxz6hhmgs3yrMtG7kxcc6ZQTCF7AXwnRLKZCr56",
  "key3": "5T4VKiFFQVn3vPVzZJzkTKaegXS4tpDuRSYystD48XLQWVaVLQy95wUgv9QmKYJTGe31QhS5gaY5KzNAAdsV9uQZ",
  "key4": "aj7yDqqewGdtAqv2oBDhtFQqrFHjpB8W19Zqr9VhWreZFv3EqqCBSXzonRYnqYHui4Z8uVsNVrkYUNKXQzbzi4J",
  "key5": "Xok39CnekkGwER6hJGUDVcpNLmdicpc6y9ULMp4qL9CxQcf9Lr779WzZKG3M7mck2ydxzaXtNqizXhe1Ctqj127",
  "key6": "24JT5ojJmTeycXweG7UCmttnrrP3ydM6y4zGWbuoN1kSwW9tCoJDFYrTy6jTcADKaFqekjUwxoXuP8PoxXU1kZfZ",
  "key7": "4u7kbhzCkvixPAxBweRz6rrwE9RdTKhLskjaDB4FzMZbSbAZBvcu6X8hiNPvCMv4GaozJqg3HDt7UDNp4qm1b3hp",
  "key8": "2ojvRm4vtEyqsJUitvxT9Z3ujAA3SCx4NR8nC6zaPPJoz6rRf7UdVMKfyahF9bdoH8wcwi6mWSt4MuBumpLGeHjj",
  "key9": "4iU5s9JE1WyQCouawg9kmk5pGfE1Y44uMTkmKRi8rGQKQafcZ7xFNYNfBkrJ5Dx5ht7MLAzfYQ8YWiT4sZUxvvbd",
  "key10": "4tqmLZxEfyrtCbeL3L5SVmFPAYVtbzp8E32LxFLRMUdtysV8eJqpHiKZi2MtB66w6zXv8sNNCB4Wmk3WvRjoyi4P",
  "key11": "4nu6GyQYne6jysybxGbzupohJ6n7obzrb97QKXExgV8u2Ts5o2ENTfHHB6xSgEWVdqt9ehyZnWNXuZ1f5UhNbBcn",
  "key12": "2HZTPqqKeQDUqkdL3QLqkXRPQsw5Xcr4WSEtK8q3ky49ZyswHU9ATipC14iLDzmfLXTqXYLPJeyzJTTZbcHwfugg",
  "key13": "59FZ614KYYtVEEEJf1ergAmUksosgCo2xNvB1qDi2qR9Khdqip3jpRAa2W3y4GhSRZYBsUu9P4PH7ybg4NbZ8gcA",
  "key14": "5rDfJqF7Eekn7yJoStToMkxFKYGCWNfBYV2hBfL3FhJrHfRwhs8tPqVXHMteN1jq2pxcAiLwjr53VShXEPmCraoP",
  "key15": "3DUX2GiUxBgK3izk7SvaMJSQX5TtMTUkB5pWNcEWAnDjeYzyx84RF6QoPKop78c2cxENN5mrxVqfY76PR5ZSNLq",
  "key16": "2SeBDv8Ku6wSGiGyp7ySJgsutD2Ga4LonVSYvQ2JwcBD9teFvZLGCE9Wu2V9pjAFM14bAzHivW9ZYtqLK8szc8FN",
  "key17": "4Y1or96E2sY9dvT6ksyZueSpZ1hwMTZBopSShsSNLtpEStZtcxLbsoBQQq6YaQ1SUjfVi5tknLYP4mtSGb9TabdF",
  "key18": "TWozf4WwtsFsrLbFePCNGiw8Y32VnpD53vyLe4HbKGLSTKGgJQ4mrJdoAbcjysz626DHkLqSQt9C3SgEgfAySWX",
  "key19": "xfea7ryT3F1WsKtyScUcn69cK7JoxVytK9VEtqu41cpWZrJRdaCqBevZU2oc8txtQB6KLcxR96Xo6qdhPypamtN",
  "key20": "54kHkgJQy6YnkUy1rbj1YZ1DzuGyn5VRkBEC9GMrLxNJqoJUMV7rgJ8wpDKzJaDTFp6asB6mP7ND4nBGcXP74qHC",
  "key21": "5vtcAbTjkyfnKVN4djjKSoeT6WNkJ3FfgxAHKGAjGFVwN3qJj32SWoHRQwGvQqRjP4Zaif6cMsp48yFrC4jQRTZG",
  "key22": "5r75dQx4ZFBBg45DfdwkcyA6BKeV3DMkLc2265pXUp4YzrpZcBGzGLaBzLtrzE9KAugrJTvzg8B1u9jac46BTfNu",
  "key23": "3WGNUeRQxsjbm3devh4yrPn2CHK4QZqWHWMjr82v2CD6f8yTNFeLc2yLDWKf92u5bE65yh9a7KKEhZs6XzKVop7g",
  "key24": "3TMKkWFUMDkEP2HwkTxeyYwvZTheb3yF9z84spKnkk1xS9aGBcuB3SXU9P2CK5uQw4jB6pDPqRD1ufPnHSSFz9rT",
  "key25": "2mvhXyu89kJgtmfh9AGrGY9wVYgyuxEXaX52CReCEJ8KgcTKJdooExiBDXnTHs3ai93MpDDhxMmRZuw42FaSqLhq",
  "key26": "5sg6vfaJGCWTXKWrqcn6uhafTyMtT9rE5ok1AxJ1dFsdz5WDRawXvYyRjiP6d6BB4WLbsRzdYWMUdrYg4XrQ2eXj",
  "key27": "Nkw2U7Wk9mZtL9HahdRB6dwaTUeyCNkW9xJ4FMuiQx814BkHdFbqa8vfBfonVQ7FLiNz8ZLVPaMrhhaZdmLj2g6",
  "key28": "2GCSMyncexsZjsATK58p64tT5ZYDjHB7ssLgDCmWSZ9EyxgDKbsovLY7Zu6tpHJfZ3tokXbZdQat4EKT5v7En4wk",
  "key29": "8zjPVREvSXQHHsUoB3Mtj7dMJztYXBD5urDyaXTtJFvR5KtU3oaSWLdsaJhhFkwFNg9ESc1TTtn4pJjbDebk8hd",
  "key30": "5zS3hnRchLnnmxL4qo35ub8h9aJMLJTbMpw4pxQ2HdRfJq9ghNdswFQcgWwqdv1VLHcjG34Ncuh3iZVyKeiZomhe",
  "key31": "37hvi8yAh27wkLFsq1GgLFWXuvdXLzoRZmuhLDUR6V3J14G5keNw41uoMQJ7LdmeEKhysoMEaB84ZYxrykLKfgWb",
  "key32": "mzaMV7Hxu9EPJTEk1dd92j5wG3YotSbiY8fBzgQVPBefMt7NT2yrsFnRDT8ZSXD37ThFyp2RiVVBtjRwjExz97C",
  "key33": "3SMqhynH8t2cicBa1uTP8Gv4L1J2XjaB3ENDgYqjpcLrTWsB1vwepkcWxa9AB1ka29YYovoqVuiRPJxPm4tP5M1P",
  "key34": "2K2VUQjTuGc6Bsu5rhStSinaiFgKVv8wdgZZBkRoJD9LLZeu8MDNK1xaUdDGPg7wRNPEo7uTt7oUEiPkzws4fxGV",
  "key35": "2ag9AxKaJQjzu6XuhMWtS4pWZ4DzdTxqvBhHXo6KdAMqcV5npCfiNdWngKj9zHM83iqkYcfuUpcsiu84XRnDa35t",
  "key36": "2cvV9nSfvBd93EHWgrhYAaaS63GHNiHkiB5pCFjEVkqCnCUr4iw8FQhiKXdfbdvuJymjnhgd4yKiqsoYzWfhcHTr",
  "key37": "Wnt62f23kVa7KWi6gQNPXG8y9CCkZXxLc4Enif17SqCZ2VXuwTz99goECWxUszogGPhW88AiUxcrfCh7siWDacm",
  "key38": "4mG3jFTqGGkLrYYrvfDxUVgVWDfHgukQSheuAQ6oDaY3CwMocdwiutAmyPG3gXrFjUuohqsJU4L3JbB7aKP3uMYZ"
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
