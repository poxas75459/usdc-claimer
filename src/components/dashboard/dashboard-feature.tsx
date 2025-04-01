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
    "4NZFSfz7RxdSoq6mLR2Lf3nkWfaQ2wQ3bfvG5aeavJLudGHJArLhTdgk8edp42CzPp7uFKM2qR6LKFuy8pThhiCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCoE1B8Rt1P7MvP2d8XwSyMuJ6S6arPVCUYK6wpxi84EgBGDWN7eTziSudRh5asHc7GXa32ZDarE9TRPgU8Mjau",
  "key1": "3tFE3o1uEY7hNqmuSNJDLNtQErRtovRJJ5Sfk4Z7v77o1xEMreCoLZoaq3Rm82K22ucPD1VJtExMYJgSEDcuqDFb",
  "key2": "5rdZG3xDu2cuf6JiZ9w5HrXzxagQvmRQucfLZVDSd9cSvT7FJDi2BHKVfjiQBrvb7dwZGZ4RNNP2PTUZZkUDEq5S",
  "key3": "53GJhfA1geGzvcpdNyXp8pGt3FTy1MXWb8W3e2bPbYkunH3xDSDCehrMggi6Bpra5kWHxwUgnHgMrsGGq6i2TB7e",
  "key4": "541tBbnmWMBcPUuYhMcZSuRQ1CZQEL5GVm7ersTS6wUbsBLFrNhTprZY9UVAio1CSHXB8TjK5kXy6THSZs4vW7pg",
  "key5": "2mJ6rNKLucKbEE1GavXDkTpTDa8MX2MS4haQGXjfzysXFVDkc8rbk6T9j53KGY5YFUvozDFt4prbikcak7zuZrHu",
  "key6": "8FNCrdSiq1qYxEuHe4DUy8SnfsofWuDVp3ooGbFNFsRSs36vCVsB1Fr6BdrQHt5CLDNPVsggRRHJRG1bLz7bAJZ",
  "key7": "3p2uy7K1whHYT1a39VwGutBvvaLNUqGVWBZ7edHH4Q9275VYYjxt5BuX1HpLz9Pzm3XM1tka1X1Z8Xn5f4rwNw9m",
  "key8": "QAvd4LcWXFCwmf7vneCK2g1otJ9EPDPadSycHwbAJBFNPjwzB5qmcAHGjUcAWjVEFrYwcRGNr95HYkTqnjoNtYR",
  "key9": "5obeyBMS2nu1QctyHvjXgNg98DU8QF8TNMWubuMhp9PdXqn6b5jfBHenJYHLrpprEVcozg1TCHBuitwBXkPnaEdJ",
  "key10": "4CEMgSAQuEyBA4t4a2RxogzPaTceEfTj8Go3oqCMB74ooJX8bxEdSbUBfRAzjM1bVXm94UdVmoBAMNbc9znqfoZj",
  "key11": "88mgmQhBFxdb7fCwqyS5fvYSis1qhbZcHVf3YUwa6GwUUZFu1HBB4iZBEKkcS2BuGBEijWADNamjG92GHDjbEh8",
  "key12": "YJiJo7P6twdWqb5wfYDxd9pqAE4MkdsiNFAKwK9F8NFXfPLEEDM5HsUwdEwos9m8Jrsb5sTUTywQ1x8STztXZUi",
  "key13": "5dSQLB9hixJtASryQshjmT6kBi1iGjrgiFLyhLam9Tg3tpakYumkscoJ3bcXYkzrWgJDLsoyWqmQcq4RK3b2j8qQ",
  "key14": "3ERntCNoCwyndExyq4dkbmWaGLNQG81SdndptWdLC2CTeT4p2AatDdsqVBxJaac5sBcvc4NQcnd1hGzHzkcPWeK2",
  "key15": "2gCTRVQZUxrdjgUcaPLGacmzyJX29Jcro1WU2Xypf2KgfMfvQrefQ6dBUpa2LYyi1WdqJ3yCFkW6Zui2bCjsyJVG",
  "key16": "KE6LHMSRUi5nvzSSBWxxc9TR3fvv2pMmDGjrgNcwEUACjxQGn1BR57rP3LWZc5NDvHt4GBJd2xG9VVjC3YtbNWx",
  "key17": "249CkXDFuxJaby389SySnbmqssbZtGVhashpefrjTv6bnioZEbDEtwEFu6EKqAyeotyzpADUtAWQUNwBnXtDMPJ1",
  "key18": "4JSKHNeMPzAg7UqRDCHVsxJFuW5b6uz2XqRdqc94nS1xGt76eU9Gyn6qmTjhxV7ocLSmD7Vy77QKHWR8K7oS2j3y",
  "key19": "52WesEy9UhtiZERqFnDPm2eqPWVzv7pWNZVkLN5jwtZwb65MpU97rMGUSAnufdX2kP3fCZGjBr4TFyzjHc21szEv",
  "key20": "3JRKu77pnrJjjgDZq24FX9UKozDxds2BrCXFpyJ6vUtn7poEHe5yQTisddbHSKbcjF1wmQ8KKBnDM8DQGMsJ6LRg",
  "key21": "5Zg1Lx3V1y4gdFn1H3D7CLbozif58N2yc772nnz5FxZ6v1SeQd2pfa6HpZkq229bkzheFiggoBQYEJkQ7FiQRWBH",
  "key22": "t1zDBoZ6Mo57CJX9KQ314kHwi9VdJsA5wArSTnQFhdxvEMoHvthohpaUfwxTskmSG2XeFUev7GGwbYm4Fzk12sg",
  "key23": "4aQEMBBjutykz2uuWPmiBycZndv2iAMNjLmWQRj64JozRfAyTv826gYdfHvpjSziZ4hrM5VxGY9fBtwjPNVP193m",
  "key24": "4QJLVo6AcpDgUboMUFDNRuH4SqVUacsxcQjFetshq88iTZPS7B7no84XbBE4Bcic1b8GcTVxFMD4FCHdJGDhC9dL",
  "key25": "wKnQVTAgk7o8DXQa2BYu9RTKVenL45mQ86pPGzZKiiNwj44VeahzGZSaMK6vPU25UMxvsr5tHtKEKZ2sZreWrMT",
  "key26": "BujtYDwJ6nfVCcbnWe4irQdRz1rwKbCgnZD1dhi7jRHS12iKtcdwH9yAcziYqw8sbUp5fVLw3GoMpAnCBHniQ6X",
  "key27": "3QYwWC6usGtQYoHjAqKr5Xh3e4FWHUWUS9pQVnawad5M7BgJ6ncLTAnT4geHoi7WSwbdHjcGwGNFGUim2MdNNPPd",
  "key28": "4rF1NG9fq2cRk6iNSVQcXQuSyoSzHxgfYPpW3H71i9RPDJRhiXiGuDufnZvbac2ax3HC8ph4ZNB1HGa4G7xGMimw",
  "key29": "FcM4iS8aLDsXaYKvyP1K9WCaoGFGFeRtoBSuZHoGUKzWbKLoKkQdC9LvBp4UDGjqT6jJvwKgmQiFpMjZzHyXAE1",
  "key30": "3VQyyMWBC9TSaai3krZwbMXzPaqkNEGwn96CMhgbF9RoofeRrRDbJMhZ9C8gdvxiKZ1JqyDow2Jf1xWpwSJYFVrG",
  "key31": "4DhPkJdQbNcLmm3K3YkNp76G1BEZdEeP1K9kvQMUKsHaVZUXJe3jdtMFjLdKrJN9KjQYVnbaSd7e6d6pHypiNLCC",
  "key32": "3hJqvFZ8XmimkY2pG92m1WMnoz7HjedPZncuC1ePYFGNMX74KMiCHwCKHYUoF5kevbqrtWd1HSafdgQSkW22Jxhv"
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
