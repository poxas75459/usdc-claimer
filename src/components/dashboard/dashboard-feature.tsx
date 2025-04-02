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
    "3hjHLupMe2V3DrigVTov68QopNfCmQmTDyUm8unfd4ab8fWx491jmgsYKgM6RoddfCqaANFZ43Qhb635WiVZ96Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSKGEtFto4QrHqgvJ3LgfH9kHNKYZFgfuFJ79JeANykbm8pLUabDQVEG7QrbLmvz17fbTNUphAgfW6weXLydEuN",
  "key1": "3gysCchd2vSJXwVtdtRSiFhHs7X7EyJ8S5nesr9Eu3jV7THvnFqySeg4mCVDYRR619qwozTNaPCqK2iPxByh252B",
  "key2": "7YdfPoRsJkXrBNEcw2HUsDsAeJCJThoYZx86rW4thkwuEHA1LxFeV4LUb8LyeqwJFDc3wHdD3mgemH4Au6zU9Sc",
  "key3": "UGfgE7BuJGWazayZVmv6oLhv6PQyNidrSNXPwbskLn2EWpxkD5jMNmP9rPSHSWHXjFMyiEV6p6tvNWauQ63puxG",
  "key4": "3EBBkrRxnbEHmJ1MEVN7L9r29f2CnYdQ2WVm397KT3MgzELYmXfE9tnoxEGYuJtDdD4kQyTBuikfEBqmRxTvbXhr",
  "key5": "3TBHLBPaN3mx5qr7v87gDsu6izkZyemM7rheZFnKi4o9xSuFtNNTRJNXfzcmhUz5L9T8ZHSjdVYCdqVZg2s6Toxs",
  "key6": "42mPvGmJgtBpdnQrWjCxMjzj6Hx6hJTeXocEhxGkncUTjwWSUmDRjmr8LFrZdXDbKcfGVv9ERpJw7VW3N9mjDhGg",
  "key7": "5AENVNDQEn2LMTz643MzRSuV51UXgCXecxGdwrrUjQAXkLfUnncr6TGkRna9ZUBVVHTW1ZexKaneYP2DVxKwAuaU",
  "key8": "4EC4r6YJVoYkxiMHnf5d6FdKEo7i9ya2XPXezfXqcTYn372dQ8vVbLUCHhujNYxnHFteS6xZNQAqqoMh1tttgn6V",
  "key9": "3cKNHg7Lvu6PW2qUSPpng34ekQ6wFguwsSdAKNyE3S6L3MqSCcrAdmkt4z86Dqwm3ZUSACwTYNsk5s6MnZ1LDShf",
  "key10": "NqS9DDDCHkhCpGCz5FPjs8t9zqT3L7bZixcDNSyWe9tzkifZ8f9jCrysk8fawjXaZojShfAbbXDbtMJA4rG2uZv",
  "key11": "4wSA4QoWXrbiPAgxZc8GjX3RUtrc5t5ZoiE891KFJTC4C2q1MeSkigAmfHvZeXeswFXNUfAV9heAJyWKqZk3iMZR",
  "key12": "TVG2nq22ThebfzU7hqPVVdiKQfxjMSQnsHQdWpZHrW4ccroz9TFSDfK8Z74DALPYenYjQvPXXXPWxt7w5K3Hrx9",
  "key13": "38XCRsEmdSpvW5SAxyDSfr9BdUrHiLqg5dP8XV8FhSWGBHUxkrAJy8DTJqXiWSCYpxvsQVMPYij9cbAHJssSR8b",
  "key14": "2mQamUFdVfTshFAkJm8cexXqxV8CJj2ugUSApSFGsUp7Qn1uT2pDLxgRQ1emb4aeqc2u2N4KmiQWakiRPsjyGEp9",
  "key15": "yCwwM9tRRVDSEP2LkZQmzxhyTtUdH42QoP5gz8RcLUejzTSqzirWCeVGU2amVKhkackK5AFtY6ueXBQfdjpkbod",
  "key16": "2ybqipbEbq9bRdfQC2HzBXiqR5dKFyKA3c96TGWjT1WvhL8M4gTzfSH5sdAq4jsAtBLiYKJEZX8xN8kto55pmNNm",
  "key17": "23fEpbg48xy1HeqJsVcwnzw4qr6rZn6SKw2AJPngXYymStbJMqPMhCxAUAStMAi8QKLjwdRjvWcL4ULHm9LtSQKt",
  "key18": "52XWLCsZzZsEqtVFT3nUmTiwf29oi2ch3R1HG3scacptsCngBMNLAPYtgH8tjzxb2iKbDcDRpw7N8atpcfFHQDYw",
  "key19": "4aX5r8T45U7fDYZ6rwGxfd5ZPjhdUcqrqyjuPacj7D92zii9NEwWh5BSm3JozM8UshvQLnpxCSfVSuw21WG4x4eE",
  "key20": "4Bs8SFm2wyQe1GA5kcPBCi1JR42EYoZjm99HJk7ziE6MUgGW88gD8mSbZaJi4NWRcYQeqoXg36KDWazNq2CSuQS5",
  "key21": "3d3Ay72m8CC5tvb3RogUb1JCt7EvXbyepa5pZLbNdDNrMarJdjDqAbFW2Ruyj7LrpXcd5xmRFCiBHYGjviZnrmTD",
  "key22": "3sq8Tj1wA8Foesp5BNFiygD7Lc3i635Ave4XezHfERaCD7hCa9vQC56hJJgbm1MZd2U6Gpka4SnrdA1iHJPYTAvu",
  "key23": "Zuub2xZVykxc4pp6gm9JoNwXCKV1QuzoHfrFZVbEbRZw3LR7DimLjEogXTYVrhyhoamL7FjXDJaN6pSpg9DBd7H",
  "key24": "4Q1qzB9fgWCGp627qBLJQhwFjiifjDJXEaq9kWvJcyQokePLc2EWmzMP5D77Xb68iBLd6XNJEP3ED3UdEd9ZKjA",
  "key25": "2kmjmQSyoSu2umMF6SvYewU59xpJb7D4GJH2BcGiLjUg6RcuL98WCd389gWyTU4idYrSgzkyPcwT2MwcrhyWr4bq",
  "key26": "9133YkZeSutkokCCUJSeqb2fwaAVJ6DvZjgNFsb4HYMpMPBS7WxZmysioGnUuFRaak7qZ3m9HAx23xoo6FeMtar",
  "key27": "2RqT4oMkvDTRSYmkCiwUXA4rHk4rox71RrqPTRe534vaB1JW53mCZk1iigZPR9RDafD2c7scwuWveu1xJ2mDF8EF",
  "key28": "5JwiMB5QNhM1Jse7rd6WkGkbhQkSUxGgzMqs1KWCdDhyRMSa4xkGVLx4QQboh1dRQe7RC64FDTSeiPR5ftmXwEce",
  "key29": "RaPfhgNJgfY4dabDYcn2XL4tGTFaLn5bBp4CwELdUpTKArBV1QBCzVdTUKqeRGyijBxMeTPttvbEAovcaGZyna3",
  "key30": "2JQHfZcjTzHVYxrZcYHHYkooZEDTJ7GSwPn2mtFKZ34w4hMFKJ3LS8dRwp1cXyboiwnsGsKodziV5gKt6vmQoPR9",
  "key31": "QsSn6wNiG2ca1sxF5RvAyAQMcZwj2Y8x4XDu5SemjAVpDAtDQ3UE1K4UYY5YBGw6AyJUhXAfAsqWSv11zfyxKfp",
  "key32": "2bUwTfPzD2R6D8EEu9RjUfqinopGkahCGGZ9mUAE21F19LoycSkm3pB4A1tX7gWjJphrWjz6yEAVGvCW3FiaKmGg",
  "key33": "3KRPqaa7inBrRmm4XZYFfZTum77ohz4vZfiUETpBho1Y93gwirps4SewQK4QeLLME4UzXNa7x1q8iZJK6nNABRn6",
  "key34": "4ApoAA1V73ytz3kMhsne2Myfh97PAiAfRmjwZk4ZLjxiMb6Dcotmewqtz4mS35o4ga4z9fbHx5mvcUV7yQ65TwxB",
  "key35": "5LvWtA7adNJwxagxtDJ4EUq8ov1xqxySXpUHVuG9m2zNNiC9s5GszLYYwDgZKtiJvWJTRYhSa1sv59dETdEbjoXG",
  "key36": "37dHAZCZCFsfYys6CGeJm7hMmb8YC9ehc43eAbrKstZeSJMbE6LyzUHycCx5h44DBL1A52yYr4kzLtvzf6KAPvki"
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
