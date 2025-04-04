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
    "31idtgGKCgkDTAMLPPdNmYvuuTPKKYvggz9ybyi8Vf8ES1Gt48a5jts8Uj2svmbdYaSCwD6LSwf1pnVhnxmk3zcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "piTm4MjsqiY2riF6Gkrxr2C898HHQoXG3KcAZHfMDcGzPZGXTpj3tKmTMz8ZWji9DNobH6QC2uNwBCdpCPTHaP3",
  "key1": "4wkf9YLXC736MWBUKmt1iBGZyzBdL6zU5ageRhkw5bB4LnWceQCqR5R3ebdrSZMdmFbCYbNmrB4RBMJfz7idk3fA",
  "key2": "44E4zEwZ2G2RmHiM76ZnHGLQvWY5KMZuriay2nunQPTdLJPwahpy1cM7XujjWX6PMQRpeQDfRGjMUEA4zfofVxeW",
  "key3": "4LCK1qDdxvxK8CDPzrp3yMSDgimd2nkibYvHWisdDgnghoBAhpxXvXgfrt7EfNHmcS7mho5g1mnuSDMcwfhLXZ1K",
  "key4": "5pnt5PGAoMp8YXCdfJJkkXMuvyLvchYNc1UJB6GPQMxm2g4cnKRaufGSamYdLHWrwea2voeA4pwR8hKxFPFz2WVj",
  "key5": "xuQ48UiVEccGsqJ32PEqf2wvzcRaJY7gswP75hLGJqCnp8tRLUEXmJ74i8YnThKKeHEng8A9fDWCbkz4zhYXpCV",
  "key6": "2TavEunYNuBvkQZoFw3uRmkLdZnrQ4Buqd3MtEgLrJi2SsRMiUqMrEC8KskSdJR8SzFynzhHh687vKsooKLeMbWC",
  "key7": "5qcLpue4MyFT2dQD1ASy3WjZED5ZbKSXS3bf7AF6eYrbebRCoUSjwUjMQ42PfdgBNhVeEsMnb8xqcMmTEyeDWHDV",
  "key8": "3XDDM3nytBB3AUVW9G6VQtoFgeXYEzcqsbcP1snaaV7SJjimFPVpkvKuL2knMmnieGfb629ZjKDcUrkWpSgWcpFB",
  "key9": "3y8ER3dEEzViZST1urGpZrkcjvTjtTdbjnW97eeFoH89BCTNMPcE1AQjtGK9V2KUyziKEf4BbX26uZfB8wUcaWV2",
  "key10": "3uQN1gwrL5rbwbh68pkyWJxkP4vqgRXs5hjRTz3Qsx1HQcnBZEdQBKbCLF6bDgoz3cGKXpeyDhT1GsLFaeaEaFZo",
  "key11": "av1BYKs2sGKxkbmHzmb1wnHZi7ZdquzvebkLPvsKh1TPxzWDe1VDwzYPxqsTxHfjTcfwEE78nYmpyEFTaPvBmdz",
  "key12": "4Uz1WihArLbqjV7BHcbUc7PJUMisTNcnDJm65BHsds4KPNcVbgQAw6M7S4LKs3a4hzpdmdSDH4Wibir6CSvNEnCs",
  "key13": "4LQhVaTWdywCuTQT6AXLv3cReE5UYotZS6w78sZQfqMPUk29q6soou9t1xkVrKGSY8mjxuSjpV9Gotiu2TnkdxPw",
  "key14": "32wC7r96kJM8LvVg9huEGrV23vdkcVZnSeGnFUFjnfQSnUDTArrghtet2tr7R1HReEC4rGEodD5qPV5xSnLjshso",
  "key15": "5dYY38TSqFU99oH2oaStdEmow5LEp91Ysio1zxnp5G5Cveuu3mwAWL1jrz4hR3KJXfKXL85uLkgn5NAkXycsKgJk",
  "key16": "rNGwNgeqG2RewW7eKZDwDKNqnNum4kBBbmrkCZmEThAjn3rfwPKjhAXNHovxpojccmEo2Gmr9PEfBPK7L7eBpyU",
  "key17": "4hrHRF5QWxLyPrPBCC8fAs7Vev2viQrEJxmjnAcYWgJdpXCjnXVrFAungBokMutLZw24iknmVHEgktjxogwph5WJ",
  "key18": "513bdX5Cvuoc2RYruAYnEBZwcBvQ3J49SzLGW4q9wvZBHnJDj7GczUyAzNQ5R6GXLcd5y2PcyCB6eueTXBSSKD7B",
  "key19": "3svRZfqcS66yLcXrBQvPXDxBePx8iavh68hdNoFjjDiYcVa3FqF9urrtLqd3ycskC4sVaiasqi3tQuQkyFzwDddc",
  "key20": "Rv9ngoC7C5KKSSfo3vF8SJng5Yve3Wm84TDrdyBqwgMTzATFQgz2kvj2UgUmefUy3Xxs9nZfTw6eE3yA9xzSScV",
  "key21": "QFGaKjfuGUgMGkyxRhnn8Tn8KNzLQgayT9dhwfHQFQCjtgU6j2teLheySSGiLfGHaTPLrpB32e2kN8JqbFfvVp1",
  "key22": "5at56ZmoUHCdYe8jKkUGVhzuJrGVSXu3AcMUuG4YzBU2byRwSwnkK17K5y5BswRmkU8J7N1ia23bUBPPhL331Y4L",
  "key23": "2b3U8Zg3rjhU6E4ax1L4XgajrR3JWy6Jbquz5xW7EENTTRDyinDB7uwCYoR7P3F589iPjwGftH1VY5brb6v6LsNh",
  "key24": "2aZR27kCrhR7EW4YyLP5iQcCmwBqo9Ekrkzbawzh49tsX3RkJ7KMpH4WdMAMHbZw8XqLgJWByUrX89Ni5eSHEeWM",
  "key25": "51BEyx3wQjQQuAYkpGhxMY5zG6reioddqxB3EhxvHrNocxtQ3JWJ5QbW4RKeUiSPPPvaxpYGqspe3Ygn9R7sY9WP",
  "key26": "2uFZd3oA1FB3WV4yeYq4cJeVfGGBR8fhFQjFpV39SSP3cSPopvBaB8hQ5tj9dHcKDedb6FRQVmWEYB17ChVuKkds",
  "key27": "3aSLLPQLMFgw5aGQH76VuU6QhmeFhiBhGqZtMeu5Ur31aT2qdfbX2GF8ePRxWS2LjgTRpUxdkg23bxn9qYK2NKTe",
  "key28": "2qYLNPauyyut6W4pmGC5AKbYQUcJTgDVVmUANKNQgiXytznQcubQd5wF5Z7mi9QaRzYumUCr86wtPRkv8QXevQJr",
  "key29": "34fg9Ry7dgKWkGmCUxLFbEPz3W1Gf6EkqVY8eoWCNMN79dWeFDThHPfYmShhNN4edR2agpZneF7rAJ9E2Bs9jETr",
  "key30": "4DETPjqgVwnwQeRAiuq4wEm2vyDJyUrbxB2w4aRtrjrV2B6UyCezUXBcQfS7eUvYrECEYWW51Z5nfd71gL7wPAji",
  "key31": "3TBRyPwqzvQKZCfdkrfnxvS99kueWEUnrhaLsQViLC9fuiY8uZg6q7ZhdDccU5VcmUBwFXMKVu3fbHLEcjAb3Y2E"
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
