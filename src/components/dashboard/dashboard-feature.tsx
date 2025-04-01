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
    "5VJtSjgJ4QSAJNpUeVw1R4utUhJuySpnisTAV8QE8mceR2Q5cisRHh84grwPgqdJaNV96LZ3y8DugnRHkWm62hJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jn2zSzAidkB2ukZTDqdCcXGhWEpH26jAiqMfBWoZM2jagBDJtKWWcHwfu4cZqinoJsodo2yLfPU5VpsN93DUbf2",
  "key1": "5hS4dRj9fojaiSTyh8eQUcWD6f2RyFXZ7fFVp79WJoPLW81QnkEAQ4UJSQ6ZREbyRfAtpUY9iG85gU8LugLV531X",
  "key2": "r3UFc3jxFPbvbfT5C5VvSMCdRvN23jRP3X4Mwy35mJYWuXrooponAfJgEivdg4A6QiGxq7NRCS3a2dnERcAtYoF",
  "key3": "sX79iGYbF5yrfbXG9NPq1hMqWjgixgisW8cbwHJ5He9c4aPSzmg5dWWTJhEgp1RVABpNirwrbJ8EsTqHW42bh5L",
  "key4": "4isERRx6rhHtwxtfW1BYwAwUUXPAtvhzTTyBh4Bn1Hbhq6RTfUxZoWcvF88rcZqUN29y5i5AqFtd7ziBKi3LL7Yn",
  "key5": "5eo5vSwidhufj6Mzx4TejbQVwttLHETWxD44oKLr559sgUGmhgowrgThZz5HLGBcj4PdHhHsZXBiPPmQsdB7YjZC",
  "key6": "3FRPEoc2qgTmfAtqdtsW1dgVpgaXUuLmJpv6H8Xem3VZprpzaSfrAemppGemf8xdyG8YgScZA851MpBUdnSU6ekn",
  "key7": "5Ggp2VKV1KX6Cz6g7qyWtuJM3QmPBWCECjQ2ewMxvMyL9WoCWh8sQxBtoTH2pgxNQvn69TT25NP4MeqxUn42rCE4",
  "key8": "4Db5nPFZomRUgt3YZowZKaMij41k8whj2wtx1f3n16MR3SNVyX3JRy1apavvvpFCn73f3UVNWVsHXxGJSan8RfAU",
  "key9": "5GgGca9uCg8jvoFQAzJXLUAe3kq5NJoDeLPGGqMXECjia4B3wmYD4ekv4ZGmt373dZexNWqSSGZPgfFYPkC6zWex",
  "key10": "4DqvrLyxCA4EKmoqDfS2JNrie4oEhXh25HvYT1DfPcy1Vvto27CeXjZktwHpViZGpc6CacFpF7t1jCQ98bWtWRm4",
  "key11": "5TRaGyhGxEtRjiDDENvS4MYToqLpQRGTjBwK5ozAZzod4e3SQKkMViyGCxtNnVpqSDWQCXQX4q5yh7bT9GFgKwuJ",
  "key12": "5WkMHApWSWFcg3UwJdPRycg4bBZZp8jkuVjZA4eSsJKwbeYVrEPm9uWUhk2bsfz1vTR2FmF8q2TWLU6QGxPZVwpH",
  "key13": "4aGa7W4RHwMqYcZBNn4TzBaDUZmEYffKZyJt9DcXbryB7UbydhAR2f4irsK8o9tppb2Z62qA6txKDSEKUxwDPJXQ",
  "key14": "2rjzJ8cpovfq43wSJ4qtiqw7DDTHz3WwvgSvbM8nNKpZbC3YfuSHTw9wNVhWrzPodwEywA8DQe8cXwwHzX8PvSfC",
  "key15": "4c3394Jk2DvpJsV86d8PfgqatW4UU4JAKbudmVhuZcWT8opMeUFrcpT6EMDgHpQqW7qnFmKdvEuS6Jq1ZqQY2MZE",
  "key16": "3aWmvB9UfAFpNzVydUjKtXWHjh9EPqJ7v5E5XanZX2RNy2vKYWUuhTE6zfHQvJGKdw6FRoRyaSFkMeLnY2XRYeVv",
  "key17": "3AGPdp1FZuf9DCk6DJQMtvkf6ihcnzxnAbp9ycz6sfTrVMzExbr7b9NYSUuQLoeAbPqRQ3vHUB1f4trbik2PWwME",
  "key18": "3pwGQfXDqrHTAZvkPLjFZoHR85hrygwxLsXKBbvTQLdWfuXy45ZhQZWLSLvncNVioUPFpUxfJxcAuUg7q5dKAhas",
  "key19": "EyUJRjuPWmw6y3L5qEPPf9XYRxPxmP1CyNusDnVCHnpn7U5nnrz2zPrM6MjMtuRNDH9JKtychQ7oNkKBW1BYjDU",
  "key20": "52ekhJ9Ra2bswn8sFtiML1KWSu3e6YmdfiMShV8vFWR7FtpZz7WheHCUwHt3mDWXxB4uEUMXEZaVBvrj9zMTNw81",
  "key21": "5d4ZuwgHQfrdt7eFjTRKQmnEcQ53HLZowaSY3hubq9WwSwj6o2WUCzvoYzmK7ASqWx8v37LrjM2bx8ZnBvhsSejb",
  "key22": "2VHKW6V6C32cF4zXsAk9hTehWLFda4YDe1cobUmUmiBjjSTrGmCLXZfVsvUKSfPVfJ6cmJiGiUUJRLqYDZZ9yfxf",
  "key23": "42t7pLhhYuAnanSr4qqCpN6mdmQQCbvKzhMcCSeYbvo29Z5HaAzA45PFCKBzLZTYAU44Hnx8PSuG2KAPpzwdgUG2",
  "key24": "4ajgk3a3GGycFcwyB96ZzPcDFevF84GgMBXTshw7gdkCsUsNsjC16HjsDUgxU1xTM4xh31Z5G82LgZZ47mHSyXTH"
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
