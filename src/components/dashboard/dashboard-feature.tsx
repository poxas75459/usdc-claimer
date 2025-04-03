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
    "4acbqQfK1L8yxAkbKPwu9JtJkgGF9WRQmqSNMNowSBjFCyhs1XVbLjtjyzsZD6uKqxK6QZRpRiGLxLHJNCXdfEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gAu367hC8ArppQN98kbsZchiUS5SthUhfZmfYFjchBuFaNhMBG4N9zK322yaLxaFotBGtZQzXgx9n1XKAiZ2Zg4",
  "key1": "59Vzkn6Ftjp5gKayGiKfZ2e9ZKncFeKqZwiAuyR4iM4vRaZJvWt5mhc18xwXjFQDFQJ5BaSLNCLisAF8fcpvkDJz",
  "key2": "2sLDLHAT3wbhpStFygnd8ui8akhi6EPBqTiNJ2zW2Keu43cHsYJAyt41Rz1h4R3b8UWJBPJMSBG2yRwBdpKnTnvf",
  "key3": "sNZ9dt6eUQ615CxisrUU4bG5qFi2Jz9yRW9nRZsa8x195jD4ZG6YomGgAvmDthuZGeVXCd7kDdMfFwMNuy7cH2t",
  "key4": "2hBAQRTYrD4eDFVRujLh3L7xcLCCZviQHi7vWT3V2uYcuuMqi2ZrY55BTLSXfsAKbrrZWZ5EqAbuShfWoE5Frh9j",
  "key5": "4XMVNWs2kQSvyQNkg3R3LFaWrCFsvWtBZEG7sLKZuUdKi5HzKQWCztvEKobxDxmL6oQd4wdyKc9rhDQP1Kc7hXH2",
  "key6": "4cyhWsR9c3qL9XyG9RrHYx4qig1XRAiV5UxS53xfzmoY1imw6RtQ8LMYkuSueUvTvdJAovKgNXys7Jq8itvQki7E",
  "key7": "5DgyHq7cmNrMMwmkD23k559t7oSQHLJupSHneXBetieRU6NAWwZKoGRoCav4PpU2zZsM69XqJG7wBhxWH5yoSR7X",
  "key8": "4o7Bd5b4aBBLnbLQtvp8uBSks6JmHYAPLf3bwArKDMFaVK42XUHqYZGvjWiZj2BSdjihyDcu4TMWSrobsVWoDQxv",
  "key9": "4gpeSmmAink1MWWfaBT22FtWdxSNSDajTj5g9fcEov2vYmdLuUWL6cfGdmmjVvVe6UAxjEs8hVx8vpb5ZyBm3BZc",
  "key10": "5QCi7gErzqBk131hkVCsUpPXPinMb2z6gEWaBdaZE9zD7jaJ1FAuCQKDiGTee3MUK9AUBsQwbxhFNZziMM5WL4Bt",
  "key11": "3aRBz8p8dG63uAHNm7Pqc2hgPVJ5yswryJ7KpBETnNtVm1TiLQWG2ujU3uofaXT7NVGjuRd1fkCw2VaS6MUMCrRn",
  "key12": "62WhBemj8JEmmU4zV6NWrivK42Uf5agUCfaGUBdMVmgDvqJwpBTry2tb56715fKWL3uSg24baxP6H7w4wNiwjA8W",
  "key13": "21tXaF5Ajav1UXradi7YphzxGri6U3jSNUi4tsms9BuYcNrfVCz6J1CBVsAiCA8atsyZvPxmUhmd4YhXUSMJAeaK",
  "key14": "42BFcARUK1jcgjiXLZinbPzX8qBrkjgeLANwDqsh4MVQpxfSW84DhtZt4bVbkHYDtqwVvZQBoa4vZ3DFm6A39YV1",
  "key15": "23J3YLRf1d9Z4PQ58eGcLvHjFkNCMDGdNuDLTQhLLGutX8ShZehYz6KwW4r8x1A4TSnYRh6hDKEL5Cs3q57hFDMU",
  "key16": "38SSzbB3DFa584xvZSePyLLaNk779j41E9KaVvxiJJQkhFVEANZ2rZuem5kvpCmQwbuWwQt2ppkviPRdURURPfc4",
  "key17": "2yWVYS69rvyJLKoFmsX71rgN99A69hudkySaUvq5oRq56QKRriSwiRwUc5zfZzit58VWyBwNMyzH4j2htEYA2fUC",
  "key18": "Am4DKqDskR1XqZmrixDubdZQaZ1VB64TgfTU9B6dwqn1Y4XR9md6aq68i6YEMRPhoCq7SD763ThGyTEBdanQpx7",
  "key19": "5K3VxoHntzHVpuj48tWsxACQ2KhrwgB1Yp5MmPQZG2tEzinyCpvbpVXMku4jQSYxQYPJUEk7hA42WNiF6WiioGtY",
  "key20": "2NmNQMjDmzWH9c7YbMozuYBVqa7j4p5tT4mdJNYFnppECFHks6hPCC9dE2Ax5YFfgMoBiVnyHEVS5FJiVCPujeHk",
  "key21": "57XZZzehc8k3NovfjZwffDPhd1kB3bLNrpy3Q4ASYmxMT8SA7kokeopBjHJujkJjdnAfaKb3BSCJYzgpEq9MEzYM",
  "key22": "iDyxzjVM9Yba45BD376aMfxyaioPsDNGDZukFbD3WENihqMdzPibEsgVG62RLXWw27Vo7wRty2ogSYxkXB4kUwr",
  "key23": "5erFiUjhZnVS5t5XYUCT1G5hKKw2DW4qtC24xQvVtqruJB2tdgKnQ38NSwfYt29nUjrWzo2fB7aZWPC8Zn3MDn9q",
  "key24": "SnUorHSbujhfz7R8Rtpjf7jTugDkQqR1stSsnndyJmprSK37PXKBw6YDVv84BCFw81vNgLVjr4HwL6gZWdBb6un",
  "key25": "2fDsuvJu7YNSuXnEg8d5PBXbmDGNubgDVtVgrgrvMeMhVzjvqCyXnrj2Fj5gQh4dn4wPYSdNxBg4YnwJgvSSnP5h",
  "key26": "41wAyjQhVtjTZavHY6EtBCZRDDGDLeikZs1zeykDWMWM1t3BkzqY1McNpJuao1JAYvqHgzHkLeKcKvEUPvY6JoeP",
  "key27": "4UDzNHtUeiFotWeC7rLWnpBvu1ccDDLqFNCCLkZRLV2BAqpRjGT5QkQvGmp6PMAEbyypqf8yN1NfLDmfEhXxYfKc",
  "key28": "AgM4q7JicV3VF3whYsQ4mpmPE7zy6NRAnSTiu5Fw2M8ZbFEXQr8efLPoSKYw6yYdq2xcYFum96GNbm9xLFNP3SW",
  "key29": "5XXg2Db7PRgM3ffsSQdshqNDSoQW4LHsx38M2vJxZwgggn9UaYKy2deXPFgqFsKJNh8RX18aHsZS7w8gRqkV36si",
  "key30": "2dXyhA1SpTdZ1FQZDvyikEvU7DgbBdeE8miq8sjF1sN11wyXYUx5mGtJuAQobVaYeDkMy2uTGyHjSx9w19SzZ1VD",
  "key31": "5mqgpQqZyicwHKj8KxR4gDEBRf2QcW7K4kfVmL2N8U7rPaT6bVEhRCgn1rJFxoLxxxgR8Eh9TUEBmzh9rRuzKqLx",
  "key32": "2TXgXjsYzFQDDDQs6skdXfjp9Z6BhmEV5UF7jyfD1DNCaWSuNQQ7m6KsoSpSn97rTQHF6wAD5WSoCyg3YTKfzcLw",
  "key33": "55CrCKvWXRHemBP6rdSrjAJYGv3xjXcBw8PxMwyd3z9ttXv76daHvd9EJuQUfNztWGUS173getTCXeAsiMpZzkSL",
  "key34": "KUUP8RsJXCPAZa4Th4TPnEJmX7ogCZS4QTBFmhb7B4Sy38aZsBu8akxVhN8zziFAGLTF3qEGsFsdUVWDKFNLHgF",
  "key35": "2WJPm9rEUBJBoEscU2ZK8Tw6v3XdVCHT4TyfPeo6gifjJj7W2NNZnAG6HqLomgukSGS97kFf6B3kkxys4JJP8PYo",
  "key36": "4HMPZiT3XnSfkP9PkmWXey3RvUJjWZEv6PMWVJJ1sFf36EucyZLajxC61GxtF4BvBWyJWPXC4CwaDjKUrsBECdJh",
  "key37": "3eKsimzKrFZtPXhHUbh7UkjbzhiYPe2Jb3rzKAanczw9LWdmq6c6uGCxMHjASX7GHj12KHSfWioKUzYDNHaCc6eZ",
  "key38": "56wKKykp4PQ9rpE4siR1ePeAk3f2oJmQfmnWsij47eWbtvdm583HB3Ns99H57mxre9aesTxUh9GUiL6c2zf8tZZh",
  "key39": "2qxd86gjmE74NEp7zqRw57gavVzEt7oPxbrpMQ7vdJrAtV2LhrrqNyGba2iXWbQhFLSQemX2QsDj3411bAvjSQpK",
  "key40": "b6joU1TaVRahPZua7v1ReMXfg1vxqzBSCrMa52NJMwuAWxVHxvKn6DAmtCf8SRu8arTrEECxKwGvR99Tpd91Qh9",
  "key41": "3Gm1dXvWqxvMHN5i3Eqvf97v1rq14SKMQj6VrXbkvUFS3eZpp68eE8AWGYuyvcSLBcV226LqzC5K3poshSoPqavT",
  "key42": "5jFEMmEc22wckJ4AATV6LRK9L5whDCxJP3VU3QFz1g9sRpEgyfqKKNe2vyhtfHGBNuRXJdCh42cc2P3KkGRDmTuq",
  "key43": "2g69kBfr89UatmvegpdoCxYKjfH5aBWvuCCryN5wnKnxukGRto9eGdgbGSBCSCGfzpoDtZ19XaXhPGgGunmhLCVN",
  "key44": "RRYssmPjSY96hMHaKBnigoTFKcfuwyJS8Gd455H2QkGVosebwtVvCRb55geZDFJ4DgztL1M4YPSXVsWpb5cFv7d"
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
