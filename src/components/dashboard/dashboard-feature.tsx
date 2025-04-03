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
    "5sbErB631xqSrmWTQrQwmxpY3DRBkGqQqM48JfBcXSrBH9rEPoeLQBXRKRkwgEek1ZWmZTSWb8bEkYoKx7Vr2QmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuspAFMtyHpGQy2VoQxbd21y8VYfKdiSYkWotkZ2KHTKHeRhGUJe6PfRP5CFHborBQE1Qg5AcuYSzac2t28wCMD",
  "key1": "EUJbXeu79go4QkDThBXCTEYp7NoDZi9UXSe3ZR4EeyS9BhaSS5isZzw8jEuXksV9st2So5JLCKZLEgP3GRYnpnb",
  "key2": "3NjH8WcPCdWpiLg1f9huxhgFyPEee79hoUug6dPYqfPf9SpVKMBf7m4Jfvxmd9rJTDDhHm8FmUCcNGbvkFg1eWy3",
  "key3": "67KTEZdfvtcPyarhDXs6KNWzNHqarM53eDW2iB6uPpgo6zi2tZ9nPt6kiJFGnmZCHGswfhGuWtcGQ2TEb4bvfRCW",
  "key4": "4kQQPoKgg4KuFB9UDo8EV4V8eJehSvMqiTQd9DV9hRbVPw9PJZ4Rp2fnFqFXaiEyhperv9YPYQpLMkrYbtkHZjmo",
  "key5": "2iseWsogYDcviQJVYkw9LQKQz46VT8GAxSiK9DK5HToaQnyYvxCAqjuJdZiDyn1LV8YbndR2zUMoQXxBrG8Nbtd8",
  "key6": "3AJgWHgZqTRY6Pdbo8k2No7Pmbkh3FERsDwj195nS5ikon7pENzDjWNXhRxtMp758rxUF8Ybf7SLe2RsTbct82Qa",
  "key7": "3YdE6XAJNw856NEhp3kchtwsCKwcdQ5bXpJD63hFuzLpnVgkBgP8rQbmZ22Hb4Fm3bEeYMEhzzUNpq6WEe16pVzM",
  "key8": "2mTvVivHAiwKWuRKryHQXottEHCsDAGwUDXamgGZegT9ZvhLkuPpFRGYGh8piZwRu3gTgDXQYvQZZNpMx6GwiR29",
  "key9": "2BV1bcs7wksiwjkp6hVZ8WwjwNmKswjxgKfpE7UCfa3x4TiqXjNFsfLk4cgAxAmEzhktYbcbRdxzXHCnTYL65b4s",
  "key10": "4JcBwD2rNLxAQp1NvMpx6K8ShfcFvdJZaZxgme6Rp2yVhD6USWBrxLVJ5DFPvEjJUjeQj9cYWq9MKDVxjNKgwy9T",
  "key11": "5DMMoYhcNsKMCr4mLvmhH95dMFALTd5rsovtJKuBXxRQgHhXV2y35ToQMWaameVp7cP4WbK8JFVgcBmAs9M4UtJz",
  "key12": "5Xb2tjoRN3DRcppMp2erydiUsrqhJrWhJxtW8NWpzLAEkhDGJpa2zDKDepzZ8DxNSsPFAihKUJWd721AYW7Ww31A",
  "key13": "3wJhp9p4HRuwAmstf7w6LikDmYEttGwoamaEbomCd74ATQSLZKSBbY2889rHFchtYZatNQNbpEwAyU5Y8mTJJ9fc",
  "key14": "5ZdJez2vqH1mz6fHAK97xRzyuzMpaFsf2C66F2PVXj7Na3Tfyh61M6n5yjha7Gx4F3B1aRQLhXh4SG6yVeZiSxKD",
  "key15": "KgYNCm38LhQKNzeN2WG3pYb2pz5K59JsjgZYGvQrQyhhdCVCgGChpEJ64YirmzFiGvayYAiZKRUzbyzoRfMHMmL",
  "key16": "5Bsd5QDs6aoeXd4JEzcu89xYXf9Zo7cYzscd2RCBpXF15ccSP6WrJtkNxpg1WVHK9oaVhZ3ryJfhap3rfoDJwn2g",
  "key17": "3XMnC5EDCNiRPtBEUG2N9mzr4hdPGLV7yQSQrwjavXy4qMoNQqa4D4ykWqR5TB4rum6yr1KJz8qEm4pPRbW4HXo9",
  "key18": "4sDxJCmgduHQRUe16ffFfd1uC2TZQhrjcVraBtPJqzd2nZZ3sz8Nfpin7ahkCoMKMdMfvBzjM7WGo9NEv4cjCgk6",
  "key19": "2PvGJbbhF1hmimzg2LC8JWTxreHtPeYNQJBG8yCcG5F8Txv1DdL6nSdXSzQsk4bh6EQKAgbefB5HJnLbk4K9imUy",
  "key20": "4CF8UgpesoEik54rij6kNf4HZBZMfVKPzhE52ZzpqknWoyp4gkNyjaqKVUtb6bWYzyeQCMJ5K8Q8e14GYhec5PPR",
  "key21": "3HK4eNZ6LboorUTw5iHLPPQyuLqR47ELtJodoyf7YVme4ShQcH8t3zicgiL3m6mRe9XDqEoXWQ4ygQ4TLMteSxzS",
  "key22": "3wPcyub8ysdganXXas9qxdFM6EN9nZFVWoZkWuJpyHQTuzSEmpGDCQwj1guf1rEUsX1ATpeRKp7UfbmZP1owMiCs",
  "key23": "4avBGguU6asrv3v1Cb6CGuSrRPey2z9ATDC96uTUSWGbGtavUktbfHkqRaLXj9BcK4bXivmeLBb4e6fAxu5LAVDL",
  "key24": "2FLuXgS1uHRb5nTcBBT7kF8egfb3bRuaHaQjUk8Ge3YrQ787fvMmtxa7xPZBu27ER3EymXEzC4W8M2mHrmpMGMgM",
  "key25": "BoiZrxcNZa5hza517mW3UEutmrdDRqyemYY8woq6ajKqVKPtc5jAaducuXWYRtgszMiTeigqLc3pmTw1TUjqumo",
  "key26": "7sbjwzTi25manTQBp5NpVjDL1DaYK8j9ULAYajwUWLaJLeDPAbRQdkYa4tGP3Dhvq9H2M99BHZoxX93dBx74yRP",
  "key27": "4PDERNZFvabCRtpYxCyGz635gZWuX2YPdeqSnFdxYoKk693uMe3Y6v6qJ5HwGxzyrgcrQtgh8Jc8wgUqZy4xasnn",
  "key28": "xEzJ3H8AzztNwmeGRzPaMzzSpWqxzzqfwfYTHXDvhm5nFg5Ec1vswV1LXpJ4W9H5YkUsQmDFw2a2CzPXffs2K4G",
  "key29": "nvL4sZK6kEeMMPdsoP2wNowDr4HFQVQmShKTxS5B2nHkmhPFCSUmNgSQ3SMZgBXyGkCPBmXPhHZfx1kX2LimV4k",
  "key30": "122DgNPmrSjTks7XKeWAdUr8ZvLYMxVzZNyUQDdbhyRVMsXzw4Py9Y3Ei7pkcz4KuLcqirz9DteVwZ9zwMGAthou",
  "key31": "61mfNciSZvBosGeJdWK4xwPRAYUp8wdJR8irJS7EfLuy4K5ixkv4rRi5fkDvXmUGxqj4NqaXZuFx5uVYB9TUco52",
  "key32": "5B3qnusmETivKHAi7gxtp41YQK7HdFjrwthaDyQV5NM1HxKG3Nn2yWjX8RK1GznUqtU3StrztSizm4wV6c4rvXp9",
  "key33": "5GwzsJPB8o6jD9rBtopScuSAxpq6Gj1D72QAqDXExb4v6UA4VLvG6GWoYbk3aMn3ytDE4e2dtA6BteYewMNr5toR"
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
