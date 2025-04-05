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
    "3bW5gxcB7JKKH1pPr8LpCDHwYLjnjbx374RTLctDQWrLBTqrWx72aXzNU7NbZfmKWzocw7VeVHMrpiknh5mj74Ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GNTLt6Jm3Pn5AMmxV18hrvbU2CrNrPt5LPjNEB7RdzJsfs1aiKRLzk9TKyFXsVyD4CnZrq43tsms86XUcis3KV",
  "key1": "56zJrgPhMa5Mw2hELCsAxB3xsW66ZcK1aDASYMAQGY18sFD7vb2Ya6vkykGuL6h9FUiPzxBTTySMn2JKDfJM73Uz",
  "key2": "1tba9tUVYNTKJ3hD4HXkjfDADVRWj2uU4RrjU4XGkyytxHUjQYYwqWuUDNuwbSMdTCN6c3RWyPNyMPAfQu5L6TG",
  "key3": "2C25SziJDjM1c6Q8yPNPtz2CSH5M8hNqg6ibMiYehsxok8BHeappyvfoUW7iRtKvQvh45LNQHxJr5z61KzbV6fZe",
  "key4": "2TnsYr2m8GMGb7sFUUN2dVbpG3tNL8rHJBERtdGeVC4ia6jVWsPVjJLT3Tzxow2APZD8GrpTjZvCXRsWG2ExXAub",
  "key5": "4PQ64y8fLFTQ6kL9GDJZPUjBWSn58NzWtebuEATBqrbHVNDySQHsKcVWB4m7wkCjonXTvmdTekFiWbLbJp66fFpt",
  "key6": "39FquDJXgZinRvy3YqjYcNP73qmnvLBy3LdGaxg3fXU58J6REKP7FqsS3rYp5jHtYpcFuN5ZirbtJUWz9uW5TEDW",
  "key7": "4RtgaycVfERb2HVLfHHUL1D3YcyCPS7GW7M2jTdotRo8J78B6W4fKjkEJuXxjgsk752nesLzHWUmWkxoStgbTGdg",
  "key8": "4Yi4enFxXmCwrBxhdiKv5SU5HVP4f2GQAzNVjdgc6TwXXRakeRYxdGw5SWDnBXGkEzVTtaK7xotoSLCqGAcgDPnK",
  "key9": "5TjcAhnuvgjXKCHRGqKszcq8M2Ztequut869EGsibRQywYK9UVR2Bb2frcFrFEyBhpuNYZweKB9zrXtt94dCCMcz",
  "key10": "2eVVoLEWZrbXurL6eFUJwC1bhjcTvL4StiCJjwhH8RDVmLAT4WYiQYJFKJTqLHiSCyJxoNH47AN3CRjUsKiXGK67",
  "key11": "3RG6xr923pdZJ3YbvyfePBbaDG2jCZUG2A6dkXpbtQ6n17f9Jri1ZTUwPTEaSizLuLRaqjakQbP4GfvphgCV5Yct",
  "key12": "2C5StFvf6kHbAVRyXEEZDjiz9RU8fSBWXsw2MHZ11L34U8ozLpXnAGCRi53SFUeBZKTfWTv6V8Fj1xbsNSPSbTGp",
  "key13": "6gMr9aEv13xuGGMUCv15UsmvSJWAYUXYpaohYGkNrLBMxipWpWjZHGt3uT9fhwGdHV62BPUUmgfL3zauCSyJBo9",
  "key14": "2NAJDYRiN5ZjoJ5YCqKuzUg29dNnM1fYUetDsN5us8c138da9M31AkWMuvtEx8xQmVZzjbcAFsLDJ4Th8xAzThvF",
  "key15": "48dusfDsLTM13cUGvr2jsb9wM4qmKTCwQNeWycHJGxCSmjkD7AKswxdurHdz2jFdhyhR7wiCR2C8BeiMLtp2bzYw",
  "key16": "2a3H7b5VL8iTZRRwjDtsreqFQWXqcyKL6B6bYENoSiZFPzGqbNdqtaThfja2Xm34RdN4izMcekvjNFSsywXbsdVh",
  "key17": "65u17ZJqK4xcTAw8PVdHa7JqAq2SUZ7qEAF4bMqWmXVHt8vXj9QopYCBQv8A2mHYhCo7bPtiq1q6yCZFoA17BXQ2",
  "key18": "3rFLreJ2wxHdkrNehfkst1pNqva3txLWzYQoPikCorEdnzoqvWGRi1Xvn1kiaPUth3q5xzsF9sikWU9Z2Zj4ub3J",
  "key19": "2CUwimycUu9qsaNYWPgfDRj8hJ2if1WkoBiFMqCVFDNt9r2igNx4g4cWg4UMchM4NdD6RD8EFJCtiZnnG7nygyL7",
  "key20": "2Aask1nDZkgpafr8ueQUgtw5mMGwqVJiZnrPF56PZAuU4B1yx3JDojXYwTmme4Cw9HApRRAzPeGh64Uag2Diwpap",
  "key21": "33UK3PRBoyrex2E16LLiv8U65tgQD35Jcz3CXUg6enqtJRZJU35wxWcoiAnuFSdF8zyQsfC9F3WvKZw8t2RLshRg",
  "key22": "b8o4M753ZN7dBQxP8zL9yQ8jf9iRJjk6B33DFsuxVwxfNKcpR8VorLFquYR5vnEjnmTKEmTkvCzhJYr2uh9TPrW",
  "key23": "2JMJwUdnBKCEDd8pvAJ7u4vmpo56aZbCg2k9fTobL5sZmZwiCyr4BosUfM52mvEWJHtYNfevtfD1CqBTf2UcWBBV",
  "key24": "4KvXNuKtuWqPNV62Tj1gikn5RLgZykj7SALjM6RyRoXXHtErGojSTqbDH9tYLrHE5XgsaXno1x4mySHbWpcbZMf",
  "key25": "3sMFPkNjgYmiP7ZzhVSkh6TfQN1KAPkjtf8VcMjXDmSPmWnje1zzwCnK9Ud7XfpEXqwymzNnXNYi6Vv99ATPbEac",
  "key26": "24hC9M8EzTG3QjgfJEzifL4HavknC3df72WrWvNXEL36Vyr9ePQAn2Wof5b8bTrYKAbLUv5zbLxhy43vuTg42gLU",
  "key27": "4wZSLunQWugQcrrBFDRVMWbFJoSUTfMcZiKAwFUx4cBgiQEXptxtCEMACBBp1r2YiDNpZzrA5FYuDgXNAiiCQtw1",
  "key28": "3QNJb89TGYLBN8eF8bh5eeVEJiG2dhhe7GK8p14NQ61tFP5TKmnM2kKN5cE57LUA7UnVARCXkowxaqjHHo6qtYA",
  "key29": "32yzmj8XFekSf4Dffk6mX1EnGUjP7hdMFXjRVpVPg9Sdgn7EmC7G1Bja3wxnbmPF3sBHjEn8W8r8J5DxTjJaFgXb",
  "key30": "3TkYdgFJTb72tjMiWosVogY53gaqTqzWRh7iPevPe1gf2ZoHXNbATHCYJpzyp2SpE2nCuXfHfmkrvL9U9FF4RXAT",
  "key31": "25mi3xKAKs1VwqPpieb4udNqRkx4dDLXbarEo38wpW288AWqK4qrXHhKskP7i3XvKrZWG4CTZPSd3MAf2kmQiD8M",
  "key32": "3YpXNfhxPFcBFaVj34W8f37qYakBtwhKGTL8Wt7HTnjDhByg7KpvXusrJsfyDw6sUvCAF5FvFNWMy9QZF7MvWexf",
  "key33": "4zYAVx9jjeUzuWQgSxfmsN6BkHhhFrwadxk8kdNboAAzXvQV61QeZ9wnVT1jL8HoPUYipypMdZzsfWUVJmtVUSoW",
  "key34": "4JWzhN7jJPw4WTWwDsmQCNwV412166H2V8gVxtEbHqSUH8v68U6PUSWhdGjD1u3Hsp8sa8ArLngv2Q5rC3PrVWRJ",
  "key35": "4WGGn2WM9Js1FkozEzY6vbozLwqTep96LuruCBQYS74FWZCskDvK8JJmZL3pnYNKxZtrFYsAhRB9DMPRxD7FFqWv",
  "key36": "34KD7kM2oEhM5Fq3RkDGkBQUhJqDDrfL46HQ1QMMDEZ9EcaZq1kxoxvYifhfB1vUwgj2MTvo9bqTFNJijea4C7JB",
  "key37": "2VarUw5dVH1Se2Z5eAayUzVVob59jG5eVa29rfZuvqR7auYG16QjWkS5LcdmygzBzGjhvtFNp6a7Kv76W6cbjLSb",
  "key38": "4qniv7cvFfqNNPC68n4vzQ9645hfQpRVhTmbkEwxDbkQ91P3NuFJCeKX9w63fvfTreEQBVSPxhDLBigCqCUzhXsL",
  "key39": "32V7bLknUxQXmfSGyiCdhBvt86C1QGcPoy9HmGVXcXvuzrHFE373d6Ksdyd1C4uRTYPbtq9XGSGTFwBqVmKK7KGp",
  "key40": "3QoXRE2FjeGgKw3epgoidQrNCs1MegSMLw9xEtCCLnhnLgHFqcoVK15iG1SirZvhCgGCAMsKQS4daDA4RsfGBhwo",
  "key41": "4JjF8C1fgp8JmrCHq26USdmPHDqS67smqExm9ymv6Xv6jzP9pbiFiNMhtzTdTvATL24USqgCqF7KZ3jZ44WwKCgq",
  "key42": "5Ho8UYLD7aLs1DLwVPibnjhA26fjxQNuudneDJavEcHVa7KR2nqE6zEvrrgezzko9tEYSJiUdAARQA6v1rwkXVKu",
  "key43": "5z9jtHDaS1U4urqhYyvcmkxGcvspeUWCHqr61tfTHnura8o43tHSJM9spx1ypW5MevnD413XMhxQCVtxR3JnYFH8",
  "key44": "2v2PaUuzm78sPpS1DRfuG1NKDUGjw3hoHBzyBv91g28tRwtfzgtocZa6zsRgb27wxquQbhquavZdaigLXmj7tLpA",
  "key45": "5F5fG72fvqEKWYTM968EuuVBEjwFzxezTrfz7F4E3RHwUrv92PMAECTy6ouC3CBoCcHJZDpW8LnqYxurBnqK2T2w",
  "key46": "2fo1wjWJXUisGA6sUgdRhMfPAdJZGrzJ4joppcFwWgbPHm3GcBbT3PminBGDLCBJ2TBUDYVnJNUjmnFdAUBge9sj",
  "key47": "3Zy8XfGfpDCuLbGHLTWZ1z75mGrcxvowhgT85t2iSWiyRnU2eUCYctZFwDqr8Gxbjn8RV2KxrfK1ySUXjsToofFR",
  "key48": "2j3qDmZBwvaGcoHgeuBAQZvDw775d6FLjYmsR5vN45KCb4uUeq9yxE6nfKPyukjEtHx95WDPuqR3rDTESo6ri31",
  "key49": "586fqM5vH7EvRoH1jyq4UJ6T4s5ewktt4R6C5QxUg2SUDzrc9MQvKH5CyXQZNygD8EEbZCKZCV7MeumnNd9Kz3fK"
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
