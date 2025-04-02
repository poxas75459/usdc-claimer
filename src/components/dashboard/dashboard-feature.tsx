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
    "37gqVTo1R886ZxPzNR46ErvoVyb1ZyEk1JkDurtBMCcpfnyZZX35YSEFkHSEqtKezHZNC26tRTS1PSjvvi9xnqoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axu58SEbScEpUvFMLjjUgpk1cUA6C4A18ZLoFozntuT8R3sS3YQ5sH2AnZCDpzKVQEoZrEv2aLm9U4LJ4Vfe2yK",
  "key1": "2VdqMRWymk2VxrbqmHP4ury42eb5AN5Ruswa1agrrScrDknV8hQwWUFUXjW4D14Bbxm3EATMsqQvQSu3Dt2WNBy3",
  "key2": "5uZRee36pwqybv2NTG6E5328yXwyHYZy2QJDsyKyGEjV3FavmRPofE2XLGseNSXuduHXZ4JUYDGY31pnL1poj3Er",
  "key3": "hFV5ybjouhZD1EZwoGtmsWTbbdb5nnGCGvAL9YBPXGTcMmZcVDyfppQxDmLt2fqRiKDvXkczawRQypuKyAbGFju",
  "key4": "5fb6ynmwtmNnrGjUWneC2wryjqDy2xwo2G4rNpdeKsKAJu4LW63b9X883Kvt7NjHDtZDNh7wZmRMGmuZ84oqcC41",
  "key5": "2wMXxUg5YRzL7AGWgivdTtE1JsoCTqjvkPZ1dy37bC8U3zhR1gMpepmN8FcDMhiVqvbzAnbSFEzhUeGejeKBdKwA",
  "key6": "iCsBE2Q4K1SVU7rLYWSrqX7Zgk9WhfUiqWvo4M4GjsMcxMT4Ahm127x7JzvkBty1e8hEVzXzsGoBmpA8tjPKvva",
  "key7": "63ZfZXDmUVxvftFbRFaXche4CLyzCStnqA46ov1wGWsoZ1CkPVxUrfp6od5RacxqzEdtv5a1wjnsUEbJ1yQv1LnX",
  "key8": "49rojkSFF4UtdmtK9tRH4bRRUEU5DUp31DMr4QViQwXWcop2gw8S1NLmAwzEMcrEeYHsuFeT7hbN5mWnfPvPr56s",
  "key9": "37Uu9QTrCtSGLoMfgBsFD3vJuca64zyWGTyRJMq9RKVkeb1kAgcvcCs7zefrQEejAyjxXsLi6dmQjooMNzHvE2Dt",
  "key10": "2WHCTkozYiZkKHqYNS2bSQP71EJbs43L1LrA4yUs6HsPg9JQ5yrQVU5FzedtRgdQpe62NWSgAJV6Am7XWT7bPtKa",
  "key11": "AryoKnKAdBANwSdoFPbsTjGDwbyNvTm7V4WtaPxioazdTEQScnEshTXKJ7CUZbAfvzzXo88pswKtdvZwCehnhbK",
  "key12": "2znunQX6wxMpg1wrBhdmU8KVi6Gicxbr7WkTgyy8oxgaMsafq2ML8wxjuurrXMqtpbwwfQ6P3LVcKqoufzRJBowz",
  "key13": "4k51AGn2RzMwdAbqE2x5MezjemEWkk6aJqCyJGXuzKXYqrxDa4nG5ryJnPtoZsE3Mn4sSr7xNnM2sNhHuLrtqGUU",
  "key14": "2rSH5wizdMQ3DmAqECcGH7gsUWYZ1mn5Po5ARfsk3t35A6iNGoEHvo1ZxtUL3qNUNjvvkjmx2fDmzJ1GZ8WsdSkU",
  "key15": "3e4UxpY5Z4brwagkwLyqAWuVHw5nCzf77Bzb9VWT9EkWidPN5q4M1zLMTppWMkFZtvxAJUpMZXsLhMUK2rGdY89o",
  "key16": "P8raCHZn2Z6bu6kNNJfTeLsviSoiDGkXcTgjvvZBiwFPvh4dy8Y4JM6eCZr9bCLarneyCxwR9gmRLawAVsJcZdp",
  "key17": "2EohxFbvAPAv5ioenJ42PTcLuci9sozQBieWEKKpVvZkgL9zPrT8QZ56WK5CXVBRSyK7TQWFUrijScc4KdD8FcMt",
  "key18": "hLn5xbnJiHm58gHwYstjWi6mjqKnoJo4azzNfNvumXoT8mL91mcGqELEu21mpJ7ESRYNvuEap41CkEbmoqx76fj",
  "key19": "57wA2k2RUufPJFJoiLmhaPFDawtme5As9zb8CdqTFwjQ9UyY1D6oFddnKSSWJ4zoGwRH64NX5vuNVLxTbA27bfqC",
  "key20": "5eHmBfrm87zAyFqA2ypahrgSQoFqr9E7zq5reK1d12iHTgoCdKTaPRRtyFFSESrFm9cRGZsMQMDqEkvJyjeR1ofK",
  "key21": "2kpcNu2PQBB9Guyk97yL5wPTCbvt6Ct3KRyPi3soTrEhKxRPaR7Zi8o6xvkGHjEedgSEsvRXJVNXTPaXvdrYfcCH",
  "key22": "3kegk4JGv1Hp1PD4KUYNjkgWBr2WyP4EQBnNt36JDTgKUuKwWnQCMzcmxHF8y1AGk77c5oT3zDHQBVPfbz2wgLJD",
  "key23": "64caYEsWxGjGBziDis6yhPhAw3xwXG4SovH8fTNvqReNS6UTa9crN5drf8yg6mQzVVdHBDEiY2q7ryb84tLWpUJR",
  "key24": "27XJAM2pLgwBHkWsZ5YYwHttRVa7rTzjTFXbsts1NUNJn1mixGBNobV3UG7WiRgqcETmSsQYYqWaWTpz18JNiKaL"
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
