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
    "2HTCwtkcBcb4CoEa6F9BSZfZ53r5K7jgvwru81a8XcTftJkCKFq5B3ZRJggKsGZMVprYNNqPzEJBYr6PAdZ4hYwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FP76K72stz6DiHqNjSxFrcAgB5ZxUPL3spUUH17WVh6QMVwq3UsfBaPmjrHJ1ruU7H5V9bk9o17VqEurLra5tAT",
  "key1": "2qvmRiKpsgZbvSndJVAxFgZDzPLPgLFsn9QmMvhCaZE8K6KmgaguQTPVVd8irKwyvG8eF72k4mQF7xTe8hWctHpC",
  "key2": "nF7v1zQ9Nxuuv3r6iin1S64Ud9AQSUGbJ9Yh6mtW8gNmy15ndtktsevzyikN4bfNwRE4wxCnxuYUS9jbdRuKyD2",
  "key3": "62vss8cZi4vX8EwJn91rQyBPmBRheN6ECCC87CqhZ5WJrGn4J3giLyLvb9uJ6vFYMTXENxAZr5g1revbPx5dkVzP",
  "key4": "57SyGVLgCWXDiKr2RFE7pGrDbL127kmPC1gd5nsZdJPBcUXNb9xwyL3aXwcbTuk6uyzqv3TMqk3HkLzmbWWwnrJK",
  "key5": "4fN2xkEJAyRohhrNLxh1idRsRXuvNmKPYQgoaKLPYddCqCDLARpUCcGrDckLXfiEmGkzexkfqAPqSChqRHQ35Rzc",
  "key6": "5nyxrB3Ug4obSn5GgDasLNfxXk9N6FkvZq8FgJCFkZ3y6sZSdweEvHv82mo4tXVkFbiASrG9rpMn5GTGmhHrsiao",
  "key7": "2G5G5s88pUCmvDUQEUk69PHsJbEusNuiCzqXT942ieoyuPUGVFHA3zBpAJcBBkq74sPrnwoaFZtULnxdjy19xxyK",
  "key8": "2JKq5rG4dmJkxVL1c7uVzTqHVyKkneJ8BRYjuXyxekVxEu2oJPpkvKAM5xzsJTdNoJoEY77J8ZMXwf6rcXn6NisP",
  "key9": "5mJhjBD7MyBYYFzyoi1h7VCxEr4EW1HfNXxprEFDHBw14KrgAvnifLLr25E2dXLAifzgc7hpmB6NRLieUx6o5eia",
  "key10": "5Mf6UvwXVZTGmSKKJEUtHykS5QF2DKk6EqGLDrfR2UjYso4XXRHx56tJDfYfFB89NNKC6pDHJ8wbYgxUccfuCCJK",
  "key11": "XFdgsu6tAhhgaNPChAwdtWUA1aoraFj4mk6t8j1ZZqAiiJiXHEBkiUs9NHA5z18eb3WXKAhGusK5nGf56AxAEGy",
  "key12": "2Z4mWzmbTLHwEe4YRNaoKagGe5fybvP26xJBvATBBMFyDx7U4nX5wr3gjr7mpEKJwJyw9wG6ct4EXSPAkbnFJELr",
  "key13": "5HtxW3pLVznvvJAc4yqu4yQ1AeEEe9z5TeBMuZ4gZEZtmMK1M94d728TYpkgxEivGVGHh4kVkLUz28ErWgLGp2Ke",
  "key14": "ePBdbUd8rh2WCZNMmzS6a7MvDHu9rjnoWd6A6Qto8K38fTZ8LvfpgrJmmBFXzU9Rih8pwFcZvFf2h7fJJdx7K6X",
  "key15": "3BXaJZaTWA5ZAjxRm71waqCgFHz7557hzuPE2kjbVAnUqoR2ak9SWZUN4dzsojbx1rN8y5N9cVpQgchuG6kfhtqs",
  "key16": "374o5MfXzmRNxWpK8kCNfLgrtEDj3Bq7bNps5Ykh44i37A3Js7B9BjPw3e1r7JqG6tND7sdRo1LVEhxKPPZ4Rqxr",
  "key17": "3LyjjyB9MtrYPXZJ1YJtb6ZzdbKWMivndXEvYnr528zQYqeWvhTNwsP2dPscuePW2zaLugerxstcPrxLG2Kged8R",
  "key18": "24f5GenQoVvTZATfhZz4mBidtSQh47apwrTKq55bAaiuBBKqByynsy5PHJxjpf24vz9s4M14ZdXpyqgsXbh1cpnd",
  "key19": "3T9aMaruPX8VHujNECELDju9XojicBa8WxSxXdTLhaMPRXPrVBPtzTXU6VJEN5oE68fx4iSxgoWDaiFgHKEKB8Z5",
  "key20": "2USKxH86h8obPtfcPye8DVWDpPsQhrQNdY1S2cHvtwLuGmNmRijdCeFNFgHbmpxS5rEtqpEgQAw68775gr18Nsyz",
  "key21": "1hUAR5nKEkvrKcFLY1tbTDvjLAoShfvnoNkDrgLP6x6sW3aj1y8Rnh557xVLk2ZQtBJP8K3kmDzdLLcwV2hFESA",
  "key22": "47rFf26iKKeb9YxnaYwFFdNmFUrHMmLoiE88oDMC6A4vckBbFTmWvE8bhoSXK77t78VghjP6QaxBAMUVhNHYH85t",
  "key23": "4gENC3rkwYeQgLqJH4LFLrsa9mSoVKLGepu5Ar3cBAKTojtzPYQSMKZRhGPiQ4PkyEW78ESSfN8sGqzoTC6kgacQ",
  "key24": "2mkbmXYmNTmSZPNkx2SFbwCq2uLrzrT9hB9kox1nppvfTmvUybbcVrEGuxV7BMGCyiXr7zzZK3VyTmvWLz7igx5G",
  "key25": "GDsasUqGGXYoiCg2k3y16WubehxSPQmmdTpvNe8QYt7zgnbq62soKEBwwEAfxg2WuSanwadks2nUiQ4sd8PXnJv",
  "key26": "sWyALg397y1vAn4C5BXEgUtL5ioMiHmUBkinUUNk63hd33fwoFVQPaS5bAp142WiF7LkG6virv1qVERfrqfedL1",
  "key27": "4MBHTkkqpa8FEAnUC3gv7z7RMPQ6pPJxuYgsY5fnrzseKhYxo41v1S3yvu3VpAVR5iuY9R3pFh6WAoLRh2bv4RzY",
  "key28": "2XmARfJimkK4EAA4eVy8ajdR4p7Lzi2XekpcdQ5ms1gazEBva3HkeEkFjBSrQvpVj14HS7mnkJEzaahvW41CsVMA",
  "key29": "2JQa71a5i8LPkkFjQ6wNJKQsNqLFPgjB5hM2xgsuRbziYMKTpmGfkX1h7akAe2cZLuyFKJVdy6qLZrGg8SBAvg71",
  "key30": "H4y41FfNGm3q6SG8ULGfe77e3UEyjAxnaVZWNBdxuktZah3EdcR8bAr49C5MLUqpkFsAodyVYUuitC3NiPa5SDg",
  "key31": "2ystQKFJ51FBnNL7h2Q37FTLUTjmPb6wF3xQ2WVc8UyLvPHBUsB6MdKyFpbh17XfAjokhA8vfqe9NsHRB9D5TVM"
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
