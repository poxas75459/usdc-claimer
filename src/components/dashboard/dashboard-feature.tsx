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
    "4FhEhELwynjH6a2kkkQ5LPKvt4FD7vSZnK9bKBpiHTXnRYoiE7qHfVxL9h3mp8PFUcU3GSa8trHCapQt3eHziZf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yp3ueqHU46YW7HhjLptYLey4s4rFo9Retz6DxikhGLJxFwwmvjmRaK4TPMCWykP7FPkwf9Tbuy139Xk2tWHC5PB",
  "key1": "2zfJ4KBaZd7LTshRbDTnZmcuxgWCFvZXDgMFT6Pn1mN9Lh1Q57Fy1M9m5yg8rLpzqvuVn3JLHGbMYHdgZMHAQopF",
  "key2": "4a2cGXePJ9YK5Krx2oKisjKWJyUqQ58HExSeTnZF29RYkNkhDt5HQCSP9LtNwkRSWqD6Sfmrv1LGycA6GG7tDrz2",
  "key3": "BemZqW7Gj4ga6wY1VYjxjd3GySsfYJXNw1BTiQaVtk3SMmsDk4SgvWbznwZ7XSk7y9MZkavzXHLxnriAvXzLf62",
  "key4": "38XUqEQeZEnK93Lwa871pgEk1W1yMitEjPjmSjFvzENjwZEtJNYpV9tVuxP87BPHQJ5g8nXyi11A6CSjWZaPjVt2",
  "key5": "3cMzA8vLd1SPeuCv5jzLkeq2g9dtGJzpZVGMeAB7X8KRpGFmGfeWHxT3M4EUJuL6sCQ3DKLyVvqAytG41Z7ph7VY",
  "key6": "5k2xxVxYAqY6Nx7JcgAc7dpkv12dzr95eDgiKjRyf64MKacV7WaLpCoo2MXfvUG1NiqeJCofm6sgKRXRZebyb7mg",
  "key7": "2DYcrqZZXAfjGUwLwvSH1nxGVzhHb5A8AvfCfJfci5T8o9dyQPsFbbvdmapGpMRZRX2F9Si4JhyXjFSGCKdxooTS",
  "key8": "533GYTdMyNoBiJvUhAfvLzysrbdho6WuDze4VbMpz2wWjG35yGnyQYu3E83SVJMg2CtNRAce6FyUs8Y1Fo9SPzx6",
  "key9": "4PRTs4AACoVqqsqDo4w7r9Mcu7FAdpGhPSLj3yisKanUuFc8GFHL9Jo5CBdpVcY4LM3C7dDfVf9EoXrqVyfwE7z3",
  "key10": "ZVx9LqPPnJ95aNAoyZZvSHxFwtxS3i6Cp37fdc1q9ogyTNaF1yUiU2K8zVui2YWgAytjUk2qUBfRp5EkyPsRwob",
  "key11": "4WdjrWRhEsqqaswKCujCqaVTbQqEfLiBFsPavw3nXMeJcSNyUKNz49C8GKRrL44imMFH4tT1miQtSYTgoafQ3P8Z",
  "key12": "2FuCviukxi2H3tJPy1fpBU8tybfhyMd4UE1Z5p95zFKrTz41Yxvn5uMaETXnwgFnfzicgYimdXTtaSuquDgSdYzw",
  "key13": "3yaQHHxt6vgjjAz7dPSd8s6PsZqCmbSv7ETcFdDY1HeWd9wKnhyZwCCCgBKMP6uaJJiaTRPp7CA5qicGq4bCWke5",
  "key14": "4uspcaVvJbEpcY2nJSRXgBWPxQVrsxxPQ4xYvN7iV1kEasjahFwfw6EcfQyLhqN5M37BmApuTZvyxd7mHiis2MJ7",
  "key15": "2Zd52kMBPUqEBxud5GkoeYkNo8oesBiwVPcQAQviMd93FVc1vXZ9Q5Vt7QysLpReZCB97yo4XB7MeUWK9msXzmwY",
  "key16": "3mgqayPyy6eFp6qYD5mNNahBcznsNYiefFu9Z4wVKaNNDCUW3kTczJ4FcDWUoUeQVQu8jc9R3ZjicRTacRpuRauo",
  "key17": "27UyZXtJPBLS4ao8Ppg7yFG6EntW83HNR4YzDrtdH2VVTSy9DhaQ9QPyLDkHLqzLxXcwuHsoa2XxhhDwendgoJWv",
  "key18": "4xPHcLzTFh1weyTCzjXadhay8WtjDBzmycCZzJbde2uSmJs1C5GR8Lr1b3JbgRyXFpNpUHqF5zjyopnRfA2MNz2e",
  "key19": "4Bsa1VNsgAXbD7A1T9jmjF74kF41WLYqmJQoGGRaczo7y2s3LbAZqQBmsJCZCC4ZdRuXFVLBfn33ayDhZV8GSfmG",
  "key20": "2nFifzgkRyCMpqtspqAktnonZLT1AjfV9PkfvCJBtRtEhw12zrGb18Dtxuxq47xL4VraV8tBbcsq6rgomBZodQfv",
  "key21": "3LCHYs85nYxwsYeasapqtz3CtDFReXBPQuhsyWUU6tZCFFxFrb7SePXAUeB6jCxnE3nPUC5uixxLUpuMbLcRX52h",
  "key22": "59jrvdSzesNU7XSYM4cvn6JQaw6N5oXDepkeVFiL32kKfqkqhmLY7ZwaQkk5uijnzHZNQHc8MfhJ4C4tEYoJR5xL",
  "key23": "2awnDhy9G85oaKwcKLpFr4CabaqP2GWDYsQb3XE48sWfsak2fhXN526YjYyD1QtCZArScybPas74cQiExvkXGr9w",
  "key24": "3gtXm3cvnXxq5TmnM6hhfRZyLPzPbXxyK6rAtGuQrxsiz6GWa2iFjtkRKnaBg2Yp53wfTyiYHLoNSJZ4Anr54wNe",
  "key25": "qS2KrYxLwumigeTegwuQgvfyfE8oz5z1h4iB5Gu8nwPysmT2iZiSm1mkH2an8uuF62XMbvL3YvsY4Rw9WE3Cyt6"
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
