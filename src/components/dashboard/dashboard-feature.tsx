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
    "2rTvMAtCYK8HhiXnePgLw1QrJrPNUD7Vc8fuS96eEWdvimM4N9rGqq2V8gdp1r6Auzf4BWrxS9D4CMJNUWfcAfqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jt8QvjXC7Aek9PUr3XC8JE2RjtB73WDqoZGTd5w15PwYHtAgBFaAQqXod39yv4yvQgLVA5rBbVegPSCYVhaEdFU",
  "key1": "4VCfy2Z8fFDmJ4cFFxY9b6FMauSqapfmKPok4os4QiUdmwe93TQjyzZbMkgcWnZATqcvwvivfFPfmRoaayHQ28uv",
  "key2": "4V3Qw48nxYWywjGWSnDnvkm7CqQwbHi9GWSaRXdLbCQpZ8zrseNVPswj9CnWa1bfpu4bDpR369jW96WFwV78CZ8N",
  "key3": "4aM975Y8Dm8okD38bUYY47xx6AELKQeAYEyo92zWGptUaS78DdSzLrVcFV2HZcKmG8s2SQYLVHukUDi4Wn7L3XaZ",
  "key4": "km23TQupX2vBY4rN1RbUot5gfPc1TP1zidXU1WHD29znSLPhappybtMxiyX4K9Ubz8zur84vqyKCaLtkLG4irGy",
  "key5": "4VEGJnipBcGaueHzKvz3K9d312de6mmTQ9mq37sJbAnXEo43mk2mBvhYRWkegwUTnKB7fCFgQ4bCBc2khiJdKyji",
  "key6": "5hsQJEH7qd8hnAuQ4NiGt1udY5Wfi5U9APdqESZxsadjMMjJ3bypZhZYk1sY7wjeWpQTXPNdjZWvtrv8sGsbAj3y",
  "key7": "iKtHvfjk67rSkWZ6hT5w6unjW3rfmHQF8vRF62ezCa2uMTpG2vaQPrbqNYzocw29c17DrU71DibQRCV5hziToQe",
  "key8": "41YwXgVqxKcoPGMfMcJrhf2dzeLr3ibhMMbWc6ULHywEe2h5FfShkFFFwCRsNyEZwk6mLfTiyMKJWGFZ3dCVET9U",
  "key9": "5KUJBGgDCT8sXr9E5RcpS5cdrwpikeNM6GqhZQSJBP6rCnugmA7GG7JCneB13Y37uhQXtxnNrcETEix63zgwteQ2",
  "key10": "MLFimY8gSYtJjjfZD38Tt8Vmpryc1oHRsDVMUJWJiu9nskeN45jSzYAiyTa1WK4ERA2TCmSoZpc58q3xJAVHBW8",
  "key11": "2T7PaTN7pP7zLLh7voHgtGzTWRdsQhb9vRQWXUn22o1zVtXYJuUnc44wwZuNfjAEum723YbggcwtmFssWSJgD5uE",
  "key12": "5GnVP9cSUQpbZto441rF9gxbDfzrsRtAyKBLr1vBqDvEEcbDV9HdobwNP7xXYjQs8x2QBoGfbLs2xH5RcsxDtwEr",
  "key13": "3pW6t6GbedzPxqjDWUM2hNP8x57vprNJkXhNEVKZF2xfSPrqAAevpgFaRR7zeBii7MwCgcy4tNtBYqYPSwJED6N1",
  "key14": "5tYk8Vc8pZSZpZmgWD6Gsc4pXjBrQhmXnnGTKBUqAP2eqbAf7g2rL2wFvv5YzyFDS3pBVE6JKEdUNc5gKAxBy3HD",
  "key15": "Y49WXrvNhwKPkrv43SRjSRNwE1cqe22n9Rm23W8SBnWhz3Uqj7stLMhcEjeffsdeUjwET34KCx9x66oRALj2Br3",
  "key16": "2uPPVKe5R271z5RXkn1GzMgwiwURPAvkyhhADkbBxqkcbVqURN9ySR8HtxGM1fhQ46EhQh7EYF3GKu1G1CBR2VbM",
  "key17": "2dpx1x3ZvX6jAmdhJHzb3URPuafhfcQHRKUtFWtdj4j3H2p2rrq4g4tDBA4diRDKoyEyJaNn4UoHAuGD7cxLPuyV",
  "key18": "21AvhWXCWvdEHbXGWHziSxgXJodscubYH4Pa8kXve1sUX5LVBmKbVJK241ZRLb22A6UcsUWBmdCGLEzxjuiY2Rhs",
  "key19": "r9QjPCjt2RarFnqjKkd613pnsi8BXo8zXXQQDPTs8cZqRsXLxCMMSYDKHsevUv8rFA56YtBSQHBQLT9pCDqyiNb",
  "key20": "4tAQnotPTamK8bqHbxqR3GXRDZSgNWbw273DcrPdrhd2anmk2gGQneQDFujiWYWw84AuNcwRyzezjk5PWEhxGvuH",
  "key21": "HTb4b2aw8uTN2ftDpM6Q2KFncyLNjcZS1XF6nkkPZ3oe1wHUweHtvdkbkRnq1wuSwbYrnuGYDN5K5FXf6AS9n6b",
  "key22": "DfEyPNhW59wi4EQkmbmifZoHpKtyKBvFwe5HBU7UQEQbW8us287cGYhQA9fD7Fzp5ZgEzyPHer9YV9MxjmW7u9X",
  "key23": "awV2FgfYf11kr1mFuGfDYnsVseMkgvA3wjsbpivUftkhSQFGq2Z8F5oX53g6A8w6bwBSDANDXJXxF4Ks2vYzjUY",
  "key24": "5m7Un6VKvuueiRV3q1vcWsjETeHuhzW3jjceGd5UEjKuRudtHLvAhg8gW6PS4RGhUSeeV3XPiS8MYppD5Pio8tTX",
  "key25": "3SnucKpAWHXVBeK6J74jWNT6EZh1G33mMNfLfHuWLSM8XdQTwGkXDA6JwknnquheyDTSS61kfSCoWFY4hWMC3Vwy",
  "key26": "64a6VujGZzP37uujRZLTCKxrYxFqDat2HfC9teXvUoNuPErH5QuQJFFGL3RkzRr8hq2VqKhpcY1gBbYfwBBn6Big",
  "key27": "QJBTy6EdZEzvLBYDAPcrzTwYELAL5rUqpYpm9whnCsHLQ2LAivJ51LqV3Vo3CqZB9MMdzCyjd6WsbXCpda89B62",
  "key28": "44rNQUfWTcCUfRAAoWnzCE1rLhmx1W5UoH946Y2raMRiW6aF9CeRW21pXUfKV3zo83RFSko7p1adYaV6uie7D52F",
  "key29": "2kPm29puQ4HtoprrP74GUn4i3EGrNq3chxyN86QCs2mrmnsPpzqjzFBp4LrDNTUi1SevsH4THwQnHy5QEmgKWqjs",
  "key30": "5aYz6tj53jnQWfUtRySCdgUxLE4L6hsoejvSsWGxDXcysETGvysgr8YrxXiNALsCb1f4hCi1ZV2fqfRdHGV6uye5",
  "key31": "28qFrAXoDHo8cYcMBYh9vm4cWdaN25YVyLuPqFyjniGgHiti9iiPjY5uvH7nJXBeZd32o6kDsepHqfiB58E34c1D",
  "key32": "2bFxzbDnwmBRjCFHRkBpBD6CSamHDbZSLXCs3AmXG19WgmMUV9PaHmsADut9HtQTwAaubzmnNMTX7FqfbmsV3q19",
  "key33": "4bftzju9tgy5jiL2LGjSBgP1dKfRsvsq4pUYpFP1jdcpo2BCiHmXgv6hG5FEDBe7ZqXxhrxVYpWxibNFs9wkBRPE",
  "key34": "35Ry63SgAQTYAxmRbVx7qtpoMmxSviFMSDvtM6mwCk2cnNuRwbqscFE8c7kcKkSihY6CSHSA7H99jHofEkAoJUaz",
  "key35": "2MmGKxBtrJjzaFTaAcnAdBkwF82mkhrNUviVW4RWtvWTUeM3zhd8uaGnFNjcyFmTvguURFTmsQD5qjmfQnnd8d4B",
  "key36": "qkjpPbZprowDJtqkZ6J4tUg8x1mwMiV2VzHRsPmp57hqHV1AD5iuGwzTnuPAapmMHyHty8pxZCibFRmCSUWYuBM",
  "key37": "2eni6Gg7qQWPkYRfgpctqUSUYn6rCU8hhWJuTHgCkwQ7ru64teQSPnCmT2MSUbnZkE72RSLQ6YdWWJzUSqKAdajJ",
  "key38": "8VEiAF5mKLfBmT1kcmtzE9zedy3hRxjQFZLUm9pVfxE3N9aikVvMKMxZrPo5hg5wixF9meicL7n7iDdiH7Z3rjH",
  "key39": "3RbChDHUpxbzxLdjtauy9HiZbHSbvJVau2durRjncjydBci5yR3mkt3UQr2N6D66BpigM7xuiNhU5TCFiyucyizx",
  "key40": "2wDr4WRzUkz8akkNqwWDX9upCMDupc614RtXdhCzUPcL1S5sSBZXFCLrFebUVRGgcREo8YNBjYFZFqujPpw7Udct",
  "key41": "464H6dzvY3FcEhaUH2Lh2nD7MVbmVsXsWWaGgakXECdFf3rc8USYu5gkuMYHuUQ4xYH4uUWGN4x1zzFYebjDy4Hj",
  "key42": "PMLuvCJucRrmGM4Tka1cuyjWHehRqZd16EghXZJgyZKojPnjv4shFTG5Mx9hrtCZuBjtSxDGxqqpWsJkoodwKJt",
  "key43": "3Xqfm93dsMuqqBYqUCCeymGom8TgCHdEFQZrFEpi6844cxH3JXKpNBHUmUSisKMMGaBWc9t2kQsF4JJA7mdN59f4",
  "key44": "5UcuKmWvEWBDwrvhrMRBvdwsXisusVw9Yz81mpioHjh7mS94WQFWCiCSQUWWhErMSpBVvwQvngWzNircSZ68oEzC",
  "key45": "WWMRZYU4eiGqbTeW9YwYkUHLeA3XqNJvKh3JKptViHzLMyJX7QxXKWR8VBoEmmG8W7wWzdHSM3ogkDeZNUu3tP5",
  "key46": "2wvyahWEGdtKwZP8YsXvKFPTdkFaxFdjJHREYoYEKvmp85311DGBorZ5EH84inJoiz7gg3jT6SqJTtyj7PUhyax8"
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
