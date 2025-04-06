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
    "3vyxs6pDdmQsEd6Nwhx84iVjEd6Equti5GLdmgtnzahMegiiGCHBijahsnbBfEM8WZFH6tcBidz5rW5LD9UA98ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ENtATkLepVa86Sj144foNkNtYknmLM5Uf8ps5mc6FEB7n8h4vhqasQNNuNePCtAbppFkXrXV4j2T8j4VPVeT9dC",
  "key1": "BidTbzmezHW9gq7xi8jXxgbpnsczh9ihNd1EUadsQtQtfj31AeKuFa3ysnLdDAR23vx3JyqtLBtmEjzEkW7Q2YX",
  "key2": "YVxRkZAovrEsKzEQ4SaVqK7vgBSHzgo2NbYd2YGiUxPJwMg9TWWBqP5n9kqpFFg7Yx7zz15sBgskdZeDAHEomzb",
  "key3": "3G6rkWu3UX7Az1wxzFBLJ3HQ6uhfVzG1gq3vTHbzszR7sbdTYejBEptGs4NTg4dEUEnDt7WucJMY538hAHW4i6AG",
  "key4": "2HhDG5RMVxeK38T2pnRFA5op9eGUNA1daJMvN4P6KNCsuhmpvoAnLqnnrw12GiPG2ofQ3rsZABqa9mtqQS1ePLKv",
  "key5": "4xKEuPruxkUdynsScQAwjRkxu69qt8QySLu6coeh3eFmjQsRJ3AuGkRyPwB3fE4qPrH78H8a3BjStusqC3MXXiWb",
  "key6": "3fMxwtfzm6ia2fquQwDdqYqS3NZrgyWJJAfuJn287sXSJhSPyTRMSxvLcYYKRGdd5rRnWDQYKDHxexHszMgPLfjM",
  "key7": "51WX8LbysuNweKPx7fh9tbtB6vvXzzFZxmigz4Vfwt7o1qYCyWnEPDtmHRtwD5HUvbph4Qe1nLdd4AgnAA5ciRJs",
  "key8": "x9NG1QiHtVzN6seEwtKbSnrvVeHigGZMfs1eQEe8WffDMevEbXyE3eZf5mDLf3NFJ388EQSGM4cKYtWUFKNp2Ld",
  "key9": "7cAMjDadG1Umk2pWySNe1azc4tZsH6iNWYEC8xdT5hPibGNfUckm59s7b1cr782zEXrEpJMfDmcWrHDnm4KDpPe",
  "key10": "2AbDSkBHPJePLhPzu3XoPWjqT4QtjcpCH6c3vzYc2e5mtR1kmEPussnmUMqHsYMQkDHC9nwG3CjxA92NfRv6idix",
  "key11": "33SJEBA2yaJskCNRgSBvAihqFprEKt6JBzTHku6KsHRWtYieMezSCqt7j3oZG4GCU8mb6PuaeCjvQ7ZSsJpom9g5",
  "key12": "2M7UZ7EKx9c5o1ojXbjUwvUfL5xLwz7SsaHMfP1H3R9pnXG4MbgRHyUVBXxQ6AakCVD9gnioanPsJ7RvvPCF4zxr",
  "key13": "osQjuowMPGhbWdbmyN8yTwY6RG5WaF5VBWhxh7LKJXu89z9TPqinBtLDMXTSFPaJwCza7B8bkeVzLegsXfNDEEn",
  "key14": "4xKBX8A1LHdEEhuCYPYZjyxMp1RamJL8Kx3VZSMhdG2Qxd7hVPwW3bNnW86GoC5qFk5z2NNJvwM4jWPBYGVRTxmW",
  "key15": "3Ew4tZfV8W2Zzzfizp3LMnM8Sjky4SB46iZpQEzC4tFAVMa9tde4SEHWNVtQmErYig8LnzunJ6N7CHTK2pDd43vC",
  "key16": "3yzQx8AcwptDdpjFc5Ct87khdcCDvYqU3Dmbsi1Q176EX3UPJg2BdaMP9fFe8B8ij5sVS9WeC97Hnc4ckpYqryiW",
  "key17": "4pkSDMgFetUmiayDKhSqCHSBLzWqkoAmCPWKQBdfuyQsJFtQwVLTaTcqRXSFymyunVbKavs5EuRe2GQuTMUvw128",
  "key18": "44DfdNsPT3c26tcekhBx8qdUVDWu8YoMheMkC6k1GXgPURt2vi4oPvtMEZRwK2LKrXKCawJ6hAPQTkVzMFuoufw4",
  "key19": "5nFobm7NL7PLoEnnY5fKHoeNiMQo3tnwe9nS6nr472gJT25ZdmGSagFubGgztDSsJkKTscDQSutkSa9kWqeA5nBu",
  "key20": "4xKbNUvWX1wH8hNNsKysbeN3rwe5PPGY3psEUR8AkBnx4ViYLqVKFDiEdKgBKKi6Fc4LqJCFEFGPcSXQ4HHHh3Vj",
  "key21": "4m1tAKfkkoABSCT1v3armiHSNEKXBU6T5jUw5TvVmD3KkZBFoeYegMcuJZqQjKusQY3yCBnwUo8FPWnLyFW9sUP9",
  "key22": "5nw3DtDtDDh6ypK6V9w458YwdAwo5LFXeoCznrokBHpVQkSucwuquKZTpQaTBCGWJhb8KoaRrKFBTjEwxDoLFLKp",
  "key23": "5AWRTcVhe1c5EZGn4eFNCKrm3HpRKuFkkSBMygFcS5SRLVTHKJccaffqoYeQh8vWf3HTzWS635VNWBL31wrzC1DA",
  "key24": "3qnXjMjLJwGWFf5Htty9ydFu6nxjxvjsy17HAoKscjvKfEEuXyGUvrMWbQtnz9Y2ZbC4cJE1qC9AV6ZVwEWsu1Ad",
  "key25": "5tb6EmYiN4i7wQnPDVRb6wy39sJZ5AB6PG3gMcHH5A18KndMXum4Yk1cw6XhjfSBGCwQH9vc1drbuBEpctLTPZWQ",
  "key26": "2WQGkaZvtEDKwaSr1kGrmLcqD3BaSFj3ukau5yF61CG5PZHJUpDJwSBj6JZC4uT57NprEhg1sja1FP1LjsPiAPsA",
  "key27": "5bXgaU97BtLd19WjhjBSqWft9JvGSVKEqyZK3tDoRRv143W4ktkuwobSqRpr5Bse5C8U6tmUy3Gmgoth8wsSx3Dm",
  "key28": "4LWEQQJmVwpijqy9vpWU4hMTPgNpZEk9euiuwVv9gEnh4Yu9VEK1HSaXvjXqpS4uyF37vP4gPk7REuEAQV87oweJ",
  "key29": "3CFoUNxNTpfsyAPrt7quFCEt7ajv5qG18tppWXJpUAsNmQcTfCTfiDqEaGR2NnYzaNSe654q8Gy8sHENkud87hMD",
  "key30": "4x38GfcEQbE1TTdTYgDdt5cxFWrss1yonUuMGGxfNTnjxJcrJ41vAbpJoobF9BA71TziNbZ5M88xYbZgaBPBWtEd",
  "key31": "2buow1bsXWMkJFsqg91SCiTD1LqS2VsbmpgYyQrkhNcN4WNuB55WguQAGPPMt2SC58ZWD4mSDymFxJebZAhABPRK",
  "key32": "3v1m3suduCdpxtQUqcmYK5rhN8e3JNTp8KfduKD1JynYDCcAj8bpeSpJ4sxZ43X19YbmtzDQiYPxVLAnUiYguwKr",
  "key33": "2u1McWHZnX1vdHt7uw3zZJfQt6fuiQ3SXXFZD3fDmf3UNmLagdwdbiacUhhNqebsYMZgVj9EzSFS6AMEBFGaCpME",
  "key34": "4gUJPKAzeN1NAX1EWfZczNqP2RvujP16Ji8SxWpfVnihGmxaG7FTYirg7tZdMLH9YPGKsKqgEHKmeqkavEuh8v1",
  "key35": "sGdg9HXLaLowX84zVRzkJHjb8v6toXuxmHp9W4ZgLuWcQcStt6t5a8Y7SgoHPAKyrcT5vDrvbj8ndGFPHCHPoMV",
  "key36": "22K2dGBzPpbcEADxNRT7m79cNyTiNo4k7E9cB4mk9xCkQ5j8rn1WkHVxMD5YX6jGuoqvUA9MxjLjzypR87cxA5K2",
  "key37": "41WtKBdNyTpwaY75gWaV8RGmxvTv2UnGwHnB8SACn6GjE6VvAZv9YFRkz2WtquqfM5Kt2wDpbTvisX7VjyBrDz2B",
  "key38": "3aiwSwm3AABTQgWtyoYQAN3nRbnwzMLMiJZZJFTYfLALZ7oPdug8b4WSeZPd8tpTVraWxEVAupVSNbxtWyonDawL",
  "key39": "3Tt37RGEePHZaboLM8i3uciQjMZ8jQ1xnP9y7MEdZg73cmSApQ8kJCAffkuNfrhEXc5XR3LeqNsnFsY6NGnJQBxG",
  "key40": "3QWcwt5Xoib4Ce743ZRGF88y4SsBPJ3U6LZGaEVxXCF56Cq2qPVHAmVJTJiVnyNhqtfmhebSqhst9t66piBi4exh",
  "key41": "4DQTVC8FK4DtjkN47zsw8tATEwazBoZ7hh58PzwUVwjjY5XpM22fzYdf2F1megucP2xFWdLRYUYJwxd5yjmW626d",
  "key42": "5jdKkd3EpSg2vfycTq38EaXtd369igsfF7jAXdUzbm9DNfRz6x8zFTPsBGDkQJxatgHJZ4rBDPZmduz1jqABT1L6",
  "key43": "33XZFkgcheEsYJxU6uHWd9WaUCDYRDu4mFsSL7nv5g455TpDK22Vg54yGt569k1z8QiGXdWorPPAee2jwLLk1ycr",
  "key44": "WcJpvDLHiuzZgpjgQxR4Z8VsMBZ6NikunADf6mw3SnWjv84Tis9ijrWFspQDD7a32kftjnUdpYkht2sKRdbvy6S",
  "key45": "4prALyYTyhVVD9mztz2TyCnrhpEoK6rVsPnemmESBuYMLSokdND6zyRhYVyNNNbXUUhqrvTTGN2E5kRK2BjcwNRM"
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
