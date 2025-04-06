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
    "5n2199FwLWFEcKtDGRxMn5mPaizYmBfoFUAE9PfnsYumgRM4zi6EBuuxU6p1oWnCFz7aNKHG12MaYEB4o4DgQTSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxhRFMsAA455au2xfg1HqS6WFPUgpY9Z8P6ayxk9aUaxpi7ji51GBZz3eXGbvjxTPMH76gwFifSUCEJ7U72nAxc",
  "key1": "D5uXADavEgH8vgxxdqvJod92dubM7QmzUTHTf1SGdyr9p5c6Mu5vS1kQxuoxsMjmXsMH4CkpbNzhcSatWSnby2d",
  "key2": "23wRr9SENWVRYK8iFgqEW2dyXYSse9Vffu9NQhhAZhTsBRa7rLw4eUZEU1VLd91eaMkaMxrb8CWjiMutzcpqgbK6",
  "key3": "B9hiF17DRbEssfvHJtRrftM1p7RjGYXUmQySL3GyFGTyXBic1BjpN7w6WmJPRfB3sPK7k3uWTgd5ryoWL568Naa",
  "key4": "3X6wH4b2dnd1aHFz5ztDmUdp8bj7RxcCpCjeod8Z73fMkB8Qd6XFHRzm1eNXW8SDYbS7EjRwFDUZ77ApxdeYRDwS",
  "key5": "52qXGMFwNYekH52qa4J7ZoPU1ryUuSQbhmULjm5U4KYCwHZBcD31GkTvnvxsj35xTgFrkxeGPrUfNczbeoBWnQwT",
  "key6": "cAJYKzpiHx3jTef1mhuBxdUyLKpgH2LUWVrrHpdF9m5fGUQ9FGZuTz9W8eHoZcyNCvVgchq5jMs5P9R5f5nSRDG",
  "key7": "32Hq1ETR3fUPw4n1V6Gkfyv8TjMYTQwAA6f3qTqftBejFELCgRhqFDC7L2JzgQXk4GkCDY4jy1c7dCWfvmsPnD5j",
  "key8": "JjDCx3qaPLUXvUN8QLutexywL8cG6VowTnvU8TDHu2WFuL2REXotfCDYGfa1qDi6DByj8Uuem6aGNk11W36rXmF",
  "key9": "XmnkeTUAV5QmKroS5547YChsF67pHLMwjDP9XWWamtMorhKYX2Vta49vrP387W1uFizuCETmfQJvrj3WGyoUc3k",
  "key10": "64o6CfFgUwYSn3A9nMB1jyqhPMyj4CW91vYyGmmKntY58wk2fJJt3ZAvWcYFxv899HeVTiGLEXj4B1LbUU25zp6b",
  "key11": "5xE2DtvJDdfa5zpZzaXWDuZ11XAWDNpas6Bq2zBegfoeKdPN8RhyWm5Qz4tGFybHtoMUJfDGNDdeVn2dBqYi7MAJ",
  "key12": "5pkozsediNxbFRQGFQcB8TezRXen8xmy6Mbrxo7nYZ2PETegEYyacHYiz6ZVJbo7PnK2CT9Uh13xnehk4ZRZYKJt",
  "key13": "2KgKpi1D2ZPgDnKoA8v32q2Ep93eYFWvrkZJHFobWasdRU8FCTMQpBdQeUArPPE8TKRS1zXjT7oLSr9TVa6XRabU",
  "key14": "3SSvr8qZXMzcx4zdWMZv5USW5hvjwpBcCSLbuV8UNxDQnauo4UF8XGDcfPuADqqSJPRS4bv2pXQFgmyR1FDMEGd5",
  "key15": "2nMUbyxqdsQ9jeTphY7o8p3MpX4YpgNE5KhTYh7iGgyaozhHoK5fmccLgrB76SMKERrcvbyq4MxqjVeKG5UeZgoy",
  "key16": "5HWHMD2VtCxNQ6Mbqa1z4ZWZt5dzGKZNKPSVm7oG4bwGJiFVkK1tmoEarZXhM7nCheEtJnAnRJvPTpMGFFwdenFx",
  "key17": "8UNmYUEuwwGFSH2pQZTpPhqALMpx99yp5BPEQJ4NBYgHRGPzCx15zFrzQsizUhTRYKr7VwEAgYZbjmP1gCCcB6K",
  "key18": "4px5f5Ai96HJijx5vLTKTDwzvA7PXwrafM3wVJETn776ErqYMxdRzeMDk6dCNC25WJN4QX3dxHSa7ArUFisboGe3",
  "key19": "5QWVPBC8wVKfS6cyvnLG1a14ocqBLASn4YQJh44rmT7ivAGENe5VA1WcNcnsqFvzTDeKhQL8X2SzgRAKFNQSgCky",
  "key20": "zFYNKd6RRooscWJoGoGrW3qR5CTgSzp31XS35mJZwk9cFxGCodej9sq17ppDCJDSkDLHNamZg1pnHSBpZ2qxsQv",
  "key21": "4ueBYsTn5wbQcpCo9ggi2ErR5vocSU3kn9bLHi2QXXpKSt51hvSopfxXsbFT2ATWDki6zzBGbYervHUpdKpDiuWj",
  "key22": "2gDESUi1pV9vozskzHBxC94PtNKuxeSZaSqAi3iPhLHYe3bEkAJXeBAxGHQhcPJjPVLGkZYMUkXivUyhbs3Z7w9W",
  "key23": "5urGmnuuN1jpkccNo1tXk2afxXkHQbYJkKsHUVqp1S8uMbCrk47XzQK43PryqaiFjA6iA3amraL2ZfngcKPG1w1x",
  "key24": "38M3ZQtq8icj1MvGeYRtoRU5UnohG9wkkQNnyaLHgjSy4zHpiLZS3pzYSLzpCXAnFViFCigzS6dNAnxy1NgRN3Lq",
  "key25": "4mercHSbnNQFMKZn59XtghxDrKUptVPxHtej23UuDC3nRmCimn6GJwNGzGqzQFh9VfgEfijYQPMLaeYkyDSkSrF2",
  "key26": "EkvJCPiKUioUrsLd46ZJwV21SSVxfWx4R5tqwGETBbhFcqwByYTjZ8GdQ8e4aHThGj2HpJb4yPW2tKVjrTD27Tf",
  "key27": "3csHYWAwG9QNKMsVi1kEKVnDQ8g2HsykeLokq4gcYkmPspLNbW5xfAvcyGsZuAkMv7asE2agTcT2ZoRvcBaePzCo"
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
