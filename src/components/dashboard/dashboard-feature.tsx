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
    "5LrrjmMtEqzep28mfQVdTCKXbLShDSkgU98UxSDMpTfPtSNV1eaRvsnegihdGq7S8WymZutEQj6vjsFFDjgru3Sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aywTZhn19Xb6r3ja9ZQVV5paWtybaPegpyjmJf3STjmA5c4amc4uSDU4dC3Ri68enagRAZkEHD8RY1KWgiZHaV6",
  "key1": "MkBY2Q7iC1pCH1v87PPL1vumBfhVTXY6p3zQmvMqbZMaAVWTw32PN5gsWrRYTTDFERWXqsmG33p3GDWirj9Meow",
  "key2": "52uTLYGZNCvaogRpWUSpGj8XVVgaCaZJwh5wFAAX38U5xcZoBVMvsoLtXB5vRKrXC5mzG9gThzDfnUR37smzBSJo",
  "key3": "663foEJSjWEhb5sKsUY4soecknzKuwpJPoZRCTicPP494381EKD3oqtHT7MEJPC7CKZGhdcW1nsnVyq1ZZZbXP8y",
  "key4": "Rrb7QYZqkG4MCRmfdpqyEbeiTovLBs1v43ZNLrmpLgJfJGYxNk7a6DiFyKJMCmdDYWx8Wz89vhdmzuCudT2feUE",
  "key5": "35JVm24MfMVnSLVayYGf1mWY52pTFf3UpxHUAXU3Fgu8R4ssU9hUK1JpkD38jxq6ZrAChHMibpGCfnKg4mjZr6M8",
  "key6": "4VBcWcRouq2RBVJFK3fZnv8Zn6v4ymP9644fHY58nh9rhEdhRcRqk5shGgfYQ9hhBEo1p9QEq4KPzpZBPR7QsWoi",
  "key7": "AzUqvYjo4ZdyomK5Dj52AD8yc8WFzKinKxNrNF8WG5w1BxvpPAyhvchfpUuNbDRDiCBGR2ZG9WguRpV2ovmJMtV",
  "key8": "2hDTBzDozNzKA1ws4YXEb7a4sGHsERyogXHhWkyvBFAeRtpHErdD2Cw7wJY3f99mrh9ZsNHFehP58ZU1ou4ZRqsN",
  "key9": "X47aCLjwkHoA9EjsjF6MzsfZzCQSwqQt2hRBxzHUwNm3k56GUHwGZUFSeR2puXiuT7mf9DT563okQUsmPmeZcKs",
  "key10": "33vfV1ozHMhdJqFs4EFti3z3QdnC6KktGxUUiBDsbqicMEFb7h8Rs1zFyCm61sB3zxzCWoEFFxuccKR2sqTiYJg9",
  "key11": "59pcBXUKu8WEzoukpBSG4JQ3Lf1mDLxs8pmyjEvTZCjh8oiYZHmKa4SWQVvgi1qs2KKdoxVhC7qGB8xCfdh5kCMw",
  "key12": "2cEXbUie2F8EfqBhfa99DCaDUfGwAJX6igGbzBZiZerbfJX2BqNT3w6b8noTAfmnd7fRE95Sab8xR5wchPWDYYe5",
  "key13": "5eMnaQoxTmaoYofQsEY8wvg93jzGq9MCkDpqxgJNTqReSVRyoLJZKzdRhqFEA3umEmoLDcm9TKNWWRp5yaWP6BZG",
  "key14": "3htkinc7SMnzLS1AnrxKXk5Ynt7HvzYLBEy5nVacxmuYjheTNfYZkGgj3uiCqDvfdCpPLoj2vea2ai87y9QQkq4h",
  "key15": "2XdqXadKwq2NqtZucaRSXJJqQi1n32NmnfA8RSiDEfkFfWMhd6SfBW5Ytb4MjXPJ7Xh5n4p2fRs7LCRSVk9GpvBH",
  "key16": "JWg9d8b1QkHn6Lv5txy5qmvVV6PZg8ksFdC3UH56MyBiifbHTo9ikEfvtDEdvujSR7x8ApZbc5ez37tGKWB9tu5",
  "key17": "Hm94CdDGniQPYZmxKGMt1xEWfhUQ8SqzQ94XHxtp8VMiQNkbxLvmWHCxnZg6RWTmUVLNiWLuHFQFu2d6oVrYEUj",
  "key18": "QMTUXmriRcNATyuFKpC7McKt8tys9awP4LXnr87qX5J68e5Z5x9HCf9qEQ8VitX6VDt6NB1nUGZ9fuD7efd2Gvr",
  "key19": "5UjgeaTUcKZHLktgyDcjcM69c5XSqJGcTFL3P4CnLT33qWzmDsdpGdn3DPpjhaEyqgZ5onHLwi2GbAsMYyRxDkxB",
  "key20": "2eiSfgHn5UANKZuQ937ZRuhnhEyvQ2u7BH7SdgrykggXJdp6b9dAntY9dfbjKtfnEk1LgDdtmxMgsZyX561qG3fP",
  "key21": "3cBkpsT1zNkHbUJpWk8jETqD27Gq85w6uEv35NDq4Evn8VmVXoF5EdiQfU83p88vJyU8Re53XQM1WjBj64v5GRaU",
  "key22": "K117D72Bq7sqmXqpDKjDguw1anF6DVkMwLXWTr7KwWp7gBdCRLd7yjYLB4uqGUL85EQfbxuZCPAmQmpKWgzLTud",
  "key23": "5CK9qCvHW84SunpmgYxvtFs3ormjaPLgdoEJCCAxMxc3Ne1vLNsyLWpyFBonFuSAprK812jSgENw5pBiiw5SBaH2",
  "key24": "hLryzHHkb78Wu9nyBLDxGByUDRnwjCEkj2iYsSYZvQJ9MZJxCW5RmCAmF2hcJ5CP9ywTWUFHEmZfLeNts6A4gYm",
  "key25": "2wsf9GYaVHyCtfcuuye9dqckqpYkFR6Cx6TwodaRxPVtzUpbvibnppqm8ManCgVuxh2j3Zv1yNSwVGEnqkV7zMpr",
  "key26": "zPVfSo2PcjQBcuixrvPyCePp5jB6YZTEgaqkfs1FyazyrLrEzdnmafnoopcVecHcrJ3MrokQ3Bpp6KS786y2cAV",
  "key27": "5wa4XC52biSj5Ko2kEwgWzRFt6zrVjyZ2PwDXXtm6w3TbWu8DMnkCvY86vrzSQzZBrx8vgAFqZPkBUXtRgUDD2ME",
  "key28": "2bbmhBHURcwyagMYJoj8H5Zmdbxm2pw6EDW6yRYczBrwFCG8kQV1b1CokSuYs7nURYVZm8VuM2tzXNeqTTDK1wmd",
  "key29": "3TvgnzSdFKmLzN44oYVWk1vDFr2X5HEdJcTV68pVMmwzAyJu3tvot1uSKsgbXhpWerSRX3kTarKJrBgtsSxMhYqy",
  "key30": "2qgfaktHWFnr82naAP4WbCePW4zRq4W4ueF8Vbh5siC33HeVci74kFi2cDgVAZnUkQCnvQ9fTjisuENAwE5tgRXZ",
  "key31": "454fDmq1SAVL4AeB7ur635ZEZAnTbN8Y2cu2kAr788Saxxr1d88mqw1NiznGcYqgZ5oyMVPFwGdhozF1jm2v1feD"
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
