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
    "36gzTnz7sZwHtbAXdkyd5oFxeuH2fDppnU6fJAG4EqhzSF4ArevQ8o8cDrBzD5EaYbxGUVq14NxxMHxEZ5b2d5Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmzqJKsm9ApbGPTm7rBrLNcTeuX5FPX442cXHcQxfyTYYPQmy91PWjzsoEMe88rBtwAdHAcnk3hY7xoM7icJNQc",
  "key1": "P13XbRJ2CH4vfdoxNppfB5ad8f8LXSDEG63yDGg3GnCqWfDj6ATUss5vRJDUmakSSutuHJhxvmDn5RNx3bR2M38",
  "key2": "5Kr5SRGoTy8HbhofxAxQqkioy85q5w279YejyuDxrgWMStCN3q1gVTNCVV539FFnnfD5GG22uyqa473BkqXMJ2MG",
  "key3": "N2VEZmanZWsjd95nWCkyMkrfiWnSKftRh3s49LSWfrTajjhXZoEuRdwDHGkvbjSao2Pe1jcaZ3T456YKoEjY28n",
  "key4": "5SGwvPdnroP1PbgZ5wBhNHV6Wk8yWgyq4Li8TE8xsRGdZokA1PjPKuc6QBHW1EMqKY25CWzHdBapB1poydYahjLG",
  "key5": "38K27vvgGgFDyL3T32cDa5HrEGfKtp6canBQcrxBEVXbBqQ3mHM2Bvqh1GS6KMXmCdubi3Mu1gPvnbXVSJUmZDnZ",
  "key6": "4UwLF3hnpqd2iJf4WZAhkoVph8cBjbZEwGnKHtzPW3kcmfsNVASu3wQi4FcUKa6eARcpDjTqUEuW6jcHGL5zpY2R",
  "key7": "2ihE5sR87NkaXDHFVBXRgyvziM5U45Lm6WwRiaiDwxnbVRwpF8vQ42b1QnA6u3YF39UfLtdGdg8qgrSvgvxC8ahN",
  "key8": "4r2XwzWH5x7cRV3bzQqpcjBJqqn7rMPG4LL5jAAxEjHYrYyM3B56LP7G2VmfMnB9LgwbzcCRbdN54jNkRBGTfFaV",
  "key9": "66bzTfYfMybxZnUMSZdiR2RKg5SZBTdSU7fBRtBhmNJvxXHMikejYAwMuL9biXNAxRkhQZ2rtx9wnWQ5moZnndW3",
  "key10": "vuHTjm1XMjQG38sMCwJtaVqxAJctEk3zBmkZdSK7WX8LDbFDfjuqYnHBsqvtMtyKCNhXXmBgeEGXnLPb8NmaTHP",
  "key11": "4ytuj3QWeVMd2gaW1fCvGxgUPCcML4L3R1nRbgrQkg4tZqG5p3Vfkp3GsGH8EuSd9K2PRfkmtTo1hZrs8rMN8xMS",
  "key12": "4tkTAxrXfrTBPtGu7uRo6dvmpGKwyGo6272tDmT9H4x9g7dLTiwKMhU3qBGbiKSA2BzXW5xYymRPxe2bubRhsbyU",
  "key13": "2LCnjoZ2XEF4ocnJYhTm2AQLCXw6WwiF63RgeT7WXfABZrZxcYjEeNTEeTEg2TNWqhXYWg95gBMBTQLdaWSMwPRk",
  "key14": "5JAwufAHG5ZknxUY5USGa5cLGdcqEComu4ajSDwxxhu5UeX9Kdyaj2SSuCUEkfZkGH6qfbP4QkqQhqSB7AYqacth",
  "key15": "4RmoZg6PzpCtpt46r4e2qyYRwv4tiHq3eq9eRrAefMYkCQXd1EF8mMXwYfLSSgbv7wGiSMkUr2G97cX4ZL3QJ5me",
  "key16": "yKmjge8rxS8cVoEQzgb1TUSaMfPLoww1Ha5YZaGv3vz8vViKzcpxX3KomvjK7YKbkTDLsdfwg9VyWJ2vUHPfnDf",
  "key17": "53XYszg6NbJjkDYR5hJDn9KGQha5e7Fp81LyV1E8Xu4qfmnx16wEtVFHkw5LT9Hap5vCtYkVVjo5TVG917vgfYoA",
  "key18": "3qdZ9Q7kMKNQeZJdu9LWXLSNZNinwKXUH6ZhQz22qfCUWxKenKw6hcaMj4jJJGKwevcxE2iesdBTkyLVdGM6Rjrr",
  "key19": "2iKq6wUGTrMULWvt7GawvERFncN6NqRFiTE1E9WXh8UsuZZnshkDXCur9vXhDzwPGPdg5CfoTENwXnqPiZkpqnU6",
  "key20": "5tTmm1mCRWDPEvKgGvDNMDAX3bK4z69JZQKAMasgCYGmsM7LKS1ioo34FTC994SuEo9JprBS9K7tuWhF2dtX27tq",
  "key21": "33PNbiS4nrwAb3SRTGnp4Tt3UY3t6shLy7LkU9EeeGiSvhFWALQpQpTZBh7rLFsZHNDbYpE6zdbK2J6UytrtXJKT",
  "key22": "3QPKND2J2xV77bymv5mv8UpZBoQ84Jo4G5Xg4iGbs4GXYyUUqakZLzF5mL2aMN5Ajp2XTBpt4SQZm5jK8ayUsZLx",
  "key23": "J8igvTpry7kpsfmjxvNBRK5Ky9q9QbyEg9rWLhQa2cVM5SnxjK4GgT9Smjp4UZR4BLgXvo48t6DFwGWV2HwaWXR",
  "key24": "48J9p3VjNPi54Zc8Pr7i2DDNEfbj99D1YewmvUUaYRucdVuCegcRhJeUTqFxMEVTpmBhQYeVLLrUnhQKJ2ZEfoU4"
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
