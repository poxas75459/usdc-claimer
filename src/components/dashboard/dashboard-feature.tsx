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
    "53bSBoR25vEb7uBMdLgUqh8LGSV5jXBdtj7ps5fAfLaxB6bQsGYBh4npY2UpiqwybSajoMX9Trn6hoe8crn1weFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nKwEjJWbMpqJpbgDRf3zc5cgTRhHhZXznWG3ggQaDhToLQJGqvRiBKR6ogg46n2LigPZqh1tXqUL3Ai9DFA1t4u",
  "key1": "4Kd3B7d8U4UpVRic4GhNPaLW4h9qb6rRwk6pjQPASHmpqb2Lyyz1X3oYbAJ9a4bVVNkkJ7BNZCyoDvUkZoLwnrW2",
  "key2": "2jr3itmN56pqUsuBPD5ZCpcAVtDPd7mec753veZK99Qq7afB4zfv2MW52xCVtgxpuXuDNY2o3vWpmvtvjvLED2h1",
  "key3": "2NGoehxL2RLbqJKWRoAa9VhuRghNdFUc4W2sPkB6DiAxFHFvv7BXr47vqHneLsRR2pprT1wQ2eP3eJdQ9bXJyt42",
  "key4": "idzHuP3Q1FReshWeTrff4AykBdumZLtXZkD4UZGp6eEe2yHaXJmC52ViXrR4sezCba5SA6PURW2aXsYpdtFjDjp",
  "key5": "LcFgVrQURkiXYcvXKLAxmAN5tz4X8k4Ngq8yqRbqkCK6Tu6yJ5nYYMiM8DYrT2weTp9xAgaAuz843WoJVUoorzF",
  "key6": "3J92wFjgSmutjZYnH5fpp12uFFdHnww9TXVXtXNbCwWoJnoWA1Nz9a21nYkps9xVhsHMstnqVWP2D4BG65kM54F8",
  "key7": "2yjVNFNX5FSt8u4A2w68t4DKeLRRYkyABC3ax4UnPuvMahxxbVRcHUmREx13UMEL9XhCpUkkgyvFzXBRokMNEhEn",
  "key8": "26Jb6fZ5j4EgqzY4eT8YW2iDsLo2gYR12kbXQEwCN5Ajzvu7N7MW2ZPvfCoePLhFPSXqqkxJuxsZNmiCmnvt8yaN",
  "key9": "4M7DdRFooy3kwDdco58t6xG52vEK22thSY1juarz1u6Yj8V4BiRdxaKVEozVoCCNzdBmaH5qeQ3toFyErfTYjxxF",
  "key10": "5Xf1Xozy6LxoE7J5v3ZRfZyEfVMk8Bm1kJUpGy73EqmThET9mUtRrLFEW9gRbDyh76F5d9aKzMzB5tTb1cMfXV2X",
  "key11": "61GEHqt5bwvZMJrUrGheFSMeUGGtvbC1LqtNB7g7hVdwegy8qyFexyJ5HHQNGTuj74QnYTpu68uWzHrh2oFep5YR",
  "key12": "r5HPev5eyDSEAcMVu8ksXjEz36ksGnjEPqdgy6FdNKHxTktdSvL3pL4B6CPDzV6ghhBNeBKPtbxgSNqT24v6aMr",
  "key13": "wJ4rwSMEPRXgJeusTx2FX49AfWDJUtGJ5HNAfr7tNcrNb87zkGcHPe6DWtaNUDaKX1PrzsprToFb11487n9b62H",
  "key14": "2F23vcrinoMzGmu6ZAQPP4BGYN5D1WzY3c5rb6aRsRsrLVnJiyuiP2XXzAccLxUxaEJfgkJCYaB4aepN8B8WKGow",
  "key15": "5jL6Gdh5dFkDEb5BkZGDPFWd2WddJBq7M149yPsF2CKLp5jv1YxiDv8nRBUWys5qbTnQXykMqyFUpjFcp2TouSub",
  "key16": "2xA7buJ29pMSY946xsbhvn7y76jAJDv7NieaeUHiYwdz1Um3fA2449t4SRPDoSD8uweMjhnrq4R9vBVG5vVNWGDz",
  "key17": "49XwP9xHDkruQgEPjyvViKFu922jz9ypm6EpsbTd9LExgXbENBs3kRLRXE1ytUZRZZ5PfEE43zpSYCM7sanqY9oW",
  "key18": "65ym5BKVSsNEcrxfBwC4Zk7dRy8YqSCozmdDFh7DShPfG4r6j7x3tSyntLr59dzrDx4Hryr8Zr5KSw5ddY4oX9yC",
  "key19": "tFQFqgJVThGqvUMr5mWBRuNkBnuecuZkkwrK86cGAursqA2RpTPnf7Ek5ZTwccRBySKuDwLv5SUYzc79CfUbzN5",
  "key20": "3sWSBYMcFrhM3L481LH11bgiWmDpRJZEh7QdERoZPcqvkUD1ufsENpywZ3VmZ7sonDsfguYkcH2TbwYJU8mxTM3r",
  "key21": "26JiwGdrKQjRvM8xcmdT7zbkwVf4M5fKxaNgY1uqh51qA8oRKTmecpvTcpc15VZ5J7mJYJGWeLxEjX9FkMvs8vfU",
  "key22": "3cQbzFUpUeNs6qbVATw96vB6LpiPAkHffGpdY5EKaeS5Wp2MNoNq6EAxx2hyBe5zYhgsNDZJcsxEHCXaUJCEwg4Z",
  "key23": "3ACxAAos98qv42Z6EnePZTBeXKNKK7NzdqFPAvv11zH2Fm3i7kTqLaBDrkMkJiDwvxxKSAQAqU4jN7waTVvLSiWf",
  "key24": "2wbfZbaWxCiS4nGuMErtvF39TJB37B9zp7RyhqSgQvz1EGobQwyhQ8JhPd8cUeMKVzZwWitnm6sw1GxVXM7zRbBG",
  "key25": "63nuHCcsn181f2AnJwSRr1BDJkyGts8ZtTPJpW4E16pKmf17PdYNXJLvMnoMfjMfVN826NgDUoj8Dv25Uof1EfES",
  "key26": "3RRZyg78ek1H2eZE3cDpiUighTGVcU8b1hfkSja8RfKVf1FHUCXHwvKbFSN6TLk9sP4e6wLHMVRy379LL98F4fn5",
  "key27": "4e6sxuQEvdp5w8sLRDbxPankNYwVxGSpHBkojGe8BFn2GPuPhJgSZP4pthNSKRfGPMsTX7H8xir8pph53P6A4Ybu",
  "key28": "4VeRC27CYL7UnDBoGG5gXE4Uoi5t4x7Sbxtm2r8EdB46pB67yA8iSwqGpqzVDECAWAz9zyS7gzprqT1cJMBpv8j6",
  "key29": "5Hf8efcA4iL4r9q4175iaMhvfJj31Z5EFwfdwYeocpx565eBop5z5s6ge23WkqsN1qbNuB2BgKxGpqmAuqXgf5gL",
  "key30": "3xCHXWw53hRpWCqUDbky1ncE4sbxrGEyhfgAtWzMFWhK7jL9p9DqoM6tdENqsS4cQ4F7igDKYgSGDw3PQhQx2LVs",
  "key31": "4WtbyYnistFUUnFWWz1hZ5E8EW57QvCaiPru2oYUKWfmWV7pHuTQtgXBSdwrds68K5WQiHpkutP9kZfhuJfLzvSc",
  "key32": "3CUQ3aQ1wLUtLDYUjqUigMAPHBE353gudwTrjTKdjkcDwunn8t4cP8Ch7QVMXFFef8fjKe2XeSUWiDkLxFB6fgtK",
  "key33": "247zppBAC6FFZdQ6RrQtVJSZ6EjpZexHY4d8NwNScFjXExZ1S6oLsFpafxsDEkBbajnDUZCEfdoeYNgjZjMZtdWs",
  "key34": "Ko8hhY4vmgR6dK4m56MyCuQV1FFfAUDXbw2yezCf2L1tsLyUp6q1rBmSrjhQ88HjUFjpA9JJtxc4B5VkWjGQGXk",
  "key35": "4LP3cmwLSKTkryC7NQMTeXdknuKN9rBchWHytGpSdr19jkrzDaLLBDasYQTxsQkJernCDkE5MQeFpVGPZXP19ds7",
  "key36": "3nwwrvxtTA9GfX2LXz9QZSSeZQ4ScwdrAMBjvhthc1zC917uAg2FuTFBfiU5jUsBp4muK4xJqvKoVZ1486JGhPvP",
  "key37": "2NQArJcqwvTC5TUPcFEZvfj3graWoojFrh8SZ8AXCMzjxA82AJZNYfA7SKPE9JQpikNVRgKSpKh3jLwd9B1ynadA"
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
