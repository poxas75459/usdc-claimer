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
    "4n28pxE1jmo2Rgz7UqbwvKe5E2nMCv1JFqCx9bJjwjCQxosiHKV8Y1txpqRWKd54c6Ke9GKtV83mARArCtuRVrev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b38Tg3RMvXUgmLeurR419MvCm9D5vkfTd498W8zXurbuiY6RM9JqSF3zqWP5HGpEjjL3BqDu8VyUWgF76yqoHYQ",
  "key1": "3wT7DVHWzAaXYMEX2uDD7r6iv9xgCW83uo7LzuxWM1Zk3e6x1Mkkkq4A2tWeM79xBKe829FugBzWJxGtjGW3Ap4g",
  "key2": "Jv2vt4rwS2iLaYq79e4qu4ResErX7178amEpnmrzNZ8j2rLWD25ySk4v7KjwrfsynF9o9EY2Z3vpMH94yKhmHqT",
  "key3": "aPh6E3cMRozHkhT4Vr4a8tuRZ7DHPnsoT6YJtjrzJTX1KiDKzUHiA6KtszqhrwKVi47Yc5RCk3PunLM8nK6Rd5U",
  "key4": "5KHt8QW4wwoUeuwEs8EzA7zdyPYTsh9FSHvk5r2xwXTtUZYgLhWhbAAAk1kYYXTknxkUr4utfxdQe5Vg2hVRxp3M",
  "key5": "53nADnMWeYcCWSCUmTnvgbRG1119bZFp7nuWiUe45KWr2DSTXPpxyuVevpqVHf4E8hz7PW7JfUDt57dPjAJJAxhM",
  "key6": "3sVfeUSuA1txeEZqvaupEdMRBGzMhiPzSDQAyCL33DNKaGzWUiE53zvZzNTsAnysUgpoQMdiD7YGKUnbAmD1zhWg",
  "key7": "3uqLXwmqtjTuPc38gRtfVUsU9mA11QSrzR5gVDuBs9eZicyo5Y5Wf8B2LMDih4rtFiabHY88zyeAVJXykUEgWui2",
  "key8": "67otMHG4pC92PcQHTmtvVwkrZrPRyYvf6wuK4GTT9ZMoXQHzZLMj1A1jyR6vqyrffx8BmWLv5hgz7r1dzpMtMgto",
  "key9": "4MGN3FaPKYTLDwVnsCVU9B6nY5DLEhyppWa2isKbzAsZiNo8rrPXvuabvKQ1HcniYZfHDsvkUgZGm8nwC42duUQB",
  "key10": "RLncex2KmtrhHmT3xGrhLQ9hoEykEGXDtwerxN8J7DyJNM8137WS7pzKEREGS5uPh3MmEcY1NRj9hzpydBeL9ca",
  "key11": "2XbSWDif2Wd9iTzMQToSY4jsnCjhzqbUtunQ4CxJJD2f9BC9fmG7Hae9ueKdf5eBzMK2adjxmu7BqAma5j1i3ukV",
  "key12": "gEZV6L5J1SFivwoXf62WKX5NWNGmF4mfLJM8JU1cdQN41v6fDzAEUFVqMUJW2FtYpHrhrHtyL7ZKqHGgy38BroT",
  "key13": "5gf6rBMieYw8JvLqqxj8pN68x9anoPhiHGt2b9jJ5PbV37Av9ipNZtxecqvaNgPa3xH6J34ZNFMP1G87cqdTdgo4",
  "key14": "dJQdtQrUESWkbpracMhreKXiF5SKpESJFT5rdEuAbvt9oy4qRyJDwqKdMoydsubCUM5zLBjEvLj8QYUzB1Azbyj",
  "key15": "4NRPqnAT2uKhLx2hintFurTDwfNcjghoMEJEx8Sm7jdXA11sBjXqpFDZcpzkSkxDUh2dmjcQk2ZGR7tRK99rLsFF",
  "key16": "4BKuHbbYRuA4SPZRebL91t5CfV2n9txWWvinJixUysXLUGqarGDG69p7eRZkcQiaum5jLLovQ8tUg5yP9LHs1Lf3",
  "key17": "VeyLpD2xrTR17VyqPNMfyaknGJxVTQWSkrYYbrMjaXvaUjPhyYwwANYKCNZCTLKjhTBhe2hCVRABKcygdDDpQf5",
  "key18": "5Am4y2Ze32p7MPua3pSWyCE1hz6Njev7CP88bVYdJwHup2KyDH1GKbW4Yu5pZXGNaKGtw4A6TZNRrG88bvGegBPP",
  "key19": "4G5fXRz1cqYLvwmEtQ8AwGYtifmpETQycamiuvrYAC8Z9TmeFMVyFiGTxK55QaGk94hvF2CC85c2wzvpBN2kPjTR",
  "key20": "4mdyK4wtGwiGoRLChizx1VV9bLY4dYwB9VyNu8sMBzVdWL5o5WbUGnMaSWtwg9rsD1AprmLreJY88YunKsrLVpLS",
  "key21": "5H6qZtCEmzCeCUoAXJHwD4WUk1pPuKE1CKhA4E7T6P3A9PnFa5n7ohU5JWhkp2tPTazYNRxHQXRGJLgSonQdWCyq",
  "key22": "4PfePQw1an8QpYtksM2NCfDsjWSZs3fFQb5QuXChsu9fPg2rtmxrQ9JHgYEFUYGnq5dPD2akDEmF3SHygAvLp1hV",
  "key23": "3roGpEBvdLJ6bDpDMKgwFuZySpf4DMWzHThDLgLwZMgkvd71yQfEJFqManhAR3EZ3fzmbt5NH53WjbmwXwUFhw1t",
  "key24": "pCLv2MwM5KPLM3vLK1Vf5yUEqocm5hq5zY2oW8fdz2yRRHN5VQ7Ts9SR9wqoew7GrCYEj6HTnbFJZGcvjkYpzSa",
  "key25": "5XKwJxMnC46EVDR8yrctZqdooRfuQ2GupyJoNr6qH3KNuGi4dX3HdR2Svh3ZNhap4U58QQT4A3izoxwBG9DjmkzE",
  "key26": "4c338sxWMaXjxC4MS9KGaph637DrZpMn8V5uJdj2oUQqJETVHcD8WgPskpA6g1g39oRmNUkUKD4qNkBhno4LKLmf",
  "key27": "CLL6aKz2Wb8xsrZeJPrJE3WVopzS4gzpJGwiQV4fzeevpdg2L5s1dTBPZRXufSmveXSKhJ1dxniiYzhyrc3Lrou",
  "key28": "2ETQ2ijE9RAAudFg2M9tdHkn3EJcdJy25if8owsiFsAY7KoLopwtbr5KGazTDyVarz17jMM3bEPPyCFpHr8K3Rme",
  "key29": "3vbieerEpUXFd7icWhEYEKyiFA1rd93xKosLT6WCgvTriPndGpPoRe6ACr9n1UCPL55xfuynAW11yceCzVyJUqQz",
  "key30": "5hxJJgZUpNbDe518KYz6Np5AX1QtXdgcmUstCDnReUkoM4h1ZDUkAp3cHtJGjr1jqyihsK7r5DZqytWAJMG99pjk"
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
