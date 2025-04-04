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
    "618FqZcdEwwi7DVTaRQxMeEC1NzG5AwQno7S9HkXXVq83fDXy2Uq13g25WteCqHWfXqyvfZWDtGrLtydVJPUg4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nK4aBDsXzVRXmUt2vmWUsMKMjbKsrwZGcqeVRr7LAZX3qm54mNW8AjmpMUZBGPsercvwcHbArErFCTbVez9DJj7",
  "key1": "4UPyua3RZKCsWEWSw4bouswxSD3LenGTS48iSgoB6NM7Mq98oYeG23dRpvbKdkUJxtNU8BiQBhS75ZxqzPszrvNf",
  "key2": "4vYJfATQyUWx1fZzSvsuCUctXuA9Jt5WphGyKUgAbAsBVLUYYk4qFKARSpPxj7LRNy3nieC1vNWGW34Y63hUyzNg",
  "key3": "4EUtNDawaQj2MuA2KZMUQKHFxfAwGzVxvd8kehRFwfycyzdjmoUhnUwSJPfgP4zazLH1RvvDsy4r56mnHy3LNRVz",
  "key4": "2FhxECnaJLAzchE1zm9UhYyamuX1RVQYEE3rwBqZgvoUVoXFgZSg8yxqcH7qVT4dgGxXBdVAvxbTQgA52REgoQ3o",
  "key5": "5oH9chqqqBsbNV9cDXcyiri5nPsNc7Fvo7BTyx6tuYih3kuEgEKz2camo9sPxCeHbwZyHiDKy1yAjuA4FggxqUVt",
  "key6": "2PV4zw8jJoZoyBvW1sbgmy6gGd2fzMRLi2mE1NPw8VMeVs4p9q2tFGBX3eemsyccQKrRWr4ks9Urwu8vkNVBF64M",
  "key7": "jnJ33dnAj5EB7ou1sUVPoBt6wq4x8i9yEdBGAcrn1uWRyFZEPGcaiajGhhnYbN8WUStCmBRGMRkjx89pXohnXa5",
  "key8": "4C3JWFu5YJvNT2YajSAoqzFtcb7Fzjpv2eijwzNxL4LyKV3PhiqD5z9e5pW7Mnw9zmvVa1rx6m8Mxb1tyYsDdBZV",
  "key9": "2M9isxjNp83RvYA42PPSrvL4iduY22bM715BUx5Rp6xYYorbzHiB95aqTHQ67HWNYwrnopuhT3NHaNGsKHSGQzzL",
  "key10": "8CctG41k1eoPngmHucmwkkuTY5F1pbTiSq6anqfFeWJyVczoEeEh9VJi365ucVLaDaUAm6WTDy6YkrnaiAyPYfg",
  "key11": "3quruu8oZzx6aLim2Rb88LJnAvKMRfZjaXry12jiFmYXD1TXUhn1EAGUz7FexWPvUwGzqbeVGEmx2SH9QRjsJsd",
  "key12": "3YxWXmcHUBvXG4CsamvrqavGFCkEGndbjvqe1qyMZPtQtVrQTrhhfdVm6UGbL9mbevcxWFMGhixGWefNCY3SGgnC",
  "key13": "28vKTqAQwBx1T45J3ovvWcBxyKQcw7ppfubXo51bA4n7VbSMFRSsUbdvStPiApy5xkmA1HLEh44zpePK9ykD7Sxs",
  "key14": "4rHkqpCGy8iVDmEjdaeMjUY5Jo542RBGs995o8vXziUxaT98baf3yWVxT4oo83xPFsfmnLaq6en7QEXh2gmTaUoj",
  "key15": "589WdJEoVEsYTVDStt9y95r6968JmFdn5RUFtsScyF24jTPxjnE6KwW7FSJRkFLVRYfX15kmgXvL2H3ADRwnQuY2",
  "key16": "4Pu4B5dmkrmifHTrBUigoRAj5iDj4jmcjSA5AQbGC1XtsoDDrBhF9b4eJb2RLQmYSetoza37ejCcgGFndXpnrpRX",
  "key17": "5yQHVsQWXbYFozM8WtZWhYEqrSH6KUNfiodPJaEGDi1NGAWEMMmMQy91XpvL9tmBr5UcB83YfQn9pNRYxdzM2wuG",
  "key18": "5VJfq6RupMuKCkrcHM5MUtGz4Uhoo43pXS7Ae9jYXgS4gXCKbntMPMEXkzU5rHcoGEKTijyuxE1W19hqFs8XF55D",
  "key19": "22cniqR3xxZukrqWqnnCgLZNb6z9av4u9DX9UR26n5hzDe6T5r8q5WpnaZFXVk6g3MaHQyJrqaxkVBLJhJ2LAXXd",
  "key20": "4FecDdiBgxdUZ17Ekz2FiXY5S4FnS9xpsHN8VWjDGshPbeLFFEwnNTkFzkekPpFD6LPqD2Ni4WjGgeU9QsHUAkhR",
  "key21": "35psswvC5XQXL2dCuTfqPEbMUUYBrk4K5KG5ktXujKgWYgT8hg7HKARTywRHru2aUeYG9hm93shLFm7WzAB9LZoR",
  "key22": "24micDJLWFUg4JwJdmPoRf7G6WRbPhB5Pegs4pvgLk6NXKqKL55f5XE2ZtWAxVHMfoGsy2tGYyXbaNrvpraMcjfr",
  "key23": "65PvcPNynqgFxJw8XyjHwh2X5FMdb8pQPRLwYZFUW2qfgNsCyUTJLLwUDiGiLCWmcSZEPzSmKNzLJBLJDe8GaZnT",
  "key24": "5AdWXT4K27VyUJpnBQRXnbSUgnb6TAvcAckahFzmSPd7Tmj3AreWYY1oDPMcHMMxcapAYWg1EXktCg9J7QKjCjwD",
  "key25": "5UwEwiZ5TM3AS7W52EuYtZfVuXPqt9vEKHfscq4tFEpQyvQkbqcKvLSqgj9Kwtzr7BMx9ZFHicutocCqFpF3aEZk",
  "key26": "2Xs43hrgMGEjq8oGh4XZKiDKdxucN8BP1TpAok5ZoDoED6zgdEVf1Qpf7qZv7xB7AT9qmp7XfA3eyC2ayPr2BCwF",
  "key27": "3QVTxNohEmEirVZNn5f5Y8X95su5dNxMcAtSV4nG3SsUqQ53yyETZ3TN97VHr1sk6AN4D8cbpfBxwR5Kp3tXA2Gu",
  "key28": "2f4EZy98XvY5ijMsC2zABdKu6zmcjydWAMU6aZXoxVUna5g5FF68n3ifDEzkMpEUN6HyK51ReteS7AL8xx7jNtrh",
  "key29": "51MHaxfoWnHNnXduXhFoivqQ7E71MPuTiS1WVtqaU2jfHYoMZCm3tbWJbkAgnWg2xvL6PyJyvof3gMLizv1m21Sm",
  "key30": "5eD8RSAEacqjFz1jNBmj8QHvHvKBQjSdGUeEtYAcTJr8fR1agxi6Lqj3AZq7wqxrXBmfkcjUcxpFgMSfWMFqxLUC",
  "key31": "3kV1QhH64U9HWU6tsYWycZsX3ueMjfYMEHeFtWSFMbXzcrH5wZCXY8tn9V69Kv7R6FzzCXpeEpLpXEvsaavsvAP6",
  "key32": "2ZwmJvAYiBULUmKCaGf3yiA8StZo1Sq5thxvaUrzTCJxNmUwwu4QLcLjmXtSxf6RN7eubqh7ssHx5q9TU5n9CMf4",
  "key33": "2zRx5LgCXCGBtJPpsTihKeTGswTAQSkYcvLsutiDEnioUzmQSKEUfzF9vrwnx5mWod9LpBBBq2b54eh22Jn6pdr",
  "key34": "4nYvVYrnuRXWhudg6XazW7VKwJ8Lr3C9Kj9ooK5wnd41EpR7uiY9UsnWtnpWxaACzrBNURYNiGcdH9sQavGk6MLW",
  "key35": "3DSAzBbuMGKPAcbGNHfjRRCddrhj6J5e3kU8JT6BWuGxMezQmeiN3p5YAjfLnNxNVhXkLksggchX3DADb9LtFsD6",
  "key36": "iChoq6qnfBjJx8snVvTUXWY7kfy72JK3nxLStdLgoKVNGq7BNjb71z58fYJXQzWaJVNreWZRhXxWc9k9z1C3CE1"
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
