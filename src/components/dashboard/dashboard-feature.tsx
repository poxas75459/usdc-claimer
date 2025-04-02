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
    "3RSHPL7ABakNKTgjTwNzD3wHEMZwkmLt1ZaR86G2oJ8E5RjLAsekpNpaUb4dnHZjkDWFV7yEUiJbrTFWL9FdzkiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCnLBjwix2ocycUjdfbuW5KfkfWfFEXBXxn6dT5uXHRUPhQvjaU2nKkyEtrtFKTgY8Xi7N5aFJHon4EBqqLkzzV",
  "key1": "5AUz482THtogxDJhNBhAoy4AsVki5HYtDjLsYTpdaVz7aRnndvd76zsjxogzd1T7DB1yrJ8BwSuqfJRGJ7BN5jYt",
  "key2": "4qY28AeZxiFnU6CsKCTnPkWTeZU8PRKt7D1HWcE5FBvE2VBGGbCGw2XjKfVtQDeeem9FmtA2taBboe72jQRr9k5s",
  "key3": "51f2emmhANMrHN3sYKLhYxznBTBtbimCRyUwAkQuduVC69NeBASSVvYrDqpcPoouZz14JS3ZwvsTh5qYf9oGQ8Pi",
  "key4": "3b9h14EZZ4nNzTF22Ex82hSchJkdWwEYqTTAHPJ7mNMF4zkjdWRihvB7QSKnidbtYrj4hybJmJhdfyXuQd3XsTto",
  "key5": "4qiUQ1UguNBxAjQmobnm7ugTXv5sfqHXjQg9QtrcbAquDdiTfQxevDMgWY2Q82zH56aq6vDiad21XDJ8e7tZLDw8",
  "key6": "5MWFMEM5D4S6TEAY5o6Yciwaz8dZtgrF9X587BeLf4K4DvmqiBtErCY2sCYbDwy1TSwovDNWWGeUx1nqqkisaLoH",
  "key7": "Cb3FYxicmCkksKarXzxRu5dFCkb3L5zEbB6bwinSpsBsUwCxrBCewwZfYu5XBsdkp4tCRiQpRL2TmFHGesjaRAd",
  "key8": "47kwXeMwPJJrSWvSSBkZvpkcuLwbpVhCHb4v8bRwK6eXcH7haS1huP2YVe7VugF3RuopExV4JRHAdvyUM8VtBSLW",
  "key9": "wR9et7aVSuZ7e6j7avCo7MD4Xor3UWEPKxUh5giaQCqt7HinJqX1bdzgDRUNEEANu5kD3GCUrXK3LvdPmHiMofH",
  "key10": "2bHPpffYqCcvnxxRJcQ2XN78YFvGhxELcNFCi6etqX5AFgZyXT6E4v1gpX42DbebSriGBrENHY5X8vZ3LshDvZ4b",
  "key11": "61NmbZ349kh7y9f36HxoTagjnC8qFYXQ1PB7RLHPmb1V6iJ4KJT8DDKcj3G6v99uBsSnurtbJLg8SKkDrATaurKU",
  "key12": "2dYGda2S2Zgye6DbpJzvdago6xX261R2jQ47rPujUP9rKbwyJ3BX4fA5aJk3NMDu65tSggeVKPzjtdEowbX3pHR8",
  "key13": "4SoJ5zWTR6apiYNAEF4BDWTdZvW6DE95ULeyJk3GYjdtuhHUaFQ72GNkB9mTNrjeYSwCKXnhvxG8b3Z65x9VygQG",
  "key14": "22K1EXZu6L35ZSnqomPRBafu6DPu21ibrvngefMcnxVv3zQMZegxGyxEV8h7f1fh4uqkMHc6YxXKPK3P3S4euNt6",
  "key15": "2G5zxRifFjXDYhXRe9SZdcuit74tXjCzio5nc2tGsdmmbpfHtbXdCWBfkLVXkt1kpQQXdvJmqu5DFa1n4Pk6Y9Yd",
  "key16": "5UDmwhfEQZ4Em5wVxDuEiLaC1E76225a3NrqKwGHVGJoHcEJZh4KX3w6LYKy2nKQNJuJuA92ioUGiHg9QgWtsQsH",
  "key17": "4MJ98JEff3gnU6G9FCuZSd3YgQo5dqpnaRZv3VEAj2pqcD5LbnM8bLdBoqsUHon5E8T7BMLdHhPcSxXtmgXuEQx3",
  "key18": "2wBnbCPtaZCYxr3hbHP5tcQmAH1fbhTY5PjPHb9qSZvoYZCHQ8eVxesDujaiG9LVB1dbUPYELVgMsNvmHVxSio5S",
  "key19": "4NmQ3BoJYjsF1MT2cJY854n3uJoYgM13njuq5pPRPQakUBuUTWoaefyxX5GBPzzREXwxe7m4gpCr7BeJWisMohQ9",
  "key20": "5NRBH54LUWM9UrqJSNNewuTYpSgXbPc8ndPMt41h7jvrmx4TGaBEQmKKuUyeTjaLkW6Fju5hMxCNwqzTj2ze6r2s",
  "key21": "2zaCfbcSFrT6Bmecu6Qzf7cuFz5K5W1WpMYXrimTH9Q42HX7JNbbuyvERkdZNuCiFvLeoLPBAGGvH5ySRFrm93Ls",
  "key22": "5MFpcHRPS5KkKAYanjyQwVnr8cmRZUekrhzM9CSHFqJe3HVaGjoqX4kt7LoXTV5rWCxtCsRHJ4aZqzsdy4bYUCXX",
  "key23": "5RKT3zQYPCMVBBQLJ3ZHNGW5Mi67KByizvTFTXP3YU4NFb3gVLwonQYha9vnzS7LZTjDw4rjFQEMubkA3jJRCQCV",
  "key24": "3Tebpg3gwoCYK4zuKmux8FfH6L1FTwinUqhJsDLkExcSuysB6sBEMgrb8pEgVXGDaTGQ2f71eDPvfQmxT2p6Fm5b",
  "key25": "3aqTqcRFwCfexQNMuSYwz8erLpmKNsTRaG7sw51vAnxrUEJGHT6QKndG947UUY2HcRfBT1d2n6wSqgW1qjvHeaXR",
  "key26": "rvm59Vef3AS11vFcbVwGxsrjFU5Mg5xHGgDUjnxerFyS32br5gcTq6dJJmcVijmFktVLDPtpw8Ym7xCgC4bfi8H",
  "key27": "XZ2TcRTZq4RWs9BYJxYgpvq8WbkswyiPX5J94x28AtNo9uFbS5Hd7UnxWLEKtqqtoh8nXDcia9qhw5adaXhhCw7",
  "key28": "5D8mu4v8NycNDoncCG1UJ9NqErRFi5uXqPoaMCQcJs9QJZcJvGrqUnApkqRhJiCUuskhWyCH1G52xVJhDY6DNZVS",
  "key29": "5Pz4HjPFv7j9zxAQyQoH56JH3F5yDQq3Z1y3nWa3DFTDyYDfQPouVyoS89drjpXJkneGjjpdKVkeqJcogbzi7ckp",
  "key30": "3FsuBbrCRdz6U9TTcZUXiJ1e24DXhCRt5mpvYBkBQiexM3uUwC3WTrPAkpuMxgMWEjVs8v5na2HUSGmvL7UZtEmR",
  "key31": "2EAQw3pNbg533ptuG8urHdTYdU4HyeNXPcAEkqjmHTQRP28RojsgQwnYG5r7udpW1roN4nMs43MyBTiHXVjsVWf3",
  "key32": "GcoCs9UoDbpTUijfWaJF7bjg1A544VEp57EbKPgrHLvfQyZLaDwpqejJi2qajXHVn8o8a12p7YfyKomaB6UkARR",
  "key33": "2dcrorBkn1uiZC2Pnw9dKE8JjbHJa5gcmraeDci8tVAuHT9Nfvn4wkwrTWzcrnheSUrQNK9i9cbmrHUqexmZEGda",
  "key34": "3g8AxZv15Y1HzjbkqifVoeUn12TpnfBJRWYLLoz2MptyhLjS55HBDaKK4CPnfUsZ9KbtcUeXqpU1DQgiZ7D7KGkx",
  "key35": "5vKz5NXCbYYDExC1bckrGLSUgy8f7F9cwFwTZN7hhct7B5gppJZoWLC1bdBH8xcZ2uDgFm6jSGATmtdCFSNJdEbu"
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
