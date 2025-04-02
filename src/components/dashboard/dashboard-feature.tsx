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
    "2PHPG9nNvTz9PMqcJVKjekjD7UegStmsF9LUwYd5DTuEqHac5MsFFc7p3XsscgG6QKKyxPwraxQjv3EU36dNoSv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22t9rjjKPmusMWLqVixAmNXKzn6nxqnwiDcy5bZgJxAPaDW6f3QrUnev16Q4RSKBTggee37vi4QpALPhWAG4PSUM",
  "key1": "52LyA6CfRUitiRnpDkizGn1fjWt2Ac9NxVGu8H5W5LUrMSCm4XjVCSfB5R7sbHDF9T3q2R7yXWJv4e7daBq2M7sF",
  "key2": "4gAM17HYZkTuGz7Y34exg9ggg5vDjAuZMr7kiDHnejSSKDbStQ8NrGzC1wnNDmrk7NCZyut7jtYE9yMCk1TaDvE1",
  "key3": "5kb7SZaT6rpe8V1caKokgcs8i1CYj8ozV3iytKk5RuiFpbAVRkZkViSUdFg6kk9nhuTKccov7hprzvPaBHkRBz3d",
  "key4": "2urx766bLnnkoi3zwe2rx8sgiugoUukWpiAg5VY2r4f9Q5Vrr7Px9yDtD3nuGkM1MKa14E1xuoDji9T6SSxLNmEZ",
  "key5": "2WcczVt68oUoUGgWwwB7mMH93NBPtKqn6XVx51WaTRHekZNBXFY5AiMHYMpu1aFvF1RWZdqHfcGvoA4gyhv57hxd",
  "key6": "4CsR7BfJkYFdbr9pJbBHAn7ggL9MJwiK1y6ZJQmeh2j1DLvxTyoKiSUnJS7aKHUV1oVPj2nARSKSKKzqSLAxd6DB",
  "key7": "XvUz3N1pf715bwuzadMWqS3vboBhnasWTffAwjP7U7kb7FyWQMJpNQQL55gDXx9efpy1Tx1qCrPSucjQApxfp9h",
  "key8": "NZRseJ8RyQ1zkuhtAEM4jwEoBwxWuVQJcnTtg7ACENteCTFmwPzw9nPLSCVk4XZcR4PUmK2k4B6HNXpB4cxhq7d",
  "key9": "4gJ44i5FDUymUuB9y4PUZtCAX9gqidfJr8UqjnTEm1e4QW96z8Ra6QMvFVxXCCtjA24c88P7PGTzZPgmr9JqyWQF",
  "key10": "4KWycM86kWqNJ8fnogkzB3LunwUHsqyH7VRmFFn3BH4VGTwprzCZr9twH3RpDoapyYATed1kTnaWjMFNGa9mY7L3",
  "key11": "2FnBtYP49kHEeuAFs9LyZe957oQVeh8FvV3wA6ukRKvcjaHpAS149bDTSNEVpdADBDJA8fdxEMPrAP8zmdvYBuxw",
  "key12": "5dxQrqE9s77nFynhMZoE9TEu6q9wCFAe3MW7BkhNAbq3Tmk3Dj7Xgwfn2jeUoLPccU6uyAVo1PpHrDsRNDQVc1Ch",
  "key13": "4EWcgdhRv27h2eio7AEZBi4FpU1L5L46DMK97M1g1Yxdjv8CpWEg3GADtxCSomdBtxiygsGgLeTq9MbC4fdMc4PN",
  "key14": "4S1ZVyvQqGH5T1q3qb4BtLeeQLtqffqLoiK9Sjt7r7YifxjVD5XHdjnsp5JvbHJTu38VHFyEvhLwkEq1JLFmAvzj",
  "key15": "2iTx3NiEPPSHkBd9Nuc12NGLJCci66mpk7cZjR3aMa8EY35GriCRYw29ik8UqgMfRnNzJwn9AwUgV8LNdQQboawm",
  "key16": "2Zubz7Q9ZkqABD1NYiWv7qwtwKbDdrxhUWNoJaQvw9gx7x8c9udGLth3Cb9fRQGGM9rrrG6LuegJKzwPzGjGpnGs",
  "key17": "mVyGqGXrFzP2nYNHuBPr1tiqhVHvLM2CKNYqc8DTpM92228MBq5MBJtf9U4pYf7A38qwd9G7w1psWS6QiyJJ5Ui",
  "key18": "55arirNq3xzzaX5wU6JkPKKE3CsLb6U9vmNx5vi3hfkntNUts8d7tTLkUrsZ2PKp68tueMQfwRMbvh6xrt2QcWwM",
  "key19": "4aMBv9aCfSJVAjoUk7wTh9LmLDg8QJUYvB3ZDMwmrDJuE4Ti1BXEfycxqa7qzXdYWfj4b8vGgitVkJTKPQaS9cLN",
  "key20": "5aRi9htRckAg6U1HDiaNzpwSfiTw5FXkm1NGY8kisyB36P1hZv5n9BKrLdcjxybwnPZmX6ft5wgQBAxvDGZErjgU",
  "key21": "191vonsC59Advj8HgWwmH46J4dMcVg79iKDvHDQSdEZLzeqY7QnexyafcCiwe6Fptk7yDu9UKsVt2Z5aJj13ZUL",
  "key22": "g9wWxmyxGgNJrbqCgMFSMY3kPH6uoQ7MjNquiuK85sUbfmRsmQaejt8rNkEk4b8FCMgZPvZnm6LL8b5BTvE5X6w",
  "key23": "2JT6m31s6GGgqCXHNaCh6uxCRLEVbLksSBqYkUs3ErQMfPivbRsB8LeSaHBTjMfZGaTGy2An37kVgaBSvMX39bf2",
  "key24": "3VX2a5NbDBgWjWzBXFPpZ7Hyfy6uNcZYE69gzJ3hEQYuarytAM4zRLZs7FBepVgJLCF4xZDq1jUUoQ3dbKgBj3JH",
  "key25": "5PVxMSV6JA7SLu2swQZ2PBe8YSgF4LFQAk7kz7gzD8vq1qooZAgCJPgRs6zJJHX8FZV1xh1ab4iQ7BxDN6sn8noM",
  "key26": "2fAyvRRBeToaUXtUKhMcas3NLwteBe7Dqp67j6pw2URJBrhkvMsipEmnnJ4Maa6LSP5Maam2j4dbzNCwGMeUJS4c",
  "key27": "5VaTyf6i7CgZXWW3nhJ6e7z93BH6cBRpqmibDEGyVKMSPdVWF6Z48eUiy91AfALCorhLQqC32SJQZmUb1A4vsJEP"
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
