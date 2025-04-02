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
    "2GvggC226CWW4Q5UdxfBmjzHiy8y3hW26WR6pLpsJBZ2eAWGek5N4K4wrck6PNaxmmL6cVMzg8Lj1XCeqJirMQJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jVKg4jYr2P96y6UpAYQHPVjtfGyapuVZbdxdN1MK6zFKT1PcwfXbwR5c7YCTJ1iBTiLhmtcZuuQMJ3ZVarJEfNK",
  "key1": "4bW3kWjzDFgrX6kw3k8uSkiLqDNh8ocMwVdZJBhZCz4t9JoPsAiq5TqM96osGZBpNPRHrH6DBav5qBWhDfvhXiVE",
  "key2": "29dJ8idEQ6m85vXFJeWZoEzbi5S2ZsJdNXakJ8NUVQcExAztQjMzSk5xvEgGAHv8mqyvQfDBhNQXjBVaSF4EmBgj",
  "key3": "3on9LaUiUoawSdpzShhYgEAEFJvip3TivAJQSKfLo2KvRy6mxAS3HZXSEAz6eJQBQNbvoud5MiYYXzEwRPKheA55",
  "key4": "3xmmeJZJ4H6EbHGGsz5VwmVViBwJveAr9ze84kwFwyPDQZMFQZHuQgo5ng6cVhGeAhnx7gY6Bbv9Gb9MqKVggPfn",
  "key5": "4sBWJfxXUAqt1Bsen7MbkC8mt1ucPoCQub7ehW9qGe1nxo9AdjTwmV3QphMS1LbLSkD5ris7ZunkQPg7K4kHc9j4",
  "key6": "SV6AezpdbbUmrzC24t2TCfUYpVvVDXqykUMn4dytWULQzQZXif5aLiFRNytdPfATQfGhysfTabD6FXDd1waDDjj",
  "key7": "ViNrkB4FtXrfVY25GRjiCAy1tVBUA7qZHAojZQ12TGPRFrp8TbbbQKkgKaEszLGFMHsKtBPoJvzPVubdnVwGxmB",
  "key8": "2T2nH64CvV6zPfYsDT5ge2mTEcNQF4dzUmjLxfpYiGvsUSjMaKpYv88dTktyf9TAizEig7d1SEKABgwJAQHCkaEd",
  "key9": "k2JGdbTxrHbZDg7i5Prveiz9v15vmywGY4S86nwdCKf5zRDteuYcBXP7Ji4zj8JvyQv6Taez7u8SsBP64UejeNT",
  "key10": "5sjzaBVxFLh9qjL2X8XN58u2zFhjPPd2t34YQmTZvACML8pJZd8suENpLXEhtTE9WQoJb32sWvDEYbF3ZcmCpcJd",
  "key11": "3t4PyMXZPVi1paGtPjePBXHf2hcbQECpTcoADNnc68QwhytH13PvhHrB7GCUKvmJKmgqCEvzj4ECeh1QMcKFEaTv",
  "key12": "5WbnKEKoYWrpTcVu8YVh2ZzR15qk72aBj5MLaRj7GrTfH7yZkGYW6KqkownEsvzsxnffxecCHsQA4Sr6BeLC7YG1",
  "key13": "4otEJ5pyFbBgVU1Bc28Nrmq9TNBPh1Ch6GqNs1h3MjEuQPzFbGTN1z63t6QmrbJEjd8jEThNxkQepnvoy7Rp8jyG",
  "key14": "4eykU54Bfr8oXN1XCYwakCuvMoWTZFN2WwVVBScVimvwMghVfZnnyNzBrZj6u9J4PqZK1WFiPZqSyJjGgBe3Lg8K",
  "key15": "4Fptw5bKUJS89JHa7WMDJpqd5HueYSJVJQyzTg7GskvBRkA3knqejuVdpczrTuoJRCw2AdjGuWYdabuvY4qjh4Em",
  "key16": "26EvoVzrbRSBrPmj4TUu7tFMfxsDaEPfQMnQpjvNqj6jHLCjbhUJhto6cWc6yhHmLm5VXjtU7fuNFMvJPEYuxj8x",
  "key17": "4NKn7pdyyrHEC7kbCCGz9owAVBHm5DueTF6eRN2eWPmNjCaJhd7VAVJd1o9kMkaHXThNE4JNpQ2bVjrFb2aeMBPg",
  "key18": "47cVcqi45LkipnYH27Zef2QRxQ6r8f8Hfp5Tow57Umn6cXQikDZUsQiYZtB4LkbE55n888trs2AuF9seZkwzH3JH",
  "key19": "2ETo5TqxfFEPWaj5PMp1RtMTiLcD3DdydLNV91LRd7dk3KncL3oWxP12LicFQJ9AbAQBdvFhiP9jtSAqkdChhvuQ",
  "key20": "4UsKGaoQYaGzmPsWUnocAQ9FejX6sdrsNv6xrwfTja69pXTP8wPAvsFiFzez1vE9WbtBLYXbQyN5YC13G2kkXADJ",
  "key21": "35m2yaXoYzn4v9t2UjeCxYfjkk5FMpmsiyv8g3vSUAb8Zdysv6BmSYqA8h2ZqTqKJCgNGyhZrvatPGqefFeWkBvN",
  "key22": "fd6zPXTbyr8yra1chVgndwFgYQ9mA3SDdhLPDZyasebyuL9d6Uvfue2jzYSrjVVEmGL88NAeb3zDnisiZToNJFT",
  "key23": "2PyBwTyS6YWUpUzLxViqew27GLAZkmSMnDFEbhEDwBVUEVWCH92CXMuh3DccE7BZNbikMf3RTV1Wv8TURhDL1xug",
  "key24": "54k59EdHuDydkAC8RMwbRhJMjwk5mDreufdSgmaB7Vf48Y2gKsedhEpRemadLpT9U7wdchtJRVhXqDnhf5ZUGfCZ"
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
