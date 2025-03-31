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
    "2sHT21wHfv6GhLgYjvzuKVgkFH8qxQB8sV7K2tu5NEBG56Si87uTxaLGQcQEGCba6g4KUuCjKJWz6DMJ14nFHjsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tU4KnQ5Xb9ZoxbzqZFxJ8uiC85Gg7kN3y5fdqaRiyDkd2NvLSWeoQUWMXia4XhDdMwPbbcFxyKNBg1LiMoLKAF6",
  "key1": "29AeV3qtJqxJgJfwmnSG46WkHYVRTXhwXGFwyVjf3fPtpKoCdLaJuTCUdvk5r86LvmXBb4L5tXTAg1po38FcW3Ay",
  "key2": "jzw97ZEP1tetZfRzAiW8HdvTc3jNuym2HUU5mpmoTKYn5XojGu6nAoZAHCNp9WdQDpNnXZBtcW2GzBfHKYuiowm",
  "key3": "3TrmS935G6e4tqr5cBmin716Lnv2L5WYuMTeAZwnTqvi3sZxDPkCtoLJY7SHD8VXQLkmgrNAR1nmxQiBAMhYaWYZ",
  "key4": "5FgpXJfp4suqfCdGGmoEbGxbwEsSco23Ex1aZBve4bD3BK51HXXMoZkr9i2H9FT21LnyE269TMP9qJ57foFfL2Y",
  "key5": "5uP9ed9tGc5ip6CWbLeoi5vwpQqiSYZZMttFGFFEKgw9XRnGKHNXAYKfS6mTqst26doL6M7s4Qjuvbk1pQgfiNit",
  "key6": "3VeUNSUBabLU5hNMEKs3tPjXLdtmdQ2jRzsQikNHbUbUtQHmSPNMBy8YpWfyeSrRK21cawVppd91CQ8rmWpbRHxZ",
  "key7": "3FQZVSQjEewJDx1Rc9kpihMm12cZgv5dJUgYtAeHcXcdjyM6PxcKJSSm7xULVARDYttnk63WezHx1KXCKnCPdxgj",
  "key8": "56P1JqHdGvhqdyu3xgFDvCbyJmmCWcr2GsDLokPXxqc6QKvdviKTRi3bgSynLebWyEXecUh9XLgiy5veqPxT1bjq",
  "key9": "8S7e73zAmSrwkM1PFs4ijeGTUtvcJ8CkmzuQjR5EcJV5sqyhvntifaRgAH53iuCoLbCzaFhQcB2Thn14zLPVMqm",
  "key10": "2gCJurmvwPcdznVjuzuXakChczUs9wUZw14c9MqkRMw9AAhiGtoPp5np1bwgw5ZbHZfGH5VwkYqB9iQQHnoRDwe6",
  "key11": "4diqbzrifMtWYCtM3Pzp2mrZ7LjJeCN9YYfSd8up97855f8hYVpntRjXFVpYdpjoUEk5GC1PATCCZM7YkCwQxJdM",
  "key12": "4SeHLz836FpSe6ZaUxq2EGz7qbXw9u6wSP6Nbpf14UWV7gEnj6YW5PZxjL8QfSuMCXMEE5igEdWgDDY7HCCky6iN",
  "key13": "3FytcUpjYCPs7fn48SxRarSooshVWJmwpyNUkiNVctR7EhGHC74TETdZG4AXGFczC6ADQ7BV37R8vrPtqTzn4vqq",
  "key14": "4mQTEVKU1PbVzvn1QRPZHPz5eLzf4K4hRMXkmhUY6Q7fVnyT47Syo78MmrDX4axJrsffUYKqyQFKFHLQdBoEuWJ3",
  "key15": "4zfSRQyoEhwMWm4EGjGiLbnsYZ7NRZ2FMRVxhgp1R9WjC2A77cbukXGsZ54i7mULrgBUVxBGW58V6gDks86UJGpi",
  "key16": "3kTJPLoBDMydWk39DQNvYUa2gehACP3fphLfpxe7m32B9qUswZT1t6HsK18kTJCxq2WsLvGxk1JL3YBSnH28W88J",
  "key17": "4W5DGEYbeZUWEEB9o8WiwAHbag1YBVTqeQutu3UzvVsapvTp9KXtiRpnykRYgGoNWqEHC8dVckPXoGYqTqSt6KmB",
  "key18": "3RssSbDLzDhUZKN9n569mJF6TPaKH8RszV7dAN5NjmK1ZvcHtNTg5b9QUaFYrF7gRcPGuakPgWh2XPXFFmZRvuUp",
  "key19": "5JSUhpiFquZ54fZ6pk2iQMuh3XUwr3iZx9jHEnjjrBhzXLEAcbSEWNvebxj85FmGnogpXHubSG3G1hqoF2pJYMJ8",
  "key20": "524NqiK6b9KsNA14dZArm3NV5pxFBFaxPJy3yQBQmNN4kGX76VgTY1C95imHPUyM13q98iZeLayqwvMR3c8zRvqL",
  "key21": "5LJQRdtz6QzdzoGqWMgaYZXYt5VSQBkuYcdprmhmyjsibWqt7cQL58FjobG3kdERQjt7TAKXNifpmHzGwJLu6Hpv",
  "key22": "1Y9YaahHhBnxQQ6mFk9RVNajAK2UCAyySuB4uukLnWcsXXyHeQc4RkrapUSxoH6majEFW7BS2nnaQrjReNnZtza",
  "key23": "39gmBq5cayA9ZduaQn3AXG2zLrXaaSy2NoEgUNqXzHBHLwvxAvtKiGixHZ9Brh4uucNYquXqcMJSXNdERuM9CB4z",
  "key24": "2ycV6ZxFUFUwXY4Mdy43yMKA5wqjWrWwRxc2syDCcB6g4egceJHk32cEbeyfrLuSFB4xF4mtcpM2pExvsTkUe5e2",
  "key25": "58NAgNkhp3RxpZdwa5XLz4TRpqYnbwih5U22dorPW5EE6jZTVwmGMh6oDSYxCRw5txu5UkYGrkr32UfEc9gLaFZF",
  "key26": "2z6VhxC87Vk69SmKKFgc2MRYSZnM6tYYDZPpZP28nX9mHXMUD8NtxWWqBiqxLn82sjrj8QcVzuypYpeNY4BmK117",
  "key27": "4a1XBhBVdQRxWpJVGi8bPygSjV9bUc3RSZLZp9Eg8M4MoJcGR65hbMXgMb5gn7fc1YFBZkbRb6MCdNipf1QR7ce1",
  "key28": "2jTgDZwtkHrk57LN3yLntFSsoYkMWZnVsyKn6BkHCv5oruL9tK29EhP1A8HnkfidXwhjZg4T1a6g8aX2NsoPjzTn",
  "key29": "2y2WQizAms2cuHGAgXjWULYN3KSpdKrGwZttu75BvtGrdXXeg2SWWQRUWJjuWAzj6jji7EVit6BDReG6i4SRV78q",
  "key30": "4jzCafHq3amCNmpoHFeTZbAU2esvQw8CB7CnB8wLgUtF8r8w9evywKKckP6pfCMiLD25Wy7hKwTJcHFxqg2MBdcY",
  "key31": "3gHs9eUmLydh8ncm9Nem8SAYCNgg6ASTqArCKGt7mrwr28FR9ECUPQoLk5qaixRXczT5ena79rWga3kgBLUdkPUA",
  "key32": "3LEsw76V9hh8R4yXqcMk5ADcVWE22hBP1F93KEAxsq4x8PTiMrNh1e6W7dah7ztWHJQBDnQULmbEAqcLjUvb18sk",
  "key33": "5y1gitDZ82ziB6bWcDfrYv1Ut37Lf4imNrv9rLQmidWaKUqMX8ggiJtsDsaf3s7dvK4pdAeFHFZFqjrThS1z9nie",
  "key34": "2KRaM6DnLMdj2RTZSmQ5e9Lu4H69jYknev8amMm2sH9QvKzj9DMR5nShoaJmCL5bvYe9mEafSDXbNLuFgmCYdMww",
  "key35": "bW4QfNwW2sRoVKpsrrATbtyeGEZeqs88RRypF8zf32Zofr4WgquqXdrGHwnBPkp8zsgrMTqi7n6jqbZKFBzEWN4",
  "key36": "2MirniofQi4ZjTkA4ChDbfhHg4UBDD6Kvu7XoFDdpQfcKh1JWLn28UaGp4qi9GZD53fS12yAx4G7Tj9HHDFcaSX",
  "key37": "2EVnVGucAw4DW1HZSuF55ij7TgzzjcR8e7MDQsnCeSuFt42pJxz6fD7Coai7tvBGt9MYHYfZDoU7SBo2DCwdfCNc",
  "key38": "37WU663HnBNnyaFMEZDHML1x56GbB5vyzBksPNAb5MYWCYkL3V56CPanB3QL4bCbrWdkLKUpY8mVukS2MwBRDZro",
  "key39": "4tXYpPh2CaB4H37qachLqRU2RhAsCndWKmH1vPPusv3RFKxaK8WXXo8WpqrDbndUR7RvrfHDrQdJrq1qPyYrs1AZ",
  "key40": "2BqdwgRNs6QB6K3Lb2T1fqifqEGT9ZuhQGpvV3ugENTjYaCmfg5maF11TyVXcQYREwzMoiocHcW6DmAhyCT4jx8x",
  "key41": "ZP3mTFoSprQLmFZhRK9PJS6kCg21BBCmyrmR9hA7CZBS5xYfjwsjnczSpovY6CVeT7F39DGrqkGeyVJF1925jQc",
  "key42": "5Wm3avLdDDSc1a8HGzqi3VFpVrxttcsAgkQsGqsSNN6nPKhDWEiR1xnoHj4ykcz1eWhUdcnNmhezM5CDf2gncT3w",
  "key43": "3zbVw79UMNRJNhsrdWGexr333daKf8q6BXB8K6aHwH2MGjrNQzYDezn88jTmK2V5paqhEr6d1TMCqViB2zw9XS9T",
  "key44": "3VvGomUzdcWbu2caC5T1jpUDj5raiuAY3cLpRVJ4sQrFZrhXnsj4GYm2hyomxfg3kG3v923Z7CNRupwsYMxFxx6K",
  "key45": "5sthSMKmztvJi8fVBxkjaMtHtMBhqribL3L9icpqPgR6njJZtY5dMtSRUK2w2qYMNRbPRwsQRPhRFHHXuMMydEjv",
  "key46": "NAo3oVy4iCwttvfXnkMQidd3BdTFwkVWMSGR15q5kXW9W9U6Dom58deTf7GRVtUhBNWqGPD9tLzcEZ41WALy7Ee"
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
