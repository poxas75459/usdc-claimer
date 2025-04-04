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
    "2caPqbrCXiRvVXaKH4psNE1hyeDjf7HUC2XyFJb2NZwrYygPzt6QHi5SWqJYpWSpbSmDumrmQ2a6jQPPzrdCuBvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HDhck4MYfWzu4MiRToEE7x6aLp4rwLjDjKbLXDKf43G7842VWWo9mUnJhc1oWAVVRUxpuXVfDcbqF6UVTYBQfD",
  "key1": "27rtSV8eq7CnBWm42ZMxrLgnF31zcfqB9zyidZWeTaxkkc1A9jUjyD7EZ5TzfMrrRm6AyBeCBs24z3AEyQMhnncq",
  "key2": "5NV6v6Ugq6U59RMK8Xk6CGfXTq2xzwkWHQzNXdGWrWvpeuWe8HVzqDBdRmmYePX5gsYAob6H754SHdWhKsRJjsDU",
  "key3": "2CgSbttxsfFXWYLRByv78rTUhoYaxxJxsKkpbghwGxDc225L6n9tbAkCBVNTQaTG3zFq6yKMw3TqrgwV5pSJ2tSL",
  "key4": "2sYgbvfedzs8VnE9x5ADyXc7edooS2CHh7wJ6fgtqrLBZ4nSSbXWM7VRxef3SRf4ikxruwg1W4HB9qvPnszhprUz",
  "key5": "h5Bv5rWfQ7jnhCdTqSksxDwkPFXDVXzCG7zQYP3woVnF6ykvfgbs1xKqjQNQ7TTaaGjax4n1TqdNXbkSn7uB3B8",
  "key6": "orHqqsiGAxJS8uuubmRfqk7RwD2qfYBx7Ft3U4D2RTCWA5i6onCy6f6KXKLFRPbnHhRgCjF5NNndeqNYGz3JADE",
  "key7": "4qDZaKCvBLUAgRVmMKTSbK4YMTD8Vm4pGPHSwvhkqJdQuFuS9u64Mfc52SMgZbui46DB9Ct5avG7irDpHu3zv2Mr",
  "key8": "5sR8YwJUuTuVZf99PoWyj4Lm41C4Wfp4BnkchazVutyt49wcXFSAzgkAxszgd53PXavRxoTpNUMBwu82Y4VeQshf",
  "key9": "41DroMs6ckJZoBn2Kn2AAcyVEskgQHU95WDWfUbBNW35JpCQGZDwD1dvzRMP5vG7uFhDDTuRQbv1nfRmrRWX2FwA",
  "key10": "5fTZXRgWVitbygemok3qJefhnUuVNnA4CCsRBL6zUB4dPxMKvrc3d4qukz3HCbd9YXTsD4E25YF1UHiCbHWUWZzN",
  "key11": "3xJrjZca1Y7GEQQFB1fGVy91NJdo2p4BiusfvdKVpKBWJhnPH8VMrJ82aLvjYKpVzAkJv61Xxk5e8NLgnQbPZLBT",
  "key12": "31q6N7uyXkADcSNpQJoU33xVUXnDBHNAhCcRLAvvHN8Puk2Wow6stGat8GSoMGGevenkXNGWYyLNUpLribftoZsP",
  "key13": "4LZqTr5UdTEJsvo8WttySVyeMNgQ3xsvxjHzDfc1ayGtoA7Uumbo8E4F4jaUFBuuL8cKZm6E3HXK1dZWi7zTTtzA",
  "key14": "5Wob4PgUFuJYX8d8b3B8g9CqRWe6ZUmmFxaiTKiYmNv5ZmBzpAyd3Rqb9KkyakSvBxvhwvPWpg1uFDx5UUsWw5DB",
  "key15": "5GAKDq7TBBxtCK6LJwWE3tvzAWRnNc1Bzzsy2Kr7oE1Y8UVZ7TrhqA9LvoUFGE11TZpJqi7kypHMRWXxzUhkFhDi",
  "key16": "2pW41ZLKC4UcCk1QfdQ33AYBsf64JZwyKQTS2GWfbpVrP4KQ6QEHC1bccEHLL9N38ChJFVWgDrdZPum5D4dJe8aN",
  "key17": "2pAxWuQCCeTZ3RknNEJESUtLsnRjBpe78sXmFMUrtfoQhpBeftAzESvz8F6j6AmFENcF2aV1Qe8QWJpwRum8jkHi",
  "key18": "3ZcF57pWEVmDyf19NNBXevhA9jP393pAsCdCZxaiXnX4JrrimmKaiCjtk5gHDNRbkMKW7U4C3jCwzBAYBeKcFPZX",
  "key19": "5FaVbmwQ7HGdMKvRKoFwvyGE8B3YC7fHwAJUps8epPDQtMhPUB4cjZWamwXwPtNDiikc2bMAjVULi4ARYGFcbRe3",
  "key20": "24xnGsRwhsFyZc2HB3ceaqNCCLMZi6MU5h8RD8LzcQ4vtk2LJTySqmNe4R8xViq7HAd1FyJh4MmXyN7terDeavxj",
  "key21": "2wHRTibVannJkfiyk6XLorSXeAL91Qbr1FXBk7WWaUQ9YtGc6Un7yphjqYf8jBXCmjAABuj85ro895zUGxuzFQLv",
  "key22": "4uWG2tMgtMqWb1KVx4cvpdr6Q2128cjzr3oGC8JiacrKiryD4yDromETuw6eTSV2wBQNpr2Pyx5Nve996CzRPRUV",
  "key23": "N87BhQAPXVMsSPTeqF1gA1RmJoE55U7Jt137NWuVUQ9VZDe3afGGiWkVtnCvJFVgBJUJW55PWX8SKBAH7HqMeLN",
  "key24": "2mMSNm4YAoZauWuLmWGoAcrHbpw2i4YuofFGEZ1b5jftd83FfmP6mXSQtKkcHZsm9YnGsGfd2z4Ch9A6Z5aXfD3S",
  "key25": "5F4W4oFHdw5rBFGPH921uUbqvH4uj3Zc2w2AMmnCxh3YjAipVaz2LwcWcbaDqfRW4guMKB2QeqnKHVgycDN9r5J9",
  "key26": "41zhhreMMsKk7h5wQkx4xgsrmAPDWhVrVDEb1tVom2sR9DCuJFicZE7w3GnZ7vuUzbzDAErMK8i9SB1HE3fJdHVW",
  "key27": "3W9QsCANUpeYycpUD5dQbZaqc1T7pcrArRCtHNeGBsUskqWbky44grrVrQK4BydrdRN3SyfoaJZzzJZ6a725JU2y",
  "key28": "3LYaVEZNkU4Nw3Gs2a9jPTf5N1teJaPugQyjF6pyxA3xhLtJ64QFBMiaX57SZ8ErKDhH6eaUVmPA2WL33C88eqoz",
  "key29": "57AgbuKb9EWpSpBW4vQCK7SxL6Tohk2He8S5RckSnd5oSGuNnGtFnFZxHrdHNShYhGBwXwNfSG6XvvrnQwuavrUE"
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
