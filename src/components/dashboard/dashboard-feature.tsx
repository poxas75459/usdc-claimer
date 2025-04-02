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
    "4zueNRmuEaDSeLyB67X3TNQ8vraCkW8aUFf7cDeBoWojbhjLriCwzXxfazNW7F3euBYbcq4qjpW3X7SCyE69L2pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K8RjxTrS768AzXLSp6PmNuL2YX1SfsUBDrZFB9B2DmV1nm2o6UwSRG2DQ5LHBCR13tSj3Kx1SzyfkipDnENsWwL",
  "key1": "4CXsPggtA8sX29keyW7KJquXNSpbU5EoqaeviX7xvRi8aSoimjkmUCVVA1RJypHd8BXZNTdmb5akvzEThoowAtjp",
  "key2": "5nFcPSfzdv8MpNAQ7apyB6a9Mg6hrHLYtZQpiMsAVxkjxKk9SKs7uKBeSS9RtTBzSXvbsJ4JiwKBTXhvvUnkhjR5",
  "key3": "24AhTjt4SdcqXTNCY3q5uQp2gxNdZR87cquJTzgKEpULHL4ABueZcTjShGC8P6GmHbp24UMvVXtMBT4VApQen6Pc",
  "key4": "nRUYtTKD9wp4T69ZZanS9ML58uysRVYnpnJNEtbSsunAi5VNCxTYyqggmxk9va45G87LdxtE4Sp13Y6bToCB19L",
  "key5": "4kuqShrzLhAuCr1iM6xP2uRBkMvqhpPR6gPubomtZw7vRPNK3cChmaYrbhfMcXcdSri8bavD62i7KN5LcfKN4EbF",
  "key6": "5q5ZQnYUj14ZksaYwXqJKvYfjHnE58hRCNo5iJBnmsntEQBWZsXatP7zkgdXSw7iiiL1wWot8vrgcrssi9RTe6Xd",
  "key7": "4mDVMFMtQCpXBz6MaCABq7QEW18276uh1EBaF14baph2qtuP6JDTGLMqQ2egC4sPYTFJdyHDApvJfa6hrjw9DbwK",
  "key8": "2rdpXpYQQSihfXbfDgCyJsWNYbr8eRJPw2d53gnFR5Nh4L4y1yfy8GH19scR8yyS6VgHKvmQvifY4RCPo5tDvHNE",
  "key9": "3KAfujQGSqzUES498LMV6xtGhXJwhien1qPseN64DUNL5RY89q2h6ap9tMBKP2cq2RttSQcssjeg5qmUmxC4q6iC",
  "key10": "3N5DYa7eP6GJ54PHAP4g9BYSyBaRnqVCSTEJx593RKueLbyJ8GKZpa1v8iBqhGG1XHGs6ZsY7cfy3sdwgiw3Auzd",
  "key11": "5PVF1YwbGobFSrsWoinKogtvG6Bxw6f1XWaVnWaNW4cicvz5AkozS8MD9i188pkwBvhDDv4BJtGU4fTYJJSb8uTg",
  "key12": "24T53Y5ezuVntwFGND7PiP6ofNa9pjxVpU2mmveW4QvRDgT4XJXPQo2ho1YxviJZ3uEiyaMNkCY6urZGhSbpSZpR",
  "key13": "4Mjc2rhi7w9VioXBB3d8n34fxYci1dz3v686MTfEEhwDBaajjbReozcdKPAjwvDWhL2rTAW6uig48hkeA2nvzLtM",
  "key14": "2miJLMqGjvfcNntMg58LAL5EPENvz7oCc4Thon6jU9aLddUxhvG5nkaRbWbVkZ2XrDFECXw7eRjf3fmWsB3VQarZ",
  "key15": "3iL12WTBSbZEz1PEpUCLKwiyvaruHqmCuGrK33btsCYWQT9kcMVXTPZcaCACxC7WF1LzWD3FQ76e68BD4gyK73TM",
  "key16": "5QqwGUCoZJLh342A3GzEnpbiG9efXi2Ep6Vos6FUhZzF4Zw14arJ1KxPfmG9ksZLLVuRWJsb2sv9SeP3J5BqPgyS",
  "key17": "3DGniX2jsayXMUVALm67TXP4ehCHSJVdBwqRNm28pqmxw3NmmnMpK53eKEvb8zEmqsTLUwREuHb7MeKn8ZoU7Yb7",
  "key18": "3P5qYadaoMYAnMN7Rq6uF5kcK5uVAD53wLkJmnVVMxQNaPsoTtzGSACon6VAtKCzwph9e1EhW4AF33FWiGzUWcLv",
  "key19": "3ZbhfpMHRNtLpxrwG4qwaDac5MyAX5vWiNobxPbjNM6ynCoYJ582ohExE4gqMwmngMDKZ78LMoDWW8RyedYZRcu",
  "key20": "5nEJiXRDopnUAzXxMZVGo6C2D8fDdudnGn4LYcFJLAmtPE5EmYidChzaccnsEfCjeX3y247MGPgPxdoisczxB8CG",
  "key21": "GxR6ztLcTMYfGrsuu22gnUf2hfFW9oweBuswEtDUZ3kSBFaiZwhd3wVEd1JrAfr81g1syMxWAmVLJZCHUQBCm4k",
  "key22": "hFxLM97H79qHGNMhyDP9sL9KzGwWamku3LLg3N5swqvNsiLoccfLss5FLQHTfZptEZo625dNUKrw6BKqJRaGPGU",
  "key23": "2twRFM6xbaRn6NeLvs97z8FgMxftq9QDVkyaWpQLq5jrKiURLGYJshp2nxwBvAGht9ALzvaPWxoaxfRcMvSgMuKn",
  "key24": "2ARRrTEo1GMVTMiP2behBZCMtZu3qPnkTBBKWWAQhYAaKddFtHL2THnUWqNuVVK7FW8TYZ8VKiaSmZGoe61bduUL",
  "key25": "5MsXEj41Hej8rA2h7HC6D9hFUp5BU8ZS5PchDJBwAGgKkCyhRiPPDp49AX44k5aWpe8gviQAfz9ub2d5xiDdm3DD",
  "key26": "55NQsGkQCeefHnBgpTCfS8beMPPiRxbWDyNKQ6Yupjw28TmJBMgYG54EkPGGoSwZKcVsk8hhNntPECSH5AMdT62d",
  "key27": "5f3mZP6Ne2Gj6zMvf4STid6pzAF5VsTnhhcF1Bq7fyEhpFArg6wvMKMMVPjDaAdLqjZ3ExTfBixjJcZcDdCDsYK5",
  "key28": "2VANyxTzkwVQpBF7FBAnyyMoeMvzKmHMQqpfB5U1KQ3oZWsUZnSCqT97eXHiDPmhHfti6LLVMpv4ktZi7zcTUikB",
  "key29": "8FoiabQqVwfm7m39qLMYLkoNZguTmM3yhHACrcgPRwm8ms16U3QYJCykhD72GZVFmwUQrJpGodbhbFV47NYS3VP",
  "key30": "2euwRybEcPVqcjJA8sp9muzFXasWnjbBBuGHBCZQr9jnTxxGvTuPD9vEjmj4Rfa5GwsNN9K8bxnqu84GVtJbkGYE",
  "key31": "28cSQpURRLLYQR2uneYL1QPaLtUXy2t9iaJ6fUbHeVfCxeBp1upJVNkmdmL8V6QnKw2DjkozRi1ghsrxdzkazhAU",
  "key32": "aHsaQ233daFH5dB7FbNrWDyPPsSxUyarx5DFaYtfcvvg9sXrkYB4MMSLHhuN4PVm8g9su69subxd5NKqviUpB45",
  "key33": "2xK3jzZBgk4sUgd6yqcNtkpfCL6nWwGTDr2PjeC5qCNjYHM5WVDv4K9K4oS8zHL1jNzkB5MZ1JALx7qWc8vhkro5",
  "key34": "4svh5Sd3paEXKMNXrRuzcSJG9Akxvf7esgpRAJiSRE8uiC5438jgisFYNh9pDQwsAS1yCHp7mUvGLhoU72bAL56B",
  "key35": "4gojGyuQGHNgvJtaBmF1Rp5ZYmuassVn9HMeryRAWcpoYWuM2nHBgde6KPdrNQS8uPvTE5U84wyCRmSHbci2PJVj",
  "key36": "BwSHxHxZPrsM3kcoZtxbzd27maCWX5V12r8o8T2peZ2xCMmSMS7iPbrNGXN7ohT81kdgDchZ9iWZwq3EATGoic4"
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
