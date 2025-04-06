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
    "cpWriLecVW6jmR3UnW6fWyeMBStLEjx9EsgQkQ9y1G1F4ixigcUzUnTZB4MfE3GtUFXRj6Hrk6hL3uVzRnW82Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExGWjzKd7PMxMTXpMCRUcursqAYinqkUcdthhLezmC1u7PVmnAGTWpPUHTMxcb8FhWEj4sRGjN3cM7j2A21uxpz",
  "key1": "2gasLGLRvnKk3Q98drEoKjBbSyC7M76SvbyMCXEXCMn4t6m3VtXxR9w7yXVi8qPKquuHmoKeqYUmsinRSSKZU1xa",
  "key2": "4kny8mrhbgjwANkBXkX6kCuYw3LPQbaufKyxQSYyfckKwkjdjy3T2ESNt6kXX2YeHvrJqkJYLrsYVNTFqWiD38KW",
  "key3": "5fRkqnmKyJac4yxxS7EmYH3rYWSxS4antrFzAwwPmcEHKX9CEehLiBW69gqJrwQCxtGovTqCiuJSWZk6hXcFAQ3",
  "key4": "ZyRvj6sjyEw92kHReo65M4626n3n9ajZLNbNUjuK4xM4rqR1frSCZvFdC3dgwpsc29C7ZFT9fhdrXpftGhddV78",
  "key5": "57pB5Jz1HCsZwR288fCAy48ymxXE6TPZxT3oXMDsZo3gHQL883fXocvDDJfN6zeRUsjDcNkzEH22n8t48VnJDuxh",
  "key6": "2AXLd5u7n3YLtrDJvna42pcUpmDTJvAPvc7JrCBrdsDQCfqERCFCdgtAFFqCmrAKvQMUaZ1vA3RsoWyyGCLTb14w",
  "key7": "4hheByx2SYoB22DEVZ7fxnLvpKQHvZi2j7kGchvmxnDvyu14f3YoxUoH6zmJ2HhVH68Y8LvWfQd9bKiWKCw39FsC",
  "key8": "3ePJdAPAbr9e3JaKxpgSY5ExfAQDdFYJfw5ZkK9NaMyoFGBfaL6ddBPjTX2zHn9GrpNq3vhH29RTVd2etTBMEk9u",
  "key9": "42du71VUzXERJb1PsYiBAdoRcWHG9XTnEJ7Mmhf7buWoQrx72sdawckWgoEmnDbX7yMH65gtxAhHLxsiFMphJBn",
  "key10": "1coVQLLgSgV5q2YzwfBUTfywJZDT4RgP6iUdeWZtwDS8Xd9ury5vRxfx9sBpJt4TJdLKa3qUmLsXr9XTwfdhZEy",
  "key11": "ocZ4QJd58K6XEU7vBms2q2oSbGxdr2gN23fn5qKoEDN7GdSBsLVeVHZwEh2SWkgYLtt1mYqPZxUWwEyQUdSK7CK",
  "key12": "4oxYmHkoJsmv8ZQpFsRD5L12eea2sYeAL4msTr6jCSb1sEKHdiBzoPoLHAgKWFua96m5Wptc4f12mJfV7y1ifU9",
  "key13": "gtMcXnU1UE2iQ9aSfEMEvxgKaV4tPHgXVTqNfbMkD3cg9hrTDTKC5T4EWM5FypSxjWE7AuR3N39J8i2F2QLMoWV",
  "key14": "YVu7v1pkvNWVMLxJhjfJLu1v288xLpSGhfTH249nepjic5GGU5bHtVCDhTAs6ba8D2JN7pkhgA5f5rf7S8rt39m",
  "key15": "2phXfYtnWZ83mFzqS8mJehqcPF8UutQi38ewj4HcBahjtQ4fLxXD79Eix5d2SNeMzcR6t77PukUvTRZ1EHXKLQoX",
  "key16": "3L2wEL8oHc4o65QZdaFFVdURD8mViXJMxDg6CtuwneRXYLo7Mtc1z5jrZeg8sqz5DFn54nsDa4eGn5vi4JeSVmw1",
  "key17": "4nSGEU8n2Nv7MQtBUY4MneAgWCR7HvSjSKXwkLNEvuBg81QGkEoWWmdPynVNho57WVBF5XbotGM7XkoKndnt5i7x",
  "key18": "2mtU1kz8cuySmzp8k52fbiRVdN3jZL4jSFTJ2habDbKFGofcmWEm5CZwGiJ1FPtwXLAVMtRYS9SWFZo1Xor1MD1E",
  "key19": "5Kw2gn35marHKEEa89iEvqAXGZ8rXF5yyMoJFk3giHtnwUgoJ2Lr7AHnteFUKKLZuYWnyUy8GKm5N9NkkCEZ5QMC",
  "key20": "5AtHFfiv3M4PHmBDNeCdGCoyZ2oKJqqzeVwbNukBRfBeXtT1meSQTFGeTJParKQZprFwB7sFZ6of9Zfkpnte4p5d",
  "key21": "2m1KUumVQHp2zqi9NnMtc3Am6fXSWnbmJMtoqWSpFXRUmJ5kFvJW84cff7aFkuM4fAVrHQhzr7urPxDLNctAeD63",
  "key22": "4bvAPDVHbB9MwJvcs8BCktBLtpaWuJ3wfsmoSEbV9pZT78Gw4K9i6SvVusZNjzJzoSKDpjQmtGzziugLvFrLXaZe",
  "key23": "31Gyjc8U3nzuK2Bo63XG2AZdeHRseEt4rmbFpjBnW42F2XmESanQkNcMVjzF7rNd9669vUbCmjvQZHrMNVUZDNNF",
  "key24": "2hUfVbPJibA1L99LGmjBAp7bafjJj9uRSvU5WPQTnv6aURLWztJPJGinFsc8Tq3GE86iHz8nrw7HkENV6x1JKC49",
  "key25": "4UoCZhDNRKAZfUqZKfRFFMDsGgvLUuTxZVj4QiGVW5FMpSsuLK5sXPdGAi2Bd6LmYTjaVTrWU8zuD8hyPco3uixf",
  "key26": "5gic19uZ7pU7Js4RefNjeUxAEefoifaXkZHQFaaJnjwvkuUJ5Tj3nJpxTDWRhLC6iZHVoHUY8z5WdHpAngCNaxeQ",
  "key27": "ueGk9G1qXnJWZpEUXTd2swavAwvemUcZa52AkHjQejXUsTTqHHAtRhsGCzpm8FYUEYHCcJna8w2EBgTKX289xUz"
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
