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
    "4tFxchdLVL8FRK7tGmLf1NbXdSWXTWuw2n6U39kjx4keU38qjcGZpWgUfEkJc7wX1oBDbeRqvaaHQeQF4BWPhS6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAFJXTX3vbZPMU8k19Pgz1QawdH4NoECK1FYuokPr9UWK7TWFCa19edxRqwBvtPrvUvCzYHGbKM4ZX6meVMvRbM",
  "key1": "4g2Fq4xasQeBr16SEFKMqWm7nkLzNAY8f6GAyusfjRnwoy9hPyaE8rYncvvWvN5ezX3z56TYVU4fgpFr7kukRMsY",
  "key2": "5aLfVqjr4hofFHsgoAyMDWqdAReTm1wwrXF1XhRhiy7oTVKhUUKqSdiBjYi9jCQhHAaMbpAVVBAGRwS93Kw8WRys",
  "key3": "5Ds2JmE1iuAe5LePKBCgK2cGTZ1tcVP9vpASzwuLQA85Qa8529pWoKDAqe1WAEdSt6sngZ1Y7x4kgDbZddFGfbCu",
  "key4": "2ucMVM5bGa5CGZBM8baj55Dc7aqPSingyJZRre7hSdAyb6yeybEmt7kV1qcHKTzNHCZgwxBqNV1v6GZ2un7e9vyA",
  "key5": "24neCtbH9yw3MuqQoiVu3L6dcFsDbpuqhS3pj1kZ24vgJhdcCsZmwb5bMnRvC4R8tS6XJjFMhHVBgDbi91B8ZaUM",
  "key6": "8K3dJQZ2E5rKLBkAJrFCkdHqZFrY8Wm8iPg8M4AFZHbMPh8m6JdUqDmcxYhjf9MZxs45NnZVh1kpB2oBotx9QbP",
  "key7": "x5rgMGjmvsRk9o9UruKWJYF1LMuJJmQJb7Ai9HsJVSkEBm9mSSG2f4HafcusgCriyDf7H5fAaMQsTasEs8h2Wfg",
  "key8": "5gD8ENGdZd9xtjXXepPeKtezqzspZB3yVcWCCgPYbTJ1ttyqmSqaEUNp72GCui5NCk3o6F3NkEkBbPv9DSkG6a3m",
  "key9": "4Pwef17Te6W4RUiQD1B9fZzPsbXJi1Dfcriof1MHgsnE3obhpHUx46vD7jQv97gn8NeHgn7qUipXdh8isSZPGP4S",
  "key10": "xdRKEMXQu7VPKUr8xKd8jU9ZnAXjgcUuE5xFz7AXNLxt7f1NCgtJSoe49XVzVgbQfSh7WQt4veMTNjsLZHseCvk",
  "key11": "2LtPcZ9ft5pS14bDYNyA5EC5XURahJ1k6HuzxnrFo231B2APCDBEZ1BhCKCNbRQwDFQQwBQh6w1yyQwvq1Uvvrh4",
  "key12": "4ucKG4VM4rGpBUcWa3KBzMrkQgVi1TCnuu4E1aYPxvvNeXayffUvGHBhCCF5T492CRhXbQUNatHKc9kGvwaYFYjD",
  "key13": "5XdGRyGpESMB8TFChyGDfG8u3XStbnCa2u5bBxP57Ed1DJN6AH5wBrnFhioe73qHbsBhknkSbzHWyB4zwZRsniom",
  "key14": "4RbgUQnKzUSdS7Ro6v9L4A8Nh3VXXRgJzygaesteVZrkzhrxP1Ui3y67APesCnpeHxpGKqwDXAGM9LUGT8MEDUeB",
  "key15": "4ipqcyHGdJAU4czexUTpSgoMh4R6t2A8J1hBsPvQ9PSMpnMpVjg7djMTHKi8TRNykGopsAuE8FzyUpJTvLu7sGBS",
  "key16": "dRyfGioNNrB4n7gGMwi28Wr3gj1GT4t4qTpUPUp3bJkRoFD1upaFAdjKEKebFkFXMCuwDxmfz51aEpLu6KQqkEk",
  "key17": "5RbKYA6ZtkvVk1yAdwsAs76s6xrPv71fb9NZPhEBW95FV1LtBM2Z18aNPzVxwXntTLrg8EUxMLJ4kjTYhqNw8h9b",
  "key18": "277LuhXpJEiW4h4FxabBPUS1NeuFNh148tgMrzBno5JwV111Yd4NFtQco7NFq7Nd4KCsdzoGo7PWCHPKospg1vy2",
  "key19": "2bkpoZVgRzc7i5yyn1caR3YZwA5B5CmmrU7FTRRQz9Djravcr5qUBiChqGJ5XWKpxsSq767JSmGaraUvbnwAyfDy",
  "key20": "5LaJ1KSFYYMqS1j3VCM2LFKxw7uP1UDRrpb62pi2gB1QJhb1X93o7kXQrZkJgKawFWqXDMSsu7HXm3iBgV8P3gpU",
  "key21": "5YUqTJahGsD3g36TTgxoXh9LBg4uU19nwYpDG4TxRHWPxGPp5vHsbVXmcoFznFRH5d9EzupnMkQevNnnLemZ5WKL",
  "key22": "34v5emXTECzx3AzbzhCVmNCJ8px81ELXMAgH1wWe6DoEzvWKZQS9CbM5T6vThmnUGbZhy8qg4KJNjwMHLYhbCFFY",
  "key23": "ZEyY1a5vbBa3MseKzgTwDDURx62rsyQVRKAm6GBDL9VCTvX5giTxi7nzdJFrHrLSFmzzyDrZv3PKMriP3AtXejG",
  "key24": "3Hc37wSvctvDZPKq6wBbMCDZZMQNCwvYf2hesxTAwSs79En7e8ideMThJX6aGXXYbyu5EQNZSWChSsmD64iatGSM",
  "key25": "2zTdwqL2uxe7iXxrfSambxEwvFmhKdCoqg1SJPukkgjje5A9y5Njjs5m3vJPnafbAbrZxgv1KW2V95nVKiAL4dAe",
  "key26": "4QeWHC1CDqsw131WPmV1XaA9UKewenjX6eJyyHuAMmSmqyALrtjqpyZDDjzY4nrYjorLK5kXJCaGrBkpPNcECZP5",
  "key27": "3fTa8E7LmPefG3CMHtKxP492LXUAK7Ud8VwFXBpd1WfdzGP4h6hnzgLc2EA9eVEppQNRy8Hf7y6ftVtSccTNagjZ",
  "key28": "oyNkAQjEB51RfZ5U8w83Dtz4XxQUiNJ1fDdYzHFC4mwLX4HCWhWzH75ZPFGUNkh59oePPvBFjt4DSNc2p1CVmJ3",
  "key29": "5Wg7XXHQkuzDstq7rPHJtUnZtJeHBtY8hAiRctNmCfP3oB9EBm686DgzyuzkatoQavwWgZq77S4TdjQH9iGFG386",
  "key30": "38XGQwMNH5btVFzrcbQp3Ht3jjrqwhdBkEVUnDUzzrXhkdjUWVQirbTgGD3KqekWPRb2oofskHQ3AMZr8nkCZZN1",
  "key31": "NV567NdrjvHfh9x8tLgTikwPcb4H3cjmxgr4W6rehVrLCVhEFmEptjaq6Sd6BAfGTTem7sjL2pdSwL8SYJmgkpj",
  "key32": "5qN8mSioUNkXxMD6A9g2m4Q6kQE7CXVJmU6gFjk7zuSHhN9QV3Mf4NZXko8mSyYFWRW1oUmuV4M6ycJ44Khq369D",
  "key33": "3SZS6E5ks8pDLZkBUpT2uvkhyuEptRYvrRMWfgJqX1TaA6bkHdYUv2RjZ3UJV5rEZ4MRfuTfhfo1bTM7vZA46emR",
  "key34": "41UFSLwFanmUpqa4cCd7hno7t1PFG73bx5Trdi2oo294AJsqbU1SkLvNKVQ9PEk1eJXXM5sSVQWD9QT1Htg5U4Bb",
  "key35": "pJYPJCym6sqd3cqzAQZDAznE1wSVbc3AvfwyznZ1nrYMN3yBu2rWcwJgFxzsEJvKp6aSD4KoA15NPXrACGWQRiC",
  "key36": "UXDJ5R57FNVyroBJjosTQvvsr8QCWeLFVAiiR7efd1YyPhdy1RJNefvGe3bGCgr8Jt6Srh8mfUMvXkdutB8GVAP",
  "key37": "4G9D6gQSCEDa2vq5iUiinTtuWcnNVgvCf3DMFkHEmtPAycPzyxxukBHSvrbg7RTXMSiAqkDinY8G8EWqXJBWg73h",
  "key38": "49hzJKVjCmwFFYXhKcRMr4YDCoCmqz9v7nY3qgH1a2uYZFR7Hejburt6cPPAeJsKNSGqtavB84kjVdG8TMTgQMGv",
  "key39": "34Wpw3ufSJwqXUiNrjWjzSBnAoy4FHdpJxekZNzpDJA9QT6ytYux6wC1LhnQB882sSmedPzMcvWtF6VXh2irCMfP",
  "key40": "65mR2DwtdMtMU1aDK1PgJHvCAaiLUjU35YM6gn3jekErmsMqUtSm77NTJZtqeYxumCV9vdThq7Gh1MhG7SW2L3QP",
  "key41": "5iRq4sRGrcoRzsWnhcKjDRSJzrMHf3zQtsB8dgPbXMPM2PPZULmsP32uvxpBqrfN6KY7Q7WkzMgVYM8RmNXR3cJk",
  "key42": "5AhYjLLtHved9tQ7ArGJxDQfhR1AAKYrUe8ueBYzTeKsGhmJQuWWTY3Bsgsxmi7bNeZzAX5TFAoitfiSVjyh8Sdv",
  "key43": "57ERCjQm9M5sDNH5f7NiMjgJUusTA94AN8dHiupufcRM9Rbs3urx8gTnsce18QPkXrWqfRVh6PwTGQMBYYfu4vrq",
  "key44": "4UgyZYnYeyVd4U7AvM9ui8ARsrsRWbzzrThN5tA2aHMHhXniZTqiUKcRyzqYGWvrEqC3KT9WSGHF49M3hVEQX1nD"
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
