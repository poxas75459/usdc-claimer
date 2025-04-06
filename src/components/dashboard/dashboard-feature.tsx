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
    "3eL16QJ6TjQejbFYCW8Y4Wb85ko9DpBDAsDHze7FhafT8hkfQEQUEypdBwde4WUCAuuHDFUxTgqffGsGfSFHMQzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pWzc94BwDUqbiqGZai8GDvLCRXjRMs2zEYZN3jW8a854E9YaUEF8FUxkGkYENM23nmRiptsDeFn4CDc85Cj3f",
  "key1": "2qEZVJqeJ98BgmfVe3GpniLMSZ5frH9f5HrhWMUKwCU9pZtq1WJJUtJdCMjTgUStAKhHsxEH1UWiVCKfshWQYzrx",
  "key2": "2AjadwABbg3KLgT21P1JWwHzwQK7sz7TTQv1igZ8jVRCudSVJakCvrcoomSNAxDor8obmjzsycnYxjrtvx2w2kZq",
  "key3": "4Qnu1E1A26GwZe6w4DgVXxT8QNY4sE8SyAkLpdzLYPNfmt7DCpE2YLb1pUKnRqANyGTtsp7FbDgMayZTFyeiZs5B",
  "key4": "5pCXYq1S9xfj6TtbD93z1R241nWWBXxUvC5ZtKt9zZhfRqct3BJ23MCSRHNLx9Qe1NcCWiCxL1zx9y2iQd15b7Pm",
  "key5": "2ZjBpSdWPPeibRep3zauxfhWaax8zz9uJkHN6JnYXfbhqTFPSZ867rwA9t2D8wGDExbhUTNUTciPC6pejdZZ91zw",
  "key6": "2LhpDwC8QwLUTPSPXeefzBx7EJMyjNJx4HKMTjuU4gwvXvHXJM49jr19tZHY5GDki6VPGJPP8559ae11QNTqywFR",
  "key7": "5AhWYE4EiEzFafpW9pbm7rh26aVAk23V3MwsGRa4abgN8vZRhsUFL4dJafE6WA3XjcYibTySurGGfjp3VAExJcxd",
  "key8": "4UDaEa8LHXeh9TgroXsqCgwYC6Lo3n1zNd1aK23qSYYAvMLjPSLVwVcD7m8E5rWRZTKFTiJWhWKQPT1zBWo8Huyi",
  "key9": "47pc9J7qzPZJYMmU4HCuaCVpew59JaTAZC1d1ex6SeeaMkbUp7wBHvwW9tEEQAt6Zp3VtPUeDsBzqY19chjE8wRC",
  "key10": "4xHpnZmP3VP1vabiFV7MPyhCZNSQm3AtWYZerG39qpdfENVGsJ7pZmkqsknna8T54V1Ze9mc9LUsRGWPzYezkmWE",
  "key11": "44jV9qqQUUN4Dd1byEKvTP9w6jhgw4BRvPmX4xHKro717aWSE4N1V11hB32GYcxP7jZ1rW6FNrZP2hsM5S89AtU7",
  "key12": "4SGR6h6J6evd2sZr3b6kJPEV9Rzpg8YR6bcTNw2yoQX5MNt3QSQc7GHgmpoWnuSk7CcnbZpReGESuDkzWvnF6JdJ",
  "key13": "65CZq2kiWCjcqBx8iSTryNtXjQraat5euJbbhJmjCudPKffSRR5nFdYaTUZxzBNF8rWDzNYkusosjHnmywY1FwhT",
  "key14": "2n9GyJDQM6iB644yXp9z69BMvDMreuA6EfiyXyvPT8jEqza3yfP1JZ7j1QeFMPWpNBagPrqJdYgfJqTmyowj1fai",
  "key15": "4asjVjcoNL1MfP5qq2Z4C5y9QnwWkfYWeBdfnsysHShuSDxY1CPRJ1D8Pps641fkc7jekngAX5nQBX6crMEhX5Y2",
  "key16": "59XCfQpgkZzBJv32F7zprLYkqdPXbj9tHFBC4uyZGzjikyDBhewLuK4naXY92qf1GWxHNtecYn5r5Ns2ih3xo7dx",
  "key17": "4byfaghZGtUvByZef98iNfwnTUFvyMEDA8BpaCKCRokCkakpxjmHMo7Gkxh3AhCTXAuhZvj91XPLXjFvBJyWi5Lw",
  "key18": "48g54thqQWTvLtdqSyGzvA8iGWfbyoZX7LAXvqmKWgXG6AMDehNz6nAwCKzA6UgTKR84rLeRVPXTMGXKVwQrt7ZT",
  "key19": "4ad9x8VaZfpLGd5sCQvwe4YhgDdQCmwhkXucCE2CarmznGqxdYdACF8FTLxBzwMhAeL4ap7cdyYkp97fwe97bs9L",
  "key20": "5b3A3m3gZn3sT96yuZxiEVRdqhPtrehbRxjLvJSAGYSPhmzZWLcy3ArpUtCMxwCsG6tjcLd4eRp7k1wrmrX33T9o",
  "key21": "4tPuiCshd8AVsTWYcZ9ic72bp5dVEy1eLEWPHTiJk5we27FRKqG3cDDgA8nevAJnT1EkJodZF74QXFjTQkv8ViZE",
  "key22": "3b8UD5PAw1CqyViULvTK8wL17sZG5JoNeMfgrudNecKCuV53t8py24i9eTt1K2F7f2yfapExvCg9hACYv4gUk4G4",
  "key23": "3U9pHjPfzUEETbhqnqgrkTjxstEJ36oSqB2WeDCjpDm98oEPVEAV3L7TPxtVq6uiDRei5sWTGD3WG82UjA8x1FzF",
  "key24": "Ty4mowQJoCYPy91qesyKr6jZkzTdPtr4jg9W7qMxgg2cwSLDzggN5w6rWcTuFkLYv2VRvAaJAG1FBhzzqRH2aGM",
  "key25": "3gY7GoMWZFja7xjjdimyzYoqvGNrDTMZCCZduF7Y9F5yJo9ws4jtPmwNr4RCMqRRYuEag9r2DskHHzK371EQggKe",
  "key26": "4Ut9xFF4aUXNKnpAUHnmMgEznx161F5axPHTfsJT8m7YDAoYzKNzZZKkBVG3BZMgETx3kzeasZpb8M6byZGTaG23",
  "key27": "FEhbLpUUbdwzeme4UrjKL37GfLiitAUmkx1Vo69mWgz7c8zcCeqTTjrpcqHiBmVmijhtMpB8ejDosafDaBV927t",
  "key28": "DxiH34S8KGof19kpqH2oduzHAqYkKxmpEYtgGWnFCwfj5D5Qurg7vH1dqTmVa6gh8jhhHAJAAgPS9JhF9WHFJQh",
  "key29": "4jTB7GKmQ4dmiNguYPSm3AcXU1F5fP6vQNhA2EgThGJ2F22UCArFvy4Wzq1Yt4DXnMyqqpvYEwAcA1UiZntF1EGj"
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
