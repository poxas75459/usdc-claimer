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
    "2s8dEHeMXtpu72mDfH4gQmmWCLdSgNQp2FTFHWW4Nqut3m5whAVWTkheFu1beCs7WPVz8jPLmCWKTdWjoLTpc8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBmdodixVXHv9k4qUbdN9N6b27WEYLQF25QkPTYNREpJV3Py1TmMkv6kB2tX9JwC9h3saYCVkKycXntC9YuKLKd",
  "key1": "3BSKQVVHnGm82vAnWrZe1kkyqxLrjLA2b4H9drq4Lyy15CZt1yMi8aBrQnz6vL88xT25K44NER9bptjtd7d4Neeb",
  "key2": "4AWg6dG3oxQrVN7f19sXJ8KGMH76EtB8QUFGiTwFD6NToycFfzDAw9WbrSNw25iCyfqyNHBpqDyrBA38HCvR3e8p",
  "key3": "2CJiWcRpD99A8mLTFm5S4UNtxv94P6eCNexXGMMDmo47WF9C338LbF9V4aPugSuhLQz1xE9DnHF67fEV6UwSmEvW",
  "key4": "5HeBujoKMBMSxzrjb6Re2Hp8oUQEhqSXdAfpf9oo3v6mH8b41GBNrFgtoeXxu1ZjrBGsr3Y9VgJntyXhzFmBt1QC",
  "key5": "34mHJ32gWJgfMdh7cR9TrcYGob24r7x3cmsqGB3NzndoP5MYpqutEiYQQqkd2FSEPJ8vLtuyeaaUUYoUPUcaxjqL",
  "key6": "SeVZBPQmneQjJpCHMB9yjbKx1GAjXG5WBA4MuqZVT5R6MvPjLj3Gejsqhy9VJdjPcWgWZXRLgM1p6PDdSE2c71T",
  "key7": "oAre2Y3WihCpmsGVXKQHKVxKMektSvgZ4nsywCQQyZtWo1MYudBRd2dK4V2kqXbcnVQ77d6D6CxTx2rhZyoqqZM",
  "key8": "2gmtPrEovxmCocMwzF6bDF5G5ALur5reQ6vwSBXyvhPBgeVnmjGBTM3pf34XMPuBRzjJ9YEZCv8udFJc1bkmGWHT",
  "key9": "3HqhiyuGAWYLoGGw8FbYvPcuBkAm2VTxTDKgBM13qqHq3exjjDRgSBtUJMn6cgBfmazn57AqqXr1jzTdNkhn62nP",
  "key10": "32tLrXxPnoK35dQR6j4vK9r9apXjW3D6H9TriaZrqvp87a9EegSNsS7wznkJc47EaaqzoSYrxjM29S5KKJVBykiY",
  "key11": "3ciAy21x815bEFVwkpw42J7UVfmzCJ62nJyru6grECr8n1ooAeqARPaLaLfAUHeYW3rdybRFq4UKkyrFRHS46QYm",
  "key12": "2mUKDbi5mxH6d8KV5rJez8BjgntbTaDVGkvTXMhReBatJVDgcZz2wjJxFv2pmVmcF6uTjiwUUfufCu9ns9QuhSo8",
  "key13": "3mW2tAXxaSvFKbKiwLcHwweASCMtwhhnZUyj7Wcakmyt2eEEuE2mtxJMzbbUK8nCXViqgYBcvamZw73C7JkzM6Ur",
  "key14": "x5TJzb1VqzF7GVN6gN73rZLxnyk5ygnkUUUWKhrUfLeDhpgSAQM3b4cgpRC6hFSMX1fKzFx37EiaPp3Px8G4UcK",
  "key15": "5inUKFczqSwrsh88ur3gtLw19waPPyYvDa5EnAAUmTk7p1ewLvbVgnTpvE4xKDoygkQ7rUSVZxm8SV5kuqYhWE1g",
  "key16": "5LNEr8eewoZzDFjafXWKAoYQaB7XCwegid8i6RtQoRukMme62s7TBZJugg7TUtVbUyq8UvC95qDoYR6txmHVQdaB",
  "key17": "3MsPcTcZ9kaMxaEJH9qjcxqLddDXkXdEiyeBy41JyFixbUfJaazUDfii9J3gbqhGo6hWK5ftomi2ZbDCDbUE1aXo",
  "key18": "45KwvqsHFvmyN9RczmVjsrjjRK9KdjMRH2aie3Vx8wMzYRThw5iLuTzsumUL5cAnfDJcfazovyAMXyMD3qGA68xn",
  "key19": "nS2SSPcQf7QSXoqu3GkCwWi3L3fg1eebDVMMivKaURfu7XjDUiuUwW6xbnHdFDig3AgUqsUibEx68D6vUuMNo4W",
  "key20": "3txgr4Mb4ABxxTv1QyHj71KR7DHQqjZTeo45AqEgJVeoocT6SF7gHD6EFy5rbiEwfTPsMk2Y6n8fbDxQd19XWCaw",
  "key21": "5cyCMMePzREYQ9esYNjHsBbTRxnoQzymbuGU3sLoexcxRy1PUyQhcbDspe8QfDR727JTJHYHPXyNUm24MERFCJUL",
  "key22": "nVgWGTJN2jedJjwU1QYAWvwM1JZvvXJB6d5Zoa8HGRTqErLsHwoa2mrGPSrfQzjnQWTvYRmJMqhbxn3sELd9jrS",
  "key23": "2QvM1yuGcXf9LEUYwoSZgXtnjEi9FgmoQqWmFkWfxFDNv4EFNdFSZTh1PV7qnrtfxYSxyhcAVd8unCAfyV5DRfNj",
  "key24": "5Ak85c3u4RCVPTYHg5edc9sZG8GEDGepYo5MvV5tB8jK2ohqryXERQbE6KxQQ2oXgCcTfA2aryRmgQcxuN9hwL9M",
  "key25": "4VdcKxBXcBsN5dL4am5yWo1SBEeV8MwiNjpdU2wXyJ3zs63MKV56rbYiV5bLcaHPa4yZNzVcUJRRTRp9VQLfZBQD",
  "key26": "4WcAGtsRUNDYasnzC6ZnsWqVGaeLTRheJKEJvswCKBXffWMLYCxPpwuzLRLGYQnaVPY9qcoA8bHwBXCVNrkaNHvs",
  "key27": "N9RnfwEMZU3VvaGE28sMbS8Jb1ywRGng8WBBjBUJXQbM9n6rxRt9s5sRN9CgaaZfEHx4UuiKqpkrbvMfKUrhPVX",
  "key28": "2bMYxxprtrgHonjwP9M6ymniCrcyUN9tUE8nLnxXDhoEaM7DLijJD9tRzyWNTSzquZeNgviqALx2TJHhe5XdaJj",
  "key29": "53Up2y4xW8tSmv7QJfaNS3Av4LweRSJTRdzGcvVpt3njdy92qoqzk79TZtjnCCGevRUU2ZZLmVEKSZd9UynSqF5f",
  "key30": "59BqhNnoV3fuuLGkoUja3tW8mPvVgDSCgAR9jK91XYT5VJRGabrXMfRydYAyxbJbQg3TQqtb6J8C6uznBcJn1ZSo",
  "key31": "2pzXmzNFXQ2EaZu4qKapUytJDET72m5ztiJoj5qkS8phwa3A3xcgemGPv4U22SfsYQqv4odkX7HUt6sobDXXSXjR",
  "key32": "31dLHsempSeMdLHSKDYepJXPTuPgVwrZz8CX7dk16onuty3kyJeAsuMCNBzQMTs1hfcFFLHdxc6SZRZRDLKSRkpD",
  "key33": "3Ax5PSam6MXoxHqp4rSvDY3Px2h5FoeidYnqLe2eVV6j633JpKJtkZjx4hDFBVoterpkixWJSM9xQ7jSPTMiPQBk",
  "key34": "w8TZt5Z8pfaBzcvQC7GUcQ4gaq9YEB6AxdGUeTG9PjwjTYqa9z2Dweo4R7SZakiPvh8ipsiz6ZFGUQcpW5gnDe2",
  "key35": "3NuVz5TCQjBYUQxHSUJUSNXus71k8nXbvjtVMvmAfAYct2jh268dPoZ5aTCNzvwvwn7QCwYj7Yoyia8gfhBXkWqx",
  "key36": "4cAww1t3SMdcN7kRpmYCy4gSeNBy8o2FHxFd1Ldx78DDEiNdvjLXcEr77S8xrSFY2FsNcuvVV1Zo6HaLWHFPtJdN",
  "key37": "2eqsXW1g1nKohp1qCjZ75Fb5e6vkeW8ioYvNeYFwWALoFruZM9gWDt9TX2XA91MYNVC8TJ6DEvhHPHBQ5gV6tCkb",
  "key38": "2r41SMRTx7d8VX5DF9JVRSaGqhEocAzL6vw7ZxbVnQseU3cYr1D69AFoUxExvAZyfCpEr3kB2ztcdZYA5edU74Dg",
  "key39": "46Ec8ajUasEyrTeG7qDaG9cvg6RNpuZqRE3Xgfif7WAnMpNeQgioQCtj4MxEahMuJtecFPJsf4yZnoYdYQnjcJJZ",
  "key40": "5xHJCKnLHmUDtbi5osLsgTC9DgjuzA2LWrnPkBeVK61LNBdv1KxXVwg3fJibH85TGtYcAheyDkW83VCTUb4PekAR"
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
