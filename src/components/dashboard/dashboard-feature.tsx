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
    "5FxiSBT84GZMXwrJXx6iw38aXtnMi73KMoV2xQsepawbHeMSE7t2vAyezsxHg4NENGw1p4nCn28LbwLZkiUpDFvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJytd1zH2ZzDcWHeBTfkMFnis3wHVrcNing1JCG29d9yddRTe8EXqB5LCNuPBST2rnePZPZM24metHorFc7eFYi",
  "key1": "Jr4aLfTBLbVXj1uNbCEKKpnP3CgDZgnbZcfmgx7ujWKpADrpEj8zFNFsATBkZUCwA1jnytCtEnwTN8bJeNC1DsW",
  "key2": "2m9FKbcpbC5Cbs2e9tXYKRXRTvygHSAWiN2xwuYkTbqcSgwSq7abYgzaUY3ouU82Gc87V2vNHHbA16m8Zix6hpiX",
  "key3": "5zxeyfpWgafqM9WxAMQKjJpn18v3rdTStFjzghAD1zrtAWZ2fmYZA887M1ZaAvNwyijHTxhShVaD12xbp2fA9PA4",
  "key4": "4CHYSp6TtYYKyDwBwSN6fbofr25VPiQzBjz7nK27HgH3dNAyxtcpoLVHRAua4iGH1XQLebGh9wTLrxhDDATh2QLi",
  "key5": "3jfB6NwuBZsRS3HxZgbo8ZTmPpHbTzt8oXwTNXHHTkjM9FFTZQT3yxRV8trSfBosgfASoitPB3Mq9rzZ7cgt7xpZ",
  "key6": "2gfVaksk4zeVdW49GNmma3kjToZBEiBbN2x9QUDa6gpiyVdzzu9C8eARe1aKjkDu9c785wEpxqt7iVYzseSpsinW",
  "key7": "xvntnRW7gsYheypwn9JUUYtYVqCUVSSpUSDzndSjE6TxUi8jnqogyx9879RoDBcv9Lcmk68zvS9Wrgms9v37p9y",
  "key8": "4t5ecJzHLEj5F8rEP9wbzw4Wjii4ZpDUFdAg8QZGxbk5MmYN3QmMxXC7Jrs7BdhRX1uWSTxu2mhy4wSVNBj8zJud",
  "key9": "2ZPS7Bhbfmi5wWTySYEyfvAnvZuZn3sBBv6EraZf5Sx8MAn3u7nAVsJqYqKsQibZpUpBcABXBMeTSffe9jEE95CK",
  "key10": "3HCwtRfwMZE58W7DwqErvYcRpHhuNqjFqTfYdx5vEm2hFTRxSMZRKshAFm7iqBWQpgMQxKFF4QYMjguea8mmB5gS",
  "key11": "64FXgwcgunr3hCUkN4E8kbWvhAnsrUbZ44yCNY4QxznefEMw4omKYucaQztekUiX3iHzFs2EPPRCfqphArFSLeXS",
  "key12": "4gAWyTUyoSKSTd3SFhpHyR5Q3AFK6yPukqoRbxmpBdDV7RpFhdav6Z9t7auTCkott9iZLLH2vpnsBczd5zeHKkiM",
  "key13": "25qgDwakH6BfqzfSUuwhmoQX5gBe9qyVafyTEmp21MetiHo3Mt5HeX4MfBj5BJYgSTKh7KfSYud11iAVcpokk5kK",
  "key14": "33wUXtrpRRmLReQVbKdxNR6ceqBJMDFNrH4nff72qCfSnHELTSY4vsbvUD1DPk4vk9RkYPDhQW8xy8AEjyeUUDZ",
  "key15": "2mzhi2j4iPREBD7f3iqbWYjvXti2Ht6Bikbv235eZ3x3ZxrZ9YcLCb72dYmhrCyEjQ5JReigpSgrCJAxhmUfaM1E",
  "key16": "2bjwHdLx4JMdMU41VRqNxKNHcHgLnfgWuKKdikiTHGExzBLCxzWKjxtN2B2676NGSeXz2sFsFKas5FSXmd77rzf2",
  "key17": "2n5iQ7TC4pzyUmwGe5odHZxhJ9GNrZjW7U6qevPYYPrKvjALUWFovyVwpmWMNyav7fAwtVs9TCUfwscFFfiykHJF",
  "key18": "4vVB4ZQuC3kF1mpgckdL5aY7kk5FA9Zsi7pk3SyrWW15kxEtSKHEbZVsf639TBoPrtz5mL2NTXgxnTRPShHXwwiG",
  "key19": "4PqUeKaxh9G9hzsYxrLY6nmdCXU3vo9hcdLrqFJGX3C4we97bVghQKSmtHDFUqks8XKE323yS5MksFNGg6Ja72tm",
  "key20": "3UQgEQgb2DAPzBYuQvdxuooBmpYNCWzwsM5L39nP2Mo1LuY51kSxhurCscA7zSErRoX459z7VmbkjhQSrBgaLs2f",
  "key21": "2rYMqZWy2fxN6hsDYicS9pagQ8fVdmtgxb4FrEt88xVSWHwfCVB4mSsH44THHxKtozHchxbaARaG8ug5msurcrVr",
  "key22": "8dKBxEUs5LiXpQB9h3AXe33ayu6qhijtNuT2pYgUYeGMH3zVtGbeGw87Zw4ZpAdZNtBDBgNm6RS4Su24uSxJ9x6",
  "key23": "49iv5LTLvtE52yUFDku2894ng1We3UqkffRnpXbFTPfRhKjosTkJwEo5wriLt257ii5firn28NFtaBYz9Hsh6wS8",
  "key24": "5zuM8k9GrnnufhMKG5ouADZqukcaFoJVwTUoMVqsxZHLrEfDpR9L6fGzEhjMHJWV3iAmiirsKUc17QcCBqQPktcp",
  "key25": "5tD6sckMtWL8kYT7xSnVikE63gAQCsdkS3KPq6DG7BTgbjDJVxvNWcYwow9431HmXvpiVMq4iTQpFLPAiDP2Pcg3",
  "key26": "4TxY5Z2XeSRFNzK4WRYQ6eL8Mt4cznksJNsdjgpW9GLr3tq8g6ixS5c2k1TbbX2XxxU4irJ9qWKBNJy3VjkHiScz",
  "key27": "4FzPAvQBe9Zf5y2e1m6pcHgsGEnTn1SxXtRQQWh23m8PLFtHFifJ4TaaJabToiUjKZi81RWYzFdQHTYwkwaw8xug",
  "key28": "TVVTQfCGUroJhckvLNi4W78cqYAa3y8EyEwhf9MV2jwSarTF5tTzUEVTJnAVvK9APMSjrgSW6Bc4Yo9AcHtwwEz",
  "key29": "QjFkxLCcjKmAsZkkeQ2H8Nxtwvkht97LcrL2s4pqY1fZ79eMYYLEhLSNsRrsnNdkXzZAPPZNhsh3McNzppQzVLv",
  "key30": "3eWpZTR56CRhiM3dqBVXbGPTjHBEtDr7MsEfrydPcG3G7EcPUhFjFYuugNg2y1f16avFiD11ytZDaM6uJzf43qEs",
  "key31": "59xaZUbJQAv8WM4ZjaWPQfd7vYKUyCN7BQoRFY425K33QzSqEvocWbon8X4YopnqnioZENLD2HRmeSnLMeL1acPu",
  "key32": "2K4A25KQcLzH7vKoQjP6RyL81sEkns1neNkENKenzvJj8pPYMECj2kjjf8E3LP67T6i9U9whM5q1uacaXC6q3wy4",
  "key33": "3RspmNP9633KRFtjm2mUecrcWuE3RzxSb9RuX7uosDbeFyscq23r4i4AcG12tygsuEYaT7pW5vbhaBsc2sKiXPsf",
  "key34": "G6FkjCogq89u9ZSPVXbkqA3DmbzRFB2Hw2M2CHVtaWMno5XuPYfqZuFdVEuHWtkiA7styYjwcNUhuTRsnrbkz4P"
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
