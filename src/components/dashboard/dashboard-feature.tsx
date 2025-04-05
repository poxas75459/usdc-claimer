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
    "4ewgjjieRfVKvpdhaGgqhBjt1pNYRPihFsTVFKhKuG9UqtRQFWx65kWN1NiYkhERHaGXCn87rLbJSDmdKab3VfKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRB936eF1AtMexakX6u75dCAyshoYZF5cwnGSDDwhjqHwUKeTaRUNeFHsq5yKWcpBvfe823E8VMHbbQ8fqpWMPN",
  "key1": "2GXETaMDHptdNhkSuiVPbtiJE34RSASwXMvwykGoZwjwDiPZS2JiaTgnBrXxQ3t9k4EZzog8m6cAoX8bYQ9miNod",
  "key2": "2zqhVit9TdnS9sRPxtHDuF9VtXvUjCB9TCQG8iPnP5Y83pkuNrMPjUvZVTNxAiUFgGTD9khCWiZrPkiXawMnuV3a",
  "key3": "3H86P7anZYWF25qkzrEMfY4tc4N5wxev4JFENFhM6bkQ5D1P3NT7WiH6YhNE43bQffNUDR3hePD7jEtddueKf17m",
  "key4": "4sdcgjPvdZ6GpgNeoHV4Hhcrxj85Wpj29MbDy5Lza6fSMg1BVurQyXZA3AGKG7qUCjDfYJ584kTqzxeLD9cFaaBA",
  "key5": "gDxZTip9ECqzWj6YSwG7GH668n2t2U3aFuXxgFNHakANjGz3Kd5dmYbdLkWBzrLqKQHotWzm1eEgpN49XWW75Df",
  "key6": "4nxo8a7mEzTgXfxzsgW6EwaxG38jftFbG8igTz4tHwNQnDR8a63a8Cehv8aV7nqJU1gorUo5cBpFX2cVdaGqtCHj",
  "key7": "65oeyWq5xFKwYJBKMZxBuZMCxxqbxyD25xX9TpozRUTWyp9X28wpQdMQYHgzeQx5hTgbKWvmgQcsEv5c7AtNCe9r",
  "key8": "2R1Yt1yYVmYQ49nn5e7K72r371VpcAsqFcGUEWZ32vbPR9bD8n7ocaX9qdf2U47qveoVp9FzWQVApfAdtiYvPRUa",
  "key9": "3vmU4M9H5o8f2WsBxkSf7rfypMoVEexDkkyxSTpgviZezMbqo4eqiDqBykbF191bucgNy4U1gjPq4pBoRK7NseMd",
  "key10": "3sEByNrQzYh5bZEEFKjHjZGErynjsuriF1ZRqMnhLqkz1ZbXx8r3WsKYdyQJ3GQRgDND9ukFLTdkb2fn2WpiRfd7",
  "key11": "hYMhw1KDkTF2FjMUW3GSJuwTEhLiymNDGRAAEvP6tyMFB7gcp6wUhtFJgt5dc9csER8YfVjGdy5HUjq6RfY6n3Q",
  "key12": "2ZJ15eJ3njygKR54zarY39MgTeXa2W4G9MEQDdjrENVPvrF68Q625YpCLcXMzzUgteMGUdcHwBfLwbHbT4y3jH1K",
  "key13": "3ugZG1tL8LJ1857tV2je6o4trxFUC63yk86feW4nB5be4HuYSCX1VcFhG2bLbuHimtcat2eDprbDseTN7S7G97vK",
  "key14": "rKo8Uqjpx7anmkF3sYtgsvQsBBv9N6PvZfD962e9Gbk3ig24M9VtWJQVLjyUT4CaBvHUfVxSdpBoMm2BMSrXgvp",
  "key15": "4FPWJUAd98CebGAxeBmVM1DdHRBGJuXRet4DoYRJprjfDt7uetNS4dBgdVYUDqFELSTH61HqaN9m5jMkD63wFCBj",
  "key16": "2dqqQyR37HgBsXAWHmGa39NWytCJzAjukGNjkxU8KVU9LLspLLfmiJoC8fYZRQxjpUK4yz5mjGTxsjccjrNhuDmH",
  "key17": "zsF1ZxkgsQ7ZD4Spdddon7t7d2zsZm2Q9kRSNY79af9WApTSLZS2CQRgkMFV6oE1udjzNh5GftVnBQXc524fa6m",
  "key18": "3xhmw2uMcdmtYgZQUUF4Z2zPP8HYjqjxcej4BVdhLctFUSrD2pAazRiyFdS8HjtnhpELPt2GpC66XF27eSsfpF19",
  "key19": "2qsB4stBunNYn3buoedaRcUjbb6ipHDfHQXirfqrAdkcRRk2iRWLN3iXUCdZHq1aGKSowMwRYySwep2RgTMStFzh",
  "key20": "4Kmc4YSbVHy6PjsL3RK6ERb22npya3A7zLR7Zo1aBpepHtJtfCSdwtHEZKwznRAsCZfJnn4ib4yKd7nuACGDBHAf",
  "key21": "FYWw2jvHM3njt9ftpMXW5piazaL9HAbVK9XKitxXMq2V5RgDGNCP6ANLBPKjZuiheqBtno812ktM7HyoovEd9ZN",
  "key22": "44ib8AT5rkc2nk9gsnxRRc8sG1wcx4zd6rxHEQ2ayK3gfg7sfHzP5mYwckmNKUkfsEbWfb2ngTjSxxtceNejUvFH",
  "key23": "3KBWV5c42bmyxkCvRi5nyjzMVj8xGVjc8xnKTMnuiLmaN6UzhbjQ2BNnAiJjRMCwTVcYbxGSvtneieFRKHHy9dJH",
  "key24": "5bNPcvK4hJmofxD17hxuvTFA4pDCg9zwfcaaiWbxaP2NSVdvic2DpthoH2LyHrXqMzfGZ5VP8wBfg5w5q4A54Vjn",
  "key25": "34P6GfWvTxzSxty5pkiNN15rESUvmdPvPBCgvxQiZQ9TYb4jmLm5DNkYzDqEAyDKYj9pNHSKKJqz96qP1nYHWWEy",
  "key26": "5X7iXpoX6Unrz56vt81DTddzjQ7g5YomX8YRu97swfxAqzfjMyP9Q3EuVtPdfwk7SKXGnwHJYKgXuFFZxU2THpm2",
  "key27": "4F8hoxQkepRbnykzkTNWTrDmj7gdAcZnrodapwJxtfQ1y56DEraXGmdEduNiRQyMMa65ixCzpCGxsDUsTec5KKHq"
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
