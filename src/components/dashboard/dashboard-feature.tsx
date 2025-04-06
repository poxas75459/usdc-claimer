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
    "3zLbyq6hP3d4FtkbKRDERDm4zNuUmzjmbNfaydzcmnXwoK8grUTofb9Bf1LvpNF4DbMoXctc4zf4nxXvjpKpVD58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661Dy7fthaEqAkT1rb69oqQ8FExbak667JYHoN1r4AE5Ph96WbciGryCEZ55jawDGmTTYzxyr4RqyvUnme7XUyMz",
  "key1": "5USwD9hx3po7s8CETwqjwJ6Vt4CAzc4xjKtoCKtcbvDWkprqYJAK8hfjcud56gzJwTM8DAJbu1kbkqQrD2CVK6Jm",
  "key2": "bQyRfKrjx1FDUe7UTaXjbs3SACoVSDbTgSJ9Av2g3RrSzjNNGM1SFNSmVW2xYzYR4H8oUjFanGRFqaLtKC7dW8Z",
  "key3": "3MudKJ7FvubusiHbYcvaGH6uBzT85iKWSd1qTsqahFPZnaN7xwFUBAcGFUSBHbvSaKVyxZc12fJzzpP6QFDzNGbt",
  "key4": "4zvjPUMiad32fjUdfTgdmNzDsjEb4rWDq64VhVQPypPejkNA4sSuwxRZMCVynh6KwSv5eAqnBa82XQvUUfrLksZF",
  "key5": "3VDBWUmCqVF9gUwi4FEgHrzwywMsesmT5rWarnjk1BQyGbcyy5J3g4BwYsvE36efikntqGXiHfQvBizvoq53H4fR",
  "key6": "3QPgsSe6Gq4cFBFBPXTVfpH3pcwWJbody7HNg3NDL4V4uARH16JM5KjUp8U481GVxFVuXcV7vPP3SquQFnmhKuHh",
  "key7": "4BDj9sV8vy4C3fV6MwoVthcyFSYHswDS1CsqSJcLB1pZ8ePLEjt9kVnR87Y6G8HkVJg346nQzNcXFzwaqPpYjFYx",
  "key8": "4gfDmVfSzkuJEyh12UGG1ieJEssqn2NqfRG59VDM8LXDjFLnqxEzf2zNWvDgbqxvg3JSZGrcqedwehVQpUBpPgCB",
  "key9": "gQrtq4gJZ974RokQFAgyV2jcWgmm8JWuZAQ7kor6xVN6KGE8j6R5W6CyXYpJNrnmqwrC6kSVHYqWQsiofthvQeV",
  "key10": "42czm6yhaAnrZpACbL37t6oAqu7j69pAZFpo7X56BFYeycZtcaz6y5bysL33VkvWXmaihrKUfYkau1YcjaRRERGQ",
  "key11": "4XHho5bUjTxUPhUAt8cd28eRXhYwSRLM4YTLo8wqdTcYfQGwHoRFP1ZWxVChG7smui54zpWHieDUGNTanEcC1Y3U",
  "key12": "4dMTSvoKiK3hSgqu8ciZFpdGUNDqNy6d2TQDEg4grh55Ly7pJnNSeJSwfox452EhJWrChgjkKxJD6LkRGWGqDVLM",
  "key13": "GDBWKvEJsaLEjdxKALBtw4iovR9LsGJz6LSKoGYMeTKvs5SYpPip18xsnX3fxZkbyMH9oLoYaQzUcSVBVvC34qX",
  "key14": "TBPDSj7V9Ga7c2L1R8gR8wLGy6aGFFQFtEC36kdV4BBEWoiTmxSxT8FRHnbe33XXHntvPuT6fBrztkZDVUWghcS",
  "key15": "5rYMg7R73dxETwXmz254qYgNRZebhctn3p3TYH15h7pGhkkcA8vmbxvmTr66NXDedS3n5Ua8ivzJYe1jaZGh3zHJ",
  "key16": "3Mo9DoW6yp545JxrMHpL3QCHVevK4whUASzZHTDet7LEgm81Vo211xK4NpQnPujXCDxNLWK77TU485cadaTGtmeB",
  "key17": "3cPxop9qHEv5YA7hSGqx3LPuTWik31KDSnYqqZpMoE9S9e2c6vixKXzRoMnhYUHZuTYLhYfJqiXc73JvephoUHgK",
  "key18": "5hFiqt4taKVuDfqRPdrM7QtURQ4cWhPWHRTuXW1FhSZLC46zx3gZsbNEA7WaTVb6dcoM9N8pB7rJpRAJdvS2HvQS",
  "key19": "XLNwZHqX19yPk3UHTHvVvgu3iYwwVrcCBgQMaxjyD7woXu4M2NvvnSRWC3XBzrmmEhKPYhNfzzye7sxaVwWVZ9g",
  "key20": "TbeydbZGqNjMc1hS9uJgnq7hQRftAFTA75LH7vtfHHhWBiX9G3SCYCc8PRDGX6eeSFdrk6aUjEVq1p9BJFvwwCx",
  "key21": "38nRcvBbzJC5SYvezNTRMhn6vTC4juptswnNzcmfC5c8dEfZJJhdEAySNrtANKB6rKr39V6rKthnJv2mhD52z8E7",
  "key22": "tBymFB7AomgJ9Hoe3YKwaraAfCpXMddCAjqbi4nBA8JnwHPAuUExwnZAbFmFkzBK1CNVK5u7BENoHWGu6Bo5hTn",
  "key23": "2UTxLN4YKi87A1cmm5G4Rxsd3P7VK3bQEsGLKL2FcXumwZKesdTofpAeFMWggnvfsyroEymbWrXnZhGFtTAVnvoq",
  "key24": "5w7VhdYSNqet9yWmusqcKDbhsTe4B1MtL11RCc6rcHcCZt88Ucm3AV5Fd4CLTfw1f68Cm9xCN1ELzEKgVCVFs7cb",
  "key25": "4pi7KDKGJ8N94okUkBF6Wo2Sy9ZzW6XMqtqBV6NYZfHtcpsvvzekVPFsYdVpRTBa7dFdPfHccDpvuJSD7c5Y3QF4",
  "key26": "4BgBgDRPrxt59gk4fGgYBVdRZpaSvkbMSKmRupJNYf7fvK3BDhCTbAxqeJ6xt9HnSVWurfCYL1vpJZ8JE6cv2Tai",
  "key27": "24iSJoAfZcSHZB44XLCvLMM7NHxSJzJAX3kCdxoeTgjEB8mPydqqHfsKacgF57Ufjhgmg95tsSs6etecVHBYjaQm",
  "key28": "58EGyrNDZ4yVJTwTiT89bj7H5mfcpn7r9HZKDWA6KyTykB7sXRTQecb5wdXJMhbT3o9XLgfrV6ShFjNo4JnHdfkc",
  "key29": "nb3ZidxJeaNWt4vBWgCTLAaA7sBJXpngJ5fTLF9Nh7roi98Lak7cKPmc4Jv3LyZ3Hke6QE9y5xKzyXVtTBksqSd",
  "key30": "4pgwDVRF2mTVkJAonv3fuN2kfYUarSeHy46YZcF9MUZc6yzfB2bHUrMWYUuSgWZRzyxbra6pZ3RA7g6fZtLHBU3D",
  "key31": "5XLgRhm2VZXrQKP33sqPS97HqcZhMybEcsktfgNt25FiSND6SBKWUCHHAsUH969tjvCew57nF3pKEveQnLqWpi9w",
  "key32": "3BVURJhvshwHPaGcaFi3GmyA8GL6qYeCcZ2qpBxanqrC6BqfvWGf6ZvWZ4k5HXPnhVQ6PTfkHZytgxMVnTcBttnJ",
  "key33": "zGULQVVVFLhj4Z9YofQZtw8v36kRxVES4mbEfGf1Mh8PDiQRbgFz7m3iewDgwqk2DuCduvYxW3eKMXD2ynGLswE",
  "key34": "3fcyrxW1oU6fjDcy3F6XPiG9Rdr5sMYwNxEMDwwzanWTUADTB25m3QH4CjAZyv9Nc8kPxZGzjR88sppfqcbYTrZp",
  "key35": "5C4v5oJ1b5N2wvxHWMGUXKzyGSNU2ZP9scnoB3L8PqNCuk2s92FhS7bpcDcpkjv7YrGV7casYckWhLbJXyLEeJ29",
  "key36": "4WLarkJzghbLfhWqfd8ivAgx56kroXyS5aNiEwFDithdoG5ewvM3PzM3jdkK5vdouipUsscppPWNYY48UFDRUtjW",
  "key37": "27xQSoZDJhsYsAvEGo9Lkufu8zxjcxNGdYJkrMz593JMtP3BFA6wnVVvjizdgmeXYuMPA2tUajW9X3V5gNGtMFGE",
  "key38": "5v6TZhWm7eVohPUaeEF217PjR1SLhMq5tLmcYAvngADWx5sRzG5Y9dBRzwVsBKc9T2PvjF22XGLwi2eYdND7aqji"
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
