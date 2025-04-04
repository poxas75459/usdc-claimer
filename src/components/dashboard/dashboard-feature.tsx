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
    "5mCeLMj9pDvVXLT4rieJTQq8aJMGj9ibTipnzAGsRMaWz9iCXZ53NDXGLXYmZxT2tm91xoBU7T77qGmehG2x7w8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mS5tuSVJMJSn4awnT5kN1rfqsRooSsdMFfzQfLYcjJ1AGJj8py8SfydP2rG2sXnWnZAsHfsyuEekjNydZ84bBkH",
  "key1": "E2c6MTAZZCX4p9RmpC8QhttALJqTCuC8XNPojtLWM9SPECz657rtHZxTgj4pzbraKfaAJoSSVVY64Ado1qRBXrS",
  "key2": "UkDC7heGTMDb4qgU2ojJRQem6qzazFrAeDs3Aa6KFXtHodGyR6kzvpfTonRjrexNH7dKLY4PuJCxZbtnYY8cvDG",
  "key3": "4ADVwbftiEFF9PJEbHSzXASaPpxq3JDsd67y5TjUVyeSXHZ7yDAEFKvUTf2nfTD5fj4NzoaPzbzSB5o9G4NYM7Qs",
  "key4": "5J2SpUWCyVbfsKJ15KaUW78QEwVrJdkr5GKvxLh6WTki8odxdjfBGqn8LrFEw9zpPyJrjkkG9T1cSdnRUUUQVSzG",
  "key5": "4HGQjRHXxXMcpkw5CegfyFmNJBVEKM3yf37Gtet9JMTx1BCdjX6hLtpyJqhxjWZ3sFkYhvm9xXxe6odH4arQUNQu",
  "key6": "4SsgjUxLrBsbKMS6HtKAqdk7BVgcpgSthFArEFP9RDPZ3jvRy4CxEDfSYN3idzFaKcjJ8bsJEttcruJFi4PF2481",
  "key7": "36q1KRtnvjuwnV1rVpp3sKTqNMXtFo2WmnPm7FUPVa5YCX4wCoBSB1N9Z2LkmMHe7sHvyaXWvNeHUiKTjcY9QQWp",
  "key8": "2V3sW3DKTM7aSaaYwVFDgmf4QecwEnYG2LxxXWXRA2ndSAciTcHuDuX2ydBVYNfkNCQxZZRzbJLz1kEwXRA4Vihx",
  "key9": "2AEkCheGDBo888C2CSxaWeYwSDeuKy15oFdx88WbuNtTaoEfs7zyk8VGGTVtz5Pv8kj18pv7P44NtcE2ZrboUsqM",
  "key10": "sTYNMcshyaRRxCPYPoLFbcYB98dMoFtHK6sHjMDXFnoso2YiGSrUCn4bMjJENhysXmVcqxfe4FkN5aKhQDCH5qM",
  "key11": "2FRLEGzjic3bZS6nHYTMQsYJ7fqw6SHzNogKasqZQApyTDiSmKvHauKzikXZ75eLKvmdhvWqVt1rXaQoLB9qN2Nr",
  "key12": "cK97r1wuwAKsXi6aieatUzURiqygMnvWY2BWhoTYFEES2N9dkf9FoWhyNytgVTeHzxNWtuExK9SdTnFFc7pdLwD",
  "key13": "3t3sF8GarCz1dpLu5PRq6s1TiVU6ftjhjfsQJmVaPE4SArPjwztKPFmPhJdhJT144EJN98NJPkJos2DGPfErExBs",
  "key14": "52yAKRxasZSihQsEs3zaP4ud4oSgWeE6CiSMjst48SYbQiSadmBgPHuZjoW81aP718ZmFhkb2hjUhx5SCnmvzzig",
  "key15": "5aVdHyTAvrWphRq2HpbtxXEVvezw9m4U52cuU4133RpRFi2WYGZKw9Wdx98o4k1RmUaHFZC75dmJsR7m3goQP3s2",
  "key16": "53XtAwUEEXwtWK9nDQiJDGpK5mYPWTQsvdnnmZpuS5eERAErCSj2qavZ7K1d7LLTku1iP2h4pFJyQUzH2DMiWTMW",
  "key17": "2VBkrcEUxSaaBDnF54MhTphdhAnBRudHiF1btjKwpWe4jRtKG6zCGFaPHHvZYx5fvbz7M3hrjExdUsTWsafFBQb5",
  "key18": "4vCPtoYeVFq5nJn6CJxRnnWMTveQVALo2XzMZycsL9aTbm3qB2KbyEdUUXGpmeqRz762oWK7YjnsGkvwN4pN3k1m",
  "key19": "5y32VBACcSVP7wv86Nfa1YBD5FiFcDGUoymeCu2BW6SfbXsfbd4uXQPy4ZuncYEWLGReZDGtidc9T1ignx5UMhUB",
  "key20": "fMSAViKXv1G9KpAm1xtxCFE2yRgWRQT7zprkXGVhph5v1syhAb694k6kghzHr98RrgXrh7Vxj1Chb2rFz7vyK5a",
  "key21": "514yZHTjA2SJ8nTXwADbwG29K392s7xCvZweC1UQuW1WCf5U4s6e7Cwr6o2JNnH3qKwmkLJgA2GN55JgKQELzK8J",
  "key22": "5v5w6KprLAJ36YodZUcUnTMJHeEud5vUXnpSj3ZmQYFEecFwUU57xGTKvjhJc1YfBu4oR1k7xzWUU7L92qw2VERM",
  "key23": "o8oP9B2CJ5hJzZMKKAbGrVUT6GWGEgeWZjAz8gBK5dHht95eubuq7f8EEKHw1ysCMa42KsicXGGuzLrHVDmRRt3",
  "key24": "eaUNwmxAvWZx3R5PNXA3mtGDmUCTjYymo6cragCtfjzabdQBzeQyyGuAwBXDKLpUXtKYNFogUwe2GJXSHpXsvXy",
  "key25": "4SEFbc2cun6st57CG6EmWwznT79PknbCSAPdE8v5GkjHN6ZSTKRJy6RY465bt3gP7qfWkZbJDtqbG5uRLgC55TBM",
  "key26": "3zLLSwTuKChZAtZqi1Pb8KoU2VJBe2HbWVUtttZNVrKYuQ6B3XMzhJSTiAG7NpKaGqhsSqKoZrQNRrwTtbHgSeb9",
  "key27": "17B2mNX9Syha9DKf2McUT4zpsGR6SveSssMrLM3LLzLVdqbvUMLZZ34cs6zXJyxZuarEgKUxrb7dMrcW2cx7pAp",
  "key28": "3GFMZxTXFKmmveYwnsXiHBGHjCQVa91FkUyyGG3nfmri2pegS52zDRYDn81YeKLAMQQpXpYYRBm9QHcn4zY1FdgB",
  "key29": "LU7QuLeC82tLGJSSzkEV6tMyWePsNcmDZCphadweg7PCYGyxL65mkdcro786FNrk2c356tdcYP6o3uVFXBuN2Yf",
  "key30": "4LLvDWALz4btVaRAJa3JiRU8H1PZb4ZHx8KwK5EoTsiKfXw8rvLMwAfaYX1biPPVryRGGitfARZpnA7fHskouBdQ",
  "key31": "3AZFQeAfKyzAEJYmJhbPt7Q3SsXWu7PE9fDyfnTpmEGeKPULaTp71iUYGxPHYSmajGGzJcXqBUe92aZFJLchoPfE",
  "key32": "2cDkmsRnBnjZBfUdPUkQxtf92F6mVtb2cy7DKBtpWMJRU7kQnXKZa3HSVNPJirsFRepgvTDEVT6zN2Wf4ZcoPX4s",
  "key33": "4yqsr1rehQg4v5sPPusAqSGwZAc9akPJgrRaq7kyienADZ2ZLyMM4tjFLLtzDpxznETYyRpUMckDa4q7cfXcAF9m",
  "key34": "5BtzVXqqYgwUJG7g5RZ7hU9ZKqy4R5NzQ5uUcBrrn2r2Gz2zcou5woEwmDvxBLZuQi9q3JQHnZJCqgMwoUKGuqWA",
  "key35": "3EQpSvRT812ZBeAVQ7r5r3YLgBqW7ncX1c53FGqqcj7hfrD5aG55FqnVyooAr37HkLUbRoK7DmF8GWqTLyYRHnJg",
  "key36": "2L3n6G5miGma6xeAQEb4Lfkede8TdjtAQAT4MKiFptWVpLafk6B9XqwPRrryEZWayfkgdWzvDQCpFfHpiqcH5Qxq",
  "key37": "3GJ75NqPaobe5Daao1WqC9PbshP91nML3vFQzRmboZ62RWTkdkza3cDqYZtmeAz6WjZBCXQj6JFbQ6TW2P1sBf3g",
  "key38": "5Lw7Y5eDyMmDxhCDJnxi1wvJQ5qw6SYfSDKKE9ymKjKddkdJuMKfps4KwZDJWmaA9wv5mMPXBNThcMbXyt2sbjD3",
  "key39": "5icDQ9vcdTVLgRiR7KCphKozbcPWyB9ZgSe1Nuztx3kPu9zY2EV6miUD5psAfhTsi3YMW3S1CxfuTu3dfC2k7FNE",
  "key40": "2LgBr5a9zFUAr55qP6UWUq1iHL9jJjZVtFbKe7GZa99Zz9vmMqAQPhgp7WTwQbhuHVBCHr9zgdVgaNGbqZf2GwM7",
  "key41": "5pbxfr1mywDJbQ1XTSMQGWXh1SfHzZL3QYk79Cg7HaauB45j4FGCk2Wz9kQ9MiVjFeRGcAy5CRQ43ePmsHZb3Jo9",
  "key42": "5oREbpQpJ24jxWNkVw2N5NPf5AszUB8haEpyy4dxcbYVL7zZs6oXaUYKE8fCNnNjDMQra19xGMxwNF4SrjKtq2yU",
  "key43": "PQpgmtUzMBq3xK4rwHjAqtJekLCMUwTQkJYgeo388NLW92bXatHEM7bCscjrhvQ8frJq18FKcgRcvvmmcppcjjc",
  "key44": "4pzyAcEtQXHV7EKiqSFXR4suJGjzVtVh4EvMXmjLnyqEfN8jTxtq14dwQ1GHiVow4bdsXMPammrpLp9BvHynuFGS",
  "key45": "3NAYbqvxEnHVJzm7F3br7hnAJP8ou38AAAr31aN76M9KcZiLV42xWdNUGrFUUdyJBx71XBSYhYUqPvHWicZpxkyL",
  "key46": "5ryhTxMPN9qjYBxrMoKjj4S9mYuUTeMuWQbjN4v6sh9kXSzppVAHaPyCjKGJPjq6Q6R4uX2Kx4bhoPKpby1mNJpQ",
  "key47": "3NEasWmAHCtZu6n9aVkH9xwMMgvHEh2rQXyrtyQ7hsHSMF7oZDJLzjRJyiaGWQdEbo1BxPrA8sfPQkXi7RBHjeWY",
  "key48": "2XzG6SFKWX8Ff6apJqsjqBw9j1N3hPsHPLVXHF5vEZLGyuYyWeoVS2jF72RSjBsiicxiAGosnFN2Ck7SfGWTgC2x"
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
