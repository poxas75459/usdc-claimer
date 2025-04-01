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
    "5XWPsSMFEd2LZDjFZ5YwFzDmDZ2QSBiS61FpFuj6CzrZjRedMboswho6MaRyWZfZaAs5qoecv3TYyygkEG3L1qy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gU6HkWnarc5bx8ZYRuLw8JBFj6Wf6heJB89xJG3D9Ct2s79Gih39gF3rq191YLDFtNvQubDoKEq7BNRua8jrQAN",
  "key1": "2y7oC78oJjHPVXpit1u24hfb27R2HJgqEvqysGT4jYDXfgiATUFoghwkZC8mfQWD9QXS8Rr3MwpexTd65SM71N1",
  "key2": "52mDrUkmDHWfNb2oEQYCguyHwYjv5JNeVXr1ds17wSFytyLbmgHrci4jsAvX7SPjQg5yTGKn5aKam7fCBZUvaq7S",
  "key3": "5auejqKfZeM69FVqTTTEXzJLc6Jn76rUBN9tgfiYyzF9NBHdnoTpWEcYCYgh1KTnQrNxyGfufk1TeUrfAREdv7B2",
  "key4": "37wFdH9i8NbeKdcf36VqCFpsqnTVe8DP55s4yJxb9DkFuinNwqknC9KApSDdQesyiyoE1sG1fpUndL6ZvwrgZA6p",
  "key5": "35YBTenXqbmc4bZaFgBxRvMtitXv6onaET87wN9qdxwjVH9NW3wC6CEiPhWH3baLVf3Kf2oBkG8P3y1miiLDsjk4",
  "key6": "59oWXvDCL2H7HhGt1tGdcLrBCASzVPxUnkxDTDbWNn3QUnNCt62WHzyej6mGez7suTMp5iynCffzLiJWNpZNgCFg",
  "key7": "4dvV8Wvc5S8MHjWuXMiRrDWTiydcVYg3edxCpRd6o32DUikL6YZbPcaHs8ntaAv3aA8n7f7AGHQgFvhckFfo24Lv",
  "key8": "kKKJXDRTmJ4cfbw2LeNxbMPz8EMrikWD8nT5SWdZiDF8QiFkeUKhGe6Sr8C6suSR31XxMaZ72YWaRvTf7sruXpm",
  "key9": "1b61PhVrYV6hmHByikqX5G6uUbtcCenzdx44qpJcg73dd9gF9uLhtLzPan6CsDgwVkp9pH8LbRnLcUhuBj76JGi",
  "key10": "2P2mbDpKuZHx1sYL8WDQ8tktHr6a1DHdixeRG54FJBNxgcBmYe3UyZYmqcnEX5wfMB61wxxPMQN7PQUXDVnTEktA",
  "key11": "2eXT2uSDdnutuncQSPN5PnZCWidPxeZZne2fJLenAy2EA4X9dRLDLYPrCW6o6KGqkTJUt36J5eeCTdPraNQHjzYw",
  "key12": "56i5yrk7BKqYgKt2EbKKacmQ2cXHyhEht7HWEFHzXwhSucNB2C6bWuGnDmRMvx2Lb9NH2uZE8t21Yn5LsQYDpgae",
  "key13": "28ayZgutpYuiXXKDtd3KhU6EUsjz27AXHyuTPeeCuTWYbM87hdREz8XBUbkx7yT1eGDjjvGTmjnLPG1cNFJQqnev",
  "key14": "3TQZSBcBHKww9ZSv1BipuLM2vBMyZiubeXtD4fNWZW9t5apydCRSgnx9N7bYvtSkativ3Vd5R5NXjo7JYeR4NJKL",
  "key15": "gXeZDS8wexArNi3XzWRJhGtTsbBNGXBfaKV3EoyxLfhnacAqrVDcJYnWGzU2HQ2DebnNcmm6MYKiWtYCWpyZXAQ",
  "key16": "4NWc4oNczSqjXASoygAJfk3qD7ughThMPRN2jmnG3c4iKwj6c5MGStFRTbazUv3HsusBz4GQjY1PwedfLPhYirwz",
  "key17": "gbbYxUeD6zGEmjR2pfY8SYm4QbohEhH4ah8geHxpgwyzoU81jzzZZ27DkStVtAqWNLqu66E2HvNt4TztQ5Gjrbt",
  "key18": "4m5h7XmrF9d9EiDpMGrkTC66q8baeoj5ofnBvHTLiqy1VDBXvFDTSufzfSrT3aCDmTyzSvxo3syDJNvN2i19VPo6",
  "key19": "3qRjL3jvzX57rgPLw8K2UXFPhGtQ7JCeXZ5mePEsZM5uokrFpqNuhXg6ofqH8HV3xbG5enUyGnbZSLxr719kjuzi",
  "key20": "4URwmHtbToyyvQCicfxN2Fbpj7FbuY4bsZ59AdXjKBqPNSzmWbLGCjMDd2sGSfMezSN56KKwWRK5qsUw2guY2VoV",
  "key21": "3MxwVPCv1bgAoCFnoX2bYZXg6JMjH5v7vq5NAXFj62W5Mt5NJY4ZqBWKB2Z9aJckmrTbzgthrroSzsTXV2ArePSU",
  "key22": "37UoSS7VfSJHMSC9H961Tt3KbzTz7tXN5MUttjiXzuXswYUvYsrJPXFBZQqMusyLuWtDqYk9r5Evsgb35RUgW1tC",
  "key23": "2WQrJDzbAksdMMmwPXPoy3xH845hJ4kZxQ9Lru9C8vrvavu2y6AgmBBbWYjMuHKL8hXGQZ7UfaXakb56Yn3jKnwy",
  "key24": "25DfD8qa9R7Q6UjE5HdxuVeMToFPfABgXUyX4ZNTX4rNbFpq23YBQNeFfy5YfxJWijH3Nf49bY1Uv6wo3Mr8fi4a",
  "key25": "2Fbjw9NhZthfW6CocrX1HqRyPzqEdZyQPdevxuQGYpjpCcJ2F6UJZCKxuTMUET7z2u2Rt7R3foyFRp8PYwYPHYtm",
  "key26": "5RmikmyiACFpPEmyqVKvQrnurgFEwNp5D8Z4j1HquTUjVKbeXDYyPcCGU6XVePoZYdmi5fdjTahRsvLGXv5rr11x",
  "key27": "317CYS1t3F5kvPqbx7ajRnJ1zgFkHXN5m4n9hvz48vrLsuCZ4eGdkRQqGg2bKQuoKwDrcN22SrZz73wAKMGPCzjU",
  "key28": "4Z6ecwquVPPkMzjyN1B1RPxnGrrPwf8koJBkhz11CXuX6UQz9qNNbf3D5DycQfWKvvQXYUvU3AHqB7DvwKzGjm3a",
  "key29": "5yGtFruekxgsQsxxAmHbXjpHvzQyWLg3eGtb5RM47VkeRnVSECFgYAFyTPkd46CsGftGXsYFyKg98qSETVYWchhD",
  "key30": "8dUy1MW1Mv5Tq8eVTMKWk8jw8vCRDumNvBpfVGL8m545mxuyVTwkv3ZRgVzEiQTtZJa8VJagGt9JEgqfJcBdwcQ"
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
