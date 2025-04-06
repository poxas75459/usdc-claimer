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
    "4SvrpRLPFerDKJg46HApzDmq7u6wxNhGTzaRZs19jr532W7KZEPvkQzNSmFo4XM6tBc5VxFyp1ogJk8LEqDr1vaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZWaS41uWVa6Vezoz77zM2h1suoGEjH3sxHJ4PZz68hqqb1a72tV5VomX9biuxo73Qh1a7mbe4im36cJBtDy7pr",
  "key1": "DEkmbcntNuqKqZ8o5ibHkqkSFnZxVRsedpjf1z6iDC2r42tnMs4dogH6ucbVUr6ZnyswtY2ZVxoygk3w39Deczt",
  "key2": "2W9Rv4NTtkyWVLUjfYyVgAvBL3dsBoQRyweLmFHpgZ1pFhj7BpDayPfrSm78brEWHWb5gWit7BoQbiEVwTPGem65",
  "key3": "5k4vqBUH3ywbXix9EBJ16QT3ih8521pRVpnYXSuFejevAueG2RFKvZqW6PKnFPWnh2Civ8Sbzfzdh4gJQpKSb6v1",
  "key4": "4f35yoqMJXTCT14H6X7imQKqWQpizD1G8MSTopCPmGYPpwgqKEMuvL3zyPDUsyTPhAMmezpWxXDKVgWEQ2Y4FzBj",
  "key5": "3oqkgsioZSnyfqCjcgFMR996SLdMpSPwMYFj63PMtVwJ2L2nmfTVMYwN9MUfi3fdzUP7ied54yfdrCRHDeXXcdum",
  "key6": "3dY3fhWX4kbhkDgmFhpqWESJwZA6EHEqBiFacRxDSJexAzk3tQGZd8fBuy5updL96XN6NYPFwpfebEiAHaEit4Av",
  "key7": "2FykKTysj8FAYgYoPX6S5pz1mFyfXEqfU5sjiAghdCVgVtizyAKeppQw6Acw9tJFGb1YEmQNBaQbKkF9t56obAjT",
  "key8": "5hgWnJZR2UNE4qtASmsgh2tG71e7XDqaSj1YDE46MQLmut8AuGape43CTP18PyK1ys2xvGD2ncg4whZKF9qsmJ1d",
  "key9": "5c6vz4dT3grLgvmy31u8MSEQLmjGUEzMCapVY5gHkVBK6dL5zNQWoCLnv1qzULu2qiguiByPTZg4zVdMvBxSvX1r",
  "key10": "587rGkeYE7ZzPuSVdPEMF8KsFCNf6XWwQay72JkKv8RoFSKHMPunLw1c245UuJovYmq98BoyCcKD4gk82pJwbaxb",
  "key11": "3ih2fecZJqT4RNDYPtJKwdJSdqtahm9T6F266vSQqBTKgN2C5RwUqr7HdKDwEiFMjTWabkqMGjJ4qN3CFjo1mLo1",
  "key12": "65vvGjQmgy4nm9qggwpn7rkKU1FMPmRYEM6sLJbTftopWmDhPrsQ7Bwc8Pe2AaMcnWE42vW96gBwYM2RB9R8P9Wg",
  "key13": "61u78PgoDb7jbp2xzebZH8VXiuN8efUyw4aSxiUTixRMoyg5q1fqt2eQKJUmV9ZYqSRNqLhU2d9DMDQnDkgrGn1U",
  "key14": "kqvKZo6WTuN5jBGywDrnWXswf2szvJKbDeiaapAUvdr64HkGKZF4hE2Tr4U3HWs21R8ejXutrQCc3ULbYwhzoL3",
  "key15": "4bcXxscXDdWnYUG44xCA84YKPDFZF7CYv9coj47mxecNfiqqgwqPdnquAGMuUYkN8M5ceS4xPHxPCg2fq5QGxmQU",
  "key16": "2SJDeqZTMeKxUeiEM1RD2zzem8LHm3tcZGovGFJRZWkativmqR6kp5VVAB62A92F1TVGLYSdKm6n92SmuRgLa9YN",
  "key17": "44XRNbMpaSd8EvFpPf4JJ5bpUQNHGqTxtCQFw5pdz86EnA9vZK2mizwN7zPpZVynGFRYL3XuMYJwEA35mAUAgRAq",
  "key18": "4TNzAAaLRMxqKWyTx4DUCWvow2dVawYgQGvEdzaDoiheCKBN3vPbb3fyBh5UbjibqHPiZy8TFKX5fRBsMrtgaGxY",
  "key19": "4DA2topEoKCjMEzx7FspyfctRUZqofeBXjX8nu6YUzdtph79vzqkf72TbKgUAGetpLbJpgD9UgQGKud6Pz7PbEXT",
  "key20": "2nDDmJa2Sq6WATYr6YbFmrN9zw1viY8oBNW1r4y8RMiwnXaGkEKdS2AHXoFWruSvwHiLfnTsvaWVV4TNHsgcmgZj",
  "key21": "XpX5DFrvJ8BfdZRDU1rVPUAsSxQ9X8aS7tyncvW7yrqTuLBNF56E3hU875JARytFkJn8639fMxeM5JNGU8HgMtA",
  "key22": "56rnnEVDfjTqe8d1QWk2yK8jLcMNXyrS8KkjErt3XKrHmYLa6urAqsPvyg9GdXrr4TcXRyq1uKWJYzepEpyPZX8e",
  "key23": "47J1BcGqtuRWkCkmWo5shKpBGqoQqjYZJYoQ4oXELwCcWb4yPm2UMm7ef5bGAAewsf9zUWdLpMpoJh7Vz8BPcRDC",
  "key24": "4hr1WGRopxaMe4Ju64Ng4iPSFn326Rv5NV3FwRxbxKskrrXNGP5g1rait1oNzFiYJ3qCKXrLUUpHVr6G5UBK1Zj8",
  "key25": "3SPGqiiScRbt1uJDGfiQpvvZMRSr5UbwMjz1vpAf4bZe4bVcA5jruZhQXicMJcCbWjKrYRuCVBcNpPCMLafsE7LG",
  "key26": "58oWSj3RtL1mZRc3a9EF22weBqdMXhwoqxzH6HDEHbNcVTKEV2YiFsLTXnh5RDfGVWz6JBJQq6t6Y2xv5a44pcNJ",
  "key27": "4LunVozuf3bssMnmsRAnz3toBa674w8cq95YkCSrNc4y7B6rysvobNYgcBgMrdXQczkrzLY4QxsmTnk8Lf6iVSnv",
  "key28": "4aDHnGw17p7jajwvjpr28yin569tE9e4pVhrijBs15TRKzSnPYoshNiqQe8HPJywGJ7KJ8G1TwM9aFENhEAVkbW7",
  "key29": "5iScXgxeTNBGo86dUEpxktbKrp28GiniP3kvoLy9D48WoaYEHKUDDStr5JEarjWsa6UzGw1HXc1qM6Pt1kghahSw",
  "key30": "3pfCxjkCsSU9kWMY5nHdLg4gderA8S9pkVpNekXwMywnyrdL7L9GDAPHaT7SZfX1DkcoCoJMSqBSyYRKU48YDf43",
  "key31": "2UQgzFV362pL1Wz8hhMG3nfsfnXignon1HhDd13W89fh9BanHxny7eWutxBHwrvZaACRSgcJrwEGPUwtz6owQVFC",
  "key32": "3qR3a3vBu3hxAvjbwJZRTSoZFYHgCRzXsKHZw79pPbXnSPnWW6CSJ3MCgfwPcuJW88GFSzp3Pa3myCA6CyTS2gwT",
  "key33": "45LU9NTKMDrzPYo5crHCeBr3JVk52KTHBZGJK68YcHojj8wFzum74hmYamtrudFktijLs2fiL6yMEgcKaGfeTLJ9",
  "key34": "4J1skJFjusoGLJTd43FPQBnM2Lgpd83YeUADARvfrbAkFpUpi28yeP7C7PnJ94o4dgwvfdcWrec2K42VG5EA15pB",
  "key35": "3z2yc1gtgnKCQVYre9m1nsx6tZznW3r9pVJxBWEm2yfjz4V6ugvBrLXgQQET5Cu4GCCshQkJCQaGWMe3YmQ1JXAj",
  "key36": "HEyHANdyV7QwSrRv8UzKCEfabqYbBT5xt9JMimfUx9NjnFtgcjokma55bSZAcbbN8GtteL8MSvt4B9rcAABPSuM",
  "key37": "5NE3WfAfM36LxkEaSTEFfcNfYAsBz6J56ZCWXLkus6jeinjWUsEHqyCM1R6VYfzWMznuGdF5W72Jhmsmma82LJ7o",
  "key38": "DCAgt51fp2gxdgYdLaiYCwHZyBTa1SiZ2gAtLCXisEGZW5PSfAwgFKTcA58eDAd9HFsqz5qTYC7jNmGDiHVgZWG",
  "key39": "3q4GcRVmBRAT3vqh1EZhCNtdMe73hcLK4Yvu6Wb8pDw9iixuArT3MsT6sNTGbNDJXgSqE2pyB7GgchJ4CZJjAJ44",
  "key40": "5dVyZCVETkAMwUvNWq46RwhgZ5CxSGdgKiTQiwsPeYd4HCRighUYe5TyEwSqj1XCubgY2KCDzqvhxuMaWK4PY6zC",
  "key41": "23vDtHoa9xNpk7SQUQigwtmwjnmSmdcgV83jw8hWi5gCtSNFwE35WkoGRNXQrGUxEkn5F7kWXKFDvPCttda58D9h",
  "key42": "42bDENTcFpf3quLurzwokQHhrW2bfs5iN9A2c2tEt6y81ctHnx1MaL8qu2egRKaWDQ1q6kR25eTc7tw2VnDFsg6f",
  "key43": "4gj2QuQAcwnEr3hYby93ADhRcC11ANtp62yWjUf9Pa3xxNBYDqqsyHyDgxZ9oW9qX39LDqoGSPebMbsZNyTsYeZe",
  "key44": "9b4Muire6nWqPT9TDHq6Lu74S3kphpSq12Qv7mGACz9zickfRsS6KRqmCFtVgg7HXUBaRg8fRwwNfkik9CYT3qh",
  "key45": "3JZGeKk2xAb2X5X5c4mRN4QVq1bRYFsDNbz7tWbEP7d6ufCkBQUaeEDrndaBhrSqvX8DwaGanxPnUXCkvThjcQac",
  "key46": "3aRx52TVYTtUcYQ8PGroQxFEh7zWFHVJXjAHWkUC5eeadnveVymFoR4SPa8rSHLtAtFEgYWT6bn6g6oBNWxzsoV7"
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
