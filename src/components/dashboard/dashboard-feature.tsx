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
    "394tewors1jTRPuAuWs78A2iHswduoF8R5YnNQ5qRtPuR7zLJB52EsMk3f57Bh3Cpf4pGQhWzMzhZqFAkT9S6aKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4gzbPAfnRGrn9yh8Mea63ocVqviKCV82Dm6G5UkQQZQPWmui276BDNbHRyuKfnDUYF5N8QodoEHwy6WNi8nW57",
  "key1": "4S4B6jyeh9zyT8qMh3b1nKFGkbZ6VJaRymnSF1tH8oGKDub1zvBnijRNcMGmB5PTuna19amNxZD2oQCQdJPodhFT",
  "key2": "3GtY55ngPvdoHeuxNTwUtyGR1xNEAnyM4CFJUyWJ1D9CgSzYvLEDjUWJhPeaAEC1uy5MHgqwh61fGVuMX7Nfokza",
  "key3": "LFXuGNzAyyqLhi3RNZn2DG2Yj8JyjBQ6bJjSFMX2gTyar8vJBxSiw1Unuk2poGx4piMij5tcnnnVjDfbNTTTpYp",
  "key4": "3uGXxfdUmcNp9Jucg5HkfqbL2t1y7oHsraBRTTmbrv86ibwz2QShsPnuJxoq8HBywpi4VW1Uqe62KWm8JPCwmUV5",
  "key5": "5vVy428GzMaBrSCjWxqpAesMv37WXVqGRNDLQWkpxr5kxDscXpaL9muxETzyx5mwLXErMLn5y3ZDuDnniuovThYe",
  "key6": "2VSrJvWjdzuFh8KzZsdgJKm3WnNHHMDP6gHFyQh9XFk4TAkRUhMeawgmdXDixxxvDqmFgAudYbK1GvWG7CS6gQw",
  "key7": "FJEqQngcmhBQEtHbPUKc2YVx6ZbjwYmPGQVPUrzMNtGXL87DeQwUdyUfdBXknW1JeHv5VvK5QL24rJ9x3qRSuCX",
  "key8": "5sjvzEaTH2Ts9u1N4tCBP5ct8ghoefk4yk2JV3TGA7aqnGKwzxBM12Uw3gvVzdPDfsJmt4HeRHfbNdHwSgVpcREY",
  "key9": "4fYb5bJbpZbZMZBg976tK9eWhYrrgQs45QU5vuubJfT8BkAWxHNF4g7Cpn3tF7Wh1ykxxY4MrHSBFaSoXiMnfT6F",
  "key10": "3Dm6N4Lib2CUhRK8o34qDKgd6Kkx6UPeeqaKrSLhXNyzJHCr2kwoFWPBcvRm9pSN1drRH9Pn3nH8R3aXwFKnXYbw",
  "key11": "3Dns5P57TW9jtuDN7JzSVyvcGNxUxRCiinmhtEgbx7hneqgZ5huUk5pUe8fs4CXFbsdmsFeJjiRBLjkmzEp3Fhex",
  "key12": "2tZXLgnpoP7pUeeYxBrmJ9hikYpRaESB5m5wTHeegpF68K9VtroibAjYMotBxT94VnWTacpYiCYpS2Ue8SUZr15k",
  "key13": "42THRoXFtzGwNhWqGzxQABehiiXDazCNC1V7Z3xmpg3Zw59n3g5HK68Y21CLiLbEeG9qMvjWNWnfcgWMoSBrLQTh",
  "key14": "38DHbN68uhFRyXSsDpYRJPBegG7ZjtxwayHhgDhCSP2h2cmDuprpsP71XE9xyEqMeKwLFrbJ1CC2vCJF7Mi9io84",
  "key15": "59f9genM5GZLvHGYTP2CjkYGPBLzobvwJSzC7T1eroZ1JmTm16YPazoXTipPGZLqF3ivvoNL8Mj6BKjqxr5GgK7V",
  "key16": "3Ujw4utFp4wRpMPQFSUKQvzhcq8LsH4QxZKUNuqxzv3aF2znj7VGukVK33hmapvuuz2z73472kqchH4vrFVWEgVH",
  "key17": "49KZ7XFT8nxXjyiBqUxGGm1hBAMDwEibRMEC3VBhCyqivqyTQR6ySaTkFPQeZyu7CFLwr2A24TEZaMrc2V9gNhLv",
  "key18": "3P721w3zfAQiNANN8u73hFpEdUzbRP3RmUWVYPraFCmmQ3MbYhQmtPyJ7nR5JUc3jpa6nML966mvG8VPK86C6pwA",
  "key19": "5Mh8XLviWuWwhsZfCs7546kyVjMtvJaxozcXePNdZv3QZ9Dycsseyr5VR3vCtRtk2kmH76T1veRHpXfH1vHNTLFJ",
  "key20": "2oFptvwnZpmuTCW7u4t2zMJs2YLZ5Q8VCd3eVgzTpNpQsnpamb1bsrn9bRFepv7eXLRFgE1LTYdC8wfXhB4o8pPq",
  "key21": "ZQj15oQuwssifRPy7JQuhjd8R7wzB4cod21X8uNSiEnKtStaMNNfEancR6vEEcaKYitEaXf2xJRodkFPQz2aLBp",
  "key22": "5a9ndNomAqqtgznTS8MeqLKhhTMnAki7MJNzGJVsxHCNSdHducVmEajCX7PNfdVQag4qhJpUayrrgwLSwEp2jdqG",
  "key23": "5XmqQiYYuRDJzYHAb4zY6KoTstryN7teZQSKA2a86bXUiuV54iWy2HnS6DAAHrCY1MCTntNA8hw2gc6Yk9iuLSA7",
  "key24": "4ED4SK93j9bxzSULEegRLpwofapqcDV47NRPeK6mduXdwzKkXduKDggNGSwoE7YYq79Bxzc5MdS1HAyfgNDeifvP",
  "key25": "2PyMK73ji4TuDqwKZjhTH7RmUuoY8x9AvmUbxzjhwsTJcUVptJJCz9bXRCHLCszK7mDzGUkZkqrqcQ4fJNB8168w",
  "key26": "4FMuYXtKUmXaodY6h3T6kuDCpVN7wZvMeSeg3zbwUCLFNAUDSTtW7ZMx1xXPioA8y1FspXNkyHv3A6mCXv4cg1XY",
  "key27": "kgVupQXAbX5m71UTPyVrZMfcatNz5ohu9kF6edhCqwVcBnGaBmrgA2thWnr38fkQ9FqCVXBVB5p7iirhnATu7ua",
  "key28": "3BB5W1SMF71vw5Aiv4QUoDKdwqCeB5b2WRtnG6VebJGh4BTNFdMKa5tdurfbQuwEWW67GHHdTHzXfWcVoxiUW5cU",
  "key29": "2eVLKzUYNPf6BVH4tHTfnFoxtHE4CQebM8LNp1YETevKZ7pXZtkyqDeZ82wtLbQUYUPEgjzMPRbLP2ryRrbGKm4K",
  "key30": "4mzQBhqscAt1HAkggvwhaPV86vNNv5dHyfUV8fDQhBYo1WjhAtykRrDkb5SB87vWhZ7dKSvC4cchgnjb3nRPs2NC",
  "key31": "5CW1qToeQdEKtfWVruiEBftPd57MFLcLhfNhU3wc4uWytco7SHZz74Cz4Tt7fAQko5w6YGnb3D6vDMvoWgr8DNmv",
  "key32": "5UgApR9zBUrxxL6w1iT2HkPnx5yKB6ibt9VnLZ9MHdpKywd8q9qozRVvmxnifHBwBt5BocA9HKxKGwWQAtUkUVhN",
  "key33": "2wPJ1dxP7rSizpAS8kLsE5ZMBZh7ybLTxCGGH5QEBpYXa3trAZw71uAJZhUzN9ENZaYEPsNo6J8BkLyYa7462gfe",
  "key34": "3B3g64cZJNYZLxp1azxH5w9c7oy4DPuAZNP7msovkYdYi3sPPTSr5Kjg2C4tZ6Tx4oxpUhGaq7bdYmKVWTqfCMW9",
  "key35": "4Xme1svSvdTso2MszeTsSqfDhSzZ7MWPmXUWQZuzZhnKB2QP5AtkVdHxfHVUuCxu4P8Ac4n1aRv3FQxixAafb8Mf",
  "key36": "3yuX3SHTdYD9HFfjsKSsrttpqHwZncZbciVDmUPVHoMfrEUutwKSDH1NZDZ3oGb7PjSUZCqM6jgAJ2HFQVEdzqWL",
  "key37": "66UNw6emHx2cq1fKybv9a6iokAEVj4AFJPXZEHjbLDToEgtg37xUAZ9ZzPvNEd1qYMxT5RqVPJsVACZGcSc1o4Rn",
  "key38": "5riAkSXZRtBUbgveigqnLuK5W73JWrqwfFxivJkZ48eScGaepyhEZ3VdWvqekrhdVhZscU7aRWwj9FqX7TrGnL3m",
  "key39": "3EqsVGWhpSthSXvw2QoFbuHJeVjaAiTqn3MKQq8aMe3jx5jysGtw82k4bPaaBx81JJvpvaqtWw2BDdboqhRC6RiX",
  "key40": "5kQEVGRFGywbx1FucrhZjLseRVu8EbeeoTEUPPL4tKfJN5WwP8YMWrzhnBUurYTAphNBbG6Z5qYcZsAumiGfD2hP",
  "key41": "34E68Xg41YoR5y6vj3MYqq372aK43G6WF6z6X8eid1wthgxjsBSUW1VDUjhkvjTA4yXMWzKC1UuWmCZJmoqM9QNn"
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
