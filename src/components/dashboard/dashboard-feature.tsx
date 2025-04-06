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
    "23mFmTdmLefQFj8iQKDBRXBM56N4XPq7hs7xmzFWuQiNnbZNCtxEPPdVc2Zsk7jSdKF4L4UY89W1CmEZcJZGqcfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXCV1Q2WEJ8SF93TzzKhyG8QU5EKTEDd472eyqKBTeHywyC82gwFAwDpvLvKcEGyPZswZypT7qMuf8jip81AmTK",
  "key1": "cxCaaKKHUZ9QJMoTD4ZBMdQBVkGJNdaimCXqBsVSJ4KXGi3SWHBxMGwyLy2er7YVCRDWwpBMcxPk3vN5SkpWrHm",
  "key2": "3cqYRofqDo8xf5rHJnZuDiWhZsDnjnEnHV98E6h3EtXb6PoDFaDuLPajfRqjoniqKt16wZeKfXVwbEX7DaDP7oq3",
  "key3": "32NRYcx4dyuf6Fv9bjxa5zqw61Pe7oTySJBgNAp4DamqKBNMWGYdewkudDUqGRsNdN4QMhF7xy8APZroKNYYH7Eq",
  "key4": "5Hn8tGjoRSDfbDb8QdH5LAizrEchVyfhqBLD4hMEvDtT21vTN1uLvpyjZ4phsYKgqBDqDU7JZysvC58RgpfV1HSJ",
  "key5": "3AQNJNpF9GC4H6qYrQ7V464HruLVv147Cc2M4spFYuwovqQ3EDuECc8hLkdH2nt4Ug9sgMJQn1LJXqwyBhNXcAUC",
  "key6": "5rdUgUCRt8UkDAGKRSPcyrRoFkSXG3nvsxyKLUgZF4E5BW1q3UGw9wMCWt4eZdkEQNy4D2iyeMsPcLDHvVtP1sD9",
  "key7": "46rVXheSb4fVmpcLHp1qZ26p1xAvSMKRSfe5iBZGxY28bSHnLoBs3Ynj4CAdKEYBrXTxn2Piyv1tg6HzXZD812gn",
  "key8": "B24hNRQQeawPRgCGX2NUo8gwwyjJvxxdtgbmeyPNn1CaMa46LioBAPXQQrssqUUS4ZbtPL7aaM1EuZdqgp2VUxT",
  "key9": "3HVZv8YsCi41145e75hW1JbBTzPQh522SVcPqJsRNP9zY8eUqLMd9h1hGwwKcv55sRb5j7WEeWobevnVDFZLwCA3",
  "key10": "5fBnGCB6hD5Tj1N5HsPmS6gWPiqswhcw4PfArBi8C7VwCuKJzeFATLp2UMrJEDqYT4Kz5cfHr4k8ypUqqzbfYCsi",
  "key11": "58Ppdf6dyuAjxDvX5Rk5TLrJPxRG8b26sKW8WtGQh1MHSFT7veHUpgq257KBpVZHQN1nyv1hNuGmreZuPW3rkQJf",
  "key12": "YysFRk6W59AfzX5Y5sFkUQuAsP6qAWgxTrMTeRTxgvxUfniApiuCrFPaS4LfkLtzGR6DYAHvEGZWEvUB84xkaLX",
  "key13": "3HTEimtLsz19epGDDQfBUYAHk4sdGMX6j9mJ1JRi7cnXVwWPsiTHqX273j1rD7GFjDmY6YHj1q1kUzShtW5C9Xoa",
  "key14": "Q4xSukn6XLz6HiaXrq4vZcteyreH1Yhy4d2imMbTSsYjsDkb6eyEK5K1Ab3DfDry3RLGSgkayFWwfsaWu2fwygh",
  "key15": "4yqjdrhvHbHZJDnDyGbA6z2uXQ9TJRdWStaP2Hj19u5eHWryv2uQ69c6ueBRtNtG9uuH8ucAw6DUWM7MHQLicnzd",
  "key16": "5P3SJF9Ch1wZ3V8MEfbS731qtNhRg5GvJpKY4wCyV83FwZ2qSjKJsmRZ2Mhwxav4KUww5133SMZpoDhrnAayrFbH",
  "key17": "2F6Z5X7bjrhs4Gx3F7t9fiB2ZcKJkF7aadNizBYem7Mm92qXqBLiE3wa6Bqt84iF3wXukipPV2pnxgfaoLTZXYZ8",
  "key18": "2F8A6c9sN3qWi1Uq83mhyk1UfgMFBQsFiDCYDt2Rd4ycMLUeVpZekmfNQE3eDp5vP9gCZejZof1wnyg5ojG3L6eU",
  "key19": "3zNc9Daaou7jFGvHUFAYHPEsVACCxpg5MaCDrWK1Tz6F26ccW8s67qQgeM8ter115DHv2wCnQCzcKQWGhVagGqk2",
  "key20": "m5EX5r5aVbNTaAAYep6nwkGfv9GAV1MTPUZ8Dv5jWEttijoprcMXN7bejVS67sBjQEsW5s4qyMH3maaDodSuGVA",
  "key21": "4ZH9f5P4vERxP1YsieUtVbjFeAnFaxRVjxoC91xxsYBAgwz6aLspbY2MD1vvvWkzaqxCjFgmZRrdCxBPwRu2L5Nb",
  "key22": "2F4v64H2gZEicEFusFG47tmtLF3cunejTTE573LXDwR3VZsoZdRHPUmab1zMRC3gw99oitumHA9VXeL3QknJTip7",
  "key23": "45YMTxvk9xfdGqp8n3LUhM4rJeqEmtFbMm6265zf4oVupH8fDDekebTTBG3uG2xejw8jpProWDv4RqRASbya41oA",
  "key24": "3sP5q5AaEQV2apAcwRnaPuwD8FqCimZDo5hcx81qQrh1nahh5PsV5mPGtLr6sGLofcxGGVYPfQwBkwLaikpaxbWq",
  "key25": "5oySBnusC1qvkEh8vRgKXt84AVJYKJFKiLqHimGM2waBzZoYmkEFH1ZucVMeqyvAaMeZNq91N3WPkwh8fgR1ts7a",
  "key26": "GX2BPCYQpmTgyTtwkAkwWCkv46LeqgAxjKMUzhGgh9YN5pdZf1Q1jX1aDNxSeYNBJUB8QMFL9PC9LpgEGabH1xN",
  "key27": "5kMdBw7TXPhR2xAtgzVtAQrtf9kU16nxSYrqu6J7zvdhQge8sRKdSoDpiBZ8P3XVpi4SLMoYCisNnPqyW343XHNc"
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
