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
    "4xQve2hoDhNB5uufKtBvjuGFTNQ9FYCM1Wfjh7gpgRKrnKeUZheZL9f75DmS63cJgNU8m2YM1k2Yk1s9VwPM6foU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wU4Ak8Lk9bY66NhC8S8UpHpmyJnabazLGxt8LT4T3TmnQFNv23g4kC7h5LoYY97iGAaQAXPVzw9bMMykj8tHK1a",
  "key1": "56p4HvS7QyKGX2nzDXta6EpaMNAEuirM14RffvaJu4jDLQmN9WqF2bv5GFSAJ7FRcmfCfQ7cgDF91JXNwGuFPkFk",
  "key2": "2DknZZBNTmnQyfBBhzEpKi6cZ5KMvEtRpuu6viunf5WbmZygqB1gKRtfpUjZFiqZF5NdDSqzMeDcVRv5CVYKhPht",
  "key3": "5W8H859EMYpCHfietd1RmRveZH8jdzCVMUNgx1VWm1eQZ7ce8J6zaA4UauByhH1W5SVMNcNqxw2C1XMkpoFh5RG4",
  "key4": "3KAxMMttcL1HMi8r6gGTCA3sRJDGtwU9Lca4wb5AKjiwUThCNuX8Zp51PTikp4nLW9UjfrMP2qVHNkstwJcrQXYy",
  "key5": "3ry5z4kWic6RcEjQ7sM6QoXGRAebFXMMAedescxoFh3zRgSwgpyDoZCQiLUTPxtuJBqR1THnAJek41NXVshzDXDH",
  "key6": "35MRSyozoJszej73kx5ERRu9U5FBXX5femBaE3XLdQPBPZXRPCdpTs1t3SNSYiEqFvQd6RezauRdzLpUUZB4UjxA",
  "key7": "4E7s6Hcc9zCMAMAcNni51epWxTieJa7Vf41vLqZv74hAoh1sQMnqjF6q6z5Z7HhveZ3jSDU5fwixLFqix3HPiRei",
  "key8": "4Usxb4MiPjeaA2KVzffMsgEs5yTqi2tYuH9vbbnSeDYEH6gr2mfVoZqMoCLe6KKqZNLYjCgBBQCu7dGk8fUP1jwN",
  "key9": "3WSGX1G7z5ya4gz7CougaqkZkvZAJdVJW9Hu34L7Lk7RL1JD3odiFkjkbfjMbd32WUjzRFN7qi5RGF2cf9ipi12c",
  "key10": "4z1EYJrQLMsCsu4pPnxBExybBspgEtUEFqijvoP82LsA7rVMQ5iqEHiuVxc8ck7fdnHfPKuKppGgYJcn13mdT31f",
  "key11": "3WG1DYaX9ciSotWsKQBduQUjQw1eaxvD4XeEtSvfgvg7cnVrvhunRf4gDXcPbLv7bzaEF6SJ5Mc5cjwZHWxZfRhX",
  "key12": "898Z8PuAecgyKnZ73rnwLrz3m9UvX7r675qLrFG9jaLxpPf3tu8BskRUf5oQhQtdTezXDEefKeGW2VmzxkbwV9p",
  "key13": "3gLnpKBv53r9sKwTdfEdxKrB2pMd3rheoVATgi59je5TziqsM2rAy7N5cdRxZaheauoheVcu6fqzqU52KcuGmWTZ",
  "key14": "5NwRDAFAi7wMTYCYxAeBVRMEqAadaU7n44u4XUFEUxDCwvJJF1J44xK3YDqEJDLtQDJL67pnZUgtDy1WRih6amnc",
  "key15": "A5GHGruViz8cCAyXrDGjNmKj35D5M53UUm8jvvbD6YsqnxjFVrbYj2EsNGsVUgrnond8KngzQ7584ivP2kwHcMF",
  "key16": "4CueGpgqFey3KpB6UfLVqbWs3XExfgAkwdLuQr5LnzMzubyRddYYBBAKc3oMFRR7B1ACEvSus95neHZ9dARHh6EK",
  "key17": "4foTJPz6P8FVfPDKYn1y2KftrycCU1m82Duzh5ZdBrqrHcT3Hf7u9FJjSnTEWy8nXmxuo5jbdKjp9CTAxoPGxMdQ",
  "key18": "fr1xmT1KGwqSFCU85SJUcHWjQxKa2z81984AcGFZBcjjYwXJVArLKA4B8fJdyb7tJjUpTCDZ6gXg4G3mLpDNUuf",
  "key19": "2bsiqL7BP8NVw9yWjB1QjLe9UkbFeP6p4otxDNbbhs3hqr6AMEXMxErwDsag4BR11PzFm9UQ8pReCm71WRECyuWs",
  "key20": "37e4Rz9BiyDFQWeWsAT9yeMJw32VwyprjA6Z8jPiSoSXgH1rJYFkhqC4qH78XPqtYw22KYLbgytaiHBP9UD9gzTH",
  "key21": "3Ku2usbfsuBdv2ZF1M4BPWkyguqxKaj8cU1hBx9Gv71CZ4w3TBXME2WPSNv1QVYMTuXCuLyVvg3RJCrZemP1YqQn",
  "key22": "4vXVtvVEP97kwfih88ghKBscoAWPAgX4T5GtWzS8Li5DBSQVZqKje4mkm297HeGpVs75k8a7JMNYTYqB2u2mzHFZ",
  "key23": "5hJwkoZ89ipdMP6nsphSM6mvQMj9iqeYG7ivxjB5LFT7iGA4XivpQnAS5PpknP1ZRtDEq3JQ1q8ukZyQBMw4MVMY",
  "key24": "4kyTFjqAcTkpb7pKroA7oKRZ7mZkyJZke8LnnmpC5UMjPeJ5dk9FzL4eFmggq54mvHWhn7G26UiCZodSe6HupNbE",
  "key25": "2E1jsH9pC9bsdLJuw1jKrDwn5ihcGbMcwhAMpBNwQpSWDzgtyeFb985HMtmJnN12GfnaCLfg4bQBn9BuJxXiEqNd",
  "key26": "41us8LDhftNecYRaLRSnS86d6LTzbzwUuKu5ifeE1PdSqEoVZhYRinSWVPg8otvehmbjbocpUcoZQ2axJQC4HN2f",
  "key27": "45oH3rLM81NTBV9bwbcEprmLxnHCbrZUJ4tU3tns9LX8K3wYaJVGfvgu5XafboAffC9hPizQDBxm9ra8N31pBarC",
  "key28": "3ZfoARBpkXv7tg5JCcGxoiNSFVRMb7oR65M5mFxYRgiyyaDTmcMiPwSwPyidbLf9LoFfmomtXd3yWUaysiDvrmaS",
  "key29": "2zoTdDe4PDwvGWz71eAKq4xjYH3rvhzi2VcGwK99JmfDsDRymYiJPjurfJhEevm6uUX4Z4GNSJ6JJZviJxRHpNiM",
  "key30": "3XxsEsdt6eGjYrNKjrg3WZdsQ7WWg8nTwB2ybdBZRhp2zE7FmuLVmismGptXK2MhQox7Hp3Yg6z7BP4FQin51Bmx"
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
