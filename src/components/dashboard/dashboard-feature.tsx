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
    "4nRBVDaJ9BgjHGksbBuVHL2MfrPeJMF1PUEViwFCGd9MsYzbdJ8X12zhYNWxJ1HziNnmzKYCXM8HSQmHcG9bgTwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqjWzTYFyLpv9tTavR11ytR5jUzdAnMTfB1urXT8Vtud46t1ZcZDdFo6Mq7YW2SNyLuZ4oY6Hca5VnqC8RNbnXS",
  "key1": "5qwsCRpDjiEzCKswfWddn7NumDB2gqL6JwiRpjgphpkangX4s7yUN6ztHiJS9tjCaQNFjHGa9VBUjVfc5qMrB4YV",
  "key2": "S9cyj2fJhCnD5FvnWUWiWeWSGncPdNnqhQz2NyEFsktx6jRKTL31fsERfNLh4uDnHiMbnw76NdtvyiSLh3GyD9Q",
  "key3": "3vp3jCw1iTFwJHcz1dqMxjFPTdJK2cn8pC9Xu4fGZe3MrQDNpAm9DFGtAvaRT69YNGjhe7JHuuSUFJcpaT3M4hoY",
  "key4": "3DozwYjgUvwfvjMrQhZ9vkYowbqHcBpNbYNrSDxuvSe8gP9rJV3xgWxWh9X6RoqNdY4XcD5CjR2W1p6y1zYvbHkP",
  "key5": "3xhkns7bq9YLTaT4LJpucUNWqmavEDYJLAPrmYSsYGqaayj3ueaJppndujLBmxLrr4QSSJYsX5vLH8fSXpCnGFuE",
  "key6": "41M4BCx5VZTAxFgVQ66USu2F4hdBwcpFk6TfPWhU3KCoVvscryZeEaLaoUHscafru2aHxytTEnJpEFYhRpQptLAW",
  "key7": "8oDcACijUGvDLat98owVL9y9k9imt8Pen1emMWw5Enu7kc9axBBEh5wHpwzKStp8GdK3A1nPkEVQAGMX7N61uFc",
  "key8": "4wt2YVJRLkTP8WbSgugsEJRXLV6okU1ck5dUQgzVWQGmGBkYVAkaHTTRFE6XNuaFHKS8jgHCkig5mxaUmfN6pJnz",
  "key9": "2gkerPfAqz38kvURwpW4eYEBdyZwtXbnaJFiXozLwfWWNspRBRExP3UNqFDH8fW7MVKWw2Ec6RjSxnr8rMAWMrtw",
  "key10": "3J4D1MMwnaxPZxWJ6AacYkVxyhcStMTzdH4F9cX2h9F6DSgwbXKAXx85AxtvwZgynq3dApMrFHCzSWyBD6PrZFVZ",
  "key11": "4vBLmrxry8tDhMgFeyiy1mxjQUhMAoLwopFe5JuBP28kqnhgGWkiTSvvgCmm5zhTQvCxWBh8o4MP7U94gEiGYhRP",
  "key12": "4MtekMEvQ7dAxdPgC8JGPF1q3cWF68E1iRqkergJd6Zh27ixpHFZjL5nYm1Vk3NMJHdfapdBnW6rwS8WYtLvCfAr",
  "key13": "2cuBV5HbJbUAoefHDbFzRGzC73DULNB2t9TmhDNAEsyroT3BDUxzBbkLyUaeaD3jcR4MzGD2fkXpcRvC7EFgN1Km",
  "key14": "38PtUnzXd1NWR37Mm8ENnCFFrRqFJVoQ8vRSQDFXeFDQ6TyssFQ4bn7VJBRssmk71pRLNBeb6y6QK64wt5UksXN9",
  "key15": "5ZPwXCvGvVoUpoaUYR87zvELsN3dMuhMf4HqieuQLJR8zTmJR5GkA6xxS7vRooQs91NAxPkfZLZZmmAKrNb2tKkt",
  "key16": "5RQKqiwe9eRXiuhchn1nWCNpGfHX8Ks79H81hyYYqkVrckXwKY67wtL4jiiJHGj8tXRc634vofNehQcGHhN5zArn",
  "key17": "dXkbrot7cAYauJSHeqEPqdeUqFX2NmnXec1jqHT3awskPwxDZZUuduzJsMr3pJQJGYxAmu9vNTHDcKB2oyG42vc",
  "key18": "35Yz6yxWCDCwUE7YqScGo3FJDn8GcrpeHVuM7pWW2U8LKHQWtyZSyBCey6j9gz8wQLYuJDX7jid42ErXqxMVWgr2",
  "key19": "4QTn35Ys2tmhvrUUUDEcBTEV8GrwoFnWTiPh8PS9tRSfAxrEtdf9PiC4mJYM9aBLUwa8zjPRybHvcxny3Sub4NRg",
  "key20": "5P2SRYgf4Sy5qDciL8qieFVecRrkcAqFRPtGFeBRixZLt3osLV4JE2WZRuF7ru71pyEtoqcZVA4akdSUfHbzAutK",
  "key21": "dceLDEzhbk5U42ZE6aixaE5PaLLfTfbAK9hywxBvFYi5F3WuK7C7LX7M3NUUiCzqLLKZLujJ9pohgoTFhjkbgKr",
  "key22": "4xkw4sP9Wv4wZHjVeBWH9CFVRYKAF9ZfgvhyMfeYsPuqXB7gpHUJgkMegVL6aHfePwMaev9Ut8jJyWMdpZvCtirY",
  "key23": "5BYLy7VYfHaB4P9NMM6rjGu9pncnvTfxKJCbAN9kp943zcukfHG4HqWBQwYszKbf8WqqymBLfFsKn46DgCfyhKtN",
  "key24": "25AWbWDTW2nuKr1fjVHGxcoryi7JsfAGRwLkUviLx7RGUri9RX2g5XeMg7VEtQCCwX43n9HiJ7Pfs6BTaFAx7coy",
  "key25": "4f1D7K2sD3G1LcknhC5LVFZpdrqLQCCe7RGx2txKuRXeYHuarxgJVyFpHn6BB1cnw1NbLXugZUgLSR5e6M12xQdi",
  "key26": "JAuX6rAgjeMjtaNoaUrXouEie4aVdwozffuyiPXU5DFXFxuecY1hgwfKX7hWXwF5ehwXeYvPynMyJbv9rNhXJki",
  "key27": "5RQpi9JBkTccKcUT759BbZggoJw5mS7uj1Mj4NEVdyLdKeFas4hc1e9jegkuvLsSG689NtXw14fB12qz8qmdc9ww",
  "key28": "5vQrMD7hu3efDQHyzCUfgQrxf5vehJX7GWEwYiCH8W16JDzVZGBgHoCyY59AnP5zUohKMrsGvF2DPEMfyDYa7pG5",
  "key29": "2EY2Pn1fp8ZByGNSJM5YhVFm1n1VtvGNmjWH68GfKKm2Vp4DNG2vYpTftEiT1oJmwuQa89R5jWuj215yAFPrJvNt",
  "key30": "2YurSGUKJTQL3nGndswTiMzTNVU4sfPPGbGDu9QyCmPpcW2oBnHTgNqCcSHUw8GojE8psQ41ZxWA8xvjNU8JhSKM"
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
