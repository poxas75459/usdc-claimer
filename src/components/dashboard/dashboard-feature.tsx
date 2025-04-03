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
    "2hvUzirfhHxtBh6F2r1gKvEZJ2maBw9ZE4mknaY5m9hEDcoPx34oLjre4LQGoNotPtFz4YjbLNJHCSX5XQsLqbJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qt1DzdDL5oE14fJoPsvHr1c91RVvhTpmmtjbZrazR1aE9FgxHkjPZAaCxDzkGJNdziwUw2e58XjPfpbMFCk2KA4",
  "key1": "41TbdPocM1BFYWDXuycgZbA77XjpWPkDX22HeyFigjH1Cg9vg9YY8BfYDgWQKXBYYEW1bThWL9kmCvsS3t9aMQ7A",
  "key2": "2NnSoK28cc9diD8yE8DS3p74JbViQmeL6Y2xLqQXXiE3PoMy3LL32G9mZBLtghugVLLEteNNquGDZurLJiTGjMNe",
  "key3": "5NSvSG6VYEZb91yxXBfXUQ2DZyUMp24f5ZVq6QRuQqh7E6ju4SguqnHugQyCvpexwzoo5apotX55QmjGF7R87JEY",
  "key4": "4Z6MyiYoiD9ABM45LZXpyDGn6DHQny5Uqrwfno5gxm19GJt1ferUoJoH8thPjGz4r7Y6SG5MRthB4Qu5Nq1qfEnf",
  "key5": "3DzRYhfSEx3kXjWSLWNxaND7qMRJM4iP9oJZ7ubhSU6UAdGqc9cUArX8ZVVqrUSfiVyfZ8BQcxzvKRers5i9YuSw",
  "key6": "2nk6uPBpesGxYPbr598vF6o6LyNPDbuF2EYhDUhsUexeqm2k36amaTGkHy5xhHYDLy6EN8p4PSbdgv44kz7n3FC3",
  "key7": "3QEKNEDeVbTUrdfox66U4XAQKVJsG31i1CC4xPyz3vo827cxWiKpYY6fPajW2EbTSAEgdYBkwZ7yyMF3UK3AB6yn",
  "key8": "22eVjVwsxk3CKY5e8gpS7JkntR7e4rCppFz7qneWdNeyp69hZdtiXr5FjhWJTDt93aX2aa5nc2Z6g3Dr4yAUqX3W",
  "key9": "5UjNLm1yyMkjoPv6GxoRw8cHNm6fki3zGFrTuYiNedKRWKoGTsz1CcUPmAMnyeFvE5XH6pdsYsck9RVitKJAd8A5",
  "key10": "5PgxDqdVLYRbXgbh9ezEnywNHa66txg5qaedhqdYG7k4dAV5VBFKqKyGcGwFadMS2iJ8HywcJ7sSzmrqVmstZLnB",
  "key11": "wRnY4cBeaCaWNghV4iUC8EuHoa5GUH1CgxWjgyE7h4V1yB1BDKjzUSfu6PNagKPGh53XcNJZGad4C7h2f7UBpji",
  "key12": "2TtqaFaDburqHdRwLy4FMFQRVxVW1AZfiW5SAj2WvsPD9gWTY7wXdmM5kh8mRH2fRLv7jeQBQwHdVepXvv8G2KLr",
  "key13": "4eXUMzPZDs756P4hdpFsgdaGQ6GudBh5jbYE1kCwwM1od1PNeeGrhrKaDC4oT5E4awaxV9Mk67pzQUiubq8wGMM2",
  "key14": "tcG4z42qxmF7dVr6tXtWk1xLEhAcPC8iiJrxgcQsi3XBGFNUqx83AoG6BokiqHeuJLagfvKpJBFzHbHTAS7U9GT",
  "key15": "3JueNQ8Ru25StsTeV3BwAHaouK5w5X9puX9ikBPmzgGpthFt8EmHyeGwKxKyzQ33W5f6AeLYAFsTQTHFB8NGb1tB",
  "key16": "XHGoUBQoZbGzRWiK21xY4XiR2Arf7j2qrU5K6F6QyGDac95QxttdEJ3vQdGtLpeYz7iEJ7axXfzsCseD8Bicp9K",
  "key17": "4BaBg74HmBDPLKxjVj8Hqe3RYFJkKnEKFcY6t7nwoPQ255oeuwMeFNnAp4x4MNXD3in4F78qrhQw3kF9tKopsuNC",
  "key18": "3ycDhiwHXNT7Z96YnPkHjX1UNsPTDLKR8yw4ufbXi3wqDNkDBZb1JQ3AqZyH4bbAtRp8G6HDqRgbgSdhRd2sdSBT",
  "key19": "hiQonPX3nzX3HQqLugm7L2LvAPTmo9g1HaAFAsSREFiScu1SPjsnJLvN4uXS9H2LLk2rFr513ebmFqzZvidw1NX",
  "key20": "2ZvtAdk8WBX84pEqp6n4rirSr5StoK1muKtbntbyta3sEsjm9sKBSwggYnM4AA17J9Erx2j1KauAyhyicxWTXhGx",
  "key21": "5x3oJsFQ2W6EBR5jSTT9xrNKyVskf7dbmqCJAC9jFmRbjTBcfVvAbMG5uRDQbvbA15LkbjJcMZEVh2jMb8vPWHvD",
  "key22": "3D339mU7fsZHBZvCq37Ryikq3caSCcnF4htkjzDcYm5iCMh3TJYdTZiq7eTTn7r46C5qh62c5E4Sd8W92notw2vs",
  "key23": "5dWnbreF9JDUuVUmaiCx3w7iKn1TcLDgRb4oLUWEESosCUyk4AVCWrfX4cWfEagb6u3DqftPZdfbfqFmF6nGxsDd",
  "key24": "25oUwuj2zBunjGxE83xN7iaf9k8o9HAakUxp8ZNkHb5U6QsW6Qw8C68rhGME44vg4v8qCykheGvF1z9sP7Hpnk9u",
  "key25": "388gX9aYge5EpnGDrXiyipWSrM7T1xLCdFWR3Y8RPWP4TRqMRCpwX2RuH45PWNKekSCN9LYbRYH88aJwwC9Eu7ZZ",
  "key26": "NB94fo5r34QNCU7TPnqaSvc1bbkfwLeTmLdbVTX8Lc54YFzDSd3JVZrdWr5b1fSFNUDShb9dUpZFjfQnSid1YXP",
  "key27": "i5NqxFW7CYC7hZXrzd7qVtdLSWTnZKNFfoqSySihjeAq6opAm4aQE2ZdgWANfLnXaaXyTqG6qLRtZXFfzvYaREn",
  "key28": "3NXoDJg39Qdpp9PTrjBkY4vrUF2Nr1dn6tZdvSXnpKvKeSarUZuhqnvCVsJTqnoFdEiu3VBRxtvcUzCvwPt5WaQH"
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
