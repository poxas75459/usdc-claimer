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
    "24Y93W9BJj9PqfdojvWc89TkKPtg4BBHvMzhXEUqCRvwL2fDikz9hRLRR12rkr1RL8KFsN5H8PZKZH2DW5kVUrvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVAhdttnKjfEBDXR4EnC6UoDJuqtkFyzaW5hkgJWf8QfQ2piEboS2gfNWQg4aCGBgGBJgFi814ZEMrGaJQUnAy4",
  "key1": "3LWV4UqczBBvy8EoAivV4NAwLtwjzCHbundaPt1vwpJvUtNjSqts1CBo7mPiS8wVPgFkWFumHTBJSYKp2mJcz3TS",
  "key2": "214ZkpuDmVM42ZyhkTMJpszZYJ4Nswm2acfbWpihjFhU5qeP4khgJw3tELr5A2R2cAkXg4NRw55FbQ6rGbQYd1ui",
  "key3": "5vC2CQgoi9WxvHA8AG6ygNL7pBqbBRebNfSBXKTbrRZsypSgHz1c2brYaU2t9U2hGwkbZTaG7aWQVvxnQS7KYxtk",
  "key4": "4KyVcRNd7uNADU7QkpaqU96Fu3ovSN2erpvgbNfcPKE6daCidN7xnoUyeEhuV7smP3bq6VWg7hgMGpjuBdpdJeUG",
  "key5": "HYCCRt6dDfR8KgguEG86EuX1Fuw4eT3iYvGfipE1M7gQNQmB76nQVScsDXVnDRv76e9SHaN8TGfw5AcVUBon6mD",
  "key6": "5DDm5fUtjXbGaaHpP9hB5No883MW7DvwTDKGaCreczeLMUYNC6uuTtQvgKtt3mwYUGY1vPoZwEKCWXTc2Eoz2Wv3",
  "key7": "41aQ2dDc1w2gnYPXi4Wc1mkccraUDibiGnePnTtVoGFzdtqQbDEyCxPEb8hwaNiWJ8VegqEu14eNtqRd146U6ph7",
  "key8": "jEegTd4GLvVKAcQQmfAYkDmQjmLuRXbjxDT4z8LiefJftD2kJhJtwGm2evRLcuwShKgRXhyipULyzTAJWP67kK7",
  "key9": "4n5bTGroceBA4sCsos5eYd2ND3kzmJMhkfozjZpZ2WfghtBLJzbgmN1JqK244WtAJRxKxgE1qM1x4QEcMB7ERQRR",
  "key10": "3WninT4bBM7qMdHYtUbxZ3NJX9SeZQHxJjvYFSuLyjU6kfgKS1yapQwBv8AdHv5GkdbbnevwhXyufZNpSf3knHvt",
  "key11": "8dsPPmvmEm1ZD6RAM8TyLiyMcoZuJ5vJPrhDmTacrK7xqawrnLg8RbkJ7DKyiTGLiPWPaJTfiQHdsE2UD8Eyvjp",
  "key12": "yZDn2N1TtMkCwvsAwWDB1BdpNnxD2dh88YjfhLNw6CdEgZn986tJGbKw9ydp8SRZzV6QyxCMedXcZn4HrXe3Fq3",
  "key13": "25vtJUqgQrWKPMJDynefPArSXXT99dFSECJjRgFo6gQxvrLEGqAHKw8afTTzgBMsNezVQkAcjnJBeod2XooRNFTX",
  "key14": "akJohHcYo1Ww4osqL5yyxTHDMKwBcLJ6tHR5M6cP4buG1emaMsGdmcuK1rDqUAAqcACKGGy5p48WKQ4eVdEJ3hd",
  "key15": "4Z6yNMEiSho6SNjnWu5TETj42wG6FzahH6b1rVLvojRdGRC9XeU4qNTwF8gBQbRed72UHnnkqf16tezMCzAV67jM",
  "key16": "4GjmemnQRQnBSJ3Ff7goFU6z8iCNjtSMumvQxYEBAoTxGopuoXWs78tExyiywPTr9Sk9sNyYdxBqjaQehKsgpa4f",
  "key17": "xNf2qRHgrprYZWGYcsDZqmvXDnVP5YVm8gFXjYwdbYM12maKh25Dt79dpkdLvF4ddGwMu4bkmzMordLTp63YcTR",
  "key18": "HeeQqfu7uADWyD9f95pDF5VTgjkLjTGEvi2NW99rXqYHaX3SWehBK1v9Htqd1HpjFeQ5472RUXShz7zjMZ15caT",
  "key19": "4ar4K6ErLwHV8dRggoB3fzFUepdfsK9YFvG8vTUYPMRN3uauHpHU5BtmsSgmvUv6hoKE3suzfAMdENUeegupbkBV",
  "key20": "5GKkBWAvv2uyqgC8mDx9NZn96Exvy3PnrYehSngMML6wAg7W9TB4JyBuPLaoXPwYu1Wvt3KdLoQ5b95VfdBn9Vdt",
  "key21": "4exTB2it4f2hN1bCzZ3YDdtZ2ywLu37vh6RbPSSeNL1RawenwgDs9Fe8iz8qiqp2JBtnjo7W8cSFvPYcPiZH5whm",
  "key22": "4JHhecCeVzhaa6QX3aMyHWumrSRJUq7MbGxbKTU1uHtsHZ5fftQWmXcptSmWsaWJx6PPZToy3gscKBXaqpNQBFFc",
  "key23": "28Him2R1LxCR8bBdtFqTt7XDgJ8USfooUFkPmgKVmYbAD5aFMg1h7MNSxmGVeie83QHvGXJHyLYvmenuWju2KDup",
  "key24": "3yfNqJtQQ3SHWLyd5U1m1Je2CsNPUqDuQw3E66pcF1v3dPcVW9LdWbPbcLziKC4SLKkfK2cgvS2pu3hXcNmUMbwW",
  "key25": "3cqhjQVpZG5wwKgQRA7vAzMcp3EKGRF9SVAgxXHGEvtRJ1jt1eUG9RBE5JJ5Uvriipgt8U58ryJNtQsCggB8xyZC",
  "key26": "4t5XbaP91BK4YvX3EDBTk4YuBy1r8bD8gSKXYhj9ngY4D7Znn7hzvJoZzVM6ogPbLMzcEEbP8fXrhJNn4LgeP9Pz",
  "key27": "27QadCbkviBsezpb84aW2sWSyKCh1m92iBVvUzYPCPZMK6s9A6cwrBZjv5rXFVpyrwoTsVUt8LbpiA5Q1rhoGFVm",
  "key28": "2v1SbsqxG9wNkuv4ksgca6f6rTqaRNqyN2RbGvFWtuxuZqpBoBvQMzKqTJhxDhpTgp5DCtSWQQmec1PNiTroriJH"
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
