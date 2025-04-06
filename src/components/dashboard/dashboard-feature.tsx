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
    "4CUzm3FxTwnpyHxZigDMZp4C5FbDJigfyxcsrD4wUdqoyupeGXYDdaWy5TBqjHutbeFmyN81hh6WDscamYu4gvG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F35pvjWTdHyUj3ZNWhGdpjBjAq78Umuj43wqGsuq6BaB9BTvS7Z3EjKK8MBKfukvRVmjwrNi2eSMMFEuwvsvigs",
  "key1": "5eMZLusdWZvHLmCk2zhdfTVtS2sAyypvSTgnZiHoKyVwCMRFyvMHtUf8UACcfbqNqEqo1RiuEMND1WQuPz6w82XA",
  "key2": "26t6mrdRikaZzJtVPPdTNxzmtZ2Mk8z5yMspD3P675BMHXYaRdHQj23QyG5D8WUDteL3k5SiukLeQ5dxf2hRTBnx",
  "key3": "64hwfAZaCzjh5g8ieJjGFMDmbE25hpSXdVvUHrPygBQkZvJ1pErnhoaTox63mjPvzuojjJGLxkvekg5wRudEeNBH",
  "key4": "3nY1BCNzWC3c95yDyzy8Khwx2qBrsLhrPEj4adSfSDe19rzGgCdUqSYJuseQBjLpVsHWQpJQUQXbDaFiEDL3fW7x",
  "key5": "5rWgGAfyVRbfUtDCiAVbPdd2SR1Mf6q9rLitcPQubfDLmtVnJdtpZ9AQ8ZiHMXARZz34UPbQ4XUp1m5LzCnsSzST",
  "key6": "wVktgQimDBvK1zqnKYfaKxg1PL1b6t6CoD1L8rpyvNmJuLEu4wxaKGqYAdk63C89v9n8y5t3MAK7MSm8xTRf6Lj",
  "key7": "jrBuvgmknX5ts9pmJxYjenoAdyYiMn9SbjgD2g1rSNyMRwtmyp2qTyPpUn835p4sgeShruRSYhdsea2js4fyfpu",
  "key8": "4A7uJcgRyX4qhHMBRTGxJc82RFCwfPjuJ6EggKDhbWVAoFUDaAAnxaMjTBw2wLs6rUoXikqCQEvKb2XwRNDVch4P",
  "key9": "jY5GdeyxePbjhoFrupMQQMFmQfufqrcGE6gkj78Zn2T5ALumwXzSBy8KmgSbUPPCmBfiBryauFWZWSsWHzdAAve",
  "key10": "4xzndiFa68BWwacas35QUhEpCAXgaPBBJPSqFXZe6D5uUtXyMi1gqYwkhc2VKMNjLoZVWjpUUg4vzmVWfe1RpCUX",
  "key11": "67SARU2P1iejzjZqsskEpJ9vNuLKDUiYGVh4BfMvSjQyx9gVAgiUYxo78hJSFUVqpgLYWry1mbejE68QHqt7ZKsP",
  "key12": "2anKcFL4SqgxhqxgJmWDpRKhdWoz2rUKYN1qjaop3tcfFCaAo7TiDUEheRDPBsVSFvhKP4X78rim2pYAbthM5yug",
  "key13": "3U1SPMjUdYCmTA55C78JW78MdRHFT8cj2dgfvuq1vvvJrSri9MAdfY5z3MbbRLfzgw19KStu9kbuUiatotzQG2oP",
  "key14": "31cxrSWvW8nT6h8U3oqcLjtkndgL96ADuShk1zsu1PXpMSzcBs4E4b7LDLRa3Lq61egvKYLuC8D9e7uvLn2zdvLk",
  "key15": "3jXkMHEtYg4W5W1iWoX57hmnRKgy3tXmu31Fb92hNsaV9UNiLUEKVrz1CtQLMXXhrrceVZiLnZFLN73gTyeyx3U2",
  "key16": "3uXM8i4wYB3UqubG5WCraCj3NQoYdGBH6h9HhUBg7ZXy7U25jBeVVA4P1CNL1YQk851WcvZf2B5o384JmDkPDMnJ",
  "key17": "5gQmJo2QwwUZS9LeDNGoZkiSGsMCGQ3hk4hsSLJJaSuEB4jF9ehhZRvnqPdBe4TERehKo9P8WKYtQBun6smcgFuX",
  "key18": "3MjNk1SzcCeJ84mVD4QQ1Pz6XVSuaPRLZMdmajUfB7uXowAzWseztFCsaZdy1drFjdK4kx4RM469KZELiak2yXvP",
  "key19": "3ugU3dgACX7WKikKaEeSagaMG1ZzkgQt7ghBQW3MDNdj5bWgv26hSjMRERb4eHEjntZGnfExCRTrVaZ3bDGBqFmd",
  "key20": "3uFG6q2nL2mUGzQCU5XEu6wkrbfb3P9vtK2jEqZUaejdp8r4nhuuT4V4NNsd8Jahjspeip6cM2S3Nxr74UNFgdhu",
  "key21": "pdZaj4B5qYZ6HHbNEBBFmkhGkfhnJ2TJEUm5VyEeys43qKKsQRNjy5oN6skqioBnQH44Ej2rPifCshLVg126jmU",
  "key22": "vnYqy7PS7Ej4Bsc5mxYYTom8hZ5wKiszPSYU69uBntTU7jXPbSrKkW6uVCvoRvQujSHxzsSwmFBTFf9LjJKnJ6F",
  "key23": "4FUeD8d49u7hFrwaZaLVdeDx4G5PTnxtAbEzDZTwphDM7eD35HM5y46KksDGkxp35PvSa4uK8RpJxv6ER43mZuHg",
  "key24": "5CR5MbZacgqsBso8HPpATUVRJJBtBASmQ3K68AdjHvrDbR81GG34LaYqZFEAFkETimusGy5hAKYEueawfAfJ8m4c",
  "key25": "45tBJSVNzsStj33iQLjvMqQvx8DoyecarxTxobuCCboWsxwh74wwB4RmTBkzih3s5jhhLw6H8TJw3fCVsABsejJr",
  "key26": "3qk5hNCwr1aKotNKU2yui5dnsdz2SAzm5FR8o8CNSM7jmfAiW55cEAShjGGX62NNFw2i3okvE9CK4DWTDZiPhVGu",
  "key27": "5mmget8DhB2WEQGzCR6bqAMbT9CUvjdLHHnnFg4KN8Pww3gFBRzLyRf3PE85gEszoHPawFJSnwRPaLVBjF5mTcbH",
  "key28": "3b1vL6UvCNYmeJvTzvxaZxhKK69uLwdtg1payGTYDmpkP4KfTbUWwUVajpZUj8xrBZV3pj1pH62xKETMnnTe9beK",
  "key29": "2hfa5dg8gEUU7kF8p15GTmtL64sUVtwDbw5szfZkToDMFwK2q2a7iDqwoR6s9jPupPddGiXaeigqUraBDtsK7yEp",
  "key30": "3AN5FA3H4phVY38Pi2dFNRbxpzG3RhfT7Cc3Cu2PT3gcF78FcFVn4EgTpoAN4BXYqfQcqiwqkfe9Bj9sUy3Qaq4c",
  "key31": "55sHGyHJfj6EDL7Ao6YcfzWJdxj9376jzKGw3xka7zjTp14xHhaEYWZcVdJ7E83sHxYk97i6WZE4XxTqvgSsQfEM",
  "key32": "3AZwJ8NaBVdMa4sAJXyE3Qa9n5VWz35BckEgeQBNv4XraMUrhVqmoPyGh6K1eHQ3zJ1aEmzcXwWKogu72R1RvFPN",
  "key33": "w8eRTtBwvgFqLvDtEmzyPGYyUPiZa2zsWDx8eq9hXgTwkXJsdAV5m2k1KgJ9HG4GiRXKEbNgq8aKvp4zZZBY3My",
  "key34": "3XdNDGomnzDJ9soac5YAXZFY9guoN9fg8vj7Q4oPxa6f98yaDvrCmZDaK8FuTrWSCmosxs15PAc5pVctShSuL4gp",
  "key35": "3PCSbSiNfffE715RvZcuiLiL4DuUic5euPE9EJnn5ejb4NwqSC16fPcysUr9JEHVz9zGPMTqfftKjpYSCuMNd1ep",
  "key36": "4REU3Ai72suopwPx3czNW1rvCqyntr4jnxen7MsLgJJpokKWEFzLj9eN1bTK6JwxZRyo1PgU6vBsQbGr7hZfRLSk",
  "key37": "3pXUaNPNYVMiE4qGvFgYyiD7HRY9DkeESVxHoR4ggkfRj9p2ouf2E51WsWXsWZSo4KCmCgJndKfNwPgdWeNujd7p",
  "key38": "4hxMWh3BPsxb3c6e1TUjzzFdpFESjB789RRnzrgbEt17P2yifPd7BJtA5MZ2ydFvqjKXD3J5XAqEmim4g3gaXuke",
  "key39": "2ct36NAZkHejYScfNLJhHZtJ7zaPg4xhp36b3YXjxn66DxDbahwDaUxSvCMzBj1vxKtXEFoRESqzbt9xZyzNNJBf",
  "key40": "4mPMHKxPCfDyJqKoJj7YxMQ1EriuVgg3ZNVTkgkS9ct2pmzw78NJtPAiMVa6FXeFXPFCLnyEsww4Re715PzzECvb",
  "key41": "4cPzvmrXV1xikDhFS2Bx34iKsqGAbgh1Ma9e8nFggEAB2hHtgDRtYYpPUamQWJkq3KcudV18cTaj3b3BWJaQBZCE",
  "key42": "2jMWHjRDVbK2siuN4qtEUgTKKrjgZny4w9LnPVs7uS3dy5kAPpdDRAJSipmbJ7TiQZVCGhkLvh7thEUPBDasuQnY"
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
