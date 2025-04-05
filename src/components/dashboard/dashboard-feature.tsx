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
    "3Q9kGXeqW8sr5Udy5GMxfXgdJqqmKAcb2Aqa9TVA8yN9ZtVy9rHVjbK3jVSUrjh3PV2CmWYnpEepxDNWPzL5dh9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsUqFRnhZZijLvU3b9EZoozBRRMaVwhAhXjdQds3Ez8MWWLvQGxcYvPAb5dXJZk1K1t1bgbTST9cd7EHYVu2gRS",
  "key1": "3jR8JtZQc2tmzk31qgM62L1psmTAADtoAQMfrA7Rc8Ahbwer2eSmy8XmVQK4KrTK68QwxnTpAVScmski52sRZPt3",
  "key2": "Pnr4hEM3qYF7eKkAQqT968XhNH46kVhhFX679Th1RDP6pCNrX5fdBphcMmoJpu755MX39wC3YbcRK5nEzRUJfRV",
  "key3": "3PU9cGBPmjrx5MmYKDLfmmNYauHNXF6drMVyjcnkygKmYJ4gPtexp1E7FvgTDdgWnZYnVZ9CBjLWxvPW8sYgTppw",
  "key4": "3e3xqePyPHCFetbrdRPMHS7jxJvhB32fqaxfVmbdmsgWpWoiSGiG34ZngazCXgaspK2FVEPk3t5CiNB6nA5t5NSS",
  "key5": "gf6e3FifYDUctFrYCP8kSccJLisLJEbkdrTNMQ5zPcdndzW3hGfz25uoCHhvPLcwPz6vM173Zv5bsrvChbwh5kv",
  "key6": "3AT7vYSakTjhu6X5P6gSthUFWryqaBP7hpUeCGP2pMqdYqfYdivAHgRM4dpniNYvnaXaLXoDAuBGxBqu2wjrpW4U",
  "key7": "mfcmaVd1Rs7CLSjiN3EqEvdP3rSCfU7dg5jNfLXRL2Ltu46xJeomQUdsuWyFRScapTAC7jRSownNmqjjEizoa8W",
  "key8": "2KnABwSnRV3jQWkpobkfAdXs76tu93Nw8vrL9jvu8hYBRWoCXZ6yuENYx41GFTKwNujYHPWwQi1v1yw11BnXDkUN",
  "key9": "363iqJHtLrhjDgud6mPTQUSE7x5W73qHLAcE3RHN5uVw62JRxpNNvT8HZueJ2n9nW1UtYuwDQjpLzSgoz3iTW6X1",
  "key10": "5e7PnaE8sjz8j8jxY7v9H5dw7Ykq55QEsKYDtyTGxEY7obeHUwZxcjE6HoGoXGiQSRMBJdx9aUCrWjPEyhEDP2g1",
  "key11": "tm7q1PrhBhV5fX6i67cYbNgHFeudFFu7ZUb8DRUvgWRBL58bnzhkkFzMqvBapNKnyp53e7D67QTzQ18ExVFLSEM",
  "key12": "3WgeoBzJDez8TUcPfmDZQbCju7AXxSW5XPGvKRjC4cQFyapr5DirV6bBS6gQPqPT69cXDqm77eVPgBoYBogj8R5x",
  "key13": "2v5hNFreeaarQN2ZgxmDKYQcoPaDUA9zG2DowHFteZFUH3d3Pa2YmfAXGzkqvrJJNgrTSTGrHHsKABH8VbHft3X3",
  "key14": "4tjZJFNWJBZgeCwJUwQNPhaRvn91ryU5vzSgb6ooZr5iXYNDg2TKzFP4i3k8tVT8wWbsWzAYygtU1nmXqCNb59bc",
  "key15": "4b2moCCY84tPJEm3Km6k1rvfbuoC2sYdJcQwed2HXUaTU1L7hvezGDwmxVa8ecLx1PZKuRQzUVgE73S4mDPHvm1T",
  "key16": "2Jrtqk1bHSBA7md3hHqEXx9phRjzhfWwbQReDyGEBewLefidT5nowZiPhBLF98WnZcidzpHR4ttUqKSZ89VPhJQM",
  "key17": "VMPfbhhyKCoxJA3Yg8SJVKHhL7kcXTQqBauuZtRZJKiGXZ2KFm6fDteWQTeWevZ2WbVtbXjZHoeDD95nTefK4Fp",
  "key18": "TGM2vNh32eo6turBpdk936jxavfxn38ynSH9Qk4SH73MrZ7pK7mJRU5bXXrprK7AsBM1fj3E7bZSUG7YT2y3q8i",
  "key19": "5NLotrr88xLjs4SzaX2W2kPhooEyw4Wqj4mAqngtXwDaWp6Z8XhhnLiym7GJ5ABDVG6AVXN2B1da2uvkAcevK2ta",
  "key20": "2LfVGKLa8wJY4JFYWgwbsSm8ePb5VinKnysWLodmpe78SEXjSa1DP2bec67VVzk3PjsSyWH1nNByR3bJucM3twGG",
  "key21": "3PpCPWkSN7uZJz82hwJibU3PM42wPKwANjmF9xXHNdM9761TRWDFR3eRkXhFFMwWey5g28x5H7VtxZPnedwyWQQo",
  "key22": "4y6poHx2JmjrHZtQxBeHKNpY6CzWSTF53snA2TDMtPUmBZH3qE6A18HnUbXXafEaRUhDoaiso3NDm9vo26CLcoPY",
  "key23": "PNFTdpeiq88TxLXTyfbm7CBA9DvpkNz34zLeGRfkdaVEYPTiHfEvGF6U1FRfPjn4MzDHQxj3gRuw8obb5QufRBk",
  "key24": "3GEtsb4jjj4hAbz13WfgcfcfcZ7ykFvxWBz2ar7umrPgbpXWBBSwRNWZPUibHHuLGYGVSGBtWEAnuh1LY265ASbN",
  "key25": "3QPHpjmmA5kQ7bxXZgvnAnq7nRsJLhwPMu8XrLs1QEQTgkqKA7iBFShtrZQbf7dRDkCC4boEkL3oHGPnvVaj8Mph",
  "key26": "hoCwK2U5TuBY4qS7FCk84akEJrk59zHWQf38VTXUFUahxuh8nWTjQZWGNf12vyvpY3r1zuZFKjF7s9VNPrvfSvX",
  "key27": "wBrVRH56yvHwsK6hwUBwYcDGQfM2hdMjtD2gjtTH2WXcYLFfH2dy8ATkBjzpBQtXwdkvqackbW2nQqzSbHXmysN",
  "key28": "5gEKTMEaJrpyAFCC3wkUZ2sLrrJzCSVNGsywB9aCxy8FzoCN8cHjwzNtwNm1k7wXAdyH24ithHJCoxWpQHYurW5J",
  "key29": "591u4ESVcYbLDkFRkBpTxNo8K4bBep3e6wbZ1CoJLchtB8hfveCJFwXJvpyvgbqXQ21wVdEm6Hm2dQr5AaAHna3Z",
  "key30": "66V1xbjrqs5y4e8cYvBcye7ZpCsKxoyzYfG2onVgwK6hiLrhYGenjBX3f83cvmHjv8aKx8n6DU41km5qtXxuAE1M",
  "key31": "2GhJYN2Br6ph2jG1XgTX4oAiFVYzzARd2ccgXonHa882VEX51T3jGV9aS1NdDY3NnPwLj2d9zAQ2G8VVmkUa8XPG",
  "key32": "h8Rswf5MyhBCns9g8j7f6JfezN62gDs4fA9youPpnHHYubSJE8EjP2MukfM1jed2V21YhYgVKfMoZM4zwL4gr2U",
  "key33": "2WMu4K4ytASm4V4LAEFic7ueHTzAQHLRrSBWEJbrMczPWZ8E5km4R7aw7iZ1whtR2XqbNC8RyWXUywSrQ1WzhyL2",
  "key34": "2KWo6QGR2n3oWQbJweJDSJu5HGFJArkR7PJeCVwk4YrcFLcM57h9Pcd1AJGgRTPrhEEdGQ4tzoxQe6pAkWkwqTiE",
  "key35": "zU4ZLSKgqnkjQohSt6PyTZKAu1QFzdF4e9ZcQdc5jE6LaYQhXXHbgtqGLRAb2quhDUfmb3xFWapCehuEcyqPTUK",
  "key36": "8998mA5Vohj7qHXRcc85wwKzQBEnh1G4z3CtCFDxjnE3PiKvQUhGTUZyZrp2SDXdjuVSKCReHRJFaNN2XznyL12",
  "key37": "63CjdHJQ5dxzCooB7SMD5nVqL8pBszYA3M6Mrc9TzPkdRk58MXCNxFjs4Ba2PynoJ3W6BK3sUbsFzQAd4qAxiHAY",
  "key38": "QsYfNPea26SuuJeEtEZ7p26cN9s3CW1iSXst37JwtA2pAqhL3DVkfRsG33ZssmyJhwAWD3RQsgNbkQWQgbeQWL8",
  "key39": "64AykWfUQ655PgqGLueYWbbmEhYjYShfPUHNduKQToB4CFvTmS7vuS4q4ap2LQjQGnSAzRFKdv9TTsfeFXoVmNDu"
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
