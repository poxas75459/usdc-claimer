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
    "3MkVNdJNG6cJzPvovnchk1XrbphFbSkMBxbMSFHiQifW5zLvrCvJ4mWJQMLM332Qr7Vj6ACB9KrehsUvR7xiZxYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAetwBExtjGco1oUwvn6SxXvh3Xj6ArvQixxUPi2sHEBrkmugSBAAGAzh2ef6eR8jw1WXh6VBQgmV1WHbQr3Kj8",
  "key1": "3b6MkyTP7afpDYwhUDrjnCchh8QUe4pVDrCZpK83LMmXZc5cLDcAkswyMsAyozfJTkXzp9g51NgWMV6uEKwysCtv",
  "key2": "syGj4LGwju65B8KyHTCzXjrbLiLenahGCzFuPDhE9A46ChqghdFrvAuDn9bXW3ujCgkfmqK12KnJrD1hrTS8ezy",
  "key3": "3uLFk7zZMn5JxFi5PetawZdbGKpuhsirVfiTiczZSzk1ytV7iYH3fWXqmf2krNaMNJk6pYEkH2ZdxpoVsryyJCZv",
  "key4": "BTLNC4LXLVboSzwajasLiRm9bvCrGz6zqHBje52rPjfM1DDNbWSoSXuUZdbXtzE7NQpFH1WYntiY7fp9owbKofV",
  "key5": "4oYgqFwzrP5H5tqPKksqWnafnuu1MPFryNCMtSJiTnDC69TUTgqYCZsSGGr55qTHxsMVY2sug4da8Fkq9QtPadef",
  "key6": "4nLfUdcSJjUB4JZwgtDRZKn7s8vR3ZNsUvNjyztjz4AqkBb3PJ7hyVYyPpPQmgVodYgMfJrroQ7feaLpSp5hQATj",
  "key7": "41wyKKpVXD42A3UgB4chCWo37wzfYyFcNMbFKwLL9eBtcFzyZMQYCyTW28PxiwSTStZbk6mA4kD9o72SJE8GWkua",
  "key8": "3aFku6fdS9mSqyVrbnno4Z4faG1xz5pcpMGEuDTHdV3zR2qNdcguTdguD94LUEL4ae4MKurM2tB4uNPiKxxuEq9k",
  "key9": "8twkbv9zgadFihoaEQyTjmjYjN8UzZznrdbzpHearq4dStTai2phyeq6zEcccYSiHfL5LzSUDxmFRpcof3Pve47",
  "key10": "1dC9759FB4zk21V1WxX2Ghk7T2v42zb4woSMG4kqML8A8JTG16ocqx8N98Ym9W8hdQum8kvTvsQxXStzeLSxyC9",
  "key11": "59t8hnorKyoHQVAAQSLhYkNhCSuztQnXZA4Ty4zbWGLx9AM6NAe5rub2T4dTaaTiPXC11noRL29ieddmwzZWPffL",
  "key12": "4sCtQp5yjS8f7y7g2si5TFKKKd1qBC4ZLLgvpV1akk5djYUurPc4L5NLpVU7w1YfSvUjHMvY8NgZiK7HWMLyyHST",
  "key13": "32pC2a2nHaaJyh6znVCrDtwrzpZyew1QDum2f86v61xvDyXLyLTKhQkcFM7Ym1MjQS2vCKjw97PFY8hqPXKxgto5",
  "key14": "3TeXQic4iJA3zMeQ6Njcqs6JRuwmbUeHSXQwYgzbDScbvC8QYoemc9XVXjLPBCy3uPV7V97uRX8FsjuyWs5kf2qX",
  "key15": "2U2y4zrsZZFCm8bzBvXjxw39BuewVeY7epusHxNa4JpczuiKCaFyRs7rjBxhXxFcpG2FzSDmtHYHFm4vrdEmw2Gv",
  "key16": "2oR5eVxAdEcVNqXTKhdmUxpPLwg45FsG2pWEg7NS7K1tdtQo5c7M92PGtda9r9uf8gAJv4BuxFU2GGG9uNcv96Nq",
  "key17": "3ytMWuSCtCrK2JudayNoy8HFJZKkuqHMReDSG8q7rj5p9dFURfTUZhLgi3roCTciTq3334BJtLoXa5T4iwtHKpoM",
  "key18": "3rxCqjtpUrHc6UXz2pVu1a8U8KkYFsoV37AjVHdYkfY1FF4xZSSWtStqgq65uzN1s8mRp6DHm6KckDEMh1mbfbzm",
  "key19": "yeR3xyjdnFqqZrEQ5QqZR5vwjGrUB8kN5UmMG3WKTueKhfxHh2QcmpNJxuLbdgzNbYhXTWgwD5Gvr7CJy4fdkUe",
  "key20": "2DmpUFQP35bKXk6CuHCXASed8fJP59hDhr1kMQfYPtWweGfznfBAfdnjrjMNDoV6rXyh8gETHdYGsgspR5PoWM9E",
  "key21": "3aW9Hr5et5juNfencMPmVkppChDdSCM9DhusTxkaovmrG67ZdKVgGjk1omHwKtXH9nQiyJHCrvHysV77GsULodQR",
  "key22": "JtekKQ7C8aWGxPRxQYGMUhFKxQKiHAMpGHfkiQnQqbqWntQaBVt3qZAUEWs8B4xUtwncFQGDpiknhnDcbzyEV2Y",
  "key23": "gMc7bTcpKDA4F97hxaAt4wJP3NcmC9FPvdDG4d48pux6ayN4S1g97A6cxiTNn53aYmMZ4BFez2Syxrz9XKLwgST",
  "key24": "aECHbqNwzxs2Z5Z9dikyW4otkZFRvK5hHyHu9AXFGULPwsZNuENb8b1oJLyYuvaPoWQT4DPMvn4QENdpm8fquSW"
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
