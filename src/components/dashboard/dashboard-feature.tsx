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
    "2ZG1YCuGxnrin1uRfuAd38CjKBxyUq4PbdZvjjSgUHLKSHaCo2peBC6qTwT1tsY6jAD6LPxZZmPr7o3FhLNJuQaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1upfAgsGm341v2MD5qN1K1TQJ4whUSHLfqTgg1VkaiCHKfNLhKZ69CaMBZuQFez4o3sNs1xKDAKLF7McyVtbRG",
  "key1": "5UUUELkozUnYCnS1GYnN4hTCT4rLoy72Sg8jLUrxjSU4X3MFtYmYBgk72sQLQvGbZjJDZod1XnjCLnErVVphqewq",
  "key2": "4p93q2JExfiMor2jwPGtAEJy1WGqvMjHgK7TaC6TFH6wZTyvFsueTyrxyQdWW7LugXF3r3SKhSyYH2tu4Vk3XBUo",
  "key3": "A2uopFm6Fdo8iNPfNTouCvo2Ntn9rZ9a5WZtyCV2S53LzbcSUVMEiun8i8HutEXKeeuV4beLYti1yf8k3atPUiP",
  "key4": "4hjDfQiE6mvrj8SHj1GujAJq4ZVZ3RrwcyS1QoZvrGhVCfUcEzqCn8TYmaU7JfkVnj8Vko7VMZdxdjPEwbqF34a6",
  "key5": "4ezZjzNGwqkjHGPowuV8oChJVfnCa7fg6JXSWLKGawHFsgJpA3kh9qD7ut45RtmngoVfgC13zpFy4Cus8gGakgrP",
  "key6": "TnNhiuKjCNyPjuQmbGRNL9Nk7e6zWwwpFGZdbrbhYuourfW7Fnc9mPFB2oVPh8iSDeRm6fWUmxASSVBY9PXGgti",
  "key7": "4NWkY1XTBkZGZY8a6xhjtQtTK8XTwR8SNT63fyUsMysfXunCgsQoqJ5rWszeD9eQBqTu66WpKd4Q4AA22wHzd8im",
  "key8": "48SfPPNP8MqVyYufV7gk63FqjDj3EZppNB6GVUMwn51K9zBWx55YBGZiSdwJ4jkdptjcoHrxRo9xWtWsZY1paHpP",
  "key9": "QVDPjPYzfVqYhUd58eXkKQkLcHS2k6PW5rY11GjtGBdEdCXi9Lncbb1KDadD5WCvxTYY51xn9kirPZ7Yn8AHrpY",
  "key10": "3o8qusYLibrBCRxGL15RAGppFCgWubVBTa9r6EpvTvAyww21hFdKkRU3rdZskqcdrFDYZ8mKngbTnocsEfNijc9A",
  "key11": "3wHMjLut3qdzM4b6tfEEV7nD7behcGQyDcVuHbLmCw783EgS1S5kKSdS5YUaTUnbwakBLnr84BDHx6sy2LfUVig",
  "key12": "2aAyG9CymLvLwG9PPo2MTQwxBYWPwNSAKp2CMCS54WhN5qHb9LuHu1EmRz1kdtw4UCChSSPpNxT6bp9VXB8wnrzT",
  "key13": "42DRxTCKFjsHHPHoDcZkGtxgkVXzZfx2YYTWBVig4gftNJN71mLggcN7cWn56hu23hwCHkFhhCD1J7zr4eJvoDXh",
  "key14": "4wE2GCeiMCypweSpZLeDJFaYCzLi9GkUNkPgdjbZ7u3UQzuacjPWe7enMMRRQHwb8aFZw1S9FFf1156dfW4BhiVb",
  "key15": "5MT82ddX8bVLHjQRRTyGYESAF9ZRbpQTDDk3VRvhMTjufWJJ3WiWVMz8zhEErKySSazKMNodk5Va8QTfCPEsHiy2",
  "key16": "2BLNp6zvixrWnEZTkR9RCX11qgRLD58zxfYZt6hJ2aFicDecyXy6QtxpF3QYYC5juFwUjdAm3NN7gpc2Un4Cxcbj",
  "key17": "46pAbZwqGhY6Tuu3WwFnGj7pCN14qwQY1VZuiXLfyUZEqS94NcaPtkydb6oNd8dhC4Dgb5YWyKgGmiLd8FeTW2v4",
  "key18": "57ah35x5cioTHaseBheSZqWyXdEJrwEmbaCqo5ZYnn3SPePwfhdNBRcX9sVxeGj23DQWTBt2o3nHTAigCTeePT6n",
  "key19": "2MerBJkoN1sPtjWzxEqFW6SVF3p4MtxkFDWmVfjBGrsztuSL4uh9KZUpaEnGeS2A4ARpJSNq36eUNpncZ3vmjf8Y",
  "key20": "64EA8ujLTHkovgxYD3Zmf7w7xrS54RRvvQp9W4khmEMBwkgV9R4DsWBoyxN4xJ77y996tAwvKYSFYT7K45E6FAAs",
  "key21": "2MzsodCKE7a89rJw2wogFufn8cHFSJti1NuosGtuTAz6DLewurmEvToCmSH6XkXme5ve6EdGk8dWzLToMSNf9Rq",
  "key22": "2RcYGQQx5BW3Az5YfhN3UcM2Ne5Wukm1ZaGmtM2KCLk7wfcptmdzwL9qhZLGfnWN1riWawTm4yWb8W7ymhPPuBfz",
  "key23": "4oLxFMfWxKeFtQEpcVTqMMnBhPiGrj7wy6RqkEgLcvrb8ScHTfXir9qmjn5Arsh87iA9TqwTfgRxiybMG49mPTFA",
  "key24": "4y7jCBSQcvCpMPPxdp1Wg4D9b4soyjxNQMZuC3L5zEKnc6p2gNGjLHvcZECNn3Qdu48D1L4jTWzD88kgf7sGN4i1",
  "key25": "5gq1zs2W36sYxqLuLnjFdKFpLsoKuuyzTyhV77oLqVgca2ki9aNNxmZinGyGyu9NnPnD7jESfgPLjMskRupA4UaH",
  "key26": "7hzR2Sv4dYLrdZamxCsnuxQKN4c2pmXuS1kCTmoktArcLVYS6up35PkFQ5rn7xwbmR8GziQK3f9nehNKx8JVG25",
  "key27": "QiABoVx5nvq9BoZowAZ8mRRtnu6TvGSisHinHm8N8GFFbibAQx9UGQfoQDUZ5H3iwg1LX6LckEPwbDuLyYJooh5",
  "key28": "26mpTHVkFjN5NfuiFzeWEMF9cbxxM1BW1hFXhgJgceeaYAdC53HSzMFu56pUdmHxwTJjpkYfScikfD3XcFDCaWki",
  "key29": "3pcdZGsmcJR3oi3W2tp1EbSccBABfuvgNKkJtR3sy5iNs9rENin3wfUKwDTjoWDVqkqoCJYEmLMHsyU6onzaUNV5",
  "key30": "2rpZLcWN914jSt6HH56U5ZMkzAGdJDCS9wh741k5vzLFhbLVnZJxrCYRktCefeNUWd76GMirWqz1wcZZUYNBktin",
  "key31": "3fF1idSgKFaXexcQVdWF6kBD2jNikctvKZa6jTnshEDcw8uokZFdEiQxK2aopYfE7hGv2QkkpDQ2LffsDgQvF8Jv"
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
