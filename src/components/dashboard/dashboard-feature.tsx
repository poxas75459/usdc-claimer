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
    "3S4f1WPZb9VSitF3YBrWDETDGQY8G73chX61YBFMcXGccEihQfGn3o6QdNtzTAi1Q9tSd6TCSTU8tAnaYXwvqZ2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJERyAS6b5PJZJYh8f77N75U3CZ3wrceQUqJcc9z8fEMH5jahDBM9GVBxQbHtXyLBy8b3BihdT28R8JiHaiERDb",
  "key1": "4QDdoDUiZx6a28NDq9aTXyD9DLZsEUBkHWmxaHPTbdDoHWtxQdXchvUM5Ecs6cBVHBgT64qmUCHMHDJ9U28uDbX6",
  "key2": "5kWjmm93c8JzpXaEjDwdDYb1PYEydW3F5tmAZ7iazxYFqcG3QQK3kdNLjoFQo7dzBH7uoG2CLQLDoJEuSALEvvaW",
  "key3": "5YX9GawbBT1Z1LrL36pbkNSfyVJpoovQWe1D9ZfJULYJ1WqZsTrLUsdis62tmzEvHEVtUi8nBtTop3uYTHDeRtfX",
  "key4": "2yAnsinSPDf3C78B66zCvzPqjnurduH7JyD3wFK4Fitw2ch9ZzEKyuS2PGnKX56UWR3hHeCeYGHXUcrmhMwrjydN",
  "key5": "5kvozL76S4BVEuqTXkbGRcwXyUjMTmfL3oeJ2HNDzHoT6pQJNQUWRHz4vrmArcQqazGLMJAVGFmpqCQ12eugoMFE",
  "key6": "fXw3armgq2kN3bP2ZTrjSm6m8oGxLgLrtz6BhHUVM9uWtQ8JXrFzmyfqmKXMBAyUoNFE2TG2sGp2pZZ3aMcRZsj",
  "key7": "2zchhcDJvtWs3JRNHMnAjvityjYrXRruJK286Dw7iQ9ExkpLNKrsk9wpJ35fLAZYzFCbaC8Apw3aNxW6jq3Fwwci",
  "key8": "4ywgXi1EpCyxwsty4BhfsCTQcWTG2JKJVHsgBSLyRaknoNhUfafCYuCiGpBXtpv9thfXA428AKzzMTZQW8Zi5F3g",
  "key9": "4KuZD6LAeJuRN1AZfeqayDCgEDU5gC2jPjgrXFTFExF5nf8LmG1BVJxpQ7YgyGKEbCwoxHS1ipg6XAcH6ZfwmZAF",
  "key10": "2emKp33XWDvfNdKqR2zZjMDu4yXBGVUEmJrqQ8A76HEfvBW9C2gTU6FFqPg38eFifaxb52sWJNYskjwJM4NUw9FE",
  "key11": "2UnpEbR9GQdc6qhaTsbV8AkFTGAT9qTEUDJWW1v7awW6WzbgmhaU6pTUmWZ8RA9yEAqkFHJr9KLzXkLE9ueFFSUK",
  "key12": "4SaKSnio55g1KCTiMr2i12jgqLjDmQcYBM7wNu8RZt8MB2cjJGPBYB1ND1VxyFpy2B2YZGVuVg8dZLXRcDKPG1Ze",
  "key13": "3DjbRoCoBojjLnNCa3RKhFtxi2mLyEPiCRfka3yyb5oAesFrZLiMnHpgXhNEbZR6b3V7xezbuGbQYm18sopSSgaM",
  "key14": "5RBfmjfM35VboA4jzP6J3TL5qhAe6sK6gJBEReYHbppxXYdNRVW9eJDcgiExnXHdjSU7d6PZ6fioXtphQMo9BtGz",
  "key15": "MXdSwSdPNKLRW3dFK7xtnNaDAGrY4XXY61AAkn1r4Ko3hxJHBiG2RWoqvvKYhp7jYaH8282DWdxKbXC2JasjMrf",
  "key16": "G1TDFYZyYnGKFCfnUH9tKQRUVJVnCDk54nKPbJ8DDK1zM5zaReLMXKKeKgwhx9mBXCr4zRv9kfBzt42fosT8Hcv",
  "key17": "41PcuWk4mhjh7JjUjzNFiEVwpk9Wj675xo1nnRTF2PQLTw3nkMEpUKN9HGJWWxfngWanQbBxgkTxnPM63yEL3v36",
  "key18": "3EtiPg92dWwGCbe41W4gG1jHGt8eBHj47z184jBDZT57Q526xQdxtYzNMFf5vUssXFfVZodFpMFGwYMqN2hvhZSe",
  "key19": "4Bm9GHFw6CvKze9zCqabNkcK152eh8eUwrUnnpHqfhC2cPY7dxwjDE17ydWiydk6jDaCsE7aqHbYNcWxA2NvWGBs",
  "key20": "eRG2c2SKxG7fkw2PmWYKEvAaEt2pdZxCX8rX9MBmVd1ouaA2q8q28C3FSUEz6MAhukt68mV5rBwqAn9aM4im9EZ",
  "key21": "3Nrv1tVRwyQjXKBUyJyvNgWjh6PxUR5XsQgDwLhLYS6Awue74RzgoUQAbMmEdHHJ5JKVPqvu7xWpDXb5nhXzN9GD",
  "key22": "nzEo2YcxtbrLUtGcVB6pAWuM8dndiKTFznphWcFokT8J2UKRfn4w4JTCHCPZ4Ar1MRTBrybKLeiFNxED3ojgtge",
  "key23": "4tSx4qcAj42VsfWqNfWtTkNGawi1LdZckwoANiPKUvi9EkXQHjVSFFHukUKXZn7FAPwJWRSrAu2mtm5FGQxq4r8c",
  "key24": "CKXEJLBSszeKAw8WVMiXcavS8oo6FVx47XJYmehoBnT2neNLSnz2U2dEjNbyAcK27P1knbsxMo1gfvbUGgoRs1L",
  "key25": "2R9QKX3a1efLrGAYspcLAfeoPBvPmEQmbRakqKdGTsD9CdYxZnjy3Db2utisDw7e29L9Vo7YdBucA1AeMHp9pg9u",
  "key26": "4PLpdXzPJvMr5GtRgZFo8q32afVqeDaaDYnfGsiCVwEGvayhZSHpSUHHRGPBvW5TVCP6p2Xzx8PRsmihbyD3iEz2",
  "key27": "235zyjmFwJvMY722rvcrCcdY5Mfn7mR4FHWwbVumDsgNcfZraqtQsosJ52gnz914tpLu5CikDBSks7Ggt6Motyo4",
  "key28": "48YLDAoSxwrEcQr2JDK3zYf5B4XqhnnQVVHrYTuB2guzbDKGCNT6FWrFCeJTVWDJmXd3rzZsSAN825xHpU67dH5c",
  "key29": "4QqqPBsKmUPK28GB2ditbdhGoRRyaYqe35pwbxPomuErmZCZV3qDDJasBZatik6yBCFU7N3ZxcSS1JVPs2bBwTS6",
  "key30": "5etux2KRtj45Mf4eJtyuR5sVHa7rWNQjUm5KxbPVrxfG4wJ9WE7LC1c7KcdszAFwDjwZgwW4M9LKcGMPv1qeXMqe",
  "key31": "4pbpfavTNmVHaLCFi2vjsnbfdfKDkehD33XmZz4Ze2ejZdAY4Jgz8BuuwcGb3bgrzdCoN5MKrzA7D9xgkyQm9wVx",
  "key32": "3oVJaaUiVz1BTnz3Z35e7TBQbEMb9fyBCwusB8tW61jpVnWc4daj2iyDTn46wQYp2CNy67ArwBvbfRZa2Xm9QUrY",
  "key33": "5D5VXfEiGiJKQbKgJVTmYKT7wzZu6DEa65HHZUytKTuyzokNnjZujKx894NDR5H4NsytHuaA3gvgr5kTo5zo3Rxq",
  "key34": "4Uy9r38qpNzhVKxroJbet1WQnCcfns4Fyaw2KrfKWU6Fo1oB9pff3rhBnkypyAi6yKBk8sWFEX3PGhTRJEXoQ99z",
  "key35": "5fiPjw6Y9EUPH5wHQrkYaw4UYdrYqwcxtLA3Qzah9DzuuSe3YjpCoiTHfdQxMXVdXHt2VsCJ2zvjNausGzJPyRUx",
  "key36": "7QqhertausYNPpQtmgBB4DgyWMJuPTPYQrWrsE2mA6hfNneVYf6pvjCnMxgDo64r8ESmpT5ZGooWnEs9orkgj92",
  "key37": "28k5uETDWce1fCD8etfyaERXmXndP4NawBFpXLK7Z6hAkHtWoNtryjKFXf2wGBesCCP4b1g7Y8BPVoRcuqXbJ8rX",
  "key38": "3QisQFvavKLxnb8GgGe52TmUomT5oh6KaLxArweVyonzmYK4PaxPyokH33GXFd4J1L6Td6Q7FnRCqoTCxkuPBfQY",
  "key39": "5pZgeqQ7pUFRCJmEofbqqyM6BmxXUyka5R7So83yEBaRtCzSAyUMA2ULQuR8yvdSacTp49bSe1ghvzaeucUy6bPH",
  "key40": "nz99fRmUE6bS3QPJ9auZEYXub2UFyv1z4sJgGBjgTJR8t17UZeNEH6neqFYCagTyMscX7u6v6F5JKJGM9nXXmYZ",
  "key41": "5rUKCNZgdcQLio9p5V2Xj6paivcie5nHWSz5kPxdFzeh71YqrvFd96XSaRqTgUdWbPjWrhX5W9Grkx2L3NV7ebL3",
  "key42": "5o33EyEHpnefHYnZe9QoqC6jC1wN8Lrq6PKPTRVoHnApyqzM8A3fpHQThUVqfFQtrYD2tBsqpoqqJDdj8xWNPnFw",
  "key43": "3h62RnMXtfkbkvZb6jTviCvN6NDspy2SPpHiwRCgoZxgnBZEokgDkAe3QpQGmUbPe7u37E61jUzhZkUtnWwFjbsC"
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
