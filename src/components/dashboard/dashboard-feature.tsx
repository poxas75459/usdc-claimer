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
    "2VHsDmaWCwLDBsc715CcuFWPhnXiGtSAo7CJUqkDvn1b3NurcAgHjE5Jcbs36GmWQQE9UoQf5Kf6UGt3FPxtB8bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abaZVKA7jaYmhFMzr97pv8bdqPji1a7R9JB59ACXMi4PJrFKZXr4ZNstBXE6qK5ypRpcffF93CM1HYvtZGexfzd",
  "key1": "3bsfgvnJ5F2vYed7Qeyf3ur3sPnDP3frm9e911YxCN4ixaz9qSc2agGViG54uWuPGU2nD9GintEsFCcK2zseuJEg",
  "key2": "5jzUeB1WheChUVKf8whgTqPNaXQRQPQMc3Jcc27Bo52JxTKR2zZCNCnqsB1yk6q6z85bVpxuogj1DXjWpoguArB9",
  "key3": "25whPkpoQLMmyxcQDZPNjBnFryJsLgDuG1dAArJw535HCjyPqKvkR4ZSZkTsy25YQYYw9LYcagaBeav1wXUVVeDq",
  "key4": "36EP1kiW2D7rE972UmcU9zM9vvGgAdi6fgvnARfj2MRX3P455AgsVCneLTrvtXqTzGyK7iRmwoHYrZCYaY4XXp31",
  "key5": "5gL8VdsyfbLCHxbeXB8aeXSEwhGaV7GJb4bLkRK8iLhqHiTV7tsoJHrpYZP7iZ5ZNbQStcaVUD2njE8pDZSxyUSj",
  "key6": "8GwqKVJuu56RA4wgkeyLkqJD2tjxpQPhmPpFKY5cTLxB1rbe5qzbYsvJ8p242XSC8AyiEEkSXZ3SvSwUgxtefcf",
  "key7": "3S7HF1QVNLL6t8rbCpqZW5EF6tzoLbB5hJxJBNkt1stYbMPDsGY7fwZzQGbjeqT5SLsfpqZRVb7SqhPac9dNxLr4",
  "key8": "3ZQ8YUUZ92inucbyiq45pBeBqyhHz7fCuvwFr6voWx5oGnUYyMQqhWh9DDSedZFXHXeKn8QAvnjcCMiokYx8wf8p",
  "key9": "EoxdX3hxgQFhh3JHhMFgawHztzQKBDaToGGC5VK4WD8QbRznMbwbEFb3QGARy4jA7ypKio7EBNqTwFLd5XYpK4u",
  "key10": "2KnSb1Bnv1BDrEds3BndPDJfo2mEmKuadMQ9L8JFBrRLk4akaL9z6jTx8ZycMydSaaFw1mkHK4sYRmVix846gEqH",
  "key11": "661gfgCzUfkWzVvpfHThbEb6aSyPejqzQa1PntYK7BhxvgAJJvRM3Zstz6jRLCWo5GYiWaBkq6He74gFVZFwbaz6",
  "key12": "3iCnXSWt86fNpqxDpz1DvsHf1qPupYXJnWFxxpwCzLcMuwuFsqQpc4Jzw82nrPxZgNWKMQK4Bw97SrKrh9k4uyQL",
  "key13": "kfb4QywWvZMJzr8hpLhUqZ55enZHJhbYvN9hFmnN8MFsYPEkUXnHaRabbeZvJZtDcUYzyvBBrrY3YqUAqikkEFC",
  "key14": "3xwaGBBqEtfesBcap6aF3qVHQQQKFkJPC9fmgbW5HMiSNfof6CRVGWdnjC3fvD4pnJeX7kcoNS6Bc2gyEqRKWTyJ",
  "key15": "3DTFsVKqUBcaqfJaLMPdn2YYyC8jxFGMjD4155P11JZ2RtBSme9eMgVEeFBRrfbmtS4bHc7ohS1qhX5zbxgSK6Ds",
  "key16": "kq1zHz1JVDZf5L2TbbLi3R2tzadtsoh8DwcdJeitidFKWPmqTwoya4LR4r9AfFHJHCjCReh6Gow8RsF4vWyNxGk",
  "key17": "2AjCiistjSb8CCp6E6ThdbfPGoMbjU4M6SNKNZczEcjWHXnK4P2deHcVXs8cHTeXZxU4YP5zoABSNPveynJUxy6c",
  "key18": "27hNHEEATyfcmUG394Z9SbukX3gHCqrSTXYSNEwRZEkNUeGeyFPQ456pFn62tHcy3y6F5u1N5X6wKATVMKWDAWYU",
  "key19": "2yoraSTFxqee5a6in3YdDcwWbt8HamdMYzoqGF7bnVpUo7zqbXUK3gRZJag5fMFm39MNHhaN1wK2EvdKXww1mZBg",
  "key20": "2iLg2xCubdiVws9REcu9g9mRZtqwte4A8GTy2tyVLd2Lb7cLsjugs4YjuNLFUG1n4SR4uudUhoWyZEc5gDXa7SZQ",
  "key21": "LiCf9XNx5kDbRaprUcsXvaW5crVtcRuKG21by9VufpZGFBjqqXJUz8TzvRq87nWmpknX2v4ebL5HhqyGoQgukxi",
  "key22": "4F7cJ4pKc5mw3Gt2vAucob5dEn1gXHniQmn3Re3FE58fyHbaLTgXwyotj7L9Cxuoq819fFUUhvCs99ierHV2Vo1s",
  "key23": "4V6EXcC5rZxN8YAwHiCvVRxBqPy9i6SpKHDtiZSxnnMFPqvtJdVEPwpg8dVgKNbXHxTb59YeP3X7w6B5mFSouuBn",
  "key24": "5KjGMfZQWwdCeJEiFgjY8N18RkG2dyGNjzK27JLcMtdLFAp9TTi1Jbnb3EFwmTv2jascPGBruA8gsunvACbhpdj5",
  "key25": "5u2a8Znumz3ftn3X8DmYBSHGh4yAEF213xgrbs6YFYkbVFCNuLSbRmTewg35Ypzd4xEut2jAwEmjHakkK3w64s9S",
  "key26": "5mW6bUxivCwVqznfmf5kG3L42LAduBmgHNr54vcvrFKfW4yhahL8xA7mtWYiYLZZwaJ9JUT191tCwYAgsL5NZjZf",
  "key27": "iTX6a7S1vBNDrmjEFQSUdTVgavhKZkkYm5krbqVJuZk7tAwxUUAeNAfEtKLCPBEAuV1AxtTNQH17aQfHrutN1Kq",
  "key28": "46d3VgvgMgAea2PP18tUaM2iM4HKP9aAVgALvAx5mgsFdBauH5DK6hfcE4qiEtJvrAdYEs1mbUghKgCkopZ5xyPR",
  "key29": "4xYd6nh2EBxCJ8qtWJhoW8FwYsPXMTwEYLH1eVLowAEeo2GTZhiKKmRGPgnMF7TmXFPpZ78pyQY9Su5RdPiJ5uRm",
  "key30": "5zASsmkyTgDHrUWAFbtusbitEFp6wU2zYxcPCyxUkSXy7c4LrHMaDAV1zBfooGqFy7nWbopEckKrTGeHrApj75PJ",
  "key31": "4TYoYp15WSw4LMeLQ4UQqGLGoCP6NxNNCyX5m6hwgQ5gCA46h7332zG9LyfVQD4Z5X8E3Pk6QTRm7UWjYV8iH7D5",
  "key32": "WAuNhYB4NhbtTTvaZGPEnrAGsdRLqFJj9fyAmXE8JUzvBSCEyKxUHGH8nRrW8goFgVrEo4kxdkvWv4DhVkFBaqE",
  "key33": "LZb5YCcWR9WqBhbXHFe8uh2H4S9WxuTempBKuKomN1ty66zew9BphjpRpmxrUPkM5YNMa77zdYsVnzFXtuxqbzS",
  "key34": "4ySHEFHwmmC4g2Zv5xLZ5pYNhtrMiuZEm4RTCkpZnw7uCfYUJRiqGhjYJBq2VNmBkzdWRbqqwduAy5RHiLe5V6vR",
  "key35": "4GPR7HBWH9xH4nQYhsQJVJr1WyBnTeNth43skDUnfcTHKjksF8Zw9ZTyUnkkPHzEUEYYNnWrJCMxMfm4yzApQbon",
  "key36": "5YZjUKa5RDcv8L8vrmzNLVJreS5ZcFACgCJCE4fgFXZLrohgkvfwt8v47iqTsBBw6anQEy9ohnG36o44euGmnF7k",
  "key37": "S7ykoxNcwAscAM9EdXjpbCPcpzZbFkkWgpgM2UBDMtNoyE4YXYg4JfiwG1YrseQVPT4cmbbmT4fxVeg8NwFmHC2",
  "key38": "5rVgqFDLi3415Sri4dtfc1j4m11F9CGSjXZ6wh1ZvmuarWjX4C6H5JZS7EkKMDvDUxKaRxR5iM769ywt2yDJcub",
  "key39": "3K3VNabE5G9cmZtpU57dXyGsXLDjYfbR5cvRV9WwScBe5sUWPri2bMn3ZzTvkkLEuP12jBfxkAEPTN64Arh1Bnko",
  "key40": "2ArUomrxyumYfkzaGiHRd1CUEXwGJ4v9LRDFK7NjtmUfSSwJV8yhNFKyoU4QXowNFSV491t7r9eCisAVNjAprxFw",
  "key41": "3eqo54NStXQX3fgUX5dNz7W1CcB3GA8VzBH8E5qocb2qd6n1X7kEWZXw2Qcfnjrb6kHsjqtVzXPJEgBdy737kULp",
  "key42": "2JQ4ZbotYMpDDhW6GcaDdrkWQ61JfSVkooyHi74DtQnczZ3JXNQFkkLFSm21QkG6iSKv229gbDmUXHfdCxVLJ2v5",
  "key43": "2uPUrjUtbv2YntiHM9VWF3iURKA3tw4MunZX4nH5BMYDf2owbySTpxeEAJJPw4C8JniqYNP2QEjwrvCen6dmb2Sg",
  "key44": "5aYyA7NSbyHJYDZtVtj3v4twyrdNk4WGVwUGJCLDgnUdKyGJR8Jf79bbziivA7pZUnFck7g5jR2ZNhE8EaCx4Bzy",
  "key45": "W6a2wS9qiyCy5xeiEWzg9EvVb2eHprHxaG8CN1BvMjaQTUrhXBZmBSBt1sZMrAaJpdaWLjBxnh9PojgbgEGmAwZ"
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
