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
    "3NpY2oQzzjLxWPHLSM5zfFTEpLCFundCCcWEq1E8h86DkbBMHpeQ5UmPNQ1WyQWoVwYhAmzWvdyGpiAiqP3GTivS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czimkYKsxd7XNhFngauBDJhUQX71CvVyJLwf7rYbsDrkD7TG8ngY5KAQtRGu3dmLjSC5oETXo9V8BTnxkMwbpdq",
  "key1": "fAgR8UVodn75rK8wcwDRTTUjnN7TaUtPWLd9F9sr4KG6xNjDacPC7TryZJtwSgo35qmQMuMwGaZVysgnBH6wYHf",
  "key2": "3SBbLuoAig7G2Xag8XCyxhLC5s9RpEnPGHLkWWACVV2rDo5U56WgJv9GzyBZuTHAogzQWPNvzz5HFuJhxgYoxDue",
  "key3": "3QZLMbJeFh7vhCny8BJSWhXnKP6hEcT5CnDHgC4EBvDbNzeZsyL4mccJhqw2mUjKbyQVxJrUX9c8pPjWVdmgcV1z",
  "key4": "JBjPAeDJoLsxecmrqKk7c2cLk3RwEwpArc3MKLttFvLb3qS5Nyx6HB5LQWSPRnaNUZdbJ8At9m3Y8SZbwvSfpss",
  "key5": "5xgd5nmuraKZD4xPJhFTZzHo4z33KXqcMGXCvBGyWV26LXYRXoipVqVz3NXCf1CJu3DGLNjdGo8R3zhtY4GzMSjy",
  "key6": "2D6PyKrbb9yXdwiSBWmTS4QYwXkP5k5QpMU4hT4URtqfZfNMJVCMuREyedKqv6i6btXbs1im2nPrZq6QHzXLMXyP",
  "key7": "5gf7y9sa2heWrsmmWK44XwdoAmsUi6fXw5QTyVuSxD5oYLRDbMMtw1LqcZwDpxMUwsk9UmxteXU3M58XaqghzNV1",
  "key8": "4sunWTNB2qJXKMufo2vyX6ph2NzRCspu6nb6jwUnCwe8jXhnFMSCXCGEjQjRJey3aa8eg1QR3DS6yXk7ekcffno8",
  "key9": "3FvnrF8SKUZ6x6qhbXq6oBY1vRjPaCfCk6HHPBamk8u5nJu35N8tM2VM8c4HET5DyHPPeJ8CqMN26ngNRQSD6W9N",
  "key10": "5EpHr46c7wKuUdBdMwwEEon7KBFpwh8u9zZKg7EVukV2m8hUGhPbFMLPJCgoyqx667xdfRPMUB58dNa4iGYnxCWU",
  "key11": "5VduTPE5wTKXfApqHE1D8vdrTVPS2DTw4hseXFGgBBdUcuWypknDgy8rL5AJCnQvCaRepwn85TNj9DANhwwPioPU",
  "key12": "4oHAA5fbgs8xTf6kSvqMXEmnogpGPY7u5iVTWcENJFXpWaXBC3GdYxNXyJ3J7KWuqXy9BhtWCAR7XU3QyTf3T8rj",
  "key13": "588GnCyWnrYgyTTJiFJkLmtHjkrjdvCKwvjM6XfRfkU3bC773dEFqSDej9by2YeYEqwPTa4ARchq1V3KrMjMdB8s",
  "key14": "3uUfPqD4cxsP7ZNAkEFf91buopshetuhSyFyfiNEk7DM2PQ4c6dyeGRS7gKtwSdfQPWCPsJhWjJeMWevuCXpySCg",
  "key15": "2JKkar7TGmNoMZgkeNPxo2g3v8MZQMwfDiobNGXczkUvfCPRKnDabpRZrfv2BFQuqQZ5ekaxYxnTCf8Um46kSTaR",
  "key16": "4Rdvtt72BXeueY3DCahgwCAwh76MTMQr2aEQRm4RWuKYzEfsFxPT2gc49U2FogQsMHBmu1ugtimkThzZhyc4dFN8",
  "key17": "63h3bpX3F4HNDrPy5RjCJXqu2UwrACJo6nCh2sZV6VkHnPhUJ2oebUzgbEk38uEvGvqECb55gTeRemStur9Lp56t",
  "key18": "3LVXZkD97EirR5hLM1hSH7PpFQC2hW4KVaktTJwSi4LXdwfqLc8P8LN8Gp4gp4EjDrfpb4bgwkHFXAYZr42RpqdS",
  "key19": "2BLfxny3VsbvtiyGfomzUrGcgjagyjNg9BLGaEjhZNn7mnSYpsiUJ9fC8Cy6UMK8DNoeEgitjT1ZfU7bQUT5pba9",
  "key20": "24MT5rjtCCWP9HzuS9ZVUssiERivr4CuTaEtygHpiP79giwSukzXU8swdZDzfuk6MLKT7x4QNVksZcoiBXg4GkT8",
  "key21": "5jeVmAiZpHiN7vGQq2GbQcuzfoVpoPGqzzHMb6oDyKJGB3KuEuuPYi24J18oZNgZhtXxGGcdgio2LggXs1MNNyaD",
  "key22": "3G1AourPvd6Si5ZPDXH2vh6NTMb8L5ZzfGhUQqvxFksXjZLgv9eEvuqQnKT6RHLrsEcw5XCxEYmN1AXGRfZwXzhc",
  "key23": "4zsV4SSH5BnNuKkaekiwzsvyPxguFwwQo7ZKMGzdmyvMQe38HjhGwShjMk9Z4AU2EsW8MvJTHvfGBGRSkdkbaWxX",
  "key24": "Vs745Xydr68ajb3rQpzpyVpb3DgY4SZWJCX6fhvPVN9yc32PLCjWjy1hd8MQ61EkEaNPYcT3T2P1sJ1S9MiYZPq",
  "key25": "tgvwcZDMWuSDnR5u5jjrkQaxyS5oZUjXxMs3Wa11eJihgzp3ASP16x4Pm5wMMuuRp5Mi8dr7WadFXqfoheEnnNR",
  "key26": "2odXk8vsHqtLDsDw3m6qJqG6w4xJyhZmFJ1PhpiKu7YxaSgif81WphnmiZKnF9jksGktwE1FJHhsJ8x3cJXNWNSK",
  "key27": "5buNK8RR5qNaYez3vdZm2d8z6msid89r9fvEHeMAS3TJeKjevDq6B42x2JFNHVbBhDAeTXgLztqKhQpbdp3Eppvq",
  "key28": "4x7J9BgiJtmJtFizmDiFwBjH3LgWzmX1ggft59kwNtPbF6dAea7EcYEQ1BptLLzyTUKXffuWG4bALv2b7sLujsNq",
  "key29": "2cFMzuXXdde1hWYSRP1seM5VSBbQyrSZZ3ejBbnDWxkRSE1URmCrzZs4345PSEnjqQfzBKabddawUpBNBD4AzDeT",
  "key30": "4DMi7WLnKLJUCjkPomcpv7fpmu6osEiXcckjGzgfijyCFjwruvkQvj91v5U2QUASs92xiKsNP5hTqAZ6J2ABeVUP",
  "key31": "X2tHumL5ppmMfEGseaeCJTaozucCGGXxa1cZCBEDwBhZYtgDMQpYd4bZYvsusSxSyKT2GWrmqKUfykMmuXQBzTQ",
  "key32": "4RevYXGW2cGagBbPMyq6ysdXiUv1WaMiWUJbQxymVHQprN1zcKc26zqpRN97TpMgomoMLpbTxzFm8r1esuCE3cAQ",
  "key33": "3eVpWryBHKamiMGDbX4zhHZL4v5goKKF6LcZqJUpQuBvYMMZ7jixhayeRJq3pLgt3cVHoF43cYeZct4XnNsy3U5w",
  "key34": "5rsQbZLJgfueX9REQz7RfBW7TAirMetwzjGmhtDnZYLEcVyG5MJMuqPn23c4Kdi7FA3CHNQR21Kn7fjrt7vVARE7",
  "key35": "58bn86tjshnp4Vpwbiz3r69BqSgcCNEjzjNYc3xPJo4q5WgZ7G4QWBKexYRUCQeorVWtPJqHmaFuDZkvUUqhazZv",
  "key36": "3ooaxodPSSL7UkAhn5VgkQvYz45KCaEzkYgu1ofh1fpa2oL9FiwDxLP585G3W7ZM9tgewkdN8EwBUTmkutvXjvBR",
  "key37": "cg6NZ83t6HLbzxxCVrAgQUcE5AWj36kzg6KTV1kEjB7rQ1vpzFVnmVda4VNFnt2sTQSF6hJpbeiYE3gAiZs1GMs",
  "key38": "65VJVNXV1T85gEZqDv1XKGFYTWs6vA2xCZfedtK5yBDHGmzBjCp32EAXvtcdAqibRSvH7TopFAT2n8VowELPcepS"
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
