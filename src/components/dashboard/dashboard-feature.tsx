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
    "4CiDypavgJEcEuRyaRnBE9h6QGmmNxGUC9obnoxzgWEkAJ8SGRytS1wJkmUDqnLrtemQWUWzh8HpAmddQKbeL6jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWmMgkKLxrii8Q8GB7uK4JDrRcSBVneoymbLFfbL1XXk6HE2c92nsH1LGEAnyy5HpRQmuWfpPCFmCA6UnbfjjUk",
  "key1": "2G26S5BuGJCifd7tPo6KTL5CdYJHvVVne9nt1i8vuTEHjQJdxM9X7hodrT6dt82tfiULGWwpsr51KAetits7MTBX",
  "key2": "4Hx3y2kxzVbFzdvCkkFyEXuBSCYz22dg4yh87bsqg3qwv9gCCgqSmoJ2U5y9dfv1ge3WdFEFN2mSYHkeMeF75LGC",
  "key3": "3y3wHnQcX3JNvZSsgkpe5JB7XBRJRyRP5VthFWDbwe7q91N4hYJsVhxA5PMqxL5wXQ8bGZCXdksNcaQQq3XU1PLL",
  "key4": "2MsgdpM1ERfDxgS4bHAiqriyD5kZHx4646DgMih1m7orBfd8S9LepXUmNqGPupEMC9c5o7hikP1PsNgXc46m99Rs",
  "key5": "5mKkr7HTCJ62VrZZcwFvzA2FRernFUSrWSzcxhQZBA6KS7pRy6NoCLRrAyFrejYRwoih7QGERAb5pWnqvAYdDpt7",
  "key6": "5Pov8FozkNDgnny4yYj6Mvzq2zytWegVAG1n4GB2EaGzxJtwRfg2uT7nDGs8zXJudqFtVnFAEMbanH5HNLageSyF",
  "key7": "31v8Twvjk1tj66BkByT8TYxzNzZxYo5m8vzGYarJmVrdPcWGTye36Eh84dmGTom3kCRF4iJFZ91kMEeV138Ri8CW",
  "key8": "5RMsGNRqSmAdz6MLarxHA7HZWWLGuDCbrNdwNmdkvQsmjzfsbdqYWtGBJzNNGqFWfRUZFTUoCD7NrLdgAmjYHSjt",
  "key9": "3oe9mQ8mcorkg6UGztM3JMZUhhQZQhqPJrjy8yk1ftfXAUuPyb6CMPCV9qWn3rXhXszhHcmpqD59tVERstoNLMQT",
  "key10": "4T2ynVqN1jm7KVE66TgukT5MerLsSaLLR2DH3LNp4YJEEjJZYc7tkZDqLQKf94VY1JP82iaYGVWxoyViJyVf3PUK",
  "key11": "2Y3ZBggGbnE1ZMYUJ8CNsJHGgKD5aYmG4LYgjepzVteoNTSxXBmVJHeZtHzkpPjjXGXqMhdwksUTLfQLKEMiXKmh",
  "key12": "44vUcPk1hhDPU9V81NeVhDCNvtAjiXUvjBFEWabLpxt599dpDjB25xySZ7qftrWxDVKnfdQSaZgSQzD3LxxdYYD5",
  "key13": "3oW5Q4dhpzSsL23aEMdbNkhJ6tzkkkhUJpWwXpJkWhaSQf4rmUhMeLzkv8qEJkJtSg1RzYT8UH7mbTTGSu7i87y9",
  "key14": "2H6as5sefpHidtvR3iXY8x3FHsvC6M5DrDTWHc79kt1EryKh5mS2VFg7MHSjjd864Ppn1ntHCsCyCUgm4wpYPDxB",
  "key15": "3heekms1h5fSJFXBZQChVK9UXPy7pjxpkhreacMPqSui8UZMxYsZVY1coUKnBPngfJaihJkE8hmcWQWKmWnHxG9o",
  "key16": "66dw9MKVN9CtxVMU8Mg5AH9KxhLuEFkV7NPiv6G9MFxC17Hounzbk4TPPbjfLbjM73pZ2MPuNysN8MiXn9sRo2eF",
  "key17": "4XmP4yDgNns8bxCjv1xPmGmYdV17uxsJ5WptGk3h9u3EyDdekdYsm49wkBvzeAH5U3iuwRXoFfPABBzCQ14a12Qp",
  "key18": "4wCzAZN4XS24Y2NLDk3rwJhiX4DZL7KfBLd5ZWBk9yYBfUVkp7GhaxbSVWtBRNxGAnjtk2gAFaJfN4kD46Ch1mAj",
  "key19": "5dzuTao5k18F3xniXkwDQwhhj3y3E9aXobBHv5BNZhATsTd5TLQkALy14hWdugEn9bDPPThb6qJckkwWCqffb8sH",
  "key20": "5KM2my2b9jBWCPrA9qSqkiZjsXxZnnfSsHZ3QT1MBwYTdE7YSrcduP6FXCrhkYr215NRrruHYVPSUMYbgWVmdFrt",
  "key21": "zw6vgC5SYd1HiXSjhgtMeqenwiLVn42gebfTzwQHZzpuDhVukqfP9dcqAjpj3oNqXbCZ3mnxcnFdUQSRZ4ZAYJf",
  "key22": "z5aqefpiz3zYsysPF2QMFS8c7v3RPjtdcDoB6Y7RcFx7LLc8zDQ1pvBaZJymS1wCdX7PTQono7dsbFTxf6rGPWv",
  "key23": "wCguEQmeqhPc4xgfmpMdQjssz9uoUuUfkSwRmxH8TGFPVaWJf7waKSL7tmBUPnPYK14WEpcnriEri4izc6sUfYG",
  "key24": "5D6fqyQjSPbGjwUTFf8826YZmsD7CrsbSyCeDexhxxyTC6Nr1ka19Em5J4xVPhaduWasnhEV48t4saqpMLrPpBex",
  "key25": "5JWi3JUcYVNTLHJPGVL5Wbdocgi2eMDevRfmxnq9FTSN7rdRxq9VjAVJNoQX3a8ssFHj19VcJJ2xEF9D2j6ne6An",
  "key26": "24T6ddehsLuL8zdF1Ue32khUvi2cVKou42M7t2mruQE18URpsJTCHKq726zfWo8YQkSqBnVwvv2zwihYz9cvd3P1",
  "key27": "4j1e8eyjLvKXy8aqQnoXG3DAHVMC1cufqwoS5fnmpeUHoGgm9UrkZgrRTMCF1HLVt8EzydmAQHmicj6dUu5wKXNy",
  "key28": "2jmPTmpsJCetdt4sN89rPEgvJCUmyuYoC5qDfGe8srhGxmHD4uh461P8mACdTiVfpopFBpRPJtBYqFArS5GRFXLf",
  "key29": "3eQtaKaAzt5rED3VByYgEt47p6haJALtASyiUAXT4fUoxhz4cCVuYGE4VGVCopKiJeRxhY1BFoLyRrGwAFr4wc1Q",
  "key30": "2kvzPLvXpjZbBva52yqKwpFDok1X7UWVB6i2XwW1SxgMDBLQzgbC9tQu88DL96UErew1psgYQ7ZDSfwVMDZyLCzH",
  "key31": "38wJjAKX1j4En8CnnAVUg9wTvr8KUHMqFC2qVUkWbcNA6YA9owEf3ibNqnrBQAR4cvSY2p5VZxoxBX3mQ7arMiRh",
  "key32": "2A8ExBVztXYJhu3jgR6UKmoEtzz6tubYr15efpEXmpYFYcukxwvqVNnDP9U4nuxaBWHdswRXTotP5MK9fvErRP35",
  "key33": "3MFMpmjS21Tu9tzUfY9iXYUsvRV763AqL8zgZhS2vDhmmwaYA5WpdXMHjCswjea5yBf9Rij9RMrMmGzzqhHrGn3P",
  "key34": "31zvShzVkEaCcmsmKkC6DqTa1bhSZVTBbTkUyVAd9e5jy42Rn4JVJysF7m34rFtnYMmVoBiaSo3QF8ngbg8XqMiN",
  "key35": "3piCUbusreUU28XzDJLJiXeM3ncZMosJtuQvDM4R22ntHC9MpMiRwYR22inL7nvPzU7ptK7aENKRJA9JGzuxdzDs",
  "key36": "wXdwBisbN2fF1c5J31skBtKqoQViwSD2TtGrH8JhhMt7z3VHLNSNZjQ1H3RLZimebxsSfgTMrJdbmt5UK9EBxGL",
  "key37": "4cz4rW8yUieyPD4q8hWP3FczGhg4E2MZaADdR88G86dhfRUJEdStfD5kD7DvodGcg9mmokkZeTWMFAQj3gU7wC7",
  "key38": "5YGa7fegHkgSY3nML7NbboZ7bP41adM8n469VpDSEpL1HdCvEhVrSGAV3ZMcgezrhGvt6H7ZNX7m3fwTPugstEf9",
  "key39": "y6VyMDkoF9XA9Aqu2jJHL3Pi7cHtMxSfRHgDLJwye2LRQLznFarXg5AmfYywCrk6JNKEMM2wgbiawqZJyCTkhYr",
  "key40": "3rvPNNzbM9EYfUDPbxVkLTrAyzMbcPAp16PJUYRPXNzPXDLnUCL6juzRqggePPygcV8UEhTk8jMcn7cgc25iBE1u",
  "key41": "5UqRL61QY1wK2pFQHR2qQq1D3nyRks8YJRkYo4hd3E61imgJyidVHe1YvrRGYDzzCzC65EH6c9du8Nu2LuJtuSsM",
  "key42": "5USTmyM4DpU3q4CqSga2Uba5JaTqkfBsgoC995MiinRF9w2Qg8TiXm2XWPbt26pUWVRz6wa5h2zTWNm1nA8SSTyG",
  "key43": "321GkichXRWezRn6MgTZZKPEDEKexTFiPQfoE3aTUhj6hMzS59EoDReEKwc7JuSz9AYQ3TQ83fWzs3bJAEENv1hR",
  "key44": "3yHgetqweeTJhP3ofts8D1GnPJPpyYFNGESJsbr4vUBmNf51CNPe7RaoUCXZSJBG6PxgccEXDoQaohxERY7TqH7y",
  "key45": "2aPw34CeZCdn3M7q8KidGFvmQDVhWQgXuzqqjhebV9huTL6nb9sfvnTMwbRUb8nSfFDJywPyawWYh51fmkKJTSHd",
  "key46": "3rxwV2QfrgYU6ixTiEKQYqE7UoxgdxrHBs9SiXh3seZ6wfjCBxzpR3HtGqLLk7i8fLs9ouAiXNFQvsV4zAie6ka",
  "key47": "DPXCdA3kCLqg83m3rnoPE1XuzDnChvWre6wDg2aJyThp1zLf6bRyLDb4JCLBhcTyFSBN31sc6rUFfzn1YDsQeVH",
  "key48": "6WU2VxxeXbMRZ73zaNYXL3L78v4Ce1iGqpYFK8nMZJKe5ZhsycbE7FYeA6BXbbEQRF9FJwBzqjd6VJnkjsciuZx",
  "key49": "5Ph4mQB5ATfCbBjTjGCuGe6yHrorfNKYHBoHLaYfSfyKktSs2dEcAiKgBQxSUYNYcmZ68Hd381oYUX8MfvywpDNo"
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
