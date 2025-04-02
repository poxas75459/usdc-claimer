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
    "4oSUTSVQXiHGpbbku22x2dctpy9AhjEbAwaKFiS48SDVB2iHcsy8eRmpoFzBxwSGum8sVSdQ5BuHm2NJhGH6XBV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuZR7pUaiRqdAhBudAGwdcnEvg5dmPC7wuWtUjZWtXd14Px5WFf5eoMXbYxJvYhcZyyE7747RwqW1kUbuo127Zs",
  "key1": "5RjA36RUEMYgzdDuX17BeSDDaA3Th284H6pWqfs2okYdLRiv3BxKhCRYR4FCJ3CNQPRt3uw5pB3YX3GgKoB5ZsVV",
  "key2": "5qipVUtuuYufdVJXnjbwpvkp9iw8VTdfgdDxHkz4vftVvxZtV27aHHP88c6rzSU8WEwT5ekNxJ8xFc4dbtYRWafv",
  "key3": "644iQgnyvFufdUiSaRRcWYnBbxmZuvafU8TPWf5SpAzjVarVsChsFVWXKKKADhBgDkxT2Wj14A8EtY6QBR6UWBzF",
  "key4": "34rd7pkNFLp6h1Z8w4kdtEvSy1aLPpZndZCv1Rw6GsW9scVgdR3fkdiJub4K1LjqfQEtJD6kKa1qmW5kjCLMMfox",
  "key5": "3WcpWY5kPwbLQ6MgWRsujnxUQ8VT5BGuGJHg49k9v5Lk1q5fE747trY7GYMb36tTHCXPbaezjRjuhhsBPNkAC1gL",
  "key6": "3cQbxzLwHeFgo5tgbRXRwFPePWPGTbu9qJKNjuG9MyjMmYVrQtGzBLwc94ukcn8tJaaLNdFeHyExFJkm3s54ceuY",
  "key7": "4efAuQBX2LLQkSV3ha17BxGdJyPEMTCH7c6XLDwb7K7xFRqmtBy48siHjaKBTe4wYQEMU5YQ2ZPwDCKqTqAqe2dx",
  "key8": "4ncVZsms38NpoXmsEkX6fNxw8zTD8FviBT9czQHT9N8uDqLTz3YNBUbEog1tRxQhSfxpcLow146T399vaLSnRv6Y",
  "key9": "3T9HoHL4v4toExDCyNmu4GH1MwjHpiS1QTBBVRsoMiGyMRiv4Z9Urs8nYrUfhnN56haEp2oe1D5EbfQVoEo8TM6o",
  "key10": "3v4wTaVjd5ayPCarCjkBFMVwSqCodMdLw6YadavwNTfo6S35otUvSRgqeFVZ9QizY4BYi2TqfD7TGkgDuUPzW17U",
  "key11": "XCxT7We24pcwwzwTBwnd1CWKMbeECbZhnzunRiwDj4DkuwpLcXVJzkWZhZbvRjV3RNBawS6uUii8qcJ4rpXAVW3",
  "key12": "d1NbNiKcsLmyGsnTcosrGwfPJoJZMF9SDKTcLtnNe8WsL84M7wxwrwCAn4YoNVVgUStD7QvYmfZPNWQnRDTCLnY",
  "key13": "56ARhytn3rDcHSB2YWvfD27Se5pX2HWz1PEWyosKWane7LNC8y4PwFgYd19VwpWyhdPNUwCbBoEDviK5UL4mzGTf",
  "key14": "3518Lz97BFrhfDj7aU8ZY1a5t9ST4iXat8ZcbqjLEJmB6QpkSMKzbHyRRjus11NgBqu2yNfX7WmqvPQRVzb5cdUs",
  "key15": "ZN5zsm1o9hFHk5fGNCBqr628QX3Pch24Ak3cxy8GMd9d6jHxUoR9M51mQvJnPd5Z1ko5FjHcwfEceV1mg6DUZpD",
  "key16": "4gvpSpR7fwkhNSTq2ih6uWCa4TTk9opDLhpNkhokMH29oF3AnXHMprfKMqr4jZMc8T9sP8yZqnpdkcsUKF9bvVY5",
  "key17": "3gjj9se7yXyMF8vrWgp28kFKSU93YADJKPMgkcKropynmuyYxxC6GRnFvaDanVJFGQMX5EYpNMytJ36g9BsBZAR1",
  "key18": "4QqKvUGg5v1HzVipJiKsmjA2Rmv36WWwKB4hzVVCgNDLTHcUsVL76VGnQJytrNcUWNLBRP6BHweWBiZYUkKUr3q",
  "key19": "2Rq5ypb34DszyRey7RfGfGKXGo9os7JnHLXDkHMy3rUsbYsfwesF59fotGQ9f3nazci3B1az6MCVmNZTEeLcqXL5",
  "key20": "29RYukxThZJcQrhxcHAKDRG5rTYTjpWRAEHqE36wvyVNTz1KuET7s3udYrKMVcwf1ZdQ3wrUsvbHDWYPGrMgov6Y",
  "key21": "3Z5MnUqP9YWqSFs3Y111uKdUgBUa3Kqw74pF9bsKjuDEJZboSfFUySESzzZnDDvYrXejg7HeSmZkGFWkT9cRD7FF",
  "key22": "qqNTfeA4tZthdiK9cPtNy6sefc6FLTAWG9noFaMqGRf7P7STwTVAFYUrdLLFPXZUPJhLtZ3TZSa4MU3rwMzJ3zb",
  "key23": "JEzgv4ytKprD3pNKT21jys8MjHVmm9gC2k2VDT4uQBjQAxmJxnbUPnv8UCFK1Pwkp86Pu8z1Cu3XwnAiqhUzfgw",
  "key24": "3x13Zoo2fejnCpsP5xGGahFHupiQY3AjRMX9exHfnqzxqnnHtvgJKsknD1KMLC4q3FVKHrDgDFEJPpkUcumVNwzs",
  "key25": "2SSa8QscrYZhaZwDm2zSakJuezKQRj7TfeyF7qX6QANDpNbP5JmFPTZh8groXokWXfVHk7CGYChwWoSYPnk1Ajwn",
  "key26": "2xqADgpRPhgjFZg5zFj7p5SuiN4Wa5XJpt4pGB9N1c4YkS62zd4ZfmCToUGHjUPDdPHYwfECTagGW5piteuAgaqS",
  "key27": "4FpvGboHovfrWiBxvnwjRU73rmBdzVmZF7dZKWkxsFhiy9WyGXvgrHjYdqFGYDsyWGoPUE27sdygJQhJsTTWdYkn",
  "key28": "5K8daNW6vrmFZeMhaE9nbyH5DvXyw98RxkkeCxBFZgTsE6jNciSs2UkWS9nQ6BjZBBVqJd2jt51BHtLGHAy6QLfr",
  "key29": "5EK3H9iGkWJMbMQuvTxAvdQXGZ75fXSvW2jWXmL7wDCPjtJ4ddVZ8cmfSjkoMLQxcPFnz2qtnsFygEbTxdZCERvj",
  "key30": "35QZjLSKyK9gpytEVCDDXgs4QFzDwioivYRQZ6TaqvYFw5vaSDxhmC85FobzAPCsm4iRRvG3SF7sbeGatg7cCitq",
  "key31": "3uT7PXocKtYsXQmKKsV6fKjbPiuBuQMqmRL1XJAji75Qe9MBzNnU5KVBXgSzJsBMET9EHeCzqbb7SnuniashNWkL",
  "key32": "5LEFnzFxcKcfnjigTR96rzVbYBNYPRJVR3x6VNc6jcovx3U4oU3XpXuxnaGSV3EWjHdCsg3uSFPF5STLs2ETWyih",
  "key33": "5mBHhgp6rhDxZvBxuBJYMQWKLnZHhN3C3xVUu2WtK7PpK9iFXqJXcHFaSxoT718WgPK6CvJPgR6sTAQ5CfAtAcLa",
  "key34": "5wCrfWQ8fsV8Xdo8C2DDWStUjuU1A33ZWAjq1R9pf57yfn1BmrJeJCmh2AY6HYXvKPS7vAxoFdBUudnYScZGwyo4",
  "key35": "Kq4sTz9hAuziynVVkMmAxs6BkGqx7pVPYngrXoncdDp35Bgqo3qJqDCmRB9YirXUQ3ZtrknBqJ1R5udxpTrkG9y",
  "key36": "3EbdmJghpxP4hp1xm8WZ8wFf5N6iCiebNneXXneSiTB7E1d6aFQVVTc36N8oXxajZLo3YVz3hUVfRVW1WfpEe3AF",
  "key37": "5fFL3NBeA74PWceY3jeMWG4Kk1X3VJxsoJpMMEKjSChf7YfHvZ2t85rw93nMnTHpA7dCqdPyc5j3ZnqihcaSHrMu",
  "key38": "5tURk9vR9rqJzcAZeNKcpq44GKvzEFF1UiSHhk1skmssoPoLd9QdoH8pinokbirSFz8K784kdCGuhwL6rtCNejKC",
  "key39": "5MzFP2wxnGbEwgcFa49aMCvYGwy3MSH3RzYvtQUPj3X814YnqTNAj7VLqigRs8uddgg4AxPQPoDaRM8nyWttUHLn",
  "key40": "tE6oaF4wVX5jNDBFboaDCavRCNEHqGijzoDqQn4ZvopqDt1Lgp7Er9opBfyGi7ngDaF8hcWn5K3weF3bLWt6NKP",
  "key41": "3X3YeULntgWVXqKggpBqbbMorx3P6AcxSpdq7o4R4vSJRpqRn4GC21iQRAg1QzjNdgw9q4AQvWRGAzdVXdvMZNPL",
  "key42": "64s5SLDZvor4yBWxysAewrBGsHthFHHyTGgcoKVuAYTfU3kuNMXVqNqqqK6NbbSv7bva5v7KxCV7jVKvzXXwesAb",
  "key43": "4WMphgNe9SHinhmyHtmGVg8gkW9X416G3sBpemMzpRRmv6NtyBePu9Ce7BFfHgHte2V9PJMbrpGWaAnZDgNKeG8B",
  "key44": "2tiNN2Nqabfckbv1gVTQUBDf8vexuzen7iDPniN9528gQ5JxoxjGDBLSmQXkfjDM8Ek3b2eZMTtGTAvxMGLciLXn",
  "key45": "ni6XqN5TNhXrkzoSeXbYG8FdgA2JoBuAeDPzUbmbiRCGzfQxpJj5DHVdYaAQ7LJeiZhoybGcgEKmjDCcGfDGK1f"
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
