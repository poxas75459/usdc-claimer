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
    "hAeoFxXZpKGrz7Vzx3TCXX17emoCGJfK8VUZX1V9powHYZ6LAMzjfTRmDTrAuQCPMYEZ1V61T8vizW7eS7zEj2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3hEDYkL1A1cAANxmc9xiFjRDZVSJt6VudQnB8vrpEYa4SLDnHqETRNWLFpS9SEs5ZXxgDRLB4pX5xuUP3E6TgF",
  "key1": "3L1A5WLceQTzsHZKQbudkoBmroJLnQzTM89jBHMtUq8BFWt41dGn2bHnmcpBjoBQdcTGtEVoMVAirdgZQ5zAi74C",
  "key2": "28Lvi9NLa4WyWi5RHhsVNbJVmL7T2upqCPHZE6GRtSn5467RSwG2k2sxAt9UuFRdcyJ94D8zXfM4tD3FEH64rewS",
  "key3": "4AmD4jC3qjnb6dxYXBRfu6FYEviHyhLPs7agAF9RFcH7LstSu7qGxCvbxuJJW5Y8hTDfj9Kuxi2it8HzXCLApC76",
  "key4": "fkSH2TXHvNcj4gPMhPm7wEfJbN6kPeBFEM3fGqYjJkmcCZk1RhPEKoe1QExoMsnRHrYZauU8tXyBWVR9yV3xQVp",
  "key5": "4GJJCLVKmoMayndnotoRFHqxARZ9ZgSPZwJRFsyYEAjr81opwH7tJqLsKNDdZ62aw7D3eBMbnZitERKDNDHZzsHY",
  "key6": "4xVgHwkynAd8ZpGX7SuAGBNmSTS4Mg99YWqZaxwRMngE1tv3VJGrPEVWGKuDZ7EujimhQkPyC6p6TSiEY4K9zFkX",
  "key7": "TKUhmE1irTNYRqbKskrgGZopJTMzEs8P8XH63VobQCMRiu9U2PFEQuNmq3H4ciKhmL5faDZ1eyezeaSFNVMxHHi",
  "key8": "2YA6khMVBNX5pi1pwMNx3CyFMXy71YEMBdh7Es5zuqMRaZroQc9RCiEpjcWoajPPFbs9owZDcjoGBMV2rAo1k7dC",
  "key9": "3fyLdYfZxcdjA6L4CthqxLtU444EhZdqRwCHRdAJVa7GxrJfqKwpFGAM7hsh9j1HnHYNDqDZ17JHQx2cDh4xUu21",
  "key10": "ZAGTXAkCoMcdKYL3orG9EieMLo9CdiYyzWBmCx89AusjuVgsPZvdxjV7F1C7yT7FbGZRoCm9z2dZcLFXLKjGLt9",
  "key11": "47kLSmnQgCBYZLCY4SKJq7ZRQbG61RFv5JFL3zY4MKDh7VwAXcPVLJfRSiesRjjah2ooZdddqC1aQX68kiQaz5G5",
  "key12": "4qgxv4LkGPYeAMfGTgztM5gMYAeyZhtn6CKYPCGeMPamJCD3Tjt6infArYvqfYeqiTCHryyHnV79aVzJo3bK5JBf",
  "key13": "2jDB6MZ8uGhDoCsqErPSkLEaqbdM1GRoC7KAdT2TSTJQBvMr3GMKDaLC7PqYMb8kUTXL4iERBKgwhiVmZBkKL24v",
  "key14": "2qDpgXvYXVW59Ufr8CEU49CM4AbMKKeiQRPC2nNfpShVC4en1BBzJwTd5jsfhP4yzM5aPEXsY9NHzdEVBVeNgFiS",
  "key15": "39XCbZRbtsmf6sdu77x2FgegdVfaSomPGHrbVxkh1Wf8aL2fuBLdLXDMjaSSC8ymEYC49D12MdeH9tB5fsAsXcpE",
  "key16": "5FkSNsNTfuCQWjRoNfNiSx9MvUtpCLvggn193GMzb3F7Pdye5D9GZBmrZrWs7rPtp9VnfkBoDtpcyTZaaSmHW8nm",
  "key17": "2kcBT2ZcAX4innh8i5JnRcmnUYe4mznedPKyFrFKzDKmC6cNF6f67m4r26SAHJWXnLXVNJr33A7gLL3kghMCft1Y",
  "key18": "4v6cGLYzuv8vca1aM5h92y9mpq1qvfhBNAiv873EAE4Kc5heGo13CgxY4gediMkEfL4N3qztm2TVP2oGqqWVapDu",
  "key19": "4LkJXiZEWKAdowPHfkT3gtPHc91ooFCo8tyFd35q3rhdjmD9vjktvvFNsymzUWeiX3sD7nBJ3L3tjtAWGAmBs3zx",
  "key20": "3ZtEnF7dJEwmzxi8shTpaNu2VkbcFRHmdPojNKirGgxB9CD1GTJtC8mBdjxoLVCvkmNTeP3ih3od2KUKZ2S87UCv",
  "key21": "39BRp5ykrhpm3HTvzGBicga8z1nivVGXM31tTQRFz1HNqpc3MAsxYAMijZvArUtHZaqVX7qkf22Zevv6A8Nzc5pQ",
  "key22": "F9jNApc2fJLekUohrZ27UfAXvmdm6TvCpbicDodjEhDQVxK2UhKrNmB2v6DF3YsdnaV59tdqsnLXeuZDD6Csgx7",
  "key23": "4qJWbf87jkZSF4QN1YFPKKLzsj2nJyWhoy2UcR8f89ajrzAfoaGnvfAfJwcjQcgLHgjjK6z87VEvQY7hLgxBdRqg",
  "key24": "31sTh3oWAQTQdivZWtayGiqaSsFiB3Qoz1xhBmnzUhP1TJqEi6zcfkXYyhVgbQKtdbnJuEJK3zX5fFn79s99MVc5",
  "key25": "4NSD2kNuAJTnZQzFbHJdAFQdGgRptou77HQBi1XH5bqEVY1eKeBFqLaAMWgbvXmpX7WGb1gCeuc9cJ32Wq4qatkb",
  "key26": "51JHCwDbqhp5byw4xPWcqdamrisP1b6YoMDRrnbm3VEXQ5pGPH6W8Zg6gS6CRvpTVPrhc55EXgKT4hGgYB5aYBky",
  "key27": "PwHLz6Pp2rdXHPFhGzkjSVxM3akDhB6ijZPcVZoE7cqVp4hpx4G1AVNFVp6BMfkxQsuaxYjMnpqg12ybTZ7q3Tj",
  "key28": "4x76ZVanpySig1DRaJWZMXtbAGaht74tqwYRn4GHLL6mqTGg7rkwymVFvduvSFhaRoXNVHLfUTPnHGRmxgK9AWTz",
  "key29": "2xo5PQtqxNU6Hgp9AXaMyEMKGhUwAxsZKj58LyQ18nxxk2VjrQjbKgL7Xa7V5cUjsjgmaJhFcdn6Ra5mY1iGUUJe",
  "key30": "5jY5W5131H8atrW6fYjK7fgdjAUTm8YQRjFpkN7jWFhAB4gfXPuGmbF8ZnZ2pZCWjd5LxYVU4cEd3cpKdvmkmDkV",
  "key31": "14GknML8i8xH9yphgPqwtdFcMitKcMuhprrzt4EPgMTiQqtgubHCULBwA3CJkcBQa9ok3pr1fR6LDuk32XkmN3Z",
  "key32": "NwP4m95XBy1goHqv4THb3ouSD6Kw7mNH5UkgAhz1eSMLjhFDh6SQYepo5TPpvch1QTmQX2VFzE7nSwhB85Ucg5s",
  "key33": "35teriHJ6tnLQQydv5h9WYuJpySyST16UdXRENREAha5MzoDYQALg4bBuvm9yXqEfUBp9pNFF7iwBxXDP17EoobA",
  "key34": "5KXayFifwz7aseA7XFGwNBzXgm8MhAFa93T3cNbSNLXr9u9qufqZ6bEbYtRA6qPiY9coW6Es1yV5gD69uJb835m8"
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
