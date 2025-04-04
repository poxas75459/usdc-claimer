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
    "NgKme96V7ZFFfeNJKyxAt2DtHK9oDdjmsk6JGyWFKFJYpp2H4RSdGuJ1evyv4daBabemeyCH7fz2pcMyvdVhcqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8mxGyLGngWh1y5RVuqLp4qky4RgUwAJAQw3ejKwxNKprbdKCH3bYs65sBWzFgLVykat4Vu8cTfcamp6QiSH2m2",
  "key1": "Vs4G4GtrJC5cNsKwvw4rLRwayXjF9UZZPLteaRZnPhZXH1r29VuGK3cSL1dyjHZdZSkhBKRVZjvwGffHZNxNBJV",
  "key2": "2Ctp7iNiMUtABdaYjWEoNeGSdaptGKqLizeY1mgxZkaGgJV1BxZSZ2y6JKipmxw36Fgc2awsa1wC67XNwW7UcTiK",
  "key3": "5ctCXpiHiziorReWEFKMWejQ8ZVvrEfkzueTTu8hBYS7HYFG9N2dncTuz1RbZ2oVwbma5pWPKMtTHfNeZAsDuhGV",
  "key4": "dUVKVQgcSYxcSyZd6wpK2AbiarB4RQQzJuZZxXSYsomqznpBUn28WvGfixbLzpn9oeuPysypu7UCaWqPmtki5iC",
  "key5": "Fvy3TdsheKZ1zzcGY5k1nBWdg9wEsz6BRYkqX6L5jRLbVdR13eXQBrStwhpDryeP8AimKFNBaR1bAP3eawW8sgy",
  "key6": "3hoX5zRKPj3BVyK1AGz736hkFAXjySsrFrj1eAj9iv4wDbdSRqhUUz93oF5kzExgP3dGMYKNsrfPVBGgvvbFiK1j",
  "key7": "5FC8PwtrRbht1aMHcCRTmuC6HdBdfrxUhyTfz85yhgxvvXUFguKjXecUzNwB7WuZku2tCU6zSqaxDjnYgWRAoQcT",
  "key8": "3axD9KGhXcD8wUWSHyckTLea1msmcJmgBJhWzKhysCdQkNGQYE3EXKbGw1dSAuoW8HMUzxYmN9NFSNRjoWF4m6zo",
  "key9": "3ZD5tc4jwRBBkdKM5uUEdy6T69kgSbWkQJLF42MvaW4nWdpnWLEvUg5UtDshnN1YJBhKFwsPgYn4f25BachmAXnC",
  "key10": "35hi1ZAn3bSxZZsQRjAZTkJieVbLX5XMgnRirVz1DPnVZrzZhJ4PH36W4i1zLcjMsrtwt7LEDYLjqkXsgRX7kKQg",
  "key11": "2732CfznJVWvTx68DY7bUK2AoSFq2PJYEDmsvVcPYzR6N9CdeQpS8ewfCidBknd9mraSfdq8PDX6j3wBYEgnW6Pb",
  "key12": "5mPbeSAC4aMg2CuCAYE9J5GFU18dckWHRtVruajbzjQ5MaFxc8zDHrz96A2zziPJrk9kTtLgrXB22hohdrKXx3td",
  "key13": "67XqVqz16A4xGy1qFezii2Ds37ejTq5YmRideYfpzteTM3c1zqqbMLAzYCuyojhr2zxqvWZLPAJDEe7qC1Rrc3T7",
  "key14": "2B7Xxp2tZZfWhif6eAxXQYRb68MduE4qv8HKdWieB4uioUTzfsU3J8zjnef4K2DirqUSQFHMHVepZeXqoz6vs193",
  "key15": "2cRB24oAvxeZj1z3SN6f5UWMk2a1fQaX8ZB3Pv7GVkGZFqESENCguf81rUWiYea5LeFn6ZXypGQ7WTySiU8RfzjT",
  "key16": "3mRhjuszgLJaUYETVB5x69dYYkzPMu6YWNysH9PyyzndJ2DfEGd3BXVncwynWBjfjaP8RxskwvGUfysg5p51kLLL",
  "key17": "3XWoMr9RZKXgCe1q4iQk6iTM6yaBsNdnAsZwBcqXp9SeLU7t1zHm2f3ThSygcP98fTmTRvGUa7scCZrBjrXF1ZTW",
  "key18": "5cW2iwz3PKe6JYt98x1Kxx774hqSGeSyHjQmnvxpapT28v33mvAuv7sogZ4ymtqyu2WnZ8BABmiMaRNdj4TRuA4J",
  "key19": "3zCYx3yAL3PHUUCX9wnVx9qPXmEK5YBRbiq3FDQxYPUwESBwUbuRnFRpaYvsGN7gbHCDWRSGfdCJHiHcYEZ9ytRi",
  "key20": "4PEsQzebwiG3xAb5WXoo26ro1hvdzgydZZK6FdkWMVLihecqSNtzjy5cRS5fkGPAWKtVEpWf3yfK1bBRYfgPkS3Y",
  "key21": "51N9xYJcNVfsguTqSyLuK5ogfuex4uNuPwfnX9ng6KVbmGu2ADHFMGH3pHE2KMNhEvkSRevujn72DarujCLb8XD5",
  "key22": "2BwPi82DoohJqJTQnkDV8Jha4gig3uupvt6eEcD6NtpQoHysU2WE7YCbeQBpk8cgfwUVYR1rs7SMFA5traREuMzB",
  "key23": "AtHqpndP9KqjV5VLDvBAQxN8gd7SE6T1ufsvU8W5eZCqKGUF7aFWUyb2T8EfbauN2ZDs36iF7M2vLpk7h6oaZ5s",
  "key24": "4rn6euub6QeVfqyV4hiK7EFLPxAjkqiaKpc8hpqWB83dgbNUpCLSjTqvF7RVaKH4qT3S2Zv52CQLppFnfY8LMQpD",
  "key25": "62ZM9hHH2iF2aRTCfs7UgiBQ6V7bBxHeXuM5pa47vLUqWoLPrY17M7AugQmaNTgR2n1vpzbzVMAHRhzURvWudC8e",
  "key26": "4jGvkkmeR55snRpLbqEeViGbkNe7sy9rkLMMKhsCTLoyNqhNysiLsvbbtgYsVmijw1cC98A1ZjJCwrZWZL8YbrTo",
  "key27": "57cFLM9qHFR27ZKyYYuUmotiWZ3PApXqpqEWPGNQPbZbx55UhbuZLKxAmRodPcnJQN2wJbKMWQWHBJgRRufYxQ8A",
  "key28": "hVo94b73sibEbsKR2S32rZ7dxFdBJ4J3W2bjx9jiGBLfiNUaZ9Xmm2SLGoW18RGpkcntWJDaDQfk2vVRFuqPSUy",
  "key29": "67mxjsiT2iCiQwp9ZWRs3CrjvNJQCvpNqQoikFgzygStcCyDAiGkbbWiZzfuBerGhW5XxxKZ135PkGP2uRk6e5cQ",
  "key30": "DUnAEq8KYXheqFy848jpT7VMejh9Mq1MDNRii1Bd8G1UmL6X4Jmzb3PvRktEsh3mTTCEpaNK1DRDQszSyFa8ZrJ",
  "key31": "2HMYMCRUkb1sL7S1CgfZgCSxSjuSKTZfCL2mMuwkrZXoSJwSFTAj8uUtejQSVVdBANL5ow2AJWE7if9fKnmEDkv1",
  "key32": "4bP4bBwzLaAxgcnNyBth8Z3AjyvPVuJSu5G1d7qrKVBzAex1sM92gpaA9CaWtdaayjzJKG2SsqWJfGofknfH1hmw",
  "key33": "5XqzMUv8jhtCVB7zH74nd2toKWj65zxcxKW9JqY8o2muspZtvQS7MXUJ8P2e3S1EtqGMNNSro7vrud7EDZaMivAb",
  "key34": "3VHhGNT5565tpAZhXuv7DX5q2YkDAcFVggFibpc5M77uidT4NzS5fwbVUbKZ2gRHgeyscX73BdzuqmMC4FyT4mrn",
  "key35": "VhDXsh3GVZ7YQ2z5ntJmnjDGWf1Knopupoj485miR1CrhfnpfXnzpJmwAFyG6LnpWomSatE1kwcUyPf3y6XtZ24",
  "key36": "ttpWBkv2J3VpYXft9L9EyGcdL4QHQF3F8MHdskRNfMxti69vcBD2DNJTvx5M1RJRNjyMVYuQcNYxH4ft45yEcVZ",
  "key37": "54VKzzxfiAft8zCKW1M3YFA5HuKhd5PR2nWZCETd2VWc8V7EnrYgkKymmnbPQe9iQR7pyQA7vVrPXu53tT9yrrAY"
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
