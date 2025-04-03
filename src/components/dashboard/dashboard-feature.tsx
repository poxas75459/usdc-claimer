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
    "sgB4gTaV7ftkb1Qtvs4G9e3842VZ6wqfcHMjnTDkE6hLiaTf75zRYC6gQabskxotuuGm4xdqLfuChEBxXB5DHBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLJoX8k8dtPvH53WA1nSrZuv6rQbKC3zV5o6LXTHQKHF7ghRwHJVjJT4sxsj7RmH26ckF5QuSbDHW9sYoZmLE98",
  "key1": "3tnXgH1vcdqcrktib1gPKZERUkdBd6C2JK16RSBpbHrQe9RFaTn6KufcspF6Pb8wob44b4pMmaAMqFwHaRRncKgN",
  "key2": "51eXqTDP8gHKWHRFTjRSs9FsS4LdGKjsiWg8bBWUq7PNKPUXqt8CiWbb4wqL3cayVQjr7Pu6YHZg2JvBrXXiP4CJ",
  "key3": "3Tut1oex31RgdARhq226wGxKzK4yHt2aJjstkqa9adN1voHib7ZA4kjtYMpP55miHvrc17vAZhm45JtGJvd2w77Z",
  "key4": "54bXCvomCwctVfGcvHm8uHsD9fp3qL6ZC6uLV6x8Z8T3FwFGN91rdiWL2f3nK1fFSoFxMFiuXFts5jRkJHbMDMVH",
  "key5": "PRFV2W3BZCEjYt2KHRzVbCcYyXxiYEEGMeVwyTnhPsUkdeDEUFFUtN6m6iRgvQGuiYpB5AT3cBX2BQG5WCset6x",
  "key6": "4cmKFydzV28VTEosbuRae8C8R8CNHrY7b524NaFdZg42Y7JVE4YYYVUNbDT9Q5FFcqibEk5keXXjJkv8PT55zoXe",
  "key7": "3npc2aSWEH4oBQv4fXZpCZUS681dm9Pf8nwYGnicTkuBNHY8aeSjDahKxEYMU9DBNCPXvQuH1Uh3tQGJqqdYtPPS",
  "key8": "1ddgT8aW7agNAC9PRzNV3kJRodg6CGudACbAmAN21mKjbwVXcphnTXUTveR65W2Hwr7fBtrmhM2sqyr1XZNVGst",
  "key9": "2mSZdtn33D4eeAeBPaY4iU5SaNoYC6jiWBfoVtNowAnGym68TJQsSeArTBiZR9B57DybpciSKds47b7HFNbGfi2C",
  "key10": "7qnm9bJ255qpWcTRVZ9dXekT3sLiYf2V3TMNEvibM642xym3xR4dHLiZTkgEKxAjPyz91RCCQLEYEc9f35d1Gwf",
  "key11": "y3CeVybwnm8Efygm4t11rZuN3wCacea8XMTLTqoY37uZ7cA14WmpAqJmAWTik14zGMwQJxxJEr3kzQ4MNYzTCJg",
  "key12": "24yd4jq1MAwkq4nPZfnNRnykN3WYEYUCLKzRLozdFWjDWdEL4Cg3SN7E2rFeRtNCjaaQZcUYSUacAnxTtjoseqqu",
  "key13": "x1NkVsK9dWK8ZCkgLQdAXe5jE5sSBcCgiDBGYT24UjEJuKHyhxdpe4CuKZXCPin9Az6ABJN1ksSQqGFogQpr8QF",
  "key14": "qnPGb3dMpwDYG7FBiok8KZRk18ewywFNnTQc1bPQ4sC6iZw7UJPRnbBDjS6ug4JsNBpgeCatv1vtGvzW3GEPRot",
  "key15": "3mv31StdJaVpECdiU8QMw49HQfuj5uZEKQDTMLpWWZ8o4qgu1vqhfWnfL4CLgViqwWoShADchHQiqHV9699ndc6c",
  "key16": "3bsPNXH2cKCGNzmmT7ZQ6PM3wRvqUF1m1xePQHTSX2ai2Fh7PS8JJGwxipDFdRM9XFDWfJC2FpTkf1bspkkxv2De",
  "key17": "36ZJQ5tDCwgNrj6PcT9xMtzmmdsfMv6w5XncykNh56yv2dnY8GocAEb7DAS5HsgWEsp4E56BZ8VwmHBrhH47RD6X",
  "key18": "49VuBVbPYYHjL6sE3RAzWNs9ngXo4g1VJywFNGTbTu8ZHMbNQXN6Q1UKsmq7GwLBNE3NnAQnKynkt64Bq8UjMAws",
  "key19": "5XhVQ9tWLHQdoDCWyRUfCSkwVY9sD8EuMLjdRTAZWKqDHkuhWVKzCfK1s6zRJPgpMNfuQxSwqV5ZHx9XZoS6BHpg",
  "key20": "5yb1qsWJ9ZjMrArTn97MvfXVGdNrJLRooU6b1T5VgAz4x1heh2cRGZpm6LsPhkbyGw2u2ngHBC1xTUJ6ce3AwqXn",
  "key21": "5jHRLsVThcLbTgkf7yjPrkqKdCGC8jNCvzTgRpt2G8a8VmP7zSjF4xoV4g51rXVh141nyamf6GyhDNwVCy6SnndC",
  "key22": "5VZbhzf3evtpaC6S3pvs7ea9t8bmkC9awijnhLVxqdkbkLqVzCZJVPagLSAGoFy7KoYYPt4vfRM2NBVeYKMqgHx8",
  "key23": "3v1ehAwFPrag3j3ibPvCUs4Mi3ttGuEGioByMk2BNh9HBhrn9FxiHcRbmu2KZgBXSsDyEPkv2H8ve2CaeA1BPULw",
  "key24": "2a1cZyMdX8jd4BuuEDRjDZRBr1mwqPR76gaXXmQCXBh96gF1uhkJDh7YBKtaLMMEbNgNW4BHy3crt4SfAriApcF5",
  "key25": "4HBXoTpRYAhgvqCP2urXduW6wAb5qamZDqym65A7Jj7rWdSg64mrYkgHdcDgEPPgj2XSHArvP8Sg27DEJrsFuZkL",
  "key26": "4hVf3xgWXmiJQvwuDbEXTp7MfrUCgAmCvnMM2bSBmrBaEPXoxYepGwVoZ39j4CcKqCpoo6cP5Jbmc6AudDeQ7zNJ"
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
