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
    "4yLqqiKnMoMk4hCh9kPjrUvwJk7tBAsciVRFbR8sqxdMckBjGjtKvxCRzkksqqcCmzhp4R7rb1qcpqabSpyP83sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWhEhRU6fZSpyoZ4jTvF9FBQWCreLX53cJNwuoSv54aqp8WxoftN4rUBwqaUik7zMxtrKvVHE7iEe4NvaXASGjE",
  "key1": "35FmFzNARfazXU1Wrn9mvSnxd8QZutPg8BrDwWHuHVLbSn1HsqM1b2F9SJuUuap4zirVbgwLs3x36pgS3SuaRDBo",
  "key2": "2YEXvxJCEEBRBRpMpVe7Zxj9TuM5h1ispAGTES4D5zVMQhrXeC47ahPaTULZ9D7GVutZdtn3twsFzyhdFKtPbpiq",
  "key3": "2dGeJYLWohKZdpaYLvodzoRLvqATZcg5mLhKpGCj7FyEnYYtZDuMT65Xr5rxC8S7PRpKokp6sAkk3dRGxqW2ZfDj",
  "key4": "5kP15fVZgxhNXvxxtgfjx9sGGUqJSMMQHBKvyyUkDgUowbTMQMZ6PAcbuoADrCMcrqg4UQtcTu5ay9BsJ8JUGTPe",
  "key5": "2RoGdDd88Qc7mnX5YFfSbtgXWsnZ7EXaxChuCd8vSjetvtMe1WLuiX8o7L1yYVhFzuzqbRkhPyDCJPs3XkVPJQhe",
  "key6": "34Y6AReWvDn7ArUuMkWKtdG9BoSrkoPsFqahR3U6DGBCJpuPRnpizgdUfE9Ljd3hHSmqtHJ99tHJWbns8bCtMaS1",
  "key7": "4qXe3HQwi8qQX3zbkodWn3qaithFL7SmQXQVudpjo4ixa3AtsweHGesHSRkTVsmM4EaikygxnKNgS8pXavXHiASy",
  "key8": "3HRiAVg6kAzDtNs6f84HLHRLQahJYPsNLLZkBHe5Qm37CPu4Hjshc1a8ddW1Nge1R4zodvSBHML6CH2LrAcfdVfg",
  "key9": "2gqDDFsrfMGxuCeGG5erBQXqb6b2yT4L28cBuVvj5TGPHmEURtLxB1WsJE4bBnG9fSghZVg9KMvCeWx19oKarBgf",
  "key10": "32UKrxWcDVaXiLuoeX1jEerFXdLmmLWYHSaLkJ4aaMDCBJKjBGJbSRKUs1Xqa8FJjJQrExBd79a6HwkPZa6wXyp5",
  "key11": "3SHuhbfFVohxeb5WxNQ3bCbX8MyNpD6s4HhJgVDus85oYoQD2cVKutfWWsgewVq81wcSozBHu3SHoArg3eKsoGrV",
  "key12": "5uj5nH4gm3bbACxxmNsBG3vhqYdbARhS5j2P4UPM7NvyN7gZMCZ33QtgDmNQap398RfWne3V8rQgVZquJYFzrode",
  "key13": "nSupBZQHYfqNEtxKxvqX9C3trcTjzKpuToKBfDoHQAyieL3nP8rYtTzVwHYE2f3HGVMLYHpxkBkv5Krczd2TgKh",
  "key14": "5zKEQW5a2VLhAYAxrtCc9VGPcUC8UGCV2tcu7UraQqByZQ9wtAzURbUtP3ACBcstQ4Dh88TzZ2fdXbZcv8NaApCq",
  "key15": "5cvTLxBXdPmQGvwRgnEXsECbpFZTXqMBsqGgW43XSFqojeWbHBSNaVoWS7fkp1hvMvjAfMNttquavYMr4sqBwNWB",
  "key16": "65q53eUGFu9HKTdgqXmuWAUL7kTZ6KiYJrZvgTfhv6cXDaNChu4HGttWR3TcCRiXn1GXwtPdNHR5FL5oqVke3zXt",
  "key17": "2KxEgN7zBzwAtx8VoT1V4YpyrUFbAX5XJjEm1bVbiqFRZ56iXVhVfHLdgR4r26PFSiCo1vqZeFem8dwqDcRG1QpN",
  "key18": "33snRfxezfNLq5P6xL63mQtmEJR5AKKsHKJ2iksoyugtMPwCEyhdHFhHTCD1ctyxh27MbGr5CVXRoJbYwbrJrw8F",
  "key19": "3g1q1pfdQu2ZRAr3E6r3TLyr7yuMUPmKH8tnJiK4RzcVQwQ5UHPdk8pmCHJjD13S6Lv19JJpeuUWWXP3WitGjH8X",
  "key20": "4mG8NRQnTwR8Xkp6PXwR2dJgmUF5LxJrrJQdjeMt9AoL8iQu1FDiHWwVEAT5hqnZM9xuhAeeeyxajkW75bih5UVV",
  "key21": "2xFbwfRsGuLGNwfiWyJvtmguNBPtEKwGvnTCyYa7xvHvWfNvunCseSG6vKbEou6YNLBgjy51oRFAg2GMmAVwQsvS",
  "key22": "zZhmsA8vKaQ5Y29JFR9mmZKBGp7rcseZZvLZd8tzzh5kFWLmML2iWRtz6QSHh5h1LUx59CPM2gbfc7V4QvXJQ62",
  "key23": "3gFDYP3pGCWtB1Xj2ZKHV36y8iJquJXvwx9M13cecWfMHAbDhbkqVUGvREhjHSyvrv8fDBVaDSKjxYyFoRkquSWX",
  "key24": "3FE7128CsVXwRNWvyskBiXkcsp43cvfzHuTHYBVjNnh8Sw46H8NR3E8Uwa2vVTjr8xhwnMVJJax7EdtHdU7qftTn",
  "key25": "gMJgjFjt86ZTV9m8oTZWEyFzME4oVGSB7F83NZvtzhWXFwnHM5iNxPUZqaXSQPYcgshcQTYeYNn4QA8Y4rHVkY4",
  "key26": "37hnHsKa9FuXKg4uso8SdN81ao8p23q1di8maAWGjYYwPE7gmMACfSdFkkyQ7D2yQJ4iZoAnDuwVGgZdagoSu4o1",
  "key27": "5AXZ65FpiDDP18zA4BhVALTg3DRyesPTLDmgoZAAUnuYzbTFXd68QR42KRM1tJQErsbH5AFPBTojMwhRwpjjhA6o",
  "key28": "4fhtPxwVLAkBN82jETouqsce1Lgh76fAZkhZbafFeHCYgN5ErxTxnmkvTakjStCeX4n8bAxkZH7QAMwJoe5EGPiy"
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
