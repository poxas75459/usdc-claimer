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
    "5Xx1Y857uWUwFtjgU3ztma4hEknpZTLcoC87p5Ycr159EsnoLmNm93etWRSsbJn8LjfpdTF9dFJMQoz89bQWPGgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrVxMcKgLseX4dZG2v4Cw9GhD7MDHhVDsWfTBbCnTPg8Njw8mb2trLUJnpGutwVn5YP1z3BvWEfHvWUaQDyRg4k",
  "key1": "ttmj97L7pq9Fp6xHymnLf95oRbcEiwKHL4cxDgaYGvhkgcBbGJHyLLNg6sWf5ViRnkJDJBZG6iV9UuZipEuxQEy",
  "key2": "2GpQAwVHT2GeTQYA743Rci6cafzaJZuX1J6j82YtNqQvESxMz7NXa8icRYWYcZoLHVHEz3qhh62A3G8gp3Yw4dqA",
  "key3": "4M8NyugSH6xT47nLJE9aidYjNX3tEtKCPqVcQ2asQSdtMRQ8sK62jYncy7WELsEYX5JXmWKMpVizAKUiduvb2cHT",
  "key4": "4PuQDEc1exkd5ZTwqotiptP7jc3KwRXzB2EXpAEi3cNTm8G82rUmWqUeLaAi7iP7C7Jyjg9vjn1XYUEJw7u8jTPg",
  "key5": "2C8kMuYeaEMRsnCg5xczHPmk7H2aACWd4KqgkijSrWoCT9UC1QHwJbDdZD7tiyD9gPuWYs8KdNDCb9ejcbpomhJJ",
  "key6": "3BuTgjTBkP7DMsYLRnJTb7MKs8MDC5hbcaVsv2MdLzUs8VyFakpEyVrVbFvFUb6P9pKRbgmA8zDuAsKRpXWVzgr7",
  "key7": "3wnLwbASq3JJipdJcXiwaLkHCBLhZsu9r4Z6iUEADRuesXZ7ZWgXnfNcDtSEoiGYc1UDXBqWTaQ4uGSxZC7YUNix",
  "key8": "48JQuQ4VCsafQhLQeRghmKicq373t1ww55c4pVjGEQ3zeee5MvFzn6xiTpvYhKUv5nfhPzCCFNPM4AT839qcspty",
  "key9": "5JtdVsHohXafqtFNgJkeQn9jFKaapC2RzYCjt2eVQjsKrHfr12bAVcZMQMzFRkRu1TDAukCTS5XoKPzkZCADhkJn",
  "key10": "4kYvs3qfaqcdTNt7EvMNyTNT5KYsmXWVCevyfcTY7DJWSRQfyAShcfbH39pPmNziiytfD1KkoUvE6fsbvVseAJEG",
  "key11": "4mDfPgPr1cDn2R99aMwCKGfatx3YpiRSsF1yc1MZkyeMmpVnygWX2vB3zwmZUxPcNYyPrakTMkmqcpKY1SarxAZi",
  "key12": "54A7n1LadHSo6SCo6XrEVp7BPt6GmFk5WBpGpXaEY82C41UYgJuRNKcYgoFJQQnTyRrFZNZEg3v8UWhKB22Rja8h",
  "key13": "4NHrD1ctjSQwJcW8i2gi79Ug6ChUydeYd4dND1cGA6ruCfvp4Zouaa3tDMEpcPVy8mseaM4oqsaxnLFZgWu54LYL",
  "key14": "4zuS9QdpHCsFY1mZdaHeauZSEVKDzJ1H4cEwNJb2i4ePf3c3a3RKcLf2ERpzJN3BafqUfWG8PSjVUaWANY3rKpSJ",
  "key15": "44f6jSMQBP7qsBqFXkNXoJ9X2NXJxZkNXhC3d5mwGRnwxR9sa8V9JaQwdUFMCdU5FayjPQCBFfSo5zH6ahSH3yoy",
  "key16": "2oF9XtNnTxV7akbcqBYXL8mvuzhvmyxx9hqzWBkpwQxGJiZa46nhfjX4iFpSVTYBkxCXJ9w4r1xMVyNPVbmroE73",
  "key17": "X6JirZDBMrmnAfbXdicibVmTnKSoNKNVjGZTGpN8GQXZEkQqWZHQH2BVxwJrSkAyG9zaFXCNwxMq8P2xZaGzT7Q",
  "key18": "57QF1NQckog9L355gfx53pdBBPVNenu92LUEGSgtGggqTBqPuugQwWkjE7H4XUBYn7wvrJy8J6u6ChauopEYLDYv",
  "key19": "kPXD83MUjCZRPwCmh4xgxqRv7rFGq1b3w52Rb4TnPz8yEgN9rqfrNb7uH4mbmFFcCcGuKHz6nzeGkmCpxEBJ8JS",
  "key20": "4VtedA9sdYHAEUo2CGKSCQeR98UboUj7vfpSRmtt9wVBdWx2npPNuu6PCWhgWva2ycQ4uKuS9Fxi7BuEkXyz3Wh4",
  "key21": "4nyTg48ETnqJAvmhaYTvqm1BLa5F1He2ZwW9ZCWAMYqnixCUCFXBMThWxifmc2jwxABFjTYaCsjQLnYoczJfYo5N",
  "key22": "5AgAZQDGVD4vmKD7KfJXUgsNFjfGsyntZ1fDs81DVX5DkUwUgyAm5bJC5die8p4BAhkqWodrcyYKfxdeSUuvymSZ",
  "key23": "fd4nAGSDTrp8m7q4epjEtVALowBVNW9m7FcmZSuAEPfSdt4qB738YbG9TMqJgFeD9goFno4HXG44NPhbZpGCnFc",
  "key24": "aQV5WaGfUPc1nKcHinJLE3V4AK1Bsu1GhhMMF5Y6U3g4zJKny9bzAT213dBTpfoJzCyGdh1NZKGaQ3BYTc8D1Lp",
  "key25": "2pyT9xGe3auh1YjT567o9ZmNANUSKYerF7aTYUWAX5D4aTmMMsVMTEGPmfp9VAPmrUmHeF4tVqxDo81QFXKwgB76",
  "key26": "4Aot7HBJTnrLuC3j9HkA3ifYSk65yU4nV5HVvmYnNWSqLD4sK6fwqEy4ZtbXyg6aByh2BZ2F8msNr7bEPmDzT2pc",
  "key27": "23zeJjPXVHjvR5iCewZx8KaMzCbAjNCqKMcNcLXgN3DcmYrL6XLUHWecapAq6VAWXCDPqbXywnEsjTHyufWXVHAD",
  "key28": "4mJZXXXqfb6k58GVbGKm3erZa1WjwLXgR4ovFkDxdcXfuGaQD4ANPjtvT3XsqiqSCT3myWCMLTceYXupjdGfBV2B",
  "key29": "3xfPLVfjGzmiEX2BzqZYmvGrcj9tsk596mCSpuwNsLBvmchswUPgFu9mQ9vT5xWQXEbXiktHn5LKxZPJo4rRL9sC",
  "key30": "33KEK7e77KohaDF6jZENe1Bv8d7N2zhFfbzBnKdtsZr1jsyZakG6amJryu3kHU7cZUyucRVLTSmt3wv2XHcU8Y41",
  "key31": "2J7DMXuvvFXtouX8GaeMdDNm48CnngRmZorUo7mre5nyyG72F9MhQJowkGKrHoUC9YG8BET1uQYtz5kRCzQpgaVf",
  "key32": "2MXAr6WRyMCwfNj9tnjQqZjSsLHtzX3uFfaJ4cjwL5zX6y8p6HLpE6xsyBomnNQnLzLWzMVA6XdZcswjwacK32gn",
  "key33": "4XDM39mWAYY2DSHicKDMRM8JAWo3Z2MZNd4M9jn5FYf8jZxBPWZLSB7L3DCh8btz6u1SBT7LMf2k4pXZ1NAXekG",
  "key34": "4ohxHwKnC457sxwbYjTDCYhAXA5YhwKFbZY7g11SSdCinypNVzfjghfqXVLxhrw1aEr9JTHKGKtSwWK5bgo1vNcb",
  "key35": "49rohwmRJse9c9RXenNEU9YqMvLZTH4x9Mg8zNvZznTLfHCSWfCRv9auCs3oSwKPPYQZyaT5n2dfPrqKEW43J6aj",
  "key36": "5rXuBUcCNy9yFHap9mc8fYFzgMGnxn41j4oKPdkPWzuhGhHR1RHG4u4PXgvSTzZSDno13E8M8ff8U5fd66ZcdZK2",
  "key37": "4yYaNynhZLRNFNFTyWCU1bbHZbYagXJV7hdTirqiGNaNEUdxvRyafEBDWZa77tCZhKEcZKwr9EJChmMJjnyUw349",
  "key38": "61hELbAz3UtbiX5zJTSnMZVhdUwJuoaieEJ7ESusbx1mwGVwyygVvfTdogWtgVf5wqsH77rppFCdAEd9GqrazcSu",
  "key39": "2rPQBXVtNzuUzJMZr2WZpvJk8a7JxmaGGgh4PhvUvew9zSQVf2GGey1JsSQcCZPNFd5oFoiegFDpmGuuyS9N2fKW",
  "key40": "VCkNsGjhEzctPEqD7jPBEAuZEZVhuKkG29xhx9ePierBVxWPhae3pMHPUwGDLWdisfRBTJYKtT8VX5b17cFu4M9",
  "key41": "UwHsaUyQGzeFeuvK4gvjRz5hq3fADjRHxQGvjxdPDrimoAL81XLZwPcNfzyi93Sp3Db1PGbc9Tsiz5FvbXJS1s9"
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
