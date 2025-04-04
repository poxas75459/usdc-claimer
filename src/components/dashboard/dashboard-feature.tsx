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
    "4E7WxLtU43QFm5qwN1YTGEbtGWHjCbP19nhSESCoVwhovT6YmqysjzPp8JgRoRfFKhnXUXbbARFmTbNHPsd1gxhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2z9EnL6RFYrJ1u5kZ1MsdYgQSPibsRJdJtNnHbkDVy235KZaSm9VgByzJQTd5VyQuUfS5sHqUXrkw3paxEzJhf",
  "key1": "29qc9jksPBde2TivuKTcb4b4duQuPQ7z5XJqrgwa1ZXQUU2MrPy5mvUFgfNF6Jqpa75fkA4fnqbZRabeeiTraJpm",
  "key2": "3fDwDYPUTtsxhYPgCqPEWSoA3So7aQ3rfhN8xpaJ569uCD6t2spEpF7PYoCWuTPcFGCVpj7CXMzSe5GkPa6t18cn",
  "key3": "AbYvRv6Lygvx6rD7Hjf8YkBqhaQcHihTBsyovnMJmVRbKUDKZrmd7VC1ziauRb7m8Aor1QYLUd73aBJ1ZNZVFEF",
  "key4": "3BaYX7N73h4rgB6euXfbCvbGFGkgCw94DuxJp7u9y6mBhpBkE8HkMK4Kwd4iHiTDEaqBEFXcKszYTEynC2YV66ft",
  "key5": "2ba3Wj8EVVaeRXLSHG6pYXkJVF4KwfWRm2Kc2fYUQryTHG4ZaiTWCC497xFGNmFV5gTLHwGJGB3iSsVH32H8diw",
  "key6": "5DVb4z5wSoPd4HqC5DaM9ugxwxyuXtF1CzdRE77nD9ykBxuPjucunrQJ8pL6pWCs2asWw19aDx6h5FFFy4tBAaxd",
  "key7": "3Eb63Dj7mEd8kG6SUe1M9QnvvsPUpHgLCfEcgDsivgevvaYHLL766erXANAU4a7v8g23oVywf6LFn3F2KQPdoRin",
  "key8": "7udwYG5zmekLS4thxsRkByek3VuBkjUDAaY847LmkUa2piu2C6JuHgKARbs7LUg3BXLwsXxE5DKVPaQFpmebDwA",
  "key9": "4ysesH98YFvqP8MxWmRuKePsCu7cgW2sTDuVoc9FYevYEPR72S2ky6ZT2dkA3RMZojJe9qEnfThqJqdAPCSxeRyc",
  "key10": "2CpomYmhqMc3s7Ed73F4SrA3hDTtKtbZ1cPYW726Vmn8SKvfopBwh14pbXv1gq4VddfPXDYdeU2281m1cV9PbBEH",
  "key11": "2ANrUszxHgMxpAcNyJF6g3v1XX37YFwRoedJqr6ByDAzrDhLNc2Chck2KZ9bfhH6nQo9hma7YLMSzhepjhFaAjtW",
  "key12": "4tep6frCMCfjVWuwrPYBLZm1Ei7CFjRadMuk3KUb47sC6a7RPo8NornU7btA9C9dfsgfG8KVaGEorhs8yTwaiSRm",
  "key13": "21LvD8Zs6HBBDMA7mecB8mcC1KASKCLA5HBsGB346bbKAiDCEDaVG91AiPrdLQrddaSjaKPT87GZP2X9SppoJtk7",
  "key14": "5MANRJri8ieAsicTz7KBLXjVXPRHKNfQAS8get2vNyuvguWgJ7giRUN5rtGghwztdqkuiSnC6Yt2d8BaXjuFXyjS",
  "key15": "pqbYuh9ekr139M6tC7zqiDKvy3zNpDNYbonQzcdkQeRQtGc7jDrJJ2hSKjP6bXK5va2vk5eSvd4xaojcjcMevrM",
  "key16": "3vAdtLLFAem4NfULZ1xLpYAt4NXvfYdjK2TGKWgoz4RJk9BwGQCXE9UrZP3vMoz4doUzszS2aXzhCjd7bwwXehQw",
  "key17": "4ZWqTgECmbE12s7to1n5eLDs3kZWxFMf4yEGfotwNMnvNhiXnJazPsHhJxgjvRMUigyJEFmCkAqmuqsrkx7KuAXU",
  "key18": "4BvAp1YYmCpYQSPfE91mUG5MGbJXHXQAbYKuGXSk1vj4DNumFUAoS3Z3sxm9Ri5V8ZLHhe1JVakHHtAH8fJLKuCQ",
  "key19": "3JFjpYJX645sKACdBXYJGdzqWLwVCShihBBTex7gYfLCfe9YYmvqAbSFEgRTHJs8rZKSdNarUnCe8sPx5hLQVzKx",
  "key20": "3K8qGik6CamDTqwSZT5vmiPjNzcmAitGLVdwA3oC9uqEJqoCpqUztQsjy4wEkCjcaHvFqXpWbg3FhiB7ESKzfTS3",
  "key21": "33Eo8TonfRcaAXygZh2mAi2prbSh6crEAgbKDf8zMjhKjkcoMsq3BWWjtwXdDnFpprnntkTjW9rDrU4wykRqm7JG",
  "key22": "4WQA3m9NGcU73BxYmnzHMS8epXaTfWkX48Z7k3zvxEQGR3T6BKL7zQMnMhJLok46hJHnsE2VMBQj7uSkmj1PFSUn",
  "key23": "2ZX7EVWzbPQZ6f3CDeWD6EreYkdhvXyP4eCzC5s6vTZy31sKnTL1fKMxGN5GN121rqpZUABttn6WBCNYZmwF5DQo",
  "key24": "YecbRRqeY7LQ3PpEREfMqLPFShWravPLrtmge3FuLoXWQX5zaAGtTEnpptBL5HrgznZgFWmkoMyZV8wKRM5UhxY",
  "key25": "3MTk6dJwrh794zu6eTg7ZKh3SFai7JzUtyDbEMZ44NJqsxatJ45hEqE3cJvmJ5iEaVfD6WeD1q1CQeyHBsLhJ4Fp",
  "key26": "537zC8CwKNfFbkuZddmvXd2Pq41vu3bnVuo5tNGED7pQeAiHw3pia7QHBsMuL79uKrMmCrdL5dnsarmAwjaS9Sx3",
  "key27": "23qyhG1njkJBdLymqW8b32KC2QfTpdYBzD3bG6R9fx9T1Ux22qma8uHZCMaGHfUW9xrvfNchVYXbQyQjG8742AGo",
  "key28": "5VecGb5f21DEA2T3VmMVnuSSVyHYB8ug1iaYf37CUmeo4D7T8nLAoEZ1gquXkdBqrYiKWunUNu7whNk7nEAWdLej",
  "key29": "zK797XjouqU7Fvoi4XKBwk4Dw6RKRiC51PDwEY4wUxUf1aNuinFXGc249jhnbDfDqxsmS9DRJ5uMTNhscHN1HVx",
  "key30": "2RWLXPhRBbU1iTTEPHhknkC88SbSYh2N1rqvLVpVKdqGJAB84d3yrRy1z8XyyphNcyHZXp19vSuumnJUBBNXCJcK",
  "key31": "f3xHUqZNgwxEVBeEJvc65qSiCHZ976Ycf7zEtRSvTBZN4uko9Bd391z7Fc1GE7yiEx37WqwRxRLHWDSsz6t9kXa",
  "key32": "4v3fCH5htAvBLbyXAJMrC2YCoMm7zNmTgjnj4eQLiMh62X1umRtKHc8JwnDhvSW6CAtxWR1ys9Rb7NJvN4XNpAoA",
  "key33": "3oXW2mumdjrh2QN3TcxxgLUJgT5Zd7YMkJN9wu7hohPigM4dW2AS3WDB3wD8P267oSB6sWTLXhaMkNxHAbRn8JpV",
  "key34": "3u5F1xjfL1U8Xjs94BZLwvgBXHirK2uEv3r4BgaRQxGHcpbqXufgk6rZCNqAPWjqjqfQmKgvAHygv7xHRqMjgp1F",
  "key35": "4FjtXviaL7FFtBDbbSfCA6tJSzAk9gVJWsnL1t4ACinjXjG9SZd7NmMFLBnkQD9B1VRG2KvyZhb1eWLPyXwziN6f",
  "key36": "AxAfCLMWH5MxcZgnnvLnNBDb93eoVA34SLjv337DPYemjmCjPyJZAtcqGvo8EYF5TeUUM61BR31piwMv5Hvr2AB",
  "key37": "26Vv7vuaAynrWrdGCKGzAf1rCxvcGSZwKraCt8tyZdimdMcUuTFtQfe7V9yXmWs3mMAvMmzBWBxKcFhjU3xsfY66",
  "key38": "3ZGWGhpSVBNSyFruTSeY7KPvZnsPQVVm2dVdCcryxyA8EG7wRYwQ5vrXkBUu2bt5x7UbSpw58T17i2Wgrcb79wRt",
  "key39": "4wn6Ad6bBbqpbZJLDoN3gy1b1mRKw8cBfSmL2ffDEe49SxnfnKzp2mTR5CrSw1VtrRi4FmGowZzfDZjKEzVg6Ug6",
  "key40": "HEB2ea3DVFmMis5ywJuTN4A29BRbV48MRRbFikBdJj9jgvzT8Z9pz924r5Rz7bmc7mmjnnkCyowrpuueVuixK7t",
  "key41": "uSJojPgvCurxX5mT5ZDuVuxmx94ozTrMQvtaEut78pRWaKxGVMxcxgv7TdQnERE3h3P2YrMSTzYz4vwTJ8GDbDx",
  "key42": "5qhCrxy61oKQdEwLJxQ1K1nYg4NfNdEt5wzYKFdxpCkANFL7CQukctjvrcxxtiPncotsszAJ75Fy1FS7F9TLtMir",
  "key43": "349yN6cJGS7Vj8h597mbsiWytmdsTDYEZn1B5YTfWXkEfKbC3J13gmJKcq2ccfCt5FhybSCVVmcBJzqrbxNog2VJ"
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
