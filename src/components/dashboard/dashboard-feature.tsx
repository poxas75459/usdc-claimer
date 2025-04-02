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
    "3QUKEb1SrF69EpHNMozNgEt33jHyiPGdrxnsaFstetFPx4A3rvA54PRgC8bTyNmDEUZskTAwVc6F8M2358i2EewJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPnDpKmuKjxQKWFCRjekF4JKdun9fveHxPCJ234PB7e7TFpYj6SJhrNeyWBm7aMmXGVgLgj5u6mZaFhfKNRe3KZ",
  "key1": "7iunRBYKL7M8fwBpLwUCYWebYxvfjkw7jTVaPD6F9bZxrjQoSR5sEvBgyKhgybNEry4C1Fr3vjFfqefo91cvyo4",
  "key2": "3j84f51wVg4oxG9LYJWaGrCMHMtR3V1v576cnQwDTcVxcNhH1Cq2PgSktYEbbFPkTUhdsL5YAJy8muNzqq2USmE9",
  "key3": "3Gohsc4NqKqxs7mRZXLv97mcvewCkakeiqmThhUTxEpuFLKtmzRPACSi8cPYNSRLg3kQ9CWcxLYKzYSVa6SEK8hF",
  "key4": "2bQYycSeis4erLfGrL82p9DCBVxzuTPW6Z12kGi5Ds8DCnfsYf8vdZLoqLPw6VURKXSr5A7fsXH3fbmm5EvFPdDd",
  "key5": "3Crwbx4NTvEke4LvsUqPFwgfSfniaRPDJ9cfwXxP15toGPKSGUvEZ8Z9YZrXFQs1xZgzMArvuGsGenP42nrZim4E",
  "key6": "2xLLRzCE5nHAcJzdyPraKrHLaYckUotGmhjrF2cdcHMqBCL1xMYLxYKb2tEXZJJ6gpjVZNAMD1NAinfoEVSY7UAM",
  "key7": "5vAbuAZ2K2yZgqNf1StBjwY4NVvK3i1Zo5BHTHL8ikXUR1sEtHtBUumyzKtrv9TWrD6EHFqrzoFFiSf6jnRvnRi2",
  "key8": "j11soVdqyRaYm7v23rJUQX68iE7RzrzDdzUH1UkrSuGYYjvD8WkTCGAWj2qg2QA9qs49QNPKSyKGAtCgsy1AXaW",
  "key9": "2xXNYkp5GnCWHSbVozLFVTnB8QCExKgQMztD8eeYxkjwxp9k7kr4p6fvkANqkACXZqAmvQEmz5bBNueDhqL6VwDq",
  "key10": "2hPfj6ZKokito1jEk7GG2P6NfSgfZMZvf9n1Qg6ZJKr7P3xuQWQ9RVgrS15i6vwT5ezjp4JWbzZgHxzJgkuvWwC6",
  "key11": "4zLCrRbFgNr9t4PfNvj9DBWtti51ETsDv88q95aMwkqFkHyYbDF6ddjWUo3jrB1cWfTQiCq4x6pBy4nWQYocgkuy",
  "key12": "5Y1AD2kwyGPXVtiRnYt5p3Jfoofudoj11K9egjHEJYs3BwKyUyS6QC6wU35pjP8UiXkXDcitdHFqHHpN2CotTS4S",
  "key13": "KFG7UsAmhYbP9eWfBKEWXmkTyARPRXhZ5obMfpLnqccwh7oUKRb4t69weSVGFSYT3Wp43WY3vnvbbcmAvAvQ5Au",
  "key14": "5hzRTmkzXjU8dYmXhhkHbKbSuWHqs51ZxGaGLBfaYWezBFiLhCQAXigfTT7SYmQofa4XTsBZNp9SR67uXY9s99yc",
  "key15": "2pBLcqwv4XFeRGrUw15rfWYaqeuev8WX2EtQ6kHbdDRnHz97VYr3pDsy2sDADXdXywoCL8sPSchkRHGuS6JYKCPQ",
  "key16": "4pdUV7XVVtirZTsFTKeadh24RxuCtTqDDY5jXWrhkfKiJ25fCzPBcu6kPBbJVhC7CJZXLQ2dxQoz1aYZuxXFpUgc",
  "key17": "2k6pckoCxxnbXKFVVHiciTCvkGK29Vug6ieNw45SQdzyetAb4Q9bXUyJkQTVwrRnZLwKdGudN68eXJeCjK8FDSBo",
  "key18": "2H7qsEQJ4QADKHsfZoi292iB44PEvyUTgPo68SucjMzBu6DGk7htjU4tFPKiQmjdyqv5CeiMoJsYSx8sfePxrmHJ",
  "key19": "5WRExh2KeUqXZkzUHM95UzJse8tw6Q1hiZXPCgmt2oaMtnku7DqnYxr5e6nbCqF4WPaEhNQS6AiG95YULoZbbUPz",
  "key20": "2rg727wUg9s26af2bZuj7sCT4r7tKNFJP6kCpTq5spGkYaD46uM7gG8W2oe35Hc8AmW6EnRFP7BJtDNGFNfVz7EZ",
  "key21": "BaKE3yMNfCbDc7DZU7uwaSnEZHSMCkHvAkomMW9rCunuHtb3BoytSZqjhHLjQ35St6LBvi7iwe1aCFZDTYkADi9",
  "key22": "3RqixGvZkBuJTZVaCG1VsZCKha3iQ4DFzoCq58GsgbuuY9c2WEkX7Hk1YhMug7wi9dZF72nGR71uiSTMmekuobge",
  "key23": "5cxiB2hpWziZUiw4TgfPesM3Dq8XXP2bvgC7Uy4SyDqayLG5zScyHKs7zaivjRBeRxvMSwQPZMTXQS8wkxyNySwr",
  "key24": "5PbBSoedGFD16cxjrC7Tv3XyUY4nfXWbyeLWadgAaabP2yo3vmqGHVaMZ9btg3KGTZ2PesKz4WRGUeLL8gkJQbWv",
  "key25": "3XK6NUB7Me7MzSdJ6V5BAHBg7uvNyS8nNebf5Q9wHdTtV3tizc7EyD1sXy3ZntbXV7kSKpiMpsdXVdmTBgzaTnc8",
  "key26": "4jCTxvfKWMiPwR4g5wmyKwxJyy8TKBbeuZBgvig3nPY2D677hWJCtLsDZG8unUdwFn67sMt1GmoVjtmCMLC2zbMn",
  "key27": "454i1obQHkJdJJpYfiER6LHKXtbQuNCooFrvWx6pS4qUGSRy8KEHP1R6GHxUr1ZrK43jVaP11EsUzMC2v6WQdMYv",
  "key28": "3eU4PgVnzTFRHb5x3GfBMYHCD8PbueqjScMiui7NtNPk6hRbynALhZiGgNHtHUknABTFaFSh9ZsJG4DtL7juotTn",
  "key29": "5tWdj4twweedKj6vcwRHbZp38jaMTiBeiKWCu2M5AdiL3Jy9dmaTNRMZRhHVk5NugEmm6cvo7FLs3QT5nFwbb982",
  "key30": "2FWriWquNmAKhbrqMVgAeKhi4wgEkn5Umpxv5Y3AtXMQuefuCcD1uJDbctrfUjRmTxxsVSCeA8dSf7Wp1KwCEPWP",
  "key31": "2q1rX9pYwNz5fAynCvHGba5EUcQLi37obLRFKoNRMKwYY6rMc3Y1KPsTRWBa8h7XsyaBAutzKcYnWF9KUJFVXu12",
  "key32": "44etSV5pCoPVS9aNZwadivgGgzqvC3BU6trKnXUj85zntR2oFLoH74R5Yat88q8Cz495PTLw3H2EvjgwVGiXZMng",
  "key33": "3WLL5Zsg6AeZf3dBUC6hXH5LGHuJCcbEmTrgvz28TdK1RHUdYrbmw6ny2dYNzKHcDpc5xvQoBaH97jaWvjxbNJFy",
  "key34": "4j75XpWBuhtm9wxCAnf7ZKPELASj8oJwdUfAUeLmeUJUkDUZQWBX3eH9kG2g91WFD2tdakCcYPJ62Pq4ZXZXpPRo",
  "key35": "56wQnC695Gz7RnMDqZ4vbxbvAgdo8P6YF3Y5qnEEKFsjePyKYa4aEqmvHHzSmQEwGSoPTVsz4hZFy19FwHMfhWE6",
  "key36": "5PsnzGAoesX8KfV51Wss2Jxiq9qKX8hfTM2cWNiMM9edbeXemg5GNXw3jbxLgFzbNRJJCAofmTdQfzb4nzPgXL7f",
  "key37": "4HKQZCoqF4MgtG7bEYPECMW5xou59YHbq3F6bGb4yd9YcfHSCuuCGYmTxtHeKGw563TebfZ24Yt6n1FpZjrTDYxs",
  "key38": "HPNnaHj4QR7BJpTPZJC4D8qT6k7uaFSrTjiSXahHU6xcnf84qLLDgFm6Z7GMV6vNtdUM2c3HVBFyNV7NQbfQadq",
  "key39": "3HpbRnkVjNjLpwXtYpTKKToeGjfBP7BaKHVKXhEPRdYp9vr7p2MBWmDqYWWa6BEzxiGfyUbEoM3YrGeMVErFtyay",
  "key40": "36qSrK3YvtmJsUXq9pvq6aaQJvQjCa2LNUHMpvTVke5rQvukASkQ6T893VgS8Z8AGS2qjRuZ7gmLNKaeH6gwAc9r",
  "key41": "396nR3c6KXssjrbb4uqy6sPeKqVvyKyYYJGsmrSUZuBw6zhmEgSEwhNEugcP7Fyg1dMgrQ6RabarKe5y1QHnGbBC",
  "key42": "2T2ZNSMfWhJueewjcmKcT8Af8jtxKHsRRNhR98g6NeSo3JgN1wz81268JwRTnXnAhao3WmSY6o6mJLHjcAhSsUBb",
  "key43": "5Z7udPpLGKB8S4pfSPgh9zNE263xMEMMYquKp4L4VkcY2EaAmMZ95VdDunYDvmK1x1Ta1YExQ3wgFH7vpE5TGCWr",
  "key44": "hwMM2XrxWGoPBoom22pjqKBNbXzd1mJDU7rv38mRX2U4iZktwVfjjo29kxAgjhjbn7KTFroARu2sfdrNdEqozKz",
  "key45": "2cyudkrzC5ueMr5bCbiEd57gbF7tntxFSaHZG5TKD7Km5ttaDc3tE1efYFa4SKStbd8ksPoSpwLBQiFsDBJ5cwNb",
  "key46": "2zXy4kevQY3Rj3pxkhFiUZiW8dehkZUjdJH21yT98XmptHqjP4iEJk9BEuLN5mRxVZim3R7h9Av63yepsQn8Tbfu",
  "key47": "CN9hKjZffZtnmXRsbvdxcwPb9Pw3d5Tai2rNDCpkgmGHsGbhVJvg4oqUYFY93G5N7s3UaK9AA35khBLFmcifFo5",
  "key48": "3j9hppsXT1TuuFVcWajjuWHJpsg9neo2tzCcoXaNvMQvCoZdts2MptzKsVLEm4sAYGmSJ6KPwmjJ198Fd21DNFS1",
  "key49": "3xHCEpW4pv1GBM83d9XguRioSRVWFqH52zATthusZmg2sdrbucMamr5aSgcmxrU2g5xyAMNRA4xNCbAouCDxnrM1"
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
