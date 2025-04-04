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
    "2KnrF5esQeJZ4PF5hi6GbA4iFdMtcYm2gAQtVBpXYPKcEJbasyXhcKx8raoKEPZBF4Qwv78SP1K4g9MhhG8kSTsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38B9rS43viEQN5xX6YomrnBxVfxFPk1LveKe7uUvufQjA7QTSnBDj5DaRn3mdgFSfEG87X9DJS8TyrAiZMnmxr8T",
  "key1": "48Ft3TAPzzT9mENManvdgHRfUhtUfAXAkwErm98SGJndAcWH46nzgFakEyKEoZqavqeNrkdQKaHFgNLrPfXs4Z4s",
  "key2": "5hPWRgBaawPstDdo2EhebbxVX2VY8CqgL3fpgGUDsoF2CPYbms8uzPt8T2zFpdMhJteQeCmYM1Zz2w5qZu5tJ1MR",
  "key3": "rRQ4C2WTT5f7MZvJuutdvcGs4Gaet1n5WTFx3NfScg2KGi93aDdmzPfV5efX9c7TJDfjz1UBrJ38UpPX6DgwSDY",
  "key4": "5DfpVeEKHpGvcQK3W6ZXK6UjVDE3zztezUjmifisFSsq1RveyE43qbfHDbcpLQ1sLWqP56Ep2YDmppeoZ7GJWngs",
  "key5": "5itMnEZwubjZAhwhDuPQmGbYbtH1h2tCB2aXi9UohHZ8cEaayryoQnUBkXzXUb3v4inp6PpaR1xv9BBvJhcDM6vq",
  "key6": "34ARNvruJZ4W3aD3m3GncZ3RaZdoqNjqkXZN7VznH5A71qoQ5Www5Y6DmeaojNRY9ow1giXv51ZQkbKqi7SXJAnk",
  "key7": "k2ryiFygo18u1otR7BihTteUsLfy1MyaWxC3AQYpPDywWjFjaxiGTQ3RXXCboYeWd9eRygMoY8w8hbhH3MkLJKh",
  "key8": "6h6q57jSkSzwPz5SayvzMJPeRynrbjs7v3T9HgdMKTDr1NwUctgmVfKaAvrxyWWaVMqZ1dMwQiV3Pdxh1hGXKoU",
  "key9": "34cpgosYLTDuhzt6xPEgCC6k3zmXvZL1oqHTX46Kuv11B77u6UCMBodhaWjCyAJ37oeKLtAiLdCVsRjkMDuzX7w6",
  "key10": "Fqo8SM6x28nyDWbd3YktTaopN9ecesimLkJxPrQESR7moaodUDvLdUgCZddAQugt2SrnLaiKvfrrtUmpQSpwD8E",
  "key11": "5nGEy95bK8dyBZhepP9JgUQSYRcTZnJ6bUNyg1D2R4zv4KKSZ8XPktM8RXikcPoENQJrz86UVRMZs84KSDRTWQKz",
  "key12": "3554vaNmqqP9jPBd2shmw5QorcvfgiQsbqoFqaot1Fy5gdSJzcCaEoG9GCXsaVfECjPnr4v87ExwXZjzWkEhfxcN",
  "key13": "42GUEVKQHxhi35kpunR95vpqNpTWW5MKXpCbEoywzCZ3aVkS9fvYa1B23GbGd3yp4JRiGqXaeYE9B1A4GDeW7RDa",
  "key14": "Ks5B6o8YS98xSjNFUM3NvaJhgCwhPeFvzzKCAf8fQ3FRoAq64uiR7wZHDyU779NYQdHsHT4B5zXm7Yg6MBKKSEo",
  "key15": "56r9kvLyLJqYpfeRKseFvnD5HMpdwbJe3nJTyu1mt7wxpdRRgcVwymP46XXYyEfez6DiuYBNttkUtVPAdhtXP4QZ",
  "key16": "3F2RUguiDxWh5DqQT7d7nCYQU7eFLTgLvHV2sPxFLfycpyuWNgzH8ydwjez445bZiboPaUzkbcZ9cmXZHz9SxBhh",
  "key17": "jZZz6uTBSoQSHhsfJmTawSdV39ZSShtTJn5MoGgCYRB9nnH5C7sRscxxa5RgLL6YF1TG3obcHDre84sebTmsw3Q",
  "key18": "596pZYRSAvQYwfPy78qU5uJMVz92mk8P6vE8zFxxDW5cYfYXMuThpjj1ZTfBHiK6kdjB6c4wyRKzo7nntEfPmR1Y",
  "key19": "5A4VrFuZ8GPGY7ojzwWfYFRi3Vc4F4ZHrkxmM4DiCYB2YJKSuFYsFtRehE6S6QAdsBocfkXGBzpz8Jd4o7QBEag1",
  "key20": "5twHKHdCFAYKmxb672qSSajUUoPJsVpT8sfbekWvEBrEkke56aZx9P4WMWiUi8ue3eqhqnzUxEU1t26oZkrgSxxC",
  "key21": "4duYeWNPH9XRAEwFQ1NePzXWUcmSzZ17utY3Yw4WuQEwqYWir8Deekg2rcxKQrqFJ8oD8ZGCZptSznF4C12VKWQ5",
  "key22": "FaAnPg8hbEM3GMei1WfXo12vfdXvXLkrtWfgiunEoNcZx4Yq95zPPAziDMmEfyQVtC2tERa9ZmyJDje6V1yPR55",
  "key23": "4q8ozmdA1FDXqymirAiEr4cZ4EYnQtBYL2WJpbvds25EBJRSbSuo4eByxb7JFfVsmxGKu2R6wK5se3DnJJ3rDctY",
  "key24": "4xxVztAnCwudjRtZ9MqtFL3JYHy1meW79Y35e7uD9zw7su5GNuuVuMkB45AeM81A2A4zsH9yuJKRBKKiM5rha5be",
  "key25": "4EEyxhD3orSyy8X1DLphrQbqjgyhiMePP6MjzzAHVghBbpBV4ovJUSq29KLTMdjXbW8WfEmc38pgc9EKiTZJ2v6S",
  "key26": "ioDrN7TtUBRwdjoTXXWrcAxFeDXiVg1Y3rtRhJBXuLeWpHAuoQPJH18kcCqg2wEoaxAUT7HLna6iaN1oA7ukqgL",
  "key27": "67bcenpRmJZiBwF5Jiqxv9aAskzwwDCjQ7LbMi24pFp7Ft1QRKts9DTGCtFvumHoZf5MSVC8zfWqFaor825o5p2G",
  "key28": "5cJbZ8HDQrVsuUfE8ZvLFULrduEB9UAe53n9fwdMF8XY4ExnvngSnnaZgnHZLKX31x2WVbZKNVSWxSV8HW8pbr2A",
  "key29": "2J4PPvC7s55QG8KxEJCf6yxMMRDXtnxtoMTjeTRxQRRVYkDfRaWn1j6qDtRJduyyKpEksaihzWKVAWGWKnFQqQd4",
  "key30": "fg65d6R8HxtgxZ5gTLsjejkQBV5ahBCBJP9mZecrz5wNe4pDKTFjewbJMYYLVxkXT51msqssTG9a9mvtpKhqoMr",
  "key31": "4xCxTp7zz2uuzAHSHe4b71C7JeCPGDrCVxcVao8UnkRQ2Ws541bLNj4zY6Fuxvow36msQP5TGerdoqXq4p9MJMd2"
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
