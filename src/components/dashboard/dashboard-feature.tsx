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
    "2FH1sPam46gunupePV9BFzT6JXJ1M8atKFV2HibDVmkdfVV9GKQVKrbMZLmRKorGfGeoXCEaMU6f57mP1UrrSmMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4wgS9EN67rFuFWYqAy5Zv45SzUwAt3BEy7xJwfCz37mxdVVcYMcbMgiSnXFW3skV3KeMz2P2af5PiMbspS6jRn",
  "key1": "5Xxr3WSFniZyHcsDEViPbUQQDmVkJ7p955vnM2ooXxYTKVFnHFRYKZiobkGiSzxWPXKEvJDzDzvKXAnCViD39ui4",
  "key2": "wiLYSmLoi3NtJ93PGNVWRLUSxahWnM6d3Zm4PM2KP17xhKJvUGiJYdBsEoMWCGruuiWDsdDkD95vTNVBxqh46m5",
  "key3": "3egbGfYmmSmpL3gxnhNtbeaBP5YnL5FZnFXHhxR8U8SxPZidF4x5aN6GJgpCokyYW8bKAumBmsBpeUhrvE2vFAnb",
  "key4": "2VThegr2AaX5sanTUgmpuvPzD573eQ6fTogahW18YQEeFqXypMjEMosetZ32u9fFYTCgcckhKSnp6adCkyaHdMv7",
  "key5": "2uN8cuebdxQhWTmPtZJs53UBVkEu953d1FFsQ3XM4bQ4kvWER2vjYd2eLtz18sdphXddGohMbpVNqffiLmeptjFg",
  "key6": "4BUvqP2YLPbvHTEyZH1xSVZoKMn1QF3HnFgBbP35kKvcnoGSeevR4Fktxq8JzJfGFRE8Ln9QW79pdJAQXpyDULBE",
  "key7": "4hJsPYi7dhc49pZFLS5wfrfGX7MZkjHUvafxSCbU63pmGdG9rna5pMdkYZjP6kzQk8LH2QcWbjZMyC1mVmsNFwuH",
  "key8": "5Jeb7hBvu7GtWz4dD8kM7z7mBjwbF6Dz5GeBDmw5faBevdHXjddie8MudWDmh6Jp3Jqnie3HTTXqdvM1me4XYXg6",
  "key9": "YAYbNkaUP5BPKdztVaGKcMXVkiYxY5ZxjatGHfj3T36f6FgssPMXCnax6ZGtp9BbBE6KjPJJj4XXEsjkb3bzp4C",
  "key10": "2zP6RmKsFyi4h3TXaK7QF1NSfZsgiM8WNga3DC3NL1iSMUe4Ur4mvWc4ruuS3XJEArAQHKE8bYhFh9sW1cysv6GH",
  "key11": "5GWo8F2bQhBqXEN8HULg5GcBJsZuQkwNdpvtEMjrnXYg57qUemgQfG951Mqnw9c35Mpjxy2S9LzzNpHFgaBeLW5X",
  "key12": "i1AWTqT5QXPVoy8DZeLr3ifjZji2Ma8sPCq6yRvGR4M6tMxWtmeK4TkLYJFKhKg6gHXXndxkRt4quTh5jFPZ56b",
  "key13": "3Htv3ksQyeQ25EXBe8C9LGo12PwFc3Q6Wf79CxWcD4SnQnrMaxouwjTvAkzHTpKz78kgeEcTekHcuB1GnkRDm16Z",
  "key14": "4pPe97JocKZwQgyXHNUAnaBWMGgHodcNWAhroAM2221P4eAUYRRZyhYAxRj5nyh9axGvX3zPy3Ezx6DxgRq8gSYc",
  "key15": "238t2NK3wj4SPJiBqdsRPZwscGVk4AVQkcvdJQCCuhFYD6HqekgisAahC7qMLdsyQS74Kt4Fg4YFsew57YFh9He5",
  "key16": "2CbKD73wg2zFnwKmafqfnEuXQH7HFK4vDwWXndcFD1x6UFnJ3U1AwoMhH22T9a1NKPC9Bx4rTy6Jex4N6uBU8Lod",
  "key17": "47cBTf1eQem4UigB1c8w1NiZ9RJfWymu1RdXz3NnGBuG7WXYfpYEYipDWpagxBAuNjyfcYhgMw7Sye6vS2HB4FRu",
  "key18": "2patc5TEY6AzACcZxMEEACqMAt8DnGAH3wGTKZV1hs5wJriM6sguxjX1pV8xhX5tiBXpexbWzjm82QEFmxXfFPgJ",
  "key19": "5fk7k5GMz9DsvTe1GhkJbcDcNaRgKS89YsTRZDQ9BaAFQSrBKM9Mbg4bq6FC2nU3fbqwqpNCTdyFhFiKUeNWk4tx",
  "key20": "4osy1AhSKiptAsK8PSBp6iiHdQjGnZMHvmh4FtxpJx7ajNJc6UUJjADy5qcnFhoXcwJARcGWCxb57gNnamWy8gZ4",
  "key21": "2CrpFKP2Xj4VuYvMYWEEKERXRAfaxh3h9ezUtFndfaRxgDUGU74dTF7Z7qdMKTrrLT1YkTL8S9TpyvZfKSVWjUvG",
  "key22": "MXmaUVHpdeAf6dwzZNxTYsJAhqsVhidpCherZrqJjtAW63utufcFTGptgnV8txxQRpi6GcnUjKnioKpS1kZ2Vdu",
  "key23": "2mHUZRgr4c9XR2nXVkaLbs8tYDT81Q7B2E2aYVnmcq9peJNkRd759SBYwuhmqx2ZFcq1VdTD92q9gNdUKgwDqwz5",
  "key24": "4n1jN3AqpDzrJ894z2snRhLniXsAQjzMsKweuLjn4imNV6cHWR4rDp6b2AbJ4JQpHcu3rNJNV6BX6N1vToA72oFS",
  "key25": "47wHdcE5DRc42dCD45AmvmDf5xou7inMik1xBURCVG3ekjH3osJQvDcSrARWXQYg3w3vF7NNJXbUZJYSK1ntSFq",
  "key26": "2zmDWCNWJMoj4WotLAWtaRqPuKVyxreQRKFiGCVGqLkdEFnaG6PZjpwkLx3gxEnVsCCSRvqEdSXL9aDBBu5S1tu8"
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
