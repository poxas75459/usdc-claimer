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
    "37Bi5aKuJ41aJRbcjTnmcDG3ihHmNLEdDgX5phRnHvbFS7bV6QUT97YqwxD6HVo3smtHdiDhqhH7AnQUEXSVTmim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osUkshAbBG4yTx1d9jg6yTF3YvRoJPGjwE7xBQs2gcRj88ffvjezninJeUwS1dmQ6mnmGpRehiVARBVqvY1gSLR",
  "key1": "5qChM6JMVbY88GaC1LzUg5Q3mF2YnJGmT5r2qXyYWCP8CpEckfJSJ1YswryW9js7vRAzWiAYrNMzJ7tUQ5T9kF5d",
  "key2": "4zVTAY1fy8cTw2HeY1hEug9GezkmyuksTsfhw7cN9AZ7BmuCfzmnjPkWvToop2cazuDgbRH2FR4e4Q4nu4wSM1TM",
  "key3": "4nUvn793QbaLdnCBRG5oiPXc8hwGxy4YNBVzpndytLkdeU2oKjvWddjb3Dc1aySWazwnNtt7kpipqgEjzZpuwScZ",
  "key4": "27idd4fRKvj7XtMa4E3im9MjWR2QwcY3SGyDWceig6H4Sm6815Y59MGy6PFMq5pS77FgVRNXbNVkohwZwZdc528T",
  "key5": "amdVtcX86tDfmGp1Ze8NwVKXAm2eBPm7gEawZMjkx5RkP3qcvegh8mtHKkmzHYo6EfwdicPCCiRR3H1vdUJUapg",
  "key6": "5y4oVFk8D5sbRitAewreVsiKxLwvAppBxHngVh1iNqniNVf4XPqNcK7RtQ97vy2MrPVJ9fGMwBMjKqsfaf2F7cXE",
  "key7": "4Cu4cxDHxUGewXF5FaWjPH4Bdy3x6ANVV2RJXvS1pDufbnRP6r7yNCpWbZ2Xb2uYoqyot4xhVC74PwJnwx6Pd49y",
  "key8": "315KPPoE4V15hC8LSedyVQ43Vd5mEEWFkMLBmzA9cUmaQMZqKpmnxyddzZz1XYctWBv7qouNAo4qNPg513C1PrEH",
  "key9": "2uecRd6YYEmgwLMCT7WbJhKi8NF1SmU61HeSybunbv3ABYeR51Hi9bfDUFytHZCsn9ptxJBYbQc71j9HCVfhA7GL",
  "key10": "H9Qzp7xKNQSYh8YkiEXFHU4kyquJhgX8AANgycp2kYw4K7aCbzZ2jQW5BSyJQNLZ6CDViYQ7nckM7g6cPTeZDBx",
  "key11": "2RbUhhFyZQLktwSn6jAwY49QhUxmr5GZfkCBSoFs1kpaZAC7UyFH3NQ16iTrznjQprCUsTtgAdRg9k5fhDvQKte6",
  "key12": "G4Z7k7aUHjjNMQbkegWXcwbyVjBLkYUi3V8goPcMiJy9gPsiKvEyqAC99JMoF1MKAS7P5DLBbXE7eqq3yZPX2pY",
  "key13": "59oNLkaCTztDjLX9iQDgMKSiSfKGjmBpdgSzZu2cTsgz77z3s5BdUFZ8bPgjQ7gL4eqYh2aGCf2qffjcjbMZuwVs",
  "key14": "2TSUdhZfmZ8KrZ7t2kixbyj7rg4VBjN5DfRkCvmZRuhK5zksLMYcch73dFQ8tLCyvZsNd8jqidCSYQtWHtGpF5Sn",
  "key15": "5Yoprkhu3m8BnVNq1S36fEZTxzoRAtsXF755Js633MHLpy6chBwGj6ioW1AWFibk4pKon7FDaxgV1KtwCxwPFU3J",
  "key16": "yrJrxCoQMNNzkBeAFNnj4nYpxBoysrYmvCiUDqfHypJYc3TdYBbJfm5zVmKcvc5LS14uHjZiK2d7KU8FHqwT5DL",
  "key17": "2Sksdg7mR6y26j6T94FjpBLgBP4Eert9x66javeji94aiqG4L1mm49noeghAbuMyEJqmz9smeQ428BAXCu8f7Nw9",
  "key18": "FVEV8iWgNwL5dP2Wr95wfSHucMWCWErbB3UCAL7fTrYMb3d4XrooiBAHmR8EmUindFmKFMTzyKiqsPYAZUSh6MZ",
  "key19": "5vNp38nAj9vGNxw8VbhjD8uvDM51TEuFz6RNGS6QREybyNfzhjvsPw8tcFfwh891CzkfDpaVghKZzWnPx1gRT9tH",
  "key20": "4gMyo2puaPrigZaVVgS1pJaT874hC1AG9xaushX9fPEeZShDN7XeZaFr7HTtu1E5FWME8A3MyXryPg7iW5cyJUss",
  "key21": "34z2aJxZs7YqFtFXrMDVAMKpR1z7DsfS6VtSnCVkEfA2hMMSn1Yv7rLavxu8zntoCxN9YJ7t14wc3yT1nemLB1AY",
  "key22": "2f86kin2rYY6q97cjCHDHhsWnjf4PQujwj2UDKJcQLhYuLSg4moSbZY2t4uN4dDGBs7K8AwAUuJjK6R7BPD2vdqw",
  "key23": "4o5anMh6muo1tf1RefDTCLMcYqwQb8J9cLWzZHNzX9Uv3M1JtkQeEjnCS7wDggp3yYPYdhjKM3b3nqr56tUYUegj",
  "key24": "Ty5eMgfqi12J2aUvXBoT8LMyXxAXaRtMHzLn9R3TBFAGqggtDSzZWzzAv2Xzgkjxjcpfzn2ghDamCcUeYkJp4WW",
  "key25": "29NXfyh9RPsh9atMWfJNDJsHUtnP57iuR7Azdq4eToiFVdCs3x5wrsRaNCPW3wCrmD3ZcZFBHpj1oBRThWs27ve3",
  "key26": "Tu381hG53Bp5fZCnJRet3NWhMqFX3Erf7gEBjLgb2z2YEq4ApMfJvN7Tny6FNDyJWUdjkmPCTkz1o1kdbRqTZDd",
  "key27": "4GPJpnhH1zEJF2qbPoxXJST6Fedq1enzNK7FXFVHPnKgos3LrJLm9QtbVFdiTTeu6zHDSeni2wTtq63U5UjZen6S",
  "key28": "2EJZH3x9ih699Y9PzCx9qFqiazBmdmzWtzyBcSBVfZB58RmaDnsb57BoMNN1KuJ6gVNEANzdwvPTUrQkiZVmSoVP",
  "key29": "3Tj35Cypsh8oqypg5kUxiFgcpM1gB2x5wC9vec5xmGrwkg6S6oVNZdnYmUEJLDxy4T1m1PwpqD2Bvw5XWLnGaKme",
  "key30": "4DNANkSGy2ZTntccaLyzT4364bkH8JU6i3e5aMHVrH9SJv81zo75EVQJkfKFX4zG7agWvzaZuKepdZCoK8V9EcWz",
  "key31": "3TrGJCqzM4jDbS59bqZF9c3zzppRdx9LwxFLG3XgEE5bn2dgP5qGwhAgPNdas6TbzyEH4xms66uogFNtTrJ4izp9",
  "key32": "5Lahmyf6uMMwNvbtuRAzEbJGkG6FMk8AF8tpi9UKiX3DrccVP51xd44UES8LLCLAoYkQyEPscxLwJfxV4NfATxeT",
  "key33": "3NwcqgYTxwcc27WJWjf2UrunNYVXwRzPrMB7Xv4GMWcr4Srx89TmU9GZagVAFZ2HBr9LZz8DKtRmJcbQCuMrgMAY",
  "key34": "2EoH9M1L37a3mUvVgxH3uzJWGV71JnZoqtHi3sruCYYtFG6tv2DfswfTXGXv9YrhHxfAo7ggf5433GTuAXcBvo5H",
  "key35": "3fL98bPyT1CQHWNCKwNYYK9H3BstY6xDLSA8RxKja7US74gw6h8ZCdvzybfvXzdqbuAV99Bz5V2SkaxwieUTXGLB"
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
