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
    "26HYWsAiTGm4b33xTCx6bcYyiJ4dLEJTbt3Pyp29diNSdBz2BU9Gqbuc2tT9fy83AQpeJKv9ezFBsjsGFXhY1ys2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvWWQnZh7LhM7PsHvKHQ37BFYHJrgbKxvGGFEMg2wVUVfSuG3MmYMTA82D2dLHA4iqMkdTD8MaF5YHpJfSgTbzJ",
  "key1": "24kUetWrDjUtaKTNnXzUxujyofjBAVqtctFu9zMD3rYrN5rTZD6LYgmP1ZsNaR1TGwXkzHe668Y18pQXgghRjiZA",
  "key2": "5661kreDT5pH3t6bikDGm3nzJEjoht2kK3CWmg9WwLhpbNMDuqFia4vfFeVPc52gaqvW7ZPdMLHurVkEeJu9sK4t",
  "key3": "3trLUvzSGMZdQEiqGV8X4vhfsXcJtBqsw73BfpE3GDZ1EcrXX9Usyxytn4Fctb7u58StYyG4xHJJVNZ3t1ad1jFB",
  "key4": "5rqz656zBadvSjga3dHNVcyWWumr4fmkNLPsk4iaZnr4KN3Fqy5qRMJYs6jH6qoMFWnQYk1oaXyzCDSAUgcQzkYt",
  "key5": "ztm8EQxZZwu1U6jwDYCcnRHJbZgpPH8rQGahXNVzju3314m3kiWAq6vRihzea1cqodHvv44pdwHFRLLDuTK5oqS",
  "key6": "3zxgrbmRa3QaTBYLjwJZtNMWqiNEjg1L842SohnheFCMvrK38Hu5jozMjSwFEkQZgZp3s4yLLCgHQZVoT9jgYN5j",
  "key7": "3fDEFZwE6SKLXXmrVTEs7kqvbuXptaPCMUPNrcMk6RMjbATd7cAy37benkc7DRReLrr5DKWN46yJyDyFpyixdeLG",
  "key8": "3w8af6aacexLuJbvLAsJ1hzAbjSQJpNSLNdF1N4PdFRLQSGdyigfNT2LAvhY1RGXjeqBch9ZTJJmJDFcSrkGyWT1",
  "key9": "ooGednLmohvVD5bCvaaodLniYN4Tp34hJkGLo6K1grN75gTvj53ufE3z8jL7hVoPg353NbzLfyVcBPwmJ3obaVP",
  "key10": "2Z3BrDZn2QTgdQbZijjq2wgPLS3eib5ndi8HYyuh9bu8xZjQPTKbSKc5uWArr3W5VY4v8Uoruj3VvHppBtECTHZY",
  "key11": "wQiLNRKe3gxhzSrVDHphq9Hw4v8rp4eHBScEVqE6v9aTRbc233nr6kJ2TnZLVPpWGHDruC11m7wp1Q2BW3sE5qn",
  "key12": "3z15mnsEiBixaQj56DBisCcD1vHQ8hNa2U3nZA8eGJubpg21gEN5XKxgNvGX4ACHEENkFe37YrkJRBUZAwk92QFK",
  "key13": "2oyqoMn4RfNk71mHHrvsk7YkrtYYyJWr6ntNYZ9Vx5drnfZoLYCvcSP3kHhXttqqh9orgAHv1Kz2LwGfNws8VBN7",
  "key14": "3KYa4WQF6PG3nLvR4JhGLejQa3RJZwoABDVF7Lf7kU26VZiWje72YwsozabUUgGTBxzcpzRkJeFERTTvR9vxwb52",
  "key15": "7QbkFJRJA4asgQBBncXotDYATmRyCqNpfH1oQj9PZJYyJ8MRadh67TxJXkYPMCizcNDWVE9o7PXfZhBkn41k5m5",
  "key16": "5aBVJtuoQgD5KFzZvg4zXH13E2WjJinqMpG2KUv9jTALVdVHW45od2xec4dpj3Yc977DC48FDeBEeoLs5F9bQv5P",
  "key17": "5QS2Y9SsUpaagKFMrPVsqJvEJeSoDaxEgBN9h2S3LE9upAUp54UMwiygZZra8CqVWroaQ44BwcaqeN8C6bwre3EA",
  "key18": "2rL5j99bJhh5k3UpmN5nar8Q4ztBsSMrREqigJGqD6rUTtdA45d4qC1sixKEREZ8eDqcQ5RAu7caDeCF8Ar4P5vK",
  "key19": "4vqoa7LWZn6tD4f1Pz8DzHaoQ1VCLL7VmL6qJGic2XepEv6QWejd2iSh8FTfQsVmCnmFVYWn3Wmo9FoWNAMU47ua",
  "key20": "3fHdtCR2k772q2C8287FmtvPuyU2fGXnVVWF9NyC7gQdCipy4YCFzQicUgFu2ETavy797xU22WDv3RazE8Q3HBqT",
  "key21": "4qxmQ9xfkN1ahdF39zUSuhz4todJHdzULVrHKX8zCJWfpPwZFjPiQCVdRzGs45qUDnPJcoTheoDeVP4Z198oQFcp",
  "key22": "DT2zm9KnbQyBAybuxfRQhpEF7e2euRAuywLuNG6J3t9hNxHy6oDoGGYQpxUrHTS36dNeYouSNi6btzSxXrBmDeo",
  "key23": "4KriEDXAKD8Gc2aoVftXHUbgSV4cKi2uPwiYXbhEo5J4oB5Cq2fNoDnntd1Qd7Wzm3BBTzhVHqkSMZhwmHiVArBu",
  "key24": "4ii2zshHHz8pFZe3d11wmLVQ2eRYb1CMkLDU1BcUZXRSFdTLQ8QJvRKjjCM2BtAbAywTi7n14fHSz6CYbGixzFhF",
  "key25": "5rt26wQ4u6xWmHXWfdEwjWvmMBdt2AQW1fo4CEch4Fs1J1FoTyCqCJoQ6WgnihHtrePY1zBmEYFqPvx5SRnWWRPM",
  "key26": "SuJrk6wddkhJnvt4RhRC9gw1nwew4yRhfS94RVKuZrkUqP2KHGAeAD4Xc7oeuGtAG2YDvhdquvz7kTsS19JPDZ3",
  "key27": "5zUFRuLUVx8VacZV7Tr5ahwr55Epnz8PBZXMeLQnVmQjZPTKeAsAWbdxutPQnsnULhdpWfaDJSSScp2dGJhZLv7h",
  "key28": "2yeFk6zKw88LRtyCsNkaeZoDjnBeVrfjAfyUXF2jQ7NenXaUPfdX9y1zt4ki6U3JUcmtmMNGqmzHnNbS1c66wvi6",
  "key29": "5hKdiPU221o7etXtVH2nRNSy1ofskibsW3PYr5jso2tXhijhYqCuG4E4uLAY9PFmgn4G9v8TvZPu6zKvezX4tLBb",
  "key30": "5c6Pa79hdMB8hSk2izkCohTZLMEJF1QPQwbFbuEwPm87AeLB1fxj6ywVF6NpqraqTji2ZQXupYh6u8J8DkWkJfvD",
  "key31": "53FkiaBF321SRgwdU2cbAtPzDG5QD4d4WVY3rSDTyaquSpLBJQFq1QGigkqZrZXjJkZJPLXGKfP9vA3WT8Pp7hpv",
  "key32": "4u9mtXQHd4eZKgF3sXhi7rGgg1UAV5y68N8eVTYDm7gwh5XomRFpEpM3ns5rvA1E9rk1r2hyXvRmRirM6v5zHHN1",
  "key33": "2QefxMv1QH7pd8YFynAfqx7GCAbDAS1Pa9dX3iNpRpkJrkaFpzWB1M8CWXvfZd6Qxd9q8WRi1R9DJFGQKfsTiKgF",
  "key34": "391wkgoG7dYGFgqQX4yPxWs97QAXeYqRygNitmcRreCr9ZLhautg4xCAEnntgVTJ254Lv6xeo2bsWJDuXG8zwtmh",
  "key35": "3ZjNsKRHk73vxd8fHj92G6PQ66mNsgCi75AkZa6ZAjgvACM8NLErRcJbDb26nsYjhHsu1QZsptfLLePG9kUa4Dfs",
  "key36": "34M2CbYvLNjeYrFCR2vwWKdY7Q7Pfgx9HzYHpEo5SgvK3L8MAEjF7Qo6fe4aytnxbwXVprBFqcz7tA2AYGUgsGDM",
  "key37": "31yoXLA2Tn4KhdXrvXgKMrZxwRM2LU4J3ZA2z8obJZSrDa6uvCwbW9hBkKee9PULWLzcdUkA7yimcQpXd7QvxvrP",
  "key38": "2pA1WoSHXh6F5MA7UvUyHAmqqqC4kv5PAHgZsiqb8Hm9CirivMMBYWtyqnsxRhMfT7YN65w5wjUa42wgp4XehvBp"
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
