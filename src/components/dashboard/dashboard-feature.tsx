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
    "65VbremhENmzWCth8Rs7MbHXuQp5vLts8MhcofbMPXbBjJb7nXp9FXiJJJcuf15zogFpGKujUphdqbn1s4moP9mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bKBn9CNGFutYGzzVgijCYnkF7k2NQHgc5ndS6FDyndzbxF9Y3tP5VWnrK9mqC7NABs2zJKucbK7sTdvxfzuHkg",
  "key1": "mnAfXH73f3v27pNNHd61vNSks4a3WV1CZF62np3jpDcXLf4UXJqFoz5G5Zc84Spu3HZm9ZeR2crYBM5JCekmQgL",
  "key2": "5gXAsWXihZEs1xGeHcx5MuQfpxy6o8VpYtHp6izzLDekAhtDkZuXrfNKZ52ab173vPK79VuWvELwyQeiFoG7jdRW",
  "key3": "2xmzErFfKQgjHvVEbfxbfVuwXzvk8tiQLHKYZhTpvGoUPBWUX7RhqEGTTV5XRYvn2ZhU3HWAtuBQCiKSaJdZSBSf",
  "key4": "3pAHvndDkpASC4vYPDmp7rF9UHcxTXrkC7bs5opR6k8PK9GSEfo72QkSvHXyFEgH3BrEQR5ua1gEgwkrYhaiZyQs",
  "key5": "5WE4eYLDxaAG8AmsFmB4eewPUvHvUVcpFXb5wjduZ7nnoyYQ45ptkMZfvkmpzMbbbuJKzSk2h4wVbMQUeyAensT6",
  "key6": "3vXeThgFUs6LWG2FMspeRUv1Q3yMDejoNrwwPVeqoCEEe1G1gBQK17jjyquNGBWqWCA4m3aoQ68NiZ1Ud2Aui459",
  "key7": "2kjYT7JMF99kaUPCKx7runcj2QtJkNtZKwRnYWrbBRPKRYz4cyKUQG8mWusJZxoWb12AMonfibCqwMYa9uh9ELLn",
  "key8": "5JS57BUk7NDc6htSEJvXC4ExsH6jZQKKEjW7NoyH7Fs5fGwhZxRgbfytZ4umFwkPygREv37j46CTFrjFfPMPKn6o",
  "key9": "4T1L198HmovMSdsFeje9K22UJpQAdVkcU5ytkRdeyEeatjbHDdcGmge5CkdrvWnSbThzyoeL5FKMCvU9JUjjb4ov",
  "key10": "CrfHtoeo69dPRTfdghANMVgLkJeFmziK9jRzmuZNJg6j5JyKMNRk5GUhqQHYbpsUFb82XEtpEWpnDzjeEejURBu",
  "key11": "V3nGdUTGVyXCuS9uBBEz3kic9KZL8wmFFR2vQnUbsJn5fyRMRQajpL4s33BKmdJ44hKhXiziY9y6e47FsuR5wbZ",
  "key12": "35QiJzsWA7LJVXeRLGDsdvkYweyka4WdWYEr6QhWzcRLC5NQA2c24J2q3bn6GFQbVZquvtSPmNv1gETA9CLhokGb",
  "key13": "5gBJxf18TaPr7NGPq3MJCJ6NQ9Z89r7b7XKKUobn8hgeJ5TinZUgVgfVwsKqe5D4E4duAVDLprECh2WsVrm3g84K",
  "key14": "4UwjfYBCwzRamXLKCQSfnHze3XDS42r3rLkrHTbg26M6RqMdiEXF6e3YQSSg6Cahk67n1qPu1Rh5Q8nhd91NodtL",
  "key15": "32t2Co8LneMUM1YsHxicwQTYW6cjeAL2wwNmuk1aWuPtYXFymPzjLNPL8e4QGbsCGmD5CVchvsA9x9a96kboRTmr",
  "key16": "2aq42yyM7Wqr5qGcE3D9zzMXqCoePGL2goV1hFRY9iGRVdVGJej2PrG8y4bNCGgoTD4Ltj3G73ETR3PaJDNJRwTV",
  "key17": "3iDYr14haRjQVQGvEJLzoTnJ1BvHaQXT5qqqQZh5NVvkAfehryX6vgK2yhZwSXk3V2qBz5Yb2myYnhrCCCwqD32e",
  "key18": "3RNr4Jkja9iRrG8vW9V9Ha6US4eB9jeXs7tH8usuiinKvHrDWXRRKcRGMVqa1AJDT3FhFe57HZ1H6JSdD1hPRq7j",
  "key19": "3Df2TvkK6jScUKVZJNjaCQZ7QeCuXzuqiqGUNiqS5zkCQ7rJf11Bt9RWCJgeBJqfek9zMhxqFrtSXJ3FMe9MuYi2",
  "key20": "3BqgBn2f14o3BvYm7rTLFFjbG54TqXpvBpmfDxYKxJSH4MZ7PQGL96sk8K6ASmXckRWpWKGEcDDaFrPZh4WBu3S7",
  "key21": "37rUHzYGPuSuBvRkq1SUT6jx4G1BXoAEBj6TShUugshMgdZkyenDBW2qTPow1AAchnCRiSS71r5Lhd8dWF2hRGM9",
  "key22": "3FUsvFRY3XYPx9pd3wR6oXMtQAmw6qWYm2f65xSiftAQnTHhV5Xpg53N2uV9jU2ruScx7P1e7YUcuSTwe2dK2QEm",
  "key23": "YNczrfYvaDBAsvYkZEN7jLidFgozbvN494YTUs9ijXwRC3jr3JtmLniae59oKooeUbTt6RwRCuMGr7JviEw1Yq7",
  "key24": "2f35KnjSA1TA2DGMGJHmXwTMj42i1Qq2rvmvk3T4jdHE76FF5S8VdkKUEjGDEf8bYE9PiWtCY34JVYWokLXnMee2",
  "key25": "2uR6YBUmMDeLxkXJ2woH6LNxdrdDYS71CUFyCT85YdBpKNymDPAitZuDrbMNk3XF2HxPXvCC8XsnFhYzdMnAtrXM",
  "key26": "365v4KEMvY8feBfN1KvB5ZzhDDXBnHT4f5d7SqtVEujz9YZ3r9AGkFFNrEuDvxt2pFhbCZQyajoFg8p1XiUQLoGP",
  "key27": "5EYsrEYhTumNTWbBhCN5e6yjGMrGoP6uxdbEHgnSWLJxtVGmfQKi4W53NbQep6oRaSiA23zXU8qRAffXvGUPkLYs",
  "key28": "4fCH85acup4FpUAuEJ1cF7ty3zYxo3CiWDRHivm5EQPFfuyNRE1vY2FRMYmZWSTy7hSWpWBWtYnd2PbQEBDMFAzF"
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
