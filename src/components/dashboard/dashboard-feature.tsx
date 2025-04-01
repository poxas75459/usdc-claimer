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
    "5Btf25sjeaWj2nkfLjBk9n7a8Bn6wb6ZyPhu25dpsaamim59dSriQUBS1ed1jed6vB6xT7URugymGfXppcrNnLDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FegYx38xRFjjz7Fd2yTNZLznR96wXRqrGvLRmsUnw4Vr7y8uDCeCp34Px7nCAbj5ZyFXUzqc6dse7gNyD71Znk5",
  "key1": "3n19ZjxwJm6rvznBEVr2W7tN1EmvJmBdL13vJhXPVZHzvs5gPT9uARebCdMVXxDiz1y7xwmMK2sLyzwzRYBeDLRj",
  "key2": "5kZxpLF7YSM6adKRXDfbwPqCyqdT9XqRxbfvc49xHo4i2JVcE2FXYryq3AqTa7mZ1rrrDWdRpF44eLsHpBJ6LyX7",
  "key3": "2REbJEFV7C5Lw7SdcF5rB6LubmuzTg2UQFJAuMQvNqJccJ9jbKpeNbobEaFyLuh7vX1JrWNuAExLRPjHx8maTiMV",
  "key4": "3BcFzPtN2SnTTm2hTxT6UTNFw1tTaJmWnbmjANMySb6Q5wybsp9Z1Xm1uTpbKAHaKfheKik6mqNFKdCEvuo8MEd8",
  "key5": "yBDHuqG8pQD3WxJWktQget3BTW62swbZ2ZSYNjwBbLfEB7nu2VUhFRPN4PHbcP85tSKS8X1R1RJynQhQevfmBMA",
  "key6": "3ybwM9U3wkAZtbk5rhrRioFJqSGagWXwhuG1Wwqu8M63biM7f5ECxGNtCuKr6uw4TgEM2rQfGteFfQYNYPEvSaq2",
  "key7": "3Gfk5cPYTFg8th3th1CzqgrsmyBk4e597ydbJFzuh5PH4PCUPM265EJgDnVfgAhPiXXcyxhfts5WZhjM4x32MhsX",
  "key8": "3n89U7jThBAshaEZRSwhDwPjFo56pnth4vcUGMukGT9eME9Dh6fzoiT2m8iuppprgt2dy8rPjY7wGx62N3EJRpsV",
  "key9": "5iA5RfxM2FE16YYvvBvYbT2qGBchmEnGnRbWkFgSsosVteMp6dUizvZkMEeB4rkYQseuMdbSJNVYzTvrcTw9BVyd",
  "key10": "5z4SM3219rTR53oeo51EM2MBx15rH5vPE7m7o5AV8TqfHa8j6ecwktDmdMNpLcDNyAQuWEZbRUgKSQzghBH5iSRb",
  "key11": "55gDxysf9P9fK3bw35REL78QiMdFTGCvJ37aH23thmXupw7fkxAu95HAaKPEM77VxLahQUavMwa7uRJVSdxPeyid",
  "key12": "4sxKbWjMzui8NWBLDtXkEuML4bhCbzn4uScJXu3813Pv5ee6Z1CNgUv2QQQwLCUhMRWdc4t32EbEVdLKsjgX7zEt",
  "key13": "5Pnvy7LzyZthPqz6hua2LWb9pnC3y5EhQFeJFoMRvo9NpLx3vs18ot9xXKGiEhBSYKkRug6U1DpzDk448Nf8drn5",
  "key14": "476RTU59Mx8gmtzMdVcmWyECUctzBF8gtM9Zm8Pss27j6wK1yM7R3Xx6HXds426Np356quSueemXvjWn2erTaYeG",
  "key15": "5SRWisrDQrAkNDh5zbu3tBzd1221f5kBaNyaqhmNeRkWwCNcirpgkL3XvFiJiKCCJpoS32tdBMMbdMY9SVmFwadA",
  "key16": "wuxHZGMWfioazKsTCMTJQ3SSwKC1rJNBfD6aNkrvwGbuysXh73mFoJ3xjZZM9yYquuQYmQv3zPBiVdy72fsyF52",
  "key17": "3JkderiA4cMH9VKEe8SVYr839dvkH35VdrfQQWXC5p15zqqk2ZiFVfH4qsuRSYqP1HV4ZRcPdbbx3B2FERh9BPHy",
  "key18": "3fJSq6yqonQX6KK23otrU4iBWVyr9Z5qbkXXrpUYQVMZgggp8LgA5dVNCaoGn68w77veLhCPbwykgmYYtxXQtGs",
  "key19": "roRGfHAEpFqo88buqbYSEAndiSE1HnQz2Q5Bb9fzr4yG1hyZ3eC93ySvzeiCynMPPiJrXvwgBGPE159iFTAxkfo",
  "key20": "3LUPuACSAnF1tREnFuiNWxAtr6YiRDPdjS3sZrc6g3NZakWdp9T4Vbg631ydcv5CPETNq5i3JKXB11sYvWRjhUGk",
  "key21": "51PCyS55G8qVsxg2EefHKD1mEN2Cfe83zEBnvsVfZGo7i9XigyTxu37Je44paJmx7xsvYkB5WhK1R5XpAG7YgLf5",
  "key22": "5caodje7gKbwsdVHXDJx8et3i1iLMj7P1tzh47qoArFu5i4ebACmhyCCYsVevwChb7s2eCyMrKT5Uibzv6AuC6Dh",
  "key23": "jAiv7qmpcTT6zfNnX25pnYGy7bKyi8CUTFLvJ7bavxVbUq9eHroBbhFbrLNi4uW6QU8Pt6P5E59PYSdsg5gsT5k",
  "key24": "2ff5oxbWRxjLndk5Rza9PGEK6851xYAfaVjezk3Wxyg9WQHZWUHDFKArRiodmcCrDMM6bdfoV7z4XuBDdMrpFZoe",
  "key25": "4ZVg878fEgMLnmFoiEeSwBmPYaMpK3vFPUbWivoL89urVFGGmraS96v1fUYvSeTuCoSZ7DG6h2sXCi7rDTkYPy3q",
  "key26": "3j4D45ge8zMob58E27r7Rn2rRZ2X6MwjfRogVVSsXGELUZQoTaGzCBvmeYU5BfgH5Qa5kr2jPKzV7fPtC7LAUQDV",
  "key27": "5rMhrC1GSgNPoL2VQQTYDKNzjVFLR9QUQjvuHPikxHYyP8q83QcTZg9zvgMmFJu5TyAK5paYd9NqUkv1uiJJUGSW",
  "key28": "2VDqi7mPAHU6G8dpkbQsKMxFnZ21R5As44kNCuGWpkADhA5cSeWd9s6ErpwNeYhc1Uj1U8V4HTEqTCV9QTRWC23P",
  "key29": "AzY45Q7d9bpTVPLWic2J6emnsAf7cXjks2U5y1oGhnCMMSh3TubekuJYAYgzQNPSmAvAc64tnotnSR8XUFH8kYn",
  "key30": "2LLNKFFwgMXmgWf5gLHdqqVp3wUKfLaANR4qLYgX5MC2uujFRioCbq3EJHSH4rzFCTQw4k3snkPcJzWfbYyegLet",
  "key31": "2q7vQqhg65yPUZUsvQBLFKhCgx85LPFxXbFnwkjGiXfQDKXAZ4LRGzv9jrnc2Mgop1UtCuDJp4TyiPPr1hhy7uTP",
  "key32": "4yYgSnhvvEQMVbGJJtaJNutUu38DzgyecLRUshcGyNNDWTEf6fomRToSSmNgMcozMEuKG37muWzAvdu3tu5pV1nG",
  "key33": "2RuXsMRQ4AsJaKtvfQe7R7R62UKZKBKaPbd4PT5eZvtzPpgM8kUaK4yWJYBDfM7LueqCePkksWtgvR9zzTDYYkoA",
  "key34": "5Bv71b4Gu1t1TgGL6JkQvpsgrb32o2XFLKDhBK55tbsbiPFy5VzueUvY3CwogZVBS9JFq2uQPDaBprZgb3noVLKG",
  "key35": "4WRCPZQadF5y6BoCj8e88Cg2qKjjABFsq17McEdgeTXc9XTi5q87LKSCvq8Hw5uQLkGRvaS8z8XgHmvUEAxRmNvH",
  "key36": "57gtmazeGCXhVEg8xLSafc77E61XK2TNyt6WKFbVmcHCdb6harcX5otd5FTTfGCo3oRUy6wZHyTEiXtBC8B9rEpC",
  "key37": "3hswu1HqFftE5Hejyoz2KcdJqCMQUhqHCJxhztFXUuhCBLaRoTXypSDx3Ne3zD3GtGFG3eEMoBnWDo7wYJFkE5RK",
  "key38": "5QFcd78mqf3ow3rmLYFhGCH4gwj8GkXefXwTB9hDN6dHnGDYfpnR9LtxhkgeNa3DDxRpRdy6Q2ojWoyiu495BGYc",
  "key39": "3HAVTiiPJHwZnd4zW78ss4kXzmXHapEuTJdU1TfS4szyDLUX6dV9HbPeXEzYuPFX6XYRccvE9MzRNGkZ2bPcrpR5",
  "key40": "5Jg1j53rTB9tEhfJrk5acNATm6z2p6sXxTFRCWkz7LEVRLhfPxZV7uFyN6YVvCMQHdjkUYhuuqtaLJJk2s4FGddR",
  "key41": "3XqToySFbLv7RouYpZGfzCU5AmUBsYjCc9kbZ7CCsew2EzACTS4jgoAh8bXdt46VALiCdz55We2RcwCtpMmnzeaY",
  "key42": "5rNm1ZR2Menvgi4jfiZFNPXMJUjLbqYsv4x1ZufVeYgVesQduRLGhxa1Ns5bT6u7aYcKPckNGsfUiLGSEQAuYT9P",
  "key43": "3wnCKCHg2VAqPQhSWhog7DJPRViuQCvgePYagjZUESCHMFPFQhPVMZ6nxYctAKgxhJ2TPTiczihbRAZZvLnZrhP6",
  "key44": "493FpvMGj3fupDg4RH1Qertz2VhX2JmoF4U1J7AJWDoYSTjmhGp79fWoUgtDxDKFJmHLfpEXvSVnSArGJnaBGLjv",
  "key45": "MsgmRxDkVigtkJnKAKXLPHk7CXnDe1b1WM9bwRq7FcXYXVL1oNAK6P9fuPB1WAhvzXzuL4gLo6x8TY2j7qz8aDT",
  "key46": "3MsD3pmXB5wxF9KpdUUHQhgQ2aneGPxvN7mQSyxg3zmJxnQSJkco5xk65SBrPxiMrBexXPfndi4mFYj6XgHDBWYH",
  "key47": "4Yuf1qJtaZGCTA4HNUGQJqoXZVTy64FXWeSb1aXwAwZ8onxUUcYPhatViA9eejVC7YgLuiw4ky4G6JRD2UnFk2kz",
  "key48": "5nF6o5kdNNBxUC9QFEJKEEogMJw5Yp6gE7WSe9up9CvxAYNTmDpkjWPH8BS8VmVyQ85eJYJ5AYjm7YSXwBuGFL5E"
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
