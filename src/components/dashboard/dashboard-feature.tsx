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
    "4SMh9QKhGoPs3sbwfyMMtnY4ubVWtAw8TPC1nrfqVC2NnuZSJFg9K2y85kU5tez2yTMWDRXVFXLDs9MhLL6FrYpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6EeTexVZk7VsPRsR6evvrUSFRfNyM1sdzW8p3TxQtNUUUrfTp2bxmNck2fEuMNzKwHAhGBwGLUVf7kxy1QiecP",
  "key1": "56PDLbeKbe4gwFH932HjSezGNbeK8iDSPfFFGyCexQSNssfykuNMdfKuBNZ8udHnwtzhc5ySrSeP5qzPoin1q8Ft",
  "key2": "3xwzMhtk814mjn1MLZXpYXaqqM1raVt7q5mBpbhnQDGAg7BhAKcE9asMSYvwUHQTzJ5uWPmGNqVALvVdLUsVA7n6",
  "key3": "4j3mn2qyYbJBrumDvy5xWC5LKgRSPZmnZCAJpJgTs5Zwha6dbZLa2gR29gEciXr8snDGyLr9poVFX8bXo16REbpt",
  "key4": "5FHovUYsmkzKvc1eYHTmmjstnZ58g9fK5d4faBKA5CWAyt73BV7Y3W6Ku4WWkoLxYoLnVFormxnS3jg8X9kJH9LE",
  "key5": "EPx5Hdk4Bam6AmzdNVT8kQmmXLqLhoWi4VMD4gmRKE9691gYbQuh2TkzPsrAwXQyegr8Jsdqsp9iEigvGzBVmj1",
  "key6": "5N98CavYcrHNCmnNMbQmXV3qUCgSfY8x8MbRYKdx2EeeVWQoEoCc36xgE2g7kY2AoNQtDEufvi6crpTswx3uQTPj",
  "key7": "NAmDKLy1HnRVwnXQC2MGrWoBVZwcmw4jChcnwEMByH6BD5Qg33hmabP7ngD6ZGoYH5pK3emHsmU1VKbTZ51hcio",
  "key8": "RXiXbBSnL6YGCSMyf2LFVAB1ZoBHCdqaC8dQhQit1UFKXk7VpiaSn2svyV65kbD19gbe6RH1Q3tEzLpyzDTLDhD",
  "key9": "4Zdg6DcL3gdNS96SsWnLBNM5STVaLvzdeitzwW4F8CSEfWVYEKM69qK7VQ3FYRsNpuFnCNUBopgzjp8QoycZvqBZ",
  "key10": "2joeWf1HqxuAKcMzfhjJCmCWjWyVKmZPFdEmRMBGGCAnT1h75XUyQcty7578NzyPLcTjXpx4cMH88AWDxrqKp5rY",
  "key11": "3Xq7Soke4CvZ5U9CK9rTE2XNaMJZS7A4p6xHzwyKQ8EVfe7fnSj83PXsF9rR2brtBZc7tX41C41YQEz97NmTBKgQ",
  "key12": "4zoahb2HvMwtUCU2GgeRyPTfbPvQgxYuctouXfwnoURzJdNnH9yLW8roVXTQ6RECp6xXvdP6PFMQgBA7dxFSQQYU",
  "key13": "4nxpFyVVwrPhRhSVhewoBdCgGHwBDvTrwkh5dpJVvSynaQj4vNGwfXXVyaZYr6key66kouNzwVCwQ4261NrdeZJk",
  "key14": "55K3Ya2HAuZhYnMWeasaQzarzsNP6LAe84KhwJXaDvKKxsckGV4D7J62nyJU9BFG8aMaQjzhtSAjSGFh2qwf7puc",
  "key15": "4A39gXMXjxk73gPb4cmKSvf4QrB7Vy9Nvnev7PyRtGdxvP5E7wmpmJxx9Gr45Xaizaudcm6PS5DYgoveiLCzD49y",
  "key16": "5jHM5Doz6GUDAZjuKuAkk1YN9UpKgWTdCf7s3DLWWGN8T8p3LG97XVKYMaMVNeVbooxMKiCJFJzJ3TqJVqsH1Wmd",
  "key17": "465SMv7tiE4etkJqARS8ybPuoU6xzE9sxUUy6Bon2HuiUZQueCyGTy9BDVhxwYgwWujppts9xZzptzmwJuJQYCPt",
  "key18": "4iN3NZPH42XD7fN1TC2kDkJAYwDNbkHzKLtsYEM6g24WxDnaf6wtphUJx5HCqrTjRLX6je1D8iL34RhGDuyBFEST",
  "key19": "29pTR7C47sgYZFvYdDziQ2iehuW3CY3EYgLTGAd5JMoybgdCMfrBzRUUt7a3rzQ7iRkL7Qt8GTY2aF3ghfu6mT77",
  "key20": "2o47Fve5ms7MduoZVEt8XHDcVMn4hDDUgNzJZg3YWMZsBiAFMe3YmMLqkopGVLvnR4z9PKXg8wP348zz3RrGMjxQ",
  "key21": "2T4Ua3JRznbNhixvgAbnW7Cq9DZgiZ9osMkt6VQCjduhe3DtokaGD9h6x9GiZmNsAXvk1LrTH3LPQCHRaoKSWajw",
  "key22": "53qmxckHqqQYVP9Xc8bGF9rdTUDLyx6Npx4sBeMTZXJ9BjhsLxFHEFjiyZjpvauU1bsZbkcNGBSYZ7mctrfApqzy",
  "key23": "3u8UKZ1ziH6T1AUzjvCLeZEQ3J23xwmq8eagwBocgz9435uUXmxjJbogaXi5G4AD2r39UhoTyMvH8rLbAtAeGzcX",
  "key24": "5mZmzpC3dxKyrX5ixTKNbVYqJ55W7W8TUAD7UmySFpd3yM8cf3HETNW53vztZBJYZ5hvzTcbR3zby4xEx3drPZgP",
  "key25": "3FVPAvDZTK2Az9JibtkTNwWZw3kPduS2FgrjknFruHastpWWcKqLTeT3HRY8b5RvnNCcw9foAXuyeciMjNEpTcAq",
  "key26": "4e5eqA6ctTWpkhUDgQuyNxXYaeZ2NmdZYZrXsv31ZB22iVH56SrgCHKLq9J9fm343tGjb7rEaP4RvwYbJjPrrSz6",
  "key27": "m7D7avgwGthmPXEapkH4C32p3d1V7pQTPCkGJdVyAjoeQS9sDzGW5zYdTG7aJatDcWXEzTojhV617D97csV2M3E",
  "key28": "47wLzzCq5DqmvUFqUiMBYN4RLQBUMUmtLU5J9HWHas9S5LYVK3HHR4HTUCKqbkXy66wNVoLrJ2Pp5UQ8PNgsLWvd",
  "key29": "NR5xiqZqSiW986NAu6m7osW7fAoC175RqC8WMKWa9CM9ohmD3otgMbwogvwPqeG7QSeD8N8NA7bfqs52HZxi8Rz",
  "key30": "4wJU6G6ZiwcHszryLuE5wZWSFM2yxRaHvpUySKVEgTgPmKJGQaSQWVgAeWUqF8CjLrQaH85B2a2iq3GRLz7YNLyb",
  "key31": "Lbuf3XPN5mQvWYgLsFhQnSwSuTF4DgGtbD8ain7v75FxUfo8FxsYaf9EagATkrwmaJWWrrzmvAmQxwHC3wYqt5A"
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
