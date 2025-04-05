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
    "mTzLnesYCPyQ69xzqg78BmKVSSECgqRLVhihSWLK3D5fNcpmucWmFg6mwjTyxibdoxKAWUMzwNdgDUPqiVs4FfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rcALHYKNqniFHtVRf21UYLh88H5TxnZ2on9EBEFViwhnBJnGvhm9Lm1vJ6CZpFsTASLnDB6S6M42fPsanXsPFWg",
  "key1": "46UuggYyKpAhLZauvAkdp2FqCYp7Wx3AB4WBz3EbdDihTYwPfvWiCcK4N3GFGADUdqvdLfapWebuQQS2mZDs9u1o",
  "key2": "R3j6mUrgGW35SLfEb4FRAm2SWVRMfjqTvpL8pKNsjZuCKJkqRgUawi6JyVwZMzZi7qSsuKvmY6oiKiMxTasxkGv",
  "key3": "5VJGNJuGLx9aLcLnNuPXw2NeSg6AhDhxwkuEGxKxn3S9QjuBjZKeQJRExekbzxtGUu63xRQRTt2vvJotsXcPSbf3",
  "key4": "2aasFuJy1s1oXozuv5mKXfokLjQkhD6No4U2XeyysFNMLfrETmEUvYGAzyTNijK3u7qy7j9KD2t9b5YJH42xLTvM",
  "key5": "U9tbrqC3kCnL9qgCYzBmJcmxxhnJRpL4scgPob8Bm3xyD1L6ezvkAcSzos9pxrKRn1egbVB4A8Dd8zj7sZvMu7y",
  "key6": "3uncjXtNxCXAuxBtde9abpQL7t19dTV2kB5LZaqLDCBcZjfkj2Zze7MFWCZD5UUcSUHK24FkoKiep62hCHJFEu4W",
  "key7": "46iMC4jGuENPw8vuurXX5y68MQEanjfDDyoUcBZVVGmWtgJGrQoXHtQBLbMGhVcd5tnmh9PkZtPv2FosG8u4k9j1",
  "key8": "5FJwPGaeb37sAPHy7X9dMRmuqfNfUjaLkqxVvGov4vR9GEnKY82AbLhCuWeSoFo5SqbgSdEezRe6zpAZx8k9QNub",
  "key9": "5MPGRVjXUP7CjLrngtKvHAPJGaH4cW9oMN9EW4TCpNQXqwZg7VFiuLbB4WfDpXUL67o9MkkqFqXQh76Xby7TMTJe",
  "key10": "2WLsjbFoywPR1NQPzCHgu3g7Brjbqc9LBgiCwU2GvVXiqvrBUDNvy4q2DBXsAotWepLQ262zQXGyApZPjQg1gkj4",
  "key11": "3tPbfwJUxXw7ugjRkLLE4AJGJSN6VcU9Fad7eFxngqrUV4rdp2ep1h37929bs2pDy6mJGxM1VhkK33XpvEixefRy",
  "key12": "4CsZ5ofNGc5jS9bjmvsAESKykZWeb6YpiFeDrm9BtxDK7qvvSskApvKgJYnVQPKBP6xnxab5sxiK3YNGgvjuKT6C",
  "key13": "985Da95AZZKw2oR3nr9Q8XL3foKCuucmhsCZX1b38X3bordnhrGAWpvgd3PuNNFErRDySiQFWgN9Fd3rxeSQN8L",
  "key14": "JZdM1frhD1C9FK4MqvTW966coey5T45oRzf5dA5NyHYuypuaMe53UzLnXV3H6gzf6XZjMnTxGuFnAQLWjXh9W4c",
  "key15": "2zD4Xv3xcZT3my47fMV7oMgzYPutxxR83qN2iA1XYP9KFg1TiDx77st6g5LvVL9KVx21732Q4oZe8LrxFTPchE5g",
  "key16": "2MUt8kxSM5GqoKTp7Uz68jeLbUn7PaNtZwqQRfyQdn9K9kG4QAuh9vZAXGPZM17fnsjQoMMR5wRY29SqCPUdrar9",
  "key17": "2Xgj812Wd9fHj3gJUwwiyQfoSrbfWrbFrJTyHkoz3X4Ak8R2r5YPHirht2tCkzf9VTMTfdoF3wpAFeSXSko6FVBf",
  "key18": "5WZzfpPrwiQbvZik5cFpRKktoauLhq72hDPhgbGufL5ET5WQLcbkx88psNyQJ6mWjuqzVVA51FygGYz7CTxWnUZy",
  "key19": "229s8TsFPShbiuv2hvwc2SN7Dfb26Pbx4UZjQCJR45C3dYfFEZ9tzNjPd8mZsRYANAMrp4dB3tyCuqqk4fo1gTrT",
  "key20": "4kztxv9qq9zAY1xvsxf1BqELpRQdVmSDAL4skYZ75RfNZR2HvJEBvFBoCQESQqgtVRtFe29X557pZmw6tTS81P3",
  "key21": "3w2PwEppwcLFKzjN4FpHYK2GgyBSHhsBYKizr89nh7pQJcAamFcFJ8gcqbvpyww9wqQAEpRFJNkq7MoUPuFRpvAp",
  "key22": "2HJpbDFc3HsNsBWx2DWkMcaHJBGaaBqzGyH6kE7tER3JGF4BrKaAcS2VuT7mNt6CgLatj2wniKoRi2XLtibpX4Pe",
  "key23": "5vonwuH1Lgo3SKWKV48gDoG2y91r8VmjBQegtddkCFafmMZ2VczHAC7oEoaQ8KSan5gSRUkZAP1RQkQsuZKnvSRt",
  "key24": "4MyBqmesknweqBCNXbUUjEUDKgr6VZ2hP5uqGdHV9ATqkG9av6io9sYXz1X4bQTCiYdg86K1pECAE1kiqcSMcAfn",
  "key25": "2iLRgCYDmYAT8QRfRz6joKDFYqQ294Yc2VXNZ7ifz9npaMfmaiacaKtbVohyg3ZkmKHUyqRxhTHdAoXnXvEK8cZL",
  "key26": "5nadobkf3tkHkoBHnfFZ5KEAM5W72BjTrKxJYGh45bPgf1Cn6xFhocsNCxRkSc89uCwKvwgajJL77VNv1yoELZAT",
  "key27": "3BXh3k3D8XY8Soys4QR4fjY2unKvUsQfk83jUnEWSU5R4xJSNNrtTycqAX51DrUtFyorJAcWU9Fi4TWie6c4br61"
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
