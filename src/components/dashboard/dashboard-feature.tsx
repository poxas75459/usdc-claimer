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
    "2dSQC4Y39yrMTyAYxw78pefqCnJTJofeAgniGUASAM3bsHwg6xXJ7jbSAGYqXq1vcszw6Sa1QHYHWvYcf8NbogVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPxLjEfXP5WXQFGZwPMbT8qsVt7XAQYcwr8ZCDMGuPJZuPB8SZCKtNK7i593sthnMrpoxSvADuERdaJyxje14LB",
  "key1": "59psLkEmY4oNu1n868KakwjEjtnGgth94u49XEVmC1b88EfDn5r62bZLKATFXfjzEiLmTynzAnvncLqpgR3gKbP",
  "key2": "5iAw9YFfNwawZGD76r9aaWovQ55XFSDqTr9HRuTYmD2MMfgyFLz9463FK4z2Et2MQ57Ybeix5cPwZGRLtZEhtSFK",
  "key3": "3ByTCtc654RE2oiyRn5bHBmfNjEia6fxyEUwinTdY6XdASkmrfJAzDsQoJUkT573CxFDTx7gsrHRHWirDdEe57VQ",
  "key4": "2SVaRmyXdG94jTdXkqGn5PyMFT9bPL41HLTFxB5NJ72sPXeigvCFjTNLFPFjCx3nKhFdo4FmNTj8RtDRWgB6534R",
  "key5": "BeY9NeDh2JJxVN9eP8VUA3ATSUtfZWUURDVQa8SLfYodxowwrXqfJ9LqFdxGtT9ffjREHoz9NErH5zQ1QY5uypc",
  "key6": "4CvGJtheuWfeUheccR3aDj7M7zXDnA9kS23Zax6ZoLkxVMXuTVU7QTusokbEcWwV2qjHhCDrknUJnwyjdW8P732F",
  "key7": "3sD4t4ekaAbjAaYesEqpWLG7ztEnv4Lw8fGbjdSmjJhc46wUkwSnZqu8m9ej9dao1BMAKQsXY6ybzSxThPvNZhRk",
  "key8": "3bfJCasGUbG3kjwddqetUF4PnatWQc7eZjew1X1tDRUKQcCioSB6jgjoBzPJxr9VWTnDmqXXoDCMh2JC62DUjQqf",
  "key9": "3cJoSScPAdHe4J7CHhqeLFXY3zjoWSTnDGe35BWqmADRRHxDgnYjeRNinNPfdpqGJ65gFng7hB3BqF8vMc1cFs8r",
  "key10": "2dj1EdsJnWMRAxmdNyo5scvnotMxb8Yin5MGodEk1UjJSf6NTYPieHtce5sb9Y4BMNXboyNP9mhpEZcyFEC45NJF",
  "key11": "2aMhPjsFztF3bEkXgzSHNDbqTDdP3SRq4RJVajA6wzxZA6Tzgugks4hTZEASXoK5dAVNDQTVcsTMQuYeSQe8KxPy",
  "key12": "5i4gBfe6FxShodMLx5uq3eUMqcy8kmcy1xu2oKGBZsz9cXKrq6dKQ2syNLkjbPvTLJEghbHiECqtZmCZbw7QqMrX",
  "key13": "5638zN5LPSXQoAdoHdizLaeRhCqHAMMFvbyEMuLTnimNj91ftfgFrjkWJMJ4kGt33tMpmbAMjWKr1ZMM6fyABT6t",
  "key14": "h6v7QH3TVWHDQeaXbPnbo8jJ2uaxaUz6w7iCHXHehjp22dJpWud5ZxhE5Nir4cZsuaF47cusp9PK9PX1AwZgpQd",
  "key15": "3BH1ku6ZPW8R6hBKD1VoJ5GyS4rLM4bumSc3gmeegk4JSqkxuJk5zZrWs1mWHPGr1NKV6R1QEGDnvoYp2gYqCZxk",
  "key16": "4otLBMYEmZdEYCNjjhhEmYVJgGX4foZN1oafqtYbvQGicpE6hBDyCh2cvaVZnX5xF8E8Jgt7gtC2JpA9gwsZCDeA",
  "key17": "53pS4PKvXUManobZXkVNAZVhNhjL8a7e2xChd18YHxN2gLKvauXQHrjJV1NAAtK9eSbCgouW3WgiVmFHkWRQWEpk",
  "key18": "3oukvXqbGm9EUNdCMEgHbqAKFHwvBWKHcYJCiz2zk2vBUvhVYkSHwDBNoPsNEn48Sd9FPPL7HFvUQ81oVZyDrCj8",
  "key19": "5mcZD7CvwKhxKdw9Vk1BCKwLMVzmoHnfX9D44oU3Y8WAyLki1XMUM4q6SQYK1nCdAMGqEEMMhQZ6KzfnGLFmdRcg",
  "key20": "21Mj9FQFQ9ziFXgijBCfntGmjF2zypwB9C9DvLg8M6v8KXXJK5VjvjMEcwUF2gpDw6ThNjU2wuB1Px6GJ5cWExq2",
  "key21": "2BRVy6RJTp4ygUk5gLUwb7qaWWK4C3EdUxi14mwTraHEsCu4rHMGqqBAKdUd5qc66WrX52NL4sowsTmE7ZcmjWMJ",
  "key22": "4J2sNAH2KEYrUftoX8pqT9D37rFAZ6yKWUEuiBFh4TfH2HAemh814veGJqz8Dvp9imTmFiQS4KPjmmNXXPtqquvR",
  "key23": "3tjVC4Ah3PovQjw1t4cs9hpVC3nNZz1g7oVCWKgHvNomnCfyAf2JA32T8D9qdyXvQez8C6Rm1TgAC7dSbqEzuHoz",
  "key24": "55WvA37Kh4JcMcjos9GrPxSN1EDY9CwQEAKTdYEwT9gLqRD85JrfpAgLD2N3qdxJ3SSbyDJFDJW3Wni6n5osFDRS",
  "key25": "2M1du3qt6RW44iZPgQhvjHr3uc7npEu8wsjbPivrJB2UPa5Vrya7LW7GHfbJY5ahAsiaUkJqGnmtC9shc8fFQzDB",
  "key26": "oPsCfdi8D7jzbZfKZbDEwZhxdub2oTLAnm1vmme5nEiM5CcgW1LTHFjugu7BdKo5ZSXcUxETunPErQgavi6fAmC",
  "key27": "2LyQ7eX5nmBv2YPoyzYGZv1zQZ5gYDGtTq9UuytfSoJBy98pun3hHa3D7uzeKuZWDrQVsqMe8rhGnxZcYLiWVKfs",
  "key28": "2pQ8ZjXxSNPyKFcksEdRV8cKMhosteHW5QcFvZtv4nsFZXJxJTTgWdsrMUmGPEVVHFgCzaiHeKEiwYnF2eBtBFPe",
  "key29": "3khBEJ3woCZ1J9axzX1HPCjV3oV6rDHmYag8qUoQeBotJ2zokZV6akoi1ShxcArEo2aB7uWXRdY9jgHjCb3Awqky",
  "key30": "5FLTeDEJEMn6TeptSkEmvFDAy1JaG1G7oSVV9XVoqgpZTuvnUxKv1YuPQ4MfSj7VcuFwiLgdvX9pdrAf2UDw14mV",
  "key31": "3pnCSiiHpt94jCWrWEdyCPvKaAKuzajiJsNDm3v5DQTKnpw7tA5LNDPdjG31uDr7i1Hu4h7euRdDFL49dhF8UuA8",
  "key32": "2Q6GWDBJtu5eJ83CRFJNJuXtFyiRMkH5xbB9CDi6aQtu41FEvNQS6MwiGXq66UsMG6NGPGePTEZAiVPZdqjemmFA",
  "key33": "4LTMT2VrNWrHtoLseZQ8wcnevYq584RFZYQyWynmCKMoPrv66JfMZhmuCrd85P1tcy2fVJGMuB4iPD4EQ5jQkcVd",
  "key34": "5Lg3RJaFrqBEUQNPHjTTfYb7qfHuS9DMFYUZhr84SXmjadPX5epYegDC4pyMCDVQ4DvsaRqSRzwfkgUCQaRPmY7k",
  "key35": "t2VEBnLYad8L4F6c5ZsjMqfBssXvrBq2cFChFTx2XJ2sZU9ks2XEtUE7XsZ2KQuhDgm8NZkjWjfeFNjygoPLvtn",
  "key36": "58wQqLSd9iSojz2Y8V33gZGZar8LieALud2eUQd42M4ASPFQBxiaB2YAQX6Mr6yDHFYXnHhqEEw4a5pbZT4iHAYF"
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
