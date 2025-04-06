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
    "271NyQGyA8uUz9pS3TN7FcDSzC7AbrNx731N2EHa5e62aTjexAvdEHWNSL19ErBERCyBeurzRKtnp8WYFmTxZzzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r696BmTnz3Sji4jKcR9F1JzerzTH9nXdaDQqzJgCZxK63rgrcGHeVB2iwFJvRfLgi3Ax1GnpvbwUCxyuMr9iWBZ",
  "key1": "h2cfsns1uqqARKePsmawTVeUDBL3zJUyQ569qthJPXxdU4eG5feuNE3nNjJQf9PDzRNQubeSuBDfotpPzVEVqvh",
  "key2": "3KxU3hyZfQyeN2dBb9uiLif3sZrH2DEgN3U8UDfJwTEERd54g2YUyEsSbGKe5HVaQGX8RtrjbrJoDKmFhi8DHFUg",
  "key3": "4aecFV7g825PESGT3RdVdYF8bZSpnsk1WJCyvfNsE8dZd6HwWzJLgRq4tRqqZh8PRKtHQrDjd2UbdVcnB5ZcR4Qb",
  "key4": "AhHKseHkvCiFY8v7m4YG8YJh9Guw2QNyDzQMDTcdeBAHZBZSeAdoNaV3h3b4CWxtVkFYJyFMU8z7gz2eBdANymr",
  "key5": "6tpy8bQVbq2MCkhAMrBqjQCMNj1ffvrmtrRfgRKgQKS3SGBk3LgZ4NMbHEJLpTwXLwgHYY9StihcTiPpbPBStAv",
  "key6": "5uU6JWm52XsAU5UMtA5Qo96C72wpYDrG7udL2SiHWbY97aDeWNHhMVKfGE9De8WizegikwKe5R57RBdBjMuvSxhg",
  "key7": "2XJtt9TAePyPdeKPcadyfz992Nj87GCqTpG1Yg8L2mCTuv9C6a3kqTvDtbMmfsmsNFagJX4NbeecX8hFByutMFoQ",
  "key8": "22uMDgy32EwGKQMuKPa5NkzWTPYdCh28NvCA87Qjy3iDGmz4RQQxG84ed1ACXxaxsmW8FQeM9WdrDwbZH2PLGPW1",
  "key9": "28GtkEAznRLaRXWLP3fCP65RxVNdFz9EGcpThnS5zvj8WbwhE2xA379RMaWua6yL8ENnR66ED2ux9pj2iiF4hibc",
  "key10": "3gYja5acdf2akKUirbxZsxE6cDbZRg2VMFgXv6viLQpsyUH29Q6DrmyoobCpLgLBYRRG8uFhR9aE1omf4tWWy9v4",
  "key11": "5YHD1AvctQh2S2KS1Skc9Ykbkk85rxPbio4XRbayuAUkWR6rH53o2upNvZe3TMGQ9aRAYakoR3xtFVrjn1vF4Dwv",
  "key12": "vtcVgjDiz6VpSMHnBd3Eo5kua5fJacP12heT7RJKJ8EctdvjJ5VbQUMqoH1JpYZP4TmyFPqBxFofqVZp8A1Smqr",
  "key13": "3sgg3wkX1oybiwsjtCuhb7kgHEr7TFG417EkcysNynx1QgNFRRVg3NuA3CGNG8pzRWpsJRnpHN7QgomTSXaNgww5",
  "key14": "MqJ3Ymu98F3EzpfVp1G9XSoGjRq4253Va85VwFZE5q4vGLoWRb8nn6x5TcDNoDnzFTy3N4CBsakVME9Q7qnU31y",
  "key15": "5zrty5daJMoWArwNa6LKhqdiWCiS7g7NniTAGWKmcyA9Aek7sNTJYuGNM511AaxphMA4KBsMWirNDeFuWXKggpjv",
  "key16": "477wWgMWCRgY8u6sctEE74UrAYzWYvKTT1CuARZMC6zgchNM2d6qzs9Ar32WxYRNNy6TCNUnurdRxGXAwZP46iC1",
  "key17": "4ZEDfwLqyWsWexs13ZDYWb5M8kU6zem5y8tz6iwN6xaKhPYm4QUc6eCr7H8s2gV9QT25WXkp6W8Xt73nuSDEb9RD",
  "key18": "2TrcnZHae8y5FwQr2yJvYDaFatTQJdqUuVshofHVtJLMrxWLLWqiPCao7mPrGXA44pk3fFLb1x5uBWkeXRmZ76o2",
  "key19": "2JhHp5KUQg9HKdF9mTgJrahm6JpJrjEjsBetFYsSv6M3WYMVgB67wnL6EmNYpp6pGCujsXVBwtFspYi5z7qdM6GB",
  "key20": "5qMhN6CS2vKCnp8LZNTGWMVktC9sxcCskpdRqQx9wqwqTNehywmkeQXtPjbuwGtVNQAdFM3Br4W3YEJQortqcEyA",
  "key21": "3VEFbWB1PZAnACKzUvyRuaySJxsayoBLhnX9VTmXYMnpHqFovE1bd7VkB696H8HME9XwmdqeBAjCGio7Q1sHxQgk",
  "key22": "CZhsQXDLPChfySXhE9gmztzagZodyPueMjzEC2Hj8CM2H6VifqWsYPDFJUDV7XYgY7A8DpVespQatjYvAsfFPEp",
  "key23": "46Vuw8SdtvvA5iTzXN25viChGU4UkRiyXJUtCqYbkkBxTJEtMFUpseNR7Mmb4G6o58Gq97VrtHNxmasL4xHQMSwu",
  "key24": "3k6Fvep6S1Y61Gn5VeGiU593jXhQPmUCiNXsF39cXgvTCir2GvnAyMzwcQoZB4426nmsLcHkCNXcLvbuHfchD4qy",
  "key25": "47HtRrMoVcvSbgGKhLJg2hSNrMKPLUVvQfPcRQUPUDVYWa21MBGYim83ccx2vLJftWADsCUo2GbmZ5uEJXvsXj9E",
  "key26": "2bfp3u2q47S34qgjyPbP2nAmCjJq5QmuSit3oqDfH3JaX1C5M9Ty274pxX3HWf4Li2RfeDtBE8rzfv3oxB7KehLE",
  "key27": "5vtqXXdThJu6Gr2dLtiPEeHg2hUNmEC7HoHge2TzrpAJE83iyqBCjSW21MLzNTYmMeApFuQzH8SjKsTvmNQnLnDg",
  "key28": "37MHvKGKEwrm7tGs5deM4XJEuAHigiLXS4aVgJy8LyVGn2ifXebfssQGsyw6Yb7CKc3qLU2JSUmLS13yYFHRVpjy",
  "key29": "3iGd7ugKDi4GsVjxwby3KBN4HaJKhchKZKrUw6crgvH1HjtBAAfeBmq8VZLVfAKCcRzC7tdaTVs4ZbxgTcaUuZSd",
  "key30": "2AavKVWTNWpkNjJ8MBzv2admBYx1suTcL8H2TKv74AE9gwWgbP5X39hPSvtomfZypBwbyafFWFbjHN1HkEJ5fnB1",
  "key31": "vTUcWa3T7VG8kZo6xKmzzs1hctRDFeSXYt84ZaUTvSmvwBpyH4ykbgCWB1eTvnFWhvEyRNAohiotw8bkM3PnpNg",
  "key32": "NWWiTSTqyCBQAcnrih9imw9e6hwUjNEgSPiGd84VWMu6cAi2j5G7dsHb24pauXJFjfHL6SG9ZmAhZAZQGtjkVQX",
  "key33": "5GbLWF3JL6AyfhiNddWe5Yk2N2PLRZ1Kbbe7GdVanXN8Pcrhr8MVvJ4nWDFSYgpfdi7DgLNPdu32Zo3iBxr9nhPm",
  "key34": "4WdSQdRzybkxQPjrAcRb7xqYSkzQVaPDvFR6hQAPwBAZ8NfcAspzzKY5fhZYFjWFHERueX44kFN8q5b4ytdp3Ej3"
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
