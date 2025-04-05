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
    "B3KgaYqhpEELaW1C5wXaL698Hyrumvq4QHSL6Bd1KmYRrRyAA23ypeZ1sgxzvWoftMaYP3mhGkieZGxvpzViJjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jupDKRRFvSjESLJS1SPH9B8omoNZaZQeovnVrPoZfbCR76pbfuf2RZHZcxBewew9coPDaUDTuABLNZ6Wo86zFjV",
  "key1": "4MUmFZHx9k5hUZ1dWoojZeFd8o28DjGvdLUZtaiSMJ9CHE8yTGVK6WE3tTuYmQCuVUa6mvTEWWngEQ6EFKb2rqYc",
  "key2": "4qdaRameH8Lv2gx74RmTYJwEiY8QNDoRmUArW4cx6Nos9mzSXcGcsCNbXTWMNqwXGUUz2NAFA8NBN1xVj7mpEwV3",
  "key3": "qhpYLmhHHz6cuJeeAefCb3ZBkzV48T6Ud4g7XskGCeyw9nEU6dU2vUBFLTcVhLee8iWA2NpeDWp6vdrHRRirKAk",
  "key4": "4NwwjWdDu1GbAFst4TdsWSGwy8iXHEz78SWid85jwr2v8aG5PWcmCQBQzw7v8pw8ojtoQ3D6DGtyWc5SEf24Lv6F",
  "key5": "2Sg58B838NmAX8pJxDEewWhNWNKz3CL3RUUpAPCuCESucFd76RBmtcJqQS3wW6FH6k4ichTWhbLU3Nhgz9EF7Xvx",
  "key6": "mSxHtzY8hqhy3wqxYvT3taixB77ij5Et77iAudYcap2VcJpUoD719exrnF7ifx7qatx8knwaHf2R8J9k38eMP38",
  "key7": "2tFBQ23TQ9e5A78zMeyNom4Yk4KV1NWuyymxv2x97bBWRXezqnGZqJHMfihrPp2j6wQepwsDaZxdW1vm2vwf8VJK",
  "key8": "qhpGSM7oAbvqLmULMrjEbsXTWJTVc7sKK8VazCYqtD7TZFjBqDAvasbuM9oAA4EreZN5iKnJutboD85hKuLRsiM",
  "key9": "2vCd5WoyhuVEwauNgHDVoZ3GCH2agtFBR65hQPYLUMteM2AS6DJKugxaVN4dARdswqQ9rd3Nb3sunrvoGdxETiSN",
  "key10": "rZdD8ULV9wA5NSfVwNNpNT1c83jQczHmCrG6ZrvNGTyFEnJpV8EJbts31pWcHpxJNf87spLAhQ2qGXDnF5Eg6M1",
  "key11": "2WBLWrwZsFgCBCKVYy4k9yB1zKRk3qjKhyMfCa54LfHFnX4RA6aT2VGggy1EXPxsRATe3CEzVEbTBRxY6Dkxe5EE",
  "key12": "3kQgYugSJ2Wb2aH9t7bQPrqZNrTMcx83La65a2RSggbKwwtkL9QL1zQjfNdToYdh8tMFzP43yEHMRMJUQNwRXfsq",
  "key13": "2ZycDbxcZRKCWWNbKBEYXMmSiZwgEuqYoYCmaEo2VafcAJ7xs3n1HyQ81GDUcxwRLasyBBX2d5jmg2tZadztzbFY",
  "key14": "GJhaSsMsgFLL91fvkyfL5mw3d4Xc2LhHANzvhKNSqv1wT62MB3T91Y2ajJmJYb3tWr6cotDRuEkd92R6WxMB51g",
  "key15": "4ySVZz73BQPu2H7bCYC5Sqyad92Hi6L8MEkuE7c6wmrexzgm3SobAVe7FmwJhHiEEdR45x3RnLiPexfMVuTGuRaP",
  "key16": "2RP2E7fsL6qLupAQV5YnnKZGUBsYWBze7auLfSvjAfhbXCiD68MBpms4CGBNBWyWsNbgPJHLQFJ3o7L7NhRvFqtr",
  "key17": "3KYuSVgoYCgqTG4xN2SDHc2H5XcH4q9QrekFsNjkjhkbNNAavWjRugz1xRRJpn2Ajgasqkt3DuDPEWSN4nQMReNp",
  "key18": "5GMLsFcJt96L4QjYx6TR5y2P1oBjWyYFKsckUUdUX6S7bPssgWEpeG4DsG8Ktep3A5pnpts1Va5Lt7ptWLq46vvk",
  "key19": "5ChQkdBmAQX38mDEsfhyFVvgkE9My4rz8k3HRuog18zEWmhNmmhA41U57WeWrFuUb3mSxKXK6usvmCctG3WUuJ1K",
  "key20": "4nAtmGneMaGtQzoHP18ebXwaMWjQLftdK2zdnUj6SZgv2iXdyECyt31YMkjJwFv8w6R757H4NsxMpkaADdJ28f8M",
  "key21": "2YRUYH8HUoa5Uqr1mP8KGJtk6KwZ2A76vwFJEc3RKdTeGBD9swP8Ztgj46AeD8Vuq4g5qbo1tNddeNqRNGoNWtxo",
  "key22": "2uF6NYfEXGx5p78TMMxEyKQbFPSnYUbekeAWzA8CXbGMTChcdBYg363iDATPfbrUScguuDUNjz5aMaBXPqc9AbJn",
  "key23": "4c4TQaEjnonFLBYMwV7LvvfjqxGaphQf5Eyk3DgDp9tLViSzR8K5VV2Hk4t5WFtJc9hcZYdnVLzzrVvQrzMizGcd",
  "key24": "bZNMcbJzjxdT9yhjn9C8K2yhQKfEES1vouSzuFLwv2yc1jg1ahHESrUgKnuDrYtEkuT23RzauoFNQFqR5P4QC31",
  "key25": "3LvbnViPCKX4GhTCkZyxPY17EmGT1vzsbKKhHyA6TuqnHhPSJYq3s7hS9q7dE18jMRpYgKimUcER6isvWKmYRo6E",
  "key26": "63maW1DrJKSXtjN6kMR6yPe52tVdbENMjVHihAe4ysVxLYttq9Qb5ogH3fYXCxU35EKf91J8RzScDaFWhxJuzVRj",
  "key27": "4XDF7zULevQufwkrtgQpwjy2PcNX6hgJX2WotfinrrFohpeuASWLVUM6QWRN1FQPn6vyTcJnSYttfNkiTjffvsZw",
  "key28": "5E8VFpNZBQtTLyuVLnWJq3hF2nRzGVM71KKK4yuyy83pfNH4wh83T5X5SVF5nPuJxuy2No62EB45kcfZooiaRPQq",
  "key29": "51FicJsX44wdUKMPiEYJpKLR4Y3cuwqZDWG8pEyZgNvMcVwP7RLAGkepRUGr4WDu24urdXduaXbVEsiqRn9diHRK"
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
