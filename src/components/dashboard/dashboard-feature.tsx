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
    "56GRGLaVTWHFhUmofHGJPrm5g1FZiswtZz1ZQdqgqq6bSgArQFyu8Q9giXuHDUvm48pGfwJ4GqD7SzRRDJqsFYfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEaBJK55JuMSLwvBTYixN8knNaaTjNrfdQv55GmvArtksz8DdJpkjsiYBWufXByQiS9CpVPPPqcgGHnG2A7Z9dJ",
  "key1": "Vcp44dxeoq1pgZsbJLYA1sTfZ9wewLjC3aFpHKWyygfEVQgwHm8B6c5G6uciwT7jTDmhvdKuGkW5SpLeTqaJUNq",
  "key2": "66ynFFMg6CVqoLZMN7tWEtYKLRkmZwQ69rZ3q3ezKYzWBTR3c3JMWdGjpfKDJDPt527e6f3JrfdECoDnpZ555CZw",
  "key3": "4duxvSk7CEngR7pzidaVVcSw4bCipcYf7H9f6LyzLdFWWhVdNfZXrDEJRaQeUhUZirL7K25L3iG4inzWmYGhF3uB",
  "key4": "42kKuPiv9CAGirwKLaBfXA5KMytGt13V2p3pouG1wdgscDuWSdiwqeUUXhkMsS4pp3LuPRXcgr4ciPv6i1StnHNU",
  "key5": "3w957rchq4KbQu4sEF23Va1kma3tjHz1UeAk7ata75coNBmtVmMbLbrJe1ogX7uMwiRKH3fj1d9ZQSq2aJwK1zSL",
  "key6": "5WCB2Z51BRdNdnLvcZevXsL3VLoDeJZLWVzUMuhiVweG2CaWuVjaLDUgMksTC2CSJn6w7C4PTQMrnUCAe7pbQPcG",
  "key7": "4MSnJEcTqmboyBr3oi3uJAduw8SGoZQLu8mPeyLBBZjEXuLrcnteLMBbE9392na7fJ5mYwYkNfsQQeL1HbCk97TK",
  "key8": "3YG4FxT8QBMCHzkgMrrmrcVpwhZvwiBovHFwFoCg74iPmLS2YGQ95B9EfhTyT9KonvUFk68QGe2zNiwTc3PJMWyu",
  "key9": "5MwaGGLVZd7Sr3gKeP1focgtUh7FXJ2WaVwusVqm7nQdmTJhwXydFo8vavS9jZbf1iuKd1jrPXugD3zYRu8HVdFP",
  "key10": "4ivmKXJMUS8JUG23uD9CaS2QsR4ZbXgLMQ6zgxgk88iNQv7JkHotGSyCgfSPFpXgJ2giUETLBNHZHm5JNsbDGF7h",
  "key11": "3YAR3nVQfB3hcHpk3NRqLaTUi8sgTVPfzqyfXXkbZxV5MZhGRw7qA2gv9zEArhXhGXu5tfEYgkrdTWpD9AxVa9r1",
  "key12": "Xg7tciNa5Us65bZyZRbW3B6RR22T73hMosdCQ6vJz1NaGUofyktz3EHbT46kzhRVvhH9tw6JwGbJnP9riMkVAKm",
  "key13": "3MTRSvZTkk71oGGon2PPqoA7KoYRZLJjsp52WEtQ9z9ibthes8uAkW27Zc4bcv8Kvkx6wziZhhT4bPZnayZoxQcQ",
  "key14": "38Xisug4bNbnfjV42f9A2SwSDNWQK7nDS8ZqjgrfMR7teTk13RKNBFPcDuQd2vZjxWRLY5j89yF6V8ZsveHbc7rj",
  "key15": "4wXKUL6yhShViWHYbNf7phtG3pvGFxmFM5ffZRCEyogYgtPrZUg9sWf1P9X47qE4ZbWBSFC6aEmPFEvSaosWfPbi",
  "key16": "34PjR3hg6X8BmCgEniEk7vAUTv4sqKcEVriCzKd9z1gTvhQvYSVRRsbAA1AKUbUEGikCNCXKFzSwkT2RXrZLtHYW",
  "key17": "eWsWZmwgzwwszVzrfof4sKRKa718vJ6P8nBNa7SNyy2PSwuXexk1DcXArx95hr8np8brQLi3oeLTAv9uC7FWkbV",
  "key18": "27Fehhote2av4XzDdFQgmf5V8qq9Q7rVxF4yGxHHZvPfWmuGXtYtkBSPADk3FuWQaBw8xrQ886teHmtP1AhWcery",
  "key19": "4DZyopMe7k5MToEizwusXcrYQPAGEYJX6h78vR7m2gA5idrjCq4iXjturGi22rzh2XKEmRzMacCV7UJtM2MxLgEt",
  "key20": "5uwMtSry8ZG6bRpopkccSWDaYZbjNYf5fp8cw8G8hWywE1zEoZiby1EcuWuJVksSFaoz3TJCEegrqvQarjNSzqtu",
  "key21": "5QdgJneqPSb4DzHzH1csE1Pqx2kPzKeCwqBfLpxJWykcrEPsgFo4KZZAkU2o3Ufhtxumjm5N2wNVjK8vyDsV1YoJ",
  "key22": "4c4okUy7vn7h2KCWfefk7aJ8TGNQvrXu2gghD3jD1VJRREmcVqRQkrXvetCwFynB3XLfCRN39inaVw7f4q8bQjvQ",
  "key23": "2wLSq5dzBqm38e2s4P3rRC26ji7mrJ35D8GrpE5ugytJq3sjgWVWj7ggXGG5p6cfq85tP3WbYtRbY2oxEe8vm54h",
  "key24": "Cq267BCLuibyDWno336tD55HjMtcA4AzqiUXecEE6yeEPkS777LZA3CwTeHqwAjWzHcF5CvnGSXWqZCKkXEYp8D",
  "key25": "pU2FDkvJWXV2sktzBux1QtcP4kko4jeDfrYN5WzKWTGKLHhMVPZeDhcX35YK28PFoAUPSkfCwJsrccjpVCNaX8h",
  "key26": "4wYZkzSwcGTboortWoJwoeprtf9kC3BjWooK32pHGcMherVQQ1xHbhKSXPAnMfbyKRPSLcLChkw3zKWb3NJQBsS4",
  "key27": "66NZ7arKXQUGLBorXyaMA5P9nN4y1zog4nRtAtgpz3zGvpS5i4bLCksZhPjTUnVk3FVvcgsUvxjHEuhjnRWqaTCU",
  "key28": "dpHp5LKghMn6GzBExfJQWjdh8diZbwTe1SZ5D6qgPjrN6XJQsDtUR47R9ifFXsDD44YLB512CSBixBFg1pip8sW",
  "key29": "4UhXJfCNAFGJH8RbitL3EZ6pQvRqmtm8RmFw8ieHeypnEH3JomqW5oDEqfN9JQ9A55QgyGkVoVJoAnu9gs96B4Qg",
  "key30": "366L9XRQiqJQyko7Zg3CMDhB4rv8D6mHC9mgPEqKTXgoKUfsroZgzkFa5urWtHN4cTKkrkDNe8wsfxvQ2gx6zcsM",
  "key31": "5W4g1YVt6gk1jkYVHBzcc1wrFPznUUizfZMKxszWJxHb3XsNmrD8FZke4xf4Eqzgt5CrvSahz4xCkc9ch77SpdLp",
  "key32": "5DsRkRGbpwYVUnUv4gM1GvDvHDSPj6jPSrQJNzMcaabx37zVwqhtGCnPN98AVHTaJzaGmx1KKkqQBS5ezeHEfPuv",
  "key33": "3N52esSk3ASsnvqg7tNPnYCpUXgbEF3LKmBvq79BxyXTcLqNrNVGr4yt2hD1rnZs2aySD5C7mR2tUJLXDWSZhnr4",
  "key34": "4Wgj8beNmZXXXnPrMuEmHvFPX9CuzvYAcDCsjZWmiqGD69cRWjHWn4AKcqKxmoWorQbBsxchaVxikuxwXxzidRam",
  "key35": "56hZX2nU7yxD4NtgBuccXp9oayy9851sR1McbvoNDk6gzZraAD4beachZkVu3W35mmB9ctujhjpJE8kvoU3HMU3A",
  "key36": "44FfyFGAzqjLpCjwcBYhbbjcjGX2q1tByZ5LesdTxGXSmcCYxhwZVomJRh5fzMnhH9213syUNJqJppirZN3qyQiW",
  "key37": "2gf4VLu36oWnRpgDNsWHaDg3Jzvv2QnEYY4PP4Awx9Nvd297TDF7nSfW7ebJBxgY6chfqXoNJfbGQ1KgJsokwaXU",
  "key38": "5Qs3oG8JToVBL3QsZL6dcw6hp5BAGQaSAPLs78jFVFgJCuTpPe9PNAYPv8kuRyD7TgdjNWZMJxXRYM3bh73CjTWA",
  "key39": "3FKZMs5ZWSKUBTz4p3B6PjMjUTxspXgrsmYiGkU2ijsi1GcXv7zgiyMoBtRLDZRdhvBwYmSqnodpsjUcJCa42yUK",
  "key40": "4Thd2KqFWX7BVsVr2a8emTpDeHuHbuu3LUK4zL66pSdAtetqjquCe3J64g1JkkWnENKkbakqpqet4C5UdAAwWnee"
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
