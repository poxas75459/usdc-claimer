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
    "5gTQzJnGJBNeUWrTR8e3ZRfnB2CKLzYAt7YX3HfJZHRisNuiURhKWzSSvY3Vzdqo6tFhfx2BVfjp1xy1foBuGutB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHDeCFKrKNCtJhmXmtbvV4syUGjcaMv64NT6be4jkAEFcutQfsCKA1v1vRr29y16S8fS9EkLw4BZEJeEWPFruf9",
  "key1": "44HqtAZCh2cF7YmFANnK7gyhyWEs7o46WLHqDUFVXdPHjSPrpvrvUgCRUTbzfosD2DBLwTwi2MHMVvLssw79aMYw",
  "key2": "51EjLA46ptPYemBbe2qbAjMMSg3WjJgLt2BnN23jzx5SZbCTJe38qygiqXaFe3WW5HmAn9xFTV6t4PEtXyu9wqfk",
  "key3": "5vZsShLivJL5NkYmyHwKdev5sKXSs1wtSZRy6LUFCopJfiwFW9gNhJsaaA5hC2oaaTvR2a9AgY5dBte4Lz4FtEWt",
  "key4": "4wiKaeCdnoC3D6rM218QuFJpBRXXCnWEyrwQBPt3hyBvFriPNvLA89JQ3C85xEnqFFo65uddsDBQZzT4UU3vHoYJ",
  "key5": "2t1nLVwr31qmHaXGmD4J5n9S98LzeBaZGqDE3bRsKcZ39Y4jsFb6dhagh8DLuQMYjdKXpBJrJfTTZAEDkEdtJ5xD",
  "key6": "3PTL6uR3ATuDEVC5LtRSxmWuHtR6GyWgpQ5r39wAQ6XFYzB4wv7mnG8ZvP4WidN3WVdr2v8N7R1sZGs9s8xyFx7Z",
  "key7": "5n9jHQ1Tacwg9XMkKm5Z5XeXJacPL8SxMruvRJkRztnK61wR9sXs6sJSgpNpZ2DDnApeHHJ5XrRBeZJXtD7NdYku",
  "key8": "65CJVoojLBHPyhUzsuLzofADXkq2ENfzRbP4qsrg9EqcLdAxfUVi6ceTNCsfZA8UGLZNuZBdoYH2WDwfPXkFTyGo",
  "key9": "qPdDyb23HGyqits44C9Qj54guJQdtPNSGs42WuEYucYd5HYcoLPSN5fMZMrUxp6P9rvfB1KWzySBoSRV2GCJWQh",
  "key10": "3JiS9FgsXa53YEzqoFiajd6TApyHJz7ZRtk3qyZZerhdNk7xPUM5BSscAiKcPHh5Q482k3QTwRYUkfv2bAHmMF3i",
  "key11": "5GfjFZiM6hekahdMmR9vKWzetDmygqwBbsvjwCojRN7Zp9CXPAyZ1BfEwpep4XJhE3R56sLthvgg3yYA8TpP7VUp",
  "key12": "4wbkxfSVtLRSNZ51Eqro5VHitLkMjb3B8Sb3VhGnw4NHYZQyEgcXWXwPwYutcm7BGmEQb5PDfbmydtYBitbdhT6h",
  "key13": "3pff6ckaoFkCDNHBqmauVcdsDx1ccM5esSZMaJorDMrXGHeTCKeg1xC8rf4QDEA4VfweQgXvgmv1gYgtkptSCmzZ",
  "key14": "4tyektppSY9EMhEaoNtLeP4zLpEu7NU2iMhnn4DLLC4fzY6VEncDUStDDc1HtyeLRxEZy1szeWPqPck9AVfFXuvY",
  "key15": "2Fr5wNgz1MgSgkCo3FbG3H8vExYcJonvEBNzTxGK5UQ9CaZKiB4yjB6twLNBZXCcvTsr5wQKH939zFU2WxLm33ms",
  "key16": "hiC3PgroGsw5Z54B63yFLWGN1ySCSwAGSFY5JDBUCKweLRf8jvWpesVxYAMASJsLrqDcgH4Grovyc8LAHvK6bn1",
  "key17": "42pYe5hbi6nbisEzwE7Em3YvXSnP8eyh7pFWrdTAXXfhLDtJYn5HixM1q5MSLjKbDdRZu3yRS5vRKjRkxRCwizV7",
  "key18": "5UQAqWBSLmmPgXi3tgW2yrvdUGGo55cJm8Td7nKp8Kcd2sbvTtvEdvbBZzzLXywuSSirVsu2ZcLqzCnbJNxsJrYD",
  "key19": "5toFnJDWEghC6aPYpvkPTq8tKJvYDNKno8fuRJkA9j65yi12mM3pZVzvN6gMjAqhhpX92XgshLAr7x5xBwNdNkvc",
  "key20": "3VHVKeiqSATkQvnWSBQ2AoLkgrWigCzDGdCfphuaL8UP359xJ7Ybx38iugG4Uujp2HrgDPF5jRDsY4FD87TKEgw6",
  "key21": "HwXEHijQP5srpSGP2dow433pw46sssbeMZioamH7XdSUehiV4PabaUQcKKcai5opBHupsMs6pNtZGi7QqqTbPTR",
  "key22": "5Nv774K1iWsmrqBBs7dfRy19FFBAEWXw71oGo4AQNCnnUeCCYo6L9x52N5qaMBjP55CJyTYiKMf6TqW6A7i53KZe",
  "key23": "3WNmDp2s429NsWmEswdX1uuTNUGokCTrWr1Y5gX8irAZhCo238txh3FHRyP4GDff7VSp6PP44V821hnwJJQSJEJ4",
  "key24": "51CbTcx8nfC9pj7di5KVR9bWqHrCPaTuhUgmPLbxmAj7aCC4Jx1ogHXYBrMnEfioj1iks8TM5upYuRBNVT5PFKcy",
  "key25": "5teCAn9Qx1JjV1T6TyGVxexdZdNx2bNwCifBqU65AxvuKhS2tpNMfQtX5abvj3TtGgF3pGNx3J2wtdC1ETatvjYB",
  "key26": "4EhhxmMEVwNXEbx8zXi78ddQMgP8AYj8dh7wepf5zBoi77A8XMYrmbs8zCVKopXPZcGSGGr7FMqtYLMYHVJmNhWm",
  "key27": "3ybAoGdwTr5yztyNSZNh9PCzzrxw1Rxm5Gica6kfD4M5Z4PnJwUfdUgTfZpyTpcs8UTsRba3kJbV66umke97WqRV",
  "key28": "4cvwPeEijTw5Qb8829AKn8e78zqzk52jAE3CqEWf3gtJdqrvNGBsTK5MuP37UkiFoqkG6yPAxBg1Nd99k7oo9mFS",
  "key29": "4gxLxEpYJ6Yu3vsrCpknrz71yW8vdzejGF8jDovTaqwqfVtg6oYwjvtszQarfYXLjUowNeEw6XAsUHzFxNRPoFM5",
  "key30": "2zdWC1jJDBuN5QjFENZ5j3XM3veZmhj5X4mrvY5YBmCvUy5YitHM6gc9S61Sm8m98qL7J89gDiWcUZHmSrpuixyS",
  "key31": "577bRxex87vNDwLLNMgUcfJ2jrexAT6J7dhtbYyW1mMYUmkSt8LjQqLc2iAU4NhgMLUPug98FXKUST9ofAo9P1Aa",
  "key32": "3i3u9qoQFMgg4ii6Y2GEeeYb717TNGSqNL2n8Z72RmVCGnFpTzcfXhTyCDbzotPMbY8jU6LMXu4x3Ap7cXU6qwpr",
  "key33": "3CJmZutbbPSjRp51uafdUhHzf1fTeNctG7vVGNzJuevTjdh4SGTcUEjgsLVZ3eRMVUXzDEk1vT9GHfvKSAeR8QDy",
  "key34": "7VdPupy9XMYWdt3B2a5mgvaWtuKh5JxZP98svJ4N61dimNDEkgnAmAJgRYRgUZ2Kh86NDm6fkeLXC97kxgnrtEs",
  "key35": "46H9ZhXrjJbwDFbUabUdYFzU5K1c1SqBsck4vRnQjcDPbtjJtzwGiGLKu8qacU44PrJ8GCNQkUCZd4dY4xUUTqE3",
  "key36": "5QywzZq5XdoSS8aXiM7zyTiqJ4P6EVm3U3tf69nCHpPGCbjZf6B2FnBdubBPRoshTNgZFi6vcya3TDC2Gv5TVAvs",
  "key37": "GXVyLpN51GzAWijVFezA2YgAPeHaWTHsGP6u71C2mUy9bJG4m8LjYpbnDuwoma7YSwL2UfJS749Z5oCcGyoTiyp",
  "key38": "68RS7PuaUpi2gJjh2kV2ujcBkQC1faNDqrDtNugXcn8Naz6c4qrKuJqobXvrHJw6qDbhu7itd1qYFWbdxy5V7Dn",
  "key39": "2SyLVQHYn8JGBHf31m7PKJje3avP6omNS8XBgBoDPNSeD39UTocPEGfAfJW3M92ZcDJqDvEDpzj3KCNgApHYrBMu",
  "key40": "2fgXx7jgGCMccFBLXkGneF2xJqSYZkPapELRpDVMfVTdfJKeuBtrBwWqpLK2CetQpEfz7SQGiyueeQj5nFLrZivq",
  "key41": "4AEuCxm3LtggGz4YBedLzfdTWM1hC89poNBH7ES5JAqVDAnU6SixFXnSWiBNJctj8EFgK5Ujo2dEgxbfYzdT45aW",
  "key42": "U2iDZvpSdyFbD2t1umU22AStsf7seQ3DPHa7DCnotuKi37BkjteCi8KcmJV7e1ta7j1Wm5PsguEGHELy914ez9T",
  "key43": "2EWiAY32UsYYSDpUfZnWMaN4w8kUzAvrBAvwZwjUCvrfKTkqxap3Ua4PuudSn3CMHRh9X7JA94j6CdNBH1Bhv7jj",
  "key44": "fmiMzzPueEhN6qnSA7o7x5Bp6pB8JY1NkzA52nbHLYUWtdQY76BkgHQxq1AJtBWrV28npXR9QZFTBQTR8SdHonj",
  "key45": "n9WxPEGouTR5XLeBaKksZ7diRmPwVYBhNWf18pwhG5kx6MXiQroVPLxwP2Khxvyy7Duv654DY1g49PFLJAQBPrz"
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
