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
    "hS1HXKjSKxLjyRCV4bHvjcnfChKFsjKUdvxotHBieMrKts82xUpBPKZd5GwVaEizDWgTHL1B8MjS1QWA6cicunb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9jcnfhchSgFeHBWWKaqousQTcLbZnuE8vXRGNLx36rRucqU7yxQ24PqU9MAgRUfsNa5ZJLB9KuAEXUL8EG6qXU",
  "key1": "5z11X2hKaon7KFG1Afw7NxT2aV4t3msnPqEgjgJjApJ2gZAM3JsjqzGNjH1QrPrkUhckUgzSZA1wLVnjS6FJqjZU",
  "key2": "5bv1PjVijUy6aShmexuaseHARos1MgqJp6FtApmpEKTChTK8SqbMdN3RspaEXrB4qgPdpJ8BVWfZ8qxqGVFHqCx9",
  "key3": "5ue5wbS5UeiirKmxFkHtsQkSHcMQ7tgVgdsbL7GTx1p644ccz1H7YAgCQF9bWy2BqKKB5SPe1Gv6r4Tg5CmnKdqH",
  "key4": "4CL5mB6pzx4DeacQTfG7GC13r3xqZbnSbvQF6NfLbf7D9otxbEBtVRtzgYJXRDuvy4THUV1iHdSXdcWzjb2uCMTv",
  "key5": "3sLDFwCUWRDhy7W7QaFBkVogPG2aJcYMpCL5RwxFGKjaVB12ZvB8sskgD4tEWTqFxnGkM9GsPY5jxRKpYnwGrbjo",
  "key6": "4heA26tADKqhUDyWJBpVRu3gbKFjSvn6j22ptosPLUth5k6NMJWhBMqhQrLsC31wx7rBGtrzMfNveEoKtbhg3NFK",
  "key7": "5zmTY8pz7DAeJSUPgHvDim2e8fHVqxBEbuXafRh964TU6XE7zEAaH4V9iK1k6UMgfi6LAT8y48TqSFtpjqVQbtCz",
  "key8": "61wstdEJwi6VVGTcR8kjRSRAciTqHfhxVYBcwHaTCj9vA3VL7QnJPzYfYomehVZPJXGhaH4eVgCMpGPmabEevFvQ",
  "key9": "2HsKuWd4zGyqZ7ejVqLU2rqDCCRt4VbbpWp9BrdneN6ZBuwwNLwkihz6KxywtRqHQtt5SMvVE11HhxbHEMuAgRZb",
  "key10": "528D9UdFNJZqnwJJdMwnLC3z19JWkQ9ZV6gLBtSxnMrT18fEhRrJJCpVUgSeAAsUh1hnCHqQ2vCTCvHDJ4dvdKNS",
  "key11": "3f3uFuTHB191ipGXTPKm9y4PcPR9pGkgynFnDKc1SXC8ozwdP7PFtD3FE1eamRk6W5h2HA34zvTbdSkqJyEjAQjm",
  "key12": "51LWcbQZiNsnjeG5D6VyJ7h8LJXjeXN6tFReXbHmwJpXBKEfAHHwJUkTVQD85Wn3UDYzXUviX3mRY4d4ouS9aa3L",
  "key13": "2K9thPaVbQ657YxDKKVcsYqWKj7tyBxG2xKvPEuwTkfvVbAZQNWnUUGYd8BFSM9TjGaGYD293J4KE2F91jZqDnfs",
  "key14": "3pv5zTSReffY1ZEfDLXA2F1mk87MfwGUaGFLYLHMJg3K8UAuqnYGB5FmNhkyX4UbZNABpmRtCsT8VYnq9w4ReM6c",
  "key15": "2HoA5ZeB3zmG9xUz6Z8sBG2gGUtHw8VtrXepHeuDQrXaCk6G8gkmv9w4rK868yabSsEPf5xxK2esyoZEpW8VquVp",
  "key16": "wL8s2VKiYfr6W7XFsx8qpyP4ivz52Kn3aogLATbSboZD9ac7taNBjycEpnQmbgYzPwyzM8NWoZWHvmnW9C1hRY1",
  "key17": "GeeMqBkocforFd71aGcxS8iRNMK8kYug1Q2p7a6YgYM7Lq1y78xRUpJgAPWhVggdDuhYdbzrruCqobaj2JQvSGZ",
  "key18": "2zrKMUHqFpNSi3GQbg5RrvwdesDJEs3wRC45K6MbjgPdHaci8N3G9ug2d7nPjevXbdfURcGanMVyz9YoDE9VDZ6T",
  "key19": "2JRVXXNCeQ7D2NZSLZZBDDMKW5HGaD4L5VgRcLP4hjZLDJFrNa7BE5U6xYYZnXZtPZ2kCmUUxLaNx6qnYi8MyP7H",
  "key20": "2q4ucaQ3jzpWFyjzidXUFWQMByEHWNrWaoLc3MVojh4ijJvDJYzoUCBkkNExzM1MVPGuqwXfPZTfqggVu6RD9r3A",
  "key21": "Te9tQ3BnE88LT1FeUdteVWNcrMT2Z4PApFTcKjzLxYcBJhAG4dRgHnB1Z7pKgXr2odBiwCx9uKh7y9Ga9fpdQ4M",
  "key22": "2g3e4y5nvymwYXej3xue91jgKzvrwb8vc1gqsbbkjNeevggGjGndvpxjdYydqfdWsCMMTYKKUk3cCYVLqYJX7d6W",
  "key23": "5RM3Lz43YWrHEMhZzEmEhkduQ98ScSBHt5ropug2bMcZSPw4tNGonYXTz477BRL2td1VMk2Jmz1chBMjhJ3vE6rE",
  "key24": "4dwMJY9i54BZLUBz3vmvBDNXEGx6FPdM5PwzqTWbwvH1Q3ui4CL28a4fARZmAwVWEjJJVC6KBMuyTorxnSUBdhro",
  "key25": "43c6RJKDh831NzURksrweHw5ctsNcJoXuYKFXDR4tK5V3EKNpTJx7gJYHSSYf4m8Bh6RfVnNayoLXBkf6e7Ty3nA",
  "key26": "2yJckRmCdZR1oZzUjssbo4scnHsQdoAu8Ah2yQPYeWDtStmSbyP2nks3KXdSHgiVo2AYJjhhqsWxrYcS6WNN37dN"
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
