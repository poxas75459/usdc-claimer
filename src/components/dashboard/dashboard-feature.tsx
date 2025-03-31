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
    "3DTHakvpjY4YPSMCeyBwosMvKBshXEQaqtnsZtr6nJGCt9yfKEFeGpxKi8c3mD3SaVPYq8uHrzj7x7PC2vHwYtxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8njnrfW8MEEKmSNVTb3Xy4DSy7yb3arCnytdmsR1M2MA7R3vbyvjGJBXqeBMWMyKtUSLioc8jbXKaZbBNJE6wP",
  "key1": "57rAVkCCvAQVfK914ZZQPmhLPkyjm8ohk77u9paQASGRt1FTRUtTSSaSEXme3qD3irUi5WCBb2k9MZqpUeRrEuF9",
  "key2": "2TsdA8b8sYStAJXwgmDM3gXqVenZGrHrZLw3U5ZcuK6jgY4DTVV7LXnMYxJ2TtLSwyHNPjq9efgGs59GNoumFx7m",
  "key3": "2qq6rUwMzPRpJ2xx7z9x2YsBSNvRCa1yfAXEqxkmXQc7oood6kXWXyqxg2j289usxJMKG1GDCLxXKvLFeDVzASEt",
  "key4": "2BSfLJo3PTqgofggjCfcRukWk2Gp3syRLgEs6ghp1wjEfZtVBMDeYYCNFkPu5Bb6WsEvFK3GvQaZDoFnQVv73eV8",
  "key5": "5Ta8T4Jadhk7geBeu8VkhyWgaC2XKVNdbqh3z96PdPcDhv3trzB7wzozx2CWnix5fKMLk6fyMGpfbUqeGJAyKXEB",
  "key6": "393hWPqEbgskGKnye5WUc4WoKqAsm7a368ZYLgUVnK6U2w8QYD6ZdmAeZ1uyGzAD8YvobaS2hkL7nRmxcBkyL6Eo",
  "key7": "kEuUf4N1hxAZECEnMBDD7Sj4EPwPbXChqksuMARUpBB99z8MoP7biC2joWsgkNei7Qj4oAPejRYBtHgcBLEDSaE",
  "key8": "2YeUa9bGLyVqBjpykMndQZvFfwuBgK5tL44uS9uXxQMT8wABiJSN9TEVmXefR7RmgNPm78xRV2TfSesaPgdemCuP",
  "key9": "35jFDmNuXwgWrHbnHRPreNLogMnz4oWrL3XUm1CzjjD8jrQp4qufhS2yoctWykEAgGakJ8ib5p16zLBXxbTP8imh",
  "key10": "39rECtDbte8sc5cDknpBeC4yZBTb2yLmLpBWHkWBvVb7gC8hmkvdbdnehxiV311yr5CvAQqAyYVfv3svHkoft9E6",
  "key11": "259AbiADsJvQHQ5c1oCqyNyijxPRUQxC5SkpTR9TReWPEEmYQdNZp8UoP7HaBz5hSWt543jc1qHKDuQ6A43LBNhJ",
  "key12": "T8LTPoBa6msym2ALx37guUZWWyxqFJJqGGxUaNNrt5qbYZyHFHmUos1tKim5aidPAzHi3zifYF2QKcseeQeWKM4",
  "key13": "njzRcAYiw5BqTbvwcDeW94nALUcLUq9bD97dgBoNbzx5q9HoPw4vMYkx1xYtaRYjS8oNE18XNd48KNSup8yBSMX",
  "key14": "43bhjhDNaboZEpDfrJsgH7yPXWX29wLBkMUCUyfTbngPLC6T1WiM5c3LEuvTSsnnqAz8FM3yhwncZZsBYmoWLUZ5",
  "key15": "2hvxc4C6YT1kkz2VWUwmsCaMsumDB4MQayZpydaXQ5r4SponzoQHPHyb38H95GMJNd2fE4UAUNcLtPCtKpsHWRGi",
  "key16": "4UTWBgNRH1yQuMvkV3PGjupDSdpska8Ns7tzcrDqCFeZRC2eWPLBm7Bk12Za7MECxmVj587dP6jL5j9VFxRuiW9S",
  "key17": "2fcD7LDzG2iG7euysgJUFbVmFwbrJpQsyh6TmBG46XSSkxCusET4wD3uG46H3CjbXVwuJEbhXdMzk1LJ8iHSvphD",
  "key18": "125NDoVE7JQhT8263qyrDF53h9cbZmAud6fE44H4xC8BVLctDEZrS8jUkKokQq3rRPigdRBCsoprgL87312nF1de",
  "key19": "R5iJ44r5cDPrLkuSvCVbYX1pRfKbHrwTxzx9mjRequeq9avpJvoHYmCMjEWWRGt98Fe2tFsdLvHRa3meKEEFw3d",
  "key20": "4aymwJJREgG9S4CetmN2BEENEex1QhGN6W3TX6cXEmupUNjFwFbWWepkY5uZkTNCZYzmso6iHJSvEQnxjtPZRJXz",
  "key21": "2wjWTuaSktxjgTdHjFgAShasnSkD6DyukoGiZRUT5zN9q6bt9wPFZ9ELhrJ4PDBF6znK3RUsb29Zw7CEy1tJdHTb",
  "key22": "3wtR85G1p6iGwnGy3fZLnGu3j8qJ9xifUbrhHqixVbcTmoxh6yEj4FpK9q8aLhur6RNoGY4M1XaLLV2z2rfNa6ct",
  "key23": "4EdmUBgJkJTcjruYmSXW2GFMJd3pv7Q3GJ1aFY3tKVPacVvnv7gkS68JoTSjyKifKcNfUB21iuVhJ9JFNBmPQao9",
  "key24": "3XHMzpQ5Pipw61s3wX9ZETaUEtR3Z2NUZp3i4U2uq4BVrJE9dpSgG7KUCqCENvX9CTCzMGFpcpRpdTTFLn2jk4LR",
  "key25": "2qVYWo2xJAhSexMx2CSfr5B1fGNSCr2BQ1vbbhiyEarJfZ97vz1SEdoNwEZWqZssACLrFxRP8zbjbfHEhLYWmmYr",
  "key26": "2BLaTAfk9FNaE57bxqnzcrbFiTqFass2VaNqudZnCr1wYwZsrYKPiLmnon4mMKsXX1PT8rZxnxxJyChSD9VuFk1F",
  "key27": "2sGCAvCKYbDSw24hNezbCkTpU2EaUxqNQTWEKnxBVbBdXbVQTZMNmtizf3C3vqa4XAwS5SQLZ4ex4UZJkJ4ZR2CH",
  "key28": "ZHscb9Spv44bN8tAS9dpqsSowBA4VKS55PBZenRFBvt8LqXZebhKLzTCz23ZQebKGJiPnaSzP3vJfyybErphX1k",
  "key29": "3mvPCo39bQxzZ5djpGo5UV5ZUMtokXB9suZAAhhyNJoJDFEZqakKA3ajDtv81mVb8M8sBd9urbpZuiWsAaDRG3wa",
  "key30": "667HDWqvYtEZiAFZYZqcPXUoi5umHnw6nXEqwZTA7WsU9FDt5HkBNWUszDiPpr9MToCMcS3wfrKpQa3ENfMx5utq",
  "key31": "63VtXwtYNKNYCNmEWNgcTw8w4YZmRLnMUvbY2KNF7h4EZzRaJHCNU2xfWo9RYhrb2NoBsVbVwgYNgfxjj1ekRPUi",
  "key32": "4cZ7TX7d4aqf1SfmwhTSSZo5Wf1JZuyK2Ar7djRTYDAw2oNiyxQisgqQTuHBUzTkaG1cLZ1Tve5ZLj34Ymdxj7tG",
  "key33": "4AxQZqsyTzCioWCAM7XzMHW2AKVPwDTePyJ5MaMddiGvSXgqCL4s7Vr8XbMZjfHhXU2U8bJSGbTLRa8gsGmEVXtf"
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
