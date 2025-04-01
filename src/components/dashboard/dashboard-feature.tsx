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
    "2GewLgEgSKRDNCFMVrPeKxCubmYk9CVZqMEUo9Vs29xMtBYiAnivFVHwErLVki7hXFb5YVnBTf5E4HeFctLYbfQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUYUy5etcjRDwmePT8NoS9zNq7hDffy9xLyqrF6Vdzu6YNyw2eggstBybr6Bgrw3PJry36NvL5cLqXYkt2bZVsw",
  "key1": "pBZXZwURhRTDWEddTyQ5GFWZa6KawasYMemxLTjBJNau9Mhu9eXRrp79zn3vDRrKkb3SuKT53pDibtvkAbemJSp",
  "key2": "oC3d8H8hNgmxvUdVgLyGVDGWTDfxCBidqLL13feGHndWFHJ4hgETyzqKLZS8kgwrHCBPPpPHyqFuZc1NkVFmJ9J",
  "key3": "QBKfjGwNPfQZiR9L3zC2oioNEn4LNvEhwu33a74vU7qWE7pwxQd5eS1Bc1mJFtdLGRaTnDoYmV3EprAM6jDFAit",
  "key4": "dVnhtA6RnFCsDqDDEN7yeJaFrB6czda8ywHqt8kLqpdrQtAqrCVPf9RFQX8nX4FkNdjzdiMJ2dKiFZyYK1ytakj",
  "key5": "2PW2czmbt7GbKPsrXGKuxbrBUvovp85nJPEwgqcq6g28RgEou39j2kYXQZickpLDEVjUZjfSrMw7GpuSfjNfErCf",
  "key6": "2qCsMaHbFn2ou4CtcNrqYKwAuqurza5nZ7P3Fy85btWpfGZgmEB2Ps6dDxmz4ULYDY2xT7F63Cn8SWcX5ha7YjZy",
  "key7": "4bmsKeaSyh3BMr6VdR5iRGqzRPq34gkNzzhoR2uiSMkojTwLwRawwBrFzcPgK68cQpjzms1XapNrfdr7MMUQZViv",
  "key8": "4uARXwv3YMM7XqMsRKzcZKq1ZfkDfZXxFCkPbrVjzHA5nR7MrxqCcmcV7pf5PXhZys8vCR6Mb4WDippUP475RXLt",
  "key9": "5tfzmL7ZpXKEp9F9sS2frHnqfuZBu4iRUCQmwLrka9LGZz84LKLHYZo6wqvQXMKQog7PvUHwGvkgBJcjxL2GqMYx",
  "key10": "3rHA6YWLfRtoqfW4NQ7xz2dJUjzggkZBCYTcpQXUSHZXqKptKRQxMNXCTFhkYuvJTu1U89RQBvrzQsDioC6wrEUV",
  "key11": "5TzjuBM99sZ8HLMbRKWS6oEoYSYH6XxRdvvu41bvXobKgReeqatdJQv3tv8pTyfY8vHyW1BvV5Do7dKnmUteD6s6",
  "key12": "UwWeMz66FxXAr7joW1nEgDaiKdTAh6R1dExPuukNTTbAqa2bXUosmxpjixs6maQZjNskEP5s1oeKsvxKBauQv61",
  "key13": "46tDmQReEzEDNqQ4m1BDjsSBKSr8vkTBADmqEH3Zf7hzjZ24FeBLazFWtLUpDn16xcpJtyXrzMeH9ci6uQ342xBn",
  "key14": "4Qj17rEPNMVKFQ2GeZZzVeo1hCssXQubWLKFFBaeLqrVQ4ZcXMBv66V9ooApqJnsa7EGtNbJrcAWEjeE3uy13yjQ",
  "key15": "2RHg9gG3xnMB9Cds19b5aqa2qATwa3Yggbc13KiMRPiUfUtnD64EP9LguocosUiy23JyxHLcgeG1oKyrDaZvDbPX",
  "key16": "2FnkwjqTCbAM4fncTTEgtfaNkMBgxX5Gs4jR8PnQFw2uzCXBbP7sPV1Era3oRCvnu2LvtApAuC2RHHig7DBPAoL6",
  "key17": "5zDdSUyrmYk8pzDgq9WDimXHcvC7wYHgEUKurQyUR1t153fUnmCtmJ3NJkTvBJSBndsRxohrxsBidANPeorMUh19",
  "key18": "Jmjf53YpqBtSRosWjruKfb5o4tSBuXgZ4dE1CS51AcM1VjTvY7KoaskFzkVWiYQN6X9i9y7VheHUFHcr3c5J24H",
  "key19": "4xjvzBvdVp6tUBsajpZG5L2VJVFykMbDUZovNMZdtnPki9A6XA1ai62uGMfWdWZq86wMA3GPoFhu8tNr7ex2SRPh",
  "key20": "jEszwVXBnmvsXpexC5CbdTmJmA1Ymeycntbqv5MwESrX22zm47UqpyG9iRJkptubDaiv99b1D8EHYDsBtu87iYN",
  "key21": "3jMYVX4UF5EoZiccBDqSM9Z8NcTW2RuMSVEzcVDq7wkzVaq1xErr2mwqwgCmRwXD5z54zjvdCVstxC34npLqiTWA",
  "key22": "3JD68bNPF8kEAcaqpTB8xFvjVvqTtewZFTtuHMpq9crsYw5LBKBNKt3jpsUnfCYyUGiLzCpWSePFebfoh21k7Bvz",
  "key23": "3ZEaNSU1gbriMbtHrW2PL19H9bNY1faHgkRGW4W3M9LUvDmXF8LKG5ktYa85ZjQ6g6TjiknXgqmFvPYdLQgjFfHp",
  "key24": "6s4ed5ivKhCrgwKftufubAq9bucpxwJJNZgbKNDEBYTJk1EHpQeaYkZ5WjzuZbucUG89k7zx5DkR9rWkr2kjbBf",
  "key25": "JUHVqPMCQXGhy1o4Q3Pf4SyyxgHP1VJb1ScXVYRdqjsMCDJf2JzkAt8wR5SG7YRofr3sycBFnYuu5VLdEr6CvF7",
  "key26": "3nZ9k2BfxVrCKtWoAeBMq7sQHQQtET6o18xtokyRxqbeNDUAtoJQXCYpqZjKV6SMokDrT1BHKgxXT3wLK3kKueM9",
  "key27": "3AUnfMAhEfWLH9w4vZpMXVpk6w5CSZtk6v7niBusFzzJPLkSRUHG5b57hCysCNyHvvKVHK8nAKGzSzjEd3yQ6evn",
  "key28": "5y1573n5KhazFJYZxqXLZiBGLU1hyd6hAyTbDvtJh7AYBF6GGfpYesu9GHKBWiJsZZJHRnRPWzF5XK3aFZUwBjcT",
  "key29": "4gDCuQw1NJXYX75d5fQgbTiS8cWudfcqttZQhcyYLZLTNEaF1qbAwYm54UvSNML9zKsz5pUKak17WJE9EyhSP1LE",
  "key30": "FVW9NuXcHro9GMBsT4od6nvcN6icptV5YQ4Ye6uJ6fYURaG9CB5K2CJkJXmFCtvqEzBeCCVt11B6iiyKbtSUja3",
  "key31": "4awKoJK8Kt3Kd1mJXNHtW22aecxQNmSTBxPvBS6KZvwPFtus89ZZtUsCFjA2iqDWFw4eMLFKpWUmffLk4yKJ4RMY",
  "key32": "4pfG2EfyPo94kv6UicgY49YZ5KbuCvR4ZU7eokzfhuVAzzbjKC4T388N8cEbQDCBKAuMCjr5fW4snKUMrv1mFvQy",
  "key33": "22Q3CcGvFKw75uiZCRwyRu5sxJzi2DwLTDq5LWRdgSKadwabxCpgsj2L3GfyfrhTM6GrN2Xmznv1RbCr9wJ3dmGj",
  "key34": "5dSNDoDSTTgjGDWLfExQhydQaYYRjKyxohEwzbA5R3N89M5tzRM7c3rjkYaofhP28sUhwfjxVfPzRtE9PGdXUED9",
  "key35": "3d5vmWcbEu8PrmdwehF5PEQenGr6yjwmPRGwjkiq3Ec24B1SJ5vpFDbkbRPjAkEhrfyLVTN3majREEyJDC2owxmu"
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
