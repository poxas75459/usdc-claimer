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
    "2Ca5iA6EAbi225vyJQQDrCGnN3BieYJdFz72txGznwLxBBTzgCWU28C2R8srEHu1dT3Yywy3Vi3hzg1yWr1BvQ7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yeQLhxgKGD9w7WwRtPzGWFQXmWckbNSGaERsrGUCvvHEi5dcbJzrLbKPMFZdtfVLdKjYBUy5ZefaWKuq5Wfs5Xa",
  "key1": "57qzb3CHG4yA4MRnetfYsfrVVbGxL85Xv9NEeiohfq6HdnYP56a5AxGRt5wutrxUTRVoCHsFEBCECrvDRQNub498",
  "key2": "5eQtn5HeEnmKKSirwkNWHQNwkE4cWgjkJfWvbsNxRXTXDPze5YPYMjjzcjeRTFzUGk55T3GvFLcEWXFZnU1oxTKr",
  "key3": "4oQvefxDVqpQqkCyv7SXnTepvP7rEi9u9YoMHoDDqnjYKtQKixJiNev7HLf3Fw2UGjmjEvHx21edGrcVyKx4zRNG",
  "key4": "5U8DF956kcc5iL7SPqtj5raCHm9BjRLRyQXs8wXH1n2MEQsbRLiRDqNiKK961wyeNB8H2kVAQoTENU7X9PNfk9s3",
  "key5": "2mZXEhsJscfcf2jjhNacfJQJXmaLzcz1Ne6iJLrSNAvKzhPQivgiW1V2UD6Aw4bvgkV9CNfpFYXQRHDwnwdFTBsR",
  "key6": "2qgePynRAxSVyYTFgUPpz4DJcevALBTy9rHdK9kE8rr6eKaQMXKML7syyDBTn5hphWek2JaScySbjJ9XkCtQz2Az",
  "key7": "22rqQbxheLA4pJGcyTZK6S8W1BB5rpSJ8nx4Dw8heTdzUe4awJDyTujJYKCCnBux3jzakqFAR5JoYAbCpjLTqTGb",
  "key8": "3vcAmHHuq74zpGTLX5PQXpgwRK7f7mo5JaGjJnBY4y1c3TQLqkY7jn4j5YBUskWkC1N1LKqjcN1emH1jTX5EH1PF",
  "key9": "5a2Q9kCiF42Y75FaJwjDB3sRKKp368yS1FWhKvoJEUBWcjPXscz34AfH1PzCPNeGMXebxYaqNRcsLMS3qGbVRjGB",
  "key10": "2Mx9vEboLG7Mbfzzx8J4JbwexUDt3N1m2eEj1PziwDf62MiAMA2f25XkVNtZSZra9ihLEGj3FpF6AzyJStiSJmH2",
  "key11": "5ki7NMEd9yngXPpEGkXYQekHS2hxujfEP64stujgEp6p1RHnU8TRYP1MTF6L44dGd3i2Vu5tvuwaFXnbjES7eezt",
  "key12": "3vysJg8ygwoRnkuXFCbjjhBjMYW5Z2Sbb5ZrzjnZ5cDfaaarV1T6qX3GLr41gg29T2mMuJtihBugVfkAsQx5dhcy",
  "key13": "3WWrqpbDqrAR2stY9D9rC7jSA1ponBeYYA57eZUV3By2fHw8rVHaGZX7ibFWTKFeqzPXUKqHDr621Ndd4ZycwC5c",
  "key14": "5CWpeqtctwneccYgAtfYuJDTSWTJnqN8FXfV7mqSKKaNXgHjoDR9pSoTabx5BFW7U1zjVyGcTuCsNc4c68GXxcKn",
  "key15": "5cUf7NCmFQD2X6124ha4nJ6qs5XxQVenRNgF63X8y72WHmo1RaGNB21bdbgcAsn7bCzn9cHJ5LqY6vJJLz98N912",
  "key16": "5QUWJNUjkJRKLtuAYv2ayTsGKoRGD9wvAib9vaJbNUqwRSyxs6Q9DzWvovpoRTLy7uPH2PBQ6VrGD3b8NgRMnBdd",
  "key17": "2AS4wYbyQKZyULJKy13Sv1z3jq5qrPPheFqXFfr1tJQWX6DH1VVDBMoPZaugGixTrFeYQmhKRDa48QiZQEK92sD2",
  "key18": "5pzVwySUWKXAj6FwC2z4Gro5XMJDABmo53eAbscokiYMfDr4D111SCAkaMot6Aj2y3A8bmcQaMcpCPR1NFhFGFBH",
  "key19": "3VqGmoZ57ZhkA3VhC7yvXRdD6p9KqFp7n4cB7MWRdbkfjNvCfYo8VJeJe4o2fqe5WEfibvXZUFcvnAPs2g87JAF7",
  "key20": "2MDXSvhtVLQzjUVWjFxhaCGWFfT2zwao3YiUChYxLyptPpjqPb19sMxdpkNmGq882vwuBYn86AnYeVA74Su3rhyC",
  "key21": "2ekEc6fofvgdz6zFYoqFqU9NaYqZ2oqRmpbiVosTKVJTCQz2RJXuswsUN1waXKZ5VXsBqfXV6g2ecEPsBUqdsGLH",
  "key22": "3msy1cSoufbcC9aC7Ayb1fZXosQvNson2YpHVCw3A8qbV9EKs3LoAasbjkAHtPcArVP5WRNmi4sfkK9fpCjc1Mxv",
  "key23": "4nPd3W3iQoGKuzNigP7nT1xjjAVZGGE9EYw19RQ5DrbVtQxaF4iGNdNXtxJdj9r3RCTXPd8GeQgf3cZgz52RFpjz",
  "key24": "3GPy7fFUqexzZfv1EmiVYTMvkosYbYWnSA72vpCA8MFW1sfA34kyopmDbCQUtbZaxg7yBmN4v6QZDh4RSAg94K3z",
  "key25": "2pTUcWASZgtfUe7B5LqRU387sHhdFeMCAGWKKZmyjVjYK3r55rzcqJMz9YhcKhUZVufAsNevsMFcgSy8ynn5Fcfy",
  "key26": "24n9avFxjcLBewh9d63kF7S5ppn4x5u5HKdQ2npMW8RinrYkUU8W6Qr6tVxtXVdndNMaBj8BwLPSWjs5YNxcFrqj",
  "key27": "3hGYNSvmMdq7VpN1FweTwbK6A8p7S4HGycuJJbUjwhXQebqqBMPJe2mUxL9Vz3fXa76EskvDseJYFfDtD2gZUCgf",
  "key28": "4gfBMgxyrRAwRCUF8ur4f7TFTVcpj5ZABeEuMk6CFnduWDgFGhNMbvFomJTQ4eCSmWWKMNWkwFWT8Qh5iA8PQTs4",
  "key29": "3wKyJdabDGBM2aiSAk6h4Tq6S8dk4rJYaJBRHsEGo4mtuQFUKTFAMapct93pF2RSh3pn9H6di2M7KhjNxz58yFsw",
  "key30": "3TcaKHscVj5x8p2exwRJZsohTbnVFpH2ASmfK7zDp7w1jsgoYyVM7QP46MT8k8FsUbWWzDxJxf7MihX6w5NQNUhh",
  "key31": "2FncN9xdZsyp934baJ4q2ZkQQn2TWxbZTxS6BrGj5NmYcyh9dcGrr8VYB6R154XXDtACT62mPG6Yz4Hym29uK3z7",
  "key32": "287zzp2wL9D1hpx5kB84gqoBRqHDc8vZNUo57icdWsWJitFQYCdZnghBEdkRwBfLf26gPby4sATZQKNnzpypWYtu"
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
