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
    "2QdaDwiADTFHuFU2bhE6dHcXhXi7ga5aYnux4vU4cBebSSgbEzEVTPb4af159cv7oqHu2gh62p2RPRzXtMREH4UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6aCrZVr96fMmLy1gprZuCsS2trh3f9ewX1WTcTX9rRPWPNgqMqq3uzY5SHuK9amV8r4cN538vDBCPLKVSXTZ3A",
  "key1": "3aguzQeQdeExFYUzAEcEA14uVeyqbcFwXVwKoAC5JJt7nWvcdDgt42ZbmkJprkWjLgMCxqqmhWvSN9G4sRKGUdt",
  "key2": "k4PJ9UeBpNcgaYW8a3LmuyMGJXgxgpyWnQEwH2UTdUPpZv7SgYCSWiEZkL7QyzvmXMQw3jJN2c1YK32ipSvSs7p",
  "key3": "4bvzLRGi2miaEqcw5opx9LYpwNc9vmvYKJyetbU4x4Q9QGFwNH21SbH75HazYZA1UekhuxCn7SxDQGWHgnCoAwGt",
  "key4": "2gYC6iCxAk38DcFZZiJF2syFa8F4oQHuCZ23FLjNZxBE8E3PYna9s7fPqbi1rpA6SC5xGQaM7CwSvWhzifFLHxue",
  "key5": "3RXgVv35tuCeYnGeHHsYB4tqnTrHpg3QXAJ7JCtpeaFtdT2jHeYYQYDfEzhu5uGyc8nigogFsWg1N53spGZzhYKR",
  "key6": "4YXA71rM69KL7dczu6EUHo2amrGbeVYkN8NVenm9whWGhsrZsxiPFv9tAtYsLdSGURh4mEb76aLeQhVUVPfB9wi",
  "key7": "4K6a4WU8k7qXjPt96oP1VP3bqxXNzkHQc4Fx2HHpie6eZ7KWvVhTP87QEh3z387XjqkVhhFMNog16nzcnhYCRrUh",
  "key8": "3fuMM8jYP4sQPKv93nZ4xRLd8JAxc8HpPdQUVfaaTyk2QEG2Dz27gWvigyjLNGQ6DmKaiyDrPWND5Y7ZPXebVqbA",
  "key9": "kjWNXDLHhKvit1wLjZdhHpMA2i35sAYoWWD793djRHSLZcbA8YVixMxogBc27vuXip4zz9GNvbfo7M4NYTwrkpR",
  "key10": "5THN1nMFT2G7BdegYSH4v9VYbfV5McXwzBEHLTGYcWytcPdVs28uNAR1EWegQr7v4xPKkRZtQDLRncPNEvqRR2Ak",
  "key11": "55qL5t3ACqAmsuvLyn2waMvaYS2Yw5ZLmkhUn6g7HCLEMh3ZrDoCUaJQYRMGZ1zhoGxwzxF6kBKdUxyWe6eGKYtb",
  "key12": "3WBBRWUFtQjLosVvG3DiX9wuwqY32jjb9HVL3dLv2N5d7b23LVxjr63XvmM1xRSR5woBoPvn8XrZwY1UzyjEv6ra",
  "key13": "3yCGKbV61UCvY4a7J8L44crZoWbVgXwQRy6HuW2H43XZ7xFuUkNBonoarqcARgpfZ223xj8Qn7bhdd9mKCAvdWAX",
  "key14": "DcS7uGLcZh3iPo8jnhXxgv4VavEeb5W3ECXnYSNt5Jy5yHohg2a75LLdUJGcjGAX8qbrxxU5vVd2vjwoXRAvih9",
  "key15": "2edkZLCsdqd253jrjsGXfm6KrUDjzyUdEDy3eHJbXg472Yv99sC6edZqeBAxVrLs5VpzuJzA7BcA133V2bHW9pWN",
  "key16": "3hyJc3aYUZ7EE2E69Ut6q6mzF9gABjS4Yj3K2nY5GrubMmNhH3XQnKd7KNzJSX4jPyDLW2Tnt9mawaDJRhUygp7n",
  "key17": "2ZoU5i9ypNoQPUSp9NN4Xn9CosjqhSVgvGPi6Bk4x5T4vi9gFXanwtEWmvpb43AoyaT3bMTsduL2FErtRGcPZqHx",
  "key18": "5UVtiHqgyJAcJDEJoMxg7hVLbET8nsnX8oirhRcsyUHHH3Kjd9FVeFrrXAYEMiqo5n9GJ5bKtAwiuqgohyZkHFw5",
  "key19": "vjRGTFwN2mayuh3cs9S5ns9wdBu21qJ7VfmTA7fzgbhRApmLaMz6f9HWP36sKHf3VQbnxMEKXhVH88wApWadcvP",
  "key20": "4FvN5E5sAXTGSGPEAeBGPpQVHeTouyT8BNF3he518fQgiB4WqwtFANy3Mz3XLqzKVBn48GQzDAUkQdFU2WnaH6vy",
  "key21": "5nxJ5cEFQdacrbWNZZYroRADAvgs2uR2ACb4mZuifrwKD2VLGf8trvzgqH1zCcxjwvhj9yf4eQFPqb1XMmgWLWn8",
  "key22": "3Dk8EamzPWthDky2CNKnmTLTmxpchbg6r2mR9BQ1i4gmeGJAdQTneoqeecGSi65NT6YNs2zKKbJn9MpdM39XEoyy",
  "key23": "2Co7CAC9CLWxD5CS4NDSEsH5prwsrjDw69VTdfvq9SAhx3jXJZ9u2gCwyJpc7XX5pbNGo6Qok82MMY8Fi2XRKs6L",
  "key24": "a63Dgc8Eiv5VWyv4CsXrjk3NgoxxUsfHzUqXm2JYU2RJvPZirhVHucV6umwssbJWtEs4VRzE7WjVyPTgJwQawKf"
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
