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
    "3Vs2M9Xgircor7XUMYxsineVKB5YpkrGSqiorYUdSV2e73nEVXkS2apJZkZh1yBohdMAN6ULvPLLQ4T45fCoYPbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JC2utuCkyAc9WQLWK3ey9G3ZYSWeqV6HDRhV7LhvahrEXRNpcYX4GgDUbHsphuxWLwvJaFg1PwgBzqsQ5cE3Vrg",
  "key1": "5LeFdhw7itMEeffFdz8kHxbSwBLMy3jaeQeAG3omhAqPLkTTKCzBSckCC8t6rEpz78uu397XGvLLFhS5HWq3YLxP",
  "key2": "4GnK4aTAFkt7vkUtpzhLpw9PgTGeKT2R2Mra1bTygC7wbFs448WMpkFyWCsS7Zw1B5GwGEKxRGpMKBsEaVJgE4uv",
  "key3": "qyxYfFMtdqJ6JYf1N6ttoswyCbgaHqPvX61SK445qvXgU2ZQt72h2Turh49CSUS4J96YpV7XMvvYXMQyLVVSadw",
  "key4": "F5zmua9XCvnsdSEUrvRRXCohGjNoVLMPYUbVvi5uvsVz3yei7YNzEiN4gAo6vvKRjWNPuPAbJdkMHQNwE9eGXbU",
  "key5": "Eptty4kpKGfsDA53FHu7hoMDpKBtYao1WSpfqrfTQQoydWKTaQakcJfywC43EKa9YbJXdcvfydSe8BaFzP45VbC",
  "key6": "4gnCcu3RudBNg67156GAuax5PE7EisSYs3Gf6fm45U1pNPVtDgn1gfc4f2FXTgjssweQd1TYtv5UmynHTk419HTg",
  "key7": "26dYhtwYdFZVmrVNTuqJsbapjJekYedy8DLXQFeaL9oZbB2jH6H1TQ5x4c3RMHg5MEAccdGLoonktWTxoT8iyGDJ",
  "key8": "47ZXeht4JheKKHB68jjydoKwMzToeHTyLriHQL8zYoZ9zWyxY1cCJcq96R2xnbZirKqgWm2xggHuh3wbq32PTmNc",
  "key9": "2uKzuwrRdeW2rWLQLpthorYAZGodySfNTg47CZi7yYwvdJ8zHMKn736hhgfXG9TShrke4hSRSSmdAAWSWRP6eUu8",
  "key10": "5ukuWLzhoemFZBGuhMyYNo6ERk7jcZWXm99Fjnr2mZ6L6vNC9UHcyw5msRCTDnAoyXou9yCSb3HXCSoVhLFytTGB",
  "key11": "2okUdAoYzgTMmvHNmGCkxKnAWbVLq3JaHwkZ8YmR4CWsFDZuKW3926AxRGid9NMgFUTDGJfj22vw9riwo8quCuyz",
  "key12": "3NSTXH4XaeGtf6qTqR9ivYBRMTaJZ8TLj91yWac4YLYftyp7m57HzWF1afB83CLxaFNTV1WjtAFc9hH7gfuT7ir9",
  "key13": "6vkk9LYf5UuZBtEsR8qgzzaVGozUUj6RKVf5CqbpGq5SSYCnvp7imenuanq8N7km5PSyupyrWswQN9UCuZvtaxu",
  "key14": "2k654ZbMyjkuVeXETxgziPuQWQKVBZM7oF5ErtqySzVKhGQn674cb1fvqs32U9LdRK3cwciwYRodstRovn31AYz8",
  "key15": "3Uynm8GfKZzQjRuysRrY16EE9XDxVrqFB8v8q9FN3VKVg33D3mur3fCDA3cXYvvjjpvchRsf2imtc4vXyWw94gGm",
  "key16": "4Q3qbKmpvfVzsBcgnNMaCe1pBvo16dVxrxtNsxoi6EbRzoe1yUT7XvBpUgN92sKjbZiZLyedMupDmzUk3WVGtYWQ",
  "key17": "KmDVBZ1TH2DtJEv311GPDKc2FBQ1VPzs9baP4WmJ7WtGtzxdNhkz2TroEvsvFoMax5PaGC1tcokiqZzsiWsbdyP",
  "key18": "3LLd8z2ohPV9EEaQaK3JUK3trSEghHDBhDYU3n9cLwm9gU2AqWkQn6nE4j9CJhD1szCrRvmeGiyGwsG8iqJKkLWh",
  "key19": "2A5fHM1eVzFtD6LYZAZPzsGZ7UtuF1sLcwBbZCq9ph5LhMSzG8FPSVZdStAXkaoRSGxeAxwdBeb7qA2ZKbAfteJG",
  "key20": "4UrDviHX6c3LoqUR3NG7NDSADzSsubE2mUCKrjGHQawJzSMz8aWTiaLBBxmJyNrprwaTGFSew8zhygSdto6Kn2Es",
  "key21": "4EEeJxLm2rLdKhAwLbGozx6yjxKHjkmdfiyaHZ9k2L7bFhj2a68uHPc1cWjfZBfhL6oqkjvZw1Kg3urn8uiHdzyw",
  "key22": "XSoE6me66DUBEy3isuVNUKcVakMF4HLjrb96uRE67aHN6R7rqiWRFJSjSd456vpk35GnJRUeA4reKudaHNj23Es",
  "key23": "51Mjc2vW4Dms8AoxJQKEcQcEm7kgzkv2ZHcEmXWzRSc48mU5rir2VD7gtRYnFy2HYjq48ei4r8sjVYpY7bD8cR2j",
  "key24": "2WVDwNidr8Z7jf1VM5DcZsB8yr6s2V3Wh52FiDy4Js2rYcmPR1DcEZCHgPhY8eE2J4VSpUsYSmQqqF3mBuYqeCBY",
  "key25": "2aQjQEALfMWwXjK78MJq8JLw2Hv62zsTpqMHcGZMNhBXqG3vXKHuqowe8vAkNjhpjAqA2zNtxELezAtAsf7i76vR",
  "key26": "2n9bzHr3cX5BzPempNr5vKRz8kzREsc4nzMRpyHFuGP1P6vDAp5CJ34EGhQzRoEdvAyxWTURHnFsoRkAkKcSdfkM"
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
