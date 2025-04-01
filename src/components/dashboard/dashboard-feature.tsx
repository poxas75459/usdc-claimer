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
    "3HofYpBGpJNjcCZN5JHrzLMq8N1cyorJt4RoFmdfqvYAJHanv9xRNzrS2feBSZ446U51ukyXmi9AaMgyZovEktqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MzYTYUqsCb8b94Rt9LaoZx8agY474F255mxFbna64RTcWYm2B1txXXF1X2evuwJTocoddHwHuym26SThy4xcGyL",
  "key1": "43xxZc8gC5cZFueUD1mtXmpwx48wEaXnzUQR5sjoagshEG7nN7AbCiZSxUe93WcwNWmgWiN1S41A4xWyXDvQttaB",
  "key2": "4ZDu6QYMjHtXdkynEiWPW8f7GB6ojgubgfyUKUrNryDAWF4Fy1tRXFjZfw3yETL3K2pdQjERdQKADPafBYCgcsiN",
  "key3": "4sTw7uxvQ8Zeryes2W7B9j3gxxfFwcoZQwSnQw8HFEMrFAgAFUSs8jZcpnJQmNyZ3iLE4k5nnSBXhZoNzMHQewXU",
  "key4": "4XRrHj9ZJzt6EkJ6q87yv5muFZhXAcSQnPaxmRRYAueoaSwG7mKVa2gUxRH6mj2KtthG8XxTUeCkeiHXviNWHZRk",
  "key5": "4bqVws6J5eY31pzd2EEuyvQXLMTiZ5vLU2XVUdQ636PDLdxaGLgbjNU4Dt4kSWsfR6rUGipwhGnePkqH5H5zC3DR",
  "key6": "CuzdTjWDP8L6eUdtwM2ZMC7ibWBj5ynCkhDmjPZmutbyva3uXPeXnoW7eLeu9PKjSdW4L1rjxp5EAgvKyTx5MD4",
  "key7": "2AZwcG65eJbemSgMmfqnzJgTCRdzh9AqvhZmEP1ZN8Gsa4F3MXfQJiey8arrJDbrxswQja1u3hwX36K6U7KEemb6",
  "key8": "S4G28VzxRBfLMfbzgCC6T8gk4xoHM3PVr37hsxvvzCrTfNGHGZdVeZfA7M9ssgFQ2Qg3z1f3xGwu7LyaHrvhSF9",
  "key9": "58uoEptCEwVkP5Fy7rWi4ZQTyn5LjBLb6Wsgk4Ux2cHJZQvhywX3FwheNFfpUmR4Ta68yMU4vbkMtR7K9F3Xnurs",
  "key10": "5SsAqxUg2tTyh3BiEKcRV8j5WErhPHnd2J3sYmUyB6Q2F6tvN44SgSDcsa3mFS7eDZtFT8EwzMesvxhRgTUHUCLh",
  "key11": "5zLkiuVgKKFjaXXU7WGZrmU6dc6GbikKr3U24DiavB4WEwAK6GCmxc4yo24WPYdAqF2kq5F8Hx5y2CSrYbHN8tzD",
  "key12": "42HTLjNr1iE9uaNfUpiGtzESCpRNkYv71oUWto4iQUheez2kK8ksjMXFgxYa2eR6Q5DF88V2H6rmCMe3PeuQoMfw",
  "key13": "55dvmMMKEjDTbyy4xWuiTTvSgXa25WM2DaKYqARgoWErNrFvEsJXjL4FkUui4QLN7xGEgvubx8Fo6JC87WLNPy1e",
  "key14": "2FKkWAbA17mCr7hcvofq8Arhkwmwb1rcZLnaacdrkrNehs84rJrGQYDwRNSmBvJjFDa7Z6z4b6bYLdtyMsBhLb7N",
  "key15": "23ENYBeYbBD73f6SsvBDaS6BLgXz4mtdjwsedYWWS337S2WPdmGdmwJEahj9Y1hNptSE9Goamkvk71pBpf3aNTbc",
  "key16": "4h7pK1vkNzZfkqb4NzAWvXAjVan7bojMutwuifEUcTDcFxQBTzKFs8zDXjdh6FuQbE1eSZpZbC6bEH4o9iWwQLBq",
  "key17": "32PD3YFosPCjLP6JSEBN3J8KSLFM7AycReckNqEDyJYgm2akKoEnQXyysF1Qw6C3gvWibEe1drZ3up8z1YRVzYhP",
  "key18": "3DyHYBBGLJ5ennD7EpXkitu9awxTMm82wE7U1nCgj96JxcJe1DNAQmBz4mirVzccPfAtH9qqfnLhQdj4SmdQNCtD",
  "key19": "4bgMe6aFjReFKoApzH16pUxQDDV2NhLD11wMceR6ihaUAtj3uSWucxgb3FE5FuZVZsTmNiEVPPukfw7GYjRV6DJz",
  "key20": "36pnWNsHyHkhuFJ6BKwKmcHoUpSSJ9aXxLtNQj2mFvSTUY3ycGLf6JLpAunQPqgZ4sfExvfzDGFcUAM6afjxpwkS",
  "key21": "ezv6Bi3sdhgMpsC3TEArkss2gQs6iDTerFiWVE836ucso1U83G895H1bp3LJ5FZF3GBjyGEJay15ojWnQMvo8Wx",
  "key22": "59ou434bHCwqLV4z2whLf7nwPqvaCjdLtm9bCzfSRGTySdv8sS6p7u9nKTTLnq5i9n5zfapcdeaiNDf6zyy762SZ",
  "key23": "5Uf7ceomASqypjQaAz13gWr3WvuYPxpwqpARF2j8ihivpqtxZPxAMxKiR2xnmX1JMrU2yBKk72MDbSVVsH9DUcoo",
  "key24": "2BP6qyH6DpAWK9f8ULWfsHg1agKBJiT6uDytXRppK6efycDyZ62v8aBVCvTD5aBoSb7Dd1G86b6HRmS4GPCwF9Wv",
  "key25": "5tr3qLiSTJRrmaBFNSW6wA7ExwskBtRuJrinQLkRPYdKstpP1YwsnUKQrMSaeyJrno6834nUHEqrhKpXCWq5Ljj3"
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
