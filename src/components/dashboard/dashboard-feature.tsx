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
    "5gEMzFqJ5VaCsZLBxhiHiuF19qaRG6NVM7rPRoJckZEmQ21rEAqaWZhkewMRbhi27YaV2mNaGTBzGf3qXeFJ2tZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqKZRxdpnEu6qAp8FQ5EEguhnpqVW4S6Evd1G1b516rMCh1XjBosx1tXTaExYup57Git3jpSoJKPqz7kAk3xmGe",
  "key1": "4xB6aLmPqzH7L9eHvEBBVH2yRbWbJtZNaUTmEHAuVGTQJbHMMWycuRyGYHAzvLFiK6fwS9PhFfyrFktXY2tHDawA",
  "key2": "5PJPZakXyfixU73hCt7vgJuoGfkojhfy58VFPKDd5Wf6bmKiuc6o6oeqidvTdSYxCVwYBc4WN98GhfeW5RRhEPKs",
  "key3": "ZAkoUzRbFbHpPyLUR6zb9uwgTpp5TJ14dWs9FA7TA268dviRogB9twYbyy9QKBqYH6DHuQ1vRbcVnaWU7fUkdHx",
  "key4": "4as1iYe5ikgr75ca64DZsHsFwEcePU9f6babpNpsPyw3V9wLjjPsZ3wxnmVioVy1dqNiZ6LThMpJqWt4UErp9XoT",
  "key5": "363Jiad2himsQMmQQaWXW92hLPMprSuJbAoAWoeYNVor4Ug6zTbBT8J6fjT2Rv8c7cjkJUKkXh9XFUExc6o8LQdG",
  "key6": "4yMFVZDmJewHK1ept21wBkuPD3g4hkVGCw2VWxxUVWhyGacCTTnvWUseDPTbGfyAf1HrmbgEmc4NSzYRF951obY1",
  "key7": "4ohD5uo3TSL2mhumymKda6CNn7JjAykphjgRds22c8Z4zD7DHCQS9xxATNeSChBn9tLpqJJuPMCMB1krweEuc4R7",
  "key8": "5fTvH5CCesfrV5Y7Mc2kBcPaTSGvzBECYM4EPvYKPHbXSSKWJQRKt5L6nuPSRZ2vHhaYmfy6hKgm4rcQ2XMQCUgM",
  "key9": "3ZLa8g3mXVDzCRNmhEsW6YVdhjj7mttTy6yfuhf8YQKvpTULetDvr8zM37bze7u3RKagM1At8vvMeUJFBWe8ZGMw",
  "key10": "5jD35455fQKGKMWV4KP96BVnpPETonx352X4LopQCdhUqY8LDQPidYaVUiicQPHjaBfnfS1cAgHgqtN23fYwR4h3",
  "key11": "4sbJiSsawEbpr4TBq5EV1a1U8g8bKVvJkY166GZPiXvkAJRkwKpQokSLV3q7usjVWzLNnSupquHwMzrr6mAuZmJ3",
  "key12": "R1PKihgEKbsCK17HPTVWCcw98R9ptwD7LZaeL7TPYWG1sge6wrnKtb895pUtewSxikue3JC8vTA1Bayjm738yuF",
  "key13": "33LqBgNfw1Sb2tb3uesm5EYrLYTwfesSViPiEJtQ5tUV7zZNHSaXqU7S9fSjuBU21JwxAhQbMhUk9uC2D4xvcVhu",
  "key14": "2bBgjS2hAmDynyQyNEpNAoKQEGdEfnXE1tUMJc7iKA8w2LDq4yMbMscN3WQvmvcxT8PBZrW9fmhSTNF7K8TDnywc",
  "key15": "3Hvnwi3bA28stfj3UJ4J6ATMKYSKoN4J5yEErkguRSYkaM6Mzje78GPg7hVjZyUah1rA6Xprc4TjJH9M97gtoWym",
  "key16": "eXoNSuiRmyNufrFyDiE7yDbLCGMFwX1k4kLvveeEYtS4WrCujAHfEXK6qwJF1sv3FiKiH1ocPT7aGdeRa5RGoeR",
  "key17": "8J4PH7JRZLGawUZ21jqnEHPM9gSzSqaajs316DRQj42codnh4HtvTiowjrLfYoyBpuwWHHqAawaHgNLFXrwk2G2",
  "key18": "35z3QBuKTunzkgHyoqnjadyaTxWpDFfvHpeiCduw9nzSmRsLnaVPdx6W13o9M2kTdF6PQKnZNaweiSC75nTG8ugv",
  "key19": "35MiV28c7WgiKyoVo1DhraL9FkntgZnytMF7n2oJLyFa3Qido2Zgn7BjvUzggAaRQ2DmaUHxTWNPUpfXLsNeGWq4",
  "key20": "5KEnmuewtceSHeJH4ZnW2Kjk8WkK3ExuhmjViuUiLveVSA8eCvvP9U2ydG14gWtnnFXP7babgL8WKHZ7LtKtvCdC",
  "key21": "2zag37X2Uz2gzYvwxBMibaoFWk4XcF32UYBjaL8SikwHk1JJfC9iUt91VtLm6E3QrmDdiWQH4XCEGJzgjYU6Yp24",
  "key22": "2droSs7ZhjPp7YvWGTksGQitcS81bbn5pawSrJJRDciwbHpCukb4f2fKiFUVGmnGDRzZm1GsorkHbyxvnkDTTPJ",
  "key23": "4TYdX8jC2Devr2ZwpAXmbUYCK8W6FcLpBaiN2SZGVPH1RW9abkxDq67Tszn3UUWhLv3uX5nzfCK4UDZFwgECsZwB",
  "key24": "uPgcWhaxBVH3ZYZRpEDDmezqY85T5jZZPGViXcjSYcn1kAzAMV1LN5hAw8YP6uG6vtRniNBSyLyozS9g33oM7aW",
  "key25": "2QB1wduEVZ7abA4Hhtrq6ZwDVLGLxbB5L8eQijgLcss6w5K2TJrM3XPjNo5WHYrgGiBdcgQT22wfUgxoon1cEKSC",
  "key26": "4HxmvSFx1otPmPH7e92hmrnjAgdoRepuPbvy2PYe4JjreruXKKqywHzNhcYB5huZjA6bqqKdNyFoTsd5pMtzg15j",
  "key27": "5Urat35i1cMUVtHZ5M4PhRQEMKXJ9gVQ74gpaAHx8X7Umu333ecL8sPoCFBqynhUyoa9rp9ZYCiC6Zco2sdbEb5m",
  "key28": "42FRjcjjq4HaD42qKyt2oN5Td6ngm1DWTFz3giH9dUmgv4shQ3Br6b8ybQgZsm7tA5GXmfDJQkDgvzmUwfkQHKZz",
  "key29": "55LxxdoHMAew9yDLxqjbiNttS2sbGAM348A8dG5LTWJYdqyvoFfCi3ext5pPMtLxMyNEV1Ae7d62qbhbHwsTPP3i",
  "key30": "3FwhAvZdY8hNAn8ZVM7LCAEXPZ8tqQsqMsbku5pfC1WnxM71p3LdhFzQ1rwXjdsXjU4s4xmq2wXMpW7UK5FSefY6",
  "key31": "2192XekYRkpFjnWddwETEMmJYxgEqX4WwfRPrh48gpEdV8vaCrYiQh4mPbNfQxDRQ8ByaiGwNKFezsY1Redhg22j",
  "key32": "aYQeKZ4TGms3WXVy6767xVLZX9zi3uT5XNm7bb7LzdG7tARKsT6K796ZNYq7GcrbMQdFoXtUguzkNvCWKGDxpAi"
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
