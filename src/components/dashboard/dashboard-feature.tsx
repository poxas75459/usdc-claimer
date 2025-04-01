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
    "3UqjexC3Fjwnedq3Sa55xE6HAdacjiJ9j3fVQBGiYki1u9rDEGjKKHL82zPSwYfk9JbjGvcHYMhwLx5neYtKfevt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eau35nXMMmoSmUFkSJYrAiVQugSAaW8KSyUvWXjrXHL9AGuJrGmQVDAyudQWmNyyz1Kc2TQ7eQKySHoXph9wc8N",
  "key1": "5QKNxtiuqmXjMmZzYoKq94GjR8Ed5Rrpmua9PpAHJZBhgQPnwxryDmiU6xmkeYMwBLU9fJmheSU7S256hEJcS6dz",
  "key2": "67hpTPxquzsjDfFpDC8guXeKKFmFXywvZwXWZHUXDr3sYCP3cYw5WuY1PvYky9QGdu11qz7ov6WiA71i9nUYA46K",
  "key3": "4Qaqr3qWjWraabYwQCJWsDm4zPPQLVnFkxhoV3BrAZyrvAwRsYq72swVkKwL7LLUwUEfm2pjrFhfEqPRq25kZK3M",
  "key4": "5LtEZ7bEb9eTheVVuehn5MP14AAAxQuUrs4iyxQtGbxo4CBE39QyzpuwGbrMjf19Ao7jb1ejKTvisxDXKXRyeBN3",
  "key5": "2Z1zzjpz9q1LUeWESLt3zHYr3aNnfoKyKMwZA8sApnY1ubH3eff6t5ZP5YcdUyeE6fP27wfWkHnSeDn3CCz79rep",
  "key6": "3PQmLS6tBpBa3JCVNUcb5k1LJtVDbduq77JSi1dTnLgBWd4kVYp4BMiN8nnjC3ei1fgx5r2fcbGWQaprR1L3hdi",
  "key7": "3Z2tMV1ZhtnMYLsx1Kb43awCgHwEjDcwbbdcFjGrEKqFLcUc65UwsGHiHctLUbbsqWGRHjNpLqgbv6gB6X7VnJLc",
  "key8": "4p3T7giFBXCZKDKsnkftddgr2KLRUZvUL4QP2gfnUYexgaa4PseVbZHPgToYdRNRRwU7FTQa3HHEturJXV6yXgh5",
  "key9": "2enVqjbL2N8bA946gXo2JZNw2xqx1XEoYk6xsDyQ4ky8NaSYkxAKG1UKhTcLiGZ6Ay7ju1XyZ3KCspzjfnN1Bw95",
  "key10": "2jz2JShkxPYdk8HonjivUGAsAL3iTmbKNAhWCyvU9ntkbzLaXjiJqHtM739kMvefTMEjaEVYqsadgrjBeF6rjbB4",
  "key11": "UYoABmziEXg67aF1FFR32yWk86e7cdxG3kj5dPbQ9ua3vHPJCNcNbjsDbn2LG3j2P3erHoBgvuA8on5FUCZk7P1",
  "key12": "5xToxYGdTrr7c6zUrnopQMaWbQV3MyWWPQgVZeAaDkTehGYNtPEeESmvs37qb4WdCMms7c2csGYDkk2AUQpubd3U",
  "key13": "38moFf6Ub4A7K7svYX9dcahfRYRBTkiNb3ArgBb2pnMSj4EL2g5g7xMjnPLq37F4ST9brHzGUZDD1MV29AKRpHSn",
  "key14": "3WHS3m3Jtg7vJtfPfxrTZif7RQzSN89iHkULmEkkX518L5MsrLxgBe6xvoHtZk1vaSBd4oo71BAPqEBUqUX6M6h9",
  "key15": "P86QxwJtyiciTENnj5iQZ75NbzvcS7qfo5a3ZMLn2cbGW5Whnjtv22RA4roWB5h4TGoVVPxT5kCbQ7FJUK9S7A5",
  "key16": "uiqL1jQSp38iibMyPnGFw6ZcpD16UTcR3e4WiYbEsJWxLU2p9Ln5FKrt9QVEEQ5uWFqHzAgPRxKxhvn6kUYunLd",
  "key17": "3E3DDrPZePpJZJjf2mxXDDVWTfsWGbQLsdCwKTBdKsYZtK4uyuFuEANGKWpkSP8KLWzcn9iEGhSsEM5F9fvoas72",
  "key18": "4vHDocmTyVXwPRGnpMsfa479mqqmepzLSa9Ua4AU6ZknQ23gr25pr72N5BZAaNyvUVDvgQYvdHNzqoyG4LM66rUg",
  "key19": "1cHb2pViqjYPRqVphYT6ikZM3LrAkVdhkna9mcG2jvfLhtHG62oHioFQ6jxKCGwBzh8wkhgk3mptGoYF2TwefCw",
  "key20": "gUpc8iVGZe3jUnyPw2PVCfY9dbjHspz4fy3CL4tgRXFzpcFTxmr98m6feDYtH2jWLf3QtEbz4ZyQwZkEV49kTgE",
  "key21": "5w7jN46GWHfWHQdQrtR2umRctoVfwzBdE9aQVYYif5CeRRGYWgh9qJZ5sysYbyxdvcjvFAVXhPCSAMs7XfjhRsiX",
  "key22": "5oqQwCUDvL6hXpni1JqfGGXFFgYAiy3Q8NCBmrh8etfNfxbLrc373ZrDvCCzwfN9QmdoxbH9HjENzgvrQBBcRWKx",
  "key23": "24AadXfRrJ71DDB3UF8mY32YhRYGNmP1sY2FvGc4meWTGL6MTmHHAauezj7bu7TvZq6Cub7Bx9XEN7TWVoebdDLS",
  "key24": "2XQzuyMfEEaEHn78b4kJjbbcdkovZeGvcs94XgWo38x3pEyt5BQYEZG63xwQYr7exCdrBNfiKWRpUi13c4JipqLj",
  "key25": "dMncxD7GL8Y1xfbeiP9P9R8YXkvuUPs2WphhrDwgYw7tFn9JYyWZnEooerF9Vj4RRdhiskBjFtAR94492Q6xSjd",
  "key26": "3s6XzNM7Nu8gExGj9pZAWExFYzUhvVCNciNurXU6HvZsQYJDDHoYAypNQwukiJg9xBgNyMt8LTTrDh6LB3Pd3xwa",
  "key27": "5qotWaDXZEUVE4bBwriUeQxbvAiczZGcjN7mz9G4VDJU41pNw6CdPmU4FCVoKZbmTfdafv5FwpjXnuFk8FfFYoHn",
  "key28": "5K3ZuxVGFyKK7SwJC4gxVDkmDpDU75fp2zX5LH2adSJDq1NMGoKFxVp9ieSpDcLCHrZsmThTtyirxeQGG54LH5sj",
  "key29": "BASyb96iiunCu2gfzunqEPYyoxGCygAJhLXUjCqPa8WcEc1tf1b7Um6Nz8ipfUgrdBGfvScM8v5CmtynCGMeGLH",
  "key30": "n1BDYkZbbcf2cetxJWQbqRc2NPC2XwPSw1rnpjcqWy98CodDqcXNrZBnKkNLUVpiYQNiKwXmG9YRuh5rDTy7fkd",
  "key31": "3tYu3M3ZuMfhVw7ezL3yVEbAoZ6C29xovU5fethviAd4ZBXa6YX2tLhWJLF5LfHTJzji1w8DEbYecswx56kj8FtQ",
  "key32": "5PhjfNgwsrAWsEmahGVdjmoH8gPABeHwYdTUqzutKCqAegd1xdsDGUEPhFyEbPd5fmo6sfG3ZAj7iuqY5THfeSaH",
  "key33": "4CVAB6pWityjVAzLHGUxDZzE5BVFxbgoZumKP1uQruJ7bikTVUFXTMBfV4hbwafgRLHBVPazeeZKgy8kbntj3ERu",
  "key34": "st8vK8MPEDr6NruhKbBYkukFXbiBwGJgBZx9sEqPSL8u78vhXifyzVrMo27BC8h4q5PDKghj4fKbjGzuAx5CRtw",
  "key35": "26qbxf6Zr1yo8a5rFG3mcn6mdhe6KUbMpZ4b5NG9SS9PoyRpG4mVHwV2BTZe1waUZPUfJQ2kVXRHH9skHvMbBXWY",
  "key36": "5dsk8rzUf11gifedNoZi6EXjPsXvR2poAkvxhFckqPMPujdmnN4GbHXP3WmeDWMsnE6JBqhFMzLpdKyiFkvUQWR7",
  "key37": "4krJA9iz1AxqETeEf2hsL88FQnY8a3vft85kiQmmS1t9pcfFRUkXUWZv9sxKrjStoz4XnpYBmYReumYmDAtGgt2q"
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
