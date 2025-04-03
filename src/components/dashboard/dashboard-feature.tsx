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
    "ynqxeQuLuLwWW6Q1ETFHWet6CrMFS1kJ4VX2QdXuyFfJj16CyUjgXNqKZweKNuVvQvF3HjT9PzAnjN5SikR4gQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zxc8rspSL9zW2jKsQbvsxmHudxvqEDm5Bb6SunwV9pJDn1QNSS6M2Nkat7tappz8iomBwuHwdFJd3CmkAnwn9wx",
  "key1": "2Fo7DdYsymRvJx2jwZwDJvgvobj4JACPhNbvd8Ys8vmv83jNSY1s99n5BWpSsnxjCJDwhfijh4QeiPsYjV2WVDLJ",
  "key2": "28jLeLJc6BTptCJcVCxqCckidDWPLSPq9MsqmHWHLk31P3nNN8U2gpWqGT6Mrq169doVMf1B9TouARhdRVn1QwNT",
  "key3": "3bRqZVKFZrZBzPTPnXpwW3azj8MvpyDNcn7UnMTCYmM85Wenc1kaaThWBLx6qTWUoys5LpZdoSmBZ9Ynzhv53E7d",
  "key4": "3g1JZH6XKqt8jp3AiJF8SuXivxFg1vnpmGpDD7GqteSW599P8bTenmjmfPzJWW5LvquuFGBsCRW9G5r3Jhg22q9r",
  "key5": "5nR1Dz7UXNVtyPimLHAunmH1rqf12o5PVWMQrgeyDrNdzguhnq4PZEjaN4FEGMbiFp6z7T52fi12y45s76iowS7j",
  "key6": "2xrJnXUZQ74VMBLjwxpd8ijAL9TkGFKmMc1NcWGAqweeSZ7bdxkTrtV7MoFTHqj6PTR2phGsAxZH1jjnVk1NUWrN",
  "key7": "5xN2fNDeYs3dpFRDdHk7B6kzaWxFUMehtqZzBiwGvo7EUYEutBiP16V6cYqZ3KvVs8PMGF99hidQ31m5ranZg8Fg",
  "key8": "3dhFsBGyxGzzWupsKkgf1mVpTjgqRpKJm5woccKdWxwqtG2TeYmBSYbLjL4WmQ6nBbd1RGegfoC5kbYFgfajA3Ce",
  "key9": "2JexK82C5iaozJjL6umTA5uExPC5KcAe51PRtRs9U5VRzvDkLH9i48y3kh8ieDWeE78JsC5DL8vBmWyKMdkB7gFX",
  "key10": "2XKrmrLDh2chVouxkqsd2k7TZzKCi53auN1sQkwYSDgAyD6fZyKHdiqjfbbA2KMrLY4SWxsBZzV5vVEt3b5cVGPK",
  "key11": "4UBjgQv8oUiVEZRL7myfpk7mqyMCKgzoecpNxQZN2nUKc9RKjLosHUnAN1eNWtsrRuAjdxvCraMWYZd4AadNTnUS",
  "key12": "3wzBxU73dU8wM2v8QFCgFoNNzyBjhtv1SCE8YrUoC9q4tehhErtZXnRKbyTjDktepsQXRqbLNmwBKLCX4fHpEfTE",
  "key13": "22Ueux9LuctnSkVMLzkVaPqVpQ5YsHyBcLGEo5gMgTMiFBkQcdVREyUXK3HDTiB95qdycwmmQvACKgvY4MSQtw6H",
  "key14": "R9JqtFsLdB6Kf2cSnk1x3wHorPhDoyecoDMa2m57jm2YAt6va58VMykneqYLDfXsqwy7ez2KvLKpauknK1jchV8",
  "key15": "3rfudc1zssQAhZojrwXaMxvTNkmpxAMZByktpgCAFXUmmcZYcS6HKbmcDQu9shNroZXhmshkG2RL73o3hnQ5SfaU",
  "key16": "pHLtSBQgDxHK7BCyUtJLDfJYTdYVwnnJrJKfnZwWRVdpfFc6FnzQE5eqFSzmUk9EDjwewo3X7goR4esHoqYXs8W",
  "key17": "35iN8S8iy3xChtr3zskEBFDfZXfzshvLDLLyeviFfFkd6SZfbu2pDqdtqzWN4eFtsYW5j3meysMLmJxfENYVHpQN",
  "key18": "5ziXjKbJZwvK6XAkVGVsUBL9bemSRDG1H9HdoBFYWr1cdGn8ZoiD6C6zNhe8Yj3peRp92qLEbE9akCv6gAiTXSiX",
  "key19": "4v8te1w3foJchkLxHL23erdbhRKmakiKXpsYng3xkFnEWRjeEbPVGRJvLf4Ppqy1x43TqFGwUpF8uUjb9isAv5kR",
  "key20": "56JaFYiiAacxGnKyQX9svUp13Xhr7WukoVAmiGPRpZbrLyZvcDxJ6QMj73zF9pnvBmy5VTSDsLCEhaQ8fvyw7m5d",
  "key21": "4USiGHNDAb1ciuGiMghEZCnGeZQdbMaitgCiADxqg6PSHZK3c6u8tdihjHtmArzcXV2NWP44B42VvpxjSfde5XzV",
  "key22": "2LiV6LLLXJde9Sc2C9rsYv78NYsHXFKCmtAGLVyH1WWohBPKdHGyZhZHdJ1ubH5b4TgkEjtMCysSM93Sr4eoh5E2",
  "key23": "5i2mhyy7pwg6tW5qNos9u75wVLmP1oJfZkaxuvhy8QyUWnMFSKnLmaPoVRueSaCeDiocHaQ59rRQBE2vmxuSrooW",
  "key24": "3pWsLditpFC29s32j1qQLqKD6Xo8bTtnkknfuJdF4zoPYdFowCVh3TyBk6Xsqry1et3LFR6CDK4f9Fj5HB1D3BvC",
  "key25": "2Z8DbGB2FzEAwFN6VwfKEFeEpodPbjrYWpfRiXA4ZnSSHVQpwk5fYvFvgzHwmqCRsRD8KTyYXtaB3VXStuWuhX1i",
  "key26": "2cZEzyRoGYdVsHvrVMFNXZz6oEaSACTueKyUVwbZCht8tXDLdjHs1vhG2zuU7r1owAvvxSn9y4EgtMnLmy4jVNvN",
  "key27": "5Q4T93UkDHsPesMir19ZcwHM3QFu2E8T9bP9Tp5VbqHcQwMDppRkAGY7LMaeFedb2JLZiN4695HwUky7dzfHFF8C",
  "key28": "3Cpoc4dCh2wVmamxKiEsdxmjX63kbEAVeSyj4UZrMrnHcGLJ2H4p3EnVKvzASACkVtTXidoNMVugXy3AmD4j6C3V",
  "key29": "5zBHhahVRe9siwfFsMhtJexzDncHH35DMias92s2VysTDzPzxU9agkgz2bT7e1Jy45wo8d19r3dVxGQkv6BgDbzE",
  "key30": "ycu7PRBW15ZmU79cmYbHk3E1y8NiHwcwwjKTHfyPUSSL1K6BsXkVW7bKVuQRzinFYoH9z2bQVmrsmUHgn2Xvx42",
  "key31": "2BXKK7WKBzqEi6MctmwMmo4fpUV8bSELAB4pq2uu73RVEJRFdbuJdgWPLNWtisg7VLQSuynR31XYw5Xy7YHZ7VEg",
  "key32": "XaHtW3mVpyj5iobTDZKm3SAU1oiuuGum5VVFYNmANeGCzTMFEfvJx1jt7F1bd5Kkzp23ucZBnLLedm3KChCA8Dw",
  "key33": "3DtL2W5Xi3LjiA9BwkYm6eV8yAst5PLW7Ec5Bhry8eHL11QFmxhCvyzGCKMgyR3LQcdah2ZnWdPxRizDTFnDwgXT",
  "key34": "4dXwcR6xbjDhZsy9LNc5XD38c4fWrgsFgVo3FYdezm3UvX4hLTr5nfwHR2Quop6P9wns3Ua7bYq1LJmQbSYbZZ2A",
  "key35": "KZ99YFqFnTJk3zywyHYg6xcUcCpgjmErj2MQ8pK91dmAze3bSFE7o28gQGGBYWEatfsM3kg1nr4C3zmxVbQxZ6P",
  "key36": "24rwrEJeAdAnzpesYvcz2amWtGPvZwh7gGARoGRMRjEq6hCyJn1eR41xYSJexaJx931UZ8Z3VzuXscyY3L4mwoLg",
  "key37": "5fURoLamzVNCWPnzUYQ7dtNG8Z6jL9jTHQ5e4ddg9hJ6V8q7ERa5AMEycNbTQid1AyYFmgfURJNU9953ij76pRjr",
  "key38": "3r2dpBchx8ni9rcARsBDWVf6oxVCbkNTMWwQAUft2986iYnMzHf1qCTh5ntbgZX2Fhj2Z8BYMNCTFBNgRLsWZiZs",
  "key39": "2sJVrbrikMq7sWu2d9HjHypHLpD8UCqwYczE32ng7zUW9en7ec3KiKVesniNMya3itGTKNY2V5zg5zfEBK4oV1SF",
  "key40": "5q871YbzhBvfSB5fSTc18ua82Je5tUvgpNJPvwjkt8w4vdL2A9HQBBYZ6EQcgkB4Y6oayAAKTWAHQMmNYZZTC1yk",
  "key41": "4LPHsDSZe46uA2BGo7d815hRYijHLwBV4VpPyAJneHJoQg3gCjLDPkBC1esMj9LGNHvFxCuzNZeywvKfKuc93RKG"
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
