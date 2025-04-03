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
    "4ENm86KFrmAxLepdh1nXdqcU5oWJZWSteCrH4TsvVL8fkZhPbcMBGDhUUWjLTRo6EfVkH3DZSZKpVSQLt6qcBHFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQw8Vh5FLsEAvHtEUYUA6owHbSf2dZwGSyroMbSJwAJNZWV6Aw3t96kMFEoV66sBwTWo6YXXQJM93oD7ZcZZZ3z",
  "key1": "49QCPGumLPKteowFki4vZZojMWRKh263yd8y5t3Egt9icNztjark3CqX6n4zRjYmxrSyTWiJoQtGLaRZzCgGWmUt",
  "key2": "5swcS85GZ7TUfk8VLPyUVfBeCVa7WbSVwQou5kzT1h3MzXMwK36qjvTxCFBNcQevQP4BeceDJnDBUiupum72kLzN",
  "key3": "3AdT8brvc1VWQk6n9jUTWvbsokFcNuhmF3eSoX2D4dGsFmKQFUu7uWeT5T2TUovvQowTPqY4Tfy27eeE2gB42zij",
  "key4": "4f9WcprPx4tvn97RRjuwFRNV28gEGdWHFzdLN3pa3pEHbWN1YxHEgW7ni8t4doyoxeXkfhVMbHoZDchyncq6iuWW",
  "key5": "2UocRZ9ZQnQcM29kcGF7WioRRqjJKqiaZ8VrFwncdCHs7zMpZSnFFSPX4mDCKxpsDzG1MPDumtttpszxDiiSpUV5",
  "key6": "51boeXgKtuQJMaFuwPuoAnWVKVJua3AJPh8mERbYMCHpkGt4Z5kWbqNVdm3wnihfvKcW5mUkW7wzqzvdWimpZkGi",
  "key7": "QhYM1tSuLrgsNexeY4ZGSr28Cv9PAXttwR8qVyFZHmPbNLn1p9gyDZmCKvVFpNg6rXhDnmqeWJJZNNm4JeX2HEy",
  "key8": "62j7w3skGyTftBHbw62X6txzK8t7RQdAJVWGWngrw9LpaPv9Nqadxr4Mta3i9aDbG76kaS8Ff2nacZ1q3FQNMhyY",
  "key9": "4gsxMBgQYinTnwutdh9shcLNiPH8Wc4BFPGGnAEQPCsJd3xDrCKSB86kEihhzbh4KamjM5dnWrbTQi3KGnCiJzog",
  "key10": "2pWtpqkw1MpjQZ1FAwrQsSPpcnZYqd9Xnu3TYyBK6ctUtFnFpXLWwKJozVwgLqJw5AGcWNxRbXDp6EFyKXzpYKtp",
  "key11": "4Y2QKN46f9s1gZXzLZDcnSPECK4DoUj3Wo4izakKKUpZKLBk9QpkXyPYR4x3BFKnX1vYngT8bAReq8LUsgS6MGPv",
  "key12": "qGCeacj8Ye1gXtMmcP9RGUQa9eyEgKf1zpqLXN8MbfGKNEBVMbfWxnXyrGLB2KTcX2XhCCHSSetSm7Hcox2Byq6",
  "key13": "4HNLaNSPRgznd2UA56eYGXRZJPrJoXhPjqsckFomYpGDtR9ayyjnTx3q54BrM8GyxMjx8dTjFAaH2oNvmnD89Gtm",
  "key14": "qukVuF7vyZ469TtCFGBqwwZJkZ5Sr39fi1tVqfvLb6DnvHUNi4hGYtfF6NoEjPtv7v7Mu21ZzLMrx9SDLkdGwtJ",
  "key15": "4skYrhbrGMeTxKePQ1EJur1G6dFDo5N2H6N4MEGpzi1aVyJW3DGh4y5uk4agtuD24NqqtDCKp1LveAinp2b5iT3o",
  "key16": "4NL7vfNNgXC6GwY9ar6rbSTtQiMDSkKcLqWzGKeu84SyMQoKRkBG148djEs46mm5XiedgatWZCZzzd3n6Fkq9Wbs",
  "key17": "4JDBFrQZmPJxeNV3Koefpj6HpTCd2K8MmjAMKyCf2xvvqqRKBc2bDjBVLqpm2bMm9vkXo5oUfZ2BKPBHJrR1rRLa",
  "key18": "4LJt4JaeCC37vvsAfuhXTTwcvpbgid6caN6A51ifD1DZ97LawqNjQKVpTKBtjcwCShPH7fBSHb6nb5Y4CAjvRXgD",
  "key19": "2eQPPVcgqw43xtCQWZHAVUhjuEkrGn7Dmo126ewXbtqdB7akrXxDtjJQKBsztyT55KfVPie7Sigp9fiuq7v8wnGt",
  "key20": "5V688X58LFcZxF29zaktCDfhjGuzGLVk8yYndBCPFsQMwVvPcaNZ1JpLi6UBCRERhG8KfunsEmZQZkLr2ZpDjkhn",
  "key21": "5VCAoJ8buhfH3wLb99WSiSquzSMurUwyGwMEa2Kmf55gTFGBchFtCdSTMMXbFGdTyYaQuKvNfZ717tiqPjmzJSBS",
  "key22": "4qrWu3NT2vuiq2Vgpq38aaUG6s6oXHXjtmpZtwKbMmHpbWNWjCqEhPVNVXYYtxRMTTm5kYfCjvAbsCU6LcfqVgL3",
  "key23": "4uaCFcN68SaPCrxJWrp14rE6i52tudnCZ9bbm2RESxCHPFF4FcmNpQUaV7CLTsHL7QkF6VXheGihG7arEiJfs5vn",
  "key24": "2s9iVKBMj4n6XpjV8tB9vfx9rzbac1EHWZNUZvRx8UeUTv2o2dTSVoEzxF1mdv4Y9Tnwwgi9cMWM1ABsQhVQTe6z",
  "key25": "4XHUWCG8cxuSVAoGW86itaGbTGkMeivXSNjE1bZEaySpDxYYKGvjJxeBnpbhjoyFMz1R1b27yW3KNL8T3mffSFBC",
  "key26": "4rSE3tzvgf4bBpnijsB9uogLech2W2UTdQPXR8rfzbUMNPChoBceMm28P1UjmmcNhV11iqexDcjeSbE4FhhKhfKa",
  "key27": "2zQrpRnzBfdk4e9PjLK44ofzkK5twTyxvUfyAixhgVTNCMMgYyQS2ix3NHPc3Kumz6WEmDYxQtJHLteTyfpEerJV",
  "key28": "4FbbwcNubbaxDSSt4LowDcnr7Q9yb2esDxo2ovoGkESE1P7PPChWBKEHkLmC4pcv1txWvBtqqkMrK9rXCafBDEWF",
  "key29": "5L5zS8QeSaZ7P8tMJB84phd14rcDZboUdCrBp94LKjgC3aKd6AJZpLMuwdhX5LfFai94j8eLiAFFRQXXv4Sm3zgM",
  "key30": "5Homo7YJKDbVEcRxi7T2WQZg5hnKfLHwTm6B6fAT3o2vEMzCJUXvgGvJ19PXo8DT9W9ZPyfZY8KUZiZFpsjy4UyE",
  "key31": "2FGhv5rSPEJL7M78GmNDQUEg7c3gEWCj9xkSGqDtyng2KJhu2VuKMYMECcRSV7CJaTDUhZY9aXDwH966HYDf66QQ",
  "key32": "3jEiV6srWatgY85gyoLW1Du4Y5SxpPyuYY3ib9H7LFxrjzrbstmfLMFVNuYowaVQWJQmxhk8yeDxtu2zqswf72ty",
  "key33": "2LDC8Uuzqen741WqRS4naY9Brt4gcjKRTw2czL19gA6sTvv9432NPjJQ6t2HsJWY3LFKoV4Dr3gpD5WiAdXCeyAx",
  "key34": "3dVmrhTk9U9jYuxK438pAjW5dYZgd6h3vY9W59D5jY5bq7P5SA1SVmc5pHcUrZY7Qm1h8c5RCZgZQWrvrGzuJF2x",
  "key35": "HtaAet1CpGuwfgJiPABEagdbwK5mMyodZF2yKC5gn1ddmtyzzXPRiF2T3ExtXWFLhPngjaWqXYZwDgqZ1GdFpg5",
  "key36": "5nJuB3GtnesBFvsZKrLHtgcW3wNFXDST4Cfye2MdxziCKwQkPmdsaPmPfXjWqWfwGjgZ6freg6j8quxinyT1XRhY"
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
