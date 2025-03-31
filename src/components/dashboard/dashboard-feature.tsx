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
    "2TpH797EvWd8fMrnYGCmSr3mgycBf7ZWUCXPaRwMsLX3psxRyZeEa4Twjpd4JGfpJu5JxM87c2EuETR53hw7KKHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssjXPxgFDGiyTKZKiF9dEdEqUHhBRFn7ypeBZQ99vXn77mPCLNAMzsnNCoGyEZFobVV2YTjkx22pBxeLH8TX426",
  "key1": "3zzvKTPY4Z1Hnq8KzEGf8mbDQnMfwF5JJpTnCG3U4So7qfkPZG6ph1kqN71Zrb9XiGDzyuUwT1k2TAqYpPhXRTYN",
  "key2": "3HZuR1v2bxwy952fnvRwvjQvwRQ4v3jbmTWpwSJP5XGD3E31viaJgffMAwTRDSyAnNq7HiHe7zmweCnX53s8ichX",
  "key3": "2Bh6gaKf1ppLJoEwhETEGnQqiu6E6wVew3ZEHFnGHyspGJjpBLX1niWTyc3nQggFj6sHMBQBy6fK8u7S97T8mxbk",
  "key4": "64CRVfF7HTQtK6EVYVVL7bn69briUGECv3MKvMmbHJDsL9soxaF7VzUsQ13fHz4Ap71uh4KyR9BVgn4YEXY423mB",
  "key5": "62VsE6uyPAn31KYDzUymqJVU5t1gobYRrAw4NojDxbWDYgFQJM3wNyrfHybJ1kpQFX2ZArVbPxUSBjwEjV4E7MgB",
  "key6": "UmAr5PpbbN3kwGaMaGqEdQtmsZG9UKR2vAJfJSLhaa2hjqtYHpAtApo47W9EtnDWWrUruV2CWTpcdSAkbvyhdeJ",
  "key7": "pBr9CaoLrZZmuVoNQ3NGHsd2nwcaDZQAMurvWzugMTgmkN3Mb9ptPNa9YiJokxeT5bMstTs4AJeNYhQnQqY9dWz",
  "key8": "5TxLUwsbvEmAYa5cbboXLHPNVYzEsU4WtQPf6CdHrgHRg242tY1GexQkKhwRrNoKjyR4EwDj5hXuHFMvtxNarfzd",
  "key9": "5iFUAnaiRudHrQxgFoWe1FtNGLiZYdj7d9mgwHu6pKdj7yuxq7jMM5tL7KGzGcjse8tG5E7LkfE6eKfNnxqGmzXi",
  "key10": "bVf1d8iX1iCEk9XhXcU1j1zJEsytWhakMmpamYTo481Ww4zNwnc47q4uDoXo5ar3eNsrpS3Epjjjw2k4b1EJnTw",
  "key11": "4yVayHnbvupn3wX39kS6xCTtNwu8Xnz9pAkuW9YukyZsV3eJVsv4PWrAsdVwBeCtvAwwp19t943vcLeP4Pe8g7ZN",
  "key12": "2qHxubtGZfkEX99a145vFEgTcMqdvQVC73KPxXBzcZYW6MnFJiQRRoGdah1yTEKZTS1qPUg7SvssbLvnajBJTPvw",
  "key13": "5DFN8MMbQdFpmsDA65E6cHrMhFE8yywGF9ZVGzhHnig2f7eJPoW5zZHFbUsWSMaUkjLAdtUhegayUUsExUj6XfPF",
  "key14": "2rFnoL7EQ5yjDbWRfuyFVKYP6fZ2PhECWirCV4WLnPHEsjgeGMTvYHt7EaK7aL3ve65fbT5cevSRLMofENgpSitg",
  "key15": "42QQcVakNaSBk33saYTb2FGuKbGPfA3LiMEe7iz1mSJUG4VpjvLYXqbovfDW1Rie7Pa9WswNCbm13RJPedDG8Zfa",
  "key16": "Y19Tgcth91qXXcrrMfeh9WgDUUeVcJiJ2fBEYu7ZJStC5Wy1hLyQ3Ufy9HNXBQN5KU12bJ7jgaasRWuChAimD8E",
  "key17": "4zqVgM2kKraopYrV36Y5bZcDiHo2dRrBij4v5tsRk9hP4A4SYASKi1ZwyiTcPM2efhoPqa5cvEUuXPgA3YAJ4aXA",
  "key18": "5tmmdvN2xke7qkW1RMubUp88LbjjDqS4bDMnDvFURUUrjLHkQy8FbZ3tj8uABJarTRWgAY8ZYbrajkrPEyX1VKqR",
  "key19": "5tdRJcoV6Em3x949R1UbjouVdUXH2RcDJ6sCrPD9oukZL5yajegcJfQo44hH55CEcvDZ5WKsnYBrD7PJ6KtPkpz7",
  "key20": "5waaAebUcsSyGP7G9HhVqaa9CXoTBGh2sXBEQ6YMoBEMvmo1X4YhJNByfpW1fQaqYUJjjssFAjZFJffrfPTgAU3Z",
  "key21": "4EpZPTpHdwdEDcsrhBc19xLduRZnaXdeEHJradBcTkXnst5TLntQezXybtVb1fK63YgWFucAbS8bcJjQKBJcjXE9",
  "key22": "2mkpy6Y6BuYLnsybXk3SVbrsYLknHE8WK34hwhtT9Z2CZyTkzAtxb7AWK2AQg5q41cyvuBj7wpMCsq277ivAiJuo",
  "key23": "2yScS9NZJvRAgcjuvB2SeLbdkED1Ykhg5G7UJs3jx6eXaCoShWXXWq53HejQBkvidEEVKM9uVAMwYVYTqzDpBrz2",
  "key24": "245HirHGijSCkQ8KAcGwcL4wz1CVXUrHXeE5yzpd7pQRZCMKApKfUN9fb2jWuaEG2q5fr6HTP3A32DwxCjQrifUc",
  "key25": "C8crs5Jf3ZTbrJnxcHFE5Ceg9em4ECeuirkpz6oDRaPJmFRJKF5uQuEUMqXsb1BMxVQRaTqzN8HEjba1AkMM5ww",
  "key26": "334PfpbLGUy3zYPJteJs78DFQPhABTPB7KiwHgcpS511epnxQrjq9gfJnjNKT69imCxBuRwWfZsuAKKChiRNhoHg",
  "key27": "2NrXApzLausioQz2Q3C8LTRNcxxGoTvfQSHshMNpi35Gpdi2JBzPeuJt4SpZrvsMULvs5BJ4TZ3PsFDHJUG3jZoB",
  "key28": "d6hA3tEMe1nY4dHDxtiu1xGCrjAuarRzzntPwmtvhGE4tquqmhaKBkW3mxdE4nkJXBfAk2XWyQUoQhY6xe3H7Es",
  "key29": "48fxaZ2VSPpNX5WF5MDyCAqMWNmgPMDhZj2WyNi8irE7b7ZUX8L57cBFksL3ZaKZJg1h5onvQb4EqbKjKqWn68ko",
  "key30": "Wm4BLeJXqS8tJyPGVwxbTM9afbjkC8euu63RtqpjHhfA1CJKpM4TdVHS5AiM9JQmapdvg5QS4tbyo2P8oVcb1SC",
  "key31": "5GCtN2Pk5LhvHnD3p7jsfsjhBEq9q3N2rLUFCfdDZ85VMNYShKYKMxakmT8F7pxJb2wLt1WbYpgRj3NDqwkCQCRC",
  "key32": "2ETdGYHzQazYPu1WX7taaFbCL8RTCaVM9RHJuu7pSno9h5nt4BFGsx8nDDxNDidbngBpc3WUcSAcFTYyXsR9Snc5",
  "key33": "2U4QLKNBDZh63aD4WR82SR41otgJZN1thcrRtAnfKPCSZRLDPqYzV99V9my1a1CG1eXsJ58fiv5otb25Kc6P7bun",
  "key34": "2E6REfJZcJnw842F9gj5sWtQxuTfrv2jyKCUyLEj2kXbget6eV82Jc7m8KN7y4LrePd6PC16aLAQoSxizfNrUV4T"
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
