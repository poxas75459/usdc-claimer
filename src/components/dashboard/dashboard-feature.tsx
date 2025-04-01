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
    "8GGTg59RUr7GH2L2ZgDarpXnnyYxwj3qjteGjvX1ZvF1BX3TKMoyHxGwPdRreHYao1MVhBG43LRW8m6x7MuPrMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KU8JEq188nR8XpQc5gRbrbECz7qi36yUAuH5nKYDmM3xXh5Q5H4YsPgcAAiuU2W87Jd8RF3MFyycXJNYPpGZWtS",
  "key1": "2y9erKA6HShjzRPsdLf3C3kqRUZG1tPgUC5uxb9MKPYETuwKQHYTW21gDXfrPXo9TcZS4J4PkyokKduGS9371z6s",
  "key2": "4n8ryXCri4662Ar12tWhHo6RzspCaLJj5AUiHJUVpX5Q6mwe176dj186KKnyxYFWLAMpot2ebsWZSSvbiKZ8nh7V",
  "key3": "kRjEqtNuFVY6yf1M23Zebnh8tcUYCa6wjS4MwZRcTvy3n5ZgAdX2v3VYT5L7TFuLxew5KwYfFY3kSq6VgqDhFDw",
  "key4": "4H3FFhAYERRRSTS69H6PsnMQR2ugHQdzDA3iQX3SCZ3FMiGeAfFqHCnhAdatKx4mYQX9cRBFXAPAdqLxA1r3NmBA",
  "key5": "2vJUSDZUFMMWHtpmv9qvr7asmcujTpdvBWa8StjgUEkPHc2DUq6NkGdwiyNWUDjdzbPc3QQRn7ogJPCSF3fE1g6Y",
  "key6": "52pU1CEVzdfcLxRFFUd7c26muoraHFbqs6ewAB6Ub8vhNcqpbktAkFPiXjduF5bDnpVxNAEd4eijmAerW4Y7famm",
  "key7": "2S2uw4aN75c4vAqYL48fP5oz2uM2kqiDQYNGvPqfWRWrmxzbZZmezgbDbcykb5UAZ7s1TLoDUQYnEXcoEHShKHdq",
  "key8": "4Tex57ffF2RNmg6e1bTnwzKVgtCPCiCTXT5oNCaSVZ9ckxqhNmwecp7S1azaCvNc8n5inHRsBEHUCwYZ5EqLWz8R",
  "key9": "sHYzt5urfjaUHpFkLmak1CkRwPNpFu93xmkNGD89TWVshX4N2qTAHFGZExFBvzDtc8Wjevuppbxd5ekpeZAJZ3D",
  "key10": "2GuacCG7svR6KATMoWmi5fWYZb2beYE28QCHbtG8Sp3CGnU6vWq9rxzvC8Lvc8LpMCpdWrQyz1cpH7DVYEN9LdiH",
  "key11": "fuEpQ4rQvWX9LJkBW1smz9CjodT5udXJd8Vcpg7gR2HN1QxerhTHHJANDULLFB3Ddzmj1fssBWdCcQczRJBFG7N",
  "key12": "35ymcSK2zcvebHdFbg1qsrjBD5KR2GQvRtYyN864Po8tnoqLD5Kh6vY7JZoEoqot8ezTBnYuNTtEXUZmJ1RchTYX",
  "key13": "5QKe7neqc9MnzwsQnU4Cud5zWwYkCAr6sToWzPkMLyVd9YraSwYhJNS3gWMMX81kxRtg2aASbx14c1rjzhdZ5JAL",
  "key14": "zwGiMj5uwYjThhBnrBhZWLQVJH8f2vkP1QKhRUM2y7nfTu5otXN7FsHH4P9dCSRRCNyEbMvc3XAwLJ5zGyJsFKe",
  "key15": "5MyHe3SVz2WuRJ6W3JSGJjekDgHRGij3QsBYPKVJd3ggQXgjy2VaVc1QZoNtLAvonNPcNj4fVNpNRbuAUhAs9Qiq",
  "key16": "57LyNerAkhW1LzshxCbeJu9xQwZsVhZoVHTuJy8wEq2qAhbiBAbr6p5jftEGhhJSxeW5QTaVQBTZeRBBRyk4FKY9",
  "key17": "4YMAvxUHCcBPWh958P99DKWAi226yLbXecTbNGzL5cPpMg7JkCJnsZxLj1Dtbjw31t2xpChvLTbpV47GH8fuZEEn",
  "key18": "43QSj1ixqxc5wakwFGeE5KyTrGjg7CHeW9ic3N5nbVAXAFBTCsUKTeLKjuU7ygybQNynAkj9VAttqMdvuwQMRZTt",
  "key19": "4EiyGNPfdwqWFfAmcYNLmerid86FbGoPuKuEV5FJ8BZiBSsTieiECx4VGnaWfw3tkfueG8KJgZDqKnE6gFR7o9RY",
  "key20": "2tFioSUBxjvi3m2D1nL2AiHsqgTqypjMUPWkPrxCCyzPfMEWW2yjiKDRxdY1aBzacQm9mMePSzUq9a7ny2tbWZRu",
  "key21": "5GDed6yUPc1bzpwwmTLfULBqfjT6rMzEj31AdnLuv1skExq2N42VRJy2RNUSN6Ln3B9WPX4J7Wdrpw1HP2KpXQzp",
  "key22": "3AubRPUHz3tao3ZJUyxSHV9RqUsQTyrZ5UKtNcRAunMgXnXJLNvk66NLzEZqseCBDb8AdjVE4WUNJ9Z7tceeYo3z",
  "key23": "31RsVpLQ7usacxL5T7ckB9qDqZPZ7tap2Cj5mDETyuh5X54HhyXC5nBwwrskw8vdmyG4m14vao8Rt4ketRTFy13v",
  "key24": "5iWZ54RhMpK8jc9ndTiTU1d8LEZ5vog7iVycoczMv2TW4YZ9w8hbgrsnY1HaXNzTfjDCkF6Ey5UsXMBu8jvDisRX",
  "key25": "2E4cLrxdPknURWcmRkuQn9uN4XsK5zSKmzm2Erivdz7TU3ApVMVpZzojbdnsAdbZxb6YqY3rgMKiLgqRaStYN77Z",
  "key26": "quHfeSdQzEMFjeKrsHL59tZm4SKCcQo4xJqEBSTiMBtTkiW2bdoT27R4TxyABsn3gGhhtX8UfzVHDQahtAeYRH6",
  "key27": "eAfArGaApUiWz9ibN6uiwmxXKhD2ANQX8y78Vd5PZsaJRA1HMSvPxHHqy41FvQGLSqn8eq3JfCKQdbCru6jSdTj",
  "key28": "4hMHUEnMYZJxtt5CcU9ezgxj6Fv2XbLtZ9hrUo3T7xmmKWuABXW7J9Q7n59igv3FJQMD9zMbmodg4qp5tDTso63b",
  "key29": "2LSrFwEJxhddbcLcpPzyBqMXZfRunBtNgv1eHoZJYxMuWHXnnVMY9dHjY1JWSnLycLG6GiBJVSBbKVF2HgNj8Hgg"
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
