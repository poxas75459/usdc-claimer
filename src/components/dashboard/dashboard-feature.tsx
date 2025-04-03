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
    "5noyBtf9CH8jo79TW4749ScgfJH9Ms7grJ2uifeuSJM5JXvdfuV2RwTuHEx5Dhq5djvbsk6qEFvdwQvsTkz9LTyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gr4AB9n3L4qBhGrSPCPva2ULimTx4VQhotDkbdbHJF5fC55wn2jmM1uJJUq2UFTqvwXa3md4bjbUoVbqYo8oBxk",
  "key1": "3wWYuBxvFZkjowPFtzunfahuna3X5rxAdRBfxT4Ezy3BXwgTLYmNW5yPxNzs5ELz9CxuVzihZQz8W9ELRXzjfAhN",
  "key2": "ooHLYsaBS2U5tZpuP4gUNKZCFmaBtfHYoAUfwUUr5S6oTEUVk2TwBk6YMKhDN9gTTRqdiLXKeuoBJ24FfsDESSh",
  "key3": "3YHsHBZEkZegwNWZbWYq1G97X6jFpX8QEQne2d6LuvndGQp9P5amA4QVocU8uqUoh8meLr45zd9mLiRirGbHV6WQ",
  "key4": "igEmgqNnqmBd5wZSKfztDCTb1CRLFFmoPxLki26bEU3xf3MUupSnnp5axh6gqfDo6N7H4hAQUjKgWisuSXUi5f4",
  "key5": "sxzJcLuKd5bCmBapwJm85oLbje9oUuSuKRmLPqrnhnvUWX7GVGzhJ1F2ZEet973HyQkcQtvcCatLAEBP5x2k9y4",
  "key6": "uAaoTNbjb2Pdfuw1dPhCSPG25XmnbYBrBpNG2M3znCnYnLJw9EsQRb9kGKHDNgLenFrkQNXus4nVcj9d1uqrzFD",
  "key7": "4mTb9pFyCKeNXK29QPdfByj7J87VjuYZfeW4Xr55QLekMVb1jK3p7dEZESignMNggCRxfUWG3pQ629SqHxAYNtmx",
  "key8": "2QhsxSDz5A48fZUpAmS8MrivYsiyEKmEcTD9QQy8AbV7Hdc5GfreMjC8JV5xnp2ZZRGmqGuKeDMSzqdxfpy5gBZg",
  "key9": "5Xjimcw3YQuQn1sXE8Xx9jh1YJa4wBaWUJTZXJVdfiHzpb1a1c663hawnZSwsFEF5ajXHRh7Zu1YcyFG78uHAanp",
  "key10": "4F6nBEepMd6xpPZC95nQQMFczLhzEHVwN41nM2JQheHmkoPEBdtEfF51MKYc9Ggu6NjrWTR6qPX7LU1R5myrbTq8",
  "key11": "3QqqayowQ9CVECCT9iBjEqSGfxMLgxjpgzEZLPzzJAaLjCivJvx41GBM8EqArWQtmwEJmdPKGGY6RotK1AHxnXde",
  "key12": "5NB6dAHAMmLoSLXFPvccusbeLh3xmmQXDSEzmWBqDzHMFDDX3XXHHrgCD76rpRBBnUjQfSRbcRVMjfkGEkg6hpmY",
  "key13": "3ncmHREtK5K74C5AQ6V66gC7JfMpBa7zbWhtv58WssfqcoY4R29VnH8jEG6g21Do5TB387NUNYBRvVZB8Hw2D2Ny",
  "key14": "5DQGFuXX2CUma7Zvw7eivkyjArKGyDZh3Vy1YvtDvu11gLVxEHJWtXeeX68ncXNcKX91hDqDpgyAMZ9FAqzowXaZ",
  "key15": "3HqnS7jCvA4zxWBUHhHWAtnAHqkE9JSRq65q18ZuM4YYE1skwPnnWBfdAY4XueLohkCjb52hi16jfaeaUj9qgFqx",
  "key16": "554MGqTCBAEBr4wR2Yt8xMJ7dCtVXv1JwBoeyFaJjZbtpcJrU3xq5PrGxGAYYs5KprTPP8EMwvJhXnSQ49h7ZHMh",
  "key17": "3bupe1Zua1L1HD84xyR4UPRdYkfMmLC8PeaC9d59YoiNDA3M2h7GQWXxroh8133p6SeMVMz7BWib9FtcbbeBQ5eF",
  "key18": "4MTAk8vShWXrB3tGxfSDcigmFcqdRr2h7SsFLgDBusSdQbPz6eebcEE7diBnJgeeSiND5H8H9wAVrKUzTBFAaiq6",
  "key19": "2xT76CmBERFEFSnC3wyKGq2PQfoBDiG8KoBiWwkvq8CBfJttU7e17m9PswkWCZuVsHoDZoyZvzCfSXzA2LZqeXbS",
  "key20": "42ryameuUAvRWYQhnU2dEABLycqVLCgdtShy7dQYAJDa4Jabh7sAssXMHVu58f8F5avnh5AQNboVMZnR5LWhtRCf",
  "key21": "4iafArkx8ZBZA3BSMRR7HANSar5JWSe2X5Rnw1UoBgmb32RQNn6H9Dnt1P6cGS96gEVTYVVyrWXH7MriuujbKDe1",
  "key22": "MR6E5ehtWPeLzYE8fiezKhFduwCwtsHcSfNAD4dHWqnTvDkY3r23cgLpacaPBuXbBByYaard5ydTGGFPHq156p2",
  "key23": "5hsZbgAJAgqNMssKc3GbZ3bLmpmAqfR5g3HkkPzDwMdzRZmvtKjzBnGjMZuFMCfrstsbk4QvJNuafKAjYiBuBGRg",
  "key24": "RmBkqNvRumFM34AcEnvysUJjdyiVtpWen1oBMBUVh6jprfzJ9jMUdsRpfum22vXx6r2v6B7E3PasnzpHoY35d89",
  "key25": "52Q9meg5yNcjdigrdEQaEVfAUo1bRz8EG5HM3EMALBWo3ucvdvmC9YwDhaU4CbZ717o92pFkzotCP9NGEYb28tuh",
  "key26": "2C5rrMKBjZvu67fvVZjRUWcPiNrDH8ipd1hyg1xBMo9svkh6QSrJQD6cQxK7Xho6RGMBKCHziavCfh9dwuM4g91v",
  "key27": "21j2Sk8dFPDahFBNuy75dRAZ7WA9TJBtE8LgJVRjEjhPRckES6peGb3463nPTtiF5qbCbkpWbwA8xPCZdNq6SBia",
  "key28": "2a2MrJfPNdnqqcPPdG3WotyBxTLHV7eo5edFmQsav7FananA9ELGqrtpr66QbjbP4EgSbVote499SB7guEFPyEYo",
  "key29": "5sQqqyvoYGAsE6TkP4rffB5xsRftGneDx2CBmKgXwsRybndbaXKcAvgeQG3dwuShGonrVyebaPG9G9DSjTNisSQY",
  "key30": "5tH1e3MZmbnJsevXQ2u6rXQwNSiwZ3YKjUkEQLyhzRW7FmUBsfievYW2QoPTdF3H6f6s4oo5wEWxoXZa5EvpHph2",
  "key31": "okkyCgXzLMmX4A1Ar5yimAd5eLzCak1x97u5CUNs7G2JCwNBXNMKFEZibHhm8XzcXATUGGoU53LjpVKc3zY9fdb"
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
