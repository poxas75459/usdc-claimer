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
    "3KgGrCFL7nkHhhGT7jTfUqjNPyrDtDyn7nM1VFEznwEk1pq1zEPg3617oPoe3o9TPraMFBCyx4m7wWx3Ngb4XxDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHnhkva9hhi8zdkZZoZQ7aXy8a2P43yCDsFXeitjjjugtkc6DGVhtE3HnSaDFfsBg5Pz5LGZQHEAxJt8noiCvh5",
  "key1": "5NJf6zHyqEW3gitaepgj7WtEQzFbfftEAT4RTtmtrUXA88vN3uvi5vAZcUGgdVvfWi4kuXh2AeRVeVBH21qVuBfF",
  "key2": "5UsVV4Yob6hYrBCN4jinmDcVFWvHUx1YCWuPzRMXbUau4eDU2faNG6GKZ8gRLoxjfmgtWmT5QDNMmwipoz99JWKa",
  "key3": "53cKbXxf8PR45aLzXdH2C61CwrG89so9b9xserRGLLUYBDvgi8kgwHzvafcMnNYZWDbqMwwfNfU9zjNx4sP2kWdu",
  "key4": "4JkQARyEkWP9vPcTPQ3Wnz6qK8dgcJKuhe6tF31cUxfng4emfWd33HbmaHbYqvYMnGVp5BJ9JrRdtBiQe3PZWV2j",
  "key5": "5mgpWKD1Aj93bgNCnSy7B5L7kAXj81iuxfFarzwnSVC5PMKunT3bqtpVoKCJoY4rbnYPsKZZ4o411EZKrigGa6ZS",
  "key6": "5y321SAMwoKgjdqnRQ61hNao5dScJ5GDpGDsEWvSuvK1qAUnSPyL5n5ZiMFmseNy6RrQEm1jDF9iYkQFvXsU3qg3",
  "key7": "ay9jtRL18aU4k5UUZdGQdR2hhjnJ22Rfx21WKkQBf43m4M9hLcSyPGqzeDY1YvvZ2XsRbDBkjBQ457LJxpxM2Vy",
  "key8": "5pNckBG9kbNCoxDHwh98VsmqrpVwT6dCyuZ7hWSctUivHsXHyv4iwCWQ7DR1S9oi2kYoNDCwvYwZmxBJHEfgyFPS",
  "key9": "3QzNmHSDFSReb31MjdwDRobno9brBueCMeMtn1QubSfdYQJBAnHYspuknFS6QqDKvtWATphsjLhnk29mjh9A51Tu",
  "key10": "2b54Xu3dYBJoDq5oLtcVwpQpsMgxzdF97uHSafZsgYyXWe1UeDXt5UGxuzpSt92X4J8C43yedCvabh7K3WmRT38L",
  "key11": "x9nkSLozjMH3HC8pFRFNVfRSkqB8sWRHBfZproNbVRg3nBuN5BG2ZMxMssUk3PDwt7VtgUZcvVbzNxHF6wWyTkn",
  "key12": "37q4BQRyF264dD9QAgaHJRCS4Z5HpwPddgjXNcHGQt4dwoChGyqmgTwAvj4BTqrgnnLQWWekjvZ64UuXU4ZyfkKC",
  "key13": "3qyB6A9QhW5KsKKDLRV6Sji8FCWAe2DZqAJ5YtqenkvsX6jabdYqAkFwyMVfwZ3bc5sR4fx2Whp1YVtt6vrTemxG",
  "key14": "3q95ep1drSdumM64ZXS9YKjJjb4raBGjF6M3jwyM8TeLk8Pxekh2KxZ4bMcCKgnpZPfqoFcN22vP8HA4y9dGJumA",
  "key15": "5uHitffbTknFsXEU93SMdurbETBT5VygaFuuABCBxhJFnZXmp6KAjK4NeVDjiG2KwWYxZNWCWinLg21D97u1LzQC",
  "key16": "4WhTXx9huho1uVpfBUCS4r5br93sZkFf9fEuLSGyQb44rugQpigtfQ5RJ6HwDfHf1d32jiYQwJeHERWZ5ZMXaNDc",
  "key17": "2BNjjdzjuRnXCH9z6nQto9iekt3XVEdqgWdxHFCgkXf9pWqjeQkxnheRjFS2hWduDraXaQUdDiEGWAC17jXjHyn",
  "key18": "5ZMb1chMLzSQ4S32jcRvwfhyJRWr7k9NxdVeN5gdcRBR1iD7CnZQnSu6a6P9wq9x6t2YyYQ2C5qALT8y94pPm7mh",
  "key19": "3mpsvrZ3Q9dfbyJ3BTbtMHSMbCv42Rbr59kjKauFpnbgx5QVvkPGEdeVaePoY5gDvAowS6ptMVF1U1rMW4DsyMUT",
  "key20": "5mh8eG6wW8jMpuztTcM882VVij1C7j2qZxUoKBwyZkD254gnaxcsWodZG9t7yV79z8gs6eSx4L6q4C8s7hF2Vy3p",
  "key21": "4T1N5eH5T9v2fYW19nVZPpQs9e9boLD7MKJtBLaeWpdhUqTZCDjD3CKtu9L9yquXE3jNDGvmU8FgkpyQGGzPCWNT",
  "key22": "5neiofR1wnQ641yzXiKSzMVoCo63jpLaJbbvgqDmt6N3dvGhVjFF5XMjpMuv1FGkvRfs2c4gfpmH4mnfgEtb2E9S",
  "key23": "5vF8DoxW2LFhCgyQHLHjUBVJniombkmpAix9VUGeH5RAZZmvN65rTNXvEBZnPuWyHqdS1etRxRWy2TJ6PqxHLNiv",
  "key24": "5Ck8dvWbkRoiqDR2q6fmnMkLQuoefocJqKRu7Yf6hFwa2P1BrFu9qwt5jKrx39acVBtF8bdvcWvx2Ncssm3tuxFb",
  "key25": "28SCCDSSphRfcWYGyDyHrswAqE2sC16bjSozowQhj4GA2pFqkJNsiADN9z2NDKuaWBZqABTELGBVVpnhECVPHHPD",
  "key26": "54q3N3hmELB9MLBGXioSHX5DUYy5UHMSUyhiRUf9mH9xzdDfz1G4imdj2M4rQ4k3cUeNTfSvykvBa5dLsNxB66xy",
  "key27": "5oKuasA63wAxKzuaG3TTXhh1Q7Myua8eM7mpdRriJwMT9jP5ofNipowWddEQV6YN3gdmsdaykGdfgNrSLmaLdVTe",
  "key28": "5SP7u9fZUXSMEDoLqk9M5sQzTspCjT1bswxNxwJ1ANDU1Ye1NkbzL8sdHdhmAhcL7CQyeQXjSDrJ1X3VJ1fKREem",
  "key29": "3Vsgfht1nftm219tjiXfWYXjE1rzdiDGbqULmgpXbGjwhhddBUDMYucKXscQYRqTAcsSJApkgdNgQVSYivoBJVta",
  "key30": "aNmSFCo76qqAzrSgjoNcuzhJt4V6z4rTxmwGa1uxZVNhdZUBFa2ZyUc8oKQ2U1UAiHLqjjTQ6YKwBDbLtBRbNWc",
  "key31": "2Z5zhDHjRGosMprq6CKvEu7M3cAaXWj8akrqNhsptfMF2BLZKU2xFuC4STmMFZ91rwUrSPvyktuXrhKk4HaHBVJt",
  "key32": "uFi4ULTj1D3XJxcoHrUvt47VTdJRkhagXDTaTq5PEx18qjGKqzXUJiaTA6FdnNurNnV3Jain5h5dxq3nuhxCBYL"
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
