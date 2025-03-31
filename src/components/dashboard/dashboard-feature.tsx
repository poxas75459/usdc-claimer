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
    "5Np4Vx79x23VZzwt23YXT2tGVFPuiEySRKimQ4buu4AfXj1Tnq4VqfXhDkGNQgk3QPATgTm28PkBVwtn4Sp3GTcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJQ39gYCcG199yJGmigXG6rxPbLs25KdZx59JtHkMtz9B5G7rry2wZTNe33Jc6phfxqtLRwi9bfv5S4bPXEi5Xy",
  "key1": "28oqnJTPEqnqh5thaat6iYKRTgu6tnXQicKBcP4LNMmLWSVTiNMrCt5Y2U6HHqrwbxdoracKNKWyxmKaCecw478D",
  "key2": "5egomSgxKypukhVXGbjJqisWSvWn1SApqC8a7zBSF4S72KFSJFPk6vKRKkKdjbaWhEEa6HDZ56pcdbcXMr9iWuoE",
  "key3": "2WLdLQ6RmCrNWCJy2rab8n3ReUZd7hJzt72kF8yCEoJNfG6fxFjoTq6xKBcCR5GFc8Jjh3RtyCY2tkAHBvdVjEuR",
  "key4": "59Hqv88rMbAuwaXk2TZw6wwNHUdtZCKJxbTnZtD1HsFXYhN1MmME5BRd3dJApvoUt2PMLDmE7fJLx5sff8ErNGbe",
  "key5": "4eZYAEU4sTFeL4VLmBkma6U23ncye8QHyVjVPyaezNPe1dDHjQzJgLQGzxWESNmGJBE8z6tmscj58nkgb1Ntd6N3",
  "key6": "qCAc4XxiJDw1pxvh2Wjzmz9ZG36JN9sWt74igSqqgHUEqXqAB2NiJ5yMDox16Q15ezdYxdEpwhwFvjZc1T6o9ry",
  "key7": "4H6F8RxpMN5bskfYEkYD9aFiFJUgpdmHd4sRcXxdA6136zxagGyZ12zJ9PPyjNyWcQE4D4twTSn5Ce1u58pYqxmA",
  "key8": "47MMBon6ijjuVyEiitxtVa6uLTu23KoviyuoL2qbMih3gVZFQBhcVsttaQjiNAWA1TFxYj6SWUGBeKMEKsDtgNbM",
  "key9": "4FjjprEZbuVJ9jfWsLtcfHVPquVrxDpytqk45vDePc1ecp7jZ8wHMU7pmUf7jjETdnG4aVHo7h5PzrhrqwsivWxS",
  "key10": "3SJAeB95Nycnjgy6SrL26synWL8LmhjkKKSE78LsWhWKBZNENZeVbW1n5oSWDjH3oQYqZH6m2m91Wpo7xwVwyC3Z",
  "key11": "4Vpb9pjzMpkGdCZ6JhaPRW5DEhVhtLjRppV6nSESdBPHto9GKa3D1Tjq3fJGa6NVYrZ2ZVUCMCZTe8vs8szhgAr6",
  "key12": "2SAE2J11XFiy1wV7oTqCiMxSunrk5XgBKY4c7zC1KTiQKjhS3gDJ1q4kMy1Zc1N7ECWZdB8Lx2NYcufEsV6a9xBb",
  "key13": "2BYMFjZj4G5bn9JRANj1dx9GNbxPrc2NhGjuTCTeRyESbVqweaxXUy8RkcnsQoY7aarwr2LHAB2GSKLZVVVb5Dc4",
  "key14": "4GW5qdVi9eojj4GTWkY4zVzKZVdrGkS7uC5yF7F9CAkaNF1EA8aro281fafdVRp9zsjGL6u3hDsjGrRBKWsBdHNc",
  "key15": "5F2ifpsRKV2eeN4RXCVqUGJ4iu6zY5rwLhAm4kga362n7gcH2Z97MJukrNYNEnXnCsHL1KGmHYsc5EUiXoUzWoU6",
  "key16": "2pgczSEo9VRFQj74gYMGEN3jsyLYgJwpCWpuuRKSprfYvBJHfpUfNAhuHi8yqHaFQ2rBLBnsQuZrYHofPMke9xgw",
  "key17": "2GyR2vrJTaMVW9oniPm7MfnJWQVFioTwSx4HBBBhDXBny9afNgQJuwX6yZcUEUERsCMCtKZ7nMjmNn6MSf1jNKpU",
  "key18": "39ngPFiovGRvYwG9yRDa9ZYKQwaZFYzCXfiizvGi9RahvY5NyVPgEgx6Uxxqn8wpCKEgZNmUBoQEaHDqGQGmFoMT",
  "key19": "42fRpkipiPgfApC1Eb4Q8BiBhLdfxq2sb7VrdywDvMiAtoQjCJreTcYQzMF9hF68FTbQLAjcWgo9rvcg2vY7p2V7",
  "key20": "2kyNg38NkfeGzqhLaxAeL4k2YMR4Cy7VavdsgzoeLKMRkp77CFrronCxuyaQPMHKJUTqiEsLgbZtE3QDLhVhpJk6",
  "key21": "4L9wWgN7f5Z5zji2RktGQz3Byq3ZUAsSrPgfQ1U1JAKEnCdyDi2uqpkgWAXgpYseAY4TVyYyxDXGJVt46ouLDVhR",
  "key22": "4Tcz3Rx6KjNVsFsCsm1DdkX4Hf1oZe2c1jseMvk6L4M7gzkLZNMfzF5aGQjbowidnXhxHjan5jvoKuZsQq26Ad18",
  "key23": "4hn4LTVwwZ7edNWV6dQsQphbBbbzisHaY5sGEkHcXDnRQTUFw9MRypUUKogJ67mULLieUx4SjJTijjzsr4JnKRdZ",
  "key24": "2W7tSNWophJgqvjw9R6sqTBThGay5MTUg3Uh9LYxLjRs5ajZeCqMK5r7RoduTeHvX8SZ9xSj9V1655Bn5DJBRmfd",
  "key25": "3L8H4jPocvriyhHKY81SMo4GierXxWAfTyQBZ9mDhL6Qa3KauFibnVxY6sCJ1rzaYuedXyosttqZdaprrbDWamZB",
  "key26": "28CSe7oBgS5ph36n2K5dyqDusUuPtLKyzqEc3ejs8HecGszDxGuWcRuPgMWyvnRpwSR7URVVJdKahJUce42kPiRx",
  "key27": "46oNbGcw4bZ3wax4yurXQCQK9MUJkMGnDmHqLfkzLphnLJME2HXUavXo1mTP6CTcyyyq4u2XNodSYiz28qUFAxLe",
  "key28": "3t3wE3oQZUHREBGAGQZxZKS3Cd4JFik1jyYgzbh328EcsXoE3KE5fp3XS9716n4GRDhjVhi3GrdSgj5836oevQDg",
  "key29": "2ihDNHyRWF1rVPTY5V5J6Y42odHG9dc4jMzuqxuG77bqizCF3QyVuF3Y7B43j6ChvWRu8qFei5sTcv59QfceCA52",
  "key30": "3quHV3mxYAZdVYKEEcLwGZqAhGyukqVzT1Wf1LAC6CzRe9jQFWaw3RmqRKLfYYYSANMuJASxSXkB7iKvk8Kgdc86",
  "key31": "UXKr8bRCqpqC8w1EYzFM29wmnyuMxxTqPapjpSRsVTYnvzYYvd2reh5u5WLomENG637VZbkrY36bFh1c1WVQKMU",
  "key32": "3dMN5MHDpa6qkfAjn8d7Pr3kAvs32sJx5Zd3CFzv569WBaK7HnLqLQm6EtZ1iYKMkMKW8p2DhjhoLBtUV3phuEbK",
  "key33": "42epwJbpZBE3bhFCC1uazZSvyj4GQLVmrq7cnDc3vPamcSUcuZ1q5e8Bg3UvBJW7M2CXKDCemYepcsvPssDqDLsp",
  "key34": "2ZvoD4CPWnyQwHfugEV6fvbpg5Dk7D62zNZpbp7Ww9NcR6kCzwrqkLTFFM6aRve54G2DyvCqTWXuaYFkrn4YhoyH",
  "key35": "4k6HyDcs6NgGTZaYsYfRM6GXLZ6gLrjJrhE4bbRu2VCVCbMWedfmwqKntrbsmSQ5VHRnR81TV67wHDDcsimd4TQg",
  "key36": "4q8YpXpaWnL9doPddAw3b2kWsHM34nwRZRmJU22v8Cic3TpBmy9TyEy8LsLAEXiRKSUXXtUa49vRii5U2VGCFURJ",
  "key37": "jC4FWLCuzgNVDp3NZdHRmHbWS62ouHPgfZfS1AXKiiNagbTd6MSBGGyGsHRjpPTGxmDKDCgnuHNhqvbyYszdQCu",
  "key38": "3uvJeANigJ1D8rRs445bXLH7WZA5nd8NfwhfQnuvqnhbipbdktBkWNbfkhMvMwo4AsYasY4w4yshLJKKWqXW5ifb"
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
