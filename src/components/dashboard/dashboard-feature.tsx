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
    "5xtZSYNucYpJW3wYVdijs8c6UdpQjasnE92UWqyADhQwJHKCQXehqwuqzAZkNpkLHs5hHGtqk6DCthyeCJprB2Xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLyYuq6Gg3Rg8jasMvUobrmtAhihBfRqZctBZLkBqQUorRBDDgosWYdmG6bYzCyP1uD9a73YFyTcUakryigEJsf",
  "key1": "y6znJHmf5PLC2apcqns1PkSB5TtzKmrHAoGs4Dbbvq85YU3siEAbqDYF1pCKJKKQP7Bjc4JmysakiWXcBwbPd8v",
  "key2": "4LyHhabuj7NST42JpEJBWqsdVxgWrNfuBFEWugWCqB4pxUwSwcC6LZSRouDNEzomGkN51qowrU7LpfXJhGpMYHG3",
  "key3": "u3QHKPPm51JcrYobiS6tLmeighg9prAL61i5xYugQri4rVYzcwBfYodtQZsewJEXy5CXSHXVTnAYJKqmhMB19ym",
  "key4": "3bUw1RVKpyvxbYQJzGGcNV5vtxhbH4CuuL7S7deHiiwsEo5TcwHvKBGS3mMEVinLT1znThQZYsnvS5toB47ieJC2",
  "key5": "5h8Zq6RuUqZFyuwdHgNqwVHM4shP1JLSaT94cyLxNUUhbYoVjAXgtGbHdD4tYSrWi2dXZ686jxij7iya2hoXV4MU",
  "key6": "4W6YYESKRErv1Lr72q98CFScmMX7112V6KV8mkUsTmMWRcHerAL2KxyoTX5DinpV5T5xCh9PjqmXCbGLzUn2Nbcq",
  "key7": "pY7MtcYtZLnimwnn4v115RuE1iD6mp5m26bRNDZX7LdR2v11fPVCBoX422NgyX2q2jB1WxbbX6jmiBL4iwwZFHu",
  "key8": "m12UA1KkALpNp2dYehDcrsUYeBvccDo6uP3v9w67UUZrvYvRdTy9iLKo1zH9B6Kz5xzNkuq7QJdrgEwxMXac7fw",
  "key9": "62zfJE6SEGzHQ8EmuXUz5sRahVTQEppY37f6sMS5NX6LFiFHKq8zm5e9CGVa2UTkMxsxW3VwXLhsb7GWnZ7vh9bG",
  "key10": "Cw6Gws2Jam5NkjPzm37F8cURzn3GYTzWGFZbPAbspynXcwWF1XvkpbxBhJgQi1GE7ZYDbApcF2uKjftPRvqKSTN",
  "key11": "541R6uLESr4yyTcA8cXMouySVurKTZoK3roEvJpA8RsSAvUoLozd8DSLJxFwnf6Xf6eXZ27wgv1TVvpsY4icBSn6",
  "key12": "64XRP43g9jFt7qYEjLKzH2wN2jAgjJRP9vVSPJoeWQFwi8MSTPYL5E4feesK5Jrb8Yh1vQmEUF1npxfLGpY4YtD6",
  "key13": "3fErvsWAWc5VB9YKwsMYNp3MCEWGWHwQhVPTLPrbNew6Bo2r6mc5eRckdSeGR4yV71t8pxryDZbDmfDiYNKPP4hE",
  "key14": "33VwmtmXWvC6Sk6ysZs9jqGQHKXWqTLETfN6AArTzzCmoVcFyKKHCEBD2QwJQ1xEKjcvF8XQJkkeVDCDBAXePZn7",
  "key15": "3LmbAdoDdfkUKGfe2NSk3SrqGeREvj8YXdZNUdhZtsSpo6RjpqLDtU27ZJTWsQJjkGS1jVBNwjPxxns18gyZV8K8",
  "key16": "5TB5dwYzuiZmi1HdFU9hERkEtgnbnkct4ZqXcv8asnzLbJ3GeHpPKmjERe5v1MRbdgz9HXhU17j75e6h5FgXz7Q5",
  "key17": "4Y6shaj5wkmtdas59zCLJGQGmSXvPdbkG9WrVvBeNySrtCdXZooSYQ66JBvt1tMdLuGG5zCr9p9Si5SNCWvMRHoR",
  "key18": "2UHs4LCCenvggntCcL7N7tG7pvPFXfZ1an1tKHMd5HdgnnoYcCrrWLZ8JUKrUUKqi7XLyz3WpMCjUBwoLgCxfWft",
  "key19": "2qtRx8ZKosTjm4AFjJVxuL74LckuXg96NC7Wt1zFk7oK5H7AWHQqmasrrpjh6xjnDhrfninnww9qNCGhtNeopXy5",
  "key20": "2KMcF8Vg2ihedDfmpfkASSXkjf6x1HeEwFSPNmVwFoh7f1GhT87TiaWUjdpzUMurpsow8WssQcJ5SRB1tuCycFbm",
  "key21": "4wE4KFokXTFopBWhdAZaduGcB6QNBrT7rMeTvWB6c2Bxph9wpRzmFxdWcQXFTLxvemhd6nZxrsvngMpLDEFgfr17",
  "key22": "5RiAbgnvWFjrYEjmVCinTPy3xYcVnWTQZ4AK7nB84afSesEkAX9FwVFQi43ZaSX3yDLgFQCPTGfiBSNo1kDM4Rmo",
  "key23": "2B9rxNgsYniw8RzYhuLMYXys8p4WdSmqjhUcJdSQ1oafVe66bqqJKiNEgW1jLJdMZCJFm4btzcvQiHzqbbUpKjSM",
  "key24": "4CuLX4RbHABFFpjNpHjG1Qvkdp3QkC1BhijD3q125Yywm9xeYutCErtpeRkgyJTFRa4CpBMjoc9ArbFtKid5r5NS",
  "key25": "2qtk4W7mUPnGNyYN26DbkuvawmFcFqK3U7E5s5ofDwaGoS9x1XD3Ln1athR78nuKZ1UruLvhs9H18yXoqQJk4Q13",
  "key26": "4BvAiLo7uRXhR3eP9nxLLPk669BVYgX2ZioqZPCYmFfNjXPFTzEzLMtun4PvdeKNgERAcuQ9sDnqXDg1uw8e8LN1",
  "key27": "3svuGz2JGF8GRp6HpjzTjmiNMuxcdz6mzPYQsKz8U7Ncr5Bu4rWPVKJGaLRPegsmAEJfBifgNvHXepzZUG1WgjS5",
  "key28": "2PxU5VFRyAfEi6WcJEwbzKkrHyif5fzSGDgrNkPTa4t6KMXNeCtbUtjYuoQZkeUibTicS3x9YkE7jGeXWiK9M7Xv"
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
