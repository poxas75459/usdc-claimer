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
    "3wwgex24Wh1i8rCUcjT5evCkWVNhwACvaAP1uoGtBoapLFcTg42xyyaKGx7oQMsrKGLhCitopmwi2WBwcwHij5gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CaxisYbv7RsZNtNNyzVJhQmTa5xaGfdMht4GCRtJUdZ75ML9JBtzpMNBYdYcHPmXevWYXhG8zWvt71VXdFaontJ",
  "key1": "5N8vcsrge6nwMr21RJh6iZeHPjkrc4zYR5Ec3yFS6tw5qRenJoC2RGFxuGU7cNwpvYDWc8G2RCWd8XkRZgb1CKwB",
  "key2": "2peaS3NnSM334Hpr4ZLuLBNhDc8bWYFmLKDPkNmbQjNX7MFuN4vpoZn61gFjpMMNC9R2CRJGrNZJeitCBmuVMJfr",
  "key3": "3wyxuQ9VPPeeWQTAxN1LM2sDqPsXk5i6dgb9NYP6kjYmukTF9bZa3fny53RU6pjmdVExynHDfFCdg79wFRVN691Y",
  "key4": "3n9u2iDQdXwEQTZzFMsvTQ8ThKBYjkQE1tG4avCVPTB9RWXBUQGAFUwzkPHxzssRwYafrjfgKoNCTZmqDUP1Apa3",
  "key5": "2icpnycbZPntMHzx3issPVNbAg2CqBkA2eVGE2e5PQtE2fuSx527jbtahUdC2Cg1zttjrmTS5fcE81x73L6zGJrq",
  "key6": "3igcToyGsxZ1MSv5A2VwE6Ucpji2oZM4vy5GDTooDe8j8MiG4DYvLheXEN36LfstGue4RZFmpSVAzHRn7H512FCK",
  "key7": "vKg7vBXEvWaz9JCGNnPwBEfxPWrz9WjSLbdoNsyy8oGfnF3a53aPSJpdEyrfVkxPkheP7aRq14UcUsVJrNQnvm3",
  "key8": "3TzAAuBBupBESKuqW9FbtxA3D3AWgGCg5HuWescYkW2yoYdZ41Sjn6d9hto5uJbGqNzQh84r4miryE68FMoT75Wv",
  "key9": "5DfuZCGPfSBDjayUvDYrdGpSk86uFadjd4cE1xNwcKdRjNoAzP12wZKd4QmpM9mc6QJUBjTtpW1KaKgY31JG6aAN",
  "key10": "4YYCujGDbfg3vHbHcsSguvKKibd3gw9c8grXrfvZjRy4rYeV2XAsrRWDo2mH6cHzjMa3JxZbqAftQVm1hYQskhkj",
  "key11": "3d9sHxMv1ZaCsLAPPYPRKKNyTCx22fKCYgY164fCewJxVY8R1GiHxDtAFPm2hnFddkksGko69s234Db5fFuP4kMv",
  "key12": "asP1EbdUFooLrfYQMbfVu6w1D8kXL6FGKxxL4LzvxUnucjXvYhi6G5VPZJfLp1XaiHtSgtLJZPjCV86JwDxWeMS",
  "key13": "4VnGayRHZKTyUfzMRUDusNm6vsfh1nJkbATUgjziySTxJZsfJjQHpCmUhFaUpDi63fZJivkxscpc68hpbAMXmXDA",
  "key14": "4A3TN9KGtZFRzWUuSwgMaBznH1WLtcYe6qcsthDt8dfcpmkXCauDYDFTYd9vt5PB1jbLLBXueYX34xWVpbR63nas",
  "key15": "3MK1LGPAYv3FsmPvFfMH6JLkmxYbgq35o5D6szUVY1oHukctwLj2XzGW1weihzQitz9PHam17ryCAvVxUoAmesxN",
  "key16": "5APPchLuWQrSD9UGpiKyhTz1nuESdWeEfWPjKYLKUrya6sD8HZwrm5SKugNyhJM4AEji12NQm73Hp2PV5qUYQ5zz",
  "key17": "Nt8BxBuL2Bm9a6q1WCqMnofyKMqXRNXx2gEg2jDLkgExszZm5EfH181z9am2N4Nyj1Ss1PdA4GJjnzFLsJyikDY",
  "key18": "HzQV4UMHWVVV3W4FD5iLisPjV92asJ9jCoFr2hnWL4f1CJU4w3RX5k6dnX41FDZNrcCZcSny3zTm5WfeF2L2EGu",
  "key19": "675YvUM1odPRaRCWoPmdhZmNab4JecxZaLQ3Saf6YpBK8WbVbAvr6sFWnkwaxjKu7Lmrt4ACAEbH4EM6VjokSXbX",
  "key20": "fU2kPkJ3Cr4p15hHajc6Z4CyosTuYYUjV2erqUvC5RUuwyUmcyDyejNB91xKNPx8wPun3irNCFgpTeutqiGbG9i",
  "key21": "5TXbVhUAd956croAT1CFGGj5WpcF2f4G6AbwpunSAuCuuq9kCjeVkfjzrT6HByQqVJ7H1BhPYHBmTANYE31bzJYE",
  "key22": "H2FQouEpETMZJTBKLTCkjU3DgbzYqEr78hvnXM9fLLFefeq7Yxjy2UV3V69Q5oN4qkTM61qpUB6gjYET8pLa2rq",
  "key23": "5YHpX2diQyTQyEgiwGNTPZ3xKcuSP5mCcmoRWKxSKc9Yb9jyHXEA7wnpSyPzAEbMag5dn2EDztMEDb66FUPkKdaX",
  "key24": "43nA9ZFgfV32rp9sGkgQoE5DyNJSDjpu3aZaCppWsh6jK37DLDUoyPQYHwPbYUGGgFx8rzwHJ1hgvA9856oZuEwK",
  "key25": "559XwdGjo9EKnBz9bWf667t2t6KFGgGPYRcN7JNXrEF8n8g5xzgUJM2VdgUjbDUy9GP3bCEunsMWBLYVzUhmJhtR",
  "key26": "4awgrXjjfMwhY5nmJayARdYMLeAM1vZGqmeFvsJKRsKNsyrz5FdtvRZZJmddFTe5VtsXxSuYynbErD3hsJ2D2fdr",
  "key27": "2q1b4FXZDTsHQ9ZKb6q4gpEmRkbcpYQ6RXFqN4AVHsuJ1438mJLjHgZLji5dCfyiZyZunxVQHkNxpnsEktDeKv1",
  "key28": "3xCG9g9xkn5PpVVaw2v4LEGGRZVegssmqZrMAnd1GSh6Cvuie8iFwLxt4opjSqNeRoSa1KtJCCULcrHm8BsqaWPQ"
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
