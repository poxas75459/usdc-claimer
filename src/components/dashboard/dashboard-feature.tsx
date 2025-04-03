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
    "3ur9ZtCV1Ka2gJsGdjxJYH3nZjLvFHcKHfSFn1TDv25hu7oJfzPiVXu4VZZSMsNp775v97FYh4f37KPB6VkcdGZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZtPWEMjuDKzo8vTCyf5kUcH5vNAtfJpgMorSs9evWRtUhyBDYKKMXodgNo1RTwezJTNbZAR3DL3h5bJhJ7RTYv",
  "key1": "22kvGqiwoZ9KfjXdxa1DqamBN2BnveokhCMAHcHeM1Tx1gvsHq7rCTYdgD3y51dNxW5VcpoT4so1K6Pf2znwFQhV",
  "key2": "2rdDnpU5i4GHax7x6DgRovcKsyaBz22ZehECEztrNvs4kxvKqUbU4D2EzwA5B61ijGhDA777LPAnZoWLfSc6zHwA",
  "key3": "tMJNTnP76Q7JHfapQNZtiYguj8k6RszjRH3Z4f73gDQuHTkQYfiSPhpDcEjKJBkhh3mzMA5qRak71b9D2cVEuxs",
  "key4": "2mCtDRh599hW3gkXyGbyf5EJsPtA8mJucApxPnZcfAMyZtGaKykRFHyFpEhnnGsoQMrqT7GCa8MkUSF8CgQdqX2d",
  "key5": "4WwbazM8NP4jvdF8fnw15u9VsKiUi8BzBCosLvyCwQrkzC7baSiALUC6JaSBFeFqyJdj51YiWrerFWDgXfCFfXcp",
  "key6": "2EbJPKW8rPrTqk6wci4rzXUFH9hBFKM7YibyvbRCeGa6AYx8gEJpUTxjdp7q4bsJsSJEatD13N8WfEeCKyQsnLuZ",
  "key7": "3TKyGKUbdeut39hd4LifPtdbVEM7oMHgbSJdzi8MCTvK4zguTVaHHZzdZQ7wcKkWwRcUiSrXMKGRtQdnUYV9s5Yx",
  "key8": "44RfrxcDWfBgj3vRsNv9wADoAbcpNWHbnZpTgcHnX97KRpHaVS9vGtEL1cELjUy9aCMJZGtYpm3idjtieikcJ6cR",
  "key9": "sDaKAYdEcqqsdARgYcwMMeQvasMovuXWct19eyUHDZJiydrYv5MSEUiZ4x81XouTmR6SaA2Jp1XHH8JHmLxef1C",
  "key10": "5LRPrenpgpf7Nj2F9EcWH8c6EJGQe51mJ2xNhmxKKnL98AkdyysXhJur9FcCZCsP5f2JHhHe3mcjMMVoTdU9mqJt",
  "key11": "wqrC9SKJXKAnK647GQgmJNZSmHtWQnzjbvPhrDMZojbUSfkMJMdwjKisgoKoLir6Yj4fGs8wxxbk3PCsJoVssAU",
  "key12": "4kGNZqdkgtjMLXAKvbVKhZHMZdtXvZDrCmFBefzdbQBEC2qUa9q73myTPGM15ZHzX2sxivd7sec31gKSLvHvvkgw",
  "key13": "25jcVcLnMjsRpKJoFTPEazwupaCtrSujLQheab56N9AXZyQZB5BEuNjaGLK2Y4Xcq9wAGzDdRnxkCXqW6Lpasngr",
  "key14": "Ka3Pix12dxBYzgBtvbkgxAor68qsj1SsxCQbSfJFabwYMAQ5q97gfoUChcBupjBHLpfisfeXvHPPtnGzcjPadth",
  "key15": "aDZfgJBR3TPSSQSMY7YckFCuJ7rzqMD4d2cmkdWvSTwvSWxRCktEqH77FkNDcNWGo2Nyyu4ispwdhndEpRmqAWs",
  "key16": "3tvjjkwbRr6b148YDowuXg6FHds8htxyy5K6LdGzRfnA7DSYbetR7Si9sLc9ebATP7qmjiieVsNzkRpJKkbZLHmw",
  "key17": "5U8vJ9KRrADVK2HyNjBmCcT24CSbaeCiyHZiX1q76WSoAER4yL97nc95v5KzMZAj7JN9EoBG2KMEqoD9Q9eMqGjU",
  "key18": "2S1VNnyxzcQnS8TEzBaQBfm67YTeBxY8pMkaAcXG85ucmZkDVXsCpgfbhfzk54cxn17qhDxkjMzZ1LkGBBsAoNoy",
  "key19": "4RyHkWR7Mzo8xHjwn6yBF3ZWYSVUabLMBuBALYBbw1VVb1wBesVJ8FU3dojV7qyzmLMCz6eqZ2vdhTdQ7UW14Gyw",
  "key20": "4ApPcix9whEFaq8JsQextYvrG58gMVQpeQZ4wQeAsNLxVpdUTBGrB8qXEZbXkUP1kSjzwSxbBNcshxHNQpNXtiM5",
  "key21": "62oR9HZbvMFhGEisvE7fsMaAFkBB4w2gwWP2s3X9zSfVyXzbvhwcD4PQq5wpKabFgFrjKh6ha24NH3YJ8WpnpT2y",
  "key22": "5nGEBKSx926K29HTJKFwm7Rs7W7jmWkURS9vrr2rzZCRt7yh6q6zv2yay5Hdff9rBGWg97QRg7jRUwznZYRonAJt",
  "key23": "3gEXp3ny7eHXvqaNu6p19pyCfevM1Pwh4vfzPVe3ZrHzrHS7Ms1MN4d5oEBfEYcuAqiQWsuC1UYcfSsMTuDrsHpm",
  "key24": "sCXVZNBzXNS24DZ8MuLKqBmXGKBqGT3deNMQX4jRewop2T79powtyRorfNovtQmyescGXsDDJcwoqcoFh26nQ5K",
  "key25": "4WjSVBs4dPFs7sdxubePoycg1hD59cG5cm9BrC2e16GESZW1XLQBxSk8mHoocZPVebfBp6j3Khv6wyizmtjZ6p7Q",
  "key26": "25TZhGEhPVxQDK9gYFgvFUpDyUiY27KzrK9XoudbUWcJaCVHe6CjU3cjD3SuTvF3HY6oL3a4xSaHNCKiSuTp3nSr",
  "key27": "9MsdkJ1YHrVn3D6tzJPt43v6fhBh4zVZRJN7Na1jBwCCNzBfTgbzasK3pYe3y34CEgzQYinEpZuoSEKHV1DQQ9e",
  "key28": "4QraQFQQWXzKZLiV9XhBpQyWJBrVELojh7G1QWWAbzGBb9qFbNqT6zjEe8HEPamvX5Ni6zqUFTpz5XV2TTwWJsYw"
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
