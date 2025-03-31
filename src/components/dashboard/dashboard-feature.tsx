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
    "5a9rmEUvahkojREwGmSGpdUr8bdWB9GUyLka8JUfjLxUBmGB2BRTL7ySxFm5KNLLGuCReq69GpcGkMYng85W8SDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTvSBuspLhC4yjDG4XhVTFE7z1CA5JQo4h2yfU9ogxaBmyDfVjBNkFLMGFFnTruVTTnDo464YSEiPhWq6YBE5bZ",
  "key1": "26JwsHXi8NnQ9Cuc1muk53NfUZiCh7ojJpL2CPSaCPJq39y8uUjCYREkmC6jqc3JUah8YdCSbhreuLvTTNqnHPYy",
  "key2": "4rUhPySJVqZXNTBvBBQRX3esWXPPrcUiCZUB17jPufmdbzuAafRZ437EaEKYkWuB215yFf47Q4MjXDLGum5fUdRM",
  "key3": "2jKYja4h2w9iZZeXHXhnFNBkLWBBAnza5CcWWgt3zaowse5mwGEMcJui6ub7paFTDuxvuUA7ztYMMjzugWcHCKyJ",
  "key4": "Ggt2RNpUBhkNViwZZ3yJdRgVMsQDaUCx67n99Fc5ek7rU5BFemNZB219n2x3vfCZvjjJP5EapKKE47tvbSmiDeg",
  "key5": "2uJVttBTu6ZRG6Y4wFNYjCnqy2aH7Su2oe7EjL214B73xYeaDdFwKxuUFv21WuzVmYzz8HSSkYpsekFZJ1wkg9mV",
  "key6": "5cdE5LTcUX2uQGasLWWD9ZcWq24Pi89VZ2RBtPme42BDybrAtctSx97sujwQV6t6pJcXuWAaXCXEywxk8HheXVEY",
  "key7": "3pgCVNZtrhcT8Q8bCWq4acDCgsUF6BGLUkpjFkEo3Pg4AWHwXDCgY3n5wWCYXrzDk9JHZoNWBzvbnZtsmqgBB7aH",
  "key8": "2V6uvgtoKQiz1dxkcnDeeU7rgtSYUhPGp4NS7LwAtjnsgCN7MoSMSmKbFVE6KaWsj4kQ9Ug8Zs4bQttbs48tJWH",
  "key9": "oPj1BsZxZjZzHyWGGh9NUommGo8CWJaGYczmhtsKSsHUH6BjKotVok8sTemfo1hWQkmEqEsN1W1e4CsKtTCb4Kn",
  "key10": "3RGYkSy58a6444LDdfV66NqVQSuEUFEecQtx5R8HPkDnjRKdcnjAKPiFGnDvgrSYKFRvpY5u8C9tkBqAyBygKe1Y",
  "key11": "rnKa8khZCZpRBfoRYtW9F4H62GMeVUHcmakbKKsuDJq2m6QNxNvfdKqg6eKiJL8RVAzhfkGrZzRM9vCjcCdhg6g",
  "key12": "2784D6iuTAi3DTVpayxy1sKbpjjuLQishD69wqyepMVpo3Sow86JJnqLwxdv7mzd2gva8pE1tLdDkiDYBQMEcG3y",
  "key13": "3ZkWadsQjSFsKa3PYFyzXW8yyHF3Z5P2YQAGFH3Fp2Dy2VP6AwFBpErFVJqzvtQAhs4yVcaJWjqW6WUbuVtxYrgL",
  "key14": "HrDJ2Hb9zssVkRSLnjJ3qDZSnjyLxdDmV4Bxw5wKVwUGp8PDdELSKehqKjK8AwsmeDq9BeVTBQUfrt2BjQG62Y9",
  "key15": "3vLof1PvykLdfRvhRHqKhqnqo3DeA3xvdpZhgXqqvXRhnnMCeeuzRMEf9ugTyik6yXvPahVjdzm3QEqAX47NDNHT",
  "key16": "4HMZUDbMXvHsWT6UUidqiQv2gKxNq82JUYmAmkvowCg6mrp1GqAd5o7Sz7DhgghKdmkGN2h4PPJnZEjqyoV9kPzj",
  "key17": "2kkJUBa31XyabmtFFuKvyAaH5CQW3E7ApzDCereFmXeEJRhXHPGXah6B5u7YvKyKBdtT66JPYmScbKeBhrgSorQ2",
  "key18": "3Y4gpQh8W8xH2Ypo6BZDrPHLLLtZqr2sUJ6DYjwqXVEGVWpQGqUwjRtck69gH2qbTQZ6TqSm4bqmTmNrB9xn6rbM",
  "key19": "5UjQKzK8KCJAF5XSczBz9PVdkrx3nygH36kd9QZEmbsbzYLgzhvw6NxnvLsBaiyeB6SejAVw8fEPxijvpZQuc8Eh",
  "key20": "hyhAKHuTuaCPNMBF3G3zWhdkWBx8gGCX1Wzmmpqy6VK9dfA8FQKPePUjLY9f8gSpdcmSE6QV2zJccBvk68nN5ru",
  "key21": "ibfyQX32Wn2zoPm9aBXsk3TVviSq3Zv5TQiPia77JrJhEToRGgtw8YAB88Fw1XvoGzfDVxELSA1jC54rZ8wE4Mk",
  "key22": "jJav5ecJbNqyzgE9YtTiws4kXKpMmTirN5NKQNBj8ezb2BJTnFSmRMyV6q2XcU4b2xKLqYHkx5gCJFcX2QgAcRT",
  "key23": "5XCaCUFuP1iNejuTxqMwue9xNqkFUBL8ex5TEGheYJpS9Z5irErX9f62EzKRCvqSTA9bX4eJT9zDAG54FvArzWJv",
  "key24": "4ZGjtbBBRUZJ9R5fpjnbRJaPacNTkeEE8FazDLrXPG24ePviYyQdp4wEz9VRjJMmaVQib9hcCm5cKgT4tpJMNCiF",
  "key25": "5fWfuFJidG61VNEmMaKQ1FWuXtZ6nVCKzavxqPPN4dxqAJNEd6X6iVYbgEQD49DKz7w8isFtkArzVX1iP4CzpeLz",
  "key26": "4rFT39E3uoewhTzZVmzUzEcbxr84VQxBbph86fkgrqzs3y7xoKnDnL1hCdjHVWUpD33srYFXnzo94uvr1CxWh8z6",
  "key27": "GG4uqUMBjDnMatuXHFDJsnKEcEKMt9pBmbTiRPvvWLYU3bGoSndKX7p973BMrJTeGfUjpHUw4bKA9suaQEeetL3",
  "key28": "3xaFgtR56KHKWUkmPGbUaAX3dBidLVqATYNc9TQLthUjaaejgxNNtsjy7hjkg21nMNARkPRURTnQrTGH7FF5kcjm",
  "key29": "5wvwp1CSEjvLf1Ajhy8bjr6nyZd8Jyu8KdnMphBBwcH27qBJqBuC1s4HUR6u5aVKhvkj9ins1fUApgAHDuiCjsEB",
  "key30": "5k3jGA6vX5WLzM3bCNh43CjeSoAdiRsc67RfYmCHinsmHhtC44Qek5jB26hmVvp3EB1RoyXgFLbFCxg8ZqSj3Ska",
  "key31": "2cWBvGcA6L8Dw1pontFb32fGjvWgMa7BdKNtvaw7vKKUGraZhmFmVULzRAHqLMs1o9DSV3MjwdQT7rzQPsdm7tBQ",
  "key32": "3NZSCfJ43ZVhid4QFKs5FzBSpz43tRPv6gTq1tmn6UosHP8n14AZjF2vfoAVCXjaaEcUJ2tRwcWcDJDpmnyMStEj",
  "key33": "4sVcQVT6PL3kUgeitZyAbNVSSR7XNqebgLVumJgdAPimmwV8Sg66GZFJk6Wdp4n2SqfMaXiUKd5SbV8NFMYD8hYi",
  "key34": "Be8CAZLayxpHVKswejEbcsp8UFgGR4YjJCWyff42XCXqFTYNuiWQ7U8NyRb3ourRu3y9DYChgBk3TdcTtgBxcJ3",
  "key35": "5N25dAgur65oLAgV5aETkrAzg7vSvTF9tcYf4JekoaFv6XiThuR9MrtimDXg3ZHxwcbhidXYhBwK7m6LfTEQHqho",
  "key36": "58HAiLUhAXqTiryJNxCMLADfjsXhdqorvn3ghEnzHjcdHxjPkc9PDUr7bZXoNCN7ayL7KVpByReaVYodHJPXeQ8n",
  "key37": "4QNXvnqmq8dJerxgBfsr3xUotbmkQevmNAsWHvCkCTZ4p1mw6qrQNsKXLkDPJagRSiVmCLCTSGcH2deTQmBvEXd9"
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
