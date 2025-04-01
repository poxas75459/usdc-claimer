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
    "2Wz9RiRbJixhNfB76VL6vVPpxwuoDJjML7p5RX5DRku7GEpXE71pjNCTnL6Xypp8sJ7cN3D8ekyfik3yxTMUPsTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSyFhajb6WgzNm7EUcMJmVQhThixfwK4PNGsVS6gx2W9fAZZy5ZCA6FhQbDXWZtdFf6J4dCw3CsxcJBHTj2J8Qt",
  "key1": "DZiZ9tcZP9QM5KEB4FypQSPB8ujgRhNzbh1jwQmWdiunDGB9P9X9KT4ozBVqk9tbJCpwjY6bFUfFqJZR4ddEZBX",
  "key2": "5xG7YCg6BQEbjSJ9KDkmpXRqqGybGeKdroeTBMDydQZZyBZKYceoBGpyH7NrkkT5smstgLtB8ouAe1fhtWBoq99v",
  "key3": "2yZUW3ZEscuDkNgrN9it22y8F3WLUVdULGnz5PsYCq7ZsS2tWAHUJFZ166pHRUrgBPxvsYWs6UB3mrQaD64JsFwj",
  "key4": "5LHKWoxogZvPevK4pJuiihyNDZEcJEwtiBDUZXtkpo9bbSK4u13EwU4ws5DMPNPrHp4ggRfD4TvD1Ddqu9vUDGzX",
  "key5": "2RjXoh9FA1KC4CYyUV673D4SgGBaRJkeqdFbmqXg8WP532UasKqRntJ694kKEegbVrmtkE9QWoRECd7hi9jFPhHx",
  "key6": "3k3LovCx9SbZyqTXUWuhpzutXQ7MpEVmSwFQGXnaSVsesFogdvfqr8RzBkTuAP4GSyrYYQioqprMKpmJnwN5mpL3",
  "key7": "jE3698GzTwUMeAwD4o87pWa2rjeCAAc9fh9qrygxSPr2arWr7dQuKMzfAvebtrdYV56DQsinUwrLoj5tQFH21HJ",
  "key8": "RiUCUUPemvC7LmCNSnGfBBeQauY3WuhPLoHXveTNPXh7r8d1pvmRFAh21o3mjDz1Dvh9ugJ2FvmSrEKuDeQh47H",
  "key9": "4FnBSe2VsCrUc8SLQvH932j2pkCYzfkkzVqy5MgxKGMvCAeZFWbqPFbxj9QnqrTGN9bwcD3RbrfddXZqBZhHGuNp",
  "key10": "2ouz9C3J7ic8WkWy4bppVZFfYwtw5q3trBZoFyrovPTxFGLSuKTQK3YnshUTmX1g5Bm3pu2gaUyHZJ54yxCbzTEJ",
  "key11": "46WR6Dfn4aVsiDRewBV6piQc7fADJ7dTX4JqXRudK2AvQ8nw6vVfbA6hgNc9HE8bdPAvRyQxnQgCeZhwVWYjBobm",
  "key12": "yA5KbZR2iH2MKvU8tbton8zeY1anu17dw2xxn5s1LV4jUibksxvcxWPdKJ532YkG3QGvjoiTxrGf8k5gtfza9jj",
  "key13": "3SMiCVBttLQdHTTXEdfvRbY4bKPFNuan7fPHAyXWKFCzn3pV3wTHme5KDSZt7ZVhYb9UPFtuvYCXFFCxyeN33jyC",
  "key14": "4HAm8eoVEautBFFBiTy49LZYmmEaKNEwRyR3RFLDETFgy7hfuRFQEBGgNmauCaayHABPmJ5NUkqtczoYZui8fVgh",
  "key15": "5NBR8WbYEseXXdsq5sD5m5EJbPfYquniwj17Y9ZtxCbXWVU8xKFLdBNB7xY8oCt4n49iekTEigKCCDDTZHKjGQaw",
  "key16": "3iF94MRrJCkpUDPiWXPDz9QYZuy6Vt3AfkgS8z7FrFkHrf73ZvdpMdCf2mxLbuupz2FPgZRCk29ojU5kenhgRW4S",
  "key17": "5DS47QedRkcCKja7ZpP2bTGAcBnmR3iUe6w3uFdV5x9v72GM2ZeJShZf4ydPu8U6euoLEvSyXESSXKq5E6vV6dqD",
  "key18": "3pcYpgkiUX74mYKCzs78y2jszPGG9JTudv8bXKowhkBTAvt89vesDqCQaxYuhjwzjvRePrAmcF9BEx4B9k1s1HPb",
  "key19": "5wzwdWkRYh1WsS3XdoTudoJvayXiz8e8WWML72ovR3EcFnisZnkyWwuXgv9guKMnzN29pq4o3y9LYAUTXCBnuyNs",
  "key20": "5SvYNZsxsoFXCKnTjn7qWrduaRKoJQMmbqfJh2dywVRWtZiTFJw86K8B8zvJc1kxwZktEJs75LZA7VNKiiLdoTvU",
  "key21": "5ZB4sbqaWhvzsfu1G7hmp7g8mCMoAkR1uRVK31Nz2YYKd5zsU1xjpXH8qbXVCoxfZNnJQBH2W8CjjiEp8pJmxjw8",
  "key22": "48Vuxg3Zgt4UtNBSxKoS5zWyCPG87aZ8MamnknS8qc4aKbLVd3JJtzeDPxPx4SxUpJy9nxKC9HNQP6EUQG6kx8FN",
  "key23": "3jUi8gosPYaE1FSw1RbqHgzrHdsrCT8GXXtx3EYH7VCCyG45e1AQq7uu9sqfywNN5j72Z2LHSyWirG3nEXctjt9J",
  "key24": "4WyBgcZu4R8EsKLba8aj44EMUYid1WRczgwf3osejwZu5sStX3CgpjcGiuJmCRygr21JCweytByhgK43YQDEHgES",
  "key25": "3VV1FqSw3eMsnKd18ehcJQLLSTw9Ys8hh1G6NzjHYhZa98GWRZvLULZ6fBreSrNMhFn6ZGr8ngED2LEfbcBVv7gc",
  "key26": "3z6xLw9JtmPZTuTFYVvCjrYCzEuv8FpXMV7XqrSvmRUhohwuHnXgvJTxMGei5ehEgsydMcEBqgiAALF3cZQ2QqpL",
  "key27": "5RPWE5smDvbHYtmNK9tLw1dZNNvua58ZudYpEFco7pW5gubH6wcTq9FycqdST3m2AFapdg9jVq9Ga6vFnL6ruPpn",
  "key28": "2ukPeeqUXbMeaBpKZAwdqM1ZDmETCTdLxMHHB6kH4svDykokS8ALVFpTkV8yLNepFeHYJ8BHe4gvoET97sP6UY2N",
  "key29": "48FCmxqyTWLN7wbPJv8Ax9gZrorcWcYHM76qPk52n61VMVUM1kWbmRhjmcA4o8zeiQv3hgPD3tK9mUGGzr2gWUVm",
  "key30": "65MyyKVcifWDfQUbv7QLNjYrmXfKq6zP5UK9r5a7kVXPQQHKAKTgXfDzXCJBtjAy5VPuwbDhXpUEKN7WgNoEH36q",
  "key31": "32qcM7iUi4DP2JjLzLrnC3efdotR2oPEzexmaxyXtpoxPjr9gbc84CmJB7GxVGFxcQ7MCFEM5mzuz5FgNV5ajYQZ",
  "key32": "56gZdnFKgpDnaJuNpVvtLTQ4NE1rqRGwxQhzRYDrmuWTW72Q5imUKgp5DpaHQtDnDYyqEK6FCypnVb67DJURJTxW",
  "key33": "4SBdS6Z9RpqZxKZFAB4WHwL2ZHKdfJdK49xpm8W3cTiXexCrPXeuDN3pG1y6iQKSwfzyewEbakcKsFTcdEvgAT8d",
  "key34": "3LXaGRv9kbh28W7GbMGryzAFWf4yPUt1mDocBeQCMAwq4Pn7yboetMnqYTdAv5S4FYgUAuszkv9J3bQw5PNdPguK",
  "key35": "6hqEGPBa633NHCmaJ5ZPGQWBRfSzA1TqK9P9psCVmKknKwDYdQW6t2XUwVzQhJf9CfRwsPcymF2iYvGM6dB6VY3",
  "key36": "c2N4Ksv4t2HtzXTDid38VRQQKn2Ahc9FdhvSH1UHpJaaYt4SJYAft6WJMzQJveNjirRD8ynLvbVnYwAZvEK3LHg",
  "key37": "2FDK79WUk27nfqLLUuLh3X3xheUEYm9wT3WcUoueiWpNXMuRCYzKYC7qKLizseM4DFfM2Yj5zuVpqBzosDLWrjsm",
  "key38": "enCjjPYHpyS7X59Mewj2tasysVsS1D7K9CaXWtFMqdvzDKoE2jMjbwA3MvoV5oVEprqtr664hQQS43grZAouycu",
  "key39": "McDMrSsXSS52sTYPwres119f7XDzyRbCGkNtHD2d6TK2ihsFeBRx9xGkpRgsXTW1bqAqZYoKZaYDwYk73RWDZdt",
  "key40": "27VdRBzb91B5YmXv13A3JMDCw7GGr8DEjY8AVDnDFrP4RpsFyTbY5pEKQ38tWp3bxVsqSZvx6pSCuqiBLnvPM18U",
  "key41": "4AqxDdf5XvUkoaJXZ4oBoq6scX8Rka847DYqtZZE1fMZiuh2KuhoeW6LdL9ZXQcwtQqmjtf4LHGcYTPmcDbpJQVe",
  "key42": "3phpsXxTr7bGdPnWg2VG7pm1tQW6Y1DtWQp1DQV6aosV2ZkErKWCr45nqZNCswvjcBX6MNHjMqkbTDbHj4NSse5Y",
  "key43": "62qmhe9vQgWQKob7pMpQqpoBd5djCMLYS4ZMky2wicQjggZay6KTavsH7QbTX745RpFGfqurJcSXU4RkJ83x78cT",
  "key44": "43etBLwYMBwwd5aebhsfzRYi3crThuwZHStmtoiD78nrND6AZDU9Y23YwguaANGrfSoUSUacgFy8wQEc6vLMJY2i",
  "key45": "52xcRmzRDXYptHD1TYYGJj12sAG5hngu6pfPiZB7mXnug1Z58pCzFWaqUpzm7em6Jj5PhUdTcL3mPBveKhvDLFqA",
  "key46": "2Ysdtvt81PDXq4z9ukTqx3AQhciVNUFpysmF131Zbgq224vN9WLA2F44XfsRmzbQEjxuFKYtXcWA9BTnt8eqdo8r",
  "key47": "5eKwBbM32TFFkCPyqhQjq4gVLerZP8xyeFBCdMimgLSgxCnAbuTbyW3cZsBAQ9YwCNBG6UocRqrCJv9T4XsfPyf8",
  "key48": "66BYeDrNJxqNVH9KcEfYFb2modLSwGZWkTkTicGdmJGH4UMBLd4QLwi3HuPs17vLqKEmYoWXFgGoNmT7Q1Fjx4yP",
  "key49": "2DtQA8HbzUSbLk9w8eNT6qkQVPiWkb1dizCatrzefcJfZ293cb1fsyBnQqZ4R2CNSJ5B5C2KW8b9aUzjFA7Zibfc"
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
