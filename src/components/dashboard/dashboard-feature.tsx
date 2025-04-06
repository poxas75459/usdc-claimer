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
    "2JVqUbFCyuHAqbFARR5XnKVW1TwWQnYdEabtq2qhLKRb8WyGuLS2FcjEXZ5w6hxgB5Hh8f3Tdou5L9gBBwpiABCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7MTbo2DUWBFXacZa5mbfvUhhKASNScay85e9NQ4ER1tUEZcfx7A2XHLaF8qUbo5pMz8n8XvGdeyH7gQDkoEcpm",
  "key1": "mMCsYbftsrBT3vdm2pb9PgiVXswBjWiL9wGyd5vMTbNVePDdbczvwgkgFdLZ4WjtdE7dkRV1bdXHZ7HHLAFW37h",
  "key2": "36rszy4hHZrqeKGwLDufpDT8oh9ztX75KVzmfJT7ihPHhEpGZTfMrqE2jyDk6gt5foPMEN2RJ3HFf9hVQKGeNXBK",
  "key3": "2diF6gNMGhxSB3bqMZonbrd8FEWNLp5Ux6s9VFrewWpm7xCp72tHUNiZfqcY3tgasfQEjxeiT6UnXFdDhAefHTd2",
  "key4": "4T9Q72PX2R8Lot4kFxadE4K4RpiUxHbmpK8HA7b7waZhDGbdbJUfCuUdkr3ZoxgB2TebrYb7e1s3MgacedFPpxHT",
  "key5": "5YLKAkVEpJySc3peK7DCvPujueKpe8NQ1Bw8YsMtdRXqaydbVQjdUJ92CvWmXUZK7bsssUtwzH2nTv1hkBHRtK6f",
  "key6": "3BUdDXnviKp9rXtz3chVFiJxkkbY5pdkNLKFfsioVU5f5ZJe6WxVFXghtBFeS6DfkNUrkTUN4w78cAFBuz2LJXQv",
  "key7": "5esJqTnEfvhZ1V9UrZ5UfVZ78iKWitczqL3J2PiqTVfApbw8vipnpY3N5rRYmaRDFWQYiuTTq23VJqV1wmZCBGyG",
  "key8": "4ag7rwe8v7tp7BXsfmQK859sNYChTAvxhDzPYyRFhHAeiSJ15Ai8aK17r6eyLYBSzgptNRdRiohaA1UDRkveNDXd",
  "key9": "3L85JzDewf3hHrZhwCizbjUcsuDkHZB3vT14DbqjU1KKnchNtaWyuhgzu7rcDcycFuKi1occEgEB2EiYLMggCehY",
  "key10": "2w6a2WujFuzgpbugzSzKdB31TR7voDxTBdJNqeD6M3jDtZJE2aAZ2MNQH384x4QNzEt2EpqwrpCfiyRgMuyRzyBM",
  "key11": "3tKeFzxpfkQvrPVVYDMoT63rtKHjyLvLaf4S6AVMvBNAmnt6XDZoKcY91V1DUgL8yCoVEKpRxCRg9uVf7Tv7DC1w",
  "key12": "5LKE2KhjMktiRrz2VNi3XkqEoJuLjmdBg95rW7C93nBgWfzduTDyyzySy1HJ1Ap7JKCRUkLZVYm7hFyKnfuVZrDg",
  "key13": "3jn9eZrDNA7Hj1nFPt7vPsFoogK4VnDNvub87mDnC16uhm1S1vdMkiKCPBBdcgqaDmrHhXBC87YAQ9w6Y9SppVoj",
  "key14": "5EkBLiZEpvTgDjk94cd5xY5EozFa2aaE6Eewzg8DTWAuue3Cm4TeptyXrgoHGBqDk7LU8PnnDmt9Uhpm441k6jbM",
  "key15": "3XSR84MsmaFAJCc9NYY86wFXTjtR9Fxkv1GVLxfJWTVTnstiRC1UmTCmmeaisvg2YTe4axkmL7G8hjBVVdi3Jsbn",
  "key16": "4DHysffmvj44XFkAJiKFHsbM7G7qzZPYC87ENsuCLTdxmkLsTsr4fRtZMQSWMVPDZBzaVCei3W8D19ZQB2gNMxAf",
  "key17": "5Q2GJRhiVogC8kCL7Z1x54vBeTosF29cNRoem5jVNmAdJZo7HQUKfMujMynYVNafNnv4vNj8GrhRxK7FqYQWSqJE",
  "key18": "hQKHuP1G8HcvQEfgRxJwCKCfZSRwkTX6H6w5q8WJBdeNYkUofy2nh6M2gdNvxrVGJwqwTXnWf2cPCTJgy6vkHvg",
  "key19": "4hzXsCAFxtenezvN8rmd2jzAC1KQJ3Lxa3quoyV4aDpxvmz9wdWVrCptRooE46qKyZcAL1xgokMi2KnuEyKDkV7C",
  "key20": "62x16hcVqnxFR7kKG1DfXf54DQoTcHUKFQZvpDvHNs2qPZx7WPtS2wmy6JikgidMZXx8JaoaZoxatD1YwL1vrpbf",
  "key21": "5qrSAmK6FFiFJy3rGFk5sVGj1cKqRrum98H1f1P1EukqtFhhFBsm1DCLfNaDZzZ1be1t3Cs5w2yrwTF21NE15HDi",
  "key22": "e7H2dXaLYYmN8dYceYitbbBDdxKp9rd8e6Z6KiNaCPZdXohRntmxASH5SeGXrWgFXbvadJU4PNPa8UEB6SKJdjR",
  "key23": "3pYjMkTXe3EoWiGpRJjmT7A7myuMitt7nmZxB3QnuemzvNWTT2RjD3FQSC5GxtrqcR1CAyUpAN9up5omB99jEuMn",
  "key24": "2YXL3sChyzRSWUia7zxxBoMwnouRSygcPRJ6p76YGicXvbAfCbDZTZciqUL8TJNkex8WDsAVb5fqN4qKMCQt97jG",
  "key25": "421pHBzHNPQTjAGbDoupfTkCbbsPseQS7Fh3KYSvUeUp7rVtEb6nLiBs18L9UCNJ1gLQSPZGeAMD3qMyK364kskv",
  "key26": "3j9NQNCDtR3WXPxsX1Hwe1jT7CcxBZCDSUEKJEGfgBHDD1stGkyuYP19Etu4hmNtjRDJJ2r5ZKAx7xrZpYvKnC1J",
  "key27": "3TJXfHch5KC4uMxgDiMGsMRFzAjYuEjxmUnMWGiw1GtCw6KZoCgtVdK2f2iCw1UfLZX2aBUS88um2acRjYj7LzyZ"
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
