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
    "5o7Nm6b5Kx5t2wtKNPKiUyWie7ypeLoKr9RL2VhgcfqtSVpswKYKz7AF4Q6E3WK4XibgXaG2rYo2gRb3bp2ievUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HLJmaEyKbY3AC14GgpiJonGpX6XHLUpojz33KMSSdE8SjHQgMpUEDTDCD1XM12LzfbRMGt8VCE7PiL8jShh2PuM",
  "key1": "vJoCvANu2BqZY6D9p1B3CUWDDwsi1w3p7fuUFJGXwHbcEeNTpWnBjo5GyRfi8DJ86YsEsMihNrVX7FGDdCpzi2Z",
  "key2": "5p1YT5LYbMcJg9otodyG8c1BBNitc7qQeB18PGYNwBP3qwrviCYJagNCY9gY3JmugWQ4YGzSGKTHKqmmM3UuspzJ",
  "key3": "4aTM1haB8ZuMDjzvptXqHvwM3yta39EfCxBbVve8hpZ3XDK24rpWaFo7ugKskmmoBJLPn6kxxTfVVt3TokHWgxGm",
  "key4": "4dpRjNuTt8YFuQGKKaSZXkBXZhynHWAUcbzX3cVbBapxDxZenQZSwiqHaWQpVejmRxNUZ7SLYwMBEkhqa9e6RMXY",
  "key5": "2CkTcUj175TMHNz98WPSS6qZxCs5ysicXfvmuuRGBd4rtNuoCLXXwHaKWUQCj1yGnUZ1FY227FV5rHYny8w2PWW6",
  "key6": "3oepksGyP6QUECEL5HKgBCbV5oS5gKzXbzrAp3zxcVNjQ98RZFsFGgidotQJDWnourLw23KYAZjFpArn285yMjEg",
  "key7": "hWHDYPmC4CRmUMKj8yhSHeRVVd3rNEW1hFZy2S4i7cZPeD4kvQXafxXzxL2EF8oJSL8yZZiQFHFXMb2vrUcorRT",
  "key8": "2SKjameGpXZgT57LftCUmqC6WuSq1BdDWV9APrvBqUXgtAHBp6Yut9TvaKoiHhScGQkgFTQbi6mfeQwzgdA46cSP",
  "key9": "2vP6pyteJwtnnormHN639AshGrgHyeyWtQTkLGSeFvxsb5xBfzAbeQjtboiix4y44QGQdG4rDuoCoFAtSzo417jo",
  "key10": "3s1r5ckyeQE7bNEGgkJZU52sSjDHVyefanFyBpCvCRX9cnh2wfx2VcWbdYsDZHZBA53ygHc7PdeSuxc3xvw3jM58",
  "key11": "39ygiQ825Q7NaGUznQAhZBUaASCGkXpxFZwXWpwHQDFJoVttfJ3VbXbtXPT2w2FW9YgyY4Vx6psypfLUePQByqaL",
  "key12": "3zpMKPT9NoJUc4tmfnHJ421QYy2dBRpnjWtFHnKtPWn1HZ1AJyb8F54UucX32a5FQPR7uTfWJCqpaoNyBs7D7J2t",
  "key13": "4RNBa9pf1nxRjDqFGSormvDuuStxSYki5gCo4QMUw36p6n29MUkx7VUYYB2iwihW6HkZ5gTRAqMY6iz9Rzxz6a5p",
  "key14": "2ykdxNCXNSMsVzuY5Nh215WUjuPoDHkW86HYiUeuW6RAtTE3iuVdJUeWsX2UjJs4LzSMAKdnnYnsMnwj3ec23pmY",
  "key15": "5H5bzGFYiQs4MVrf9VLGMy8qJFZ3fJxYkKgw7kCAQqe7xD3PjRTHSY8pk7LT291UTHfUUgfNiyJNsPGiMud3Q1fn",
  "key16": "4jvqKeGafPyqsLWHSQtgvgnyw6tGxV3Sw83SGbjg4oV3LYrqTVx6rGbEc7C3EEQ8U3PuDq4fpmAdZFrxZzEMxiHF",
  "key17": "5QkqsvHwWmg1k9dyTPBB4Lq3Z6vHmJoP2v4eS4dbR8mSZcUEDi4WhztaQMUEsQVzwdy6Y9gx15hxdpksZ7FycTzC",
  "key18": "5vXtREuZFU87K1GYH1vfFWekc8xFyh5SWaBh6aep1u1uucbDDFpwcmLiwmkC8Weeix3HiisMyFiFeYE4ZGdAPDgr",
  "key19": "4foU9wqjhf8zAfQKBodULnFWq7VLrQzkSm3WifojDACgj9gL9jqBiiAXQAjaBcSEuABDRmWTehLSmgfx5aPqG7SD",
  "key20": "42wdkffnY5cQh3Zrr2b7oTRCTtheVNxF9vDCfEWNaebKWEpg3WH2Jd4kPx32FqtDU7nogh5Qc3tYEtw3fMd954pp",
  "key21": "4CzPyEDp8UUrqoHmto2CSdKL9Pd1V77mDwy1LLizEQ74xcw77RmEYEfmnTN3i1jSGwXPVYpCFoAUp33xcd1L3yPj",
  "key22": "2tTXvUjgjkY4XpnzcjLwVfa6CzjKn13mBRXEdDk83p2xHwsjxqxwSKQ9dnkomnEqBwiLe9pF8HjRwbPUERyuQPva",
  "key23": "5uF5sFhCDQCzb5N1XMnbm5foJbkyfJXQEUroNeVsPKfNGnoqhdvtaj7WbSN6to5uFkYcedNjY3Wv3eBZug9vKhut",
  "key24": "bDp2kxCMoCLSutX7rNLngMCZziLc3m11sxNV3RN5tDj4W864raCsX1HS41cKcswBznZ1aXAu9NePWy9ufPiWzZz",
  "key25": "2yu22xwXUoW9x75rMQpN3BvpyNe9ZjzNWtAR3BhVXgXr8VFfrcsBK8x3AS8Px1MdhFgVrVXEeQmb3MBQnYrJQ7iB",
  "key26": "3tWMmxsmrWLoPd7ZTk7kaxEvBCCa9m1NTWm7hB5AfkZY9oouUSSCcgSs8bMDTA4MLCcVLPK93xCYG4M5maeCznkh",
  "key27": "5vfFMFPE2hnAAp8kxZSNyJ1ZoZhtqR1jeLdHcr6wkuWeywpzdnuD1uA8XmVA61UWceKxrH5kZMM4zSpShJp3cRrN",
  "key28": "5HLY3kFiBnZ5PZFcrcksZyHpM3CB6BCRtST8vvEJEzdpLiowjHdJxsPipJyV6gkoBw4kLMzxTDMz2AaLNnVCkzCK",
  "key29": "Q7pyZuwdG2KLN3UnMmdmc5h9TmRx2qS66K59J9ds5LynBRt5nGUsobbdCccEaq2xB9mPMBzBBMxA3HyewYZRBAJ",
  "key30": "3btcZJX1qndsC6J37T3MkmS7g9FGGkEbpn3YqMy2LXyBWy4mrUw9bNwTP8oHAPhVNBhWXm1AA7uZ45ELamspCqcA",
  "key31": "55gRMeWVB8rpFepLWeAUSC3L5ncNMcfymkhW7iQVyCmYm8TpkSN7kgeTbNhFBwEBydpXr1Z27tMbeQFQ8zU3RN7k",
  "key32": "2JBqzbNdZviFPTXppaw5Vdd31BTqu7Bhsc9joaxNWzhzBACRz7kdPavcxfBiTKudYHectUo1Ftm44g3cdZnFhBsS",
  "key33": "2m2F6hj2tWgA42mEGh267tiM9YqFZJePx84fDaJY8vgjiMY2b7eaGKXwaPweE2EaDK38H9x7AdR9KTGXnXHkYrht",
  "key34": "4QVj7hMTPahyi6RMzNuPis8EcSiettznFb6fNw9xjMGCZzMhhotzMXtxHXQ2RnJpeA1XRnv6EMQrA5ABHF5HcQFv",
  "key35": "4S7gNesAjEmS3nGGhnEW2xQeb2o43ub5GfVundsvd9VB5BB59tr2guoaBpnmhsstTaHhNQpRos4nRSDcCFgq4KYM",
  "key36": "3o6fjyYwfdQRenKXANJ125nAvUDytC9oYBffXcih4tLfiKUnnYggBnzJp1cB1z7GcJxp2SVPtdontEuNVpiwRptX"
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
