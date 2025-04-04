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
    "3vvt9isv7aYkiZfkqHxH77ABHtKSv9vCrmaJJ6c5iwr8F23WKzv5YvEpK8YTajhz46hxUqHTCRYWAT3sZPmmn77j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qaotw1f7NkGZkvxvf2VNXCfUmrT3cH695eezzy4YgAuTHR1Jf6TAPTJXaRj2sN3WFoPjG2E7vdCvPsfqbw6ivsC",
  "key1": "3Zhm5pwgsXs9M1vDnv8vKCg6LtM3zcYeUud3qhFiyJGEFCeKT2PcFFoxRSxz8eY2qvF1TtnQrscYEfByXKhEPVxN",
  "key2": "3UaDodbm7yrgiaKAMs8pGEuw5cLUbPBTiprwrNLJTEV62Si61V1sDiNaXSb7PuCBxSdHEHM9K5vkLLJY1x6RMBpA",
  "key3": "77Rc4dwMafX3LT2MFgzBq84iqGBUCjYz5fxQ2RUepERbeaDpL6Jo9w4aRhkpFxp5hrT7D43zjCpJCyoXPNgFBA3",
  "key4": "2f1N8TMYiDPd5NF7hSJxfAfsmmF3KnLpmHADaen11okKPJc1YVNh31ohuyS4aMG339dnk6mS2E8WdaQWsfQ7g57j",
  "key5": "wZ3tH4w2saXAHUYzv6wJB4wZdeHBWXvrVJXMwV9YLVLUvMrQ1a58xTjm56tXJ2ShobFzBM6wnJaPDuVAiDbQAmR",
  "key6": "3q9g2bLnksydJtTZTxgEbnkqQPcqFp8GcovTQQJDEGaq66Nx2YckUWJYttrv4vQ7QtCojDCdVx4ij8B87VhUSYFi",
  "key7": "2yb4bjmxh75isveUkXjT4iuUPNeCvMHqA68FqkmKWanvH5EnuCcfEeNtjp4mQork9A2vn6b67qUFMESWfo5AuwgH",
  "key8": "5WSQomTajUktxevocuswHNioX1hPKSAhrJDET9QoNBPWgKuHdAFecsbsQ6crbSXxomtvYw1HCqLsCoMVyomkbgrQ",
  "key9": "4gpJxu63eju35P2kRK79PaiC9ddyywW7m4eZGm2ic112YANcnsFhetVqTFRjZ4msoQgkoyiQQz2ASf2UfgWxcRSG",
  "key10": "2CumZnwSkcziDa6PVCywUF74Vmy2LPMRG8nBRdWLLyN1GjF7zj6GGWy8b96TEropr69JQv9SwMrHf4BKTvftQoMj",
  "key11": "5qag6zMPmZYFqbSYbzKDy6myRx142bgr8cPf6wgKvacvtERTcQxbSkc1k1C4x8XLYyfsRSwBZQ8rygXwCCbk3QNE",
  "key12": "3G7r6nBDRmq7f2ZTJgAwUh4oLwhELuEd21LSffApgYq8B4TuexC417weVX8Mf1EvHD2oCbayWtCxyEcUbqmYWyfa",
  "key13": "89um3PVK5uF9hK4JvvxUwxXUF35h1kJpGeJz4LogMb2BXnr4ADJSKQ5o3ZKjGEMmPhiVAXr7PkwTC6ZsMtb8zwB",
  "key14": "5kbCLQxs2wyxWqVHGQsDX5GjCfo65zYNzmrFCTu4RgAd2eiXtFW6bW3iAAaVGhsJiUoZPstTp9SwyWoVzZA9DRN3",
  "key15": "BrnLz5ZoSAQCt8VGj566qXzH6PBfPrDqaC7kt4xPmWJ58LDkboziEY9rnRqFNFYKAdcFGrFxyRkRew1VcGcKBB7",
  "key16": "4irkrh8UdHCr6whMPFk2Ksr2KPchVsHfNsP3A7sf1LY7MCz2trQWYNrux6uXdgfHFNQUecsb1iQXNCFjok2Ypnmz",
  "key17": "5QzDkSNzcQvGeQJ9vjRMKN8wW5mWe2a2JfxBoGSPFxeHTN6Rg2XDvoAgbQGAUZKJRLZfE6bGt3HBwQA3uFeLLvBV",
  "key18": "2At3rsYaQTSQ82GhiszV33GdBNkqmaRXnwCLMdtPJmnfRJ6bcV8GdrvXTQfXd1jxynUcnqdCpkzMeDruHAwj93Th",
  "key19": "2Y2kLJ6NWpMF39LXbjjJJQMXw91iu9Uy373wqrYxNxPWXMcjQkL931dS6VWfLUaACB4TtbchjYEH1iQYx2eqjDdC",
  "key20": "2ty3ZxkUc5TbVZKwnAYsfU2vu8driadCpBLmWjnnFFkXLkXv2faUUFUgV3XZx3gXrvgeGvH248H1LgfSTj7rM1TY",
  "key21": "3sy68rTLpu5QtLfFmWmbGZgeDtRqnGakobp7FEcrtQCVSZS4ti4oyvFcNHk67KaW2AVYv2GLaNyxzowm5qGSV3kn",
  "key22": "4nqQW29LSWYPSNVvVs3DBcSKKiPPYNrogQXwMkkoYH93tQxd2o6PvTvpwTjsQa36DWNaXQk1iWWbqgdMyBhy11vU",
  "key23": "5TNxYS6jZtH3vjtC2sdyeXPksy5g8p6xUzhqrU5fbAmpxd1S5kVsJNW7t16J1gv7Q96k2SkkjV8YqZv4rjhm8TFQ",
  "key24": "3LRWs8Jwmwhpcf3bmdAA4EJWRmziiWPub39zTGMk5RUYgQrzc8rNvEsdkZeGoRYUa6VVjk7w9yDcAm6Hg7nMR6er",
  "key25": "67ftudsTaBZ32Lh7v2ks2WPPuXRm698nqziT4QpEsoDG7Unj9C3da4erBwL2zogCi2kqPoTh9v15J1voYD6o9YFf",
  "key26": "4CH99BmaEjhU3EeHkncSZnCLi3PwjVrgsg2W6LNwWgRU3cywSX5oZuf3ZvoJ6jqDHNUZvYrVPfGY4zDoDn9k2d5a",
  "key27": "3a4A58PBhPz38fcSoPeb8Qc4DfLV3YDVUo55riHKyNGLW6QS5dur8bbhq2imxappNvB6uTcgPsm3NsoXwiffW9Ay",
  "key28": "2TDUYzjRKst3pRaxYBviLxcA5yRwkmm1NDAixjLp7UrK5Z58JWLY21pPePqjJFjW5HyuBVZzmMDncV4xpLktqmyb",
  "key29": "244gcX41D3wgfZbY8jYo6qpf3kS9FLF63yzDhLvhQPZSnku33ZJnS9BaoeoQWoEpkMgMukduxkfLLNviX6iEPzzh",
  "key30": "NDp9pwYFg62pM9yBjAAT8fYUWdh8gtM7rPs4gLxJtkod1xqJUCRZRKbqtX9U843iDbQAkfnXYMY3yj4FF2UBA7F",
  "key31": "uf1NijNgK9Pgc3mkGfwBVqH5pNMKzkDHm11noeAgYWpjoT1wiStsXheaEk8FpdVQvDuBhZbZUBXSx2rXdBzKZPP",
  "key32": "34UvbDWq5JUajuM2gAKf4pYcs9ZfvEzanmjgUmETc8GEP2GKRFX86nrptuVon2nCqJ8iKpap3PGEmGqMxch8Fcsy",
  "key33": "5KbsGVSfsA33SP1CY434uRDJyC8LkBrjiGh9QcWnqABZw31919AAbLhv47Rveq6iDqC1dS4a7GRJpEGWVL1Jr46g"
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
