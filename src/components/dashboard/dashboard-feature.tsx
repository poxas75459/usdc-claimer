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
    "54cLynG1x9Zhg97bqgtn5hT5XrFjfqm5AfmEeGpKzf6tjvXMMFzG8UbRPX3LNbPj34Sq5wsRxA2Y1XnSGVH31gPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skGFWRrYHLufPENBpQsMRRqV6cAisvD7RRunyWLHhq12njrMfz4GFMRzUfqmpqhau8UZf4B3gnzkAGNiJXkiRTa",
  "key1": "2NxceAt1jcdmH9oKZ1F1KhPtN8g2h8xZ3AuLDeJt1PRt8ihfwCGno3MrSUA8SHpFpbjEEfdE4VbKaxab9tDEe9iF",
  "key2": "3xzuGhExnxnTZ1nDB9id2KjNVooh4MdA4mEk9ZxnigBFpGrUrE9x3ZGKkKUfCN5RNtJd4FVgzpaA4xgiqDKN6Xqt",
  "key3": "3McEB3J8SXUPEKSj36vKCxcwv7cm73QZ4sFzafBDr3uSwRWqSEixTif4gjexhQ6fzMZWnAT3LfaWmrLFJyKDfVHk",
  "key4": "5Ucgr4neYbrtcUEvKMvZSp4jnKvAun4yJFsm9toVpdodifBvPykpbSPNmcXQghpoGL4wg4awwWEo7b8o37NJ5cdn",
  "key5": "56u582r38YWefowWUqFy9H2aXn1AFCZXATP5stn2h6FCzVYf6BuqPQQmUFzLbwzke1d3gwRKeUHENoRK3RCRGSai",
  "key6": "2SPFrY4mcMrrifmzobocMeNxNAPj2sskiMGHBHqykq477PgcULpVemMBs7u8ppC5K9EtHqbkU7mKPmp12JZifKK5",
  "key7": "2FMVdXPu9XoMnVq2gnsqAUiViwqeg85LJD4qwfZsVv539pPgjtkZCcDpB4Xk46iaKSrc91RdrKJcggrBcN85QMDk",
  "key8": "61Uy4eTWTuqfS2pkz3pUknFbB98f3y1Z866adTtiJhBKfDd2AWqLSZx1YyatcdAxHsKdQT1LUhdoi7Mhw2dxTtMH",
  "key9": "3wHWuXar75f4SugPgcGPCyzDhczV2zjrE59eJQ7WSiLcwAnef5WPsogJUsoqhzwq2gd1pTedDWmC9f53pSx83HJD",
  "key10": "35JEFeShiUyaU1dMHqXaYXQZLxxzjDWQrUKFq94cEjL85VS5bK9y4GxmptpVThgycpYnfLDthFAKEqnpo7UW2CND",
  "key11": "3Snrj3PY3R48BRm8Wvvi7JeeWenD8LxSWtTuGVsfZkgFhCdm4U8LFTA6RmKE86aeWC2kPJnhnJZaAVz5xVg58jLU",
  "key12": "5fACpKvJGRaWqB9QAaz15bzJzXKPgzJSJJ291Frrq9bCKWvcp9zkNffwcHKkHzWrjZkRRe4uqnHGerXSXSB8NHJF",
  "key13": "5akWcZxoKzMPBtzDAfpHkpDvt2fXdzQk8pYmS3eDAWYjVK4xcc3uuiYMC2TsSVGT7PXayckMbk1S9CWshHPZ4qB2",
  "key14": "3v5iMtG2yXn9EabcbfrKGTTPirxNi7U9vipRmnRdurSeQXkdLYYESyNFDu216PYjBvqTHs62jVVcooQkX5XkGBzn",
  "key15": "4ZfmVM41AoPSekQ7oDgTaRrKddU67uuK6SEmkUq54vfTss6DnwjM1QGqUQz25a4EJnVSFsTpiEwYeTFnAGnnJfr8",
  "key16": "qcUfVzXnZdC9W9QpD5oTSLxJGG3rnRzb31GvyQXtkg4pmSRBFRQVKDck97iJVuMfsCpVGqZnw4wik35P4Nms2tY",
  "key17": "5d1Uvv4dGsDnjf8p8JP5J8tNsius4Whm4BsxoQUhitzVEdKoZHyhwc3y42G9BpU5SqyL5PWf9m9isUH9oYjKLCmz",
  "key18": "4Re7ztrZdGsuMJmPvJxGv6veusEX5Abod8GgvTiRobt7MHrs1DzPL6f53WRVW1D58WKh3jamQ67yrqNRZzGjZxYB",
  "key19": "2i7c1p8tRFgvkZ6cw7nB7yy28RNhJA5QBSkiCUxfp9YbRnGnjWoFxzEGNz8FPHMHrxNfeEK21Us2hxa3om4uz9sD",
  "key20": "TBmVbBN9MG5SfeyAmCD7vtJqdi13TZoJs1zuweiFwpz5tGTxbADzsoWwvVh7dyBJ2a27d2FmxfNeK1jtpVTfUN2",
  "key21": "655fJcSDekPZQHmtQKo6n1ohHTqY8yAE2hHHpdVMBA3fdwrNFwsNFsVZaXcvvyYVTg2v3Fbyysxfizff4EvTzHeA",
  "key22": "2V27siXkiNSG4SBMEzKEWHbMQHkBjEGRMFfHeBEiccPdYPDuniFhvEKrqLZHswTJMsxftX3cZdZmCVHtXNAw9SHq",
  "key23": "4nYiAFb4gikuQUsHAtNHKHfDH8cVTx5KLYU4zf9N4usVX4tj1L7cf7vP41EdKeTPshsw5RxjX5b9cvhRfpn4ZhN2",
  "key24": "2Uia73BzNpfm9mPvVwC2tA1hXNxiXk6Ft8yuDvkj8rwxc92j7PZd4PWf9L6UqZQTevZdrsY9sfzwf14xkkiENtQh",
  "key25": "U4ECL8d4XugEjttwVf6p1aCqXfuqw3vhhth43Tw1UVU66gm6ee3pWhYeQbvA5uSrYH18CkMFEspaw2ZAQgfzCq5",
  "key26": "3cqYXXBxaaM3Nz8DBVfNA7JAviCbREPyHhTY4PXEA81HfeQd3Bv1MHq2uu3itTvFNh1aLTPwrRvACxtdV22hmW1e",
  "key27": "5eZVK6v92hfGnQTTTyjSjg1b3HgY8ZY7SssmTWTs3kSYQSSu49qDMHjVf1jg6pHgtcCn45FgGRcZSVKnPXdNhkGG",
  "key28": "3FrPCHfTkdJdS8gTTE34RxxyusVrakr2dSfFjDGEYp8cDJX65EV4sfJFd2RM9LALUqZeA8byoqid4hfz9oqieZPc",
  "key29": "28MXQ7kF1xxWtv1tMnMBkyBribtQR2ey5TFWDKFhwpH1hpVP6FKcfJpMNkNSHguzEy18d8WsACWucxZRQiZ7YwdX",
  "key30": "2ujX8V7vhdyz1RJH44XF1jVL72g2vhRxDVVyAiaVcxjyNqvM3omLvmGBq1NxusN5ErVASDaQHpTtLagZJFMxcbWR",
  "key31": "4CkjhKGfoDMqNMh72sicZecqqviVH55BB8rgK7VDyPxBN5XWfUFmHkWHCxjryxnv3Bkgi3Ra17vuFPD6z6aA8cmm",
  "key32": "6oAKNQuUeUkGYcsd96JQcmWkfQYjhvjM8KMeHeapKbdFFkonNmMmU4Dj7nwUAAcDw49aM58uAccPYsCr4nLcEc8",
  "key33": "5KJbji6mUXNDC5j2jzVpyKXGBGKXA5Ffk57p3wWnTKgHZwBSFn4gwUDMqf29ZXxzq8U4R1bkoVdh518aKBdF7mjs",
  "key34": "2QeuYVaZvBX6PgBcVPmuqGXHoNWp9qSUKxzff2EipA2XPDxLgNbwfueFac5vp7GbLbR5pzfLH7iHL6UwSSbQfmQY",
  "key35": "53UMXFA429wh7RBQU3eWrM594eHexbv2Jdv79zm9yCtdq7RjqoSeQUVC3MZMSikiizz24baJNuUCRjZuCVvkAMkW",
  "key36": "5X2zwMAXV78LdmZ2t1Y6H1LnSg4Ho6v7HU8n9wzbyyju3Pr2tET7YviFaV39qBnR7FVnHeVTFcW6eyQHLj15W8KC",
  "key37": "263Nw11B9uZoL2jLvN1zKmeDPU4bUpwUy7vceAHaCo3vdFEmeaWCXPQ7o98UcEhQz6UrMvFDQ9Cva1t7DeBwaxJ5",
  "key38": "5rKc9S9x85heVohHc2NMSLNowft4v745TLX4jqLaHGMnPASXQW7TcC4pDiGN96ajULU2azsYTzKhsyBxMAgBYgMN"
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
