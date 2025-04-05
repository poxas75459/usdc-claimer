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
    "4drEKG4iY3ccUD7pcpf2zhSA5jshGNrpBKazvc9RJds18QHor95VLGmyrviyFpkcN6rzhZHS6vw444cZXdrAutpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gALW3BxgHRkXDiXc32kmQAsepZNsC8Z855csBQJ1JhCXgEb4YqxojvdH6DzRKHmo1j1uxYFjFSb3Rtz5k5EnsKY",
  "key1": "PCpFCey3frCksBQ1sADptqehxjMrdMKywVocUCs7anQvxjGLwbR5M9Lo3RuWoZwT8FXYW7PwsR8otswJef9spob",
  "key2": "365zau3coKDvBZTNE68LRigP2sCRRSEdxjNUf8RK84aXvd2obGeEBZaLtLRtC7CwwJFVQbMtAHSPs6Jye5wZ6CUc",
  "key3": "2QCwZBenYKDDjBdgyx15x7ZqzdyomE8MuQ5cKzp9jsDRvYxcPTHQ51Ez71ZPqK9zYxhrq6DnW1b59XqFXuxhEHER",
  "key4": "5kn1mwJcYHGWS8xZ6ALfNUNjcDx8W9RoCYGYW7FF2bkX3D24k7esNXtcyLoVcQGTLfJ9VxQHCp2Mrx9g1kc65oES",
  "key5": "g3S1D5fyrCMJafaDpsMcqMDLZdev6xs9CYvZhi74aLRKaKAfFZuvs9Xw83HTKCVCMKB41KV8K7k3rnbKqn82SEm",
  "key6": "2kZDNyF3XEuS6NxrLDLvN2Kc1dBCuuAD86yDKmSev5gerSZsQXYZg4M2nign1mhhQef3V9fB5Voup8YfSYSeY3cG",
  "key7": "2ZG1edqTzhqsHEHS6oZ2RadTjvz6XufD1NhuNkadRCd78cB3Zc1bya6ddzuVj2Rz3CbNCaby4MdvNe9UAiXnGPj9",
  "key8": "4pdH5H9jEu1JxdZxH35RnxGRDx3w2dYHVG3XeGWVeRRxSHmZc7xAYR9SaPsvJtjjaAtCvgmcTym5pGdB3qCQ2eNq",
  "key9": "5BHbTiJ99UYGp4QGyjpRGATkBBpznduSm2uss8oDsEXopMTvwYqLjbp6fPkMcQCSaTUMsrNUc1yncGnFsE3KoZFk",
  "key10": "3sbZv5ZpbzgeihTGvE8UsLh13ZbEndbTZ8ooCHjb5d7MxwNdmHDy3qHCrhimpkTqaBC5puAWoxQDYY6FnYn6LEjZ",
  "key11": "23QtcfLiHKuraHXkpSVoTsm3tortpbTsFpRpmsMNmaVxH5t6HBwp6HYNiWmekAFLG4XkcgJwn6PJR2an1R8d8Ftx",
  "key12": "27ZshoirxfY3yDhCbgA3UiXFUdX84XKUpPs1F9j9Ne7NdksDBid6WbxHY7gCRTCM5aNjkZC7zYx31DwYz3xazM7W",
  "key13": "5rtVnBJwMrKT9aCV2Ct7YnJYY4fKc7rt338fiTWjtLAfdqFhEQuPB9vHuJW56NN3CJCgQPWV62PF3vqTcC5TFbXC",
  "key14": "5jYE9wdfXa6AwamxMbhq7xpVtxUdNUpJQDyUvAxEiyarC9MRdFrXX5TZAZ1Nvzy5aMHgoHh27tJwyfx4FsRp6Xey",
  "key15": "5W1qxyq4Sc2HEBUifHdGFzBE4PiEw7SbDvZQPje3Kr65AYqGLTf7zRj3ZQVueXLBYVdsLziN2rAvTfzxVsfNzxHc",
  "key16": "XdpRvsWgNSUEe4FkCmSJmGbxQf5AA2K1yDH7AyU78ohsHDdpykKe7bx2PBcjK1rWeTQjXyMSAr4BVotmNrKjv5a",
  "key17": "2iAkpVX2HimAEpkLmtWkddwJuXGABW9ZCWHhBZw3trzNCX8mhRfHCfXo245oGVViuqW3nWRkfSM76gKAmWJ4D5KL",
  "key18": "3WT5NEGYMQhWdmnY8Wceft7VvgYpCroW9YxN4HZ7HRFzFQSRG4EmGyga1C5zccmN18fRiyvcUP5SBTP5CwUbcUBe",
  "key19": "34BoT9onidb9V64uisGqVL6KUnrVc4mFqJAyK5Nfbjk7ReJXYTHfMg5ENtK27D9Wo8dDpm4XBv4SYiESLo1MPPtJ",
  "key20": "3dsPuTUqVMDz7MLEdJK9qjrhpC19YBp6yRjQ2nyAPUs3khMYPQpMsYBQr9ZeAaQXX2ihZLzCoVPxKu4SeV6iGoLJ",
  "key21": "38VvefzfC9j66JehG2BxxpbB9JQd9Fnu1Ym7aX64GCwFdBhk3DumqUfK9Qybyp9addHAUgyE2XgvRgS3mCDg74F6",
  "key22": "4o6GGyUhXB2QFVv4KQvCGimfdEEeGPF6Z1324RMMdPV2C6ttXY3hKVGVE2jUT78bV5M3Ldn3cQhgwwbWUWngAEgu",
  "key23": "b4ViHh4yjLyg8myZLr23kFwiTTYjFkbPjjWjy6abtHD1n6JTUSHTXK8vs9ESHQ4YsYs6UbtuLT8Z25KGsSuHetw",
  "key24": "2oyq5DdokV2jRh6mDzNP8Mt2vnLNJGSjLyqaxVi1y3wjmPe456RLkSQT978Jjd1Yan585ps96ezDskth1y7vFnBY",
  "key25": "4Dn4Fq6uWa9XyCDy3BkZhxATX45HMB96odnVA9zvDxj9etwVX9kXog5AvTxmTaz5npbT4ALWya7Rpi1WZSdhhvTh",
  "key26": "5ZN7gqooWfgosQTpbtHHCAPJbPya5S3fSHYRCcxLnWYTw3VzKA6ea9HjP9x3qZ49anvkjACXReo8axuBB2rZdQRz",
  "key27": "BF1MKQMQd9Msh7JJ8pPpzmQc18aXrJLMZrifQiDkJ9nBR9jKA4NA4Ff67fjE9Bu5sezGamZ1T5NKRaWNpbdXD6W",
  "key28": "4yVUPFAUQA6A6uXvUW4bwBArN8mpEqYqk4AM8B1v5AxkgBLmpvxZrsj3JQ22f5R86QdKYYqnjxSWm1CQECCGpMkB",
  "key29": "2PLMMueD2nPRZBgK5dSgDYmYUNqjW48ubyHGRAZZtEYFhWHofG6R2zCNWNMnBEEhMCQtZQVNgSnjrzjWvkGz7thX",
  "key30": "3Svp9CARPZKvEqwv3jGRHNfNqbyoUqv4acAwgTT5FWo3fHVgh6PwfMKXEhpcCRhtPW9snzYoHvxM2Ve5CPHZPbhp",
  "key31": "5cZrCXPujxBrHa2akbGSHbC3aztYS1MrbeTB1iCufvHWEi56kvnUpgwHpB5AdzMMZ2aB7yx4yeQ57Vtw5iXbJtpm",
  "key32": "2saAw4L9LXTqcupVojeTLEt3qo67aNpMRK6D9pRmuZwduyxR4XUAKf5bjt9aQepX3dGuRd48J9e389fHb959xDLm",
  "key33": "67W9k3jSBQfx41ZzZMkrS4vTXauhHRATPMQnibyWfZXWpCeqBFdsFtNHvYHXePmU7ud3T1NP5dmRtnenhjt5ceUm",
  "key34": "AnrRLPQtLQfZGvxzWiGzxS7bbU11B4VXFgJUoDtX8MGmqNf4HHJzkeoSa6BtjFZkA5UMQQcmdMfGiYFkPpHi3KP",
  "key35": "UNNokgjgnrZjeT69vqj7TdAtHuejrTfuBiBA28VVMVvH9pFBDpPyubYRZwL2yURE6YpbLGxStJLwjj3PuNwAohn",
  "key36": "35K45CsxiyoJewiQCqfAhb9ZMRgDjqT4wKanQvbSFaWgMvyio132hRwpB6uphZbY5L8np4rLProMtL6ZypQTYrCk",
  "key37": "5nDdiJqZfFaAx53vnotK3Wa6ikiivNLxWNg3ohkNg6crj1LWcqXMs6abwAaR5PYV7Kx6kDyTFjQ15xSJ215RFv6k",
  "key38": "5BG8rVbHooxucvuVqtUaYVFHo4pzxYnko9t1oSomuoYs8kehZdxMsiX9q6a1QWG8V5LDJS7Qv2qNSruoouEUKYhw",
  "key39": "45KMuBdUx5NujkmNpBQFEAjdEy5x8bwr76dSHXGXXTxSL8PKmRn7LhtahaZxxbS8oCHEK3DAabgmadRuyVdb5H7X",
  "key40": "6GYtznKJjWcsXz6yF1YVYRvKZWGofr9AExN49H8HvWKgHvN2PDX8K5sKy9e5yoibZwj4ERXRekP23BCqwAs5uFd",
  "key41": "5iNFdzfQ6rMenL9SV1fMKAB4XiDPs5Az5Z1UcwVBLxcBQN1E7UZUPEBj4yzBcgYPxjb8KsgA96BhVNajnRkqDXov",
  "key42": "2f2L3qQ7nyH6nRtdnWWZvPeCV7X5Ya2mYqMidSSGUQAQ5b2Y1zrSRTKYv68zPFgSZVZGK7NdgY7ir7zHJvZvveyG",
  "key43": "5xL5gijXw99XyaXNwqtuLNTRiy5xhEA7YoUz2i4AAaTLkTKEjDmpYLB6qK4nhuk3qxQp64tovYzk8ALhaECXiEom",
  "key44": "4iioCS2EZZXd2gdUYsiRe25ZNjPyCeDTGqWvTWkad1K396thhKDK4GwouotFSWpkkGQdM55opsaRAkMdYaoQRpBz",
  "key45": "3gEhgwSqkissN7MkcK5mXBVAc2vNwXBqo6M57UZ5v3AykdbYB9op6dP7aNSBBaGHn1vFnvdwGhdUUDHDuvu7rpER",
  "key46": "SRNzLKrPDMjvKpkvL7gDzVXFPxmTZLAybhEdhtioKQ6x2CBmBdtPE3vfXHBPwJgbzTnAFgHmNCUHHrAsBbxJWkL",
  "key47": "5hJw8dGLAtq6EPg6Qsk9VPL4f2wfer4aGwQaYZi8usGD12LegCSfLGsHgUF2Af4BCBoanVCR4C224oDAqjjwkxBp"
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
