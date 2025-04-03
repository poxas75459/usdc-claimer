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
    "3s53jNy48JhbiUsj9ZjAAeMbeCJWtQeCxxRTzUwsB3Db8qBUwbDqdrbize6kGNnqihQ4mwJGGomx1LHND5jWU2Ld"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Qz25UA2odvMmZKKCQu1JXVXUEsSuJRc1FKmPj254UXJFmUnyGUrXN89AgXqmaRcEzYXQXD8yF3XTBj3Sg2vStD",
  "key1": "2AYFds5wBpDHVGJATLfTUa6GWFGomywXUYoAtfjshnRNdorSppTbjw4JkcxGyMf4ZeekUhCbvRgcJqMoE4JmxzEW",
  "key2": "4ucsShreB1HSzHkYeyNR6DXRv7zVWL9na5LGDWTnFsMLR2FeTQUqBGC4JgCdCUepZu7T8hc595pbbeDm164kuqBC",
  "key3": "67pYLpGaqbZzeyZ5ECCxGiX7B9zz1H7DiJun7WohsXiqXnmJq95vqEuynvssFYKsmxicc4xiJGTcykHstxkhTF9y",
  "key4": "4gdLpTUvFMmiGi4CR765dUrASXF8WU51n9we3pMybLfsQDJwqMSt86eidENfrAhA3v1BeL7JZAMqzwEjrWcD5oxa",
  "key5": "4m52XivVRQXFB47fFE4PwoKqfueujcTBhXa63HJ6VoyoMx8Th6qNjPW8fCAPQSNy8dSHoAeSke7qi4PziTUHLgDu",
  "key6": "3z4NDRR3wHVjYzJn7QHbvcqRvqhSq3akReA8RqLUmxrm69QPjEoidhfNShopuUK8Dd3vWojTay5DBa9jJUzRp5rM",
  "key7": "2LYQavV8Xk4nhTuerA3T7NDPgqkFLE6TeNjwr39PyUzLScZWKCtCccVpUC8CimMSnFnQawdh37cbbxajkiRoQAdZ",
  "key8": "5x6RPvAK9t5XmfbhN5hG5DDkFGo9aTjPrMQWu9fYN1XeMzPmWJvMsEThVdDcEpPGEjUeAtY4NJJ1jb945waVb6Ha",
  "key9": "5pDwaXVNqqiDzDiFPZUyYHt7h6De7fAmCBXsEVVu9FL19C2WexzZWvNgyY9xDmBHATQzBJ3exHMT31AteiowFyBy",
  "key10": "2oBsBzCfMLTCoR9XzPU4HbNu5zooyXzrhopbJDyYmGTk13xdyLP7CauYoVfVAn2HVXkGVHuzAfsMANMKPcsMvgh8",
  "key11": "NaXfNAq2dbfos3oZcCh2shoyg2s15MyQehxamjNW7oXtfcto5rUsQP4LWYTiot53JEYjfoQDTJzc7p8tGYxL7MX",
  "key12": "58nYHHo47PSzSJmTVeWdZ1iyQCSM16Fb1LfyYjT2JrAdMs6GbfhptVNkS8JrZaFoykQLALHWeTHew3tNo6yLhKfu",
  "key13": "5t5YpG8JCa6zrzjemRW7qzYnRr3ie4cS152B14w9dBAQTwDXKB2QiAMwKDv816zb71TNUQScPk1EwY3t5EeAb71R",
  "key14": "3toSkozAc1vmLT25JLKspdjEi6kbiS3uFL3AYPKzQ1KJdkdqVwPk8RYzeb8KE83UhquHLfgYURpTjQGhYGXBZEKc",
  "key15": "5mu9UeNnAoju2f2ihkthzZPg4RZqFN6FyR3g5UzRhzWSnEWCL7EWCfGPj472ySJNtDYgEbKsuESPCSANZhq2dxaJ",
  "key16": "5jxZUjn6MzRqHNV5QTFHL3iANUs7rssrLsSzLpfH9YFdkczHPL1v9yQCnRtfaGdEnfQzvWUa9PYYryWf9YDxGUSb",
  "key17": "3kmCjq4i9xrGaFBgyQswRuAgYeyiZb6Z2mvTQHkeKU8Rbho3KDxgjMwtkiSaoY9KLGSFCEBMejH6qApkpB9mduUx",
  "key18": "5qneTezjwijnQ9mAVkmFhvaXD6DAeB8eqkAwyGLfK9frunaj3SRrft8HPNMivnR9GqGTq1k4KnW6ZnMrzWD7Y8mG",
  "key19": "5XBgZczdeyBwWmErEWNPEnSfhpvM7UtaFCG6duw1ARYVBnzvDgmduk9xRM9H9YR2kR2bLhs1HVWS5y4dXWGEuCFP",
  "key20": "4v2yfyQbgBqbVPV8agXZTQTk235dLcTa6LFA4XxfL3TtTDVrqexk45vtnuHyQAEbZqHtx5EFpPTPMG8zgLfopdwf",
  "key21": "3mdergFT1KrrGpX3WBfwJrZCCdEYt5coQYe7vTYQZDgJw9KGs7uN989fEES3JChzAGcpoVHgPUHYRnc5T9kvBkvX",
  "key22": "a6F3pktQZ4w5usygXcQ42MjcryGWsg9PwYi2vfQ17Sb3kuuJf8h6ea917iH7Qwo3WGQaZRotqUFCEFaL3486kkq",
  "key23": "35mJ2qDtt38DMC9bznqu9wuXQZyi8KdYqrJshRLzKHgGKVx1Av6LYWoR7XjhqfKE1hDPqr6DEfZEXuTekyVACu4J",
  "key24": "4QUAbrj9qZVrhFg3VT1tv3vGwVEbfAH8zbWbCV9MgXRcB3JdNYNRq9DWnSH9oYGd3Yso1FKmxj3aCv6iKnwwQkGS",
  "key25": "iPZcGkAAvgLDDsoGX7oMN7LBQnYpPpwStLGdaRZFCgykM8EruGQE1eHnUJopsiw8avP6tcaLhJK2hbsanBPs7CB",
  "key26": "4TdZKe58dn3o6dUcawshCrCTmfyW29SZcV21QEzHq7sHSa3WSSJSatWCAJj4HG7vzzboar7yZYhVuBdjFGLAePWc",
  "key27": "4jYw17HUarFFRKM1PFFEayz8Nbp7SMjSgJSWKLou8kXcb91HH3krDwhHCYSLxhvFKtXHWyAJa8xbnq7efB2fF371",
  "key28": "62QJhgNuQUCCWaTA1P6admnWsM9WsJeVuqz1GXPqt7AVU8JaFL1EBqyJdRPe87XDdPBnjEQD2jNnewR9pbZyGQST",
  "key29": "3TqEQQMiUhfhRRNv36isTDyK9SxNSEDHmtQeiKtFkA2arVFLkKks8WdJXGGqe7vqGJ7r3h1oufUZoD7nPJg9VwpM",
  "key30": "Qg3sJDn7L7idUQmqGWNLtPwA2FpyVJD7Jvyy47ZjW7JbJW9eKUSNyKNTNTqnfDi8qvKmRpxDyjxYR62g6xfJE2B",
  "key31": "63f2cgZ92PQR7eJnQk5oAH6Ka6W2HxMJpGGEuJNda5KvP3ehNAApCK8waPGcu64akQ1kY7E22QGhxhEE1xEU3cL4",
  "key32": "5b5xWKfpC1ZVhsi3Zz55tdeGCMnjyrJExuZiCDnjUfDjTPQptjWuKruPys8Fo1TH3SYBiGczpGqpwpUTih3wu39F",
  "key33": "23LHc8HgmVBNmLCxsYCgxoE9iLVy7xe3NQ8wzwZj2iA44CEq5iR9B92u95koUk3VbrXDGwACLMjgiuVX4DcZNZLC",
  "key34": "41mbS3iiDjY3njSEm55FRtzFwCbgMTAgjHWVcYMGY2xYy19RRh8KFX4hWv4gYn1NY5p6GyaJ4pesKcs2eKY7fGBu",
  "key35": "65roS7bV5jHtPaYfHnNtRpM1KL6eiuBmvJdrLqW31i4ENFRhjfRa5x7cHN6hQ8Pjxb7TMAUMh2RuuQgJJuMAwiEN",
  "key36": "ucsUFfaJiocwVbe2mHd71K8UTDZ6KJR5CVvFQ45qNMVa5eVoRG85dW88EyzgVtSaVsDQv74hxKJ3nLjBqiCCZpC",
  "key37": "4mt2aYkmZbaqaUqn8vri2hExqQ5LceagerhoTur1dRLKTvBVdRWqNjRai3M36Cx9upmUzG3nTjAyJadqiH8K6VfK",
  "key38": "4svXXK6pCSnX5qtNnCqA7hRRLX8TFSv3sTekptXZhfgnbw6TALpLRDoNdRadArpwSRiomqbW7J3fU427aw42XH8P",
  "key39": "4Rw9U2oc1kxEkJV2NBhLMoh9PcwEKEAjLpN2Zs7pTaommx7ANQzUpTdLXd8YwDECbMTTcWqmggKGR2KJE7VchTXC",
  "key40": "3nQcrZ78uM7MnCabhE2NQJUcdn8pVHSwLpRKnmy9FqWEHKZHGpNF4KTsBoUE816K6J6NnLXZ39rDNgbJLuRRUWqy"
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
