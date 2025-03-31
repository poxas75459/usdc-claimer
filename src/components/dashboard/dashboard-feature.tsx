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
    "J5pmLX45wYmrzJPY5ajGgZ3FkZJg76ntybyj5xuuR1JyrfS6XABx5KdHKwJiDXvHKnuxQGjEX8PBcMz2YqsXvwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGfjHENLt7fqVXkiFzL1hkgoJiBjZkMQV4yDoFi9cNZnyyPzgNQgY8CXmRWYmc8Xy6RrTZ7xqibR2t6TWaHD8wC",
  "key1": "5Ghq2LDErFEWftMtZj3vrroTJ6HVGcQoxfGLashSG5Rajm3tuChYyCoYXXb6Fx2Z7yJsjir6km92DiMiPPCmsRHv",
  "key2": "ZtZQYaRW2pwPpY2y3u2gobdXpPpKbmTVGW5TiV6YepHqXVzTNqtEXSrYj7UcPcW6QDaRmqdEaX3JWiCoBsBxTVS",
  "key3": "4mQPas1Z9EkuV68XXSGxiqYhdL2uRA3p92ubi78Mkm7cq5WiNtWgVKmv3vxpvhNX4RDKprPj3PuACfQfWqdopa17",
  "key4": "5UZg5UNPJA3tcgzSQogD7xC3okQL6pSxu7bPTQxuPPV4wUwcrL6AUtUhiUCZAs8mjnuCXa6zXw3MJ9G5hraq67EV",
  "key5": "2L6CeEQQLurnpzjFRwEfa8w9nh2gwWMhLMVJb3wJbjpfCTsyZfCm76BiJADat3hf1qxhzDUdJws1Y38JtaM6S435",
  "key6": "3sLDWVJzjQfsn7z4zpnC1Fdihq7jNL6RC39NCzN4RFpgefgX5NZwmZfC3TXo3sRV4kvfsmARHby6SEeeJxhLQbvC",
  "key7": "325pcQCUPAM3YU3eMVKAAF8XWnne7dgE5Rgr1T3m7xUVb19KFrmtBbSq2K3dGZSohdLyfD1U7FeinHepo8NELKTy",
  "key8": "2PMDh7t9dvweK8qBJaZg7WCrGrT8xUFRYPtV6DUgmJVCVwCHUmdXcuGvToa1q7r1LgRKsXXpVM5i3LaPiJB5GQvX",
  "key9": "4YLCNjLhR3yMY3aEXDtWeeFcJn4NKLg8mxjqehrAbaVq3HqAzVxDT56wNxPqEAg6LeCWHH4jKJaVi7uE7KBzsKh7",
  "key10": "4ummnR5P3vbeU9MgCMpzX9ih9gGQU6BCQ3QVtJfyvdQ3wnqbAR4ZpMyxqZXkKCbMJvaLzmpV3LB3iAiVRZjStp6c",
  "key11": "qUhdyQGzF4pjLrn2eRsiHf8EfnXujevQ9cX745hRDUGWprxmNL9WebyDM3WkAqjLHbtiH8rWD8vexF9dawFBihH",
  "key12": "48QH2J9TYfhsxyRJrs63ixeNFwWFRJ7gRYs5pfAhucQUg3yMHge19TYbAVhHNbY8HJqBzyDMUdTbP45jX5sak8N9",
  "key13": "5igAh2RZZzH1PHYEqdRiNqhdD76STJUu1D8CAE1zEPXAzSTKMwfvErtQvJYMWqbyo3rz9QsocVHSvSGXgkHCvhzW",
  "key14": "4A1xYqiNrsE4reGfFigmT98LEAVewMfdzDdheyHCpMRotMKLm6BAFZL3mUYCtVWb8g81iWoYJFr6oF3voLs9nNfZ",
  "key15": "3SsfQRe8gWhj1bBZ59E9AW3rkZ1VC7ZhmueqnJhH8t8nss2cq2wkMmLtAFx429TNHpkJyTJYt5W4MMGqzGCn4qAf",
  "key16": "33Jorfge3mQ47VaWKyPoixdwhvFeNB9JWUKfbb57orfxYDzLDBeXJ3jgawhfo6QKH4y5y21mjPKBhU5WqYGEpwew",
  "key17": "57Grmbpytkn6kzeBHCcHQUbbRZTqeJYEKfn11jX2aqYqCYvRJmiMr1TAeJzCiesVn9SH85hkJpDx11spdujCKw8R",
  "key18": "4hovaqPKMTXKpD2CHLKefm636uN5z56N8kyS3QaDa3ibeCVwLsJbcDNWY3d6VkMKNgFwVeyPrf96UJm6WdbhCE4Q",
  "key19": "UX8trN9bpuVLPr9haPARWvqFBKEsxWdqWzUwLQ1hHbRqt31g1mZgQpdEeduoPFuzYcXsyHvY8RpJaYNaFqBsYA5",
  "key20": "2PCjpD5BFEh14SmR4PXK4eZG5YCaF9gWpHGM9N33FFpF2uVoRi8Dcz9vi7SZ26FrpVnuFjvGg2wYBXg5ow69CXNB",
  "key21": "5hDeqQ4BmZ74xzoqcSpFwtM2zFj7GLNW3x34Hy2z7TCRCJ8pjoR4q3aSP873texEAt3FuQ8ydJKzkVTMVA7M2QkQ",
  "key22": "3LdzMvn1HovDKFiM9ZTqQ2abtPEof2u2fLm5V6iTWNq7HfXUwutZ115DmrBw7CtvsaYoG6oUE3C5xm6Kipx9B7vz",
  "key23": "439zbPs6gLjFs9q5CHhAMBYgK1ta6ZYh2k5usuwCBeUH5o33iPmGVm2RVjVbbjKtzqJUUKgSdZaodqgCxGjjbn7t",
  "key24": "3NCET8oZeGczRqARq8sdbBX1xneaecxGWtS6UWXFnNH8X5bXXJgcU9HkFgckGxGerQKLgQ73gWkfU1eueJqFZ9p",
  "key25": "eYbqtHdj8DEYsnNmbzMF7WzddcUgci2kULHHs8QxwFfopaQksDVfF6BFNXPMSE7tD7nNwEZYXFX91DTt1oZwg9D",
  "key26": "5sQemv8drBXrEp84J5z2U5E5tTs8p2FT3CcuAAN9uc6Wtc2ta8JU9iPBBNi5TtEHrtwAnEUPMW8xRB1d4yoaKC3t",
  "key27": "5boodDDGHS4UpfFp1D9pEfbwjvtLf5XPB7LZqMhx7cc54cAnsuzG2kaHyUk4JauNf18RVwrUCgz9CGprrQEenczJ",
  "key28": "5xPxuvSnA97GyLfrdLRsdwE36d7S9aQnLRcE3JvLYgYvBfPsLTjdsfztuReTnGoi8uPMt1XNP5KXVsQ9oMN6mayv",
  "key29": "4wNoSX26MbMDFs3uLrHxFsyYVqUz1RvndBYvoT6KdVMXrUqEDesncggMBJXSv2q2bEXEdDQcH9vXg85ABRe6ZtaQ",
  "key30": "2V8SygRQzJjWJUPRZVkmC61G1wZdHMfG6S4n4oA1wZDb557jioUYZEaPGYPKYCw2x85pAn5HYCPyqUEJCf5EshM"
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
