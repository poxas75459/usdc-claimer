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
    "5rwqzYcBv3Q2LcwDp57WFEmYHFzktUrCDp2Zp3hJgtMaKpsADVdGkwkedpGYTMZfDS2ihKhp7nR8MBnQ3pCHiECu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHydU9nTj6WLrSbUy8nZ72Df9cUFRHsfsnvMoRsCQCmkFnrNUCxU428oWaBWPSar68yTZKBGFis6R6APFXkmDoF",
  "key1": "3AYzirdQKJkSiRXwp5GsEkMNCAd1Vv8CXJfuFTE47gxsnczL5uBLeCEjsyxQ1DK9Y4gi7aFuqezPMk8Mp6BrGTtb",
  "key2": "N14d4nZR6QCFkk7ZDHrALJDzYWpj1dMTQukuLTWPRU9FwzrUGQB84vv73K7Zfcb2kK6aF9uXHPJvCPeUu47Pq63",
  "key3": "4aNcKMUJ1yb9PvMTU8A2pmFx5FQqPZTiMcLsZqJbhbFbVutuRfzPLQ1Y5MuMXZrVyyGQ7VLcRdL1xvaEutjXEmRL",
  "key4": "2BGwri1ED4SxjDETEB6dnj24Wn5P11jZURTrQsc85ZKUtPJCDPWbMpRz7Tbx1jt6ifpMnNAPqjwLsUH6PUcD62pZ",
  "key5": "5je6HaWsd8dG53vB7qVnDTPt7GJpekNH3XFtaSrojXHVkyLMuAKgnJUbSqYJZpyjmL2zdsYtbvbYfEeEtJitTo6o",
  "key6": "2RLhJYfwZggkRdfzxoWAvALwqS2TQb5PNRd43K7jzhJeDcC6X9bN7Q7kzodHkaC4Jnoyz1gDPUdM4CjUR9nDYB3S",
  "key7": "46dcWbEtVRME1UreDuhgbvbwjpLRvwMoM4mRwrqNzTy931iAa75hjK49JNSPs5EQS7cfQWKE5TnEdJPRsqAkgLFM",
  "key8": "5B638wxhQFVYg9vuvFELekXss7xFr63z6oGTV6c2Ge5z7oKePQK9BPT2ZKm12NidYKppMwW8x9pgQBQsNJ7j8QtJ",
  "key9": "Fk52547RuVBqKpbBpm9BmRo5STq2Y85Mw89T19mCtuoVJT2S5BgqCwbERSTaGGokvDudSoL9hL5Mf6QQpknbzes",
  "key10": "2tMHbkU9obdL5HmwtKEQjBG7ssxWTw5q2WSYNckTEy2yUP53B1hxywqQdDrQm1g8Wa1cbXtQEmoUjw2uSLSbRMz3",
  "key11": "5YmVXGvnDstkJJ7Xq17odnvPTnPMfaXvnzb1AcA4CznGpXBz2Z5QPJb9ep1Huhbk7JAU6MuUomZ4SJKFBnHYhJa3",
  "key12": "44boSJ4vTgcGX4YUKCiynyrY9jFaXduQFgQ2TkAaJy3yPqXya1PnhEZNuKqk3Cy74HqWtbMxxmvt2yDmPQ7v9sqr",
  "key13": "2rqVAu37KadByzCKwoJNGtQXUnqj73NTycgh7N4Y9D4ussHMkWs4AEd6Hvfq2Sb2RwN8QMbBHQMvaQAtR1JuP1sr",
  "key14": "2tuvRRPbYyUUtCZspwr8CbLKKrRUfNuGTiodZrsXQtLVzdoFSc25aTQebmvhtX7cVzNXmkC2sSjT45wf6iCQRZEq",
  "key15": "2bG28jFzQFzhJsNJusExfZ2Nc5BKudDjyXECzfQ9T4HeHWFaH2dofBNbNEuaNrvGsZwA4gPqjPPToimn6QPPjLye",
  "key16": "4xXi4BYx9d91atUdrBv93WQnyo2KeCXmGeiJtnHzpoSHPFUD66gCTmktpT1H9SiucMxqftsZfoVmcmaWVFUdLjJC",
  "key17": "5oxCHdv2PYrQTK6LVKtP4FCx21nr4TYT4EYfHLMyDDNweCGFAk7Mw2iR3f3HdScUdPAejKa8vhqyFFEhoKmndYn9",
  "key18": "PtV8BjGTe5irY787Lji3ho3ZKNpWKsTxpkTKARiLhTTk7TWG9pgJDjKzMvadQfe5qFjbHPPDoDA6B7Fh6SaAe7B",
  "key19": "Nh1MKjSZMHLivtDc5tyE1EdzKsosZgRUA62tiTYW7s7uNqq4neMLVUaJ7JrVE31wf1GVhU8upwW16GK6fVjdiBp",
  "key20": "2GLPrCATfiNbzWe1t7kGDRm4CobYGh9VdycjCTsmrtUPpheRDgCUURBASD4k5mRHHFij17NqADogLccXzpsK9r7r",
  "key21": "3KaJ2sdL4AUTfrEwAkiR3X3YpB4A1Zp1WKijRi7UtSm9XEpebi4QUCgFmJMnQk8JGijpvPx8Q4VWR7mP14tJG47d",
  "key22": "3tqMFydQMUUUPCKnLqD2c5TYdiRMg3AK253gD418CS2jthnXbJAbiVjostmjfmruXsmTy9BondHVQEXi37aEwsoM",
  "key23": "242mzMpRGWrkdHwceUYY4JJMKhGyXSc8K7LR31A4eypxfHLHwd6h8pY3xdBYJNCh1DugtqG6UvEwaMWyQmKCqbqb",
  "key24": "WEXKNed9dRy1DaGukQ7HdBXiPR1LdRF3veWrbErSJQBBy6ea7B8K8gwAcFTH5dng9yKruKzaJsfSDB6F91f1E2U",
  "key25": "361qPDBrDVJgSVosnXWga6b5YnwXiTykHsgie9tUpFdywvEDhpTio9RrEFtw8UeHX8gBwUWsoi6erxfLY9n6i9vZ",
  "key26": "y9DbZc6iwvJhoVwjMXdAins8wBWxTvNaRLzDkwau15rnYJN5vtAACEy1rpUyUxQh7BGJ1wjrG8ZNPxYqwgf74eU"
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
