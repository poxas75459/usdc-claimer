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
    "52yJqmoF2voR4BHNtotax6MupWzcoCLWyaHj8E7sfbCnnDbqBp4hSNMauLuSpfiwqfuh5Z9gkx8Y2RqQvZArJniW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57S54aiGNy5zKYgxmg6rNSvYApfnyrdd8guTVqwE18hFy7mSFLsH1zBu6QLLNa8g1Bjx7dm5MUAyiwuoiAdRnGht",
  "key1": "48sw1Gwh5wdjLAR39gbk7G26fz37BJET7deZxkSmSpkMPnTSp8HNUy2ZNrhy2psREqaMv2DcF5mErjtLStCqaYV9",
  "key2": "rsw6YuA7XuFTMSiBLKKikikmLmYpFcD28t5sEJytBeDJN9N1bYygQyUe5ubWV5QuoJ5qVZv3PtCHr8ndnrveTWa",
  "key3": "3Eou4VVy7gz5HD24BsrqTyHpqTq1abs7x4drk1pR7DkNAwUnehDo4ZWEG5ZuQRt338xkFU9vFm44Qm8NvCVXvBnW",
  "key4": "4MngXsQxgQ5rSuaPdC6ZpDdkrZukKoMrFxkx4EubutzuCg3H34DFbZeji3HtoHJkwZvBYRgFp2UaYgp5bbGBxzrv",
  "key5": "d89MSg4RRJSd7d3sy1qopy19Ubt4qppf3fGzQAqwpVEuPTx8q1SngE9HdnXn2fSR3ED91U68DRjQGVY95MPXERg",
  "key6": "5eruhTJuVDaDdFPGa383pwys3bFiA5t43kvtrs7chXr8QjatDwjLwRQJWfnR47AbTYWrwjhnNn75D9C8eywoAmxL",
  "key7": "3rJzwqy1fvyNbxjdLmGpjBnPrDxhQoBjYRTYP9aGyUvU82fedWJ94iR3xAuki361hSSnQ6pBx5gGNx4qEDEdjriG",
  "key8": "iyfi9LhSgPvcW21zryPxZziW98zxs31o7aY8acu7mBaRBtiLv3j7GtzDeQpqYckyoiFGUeTP8PWUTuwGKMRKJJN",
  "key9": "b5JMZRMk4s7afQj2B5FhcgMBe56PcoTAjjSqDPDkdQd7uVwuHkv611KxU4XSKHSbhWxzkKnoGHMs244KVbMh68y",
  "key10": "3EbmEFrV2UWS33o5q6eqjFoWguN4bYeBZN4ZeL7bwMLCHShu8yKkC6ZnUMoL4FMYzuaEHYwJiVob7Yu1A1dH3qdc",
  "key11": "5U5QWHCStA3e616MgajJhjQd1sDAwLdMYbbZrz1PucysTrM7Zp2W6F8LqYuVYPwwnheCuGVeMwd5vhbBibkWe1as",
  "key12": "3cjrQyfTWN1NUB8RcQvtvgcAAJREA9yoiRo2Q4hG53NxvYKTK2aNWpnqUCMwtY9XjoPsWbY6MBnBF6rWjBPfFfVP",
  "key13": "BrHLkmxdyVskbCVaPGeP8U2jG1vaeHuj2D6DRXBaP94YTTG7GFCfKb2uSJxY3WKQrHfL7Gy6uKtEw6nHe3PU4Hj",
  "key14": "2WBe6AgwnRb4zBSSuoh8ePnFMcMeM4xMqYvUL484FQyS2ZmgGkw4xoqVQ4Ch6q9YCVuiQpbZGiKKE3zWu5cmP35p",
  "key15": "4tFQMrsT8xPFfTQrN4tMWz8fBSYgAHZdgwGeJgxn2RDLF5SiicKF8rYT5qpRMC5VzYvFMrU7urQ79oxVd4C8eecD",
  "key16": "2FjUTTc2UmLwN2243f4YaZbFJaz6kMKsPxWRMDwC3s8i6oUh5mrQAWAM2TPHVVqcCPyPBGUUytadXmPnZivNpMCC",
  "key17": "keyjdkLp5jX2fcnrxkLHEciosJJE1Q6EixWS3NKnK1X197ah3LMdoUEVft3efvWsc5gNT6556jpG5Go75yvgbTb",
  "key18": "wjijGh7fj8anW9NttVRJsPms9wi8KsBVm45SKhwjfqxfzYRHhfoVjf1GkkTcj2ToFwstmbQaV55fzZrSBwGsPtQ",
  "key19": "5o5ndGnqwaQC4Q8qYx3FjXdWtsW8YcapyduqMT7KwGyKydqe78cZZGcAhhVHtsxFMaR3ZZwpwniAa5gBmYp9Rtu2",
  "key20": "2GyR1x8W6Y153vfbF8FiURoRbUA8N8zbK3BzFF5ooyYbaPcpfRmLaMrPE7vgis1r17XkHLWYNVAETbfX6LuoWXwe",
  "key21": "2cw2eurWi7453vuxcB2iroysP9g1o6bNp9rRrpDYJYnAjegpYUSLvwKc3ay9vjD76GQ1fsQGQxUWqPim9RVFbBFZ",
  "key22": "31gHGKQ7Nv9j9MvfzxN1swx7Fe6vHDGpiBWsaf3BKi1VY5WH7bAvvbL9ywBFJQmqWam41d8cMTiucfHyKffzsVR3",
  "key23": "aLdS6gaAE7QcRt92dJ5XMVjZDCo7oHG4rZjmRZ7Fnv6PVF4y6SGyNBSvpop7nJ4ZkLJ3uqsbkm3ihWb3du29Kch",
  "key24": "48D8rLNxy4tqs8X3rkspNnKV4oXouj68WVx1c4GygHu39jeFxSQ5rCXMnNjuC3UDhPJnoAJGuRrGesfVACnrFrEH",
  "key25": "4riFifMbhuhDJruCFp7BYsBRGjLNkFPoEsyKtfgHdpPEEfs4RQ1pwmZBBtJSmFNjEDGXxs2K6AkJx5kbnAxhKpbL"
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
