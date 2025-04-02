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
    "3gijh5cV96ByRDecD65AMkp1NXfpP3qDy1an2wsgW16zzLf31risV4vSdCjCcCmJ5Pf82qTmGffSY8T3wEoZNFMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qzhnmUSxNZMYosrK4vEjYHar24s5EAp1RABLwQwqC8Y8nS5dxLvz2TgjtHirgUidSGUBtS2KvzHSGL1EXLAFUc",
  "key1": "Ktb1wN7ja9hH3jfdPDZSiUpoBFnXBkWDyGgbJAHv8hqEFozWM9T72Gp6U4fq5FEgtcCGAkVbY8hRQKQLfiHeQUZ",
  "key2": "FyLRTNwwVod3qHkzXoazoa8KXo1uWThgCLrw3nKLdSUwPqBfgdYNqPASjP9EXfJ5wnBNdFEYSdDVULHT1wPrDDt",
  "key3": "3rUVZoBWkC7pUpyZtgee6YeSPsB4hePHB4TbGtcUtR85N25ZL7Z29Rjt6zPfTkRjrPN3CA8ANPx6cifsrr5Hy4bN",
  "key4": "244Vp7krd4Q2mz5Td62NMQsVjizxKZYKR8yJo7pnHi81S8fHGgza3UAbz5st8pBBAqC4g5KrH6gKyCH1n51TA2BN",
  "key5": "yKVhQvVPz1fVMp2nK9gLSGjU9emXPiV263eubjgXqVEwX9Nai61Afe59FfrzTyfbSgFvFXQGLYnCnE1vPy7cgsP",
  "key6": "2NJXjdnJQRnoYbq5XD7NVQbosR2G3WeUr39VVZqZZoAaB95CbhdC2DrZAaVNGR1mQaNW1i25qjVNrKdAkXM4U8hC",
  "key7": "2H9w7tXdDzjUZBng3nWK6EoBsVjTEfHqD915BxXku814GXcxgPcyUqBCQawbuoGYNNt7fPjRfy7aV86SgYaZRdr4",
  "key8": "33bhG7FL2YnanNuCwBc4npL8gFrTCMqdxt7p9PyXoGPWvLunQtSPcTGN9qGUKqM6i4ZRtD6jtD1ddPeTvjcFCDiC",
  "key9": "2idhhf8Tjssp98ZRCb31cgpg3QHsTa6eizRNUa3CGqCDWZQoMhpiViTQqPk8S85qqYFtcz9uWuU8ignrSmzrBVXG",
  "key10": "4Vqhx4gTVGzVMid6euBuf29rTQ9c4NmpxzRZWfr3p3zH1HxbJZuyo1fJR5ppv74P5hAd3GeZn9NwGmPnrK32g2hn",
  "key11": "3Qh4SWdSp1PW25p3Pk26SXmoRk6dLpwEMJkkvcDTqnRx8FYFFpnwtuBmThJYhdhvNK9rbcB1Yk2NRMBZ1WLkdSFf",
  "key12": "4QBL8CiFfYxe5GPZuaMwjyDjyUbmtbgtBSJ7FLMayeEC6MUD48eGgnJ2u39Yn8bwPcDWCf36BZGrEFuU7HkwHWdG",
  "key13": "tafFAfv3mB8B5JwwQk5ZBG7UpetmK2gKZt96z8uVMuFLtfHMpvp6QnWAjgwn8AnyBp6UJsLmB3kCzva1WJnvaar",
  "key14": "xGtMdc9HzM2Ti7oTLjLJXZkP8c6yi3THC9XVHfsZVXMzThqkagkqw3v6Wf2UKXpFgVjM8eF8WBJKqhHTcM5vPL2",
  "key15": "4iGyfHLNT3Z5xF4QdPTU2zukQt9K7i4yJtzQMSWZVcNYzz8rJxXKe3Bqtev72mbPcR9mj9uzSiKy7nr3VZsENSVK",
  "key16": "5SqZxs15ZrV731kqM1gsZuA4jf76C3ShJrCevQR6ui2ZtGa8cHymKEqxm5QcmoY4oGrP26AZ6CetUTHj3czpKRKi",
  "key17": "4NDVqvBsJ6xsRAQc8S8oz1tGujarMTJS9M8h7nE646APWpepoDhSFiLnAWQJBZF2VBPqVkDprfZC8wNvfxSine4c",
  "key18": "4js88MF4qQj7EK5wuqSqD12JdQrGMQGCB16UdDfSsKVMDzQeFRWZwcKkRzS3MGXZett7gBUubfCA8jzER7mWuUiQ",
  "key19": "2HyK3FhAj2ynWwsz94VB4AZEdW1vh48okKMHFQ3sJUhv1uJfUQ6uMrbBxqtrP74GXjoVcuxaKmJaCmk9Nfgdfhhe",
  "key20": "42H2eegEaa1jSN2roYMzXkgkkbsyZYiNmVFJrrtESadizkxaUohfMKecTbYm4wKKVoap9jHq4WQBDbbdM9Z92f5i",
  "key21": "5s4oWQHYei69wNExnjzcz93vyvj1Xw9nwv4Fet68MB26KVFMxbz3D3hvDBHkoYrG7FUPXTLLKTrrUwFcrM1uwG6e",
  "key22": "37CLZQXGCHLbSXWKBq2h62fUbTF2uytMq7XWvtfUjSVTpmpSiP2bETYus4pQRysa8nRDA3WtG6Wj72Cy5Un7KDiu",
  "key23": "4o1Jjvv4vyV125GjbuJdXYbWQJsHWTjFs4gXUdVAuJvzNZiZJyxV27YEr4YHf4v8Wy2qFiSkRrCLDZddXH5HHsSS",
  "key24": "2hKjrEwEpCi2sUiU4EFXrW3tHAZxvyUXbdDoRm41ZCgTFQHRaUokyXQeEWX6uoLqJ7aizjE3XLG5MAtoD1g5sGBM",
  "key25": "R6XkH2SnKVqmoPvNRs9HxTiVD1FWoQwzoHUPsAhZeojcH4n1RJ13sYNsi9JwBYX2yqzTfSak9eu63DXfA5JgNUg",
  "key26": "5kz8dDcxnzhVo7gBpna7xATPZJLwhbx3Byd3NoN6ks6BzLMajKrTfdko4RrCQtAAr6xJohmCYxU1AVGb24vtkQx8",
  "key27": "LLGQ36CQFm9v1VkFvDhBbH911oTeTnqdKnwHKwvjBvR9LckVqwbJHNV5ZoUWtimTzfufa87747oDzoDKM2SZVBT"
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
