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
    "66gHghPAaXa4Q8uMUDawLuU6Px16cX2VqnLu2vBfHXqzFfwUta7cxct83ze94vwQi9wVwo1fduPAPPj3HrJEMQAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8zQMbPCGXA4PtJT7CUynsLYf5K77JFVK8YVFSLZYXVkXHcb2L9YKP6C5Yw5fTGdh7KewzJ1ETfCWNZMKg1emKW",
  "key1": "4GaAwAyowj4dExcWKsr6oTYmCAo5msAfssJjCnhygJwXMNasZNA61vrYq8tTu741hRgidWP1o1b1KsM8J38MChvu",
  "key2": "KcfQWGuGS6KFPwhWCs5PkK74B7KJmcr7GMnLYJpNBFRi4WXDhcUWPtaUaPFywFZ4mko38QnP9ntfBbtrq5TK5RJ",
  "key3": "2ocT3VbzSoDXytxV53Fo26tbQNygtL9mPBmBXK7PUUmGaajVEKbi3nNEm4LPY8kLASg7PhRk6MpDzQr2SVuVDxm",
  "key4": "64V3xdsbpJLAXcKYqHV7pwKnW8BTuJybfR3t6avu39XxYwQPiyzDqqF43EeZ18zc42QGo4oWk5813G2VxrVV52LB",
  "key5": "3Mucbc8Doa81WRKXxEGQZYraC3yS2s4gjzRKqCPy6j3dmveYHwatUPLWBvFtEYwuRLzuFTbHi5sZaXsz4tZt1ykb",
  "key6": "3xSNgdfq4iFMFa49xX6JEDvbjLN5vtomFhhidmQybPZsb8racGsAQX6x33ztzRMqGiakAYn8sQqm2p87BQvV7k6Z",
  "key7": "5j317NLs1smEAfuy3crjk54mj5VVcrtFH9d5YZz3yTmwGdq9qG9VTRdBmjG5yQhDVJAnghpL9Wo1whnBtBF15V9a",
  "key8": "4x6bE3a65PYZiupVXDFUQ5BKY9peDyYjtL2fVSd3mVbGfA3o5JnXrALKPWhct13V1MNaSH9YLsUVXN7THJ5EeuLt",
  "key9": "hf5Kom16CBkodV6mKYD4CBLEACibxSENqTGGt2sujj43t9iGg5UjezS1rxuedm21NHtUMDMq35ARiEdjHK3QN2r",
  "key10": "2dinMd9ZnkWNkHhudzsEXeNHyMrVVjdwaoAUAu1zock4nyjMAg84DKSzodu7GhL8Ke5efB85s3M6PWuQYjuzx4Z9",
  "key11": "S55zHbBtTvaJ8Y9NNZQyKs8tBEFyNrADPJRBCEaxbd1NEbjqZDgCwfaizk1nfmEzVmwo4j4SCvCzRUfrFQCXFZM",
  "key12": "2DhtSSLG6BsYRgLymTzhgnF1bANAnuS2wt6pQBgtNpZDMABmNEGkXtGtihNeTx1RGoPJLpzbYUg3WgiFFF1Ff5cv",
  "key13": "33btNFZFdZHfKm8bfpqumG7WXwF2j5hRzMKNrEHKBraYjc4AM8NRkr9RPwaSMKuZdeyio1Yk2rn8qDCPVCPnxXFT",
  "key14": "4ET2SaGM1wpfwpGB5gskqwjuvsdZ9q5wk7ppUDGVRpzBk4yy7aXLXASZrcWEvQ1NPpqPT6fq1jsn7TfEjkgyWLii",
  "key15": "nCuEKqbfWDCRdgbkMVpTU5VEeDuU3JVWcxEZgr4BhC4TZ4Qv6dJGJLGZotkTbz7GFkmTrXZMFBi62t2zYifhfV2",
  "key16": "4mz4WEEszyGwhEfP3nyN4fiskr2hG385atmsRff2tRY3uub4R5cVogkK3NKCo4JVNxAgcmE52WqKzsoBRCekyUdE",
  "key17": "5WUcYhriFBv6rMXZn7UCwL1rK2Qp9rihTzfBTv9ByaG6SKpQwF2AtpKrfmkMqKgz2Ywcjary2yRMUv1pbGxdgPcJ",
  "key18": "VkGPvABLvnbcQZpL7jbXWw9TVVygxAt5cMAZVXWbLfmtNFgkNpN8u1fsYyXrK3nT1YsYvCjeKP2csiYGs9g6jb2",
  "key19": "5JSR7wTZexUK5ZAy5Z6cEeKR96gchPfvp4u8fbB9rooGJSyA6zak2zCCEYrXrH8UxSG4CB6a3LbshXQiTALBsQSn",
  "key20": "3Y1a5sUr4VKZSTCDmS8dF52eNoaoWvbfVj7ebieda3XNwF1uGPyxmeMu3XaATaRG7uPMQ7qd5Kpm2WPnPpUdFmnD",
  "key21": "52kqojN3N1gZHxom1XmzissAAv3DPRNxZwJjiEuonrpsmaYMCcnDgoFT5NWaQWkSsyB9HKLwjwEsNVTQQGzXomtv",
  "key22": "DwqgJehB4UY4dec1CacAuc5Y331TSw8DUztemQ9es9odvBSoRYtuZi6sS1hF24sdytwrrhp12HVgWXTewHG91HC",
  "key23": "5a4ioqnahyoqrYyvxyjM2nYk5rEavzSXvChYN16aSZfAvw1R1RxgSeKLVTvWFrU7mTCL1BD32Q7TPyPbvYNm3Z6L",
  "key24": "7NsFTjJF6o2S7z2R9ApKt8tx1ontyUmkkN19TGCm6KpXUA5JYFz8SKCQWDbWS8HRooLfngDp4vYL4JWTXQALAw3",
  "key25": "LTPD5ZBekbmUXbBLWdRGtfieiF5aekPQZQtW1XAErw6J7Ru2e3syqEpRy9i5GKeks9RdU8UhLDYkKNb7f2A7Dy4",
  "key26": "4trLceNaTFqf2hw2kksr1Gj6e9FaXPA8Ca2cdFjU2SpJay3DgZhqrkHaKUHUS9GGLSxfp3roLQuktK34ttjj75Q1",
  "key27": "FEXEJhy39YpUEgA8bZGPb9y88tAxPGdpGAhf3CDtb1wAzD26rj4Ns8adzCvd8azaFNvrjLe896vzh91VgwGn8Pn",
  "key28": "3xJLKtE1ZuQUQaNY63NFsNLNm2uwEHrut93KGH2f4NpZje9n9TTgGUHk1XDLjDuJTQ7TXj1coqS6hKZixHUp9uW8",
  "key29": "553U88oLXco86WfQ3MAxeSAE3BhWyaKPtPxmZc5YxhTRoQyDUkmmA9xBFYzxgRMSBsto9eLbkuDNzhTRKbFnC3CN",
  "key30": "2Q9hNtLKSxYYw58ek2JPUA57PLmEhF3KmDX1jAq11x2EardfYBFi1NTpeR5Z8HDmPbDzLBd6LXmz7gHmjLbea1cu",
  "key31": "yjn1YfSc9qJMaJWcSUCjHvtVU1gz5KFHo4rc5AsvVD6KR2n5VjkyfC1c8KDqcBE3X6BDAZ86F3i2U2zHTWUYrh6",
  "key32": "4hSqWCHnWD3vxpAXZgydtreECFv6EDV4hAGC7bGHNGdXbhYKzDAPuP6i6fxjGAwNSGy8UvAqWGgmRjMW26GeDZkD",
  "key33": "wLmD2KLHLeRutqdrbAkNFfa5xCY4aYuJttyWaKDWGtAT7VWDtLZ3ouM1xC6JWYrGde5EDZpdo6pkNUT4SqgRCjQ",
  "key34": "3ZfmhKYz8MNabyKMb9oERaR2aCMxM4o78WpF9VC5u6v9n6dnfM6Fa5EHJS9RhDnVJE48pLLGQLn9PwD3MVBH2fbF",
  "key35": "9LWT8uPNzE5kg3MWpgiYiouy1vE5PiFJxSNxMUR8z3sVkTLvwdPNKjV9zDiCLqfA1bo9XWssgY29zoahaKv2AUq",
  "key36": "2YJzgrrupfyi4CwVJjeLKqUeUgq6uY9es82Nba8uoN8o5bDoKeiNTPiPWRUCj2T9zRp4YbBW3yU4jDK2nWoezwrv",
  "key37": "oCPnzQvSX57AiRBVv8U1oy9cw5M31UVjzYFweznMhQv2SQbDbj5C6ZiRzRzucNYicCVmZPWFTdx9RpEB4UvNyPD"
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
