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
    "5Cr7gxD7Hhawf1fvhQU1bCYT3o1JZFVvMxpaFNfjM9qqa75JiKK6L5vKjGv3B5ve6UYHVVHyvxkJPB8ZGjhV9N19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRXV12cqW2488iEugBfjkujBwYRCJyQDNQQB8YJP6qCkRqwezP9wRWHPibgsYLZnZgY7EMug7j4DXxhmTY9Yno8",
  "key1": "36MyCKEoX1AueUJSm2SUUfWecW96Xi2aXDWdd49xox91pX7hFoS2Ai2LV1HMaSaxj4EtiGrVgsqTDre33FZxkUfK",
  "key2": "2M4SNuUY8r6L1LPV6V1VkKg4RmgHcCxh7iyEWKWWjGQLMDqWr5djrr43SGNfMKCYLrUVqB36C37ZmVc2sMpw9QXQ",
  "key3": "ZdktsHUv4xAC4MujkaPfx5g54ay5LKDyG4FtarWrn4BhGmadbJGG1TkmHa8es4gr7c5J2qVrxE1aYM1uP4jSQrG",
  "key4": "4P4zkMLterV25w24skMEZDYyPmvnUQxnZvPH4gD2WDYibHdZBbb3BXx6dL9hmzircphH6GT9EfGm5NjnxikXUfmW",
  "key5": "4TAEGFTDavW8QDey3dkPUKWb7uJJrqnewMXn7fxZNH7RTYLxoxxzEwsct5kLFXqLg7yXSWRR5tgXvsfSbyHi58cG",
  "key6": "4h7N8ZCUA7NVACxAxzpBSwcmGd4dFEZpVdSpj5p4C1EUYS2LXximeicondVXV7os7xpmoMCUDU65SA9LKmTEpqzX",
  "key7": "45xVneTBC73JxZ6tNZTPTk9KFzLGdLkaRfgj8i5nnYAfMAnenSgomNTWHHuZqVaS9ozFiyxaWMkYF1G2VbPXzWzb",
  "key8": "4hkRWQi8y7NLMPeLn6WHmiVhhUHanpT5Fmc2ntXq12gnGkgZRgbmafJQUC2u4etPXgymhANmU4PpYmGkjWZBCh8n",
  "key9": "5a1PeeGjbaRJBA2X2dHjkUCyUn1FANvuMFc3poDXezeQKk55takYtZKk7NmNdrU6aSEAKo9R7gpZ5n4VoEtBTphg",
  "key10": "5jHdRGML712t1jfA2W56QJTFzab3JtwvZSgbobLNonULVPKTg5ioWSUMT96rCQeUVv9XmPx7eCfoEBf3PRuv6zAp",
  "key11": "31SjACfsRH2mXFiG2EQis8kCcgqxVo1LAAXaFvmTYyKQ3FsuiaaNc1ht9qYKS5wqQhR9URP91hHvEWNTveuG49M4",
  "key12": "5wmKnqtyEkZv7M3yhdeABmX9r8sz2gMgK3uUtkNgWXRMLcFN4V9F1QsyTkozRRWjkDDZgNjGBPSr8Pwxhs9NZhmN",
  "key13": "2Dxr3A4eL5yVym9sNpJ5EQd7vCGm4WdsvYs9fKcFBRcQ1XEuYXZgQWnxmg7vAZ7jwNdpBxCdM6tXixkgtAS5McyM",
  "key14": "4i7V4JCyPXetzQVRxuJ4SbreTvSukCpZULWH8mh5cySKDkyjgesrh96BVXJoU1nJti14pWz8XhpeBwD6A6aMFa6h",
  "key15": "5tRLvptfTnMLRTF5j8fNHbwCTnV54TmyadqMU2cw8hiZJAFkBqd7bLgFwifzZSL4CScMfWr65DC2rUM5RdHwRRj3",
  "key16": "DcFioN9HY19EzcBGvAiphMw4crc22aHhe9vaYsd5xXG9MureHtyDbhUvF7DiKPq1Hj1AywkhUhU6sYhCKd1fJF1",
  "key17": "4DmCqQY929ZDBQ295ZB6ixvwZ8nUEFxbYdtbAbLhjHm2Y9ALb9kr4soTPy4duGGK32pbSwppVeogoMU1KqefciWy",
  "key18": "4X4SaKXt4HwzuvdtiGmHr9S4cDPgNKPBg4jMixy5T4AAcFnUuErHbFnRWA22rcFqvXaEinG3qj3qsYjByYsWbmoF",
  "key19": "28c1TAeuC7P6BhtACwVmPFEvGYu1pSBKxrg46RbK6thZyaE3KAhsJJ36Bxd68m9Tw4ywXKrXUhZHHY22dBySnwFP",
  "key20": "5BfsC9gZPvWHNuum8A3wjZJUD6yw9R8v4Vmy6DpisKTPk7r1dvzXaKFNHXw4u8sm1DvMrrcB9AVwM8iWXWs9nJRF",
  "key21": "4TRuFBuQANTYRXpQY1zQLUGCSapX4F8U1Kqkbn6R9c46YDSZn28f3TziSNjaeEAfZryvdKzaanJoZBgFLkLgpKc6",
  "key22": "5h8RY4ZXu2X8EJ9qgXrYQTJDDnFMzfcFv7tab7KhsbaQ24pG4rGyGJYyxMygaY9mUKXWGwEJs59Ei2YSMTK1HVPf",
  "key23": "49rKAeLe9pE4sWMGMH5ZV6M3oEp9EXYGU8yWeRdUUAsGUyj5NvhoHMh4C3UXFskL5DCDhJFLKFmUe9EUFcq13LHg",
  "key24": "2TktNwKypm9TZ5bsapLTctSujWEQiEDT9pxSqGnESS4kXHz6CrkRnMtE5SWi2BvYfX2YJjJRGtJAgDZXE8J1sFwV",
  "key25": "w5pgEPTfYKATLp8JigzKf16nemVxih2nBaUEKx7AK3rTut8hRq5qMf7WYwmrTFsphBM32Mm3MW4KfxppCneS17c",
  "key26": "2MR2QJupU7ZuxAbSeGUEv845NBEopYzjR6WHS3agQMcZJZ3SjTsurpu1ByWKE7kqLNADqRKMnhoqJbVnkB5gb44S",
  "key27": "4c8P4BDvSnhwwNHxT6jATb6au37xMmwPiTHDyQqLfKhF5Ksge7J5Tt2TDpSJtYtzLrNWGPQ9YkNkzequHxEPUyF9",
  "key28": "2Fdmj14hCj52aZaKQS9pc73yuhKSpDSEt9JgsG36asPJocgiZVnCuvb3UeDcQxM5eWfAAmV4g49bnyxopXUmEBcH",
  "key29": "DpU87ZvgNFTCsmhUBwe6RFWmYxQRTxQkHhiDvpMQs9WfX33ymr3ViUnWY96AoZLe3cvDohxVknnZnxobe4UUfA9",
  "key30": "H5Y9wTuxHBo4SXUKYASE2DepndoiBzmQnkqkV6DJBvC9godbfPDbSHa1LWBApwodtDjVJQTHNyMde8qvSXSbmTP",
  "key31": "3ST92x55cnAsPSuoR7ccAApBaoiRNhJtuNoXc6w9rqfawf9SzfGkuMoBsYrpPvCFCr4GfWZXbqYC9bj3YjzgrNte",
  "key32": "54iCtTVpVQBrLPeMsvqaJPYFudnD7Yrn2vUVbzrwRaks3jLhFLdyaQPCqxNPtH62FGkyNhZed8NVTt4NpzAxDVzb"
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
