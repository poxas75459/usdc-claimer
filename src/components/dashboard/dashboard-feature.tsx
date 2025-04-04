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
    "ZRQC5EGiECYLnJoXVYHNZUkZT2wNDPWAcdywF3Yi7SDLrceFmHc5Nc39vVQ67sN9WyeEHtUkYFQygPeG5yh1tsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avHBccojjUm5mJMrGrLCWoLhVCKvcifmWdMxSSATeeAt2QBCNtyyuqDiP1XTsjvuAooL783HKQBRTz5fwCCpt2F",
  "key1": "yLoC2WckovwuHjtq6bJijM8y2hG6r2wUmuDznJJBhwjwmaRQiCZ1AZRbYW5uW2u7Hz8DG9yNLFd5GJ1dUV6Ya7Z",
  "key2": "3t5Fzu8udS6Wj8n6XULUdTpSACQ8DPngjRefxqBJkCeZJuXLQj4No3niT1sQ7c8VqGm3NwuxqER4zV4hR2HK3mGP",
  "key3": "4wpa3zrThCwRXVtoYS1mECTCkbE88Htz4nnasKUq2czRMgDHNSLGPhJuqMfibs2gYJrwf2uUsrbGsrXYQrFK2tRc",
  "key4": "3Dh7tGLPVBCfNpKZHTQNdwfr4avyrf8gzcMMFPoKvDiD1kvj6NQu61XBivJUoy1bufHoeSNqxVibHxAa2GGF1n5C",
  "key5": "4qYXiGnEXM9YqSpVBovajPZrmXoV2LNSWGMpLjWQaybgfw9gtfpoR7Fa8tpg9XPmkMsCfQFyBw9TMBiLMGMjFCGy",
  "key6": "4U6KnxF2eJRH9G9KShY68cUQ2UpNMM8QZAnhznABySbH9GkruVSWvvEFt37R3CYtS1RhX7MZiubSaWhvU9mRumCK",
  "key7": "4ciYvmgt1FZZ1fiSjH8MzyifSCwFFgYpccZgSmUq5MBTaSbmmxEcSQK6M9SvWf1jG4Ut7Cwo6shP7zhNd6THYbz8",
  "key8": "FoueUANYs6HHBwVv1jcqnqzdHuGAwwcVvQ9YB8BPU5PymkkMG7hEgxvUPwLaXzZH1CzBhtFZrdQ71CSRFrdvyXg",
  "key9": "LWpXi4sxiv2N5FWWyBBRmHrPbYfVLcTnGoBeDwEfdEjYL3foWDz4RCsB4Z9egBZeHE37U3AbKRj4N5cGUqfm528",
  "key10": "4aYc7FyS1zfNE75jFxUFSUhDpvnzKsQanty9vp3SHXyDp7TTqDHAutgABMrvT9oMZ3DQzJ7FyuCqw37gizy1o9RJ",
  "key11": "56YTWg9YiTmM71iYWz4PZPMDY1tBbHzVnF5oZMArcnnNV8utJYqiS5mCdvirVGJMWUDdMctK72nKeKvm3JDetRHn",
  "key12": "3w2GtyBhgcLPB61dso4KE3kRrhjitWxkfr3aTJRkhmZCEFRNB5gpEQmnDxFwrEa7uuw3zM7QzZ4axjQD18JPE45L",
  "key13": "4YVjcmnQBh2ux7fWMJcfB2WRmaBBr5Pxq2e5gCMpqbXLHiXApxEg8fZDgszRs4sgpNGw6LJiKkkPWxtMCswuJixc",
  "key14": "3mGCfjBtYrpFJR8xC2hpfZnjFBTJMpB7SwvaNcZL8q9sQFCovCo9e4MXcYdfxB1evMnaykF23ba3KxDbCFmFRA4e",
  "key15": "vK7B5mkdEsHRzzYWiGSp4SZiPJbwnAgz4hW6Pa24eRfc192fCUwu2M2PCguHpojM9AbJRYX9UqG3ahRv4Dkc6Uc",
  "key16": "4YDBnjjNZcAaDmKrCJAgioNFGmQJcyyAJ3KMYPryR5yZ6XbPFKkqgDogafteDXhhUa8knMVm4grcuyBzErmhGxSr",
  "key17": "47mgyRUgmPn8vU28XBtHrtwbXdzpemMESsknDgqUQ5kh6cDsUjMuduwhZNez1bBbmbUkGZ7K1XvAUA5WSt1DWXtS",
  "key18": "22shRsygkQQFfTTLSEwzyasBEMhQC2UdKZwX3uyApyXYFGyZkkJD6TmgLPHSVusV3Hvy4nydUrVRhwq896D7oh7g",
  "key19": "61MRWDgHrVk7HtViyC8vJt1LDdGDpfLzCXwEVbhtjmjR6wR4SnGNHpej1AS44DykXkGEwZG3qwDvJsgKzpx6BdHM",
  "key20": "5Ct2iwTqpacGQUczJ2TVgEqjzoM7WdomDPD6E5hRgxHaP5XNUMfi8LqutKXqdoqVhjTCk3dQj25Wb6UFGK2ybL6x",
  "key21": "Ybazs71DQjjcy8PwQjb5ryxoLUaYE8CEfgW6Ain61mYr56hLj8ttgcMJz1K2eEmqLEemwuNWpcwD3Zb5cv8CjMT",
  "key22": "PVsVA8JtighHHZR3rzwQHJXrPUPf8xiAn2XPu8AVyvFudAZ5qaqXPjuVh394DvH7HQA9sciwnVxU99dfLybYr5F",
  "key23": "CLs62p8pwfhf54ozY8iAF4ijRNt2HgjLAkkhgGvPZdoF4iT8PXotUGXWu4j7JvVLxbdigubMGHvBVWAUtQ4TLj4",
  "key24": "PPgUmF69ZmGK8vJoNdnZAUcrnpWE9hAxo2Eo2DgNo46NeUiuAheehRPfCk3Db8aP8CCDkfWp41CdHpEc7VSRHHf",
  "key25": "qRSiNsGWHfWL3KB6hJ2xPzstTAgb64rC4pqjD7k2WMPjDHYPyFWchPdGTu9wi7WwiBumCDjT1XsbYUYphb9APLh",
  "key26": "3DNz5fdfGKxvBkaHQeJsDqSidS44VDCZCKVN1obKPx1uitq7mhQhpE92ruahP7yk1BWns7diGnMDRDCbSo8CW9UV",
  "key27": "4iUu5RRQJAej5oQxkExRZpfRGFMMtaevoC6sZv6pSj9xsQucuDvHmGpUWYPjLpSkS3C9rH7P3iB1ifHxbpnpmSeC",
  "key28": "3z2kJR83mdhgMSVu1LkMbqgJcCKYWgDpSF4sQxtc7tD5Xpfdg6BDFCxwGDqJGF2Bqz2F5EkRNdAvCAkfuNx8kEZQ",
  "key29": "5iBSAV24TjXPHgE4Ewo6ry2zihpcURfP3UiWJx4ANPVcshNmfr1oR4nZrQ3M8XWZaSF2xUjLHUTjf52Hforiq2Pg",
  "key30": "XEMct2zyHmwGdM2LVu2XeCcZP66JBia8z4x3W86NWx3TJTDxLo4ryE2Ux9NRtuHzzxLwtk4J9KMXRGhLdMG149J",
  "key31": "sAfhtogHNvXLYSFiN9jActYdC3hMwX7ZeJJoVNv7Rw3XTZZVAQZpEafRx2fe6ySRHoU2aqRtAMewmCAxwLWPra4",
  "key32": "4XFcAbwZtmGp8F94oHUkagN6WGRxhR4yjVLrpDgqgZHM7uJdTA8FCLq9jX68VMQyJ1GP1fbbm5r1RBp8SMizoUz7",
  "key33": "22ef8SkoCbkwsMdBM68ChnnuUvkXLH5XYmRjZBsRRPNTEmeVvj1Cq7zyqarN8FmSm9XUbk1GgEAeLHt1dN7HKkpp",
  "key34": "5DoALU4B4BQiWXQ8Jkn452vy5xaNuYugaVwjWG6aRn4Lf4J1RBEisnx1unfetFSAsnh6NZ179Qn2cxndssns6WVt"
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
