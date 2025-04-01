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
    "GY1cuUgyA5ddpyxUsppxAXmMXNCfK5as6nASmT1NTnhNQKchfz6BYim8udZaDKDwGN2idc7iJKMEwpcnko8URtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLG52YnHbs9LqPvMASj29e3tnRhwPEvCNWAo8NHuVenfYcVjNiGwXCkngZiiH4qmj6byDcjVru3j6GjUNSn7RJK",
  "key1": "4i7BKFJuKYVEteMdpG3Ux1mcBW2pt96zPDPbW5MFGkzSBorYZqAHaDZxnX77eSwur7XxrSjWJfpU4VRgDAQnsF1j",
  "key2": "2azcefpntxvFTSj9xLpdJq5MKBe8FyMLPK5P499j423UcXVa89dJRcCyHTEmeZGV4srNjS9nXFjce5H26meCRihb",
  "key3": "24xvjjDhUGFWjRnxvduBFs58e8UtrNDYTenHQvGBZGvyz3P6CmgxK2UbHUFAGbbBDEjTgwHs2nz7xvBSGcHFfUaR",
  "key4": "2g3sEHnzqov54HD66hejMiKdfiy2JmFpiDuUv8v8KmYQRVJS1KGR524Ywgi18uTy7N3ZmxHmsoecJ77oZsTB1qhE",
  "key5": "4sQWDiG5tfBrVz5oocygPbAb2hktL43sTmYpYd3RQXgjNj9C9zTmjXY8QYSNuGwQy8XSJsFmjH98UerCZX2PRuJW",
  "key6": "ekECp4Yi6eYEow4dVBSQBkKCuNb9qPWmHVuDgKKrQ4wAhmfRi1yXTWNWeaScRZ1XkwYDSB9LZf7j5t8a7Dx6Hae",
  "key7": "4Wcj73o39BjTJ3SmFjfR6rjFTYnGnKMh6B8WihRxEJ7AchRLbtZrkd5U3g9s48KcxAdkVKmvPmmZtYRXwQsoDpUt",
  "key8": "5gXdwmK7hX9MvjJ41tPDWowQpEpmLc4T3EGXkufR6r8dGwgdc7UwsQ1oCd6GuZGP7J4yFFqwdpEHHhEmC9XCf9jk",
  "key9": "2BMZERzYBbTvuM5ytbp6VQeUyYvCmkdQ18oN3wXTctsSxACMPfBRSkTTUXPFzhbyivFP6ymok3ePx8ppPfQsmFwH",
  "key10": "5Hr9jh4cPNkEx92TW8hPJskHv5KjizejWw6znuTicA9JSeJJsYEnLMp8y9TvXzbYgZscbjHoZeVw3zg7hcStLTw9",
  "key11": "5Zh9fh7iMyuGVXxyaxqQzFE87iPhHSE7ZRqbc1bURg489fuRcmGTLC2HCTD3jdz8XuczqpiwBm86uKPSzwrqJ8pb",
  "key12": "55yZr5e2E9KCxq6Wz1gWQqSUhDCciV38LjTFARFj1UPaficCCjKCDqYwcG76PJkVjFxZ4j9bLYjZNPwc8HxF2wiX",
  "key13": "4wcZak98UJTodYS1UZzKkV7Ja6xrHSSLc8RrZNnakUMjjAvga7Vr7QJWQbGaykfm1m2NTqNDLRb8ct9NPFKGLNct",
  "key14": "2tktb1DWLAsXJW73p6aXkvhhTPNnCXzkkSY2FrnxoBU2c7NGnPaLswkLA3gEtUBdebbJANgLdM4WB6LRezHXwmeM",
  "key15": "23ShUgLqQ1taCAaV1N5R8ETraoReyNo5ZPJLG6955h6BqY1QTuc4gxFmRzf9jqLyknGkxC7AcmQQFb6B5UTDp1eo",
  "key16": "5bFzAx1TiCKy4MGUeSfXJa1qKttTLkBCAnxUPmCwtvd8xm6rzwSd19fdQYLz828kLfKRq2RZA9BmjBiHTTbp9Tgj",
  "key17": "reV5SyBDJWTJcdPGAwv97wSkdkkQAub8a3ZFc4xanaYEWMvjB1GFSbU8XqSShaXZA2tHLGnMfc72rhQsN9erpDN",
  "key18": "TZ9JhYpqYr8g5UwasNMFEacHrF1B5B3Sf4v3Nen7U43EyTqpPtpqjJzq3CuCVVW6LJYRb2biS3NdY15FfDPs4zK",
  "key19": "yNJKvY4sryKDx6r7867bD4pNitFJFSLhGidS2NoVoiNMdMtG4hMvSJff1vw5Pno2wjCAeQuYGu44rNuu6txNyhB",
  "key20": "HXo7Px221fcgf1uUM267wxXAD9BNk2Kk7L2jh5NUmHjpSBJoVM14PXKMSYARmyaFg1bk78LzK5KSfTvLSUXRN2Z",
  "key21": "3oJgHpHUK7YM2nD55sFh3sXn9WvkBbGUg4n3YD3a5GkSBa85Ny1bspsd2hT2Jk9SoZa2E4vmvFNktcSkF7BgHGHx",
  "key22": "4iCswnvE8uYhDEHEGSmB54vzfv6Et2Pj3rDoFucw9RVmRo1vGSWbonVycEuUWxK15odrSUuuga7UctXkf1k3obMc",
  "key23": "4LAXFxbCMaGFMBvBh3oGThrLiUwcfTGVxJFV8M2nMRcWmDzHSn97Hxt3KJ4NcuNm47Lghwou9AkABBZFKZgGEEqT",
  "key24": "3RitEXKvwshPdUHYHZnhhKRep6n4qjKHp2zSbRAYGqMuHLDNb7Z4H5H8YN9J5g9gDndLSBWvafCxvVMU32YE1V5v",
  "key25": "4Jp2hvsvaJPopk1Zq5uQN4gddzVfrbZZAWjehQKShwozNYKtJdF7RxZhNwJ7gxwGewnTdKv77ZCZ2oFW8SwKXLvf"
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
