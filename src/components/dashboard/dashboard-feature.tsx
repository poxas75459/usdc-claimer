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
    "39ywvBuojsmhgD6X7Pg9v1jtmZ3GCDV1qKhybfHZk2BC648caL8js5A4FQvdUryyKjpcWPePKdqpVoyNnAbQLFpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHA3Not3SbJXauVjcuKEP7bzsVh8cu2CVa5SKjcRBKUPjqZQdfhKTwJZn2yoy6aS33Fs8e4QdxVSq55LnGyajmr",
  "key1": "2kQhe7T8a3xhkXdegDEEXFqczmZggfLeFKrKyhnuqKs9YXHWUvsLFBMbRc3LxuukRtJZZ1i5zBRcCBfVGBov76Ft",
  "key2": "4eYcgq2Ma56TEPZKGzP8AWCjeab41EumXYaUFtYmnB3xvheetmv8mHo9wR754q2LvcTEb6D8E9c2ZiPUBAyWUFnD",
  "key3": "5dbvJi3cDaSctpM5x4TPeoSSm47bMJsBvpytKUgGf9zW3KHj4WUSwo7HM26NeimWSPHiyQNX1SX3P6NjUPnexvz",
  "key4": "2qp779cNBbQCPNsxdn4GCDKzNqj96FJpSiCuRNdb5UqZ6JzWu9ofLYas5sgfdpzU1CY8zAfCuJ2UKNb2YbpSMh2J",
  "key5": "5zqXbKyyME8ZmzCegHUevDosdm8c7Rr8pz4Cgs8nzhWqkNQUc6vyw1zb5wPruRiCVy7KeuvevWQAzGLXuWHqiZ7j",
  "key6": "33w3mbJ2VRUmxzZZ2X218YidaHxQa5QUBYxcBDswX9ohme4Xe4j2bKoW51i6Q2nTfpXL7krDQVuRJZzkXiNTgJP4",
  "key7": "46XFhrj1GQv6Af6GyKZQcztqzKC44ckm6EviVNV22aBMWLVVWW4Lv3FHxPaoTUucgWxBxkTPERFmJHbgnRBVZaR1",
  "key8": "3FvXvYpcNikPeQ4mzonPp5mCZdFyiRSfxyyGZQBzSkhpxAYQNmks3xtdgafEhxD1N591YDJZ9rNQEsRUfhqNmKYx",
  "key9": "DcRQGSZPY1ewjSdxU4JbrQgPjcyKWhypSsyMHMRdxikEmHzU1vbz3jW1ZQ1BvoriR3rvGqvu3z8K8VeLfd6v8ph",
  "key10": "wohTfArjzJDDgKZTe3wxcPmxSZv9yaHhdwgrbqvqZ8tQ54dBUU1dnwQy3USyFeuL7r3UgLCdwtyx4D73yoMTrFm",
  "key11": "5hJUeNjfrAPpgD2VRgFNdBU422DhxJosCwqCBwrmd7rTG7BhBxMPZWMR6ByM86P7SNFrJQLvDTsainm4T18AaGHC",
  "key12": "ELgYdRehd8HkoDksXN1CPkroCc62brYdfUwHknnw1EbKjVR1fKoc1aRVmoRnq6SnjovoJHhFoqsjMdWrY66cfUk",
  "key13": "34y4rg8DvvEKGBFwSjNbtS5Hw7sHWLLQpjuNRS5wZcQp45fDYbwUEraUbKSUcB4d62dG4Ww3Raxnv7xgeLiAqrKg",
  "key14": "3f65k7Tg4baErYZQBgAmfrCCYzQnW2ScNGsNBTAWadHbNxrDF7vhM3LTjFzyLWHhzBvASQeBcDcmKqWDRxqfUKfg",
  "key15": "5ZCJrcR6Amv1wmdGVoxU9hNuxbY6mX6zaH5HKwTdsABT5uiButbd1BYTtq6Zqw97PjkwACxYc3hwvLf1FqrWoGKD",
  "key16": "5v9CqkcT7A6L1Gj16qv5ZVTrfzy96eZc6qsLbXunGhRfsM9QHF1X8c1wfQ22UF3HqU1stSxn6J3hLP7QErFpSumo",
  "key17": "4XKPnRwnfKbMQRRDQwH5fpgL3i4BVekD8jvPpXpfTfUQBxX7bg75hahF7S7hELfuEZaEekNU66hQTnYok61ufMUj",
  "key18": "3fUZdQEFUn4meshxq8xdUnGMhHpJZqSd4pKkgkpJ67GHrTbkj9rZzSdJQWX74ckdsQ62HXsuo8U4R6jLoDBUXKRD",
  "key19": "3XDeoRuXbwZGZgC5AScNYdjdgHs7AX6dTtwMHnNQ9YbzKFyQPBGCvRzrbHmfmPf3127xwUWm6kuAG6Uheu4Eummm",
  "key20": "3tJepQA5NEsTPy2SFKPVs87rbDqfRUjpdhXjPXQuQTi5WnRhRdQRL3RJoLtPADf2wUonASSEz9VGvsnYixpRS2tD",
  "key21": "2tXbgHEg7zmeh9RZAL3z5YXuZsxaaGrfCo7KgsYb1a8DjnAQF7zTNVZtEF2mdX8FMLDAvHMcbQTeMm8cP9jzkBGf",
  "key22": "3Av1rkvkef1juqjzQESxgkwzeNxF7M5SEi6onSY32yPybxv5qY5nRXBpH2H3ZzHxhwn4B4kU6A1ZM8xzQMDnYWZD",
  "key23": "2qMzXbpmJgPhjJxJ8LfN2peK6Z4PDJ1doDmxtUkPWuv2Chm8Vf6fVwTmEoVCTCApcEcL42BwjhRaRv37vRpMqjZw",
  "key24": "5nDkJq4ETakcvTdzURRtnuknpumM2V11YSdMiPKH71RXVCmj2UuGekEXWq3Ef4VqDzwQ6fg5vV4hwYD6YBg3BeUc",
  "key25": "5kwSc3XtNDLLQdSvA92uX6dZqN2JzSqpvv5ck7oJCzzfD46mKEnfURV6yahfK9P8w59ZDpxJ8YJB47NMys6SoDc8",
  "key26": "3BwXmASYoQowsd3A6TydpXCgM8yByCqVnrr2TABNfqPpC9PHoLMDSBVubsh5srQgYRV6WrQ7NiwKTeDnHTH6b4LL",
  "key27": "26KtdVGHU7bFKFfuXBsbSbiMZtSEJL78WWrZ1No5XwtzX5R7gX2LYPo9Uv6ZTGHZ9MEok77QGAxrcnAFMZMh7oZE",
  "key28": "5ASgSQ2sbxEqX4dMhdjHZxBQQLbZmW4rk7sNGhZLCFQfBTKFr9WxtJ3YhWizwm4APhpUif95R2HVhcuqJdx6NEWJ",
  "key29": "3GMepCFoLsFpczAdprw71icsEPvidZLZY1MCb8rRWG9NHYsLudBC7QEt7LmVMiK2NLaAVBCc9rjALd2xdyuN1X2W"
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
