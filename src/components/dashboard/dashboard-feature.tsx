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
    "4RjyEqgw7unMsAgyLcf8DP5YZU5YmFdASaQmN2Mk3jJFpdpeat25jbPW2NiEiTVVayagqJRusNeQWa52JWHVQqV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mvtVNouDempYDY5sjs2Roc7r6VCWDHvMAFW1arMbkCWaNdX6Mw4g8yVx4xQBHi7mPNXuPEDUqqSahoxjNkn52x6",
  "key1": "43QsBPTv5hAMCRHsRt2Wr4GYt1CPjXdAi3b6WweVp5iiVLyJbctMciuVifGXMcmufzQ8qDr1Ajku1tTWqDT8nTPn",
  "key2": "Kx1MKrSujoqTMvU5hCsELhqppfY1R8LcfVu2Ms2f1KJUrZtyVMJUy2k7Ww7WcBQrFb3trkzthoRQrikVHDN31fs",
  "key3": "5jLygZmnJiGwAvhj6UWhscsUsYgQzyuqcygkKcynGhW9zim4ENvWsYWzbYvtiPNi5x3Tqh3pJ6jSwzzo1X5jqEzg",
  "key4": "61bHCxGvNmnx2iHNMxBA3mCmyUCxGDHrqjHTgnt6kZ9ajgEhka4Uy57szHWiX6Qo1PEiCurQ6jUSPHPbEipD7c7J",
  "key5": "MM7BYi4DrDqwiqYbWHmREXvtz6F9YEJYr1xe5tE5P41xZTueB5apPvyBqa1AZM9ws54gMna8mf6Lw1NmXdZwNc6",
  "key6": "4hAYM4NEPTeFh1bwJ5ayMnPG8ggLBSw48T4FyBFAAsNXryLEndoAYw3FV3D6fegbd5PeRiB8rqwtAHdYEjZdZuMw",
  "key7": "sMgvqKkpbLW3c4wFRuD8SBJcYwJhSo5MHxtz8i5QgUfpEVnK7na3qh3iGN2E4zMRSYub4nU1D7fCuWi7BfYHH5W",
  "key8": "21fouxuZNwoNcUfw8fmMUVr59f6SX3K5iHJxHL2QfrH229ua8dQ3jJNNzvmrHdV3HFfh8vCVWppS3s2JtGrwF3jb",
  "key9": "5dsNXctr9rX3CzTyHcQjvHUQTR6oTgpf1o4vRmx25Fva8kRxGTD69ib5AcF2y6RmA31xTLedG5BJrc7F45zZYWCf",
  "key10": "AKppxkAvSVizr8zUtB3pMBMpCFpp1FLhjmogQMRnBdwTBDhsYZ2RVsX3H4nj6PuV4pMpGDZd7KbANfnfhhdDrSW",
  "key11": "5js2zYUBJgPYFWRtDRp2t4AbZnWnhxhZDD5c5xS8zjHwNkbaSGsAGWUqCMpLTcS2egshb8jk6ibCKfYHc57Zgw9C",
  "key12": "3Yz9PCfwc5n3MAEuBTFcXuJ9AxtaaZUYSovPmNptsWBqaazruFfa4oN896UC5ztk9zKvfzXBbc4L5AvAvqm4CatQ",
  "key13": "5nfrvaHiJrjKgBa9LG872Yeq1G3oUVMLWF1mRBJGSJrEWmMVkCe2TExRRPxRoVAdpiUduVpRn2fRQUv3h4tbRmeT",
  "key14": "4kc7FYZ3MvtzkvEAQzopJt38AKkBYZzLdx4rBfJ6hEdRusfcBPxTpBxjsLdGRC5V4CvaJfneL6qsLu53MV4wGkQd",
  "key15": "4usAk4bzr7vDXVA42WzdPvYfFs5fMstKWhRLx3emo7AnPKHyKVUmLVLB1aagGvKRwN47cCVXDGMxRxs8YGvLzy1q",
  "key16": "MEJtBx3GyrNX7WpWpnWat4ESVVWAePoqf18Y4kEysumg3TVWbfhvwurKyF8GGDxnRJqx37mUXgm3jPQDES97nQs",
  "key17": "3VVYspSe7WSTk9G7kf84BzRqK74WpoBDDadq63pQJFG416uZyuWfBDjgr3sQShQ3FYm2iASNBHQs1D1CXbZXPMJ1",
  "key18": "5JJWVreM12YY9B7v6o39qUhkKuUUYdj83ePN4tiL7wtZ4YogsMQbBKHWAriUrPvZ4u6GAx3yde8xARygVnG76RQ8",
  "key19": "5XQquvh9sxemK7Lrf7uFwtWfv7zyndSZsFFatWEbRgqPVfVQMnz7zLYV7mXZ6d7LiyZu68rNrGkmn6mn3AaMGq94",
  "key20": "2W3iddXXRywXojbiton73vfmmzGN5SUX6eZqSy12VFvXg6UoeJGLquiZSNgKEJvNkUZsmCXt2SGsPhNbS7agAphG",
  "key21": "5a63oP7pA7rwE5cqz7hugDX6xaCqo4A4R7P37Jet6pJnhstrLnnv9RwwqWqYbJTwCxzzAUAUhRqBNCN6h6L7agkq",
  "key22": "2Xa4vE5TzZ3Tagb5Tq6Lz8CZRw2GEuCwjhMzchqGdBSbxr46qG9Hyv2aWbkKwzp6BNxqn1EvrYPev9FEqD1RRAhM",
  "key23": "5ST9TNZB1ve2WMPRfqCu1yhWY7A16vSrGACxJxgMgNdCBruXfYrpjgiGPhQQa6dG1nfzkfX7V9a7ScYZ4CGFvMQ2",
  "key24": "4WZx2bcy1usp5Njam3KBrD7YQXGyAmj4do2RMjRaVRz9Yyx49EHjKDZC6sr4gGDK9i9doSJfTcVVC42ccPaB9185",
  "key25": "UPKupH1Vn8sLaiFK6rFX9CayjAMXUYDfn9boECTzD9rMQnj28kMD1iGdwciL3hbP8GXURTiLUEqoJJpn3URMcRo",
  "key26": "4Z7KWFANrKCnsfWthoVSgx5jW9GS51jegjamXVB9rwh75puLnHynFyq9dGnE4HvKS6yfa1VznPeZsL8P5jgMeXDV",
  "key27": "4gShuyXgbcUGmfABomLX1J83ANFkZPP67Z3TYLfpA6XMFDfw1tYx1f6ukmGcmmu1GLFPQuoUiSgCx8vBSasGXEkq",
  "key28": "5mdcZMVLRRycN4bSSXGrtQXfLFAYqFUAqHd68YA3GnRhvb5cjkeSDjrhFSejSPVGs2npueBoCEuU7iRdU9u3Te8C",
  "key29": "3USKBduCFcrck89yYQQzNDdy5uv8zN8MJU4EhvUNMzwR3KCs3RNiuyrn67eC3KNvngP5D3Jx6uqpawimc6mxet3C",
  "key30": "3M6XYZ5CzMMiKLZaZ1paBbzAAWwQms2fY7CCFdhE3bxapTfWGTpdZDesTHjRSsejT9CtQPJuKMWVVVjAhHWxNAS7"
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
