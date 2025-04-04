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
    "34kKV2Pjh1eGTUwiHGHZKSGecS6V61V7mFbsmxePg9dtszF5kEDpXMPqNmB5BtrA3cqKuy4U4AmR2gxrQzvttWFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuK5jNsUjtW7wBnD35sPBWBRXhQzehWUaU8YnJR9KhQTdEsNDHJXfNxruJqjX5hJ9ufpDd5QoS7V7nyeyXUgJke",
  "key1": "66A7DVtuk4ixwxpcvFncHVD6Ra83JNEV5SgJEmVQZ2Bc3Jy5bWTt9igwu9iMXGMLYcq3zJx4xjXjaZwWPj3BGd2T",
  "key2": "QSUbQboFMM3ZTdVynWsqznMBNfCJd5B4FFZgth4YHVi9i4WeYCeQHCZzgxKP1JDBFtrhTZoS9T6hUJQj5W3MZL9",
  "key3": "65s6rFXfKUfkK2RxZJyy9TLQAGktRXtiK74Ax3X21WgY2oGujxE5ouoUoqKALsFq3zqB49P4ZVJMSx6SzXu1otDi",
  "key4": "52pqv9xPB3b3hgrjZKbr2AYRQhSKEYf4kqZkHEZg2gx6LfUfWnDGatm9myfaHJtjb2uhM4SvFYPPuXRxkwvyKuWt",
  "key5": "aEVY4QHHyiY6Y7AcxGQBTU6Zyp8orzn5BN9jbYDLg5HSynkYveE4zfVfuDfZ3ZQrZ4ZsEZh73wwQp6SecNKKKgk",
  "key6": "4ArEqu8eyHNGEDidZxNYrqZKueJ6LpxNRiQ8Kt8Mfv2b73zdijmPsKpS9GzJZLJVccwHDMiFEn8sBtHvAdcmiasF",
  "key7": "3u8wmnJnKysyZP4tSeHaJXPpdDbWnDXdzfQRzuPdqM5xq8ib6ZHGksmubiiDp9BQ4WZp5phxmynjJeLiYeXqJcpP",
  "key8": "o6SJ7iUoHF2MyDwyhhe9Knc4M4a4gZwxAYgz4ksX1uyTgjmGFVF5x5yZUaaW8oh4JdaLG5ekjy8Wt3h8APNqFn8",
  "key9": "254QRZfBJgnZUtSt8Dy73siwfjnXcTQVLuq3ZKG4sCz6y1noCzYMjeBNEiyoY8sJ46QBaZYXeZGUBBiSBnxB1jBE",
  "key10": "3tzYsKNvuAVY8dx78jS1RnN1dqarPyjctCNiWzwS982NtVu2CMyD3R4hcV5ywZDqGbov3busFoJiDrWon8Gbr89t",
  "key11": "2JgyfpXr2XiFfw2TWxbqkm217CEnouKCnkDXLc7kuS2ZEeKfSkvJXg63naAPLvZ6aJL8m1sYVKjRAx67AKD7eQMv",
  "key12": "xRwasxWNuomq3NUQCx2Mvdit4XQSEeemmUZjbxiARhNvpcp1t27y3bZCojsvae3oSBk1ppj4NpabSSNKvSsChWu",
  "key13": "nooibT4FyjuSuaoGZBbw5WdVLituTB4SLb4ESNby8QVwXH5jRSXeLD2F1Ruw4jqLgShNw9qB1qJhqFQ928NpEMa",
  "key14": "npvaPnT4akCch8QP7y24ESGbBfGTZpQoN2nMSwPTzKapNhHYgWDugXycM5skXPsfDiqE8QRFSvUEJ4ZV6d3qDsE",
  "key15": "2pfUh5QRXCxNgyNbxYYuP8o5N7GyUbLh2ut2aL9d2xHFhQMdgWtTqTBA7kVLW1qH4x2572bpQJHTQhZBPUCRxqpv",
  "key16": "tC9np8yRivQgbad9HeAK3JrDH5HRbZEznTfaFxsDpXiZHWGsphXBVeDWh21B7oSz8QMx9aDohJGc2AMDEw3Xkxk",
  "key17": "3LWpU6EhS9VXTBvaGNLuVEjE5P97XHg83kmSmosNoWZuZ11v6QtS6nKeca7MVRbJPkzmmsQyz8yhEKWKX8656Zgk",
  "key18": "FPpPQ3Swy2ibRASA17JWWMGP71ZQ3Z5cZvQy53qLvdbVBnuQwznbezi5DfVCBxfye5DDopCfTG1jjnduXWWWWYk",
  "key19": "5j6M5btm7YgE74wfouXmPMv5PZjZBk57RZEuCkW7XSkH8Jo972YjuctQbjpYLK68dMAXypzo9JiqR6qnJzvQE3Bq",
  "key20": "41kbEUFDa4tebBWMEMCdqa7iHMNGJj99AxgDetT3p19yKhVt8oPM98Ui3MATLEXdWtfDH8N2qbHBiE9oBdLDVtEF",
  "key21": "2Twr5tJqksAodLSaSu7zTun2qrqhBnPZERWGV9yUB5PVUhvjiJMLb2XUU9SfeipDM89XCEo8avfNNWcdCaE3xPiY",
  "key22": "3BRxdzuCKnDqkM1hKMSf5A2FgX4gRDRQPLtTycWdBDenZAczrS5JHWmGgRjVmgj8juobeKqN8hfXo54jByZvWQ2j",
  "key23": "3cZBREWCvDRV1nY1hMTGC2RbqUEkAEqgssjJsAv2xuAHS3cJ3DnywABuX2h2roPWiAYpud9WZ7Hrqm8FusvmdoNp",
  "key24": "2Z8pgg2LYaz2P5XGpbZnXCrnFm8ESPKCQ51otjJ6AeC54tub6ijaTv8ZYJe4CJJ6PESkozaREYs1uk2KNiomjSn1",
  "key25": "2sn7oCbSNkWKGACk3PfAkXZroroF1CAmFyzGucQcC2jUPA58Bpdf35ALiq9mR4DVpotuHiCetH8QzCnogqqBMPsA",
  "key26": "2AhQ84zY4EmU5xZ6vjzzvf2iMgxKqJc7KycRBQCx3CKbp39YFWXwzY4KAD3xbygkiWcHZYoxy9hTvh4rJ2thfqcU",
  "key27": "5fjS6V4dTkG9HuRWq88geopm1tZZzfpvU5MZN4LjnEyaVnmKKP9App71v71h1HmLjExdRxk5krWogzBrsZaaZa3J",
  "key28": "5Br5jZKTMXeWdjVgrsQ6gTu9EGTKhxknKoeh1TJKHhQ8nr4bDpBFf2XLPeYcP9nAjp8iJg464ka2EtXDK9B5XmJ2",
  "key29": "5b2L52jx74BLA9U11LrGXMMfcmXrPAaDtA1xFTKbbGe1VbL9NfrwVe8fVbQweVaxX2wEDDLP9XbHGnFsHYb42PyU"
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
