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
    "PepF8YVZbn9YNQ6QNU9zLSArR85tRe3EZPwMZ9Z6aNYxhv73TMU4FNP4aG67HTdAjtsSt5v5E3nUK3fLb8pw9Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ap4vLYJoxeRgntS14Xh3WF935EAJAKkd4ZfV7NkTdjFNKK9H4kEwmZCEBgXePQ23eS2jGcMSWw9ENTU17tViE4E",
  "key1": "3JxhVXDi1EVLwS6CehEE5pS6h2J3B6ZgscLDt48MXjgofYA7u19FaQtktwQC3V9urYB6z2U72UGFYRsWNnGPSWsC",
  "key2": "3vxehTGMFzN67wYMZQDUjg4pCfFKowQWgChT9y93KHEhcd91HEBbgKwvcZCWuFkvmr3cj6JQTLY8WaeXm3ZB2Fg4",
  "key3": "5N49VHGhYgQnqZJVhcSuQvX55KLSedYFn5bpZHpccCcbn5kN5RUPQtXYTqx6pGLzCLL6kw5N5NyhpsJNm7HcJHQC",
  "key4": "uARKFbyt8MMSsXCJZnu42LDUKG7QkThTxuqe2bxim7nz9xHxiXSnDXdJuywVko17KaeLooytGRW4RmwunrMCmDo",
  "key5": "3ZeP1ya8DdEj71VhrTyUU5s8Vnx6sdFAAGgjZrPaF7YWDEmE5Wzrk7gXSwuVjS5HgArLo9bFjE3WXq7goNbEwLfb",
  "key6": "215vuFxSCDBkE7HfxgSfFSCiUKTB2iZVBTf7Q1na6VwNaUoHGsbBqdkdxbeddG9vZ5mjFV563afgHdhSEFCUPm5w",
  "key7": "47QYGDNQuCst92EVVVbMfzCxAMXzSJwEEHB76tzRduQtikMuPMugnzTmB2rDY3W3bbN8JePkpFQCyfGA8VXSpr36",
  "key8": "h1ZPyDtBgcwAiLZV2Y7L4NM61JtrDRSmpd5jvGNMJmDW1VKLEbNcXiRL2q1LMerYAzKETfm8TMDH1xEhetLj72o",
  "key9": "JKxVWCDRbSggLCcXBqY3JsKF9QCmWx3LVGYWW8fJUuiC5qxi4zU2UoykNvhra4A8TiKCxv9j1iqKbq3tJVZw9J8",
  "key10": "5kNDSCEGXXKtwwaA9BkRTBdfXHc2cM1d1xzaR3Y1fGkGbsUL1KNm2Hx9ZiNnrjgjsFbm55c1aCQAV1p71XGDTMpf",
  "key11": "3c56coBXvnv3xrCVBS5BWQeY7oUhjq1Ck4ynnrTU7XL39sSbPVFSLbzicA3H4MfBF9z893W8ZEzdN2HXZvSd4QPt",
  "key12": "3N5TeebehvEUdxKxPnbV7F2v9YryFXwJ1TuN99KVTtXGzymiTogt3HXPGig9quqz1ppWYNUGdMHcwhu7yD8bfhGK",
  "key13": "4tSjoJUaiPiJWfm3uV6HnTiV7MrqFVnycUbi36bWPWww2KrMrS3P5AwtGkxkJ3pp1gEFAwXxvPrGQVm2sCqzCoT4",
  "key14": "3G7C7GxoC88kzN4EUr6suETSoV3Jksb8sYBAN7fFeVqkUMkSdWfHhsFro2Y8w27Tk2RFLMKTtVD1jPDifLjauhyp",
  "key15": "4hq9568PHtVFRsfR9ioFkeNpQERGeaqpe7MMPpyePSLXCeceDaF1M9s8HRk33ttWExRS2Cvpbq6aCSSKeiQf5qmv",
  "key16": "2cf7oDNnUVw8q8q5dfKXJRHiP3VSCH14kWnFaEM64GCaswH7Zz6VHKGui5w2fYUiwuaWEDWS7Z62kNUEQfCEjRYn",
  "key17": "2ieJHkzniLy8aSvoYRNUQo2iLzmWJreAsN6Gu5LhXSq4LxaqMM5nff2yPXPJDzjXXnQkUhJu8raFmPizeRm5pHXz",
  "key18": "5NFt8bNRa7pgJjvvV297kaxC33DhdGqeRXzA9HH8soDhUQTFJiAFGRANW33K27agJeEbUbB42n7gd6vM3hPy9Sva",
  "key19": "4fXB9MvLcXH7djWPiiauKCayw4EsJc77e2koPycpdALYR2PWBdLywNU7AzarycSg9GhqKQZZsiwTzaAmTQ3XvuRC",
  "key20": "5LewpCKher8mrzK2v7GdAJms1e4uLvC3xHZeCra4uBU4CSq5FV6T3aWx1m6RgXiVyv5utz6uTaAjRHmAUaDidADX",
  "key21": "38UsTXBvDPui4GWeuKUdseBHCkYx72JiVhLCz3qe7jE3C5BgbzDdVKkF1iG5XufqAAXM7hR8BqJEThBsYN71yZtm",
  "key22": "5R1o3ELTzEWN66nCEnaEXZoi7AnTQFHLz5eaNQ1PoWz3bzcbbjur5BdiT7XDbXdVKxv1hwCLDSG5j4ATpfDswhxh",
  "key23": "4bTAZV3jL3V5ZPcEUyZGgJgTZaJJU5iNYqWd8hHXpni7L6GgBq2dMfEnT18VhSjTJDacysRad5UrZiYMYNz2UN5q",
  "key24": "5wb2bHkGygXNz3c82ab9RBAZeft1R98tXMBZUc4KitDF4SyiRd34yaAtcmwJzwp1j5xK6u9Tx2fJkeT1zMC2rbgW",
  "key25": "3xypi5va9pTsBxfDFfkyUSEKw9bhFzrSxf2QTEY38h8VwdDQFSyGQTvWUsPMzpLm89Y7FA6Ykx4Lb8TQ5CJzMXox",
  "key26": "4bVPetkeCUiAj6CyF39qzRQ2e261hLkHKLCvV5hDcGrVSupbkxzgm4UnoNL2QM8Vf7tNRYNg3Qvz25o2oghyLutE",
  "key27": "3X3XC1Tnpq1bFK8PkQxPkyd2u2H2RGaKp6WRAXB7SwF18DyDPcdq4CvHEeq78WfpZ9C4i2PUo1Y36oW9vi3hfLeC",
  "key28": "2hPt5UKd93zRTsFeCVjwWcgNP7mRE8kLcGgRYYJbiikA1hMrMwtfFfXX5HVspXFNkKrwv3WF7bq3dwd52936A74Q",
  "key29": "525GnW2Wy5EedqR9p45jZpTGafKxKv67sq3UtKahaCjsTbx3LG1kyGSLvzw7H4qXgpxdeFU7NZ41VFGKttFpyubg",
  "key30": "tSfLcUYVSS8QsKqnEo5GkkeMUjH5W5aHitZ6VjGXeeL66UfHR86n2FpSP84teu3wG84g2UnQmR21RBmP76AhHL1",
  "key31": "xZW5FXnGMhhp1jiV6ehu6ijWwpi99anp8HoX9F4AkEj2VVVmiYoHYsRZ8VAMsTKFXpfKVoPEZJhAPpE1eVquk7S"
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
