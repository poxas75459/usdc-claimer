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
    "3pcv8nFL9eMz3fkAAHhgYBz7eGoexxV11ZVQ5PTknLCru9LYqsLLvSHAi2YzM5KL4onSnHin7p6xJPP6cdogRePU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ryi3rfuEfK4FSuWjUNMN1dbTy1D7M3TKmsYakz6W1J6yVfwHMKngmNSeGg3M7igxYrD3y7QABfcsZWTZR7Phq2m",
  "key1": "5eqfXxvYdMvwBYqsfQcmEVvXpHGwq7HLEsUf31DbYqUM9KxNqyTyq99RE7yXFYRxritno5LBMp7FAaR9dUav5YuT",
  "key2": "4LQDcZJX96Sv2fNVeAQejHdtXfJoXMjPppTrKaxwZc5ptDT2QL2QEPuY7ZZZCdCtWASVSvtCsJPZrfoKNJKWDrC3",
  "key3": "2tv3ET3d9zhamNyHk8i3A6wPo8GePMim7kGAjW7azxcA3GMxKwHx3cWqbpEkgutsK1qg8cPiZ8PqLmfHrE6bJ2e8",
  "key4": "5kFD1ghWAUUxNdvCA2mU9CBeBaxQiwGsZAgagqWCbphgSr9EzUWQszjyRHrMVisv1LXV8rNAmAFnLeKh2q2u2vhT",
  "key5": "3dq9CgfksqQBo1MPhJQjQJwHTrRrhEHfmraxWQdGUvds9TCqUys6hAFWJPV1svGGJSGVvACtYR2JXUoGmsLnJrCA",
  "key6": "65Ux5iaTgqX29wnvnTVSyTQEo9EjM4o7D4BZHkPeDhNA6G4Cx6a8RwmDV8dSFhD9X8urZuZmtyLjqUL68JbGkZ1y",
  "key7": "2QhKf377QnmMjbYxfFkbG4Xyq8nWs9mtGtnW5syiGLfby2rV3wnAb6Lm88bQExcNDbTc6cQQE7Ba1SsBbjfdvd5k",
  "key8": "3tgAzRcBUobPoMsSDyaoyyauwx7zAhxPz2WDLfrwvn63dWph2oMfV14bZuhNrmXKzhBPRJYJPPcyDnzhvsrLwAAt",
  "key9": "4SocaRpPvgMmchWSJBqEKN5pSCezd2o7AoNvzXM6xeMYExwrYHL3cK8H5gv7PJeiiJQmD65Tb2UoyLi9xp2sDymj",
  "key10": "UYwaqHZa7TPkWzyC5jDJZHa4hwuoZw4JypaRWqrbDj9gL3AXvmhnYUWreyAhmxgWW6FswcyaAzBhAdxXdd2q8KP",
  "key11": "3zoUADiXKzAjJUoJpFXi1f5jLC7QRb4nqRu1y5tYenSHZP3ouURnhWgjF58NS9gNcv5rm7fJjydLBVgEfBLy8H4W",
  "key12": "41o3SrqttuYihm4cE5gomH3NTX6SH91QQPxaiCBRr8xBLxcy9riavpAx3AFuKSAXowLmkhyinZafTPLG5iKR2Y1L",
  "key13": "gokWHALH6WVNTuVSzoiMQWYrNER8EApb61xuAfLJHjivBid5HYTXHXEtQzVsPmbP1THWrYF7yvmrAuHpdF7sUGh",
  "key14": "3sGkVebHF6kfVqLqJQWAq7CHt3CDps2eE4vo1vJxAHMs9jxEazUpoU7f33pAb4Evr2JF1jE8Hc1J34XkYuhAPkEs",
  "key15": "2riGShE7KZHmL4Hj1HaEukYcuNMr2Xxd9gJ2cssEvrGFv8HkiQiZa5czkQjyhaRsTazJpEF1ep51YVg1qReKmNtY",
  "key16": "4xqz9D7fqWvU8DV8Yo1H5NZ4VbDS8eowJHpnmxmrfz5mTys9qoi7c3Y265aDa5TdCxZo8MDCN1UJERAms2tZoTjE",
  "key17": "2qtwYU4fDHZEDDApcDS7uHieCeeBxhZDdp6eDe4pX3ARkYn5fCoxwpVFriktU5UmJT3iVRFCgPR84G5T5E3f3o63",
  "key18": "mo4q3GZwGTJMWpJ51fNS9yZMV92hVqBeMzqJUQnMBpSm85GP3qsjUEhgenjcJMq7YfEBkfRGnj38MAtUg7pBx6f",
  "key19": "3UtcXVUNwKM35FEYnnRJLVuYHouspGJ8BgYADW8jMUSfWMsusCkCDXvmeAoqB3tvzyaQZv3UYZTmSoRJDJhEgTFL",
  "key20": "2RTFCovspVkcJQQfRonJhE7MJoww2hTbXaS5dPVDA5jknPmi5WtVusy3Qeu2G2W9vrA5W6DWrEBp2dBHJPnjQkrF",
  "key21": "Jar95CEeJhNVn9jC74wixvBPGvrpsrsTvyx1TYh92Tud7e7ZZzu1ffCB45DmJoFH96rxaoqyfDCCWyZdFnx6ygy",
  "key22": "1K8jKi6SLMQc9c7UgRQR4d7xadxPJT688ZhyjXSwLBzcPhUPKskQC3n3qQUPqMykG5u73adJbKxiW1akRZ63nGK",
  "key23": "5vWLRmi2if1CgN9dARYCYFpXq6Ar2uu33nCNp677D4wsRXntyXdrKJK9fDkQD7TFi9iiZWDNcVMPdAfhfBJMTm6E",
  "key24": "21GDqG2jKVbBSM4WCNw9P25ry2uqAy98fevBC5EeFDJJnHu6bSaqrfYp2JFqKsbZVWFT9sVjCFnY26BoiznvVXLU",
  "key25": "54sZZgEF947WRnKvCyP1dmCZ7D9ZdYwHA3VfLMCRDb9zREGUJtu4pvCzdudPzXRFsjnB133eF4brkxWwfJX9UCqF",
  "key26": "fBTymgytMXL3RWRRxQKn471bE4uov6V6YHt6ga3FHGQCxjga3vuV9JN6P2gBm9GL9X1cpzwjyN6zsB8mokwLBui",
  "key27": "5nhghHXaA36N1rPCrwRGUH3cxNLg5MiCjFeApVqT8aiR9zGkRNWk29h63zMph7eh9KLMHKdUo5ycHsXqzfYNFyJp",
  "key28": "562mraGSnVxJ4VQpJWJXoqt5dyQvvXbm5YerwfBfuFToHT2VSa1h3T7uTA5QWLQHZJUFAugfNYtD9uGQcYwLgfeh",
  "key29": "3cDVnvnD85LHb537k4FdnvMwYAssTDbm4AvwtCw1vzqfaVBeB2g8WTbnfwWrpSx7XTNq3GABczBGsJuAC31kG5Ya",
  "key30": "2kb9SGgfN8JmsuTbBpxzvAYaJ1DQLnjcUM7CCrCjjYCru6D8G4nvavHGZxgALf6QFfDK6X79tyPX5jrswvYt693s",
  "key31": "2rSR79hK5wqvXruBL6pTkohXD35oUgAwyvkTRSg2u9bCHE6rGnuEufSBbzhFEW4vCGHgLTnXqGsjLuucyGrPBpTM",
  "key32": "2ZHUWEFytkpMy1AzZceob9ZhUDFtooykrzCceMSJYPwNrXoE8WctFN2aYJYSsNVYZkcE3CQKfXEUFSz2yuDY1nmX",
  "key33": "b95yaY5C2DYoJdEKNf3WAZJWiVRLZmzCwjpzXh9rNMxyG4g7fi35oQKK1m7BT62BE5kLcg7fttopijK1K98kRNc",
  "key34": "33aovcwm7Sxng9g6jZbAfUqHjgvJk4xfkFVe58dthm3Xuc3Q24AzojyNCJjXdBbaBkzy4s1YVoKmAsN8u8HeSdgT"
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
