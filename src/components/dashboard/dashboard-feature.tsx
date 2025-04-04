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
    "2wzx3yJbCZXVNr2seY4eeG2g4pwvJ8yy163hegZXxMmHNFCdHa4KM3V3uMAagjyZtjRDBFrN1v8RUqbDD1dJoPrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZKwfRiDV15Ruayx2jdjCYt3GLUhqnthZimZKnJxaEU4Yi7xXHJ6GNHwos1AGMEjA9uc282fgXXWrxTaAbo9dqx",
  "key1": "4WT1KhVt8amu3UooxnPCfcghF1WjRufdEop5Ug76YkmU2gVxhYmWQzt3CNMEWsc139VMo9LLVXKsLio1emHf5zyu",
  "key2": "2CnJEbDM6V9GkThppMbuiTRRoTujZyu6yaCkXLN6RSKDGRdhe1nxnuBe8ShLsqJP2Dnide52cjRNdFyLTd1CbWDD",
  "key3": "3ovTRFS6Hgn8Ccwssnioquh1MaEmGV6t63BTZfB7fWoA2rJKrFyEg4QZ48f8nf4nDdcFTT18urpe99F6zbFvcsNm",
  "key4": "2pD4PvbBUeEZjmyaRePaqN8aAaUK3auZV8GTA9YBpgDc3MfkM1zWhinMEMkCu6Mr4nXUd51HY9NjtGqdRKG9n33m",
  "key5": "3zYZFSJKd6Ze42earWqNyjvd7rBfpAzneQ4yHZaxGnEUZD1E3x5QY8Lpmdy7jeoehnRXA5aQmJtr15bBZ1yNmPb6",
  "key6": "3o9HS6uBcE6WNyoHX3dPJtfnU2zUMsQSQifaoSvURdVy4MbkSfVmV1ztHDMfwRW6DkeYpxsbCnB7cavQscWq9Xq",
  "key7": "5F9aVA9naxGdJxaPMTj5grjb5RkjMGipX6nzC1gsgWJMCKjuP5GWComg2nk3BCwmtHbMwM97aed5gC1yLoXBePzU",
  "key8": "3zWE1MK2ibhYEGR6iL8XNRfAWtj5JXJAtwXVFrRYW5q7RzkAovdEajDNYPmxVN8Yw3wtwE5MxjBVcvkuwLpHUTBT",
  "key9": "5eQZr75hbfvHLuPmPMojyJf6ygLAyejppe6ifSvksixtaNHhTRs7LmowBKogv1TySXoAN6E9vC1S79bmucZbSZai",
  "key10": "2tBWiMTSihyaKBsxgyQzew6whTMot4WZPqG3dDMhr2pFHRB8Wqmoym5MDE9ML6unnkwSWE67nM14Ppppz7sSxazk",
  "key11": "2o5kiy3PxoSeKvCPx4Aik1yh9VJk6Ew2vVFAgqd9qGoyuXUjLjxZRggTX3VwBZJzi4UJizDrnwqvibNa5cVMvMse",
  "key12": "21aWJ5iNNMg5fbV1WZjXBFV7VYdetkCap4uy7WLEwoMn3QFKkmwVZtrrhJe4CZWJ5wVcbe6hWhWLDtofc9SfRU8K",
  "key13": "4ab34soHgvns5g7oPJkwvLdrNRHhrRchAFyVBbK5VLpB9ieuKyzSc7ZtBmC8BQ9VjKwfpM5eRCQGXT8CZt1fWd9i",
  "key14": "3f5DBuVs7EczFaa2jx4rBx75L1MVCZuQhUhrcSvfdwgwQLhJgoYTMjSKu2gdGAH3j9MdJsRuxrgyzGTQ7GKtRJSh",
  "key15": "36DzDwbDari5TxUB5sdiLkDia8y5s7iY11gGP6mvpFWdkBXZ1qkYZTbpX4eHC245zv8rJjDSVTu99zL4cxP4FZnF",
  "key16": "uPLB85yMPfZjUuQtSFwPtCG1FFKjaGCPpCJwSchegEGYqB9oPuZHQ5G9bwbZTkiZArNaL4oWtuaFTW9DDAhMWx2",
  "key17": "3fS7fMwa9MtHQihn85bHezfqVQCYYHVbc31yNtKRhJWLtKqf5jo9mqrNZWGTrVE7C5GaXAmd5SjpaHKenK7eQx36",
  "key18": "kNCrKeMVC6yjnEs6BGZ7R94MT4b3ab6mj3UkupgCG6iRJgJEK3gqajf61GfSVk8W1GkfLQqUfht4DzBVVTBPegY",
  "key19": "3ziwujwaMWVWMjWFoiMRBzgWNwdSqp3X2g3Qn5ADqpaUk2Njqq5UfmTzjc26skH9Zh6tVQsrVVfecBoFSv2TuY6h",
  "key20": "2U9g4zYR223CRaBeSbyBmjr8yyGQ9zvEvWsJ1vxfQG7Hf2R1irEvGjPUhMr52LvYM7tRj9gs5dwpfGEFN9F3rQYj",
  "key21": "2A8r4dchCZyvEaa4WQyr3McsQM6uZJDk8mjDieU12CPGLXudC3pNrVe5RRFtFwennkdbk6MceqvCgn2NQrqTdKN8",
  "key22": "32NvWTtEBGywDg3gpBEmvf84LzFUjNGoGmgFLFVh2tZt8C2ohRNVfotTuA6e6b2Jcm4JaBPbXtFHwjJyqy8UNVnt",
  "key23": "4H3yi4a2cDvXGBbt9BApaWT7yYnR83Z6bHwTp5bfqwRxR3soMJWDTZLTMtqijmm548tZdNec98ijYEZ1TS5eBotK",
  "key24": "2pobRDR3641eR1QKj4Z5rZLtBBg9ic6kuuwbwX5AgNWzaRiEckJBwLHSskPL5DbNuk6oxTAMyevAFE4LZB1rYFQy",
  "key25": "3iPwkm59ViCjN8LNvrcHbrcRda7CubGGb5kfwhKWKDbrW6fXmxt8oVYDimmAGngkf1sBK3cVAh5bp9Ggv5WPLAcR",
  "key26": "5MCXCutTrE9dK1YHsRP5guewnFT1TLHSUyszuM6iNhgYH6zebWvvVUcMxKLm5c5WUJFuyZo5qpRnmgywvWaZoGY5",
  "key27": "48VG6BLpzQgMf3tgpzr1SrrUB47CZfYLqvR7uSodYqAXjvL3UhEwSfszPWFXUuaKXbZFVAhTQJjP1VYtEu6WSBMP",
  "key28": "LBYWqqxCBWxa3GFGKdJeNbUDbPxoqoT9x9rH8kFeeEJ2H8sootu9WSZhknhT5sZhSNTA1ji9g8JtV6MJL9ps1vb",
  "key29": "Hrqd61R41PpdV273q4KH1PBYNRdAjX4DCpHd93VHhzRvWBMHhWydUZCmCqJ3zo4di7ea8XeASdsoYwadakHn8cy",
  "key30": "3NPAfgUApcmibRNGh2EAmkz1xee67CkmoiwSNoxQUYHL53DqkpFkWdetpPLbCxfTn41KCLDtpeUMwQ66x1pXXiMB",
  "key31": "28QUAYWm2ZyLh2Ku3w977A1anVrZ6aPrfV2ojTpMRJsrYqsVjh4sk6nBsK2kKLYVGPUvrYTZmofxuCnXaPmqSQLe",
  "key32": "61iX3Bs82J4Q3dwQ5yqVGk5aWWUxu9m7cpPTNfJdLMU6m8myEWVfjsMJXJZTc7NkqiU1BevigvSHBaze9wKobUGF",
  "key33": "5BBS8qDZKtR2X5MNtuk1LyCk8KwFvMwNHmzPe5kW2m7Hs3xM8pc69DkW2rTBsuopRJer5Hc9HisNkuMuv1sn1mt1",
  "key34": "2uH2CnyzF88BSRVTh4kc9bRYbLiKGHLsu6mFicDwAkt3Sah4qe17DuKCRVTVsQEu6275hkYaNLUVtNynTknvMJu4",
  "key35": "3rV354yAkGHoo1s1aRFupvqeBWxcBBVoHgydL51hVbrSxhFQWFqL8RfX2C6ZXZX84D8LKHyC3mQC6BRych6qBuTp",
  "key36": "8dLvmYBERvcPoxPh7uMuxkvfUNNd99tQHb54QbqFFGs5iyXarHGjzk3kSPCjDbpfnZFa1QiwRzHgW9BHp6VnJ2r",
  "key37": "35yg7a43dmKNhZ6Ds6azJA7c8izsmivBUC8RWdjA1Ls5KVn1BGxMyrjPxXVoBQ497uykjjtu8wYaVt1XhZskHYcK",
  "key38": "4yc1e3PUb7o11PYuPADdejYAE8tR2H76qkH8ZYNug1puqnuJymPM7znCW87RHoi54at8DnBLVZ4XMCE9NUVKVv7S",
  "key39": "2NsDTANtswHXPoUi8p7qXmSbVtufaBNy4FumBjskTaUza9koDYbQEUfbMpqMnBhGqySekZwwixBbNCu6e9XtH5Bu",
  "key40": "3Fsqudin8FHG8Y3EGXQ3cq3g3BjXVZJbgVnTxeAc4rmWhgmW7pT4nqn1cLvARQoJLFCR66VgUH1vsfXukxXPuMJj",
  "key41": "5TJ3vAieWwfZZB8d4zz8r6zFyrNcWYiZ8JRproD9QSsJsD12EwEZCSum7pXiirot9PMgYnVQFS9BKVi7EUGCizGG",
  "key42": "5XSitruV3TLsQVf2jn6ZuXw8iBMtV4NUQVS1y3SNq4KUHSoJDZriNhZXqojAhpfQ2A28fPsJPcHhnYB252DpMzfE",
  "key43": "38g3cKnLDJXw4qHvHzfPGvZkC7oAwHZCLdgdPzsbqCBpSiWn6H3jUdztaScViUbZpT2vXnWY72VxMicGJssu8cxB",
  "key44": "2iH2LGGiL93sShGiX711vxh9gSV5Un6U9J4bQNTgV2GJ7xLiA5jNU6HSTdkwiHXT5QpeAVq9JSrSM7rMpux4LP8p",
  "key45": "3EEa5CD99j5Z7WGLbPu1KcZq39FsVFtRhJbttgHZivmbA2cJA1Ragpsqg8ioVTDNQSxs7JDcGW5YmXf41TU9mBuB",
  "key46": "2JF6omjnRsrJPAaA8cp8uGPbUPga3cVKu2qME9QBnmVLbHAQq4nzmdKPxzWzsCiTiawcDSafeuwn8opafjrPq9bi",
  "key47": "5up7FMxWAZLxdP2iyNHWae2TRjW6wgGStBCMd1BCQaxUCw9TnhrGMXTGTA7oKVXVJNhyHJzbni2iFrXKEuiiGcq6",
  "key48": "4KQXmLefB69bWwSTkRT22xPkdTsuh9bhZix34V5A4TaP7vmQ4JS87fh4VoAnvBbvueYQ4yqauHesoapkS66jNygg"
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
