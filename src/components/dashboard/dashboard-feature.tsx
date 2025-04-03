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
    "4SCejQHpK8MTPT2dSYGhdyf2LWS5JFYjJrqpRT2bYqUdd2SDzAtBvSLGgk2oknuaXQ8e8EmVJxHntV7a9VALMiVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v9oMkN7z1s2YWTaEo5eUMqJL3sX8egHLD8QLEdYQ3w8yxGJ2jBupE5VXgXhEQ1ioEkUJsdypoHgcG1ePNDFX98J",
  "key1": "3HhkwnHtKPTfwugEkGU7oxZ8X6S3AE5ocMxF27PHh2F2ZPrXS3tvKZoiG6dFqxUdpj983QgWnay2wiZuUZLQLTPs",
  "key2": "3nS3xBN1ymNkKZDj3Uc3Uo1w7qA1E2Dm1K459yBecetGBWoxpaUMngQEmw3X3ou5SFF19i2yaNsLoxErxsKvbExf",
  "key3": "2SFBQ1BSe1SKCZ4v9yjpmL5Swgpa7RF8jNghkBKKDMWput2oK4qyoraQz4XpANGLqjKNUPyFVmKWNHdNBuSk2eLS",
  "key4": "nsUELnbLkbMtg3W3JXszGEiv8e3phXgTJ6zHzHX6Q9cRQX1ZybEvSA6n4WiVqpGL33Y7LpSN8cSZbBreYJxKu8C",
  "key5": "2EMZzG2dCfLxHULb9ZsLms82VVsMwyu8QNycjNAzM4WZW6QaGwtfW9HztUh1duPrADKNrJgobCpAQoxKdCpUgNF5",
  "key6": "5yaV1Mk1Ycw5Jmwe4PsbyHFc699MxjRRjCdaL1qEM9MhE1qgHoKxgPgqXSBHbM8MBeFfKZv53ADaJnTrFkxPKzaZ",
  "key7": "5KKK6K8Yk5MM8zzDBcqLxUc1aXar5XJ9dScfRLD2NUZpSD1zjKoXQkgyaHbeMCSsxsyBFjoMWGu9BKa8PZGibvrT",
  "key8": "nCCnaQg3hcxq1ZjTEaNu5rMHg48kGDkN2yybkPGwqEdHnygpELscipD9kLo1cXFnjfWgQ9mcX5o4DCBNUvTjLBy",
  "key9": "BEaU6sfukxckXhfyQgCAXvbmRs6EHhc8SdSJCxR8fEX35RrDjVccPkRwMMEwsYkzHrPBz2vXd8cLdFPygqYiFcw",
  "key10": "3zbrwKPWfcmVTm7xjjZ6p29Eqtz6MhQWWiwfQ9iZX7oYpu466QZLzqMjoxcvKuoW4cvTyQ9oTCghrCkKKjchABHS",
  "key11": "45TKaJKnkcnAFuTEkPD88FuTT4iTKo9CstJskv31CDPtsZ9zX4WE4TAjHukkQH5rZLoLMZceECVt7Zmh7Na7TcmN",
  "key12": "4L1HyiD3EJQNqALivcN3U2CydQSffD2vY4qrZCNGVjFTuj5sbs5EDzDeh8DaQ4cse2VzGFfG8uTx3JPAi5hhS7qj",
  "key13": "4KrARGRUYjmTsADvcXyuW9xsqY8XpMguiGVD7WMqRTm7tSrs9yR1K6sFiPUmsLWs7H4sXFriYWg4qeGv21bqxAUf",
  "key14": "3diwSS1rNXdx3894LxmKT52kMwSGnPrMKXD8ecXderrXogjdgSamQxJ916i19Pz7frjMddfAveM5BHUPgJh4Trhg",
  "key15": "K48ja3zXdSiPYk2AAiPWszq81URLf5Rf3nGipRqX9vwsdfu2a97UWBUSJt9Btt57BvkXM88LjnCuguWHG7p6WUj",
  "key16": "3NuszMjbQU8fnsY1Y5Sz8FZkov8SwMK8PkHZ4cNsRVbP4HtopptvgcLDJKsoeND9S8BqnwdPrpVCHd6QTmaFjnYS",
  "key17": "232uw4dffEZtJoJvBJa1BFcxgDqGEjtupMVnykMrEfmrQGguPnts8pbtAMBxWB9So8prrrjTHDmfwCEJ5gzRu89g",
  "key18": "tySwwSa2M84NucnAe6xULnQuwvrcG2iaJPggr9rWARzb8c5ErSRQEyhiW71JuC23Wen6RQkMk95tf9ZfKu49a5B",
  "key19": "4myAuyocdRyawcNxvEwVoDSxRQf9KwMAcxdAtqiVAYy14VuxxiYg9AXpBFeQhbyKqF1EH75EGSw4eEvzHqd6UsLt",
  "key20": "5CCBiE3oxZjVrQwwbRuSnvP4sK2FWAwXDya1Qi1kR8T3cnaL1f161mfhgMGoCdMHE2Ysk6R8uVnt4HrAaoZqJAcy",
  "key21": "5oo2w4cHA38QZd687im7jP1755PH1kYMbMYcUEsGFXz1AUhxeotF5DdQ6Szd5VDMF4NjRTThW99WVtpygDCqW759",
  "key22": "5xKTbaR7V22CYAEdT77mkWBB786zSArr2UMH7XsxXykYiwZfAaobdsSGkCdWbEgbosrMEtpfhFrT9D6AXP8DZccs",
  "key23": "3PAxgCw2ubMHSW8GApSpk5HJcQE6jNdbJzs5MWwGLu5yVW3BUi6kjucDZTj4ZHqwybHg7w96TuRga5ueiMdRRBUt",
  "key24": "57Er9sjhmf3WzzYcMsKavEZDTKmh4dYXpurGmv3QTBPM3biT2P5LCf3n8dXPic2feFAaC3yydQvxsHN6M43WtSSJ",
  "key25": "5iiXLd8M9xgX3oN1T79kskfLs7xTV5baxnrppNPuP96GRss2pa4msPMDFguYoaKyu1uqrxmZmgYfVKmRBfUHXBXN",
  "key26": "2r9JMaJLWq2nxXSsLHaNrNfMee5gEf2PFxMJtDiaKYK9vyj4LBK1Ymb8WmrGhbnvJN7sP65NWoQiUcUfLEz8N4ZT",
  "key27": "kd7JMKTXCtrFvzcseqquRSPNPE3TWHkjsBL7XaQdQf7f4zzCBxZHvBr4Bsu7zLfdNj57JpFTD4q17fCk6F6Rs8U",
  "key28": "4xGXwpZAQCXdBin9wWGSj5c31yVERaEwJh698cge65hqmYQdbfZNBRiv8fUyBtTMDA8DoGZZvjp8ZHSmVap8eJfm",
  "key29": "4vH12AHURrYqZX1VuGk6eLVpTih63Q2w7CcJBLL63EwHkR8pcu2WqJsNxSAPVMs6UU1V7af57ZCR9tAk69ZgdwaC",
  "key30": "25GKWhLg4vv53zCkQehEMQxHB5kNwFv2BRH2haJF11rYcjXvEbfx6SHFW296KsE8DsF3YAzgq1pos9Ce8abdtRp7",
  "key31": "66RNNbUEpJzoRZtBggtgQBm43wRf3BcTHHM7ARWT3qjggRoRMDPhDj9Y8M3WhWVn4o1yQro36px9nFHss8dkxwa5"
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
