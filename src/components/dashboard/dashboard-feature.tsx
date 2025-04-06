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
    "2xH5YV2dGnmr1cxzUyaBo7HJxob2bcduA7DCKNZSLZTbeFsv7WCnz7Ztmc9jApEmuktmwLKoL6vGxzR6XdVMv1qU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CuB3Vuwn7SSpEhLFcJeCBUzE5S5SzF4RVEnQbMxW2iJd5R9tzUkxWo5Jn3Q4zptvLw9qmhhysd92TypWHPYWxz",
  "key1": "3h6JALV1pRvYAFqSb4tPvvUBKLo1wxsQSVfQLF18SsfAZE624aNN49UVHPFcUeASNNpyZapG8CzSDpTGQhJCViaU",
  "key2": "3AfjCuRzKRiqdmVqqHmHeaSh6MmAqreuWMQBJgd77hRZBvHHwkoo5j7gJgLmr6t2AEhCxV6PTFwK54CyuqZ3dWsV",
  "key3": "5eNUY2mr3fGX3tdLEcin8oqkH8UsanfwKRkrsBzkyCXM5JnSrWETSyH2d4whyx7ncUhoF5hDnNSRtG1qKaqVoeYx",
  "key4": "5B1bjHmtefukxXbAGdUAs2F969q9XuVhFoiueeefFEokVKU9BPkSsFUrUp5Lymt4jEVu9FpgJ2u3PHQgcm6NKcxL",
  "key5": "2stx5c9r1f83nALqkZfWDE3ifz75KXD7LyvxwnoCVo5PB9YmEMNsKwxp7BzfV6eYgNRwJPwb2xpiAepNNzd11kF1",
  "key6": "4uGyQT2n4QhiqY6o75qdXjYXtffC7FXQRHTk2pWGXdqu5gPBkxCJwdPYK8hcQu1pjk7KxsU6moer3QcAwukeXFXe",
  "key7": "5WB3EuBTJjSRtiDBj5vcQY9HyAtrj7ebPP7FXmLgY85zY3yzpXzEFQwNsLbRXcZg1hYA8DYpvof6BFqqVVcQGPoC",
  "key8": "2Mod6FU8ZzBh8HiQWSkAc3jobjPM1v6Dc9DD1JGdgAwSKZZbuqyauzsBjWw2QSkBhgUeyEzCpYD7SPJ1m4Ny758b",
  "key9": "ZjzmyxDgFZvZV9bP1q6YqhWyxNbJ74drLU7pxT4GHe9t1GVXqsBeQQ1hstB4fpQmV9pcyzb69F9Mns1rZ24K88x",
  "key10": "5iS4i6aW7uVpXFMPjd5iBdXQ1DYcKyoCrG93AqaLEaefPp1ojNqpMarejAFYnxM4PAZWsMVpC6HRJYxLrm6tu29b",
  "key11": "44jB85DFB43w96dxQzpG1RDZTFHwnkxjiCmgKookDZiwMYqZUd7beJvKdGsy2VgiEgqzVw2VtKuJJnwPqHmBCv8k",
  "key12": "uKZup5BRU7oezCNMxSFZ8T7gzHZCbXs63jDRuGmrnTgSPZyaAPouSrSWkPXnZCbFgCNSzKBtSevrhT1yaYZmL8S",
  "key13": "4Z9vTMQGzFZCTM6SzY6Yw9UD3qnnVy6tTmwYkiVqp93e9bp8p6XQPQrA2hcFErPb8gHzUNjMxegygZmPYaoK1C8y",
  "key14": "4J852GD6XYYxLD2wCrqGwJZWM2NFEhjTeDVG9kZCDqEWdd3K61EcfShUPnuzCSpFZDNkPnjUCWnngiGgPmnH7tnr",
  "key15": "3xuEDohG89PV6U2FJ1yqFeAPw87ocSAqKzvbkCFXrLruSGFdkXFF4NHbBjHfGQQcQfzY9RL2xEu6eX4bSveJyTfD",
  "key16": "3UFhJsHMSYWDG4N2gdpHPsyJpWEyj7svoBzgxsT6nLj2APQVrzmr7U9MGF2QEUSBeHKwxM5LNBL4YiBzsXNHPbYC",
  "key17": "3eMxNG51dHp1Z2WUmCFrxv2xwCwCpjoPVJS86Jj6gpsFAgSEMT3arP4CCNWmXEP9ML6SxxwgjzgBPmXNmUVVEf5r",
  "key18": "2ioUHdoFqGRM8hTaJ3JZ71MjDjfCiHgTqMuviHib6iBajQbrrRWV8sXKkViEvSXcwM9B4WsmkExwSKFSjkZnp7w1",
  "key19": "2Fy2ZiMcwrvGe8zFh5CyYWJ4GxJ2Y1MLJrHamNZ1QW9VCjNmG61n76z6bFWe8j3RwwJaxU89cZhgcUhRtA9ErxLV",
  "key20": "3iLfieubFxTGENvfRyomNXaWnCNYtA3Uw7Ye6GRJfKKicJG4KZuhfgUTdxJ27Y6BhfhN657JyQBrZeYo5Ek37A99",
  "key21": "397DNQzWpCER693SjSFNPgg3yQqrf7FitxPm85KiLeY5kasZLWfqijxEg7VTYC6izusWCV1KSn9M9brCBkXK5z6b",
  "key22": "572fdxNioYMfv6YXZa2s1iFdJ5NHkW11wbTqkXtdEhpXwmqfZup7oWEkEN2XwAf6D7Tsoxo5TZTT3x6QMMJQwsFm",
  "key23": "2A3KFgwJZU9k1G22p3gD6feZZDsr4bciEHkp88EDYnp79MmrbAEKk2A3NMZC3CRvvV4AgvyRizJhhVXzuKX1XDBA",
  "key24": "o8tfRw8SaWFidd6Y2VwneJhnDkwvpTkAYr1YV7q2o1YDsAU1JUmYSnENjn6byWoXAdtzno7yVvXj8RKZm6FvxTC",
  "key25": "2TdUDBzes8esy3HCj1njeJJRuL1mUGvzJrtp4vWAiRTvJ7Xjc17WwAUZxQ5AnUaHNS6TFeLp1KLLgCy2rQczp8W1",
  "key26": "4p8dMmvePXj7F3cFgtGUBfempkujfomezuUjmp66Fu7xeZcTXFricV9eJxEBbGrxS8UmjFLYC2xX2PqfCVpPzHor",
  "key27": "2ckD8WN5XrMHQ4d3Wsg7QMvJrkmTEWx28cfknzB3ytHgaJk89zqerj19KZXvKF3uKsqrGMvcZ5M2bUCwBHPLtreH",
  "key28": "3UJyEcdhUG7w6apRY9YLCvSAKq7s6cLRXrnASYokWNSdYt6khckfhxVf9bJKzDKyZftYynmhcVBDKnqQrd7gzvDf",
  "key29": "5NkL1bemYHBpis5KNhoCqtzhB2eWeSWqT5JPX4xnN2BtJEKv1VwcMBmxweQ1Z9Zk5tagzV8xQ3NW1T4zoghbj8LW",
  "key30": "4nyz6GKES9jzxM7H1cFiW58cTo7gQFF2f8pHFsMvVq4FhrMTxXS2fmmkRrrQK2p7N8NzCgw8qg4NjxuUvK9giMj2",
  "key31": "3tQvpBTGWrvQXcVqpZvyXH8c9q7VUTGs7ePtBD4oNWTrpF8HCgTFcXyqzHB9T2BcotUm52p2XUL9VP3HedcfseSP",
  "key32": "2UTZCXNdypiSNCswPmiEBoSNxjQk2RekjDUPGF3BXrTzaeDya9ugcSvpddBhdhKk7gWggGgrZ4VXjtrSfzKNRJ8a",
  "key33": "LJ5sqN2sFdVFkJuqTvcyqkewy1tZzF3ibqfUFn6jeRYCnpjZHER52HwfeDRAprMeKMYunJgHaA4YtP9kJqgFw7g",
  "key34": "4WQSBEMbqcEjXR1touxytvhFz8LXUjwTn5XM3MfJpJhPERroVrH8YHLsoc45GMWW4PWDJPvKKM8P7v3ZDYYHcTWU",
  "key35": "126HTw3UGt5fzp6UybbNSU5kAbZFPBNEBbKKaEtHa4X8pBiYiKkGTvHw6QZjPewxVcuRPhQdfPNW8St5G5p2FsLs",
  "key36": "gjr6yD1vNzNz8xDQySSQMjG32khBbwG3BEzDfWHw1CY5fyrZ77Lew1PGRZSMHf1e8JtHJxWwfDrV1v2Xri4QMoa",
  "key37": "3x3QtJ91qLCvFCwsoN31gUPrFNBX4SvPAnoLyikUYj1j66R35QkSWFDprbDeKPfUBYhXw9bXGVg7yLyy8G8XWsn9"
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
