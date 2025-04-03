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
    "3Fv8fgUtw1ohK9RBZXfToF2PaxAgLYu8339tgNbxbj4QiuNruT4hbnpJFhbLMiXpPQmgvE49739XWNaBi8mfNVR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHVTJ17LprcxGT8N3DFRT6g6x88CnGd3M2Rgi3z7EP28W9UoGt11GUGQ8sbBJP3Cv2DYUHpqXxDNj7pvdruqxJq",
  "key1": "5MbnGG111tnPsAJvTeoqT1Yi5D5YnCh5XeHw1dXJGWePWGNsM6zCEyKhMAZWDX7VYnuu6uZGsekH8hDN8Hb3ytR4",
  "key2": "59Wfj1yCxxYDzFB1aXqG6pYTBdaWqsqhZZayfP8VSLnWu3bbwxrNDiPPktjVUPKL5m7bfjRRb1TM3pB9aatLysmx",
  "key3": "2jNW4DXcr6EVWLNqAAjWHJ2NW9bS2GEWXAUzsbkMZv2PqopzjwJdsSnyhQKCUgBFMxVZ9qGrHvTBKvqex7rp7jYt",
  "key4": "31wscZ2GErHcuxx2cSJm9m9m8xiTHM6Beveb6jE1xLmeawXhu4Zzrc1buKuLKN3nTS3s8xZE9ALm3bKtrHTq3xPq",
  "key5": "5oZBuHzLwAzfqruE7ipRD7m9YWHyid5HzW9BmFEj6bJaUKT5bgJLyDmQoxS3MSXC71yRPdFzZ7FGp3cWJg1wPtr8",
  "key6": "mirLx7qqsrXKYgJnSFeYaTeprb7H6xerS2F3QaCvxw5yEVzPNaWVwVx7BaoV4R5jbEU9Kc6RAkeYkWs9DZ5pypQ",
  "key7": "24T1r9L37WTZhW2d9TQ9D9n3rixmELA37wo7nAvf61YNxBYZFCY6ykphcwTCwzn2D4LQNvkWSujSnemZT9aqDgTw",
  "key8": "5Mkb7BPZxWKNgSYeBErsKB2VWBpyyQhsmwJxjLWcrr6HJEJHCpToa4zMrpD7GQ1V6MutXepAeRq9MFhw6qAsAALf",
  "key9": "3JuKDf1qpqhKv4Rq5KQbs4p6okWUTUT1D7UTzeju9JyBJbv9s1u9WKBsCkxFUU5snuYPwWTMCNgvTzqgkDxY1SVa",
  "key10": "4US74mHwSQtq8dYwfa8nbR7xqE26cPNuUuEhFgdThoq5KVV9NPtG8zhAP62KsJ8VGamrbr2bXWQbP8EGPv4pGfZJ",
  "key11": "2z8f2WqQettyo1GWLpDSbe7Nyg9EBc9jvDUK6hNLX8wR5KrWpvavexoHtCL8PKwcXJjjfjk3ocjKhHDhr2hniuAs",
  "key12": "4ptHzz9f4wyo1dheJ4VWfWAJYrKAmqemT9sVDPkjrmqxgAxSbN45aoZjxgSZFqMk9djBc5rgua8oPN3NrWwsNviX",
  "key13": "4mry3SxRD9cxhhu3uxa6Qx9dcAnusMsiuo2JCJA1hqteS3HthXnmVtuSATKSxEZbSFGvbjSZ282D4wXZXFaZp2Yw",
  "key14": "53FTP3tSkNXAiUeCZZkkhPVcXtgedoVT6f4TXKv5D1akXvtmMvaMVrgfZcenXiMUkv77mpXeb5fiCzNY2bfyeeLR",
  "key15": "3nzFW571jh5uUJcMH8d47SUadAitYs6g9zkJwCkidXT6L77fXPkJmUUxVxuXByxgrq5z85nP1jXKW7pcQ881MquF",
  "key16": "4jpUuQRc31QFZ1fJjZtH3QuYG4iDh15ADtET7pPMYRfB9cc2PicsbK2pBPXE41yjw5ZwSuyvJmUUbDZQ8KXrs1qi",
  "key17": "4sJqYt6DnAhQYJKTTTZM6kWYxQD3akWSLsCy1ui23DXyNKU3jRmZ715AqozU2Wbmtx4n7vMMLiXUbqoo7fuwLdJF",
  "key18": "2QRFsapYzMN665AS2Mo4986hApMvU6LbZCMaEr8JLYawBRAtUFYNQQs6SKLXqgWZu9wdafSP4duJ4cbeXUDT2JyV",
  "key19": "yBdR7H3wu4KNsEF3LA34c2aA6vYP7dEjZ7ZXbedbQW4mirZBrmdayxSBQBq9ndxiGT9fN33Sv7hB1cW57fKmFXq",
  "key20": "UEKQgeBWd8z3GMMtNTV2RSyW5o1NxauTtUJBcF3sKH6fxanjXwnuqMMZr5AzW4y1PENSqrEeRU8K4JKCoND4iYi",
  "key21": "gqdhRTQzWWPnApT6FsXGDNAkyY8dco5FCincbWKFFRKJjRJraAXdHTDxyHkUvxUeo3FcM9UDgSPUDx8smwDNrUq",
  "key22": "4KcNwMU57UTXVBFFEDoW5mwyvY1Lr2edQjHf2UabRrruCT9J7VGRLx6ix8MA6qW7ij2xuqq88QwtEwwPVpyhToyt",
  "key23": "29oUB7EHsQ9pCBjAdikC61Ed78G3aUZz5GsgvJcg5wxDZhhsPXqKHkXZGy8W7y6wGRWXAyrn1txwp4gs4apx169q",
  "key24": "WRSvNZTveTSn2R7uJhsg49VrDjo8DtuVdMmzZzVCsNYUbiVBjWhoAui1wJd4DssNgestGZYudUaaBxcRptNvM6r",
  "key25": "2XdVsnD6h5GHpfqea3fvdSAeCjagCa9qGPXnUpU9v2uprnqPCVXBhf4FDZm3wZk6RWDcLKvaVEoH9BgcZ55zN3br"
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
