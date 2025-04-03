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
    "5E2JibaSikABchVjbPVL5YVqG7hPECP3L3cS5rdFxfkFtN5tGoqavF3VY3N5Awf6jR13XCjnMhCRRDpJoxS4np2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Y2t7srQR229RQavxWe5d2nwdUHHS4fueewR8XNVyRqAfjFggNRbyryiX4HGFrwTBXeRH2v76uS1RseywxFo1ru",
  "key1": "2TWbhdSX3Lw21msiogAhqr2kCvs9a6yVCZDHiwhbq4EWbmnHwBX5WPtATZoczEpTjLwQTvbDx8C1Kea6GyHgxVxB",
  "key2": "5RegwiAJd5n8VpaWvm5qqqbM5dr372y9EYRA8hBFFPhkQpEXN6aGHjSWdV1Zsettm69RU8RG8QoKbcuUuGFSNc6K",
  "key3": "3TXcZ5cT9NkvT2Vg4s9w1RAMQEV3XZiMcrpmf14bbdzP2xgG3feB8tg95UpqPz5fzaPF34PGzFsLPHWLSf62vx9A",
  "key4": "3i3Y3K1FXHFaDdPAYB6KVBW3vSRYw2jBrF7ZaZ2qjUKeLQMQHCbuD1PWMZ4jx5hsRbg2ps57798CcmJiujvSirXL",
  "key5": "3b1uSvb6noKm865yoQ8MvWfzQzG2V7mZvq5poRxcp4MNDqXpJMz6SGVN8VVjYkZGYrnf1gsT78aGadWtc3syBB8a",
  "key6": "3tEVmtgQ1Ut3uj35xm9Nvi7upnJ883sjHYQinooM5stmW2uYLdii5rMZ97Zc57BdvnDzj1NQj8wMsNNHUmzWWy7C",
  "key7": "4cNL6NVwk3gZn3ZL5vGmsN4EtSekYQvRCcga9XC2avaRDFmtAdnwM1B488TGxZ1wUPuA2uDrov6MNZMweWXWxXDL",
  "key8": "61cN8tvY1QZJsLUdFFNHs5Q16k4tqnZxnsdJac3EpmEs1fjFiV77vZmXU55c5xNUjSFZJ38Ui8mFWXbAy9LTw6iP",
  "key9": "3NLzYHUiNhsXjt9q9dX7safMLbrAZhzXAAh8bYwrTUjmkKRRcVrnS1ZQFePEKiqRtuFxW8g6itL545NndKZgPcLy",
  "key10": "3vAXso3rmtrSLACCBT1z1mU3S9Cds4YfYvdbyTbcgijPZFiRMsjPgUukaPwkAHL4BozjfG3Xe8iEcLRTMmLW1A52",
  "key11": "5HEDPXVUDr4cyMekzJmt24EU8e8e9xyYwVpXyvuN5AcgfGJDuxfBbiKsx1sRUNGw8VwZUKRUtaDVNG9QkyGQjuj7",
  "key12": "3g2tuM2EpTYGVStTgkmTP1E2Y17H1moj3PkHXiKQoATQztrAbTet6VMuLbGRjT8YPdabrTsXqbkpVkJ8uQyZYBtD",
  "key13": "4kxXsmEeeGRgc5Ei6KTN88Di36TiNysZP4oZNycYHoHF3VFbAQ3qZKv7b8RAmWzPTo9PN4QQd1VXXEuyrP546twL",
  "key14": "3HcQo7Cx5u3iHa52uzHwvPSJx6Dtbb5m1dXUYScijYeZMKcQrjrAXqc88mSAF8zAxWZZ857ob8qJefWTgNgoKBWK",
  "key15": "4ip2gwU8jftZEU6wtEpo4JYSrAiJHJoLYxsnnEavrzjpWr7Af9DQFyj2DZxCjPk94BtAeMh73kDbsChTvu8B8PEn",
  "key16": "D1qPuNzkd7ghuE1RnAnRcTSxXVfuaMojcWqQJzYzwnhFB8d9zQGjmTnVvTQVW6TrxYwQVDe5QQz3m2RRWDMTbHw",
  "key17": "4Q4454yFAHAhe2QQk5ASqqazaDn8s2gfQZAJk2ETnPDP5Dm1FRh6guwdN4eDZh7avMYccEogfPTFyED5u2ZwxBNR",
  "key18": "c9Q1PLM1zDk9xww1UsjWn6VwbxxqvNutVfMMeM7NtrgEb7Z434F7iNWiqdNpTWCDBL5j6SZQRZq7yKGxtbboSNN",
  "key19": "5nR9UzBA67mvgtkedBHcmgSbsP2W7n9GSVcEiYGnfBCkhEYd9UJjtsCZt5GPhV6w9fjAHwoAQrSWJNKgfNZCU9Lh",
  "key20": "23oTE4k9vhXw7WybeD9WNVzVjkbh6o18b3c2ZM94xZzSc5o2o3CxpVee8kCkp5CtU48ptfzwq2j8YZfoXhmjEgz9",
  "key21": "4qxhqKRTQktC6SjMLFqkouUvbHC9UmcnQpPfo35TiPTq1wBAAZgwBZdcKNFnKdQQMpdHLsFBzVkNPZb6aVWAyBNw",
  "key22": "ZTL2Y5V5qpqCu6ZwTMRsv2W6wPuJUH1bSfqV6W5sfLjSR1n4aBYVSyJdwRPUf7QdEYJVpPdAeWVS3CDqjGw8o6b",
  "key23": "3JswoJuvxAWJjhH6bP9wwB16fTFusa47MqjgsEw8fvVAztXTXSmvTB4EG8bqnSVFu2sZvzbNcp4YLZkk68BArx8k",
  "key24": "3VFernr9FGJ7WWtqKPCfqa31Ah5gRpBphwGsLni3RvrC9JrWME6chgTqbiJG6W6XWnNdqsh2WmJhJze4madxEYrW",
  "key25": "58d45Ypd8eqTRGxqUBNtZruKcnTk93VkHxPSKjcyXXvBmcrfT791BPJB1Bo5SWZGPuRyBAUhuHAc8r2xv8uZHuzm",
  "key26": "4fjzS7XCjY9AJt3EUSvyACCFWK13Ht9onv8WKwtcNLCdW5jGgJAUR6XSm7eVV1Zhm9QuMpbrf13Ng1d1E6RMQ5Uw",
  "key27": "2Mws8go9Z6Hto5Y14DF3zH58XpCWrHJDVwBkiQq9tKetSMSp2Uuqkab6EtMvdcTJQnGw7gyUZqjf5MRGPUVhy3Kg",
  "key28": "5chn4HzFeWUVahrpy46RUdMPZeaDx6u728mwnwBhU7FsRaPEK5LaKVQ8zzmRx9N8ddLTqyquAXhE6ikST9e1cemu",
  "key29": "3Ca9Yt6TzZ1LVD55sXSbxcgHN2m3t68w5CxrDrV1bPoi1iKTRXGuHh2cJExyYq8xA5gSditFffFBNwWiRxLrYoJ4",
  "key30": "3wrv9MEmbe2vH2DG6HnqYC3DnKRiW7CdTZpV7c2YmQjXNvN2g9DsRQ9R49ex5XmmRBU2pSGXBbUHanS8dSfEVRqN",
  "key31": "3RGscWAJnKx63qWv6f4Ks5atBq8piPhRD88CsdvQ1mLg3nt27yYETAW615GEarR13hv5DD6Gs93jMZhmP7tKstQB",
  "key32": "3PGxd2kjvC5mz829zg2kiQNqzVeCet878QgUfi1ANgwgkictAUi3qAzXgeMUtqTbt1qrrhxXh5BXvF4T8DDySEYy",
  "key33": "4hCusYXrknPLkdF57FAmfe4pccnC3JU6D1STfbhvGoMdQhtA9vK7ephphYBo8CJ7i34mSNnCVHCsB7uewZ6LSaYm",
  "key34": "5CE1vH9AkJQDNE9PqxhJjdc6caZPue1Ya7Wfx3iQhf6DgJacAaHxSmd7mK7u68k7AonRjneVaDQMTAgJGNAAc9pP",
  "key35": "2fCgv78byeywrkNf5QAaEqMBRFPRnTFyLwgwKyUqJHcLV5cSJrC5qrmUj5RpWvP3xWzwoEYL4XBuNRDfe4TRtZAH",
  "key36": "2FwbiYjqypjaaMruEKttm8VzmrKCRno8oecaW3EVMMLfwdNXqxDJeL3LWMQY3YjRGKdTp2vtjwwutj1B3MGLMGLH",
  "key37": "4JmpBMqS5txRSrWbKJatkmZNg2U7ngpJpohbZdCUUV6tikhdi6d8TU873zFxmeR8qQp4JgdYioFZHai9FvGbqUdq",
  "key38": "2UcJHKegubUTxkjovvGbGrN6Uy4vmuMh4PNeXfxyVoLPDZWvFzcMyoPevuZezKvLCWqmeLHAXgv7AYFn9wAHubDE",
  "key39": "2K7abyF7veERQA4KVKQYV68JJ2WqxxHHzLwmHKKWCohSEKhiYAnQPRss8Zv68soXcqh9h5UsvYaYX25GHxcVfgSW",
  "key40": "3hqtTF9gkLUF9MSckNywb7Hug96ggcvrqGqhv5dDyrseRJ8eaEow1kcgPrHG8DzjEBSmfL7yQoD5uRUioK2aXnF1",
  "key41": "2nJU8j43kQTiFADTp6UK1ftCbgo2srEHqdCx4hQx9gVrh1t1AEmTNmrNjfCQ9x4u1Hbi13igqX5Jt4NNDPCQdvPS"
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
