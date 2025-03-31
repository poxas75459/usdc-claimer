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
    "4PPRbSJg3r1bdS4GcjMb7Dg5SQQebABM1Va5f1Z3jAx36HgDTTNhUbqU2wmMGBMCn5nKfNgbxxUxS3DFVVwxEPUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkXccJqL5MTBJVatgN2uTvDGZQ6rMpUud1RMQtBmHUKBQ1Mtu85T2iTYphYEQG9aPCDcSKbUbtBowPMSTd5JjHK",
  "key1": "1jZYCt7hoa2B4eWdyeTEFrTzLSnauyGwAb2ba8nB3LN6HfdhzrhXQrbTvamV1eoHUabciHMzd2rX8iUjzEo3S2b",
  "key2": "4u6rQCoA9wXke9xcDhyGi2e5AePdoiVHg7jPwqnB9kAmJtJtCqb3YvDDQdWf3jHQTqaVXHgN9aiDFMhxGrT9v64c",
  "key3": "FUjsu8FsDLdkPwZaCpCUP1v5483qK5qAR6EonfuxFSyzjV4CQkzXC5BscwPXWQxfoCDDV4cyDrd41j1VPTvXD8i",
  "key4": "4JURJiomtLtYGA2Zu53RsA93fBGdVEKwknLchJFp1zqfUqM4TezFAL3QJXoiXrVzS3nqUz4FvsFB7KKgeCfGy8f7",
  "key5": "JoNFZ51Y8eqkmFrrfXBBUT3oBRMjT4FyrrNAuq1bQUCgkbanSSUAU8pHPjbgcAyfnAs7zauyhTd66cEoAjMF8tn",
  "key6": "krVAkYSzbQunbeZrsCHSERQoK6oWdwAkrWoBfLEMTESqFxQM9HTcaoF7631vDrALXdWvWmCWwBHVrnkMa13DrZY",
  "key7": "9iDv8BTp5wNLu8wtMB6uKLxfG1Z8aueggNzC8hfWmj2GLhNZKQmgQc9G9A9oBPBfEn54tGDMT38AcQGQi8ZfyJe",
  "key8": "3wPwCykAmeRXWqJ6SWAiFRegGEkZZw3igvFyzQVAe7s2DnpFzAFqihKsFjHwFa24PCUWRDeiYDFHv6FyvHZnjUQL",
  "key9": "5t29LGRrwt8tQ9NVtD5SLXN1fJwRVsyNueQByC3XuMFNdTzumHtfNsWjUzTzNr7DzgTAtSEbMLA7tdZHV6dNZttF",
  "key10": "2sUEge1XoAFxvbm8GjeXn1Y39FTv7RfyYSYMUQyRiULamoaqUkSvLvi7TxXPiXgGEFzKnYWSRtxeRG4T77scU2Pv",
  "key11": "tfTqJDbp33KHDuSA7p8NXYk2G9mFUFx9ZLQVytHmyHPzZwQob4Tx1CiBF2wXTMELAoQ4aqEnL3HtxVhuBKbcvGh",
  "key12": "Bchecc3cjhoKubKzt9WyyHZrrZtkkyRQDnSHYtTCJQD31KpKXHqrnRG9XL2hEbMjnvxb3uVhsdG3XC1T7g86Jr4",
  "key13": "WcVpfh5rXmEkoKhX51kvT9tXSbwNvzsMUnvnKC6Kf96BCUJb8QrQwkdM253PcXSzvdfkrkAaqFwHCkaGs1w6P7n",
  "key14": "5K9DNNLyqpfPyFibgE2ibUYDtvQF9Jp9Nbp6Vy31scrJaYR66HCbyWfw7W6fNU8pzSrPcMuYgNmcpFxKxijga7R1",
  "key15": "4a7XR8pDSMasFdkceD5mtVzNR23cnhsbZWUktwak5cRjmsWxEHjQL298eiY2GxR6waLeSwmA3gAgaU8u7GKe259n",
  "key16": "TYWM2oSCHkjjPSbQuzCbdTHYGHJndC5QfgQH32g4xvmKcRSbzBN3nkF6qGjo7ayMVvyNusv7uyxfTZ9NiHW2i2f",
  "key17": "4fuQDYUhVHidc9j4oVsF2GKbFWLCAut5qP1EzHdZ7w9CkpTtsaP7Njee83e763ToZ33iB4GQJS9gZCSEwgsiCvaM",
  "key18": "432YBB2aN3sgFWPQRNMgV9NP17eURUXcDZ8GN4fjdzCBT1uGfpU7utXYFaHooy42eGGRhTLewoKRtit6wDuwh79M",
  "key19": "2jJmyLJvieuA67hQ4cNqUiELJeyiwYfXQsXRsH6YKZ1oZurtD8jNSLWX939FMLWRcxiQ8JpKpgFTbVUkcZU5ynyT",
  "key20": "2mpbeYofKH5jpmnBT2zHXMZiMCzD6wFwAbBaoQAZx6Lszaxddw6TM9MJXgYocekR4huFmU4N7WSmbDPxioE9SDGG",
  "key21": "3zPgKH4w3wvTKtcqkXTjPvcpv1SHCEhmzKuErunrS1zR7ti818rvsJv8HMxTToKUTYeZkQ53LvxCELVLjHZkAhW8",
  "key22": "2N3xPuW2Vq8wKZHvpWWhiApLGboAkUmVa6MCWxKVyRbtRqLukyrs9QPq64src4DCGTy5iNBNYFRJpVHPP2hp4e3L",
  "key23": "2FBcPXnPX4RGofbbLHyAM2uzGHm7mF3wFq6ZPu4JwB8EfwjtFf5xtGMu4byxJaNfdiZyVt64nMABU5kRhkK9PHpB",
  "key24": "3G6FENKcV3sCg95TkTgQ7iPX3YvZMLJv9RR9UjaGAz1ufdZAUzdFrx4GekFJGTLytyVv2m9qsxHyTDGnfjzMhE5A",
  "key25": "3ycFdW5LTf6QFFgDN35HhtAYMRB6fog83m6KK4GpK14V1MbmbPe9LpoGKtiGwu6LAXLFGydkh5tXBihZgSqPRwZa",
  "key26": "VRpnGk8F3njv31cPYSkvTR7o8QZZp4dzjDRsSPbMQVV5X3AkXoWHosr1Jtb4ZNFA8GjYF2DY8Jyh64RZobvMcWQ",
  "key27": "2BKohyQYA5rrBEHGiQR8fdWRyGozk7hgqMsMeY4ueV3nmReDgwwaVFfdyk3yqy7EerC89SEtkuai4mtQb4FJNmY9",
  "key28": "5r86oQovqmw6Y6PqVx5MP9i9EUXwNqgUvxXfq2x6SJzFT1EoGrEBAjwWv8j27Z2dXJnnnozvmgLDc33tYqe9HprP",
  "key29": "5VjmU4XJ7UTjeHqbY6m78kDav9WdCUKDNrWagfPRZMBiQBTaDwk4cmxP4jVsEUFPLRe4VhkFxndMEE5568vf9BoH",
  "key30": "77HBiyeTCXQyogHiZtMbBNngApZJgHGg68UZJ1keSSvy9jwwH64N4x3ENwNiehHTsrRnTUMmLQ579p4PHCsUH6a",
  "key31": "5vkJkA3xVH9trAd6VHTRvbovRqMt8uRi5ZNkK1DeJaQCss1jhzGdWYD4demJHy5Ww2xyYUQ2Rro9eeXm4Bqr6S9N",
  "key32": "2dLqnFcXABiwZaGGUZRSCezcEzdL8RZPyAyeovMHh6aZAX3tsfXQumWti2HTBvFzy6rthdkxqDyGZ4pvVdfTLL2E",
  "key33": "3wKuFLL8RdMeg8mgXLde9G4sSX5F547gGatUfMW4u19JNxzFXZrKQxqVNHW5CWjrH31aGQoTpkMPRgcynrf2cFtU",
  "key34": "467MurZrZaKQJyrPwqoAwMuPgaUjzWv6ejhXHv2SMfeVcBCi6aWybhXNecchrf9cj6XKXC1oUBemD8y8Xg3TDK2c",
  "key35": "5AHGzx1JrRGdo1yi5FP5fG4PSnqxWBHArUUvtMsczia1wxjf4ngMkb7NfDeXz2dmq6bJHPu2Ah1M3bW35GL6QNfp",
  "key36": "34WpoKzGF6tzexzGfRgb81GiSvGt8WZkzxZs8NU3i8EkpFFY1k5p1pBEZ2vMv9ixALYGHdabm1jYv8FvMFXHrnXU",
  "key37": "3AiGm4ycu9KHEfuLdyrTeJzjPjPieHubngcD1pJQdkSNmxWF5JS9pEebcFbgGtBq78fxqh1jTf9VMxbdLZk8rswi"
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
