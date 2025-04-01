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
    "99XLoN31HFWP6rNnqkUFDjLMbJt9wrkrgDuRrYHC3MnSevnNcHtXpxWQ4Lce4Gzo9P6BCFp7qpALaVEzHRtnBpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzNHdv9PzokQhtdtYkJzSzDvK2ddL662yAbR5s89huPLcTMgp37zvdhhuUhf59GabSnNuHbAHAjtbPh42UeKq1t",
  "key1": "2fEsiMBPZivrYBUnVbPSEr6UiD6ZHP9LpJV5zVog2LbKVDFPPvfA4Nk62mwvA9jFUKkhYhk5iNggKx4SfkgKAGYk",
  "key2": "2LinYcF3TKPbqBfA8BEGVxTwLeRwieMKsxwsT2YSFGCpP5k6W3ceJEUEXDXAvVe6xQcCA1V93G2uodYRdoiz1eyq",
  "key3": "2SWu4VkhxNEt4Cg6h6eDfpACsfHChKdQsSa66KLwu1FtPJutsVPddVJ6Em3cA7sHBhB6d7TPreqQjoh4fEAagiNJ",
  "key4": "4NtuFZhVrQ2CSYL3YPjbdr7s1DBYq46MptLVPJS5Htth3JzXGaMU6Buz5SKirMiiSQCGLmbsZuVJt2Cv6b8oUwTJ",
  "key5": "MUaHRAHmLsGf4cu3zAcbuPCXgFSUd7J6nykmpLy9YLxuaHxS8kh8mYjiobwhyunnKUqjh2UnyMHYnk6Uc2cGBLi",
  "key6": "vXtaqeCZg14oEJRdPYs9EdZzqCm7Tx3bwm62hr5s8Frx3uqWKRHWMkxdTmcDjbLX6L65fVYTk5QM3tTEez24jFo",
  "key7": "3BUq1ZsE8vFAwmqXSSt5jkkCbjhiSwHDJWTMehkvkwbCM1Jg7LfSAj3bPxuxkn6MzBBf3AoReNjDrSk7vgbv1QCT",
  "key8": "473ZXiCiSh78zHCzp7Cp9Q8574YrTqhgkdD6NBThBZcGR4sXDmvii2KHH8ka1Z156KW86vpCXJFPGQwHP4mYy2B3",
  "key9": "NraThuZJcE1D4zTQHGSeTJW1xxpEEhQVFSH77oAZ9Bn61GG4LAJqToxec7yvL4YxscA6drCHmf3Q3VHYJg2EvU4",
  "key10": "BBjVTiRQXRJFEpeJvFZuU6x1SWHByPwSP5wsDodcX5cjLMB1dk7SQW91BeT4L9L1PZXsmnnJhb2qf4xEeFPaHAU",
  "key11": "Uaq7UJ61nY3GDF6oR3RX1QnnQFSS8taxpWakDy8zifkMua4P8eURtg3WBjQR7mmKncMPCRLhfoUY78JaAukpkEZ",
  "key12": "64AyQQADv3bJ1gfUVCKEfXFbymPQpU9XKNySa5Bdpr8hWRyNQWW2A7255EJxhdPgP9LzeC3mRJJ1y7sCovuaCbZk",
  "key13": "33kRho4cpXcEWUXv4CPWdSWn9zSF1t3bGmrvRN4vKPXxkniHHqg3pF8WStWbkdBtt6CUUiLuPmqsMrLajuZc4rm4",
  "key14": "yxHtBN9jVBEWh62pkBuTyTD1QBx5Qr37Rp9ix9YUpTMayDiTAqZopCXt78gzaDCec1rwaHKrQskvkwwwXhxQmMG",
  "key15": "2qTKVZ6oc275VHUD7sCEgBwNfuzfHp3f8zN2nYUMS5cUcHt9gCfwQcQtJSES9HCqvejkBriNLsGpqFqZx8tw75WV",
  "key16": "3EDUQPUgfYbA2sperDQY44BZTHRUDaGPqhyfkyWFDZPAuPtV1wyq7kCARkDhYdTzJRgHGRLBZ2L9VV55wTrdj7yU",
  "key17": "3Co9ZcEKTTBSurymChT4xv44WhbScFqhzz39TTJNQzdHzAg9RmKUnsxWoHr3iFbjJDCQP93w7QF7f9smnEMFov9U",
  "key18": "2rgxVAXSrrLiLsXoenj3iXw7Yx4ZcbPzU8abtbHj1TPLpQtA6VzfXQZVqeh2JGS5DM6TZMCC95tGzjCRvnCCC847",
  "key19": "iZPrrAvRp4dosTpZfrrXGYNDjg6wWPHcLAgZitJgBQip4s74pXib9veRCrSyhsZfoheYEVAJdNbzoLjG2a2BbeD",
  "key20": "36hCy9dFBgfzhtuoqfcSQGvDD2UPTbLWeDa4JGoW8dhPJoAxvyNwmZ24Zz4sby9LWJY613zX9kfbyKaYRmQqhVT2",
  "key21": "2qbzutDjHzxK4uREqKupgP5usmHhgULh5wteZjJgerFmGcx8hd6FZvkgotYSGNpmKD4paGNJcgNjssmcEC46U9GA",
  "key22": "5oQVxwcdPPzJBC9aU7cb38kX35utA8zu9QtDdoBQt8bdG3gGZ7HpFU5nLgVCuFkS932Ej7yyKHqGyFrCAvAHMkE3",
  "key23": "12W1YPgXW27ZMvrbT1uy8HtEnpF7utSR5i7RcGZa2THJft7cm5NDsZXDxw1dYS9CCEDnDjBfT51wUVEfXvEFD4a",
  "key24": "dHqJ7ViAhYR4nqceWts8Nb8kBSCX1bQznuR66tAWHAkHidecerx7db9V7zCBFHQ2GtJxKFPk3rtoNHuCLzWeYL4",
  "key25": "3so77HVSXSbLgmyqNxPLU1yUrZDjYiaJUYc3vrc9GA58bnnbc3LKZ4zVWBTMuNRf5Hv8AgrwYuJmDbQ5mW2ba7nP",
  "key26": "y3kjE37t8DWvHjtcnjZPQUnKK79HUVHEHZsbhqPbFMfYNkTfcFGi9N3xub1uwfpbcRkVXmFdZrzN87AXBd4vWFW",
  "key27": "2jerPa3nWQpkU4CbGqe6oJ2uXMyXUwb7byq4HhhRWXpvUuHwofLiTcJvMMFn8rdTw99ZyWda7ntEFX6EWfErsYy5",
  "key28": "KZrERzedR1i2PK3R3JQSo3EiKUzhob2ewiFSU4Rp4rcP5tb8q8hLqkvXHmohXoJcFxhbCexap5EXM3QZS2aAGj6",
  "key29": "2x8tgSfWUw196hEHQPxL2N7t3NeurkC7FfL7nbVUNSMWURab8mMv8AMabofuETJE5WkfFc7ymhhMks8mGA6WCZfi",
  "key30": "4AudwDBJ4Z9pvYwERULWnJ8gCh94ZJSUc9TxCqRfbKRnv1veqpcX4tfFKFpcrcwzqGXfGnnLJqiPtcnTbJJxVHca",
  "key31": "3H6swNHJ2EMW9absoLNZW7hX8u1WxxX87BtxRz3CTaUtmhT41Yc9GkeNDQ8M3wPDz1bYUCW5ByP8VzUBmWVNcTx3",
  "key32": "nm5dfVq7NB9C8kJHrCRnwUbUTor2HJaPCjznZsAQH94KmVzjhip7pBfgisyb37qsqCA3SVej4oz3ZszcW7CR2PD",
  "key33": "3CYsWo5HdCUXdBVDrLdyjWbYUE6jXNxWkCWKWHKqNycHZCSHdnJtTjebUb3RoZqJG8sSU9thkWny4tx6ENSGwGqf",
  "key34": "2kngD7cq9nKoiPwM1uDgexhNbb39Z1nBnhWkgTxDUatU3DNkfA2nBebTv2FMpdFop2LhjFMpejToCDhiw3h1XNhT",
  "key35": "3MUyCax3famVKKE9mgKfhZMoE6mL29MJYmGt7rae6PTRNcLh3LrZ8DbuiEuTVCoRWqDnM9JKdD6rUWLr5ZGAk3yv",
  "key36": "2JFhU2My6eoYxBNNVUNkzj9b6zZxu6fgHyGCBDcuxeXyUoSF7o7pRxyknjtzr5gNvawU6R6sEwM2FDpLyq3XiJWB",
  "key37": "3EQCbg7BbuE5wxCTxumngFvzkyMyV7xKFD8wCLfoyigxXKr6m8SwvVhdAipz2Wfv8BM3NmC8JMxN3LDDdDYyH31s",
  "key38": "V9tgV8tTSzLpUrYyk1BCatDDtHohHRjisBzwnLDxntD4LnSBHWTbzQA5qt9a39iWaEw8ZYhCpd4FCb8fNDoPjE7",
  "key39": "31eKzDPqKg9DyRcBKj6wcPFeFLSShJB2a6nk5Fz8nhnV2yZP3cgJa3RMHfb6qKcwN3r3zyZkjZQRyKsou2zxDGkk",
  "key40": "5KjrvGMhCxToTK7DfronttUwdomjmiBZu3HXU7AHPiSQAju3mXwdRRBMecmLvpUH2rYHg48NpDzkr42nTMaxL1vu",
  "key41": "nxu5fBJrWeFqK94KLMhu9Lf5LLpFSKVYxARbnyRkhdYedSYEk4cpwSZVEG3nuQ9Nc49isUhDSprA8r2qZU1BYkt",
  "key42": "U7wVHy5uyGsyUmFSB6hdRTcq8w1YGpjuJZxiCyFBzjhr9P62WKs9kV79ZTc8ktDTPVPVEjLvyaoXVt7avnhS64k",
  "key43": "wi3EPkumkbHf9rBCUrggRGNqZ1PJEZfEtaWYacrr2LFfk1kBBcVMrZGGXn3JP6vNXcdDR4QZUkSWp8NgiWe4v2L",
  "key44": "2nZ45dGbiLGyCfpFnQK1wzmyeeAYvBEJ92m2YZqj943Uyqbo7CxqsvjopqnbjYrabByt4w9tAb3ocPNdA4RwdJpL",
  "key45": "5SpiqtFXdtKUeqsvfLnGDgLuifvnDbSy7y3X2BGuACCbWyLvABGkUUt7ToCyvSGuU6uYmV6q9VLZ5bk5HdHbcqhJ"
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
