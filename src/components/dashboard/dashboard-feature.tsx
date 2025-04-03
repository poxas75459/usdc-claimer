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
    "5Fozgb9EqGhdmFvjb4gEL3nHnKWjLkDK3hi4o9KTQmNEzhgTbDc6yVSyN1UgxydpGgwFJiiGdxfRLmw2BBZBSEi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zmz5P76aKu1HQN5T2vN7nbrXjVrFh1jugKNj6AHvtTYfdjr9kgrQU2dvgpiadNnwGSo6mnS7WFNJsrECdvzN3SJ",
  "key1": "46t63t6deurNmpMtc5Cs3ko3TsF4aXvBCW7KiCPitx3H43gBHU2XobUHL1RR2XaZzNVWwh7c2degPwVh2ZEfRC5D",
  "key2": "55zrf4okmh9XjKE4by3tnb62QaZXqs5wuXtTpbSezR3XhcVXznUMzUeomYG6KnDdiMFdENr5CGq9sC8L8wZAsNFC",
  "key3": "3C1Wd1TSpKC5eYRZ4MKnVjGixeHnLBpDPwHYijUL5x2aRBCQCmfBYNG1bvx8z51DQmhmm5rSEnbx1EALEzvVkf42",
  "key4": "2u2G4m55BfpUsvieJTRQsv2KzuiQHFbWYhWS9ofWm9dMKBzZD8DooZeuygVLrAWjAh6TTsxscUuMxcLup6A74nBj",
  "key5": "VsZFHBrtAK7eLfs8F9F5Przj6RvfDUtwVUwWb2FQa18annnSbATTU7dJRs4yokGNRrZELzBk4tWfWqRyQJJKs7i",
  "key6": "4H4ZpycVAet5i9A2WSovXV4yNr9CUoPpKGKgsBHrh7MvHskasFQ8zi4tJvJzUrseETik8CDWTxLQtR3Uv29nKy4Y",
  "key7": "cf53ptA6aCBh25R7DFSXWUAR42LYoV7BVtQtceHn7Gk85oxd2zd44fDhVqtrLaD6N3gkL4ULjeQrxSba1qbFFeM",
  "key8": "ku4BvWQ3XhkgJGuLC7LfuqW39HSXoedhGaJ7LKn7SuZhkrtf49xkUQAadt2Kc75drgjeepJiDUnGPyacWAzgQkw",
  "key9": "4nRF8iq2WZHttLZB23zUfmXP39vLqMDttBvg2bLy9v7fi7NAMVXKPWPDT9KUEUiQkzXveZM1YcC1WoHxzgSwVbFM",
  "key10": "4zenAtGsCwWoFTuxXzkzaSSM6a4b1WipkJ2ZWMBQS56zUJj9SpkNsJYttAKqMQjopD9NMH2inZqodppeXXmNMqVv",
  "key11": "3mbdRFgeXptinmqZVD9LT6vtgk2qtrFPLzdHBJH8arUiRa4mDmsLWxkwjqFmqyMnwebjzvexx1iutpuWBprt3tSu",
  "key12": "5bSPMnWzBcXAk2pp2uauxkSVi1rHfjBBBS1o5TtX5jnbhgD2W5Yb1FzWp3BXM35JW8zWubpMTEGQtTHDCy7oajaR",
  "key13": "3Zw3yGwh4tEY8dBo8QVbii8MoeiyJAWazvd8K618CXmkkUJeH1kMCNBauJDkAHZ9TzsWW27c5i9uSx5z67mNHww9",
  "key14": "uDdNycQtyn8zwYarpKadQHAQYnZyvDYiM8tfEkVMg89ghZ6VZtxfg34pX5uLHXnos37yPdUyCkftetp7UGnmd57",
  "key15": "56RCiwUM1Szni3xjupFU3yhdmjZagCb1Yvn1swJhCWUrAWBpNcafg92QrNWgrw3NeKo4Q1GGoC3ahYex1ib3i862",
  "key16": "rKnGBhxqsZ92WNJhTG5C5bTJiguUAqXyTFpSytX39zmkuv4DtV9PFtNRfU9253vKhKCMXnqEZrkY2DT113vY4y9",
  "key17": "4ERfmZEDLqAA4DjVuTJfv9SqssrwTV6rg3CJM3GdJyJcXyGVxGg1rPLHmFcBptuN2LApP5BrZ5osTvgb1FMpjqKD",
  "key18": "38YFPXWoLw7w9iLMBYx5shAskET1YJXE58GLLTzCBhmpv3tnYjToudmdgPLh8449eVeLwGRYWq9HSTSWkkR3K4i9",
  "key19": "2WTxUWewi3wRSRAJe7S8Dtt7FcVg26UxBJf4A98y4BNttg6PzeZ1HTDVcu19BWip9b5YauEJWRMMnKzvb9k2nzKH",
  "key20": "4qZoNBhT4UMs9xwQg4LivT5qAW4dDLbCYLvS3asMcLCSBetjm5Yoqjqf9VF2SyW9C163Laq3eDwJqMiosx7aD2CH",
  "key21": "2wVadTjGHmAzkz6xiHsXcky7pR2uRDHG3JF5UtMTMwmnRAeCDvjDFBwdsZD5jCimBit8jizuJrySxdPSWS23UkLw",
  "key22": "2uhUfzg2MHGT9RbjcgLCpiSMNYZ1nHxHgjwqXd7L1228e3kokcQitLKkvtuDniHf8qGJDM9V9SAjJTnLpQGckav4",
  "key23": "5Tym7zvGXsBN51Ad1b7tz6qcWJD9AMYFj4M7RTSwQMRjAhoZY5tbRbSN1useaEj5ddbgNTZojamoKncSckSMZn5g",
  "key24": "2eRC735EBhusLzK1xuDvC9XoXeMDAxburzLPavMLgYjBoyo3nX3YT9d9wDV6qdX7kRHbYWEJ14DrPog71eH8sTsT",
  "key25": "2UnnqJXpQv1XjdrffTxqeyL6XkCiWU1NsGtcqNLtDBpCwr8g7NDg4tivxb5u1ABjhAnsM8XxyeZZ6LPb5Liuvz8X",
  "key26": "4rfhud14NWZbWhVFQQGRfFAFD7FAvWpQn1yStQJjfXPxbxDAs1cUjZMMmVzvbHaBncejqkxWT3xcC6Wgwog3DpNW",
  "key27": "4EqeMKstuarcd3HmHCahB1JiWfEN8vbaijBfLVUijWUCDWNaaF3FUmzwCMtbWf7psubCcHegtAijnVZWTrWYPWDC",
  "key28": "2K9bBFcXrd9juQoarFDQmiF8PeZdDuXJgUjhYrcsktnHun9ELpPE7eYZqiPA2huRBCKEoDxUC8P2mUYiTmDuk1s7",
  "key29": "3UkkBmKfco44b7FZfVEGSssHPXDgdVCrhXb1hCU6LXnyLuB74Br842cV6gWu5JdrbJLFteg5J2PdyRbNhK85rUg7",
  "key30": "5xvsJKQKhga9zHZFoZDaGAX9y5KQ6rDddTz3sYH4nf5YwB5a4WLvXcEZJN5juxb9ApBLMXDgV8L1xfwi7rbkD9mB",
  "key31": "UtbkPZnmJJf8U9KS2ZTj3T5B8MfZ4qFFGtvEJ28T1PHLb6LHs1xrnUhPSeiniGV3AJZ5uetXyaP3Rnw14Wr849g",
  "key32": "2PXmGEz5ezD2kFoJmv3GPNViBEbH77Ey2UjkSmteoxBym9Bhd4yyL8LPRRM6iT17tmUyo6s62RxgfgrWASdaneTF",
  "key33": "4ZBfjqRLis1oiyGHNSAhYGKzBXfsKcTKUc5sFYcdjjkk7ZGGQXBiN71jpFMLGyqeCTgALg2VBuigDpXo58mPJp6p",
  "key34": "3g1uBz9TEhx7SYzYas2bzWgTjmiifqj2Tps2YSPvAuoErFfn97WPAe95XkdmEbvZjKPM2HDGexMNjXFdxQfxTWwC",
  "key35": "qcnPPxzbRSVS6cNHZZd1Wd4BTu6pxaXTfhLa43UmVdNcWBD8QtpEg9zJtDNrM7dy99G4iioN83BGxzBbSQsYrsG",
  "key36": "27dExDvrmCg3cmygjUGYxKD61JFFwDTrt5Wox8j21KsmrwkcqWW6ZhqHhMKnH1fi8PaMFDwTuHDfjy8UVxYKpubK",
  "key37": "5QX2yYMCp5TeGpeyEiZn1RTzoDYc1HH7TVM2DrmBvnH66dvGK4UAUdCQfLtBeX5WgF7iRhdqySCrHu3zR5nRfon4",
  "key38": "5NAd3qERTy46YosBa5fF32PvY7PWuK8oLSMvcEjk8Yq6b8ZjPt1G8vsKrWxNeVzxERANZTgWf8UvJZtPRkm3Ee8Z",
  "key39": "Zo92yNPgkh4j4A88K1S78qyjEBzSP59NvBSdjYZPxVrLTqknyidZ6yVws7bnVG7oMXopbF1frkLfUTtEwRnbYae",
  "key40": "61acFtSCdGWNWgfkHPuNqPwkroYE2UgytWY9uxehsNEXMHJ7WWAdwDN6dZa6p7ERXCEfNFGfY3X2sAqsid3yQQnZ",
  "key41": "AVX9P86RTA3ZY49rZUUPeHwSJmQ29hNcRw6iKL6LRKHh2Fspp3nnwGUpzJsJUZVPJFsPx4gud4dvGZwCfDb4oY3",
  "key42": "4yqRNDbcMrtYmCxooL7inoUS53UAZqV4mMAuuFbYzqhN4tHkM3UNBDkpgbjYXa2VmswE9DB34ap6UR4WoeWLHf4e",
  "key43": "2omzQSq8c1qqpnjiK64Pp7WtEpixsyQqt2EZ3s245STfqGNq1iAFQXy8wcSJAyqCjGH4W5fGe6iUD4BXZ2RpowJT",
  "key44": "2q5fFztzSbN98V6gyxZhKbjuYsZ1cbbBmU38pdLiKL2Vyc7vN7kKaZvmNvVBjkj5n5CSz9Hotq9QYyVX7TPqye6m"
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
