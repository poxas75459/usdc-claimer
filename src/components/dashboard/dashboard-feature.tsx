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
    "3bT8N6HEJWNTCFrXa5CbjXTn1gi3QAohpmiDExnMZLjwKhwJ7SqiS5RnLzShEaNaXmzGpPnxW9ENwaBURqbrcYwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JY6cBjwyWN19hRM7vUetBwXkGZoyk4AVxPnWQQAh4f7BpAeAhjtzWWUJgrmGvMaYLXhTk71AAqv76xxzrSf9qKK",
  "key1": "3sSaQv1CzC4jcPhRyy1ZPqhNVDJdScGVq2FV8epUbfwSJqFcaZSdpQ55ooWYpT21QSX1E9i32rA8XYotAmu6BaWJ",
  "key2": "5MkVRw53yJdHD2yH7pU12inbPA8BLbJ3DPvQyvALk4FQWUBkD9xcTCd6GE7FwVJA8vFycD6odHw5c5BvLkHJ3mCC",
  "key3": "2A6WgPH32Bb2Q24LVswn2vvD1dVU5wKmt6hU7cGF5PucuXMwooVQ3pY1cT2mkcD93MBoQiJ4XJejX8TGYFshaMP8",
  "key4": "2ZmhaVPSH6JKpBPwY5WVYkUsTXdFjXXFZdWTnV7k8jYSVie9ArkSTW1ct5eSKq49wxfJ4PxB6Z2EPXv1923z3PNP",
  "key5": "61PvTqzJh3vMnDfhgZGHbfJCmWN1wKjjJHHgToNEQKm3h94dTXiNk7x7zoJM3yi9eZEErzRHUJMeoRuix2D4VZhD",
  "key6": "3eSoaTcwZ5VwFnDSz1zQZ44VpdZmeSTgyL5PSvUzmukHt2G1DXBJpZLWFdUo2BZSAqyVv8k5C8W6XUWgnMmeQXqq",
  "key7": "5aCdtJLFaTz6U5mLBQDBfV5LmMo7KXXNHSFBWXmvAK4vnVFkcuXsphXEvYABKKnmJyd8U5wZ1oxnT2V56EgZeyZP",
  "key8": "59966tmR9cZzAo1dJyTrpNAnbKdCASasuvpszeJpXokpgx1BzJ9Xtw2YSVs7kcxwkJMK3cJFVaRJZvaCJPc1w2zf",
  "key9": "44AbhXu8aCJoyRWc4vkCnDVifFLYstJ5z333tZtrtejpZCLfxP9d7GKjaWRAMKdZwKSTbbw3QcysQ1VYi2LZd7y2",
  "key10": "jgBqQCTo22UHjUMds4Y9K5ndNbaW15d3isgppjYrNiUPfWPk6m2EnJmxWymPcxVbWGMosumRemf1ubF6GMw2JKX",
  "key11": "uC6pv1eqZhiYnV7o8KkCtuiD9zdXoFZj2sc4rmS7FaL29HGA2T4QwQs1SBvjjuenHfHwaTotxmT8q9cvjRUhtYW",
  "key12": "3cbgkhcg1yrDaj7vWWzycvQNGM6ftJ3EPNVf2zJxinpvwm3b3Q6SQ9SbmNXUffcEv1V96UyeWpYn7PQ9BmJsAdze",
  "key13": "5M2dBt22drBt9VLN4mWN7oTpZFmRPfEBcorns9hqxkggvvJC62qwDF5aQzhKi5g2fu73UBzDQvprs6mh9FjpHQzD",
  "key14": "4zSurk3MnUFs6f6vAir7DkynYppzSytJV1hy2E8LK2YeQVuabB4RZmDUMzAHjr1Wg863NtJNg8GzBL2Vmir9G4ho",
  "key15": "hSSbJ4F6tDV8EMoNpUVyyiDwNZzHXiAgDPtkMdab33ppwPf7DXKVinnizVu9768SaVyZptgr59CLBEWp2KAg6rT",
  "key16": "34qird9vCm3AsST16g1nhU9wPnrkgRW4sZ5Rqt1dHPzH2Vrvt41H4vHBoe6KpGWuEXTUx7DpQEvvFC1zbTf1674u",
  "key17": "UPxTz9Dyfy3esDzh1hTZD34LV8GVALm6xmaeW5T89pLPohLYzozQq448i6cNA3kpHy8MayKdH2qjm9pV1byr5So",
  "key18": "53ZUCitf6KAUbKgChJYpx8cBWGsUfMAjENTFpFB4XRyN66aJjaxXPjSc62Xy7bWDC8TiN7tmgozp9qyEJ8wXPCkX",
  "key19": "haDuYfbJTgfyt5BnnE3RFaQKNTawutdKpaGJY7EQAFdKcvkTMdtiz7afmTmN4o5vqWrUTgMKMgzuVzddhs5iG5T",
  "key20": "66a3rDYgUUc1VNxM7oM46J98DoJotFaVe68y5KeZGzvfNTsFxxq2kVoMhBX7ix57wGVUUPzzEYjJZrg3eqxDDbqa",
  "key21": "5h8rwAk2zsg7gVJ3UZHyoF9zgJYTq8iE2q9nRnPRU86GmHyNJdCwKLPggLVWCfV8GCsvYshmyXtRFx91HYhi7xSK",
  "key22": "5u7YhvJf5rqZeEL5vQDyvtG6VqzF4WcNMKtbz83rWbHMmtPvctCxjDfrz1PGd14GeLyp9py9U791ADotE3XZmPjv",
  "key23": "4KdWf4uMGWNuS4vEnL7Qx347vgfBAJM1vnECQMmJjvaPpyuDaFXTvriuC2a4h7V4F6x3N6fxkcjou4RhD9jmJAVX",
  "key24": "KfpiVDx7mG2hZYJ76JWES5vhKHnDTMX5pGJuSBkB7FHcQGpUKYh5XqZWdC6LAkqDT6HiH1W9x6r6DRViikG3JVs",
  "key25": "2XA7qjamMyxaH9y4o2Do1PK6bf97zuppbWrfc4iY8RW2DiTG2LcZbZnGA3FiVpKwwPHc8FE33gwt9mkTsf19Ya7C",
  "key26": "48MQTiAwrVbztCSEkqjiiuLY1DYzKNSKCUYdvJtvczxAJZLJU7fyahut6fkaEiDCFVM1dworUKG7W1MnBB8JBrSv",
  "key27": "QvuLJZAxSL9WVAfAHXvduT8cgYNRB9HXaHrbjvEyiLjARoGLd5JmNCPeAXHgKgYo85ygH3Ma5CD1N6g6h2QLqVY",
  "key28": "5AqVmtFrSpm7NK6654TfXaL7ndio9rfUvPuQcs2QEu1iQ4eNnedZoS8fkZF5RhV5728xy9zTjEFC5WUUa7ESjqtN",
  "key29": "2DW6xqqf2tvsqVKjMYa67t8ARVixSq3W5ikNHjx8X25VwczHMjXDAVPTXUhHJdibRZ4fStVQwLjVPucyerxLC2pw"
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
