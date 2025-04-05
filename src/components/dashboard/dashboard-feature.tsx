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
    "41UZY6YmTSzh4LUAfPt8fNW8Bc4vVgKPNwtJDy8fdvbXNEqNenTnmaXmaoKbkbEW16CV9fGBohKLxAs1gS17Wgyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "koAoE2p4V5V1Tk6uDpgdux1WqfULz4EXFpQqU7fAFy21bsWDeDManUfvw84cpg1W3WNNfbpZY9FK8zCu3r3tnxR",
  "key1": "2wSTdzYF6Hugu4P4heDS98zYQo4MaLdwGUrK1rJiVpTs6wxyEc3wuwhruqR8qqvhinm89UjTGX4ALYUeWArKhGZC",
  "key2": "3ZcwmpAcsh5whF6KosSyvXHdpXTfxbXkNuXBxDtURAjEsfojKXLAPuLqYVQQjac4rWDtguv8XPoJA38SSJS9C6uU",
  "key3": "4vWQw7nGMjhYuvNeR5KbhQSeJazXTMtiWdtNhC1yQNHf8z5i8SWPu8NPjXiLZYejhaME5SqXjVzebCvZMyoLtrCB",
  "key4": "4WZXCEMAVLsGpi5YZ1bxopxRDWCxGPPya8zbL92v2Sd2s6u8mL5ygtRvssMr7z8RW4WWaSy6KyYw4bb57bT8iRa6",
  "key5": "2RWj371f17g8ABCZWu4QKcaxrwDJmSBrMbvgyGiDbbVQgTK8cAybM5KS7anD9deo3fwdRW1oZ6UnooVaYhuZ1PYk",
  "key6": "m9QTGmCgA1jzX2SMpCJ6N7H3DKJqgypfrih5GHm7Zg3Xp5RqZaHCVEjqcbuhHn4vwjBJYmqgbheqkAMd3T2Q1TD",
  "key7": "3C1PghZJHKX9bkjoWoKLA8NdTpAmcqaYU1Fw6hCauP655XS1TMBNhzg4X451LJP8jgDu9LMrGmLEmdyGi7odLq7p",
  "key8": "4BxdLR1QTvgnKkXsJ6T3rJYVZgQR7Wwv6iqnPe9C7Anc6tB7oYvK6kdZfiNFUDGXPwWyi9ZcCLLgaLQKEnMcXRTm",
  "key9": "3Fg35R5XEDDFjcDvucXbzFVT21kNtFcNViQ7inUCSbBhMSaXUHZjXhzbP1WDWWHCwrLZiF4fhETucp2f5qpmMrq2",
  "key10": "5TCo3PiApTDL81rJc9Y6D4wj4FfyXkY7S2e68n1T8iq2TbD4jADWc8CLU3dRPLoBQ5R1vpBpQTq7dqWeh8Vn8NSh",
  "key11": "3hYfTmCWi3pKqLJx2UXhNiSjDTNdbMXbFTmCYhqKv1PoKZwnYonyetwjjdfsfoXnxUBabnpaMpuLkEcqyxKNjLjL",
  "key12": "3scjSzWPb3Ws7chTL2DqNTwkUsRRFE35NPAzs5sPYWtec1Z8wRtxHshQrUEtf5aMiqJA4YG5vbaBszBuFYZpWu3M",
  "key13": "zumtj1bW4nio37vXP7iKgYh5sD7WgppwhbrUdzTRS5ZNt5JYBBBuzUUTZjVDHEFJhbSzv1kgwd52NHXwiDrmcyJ",
  "key14": "3vrEc8gzTnwVByaqEm8jUbbetkUudHzgp24LTuz3dqRbSr5kpie1vAxqigKMjfwtYkt8bdmYTNGpH2cvcqiMHzYD",
  "key15": "3vzFSsRr25QaXH2Qr6ZJ7ShHAXcyXJHZxbK5wukTDBVbXtczVCvFxCjDHzy7oEmgKyVBsjDoaWLhhHnsF2LDqxES",
  "key16": "4H13EyLQf9ibaFD9UsnqQMy9hARb5nmAKUCCbuGsMScLwkWqPGX4a4fWzaMov2hMsghMHRjLDKwykvxBeYnfEgYK",
  "key17": "Wc63qb7EjCVXDmqPmhMTc2ysgWqfwjt7txAM7W83gfomRfPEtjcoiAHcMjZMBrvLHtYAAYvPKFn3zxbK7sS5zph",
  "key18": "2FfJLJHgxt2kK7vizXgPh8fQicB8VKoTzh5UbD311evjUWS56RmKWqzLwgJEuXHDF4Xe3ykgiNAbUfd494ZQGFU8",
  "key19": "29f8e1sDBXXHtzDLJqu2kKpdKw3U9BoPgLSScfkdXKjQ4Mc1cbMXzve5BuRdWTip7cU6ZU9WCUxX73bwuC12xhWz",
  "key20": "66i5GLzGL7H8JBYmzsGr7xggSvpDP9NwUsTHCqS55dN85DhRXD8cit1XDcSLugRf94Qta5ersTStzUEkygHGctg8",
  "key21": "4YgbRJAzQdt5AdfZeJFdXZLSfuDQcMHkj4Bstw3ViJxaYmk7L3WuPEnG59SuuNUMca54wKwqM5tKMdZ74SzEYfCq",
  "key22": "4wcdKSZMuNZzBHJYbtHVEYtDtmLGuNxq24bMFkv7KQkmtvQdTQuPDq5BFMQZNtmW1Mm2XjdHt6UrjwAGQgRmSu9w",
  "key23": "2f2cnHcWnqZCVQLd6VgbRWHvyuQ4WGJdXd1NLfa4RjPTerVnMUhCA1FZQ5Hj3P3JBNHq9A9SzdBw7xEQ5xKED5yy",
  "key24": "3qVZkwM1m11tPGk4qt4xepphSZ5DpW1rgME1pAr8W4NJBzVwgy11dVHr2yQhRVQjwmCsoPHxnA6qEwXmStTtqySS",
  "key25": "5y9tJz9vAZAtSSJJXMcCAC9bUT8tdPzzyDzez7LoNjfh3Gcb3JMbVyAZqRpntJ2PhaRhqehjiEJ4rYen7kK2FnSR",
  "key26": "4VT4JvDV27EtQVSfACmLDKxAkjrJfwe88Kc2cUyPC3uqKwziEXmUk7tuouVzPzZ4HcUiHvxUDucvSwVReS6ZEPVT",
  "key27": "5cWucenYenjdNhd1KgtKg6V6KmQsffYrr8YuaLo6C1HfinsxuuhrNmmrQ3bv34TecmhMxZRA6pgJYkDziFxUDNj5",
  "key28": "5CsL6YyPFZ8kpE8VT6JMG6wnFEG42tdbr1MpKdPRrjV6e75ymxhsqEPb4yUZBbQ9juXRLySYJWxJTwwh6y4WJkKb",
  "key29": "sJLdnjyKYtDxRarATL82kpWnowdGfC2BZ3u6CD6keB1uxTY1oysz2VpmtmggtMjmrybmoJ2gu8g9iCzFiCBafAp",
  "key30": "4A58Ls174QY4vgRQJFsayo1dUzTFaQSiJqHXaX1LfYk1zmAtouS48iGpT5f9Li5sBnVf5SFarx8MHEbxbvwj2Vtm",
  "key31": "mrgM2TWjYne77jQRroLzp5kooJCmeqUFdrihYsxJUZgUtzSJbRTzEBeUbkX76gHDCetr5ivK8LJu3Hpn2hkye2s",
  "key32": "4TFLSegckhnUqDyf86a4khKzfRVwznbEWQrTa9ZhuNEnPNVB5DdQNwmp7Dkw3kbUmVLi4fNLtPeBnuJxwJQpfY2S",
  "key33": "2FSA5sWXkSqgow1qJzY89V9UVRBNbFsBUhkbrsd8B6PJ8uueqMdvyfk5b55VfMich4TV2G1w2VSccvVADs3uHU4G",
  "key34": "2dwvqpbpzfkW7Y3bnXjoNdnNXXg8QeMSnHRbEzPMhmFoYFgPtoqE4xQB23QG8xhzEZFSPWHeEg3FtF8UtRqeSfV8",
  "key35": "57U87CzrZXsi5M9BmcVmjcC9rBRHzZXn5XzoEBxWsnMyNMKotLGzsjnqafKHqeZH6vvd81nYVa5EteV4CTjG9v6Q",
  "key36": "4zPFUq48AYMLW3NLAAuTxuFafeX5hyd4MZhcngsbQLpqiEdxdiaJTyFa3Lg1Kjqt7srUQjyk5i6sWVQq8vciFNqg",
  "key37": "3zZy3U4XAbW2LLad2KDvVpBdJfyvHH2V4X5Nai2ngz4vNffQSC1FtdyP8epKo2QxKkJUTEYuf8SrdkEFTHkB1W4j",
  "key38": "2rFwCW9xVcQCMcijDScppaCsenRcEYejnwKqnH1mVvetfpnJa2JjB4ZBHfzFy2qW3nGVE64Ed2nT5dg24bT5HrgN",
  "key39": "4KuA1v2ffvsXKkTTHSB3KGdVKVjMVmjMPUuBGfFAv8NiWAbgQrKTeXBfE79m9x8dwpT4ozvYHHLhYqNLpss44bnk"
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
