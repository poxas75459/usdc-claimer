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
    "5TAaAvSrHe5HH5c2bfrajQMVTcvssQo1YYNsYVgfH2CMM6dBJVgHJkgfvpnwCEqxfuhVd6b1Wp9LrCfAWnWbVzry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAqrC47bXvgVxRkekC96uZffcXJJRNXjSVcnZYaSUVHYeWZC9RKJHXyhR14xPCB2iQ7tqMcLQgqmMgmE7bzPWiu",
  "key1": "4jNxJLf72JV7vDtXM1h81GKc7gSvHCSCUX6BigDBGDNT4BXHhzmHEtcwuCUNb1aKi67STswqFAoKb8C7NWKha2s",
  "key2": "HtCtSP3LbCRB2vXy1pfT4edqAk9hyB9FTP2kjrpu8rAPiHmsa6WZuPsFe5Q2sj8NFVCseCvoEUT3KXbgQsRJVXT",
  "key3": "2n81hhPNvvnFoMA7SaBcnopEq5SetA3LnsWpRDwLGorD5axTpyWy76vJUxmBnJUDFwWSQ2h3XtEe8MVG9EqEkGjV",
  "key4": "27DEiB1AUWWnghgNbrfZu6HGDcsD2UyvA6H4PJcT4TMKrg9j4tkXPpQ7CUeRNcQMu7rmWVARxnPjHYSFuTcoAYst",
  "key5": "2zojQCwyyomfMipMzyR1cxxP3P7MV3bb8hMDSxx31TRBFMz5R3t1caATthsuLLEf9yF9mR6CzMWU9Q4chwB5BSrp",
  "key6": "3rim95yEPnia65SiPQQSkb6owL6ytg8hBbwrRh5VFpzxZxHx2X871M46zmGpk2bXpRi1aVDgxCZ8vtAXSGxPACSp",
  "key7": "59JKWJYxpqGV8HzdHmz44pBFLwJCdiCk3YsLo1EpXnDQ4Rav4A8RnHdZZkQ5FfddVhSynNhsxACGyBwjA1khXrAN",
  "key8": "H5U9qdtMf7WFqiGGbdCQbLsZ9GAnpJWi8n6Mm1xEvPCyuDjb5HXUwGYRb12nPoih4L23G9PxbCLByVLhhVp1pqw",
  "key9": "36tyhSop7NZxbAQ1XbUrwBVhgkN2A8KRfC8b916faNPtq41c8vyRYkEdWztg2sqNhfJMAvGJDmojxuzsf3mbQ9XQ",
  "key10": "8sg8eF2TsMp7s1U2qMU3QUwzQMcgWaXzTvhJE4H1WWqbiogoNJMw6Drgaz2zka3B31ciLhi1n2rUsZSv1uhYpst",
  "key11": "3jTAztj5hA1BpoAxLgKaa28r48kVq3E5zZhR7svS5NGrbJcC5hwX3PMXTJHxU2fDc9VKHc4B246rfmYEXvxNhcU5",
  "key12": "5oe5VBQ71yWAfFnc3zuGfsXH5CR2JjEBZnrXmAwbbzYcWTR37NhNMFtv8kaYEeYbp7Vbh1iYGU4N9XQyrddfYHQZ",
  "key13": "5DJEDrwJv18D5bzT8GgDGZgB5Za95KXLkpvaJf2MqwdofTiyQRFDpMQVRHAufVDwc6WgpzAxDNGBYQxL4dDKGQvM",
  "key14": "5vnWdN8JhndaynRmXMZEvDc4koWPfoiyww9rt7qi6oH8KQWNdXfKARco8z3HHvqLctHiTsmxKteaovK9kFtAfyYs",
  "key15": "a9QPzD8pWuX6VDJ6xdLQxbeTocoiV8dC7R5qwr35CTn5YLvAGo9baW682q1WmC2MRbyRRosGCa29qjKHk3YWpdY",
  "key16": "4A4vNcpMCYGMXakkFXpqpEbdBKe1WjbVnSNWDix2Dvjh5Gk5taGGQuJmUAxZKabwVzWCa6U6BNBvtmerarTiU8BQ",
  "key17": "51f84N2H2hHSifanJ3mUfqmqF4UWdNxxq44QjbfUnFS13xWXQGGQHkexXnBJc3Ggiyfi8nQF7GfwetfHSx837FEF",
  "key18": "3N149AoDNe1Hj95ij43fvU76Fy9L9y1MdegRhnBf8nLMsK4sVf1SxwgYaYoxLAUhg18DJtTZoEiL2insz1SPSe4T",
  "key19": "3exvCmGgzvhDdV9Rth7Y8affftyYGBasVUBeqXUdrJjnW9yunfrPvoUzbsQU3g7Ymbcps8jcyzPfkMbv2bD6fYjq",
  "key20": "38h6Xy1SpHT8bxWPNzgFAxuTNMHXxiSiA9Hx79VHFGApUMWBae75pD259DYQT8eVJwKWjzwS4Y7tWUqHFu1XjkBa",
  "key21": "5pbWsgRZZwjRHMJePimMT7oo68CsCVpnccxRZt4JgVFrZvuopaPmfoaPbcEMnpM1mBy2WHeAoSTJNjGZ4dQtxn5i",
  "key22": "3ABPheUCGoeyucoZxsMJsFDoWP4yo5pcWUQgfc8mnjusCPiBZK5zzGXYjEgrB5eJvLHG8ShykYHcP6HzBcjsgSXk",
  "key23": "61bfMofrvTwtQJmMv5Lfvx89snHUVgLbHfXEVJiU7bZfRUVCat9t5PyvdMmAT3tGZhAgeUT3LeWBcizQBpA5SR8s",
  "key24": "3bZLZ6W8oVM8ENtgUx26EnsqNCzr1VD1Gt3b3HojPBSsB9XKsTKTFRjrgKghPpkp53zG3XMnDw9gFLKmnnkyRRo8",
  "key25": "4XuPCWzBxMuG48rvNB5XeCHJcFuZoocm2HQnV3sqw4ePzkbCvHZN1cZPam4zR5MSgY6nyXD2jpTXpcUkf9h5A8g9",
  "key26": "f6A58zfJsHkYoFipYqv7agEKT6L2GcASKCCSrzd9rdbn1f9udsPHNj7cvfq6CR2m47smRrD8RSzFqyibAcGkNcW",
  "key27": "5eMXUuwktPV53z8GeX2F7uSjuErrwqvKts8rauhnrgZpL1uoduuN22FB2imsWqK7HW6czc5VSBJk1dJt4Pa4ZJKZ",
  "key28": "bepgoveHHiYWVSVxkBfmXuh8higFuRZQSQLM6ikBX26P8ndgPf5CP1ALkqaBcbfbkvtv7hoBotpFKFG3zGV1Unx",
  "key29": "MgRdrFLWnqHQfRw43QydRpjjP8Ds4GUwS7w4Sbe2KLCLzRcNvtqCSkirWdQNFeCbZE2WApTzzAp6CZTnX3gTTxT",
  "key30": "2n9dxPYSj5BdSkBFJZxvB4CGxkKEdy5uB6Mhbqb9j4fBod6JzxwX3pfrovoPivy5fXNJGGTrpv6X23cvGVe9jrha",
  "key31": "362d8FmsADgE5Fn1fQ8Ripc2mzFqbdYjXTKhPpuML9BPeBLhqB1zPFh2yg6WJUWpoo5rh3kVYj1hxoevjkftvE1V",
  "key32": "4sv6jcEgCRDgzrqebpN29U1cpJ6rPfpKQJZJazHrnS5UaLsQnYV5oMuDDvZtazqwPBUWP81a4qPx4ySM2uudJRo3",
  "key33": "4EAaGdujn6C9uVtkXsaFmgFzmf8nU4q1rbQ6ivy9w1HAHdTjd5LfunrKUNxFTUaEtLfkirvFbXRBGJJSAycq6Fth",
  "key34": "5cak4SQYtnQ525teYHAkGinMCi9LFq57hDSWE13zEAtaCXTSVDgpdj2evJSa9tPDfwA5TuCRjmFdatJPisEaiHW1",
  "key35": "5FZWTGoqsJiqH4Rf1b8sa2dEAF5Wedij2h6YEgmtSb4dTFa1PynAsWMizfrjmNSgDrBmhDuQGsLGY8ZTUGJSAwFg",
  "key36": "2YfgL1mLKHfxPiwdrCmgzGcqw7gFELSdb2EBXwMjecZGnPYNJ6ZKayrXPqsVxiLHNroK2S2iQJfFfVpYJd2NrgtR",
  "key37": "2BxjaEs5XVP3UWfysiPVjDUAKhd6GrscCfrcKjNLhExSRFDqpGAmrxVXbZ4xMxaJuoUo1g2R4S8LTZmiZarQo9XS"
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
