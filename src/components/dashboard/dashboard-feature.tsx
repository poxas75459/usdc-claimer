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
    "4PcNn5j8qSePkprvvLwwcedeQKxNhDAXyah5Gxu6kkUheCdYZfS4maKKY4ZibS5JYSpgkCZxMxcUzmpo4gBDJcLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v2zfH6cpuj5bUBwGfmWWxpwEPFwgdPKX8ceEMyUjqhPdvZzgUsdUuDTsLr2SH47huMRmjEdbJeSkHWDhjuN2mxY",
  "key1": "5pBEToDD9hwJ3t6CdebZ66vMpbJvy1wBhWgHZV68NTxRHahjLSC2gSrdYT9J8gaPUxfi3aFAsoJWX4GWuoYLdnFj",
  "key2": "3AFhkMZLzwG45UrNjnduoKE68CuNwn6rF9ZDW7BBDCRuHr4K9biNesvzfZDEjJxnLK7EjBjcR2rd3mr5BWNbyvVd",
  "key3": "2CLQ99iNYmWfFaTXdLB35VcdrZvPif88jA7QfmKVhRB68U2H9s4fj5wpWsNd5Aimac5hqoYvSbA2sZLMueFaaNYA",
  "key4": "2fhuwvCe9dDh5T5bqqYWNWvM4RnuAnCKb1Q3v7BNP3WUpzbuCLzyxyoUCdk75re7FzUUkz4TyHXk79sfWcogheMb",
  "key5": "3EkqntTUyErZg3XZx2Z89s2Et74RBtBzra49q55rKaTapEbZM1JhVoRnYKfwHZmEYXTcWgntRR3pjKPvnBeRU6jf",
  "key6": "5Xq5kDjb3BZHGJcgbBn4aLf3XqjCRTEn1dKDDtCY3PKdPxStvPak7xq2hrkTo2s4DQzHPR8A2QezbGcaHJmJdSko",
  "key7": "5fh7qWeuSyQ1PkoVDbZX3a9tFXve5by7Dp8BpZhaUa7wLzVrVsNbMNtrMXXp9DCcEibcALbSL8fGL3C7o2gvQ8gh",
  "key8": "4yzLqsVWLYPej2x2PrAgPAYQ8Dbymf7U7Dvn5dedACJRtoPhScBWVPLUSjfEw9pLg5CZYzRTRzF1GsatTZmBQkpy",
  "key9": "wZWJvByMsDvVsL3dpYU71FsdFxLhdF2i1QhnB7ha2Cz2QFzoBHwAhvSaPkAPkpVyD2uMoohYpwYsbqpcH77nyJk",
  "key10": "5JKEh5694SxHWhhsaVNwUrfn1bNndBS6LNojPGimkr5cAJh7WQYruxQHUCizve6febb1goiVC7Bkk1vQTs3EgkwY",
  "key11": "4FwtFcYCFfQPJKNe4zd3vLw9oYRx8aeTLpJzT4nv4L9gfZ8Jw5JrBwNP7asQMddgsw8rkyKkow3vAaFGkzVGiHnJ",
  "key12": "53p24ctvKLeUNjEPHT3DugZHsnGmtrmY4uV1Nc3NRiv2Fuqc7FgExv8qGbYqvREnVg34gkwWAmero4PJD8tu9NQw",
  "key13": "qNiY8umHQyaECwXk1Met8ry3Y4PRugcqjfDuRCiuY7fTrZFVPFhHws9TydAyaDgsqYo7u5cJznmkWCur7EeAGie",
  "key14": "BMb1dveH5wQzWraEJtrjoDBv9ND9HuoHFabWjRSmbJTrDezum1vx3hkv2u6GngyruLSpkYsriGwsyH9LvWNL1Uv",
  "key15": "iQcz3xV4hFwL8Abd1i9Z3t2B2zRLbKvFd4Ny42fntvkW4JFx1vz21KAkXXdEEopS4Q5AQZ2krU2Ge9U2EEYXSka",
  "key16": "4sSGpRD3yoramNNKA6Gm4coC41xeWt1tMUmDcRhCWTnmTNihuWrUNhUA6UDKtAsBtGF9TUn6Q5dMU1fGMrGrvXFt",
  "key17": "o1B2R39qWiG1CHJgbWS8dnuH6Y6tmHs33UJy3tpB2sHp1q9nWXMjT1dxYzuQ7QDTtN8PurxfzfLPnRQVk7cgDxS",
  "key18": "fKzPXVoGQZ9NafQbTja3gdrd535kZNr1qziaqqHPnHdaTt6WsU5PGiu7PVDzW9qeobV8TcLNMfiSh2HvkwrxMoH",
  "key19": "5yKbZ6LXfPmRxHEjnDZ3ftcPEuL5H5ngNkcdc2e4s7Fua1XRCeVKYumqHc31yHGE2h5KmGHoEQ6tErkaZC1Ah1xJ",
  "key20": "pt6RaUHpyJFWPqi2xiUSrTbsBuDGJEX3d3vrbNwJYXRo1MkQwx1mmzJii2wsdLQt8t7f8zscBFUT25VTGh2bAzd",
  "key21": "5cu5apZNtNga3fC6uxptKGdzFLmiR88yzvguiBjomkSjDQFmYjmgH2iBjxXJb1sU6v3qvvXF3KA3tP5uUABMNxv",
  "key22": "4NcxY5bWW9e5JLgsmUzWXm1zJVBco84LaTYfmdCofCMLMfdCaDfYMgFJ6EcgbBoo75jFdzcZbwr9LfRdNC1pn5EQ",
  "key23": "5dtJXum3jhqFaeX31guuJmpLwKS2ixZiwjE35Rsk32Ph1ehUvXKv6ATccv4xE717nRyZ7NSyvEWHVJfvZUg7A2GS",
  "key24": "4Wz4KKzECQvwm7wMkFf1TpFKq6a133SAmWz2VoVV2g5XHsRLjBYUmQW24ZkNzunjWToEBd3KTKRAU1Zk5ELibvHr",
  "key25": "4kqC5oL8yvpNgWokkEJp5rCW7DHnqDXkZRbraiBeJD7R2F9ERUDVU7pce2STUvALBKTcuwyFNem1Mz6iU9fL4f3L",
  "key26": "PNeFUHwqqVbfBwhYzDkTAJrsSTqa6u54m5nwyqtKTRjkHXUxF1f8nDPi7mtWsP2LTqd7woXYMTYek8RXjU1TdRp",
  "key27": "5c2X1z9qXUHUCZqh1tGN6PwsMvwNYX9521ZYj87FcoLEqpFyEYrao1UbrnEHyeCfoiF9bZV2BGtXWNCA38kFPLUF",
  "key28": "orbzPUX3vHxXht4dMzU1mzpSyuHmzo7DbhwpTRnhSqTVkFPVtMpTosL9fiRC2MTzi8TpXZg3XGKjTrEZ3KLPimJ",
  "key29": "5NrHBemXeDCt5TLPkcxzVAfJ3kAqBDNPyPCvc3mbYSgopD3iZpVAm2tGAhWJ4XTHVvPdXKU7jdAPr1GUmwGLd3kf",
  "key30": "1s4JpjTSmaqcT1d3fWMaghQfLBGZhNxJZHHuEYv3quKQ64mn5rVgAHfrHqs6VeKR2AYVjFrmojMqT6JJ1aj7nGY"
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
