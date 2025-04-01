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
    "2C8hPiPDM9aD7pWAoseUDyP1vkbor1k5isK87UeYjyijwc1hYGBcioqnCpE9ueMzstJeJu3yr7tNKMdGJffbAkzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lr9CvT51eS2LyD6bgd9pFv8d5rA9Xw7sqkMuqPSjM1AZuqWBDGq13r9Tu5JsxgaRUFzyfbdcCfzqz6dopQihwR",
  "key1": "5ZQxFwGzGm2qd5E2P8d7EeKLsKgYKtxUCJuDNsB5BmvABTQjtZBx6h2mHkittHx4Af3r5U91uzNZMvxDukYBcRiy",
  "key2": "4AxGrLZALAe79qYkujgVycMVktha2qxLNqSS2HLguFumB3rbpjizu4kTxMa6y79CiNSVUu6ySuzDS6qrjYZvxyAc",
  "key3": "PJ2oUUjdqWg5Mb9jWm4UTe6S25qXS5xtLhzxxu5nGDZh6fnRXUgCezRko25v2Ekq5EPwxTcmzGaoGjrjnZK8pSS",
  "key4": "rgFyyYNS8QoLSUD7QsdZ5YPLZZRGVgnaAcAmqrXpppKGg99C9Hz8CMtEo9VdLfqaw66Tczku3AakM6YdFcMBsC6",
  "key5": "2TdKSv4n1J6wBWN6SgazE6CXHkGjxSgmmdpeX1ixCYAaSbmzFGQ98gvr1TcpT6axT8bph5LJgtu8ybrScJAB3uuj",
  "key6": "4fA2g1d7gvYgceMSAUXgdpjFTTgbwysysLgpVUSD1KuqHGK22oeofHF2mc6PHpm8GhUPqJfMDbnGAE47csYmMzTJ",
  "key7": "4XVu23K7twdJSfWYHy46TjRitTSoGf4ZvL598QRFRMMgsejMtFHCVcPVmKZ9HzGeih66KDpQoS8dBR7tr1bnxUff",
  "key8": "3bs3f75mpi3jCb6PqsF2uGhiJUza9DdkAW3DYrE4L3GUYSiyXLQ1wTgv4sUxKADQ8uBd3BjTRdi5jRpZpZBE5BhA",
  "key9": "4MqAQPvmLDE2wYFi7cQrB7mr6qmiffdMpYhrKyfwx39mMEcKHn3sJ2f1mDpZnoN8U6UDFLrqUehLo8iWsBoAUPVn",
  "key10": "4EQiXDYkgi9XWSsuWUfySQCGz4L7DHMC3DNgKWWTsH8iJyHYKzEkTzzpwfCBLHBWSsVJ8B6gtoa18xXxaHMdYNq7",
  "key11": "3QZBPfmAxgH4tJgk5p93m4xsqx1wtiCfdA8nrLyUT2ydgwQU5M2dJ8LYjmTLgjz5izBZ5Mf1GJ59imsfDsJYYTrx",
  "key12": "67QHw8BM3DPgHn4JyQqbAD2EMYsGWJeLGU9vqKkdE5oniuvGiGXiyqxkdVRp6wwwJzKE7mMBwhz3motHz3Gi3tuR",
  "key13": "KzsPv1YqV75PT7eQpEZupxZQPJKXzEynD6ccURSyqYTGCsqDdeamAMo5bPhd9Vk52JGpUvZjFqmZMGsxeibATnj",
  "key14": "2MHWZVspygWZG3Jy11HN6yXkTJXHAjdK61LTK9c4kc1zP1RzmbASLFWJPyeT1qNAtM8FFA1NN48eAaWRvTeuKJJU",
  "key15": "4GWpDj6VSeSxPw4zuYvn8iFrVTKLbrXc7uQMscBeLcvRqYQF7dwQPXQPJ3zgVGLGpfDeu698WB2FkpEKE7LP5hsG",
  "key16": "3wwJ7ZF3c4DNz2KUrXdRh7rBrTTYi9sYPabfYhsY1FRZm7RDZSm7mvPNZSFZhN7uFPBwbRTQJS24MaTRfubgByr2",
  "key17": "3tgmJNVKhcishpgiqoLhu1zk5JE8a3SWszUwigZbknTAn2UX2ZA19LHHAm9nQioPdP5GQekth2t3ajrPJMtRhLsh",
  "key18": "3fHfL562s7HXYANbqytHekmqWKoK2jZDv4mXyuN9Fj2PfbKQt9msJjVq34dz5C34pH8DEn7Ju1UgfuC9Y7X8MNFK",
  "key19": "55JeqrcYNDyYXYDQtNkZ6otyqCsKJM6pAtsWMZB5ZbDj2gR7X9cEQi1vdjyd1BLaBq3zE3FELcFuMhmaqNQ1fxY2",
  "key20": "65KSsJ1B29muLvRsa1H9odKEsVXNRiZQqatkzqvyBodv4M3dNk1FKyZAgZsMMdeZCHBbofHHRYM3Q83xXVCervKS",
  "key21": "4U3hKUtiW2zi4KAhg7yT1RfgKvgARseU1if2A1wZf58ij2YLjzubhjM1bEdnX8dCmdeXSTqVpNDF2NkRf6rf9mv4",
  "key22": "2oGYdixhAo5oSg6d92qSto7jkK3L2pd53mHE6gN8Jq2YQkWavFdyJChJsRzRF6xjyWy4uX9WwS24ys9BZpqquwdT",
  "key23": "3tui4PtTPvGa9HUYxcc3UdwxwJxsVVqPFke5XjRjB32zooXEkK4tYLSWL9APHfEzN5CtA9MZMj4oeeARnod5bP9s",
  "key24": "4L5mFDZydgAXEkR8of3AP9kwXBNniFyMo4DNucnFJA55711e6AnyEeUuKCy5puN57PWaRVgy6HA14haSz5F3gEma",
  "key25": "3GJK6qbSsueLvaacLq3mRDVdTJyesjvA2dLEcn3mRiJnxJC9Pr9nPYn4kmJ5bxPB4sirUmmQUEKsRtudy6c6riAS",
  "key26": "3MMy4YRfNQUxGvf5GrS4QXRcPrRxNdGPFEZaKxU7efMhXAHrRGS2JKaxmYkQWGRFKwVbjuubz2cFNpzYTELSoaax",
  "key27": "3oUm97x3PBwNMyzEggS4G3oWDYyb5cXCfjKgRS8MkYiXfejCVWxSPa1ZUoY8VZREhtNkgSV3pTU9d9tH8BLJzxBD",
  "key28": "5EfNFcyyAwahUXBDA94YUKRsDTaeke4p46zKdj87WA6oa1UWK1iKr1qn6edkTU8tBYngvuBzwRqUNMJ6f3yDQa2w",
  "key29": "5bQtpCVNBtEFd4qMRgqr42SW4St81EuchFjwbQsD97N4HDDN7KoGbfEiFSwrgyrj7JvoFMqUAT7bJpp9ndQCP88Q",
  "key30": "5sU2vwGaTAJ52M4UUuaXzyv43dY68uea6WvA8jS51zyF6RJ6fQdNpUBxbQE2xUuh2yT7e4ZuUCXKqGJG3MSB9dhm",
  "key31": "52ALB296BJAXPzQ4YfVg6iD7ewQhuChkmYhTVQVDM8hBcrRbUBZ8BDQUWrq1mKwAd14EqkKSYAbzqRguGstCCj5r",
  "key32": "66M2wTnPKA3wjrWPD2Sc4hnvbsrBHCMZJt6zfaLQC9y74SF7GRqJkcU7sanU6wL36JHgfKizSarA8cQwaaBzLh7h",
  "key33": "5JpgUWrrxD7xTrkKwbY9LycqK5z9LqozQwCKMLGefd4txLTEPHLt6JbZkE28rby2BYrHiuAwNaQhKQsV8cJr4U2u",
  "key34": "5t6eReo4viYhrxx52Q7KpmwqLW8EWCS7yFTmxLu7ddvLWEr4HVaSNtRrQkPLLErG5aTYn9x22LkNauJ9uSUkmbuJ"
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
