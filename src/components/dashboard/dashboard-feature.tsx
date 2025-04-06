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
    "4sCATGMcngFUSMsTkVMoVRJxyc6Y91Cp11DBLSo9CEf795CFu5gkYKogbx8L13Ga17e1r1RbjcRLunhsomHQif3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMuWBzFaxbcrdWazXhziywZvTTNmunjRzWmSufGPuWH6xAS9xUPa7rHyqgZ8yztWioPZZHBsrNF9wUDHok3UV68",
  "key1": "4j2zjS6YQsRuB3HGC179J3NqSc8pvTYauuRjQjy5ysUsYWsNp2LrDa93iqhQ7KnbhwpPch7L27qcEwRdsSTeQ5wo",
  "key2": "tEYAGoPDDVg1CW7CJxSDbs57ALoLvTHVapBe32NWd3FWaP4jVgVCrGe2Q3K93rexeNYYEfbXhDFEfVet5DVt8MC",
  "key3": "2cCkNcFVYv8ibAYW6bchK6MXWDs5YwS9z6HgchsjZ6VjVBd4nwcBi2ueNogfZm4gvFpUXRTheiuHu2XjSjXfDXwo",
  "key4": "2CYZq8xGqwTPzDLULrhbDvaxeYjUAVgBug7go4ou6RdQPA5ARVdLs3RcMLzrjDB2rR2RRNTo176ZqjBV6soW41mU",
  "key5": "3CUGbbLhBkMuZRjoNp24AkGbi2QUiFqp2DhNNgdkD9aPk4fW9BFEF4qhc9btCuJr9LDtovPx1MUxM9DdiGWmXpjs",
  "key6": "4vYSxfGguZUTcaFzPo6ATFwKkFdm5pJnNWxCRrKVX8H662KaA73ZR9eDQhUrZw1KfyYaDrEN1pJJMEF3WRcSLwq7",
  "key7": "2CUrCvEBGNPCzJJBJFsMKWY9iFb3hVjMizNMr9KcqvP5RVufpWNYxDPrtYMtHDwnVGBiFVzm1v65dJYR3QJcb2jH",
  "key8": "2AkF45yya48trYBEaZ6oscXA1eMSL9jTBEBiHW9YGr25wm8fBcFQd7PcMYPCmuKL1bniV7yqMvmcEoGJ3LJ182WM",
  "key9": "5PjitBR6XJqGbvoeQcEUV9XrQvMf9g7tM7ZXEVjPbgUNbRfDtSBpeQDFt4wnc4wzM5HanMpD2f3a9yuvQQubcY9E",
  "key10": "2ihH6JJhethpU41B8qu51A8KkdQsNxfAMcmenqTPWdFNec1k2HGNqEBxtRzQKggNXLEcG2NZ2JJaMYHJsx6bQE7j",
  "key11": "616XTv1cAs8E3eTBKvyopD5L39EeAR2r3LyYfjiHTmBDfYQ4Y3mQqbsZberZkEEhWghCLiozAq82oDnftHkXJAAf",
  "key12": "3h82xNHWkzEkAbwoQ4s9Bs55e9vmaSeMwPKpVXpXyDXCMwFaneURN7zzgfTutA4UxPWRimsvTBacEYAgQMVffav",
  "key13": "2iJ8afLXJJKXz7LBXTr8yeZwyCEnidF1pwWVBhRG8jTweinH6XsxjjWPfr88zi647H4qtq1uRxZXePgNVzPerTvH",
  "key14": "2s12o1vHa1Cx3SEiZiHbXki1E5LvnutMmeqD4uPXRyhqr4QYKgs7xkCk8tDLTkgHJtdUNKoBYeaNuZaFSEA1HXQe",
  "key15": "jeEjZjBhGFfrHhUKaYb8JxvkfmFwFvsAN5fDixZ9YBDBZU4My44TkWYyfoeKH6PuVpHArjwJoJD8r9v9JBW4AmA",
  "key16": "5o6QTBkAiz32yPWL9XBZZUbM3tTpWAPgJ6mq73qHMUHAo5qfwhjwB7vgSWcuK2x392RTFbkGfqHszbzHQdWHfFkf",
  "key17": "25JCnCPrucffU2NJRBSE92hLxpK8Vr7QppTTbVeW3K7vXczDFx8UWadwavfhhrWTVJDKCCDGiSJZD6pZrXkFCc71",
  "key18": "2AYxEWaRCoJWPxXsSqjyEqaiTxzgqasPot2QEsLf1McoKLmxQMEQRXGU7bJG6Cg7bFNkaUWx1VuNmGE4WgefEDGg",
  "key19": "2J5cbcEkLxk3P4ejPzVnmyye3JTx6tKU7AF6MuAPmoLfWapJXKvcJv3iAG8m1spJTb368GDCu1ytRWxxMmZTDGnj",
  "key20": "i7yGzSKbTjKktLLNFamgioGMQbDCMusCmKV3FmpQVsyg7ZycqjQumVrrmcbvEG1vh9SF2QiGVz7LpiXDDMpVvQM",
  "key21": "338RGui6kRKeNPAqdcJGppjbx2FJ7b36KsC7d92ii79KWanHKz9DikHu9fNFJbNpjv9B6pFL39MAG9cHAMfNPPpb",
  "key22": "63DAHBJuogAzTR7CdppCUScD8GaATM5kfxt7GxLLPdAdQD31MeZfVCaFyEMpXWRLVkLVsqppYb4XYGB46vJHqAhW",
  "key23": "3MFKUri7idcJVQ9e5AyxJ7xqt1CA7An5SHPTQMMtuhWiYj1HdAUoy5jkAK8rcTLNJ2VokjAhVLk1nXKwEiHazs5L",
  "key24": "2UKs9wcKrpb4d4ozvofLQNKTygAXeyzXUK2g9WraCynVeNBchHQgzXhHNyFeg1VKeHaFUhGHMRrNbBdtovApgnWK",
  "key25": "5HRfU92J5YoyGyUCB8kttXZoTojgmf8mURXmcAypuU3sKwVpHFVpfYx9wY7YN4gsRAaJDhKBKXpmeWgAuUtvGnsA",
  "key26": "25jqvT4kik9tKUBCRwzf8pxtFq7joUJBSEggZm1gisadXo31RgAjnSbrpmPPsvMyrk5MixPJpX6n1uQCZzjVYyfD",
  "key27": "2ycnMiHQgwzDyvUVN58J6Vzm7c7aciDQCL55AoosaNjzqDK8pvpeaSq3WRgSVrgSwTSGgg9TNFHEJSmho5KYb549",
  "key28": "3gHpm6n6ncy2GN9NxNT9yFqz814xPHdXbhw2CHranxorGhLKQRofgfy3vwV14ZsYKjGiQMeHyJhJDaNdW8EnefKe",
  "key29": "36LEouR9jPgqcV9SFvDsVoUdgnYuTmarhwkwxRJZMcb9jM8DFoWuAoooRwrajNsvYdmGpR7SbxipgJbNZokUBSDr",
  "key30": "SLoPWzK1L8Y1CsALkNeMxTLbVpTA9BtRyrrAa1ekW17xVFcXzbbw5B7KBxuVwutDHiZESZdNDxtAYfjxmfQ1yu2",
  "key31": "4D22c7hyjmBqiC9CcHrAQN71ioKMHq4ZRB7XbFGQmELK1LjuS48vvW8KyTAP469Fc9oYuTPb7ZS63vdnpnVem2aM",
  "key32": "3kVRzebsDCpYRwvsdpJs8qnmLLF7tQsXTmxfwKYyrVyb3UxRUnhzbPnmAr7vij9XGqS5Bpu3evsvqFPFKZ88mmh9",
  "key33": "33Apa1jf1g47kNYDwQci8UAikqrNhXq5gRXcARbANx8i9h6coC5mX6VP5SAeHo5FRLanXUeXNEsnibTMv6cp5tpk",
  "key34": "NkE3WhMH3EjVNn4sXyDxvUHNKFD5j67anipS3aLRxK6gkxLT2rzXWrt2AqS7TMvoEbh2JaQWZw1A4qRwB67kpN7",
  "key35": "2UxhXLy8AngeZjP5Sw1pfNAwka9CT1cRKSt9okxNJAnR1TFH8NJmEyqVnFxgurJx4Q38gSbydRmjm2ofJNcyaZiC",
  "key36": "4wvHgNRDpsLM2tNGwhPMRiDP9j8phCooCnKRuanGBxfijijTfxBEwyxyr1ppk2tp9BdWVDFgyhNXrHdCkw4VMLuo"
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
