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
    "4c8ckc3BEf1BkNA91p6cr3hoacPMWixBMjXmnBzbx9RLPYD97edXU6WYBMQD9Wgw6udeGZwdUHwPstL8yZBhMyLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knVsYUDXhpvnLjvEc7VRLXo6AcHTc5qW6WNUTdv3d5LUXZBbTbvNqjxdVK4d585mt6NwYTX7KZ9oNi9TfKdALwC",
  "key1": "5hnuQmyUFJLQGm2aC8j2SrK15fn7kkGYUr681azMrEPEcXK78FQYeC9SHsyhxUGTZQgvxP9pBAScffSjwbeY7Vct",
  "key2": "5i2mqWt6Yk1tzhgRTgJTPieM5sCFr8AvJyARYqy4e2tQkKt9i31Dgvyb8aMwmWc35AcGSSRY8kXtpx2xeUSrZKNs",
  "key3": "3ktVDT3NbGMBCyG9zn5s4tAdtMcLXDx7k1JXT9ZFHAtbkkA8mRkoGMN21z4YNHL8VitBFhHJusDqzSf4KaqWSQDj",
  "key4": "36f3Q29qF6eLdR27QLVvrnk65rtUWdk1oXP8VCyuU5UD3qHszjcdZ54psTater5LxKqNRQB6hZRoBEHZpcFbs6kZ",
  "key5": "4LACGjVncPAK5CmUFU3BeQLHuawrqvLSEWDkcdEPqMa9sUg7hgvJj4RhkY3i3MiuQJMWnPPcC3vW1uaecnNvu3wg",
  "key6": "GEi1jom8rq8uv37MNXVvftufiVpR4DxXUEz8PAAVhtrJvfdGSSfYYVUtSA2H2sDakVTnxbCkMfocestNthKKoFn",
  "key7": "QyVWSiFtJvbF7pECfqAAeDXnNQyKkKa4o8KmaMHdfMqcy4nQiQwGyinhnDBJ3oCERrxF8xiQDJ9kz77cqPJj2Jr",
  "key8": "Y69WFGoCAoTZqwNBfZV3heieAYh6CGyxJLH7TdKmSTdT5Az1x9YpTQ6UATRvHo4Kzb5EZpwfLcZLwWURRLxZZ4f",
  "key9": "4Tg4jkcBjw96BERA1B4MEJ9NNix7pXiXfCcYU3vcTw6QPmJUDJ877qVcZxujPznnc1XeyBKAsHqggzQ6c5ZgatY5",
  "key10": "2Y6f87MpsQHYhennViUkLNiGDTHTPTnLmMegyd99xYrJNcMW9onC5iEN8hrC7XV6wvAyk2xRWBp7dnDn42S7vTpT",
  "key11": "2wiVtBeHjSuaZy9dq1VrbryqC5WQBspNhL85zgzGMSq5yXguf6qBCMGngF3pwZCGoZGM3DuF6CB4CP5P42qUcwxK",
  "key12": "65HN2nSC1Vsvuy9pHSmYyBa3TZjFUpSn3Fc2d4CZAemW81Ztx1pCHna5Ey7wrbs44BJmsE2nNw6VxrgRHuC9MPVb",
  "key13": "3SUWdsZAteike4okmrXyjTkvmMcFQaZ5x5e5rtTt459jx7CuycsRFP737QgBwpsVrPGagQKt8XGyqqfdAmEc3i4p",
  "key14": "2oXqEaMzFTpepLFMxwcpHxqMZ5aj2tUBPmrJZkrE3gr1giPZMv4tBmjPQfr87kT53pJnM81X5786ZttMvZsVgHJq",
  "key15": "5sQq3cRnLpGvckXankiZQYRkqpbNs8Ew4n3KQbzc3M6QSRR66c2GXEGai6y77upSHpLirbGPeaZmjJQFBCSSHwt",
  "key16": "2FZ764ocWRVAfnPJrWUGEDZLiknKRzbejzEGrjPAdVDHVHNvYqWE4Wcz45irQBMqwoNsPJBp5HX9CVTZns89FiRF",
  "key17": "4J4kEBxo6KzX22s4FQfbLJMLzezrfENXnffvENxnbSeanPbY1RyRU95B72DLs6VX1jPVWpeukxJZKsRRZhbE3fEH",
  "key18": "5QSULLGFCwPXwUcYocXt7b12RqUpDNV8q74vt7kD6uUcjCLL3MYUd7eUkx1tiVycEdmVr942EowkV33cvW384Y9j",
  "key19": "3JomQZ2y9JQw1gVJhNThqVY6GPaaFNvakSy7hgiJ8JQhkf69BSi1nQMn1RuANJn6Pfu1xpkCxbHitf426yV8o66V",
  "key20": "4UstTaJGcAbg9zESQPUdgMt7Yoh5YFaWmuwozH1eaHHW5vZ2ZfGKjfPPsFjagVzGVtgM99z6iSoDRwSnigUYTdrv",
  "key21": "BeFmYWqEZFcj1ANimnNekFRuMLTMeGiLdMJXUJPNCvohJMmE1dva6NU61srobyMb7E1rRqbVJ68JWy4SpynyRsD",
  "key22": "zW1bhURAZTscSU8DE3mcmeePsG7Kat8CSdujWfTC3oopzRmFKro63CiXryPipRvQgozy7BxwZLkxHpDenqakzHK",
  "key23": "3haW18gUjnh49wpPGWZSzVNbBXNE6SffoLr2PqwuQwiPPfm25KDMDreZYPStxqapFNLzTe5D2tY8wV3qMzn1gKJp",
  "key24": "2535H6pGbnfqN69wwXxNQfpu6f2GMd7pfA3fAc1jqsMwkJYL7qbxSYR7HMiwzZo4pwA1ve2M5MU374mZzbMZWeJ1",
  "key25": "4P3cPbjRmDfg8ojB9VeVts2G55voSTwf3AE4VKyQukCCaLkEQWZ5Rjgq3v6jr6ryzS71EyKsY94SdWXUorusXpdf",
  "key26": "3Tkz8kVZ4xPvu94rSJxNzCo1VCTHPzDxaxYc1v5eA8HxMvm5BjCBdSbrKZ7WfQxB6AieVzpaDEuKWagq9bkrcgyv",
  "key27": "2fXWrjQ1PhkudPHiZbGHPgH1B7eFd1xr5pZWyP6w85gJrrABEeSwdFWqqb1pyWbZsqsBAP5mmiSRZURsTQnJvGrV",
  "key28": "SbqfFvprGVUacc5BMUf2NMhuAKxugqfG1DgR7pxMU7ETkQQsr2QV6tKzw18Qk7NJ8wXiXsHCYk3V6K4gBDPyZXy",
  "key29": "azqohLoywYqVjFQCvKzpFoJVgqSAJiKdwTkyqheweiWXYz4Lqi8CQo5KYWgtkBz7bWGUe9QwfX5U2iAVTWJswex",
  "key30": "5J7dzsT2Ay2sZ4E23p7MPzx4syQC5GFpFUQAPoe5N1AtAaWBfdbPhbJ6QthFoxsd5VuyBevrQkWjg8fZ7rrVjKfH",
  "key31": "ws4oQMC6UCQK2mcDNDpYXJPfUjLbeAkGWQ9uAQeM6SpjMdantKsf7Y2o5SMceoLNEBbkrzCVC26yVYfh7EZ9jeb",
  "key32": "ZgCi8qwYRqajM94nfizRhMP5JStrrcztHYuvykmc2uNtWmrHsSfmgcG3KhMZeCPDxeC32zf4oLMtrvMrBKtjSaM",
  "key33": "31gaEMruHgiZuufTJrm1qz4B1kYjuihYK8ZdHEXQJeNBxx1C4mhBUeEXjyyuQWpo1hc3MkUqQ6G5zuDpzzyzLCkJ",
  "key34": "4bF1Yu4QF5YwMkhajKBjDMu9iajgY5e6Y4ZaVyT6jduzDw8Aedi43AhJF8cgAnmBydSWXXZmPmbgymKDXQMmeakz",
  "key35": "5mjGiH9oLxC7sB1rH2B1tikzkW8a3HN8Q9yYkZ1vNwj946dG8wUinNcpb3qZWvBS421318MuXvyNAcbCXtzdXbvS",
  "key36": "39NAW85Raanrdh2FZvwXM7cdSkxmvktPmVCgvKaPaKSaDyYsWcnZ6hPSYg6NXw2aLTtJDhWohWY36kyG3GXiFyYf",
  "key37": "54oupDLAsTcbdRUcMLQ2VCkdG2GyzKXSaF3SHKyUxzwFFwG68cHZ3hBKphGgRigXdL4FYAY6vGKksZMyST986XK1",
  "key38": "4xDmsZmym7soPBGMM11F3opaNXMKmd3Ljuwyp2SSbGqLJURVpGWzhzaL14y9eCePw21rRi2JEvcSLuUXnAyhHP1t",
  "key39": "65VULRcbhTspYjaAGuv7LwLYdkfAs4TzCXftckxyuVrEgRdwP8CXNdvFTBNVXqF6TkftVZXEGBR51Nhvr6v83TaP",
  "key40": "3AGnvVDTBFMQUEXLGnkY6dKXcqSFfM6YXGk6dTmkpmoaDXbf9yGSZxGG7gWuyiHjY8xTqiVXcYafStFK2aUyUqeT",
  "key41": "5ZDNLECAqRToGvEesr3QutkUvGLrFfR1moNmTQPkd2MRUckDBkU4rNJpH1FToJ1BuTBrMZsAX53q8S7bZfHzDJ9J"
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
