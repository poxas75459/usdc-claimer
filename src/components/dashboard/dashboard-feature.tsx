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
    "4wvPs9AxXpBQ8dkf4bk9oMiQ9qK88WeXQxK1RQmb99BTDtjgrHNxbv8yAktGj3tpTPW3thPvQ5miMEWQ4S7PrvKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSfyq9mev6CdRnzmoDgHEs3iswpPsXHYWCsR9RY4fz46WtvEFdZshDPXMrjvfBPbHWfrPzqHWwjL7vzBYTd9zFV",
  "key1": "5KyurXPAXcQBKj48hYgyantSEXfbAAxTjbZhsQt6F1ETCHzBAziRHZeZ7BUFw76WYSYvijpSZzbGocXrU5e1QRtE",
  "key2": "216JBRXZbbUPo7pTEUwVh18uAJNYtc9M8MVTGFFLbhc7LpMYo5DSUdoUGMh5qdsDHpmJd1b9LCLCK7jX1itjLR2q",
  "key3": "3QvLusdWweEMSae2qr6svCkRc5oTUrSYha7b1TD3jZtEW2FiJhvbjtPKLKY6iyPoyufUWitwuveEY2b6AsU1zWYL",
  "key4": "1poxL9aUzAMS7UbT9CBrxqBhC91wiMNzhRmP8kF7GDPpmC6hD8vskjtXvDtTdghhuDkQ6nrUKHYvM564BdHdwVR",
  "key5": "eUgNGYsMVjiou2BQzX2YpL3fDyTq8FXVUWUvg7pMMN9eNbBAnxQf8FvdakAwZWtVQwqnNxpFMyiJDuBRtxk43TB",
  "key6": "3NGWpUqfChWYiLM7vD3t5HgKXP7ZSnL6pTpksGYVPzgWyLXrAfw79zqcFXe9WJCwGfx8PF1DtDuGTpZGrgpAwHqQ",
  "key7": "2eiGZFhYnkyVokfe1nYwr7kBeT9zbqi4hUewYMXEf8QuaCSKDef6fvKxeKgLT7kN69vFgCMJR84Qz3i4TVQbNAwk",
  "key8": "5SHCQ9F3swj8DCB8FBATCk9nn1jzwGGrFeP1FpAusfs6PnxUTr7LNV6my3igGMvQCZHa4x2br3rtpVR3fNdRnUAt",
  "key9": "5qwoSxbjkW8or6HdumUkBpfmga1Nk7ro4iJWDPzjffBUZJxxnpQfxc92Ke9GQ2UfyR2heCTv6TnYwY9WDm1nhdo5",
  "key10": "3Lxjov1otxemuSKkSKvfN25qxiKyZHAEitjg1TejUJtfM5mSifmQFhujCD6qZ7oPBtk5S2o28mg5WQRhD74257of",
  "key11": "3P2rWcXMXDg7aLgkXkS65rPG5XvRBQ8rafrVSyf5ANvSeqAmm8cHLa4JsC97uJGyHCf7h94KvJCqKesQ1ncn7cxo",
  "key12": "MarT5spdTeMD1LsVtzUZsPk1mRrWLv7WQ9EFutZBWdSkEDdCvZcsrBiZ1trTFYyWjnhuEywParoBhbVwH7htwuB",
  "key13": "66eii6puDnbuNHBQpLLNymCBFk2F9Eq5GWBQB9ajypKYKejg7tybtQMgCqK9m47QUqDF1cfimP9DrHVgbXwndcDf",
  "key14": "35btekbQdJS7pwwDkzpoyTUnaiS72nsggb87sRAG7tRWu7G6fK37TxkLpCbM9qCqxAp1a2G9NboMdr2mTyqtpqAa",
  "key15": "66vzYPiiFQrVEPnc2PZZiZGUUVANFH8weH5ZZZM8EZYZVUDDNgr8hW5xZ3NeZHJ4K57XPjWYXj4zdZEgsawMtLFQ",
  "key16": "49mzwdyJZh7J7RDTprmvMvDwauTaUV35uazzvwEQaT6DEFLM7JMFYX8o7mHjZznfJBTyd91PGb44vUVrfq87BfyE",
  "key17": "3fCibTtz3ZE7sZtUcd6p85hyMQWBZn4ZhoRkxDkCNqxTv1TDT1GUjZZTqDx2hN76brxNAuyS4fAiXUJLBQLdS2eE",
  "key18": "62poD4qUBx3kxw3kNZ4ua2eGvG2qUdJGoVk1ZrZmTDsSd8CeuPSQ5ehFbtJshvXAEz6ZJpaCXSdBvRRrNZ1sEqAu",
  "key19": "5MRnwM6iMgDqcYm46WoSV9fmqSpKvqW3wJRi5KBVwGmTh5DMC4rxQEBBJAbgUi4DTMuGPtfp7hpp9T7R23Xf3gdX",
  "key20": "5zrz94z7YCMakRHCtk6Ejs5t85EdXrjMoFNUGMEGi2CTBEJMkrsZ2EvAQj7om7ymA1ED17r7K6iEXQTGrYRcWtB7",
  "key21": "5W5z38uVNmSBwhWxU2k75LFWzccryTNhwCuk6yubYVh9DUzFoh2hkjxu8BEYVMvUsjiHMg5nQrwLrcZ4jsmLPQjT",
  "key22": "wJe5KFSpQWbSzsnnRN8yVizjnMQCwctDHmSKScJ4Yf1CDYZM6A6YpAtbLUiTcL8fBhJGbs51tLkKXQDXr6y7F6f",
  "key23": "4AiGgwiDL3xobG7XxDLUFpuTLifLyvUGs3bUATdGEoZJ2Qi3z6PT9idQMZwWUYr3bJPdpybGVSpHVGSndnjRH9Qq",
  "key24": "3CJ3fzA1PtdLdfvZ4NqLa3PAzuwRabRhntTDWyZMJkRPat5YiHHQ8NrfxvdndzzRiwWau4pkUepwM13cAK827vqY",
  "key25": "4qC2coGyck8ZrFEafLHKTDWQu1x9DBKa9bP66csarD5Ys2uyx17th7nSderC1VMHZqWVbHGLdN7ghx9QCquymyTH",
  "key26": "5yTTsd83CS8c5hstoKHUZXmXh7eyuM5iSzEwRvAwceX3mZNnU9ZkJaNU1skYEax9wrjNxcmzQWzKZ7rHTqVxshgy",
  "key27": "5Xx1cwpBmdcZTw8Z5KvpiVQAp6cZ6C9urU2rb6TA6ewGmoTE9hbgNcZsxTsT2UDXimYeCYdhSGx2CRDAZheX3JZV",
  "key28": "3fUKTEShGMfLKzgBWsAS2AhXvN2wBDEGXeU4ZELwkwYB4BL8AFTHCqLXPuFE4nhgiN6ZdBzvEqErCUc6PhT3gGtj",
  "key29": "46tLWYavfVRMp1Hkb3tgwBXnsDqX9QxeSYdCWGcUySHf7MaUEGWa3VZHTvHyYf1xEsRH9qAKeEi6i9JSeZP8di2J",
  "key30": "zMREWEaLUHGkZ6j2jGHJfMUZJts1ya5CSvC5snCVojPzrdPySdo67VcVjj2qJHNeKT8DUi3RussmmgJ7MwD1aT6",
  "key31": "2vNu2WqAiL5wm6uhbXnHR2gDJ5jX8n6vcGtou1cSR65cwKm8CQU374aUiDhcwcETEjMBErrbL2dX2TaXGfJg3BYs",
  "key32": "m6EhDtyMncZ8RGWZXpRgRGn9FPxArHyyBYtJA1ew11ZaPstecTam3AcSBCw7Z4gNHqBgviutGwkBoBTrN1hG4zc",
  "key33": "XZnTJEpD2PMdGPYYPPuGAFga6Re7utpqBRKppHx5xWHR9EqpToTWiSu6a4JmSE8H2jbKLGaTeEMpLDQNWVTkkbF",
  "key34": "5oxzYVhKaRfrxXqh5rn7mhKAKwAweqnqz5wYLmkGN5Xej8q2qgnkQP9VP1msZmJUZuAqjCppiANuySM7ex3QGTPe",
  "key35": "5EB3pGLspVcdJPa9QThkeZrsYJrnXVi7JcTgHnJsTwAeHEbkN8CEPd3Rpy43Mjhq2gNdY6uNKAtd2dAyXhRJNRsz"
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
