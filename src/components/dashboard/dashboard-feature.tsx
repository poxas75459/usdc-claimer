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
    "37iQHMgccjrQqCnxkeeLmdSVhQPKGC9A3CpRRy3L3ymVsnWVpLLjjnHFfCMoj63aAWfa4BwRXaPgj5DrSBAMxgpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Tfr9wKgJtroDkkWNpPHGYNSVp3nhc4kcSHrRhbKghm1WLZv9dAGkzkXPWM4NFjyq6s4s9aSnfpajaeh6pK9LSx",
  "key1": "2zC1PP8JP1TvAsCkajmzhkPVR3A7YmEShiPvoHJXNA6gYFivPr9uC3L1koxqYkYM6fBHpyhizdSreRppzxtDu6Uc",
  "key2": "tpu7cqJETJkNDF8QyRXGYs8XEPQWozLZtWXb6DK3Bprk2RKS9GipqBXUZaaZirbvV4uPcJuQAVFi6FuRMjrQihS",
  "key3": "2XjEE3PzmPnWm4HYAQN3Wa267fdgVuw2XPNpiBEEo1D8pe4LQcPQoS1M4Uk3nxY2n1mmMfP1ZksysDek7srq5dHo",
  "key4": "WiTVM7YGa2VqZoPh5vShNP7fso7XvLqMhzKYMLwC5r5WuvZ4XT5hmJZBEER2DGZVnMDibCEs1arQSSmS7VcJoHe",
  "key5": "38KNmKJY8atuC9Ny3TceDyiQXcsUJhewo8bZPrJNsXv6ypMVVRWaCM2qeET5hE98MfMEC632SViMLEBb1fxf8xiM",
  "key6": "2UdUUXgkkggkFVgCMQUGEyppze4uNYM7KycoVCZMVUbVXk9UsC5wJh2g7EDrPJfaQdspG4jaNriuRLLrqUP9gMtw",
  "key7": "3xraCRBrT4RWDFjZ4qofsZXEjAk15DefXGzm99cVmYyqZdrDXn7KEZWEQ3tsSHMGum9noLwhxF8VAjgAcyFfJdPJ",
  "key8": "3J8LjG2jC7ctNvbRmCGdCqmJmKVpojZo9jKiqvYx8yJKEuenAYgLEeNkRqde7sZF7JAkfs3jF53PUhXKnJBUzofi",
  "key9": "n7NrwqVMNbcYFWaXKp9teLTyF4TbzvxxMKD89BwyXsHWvBcePBPepzGsNKRmwz13SFK37a3ridxWikqxChjKaAC",
  "key10": "2HgUPcMW11kNHnPdYgBbEskATcRh6LwMGDcjpn8XUDpjVkQSuH7QP7Y6SVGWqWf5zNErjTmU31bLQYL6hpqmbnpR",
  "key11": "4eqkE15Hb6hkqxDotmy3V6gvp1cdiw3FP4wkdg6mBnM9TkWzpE1ZMcfbhNWGnkQMqAJzLfC1Frp2kyFj5LGNocvR",
  "key12": "3ztPKagCRAqamCMM5HekX5DUnDVxkVCmVU4FYiJopDiwEZmDxS7hFP97sp3wpasdY89AH6kmwhWMZbV6iZCu5tmS",
  "key13": "5vRUTKXH3yCSDK3DZUzAE5pdQMNbbu6N754bXafbvdU2uMLsXUAk6b8e3XTW6pGfD4fiGFKPjPRz9VfACz7MuSZH",
  "key14": "hnJogHhjuh8soU2wrUJvwpeJvica1DxJJZEB8QaNNY2qRFpQb5vfzuL7ASCyBsNfZwvzJsHc8TfJhooLKLKHp3L",
  "key15": "42PBFjPwjGCrBBnSjSr2dPosdt18ZKwXtiWt5a42tTADptCRaUtfzGxnkiT8fFUHPjRG36uvCqqC4jZPP7ULAQSQ",
  "key16": "2As59Hu8egzqHadtxDxm7HMFx9QvaBGdKUv14236hGkELmZGeVFLZ2BF3tZWCXGwGLkCzsBYcpNFq3PohZvVbPAY",
  "key17": "2GFqhWHGKJfaMhsGQ24fmv5wKH5pHVsyb5bjcvxiyAh3gBYkKRQs7KYcfJdtoqXGjp5K69ovwPqeqC2BjWk95GTG",
  "key18": "5zWmQwj7GJM6LXeHsc4V6ES5hfTbaxxQiMssoNnraz3RVpjgLqawCPfDTS8cCVP1S6Wtdy225ySxf6QzPq1JLksY",
  "key19": "4cxp2WJk64y9sPzermwXwP6QMLjaP6VCqyopuQ1x7u5xesVmv9m2vYwfTE5pvAng59zEDxv6hCHo3vcipvo6YUfv",
  "key20": "3Sx55ADCdYRr2ScSzydPuwCZnjChyHwcsgyQoBB1xLPUtmqtSrxBLR3CV7uWUfFce4V8yQwjjYi3HsKaySTHt3rE",
  "key21": "4tPKsdiDLuctuz8X9gWufhiHzyeUoYuiBamvDxqp1kevngJPDazGQkVYbU7xxvktX1CucDVqTD5MWfGfBKNV3RdT",
  "key22": "54EoPgrAASQaVkguJrL47ZFDbyeBtGFdBhfWhYZeSK2Teo2kFWmQHYhswgzxgEPApijcm7AA6Y4ZL5bh3bjaQpm8",
  "key23": "3sknz6S93dz5X6q8xWsBTFQLcv4qHyNJ6mScsZ7MM2DE35h1TM3CuuAWciy8qQcdaPqtmJauueyGdxwk2AkDxT68",
  "key24": "5NSfwUhaJk7YKoCV4x7abv7SNCyrx3HGEYYVMa8vWNjn7gYkU19ByQybxjf8A5tSFBni16as4j5tvk9sRS2VPpb7"
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
