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
    "2gTozerx2xbv66xgzZk7Uf2NFr6RftiH7AwdwWLWhaQSupnd6gXKsVWLjPSbybVqba5t82DGYQGNsdHuLMNQJgNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cjb2rBV4cyZ5NqNtwwxQwLY4gjKdg4zfEhD8HFRkdMQzobmXZyyTQXf87pCisfej2MyFSxEicMbF32vuVgSowo1",
  "key1": "5WnaRzkbJyEW1HHatfiFrTff2EJDxokD7UQwqfwV2kCa4QPVdsbvFLJAFKD9HpQabdtBkcQi1HMpHgTzt9qZ3oLL",
  "key2": "3vap7HEBQ4XyRwN1vBzJycaC9CkvAo8DAAkxHBAaVcDQcveGbDR7t993KPrfpb5Jeh9xSPchJaYCp3dfxEAPdWRp",
  "key3": "2UM32QAXXABF8NE4bAxtLmrv1CAg8HvrvpSCyf2fGHS5PvRUL9oTVivvd62imZXBPinMMm1TxswSh3QubnrEvuhU",
  "key4": "3AAQvvA7eyzvty1CWjuJd6ENgE1CtHfY3rvFbC1ThAep99o3JfxoXzdQwfaiGd15urvTJLEymvgmfvfRUeRyJQyL",
  "key5": "66yxkvBLfRtfQnhzNbuqpgN7QJLVWbntyeYH8JdAiupiuSQzJeQk4uivdLzyjKi1xXFTQuqJwB5NAcoEVXPxxoYR",
  "key6": "3uLqQAfHGYmHEL1zbeBwF1JSgMJ3A53SvV1HZbPbiF9zgkuLGTF2hLvaz8DnRTjBy5FyqTyAuySVVpf6Giu3JNE7",
  "key7": "46sARud2Z3gd4nSziLGJDbRpPU5LWUUhf91Mgdzk9WtmRS8bRr2yoscnFvYsyX9aTVsuHoBW6dbFSdRc3LWNCUSZ",
  "key8": "5BTJkYqtLrYcb1giatRtVnxwB6aM2cnAXNCWXC3ULcZSSD5jinhHitnbHkgYoGS2Qky2THq57iHFgTxEcyZDYWDU",
  "key9": "61Y23zBWhGLqQ1VicBKe5KHgSvuKZVqyDMtwA9bVSnwmYKCU9iX1PSQ61m8ZZH4258deyz65GMab7sAN2hstg9YP",
  "key10": "4L2PhkwWhChUBUSvKnCeQfwcLe4p7DqK1cEBUtUFbj4M6MGfdiFxgPCPmZPVWNiEjzUidG7kSPtaMA5pNS9Scmb2",
  "key11": "n4cfG2LkgBWjd3usC4tFym22vRJqqGcsFFybZRyhSEXdQw8S17n3Uq7qMQiZ4rgKcDJecym5RX4myXPKeG2gRrj",
  "key12": "2fdNEWP9tj2HUeebhHxSSeXAtudFBtchRPn7HASZ96jEibcrNeAb1DAMhk8BxfqWKRuA9A4a4NWay57BSHetMes7",
  "key13": "4PkA3yPHCL9tjTSJRJ4cJZQmgYg4d4eEwGRvNPopCwd2Ti8Zk9PQZ4wPmZ9MqdrkJTq9dQFLk5rVNVDM3afRcrLM",
  "key14": "41iw4r761sipaGf5fj6CehJxdxwbhK2BEBbY1M8Sd1tX1BdVtz1r3HfUwFjgXWct6Gqa5XBQJhZR3fKPQ4oUSdJT",
  "key15": "2qPEtXc8LaE8M1XwRTZH8XdhhMZRyhkJtLRbhTriKEHE7B4vHPa41UDs7XTyRsCokgk48GQRWHje4AhZbbupDS5z",
  "key16": "3uKpz4qAVnXuds4U6hhGMVvdfrtsMHDM7E4Mo5x39gyaLNX9v2SkRKtm7o2zFpcivJexVhPvb9VTknyM7fXHM7Hu",
  "key17": "2wHVWWLaH1RRqX6tb97jZXUmNash8zBi2Yw8Jvf37TC231mpM8ZDScj6fgmFjG1Mdd57hFYtvrzpN6y6u1hEBCA2",
  "key18": "3kBZxzEwHoDMMqVV4M8XxmHXSuy1j1pTuKPb27ueabk5qdpE5YTCTzRTgvMM84Usb9t66YbdAKELKoV6B3uUhwYc",
  "key19": "poo5JU1kQSpCijjdJu316PKatWBJFnon1mvN6LxuJMxq9rvG7NxQeoAXLLa8ty8AK6bxBpz8cg6diaLVieTsh4m",
  "key20": "3mrvY5LqT6hC4LC9n8xwBTHQd8R2ft7jex433XzZLQAwrWB6gcoxhmvrcsvLzT1NsbhTSmNwKAH5F9gLaiixHuGY",
  "key21": "3mxhsSBRCmgBsteunx1NEAKNoxmsJCHwL3Z8e7xpd8m2XcuHb5d7a4TpeHEDfZSrgKcg2hqrmxnbQmWKCdM7rBYS",
  "key22": "4Ez2Gda6ubYY9g7HatwXNyCJHpsKtF4N524gZU4dSk1bjy6uGatyL4HQn8uACH3YkvrE1gHidPzX9ZaMUk4E2oX7",
  "key23": "4LzG7VkVTDUkR6ME2jkQBCXnZ8ZhTWTKWYssG54n8ivevusuvH57H6RjGGSn93aRtAQFbYxszaeZFYUHq1A2DSkB",
  "key24": "341ATuDTNFnMsZ8hHiVnvwfxwKRzV9NmXNVBsVswHNA8RRedSYGjwVULwemXj7qBic6KgiYRA2AsDTPLmQ8KCXFJ",
  "key25": "5BQB1g1TRnDC8MwHX8qWYxtM4f7NXyRTJF2uVWgcoVdP1uAN7Uff1tfuvrjJEkuet4ty2Qw7smCRHKWVjeWnAcmX",
  "key26": "516NJ6So7VrmptZDFwLcYF7sxUHEEkBGE3S9VyZrQSN2W4K5yVNvVMDf6xXuDjnBm7fhEzPdaiee58YqQXhrnewL",
  "key27": "3rGgVYfSmx8Fstm6FEWCWpfunj6q8Xx5EqvP2ywekepiqmG58M5GoE2evghSBMj18TAVbpSW4qWaF6cnTX8VX7Km",
  "key28": "3GzBA3njsB9DpRgHxmQrfppD7TnSyhyXXyXpHh11YgQVSAoc1Vh5uC7vvHGgDwQoTaS4CrgWdyvLYbg4tV4hNurb",
  "key29": "iKZRkjVAKP4g8YQi6p6KY3ZnkMrAqdpk3Z5XFYxUvicTdEryXDoWExgmtkNfKvfAuK825sJ5hX9pjLR5suVkeko",
  "key30": "2XYAZNDv7A8CmX4CqsCqAS9hfM1AixxQbC7CLcnNE7WUNB9Y48qnck4vXZg9pAtazRTnRgCtnJTg8TxRjUSiiapD",
  "key31": "2akGPWAXQvUpC2zxBxuDmDdFZkr1HXo4YcrfwxrBYf6pb8XkkJZgMiPrFFjkcGXfXMt72qH9NHyKgXv4TzP65YNx",
  "key32": "NiBHygE6VKZ8M7YU9koyvtgmquX4aaftUbpbGo7bZThug79ZuTG2Ccxy5ZiWCSbSCKwnezCrHSBnKgPN5YMA2Fs",
  "key33": "2BybySmNyerony5e3jNC4ZEW3ridATyFmwJ5zSrKoCFY6WeHjsD9m5PyBQQc1KeEnWzutZr6F1DZyabEbS6x8166",
  "key34": "4Apvfv99p5gQV42z23SfG36k47LYef3QEW73WZrc7ocje2kQujJzjk283feH9sHWW1NsDLPi2Buwe6hSCGQYu8MY",
  "key35": "2MGbXUzHD36ZfFiRbnCBvjtQNoxL1g3R7fvi5jduZzXZAWLy7NzssQ24MU91UGHzoU9HR1JNJoCSUhMy5SuMCx7L",
  "key36": "3izCwkxQekiGEJJmGr2T6pk38gnmEY276uKJRhnkkqHoiWbBrkKdvcAVCC3MuUp6iD6rNmKTXZ6muveX6wopRLF8",
  "key37": "5bQ9Xhsba9Z9h2KaAgEvpCTfHzZz4yYEP5P6eK25ZyeZdxUQ34pwRibjmLpdFnBh3G7ShJdfwUFr28QzrY49Y9nv",
  "key38": "4TjUUhvj6847xCLAua16zjBPxLvKfbzgLBfBrtM2YtHubFp9B4Vu8g9uzhMkXzAuH9bTpHXh6ADiTg7WJMjGtJkL",
  "key39": "rE5pimMzCpvaUZJbfqkc4JcwYq9m7J4PVUU7r2gN57bhioDKy9XdrteC9CK6y7UhPYmfD7ZYTwcyEqSdQCZCCu4",
  "key40": "4ZAv9EVUzLPF7NrTdNYanSAGjEJrHTqojFnG4fR1bA7K8MDoGdhEsYX5btVNyYrvNBomUNYVufSFSBgj39W8x6Mr"
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
