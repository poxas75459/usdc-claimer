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
    "3H13Wz6tEmtyDE2hTFN8Gh1p2ZJtMcRPU7qhr68cUHDT6dZpf7s2pYBZza23YQygEVFzDSPtcLVDaJ8ibMXSuLA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nxj1orotcKfKmgHt4tWA2TLjeNmE7sWmsNnkYNK6YZupNAqt6szHATdm2nZJnCK7AJf7YWPR52MJtRv6ckX5BKC",
  "key1": "5heNM4ovx7XT3aG9WrF4KqHdr2LqFnQCS6VGBKVZuHPhNUdcvbDVBggYotAkFk9Lfw3VjaRFsBRzUXkxJuRH8RGc",
  "key2": "4vxygQDdkhCirMQYC4zLdzFXS4123qZfWv5aGWgmoUZhrBodo4Ghf3uwyZT8TSaWjnHextXK8cXZKWu8Cb4fouiP",
  "key3": "4zsmESBRCTx82RbhGQFsjDLuYXdK7vdJB4SMBDPtxTaxP6XZuqBgDsNeyGN3a3NkWsV4iZiy1HgvcxhT4SQH4MRv",
  "key4": "3TDDBpRYsJ3HYWMBFKu64bSWaN6UhkaJ8U74upZL3aNooMK73foMs8uw8AnkyrsUvAj56FGEmeistZ5pf8Jg62Hi",
  "key5": "zhpuM4uretdAnXdHbqBjCNgfnLLnYxT6uAndGDziTM5PwYNvFjMR2uv8XG9QkfuLVM1J8qW3e5ptoaFjdJDA3TG",
  "key6": "362Zd8JqoccRaCQPoDTYytRLA5yYSnYT6QGXBehPah9hvcoHePzNwCXuoiX1HLHfy4xwJHceVa4oxLhGaxjVWvFf",
  "key7": "2d9F6kxUiEp7mZVDuCdSuLhjzu8rC3JzDeJvB1Fg5mmYnXTn7ZyNBK95Kif5qA53fD3UZLzXsTQDMqSJxGkpdwtP",
  "key8": "3PNrg7B7NvWzo3bGoBfyQMm7kZEfpdaAhrAt7nTrRyKdP3i7Wi8fpD19RvxgKeEhpfFBn6Rk1szPrivrMjw3SgQf",
  "key9": "2py2NmFX9nV3SM3vNYUrS8BdDAk7oALRReKQu6KByEbuU3dQy4MBDLEztgBiigsCu5kJ3nD3bK3f8ckMdutN3qra",
  "key10": "5UZVEkrj5RjqyVhajDMyqpM5oSKqCFXRBPHQTdoTHgXWAxRxhZQAKjuDLnHPkK5ja6WacE78dkznoNuNRe4YhjBY",
  "key11": "5nVvwN6kvVkcMRSXiDA3mGsHzRPDDcVwmtYRtCshB9bpVApZAn8eRiGuxrSaxiC9ukTtmvVJCvA9BKtJBcA4mHNE",
  "key12": "29JnX6ygWvuzh9Jf1tNzbcq4aAV7h2XACoVjw1ou5cyebnPowfGw8tTWrocnDTnbyXR2EgrYE1mRaARmQYrtNE76",
  "key13": "4odD8Zr7tsHGNN5ik168xQjg3R4yaMNZYogc9wvYkS7c6w6GPVkoVfGjMhAcAMbTMUCoVQxZ6a3HAdzsKxqUFLG2",
  "key14": "5tf9qfmtts3hepxxAp5GVYmpy6SywT4oCVMTWdy8WfttiahyGqhZe2zVWVmzSR4daQoQUpecUH9gstiSn7YwnaPm",
  "key15": "3WdyrpXojJj3RJDcHAJJKmfmkxtAb14GQ571qzNQ5SzsuKHympE3hATi6awvW51RSBTrwqaYzM7ktY3FnWBKJSnU",
  "key16": "3buGwPoJWL5fTsV9bgDVo8mK4e5JDB5XDeXfcLTFwrB7ciG7qWvGDQfSdTqVMn8NSzsuZnkC1W9MzvDeD4tTvRRw",
  "key17": "GT1722J3HQa9B8MKNLGjrNJxAo3XyvpceygxLWHb18ikUHjH1QgYDAack2BnjtssABN9BkqcHSdYZkrqAV2isEW",
  "key18": "5DBSXztW2Rit55z5fiwSiHTdC4adau4okzqtmMMvq7QMuvLsdYVBSrYUgRUkQBMqhwuYTR5qjewTnmwhYVHDcqvB",
  "key19": "4e8ToBQfYFVews5wdCHrcaToe3k5PRHmKn83698W1HVPmPhJEy6AcYhBSq7ohpwdFUyyDPHUzQRJmxo9Z5r7Pu9d",
  "key20": "63kak7n4jcKkENygofKo5NtQShcRZfD9PSYm3c6etmudXhzi2xH273fhrojvB1HJtfyZtEHaX6XEWRnauWZVL7Ct",
  "key21": "rpysiNguEGZ3krfXCP2sDCQS7VZbr2V6XjjF6D3XBG6pzMoybshQCYhLpE8chcwj3NSRvVHN4qdZVoH4TS3ajKy",
  "key22": "2cALkNyrXMFRpyYZBg5uypWYQrHXnu5wqQ5FtChuSQQr46iPD5DHRZmsPGPxhd9W5MdcLQjLoUj885XA7GoLeoSg",
  "key23": "5TzSGV5PgYEyiEjnu7gS1KitX5NTBwV3kfuW4SGDFqWYhSFBGETAko4wpq41NqZpxc3jwNpXdJjwy1BmgGPbftsC",
  "key24": "4oJ8YmLkdaa6NLjVGZJWjxC5c6vcg2SW9C8RCBXwRXfaNA5SSHWEobPzs3uwTjnAPxhuj8P3N9m52PDksRu9857B",
  "key25": "46LdeLkUbR3PfVfxyj4ds8E2h7VDyuaP6wwdXUp6jRKMFtwKC8b79JSt7G3zNF2poMWZkdXhaetpmmqnpe4FL7e7",
  "key26": "3p4WourZYR93SgM1kqeBjRFW8Rxiy9sMPo5J8H1tJw4z1bSExFoMQ4AzZkvDpz9sfg6BnkA9hQfZxF22FgBN1TCc",
  "key27": "3UJ6GBZMKkp2t5sLgTFBFQt5Ld4Mgycw9Xb73b2Kk7y1veYcbfF9Xqh84Svfeb7pm4vHG3vBnQAAGCyozD21skh7",
  "key28": "GyZYC2DwSuy8FGMfhN1WBFFmF815iw8Pp345La5JkdFtw5AqHp2SsJax5s8aEBb8pf1VHJJxzAgBTxRoYhCJZ2k",
  "key29": "5NoeAFQjRmriqwDKjZf9L2jp4B3WVWyHvTWakp7w4iswu9mQ9cNHeReHyvZ76G1PGqx76iUhfJAqACVvbDDetG7",
  "key30": "uUA7s9sNteZmofq27jKt11bJ6SdxgrkdUebsHTdAaNu2Z2CXcfx9PJjdAE21wMUvpntN47CzNeznESMyK3XrczE",
  "key31": "4HXw86brScPBnP4trUgGPB8vvHzpQdx18fPVENQ3bQaRuihbytGG4xS5Ph4wVKNnzsPwhPC8VeC1yQxdDAEXtJb4",
  "key32": "2yA5WNWcmaWWvrJ5KUcbj8WkfGvYt8GG922FR5hbLbbR7MFxoGpfnS5i2bdgZum8qCqtys7AzgxmHmvfr2jqTpvb",
  "key33": "4SPfE2xUY1UM2Uimo3JVjduVQxFhTtzYGWhG2kPmzwLPEpqwWxYtLjm22pxvR5NZEGFLDSzcpqVMnksgfXho1sT9",
  "key34": "5JCrmkboy9qSjuiaM9kk1XeNqjmJymF4w4bMtdAAMuGkBSX9BAxY7ZBQZjWAMWWsvPXtpWX1sXB4zh6VQwmFTC9G",
  "key35": "4T86qYLt8JqTWYxeLFZ81YNVRs2Wa8PCwXwftdkxHeiFSeHGfLUwk8xyFoDe5WE8seZza9GkEjxwEay42aqTJ8c8",
  "key36": "jyAQYEpzaaJ3DntMoGQJgvdRZj4tEPyvBF8X6tnq2XHP3dwaQGJF6hQqAZv6DFxoHMFVsoFPLkQR9LW89Bm7hbN"
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
