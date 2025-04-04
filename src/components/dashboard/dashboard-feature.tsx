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
    "52gAakgRo4ztMGc4YQxgJz883vWfmNNFEf2NpDAD6Z9xftALnDi2f3cYHundmi5QnQ1wtjVK8gzGmSBbN1z5pMxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rgEQDLjSLpLtWEo8Yw5ugm2EzZrJ8XKnBxRTqUwSu9xfy95zVg4jVbDCuRdB1rYaidoozbNaBVt9U3yUfLhoBPd",
  "key1": "4m9rQMYuECBcurat1KtwsSPVEHb6WnJ3DUt1EcCxUXwotAfVKQNYwmM6acfY3m7xF4tPTK5fbG9tG3rEGrKope84",
  "key2": "5irWv3e41L51PbmSwj6eGSWzrAzkYgKJPTYMEVTR5e16NUwANSkjvBsbn7Pmt4w9zz816uGoLgN4BpEDZwer4TDu",
  "key3": "5xsxk3mGVn65hVw9cRQxSc3jrWFnYqGVjkCCjuMwytgKcL2UhH7ABXEEjSQVDMSuWzoxdP7pPXDDEj1oqAJYWuXH",
  "key4": "5AeEs5nz1yEqh2cwSo43BwKv3tmTFeTZBXLQ1DnfJ5tLyYdrRPJ9eNtUXTbbAsTLq33RqyJHXu4wuLisR9kvYZDp",
  "key5": "4tDBr3X4x89TkwJoRPLYASyU4fftwRYgDHBSLa98zTDRL5iGEnrPtjUxhTUj7zX1gciLi75C9Lh7mtpFUspQFGum",
  "key6": "3vVeNRqaxnc8oe4u8JH5ZEZg15ief1WhfAGUfyuxknGnD7H7UK4PURCc7xCqvgbhNx5mtKsbVZQBAKafBcP9viLr",
  "key7": "5AD69GtBxhYaMRoYDpnGaZMtDML2vv2WsCgnTfv4K1KNt8Cjn2UiiLcDBbiwEcUZW91URusc3DsJ87UBywtPUEwE",
  "key8": "4ruoVUtqfwYX8mkuTKLGTTC5FB3UDpPL2emKXo3yLjCgNUNpbPUjKuQUJ6YCQYhQc9cDWqD3PraW2nVkHCTRHuJf",
  "key9": "5zdsdNQFiHa6bJimHJEpHs2mkc9Acmn78Tse8qA5CbK7geQ4EhqjLkkLbbPxvTx9cbLeZZZHDx3hLnaZLBfUhAeV",
  "key10": "4WufkcPWuSjmrBhRmkcgtKsB5EGoB47J5cYWpH8eYASTg3W3xtT4Sq3Da8P9fj5XaUxSVhna1KC8Anya5yoVtDoW",
  "key11": "2g6FUsGG2djsMn7oQFHxYG41Tojbrygqwfy7ChCoKnYtPfmT7Av53Go9MW2P9KLfZ4jaa3sKD43wUSdmVts3zitz",
  "key12": "2auP8HiMh5PkpujWrHKjWLiTfyxhM6ap1ppv6ZnGJMZk1B9buCvYhociZhaYgRdN8dAa6uq8PiqhQbkJmQVN9G8o",
  "key13": "4QuUQV8rjoDDtDwNyAbxPHwN4WxoMoRYsvQ4knSwsraCGJoFTz2QLCZPGsaP9J6dxwr6cdp8ZczZLpsk4jfA5XAv",
  "key14": "54LUQXigizKmoj1AsMz14XiM2VtZw58K9UYLNjkxa5DZuFK83A9gxZM6KDKQfTWWFmKHNet4bvusdTYdSqcb7R8H",
  "key15": "4ht7mtADaxDRD47ubPKnKUj49ZvQb3aTf7AFupvxm8svVbY9xscnV9a979WmVZnFjBvEyQ1AVnvk187fp8WK5N2V",
  "key16": "iTkj2NgCUtoP8ye6dgJdGoLdSUEGiqr3GVDxmCja9VpqTJkfaL51C1T4f2CvX4Rd1fWHhwgYJ1bEpL8Jk69Zoqm",
  "key17": "44qtQbknKxvRhUoCHBs775zLK1YRMXN8YFJqUJv9zDfyKPxFKQYXtWERR5TgMzGNrdegRcxw1vG1zdM7soRswoVG",
  "key18": "5b6YQd6wEjtV7jmUN8pvCFpMNDB6JxyxeckSfTfp5Cm3fjQqJz3CyfizQq8sxVzbfZUkFQRUk6cReo3PdhaVgoQG",
  "key19": "39F8ugSemQL5X9TsAkeFoMKtP4reRoHzKFWCqCrXKrEJ5LFjuXgoriyasQa8qJA8Ww433dMZK7eQuPJqKrx6t37R",
  "key20": "5bYKUKmvCCS8nceWFe32HxDgEqB7N48rDo1UBroQqQyQ5zagyiQ6cZtgxH7s7kvZ3bQ22SPRgb25K9B4aRCuHujw",
  "key21": "3K3L1wcSKgZFe5r5cQYA726xKQVvmrKcuSnBLfA1RXM16kM2D9kgc3APG2ZkmzfjBCh19Y2quw2BSPzy7bfooP49",
  "key22": "2jDF5aWPy1d1X2BPAVdf72z6yQMBAbREVgyC95fX4WPJHUzG6YwWAvZ9ddJ5gxsAAQmmoYXUye9AWXDZ6gsybufi",
  "key23": "ZwoKUw9KGe7sCUAFiDJbqjsq5mPJ4HwGiZutNiBikxopmj7farAEaLa7McAT8id27nmTjSh3buZ2ua1mBAEDR9j",
  "key24": "XT4GbyBZgfqRFHxf1TZaJRXpVQycrK932joSX3QKzAusrogLRg2BYFGFDdw2Qz2qfxArFWqYQshE2aqtDatkDij",
  "key25": "2WtrvpzXkgtUgCjxbs4UK75Mu3dkkw7Njksr9e5zAFpj3kbZobazJXYHmkQg34GbgvtErMjWqX2Ucfpe35TkmRdM",
  "key26": "5p8ZWMzAsx8djhKcyqrRGfKYrZxEC55VBVFPw4duhe45JeRC9rmNHqVHC822rLq31viSmURj2FQRexqnbaYbGBmF",
  "key27": "58cCXnkz186vja5HzqZoienFw1TnBiiMxYpkBdb9QsdfCZGecg6Faw8a38r4Thkr9oRiQb1ZaJjVvRcR7dEQAEgC",
  "key28": "29RqeDz8Wd5yiMfDHzhDRYw9u6hUeRXqrMFGC8AURg1VV7hZjoNWcisauxNzBqMrBSe45QEsdd7JRJAGGvfJG1qT",
  "key29": "5QUW3xTUmAGXf71i38qNiEFY8KpfESxjY9bEjD2SBvuhxKGj2ekokVJHP9PbGBVYgmZX8iMbHkpacHr6WWR5DWwW",
  "key30": "47E3WscwW82sGNNtmWgPnsh5TEHpzkj62dbvFJPMBxos9Ewkc2tGTMsxvsZaD5wLQqJtouDTz4nhLCzgDj8s5QUR",
  "key31": "2aBYC436JQvPQXpjHv5pNV4yJtgC4E4E9uWUNbGhckxotRKeTGwdub213utpkT7vguMtTD2A2WSodLt7s1foJWi6",
  "key32": "4a7zHid6iLdKufZbncrVkLAXNYhjFxkCxrSbEXCKAC2om8HC2DDPnsJfT1rS56XWfTXe4jyWMfLNFf77hA27qbGW",
  "key33": "2i6LvorWHkDmfwtrmLiqzSDJqBG5i3kV3iYUtfGFYM4UvDkaR4DGZ8qoMhey3Fniaf5fcZGDXhWJGiJcT1bPtREY",
  "key34": "4qPhEXo7nPai91Ct3DHseA4paaEYsSpBDBjpEDaEGS9kzMJLK7pmG1LE27UKRGwXJXxjv6XvymLjCVMjqHFAvbKB",
  "key35": "3xBoMEhVm2wrMoE1vAzNvZub9RTNZE97G8BdPni3xVqqGVyBRZuigZsfmvxuABdkBMTko1rV54kxWZpqwwjC7VZA",
  "key36": "2iaaWRn2W1YBXz6SDZZh7gDucNeBQk5f3Awu7mVYd9SGxPk5s5obqbob1SAcpqWKKeSMeFV1AAd8idy9YAcxVFhR",
  "key37": "4TZ444FRSgVpBL7BL6rsuoFFbcwyLpJCA614ptW2QPfYZ8t2fmmiprhwuXFQwXAfTz9X5bMeUqovDTY2WZ47j4AP",
  "key38": "2CreLehz9p5E15dxFSVUBadWCyPWQWXzJiMsQErscPeTKc6FcXkG9LSNKg5EwyoUaCDQq4yW2Ge4zwf1Z2xgVvmz",
  "key39": "RxMJtJmmqCpWFveTMSbqapDJqHRdMEKmxumJdaH4BWkzd7VCdUQQMjvuxEHje1vyyzzbZxh5YspbhHnf4m4jtUN",
  "key40": "2mfgaSESdomzP2mvhSVeKqQpxaU1gfdiGV84qFeyT3e3UibRWP1QaCtzYjuqNrcEsFkDiXK8bRQXGC9hin61biua",
  "key41": "iqVu42tEtc1N8Nv8QYT5gZMzRKqY4VZcDtzY5h3hx748Xai648mpHx89cwu2xrzmTB3jk2JSt3Xb9nwJJALbCnA"
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
