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
    "4XHjDo7dRDWt8qRgfRT6jX66kfbdrdFAS1VncWPiDut79JE2BVri227QNA775DhVsbB1f4aPp3b4k5xzxsKjHE39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoH1WX32WqqpEaQfYwJFCK3WTE3YBUSSNb4uq8Mxybm7gnd8bTmERtE1yAFDpNJdgdJkutbFHKiCeE7678R6J1S",
  "key1": "4n5mr8WUnBsekB18ksgUDHLBjMpNi52y6ZkooMmn2r7QtieYqYaSW3yuhNRaAsJ4Xbq2mQEkVSGZvLvtNyAS64Zd",
  "key2": "Fio51S7n4VFmEVCDWSevmg65utNtKQ6y7HKMdxYMKEXt4sWPo5rja4mD2QjnJo52k1jHs3EbuSzfQaTmHG7Nnvk",
  "key3": "3tZoJA4WAT6qiUH9zrPokdRpF9ij1MeRfZffixbsFSpmqunefJAnnjjEa8WYAEr2poScnAiegCH7smtWH1fYpeU",
  "key4": "5VXvrq2hZHRwfJHJvejWJq7RzSTKEhgZTcWQKtDyXHQvk9CLmquBzU5sHWukiX45vtDJdhMgzWxE6gDRzEfxuYaJ",
  "key5": "5MdbnUWN5Fyo3mNmhv7QCWdoE3dDdZyZhHVbRiXbf5HYVWsKQ8bUQjvH4ZuqD9dQ2PCkHMTpUJZc4ssVmHWSiMF8",
  "key6": "2SDE4uBKKpEGV2oaqxcuxKen2Y7c7RrGwuv83yJ7GoPfGEcX17fn2oEy4pGjnrWf81bUyUnFpcqs9kWrLmm7YH6a",
  "key7": "4xQspWMSBLcjvaVXfD2X7JWrWgnedmWnG4wBRUUFvfHWMPcFqqm8ueNJGU5y7kJZia5w6KYNu1UoXBKbwDZErcH6",
  "key8": "2RGhwpeXcVKzC68V7GALA6JR5mWjF6KzyVREqt67LgrQHhXDYhSQFcEuGCEjEhHx4eKExaF5ocfM4bZre3wYL2X5",
  "key9": "2ga2TWDTgptUMzm7FqPSupX84xmg5HUoHPW6aeD84grpupQd3t83kgn11DmpLjKt9n8oUiYABntJJuc4d3Bcraf8",
  "key10": "Bj77VtjupKg1HCYrgup9mwYMVoCVBAsCetVAHUn6ZaV6CfoiuzDhGJorNjXKySt4UMBSorwgaHm2ZA5BJPbWdWJ",
  "key11": "ek4w2iydEhWqtdfVExbrftHMPszB4rabjSLiufsuwuu4UxK3W9AHALjggUdJ4k6GMUex4YoAEUNJLk8m4u7CPYp",
  "key12": "48mNzdPze2Uk8UmruiDfGYhy3xAGpwgpHDV7zAUrk1nzjLCh8rqZFkGiyJscPRb5xj9FT5BQv5pnx2PHbkLfQYrN",
  "key13": "35obCj9MKoQoUZFt5nhBVRETXhTCD6fXQgXKGfWzhwbX3ad3T4REDGSJ2nt8UarHT7BAiGeZwA8TXY2jHrmMasPZ",
  "key14": "3UV97Vw54KRkcr5Y5tdBQc8x7Xv3i4pDEid7hbeJjXb4kckVCakPcAJHzYe36gwDRCprRGEQE2kWTFDrRKgRwcUn",
  "key15": "5nw27JVC2eejtzDtvnfhxmAs2LJj7RxQVy7dag7apLR1vRRXAWQyxjAU741W6QMMhtnj5P5JudbAMtXseXpNTihe",
  "key16": "3ZaAS1HtjqVwV5naNhzT9eCVYfKq2P9kkkeWRD1mndmKMx4cUJyPMMfsrJ21sRgTdn3v8fgWYxHj4jGrySeL2cn9",
  "key17": "2RFfurC1QJUkPdBGWUxXtuMZkoNMfN1zVJ3stSujxunnUdbfkaPrKVEZBMNUNQS9gKFZ9jZ2E1dfPyHX1i1q9WLp",
  "key18": "3GKy24HtP5PyN53w6ZHd1iuKgbcrc5DrAjrPYHnwjmNiKLnnVa8h8JGsNx4PQTbimKtfJj5rUpczktGooUdSZ82w",
  "key19": "5NnRg8N3eNXDaWsTbggw7zsVC7uP272ZosCzduzVJYtCTMkVqxEck6oqawSUQUequGvu31b8nd4Ud1jyPJqHxH8G",
  "key20": "gQhCGLJZTpDdoCoRyTQeZRqKQBLxb7wqhEYijp11pta2xN8XMJfvat6MXP7i1x1oMEGhVPiShrhFF94eMVXBTqu",
  "key21": "4DzwZ5vtkPHht4GFw4xpdGbnCeLWTjkH4XFa3Kqb43PLr7b8bJ8qVmwLqdBNf2XCwsXyAd6BFV6UXGKRzDiWLkNy",
  "key22": "4cxTeAU6JkPx5SrhSfNqdYKKKwe1oVK71wqp9AvUEF8uonradUL5Cmp4EoC84hKXesjdv5yNM8AVUf1kVBV6YMzV",
  "key23": "5tSNyUN8qXZaJZZqy7vgUdgwjfAHqiHPpJ8YP6pCVVonU6rVeT61hwREJpcm9pYiPhqg2ivEc89gegEERtaSfpQY",
  "key24": "U2Wz58T7wwEBEUT9aqkYZW8Dmz1QmfJgUpQy2djEnvuhBoqPFZ6jS7CyQCKqX6ugzm96cehVvimuYio2HGiNjPn",
  "key25": "5qfBTBdSSdKXfcQzcaL41xiiQT1cwHh1wTh4VS8N4RfJ1Wh6tEKeoJK57LvQbFGRZ4v7Gq5UykRz95FsFQDPEare",
  "key26": "2eisCZB3Kqof9Lght9B3U6ARwH51gi3QxzAhgfkd7ey457y5NtGt5VXCD9nuHvUq1tBdjohW8kvP2eRFocqwEfxh",
  "key27": "3E9U9t8u5Tze4iYikJo63qNyJFNNduroT982YfRzc6LHytkLgUYwbs94GNZJjA9MqXAhuqs1HLs913Ehy3QPF1qV"
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
