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
    "5drLeednZTvxi8HjBNMStmySBPwagG9cJ11P4oC7QujKFjGTLBnTYNkBP6b8TJvVScYvdYhiGt9NWVNiETabzPjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKwixz55d3hSktm4thP5JTUzcwcTYCgsjYHgyJBiw6ynhyfvKnBNKhyb2LHcootJC8n17MnGNGkNjfW3AWN1MUJ",
  "key1": "pLqgsVwxpnKBNQXYs4ZPuQkDZvz77wKF1VKVzx3TVsqxi5LqdiGc4bp8o7HUcoss5xm9QHHd5stVzFhhFbJTMjS",
  "key2": "3FCps3sf5zmoZEaW1vePsYBXLwKVJFnKgkTBwomvUGdEoeujzYfBiuJJNzUQPUXLrqF6RxMUMmUQRd7B32ZKv84S",
  "key3": "2oJbqN8kLQ2sD53AV2SJ1tezhhBizKAhq8ie1cirRX8j2KAwKTVreTAGYHKZJ621XSxay177H6nbrhrZeYhjBGN1",
  "key4": "3RrevmYmf8jR3gNPJT7ApG2yy55cw8hu9XfDkVKnAhBKr2dwv58cPyAsjqpD7pb7St3sTWfkHhKk6rjvpU8edUnn",
  "key5": "5RyZykhC9QpVJDyKE3B3Yssgi7AmGQ3HGLizT4GRABFNZ4axjQgemP6fJ5qFhwRoGKeK43FmpbC22dnP6QZ4o8Lb",
  "key6": "26N4ea86R86MvabtVV6iB6Hn1xicp13Daft7SJhzW1sjW7cSidze6hihC1LYJJr6WTetRrMHe3vkgk6vynUnvEiQ",
  "key7": "p8kWdpcNnCvHU4xsiJXJC6k8BTBocGkK9h99BvS2DX2RNSHfqEWuujpp94sGyrwDBamuTGPZYujvmGQ6wtcNrQA",
  "key8": "5AHBo97o4yhLbzKfMuAFXDAgq2jDpmqcATQnvswRRAWe556Q8Eb3Q5sfwL39MfYzwy4gAE81uzoPLFegnpfKkuDu",
  "key9": "5ARYcQttoPfg7EBWWgCLqnfVtubQZWedo2uQMzvEiip3YkH4M18BFSXyEULiW9SWGt4afi3LAsxjKQ4JkNdfeMjY",
  "key10": "cdTpqaQGQ1ybFk3qVPcttPKHpnUubDsjB6PPsFy46GzrmymYQafdUVn3e8k64S1xTSzdSuX5dbMsSXJWHSsveHa",
  "key11": "5Rqbuyuvr9QPGPdj7EMsRdGxky5zpaPR1FfvzuHvZzEDjUsromQcfhQ27b7uHybfPpQpovETXVv98P87Wvvp1zsd",
  "key12": "4RKtjUunC2YQY3aj9W39gRJHykvvfeVTmaYQ1uA95SvYP9Q4xQcFe3q1tEoeqtC6X3Gt8fNx3Cp2EqhiFTqHkjMd",
  "key13": "5DpzPVv6Eyc9KzdsJeMw5UgzY75TainTZ72sN5u97YZGLS1SJvF5bpsNS2RvTT8hXtV8RoH4aL2puZkHnsUgWrDM",
  "key14": "f7YZ5QgsTBmPADJxdTZjfx3dgqP9mm6ZCGYCewjxSevGgkiHTcn9wBcU9PXRzmR6WFAUyqgbBhs8N2HGjrKPTNH",
  "key15": "e9ebo4wPq5qWYMNRK86i92SGpgYCVxw9JxevMgChSQMfDxfhQzifq8qLQ7xJbh5UnxUubJAFaBMi8vLkxEXwyq8",
  "key16": "425CY1mFCSeH1GWEjLHCgGVzsau3vx1h5m7HGgySXakGsYmdNfm5YBBCExcbq6Q7aymonhN26WpaNoMdYnrZYDYP",
  "key17": "GBiL62mtjmmCrenzssoS547YJD8kDjo1E1gHXB48A1F9hW22zBvLR47aD54FFQkupmWC86uSSaZxkKhog5PPUoV",
  "key18": "3EwEeZTK4FLx2vGUzvZda9UpDhjBD46dKu9X8VLyuc9ejL6ivCAP2SXkUbeynGwxn4KpfGkPJeWrKPJMESzexrj9",
  "key19": "RPbvDBern3KL4UAXRJZLQ77HKwEYKYwVqEyfaYBjTDJipkW25aVH5Ekec5RCnG35ak9PwZZkaeE461wtn3HR9R3",
  "key20": "5CSNTRzMQzfguCNa8KZeVNWMXAa7cg3PjUKgVQiwUQVmgYaeS1qwyJW9QW4eSLMA1UqXxCkdA6XkmdmDAN2acz57",
  "key21": "3nmGKNLoxX1SWxK8maJFc9Qf5nUi8FPB3MEiT5A4g5mhCqqX57EosNPTMhJTymPAsr57pTs47nJ99eEuxJ5h8ZoX",
  "key22": "TCXf8RYWWkMzBPKEab3aq4eSvNhGBcpX68Dk5Hrjd8qCHiW8aHHqU81dKv66AZynfvV3pvfBT7zhi5KHvrpEwtb",
  "key23": "3YdGJdczM6F6Ffi9JobKqs3UNCpDenL2zo2529VCXaY3PaThEE46JvBjCsFtXBPXwu6UEEXYRCK5cvNFXrSqRmhf",
  "key24": "32UYgpCe2bSTLxVJMQ7zicr1n9oFsis73KoEcAGqtKipbyFdKTfS2ViPH24xwK1iWxiKksgDqvKarucBydPL7b5u",
  "key25": "5uqpFiroZsz8Q6ux3AhcY9FWxMuXGa5unyezWKJHgxcdN5er1MfLT518DGdJtfhCiY7qUCRwu5dGEnwbtC4FfF6c",
  "key26": "3w3rNRW5zXtL6gFWx73g93jKF1JEY8aRoo5R1uDcYFMeiR5QE1WPgZmm7k5eMDhkBBWbMa3UVzbecHMKta54Khg4",
  "key27": "7Sp7q6oFZ8bhmSjbkbb7Qvrhn7c5aAasPCEVwbtJbmerY5QbkNru7pZPHtsUkptm4dknvaq3GRjs5byNmsY5ztE",
  "key28": "3TnuhaHXUCHqC9MUzHmYiPtVtcoBmvToh7vrSUBXs3ijRFWAPF5aLZgkwc7rXg4WfLPmymVs7yDtMHJNFy4JiFmG",
  "key29": "3C5Tip5b4fLBe47KrXN1VC9ukEAhtEbUCLfoA7n2yjqdRaxYk5hKfiMC2g3iXYC4QCg97Dqh9e9D2fLeyDNDkEcH",
  "key30": "3CjE8f1H8z9GcvSbdM87VXPN5xihZ7xkkb3KkbjV7YE37adx816VYdJA6UzVt4fnS8PHit3DCgiu4HgbpVYArVdM",
  "key31": "nHiRFiTxHh74nBBZhNteTCvWQvUWkZsR5SyF7T7rPvNHrbz2imwkNtYp7CoEPXqu4shkZGQuRe8B5tVq5eSbfk5",
  "key32": "2b3vDWEb4kDxJHNrufxjmSh34wW347Z2DK9ynaiKNc3uUydJHNDJW4fLVAjsTV5hPRneZxKKLTGe6jFEGrwUJ8kH",
  "key33": "5idTVVRRuGkBeFMwizkNashUYzFTmq4Qtzj8H9cENxrp75rVXP6WVEWf8RcHeVaJNDvwBL6p7eBYpCTc4fjzHzYK",
  "key34": "i15HHBNmFArZvSmjX5VL1PzegFSST7QzVmXpMTesewPFiSa9eFPNKd1NBU2FWeiWQ65tibftopwFU2iv89KspHS",
  "key35": "29ospMX8yZdt7iXNoJctYeSj2dojpTM7z3cs2mWbgkDg8TSZSsxzJbEXQNCDXJL6gSVB1i1QHtAiaVnvgmUTh6vz",
  "key36": "3Txw5qPxyg5obatAzT2vQSMqD8tpcG87Wr6RrBNrGa5JaWZ2ynbp5DpjCMY4APJHVFejYzpxCjqDsiq8obdwCJog",
  "key37": "5ateV8ZdtWHY8YDdk68B9uEG54Si6szfzMq2vnthL6LDxopZY9vKNZZKJvmUVV2wisYSHy1Tsgz7R5XYa5Azizsj",
  "key38": "3i6zfewVQnvZasEdTf9Cez9dtJjmQY54KX9g4ASzzRDrFkzybNNFZzpGSN7RxBZRQj5WabvJ93x6HyQyZe1LvfCL",
  "key39": "4LMZ68AjeSxJcKsT6CMDfmt67H3tijnG3BdF5pzYbnHuk4qPnZY8S5mTLe71Z3daMJgHd9faHVMsGwjJ8BQkPW79",
  "key40": "2Fw7SqW99UwFLSP5F1QNgmQEAfosWXun811z8YGeZ6FdSW4dWtN6EVCxxyyXQntJ1RcRuqUpCTZKNAv2FSmn6NuR",
  "key41": "4y2eAUP8QKDDS69XDgHiZ5sjQQT3K8RyHN4p8p2CBN38hPgmkytJz7fmdhkUiKiqwPCzwtpUjc24i8EPfGjLZbyV",
  "key42": "2NdhHhRaszAnh7SKauJbyMPkKGjrD4EUS9umAoEKXZWpZr3awWHKhz87X9zsuWGCtDWATs6py2JRHbViJeXdBHbD",
  "key43": "Eb4JaHc51SWT4uorkxCGrCk498dVtHjAiCTZMFYdSNszJTfNMwg6ZqYSZfvuNTqjeWK9Te5cFCeGeHEkkE4dp1S",
  "key44": "3uFHvoPo36cbvGVqDmojtcMQvUtZKX3we5fFoBRhKFWMDVtA6sJAQBrhKqXj3FCLaL6go4C7WrjWAndv1EmkFz4a",
  "key45": "4A1XWgzLJTGJN2QPY1JmWGiGT1rLXfYaCJmTvqiDodUhV6KUjw4KzekgwgURhQ1GT6h4tD8T7ACNfr54h5vVw9HG",
  "key46": "4y4FXRJSjouLkKon5qhGiDTTvTSqpHPqNKJVd8eozFmFrhqZyZfvbc1c5JqFfBDMZYLbqVtx8MSZK2Z4pijG43QY",
  "key47": "59vuFEvAtnux9eb3nEP8veA5eRBP4KGiUE9XV8bFUayL6eoR51ZvD1PLxmE8TwLFYPPQGMc797ekdyvKoQ43Apkh"
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
